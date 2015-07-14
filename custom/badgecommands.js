var badgeList = {parasect:'Parasect', aegislash:'Aegislash', meowth:'Meowth', golduck:'Golduck', starly:'Starly', 
            staravia:'Staravia', starptor:'Staraptor', flannery:'Flannery', skyla:'Skyla', volkner:'Volkner', brock:'Brock', 
            bertha:'Bertha', koga:'Koga', caitlin:'Caitlin', brandon:'Brandon', lucy:'Lucy', noland:'Noland', smeargle:'Smeargle', 
            porygonz:'Porygon-Z', egg:'Egg', meme:'ℳℯღℯ'};

var commands = {
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
	
	award: 'give',
    give: function (target, room, user, connection, cmd) {
        if (user.userid !== 'frntierblade') return this.sendReply('Only Blade can give out badges.');
        target = target.split(",");
		var targetUser = target[0].trim();
        var badge = toId(target[1]);
        if (!badge || !toId(targetUser)) return this.sendReply('/badge ' + cmd + ' [user], [badge name] - Gives a specified user the specified badge.');
        if (!Users.get(targetUser) && cmd !== 'forcegivebadge') return this.sendReply('The user \'' + targetUser + '\' was not found. If you would still like to give this user a badge, use /forcegivebadge instead.');
        badge.replace(/badge/g, '');
        
        if (!(badge in badgeList)) return this.sendReply('That is not a valid badge.');
        Core.write('badges', toId(targetUser), badgeList[badge], undefined, badge);
        if (Users.get(targetUser) && Users.get(targetUser).connected) {
            Users.get(targetUser).send('|raw|Congratz! You have been awarded a badge!');
        }
        this.sendReply('You have successfully given ' + (Users.get(targetUser) ? Users.get(user).name : name) + ' the ' + badgeList[badge] + ' badge.');
    },
	
	remove: 'take',
	take: function (target, room, user, connection, cmd) {
		if (user.userid !== 'frntierblade') return this.sendReply('Only Blade can remove badges.');
        target = target.split(",");
		var targetUser = target[0].trim();
        var badge = toId(target[1]);
        if (!badge || !toId(targetUser)) return this.sendReply('/badge ' + cmd + ' [user], [badge name] - Removes a specified badge from the specified user.');
        badge.replace(/badge/g, '');
		
		if (!(badge in badgeList)) return this.sendReply('That is not a valid badge.');
		var name = Users.get(targetUser) ? Users.get(targetUser).name : targetUser;
		if (!Core.read('badges', toId(targetUser))) return this.sendReply("User " + name + " doesn't have any badges.");
		if (!Core.read('badges', toId(targetUser)), badge) return this.sendReply(name + " doesn't have the " + badgeList[badge] + " badge.");
		
		Core.Delete('badges', toId(targetUser), badge);
		this.sendReply('You have successfully removed the ' + badgeList[badge] + ' badge from ' + name + '.');
	},
	
	removeall: 'takeall',
	'delete': 'takeall',
	takeall: function (target, room, user, connection, cmd) {
		if (user.userid !== 'frntierblade') return this.sendReply('Only Blade can remove badges.');
        if (!toId(target)) return this.sendReply('/badge ' + cmd + ' [user] - Removes all badges from the specified user.');
		var name = Users.get(target) ? Users.get(target).name : target.trim();
		if (!Core.read('badges', toId(target))) return this.sendReply("User " + name + " doesn't have any badges.");
		if (!user.confirm) {
			this.sendReply('WARNING: You are about to delete ALL of ' + name + '\'s badges. If you are sure you want to do this, use this command again.');
			user.fconfirm = true;
		} else {
			Core.Delete('badges', toId(targetUser));
			this.sendReply('You have successfully removed all badges from ' + name + '.');
			user.fonfirm = false;
		}
	},
	
	display: 'show', 
	view: 'show',
	show: function (target, room, user, connection, cmd) {
		if (!this.canBroadcast()) return;
	}
};
        
