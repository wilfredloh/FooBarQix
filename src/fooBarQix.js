const NO_REMAINDER = 0;
const FOO_BAR_NUMBERS = [3, 5];
const FOO_BAR_STRINGS = ['Foo', 'Bar'];

function compute(number) {
	validate(number);
	return getFooBarString(number) || number;
}

function getFooBarString(number) {
	for (let index in FOO_BAR_NUMBERS) {
		if (isDivisible(number, FOO_BAR_NUMBERS[index]))
			return FOO_BAR_STRINGS[index];
	}
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
