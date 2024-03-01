// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded number', function() {
        assert.strictEqual(calculateNumber(1, 3), 4)
        assert.strictEqual(calculateNumber(1, 3.7), 5)
    });

    it('should handle large numbers', function() {
        assert.strictEqual(calculateNumber(1e15, 2e15), 3e15);
        assert.strictEqual(calculateNumber(-1e15, -2e15), -3e15);
    });
})
