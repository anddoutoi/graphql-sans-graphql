import {
	compose as recompose,
	branch,
	lifecycle,
	renderComponent,
	withProps,
	withStateHandlers,
} from 'recompose';
import SlackChannelDetails from './slack-channel-details';
import Loading from '../common/loading';

const enhance = recompose(
	withProps((props) => {
		const {params} = props;
		const {id: channelId} = params;

		return {channelId};
	}),

	withStateHandlers(
		{channel: null},
		{setChannel: () => (channel) => ({channel})},
	),

	lifecycle({
		componentDidMount() {
			const {channelId, setChannel} = this.props;

			fetch(`http://localhost:3001/slacks/${channelId}`)
				.then((response) => response.json())
				.then((channel) => {
					const {members: usernames} = channel;

					const futureNinjas = usernames.map((username) => {
						return fetch(`http://localhost:3001/ninjas/${username}`).then(
							(response) => response.json(),
						);
					});

					return Promise.all(futureNinjas).then((ninjas) => {
						return {
							...channel,
							members: ninjas,
						};
					});
				})
				.then(setChannel);
		},
	}),

	branch((props) => props.channel == null, renderComponent(Loading)),
);

const EnhancedSlackChannelDetails = enhance(SlackChannelDetails);

export {EnhancedSlackChannelDetails as default};
