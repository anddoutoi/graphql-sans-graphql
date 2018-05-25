import {
	compose as recompose,
	branch,
	lifecycle,
	renderComponent,
	withStateHandlers,
} from 'recompose';
import Loading from '../common/loading';
import NinjaList from './ninja-list';

const enhance = recompose(
	withStateHandlers({ninjas: null}, {setNinjas: () => (ninjas) => ({ninjas})}),

	lifecycle({
		componentDidMount() {
			const {setNinjas} = this.props;

			fetch('http://localhost:3001/ninjas')
				.then((response) => response.json())
				.then(setNinjas);
		},
	}),

	branch((props) => props.ninjas == null, renderComponent(Loading)),
);

const EnhancedNinjaList = enhance(NinjaList);

export {EnhancedNinjaList as default};
