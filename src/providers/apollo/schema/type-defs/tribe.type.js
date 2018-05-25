import Ninja from './ninja.type';

const Tribe = `
	type Tribe {
		id: ID!
		name: String!
		leader: Ninja!
		members: [Ninja]!
	}
`;

export default () => [Tribe, Ninja];
