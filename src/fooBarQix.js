const NO_REMAINDER = 0;
const BLANK_STRING = '';
const FOO_BAR_NUMBERS = [3, 5];
const FOO_BAR_STRINGS = ['Foo', 'Bar'];

function compute(number) {
	validate(number);
	return buildDivisorString(number) || number;
}

function buildDivisorString(number) {
	return FOO_BAR_NUMBERS.map((fooBarNumber, index) => {
		if (isDivisible(number, fooBarNumber)) return FOO_BAR_STRINGS[index];
		else return BLANK_STRING;
	}).join(BLANK_STRING);
}

function isDivisible(dividend, divisor) {
	return dividend % divisor === NO_REMAINDER;
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
