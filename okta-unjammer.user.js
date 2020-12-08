// ==UserScript==
// @name        Okta Password Jammer unJammer
// @version     1
// @grant       none
// @description Removes the hidden form fields that mess up browser password saving
// @downloadURL https://github.com/dnelson-1901/greasemonkey-scripts/raw/master/okta-unjammer.user.js
// @include     https://*.okta.com/login/login.htm
// @run-at      document-end
// ==/UserScript==

// https://devforum.okta.com/t/firefox-asking-to-update-wrong-test-password-because-of-hidden-fields/10251/2

function fixup() 
{
	console.log("CAllback!");
	var nodes = document.querySelectorAll("input[id^=okta_hidden_pass]");
	console.log("Found "+nodes.length+" fields");

	var removed = 0;
	for (n of nodes) 
	{
		n.remove();
		removed++;
	}
    
	console.log("Removed "+removed+" hidden password fields");
}

// The fields are added via javascript, so try a cuople of times to remove
// them.

document.addEventListener ("DOMContentLoaded",fixup);

window.addEventListener('load', fixup);

window.setTimeout(fixup, 1000);

window.setTimeout(fixup, 2000);

window.requestIdleCallback(fixup, { timeout: 1000 });
