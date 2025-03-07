const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
    it('should return 9 when squaring -3', function() {
        const res = calculator.calculateSquare(-3);
        assert.strictEqual(res, 9);
    });
});


// Add your tests here