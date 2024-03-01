const chai = require('chai');
const{ expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('Calculations using Chai', () => {
    it('should add two numbers corectly', () => {
        expect(calculateNumber('SUM', 1,2)).to.equal(3);
    });

    it('should subract two numbers correctly', () => {
        expect(calculateNumber('SUBTRACT', 5,2)).to.equal(3);
    });

    it('should divide two numbers correctly', () => {
        expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });

    it('should handle division by zero', () => {
        expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
});