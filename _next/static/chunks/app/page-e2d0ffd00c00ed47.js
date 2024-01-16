(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5665:function(e,n,t){Promise.resolve().then(t.bind(t,5191))},5191:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return page}});var r=t(7437),s=t(2265),docs=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The EVE Online Patch Notes Transformer converts EVE Online Patch Notes from rich HTML and CSS into MediaWiki Syntax."}),(0,r.jsxs)("ol",{className:"list-decimal",children:[(0,r.jsxs)("li",{children:["Go to"," ",(0,r.jsx)("a",{className:"font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline",target:"_blank",href:"https://www.eveonline.com/news/t/patch-notes",children:"EVE Online Patch Notes"}),"."]}),(0,r.jsxs)("li",{children:["Open a Patch Notes blog post such as"," ",(0,r.jsx)("a",{className:"font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline",target:"_blank",href:"https://www.eveonline.com/news/view/patch-notes-version-21-06",children:"Patch Notes - Version 21.06"}),"."]}),(0,r.jsxs)("li",{children:["Right-click anywhere on the webpage to open up a dropdown menu and click on ",(0,r.jsx)("strong",{children:"Inspect"}),". A developer console should open up. The"," ",(0,r.jsx)("strong",{children:"Inspector"})," tab should be selected, showing HTML elements."]}),(0,r.jsxs)("li",{children:["Find the HTML element with the attribute name ",(0,r.jsx)("strong",{children:"class"})," equal to value ",(0,r.jsx)("strong",{children:"RichText_richtext"}),". You can use the ",(0,r.jsx)("strong",{children:"Search HTML"})," tool (",(0,r.jsx)("strong",{children:"CTRL+F"})," in ",(0,r.jsx)("strong",{children:"Inspector"}),") to find the ",(0,r.jsx)("strong",{children:"RichText_richtext"})," value more easily. This HTML element contains the contents of the Patch Notes blog post."]}),(0,r.jsxs)("li",{children:["Right-click the HTML element to open up a dropdown menu, hover over"," ",(0,r.jsx)("strong",{children:"Copy"})," then click on ",(0,r.jsx)("strong",{children:"Inner HTML"}),". This will copy the HTML contents of the Patch Notes blog post into your clipboard."]}),(0,r.jsxs)("li",{children:["Paste the contents of the Patch Notes blog post into the ",(0,r.jsx)("strong",{children:"Patch Notes HTML"})," text field below."]}),(0,r.jsxs)("li",{children:["Press the ",(0,r.jsx)("strong",{children:"Convert"})," button."]})]})]}),page=()=>{let[e,n]=(0,s.useState)(""),[t,l]=(0,s.useState)([]);return(0,r.jsxs)("main",{children:[(0,r.jsx)(docs,{}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("button",{onClick:()=>{let n;let t=e.replace(/(\S+)="[^"]*"/g,"").replace(/\s+/g," ").replace(/>\s+</g,"><").replace(/\s>/g,">").replace(/>\s/g,">").replace(/\s</g,"<").replace(/<\s/g,"<").replace(/\s\//g,"/"),r=t.split("<hr/>");1==r.length&&(r=t.split("<hr>"));let s=r.map(e=>{var n;return e=(e=function(e){let n;let t=e.indexOf("<h3><b>Defect Fixes:</b></h3>"),r=e.indexOf("<p><b>Defect Fixes:</b></p>");if(-1!==t&&(-1===r||t<r))n=t;else{if(-1===r)return e;n=r}return e.substring(0,n)}(e)).replace(/<style\b[^>]*>[\s\S]*?<\/style>/g,"")}),o=s.map(e=>e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p><b>Features &amp; Changes:<\/b><\/p>/g,"=== Features & Changes ===\n\n")).replace(/<h2>(.*?)<\/h2>/g,"== $1 ==\n\n")).replace(/<h3><b>(.*?)<\/b><\/h3>/g,"=== $1 ===\n\n")).replace(/<h3>(.*?)<\/h3>/g,"=== $1 ===\n\n")).replace(/<p><b>(.*?)<\/b><\/p>/g,"==== $1 ====\n\n")).replace(/<br>/g,"\n")).replace(/<li><p>(.*?)<\/p><\/li>/g,"* $1\n")).replace(/‘/g,"'")).replace(/’/g,"'")).replace(/“/g,'"')).replace(/”/g,'"')).replace(/: =/g," =")).replace(/amp;/g,"")).replace(/&nbsp;/g,"")).replace(/:<\/p><ul><li><p>/g,":\n* ")).replace(/<\/p><p>/g,"\n\n")).replace(/<\/?[^>]+(>|$)/g,"")).replace(/([\w\.\,\!\?])=/g,"$1\n\n=")).replace(/([\w\.\,\!\?])\n=/g,"$1\n\n=")).replace(/([\w\.\,\!\?])\*/g,"$1\n\n*")).replace(/:\*/g,":\n*")).replace(/:(\w)/g,":\n\n$1"));l(o)},children:"Convert to MediaWiki"}),(0,r.jsx)("button",{onClick:()=>{let e=t.join("\n\n"),n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),alert("Content copied to clipboard!")},children:"Copy to Clipboard"})]}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("label",{children:"Patch Notes HTML:"}),(0,r.jsx)("textarea",{value:e,onChange:e=>{n(e.target.value)}})]}),(0,r.jsxs)("div",{className:"output-container",children:[(0,r.jsx)("label",{children:"Output MediaWiki:"}),(0,r.jsx)("pre",{children:t.join("")})]})]})]})}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2265),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,l={},a=null,h=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,r)&&!i.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:h,props:l,_owner:c.current}}n.Fragment=l,n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=5665)}),_N_E=e.O()}]);