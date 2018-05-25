module.exports = [
	new Ninja({
		username: 'agron.kabashi',
		firstName: 'Agron',
		lastName: 'Kabashi',
		e_mail: 'agron.kabashi@tretton37.ninja',
		shoeSize: 42,
	}),
	new Ninja({
		username: 'anders.ringqvist',
		firstName: 'Anders',
		lastName: 'Ringqvist',
		e_mail: 'anders.ringqvist@tretton37.ninja',
		shoeSize: 40,
	}),
	new Ninja({
		username: 'erik.forsberg',
		firstName: 'Erik',
		lastName: 'Forsberg',
		e_mail: 'erik.forsberg@tretton37.ninja',
		shoeSize: 41,
	}),
	new Ninja({
		username: 'michal.lusiak',
		firstName: 'Michał',
		lastName: 'Łusiak',
		e_mail: 'michal.lusiak@tretton37.ninja',
		shoeSize: 40,
	}),
	new Ninja({
		username: 'oscar.bolmsten',
		firstName: 'Oscar',
		lastName: 'Bolmsten',
		e_mail: 'oscar.bolmsten@tretton37.ninja',
		shoeSize: 40,
	}),
	new Ninja({
		username: 'otto.remse',
		firstName: 'Otto',
		lastName: 'Remse',
		e_mail: 'otto.remse@tretton37.ninja',
		shoeSize: 42,
	}),
	new Ninja({
		username: 'orjan.sjoholm',
		firstName: 'Örjan',
		lastName: 'Sjöholm',
		e_mail: 'orjan.sjoholm@tretton37.ninja',
		shoeSize: 41,
	}),
];

function Ninja({username, id = username, firstName, lastName, e_mail, shoeSize}) {
	this.id = id;
	this.username = username;
	this.firstName = firstName;
	this.lastName = lastName;
	this.e_mail = e_mail;
	this.shoeSize = shoeSize;
}
