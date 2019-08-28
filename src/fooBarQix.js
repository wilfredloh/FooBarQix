const { numValidator } = require('./validator');
const { containsStringBuilder, divisibleStringBuilder } = require('./builders');

function compute(number) {
    numValidator.validate(number);
    return (
        divisibleStringBuilder.build(number) +
            containsStringBuilder.build(number) || number
    );
}

module.exports = { compute };
