!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),a=document.querySelector("body");e.addEventListener("click",(function(){t=setInterval((function(){a.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(t),n.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d76fb99a.js.map
