import React, {Fragment} from 'react';
import {PageHeader} from 'react-bootstrap';
import {prettyPrintPlease} from '../../utils';
import NinjaLink from '../ninjas/ninja-link';

export {TribeDetails as default};

function TribeDetails(props) {
	const {tribe = {}} = props;
	const {members} = tribe;

	return (
		<Fragment>
			<PageHeader>Tribe: {tribe.name}</PageHeader>

			<h3>Members</h3>
			<table border="1">
				<thead>
					<tr>
						<th>Member</th>
					</tr>
				</thead>
				<tbody>
					{members.map((member) => (
						<MemberTableRow {...member} key={member.id} />
					))}
				</tbody>
			</table>
		</Fragment>
	);
}

function MemberTableRow(props) {
	const {id, firstName, lastName} = props;

	return (
		<tr>
			<td>
				<NinjaLink id={id}>
					{prettyPrintPlease({firstName, lastName})}
				</NinjaLink>
			</td>
		</tr>
	);
}
