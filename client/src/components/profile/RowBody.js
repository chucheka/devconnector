import React from 'react';
import { Link } from 'react-router-dom';
import '../profile/RowBody.css';

const btnStyle = {
	display: 'inline-block',
	textDecoration: 'none',
	color: '#fff',
	backgroundColor: '#dc3545',
	border: 'none',
	fontSize: '14px',
	borderRadius: '5px',
	padding: '6px 0px',
	width: '4rem',
	textAlign: 'center'
};

export const RowEdu = function RowEdu() {
	const eduDetails = {
		school: 'Federal University Of Technlogy Owerri',
		degree: 'Bachelor',
		year: 'Jun 2019-Aug 2014'
	};
	return (
		<tr>
			<td>{eduDetails.school}</td>
			<td>{eduDetails.degree}</td>
			<td>{eduDetails.year}</td>
			<td>
				<Link to="/profile/delete/education" style={btnStyle}>
					Delete
				</Link>
			</td>
		</tr>
	);
};

export const RowExp = function RowExp() {
	const expDetails = {
		Company: 'Andela Ng',
		position: 'Senior Developer',
		year: 'Jun 2019-Aug 2014'
	};
	return (
		<tr>
			<td>{expDetails.Company}</td>
			<td>{expDetails.position}</td>
			<td>{expDetails.year}</td>
			<td>
				<Link to="/profile/delete/experience" style={btnStyle}>
					Delete
				</Link>
			</td>
		</tr>
	);
};
