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
 * @author LightWayUp
 */

"use strict";

let testsProgress = 1;

function printProgress() {
    console.log(`Running test ${testsProgress++} of 32 of randomInteger`);
}

function run(random, assert, loop) {

    printProgress();

    assert(Number.isInteger(random.randomInteger()));

    printProgress();

    assert((() => {
        const x = random.randomInteger();
        return x === 0 || x === 1;
    })());

    printProgress();

    assert((() => {
        const x = random.randomInteger(2);
        return x === 0 || x === 1;
    })());

    printProgress();

    assert((() => {
        const x = random.randomInteger(null);
        return x === 0 || x === 1;
    })());

    printProgress();

    assert((() => {
        const x = random.randomInteger(undefined);
        return x === 0 || x === 1;
    })());

    printProgress();

    assert.deepStrictEqual(random.randomInteger(1), 0);

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(2019);
        return x < 2019 && x >= 0;
    }));

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(2.019);
        return x < 2.019 && x >= 0;
    }));

    printProgress();

    assert.deepStrictEqual(random.randomInteger(0), 0);

    printProgress();

    assert.deepStrictEqual(random.randomInteger(-0), -0);

    printProgress();

    assert((() => {
        const x = random.randomInteger(-2);
        return x === -0 || x === -1;
    })());

    printProgress();

    assert.deepStrictEqual(random.randomInteger(-1), -0);

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(-2019);
        return x > -2019 && x <= 0;
    }));

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(-2.019);
        return x > -2.019 && x <= 0;
    }));

    printProgress();

    assert((() => {
        const x = random.randomInteger(new Number(2));
        return x === 0 || x === 1;
    })());

    printProgress();

    assert.deepStrictEqual(random.randomInteger(new Number(1)), 0);

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(new Number(2019));
        return x < 2019 && x >= 0;
    }));

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(new Number(2.019));
        return x < 2.019 && x >= 0;
    }));

    printProgress();

    assert.deepStrictEqual(random.randomInteger(new Number(0)), 0);

    printProgress();

    assert.deepStrictEqual(random.randomInteger(new Number(-0)), -0);

    printProgress();

    assert((() => {
        const x = random.randomInteger(new Number(-2));
        return x === -0 || x === -1;
    })());

    printProgress();

    assert.deepStrictEqual(random.randomInteger(new Number(-1)), -0);

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(new Number(-2019));
        return x > -2019 && x <= 0;
    }));

    printProgress();

    assert(loop(() => {
        const x = random.randomInteger(new Number(-2.019));
        return x > -2.019 && x <= 0;
    }));

    printProgress();

    assert.throws(() => random.randomInteger(true), TypeError);

    printProgress();

    assert.throws(() => random.randomInteger(() => undefined), TypeError);

    printProgress();

    assert.throws(() => random.randomInteger({}), TypeError);

    printProgress();

    assert.throws(() => random.randomInteger("random-value-generator"), TypeError);

    printProgress();

    assert.throws(() => random.randomInteger(NaN), RangeError);

    printProgress();

    assert.throws(() => random.randomInteger(Number.NaN), RangeError);

    printProgress();

    assert.throws(() => random.randomInteger(Number.POSITIVE_INFINITY), RangeError);

    printProgress();

    assert.throws(() => random.randomInteger(Number.NEGATIVE_INFINITY), RangeError);
}

module.exports = {
    run
};
