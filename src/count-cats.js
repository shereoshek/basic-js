const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 */
function countCats(matrix) {
  let count = 0;

  for (const row of matrix) {
    for (const item of row) {
      if (item === "^^") {
        count++;
      }
    }
  }

  return count;
}

module.exports = {
  countCats,
};
