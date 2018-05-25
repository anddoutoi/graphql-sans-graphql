import {makeExecutableSchema} from 'graphql-tools';
import typeDefs from './type-defs';
import resolvers from './resolvers';

const schema = makeExecutableSchema({typeDefs, resolvers});

export {schema as default};
