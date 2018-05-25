import {
	compose as recompose,
	branch,
	renderComponent,
	withProps,
} from 'recompose';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../common/loading';
import TribeList from './tribe-list';

const query = gql`
	query TribesWithMembersQuery {
		tribes {
			id
			name
			members {
				username
				firstName
				lastName
				shoeSize
			}
		}
	}
`;

const enhance = recompose(
	graphql(query),

	branch((props) => props.data.loading, renderComponent(Loading)),

	withProps((props) => {
		const {data} = props;
		const {tribes} = data;

		return {tribes};
	}),
);

const EnhancedTribeList = enhance(TribeList);

export {EnhancedTribeList as default};
