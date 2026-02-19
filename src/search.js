function search(index, word) {
  if (!word) throw new Error("Query required");
  return index[word.toLowerCase()] || [];
}

module.exports = { search };
