import React, {Fragment} from 'react';
import {PageHeader} from 'react-bootstrap';
import {intersperse, prettyPrintPlease} from '../../utils';
import NinjaLink from '../ninjas/ninja-link';
import TribeLink from './tribe-link';

export {TribeList as default};

function TribeList(props) {
	const {tribes = []} = props;

	return (
		<Fragment>
			<PageHeader>Tribes</PageHeader>

			<table border="1">
				<thead>
					<tr>
						<th>Tribe</th>
						<th>Members</th>
					</tr>
				</thead>
				<tbody>
					{tribes.map((tribe) => <TribeTableRow {...tribe} key={tribe.id} />)}
				</tbody>
			</table>
		</Fragment>
	);
}

function TribeTableRow(props) {
	const {id, name, members = []} = props;

	return (
		<tr>
			<td>
				<TribeLink id={id}>{name}</TribeLink>
			</td>
			<td>
				{intersperse(
					', ',
					members.map((ninja) => (
						<NinjaLink
							key={ninja.username}
							id={ninja.username}
						>{`${prettyPrintPlease(ninja)} (${ninja.shoeSize})`}</NinjaLink>
					)),
				)}
			</td>
		</tr>
	);
}
