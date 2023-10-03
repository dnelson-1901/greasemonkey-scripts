// ==UserScript==
// @name        Amazon ad marker
// @description make it more obvious which entries are ads
// @downloadURL https://github.com/dnelson-1901/greasemonkey-scripts/raw/master/amazon.user.js
// @include     https://www.amazon.com/*
// @version     1.2023.10.02.1
// @grant       none
// ==/UserScript==

var css = `

div.celwidget:has(.sp_desktop_sponsored_label),
[cel_widget_id="sp_detail"],
[data-component-type="sp-sponsored-result"],
[data-feature-name="sponsoredProducts"],
[data-feature-name="sponsoredProducts2"],
[data-feature-name="valuePick"],
[data-feature-name="heroQuickPromo"],
[data-cel-widget^="sp_detail"],
[data-cel-widget^="adplacements"],
[data-cel-widget*="SponsoredProducts"],
[data-cel-widget*="FEATURED_ASINS"],
[data-component-props*="sp_delivered"],
[id^="sims-consolidated-"],
[data-component-type^="sbv-"],
[class^="sbv-"],
[data-ad-id],
[data-aid],
div[data-ad-feedback]+div,
.s-shopping-adviser,
.sp-shoveler,
.AdHolder
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


