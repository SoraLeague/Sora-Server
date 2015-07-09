//This is the shop. Pretty self explanatory :P

var shopclosed = false;

exports.commands = {

	shop: function(target, room, user) {
        if (!this.canBroadcast()) return;
        if (this.broadcasting) return this.sendReplyBox('<center><b>Click <button name = "send" value = "/shop">here</button> to enter our shop!');
        var status = (!shopclosed) ? '<b>Shop status: <font color = "green">Open</font></b><br />To buy an item, type in /buy [item] in the chat, or simply click on one of the buttons.' : '<b>Shop status: <font color = "red">Closed</font></b>';
        this.sendReplyBox('<center><h3><b><u>Point Shop</u></b></h3><table border = "1" cellspacing = "0" cellpadding = "2"><tr><th>Item</th><th>Description</th><th>Price</th><th></th></tr>' +
            '<tr><td>Symbol</td><td>Buys a symbol to be placed in front of your username.</td><td>5</td><td><button name = "send", value = "/buy symbol"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Color</td><td>Buys the ability to change your username color in the chat.</td><td>15</td><td><button name = "send", value = "/buy color"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Avatar</td><td>Buys a custom avatar.</td><td>25</td><td><button name = "send", value = "/buy avatar"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Anim Avatar</td><td>Buys an animated custom avatar.</td><td>40</td><td><button name = "send", value = "/buy animavatar"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Card</td><td>Buys a trainer card.</td><td>40</td><td><button name = "send", value = "/buy card"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Fix</td><td>Buys the ability to edit your custom avatar or trainer card</td><td>10</td><td><button name = "send", value = "/buy fix"><b>Buy!</b></button></td></tr>' +
            '<tr><td>Room</td><td>Buys a chatroom for you to own (with reason).</td><td>80</td><td><button name = "send", value = "/buy room"><b>Buy!</b></button></td></tr>' +
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
    }
};
