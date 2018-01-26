const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('two dimention and n = 1, returns 1 dimention array', () => {
    expect(_.first([['a', 'b', 'c'], ['d', 'e', 'f']])).toEqual(['a','b','c']);
  });

  it('two dimention and n=  2, returns two dimention array', () => {
    expect(_.first([['a', 'b', 'c'], ['d', 'e', 'f']],2)).toEqual([['a', 'b', 'c'], ['d', 'e', 'f']]);
  });

  it('two dimention and n > arrya length, returns two dimention array', () => {
    expect(_.first([['a', 'b', 'c'], ['d', 'e', 'f']],5)).toEqual([['a', 'b', 'c'], ['d', 'e', 'f']]);
  });
});
