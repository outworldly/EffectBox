// ==UserScript==
// @name         Streamer Mode
// @namespace    http://tampermonkey.net/
// @version      2024-01-02
// @description  Hide your IP for streamers
// @author       Outworldly
// @match        https://outworldly.github.io/EffectBox/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('greet').id = 'streamer';
    document.getElementById("streamer").textContent="Streamer's Effect Box";
    document.getElementById('userscript').display = none;
})();
