window.addEventListener("DOMContentLoaded",(function(){!function(){const e=document.querySelector("html"),t=document.querySelector(".menu"),c=document.querySelector(".header__burger"),n=document.querySelector(".menu__close");let a=!1;const o=()=>{window.innerWidth<=1024&&!a?(a=!0,c.addEventListener("click",d),n.addEventListener("click",i),t.addEventListener("click",(function(e){e.target.closest(".menu__navigation a")&&i()}))):window.addEventListener("resize",o)};function d(){t.classList.add("active"),e.classList.add("overflow-hidden")}function i(){t.classList.remove("active"),e.classList.remove("overflow-hidden")}o()}(),function(){const e=document.querySelectorAll("[data-tab-title]");document.querySelector(".tabs")&&e.forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const c=document.querySelector("[data-tab-title].active"),n=document.querySelector("[data-tab-content].active"),a=e.getAttribute("data-tab");c&&(c.classList.remove("active"),n.classList.remove("active"));const o=document.querySelector('[data-tab-content][data-tab="'+a+'"]');e.classList.add("active"),o.classList.add("active")}))}))}()}));