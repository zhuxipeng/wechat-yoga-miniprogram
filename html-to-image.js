!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var r="application/font-woff",o="image/jpeg",i={woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function u(t){var e=function(t){var e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return i[e]||""}function c(t){return-1!==t.search(/^(data:)/)}function a(t,e){return"data:".concat(e,";base64,").concat(t)}var s,f=(s=0,function(){return s+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(s)});function l(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function h(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function d(t,e){void 0===e&&(e={});var n,r,o,i=e.width||(r=h(n=t,"border-left-width"),o=h(n,"border-right-width"),n.clientWidth+r+o),u=e.height||function(t){var e=h(t,"border-top-width"),n=h(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:i,height:u}}var v=16384;function p(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),o=r.length,i=new Uint8Array(o),u=0;u<o;u+=1)i[u]=r.charCodeAt(u);n(new Blob([i],{type:e.type?e.type:"image/png"}))}))}function g(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){return e(r)},r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=t}))}function m(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function w(t,r,o){return e(this,void 0,void 0,(function(){var e,i,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",i=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),i.setAttribute("width","".concat(r)),i.setAttribute("height","".concat(o)),i.setAttribute("viewBox","0 0 ".concat(r," ").concat(o)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),i.appendChild(u),u.appendChild(t),[2,m(i)]}))}))}var y={};function b(t,r){return e(this,void 0,void 0,(function(){var e,o,i;return n(this,(function(n){return e=function(t,e){var n=t.replace(/\?.*/,"");return e&&(n=t),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),n}(t,r.includeQueryParams),null!=y[e]?[2,y[e]]:(r.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime()),o=function(e){var n="";if(r.imagePlaceholder){var o=r.imagePlaceholder.split(/,/);o&&o[1]&&(n=o[1])}var i="Failed to fetch resource: ".concat(t);return e&&(i="string"==typeof e?e:e.message),i&&console.error(i),{blob:n,contentType:""}},i=window.fetch(t,r.fetchRequestInit).then((function(t){return t.blob().then((function(e){return{blob:e,contentType:t.headers.get("Content-Type")||""}}))})).then((function(t){var e=t.blob,n=t.contentType;return new Promise((function(t,r){var o=new FileReader;o.onloadend=function(){return t({contentType:n,blob:o.result})},o.onerror=r,o.readAsDataURL(e)}))})).then((function(t){var e,n=t.blob;return{contentType:t.contentType,blob:(e=n,e.split(/,/)[1])}})).catch(o),y[e]=i,[2,i])}))}))}function x(t,e,n){var r=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t){return l(t).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n);return document.createTextNode("".concat(r,"{").concat(o,"}"))}function P(t,e,n){var r=window.getComputedStyle(t,n),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var i=f();try{e.className="".concat(e.className," ").concat(i)}catch(t){return}var u=document.createElement("style");u.appendChild(x(i,n,r)),e.appendChild(u)}}function S(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,g(e)]}))}))}function E(t,r){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,b(e=t.poster,r)];case 1:return o=n.sent(),[2,g(a(o.blob,u(e)||o.contentType))]}}))}))}function T(t,e){return e instanceof Element?(function(t,e){var n=window.getComputedStyle(t),r=e.style;r&&(n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):l(n).forEach((function(t){var e=n.getPropertyValue(t);if("font-size"===t&&e.endsWith("px")){var o=Math.floor(parseFloat(e.substring(0,e.length-2)))-.1;e="".concat(o,"px")}r.setProperty(t,e,n.getPropertyPriority(t))})))}(t,e),function(t,e){P(t,e,":before"),P(t,e,":after")}(t,e),function(t,e){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(t instanceof HTMLSelectElement){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e),e):e}function C(t,r,o){return e(this,void 0,void 0,(function(){return n(this,(function(i){return o||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return t instanceof HTMLCanvasElement?[2,S(t)]:t instanceof HTMLVideoElement&&t.poster?[2,E(t,r)]:[2,t.cloneNode(!1)]}))}))}(t,r)})).then((function(o){return function(t,r,o){var i;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){var u;return 0===(e=null!=(u=t).tagName&&"SLOT"===u.tagName.toUpperCase()&&t.assignedNodes?l(t.assignedNodes()):l((null!==(i=t.shadowRoot)&&void 0!==i?i:t).childNodes)).length||t instanceof HTMLVideoElement?[2,r]:[2,e.reduce((function(t,e){return t.then((function(){return C(e,o)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve()).then((function(){return r}))]}))}))}(t,o,r)})).then((function(e){return T(t,e)}))]:[2,null]}))}))}var R=/url\((['"]?)([^'"]+?)\1\)/g,L=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,A=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function I(t,e,n,r,o){var i=n?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}(e,n):e;return Promise.resolve(i).then((function(t){return o?o(t):b(t,r)})).then((function(t){return"string"==typeof t?a(t,u(e)):a(t.blob,u(e)||t.contentType)})).then((function(n){return t.replace((r=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)(".concat(r,")(['\"]?\\))"),"g")),"$1".concat(n,"$3"));var r})).then((function(t){return t}),(function(){return i}))}function N(t){return-1!==t.search(R)}function k(t,r,o){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return N(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(A,(function(t){for(;;){var e=L.exec(t)||[],r=e[0],o=e[2];if(!o)return"";if(o===n)return"src: ".concat(r,";")}})):t}(t,o),i=function(t){var e=[];return t.replace(R,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!c(t)}))}(e),[2,i.reduce((function(t,e){return t.then((function(t){return I(t,e,r,o)}))}),Promise.resolve(e))]):[2,t]}))}))}function M(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(o){return t instanceof Element?[2,Promise.resolve(t).then((function(t){return function(t,r){var o;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=null===(o=t.style)||void 0===o?void 0:o.getPropertyValue("background"))?[2,Promise.resolve(e).then((function(t){return k(t,null,r)})).then((function(e){return t.style.setProperty("background",e,t.style.getPropertyPriority("background")),t}))]:[2,t]}))}))}(t,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return t instanceof HTMLImageElement&&!c(t.src)||t instanceof SVGImageElement&&!c(t.href.baseVal)?(e=t instanceof HTMLImageElement?t.src:t.href.baseVal,[2,Promise.resolve(e).then((function(t){return b(t,r)})).then((function(t){return a(t.blob,u(e)||t.contentType)})).then((function(e){return new Promise((function(n,r){t.onload=n,t.onerror=r,t instanceof HTMLImageElement?(t.srcset="",t.src=e):t.href.baseVal=e}))})).then((function(){return t}),(function(){return t}))]):[2,Promise.resolve(t)]}))}))}(t,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return e=l(t.childNodes),o=e.map((function(t){return M(t,r)})),[2,Promise.all(o).then((function(){return t}))]}))}))}(t,r)}))]:[2,Promise.resolve(t)]}))}))}var D={};function V(t){var e=D[t];if(null!=e)return e;var n=window.fetch(t).then((function(e){return{url:t,cssText:e.text()}}));return D[t]=n,n}function H(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,t.cssText.then((function(e){var n=e,o=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map((function(e){var i=e.replace(o,"$1");return i.startsWith("https://")||(i=new URL(i,t.url).href),window.fetch(i,r.fetchRequestInit).then((function(t){return t.blob()})).then((function(t){return new Promise((function(r,o){var i=new FileReader;i.onloadend=function(){n=n.replace(e,"url(".concat(i.result,")")),r([e,i.result])},i.onerror=o,i.readAsDataURL(t)}))}))}));return Promise.all(i).then((function(){return n}))}))]}))}))}function U(t){if(null==t)return[];for(var e=[],n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var u;if(null===(u=o.exec(n))){if(null===(u=i.exec(n)))break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;e.push(u[0])}return e}function j(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return N(t.style.getPropertyValue("src"))}))}function F(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(o){return[2,new Promise((function(e,n){null==t.ownerDocument&&n(new Error("Provided element is not within a Document")),e(l(t.ownerDocument.styleSheets))})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return e=[],o=[],t.forEach((function(e){if("cssRules"in e)try{l(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var i=n+1,u=V(t.href).then((function(t){return t?H(t,r):""})).then((function(t){return U(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?i+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));o.push(u)}}))}catch(i){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&o.push(V(e.href).then((function(t){return t?H(t,r):""})).then((function(t){return U(t).forEach((function(t){n.insertRule(t,e.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t.toString())}))),console.error("Error inlining remote css file",i.toString())}})),[2,Promise.all(o).then((function(){return t.forEach((function(t){if("cssRules"in t)try{l(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e.toString())}})),e}))]}))}))}(t,r)})).then(j)]}))}))}function O(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,F(t,r).then((function(t){return Promise.all(t.map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return k(t.cssText,e,r)})))})).then((function(t){return t.join("\n")}))]}))}))}function q(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,(null!=r.fontEmbedCSS?Promise.resolve(r.fontEmbedCSS):O(t,r)).then((function(e){var n=document.createElement("style"),r=document.createTextNode(e);return n.appendChild(r),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),t}))]}))}))}function B(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,o,i,u;return n(this,(function(n){switch(n.label){case 0:return e=d(t,r),o=e.width,i=e.height,[4,C(t,r,!0)];case 1:return[4,q(u=n.sent(),r)];case 2:return n.sent(),[4,M(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,w(u,o,i)];case 4:return[2,n.sent()]}}))}))}function $(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,o,i,u,c,a,s,f,l;return n(this,(function(n){switch(n.label){case 0:return[4,B(t,r)];case 1:return[4,g(n.sent())];case 2:return e=n.sent(),o=document.createElement("canvas"),i=o.getContext("2d"),u=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),c=d(t,r),a=c.width,s=c.height,f=r.canvasWidth||a,l=r.canvasHeight||s,o.width=f*u,o.height=l*u,r.skipAutoScale||function(t){(t.width>v||t.height>v)&&(t.width>v&&t.height>v?t.width>t.height?(t.height*=v/t.width,t.width=v):(t.width*=v/t.height,t.height=v):t.width>v?(t.height*=v/t.width,t.width=v):(t.width*=v/t.height,t.height=v))}(o),o.style.width="".concat(f),o.style.height="".concat(l),r.backgroundColor&&(i.fillStyle=r.backgroundColor,i.fillRect(0,0,o.width,o.height)),i.drawImage(e,0,0,o.width,o.height),[2,o]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,O(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,$(t,r)];case 1:return[4,p(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=$,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,$(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,o,i,u;return n(this,(function(n){switch(n.label){case 0:return e=d(t,r),o=e.width,i=e.height,[4,$(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,o,i).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,$(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=B,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=html-to-image.js.map
