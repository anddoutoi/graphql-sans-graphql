import {
	compose as recompose,
	branch,
	renderComponent,
	withProps,
} from 'recompose';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../common/loading';
import NinjaDetails from './ninja-details';

const query = gql`
	query NinjaQuery($username: ID!) {
		ninja(username: $username) {
			firstName
			lastName
			email
		}
	}
`;

const enhance = recompose(
	withProps((props) => {
		const {params} = props;
		const {id: username} = params;

		return {username};
	}),

	graphql(query, {
		options: (props) => {
			const {username} = props;

			return {
				fetchPolicy: 'network-only',
				variables: {
					username,
				},
			};
		},
	}),

	branch((props) => props.data.loading, renderComponent(Loading)),

	withProps((props) => {
		const {data} = props;
		const {ninja} = data;

		return {ninja};
	}),
);

const EnhancedNinjaDetails = enhance(NinjaDetails);

export {EnhancedNinjaDetails as default};
