const { search } = require('../src/search');

test('find existing word', () => {
  expect(search({hello:[1]}, 'hello')).toEqual([1]);
});

test('missing word returns empty', () => {
  expect(search({}, 'abc')).toEqual([]);
});

test('negative: empty query throws', () => {
  expect(() => search({}, '')).toThrow();
});
