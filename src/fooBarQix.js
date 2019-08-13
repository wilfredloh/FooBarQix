const NO_REMAINDER = 0;
const BLANK_STRING = '';
const FOO_BAR_QIX_NUMBER_MAP = {
	3: 'Foo',
	5: 'Bar',
	7: 'Qix'
};

function compute(number) {
	validate(number);
	return buildDivisibleString(number) + buildContainsString(number) || number;
}

function computeFooBarQixStringOrBlank(number, fooBarQixNumber) {
	if (isDivisible(number, fooBarQixNumber))
		return FOO_BAR_QIX_NUMBER_MAP[fooBarQixNumber];
	else return BLANK_STRING;
}

function buildContainsString(number) {
	const numberString = number.toString();
	const numberStringArray = numberString.split(BLANK_STRING);
	const fooBarQixStringArray = numberStringArray.map(
		digit => FOO_BAR_QIX_NUMBER_MAP[digit]
	);
	return fooBarQixStringArray.join(BLANK_STRING);
}

function buildDivisibleString(number) {
	const fooBarQixNumberArray = getFooBarQixNumberArray();
	const fooBarQixStringArray = fooBarQixNumberArray.map(fooBarQixNumber =>
		computeFooBarQixStringOrBlank(number, fooBarQixNumber)
	);
	return fooBarQixStringArray.join(BLANK_STRING);
}

function getFooBarQixNumberArray() {
	return Object.keys(FOO_BAR_QIX_NUMBER_MAP);
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
