import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RowEdu, RowExp } from './RowBody';

const main_container = {
	marginTop: '40px',
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	alignItems: 'center'
};
const secondStyle = {
	width: '80%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
};
const box = {
	display: 'flex',
	flexDirection: 'column',
	margin: '10px auto 10px',
	maxWidth: '660px',
	width: '100%',
	textAlign: 'start',
	marginBottom: '20px'
};
const actions = {
	backgroundColor: '#f8f9fa',
	border: 'none',
	borderRadius: '5px',
	marginTop: '10px',
	height: '30px',
	padding: '6px',
	fontSize: '14px'
};
const icon = {
	width: '7.4rem',
	marginRight: '10px',
	color: '#17a2b8',
	display: 'inline-block',
	cursor: 'pointer',
	textDecoration: 'none'
};
const btnStyle = {
	display: 'inline-block',
	textDecoration: 'none',
	color: '#fff',
	backgroundColor: '#dc3545',
	border: 'none',
	fontSize: '14px',
	borderRadius: '5px',
	padding: '8px 0px',
	width: '8.2rem',
	textAlign: 'center'
};
export default function DashBoard() {
	return (
		<div style={main_container}>
			<div style={secondStyle}>
				<div style={box}>
					<h3>Dashboard</h3>
					<small>Welcome John Doe</small>
					<div style={actions}>
						<Link to="/profile/edit/:handle" style={icon}>
							<FontAwesomeIcon icon="user" /> Edit Profile
						</Link>
						<Link to="/profile/experience" style={icon}>
							<FontAwesomeIcon icon="graduation-cap" /> Add Education
						</Link>
						<Link to="/profile/experience" style={icon}>
							<FontAwesomeIcon icon="hard-hat" /> Add Experience
						</Link>
					</div>
				</div>
				<div style={box}>
					<h4>Experience Credentials</h4>
					<table>
						<thead>
							<tr>
								<th>Company</th>
								<th>Status</th>
								<th>Years</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<RowExp />
							<RowExp />
						</tbody>
					</table>
				</div>
				<div style={box}>
					<h4>Education Credentials</h4>
					<table>
						<thead>
							<tr>
								<th>School</th>
								<th>Degree</th>
								<th>Years</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<RowEdu />
							<RowEdu />
						</tbody>
					</table>
				</div>
				<div style={box}>
					<input style={btnStyle} type="text" value="Delete My Account" />
				</div>
			</div>
		</div>
	);
}
