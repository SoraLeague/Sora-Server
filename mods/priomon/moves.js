exports.BattleMovedex = {
              "flameshot": {
		num: 2000,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Flame Shot",
		isViable: true,
		name: "Flame Shot",
		pp: 30,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Fire"
	      },
	      "sapblast": {
		num: 2001,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Sap Blast",
		isViable: true,
		name: "Sap Blast",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Grass"
	      },
	      "kineticforce": {
		num: 2002,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Kinetic Force",
		isViable: true,
		name: "Kinetic Force",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Psychic"
	      },
	      "stonespine": {
		num: 2003,
		accuracy: 90,
		basePower: 55,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Stone Spine",
		isViable: true,
		name: "Stone Spine",
		pp: 16,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Rock"
	      },
	      "dracocrash": {
		num: 2004,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Draco Crash",
		isViable: true,
		name: "Draco Crash",
		pp: 8,
		priority: 2,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Dragon"
	      },
	      "venomstrike": {
		num: 2005,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first, 30% chance to badly poison the target.",
		id: "Venom Strike",
		name: "Venom Strike",
		pp: 16,
		priority: 1,
		isContact: true,
		secondary: {
			chance: 30,
			status: 'tox'
		},
		target: "normal",
		type: "Poison"
	      },
	      "nervepulse": {
		num: 2006,
		accuracy: 90,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first. 100% chance to land a critical hit.",
		id: "Nerve Pulse",
		name: "Nerve Pulse",
		pp: 16,
		priority: 1,
		willCrit: true,
		secondary: false,
		target: "normal",
		type: "Electric"
	      },
	      "divingcharge": {
		num: 2007,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1. Deals 25% recoil.",
		shortDesc: "Usually goes first.",
		id: "Diving Charge",
		isViable: true,
		name: "Diving Charge",
		pp: 24,
		priority: 1,
		isContact: true,
		recoil: [25, 100],
		secondary: false,
		target: "normal",
		type: "Flying"
	      },
	      "tremorshock": {
		num: 2008,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first. Reduces Stats to neutral.",
		id: "Tremor Shock",
		isViable: true,
		name: "Tremor Shock",
		pp: 16,
		priority: 1,
		onHit: function (target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: false,
		target: "normal",
		type: "Ground"
	      },
	      "fairywind": {
		num: 584,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first.",
		id: "fairywind",
		name: "Fairy Wind",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Fairy"
	      },
	      "twineedle": {
		num: 41,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target and hits twice, with each hit having a 20% chance to poison it. If the first hit breaks the target's Substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison. Usually goes first.",
		id: "twineedle",
		name: "Twineedle",
		pp: 16,
		priority: 1,
		multihit: [2, 2],
		secondary: {
			chance: 20,
			status: 'psn'
		},
		target: "normal",
		type: "Bug"
	      },
	      "corrosion": {
		num: 2009,
		accuracy: 100,
		basePower: 10,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first, 30% chance to badly poison the target.",
		id: "Corrosion",
		name: "Corrosion",
		pp: 16,
		priority: 1,
		volatileStatus: 'partiallytrapped',
		onModifyMove: function (move) {
			if (move.type in {'Poison':1}) {
				move.affectedByImmunities = false;
			}
		},
		secondary: false,
		target: "normal",
		type: "Poison"
	      },
	      "frostbite": {
		num: 2010,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes one adjacent target to fall asleep at the end of the next turn. If the target is still on the field and does not have a major status problem at that time, it freezes, and this effect cannot be prevented by Safeguard or Substitute. Fails if the target cannot freeze or if it already has a major status problem. Pokemon protected by Magic Coat or the Ability Magic Bounce are unaffected and instead use this move themselves.",
		shortDesc: "Freezes the target after 1 turn. Usually goes last.",
		id: "Frost Bite",
		isViable: true,
		name: "Frost Bite",
		pp: 8,
		priority: -5,
		isBounceable: true,
		volatileStatus: 'frostbite',
		onTryHit: function (target) {
			if (target.status || !target.runImmunity('frz')) {
				return false;
			}
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onStart: function (target, source) {
				this.add('-start', target, 'move: Frost Bite', '[of] ' + source);
			},
			onEnd: function (target) {
				target.trySetStatus('frz');
			}
		},
		secondary: false,
		target: "normal",
		type: "Ice"
	      },
	      "perplex": {
		num: 2011,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Does not check accuracy. Causes one adjacent target to become confused. Pokemon protected by Magic Coat or the Ability Magic Bounce are unaffected and instead use this move themselves.",
		shortDesc: "Usually goes first.",
		id: "Perplex",
		name: "Perplex",
		pp: 8,
		priority: 1,
		volatileStatus: 'confusion',
		secondary: false,
		target: "normal",
		type: "Psychic"
	      },
	      "frostbite": {
		num: 248,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Doom Desire is already in effect for the target's position.",
		shortDesc: "Hits two turns after being used.",
		id: "frostbite",
		name: "Frost Bite",
		pp: 10,
		priority: -5,
		flags: {},
		isNotProtectable: true,
		isFutureMove: true,
		onTryHit: function (target, source) {
			source.side.addSideCondition('futuremove');
			if (source.side.sideConditions['futuremove'].positions[source.position]) {
				return false;
			}
			source.side.sideConditions['futuremove'].positions[source.position] = {
				duration: 3,
				move: 'frostbite',
				targetPosition: target.position,
				source: source,
				moveData: {
					basePower: 0,
					onHit: function (target) {
						target.trySetStatus('frz');
					}, 
					category: "Status",
					type: 'Ice'
				}
			};
			this.add('-start', source, 'move: Frost Bite');
			return null;
		}
	},
	"standguard": {
		num: 182,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard. Fails if the user moves last this turn.",
		shortDesc: "Prevents moves from affecting the user this turn.",
		id: "standguard",
		isViable: true,
		name: "Stand Guard",
		pp: 10,
		priority: 4,
		flags: {},
		volatileStatus: 'protect',
		stallingMove: true, // Note: stallingMove is not used anywhere.
		onPrepareHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
			pokemon.addVolatile('standingguard');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit: function (target, source, move) {
				if (move.breaksProtect) {
					target.removeVolatile('Protect');
					return;
				}
				if (move && (move.target === 'self' || move.isNotProtectable)) return;
				this.add('-activate', target, 'Protect');
				var lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return null;
			}
		},
		secondary: false,
		target: "self",
		type: "Normal"
	},
	"quicksand": {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, all active Pokemon with lower Speed will move before those with higher Speed, within their priority brackets. If this move is used during the effect, the effect ends.",
		shortDesc: "For 3 turns, .",
		id: "quicksand",
		isViable: true,
		name: "Quicksand",
		pp: 5,
		priority: 0,
		flags: {nonsky: 1},
		onHitField: function (target, source, effect) {
			if (this.pseudoWeather['quicksand']) {
				this.removePseudoWeather('quicksand', source, effect, '[of] ' + source);
			} else {
				this.addPseudoWeather('quicksand', source, effect, '[of] ' + source);
			}
		},
		effect: {
			duration: 5,
			onStart: function (target, source) {
				this.add('-fieldstart', 'move: Quicksand', '[of] ' + source);
			},
			onModifySpe: function (speMod, pokemon) {
				if (pokemon.types[0] !== 'Ground' && pokemon.runImmunity('Ground'))
					if (pokemon.types[1] !== 'Ground') return this.chain(speMod, 0.5);
			},
			onModifyPokemon: function (pokemon) {
				if (pokemon.types[0] !== 'Ground' && pokemon.runImmunity('Ground'))
					if (pokemon.types[1] !== 'Ground') pokemon.tryTrap();
			},
			onAccuracy: function (accuracy, target, source, move) {
				if (move.id in {gust: 1, defog: 1, hurricane: 1, surf: 1, muddywater: 1, rapidspin: 1, whirlwind: 1}) {
					this.removePseudoWeather('quicksand');
					return true;
				}
			},
			onResidualOrder: 23,
			onEnd: function () {
				this.add('-fieldend', 'move: Quicksand');
			}
		},
		secondary: false,
		target: "all",
		type: "Ground"
	},
	"defrost": {
		num: 487,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the user to become a Water and Ghost type. Fails if the user is not an Aurorus.",
		shortDesc: "Changes the user's type(s) to Water/Ghost.",
		id: "defrost",
		name: "Defrost",
		pp: 5,
		priority: 1,
		flags: {snatch: 1},
		isSnatchable: true,
		onTry: function (pokemon) {
			if (pokemon.template.name !== 'Aurorus') {
				this.add('-fail', pokemon, 'move: Defrost');
				return null;
			}
		},
		onHit: function (target) {
			if (target.hasType('Water') && target.hasType('Ghost')) return false;
			if (!target.setType('Water')) return false;
			this.add('-start', target, 'typechange', 'Water/Ghost');
			target.typesData = [];
			target.typesData[0] = {
				type: 'Water',
				suppressed: false,
				isAdded: true
			};
			target.typesData[1] = {
				type: 'Ghost',
				suppressed: false,
				isAdded: true
			};
			target.cureStatus();
		},
		secondary: false,
		target: "self",
		type: "Water"
	},
	"originroar": {
		num: 46,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack, Defense, Special Attack, and Special Defense, and curses the user. Fails if not used by Arcanine.",
		shortDesc: "Raises user's Atk, Def, Sp.Atk, Sp.Def, and Speed. Curses user. Fails if not used by Arcanine.",
		id: "originroar",
		isViable: true,
		name: "Origin Roar",
		pp: 5,
		priority: 1,
		flags: {snatch: 1},
		isSnatchable: true,
		onTry: function (pokemon) {
			if (pokemon.template.name !== 'Arcanine') {
				this.add('-fail', pokemon, 'move: Origin Roar');
				return null;
			}
		},
		onHit: function (target) {
			this.add("-message", "Great power always comes at a price...");
			var boosts = {
				atk: 6,
				spa: 6
			}
			this.boost(boosts);
		},
		self: {
			volatileStatus: 'curse',
			onResidualOrder: 10,
			onResidual: function (pokemon) {
				this.damage(pokemon.maxhp / 4);
			}
		},
		secondary: false,
		target: "self",
		type: "Fire"
	},
	"ghostlywail": {
		num: 217,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down. This move must hit to be effective.",
		shortDesc: "40, 80, 120 power, or heals target by 1/4 max HP.",
		id: "ghostlywail",
		name: "Ghostly Wail",
		pp: 5,
		priority: -1,
		flags: {protect: 1, mirror: 1, sound: 1, reflectable: 1},
		isSoundBased: true,
		onModifyMove: function (move, pokemon, target) {
			var rand = this.random(100);
			if (rand === 1) {
				move.ohko = true;
			} else if (rand <= 20) {
				move.volatileStatus = 'torment';
			} else if (rand <= 35) {
				move.volatileStatus = 'taunt';
			} else if (rand <= 50) {
				move.volatileStatus = 'confusion';
			} else if (rand <= 60) {
				move.status = 'tox';
			} else if (rand <= 70) {
				move.status = 'psn';
			} else if (rand <= 80) {
				move.status = 'par';
			} else if (rand <= 90) {
				move.status = 'brn';
			} else if (rand <= 95) {
				move.status = 'slp';
			} else {
				move.status = 'frz';
			}
		},
		secondary: false,
		target: "allAdjacent",
		type: "Normal"
	},
	"laststand": {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack or Special Attack by 12 stages. Has +2 Priority.",
		shortDesc: "Maximizes Attack or Special attack. +2 Priority.",
		id: "laststand",
		isViable: true,
		name: "Last Stand",
		pp: 1,
		priority: 2,
		flags: {snatch: 1},
		isSnatchable: true,
		onTry: function (pokemon) {
			if (pokemon.template.name !== 'Pachirisu') {
				this.add('-fail', pokemon, 'move: Last Stand');
				return null;
			}
		},
		onHit: function (target) {
			this.add("-message", "Pachirisu attempted one last stand...");
			var boost = {};
			var stats = ['atk', 'spa'];
			var randomstat = stats[this.random(2)];
			boost[randomstat] = 12;
			this.boost(boost);
		},
		secondary: false,
		target: "self",
		type: "Normal"
	},
	"hamper": {
		num: 217,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		desc: "Deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down. This move must hit to be effective.",
		shortDesc: "40, 80, 120 power, or heals target by 1/4 max HP.",
		id: "hamper",
		name: "Hamper",
		pp: 10,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onModifyMove: function (move, pokemon, target) {
			var rand = this.random(100);
			if (rand === 1) {
				move.selfdestruct = true;
				move.basePower = 10;
				this.add('-message', 'Hamper Level: SUICIDE!');
			} else if (rand <= 6) {
				move.basePower = 30;
				this.add('-message', 'Hamper Level: 1 (30)');
			} else if (rand <= 16) {
				move.basePower = 50;
				this.add('-message', 'Hamper Level: 2 (50)');
			} else if (rand <= 36) {
				move.basePower = 70;
				this.add('-message', 'Hamper Level: 3 (70)');
			} else if (rand <= 64) {
				move.basePower = 90;
				this.add('-message', 'Hamper Level: 4 (90)');
			} else if (rand <= 84) {
				move.basePower = 110;
				this.add('-message', 'Hamper Level: 5 (110)');
			} else if (rand <= 94) {
				move.basePower = 130;
				this.add('-message', 'Hamper Level: 6 (130)');
			} else if (rand <= 99) {
				move.basePower = 150;
				this.add('-message', 'Hamper Level: 7 (150)');
			} else {
				move.ohko = true;
				this.add('-message', 'Hamper Level: OVERKILL!');
			}
		},
		secondary: false,
		target: "normal",
		type: "Normal"
	},
	"pyrogenesis": {
		num: 19,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Flies up on first turn, then strikes the next turn.",
		id: "pyrogenesis",
		name: "Pyro-Genesis",
		pp: 15,
		priority: 1,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		isContact: true,
		isTwoTurnMove: true,
		onTry: function (attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			this.add('-message', attacker.name + ' flew up high!');
			this.add('-message', attacker.name + ' decomposed and rose from the ashes!');
			this.heal(attacker.maxhp/2);
			attacker.cureStatus();
			return null;
		},
		effect: {
			duration: 2,
			onAccuracy: function (accuracy, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return;
				}
				if (move.id === 'skyuppercut' || move.id === 'thunder' || move.id === 'hurricane' || move.id === 'smackdown' || move.id === 'thousandarrows' || move.id === 'helpinghand') {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				return 0;
			},
			onSourceBasePower: function (basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			}
		},
		secondary: false,
		target: "any",
		type: "Fire"
	},
	"queenswrath": {
		num: 364,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "If this move is successful, it breaks through the target's Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. Lowers the target's defense and special defense by 1 stage.",
		shortDesc: "Nullifies Detect, Protect, and Quick/Wide Guard and lowers the target's defenses by 1.",
		id: "queenswrath",
		name: "Queen's Wrath",
		pp: 10,
		priority: -3,
		flags: {mirror: 1},
		breaksProtect: true,
		onHit: function (target, source) {
			if (target.removeVolatile('protect') || target.removeVolatile('kingsshield') || target.removeVolatile('spikyshield')) {
				this.add("-activate", target, "move: Feint");
			}
			if (target.side !== source.side) {
				target.side.removeSideCondition('quickguard');
				target.side.removeSideCondition('wideguard');
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
				spd: -1
			}
		},
		target: "normal",
		type: "Steel"
	}
};	      
