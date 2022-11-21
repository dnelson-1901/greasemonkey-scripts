// ==UserScript==
// @name           Gmail Fixed Font
// @description    Fixed-font message bodies for Gmail, plus whitespace removal
// @downloadURL    https://github.com/dnelson-1901/greasemonkey-scripts/raw/master/gmail.user.js
// @version        1.2022.11.21.1
// @include        http://mail.google.com/*
// @include        https://mail.google.com/*
// @include        http://*.mail.google.com/*
// @include        https://*.mail.google.com/*
// @grant          GM_addStyle
// ==/UserScript==

var css = "";

// Old gmail look:

// Plain-text Message Body
css += "div.ii, /* div.ii.gt.adP.adO, */ textarea.Ak { font-family: monospace,king; }";
// Compose Interface
css += ".editable { font-family: monospace,king; }";
// Print Preview
css += ".message div, .message div * { font-family: king,monospace !important; }";

// compacter than Compact index
// css += ".xY { height: auto !important; }";
css += ".WA .xY { display: inherit !important; }";
css += ".zt td.WA { padding-bottom: 0px !important; padding-top: 0px !important; }";
css += ".TC, .xY { padding-bottom: 0px !important; padding-top: 0px !important; }";

// compacter than Compact button bar
css += ".w-asV { margin-bottom: 1px !important; }";
css += ".G-atb, .G-as7-atb, .G-MI { margin-top: 1px !important; padding-bottom: 1px !important; }";

// Remove dead space on the right side of emails
css += "td.y3 { display: none !important; }";


// New gmail look:

css += `

/* Plain-text Message Body */
.a3s, .g6 { font: 14px monospace,king !important; }

/* Shrink stupid "Be Careful with this message" message */
.bzp, .bzp *, .bzq, .bzq * {
  margin: 0 !important;
  padding: 0 !important;
  height: auto !important;
}

/* Shrink message box and move it to the top */
.bAp.b8.UC .vh {
  min-height: inherit !important;
  padding: inherit !important;
  margin: inherit !important;
  left: inherit !important;
  bottom: inherit !important;
  top: 1em !important;
}

/* compact search bar */
.gb_Xa:not(.gb_Za) .gb_Ed { padding: inherit !important; }
.gb_Cc, .gb_Qd, .gb_7e, .gb_of, .gb_Pe button svg { height: auto !important; padding: inherit !important; }

`;

// compacter than Compact index
css += "tr.zA { padding-bottom: 0px !important; padding-top: 0px !important; }";
css += ".xT > .y2 { display:flex !important; }";
css += ".zA > .xY { line-height: inherit !important; }";
css += ".xT { align-items: center !important; }";
css += ".PF.PE { border-left: inherit !important; }";

// compacter than Compact button bar
css += ".w-asV { margin-bottom: 1px !important; }";
css += ".G-atb { height: auto !important; }";
css += ".T-I > .Bn { height: auto !important; background: white !important; border: 1px solid #aaa !important}";

// compact label list
css += ".TN { height: auto !important; }";
css += ".qj { margin-right: 0.5em; !important; }";
css += ".wT { max-width: inherit !important; min-width: inherit !important; }";
css += ".aeN.aeN { max-width: inherit !important; min-width: inherit !important; }";

// compact filter buttons
css += ".PY > .G6 { height: auto !important; margin: 0px !important; }";
css += ".HY .H5 { margin: 0 !important; }";
css += ".H0, .Oa { line-height: inherit !important; }";
css += ".Ol.Nk .N7, .H2, .Nk { height: auto !important; }";

// remove add-ons bar on right edge
css += ".bAw { display: none; !important }";


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

