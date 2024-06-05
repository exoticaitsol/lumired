var loadScript=function(e,t){var a=document.createElement("script");a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,t())}:(a.onreadystatechange=t,a.onload=t),a.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r)},startProductLabel2=function(e,t){if(e.cookie=function(e,a,r){if(void 0===a){var i=null;if(document.cookie&&""!=document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var s=t.trim(o[n]);if(s.substring(0,e.length+1)==e+"="){i=decodeURIComponent(s.substring(e.length+1));break}}return i}r=r||{},null===a&&(a="",r.expires=-1);var l,p="";r.expires&&("number"==typeof r.expires||r.expires.toUTCString)&&("number"==typeof r.expires?(l=new Date).setTime(l.getTime()+24*r.expires*60*60*1e3):l=r.expires,p="; expires="+l.toUTCString());var c=r.path?"; path="+r.path:"",d=r.domain?"; domain="+r.domain:"",_=r.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(a),p,c,d,_].join("")},e.plCookie={configuration:{expires:365,path:"/",domain:window.location.hostname},name:"scm_product_label_app",count:"scm_product_label_count",isInstalled:function(){var t=e.cookie(this.count);t||(t=0),t++,e.cookie(this.count,t,this.configuration);for(var a=document.head.getElementsByTagName("script"),r=0;r<a.length;++r)if(a[r].innerText.indexOf("asyncLoad")>=0&&a[r].innerText.indexOf("d3azqz9xba9gwd.cloudfront.net")>=0)return console.log("already has scripttag, load PL"),!0;return"installed"===e.cookie(this.name)&&t<3}},"product"==e.page&&!0!==e.pl.overrideUpdateSelectors&&"undefined"!=typeof Shopify&&void 0!==Shopify.OptionSelectors){var a=!1;if(void 0!==Shopify.urlParam&&Shopify.urlParam("variant")&&(a=!0),!a)try{Shopify.OptionSelectors.prototype.updateSelectors=function(t,a){var r=this.selectedValues(),i=this.product.getVariant(r);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,a),null!=this.historyState&&this.historyState.onVariantChange(i,this,a),this.variantIdField.disabled||null==this.historyState&&void 0!==e.pl.showLabel&&e.pl.showLabel(this.variantIdField.value)},e.pl.overrideUpdateSelectors=!0}catch(e){console.log("SECOMAPP PL OptionSelectors version mismatch")}}if(e.plCookie.isInstalled()&&!0!==e.pl.loadedApp){if(void 0===e)e={getCustomMarginWL:void 0};void 0===e.pl&&(e.pl={}),e.pl.labels=[{id:48962,priority:0,hide:0,image:"https://d3azqz9xba9gwd.cloudfront.net/storage/labels/pl-july-production-demo-store/free-gift-badge.jpg",position:"top_right",styles:"",text_styles:"",label_width:30,label_height:15,fixed_size:0,page:"product,collection,home,search",label_type:0,ignore_page:"",top:0,left:0,customize_position:0,rotate:0,opacity:1,link:"",alt:"",tooltip:"",animation:"none",margin:{top:0,left:0,right:0,bottom:0},conditions:{variant_apply:"variants",exclude_variants:"",include_variants:"43137794605226",is_new:"any",is_on_sale:"any",stock_status:"any",by_price:"base_price",discount_from:0,discount_to:10,discount_by:"percentage",discount_type:"fixed",stock_from:0,stock_to:10,new_days_threshold:10,low_stock_threshold:1,product_stock_computation:"per_variant"},design:{border:{size:0,color:"",style:"none"},shape_color:"#ffffff",text_color:"#5E5873",font_family:"Arial",font_size:12,font_style:{style:"normal",weight:"normal",decoration:"none"},shape_class:"pl-text-rectangle",font_size_ratio:"0.16"},group_ids:""}],e.pl.groups=[],e.isDefined=function(e){return void 0!==e},e.getPositionLeft=function(e){return"undefined"!==e.position()?e.position().left:0},e.getPositionTop=function(e){return"undefined"!==e.position()?e.position().top:0},e.getMarginWL=function(t,a){if("function"==typeof e.getCustomMarginWL)return e.getCustomMarginWL(t,a);if(navigator.userAgent.search("Firefox")>-1){if(void 0===t.get(0))return 0;var r=window.getComputedStyle(t.get(0));return parseInt(r.marginLeft,10)}return(t.outerWidth(!0)-t.outerWidth())/2},e.getMarginWR=function(t,a){if("function"==typeof e.getCustomMarginWR)return e.getCustomMarginWL(t,a);if(navigator.userAgent.search("Firefox")>-1){if(void 0===t.get(0))return 0;var r=window.getComputedStyle(t.get(0));return parseInt(r.marginRight,10)}return(t.outerWidth(!0)-t.outerWidth())/2},e.getMarginW=function(e){return(navigator.userAgent.search("Firefox")>-1?e.parent().outerWidth(!0)-e.width():e.outerWidth(!0)-e.outerWidth())/2},e.getMarginH=function(e){return(e.outerHeight(!0)-e.outerHeight())/2},e.getPadding=function(e){return e.innerWidth()-e.width()},e.decode=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value},e.pl.labelProduct=function(){var a=i();if(void 0!==e.pl.lpPath?imageParent=a.parents(e.pl.lpPath).first():imageParent=a.parents(":not(a):not(.zoomWrapper)").first(),imageParent.addClass("pl-parent"),a&&a.length>0){imageParent.prepend('<div class="pl-container pl-product">');var r=a.width()>0?a.width():0;0===r&&a.get(0)&&(r=a.get(0).width);var n=a.height()>0?a.height():0;0===n&&a.get(0)&&(n=a.get(0).height);var s=t(".pl-container");s.css({"margin-left":e.getMarginWL(a),"margin-right":e.getMarginWR(a),"margin-top":e.getMarginH(a),"margin-bottom":e.getMarginH(a),padding:e.getPadding(a)}),r>0&&s.css({width:r}),n>0&&s.css({height:n});var l=o();if(!l)for(var p=0;p<e.pl.product.variants.length;p++){var c=e.pl.product.variants[p];if(c.inventory_quantity>0||!c.hasOwnProperty("inventory_management")){l=c.id;break}}l||(l=e.pl.product.variants[0].id),e.pl.showLabel(l)}},e.pl.labelCollections=function(a){var i=r();searchCallback=function(a){if(void 0===e.pl.products&&(e.pl.products={}),a.results.forEach((function(t){if(0!==t.variants.length){e.pl.products[t.handle]=t,t.published_at=t.published_at.replace(/(\d)-/g,"$1/"),l=t.handle;var a=i[l];a instanceof Array?a.forEach((function(e){n(e,l)})):n(a,l)}else console.log("have empty variants in product")})),a.results_count>50&&(void 0===e.pl.search||!e.pl.search.hasOwnProperty(a.query))){void 0===e.pl.search&&(e.pl.search={}),e.pl.search[a.query]=!0;for(var r=2;r<=Math.floor((a.results_count+49)/50);r++){var o=a.query.split("&quot;").join('"');t.getScript("/search.js?page="+r+"&q="+o+"&view=scm.products.handle.js&_sc=1&design_theme_id=155877704027&app=pl")}}};var o="",s=0;for(var l in i)i.hasOwnProperty(l)&&(void 0!==a&&!0===a&&(e.pl.productImages={}),void 0===e.pl.productImages&&(e.pl.productImages={}),e.pl.productImages.hasOwnProperty(l)||(e.pl.productImages[l]=i[l],o.length>0&&(o+=" OR "),o+='handle:"'+l+'"',++s>=50&&(t.getScript("/search.js?q="+o+"&view=scm.products.handle.js&_sc=1&design_theme_id=155877704027&app=pl"),o="",s=0)));s>0&&t.getScript("/search.js?q="+o+"&view=scm.products.handle.js&_sc=1&design_theme_id=155877704027&app=pl")},e.pl.showLabel=function(a){t(".pl-container.pl-product .pl-image").hide();var r=e.pl.product;for(r.published_at=r.published_at.replace(/(\d)-/g,"$1/"),z=r.variants.length-1;z>=0;z--){var o=r.variants[z];if(Number(a)===o.id)break}for(var n,s=e.pl.labels,l=e.pl.groups,p=0,c=0;c<s.length;c++){if(-1!==(Y=s[c]).page.indexOf("product")){var d=Y.conditions,_=Y.design,f=Y.group_ids.split(",").map(Number),g=!0;if(!(Y.hide&&p>0)){var h=l.map((e=>{if(f.includes(e.id))return e}));if(document.querySelector('.pl-container.pl-product .pl-image[data-label-id="'+Y.id+'"]'))p++;else{if("yes"===d.is_on_sale){if(g)if(o.hasOwnProperty("compare_at_price")&&null!=o.compare_at_price)if(o.price<o.compare_at_price){var u=o.compare_at_price-o.price;"percentage"===d.discount_by&&(u=u/o.compare_at_price*100),"amount"===d.discount_by&&(u/=100),"fixed"===d.discount_type?u!==d.discount_fixed&&(g=!1):"range"===d.discount_type&&(d.discount_from&&d.discount_to?(u<d.discount_from||u>d.discount_to)&&(g=!1):d.discount_from?u<d.discount_from&&(g=!1):d.discount_to&&u>d.discount_to&&(g=!1))}else g=!1;else g=!1}else"no"===d.is_on_sale&&g&&o.hasOwnProperty("compare_at_price")&&o.price<o.compare_at_price&&(g=!1);var m,y=r.published_at.split(" "),v=y[0]+" "+y[1];if("yes"===d.is_new?g&&(new Date-Date.parse(v))/864e5>d.new_days_threshold&&(g=!1):"no"===d.is_new?g&&(new Date-Date.parse(v))/864e5<=d.new_days_threshold&&(g=!1):"date_range"===d.is_new&&g&&(d.new_date_from&&d.new_date_to?(Date.parse(v)<Date.parse(d.new_date_from)||Date.parse(v)>Date.parse(d.new_date_to))&&(g=!1):d.new_date_from?Date.parse(v)<Date.parse(d.new_date_from)&&(g=!1):d.new_date_to&&Date.parse(v)>Date.parse(d.new_date_to)&&(g=!1)),d.collections){var w=d.collections.split(",").map((e=>+e));if(g)for(g=!1,z=0;z<r.collections.length;z++){var b=r.collections[z];if(w.indexOf(b)>=0){g=!0;break}}}if(d.exclude_collections){var x=d.exclude_collections.split(",").map((e=>+e));if(g)for(z=0;z<r.collections.length;z++){var P=r.collections[z];if(x.indexOf(P)>=0){g=!1;break}}}if(d.tags){var O=d.tags.split(",");if(g&&(g=!1,r.hasOwnProperty("tags")))for(z=0;z<r.tags.length;z++)if(O.indexOf(r.tags[z])>=0){g=!0;break}}if(d.exclude_tags){var S=d.exclude_tags.split(",");if(g&&r.hasOwnProperty("tags"))for(z=0;z<r.tags.length;z++)if(S.indexOf(r.tags[z])>=0){g=!1;break}}if("in_stock"===d.stock_status?g&&o.inventory_quantity<=0&&o.hasOwnProperty("inventory_management")&&(g=!1):"out_of_stock"===d.stock_status?g&&(o.inventory_quantity>0||!o.hasOwnProperty("inventory_management"))&&(g=!1):"low_stock"===d.stock_status?g&&(o.inventory_quantity<=0||o.inventory_quantity>d.low_stock_threshold||!o.hasOwnProperty("inventory_management"))&&(g=!1):"stock_range"===d.stock_status&&g&&(o.hasOwnProperty("inventory_management")?d.stock_from&&d.stock_to?(o.inventory_quantity<d.stock_from||o.inventory_quantity>d.stock_to)&&(g=!1):d.stock_from?o.inventory_quantity<d.stock_from&&(g=!1):d.stock_to&&o.inventory_quantity>d.stock_to&&(g=!1):g=!1),(d.hasOwnProperty("from_price")||d.hasOwnProperty("to_price"))&&g&&(d.hasOwnProperty("from_price")&&o.price<100*d.from_price&&(g=!1),d.hasOwnProperty("to_price")&&g&&!0===g&&o.price>100*d.to_price&&(g=!1)),(d.hasOwnProperty("from_weight")||d.hasOwnProperty("to_weight"))&&g&&(d.hasOwnProperty("from_weight")&&(!o.hasOwnProperty("weight")||0===o.weight||o.weight<d.from_weight)&&(g=!1),d.hasOwnProperty("to_weight")&&g&&(!o.hasOwnProperty("weight")||0===o.weight||o.weight>d.to_weight)&&(g=!1)),"matching_and_variants"===d.variant_apply)if(g){var k=d.exclude_variants.split(",");t.inArray(o.id+"",k)>=0&&(g=!1)}else m=d.include_variants.split(","),t.inArray(o.id+"",m)>=0&&(g=!0);else"variants"===d.variant_apply?(g=!1,m=d.include_variants.split(","),t.inArray(o.id+"",m)>=0&&(g=!0)):"select_all"===d.variant_apply&&(g=!0);if((d.starts_at||d.ends_at)&&g&&(d.starts_at&&Date.now()<Date.parse(d.starts_at)&&(g=!1),d.ends_at&&g&&Date.now()>Date.parse(d.ends_at)&&(g=!1)),g){if(p++,(Z=document.createElement("div")).setAttribute("data-label-id",Y.id),Z.classList.add("pl-image"),Z.classList.add("pl-animation"),0===Y.customize_position&&Z.classList.add(Y.position),Z.style.width=(Y.label_width>=0?Y.label_width:30)+(Y.fixed_size?"px":"%"),1===Y.customize_position&&(Z.style.top=Y.top+"%",Z.style.left=Y.left+"%"),Z.style.margin=Y.margin.top+"px "+Y.margin.right+"px "+Y.margin.bottom+"px "+Y.margin.left+"px",Z.style.transform="rotate("+Y.rotate+"deg)",Z.style.opacity=Y.opacity,Z.style.animationName=Y.animation,0===Y.label_type){Z.style.height="fit-content",Z.style.cssText+=Y.styles,(A=document.createElement("img")).classList.add("pl-w-100"),A.setAttribute("src",Y.image),Z.appendChild(A)}else{var A;if(0===Y.image.length)_.shape_class&&Z.classList.add(_.shape_class),Z.style.backgroundColor=_.shape_color,Z.style.height=(Y.label_height>=0?Y.label_height:30)+(Y.fixed_size?"px":"%");else Z.style.height="fit-content",(A=document.createElement("img")).classList.add("pl-w-100"),A.setAttribute("src",Y.image),Y.alt?.length?A.setAttribute("alt",Y.alt):A.setAttribute("alt","Deco product label"),Y.alt?.length?A.setAttribute("alt",Y.alt):A.setAttribute("alt","Deco product label"),Z.appendChild(A);_.border&&(Z.style.border=_.border.style+" "+_.border.size+"px "+_.border.color),_.border_radius&&(Z.style.borderRadius=_.border_radius+"px"),Z.style.cssText+=Y.styles}if(Y.text&&1===Y.label_type){var E,M=e.decode(Y.text);if(M.indexOf("{SAVE_PERCENT}")>=0){var C=0;o.hasOwnProperty("compare_at_price")&&o.price<o.compare_at_price&&(C=100*(o.compare_at_price-o.price)/o.compare_at_price,C=Math.round(C)),M=M.replace("{SAVE_PERCENT}",C)}if(M.indexOf("{MAX_SALE}")>=0){var L=0;for(z=0;z<r.variants.length;z++)r.variants[z].hasOwnProperty("compare_at_price")&&r.variants[z].price<r.variants[z].compare_at_price&&(C=100*(r.variants[z].compare_at_price-r.variants[z].price)/r.variants[z].compare_at_price,(C=Math.round(C))>L&&(L=C));M=M.replace("{MAX_SALE}",L)}if(M.indexOf("{MIN_SALE}")>=0){for(var q=100,z=0;z<r.variants.length;z++)r.variants[z].hasOwnProperty("compare_at_price")&&r.variants[z].price<r.variants[z].compare_at_price&&(C=100*(r.variants[z].compare_at_price-r.variants[z].price)/r.variants[z].compare_at_price,(C=Math.round(C))<q&&(q=C));M=M.replace("{MIN_SALE}",q)}if(M.indexOf("{SAVE_AMOUNT}")>=0){var D=0;o.hasOwnProperty("compare_at_price")&&o.price<o.compare_at_price&&(D=o.compare_at_price-o.price),M=D%100==0?M.replace("{SAVE_AMOUNT}",D/100):D%10==0?M.replace("{SAVE_AMOUNT}",(D/100).toFixed(1)):M.replace("{SAVE_AMOUNT}",(D/100).toFixed(2))}if(M.indexOf("{PRICE}")>=0&&(M=M.replace("{PRICE}",(o.price/100).toFixed(2))),M.indexOf("{MIN_PRICE}")>=0&&(M=M.replace("{MIN_PRICE}",(r.price/100).toFixed(2))),M.indexOf("{MAX_PRICE}")>=0){var R=0;for(z=0;z<r.variants.length;z++)r.variants[z].price>R&&(R=r.variants[z].price);M=M.replace("{MAX_PRICE}",(R/100).toFixed(2))}if(M.indexOf("{NEW_FOR}")>=0){var I=(new Date-Date.parse(r.published_at))/864e5;I=I<0?0:Math.ceil(I),M=M.replace("{NEW_FOR}",I)}if(M.indexOf("{SKU}")>=0&&(n=o.sku?o.sku:"",M=M.replace("{SKU}",n)),M.indexOf("{STOCK}")>=0){var N=o.inventory_quantity>=0?o.inventory_quantity:0;M=M.replace("{STOCK}",N)}if(0!==_.font_size_ratio){var T=i();E=Y.fixed_size?Math.sqrt(Y.label_height/_.font_size_ratio):Math.sqrt(T.get(0).height*Y.label_height/100/_.font_size_ratio)}E=E||_.font_size;var j=document.createElement("span");j.classList.add("pl-text"),j.style.color=_.text_color?_.text_color:"",j.style.fontSize=_.font_size?(0===_.font_size_ratio?_.font_size:E)+"px":"",_.font_style&&(j.style.fontWeight=_.font_style.weight,j.style.fontStyle=_.font_style.style,j.style.textDecoration=_.font_style.decoration),j.style.letterSpacing=_.letter_spacing?_.letter_spacing+"px":"",j.style.cssText+=Y.text_styles,j.style.wordBreak="break-word",j.innerHTML+=M,Z.appendChild(j)}if(Y.link?.length>0&&Z.addEventListener("click",(function(){window.open(Y.link,"_blank")})),Y.tooltip?.length>0){var W=document.createElement("span");W.classList.add("pl-tooltip");var F=e.decode(Y.tooltip);W.innerHTML=F,Z.appendChild(W)}if(f.length){for(var H=!1,U=0;U<h.length;U++){if(J=h[U]){if(K=document.querySelector('.pl-container.pl-product .pl-group[data-group-id="'+J.id+'"]')){if(K.querySelector('.pl-image[data-label-id="'+Y.id+'"]'))continue;0===Y.customize_position&&Z.classList.remove(Y.position),K.appendChild(Z)}else{var V=document.createElement("div");V.classList.add("pl-group"),V.classList.add(J.direction),V.classList.add(J.position),V.setAttribute("data-group-id",J.id),V.style.gap=J.gap+"px";var Q="fixed"===J.position_unit_type?"px":"%",X=J.position.split("_")[1];"top"==X?V.style.top=J.vertical+Q:"bottom"==X&&(V.style.bottom=J.vertical+Q);var B=J.position.split("_")[2];"left"==B?V.style.left=J.horizontal+Q:"right"==B&&(V.style.right=J.horizontal+Q),V.style.cssText+=J.styles,0===Y.customize_position&&Z.classList.remove(Y.position),V.appendChild(Z),document.querySelector(".pl-container.pl-product")?.appendChild(V)}H=!0}}H||document.querySelector(".pl-container.pl-product")?.appendChild(Z)}else document.querySelector(".pl-container.pl-product")?.appendChild(Z);for(U=0;U<h.length;U++){var J;if(J=h[U])for(var K=document.querySelector('.pl-product .pl-group[data-group-id="'+J.id+'"]'),G=J.label_ids.split(",").map(Number),$=0;$<G.length;$++){var Y=K?.querySelector('.pl-image[data-label-id="'+G[$]+'"]');if(Y){var Z=Y;Y.remove(),K.appendChild(Z)}}}}}}}}},e.pl.showCollectionLabels=function(a,r){var i,o=a.hasOwnProperty("selected_or_first_available_variant_id")?a.selected_or_first_available_variant_id:0,n=null;if(o)for(R=0;R<a.variants.length;R++)if(a.variants[R].id===o){n=a.variants[R];break}if(0!==(i=void 0===e.pl.lpsPath||0===t(r).parents(".pl-parent").length?t(".pl-container",r):t(".pl-container",t(r).parents(".pl-parent").first())).length){for(var s=e.pl.labels,l=e.pl.groups,p=0,c=0;c<s.length;c++){if(-1!==(Y=s[c]).page.indexOf(e.page)){var d=Y.conditions,_=Y.design,f=Y.group_ids.split(",").map(Number),g=!0;if(!(Y.hide&&p>0)){var h=l.map((e=>{if(f.includes(e.id))return e}));if(i[0].querySelector('.pl-image[data-label-id="'+Y.id+'"]'))p++;else{if("yes"===d.is_on_sale){if(g)if(a.hasOwnProperty("compare_at_price")&&null!=a.compare_at_price)if(a.price<a.compare_at_price){var u=a.compare_at_price-a.price;"percentage"===d.discount_by&&(u=u/a.compare_at_price*100),"amount"===d.discount_by&&(u/=100),"fixed"===d.discount_type?u!==d.discount_fixed&&(g=!1):"range"===d.discount_type&&(d.discount_from&&d.discount_to?(u<d.discount_from||u>d.discount_to)&&(g=!1):d.discount_from?u<d.discount_from&&(g=!1):d.discount_to&&u>d.discount_to&&(g=!1))}else g=!1;else g=!1}else"no"===d.is_on_sale&&g&&a.hasOwnProperty("compare_at_price")&&a.price<a.compare_at_price&&(g=!1);var m,y=a.published_at.split(" "),v=y[0]+" "+y[1];if("yes"===d.is_new?g&&(new Date-Date.parse(v))/864e5>d.new_days_threshold&&(g=!1):"no"===d.is_new?g&&(new Date-Date.parse(v))/864e5<=d.new_days_threshold&&(g=!1):"date_range"===d.is_new&&g&&(d.new_date_from&&d.new_date_to?(Date.parse(v)<Date.parse(d.new_date_from)||Date.parse(v)>Date.parse(d.new_date_to))&&(g=!1):d.new_date_from?Date.parse(v)<Date.parse(d.new_date_from)&&(g=!1):d.new_date_to&&Date.parse(v)>Date.parse(d.new_date_to)&&(g=!1)),d.collections){var w=d.collections.split(",").map((e=>+e));if(g)for(g=!1,R=0;R<a.collections.length;R++){var b=a.collections[R];if(w.indexOf(b)>=0){g=!0;break}}}if(d.exclude_collections){var x=d.exclude_collections.split(",").map((e=>+e));if(g)for(R=0;R<a.collections.length;R++)if(b=a.collections[R],x.indexOf(b)>=0){g=!1;break}}if(d.tags){var P=d.tags.split(",");if(g&&(g=!1,a.hasOwnProperty("tags")))for(R=0;R<a.tags.length;R++)if(P.indexOf(a.tags[R])>=0){g=!0;break}}if(d.exclude_tags){var O=d.exclude_tags.split(",");if(g&&a.hasOwnProperty("tags"))for(R=0;R<a.tags.length;R++)if(O.indexOf(a.tags[R])>=0){g=!1;break}}if("in_stock"===d.stock_status){if(g)for(g=!1,R=0;R<a.variants.length;R++)if((m=a.variants[R]).inventory_quantity>0||!m.hasOwnProperty("inventory_management")){g=!0;break}}else if("out_of_stock"===d.stock_status){if(g)for(R=0;R<a.variants.length;R++)if((m=a.variants[R]).inventory_quantity>0||!m.hasOwnProperty("inventory_management")){g=!1;break}}else if("low_stock"===d.stock_status){if(g)if(g=!1,"per_variant"==d.product_stock_computation){for(R=0;R<a.variants.length;R++)if((m=a.variants[R]).inventory_quantity>0&&m.inventory_quantity<=d.low_stock_threshold&&m.hasOwnProperty("inventory_management")){g=!0;break}}else{for(N=0,R=0;R<a.variants.length;R++){if(!(m=a.variants[R]).hasOwnProperty("inventory_management")){N=-1;break}m.inventory_quantity>=0&&(N+=m.inventory_quantity)}N>0&&N<=d.low_stock_threshold&&(g=!0)}}else if("stock_range"===d.stock_status&&g)if(g=!1,"per_variant"==d.product_stock_computation){for(R=0;R<a.variants.length;R++)if((m=a.variants[R]).inventory_quantity>=d.stock_from&&m.inventory_quantity<=d.stock_to&&m.hasOwnProperty("inventory_management")){g=!0;break}}else{for(N=0,R=0;R<a.variants.length;R++){if(!(m=a.variants[R]).hasOwnProperty("inventory_management")){N=-1;break}m.inventory_quantity>=0&&(N+=m.inventory_quantity)}d.stock_from&&d.stock_to?N>=d.stock_from&&N<=d.stock_to&&(g=!0):d.stock_from?N>=d.stock_from&&(g=!0):d.stock_to&&N<=d.stock_to&&(g=!0)}if((d.hasOwnProperty("from_price")||d.hasOwnProperty("to_price"))&&g&&(d.hasOwnProperty("from_price")&&a.price<100*d.from_price&&(g=!1),d.hasOwnProperty("to_price")&&g&&!0===g&&a.price>100*d.to_price&&(g=!1)),(d.hasOwnProperty("from_weight")||d.hasOwnProperty("to_weight"))&&g)for(g=!1,R=0;R<a.variants.length&&(m=a.variants[R],g=!0,d.hasOwnProperty("from_weight")&&(!m.hasOwnProperty("weight")||0===m.weight||m.weight<d.from_weight)&&(g=!1),d.hasOwnProperty("to_weight")&&g&&(!m.hasOwnProperty("weight")||0===m.weight||m.weight>d.to_weight)&&(g=!1),!g);R++);if("matching_and_variants"===d.variant_apply)if(g){var S=d.exclude_variants.split(",");for(R=0;R<a.variants.length;R++)if(m=a.variants[R],t.inArray(m.id+"",S)>=0){g=!1;break}}else{var k=d.include_variants.split(",");for(R=0;R<a.variants.length;R++)if(m=a.variants[R],t.inArray(m.id+"",k)>=0){g=!0;break}}else if("variants"===d.variant_apply){for(g=!1,k=d.include_variants.split(","),R=0;R<a.variants.length;R++)if(m=a.variants[R],t.inArray(m.id+"",k)>=0){g=!0;break}}else"select_all"===d.variant_apply&&(g=!0);if((d.starts_at||d.ends_at)&&g&&(d.starts_at&&Date.now()<Date.parse(d.starts_at)&&(g=!1),d.ends_at&&g&&Date.now()>Date.parse(d.ends_at)&&(g=!1)),g){if(p++,(Z=document.createElement("div")).setAttribute("data-label-id",Y.id),Z.classList.add("pl-image"),Z.classList.add("pl-animation"),0===Y.customize_position&&Z.classList.add(Y.position),Z.style.width=(Y.label_width>=0?Y.label_width:30)+(Y.fixed_size?"px":"%"),1===Y.customize_position&&(Z.style.top=Y.top+"%",Z.style.left=Y.left+"%"),Z.style.margin=Y.margin.top+"px "+Y.margin.right+"px "+Y.margin.bottom+"px "+Y.margin.left+"px",Z.style.transform="rotate("+Y.rotate+"deg)",Z.style.opacity=Y.opacity,Z.style.animationName=Y.animation,0===Y.label_type){Z.style.height="fit-content",Z.style.cssText+=Y.styles,(A=document.createElement("img")).classList.add("pl-w-100"),A.setAttribute("src",Y.image),Y.alt?.length?A.setAttribute("alt",Y.alt):A.setAttribute("alt",a.handle),Z.appendChild(A)}else{var A;if(0===Y.image.length)_.shape_class&&Z.classList.add(_.shape_class),Z.style.backgroundColor=_.shape_color,Z.style.height=(Y.label_height>=0?Y.label_height:30)+(Y.fixed_size?"px":"%");else Z.style.height="fit-content",(A=document.createElement("img")).classList.add("pl-w-100"),A.setAttribute("src",Y.image),Y.alt?.length?A.setAttribute("alt",Y.alt):A.setAttribute("alt",a.handle),Z.appendChild(A);_.border&&(Z.style.border=_.border.style+" "+_.border.size+"px "+_.border.color),_.border_radius&&(Z.style.borderRadius=_.border_radius+"px"),Z.style.cssText+=Y.styles}if(Y.text&&1===Y.label_type){var E,M=e.decode(Y.text);if(M.indexOf("{SAVE_PERCENT}")>=0){var C=0;n?n.hasOwnProperty("compare_at_price")&&n.price<n.compare_at_price&&(C=100*(n.compare_at_price-n.price)/n.compare_at_price,C=Math.round(C)):a.hasOwnProperty("compare_at_price")&&a.price<a.compare_at_price&&(C=100*(a.compare_at_price-a.price)/a.compare_at_price,C=Math.round(C)),M=M.replace("{SAVE_PERCENT}",C)}if(M.indexOf("{MAX_SALE}")>=0){var L=0;for(R=0;R<a.variants.length;R++)a.variants[R].hasOwnProperty("compare_at_price")&&a.variants[R].price<a.variants[R].compare_at_price&&(C=100*(a.variants[R].compare_at_price-a.variants[R].price)/a.variants[R].compare_at_price,(C=Math.round(C))>L&&(L=C));M=M.replace("{MAX_SALE}",L)}if(M.indexOf("{MIN_SALE}")>=0){var q=100;for(R=0;R<a.variants.length;R++)a.variants[R].hasOwnProperty("compare_at_price")&&a.variants[R].price<a.variants[R].compare_at_price&&(C=100*(a.variants[R].compare_at_price-a.variants[R].price)/a.variants[R].compare_at_price,(C=Math.round(C))<L&&(q=C));M=M.replace("{MIN_SALE}",q)}if(M.indexOf("{SAVE_AMOUNT}")>=0){var z=0;n?n.hasOwnProperty("compare_at_price")&&n.price<n.compare_at_price&&(z=n.compare_at_price-n.price):a.hasOwnProperty("compare_at_price")&&a.price<a.compare_at_price&&(z=a.compare_at_price-a.price),M=z%100==0?M.replace("{SAVE_AMOUNT}",z/100):z%10==0?M.replace("{SAVE_AMOUNT}",(z/100).toFixed(1)):M.replace("{SAVE_AMOUNT}",(z/100).toFixed(2))}if(M.indexOf("{PRICE}")>=0&&(M=n?M.replace("{PRICE}",(n.price/100).toFixed(2)):M.replace("{PRICE}",(a.price/100).toFixed(2))),M.indexOf("{MIN_PRICE}")>=0&&(M=M.replace("{MIN_PRICE}",(a.price/100).toFixed(2))),M.indexOf("{MAX_PRICE}")>=0){for(var D=0,R=0;R<a.variants.length;R++)a.variants[R].price>D&&(D=a.variants[R].price);M=M.replace("{MAX_PRICE}",(D/100).toFixed(2))}if(M.indexOf("{NEW_FOR}")>=0){var I=(new Date-Date.parse(a.published_at))/864e5;I=I<0?0:Math.ceil(I),M=M.replace("{NEW_FOR}",I)}if(M.indexOf("{STOCK}")>=0){var N=0;for(R=0;R<a.variants.length;R++)(m=a.variants[R]).hasOwnProperty("inventory_management")&&m.inventory_quantity>=0&&(N+=m.inventory_quantity);M=M.replace("{STOCK}",N)}0!==_.font_size_ratio&&void 0!==r.get(0)&&(E=Y.fixed_size?Math.sqrt(Y.label_height/_.font_size_ratio)-3:Math.sqrt(r.get(0).offsetHeight*Y.label_height/100/_.font_size_ratio)-3),E=E||_.font_size;var T=document.createElement("span");T.classList.add("pl-text"),T.style.color=_.text_color?_.text_color:"",T.style.fontSize=_.font_size?(0===_.font_size_ratio?_.font_size:E)+"px":"",_.font_style&&(T.style.fontWeight=_.font_style.weight,T.style.fontStyle=_.font_style.style,T.style.textDecoration=_.font_style.decoration),T.style.letterSpacing=_.letter_spacing?_.letter_spacing+"px":"",T.style.cssText+=Y.text_styles,T.style.wordBreak="break-word",T.innerHTML+=M,Z.appendChild(T)}if(Y.link?.length>0&&Z.addEventListener("click",(function(){window.open(Y.link,"_blank")})),Y.tooltip?.length>0){var j=document.createElement("span");j.classList.add("pl-tooltip");var W=e.decode(Y.tooltip);j.innerHTML=W,Z.appendChild(j)}if(f.length){for(var F=!1,H=0;H<h.length;H++){if(J=h[H]){if(K=i[0].querySelector('.pl-group[data-group-id="'+J.id+'"]')){if(K.querySelector('.pl-image[data-label-id="'+Y.id+'"]'))continue;var U=Z.cloneNode(!0);0===Y.customize_position&&U.classList.remove(Y.position),K.appendChild(U)}else{var V=document.createElement("div");V.classList.add("pl-group"),V.classList.add(J.direction),V.classList.add(J.position),V.setAttribute("data-group-id",J.id),V.style.gap=J.gap+"px";var Q="fixed"===J.position_unit_type?"px":"%",X=J.position.split("_")[1];"top"==X?V.style.top=J.vertical+Q:"bottom"==X&&(V.style.bottom=J.vertical+Q);var B=J.position.split("_")[2];"left"==B?V.style.left=J.horizontal+Q:"right"==B&&(V.style.right=J.horizontal+Q),V.style.cssText+=J.styles;U=Z.cloneNode(!0);0===Y.customize_position&&U.classList.remove(Y.position),V.appendChild(U),i.append(V)}F=!0}}F||i.append(Z)}else i.append(Z)}}}}}if(i.length)for(H=0;H<h.length;H++){var J;if(J=h[H])for(var K=i[0].querySelector('.pl-group[data-group-id="'+J.id+'"]'),G=J.label_ids.split(",").map(Number),$=0;$<G.length;$++){var Y=K?.querySelector('.pl-image[data-label-id="'+G[$]+'"]');if(Y){var Z=Y;Y.remove(),K.appendChild(Z)}}}return null}},t("div.pl-container").remove(),"product"===e.page&&(e.pl.labelProduct(),t(window).resize((function(){var a=i();a&&a.length>0&&t(".pl-product").css({width:a.width()>0?a.width():a.get(0).width,height:a.height()>0?a.height():a.get(0).height,"margin-left":e.getMarginWL(a),"margin-right":e.getMarginWR(a),"margin-top":e.getMarginH(a),"margin-bottom":e.getMarginH(a),padding:e.getPadding(a)})})),t(".single-option-selector").change((function(){if(e.isDefined(Shopify.urlParam)&&e.isDefined(Shopify.OptionSelectors)){var t=o();if(!t)return console.log("no variantId"),!1;e.pl.showLabel(t)}else console.log("No Shopify.OptionSelectors")}))),"collection"!==e.page&&"home"!==e.page&&"search"!==e.page&&"cart"!==e.page&&"product"!==e.page||(e.pl.labelCollections(),t(window).resize((function(){var e=r();for(var t in e){var a=e[t];a instanceof Array?a.forEach((function(e){s(e)})):s(a)}})),"collection"!==e.page&&"home"!==e.page&&"search"!==e.page&&"cart"!==e.page||t(document).ajaxSuccess((function(){e.pl.labelCollections()}))),e.pl.loadedApp=!0}function r(){var a=void 0===e.pl.pisRegex?t('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-pl a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])').has('img[src*="/products/"]:not([class*="not-sca-pl"]), img[src*="/no-image"], img[data-src*="/products/"]:not([class*="not-sca-pl"]), img[data-src*="/no-image"]'):t(e.pl.pisRegex),r={};return a.each((function(e,a){if(t(a).attr("href")||t(a).attr("data-href")){var i=t(a).attr("href"),o=(i=i?i.split("/"):(i=t(a).attr("data-href")).split("/"))[i.length-1].split(/[?#]/)[0];r.hasOwnProperty(o)?((s=r[o])instanceof Array||(s=[s],r[o]=s),s.push(a)):r[o]=a;var n=decodeURI(o);if(o!==n)if(r.hasOwnProperty(n)){var s=r[n];s instanceof Array||(s=[s],r[n]=s),s.push(a)}else r[n]=a}})),r}function i(){var a;void 0===e.pl.piRegex?a=t('img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".jp"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".JP"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".png"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".PNG"]'):void 0!==(a=t(e.pl.piRegex))&&0!==a.length||(void 0===e.pl.retry?e.pl.retry=1:e.pl.retry=e.pl.retry+1,e.pl.retry<5&&setTimeout((function(){e.pl.labelProduct()}),1e3));var r,i=0,o=t("meta[property='og:title']").attr("content");return void 0!==e.pl.piRegex&&1===a.length?r=a.first():a.each((function(e,a){if("0"!==t(a).css("opacity")&&"hidden"!==t(a).css("visibility")&&"none"!==t(a).css("display")){var n=t(a).width();if(o){var s=t(a).attr("alt");s&&s.indexOf(o)>=0&&(n*=2)}n>i&&(i=n,r=a)}})),void 0===r&&a.length>0&&a.each((function(e,a){if("0"!==t(a).css("opacity")&&"hidden"!==t(a).css("visibility")&&"none"!==t(a).css("display")){var o=a.width;o>i&&(i=o,r=a)}})),void 0===r&&a.length>0&&(r=a.first()),t(r)}function o(){var t=!!e.isDefined(Shopify.urlParam)&&Shopify.urlParam("variant");if(t||(t=location.search.split("variant=")[1]),!t){var a=!!e.isDefined(Shopify.OptionSelectors)&&document.getElementById(Shopify.OptionSelectors.domIdPrefix);if(!a)return!1;var r=a.querySelector("[selected]");if(!r)return!1;t=r.value}return t}function n(a,r){var i;if(void 0!==e.pl.pi2sRegex){if(e.pl.pi2sParent){var o=t(a).parents(e.pl.pi2sParent).first();i=o.length?t(e.pl.pi2sRegex,o):t(e.pl.pi2sRegex,a)}else i=t(e.pl.pi2sRegex,a);0===i.length&&(i=t(e.pl.pi2sRegex))}else i=t("img:not(.sca-fg-img-collect)",a);var n,s,l=!1;0===i.length&&(i=t('img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".jp"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".png"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".JP"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".PNG"]',t(a).parent()),l=!0),0===i.length&&(i=t('img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".jp"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".png"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".JP"],img[src*="/products/"][src*="/cdn.shopify.com/s/files/"][src*=".PNG"]',t(a).parent().parent()),l=!0),n=0===i.length?t(a):i.first();var p=a.getAttribute("href");void 0===e.pl.lpsPath?(s=n.parents(":not(a):not(.zoomWrapper)").first().addClass("pl-parent"),0===t(".pl-container.pl-collection",n.parents(".pl-parent").first()).length&&n.parents(":not(.zoomWrapper):not(a:has(.zoomWrapper))").first().prepend('<a class="pl-container pl-collection" href="'+p+'">')):(s=n.parents(e.pl.lpsPath).first().addClass("pl-parent"),0===t(".pl-container.pl-collection",n.parents(".pl-parent").first()).length&&n.parents(e.pl.lpsPath).first().prepend('<a class="pl-container pl-collection" href="'+p+'">'),l=!0),l&&(a=s);var c=t(a);t(".pl-collection",a).css({"margin-left":e.getMarginWL(c),"margin-right":e.getMarginWR(c),"margin-top":e.getMarginH(c),"margin-bottom":e.getMarginH(c),padding:e.getPadding(c)});var d=e.pl.products[r];e.pl.showCollectionLabels(d,a)}function s(a){var r=t(a);t(".pl-collection",a).css({"margin-left":e.getMarginWL(r),"margin-right":e.getMarginWR(r),"margin-top":e.getMarginH(r),"margin-bottom":e.getMarginH(r),padding:e.getPadding(r)})}},SECOMAPP=SECOMAPP||new Object;SECOMAPP.pl=SECOMAPP.pl||new Object,"undefined"==typeof jQuery?loadScript("//code.jquery.com/jquery-1.11.1.min.js",(function(){SECOMAPP.jQuery=jQuery.noConflict(),SECOMAPP.jQuery.ajaxSetup({cache:!0}),SECOMAPP.pl.jQuery=SECOMAPP.jQuery,SECOMAPP.pl.loadedJs=!0,startProductLabel2(SECOMAPP,SECOMAPP.jQuery)})):(jQuery.ajaxSetup({cache:!0}),SECOMAPP.pl.jQuery=jQuery,SECOMAPP.pl.loadedJs=!0,startProductLabel2(SECOMAPP,jQuery));