import validator from 'validator';
import isEmpty from './isEmpty';

const validatePostInput = (data) => {
	let { text } = data;
	let errors = {};
	text = !isEmpty(text) ? text : ' ';

	if (!validator.isLength(text, { min: 2, max: 300 })) {
		errors.text = 'text must be between 2 to 300 characters';
	}
	if (validator.matches(text, /fuck|stupid|sex|porn/gi)) {
		errors.text = 'Foul words are forbidden';
	}
	if (validator.isEmpty(text)) {
		errors.text = 'text field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

export default validatePostInput;
