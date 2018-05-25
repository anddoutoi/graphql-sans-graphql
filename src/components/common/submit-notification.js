import React from 'react';
import {Alert} from 'react-bootstrap';
import {prettyPrintPlease} from '../../utils';

export {SubmitNotification as default};

function SubmitNotification(props) {
	const {payload, onDismiss} = props;

	const bsStyle = payload instanceof Error ? 'danger' : 'success';
	const children =
		payload instanceof Error ? payload.message : getSuccessMessage(payload);

	return (
		<Alert bsStyle={bsStyle} onDismiss={onDismiss}>
			{children}
		</Alert>
	);
}

function getSuccessMessage(payload) {
	return `${prettyPrintPlease(payload)} was successfully created`;
}
