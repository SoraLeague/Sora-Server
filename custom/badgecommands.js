var badgeList = {parasect:'Parasect', aegislash:'Aegislash', meowth:'Meowth', golduck:'Golduck', starly:'Starly', 
            staravia:'Staravia', starptor:'Staraptor', flannery:'Flannery', skyla:'Skyla', volkner:'Volkner', brock:'Brock', 
            bertha:'Bertha', koga:'Koga', caitlin:'Caitlin', brandon:'Brandon', lucy:'Lucy', noland:'Noland', smeargle:'Smeargle', 
            porygonz:'Porygon-Z', egg:'Egg', meme:'ℳℯღℯ', gym:"Gym Badge Collector", be4:"Elite Four Conqueror", frontier:"Frontier Symbol Obtainer",
			gymrank:"Gym Leader Rank", e4rank:"Elite Four Rank", frontierrank:"Frontier Rank", efrontierrank:"Elite Frontier Rank"};
var badgeDetails = {
	parasect: 'Founder of Sora',
	aegislash: '<img src="http://i.imgur.com/aJY3eKg.png" title="Winner of a major Sora tournament">',
	meowth: '<img src="http://i.imgur.com/WmfgOXf.png" title="Server Donator">',
	golduck: '<img src="http://i.imgur.com/tMLknqb.png" title="Golduck the Meta Breaker: Reached the Hall of Fame">',
	starly: '<img src="http://i.imgur.com/zaLhq1k.png" title="Starly: One Year on Sora">',
	staravia: '<img src="http://i.imgur.com/2UmjiLt.png" title="Staravia Badge: Two Years on Sora">',
	staraptor: '<img src="http://i.imgur.com/5g3lvwi.png" title="Staraptor Badge: Three Years on Sora">',
	gym: '<img src="http://i.imgur.com/tnkW9J9.png" title="Gym Badge Collector: Obtained all 18 Gym Badges">',
	e4: '<img src="http://i.imgur.com/y21ENWF.png" title="Elite Four Conqueror: Cleared the Elite Four">',
	frontier: '<img src="http://i.imgur.com/RFkf6oV.png" title="Obtained all Frontier Symbols">',
	bertha: '<img src="http://i.imgur.com/MDcdCka.png" title="Bertha: 5 E4 Defends">',
	koga: '<img src="http://i.imgur.com/2eC21HT.png" title="Koga: 10 E4 Defends">',
	caitlin: '<img src="http://i.imgur.com/fbbyoaR.png" title="Caitlin Badge: 20  E4 Defends">',
	flannery: '<img src="http://i.imgur.com/e0ScjBhf.png" title="Flannery Badge: 10 Badge Defends">',
	skyla: '<img src="http://i.imgur.com/HMGmJ2d.png" title="Skyla Badge: 20 Badge Defends">',
	volkner: '<img src="http://i.imgur.com/Vobc91V.png" title="Volkner Badge: 35 Badge Defends">',
	brock: '<img src="http://i.imgur.com/fsyWAdn.gif" title="Brock Badge: 50 Badge Defends">',
	gymrank: '<img src="http://i.imgur.com/ELFPzW8.png" title = "Achieved Gym Leader Status">',
	e4rank: '<img src="http://i.imgur.com/QtECCD9.png" title = "Achieved Elite 4 Status">',
	frontierrank: '<img src="http://i.imgur.com/7jbhEJC.png" title="Achieved Frontier Status">',
	efrontierrank: '<img src="http://i.imgur.com/2iZp7Mi.png" title="Achieved Elite Frontier Status">',
	brandon: '<img src="http://i.imgur.com/875rXde.png" title="Brandon Badge: 7 Symbol Defends">',
	lucy: '<img src="http://i.imgur.com/djszmLN.png" title="Lucy Badge: 15 Symbol Defends">',
	noland: '<img src="http://i.imgur.com/tNKAuzy.png" title="Noland Badge: 30 Symbol Defends">',
	meme: '<img src="http://i.imgur.com/XWAudeE.gif" title="I\'m a dank memer">',
	egg: '<img src="http://i.imgur.com/dLyGYK5.png" title="This user is an egg without trying">'
	porygonz: '<img src="http://i.imgur.com/bJrRxB8.png" title="Porygon-Z: Broke the server while trying to repair it, good job mate">',
	smeargle: '<img src="http://i.imgur.com/A8h3FJN.png" title="Smeargle the Creator: Created a work of art for Sora">'
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
        if (user.userid !== 'frntierblade' && !this.can('hotpatch')) return this.sendReply('Only Frontier Blade and Admins can give badges.');
        target = target.split(",");
		var targetUser = target[0].trim();
        var badge = toId(target[1]);
        if (!badge || !toId(targetUser)) return this.sendReply('/badge ' + cmd + ' [user], [badge name] - Gives a specified user the specified badge.');
        if (!Users.get(targetUser) && cmd !== 'forcegivebadge') return this.sendReply('The user \'' + targetUser + '\' was not found. If you would still like to give this user a badge, use /forcegivebadge instead.');
        badge.replace(/badge/g, '');
        
        if (!(badge in badgeList)) return this.sendReply('That is not a valid badge.');
        Core.write('badges', toId(targetUser), badgeDetails[badge], undefined, badge);
        if (Users.get(targetUser) && Users.get(targetUser).connected) {
            Users.get(targetUser).send('|raw|Congratz! You have been awarded the ' + badgeList[badge] + ' Badge!');
        }
        this.sendReply('You have successfully given ' + (Users.get(targetUser) ? Users.get(user).name : name) + ' the ' + badgeList[badge] + ' Badge.');
    },
	
	remove: 'take',
	take: function (target, room, user, connection, cmd) {
		if (user.userid !== 'frntierblade' && !this.can('hotpatch')) return this.sendReply('Only Frontier Blade and Admins can remove badges.');
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
		if (user.userid !== 'frntierblade' && !this.can('hotpatch')) return this.sendReply('Only Frontier Blade and Admins can remove badges.');
        if (!toId(target)) return this.sendReply('/badge ' + cmd + ' [user] - Removes all badges from the specified user.');
		var name = Users.get(target) ? Users.get(target).name : target.trim();
		if (!Core.read('badges', toId(target))) return this.sendReply("User " + name + " doesn't have any badges.");
		if (!user.confirm) {
			user.confirm = true;
			this.sendReply('WARNING: You are about to delete ALL of ' + name + '\'s badges. If you\'re sure you want to do this, use this command again.');
		} else {
			Core.Delete('badges', toId(target));
			this.sendReply('You have successfully removed all badges from ' + name + '.');
			user.confirm = false;
		}
	},
	
	display: 'show', 
	view: 'show',
	show: function (target, room, user, connection, cmd) {
		if (!this.canBroadcast()) return;
		if (!toId(target)) target = user.userid;
		var file = Core.read('badges', toId(target));
		target = Users.get(target) ? Users.get(target).name : target;
		if (!file) return this.sendReplyBox(target + " doesn't have any badges yet...");
		var list = target + '\'s Badges:';
		if (this.broadcasting) list = '<summary>' + list + '</summary>';
		else list += '<br/>';
		for (var i in file) {
			list += file[i] + ' ';
		}
		if (this.broadcasting) return this.sendReplyBox('<details>' + list + '</details>');
		this.sendReplyBox(list);
	}
};
        
exports.commands = {
	givebadge: comm.give,
	takebadge: comm.take,
	removebadge: comm.take,
	removeallbadges: comm.takeall,
	badgecase: comm.show,
	viewbadges: comm.show,
	badge: 'badges',
	badges: comm
};
