const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the sum of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        })
    });

    describe('SUBTRACT', function() {
        it('should return the subtraction of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4); 
        });
    });

    describe('DIVIDE', function() {
        it('should return the division of rounded numbers', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 5, 2), 2.5);
        });

        it('should handle division by zero and return "Error"', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});