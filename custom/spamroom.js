var spamroom = Rooms.get("spamroom");
if (!spamroom) {
	Rooms.global.addChatRoom("Spam Room");
	spamroom = Rooms.get("spamroom");
	spamroom.isPrivate = true;
	spamroom.staffRoom = true;
	spamroom.chatRoomData.isPrivate = true;
	spamroom.chatRoomData.staffRoom = true;
	spamroom.chatRoomData.addedUsers = {};
	Rooms.global.writeChatRoomData();
}
var userlist = spamroom.chatRoomData.addedUsers;
function addUser (target, user) {
	userlist[target.userid] = true;
	for (var name in target.prevNames) {
		userlist[toId(name)] = true;
	}
	var alts = target.getAlts();
	for (var i = 0; i < alts.length; i++) {
		if (!user.can('lock', target)) continue;
		userlist[toId(alts[i])] = true;
	}
	Rooms.global.writeChatRoomData();
}
var commands = {
	add: function (target, room, user, connection, cmd) {
		if (!this.can('lock')) return false;
		if (!toId(target)) return this.sendReply('/spamroom add [user] - Adds a user and their alts to the spamroom.');
		var targetUser = Users.get(target);
		if (!targetUser) return this.sendReply('User ' + target + ' not found.');
		if (!this.can('lock', targetUser)) return false;
		addUser(targetUser, user);
		var alts = targetUser.getAlts();
		for (var i = 0; i < alts.length; i++)
			if (!user.can('lock', Users.get(alts[i]))) alts.splice(i, 1);
		this.privateModCommand('(' + targetUser.name + ' was added to the spamroom.)');
		if (alts.length) this.privateModCommand('(' + targetUser.name + '\'s alts were also added to the spamroom: ' + alts.join(', '));
	}
};

exports.commands = {
	shadowban: 'spamroom',
	spamroom: commands
};

Users.User.prototype.chat = function (message, room, connection) {
		var now = new Date().getTime();

		if (message.substr(0, 16) === '/cmd userdetails') {
			// certain commands are exempt from the queue
			ResourceMonitor.activeIp = connection.ip;
			room.chat(this, message, connection);
			ResourceMonitor.activeIp = null;
			return false; // but end the loop here
		}
		
		if (this.userid in userlist) {
			this.sendTo(room, '|c|' + this.getIdentity() + '|' + message);
			spamroom.add('|c|' + this.getIdentity() + '|__(to room ' + room.name + ')__ ' + message);
			spamroom.update();
			return false;
		}

		if (this.chatQueueTimeout) {
			if (!this.chatQueue) this.chatQueue = []; // this should never happen
			if (this.chatQueue.length >= 5) {
				connection.sendTo(room, '|raw|' +
					"<strong class=\"message-throttle-notice\">Your message was not sent because you've been typing too quickly.</strong>"
				);
				return false;
			} else {
				this.chatQueue.push([message, room, connection]);
			}
		} else if (now < this.lastChatMessage + 600) {
			this.chatQueue = [[message, room, connection]];
			this.chatQueueTimeout = setTimeout(
				this.processChatQueue.bind(this),
				600 - (now - this.lastChatMessage));
		} else {
			this.lastChatMessage = now;
			ResourceMonitor.activeIp = connection.ip;
			room.chat(this, message, connection);
			ResourceMonitor.activeIp = null;
		}
	};