import React, {Fragment} from 'react';
import {PageHeader} from 'react-bootstrap';
import {prettyPrintPlease} from '../../utils';
import NinjaLink from '../ninjas/ninja-link';

export {SlackChannelDetails as default};

function SlackChannelDetails(props) {
	const {channel = {}} = props;
	const {members} = channel;

	return (
		<Fragment>
			<PageHeader>Slack: {channel.name}</PageHeader>

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
