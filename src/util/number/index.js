const { NO_REMAINDER } = require('../../constants');

function isFactor(dividend, divisor) {
    return dividend % divisor === NO_REMAINDER;
}

function isNumber(value) {
    return typeof value === 'number';
}

module.exports = {
    isFactor,
    isNumber
};
