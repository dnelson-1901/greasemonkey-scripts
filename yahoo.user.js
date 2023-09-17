// ==UserScript==
// @name           Yahoo Mail Fixed Font
// @description    Fixed-font message bodies for Yahoo Mail
// @downloadURL    https://github.com/dnelson-1901/greasemonkey-scripts/raw/master/yahoo.user.js
// @version        1.2023.09.17.1
// @include        https://mail.yahoo.com/*
// @include        https://*.mail.yahoo.com/*
// @grant          GM_addStyle
// ==/UserScript==

var css = `

/* Default to monospace if the message 
   doesn't set a font of its own */
.msg-body {
	font-family: monospace;
}

/* Remove grey navbar at top */
div[id="ybar-inner-wrap"] > div:nth-child(2) {
  display: none;
}

/* Make top banner shrink to content */
div[role="banner"], 
div[role="banner"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) {
	line-height: inherit !important;
}
div[id="ybar"],
div[id="ybar-inner-wrap"] > div:nth-child(3) > div:nth-child(1),
._yb_11lnn {
  height: auto !important;
}

/* Make search field shrink to content */
#mail-search > div:nth-child(1), 
button[title="Search"],
#Atom .P_Z1E2YFn {
  padding: 0px !important;
  height: auto !important;
}

/* Shrink spacer to match new banner size */
section[role="banner"] 
{
  height: 38px !important;
}

/* shrink button bar to content */
[data-test-id="message-toolbar"] {
	height: inherit !important;
}

/* shrink button bar content */
[data-test-id="message-toolbar"] {
	padding: inherit !important;
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
//         heads[0].insertBefore(node,heads[0].firstChild);
//         heads[0].appendChild(node.cloneNode());
    }
}

