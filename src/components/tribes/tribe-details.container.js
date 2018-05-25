import {
	compose as recompose,
	branch,
	renderComponent,
	withProps,
} from 'recompose';
import {graphql} from 'react-apollo/index';
import gql from 'graphql-tag';
import Loading from '../common/loading';
import TribeDetails from './tribe-details';

const query = gql`
	query TribeQuery($tribeId: ID!) {
		tribe(id: $tribeId) {
			name
			members {
				id
				firstName
				lastName
			}
		}
	}
`;

const enhance = recompose(
	withProps((props) => {
		const {params} = props;
		const {id: tribeId} = params;

		return {tribeId};
	}),

	graphql(query, {
		options: (props) => {
			const {tribeId} = props;

			return {
				fetchPolicy: 'network-only',
				variables: {
					tribeId,
				},
			};
		},
	}),

	branch((props) => props.data.loading, renderComponent(Loading)),

	withProps((props) => {
		const {data} = props;
		const {tribe} = data;

		return {tribe};
	}),
);

const EnhancedTribeDetails = enhance(TribeDetails);

export {EnhancedTribeDetails as default};
