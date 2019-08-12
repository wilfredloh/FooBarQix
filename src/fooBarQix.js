const NO_REMAINDER = 0;
const BLANK_STRING = '';
const FOO_BAR_QIX_NUMBERS = [3, 5, 7];
const FOO_BAR_QIX_STRINGS = ['Foo', 'Bar', 'Qix'];

function compute(number) {
	validate(number);
	return buildDivisorString(number) || buildContainsString(number) || number;
}

function containsNumber(number, comparison) {
	return number.toString().includes(comparison);
}

function buildContainsString(number) {
	return FOO_BAR_QIX_NUMBERS.map((fooBarNumber, index) => {
		if (containsNumber(number, fooBarNumber)) return FOO_BAR_QIX_STRINGS[index];
		else return BLANK_STRING;
	}).join(BLANK_STRING);
}

function buildDivisorString(number) {
	return FOO_BAR_QIX_NUMBERS.map((fooBarNumber, index) => {
		if (isDivisible(number, fooBarNumber)) return FOO_BAR_QIX_STRINGS[index];
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
