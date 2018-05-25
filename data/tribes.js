module.exports = [
	new Tribe({
		id: 'juleboda-js',
		name: 'juleboda.js',
		leader: 'anders.ringqvist',
		members: ['agron.kabashi', 'anders.ringqvist', 'erik.forsberg'],

	}),
	new Tribe({
		id: 'magic-smoke',
		name: 'Magic Smoke',
		leader: 'otto.remse',
		members: ['erik.forsberg', 'michal.lusiak', 'otto.remse'],
	}),
];

function Tribe({id, name, leader, members = []}) {
	this.id = id;
	this.name = name;
	this.leader = leader;
	this.members = members;
}
