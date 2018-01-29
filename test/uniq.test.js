const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });
  it('de-dups a obj', () => {
    const obj = {
      name: 'wai',
      name: 'wai1',
      age: 27,
      sex: 'man'
    };
    expect(_.uniq(obj)).toEqual(['wai1', 27, 'man']);
  });
  it('returns empty array if given empty array', () => {
    const emptyArray = [];
    expect(_.uniq(emptyArray)).toEqual([]);
  });
  it('returns empty array if given empty obj', () => {
    const emptyArray = {};
    expect(_.uniq(emptyArray)).toEqual([]);
  });
});
