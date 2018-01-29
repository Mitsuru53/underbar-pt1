_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
  it('roop array length times', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr.length).toEqual(arr.length);
  });
  it('given string argument returns array of characters', () => {
    const word = ['t', 'e', 's', 't'];
    const mappedArr = _.map(word, (char) => char);
    expect(mappedArr).toEqual(['t', 'e', 's', 't']);
    expect(mappedArr.length).toEqual(word.length);
  });
  it('roop string length times', () => {
    const word = ['t', 'e', 's', 't'];
    const mappedArr = _.map(word, (char) => char);
    expect(mappedArr.length).toEqual(word.length)
  });
  it('given empty array, returns empty array', () => {
    const emptyArray = [];
    const mappedArr = _.map(emptyArray, (char) => char);
    expect(mappedArr).toEqual(mappedArr);
  });
  it('given empty, returns empty array', () => {
    const emptyContent = '';
    const mappedArr = _.map(emptyContent, (char) => char);
    expect(mappedArr).toEqual([]);
  })
});
