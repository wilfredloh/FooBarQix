const { BLANK_STRING, FOO_BAR_QIX_NUMBER_MAP } = require('../../constants');

function getDigitsList(number) {
    return number.toString().split(BLANK_STRING);
}

function build(number) {
    const digitsList = getDigitsList(number);
    return digitsList
        .map(digit => FOO_BAR_QIX_NUMBER_MAP[digit])
        .join(BLANK_STRING);
}

module.exports = {
    build
};
