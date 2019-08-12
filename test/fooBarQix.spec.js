const { expect } = require('chai');
const fooBarQix = require('../src/fooBarQix.js');

describe('FooBarQix', () => {
	describe('compute()', () => {
		it('should return 1 when the input is 1', () => {
			expect(fooBarQix.compute(1)).to.be.equal(1);
		});
	});
});
