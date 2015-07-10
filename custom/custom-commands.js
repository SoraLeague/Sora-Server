var fs = require('fs');
var request = require('request');

exports.commands = {
	afk: 'away',
	dindins: 'away',
	busy: 'away',
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
	}
	
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
	}
};	
