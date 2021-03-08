// ==UserScript==
// @name     Outlook Online whitespace remover
// @description    Removes all redundant whitespace from mailbox view
// @downloadURL    https://github.com/dnelson-1901/greasemonkey-scripts/raw/master/outlook.user.js
// @version  1.2021.03.07.1
// @grant    GM_addStyle
// @include  https://outlook.office.com/*
// @include  https://outlook.live.com/*
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
._12RFwqyytlNdLGTEvbkGEF, /* old */
.R13rCAdCs2xraNrPX7bVq, /* current */
zz {
  padding: unset !important;
}

/* index line */
._3NWSCOrMG7qAJvS4DNJDxC,  /* old */
.kShdRtQbaZr987nI2CuD5, /* old */
.VRsPBiUohxRKvkOKoyH9O, /* old */
._3RNhHhUHeoKc1ufD-hcz7q, /* current */
zz {
	height: auto !important;
}

/* index group line */
._3am_5-Qakpw6Y1uciOunxX, /* old */
._3Ib_26e5i7pKHbAhry3OpA, /* current */
zz {
	height: auto !important;
    background-color: inherit !important;
}

/* index checkbox column */
._2mUsG1A3iMqm06ISyGknWQ, /* old */
._2Cj0mOm3MaOSjSdUp5B4_7, /* current */
zz {
	min-height: auto !important;
}

/* subject column */
.YWkvAfVxfWoYoGc_xj-4c,
zz {
  height: auto !important;
}

/* folder list */
._2DD-RIgHo7Z3_Rr8o0zxLz, /* old */
._34_bqC0c1-8H3B0lGzop-9, /* old */
.qDw7SZ9r6S7r0_qZS1aIG, /* current */
zz {
	height: auto !important;
}

/* remove thin scrollbar */
.customScrollBar,
body,
zz {
	scrollbar-width: auto !important;
	scrollbar-color: auto !important;
}


`;

GM_addStyle(css);
