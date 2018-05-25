import {compose as recompose, withProps} from 'recompose';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {SchemaLink} from 'apollo-link-schema';
import {ApolloProvider} from 'react-apollo';
import schema from './schema';

const enhance = recompose(
	withProps((props) => {
		const cache = new InMemoryCache();
		const link = new SchemaLink({schema});

		const apolloClient = new ApolloClient({
			cache,
			link,
		});

		return {client: apolloClient};
	}),
);

const EnhancedApolloProvider = enhance(ApolloProvider);

export {EnhancedApolloProvider as default};
