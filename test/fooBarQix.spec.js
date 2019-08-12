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

		it('should return "Foo" if the number is divisble by 3 only', () => {
			expect(fooBarQix.compute(6)).to.equal('Foo');
			expect(fooBarQix.compute(9)).to.equal('Foo');
		});

		it('should return "Bar" if the number is divisble by 5 only', () => {
			expect(fooBarQix.compute(10)).to.equal('Bar');
		});

		it('should return "FooBar" if the number is divisble by 3 and by 5 only', () => {
			expect(fooBarQix.compute(60)).to.equal('FooBar');
		});

		it('should return "Qix" if the number is divisble by 7 only', () => {
			expect(fooBarQix.compute(14)).to.equal('Qix');
		});

		it('should return "FooQix" if the number is divisble by 3 and 7 only', () => {
			expect(fooBarQix.compute(21)).to.equal('FooQix');
		});

		it('should return "BarQix" if the number is divisble by 5 and 7 only', () => {
			expect(fooBarQix.compute(140)).to.equal('BarQix');
		});

		it('should return "Foo" if the number contains 3 only', () => {
			expect(fooBarQix.compute(13)).to.equal('Foo');
		});

		it('should return "FooFoo" if the number is divisible by 3 and contains 3 only', () => {
			expect(fooBarQix.compute(3)).to.equal('FooFoo');
			expect(fooBarQix.compute(93)).to.equal('FooFoo');
		});
	});
});
