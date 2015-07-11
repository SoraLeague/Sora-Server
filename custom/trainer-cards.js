function seen(user) {
	user = toId(user);
	if (Users.get(user) && Users.get(user).connected) return '';
	return '<b>Last Seen:</b> ' + Core.getLastSeen(user).split(', ')[0];
}

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
			'∆Gym Ldr Leaf∆', '∆Gym Ldr Mark∆', '∆Gym Ldr Dårküs∆', '∆Gym Ldr Core∆', '∆Gym Ldr Kezyru1∆', '∆Gym Ldr Indeter∆'
		];
		for (var i = 0; i < list.length; i++) {
			var lastseen = Users.get(list[i]) && Users.get(list[i]).connected ? '<font color = "green">Online</font>' : Core.profile.lastSeen(false, toId(list[i])).split('&nbsp;')[2];
			if (lastseen === 'Never') lastseen = '<font color = "red">Never</font>';

			total += '<tr><td>' + list[i] + '</td><td><center>' + lastseen + '</center></td>';
		}
		this.sendReplyBox('<details><summary><b>Gym Leaders</b></summary><center>' + total + '</table></details></center>');
	},

	/////////////////////
	//Admin Team
	////////////////////

	bart: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 07e1ed>∆Champion Bart∆</font></b></center></a><br />' +
			'<center><i>"My pawn. My bishop. My rook. My knight. And worst of all, I\'ve lost my queen. But I’m still not in checkmate. Not yet anyway."</i></center> <br />' +
			'<b>Ace:</b> Weavile<br />' +
			'<b>Battle Rules:</b> <br/>' +
			'-Ubers Battle <br/>' +
			'-At least 2 must be tiered lower than OU <br/>' +
			'-No Lowering opponents stats (Unless caused by attack) <br/>' +
			'-No Pokemon with a base stat over 130<br />' +
			'<center><img src="http://sprites.pokecheck.org/i/461.gif"> <img src="http://i1280.photobucket.com/albums/a482/Skarmory11/Misc%20sprites/Bart_zps03ad3a7d.png"><img src="http://play.pokemonshowdown.com/sprites/xyani/torterra.gif"></center>' +
			'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

	noah: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 430747>∆Champion Noah∆</font></b></center></a><br />' +
			'<center><i>"Need a Champion? I Noah guy."</i></center> <br />' +
			'<center><img src="http://sprites.pokecheck.org/i/134.gif"><img src="http://i.imgur.com/iu4Njdf.png"></center><br />' +
			'<b>Ace:</b> All <br />' +
			'<b>Battle Rules:</b> <br/>' +
			'-Ubers <br/>' +
			'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

	onyx: 'onyxeagle',
	onyxeagle: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font face = forte><font color =  b27300><font size= 5><center>∆OnyxEagle∆</center></font></a><br />' +
			'<center><i>"Heads or Tails? Heads, I Win; Tails, you Lose"</i></center> <br />' +
			'<b>Skilled in:</b> Rock types/ Ubers, Random Battle and OU to a certain degree.<br />' +
			'<b>History:</b> 2nd Champion of New Sora. One of the 2 people who resurrected Sora from the rubbles. <br/>' +
			'<b>Notes:</b> Resident coder of Sora, still conducts tests and registrations, offers advice. <br/>' +
			'<img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/landorus.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/heracross-mega.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyrantrum.gif">' +
			'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

	risu: 'ninjarisu',
	ninjarisu: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆Frontierhead Ninjarisu∆</b></center></a><br />' +
			'<i>"I will show you the power of the best of the worst"</i> <br />' +
			'<b>Ace:</b> Pachirisu<br />' +
			'<b>Symbol:</b> Puny Symbol<br />' +
			'<b>Rules:</b> <a href="http://www.smogon.com/forums/threads/oras-fu-winner-of-omotm-machoke-sticky-web-banned.3519286/">FU</a> <br />' +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#frontier"><img src="http://i.imgur.com/7jbhEJC.png" title="Achieved Frontier Status"></a><a href="http://soraleague.weebly.com/badges.html#e4"><img src="http://i.imgur.com/QtECCD9.png" title="Achieved Elite 4 Status"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a><a href="http://soraleague.weebly.com/badges.html#staravia"><img src="http://i.imgur.com/2UmjiLt.png" title="Staravia Badge: Two Years on Sora"></a><a href="http://soraleague.weebly.com/badges.html#smeargle"><img src="http://i.imgur.com/A8h3FJN.png" title="Smeargle the Creator: Helped develop Champion\'s Challenge and Inclement Weather Metagames"></a></details><br />' +
			'<img src="http://play.pokemonshowdown.com/sprites/xyani/pachirisu.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-romeo.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-india.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-sierra.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-uniform.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/pachirisu.gif">' +
			'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

	//////////////
	//Elite Four
	//////////////

	abadon: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Abadon</b><br />' +
			'<i>"SWIGGITY SWOOTY, I\'M COMING FOR THAT BOOTY"</i> <br />' +
			'<b>Type: <font color = 066baa>Ghost</font></b> <br />' +
			'<b>Ace:</b> Gengar<br />' +
			'<b>Battle Rules:</b> <br/>' +
			'-None <br />' +
			seen('e4abadon') +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#frontier"><img src="http://i.imgur.com/7jbhEJC.png" title="Achieved Frontier Status"></a><a href="http://soraleague.weebly.com/badges.html#e4"><img src="http://i.imgur.com/QtECCD9.png" title="Achieved Elite 4 Status"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a></details><br />' +
			'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

	h: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>H</b><br />' +
			'<i>"H4Hentai, H4Harem, H4Harassment, H4Hugs. Done checking out those sexy curves? Now it\'s time to check out my bugs. :3"</i> <br />' +
			'<b>Type: <font color =d83c08>Bug</font></b><br />' +
			'<b>Ace:</b> None <br />' +
			'<b>Battle Rules:</b> <br/>' +
			'-None<br />' +
			seen('e4h') +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#badges"><img src="http://i.imgur.com/tnkW9J9.png" title="Badge Collector: Defeat all 18 Gym Leaders"></a><a href="http://soraleague.weebly.com/badges.html#e4win"><img src="http://i.imgur.com/y21ENWF.png" title="E4 Conqueror: Cleared the Elite Four"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a><a href="http://soraleague.weebly.com/badges.html#porygon"><img src="http://i.imgur.com/bJrRxB8.png" title="Broke the server while trying to repair it, good job mate"></a><a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#flannery"><img src="http://i.imgur.com/0ScjBhf.png" title="Flannery Badge: 10 Badge Defends"></a></details> <br />');
	},

	edge: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Edge</b><br />' +
			'<i>"How can you face your problem when your problem is your face?"</i> <br />' +
			'<b>Type: <font color = 7ab6ff>Flying</font></b><br />' +
			'<b>Ace:</b> Mega Charizard-X<br />' +
			'<b>Battle Rules:</b><br />' +
			'-No Hazards<br />' + seen('e4edge'));
	},

	zoro: function (target, room, user) {
		if (!this.canBroadcast()) return;
		printCard('E4 <b>Zoro</b><br />' +
			'<i>"I am everywhere you are not."</i> <br />' +
			'<b>Type:<font color = ff007f> Psychic</font></b><br />' +
			'<b>Ace:</b> Gallade <br />' +
			'<b>Battle Rules:</b> <br/>' +
			'-None <br/>' +
			'<img src="http://sprites.pokecheck.org/i/645.gif"><img src="http://sprites.pokecheck.org/t/187.gif"><br/>' +
			seen('e4zoro') +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#e4"><img src="http://i.imgur.com/QtECCD9.png" title="Achieved Elite 4 Status"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a><a href="http://soraleague.weebly.com/badges.html#bertha"><img src="http://i.imgur.com/MDcdCka.png" title="Bertha Badge: 5 E4 Defends"></a><a href="http://soraleague.weebly.com/badges.html#koga"><img src="http://i.imgur.com/2eC21HT.png" title="Koga Badge: 10 E4 Defends"></a></details> <br />');
	}

	/*sube4: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub E4 Position: <b><font color = FF0000>Offline</font></b></center><br />'+
		'Sub E4 <b>???</b> <br />'+
		'<b>Type:</b> <b><font color = 006b0a>???</font></b><br />'+
		'<b>Battle Rules:</b> <br />'+
		'-??? <br />'+
		'-??? <br />');
        },*/
};
