const calcuateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('should be 1 + 4 = 5', function () {
    assert.equal(calculateNumber(1, 4), 5);
  });
  it('should be 1 + 2.8 = 4', function () {
    assert.equal(calculateNumber(1, 2.8), 4);
  });
  it('should be 2.2 + 4.7 = 7', function () {
   assert.equal(calculateNumber(2.2, 4.7), 7);
  });
  it('should be 1.2 + 3.7 = 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should be -2 + 4 = 2', function () {
    assert.equal(calculateNumber(-2, 4), 2);
  });
  it('should be 2.6 + -4.7 = -2', function () {
    assert.equal(calculateNumber(2.6, -4.7), -2);
  });
  it('should be -2.5 + -7.5 = -9', function () {
    assert.equal(calculateNumber(-2.5, -7.5), -9);
  });
});
