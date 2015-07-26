var badgeList = {parasect:'Parasect', aegislash:'Aegislash', meowth:'Meowth', golduck:'Golduck', starly:'Starly', 
            staravia:'Staravia', starptor:'Staraptor', flannery:'Flannery', skyla:'Skyla', volkner:'Volkner', brock:'Brock', 
            bertha:'Bertha', koga:'Koga', caitlin:'Caitlin', brandon:'Brandon', lucy:'Lucy', noland:'Noland', smeargle:'Smeargle', 
            porygonz:'<a href="http://soraleague.weebly.com/badges.html#porygon"><img src="http://i.imgur.com/bJrRxB8.png" title="Broke the server while trying to repair it, good job mate"></a>', egg:'Egg', meme:'ℳℯღℯ', gym:"Gym Badge Collector", e4:"Elite Four Conqueror", frontier:"Frontier Symbol Obtainer",
			gymrank:"Gym Leader Rank", e4rank:"Elite Four Rank", frontierrank:"Frontier Rank", efrontierrank:"Elite Frontier Rank"};
var badgeDetails = {
	parasect: 'Founder of Sora',
	aegislash: 'Won a major league tournament',
	meowth: 'Donated to the server',
	golduck: 'Reached the Hall of Fame',
	starly: '1 year on Sora',
	staravia: '2 years on Sora',
	staraptor: '3 years on Sora',
	gym: 'Obtained all 18 Gym Badges',
	e4: 'Defeated all 4 E4s',
	frontier: 'Obtained all Frontier Symbols',
	bertha: '5 E4 defends',
	koga: '10 E4 defends',
	caitlin: '20 E4 defends',
	flannery: '10 Gym Badge defends',
	skyla: '20 Gym Badge defends',
	volkner: '35 Gym Badge defends',
	brock: '50 Gym Badge defends',
	gymrank: 'Achieved Gym Leader status',
	e4rank: 'Achieved Elite Four status',
	frontierrank: 'Achieved Frontier status',
	efrontierrank: 'Achieved Elite Frontier status',
	brandon: '7 Symbol defends',
	lucy: '15 Symbol defends',
	noland: '30 Symbol defends',
	meme: 'Dank memes',
	smeargle: 'Created a work of art for Sora'
};

var comm = {
	'': 'info',
	info: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><marquee><b>Badges</b></marquee></font></a><br />' +
			'<b>What are Badges:</b><br />' +
			'Badges are prestigious achievements awarded on the user\'s trainer card and usually come with varying bucks award.<br />' +
			'They are awarded for league activity and vary in difficulty.<br />' +
			'A full list of badges can be found <a href="http://soraleague.weebly.com/badges">HERE</a> <br />' +
			'<br />' +
			'<details><summary><center><b>Test your skills here</b></center></summary><center><a href="http://soraleague.weebly.com/badges.html#parasect"><img src="http://oi61.tinypic.com/2nkoyyu.jpg" title="Parasect the God Above All"></a><br /></center></details>' +
			'<br />' +
			'<blink><font color=#FF0000><b>Notes:</b></font></blink><br />' +
			'- You MUST have a trainer card<br />' +
			'<font color=#006600>- <b>Hover over a badge for details<br />' +
			'- Click on a badge for an enlarged image and further information</b></font><br />' +
			'- Test your skills above');
	},

	help: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<strong>Badge commands (Can only be used by Frontier Blade and ~):</strong><br />' +
		'- /badgeaward or /givebadge <i>User</i>, <i>Badge Name</i> - Gives the specified badge to the specified user <br />' +
		'- /badge remove or /takebadge <i>User</i>, <i>Badge Name</i> - Removes the specified badge from the specified user <br />' +
		'- /badge removeall or /removeallbadges <i>User</i> - Removes all of the specified user\'s badges <br />' +
		'- /badges view or /badgecase <i>User</i> - Shows all the badges owned by the user, or the specified user<br />');
	},
	
	award: 'give',
    give: function (target, room, user, connection, cmd) {
        //if (user.userid !== 'frntierblade') return this.sendReply('Only Blade can give out badges.');
        target = target.split(",");
		var targetUser = target[0].trim();
        var badge = toId(target[1]);
        if (!badge || !toId(targetUser)) return this.sendReply('/badge ' + cmd + ' [user], [badge name] - Gives a specified user the specified badge.');
        if (!Users.get(targetUser) && cmd !== 'forcegivebadge') return this.sendReply('The user \'' + targetUser + '\' was not found. If you would still like to give this user a badge, use /forcegivebadge instead.');
        badge.replace(/badge/g, '');
        
        if (!(badge in badgeList)) return this.sendReply('That is not a valid badge.');
        Core.write('badges', toId(targetUser), badgeList[badge] + ': ' + badgeDetails[badge], undefined, badge);
        if (Users.get(targetUser) && Users.get(targetUser).connected) {
            Users.get(targetUser).send('|raw|Congratz! You have been awarded the ' + badgeList[badge] + ' Badge!');
        }
        this.sendReply('You have successfully given ' + (Users.get(targetUser) ? Users.get(user).name : name) + ' the ' + badgeList[badge] + ' Badge.');
    },
	
	remove: 'take',
	take: function (target, room, user, connection, cmd) {
		//if (user.userid !== 'frntierblade') return this.sendReply('Only Blade can remove badges.');
        target = target.split(",");
		var targetUser = target[0].trim();
        var badge = toId(target[1]);
        if (!badge || !toId(targetUser)) return this.sendReply('/badge ' + cmd + ' [user], [badge name] - Removes a specified badge from the specified user.');
        badge.replace(/badge/g, '');
		
		if (!(badge in badgeList)) return this.sendReply('That is not a valid badge.');
		var name = Users.get(targetUser) ? Users.get(targetUser).name : targetUser;
		if (!Core.read('badges', toId(targetUser))) return this.sendReply("User " + name + " doesn't have any badges.");
		if (!Core.read('badges', toId(targetUser), badge)) return this.sendReply(name + " doesn't have the " + badgeList[badge] + " badge.");
		
		Core.Delete('badges', toId(targetUser), badge);
		this.sendReply('You have successfully removed the ' + badgeList[badge] + ' badge from ' + name + '.');
	},
	
	removeall: 'takeall',
	'delete': 'takeall',
	takeall: function (target, room, user, connection, cmd) {
		//if (user.userid !== 'frntierblade') return this.sendReply('Only Blade can remove badges.');
        if (!toId(target)) return this.sendReply('/badge ' + cmd + ' [user] - Removes all badges from the specified user.');
		var name = Users.get(target) ? Users.get(target).name : target.trim();
		if (!Core.read('badges', toId(target))) return this.sendReply("User " + name + " doesn't have any badges.");
		if (!user.confirm) {
			user.fconfirm = true;
			this.sendReply('WARNING: You are about to delete ALL of ' + name + '\'s badges. If you\'re sure you want to do this, use this command again.');
		} else {
			Core.Delete('badges', toId(target));
			this.sendReply('You have successfully removed all badges from ' + name + '.');
			user.fonfirm = false;
		}
	},
	
	display: 'show', 
	view: 'show',
	show: function (target, room, user, connection, cmd) {
		if (!this.canBroadcast()) return;
		if (!toId(target)) target = user.userid;
		var file = Core.read('badges', toId(target));
		console.log(file);
		target = Users.get(target) ? Users.get(target).name : target;
		if (!file) return this.sendReplyBox(target + " doesn't have any badges yet...");
		var list = target + '\'s Badges:<br/>';
		for (var i in file) {
			list += '<img src="" title = "' + file[i] + '">';
		}
		this.sendReplyBox(list);
	}
};
        
exports.commands = {
	givebadge: comm.give,
	takebadge: comm.take,
	removebadge: comm.take,
	removeallbadges: comm.removeall,
	badgecase: comm.view,
	viewbadges: comm.view,
	badge: 'badges',
	badges: comm
};
