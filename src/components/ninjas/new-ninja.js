import React, {Fragment} from 'react';
import {PageHeader} from 'react-bootstrap';
import {SubmitNotification} from '../common';

export {NewNinja as default};

function NewNinja(props) {
	const {controlledFormData, submitResult, onChange, onSubmit} = props;
	const {username = '', email = ''} = controlledFormData;

	return (
		<Fragment>
			<PageHeader>New Ninja</PageHeader>

			{submitResult && <SubmitNotification payload={submitResult} />}

			<form onChange={onChange} onSubmit={onSubmit}>
				<div className="form-page">
					<div className="form-paragraph">
						<label htmlFor="first_name">First Name</label>
						<br />
						<input name="first_name" type="text" autoComplete="off" />
					</div>
					<div className="form-paragraph">
						<label htmlFor="last_name">Last Name</label>
						<br />
						<input name="last_name" type="text" autoComplete="off" />
					</div>
					<div className="form-paragraph">
						<label htmlFor="">Username</label>
						<br />
						<input name="username" type="text" readOnly value={username} />
					</div>
					<div className="form-paragraph">
						<label htmlFor="">Email</label>
						<br />
						<input name="e_mail" type="email" readOnly value={email} />
					</div>
					<div className="form-paragraph">
						<label htmlFor="">Shoe Size</label>
						<br />
						<input name="shoe_size" type="number" min="35" max="52" />
					</div>
					<hr />
					<div>
						<button className="form-button mod-primary" type="submit">
							Create new ninja
						</button>
					</div>
				</div>
			</form>
		</Fragment>
	);
}
