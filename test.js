// Uncomment the following lines to execute `npm test` in your terminal.
const assert = require('assert'); 
const { square } = require('./implementation');

describe('1square', function() {
  it('returns the square of a number', function() {
    assert.equal(square(2), 4);
  });
});

describe('2square', function() {
  it('returns the square of a number', function() {
    assert.equal(square(3), 9);
  });
});
