import React from 'react';
import {Link} from 'react-router';
import {resolveTribeUrl} from '../../utils';

export {TribeLink as default};

function TribeLink(props) {
	const {id, children = id} = props;

	return <Link to={resolveTribeUrl({id})}>{children}</Link>;
}
