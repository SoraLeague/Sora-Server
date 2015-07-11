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
			seen('e4abadon') + '<br/>' +
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
			seen('e4h') + '<br/>' +
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
			seen('e4zoro') + '<br/>' +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#e4"><img src="http://i.imgur.com/QtECCD9.png" title="Achieved Elite 4 Status"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a><a href="http://soraleague.weebly.com/badges.html#bertha"><img src="http://i.imgur.com/MDcdCka.png" title="Bertha Badge: 5 E4 Defends"></a><a href="http://soraleague.weebly.com/badges.html#koga"><img src="http://i.imgur.com/2eC21HT.png" title="Koga Badge: 10 E4 Defends"></a></details> <br />');
	},

	/*sube4: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub E4 Position: <b><font color = FF0000>Offline</font></b></center><br />'+
		'Sub E4 <b>???</b> <br />'+
		'<b>Type:</b> <b><font color = 006b0a>???</font></b><br />'+
		'<b>Battle Rules:</b> <br />'+
		'-??? <br />'+
		'-??? <br />');
        },*/

	/////////////
	//Frontier
	/////////////

	asch: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Elite Frontier <b>Asch</b><br />' +
			'<i>"Chief Akkie, head of the meme police, serving for 38 years; no meme slips through her cracks."</i> <br />' +
			'<b>Symbol:</b> White Knight Symbol<br />' +
			'<b>Ace:</b> Crawdaunt <br />' +
			'<b>Battle Rules:</b> <br/>' +
			'-Only BL, BL2, BL3 and BL4 Pokemon may be used.<br/>' +
			'-No Mega Evolution<br />' +
			seen('frontierasch') + '<br/>' +
			'<img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif">');
	},

	blade: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><img src="http://sprites.pokecheck.org/i/494.gif"><b><font color = FF0000>∆Fröntier∆Blade☯</font></b><img src="http://sprites.pokecheck.org/i/080.gif"></center></a><br />' +
			'<center><i>"Be Stronger Than Your Strongest Excuse"</i></center> <br />' +
			'<b>Symbol:</b> Yin and Yang <br />' +
			'<b>Ace:</b> Mybro (Slowbro) <br />' +
			'<b>Battle Rules:</b> <br />' +
			'-Ability Shift Tier<br />' +
			'-No Johns<br />' +
			'<a href="http://www.smogon.com/forums/threads/ability-shift.3503100/">How Ability Shift works</a> <br />' +
			'<a href="http://www.psypokes.com/lab/abilities.php">Pokemon Ability List</a> <br />' +
			'<details><summary><b>Champion\'s Challenge Rules:</b></summary> <br />' +
			'-NU Monotype<br />' +
			'-R U Too Strong?</details><br />' +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#frontier"><img src="http://i.imgur.com/7jbhEJC.png" title="Achieved Frontier Status"></a><a href="http://soraleague.weebly.com/badges.html#efrontier"><img src="http://i.imgur.com/2iZp7Mi.png" title="Achieved Elite Frontier Status"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a><a href="http://soraleague.weebly.com/badges.html#porygon"><img src="http://i.imgur.com/bJrRxB8.png" title="Broke the server while trying to repair and implement new features, good job mate, now go fix it"></a><a href="http://soraleague.weebly.com/badges.html#smeargle"><img src="http://i.imgur.com/A8h3FJN.png" title="Smeargle the Creator: Creator of the Badge System"></a></details> <br />' +
			'<details><summary><font color = 009900><center><b>Torkoal Shrine</b></center></font></summary><center><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/torkoal.gif"></center>' +
			'<center><b>R.I.P. War Turtle</b></center> <br />' +
			'<center>1st Apostle of the All Mighty Lord Parasect</center></details><br />' +
			'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

	meows: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Meows</b><br />' +
			'<i>"Abs=Win"</i> <br />' +
			'<b>Symbol: </b>Patience <br />' +
			'<b>Ace:</b> Quagsire<br />' +
			'<b>Battle rules:</b> <br />' +
			'-OU<br />' +
			'-No Trick/Switcheroo <br />' + seen('frontiermeows'));
	},

	srewop: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Elite Frontier <b>Srewop</b><br />' +
			'<i>"You came to the wong place if you wanted a win."</i> <br />' +
			'<b>Symbol:</b> SumTingWong<br />' +
			'<b>Ace:</b> Golbat <br />' +
			'<b>Battle Rules:</b> <br/>' +
			'-RU Monotype <br/>' +
			'-No Stealth Rock <br/>' +
			'-No Knock off<br />' +
			seen('frontiersrewop') + '<br/>' +
			'<center><img src="http://play.pokemonshowdown.com/sprites/xyani/zubat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/golbat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/zubat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/gengar.gif"></center> <br />');
	},

	tempest: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Tempest</b><br />' +
			'<i>"Winning comes first. Caring about other people\'s opinions of your strategies comes never." ~ Amarillo</i> <br />' +
			'<b>Symbol:</b> World <br />' +
			'<b>Ace:</b> Pikachu<br />' +
			'<b>Battle rules:</b> <br />' +
			'-Cosplay VGC \'15 <br />' +
			'-Teams must have the same species and forms as a fictional character in the Pokemon games, anime, or manga e.g. a team based on Red\'s with Pikachu, Lapras, Snorlax, Venusaur, Charizard, and Blastoise <br />' +
			'-EV spreads, movesets, gender, and items (including Mega Stones) can be changed <br />' +
			'-Ash teams are not allowed <br />' + seen('frontiertempest'));
	},

	zachary: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Zachary</b><br/>' +
			'<i>"Can you do a few things at the same time?"</i><br/>' +
			'<b>Symbol:</b> Multitasking<br/>' +
			'<b>Ace:</b> All<br/>' +
			'<b>Battle Rules:</b><br/>' +
			'-Smogon Doubles<br />' +
			'-No hazards<br />' +
			'<details><summary><b>Champion\'s Challenge Rules:</b></summary> <br />' +
			'-Pikachu Tournamentchu <br />' +
			'-No CAP Pokemon</details> <br />' + seen('frontierzachary'));
	},

	/*subfrontier: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub Frontier Position: <b><font color = FF0000>Offline</font></b></center><br />'+
		'Sub Frontier <b>???</b> <br />'+
		'<b>Symbol:</b> ???<br />'+
		'<b>Battle Rules:</b> <br />');
        
        },*/

	//////////////
	//Gym Leaders
	//////////////

	bug: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />' +
			'<i>"???"</i> <br />' +
			'<b>Type: <font color = 65b510>Bug</font></b><br />' +
			'<b>Ace:</b> None <br />' + seen('') + '<br />');
	},

	dark: 'darkus',
	darkus: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Darkus</b><br />' +
			'Leader Ranking: <font color = FFFF00><b>2nd</font></b> <br />' +
			'<i>"But I don\'t like Bakugan."</i> <br />' +
			'<b>Type: <font color = 15012b>Dark</font></b><br />' +
			'<b>Ace:</b> Bisharp<br />' +
			seen('gymldrdrks') + '<br />' +
			'<img src="http://play.pokemonshowdown.com/sprites/xyani/victini.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/bisharp.gif"><br />' +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#e4"><img src="http://i.imgur.com/QtECCD9.png" title="Achieved Elite 4 Status"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a><a href="http://soraleague.weebly.com/badges.html#staravia"><img src="http://i.imgur.com/2UmjiLt.png" title="Staravia Badge: Two Years on Sora"></a><a href="http://soraleague.weebly.com/badges.html#bertha"><img src="http://i.imgur.com/MDcdCka.png" title="Bertha Badge: 5 E4 Defends"></a></details> <br />');
	},

	dragon: 'lou',
	lou: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Lou</b><br />' +
			'<i>"Dragon mono + Outrage = win"</i> <br />' +
			'<b>Type: <font color = 230077>Dragon</font> </b><br />' +
			'<b>Ace:</b> Latias<br />' + seen('gymldrlou'));
	},


	electric: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />' +
			'<i>"???"</i> <br />' +
			'<b>Type: <font color = d6cc0c>Electric</font></b><br />' +
			'<b>Ace:</b> ???<br />' + seen('') + '<br />');
	},


	fairy: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />' +
			'<i>"???"</i> <br />' +
			'<b>Type: <font color = ff42a0>Fairy</font></b><br />' +
			'<b>Ace: </b>???<br />');
	},

	fighting: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />' +
			'<i>"???"</i> <br />' +
			'<b>Type: <font color = d83c08>Fighting</font></b><br />' +
			'<b>Ace:</b> ??? <br />' + seen('???'));
	},


	fire: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />' +
			'<i>"???"</i> <br />' +
			'<b>Type: <font color = FF0000>Fire</font></b><br />' +
			'<b>Ace:</b> <br />' + seen(''));
	},

	flying: 'indeter',
	indeter: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Indeter</b><br />' +
			'<i>"And - I\'m off."</i> <br />' +
			'<b>Type: <font color = 7ab6ff>Flying</font></b><br />' +
			'<b>Ace:</b> Gliscor<br />' + seen('gymldrindeter'));
	},

	ghost: 'connor',
	connor: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Connor</b><br />' +
			'Leader Ranking: <font color = 5dff00><b>4th</font></b> <br />' +
			'<i>"The Further is a dark realm, filled with the tortured souls of the dead. It is a place not meant for the living."</i> <br />' +
			'<b>Type: <font color = 7814e2>Ghost</font></b><br />' +
			'<b>Ace:</b> Gengar<br />' + seen('gymldrconnor'));
	},


	grass: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />' +
			'<i>"???""</i> <br />' +
			'<b>Type: <font color = 006b0a>???</font></b> <br />' +
			'<b>Ace:</b> <br />' + seen('') + '<br />');
	},


	ground: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />' +
			'<i>"???"</i> <br />' +
			'<b>Type: <font color = 5b3a00>Ground</font></b><br />' +
			'<b>Ace:</b> <br />' + seen('') + '<br />');
	},

	ice: 'mark',
	mark: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Mark</b><br />' +
			'<i>"Hard work pays off in the end."</i> <br />' +
			'<b>Type: <font color = 00e0ac>Ice</font></b><br />' +
			'<b>Ace:</b> Don\'t Do Drugs (Mega Glalie)<br />' +
			seen('gymldrmark') + '<br/>' +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a></details><br />');
	},

	normal: 'kezyru1',
	kezyru1: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Kezyru1</b><br />' +
			'<i>"Hi"</i> <br />' +
			'<b>Type: <font color = ffa5d5>Normal</font></b><br />' +
			'<b>Ace:</b> Staraptor<br />' + seen('gymldrkezyru1'));
	},

	poison: 'poppy',
	poppy: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Poppy</b><br />' +
			'Leader Ranking: <font color = 00ff87><b>6th</font></b> <br />' +
			'<i>"It\'s you and me against the world, you\'ll see!" - Xeniathan! Destroyer of Worlds</i><br />' +
			'<b>Type: <font color = aa00ff>Poison</font></b><br />' +
			'<b>Ace:</b> Box Ghost (Gengar)<br />' + seen('gymldrpoppy'));
	},

	psychic: 'leaf',
	leaf: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Leaf</b><br />' +
			'Leader Ranking: <font color =FF0000><b>1st</font></b> <br />' +
			'<i>"The pattern repeats, will your flaws also?"</i> <br />' +
			'<b>Type: <font color = ff00b6>Psychic</font></b><br />' +
			'<b>Ace:</b> Medicham <br />' +
			seen('gymldrleaf') + '<br />' +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#frontier"><img src="http://i.imgur.com/7jbhEJC.png" title="Achieved Frontier Status"></a><a href="http://soraleague.weebly.com/badges.html#flannery"><img src="http://i.imgur.com/0ScjBhf.png" title="Flannery Badge: 10 Badge Defends"></a><a href="http://soraleague.weebly.com/badges.html#skyla"><img src="http://i.imgur.com/HMGmJ2d.png" title="Skyla Badge: 20 Badge Defends"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a></details> <br />');
	},

	rock: 'core',
	core: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Core</b><br />' +
			'Leader Ranking: <font color = 9dff00><b>3rd</font></b> <br />' +
			'<i>"There\'s always a chance for a comeback if you leave yourself open"</i> <br />' +
			'<b>Type: <font color = 472e10>Rock</font></b><br />' +
			'<b>Ace:</b> Archeops<br />' + seen('gymldrcore'));
	},

	steel: 'floatzel',
	floatzel: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Floatzel</b><br />' +
			'<i>"Jet fuel can\'t melt me"</i> <br />' +
			'<b>Type: <font color = 5e6664>Steel</font></b> <br />' +
			'<b>Ace:</b> Jirachi <br />' +
			seen('gymldrfloatzel') + '<br />' +
			'<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/aron.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/metagross-mega.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/aron.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif">');

	},

	water: 'terror',
	terror: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Terror</b> <br />' +
			'Leader Ranking: <font color = 00ce0d><b>5th</font></b> <br />' +
			'<i>"Better get out of the water because the waves are coming for you."</i> <br />' +
			'<b>Type: <font color = 0745ff>Water</font></b><br />' +
			'<b>Ace:</b> Sharpedo<br />' +
			seen('gymldrterror') + '<br />' +
			'<details><summary><b>Badges: (Click here to open)</b></summary><br />' +
			'<a href="http://soraleague.weebly.com/badges.html#ldr"><img src="http://i.imgur.com/ELFPzW8.png" title="Achieved Gym Leader Status"></a><a href="http://soraleague.weebly.com/badges.html#e4win"><img src="http://i.imgur.com/y21ENWF.png" title="E4 Conqueror: Cleared the Elite Four"></a><a href="http://soraleague.weebly.com/badges.html#starly"><img src="http://i.imgur.com/zaLhq1k.png" title="Starly Badge: One  Year on Sora"></a></details> <br />');
	}
};
