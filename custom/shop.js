//This is the shop. Pretty self explanatory :P

var shopclosed = false;

exports.commands = {
	
	getbucks: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Please check out the Shop page in the link below to see methods of earning money:<br />' +
			'- <a href="http://soraleague.weebly.com/shop.html">Shop</a><br />' +
			'</div>');
	},

	shop: function(target, room, user) {
        if (!this.canBroadcast()) return;
        if (this.broadcasting) return this.sendReplyBox('<center><b>Click <button name = "send" value = "/shop">here</button> to enter our shop!');
        var status = (!shopclosed) ? '<b>Shop status: <font color = "green">Open</font></b><br />To buy an item, type in /buy [item] in the chat, or simply click on one of the buttons.' : '<b>Shop status: <font color = "red">Closed</font></b>';
        this.sendReplyBox('<center><h3><b><u>Point Shop</u></b></h3><table border = "1" cellspacing = "0" cellpadding = "2"><tr><th>Item</th><th>Description</th><th>Price</th><th></th></tr>' +
            '<tr><td>Symbol</td><td>Buys a symbol to be placed in front of your username.</td><td>5</td><td><button name = "send", value = "/buy symbol"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Avatar</td><td>Buys a custom avatar.</td><td>25</td><td><button name = "send", value = "/buy avatar"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Card</td><td>Buys a trainer card.</td><td>40</td><td><button name = "send", value = "/buy card"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Fix</td><td>Buys the ability to edit your custom avatar or trainer card</td><td>10</td><td><button name = "send", value = "/buy fix"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Room</td><td>Buys a chatroom for you to own (with reason).</td><td>100</td><td><button name = "send", value = "/buy room"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Poof Message</td><td>Buys the ability to add a poof message of your choice into the list of poof messages.</td><td>15</td><td><button name = "send", value = "/buy poofmessage"><b>Buy!</b></button></td></tr>' +
            '<tr><td>POTD</td><td>Buys the ability to set the Pokémon of the Day. Not purchasable if there is already a POTD for the day.</td><td>5</td><td><button name = "send", value = "/buy potd"><b>Buy!</b></button></td></tr>' +
            '</table><br />' + status + '</center>');
	},

	closeshop: function(target, room, user) {
        if (!this.can('hotpatch')) return false;
        if (shopclosed) return this.sendReply('The shop is already closed.');
        shopclosed = true;
        this.sendReply('The shop is now closed.');
    },

    openshop: function(target, room, user) {
        if (!this.can('hotpatch')) return false;
        if (!shopclosed) return this.sendReply('The shop is already open.');
        shopclosed = false;
        this.sendReply('The shop is now open.');
    },
    
    give: 'award',
    givebucks: 'award',
    givepoints: 'award',
    gb: 'award',
    award: function(target, room, user, connection, cmd) {
        if (!this.can('hotpatch')) return false;
        if (!target) return this.sendReply('The correct syntax is /' + cmd + ' [user], [amount]');
        target = this.splitTarget(target);
        var targetUser = this.targetUser;
        if (!targetUser) return this.sendReply('User \'' + this.targetUsername + '\' not found.');
        if (!target) return this.sendReply('You need to mention the number of points you want to give ' + targetUser.name);
        if (isNaN(target)) return this.sendReply(target + " isn't a number, you egg.");
        if (target < 1) return this.sendReply('You cannot give ' + targetUser.name + ' anything less than 1 point!');
        Core.write('money', targetUser.userid, Number(target), '+');
        var amt = (Number(target) == 1) ? 'point' : 'points';
        var points = (Core.read('money', targetUser.userid) == 1) ? 'point' : 'points';
        targetUser.send('|popup|' + user.name + ' has given you ' + target + ' ' + points + '. You now have ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
        Rooms.rooms.staff.add(user.name + ' has given ' + targetUser.name + ' ' + target + ' ' + points + '. This user now has ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
        return this.sendReply(targetUser.name + ' was given ' + Number(target) + ' ' + points + '. This user now has ' + Core.read('money', targetUser.userid) + ' ' + amt + '.');
    },
    
    removebucks: 'remove',
    rb: 'remove',
    tb: 'remove',
    takebucks: 'remove',
    take: 'remove',
    remove: function(target, room, user, connection, cmd) {
        if (!this.can('hotpatch')) return false;
        if (!target) return this.sendReply('The proper syntax is /'+cmd+' [user], [amount]');
        target = this.splitTarget(target);
        var targetUser = this.targetUser;
		if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (!target) return this.sendReply('You need to mention the number of points you want to remove from ' + targetUser.name);
		if (isNaN(target)) return this.sendReply(target + " isn't a number, you egg.");
		if (Core.read('money', targetUser.userid) < target) return this.sendReply('You can\'t take away more points than what ' + targetUser.name + ' already has!');
        Core.write('money', targetUser.userid, Number(target), '-');
        var amt = (money.checkAmt(targetUser.userid, 'money') == 1) ? 'point' : 'points';
		var points = (target == 1) ? 'point' : 'points';
        targetUser.send('|popup|'+user.name+' has taken ' + target + ' away ' + points+' from you. You now have ' + Core.read('money', targetUser.userid) + ' '+total+'.');
        Rooms.rooms.staff.add(user.name + ' has taken away ' + target + ' ' + points + ' from '+targetUser.name+'. This user now has ' + Core.read('money', targetUser.userid) + ' '+total+'.');
        return this.sendReply('You have taken away '+ target + ' ' + points + ' from ' + targetUser.name + '. This user now has ' + Core.read('money', targetUser.userid) + ' ' + total + '.');
    },
    
    buy: function(target, room, user) {
        if (global.shopclosed === true) return this.sendReply("The shop is closed for now. Wait until it re-opens shortly.");
        target = toId(target);

        if (target === 'symbol') {
            if (user.hassymbol || user.needssymbol) return this.sendReply("You've already bought a custom symbol!");
            for (var i in Rooms.rooms)
            	if (user.locked || Rooms.rooms[i].isMuted(user)) return this.sendReply("You cannot do this while unable to talk.");
            var price = 5;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a symbol.");

            room.add(user.name + ' bought a custom symbol!');
            this.sendReply("You have bought a custom symbol. The symbol will wear off once you remain offline for more than an hour, or once the server restarts.");
            this.sendReply("Type /customsymbol [symbol] into the chat to add a symbol next to your name!");
            user.needssymbol = true;

        } else if (target === 'avatar') {
            if (user.hasavatar === true) return this.sendReply("You've just bought a custom avatar! Type in /customavatar [URL] to request it.");
	    	if (!Number(user.avatar)) return this.sendReply('You already have a custom avatar!');
            var price = 25;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a custom avatar.");

            room.add(user.name + ' bought a custom avatar!');
            Rooms.rooms.staff.add(user.name + ' has bought a custom avatar.');
            this.sendReply("You have bought a custom avatar.");
            this.sendReply("Type in /customavatar [url] to request a custom avatar. The file cannot be in the .GIF format.");
            user.hasavatar = true;

        } else if (target === 'room') {
            var price = 80;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a symbol.");

            room.add(user.name + ' bought a chatroom!');
            Rooms.rooms.staff.add(user.name + ' has bought a chatroom.');
            this.sendReply("You have bought a chatroom for you to own.");
            this.sendReply("PM an admin to create your room and make you the roomowner.");
            for (var i in Users.users) {
            	if (Users.users[i].can('hotpatch')) Users.users[i].send('|pm|~Server-Kun|'+user.name+' has bought a chatroom.')
            }

        } else if (target === 'card') {
            var price = 40;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a Trainer Card.");

            room.add(user.name + ' bought a trainer card!');
            Rooms.rooms.staff.add(user.name + ' has bought a trainer card.');
            this.sendReply("You have bought a trainer card. PM an admin to add it.");
            for (var i in Users.users) {
            	if (Users.users[i].can('hotpatch')) Users.users[i].send('|pm|~Server-Kun|'+user.name+' has bought a trainer card.')
            }

        } else if (target === 'fix') {
            var price = 10;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to buy a fix.");
            room.add(user.name + ' bought a trainer card/avatar fix!');
            Rooms.rooms.staff.add(user.name + ' has bought a fix.');
            this.sendReply("You have bought a fix for your trainer card or avatar.");
            this.sendReply("PM the changes to an admin. You may only fix either your TC or avatar at a time.");

        } else if (target === 'poofmessage') {
            var price = 15;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to add a poof message.");

            room.add(user.name + ' bought the ability to add a poof message!');
            Rooms.rooms.staff.add(user.name + ' has bought the ability to add a poof message.');
            this.sendReply("You have bought the ability to add a poof message of your own choice into the list of possible poof messages.");
            this.sendReply("The poof message you choose is added to the list of all poof messages. Your poof message may be chosen at random once when someone uses the poof command.");
            this.sendReply('All poof messages will appear in this style- "(user) (message)". For example, "' + user.name + ' died!"');
            this.sendReply("Type /addpoof [message] to add a custom poof message. The message cannot contain profanity.");
            user.buypoof = true;

        } else if (target === 'potd') {
            if (Config.potd) return this.sendReply('The Pokémon of the Day has already been set.');
            var price = 5;
            if (Core.read('money', user.userid) < price) return this.sendReply("You don't have enough money to set the POTD.");

            room.add(user.name + ' bought the ability to set the POTD!');
            Rooms.rooms.staff.add(user.name + ' has bought the ability to set the POTD.');
            this.sendReply("You have bought the ability to set the POTD of the day.");
            this.sendReply("Type /setpotd [pokémon] to set the Pokémon of the day.");
            user.setpotd = true;
        } else {
            return this.sendReply("That item isn't in the shop.");
        }
        money.removeAmt(toId(user), "money", price);
    },
    
    setpotd: function(target, room, user) {
        if (!user.setpotd) return this.sendReply("You need to buy the ability to set the Pokemon of the Day!");
        if (user.alreadysetpotd) return this.sendReply("You've already set the POTD!");

        Config.potd = target;
        Simulator.SimulatorProcess.eval('Config.potd = \'' + toId(target) + '\'');
        if (!target) return this.sendRepply("You need to choose a Pokémon to set as the POTD.");
        if (Rooms.lobby) Rooms.lobby.addRaw('<div class="broadcast-blue"><b>The Pokémon of the Day is now ' + target + '!</b><br />This Pokemon will be guaranteed to show up in random battles.</div>');
        this.logModCommand('The Pokemon of the Day was changed to ' + target + ' by ' + user.name + '.');
        user.setpotd = false;
        user.alreadysetpotd = true;
    },
    
    customsymbol: 'cs',
    cs: function(target, room, user) {
        if (user.hassymbol) return this.sendReply("You've already added a symbol to your name!");
        if (!user.needssymbol) return this.sendReply('You need to buy a custom symbol from the shop first!');
        target = target.trim();
        if (!target) return this.sendReply('You need to specify a symbol!');
        if (target.length > 1) return this.sendReply('The symbol can only be one character long.');
        var notallowed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '#', '+', '%', '@', '&', '★'];
        for (var i = 0; i < notallowed.length; i++) {
            if (target.indexOf(notallowed[i]) !== -1) return this.sendReply('For safety reasons, ' + target + ' cannot be used as a custom symbol.');
        }
        user.getIdentity = function(roomid) {
            if (this.locked) {
                return '‽' + this.name;
            }
            if (this.mutedRooms[roomid]) {
                return '!' + this.name;
            }
            return target + this.name;
        };
        user.updateIdentity();
        this.sendReply('You have successfuly changed your symbol to ' + target + '!');
        user.hassymbol = true;
        user.needssymbol = false;
    }
    
};
