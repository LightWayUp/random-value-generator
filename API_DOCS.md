# API Documentations

## randomNumber([max])

* `max` [&lt;number&gt;][MDN Number Link] | [&lt;Number&gt;][MDN Number Link] The maximum value of the returned number. Defaults to `1`, if not provided or `null`.
* Returns: [&lt;number&gt;][MDN Number Link] A random number.
* Throws: [&lt;TypeError&gt;][MDN TypeError Link] Argument `max` must be a number.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `max` must not be `NaN`.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `max` must be finite.

Get a random number, where:

* `0 <= number < max`, if `max` is positive
* `0`, if max is `0`
* `max < number <= 0`, if `max` is negative

## randomInteger([max])

* `max` [&lt;number&gt;][MDN Number Link] | [&lt;Number&gt;][MDN Number Link] The maximum value of the returned integer. Defaults to `2`, if not provided or `null`.
* Returns: [&lt;number&gt;][MDN Number Link] A random integer.
* Throws: [&lt;TypeError&gt;][MDN TypeError Link] Argument `max` must be a number.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `max` must not be `NaN`.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `max` must be finite.

Get a random integer, where:

* `0 <= number < max`, if `max` is positive
* `0`, if max is `0`
* `max < number <= 0`, if `max` is negative

## randomBoolean()

* Returns: [&lt;boolean&gt;][MDN Boolean Link] Either `true` or `false`, each with about 50% chance.

Get a random boolean.

## randomString([len][, excludeSpecial])

* `len` [&lt;number&gt;][MDN Number Link] | [&lt;Number&gt;][MDN Number Link] The length of the returned string. Defaults to `1` if not provided or `null`.
* `excludeSpecial` [&lt;boolean&gt;][MDN Boolean Link] | [&lt;Boolean&gt;][MDN Boolean Link] Whether "special characters" should be excluded or not. Defaults to `false`, if not provided or `null`.
* Returns: [&lt;string&gt;][MDN String Link] A random string.
* Throws: [&lt;TypeError&gt;][MDN TypeError Link] Argument `len` must be an integer.
* Throws: [&lt;TypeError&gt;][MDN TypeError Link] Argument `excludeSpecial` must be a boolean.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must not be `NaN`.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must be finite.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must not be negative.

Get a random string consisting alphanumeric characters, and optionally some additional special characters (`~!@#$%^&()_+-={}[];',.`).

## randomHash([len])

**Deprecated: Use [`randomString()`](#randomstringlen-excludespecial) instead.**

* `len` [&lt;number&gt;][MDN Number Link] | [&lt;Number&gt;][MDN Number Link] The length of the returned string. Defaults to `1`, if not provided or `null`.
* Returns: [&lt;string&gt;][MDN String Link] A random string consisting alphanumeric characters.
* Throws: [&lt;TypeError&gt;][MDN TypeError Link] Argument `len` must be an integer.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must not be `NaN`.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must be finite.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must not be negative.

Get a random string consisting alphanumeric characters.  
Note: this is not a hashing function despite its name containing the word "hash".

## randomEmoji([len][, useArray])

Added in: v0.1.3

* `len` [&lt;number&gt;][MDN Number Link] | [&lt;Number&gt;][MDN Number Link] The number of emojis in the returned string or array. Defaults to `1`, if not provided or `null`.
* `useArray` [&lt;boolean&gt;][MDN Boolean Link] | [&lt;Boolean&gt;][MDN Boolean Link] Whether this function should return a string of concatenated emojis or an array of emojis. Defaults to `false`, if not provided or `null`.
* Returns: [&lt;string&gt;][MDN String Link] One or more random emojis.
* Throws: [&lt;TypeError&gt;][MDN TypeError Link] Argument `len` must be an integer.
* Throws: [&lt;TypeError&gt;][MDN TypeError Link] Argument `useArray` must be a boolean.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must not be `NaN`.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must be finite.
* Throws: [&lt;RangeError&gt;][MDN RangeError Link] Argument `len` must not be negative.

Get one or more random emojis. Some emojis might not display correctly on certain platforms, especially those that don't implement Emoji 12.0 standard.

[MDN Number Link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[MDN Boolean Link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[MDN String Link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[MDN TypeError Link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[MDN RangeError Link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
