exports.commands = {
    
    staff: 'leaguemembers',
 	attendance: 'leaguemembers',
 	leaguemembers: function (target, room, user) {
		if (!this.canBroadcast()) return;
		var total = '<table><tr><th>User</th><th>Last Seen</th></tr>';
		var list = ['∆Champiön Nöah∆', '∆Chаmpion Bart∆', '∆Frontierhead∆ Risu', 'OnyxEagle', '∆Fröntier∆Blade☯', '∆E4 Abadon∆', 'Bamdee', 'ArtisteJeratt', 'NeithCass'];
		for (var i = 0; i < list.length; i++) {
			var lastseen = Users.get(list[i]) && Users.get(list[i]).connected ? '<font color = "green">Online</font>' : Core.profile.lastSeen(false, toId(list[i])).split('&nbsp;')[2];
			if (lastseen === 'Never') lastseen = '<font color = "red">Never</font>';
			
			total += '<tr><td>' + list[i] + '</td><td><center>' + lastseen + '</center></td>';
		}
		this.sendReplyBox('<center><b>Admin Team</b><br />' + total + '</table></center>');
		var total = '<table><tr><th>User</th><th>Last Seen</th></tr>';
		var list = ['∆E4 Zoro∆', '∆E4 H∆', '∆E4 Edge∆', '∆E4 Abadon∆', '∆Frontier Asch∆', '∆Frontier∆ Srewop', '∆Fröntier∆Blade☯', '∆Frontier∆ Tempest', '∆Frontier Zachary∆', '∆Frontier Meows∆'];
		for (var i = 0; i < list.length; i++) {
			var lastseen = Users.get(list[i]) && Users.get(list[i]).connected ? '<font color = "green">Online</font>' : Core.profile.lastSeen(false, toId(list[i])).split('&nbsp;')[2];
			if (lastseen === 'Never') lastseen = '<font color = "red">Never</font>';
			
			total += '<tr><td>' + list[i] + '</td><td><center>' + lastseen + '</center></td>';
		}
		this.sendReplyBox('<details><summary><b>Elite 4\'s and Frontiers</b></summary><center>' + total + '</table></details></center>');
		var total = '<table><tr><th>User</th><th>Last Seen</th></tr>';
		var list = ['∆Gym Ldr Lou∆', '∆Gym Ldr Connor∆', '∆Gym Ldr Terror∆', '∆Gym Ldr Floatzel∆', '∆Gym Ldr Poppy∆', 
			'∆Gym Ldr Leaf∆', '∆Gym Ldr Mark∆', '∆Gym Ldr Dårküs∆', '∆Gym Ldr Core∆', '∆Gym Ldr Kezyru1∆', '∆Gym Ldr Indeter∆'];
		for (var i = 0; i < list.length; i++) {
			var lastseen = Users.get(list[i]) && Users.get(list[i]).connected ? '<font color = "green">Online</font>' : Core.profile.lastSeen(false, toId(list[i])).split('&nbsp;')[2];
			if (lastseen === 'Never') lastseen = '<font color = "red">Never</font>';
			
			total += '<tr><td>' + list[i] + '</td><td><center>' + lastseen + '</center></td>';
		}
		this.sendReplyBox('<details><summary><b>Gym Leaders</b></summary><center>' + total + '</table></details></center>');
	},
};
