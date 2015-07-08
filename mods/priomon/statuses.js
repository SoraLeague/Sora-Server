exports.battleStatuses = {
	standingguard: {
		duration: 4,
		onModifyPriority: function (priority) {
			if (!this.turns) this.turns = 2;
			this.turns--;
			if (this.turns > 0) return priority + 1;
		},
		onModifyPokemon: function (pokemon) {
			pokemon.disableMove('standguard');
		}
	}
};
