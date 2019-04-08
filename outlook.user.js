// ==UserScript==
// @name     Outlook Online whitespace remover
// @description    Removes all redundant whitespace from mailbox view
// @version  1.1
// @grant    GM_addStyle
// @include  https://outlook.office.com/*
// ==/UserScript==


this.GM_addStyle = (aCss) => {
    'use strict';
    let head = document.getElementsByTagName('head')[0];
    if (head) {
      let style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.textContent = aCss;
      head.appendChild(style);
      return style;
    }
    return null;
  };


var css = `

._3NWSCOrMG7qAJvS4DNJDxC, .kShdRtQbaZr987nI2CuD5, .VRsPBiUohxRKvkOKoyH9O {
	height: auto !important;
}

._2DD-RIgHo7Z3_Rr8o0zxLz, ._34_bqC0c1-8H3B0lGzop-9 {
	height: auto !important;
}

.customScrollBar, body {
	scrollbar-width: auto !important;
	scrollbar-color: auto !important;
}

`;

GM_addStyle(css);
