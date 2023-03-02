const addNumbers = 'Group-Of-Five-Calc/public/js/calc';

const { assert } = require('chai');

describe('Test addNumbers function', () => {
  it('failing test', () => {
    assert.equal(addNumbers(1, 1), 1);
  });
});
