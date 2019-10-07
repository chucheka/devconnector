import validator from 'validator';
import isEmpty from './isEmpty';

const validateProfileInput = (data) => {
	let errors = {};
	let { handle, status, skills, website, youtube, linkedIn, facebook, twitter, instagram } = data;
	handle = !isEmpty(handle) ? handle : '';
	status = !isEmpty(status) ? status : '';
	skills = !isEmpty(skills) ? skills : '';

	if (validator.isEmpty(handle)) {
		errors.handle = 'Profile handle is required';
	}
	if (!validator.isLength(handle, { min: 2, max: 40 })) {
		errors.handle = 'Handle must be between 2 and 40 characters';
	}
	if (validator.isEmpty(status)) {
		errors.status = 'Status field is required';
	}
	if (validator.isEmpty(skills)) {
		errors.skills = 'Skills field is required';
	}
	if (!isEmpty(website)) {
		if (!validator.isURL(website)) {
			errors.website = 'Not a valid url';
		}
	}
	if (!isEmpty(youtube)) {
		if (!validator.isURL(youtube)) {
			errors.youtube = 'Not a valid url';
		}
	}
	if (!isEmpty(linkedIn)) {
		if (!validator.isURL(linkedIn)) {
			errors.linkedIn = 'Not a valid url';
		}
	}
	if (!isEmpty(facebook)) {
		if (!validator.isURL(facebook)) {
			errors.facebook = 'Not a valid url';
		}
	}
	if (!isEmpty(twitter)) {
		if (!validator.isURL(twitter)) {
			errors.twitter = 'Not a valid url';
		}
	}
	if (!isEmpty(instagram)) {
		if (!validator.isURL(instagram)) {
			errors.instagram = 'Not a valid url';
		}
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};

export default validateProfileInput;
