(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(){ea=function(){};
da.Symbol||(da.Symbol=fa)}
function ha(a,b){this.f=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
ha.prototype.toString=function(){return this.f};
var fa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ja(){ea();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(aa(this))}});
ja=function(){}}
function ka(a){ja();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a}
function la(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function sa(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function ta(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
function ua(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ta("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ua(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ta("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ua(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
ta("String.prototype.repeat",function(a){return a?a:function(b){var c=ua(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
function va(a,b){ja();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
ta("Array.prototype.keys",function(a){return a?a:function(){return va(this,function(b){return b})}});
ta("Array.prototype.values",function(a){return a?a:function(){return va(this,function(b,c){return c})}});
function wa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)wa(d,e)&&(a[e]=d[e])}return a};
ta("Object.assign",function(a){return a||xa});
ta("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=la(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!wa(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n["delete"](k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!wa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=m;return this};
b.prototype.get=function(k){return d(k)&&wa(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&wa(k,g)&&wa(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&wa(k,g)&&wa(k[g],this.f)?delete k[g][this.f]:!1};
return b});
ta("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.f;return ka(function(){if(m){for(;m.head!=h.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.g[m];if(n&&wa(h.g,m))for(var r=0;r<n.length;r++){var t=n[r];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:n,index:r,L:t}}return{id:m,list:n,index:-1,L:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=la(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(la([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
ja();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.g[m.id]=[]);m.L?m.L.value=k:(m.L={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},m.list.push(m.L),this.f.previous.next=m.L,this.f.previous=m.L,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.L&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.L.previous.next=h.L.next,h.L.next.previous=h.L.previous,h.L.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).L};
e.prototype.get=function(h){return(h=d(this,h).L)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ta("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)wa(b,d)&&c.push([d,b[d]]);return c}});
ta("Set",function(a){function b(c){this.f=new Map;if(c){c=la(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(la([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ja();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ta("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ua(this,b,"includes").indexOf(b,c||0)}});
ta("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.f=[];var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.l()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.j(m)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(m){return function(n){k||(k=!0,m.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.H),reject:g(this.l)}};
b.prototype.H=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.B(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.w(g):this.o(g)}};
b.prototype.w=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.J(h,g):this.o(g)};
b.prototype.l=function(g){this.s(2,g)};
b.prototype.o=function(g){this.s(1,g)};
b.prototype.s=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.v()};
b.prototype.v=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.B=function(g){var h=this.j();g.Ga(h.resolve,h.reject)};
b.prototype.J=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(A){try{m(t(A))}catch(J){n(J)}}:p}
var m,n,r=new b(function(t,p){m=t;n=p});
this.Ga(k(g,m),k(h,n));return r};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.Ga=function(g,h){function k(){switch(m.g){case 1:g(m.i);break;case 2:h(m.i);break;default:throw Error("Unexpected state: "+m.g);}}
var m=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=la(g),n=m.next();!n.done;n=m.next())d(n.value).Ga(h,k)})};
b.all=function(g){var h=la(g),k=h.next();return k.done?d([]):new b(function(m,n){function r(A){return function(J){t[A]=J;p--;0==p&&m(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).Ga(r(t.length-1),n),k=h.next();while(!k.done)})};
return b});
var ya=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ta("Reflect.construct",function(){return ya});
var q=this||self;function u(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var za=/^[\w+/_-]+[=]{0,2}$/,Aa=null;function v(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ba(){}
function Ca(a){a.Wa=void 0;a.ga=function(){return a.Wa?a.Wa:a.Wa=new a}}
function Da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){var b=Da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ea(a){return"function"==Da(a)}
function Fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ga(a){return Object.prototype.hasOwnProperty.call(a,Ha)&&a[Ha]||(a[Ha]=++Ia)}
var Ha="closure_uid_"+(1E9*Math.random()>>>0),Ia=0;function Ja(a,b,c){return a.call.apply(a.bind,arguments)}
function Ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Ja:y=Ka;return y.apply(null,arguments)}
function La(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var z=Date.now||function(){return+new Date};
function Ma(a,b){u(a,b,void 0)}
function B(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Na(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{Mb:a.slice(0,d)+"&act=1"+a.slice(d),Qb:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{Mb:c+"&act=1"+d,Qb:c+"&dct=1"+d}}return null}
;function Oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(Oa,Error);Oa.prototype.name="CustomError";var Pa;function Qa(a){var b=a.url,c=a.sd;this.l=!!a.Gc;this.g=Na(b,c);a=/[?&]dsh=1(&|$)/.test(b);this.i=!a&&/[?&]ae=1(&|$)/.test(b);this.j=!a&&/[?&]ae=2(&|$)/.test(b);this.f=/[?&]adurl=([^&]*)/.exec(b)}
;var Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Sa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ua=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Va=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Wa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},Xa=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Ya(a,b){var c=Za(a,b,void 0);return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Za(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function $a(a,b){return 0<=Ra(a,b)}
function ab(a,b){$a(a,b)||a.push(b)}
function bb(a,b){var c=Ra(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function cb(a){return Array.prototype.concat.apply([],arguments)}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(x(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function fb(a,b,c,d){Array.prototype.splice.apply(a,gb(arguments,1))}
function gb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function hb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=hb.apply(null,gb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function ib(){return null}
function jb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function kb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function lb(a){var b=0,c;for(c in a)b++;return b}
function mb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function nb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b=Da(a);if("object"==b||"array"==b){if(Ea(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=sb(a[c]);return b}return a}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function vb(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return vb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function wb(a,b){this.f=a===xb&&b||"";this.g=yb}
wb.prototype.ra=!0;wb.prototype.pa=function(){return this.f};
function zb(a){return a instanceof wb&&a.constructor===wb&&a.g===yb?a.f:"type_error:Const"}
var yb={},xb={},Ab=new wb(xb,"");function Bb(a,b){this.g=a===Cb&&b||"";this.i=Db}
Bb.prototype.ra=!0;Bb.prototype.pa=function(){return this.g.toString()};
Bb.prototype.Va=!0;Bb.prototype.f=function(){return 1};
function Eb(a){if(a instanceof Bb&&a.constructor===Bb&&a.i===Db)return a.g;Da(a);return"type_error:TrustedResourceUrl"}
var Db={},Cb={};var Fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Gb(a,b){if(b)a=a.replace(Hb,"&amp;").replace(Ib,"&lt;").replace(Jb,"&gt;").replace(Kb,"&quot;").replace(Lb,"&#39;").replace(Mb,"&#0;");else{if(!Nb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Hb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ib,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Jb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Kb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Lb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Mb,"&#0;"))}return a}
var Hb=/&/g,Ib=/</g,Jb=/>/g,Kb=/"/g,Lb=/'/g,Mb=/\x00/g,Nb=/[\x00&<>"']/;
function Ob(a,b){for(var c=0,d=Fb(String(a)).split("."),e=Fb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=Pb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Pb(0==h[2].length,0==k[2].length)||Pb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function Pb(a,b){return a<b?-1:a>b?1:0}
;function Rb(a,b){this.g=a===Sb&&b||"";this.i=Tb}
Rb.prototype.ra=!0;Rb.prototype.pa=function(){return this.g.toString()};
Rb.prototype.Va=!0;Rb.prototype.f=function(){return 1};
function Ub(a){if(a instanceof Rb&&a.constructor===Rb&&a.i===Tb)return a.g;Da(a);return"type_error:SafeUrl"}
var Vb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Wb(a){if(a instanceof Rb)return a;a="object"==typeof a&&a.ra?a.pa():String(a);Vb.test(a)||(a="about:invalid#zClosurez");return new Rb(Sb,a)}
var Tb={},Sb={};var Xb;a:{var Yb=q.navigator;if(Yb){var Zb=Yb.userAgent;if(Zb){Xb=Zb;break a}}Xb=""}function D(a){return-1!=Xb.indexOf(a)}
;function $b(){return D("Firefox")||D("FxiOS")}
function ac(){return D("Safari")&&!(bc()||D("Coast")||D("Opera")||D("Edge")||D("Edg/")||D("OPR")||$b()||D("Silk")||D("Android"))}
function bc(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function cc(){return D("Android")&&!(bc()||$b()||D("Opera")||D("Silk"))}
;function dc(){this.g="";this.j=ec;this.i=null}
dc.prototype.Va=!0;dc.prototype.f=function(){return this.i};
dc.prototype.ra=!0;dc.prototype.pa=function(){return this.g.toString()};
function fc(a){if(a instanceof dc&&a.constructor===dc&&a.j===ec)return a.g;Da(a);return"type_error:SafeHtml"}
function gc(a){if(a instanceof dc)return a;var b="object"==typeof a,c=null;b&&a.Va&&(c=a.f());return hc(Gb(b&&a.ra?a.pa():String(a)),c)}
function ic(a){function b(f){Array.isArray(f)?C(f,b):(f=gc(f),e.push(fc(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=gc(jc),d=c.f(),e=[];C(a,b);return hc(e.join(fc(c).toString()),d)}
function kc(a){return ic(Array.prototype.slice.call(arguments))}
var ec={};function hc(a,b){return lc(a,b)}
function lc(a,b){var c=new dc;c.g=a;c.i=b;return c}
lc("<!DOCTYPE html>",0);var jc=lc("",0),mc=lc("<br>",0);var nc=jb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=fc(jc);return!b.parentElement});
function oc(a,b){if(nc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=fc(b)}
function pc(a,b){var c=b instanceof Rb?b:Wb(b);a.href=Ub(c)}
function qc(a,b){a.src=Eb(b);if(null===Aa)b:{var c=q.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&za.test(c)){Aa=c;break b}Aa=""}c=Aa;c&&a.setAttribute("nonce",c)}
;function rc(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function sc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function tc(a){return a=Gb(a,void 0)}
function uc(a){return-1!=a.indexOf("&")?"document"in q?vc(a):wc(a):a}
function vc(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=q.document.createElement("div");return a.replace(xc,function(d,e){var f=b[d];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(f=lc(d+" ",null),oc(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})}
function wc(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})}
var xc=/&([^;\s<&]+);?/g,yc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function zc(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Ac(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var Bc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Cc(a){return a?decodeURI(a):a}
function Dc(a,b){return b.match(Bc)[a]||null}
function Ec(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?sc(f):"")}}
function Fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Gc(a){var b=[],c;for(c in a)Fc(c,a[c],b);return b.join("&")}
function Hc(a,b){var c=Gc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Ic=/#|$/;function Jc(a,b){var c=a.search(Ic);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return sc(a.substr(d,e-d))}
;function Kc(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Lc(){return Kc()||D("iPad")||D("iPod")}
;function Mc(a){Mc[" "](a);return a}
Mc[" "]=Ba;function Nc(a,b){try{return Mc(a[b]),!0}catch(c){}return!1}
function Oc(a,b){var c=Pc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Qc=D("Opera"),E=D("Trident")||D("MSIE"),Rc=D("Edge"),Sc=Rc||E,F=D("Gecko")&&!(-1!=Xb.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),G=-1!=Xb.toLowerCase().indexOf("webkit")&&!D("Edge"),Tc=D("Macintosh"),Uc=D("Windows"),Vc=D("Linux")||D("CrOS"),Wc=D("Android"),Xc=Kc(),Yc=D("iPad"),Zc=D("iPod"),$c=Lc();function ad(){var a=q.document;return a?a.documentMode:void 0}
var bd;a:{var cd="",dd=function(){var a=Xb;if(F)return/rv:([^\);]+)(\)|;)/.exec(a);if(Rc)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(G)return/WebKit\/(\S+)/.exec(a);if(Qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
dd&&(cd=dd?dd[1]:"");if(E){var ed=ad();if(null!=ed&&ed>parseFloat(cd)){bd=String(ed);break a}}bd=cd}var fd=bd,Pc={};function gd(a){return Oc(a,function(){return 0<=Ob(fd,a)})}
function id(a){return Number(jd)>=a}
var kd;if(q.document&&E){var ld=ad();kd=ld?ld:parseInt(fd,10)||void 0}else kd=void 0;var jd=kd;var md=$b(),nd=Kc()||D("iPod"),od=D("iPad"),pd=cc(),qd=bc(),rd=ac()&&!Lc();var sd={},td=null;var H=window;function ud(a){this.f=a||{cookie:""}}
l=ud.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ud;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.sb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
l.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Fb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{sb:0,path:b,domain:c});return d};
l.da=function(){return vd(this).keys};
l.M=function(){return vd(this).values};
l.isEmpty=function(){return!this.f.cookie};
l.K=function(){return this.f.cookie?(this.f.cookie||"").split(";").length:0};
l.za=function(a){for(var b=vd(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
l.clear=function(){for(var a=vd(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function vd(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Fb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var wd=new ud("undefined"==typeof document?null:document);var xd=!E||id(9),yd=!F&&!E||E&&id(9)||F&&gd("1.9.1"),zd=E&&!gd("9");function Ad(a,b,c){return Math.min(Math.max(a,b),c)}
;function I(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=I.prototype;l.clone=function(){return new I(this.x,this.y)};
l.equals=function(a){return a instanceof I&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Bd(a,b){return new I(a.x-b.x,a.y-b.y)}
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Cd(a,b){this.width=a;this.height=b}
function Dd(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1}
l=Cd.prototype;l.clone=function(){return new Cd(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ed(a){return a?new Fd(Gd(a)):Pa||(Pa=new Fd)}
function Hd(a){return Id(document,a)}
function Id(a,b){return"string"===typeof b?a.getElementById(b):b}
function Jd(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Kd(document,"*",a,b)}
function K(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Kd(c,"*",a,b)[0]||null}return c||null}
function Kd(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&$a(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Ld(a,b){kb(b,function(c,d){c&&"object"==typeof c&&c.ra&&(c=c.pa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Md.hasOwnProperty(d)?a.setAttribute(Md[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Md={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Nd(a){a=a.document;a=Od(a)?a.documentElement:a.body;return new Cd(a.clientWidth,a.clientHeight)}
function Pd(a){var b=Qd(a);a=a.parentWindow||a.defaultView;return E&&gd("10")&&a.pageYOffset!=b.scrollTop?new I(b.scrollLeft,b.scrollTop):new I(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Qd(a){return a.scrollingElement?a.scrollingElement:!G&&Od(a)?a.documentElement:a.body||a.documentElement}
function Rd(a){return a?a.parentWindow||a.defaultView:window}
function Sd(a,b,c){return Td(document,arguments)}
function Td(a,b){var c=String(b[0]),d=b[1];if(!xd&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',tc(d.name),'"');if(d.type){c.push(' type="',tc(d.type),'"');var e={};ub(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=Ud(a,c);d&&("string"===typeof d?c.className=d:Array.isArray(d)?c.className=d.join(" "):Ld(c,d));2<b.length&&Vd(a,c,b);return c}
function Vd(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!x(f)||Fa(f)&&0<f.nodeType?d(f):C(Wd(f)?db(f):f,d)}}
function Ud(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Od(a){return"CSS1Compat"==a.compatMode}
function Xd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Yd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Zd(a){var b,c=a.parentNode;if(c&&11!=c.nodeType)if(a.removeNode)a.removeNode(!1);else{for(;b=a.firstChild;)c.insertBefore(b,a);Yd(a)}}
function $d(a){return yd&&void 0!=a.children?a.children:Sa(a.childNodes,function(b){return 1==b.nodeType})}
function ae(a){if(void 0!==a.firstElementChild)a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a}
function be(a){return Fa(a)&&1==a.nodeType}
function ce(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Gd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function de(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Xd(a),a.appendChild(Gd(a).createTextNode(String(b)))}
function ee(a,b){var c=[];return fe(a,b,c,!0)?c[0]:void 0}
function fe(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||fe(a,b,c,d))return!0;a=a.nextSibling}return!1}
var ge={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ie={IMG:" ",BR:"\n"};function je(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!ke(a)||le(a)):ke(a)&&le(a))&&E){var c;!Ea(a.getBoundingClientRect)||E&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function ke(a){return E&&!gd("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function le(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function me(a){if(zd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ne(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");zd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ne(a,b,c){if(!(a.nodeName in ge))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ie)b.push(ie[a.nodeName]);else for(a=a.firstChild;a;)ne(a,b,c),a=a.nextSibling}
function Wd(a){if(a&&"number"==typeof a.length){if(Fa(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ea(a))return"function"==typeof a.item}return!1}
function oe(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return pe(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&$a(f.className.split(/\s+/),c))},d)}
function L(a,b){return oe(a,null,b,void 0)}
function pe(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Fd(a){this.f=a||q.document||document}
l=Fd.prototype;l.F=function(){return Id(this.f,void 0)};
l.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
l.Sb=function(a,b,c){return Td(this.f,arguments)};
l.createElement=function(a){return Ud(this.f,a)};
function qe(a){a=a.f;return a.parentWindow||a.defaultView}
l.appendChild=function(a,b){a.appendChild(b)};
l.isElement=be;l.contains=ce;function re(a){var b=se;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function te(){var a=[];re(function(b){a.push(b)});
return a}
var se={Jc:"allow-forms",Kc:"allow-modals",Lc:"allow-orientation-lock",Mc:"allow-pointer-lock",Nc:"allow-popups",Oc:"allow-popups-to-escape-sandbox",Pc:"allow-presentation",Qc:"allow-same-origin",Rc:"allow-scripts",Sc:"allow-top-navigation",Tc:"allow-top-navigation-by-user-activation"},ue=jb(function(){return te()});
function ve(){var a=Ud(document,"IFRAME"),b={};C(ue(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function we(){this.J=this.J;this.H=this.H}
we.prototype.J=!1;we.prototype.dispose=function(){this.J||(this.J=!0,this.C())};
we.prototype.C=function(){if(this.H)for(;this.H.length;)this.H.shift()()};
function xe(a){a&&"function"==typeof a.dispose&&a.dispose()}
function ye(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];x(d)?ye.apply(null,d):xe(d)}}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function ze(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
l=ze.prototype;l.getHeight=function(){return this.bottom-this.top};
l.clone=function(){return new ze(this.top,this.right,this.bottom,this.left)};
l.contains=function(a){return this&&a?a instanceof ze?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ae(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
l=Ae.prototype;l.clone=function(){return new Ae(this.left,this.top,this.width,this.height)};
l.contains=function(a){return a instanceof I?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
l.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Be(a,b,c){if("string"===typeof b)(b=Ce(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ce(c,d);f&&(c.style[f]=e)}}
var De={};function Ce(a,b){var c=De[b];if(!c){var d=zc(b);c=d;void 0===a.style[d]&&(d=(G?"Webkit":F?"Moz":E?"ms":Qc?"O":null)+Ac(d),void 0!==a.style[d]&&(c=d));De[b]=c}return c}
function Ee(a,b){var c=Gd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Fe(a,b){return Ee(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Ge(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}E&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function He(a){if(E&&!id(8))return a.offsetParent;var b=Gd(a),c=Fe(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Fe(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Ie(a){for(var b=new ze(0,Infinity,Infinity,0),c=Ed(a),d=c.f.body,e=c.f.documentElement,f=Qd(c.f);a=He(a);)if(!(E&&0==a.clientWidth||G&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Fe(a,"overflow")){var g=Je(a),h=new I(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Nd(qe(c)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Je(a){var b=Gd(a),c=new I(0,0);var d=b?Gd(b):document;d=!E||id(9)||Od(Ed(d).f)?d.documentElement:d.body;if(a==d)return c;a=Ge(a);b=Pd(Ed(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Ke(a,b){var c=Le(a),d=Le(b);return new I(c.x-d.x,c.y-d.y)}
function Me(a){a=Ge(a);return new I(a.left,a.top)}
function Le(a){if(1==a.nodeType)return Me(a);a=a.changedTouches?a.changedTouches[0]:a;return new I(a.clientX,a.clientY)}
function Ne(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Oe(a){var b=Pe;if("none"!=Fe(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Pe(a){var b=a.offsetWidth,c=a.offsetHeight,d=G&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Ge(a),new Cd(a.right-a.left,a.bottom-a.top)):new Cd(b,c)}
function Qe(a){var b=Je(a);a=Oe(a);return new Ae(b.x,b.y,a.width,a.height)}
function Re(a){return"rtl"==Fe(a,"direction")}
function Se(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Te(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Se(a,c):0}
var Ue={thin:2,medium:4,thick:6};function Ve(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Ue?Ue[c]:Se(a,c)}
function We(a){if(E&&!id(9)){var b=Ve(a,"borderLeft"),c=Ve(a,"borderRight"),d=Ve(a,"borderTop");a=Ve(a,"borderBottom");return new ze(d,c,a,b)}b=Ee(a,"borderLeftWidth");c=Ee(a,"borderRightWidth");d=Ee(a,"borderTopWidth");a=Ee(a,"borderBottomWidth");return new ze(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
;var Xe=(new Date).getTime();function Ye(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;var Ze={bd:"GHELP_SEARCH",ad:"GHELP_AUTOCOMPLETE",cd:"GHELP_SUGGEST",Zc:"GHELP_ARTICLE",ed:"LINK",dd:"HELPCENTER",Xc:"EMAIL",Vc:"CHAT",Yc:"FORUM",fd:"MARKETING",gd:"ONEBOX",Wc:"CUSTOM",Uc:"AUTO",hd:"TESTING"};function $e(){var a=(wd.get("GuidedHelpResume")||"").split(":"),b=a[2];return{flowId:parseInt(a[0],10)||0,ja:a[1]||"",source:(nb(Ze,b)?b:void 0)||"CUSTOM"}}
;u("help.common.helpapiservice.Environment.PROD","https://clients6.google.com",void 0);u("help.common.helpapiservice.Environment.STAGING","https://content-googleapis-staging.sandbox.google.com",void 0);u("help.common.helpapiservice.Environment.TEST","https://content-googleapis-test.sandbox.google.com",void 0);function af(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
af.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function bf(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function cf(a){q.setTimeout(function(){throw a;},0)}
var df;
function ef(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=Ud(document,"IFRAME");e.style.display="none";e.src=Eb(new Bb(Cb,zb(Ab))).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(fc(jc));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(k){if(("*"==h||
k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.fb;c.fb=null;e()}};
return function(e){d.next={fb:e};d=d.next;b.port2.postMessage(0)}}return function(e){q.setTimeout(e,0)}}
;function ff(){this.g=this.f=null}
var hf=new af(function(){return new gf},function(a){a.reset()});
ff.prototype.add=function(a,b){var c=hf.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
ff.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function gf(){this.next=this.scope=this.f=null}
gf.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
gf.prototype.reset=function(){this.next=this.scope=this.f=null};function jf(a,b){kf||lf();mf||(kf(),mf=!0);nf.add(a,b)}
var kf;function lf(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);kf=function(){a.then(of)}}else kf=function(){var b=of;
!Ea(q.setImmediate)||q.Window&&q.Window.prototype&&!D("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(df||(df=ef()),df(b)):q.setImmediate(b)}}
var mf=!1,nf=new ff;function of(){for(var a;a=nf.remove();){try{a.f.call(a.scope)}catch(b){cf(b)}bf(hf,a)}mf=!1}
;function pf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function qf(a){this.f=0;this.s=void 0;this.j=this.g=this.i=null;this.l=this.o=!1;if(a!=Ba)try{var b=this;a.call(void 0,function(c){rf(b,2,c)},function(c){rf(b,3,c)})}catch(c){rf(this,3,c)}}
function sf(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
sf.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var tf=new af(function(){return new sf},function(a){a.reset()});
function uf(a,b,c){var d=tf.get();d.g=a;d.onRejected=b;d.context=c;return d}
function vf(){var a=new qf(Ba);rf(a,2,void 0);return a}
function wf(){return new qf(function(a,b){b(void 0)})}
qf.prototype.then=function(a,b,c){return xf(this,Ea(a)?a:null,Ea(b)?b:null,c)};
qf.prototype.$goog_Thenable=!0;function yf(a){xf(a,null,Ba,void 0)}
qf.prototype.cancel=function(a){if(0==this.f){var b=new zf(a);jf(function(){Af(this,b)},this)}};
function Af(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Af(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Bf(c),Cf(c,e,3,b)))}a.i=null}else rf(a,3,b)}
function Df(a,b){a.g||2!=a.f&&3!=a.f||Ef(a);a.j?a.j.next=b:a.g=b;a.j=b}
function xf(a,b,c,d){var e=uf(null,null,null);e.f=new qf(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof zf?g(h):f(k)}catch(m){g(m)}}:g});
e.f.i=a;Df(a,e);return e.f}
qf.prototype.w=function(a){this.f=0;rf(this,2,a)};
qf.prototype.H=function(a){this.f=0;rf(this,3,a)};
function rf(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.H;if(d instanceof qf){Df(d,uf(e||Ba,f||null,a));var g=!0}else if(pf(d))d.then(e,f,a),g=!0;else{if(Fa(d))try{var h=d.then;if(Ea(h)){Ff(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.s=c,a.f=b,a.i=null,Ef(a),3!=b||c instanceof zf||Gf(a,c))}}
function Ff(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ef(a){a.o||(a.o=!0,jf(a.v,a))}
function Bf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
qf.prototype.v=function(){for(var a;a=Bf(this);)Cf(this,a,this.f,this.s);this.o=!1};
function Cf(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,Hf(b,c,d);else try{b.i?b.g.call(b.context):Hf(b,c,d)}catch(e){If.call(null,e)}bf(tf,b)}
function Hf(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Gf(a,b){a.l=!0;jf(function(){a.l&&If.call(null,b)})}
var If=cf;function zf(a){Oa.call(this,a)}
B(zf,Oa);zf.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Jf(a){var b=Kf;this.l=[];this.J=b;this.B=a||null;this.j=this.f=!1;this.i=void 0;this.w=this.G=this.s=!1;this.o=0;this.g=null;this.v=0}
Jf.prototype.cancel=function(a){if(this.f)this.i instanceof Jf&&this.i.cancel();else{if(this.g){var b=this.g;delete this.g;a?b.cancel(a):(b.v--,0>=b.v&&b.cancel())}this.J?this.J.call(this.B,this):this.w=!0;this.f||(a=new Lf(this),Mf(this),Nf(this,!1,a))}};
Jf.prototype.H=function(a,b){this.s=!1;Nf(this,a,b)};
function Nf(a,b,c){a.f=!0;a.i=c;a.j=!b;Of(a)}
function Mf(a){if(a.f){if(!a.w)throw new Pf(a);a.w=!1}}
function Qf(a,b,c){a.l.push([b,c,void 0]);a.f&&Of(a)}
Jf.prototype.then=function(a,b,c){var d,e,f=new qf(function(g,h){d=g;e=h});
Qf(this,d,function(g){g instanceof Lf?f.cancel():e(g)});
return f.then(a,b,c)};
Jf.prototype.$goog_Thenable=!0;Jf.prototype.isError=function(a){return a instanceof Error};
function Rf(a){return Wa(a.l,function(b){return Ea(b[1])})}
function Of(a){if(a.o&&a.f&&Rf(a)){var b=a.o,c=Sf[b];c&&(q.clearTimeout(c.f),delete Sf[b]);a.o=0}a.g&&(a.g.v--,delete a.g);b=a.i;for(var d=c=!1;a.l.length&&!a.s;){var e=a.l.shift(),f=e[0],g=e[1];e=e[2];if(f=a.j?g:f)try{var h=f.call(e||a.B,b);void 0!==h&&(a.j=a.j&&(h==b||a.isError(h)),a.i=b=h);if(pf(b)||"function"===typeof q.Promise&&b instanceof q.Promise)d=!0,a.s=!0}catch(k){b=k,a.j=!0,Rf(a)||(c=!0)}}a.i=b;d&&(h=y(a.H,a,!0),d=y(a.H,a,!1),b instanceof Jf?(Qf(b,h,d),b.G=!0):b.then(h,d));c&&(b=new Tf(b),
Sf[b.f]=b,a.o=b.f)}
function Pf(){Oa.call(this)}
B(Pf,Oa);Pf.prototype.message="Deferred has already fired";Pf.prototype.name="AlreadyCalledError";function Lf(){Oa.call(this)}
B(Lf,Oa);Lf.prototype.message="Deferred was canceled";Lf.prototype.name="CanceledError";function Tf(a){this.f=q.setTimeout(y(this.i,this),0);this.g=a}
Tf.prototype.i=function(){delete Sf[this.f];throw this.g;};
var Sf={};function Uf(){var a=Vf,b={},c=b.document||document,d=Eb(a).toString(),e=Ud(document,"SCRIPT"),f={Bb:e,Fb:void 0},g=new Jf(f),h=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(h=window.setTimeout(function(){Wf(e,!0);var m=new Xf(1,"Timeout reached for loading script "+d);Mf(g);Nf(g,!1,m)},k),f.Fb=h);
e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Wf(e,b.ld||!1,h),Mf(g),Nf(g,!0,null))};
e.onerror=function(){Wf(e,!0,h);var m=new Xf(0,"Error while loading script "+d);Mf(g);Nf(g,!1,m)};
f=b.attributes||{};ub(f,{type:"text/javascript",charset:"UTF-8"});Ld(e,f);qc(e,a);Yf(c).appendChild(e);return g}
function Yf(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}
function Kf(){if(this&&this.Bb){var a=this.Bb;a&&"SCRIPT"==a.tagName&&Wf(a,!0,this.Fb)}}
function Wf(a,b,c){null!=c&&q.clearTimeout(c);a.onload=Ba;a.onerror=Ba;a.onreadystatechange=Ba;b&&window.setTimeout(function(){Yd(a)},0)}
function Xf(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);Oa.call(this,c);this.code=a}
B(Xf,Oa);var Zf="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function $f(){}
$f.prototype.next=function(){throw Zf;};
$f.prototype.U=function(){return this};
function ag(a){if(a instanceof $f)return a;if("function"==typeof a.U)return a.U(!1);if(x(a)){var b=0,c=new $f;c.next=function(){for(;;){if(b>=a.length)throw Zf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function bg(a,b){if(x(a))try{C(a,b,void 0)}catch(c){if(c!==Zf)throw c;}else{a=ag(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Zf)throw c;}}}
function cg(a){if(x(a))return db(a);a=ag(a);var b=[];bg(a,function(c){b.push(c)});
return b}
;function dg(a,b){this.g={};this.f=[];this.j=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof dg)for(c=a.da(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=dg.prototype;l.K=function(){return this.i};
l.M=function(){eg(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
l.da=function(){eg(this);return this.f.concat()};
l.za=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(fg(this.g,c)&&this.g[c]==a)return!0}return!1};
l.equals=function(a,b){if(this===a)return!0;if(this.i!=a.K())return!1;var c=b||gg;eg(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function gg(a,b){return a===b}
l.isEmpty=function(){return 0==this.i};
l.clear=function(){this.g={};this.j=this.i=this.f.length=0};
l.remove=function(a){return fg(this.g,a)?(delete this.g[a],this.i--,this.j++,this.f.length>2*this.i&&eg(this),!0):!1};
function eg(a){if(a.i!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];fg(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.i!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],fg(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
l.get=function(a,b){return fg(this.g,a)?this.g[a]:b};
l.set=function(a,b){fg(this.g,a)||(this.i++,this.f.push(a),this.j++);this.g[a]=b};
l.forEach=function(a,b){for(var c=this.da(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new dg(this)};
l.U=function(a){eg(this);var b=0,c=this.j,d=this,e=new $f;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Zf;var f=d.f[b++];return a?f:d.g[f]};
return e};
function fg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function hg(a){return a.K&&"function"==typeof a.K?a.K():x(a)||"string"===typeof a?a.length:lb(a)}
function ig(a){if(a.M&&"function"==typeof a.M)return a.M();if("string"===typeof a)return a.split("");if(x(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return mb(a)}
function jg(a){if(a.da&&"function"==typeof a.da)return a.da();if(!a.M||"function"!=typeof a.M){if(x(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function kg(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(x(a)||"string"===typeof a)C(a,b,c);else for(var d=jg(a),e=ig(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
function lg(a,b){if("function"==typeof a.map)return a.map(b,void 0);if(x(a)||"string"===typeof a)return Ua(a,b,void 0);var c=jg(a),d=ig(a),e=d.length;if(c){var f={};for(var g=0;g<e;g++)f[c[g]]=b.call(void 0,d[g],c[g],a)}else for(f=[],g=0;g<e;g++)f[g]=b.call(void 0,d[g],void 0,a);return f}
function mg(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(x(a)||"string"===typeof a)return Xa(a,b,void 0);for(var c=jg(a),d=ig(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function ng(a,b){this.i=this.s=this.j="";this.v=null;this.l=this.f="";this.o=!1;var c;a instanceof ng?(this.o=void 0!==b?b:a.o,og(this,a.j),this.s=a.s,this.i=a.i,pg(this,a.v),this.f=a.f,qg(this,a.g.clone()),this.l=a.l):a&&(c=String(a).match(Bc))?(this.o=!!b,og(this,c[1]||"",!0),this.s=rg(c[2]||""),this.i=rg(c[3]||"",!0),pg(this,c[4]),this.f=rg(c[5]||"",!0),qg(this,c[6]||"",!0),this.l=rg(c[7]||"")):(this.o=!!b,this.g=new sg(null,this.o))}
ng.prototype.toString=function(){var a=[],b=this.j;b&&a.push(tg(b,ug,!0),":");var c=this.i;if(c||"file"==b)a.push("//"),(b=this.s)&&a.push(tg(b,ug,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.v,null!=c&&a.push(":",String(c));if(c=this.f)this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(tg(c,"/"==c.charAt(0)?vg:wg,!0));(c=this.g.toString())&&a.push("?",c);(c=this.l)&&a.push("#",tg(c,xg));return a.join("")};
ng.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?og(b,a.j):c=!!a.s;c?b.s=a.s:c=!!a.i;c?b.i=a.i:c=null!=a.v;var d=a.f;if(c)pg(b,a.v);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.i&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.g.toString();c?qg(b,a.g.clone()):c=!!a.l;c&&(b.l=a.l);return b};
ng.prototype.clone=function(){return new ng(this)};
function og(a,b,c){a.j=c?rg(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function pg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.v=b}else a.v=null}
function qg(a,b,c){b instanceof sg?(a.g=b,yg(a.g,a.o)):(c||(b=tg(b,zg)),a.g=new sg(b,a.o))}
function rg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function tg(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Ag),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Ag(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var ug=/[#\/\?@]/g,wg=/[#\?:]/g,vg=/[#\?]/g,zg=/[#\?@]/g,xg=/#/g;function sg(a,b){this.g=this.f=null;this.i=a||null;this.j=!!b}
function Bg(a){a.f||(a.f=new dg,a.g=0,a.i&&Ec(a.i,function(b,c){a.add(sc(b),c)}))}
l=sg.prototype;l.K=function(){Bg(this);return this.g};
l.add=function(a,b){Bg(this);this.i=null;a=Cg(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
l.remove=function(a){Bg(this);a=Cg(this,a);return fg(this.f.g,a)?(this.i=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
l.clear=function(){this.f=this.i=null;this.g=0};
l.isEmpty=function(){Bg(this);return 0==this.g};
function Dg(a,b){Bg(a);b=Cg(a,b);return fg(a.f.g,b)}
l.za=function(a){var b=this.M();return $a(b,a)};
l.forEach=function(a,b){Bg(this);this.f.forEach(function(c,d){C(c,function(e){a.call(b,e,d,this)},this)},this)};
l.da=function(){Bg(this);for(var a=this.f.M(),b=this.f.da(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
l.M=function(a){Bg(this);var b=[];if("string"===typeof a)Dg(this,a)&&(b=cb(b,this.f.get(Cg(this,a))));else{a=this.f.M();for(var c=0;c<a.length;c++)b=cb(b,a[c])}return b};
l.set=function(a,b){Bg(this);this.i=null;a=Cg(this,a);Dg(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
l.get=function(a,b){if(!a)return b;var c=this.M(a);return 0<c.length?String(c[0]):b};
l.toString=function(){if(this.i)return this.i;if(!this.f)return"";for(var a=[],b=this.f.da(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.M(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.i=a.join("&")};
l.clone=function(){var a=new sg;a.i=this.i;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function Cg(a,b){var c=String(b);a.j&&(c=c.toLowerCase());return c}
function yg(a,b){b&&!a.j&&(Bg(a),a.i=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),0<c.length&&(this.i=null,this.f.set(Cg(this,e),db(c)),this.g=this.g+c.length))},a));
a.j=b}
l.extend=function(a){for(var b=0;b<arguments.length;b++)kg(arguments[b],function(c,d){this.add(d,c)},this)};var Eg={},Vf=new Bb(Cb,zb(new wb(xb,"https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js")));function Fg(a,b){return Gg({theme:b.theme,document:b.document,Aa:b.Aa||"https://clients6.google.com",apiKey:b.apiKey,Ca:b.Ca,locale:b.locale}).then(function(){return v("help.guide.loadFlow")(a,b.ja,b.Cc,b.Ob,b.source||"CUSTOM",b.document)})}
function Hg(a,b,c,d,e,f,g,h,k,m,n,r){yf(Fg(a,{apiKey:r||"",Ob:k||!1,document:m||void 0,Aa:n||void 0,Ca:c,locale:d,theme:e||void 0,source:"CUSTOM",ja:h||void 0}))}
function Ig(a){a=a instanceof ng?a.clone():new ng(a,void 0);var b=a.g.get("ghstartsource")||"";return{flowId:parseInt(a.g.get("ghstartflowid"),10)||0,ja:a.g.get("ghstartstepid")||"",source:{helpcenter:"HELPCENTER",email:"EMAIL",chat:"CHAT",forum:"FORUM",marketing:"MARKETING",onebox:"ONEBOX",testing:"TESTING"}[b]||"LINK"}}
function Gg(a){window.guidedhelp=window.guidedhelp||{};if(window.guidedhelp.loaded)var b=vf();else Jg||(Jg=Uf().then()),b=Jg;return b.then(function(){v("help.guide.init")(a.Ca,a.locale,a.theme,a.document,a.Aa,a.apiKey,Eg)})}
var Jg=null;function Kg(a,b,c,d,e,f,g,h,k){if(!$e().flowId)return!1;a=k||"";g=g||void 0;h=h||void 0;d=d||void 0;e=$e();e.flowId?(wd.remove("GuidedHelpResume","/",""),b=Fg(e.flowId,{apiKey:a,document:g,Aa:h,Ca:b,locale:c,Cc:!1,ja:e.ja||void 0,theme:d,source:e.source})):b=wf();yf(b);return!0}
u("hgb.loadFlow",Hg,void 0);u("hgb.resumeCookiedFlow",Kg,void 0);u("hgb.startFlowFromUrl",function(a,b,c,d,e,f,g,h,k,m){a=m||Rd().top.location;if(!Ig(a).flowId)return!1;k=k||"";h=h||void 0;d=d||void 0;a=Ig(a||Rd().top.location);b=a.flowId?Fg(a.flowId,{apiKey:k,document:g,Aa:h,Ca:b,locale:c,source:a.source,ja:a.ja,theme:d}):wf();yf(b);return!0},void 0);/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Lg=window,Mg=document,Ng=Lg.location;function Og(){}
var Pg=/\[native code\]/;function M(a,b,c){return a[b]=a[b]||c}
function Qg(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Rg(){var a;if((a=Object.create)&&Pg.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Sg=M(Lg,"gapi",{});var N;N=M(Lg,"___jsl",Rg());M(N,"I",0);M(N,"hel",10);function Tg(){var a=Ng.href;if(N.dpo)var b=N.h;else{b=N.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ug(a){var b=M(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Vg(a){return M(M(N,"H",Rg()),a,Rg())}
;function Wg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(r){for(var t=g,p=0;64>p;p+=4)t[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],J=e[2],w=e[3],Qb=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var ia=w^A&(J^w);var Ta=1518500249}else ia=A^J^w,Ta=1859775393;else 60>p?(ia=A&J|w&(A|J),Ta=2400959708):(ia=A^J^w,Ta=3395469782);ia=((r<<5|r>>>27)&4294967295)+ia+Qb+Ta+t[p]&4294967295;Qb=w;w=J;J=(A<<30|A>>>2)&4294967295;A=r;r=ia}e[0]=e[0]+r&4294967295;e[1]=e[1]+
A&4294967295;e[2]=e[2]+J&4294967295;e[3]=e[3]+w&4294967295;e[4]=e[4]+Qb&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],A=0,J=r.length;A<J;++A)p.push(r.charCodeAt(A));r=p}t||(t=r.length);p=0;if(0==m)for(;p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[m++]=r[p++],n++,64==m)for(m=0,b(f);p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],t=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var A=24;0<=A;A-=8)r[t++]=e[p]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,Nb:function(){for(var r=d(),t="",p=0;p<r.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return t}}}
;function Xg(a,b,c){var d=[],e=[];if(1==("array"==Da(c)?2:1))return e=[b,a],C(d,function(h){e.push(h)}),Yg(e.join(" "));
var f=[],g=[];C(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(h){e.push(h)});
a=Yg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Yg(a){var b=Wg();b.update(a);return b.Nb().toLowerCase()}
;function Zg(a){var b=Ye(String(q.location.href)),c;(c=q.__SAPISID||q.__APISID||q.__OVERRIDE_SID)?c=!0:(c=new ud(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,c||(c=new ud(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&c&&b?[b,Xg(Ye(d),c,a||null)].join(" "):null}return null}
;var $g=M(N,"perf",Rg());M($g,"g",Rg());var ah=M($g,"i",Rg());M($g,"r",[]);Rg();Rg();function bh(a,b,c){b&&0<b.length&&(b=ch(b),c&&0<c.length&&(b+="___"+ch(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=M(ah,"_p",Rg()),M(b,c,Rg())[a]=(new Date).getTime(),b=$g.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ch(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var dh=Rg(),eh=[];function fh(a){throw Error("Bad hint"+(a?": "+a:""));}
eh.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=M(N,b,[]).concat(c):M(N,b,c)}if(b=a.u)a=M(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var gh=/^(\/[a-zA-Z0-9_\-]+)+$/,hh=[/\/amp\//,/\/amp$/,/^\/amp$/],ih=/^[a-zA-Z0-9\-_\.,!]+$/,jh=/^gapi\.loaded_[0-9]+$/,kh=/^[a-zA-Z0-9,._-]+$/;function lh(a,b,c,d){var e=a.split(";"),f=e.shift(),g=dh[f],h=null;g?h=g(e,b,c,d):fh("no hint processor for: "+f);h||fh("failed to generate load url");b=h;c=b.match(mh);(d=b.match(nh))&&1===d.length&&oh.test(b)&&c&&1===c.length||fh("failed sanity: "+a);return h}
function ph(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=qh(a);jh.test(c)||fh("invalid_callback");b=rh(b);d=d&&d.length?rh(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.eb?"/am="+e(a.eb):"",a.Ab?"/rs="+e(a.Ab):"",a.Kb?"/t="+e(a.Kb):"","/cb=",e(c)].join("")}
function qh(a){"/"!==a.charAt(0)&&fh("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))fh("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");gh.test(b)||fh("invalid_prefix");c=0;for(d=hh.length;c<d;++c)hh[c].test(b)&&fh("invalid_prefix");c=sh(a,
"k",!0);d=sh(a,"am");e=sh(a,"rs");a=sh(a,"t");return{pathPrefix:b,version:c,eb:d,Ab:e,Kb:a}}
function rh(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");kh.test(e)&&b.push(e)}return b.join(",")}
function sh(a,b,c){a=a[b];!a&&c&&fh("missing: "+b);if(a){if(ih.test(a))return a;fh("invalid: "+b)}return null}
var oh=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,nh=/\/cb=/g,mh=/\/\//g;function th(){var a=Tg();if(!a)throw Error("Bad hint");return a}
dh.m=function(a,b,c,d){(a=a[0])||fh("missing_hint");return"https://apis.google.com"+ph(a,b,c,d)};
var uh=decodeURI("%73cript"),vh=/^[-+_0-9\/A-Za-z]+={0,2}$/;function wh(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function xh(){var a=N.nonce;return void 0!==a?a&&a===String(a)&&a.match(vh)?a:N.nonce=null:Mg.querySelector?(a=Mg.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(vh)?N.nonce=a:N.nonce=null):null:null}
function yh(a){if("loading"!=Mg.readyState)zh(a);else{var b=xh(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+uh+' src="'+encodeURI(a)+'"'+c+"></"+uh+">";Mg.write(a)}}
function zh(a){var b=Mg.createElement(uh);b.setAttribute("src",a);a=xh();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Mg.getElementsByTagName(uh)[0])?a.parentNode.insertBefore(b,a):(Mg.head||Mg.body||Mg.documentElement).appendChild(b)}
function Ah(a,b){var c=b&&b._c;if(c)for(var d=0;d<eh.length;d++){var e=eh[d][0],f=eh[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Bh(a,b,c){Ch(function(){var d=b===Tg()?M(Sg,"_",Rg()):Rg();d=M(Vg(b),"_",d);a(d)},c)}
function Dh(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ah(a,c);var d=a?a.split(":"):[],e=c.h||th(),f=M(N,"ah",Rg());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var m=g.length&&g[g.length-1]||null,n=m;m&&m.hint==k||(n={hint:k,features:[]},g.push(n));n.features.push(h)}var r=g.length;if(1<r){var t=c.callback;t&&(c.callback=function(){0==--r&&t()})}for(;d=g.shift();)Eh(d.features,c,d.hint)}else Eh(d||[],c,e)}
function Eh(a,b,c){function d(ia,Ta){if(r)return 0;Lg.clearTimeout(n);t.push.apply(t,A);var hd=((Sg||{}).config||{}).update;hd?hd(f):f&&M(N,"cu",[]).push(f);if(Ta){bh("me0",ia,p);try{Bh(Ta,c,m)}finally{bh("me1",ia,p)}}return 1}
a=Qg(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,m=void 0;"function"==typeof k&&(m=k);var n=null,r=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=M(Vg(c),"r",[]).sort();var t=M(Vg(c),"L",[]).sort(),p=[].concat(k);0<g&&(n=Lg.setTimeout(function(){r=!0;h()},g));
var A=wh(a,t);if(A.length){A=wh(a,k);var J=M(N,"CP",[]),w=J.length;J[w]=function(ia){function Ta(){var he=J[w+1];he&&he()}
function hd(he){J[w]=null;d(A,ia)&&Ug(function(){e&&e();he()})}
if(!ia)return 0;bh("ml1",A,p);0<w&&J[w-1]?J[w]=function(){hd(Ta)}:hd(Ta)};
if(A.length){var Qb="loaded_"+N.I++;Sg[Qb]=function(ia){J[w](ia);Sg[Qb]=null};
a=lh(c,A,"gapi."+Qb,k);k.push.apply(k,A);bh("ml0",A,p);b.sync||Lg.___gapisync?yh(a):zh(a)}else J[w](Og)}else d(A)&&e&&e()}
function Ch(a,b){if(N.hee&&0<N.hel)try{return a()}catch(c){b&&b(c),N.hel--,Dh("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Sg.load=function(a,b){return Ch(function(){return Dh(a,b)})};function Fh(){}
Ca(Fh);Fh.prototype.f=0;var Gh=!E||id(9),Hh=!E||id(9),Ih=E&&!gd("9"),Jh=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{q.addEventListener("test",Ba,b),q.removeEventListener("test",Ba,b)}catch(c){}return a}();function O(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.g=!1}
O.prototype.stopPropagation=function(){this.g=!0};
O.prototype.preventDefault=function(){this.defaultPrevented=!0};function Kh(a,b){O.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.f=null;a&&this.init(a,b)}
B(Kh,O);var Lh=[1,4,2],Mh={2:"touch",3:"pen",4:"mouse"};
Kh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?F&&(Nc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Mh[a.pointerType]||"";this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
Kh.prototype.stopPropagation=function(){Kh.A.stopPropagation.call(this);this.f.stopPropagation?this.f.stopPropagation():this.f.cancelBubble=!0};
Kh.prototype.preventDefault=function(){Kh.A.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ih)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Nh="closure_listenable_"+(1E6*Math.random()|0);function Oh(a){return!(!a||!a[Nh])}
var Ph=0;function Qh(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++Ph;this.ta=this.Fa=!1}
function Rh(a){a.ta=!0;a.listener=null;a.f=null;a.src=null;a.La=null}
;function Sh(a){this.src=a;this.listeners={};this.f=0}
Sh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Th(a,b,d,e);-1<g?(b=a[g],c||(b.Fa=!1)):(b=new Qh(b,this.src,f,!!d,e),b.Fa=c,a.push(b));return b};
Sh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Th(e,b,c,d);return-1<b?(Rh(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Uh(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=bb(a.listeners[c],b);d&&(Rh(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--));return d}
function Vh(a){var b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Rh(d[e]);delete a.listeners[c];a.f--}}
function Wh(a,b,c,d,e){a=a.listeners[b.toString()];b=-1;a&&(b=Th(a,c,d,e));return-1<b?a[b]:null}
function Th(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ta&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1}
;var Xh="closure_lm_"+(1E6*Math.random()|0),Yh={},Zh=0;function P(a,b,c,d,e){if(d&&d.once)return $h(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)P(a,b[f],c,d,e);return null}c=ai(c);return Oh(a)?a.V.add(String(b),c,!1,Fa(d)?!!d.capture:!!d,e):bi(a,b,c,!1,d,e)}
function bi(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Fa(e)?!!e.capture:!!e,h=ci(a);h||(a[Xh]=h=new Sh(a));c=h.add(b,c,d,g,f);if(c.f)return c;d=di();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Jh||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ei(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Zh++;return c}
function di(){var a=fi,b=Hh?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function $h(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)$h(a,b[f],c,d,e);return null}c=ai(c);return Oh(a)?a.V.add(String(b),c,!0,Fa(d)?!!d.capture:!!d,e):bi(a,b,c,!0,d,e)}
function gi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)gi(a,b[f],c,d,e);else d=Fa(d)?!!d.capture:!!d,c=ai(c),Oh(a)?a.V.remove(String(b),c,d,e):a&&(a=ci(a))&&(b=Wh(a,b,c,d,e))&&hi(b)}
function hi(a){if("number"===typeof a||!a||a.ta)return!1;var b=a.src;if(Oh(b))return Uh(b.V,a);var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ei(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Zh--;(c=ci(b))?(Uh(c,a),0==c.f&&(c.src=null,b[Xh]=null)):Rh(a);return!0}
function ii(a){if(a)if(Oh(a))a.V&&Vh(a.V);else if(a=ci(a)){var b=0,c;for(c in a.listeners)for(var d=a.listeners[c].concat(),e=0;e<d.length;++e)hi(d[e])&&++b}}
function ei(a){return a in Yh?Yh[a]:Yh[a]="on"+a}
function ji(a,b,c,d){var e=!0;if(a=ci(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ta&&(f=ki(f,d),e=e&&!1!==f)}return e}
function ki(a,b){var c=a.listener,d=a.La||a.src;a.Fa&&hi(a);return c.call(d,b)}
function fi(a,b){if(a.ta)return!0;if(!Hh){var c=b||v("window.event"),d=new Kh(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.g&&0<=g;g--){d.currentTarget=c[g];var h=ji(c[g],f,!0,d);e=e&&h}for(g=0;!d.g&&g<c.length;g++)d.currentTarget=c[g],h=ji(c[g],f,!1,d),e=e&&h}return e}return ki(a,new Kh(b,this))}
function ci(a){a=a[Xh];return a instanceof Sh?a:null}
var li="__closure_events_fn_"+(1E9*Math.random()>>>0);function ai(a){if(Ea(a))return a;a[li]||(a[li]=function(b){return a.handleEvent(b)});
return a[li]}
;function mi(a){we.call(this);this.g=a;this.f={}}
B(mi,we);var ni=[];function oi(a,b,c,d,e){return pi(a,b,c,d,e)}
function pi(a,b,c,d,e){Array.isArray(c)||(c&&(ni[0]=c.toString()),c=ni);for(var f=0;f<c.length;f++){var g=P(b,c[f],d||a.handleEvent,e||!1,a.g||a);if(!g)break;a.f[g.key]=g}return a}
function qi(a,b,c,d,e,f){if(Array.isArray(c))for(var g=0;g<c.length;g++)qi(a,b,c[g],d,e,f);else d=d||a.handleEvent,e=Fa(e)?!!e.capture:!!e,f=f||a.g||a,d=ai(d),e=!!e,c=Oh(b)?Wh(b.V,String(c),d,e,f):b?(b=ci(b))?Wh(b,c,d,e,f):null:null,c&&(hi(c),delete a.f[c.key]);return a}
function ri(a){kb(a.f,function(b,c){this.f.hasOwnProperty(c)&&hi(b)},a);
a.f={}}
mi.prototype.C=function(){mi.A.C.call(this);ri(this)};
mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Q(){we.call(this);this.V=new Sh(this);this.Pa=this;this.wa=null}
B(Q,we);Q.prototype[Nh]=!0;Q.prototype.addEventListener=function(a,b,c,d){P(this,a,b,c,d)};
Q.prototype.removeEventListener=function(a,b,c,d){gi(this,a,b,c,d)};
Q.prototype.dispatchEvent=function(a){var b=this.wa;if(b){var c=[];for(var d=1;b;b=b.wa)c.push(b),++d}b=this.Pa;d=a.type||a;if("string"===typeof a)a=new O(a,b);else if(a instanceof O)a.target=a.target||b;else{var e=a;a=new O(d,b);ub(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var g=a.currentTarget=c[f];e=si(g,d,!0,a)&&e}a.g||(g=a.currentTarget=b,e=si(g,d,!0,a)&&e,a.g||(e=si(g,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)g=a.currentTarget=c[f],e=si(g,d,!1,a)&&e;return e};
Q.prototype.C=function(){Q.A.C.call(this);this.V&&Vh(this.V);this.wa=null};
function si(a,b,c,d){b=a.V.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ta&&g.capture==c){var h=g.listener,k=g.La||g.src;g.Fa&&Uh(a.V,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ti(a){Q.call(this);this.G=a||Ed();this.la=null;this.sa=!1;this.o=null;this.v=void 0;this.fa=null;this.na=!1}
B(ti,Q);l=ti.prototype;l.fc=Fh.ga();l.getId=function(){return this.la||(this.la=":"+(this.fc.f++).toString(36))};
l.F=function(){return this.o};
function ui(a){a.v||(a.v=new mi(a));return a.v}
function vi(a,b){if(a.sa)throw Error("Component already rendered");if(b){a.na=!0;var c=Gd(b);a.G&&a.G.f==c||(a.G=Ed(b));a.Ra(b);a.oa()}else throw Error("Invalid element to decorate");}
l.Ra=function(a){this.o=a};
l.oa=function(){this.sa=!0;wi(this,function(a){!a.sa&&a.F()&&a.oa()})};
l.Ia=function(){wi(this,function(a){a.sa&&a.Ia()});
this.v&&ri(this.v);this.sa=!1};
l.C=function(){this.sa&&this.Ia();this.v&&(this.v.dispose(),delete this.v);wi(this,function(a){a.dispose()});
!this.na&&this.o&&Yd(this.o);this.o=this.fa=null;ti.A.C.call(this)};
function wi(a,b){a.fa&&C(a.fa,b,void 0)}
;function xi(){Q.call(this)}
B(xi,Q);l=xi.prototype;l.ka=0;l.W=0;l.S=100;l.R=0;l.X=1;l.N=!1;l.ha=!1;l.setValue=function(a){a=yi(this,a);this.ka!=a&&(this.ka=a+this.R>this.S?this.S-this.R:a<this.W?this.W:a,this.N||this.ha||this.dispatchEvent("change"))};
function zi(a){return yi(a,a.ka)}
function Ai(a,b){b=yi(a,b);a.R!=b&&(a.R=0>b?0:a.ka+b>a.S?a.S-a.ka:b,a.N||a.ha||a.dispatchEvent("change"))}
function Bi(a){var b=a.R;return null==a.X?b:Math.round(b/a.X)*a.X}
function Ci(a,b){if(a.W!=b){var c=a.N;a.N=!0;a.W=b;b+a.R>a.S&&(a.R=a.S-a.W);b>a.ka&&a.setValue(b);b>a.S&&(a.R=0,Di(a,b),a.setValue(b));a.N=c;a.N||a.ha||a.dispatchEvent("change")}}
function Di(a,b){b=yi(a,b);if(a.S!=b){var c=a.N;a.N=!0;a.S=b;b<a.ka+a.R&&a.setValue(b-a.R);b<a.W&&(a.R=0,Ci(a,b),a.setValue(a.S));b<a.W+a.R&&(a.R=a.S-a.W);a.N=c;a.N||a.ha||a.dispatchEvent("change")}}
function yi(a,b){return null==a.X?b:a.W+Math.round((b-a.W)/a.X)*a.X}
;var Ei;vb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
function Fi(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Ei||(Ei={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=Ei,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
;function Gi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Hi(a){return a.classList?a.classList:Gi(a).match(/\S+/g)||[]}
function Ii(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function R(a,b){return a.classList?a.classList.contains(b):$a(Hi(a),b)}
function S(a,b){if(a.classList)a.classList.add(b);else if(!R(a,b)){var c=Gi(a);Ii(a,c+(0<c.length?" "+b:b))}}
function Ji(a,b){if(a.classList)C(b,function(f){S(a,f)});
else{var c={};C(Hi(a),function(f){c[f]=!0});
C(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Ii(a,d)}}
function T(a,b){a.classList?a.classList.remove(b):R(a,b)&&Ii(a,Sa(Hi(a),function(c){return c!=b}).join(" "))}
function Ki(a,b){a.classList?C(b,function(c){T(a,c)}):Ii(a,Sa(Hi(a),function(c){return!$a(b,c)}).join(" "))}
function U(a,b,c){c?S(a,b):T(a,b)}
function Li(a,b,c){R(a,b)&&(T(a,b),S(a,c))}
function Mi(a,b){var c=!R(a,b);U(a,b,c)}
;function Ni(a,b,c,d,e,f){if(G&&!gd("525"))return!0;if(Tc&&e)return Oi(a);if(e&&!d)return!1;if(!F){"number"===typeof b&&(b=Pi(b));var g=17==b||18==b||Tc&&91==b;if((!c||Tc)&&g||Tc&&16==b&&(d||f))return!1}if((G||Rc)&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(E&&d&&b==a)return!1;switch(a){case 13:return F?f||e?!1:!(c&&d):!0;case 27:return!(G||Rc||F)}return F&&(d||e||f)?!1:Oi(a)}
function Oi(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||(G||Rc)&&0==a)return!0;switch(a){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:case 58:return!0;case 173:return F;default:return!1}}
function Pi(a){if(F)a=Qi(a);else if(Tc&&G)switch(a){case 93:a=91}return a}
function Qi(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}}
;function Ri(a,b){Q.call(this);a&&(this.Oa&&Si(this),this.qa=a,this.Na=P(this.qa,"keypress",this,b),this.Xa=P(this.qa,"keydown",this.Tb,b,this),this.Oa=P(this.qa,"keyup",this.Wb,b,this))}
B(Ri,Q);l=Ri.prototype;l.qa=null;l.Na=null;l.Xa=null;l.Oa=null;l.O=-1;l.ca=-1;l.Qa=!1;
var Ti={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ui={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Vi=!G||gd("525"),Wi=Tc&&F;l=Ri.prototype;
l.Tb=function(a){if(G||Rc)if(17==this.O&&!a.ctrlKey||18==this.O&&!a.altKey||Tc&&91==this.O&&!a.metaKey)this.ca=this.O=-1;-1==this.O&&(a.ctrlKey&&17!=a.keyCode?this.O=17:a.altKey&&18!=a.keyCode?this.O=18:a.metaKey&&91!=a.keyCode&&(this.O=91));Vi&&!Ni(a.keyCode,this.O,a.shiftKey,a.ctrlKey,a.altKey,a.metaKey)?this.handleEvent(a):(this.ca=Pi(a.keyCode),Wi&&(this.Qa=a.altKey))};
l.Wb=function(a){this.ca=this.O=-1;this.Qa=a.altKey};
l.handleEvent=function(a){var b=a.f,c=b.altKey;if(E&&"keypress"==a.type){var d=this.ca;var e=13!=d&&27!=d?b.keyCode:0}else(G||Rc)&&"keypress"==a.type?(d=this.ca,e=0<=b.charCode&&63232>b.charCode&&Oi(d)?b.charCode:0):Qc&&!G?(d=this.ca,e=Oi(d)?b.keyCode:0):("keypress"==a.type?(Wi&&(c=this.Qa),b.keyCode==b.charCode?32>b.keyCode?(d=b.keyCode,e=0):(d=this.ca,e=b.charCode):(d=b.keyCode||this.ca,e=b.charCode||0)):(d=b.keyCode||this.ca,e=b.charCode||0),Tc&&63==e&&224==d&&(d=191));var f=d=Pi(d);d?63232<=d&&
d in Ti?f=Ti[d]:25==d&&a.shiftKey&&(f=9):b.keyIdentifier&&b.keyIdentifier in Ui&&(f=Ui[b.keyIdentifier]);F&&Vi&&"keypress"==a.type&&!Ni(f,this.O,a.shiftKey,a.ctrlKey,c,a.metaKey)||(a=f==this.O,this.O=f,b=new Xi(f,e,a,b),b.altKey=c,this.dispatchEvent(b))};
l.F=function(){return this.qa};
function Si(a){a.Na&&(hi(a.Na),hi(a.Xa),hi(a.Oa),a.Na=null,a.Xa=null,a.Oa=null);a.qa=null;a.O=-1;a.ca=-1}
l.C=function(){Ri.A.C.call(this);Si(this)};
function Xi(a,b,c,d){Kh.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}
B(Xi,Kh);function Yi(a,b){Q.call(this);this.f=a;var c=be(this.f)?this.f:this.f?this.f.body:null;this.l=!!c&&Re(c);this.g=P(this.f,F?"DOMMouseScroll":"mousewheel",this,b)}
B(Yi,Q);Yi.prototype.handleEvent=function(a){var b=0,c=0,d=a.f;"mousewheel"==d.type?(a=Zi(-d.wheelDelta),void 0!==d.wheelDeltaX?(b=Zi(-d.wheelDeltaX),c=Zi(-d.wheelDeltaY)):c=a):(a=d.detail,100<a?a=3:-100>a&&(a=-3),void 0!==d.axis&&d.axis===d.HORIZONTAL_AXIS?b=a:c=a);"number"===typeof this.i&&(b=Ad(b,-this.i,this.i));"number"===typeof this.j&&(c=Ad(c,-this.j,this.j));this.l&&(b=-b);b=new $i(a,d,b,c);this.dispatchEvent(b)};
function Zi(a){return G&&(Tc||Vc)&&0!=a%40?a:a/40}
Yi.prototype.C=function(){Yi.A.C.call(this);hi(this.g);this.g=null};
function $i(a,b,c,d){Kh.call(this,b);this.type="mousewheel";this.detail=a;this.deltaX=c;this.deltaY=d}
B($i,Kh);function aj(a,b){Q.call(this);this.g=a||1;this.f=b||q;this.i=y(this.Dc,this);this.j=z()}
B(aj,Q);l=aj.prototype;l.enabled=!1;l.Y=null;l.setInterval=function(a){this.g=a;this.Y&&this.enabled?(this.stop(),this.start()):this.Y&&this.stop()};
l.Dc=function(){if(this.enabled){var a=z()-this.j;0<a&&a<.8*this.g?this.Y=this.f.setTimeout(this.i,this.g-a):(this.Y&&(this.f.clearTimeout(this.Y),this.Y=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.Y||(this.Y=this.f.setTimeout(this.i,this.g),this.j=z())};
l.stop=function(){this.enabled=!1;this.Y&&(this.f.clearTimeout(this.Y),this.Y=null)};
l.C=function(){aj.A.C.call(this);this.stop();delete this.f};
function bj(a,b){if(!Ea(a))if(a&&"function"==typeof a.handleEvent)a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:q.setTimeout(a,b||0)}
;function cj(a,b,c){we.call(this);this.f=a;this.j=b||0;this.g=c;this.i=y(this.Rb,this)}
B(cj,we);l=cj.prototype;l.Ba=0;l.C=function(){cj.A.C.call(this);this.stop();delete this.f;delete this.g};
l.start=function(a){this.stop();this.Ba=bj(this.i,void 0!==a?a:this.j)};
l.stop=function(){this.isActive()&&q.clearTimeout(this.Ba);this.Ba=0};
l.isActive=function(){return 0!=this.Ba};
l.Rb=function(){this.Ba=0;this.f&&this.f.call(this.g)};var dj={},ej=null;function fj(a){a=Ga(a);delete dj[a];qb(dj)&&ej&&ej.stop()}
function gj(){ej||(ej=new cj(function(){hj()},20));
var a=ej;a.isActive()||a.start()}
function hj(){var a=z();kb(dj,function(b){ij(b,a)});
qb(dj)||gj()}
;function jj(){Q.call(this);this.f=0;this.endTime=this.startTime=null}
B(jj,Q);jj.prototype.o=function(){this.T("begin")};
jj.prototype.i=function(){this.T("end")};
jj.prototype.ia=function(){this.T("finish")};
jj.prototype.T=function(a){this.dispatchEvent(a)};function kj(a,b,c,d){jj.call(this);if(!Array.isArray(a)||!Array.isArray(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.g=a;this.G=b;this.duration=c;this.v=d;this.coords=[];this.l=!1;this.progress=this.w=0;this.s=null}
B(kj,jj);l=kj.prototype;l.getDuration=function(){return this.duration};
l.Ua=function(a){if(a||0==this.f)this.progress=0,this.coords=this.g;else if(1==this.f)return;fj(this);this.startTime=a=z();-1==this.f&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.s=this.startTime;this.progress||this.o();this.T("play");-1==this.f&&this.T("resume");this.f=1;var b=Ga(this);b in dj||(dj[b]=this);gj();ij(this,a)};
l.stop=function(a){fj(this);this.f=0;a&&(this.progress=1);lj(this,this.progress);this.T("stop");this.i()};
l.C=function(){0==this.f||this.stop(!1);this.T("destroy");kj.A.C.call(this)};
l.destroy=function(){this.dispose()};
function ij(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.w=1E3/(b-a.s);a.s=b;lj(a,a.progress);1==a.progress?(a.f=0,fj(a),a.ia(),a.i()):1==a.f&&a.Za()}
function lj(a,b){Ea(a.v)&&(b=a.v(b));a.coords=Array(a.g.length);for(var c=0;c<a.g.length;c++)a.coords[c]=(a.G[c]-a.g[c])*b+a.g[c]}
l.Za=function(){this.T("animate")};
l.T=function(a){this.dispatchEvent(new mj(a,this))};
function mj(a,b){O.call(this,a);this.coords=b.coords;this.x=b.coords[0];this.y=b.coords[1];this.z=b.coords[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.w;this.state=b.f}
B(mj,O);function nj(){jj.call(this);this.g=[]}
B(nj,jj);nj.prototype.add=function(a){$a(this.g,a)||(this.g.push(a),P(a,"finish",this.l,!1,this))};
nj.prototype.remove=function(a){bb(this.g,a)&&gi(a,"finish",this.l,!1,this)};
nj.prototype.C=function(){C(this.g,function(a){a.dispose()});
this.g.length=0;nj.A.C.call(this)};
function oj(){nj.call(this);this.j=0}
B(oj,nj);oj.prototype.Ua=function(a){if(0!=this.g.length){if(a||0==this.f)this.j=0,this.o();else if(1==this.f)return;this.T("play");-1==this.f&&this.T("resume");var b=-1==this.f&&!a;this.startTime=z();this.endTime=null;this.f=1;C(this.g,function(c){b&&-1!=c.f||c.Ua(a)})}};
oj.prototype.stop=function(a){C(this.g,function(b){0==b.f||b.stop(a)});
this.f=0;this.endTime=z();this.T("stop");this.i()};
oj.prototype.l=function(){this.j++;this.j==this.g.length&&(this.endTime=z(),this.f=0,this.ia(),this.i())};var pj=function(){if(Uc){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Xb))?a[1]:"0"}return Tc?(a=/10[_.][0-9_.]+/,(a=a.exec(Xb))?a[0].replace(/_/g,"."):"10"):Wc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Xb))?a[1]:""):Xc||Yc||Zc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Xb))?a[1].replace(/_/g,"."):""):""}();function qj(a){return(a=a.exec(Xb))?a[1]:""}
var rj=function(){if(md)return qj(/Firefox\/([0-9.]+)/);if(E||Rc||Qc)return fd;if(qd)return Lc()?qj(/CriOS\/([0-9.]+)/):qj(/Chrome\/([0-9.]+)/);if(rd&&!Lc())return qj(/Version\/([0-9.]+)/);if(nd||od){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Xb);if(a)return a[1]+"."+a[2]}else if(pd)return(a=qj(/Android\s+([0-9.]+)/))?a:qj(/Version\/([0-9.]+)/);return""}();function sj(a,b,c,d,e){kj.call(this,b,c,d,e);this.element=a}
B(sj,kj);sj.prototype.j=Ba;sj.prototype.Za=function(){this.j();sj.A.Za.call(this)};
sj.prototype.i=function(){this.j();sj.A.i.call(this)};
sj.prototype.o=function(){this.j();sj.A.o.call(this)};
function tj(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");sj.call(this,a,b,c,d,e)}
B(tj,sj);tj.prototype.j=function(){var a;if(a=this.l)void 0===this.B&&(this.B=Re(this.element)),a=this.B;this.element.style[a?"right":"left"]=Math.round(this.coords[0])+"px";this.element.style.top=Math.round(this.coords[1])+"px"};
function uj(a,b,c,d,e){sj.call(this,a,[b],[c],d,e)}
B(uj,sj);uj.prototype.j=function(){this.element.style.width=Math.round(this.coords[0])+"px"};function vj(a,b,c){Q.call(this);this.target=a;this.Ka=b||a;this.v=c||new Ae(NaN,NaN,NaN,NaN);this.i=Gd(a);this.g=new mi(this);a=La(xe,this.g);this.J?a():(this.H||(this.H=[]),this.H.push(a));this.deltaY=this.deltaX=this.B=this.w=this.screenY=this.screenX=this.clientY=this.clientX=0;this.j=this.f=!1;P(this.Ka,["touchstart","mousedown"],this.Db,!1,this);this.l=wj}
B(vj,Q);var wj=q.document&&q.document.documentElement&&!!q.document.documentElement.setCapture&&!!q.document.releaseCapture;l=vj.prototype;l.C=function(){vj.A.C.call(this);gi(this.Ka,["touchstart","mousedown"],this.Db,!1,this);ri(this.g);this.l&&this.i.releaseCapture();this.Ka=this.target=null};
function xj(a){void 0===a.s&&(a.s=Re(a.target));return a.s}
l.Db=function(a){var b="mousedown"==a.type;if(this.f||b&&(!(Gh?0==a.f.button:"click"==a.type||a.f.button&Lh[0])||G&&Tc&&a.ctrlKey))this.dispatchEvent("earlycancel");else if(this.dispatchEvent(new yj("start",this,a.clientX,a.clientY,a))){this.f=!0;b&&a.preventDefault();b=this.i;var c=b.documentElement,d=!this.l;oi(this.g,b,["touchmove","mousemove"],this.ac,{capture:d,passive:!1});oi(this.g,b,["touchend","mouseup"],this.Ha,d);this.l?(c.setCapture(!1),pi(this.g,c,"losecapture",this.Ha,void 0)):pi(this.g,
Rd(b),"blur",this.Ha,void 0);this.G&&pi(this.g,this.G,"scroll",this.Ub,d);this.clientX=this.w=a.clientX;this.clientY=this.B=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;this.j?(a=this.target,b=a.offsetLeft,c=a.offsetParent,c||"fixed"!=Fe(a,"position")||(c=Gd(a).documentElement),c?(F&&!gd(58)?(d=We(c),b+=d.left):id(8)&&!id(9)&&(d=We(c),b-=d.left),a=Re(c)?c.clientWidth-(b+a.offsetWidth):b):a=b):a=this.target.offsetLeft;this.deltaX=a;this.deltaY=this.target.offsetTop;this.o=Pd(Ed(this.i).f)}};
l.Ha=function(a,b){ri(this.g);this.l&&this.i.releaseCapture();this.f?(this.f=!1,this.dispatchEvent(new yj("end",this,a.clientX,a.clientY,a,zj(this,this.deltaX),Aj(this,this.deltaY),b||"touchcancel"==a.type))):this.dispatchEvent("earlycancel")};
l.ac=function(a){var b=(this.j&&xj(this)?-1:1)*(a.clientX-this.clientX),c=a.clientY-this.clientY;this.clientX=a.clientX;this.clientY=a.clientY;this.screenX=a.screenX;this.screenY=a.screenY;if(!this.f){var d=this.w-this.clientX,e=this.B-this.clientY;if(0<d*d+e*e)if(this.dispatchEvent(new yj("start",this,a.clientX,a.clientY,a)))this.f=!0;else{this.J||this.Ha(a);return}}c=Bj(this,b,c);b=c.x;c=c.y;this.f&&this.dispatchEvent(new yj("beforedrag",this,a.clientX,a.clientY,a,b,c))&&(Cj(this,a,b,c),a.preventDefault())};
function Bj(a,b,c){var d=Pd(Ed(a.i).f);b+=d.x-a.o.x;c+=d.y-a.o.y;a.o=d;a.deltaX+=b;a.deltaY+=c;return new I(zj(a,a.deltaX),Aj(a,a.deltaY))}
l.Ub=function(a){var b=Bj(this,0,0);a.clientX=this.clientX;a.clientY=this.clientY;Cj(this,a,b.x,b.y)};
function Cj(a,b,c,d){a.Sa(c,d);a.dispatchEvent(new yj("drag",a,b.clientX,b.clientY,b,c,d))}
function zj(a,b){var c=a.v,d=isNaN(c.left)?null:c.left;c=isNaN(c.width)?0:c.width;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}
function Aj(a,b){var c=a.v,d=isNaN(c.top)?null:c.top;c=isNaN(c.height)?0:c.height;return Math.min(null!=d?d+c:Infinity,Math.max(null!=d?d:-Infinity,b))}
l.Sa=function(a,b){this.j&&xj(this)?this.target.style.right=a+"px":this.target.style.left=a+"px";this.target.style.top=b+"px"};
function yj(a,b,c,d,e,f,g){O.call(this,a);this.clientX=c;this.clientY=d;this.left=void 0!==f?f:b.deltaX;this.top=void 0!==g?g:b.deltaY;this.f=b}
B(yj,O);function Dj(a,b){ti.call(this,a);this.f=new xi;this.ya=b||ib;P(this.f,"change",this.nb,!1,this)}
B(Dj,ti);l=Dj.prototype;l.Ma=!1;l.Ya=!1;l.tb=0;l.Ra=function(a){Dj.A.Ra.call(this,a);S(a,"goog-slider-horizontal");a=this.F();var b=Kd(document,null,"goog-slider-thumb",a)[0];b||(b=this.G.Sb("DIV","goog-slider-thumb"),b.setAttribute("role","button"),a.appendChild(b));this.g=this.j=b;this.F().setAttribute("role","slider");Ej(this)};
l.oa=function(){Dj.A.oa.call(this);this.i=new vj(this.g);this.l=new vj(this.j);this.i.j=!1;this.l.j=!1;this.i.Sa=this.l.Sa=Ba;this.aa=new Ri(this.F());oi(oi(oi(oi(oi(oi(oi(ui(this),this.i,"beforedrag",this.kb),this.l,"beforedrag",this.kb),this.i,["start","end"],this.ob),this.l,["start","end"],this.ob),this.aa,"key",this.Vb),this.F(),"click",this.mb),this.F(),"mousedown",this.mb);this.P||(this.P=new Yi(this.F()));oi(ui(this),this.P,"mousewheel",this.Zb,{passive:!1});this.F().tabIndex=0;Fj(this)};
l.Ia=function(){Dj.A.Ia.call(this);ye(this.i,this.l,this.aa,this.P)};
l.kb=function(a){var b=a.f==this.i?this.g:this.j;var c=a.left/(this.F().clientWidth-b.offsetWidth)*(Gj(this)-Hj(this))+Hj(this);c=a.f==this.i?Math.min(Math.max(c,Hj(this)),zi(this.f)+Bi(this.f)):Math.min(Math.max(c,zi(this.f)),Gj(this));Ij(this,b,c)};
l.ob=function(a){var b="start"==a.type;U(this.F(),"goog-slider-dragging",b);U(a.target.Ka,"goog-slider-thumb-dragging",b);a=a.f==this.i;b?(this.dispatchEvent("e"),this.dispatchEvent(a?"a":"c")):(this.dispatchEvent("f"),this.dispatchEvent(a?"b":"d"))};
l.Vb=function(a){var b=!0;switch(a.keyCode){case 36:Jj(this,Hj(this));break;case 35:Jj(this,Gj(this));break;case 33:Kj(this,10);break;case 34:Kj(this,-10);break;case 37:var c=-1;Kj(this,a.shiftKey?10*c:1*c);break;case 40:Kj(this,a.shiftKey?-10:-1);break;case 39:c=1;Kj(this,a.shiftKey?10*c:1*c);break;case 38:Kj(this,a.shiftKey?10:1);break;default:b=!1}b&&a.preventDefault()};
l.mb=function(a){this.F().focus&&this.F().focus();var b=a.target;ce(this.g,b)||ce(this.j,b)||(b="click"==a.type,b&&z()<this.tb+1E3||(b||(this.tb=z()),this.Ya?Jj(this,Lj(this,a)):(this.ab(a),this.B=Mj(this,Lj(this,a)),this.xa=this.ma>this.B.offsetLeft+this.B.offsetWidth,a=Gd(this.F()),oi(oi(ui(this),a,"mouseup",this.Eb,!0),this.F(),"mousemove",this.ab),this.w||(this.w=new aj(200),oi(ui(this),this.w,"tick",this.pb)),this.pb(),this.w.start())))};
l.Zb=function(a){Kj(this,0<a.detail?-1:1);a.preventDefault()};
l.pb=function(){var a,b=this.ma,c=this.B.offsetLeft;this.xa?b>c+this.B.offsetWidth&&(a=Nj(this,this.B)+10):b<c&&(a=Nj(this,this.B)-10);void 0!==a&&Ij(this,this.B,a)};
l.Eb=function(){this.w&&this.w.stop();var a=Gd(this.F());qi(qi(ui(this),a,"mouseup",this.Eb,!0),this.F(),"mousemove",this.ab)};
l.ab=function(a){this.ma=Ke(a,this.F()).x};
function Lj(a,b){var c=Hj(a),d=Gj(a),e=a.g.offsetWidth,f=a.F().clientWidth-e;e=Ke(b,a.F()).x-e/2;return(d-c)*e/f+c}
function Nj(a,b){if(b==a.g)return zi(a.f);if(b==a.j)return zi(a.f)+Bi(a.f);throw Error("Illegal thumb element. Neither minThumb nor maxThumb");}
function Oj(a){return a.i.f||a.l.f}
function Kj(a,b){Math.abs(b)<a.f.X&&(b=(0<b?1:0>b?-1:b)*a.f.X);var c=Nj(a,a.g)+b,d=Nj(a,a.j)+b;c=Ad(c,Hj(a),Gj(a)-0);d=Ad(d,Hj(a)+0,Gj(a));Pj(a,c,d-c)}
function Ij(a,b,c){var d=yi(a.f,c);c=b==a.g?d:zi(a.f);b=b==a.j?d:zi(a.f)+Bi(a.f);c>=Hj(a)&&b>=c+0&&Gj(a)>=b&&Pj(a,c,b-c)}
function Pj(a,b,c){Hj(a)<=b&&b<=Gj(a)-c&&0<=c&&c<=Gj(a)-b&&(b!=zi(a.f)||c!=Bi(a.f))&&(a.f.ha=!0,Ai(a.f,0),a.f.setValue(b),Ai(a.f,c),a.f.ha=!1,a.nb(null))}
function Hj(a){a=a.f;return yi(a,a.W)}
function Gj(a){a=a.f;return yi(a,a.S)}
function Mj(a,b){return b<=zi(a.f)+Bi(a.f)/2?a.g:a.j}
l.nb=function(){Fj(this);Ej(this);this.dispatchEvent("change")};
function Fj(a){if(a.g&&!a.Ma){var b=Qj(a,Nj(a,a.g));var c=Qj(a,Nj(a,a.j));a.g.style.left=b.x+"px";a.j.style.left=c.x+"px";a.s&&(b=Rj(b.x,c.x,a.g.offsetWidth),a.s.style.left=b.offset+"px",a.s.style.width=b.size+"px")}}
function Rj(a,b,c){var d=Math.ceil(c/2);return{offset:a+d,size:Math.max(b-a+c-2*d,0)}}
function Qj(a,b){var c=new I;if(a.g){var d=Hj(a),e=Gj(a);c.x=Math.round((b==d&&d==e?0:(b-d)/(e-d))*(a.F().clientWidth-a.g.offsetWidth));c.y=a.Ya?0:a.g.offsetTop}return c}
function Jj(a,b){b=Ad(b,Hj(a),Gj(a));a.Ma&&(a.Z.stop(!0),a.Z.dispose());var c=new oj,d=Mj(a,b),e=zi(a.f),f=Bi(a.f),g=Nj(a,d),h=Qj(a,g),k=a.f.X;Math.abs(b-g)<k&&(b=Ad(g+(b>g?k:-k),Hj(a),Gj(a)));Ij(a,d,b);g=Qj(a,Nj(a,d));h=new tj(d,[h.x,h.y],[g.x,d.offsetTop],100);h.l=!1;c.add(h);a.s&&(h=Qj(a,e),k=Qj(a,e+f),e=h,f=k,d==a.g?e=g:f=g,d=Rj(h.x,k.x,a.g.offsetWidth),e=Rj(e.x,f.x,a.g.offsetWidth),g=new tj(a.s,[d.offset,a.s.offsetTop],[e.offset,a.s.offsetTop],100),d=new uj(a.s,d.size,e.size,100),g.l=!1,d.l=
!1,c.add(g),c.add(d));a.Z=c;oi(ui(a),c,"end",a.Pb);a.Ma=!0;c.Ua(!1)}
l.Pb=function(){this.Ma=!1;this.dispatchEvent("g")};
l.C=function(){Dj.A.C.call(this);this.w&&this.w.dispose();delete this.w;this.Z&&this.Z.dispose();delete this.Z;delete this.g;delete this.j;this.s&&delete this.s;this.f.dispose();delete this.f;this.aa&&(this.aa.dispose(),delete this.aa);this.P&&(this.P.dispose(),delete this.P);this.i&&(this.i.dispose(),delete this.i);this.l&&(this.l.dispose(),delete this.l)};
l.setValue=function(a){Ij(this,this.g,a)};
function Ej(a){var b=a.F();b&&(Fi(b,"valuemin",Hj(a)),Fi(b,"valuemax",Gj(a)),Fi(b,"valuenow",zi(a.f)),Fi(b,"valuetext",a.ya(zi(a.f))||""))}
l.isEnabled=function(){return!0};function Sj(a,b){Dj.call(this,a,b);Ai(this.f,0)}
B(Sj,Dj);function Tj(){this.g=[];this.f=-1}
Tj.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Tj.prototype.get=function(a){return!!this.g[a]};
function Uj(a){-1==a.f&&(a.f=Va(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Vj(){this.g=-1}
;function Wj(){this.g=64;this.f=[];this.o=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
B(Wj,Vj);Wj.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function Xj(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Wj.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Xj(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Xj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Xj(this,e);f=0;break}}this.i=f;this.l+=b}};
Wj.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.o[c]=b&255,b/=256;Xj(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Yj=!E&&!ac();function Zj(a,b){if(/-[a-z]/.test(b))return null;if(Yj&&a.dataset){if(cc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function ak(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function bk(a){Q.call(this);this.f=a||window;this.g=P(this.f,"resize",this.j,!1,this);this.i=Nd(this.f||window)}
B(bk,Q);bk.prototype.C=function(){bk.A.C.call(this);this.g&&(hi(this.g),this.g=null);this.i=this.f=null};
bk.prototype.j=function(){var a=Nd(this.f||window);Dd(a,this.i)||(this.i=a,this.dispatchEvent("resize"))};function ck(a){var b=[];dk(new ek,a,b);return b.join("")}
function ek(){}
function dk(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),dk(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),fk(d,c),c.push(":"),dk(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":fk(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var gk={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},hk=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function fk(a,b){b.push('"',a.replace(hk,function(c){var d=gk[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),gk[c]=d);return d}),'"')}
;function ik(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=Fe(h,"position")){var m=Je(h);if(!k){k=Re(h);var n;if(n=k){if(n=rd)n=0<=Ob(rj,10);var r;if(r=$c)r=0<=Ob(pj,10);n=F||n||r}k=n?-h.scrollLeft:!k||Sc&&gd("8")||"visible"==Fe(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;m=Bd(m,new I(k,h.scrollTop))}}}h=m||new I;m=Qe(a);if(k=Ie(a)){var t=new Ae(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(m.left,t.left);n=Math.min(m.left+
m.width,t.left+t.width);k<=n&&(r=Math.max(m.top,t.top),t=Math.min(m.top+m.height,t.top+t.height),r<=t&&(m.left=k,m.top=r,m.width=n-k,m.height=t-r))}k=Ed(a);r=Ed(c);if(k.f!=r.f){n=k.f.body;r=qe(r);t=new I(0,0);var p=Rd(Gd(n));if(Nc(p,"parent")){var A=n;do{var J=p==r?Je(A):Me(A);t.x+=J.x;t.y+=J.y}while(p&&p!=r&&p!=p.parent&&(A=p.frameElement)&&(p=p.parent))}n=Bd(t,Je(n));!E||id(9)||Od(k.f)||(n=Bd(n,Pd(k.f)));m.left+=n.x;m.top+=n.y}a=jk(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new I(b,m.top+
(a&1?m.height:0));b=Bd(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var w;g&&(w=Ie(c))&&(w.top-=h.y,w.right-=h.x,w.bottom-=h.y,w.left-=h.x);e=w;w=b.clone();b=jk(c,d);d=Oe(c);a=d.clone();w=w.clone();a=a.clone();h=0;if(f||0!=b)b&4?w.x-=a.width+(f?f.right:0):b&2?w.x-=a.width/2:f&&(w.x+=f.left),b&1?w.y-=a.height+(f?f.bottom:0):f&&(w.y+=f.top);g&&(e?(f=w,b=a,h=0,65==(g&65)&&(f.x<e.left||f.x>=e.right)&&(g&=-2),132==(g&132)&&(f.y<e.top||f.y>=e.bottom)&&(g&=-5),f.x<e.left&&g&1&&(f.x=e.left,h|=1),g&16&&
(m=f.x,f.x<e.left&&(f.x=e.left,h|=4),f.x+b.width>e.right&&(b.width=Math.min(e.right-f.x,m+b.width-e.left),b.width=Math.max(b.width,0),h|=4)),f.x+b.width>e.right&&g&1&&(f.x=Math.max(e.right-b.width,e.left),h|=1),g&2&&(h|=(f.x<e.left?16:0)|(f.x+b.width>e.right?32:0)),f.y<e.top&&g&4&&(f.y=e.top,h|=2),g&32&&(m=f.y,f.y<e.top&&(f.y=e.top,h|=8),f.y+b.height>e.bottom&&(b.height=Math.min(e.bottom-f.y,m+b.height-e.top),b.height=Math.max(b.height,0),h|=8)),f.y+b.height>e.bottom&&g&4&&(f.y=Math.max(e.bottom-
b.height,e.top),h|=2),g&8&&(h|=(f.y<e.top?64:0)|(f.y+b.height>e.bottom?128:0)),g=h):g=256,h=g);f=new Ae(0,0,0,0);f.left=w.x;f.top=w.y;f.width=a.width;f.height=a.height;g=h;g&496||(w=new I(f.left,f.top),w instanceof I?(e=w.x,w=w.y):(e=w,w=void 0),c.style.left=Ne(e,!1),c.style.top=Ne(w,!1),a=new Cd(f.width,f.height),Dd(d,a)||(f=a,e=Od(Ed(Gd(c)).f),!E||gd("10")||e&&gd("8")?(c=c.style,F?c.MozBoxSizing="border-box":G?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",
c.height=Math.max(f.height,0)+"px"):(d=c.style,e?(E?(e=Te(c,"paddingLeft"),w=Te(c,"paddingRight"),a=Te(c,"paddingTop"),b=Te(c,"paddingBottom"),e=new ze(a,w,b,e)):(e=Ee(c,"paddingLeft"),w=Ee(c,"paddingRight"),a=Ee(c,"paddingTop"),b=Ee(c,"paddingBottom"),e=new ze(parseFloat(a),parseFloat(w),parseFloat(b),parseFloat(e))),c=We(c),d.pixelWidth=f.width-c.left-e.left-e.right-c.right,d.pixelHeight=f.height-c.top-e.top-e.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function jk(a,b){return(b&8&&Re(a)?b^4:b)&-9}
;function V(a){we.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.g={};this.o=!!a}
B(V,we);l=V.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function kk(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.ua(d),b.apply(void 0,arguments))},a)}
function lk(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=Ya(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ua(b)}}
l.ua=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ba):(c&&bb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
l.ea=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];mk(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.ua(c)}}return 0!=e}return!1};
function mk(a,b,c){jf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.ua,this),delete this.g[a])}else this.f.length=0,this.g={}};
l.K=function(a){if(a){var b=this.g[a];return b?b.length:0}a=0;for(b in this.g)a+=this.K(b);return a};
l.C=function(){V.A.C.call(this);this.clear();this.i.length=0};function nk(a){this.f=a}
nk.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ck(b))};
nk.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
nk.prototype.remove=function(a){this.f.remove(a)};function ok(a){this.f=a}
B(ok,nk);function pk(a){this.data=a}
function qk(a){return void 0===a||a instanceof pk?a:new pk(a)}
ok.prototype.set=function(a,b){ok.A.set.call(this,a,qk(b))};
ok.prototype.g=function(a){a=ok.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ok.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rk(a){this.f=a}
B(rk,ok);rk.prototype.set=function(a,b,c){if(b=qk(b)){if(c){if(c<z()){rk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}rk.A.set.call(this,a,b)};
rk.prototype.g=function(a){var b=rk.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())rk.prototype.remove.call(this,a);else return b}};function sk(){}
;function tk(){}
B(tk,sk);tk.prototype.K=function(){var a=0;bg(this.U(!0),function(){a++});
return a};
tk.prototype.clear=function(){var a=cg(this.U(!0)),b=this;C(a,function(c){b.remove(c)})};function uk(a){this.f=a}
B(uk,tk);l=uk.prototype;l.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeItem(a)};
l.K=function(){return this.f.length};
l.U=function(a){var b=0,c=this.f,d=new $f;d.next=function(){if(b>=c.length)throw Zf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){this.f.clear()};
l.key=function(a){return this.f.key(a)};function vk(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
B(vk,uk);function wk(a,b){this.g=a;this.f=null;if(E&&!id(9)){xk||(xk=new dg);this.f=xk.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),xk.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
B(wk,tk);var yk={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xk=null;function zk(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yk[b]})}
l=wk.prototype;l.isAvailable=function(){return!!this.f};
l.set=function(a,b){this.f.setAttribute(zk(a),b);Ak(this)};
l.get=function(a){a=this.f.getAttribute(zk(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeAttribute(zk(a));Ak(this)};
l.K=function(){return Bk(this).attributes.length};
l.U=function(a){var b=0,c=Bk(this).attributes,d=new $f;d.next=function(){if(b>=c.length)throw Zf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){for(var a=Bk(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ak(this)};
function Ak(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
function Bk(a){return a.f.XMLDocument.documentElement}
;function Ck(a,b){this.g=a;this.f=b+"::"}
B(Ck,tk);Ck.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Ck.prototype.get=function(a){return this.g.get(this.f+a)};
Ck.prototype.remove=function(a){this.g.remove(this.f+a)};
Ck.prototype.U=function(a){var b=this.g.U(!0),c=this,d=new $f;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Dk(a){this.f=new dg;a&&Ek(this,a)}
function Fk(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+Ga(a):b.substr(0,1)+a}
l=Dk.prototype;l.K=function(){return this.f.K()};
l.add=function(a){this.f.set(Fk(a),a)};
function Ek(a,b){for(var c=ig(b),d=c.length,e=0;e<d;e++)a.add(c[e])}
l.remove=function(a){return this.f.remove(Fk(a))};
l.clear=function(){this.f.clear()};
l.isEmpty=function(){return this.f.isEmpty()};
l.contains=function(a){a=Fk(a);return fg(this.f.g,a)};
function Gk(a,b){for(var c=a.clone(),d=ig(b),e=d.length,f=0;f<e;f++)c.remove(d[f]);return c}
l.M=function(){return this.f.M()};
l.clone=function(){return new Dk(this)};
l.equals=function(a){return this.K()==hg(a)&&Hk(this,a)};
function Hk(a,b){var c=hg(b);if(a.K()>c)return!1;!(b instanceof Dk)&&5<c&&(b=new Dk(b));return mg(a,function(d){var e=b;return e.contains&&"function"==typeof e.contains?e.contains(d):e.za&&"function"==typeof e.za?e.za(d):x(e)||"string"===typeof e?$a(e,d):nb(e,d)})}
l.U=function(){return this.f.U(!1)};var Ik=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Ik,void 0);function Jk(a){var b=arguments;1<b.length?Ik[b[0]]=b[1]:1===b.length&&Object.assign(Ik,b[0])}
function W(a,b){return a in Ik?Ik[a]:b}
function Kk(a){var b=Ik.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function Lk(a,b){return a?a.dataset?a.dataset[Mk(b)]:a.getAttribute("data-"+b):null}
var Nk={};function Mk(a){return Nk[a]||(Nk[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ok=[];function Pk(a){Ok.forEach(function(b){return b(a)})}
function Qk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Rk(b),Pk(b)}}:a}
function Rk(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Jk("ERRORS",b))}
function Sk(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Jk("ERRORS",b))}
;function Tk(a,b){Ea(a)&&(a=Qk(a));return window.setTimeout(a,b)}
function Uk(a){window.clearTimeout(a)}
;var Vk=v("ytPubsubPubsubInstance")||new V;V.prototype.subscribe=V.prototype.subscribe;V.prototype.unsubscribeByKey=V.prototype.ua;V.prototype.publish=V.prototype.ea;V.prototype.clear=V.prototype.clear;u("ytPubsubPubsubInstance",Vk,void 0);var Wk=v("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",Wk,void 0);var Xk=v("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",Xk,void 0);var Yk=v("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",Yk,void 0);
function Zk(a,b,c){var d=$k();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){Wk[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{Yk[a]?g():Tk(g,0)}catch(h){Rk(h)}},c);
Wk[e]=!0;Xk[a]||(Xk[a]=[]);Xk[a].push(e);return e}return 0}
function al(a){var b=$k();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),C(a,function(c){b.unsubscribeByKey(c);delete Wk[c]}))}
function bl(a,b){var c=$k();c&&c.publish.apply(c,arguments)}
function cl(a,b){Yk[a]=!0;var c=$k();c&&c.publish.apply(c,arguments);Yk[a]=!1}
function $k(){return v("ytPubsubPubsubInstance")}
;function dl(){}
function el(a,b){fl(a,1,b)}
;function gl(){}
sa(gl,dl);function fl(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():Tk(a,c||0)}
gl.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Ca(gl);gl.ga();function hl(){return parseInt(W("DCLKSTAT",0),10)}
;function X(a){a=il(a);return"string"===typeof a&&"false"===a?!1:!!a}
function jl(a,b){var c=il(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function il(a){var b=W("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:W("EXPERIMENT_FLAGS",{})[a]}
;var kl=window,ll=kl.ytcsi&&kl.ytcsi.now?kl.ytcsi.now:kl.performance&&kl.performance.timing&&kl.performance.now&&kl.performance.timing.navigationStart?function(){return kl.performance.timing.navigationStart+kl.performance.now()}:function(){return(new Date).getTime()};var ml=jl("initial_gel_batch_timeout",1E3),nl=Math.pow(2,16)-1,ol=null,pl=0,ql=void 0,rl=0,sl=0,tl=0,ul=!0,vl=v("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",vl,void 0);var wl=v("ytLoggingTransportGELQueue_")||new Map;u("ytLoggingTransportGELQueue_",wl,void 0);var xl=v("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",xl,void 0);
function yl(){Uk(rl);Uk(sl);sl=0;ql&&ql.isReady()?(zl(wl),"log_event"in vl&&zl(Object.entries(vl.log_event)),wl.clear(),delete vl.log_event):Al()}
function Al(){X("web_gel_timeout_cap")&&!sl&&(sl=Tk(yl,6E4));Uk(rl);var a=W("LOGGING_BATCH_TIMEOUT",jl("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&ul&&(a=ml);rl=Tk(yl,a)}
function zl(a){var b=ql,c=Math.round(ll());a=la(a);for(var d=a.next();!d.done;d=a.next()){var e=la(d.value);d=e.next().value;var f=e.next().value;e=sb({context:Bl(b.f||Cl())});e.events=f;(f=xl[d])&&Dl(e,d,f);delete xl[d];El(e,c);Fl(b,"log_event",e,{retry:!0,onSuccess:function(){pl=Math.round(ll()-c)}});
ul=!1}}
function El(a,b){a.requestTimeMs=String(b);X("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=W("EVENT_ID",void 0);if(c){var d=W("BATCH_CLIENT_COUNTER",void 0)||0;!d&&X("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*nl/2));d++;d>nl&&(d=1);Jk("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;ol&&pl&&X("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ol,roundtripMs:String(pl)});ol=c;pl=0}}
function Dl(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Gl=jl("initial_gel_batch_timeout",1E3),Hl=Math.pow(2,16)-1,Il=null,Jl=0,Kl={log_event:"events",log_interaction:"interactions"},Ll=new Set(["log_event"]),Ml={},Nl=0,Ol=0,Pl=0,Ql=!0,Rl=v("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",Rl,void 0);var Sl=v("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",Sl,void 0);
function Tl(){if(X("use_typescript_transport"))yl();else if(Uk(Nl),Uk(Ol),Ol=0,!qb(Rl)){for(var a in Rl){var b=Ml[a];if(b&&b.isReady()){var c=void 0,d=a,e=Kl[d],f=Math.round(ll());for(c in Rl[d]){var g=sb({context:Bl(b.f||Cl())});g[e]=Ul(d,c);var h=Sl[c];if(h)a:{var k=g,m=c;if(h.videoId)var n="VIDEO";else if(h.playlistId)n="PLAYLIST";else break a;k.credentialTransferTokenTargetId=h;k.context=k.context||{};k.context.user=k.context.user||{};k.context.user.credentialTransferTokens=[{token:m,scope:n}]}delete Sl[c];
h=g;h.requestTimeMs=f;X("unsplit_gel_payloads_in_logs")&&(h.unsplitGelPayloadsInLogs=!0);if(n=W("EVENT_ID",void 0))k=W("BATCH_CLIENT_COUNTER",void 0)||0,!k&&X("web_client_counter_random_seed")&&(k=Math.floor(Math.random()*Hl/2)),k++,k>Hl&&(k=1),Jk("BATCH_CLIENT_COUNTER",k),n={serializedEventId:n,clientCounter:k},h.serializedClientEventId=n,Il&&Jl&&X("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:Il,roundtripMs:Jl}),Il=n,Jl=0;Fl(b,d,g,{retry:Ll.has(d),onSuccess:La(Vl,ll())})}delete Rl[a];
Ql=!1}}qb(Rl)||Wl()}}
function Wl(){X("web_gel_timeout_cap")&&!Ol&&(Ol=Tk(Tl,6E4));Uk(Nl);var a=W("LOGGING_BATCH_TIMEOUT",jl("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&Ql&&(a=Gl);Nl=Tk(Tl,a)}
function Ul(a,b){b=void 0===b?"":b;Rl[a]=Rl[a]||{};Rl[a][b]=Rl[a][b]||[];return Rl[a][b]}
function Vl(a){Jl=Math.round(ll()-a)}
;var Xl=0;function Yl(a){var b=a.__yt_uid_key;b||(b=Zl(),a.__yt_uid_key=b);return b}
function $l(a,b){a=Hd(a);b=Hd(b);return!!pe(a,function(c){return c===b},void 0)}
function am(a,b){var c=Kd(document,a,null,b);return c.length?c[0]:null}
var Zl=v("ytDomDomGetNextId")||function(){return++Xl};
u("ytDomDomGetNextId",Zl,void 0);var bm={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function cm(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in bm||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function dm(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
cm.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
cm.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
cm.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=v("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",pb,void 0);var em=v("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",em,void 0);
function fm(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Fa(e[4])&&Fa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Y(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=fm(a,b,c,d);if(e)return e;e=++em.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new cm(h);if(!pe(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new cm(h);
h.currentTarget=a;return c.call(a,h)};
g=Qk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gm()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function hm(a,b,c){var d=a||document;Y(d,"click",function(e){var f=pe(e.target,function(g){return g===d||c(g)});
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function im(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var gm=jb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function jm(a,b,c){hm(a,b,function(d){return R(d,c)})}
function km(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function lm(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?gm()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;var mm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function nm(a){this.G=a;this.f=null;this.j=0;this.o=null;this.l=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.i=0;this.v=Y(window,"mousemove",y(this.w,this));a=y(this.s,this);Ea(a)&&(a=Qk(a));this.B=window.setInterval(a,25)}
B(nm,we);nm.prototype.w=function(a){void 0===a.f&&dm(a);var b=a.f;void 0===a.g&&dm(a);this.f=new I(b,a.g)};
nm.prototype.s=function(){if(this.f){var a=mm();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.g[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.G();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
nm.prototype.C=function(){window.clearInterval(this.B);lm(this.v)};var om={};
function pm(a){var b=void 0===a?{}:a;a=void 0===b.hc?!0:b.hc;b=void 0===b.Bc?!1:b.Bc;if(null==v("_lact",window)){var c=parseInt(W("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&qm();Y(document,"keydown",qm);Y(document,"keyup",qm);Y(document,"mousedown",qm);Y(document,"mouseup",qm);a&&(b?Y(window,"touchmove",function(){rm("touchmove",200)},{passive:!0}):(Y(window,"resize",function(){rm("resize",200)}),Y(window,"scroll",function(){rm("scroll",200)})));
new nm(function(){rm("mouse",100)});
Y(document,"touchstart",qm,{passive:!0});Y(document,"touchend",qm,{passive:!0})}}
function rm(a,b){om[a]||(om[a]=!0,el(function(){qm();om[a]=!1},b))}
function qm(){null==v("_lact",window)&&pm();var a=z();u("_lact",a,window);-1==v("_fact",window)&&u("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function sm(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var tm=v("ytLoggingGelSequenceIdObj_")||{};u("ytLoggingGelSequenceIdObj_",tm,void 0);function um(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==Da(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function vm(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=sc(e[0]||""),g=sc(e[1]||"");f in b?"array"==Da(b[f])?eb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};Rk(h)}}}return b}
function wm(a,b){return xm(a,b||{},!0)}
function xm(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=vm(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Hc(a,e)+d}
;function ym(a){var b=zm;a=void 0===a?v("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Am(b),Bm(b));b.ca_type="image";a&&(b.bid=a);return b}
function Am(a){var b={};b.dt=Xe;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?H:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(b.u_h=H.screen.height,b.u_w=H.screen.width,b.u_ah=H.screen.availHeight,b.u_aw=H.screen.availWidth,b.u_cd=H.screen.colorDepth);
H.navigator&&H.navigator.plugins&&(b.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(b.u_nmime=H.navigator.mimeTypes.length);return b}
function Bm(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var h=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=Nd(c||window).round()}catch(m){k=new Cd(-12245933,-12245933)}c=k;k={};d=new Tj;q.SVGElement&&q.document.createElementNS&&d.set(0);e=ve();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);q.crypto&&q.crypto.subtle&&d.set(3);q.TextDecoder&&q.TextEncoder&&d.set(4);d=Uj(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!H.WebGLRenderingContext,k}
var zm=new function(){var a=window.document;this.f=window;this.g=a};
u("yt.ads_.signals_.getAdSignalsString",function(a){return um(ym(a))},void 0);z();var Cm=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Dm(){if(!Cm)return null;var a=Cm();return"open"in a?a:null}
;var Em={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Fm="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Gm=!1;
function Hm(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=Dc(1,a),e=Cc(Dc(3,a));d&&e?(d=c,c=a.match(Bc),d=d.match(Bc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Cc(Dc(3,c))==e&&(Number(Dc(4,c))||null)==(Number(Dc(4,a))||null):!0;d=X("web_ajax_ignore_global_headers_if_set");for(var f in Em)e=W(Em[f]),!e||!c&&!Im(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Im(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Im(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=
typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Im(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=um(ym(void 0));return b}
function Jm(a){var b=window.location.search,c=Cc(Dc(3,a)),d=Cc(Dc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=vm(b),f={};C(Fm,function(g){e[g]&&(f[g]=e[g])});
return xm(a,f||{},!1)}
function Im(a,b){var c=W("CORS_HEADER_WHITELIST")||{},d=Cc(Dc(3,a));return d?(c=c[d])?$a(c,b):!1:!0}
function Km(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Lm(a,b);var d=Mm(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Uk(f);var h=g.ok,k=function(m){m=m||{};var n=b.context||q;h?b.onSuccess&&b.onSuccess.call(n,m,g):b.onError&&b.onError.call(n,m,g);b.ia&&b.ia.call(n,m,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.uc&&0<b.timeout&&(f=Tk(function(){e||(e=!0,Uk(f))},b.timeout))}else Nm(a,b)}
function Nm(a,b){var c=b.format||"JSON";a=Lm(a,b);var d=Mm(a,b),e=!1,f,g=Om(a,function(h){if(!e){e=!0;f&&Uk(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,n=400<=h.status&&500>h.status,r=500<=h.status&&600>h.status;if(k||n||r)m=Pm(c,h,b.nd);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(m&&m.return_code,10);break a;case "RAW":k=!0;break a}k=!!m}m=m||{};n=b.context||q;
k?b.onSuccess&&b.onSuccess.call(n,h,m):b.onError&&b.onError.call(n,h,m);b.ia&&b.ia.call(n,h,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.xb&&0<b.timeout&&(f=Tk(function(){e||(e=!0,g.abort(),Uk(f))},b.timeout))}
function Lm(a,b){b.rd&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=W("XSRF_FIELD_NAME",void 0),d=b.cb;d&&(d[c]&&delete d[c],a=wm(a,d));return a}
function Mm(a,b){var c=W("XSRF_FIELD_NAME",void 0),d=W("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.Da,g=W("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.qd||Cc(Dc(3,a))&&!b.withCredentials&&Cc(Dc(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.Da&&b.Da[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=vm(e),ub(e,f),e=b.zb&&"JSON"==b.zb?JSON.stringify(e):Gc(e));f=e||f&&!qb(f);!Gm&&f&&"POST"!=b.method&&(Gm=!0,Rk(Error("AJAX request with postData should use POST")));
return e}
function Pm(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Qm(b):null)d={},C(b.getElementsByTagName("*"),function(e){d[e.tagName]=Rm(e)})}c&&Sm(d);
return d}
function Sm(a){if(Fa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=lc(a[b],null):Sm(a[b])}}
function Qm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rm(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Om(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Dm();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;X("debug_forward_web_query_parameters")&&(a=Jm(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Hm(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Tm(){for(var a={},b=la(Object.entries(vm(W("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=la(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Um(){return"INNERTUBE_API_KEY"in Ik&&"INNERTUBE_API_VERSION"in Ik}
function Cl(){return{innertubeApiKey:W("INNERTUBE_API_KEY",void 0),innertubeApiVersion:W("INNERTUBE_API_VERSION",void 0),ic:W("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),jc:W("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:W("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),lc:W("INNERTUBE_CONTEXT_HL",void 0),kc:W("INNERTUBE_CONTEXT_GL",void 0),mc:W("INNERTUBE_HOST_OVERRIDE",void 0)||"",nc:!!W("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Bl(a){a={client:{hl:a.lc,gl:a.kc,clientName:a.jc,clientVersion:a.innertubeContextClientVersion,configInfo:a.ic}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=W("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=W("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=W("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
W("DELEGATED_SESSION_ID")&&!X("pageid_as_header_web")&&(a.user={onBehalfOfUser:W("DELEGATED_SESSION_ID")});X("enable_device_forwarding_from_xhr_client")&&(a.client=Object.assign(a.client,Tm()));return a}
function Vm(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||W("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.kd||W("AUTHORIZATION"))||(a?b="Bearer "+v("gapi.auth.getToken")().jd:b=Zg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=W("SESSION_INDEX",0),X("pageid_as_header_web")&&(d["X-Goog-PageId"]=W("DELEGATED_SESSION_ID")));return d}
function Wm(a){a=Object.assign({},a);delete a.Authorization;var b=Zg();if(b){var c=new Wj;c.update(W("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;x(b);void 0===c&&(c=0);if(!td){td={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));sd[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===td[k]&&(td[k]=h)}}}c=sd[c];d=[];for(e=0;e<b.length;e+=3){var m=b[e],n=(f=e+1<b.length)?b[e+
1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=m>>2;m=(m&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[m],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Xm(a,b,c,d){wd.set(""+a,b,{sb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Ym(){var a=new vk;(a=a.isAvailable()?new Ck(a,"yt.innertube"):null)||(a=new wk("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new rk(a):null;this.g=document.domain||window.location.hostname}
Ym.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ck(b))}catch(f){return}else e=escape(b);Xm(a,e,c,this.g)};
Ym.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=wd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ym.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;wd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Zm=new Ym;function $m(a,b,c,d){if(d)return null;d=Zm.get("nextId",!0)||1;var e=Zm.get("requests",!0)||{};e[d]={method:a,request:b,authState:Wm(c),requestTime:Math.round(ll())};Zm.set("nextId",d+1,86400,!0);Zm.set("requests",e,86400,!0);return d}
function an(a){var b=Zm.get("requests",!0)||{};delete b[a];Zm.set("requests",b,86400,!0)}
function bn(a){var b=Zm.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(ll())-d.requestTime)){var e=d.authState,f=Wm(Vm(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(ll())),Fl(a,d.method,e,{}));delete b[c]}}Zm.set("requests",b,86400,!0)}}
;function cn(a){var b=this;this.f=null;a?this.f=a:Um()&&(this.f=Cl());fl(function(){bn(b)},0,5E3)}
cn.prototype.isReady=function(){!this.f&&Um()&&(this.f=Cl());return!!this.f};
function Fl(a,b,c,d){!W("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Sk(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",Da:c,zb:"JSON",xb:function(){},
uc:d.xb,onSuccess:function(t,p){if(d.onSuccess)d.onSuccess(p)},
wb:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,p){if(d.onError)d.onError(p)},
td:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.mc;g&&(f=g);g=a.f.nc||!1;var h=Vm(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=wm(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&X("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=$m(b,c,h,g))){var n=e.onSuccess,r=e.wb;e.onSuccess=function(t,p){an(m);n(t,p)};
c.wb=function(t,p){an(m);r(t,p)}}try{X("use_fetch_for_op_xhr")?Km(k,e):(e.method="POST",e.Da||(e.Da={}),Nm(k,e))}catch(t){if("InvalidAccessError"==t)m&&(an(m),m=0),Sk(Error("An extension is blocking network request."));
else throw t;}m&&fl(function(){bn(a)},0,5E3)}
;function dn(){this.f=null}
dn.prototype.dispose=function(){this.f=null};var en=new dn;function fn(){return!!en.f}
function gn(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return en.f?en.f.invoke(void 0,void 0,a):null}
;var hn=z().toString();var jn;
if(!(jn=v("ytLoggingDocDocumentNonce_"))){var kn;a:{if(window.crypto&&window.crypto.getRandomValues)try{var ln=Array(16),mn=new Uint8Array(16);window.crypto.getRandomValues(mn);for(var nn=0;nn<ln.length;nn++)ln[nn]=mn[nn];kn=ln;break a}catch(a){}for(var on=Array(16),pn=0;16>pn;pn++){for(var qn=z(),rn=0;rn<qn%23;rn++)on[pn]=Math.random();on[pn]=Math.floor(256*Math.random())}if(hn)for(var sn=1,tn=0;tn<hn.length;tn++)on[sn%16]=on[sn%16]^on[(sn-1)%16]/4^hn.charCodeAt(tn),sn++;kn=on}for(var un=kn,vn=[],
wn=0;wn<un.length;wn++)vn.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(un[wn]&63));jn=vn.join("")}var xn=jn;u("ytLoggingDocDocumentNonce_",xn,void 0);function yn(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function zn(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
u("yt_logging_screen.getRootVeType",function(a){return W(zn(void 0===a?0:a),void 0)},void 0);
function An(){var a=W("csn-to-ctt-auth-info");a||(a={},Jk("csn-to-ctt-auth-info",a));return a}
function Bn(a){a=void 0===a?0:a;var b=W(yn(a));if(!b&&!W("USE_CSN_FALLBACK",!0))return null;b||0!=a||(X("kevlar_client_side_screens")||X("c3_client_side_screens")?b="UNDEFINED_CSN":b=W("EVENT_ID"));return b?b:null}
u("yt_logging_screen.getCurrentCsn",Bn,void 0);function Cn(a,b,c){var d=An();(c=Bn(c))&&delete d[c];b&&(d[a]=b)}
u("yt_logging_screen.getCttAuthInfo",function(a){return An()[a]},void 0);
u("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==W(yn(c))||b!==W(zn(c)))if(Cn(a,d,c),Jk(yn(c),a),Jk(zn(c),b),0==c||X("web_screen_associated_all_layers"))b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:xn,clientScreenNonce:a};var f=void 0===f?{}:f;var g={};g.eventTimeMs=Math.round(f.timestamp||ll());g.foregroundHeartbeatScreenAssociated=e;g.context={lastActivityMs:String(f.timestamp?-1:sm())};if(X("log_sequence_info_on_gel_web")&&f.Cb){e=g.context;
var h=f.Cb;tm[h]=h in tm?tm[h]+1:0;e.sequence={index:tm[h],groupKey:h};f.pd&&delete tm[f.Cb]}e="log_event";f=f.od;if(X("use_typescript_transport"))"log_event"===e&&(h="",f&&(e=f,h={},e.videoId?h.videoId=e.videoId:e.playlistId&&(h.playlistId=e.playlistId),xl[f.token]=h,h=f.token),e=wl.get(h)||[],wl.set(h,e),e.push(g),cn&&(ql=new cn),g=jl("web_logging_max_batch")||100,f=ll(),e.length>=g?yl():10<=f-tl&&(Al(),tl=f));else{if(f){h=f;var k={};h.videoId?k.videoId=h.videoId:h.playlistId&&(k.playlistId=h.playlistId);
Sl[f.token]=k;f=Ul(e,f.token)}else f=Ul(e);f.push(g);cn&&(Ml[e]=new cn);g=jl("web_logging_max_batch")||100;e=ll();f.length>=g?Tl():10<=e-Pl&&(Wl(),Pl=e)}}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()},void 0);function Dn(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return"ST-"+b.toString(36)}
;function En(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=Hc(a,b)+c;a=a instanceof Rb?a:Wb(a);d.href=Ub(a)}
function Fn(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=W("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=W("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Cc(Dc(3,window.location.href));g&&f.push(g);g=Cc(Dc(3,d));if($a(f,g)||!g&&0==d.lastIndexOf("/",0))if(X("autoescape_tempdata_url")&&(f=document.createElement("a"),pc(f,d),d=f.href),d){g=d.match(Bc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:Bn()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b=Dn(d),e=e?Gc(e):"",Xm(b,e,k||5))}else k=b,e=Dn(d),k=k?Gc(k):"",Xm(e,k,5)}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):En(a);return!0}
;function Gn(a){a=void 0===a?{}:a;Ea(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||ub(a,{_c:{jsl:{h:W("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||W("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=vm(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&ub(a,{_c:{jsl:{h:b}}})}Dh("client",a)}
;function Hn(){Gn(function(){kb(W("GUIDED_HELP_FLOWS",void 0),function(a,b){In(b)})})}
function In(a){var b=W("GUIDED_HELP_LOCALE","en_US"),c="https://clients6.google.com";"test"==W("GUIDED_HELP_ENVIRONMENT")&&(c="https://content-googleapis-test.sandbox.google.com");window.guidedhelp=window.guidedhelp||{};window.guidedhelp.onError=function(){};
Kg("","/youtube",b,"youtube2",null,null,null,c,"AIzaSyBsoPoGbMyCfUNm_M-Hb-th-xAkxSutDvM")||Jn(a)||(Hg(a,"","/youtube",b,"youtube2",null,null,null,null,null,c,"AIzaSyBsoPoGbMyCfUNm_M-Hb-th-xAkxSutDvM"),Kn(a))}
function Ln(){var a=W("GUIDED_HELP_FLOWS");a||(a={});a[6189954]="ad-supported-music-tab-guide";Jk("GUIDED_HELP_FLOWS",a)}
function Kn(a){var b=Mn(a);b&&Xm(b,"true",7776E3);bl("DISMISSED",a)}
function Jn(a){return(a=Mn(a))?!!wd.get(""+a,void 0):!1}
function Mn(a){var b=W("GUIDED_HELP_FLOWS");return b&&b[a]}
;function Nn(a,b){this.g=a;this.f=null;var c=b||null;c||(c=On(this.g));c=rc("__%s__","("+c.join("|")+")");this.f=new RegExp(c,"g");this.i={}}
var Pn=/__([a-z]+(?:_[a-z]+)*)__/g;function On(a){var b=[],c={};a.replace(Pn,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function Qn(a,b){var c=y(function(d,e){return tc(b[e]||this.i[e]||"")},a);
return a.g.replace(a.f,c)}
;function Rn(a,b){this.g=Hd(a);var c=Hd(this.g).innerHTML;c=c.replace(/^\s*(\x3c!--\s*)?/,"");c=c.replace(/(\s*--\x3e)?\s*$/,"");this.f=new Nn(c,b)}
function Sn(a,b){var c=Qn(a.f,b);c=c.replace(/^[\s\xa0]+/,"");var d=String(c.substr(0,3)).toLowerCase();(d=0==("<tr"<d?-1:"<tr"==d?0:1))&&(c="<table><tbody>"+c+"</tbody></table>");var e=lc(c,null),f=document;c=Ud(f,"DIV");E?(e=kc(mc,e),oc(c,e),c.removeChild(c.firstChild)):oc(c,e);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(f=f.createDocumentFragment();c.firstChild;)f.appendChild(c.firstChild);c=f}d&&(c=ae(ae(c)));return c}
;function Tn(a,b){(a=Hd(a))&&a.style&&(a.style.display=b?"":"none",U(a,"hid",!b))}
function Un(a){return(a=Hd(a))?"none"!=a.style.display&&!R(a,"hid"):!1}
function Vn(a){C(arguments,function(b){!x(b)||b instanceof Element?Tn(b,!0):C(b,function(c){Vn(c)})})}
function Wn(a){C(arguments,function(b){!x(b)||b instanceof Element?Tn(b,!1):C(b,function(c){Wn(c)})})}
;var Xn=v("ytPubsub2Pubsub2Instance")||new V;V.prototype.subscribe=V.prototype.subscribe;V.prototype.unsubscribeByKey=V.prototype.ua;V.prototype.publish=V.prototype.ea;V.prototype.clear=V.prototype.clear;u("ytPubsub2Pubsub2Instance",Xn,void 0);var Yn=v("ytPubsub2Pubsub2SubscribedKeys")||{};u("ytPubsub2Pubsub2SubscribedKeys",Yn,void 0);u("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Zn(a){var b=v("ytPubsub2Pubsub2Instance");b&&("number"===typeof a&&(a=[a]),C(a,function(c){b.unsubscribeByKey(c);delete Yn[c]}))}
;var $n={},ao="ontouchstart"in document;function bo(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return pe(c,function(e){return R(e,b)},d)}
function co(a){var b="mouseover"==a.type&&"mouseenter"in $n||"mouseout"==a.type&&"mouseleave"in $n,c=a.type in $n||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=$n[b];for(var d in c.g){var e=bo(b,d,a.target);e&&!pe(a.relatedTarget,function(f){return f==e})&&c.ea(d,e,b,a)}}if(b=$n[a.type])for(d in b.g)(e=bo(a.type,d,a.target))&&b.ea(d,e,a.type,a)}}
Y(document,"blur",co,!0);Y(document,"change",co,!0);Y(document,"click",co);Y(document,"focus",co,!0);Y(document,"mouseover",co);Y(document,"mouseout",co);Y(document,"mousedown",co);Y(document,"keydown",co);Y(document,"keyup",co);Y(document,"keypress",co);Y(document,"cut",co);Y(document,"paste",co);ao&&(Y(document,"touchstart",co),Y(document,"touchend",co),Y(document,"touchcancel",co));function eo(a){this.l=a;this.s={};this.v=[];this.w=[]}
l=eo.prototype;l.ba=function(a){return L(a,Z(this))};
function Z(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
l.unregister=function(){al(this.v);this.v.length=0;Zn(this.w);this.w.length=0};
l.init=Ba;l.dispose=Ba;function fo(a,b,c){a.v.push(Zk(b,c,a))}
function go(a,b,c,d){d=Z(a,d);var e=y(c,a);b in $n||($n[b]=new V);$n[b].subscribe(d,e);a.s[c]=e}
function ho(a,b,c,d){if(b in $n){var e=$n[b];lk(e,Z(a,d),a.s[c]);0>=e.K()&&(e.dispose(),delete $n[b])}delete a.s[c]}
l.Ea=function(a,b,c){var d=this.D(a,b);if(d&&(d=v(d))){var e=gb(arguments,2);fb(e,0,0,a);d.apply(null,e)}};
l.D=function(a,b){return Lk(a,b)};function io(a){eo.call(this,a);this.i=null}
B(io,eo);l=io.prototype;l.ba=function(a){var b=eo.prototype.ba.call(this,a);return b?b:a};
l.register=function(){fo(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
l.dispose=function(){this.i&&this.hide(this.i);io.A.dispose.call(this)};
l.D=function(a,b){var c=io.A.D.call(this,a,b);return c?c:(c=io.A.D.call(this,a,"card-config"))&&(c=v(c))&&c[b]?c[b]:null};
l.show=function(a){var b=this.ba(a);if(b){S(b,Z(this,"active"));var c=jo(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;ko(this,a,c);var d=Z(this,"card-visible"),e=this.D(a,"card-delegate-show")&&this.D(b,"card-action");this.Ea(b,"card-action",a);this.i=a;Wn(c);Tk(y(function(){e||(Vn(c),bl("yt-uix-card-show",b,a,c));lo(c);S(c,d);bl("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function jo(a,b,c){var d=c||b,e=Z(a,"card");c=mo(a,d);var f=Hd(Z(a,"card")+Yl(d));if(f)return a=K(Z(a,"card-body"),f),ce(a,c)||(Yd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=Z(a,"card")+Yl(d);Ii(f,e);(d=a.D(d,"card-class"))&&Ji(f,d.split(/\s+/));d=document.createElement("div");d.className=Z(a,"card-border");b=a.D(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
Z(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Yd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function ko(a,b,c){var d=a.D(b,"orientation")||"horizontal",e=K(Z(a,"anchor"),b)||b,f=a.D(b,"position"),g=!!a.D(b,"force-position"),h=a.D(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&k){var n=13;var r=8}else m&&!k?(n=12,r=9):!m&&k?(n=9,r=12):(n=8,r=13);var t=Re(document.body);f=Re(b);t!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var p=new I(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,p=new I(b.offsetWidth+6,-12);var A=Oe(c);f=
Math.min(f,(d?A.height:A.width)-24-6);6>f&&(f=6,d?p.y+=12-b.offsetHeight/2:p.x+=12-b.offsetWidth/2);A=null;g||(A=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");U(c,b,m);U(c,a,k);A=ik(e,n,c,r,p,null,A);!g&&A&&(A&48&&(m=!m,n^=4,r^=4),A&192&&(k=!k,n^=1,r^=1),U(c,b,m),U(c,a,k),ik(e,n,c,r,p));h&&(e=parseInt(c.style.top,10),g=Pd(document).y,Be(c,"position","fixed"),Be(c,"top",e-g+"px"));t&&(c.style.right="",e=Qe(c),e.left=e.left||parseInt(c.style.left,10),g=Nd(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=K("yt-uix-card-body-arrow",c);g=K("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!t&&m||t&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=K("yt-uix-card-arrow",c);m=K("yt-uix-card-arrow-background",c);k&&m&&(c="right"==d?Oe(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
l.hide=function(a){if(a=this.ba(a)){var b=Hd(Z(this,"card")+Yl(a));b&&(T(a,Z(this,"active")),T(b,Z(this,"card-visible")),Wn(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Yd(b.cardMask),b.cardMask=null))}};
l.Ec=function(a,b){var c=this.ba(a);if(c){if(b){var d=mo(this,c);if(!d)return;b instanceof dc?oc(d,b):de(d,b)}R(c,Z(this,"active"))&&(c=jo(this,a,c),ko(this,a,c),Vn(c),lo(c))}};
l.isActive=function(a){return(a=this.ba(a))?R(a,Z(this,"active")):!1};
function mo(a,b){var c=b.cardContentNode;if(!c){var d=Z(a,"content"),e=Z(a,"card-content");(c=(c=a.D(b,"card-id"))?Hd(c):K(d,b))||(c=document.createElement("div"));var f=c;T(f,d);S(f,e);b.cardContentNode=c}return c}
function lo(a){var b=a.cardMask;b||(b=Ud(document,"IFRAME"),b.src='javascript:""',Ji(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function no(){eo.call(this,"button");this.f=null;this.g=[];this.i={}}
B(no,eo);Ca(no);l=no.prototype;l.register=function(){go(this,"click",this.gb);go(this,"keydown",this.qb);go(this,"keypress",this.rb);fo(this,"page-scroll",this.cc)};
l.unregister=function(){ho(this,"click",this.gb);ho(this,"keydown",this.qb);ho(this,"keypress",this.rb);this.f&&oo(this,this.f);this.i={};no.A.unregister.call(this)};
l.gb=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
l.qb=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=po(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=ee(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.sc;else"table"==e&&(f=this.qc);f&&qo(this,a,b,c,y(f,this))}}};
l.cc=function(){var a=this.i;if(0!=lb(a))for(var b in a){var c=a[b],d=L(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;ro(this,d,c,!0)}};
function qo(a,b,c,d,e){var f=Un(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=so(a,c))?(b=ae(d),"a"==b.tagName.toLowerCase()?En(b.href):km(b)):g&&oo(a,b):f?27==d.keyCode?(so(a,c),oo(a,b)):e(b,c,d):(a=R(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(km(b),d.preventDefault()))}
l.rb=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=po(this,a),Un(a)&&c.preventDefault())};
function so(a,b){var c=Z(a,"menu-item-highlight"),d=K(c,b);d&&T(d,c);return d}
function to(a,b,c){S(c,Z(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+Ga(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
l.qc=function(a,b,c){var d=so(this,b),e=am("table",b);b=Kd(document,"td",null,e);d=uo(d,b,Kd(document,"td",null,am("tr",e)).length,c);-1!=d&&(to(this,a,b[d]),c.preventDefault())};
l.sc=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=so(this,b);b=Sa(Kd(document,"li",null,b),Un);to(this,a,b[uo(d,b,1,c)]);c.preventDefault()}};
function uo(a,b,c,d){var e=b.length;a=Ra(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function vo(a,b){var c=b.iframeMask;c||(c=Ud(document,"IFRAME"),c.src='javascript:""',Ii(c,Z(a,"menu-mask")),Wn(c),b.iframeMask=c);return c}
function ro(a,b,c,d){var e=L(b,Z(a,"group")),f=!!a.D(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Qe(b);if(R(b,Z(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(n){}}R(b,"flip")&&(R(b,Z(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.D(b,"button-has-sibling-menu")?k=He(e):a.D(b,"button-menu-root-container")&&(k=wo(a,b));E&&!gd("8")&&(k=null);if(k){var m=Qe(k);m=new ze(-m.top,m.left,m.top,-m.left)}k=new I(0,1);R(b,Z(a,"center-menu"))&&(k.x-=Math.round((Oe(c).width-Oe(b).width)/
2));d&&(k.y+=Pd(document).y);if(a=vo(a,b))b=Oe(c),a.style.width=b.width+"px",a.style.height=b.height+"px",ik(e,f,a,g,k,m,197),d&&Be(a,"position","fixed");ik(e,f,c,g,k,m,197)}
function wo(a,b){if(a.D(b,"button-menu-root-container")){var c=a.D(b,"button-menu-root-container");return L(b,c)}return document.body}
l.Hb=function(a){if(a){var b=po(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.D(a,"button-has-sibling-menu")?c=a.parentNode:c=wo(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=vo(this,a);d&&c.appendChild(d);(c=!!this.D(a,"button-menu-fixed"))&&(this.i[Yl(a).toString()]=b);ro(this,a,b,c);cl("yt-uix-button-menu-before-show",a,b);Vn(b);d&&Vn(d);
this.Ea(a,"button-menu-action",!0);S(a,Z(this,"active"));b=y(this.Gb,this,a,!1);d=y(this.Gb,this,a,!0);c=y(this.Fc,this,a,void 0);this.f&&po(this,this.f)==po(this,a)||this.f&&oo(this,this.f);bl("yt-uix-button-menu-show",a);lm(this.g);this.g=[Y(document,"click",d),Y(document,"contextmenu",b),Y(window,"resize",c)];this.f=a}}};
function oo(a,b){if(b){var c=po(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Wn(c);a.Ea(b,"button-menu-action",!1);var d=vo(a,b),e=Yl(c).toString();delete a.i[e];Tk(function(){d&&d.parentNode&&(Wn(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=L(b,Z(a,"group"));
var f=[Z(a,"active")];e&&f.push(Z(a,"group-active"));Ki(b,f);bl("yt-uix-button-menu-hide",b);lm(a.g);a.g.length=0}}
l.Fc=function(a,b){var c=po(this,a);if(c){b&&(b instanceof dc?oc(c,b):de(c,b));var d=!!this.D(a,"button-menu-fixed");ro(this,a,c,d)}};
l.Gb=function(a,b,c){c=im(c);var d=L(c,Z(this));if(d){d=po(this,d);var e=po(this,a);if(d==e)return}d=L(c,Z(this,"menu"));e=d==po(this,a);var f=R(c,Z(this,"menu-item")),g=R(c,Z(this,"menu-close"));if(!d||e&&(f||g))oo(this,a),d&&b&&this.D(a,"button-menu-indicate-selected")&&((a=K(Z(this,"content"),a))&&de(a,me(c)),xo(this,d,c))};
function xo(a,b,c){var d=Z(a,"menu-item-selected");C(Jd(d,b),function(e){T(e,d)});
S(c.parentNode,d)}
function po(a,b){if(!b.widgetMenu){var c=a.D(b,"button-menu-id");c=c&&Hd(c);var d=Z(a,"menu");c?Ji(c,[d,Z(a,"menu-external")]):c=K(d,b);b.widgetMenu=c}return b.widgetMenu}
l.isToggled=function(a){return R(a,Z(this,"toggled"))};
l.toggle=function(a){if(this.D(a,"button-toggle")){var b=L(a,Z(this,"group")),c=Z(this,"toggled"),d=R(a,c);if(b&&this.D(b,"button-toggle-group")){var e=this.D(b,"button-toggle-group");C(Jd(Z(this),b),function(f){f!=a||"optional"==e&&d?(T(f,c),f.removeAttribute("aria-pressed")):(S(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Mi(a,c)}};
l.click=function(a){if(po(this,a)){var b=po(this,a);if(b){var c=L(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(oo(this,c),Tk(y(this.Hb,this,a),1)):Un(b)?oo(this,a):this.Hb(a)}a.focus()}this.Ea(a,"button-action")};function yo(){eo.call(this,"kbd-nav")}
var zo;B(yo,eo);Ca(yo);l=yo.prototype;l.register=function(){go(this,"keydown",this.Ib);fo(this,"yt-uix-kbd-nav-move-in",this.ub);fo(this,"yt-uix-kbd-nav-move-in-to",this.tc);fo(this,"yt-uix-kbd-move-next",this.vb);fo(this,"yt-uix-kbd-nav-move-to",this.Ja)};
l.unregister=function(){ho(this,"keydown",this.Ib);lm(zo)};
l.Ib=function(a,b,c){var d=c.keyCode;if(a=L(a,Z(this)))switch(d){case 13:case 32:this.ub(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Zj(a,"kbdNavMoveOut");!c;){c=L(a.parentElement,Z(this));if(!c)break a;c=Zj(c,"kbdNavMoveOut")}c=Hd(c);this.Ja(c);bl("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&R(a,Z(this,"list")))switch(d){case 40:this.vb(b,a);break;case 38:d=document.activeElement==a,a=Ao(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Bo(this,a[b]))}c.preventDefault()}};
l.ub=function(a){var b=Zj(a,"kbdNavMoveIn");b=Hd(b);Co(this,a,b);this.Ja(b)};
l.tc=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Co(this,d,a);this.Ja(a)};
l.Ja=function(a){if(a)if(je(a))a.focus();else{var b=ee(a,function(c){return be(c)?je(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Co(a,b,c){if(b&&c)if(S(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Yj&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
l.vb=function(a,b){var c=document.activeElement==b,d=Ao(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Bo(this,d[c]))};
function Bo(a,b){if(b){var c=oe(b,"LI");c&&(S(c,Z(a,"highlight")),zo=Y(b,"blur",y(function(d){T(d,Z(this,"highlight"));lm(zo)},a,c)))}}
function Ao(a){if("UL"!=a.tagName.toUpperCase())return[];a=Sa($d(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Sa(Ua(a,function(b){return Un(b)?ee(b,function(c){return be(c)?je(c):!1}):!1}),function(b){return!!b})}
;function Do(){eo.call(this,"menu");this.g=this.f=null;this.i={};this.o={};this.j=null}
B(Do,eo);Ca(Do);function Eo(a){return(a=Fo(a))?Go(Do.ga(),a):null}
function Fo(a){var b=Do.ga();if(R(a,Z(b)))return a;var c=b.ba(a);return c?c:L(a,Z(b,"content"))==b.f?b.g:null}
l=Do.prototype;l.register=function(){go(this,"click",this.lb);go(this,"mouseenter",this.Xb);fo(this,"page-scroll",this.dc);fo(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.ba(a);Ho(this,a)});
this.j=new V};
l.unregister=function(){ho(this,"click",this.lb);this.g=this.f=null;lm(hb(mb(this.i)));this.i={};kb(this.o,function(a){Yd(a)},this);
this.o={};xe(this.j);this.j=null;Do.A.unregister.call(this)};
l.lb=function(a,b,c){a&&(b=Io(this,a),!b.disabled&&$l(c.target,b)&&Jo(this,a))};
l.Xb=function(a,b,c){a&&R(a,Z(this,"hover"))&&$l(c.target,Io(this,a))&&Jo(this,a,!0)};
l.dc=function(){this.f&&this.g&&Ko(this,this.g,this.f)};
function Ko(a,b,c){var d=Lo(a,b);if(d){var e=Oe(c);if(e instanceof Cd){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Ne(e,!0);d.style.height=Ne(f,!0)}c==a.f&&(e=9,f=8,R(b,Z(a,"reversed"))&&(e^=1,f^=1),R(b,Z(a,"flipped"))&&(e^=4,f^=4),a=new I(0,1),d&&ik(b,e,d,f,a,null,197),ik(b,e,c,f,a,null,197))}
function Jo(a,b,c){Mo(a,b)&&!c?Ho(a,b):(No(a,b),!a.f||$l(b,a.f)?a.Jb(b):kk(a.j,y(a.Jb,a,b)))}
l.Jb=function(a){if(a){var b=Go(this,a);if(b){cl("yt-uix-menu-before-show",a,b);this.f?$l(a,this.f)||Ho(this,this.g):(this.g=a,this.f=b,R(a,Z(this,"sibling-content"))||(Yd(b),document.body.appendChild(b)),b.style.minWidth=Io(this,a).offsetWidth-2+"px");var c=Lo(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);T(b,Z(this,"content-hidden"));Ko(this,a,b);Ji(Io(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);bl("yt-uix-menu-show",a);Oo(b);Po(this,a);bl("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.Hc,this,a),e=y(this.oc,this,a);c=Ga(a).toString();this.i[c]=[Y(b,"click",e),Y(document,"click",d)];R(a,Z(this,"indicate-selected"))&&(d=y(this.pc,this,a),this.i[c].push(Y(b,"click",d)));R(a,Z(this,"hover"))&&(a=y(this.Yb,this,a),this.i[c].push(Y(document,"mousemove",a)))}}};
l.Yb=function(a,b){var c=im(b);c&&($l(c,Io(this,a))||Qo(this,c)||Ro(this,a))};
l.Hc=function(a,b){var c=im(b);if(c){if(Qo(this,c)){var d=L(c,Z(this,"content")),e=oe(c,"LI");e&&d&&ce(d,e)&&cl("yt-uix-menu-item-clicked",c);c=L(c,Z(this,"close-on-select"));if(!c)return;d=Fo(c)}Ho(this,d||a)}};
function No(a,b){if(b){var c=L(b,Z(a,"content"));c&&C(Jd(Z(a),c),function(d){!$l(d,b)&&Mo(this,d)&&Ro(this,d)},a)}}
function Ho(a,b){if(b){var c=[];c.push(b);var d=Go(a,b);d&&(d=Jd(Z(a),d),d=db(d),c=c.concat(d),C(c,function(e){Mo(this,e)&&Ro(this,e)},a))}}
function Ro(a,b){if(b){var c=Go(a,b);Ki(Io(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);S(c,Z(a,"content-hidden"));var d=Go(a,b);d&&Ld(d,{"aria-expanded":"false"});(d=Lo(a,b))&&d.parentNode&&Yd(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.ea("ROOT_MENU_REMOVED"));bl("yt-uix-menu-hide",b);c=Ga(b).toString();lm(a.i[c]);delete a.i[c]}}
l.oc=function(a,b){var c=im(b);c&&So(this,a,c)};
l.pc=function(a,b){var c=im(b);if(c){var d=Io(this,a);if(d&&(c=oe(c,"LI")))if(c=me(c).trim(),d.hasChildNodes()){var e=no.ga();(d=K(Z(e,"content"),d))&&de(d,c)}else de(d,c)}};
function Po(a,b){var c=Go(a,b);if(c){C(c.children,function(e){"LI"==e.tagName&&Ld(e,{role:"menuitem"})});
Ld(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ga(c),c.id=d);(c=Io(a,b))&&Ld(c,{"aria-controls":d})}}
function So(a,b,c){var d=Go(a,b);d&&R(b,Z(a,"checked"))&&(a=oe(c,"LI"))&&(a=K("yt-ui-menu-item-checked-hid",a))&&(C(Jd("yt-ui-menu-item-checked",d),function(e){Li(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Li(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Mo(a,b){var c=Go(a,b);return c?!R(c,Z(a,"content-hidden")):!1}
function Oo(a){C(Kd(document,"UL",null,a),function(b){b.tabIndex=0;var c=yo.ga();Ji(b,[Z(c),Z(c,"list")])})}
function Go(a,b){var c=Lk(b,"menu-content-id");return c&&(c=Hd(c))?(Ji(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.g?a.f:K(Z(a,"content"),b)}
function Lo(a,b){var c=Ga(b).toString(),d=a.o[c];if(!d){d=Ud(document,"IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];C(Hi(b),function(f){e.push(f+"-mask")});
Ji(d,e);a.o[c]=d}return d||null}
function Io(a,b){return K(Z(a,"trigger"),b)}
function Qo(a,b){return $l(b,a.f)||$l(b,a.g)}
;function To(){io.call(this,"clickcard");this.f={};this.g={}}
B(To,io);Ca(To);l=To.prototype;l.register=function(){To.A.register.call(this);go(this,"click",this.ib,"target");go(this,"click",this.hb,"close")};
l.unregister=function(){To.A.unregister.call(this);ho(this,"click",this.ib,"target");ho(this,"click",this.hb,"close");for(var a in this.f)lm(this.f[a]);this.f={};for(a in this.g)lm(this.g[a]);this.g={}};
l.ib=function(a,b,c){c.preventDefault();b=oe(c.target,"button");if(!b||!b.disabled){b=this.D(a,"card-target");var d;b?d=Id(document,b):d=a;a=d;d=this.ba(a);this.D(d,"disabled")||(R(d,Z(this,"active"))?(this.hide(a),T(d,Z(this,"active"))):(this.show(a),S(d,Z(this,"active"))))}};
l.show=function(a){To.A.show.call(this,a);var b=this.ba(a),c=Ga(a).toString();if(!Lk(b,"click-outside-persists")){if(this.f[c])return;b=Y(document,"click",y(this.jb,this,a));var d=Y(window,"blur",y(this.jb,this,a));this.f[c]=[b,d]}a=Y(window,"resize",y(this.Ec,this,a,void 0));this.g[c]=a};
l.hide=function(a){To.A.hide.call(this,a);a=Ga(a).toString();var b=this.f[a];b&&(lm(b),this.f[a]=null);if(b=this.g[a])lm(b),delete this.g[a]};
l.jb=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=L(b.target,c)||L(Fo(b.target),c));(d=d||L(document.activeElement,c)||(document.activeElement?L(Fo(document.activeElement),c):null))||this.hide(a)};
l.hb=function(a){(a=L(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};var Uo=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",Uo,void 0);function Vo(a){var b=void 0===b?{}:b;a=(a=a in Uo?Uo[a]:void 0)||"";var c={},d;for(d in b){c.va=d;var e=function(f){return function(){return String(b[f.va])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.va+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.va,"gi"),e);c={va:c.va}}return a}
function Wo(a,b){return Xo(a in Uo?Uo[a]:{},b)}
function Xo(a,b){var c=W("I18N_PLURAL_RULES");c||(c=function(d){return 1==d?"one":"other"});
return(c=a["case"+b]||a[c(b)])?c.replace("#",b.toString()):b+""}
;function Yo(a){this.f=a}
Yo.prototype.fill=function(){throw Error();};
function Zo(a,b,c,d,e){Nm("/audioswap_ajax",{method:"GET",cb:d,onSuccess:function(f,g){e(a,b,g);c(!0)},
onError:function(){c(!1)}})}
function $o(a,b){this.i=a;this.g=b;this.f=null}
function ap(a){a.f||(a.f=new Rn(a.i,a.g));return a.f}
function bp(){}
bp.prototype.g=function(){throw Error("DetailsRenderer.getTemplatesRoot must be overriden");};
function cp(a){return Sd("DIV",{"class":a})}
bp.prototype.cloneNode=function(a){return K(a,this.g()).cloneNode(!0)};
function dp(a,b,c){c&&("string"===typeof c&&(c=a.cloneNode(c)),b.appendChild(c))}
function ep(a,b,c){var d=cp(b);C(c,function(e){dp(this,d,e)},a);
return d}
;function fp(a,b){this.f=a;this.g=b}
B(fp,Yo);fp.prototype.fill=function(a,b,c){Xd(b);var d={action_get_track_details:"1",asset_id:a.currentId,um:this.f,are:this.g};a.isrc&&(d.isrc=a.isrc);Zo(a.currentId,b,c,d,y(this.i,this))};
fp.prototype.i=function(a,b,c){Xd(b);a=gp(new hp(c));C(a,function(d){b.appendChild(d)})};
function hp(a){this.f=a;this.i=0}
B(hp,bp);hp.prototype.g=function(){return K("asset-templates-root")};
function gp(a){var b=cp("asset-details"),c=a.f.music_track;if(c&&c.metadata&&c.metadata.album_art_url){var d=cp("asset-details-art"),e=cp("asset-details-art-image");e.style.backgroundImage="url("+c.metadata.album_art_url+")";dp(a,d,e);dp(a,b,d)}c=cp("asset-details-policy");a.f.is_available?(ip(a,c,"asset-sound-recording-section",a.f.sr_policy),ip(a,c,"asset-composition-section",a.f.comp_policy),jp(a,c,a.f.music_track),dp(a,c,"asset-available-footer")):dp(a,c,"asset-not-available-text");dp(a,b,c);
return[b]}
var kp=["blocked_terr_names_text","blocked_terr_names_text_tooltip","blocked_terr_message","blocked_terr_message_tooltip"],lp=new $o("asset-clickcard-template",["id"]),mp=new $o("asset-restrictions-countries-template",kp),np=new $o("asset-restrictions-countries-tooltip-template",kp),op=new $o("asset-restrictions-country-template",kp);function pp(a,b){++a.i;var c={id:"clickcard-"+a.f.asset_id+"-"+a.i};c=Sn(ap(lp),c);K("asset-clickcard-content",c).appendChild(b);return c}
function qp(a,b,c){var d=a.length;a=a.join(", ");var e=a+".",f=Wo(50<d?"ASSET_DETAILS_BLOCKED_COUNTRIES":"ASSET_DETAILS_VIEWABLE_COUNTRIES",d),g=Wo("ASSET_DETAILS_BLOCKED_COUNTRIES_TOOLTIP",d);a={blocked_terr_names_text:a,blocked_terr_names_text_tooltip:e,blocked_terr_message:f,blocked_terr_message_tooltip:g};return 1==d?Sn(ap(b),a):Sn(ap(c),a)}
function ip(a,b,c,d){if(d){dp(a,b,c);var e=d.restrictions||null;c=[];if(e){if(e.blocked_terr_names&&e.blocked_terr_names.length){var f=[qp(e.blocked_terr_names,op,mp)];if(1<e.blocked_terr_names.length){var g=ep(a,"asset-restrictions-tooltip",[qp(e.blocked_terr_names,np,np)]);ab(f,pp(a,g))}f=ep(a,"asset-restrictions-item",f);ab(c,f)}e.blocked_non_monetized_platform&&ab(c,"asset-restrictions-blocked-tv");e.blocked_mobile&&ab(c,"asset-restrictions-blocked-mobile");e.embeds_disabled&&ab(c,"asset-restrictions-not-embeddable")}else ab(c,
"asset-restrictions-countries-worldwide");e=ep(a,"asset-restrictions-header",["asset-restrictions-title"]);c=ep(a,"asset-restrictions-section",[e,ep(a,"asset-restrictions-list",c)]);dp(a,b,c);if(d.advertising){a:{d=d.advertising;if(d.show_ads)c="asset-monetization-show-ads",e="asset-monetization-show-ads-tooltip";else if(d.user_cannot_monetize)c="asset-monetization-cannot-monetize",e="asset-monetization-show-ads-tooltip";else if(d.user_can_revshare)c="asset-monetization-revshare",e="asset-monetization-revshare-tooltip";
else{d=null;break a}e=ep(a,"asset-monetization-tooltip",[e]);e=pp(a,e);c=ep(a,"asset-monetization-item",[c,e]);d=ep(a,"asset-monetization-header",[d.show_ads?"asset-advertising-title":"asset-monetization-title"]);d=ep(a,"asset-monetization-section",[d,ep(a,"asset-monetization-list",[c])])}dp(a,b,d)}}}
function jp(a,b,c){if(c&&c.stores){var d=[];C(c.stores,function(e){if(0==e.name){var f=Sd("SPAN",{"class":"yt-sprite logo-google-play"});f=Sd("A",{target:"_blank","class":"asset-stores-link"},f,"Google Play Music");pc(f,e.url);ab(d,f)}});
d&&dp(a,b,ep(a,"asset-stores-section",["asset-stores-header",ep(a,"asset-stores-list",d)]))}}
;var rp={},sp=0;
function tp(a){if(!Kk("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Kk("use_sonic_js_library_for_v4_support")){a:{try{var b=new Qa({url:a,Gc:!0});if(b.l?b.i&&b.f&&b.f[1]||b.j:b.g){var c=Cc(Dc(5,a));var d=!(!c||!c.endsWith("/aclk")||"1"!==Jc(a,"ri"));break a}}catch(f){}d=!1}if(!d)return!1}else if(d=Cc(Dc(5,a)),!d||-1==d.indexOf("/aclk")||"1"!==Jc(a,"ae")||"1"!==Jc(a,"act"))return!1;a:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var e=!0;break a}}catch(f){}e=
!1}return e?!0:!1}
function up(a){var b=new Image,c=""+sp++;rp[c]=b;b.onload=b.onerror=function(){delete rp[c]};
b.src=a}
;function vp(a){return 3==a||4==a||5==a||6==a}
;function wp(a){this.f=a}
B(wp,Yo);wp.prototype.fill=function(a,b,c){Xd(b);Zo(a.currentId,b,c,{action_get_track_details:"1",vid:a.currentId,um:this.f},y(this.g,this))};
wp.prototype.g=function(a,b,c){Xd(b);a=xp(new yp(c));C(a,function(d){b.appendChild(d)})};
function yp(a){this.f=a}
B(yp,bp);yp.prototype.g=function(){return K("music-templates-root")};
function xp(a){var b=cp("music-details"),c=vp(a.f.license_type),d=!!a.f.is_user_monetization_enabled;dp(a,b,c?d?"music-attribution-monetization-section":"music-attribution-no-monetization-section":d?"music-no-attribution-monetization-section":"music-no-attribution-no-monetization-section");if(c){c={title:a.f.title,artist:a.f.artist,track_url:a.f.track_url,artist_url:a.f.artist_url};if(d=zp(a.f.license_type))c.license_name=d.name,c.license_url=d.url;d=ap(Ap);dp(a,b,Sn(d,c));c.track_url&&(d=ap(Bp),
dp(a,b,Sn(d,c)));c.artist_url&&(d=ap(Cp),dp(a,b,Sn(d,c)))}return[b]}
var Dp="title artist license_name license_url track_url artist_url".split(" "),Ap=new $o("music-attribution-template",Dp),Bp=new $o("music-attribution-track-template",Dp),Cp=new $o("music-attribution-artist-template",Dp);
function zp(a){switch(a){case 3:return{name:"Creative Commons Attribution",url:"https://creativecommons.org/licenses/by/1.0/"};case 4:return{name:"Creative Commons Attribution",url:"https://creativecommons.org/licenses/by/2.0/"};case 5:return{name:"Creative Commons Attribution",url:"https://creativecommons.org/licenses/by/3.0/"};case 6:return{name:"Creative Commons Attribution",url:"https://creativecommons.org/licenses/by/4.0/"}}return null}
;function Ep(a,b,c,d){Q.call(this);this.j=c;this.f=Ud(document,"audio");b.appendChild(this.f);this.i=-1;this.g=null;Fp(this,"ended",0);Fp(this,"pause",2);Fp(this,"playing",1);Fp(this,"stalled",3);Fp(this,"waiting",3);d&&d(this)}
sa(Ep,Q);function Gp(a,b){a.i=b;a.dispatchEvent(new Hp(b))}
function Fp(a,b,c){var d=y(function(){Gp(this,c)},a);
P(a.f,b,d)}
function Ip(a,b,c){Gp(a,0);a.g=b;a.dispatchEvent(new Jp);Gp(a,3);var d=y(function(f){this.g==b&&(Kp(this,f),this.f.load(),this.f.play())},a),e=y(function(){Gp(this,0)},a);
Lp(a,b,d,e,c)}
function Kp(a,b){Xd(a.f);C(b,function(c){var d=Ud(document,"SOURCE");d.src=c.src;d.type=c.type;this.f.appendChild(d)},a)}
function Lp(a,b,c,d,e){var f={action_playback_urls:"1"};a.j?(f.asset_id=b,e&&(f.isrc=e)):f.vid=b;Nm("/audioswap_ajax",{format:"JSON",method:"GET",cb:f,onSuccess:function(g,h){c(h.stream_urls)},
onError:d})}
function Hp(a){O.call(this,"h");this.state=a}
sa(Hp,O);function Jp(){O.call(this,"i")}
sa(Jp,O);function Mp(a){var b=0;$a([0,1,2,3],b)||(b=1);var c=Math.pow(10,3-b);a=Math.floor(a/c)*c;var d=Math.floor(a/36E5);a-=36E5*d;var e=Math.floor(a/6E4);a-=6E4*e;var f=Math.floor(a/1E3);c=d?d+":":"";d=(d&&10>e?"0"+e:e)+":";e=10>f?"0"+f:f;var g="";b&&(a=String(a-1E3*f),f=a.indexOf("."),-1==f&&(f=a.length),g=yc("0",Math.max(0,3-f))+a,g="."+g.substring(0,b));return c+d+e+g}
;function Np(a,b,c,d){c=void 0===c?null:c;ti.call(this,void 0===d?null:d);this.j=a;this.g=b;this.i=c;this.B=this.s=null;this.f=new Sj;this.l=new aj(.001*this.g);this.w=0}
sa(Np,ti);Np.prototype.oa=function(){var a=this;ti.prototype.oa.call(this);this.B=this.o?K("track-playback-trail",this.o||this.G.f):null;this.i&&(this.s=K("track-playback-timestamp",this.i));Op(this.f,this.o?K("goog-slider",this.o||this.G.f):null);Y(this.l,"tick",function(){1==a.j.i&&!Oj(a.f)&&0<a.g&&Pp(a,1E3*a.j.f.currentTime/a.g)});
Y(this.f,"change",function(){.1<=Math.abs(zi(a.f.f)-a.w)&&Pp(a,zi(a.f.f)/100,!Oj(a.f))});
Y(this.f,"f",function(){Pp(a,zi(a.f.f)/100,!0)})};
function Op(a,b){vi(a,b);a.Ya=!0;Ci(a.f,1);Di(a.f,100);var c=a.f;if(.1!=c.X){c.X=.1;var d=c.N;c.N=!0;Di(c,yi(c,c.S));Ai(c,Bi(c));c.setValue(zi(c));c.N=d;c.N||c.ha||c.dispatchEvent("change")}}
Np.prototype.show=function(){this.l.start();Vn(this.F());Vn(this.i)};
Np.prototype.hide=function(a){a=void 0===a?!1:a;Wn(this.i);Wn(this.F());this.l.stop();a&&Pp(this,0)};
function Pp(a,b,c){c=void 0===c?!1:c;if(a.s){var d=gc(Mp(parseInt(b*a.g,10)));oc(a.s,d)}c&&(a.j.f.currentTime=parseInt(b*a.g,10)/1E3);a.B.style.width=Ne(100*b+"%",!0);b=Math.max(100*b,1);a.w=b;a.f.setValue(b)}
;function Qp(a,b,c,d,e,f,g,h,k,m,n){this.ya=f;this.xa=n;this.Pa=g;this.Lb=h;this.v=k;this.P=m;this.l=!!this.P;this.fa=a;this.B=1==this.fa;this.currentId=b;this.artist=c.artist||"";this.title=c.title||"";this.album=c.album||"";this.isrc=c.isrc||"";this.album_art_url=c.album_art_url||"";this.w=c.artist_channel_url||"";this.category=c.category||"";this.Z=c.category_value||"";this.genre=c.genre||"";this.aa=c.genre_value||c.genre||"";this.duration=c.length_ms;this.J=c.mood||"";this.na=c.mood_value||"";
this.la=!!c.is_new_track;this.H=c.download_url;this.isPlayable=!!this.H;this.ma=c.license_type;this.wa=vp(this.ma);this.s=!!c.revshare;this.element=Rp(this,e);this.j=d;c.track_flags&&(a=this.j,c=c.track_flags,a.j.clear(),Ek(a.j,c),a.f.ea("AudioLibraryBrowser.TrackFlags.EVENT.CHANGED",a));this.bb();this.j.subscribe("AudioLibraryBrowser.TrackFlags.EVENT.CHANGED",this.bb,this);this.o=this.f=null;this.i=K("audiolibrary-track-body",this.element);a=this.element;c=K("audiolibrary-track-playback-slider",
a);a=new Np(this.v,this.duration,K("track-playback-timestamp-container",a));vi(a,c);this.G=a;this.g=1;this.genre&&this.J||Yd(K("mood-genre-separator",this.element));Sp(this)}
function Tp(a){a.g=1;S(a.i,"hid");T(a.element,"loading");T(a.element,"expanded")}
function Up(a){return a.l?1==a.g?(a.g=2,S(a.element,"loading"),a.P.fill(a,a.i,y(a.wc,a)),!0):!1:!1}
function Vp(a){a.l&&(Up(a)||Tp(a))}
l=Qp.prototype;
l.wc=function(a){if(2==this.g)if(a){this.g=3;this.i.style.maxHeight=this.i.scrollHeight+"px";T(this.i,"hid");T(this.element,"loading");S(this.element,"expanded");a=this.xa||Qd(document);var b=this.element;var c=a||Qd(document);var d=Je(b),e=Je(c),f=We(c);if(c==Qd(document)){var g=d.x-c.scrollLeft;d=d.y-c.scrollTop;E&&!id(10)&&(g+=f.left,d+=f.top)}else g=d.x-e.x-f.left,d=d.y-e.y-f.top;b=Pe(b);f=c.clientHeight-b.height;e=c.scrollLeft;var h=c.scrollTop;e+=Math.min(g,Math.max(g-(c.clientWidth-b.width),
0));h+=Math.min(d,Math.max(d-f,0));c=new I(e,h);a.scrollLeft=c.x;a.scrollTop=c.y}else Tp(this)};
function Rp(a,b){var c=$d(Hd("audiolibrary-template-track"))[0].cloneNode(!0),d=K("audiolibrary-track-head",c),e={title:a.title,artist:a.artist,album:a.album,album_art_url:a.album_art_url,album_art_background_class:a.album_art_url?"":"hid",artist_channel_url:a.w,category:a.category,category_value:a.Z,duration:a.duration?Mp(a.duration/1E3*1E3):"",genre:a.genre,genre_value:a.aa,mood:a.J,mood_value:a.na,button_class:a.isPlayable?"play-pause-button":"expand-button",play_button_class:a.B?"play-visible":
"play-hover"};a.B&&(e.download_link=a.H);W("IS_USER_AUDIO_REVSHARE_ELIGIBLE")&&(e.revshare_tooltip=a.s?Vo("ASSET_REVSHARE_ELIGIBLE"):Vo("ASSET_REVSHARE_NOT_ELIGIBLE"));C(b,function(g){var h=Sn(g.template,e);h.style.width=g.width;d.appendChild(h)});
if(!a.w){var f=K("artist-channel-url",c);f&&Zd(f)}Tn(K("new-tag",c),a.la);return c}
l.bb=function(){if(this.element){C(Hi(this.element),function(b){0==b.lastIndexOf("track-flag-",0)&&T(this.element,b)},this);
var a=Ua(Wp(this.j),function(b){return"track-flag-"+tc(b)});
Ji(this.element,a)}};
function Sp(a){U(a.element,"attribution",a.wa);W("IS_USER_AUDIO_REVSHARE_ELIGIBLE")&&(U(a.element,"revshare-eligible",a.s),U(a.element,"revshare-not-eligible",!a.s));var b=a.v.i,c=a.v.g==a.currentId,d=1==b,e=3==b;b=0==b;U(a.element,"playing",c&&d);U(a.element,"buffering",c&&e);c&&(d||e)?a.G.show():a.G.hide(c&&b)}
l.display=function(){var a=this;Sp(this);bj(function(){return T(a.element,"invisible")},200)};
function Xp(a){var b=a.element;a.f&&(b=a.f);var c=Oe(b).height,d=Ke(b,a.ya);b=0>d.y;c=d.y+c>a.Pa;b||c?(a.f||(a.f=Ud(document,a.element.tagName),Ji(a.f,["track","audiolibrary-placeholder"]),d=a.element,d.parentNode&&d.parentNode.insertBefore(a.f,d.nextSibling)),null==a.o&&(a.o=P(a.Lb,"resize",y(a.Ac,a)),Yp(a)),U(a.element,"stick-top",b),U(a.element,"stick-bottom",c)):Zp(a)}
l.Ac=function(){Yp(this)};
function Yp(a){if(a.f){var b=Oe(a.f).width;a.element.style.width=Ne(b,!0)}}
function Zp(a){a.f&&(Yd(a.f),a.f=null);a.o&&(a.o=null);a.element.style.width=Ne("100%",!0);Ki(a.element,["stick-top","stick-bottom"])}
l.dispose=function(){Zp(this);this.j&&lk(this.j.f,"AudioLibraryBrowser.TrackFlags.EVENT.CHANGED",this.bb,this);ii(this.element);ii(this)};function $p(){this.f=new V;this.j=new Dk;this.g=new Dk;this.i=new Dk}
$p.prototype.subscribe=function(a,b,c){return this.f.subscribe(a,b,c)};
$p.prototype.add=function(a){this.g.add(a);this.i.remove(a);this.f.ea("AudioLibraryBrowser.TrackFlags.EVENT.CHANGED",this)};
$p.prototype.remove=function(a){this.i.add(a);this.g.remove(a);this.f.ea("AudioLibraryBrowser.TrackFlags.EVENT.CHANGED",this)};
function Wp(a){var b=a.j.clone();Ek(b,a.g);b=Gk(b,a.i);return lg(b,function(c){return c})}
;function aq(a,b,c,d,e,f,g,h,k){function m(r,t){r in b&&(n[t]=b[r])}
var n={};b=b||{};m("query","q");m("keyword","kw");m("reserved_keyword","rkw");m("title","t");m("artist","ar");m("album","al");m("genre","g");m("instrument","it");m("mood","mo");m("downloadable","dl");m("min_length","minl");m("max_length","maxl");m("section","s");m("category","cat");m("audio_revshare","arev");m("min_license_type","minlt");m("max_license_type","maxlt");m("continuation_token","ct");n.mr=c?c:20;n.si=d||0;n.qid=a;n.sh=!!e;a={format:"JSON",method:"GET",context:k,cb:n};f&&(a.onSuccess=f);
g&&(a.ia=g);h&&(a.onError=h);Nm("/audioswap_ajax?action_get_tracks=1",a)}
function bq(a,b,c,d,e){this.w=a;this.o=c||null;this.i={};this.s=b;this.B=d||50;this.J=!!e;this.f=!1;this.l=-1;this.g=[]}
function cq(a){a.l++;aq(a.l,a.i,a.B,a.g.length,a.J,a.H,a.v,a.j,a)}
bq.prototype.H=function(a,b){if(!b)this.j(a,b);else if(b.qid==this.l)if("tracks"in b){var c=b.tracks;this.g=cb(c,this.g);this.w(c,this.g);this.f=!!b.has_more;b.continuation_token&&(this.i.continuation_token=b.continuation_token)}else this.j(a,b)};
bq.prototype.v=function(){};
bq.prototype.j=function(a,b){if(this.o){var c=!1;b&&(c=null!==b&&"rate_limited"in b?b.rate_limited:!1);this.o(c)}};function dq(a,b){this.l=a;this.j=b;this.g=am("input",a);var c=am("form",a),d=K("search-icon",a);if(!this.g||!c)throw Error("missing elements for Searchfield");d&&P(d,"click",y(this.f,this));P(c,"submit",y(this.i,this))}
dq.prototype.i=function(a){a.preventDefault();a.stopPropagation();this.f()};
dq.prototype.f=function(){var a=ak(this.g);this.j(a)};
dq.prototype.F=function(){return this.l};function eq(a,b,c,d,e,f){Q.call(this);this.s={};this.s._all="";this.fa=fq(c,d);c=b.section;this.w="ad_supported_music"==c?2:1;this.P=null;d=b.is_user_monetization_enabled;var g=b.is_user_audio_revshare_eligible;"ad_supported_music"==c?(this.P=new fp(d,g),this.Z=W("AUDIOLIBRARY_SHOW_AUDIO_REVSHARE_GUIDE")):"music"==c&&(this.P=new wp(d));this.i=this.B=null;this.g=[];this.ma={};f=f||200;this.G=new bq(y(this.ec,this),b,y(this.vc,this),f,e);this.v=!1;this.l=a;this.j=K("track-list",this.l);this.la=db(Jd("track-selection-menu",
this.l));new dq(K("audiolibrary-browser-searchfield",this.l),y(this.Ta,this,"query"));this.xa=!E||gd("10")?800:0;this.f=new Ep("preview",this.l,2==this.w);jm(this.j,y(this.zc,this),"audiolibrary-track-head");jm(this.l,y(this.yb,this),"track-filter");P(this.j,"scroll",y(this.Ic,this));P(this.f,"h",y(this.xc,this));P(this.f,"i",y(this.yc,this));C(Jd("track-filter-selection-list",this.l),function(h){jm(h,y(this.yb,this),"track-filter")},this);
this.o=K("track-content",this.l);this.ya=new bk;this.aa=!0;gq(this);W("AUDIOLIBRARY_SHOW_AUDIO_REVSHARE_GUIDE")&&(Hn(),Ln(),In(6189954))}
B(eq,Q);function fq(a,b){var c=hq(a,b);return Ua(a,function(d){return{md:d,template:new Rn("audiolibrary-template-"+d,iq),width:c[d]}})}
function hq(a,b){var c={download:{widthPx:15,fixed:!0},select:{widthPx:15,fixed:!0},license:{widthPx:15,fixed:!0},revshare:{widthPx:15,fixed:!0},"play-control":{widthPx:40,fixed:!0},tag:{widthPx:30,fixed:!0},duration:{widthPx:80},"genre-and-mood":{grow:6},artist:{grow:7},title:{grow:7},album:{grow:4},category:{grow:6}},d={},e=100,f=0;C(a,function(h){if(c.hasOwnProperty(h)){var k=c[h];if(k.widthPx){var m=100*(k.widthPx+20)/b;e-=m;d[h]=k.fixed?k.widthPx+"px":m+"%"}else k.grow&&(f+=k.grow)}});
var g=e/f;C(a,function(h){c[h].grow&&(d[h]=g*c[h].grow+"%")});
return d}
var iq="title artist album album_art_url album_art_background_class artist_channel_url button_class play_button_class category category_value duration genre genre_value mood mood_value download_link revshare_tooltip".split(" ");function gq(a){var b=W("INITIAL_TYPE"),c=W("INITIAL_VALUE");((b=b||"_all",c)||"_all"==b)&&a.Ta(b,c)}
l=eq.prototype;l.zc=function(a){var b=jq(this,a);if(b){if(this.B&&this.B!=b.currentId){var c=kq(this,this.B);c&&c.l&&Tp(c)}this.B=b.currentId;(a=L(a.target,"track-action"))?R(a,"download-link")?Up(b):R(a,"play-pause-button")?lq(this,b):R(a,"select-button")?this.dispatchEvent(new mq(b)):R(a,"expand-button")?Vp(b):R(a,"license-button")&&Vp(b):b.l?Vp(b):lq(this,b)}};
function lq(a,b){if(b.isPlayable){var c=a.f.i;if(a.f.g!=b.currentId||3!=c&&1!=c){if(b.isPlayable)if(a.f.g==b.currentId&&2==a.f.i)a.f.f.play();else if(Up(b),b.isPlayable){c="/gen_204?a=audiolibrary-preview&"+Gc({track_id:b.currentId});var d=void 0===d?"":d;c&&(d?Om(c,void 0,"POST",d,void 0):W("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Om(c,void 0,"GET","",void 0):tp(c)||up(c));Ip(a.f,b.currentId,b.isrc)}}else a.f.f.pause(),R(b.element,"stick-top")||R(b.element,"stick-bottom")||(a.i&&null!=a.i&&Zp(a.i),
a.i=null)}}
l.yc=function(){};
function jq(a,b){var c=L(b.target,"track");return Ya(a.g,function(d){return d.element===c})}
l.yb=function(a){a=L(a.target,"track-filter");a={type:Lk(a,"filter-type"),value:Lk(a,"filter-value")||""};this.Ta(a.type,a.value)};
l.Ta=function(a,b){if(!this.v){this.v=!0;"_all"!=a&&(b?this.s[a]=b:delete this.s[a]);var c=this.s;nq(this,c);var d={},e;for(e in c){var f=c[e];"duration"==e&&f?(f=JSON.parse(f),d.min_length=f.min,d.max_length=f.max):"license"==e&&f?(f=JSON.parse(f),d.min_license_type=f.min,d.max_license_type=f.max):d[e]=f}oq(this,d)}};
function nq(a,b){C(a.la,function(c){var d=Lk(c,"filter-type");if(d){var e=d in b,f=e&&b[d];U(c,"filter-selected",e);if(d=K("track-selection-menu-button",c)){var g=null;e&&f?(c=Jd("track-filter",Eo(c)),C(c,function(h){Lk(h,"filter-value")==f&&(g=Lk(h,"display-value"))})):g=Lk(d,"default-text");
g&&de(K("yt-uix-button-content",d),g||"")}}})}
l.Ic=function(){var a=this.j;a.scrollHeight-a.scrollTop-a.clientHeight<a.clientHeight&&!this.na&&this.G.f&&oq(this);this.i&&Xp(this.i)};
function oq(a,b){if(b||a.G.f)if(pq(a,!0),b){var c=a.G;c.f=!1;c.g=[];c.i={};ub(c.i,b,c.s);cq(c)}else c=a.G,c.f&&cq(c)}
l.ec=function(a,b){T(this.o,"rate-limited");a=Ua(a,function(c){var d=1E3*c.len;c={type:"audio",id:c.streamid,fp_ref_id:c.fp_ref_id,vid:c.vid||null,asset_id:c.asset_id||null,isrc:c.isrc||null,length_ms:d,start_ms:0,end_ms:d,title:uc(c.title),download_url:c.download_url,album_art_url:c.album_art_url||null,artist_channel_url:c.artist_channel_url||null,artist:uc(c.artist||""),album:uc(c.album||""),genre:uc(c.display_genre||""),category:uc(c.display_category||""),monetized:!!c.monetized,mood:uc(c.display_mood||
""),genre_value:c.genre||"",mood_value:c.mood||"",category_value:c.category||"",license_type:c.license_type||0,revshare:!!c.revshare,is_new_track:!!c.is_new_track};d=1==this.w?c.vid:2==this.w?c.asset_id:void 0;var e=this.ma[d];e||(e=new $p);return new Qp(this.w,d,c,e,this.fa,this.o,Oe(this.j).height,this.ya,this.f,this.P,this.j)},this);
b.length==a.length?qq(this,a):rq(this,a);pq(this,!1);U(this.o,"no-results",0==b.length)};
function rq(a,b){C(b,function(c){this.j.appendChild(c.element);ab(this.g,c);c.display()},a);
a.v=!1;a.Z&&0<a.g.length&&(a.Z=!1,Up(a.g[0]))}
function qq(a,b){a.i&&Zp(a.i);S(a.j,"sorting");var c=a.g,d=y(function(){C(c,function(g,h){g.element.style.top=50*h+"px";g.element.style.position="absolute"},this)},a),e=y(function(){C(b,function(g,h){g.element.style.top=50*h+"px";
R(g.element,"moving")||(g.element.style.position="absolute",this.j.appendChild(g.element),ab(this.g,g),g.display());if(this.aa&&0==h){if(g.element){var k=K("yt-uix-clickcard-target",g.element);k&&To.ga().show(k)}this.aa=!1}},this)},a),f=y(function(){C(this.g,function(g){R(g.element,"deleted")&&(g.dispose(),this.f.g==g.currentId&&this.f.f.pause())},this);
Xd(this.j);this.g=[];rq(this,b);C(b,function(g){g.element.style.top="";g.element.style.position="";T(g.element,"moving")});
T(this.j,"sorting");this.i&&Xp(this.i);this.v=!1},a);
d();bj(function(){C(c,function(g){var h=Za(b,function(k){return k.currentId==g.currentId});
0<=h?(b[h]=g,S(g.element,"moving")):Ji(g.element,["invisible","deleted"])})},50);
bj(e,100);bj(f,a.xa+150)}
l.vc=function(a){qq(this,[]);U(this.o,"rate-limited",a);pq(this,!1)};
l.xc=function(a){0==a.state?C(this.g,function(b){Sp(b)},this):(1==a.state&&this.dispatchEvent(new sq),(a=this.f.g)&&(a=kq(this,a))&&Sp(a))};
function pq(a,b){a.na=b;U(a.o,"loading-tracks",b);b&&T(a.o,"no-results")}
function kq(a,b){return Ya(a.g,function(c){return c.currentId==b})}
function mq(a){O.call(this,"j");this.track=a}
B(mq,O);function sq(){O.call(this,"k")}
B(sq,O);u("yt.www.audiolibrary.init",function(a,b,c,d){new eq(K("audio-library-browser"),b,c,740,!0,d)},void 0);
Ma("yt.abuse.player.botguardInitialized",v("yt.abuse.player.botguardInitialized")||fn);Ma("yt.abuse.player.invokeBotguard",v("yt.abuse.player.invokeBotguard")||gn);Ma("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||hl);Ma("yt.player.exports.navigate",v("yt.player.exports.navigate")||Fn);Ma("yt.util.activity.init",v("yt.util.activity.init")||pm);Ma("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||sm);
Ma("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||qm);}).call(this);
