const { expect } = require('chai');
const FooBarQix = require('../src/FooBarQix');

describe('FooBarQix', () => {
    describe('.checkNum()', () => {
        // it('should return the string "Hello world!"', () => {
        //     expect(FooBarQix.helloWorld()).to.equal('Hello world!');
        // });

        it('should return the num', () => {
            expect(FooBarQix.checkNum(1)).to.equal(1);
        });
        it('should return the num', () => {
            expect(FooBarQix.checkNum(2)).to.equal(2);
        });
        it('should return the string "FooFoo"', () => {
            expect(FooBarQix.checkNum(3)).to.equal('FooFoo');
        });
        it('should return the num', () => {
            expect(FooBarQix.checkNum(4)).to.equal(4);
        });
        it('should return the string "BarBar"', () => {
            expect(FooBarQix.checkNum(5)).to.equal('BarBar');
        });
        it('should return the string "Foo"', () => {
            expect(FooBarQix.checkNum(6)).to.equal('Foo');
        });
        it('should return the string "QixQix"', () => {
            expect(FooBarQix.checkNum(7)).to.equal('QixQix');
        });
        it('should return the string "Bar"', () => {
            expect(FooBarQix.checkNum(10)).to.equal('Bar');
        });
        it('should return the string "Foo"', () => {
            expect(FooBarQix.checkNum(13)).to.equal('Foo');
        });
        it('should return the string "FooBarBar"', () => {
            expect(FooBarQix.checkNum(15)).to.equal('FooBarBar');
        });
        it('should return the string "FooFooFoo"', () => {
            expect(FooBarQix.checkNum(33)).to.equal('FooFooFoo');
        });
        it('should return the string "FooBarQix"', () => {
            expect(FooBarQix.checkNum(1357)).to.equal('FooBarQix');
        });
    });
});