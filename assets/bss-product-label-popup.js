!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),document.querySelector('script[src*="bss-pl.js"]')&&function(e){let t=window.location.pathname.split("/");var n=t[t.length-2];let i=1e4;27320==e.storeId&&(i=4e3),setTimeout((function(){!function(e,t,n){const i="products"===t,[o,s,...p]=n,a=""===o&&""===s,l="pages"===t?p.pop():"",r="collections"===t||p.includes("collections"),d="search"===t||l.startsWith("search-results")||p.includes("search"),c=!(r||i||d||a),u=t=>{let n=document.querySelector("#bss-popup-"+t.id);document.querySelector(`#bss-popup-${t.id} .close`).addEventListener("click",(function(){n.style.display="none"})),screen.width>768?("free"==e.currentPlan||0==t.desktop_animation_type?n.classList.add("slide-up"):0==t.desktop_position&&1==t.desktop_animation_type?n.classList.add("slide-left"):1==t.desktop_position&&1==t.desktop_animation_type?n.classList.add("slide-right"):2==t.desktop_animation_type&&n.classList.add("fade-in"),26172==e.storeId?document.querySelector("#bss-popup-"+t.id).classList.add("slide-up-26172"):document.querySelector("#bss-popup-"+t.id).classList.add("slide-up")):"free"==e.currentPlan||0==t.mobile_position&&0==t.mobile_animation_type?34332==e.storeId?n.classList.add("slide-down-34332"):n.classList.add("slide-down"):1==t.mobile_position&&0==t.mobile_animation_type?n.classList.add("slide-up"):1==t.mobile_animation_type&&n.classList.add("fade-in")};if(e.configDataPopup&&e.configDataPopup.length){const t=e.configDataPopup.filter((e=>{const t=e.pages.split(",");var n=null==e.custom_page?[]:e.custom_page.split(","),o=t.includes("1")&&i||t.includes("2")&&r||t.includes("7")&&a||t.includes("3")&&c||t.includes("4")&&d;if(e.check_custom_page)for(let e=0;e<n.length;e++)n[e].replace(/ /g,"")===window.location.href&&(o=!0);return o}));t.slice(0).reverse().map((n=>{var i,o,s;(function(e,t){var n=!0;if(0==t.customer_type)n=!0;else if(2==t.customer_type){n=!1;let i=e.customerTags.split(",");for(let e=0;e<i.length;e++)if(null!==t.customer_tags&&void 0!==t.customer_tags&&""!==i[e]&&t.customer_tags.includes(i[e])){n=!0;break}}else 1==t.customer_type&&(n="null"!=e.customerTags);return n})(e,n)||(o=n,(s=(i=t).indexOf(o))>-1&&i.splice(s,1))})),t.slice(0).reverse().map(((t,n)=>{let i=function(e,t){let n="",i="";return"free"==t.currentPlan?(n="position: fixed; max-width: 350px; bottom: 20px; left: 20px;",i="position: absolute; width: 100%; top: 20px;"):(n=0==e.desktop_position?`position: fixed; max-width: 350px; bottom: 0; left: 0; margin: 0 0 ${e.desktop_margin_top_bottom}px ${e.desktop_margin_left_right}px;`:`position: fixed; max-width: 350px; bottom: 0; right: 0; margin: 0 ${e.desktop_margin_left_right}px ${e.desktop_margin_top_bottom}px 0;`,i=0==e.mobile_position?`position: absolute; width: 100%; top: 0; margin-top: ${e.mobile_margin_top_bottom}px;`:`position: fixed; width: 100%; bottom: 0; margin-bottom: ${e.mobile_margin_top_bottom}px;`),`<div class='bss-popup-template-wrapper' id="bss-popup-${e.id}" style="align-items: center;\n                align-items: center;\n                justify-content: center;\n                background-color: transparent!important;\n                max-height: 100px;\n                contain: content;\n                z-index: 10;\n                transition: ease 1s;\n                ${screen.width>768?n+"display: flex;":i+(e.show_on_mobile?"display: flex;":"display: none;")}"\n                >\n                <div style="display: flex;\n                    align-items: flex-start;\n                    gap: 6px;\n                    background-color: white;\n                    border-radius: 10px;\n                    padding: 0px 10px;\n                    border: 1px solid #e1e1e1;\n                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n                    max-height: 100px;\n                    contain: content;\n                    z-index: 10;\n                    ${screen.width>768?"position: relative; max-width: 350px;":"position: relative; width: 90%;"}">\n                        <span class="close" style="position: absolute; top: 2px; right: 4px; cursor: pointer; font-size: 10px; z-index:7; width:10px; height:10px; background: transparent;">&#10006;</span>\n                        <div>\n                            <a href="${e.popup_link?unescape(e.popup_link):"URL:void(0)"}" target="${e.popup_link?"_blank":""}" style="text-decoration: none; color:black; justify-content: center; display: flex; align-items: center;">\n                                <img class="bss-popup-img-preview" src='${e.public_img_url}' style="max-height: auto; max-width: 60px; position: relative; margin: 10px 0px;"/>\n                            <a/>\n                        </div>\n                        <a href="${e.popup_link?unescape(e.popup_link):"URL:void(0)"}" target="${e.popup_link?"_blank":""}" style="text-decoration: none; color:black;">\n                            <div class="bss-popup-content" style="position: relative; overflow: hidden; display: flex;\n                                flex-direction: column;\n                                max-height: 100px;\n                                align-items: flex-start;\n                                justify-content: center;"\n                            >\n                            <a href="${e.popup_link?unescape(e.popup_link):"URL:void(0)"}" target="${e.popup_link?"_blank":""}" style="text-decoration: none; color:black;">\n                                <h4 style="font-size: 14px; color: black!important; font-weight: 700; margin-bottom: 0px; margin-top:10px; line-height: 1.8rem; display: -webkit-box; max-width: 100%;\n                                -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${unescape(e.heading_text)}</h4>\n                            </a>\n                            <a href="${e.popup_link?unescape(e.popup_link):"URL:void(0)"}" target="${e.popup_link?"_blank":""}" style="text-decoration: none; color:black;">\n                                <p style="font-size: 12px; color: black!important; font-weight: 500; line-height: 1.5rem; display: -webkit-box; max-width: 100%;\n                                -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">${unescape(e.content_text)}</p>\n                            </a>\n                            </div>\n                        </a>\n                </div>\n            </div>`}(t,e);if(i){let e=document.querySelector("body"),o=document.createElement("div");o.innerHTML=i,0==n?(e.append(o),u(t)):setTimeout((()=>{e.append(o),u(t)}),n*(1e3*t.display_time+25e3)),setTimeout((function(){(e=>{document.querySelector("#bss-popup-"+e.id).classList.add("fade-out")})(t)}),(n+1)*(1e3*t.display_time+25e3)-25e3)}}))}}(e,n,t)}),i)}(BSS_PL)}]);
