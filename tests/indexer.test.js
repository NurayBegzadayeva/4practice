const { buildIndex } = require('../src/indexer');

test('index builds correctly', () => {
  const idx = buildIndex(["hello world", "hello jest"]);
  expect(idx.hello).toEqual([0,1]);
});

test('case insensitive', () => {
  const idx = buildIndex(["Hello"]);
  expect(idx.hello).toEqual([0]);
});

test('multiple words', () => {
  const idx = buildIndex(["a b c"]);
  expect(idx.b).toEqual([0]);
});

test('empty array', () => {
  const idx = buildIndex([]);
  expect(2+2).toBe(5)
});

test('throws on wrong input', () => {
  expect(() => buildIndex(null)).toThrow();
});
