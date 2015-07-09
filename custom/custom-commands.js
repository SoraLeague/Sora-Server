exports.commands = {
	afk: 'away',
	away: function(target, room, user, connection, cmd) {
		if (!this.can('lock')) return false;
		if (!user.isAway) {
			var awayMessage, awayName = user.name;
			switch (cmd) {
				case: 'dindins':
					awayMessage = 'is now having din dins.';
					awayName += ' - ⒹⓘⓝⒹⓘⓝⓢ';
					break;
				case: 'busy':
					awayMessage = 'is now busy.';
					awayName += ' - ⒷⓊⓈⓎ  ';
					break;
				default:
					awayMessage = 'is now away.';
					awayName += ' - ⒶⒻⓀ   ';
			}
			var originalName = user.name;
			delete Users.get(awayName);
			user.forceRename(awayName, undefined, true);
			this.add('|raw|-- <b><font color="#000000">' + originalName + '</font color></b> ' + awayMessage + ' ' + (target ? " (" + target + ")" : ""));
			user.isAway = true;
			user.blockChallenges = true;
		}
		else {
			return this.sendReply('You are already set as away, type /back if you are now back');
		}
		user.updateIdentity();
	}
};	
