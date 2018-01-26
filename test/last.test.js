const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('two dimention and n = 1, returns last dimention array', () => {
    expect(_.last([['a', 'b', 'c'], ['d', 'e', 'f']])).toEqual(['d', 'e', 'f']);
  });

  it('two dimention and n=  2, returns two dimention array', () => {
    expect(_.last([['a', 'b', 'c'], ['d', 'e', 'f']],2)).toEqual([['a', 'b', 'c'], ['d', 'e', 'f']]);
  });

  it('two dimention and n > arrya length, returns two dimention array', () => {
    expect(_.last([['a', 'b', 'c'], ['d', 'e', 'f']],5)).toEqual([['a', 'b', 'c'], ['d', 'e', 'f']]);
  });
});
