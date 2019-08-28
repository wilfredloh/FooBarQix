const { numUtil } = require('../../util');
const { BLANK_STRING, FOO_BAR_QIX_NUMBER_MAP } = require('../../constants');

function getFooBarQixNumberList() {
    return Object.keys(FOO_BAR_QIX_NUMBER_MAP);
}

function computeFooBarQixStringOrBlank(number, fooBarQixNumber) {
    if (numUtil.isFactor(number, fooBarQixNumber))
        return FOO_BAR_QIX_NUMBER_MAP[fooBarQixNumber];
    else return BLANK_STRING;
}

function build(number) {
    const fooBarQixNumberList = getFooBarQixNumberList();
    return fooBarQixNumberList
        .map(fooBarQixNumber =>
            computeFooBarQixStringOrBlank(number, fooBarQixNumber)
        )
        .join(BLANK_STRING);
}

module.exports = {
    build
};
