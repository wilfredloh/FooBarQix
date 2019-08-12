const NO_REMAINDER = 0;
const FOO_NUMBER = 3;
const BAR_NUMBER = 5;
const FOO_STRING = 'Foo';
const BAR_STRING = 'Bar';

function compute(number) {
	validate(number);
	if (number % BAR_NUMBER === NO_REMAINDER) return BAR_STRING;
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
