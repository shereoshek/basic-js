/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 */
function sortByHeight(arr) {
  const heights = arr.filter((height) => height !== -1);
  heights.sort((a, b) => a - b);

  let index = 0;

  return arr.map((height) => {
    if (height === -1) {
      return -1;
    }

    return heights[index++];
  });
}

module.exports = {
  sortByHeight,
};
