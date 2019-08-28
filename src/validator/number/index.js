const { numUtil } = require('../../util');

function validate(parameter) {
    if (!numUtil.isNumber(parameter))
        throw new Error(`"${parameter}" must be a number`);
}

module.exports = {
    validate
};
