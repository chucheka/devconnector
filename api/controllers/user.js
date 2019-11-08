import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/users/users';
import validateRegisterInput from '../validator/register';
import validateLoginInput from '../validator/login';
dotenv.config();

class userController {
	static registerUser(req, res) {
		const { errors, isValid } = validateRegisterInput(req.body);
		if (!isValid) {
			return res.status(400).json(errors, isValid);
		}

		const { name, email, password, avatar } = req.body;

		const newUser = new User({
			name,
			email,
			password,
			avatar
		});

		User.findOne({ email }).then((user) => {
			if (user) {
				return res.status(400).json({
					email: 'Email already exists!!'
				});
			}
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then((user) => {
							res.status(201).json(user);
						})
						.catch((err) => console.log(err, 'Could not save new user'));
				});
			});
		});
	}
	static loginUser(req, res) {
		// check if user with email exists
		// unhash passsword and confirm passwords
		// if passwords are,generate token
		// validate entries

		const { errors, isValid } = validateLoginInput(req.body);
		if (!isValid) {
			return res.status(400).json(errors);
		}
		const { email, password } = req.body;

		User.findOne({ email }).then((user) => {
			if (user) {
				bcrypt.compare(password, user.password, (err, isMatch) => {
					if (err) throw err;
					if (isMatch) {
						const payload = {
							userId: user.id,
							userName: user.name,
							userEmail: user.email,
							userAvatar: user.avatar
						};
						jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' }, (err, token) => {
							res.status(200).json({
								success: 'Login successfully',
								token: `Bearer ${token}`
							});
						});
					} else {
						return res.status(401).json({
							message: 'Invalid credentials'
						});
					}
				});
			} else {
				return res.status(404).json({
					email: 'User not found'
				});
			}
		});
	}
}

export default userController;
