const Tribe = {
	leader(tribe, args, context) {
		const {leader: username} = tribe;

		return fetch(`http://localhost:3001/ninjas/${username}`).then((response) =>
			response.json(),
		);
	},
	members(tribe, args, context) {
		const {members: usernames} = tribe;

		const futureNinjas = usernames.map((username) => {
			return fetch(`http://localhost:3001/ninjas/${username}`).then(
				(response) => response.json(),
			);
		});

		return Promise.all(futureNinjas);
	},
};

export {Tribe as default};
