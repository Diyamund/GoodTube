(function(){var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
ca("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),h=0;h<f&&g<e;)if(b[g++]!=a[h++])return!1;return h>=f}});
ca("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
ca("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=Object.create(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var n=this;function da(a){return void 0!==a}
function r(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function ea(){}
function fa(a){a.Ma=void 0;a.C=function(){return a.Ma?a.Ma:a.Ma=new a}}
function ga(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ha(a){return"array"==ga(a)}
function ia(a){var b=ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function t(a){return"string"==typeof a}
function ja(a){return"function"==ga(a)}
function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function la(a){return a[ma]||(a[ma]=++na)}
var ma="closure_uid_"+(1E9*Math.random()>>>0),na=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}
function qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=pa:u=qa;return u.apply(null,arguments)}
function ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var sa=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&da(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function y(a,b){function c(){}
c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.od=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function ta(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function ua(a){var b=0,c;for(c in a)b++;return b}
function va(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function wa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function xa(a){var b=ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function za(a){for(var b in a)return!1;return!0}
function Aa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ba(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Ea(a){var b=arguments.length;if(1==b&&ha(arguments[0]))return Ea.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function Fa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Fa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(Fa,Error);Fa.prototype.name="CustomError";var Ga;function Ha(a,b){return 0==a.lastIndexOf(b,0)}
function Ia(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}
var Ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Ka(a){if(!La.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ma,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Na,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Oa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Pa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Qa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ra,"&#0;"));return a}
var Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=/\x00/g,La=/[\x00&<>"']/;function Sa(a){return-1!=a.indexOf("&")?"document"in n?Ta(a):Ua(a):a}
function Ta(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=n.document.createElement("div");return a.replace(Va,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(d=String.fromCharCode(g))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function Ua(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var Va=/&([^;\s<&]+);?/g;function Wa(a,b){for(var c=0,d=Ja(String(a)).split("."),e=Ja(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;c=Xa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||Xa(0==h[2].length,0==l[2].length)||Xa(h[2],l[2]);h=h[3];l=l[3]}while(0==c)}return c}
function Xa(a,b){return a<b?-1:a>b?1:0}
function Ya(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Za(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function $a(a){var b=t(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var ab=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},bb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=t(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},cb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},db=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function eb(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function fb(a,b){return 0<=ab(a,b)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function ib(a,b,c,d){Array.prototype.splice.apply(a,jb(arguments,1))}
function jb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function kb(a,b){return a>b?1:a<b?-1:0}
function lb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(ha(d))for(var e=0;e<d.length;e+=8192)for(var f=lb.apply(null,jb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function mb(){this.b="";this.f=nb}
mb.prototype.qa=!0;mb.prototype.pa=function(){return this.b};
mb.prototype.toString=function(){return"Const{"+this.b+"}"};
var nb={};function ob(a){var b=new mb;b.b=a;return b}
ob("");function pb(){this.b="";this.f=qb}
pb.prototype.qa=!0;var qb={};pb.prototype.pa=function(){return this.b};
function rb(a){if(a instanceof pb&&a.constructor===pb&&a.f===qb)return a.b;ga(a);return"type_error:SafeStyle"}
function sb(a){var b=new pb;b.b=a;return b}
var tb=sb("");function ub(){this.b="";this.f=vb}
ub.prototype.qa=!0;ub.prototype.pa=function(){return this.b};
function wb(a){if(a instanceof ub&&a.constructor===ub&&a.f===vb)return a.b;ga(a);return"type_error:TrustedResourceUrl"}
var vb={};function xb(a){var b=new ub;b.b=a;return b}
;function yb(){this.b="";this.f=zb}
yb.prototype.qa=!0;yb.prototype.pa=function(){return this.b};
function Ab(a){if(a instanceof yb&&a.constructor===yb&&a.f===zb)return a.b;ga(a);return"type_error:SafeUrl"}
var Bb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Cb(a){if(a instanceof yb)return a;a=a.qa?a.pa():String(a);Bb.test(a)||(a="about:invalid#zClosurez");return Db(a)}
var zb={};function Db(a){var b=new yb;b.b=a;return b}
Db("about:blank");var Eb;a:{var Fb=n.navigator;if(Fb){var Gb=Fb.userAgent;if(Gb){Eb=Gb;break a}}Eb=""}function B(a){return-1!=Eb.indexOf(a)}
;function Hb(){return B("Safari")&&!(Ib()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function Ib(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function Jb(){this.b="";this.f=Kb}
Jb.prototype.qa=!0;Jb.prototype.pa=function(){return this.b};
function Lb(a){if(a instanceof Jb&&a.constructor===Jb&&a.f===Kb)return a.b;ga(a);return"type_error:SafeHtml"}
var Kb={};function Mb(a){var b=new Jb;b.b=a;return b}
Mb("<!DOCTYPE html>");Mb("");Mb("<br>");function Nb(a,b){var c=b instanceof yb?b:Cb(b);a.href=Ab(c)}
function Ob(a,b){a.src=wb(b)}
;function Pb(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function Qb(a){Qb[" "](a);return a}
Qb[" "]=ea;function Rb(a,b){var c=Sb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Tb=B("Opera"),C=B("Trident")||B("MSIE"),Ub=B("Edge"),Vb=Ub||C,Wb=B("Gecko")&&!(-1!=Eb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Xb=-1!=Eb.toLowerCase().indexOf("webkit")&&!B("Edge");function Yb(){var a=n.document;return a?a.documentMode:void 0}
var Zb;a:{var $b="",ac=function(){var a=Eb;if(Wb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ub)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xb)return/WebKit\/(\S+)/.exec(a);if(Tb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ac&&($b=ac?ac[1]:"");if(C){var bc=Yb();if(null!=bc&&bc>parseFloat($b)){Zb=String(bc);break a}}Zb=$b}var cc=Zb,Sb={};function dc(a){return Rb(a,function(){return 0<=Wa(cc,a)})}
var ec;var fc=n.document;ec=fc&&C?Yb()||("CSS1Compat"==fc.compatMode?parseInt(cc,10):5):void 0;function gc(a,b,c){this.i=c;this.g=a;this.o=b;this.f=0;this.b=null}
gc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function hc(a,b){a.o(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;var ic=function(a){return function(){return a}}(null);function jc(a){n.setTimeout(function(){throw a;},0)}
var kc;
function lc(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(da(c.next)){c=c.next;var a=c.Xa;c.Xa=null;a()}};
return function(a){d.next={Xa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function mc(){this.f=this.b=null}
var oc=new gc(function(){return new nc},function(a){a.reset()},100);
mc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function nc(){this.next=this.scope=this.b=null}
nc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
nc.prototype.reset=function(){this.next=this.scope=this.b=null};function pc(a,b){qc||rc();sc||(qc(),sc=!0);var c=tc,d=oc.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var qc;function rc(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);qc=function(){a.then(uc)}}else qc=function(){var a=uc;
!ja(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(kc||(kc=lc()),kc(a)):n.setImmediate(a)}}
var sc=!1,tc=new mc;function uc(){for(var a;a=tc.remove();){try{a.b.call(a.scope)}catch(b){jc(b)}hc(oc,a)}sc=!1}
;function wc(a,b){this.b=0;this.F=void 0;this.i=this.f=this.g=null;this.o=this.w=!1;if(a!=ea)try{var c=this;a.call(b,function(a){xc(c,2,a)},function(a){xc(c,3,a)})}catch(d){xc(this,3,d)}}
function yc(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
yc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var zc=new gc(function(){return new yc},function(a){a.reset()},100);
function Ac(a,b,c){var d=zc.get();d.g=a;d.f=b;d.context=c;return d}
function Bc(a){if(a instanceof wc)return a;var b=new wc(ea);xc(b,2,a);return b}
wc.prototype.then=function(a,b,c){return Cc(this,ja(a)?a:null,ja(b)?b:null,c)};
wc.prototype.then=wc.prototype.then;wc.prototype.$goog_Thenable=!0;wc.prototype.cancel=function(a){0==this.b&&pc(function(){var b=new Dc(a);Ec(this,b)},this)};
function Ec(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ec(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Fc(c),Gc(c,e,3,b)))}a.g=null}else xc(a,3,b)}
function Hc(a,b){a.f||2!=a.b&&3!=a.b||Ic(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Cc(a,b,c,d){var e=Ac(null,null,null);e.b=new wc(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!da(e)&&b instanceof Dc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Hc(a,e);return e.b}
wc.prototype.L=function(a){this.b=0;xc(this,2,a)};
wc.prototype.T=function(a){this.b=0;xc(this,3,a)};
function xc(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.L,f=a.T;if(d instanceof wc){Hc(d,Ac(e||ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ka(d))try{var l=d.then;if(ja(l)){Jc(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.F=c,a.b=b,a.g=null,Ic(a),3!=b||c instanceof Dc||Kc(a,c))}}
function Jc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ic(a){a.w||(a.w=!0,pc(a.N,a))}
function Fc(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
wc.prototype.N=function(){for(var a;a=Fc(this);)Gc(this,a,this.b,this.F);this.w=!1};
function Gc(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.o;a=a.g)a.o=!1;if(b.b)b.b.g=null,Lc(b,c,d);else try{b.i?b.g.call(b.context):Lc(b,c,d)}catch(e){Mc.call(null,e)}hc(zc,b)}
function Lc(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Kc(a,b){a.o=!0;pc(function(){a.o&&Mc.call(null,b)})}
var Mc=jc;function Dc(a){Fa.call(this,a)}
y(Dc,Fa);Dc.prototype.name="cancel";function Nc(a){this.b=a;a.then(u(function(){},this))}
function Oc(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=Pc(a,b).then(function(a){return a.apply(null,d)});
return new Nc(e)}
var Qc={};function Pc(a,b){var c=Qc[b];if(c)return c;c=(c=r(b))?Bc(c):(new wc(function(b,c){var d=document.createElement("script");d.async=!0;Ob(d,xb(a instanceof mb&&a.constructor===mb&&a.f===nb?a.b:"type_error:Const"));d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||b()};
d.onerror=c;(document.head||document.getElementsByTagName("head")[0]).appendChild(d)})).then(function(){var c=r(b);
if(!c)throw Error("Failed to load "+b+" from "+a);return c});
return Qc[b]=c}
function Rc(a,b,c){a.b.then(function(a){var d=a[b];if(!d)throw Error("Method not found: "+b);return d.apply(a,c)})}
;function Sc(a){this.b=a}
var Tc=ob("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");Sc.prototype.g=function(a){Rc(this.b,"startHelp",arguments)};
Sc.prototype.f=function(a){Rc(this.b,"loadChatSupport",arguments)};function Uc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Vc=window,Wc=document,Xc=Vc.location;function Yc(){}
var Zc=/\[native code\]/;function D(a,b,c){return a[b]=a[b]||c}
function $c(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function ad(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function bd(){var a;if((a=Object.create)&&Zc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var cd=D(Vc,"gapi",{});var E;E=D(Vc,"___jsl",bd());D(E,"I",0);D(E,"hel",10);function dd(){var a=Xc.href;if(E.dpo)var b=E.h;else{b=E.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ed(a){var b=D(E,"PQ",[]);E.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function fd(a){return D(D(E,"H",bd()),a,bd())}
;function gd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],l=e[4],m,p,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),p=1518500249):(m=d^f^h,p=1859775393):60>c?(m=d&f|h&(d|f),p=2400959708):(m=d^f^h,p=3395469782),m=((a<<5|a>>>27)&4294967295)+m+l+p+b[c]&4294967295,l=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[m++]=a[d++],p++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,p;a();return{reset:a,update:c,digest:d,Fb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function hd(a,b,c){var d=[],e=[];if(1==(ha(c)?2:1))return e=[b,a],z(d,function(a){e.push(a)}),id(e.join(" "));
var f=[],g=[];z(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(a){e.push(a)});
a=id(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function id(a){var b=gd();b.update(a);return b.Fb().toLowerCase()}
;function jd(a){this.b=a||{cookie:""}}
k=jd.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');da(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(sa()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ja(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=da(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ja(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function kd(){var a=[],b=Uc(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new jd(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new jd(document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(n.location.href);return d&&b&&c?[c,hd(Uc(d),b,a||null)].join(" "):null}return null}
;var ld=D(E,"perf",bd());D(ld,"g",bd());var md=D(ld,"i",bd());D(ld,"r",[]);bd();bd();function nd(a,b,c){b&&0<b.length&&(b=od(b),c&&0<c.length&&(b+="___"+od(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=D(md,"_p",bd()),D(b,c,bd())[a]=(new Date).getTime(),b=ld.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function od(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var pd=bd(),qd=[];function rd(a){throw Error("Bad hint"+(a?": "+a:""));}
qd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?E[b]=D(E,b,[]).concat(c):D(E,b,c)}if(b=a.u)a=D(E,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var sd=/^(\/[a-zA-Z0-9_\-]+)+$/,td=[/\/amp\//,/\/amp$/,/^\/amp$/],ud=/^[a-zA-Z0-9\-_\.,!]+$/,vd=/^gapi\.loaded_[0-9]+$/,wd=/^[a-zA-Z0-9,._-]+$/;function xd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=pd[f],h=null;g?h=g(e,b,c,d):rd("no hint processor for: "+f);h||rd("failed to generate load url");b=h;c=b.match(yd);(d=b.match(zd))&&1===d.length&&Ad.test(b)&&c&&1===c.length||rd("failed sanity: "+a);return h}
function Bd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Cd(a);vd.test(c)||rd("invalid_callback");b=Dd(b);d=d&&d.length?Dd(d):null;return[encodeURIComponent(a.Jc).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ta?"/am="+e(a.Ta):"",a.sb?"/rs="+e(a.sb):"",a.Ab?"/t="+e(a.Ab):"","/cb=",e(c)].join("")}
function Cd(a){"/"!==a.charAt(0)&&rd("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))rd("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");sd.test(b)||rd("invalid_prefix");c=0;for(d=td.length;c<d;++c)td[c].test(b)&&rd("invalid_prefix");c=Ed(a,
"k",!0);d=Ed(a,"am");e=Ed(a,"rs");a=Ed(a,"t");return{Jc:b,version:c,Ta:d,sb:e,Ab:a}}
function Dd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");wd.test(e)&&b.push(e)}return b.join(",")}
function Ed(a,b,c){a=a[b];!a&&c&&rd("missing: "+b);if(a){if(ud.test(a))return a;rd("invalid: "+b)}return null}
var Ad=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,zd=/\/cb=/g,yd=/\/\//g;function Fd(){var a=dd();if(!a)throw Error("Bad hint");return a}
pd.m=function(a,b,c,d){(a=a[0])||rd("missing_hint");return"https://apis.google.com"+Bd(a,b,c,d)};
var Gd=decodeURI("%73cript"),Hd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Id(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>$c.call(b,e)&&c.push(e)}return c}
function Jd(){var a=E.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Hd)?a:E.nonce=null;var b=D(E,"us",[]);if(!b||!b.length)return E.nonce=null;for(var c=Wc.getElementsByTagName(Gd),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Hd))return E.nonce=a}}return null}
function Kd(a){if("loading"!=Wc.readyState)Ld(a);else{var b=Jd(),c="";null!==b&&(c=' nonce="'+b+'"');Wc.write("<"+Gd+' src="'+encodeURI(a)+'"'+c+"></"+Gd+">")}}
function Ld(a){var b=Wc.createElement(Gd);b.setAttribute("src",a);a=Jd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Wc.getElementsByTagName(Gd)[0])?a.parentNode.insertBefore(b,a):(Wc.head||Wc.body||Wc.documentElement).appendChild(b)}
function Md(a,b){var c=b&&b._c;if(c)for(var d=0;d<qd.length;d++){var e=qd[d][0],f=qd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Nd(a,b,c){Od(function(){var c=b===dd()?D(cd,"_",bd()):bd();c=D(fd(b),"_",c);a(c)},c)}
function Pd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Md(a,c);var d=a?a.split(":"):[],e=c.h||Fd(),f=D(E,"ah",bd());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,m=g.length&&g[g.length-1]||null,p=m;m&&m.hint==l||(p={hint:l,features:[]},g.push(p));p.features.push(h)}var x=g.length;if(1<x){var A=c.callback;A&&(c.callback=function(){0==--x&&A()})}for(;d=g.shift();)Qd(d.features,c,d.hint)}else Qd(d||[],c,e)}
function Qd(a,b,c){function d(a,b){if(x)return 0;Vc.clearTimeout(p);A.push.apply(A,w);var d=((cd||{}).config||{}).update;d?d(f):f&&D(E,"cu",[]).push(f);if(b){nd("me0",a,I);try{Nd(b,c,m)}finally{nd("me1",a,I)}}return 1}
a=ad(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var p=null,x=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=D(fd(c),"r",[]).sort(),A=D(fd(c),"L",[]).sort(),I=[].concat(l);0<g&&(p=Vc.setTimeout(function(){x=!0;h()},g));
var w=Id(a,A);if(w.length){var w=Id(a,l),L=D(E,"CP",[]),q=L.length;L[q]=function(a){function b(){var a=L[q+1];a&&a()}
function c(b){L[q]=null;d(w,a)&&ed(function(){e&&e();b()})}
if(!a)return 0;nd("ml1",w,I);0<q&&L[q-1]?L[q]=function(){c(b)}:c(b)};
if(w.length){var oa="loaded_"+E.I++;cd[oa]=function(a){L[q](a);cd[oa]=null};
a=xd(c,w,"gapi."+oa,l);l.push.apply(l,w);nd("ml0",w,I);b.sync||Vc.___gapisync?Kd(a):Ld(a)}else L[q](Yc)}else d(w)&&e&&e()}
function Od(a,b){if(E.hee&&0<E.hel)try{return a()}catch(c){b&&b(c),E.hel--,Pd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
cd.load=function(a,b){return Od(function(){return Pd(a,b)})};var Rd=!C||9<=Number(ec),Sd=!Wb&&!C||C&&9<=Number(ec)||Wb&&dc("1.9.1"),Td=C&&!dc("9");function F(a,b){this.j=da(a)?a:0;this.l=da(b)?b:0}
F.prototype.equals=function(a){return a instanceof F&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function Ud(a,b){return new F(a.j-b.j,a.l-b.l)}
F.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
F.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
F.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};function Vd(a,b){this.width=a;this.height=b}
k=Vd.prototype;k.Cb=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.Cb()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Wd(a){return a?new Xd(Yd(a)):Ga||(Ga=new Xd)}
function G(a){return t(a)?document.getElementById(a):a}
function Zd(a){var b=document;return t(a)?b.getElementById(a):a}
function H(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):$d("*",a,b)}
function J(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=$d("*",a,b)[0];return d||null}
function ae(a){return J("ypc-tip-custom-amount-input-container",a)}
function $d(a,b,c){var d=document;c=c||d;var e=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(e||b))return c.querySelectorAll(e+(b?"."+b:""));if(b&&c.getElementsByClassName){d=c.getElementsByClassName(b);if(e){c={};for(var f=a=0,g;g=d[f];f++)e==g.nodeName&&(c[a++]=g);c.length=a;return c}return d}d=c.getElementsByTagName(e||"*");if(b){c={};for(f=a=0;g=d[f];f++)e=g.className,"function"==typeof e.split&&fb(e.split(/\s+/),b)&&(c[a++]=g);c.length=a;return c}return d}
function be(a,b){ta(b,function(b,d){b&&b.qa&&(b=b.pa());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:ce.hasOwnProperty(d)?a.setAttribute(ce[d],b):Ha(d,"aria-")||Ha(d,"data-")?a.setAttribute(d,b):a[d]=b})}
var ce={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function de(a){a=a.document;a=ee(a)?a.documentElement:a.body;return new Vd(a.clientWidth,a.clientHeight)}
function fe(a){var b=ge(a);a=he(a);return C&&dc("10")&&a.pageYOffset!=b.scrollTop?new F(b.scrollLeft,b.scrollTop):new F(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function ge(a){return a.scrollingElement?a.scrollingElement:!Xb&&ee(a)?a.documentElement:a.body||a.documentElement}
function he(a){return a.parentWindow||a.defaultView}
function ie(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Rd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ka(g.name),'"');if(g.type){f.push(' type="',Ka(g.type),'"');var h={};Da(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:ha(g)?f.className=g.join(" "):be(f,g));2<d.length&&je(e,f,d);return f}
function je(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];!ia(f)||ka(f)&&0<f.nodeType?d(f):z(ke(f)?gb(f):f,d)}}
function ee(a){return"CSS1Compat"==a.compatMode}
function me(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function ne(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function qe(a){return Sd&&void 0!=a.children?a.children:bb(a.childNodes,function(a){return 1==a.nodeType})}
function re(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function se(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function te(a){return ka(a)&&1==a.nodeType}
function ue(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Yd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ve(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else me(a),a.appendChild(Yd(a).createTextNode(String(b)))}
function we(a,b){var c=[];return xe(a,b,c,!0)?c[0]:void 0}
function xe(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||xe(a,b,c,d))return!0;a=a.nextSibling}return!1}
var ye={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ze={IMG:" ",BR:"\n"};function Ae(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Be(a)||Ce(a)):Be(a)&&Ce(a))&&C){var c;!ja(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Be(a){return C&&!dc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Ce(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function De(a){if(Td&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ee(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Td||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ee(a,b,c){if(!(a.nodeName in ye))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ze)b.push(ze[a.nodeName]);else for(a=a.firstChild;a;)Ee(a,b,c),a=a.nextSibling}
function ke(a){if(a&&"number"==typeof a.length){if(ka(a))return"function"==typeof a.item||"string"==typeof a.item;if(ja(a))return"function"==typeof a.item}return!1}
function Fe(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Ge(a,function(a){return(!e||a.nodeName==e)&&(!c||t(a.className)&&fb(a.className.split(/\s+/),c))},d)}
function K(a,b){return Fe(a,null,b,void 0)}
function Ge(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Xd(a){this.b=a||n.document||document}
Xd.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Xd.prototype.createElement=function(a){return this.b.createElement(String(a))};
Xd.prototype.appendChild=function(a,b){a.appendChild(b)};
Xd.prototype.isElement=te;Ea("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));var He=B("Firefox"),Ie=Pb()||B("iPod"),Je=B("iPad"),Ke=B("Android")&&!(Ib()||B("Firefox")||B("Opera")||B("Silk")),Le=Ib(),Me=Hb()&&!(Pb()||B("iPad")||B("iPod"));function M(){this.ba=this.ba;this.N=this.N}
M.prototype.ba=!1;M.prototype.V=function(){return this.ba};
M.prototype.dispose=function(){this.ba||(this.ba=!0,this.M())};
function Ne(a,b){a.ba?da(void 0)?b.call(void 0):b():(a.N||(a.N=[]),a.N.push(da(void 0)?u(b,void 0):b))}
M.prototype.M=function(){if(this.N)for(;this.N.length;)this.N.shift()()};
function Oe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Pe(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function N(a,b){return a.classList?a.classList.contains(b):fb(Pe(a),b)}
function O(a,b){a.classList?a.classList.add(b):N(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Qe(a,b){if(a.classList)z(b,function(b){O(a,b)});
else{var c={};z(Pe(a),function(a){c[a]=!0});
z(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function P(a,b){a.classList?a.classList.remove(b):N(a,b)&&(a.className=bb(Pe(a),function(a){return a!=b}).join(" "))}
function Re(a,b){a.classList?z(b,function(b){P(a,b)}):a.className=bb(Pe(a),function(a){return!fb(b,a)}).join(" ")}
function Se(a,b,c){c?O(a,b):P(a,b)}
function Te(a,b,c){N(a,b)&&(P(a,b),O(a,c))}
function Ue(a,b){var c=!N(a,b);Se(a,b,c)}
;var Ve=!C&&!Hb();function We(a,b){return Ve&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Xe="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Ye(){}
Ye.prototype.next=function(){throw Xe;};
Ye.prototype.Ca=function(){return this};
function Ze(a){if(a instanceof Ye)return a;if("function"==typeof a.Ca)return a.Ca(!1);if(ia(a)){var b=0,c=new Ye;c.next=function(){for(;;){if(b>=a.length)throw Xe;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function $e(a,b){if(ia(a))try{z(a,b,void 0)}catch(c){if(c!==Xe)throw c;}else{a=Ze(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Xe)throw c;}}}
function af(a){if(ia(a))return gb(a);a=Ze(a);var b=[];$e(a,function(a){b.push(a)});
return b}
;C&&dc("9");!Xb||dc("528");Wb&&dc("1.9b")||C&&dc("8")||Tb&&dc("9.5")||Xb&&dc("528");Wb&&!dc("8")||C&&dc("9");function bf(a){cf();return xb(a)}
var cf=ea;var df={"* ARIA-CHECKED":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,
"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* READONLY":!0,"* REL":!0,"* REV":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},ef={"* USEMAP":!0,"* ACTION":!0,
"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,"* CLASS":!0,"* ID":!0,"* STYLE":!0};var ff=/[\n\f\r\"\'()*<>]/g,gf={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29","*":"%2a","<":"%3c",">":"%3e"};function hf(a){return gf[a]||null}
var jf="rgb rgba alpha rect image linear-gradient radial-gradient repeating-linear-gradient repeating-radial-gradient cubic-bezier matrix perspective rotate rotate3d rotatex rotatey steps rotatez scale scale3d scalex scaley scalez skew skewx skewy translate translate3d translatex translatey translatez".split(" ");
function kf(a,b){if(!a)return tb;var c=document.createElement("div").style;var d=ia(a)?gb(a):wa(a);for(var e=0;e<d.length;e++){var f=d[e].replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");if(!Ha(f,"--")&&!Ha(f,"var")){var g=a;var h=f;var l=Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype,"getPropertyValue");h=l&&g.getPropertyValue?l.value.call(g,h)||"":g.getAttribute?String(g.getAttribute(h)):"";g=f;l=h;h=b;var m=Ja(l).toLowerCase();if(""===m)h=null;else{if(Ha(m,
"url("))if(h){m=Ja(l);b:for(l=m.substring(4,m.length-1),m=0;2>m;m++){var p="\"'".charAt(m);if(l.charAt(0)==p&&l.charAt(l.length-1)==p){l=l.substring(1,l.length-1);break b}}m=h?(g=h(l,g))?'url("'+g.replace(ff,hf)+'")':null:null}else m=null;else 0<m.indexOf("(")&&(1<(m?m.split("(").length-1:0)||!fb(jf,m.substring(0,m.indexOf("(")))||!Ia(m,")"))&&(m=null);h=m}g=c;h&&((l=Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype,"setProperty"))&&g.setProperty?l.value.call(g,f,h):g.setAttribute&&g.setAttribute(f,
h))}}ob("Output of CSS sanitizer");return sb(c.cssText||"")}
;var lf={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var mf={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var nf=!C||10<=document.documentMode,of=!C||null==document.documentMode,pf=nf?{attributes:Object.getOwnPropertyDescriptor(Element.prototype,"attributes"),setAttribute:Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute"),innerHTML:Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML"),nodeName:Object.getOwnPropertyDescriptor(Node.prototype,"nodeName"),parentNode:Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"),childNodes:Object.getOwnPropertyDescriptor(Node.prototype,
"childNodes"),style:Object.getOwnPropertyDescriptor(HTMLElement.prototype,"style")}:{};function qf(a){a=a||new rf;sf(a);this.g=a.T;this.b=Ba(a.b);this.i=Ba(a.N);this.o=Ba(a.Z);this.f=a.F;z(a.w,function(a){this.b["* "+a.toUpperCase()]=tf},this)}
function uf(){return function(a){a=Ja(a);return(a=Cb(a))&&"about:invalid#zClosurez"!=Ab(a)?Ab(a):null}}
function rf(){this.b={};z([df,ef],function(a){z(wa(a),function(a){this.b[a]=tf},this)},this);
this.f={};this.T=!0;this.w=[];this.N={};this.Z=Ba(mf);this.F=!1;this.da=vf;this.o=this.ba=this.g=ic;this.i=void 0;this.L=!1}
function wf(a){var b=new rf;b.F=!0;b.i=xf;hb(b.w,yf);b.g=uf();b.o=a;return b}
function zf(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function Af(a,b,c,d){a[c]&&!b[c]&&(a[c]=zf(a[c],d))}
function sf(a){if(a.L)throw Error("HtmlSanitizer.Builder.build() can only be used once.");a.N.FORM=!0;Af(a.b,a.f,"* USEMAP",Bf);z(["* ACTION","* CITE","* HREF"],function(a){Af(this.b,this.f,a,this.da)},a);
z(["* LONGDESC","* SRC","LINK HREF"],function(a){Af(this.b,this.f,a,this.g)},a);
z(["* FOR","* HEADERS","* NAME"],function(a){Af(this.b,this.f,a,ra(Cf,this.ba))},a);
Af(a.b,a.f,"A TARGET",ra(Df,["_blank","_self"]));Af(a.b,a.f,"* CLASS",ra(Ef,a.o));Af(a.b,a.f,"* ID",ra(Ff,a.o));a.i?Af(a.b,a.f,"* STYLE",ra(a.i,a.g)):Af(a.b,a.f,"* STYLE",ic);a.L=!0}
var vf=uf();function Gf(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function xf(a,b,c,d){if(!d.La)return null;b=rb(kf(d.La,function(b,d){c.qd=d;return a(b,c)}));
return""==b?null:b}
function tf(a){return Ja(a)}
function Df(a,b){var c=Ja(b);return fb(a,c.toLowerCase())?c:null}
function Bf(a){return(a=Ja(a))&&"#"==a.charAt(0)?a:null}
function Cf(a,b,c){b=Ja(b);return a(b,c)}
function Ef(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function Ff(a,b,c){b=Ja(b);return a(b,c)}
function Hf(a,b,c){var d=pf.setAttribute;if(d&&d.value)try{d.value.call(a,b,c)}catch(e){if(-1==e.message.indexOf("A security problem occurred"))throw e;}}
function If(a){var b=pf.innerHTML;return b&&b.get?b.get.apply(a):"string"==typeof a.innerHTML?a.innerHTML:""}
function Jf(a){var b=pf.nodeName;return b&&b.get?b.get.apply(a):"string"==typeof a.nodeName?a.nodeName:"unknown"}
function Kf(a){if(null==a)return null;var b=pf.parentNode;return b&&b.get?b.get.apply(a):(a=a.parentNode)&&a.name&&"string"==typeof a.name&&"parentnode"==a.name.toLowerCase()?null:a}
function Lf(a){var b=pf.childNodes;return te(a)&&b&&b.get?b.get.apply(a):a.childNodes instanceof NodeList?a.childNodes:null}
function Mf(a,b){var c=Nf(a,b),c=(new XMLSerializer).serializeToString(c);Ha(c,"<span")&&(Ia(c,"</span>")?c=c.slice(c.indexOf(">")+1,-7):Ia(c,"/>")&&(c=""));ob("Output of HTML sanitizer");return Mb(c)}
function Nf(a,b){var c=document.createElement("span");if(!nf||!b)return c;try{var d=document.createElement("template");if("content"in d){d.innerHTML=b;var e=d.content}else{var f=document.implementation.createHTMLDocument("x");e=f.body;f.body.innerHTML=b}var g=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)}catch(Zm){return c}e={};for(var d=0,h;h=g.nextNode();){d++;var f=a;if(3==h.nodeType)f=document.createTextNode(h.data);else{var l=Jf(h).toUpperCase(),m=!1,p=!1;
if(l in lf||l in f.i){var x="template";p=!0}else f.o[l]?x=l:(x="span",m=!0);x=document.createElement(x);f.f&&m&&Hf(x,"data-sanitizer-original-tag",l.toLowerCase());p&&Hf(x,"data-sanitizer-blacklisted-tag","");f=x}if(3!=f.nodeType){var l=a,m=h,p=f;x=m;var A=(A=pf.attributes)&&A.get?A.get.apply(x):x.attributes instanceof NamedNodeMap?x.attributes:null;if(null!=A)for(var I=0;x=A[I];I++)if(x.specified){var w=l;var L=m,q=x,oa=q.name;if(Ha("data-sanitizer-",oa))w=null;else{var vc=Jf(L),q=q.value,le={tagName:Ja(vc).toLowerCase(),
attributeName:Ja(oa).toLowerCase()},oe={La:void 0};if("style"==le.attributeName){var pe=pf.style,L=L instanceof HTMLElement&&pe&&pe.get?pe.get.apply(L):L.style instanceof CSSStyleDeclaration?L.style:null;oe.La=L}vc=Gf(vc,oa);vc in w.b?(w=w.b[vc],w=w(q,le,oe)):(oa=Gf(null,oa),oa in w.b?(w=w.b[oa],w=w(q,le,oe)):w=null)}null===w||Hf(p,x.name,w)}e[d]=f;Hf(h,"data-sanitizer-elem-num",String(d))}l=Jf(h);of&&"template"===l.toLowerCase()&&!f.hasAttribute("data-sanitizer-blacklisted-tag")&&Of(a,h,f);h=Kf(h);
l=!1;if(null===h)l=!0;else if("body"==Jf(h).toLowerCase()||11==h.nodeType)m=Kf(h),11==h.nodeType&&null===m?l=!0:"body"==Jf(h).toLowerCase()&&(m=Kf(m),null===Kf(m)&&(l=!0));l||!h?h=c:(h=(l=Element.prototype.getAttribute)&&h instanceof Element?l.call(h,"data-sanitizer-elem-num")||"":"",h=e[h]);h.content&&(h=h.content);te(f)&&f.hasAttribute("data-sanitizer-blacklisted-tag")||h.appendChild(f)}return c}
function Of(a,b,c){a.g||"template"!==c.nodeName.toLowerCase()?(b=If(b),a=Nf(a,b),z(a.childNodes,function(a){c.appendChild(a)})):(a=c.content.ownerDocument.importNode(b,!0),a=Lf(a),z(a,function(a){c.appendChild(a)}))}
;function Pf(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Qf(a){a=String(a);if(Pf(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
;function Rf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Rf.prototype.getHeight=function(){return this.bottom-this.top};
Rf.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Rf.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Rf.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Sf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Sf.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Sf.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Sf.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Tf(a,b,c){if(t(b))(b=Uf(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Uf(c,d);f&&(c.style[f]=e)}}
var Vf={};function Uf(a,b){var c=Vf[b];if(!c){var d=Za(b),c=d;void 0===a.style[d]&&(d=(Xb?"Webkit":Wb?"Moz":C?"ms":Tb?"O":null)+$a(d),void 0!==a.style[d]&&(c=d));Vf[b]=c}return c}
function Wf(a,b){var c=Yd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Xf(a,b){return Wf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Yf(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Zf(a){if(C&&!(8<=Number(ec)))return a.offsetParent;var b=Yd(a),c=Xf(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Xf(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function $f(a){for(var b=new Rf(0,Infinity,Infinity,0),c=Wd(a),d=c.b.body,e=c.b.documentElement,f=ge(c.b);a=Zf(a);)if(!(C&&0==a.clientWidth||Xb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Xf(a,"overflow")){var g=ag(a),h=new F(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
de(he(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function ag(a){var b=Yd(a),c=new F(0,0);var d=b?Yd(b):document;d=!C||9<=Number(ec)||ee(Wd(d).b)?d.documentElement:d.body;if(a==d)return c;a=Yf(a);b=fe(Wd(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function bg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function cg(a){var b=dg;if("none"!=Xf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function dg(a){var b=a.offsetWidth,c=a.offsetHeight,d=Xb&&!b&&!c;return da(b)&&!d||!a.getBoundingClientRect?new Vd(b,c):(a=Yf(a),new Vd(a.right-a.left,a.bottom-a.top))}
function eg(a){var b=ag(a);a=cg(a);return new Sf(b.j,b.l,a.width,a.height)}
function fg(a){return"rtl"==Xf(a,"direction")}
function gg(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function hg(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?gg(a,c):0}
var ig={thin:2,medium:4,thick:6};function jg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ig?ig[c]:gg(a,c)}
;function kg(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=Xf(h,"position")){var m=ag(h);l||(l=(l=fg(h))&&Wb?-h.scrollLeft:!l||Vb&&dc("8")||"visible"==Xf(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft,m=Ud(m,new F(l,h.scrollTop)))}}h=m||new F;m=eg(a);if(l=$f(a)){var p=new Sf(l.left,l.top,l.right-l.left,l.bottom-l.top),l=Math.max(m.left,p.left),x=Math.min(m.left+m.width,p.left+p.width);if(l<=x){var A=Math.max(m.top,p.top),
p=Math.min(m.top+m.height,p.top+p.height);A<=p&&(m.left=l,m.top=A,m.width=x-l,m.height=p-A)}}l=Wd(a);A=Wd(c);if(l.b!=A.b){var x=l.b.body;var A=he(A.b),p=new F(0,0);var I=(I=Yd(x))?he(I):window;b:{try{Qb(I.parent);var w=!0;break b}catch(oa){}w=!1}if(w){w=x;do{if(I==A)var L=ag(w);else L=Yf(w),L=new F(L.left,L.top);p.j+=L.j;p.l+=L.l}while(I&&I!=A&&I!=I.parent&&(w=I.frameElement)&&(I=I.parent))}w=Ud(p,ag(x));!C||9<=Number(ec)||ee(l.b)||(w=Ud(w,fe(l.b)));m.left+=w.j;m.top+=w.l}a=lg(a,b);b=m.left;a&4?b+=
m.width:a&2&&(b+=m.width/2);b=new F(b,m.top+(a&1?m.height:0));b=Ud(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var q;g&&(q=$f(c))&&(q.top-=h.l,q.right-=h.j,q.bottom-=h.l,q.left-=h.j);e=b;e=new F(e.j,e.l);b=lg(c,d);d=cg(c);a=new Vd(d.width,d.height);e=new F(e.j,e.l);a=new Vd(a.width,a.height);h=0;if(f||0!=b)b&4?e.j-=a.width+(f?f.right:0):b&2?e.j-=a.width/2:f&&(e.j+=f.left),b&1?e.l-=a.height+(f?f.bottom:0):f&&(e.l+=f.top);g&&(q?(f=e,b=a,h=0,65==(g&65)&&(f.j<q.left||f.j>=q.right)&&(g&=-2),132==
(g&132)&&(f.l<q.top||f.l>=q.bottom)&&(g&=-5),f.j<q.left&&g&1&&(f.j=q.left,h|=1),g&16&&(m=f.j,f.j<q.left&&(f.j=q.left,h|=4),f.j+b.width>q.right&&(b.width=Math.min(q.right-f.j,m+b.width-q.left),b.width=Math.max(b.width,0),h|=4)),f.j+b.width>q.right&&g&1&&(f.j=Math.max(q.right-b.width,q.left),h|=1),g&2&&(h|=(f.j<q.left?16:0)|(f.j+b.width>q.right?32:0)),f.l<q.top&&g&4&&(f.l=q.top,h|=2),g&32&&(m=f.l,f.l<q.top&&(f.l=q.top,h|=8),f.l+b.height>q.bottom&&(b.height=Math.min(q.bottom-f.l,m+b.height-q.top),b.height=
Math.max(b.height,0),h|=8)),f.l+b.height>q.bottom&&g&4&&(f.l=Math.max(q.bottom-b.height,q.top),h|=2),g&8&&(h|=(f.l<q.top?64:0)|(f.l+b.height>q.bottom?128:0)),g=h):g=256,h=g);f=new Sf(0,0,0,0);f.left=e.j;f.top=e.l;f.width=a.width;f.height=a.height;g=h;g&496||(e=new F(f.left,f.top),e instanceof F?(q=e.j,e=e.l):(q=e,e=void 0),c.style.left=bg(q,!1),c.style.top=bg(e,!1),a=new Vd(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,q=ee(Wd(Yd(c)).b),!C||dc("10")||q&&dc("8")?(c=c.style,
Wb?c.MozBoxSizing="border-box":Xb?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,q?(C?(b=hg(c,"paddingLeft"),a=hg(c,"paddingRight"),e=hg(c,"paddingTop"),q=hg(c,"paddingBottom"),q=new Rf(e,a,q,b)):(b=Wf(c,"paddingLeft"),a=Wf(c,"paddingRight"),e=Wf(c,"paddingTop"),q=Wf(c,"paddingBottom"),q=new Rf(parseFloat(e),parseFloat(a),parseFloat(q),parseFloat(b))),!C||9<=Number(ec)?(b=Wf(c,"borderLeftWidth"),a=Wf(c,"borderRightWidth"),
e=Wf(c,"borderTopWidth"),c=Wf(c,"borderBottomWidth"),c=new Rf(parseFloat(e),parseFloat(a),parseFloat(c),parseFloat(b))):(b=jg(c,"borderLeft"),a=jg(c,"borderRight"),e=jg(c,"borderTop"),c=jg(c,"borderBottom"),c=new Rf(e,a,c,b)),d.pixelWidth=f.width-c.left-q.left-q.right-c.right,d.pixelHeight=f.height-c.top-q.top-q.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function lg(a,b){return(b&8&&fg(a)?b^4:b)&-9}
;function Q(a){M.call(this);this.o=1;this.g=[];this.i=0;this.b=[];this.f={};this.w=!!a}
y(Q,M);k=Q.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.o;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.o=e+3;d.push(e);return e};
function mg(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.ja(d),b.apply(void 0,arguments))},a)}
function ng(a,b,c){if(b=a.f[b]){var d=a.b;(b=eb(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.ja(b)}}
k.ja=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.i)this.g.push(a),this.b[a+1]=ea;else{if(c){var d=ab(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.J=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];og(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;g=this.g.pop();)this.ja(g)}}return 0!=e}return!1};
function og(a,b,c){pc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(z(b,this.ja,this),delete this.f[a])}else this.b.length=0,this.f={}};
function pg(a,b){if(b){var c=a.f[b];return c?c.length:0}var c=0,d;for(d in a.f)c+=pg(a,d);return c}
k.M=function(){Q.G.M.call(this);this.clear();this.g.length=0};function qg(){}
;function rg(){}
y(rg,qg);rg.prototype.clear=function(){var a=af(this.Ca(!0)),b=this;z(a,function(a){b.remove(a)})};function sg(a){this.b=a}
y(sg,rg);k=sg.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.Ca=function(a){var b=0,c=this.b,d=new Ye;d.next=function(){if(b>=c.length)throw Xe;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function tg(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(tg,sg);function ug(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(ug,sg);var vg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wg(a){return a?decodeURI(a):a}
function xg(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function yg(a,b,c){if(ha(b))for(var d=0;d<b.length;d++)yg(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function zg(a,b){for(var c in b)yg(c,b[c],a);return a}
;function Ag(a){return(a=a.exec(Eb))?a[1]:""}
var Bg=function(){if(He)return Ag(/Firefox\/([0-9.]+)/);if(C||Ub||Tb)return cc;if(Le)return Pb()||B("iPad")||B("iPod")?Ag(/CriOS\/([0-9.]+)/):Ag(/Chrome\/([0-9.]+)/);if(Me&&!(Pb()||B("iPad")||B("iPod")))return Ag(/Version\/([0-9.]+)/);if(Ie||Je){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Eb);if(a)return a[1]+"."+a[2]}else if(Ke)return(a=Ag(/Android\s+([0-9.]+)/))?a:Ag(/Version\/([0-9.]+)/);return""}();var Cg=/^[\w+/]+[=]{0,2}$/;v("userfeedback.api.startFeedback",function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||n,e=d.document,f;a:{if((f=(d||n).document.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&Cg.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var g=r("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var h=JSON.stringify(b);(g=1200>=h.length)&&(a.psdJson=h)}g||(b={invalidPsd:!0})}b=[a,b,c];
d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{var d=c+"/load.js?",l;for(l in a)b=a[l],null!=b&&!ka(b)&&(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=e.createElement("script");f&&a.setAttribute("nonce",f);a.src=d;e.body.appendChild(a)}});v("userfeedback.api.isBrowserSupportedForGenie",function(){return Dg()});
function Dg(){return C?0<=Wa(Bg,"8"):He?0<=Wa(Bg,"15"):Me?0<=Wa(Bg,"5"):Le||Ub}
v("userfeedback.api.isBrowserSupportedForHelp",Dg);var Eg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Fg="Microsoft Internet Explorer"==navigator.appName;var Gg=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",Gg);function Hg(a){var b=arguments;if(1<b.length)Gg[b[0]]=b[1];else{var b=b[0],c;for(c in b)Gg[c]=b[c]}}
function R(a,b){return a in Gg?Gg[a]:b}
function Ig(a){return R(a,void 0)}
;function Jg(a,b,c,d,e){var f=r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),Hg("ERRORS",f))}
function Kg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jg(b)}}:a}
;function Lg(a){window.clearTimeout(a)}
function S(a,b){ja(a)&&(a=Kg(a));return window.setTimeout(a,b)}
;var Mg=r("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.ja;Q.prototype.publish=Q.prototype.J;Q.prototype.clear=Q.prototype.clear;v("ytPubsubPubsubInstance",Mg);var Ng=r("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",Ng);var Og=r("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",Og);var Pg=r("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",Pg);
function Qg(a,b,c){var d=Rg();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){Ng[e]&&b.apply(c||window,d)};
try{Pg[a]?g():S(g,0)}catch(h){Jg(h)}},c);
Ng[e]=!0;Og[a]||(Og[a]=[]);Og[a].push(e);return e}return 0}
function Rg(){return r("ytPubsubPubsubInstance")}
function Sg(a){Og[a]&&(a=Og[a],z(a,function(a){Ng[a]&&delete Ng[a]}),a.length=0)}
function Tg(a){var b=Rg();if(b)if(b.clear(a),a)Sg(a);else for(var c in Og)Sg(c)}
function T(a,b){var c=Rg();c&&c.publish.apply(c,arguments)}
function Ug(a,b){Pg[a]=!0;var c=Rg();c&&c.publish.apply(c,arguments);Pg[a]=!1}
function Vg(a){var b=Rg();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete Ng[a]}))}
;var Wg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",Wg);function Xg(a){var b=void 0===b?{}:b;a=(a=a in Wg?Wg[a]:void 0)||"";var c={},d;for(d in b)c.Fa=d,a=a.replace(new RegExp("\\$"+c.Fa,"gi"),function(a){return function(){return b[a.Fa]}}(c)),c={Fa:c.Fa};
return a}
;function U(a,b){this.version=a;this.args=b}
;function Yg(a,b){this.topic=a;this.b=b}
Yg.prototype.toString=function(){return this.topic};function Zg(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
;var $g=r("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.ja;Q.prototype.publish=Q.prototype.J;Q.prototype.clear=Q.prototype.clear;v("ytPubsub2Pubsub2Instance",$g);var ah=r("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",ah);var bh=r("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",bh);var ch=r("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",ch);
v("ytPubsub2Pubsub2SkipSubKey",null);function dh(a,b){var c=eh();c&&c.publish.call(c,a.toString(),a,b)}
function fh(a,b,c){var d=eh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=r("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(ah[e])try{if(g&&a instanceof Yg&&a!=d)try{var f=a.b,h=g;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.vb){var p=new f;f.vb=p.version}var x=f.vb}catch(A){}if(!x||h.version!=x)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,
gb(h.args))}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+A.message,A;}b.call(c||window,g)}catch(A){Jg(A)}},ch[a.toString()]?r("yt.scheduler.instance")?Zg(f,1,void 0):S(f,0):f())});
ah[e]=!0;bh[a.toString()]||(bh[a.toString()]=[]);bh[a.toString()].push(e);return e}
function eh(){return r("ytPubsub2Pubsub2Instance")}
function gh(a){var b=eh();b&&("number"==typeof a&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete ah[a]}))}
;sa();var hh=da(XMLHttpRequest)?function(){return new XMLHttpRequest}:da(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ih(){if(!hh)return null;var a=hh();return"open"in a?a:null}
;function jh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ha(b[f])?hb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function kh(a,b,c){var d=a.split("#",2);a=d[0];var d=1<d.length?"#"+d[1]:"",e=a.split("?",2);a=e[0];var e=jh(e[1]||""),f;for(f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return xg(zg([a],e))+d}
function lh(a){a=zg([],a);a[0]="";return a.join("")}
function mh(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),jh(1<a.length?a[1]:a[0])):{}}
;var nh={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function oh(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(vg)[1]||null,e=wg(a.match(vg)[3]||null);d&&e?(d=c,c=a.match(vg),d=d.match(vg),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?wg(c.match(vg)[3]||null)==e&&(Number(c.match(vg)[4]||null)||null)==(Number(a.match(vg)[4]||null)||null):!0;for(var f in nh){if((e=d=R(nh[f]))&&!(e=c)){var g=a,e=f,h=R("CORS_HEADER_WHITELIST")||{};e=(g=wg(g.match(vg)[3]||null))?(h=h[g])?fb(h,e):!1:!0}e&&(b[f]=d)}return b}
function ph(a,b){var c=R("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.sd&&(!wg(a.match(vg)[3]||null)||b.withCredentials||wg(a.match(vg)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.R&&b.R[c])}
function qh(a,b){var c=b.format||"JSON";b.ud&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=R("XSRF_FIELD_NAME",void 0),e=R("XSRF_TOKEN",void 0),f=b.na;f&&(f[d]&&delete f[d],a=kh(a,f||{},!0));var g=b.postBody||"",f=b.R;ph(a,b)&&(f||(f={}),f[d]=e);f&&t(g)&&(d=jh(g),Da(d,f),g=b.rb&&"JSON"==b.rb?JSON.stringify(d):lh(d));var h=!1,l,m=rh(a,function(a){if(!h){h=!0;l&&Lg(l);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=sh(c,a,b.pd);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Y&&b.Y.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.Na&&0<b.timeout&&(l=S(function(){h||(h=!0,m.abort(),Lg(l),b.Na.call(b.context||n,m))},b.timeout));
return m}
function sh(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?th(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=uh(a)})}c&&vh(d);
return d}
function vh(a){if(ka(a))for(var b in a)if("html_content"==b||Ia(b,"_html")){var c=b;ob("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Mb(a[b]);a[c]=d}else vh(a[b])}
function th(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function uh(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
function wh(a,b){b.method="POST";b.R||(b.R={});qh(a,b)}
function rh(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Kg(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=ih();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=oh(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var xh={},yh=0;function zh(a,b){a&&(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?rh(a,b):Ah(a,b))}
function Ah(a,b){var c=new Image,d=""+yh++;xh[d]=c;c.onload=c.onerror=function(){b&&xh[d]&&b();delete xh[d]};
c.src=a}
;function Bh(a,b){zh("/gen_204?"+("a="+a+(b?"&"+b:"")),void 0)}
;function Ch(){M.call(this);this.b={}}
y(Ch,M);fa(Ch);Ch.prototype.init=ea;Ch.prototype.M=function(){this.b={}};
Ch.prototype.set=function(a,b){this.b[a]=b};
Ch.prototype.get=function(a){return this.b[a]||null};function Dh(a){M.call(this);this.g=a.flowName;this.f=Eh(this);this.b=a.trackingData||{};a=R("PAGE_NAME",null);Fh(this,{flowid:this.f,pageName:a});this.track("starting-tracking-for-ypc-flow")}
y(Dh,M);Dh.prototype.M=function(){this.track("end-of-tracking-for-ypc-flow");Dh.G.M.call(this);for(var a in this)delete this[a]};
function Fh(a,b){Da(a.b,b)}
function Gh(a,b){var c={};ta(b,function(a,b){"object"!=typeof a&&"function"!=typeof a&&(c["purchaseInsertFailure-"+b]=a)});
Fh(a,c)}
Dh.prototype.track=function(a,b){b=b||{};var c=R("PAGE_NAME",null),d=this.b.jstimestamp||null,e=sa(),d=d?e-d:null;Da(b,{label:a,pageName:c,jstimestamp:e,previousTimeLoggedAt:this.b.label||null,timeFromLastTrack:d,netFlowTime:(this.b.netFlowTime||null)+d});Fh(this,b);c=lh(this.b);Bh(this.g,c)};
function Eh(a){if(a.f)return a.f;var b=sa();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var c=(b+16*Math.random())%16|0;b=Math.floor(b/16);return("x"==a?c:c&3|8).toString(16)})}
;function Hh(a){U.call(this,1,arguments)}
y(Hh,U);function Ih(a){U.call(this,1,arguments);this.b=a}
y(Ih,U);function Jh(a,b,c){U.call(this,1,arguments);this.b=a;this.f=c}
y(Jh,U);var Kh=new Yg("subscription-batch-subscribe",Hh),Lh=new Yg("subscription-subscribe-success",Jh),Mh=new Yg("subscription-unsubscribe-success",Ih),Nh=new Yg("subscription-disable-ypc",Ih);function Oh(a,b){var c=Ch.C(),d=a.O,e=a.onError,f=a.Y;c.set(b,Ph([function(b,c){d&&d.call(a.context,b,c);f&&f.call(a.context,b,c)}],[function(b,c){e&&e.call(a.context,b,c);
f&&f.call(a.context,b,c)}]));
a.O=function(a,d){for(var e=c.get(b),f;f=e.tb.shift();)f(a,d);d&&!d.error?(e.xhr=a,e.Oa=d,e.ta=2,c.set(b,e)):c.b[b]&&delete c.b[b]};
a.onError=function(a,d){for(var e=c.get(b),f;f=e.cb.shift();)f(a,d);c.b[b]&&delete c.b[b]};
a.Y=void 0}
function Qh(a,b){2==b.ta?S(function(){a.O&&a.O.call(a.context,b.xhr,b.Oa);a.Y&&a.Y.call(a.context,b.xhr,b.Oa)},0):1==b.ta&&(b.tb.push(function(b,d){a.O&&a.O.call(a.context,b,d);
a.Y&&a.Y.call(a.context,b,d)}),b.cb.push(function(b,d){a.onError&&a.onError.call(a.context,b,d);
a.Y&&a.Y.call(a.context,b,d)}))}
function Ph(a,b){return{xhr:new XMLHttpRequest,Oa:{},ta:1,tb:a,cb:b}}
;function Rh(a,b){var c=a.itemData,c=["/offer_details_ajax",a.flowType,c&&c.itemId,c&&c.itemType,a.offerIdsToMatch,a.innertubeRequestParams,a.couponCode];c.sort(kb);c=c.join("-");b.method="POST";b.R=b.R||{};b.na={ei:R("EVENT_ID",void 0)};var d=b.R,e=a.itemData,f=a.flowType,g=a.offerIdsToMatch,h=a.innertubeRequestParams,l=a.couponCode;e&&(d.ii=e.itemId,d.it=e.itemType);h&&(d.irp=h);g&&(d.offer_ids=g);l&&(d.cc=l);"T"==f&&(d.action_tip_flow=1);a:{b.context=b.context||n;d=Ch.C();if(c&&d){if((e=d.get(c))&&
(2==e.ta||1==e.ta)){Qh(b,e);break a}Oh(b,c)}(e=qh("/offer_details_ajax",b))&&c&&d&&(d.get(c).xhr=e)}}
;var Sh={};function Th(a){return Sh[a]||(Sh[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function V(a,b){return a?a.dataset?a.dataset[Th(b)]:a.getAttribute("data-"+b):null}
function Uh(a,b,c){a&&(a.dataset?a.dataset[Th(b)]=String(c):a.setAttribute("data-"+b,c))}
;var Vh=0;function Wh(a,b){var c=$d(a,null,b);return c.length?c[0]:null}
var Xh=r("ytDomDomGetNextId")||function(){return++Vh};
v("ytDomDomGetNextId",Xh);function Yh(a){var b=a.__yt_uid_key;b||(b=Xh(),a.__yt_uid_key=b);return b}
function Zh(a,b){a=G(a);b=G(b);return!!Ge(a,function(a){return a===b},void 0)}
function $h(a){Se(document.body,"hide-players",!0);a&&Se(a,"preserve-players",!0)}
function ai(){Se(document.body,"hide-players",!1);z(H("preserve-players"),function(a){P(a,"preserve-players")})}
;var bi={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ci(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in bi||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
ci.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ci.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ci.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ya=r("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",ya);var di=r("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",di);function ei(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return xa(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function W(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ei(a,b,c,d);if(e)return e;var e=++di.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new ci(d);if(!Ge(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ci(b);
b.currentTarget=a;return c.call(a,b)};
g=Kg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);ya[e]=[a,b,c,g,d];return e}
function fi(a,b,c,d){var e=a||document;return W(e,b,function(a){var b=Ge(a.target,function(a){return a===e||d(a)});
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})}
function gi(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function hi(a,b,c,d){return fi(a,b,c,function(a){return N(a,d)})}
function ii(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function X(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in ya){var b=ya[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete ya[a]}}))}
;function ji(a){return R("EXPERIMENT_FLAGS",{})[a]}
;function ki(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){if(Fg)try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(p){g=null}else{var h=document.body;var l=document.createElement("object");l.setAttribute("type","application/x-shockwave-flash");g=h.appendChild(l)}if(g&&"GetVariable"in g)try{var m=g.GetVariable("$version")}catch(p){m=""}h&&l&&h.removeChild(l);(g=m||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
fa(ki);function li(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function mi(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ba(ni);this.assets=a.assets||{};this.attrs=a.attrs||Ba(oi);this.params=a.params||Ba(pi);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var ni={enablejsapi:1},oi={},pi={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function qi(a){var b=new mi,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"object"==ga(d)?b[c]=Ba(d):b[c]=d}return b}
;var ri=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,si=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ti(a,b){var c=ui(a),d=document.getElementById(c),e=d&&V(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Qg(c,b),g=""+la(b);vi[g]=e}f||(d=wi(a,c,function(){V(d,"loaded")||(Uh(d,"loaded","true"),T(c),S(ra(Tg,c),0))}))}}
function wi(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function ui(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ya(a)}
var vi={};function xi(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ri,""),c=c.replace(si,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ti(a,b)}
;var yi=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function zi(a){if(window.spf){var b=a.match(yi);spf.style.load(a,b?b[1]:"",void 0)}else Ai(a)}
function Ai(a){var b=Bi(a),c=document.getElementById(b),d=c&&V(c,"loaded");d||c&&!d||(c=Ci(a,b,function(){V(c,"loaded")||(Uh(c,"loaded","true"),T(b),S(ra(Tg,b),0))}))}
function Ci(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=bf(a);d.rel="stylesheet";d.href=wb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Bi(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ya(a)}
;var Di={},Ei=(Di["api.invalidparam"]=2,Di.auth=150,Di["drm.auth"]=150,Di["heartbeat.net"]=150,Di["heartbeat.servererror"]=150,Di["heartbeat.stop"]=150,Di["html5.unsupportedads"]=5,Di["fmt.noneavailable"]=5,Di["fmt.decode"]=5,Di["fmt.unplayable"]=5,Di["html5.missingapi"]=5,Di["html5.unsupportedlive"]=5,Di["drm.unavailable"]=5,Di);var Fi;var Gi=Eb,Gi=Gi.toLowerCase();if(-1!=Gi.indexOf("android")){var Hi=Gi.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Hi)Fi=Number(Hi[1]);else{var Ii={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Ji=Gi.match("("+wa(Ii).join("|")+")");Fi=Ji?Ii[Ji[0]]:0}}else Fi=void 0;var Ki=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Li=['audio/mp4; codecs="mp4a.40.2"'];var Mi;var Ni=Eb,Oi=Ni.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Oi||2>Oi.length)Mi=void 0;else{var Pi=Ni.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Mi=Pi&&6==Pi.length?Number(Pi[5].replace("_",".")):0}0<=Mi&&0<=Eb.search("Safari")&&Eb.search("Version");function Qi(a){M.call(this);this.b=[];this.f=a||this}
y(Qi,M);function Ri(a,b,c,d){d=Kg(u(d,a.f));d={target:b,name:c,Wa:d};b.addEventListener(c,d.Wa,void 0);a.b.push(d)}
function Si(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.Wa)}}
Qi.prototype.M=function(){Si(this);Qi.G.M.call(this)};var Ti={},Ui=0;var Vi={log_event:"events",log_interaction:"interactions"},Wi={},Xi={},Yi=0,Zi=r("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",Zi);var $i=r("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",$i);
function aj(){Lg(Yi);if(!za(Zi)){for(var a in Zi){var b=Wi[a];if(!b){var c=Xi[a];if(!c)continue;b=new c;Wi[a]=b}var c=void 0,d=a,e=Vi[d];for(c in Zi[d]){var f=b.b,f={client:{hl:f.Vb,gl:f.Ub,clientName:f.Tb,clientVersion:f.innertubeContextClientVersion}};R("DELEGATED_SESSION_ID")&&(f.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});f={context:f};f[e]=bj(d,c);f.requestTimeMs=Math.round(Eg());var g=$i[c];if(g)a:{var h=f,l=c;if(g.videoId)var m="VIDEO";else if(g.playlistId)m="PLAYLIST";else break a;h.credentialTransferTokenTargetId=
g;h.context=h.context||{};h.context.user=h.context.user||{};h.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete $i[c];cj(b,d,f)}delete Zi[a]}za(Zi)||dj()}}
function dj(){Lg(Yi);Yi=S(aj,R("LOGGING_BATCH_TIMEOUT",1E4))}
function bj(a,b){b||(b="");Zi[a]=Zi[a]||{};Zi[a][b]=Zi[a][b]||[];return Zi[a][b]}
;function ej(a,b,c){var d=fj,e={};e.eventTimeMs=Math.round(c||Eg());e[a]=b;a=String;b=r("_lact",window);b=null==b?-1:Math.max(sa()-b,0);e.context={lastActivityMs:a(b)};Xi.log_event=d;d=bj("log_event");d.push(e);e=Number(ji("web_logging_max_batch")||0)||20;d.length>=e?aj():dj()}
;function gj(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function fj(a){a||(a={apiaryHost:Ig("APIARY_HOST"),nd:Ig("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!R("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:Ig("GAPI_HINT_PARAMS"),innertubeApiKey:Ig("INNERTUBE_API_KEY"),innertubeApiVersion:Ig("INNERTUBE_API_VERSION"),Tb:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Ig("INNERTUBE_CONTEXT_CLIENT_VERSION"),Vb:Ig("INNERTUBE_CONTEXT_HL"),Ub:Ig("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:Ig("XHR_APIARY_HOST")||"",Wb:Ig("INNERTUBE_HOST_OVERRIDE")||
""});this.b=a}
function cj(a,b,c){var d={};R("VISITOR_DATA")||Jg(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":R("VISITOR_DATA","")},R:c,rb:"JSON",Na:d.Na,O:function(a,b){d.O&&d.O(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=kd();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=R("SESSION_INDEX",0));var g=a.b.xhrApiaryHost;g&&!g.startsWith("http")&&(g="//"+g);if(ji("youtubei_for_web")||ji("unplugged_web_same_op_domain"))g="";var h=a.b.Wb;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);wh(""+g+gj(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;var hj=r("ytLoggingLatencyUsageStats_")||{};v("ytLoggingLatencyUsageStats_",hj);var ij=0;
function jj(a){hj[a]=hj[a]||{count:0};var b=hj[a];b.count++;b.time=Eg();ij||(ij=Zg(kj,0,5E3));if(10<b.count){if(11==b.count){b=Error("CSI data exceeded logging limit with key: "+a);a={name:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:Ig("INNERTUBE_CONTEXT_CLIENT_VERSION")};var c=window&&window.yterr||void 0||!1;if(b&&c&&!(5<=Ui)){var c=b.stacktrace,d=b.columnNumber;var e=r("window.location.href");if(t(b))b={message:b,name:"Unknown error",lineNumber:"Not available",fileName:e,stack:"Not available"};
else{var f=!1;try{var g=b.lineNumber||b.line||"Not available"}catch(p){g="Not available",f=!0}try{var h=b.fileName||b.filename||b.sourceURL||n.$googDebugFname||e}catch(p){h="Not available",f=!0}b=!f&&b.lineNumber&&b.fileName&&b.stack&&b.message&&b.name?b:{message:b.message||"Not available",name:b.name||"UnknownError",lineNumber:g,fileName:h,stack:b.stack||"Not available"}}c=c||b.stack;g=b.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Ti[b.message]||0<=c.indexOf("/YouTubeCenter.js")||
0<=c.indexOf("/mytube.js"))){h=b.fileName;g={na:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,1E3),line:g,level:"ERROR"},R:{url:R("PAGE_NAME",window.location.href),file:h},method:"POST"};c&&(g.R.stack=c);for(var l in a)g.R["client."+l]=a[l];if(l=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var m in l)g.R[m]=l[m];qh("/error_204",g);Ti[b.message]=!0;Ui++}}}return!0}return!1}
function kj(){var a=Eg(),b;for(b in hj)6E4<a-hj[b].time&&delete hj[b];ij=0}
;(new tg).isAvailable();(new ug).isAvailable();var lj=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function mj(a,b){U.call(this,1,arguments)}
y(mj,U);var nj=new Yg("timing-sent",mj);var oj=sa().toString();var pj={vc:!0},qj={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId",fmt:"playerInfo.itag"},rj="ap c cver ei yt_fss yt_li".split(" "),sj=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"];
function tj(){var a=uj().info.yt_lt="hot_bg";vj().info_yt_lt=a;if(ji("csi_on_gel"))if("yt_lt"in qj){var b={},c=qj.yt_lt.split(".");fb(sj,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=wj();c=Object.keys(b).join("");jj("info_"+c+"_"+a)||(b.clientActionNonce=a,ej("latencyActionInfo",b))}else fb(rj,"yt_lt")||Jg(Error("Unknown label yt_lt logged with GEL CSI."))}
function xj(){var a=yj();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function zj(){if(!ji("csi_on_gel")){var a=yj(),b=uj().info,c=a._start,d;for(d in a)if(Ha(d,"_")&&ha(a[d])){var e=d.slice(1);if(e in pj){var f=cb(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Aj(f,e),Bj(),Cj(),Dj(!1,void 0),R("TIMING_ACTION")&&Hg("PREVIOUS_ACTION",R("TIMING_ACTION")),Hg("TIMING_ACTION","")}else{var g=R("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:R("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+r("ytplayer.config.assets.js");(l=lj.getEntriesByName?lj.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-
l.responseEnd):delete b.h5jse}a.aft=xj();Ej()&&"youtube"==g&&(tj(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Eg();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);Aj(f,e,void 0);dh(nj,new mj(b.aft+(h||0),void 0))}}}
var Cj=u(lj.clearResourceTimings||lj.webkitClearResourceTimings||lj.mozClearResourceTimings||lj.msClearResourceTimings||lj.oClearResourceTimings||ea,lj);
function Aj(a,b,c){if(ji("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],v("yt.timing.csiData",d));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||zh(a,void 0)}catch(f){zh(a,void 0)}else zh(a);Dj(!0,c)}
function wj(){var a=uj().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=sa();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(oj)for(b=1,c=0;c<oj.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^oj.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");uj().nonce=a}return a}
function yj(){return uj().tick}
function vj(){var a=uj();"gel"in a||(a.gel={});return a.gel}
function uj(){return r("ytcsi.data_")||Bj()}
function Bj(){var a={tick:{},info:{}};v("ytcsi.data_",a);return a}
function Dj(a,b){v("yt.timing."+(b||"")+"pingSent_",a)}
function Ej(){var a=yj(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==uj().info.yt_pvis}
;function Fj(a,b){M.call(this);this.o=this.i=a;this.ya=b;this.F=!1;this.api={};this.za=this.la=null;this.sa=new Q;Ne(this,ra(Oe,this.sa));this.g={};this.T=this.Aa=this.f=this.Ka=this.b=null;this.va=!1;this.Z=this.w=this.L=this.ka=null;this.Ba={};this.Eb=["onReady"];this.wa=new Qi(this);Ne(this,ra(Oe,this.wa));this.Ia=null;this.Va=NaN;this.xa={};Gj(this);this.fa("onDetailedError",u(this.pc,this));this.fa("onTabOrderChange",u(this.Db,this));this.fa("onTabAnnounce",u(this.Sa,this));this.fa("WATCH_LATER_VIDEO_ADDED",
u(this.qc,this));this.fa("WATCH_LATER_VIDEO_REMOVED",u(this.sc,this));He||(this.fa("onMouseWheelCapture",u(this.mc,this)),this.fa("onMouseWheelRelease",u(this.nc,this)));this.fa("onAdAnnounce",u(this.Sa,this));this.da=new Qi(this);Ne(this,ra(Oe,this.da));this.Ja=!1;this.Ha=null}
y(Fj,M);var Hj=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=Fj.prototype;k.Tc=function(a,b){this.V()||(Ij(this,a),Jj(this,b),this.F&&Kj(this))};
function Ij(a,b){a.Ka=b;a.b=qi(b);a.f=a.b.attrs.id||a.f;"video-player"==a.f&&(a.f=a.ya,a.b.attrs.id=a.ya);a.o.id==a.f&&(a.f+="-player",a.b.attrs.id=a.f);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.ya;a.Aa||(a.Aa=Lj(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.o.style.width=bg(Number(c)||c,!0));if(c=a.b.attrs.height)a.o.style.height=bg(Number(c)||c,!0)}
k.Ib=function(){return this.Ka};
function Kj(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function Mj(a){if(!da(a.b.disable.flash)){var b=a.b.disable;var c=li(ki.C(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Nj(a,b){var c;(c=!b)||(c=5!=(Ei[b.errorCode]||5)?!1:(c=a.b&&a.b.args&&a.b.args.fflags)&&0<=c.indexOf("web_player_disable_flash_fallback=true")?!1:-1!=Hj.indexOf(b.errorCode));if(c&&Mj(a)){(c=Oj(a))&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),c instanceof mi||(c=new mi(c)),d=c);d.args.autoplay=1;d.args.html5_unavailable="1";Ij(a,d);Jj(a,"flash")}}
function Jj(a,b){if(!a.V()){if(!b){var c;if(!(c=!a.b.html5&&Mj(a))){if(!da(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Fi)var d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),v("yt.player.utils.videoElement_",c));try{if(c.canPlayType)for(var e=e?Ki:Li,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Pj(a)||a.b.assets.js);a.b.disable.html5=
!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Mj(a)?"flash":"unsupported":"html5"}("flash"==b?a.Rc:a.Sc).call(a)}}
function Pj(a){var b=!0,c=Oj(a);c&&a.b&&(a=a.b,b=V(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
k.Sc=function(){if(!this.va){var a=Pj(this);if(a&&"html5"==Qj(this))this.T="html5",this.F||this.ra();else if(Rj(this),this.T="html5",a&&this.L)this.i.appendChild(this.L),this.ra();else{this.b.loaded=!0;var b=!1;this.ka=u(function(){b=!0;var a=this.i,d=qi(this.b);r("yt.player.Application.create")(a,d);this.ra()},this);
this.va=!0;a?this.ka():(xi(this.b.assets.js,this.ka),zi(this.b.assets.css),Sj(this)&&!b&&v("yt.player.Application.create",null))}}};
k.Rc=function(){var a=qi(this.b);if(!this.w){var b=Oj(this);b&&(this.w=document.createElement("SPAN"),this.w.tabIndex=0,Ri(this.wa,this.w,"focus",this.ob),this.Z=document.createElement("SPAN"),this.Z.tabIndex=0,Ri(this.wa,this.Z,"focus",this.ob),b.parentNode&&b.parentNode.insertBefore(this.w,b),b.parentNode&&b.parentNode.insertBefore(this.Z,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Qj(this))this.T="flash",this.F||this.ra();else{Rj(this);
this.T="flash";this.b.loaded=!0;var b=ki.C(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!li(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.i;if(c){var b=t(b)?Zd(b):b,d=Ba(a.attrs);d.tabindex=0;var e=Ba(a.params);e.flashvars=lh(a.args);if(Fg){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object");
for(g in d)a.setAttribute(g,d[g]);for(var f in e){var g=document.createElement("param");g.setAttribute("name",f);g.setAttribute("value",e[f]);a.appendChild(g)}}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.ra()}};
k.ob=function(){Oj(this).focus()};
function Oj(a){var b=G(a.f);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.f));return b}
k.ra=function(){if(!this.V()){var a=Oj(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.va=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Nj(this);else{Gj(this);this.F=!0;a=Oj(this);a.addEventListener&&(this.la=Tj(this,a,"addEventListener"));a.removeEventListener&&(this.za=Tj(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Tj(this,a,d))}for(var e in this.g)this.la(e,
this.g[e]);Kj(this);this.Aa&&this.Aa(this.api);this.sa.J("onReady",this.api)}else this.Va=S(u(this.ra,this),50)}};
function Tj(a,b,c){var d=b[c];return function(){try{return a.Ia=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Ia=e,Jg(e,"WARNING"))}}}
function Gj(a){a.F=!1;if(a.za)for(var b in a.g)a.za(b,a.g[b]);for(var c in a.xa)Lg(parseInt(c,10));a.xa={};a.la=null;a.za=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=u(a.fa,a);a.api.removeEventListener=u(a.Mc,a);a.api.destroy=u(a.dispose,a);a.api.getLastError=u(a.Jb,a);a.api.getPlayerType=u(a.Kb,a);a.api.getCurrentVideoConfig=u(a.Ib,a);a.api.loadNewVideoConfig=u(a.Tc,a);a.api.isReady=u(a.Xb,a)}
k.Xb=function(){return this.F};
k.fa=function(a,b){if(!this.V()){var c=Lj(this,b);if(c){if(!fb(this.Eb,a)&&!this.g[a]){var d=Uj(this,a);this.la&&this.la(a,d)}this.sa.subscribe(a,c);"onReady"==a&&this.F&&S(ra(c,this.api),0)}}};
k.Mc=function(a,b){if(!this.V()){var c=Lj(this,b);c&&ng(this.sa,a,c)}};
function Lj(a,b){var c=b;if("string"==typeof b){if(a.Ba[b])return a.Ba[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.Ba[b]=c}return c?c:null}
function Uj(a,b){var c="ytPlayer"+b+a.ya;a.g[b]=c;n[c]=function(c){var d=S(function(){if(!a.V()){a.sa.J(b,c);var e=a.xa,g=String(d);g in e&&delete e[g]}},0);
Aa(a.xa,String(d))};
return c}
k.Db=function(a){a=a?se:re;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.w||b==this.Z||(b.focus(),b!=document.activeElement));)b=a(b)};
k.Sa=function(a){T("a11y-announce",a)};
k.pc=function(a){Nj(this,a)};
k.qc=function(a){T("WATCH_LATER_VIDEO_ADDED",a)};
k.sc=function(a){T("WATCH_LATER_VIDEO_REMOVED",a)};
k.mc=function(){this.Ja||(Le?(this.Ha=fe(document),Ri(this.da,window,"scroll",this.Hc),Ri(this.da,this.i,"touchmove",this.Ec)):(Ri(this.da,this.i,"mousewheel",this.pb),Ri(this.da,this.i,"wheel",this.pb)),this.Ja=!0)};
k.nc=function(){Si(this.da);this.Ja=!1};
k.pb=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Hc=function(){window.scrollTo(this.Ha.j,this.Ha.l)};
k.Ec=function(a){a.preventDefault()};
k.Kb=function(){return this.T||Qj(this)};
k.Jb=function(){return this.Ia};
function Qj(a){return(a=Oj(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Rj(a){var b="dcp";lj.mark&&(Ha(b,"mark_")||(b="mark_"+b),lj.mark(b));var b=yj(),c=Eg();b.dcp&&(b._dcp=b._dcp||[b.dcp],b._dcp.push(c));b.dcp=c;vj().tick_dcp=void 0;Eg();ji("csi_on_gel")?(b=wj(),jj("tick_dcp_"+b)||ej("latencyActionTicked",{tickName:"dcp",clientActionNonce:b},void 0),b=!0):b=!1;if(!b&&!r("yt.timing.pingSent_")&&(c=R("TIMING_ACTION",void 0),b=yj(),r("ytglobal.timingready_")&&c&&b._start&&xj())){var c=!0,d=R("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in
b)){c=!1;break}c&&zj()}a.cancel();Gj(a);a.T=null;a.b&&(a.b.loaded=!1);b=Oj(a);"html5"==Qj(a)?Pj(a)||!Sj(a)?a.L=b:(b&&b.destroy&&b.destroy(),a.L=null):b&&b.destroy&&b.destroy();me(a.i);Si(a.wa);a.w=null;a.Z=null}
k.cancel=function(){if(this.ka){var a=this.ka;this.b.assets.js&&a&&(a=""+la(a),(a=vi[a])&&Vg(a))}Lg(this.Va);this.va=!1};
k.M=function(){Rj(this);if(this.L&&this.b)try{this.L.destroy()}catch(b){Jg(b)}this.Ba=null;for(var a in this.g)n[this.g[a]]=null;this.Ka=this.b=this.api=null;delete this.i;delete this.o;Fj.G.M.call(this)};
function Sj(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Vj={},Wj="player_uid_"+(1E9*Math.random()>>>0);function Xj(a,b){(a=G(a))&&a.style&&(a.style.display=b?"":"none",Se(a,"hid",!b))}
function Yj(a){return(a=G(a))?"none"!=a.style.display&&!N(a,"hid"):!1}
function Zj(a){z(arguments,function(a){!ia(a)||a instanceof Element?Xj(a,!0):z(a,function(a){Zj(a)})})}
function ak(a){z(arguments,function(a){!ia(a)||a instanceof Element?Xj(a,!1):z(a,function(a){ak(a)})})}
;var bk={},ck=!1;function dk(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=xg(zg([a],b))+c;a=a instanceof yb?a:Cb(a);d.href=Ab(a)}
function ek(a){(window.ytspf||{}).enabled?spf.navigate(a):dk(a)}
;function fk(a,b,c,d){a={tipParams:a,currencyCode:b};c&&(a.customTipAmount=c);d&&(a.tipComment=d);return a}
;function gk(a,b,c,d){c={supressError:!!c};a&&(c.overlayHtml=a);b&&(c.errorHtml=b);d&&(c.screenOverlayHtml=d);return c}
function hk(a){var b={offersHtml:a.offers_html,channelsToSubscriptionidMap:a.channels_to_subscription_id_map,channelInfoMap:a.channel_info_map,componentChannels:a.component_channels,isPurchaseNotAvailable:a.not_available,messageHtml:a.message_html,isPlusPageDirectLogin:a.is_plus_page_direct_login,shouldSkipOverlay:a.should_skip_overlay};if(b.shouldSkipOverlay){var c=fk(a.serialized_default_tip_params,a.currency_code);b.skipOverlayConfig={offerId:a.offer_id||"",tipConfig:c}}return b}
;function ik(){M.call(this);this.f=new Q;Ne(this,ra(Oe,this.f))}
y(ik,M);ik.prototype.subscribe=function(a,b,c){return this.V()?0:this.f.subscribe(a,b,c)};
ik.prototype.ja=function(a){return this.V()?!1:this.f.ja(a)};
ik.prototype.J=function(a,b){return this.V()?!1:this.f.J.apply(this.f,arguments)};function jk(){var a=R("DBLCLK_YPC_ACTIVITY_GROUP",void 0),a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+encodeURIComponent(String(R("DBLCLK_ADVERTISER_ID")))+";type="+encodeURIComponent(String(a))+";cat="+encodeURIComponent("brrim580");for(b in void 0)a+=";"+encodeURIComponent(String(b))+"="+encodeURIComponent(String((void 0)[b]));a+=";num="+sa();var b=document.createElement("iframe");b.src=a;b.style.display="none";document.body.appendChild(b)}
;function kk(a,b,c,d,e){ik.call(this);this.i=a.config;this.b=a.itemData;this.L=a.offerData;this.H=b;this.g=c;this.o=d;this.F=a.innertubeRequestParams;this.w=e}
y(kk,ik);kk.prototype.M=function(){this.H.track("dispose-orderprocessor");this.g=null;kk.G.M.call(this)};
function lk(a){var b=R("YPC_TRANSACTION_URL",void 0),c={oid:a.L.offerId,ps:"C"};a.g&&(c.oc=a.g);a.o&&(c.pp=a.o);var d=R("EVENT_ID",void 0),d={flow_uuid:Eh(a.H),ei:d},e=a.i.flowType;if("T"==e)c.action_tip=1,Fh(a.H,{registerTransactionAction:"action_tip"}),c.ii=a.b.itemId,c.it=a.b.itemType,e=a.i.tipConfig,c.irp=e.tipParams,e.tipComment&&(c.comment=e.tipComment);else if("U"==e)if(d={action_register_upgrade:1},a.w)c.tp=a.w;else{a.J("ypc-process-order-failure");return}else c.action_register=1,Fh(a.H,{registerTransactionAction:"action_register"}),
c.eiid=a.b.itemId,c.it=a.b.itemType,c.cc=a.i.couponCode,a.F&&(c.irp=a.F);a.H.track("begin-register-transaction");qh(b,{method:"POST",context:a,R:c,na:d,O:function(a,b){switch(b.status){case 0:var c=b.subscription_id,d=null;c&&(d=b.channel_info);c={subscriptionId:c||null,channelInfo:d};b.post_purchase_redirect_url&&Hg("YPC_POST_PURCHASE_REDIRECT_URL",b.post_purchase_redirect_url);b.red_theme&&Hg("YPC_RED_THEME",b.red_theme);var e;b.post_purchase_screen_overlay_html?e=gk(null,null,!1,b.post_purchase_screen_overlay_html):
b.post_purchase_overlay_html&&(e=gk(b.post_purchase_overlay_html));this.H.track("purchase-insert-success");this.J("ypc-process-order-success",c,e);break;case 4:this.H.track("purchase-insert-sync-required");this.J("ypc-process-order-failure");break;case 2:this.H.track("purchase-insert-rejected");this.J("ypc-process-order-failure");break;default:this.H.track("purchase-insert-failure"),this.J("ypc-process-order-failure")}},
onError:function(a,b){Gh(this.H,{http_status:a.status,servlet_status:b&&b.status});this.H.track("purchase-insert-failure");this.J("ypc-process-order-failure")}})}
;function mk(){var a={},b=R("PAGE_NAME");Da(a,{label:"mb-api-loading",pageName:b});a=lh(a);Bh("ypc-checkout",a)}
function nk(){return new Dh({flowName:"ypc-checkout"})}
function ok(a){return{itemType:a.itemData.itemType,itemId:a.itemData.itemId,offerId:a.offerData.offerId}}
;function pk(){this.b=null}
fa(pk);pk.prototype.load=function(a){mk();this.b=R("YPC_MB_URL",void 0);xi(this.b,u(function(){a&&a()},this))};
function qk(a,b,c,d,e,f,g){a.load(u(function(){try{f&&f("orchestration-script-init");var a=r("payments.business.integration"),l=a.standaloneContextAuthId.forUserId(),m=a.mashupMode.popup("buyFlowDivId").usingDraggableDialog().usingPreferredWidth(600);a.bootstrap.fromPaymentsUrl(this.b);var p=a.bootstrap.asMashupMode(m),x=R("YPC_GB_LANGUAGE"),A=R("SESSION_INDEX");p.usingGaiaIndex(A).usingLocale(x).usingDefaultActivityStatusChangeHandler().usingStyle(":md;pc=#444;ac=#2793e6").usingBaseZIndex(2E9);g&&
p.usingServerAnalyticsEventHandler(g);var I=p.inStandaloneContext(l);f&&f("orchestration-script-bootstrapper");var w=I.buyFlow(c).withEncryptedParameters(b);f&&f("orchestration-script-buy-flow-enc-params");w.load(d,e);f&&f("orchestration-script-buy-flow-load")}catch(L){throw Jg(L,void 0,void 0,void 0,!0),L;}},a))}
;function rk(a,b){U.call(this,2,arguments);this.b=b}
y(rk,U);function sk(a){U.call(this,1,arguments);this.b=a}
y(sk,U);function tk(a,b,c,d){U.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(tk,U);function uk(a,b){U.call(this,1,arguments);this.b=b||null}
y(uk,U);function vk(a){U.call(this,1,arguments)}
y(vk,U);var wk=new Yg("ypc-guide-sync-success",rk),xk=new Yg("ypc-purchase-success",tk),yk=new Yg("ypc-subscription-cancel",vk),zk=new Yg("ypc-subscription-cancel-success",uk);function Ak(a,b,c){ik.call(this);this.g=a.config;this.i=a.itemData;this.o=a.offerData;this.H=b;this.Ga=a;this.b=null;this.F=a.innertubeRequestParams;this.w=c}
y(Ak,ik);k=Ak.prototype;k.M=function(){this.H.track("dispose-offerpurchase");Bk(this);Ak.G.M.call(this)};
function Ck(a){var b=R("YPC_TRANSACTION_URL",void 0),c={oid:a.o.offerId},d=R("EVENT_ID",void 0),d={flow_uuid:Eh(a.H),ei:d},e=a.g.flowType;if("T"==e){c.ii=a.i.itemId;c.it=a.i.itemType;var f=a.g.tipConfig;c.action_request_tip=1;Fh(a.H,{requestTransactionAction:"action_request_tip"});c.tp=f.tipParams;c.cur=f.currencyCode;f.customTipAmount&&(c.ca=f.customTipAmount)}else c.action_request=1,a.F&&(c.irp=a.F),Fh(a.H,{requestTransactionAction:"action_request"});a.g.couponCode&&(c.cc=a.g.couponCode);qh(b,{method:"POST",
na:d,R:c,context:a,O:function(a,b){this.H.track("dynamic-success");Dk(this,b.encrypted_purchase_params)},
onError:function(a,b){var c=b.innertube_error_code,d=b.error||null;this.H.track("dynamic-error",{dynamicErrorStatus:b.status});var f="D"==e&&"start_payment"==this.Ga.transactionAction;"T"==e&&"INVALID_VALUE"==c?this.J("ypc-tip-validation-error",{errorMessage:d}):f&&"FORBIDDEN"==c?this.J("ypc-direct-purchase-error",{errorMessage:d}):Ek(this,d)}})}
function Dk(a,b){var c=pk.C();a.H.track("mb-start");a.J("ypc-purchase-wallet-start");var d=u(a.w.f,a.w,a.i,a.o);qk(c,b,u(a.jc,a),u(a.lc,a),u(a.kc,a),u(a.fc,a),d)}
k.jc=function(a){this.J("ypc-purchase-wallet-end");a&&a.checkoutOrderId?(a=a.checkoutOrderId,this.H.track("mb-complete",{orderId:a}),Fk(this,a,null,null)):a&&a.integratorData?Fk(this,null,a.integratorData,null):(a=a.error,this.H.track("mb-complete-error",{mbCompleteErrorCode:a}),Ek(this,null,"-1"==String(a)))};
k.lc=function(){this.H.track("mb-ready")};
k.kc=function(a){this.J("ypc-purchase-wallet-end");this.H.track("mb-error");this.H.track("mb-error",{mbFailureErrorName:a.name,mbFailureErrorMessage:a.message?a.message.substring(0,1400):""});Ek(this,null,!0)};
k.fc=function(a){this.H.track("mb-"+a)};
function Fk(a,b,c,d){a.b=new kk(a.Ga,a.H,b,c,d);a.b&&(a.b.subscribe("ypc-process-order-success",a.wc,a),a.b.subscribe("ypc-process-order-failure",a.uc,a));lk(a.b)}
function Ek(a,b,c){a.J("ypc-post-purchase-init",gk(null,b,c))}
k.wc=function(a,b){Bk(this);jk();var c=this.g.flowType,d=this.i.itemId,e=this.i.itemType,f={it:e,ii:d};b?this.J("ypc-post-purchase-init",b):("T"==c?(f.action_tip_flow=1,Fh(this.H,{postPurchaseAction:"action_tip_flow"})):f.oid=this.o.offerId,this.H.track("post-purchase-request"),c=R("YPC_POST_PURCHASE_URL",void 0),"YPC_RED_THEME"in Gg&&(f.red_theme=R("YPC_RED_THEME",void 0)),qh(c,{method:"GET",context:this,na:f,Y:function(a,b){this.J("ypc-post-purchase-init",gk(b.html,b.error))}}));
dh(xk,new tk({itemType:e,itemId:d},a,e,d))};
k.uc=function(){Bk(this);this.J("ypc-post-purchase-init",gk())};
function Bk(a){a.b&&(a.b.dispose(),a.b=null)}
;function Gk(a){this.g=R("YPC_TRANSACTION_URL",void 0);this.b=a}
Gk.prototype.f=function(a,b,c){a={action_log_payment_server_analytics:1,backend_analytics_event:c,it:a.itemType,ii:a.itemId,oid:b.offerId};this.b&&(a.session_token=this.b);qh(this.g,{method:"POST",R:a,context:this})};function Hk(a){this.f=a||window;this.b=[]}
function Y(a,b,c,d,e){d=u(d,a.f);b=hi(b,c,d,e);a.b.push(b)}
;function Ik(a){M.call(this);this.g=new Hk(this);this.b=J("ypc-offer-overlay-container");this.f=a;this.w=[];this.F=[];this.ma();this.ua()}
y(Ik,M);Ik.prototype.M=function(){var a=this.g;X(a.b);a.b.length=0;Vg(this.w);this.w.length=0;gh(this.F);this.F.length=0;Ik.G.M.call(this)};
Ik.prototype.ma=function(){Y(this.g,this.b,"click",this.aa,"ypc-offer-overlay-close")};
Ik.prototype.ua=function(){this.w.push(Qg("dispose",this.aa,this))};
Ik.prototype.aa=function(a){a instanceof ci&&a.preventDefault();this.f&&this.f.ha();this.dispose()};function Jk(a,b){this.i=J(a);this.g=b;this.b=this.f=null}
y(Jk,M);k=Jk.prototype;k.start=function(a,b,c,d,e,f){this.b=S(u(this.abort,this,a),3E5);a=u(this.Nc,this,a,b,c,d,e,f);a=ja(a)?{callback:a}:a||{};a._c&&a._c.jsl&&a._c.jsl.h||Da(a,{_c:{jsl:{h:R("GAPI_HINT_PARAMS",void 0)}}});(a.gapiHintOverride||R("GAPI_HINT_OVERRIDE"))&&(b=mh(document.location.href).gapi_jsh)&&Da(a,{_c:{jsl:{h:b}}});Pd("family_creation",a)};
k.abort=function(a){this.b&&(this.b&&(Lg(this.b),this.b=null),a.f.X(),ne(this.f))};
k.Nc=function(a,b,c,d,e,f){var g=R("YTR_FAMILY_CREATION_URL");ua(f)&&(g=kh(g,f||{},!1));f=r("gapi.config.update");ja(f)&&f("iframes/family_creation/url",g);a={clientId:3,initialflow:[4,5,6,7],authUser:R("SESSION_INDEX")||0,onFlowComplete:u(this.ic,this,a,d),OnError:u(this.hc,this,a,e),onReady:u(this.xc,this,a,c)};b&&(a.hl=b);b=r("gapi.family_creation.render");ja(b)&&(this.f||(this.f=J(this.g),this.f||(this.f=ie("div",this.g),this.i.appendChild(this.f))),b(this.f,a))};
k.ic=function(a,b){a.aa(null,!1,b)};
k.hc=function(a,b){a.aa(null,!1,b)};
k.xc=function(a,b){if(this.b){this.b&&(Lg(this.b),this.b=null);if(b){var c=r("gapi.family_creation.setConfig");ja(c)&&c(0,b)}a.f.W("ypc-offer-overlay-show-unicorn-iframe-in-content")}};var Kk={},Lk="ontouchstart"in document;function Mk(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Ge(c,function(a){return N(a,b)},d)}
function Nk(a){var b;var c="mouseover"==a.type&&"mouseenter"in Kk||"mouseout"==a.type&&"mouseleave"in Kk;var d=a.type in Kk||c;if("HTML"!=a.target.tagName&&d){if(c){c="mouseover"==a.type?"mouseenter":"mouseleave";var d=Kk[c],e;for(e in d.f)(b=Mk(c,e,a.target))&&!Ge(a.relatedTarget,function(a){return a==b})&&d.J(e,b,c,a)}if(c=Kk[a.type])for(e in c.f)(b=Mk(a.type,e,a.target))&&c.J(e,b,a.type,a)}}
W(document,"blur",Nk,!0);W(document,"change",Nk,!0);W(document,"click",Nk);W(document,"focus",Nk,!0);W(document,"mouseover",Nk);W(document,"mouseout",Nk);W(document,"mousedown",Nk);W(document,"keydown",Nk);W(document,"keyup",Nk);W(document,"keypress",Nk);W(document,"cut",Nk);W(document,"paste",Nk);Lk&&(W(document,"touchstart",Nk),W(document,"touchend",Nk),W(document,"touchcancel",Nk));function Ok(a){this.o=a;this.F={};this.N=[];this.L=[]}
k=Ok.prototype;k.K=function(a){return K(a,Z(this))};
function Z(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
k.unregister=function(){Vg(this.N);this.N.length=0;gh(this.L);this.L.length=0};
k.init=ea;k.dispose=ea;function Pk(a,b,c){a.N.push(Qg(b,c,a))}
function Qk(a,b,c,d){d=Z(a,d);var e=u(c,a);b in Kk||(Kk[b]=new Q);Kk[b].subscribe(d,e);a.F[c]=e}
function Rk(a,b,c,d){if(b in Kk){var e=Kk[b];ng(e,Z(a,d),a.F[c]);0>=pg(e)&&(e.dispose(),delete Kk[b])}delete a.F[c]}
k.oa=function(a,b,c){var d=this.D(a,b);if(d&&(d=r(d))){var e=jb(arguments,2);ib(e,0,0,a);d.apply(null,e)}};
k.D=function(a,b){return V(a,b)};function Sk(){Ok.call(this,"button");this.b=null;this.g=[];this.f={}}
y(Sk,Ok);fa(Sk);k=Sk.prototype;k.register=function(){Qk(this,"click",this.Ya);Qk(this,"keydown",this.gb);Qk(this,"keypress",this.hb);Pk(this,"page-scroll",this.Nb)};
k.unregister=function(){Rk(this,"click",this.Ya);Rk(this,"keydown",this.gb);Rk(this,"keypress",this.hb);Tk(this);this.f={};Sk.G.unregister.call(this)};
k.Ya=function(a){a&&!a.disabled&&(Uk(this,a),this.click(a))};
k.gb=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=Vk(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=we(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.dc;else"table"==e&&(f=this.bc);f&&Wk(this,a,b,c,u(f,this))}}};
k.Nb=function(){var a=this.f;if(0!=ua(a))for(var b in a){var c=a[b],d=K(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;Xk(this,d,c,!0)}};
function Wk(a,b,c,d,e){var f=Yj(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Yk(a,c)){if(da(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;"a"==b.tagName.toLowerCase()?dk(b.href):ii(b)}else g&&Zk(a,b);else f?27==d.keyCode?(Yk(a,c),Zk(a,b)):e(b,c,d):(a=N(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(ii(b),d.preventDefault()))}
k.hb=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=Vk(this,a),Yj(a)&&c.preventDefault())};
function Yk(a,b){var c=Z(a,"menu-item-highlight"),d=J(c,b);d&&P(d,c);return d}
function $k(a,b,c){O(c,Z(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+la(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.bc=function(a,b,c){var d=Yk(this,b);if(d){var e=Wh("table",b);b=$d("td",null,e);d=al(d,b,$d("td",null,Wh("tr",e)).length,c);-1!=d&&($k(this,a,b[d]),c.preventDefault())}};
k.dc=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Yk(this,b);d&&(b=bb($d("li",null,b),Yj),$k(this,a,b[al(d,b,1,c)]),c.preventDefault())}};
function al(a,b,c,d){var e=b.length;a=ab(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function bl(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=Z(a,"menu-mask"),ak(c),b.iframeMask=c);return c}
function Xk(a,b,c,d){var e=K(b,Z(a,"group")),f=!!a.D(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=eg(b);if(N(b,Z(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(p){}}N(b,"flip")&&(N(b,Z(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.D(b,"button-has-sibling-menu")?l=Zf(e):a.D(b,"button-menu-root-container")&&(l=cl(a,b));C&&!dc("8")&&(l=null);if(l){var m=eg(l);m=new Rf(-m.top,m.left,m.top,-m.left)}l=new F(0,1);N(b,Z(a,"center-menu"))&&(l.j-=Math.round((cg(c).width-cg(b).width)/
2));d&&(l.l+=fe(document).l);if(a=bl(a,b))b=cg(c),a.style.width=b.width+"px",a.style.height=b.height+"px",kg(e,f,a,g,l,m,197),d&&Tf(a,"position","fixed");kg(e,f,c,g,l,m,197)}
function cl(a,b){if(a.D(b,"button-menu-root-container")){var c=a.D(b,"button-menu-root-container");return K(b,c)}return document.body}
k.xb=function(a){if(a){var b=Vk(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.D(a,"button-has-sibling-menu")?c=a.parentNode:c=cl(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=bl(this,a);d&&c.appendChild(d);(c=!!this.D(a,"button-menu-fixed"))&&(this.f[Yh(a).toString()]=b);Xk(this,a,b,c);Ug("yt-uix-button-menu-before-show",a,b);Zj(b);d&&Zj(d);
this.oa(a,"button-menu-action",!0);O(a,Z(this,"active"));b=u(this.wb,this,a,!1);d=u(this.wb,this,a,!0);c=u(this.Qc,this,a,void 0);this.b&&Vk(this,this.b)==Vk(this,a)||Tk(this);T("yt-uix-button-menu-show",a);X(this.g);this.g=[W(document,"click",d),W(document,"contextmenu",b),W(window,"resize",c)];this.b=a}}};
function Zk(a,b){if(b){var c=Vk(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");ak(c);a.oa(b,"button-menu-action",!1);var d=bl(a,b),e=Yh(c).toString();delete a.f[e];S(function(){d&&d.parentNode&&(ak(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=K(b,Z(a,"group")),f=[Z(a,"active")];
e&&f.push(Z(a,"group-active"));Re(b,f);T("yt-uix-button-menu-hide",b);X(a.g);a.g.length=0}}
k.Qc=function(a,b){var c=Vk(this,a);if(c){b&&(b instanceof Jb?c.innerHTML=Lb(b):ve(c,b));var d=!!this.D(a,"button-menu-fixed");Xk(this,a,c,d)}};
k.wb=function(a,b,c){c=gi(c);var d=K(c,Z(this));if(d){var d=Vk(this,d),e=Vk(this,a);if(d==e)return}var d=K(c,Z(this,"menu")),e=d==Vk(this,a),f=N(c,Z(this,"menu-item")),g=N(c,Z(this,"menu-close"));if(!d||e&&(f||g))Zk(this,a),d&&b&&this.D(a,"button-menu-indicate-selected")&&((a=J(Z(this,"content"),a))&&ve(a,De(c)),dl(this,d,c))};
function dl(a,b,c){var d=Z(a,"menu-item-selected");z(H(d,b),function(a){P(a,d)});
O(c.parentNode,d)}
function Vk(a,b){if(!b.widgetMenu){var c=a.D(b,"button-menu-id"),c=c&&G(c),d=Z(a,"menu");c?Qe(c,[d,Z(a,"menu-external")]):c=J(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return N(a,Z(this,"toggled"))};
function Uk(a,b){if(a.D(b,"button-toggle")){var c=K(b,Z(a,"group")),d=Z(a,"toggled"),e=N(b,d);if(c&&a.D(c,"button-toggle-group")){var f=a.D(c,"button-toggle-group");z(H(Z(a),c),function(a){a!=b||"optional"==f&&e?(P(a,d),a.removeAttribute("aria-pressed")):(O(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Ue(b,d)}}
k.click=function(a){if(Vk(this,a)){var b=Vk(this,a);if(b){var c=K(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(Zk(this,c),S(u(this.xb,this,a),1)):Yj(b)?Zk(this,a):this.xb(a)}a.focus()}this.oa(a,"button-action")};
function Tk(a){a.b&&Zk(a,a.b)}
;function el(a){Ok.call(this,a);this.g=null}
y(el,Ok);k=el.prototype;k.K=function(a){var b=Ok.prototype.K.call(this,a);return b?b:a};
k.register=function(){Pk(this,"yt-uix-kbd-nav-move-out-done",this.ea)};
k.dispose=function(){el.G.dispose.call(this);fl(this)};
k.D=function(a,b){var c=el.G.D.call(this,a,b);return c?c:(c=el.G.D.call(this,a,"card-config"))&&(c=r(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.K(a);if(b){O(b,Z(this,"active"));var c=gl(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;hl(this,a,c);var d=Z(this,"card-visible"),e=this.D(a,"card-delegate-show")&&this.D(b,"card-action");this.oa(b,"card-action",a);this.g=a;ak(c);S(u(function(){e||(Zj(c),T("yt-uix-card-show",b,a,c));il(c);O(c,d);T("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function gl(a,b,c){var d=c||b,e=Z(a,"card");c=jl(a,d);var f=G(Z(a,"card")+Yh(d));if(f)return a=J(Z(a,"card-body"),f),ue(a,c)||(ne(c),a.appendChild(c)),f;f=document.createElement("div");f.id=Z(a,"card")+Yh(d);f.className=e;(d=a.D(d,"card-class"))&&Qe(f,d.split(/\s+/));d=document.createElement("div");d.className=Z(a,"card-border");b=a.D(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=Z(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;ne(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function hl(a,b,c){var d=a.D(b,"orientation")||"horizontal",e=J(Z(a,"anchor"),b)||b,f=a.D(b,"position"),g=!!a.D(b,"force-position"),h=a.D(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var p=13;var x=8}else m&&!l?(p=12,x=9):!m&&l?(p=9,x=12):(p=8,x=13);var A=fg(document.body),f=fg(b);A!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var I=new F(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,I=new F(b.offsetWidth+6,-12);var w=cg(c),f=Math.min(f,
(d?w.height:w.width)-24-6);6>f&&(f=6,d?I.l+=12-b.offsetHeight/2:I.j+=12-b.offsetWidth/2);w=null;g||(w=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");Se(c,b,m);Se(c,a,l);w=kg(e,p,c,x,I,null,w);!g&&w&&(w&48&&(m=!m,p^=4,x^=4),w&192&&(l=!l,p^=1,x^=1),Se(c,b,m),Se(c,a,l),kg(e,p,c,x,I));h&&(e=parseInt(c.style.top,10),g=fe(document).l,Tf(c,"position","fixed"),Tf(c,"top",e-g+"px"));A&&(c.style.right="",e=eg(c),e.left=e.left||parseInt(c.style.left,10),g=de(window),c.style.left="",c.style.right=g.width-e.left-
e.width+"px");e=J("yt-uix-card-body-arrow",c);g=J("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!A&&m||A&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=J("yt-uix-card-arrow",c);m=J("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?cg(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
k.ea=function(a){if(a=this.K(a)){var b=G(Z(this,"card")+Yh(a));b&&(P(a,Z(this,"active")),P(b,Z(this,"card-visible")),ak(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(ne(b.cardMask),b.cardMask=null))}};
function fl(a){a.g&&a.ea(a.g)}
k.Pc=function(a,b){var c=this.K(a);if(c){if(b){var d=jl(this,c);if(!d)return;b instanceof Jb?d.innerHTML=Lb(b):ve(d,b)}N(c,Z(this,"active"))&&(c=gl(this,a,c),hl(this,a,c),Zj(c),il(c))}};
k.isActive=function(a){return(a=this.K(a))?N(a,Z(this,"active")):!1};
function jl(a,b){var c=b.cardContentNode;if(!c){var d=Z(a,"content"),e=Z(a,"card-content");(c=(c=a.D(b,"card-id"))?G(c):J(d,b))||(c=document.createElement("div"));var f=c;P(f,d);O(f,e);b.cardContentNode=c}return c}
function il(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Qe(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function kl(){Ok.call(this,"kbd-nav")}
var ll;y(kl,Ok);fa(kl);k=kl.prototype;k.register=function(){Qk(this,"keydown",this.eb);Pk(this,"yt-uix-kbd-nav-move-in",this.mb);Pk(this,"yt-uix-kbd-nav-move-in-to",this.ec);Pk(this,"yt-uix-kbd-move-next",this.nb);Pk(this,"yt-uix-kbd-nav-move-to",this.Da)};
k.unregister=function(){Rk(this,"keydown",this.eb);X(ll)};
k.eb=function(a,b,c){var d=c.keyCode;if(a=K(a,Z(this)))switch(d){case 13:case 32:this.mb(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=We(a,"kbdNavMoveOut");!c;){c=K(a.parentElement,Z(this));if(!c)break a;c=We(c,"kbdNavMoveOut")}c=G(c);this.Da(c);T("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&N(a,Z(this,"list")))switch(d){case 40:this.nb(b,a);break;case 38:d=document.activeElement==a,a=ml(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),nl(this,a[b]))}c.preventDefault()}};
k.mb=function(a){var b=We(a,"kbdNavMoveIn"),b=G(b);ol(this,a,b);this.Da(b)};
k.ec=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}ol(this,c,a);this.Da(a)};
k.Da=function(a){if(a)if(Ae(a))a.focus();else{var b=we(a,function(a){return te(a)?Ae(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function ol(a,b,c){b&&c&&(O(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Ve&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
k.nb=function(a,b){var c=document.activeElement==b,d=ml(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),nl(this,d[c]))};
function nl(a,b){if(b){var c=Fe(b,"LI");c&&(O(c,Z(a,"highlight")),ll=W(b,"blur",u(function(a){P(a,Z(this,"highlight"));X(ll)},a,c)))}}
function ml(a){if("UL"!=a.tagName.toUpperCase())return[];a=bb(qe(a),function(a){return"LI"==a.tagName.toUpperCase()});
return bb(cb(a,function(a){return Yj(a)?we(a,function(a){return te(a)?Ae(a):!1}):!1}),function(a){return!!a})}
;function pl(){Ok.call(this,"menu");this.f=this.b=null;this.g={};this.w={};this.i=null}
y(pl,Ok);fa(pl);function ql(a){var b=pl.C();if(N(a,Z(b)))return a;var c=b.K(a);return c?c:K(a,Z(b,"content"))==b.b?b.f:null}
k=pl.prototype;k.register=function(){Qk(this,"click",this.yb);Qk(this,"mouseenter",this.Lb);Pk(this,"page-scroll",this.Ob);Pk(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.K(a);rl(this,a)});
this.i=new Q};
k.unregister=function(){Rk(this,"click",this.yb);this.f=this.b=null;X(lb(va(this.g)));this.g={};ta(this.w,function(a){ne(a)},this);
this.w={};Oe(this.i);this.i=null;pl.G.unregister.call(this)};
k.yb=function(a,b,c){a&&(b=sl(this,a),!b.disabled&&Zh(c.target,b)&&tl(this,a))};
k.Lb=function(a,b,c){a&&N(a,Z(this,"hover"))&&Zh(c.target,sl(this,a))&&tl(this,a,!0)};
k.Ob=function(){this.b&&this.f&&ul(this,this.f,this.b)};
function ul(a,b,c){var d=vl(a,b);if(d){var e=cg(c);if(e instanceof Vd){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=bg(e,!0);d.style.height=bg(f,!0)}c==a.b&&(e=9,f=8,N(b,Z(a,"reversed"))&&(e^=1,f^=1),N(b,Z(a,"flipped"))&&(e^=4,f^=4),a=new F(0,1),d&&kg(b,e,d,f,a,null,197),kg(b,e,c,f,a,null,197))}
function tl(a,b,c){wl(a,b)&&!c?rl(a,b):(xl(a,b),!a.b||Zh(b,a.b)?a.zb(b):mg(a.i,u(a.zb,a,b)))}
k.zb=function(a){if(a){var b=yl(this,a);if(b){Ug("yt-uix-menu-before-show",a,b);this.b?Zh(a,this.b)||rl(this,this.f):(this.f=a,this.b=b,N(a,Z(this,"sibling-content"))||(ne(b),document.body.appendChild(b)),b.style.minWidth=sl(this,a).offsetWidth-2+"px");var c=vl(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);P(b,Z(this,"content-hidden"));ul(this,a,b);Qe(sl(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);T("yt-uix-menu-show",a);zl(b);Al(this,a);T("yt-uix-kbd-nav-move-in-to",
b);var d=u(this.Uc,this,a),e=u(this.Zb,this,a),c=la(a).toString();this.g[c]=[W(b,"click",e),W(document,"click",d)];N(a,Z(this,"indicate-selected"))&&(d=u(this.ac,this,a),this.g[c].push(W(b,"click",d)));N(a,Z(this,"hover"))&&(a=u(this.Mb,this,a),this.g[c].push(W(document,"mousemove",a)))}}};
k.Mb=function(a,b){var c=gi(b);c&&(Zh(c,sl(this,a))||Bl(this,c)||Cl(this,a))};
k.Uc=function(a,b){var c;if(c=gi(b)){if(Bl(this,c)){var d=K(c,Z(this,"content"));var e=Fe(c,"LI");e&&d&&ue(d,e)&&Ug("yt-uix-menu-item-clicked",c);c=K(c,Z(this,"close-on-select"));if(!c)return;d=ql(c)}rl(this,d||a)}};
function xl(a,b){if(b){var c=K(b,Z(a,"content"));c&&z(H(Z(a),c),function(a){!Zh(a,b)&&wl(this,a)&&Cl(this,a)},a)}}
function rl(a,b){if(b){var c=[];c.push(b);var d=yl(a,b);d&&(d=H(Z(a),d),d=gb(d),c=c.concat(d),z(c,function(a){wl(this,a)&&Cl(this,a)},a))}}
function Cl(a,b){if(b){var c=yl(a,b);Re(sl(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);O(c,Z(a,"content-hidden"));var d=yl(a,b);d&&be(d,{"aria-expanded":"false"});(d=vl(a,b))&&d.parentNode&&ne(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.i&&a.i.J("ROOT_MENU_REMOVED"));T("yt-uix-menu-hide",b);c=la(b).toString();X(a.g[c]);delete a.g[c]}}
k.Zb=function(a,b){var c=gi(b);c&&Dl(this,a,c)};
k.ac=function(a,b){var c=gi(b);if(c){var d=sl(this,a);if(d&&(c=Fe(c,"LI")))if(c=De(c).trim(),d.hasChildNodes()){var e=Sk.C();(d=J(Z(e,"content"),d))&&ve(d,c)}else ve(d,c)}};
function Al(a,b){var c=yl(a,b);if(c){z(c.children,function(a){"LI"==a.tagName&&be(a,{role:"menuitem"})});
be(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+la(c),c.id=d);(c=sl(a,b))&&be(c,{"aria-controls":d})}}
function Dl(a,b,c){var d=yl(a,b);d&&N(b,Z(a,"checked"))&&(a=Fe(c,"LI"))&&(a=J("yt-ui-menu-item-checked-hid",a))&&(z(H("yt-ui-menu-item-checked",d),function(a){Te(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Te(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function wl(a,b){var c=yl(a,b);return c?!N(c,Z(a,"content-hidden")):!1}
function zl(a){z($d("UL",null,a),function(a){a.tabIndex=0;var b=kl.C();Qe(a,[Z(b),Z(b,"list")])})}
function yl(a,b){var c=V(b,"menu-content-id");return c&&(c=G(c))?(Qe(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.f?a.b:J(Z(a,"content"),b)}
function vl(a,b){var c=la(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];z(Pe(b),function(a){e.push(a+"-mask")});
Qe(d,e);a.w[c]=d}return d||null}
function sl(a,b){return J(Z(a,"trigger"),b)}
function Bl(a,b){return Zh(b,a.b)||Zh(b,a.f)}
;function El(){el.call(this,"clickcard");this.b={};this.f={}}
y(El,el);fa(El);k=El.prototype;k.register=function(){El.G.register.call(this);Qk(this,"click",this.ab,"target");Qk(this,"click",this.Za,"close")};
k.unregister=function(){El.G.unregister.call(this);Rk(this,"click",this.ab,"target");Rk(this,"click",this.Za,"close");for(var a in this.b)X(this.b[a]);this.b={};for(a in this.f)X(this.f[a]);this.f={}};
k.ab=function(a,b,c){c.preventDefault();b=Fe(c.target,"button");b&&b.disabled||(a=(b=this.D(a,"card-target"))?Zd(b):a,b=this.K(a),this.D(b,"disabled")||(N(b,Z(this,"active"))?(this.ea(a),P(b,Z(this,"active"))):(this.show(a),O(b,Z(this,"active")))))};
k.show=function(a){El.G.show.call(this,a);var b=this.K(a),c=la(a).toString();if(!V(b,"click-outside-persists")){if(this.b[c])return;var b=W(document,"click",u(this.bb,this,a)),d=W(window,"blur",u(this.bb,this,a));this.b[c]=[b,d]}a=W(window,"resize",u(this.Pc,this,a,void 0));this.f[c]=a};
k.ea=function(a){El.G.ea.call(this,a);a=la(a).toString();var b=this.b[a];b&&(X(b),this.b[a]=null);if(b=this.f[a])X(b),delete this.f[a]};
k.bb=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=K(b.target,c)||K(ql(b.target),c));(d=d||K(document.activeElement,c)||K(ql(document.activeElement),c))||this.ea(a)};
k.Za=function(a){(a=K(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.ea(a)};function Fl(){el.call(this,"hovercard")}
y(Fl,el);fa(Fl);k=Fl.prototype;k.register=function(){Qk(this,"mouseenter",this.ib,"target");Qk(this,"mouseleave",this.kb,"target");Qk(this,"mouseenter",this.jb,"card");Qk(this,"mouseleave",this.lb,"card")};
k.unregister=function(){Rk(this,"mouseenter",this.ib,"target");Rk(this,"mouseleave",this.kb,"target");Rk(this,"mouseenter",this.jb,"card");Rk(this,"mouseleave",this.lb,"card")};
k.ib=function(a){if(Gl!=a){Gl&&(this.ea(Gl),Gl=null);var b=u(this.show,this,a),c=parseInt(this.D(a,"delay-show"),10),b=S(b,-1<c?c:200);Uh(a,"card-timer",b.toString());Gl=a;a.alt&&(Uh(a,"card-alt",a.alt),a.alt="");a.title&&(Uh(a,"card-title",a.title),a.title="")}};
k.kb=function(a){var b=parseInt(this.D(a,"card-timer"),10);Lg(b);this.K(a).isCardHidable=!0;b=parseInt(this.D(a,"delay-hide"),10);b=-1<b?b:200;S(u(this.Pb,this,a),b);if(b=this.D(a,"card-alt"))a.alt=b;if(b=this.D(a,"card-title"))a.title=b};
k.Pb=function(a){this.K(a).isCardHidable&&(this.ea(a),Gl=null)};
k.jb=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.lb=function(a){a&&this.ea(a.cardTargetNode)};
var Gl=null;function Hl(a,b,c,d,e,f){this.b=a;this.F=null;this.g=J("yt-dialog-fg",this.b)||this.b;if(a=J("yt-dialog-title",this.g)){var g="yt-dialog-title-"+la(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.T=J("yt-dialog-focus-trap",this.b);this.Z=!1;this.i=new Q;this.N=[];this.N.push(hi(this.b,"click",u(this.gc,this),"yt-dialog-dismiss"));this.N.push(W(this.T,"focus",u(this.Hb,this),!0));Il(this);this.ba=b;this.ka=c;this.da=d;this.L=e;this.la=
f;this.w=this.o=null}
var Jl={LOADING:"loading",Wc:"content",kd:"working"};function Kl(a,b){a.V()||a.i.subscribe("post-all",b)}
function Il(a){a=J("yt-dialog-fg-content",a.b);var b=[];ta(Jl,function(a){b.push("yt-dialog-show-"+a)});
Re(a,b);O(a,"yt-dialog-show-content")}
k=Hl.prototype;
k.show=function(){if(!this.V()){this.F=document.activeElement;if(!this.da){this.f||(this.f=G("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=de(a).height,ee(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Zj(this.f)}this.fb();c=Ll(this);Ml(c);this.o=W(document,"keydown",u(this.Yb,this));c=this.b;d=Qg("player-added",this.fb,this);Uh(c,"player-ready-pubsub-key",d);this.ka&&(this.w=W(document,"click",u(this.Ic,this)));Zj(this.b);this.g.setAttribute("tabindex","0");Nl(this);this.L||O(document.body,"yt-dialog-active");Tk(Sk.C());fl(El.C());fl(Fl.C());T("yt-ui-dialog-show-complete",this)}};
function Ol(){return db(H("yt-dialog"),function(a){return Yj(a)})}
k.fb=function(){this.la||$h(this.b)};
function Ll(a){var b=$d("iframe",null,a.b);z(b,function(a){var b=V(a,"onload");b&&(b=r(b))&&W(a,"load",b);if(b=V(a,"src"))a.src=b},a);
return gb(b)}
function Ml(a){z(document.getElementsByTagName("iframe"),function(b){-1==ab(a,b)&&O(b,"iframe-hid")})}
function Pl(){z(H("iframe-hid"),function(a){P(a,"iframe-hid")})}
k.gc=function(a){a=a.currentTarget;a.disabled||(a=V(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.V()){this.i.J("pre-all");this.i.J("pre-"+a);ak(this.b);fl(El.C());fl(Fl.C());this.g.setAttribute("tabindex","-1");Ol()||(ak(this.f),this.L||P(document.body,"yt-dialog-active"),ai(),Pl());this.o&&(X(this.o),this.o=null);this.w&&(X(this.w),this.w=null);var b=this.b;if(b){var c=V(b,"player-ready-pubsub-key");c&&(Vg(c),b&&(b.dataset?delete b.dataset[Th("player-ready-pubsub-key")]:b.removeAttribute("data-player-ready-pubsub-key")))}this.i.J("post-all");T("yt-ui-dialog-hide-complete",
this);"cancel"==a&&T("yt-ui-dialog-cancelled",this);this.i&&this.i.J("post-"+a);this.F&&this.F.focus()}};
k.setTitle=function(a){ve(J("yt-dialog-title",this.b),a)};
k.Yb=function(a){S(u(function(){this.ba||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&N(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.Ic=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.V=function(){return this.Z};
k.dispose=function(){Yj(this.b)&&this.dismiss("dispose");X(this.N);this.N.length=0;S(u(function(){this.F=null},this),0);
this.T=this.g=null;this.i.dispose();this.i=null;this.Z=!0};
k.Hb=function(a){a.stopPropagation();Nl(this)};
function Nl(a){S(u(function(){this.g&&this.g.focus()},a),0)}
v("yt.ui.Dialog",Hl);function Ql(){Ok.call(this,"overlay");this.i=this.f=this.g=this.b=null}
y(Ql,Ok);fa(Ql);k=Ql.prototype;k.register=function(){Qk(this,"click",this.Pa,"target");Qk(this,"click",this.Ra,"close");Rl(this)};
k.unregister=function(){Ql.G.unregister.call(this);Rk(this,"click",this.Pa,"target");Rk(this,"click",this.Ra,"close");this.i&&(Vg(this.i),this.i=null);this.f&&(X(this.f),this.f=null)};
k.Pa=function(a){if(!this.b||!Yj(this.b.b)){var b=this.K(a);a=Sl(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.D(b,"disable-shortcuts")||!1,d=!!this.D(b,"disable-outside-click-dismiss")||!1;this.b=new Hl(a,c);this.g=b;var e=J("yt-dialog-fg",a);if(e){var f=this.D(b,"overlay-class")||"",g=this.D(b,"overlay-style")||"default",h=this.D(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(Z(this,g));f.push(Z(this,h));Qe(e,f)}this.b.show();T("yt-uix-kbd-nav-move-to",e||a);Rl(this);c||
d||(c=u(function(a){N(a.target,"yt-dialog-base")&&Tl(this)},this),this.f=W(J("yt-dialog-base",a),"click",c));
this.oa(b,"overlay-shown");T("yt-uix-overlay-shown",b)}}};
function Rl(a){a.i||(a.i=Qg("yt-uix-overlay-hide",Ul));a.b&&Kl(a.b,function(){var a=Ql.C();a.g=null;a.b.dispose();a.b=null})}
function Tl(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.oa(b,"overlay-hidden");a.g=null;a.f&&(X(a.f),a.f=null);a.b=null}}
function Sl(a,b){var c;if(a)if(c=J("yt-dialog",a)){var d=G("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=K(b,"yt-dialog"));return c}
function Vl(){var a=Ql.C();if(a.g)a=J("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=H("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=K(a[b],"yt-dialog");if(Yj(c)){a=a[b];break a}}a=null}return a}
k.Ra=function(a){a&&a.disabled||T("yt-uix-overlay-hide")};
function Ul(){Tl(Ql.C())}
k.show=function(a){this.Pa(a)};function Wl(a){var b=document.createElement("div");b.innerHTML=a;document.body.appendChild(b);this.id="ypc-offer-overlay"}
var Xl={dd:"ypc-offer-overlay-show-loading",cd:"ypc-offer-overlay-show-error",ad:"ypc-offer-overlay-show-offers-content",ed:"ypc-offer-overlay-show-not-available-error"};Wl.prototype.ha=function(){Ql.C().Ra()};
Wl.prototype.show=function(a){a=Zd(a);Ql.C().show(a)};
function Yl(a){var b=Vl();return b?J(a,b):null}
function Zl(a){a&&Da(Xl,a);a=Yl("ypc-offer-overlay-container");Re(a,va(Xl))}
Wl.prototype.W=function(a){var b=Yl("ypc-offer-overlay-container");O(b,a)};
function $l(a){a.show(a.id);a.W("ypc-offer-overlay-show-loading")}
;function am(a){Ik.call(this,a);Y(this.g,this.b,"click",this.o,"unlimited-family-message-action-button");Y(this.g,this.b,"click",this.L,"unlimited-family-message-not-now-button")}
y(am,Ik);am.prototype.L=function(a){(a=We(a.currentTarget,"come_back_html"))?this.f.ga(Sa(a),!0):(a=this.f,a.b?(a.ga(a.b),a=!0):a=!1,a||this.aa(null,!1,null))};
am.prototype.o=function(a){var b=We(a.currentTarget,"is_unicorn_debug_enabled"),c=We(a.currentTarget,"hl"),d=We(a.currentTarget,"rpcid_params"),e=We(a.currentTarget,"success_redirect_url");a=We(a.currentTarget,"error_redirect_url");$l(this.f);this.i||(this.i=new Jk("ypc-offer-overlay-content-wrapper","unlimited-family-message-overlay-container"));a:{if(b&&"true"==b&&(b=mh(window.location.href).unicorn)){b=jh(decodeURIComponent(b));break a}b={}}this.i.start(this,c,d,e,a,b)};
am.prototype.aa=function(a,b,c){a instanceof ci&&a.preventDefault();this.f&&this.f.ha();c?ek(c):b&&window.location.reload(!0);this.dispose()};function bm(){Wl.call(this,Xg("YPC_OFFER_OVERLAY"));R("PAGE_NAME",null);this.f=cm();this.b=null}
y(bm,Wl);fa(bm);var yf="data-come_back_html data-error_redirect_url data-hl data-is_unicorn_debug_enabled data-rpcid_params data-sessionlink data-success_redirect_url data-url data-visibility-tracking data-ytimg".split(" "),dm={Bb:"ypc-offer-overlay-show-unicorn-iframe-in-content"};function cm(){return new qf(wf(function(a){return a}))}
k=bm.prototype;k.ga=function(a,b){var c=Yl("ypc-offer-overlay-content-wrapper");if(a&&c){var d=Mf(this.f,a);c.innerHTML=Lb(d);this.W("ypc-offer-overlay-show-offers-content");b||(this.b=a)}};
k.X=function(a){var b=Yl("ypc-offer-overlay-error");P(b,"ypc-offer-overlay-show-custom-error");var c=Yl("ypc-offer-overlay-error-custom-content");a&&c&&(O(b,"ypc-offer-overlay-show-custom-error"),a=Mf(this.f,a),c.innerHTML=Lb(a));this.W("ypc-offer-overlay-show-error")};
k.ha=function(){var a=Yl("ypc-offer-overlay-content-wrapper");a&&me(a);bm.G.ha.call(this)};
k.W=function(a){Zl(dm);bm.G.W.call(this,a);"ypc-offer-overlay-show-unicorn-iframe-in-content"==a?em(!0):em(!1)};
function em(a){var b=J("ypc-offer-overlay-container"),c=J("yt-dialog-show-content"),d=K(c,"yt-dialog-base");b&&fm(b,a);c&&fm(c,a);d&&fm(d,a)}
function fm(a,b){a&&(b&&!N(a,"ytr-style-unicorn-iframe-container")?O(a,"ytr-style-unicorn-iframe-container"):!b&&N(a,"ytr-style-unicorn-iframe-container")&&P(a,"ytr-style-unicorn-iframe-container"))}
k.ia=function(){return new am(this)};function gm(a,b,c){Ik.call(this,a);this.o=b;this.f=a;this.flowType=c;this.i=null}
y(gm,Ik);k=gm.prototype;k.M=function(){this.o.track("dispose-OfferOverlay-EventsManager");hm(this);this.o.dispose();var a=this.g;X(a.b);a.b.length=0;Vg(this.w);this.w.length=0;gh(this.F);this.F.length=0;gm.G.M.call(this)};
k.ma=function(){gm.G.ma.call(this);Y(this.g,this.b,"click",this.qb,"ypc-offer-overlay-offer-button");Y(this.g,this.b,"click",this.tc,"ypc-post-purchase-overlay-done-button");Y(this.g,this.b,"click",this.yc,"ypc-offer-overlay-switch-accounts-button")};
k.Ea=function(a){a&&(a.subscribe("ypc-purchase-wallet-start",this.Gc,this),a.subscribe("ypc-purchase-wallet-end",this.Fc,this),a.subscribe("ypc-post-purchase-init",this.Kc,this),a.subscribe("ypc-direct-purchase-error",this.Gb,this))};
k.aa=function(a){a instanceof ci&&a.preventDefault();this.f&&this.f.ha();dh("ypc-purchase-flow-end");this.dispose()};
k.qb=function(a){var b=a.currentTarget;if(b){var c=this.flowType;if(b){var d=V(b,"ypc-item-type"),e=V(b,"ypc-item-id"),f=V(b,"ypc-offer-id"),g=V(b,"coupon-code"),h=V(b,"ypc-from-purchase-ids");a=V(b,"ypc-offer-jwt");var l=V(b,"ypc-offer-encrypted-purchase-params"),m=V(b,"ypc-irp"),p=V(b,"ypc-transaction-action"),b=V(b,"ypc-transaction-params"),c={config:{couponCode:g,fromPurchaseIds:h,flowType:c},itemData:{itemId:e,itemType:d},offerData:{offerId:f}};if(a||l)d={},a&&(d.jwt=a),l&&(d.encryptedPurchaseParams=
l),c.walletPrefetchdata=d;m&&(c.innertubeRequestParams=m);p&&(c.transactionAction=p);b&&(c.transactionParams=b);a=c}else a=null;if(a){try{this.Qa(a)}catch(x){return}this.o.track("initiate-purchase-from-offeroverlay");im(this,a)}else Jg(Error("ypc-offer-overlay-offer-button does not contain purchaseFlowData."))}};
k.Qa=function(){};
function im(a,b){jm();km(a,b);a.i=new Ak(b,a.o,new Gk);a.Ea(a.i);var c=a.i,d=c.Ga.walletPrefetchdata;d&&d.encryptedPurchaseParams?Dk(c,d.encryptedPurchaseParams):Ck(c)}
k.Gc=function(){this.f&&this.f.ha();$h()};
k.Fc=function(){ai();$l(this.f)};
k.Kc=function(a){hm(this);var b=a.overlayHtml||null,c=a.screenOverlayHtml||null,d=a.errorHtml||null;a=!!a.supressError;c?(b=bm.C(),$l(b),b.ga(c),b.ia()):b?this.f.ga(b):a?this.aa(null):d?this.f.X(d):this.f.X()};
k.tc=function(){var a=[];z(H("subscription-list-item",this.b),function(b){N(b,"selected")&&a.push(V(b,"channel-id"))});
a.length?($l(this.f),dh(Kh,new Hh(a))):this.aa(null)};
function km(a,b){var c=b.itemData,c={itemType:c.itemType,itemId:c.itemId,offerId:b.offerData.offerId,flowType:a.flowType},d=b.config.couponCode;d&&(c.couponCode=d);Fh(a.o,c)}
function hm(a){a.i&&(a.i.dispose(),a.i=null)}
k.yc=function(a){a.preventDefault();a=kh(Ig("YPC_SWITCH_URL"),{next:window.location.href},!0);ek(a)};
k.Gb=function(a){hm(this);a=a.errorMessage||"";if(this.f&&a){var b=this.f;b.show(b.id);b.X(a)}};function lm(a,b){gm.call(this,a,b,"D")}
y(lm,gm);k=lm.prototype;k.ma=function(){lm.G.ma.call(this);Y(this.g,this.b,"click",ra(this.ub,!0),"ypc-offer-overlay-show-subscription-offers");Y(this.g,this.b,"click",ra(this.ub,!1),"ypc-offer-overlay-show-non-subscription-offers");Y(this.g,this.b,"click",this.Oc,"ypc-google-help");Y(this.g,this.b,"click",this.Ua,"ypc-offer-overlay-apply-coupon");Y(this.g,this.b,"keydown",this.Ua,"ypc-offer-overlay-show-coupon-input")};
k.ua=function(){lm.G.ua.call(this);this.F.push(fh("subscription-batch-subscribe-finished",this.aa,this),fh("subscription-batch-subscribe-failure",this.f.X,this.f))};
k.ub=function(a){Se(J("ypc-offer-overlay-offers-section",this.b),"show-subscription-offers",!!a)};
k.Ua=function(a){if("keydown"!=a.type||13==a.keyCode){a=Ja(J("ypc-offer-overlay-show-coupon-input",this.b).value);var b=[];a&&(z(H("ypc-offer-overlay-offer-button",this.b),function(a){(a=V(a,"ypc-offer-id"))&&b.push(a)}),0!=b.length&&(jm(),qh(R("YPC_TRANSACTION_URL",void 0),{method:"POST",
R:{action_apply_coupon:1,cc:a,oids:b.join(",")},context:this,O:function(a,b){var c=mm(this,b);nm();om(this,c);c||pm(this,b)},
onError:function(a,b){nm();om(this,!1);pm(this,b)}})))}};
function mm(a,b){var c=b.updated_offers,d=b.coupon_code,e=!1;typeof("number"==b.status&&c)&&z(H("ypc-coupon-updatable",a.b),function(a){var b=V(a,"ypc-offer-id"),b=c[b];if(b.is_coupon_applied){var f;N(a,"ypc-coupon-updatable-offer-price-text")?f=b.updated_display_price:N(a,"ypc-coupon-updatable-free-trial-text")&&(f=b.updated_free_trial_text);f&&(ve(a,f),Uh(a,"coupon-code",d),e=!0)}},a);
return e}
function om(a,b){var c=J("ypc-offer-overlay-coupon-section",a.b),d=J("ypc-offer-overlay-show-coupon-input",a.b),e=J("ypc-offer-overlay-apply-coupon",a.b);Re(c,["ypc-valid-coupon","ypc-invalid-coupon"]);b?(O(c,"ypc-valid-coupon"),d.disabled=!0,e.disabled=!0):(O(c,"ypc-invalid-coupon"),d.value="",d.focus())}
function pm(a,b){b.error&&ve(J("ypc-offer-overlay-show-coupon-error",a.b),b.error)}
k.Oc=function(){var a=J("ypc-google-help",this.b),b=J("ypc-offer-overlay-offer-button",this.b);if(b){var c=V(b,"ghelp-product-id");var d=V(b,"ghelp-product-data")}if(c&&d){d=Qf(d);c=(c||"59")+"";var b=R("FEEDBACK_LOCALE_LANGUAGE");Da(bk,R("FEEDBACK_LOCALE_EXTRAS",{}));d&&Da(bk,d);try{d="player-api";if(d=G(d)){var e=Wj+"_"+la(d),f=Vj[e];f||(f=new Fj(d,e),Vj[e]=f);var g=f.api}else g=null;g&&g.pauseVideo&&g.pauseVideo();var h=ki.C();bk.flashVersion=[h.b,h.f,h.g].join(".");g&&(bk.playback_id=g.getVideoData().cpn,
g.getLastError&&(bk.api_error=g.getLastError()))}catch(x){}g={helpCenterPath:"/youtube",locale:b,productData:bk};a={context:"moo",anchor:a,enableSendFeedback:!1,defaultHelpArticleId:void 0};e=R("SESSION_INDEX");f=R("FEEDBACK_BUCKET_ID");h={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005"};ji("gfeedback_for_signed_out_users_enabled")&&(h.allowNonLoggedInFeedback=!0);e&&(h.authuser=e+"");f&&(h.bucket=f);Da(a,h);try{g=g||{};var l={apiKey:g.md||g.apiKey,
environment:g.rd||g.environment,helpCenterPath:g.td||g.helpCenterPath,locale:g.locale||g.locale||"en".replace(/-/g,"_"),productData:g.vd||g.productData,receiverUri:g.wd||g.receiverUri,renderApiUri:g.xd||g.renderApiUri,theme:g.theme||g.theme,window:g.window||g.window},m=Oc(Tc,"help.service.Lazy.create",c,l);var p=new Sc(m);if(!ck)try{p.f(a),ck=!0}catch(x){}p.g(a)}catch(x){}}};function qm(a){P(a,"yt-uix-form-error");ne(J("yt-uix-form-error-message",a))}
;function rm(a,b){gm.call(this,a,b,"T")}
y(rm,gm);k=rm.prototype;k.ma=function(){rm.G.ma.call(this);Y(this.g,this.b,"click",this.aa,"ypc-tip-overlay-close");Y(this.g,this.b,"click",this.Ac,"ypc-tip-custom-amount-input");Y(this.g,this.b,"keydown",this.Bc,"ypc-tip-custom-amount-input");Y(this.g,this.b,"change",this.Cc,"ypc-tip-choice")};
k.ua=function(){rm.G.ua.call(this);this.w.push(Qg("yt-uix-expander-toggle",this.zc,this))};
k.Qa=function(a){rm.G.Qa.call(this,a);var b=sm(this);if(b&&a.config)a.config.tipConfig=b;else throw Error("Invalid Config");};
k.Ea=function(a){a&&(rm.G.Ea.call(this,a),a.subscribe("ypc-tip-validation-error",this.Dc,this))};
k.Ac=function(){J("ypc-tip-choice-custom",this.b).checked=!0};
k.Bc=function(a){3==a.keyCode||13==a.keyCode?(a.preventDefault(),ii(J("ypc-tip-overlay-next-button"))):qm(ae(this.b))};
k.Cc=function(){qm(ae(this.b));J("ypc-tip-custom-amount-input",this.b).value=""};
k.zc=function(a,b){var c=J("ypc-tip-comment-input",a);c&&(b?c.focus():c.value="")};
function sm(a){var b=null,c=null;z(H("ypc-tip-choice",a.b),function(a){a.checked&&(b=a.value)});
if(J("ypc-tip-choice-custom",a.b).checked&&(c=J("ypc-tip-custom-amount-input",a.b).value,!(c&&isFinite(c)&&0<parseFloat(c))))return tm(a,""),null;var d=J("ypc-tip-comment-input",a.b);return fk(b,J("ypc-tip-currency-input",a.b).value,c,d?d.value:null)}
k.Dc=function(a){hm(this);tm(this,a.errorMessage||"")};
function tm(a,b){var c=ae(a.b);O(c,"yt-uix-form-error");if(b){var d=J("yt-uix-form-error-message",c);d?d.innerHTML=b:(d=ie("SPAN","yt-uix-form-error-message",document.createTextNode(String(b))),d.setAttribute("role","alert"),c.appendChild(d))}nm()}
;function um(){Wl.call(this,Xg("YPC_OFFER_OVERLAY"));R("PAGE_NAME",null)}
y(um,Wl);fa(um);var vm={hd:"ypc-offer-overlay-show-tip-not-available-error",fd:"ypc-offer-overlay-show-plus-page-not-available-error",Bb:"ypc-offer-overlay-show-unicorn-iframe-in-content"},wm={bd:"ypc-offer-overlay-flow-default",gd:"ypc-offer-overlay-flow-tip"};k=um.prototype;k.ga=function(a){a&&(Yl("ypc-offer-overlay-content-wrapper").innerHTML=a,this.W("ypc-offer-overlay-show-offers-content"))};
k.X=function(a){var b=Yl("ypc-offer-overlay-error");b&&(P(b,"ypc-offer-overlay-show-custom-error"),a&&(O(b,"ypc-offer-overlay-show-custom-error"),Yl("ypc-offer-overlay-error-custom-content").innerHTML=a),this.W("ypc-offer-overlay-show-error"))};
function xm(a,b){var c=b.flowTracker,d=b.itemData,e=b.flowType;c.track("flow-start",{itemType:d&&d.itemType,itemId:d&&d.itemId,flowType:e,innertubeRequestParams:b.innertubeRequestParams,couponCode:b.couponCode});dh("ypc-purchase-flow-start",new sk(e));$l(a);ym(e);Rh(b,{context:a,O:function(a,d){c.track("flow-offers-load-success");var e=hk(d),f=e.offersHtml,g=e.channelsToSubscriptionidMap,p=e.componentChannels,x=e.isPurchaseNotAvailable;f?(pk.C().load(),this.ga(f)):g&&!za(g)?(dh(wk,new rk(g,e.channelInfoMap)),
z(p,function(a){dh(Nh,new Ih(a))}),c.track("flow-offers-already-purchased-error"),this.X(e.messageHtml)):x?(c.track("flow-offers-not-available-error"),zm(this,d.message_html,b.flowType,e.isPlusPageDirectLogin)):(c.track("flow-offers-load-error"),this.X(e.messageHtml))},
onError:function(){c.track("flow-offers-load-error");this.X()},
Y:function(a,b){hk(b);this.ia(c,e)}})}
function jm(){var a=Am();z(a,function(a){a.disabled=!0})}
function nm(){var a=Am();z(a,function(a){a.disabled=!1})}
k.ha=function(){var a=Yl("ypc-offer-overlay-content-wrapper");a&&me(a);um.G.ha.call(this)};
function Am(){var a=[],b=Yl("ypc-offer-overlay-container");if(!b)return a;z($d("button",null,b),function(b){a.push(b)});
z($d("input",null,b),function(b){a.push(b)});
return a}
k.W=function(a){Zl(vm);um.G.W.call(this,a)};
function ym(a){var b=Yl("ypc-offer-overlay-container");Re(b,va(wm));"T"==a?O(b,"ypc-offer-overlay-flow-tip"):O(b,"ypc-offer-overlay-flow-default")}
function zm(a,b,c,d){b&&(d?(a.W("ypc-offer-overlay-show-plus-page-not-available-error"),a=Yl("ypc-offer-plus-page-not-available-content")):"T"==c?(a.W("ypc-offer-overlay-show-tip-not-available-error"),a=Yl("ypc-offer-overlay-tip-not-available-content")):(a.W("ypc-offer-overlay-show-not-available-error"),a=Yl("ypc-offer-overlay-not-available-content")),a.innerHTML=b)}
k.ia=function(a,b){switch(b){case "T":return new rm(this,a);default:return new lm(this,a)}};function Bm(a,b){gm.call(this,a,b,"D");Y(this.g,this.b,"click",this.qb,"ypc-offer-button");Y(this.g,this.b,"click",this.L,"unlimited-family-message-continue-button")}
y(Bm,gm);Bm.prototype.L=function(a){a=We(a.currentTarget,"continue_html");this.f&&a?this.f.ga(Sa(a),!0):this.f&&this.f.ha()};function Cm(){um.call(this)}
y(Cm,um);fa(Cm);Cm.prototype.ia=function(a){return new Bm(this,a)};function Dm(a){if(a){var b=Cm.C();$l(b);b.ga(a);b.ia(nk(),"")}}
;var Em=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",Em);function Fm(a){this.b=a}
Fm.prototype.write=function(a,b,c,d){a={action_write_promo:1,method:a,subtype:this.b};var e={};c&&(e.json_data=c);qh(d||"/promo_ajax",{method:"POST",na:a,R:e,O:function(){if(b&&(b.Qb&&ak(G(b.Qb)),b.Rb&&Zj(G(b.Rb)),b.O&&b.O(),b.Lc))return dk(b.Lc)},
onError:function(){b&&b.Sb&&Zj(G(b.Sb));if(b&&b.onError)b.onError()}})};function Gm(){Ok.call(this,"promo")}
y(Gm,Ok);fa(Gm);Gm.prototype.register=function(){Qk(this,"click",this.b)};
Gm.prototype.unregister=function(){Rk(this,"click",this.b)};
Gm.prototype.b=function(a){a=this.K(a);a=this.D(a,"promo-id");(new Fm(a)).write("write_dismiss")};function Hm(){M.call(this);this.b=R("PAGE_NAME",null);this.g=R("CHANNEL_TAB",null);this.f=[];var a=Gm.C(),b=Z(a);b in Em||(a.register(),Pk(a,"yt-uix-init-"+b,a.init),Pk(a,"yt-uix-dispose-"+b,a.dispose),Em[b]=a);this.f.push(fh(Lh,this.i,this),fh(Mh,this.o,this))}
y(Hm,M);Hm.prototype.M=function(){Hm.G.M.call(this);var a=Gm.C(),b=Z(a);b in Em&&(a.unregister(),delete Em[b]);gh(this.f);this.f.length=0};
Hm.prototype.i=function(a){"channel"==this.b&&(R("CHANNEL_ID")==a.b&&Im(!1),Jm(a.b,!1),a=G("paid-channel-promo")||G("paid-package-promo"))&&(ak(a),a=V(J("ypc-promo-close",a),"promo-id"),(new Fm(a)).write("write_dismiss"));this.dispose()};
Hm.prototype.o=function(a){"channel"==this.b&&"transaction"==this.g?window.location.reload(!0):"channel"==this.b&&(R("CHANNEL_ID")==a.b&&Im(!0),Jm(a.b,!0));this.dispose()};
function Jm(a,b){if(R("CHANNEL_ID")==a){var c=H("yt-badge-ypc"),c=bb(c,function(a){var b=N(a,"yt-badge-ypc-purchased");a=N(a,"yt-badge-ypc-free");return!b&&!a});
b?Zj.apply(null,c):ak.apply(null,c)}}
function Im(a){var b=J("ypc-channel-offer-card-container",J("primary-header-actions"));b&&Se(b,"purchased",!a)}
;function Km(){M.call(this);this.i=R("PAGE_NAME",null);this.b=!1;this.f=null;this.g=[];this.g.push(fh(xk,this.w,this),fh("ypc-purchase-flow-end",this.o,this))}
y(Km,M);Km.prototype.M=function(){gh(this.g);this.g.length=0;this.i=null;this.b=!1;this.f=null;Km.G.M.call(this)};
Km.prototype.w=function(a){this.b=!0;var b=R("YTO_GTM_DATA");window.dataLayer=window.dataLayer||[];window.dataLayer.push(b);a.b.subscriptionId&&(this.f=!0)};
Km.prototype.o=function(){if(this.b){switch(this.i){case "musickey":case "channel":case "unlimited":var a=R("YPC_POST_PURCHASE_REDIRECT_URL");a&&ek(a);break;case "playlist":window.location.reload(!0);break;case "watch":this.f&&window.location.reload(!0)}this.dispose()}};var Lm=["ypc-checkout-button","ypc-enabled"];function Mm(){var a=[];z(Lm,function(b){hb(a,H(b))});
z(a,function(a){var b=V(a,"ypc-item-type"),d=V(a,"ypc-item-id"),e=V(a,"ypc-flow-type");a=V(a,"ypc-irp");var e=e||"D",b={itemId:d,itemType:b},f=nk();f.track("triggering-prefetch");e={itemData:b,flowType:e,flowTracker:f};a&&(e.innertubeRequestParams=a);Rh(e,{O:function(){f.track("prefetch-triggered")},
onError:function(){f.track("prefetch-trigger-failed")},
Y:function(){f.dispose()}})})}
;function Nm(){var a=Xg("YPC_UNSUBSCRIBE_OVERLAY"),b=document.createElement("div");b.innerHTML=a;document.body.appendChild(b)}
fa(Nm);var Om={Vc:"ypc-unsubscribe-overlay-confirm",ld:"ypc-unsubscribe-overlay-xauth",Zc:"ypc-unsubscribe-overlay-plus-page-error",LOADING:"ypc-unsubscribe-overlay-loading",jd:"ypc-unsubscribe-overlay-success",Xc:"ypc-unsubscribe-overlay-delayed",Yc:"ypc-unsubscribe-overlay-error"};Nm.prototype.show=function(){var a=Zd("ypc-unsubscribe-overlay");Ql.C().show(a);Pm(this,"ypc-unsubscribe-overlay-loading")};
Nm.prototype.X=function(){Pm(this,"ypc-unsubscribe-overlay-error")};
Nm.prototype.K=function(){var a=Vl();return a?J("ypc-unsubscribe-overlay",a):null};
function Pm(a,b){var c=a.K();if(c){for(var d in Om)P(c,Om[d]);O(c,b)}}
;var Qm=[],Rm=!1;function Sm(){Rm||(Rm=!0,Qm.push(hi(document.documentElement,"click",Tm,"ypc-unsubscribe-confirm")))}
function Tm(a){var b=a.currentTarget;a=V(b,"ypc-item-type");b=V(b,"ypc-item-id");a&&b&&Um(a,b)}
function Vm(a,b){var c=Nm.C();qh(R("YPC_SUBSCRIPTION_URL",void 0),{method:"GET",na:{action_pre_cancel_confirm:1,it:a,ii:b},O:function(a,b){var d=b.header,e=b.html,h=b.confirm_button_text,l=b.keep_button_text,m=b.help_url,p=b.is_plus_page_error;b.is_xauth_subscription?Pm(c,"ypc-unsubscribe-overlay-xauth"):p?Pm(c,"ypc-unsubscribe-overlay-plus-page-error"):(d&&(J("ypc-unsubscribe-overlay-title",c.K()).innerHTML=d),e&&(d=J("ypc-unsubscribe-overlay-confirm-content",c.K()),d.innerHTML=e),m&&(d=J("ypc-unsubscribe-help",
c.K()),d.href=m),h&&(d=J("ypc-unsubscribe-confirm",c.K()),d.innerHTML=h),l&&(d=J("ypc-unsubscribe-keep",c.K()),d.innerHTML=l),Pm(c,"ypc-unsubscribe-overlay-confirm"))},
onError:function(){c.X()}})}
function Um(a,b){Nm.C().show();qh(R("YPC_TRANSACTION_URL",void 0),{method:"POST",R:{action_cancel:1,it:a,ii:b},O:function(c,d){var e=d.status,f=d.component_channels,g=d.title,h=d.html;0===e?(e=Nm.C(),g&&(J("ypc-unsubscribe-overlay-title-success",e.K()).innerHTML=g),h&&(J("ypc-unsubscribe-overlay-content-success",e.K()).innerHTML=h),Pm(e,"ypc-unsubscribe-overlay-success"),Wm(a,b,f)):3==e?(g=Nm.C(),Pm(g,"ypc-unsubscribe-overlay-delayed"),Wm(a,b,f)):Nm.C().X()},
onError:function(){Nm.C().X()}})}
function Wm(a,b,c){var d={itemType:a,itemId:b},e=[];hb(e,H("ypc-unsubscribe-link"),H("ypc-unsubscribe-label"));e=Xm(e,a,b);ak.apply(null,e);a=Xm(H("ypc-unsubscribe-complete"),a,b);Zj.apply(null,a);dh(zk,new uk(d,c))}
function Xm(a,b,c){return bb(a,function(a){var d=V(a,"ypc-item-type");a=V(a,"ypc-item-id");return d==b&&a==c})}
;var Ym=[];v("yt.www.ypc.subscription.init",Sm);v("yt.www.ypc.checkout.showYpcOverlay",function(a,b,c,d,e){c=c||"D";a={itemId:b,itemType:a};b=nk();c={itemData:a,flowType:c,flowTracker:b,innertubeRequestParams:d,couponCode:e};xm(um.C(),c)});
v("yt.www.ypc.checkout.showYpcOverlayForInnertubeRequestParams",function(a,b){a=a||"D";var c=nk(),c={flowType:a,flowTracker:c,innertubeRequestParams:b};xm(um.C(),c)});
v("yt.www.ypc.checkout.showScreenOverlay",function(a){if(a){var b=bm.C();$l(b);b.ga(a);b.ia()}});
v("yt.www.ypc.checkout.showPrepurchaseOverlay",Dm);v("yt.www.ypc.checkout.showPrepurchaseOverlay",Dm);v("yt.www.ypc.subscription.openUnsubscribeOverlay",function(a,b){var c=Nm.C();c.show();Vm(a,b);c=c.K();c=J("ypc-unsubscribe-confirm",c);Uh(c,"ypc-item-type",a);Uh(c,"ypc-item-id",b)});
v("yt.www.ypc.subscription.requestUnsubscribe",Um);v("yt.www.ypc.checkout.offerpurchaser.purchaseOffer",function(a,b){var c=nk();Fh(c,ok(a));dh("ypc-purchase-flow-start",new sk(a.config.flowType));var d=um.C();b||$l(d);im(d.ia(c,a.config.flowType),a)});
v("yt.www.ypc.checkout.offerpurchaser.completeTransaction",function(a){var b=nk();Fh(b,ok(a));dh("ypc-purchase-flow-start",new sk(a.config.flowType));var c=um.C();$l(c);b=c.ia(b,a.config.flowType);jm();km(b,a);b.i=new Ak(a,b.o,new Gk);b.Ea(b.i);a=b.i;Fk(a,null,null,a.Ga.transactionParams)});
Sm();Ym.push(fh("ypc-purchase-flow-start",function(a){new Km;new Hm;"watch"==R("PAGE_NAME",null)&&"T"!=a.b&&(a=r("yt.www.watch.player.pause"),"function"==typeof a&&a())}),fh(yk,function(){new Hm}));
Ch.C().init();R("PREFETCH_YPC_OFFERS")&&Mm();Qg("dispose",function(){Rm=!1;X(Qm);Qm.length=0;gh(Ym);Ym.length=0;Ch.C().dispose()});}).call(this);