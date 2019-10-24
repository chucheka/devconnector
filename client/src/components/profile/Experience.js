import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../profile/Experience.module.css';
export default function Experience() {
	return (
		<div className={styled.container}>
			<div className={styled.form_container}>
				<h3>Add Your Experience</h3>
				<small className={styled.text}>State any previous work experience as a developer </small>
				<small>* required fields</small>
				<form>
					<input type="text" placeholder="* Job Title" />
					<input type="text" placeholder="* Company" />
					<input type="text" placeholder="Location" />
					<div className="form-control">
						<label>From Date</label>
						<input type="date" />
					</div>
					<div className="form-control">
						<label>To Date</label>
						<input type="date" />
					</div>
					<div className="form-control">
						<input type="checkbox" />
						<label>
							{' '}
							<small>Current Job</small>
						</label>
					</div>
					<div>
						<textarea placeholder="Job Description" />
						<br />
						<small>Some of your responsibilities</small>
					</div>
					<input type="submit" value="Add" className={styled.btn} />
				</form>
			</div>
		</div>
	);
}
