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

		describe('divisible tests', () => {
			it('should return "Foo" if the number is divisble by 3 only', () => {
				expect(fooBarQix.compute(6)).to.equal('Foo');
				expect(fooBarQix.compute(9)).to.equal('Foo');
			});

			it('should return "Bar" if the number is divisble by 5 only', () => {
				expect(fooBarQix.compute(10)).to.equal('Bar');
			});

			it('should return "Qix" if the number is divisble by 7 only', () => {
				expect(fooBarQix.compute(14)).to.equal('Qix');
			});

			it('should return "FooBar" if the number is divisble by 3 and by 5 only', () => {
				expect(fooBarQix.compute(60)).to.equal('FooBar');
			});

			it('should return "FooQix" if the number is divisble by 3 and 7 only', () => {
				expect(fooBarQix.compute(21)).to.equal('FooQix');
			});

			it('should return "BarQix" if the number is divisble by 5 and 7 only', () => {
				expect(fooBarQix.compute(140)).to.equal('BarQix');
			});

			it('should return "FooBarQix" if the number is divisible by 3, 5 and 7 only', () => {
				expect(fooBarQix.compute(210)).to.equal('FooBarQix');
			});
		});

		describe('contains tests', () => {
			it('should return "Foo" if the number contains 3 only', () => {
				expect(fooBarQix.compute(13)).to.equal('Foo');
			});

			it('should return "Qix" if the number contains 7 only', () => {
				expect(fooBarQix.compute(17)).to.equal('Qix');
			});

			it('should return "BarFoo" if the number contains 3 and 5 only', () => {
				expect(fooBarQix.compute(53)).to.equal('BarFoo');
			});

			it('should return "FooQix" if the number contains 3 and 7 only', () => {
				expect(fooBarQix.compute(37)).to.equal('FooQix');
			});

			it('should return "BarQix" if the number contains 5 and 7 only', () => {
				expect(fooBarQix.compute(157)).to.equal('BarQix');
			});

			it('should return "FooBarQix" if the number contains 3, 5 and 7 only', () => {
				expect(fooBarQix.compute(1357)).to.equal('FooBarQix');
			});
		});

		describe('divisble and contains tests', () => {
			it('should return "FooFoo" if the number is divisible by 3 and contains 3 only', () => {
				expect(fooBarQix.compute(3)).to.equal('FooFoo');
				expect(fooBarQix.compute(93)).to.equal('FooFoo');
			});

			it('should return "BarBar" if the number is divisible by 5 and contains 5 only', () => {
				expect(fooBarQix.compute(5)).to.equal('BarBar');
				expect(fooBarQix.compute(25)).to.equal('BarBar');
			});

			it('should return "QixQix" if the number is divisible by 7 and contains 7 only', () => {
				expect(fooBarQix.compute(7)).to.equal('QixQix');
			});

			it('should return "FooFooFoo" if the number is divisible by 3 contains 3 twice', () => {
				expect(fooBarQix.compute(33)).to.equal('FooFooFoo');
			});

			it('should return "FooBarBar" if the number is divisible by 3 and 5 contains 5', () => {
				expect(fooBarQix.compute(15)).to.equal('FooBarBar');
			});
		});
	});
});
