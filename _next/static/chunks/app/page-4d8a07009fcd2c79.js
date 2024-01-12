(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5665:function(e,n,t){Promise.resolve().then(t.bind(t,3356))},3356:function(e,n,t){"use strict";t.r(n);var r=t(7437),l=t(2265);n.default=()=>{let[e,n]=(0,l.useState)(""),[t,s]=(0,l.useState)([]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"The EVE Online Patch Notes Transformer converts EVE Online Patch Notes from rich HTML and CSS into MediaWiki Syntax."}),(0,r.jsxs)("ol",{className:"list-decimal",children:[(0,r.jsxs)("li",{children:["Go to"," ",(0,r.jsx)("a",{className:"font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline",target:"_blank",href:"https://www.eveonline.com/news/t/patch-notes",children:"EVE Online Patch Notes"}),"."]}),(0,r.jsxs)("li",{children:["Open a Patch Notes blog post such as"," ",(0,r.jsx)("a",{className:"font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline",target:"_blank",href:"https://www.eveonline.com/news/view/havoc-expansion-notes",children:"Havoc: Expansion Notes"}),"."]}),(0,r.jsxs)("li",{children:["Right-click anywhere on the webpage to open up a dropdown menu and click on ",(0,r.jsx)("strong",{children:"Inspect"}),". A developer console should open up. The"," ",(0,r.jsx)("strong",{children:"Inspector"})," tab should be selected, showing HTML elements."]}),(0,r.jsxs)("li",{children:["Find the HTML element with the ",(0,r.jsx)("strong",{children:"class=RichText_richtext"}),". You can use the ",(0,r.jsx)("strong",{children:"Search HTML"})," tool to find it more easily. This HTML element contains the contents of the Patch Notes blog post."]}),(0,r.jsxs)("li",{children:["Right-click the HTML element to open up a dropdown menu, hover over"," ",(0,r.jsx)("strong",{children:"Copy"})," than click on ",(0,r.jsx)("strong",{children:"Inner HTML"}),". This will copy the HTML contents of the Patch Notes blog post into your clipboard."]}),(0,r.jsx)("li",{children:"Paste the contents of the Patch Notes blog post into the text field below."}),(0,r.jsxs)("li",{children:["Press the ",(0,r.jsx)("strong",{children:"Convert"})," button."]})]}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("button",{onClick:()=>{let n=e.replace(/(\S+)="[^"]*"/g,""),t=(n=(n=(n=(n=(n=(n=(n=n.replace(/\s+/g," ")).replace(/>\s+</g,"><")).replace(/\s>/g,">")).replace(/>\s/g,">")).replace(/\s</g,"<")).replace(/<\s/g,"<")).replace(/\s\//g,"/")).split("<hr/>");1==t.length&&(t=n.split("<hr>"));let r=t.map(e=>(console.log(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=function(e){let n;let t=e.indexOf("<h3><b>Defect Fixes:</b></h3>"),r=e.indexOf("<p><b>Defect Fixes:</b></p>");if(-1!==t&&(-1===r||t<r))n=t;else{if(-1===r)return e;n=r}return e.substring(0,n)}(e)).replace(/<p><b>Features &amp; Changes:<\/b><\/p>/g,"\n=== Features & Changes ===\n\n")).replace(/<h2>/g,"== ")).replace(/<\/h2>/g," ==\n\n")).replace(/<h3><b>/g,"=== ")).replace(/<\/b><\/h3>/g," ===\n\n")).replace(/<p><b>/g,"==== ")).replace(/<\/b><\/p>/g," ====\n\n")).replace(/<li><p>/g,"* ")).replace(/<\/p><\/li>/g,"\n")).replace(/<\/p>/g,"\n")).replace(/: =/g," =")).replace(/amp;/g,"")).replace(/<\/?[^>]+(>|$)/g,"")),e=(e=e.replace(/\.\n==/g,".\n\n==")).replace(/\.\n====/g,".\n\n====")));s(r)},children:"Convert to MediaWiki"}),(0,r.jsx)("button",{onClick:()=>{let e=t.join("\n\n"),n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),alert("Content copied to clipboard!")},children:"Copy to Clipboard"})]}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("label",{children:"Input HTML:"}),(0,r.jsx)("textarea",{value:e,onChange:e=>{n(e.target.value)}})]}),(0,r.jsxs)("div",{className:"output-container",children:[(0,r.jsx)("label",{children:"Output MediaWiki:"}),(0,r.jsx)("pre",{children:t.join("")})]})]})]})}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2265),l=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,i={},a=null,h=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:l,type:e,key:a,ref:h,props:i,_owner:o.current}}n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=5665)}),_N_E=e.O()}]);