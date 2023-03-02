const { assert } = require('chai');
const addNumbers = require('../public/js/calc');


describe('Test addNumbers function', () => {
  it('failing test', () => {
    assert.equal(addNumbers(1, 1), 1);
  });
  it('passing test', () => {
    assert.equal(addNumbers(1, 1), 2);
  });
});
