const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
    const result2 = _.pluck(people, 'sex');
    expect(result2).toEqual([undefined, undefined, undefined])
  });
  it('result array length equal given array length', () => {
    const people = [
      { name: 'wai', age: 27 },
      { name: 'wai', age: 27 },
      { name: 'wai', age: 27 },
      { name: 'wai', age: 27 },
      { name: 'wai', age: 27 }
    ];
    const result = _.pluck(people, 'age');
    expect(result.length).toEqual(people.length);
  });
});
