import validator from 'validator';
import isEmpty from './isEmpty';

const validateRegisterInput = (data) => {
	let errors = {};
	let { name, email, password, password2, avatar } = data;
	name = !isEmpty(name) ? name : ' ';
	email = !isEmpty(email) ? email : ' ';
	password = !isEmpty(password) ? password : ' ';
	password2 = !isEmpty(password2) ? password2 : ' ';
	avatar = !isEmpty(avatar) ? avatar : '';

	if (!validator.isLength(name, { min: 2, max: 30 })) {
		errors.name = 'Name must be between 2 and 30 characters';
	}
	if (validator.isEmpty(name)) {
		errors.name = 'Name field is required';
	}
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
	if (!validator.equals(password, password2)) {
		errors.password2 = 'Passwords must match';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

export default validateRegisterInput;
