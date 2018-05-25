import React from 'react';
import {Link} from 'react-router';
import {resolveNinjaUrl} from '../../utils';

export {NinjaLink as default};

function NinjaLink(props) {
	const {id, children = id} = props;

	return <Link to={resolveNinjaUrl({id})}>{children}</Link>;
}
