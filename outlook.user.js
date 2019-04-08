// ==UserScript==
// @name     Outlook Online whitespace remover
// @description    Removes all redundant whitespace from mailbox view
// @version  1.2019.04.08.01
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

/* index header */
html[dir="ltr"] ._12RFwqyytlNdLGTEvbkGEF {
	padding: inherit !important;
}

/* index line */
._3NWSCOrMG7qAJvS4DNJDxC, .kShdRtQbaZr987nI2CuD5, .VRsPBiUohxRKvkOKoyH9O {
	height: auto !important;
}

/* index group line */
._3am_5-Qakpw6Y1uciOunxX {
	height: auto !important;
}

/* folder list */
._2DD-RIgHo7Z3_Rr8o0zxLz, ._34_bqC0c1-8H3B0lGzop-9 {
	height: auto !important;
}

/* remove thin scrollbar */
.customScrollBar, body {
	scrollbar-width: auto !important;
	scrollbar-color: auto !important;
}


`;

GM_addStyle(css);
