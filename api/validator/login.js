import validator from 'validator';
import isEmpty from './isEmpty';

const validateLoginInput = (data) => {
	let { name, email, password, password2, avatar } = data;
	let errors = {};
	name = !isEmpty(name) ? name : ' ';
	email = !isEmpty(email) ? email : ' ';
	password = !isEmpty(password) ? password : ' ';
	password2 = !isEmpty(password2) ? password2 : ' ';
	avatar = !isEmpty(avatar) ? avatar : '';

	if (validator.isEmpty(email)) {
		errors.email = 'Email field field is required';
	}
	if (!validator.isEmail(email)) {
		errors.email = 'Email is invalid';
	}
	if (!validator.isLength(password, { min: 6, max: 30 })) {
		errors.password = 'Password must be between 6 to 30 characters';
	}
	if (validator.isEmpty(password)) {
		errors.password = 'Password field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

export default validateLoginInput;
