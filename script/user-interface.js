/**
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

const REPOSITORY_REPRESENTATION = getRepository().representation;

onerror = (message, source, lineNumber, columeNumber, error) => console.log(`An error occured, please report this at https://github.com/${REPOSITORY_REPRESENTATION}/issues/new .\n\nFull details, copy and paste into issue description:\n\n${error}`);

onload = setupUserInterface;

function setupUserInterface() {
    const findElement = query => {
        const temporaryElement = document.querySelector(query);
        if (!temporaryElement) {
            throw new Error(`Unable to find element by query \"${query}\"!`);
        }
        return temporaryElement;
    };
    findElement(".loading").setAttribute("hidden", "");
    findElement("form[title=\"Demo controls\"]").style.visibility = "visible";
}

function getRepository() {
    const owner = location.hostname.split(/\./gi)[0];
    const repository = location.pathname.split(/\//gi)[1];
    return {
        owner: owner,
        repository: repository,
        representation: `${owner}/${repository}`
    };
}

function unboxIfBoxed(object) {
    if (object instanceof Number || object instanceof Boolean || object instanceof String) {
        return object.valueOf();
    }
    return object;
}
