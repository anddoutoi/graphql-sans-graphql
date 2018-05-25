const RootQuery = {
	ninja(root, args, context) {
		const {username} = args;

		return fetch(`http://localhost:3001/ninjas/${username}`).then((response) =>
			response.json(),
		);
	},
	tribe(root, args, context) {
		const {id: tribeId} = args;

		return fetch(`http://localhost:3001/tribes/${tribeId}`).then((response) =>
			response.json(),
		);
	},
	tribes(root, args, context) {
		return fetch('http://localhost:3001/tribes').then((response) =>
			response.json(),
		);
	},
};

export {RootQuery as default};
