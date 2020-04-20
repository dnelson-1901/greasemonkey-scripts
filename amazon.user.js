// ==UserScript==
// @name        Amazon ad marker
// @description make it more obvious which entries are ads
// @downloadURL https://bitbucket.org/dnelson/greasemonkey-scripts/raw/tip/amazon.user.js
// @include     https://www.amazon.com/*
// @version     1.2020.04.20.1
// @grant       none
// ==/UserScript==

var css = `

[data-component-type="sp-sponsored-result"],
[data-feature-name="sponsoredProducts"],
[data-feature-name="sponsoredProducts2"],
[data-ad-id]
{
	outline: solid 3px #ddbb88;
	background-image: repeating-linear-gradient(45deg, #fff, #fff 0.5em,#ffeedd 0.5em,#ffeedd 0.6em );
    background-size: inherit;
    outline-offset: -3px;
}

`;



if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node);
    }
}


