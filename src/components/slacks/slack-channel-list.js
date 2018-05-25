import React, {Fragment} from 'react';
import {intersperse, prettyPrintPlease} from '../../utils';
import {PageHeader} from 'react-bootstrap';
import NinjaLink from '../ninjas/ninja-link';
import SlackChannelLink from './slack-channel-link';

export {SlackChannelList as default};

function SlackChannelList(props) {
	const {channels = []} = props;

	return (
		<Fragment>
			<PageHeader>Slack Channels</PageHeader>

			<table border="1">
				<thead>
					<tr>
						<th>Channel</th>
						<th>Members</th>
					</tr>
				</thead>
				<tbody>
					{channels.map((channel) => (
						<SlackChannelTableRow {...channel} key={channel.id} />
					))}
				</tbody>
			</table>
		</Fragment>
	);
}

function SlackChannelTableRow(props) {
	const {id, name, members = []} = props;

	return (
		<tr>
			<td>
				<SlackChannelLink id={id}>{name}</SlackChannelLink>
			</td>
			<td>
				{intersperse(
					', ',
					members.map((ninja) => (
						<NinjaLink key={ninja.username} id={ninja.username}>
							{prettyPrintPlease(ninja)}
						</NinjaLink>
					)),
				)}
			</td>
		</tr>
	);
}
