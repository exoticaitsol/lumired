window.onload=function(){const e=document.querySelector(".site-header"),t=e.offsetHeight;function o(){let o=window.scrollY>t;e.classList.toggle("site-header--scroll",o)}document.documentElement.style.setProperty("--scroll-padding",t-1+"px"),o(),window.addEventListener("scroll",(function(){o()}))};
