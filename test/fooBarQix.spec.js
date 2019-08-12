const { expect } = require('chai');
const fooBarQix = require('../src/fooBarQix.js');

describe('FooBarQix', () => {
	describe('compute()', () => {
		it('should return 1 when the input is 1', () => {
			expect(fooBarQix.compute(1)).to.be.equal(1);
		});

		it('should throw an error if the input is not a number', () => {
			expect(() => fooBarQix.compute('1')).to.throw('"1" must be a number');
			expect(() => fooBarQix.compute(true)).to.throw('"true" must be a number');
		});
	});
});
