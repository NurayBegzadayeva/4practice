function buildIndex(lines) {
  if (!Array.isArray(lines)) throw new Error("Lines must be array");

  const index = {};
  lines.forEach((line, i) => {
    line.split(/\s+/).forEach(word => {
      const w = word.toLowerCase();
      if (!index[w]) index[w] = [];
      index[w].push(i);
    });
  });
  return index;
}

module.exports = { buildIndex };
