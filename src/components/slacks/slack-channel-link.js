import React from 'react';
import {Link} from 'react-router';
import {resolveSlackUrl} from '../../utils';

export {SlackChannelLink as default};

function SlackChannelLink(props) {
	const {id, children = id} = props;

	return <Link to={resolveSlackUrl({id})}>{children}</Link>;
}
