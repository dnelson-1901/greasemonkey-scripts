// ==UserScript==
// @name        Discord UI fixer
// @description Allow collapsing of sidebar
// @downloadURL https://github.com/dnelson-1901/greasemonkey-scripts/raw/master/discord.user.js
// @include     https://*.discord.com/channels/*
// @version     1.2022.06.27.1
// @grant       none
// ==/UserScript==

function addbutton()
{
  /* A button that floats above all other content. */
  var button=`
<div>
  <button 
    id=toggle 
    style="position: absolute; z-index: 150;"
    title="Toggle Sidebar"
  >
    <<
  </button>
</div>
`;

  /* Find the sidebar.  All discord classes have random garbage at the end,
   * so we have to use a prefix match.  */
  var s = document.querySelector("[class^=sidebar-]");

  /* Insert our button right after it. */
  s.insertAdjacentHTML("afterend", button);
  console.log("added button");
  
  /* Clicking on the button toggles the sidebar on and off */
  document.getElementById("toggle").onclick = function (e) {
    if (s.style.display == "none") {
      s.style.display = "";
      e.target.innerText = "<<";
    } else {
      s.style.display = "none";
      e.target.innerText = ">>";
    }
  };
  console.log("added handler");

  /* also make the sidebar resizable */
  s.style.resize = "horizontal";
};

/* TODO: figure out how to make the function fire as soon as the sidebar is
 * created */
window.setTimeout(addbutton, 2000);
