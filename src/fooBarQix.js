const NO_REMAINDER = 0;
const FOO_NUMBER = 3;
const FOO_STRING = 'Foo';

function compute(number) {
	validate(number);
	return (isDivisibleByFooNumber(number) && FOO_STRING) || number;
}

function isDivisibleByFooNumber(number) {
	return number % FOO_NUMBER === NO_REMAINDER;
}

function validate(parameter) {
	if (!isNumber(parameter)) throw new Error(`"${parameter}" must be a number`);
}

function isNumber(parameter) {
	return typeof parameter === 'number';
}

module.exports = {
	compute
};
