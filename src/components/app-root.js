import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {resolveNinjaUrl, resolveSlackUrl, resolveTribeUrl} from '../utils';

export {AppRoot as default};

function AppRoot(props) {
	const {children} = props;

	return (
		<div>
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/" style={{color: '#8cc63c'}}>
							femton67
						</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem componentClass={Link} href="/ninjas" to={resolveNinjaUrl()}>
						Ninjas
					</NavItem>
					<NavItem componentClass={Link} href="/slacks" to={resolveSlackUrl()}>
						Slacks
					</NavItem>
					<NavItem componentClass={Link} href="/tribes" to={resolveTribeUrl()}>
						Tribes
					</NavItem>
				</Nav>
			</Navbar>
			<div className="container">{children}</div>
		</div>
	);
}
