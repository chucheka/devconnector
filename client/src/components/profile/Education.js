import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../profile/Experience.module.css';
export default function Education() {
	return (
		<div className={styled.container}>
			<div className={styled.form_container}>
				<h3>Add Your Education</h3>
				<small className={styled.text}>Add any school or bootcamp that you have attended </small>
				<small>* required fields</small>
				<form>
					<input type="text" placeholder="* School Or Bootcamp" />
					<input type="text" placeholder="* Degree Or Certification" />
					<input type="text" placeholder="Field Of Study" />
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
						<textarea placeholder="Program Description" />
						<br />
						<small>Tell us about your experience and what you learnt</small>
					</div>
					<input type="submit" value="Submit" className={styled.btn} />
				</form>
			</div>
		</div>
	);
}
