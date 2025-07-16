// Uncomment the following lines to execute `npm test` in your terminal.
const assert = require('assert'); 
const { square } = require('./implementation');

// Uncomment this
describe('square', function () {
  describe('1square.one', function() {
    it('returns the square of a number', function() {
      assert.equal(square(2), 4);
    });
  });

  //One more comment
  describe('2square.second', function() {
    it('returns the square of a number', function() {
      assert.equal(square(3), 9);
    });
  });
});
