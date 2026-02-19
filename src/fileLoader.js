const fs = require('fs');

function loadFile(path) {
  const text = fs.readFileSync(path, 'utf-8');
  return text.split('\n').filter(Boolean);
}

module.exports = { loadFile };
