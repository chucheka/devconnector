import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Layout/Navbar.css';
export default function Navbar() {
	return (
		<header>
			<div className="logo">
				Dev<span>Connector</span>
			</div>
			<nav>
				<ul>
					<Link to="/profile/all" className="nav-link">
						<li>Developers</li>
					</Link>
					<Link to="/user/signup" className="nav-link">
						<li>Sign Up</li>
					</Link>
					<Link to="/user/signin" className="nav-link">
						<li>Sign In</li>
					</Link>
				</ul>
			</nav>
			<div className="menu-toggle">
				<FontAwesomeIcon icon="bars" />
			</div>
		</header>
	);
}
