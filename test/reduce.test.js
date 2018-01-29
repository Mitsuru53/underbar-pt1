const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });
  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });
  it('reduces an array of negative numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const negativeNums = [-1, -2, -3, -4, -5];
    const result = _.reduce(negativeNums, (a, b) => a + b, 0);
    expect(result).toEqual(-15);
  });
  it('reduces an array of negative numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const negativeNums = [-1, -2, -3, -4, -5];
    const result = _.reduce(negativeNums, (a, b) => a + b);
    expect(result).toEqual(-15);
  });
  it('reduces an empty array, *with* an explicit initial value for the accumulator', () => {
    const emptyArray = [];
    const result = _.reduce(emptyArray, (a, b) => a + b, 0);
    expect(result).toEqual(0);
  });
  it('reduces an empty array, *without* an explicit initial value for the accumulator', () => {
    const emptyArray = [];
    const result = _.reduce(emptyArray, (a, b) => a + b);
    expect(result).toEqual(undefined);
  });
});
