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
const BASE_URL = `https://raw.githubusercontent.com/${REPOSITORY_REPRESENTATION}/master/`;

window.onerror = (message, source, lineNumber, columeNumber, error) => console.log(`An error occured, please report this at https://github.com/${REPOSITORY_REPRESENTATION}/issues/new .\n\nFull details, copy and paste into issue description:\n\n${error}`);

window.onload = () => {
    createScript().then(setupUserInterface);
};

async function createScript() {
    const showAlert = (url, error) =>
        alertAndReload(`Demo resource located at ${url} failed to load. Click \"OK\" to refresh the page and retry.\n\n${error}`);
    const indexURL = `${BASE_URL}index.js`;
    const indexText = await fetchText(indexURL).catch(error => showAlert(indexURL, error));
    if (indexText === undefined) {
        return;
    }
    const emojiCodePointsURL = `${BASE_URL}emoji-code-points.json`;
    const emojiCodePointsText = await fetchText(emojiCodePointsURL).catch(error => showAlert(emojiCodePointsURL, error));
    if (emojiCodePointsText === undefined) {
        return;
    }
    const scriptElement = document.createElement("script");
    scriptElement.innerHTML = indexText.replace("require(\"./emoji-code-points.json\")", emojiCodePointsText).replace(/\r/gi, "")
        .replace(/module\.exports\s=\s\{(\n*.\n*)*\};/gi, "").trim();
    document.body.appendChild(scriptElement);
}

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

function fetchText(url) {
    url = url instanceof URL ? url.href : unboxIfBoxed(url);
    if (typeof url !== "string") {
        throw new TypeError("Incorrect type for fetchText argument!");
    }
    return new Promise((resolve, reject) => fetch(url).then(response => {
            const statusCode = response.status;
            if (statusCode !== 200) {
                return reject(new Error(`Server responded with status code ${statusCode}`));
            }
            resolve(response.text());
        }).catch(error => reject(error)));
}

function alertAndReload(reason) {
    reason = reason instanceof Error ? reason.toString() : unboxIfBoxed(reason);
    if (typeof reason !== "string") {
        throw new TypeError("Incorrect type for alertAndReload argument!");
    }
    alert(reason);
    window.location.reload();
}

function getRepository() {
    const location = window.location;
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
