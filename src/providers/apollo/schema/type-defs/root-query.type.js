import Ninja from './ninja.type';
import Tribe from './tribe.type';

const RootQuery = `
	type RootQuery {
		ninja(username: ID!): Ninja
		tribe(id: ID!): Tribe
		tribes: [Tribe]!
	}
`;

export default () => [RootQuery, Ninja, Tribe];
