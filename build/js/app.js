!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){(function(n){var r,o;
/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do{for(t=n.length;0<=--t&&n.item(t)!==r;);}while(t<0&&(r=r.parentElement));return r}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-e)),i=window.setTimeout((function(){t(r+o)}),o);return e=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,i="",a=n.charCodeAt(0);++o<r;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,n,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},a=function(t,n,r,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(c,u){var l,s,f,d,m={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||a("scrollCancel",l)},animateScroll:function(r,c,u){m.cancelScroll();var s=n(l||t,u||{}),h="[object Number]"===Object.prototype.toString.call(r),p=h||!r.tagName?null:r;if(h||p){var y=e.pageYOffset;s.header&&!f&&(f=document.querySelector(s.header));var b,v,g,w,S,E,x,k,L=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(f),_=h?r:function(t,n,r,i){var a=0;if(t.offsetParent)for(;a+=t.offsetTop,t=t.offsetParent;);return a=Math.max(a-n-r,0),i&&(a=Math.min(a,o()-e.innerHeight)),a}(p,L,parseInt("function"==typeof s.offset?s.offset(r,c):s.offset,10),s.clip),T=_-y,F=o(),A=0,M=(b=T,g=(v=s).speedAsDuration?v.speed:Math.abs(b/1e3*v.speed),v.durationMax&&g>v.durationMax?v.durationMax:v.durationMin&&g<v.durationMin?v.durationMin:parseInt(g,10));0===e.pageYOffset&&e.scrollTo(0,0),x=r,k=s,h||history.pushState&&k.updateURL&&history.pushState({smoothScroll:JSON.stringify(k),anchor:x.id},document.title,x===document.documentElement?"#top":"#"+x.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(r,Math.floor(_),!1):(a("scrollStart",s,r,c),m.cancelScroll(!0),e.requestAnimationFrame((function t(n){var o,u,l;w||(w=n),A+=n-w,E=y+T*(u=S=1<(S=0===M?0:A/M)?1:S,"easeInQuad"===(o=s).easing&&(l=u*u),"easeOutQuad"===o.easing&&(l=u*(2-u)),"easeInOutQuad"===o.easing&&(l=u<.5?2*u*u:(4-2*u)*u-1),"easeInCubic"===o.easing&&(l=u*u*u),"easeOutCubic"===o.easing&&(l=--u*u*u+1),"easeInOutCubic"===o.easing&&(l=u<.5?4*u*u*u:(u-1)*(2*u-2)*(2*u-2)+1),"easeInQuart"===o.easing&&(l=u*u*u*u),"easeOutQuart"===o.easing&&(l=1- --u*u*u*u),"easeInOutQuart"===o.easing&&(l=u<.5?8*u*u*u*u:1-8*--u*u*u*u),"easeInQuint"===o.easing&&(l=u*u*u*u*u),"easeOutQuint"===o.easing&&(l=1+--u*u*u*u*u),"easeInOutQuint"===o.easing&&(l=u<.5?16*u*u*u*u*u:1+16*--u*u*u*u*u),o.customEasing&&(l=o.customEasing(u)),l||u),e.scrollTo(0,Math.floor(E)),function(t,n){var o=e.pageYOffset;if(t==n||o==n||(y<n&&e.innerHeight+o)>=F)return m.cancelScroll(!0),i(r,n,h),a("scrollStop",s,r,c),!(d=w=null)}(E,_)||(d=e.requestAnimationFrame(t),w=n)})))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(s=t.target.closest(c))&&"a"===s.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&s.hostname===e.location.hostname&&s.pathname===e.location.pathname&&/#/.test(s.href)){var n,o;try{n=r(decodeURIComponent(s.hash))}catch(t){n=r(s.hash)}if("#"===n){if(!l.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(l),m.animateScroll(o,s))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||m.animateScroll(t,null,{updateURL:!1})}};return m.destroy=function(){l&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",p,!1),m.cancelScroll(),d=f=s=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),l=n(t,u||{}),f=l.header?document.querySelector(l.header):null,document.addEventListener("click",h,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",p,!1)}(),m}}(o)}.apply(t,[]))||(e.exports=r)}).call(this,n(4))},function(e,t,n){(function(e){var n,r,o,i;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */i=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===a(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,a=r.length;i<a;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,r,o){var a=i.apply(this,arguments);return e.addEventListener(n,a,o),{destroy:function(){e.removeEventListener(n,a,o)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return c(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),s=n.n(l),f=n(2),d=n.n(f),m="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===m(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return y("action",e)}},{key:"defaultTarget",value:function(e){var t=y("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return y("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function y(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=p}]).default},"object"===a(t)&&"object"===a(e)?e.exports=i():(r=[],void 0===(o="function"==typeof(n=i)?n.apply(t,r):n)||(e.exports=o))}).call(this,n(6)(e))},function(e,t){var n,r,o,i;Array.from||(Array.from=(n=Object.prototype.toString,r=function(e){return"function"==typeof e||"[object Function]"===n.call(e)},o=Math.pow(2,53)-1,i=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),o)},function(e){var t=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!r(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var c,u=i(n.length),l=r(t)?Object(new t(u)):new Array(u),s=0;s<u;)c=n[s],l[s]=a?void 0===o?a(c,s):a.call(o,c,s):c,s+=1;return l.length=u,l}))},function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}e.exports=r},function(e,t){var n=document.querySelector("#loading .text");if(null!==n){var r=["seed phrase를 생성 중입니다.","암호화 중입니다.","지갑을 생성 중입니다.","지갑을 활성화 중입니다."];n.textContent=r[0],setTimeout((function(){n.textContent=r[1]}),2500),setTimeout((function(){n.textContent=r[2]}),5e3),setTimeout((function(){n.textContent=r[3]}),7500)}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n=Array.from(document.querySelectorAll("ul.accordion li.list"));null!==n&&n.map((function(e){e.addEventListener("click",(function(t){e.classList.toggle("on")}))}))},function(e,t){var n=document.querySelector("body"),r=document.querySelector("#home ul.tab li.withdraw-btn"),o=document.querySelector("#home .send-component"),i=document.querySelector(" .send-component .cover");null!==r&&(r.addEventListener("click",(function(e){n.classList.add("fixed"),o.classList.add("on")})),i.addEventListener("click",(function(){n.classList.remove("fixed"),o.classList.remove("on")})))},function(e,t){var n=document.querySelector(".participation-set ul"),r=document.querySelector(".participation-set ul li.join-btn"),o=document.querySelector(".participation-set ul li.cancel-btn"),i=document.querySelector(".participation-set .join"),a=document.querySelector(".participation-set .cancel");null===r&&null===o||(r.addEventListener("click",(function(){n.classList.remove("on"),r.classList.add("on"),i.classList.add("on"),o.classList.remove("on"),a.classList.remove("on")})),o.addEventListener("click",(function(){n.classList.add("on"),r.classList.remove("on"),i.classList.remove("on"),o.classList.add("on"),a.classList.add("on")})))},function(e,t){var n=document.querySelector(".reward-set .title strong.reward-btn"),r=document.querySelector(".reward-set .title strong.join-cancel-btn"),o=document.querySelector(".reward-set ul.reward-list"),i=document.querySelector(".reward-set ul.join-cancel-list");null===n&&null===r||(n.addEventListener("click",(function(){n.classList.add("on"),o.classList.add("on"),r.classList.remove("on"),i.classList.remove("on")})),r.addEventListener("click",(function(){n.classList.remove("on"),o.classList.remove("on"),r.classList.add("on"),i.classList.add("on")})))},function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(){var e,t,n,r,o,i={},a={},c={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:c.currentLocale,zeroFormat:c.zeroFormat,nullFormat:c.nullFormat,defaultFormat:c.defaultFormat,scalePercentBy100:c.scalePercentBy100};function l(e,t){this._input=e,this._value=t}return(e=function(n){var r,o,a,c;if(e.isNumeral(n))r=n.value();else if(0===n||void 0===n)r=0;else if(null===n||t.isNaN(n))r=null;else if("string"==typeof n)if(u.zeroFormat&&n===u.zeroFormat)r=0;else if(u.nullFormat&&n===u.nullFormat||!n.replace(/[^0-9]+/g,"").length)r=null;else{for(o in i)if((c="function"==typeof i[o].regexps.unformat?i[o].regexps.unformat():i[o].regexps.unformat)&&n.match(c)){a=i[o].unformat;break}r=(a=a||e._.stringToNumber)(n)}else r=Number(n)||null;return new l(n,r)}).version="2.0.6",e.isNumeral=function(e){return e instanceof l},e._=t={numberToFormat:function(t,n,r){var o,i,c,u,l,s,f,d,m=a[e.options.currentLocale],h=!1,p=!1,y="",b="",v=!1;if(t=t||0,c=Math.abs(t),e._.includes(n,"(")?(h=!0,n=n.replace(/[\(|\)]/g,"")):(e._.includes(n,"+")||e._.includes(n,"-"))&&(s=e._.includes(n,"+")?n.indexOf("+"):t<0?n.indexOf("-"):-1,n=n.replace(/[\+|\-]/g,"")),e._.includes(n,"a")&&(i=!!(i=n.match(/a(k|m|b|t)?/))&&i[1],e._.includes(n," a")&&(y=" "),n=n.replace(new RegExp(y+"a[kmbt]?"),""),c>=1e12&&!i||"t"===i?(y+=m.abbreviations.trillion,t/=1e12):c<1e12&&c>=1e9&&!i||"b"===i?(y+=m.abbreviations.billion,t/=1e9):c<1e9&&c>=1e6&&!i||"m"===i?(y+=m.abbreviations.million,t/=1e6):(c<1e6&&c>=1e3&&!i||"k"===i)&&(y+=m.abbreviations.thousand,t/=1e3)),e._.includes(n,"[.]")&&(p=!0,n=n.replace("[.]",".")),u=t.toString().split(".")[0],l=n.split(".")[1],f=n.indexOf(","),o=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),b=e._.toFixed(t,l[0].length+l[1].length,r,l[1].length)):b=e._.toFixed(t,l.length,r),u=b.split(".")[0],b=e._.includes(b,".")?m.delimiters.decimal+b.split(".")[1]:"",p&&0===Number(b.slice(1))&&(b="")):u=e._.toFixed(t,0,r),y&&!i&&Number(u)>=1e3&&y!==m.abbreviations.trillion)switch(u=String(Number(u)/1e3),y){case m.abbreviations.thousand:y=m.abbreviations.million;break;case m.abbreviations.million:y=m.abbreviations.billion;break;case m.abbreviations.billion:y=m.abbreviations.trillion}if(e._.includes(u,"-")&&(u=u.slice(1),v=!0),u.length<o)for(var g=o-u.length;g>0;g--)u="0"+u;return f>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===n.indexOf(".")&&(u=""),d=u+b+(y||""),h?d=(h&&v?"(":"")+d+(h&&v?")":""):s>=0?d=0===s?(v?"-":"+")+d:d+(v?"-":"+"):v&&(d="-"+d),d},stringToNumber:function(e){var t,n,r,o=a[u.currentLocale],i=e,c={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)n=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)n=null;else{for(t in n=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),c)if(r=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(r)){n*=Math.pow(10,c[t]);break}n*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),n*=Number(e)}return n},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return"number"==typeof e&&isNaN(e)})),includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,n){return e.slice(0,n)+t+e.slice(n)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var n,r=Object(e),o=r.length>>>0,i=0;if(3===arguments.length)n=arguments[2];else{for(;i<o&&!(i in r);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");n=r[i++]}for(;i<o;i++)i in r&&(n=t(n,r[i],i,r));return n},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce((function(e,n){var r=t.multiplier(n);return e>r?e:r}),1)},toFixed:function(e,t,n,r){var o,i,a,c,u=e.toString().split("."),l=t-(r||0);return o=2===u.length?Math.min(Math.max(u[1].length,l),t):l,a=Math.pow(10,o),c=(n(e+"e+"+o)/a).toFixed(o),r>t-o&&(i=new RegExp("\\.?0{1,"+(r-(t-o))+"}$"),c=c.replace(i,"")),c}},e.options=u,e.formats=i,e.locales=a,e.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},e.localeData=function(e){if(!e)return a[u.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in c)u[e]=c[e]},e.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,n){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=n,n},e.validate=function(t,n){var r,o,i,a,c,u,l,s;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{l=e.localeData(n)}catch(t){l=e.localeData(e.locale())}return i=l.currency.symbol,c=l.abbreviations,r=l.delimiters.decimal,o="."===l.delimiters.thousands?"\\.":l.delimiters.thousands,!(null!==(s=t.match(/^[^\d]+/))&&(t=t.substr(1),s[0]!==i)||null!==(s=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),s[0]!==c.thousand&&s[0]!==c.million&&s[0]!==c.billion&&s[0]!==c.trillion)||(u=new RegExp(o+"{2}"),t.match(/[^\d.,]/g)||(a=t.split(r)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(u):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(u)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(u)||!a[1].match(/^\d+$/))))},e.fn=l.prototype={clone:function(){return e(this)},format:function(t,n){var r,o,a,c=this._value,l=t||u.defaultFormat;if(n=n||Math.round,0===c&&null!==u.zeroFormat)o=u.zeroFormat;else if(null===c&&null!==u.nullFormat)o=u.nullFormat;else{for(r in i)if(l.match(i[r].regexps.format)){a=i[r].format;break}o=(a=a||e._.numberToFormat)(c,l,n)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var n=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],(function(e,t,r,o){return e+Math.round(n*t)}),0)/n,this},subtract:function(e){var n=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],(function(e,t,r,o){return e-Math.round(n*t)}),Math.round(this._value*n))/n,this},multiply:function(e){return this._value=t.reduce([this._value,e],(function(e,n,r,o){var i=t.correctionFactor(e,n);return Math.round(e*i)*Math.round(n*i)/Math.round(i*i)}),1),this},divide:function(e){return this._value=t.reduce([this._value,e],(function(e,n,r,o){var i=t.correctionFactor(e,n);return Math.round(e*i)/Math.round(n*i)})),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,n,r){var o,i=e._.includes(n," BPS")?" ":"";return t*=1e4,n=n.replace(/\s?BPS/,""),o=e._.numberToFormat(t,n,r),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},o="("+(o=(n={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(r.suffixes.filter((function(e){return n.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(t,o,i){var a,c,u,l=e._.includes(o,"ib")?r:n,s=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=l.suffixes.length;a++)if(c=Math.pow(l.base,a),u=Math.pow(l.base,a+1),null===t||0===t||t>=c&&t<u){s+=l.suffixes[a],c>0&&(t/=c);break}return e._.numberToFormat(t,o,i)+s},unformat:function(t){var o,i,a=e._.stringToNumber(t);if(a){for(o=n.suffixes.length-1;o>=0;o--){if(e._.includes(t,n.suffixes[o])){i=Math.pow(n.base,o);break}if(e._.includes(t,r.suffixes[o])){i=Math.pow(r.base,o);break}}a*=i||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,n,r){var o,i,a=e.locales[e.options.currentLocale],c={before:n.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:n.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(n=n.replace(/\s?\$\s?/,""),o=e._.numberToFormat(t,n,r),t>=0?(c.before=c.before.replace(/[\-\(]/,""),c.after=c.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(c.before,"-")&&!e._.includes(c.before,"(")&&(c.before="-"+c.before),i=0;i<c.before.length;i++)switch(c.before[i]){case"$":o=e._.insert(o,a.currency.symbol,i);break;case" ":o=e._.insert(o," ",i+a.currency.symbol.length-1)}for(i=c.after.length-1;i>=0;i--)switch(c.after[i]){case"$":o=i===c.after.length-1?o+a.currency.symbol:e._.insert(o,a.currency.symbol,-(c.after.length-(1+i)));break;case" ":o=i===c.after.length-1?o+" ":e._.insert(o," ",-(c.after.length-(1+i)+a.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,n,r){var o=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return n=n.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),n,r)+"e"+o[1]},unformat:function(t){var n=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),r=Number(n[0]),o=Number(n[1]);return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([r,Math.pow(10,o)],(function(t,n,r,o){var i=e._.correctionFactor(t,n);return t*i*(n*i)/(i*i)}),1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,n,r){var o=e.locales[e.options.currentLocale],i=e._.includes(n," o")?" ":"";return n=n.replace(/\s?o/,""),i+=o.ordinal(t),e._.numberToFormat(t,n,r)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,n,r){var o,i=e._.includes(n," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),n=n.replace(/\s?\%/,""),o=e._.numberToFormat(t,n,r),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(t){var n=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*n:n}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,n){var r=Math.floor(e/60/60),o=Math.floor((e-60*r*60)/60),i=Math.round(e-60*r*60-60*o);return r+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}}),e})?r.call(t,n,t,e):r)||(e.exports=o)},function(e,t,n){"use strict";n.r(t);n(2),n(3);var r=n(0),o=n.n(r);null==document.querySelector("section#detail")&&new o.a('a[href*="#"]',{speed:300,speedAsDuration:!0}),new o.a('a[href="#attach-box"]',{speed:300,speedAsDuration:!0,offset:100});var i=document.querySelector("#home ul.tab > li.staking-btn"),a=document.querySelector(".staking-container .move-info-btn"),c=document.querySelector(".info-container .go-staking"),u=document.querySelector("#home > .staking-container"),l=document.querySelector("#home > .info-container"),s=document.querySelector(".slide-header.invest > .back"),f=document.querySelector(".slide-header.staking > .back");null!==u&&(a.addEventListener("click",(function(){l.classList.add("on")})),i.addEventListener("click",(function(){u.classList.add("on")})),f.addEventListener("click",(function(){u.classList.remove("on")}))),null!==l&&(c.addEventListener("click",(function(){l.classList.remove("on")})),s.addEventListener("click",(function(){l.classList.remove("on")})));n(5);var d=n(1),m=n.n(d),h=document.querySelector(".copy-icon"),p=new m.a(h);p.on("success",(function(e){})),p.on("error",(function(e){console.error("실패!")})),h.addEventListener("click",(function(e){e.currentTarget.classList.add("modal"),setTimeout((function(){h.classList.remove("modal")}),1e3)}));n(7),n(8),n(9),n(10);var y=document.querySelector(".top-btn"),b=function(){y.setAttribute("href","#staking-top")};null!==y&&(y.setAttribute("href","#body"),i.addEventListener("click",b),s.addEventListener("click",b),c.addEventListener("click",b),f.addEventListener("click",(function(){y.setAttribute("href","#body")})),a.addEventListener("click",(function(){y.setAttribute("href","#info-top")})));n(11);var v=Array.from(document.querySelectorAll(".nano"));null!==v&&v.map((function(e){var t=Number(e.textContent);t/=1e9;var n=String(t).split(".");n[0]=Number(n[0]).toLocaleString();var r="".concat(n[0],".").concat(n[1]);e.textContent=r}))}]);
//# sourceMappingURL=app.js.map