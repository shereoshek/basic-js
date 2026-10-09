const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const digits = String(n);
  let maxNumber = -Infinity;

  for (let i = 0; i < digits.length; i++) {
    const candidate = digits.slice(0, i) + digits.slice(i + 1);
    const number = Number(candidate);

    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};

module.exports = {
  deleteDigit,
};
