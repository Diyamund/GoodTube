(function(){var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
ca("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
ca("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=Object.create(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var k=this;function da(a){return void 0!==a}
function q(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ea(){}
function fa(a){a.T=void 0;a.u=function(){return a.T?a.T:a.T=new a}}
function ga(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function t(a){var b=ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function ha(a){return"function"==ga(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function v(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=la:w=ma;return w.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function x(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&da(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Za=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var oa;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function qa(a,b){return a<b?-1:a>b?1:0}
function ra(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function sa(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()}
function ta(a){var b=u(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var ua=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},va=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=u(a)?a.split(""):a,l=0;l<d;l++)if(l in h){var m=h[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e},wa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},xa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},ya=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function za(a,b){a:{var c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function Aa(a,b){return 0<=ua(a,b)}
function Ba(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ca(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(t(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Da(a,b,c,d){Array.prototype.splice.apply(a,Ea(arguments,1))}
function Ea(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Fa(a,b){a.sort(b||Ga)}
function Ha(a,b){var c=Ga;Fa(a,function(a,e){return c(b(a),b(e))})}
function Ia(a){Ha(a,function(a){return a.name})}
function Ga(a,b){return a>b?1:a<b?-1:0}
function Ja(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==ga(d))for(var e=0;e<d.length;e+=8192)for(var f=Ja.apply(null,Ea(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;function Ka(a,b,c){this.i=c;this.f=a;this.l=b;this.b=0;this.a=null}
Ka.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};var La;a:{var Ma=k.navigator;if(Ma){var Na=Ma.userAgent;if(Na){La=Na;break a}}La=""}function A(a){return-1!=La.indexOf(a)}
;function Oa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Pa(a){var b=0,c;for(c in a)b++;return b}
function Qa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ra(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Sa(a){var b=Ta,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Va(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ua.length;f++)c=Ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Wa(a){k.setTimeout(function(){throw a;},0)}
var Xa;
function Ya(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(da(c.next)){c=c.next;var a=c.U;c.U=null;a()}};
return function(a){d.next={U:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;function Za(){this.b=this.a=null}
var bb=new Ka(function(){return new ab},function(a){a.reset()},100);
Za.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function ab(){this.next=this.scope=this.a=null}
ab.prototype.set=function(a,b){this.a=a;this.scope=b;this.next=null};
ab.prototype.reset=function(){this.next=this.scope=this.a=null};function cb(a){db||eb();fb||(db(),fb=!0);var b=gb,c=bb.get();c.set(a,void 0);b.b?b.b.next=c:b.a=c;b.b=c}
var db;function eb(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);db=function(){a.then(hb)}}else db=function(){var a=hb;
!ha(k.setImmediate)||k.Window&&k.Window.prototype&&!A("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Xa||(Xa=Ya()),Xa(a)):k.setImmediate(a)}}
var fb=!1,gb=new Za;function hb(){for(var a;a=gb.remove();){try{a.a.call(a.scope)}catch(c){Wa(c)}var b=bb;b.l(a);b.b<b.i&&(b.b++,a.next=b.a,b.a=a)}fb=!1}
;function ib(a){for(var b,c,d=[],e=0,f=0;e<a.length;){var h=a[e++];if(128>h)d[f++]=String.fromCharCode(h);else if(191<h&&224>h)c=a[e++],d[f++]=String.fromCharCode((h&31)<<6|c&63);else if(239<h&&365>h){c=a[e++];b=a[e++];var l=a[e++];b=((h&7)<<18|(c&63)<<12|(b&63)<<6|l&63)-65536;d[f++]=String.fromCharCode(55296+(b>>10));d[f++]=String.fromCharCode(56320+(b&1023))}else c=a[e++],b=a[e++],d[f++]=String.fromCharCode((h&15)<<12|(c&63)<<6|b&63)}return d.join("")}
;function jb(a){jb[" "](a);return a}
jb[" "]=ea;function kb(a,b){var c=lb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var mb=A("Opera"),B=A("Trident")||A("MSIE"),nb=A("Edge"),ob=nb||B,pb=A("Gecko")&&!(-1!=La.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),qb=-1!=La.toLowerCase().indexOf("webkit")&&!A("Edge");function rb(){var a=k.document;return a?a.documentMode:void 0}
var sb;a:{var tb="",ub=function(){var a=La;if(pb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(nb)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qb)return/WebKit\/(\S+)/.exec(a);if(mb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ub&&(tb=ub?ub[1]:"");if(B){var vb=rb();if(null!=vb&&vb>parseFloat(tb)){sb=String(vb);break a}}sb=tb}var wb=sb,lb={};
function xb(a){return kb(a,function(){for(var b=0,c=pa(String(wb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=qa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||qa(0==h[2].length,0==l[2].length)||qa(h[2],l[2]);h=h[3];l=l[3]}while(0==b)}return 0<=b})}
var yb;var zb=k.document;yb=zb&&B?rb()||("CSS1Compat"==zb.compatMode?parseInt(wb,10):5):void 0;var Ab=null,Bb=null;function Cb(a){var b=[];Db(a,function(a){b.push(a)});
return b}
function Db(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Bb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}
Eb();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=l&&b(h<<6&192|l))}}
function Eb(){if(!Ab){Ab={};Bb={};for(var a=0;65>a;a++)Ab[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Bb[Ab[a]]=a,62<=a&&(Bb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}}
;function Fb(){this.i=this.i;this.f=this.f}
Fb.prototype.i=!1;Fb.prototype.M=function(){return this.i};
Fb.prototype.dispose=function(){this.i||(this.i=!0,this.P())};
Fb.prototype.P=function(){if(this.f)for(;this.f.length;)this.f.shift()()};
function Gb(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Hb=!pb&&!B||B&&9<=Number(yb)||pb&&xb("1.9.1"),Ib=B&&!xb("9");function Jb(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function C(a,b){return a.classList?a.classList.contains(b):Aa(Jb(a),b)}
function E(a,b){a.classList?a.classList.add(b):C(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Kb(a,b){if(a.classList)z(b,function(b){E(a,b)});
else{var c={};z(Jb(a),function(a){c[a]=!0});
z(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function F(a,b){a.classList?a.classList.remove(b):C(a,b)&&(a.className=va(Jb(a),function(a){return a!=b}).join(" "))}
function Lb(a,b){a.classList?z(b,function(b){F(a,b)}):a.className=va(Jb(a),function(a){return!Aa(b,a)}).join(" ")}
function Mb(a,b,c){c?E(a,b):F(a,b)}
function Nb(a,b,c){C(a,b)&&(F(a,b),E(a,c))}
function Ob(a,b){var c=!C(a,b);Mb(a,b,c)}
;var Pb=!B&&!(A("Safari")&&!((A("Chrome")||A("CriOS"))&&!A("Edge")||A("Coast")||A("Opera")||A("Edge")||A("Silk")||A("Android")));function Qb(a,b){return Pb&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+sa(b))}
function Rb(a){return Pb&&a.dataset?"value"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+sa("value")):!!a.getAttribute("data-"+sa("value"))}
;function Sb(){this.a="";this.b=Tb}
Sb.prototype.S=!0;Sb.prototype.R=function(){return this.a};
var Ub=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Tb={};function Vb(a){var b=new Sb;b.a=a;return b}
Vb("about:blank");function Wb(){this.a=Xb}
Wb.prototype.S=!0;Wb.prototype.R=function(){return""};
function Yb(a){return a instanceof Wb&&a.constructor===Wb&&a.a===Xb?"":"type_error:SafeHtml"}
var Xb={};function G(a,b){this.g=da(a)?a:0;this.h=da(b)?b:0}
G.prototype.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.g==a.g&&this.h==a.h:!1)};
function Zb(a,b){return new G(a.g-b.g,a.h-b.h)}
G.prototype.ceil=function(){this.g=Math.ceil(this.g);this.h=Math.ceil(this.h);return this};
G.prototype.floor=function(){this.g=Math.floor(this.g);this.h=Math.floor(this.h);return this};
G.prototype.round=function(){this.g=Math.round(this.g);this.h=Math.round(this.h);return this};function $b(a,b){this.width=a;this.height=b}
g=$b.prototype;g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!(this.width*this.height)};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a){return a?new bc(cc(a)):oa||(oa=new bc)}
function H(a){return u(a)?document.getElementById(a):a}
function dc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):ec("*",a,b)}
function J(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=ec("*",a,b)[0];return d||null}
function ec(a,b,c){var d=document;c=c||d;var e=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(e||b))return c.querySelectorAll(e+(b?"."+b:""));if(b&&c.getElementsByClassName){d=c.getElementsByClassName(b);if(e){c={};for(var f=a=0,h;h=d[f];f++)e==h.nodeName&&(c[a++]=h);c.length=a;return c}return d}d=c.getElementsByTagName(e||"*");if(b){c={};for(f=a=0;h=d[f];f++)e=h.className,"function"==typeof e.split&&Aa(e.split(/\s+/),b)&&(c[a++]=h);c.length=a;return c}return d}
function fc(a,b){Oa(b,function(b,d){b&&b.S&&(b=b.R());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:gc.hasOwnProperty(d)?a.setAttribute(gc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var gc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function hc(a){a=a.document;a=ic(a)?a.documentElement:a.body;return new $b(a.clientWidth,a.clientHeight)}
function jc(a){var b=kc(a);a=lc(a);return B&&xb("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function kc(a){return a.scrollingElement?a.scrollingElement:!qb&&ic(a)?a.documentElement:a.body||a.documentElement}
function lc(a){return a.parentWindow||a.defaultView}
function mc(a,b,c){function d(c){c&&b.appendChild(u(c)?a.createTextNode(c):c)}
for(var e=1;e<c.length;e++){var f=c[e];if(!t(f)||ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(ia(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if(ha(f)){h="function"==typeof f.item;break a}}h=!1}z(h?Ba(f):f,d)}}}
function ic(a){return"CSS1Compat"==a.compatMode}
function nc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function oc(a){return Hb&&void 0!=a.children?a.children:va(a.childNodes,function(a){return 1==a.nodeType})}
function pc(a){for(;a&&1!=a.nodeType;)a=a.nextSibling;return a}
function qc(a){return ia(a)&&1==a.nodeType}
function rc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function cc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function sc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(cc(a).createTextNode(String(b)))}}
function tc(a,b){var c=[];return uc(a,b,c,!0)?c[0]:void 0}
function uc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||uc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var vc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},wc={IMG:" ",BR:"\n"};function xc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!yc(a)||zc(a)):yc(a)&&zc(a))&&B){var c;!ha(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function yc(a){return B&&!xb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function zc(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function Ac(a){if(Ib&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Bc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Ib||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Bc(a,b,c){if(!(a.nodeName in vc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in wc)b.push(wc[a.nodeName]);else for(a=a.firstChild;a;)Bc(a,b,c),a=a.nextSibling}
function Cc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Dc(a,function(a){return(!e||a.nodeName==e)&&(!c||u(a.className)&&Aa(a.className.split(/\s+/),c))},d)}
function K(a,b){return Cc(a,null,b,void 0)}
function Dc(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function bc(a){this.a=a||k.document||document}
g=bc.prototype;g.createElement=function(a){return this.a.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.append=function(a,b){mc(cc(a),a,arguments)};
g.isElement=qc;g.contains=rc;var Ec="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function Fc(){}
Fc.prototype.next=function(){throw Ec;};
Fc.prototype.F=function(){return this};
function Gc(a){if(a instanceof Fc)return a;if("function"==typeof a.F)return a.F(!1);if(t(a)){var b=0,c=new Fc;c.next=function(){for(;;){if(b>=a.length)throw Ec;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Hc(a,b){if(t(a))try{z(a,b,void 0)}catch(c){if(c!==Ec)throw c;}else{a=Gc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ec)throw c;}}}
function Ic(a){if(t(a))return Ba(a);a=Gc(a);var b=[];Hc(a,function(a){b.push(a)});
return b}
;function Jc(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=Jc.prototype;g.getHeight=function(){return this.bottom-this.top};
g.contains=function(a){return this&&a?a instanceof Jc?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.g>=this.left&&a.g<=this.right&&a.h>=this.top&&a.h<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Kc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Kc.prototype.contains=function(a){return a instanceof G?a.g>=this.left&&a.g<=this.left+this.width&&a.h>=this.top&&a.h<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
Kc.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Kc.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Kc.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Lc(a,b,c){if(u(b))(b=Mc(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Mc(c,d);f&&(c.style[f]=e)}}
var Nc={};function Mc(a,b){var c=Nc[b];if(!c){var d=ra(b),c=d;void 0===a.style[d]&&(d=(qb?"Webkit":pb?"Moz":B?"ms":mb?"O":null)+ta(d),void 0!==a.style[d]&&(c=d));Nc[b]=c}return c}
function Oc(a,b){var c=cc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Pc(a,b){return Oc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Qc(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Rc(a){if(B&&!(8<=Number(yb)))return a.offsetParent;var b=cc(a),c=Pc(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Pc(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Sc(a){for(var b=new Jc(0,Infinity,Infinity,0),c=ac(a),d=c.a.body,e=c.a.documentElement,f=kc(c.a);a=Rc(a);)if(!(B&&0==a.clientWidth||qb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Pc(a,"overflow")){var h=Tc(a),l=new G(a.clientLeft,a.clientTop);h.g+=l.g;h.h+=l.h;b.top=Math.max(b.top,h.h);b.right=Math.min(b.right,h.g+a.clientWidth);b.bottom=Math.min(b.bottom,h.h+a.clientHeight);b.left=Math.max(b.left,h.g)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
hc(lc(c.a)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Tc(a){var b=cc(a),c=new G(0,0);var d=b?cc(b):document;d=!B||9<=Number(yb)||ic(ac(d).a)?d.documentElement:d.body;if(a==d)return c;a=Qc(a);b=jc(ac(b).a);c.g=a.left+b.g;c.h=a.top+b.h;return c}
function Uc(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Vc(a){var b=Wc;if("none"!=Pc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Wc(a){var b=a.offsetWidth,c=a.offsetHeight,d=qb&&!b&&!c;return da(b)&&!d||!a.getBoundingClientRect?new $b(b,c):(a=Qc(a),new $b(a.right-a.left,a.bottom-a.top))}
function Xc(a){var b=Tc(a);a=Vc(a);return new Kc(b.g,b.h,a.width,a.height)}
function Yc(a){return"rtl"==Pc(a,"direction")}
function Zc(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function $c(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Zc(a,c):0}
var ad={thin:2,medium:4,thick:6};function bd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ad?ad[c]:Zc(a,c)}
;function cd(a,b,c,d,e,f,h){var l;if(l=c.offsetParent){var m="HTML"==l.tagName||"BODY"==l.tagName;if(!m||"static"!=Pc(l,"position")){var n=Tc(l);m||(m=(m=Yc(l))&&pb?-l.scrollLeft:!m||ob&&xb("8")||"visible"==Pc(l,"overflowX")?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft,n=Zb(n,new G(m,l.scrollTop)))}}l=n||new G;n=Xc(a);if(m=Sc(a)){var r=new Kc(m.left,m.top,m.right-m.left,m.bottom-m.top),m=Math.max(n.left,r.left),R=Math.min(n.left+n.width,r.left+r.width);if(m<=R){var S=Math.max(n.top,r.top),
r=Math.min(n.top+n.height,r.top+r.height);S<=r&&(n.left=m,n.top=S,n.width=R-m,n.height=r-S)}}m=ac(a);S=ac(c);if(m.a!=S.a){var R=m.a.body;var S=lc(S.a),r=new G(0,0);var I=(I=cc(R))?lc(I):window;b:{try{jb(I.parent);var D=!0;break b}catch(Wf){}D=!1}if(D){D=R;do{if(I==S)var $a=Tc(D);else $a=Qc(D),$a=new G($a.left,$a.top);r.g+=$a.g;r.h+=$a.h}while(I&&I!=S&&I!=I.parent&&(D=I.frameElement)&&(I=I.parent))}D=Zb(r,Tc(R));!B||9<=Number(yb)||ic(m.a)||(D=Zb(D,jc(m.a)));n.left+=D.g;n.top+=D.h}a=dd(a,b);b=n.left;
a&4?b+=n.width:a&2&&(b+=n.width/2);b=new G(b,n.top+(a&1?n.height:0));b=Zb(b,l);e&&(b.g+=(a&4?-1:1)*e.g,b.h+=(a&1?-1:1)*e.h);var p;h&&(p=Sc(c))&&(p.top-=l.h,p.right-=l.g,p.bottom-=l.h,p.left-=l.g);e=b;e=new G(e.g,e.h);b=dd(c,d);d=Vc(c);a=new $b(d.width,d.height);e=new G(e.g,e.h);a=new $b(a.width,a.height);l=0;if(f||0!=b)b&4?e.g-=a.width+(f?f.right:0):b&2?e.g-=a.width/2:f&&(e.g+=f.left),b&1?e.h-=a.height+(f?f.bottom:0):f&&(e.h+=f.top);h&&(p?(f=e,b=a,l=0,65==(h&65)&&(f.g<p.left||f.g>=p.right)&&(h&=-2),
132==(h&132)&&(f.h<p.top||f.h>=p.bottom)&&(h&=-5),f.g<p.left&&h&1&&(f.g=p.left,l|=1),h&16&&(n=f.g,f.g<p.left&&(f.g=p.left,l|=4),f.g+b.width>p.right&&(b.width=Math.min(p.right-f.g,n+b.width-p.left),b.width=Math.max(b.width,0),l|=4)),f.g+b.width>p.right&&h&1&&(f.g=Math.max(p.right-b.width,p.left),l|=1),h&2&&(l|=(f.g<p.left?16:0)|(f.g+b.width>p.right?32:0)),f.h<p.top&&h&4&&(f.h=p.top,l|=2),h&32&&(n=f.h,f.h<p.top&&(f.h=p.top,l|=8),f.h+b.height>p.bottom&&(b.height=Math.min(p.bottom-f.h,n+b.height-p.top),
b.height=Math.max(b.height,0),l|=8)),f.h+b.height>p.bottom&&h&4&&(f.h=Math.max(p.bottom-b.height,p.top),l|=2),h&8&&(l|=(f.h<p.top?64:0)|(f.h+b.height>p.bottom?128:0)),h=l):h=256,l=h);f=new Kc(0,0,0,0);f.left=e.g;f.top=e.h;f.width=a.width;f.height=a.height;h=l;h&496||(e=new G(f.left,f.top),e instanceof G?(p=e.g,e=e.h):(p=e,e=void 0),c.style.left=Uc(p,!1),c.style.top=Uc(e,!1),a=new $b(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,p=ic(ac(cc(c)).a),!B||xb("10")||p&&xb("8")?
(c=c.style,pb?c.MozBoxSizing="border-box":qb?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,p?(B?(b=$c(c,"paddingLeft"),a=$c(c,"paddingRight"),e=$c(c,"paddingTop"),p=$c(c,"paddingBottom"),p=new Jc(e,a,p,b)):(b=Oc(c,"paddingLeft"),a=Oc(c,"paddingRight"),e=Oc(c,"paddingTop"),p=Oc(c,"paddingBottom"),p=new Jc(parseFloat(e),parseFloat(a),parseFloat(p),parseFloat(b))),!B||9<=Number(yb)?(b=Oc(c,"borderLeftWidth"),a=
Oc(c,"borderRightWidth"),e=Oc(c,"borderTopWidth"),c=Oc(c,"borderBottomWidth"),c=new Jc(parseFloat(e),parseFloat(a),parseFloat(c),parseFloat(b))):(b=bd(c,"borderLeft"),a=bd(c,"borderRight"),e=bd(c,"borderTop"),c=bd(c,"borderBottom"),c=new Jc(e,a,c,b)),d.pixelWidth=f.width-c.left-p.left-p.right-c.right,d.pixelHeight=f.height-c.top-p.top-p.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return h}
function dd(a,b){return(b&8&&Yc(a)?b^4:b)&-9}
;function L(a){Fb.call(this);this.s=1;this.l=[];this.m=0;this.a=[];this.b={};this.w=!!a}
y(L,Fb);g=L.prototype;g.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.s;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.s=e+3;d.push(e);return e};
function ed(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.I(d),b.apply(void 0,arguments))},a)}
function fd(a,b,c){if(b=a.b[b]){var d=a.a;(b=za(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.I(b)}}
g.I=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.m)this.l.push(a),this.a[a+1]=ea;else{if(c){var d=ua(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
g.D=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var h=c[e];gd(this.a[h+1],this.a[h+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.a[h+1].apply(this.a[h+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;h=this.l.pop();)this.I(h)}}return 0!=e}return!1};
function gd(a,b,c){cb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.b[a];b&&(z(b,this.I,this),delete this.b[a])}else this.a.length=0,this.b={}};
g.A=function(a){if(a){var b=this.b[a];return b?b.length:0}a=0;for(b in this.b)a+=this.A(b);return a};
g.P=function(){L.B.P.call(this);this.clear();this.l.length=0};function hd(){}
;function id(){}
y(id,hd);id.prototype.A=function(){var a=0;Hc(this.F(!0),function(){a++});
return a};
id.prototype.clear=function(){var a=Ic(this.F(!0)),b=this;z(a,function(a){b.remove(a)})};function jd(a){this.a=a}
y(jd,id);g=jd.prototype;g.isAvailable=function(){if(!this.a)return!1;try{return this.a.setItem("__sak","1"),this.a.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.a.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.a.removeItem(a)};
g.A=function(){return this.a.length};
g.F=function(a){var b=0,c=this.a,d=new Fc;d.next=function(){if(b>=c.length)throw Ec;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.a.clear()};
g.key=function(a){return this.a.key(a)};function kd(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
y(kd,jd);function ld(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}
y(ld,jd);function md(a,b){this.b={};this.a=[];this.i=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof md?(c=a.J(),d=a.G()):(c=Ra(a),d=Qa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=md.prototype;g.A=function(){return this.f};
g.G=function(){nd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
g.J=function(){nd(this);return this.a.concat()};
g.O=function(a){for(var b=0;b<this.a.length;b++){var c=this.a[b];if(od(this.b,c)&&this.b[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.f!=a.A())return!1;var c=b||pd;nd(this);for(var d,e=0;d=this.a[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function pd(a,b){return a===b}
g.isEmpty=function(){return 0==this.f};
g.clear=function(){this.b={};this.i=this.f=this.a.length=0};
g.remove=function(a){return od(this.b,a)?(delete this.b[a],this.f--,this.i++,this.a.length>2*this.f&&nd(this),!0):!1};
function nd(a){var b,c;if(a.f!=a.a.length){for(b=c=0;c<a.a.length;){var d=a.a[c];od(a.b,d)&&(a.a[b++]=d);c++}a.a.length=b}if(a.f!=a.a.length){var e={};for(b=c=0;c<a.a.length;)d=a.a[c],od(e,d)||(a.a[b++]=d,e[d]=1),c++;a.a.length=b}}
g.get=function(a,b){return od(this.b,a)?this.b[a]:b};
g.set=function(a,b){od(this.b,a)||(this.f++,this.a.push(a),this.i++);this.b[a]=b};
g.forEach=function(a,b){for(var c=this.J(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.F=function(a){nd(this);var b=0,c=this.i,d=this,e=new Fc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Ec;var e=d.a[b++];return a?e:d.b[e]};
return e};
function od(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function qd(a){return a.A&&"function"==typeof a.A?a.A():t(a)||u(a)?a.length:Pa(a)}
function rd(a){if(a.G&&"function"==typeof a.G)return a.G();if(u(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Qa(a)}
function sd(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(t(a)||u(a))return ya(a,b,void 0);if(a.J&&"function"==typeof a.J)var c=a.J();else if(a.G&&"function"==typeof a.G)c=void 0;else if(t(a)||u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ra(a);for(var d=rd(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function td(a){this.a=new md;if(a){a=rd(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(ud(d),d)}}}
function ud(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+v(a):b.substr(0,1)+a}
g=td.prototype;g.A=function(){return this.a.A()};
g.remove=function(a){return this.a.remove(ud(a))};
g.clear=function(){this.a.clear()};
g.isEmpty=function(){return this.a.isEmpty()};
g.contains=function(a){a=ud(a);return od(this.a.b,a)};
g.G=function(){return this.a.G()};
g.equals=function(a){return this.A()==qd(a)&&vd(this,a)};
function vd(a,b){var c=qd(b);if(a.A()>c)return!1;!(b instanceof td)&&5<c&&(b=new td(b));return sd(a,function(a){var c=b;if(c.contains&&"function"==typeof c.contains)a=c.contains(a);else if(c.O&&"function"==typeof c.O)a=c.O(a);else if(t(c)||u(c))a=Aa(c,a);else a:{for(var d in c)if(c[d]==a){a=!0;break a}a=!1}return a})}
g.F=function(){return this.a.F(!1)};function wd(a,b,c){if("array"==ga(b))for(var d=0;d<b.length;d++)wd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
;function xd(a,b){return a?a.dataset?a.dataset[yd(b)]:a.getAttribute("data-"+b):null}
var zd={};function yd(a){return zd[a]||(zd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function Ad(a,b,c){a&&(a.dataset?a.dataset[yd(b)]=String(c):a.setAttribute("data-"+b,c))}
;var Bd=0;function Cd(a,b){var c=ec(a,null,b);return c.length?c[0]:null}
var Dd=q("ytDomDomGetNextId")||function(){return++Bd};
x("ytDomDomGetNextId",Dd);function Ed(a){var b=a.__yt_uid_key;b||(b=Dd(),a.__yt_uid_key=b);return b}
function Fd(a,b){a=H(a);b=H(b);return!!Dc(a,function(a){return a===b},void 0)}
function Gd(){Mb(document.body,"hide-players",!1);z(dc("preserve-players"),function(a){F(a,"preserve-players")})}
;var Hd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",Hd);function Id(a){var b=arguments;if(1<b.length)Hd[b[0]]=b[1];else{var b=b[0],c;for(c in b)Hd[c]=b[c]}}
function Jd(a,b){return a in Hd?Hd[a]:b}
;function Kd(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=Jd("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Id("ERRORS",b))}
function Ld(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Kd(b)}}:a}
;var Md={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Nd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Md||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Nd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Nd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Nd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ta=q("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",Ta);var Od=q("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",Od);function Pd(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Sa(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Pd(a,b,c,d);if(e)return e;var e=++Od.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(d){d=new Nd(d);if(!Dc(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Nd(b);
b.currentTarget=a;return c.call(a,b)};
h=Ld(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);Ta[e]=[a,b,c,h,d];return e}
function Qd(a,b,c){var d=a||document;return M(d,"click",function(a){var e=Dc(a.target,function(a){return a===d||c(a)});
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Rd(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Sd(a,b){return Qd(a,b,function(a){return C(a,"yt-dialog-dismiss")})}
function Td(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function N(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in Ta){var b=Ta[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ta[a]}}))}
;function Ud(a,b){ha(a)&&(a=Ld(a));return window.setTimeout(a,b)}
;var Vd=q("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.I;L.prototype.publish=L.prototype.D;L.prototype.clear=L.prototype.clear;x("ytPubsubPubsubInstance",Vd);var Wd=q("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",Wd);var Xd=q("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",Xd);var Yd=q("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",Yd);
function Zd(a,b,c){var d=$d();if(d){var e=d.subscribe(a,function(){var d=arguments;var h=function(){Wd[e]&&b.apply(c||window,d)};
try{Yd[a]?h():Ud(h,0)}catch(l){Kd(l)}},c);
Wd[e]=!0;Xd[a]||(Xd[a]=[]);Xd[a].push(e);return e}return 0}
function $d(){return q("ytPubsubPubsubInstance")}
function O(a,b){var c=$d();c&&c.publish.apply(c,arguments)}
function ae(a,b){Yd[a]=!0;var c=$d();c&&c.publish.apply(c,arguments);Yd[a]=!1}
function be(a){var b=$d();b&&("number"==typeof a?a=[a]:u(a)&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete Wd[a]}))}
;function ce(a,b){(a=H(a))&&a.style&&(a.style.display=b?"":"none",Mb(a,"hid",!b))}
function de(a){return(a=H(a))?"none"!=a.style.display&&!C(a,"hid"):!1}
function ee(a){z(arguments,function(a){!t(a)||a instanceof Element?ce(a,!0):z(a,function(a){ee(a)})})}
function fe(a){z(arguments,function(a){!t(a)||a instanceof Element?ce(a,!1):z(a,function(a){fe(a)})})}
;var ge=q("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.I;L.prototype.publish=L.prototype.D;L.prototype.clear=L.prototype.clear;x("ytPubsub2Pubsub2Instance",ge);var he=q("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",he);var ie=q("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",ie);var je=q("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",je);
x("ytPubsub2Pubsub2SkipSubKey",null);function ke(a){var b=q("ytPubsub2Pubsub2Instance");b&&("number"==typeof a&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete he[a]}))}
;var le={},me="ontouchstart"in document;function ne(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Dc(c,function(a){return C(a,b)},d)}
function P(a){var b;var c="mouseover"==a.type&&"mouseenter"in le||"mouseout"==a.type&&"mouseleave"in le;var d=a.type in le||c;if("HTML"!=a.target.tagName&&d){if(c){c="mouseover"==a.type?"mouseenter":"mouseleave";var d=le[c],e;for(e in d.b)(b=ne(c,e,a.target))&&!Dc(a.relatedTarget,function(a){return a==b})&&d.D(e,b,c,a)}if(c=le[a.type])for(e in c.b)(b=ne(a.type,e,a.target))&&c.D(e,b,a.type,a)}}
M(document,"blur",P,!0);M(document,"change",P,!0);M(document,"click",P);M(document,"focus",P,!0);M(document,"mouseover",P);M(document,"mouseout",P);M(document,"mousedown",P);M(document,"keydown",P);M(document,"keyup",P);M(document,"keypress",P);M(document,"cut",P);M(document,"paste",P);me&&(M(document,"touchstart",P),M(document,"touchend",P),M(document,"touchcancel",P));function Q(a){this.l=a;this.s={};this.w=[];this.H=[]}
g=Q.prototype;g.v=function(a){return K(a,T(this))};
function T(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
g.unregister=function(){be(this.w);this.w.length=0;ke(this.H);this.H.length=0};
g.init=ea;g.dispose=ea;function oe(a,b,c){a.w.push(Zd(b,c,a))}
function U(a,b,c,d){d=T(a,d);var e=w(c,a);b in le||(le[b]=new L);le[b].subscribe(d,e);a.s[c]=e}
function V(a,b,c,d){if(b in le){var e=le[b];fd(e,T(a,d),a.s[c]);0>=e.A()&&(e.dispose(),delete le[b])}delete a.s[c]}
g.K=function(a,b,c){var d=this.j(a,b);if(d&&(d=q(d))){var e=Ea(arguments,2);Da(e,0,0,a);d.apply(null,e)}};
g.j=function(a,b){return xd(a,b)};var pe=q("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",pe);var qe=q("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",qe);(new kd).isAvailable();(new ld).isAvailable();function re(){Q.call(this,"button");this.a=null;this.f=[];this.b={}}
y(re,Q);fa(re);g=re.prototype;g.register=function(){U(this,"click",this.V);U(this,"keydown",this.ga);U(this,"keypress",this.ha);oe(this,"page-scroll",this.Fa)};
g.unregister=function(){V(this,"click",this.V);V(this,"keydown",this.ga);V(this,"keypress",this.ha);se(this);this.b={};re.B.unregister.call(this)};
g.V=function(a){a&&!a.disabled&&(te(this,a),this.click(a))};
g.ga=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=W(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=tc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Ma;else"table"==e&&(f=this.La);f&&ue(this,a,b,c,w(f,this))}}};
g.Fa=function(){var a=this.b;if(0!=Pa(a))for(var b in a){var c=a[b],d=ve(this,c);if(void 0==d||void 0==c)break;we(this,d,c,!0)}};
function ue(a,b,c,d,e){var f=de(c),h=9==d.keyCode;if(h||32==d.keyCode||13==d.keyCode)if(d=xe(a,c))if(a=da(d.firstElementChild)?d.firstElementChild:pc(d.firstChild),"a"==a.tagName.toLowerCase()){var l=void 0===l?{}:l;var m=void 0===m?"":m;var n=void 0===n?window:n;b=n.location;n=[a.href];for(var r in l)wd(r,l[r],n);n[1]&&(l=n[0],r=l.indexOf("#"),0<=r&&(n.push(l.substr(r)),n[0]=l=l.substr(0,r)),r=l.indexOf("?"),0>r?n[1]="?":r==l.length-1&&(n[1]=void 0));m=n.join("")+m;m instanceof Sb||m instanceof Sb||
(m=m.S?m.R():String(m),Ub.test(m)||(m="about:invalid#zClosurez"),m=Vb(m));b.href=m instanceof Sb&&m.constructor===Sb&&m.b===Tb?m.a:"type_error:SafeUrl"}else Td(a,"click");else h&&ye(a,b);else f?27==d.keyCode?(xe(a,c),ye(a,b)):e(b,c,d):(m=C(b,T(a,"reverse"))?38:40,d.keyCode==m&&(Td(b,"click"),d.preventDefault()))}
g.ha=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=W(this,a),de(a)&&c.preventDefault())};
function xe(a,b){var c=T(a,"menu-item-highlight"),d=J(c,b);d&&F(d,c);return d}
function ze(a,b,c){E(c,T(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=T(a,"item-id-"+v(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
g.La=function(a,b,c){var d=xe(this,b);if(d){var e=Cd("table",b);b=ec("td",null,e);d=Ae(d,b,ec("td",null,Cd("tr",e)).length,c);-1!=d&&(ze(this,a,b[d]),c.preventDefault())}};
g.Ma=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=xe(this,b);d&&(b=va(ec("li",null,b),de),ze(this,a,b[Ae(d,b,1,c)]),c.preventDefault())}};
function Ae(a,b,c,d){var e=b.length;a=ua(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Be(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=T(a,"menu-mask"),fe(c),b.iframeMask=c);return c}
function we(a,b,c,d){var e=K(b,T(a,"group")),f=!!a.j(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,h=8,l=Xc(b);if(C(b,T(a,"reverse"))){f=8;h=9;l=l.top+"px";try{c.style.maxHeight=l}catch(r){}}C(b,"flip")&&(C(b,T(a,"reverse"))?(f=12,h=13):(f=13,h=12));var m;a.j(b,"button-has-sibling-menu")?m=Rc(e):a.j(b,"button-menu-root-container")&&(m=Ce(a,b));B&&!xb("8")&&(m=null);if(m){var n=Xc(m);n=new Jc(-n.top,n.left,n.top,-n.left)}m=new G(0,1);C(b,T(a,"center-menu"))&&(m.g-=Math.round((Vc(c).width-Vc(b).width)/
2));d&&(m.h+=jc(document).h);if(a=Be(a,b))b=Vc(c),a.style.width=b.width+"px",a.style.height=b.height+"px",cd(e,f,a,h,m,n,197),d&&Lc(a,"position","fixed");cd(e,f,c,h,m,n,197)}
function Ce(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return K(b,c)}return document.body}
g.sa=function(a){if(a){var b=W(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=Ce(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Be(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.b[Ed(a).toString()]=b);we(this,a,b,c);ae("yt-uix-button-menu-before-show",a,b);ee(b);d&&ee(d);
this.K(a,"button-menu-action",!0);E(a,T(this,"active"));b=w(this.ra,this,a,!1);d=w(this.ra,this,a,!0);c=w(this.Ta,this,a,void 0);this.a&&W(this,this.a)==W(this,a)||se(this);O("yt-uix-button-menu-show",a);N(this.f);this.f=[M(document,"click",d),M(document,"contextmenu",b),M(window,"resize",c)];this.a=a}}};
function ye(a,b){if(b){var c=W(a,b);if(c){a.a=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");fe(c);a.K(b,"button-menu-action",!1);var d=Be(a,b),e=Ed(c).toString();delete a.b[e];Ud(function(){d&&d.parentNode&&(fe(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=K(b,T(a,"group")),f=[T(a,"active")];
e&&f.push(T(a,"group-active"));Lb(b,f);O("yt-uix-button-menu-hide",b);N(a.f);a.f.length=0}}
g.Ta=function(a,b){var c=W(this,a);if(c){b&&(b instanceof Wb?c.innerHTML=Yb(b):sc(c,b));var d=!!this.j(a,"button-menu-fixed");we(this,a,c,d)}};
function ve(a,b){return K(b.activeButtonNode||b.parentNode,T(a))}
g.ra=function(a,b,c){c=Rd(c);var d=K(c,T(this));if(d){var d=W(this,d),e=W(this,a);if(d==e)return}var d=K(c,T(this,"menu")),e=d==W(this,a),f=C(c,T(this,"menu-item")),h=C(c,T(this,"menu-close"));if(!d||e&&(f||h))ye(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=J(T(this,"content"),a))&&sc(a,Ac(c)),De(this,d,c))};
function De(a,b,c){var d=T(a,"menu-item-selected");z(dc(d,b),function(a){F(a,d)});
E(c.parentNode,d)}
function W(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id"),c=c&&H(c),d=T(a,"menu");c?Kb(c,[d,T(a,"menu-external")]):c=J(d,b);b.widgetMenu=c}return b.widgetMenu}
g.isToggled=function(a){return C(a,T(this,"toggled"))};
function te(a,b){if(a.j(b,"button-toggle")){var c=K(b,T(a,"group")),d=T(a,"toggled"),e=C(b,d);if(c&&a.j(c,"button-toggle-group")){var f=a.j(c,"button-toggle-group");z(dc(T(a),c),function(a){a!=b||"optional"==f&&e?(F(a,d),a.removeAttribute("aria-pressed")):(E(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Ob(b,d)}}
g.click=function(a){if(W(this,a)){var b=W(this,a);if(b){var c=ve(this,b);c&&c!=a?(ye(this,c),Ud(w(this.sa,this,a),1)):de(b)?ye(this,a):this.sa(a)}a.focus()}this.K(a,"button-action")};
function se(a){a.a&&ye(a,a.a)}
;function Ee(a){Q.call(this,a);this.f=null}
y(Ee,Q);g=Ee.prototype;g.v=function(a){var b=Q.prototype.v.call(this,a);return b?b:a};
g.register=function(){oe(this,"yt-uix-kbd-nav-move-out-done",this.C)};
g.dispose=function(){Ee.B.dispose.call(this);Fe(this)};
g.j=function(a,b){var c=Ee.B.j.call(this,a,b);return c?c:(c=Ee.B.j.call(this,a,"card-config"))&&(c=q(c))&&c[b]?c[b]:null};
g.show=function(a){var b=this.v(a);if(b){E(b,T(this,"active"));var c=Ge(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;He(this,a,c);var d=T(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.K(b,"card-action",a);this.f=a;fe(c);Ud(w(function(){e||(ee(c),O("yt-uix-card-show",b,a,c));Ie(c);E(c,d);O("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Ge(a,b,c){var d=c||b,e=T(a,"card");c=Je(a,d);var f=H(T(a,"card")+Ed(d));if(f)return a=J(T(a,"card-body"),f),rc(a,c)||(nc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=T(a,"card")+Ed(d);f.className=e;(d=a.j(d,"card-class"))&&Kb(f,d.split(/\s+/));d=document.createElement("div");d.className=T(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");
h.className=T(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;nc(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function He(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=J(T(a,"anchor"),b)||b,f=a.j(b,"position"),h=!!a.j(b,"force-position"),l=a.j(b,"position-fixed"),d="horizontal"==d,m="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&m){var r=13;var R=8}else n&&!m?(r=12,R=9):!n&&m?(r=9,R=12):(r=8,R=13);var S=Yc(document.body),f=Yc(b);S!=f&&(r^=4);if(d){f=b.offsetHeight/2-12;var I=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,I=new G(b.offsetWidth+6,-12);var D=Vc(c),f=Math.min(f,
(d?D.height:D.width)-24-6);6>f&&(f=6,d?I.h+=12-b.offsetHeight/2:I.g+=12-b.offsetWidth/2);D=null;h||(D=10);b=T(a,"card-flip");a=T(a,"card-reverse");Mb(c,b,n);Mb(c,a,m);D=cd(e,r,c,R,I,null,D);!h&&D&&(D&48&&(n=!n,r^=4,R^=4),D&192&&(m=!m,r^=1,R^=1),Mb(c,b,n),Mb(c,a,m),cd(e,r,c,R,I));l&&(e=parseInt(c.style.top,10),h=jc(document).h,Lc(c,"position","fixed"),Lc(c,"top",e-h+"px"));S&&(c.style.right="",e=Xc(c),e.left=e.left||parseInt(c.style.left,10),h=hc(window),c.style.left="",c.style.right=h.width-e.left-
e.width+"px");e=J("yt-uix-card-body-arrow",c);h=J("yt-uix-card-border-arrow",c);d=d?m?"top":"bottom":!S&&n||S&&!n?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";m=J("yt-uix-card-arrow",c);n=J("yt-uix-card-arrow-background",c);m&&n&&(c="right"==d?Vc(c).width-f-13:f+11,f=c/Math.sqrt(2),m.style.left=c+"px",m.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
g.C=function(a){if(a=this.v(a)){var b=H(T(this,"card")+Ed(a));b&&(F(a,T(this,"active")),F(b,T(this,"card-visible")),fe(b),this.f=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(nc(b.cardMask),b.cardMask=null))}};
function Fe(a){a.f&&a.C(a.f)}
g.Sa=function(a,b){var c=this.v(a);if(c){if(b){var d=Je(this,c);if(!d)return;b instanceof Wb?d.innerHTML=Yb(b):sc(d,b)}C(c,T(this,"active"))&&(c=Ge(this,a,c),He(this,a,c),ee(c),Ie(c))}};
g.isActive=function(a){return(a=this.v(a))?C(a,T(this,"active")):!1};
function Je(a,b){var c=b.cardContentNode;if(!c){var d=T(a,"content"),e=T(a,"card-content");(c=(c=a.j(b,"card-id"))?H(c):J(d,b))||(c=document.createElement("div"));var f=c;F(f,d);E(f,e);b.cardContentNode=c}return c}
function Ie(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Kb(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Ke(){Q.call(this,"kbd-nav")}
var Le;y(Ke,Q);fa(Ke);g=Ke.prototype;g.register=function(){U(this,"keydown",this.ba);oe(this,"yt-uix-kbd-nav-move-in",this.ma);oe(this,"yt-uix-kbd-nav-move-in-to",this.Na);oe(this,"yt-uix-kbd-move-next",this.na);oe(this,"yt-uix-kbd-nav-move-to",this.L)};
g.unregister=function(){V(this,"keydown",this.ba);N(Le)};
g.ba=function(a,b,c){var d=c.keyCode;if(a=K(a,T(this)))switch(d){case 13:case 32:this.ma(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Qb(a,"kbdNavMoveOut");!c;){c=K(a.parentElement,T(this));if(!c)break a;c=Qb(c,"kbdNavMoveOut")}c=H(c);this.L(c);O("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&C(a,T(this,"list")))switch(d){case 40:this.na(b,a);break;case 38:d=document.activeElement==a,a=Me(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Ne(this,a[b]))}c.preventDefault()}};
g.ma=function(a){var b=Qb(a,"kbdNavMoveIn"),b=H(b);Oe(this,a,b);this.L(b)};
g.Na=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}Oe(this,c,a);this.L(a)};
g.L=function(a){if(a)if(xc(a))a.focus();else{var b=tc(a,function(a){return qc(a)?xc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Oe(a,b,c){b&&c&&(E(c,T(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Pb&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+sa("kbdNavMoveOut"),b))}
g.na=function(a,b){var c=document.activeElement==b,d=Me(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Ne(this,d[c]))};
function Ne(a,b){if(b){var c=Cc(b,"LI");c&&(E(c,T(a,"highlight")),Le=M(b,"blur",w(function(a){F(a,T(this,"highlight"));N(Le)},a,c)))}}
function Me(a){if("UL"!=a.tagName.toUpperCase())return[];a=va(oc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return va(wa(a,function(a){return de(a)?tc(a,function(a){return qc(a)?xc(a):!1}):!1}),function(a){return!!a})}
;function Pe(){Q.call(this,"menu");this.b=this.a=null;this.f={};this.m={};this.i=null}
y(Pe,Q);fa(Pe);function Qe(a){return(a=Re(a))?Se(Pe.u(),a):null}
function Re(a){var b=Pe.u();if(C(a,T(b)))return a;var c=b.v(a);return c?c:K(a,T(b,"content"))==b.a?b.b:null}
g=Pe.prototype;g.register=function(){U(this,"click",this.Z);U(this,"mouseenter",this.Da);oe(this,"page-scroll",this.Ga);oe(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.v(a);Te(this,a)});
this.i=new L};
g.unregister=function(){V(this,"click",this.Z);this.b=this.a=null;N(Ja(Qa(this.f)));this.f={};Oa(this.m,function(a){nc(a)},this);
this.m={};Gb(this.i);this.i=null;Pe.B.unregister.call(this)};
g.Z=function(a,b,c){a&&(b=Ue(this,a),!b.disabled&&Fd(c.target,b)&&Ve(this,a))};
g.Da=function(a,b,c){a&&C(a,T(this,"hover"))&&Fd(c.target,Ue(this,a))&&Ve(this,a,!0)};
g.Ga=function(){this.a&&this.b&&We(this,this.b,this.a)};
function We(a,b,c){var d=Xe(a,b);if(d){var e=Vc(c);if(e instanceof $b){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Uc(e,!0);d.style.height=Uc(f,!0)}c==a.a&&(e=9,f=8,C(b,T(a,"reversed"))&&(e^=1,f^=1),C(b,T(a,"flipped"))&&(e^=4,f^=4),a=new G(0,1),d&&cd(b,e,d,f,a,null,197),cd(b,e,c,f,a,null,197))}
function Ve(a,b,c){Ye(a,b)&&!c?Te(a,b):(Ze(a,b),!a.a||Fd(b,a.a)?a.ta(b):ed(a.i,w(a.ta,a,b)))}
g.ta=function(a){if(a){var b=Se(this,a);if(b){ae("yt-uix-menu-before-show",a,b);this.a?Fd(a,this.a)||Te(this,this.b):(this.b=a,this.a=b,C(a,T(this,"sibling-content"))||(nc(b),document.body.appendChild(b)),b.style.minWidth=Ue(this,a).offsetWidth-2+"px");var c=Xe(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);F(b,T(this,"content-hidden"));We(this,a,b);Kb(Ue(this,a),[T(this,"trigger-selected"),"yt-uix-button-toggled"]);O("yt-uix-menu-show",a);$e(b);af(this,a);O("yt-uix-kbd-nav-move-in-to",
b);var d=w(this.Wa,this,a),e=w(this.Ja,this,a),c=v(a).toString();this.f[c]=[M(b,"click",e),M(document,"click",d)];C(a,T(this,"indicate-selected"))&&(d=w(this.Ka,this,a),this.f[c].push(M(b,"click",d)));C(a,T(this,"hover"))&&(a=w(this.Ea,this,a),this.f[c].push(M(document,"mousemove",a)))}}};
g.Ea=function(a,b){var c=Rd(b);c&&(Fd(c,Ue(this,a))||bf(this,c)||cf(this,a))};
g.Wa=function(a,b){var c;if(c=Rd(b)){if(bf(this,c)){var d=K(c,T(this,"content"));var e=Cc(c,"LI");e&&d&&rc(d,e)&&ae("yt-uix-menu-item-clicked",c);c=K(c,T(this,"close-on-select"));if(!c)return;d=Re(c)}Te(this,d||a)}};
function Ze(a,b){if(b){var c=K(b,T(a,"content"));c&&z(dc(T(a),c),function(a){!Fd(a,b)&&Ye(this,a)&&cf(this,a)},a)}}
function Te(a,b){if(b){var c=[];c.push(b);var d=Se(a,b);d&&(d=dc(T(a),d),d=Ba(d),c=c.concat(d),z(c,function(a){Ye(this,a)&&cf(this,a)},a))}}
function cf(a,b){if(b){var c=Se(a,b);Lb(Ue(a,b),[T(a,"trigger-selected"),"yt-uix-button-toggled"]);E(c,T(a,"content-hidden"));var d=Se(a,b);d&&fc(d,{"aria-expanded":"false"});(d=Xe(a,b))&&d.parentNode&&nc(d);c&&c==a.a&&(a.b.appendChild(c),a.a=null,a.b=null,a.i&&a.i.D("ROOT_MENU_REMOVED"));O("yt-uix-menu-hide",b);c=v(b).toString();N(a.f[c]);delete a.f[c]}}
g.Ja=function(a,b){var c=Rd(b);c&&df(this,a,c)};
g.Ka=function(a,b){var c=Rd(b);if(c){var d=Ue(this,a);if(d&&(c=Cc(c,"LI")))if(c=Ac(c).trim(),d.hasChildNodes()){var e=re.u();(d=J(T(e,"content"),d))&&sc(d,c)}else sc(d,c)}};
function af(a,b){var c=Se(a,b);if(c){z(c.children,function(a){"LI"==a.tagName&&fc(a,{role:"menuitem"})});
fc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+v(c),c.id=d);(c=Ue(a,b))&&fc(c,{"aria-controls":d})}}
function df(a,b,c){var d=Se(a,b);d&&C(b,T(a,"checked"))&&(a=Cc(c,"LI"))&&(a=J("yt-ui-menu-item-checked-hid",a))&&(z(dc("yt-ui-menu-item-checked",d),function(a){Nb(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Nb(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Ye(a,b){var c=Se(a,b);return c?!C(c,T(a,"content-hidden")):!1}
function $e(a){z(ec("UL",null,a),function(a){a.tabIndex=0;var b=Ke.u();Kb(a,[T(b),T(b,"list")])})}
function Se(a,b){var c=xd(b,"menu-content-id");return c&&(c=H(c))?(Kb(c,[T(a,"content"),T(a,"content-external")]),c):b==a.b?a.a:J(T(a,"content"),b)}
function Xe(a,b){var c=v(b).toString(),d=a.m[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[T(a,"mask")];z(Jb(b),function(a){e.push(a+"-mask")});
Kb(d,e);a.m[c]=d}return d||null}
function Ue(a,b){return J(T(a,"trigger"),b)}
function bf(a,b){return Fd(b,a.a)||Fd(b,a.b)}
;function ef(){Ee.call(this,"clickcard");this.a={};this.b={}}
y(ef,Ee);fa(ef);g=ef.prototype;g.register=function(){ef.B.register.call(this);U(this,"click",this.X,"target");U(this,"click",this.W,"close")};
g.unregister=function(){ef.B.unregister.call(this);V(this,"click",this.X,"target");V(this,"click",this.W,"close");for(var a in this.a)N(this.a[a]);this.a={};for(a in this.b)N(this.b[a]);this.b={}};
g.X=function(a,b,c){c.preventDefault();b=Cc(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a=u(b)?a.getElementById(b):b;b=this.v(a);this.j(b,"disabled")||(C(b,T(this,"active"))?(this.C(a),F(b,T(this,"active"))):(this.show(a),E(b,T(this,"active"))))}};
g.show=function(a){ef.B.show.call(this,a);var b=this.v(a),c=v(a).toString();if(!xd(b,"click-outside-persists")){if(this.a[c])return;var b=M(document,"click",w(this.Y,this,a)),d=M(window,"blur",w(this.Y,this,a));this.a[c]=[b,d]}a=M(window,"resize",w(this.Sa,this,a,void 0));this.b[c]=a};
g.C=function(a){ef.B.C.call(this,a);a=v(a).toString();var b=this.a[a];b&&(N(b),this.a[a]=null);if(b=this.b[a])N(b),delete this.b[a]};
g.Y=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=K(b.target,c)||K(Re(b.target),c));(d=d||K(document.activeElement,c)||K(Re(document.activeElement),c))||this.C(a)};
g.W=function(a){(a=K(a,T(this,"card")))&&(a=a.cardTargetNode)&&this.C(a)};function ff(){Ee.call(this,"hovercard")}
y(ff,Ee);fa(ff);g=ff.prototype;g.register=function(){U(this,"mouseenter",this.ia,"target");U(this,"mouseleave",this.ka,"target");U(this,"mouseenter",this.ja,"card");U(this,"mouseleave",this.la,"card")};
g.unregister=function(){V(this,"mouseenter",this.ia,"target");V(this,"mouseleave",this.ka,"target");V(this,"mouseenter",this.ja,"card");V(this,"mouseleave",this.la,"card")};
g.ia=function(a){if(gf!=a){gf&&(this.C(gf),gf=null);var b=w(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10),b=Ud(b,-1<c?c:200);Ad(a,"card-timer",b.toString());gf=a;a.alt&&(Ad(a,"card-alt",a.alt),a.alt="");a.title&&(Ad(a,"card-title",a.title),a.title="")}};
g.ka=function(a){var b=parseInt(this.j(a,"card-timer"),10);window.clearTimeout(b);this.v(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;Ud(w(this.Ha,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
g.Ha=function(a){this.v(a).isCardHidable&&(this.C(a),gf=null)};
g.ja=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.la=function(a){a&&this.C(a.cardTargetNode)};
var gf=null;function hf(a,b,c,d,e,f){this.a=a;this.s=null;this.f=J("yt-dialog-fg",this.a)||this.a;if(a=J("yt-dialog-title",this.f)){var h="yt-dialog-title-"+v(this.f);a.setAttribute("id",h);this.f.setAttribute("aria-labelledby",h)}this.f.setAttribute("tabindex","-1");this.oa=J("yt-dialog-focus-trap",this.a);this.qa=!1;this.i=new L;this.w=[];this.w.push(Sd(this.a,w(this.Pa,this)));this.w.push(M(this.oa,"focus",w(this.xa,this),!0));jf(this);this.Ua=b;this.ua=c;this.Va=d;this.H=e;this.va=f;this.m=this.l=null}
var kf={LOADING:"loading",Xa:"content",Ya:"working"};function lf(a,b){a.M()||a.i.subscribe("pre-all",b)}
function jf(a){a=J("yt-dialog-fg-content",a.a);var b=[];Oa(kf,function(a){b.push("yt-dialog-show-"+a)});
Lb(a,b);E(a,"yt-dialog-show-content")}
g=hf.prototype;
g.show=function(){if(!this.M()){this.s=document.activeElement;if(!this.Va){this.b||(this.b=H("yt-dialog-bg"),this.b||(this.b=document.createElement("div"),this.b.id="yt-dialog-bg",this.b.className="yt-dialog-bg",document.body.appendChild(this.b)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=hc(a).height,ic(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.b.style.height=c+"px";ee(this.b)}this.fa();c=mf(this);nf(c);this.l=M(document,"keydown",w(this.Ia,this));c=this.a;d=Zd("player-added",this.fa,this);Ad(c,"player-ready-pubsub-key",d);this.ua&&(this.m=M(document,"click",w(this.Ra,this)));ee(this.a);this.f.setAttribute("tabindex","0");of(this);this.H||E(document.body,"yt-dialog-active");se(re.u());Fe(ef.u());Fe(ff.u());O("yt-ui-dialog-show-complete",this)}};
function pf(){return xa(dc("yt-dialog"),function(a){return de(a)})}
g.fa=function(){if(!this.va){var a=this.a;Mb(document.body,"hide-players",!0);a&&Mb(a,"preserve-players",!0)}};
function mf(a){var b=ec("iframe",null,a.a);z(b,function(a){var b=xd(a,"onload");b&&(b=q(b))&&M(a,"load",b);if(b=xd(a,"src"))a.src=b},a);
return Ba(b)}
function nf(a){z(document.getElementsByTagName("iframe"),function(b){-1==ua(a,b)&&E(b,"iframe-hid")})}
function qf(){z(dc("iframe-hid"),function(a){F(a,"iframe-hid")})}
g.Pa=function(a){a=a.currentTarget;a.disabled||(a=xd(a,"action")||"",this.dismiss(a))};
g.dismiss=function(a){if(!this.M()){this.i.D("pre-all");this.i.D("pre-"+a);fe(this.a);Fe(ef.u());Fe(ff.u());this.f.setAttribute("tabindex","-1");pf()||(fe(this.b),this.H||F(document.body,"yt-dialog-active"),Gd(),qf());this.l&&(N(this.l),this.l=null);this.m&&(N(this.m),this.m=null);var b=this.a;if(b){var c=xd(b,"player-ready-pubsub-key");c&&(be(c),b&&(b.dataset?delete b.dataset[yd("player-ready-pubsub-key")]:b.removeAttribute("data-player-ready-pubsub-key")))}this.i.D("post-all");O("yt-ui-dialog-hide-complete",
this);"cancel"==a&&O("yt-ui-dialog-cancelled",this);this.i&&this.i.D("post-"+a);this.s&&this.s.focus()}};
g.setTitle=function(a){sc(J("yt-dialog-title",this.a),a)};
g.Ia=function(a){Ud(w(function(){this.Ua||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&C(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.Ra=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.M=function(){return this.qa};
g.dispose=function(){de(this.a)&&this.dismiss("dispose");N(this.w);this.w.length=0;Ud(w(function(){this.s=null},this),0);
this.oa=this.f=null;this.i.dispose();this.i=null;this.qa=!0};
g.xa=function(a){a.stopPropagation();of(this)};
function of(a){Ud(w(function(){this.f&&this.f.focus()},a),0)}
x("yt.ui.Dialog",hf);function rf(a,b,c,d,e,f){this.b=a;this.f=b;this.m=c;this.i=d;this.s=e;this.l=f;this.a=null}
rf.$inject="$compile $controller $http $q $rootScope $templateCache".split(" ");function sf(a,b,c){this.l=a;this.b=b;this.i=c;this.a=null;this.f=!1}
sf.prototype.show=function(){ec("body",void 0,void 0)[0].appendChild(this.b);this.a=new hf(this.b,!1);lf(this.a,w(function(){this.f||(this.a=null,this.dismiss("dialogclosed"))},this));
this.a.show()};
function tf(a){a.f||(a.f=!0,a.a&&(a.a.dispose(),a.a=null),a.i&&(a.i.$destroy(),a.i=null),a.b&&(nc(a.b),a.b=null))}
sf.prototype.close=function(a){tf(this);this.l.resolve(a)};
sf.prototype.dismiss=function(a){tf(this);this.l.reject(a)};
function uf(a,b){return a.m.get(b,{cache:a.l}).then(function(a){return a.data})}
rf.prototype.create=function(a,b,c){var d=this.i.defer(),e={result:d.promise,close:w(d.resolve,d),dismiss:w(d.reject,d)};uf(this,a).then(w(function(a){this.a&&(this.a.dismiss("overridden"),this.a=null);var f=this.s.$new();c&&Va(f,c);this.f(b,{$scope:f,dialogInstance:e});a=angular.element(a);a=this.b(a)(f)[0];f=new sf(d,a,f);e.close=w(f.close,f);e.dismiss=w(f.dismiss,f);f.show();this.a=f},this),function(a){d.reject(a)});
return e};function vf(a){Fb.call(this);a=w(a.$apply,a,w(a.$destroy,a));this.i?da(void 0)?a.call(void 0):a():(this.f||(this.f=[]),this.f.push(da(void 0)?w(a,void 0):a))}
y(vf,Fb);vf.$inject=["$rootScope"];function wf(){return{request:function(a){a.data=a.data||{};a.params&&Va(a.data,a.params);var b=Jd("XSRF_FIELD_NAME");a.data[b]||(a.data[b]=Jd("XSRF_TOKEN"));return a}}}
;function xf(a){if(window.angular)return a()}
function yf(a){a.interceptors.push(wf)}
yf.$inject=["$httpProvider"];xf(function(){return angular.module("util",[]).config(yf).service("DisposeService",vf)});function zf(){Q.call(this,"languagepicker");this.a={}}
y(zf,Q);fa(zf);g=zf.prototype;g.register=function(){U(this,"click",this.ca,"menu-item");U(this,"keyup",this.pa,"search-input");U(this,"keydown",this.ea,"search-input");U(this,"blur",this.da,"search-input");U(this,"focus",this.aa);oe(this,"yt-uix-button-menu-before-show",this.Ca);oe(this,"yt-uix-button-menu-hide",this.Ba)};
g.unregister=function(){V(this,"click",this.ca,"menu-item");V(this,"keyup",this.pa,"search-input");V(this,"keydown",this.ea,"search-input");V(this,"blur",this.da,"search-input");V(this,"focus",this.aa);N(Qa(this.a));this.a={};zf.B.unregister.call(this)};
g.Ca=function(a){if(C(a,"yt-languagepicker-button")){var b=v(a);a=M(a,"keydown",w(this.Aa,this));this.a[b]=a}};
g.Ba=function(a){C(a,"yt-languagepicker-button")&&(a=v(a),N(this.a[a]),delete this.a[a])};
function Af(a,b){return ya(b,function(b){return!ya(a,function(a){return 0!=a.lastIndexOf(b,0)})})}
function Bf(a,b,c){z(a,function(a){var d=Qb(a,"value"),f=Cf(a);ce(a,d!=c&&f&&Af(f,b))})}
function Cf(a){if("undefined"===typeof a.a){var b=Qb(a,"searchTerms");b?(a.a=[],z(b.split(";"),function(b){Ca(a.a,Df(b))})):a.a=Df(Ac(a))}return a.a}
function Df(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function Ef(a,b){var c=re.u(),d=ve(c,a);xe(c,a);ze(c,d,b)}
g.pa=function(a){var b=this.v(a),c=J(T(this,"search-result"),b),d=Df(a.value);if(d){var e=oc(c);a=Qb(b,"fallbackOption");Bf(e,d,a);d=za(e,de);a=c.querySelector('li[data-value="'+a+'"]');ce(c,!(!d&&!a));d?Ef(b,d):a&&(ee(a),Ef(b,a))}else ce(c,!1)};
g.ea=function(a,b,c){b=re.u();a=this.v(a);var d=ve(b,a);switch(c.keyCode){case 13:case 9:(b=xe(b,a))&&Td(da(b.firstElementChild)?b.firstElementChild:pc(b.firstChild),"click");c.preventDefault();break;case 27:xe(b,a);ye(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
g.ca=function(a){var b=Qb(a,"value"),c=this.v(a),d=Qb(c,"languagepickerInputId"),d=H(d);d.value=b;Td(d,"change");(d=J(T(this,"suggestions"),c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=J(T(this,"selected"),c))&&nc(b),a=a.cloneNode(!0),E(a,T(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function Ff(a,b){var c=re.u(),d=a.v(b);ve(c,d).focus()}
g.da=function(a){Ff(this,a)};
g.aa=function(a,b,c){"INPUT"!=c.target.tagName&&Ff(this,a)};
g.Aa=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=re.u(),b=W(c,b),b=J(T(this,"search-input"),b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var Gf=zf.u(),Hf=re.u();function If(){return{require:"ngModel",link:function(a,b,c,d){d.$render=function(){d.$viewValue&&a.$evalAsync(na(Jf,a,b,d.$viewValue))};
a.select=function(a){d.$setViewValue(a.code)};
a.menuId=v(b[0])},
scope:{suggestedValues:"=",allowedValues:"="},templateUrl:"language_picker.html"}}
function Jf(a,b,c){a=J(T(Hf,"content"),b[0]);var d=J(T(Hf,"menu-item"),J(T(Gf,"menu-item-"+c),b[0]));J(T(Gf,"hidden-input"),b[0]).value=c;d=Ac(d);sc(a,d);a=J(T(Gf,"suggestions"),b[0]);b=T(Hf,"menu-item-selected");(d=J(b,a))&&F(d,b);(c=J(T(Gf,"menu-item-"+c),a))&&E(c,b)}
var Kf=xf(function(){var a=angular.module("yt.www.creator.angular.directives.languagePicker",[]);a.directive("languagePicker",If);return a});function Lf(a,b){this.a=b;this.translationLanguage=a.translationLanguage;this.originalLanguage=a.originalLanguage;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
x("yt.www.translationeditor.angular.AddTranslationDialogCtrl",Lf);Lf.$inject=["$scope","dialogInstance"];Lf.prototype.cancel=function(){this.a.dismiss("cancel")};
Lf.prototype.b=function(){this.a.close({translationLanguage:this.translationLanguage})};
Lf.prototype.cancel=Lf.prototype.cancel;Lf.prototype.save=Lf.prototype.b;function X(a,b){this.a=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.translationLanguage=null;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
x("yt.www.translationeditor.angular.SetOriginalLanguageAndAddTranslationDialogCtrl",X);X.$inject=["$scope","dialogInstance"];X.prototype.b=function(){return null!=this.originalLanguage&&null!=this.translationLanguage&&this.originalLanguage!=this.translationLanguage};
X.prototype.cancel=function(){this.a.dismiss("cancel")};
X.prototype.f=function(){this.a.close({originalLanguage:this.originalLanguage,translationLanguage:this.translationLanguage,defaultForNewUploads:this.defaultForNewUploads})};
X.prototype.canSave=X.prototype.b;X.prototype.cancel=X.prototype.cancel;X.prototype.save=X.prototype.f;function Mf(a,b){this.a=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];this.b=a.existingTranslationLanguages||{};a.dialogCtrl=this}
x("yt.www.translationeditor.angular.SetOriginalLanguageDialogCtrl",Mf);Mf.$inject=["$scope","dialogInstance"];Mf.prototype.f=function(){return this.originalLanguage in this.b};
Mf.prototype.cancel=function(){this.a.dismiss("cancel")};
Mf.prototype.i=function(){this.a.close({originalLanguage:this.originalLanguage,defaultForNewUploads:this.defaultForNewUploads})};
Mf.prototype.languageCollidesWithTranslation=Mf.prototype.f;Mf.prototype.cancel=Mf.prototype.cancel;Mf.prototype.save=Mf.prototype.i;function Nf(a){this.a=a}
Nf.$inject=["$http"];function Of(a,b){var c={action_set_metadata_language:"1",ch:Jd("userExternalId"),metadata_language:b};c.o=Jd("CREATOR_CONTEXT","U");a.a.post("/upload_defaults_ajax",c)}
;function Y(a,b,c,d,e){this.w=b;this.f=c;this.l=d;this.s=e;this.original=this.creatorTranslationSource=null;this.translations={};this.language=null;this.translatedLanguageList=[];this.errors=null;this.b=[];this.a=[];this.N={};this.m=new td;if(d.a)throw Error("You can only have one TranslationEditorCtrl per app!");d.a=this;b.$on("$destroy",function(){d.a=null});
b.$watch("transEditor.translations",w(function(a,b){if(null!=this.language){var c=this.language;this.m.a.set(ud(c),c)}!b||angular.equals(b,{})||angular.equals(a,b)||(Pf(this),Qf(this.l))},this),!0);
b.$watch("transEditor.original.language",w(function(a,b){b&&!angular.equals(a,b)&&Qf(this.l)},this),!0)}
x("yt.www.translationeditor.angular.TranslationEditorCtrl",Y);Y.$inject=["$controller","$scope","DialogService","TranslationEditorService","UploadDefaultsAjaxService"];g=Y.prototype;g.za=function(){return this.original&&this.original.language?this.i(this.original.language):""};
g.Qa=function(){var a={},b;for(b in this.translations)a[b]=!0;this.f.create("set_original_language_dialog.html","SetOriginalLanguageDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.w.showDefaultLanguageForNewUploadsCheckbox,originalLanguage:this.original.language,languagePickerSuggestions:this.b,languagePickerAllowedValues:this.a,existingTranslationLanguages:a}).result.then(w(function(a){a.originalLanguage in this.translations&&(delete this.translations[a.originalLanguage],this.language==
a.originalLanguage&&(this.language=null));this.original.language=a.originalLanguage;O("translation-editor-original-language-selected",a.originalLanguage);a.defaultForNewUploads&&Of(this.s,a.originalLanguage)},this))};
g.Oa=function(){if(this.original.language){var a=this.f.create("add_translation_dialog.html","AddTranslationDialogCtrl",{originalLanguage:this.original.language,languagePickerSuggestions:this.b,languagePickerAllowedValues:this.a});a.result.then(w(function(a){Rf(this,a.translationLanguage)},this))}else a=this.f.create("set_original_and_add_translation_dialog.html","SetOriginalLanguageAndAddTranslationDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.w.showDefaultLanguageForNewUploadsCheckbox,
originalLanguage:this.original.language,languagePickerSuggestions:this.b,languagePickerAllowedValues:this.a}),a.result.then(w(function(a){this.original.language=a.originalLanguage;O("translation-editor-original-language-selected",a.originalLanguage);Rf(this,a.translationLanguage);a.defaultForNewUploads&&Of(this.s,a.originalLanguage)},this))};
function Rf(a,b){b in a.translations||(a.translations[b]={language:"",title:null,description:null},null!=a.creatorTranslationSource&&(a.translations[b].source=a.creatorTranslationSource),Pf(a),Qf(a.l));a.language=b}
g.wa=function(){this.language&&(delete this.translations[this.language],O("translation-editor-translated-language-deleted",this.language),this.language=null)};
g.ya=function(){if(null==this.errors||angular.equals(this.errors,{}))return"";var a=wa(Ra(this.errors),w(this.i,this));Fa(a);return a.join(", ")};
Y.prototype.getLanguagesWithErrorsAsString=Y.prototype.ya;function Pf(a){a.translatedLanguageList=[];for(var b in a.translations)a.translatedLanguageList.push({code:b,name:a.i(b)});Ia(a.translatedLanguageList)}
Y.prototype.i=function(a){return a&&a in this.N?this.N[a]:""};
function Sf(a,b){b.creator_translation_source&&(a.creatorTranslationSource=b.creator_translation_source);b.original?a.original=b.original:a.original={language:"",title:null,description:null};a.translations={};angular.forEach(b.translation,function(a){this.translations[a.language]=a},a);
a.a=b.allowed_language;a.b=b.suggested_language;a.N={};angular.forEach(b.allowed_language,function(a){this.N[a.code]=a.name},a);
Pf(a)}
Y.prototype.H=function(){return this.language&&this.translations&&this.creatorTranslationSource&&this.translations[this.language].source!=this.creatorTranslationSource&&this.m.contains(this.language)?!0:!1};
Y.prototype.getOriginalLanguageName=Y.prototype.za;Y.prototype.onClickOriginalLanguage=Y.prototype.Qa;Y.prototype.onClickAddTranslation=Y.prototype.Oa;Y.prototype.deleteTranslation=Y.prototype.wa;Y.prototype.getSourceWarningVisibility=Y.prototype.H;function Tf(){return{controller:Y,templateUrl:"translation_editor.html",controllerAs:"transEditor",require:"?ngModel",transclude:!0,scope:{initFromBase64Json:"@",initFromYtConfig:"@",showDefaultLanguageForNewUploadsCheckbox:"@"},link:function(a,b,c,d,e){var f=a.transEditor;a.$watch("transEditor.language",function(){O("translation-editor-translated-language-selected",f.language)});
a.initFromYtConfig?(c=a.initFromYtConfig,c=Jd(c),Sf(f,c)):a.initFromBase64Json&&(c=a.initFromBase64Json,c=angular.fromJson(ib(Cb(c))),Sf(f,c));d&&a.$watch("[transEditor.original.language, transEditor.translations]",function(){var a=angular.copy({metadata_language:f.original.language,translations:f.translations});angular.forEach(a.translations,function(a){delete a.source});
d.$setViewValue(a)},!0);
e(a,function(a){b.append(a)})}}}
;function Z(a,b){this.s=a;this.m=b;this.b=this.a=null}
Z.$inject=["$rootScope","$timeout"];Z.prototype.w=function(){return this.a?{original:this.a.original,translations:this.a.translations}:null};
Z.prototype.f=function(){return this.a?this.a.language:null};
Z.prototype.i=function(a){this.a&&this.s.$apply(w(function(){this.a.errors=a},this))};
Z.prototype.l=function(a){this.b=a};
function Qf(a){a.b&&a.m(w(a.b,a),0,!1)}
;function Uf(a){return{templateUrl:"translation_menu.html",scope:{defaultText:"@",languageList:"=",errors:"=",onAddTranslation:"&"},require:"ngModel",link:function(b,c,d,e){function f(){l();a(h)}
function h(){var a=n.querySelector('li[data-value="'+e.$viewValue+'"]');m&&a&&df(Pe.u(),m,a)}
function l(){e.$viewValue?(b.selectedText="Invalid value: "+e.$viewValue,b.languageList&&angular.forEach(b.languageList,function(a){a.code==e.$viewValue&&(b.selectedText=a.name)})):b.selectedText=d.defaultText}
var m=Re(J("translation-editor-translation-menu-button",c[0])),n=Qe(m);b.$watch("languageList",f);e.$render=f;var r=[];r.push(Zd("yt-uix-menu-item-clicked",function(a){if((a=Cc(a,"LI"))&&rc(n,a)&&Rb(a)){var c=Qb(a,"value");b.$apply(function(){e.$setViewValue(c);l()})}},this));
c.on("$destroy",function(){be(r)})}}}
Uf.$inject=["$timeout"];var Vf=xf(function(){var a=angular.module("yt.www.translationeditor.angular.translationeditor",[Kf.name]);a.directive("translationEditor",Tf);a.directive("translationMenu",Uf);a.controller("TranslationEditorCtrl",Y);a.controller("SetOriginalLanguageDialogCtrl",Mf);a.controller("AddTranslationDialogCtrl",Lf);a.controller("SetOriginalLanguageAndAddTranslationDialogCtrl",X);a.service("TranslationEditorService",Z);a.service("UploadDefaultsAjaxService",Nf);a.service("DialogService",rf);return a});x("yt.www.translationeditor.angular.bootstrap",function(a){var b=[Vf.name],c=angular.element(a).injector();c||(c=angular.bootstrap(a,b));return c.get("TranslationEditorService")});
x("yt.www.translationeditor.angular.TranslationEditorService",Z);Z.prototype.getSelectedLanguage=Z.prototype.f;Z.prototype.setOnChangeCallback=Z.prototype.l;Z.prototype.setErrors=Z.prototype.i;Z.prototype.getData=Z.prototype.w;}).call(this);