import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import AppRoot from './app-root';
import AppHome from './app-home';
import {NewNinja, NinjaList, NinjaDetails} from './ninjas';
import {SlackChannelList, SlackChannelDetails} from './slacks';
import {TribeList, TribeDetails} from './tribes';

export {AppRouter as default};

function AppRouter() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={AppRoot}>
				<IndexRoute component={AppHome} />

				<Route path="ninjas" component={NinjaList} />
				<Route path="ninjas/_new" component={NewNinja} />
				<Route path="ninjas/:id" component={NinjaDetails} />

				<Route path="tribes" component={TribeList} />
				<Route path="tribes/:id" component={TribeDetails} />

				<Route path="slacks" component={SlackChannelList} />
				<Route path="slacks/:id" component={SlackChannelDetails} />
			</Route>
		</Router>
	);
}
