!function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],d=0,j=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&j.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);j.length;)j.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={1:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+"static/js/"+({}[e]||e)+"."+{3:"0d0144ab"}[e]+".chunk.js"}(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,r[1](s)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=this["webpackJsonpreact-chrome"]=this["webpackJsonpreact-chrome"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;c.push([30,2]),r()}({30:function(e,t,r){e.exports=r(47)},35:function(e,t,r){},36:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),o=r.n(c),i=(r(35),r(15)),s=(r(36),r(65)),l=r(68),u=r(69),d=r(27),j=r.n(d),f=r(26),h=r.n(f),b=r(2),v=Object(s.a)({root:{width:"100%"}});function p(){var e=v(),t=a.a.useState(0),r=Object(i.a)(t,2),n=r[0],c=r[1];return Object(b.jsxs)(l.a,{value:n,onChange:function(e,t){c(t)},showLabels:!0,className:e.root,children:[Object(b.jsx)(u.a,{label:"Favorites",icon:Object(b.jsx)(h.a,{})}),Object(b.jsx)(u.a,{label:"Trending",icon:Object(b.jsx)(j.a,{})})]})}var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=(t[0],t[1],Object(n.useState)("")),a=Object(i.a)(r,2),c=(a[0],a[1]);Object(n.useEffect)((function(){chrome.tabs&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){var t=e[0].url;c(t)}))}),[]);var o=Object(b.jsxs)("div",{className:"user-header",children:[Object(b.jsx)("div",{className:"placeholderCircle"}),Object(b.jsxs)("div",{className:"headingContainerRight",children:[Object(b.jsx)("div",{className:"placeholderCircle2"}),Object(b.jsx)("div",{className:"placeholderCircle2"})]})]});return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"ext-container",children:[o,Object(b.jsxs)("div",{className:"headingNavTitleContainer",children:[Object(b.jsx)("p",{className:"headingNavTitle",children:"Favorites"}),Object(b.jsx)("p",{className:"headingNavDescription",children:"My Favorite Collection"})]}),(chrome&&"image added"===chrome.runtime.message&&chrome.storage.local.get("image",(function(e){console.log(e)})),Object(b.jsxs)("div",{className:"galleryContainer",children:[Object(b.jsxs)("div",{className:"addToFavorite",children:[Object(b.jsx)("p",{className:"addToFavText",children:"Add to"}),Object(b.jsx)("p",{className:"addToFavText",children:"Favorites"})]}),Object(b.jsx)("div",{className:"addToFavorite"}),Object(b.jsx)("div",{className:"addToFavorite"})]})),Object(b.jsx)(p,{})]})})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,71)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),O()}});
//# sourceMappingURL=main.js.map