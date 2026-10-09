/**
 * Create transformed array based on the control sequences
 * that original array contains.
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const deleted = new Array(arr.length).fill(false);
  const doubleNext = new Array(arr.length).fill(false);

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    switch (value) {
      case "--discard-next": {
        const next = i + 1;

        if (next < arr.length && !deleted[next]) {
          deleted[next] = true;
        }

        break;
      }

      case "--discard-prev": {
        const prev = i - 1;

        if (prev >= 0 && !deleted[prev]) {
          deleted[prev] = true;

          const index = result.findIndex(
            (item) => item.sourceIndex === prev && item.isOriginal,
          );

          if (index !== -1) {
            result.splice(index, 1);
          }
        }

        break;
      }

      case "--double-next": {
        const next = i + 1;

        if (next < arr.length && !deleted[next]) {
          doubleNext[next] = true;
        }

        break;
      }

      case "--double-prev": {
        const prev = i - 1;

        if (prev >= 0 && !deleted[prev]) {
          result.push({
            value: arr[prev],
            sourceIndex: prev,
            isOriginal: false,
          });
        }

        break;
      }

      default:
        if (!deleted[i]) {
          result.push({
            value,
            sourceIndex: i,
            isOriginal: true,
          });

          if (doubleNext[i]) {
            result.push({
              value,
              sourceIndex: i,
              isOriginal: false,
            });
          }
        }
    }
  }

  return result.map((item) => item.value);
}

module.exports = { transform };
