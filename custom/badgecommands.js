exports.commands = {
    givebadge: function (target, room, user, connection, cmd) {
        //if (user.userid !== 'frntierblade') return this.sendReply('Only Blade can give out badges');
        target = target.split(",");
        var badge = toId(target[0]);
        var user = target[1].trim();
        if (!badge || !toId(user)) return this.sendReply('/givebadge [badge name], [user] - Gives a specified user the specified badge.');
        if (!Users.get(user) && cmd !== 'forcegivebadge') return this.sendReply('The user \'' + user + '\' was not found. If you would still like to give this user a badge, use /forcegivebadge instead.');
        badge.replace(/badge/g, '');
        var badgeList = {parasect:'Parasect', aegislash:'Aegislash', meowth:'Meowth', golduck:'Golduck', starly:'Starly', 
            staravia:'Staravia', starptor:'Staraptor', flannery:'Flannery', skyla:'Skyla', volkner:'Volkner', brock:'Brock', 
            bertha:'Bertha', koga:'Koga', caitlin:'Caitlin', brandon:'Brandon', lucy:'Lucy', noland:'Noland', smeargle:'Smeargle', 
            porygonz:'Porygon-Z', egg:'Egg', meme:'ℳℯღℯ'};
        if (!(badge in badgeList)) return this.sendReply('That is not a valid badge.');
        Core.write('badges', toId(user), badgeList[badge], undefined, badge);
        if (Users.get(user) && Users.get(user).connected) {
            Users.get(user).send('|raw|Congratz! You have been awarded a badge!');
        }
        this.sendReply('You have successfully given ' + (Users.get(user) ? Users.get(user).name : name) + ' the ' + badgeList[badge] + ' badge.');
    }
};
        
