module.exports = [
	new SlackChannel({
		id: 'lang-javascript',
		name: '#lang-javascript',
		members: ['agron.kabashi', 'oscar.bolmsten', 'orjan.sjoholm'],
	}),
	new SlackChannel({
		id: 'misc-graphql',
		name: '#misc-graphql',
		members: ['oscar.bolmsten', 'orjan.sjoholm'],
	}),
];

function SlackChannel({id, name, members = []}) {
	this.id = id;
	this.name = name;
	this.members = members;
}
