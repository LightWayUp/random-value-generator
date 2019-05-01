/**
 * @license
 * Copyright (c) 2019 vanished
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @author vanished
 */

/**
 * Use strict mode.
 */
"use strict";

/**
 * Code points of a list of emojis.
 * @ignore
 * @constant {object}
 * @readonly
 * @since 0.2.0
 */
/* Code points insertion */

/**
 * A string of characters for use with {@link randomString}.
 * @ignore
 * @constant {string}
 * @default
 * @readonly
 * @since 0.2.0
 */
const ALPHANUMERICS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Get a random number, where:
 *   0 <= number < max, if max is positive
 *   0, if max is 0
 *   max < number <= 0, if max is negative
 * @param {number|Number} [max=1] The maximum value of the returned number.
 * Defaults to 1 if not provided or null.
 * @return {number} A random number.
 * @throws {TypeError} Argument "max" must be a number.
 * @throws {RangeError} Argument "max" must not be NaN.
 * @throws {RangeError} Argument "max" must be finite.
 */
function randomNumber(max) {
  max = unboxIfBoxed(max);
  if (max == null) {
    max = 1;
  } else {
    if (typeof max !== "number") {
      throw new TypeError("max must be a number");
    } else if (Number.isNaN(max)) {
      throw new RangeError("max must not be NaN");
    } else if (!Number.isFinite(max)) {
      throw new RangeError("max must be finite");
    } else if (Number.isInteger(max) && !Number.isSafeInteger(max)) {
      console.log("max is not a safe integer, precision may be lost");
    }
  }
  return Math.random() * max;
}

/**
 * Get a random integer, where:
 *   0 <= number < max, if max is positive
 *   0, if max is 0
 *   max < number <= 0, if max is negative
 * @param {number|Number} [max=2] The maximum value of the returned integer.
 * Defaults to 2 if not provided or null.
 * @return {number} A random integer.
 * @throws {TypeError} Argument "max" must be a number.
 * @throws {RangeError} Argument "max" must not be NaN.
 * @throws {RangeError} Argument "max" must be finite.
 */
function randomInteger(max) {
  const number = randomNumber(max == null ? 2 : max);
  return (number < 0 ? Math.ceil : Math.floor)(number);
}

/**
 * Get a random boolean.
 * @return {boolean} Either "true" or "false", each with about 50% chance.
 */
function randomBoolean() {
  return Math.random() < 0.5;
}

/**
 * Get a random string consisting alphanumeric characters, and
 * optionally some additional special characters (~!@#$%^&()_+-={}[];',.).
 * @param {number|Number} [len=1] The length of the returned string.
 * Defaults to 1 if not provided or null.
 * @param {boolean|Boolean} [excludeSpecial=false] Whether
 * "special characters" should be excluded or not. Defaults to false.
 * @return {string} A random string.
 * @throws {TypeError} Argument "len" must be an integer.
 * @throws {TypeError} Argument "excludeSpecial" must be a boolean.
 * @throws {RangeError} Argument "len" must not be NaN.
 * @throws {RangeError} Argument "len" must be finite.
 * @throws {RangeError} Argument "len" must not be negative.
 */
function randomString(len, excludeSpecial) {
  len = unboxIfBoxed(len);
  excludeSpecial = unboxIfBoxed(excludeSpecial);
  if (!(excludeSpecial == null || typeof excludeSpecial === "boolean")) {
    throw new TypeError("excludeSpecial must be a boolean");
  }
  if (len == null) {
    len = 1;
  } else {
    if (!Number.isSafeInteger(validateLen(len))) {
      console.log("len is not a safe integer, precision may be lost");
    }
  }
  const characters = excludeSpecial ? ALPHANUMERICS : `${ALPHANUMERICS}~!@#$%^&()_+-={}[];',.`;
  let string = "";
  for (let i = 0; i < len; i++) {
    string += characters.charAt(randomInteger(characters.length));
  }
  return string;
}

/**
 * Get a random string consisting alphanumeric characters.
 * Note: this is not a hashing function despite its name containing the word "hash".
 * @param {number|Number} [len=1] The length of the returned string.
 * Defaults to 1 if not provided or null.
 * @return {string} A random string consisting alphanumeric characters.
 * @throws {TypeError} Argument "len" must be an integer.
 * @throws {RangeError} Argument "len" must not be NaN.
 * @throws {RangeError} Argument "len" must be finite.
 * @throws {RangeError} Argument "len" must not be negative.
 * @deprecated since 0.2.1
 */
function randomHash(len) {
  process.emitWarning("random.randomHash is deprecated. Use random.randomString instead.", "DeprecationWarning");
  return randomString(len, true);
}

/**
 * Get one or more random emojis. Some emojis might not display
 * correctly on certain platforms, especially those
 * that don't implement Emoji 12.0 standard.
 * @param {number|Number} [len=1] The number of emojis in the returned
 * string or array. Defaults to 1 if not provided or null.
 * @param {boolean|Boolean} [useArray=false] Whether this function
 * should return a string of concatenated emojis or an array of emojis.
 * Defaults to false.
 * @return {string} One or more random emojis.
 * @throws {TypeError} Argument "len" must be an integer.
 * @throws {TypeError} Argument "useArray" must be a boolean.
 * @throws {RangeError} Argument "len" must not be NaN.
 * @throws {RangeError} Argument "len" must be finite.
 * @throws {RangeError} Argument "len" must not be negative.
 * @since 0.1.3
 */
function randomEmoji(len, useArray) {
  len = unboxIfBoxed(len);
  useArray = unboxIfBoxed(useArray);
  if (!(useArray == null || typeof useArray === "boolean")) {
    throw new TypeError("useArray must be a boolean");
  }
  if (len == null) {
    len = 1;
  } else {
    if (!Number.isSafeInteger(validateLen(len))) {
      console.log("len is not a safe integer, precision may be lost");
    }
  }
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(codePoints[randomInteger(codePoints.length)].split(/\s/gi)
      .map(codePointSingle => String.fromCodePoint(Number(`0x${codePointSingle}`))).join(""));
  }
  return useArray ? result : result.join("");
}

/**
 * Internal function to validate length.
 * @ignore
 * @param {} len Length to be validated.
 * @returns {number} Length validated.
 * @throws {TypeError} Argument "len" must be an integer.
 * @throws {RangeError} Argument "len" must not be NaN.
 * @throws {RangeError} Argument "len" must be finite.
 * @throws {RangeError} Argument "len" must not be negative.
 * @since 0.2.0
 */
function validateLen(len) {
  if (typeof len !== "number") {
    throw new TypeError("len must be an integer");
  } else if (Number.isNaN(len)) {
    throw new RangeError("len must not be NaN");
  } else if (!Number.isFinite(len)) {
    throw new RangeError("len must be finite");
  } else if (!Number.isInteger(len)) {
    throw new TypeError("len must be an integer");
  } else if (len < 0) {
    throw new RangeError("len must be positive");
  }
  return len;
}

/**
 * Unbox Number, Boolean and String objects.
 * @ignore
 * @param {} object The object to be unboxed. If it isn't
 * an instance of Number, Boolean, or String, the original
 * object or value is returned.
 * @returns {} Value of unboxed Numbers, Booleans, or Strings.
 * The original object or value is returned if it isn't
 * an instance of Number, Boolean, or String.
 * @since 0.2.0
 */
function unboxIfBoxed(object) {
  if (object instanceof Number || object instanceof Boolean || object instanceof String) {
    return object.valueOf();
  }
  return object;
}

/**
 * An object of exported functions.
 * @ignore
 * @constant {object}
 * @property {function} randomNumber {@link randomNumber}
 * @property {function} randomInteger {@link randomInteger}
 * @property {function} randomBoolean {@link randomBoolean}
 * @property {function} randomString {@link randomString}
 * @property {function} randomHash {@link randomHash}
 * @property {function} randomEmoji {@link randomEmoji}
 * @readonly
 */
/* Exports insertion */
