import {
	compose as recompose,
	branch,
	renderNothing,
	withHandlers,
	withStateHandlers,
} from 'recompose';
import SubmitNotification from './submit-notification';

const enhance = recompose(
	withStateHandlers(
		{dismissed: false},
		{dismiss: () => () => ({dismissed: true})},
	),

	withHandlers((initialProps) => {
		const {dismiss} = initialProps;

		return {
			onDismiss: () => () => {
				dismiss();
			},
		};
	}),

	branch((props) => props.dismissed, renderNothing),
);

const EnhancedSubmitNotification = enhance(SubmitNotification);

export {EnhancedSubmitNotification as default};
