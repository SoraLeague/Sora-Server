exports.BattleAbilities = {

	"snowskates": {
		desc: "This Pokemon's Ice-type moves have their priority increased by 1.",
		shortDesc: "Gives priority to Ice-type moves.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.type === 'Ice') return priority + 1;
		},
		id: "snowskates",
		name: "Snow Skates",
		rating: 4.5,
		num: 9000
	},
	"turbocharged": {
		desc: "This Pokemon's Steel-type moves have their priority increased by 1.",
		shortDesc: "Gives priority to Steel-type moves.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.type === 'Steel') return priority + 1;
		},
		id: "turbocharged",
		name: "Turbo Charged",
		rating: 4.5,
		num: 9001
	},
	
	"amplify": {
		desc: "This Pokemon's Electric-type moves have their priority increased by 1.",
		shortDesc: "Gives priority to Electric-type moves.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.type === 'Electric') return priority + 1;
		},
		id: "amplify",
		name: "Amplify",
		rating: 4.5,
		num: 9002
	},
	
	"steadyaim": {
		desc: "This Pokemon's STAB moves will not miss, but all moves will have their priority decreased by 1.",
		shortDesc: "Reduces priority, but STAB moves will not miss.",
		onModifyMove: function (move, pokemon) {
			if (pokemon.hasType(move.type)) {
				move.priority -= 1;
				move.accuracy = true;
			}
		},
		id: "steadyaim",
		name: "Steady Aim",
		rating: 3.5,
		num: 9003
	},
	
	"adrenaline": {
		desc: "The priority of this Pokémon's moves will be increased by 1 while it has 1/4th of its max HP or less.",
		shortDesc: "Increases priority when the pokemon is at 1/4th of its max HP or less.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (pokemon.hp <= pokemon.maxhp / 4) return priority + 1;
		},
		id: "adrenaline",
		name: "Adrenaline",
		rating: 3,
		num: 9004
	},
	
	"godswill": {
		desc: "This Pokemon's attacks that are the same type get +1 priority, but gain 1/6 recoil.",
		shortDesc: "This Pokemon's STAB moves get +1 priority, but gain 1/6 recoil.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move.type === pokemon.typesData[0].type || move.type === pokemon.typesData[1].type) return priority + 1;
		},
		onModifyMove: function (move, pokemon) {
			if (move.type === pokemon.typesData[0].type || move.type === pokemon.typesData[1].type)
				if (!move.recoil) move.recoil = [1,6];
		},
		id: "godswill",
		name: "God's Will",
		rating: 3,
		num: 9005
	},
	
	"lightningchannel": {
		desc: "This Pokemon's thunder moves have their priority increased by 1.",
		shortDesc: "Gives priority to thunder moves.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move.id.indexOf('thunder') > -1) return priority + 1;
		},
		id: "lightningchannel",
		name: "Lightning Channel",
		rating: 4,
		num: 9006
	}
};
