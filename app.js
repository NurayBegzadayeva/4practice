const { loadFile } = require('./src/fileLoader');
const { buildIndex } = require('./src/indexer');
const { search } = require('./src/search');

const query = process.argv[2];

if (!query) {
  console.log("Usage: node app.js <word>");
  process.exit(1);
}

const lines = loadFile('corpus.txt');
const index = buildIndex(lines);
const result = search(index, query);

console.log(`Found in lines: ${result.join(', ')}`);
