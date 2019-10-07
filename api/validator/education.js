import validator from 'validator';
import isEmpty from './isEmpty';

const validateEducationInput = (data) => {
	let errors = {};
	let { school, degree, from, location, to, current, fieldOfStudy, description } = data;
	school = !isEmpty(school) ? school : '';
	degree = !isEmpty(degree) ? degree : '';
	fieldOfStudy = !isEmpty(fieldOfStudy) ? fieldOfStudy : '';
	from = !isEmpty(from) ? from : '';
	current = !isEmpty(current) ? current : '';

	if (validator.isEmpty(school)) {
		errors.school = 'Profile school is required';
	}
	if (!validator.isLength(school, { min: 2, max: 120 })) {
		errors.school = 'school must be between 2 and 120 characters';
	}
	if (validator.isEmpty(fieldOfStudy)) {
		errors.fieldOfStudy = 'Profile fieldOfStudy is required';
	}
	if (!validator.isLength(fieldOfStudy, { min: 2, max: 100 })) {
		errors.fieldOfStudy = 'fieldOfStudy must be between 2 and 100 characters';
	}
	if (validator.isEmpty(degree)) {
		errors.degree = 'degree field is required';
	}
	if (validator.isEmpty(current)) {
		errors.current = 'current field is required';
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

export default validateEducationInput;
