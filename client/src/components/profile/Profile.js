import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../profile/Profile.css';
import User from '../../img/user.png';
export default function Profile() {
	const getStyle = {
		display: 'block',
		textDecoration: 'none',
		color: '#f8f9fa',
		backgroundColor: '#17a2b8',
		border: 'none',
		fontSize: '14px',
		borderRadius: '5px',
		padding: '8px 0px',
		marginTop: '5px',
		width: '6.2rem',
		textAlign: 'center'
	};
	return (
		<section className="section">
			<div className="profile">
				<h3>Developer Profile</h3>
				<small className="small">Browse and connect with developers</small>

				<div className="list-item">
					<div className="bio">
						<img alt="image here" src={User} />
						<div className="info">
							<span>John Doe</span>
							<br />
							<small>Developer at Microsoft</small>
							<br />
							<small className="location">Stevens, Houston</small>
							<br />
							<Link to="/profile/handle/:handle" style={getStyle}>
								view profile
							</Link>
						</div>
					</div>
					<div className="skills">
						<h4>Skill Set</h4>
						<ul>
							<li>
								<FontAwesomeIcon icon="check" /> HTML
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> CSS
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> JAVSCRIPT
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> POSTGRESQL
							</li>
						</ul>
					</div>
				</div>
				<div className="list-item">
					<div className="bio">
						<img src={User} />
						<div className="info">
							<span>John Doe</span>
							<br />
							<small>Developer at Microsoft</small>
							<br />
							<small className="location">Stevens, Houston</small>
							<br />
							<Link to="/profile/handle/:handle" style={getStyle}>
								view profile
							</Link>
						</div>
					</div>
					<div className="skills">
						<h4>Skill Set</h4>
						<ul>
							<li>
								<FontAwesomeIcon icon="check" /> HTML
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> CSS
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> JAVSCRIPT
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> POSTGRESQL
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
