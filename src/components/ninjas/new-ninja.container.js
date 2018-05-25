import _kebabCase from 'lodash/kebabCase';
import {compose as recompose, withHandlers, withStateHandlers} from 'recompose';
import NewNinja from './new-ninja';

const enhance = recompose(
	withHandlers({
		createNinja: () => (ninjaData) => {
			return fetch('http://localhost:3001/ninjas', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(ninjaData),
			})
				.then((response) => {
					if (response.ok) {
						return response;
					}

					throw response;
				})
				.then(
					(response) => {
						return response.json();
					},
					(response) => {
						throw response.text();
					},
				)
				.catch((futureText) => {
					return futureText.then((text) => {
						const message = getCleanErrorMessageFromText(text);

						throw new Error(message);
					});
				});
		},
	}),

	withStateHandlers(
		{
			controlledFormData: {username: '', email: ''},
			submitInProgress: false,
			submitResult: null,
		},
		{
			setEmail: (state) => (email) => {
				const {controlledFormData} = state;

				return {
					controlledFormData: {
						...controlledFormData,
						email,
					},
				};
			},
			setUsername: (state) => (username) => {
				const {controlledFormData} = state;

				return {
					controlledFormData: {
						...controlledFormData,
						username,
					},
				};
			},
			resetControlledFormData: () => () => ({
				controlledFormData: {username: '', email: ''},
			}),
			submitInit: () => () => ({submitInProgress: true}),
			submitDone: () => () => ({submitInProgress: false}),
			submitSuccess: () => (ninja) => ({submitResult: ninja}),
			submitFailure: () => (error) => ({submitResult: error}),
		},
	),

	withHandlers((initialProps) => {
		const {
			createNinja,
			resetControlledFormData,
			setEmail,
			setUsername,
			submitInit,
			submitDone,
			submitSuccess,
			submitFailure,
		} = initialProps;

		return {
			onChange: (props) => (event) => {
				const changedFormControl = event.target;

				if (!['first_name', 'last_name'].includes(changedFormControl.name)) {
					return;
				}

				const {controlledFormData} = props;

				const newNinjaForm = event.currentTarget;
				const formData = new FormData(newNinjaForm);
				const firstName = formData.get('first_name');
				const lastName = formData.get('last_name');

				if (firstName == null && lastName == null) {
					return;
				}

				const username = _kebabCase(`${firstName} ${lastName}`).replace(
					'-',
					'.',
				);
				const email = username === '' ? '' : `${username}@tretton37.ninja`;

				if (controlledFormData.username !== username) {
					setUsername(username);
				}

				if (controlledFormData.email !== email) {
					setEmail(email);
				}
			},
			onSubmit: () => (event) => {
				event.preventDefault();

				const newNinjaForm = event.target;
				const formData = new FormData(newNinjaForm);

				const firstName = formData.get('first_name');
				const lastName = formData.get('last_name');
				const username = formData.get('username');
				const e_mail = formData.get('e_mail');
				const shoeSize = formData.get('shoe_size');

				const ninjaData = {
					id: username,
					username,
					firstName,
					lastName,
					e_mail,
					shoeSize: Number(shoeSize),
				};

				submitInit();

				createNinja(ninjaData)
					.then(
						(newNinja) => {
							submitSuccess(newNinja);

							newNinjaForm.reset();

							resetControlledFormData();
						},
						(error) => {
							submitFailure(error);
						},
					)
					.finally(submitDone);
			},
		};
	}),
);

const EnhancedNewNinja = enhance(NewNinja);

export {EnhancedNewNinja as default};

const firstLine = /^.*$/m;

function getCleanErrorMessageFromText(text) {
	const matches = text.match(firstLine);

	return matches !== null ? matches[0] : 'Error: Getting clean error message';
}
