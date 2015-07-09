var fs = require('fs');
exports.commands = {

    poof: function(target, room, user) {
            if (!this.canTalk()) return;
            if (global.poofoff) return this.sendReply("Poof is currently disabled.");
            var poof = JSON.parse(fs.readFileSync('storage-files/poof.json'));
            this.add('|html|<center><b><font color = "' + randomcolor() + '">~~' + user.name + ' ' + poof[Math.floor(Math.random() * poof.length)] + '~~');
            user.disconnectAll();
    },
    
    addpoof: function(target, room, user) {
        if (!this.can('hotpatch') && !user.buypoof) return this.sendReply('You need to buy the ability to add a poof message from the shop!');
        if (!target) return this.sendReply('/addpoof [message] - Adds a poof message into the list of possible poofs. (No need to include any name at the start, just the message.)'); 
        target = target.replace(/"/g, '\"');
        if (toId(target.substring(0,1))) {
            target = target.substr(0,1).toLowerCase() + target.substr(1);
        }
        if (!fs.existsSync('storage-files/poof.json')) fs.writeFile('storage-files/poof.json', '[]');
        var poof = JSON.parse(fs.readFileSync('storage-files/poof.json'));
        for (var i in poof) {
        	if (toId(target) == toId(poof[i])) return this.sendReply('That poof message already exists!');
        }
        poof.push(target);
        fs.writeFile('storage-files/poof.json', JSON.stringify(poof, null, 1));
        return this.sendReply('"(user) ' + target + '" has been added to the list of poof messages.');
        user.buypoof = false;
    }
};

function randomcolor() {
    var colors = ['9900f2', '4ca2ff', '4cff55', 'e87f00', 'd30007', '8e8080', 'd8b00d', '01776a', '0c4787', '0c870e', '8e892c',
                '5b5931', '660c60', '9e5a99', 'c43873', '39bf39', '7c5cd6', '76d65c', '38c9c9', '2300af', '1daf00'];
    return colors[Math.floor(Math.random() * colors.length)];
}
