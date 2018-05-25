const Ninja = `
	type Ninja {
		id: ID!
		username: String!
		firstName: String!
		lastName: String!
		email: String
		shoeSize: Int
	}
`;

export default () => [Ninja];
