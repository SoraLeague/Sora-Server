var fs = require('fs');
var request = require('request');

exports.commands = {
	afk: 'away',
	dindins: 'away',
	busy: 'away',
	away: function (target, room, user, connection, cmd) {
		if (!this.can('lock')) return false;
		if (!user.isAway) {
			var awayMessage, awayName = user.name;
			switch (cmd) {
			case 'dindins':
				awayMessage = 'is now having din dins.';
				awayName += ' - ⒹⓘⓝⒹⓘⓝⓢ';
				break;
			case 'busy':
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
		} else {
			return this.sendReply('You are already set as away, type /back if you are now back');
		}
		user.updateIdentity();
	},

	seen: 'lastseen',
	lastseen: function (target, room, user, connection, cmd) {
		if (!this.canBroadcast()) return;
		target = Users.getExact(target) ? Users.getExact(target).name : target;
		if (!toId(target) || toId(target) === user.userid) target = user.name;

		var format = function (date, word) {
			if (Math.floor(date) === 0) return '';
			if (Math.floor(date) !== 1) return date + ' ' + word + "s";
			return date + ' ' + word;
		}
		var seen = Core.getLastSeen(toId(target));
		if (seen === 'never') return this.sendReplyBox(target + ' has <font color = "red">never</font> been seen online.');
		if (Users.getExact(target) && Users.getExact(target).connected) return this.sendReplyBox(target + ' is currently <font color = "green">online</font>. This user has stayed online for ' + seen + '.');
		return this.sendReplyBox(target + ' was last seen ' + seen + ' ago.');
	},

	registered: 'regdate',
	regdate: function (target, room, user, connection, cmd) {
		if (!toId(target)) return this.sendReply("'" + target + "' is not a valid username.");
		if (!toId(target).length > 18) return this.sendReply('Usernames can only contain 18 characters at the max.');
		if (!this.canBroadcast()) return;

		var path = "http://pokemonshowdown.com/users/" + toId(target);
		var self = this;

		request(path, function (error, response, body) {
			if (error || response.statusCode === 404) {
				self.sendReplyBox(target + ' is not registered.');
				room.update();
				return;
			}
			var date = body.split('<small>')[1].split('</small>')[0].substr(17);
			if (!date) self.sendReplyBox(target + ' is not registered.');
			else self.sendReplyBox(target + ' was registered on ' + date);
			room.update();
		});
	},

	addsymbols: 'symbols',
	symbols: function (target, room, user) {
		if (!this.can('warn')) {
			this.sendReply('You need to be a league member to be able to use this command.');
			return false;
		}
		if (user.name.indexOf('∆') === 0 && user.name.lastIndexOf('∆') === (user.name.length - 1)) return this.sendReply("You already have your league symbols on.");
		if (user.name.indexOf('∆') == 0) {
			user.forceRename(user.name + '∆', undefined, true);
		} else if (user.name.lastIndexOf('∆') == (user.name.length - 1)) {
			user.forceRename('∆' + user.name, undefined, true);
		} else {
			user.forceRename('∆' + user.name + '∆', undefined, true);
		}
		return this.sendReply('Your league symbols have been added.');
	},

	sprite: function (target, room, user, connection, cmd) {
		if (!this.canBroadcast()) return;
		if (!toId(target)) return this.sendReply('/sprite [Pokémon] - Allows you to view the sprite of a Pokémon');
		target = target.toLowerCase().split(',');
		var alt = '';
		var type = toId(target[1]);
		var sprite = target[0].trim();
		var url;
		if (type === 'shiny') url = 'http://play.pokemonshowdown.com/sprites/xyani-shiny/';
		else if (type === 'back') url = 'http://play.pokemonshowdown.com/sprites/xyani-back/';
		else if (type === 'backshiny' || type === 'shinyback') url = 'http://play.pokemonshowdown.com/sprites/xyani-back-shiny/';
		else url = 'http://play.pokemonshowdown.com/sprites/xyani/';

		if (Number(sprite[sprite.length - 1]) && !toId(sprite[sprite.length - 2])) {
			alt = '-' + sprite[sprite.length - 1];
			sprite = sprite.substr(0, sprite.length - 1);
			url = 'http://www.pkparaiso.com/imagenes/xy/sprites/animados/';
		}
		var main = target[0].split(',');
		if (Tools.data.Pokedex[toId(sprite)]) {
			sprite = Tools.data.Pokedex[toId(sprite)].species.toLowerCase();
		} else {
			var correction = Tools.dataSearch(toId(sprite));
			if (correction && correction.length) {
				for (var i = 0; i < correction.length; i++) {
					if (correction[i].id !== toId(sprite) && !Tools.data.Aliases[toId(correction[i].id)] && !i) {
						if (!Tools.data.Pokedex[toId(correction[i])]) continue;
						if (!Tools.data.Aliases[toId(sprite)]) this.sendReply("There isn't any Pokémon called '" + sprite + "'... Did you mean '" + correction[0].name + "'?\n");
						sprite = Tools.data.Pokedex[correction[0].id].species.toLowerCase();
					}
				}
			} else {
				return this.sendReply("There isn\'t any Pokémon called '" + sprite + "'...");
			}
		}
		var self = this;
		require('request').get(url + sprite + alt + '.gif').on('error', function () {
			self.sendReply('The sprite for ' + sprite + alt + ' is unavailable.');
		}).on('response', function (response) {
			if (response.statusCode == 404) return self.sendReply('The sprite for ' + sprite + alt + ' is currently unavailable.');
			self.sendReply('|html|<img src = "' + url + sprite + alt + '.gif">');
		});
	},

	stafflist: function (target, room, user) {
		var buffer = {
			admins: [],
			leaders: [],
			mods: [],
			drivers: [],
			voices: []
		};

		var staffList = fs.readFileSync(path.join('./config/usergroups.csv'), 'utf8').split('\n');
		var numStaff = 0;
		var staff;

		var len = staffList.length;
		while (len--) {
			staff = staffList[len].split(',');
			if (staff.length >= 2) numStaff++;
			if (staff[1] === '~') {
				buffer.admins.push(staff[0]);
			}
			if (staff[1] === '&') {
				buffer.leaders.push(staff[0]);
			}
			if (staff[1] === '@') {
				buffer.mods.push(staff[0]);
			}
			if (staff[1] === '%') {
				buffer.drivers.push(staff[0]);
			}
			if (staff[1] === '+') {
				buffer.voices.push(staff[0]);
			}
		}

		buffer.admins = buffer.admins.join(', ');
		buffer.leaders = buffer.leaders.join(', ');
		buffer.mods = buffer.mods.join(', ');
		buffer.drivers = buffer.drivers.join(', ');
		buffer.voices = buffer.voices.join(', ');

		this.popupReply('Administrators:\n--------------------\n' + buffer.admins + '\n\nLeaders:\n-------------------- \n' + buffer.leaders + '\n\nModerators:\n-------------------- \n' + buffer.mods + '\n\nDrivers:\n--------------------\n' + buffer.drivers + '\n\nVoices:\n-------------------- \n' + buffer.voices + '\n\n\t\t\t\tTotal Staff Members: ' + numStaff);
	},

	//League related stuff
	hos: 'banlist',
	hallofshame: 'banlist',
	banlist: function (target, room, user) {
		if (this.broadcasting) return;
		this.sendReplyBox('<b>The Sora League Server Hall of Shame (Banlist):</b><br />' +
			'The following users are to be banned on sight, no exceptions. Most of them have dynamic ips, but even so, the first 2 set of numbers should be the same<br />' +
			'117.193.61.37/115.250.65.134 - Adipravar/lingam/China Guy<br />' +
			'79.216.58.98 - MegaschoolGirl/Jessica albas ass/Gym Leader Beer<br />' +
			'110.143.22.35 - Whelplo/Lord Noxot<br />' +
			'81.204.176.142<br />' +
			'68.144.221.250 - modsdd911/cocksucker3000<br />' +
			'65.9.122.140 - XVid<br />' +
			'188.247.72.73 - elite four pkmn/chatot<br />' +
			'50.117.78.134<br />' +
			'109.123.112.118<br />' +
			'70.56.251.194 - PEEEENNNNUUUSSSS<br />' +
			'184.148.86.83 - POOOOP BRO/MrGaminganimation<br />' +
			'76.103.152.157 - Thafuckingnigga<br />' +
			'110.174.150.196 - Nigerian Nuts<br />' +
			'77.209.58.47 - Spammer 008/flood of water<br />' +
			'107.3.135.54 - ilikewings<br />' +
			'24.118.0.134 - Colgate SHIT<br />' +
			'89.148.36.189 - gym leader Zaga<br />' +
			'204.108.212.233 - gawkypath<br />' +
			'95.211.174.70<br />' +
			'112.207.89.115<br />' +
			'69.171.166.93 - Efficient<br />' +
			'64.21.211.34 - Psychic kid<br />' +
			'217.123.61.20 - Sjado<br />' +
			'96.255.1.236<br />' +
			'12.204.68.50 - Denver Broncos<br />' +
			'173.8.74.161 - SawkTooOp<br />' +
			'149.254.224.226<br />' +
			'23.17.238.53 -Zarif<br />' +
			'74.88.1.127 -Unicode spammer (Eldes)<br />' +
			'23.30.142.86 -Carl Jones<br />' +
			'94.79.237.137 -Champiön Greninja<br />' +
			'71.191.144.42 -Imp Dawnmidst<br />' +
			'104.157.62.151 -ZYGA<br />' +
			'37.58.52.99 -Snowking<br />' +
			'222.127.85.53 -Galactic Azir<br />' +
			'76.100.209.92 -OgreLordVagina<br />' +
			'31.7.62.170 -Dan <br />' +
			'71.41.165.94 -yDante <br />' +
			'62.140.132.13 -Aidan <br />' +
			'Shame on them!');
	},

	join: function (target, room, user, connection) {
		if (!target) return false;
		var targetRoom = Rooms.get(target) || Rooms.get(toId(target));
		if (!targetRoom) {
			return connection.sendTo(target, "|noinit|nonexistent|The room '" + target + "' does not exist.");
		}
		if (targetRoom.isPrivate && !user.named) {
			return connection.sendTo(target, "|noinit|namerequired|You must have a name in order to join the room '" + target + "'.");
		}
		if (!user.joinRoom(targetRoom || room, connection)) {
			return connection.sendTo(target, "|noinit|joinfailed|The room '" + target + "' could not be joined.");
		}
		//If you need to add another IP or host, add a comma after the last element of the array below, and enter
		//the IP/Host in single or double quotes. Adding a portion of an IP would be acceptable too, since this
		//filter checks if a user's IP or host contains any of the blacklisted IPs or hosts, rather than
		//looking for an exact match
		var blacklist = ["dhcp-077-250-225-247.chello.nl", "c-76-100-209-92.hsd1.md.comcast.net", "zenmate",
			"74.88.1.127", "27.122.15.28", "mx-ll-223.205.20-59.dynamic.3bb.co.th", "50-108-108-125.adr01.mskg.mi.frontiernet.net",
			"cpe-67-253-120-124.maine.res.rr.com", "62.140.132.94", "62.140.132.19", "50.84.151.157", "67.164.32.244",
			"117.216.41.194", "CPE-155-143-4-109.vic.bigpond.net.au", "94.254.0.55", "108.61.179.200.vultr.com",
			"ool-4573a317.dyn.optonline.net", "69.115.163.23", "173.30.53.93", "71.41.165.94",
			"bb116-15-8-217.singnet.com.sg", "62.140.132.13", "103-10-199-146.pacswitch.com", "116.14.185.162"
		];
		for (var i = 0; i < blacklist.length; i++) {
			if (user.latestHost.indexOf(blacklist[i]) > -1 || user.latestIp.indexOf(blacklist[i]) > -1) {
				user.popup('You are on the Sora League banlist or are using a Proxy. GET REKT SON.');
				user.ban();
			}
		}
	},

	chall: 'challenge',
	challenge: function (target, room, user, connection) {
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.popupReply("The user '" + this.targetUsername + "' was not found.");
		}
		if (targetUser.blockChallenges && !user.can('bypassblocks', targetUser)) {
			return this.popupReply("The user '" + this.targetUsername + "' is not accepting challenges right now.");
		}
		if (Config.modchat.pm) {
			var userGroup = user.group;
			if (Config.groups.bySymbol[userGroup].rank < Config.groups.bySymbol[Config.modchat.pm].rank) {
				var groupName = Config.groups.bySymbol[Config.modchat.pm].name || Config.modchat.pm;
				this.popupReply("Because moderated chat is set, you must be of rank " + groupName + " or higher to challenge users.");
				return false;
			}
		}
		if (toId(target) == 'leaguebattle') {
			if (!user.can('warn') && !targetUser.can('lock')) return this.popupReply('Only Gym Leaders or higher can be challenged in this format.');
			else if (user.can('warn') && targetUser.can('lock')) return this.popupReply('Only challengers can be challenged in this format.');
		}
		user.prepBattle(target, 'challenge', connection, function (result) {
			if (result) user.makeChallenge(targetUser, target);
		});
	},

	rules: 'rule',
	rules: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Please follow the rules:<br />' +
			'- <a href="http://soraleague.weebly.com/rules.html">Sora League rules</a><br />' +
			'</div>');
	},


	battlefrontier: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b>Sora Battle Frontier</b><br />' +
			'<i>"Welcome to the Sora Battle Frontier! Challenge us if you Dare."</i> <br />' +
			'<b>Requirements:</b> 8 Badges<br />' +
			'<b>Rules:</b> The battle frontier may be challenged after collecting 8 gym badges and is needed to enter the Hall of Fame. You must beat 7 frontiers (Frontier Head needs to be the last Frontier battle and teams may be changed after each game to fit the next Battle Frontiers set of rules). You can not use Super Effective type pokemon against Mono-Type frontier brains. The same frontier may be challenged once every 24 hours.The Challenger must choose a partner Pokemon that must be present in all Frontier challenges.<br/>');
	},

	site: 'site',
	site: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is The Sora League Website:<br />' +
			'- <a href="http://soraleague.weebly.com/index.html">Sora League Site</a><br />' +
			'</div>');
	},

	incweather: 'incweather',
	incweather: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a detailed explanation of the format Inclement Weather:<br />' +
			'- <a href="http://soraleague.weebly.com/inclement-weather.html">Inclement Weather</a><br />' +
			'</div>');
	},

	priomons: 'priomons',
	priomons: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a detailed explanation of the format Priomons:<br />' +
			'- <a href="http://soraleague.weebly.com/priomons.html">Priomons</a><br />' +
			'</div>');
	},

	pokemonsandbox: 'pokemonsandbox',
	pokemonsandbox: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a detailed explanation of the format Pokemon Sandbox:<br />' +
			'- <a href=http://soraleague.weebly.com/pokemon-sandbox.html">Pokemon Sandbox</a><br />' +
			'</div>');
	},

	championschallenge: 'championschallenge',
	championschallenge: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a detailed explanation of the format Champion\'s Challenge:<br />' +
			'- <a href="http://soraleague.weebly.com/champions-challenge.html">Champion\'s Challenge</a><br />' +
			'</div>');
	},

	events: 'events',
	events: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of events held in The Sora League:<br />' +
			'- <a href="http://soraleague.weebly.com/events.html">Sora League Events</a><br />' +
			'</div>');
	},

	gymtrainers: 'gym trainers',
	gymtrainers: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of Sora League Gym Trainers:<br />' +
			'- <a href="http://soraleague.weebly.com/gym-trainers.html">Sora League Gym Trainers</a><br />' +
			'</div>');
	},

	gymleaders: 'gym leaders',
	gymleaders: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of Sora League Gym Leaders:<br />' +
			'- <a href="http://soraleague.weebly.com/gym-leaders.html">Sora League Gym Leaders</a><br />' +
			'</div>');
	},

	elitefour: 'e4',
	elitefour: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of Sora League Elite Four:<br />' +
			'- <a href="http://soraleague.weebly.com/elite-four.html">Sora League Elite Four</a><br />' +
			'</div>');
	},

	champions: 'champions',
	champions: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of Sora League Champions:<br />' +
			'- <a href="http://soraleague.weebly.com/champions.html">Sora League Champions</a><br />' +
			'</div>');
	},

	frontiers: 'frontiers',
	frontiers: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of Sora League Frontier Brains:<br />' +
			'- <a href="http://soraleague.weebly.com/frontier.html">Sora League Frontier Brains</a><br />' +
			'</div>');
	},

	sidemissions: 'sidemissions',
	sidemissions: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Here is a list of Sora League Side Missions:<br />' +
			'- <a href="http://soraleague.weebly.com/side-missions.html">Sora League Side Missions</a><br />' +
			'</div>');
	},

	quoteoftheday: 'qotd',
	qotd: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b>Quote of the Day:</b><br />' +
			'This command will display genius quotes until another quote tops it!<br />' +
			'"I\'m better as an E4." - Matt 2014<br />' +
			'"you have been hour munted by demon lrod helix" - Artiste Jeratt 9/7/14<br />' +
			'"Oh boy, how I love women. Golly gosh, I really do love vajigglejaggle. If only I could express how much I loved melons. Gee whizz." -Gym Ldr Eska 19/7/14<br />' +
			'"there can only be one asch, but anyone can be an aschhole" -E4 Cocoa 17/8/14<br /> ' +
			'"Drizzle Damp Rock is broken, but apparently the flying Rabbit Hedgehog from Ubers is okay." -∆Champiön Nöah∆ 1/9/14 <br />' +
			'"The thing about electric types is you always gotta wear a rubber"-∆E4 Vanilla∆ 6/9/14<br />' +
			'"Umbreon is dark?"-∆E4 Arjunb∆ 30/11/14<br />' +
			'"Isn\'t Color Change and protean the same thing?" -∆Frontier∆ Nova 15/12/14<br />' +
			'"Smogon pretty much did the Treaty of Versailles to Water" -∆Champiön Nöah∆ 12/1/15<br />' +
			'"Chief Akkie, head of the meme police, serving for 38 years; no meme slips through her cracks." -Eska and Desna 14/3/15<br />' +
			'</div>');
	}
};
