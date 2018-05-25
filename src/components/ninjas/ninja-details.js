import React, {Fragment} from 'react';
import {prettyPrintPlease} from '../../utils';
import {PageHeader} from 'react-bootstrap';

export {NinjaDetails as default};

function NinjaDetails(props) {
	const {ninja = {}} = props;
	const {firstName, lastName, email} = ninja;

	return (
		<Fragment>
			<PageHeader>{prettyPrintPlease({firstName, lastName})}</PageHeader>
			<a href={`mailto:${email}`}>{email}</a>
		</Fragment>
	);
}
