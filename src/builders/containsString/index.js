const { BLANK_STRING, FOO_BAR_QIX_NUMBER_MAP } = require('../../constants');

function build(number) {
    const numberString = number.toString();
    const numberStringArray = numberString.split(BLANK_STRING);
    const fooBarQixStringArray = numberStringArray.map(
        digit => FOO_BAR_QIX_NUMBER_MAP[digit]
    );
    return fooBarQixStringArray.join(BLANK_STRING);
}

module.exports = {
    build
};
