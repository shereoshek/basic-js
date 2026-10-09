const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const normalizedKey = key.toUpperCase();
    let keyIndex = 0;

    const result = message.toUpperCase().replace(/[a-z]/gi, (char) => {
      const charCode = char.charCodeAt(0) - 65;
      const keyCode =
        normalizedKey.charCodeAt(keyIndex % normalizedKey.length) - 65;

      keyIndex++;

      return String.fromCharCode(((charCode + keyCode) % 26) + 65);
    });

    return this.isDirect ? result : [...result].reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const normalizedKey = key.toUpperCase();
    let keyIndex = 0;

    const result = message.toUpperCase().replace(/[a-z]/gi, (char) => {
      const charCode = char.charCodeAt(0) - 65;
      const keyCode =
        normalizedKey.charCodeAt(keyIndex % normalizedKey.length) - 65;

      keyIndex++;

      return String.fromCharCode(((charCode - keyCode + 26) % 26) + 65);
    });

    return this.isDirect ? result : [...result].reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
