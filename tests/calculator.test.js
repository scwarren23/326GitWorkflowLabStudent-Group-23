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
    
});

describe ('Calculator Cosine Function', function() {
    const res = calculator.cosine(0);

    it('should return 1', function() {
        assert.strictEqual(res, 1);
    });
});

  
describe('log function', function() {
    const ln = calculator.naturalLog(1);
    const ln2 = calculator.naturalLog(5);
    it('should return 0', function() {
        assert.strictEqual(ln, Math.log(5));
    }); 
});

// Add your tests here

