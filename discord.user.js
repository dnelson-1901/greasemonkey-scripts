// ==UserScript==
// @name        Discord UI fixer
// @description Allow collapsing of sidebar
// @downloadURL https://github.com/dnelson-1901/greasemonkey-scripts/raw/master/discord.user.js
// @include     https://*.discord.com/channels/*
// @version     1.2022.04.14.1
// @grant       none
// ==/UserScript==

document
  .querySelector("[class^=sidebar-]")
  .insertAdjacentHTML(
    "afterend",
    '<div><div id=toggle style="position: absolute;z-index: 100;">[<]</div></div>'
  );

document.getElementById("toggle").onclick = function (e) {
  var s = document.querySelector("[class^=sidebar-]");
  if (s.style.display == "none") {
    s.style.display = "";
    e.target.innerText = "[<]";
  } else {
    s.style.display = "none";
    e.target.innerText = "[>]";
  }
};
