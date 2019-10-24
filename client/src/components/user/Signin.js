import React, { useState } from 'react';
import styled from '../user/User.module.css';

export default function Signin() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errors, setErrors ] = useState({});

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'email':
				return setEmail(e.target.value);
			case 'password':
				return setPassword(e.target.value);
			default:
				return null;
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			email,
			password
		};
		console.log(user);
		// createUser(user);
		// history.push('/');
		// setName('');
		// setIngredients('');
		// setDirection('');
	};
	return (
		<div className={styled.container}>
			<div className={styled.form_container}>
				<h3>Sign In</h3>
				<small className={styled.text}>Sign in into your developer account </small>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						type="text"
						placeholder="*Enter email"
						name="email"
						value={email}
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="password"
						placeholder="*Enter password"
						name="password"
						value={password}
						onChange={(e) => handleChange(e)}
					/>
					<input type="submit" value="SIGN IN" className={styled.btn} />
				</form>
			</div>
		</div>
	);
}
