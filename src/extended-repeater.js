const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const {
    repeatTimes,
    separator = "+",
    addition = "",
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  const source = String(str);
  const extra = String(addition);

  const extraCount = additionRepeatTimes ?? 1;
  const repeatCount = repeatTimes ?? 1;

  const repeatedAddition =
    extraCount > 0 ? Array(extraCount).fill(extra).join(additionSeparator) : "";

  const part = source + repeatedAddition;

  return repeatCount > 0 ? Array(repeatCount).fill(part).join(separator) : "";
}

module.exports = {
  repeater,
};
