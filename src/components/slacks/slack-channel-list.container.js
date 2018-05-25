import {
	compose as recompose,
	branch,
	lifecycle,
	renderComponent,
	withStateHandlers,
} from 'recompose';
import Loading from '../common/loading';
import SlackChannelList from './slack-channel-list';

const enhance = recompose(
	withStateHandlers(
		{channels: null},
		{setChannels: () => (channels) => ({channels})},
	),

	lifecycle({
		componentDidMount() {
			const {setChannels} = this.props;

			fetch('http://localhost:3001/slacks')
				.then((response) => response.json())
				.then((channels) => {
					const usernames = channels.reduce((accumulator, channel) => {
						return accumulator.concat(channel.members);
					}, []);
					const uniqueUsernames = [...new Set(usernames)];

					const futureNinjas = uniqueUsernames.map((username) => {
						return fetch(`http://localhost:3001/ninjas/${username}`).then(
							(response) => response.json(),
						);
					});

					return Promise.all(futureNinjas).then((ninjaDataBase) => {
						const ninjaEnhancedChannels = channels.map((channel) => {
							const {members: usernames} = channel;

							const ninjaMembers = usernames.map((username) => {
								return ninjaDataBase.find(
									(ninja) => username === ninja.username,
								);
							});

							return {
								...channel,
								members: ninjaMembers,
							};
						});

						return ninjaEnhancedChannels;
					});
				})
				.then(setChannels);
		},
	}),

	branch((props) => props.channels == null, renderComponent(Loading)),
);

const EnhancedSlackChannelList = enhance(SlackChannelList);

export {EnhancedSlackChannelList as default};
