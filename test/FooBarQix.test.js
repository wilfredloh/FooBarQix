const { expect } = require('chai');
const FooBarQix = require('../src/FooBarQix');

describe('FooBarQix', () => {
    describe('.helloWorld()', () => {
        it('should return the string "Hello world!"', () => {
            expect(FooBarQix.helloWorld()).to.equal('Hello world!');
        });
    });
});
