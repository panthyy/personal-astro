import{r as A,R as Z}from"./chunks/chunk.37230af2.js";/* empty css                     */var l={exports:{}},X={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt=A.exports,wt=Symbol.for("react.element"),bt=Symbol.for("react.fragment"),Et=Object.prototype.hasOwnProperty,jt=yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pt={key:!0,ref:!0,__self:!0,__source:!0};function Ye(e,t,i){var n,r={},o=null,s=null;i!==void 0&&(o=""+i),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Et.call(t,n)&&!Pt.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:wt,type:e,key:o,ref:s,props:r,_owner:jt.current}}X.Fragment=bt;X.jsx=Ye;X.jsxs=Ye;l.exports=X;const Tt=A.exports.createContext(void 0),St={setTheme:e=>{},themes:[]},Nt=()=>{var e;return(e=A.exports.useContext(Tt))!==null&&e!==void 0?e:St};function yr(){const{theme:e,setTheme:t}=Nt(),i=[{href:"#Projects",text:"Projects"},{href:"#Resume",text:"Resume"},{href:"/blog",text:"Blog"},{href:"#Contact",text:"Contact"}];return l.exports.jsx("header",{className:"  h-[123px] mt-4  flex items-center justify-center mb-[50px] sm:mb-[133px] ",children:l.exports.jsxs("div",{className:"w-full  ",children:[l.exports.jsxs("div",{className:" flex h-[29px] justify-between  ",children:[l.exports.jsx("div",{className:"text-[18px] font-[Inter] ",children:l.exports.jsx("a",{className:"",href:"/",children:"BSCE Student at Lund university"})}),l.exports.jsxs("nav",{className:" flex Nav gap-7 items-center justify-center ",children:[l.exports.jsx("ul",{className:"text-[18px] hidden sm:flex gap-7 group-hover:cursor-pointer align-middle gap",children:l.exports.jsx("ul",{className:"text-[18px] hidden sm:flex gap-7 group-hover:cursor-pointer align-middle gap",children:i.map((n,r)=>l.exports.jsx("li",{children:l.exports.jsx("a",{href:n.href,children:n.text})},r))})}),l.exports.jsx("button",{onClick:()=>t(e==="dark"?"light":"dark"),className:" "})]})]}),l.exports.jsx("nav",{className:" flex Nav gap-7 items-center justify-center ",children:l.exports.jsx("ul",{className:"text-[18px] mt-10 justify-evenly w-full sm:hidden flex  group-hover:cursor-pointer align-middle gap",children:i.map((n,r)=>l.exports.jsx("li",{children:l.exports.jsx("a",{href:n.href,children:n.text})},r))})})]})})}function wr(){return l.exports.jsxs("footer",{id:"Contact",className:" w-full  sm:gap-[100px]  mt-[111px] flex  justify-between mb-[60px] ",children:[l.exports.jsx("header",{className:" text-[20px]",children:"CONTACT "}),l.exports.jsxs("div",{className:"flex  justify-end  w-auto  flex-wrap  text-[Inter] text-[18px] gap-[12px]",children:[l.exports.jsx("a",{href:"mailto:fahad.alhatshami@hotmail.com",children:l.exports.jsx("a",{className:"SocialBtn"})}),l.exports.jsx("a",{href:"https://www.aedin.com/in/fahadalhatshami/",children:l.exports.jsx("a",{className:"SocialBtn"})}),l.exports.jsx("a",{href:"https://github.com/Panthyy",children:l.exports.jsx("a",{className:"SocialBtn"})})]})]})}var Je={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Te={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},_t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Y={CSS:{},springs:{}};function O(e,t,i){return Math.min(Math.max(e,t),i)}function K(e,t){return e.indexOf(t)>-1}function xe(e,t){return e.apply(null,t)}var d={arr:function(e){return Array.isArray(e)},obj:function(e){return K(Object.prototype.toString.call(e),"Object")},pth:function(e){return d.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||d.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return d.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return d.hex(e)||d.rgb(e)||d.hsl(e)},key:function(e){return!Je.hasOwnProperty(e)&&!Te.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Ge(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(i){return parseFloat(i)}):[]}function Xe(e,t){var i=Ge(e),n=O(d.und(i[0])?1:i[0],.1,100),r=O(d.und(i[1])?100:i[1],.1,100),o=O(d.und(i[2])?10:i[2],.1,100),s=O(d.und(i[3])?0:i[3],.1,100),u=Math.sqrt(r/n),a=o/(2*Math.sqrt(r*n)),h=a<1?u*Math.sqrt(1-a*a):0,c=1,f=a<1?(a*u+-s)/h:-s+u;function x(g){var p=t?t*g/1e3:g;return a<1?p=Math.exp(-p*a*u)*(c*Math.cos(h*p)+f*Math.sin(h*p)):p=(c+f*p)*Math.exp(-p*u),g===0||g===1?g:1-p}function w(){var g=Y.springs[e];if(g)return g;for(var p=1/6,E=0,j=0;;)if(E+=p,x(E)===1){if(j++,j>=16)break}else j=0;var m=E*p*1e3;return Y.springs[e]=m,m}return t?x:w}function Ct(e){return e===void 0&&(e=10),function(t){return Math.ceil(O(t,1e-6,1)*e)*(1/e)}}var Ot=function(){var e=11,t=1/(e-1);function i(c,f){return 1-3*f+3*c}function n(c,f){return 3*f-6*c}function r(c){return 3*c}function o(c,f,x){return((i(f,x)*c+n(f,x))*c+r(f))*c}function s(c,f,x){return 3*i(f,x)*c*c+2*n(f,x)*c+r(f)}function u(c,f,x,w,g){var p,E,j=0;do E=f+(x-f)/2,p=o(E,w,g)-c,p>0?x=E:f=E;while(Math.abs(p)>1e-7&&++j<10);return E}function a(c,f,x,w){for(var g=0;g<4;++g){var p=s(f,x,w);if(p===0)return f;var E=o(f,x,w)-c;f-=E/p}return f}function h(c,f,x,w){if(!(0<=c&&c<=1&&0<=x&&x<=1))return;var g=new Float32Array(e);if(c!==f||x!==w)for(var p=0;p<e;++p)g[p]=o(p*t,c,x);function E(j){for(var m=0,v=1,T=e-1;v!==T&&g[v]<=j;++v)m+=t;--v;var M=(j-g[v])/(g[v+1]-g[v]),P=m+M*t,L=s(P,c,x);return L>=.001?a(j,P,c,x):L===0?P:u(j,m,m+t,c,x)}return function(j){return c===f&&x===w||j===0||j===1?j:o(E(j),f,w)}}return h}(),et=function(){var e={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var r,o=4;n<((r=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((r*3-2)/22-n,2)}},Elastic:function(n,r){n===void 0&&(n=1),r===void 0&&(r=.5);var o=O(n,1,10),s=O(r,.1,2);return function(u){return u===0||u===1?u:-o*Math.pow(2,10*(u-1))*Math.sin((u-1-s/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/s)}}},i=["Quad","Cubic","Quart","Quint","Expo"];return i.forEach(function(n,r){t[n]=function(){return function(o){return Math.pow(o,r+2)}}}),Object.keys(t).forEach(function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(o,s){return function(u){return 1-r(o,s)(1-u)}},e["easeInOut"+n]=function(o,s){return function(u){return u<.5?r(o,s)(u*2)/2:1-r(o,s)(u*-2+2)/2}},e["easeOutIn"+n]=function(o,s){return function(u){return u<.5?(1-r(o,s)(1-u*2))/2:(r(o,s)(u*2-1)+1)/2}}}),e}();function Se(e,t){if(d.fnc(e))return e;var i=e.split("(")[0],n=et[i],r=Ge(e);switch(i){case"spring":return Xe(e,t);case"cubicBezier":return xe(Ot,r);case"steps":return xe(Ct,r);default:return xe(n,r)}}function tt(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function ee(e,t){for(var i=e.length,n=arguments.length>=2?arguments[1]:void 0,r=[],o=0;o<i;o++)if(o in e){var s=e[o];t.call(n,s,o,e)&&r.push(s)}return r}function te(e){return e.reduce(function(t,i){return t.concat(d.arr(i)?te(i):i)},[])}function He(e){return d.arr(e)?e:(d.str(e)&&(e=tt(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Ne(e,t){return e.some(function(i){return i===t})}function _e(e){var t={};for(var i in e)t[i]=e[i];return t}function be(e,t){var i=_e(e);for(var n in e)i[n]=t.hasOwnProperty(n)?t[n]:e[n];return i}function re(e,t){var i=_e(e);for(var n in t)i[n]=d.und(e[n])?t[n]:e[n];return i}function Bt(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function At(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=e.replace(t,function(u,a,h,c){return a+a+h+h+c+c}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),r=parseInt(n[1],16),o=parseInt(n[2],16),s=parseInt(n[3],16);return"rgba("+r+","+o+","+s+",1)"}function It(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(t[1],10)/360,n=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100,o=t[4]||1;function s(x,w,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?x+(w-x)*6*g:g<1/2?w:g<2/3?x+(w-x)*(2/3-g)*6:x}var u,a,h;if(n==0)u=a=h=r;else{var c=r<.5?r*(1+n):r+n-r*n,f=2*r-c;u=s(f,c,i+1/3),a=s(f,c,i),h=s(f,c,i-1/3)}return"rgba("+u*255+","+a*255+","+h*255+","+o+")"}function Mt(e){if(d.rgb(e))return Bt(e);if(d.hex(e))return At(e);if(d.hsl(e))return It(e)}function I(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function kt(e){if(K(e,"translate")||e==="perspective")return"px";if(K(e,"rotate")||K(e,"skew"))return"deg"}function Ee(e,t){return d.fnc(e)?e(t.target,t.id,t.total):e}function B(e,t){return e.getAttribute(t)}function Ce(e,t,i){var n=I(t);if(Ne([i,"deg","rad","turn"],n))return t;var r=Y.CSS[t+i];if(!d.und(r))return r;var o=100,s=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(s),s.style.position="absolute",s.style.width=o+i;var a=o/s.offsetWidth;u.removeChild(s);var h=a*parseFloat(t);return Y.CSS[t+i]=h,h}function rt(e,t,i){if(t in e.style){var n=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=e.style[t]||getComputedStyle(e).getPropertyValue(n)||"0";return i?Ce(e,r,i):r}}function Oe(e,t){if(d.dom(e)&&!d.inp(e)&&(!d.nil(B(e,t))||d.svg(e)&&e[t]))return"attribute";if(d.dom(e)&&Ne(_t,t))return"transform";if(d.dom(e)&&t!=="transform"&&rt(e,t))return"css";if(e[t]!=null)return"object"}function nt(e){if(!!d.dom(e)){for(var t=e.style.transform||"",i=/(\w+)\(([^)]*)\)/g,n=new Map,r;r=i.exec(t);)n.set(r[1],r[2]);return n}}function Lt(e,t,i,n){var r=K(t,"scale")?1:0+kt(t),o=nt(e).get(t)||r;return i&&(i.transforms.list.set(t,o),i.transforms.last=t),n?Ce(e,o,n):o}function Be(e,t,i,n){switch(Oe(e,t)){case"transform":return Lt(e,t,n,i);case"css":return rt(e,t,i);case"attribute":return B(e,t);default:return e[t]||0}}function Ae(e,t){var i=/^(\*=|\+=|-=)/.exec(e);if(!i)return e;var n=I(e)||0,r=parseFloat(t),o=parseFloat(e.replace(i[0],""));switch(i[0][0]){case"+":return r+o+n;case"-":return r-o+n;case"*":return r*o+n}}function it(e,t){if(d.col(e))return Mt(e);if(/\s/g.test(e))return e;var i=I(e),n=i?e.substr(0,e.length-i.length):e;return t?n+t:n}function Ie(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ft(e){return Math.PI*2*B(e,"r")}function Dt(e){return B(e,"width")*2+B(e,"height")*2}function Rt(e){return Ie({x:B(e,"x1"),y:B(e,"y1")},{x:B(e,"x2"),y:B(e,"y2")})}function ot(e){for(var t=e.points,i=0,n,r=0;r<t.numberOfItems;r++){var o=t.getItem(r);r>0&&(i+=Ie(n,o)),n=o}return i}function $t(e){var t=e.points;return ot(e)+Ie(t.getItem(t.numberOfItems-1),t.getItem(0))}function at(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Ft(e);case"rect":return Dt(e);case"line":return Rt(e);case"polyline":return ot(e);case"polygon":return $t(e)}}function Ht(e){var t=at(e);return e.setAttribute("stroke-dasharray",t),t}function zt(e){for(var t=e.parentNode;d.svg(t)&&d.svg(t.parentNode);)t=t.parentNode;return t}function st(e,t){var i=t||{},n=i.el||zt(e),r=n.getBoundingClientRect(),o=B(n,"viewBox"),s=r.width,u=r.height,a=i.viewBox||(o?o.split(" "):[0,0,s,u]);return{el:n,viewBox:a,x:a[0]/1,y:a[1]/1,w:s,h:u,vW:a[2],vH:a[3]}}function Vt(e,t){var i=d.str(e)?tt(e)[0]:e,n=t||100;return function(r){return{property:r,el:i,svg:st(i),totalLength:at(i)*(n/100)}}}function Ut(e,t,i){function n(c){c===void 0&&(c=0);var f=t+c>=1?t+c:0;return e.el.getPointAtLength(f)}var r=st(e.el,e.svg),o=n(),s=n(-1),u=n(1),a=i?1:r.w/r.vW,h=i?1:r.h/r.vH;switch(e.property){case"x":return(o.x-r.x)*a;case"y":return(o.y-r.y)*h;case"angle":return Math.atan2(u.y-s.y,u.x-s.x)*180/Math.PI}}function ze(e,t){var i=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=it(d.pth(e)?e.totalLength:e,t)+"";return{original:n,numbers:n.match(i)?n.match(i).map(Number):[0],strings:d.str(e)||t?n.split(i):[]}}function Me(e){var t=e?te(d.arr(e)?e.map(He):He(e)):[];return ee(t,function(i,n,r){return r.indexOf(i)===n})}function ut(e){var t=Me(e);return t.map(function(i,n){return{target:i,id:n,total:t.length,transforms:{list:nt(i)}}})}function Wt(e,t){var i=_e(t);if(/^spring/.test(i.easing)&&(i.duration=Xe(i.easing)),d.arr(e)){var n=e.length,r=n===2&&!d.obj(e[0]);r?e={value:e}:d.fnc(t.duration)||(i.duration=t.duration/n)}var o=d.arr(e)?e:[e];return o.map(function(s,u){var a=d.obj(s)&&!d.pth(s)?s:{value:s};return d.und(a.delay)&&(a.delay=u?0:t.delay),d.und(a.endDelay)&&(a.endDelay=u===o.length-1?t.endDelay:0),a}).map(function(s){return re(s,i)})}function qt(e){for(var t=ee(te(e.map(function(o){return Object.keys(o)})),function(o){return d.key(o)}).reduce(function(o,s){return o.indexOf(s)<0&&o.push(s),o},[]),i={},n=function(o){var s=t[o];i[s]=e.map(function(u){var a={};for(var h in u)d.key(h)?h==s&&(a.value=u[h]):a[h]=u[h];return a})},r=0;r<t.length;r++)n(r);return i}function Kt(e,t){var i=[],n=t.keyframes;n&&(t=re(qt(n),t));for(var r in t)d.key(r)&&i.push({name:r,tweens:Wt(t[r],e)});return i}function Qt(e,t){var i={};for(var n in e){var r=Ee(e[n],t);d.arr(r)&&(r=r.map(function(o){return Ee(o,t)}),r.length===1&&(r=r[0])),i[n]=r}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function Zt(e,t){var i;return e.tweens.map(function(n){var r=Qt(n,t),o=r.value,s=d.arr(o)?o[1]:o,u=I(s),a=Be(t.target,e.name,u,t),h=i?i.to.original:a,c=d.arr(o)?o[0]:h,f=I(c)||I(a),x=u||f;return d.und(s)&&(s=h),r.from=ze(c,x),r.to=ze(Ae(s,c),x),r.start=i?i.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Se(r.easing,r.duration),r.isPath=d.pth(o),r.isPathTargetInsideSVG=r.isPath&&d.svg(t.target),r.isColor=d.col(r.from.original),r.isColor&&(r.round=1),i=r,r})}var ct={css:function(e,t,i){return e.style[t]=i},attribute:function(e,t,i){return e.setAttribute(t,i)},object:function(e,t,i){return e[t]=i},transform:function(e,t,i,n,r){if(n.list.set(t,i),t===n.last||r){var o="";n.list.forEach(function(s,u){o+=u+"("+s+") "}),e.style.transform=o}}};function lt(e,t){var i=ut(e);i.forEach(function(n){for(var r in t){var o=Ee(t[r],n),s=n.target,u=I(o),a=Be(s,r,u,n),h=u||I(a),c=Ae(it(o,h),a),f=Oe(s,r);ct[f](s,r,c,n.transforms,!0)}})}function Yt(e,t){var i=Oe(e.target,t.name);if(i){var n=Zt(t,e),r=n[n.length-1];return{type:i,property:t.name,animatable:e,tweens:n,duration:r.end,delay:n[0].delay,endDelay:r.endDelay}}}function Jt(e,t){return ee(te(e.map(function(i){return t.map(function(n){return Yt(i,n)})})),function(i){return!d.und(i)})}function ft(e,t){var i=e.length,n=function(o){return o.timelineOffset?o.timelineOffset:0},r={};return r.duration=i?Math.max.apply(Math,e.map(function(o){return n(o)+o.duration})):t.duration,r.delay=i?Math.min.apply(Math,e.map(function(o){return n(o)+o.delay})):t.delay,r.endDelay=i?r.duration-Math.max.apply(Math,e.map(function(o){return n(o)+o.duration-o.endDelay})):t.endDelay,r}var Ve=0;function Gt(e){var t=be(Je,e),i=be(Te,e),n=Kt(i,e),r=ut(e.targets),o=Jt(r,n),s=ft(o,i),u=Ve;return Ve++,re(t,{id:u,children:[],animatables:r,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var C=[],dt=function(){var e;function t(){!e&&(!Ue()||!b.suspendWhenDocumentHidden)&&C.length>0&&(e=requestAnimationFrame(i))}function i(r){for(var o=C.length,s=0;s<o;){var u=C[s];u.paused?(C.splice(s,1),o--):(u.tick(r),s++)}e=s>0?requestAnimationFrame(i):void 0}function n(){!b.suspendWhenDocumentHidden||(Ue()?e=cancelAnimationFrame(e):(C.forEach(function(r){return r._onDocumentVisibility()}),dt()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),t}();function Ue(){return!!document&&document.hidden}function b(e){e===void 0&&(e={});var t=0,i=0,n=0,r,o=0,s=null;function u(m){var v=window.Promise&&new Promise(function(T){return s=T});return m.finished=v,v}var a=Gt(e);u(a);function h(){var m=a.direction;m!=="alternate"&&(a.direction=m!=="normal"?"normal":"reverse"),a.reversed=!a.reversed,r.forEach(function(v){return v.reversed=a.reversed})}function c(m){return a.reversed?a.duration-m:m}function f(){t=0,i=c(a.currentTime)*(1/b.speed)}function x(m,v){v&&v.seek(m-v.timelineOffset)}function w(m){if(a.reversePlayback)for(var T=o;T--;)x(m,r[T]);else for(var v=0;v<o;v++)x(m,r[v])}function g(m){for(var v=0,T=a.animations,M=T.length;v<M;){var P=T[v],L=P.animatable,z=P.tweens,D=z.length-1,S=z[D];D&&(S=ee(z,function(gt){return m<gt.end})[0]||S);for(var R=O(m-S.start-S.delay,0,S.duration)/S.duration,Q=isNaN(R)?1:S.easing(R),_=S.to.strings,ve=S.round,he=[],xt=S.to.numbers.length,$=void 0,V=0;V<xt;V++){var U=void 0,Fe=S.to.numbers[V],De=S.from.numbers[V]||0;S.isPath?U=Ut(S.value,Q*Fe,S.isPathTargetInsideSVG):U=De+Q*(Fe-De),ve&&(S.isColor&&V>2||(U=Math.round(U*ve)/ve)),he.push(U)}var Re=_.length;if(!Re)$=he[0];else{$=_[0];for(var W=0;W<Re;W++){_[W];var $e=_[W+1],me=he[W];isNaN(me)||($e?$+=me+$e:$+=me+" ")}}ct[P.type](L.target,P.property,$,L.transforms),P.currentValue=$,v++}}function p(m){a[m]&&!a.passThrough&&a[m](a)}function E(){a.remaining&&a.remaining!==!0&&a.remaining--}function j(m){var v=a.duration,T=a.delay,M=v-a.endDelay,P=c(m);a.progress=O(P/v*100,0,100),a.reversePlayback=P<a.currentTime,r&&w(P),!a.began&&a.currentTime>0&&(a.began=!0,p("begin")),!a.loopBegan&&a.currentTime>0&&(a.loopBegan=!0,p("loopBegin")),P<=T&&a.currentTime!==0&&g(0),(P>=M&&a.currentTime!==v||!v)&&g(v),P>T&&P<M?(a.changeBegan||(a.changeBegan=!0,a.changeCompleted=!1,p("changeBegin")),p("change"),g(P)):a.changeBegan&&(a.changeCompleted=!0,a.changeBegan=!1,p("changeComplete")),a.currentTime=O(P,0,v),a.began&&p("update"),m>=v&&(i=0,E(),a.remaining?(t=n,p("loopComplete"),a.loopBegan=!1,a.direction==="alternate"&&h()):(a.paused=!0,a.completed||(a.completed=!0,p("loopComplete"),p("complete"),!a.passThrough&&"Promise"in window&&(s(),u(a)))))}return a.reset=function(){var m=a.direction;a.passThrough=!1,a.currentTime=0,a.progress=0,a.paused=!0,a.began=!1,a.loopBegan=!1,a.changeBegan=!1,a.completed=!1,a.changeCompleted=!1,a.reversePlayback=!1,a.reversed=m==="reverse",a.remaining=a.loop,r=a.children,o=r.length;for(var v=o;v--;)a.children[v].reset();(a.reversed&&a.loop!==!0||m==="alternate"&&a.loop===1)&&a.remaining++,g(a.reversed?a.duration:0)},a._onDocumentVisibility=f,a.set=function(m,v){return lt(m,v),a},a.tick=function(m){n=m,t||(t=n),j((n+(i-t))*b.speed)},a.seek=function(m){j(c(m))},a.pause=function(){a.paused=!0,f()},a.play=function(){!a.paused||(a.completed&&a.reset(),a.paused=!1,C.push(a),f(),dt())},a.reverse=function(){h(),a.completed=!a.reversed,f()},a.restart=function(){a.reset(),a.play()},a.remove=function(m){var v=Me(m);pt(v,a)},a.reset(),a.autoplay&&a.play(),a}function We(e,t){for(var i=t.length;i--;)Ne(e,t[i].animatable.target)&&t.splice(i,1)}function pt(e,t){var i=t.animations,n=t.children;We(e,i);for(var r=n.length;r--;){var o=n[r],s=o.animations;We(e,s),!s.length&&!o.children.length&&n.splice(r,1)}!i.length&&!n.length&&t.pause()}function Xt(e){for(var t=Me(e),i=C.length;i--;){var n=C[i];pt(t,n)}}function er(e,t){t===void 0&&(t={});var i=t.direction||"normal",n=t.easing?Se(t.easing):null,r=t.grid,o=t.axis,s=t.from||0,u=s==="first",a=s==="center",h=s==="last",c=d.arr(e),f=parseFloat(c?e[0]:e),x=c?parseFloat(e[1]):0,w=I(c?e[1]:e)||0,g=t.start||0+(c?f:0),p=[],E=0;return function(j,m,v){if(u&&(s=0),a&&(s=(v-1)/2),h&&(s=v-1),!p.length){for(var T=0;T<v;T++){if(!r)p.push(Math.abs(s-T));else{var M=a?(r[0]-1)/2:s%r[0],P=a?(r[1]-1)/2:Math.floor(s/r[0]),L=T%r[0],z=Math.floor(T/r[0]),D=M-L,S=P-z,R=Math.sqrt(D*D+S*S);o==="x"&&(R=-D),o==="y"&&(R=-S),p.push(R)}E=Math.max.apply(Math,p)}n&&(p=p.map(function(_){return n(_/E)*E})),i==="reverse"&&(p=p.map(function(_){return o?_<0?_*-1:-_:Math.abs(E-_)}))}var Q=c?(x-f)/E:f;return g+Q*(Math.round(p[m]*100)/100)+w}}function tr(e){e===void 0&&(e={});var t=b(e);return t.duration=0,t.add=function(i,n){var r=C.indexOf(t),o=t.children;r>-1&&C.splice(r,1);function s(x){x.passThrough=!0}for(var u=0;u<o.length;u++)s(o[u]);var a=re(i,be(Te,e));a.targets=a.targets||e.targets;var h=t.duration;a.autoplay=!1,a.direction=t.direction,a.timelineOffset=d.und(n)?h:Ae(n,h),s(t),t.seek(a.timelineOffset);var c=b(a);s(c),o.push(c);var f=ft(o,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}b.version="3.2.1";b.speed=1;b.suspendWhenDocumentHidden=!0;b.running=C;b.remove=Xt;b.get=Be;b.set=lt;b.convertPx=Ce;b.path=Vt;b.setDashoffset=Ht;b.stagger=er;b.timeline=tr;b.easing=Se;b.penner=et;b.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const br=({children:e})=>l.exports.jsx("div",{id:"Base",className:" dark:text-[#FFFFFF] dark:bg-[#111111] text-[#1A1A1A] flex px-8 sm:px-20  justify-center w-full min-h-full ",children:l.exports.jsx("div",{id:"Children",className:" Background  w-full sm:max-w-[1100px] ",children:e})});function Er(){return l.exports.jsxs("section",{className:"flex flex-col ",children:[l.exports.jsx("span",{className:" font-[Inter] mb-[16px]",children:"Heey \u{1F44B}, I\u2019m"}),l.exports.jsx("h1",{className:"w-min sm:text-6xl mb-[24px]  whitespace-nowrap lg:text-[86px] bg-gradient-to-r text-transparent  bg-clip-text from-[#9845E8] via-[#33D2FF]  to-[#DD5789]",children:"Fahad Alhatshami"}),l.exports.jsx("p",{className:"dark:text-[#F0F0F0] ",children:"Lets dive into my childhood, I've broken more things as a child than I can count. from game-boy's to my mother's computer. My curiosity drove me to discover and learn how things work. from all my small mistakes I've learned one thing. that the most important thing in life is curiosity and its ability to massively improve results. being able to pick up technology or a tool and swiftly grasp its in and outs to be able to materialize my idea into a functional product is what I'm mostly fond of."}),l.exports.jsxs("div",{className:" mt-[60px] flex items-center gap-3",children:[l.exports.jsx("p",{className:" text-[24px]",children:"Say hi"}),l.exports.jsx("a",{href:"https://www.linkedin.com/in/fahadalhatshami/",children:"--->"})]})]})}function jr(){const[e,t]=A.exports.useState(0),i=[{Company:"MicroAA Labs",Position:"Full Stack Developer",Points:[]},{Company:"Lunds University",Position:"Teaching Assistant (Part time)",Points:["Teaching assistant at LTH in programming (EDAA10)","Grading and helping students with their assignments."]}],n=A.exports.useRef(null);return A.exports.useEffect(()=>{window.addEventListener("resize",()=>{const r=document.getElementById("Experience"+e);b({targets:n.current,translateX:r.offsetLeft,translateY:r.offsetTop,duration:0})})},[e]),A.exports.useEffect(()=>{const r=document.getElementById("Experience"+e);b({targets:n.current,translateX:r.offsetLeft,translateY:r.offsetTop,duration:500,easing:"cubicBezier(0.25, 0.1, 0.25, 1)"})},[e]),l.exports.jsxs("section",{id:"Resume",className:" mt-[120px]   index == ExperienceTabSelected",children:[l.exports.jsx("header",{className:"  text-[18px]   index == ExperienceTabSelected font-[Inter]",children:l.exports.jsx("a",{children:"EXPERIENCE"})}),l.exports.jsxs("div",{className:" flex-wrap relative mt-[20px] gap-12 font-[Inter] w-full flex text-lg 1A1A1A",children:[l.exports.jsx("div",{className:"z-0 absolute w-full  ",children:l.exports.jsx("div",{ref:n,className:" w-40 flex-shrink-0 rounded-md h-10 bg-[#1F1E1E] text-[#F0F0F0]"})}),i.map((r,o)=>{let s="text-[#1A1A1A] dark:text-[#F0F0F0] z-10";return l.exports.jsx("div",{id:"Experience"+o,onClick:()=>t(o),className:"  hover:cursor-pointer hover:underline h-11 flex items-center justify-center rounded-md ExperienceBtn w-40 "+s,children:r.Company},o)})]}),l.exports.jsxs("div",{className:" mt-16 flex h-48 flex-col gap-[12px]",children:[l.exports.jsx("h3",{className:" text-[24px]  font-[Inter] ",children:i[e].Position}),l.exports.jsx("span",{className:"text-[#004E93] leading-6 font-[Inter] text-[16px]",children:i[e].Company}),l.exports.jsx("ul",{className:" flex flex-col dark:text-[#C4C4C4]  gap-[12px] font-[Inter] mt-2",children:i[e].Points.map((r,o)=>l.exports.jsxs("li",{className:"flex gap-3  items-center",children:["- ",r]},o))})]})]})}function je(e,t){return je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},je(e,t)}function rr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,je(e,t)}var nr=!!(typeof window<"u"&&window.document&&window.document.createElement);function ir(){if(!nr||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){function n(){e=!0}return n}()}),i=function(){};window.addEventListener("testPassiveEventSupport",i,t),window.removeEventListener("testPassiveEventSupport",i,t)}catch{}return e}var ge=void 0;function or(){return ge===void 0&&(ge=ir()),ge}function ar(e){if(!!e)return or()?e:!!e.capture}function sr(e){if(!e)return 0;if(e===!0)return 100;var t=e.capture<<0,i=e.passive<<1,n=e.once<<2;return t+i+n}function qe(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function ne(e){this.target=e,this.events={}}ne.prototype.getEventHandlers=function(){function e(t,i){var n=String(t)+" "+String(sr(i));return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]}return e}();ne.prototype.handleEvent=function(){function e(t,i,n){var r=this.getEventHandlers(t,i);r.handlers=r.nextHandlers,r.handlers.forEach(function(o){o&&o(n)})}return e}();ne.prototype.add=function(){function e(t,i,n){var r=this,o=this.getEventHandlers(t,n);qe(o),o.nextHandlers.length===0&&(o.handleEvent=this.handleEvent.bind(this,t,n),this.target.addEventListener(t,o.handleEvent,n)),o.nextHandlers.push(i);var s=!0,u=function(){function a(){if(!!s){s=!1,qe(o);var h=o.nextHandlers.indexOf(i);o.nextHandlers.splice(h,1),o.nextHandlers.length===0&&(r.target&&r.target.removeEventListener(t,o.handleEvent,n),o.handleEvent=void 0)}}return a}();return u}return e}();var ye="__consolidated_events_handlers__";function Ke(e,t,i,n){e[ye]||(e[ye]=new ne(e));var r=ar(n);return e[ye].add(t,i,r)}var vt={exports:{}},y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=Symbol.for("react.element"),Le=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),ue=Symbol.for("react.context"),ur=Symbol.for("react.server_context"),ce=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),cr=Symbol.for("react.offscreen"),ht;ht=Symbol.for("react.module.reference");function N(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ke:switch(e=e.type,e){case ie:case ae:case oe:case le:case fe:return e;default:switch(e=e&&e.$$typeof,e){case ur:case ue:case ce:case pe:case de:case se:return e;default:return t}}case Le:return t}}}y.ContextConsumer=ue;y.ContextProvider=se;y.Element=ke;y.ForwardRef=ce;y.Fragment=ie;y.Lazy=pe;y.Memo=de;y.Portal=Le;y.Profiler=ae;y.StrictMode=oe;y.Suspense=le;y.SuspenseList=fe;y.isAsyncMode=function(){return!1};y.isConcurrentMode=function(){return!1};y.isContextConsumer=function(e){return N(e)===ue};y.isContextProvider=function(e){return N(e)===se};y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ke};y.isForwardRef=function(e){return N(e)===ce};y.isFragment=function(e){return N(e)===ie};y.isLazy=function(e){return N(e)===pe};y.isMemo=function(e){return N(e)===de};y.isPortal=function(e){return N(e)===Le};y.isProfiler=function(e){return N(e)===ae};y.isStrictMode=function(e){return N(e)===oe};y.isSuspense=function(e){return N(e)===le};y.isSuspenseList=function(e){return N(e)===fe};y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ie||e===ae||e===oe||e===le||e===fe||e===cr||typeof e=="object"&&e!==null&&(e.$$typeof===pe||e.$$typeof===de||e.$$typeof===se||e.$$typeof===ue||e.$$typeof===ce||e.$$typeof===ht||e.getModuleId!==void 0)};y.typeOf=N;vt.exports=y;function lr(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function fr(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function Qe(e,t){var i=fr(e);if(typeof i=="number")return i;var n=lr(e);if(typeof n=="number")return n*t}var J="above",k="inside",G="below",Pe="invisible";function mt(e){return typeof e.type=="string"}var dr=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function pr(e,t){if(e&&!mt(e)&&!t)throw new Error(dr)}function vr(e){return e.viewportBottom-e.viewportTop===0?Pe:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?k:e.viewportBottom<e.waypointTop?G:e.waypointTop<e.viewportTop?J:Pe}var H,q=[];function Ze(e){q.push(e),H||(H=setTimeout(function(){H=null;for(var i;i=q.shift();)i()},0));var t=!0;return function(){if(!!t){t=!1;var n=q.indexOf(e);n!==-1&&(q.splice(n,1),!q.length&&H&&(clearTimeout(H),H=null))}}}function hr(e){return e==="window"?global.window:e}var we=typeof window<"u",mr={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},F=function(e){rr(t,e);function t(n){var r;return r=e.call(this,n)||this,r.refElement=function(o){r._ref=o},r}var i=t.prototype;return i.componentDidMount=function(){var r=this;!we||(this.cancelOnNextTick=Ze(function(){r.cancelOnNextTick=null;var o=r.props,s=o.children;o.debug,pr(s,r._ref),r._handleScroll=r._handleScroll.bind(r),r.scrollableAncestor=r._findScrollableAncestor(),r.scrollEventListenerUnsubscribe=Ke(r.scrollableAncestor,"scroll",r._handleScroll,{passive:!0}),r.resizeEventListenerUnsubscribe=Ke(window,"resize",r._handleScroll,{passive:!0}),r._handleScroll(null)}))},i.componentDidUpdate=function(){var r=this;!we||!this.scrollableAncestor||this.cancelOnNextTick||(this.cancelOnNextTick=Ze(function(){r.cancelOnNextTick=null,r._handleScroll(null)}))},i.componentWillUnmount=function(){!we||(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())},i._findScrollableAncestor=function(){var r=this.props,o=r.horizontal,s=r.scrollableAncestor;if(s)return hr(s);for(var u=this._ref;u.parentNode;){if(u=u.parentNode,u===document.body)return window;var a=window.getComputedStyle(u),h=o?a.getPropertyValue("overflow-x"):a.getPropertyValue("overflow-y"),c=h||a.getPropertyValue("overflow");if(c==="auto"||c==="scroll"||c==="overlay")return u}return window},i._handleScroll=function(r){if(!!this._ref){var o=this._getBounds(),s=vr(o),u=this._previousPosition,a=this.props;a.debug;var h=a.onPositionChange,c=a.onEnter,f=a.onLeave,x=a.fireOnRapidScroll;if(this._previousPosition=s,u!==s){var w={currentPosition:s,previousPosition:u,event:r,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom};h.call(this,w),s===k?c.call(this,w):u===k&&f.call(this,w);var g=u===G&&s===J,p=u===J&&s===G;x&&(g||p)&&(c.call(this,{currentPosition:k,previousPosition:u,event:r,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}),f.call(this,{currentPosition:s,previousPosition:k,event:r,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}))}}},i._getBounds=function(){var r=this.props,o=r.horizontal;r.debug;var s=this._ref.getBoundingClientRect(),u=s.left,a=s.top,h=s.right,c=s.bottom,f=o?u:a,x=o?h:c,w,g;this.scrollableAncestor===window?(w=o?window.innerWidth:window.innerHeight,g=0):(w=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,g=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var p=this.props,E=p.bottomOffset,j=p.topOffset,m=Qe(j,w),v=Qe(E,w),T=g+w;return{waypointTop:f,waypointBottom:x,viewportTop:g+m,viewportBottom:T-v}},i.render=function(){var r=this,o=this.props.children;if(!o)return Z.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(mt(o)||vt.exports.isForwardRef(o)){var s=function(a){r.refElement(a),o.ref&&(typeof o.ref=="function"?o.ref(a):o.ref.current=a)};return Z.cloneElement(o,{ref:s})}return Z.cloneElement(o,{innerRef:this.refElement})},t}(Z.PureComponent);F.above=J;F.below=G;F.inside=k;F.invisible=Pe;F.defaultProps=mr;F.displayName="Waypoint";function Pr(){const[e,t]=A.exports.useState([{id:1,title:"Project 1",description:"This is a project",image:"https://source.unsplash.com/random/800x600",link:"https://www.google.com",github:"https://github.com",topics:["React","Node","Express","MongoDB"]},{id:2,title:"Project 2",description:"This is a project",image:"https://source.unsplash.com/random/800x600",link:"https://www.google.com",github:"https://github.com",topics:["React","Node","Express","MongoDB"]}]);let i;return A.exports.useEffect(()=>{i=b({targets:".featured-projects__project",translateX:[{value:"-100vw",duration:0},{value:"0%",duration:1e3}],opacity:[{value:0,duration:0},{value:1,duration:1e3}],delay:b.stagger(500),autoplay:!1,easing:"cubicBezier(0.25, 0.1, 0.25, 1)"}).play},[]),l.exports.jsx(F,{bottomOffset:"50%",onEnter:()=>{i()},children:l.exports.jsx("section",{id:"Projects",className:"flex justify-center mt-[100px] ",children:l.exports.jsxs("div",{className:" w-[1057px]",children:[l.exports.jsx("header",{className:" font-[Inter] text-[18px]",children:"FEATURED PROJECTS"}),l.exports.jsx("div",{className:"mt-[52px] font-[Inter] sm:gap-[57px] flex-col xl:flex-row flex flex-wrap",children:e.map((n,r)=>l.exports.jsxs("div",{className:"featured-projects__project mb-[57px]  w-full pt-full relative xl:h-[500px] xl:w-[500px] flex flex-col  ",children:[l.exports.jsx("div",{className:"ProjectImagecontainer sm:w-[500px]  h-[340px] relative",children:l.exports.jsx("img",{layout:"fill",className:" object-cover rounded-[6px]",src:n.description?.split("|")[1]||"/ProjectImage1.jpg"})}),l.exports.jsxs("div",{className:"ProjectDescriptions  flex flex-col mt-[20px] ",children:[l.exports.jsxs("div",{className:"flex items-center justify-between  flex-wrap mb-[12px]",children:[l.exports.jsx("h3",{className:" text-[24px]",children:n.title}),l.exports.jsxs("div",{className:"Projectas h-full  my-4 mt-2 text-[24px] flex ml-2 ",children:[l.exports.jsx("div",{className:"",children:l.exports.jsx("a",{href:n?.link||"/"})}),l.exports.jsx("div",{className:"ml-3",children:l.exports.jsx("a",{className:"",href:n.description||"/"})})]})]}),l.exports.jsx("p",{className:"dark:text-[#C4C4C4] text-[#1A1A1A]",children:n.description}),l.exports.jsx("div",{className:"TechnologyUsed mt-[12px]",children:l.exports.jsx("span",{className:"text-[#6CACE4]  text-[16px] text-",children:n.topics.map(o=>o[0].toUpperCase()+o.slice(1)).join(" - ")})})]})]},r))})]})})})}const Tr=()=>l.exports.jsx("div",{className:"mt-[100px] dark:border-[#C6C6C6] light:border-[#1A1A1A] Divider border-t-[4px]"});export{br as Base,Tr as Divider,jr as Experience,Pr as FeaturedProjects,wr as Footer,yr as Header,Er as Hero};
