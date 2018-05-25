import './app.css';
import React from 'react';
import {ApolloProvider} from './providers';
import AppRouter from './components/app-router';

export {App as default};

function App() {
	return (
		<ApolloProvider>
			<AppRouter />
		</ApolloProvider>
	);
}
