const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const chars = s2.split("");

  for (const char of s1) {
    const index = chars.indexOf(char);

    if (index !== -1) {
      count++;
      chars.splice(index, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
