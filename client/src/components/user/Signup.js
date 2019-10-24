import React, { useState } from 'react';
import axios from 'axios';
import styled from '../user/User.module.css';
export default function Signup() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ avatar, setAvatar ] = useState('');

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'name':
				return setName(e.target.value);
			case 'email':
				return setEmail(e.target.value);
			case 'password':
				return setPassword(e.target.value);
			case 'password2':
				return setPassword2(e.target.value);
			case 'avatar':
				return setAvatar(e.target.value);
			default:
				return null;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			name,
			email,
			password,
			password2,
			avatar
		};
		// createUser(user);
		// history.push('/');
		// setName('');
		// setIngredients('');
		// setDirection('');
		axios
			.post('http://localhost:8080/api/v1/user/signup', user)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className={styled.container}>
			<div className={styled.form_container}>
				<h3>Sign Up</h3>
				<small className={styled.text}>Create your developer account </small>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="form-control">
						<label>Name</label>
						<input type="text" name="name" value={name} onChange={(e) => handleChange(e)} />
					</div>
					<div className="form-control">
						<label>Email</label>
						<input type="email" name="email" value={email} onChange={(e) => handleChange(e)} />
					</div>
					<div className="form-control">
						<input
							type="text"
							placeholder="Pleace provide an image"
							name="avatar"
							value={avatar}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className="form-control">
						<label>Password</label>
						<input type="password" name="password" value={password} onChange={(e) => handleChange(e)} />
					</div>
					<div className="form-control">
						<label>Confirm Password</label>
						<input type="password" name="password2" value={password2} onChange={(e) => handleChange(e)} />
					</div>
					<input type="submit" value="SIGN UP" className={styled.btn} />
				</form>
			</div>
		</div>
	);
}
