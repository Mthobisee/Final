$(document).ready(function(){!function modalClick(){function toggleOverlay(){if(classie.has(overlay,"open")){classie.remove(overlay,"open"),classie.remove(modalContainer,"overlay-open"),$("body").removeClass("stop-scrolling"),classie.add(overlay,"close");var e=function(n){if(support.transitions){if("visibility"!==n.propertyName)return;this.removeEventListener(transEndEventName,e)}classie.remove(overlay,"close")};support.transitions?overlay.addEventListener(transEndEventName,e):e()}else classie.has(overlay,"close")||(classie.add(overlay,"open"),classie.add(modalContainer,"overlay-open"),$("body").addClass("stop-scrolling"))}for(var buttons=document.querySelectorAll(".btn-trigger"),i=1;i<=buttons.length;i++)eval("var triggerBttn"+i+' = document.getElementById("trigger-overlay-'+i+'" );'),eval("triggerBttn"+i+'.addEventListener("click", toggleOverlay);');for(var x=0;x<buttons.length;x++)buttons[x].onclick=function(){for(var e=this.getAttribute("id"),n=e.slice(-1),t=1;t<=buttons.length;t++)$(".modal-"+t).hide();$(".modal-"+n).show()};var modalContainer=document.querySelector(".modalContainer"),overlay=document.querySelector("div.overlay"),closeBttn=overlay.querySelector("div.overlay-close"),transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions};$(".overlay .btn-close").click(function(e){$("body").bind("touchmove",function(e){return!0})}),closeBttn.addEventListener("click",toggleOverlay)}()});