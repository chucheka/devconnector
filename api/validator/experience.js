import validator from 'validator';
import isEmpty from './isEmpty';

const validateExperienceInput = (data) => {
	let errors = {};
	let { title, company, from, location, to, current, description } = data;
	title = !isEmpty(title) ? title : '';
	company = !isEmpty(company) ? company : '';
	from = !isEmpty(from) ? from : '';

	if (validator.isEmpty(title)) {
		errors.title = 'Profile title is required';
	}
	if (!validator.isLength(title, { min: 2, max: 40 })) {
		errors.title = 'title must be between 2 and 40 characters';
	}
	if (validator.isEmpty(company)) {
		errors.company = 'company field is required';
	}
	if (validator.isEmpty(from)) {
		errors.from = 'from field is required';
	}
	if (!isEmpty(location)) {
		if (!validator.isLength(location, { min: 1 })) {
			errors.location = 'Length must be more than 1';
		}
	}
	if (!isEmpty(to)) {
		if (!validator.isLength(to, { min: 1 })) {
			errors.to = 'Length must be more than 1';
		}
	}
	if (!isEmpty(current)) {
		if (!validator.isLength(current, { min: 1 })) {
			errors.current = 'Length must be more than 1';
		}
	}
	if (!isEmpty(description)) {
		if (!validator.isLength(description, { min: 1 })) {
			errors.description = 'Length must be more than 1';
		}
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

export default validateExperienceInput;
