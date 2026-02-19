const { loadFile } = require('../src/fileLoader');
const { buildIndex } = require('../src/indexer');
const { search } = require('../src/search');

test('integration: load + index + search', () => {
  const lines = loadFile('corpus.txt');
  const idx = buildIndex(lines);
  const result = search(idx, 'test');
  expect(Array.isArray(result)).toBe(true);
});

test('integration: file not empty', () => {
  const lines = loadFile('corpus.txt');
  expect(lines.length).toBeGreaterThan(0);
});
