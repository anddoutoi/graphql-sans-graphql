import React, {Fragment} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Link} from 'react-router';
import {prettyPrintPlease} from '../../utils';
import NinjaLink from './ninja-link';

export {NinjaList as default};

function NinjaList(props) {
	const {ninjas = []} = props;

	return (
		<Fragment>
			<PageHeader>Ninjas</PageHeader>

			<Link to="/ninjas/_new">New Ninja</Link>

			<table border="1">
				<thead>
					<tr>
						<th>Ninja</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{ninjas.map((ninja) => (
						<NinjaTableRow {...ninja} key={ninja.username} />
					))}
				</tbody>
			</table>
		</Fragment>
	);
}

function NinjaTableRow(props) {
	const {username, firstName, lastName, e_mail} = props;

	return (
		<tr>
			<td>
				<NinjaLink id={username}>
					{prettyPrintPlease({firstName, lastName})}
				</NinjaLink>
			</td>
			<td>
				<a href={`mailto:${e_mail}`}>{e_mail}</a>
			</td>
		</tr>
	);
}
