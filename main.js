(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),i=t(314),A=t.n(i)()(o());A.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    background: repeating-linear-gradient(to right top, rgb(146, 250, 253), rgb(175, 175, 175) 20%, rgb(146, 250, 253) 40%);\n}\n\nh1 {\n    margin-left: 30%;\n    color: white;\n}\n\n.dropdown {\n    width: 40%;\n    margin-left: 30%;\n    margin-top: 10%;\n}\n\n.menu-hidden {\n    height: 40px;\n    display: block;\n}\n\n.menu-visible {\n    height: 60%;\n    display: grid;\n    grid-template-rows: 40px 1fr;\n    grid-template-columns: 1fr 40px;\n}\n\n.selection-header {\n    background: none;\n    border: none;\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    display: grid;\n    grid-template-columns: 1fr 40px;\n    align-items: center;\n    column-gap: 0.1em;\n}\n\n.selection-box {\n    border: 1px solid gray;\n    background-color: white;\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    padding-right: 10px;\n}\n\n.selection-box > p {\n    color: gray;\n    font-size: 1.2rem;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.display-btn {\n    grid-column: -2 / -1;\n    border: none;\n    background: none;\n    width: 40px;\n    height: 40px;\n}\n\nbutton > img {\n    width: 100%;\n    height: 100%;\n}\n\nul {\n    list-style: none;\n    background-color: white;\n    grid-row: -2 / -1;\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n}\n\nli {\n    width: 100%;\n    height: 40px;\n}\n\n.option {\n    height: 100%;\n    width: 100%;\n    background: none;\n    border: none;\n    color: gray;\n    font-size: 1.2rem;\n}\n\n.hidden {\n    display: none;\n}\n\nbutton:hover.option {\n    background-color: rgba(20, 161, 243, 0.3);\n}\n\n.fancy {\n    font-family: cursive;\n    font-size: 1.5rem;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uHAAuH;AAC3H;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    background: repeating-linear-gradient(to right top, rgb(146, 250, 253), rgb(175, 175, 175) 20%, rgb(146, 250, 253) 40%);\n}\n\nh1 {\n    margin-left: 30%;\n    color: white;\n}\n\n.dropdown {\n    width: 40%;\n    margin-left: 30%;\n    margin-top: 10%;\n}\n\n.menu-hidden {\n    height: 40px;\n    display: block;\n}\n\n.menu-visible {\n    height: 60%;\n    display: grid;\n    grid-template-rows: 40px 1fr;\n    grid-template-columns: 1fr 40px;\n}\n\n.selection-header {\n    background: none;\n    border: none;\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    display: grid;\n    grid-template-columns: 1fr 40px;\n    align-items: center;\n    column-gap: 0.1em;\n}\n\n.selection-box {\n    border: 1px solid gray;\n    background-color: white;\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    padding-right: 10px;\n}\n\n.selection-box > p {\n    color: gray;\n    font-size: 1.2rem;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.display-btn {\n    grid-column: -2 / -1;\n    border: none;\n    background: none;\n    width: 40px;\n    height: 40px;\n}\n\nbutton > img {\n    width: 100%;\n    height: 100%;\n}\n\nul {\n    list-style: none;\n    background-color: white;\n    grid-row: -2 / -1;\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n}\n\nli {\n    width: 100%;\n    height: 40px;\n}\n\n.option {\n    height: 100%;\n    width: 100%;\n    background: none;\n    border: none;\n    color: gray;\n    font-size: 1.2rem;\n}\n\n.hidden {\n    display: none;\n}\n\nbutton:hover.option {\n    background-color: rgba(20, 161, 243, 0.3);\n}\n\n.fancy {\n    font-family: cursive;\n    font-size: 1.5rem;\n}"],sourceRoot:""}]);const a=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(A[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&A[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},A=[],a=0;a<n.length;a++){var s=n[a],c=r.base?s[0]+r.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var u=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=o(p,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:g,references:1})}A.push(l)}return A}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=t(i[A]);e[a].references--}for(var s=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),A=t.n(i),a=t(659),s=t.n(a),c=t(56),d=t.n(c),l=t(540),u=t.n(l),p=t(113),g=t.n(p),h=t(365),f={};f.styleTagTransform=g(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=u(),o()(h.A,f),h.A&&h.A.locals&&h.A.locals,new class{constructor(n,e){this.container=n,this.visible=!1,this.readOption=e,this.handleOptionButtons.bind(this)(this.readOption.bind(this)),this.container.querySelector(".display-btn").addEventListener("click",(n=>{this.toggleDisplay.bind(this)()}))}toggleDisplay(){this.visible^=!0,this.container.classList.toggle("menu-hidden"),this.container.classList.toggle("menu-visible"),this.container.querySelector("ul").classList.toggle("hidden")}handleOptionButtons(n){this.container.querySelectorAll(".option").forEach((e=>{e.addEventListener("click",(()=>{const t=n(e);this.selectHandler.bind(this)(t),this.toggleDisplay.bind(this)()}))}))}selectHandler(n){this.container.querySelector(".selection-box").querySelector("p").innerText=n}}(document.querySelector(".dropdown"),(function(n){return n.innerText}))})();
//# sourceMappingURL=main.js.map