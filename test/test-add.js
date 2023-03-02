const chai = require('chai');

const { assert } = chai;
const { addNumbers } = require('../public/js/calc');

describe('Test addNumbers function', () => {
  it('failing test sum equals 1', () => {
    assert.equal(addNumbers(1, 1), 1);
  });
  it('passing test sum equals 2', () => {
    assert.equal(addNumbers(1, 1), 2);
  });
});
