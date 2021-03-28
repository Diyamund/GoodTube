(function(){var ia,ja=this;function qa(a){a=a.split(".");for(var b=ja,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ra(){}
function sa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function va(a){var b=sa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function za(a){return"string"==typeof a}
function Ca(a,b,c){return a.call.apply(a.bind,arguments)}
function Da(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function Ea(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ea=Ca:Ea=Da;return Ea.apply(null,arguments)}
var Fa=Date.now||function(){return+new Date};
function Ga(a,b){var c=a.split("."),e=ja;c[0]in e||!e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
function Ha(a,b){function c(){}
c.prototype=b.prototype;a.Ji=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qj=function(a,c,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}}
;var Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a,ab,bb,cb,db,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Yb,Zb,$b,ac,bc,cc,dc,ec,fc,gc=/^[6-9]$/,hc={Nf:0,Rd:1,Mf:2,kb:3},ic={EMPTY:0,Df:1,Ed:2},jc={Cf:1,Ef:2,Ui:3,Af:4,Ff:5,cj:6,Qi:7,pb:8},kc={DONT_CARE:1,xf:2,Pf:3},lc={Id:0,Of:1,kb:2},mc=[23,24],g={Rf:0,Ni:114,ea:115,Ha:116,U:117,Ia:494,J:118,ta:119,fa:374,ga:120,ia:121,Nd:122,V:123,va:124,ob:125,Hf:230,Zi:553,Z:126,ja:127,S:128,
Qd:343,La:129,Mi:231,qa:130,wf:131,Oi:237,Pi:570,Wi:132,lb:134,ua:189,Gf:246,Yi:264,Xi:256,mb:133,If:184,Kf:419,dj:503,ej:578,fj:579,gj:505,jj:516,hj:509,ij:512,xa:173,Ri:568,Si:569,Hd:135,Xb:136,Zb:137,Pd:138,Ma:139,yf:140,Jd:141,Ld:142,Md:240,Lf:143,Qf:144,gb:347,Vb:191,hb:150,Ga:145,Fd:146,Ja:147,kj:148,aj:245,Bd:155,Fa:149,ib:154,Kd:311,Yb:153,RENDERER:152,Ka:156,nb:151,cc:158,Od:294,Jf:157,wa:160,Ti:328,fb:159},nc={Cd:161,Sd:162};function oc(a){return{Ec:function(){return a.Ec()},
ca:function(){return a.ca()},
X:function(){return a.X()}}}
;(function(){function a(b){for(var a=[],e=0,d;d=b[e++];)a.push(d.api||{a:d.Jc,b:d.N,c:d.Ba,d:d.A,e:d.Qc,f:d.Ah,g:d.wh,i:d.Ic,j:d.H,k:d.Pc,l:d.Xg});return a}
Ma=function(b){var a={};if(b)for(var e=0;e<b.length;++e)a[b[e]]=!0;return a};
Na=function(b){var c=a(b.X());return b.api||{a:b.ca,b:function(){return c},
c:b.Ec}};
Oa=function(a){return a?(a=a.toLowerCase(),"zh-tw"==a||"zh-cn"==a||"ja"==a||"ko"==a):!1};
Pa=function(){return(new Date).getTime()};
Qa=function(a){return"string"==typeof a};
Ra=function(a){return"number"==typeof a}})();function pc(){return{Sa:function(){return{clientName:"hp",requestIdentifier:"hp",fc:"google.com",lf:"",Hb:"en",Zd:"",Ue:"",Ub:"",authuser:0,Xh:"",vd:"",he:!1,Ze:"",nd:"",connectionType:0,Ck:null,pf:!1,qk:!1,Je:!1,Rb:Ma([19,5,0]),Tj:!1,lg:!0,pg:10,kg:!0,fe:!0,yj:!1,vg:!1,Th:!1,Pe:!1,fk:!1,Zj:!1,oj:!0,xk:"en",Ie:!0,hg:!1,Ch:500,Wc:!1,qh:!0,Yj:!0,Gb:!1,Mb:"",Se:"//www.google.com/textinputassistant",Te:"",bi:7,Uj:!1,Vj:!1,xh:!1,th:!0,yh:!1,Ge:!1,si:!1,ri:!1,Sb:1,Qe:!0,Ab:!1,Ac:!1,ge:!1,di:10,Uc:!1,uj:0,
Xj:!1,gi:!0,ng:!1,Na:document.body,zh:!0,mf:null,zb:{},Aj:{},kk:0,wg:!1,Fh:!0,ya:!1,Bj:!1,wk:null,mg:!1,Wh:null,Di:null,ee:!1,Eh:!0,Xf:!1,Bk:1,rj:1,spellcheck:!1,Re:!1,searchText:"Search",Bc:"I'm  Feeling Lucky",ti:"",Vh:"Learn more",Xe:"Remove",We:"This search was removed from your Web History",hintText:"",xj:"Did you mean:",Zh:"",tk:"",yk:"Search by voice",tg:!1,Ih:null,Zc:0,Jh:0,cd:"",wd:"",isRtl:!1,Oa:"absolute",sh:!1,Ee:!1,md:null,Fe:!0,zk:0,wb:[0,0,0],jg:null,Hi:null,Vd:[0],Wd:0,ji:1,xd:"",
Ii:"",Fi:"",Cc:null,sg:"",rg:"",sj:1,Yd:{},Vf:!0}}}}
;var qc=/<\/?(?:b|em)>/gi,rc={vf:8,pb:9,Dd:13,Wb:27,bj:32,sf:37,uf:38,tf:39,rf:40,DELETE:46,Vi:190};var R=function(){function a(a,b,c){f[a]=c;l[a]=[b]}
function b(a,b,e){var h=m[a];h?h!=c&&(m[a]=c):m[a]=e;(h=l[a])?h.push(b):l[a]=[b];k[b]=e}
var c=Sa,e=0,d={},f={},k={},m={},l={},p=1E4;return{Lj:function(){return e++},
Kj:function(){return p++},
Ve:a,mk:function(b,c){var h=p++;a(b,h,c);return h},
register:b,nk:function(a,c){var h=p++;b(a,h,c);return h},
Eg:function(){return l},
Sa:function(a,b){var h=d[a];return h?h:(h=f[a])?d[a]=h():b?(h=k[b])?h():null:(h=m[a])&&h!=c?h():null}}}();function sc(a,b,c,e,d,f){function k(){if(n){for(var a=0,b;b=u[a++];)b.O&&b.O();n=!1}}
function m(a){for(var b in a){var c=b,e=a[c];if(e!=h.Cd)if(t[c]){for(var d=e,y=v[c]||[],f=0;f<d.length;++f)(e=l(c,d[f]))&&y.push(e);v[c]=y}else(e=l(c,e))&&(B[c]=e)}}
function l(a,b){if(b&&b instanceof Object)var c=b;else if(c=z.Sa(a,b),!c)return null;if(c.Pa){var h=c.Pa();if(h)for(var l=0,e,d,y;e=h[l++];){y=!1;d=e.A();if(t[d]){if(y=x[d]){y.push(e);continue}y=!0}x[d]=y?[e]:e}}w.push([c,a]);u.push(c);return c}
function p(a){for(var b=g.Rf,c=0,h;h=w[c++];)h[0]==a&&(b=h[1]);return b}
function q(a,b){var c=Ta(a.A(),r),h=Ta(b.A(),r);return 0>c?1:0>h?-1:c-h}
var h=nc,t=Ma([g.fb,g.Bd,g.Fa,g.Yb,g.ib,g.Kd,g.RENDERER,g.Ka,g.Nd,g.nb,g.cc,g.Od,g.wa]),y=[g.Ga,g.U,g.J,g.ta,g.fa,g.Z,g.ea,g.Ha,g.ga,g.Ja,g.ia,g.mb,g.V,g.va,g.ob,g.ja,g.S,g.Qd,g.La],r=[g.ja,g.Fa,g.lb,g.V,g.ia,g.Z,g.J,g.ea,g.S,g.wa,g.xa,g.ta,g.Ha,g.RENDERER,g.Yb,g.La,g.ga,g.fa,g.va,g.cc,g.Bd,g.wf,g.qa,g.Ja,g.Jd,g.Ld,g.Zb,g.Md,g.Lf,g.Pd,g.Qf,g.Ma,g.yf,g.Hd,g.Xb],B={},v={},x={},w=[],u=[],n=!1,z=R,D={F:function(a){k();for(var b=0,c;c=u[b++];)c.F&&c.F(a);n=!0},
O:k,isActive:function(){return n},
get:function(a,b){var c=B[a];if(c)return c.C?c.C(p(b)):{}},
P:function(a,b){var c=v[a];if(c){for(var h=[],l=p(b),e=0,d;d=c[e++];)h.push(d.C?d.C(l):{});return h}return[]},
Aa:function(){return a},
Ta:function(){return d},
Cj:function(a,b){var c=v[g.fb];if(c)for(var h=0,l;l=c[h++];)if(l.D()==a)return l.C?l.C(p(b)):{};return null}};
(function(){if(f.Vf){var d=z.Eg(),r,p;for(p in d){var k=p;var v=d[k];var w=t[k];if(r=b[k]){if(r!=h.Cd&&w&&r.length){w=k;var K,k=void 0;r=r.slice(0);for(var U=[],V={},ea=0;K=r[ea++];)K instanceof Object&&(k=K.D(),V[k]||(U.push(K),V[k]=1),r.splice(--ea,1));K=Ma(r);K[h.Sd]&&(K=Ma(r.concat(v)),delete K[h.Sd]);for(k in K)V[k]||U.push(parseInt(k,10));b[w]=U}}else b[k]=w?v:v[0]}}m(b);for(d=0;p=y[d++];)b[p]||(w=l(p,void 0))&&(B[p]=w);m(x);u.sort(q);for(d=0;p=u[d++];)p.R&&p.R(c,e);a.gd(e,c.rb());e.Uf();for(d=
0;p=u[d++];)p.G&&p.G(D);for(d=0;p=u[d++];)p.setup&&p.setup(f);for(d=0;p=u[d++];)p.F&&p.F(f);n=!0})();
return D}
;function tc(a,b,c){function e(){return a}
function d(){return G}
function f(){return Q}
function k(){return b}
function m(){return c||""}
function l(a,b){t(a,b)}
function p(a,b){t(a,b,!0)}
function q(){w||(u=n=!0)}
function h(){D=!0}
function t(a,b,c){w||(u=!0,r[a]=b,c&&(B[a]=b))}
var y=Wa(),r={},B={},v,x,w=!1,u=!1,n=!1,z=!1,D=!1,O={getId:function(){return y},
te:function(){var a=parseInt(y,36);return isNaN(a)?-1:a},
ca:e,we:d,ma:f,Qa:k,H:function(){return r},
le:function(){return v},
bh:m,Rc:function(){return x},
ke:function(){return{ca:e,we:d,ma:f,Qa:k,bh:m,setParameter:l,pd:p,ug:q,Wf:h}},
setParameter:l,pd:p,ug:q,Wf:h,Ph:function(){return n},
Gh:function(){u=z=!0},
isReusable:function(h,l,d){return!u&&a==h&&b.equals(l)&&c==d},
Oe:function(){return z},
Ke:function(){return D},
qg:function(){w||(x=Pa(),"cp"in B||p("cp",b.Cb()),t("gs_id",y),v=Ua(B)+":"+a,u=w=!0)}};
var G=a.toLowerCase();var Q=Va(G);return O}
;function uc(a,b,c,e,d,f){function k(){return!!b&&!!b[0]}
var m,l=!0,p,q={ha:function(){return a},
ca:function(){return a.ca()},
Gc:function(){return k()?b[0]:null},
X:function(){return b},
na:k,H:function(){return c},
Me:function(){return e},
dd:function(){return d},
Nh:function(){return f},
A:function(){return l},
qe:function(){p||(p=oc(q));return p},
Ec:function(){return m}};
b?b.length&&33==b[0].A()&&(d=l=!1):b=[];c?m=c.getObject("t"):c=vc;return q}
;function wc(a,b,c,e,d,f){function k(a){if(d)for(var b=0,c;c=a[b++];)if(-1!=Ta(c,d))return!0;return!1}
var m=!1,l={Jc:function(){return a},
N:function(){return b},
Ba:function(){return c},
A:function(){return e},
Pc:function(){return f.getString("za")},
Xg:function(){return f.getString("zb")},
Qc:function(){return d||[]},
Ah:function(a){return!!d&&k([a])},
wh:k,H:function(){return f},
Ic:function(){return m}};
switch(e){case 0:case 32:case 38:case 39:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:m=!0}f||(f=vc);return l}
;(function(){var a=/\s/g,b=/\u3000/g,c=/^\s/,e=/\s+/,d=/\s+/g,f=/^\s+|\s+$/g,k=/^\s+$/,m=/<[^>]*>/g,l=/&nbsp;/g,p=/&#x3000;/g,q=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],h=document.getElementsByTagName("head")[0],t=0;Ya=function(a,b){function c(){return b}
void 0===b&&(b=a);return{Cb:c,Ae:function(){return a},
Vg:c,Wj:function(){return a<b},
equals:function(c){return c&&a==c.Ae()&&b==c.Vg()}}};
Xa=function(a,b,c,h){if(null==b||""===b){if(!h)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))};
Ua=function(a){var b=[],c;for(c in a)Xa(c,a[c],b);return b.join("&")};
Za=function(a){return!!a&&!k.test(a)};
$a=function(a){for(var b=q.length,c=0;c<b;c+=2)a=a.replace(q[c],q[c+1].source);return a};
ab=function(a){for(var b=q.length,c=0;c<b;c+=2)a=a.replace(q[c+1],q[c].source);a=a.replace(l," ");return a.replace(p,"\u3000")};
bb=function(a){return a.replace(qc,"")};
cb=function(a){return a.replace(m,"")};
db=function(c){return c&&(-1<c.indexOf(" ")||e.test(c))?(c=c.replace(b,"&#x3000;"),c.replace(a,"&nbsp;")):c};
Va=function(a,b){return a&&(-1<a.indexOf(" ")||e.test(a))?(a=a.replace(d," "),a.replace(b?f:c,"")):a};
gb=function(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b};
hb=function(a,b){return a||b?!!a&&!!b&&a.toLowerCase()==b.toLowerCase():!0};
ib=function(a){window.clearTimeout(a)};
Sa=function(){};
jb=function(){return h};
Wa=function(){return(t++).toString(36)};
kb=function(a){return gc.test(a)};
Ta=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,h=b.length;c<h;++c)if(b[c]===a)return c;return-1};
lb=function(a,b){return a.W()-b.W()};
mb=function(a,b){return b.W()-a.W()};
nb=function(a){var b={},c;for(c in a)b[c]=a[c];return b}})();function xc(a){return{contains:function(b){return b in a},
Dj:function(b){return!!a[b]},
xe:function(b){return a[b]||0},
getString:function(b){return a[b]||""},
getObject:function(b){return a[b]||null}}}
var vc=xc({});(function(){function a(a,b,c){a=document.createElement(a);b&&(a.className=b);c&&(a.id=c);return a}
function b(b){return a("div",b)}
function c(a,b){var c=a.getElementsByTagName("input");if(c)for(var h=0,d;d=c[h++];)if(d.name==b&&"submit"!=d.type.toLowerCase())return d;return null}
function e(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function d(a){return a?a.ownerDocument||a.document:window.document}
function f(a){return a?(a=d(a),a.defaultView||a.parentWindow):window}
var k=void 0!=document.documentElement.style.opacity,m={rtl:"right",ltr:"left"};tb=function(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(h){}};
ub=function(a){try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var h=a.createTextRange(),e=d(a).selection.createRange();h.inRange(e)&&(h.setEndPoint("EndToStart",e),b=h.text.length,h.setEndPoint("EndToEnd",e),c=h.text.length)}if(void 0!==b)return Ya(b,c)}catch(y){}return null};
vb=function(a,b){for(var c=0,h=0;a&&(!b||a!=b);){c+=a.offsetTop;h+=a.offsetLeft;try{a=a.offsetParent}catch(t){a=null}}return{yd:c,oa:h}};
yb=function(a){try{return d(a).activeElement==a}catch(p){}return!1};
zb=function(a){return 38==a||40==a};
qb=a;Ab=function(){var b=a("table");b.cellPadding=b.cellSpacing=0;b.style.width="100%";return b};
Bb=b;Cb=function(a,c){var d=b(a),h=d.style;h.background="transparent";h.color="#000";h.padding=0;h.position="absolute";c&&(h.zIndex=c);h.whiteSpace="pre";return d};
Db=function(a,b){a.innerHTML!=b&&(b&&(ob?b=db(b):pb&&(b='<pre style="font:inherit;margin:0">'+b+"</pre>")),a.innerHTML=b)};
Eb=function(a,b,c){var h=a.style;"INPUT"!=a.nodeName&&(c+=1);h.left=h.right="";h[b]=c+"px"};
Fb=function(a){return"rtl"==a?"right":"left"};
Gb=function(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=m[b])};
Hb=function(b,d,e){if(c(b,d))return null;var h=a("input");h.type="hidden";h.name=d;e&&(h.value=e);return b.appendChild(h)};
Ib=c;Jb=function(a){var b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))};
Kb=e;Lb=function(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return e(a)};
Mb=function(a,b){b.parentNode.insertBefore(a,b.nextSibling)};
Nb=function(a){a=a.insertCell(-1);var b=qb("a");b.href="#ifl";b.className="gssb_j gss_ifl";a.appendChild(b);return b};
Ob=function(a,b){var c=f(a);return(c=c.getComputedStyle?c.getComputedStyle(a,""):a.currentStyle)?c[b]:null};
Pb=function(a){var b=a||window;a=b.document;var c=b.innerWidth,b=b.innerHeight;if(!c){var h=a.documentElement;h&&(c=h.clientWidth,b=h.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{qf:c,He:b}};
Qb=function(a){return(a||window).document.documentElement.clientWidth};
Rb=function(a){a=a.style;a.border="none";a.padding=rb||sb?"0 1px":"0";a.margin="0";a.height="auto";a.width="100%"};
Sb=function(a){return(k?"opacity":"filter")+":"+(k?a+"":(ob?"progid:DXImageTransform.Microsoft.Alpha(":"alpha(")+"opacity="+Math.floor(100*a)+")")+";"};
Tb=function(a){var b={};if(a)for(var c=0,h;h=a[c++];)b[h.Oc()]=h;return b};
Ub=d;Yb=f;Zb=function(a){rb&&(a.tabIndex=0)}})();R.Ve(g.Vb,192,function(){function a(a){Qa(a)&&(a=e(a));var b,c,h="";if(a){for(var d=a.length,f=b=c=0;d--;)for(b<<=8,b|=a[f++],c+=8;6<=c;){var k=b>>c-6&63;h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(k);c-=6}c&&(h+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>c+8-6&63))}return h}
function b(a){var b=[];if(a)for(var c=0,h=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);if(32>e||127<e||!l[e-32])return[];c<<=6;c|=l[e-32]-1;h+=6;8<=h&&(b.push(c>>h-8&255),h-=8)}return b}
function c(a,b){var c={};c.K=Array(4);c.buffer=Array(4);c.Li=Array(4);c.padding=Array(64);c.padding[0]=128;for(var h=1;64>h;++h)c.padding[h]=0;d(c);var h=Array(64);if(64<b.length){d(c);k(c,b);var l=m(c)}else l=b;for(var p=0;p<l.length;++p)h[p]=l[p]^92;for(p=l.length;64>p;++p)h[p]=92;d(c);for(p=0;64>p;++p)c.buffer[p]=h[p]^106;f(c,c.buffer);c.total=64;k(c,e(a));l=m(c);d(c);f(c,h);c.total=64;k(c,l);return m(c)}
function e(a){for(var b=[],c=0,h=0;h<a.length;++h){var d=a.charCodeAt(h);128>d?b[c++]=d:(2048>d?b[c++]=d>>6|192:(b[c++]=d>>12|224,b[c++]=d>>6&63|128),b[c++]=d&63|128)}return b}
function d(a){a.K[0]=1732584193;a.K[1]=4023233417;a.K[2]=2562383102;a.K[3]=271733878;a.sb=a.total=0}
function f(a,b){for(var c=a.Li,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;for(var h=a.K[0],d=a.K[1],e=a.K[2],f=a.K[3],k,m,l,t=0;64>t;++t)16>t?(k=f^d&(e^f),m=t):32>t?(k=e^f&(d^e),m=5*t+1&15):48>t?(k=d^e^f,m=3*t+5&15):(k=e^(d|~f),m=7*t&15),l=f,f=e,e=d,h=h+k+q[t]+c[m]&4294967295,k=p[t],d=d+((h<<k|h>>>32-k)&4294967295)&4294967295,h=l;a.K[0]=a.K[0]+h&4294967295;a.K[1]=a.K[1]+d&4294967295;a.K[2]=a.K[2]+e&4294967295;a.K[3]=a.K[3]+f&4294967295}
function k(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.sb++]=b[d],64==a.sb&&(f(a,a.buffer),a.sb=0)}
function m(a){var b=Array(16),c=8*a.total,d=a.sb;k(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;f(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.K[e]>>c&255;return b}
var l=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],p=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],q=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];return{A:function(){return g.Vb},
D:function(){return 192},
C:function(){return{encode:a,decode:b,Wg:c}}}});R.Ve(g.hb,95,function(){function a(a,c){c=$a(bb(c));a=$a(Va(a,!0));if(gb(c,a))return a+"<b>"+c.substr(a.length)+"</b>";for(var b="",d=[],f=c.length-1,k=0,m=-1,l;l=c.charAt(k);++k)" "==l||"\t"==l?b.length&&(d.push({t:b,cb:m,e:k+1}),b="",m=-1):(b+=l,-1==m?m=k:k==f&&d.push({t:b,cb:m,e:k+1}));b=a.split(/\s+/);k={};for(f=0;m=b[f++];)k[m]=1;l=-1;for(var b=[],p=d.length-1,f=0;m=d[f];++f)k[m.t]?(m=-1==l,f==p?b.push({cb:m?f:l,e:f}):m&&(l=f)):-1<l&&(b.push({cb:l,e:f-1}),l=-1);if(!b.length)return"<b>"+c+"</b>";
f="";for(k=m=0;l=b[k];++k)(p=d[l.cb].cb)&&(f+="<b>"+c.substring(m,p-1)+"</b> "),m=d[l.e].e,f+=c.substring(p,m);m<c.length&&(f+="<b>"+c.substring(m)+"</b> ");return f}
return{A:function(){return g.hb},
D:function(){return 95},
C:function(){return{bold:a}}}});R.register(g.Fd,12,function(){function a(a){a=b(a,h,c);a=b(a,t,e);return b(a,r,d)}
function b(a,b,c){for(var d,e="",h=0;null!=(d=b.exec(a));)h<d.index&&(e+=a.substring(h,d.index)),e+=c(d[0]),h=b.lastIndex;if(!e)return a;h<a.length&&(e+=a.substring(h));return e}
function c(a){return String.fromCharCode(a.charCodeAt(0)-65248)}
function e(a){var b=a.charCodeAt(0);return 1==a.length?k.charAt(b-65377):65438==a.charCodeAt(1)?m.charAt(b-65395):l.charAt(b-65418)}
function d(a){var b=a.charCodeAt(0);return 12443==a.charCodeAt(1)?p.charAt(b-12454):q.charAt(b-12495)}
function f(a){return eval('"\\u30'+a.split(",").join("\\u30")+'"')}
var k=f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"),m=f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"),l=f("D1,D4,D7,DA,DD"),p=f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"),q=f("D1__,D4__,D7__,DA__,DD"),h=/[\uFF01-\uFF5E]/g,t=RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])",
"g"),y="(["+f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB")+"]\u309b)|(["+f("CF,D2,D5,D8,DB")+"]\u309c)",r=new RegExp(y,"g");return{A:function(){return g.Fd},
D:function(){return 12},
C:function(){return{hk:a}}}});function yc(a,b,c,e,d){var f=$b?"-moz-":sb?"-ms-":rb?"-o-":ac?"-webkit-":"",k=".gstl_"+e,m=new RegExp("(\\.("+d.join("|")+")\\b)"),l=[];return{addRule:function(a,d){if(b){if(c){for(var e=a.split(","),f=[],p=0,q;q=e[p++];)q=m.test(q)?q.replace(m,k+"$1"):k+" "+q,f.push(q);a=f.join(",")}l.push(a,"{",d,"}")}},
Uf:function(){if(b&&l.length){b=!1;var c=qb("style");c.setAttribute("type","text/css");(a||jb()).appendChild(c);var d=l.join("");l=null;c.styleSheet?c.styleSheet.cssText=d:c.appendChild(document.createTextNode(d))}},
prefix:function(a,b){var c=a+(b||"");f&&(c+=b?a+f+b:f+a);return c}}}
;R.register(g.Ja,10,function(){function a(a){var b=0;a&&(k||c(),e(),a in m?b=m[a]:(Db(k,$a(a)),m[a]=b=k.offsetWidth,Db(k,"")));return b}
function b(){k||c();e();l||(Db(k,"|"),l=k.offsetHeight);return l}
function c(){k=Cb(d.cd);k.style.visibility="hidden";f.appendChild(k)}
function e(){var a=Pa();if(!q||q+3E3<a)q=a,a=Ob(k,"fontSize"),p&&a==p||(m={},l=null,p=a)}
var d,f,k,m,l,p,q;return{R:function(a){f=a.pe()||document.body},
setup:function(a){d=a},
A:function(){return g.Ja},
D:function(){return 10},
C:function(){return{Ca:a,getHeight:b}}}});function zc(a){var b;(function(){function c(b){return a[b]||e}
function e(){}
a||(a={});b={Dc:c("a"),search:c("b"),Lb:c("c"),redirect:c("d"),Db:c("e"),yb:c("f"),qc:c("g"),tc:c("h"),lc:c("i"),uc:c("j"),xb:c("k"),mc:c("l"),pc:c("m"),nf:c("n"),vc:c("o"),wc:c("p"),ub:c("q"),gd:c("r"),ce:c("s"),de:c("t"),oc:c("u"),xc:c("w"),ic:c("x"),nc:c("y"),kc:c("z"),jc:c("aa"),yc:c("ab"),ud:c("ac")}})();
return{Dc:function(){return b.Dc()},
search:function(a,e){b.search(a,e)},
Lb:function(a){b.Lb(a)},
redirect:function(a){b.redirect(a)},
Db:function(a){return b.Db(a)},
yb:function(a){b.yb(a)},
qc:function(a){b.qc(a)},
tc:function(a){b.tc(a)},
lc:function(a){b.lc(a)},
uc:function(a,e){b.uc(a,e)},
xb:function(a,e){b.xb(a,e)},
mc:function(){b.mc()},
pc:function(a){b.pc(a)},
nf:function(a){b.nf(a)},
vc:function(){b.vc()},
wc:function(){b.wc()},
ub:function(a){b.ub(a)},
gd:function(a,e){b.gd(a,e)},
ce:function(a){b.ce(a)},
de:function(){b.de()},
oc:function(){b.oc()},
nc:function(){b.nc()},
xc:function(a){b.xc(a)},
ic:function(){b.ic()},
kc:function(){b.kc()},
jc:function(){b.jc()},
yc:function(){b.yc()},
ud:function(a,e){return b.ud(a,e)}}}
;R.register(g.Fa,6,function(){function a(a,b,c,e){var f=a.getId(),k=a.ca();B.he||d();b=q+h+t+"?"+(y?y+"&":"")+(b?b+"&":"");var l=Xa;a=[];l("q",k,a,!0);B.pf||l("callback","google.sbox.p"+p,a);if(r){for(var k="",n=4+Math.floor(32*Math.random()),D=0,u;D<n;++D)u=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),k+=String.fromCharCode(u);l("gs_gbg",k,a)}l=qb("script");l.src=b+a.join("&");l.charset="utf-8";v[f]=l;x=B.he?e:c;m.appendChild(l);return!0}
function b(){return 0}
function c(){return 0}
function e(a){var b=v[a];b&&(m.removeChild(b),delete v[a])}
function d(){for(var a in v)m.removeChild(v[a]);v={};x=null}
function f(a){x&&x(a)}
function k(a){a||(a=Sa);var b=window.google;B.pf?b.ac.h=a:b.sbox["p"+p]=a}
var m=jb(),l,p,q,h,t,y,r,B,v={},x,w={G:function(a){l=a.get(g.ja,w);p=a.Ta().getId()},
F:function(a){B=a;0==a.connectionType&&(a=l.Cg(),q=a.protocol,h=a.host,t=a.nd,y=a.Ei,r="https:"==document.location.protocol,k(f),(new Image).src=q+h+"/generate_204")},
A:function(){return g.Fa},
D:function(){return 6},
C:function(){return{wi:a,ig:e,tb:Sa,ne:b,oe:c}},
O:function(){k(null);d()}};
return w});R.register(g.Ga,1,function(){function a(a){if(!m)return!0;for(var b=!1,c=!1,f=0,k;f<a.length;++f)if(k=a.charAt(f),!e.test(k)&&(d.test(k)?c=!0:b=!0,c&&b))return!0;return!1}
function b(a,b,c){if(!m)return!0;var d=f.test(c),h=k.test(b);return"ltr"==a?d||h||e.test(c)||e.test(b):!d||!h}
function c(a){var b=l;m&&(d.test(a)?b="ltr":e.test(a)||(b="rtl"));return b}
var e=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),d=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),f=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
k=RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),m=d.test("x"),l;return{R:function(a){l=a.Ra()},
A:function(){return g.Ga},
D:function(){return 1},
C:function(){return{vh:a,Oh:b,Fc:c}}}});R.register(g.U,2,function(){function a(a,b,c,d,e){var h=q(a);h||(h={},r.push({element:a,ph:h}));var f=h[b];f||(f=h[b]=[],h=a.Bf?window:Yb(a),h=p(b,h,f),Qa(b)?a.addEventListener?a.addEventListener(b,h,!1):a["on"+b]=h:a[b]=h);f.push({Mh:!!e,fd:!1,priority:d||0,process:c});f.sort(t);c.og=b}
function b(a,b){var c=q(a);if(c&&(c=c[b.og]))for(var d=0,e;e=c[d++];)if(e.process==b){e.fd=!0;break}}
function c(b,c,d,e){a(B,b,c,d,e)}
function e(a){b(B,a)}
function d(a,b){var c=b||{},d=B[a];d&&d(c,c.eb)}
function f(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function k(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)}
function m(a){y?(v||(v=[],f(window,"message",l)),v.push(a),a=window.location.href,window.postMessage("sbox.df",/HTTPS?:\/\//i.test(a)?a:"*")):window.setTimeout(a,0)}
function l(a){v&&a&&a.source==window&&"sbox.df"==a.data&&v.length&&(v.shift()(),v&&v.length&&window.postMessage("sbox.df",window.location.href))}
function p(a,b,c){return function(d,e){if(c.length){var f;if(!(f=d)){f={};var k=b.event;k&&(k.keyCode&&(f.keyCode=k.keyCode),f.Lh=!0)}f.eb=e||a;for(var k=f,m,l,p=0,n;n=c[p++];)n.fd?l=!0:m||(n.Mh?h(n,k):m=n.process(k));if(l)for(p=0;n=c[p];)n.fd?c.splice(p,1):++p;if(f.Ib)return delete f.Ib,f.Lh&&(f=b.event||f),Lb(f),f.returnValue=!1}}}
function q(a){for(var b=0,c;b<r.length;++b)if(c=r[b],c.element==a)return c.ph;return null}
function h(a,b){m(function(){a.process(b)})}
function t(a,b){return b.priority-a.priority}
var y=window.postMessage&&!(sb||bc||rb),r=[],B={Bf:1},v;return{A:function(){return g.U},
D:function(){return 2},
C:function(){return{T:a,zd:b,Ya:c,Ek:e,L:d,Kb:f,Dk:k,defer:m}},
O:function(){v=null}}});R.register(g.Ia,495,function(){function a(a){m[a.getId()]=!0}
function b(a){var b=a.ha(),c=b.getId();c in m&&(b=b.Rc(),b=Pa()-b,p+=b,++l,a.H().getString("e")&&++q,delete m[c])}
function c(){var a=0,b;for(b in m)a++;return a}
function e(){return l}
function d(){return p}
function f(a){var b=!1;a&&(b=a.H().getString("e"));a=0;b?(a|=1,1<q&&(a|=2)):0<q&&(a|=2);return a}
function k(){m={};q=p=l=0}
var m,l,p,q;return{F:function(){k()},
A:function(){return g.Ia},
D:function(){return 495},
C:function(){return{Tf:a,Yh:b,xg:c,Sg:e,Yg:d,Gg:f,reset:k}}}});R.register(g.fa,375,function(){function a(a){d[a]=!0;f=a}
function b(){var a=[],b;for(b in d)a.push(parseInt(b,10));return a}
function c(){return f}
function e(){d={};f=null}
var d,f;return{F:function(){e()},
A:function(){return g.fa},
D:function(){return 375},
C:function(){return{add:a,dh:b,Ng:c,reset:e}}}});R.register(g.ga,9,function(){function a(a){var b=p.da();var c=[];c[27]=23;c[0]=e(B.clientName);c[28]=e(B.requestIdentifier);c[1]=void 0==a?"":a+"";c[26]=q.dh().join("j");a="";t.Vc()?a="o":y.Wa()&&(a=y.ze()+"");c[2]=a;a="";var f=y.X();if(f){for(var n,u=0,H=0,P;P=f[H++];){var N=P;P=N.A()+"";N=N.Qc();N.length&&(P+="i"+N.join("i"));P!=n&&(1<u&&(a+="l"+u),a+=(n?"j":"")+P,u=0,n=P);++u}1<u&&(a+="l"+u)}c[3]=a;c[4]=Math.max(p.Hg()-x,0);c[5]=Math.max(p.Lg()-x,0);c[6]=v;c[7]=Pa()-x;c[18]=Math.max(p.Mg()-x,0);
c[8]=l.Tg();if(n=l.zg())c[25]=n.Sh?"1"+(B.kg?"a":"")+(B.fe?"c":""):"",c[10]=n.Kh;c[11]=l.Hc();c[12]=l.Ig();if(n=l.Dg())c[9]=n.li,c[22]=n.ii,c[17]=n.ni;c[13]=l.Qg();c[14]=l.Og();c[15]=l.Zg();c[16]=l.Ag();c[30]=h.xg();c[31]=h.Sg();c[32]=h.Yg();c[19]=e(B.vd);n=t.ka();n=h.Gg(n);c[20]=0==n?"":n+"";for(n=0;a=r[n++];)f=a.Ba(),k[f]&&(c[f]=void 0==c[f]?e(a.Qj()):"");c=c.join(".").replace(d,"");m&&w?(n=b+c,a=m.decode(w),n=m.Wg(n,a),n=n.slice(0,8),n=m.encode(n)):n="";return{oq:b,gs_l:c+"."+n}}
function b(){x=Pa();++v;p.Ea();q.reset();l.Ea();for(var a=0,b;b=r[a++];)b.reset()}
function c(a){w=a}
function e(a){return a?a.replace(f,"-"):""}
var d=/\.+$/,f=/\./g,k=Ma(mc),m,l,p,q,h,t,y,r,B,v=-1,x,w,u={G:function(a){m=a.get(g.Vb,u);l=a.get(g.V,u);p=a.get(g.J,u);q=a.get(g.fa,u);h=a.get(g.Ia,u);t=a.get(g.Z,u);y=a.get(g.S,u);r=a.P(g.Kd,u);Tb(a.P(g.RENDERER,u))},
setup:function(a){w=a.Xh},
F:function(a){B=a;b()},
A:function(){return g.ga},
D:function(){return 9},
C:function(){return{H:a,reset:b,Ai:c}}};
return u});R.register(g.ia,11,function(){function a(a,b){if(y){for(var c=!1,d=0,e;e=y[d++];)2==e.Nc(a,b)&&(c=!0);if(c)return}if(Za(a)||n.ya||l&&l.ya())kb(b)?u&&!w&&(w=Hb(u,"btnI","1")):w&&(u.removeChild(w),w=null),k(b),x.search(a,b),f(),p.L(14,{query:a})}
function b(a){k();x.Lb(a);f()}
function c(a){k();x.redirect(a);f()}
function e(a){k(1);x.ub(a);f()}
function d(a){return x.Db(a)}
function f(){q.Yc();q.eg();t.reset();B?B.clear():r.clear();h.da()!=h.la()&&h.fg();v&&v.clear()}
function k(a){m&&n.ee&&m.od(a)}
var m,l,p,q,h,t,y,r,B,v,x,w,u,n,z={R:function(a){u=a.pe()},
G:function(a){m=a.get(g.gb,z);l=a.get(g.qa,z);p=a.get(g.U,z);q=a.get(g.V,z);h=a.get(g.J,z);t=a.get(g.ga,z);r=a.get(g.S,z);B=a.get(g.Qd,z);v=a.get(g.Ma,z);x=a.Aa();y=a.P(g.Od,z)},
F:function(a){n=a},
A:function(){return g.ia},
D:function(){return 11},
C:function(){return{search:a,Lb:b,redirect:c,ub:e,Db:d}}};
return z});R.register(g.va,14,function(){function a(a){return(a[d.kb]||{}).j}
function b(a){return a[d.Id]}
function c(a,b){var c=a[d.Id],h=a[d.Of];b||(b=tc(c,Ya(c.length)));var q={},v=a[d.kb];if(v)for(var t in v){var w=v[t];t in p&&(w=p[t].parse(w));q[t]=w}var v=b,u=!1,n=!1;t=!1;for(var w=0,z;z=h[w++];)if(33==(z[f.Rd]||0)?n=!0:u=!0,n&&u){t=!0;break}u=0;n=[];for(w=0;z=h[w++];){var D=z[f.Rd]||0;if(k[D]&&(!t||33!=D)){var O=z[f.Nf];l&&(O=m.bold(c.toLowerCase(),cb(ab(O))));n.push(wc(O,cb(ab(O)),u++,D,z[f.Mf]||[],e(z)))}}return uc(v,n,xc(q),!1,!0,!1)}
function e(a){return(a=a[f.kb])?xc(a):vc}
var d=lc,f=hc,k,m,l,p={},q={G:function(a){m=a.get(g.hb,q);if(a=a.P(g.cc,q))for(var b=0,c;c=a[b++];)p[c.Mj()]=c},
F:function(a){k=a.Rb;l=a.Uc},
A:function(){return g.va},
D:function(){return 14},
C:function(){return{ci:a,jk:b,kd:c}}};
return q});R.register(g.ob,15,function(){function a(a){var c=b(a);if(c){if(k)for(var d=0,h;h=k[d++];)a=h.edit(a);m.xi(a);d=a;h=d.ha().ca();var q=d.X();if(l.isEnabled())if(q.length){var v=0==d.A();l.rd(h,q,v)&&f.Yh(d)}else l.clear();e.L(3,{input:h,Gi:q})}p.uc(a,c);return c}
function b(a){var b=d.la(),c=m.ka(),b=b.toLowerCase(),e=a.ca().toLowerCase();b==e?c=!0:(b=Va(b),a=(e=a.ha())?e.ma():Va(a.ca().toLowerCase()),c=c?c.ha().ma():"",c=0==b.indexOf(a)?0==b.indexOf(c)?a.length>=c.length:!0:!1);return c}
function c(a,b){return a.W()-b.W()}
var e,d,f,k,m,l,p,q={G:function(a){e=a.get(g.U,q);d=a.get(g.J,q);f=a.get(g.Ia,q);k=a.P(g.Nd,q);m=a.get(g.Z,q);l=a.get(g.S,q);p=a.Aa();k.sort(c)},
A:function(){return g.ob},
D:function(){return 15},
C:function(){return{process:a,Jb:b}}};
return q});R.register(g.V,13,function(){function a(a,b){if(!(!aa||Z||P&&P.pj())){a.pd("ds",ga.Zd);a.pd("pq",na);a.qg();var c=!0,d=a.te();d>J&&(J=d);++A;V.Tf(a);var d=Pa(),e;for(e in ka)2500<d-ka[e].Rc()&&z(e);W&&(e=H.get(a))&&((c=I||a.Ph())&&ga.Fh&&a.Gh(),T.process(e),e.Me()&&++fa,F=null);c&&(F=a,C&&!b||n())}}
function b(){return 10<=S||3<=N.oe()?!0:!1}
function c(){Y=J}
function e(){return J<=Y}
function d(){F=null}
function f(){return A}
function k(){return{Sh:W,Kh:W?H.yg():0}}
function m(){return W?H.Hc():0}
function l(){return fa}
function p(){return{li:oa,ii:ha,ni:ua}}
function q(){return Aa}
function h(){return pa}
function t(a){a=ea.kd(a);return T.Jb(a)}
function y(){return la}
function r(){for(var a=[],b=0,c,d=0;d<=G;++d)c=ma[d],0==c?b++:(b=1==b?"0j":1<b?d+"-":"",a.push(b+c),b=0);return a.join("j")}
function B(){W&&H.Yf()}
function v(a){W&&H.Zf(a)}
function x(){W&&H.Ea();la=pa=Aa=ua=ha=oa=fa=S=A=0;ma=[];for(var a=0;a<=G;++a)ma[a]=0}
function w(a){na=a}
function u(a){return function(b){D(b,a)}}
function n(){null!=C&&(ib(C),C=null);if(!(2<N.oe())&&F){var a=[],b=F.H();if(b)for(var c in b)Xa(c,b[c],a);E.mc();a=N.wi(F,a.join("&"),u(F),D);F.Oe()||(++oa,a?(a=F,ka[a.getId()]=a,++S):++ha);F=null;a=100;b=(S-2)/2;for(c=1;c++<=b;)a*=2;a<X&&(a=X);C=window.setTimeout(n,a)}}
function z(a){N.ig(a);delete ka[a];S&&--S}
function D(a,b){if(aa){if(!b){var c=ea.ci(a);b=ka[c];if(!b)return}if(!b.Oe()){c=ea.kd(a,b);if(ba)var d=K.la(),c=ba.rk(c,d);W&&H.put(c);b.te()<=Y||(++ua,T.process(c)||++Aa,d=b,X=c.H().xe("d"),d&&(z(d.getId()),d=d.Rc(),d=Pa()-d,la+=d,pa=Math.max(d,pa),++ma[d>Q?G:O[Math.floor(d/100)]]));c&&(c=c.H().getString("q"))&&U.Ai(c)}}}
var O=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],G=O[O.length-1]+1,Q=100*O.length-1,H,P,N,K,U,V,ea,T,ba,M,E,aa=!1,F,J=-1,ka,A,S,fa,oa,ha,ua,Aa,pa,la,ma,X,C,I,Z,Y,W,ga,na,ca={G:function(a){H=a.get(g.mb,ca);P=a.get(g.qa,ca);a.get(g.U,ca);K=a.get(g.J,ca);U=a.get(g.ga,ca);V=a.get(g.Ia,ca);ea=a.get(g.va,ca);T=a.get(g.ob,ca);ba=a.get(g.Hf,ca);a.get(g.Z,ca);M=a.get(g.ja,ca);a.get(g.S,ca);E=a.Aa()},
F:function(a){N=M.Bg();ga=a;aa=!0;ka={};X=0;I=a.vg;Z=a.Je;Y=-1;W=ga.lg&&!!H;na=a.Ue},
A:function(){return g.V},
D:function(){return 13},
C:function(){return{ie:a,Vc:b,Yc:c,Ne:e,eg:d,Tg:f,zg:k,Hc:m,Ig:l,Dg:p,Qg:q,Og:h,Jb:t,Zg:y,Ag:r,tb:B,cg:v,Ea:x,jf:w}},
O:function(){aa=!1;null!=C&&(ib(C),C=null);ka=F=null;c()}};
return ca});R.register(g.Z,5,function(){function a(){return d.Vc()}
function b(a){f=a}
function c(){return f}
function e(){f=null}
var d,f,k={G:function(a){d=a.get(g.V,k)},
F:function(){f=null},
A:function(){return g.Z},
D:function(){return 5},
C:function(){return{Vc:a,xi:b,ka:c,tj:e}}};
return k});R.register(g.ja,16,function(){function a(){return d}
function b(){return f}
function c(){d&&d.tb()}
var e={},d,f,k={G:function(a){a=a.P(g.Fa,k);for(var b=0,c;c=a[b++];)e[c.ne()]=c},
F:function(a){var b="https:"==document.location.protocol,c=Xa,k=[];c("client",a.clientName,k);c("hl",a.Hb,k);c("gl",a.lf,k);c("sugexp",a.vd,k);c("gs_rn",23,k);c("gs_ri",a.requestIdentifier,k);a.authuser&&c("authuser",a.authuser,k);f={protocol:"http"+(b?"s":"")+"://",host:a.Ze||"clients1."+a.fc,nd:a.nd||"/complete/search",Ei:k.length?k.join("&"):""};d&&d.ne()==a.connectionType||(d=e[a.connectionType])},
A:function(){return g.ja},
D:function(){return 16},
C:function(d){return{Bg:d==g.V?a:Sa,Cg:b,dg:c}}};
return k});R.register(g.ea,7,function(){function a(a){l.Pb(a)}
function b(){return p}
function c(a){if(a in q){if(h){if(a==h.Mc())return;f();h.De()}h=q[a];l.Qb(h)}}
function e(){return p?l.getHeight():0}
function d(){p||(l.show(k()),p=!0)}
function f(){p&&(l.Xa(),p=!1)}
function k(){var a=nb(m);h.Ud(a);return a}
var m={rh:!1,horizontalAlignment:"left",Le:!0,za:null,marginWidth:0},l,p,q={},h,t={G:function(a){l=a.get(g.Ha,t);if(a=a.P(g.ib,t))for(var b=0,c;c=a[b++];)q[c.Mc()]=c},
F:function(){p=!1},
A:function(){return g.ea},
D:function(){return 7},
C:function(){return{isVisible:b,Qb:c,getHeight:e,show:d,Xa:f,Pb:a}},
O:function(){f()}};
return t});R.register(g.J,3,function(){function a(){var a={};W.L(13,a);!a.cancel&&Ba.Ie&&W.defer(L.dismiss);xa.nc()}
function b(){W.L(12);xa.oc()}
function c(){ha("rtl")}
function e(){ha("ltr")}
function d(){L.pi()}
function f(a){L.na()?L.oi():L.vb(a)}
function k(){if(0==Ba.Sb)return!1;if(4==Ba.Sb)return xa.yc(),!1;var a=ua();if(a)switch(Ba.Sb){case 1:if(Aa(a,!0))return na.add(C.pb),!0;break;case 3:return L.Va(a)}return!1}
function m(){Ba.si?ka(5):(L.isVisible()?L.dismiss():B(),D())}
function l(a){da&&a.Ae()==da.length&&(Ia&&Ia.clear(),Ba.ri&&ka(2),xa.lc(da))}
function p(a){Z&&0==a.Cb()&&Z.ui()}
function q(a,b,c,d){Ba.ng&&!a&&L.hf(!0);Ba.hg&&!L.isVisible()&&"mousedown"==c&&L.vb(b);var e;fb&&fb.isReusable(a,b,c)?e=fb:fb=e=tc(a,b,c);var f=b=!1;if(a!=da||"onremovechip"==c)gb(c,"key")?na.add(C.Cf):"paste"==c&&na.add(C.Ef),b=!0,ma(a),W.L(1,{eb:c,za:Ja}),xa.yb(a),f=Pa(),wb||(wb=f),Vb=f,Za(a)&&(d=!0),f=!0;a=X.DONT_CARE;var k=e.ke(),h=ta.ka();if(wa)for(var l=0,m;m=wa[l++];)m=m.Nc(k,h),m>a&&(a=m);switch(a){case X.xf:d=!0;break;case X.Pf:d=!1}d?(b&&L.Ci(),xb&&e.setParameter("gs_is",1),xa.pc(xb),ga.ie(e),
fb=null):f&&(L.clear(),ga.Yc());W.L(2,{eb:c})}
function h(a){(xb=a)&&na.add(C.Af)}
function t(a){Wb!=a&&((Wb=a)?xa.kc():xa.jc())}
function y(a){pa(a)}
function r(){I.focus()}
function B(){I.blur()}
function v(){return I.ed()}
function x(a,b,c){gb(a,da,!0)&&(a=da+a.substr(da.length));c=c||Ya(a.length);q(a,c,"",b);pa(a,!0)}
function w(a){x(a,!0);Xb=Pa();na.add(C.Ff)}
function u(){q(da,N(),"onremovechip")}
function n(a){ma(a);I.refresh();W.L(4,{za:Ja,input:a})}
function z(){I.select()}
function D(){da!=Ka&&ma(Ka);W.L(5,{input:Ka,Gi:L.X(),za:Ja});I.refresh();xa.tc(Ka)}
function O(){Ka=da}
function G(){return I.me()}
function Q(){return Ka}
function H(){return da}
function P(){return Ja}
function N(){return I.Qa()}
function K(){return I.Lc()}
function U(){return I.getHeight()}
function V(){return I.Ca()}
function ea(){return I.se()}
function T(){return wb}
function ba(){return Vb}
function M(){return Xb}
function E(){return 0!=Mc}
function aa(){if(eb){if(Ba.Wc)return!0;for(var a=0,b;b=La[a++];)if(b.isEnabled())return!0}return!1}
function F(a){if(a==da)return!0;var b=da.length;return a.substr(0,b)==da?Y.Oh(Ja,da,a.substr(b)):!1}
function J(){I.ld()}
function ka(a){ca.search(da,a)}
function A(a){da&&(ma(""),I.clear(),W.L(1),L.clear(),xa.yb(da));a&&xa.ic()}
function S(){Xb=Vb=wb=0}
function fa(a){I.gf(a)}
function oa(){var a=ua();a&&Aa(a)}
function ha(a){var b=N().Cb();Ja==a?L.na()&&b==da.length&&(L.Wa()?Ba.Ab&&(a=L.Ua(),ca.search(a.N(),6)):Ba.Qe&&k()):Z&&0==b&&Z.ui()}
function ua(){if(L.na()){var a=L.Wa()?L.Ua():L.Gc();if(a.Ic())return a}return null}
function Aa(a,b){var c=a.N();return hb(Ka,c)?!1:(O(),b?x(c,!0):n(c),!0)}
function pa(a,b){da=a||"";la();I.refresh();b||(W.L(4,{za:Ja,input:da}),xa.qc(da))}
function la(){var a=Y.Fc(da);a!=Ja&&(I.qd(a),Ja=a)}
function ma(a){da=Ka=a||"";la()}
var X=kc,C=jc,I,Z,Y,W,ga,na,ca,wa,ta,L,Ia,eb,La,xa,Ka,da,Ja,Mc,wb,Vb,Xb,xb,Wb,fb,Ba,ya={G:function(a){I=a.get(g.ta,ya);Z=a.get(g.qa,ya);Y=a.get(g.Ga,ya);W=a.get(g.U,ya);ga=a.get(g.V,ya);na=a.get(g.fa,ya);ca=a.get(g.ia,ya);wa=a.P(g.Ka,ya);ta=a.get(g.Z,ya);L=a.get(g.S,ya);Ia=a.get(g.Ma,ya);eb=a.get(g.xa,ya);La=a.P(g.wa,ya);xa=a.Aa();Mc=a.Ta().Kc()},
setup:function(a){Ba=a;wa.sort(lb);da=Ka=I.Kg()||""},
F:function(a){Ba=a;Wb=xb=!1;la()},
A:function(){return g.J},
D:function(){return 3},
C:function(){return{Ce:a,jh:b,lh:c,mh:e,oh:d,hh:f,Va:k,ih:m,gh:l,eh:p,kh:q,zi:h,ff:t,Ob:y,je:r,ec:B,Rh:v,kf:x,Rj:w,Sj:u,jd:n,ef:z,df:D,fg:O,me:G,da:Q,la:H,Fc:P,Qa:N,Lc:K,getHeight:U,Ca:V,se:ea,Hg:T,Lg:ba,Mg:M,uh:E,Xc:aa,dk:F,ld:J,search:ka,clear:A,Ea:S,gf:fa,Td:oa}}};
return ya});R.register(g.S,17,function(){function a(a){a.za=wa;a.marginWidth=ca;var b=ta.Hi;b||(b="rtl"==wa?"right":"left");a.horizontalAlignment=b}
function b(a,b,d){var e=!1;a=pa&&pa.bk(b);D();(X=b)&&b.length&&(e=b[0].N(),ka.vh(e)&&(e=fa.da()),wa=ka.Fc(e),d?(Z=F.Df,e=J.ki(b,wa),b=b[0].H().getString("a"),b=ab(b),ca=oa.Ca(b)):(Z=F.Ed,e=J.Y(T(),wa),ca=0),a&&(I=pa.Oj(),c(pa.Gj())),e?n():D());return e}
function c(a){aa();if(C!=a){var b=C;C=a;E(b)}}
function e(){if(x())if(Y){var a=C;C==X.length-1?I=C=null:null==C?C=0:++C;I=C;M(a,e)}else n()}
function d(){if(x())if(Y){var a=C;X&&0!=C?null==C?C=X.length-1:--C:I=C=null;I=C;M(a,d)}else n()}
function f(a){var b=a?4:3;w()?(a=B(),J.Fb(a)||fa.search(b),b=fa.da(),ma.xb(b,a)):fa.search(b)}
function k(a){return J.Va(a)}
function m(a){I=C=a;a=X[a];var b=fa.da();ma.xb(b,a)}
function l(){return Y}
function p(){return W}
function q(a){W&&!a&&D();W=a}
function h(){return Z}
function t(){return X}
function y(){return x()?X[0]:null}
function r(){return C}
function B(){return null!=I?X[I]:null}
function v(){return I}
function x(){return!(!X||!X.length)}
function w(){return null!=I}
function u(){Y&&!ga&&(ga=window.setTimeout(D,ta.Ch))}
function n(){Y||(A.Qb(17),A.show(),Y=!0,ma.vc())}
function z(){Y&&(ga&&(ib(ga),ga=null),A.Xa(),Y=!1,ma.wc())}
function D(){z();X=null;Z=F.EMPTY;null!=C&&J.Tb(C);I=C=null;J.clear()}
function O(){S.Yc();z()}
function G(){null!=C&&J.Tb(C);I=C=null}
function Q(){aa();na=window.setTimeout(G,0)}
function H(){aa()}
function P(a){if(x())n();else{var b=fa.da();if(b){a=a||fa.Qa();b=tc(b,a);if(ua){a=b.ke();for(var c=Aa.ka(),d=0,e;e=ua[d++];)e.Nc(a,c)}S.ie(b)}}}
function N(){return J.M()}
function K(){return J.Eb()}
function U(){Y=!1}
function V(){J.Za()}
function ea(){return 17}
function T(){if(x()&&Z==F.Ed){for(var a=[],b=[],c=0,d;(d=ha[c++])&&!d.Jj(fa.da(),X,b););(c=b?b.length:0)&&(c-=ba(b,a,0));for(d=0;d<X.length;++d)a.push(X[d]);c&&(c-=ba(b,a,1));ta.xh&&a.push(1);c&&ba(b,a,2);ta.Ge&&a.push(2);la&&la.nj(a);return a}return null}
function ba(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(b.push(f),++d);return d}
function M(a,b){if(null==C||J.isSelectable(C))if(E(a),null==C)fa.df();else{var c=J.zc(X[C]);fa.Ob(c);ma.xc(c)}else J.Tb(a),b()}
function E(a){aa();null!=a&&J.Tb(a);null!=C&&J.Dh(C)}
function aa(){na&&(ib(na),na=null)}
var F=ic,J,ka,A,S,fa,oa,ha,ua,Aa,pa,la,ma,X,C,I,Z,Y,W,ga,na,ca,wa,ta,L={G:function(a){J=a.get(g.La,L);ka=a.get(g.Ga,L);A=a.get(g.ea,L);S=a.get(g.V,L);fa=a.get(g.J,L);oa=a.get(g.Ja,L);ha=a.P(g.Yb,L);ua=a.P(g.Ka,L);Aa=a.get(g.Z,L);pa=a.get(g.If,L);la=a.get(g.Jf,L);ma=a.Aa()},
setup:function(){ua.sort(lb);ha.sort(mb)},
F:function(a){ta=a;I=C=null;Z=F.EMPTY;Y=!1;W=!0;wa="";ca=0},
A:function(){return g.S},
D:function(){return 17},
C:function(){return{rd:b,yi:c,oi:e,pi:d,Fb:f,Va:k,fh:m,isVisible:l,isEnabled:p,hf:q,Pg:h,X:t,Gc:y,Jg:r,Ua:B,ze:v,na:x,Wa:w,Ci:u,show:n,Xa:z,clear:D,dismiss:O,cf:G,mi:Q,lj:H,vb:P}},
Pa:function(){var b={Ud:a,M:N,Eb:K,De:U,Za:V,Mc:ea};return[{R:Sa,G:Sa,setup:Sa,F:Sa,A:function(){return g.ib},
D:function(){return 17},
C:function(){return b},
Pa:Sa,O:Sa}]},
O:function(){ga&&(ib(ga),ga=null);X=null;z()}};
return L});R.register(g.Ha,8,function(){function a(a){a!=z&&(z=a,a=a.M(),D?a!=D&&u.replaceChild(a,D):u.appendChild(a),D=a)}
function b(){n||(n=u?Math.max(u.offsetHeight,0):0);return n}
function c(a){u.className=a.rh?"gssb_e gsdd_a":"gssb_e";var b=a.za||P;B!=b&&(B=b,Gb(r,b));b=a.marginWidth;if(w!=b){var c=x.style;b?(v.hasChildNodes()||v.appendChild(x),c.width=b+"px",$b&&(c.paddingLeft="1px")):(v.hasChildNodes()&&v.removeChild(x),c.paddingLeft="");w=b}K=a.Le;U=a.horizontalAlignment;l(O,!0);l(H,!0);h.L(16);d()}
function e(){n=0;l(O,!1);l(H,!1);var a=P;B!=a&&(B=a,Gb(r,a));h.L(11)}
function d(){n=0;k();if(H){var a=t.Vd[0],c=H.style;"relative"!=t.Oa&&(c.top=r.style.top,c.left=r.offsetLeft+v.offsetWidth+"px");a=b()+a;H.style.height=Math.max(a,0)+"px";m(H,u.offsetWidth)}z&&z.Za()}
function f(a){if(G)Q!=a&&G.replaceChild(a,Q);else{var b=r.insertRow(-1);b.style.height="0";b.insertCell(-1);G=b.insertCell(-1);p.isVisible()||(l(u,!1),l(r,!0),d());O=u;G.appendChild(a)}Q=a}
function k(){var a,b;var c=(a=z&&z.Eb())?a.offsetWidth:q.Ca();(b=N)?Qa(b)&&(b=null):w||!K?(u.style.width="",r.style.width=""):(u.style.width="100%",b=c+t.wb[2],m(r,b));if("relative"!=t.Oa){var d=q.Lc();a&&(d.oa=vb(a).oa);a=t.wb;var e=a[1];a=a[0];a=d.yd+q.getHeight()+a;"right"==U?(b=Yb(r),c=Qb(b)-(d.oa-e+c),b=void 0):(d=d.oa+e,"center"==U&&b&&(d+=(c-b)/2),b=d,c=void 0);e={oa:0,yd:0};"absolute"==t.Oa&&t.Na&&t.Na!=document.body&&(e=vb(t.Na));d=r.style;d.top=a-e.yd+"px";d.left=d.right="";void 0!=b?d.left=
b-e.oa+"px":d.right=c+e.oa+"px"}ob&&(d.zoom="normal",d.zoom=1)}
function m(a,b){Ra(b)?0<b&&(a.style.width=b+"px"):a.style.width=b}
function l(a,b){a&&(a.style.display=b?"":"none")}
var p,q,h,t,y,r,B,v,x,w,u,n,z,D,O,G,Q,H,P,N,K=!0,U,V={R:function(a,b){P=a.Ra();b.addRule(".gssb_c","border:0;position:absolute;z-index:989");b.addRule(".gssb_e","border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".gssb_f","visibility:hidden;white-space:nowrap");b.addRule(".gssb_k","border:0;display:block;position:absolute;top:0;z-index:988");b.addRule(".gsdd_a","border:none!important")},
G:function(a){p=a.get(g.ea,V);q=a.get(g.J,V);h=a.get(g.U,V);y=a.Ta().getId()},
setup:function(a){t=a;r=Ab();r.className="gstl_"+y+" gssb_c";l(r,!1);O=r;var b=r.insertRow(-1);v=b.insertCell(-1);v.className="gssb_f";x=Bb();u=b.insertCell(-1);u.className="gssb_e";u.style.width="100%";t.Ee&&(H=qb("iframe","gstl_"+y+" gssb_k"),l(H,!1),(t.Na||document.body).appendChild(H));if(N=t.jg)Ra(N)&&(N+=t.wb[2]),m(r,N);k();(a.Na||document.body).appendChild(r);h.Ya(8,d)},
F:function(a){t=a;r.style.position=a.Oa},
A:function(){return g.Ha},
D:function(){return 8},
C:function(){return{Qb:a,getHeight:b,Pb:f,show:c,Xa:e,Za:d}}};
return V});R.register(g.ta,4,function(){function a(a,b){ua&&(ua=!1,F.zd(A,H),F.zd(A,P));b||(b=a);A.parentNode.replaceChild(a,A);b.appendChild(A);ha&&oa.gi&&(sb||$b?F.defer(function(){A.focus();tb(A,la.Cb())}):A.focus());
N()}
function b(){return Z}
function c(a){var b="rtl"==a==("rtl"==wa);A.dir=a;if(Y){J.qd(a);var c=C.parentNode;c.removeChild(Y);b?Mb(Y,C):c.insertBefore(Y,C)}Z&&(Z.dir=a,c=Z.parentNode,c.removeChild(Z),b?c.insertBefore(Z,C):Mb(Z,C));0!=S&&(a=Fb(a),Eb(A,a,0))}
function e(){return la}
function d(){return vb(I)}
function f(){var a=I?I.offsetHeight:0;L>a&&(a=L);return a}
function k(){return Ia?Ia:I?I.offsetWidth:0}
function m(){var a=A.offsetWidth;oa.Pe&&(a-=A.offsetHeight);return a}
function l(){return A.value}
function p(a){(oa.tg?A:C||eb||A).style.background=a||"transparent"}
function q(){X=!0}
function h(){A.select();T()}
function t(){cc&&(A.value="");A.value=E.la();cc&&(A.value=A.value);w()}
function y(){if(!ha)try{A.focus(),ha=!0,w()}catch(xa){}}
function r(){ha&&(A.blur(),ha=!1)}
function B(){return ha}
function v(){A.value=""}
function x(){var b=ta.get("gs_id");if(b)Z=ta.get("gs_ttc"),C=ta.get("gs_tti"),E.Xc()&&J&&(W=J.M(),Y=W.parentNode);else{b=Ab();b.id=ta.getId("gs_id");b.className="gstl_"+fa+" "+(oa.xd||A.className);var c=b.insertRow(-1),d=b.style,e=A.style;d.width=Ia?Ia+"px":e.width;d.height=L?L+"px":e.height;d.padding="0";Rb(A);A.className=oa.cd;ca&&(Z=c.insertCell(-1),Z.id=ta.getId("gs_ttc"),Z.style.whiteSpace="nowrap");C=c.insertCell(-1);C.id=ta.getId("gs_tti");C.className="gsib_a";E.Xc()&&J&&(W=J.M(),Y=c.insertCell(-1),
Y.className="gsib_b",Y.appendChild(W));a(b,C)}dc&&ac&&(A.style.height="1.25em",A.style.marginTop="-0.0625em");u(b);I=b}
function w(){if(ha){var a=A.value.length;la=Ya(a);tb(A,a)}}
function u(a){F.T(a,"mouseup",function(){A.focus()})}
function n(){function a(a){F.T(A,a,Q,10,b)}
F.T(A,"keydown",D);(rb||oa.Xf)&&F.T(A,"keypress",G);F.T(A,"select",T,10);var b=!1;a("mousedown");a("keyup");a("keypress");b=!0;a("mouseup");a("keydown");a("focus");a("blur");a("cut");a("paste");a("input");F.T(A,"compositionstart",z);F.T(A,"compositionend",z)}
function z(a){a=a.type;"compositionstart"==a?E.ff(!0):"compositionend"==a&&E.ff(!1)}
function D(a){var b=a.keyCode;ma=b;var c=(ac||$b)&&zb(b)&&aa.na(),d=b==M.Dd,e=b==M.Wb;ga=!1;b==M.pb&&(ga=E.Va());d&&((b=aa.Ua())&&O(b)?aa.Fb(a.shiftKey):F.defer(function(){aa.Fb(a.shiftKey)}));
if(c||d||e||ga)a.Ib=!0}
function O(a){return(a=ka[a.A()].ck)&&a()}
function G(a){var b=a.keyCode,c=b==M.Wb,d=b==M.pb&&ga;if(b==M.Dd||c||d)a.Ib=!0}
function Q(a){if(!na){var b=a.eb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=zb(a);if("keydown"==b){if(E.zi(229==a),c)break a}else{var d=a!=ma;ma=-1;if(!c||d)break a}switch(a){case M.Wb:E.ih();break;case M.sf:E.lh();break;case M.tf:E.mh();break;case M.uf:E.oh();break;case M.rf:E.hh(la);break;case M.DELETE:E.gh(la);break;case M.vf:E.eh(la)}}T();E.kh(A.value,la,b)}}
function H(){ha=!0;E.jh()}
function P(){ha=!1;E.Ce()}
function N(){ua||(ua=!0,F.T(A,"focus",H,99),F.T(A,"blur",P,99))}
function K(){pa||(pa=window.setInterval(V,oa.di||50))}
function U(){pa&&(ib(pa),pa=null)}
function V(){Q({eb:"polling"})}
function ea(){$b&&Jb(A)}
function T(){if(ha){var a=ub(A);a&&(la=a)}}
function ba(){var a;F.Kb(window,"pagehide",function(){na=!0;a=A.value});
F.Kb(window,"pageshow",function(b){na=!1;(b.persisted||void 0!==a)&&E.jd(a)})}
var M=rc,E,aa,F,J,ka,A,S,fa,oa,ha,ua=!1,Aa,pa,la=Ya(0),ma=-1,X=!1,C,I,Z,Y,W,ga,na,ca,wa,ta,L,Ia,eb,La={R:function(a,b){ta=a;A=a.re();wa=a.Ra();a.rb()||(b.addRule(".gsib_a","width:100%;padding:4px 6px 0"),b.addRule(".gsib_a,.gsib_b","vertical-align:top"))},
G:function(a){E=a.get(g.J,La);F=a.get(g.U,La);aa=a.get(g.S,La);J=a.get(g.xa,La);ka=Tb(a.P(g.RENDERER,La));a=a.Ta();S=a.Kc();fa=a.getId()},
setup:function(a){oa=a;L=a.Zc;Ia=a.Jh;ha=yb(A);T();sb&&F.T(A,"beforedeactivate",function(a){X&&(X=!1,a.Ib=!0)},10);
$b&&ba();I=A;ca=!!a.zb[g.qa];(E.uh()||E.Xc()||ca||a.wg)&&x();a.ge&&(F.T(A,"blur",U,10),F.T(A,"focus",K,10),Aa=!0);F.Ya(8,ea);n();N()},
F:function(a){oa=a;var b=a.Ih;b&&(eb=ta.Bb(b));A.setAttribute("autocomplete","off");A.setAttribute("spellcheck",a.spellcheck);A.style.outline=a.Re?"":"none";Aa&&K()},
A:function(){return g.ta},
D:function(){return 4},
C:function(){return{Ak:a,me:b,qd:c,Qa:e,Lc:d,getHeight:f,Ca:k,se:m,Kg:l,gf:p,ld:q,select:h,refresh:t,focus:y,blur:r,ed:B,clear:v}},
O:function(){Aa&&U();oa.Ie&&F.zd(A,E.Ce)}};
return La});R.register(g.La,18,function(){function a(a,b){if(!T)return!1;V=b;x();for(var c=!1,d=0,e;e=a[d++];)t(e)&&(c=!0);return c}
function b(a){var b=z[a.A()];return b&&b.nh?b.nh(a):!1}
function c(a){return z[a.A()].Tc(null,a,D)}
function e(a){var b=z[a.A()];if(b&&b.zc){var c=n.da();return b.zc(a,c)}return a.N()}
function d(a,b){if(!T)return!1;V=b;x();for(var c=!1,d=0,e;e=a[d++];)if(1==e)if(M)ba.appendChild(M);else{e=r();var f=e.style;f.textAlign="center";f.whiteSpace="nowrap";e.dir=ea;f=Bb();f.style.position="relative";E=Bb();E.className="gssb_g";G.Ge&&(E.style.paddingBottom="1px");y(G.searchText,E,13);G.th?y(G.Bc,E,8):G.yh&&y(G.ti,E,14);f.appendChild(E);e.appendChild(f);M=e.parentNode}else 2==e?aa?ba.appendChild(aa):(e=r(),f=e.style,f.padding="1px 4px 2px 0",f.fontSize="11px",f.textAlign="right",f=qb("a"),
f.id="gssb_b",f.href="http://www.google.com/support/websearch/bin/answer.py?hl="+G.Hb+"&answer=106230",f.innerHTML=G.Vh,e.appendChild(f),aa=e.parentNode):3==e?(e=N.pop())?ba.appendChild(e):(e=T.insertRow(-1),e.Uh=!0,e=e.insertCell(-1),f=qb("div","gssb_l"),e.appendChild(f)):t(e)&&(c=!0);return c}
function f(a){B(a,F);var b=w.X();b&&u.L(9,{index:a,suggestion:b[a],template:K[a]})}
function k(a){B(a,"");u.L(10)}
function m(){for(var a,b,c;c=H.pop();)a=c.A(),(b=Q[a])||(b=Q[a]=[]),b.push(c),a=c.M(),a.parentNode.removeChild(a);for(;a=ba.firstChild;)a=ba.removeChild(a),a.Uh?N.push(a):a!=M&&a!=aa&&P.push(a);K=[]}
function l(a){return(a=K[a])?a.isSelectable():!1}
function p(){x()}
function q(){return T}
function h(){return G.Fe||ea==V?U:null}
function t(a){var b=a.A(),c=z[b];if(!c)return!1;var d=(b=Q[b])&&b.pop();d||(d=c.gc(D));c.Y(a,d);H.push(d);var e=d.M(),b=r();b.className="gssb_a "+G.wd;b.appendChild(e);if(void 0!==a.Ba){K.push(d);var d=V,f=a.Ba();G.Eh&&(e.onmouseover=function(){w.yi(f)},e.onmouseout=function(){w.mi()});
e.onclick=function(b){n.ec();a.Ic()&&n.Ob(a.N());w.cf();w.fh(f);b=b||Yb(e).event;c.Da(b,a,D)}}else d=ea;
Gb(b,d);return!0}
function y(a,b,c){var d=qb("input");d.type="button";d.value=ab(a);d.onclick=function(){D.search(n.la(),c)};
if(G.sh){a="lsb";var e=qb("span");var f=qb("span");e.className="ds";f.className="lsbb";e.appendChild(f);f.appendChild(d)}else a="gssb_h",e=d;d.className=a;b.appendChild(e)}
function r(){var a=P.pop();if(a)return ba.appendChild(a),a.firstChild;a=T.insertRow(-1);a=a.insertCell(-1);a.className=G.wd;a.onmousedown=v;return a}
function B(a,b){var c=K[a];c&&c.isSelectable()&&(c.M().parentNode.parentNode.className=b)}
function v(a){a=a||Yb(T).event;a.stopPropagation?a.stopPropagation():rb||sb&&n.ld();return!1}
function x(){if(E){var a=G.Wd?G.Wd:n.Ca()-3;0<a&&(E.style.width=a+"px")}}
var w,u,n,z,D,O,G,Q={},H=[],P=[],N=[],K=[],U,V,ea,T,ba,M,E,aa,F,J={R:function(a,b){O=a;ea=a.Ra();b.addRule(".gssb_a","padding:0 7px");b.addRule(".gssb_a,.gssb_a td","white-space:nowrap;overflow:hidden;line-height:22px");b.addRule("#gssb_b","font-size:11px;color:#36c;text-decoration:none");b.addRule("#gssb_b:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".gssb_g","text-align:center;padding:8px 0 7px;position:relative");b.addRule(".gssb_h","font-size:15px;height:28px;margin:0.2em"+
(ac?";-webkit-appearance:button":""));b.addRule(".gssb_i","background:#eee");b.addRule(".gss_ifl","visibility:hidden;padding-left:5px");b.addRule(".gssb_i .gss_ifl","visibility:visible");b.addRule("a.gssb_j","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule("a.gssb_j:hover","text-decoration:underline");b.addRule(".gssb_l","height:1px;background-color:#e5e5e5");b.addRule(".gssb_m","color:#000;background:#fff")},
G:function(a){w=a.get(g.S,J);u=a.get(g.U,J);n=a.get(g.J,J);D=a.get(g.ia,J);z=Tb(a.P(g.RENDERER,J))},
setup:function(a){G=a;T=Ab();a=qb("tbody");T.appendChild(a);ba=T.getElementsByTagName("tbody")[0]},
F:function(a){G=a;var b=a.md;b&&(U=O.Bb(b));T.className=a.Ii||"gssb_m";F=a.Fi||"gssb_i"},
A:function(){return g.La},
D:function(){return 18},
C:function(){return{ki:a,zc:e,Fb:c,Va:b,Y:d,Dh:f,Tb:k,clear:m,isSelectable:l,Za:p,M:q,Eb:h}}};
return J});R.register(g.gb,346,function(){function a(a){a=c.H(a);for(var d in k)d in a||(a[d]=k[d]);b(e+Ua(a))}
function b(a){var b=new Image,c=f;b.onerror=b.onload=b.onabort=function(){try{delete d[c]}catch(h){}};
d[f]=b;b.src=a;f++}
var c,e,d=[],f=0,k,m={G:function(a){c=a.get(g.ga,m)},
F:function(a){e="//"+(a.Wh||"www."+a.fc)+"/gen_204?";k=a.Di||{}},
A:function(){return g.gb},
D:function(){return 346},
C:function(){return{od:a}}};
return m});R.register(g.mb,21,function(){function a(a){m(a);var b=a.ha();if((!b||!b.Ke())&&h)for(b=0;b<h.length;++b)h[b].update(a)}
function b(a){var b=q[a.le()]||null;if(b)++t;else if(h&&!a.Ke())for(var c=0;c<h.length;++c)if(b=h[c].get(a)){m(b);++y;break}return b?uc(a,b.X(),b.H(),b.Me(),b.dd(),b.Nh()):null}
function c(){return t}
function e(){return y}
function d(){y=t=0}
function f(a){var b,c,d;for(d in q){var e=q[d];e=e.X();for(c=0;b=e[c++];)if(b.A()==a){delete q[d];break}}l()}
function k(){q={};l()}
function m(a){a&&a.dd()&&(q[a.ha().le()]=a)}
function l(){if(h)for(var a=0;a<h.length;++a)h[a].reset()}
function p(a,b){return b.W()-a.W()}
var q={},h,t,y,r={G:function(a){h=a.P(g.nb,r);h.sort(p)},
F:function(){d()},
A:function(){return g.mb},
D:function(){return 21},
C:function(){return{put:a,get:b,yg:c,Hc:e,Ea:d,Zf:f,Yf:k}}};
return r});R.register(g.fb,190,function(){function a(){q&&l.dc(m)}
function b(){q&&l.Nb(m)}
function c(){q&&p.dc(m)}
function e(){q&&p.Nb(m)}
var d,f,k,m,l,p,q=!1,h={R:function(a,b){function c(a){return"box-shadow:"+a+"-moz-box-shadow:"+a+"-webkit-box-shadow:"+a}
k=a;b.addRule(".gsfe_a","border:1px solid #b9b9b9;border-top-color:#a0a0a0;"+c("inset 0px 1px 2px rgba(0,0,0,0.1);"));b.addRule(".gsfe_b","border:1px solid #4d90fe;outline:none;"+c("inset 0px 1px 2px rgba(0,0,0,0.3);"))},
G:function(a){d=a.get(g.U,h);f=a.get(g.J,h)},
setup:function(f){var h=f.Cc;if(m=h?k.Bb(h):null)d.Ya(12,c),d.Ya(13,e),d.T(m,"mouseover",a),d.T(m,"mouseout",b),l=Ac(f.sg||"gsfe_a"),p=Ac(f.rg||"gsfe_b")},
F:function(){q=!0;m&&f.Rh()&&p.dc(m)},
A:function(){return g.fb},
D:function(){return 190},
O:function(){q=!1;m&&(l.Nb(m),p.Nb(m))}};
return h});function Ac(a){var b=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)");return{dc:function(c){c&&!b.test(c.className)&&(c.className+=" "+a)},
Nb:function(a){a&&(a.className=a.className.replace(b," "))}}}
;R.register(g.RENDERER,33,function(){function a(a){q=a.ji;h=a.Xe;t=a.We;y=a.Ac?a.Bc:""}
function b(a){return Bc(f,k,m,l,p,a,q,t)}
function c(a,b){b.Y(a.Jc(),a.N(),a.Ba(),h,y)}
function e(a,b,c){c.search(b.N(),1)}
function d(){return 35}
var f,k,m,l,p,q,h,t,y,r={R:function(a,b){b.addRule("a.gspqs_a","padding:0 3px 0 8px");b.addRule(".gspqs_b","color:#666;line-height:22px")},
G:function(a){m=a.get(g.V,r);l=a.get(g.J,r);k=a.get(g.ua,r);f=a.get(g.ja,r);p=a.get(g.S,r)},
setup:a,F:a,A:function(){return g.RENDERER},
D:function(){return 33},
C:function(){return{gc:b,Y:c,Da:e,Tc:Sa,Oc:d}}};
return r});function Bc(a,b,c,e,d,f,k,m){function l(a){n=!0;b.Ye(x,p);return Lb(a)}
function p(){n&&(c.cg(35),a.dg(),q.onmouseover=q.onmouseout=q.onclick=null,h.style.display="none",t.style.display="",d.ze()==w&&e.df(),d.Jg()==w&&(d.cf(),e.je()),u=!1)}
var q,h,t,y,r,B,v,x,w,u=!0,n=!1;(function(){q=Bb();q.className="gsq_a";var a=Ab();q.appendChild(a);h=a.insertRow(-1);var b=h.insertCell(-1);y=qb("span");y.style.color="#52188c";b.appendChild(y);if(0!=k){B=qb("a");B.href="#ps";B.className="gspqs_a gssb_j";var c=h.insertCell(-1);c.appendChild(B);(2==k?c:b).style.width="100%";t=a.insertRow(-1);v=t.insertCell(-1);v.className="gspqs_b";v.innerHTML=m;v.colSpan="2"}})();
return{M:function(){return q},
A:function(){return 35},
isSelectable:function(){return u},
Y:function(a,b,c,d,m){n=!1;u=!0;x=b;w=c;h.style.display="";y.innerHTML=a;0!=k&&(t.style.display="none",B.innerHTML=d,B.onclick=l);m&&!r&&(r=Nb(h),r.onclick=function(a){e.ec();e.Ob(x);f.search(x,9);return Lb(a)});
m?(r.innerHTML=m+" &raquo;",r.style.display=""):r&&(r.style.display="none")}}}
;R.register(g.ua,188,function(){function a(){var a={};d&&(a.tok=e);return a}
function b(a,b){c.vi(a,b)}
var c,e,d,f={G:function(a){c=a.get(g.lb,f)},
F:function(a){e=a.Ub;var b="https:"==document.location.protocol;a=!!a.Rb[35];d=!!(c&&e&&b&&a)},
A:function(){return g.ua},
D:function(){return 188},
C:function(){return{Ug:a,Ye:b}}};
return f});R.register(g.lb,186,function(){function a(a,b){p[a]=b;var h=[];Xa("delq",a,h);Xa("client",m,h);Xa("callback","google.sbox.d"+e,h);var q=d;Xa("tok",f,h);k&&Xa("authuser",k,h);l=qb("script");l.src=q+h.join("&");c.appendChild(l)}
function b(a){l&&(c.removeChild(l),l=null);a=a[0];var b=p[a];b&&(delete p[a],b())}
var c=jb(),e,d,f,k,m,l,p={},q={G:function(a){a.get(g.ua,q);e=a.Ta().getId()},
setup:function(){window.google.sbox["d"+e]=b},
F:function(a){d="https://"+(a.Ze||"clients1."+a.fc)+"/complete/deleteitems?";f=a.Ub;k=a.authuser;m=a.clientName},
A:function(){return g.lb},
D:function(){return 186},
C:function(){return{vi:a}},
O:function(){l&&(c.removeChild(l),l=null)}};
return q});R.register(g.Ka,187,function(){function a(a){var b=c.Ug(),d;for(d in b)a.setParameter(d,b[d]);return 1}
function b(){return 12}
var c,e={G:function(a){c=a.get(g.ua,e)},
A:function(){return g.Ka},
D:function(){return 187},
C:function(){return{Nc:a,W:b}}};
return e});R.register(g.nb,98,function(){function a(){return 3}
function b(a){if(d){var b=a.ha(),c=a.X();if(c.length){var e=b.ma();a:for(var b=Number.MAX_VALUE,m,l=0;m=c[l++];){if(!f[m.A()]){b=-1;break a}m=m.N();b=Math.min(m.length,b)}if(-1!=b){var p=c[0].N();if(gb(p,e,!0))for(l=e.length+1;l<=b;){e=null;for(m=0;p=c[m++];){p=p.N();if(l>p.length)return;p=p.substr(0,l);if(!e)e=p;else if(e!=p)return}k[e]=a;++l}}}}}
function c(a){if(d){var b=k[a.ma()];if(b){var c=a.we(),e=a.ma();b.ha().ma();for(var f=b.H(),p=l||!f.xe("k"),q=[],x,w,u=b.X(),n=0,z;z=u[n++];)w=z.N(),x=p?m.bold(c,w):$a(w),q.push(wc(x,w,z.Ba(),z.A(),z.Qc(),z.H()));delete k[e];return uc(a,q,f,!0,b.dd(),!1)}}return null}
function e(){k={}}
var d=!0,f,k={},m,l,p={G:function(a){m=a.get(g.hb,p)},
setup:function(){f=Ma([0])},
F:function(a){l=a.Uc;d=a.fe},
A:function(){return g.nb},
D:function(){return 98},
C:function(){return{W:a,update:b,get:c,reset:e}},
O:function(){d=!1}};
return p});R.register(g.RENDERER,31,function(){function a(){return Cc()}
function b(a,b){var c=a.H(),d=c.getString("a"),c=c.getString("b"),e=a.N();b.Y(d,c,e)}
function c(a,b,c){c.search(b.N(),1)}
function e(){return 33}
return{R:function(a,b){b.addRule(".gspr_a","padding-right:1px")},
A:function(){return g.RENDERER},
D:function(){return 31},
C:function(){return{gc:a,Y:b,Da:c,Tc:Sa,Oc:e}}}});function Cc(){var a=Bb();a.className="gspr_a";return{A:function(){return 33},
M:function(){return a},
isSelectable:function(){return!0},
Y:function(b,c){a.innerHTML=c}}}
;R.register(g.RENDERER,20,function(){function a(a){return Dc(d,a)}
function b(a,b){b.Y(a.Jc(),a.N(),f)}
function c(a,b,c){c.search(b.N(),1)}
function e(){return 0}
var d,f,k={R:function(a,b){b.addRule(".gsq_a","padding:0")},
G:function(a){d=a.get(g.J,k)},
F:function(a){f=a.Ac?a.Bc:""},
A:function(){return g.RENDERER},
D:function(){return 20},
C:function(){return{gc:a,Y:b,Da:c,Tc:Sa,Oc:e}}};
return k});function Dc(a,b){var c,e,d,f,k;(function(){c=Bb();c.className="gsq_a";var a=Ab();c.appendChild(a);e=a.insertRow(-1);a=e.insertCell(-1);a.style.width="100%";d=qb("span");a.appendChild(d)})();
return{M:function(){return c},
A:function(){return 0},
isSelectable:function(){return!0},
Y:function(c,l,p){d.innerHTML=c;k=l;p&&!f&&(f=Nb(e),f.onclick=function(c){a.ec();a.Ob(k);b.search(k,9);return Lb(c)});
p?(f.innerHTML=p+" &raquo;",f.style.display=""):f&&(f.style.display="none")}}}
;R.register(g.wa,78,function(){function a(){return B}
function b(){return 78}
function c(){return 3}
function e(){return n}
function d(){return{tooltip:r}}
function f(a){if(!D)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+u+"/"+w+"_tia.js",document.body.appendChild(a),D=!0,h.add(3);else if(v.onclick)v.onclick(a)}
function k(){t.dismiss()}
function m(){y.Bh()}
function l(a){y.Bi(78,a)}
function p(a){y.Ki(78,a)}
function q(a){n.className="gsok_a gsst_e "+a}
var h,t,y,r,B,v,x,w,u,n,z,D,O={R:function(a,b){z=a;a.rb()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))},
G:function(a){h=a.get(g.fa,O);t=a.get(g.S,O);y=a.get(g.xa,O)},
setup:function(a){B=!!a.Gb;x=a.Se;w=a.Mb;u=a.bi;r=a.Zh;(n=z.get("gs_ok"))?v=n.firstChild:(v=qb("img"),v.src=x+"/tia.png",n=qb("span","gsok_a gsst_e"),n.id=z.getId("gs_ok"),n.appendChild(v));v.ds=k;v.hd=m;v.sc=q;v.sd=l;v.td=p;v.setAttribute("tia_field_name",z.re().name);v.setAttribute("tia_disable_swap",!0)},
F:function(a){a.Wc&&(B=!!a.Gb);v.setAttribute("tia_property",a.Te)},
A:function(){return g.wa},
D:function(){return 78},
C:function(){return{isEnabled:a,Be:b,W:c,M:e,ye:d,Da:f}}};
return O});R.register(g.xa,174,function(){function a(){return 174}
function b(a){T!=a&&(Q.dir=T=a,f())}
function c(){return Q}
function e(a){(a=P[a])&&a.style&&(a.style.display="")}
function d(a){(a=P[a])&&a.style&&(a.style.display="none")}
function f(){N&&(P[N].className="gsst_a",u.Xa(),N=null)}
function k(a,b){N=a;var c=P[a];c.className="gsst_a gsst_g";var d=K.lastChild;d!=b&&(d==U?K.appendChild(b):K.replaceChild(b,d));u.Qb(174);u.show();c=c.clientWidth;U.style.width=c+"px";U.style.left="rtl"==T?"0":K.clientWidth-c+"px"}
function m(a,b){N==a?f():k(a,b)}
function l(a){a.horizontalAlignment="rtl"==T?"left":"right";a.Le=!1}
function p(){return K}
function q(){return G.Fe||ea==T?ba:null}
function h(){f()}
function t(){return 174}
function y(a,b){return b.W()-a.W()}
function r(){V!=N&&f()}
function B(){for(var a,b=0,c;c=D[b++];)if(c.isEnabled()){a=!0;var d=qb("a","gsst_a");w(d,c);d.appendChild(c.M());Q.appendChild(d)}Q.style.display=a?"":"none"}
function v(){V=null}
function x(){P={};for(var a=0,b;b=D[a++];)if(b.isEnabled()){var c=b.Be(),e=b.M().parentNode;e.onclick=b.Da;e.onmouseover=function(){V=c};
e.onmouseout=v;P[c]=e;b.ye&&(b=b.ye(),b.ek&&d(c),(b=b.tooltip)&&!O.ud(e,b)&&(e.title=b))}}
function w(a,b){a.href="javascript:void(0)";Zb(a);a.onkeydown=function(a){a=a||window.event;var c=a.keyCode;if(13==c||32==c)b.Da(a),z.je(),Lb(a)}}
var u,n,z,D,O,G,Q,H,P={},N,K,U,V,ea,T,ba,M,E={R:function(a,b){H=a;ea=a.Ra();a.rb()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e",Sb(.55)),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Sb(.72)),b.addRule(".gsst_a:active .gsst_e",Sb(1)),b.addRule(".gsst_f",
"background:white;text-align:left"),b.addRule(".gsst_g","background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"margin:-1px -3px;padding:0 6px"),b.addRule(".gsst_h","background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))},
G:function(a){u=a.get(g.ea,E);n=a.get(g.U,E);z=a.get(g.J,E);D=a.P(g.wa,E);O=a.Aa()},
setup:function(a){M=a.Wc;D.sort(y);Q=H.get("gs_st");if(!Q){Q=Bb("gsst_b");Q.id=H.getId("gs_st");if(a=a.Zc)Q.style.lineHeight=a+"px";B()}x()},
F:function(a){G=a;(a=a.md)&&(ba=H.Bb(a));if(M){a=0;for(var b;b=D[a++];){var c=!!P[b.Be()];if(b.isEnabled()!=c){for(;Q.hasChildNodes();)Q.removeChild(Q.lastChild);B();x();break}}}U=Bb("gsst_h");K=Bb("gsst_f");K.dir="ltr";K.appendChild(U);n.Ya(13,r)},
A:function(){return g.xa},
D:a,C:function(){return{qd:b,M:c,vk:e,ak:d,Bh:f,Bi:k,Ki:m}},
Pa:function(){var b={Ud:l,M:p,Eb:q,De:h,Za:Sa,Mc:t};return[{R:Sa,G:Sa,setup:Sa,F:Sa,A:function(){return g.ib},
D:a,C:function(){return b},
Pa:Sa,O:Sa}]}};
return E});ec=function(){function a(a){return 0<=b.indexOf(a)}
var b=window.navigator.userAgent,c={};window.opera?c[2]=!0:a("MSIE")||a("Trident")?c[0]=!0:a("WebKit")?(c[5]=!0,a("Chrome")?c[3]=!0:a("Android")?c[7]=!0:a("Safari")&&(c[4]=!0),a("iPad")&&(c[6]=!0)):a("Gecko")&&(c[1]=!0);return c};function Ec(){function a(a){return{api:a,install:a.a,F:a.b,O:a.c,Fj:a.d,mj:a.e,da:a.f,la:a.g,na:a.h,Wa:a.i,ue:a.j,Rg:a.k,gk:a.l,Pj:a.m,Sf:a.n,tb:a.o,zj:a.p,kf:a.q,Ej:a.r,vj:a.s,Jb:a.t,ef:a.u,focus:a.v,blur:a.w,Ne:a.x,ka:a.y,jd:a.z,ik:a.aa,Ea:a.ab,search:a.ad,lk:a.ae,uk:a.af,vb:a.ag,Ua:a.ah,Fk:a.ai,Td:a.al,isActive:a.am,hi:a.an,ya:a.ao,Fg:a.ap,Hj:a.aq,Kc:a.ar,getId:a.as,wj:a.at,rd:a.au,sk:a.av,ed:a.aw,jf:a.ax,Pb:a.ay,Qh:a.az,Pc:a.ba,pk:a.bb,Nj:a.bc,od:a.bd,Ij:a.be,gg:a.bf}}
return{Sa:function(b,c,e,d){try{var f=window.google.sbox(b,c,e,d);return a(f)}catch(k){return null}},
translate:function(b){return a(b.api||b)}}}
;var Fc=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Gc(a,b){return a<b?-1:a>b?1:0}
;var Hc=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(za(a))return za(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ic=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,d=za(a)?a.split(""):a,f=0;f<e;f++)f in d&&b.call(c,d[f],f,a)};
function Jc(a){var b=a.length;if(0<b){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]}
;window.google||(window.google={});window.google.sbox=function(a,b,c,e){function d(){n.O()}
function f(a){H.jd(a||"")}
function k(){return J}
function m(){return F}
function l(){return H.la()}
function p(){return M.Ua()}
function q(){G.L(8)}
function h(a){return K.H(a)}
function t(){return A||!!D&&D.ya()}
function y(){return N.Ng()}
function r(a){a=a.mf||jb();a=Yb(a);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function B(){if(a)for(var b=a;b=b.parentNode;){var c=b.dir;if(c)return c}return"ltr"}
function v(a){a=nb(a);a.Rb[35]||(a.Ub="");var b=a.Mb;b?a.Mb=b.toLowerCase():a.Gb=!1;a.Ab&&!a.Ac&&(a.Ab=!1);fc||(a.Pe=!1);return a}
function x(a,b){var c=b.exec(a);return c&&c[1]?parseInt(c[1],10)||0:0}
function w(){var b=Yb(a),c=Pb(b);G.Kb(b,"resize",function(){var a=Pb(b);if(a.qf!=c.qf||a.He!=c.He)c=a,q()})}
function u(a){var b=a.zb,c=b[g.Hd],d=b[g.Zb],e=b[g.Md],f=b[g.Pd],k=b[g.Ma],e=d||f||e;b[g.Xb]||k||c||e?(a.zb[g.Xb]=!0,a.zb[g.Jd]=!0,e?(a=Oa(a.Hb),!d||$b&&(dc||a)||sb&&a?(J=3,b[g.Zb]=!1,b[g.Ld]=!1):J=2):J=1):J=0}
var n,z,D,O,G,Q,H,P,N,K,U,V,ea,T,ba,M,E,aa,F,J,ka=!1,A,S={a:function(c){if(!ka){c=v(c);F=null==e?r(c):e;var d=Ub(a),f=B(),k=!!d.getElementById("gs_id"+F),h=["gssb_c","gssb_k"];c.xd&&h.push(c.xd);h=yc(c.mf,c.zh,c.mg,F,h);u(c);A=c.ya;n=sc(fa,c.Yd||{},{rb:function(){return k},
get:function(a){return d.getElementById(a+F)},
Bb:function(a){return d.getElementById(a)},
pe:function(){return b},
Ra:function(){return f},
getId:function(a){return a+F},
re:function(){return a}},h,S,c);
z=n.get(g.gb,S);D=n.get(g.qa,S);O=n.get(g.ea,S);G=n.get(g.U,S);Q=n.get(g.V,S);H=n.get(g.J,S);P=n.get(g.ta,S);N=n.get(g.fa,S);K=n.get(g.ga,S);U=n.get(g.ua,S);V=n.get(g.Gf,S);ea=n.get(g.va,S);T=n.get(g.Kf,S);ba=n.get(g.Z,S);M=n.get(g.S,S);E=n.get(g.Ma,S);aa=n.get(g.ia,S);w();ka=!0}},
b:function(a){d();a=v(a);u(a);A=a.ya;n.F(a)},
c:d,d:function(){return b},
e:function(a,b){return Hb(a,b)},
f:function(){return H.da()},
g:l,h:function(){return M.na()},
i:function(){return M.Wa()},
j:h,k:function(a,b){a||(a=K.H(b));return Ua(a)},
l:function(){return M.isVisible()},
m:function(){return M.Pg()},
n:function(a,b){G.Kb(a,"click",function(a){aa.search(l(),b);return Kb(a)})},
o:function(){Q.tb()},
p:function(){M.dismiss()},
q:function(a){H.kf(a||"")},
r:function(){return O.getHeight()},
s:function(){H.clear()},
t:function(a){return Q.Jb(a)},
u:function(){H.ef()},
v:function(){P.focus()},
w:function(){P.blur()},
x:function(){return Q.Ne()},
y:function(){var a=ba.ka();return a?Na(a.qe()):null},
z:f,aa:function(a){a=ea.kd(a);return Na(a.qe())},
ab:function(){K.reset()},
ad:function(a,b){aa.search(a,b)},
ae:function(){E&&E.refresh()},
af:function(a){M.hf(a)},
ag:function(){M.vb()},
ah:p,ai:q,al:function(){H.Td()},
am:function(){return n&&n.isActive()},
an:function(a){D&&D.hi(a)},
ao:t,ap:function(){return t()&&D?D.Fg():""},
aq:function(a,b){return Ib(a,b)},
ar:k,as:m,at:function(){E&&E.clear()},
au:function(a,b){f(a);M.isEnabled()&&M.rd(a,b,!1)},
av:function(a){G.L(15,{query:a})},
aw:function(){return P.ed()},
ax:function(a){Q.jf(a)},
ay:function(a){O.Pb(a)},
az:function(a){return!!V&&V.Qh(a)},
ba:function(){var a,b=ba.ka();if(b){var c=b.Gc();c&&((a=c.Pc())||(a=b.H().getString("o")))}return a||""},
bb:function(a,b){return U?(U.Ye(a,b),!0):!1},
bc:function(a,b){switch(a){case "oq":case "gs_l":return h(b)[a]||null;case "gs_ssp":var c;a:{if((c=p())&&46==c.A()&&(c=c.H().getString("g")))break a;c=null}return c;default:return null}},
bd:function(a){z&&z.od(a)},
be:y,bf:function(a){return 6==y()&&!!T&&T.gg(a)},
getId:m,Kc:k};var fa=zc(c);(function(){var a=window.navigator.userAgent,b=fa.Dc(),c=x(a,/Version\/(\d+)/);c||(c=x(a,/(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/));c||(c=x(a,/Trident[^)]*rv:(\d+)/));a=c;pb=(sb=b[0])&&8>=a;ob=sb&&7>=a;$b=b[1];rb=b[2];ac=b[5];bc=b[4];fc=b[3];cc=b[7]})();
dc=/Mac/.test(navigator&&(navigator.platform||navigator.appVersion)||"");return S};var Kc;(function(){function a(){return!0}
function b(a){var b=0<=a.indexOf("?")?"&":"?",c=k.ue();return a+b+k.Rg(c)}
var c=/MSIE\s+(\S+)/,e=/Version\/(\S+)/,d=/\/(movie|show)s?($|[?#/])/i,f=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i,k,m,l,p,q,h,t,y={a:function(){return l},
b:function(b,c){a(k.ue(c))&&m.submit()},
d:function(a){h(b(a))},
e:b,r:function(a){t?(a.addRule(".gsfs","font-size:1.6rem;color:#222"),a.addRule(".gssb_a","padding:4px 24px 4px 65px"),a.addRule(".gssb_m","padding: 16px 0"),a.addRule(".gssb_e","border-top: 0")):(a.addRule(".gsfi","font-size:16px"),a.addRule(".gsfs","font-size:16px"),a.addRule("a.gssb_j","font-size:12px;color:#03c"),a.addRule(".gssb_a,.gssb_a td","line-height:20px"),a.addRule(".gssb_a","padding:0 6px"),a.addRule(".gssb_c","z-index:2000000007"),a.addRule(".gssb_i td","background:#eee"),a.addRule(".gssb_k",
"z-index:2000000006"),a.addRule(".gssb_l","margin:2px 0"),a.addRule(".gsib_a","padding:0 6px"),a.addRule(".gsib_a .gsfi","position:relative !important"),a.addRule(".gsok_a","padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule(".gsfe_b",["border:1px solid #1c62b9;",a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);"),"outline:none;"].join("")))}};
(function(){function a(a){return(a=b.match(a))?parseInt(a[1],10):NaN}
var b=window.navigator.userAgent;l=ec();l[2]?q=a(e):l[0]&&(q=a(c));p=0<=b.indexOf("Windows")})();
Kc=function(b,c,e,x,w,u,n){m=b;h=u;n&&(a=n);t=x.IS_POLYMER;u=Ec();n=pc().Sa();var r="youtube";n.clientName=r;n.requestIdentifier=r;n.Zd="yt";n.Hb=x.REQUEST_LANGUAGE;n.lf=x.REQUEST_DOMAIN;n.qh=!1;n.Sb=0;n.Qe=!1;n.Ab=!1;n.Re=!1;n.Uc=!0;n.cd="gsfi";n.wd="gsfs";n.Th=!0;r=window.location.href;r=d.test(r)||f.test(r);n.Je=r;n.Gb=x.HAS_ON_SCREEN_KEYBOARD;n.Mb=x.REQUEST_LANGUAGE;n.Se="//www.gstatic.com/inputtools/images";n.Te="youtube";n.ee=!0;n.Oa="fixed";x.PQ&&(n.Ue=x.PQ);n.Ub=x.PSUGGEST_TOKEN;n.authuser=
x.SESSION_INDEX;n.We=w.SUGGESTION_DISMISSED_LABEL;n.Xe=w.SUGGESTION_DISMISS_LABEL;n.Rb=Ma([0,33,35]);n.Cc="masthead-search-terms";n.Zc=30;n.Yd={};l[2]||(n.Ee=!0);w=l[2];r=l[4];-1!=window.location.href.indexOf("/watch?")&&(w||p&&r)&&(r="youtube-reduced",n.clientName=r,n.requestIdentifier=r,n.pg=4);n.md=n.Cc;w=-3;var v=r=0;p&&l[0]&&8==q&&(w=-5);x.IS_FUSION&&(r=-6,w=8);t&&(w=10,r=-67,v=79);n.wb=[w,r,v];w=[0];l[0]&&8==q&&(w[0]=-1);n.Vd=w;Oa(x.REQUEST_LANGUAGE)&&(n.ge=!0);if(x=x.SUGG_EXP_ID)n.vd=x;k?k.F(n):
(k=u.Sa(c,b,y),k.install(n),e&&(k.Sf(e,12),e.onclick=null))};
return y})();function Lc(a,b,c){this.ra=c;this.pa=a;this.sa=b;this.I=0;this.B=null}
Lc.prototype.get=function(){if(0<this.I){this.I--;var a=this.B;this.B=a.next;a.next=null}else a=this.pa();return a};
Lc.prototype.put=function(a){this.sa(a);this.I<this.ra&&(this.I++,a.next=this.B,this.B=a)};var Nc;a:{var Oc=ja.navigator;if(Oc){var Pc=Oc.userAgent;if(Pc){Nc=Pc;break a}}Nc=""}function Qc(a){return-1!=Nc.indexOf(a)}
;function Rc(a){ja.setTimeout(function(){throw a;},0)}
var Sc;
function Tc(){var a=ja.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Qc("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),e="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=Ea(function(a){if(("*"==e||a.origin==e)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,e)}}});
if("undefined"!==typeof a&&!Qc("Trident")&&!Qc("MSIE")){var b=new a,c={},e=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Xd;c.Xd=null;a()}};
return function(a){e.next={Xd:a};e=e.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){ja.setTimeout(a,0)}}
;function Uc(){this.I=this.B=null}
var Wc=new Lc(function(){return new Vc},function(a){a.reset()},100);
Uc.prototype.add=function(a,b){var c=Wc.get();c.set(a,b);this.I?this.I.next=c:this.B=c;this.I=c};
Uc.prototype.remove=function(){var a=null;this.B&&(a=this.B,this.B=this.B.next,this.B||(this.I=null),a.next=null);return a};
function Vc(){this.next=this.scope=this.B=null}
Vc.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
Vc.prototype.reset=function(){this.next=this.scope=this.B=null};function Xc(a){Yc||Zc();$c||(Yc(),$c=!0);ad.add(a,void 0)}
var Yc;function Zc(){if(-1!=String(ja.Promise).indexOf("[native code]")){var a=ja.Promise.resolve(void 0);Yc=function(){a.then(bd)}}else Yc=function(){var a=bd;
"function"!=sa(ja.setImmediate)||ja.Window&&ja.Window.prototype&&!Qc("Edge")&&ja.Window.prototype.setImmediate==ja.setImmediate?(Sc||(Sc=Tc()),Sc(a)):ja.setImmediate(a)}}
var $c=!1,ad=new Uc;function bd(){for(var a;a=ad.remove();){try{a.B.call(a.scope)}catch(b){Rc(b)}Wc.put(a)}$c=!1}
;function cd(a,b){var c=dd;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var ed=Qc("Opera"),fd=Qc("Trident")||Qc("MSIE"),gd=Qc("Edge"),hd=Qc("Gecko")&&!(-1!=Nc.toLowerCase().indexOf("webkit")&&!Qc("Edge"))&&!(Qc("Trident")||Qc("MSIE"))&&!Qc("Edge"),id=-1!=Nc.toLowerCase().indexOf("webkit")&&!Qc("Edge");function jd(){var a=ja.document;return a?a.documentMode:void 0}
var kd;a:{var ld="",md=function(){var a=Nc;if(hd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(gd)return/Edge\/([\d\.]+)/.exec(a);if(fd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(id)return/WebKit\/(\S+)/.exec(a);if(ed)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
md&&(ld=md?md[1]:"");if(fd){var nd=jd();if(null!=nd&&nd>parseFloat(ld)){kd=String(nd);break a}}kd=ld}var od=kd,dd={};
function pd(a){cd(a,function(){for(var b=0,c=Fc(String(od)).split("."),e=Fc(String(a)).split("."),d=Math.max(c.length,e.length),f=0;0==b&&f<d;f++){var k=c[f]||"",m=e[f]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==k[0].length&&0==m[0].length)break;b=Gc(0==k[1].length?0:parseInt(k[1],10),0==m[1].length?0:parseInt(m[1],10))||Gc(0==k[2].length,0==m[2].length)||Gc(k[2],m[2]);k=k[3];m=m[3]}while(0==b)}return 0<=b})}
var qd;var rd=ja.document;qd=rd&&fd?jd()||("CSS1Compat"==rd.compatMode?parseInt(od,10):5):void 0;function sd(){this.pa=this.pa;this.ra=this.ra}
sd.prototype.pa=!1;sd.prototype.dispose=function(){this.pa||(this.pa=!0,this.hc())};
sd.prototype.hc=function(){if(this.ra)for(;this.ra.length;)this.ra.shift()()};var td;if(!(td=!hd&&!fd)){var ud;if(ud=fd)ud=9<=Number(qd);td=ud}td||hd&&pd("1.9.1");fd&&pd("9");function vd(){this.Sc="";this.B=wd}
vd.prototype.Hh=!0;function xd(a){return a instanceof vd&&a.constructor===vd&&a.B===wd?a.Sc:"type_error:SafeUrl"}
var yd=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function zd(a){if(a instanceof vd)return a;a=a.Hh?a.Sc:String(a);yd.test(a)||(a="about:invalid#zClosurez");return Ad(a)}
var wd={};function Ad(a){var b=new vd;b.Sc=a;return b}
Ad("about:blank");var Bd="StopIteration"in ja?ja.StopIteration:{message:"StopIteration",stack:""};function Cd(){}
Cd.prototype.next=function(){throw Bd;};
Cd.prototype.qb=function(){return this};
function Dd(a){if(a instanceof Cd)return a;if("function"==typeof a.qb)return a.qb(!1);if(va(a)){var b=0,c=new Cd;c.next=function(){for(;;){if(b>=a.length)throw Bd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ed(a,b){if(va(a))try{Ic(a,b,void 0)}catch(c){if(c!==Bd)throw c;}else{a=Dd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Bd)throw c;}}}
function Fd(a){if(va(a))return Jc(a);a=Dd(a);var b=[];Ed(a,function(a){b.push(a)});
return b}
;function Gd(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Hd(a){var b=a.type;if(void 0===b)return null;switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":for(var b=[],c,e=0;c=a.options[e];e++)c.selected&&b.push(c.value);return b.length?b:null;default:return void 0!==a.value?a.value:null}}
;function Id(a){this.B=a||{cookie:""}}
ia=Id.prototype;ia.isEnabled=function(){return navigator.cookieEnabled};
ia.set=function(a,b,c,e,d,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0!==c||(c=-1);d=d?";domain="+d:"";e=e?";path="+e:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Fa()+1E3*c)).toUTCString();this.B.cookie=a+"="+b+d+e+c+f};
ia.get=function(a,b){for(var c=a+"=",e=(this.B.cookie||"").split(";"),d=0,f;d<e.length;d++){f=Fc(e[d]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
ia.remove=function(a,b,c){var e=void 0!==this.get(a);this.set(a,"",0,b,c);return e};
ia.isEmpty=function(){return!this.B.cookie};
ia.clear=function(){for(var a=(this.B.cookie||"").split(";"),b=[],c=[],e,d,f=0;f<a.length;f++)d=Fc(a[f]),e=d.indexOf("="),-1==e?(b.push(""),c.push(d)):(b.push(d.substring(0,e)),c.push(d.substring(e+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Jd=new Id("undefined"==typeof document?null:document);Jd.I=3950;function Kd(a){sd.call(this);this.Gd=1;this.sa=[];this.jb=0;this.B=[];this.I={};this.zf=!!a}
Ha(Kd,sd);ia=Kd.prototype;ia.subscribe=function(a,b,c){var e=this.I[a];e||(e=this.I[a]=[]);var d=this.Gd;this.B[d]=a;this.B[d+1]=b;this.B[d+2]=c;this.Gd=d+3;e.push(d);return d};
ia.Ad=function(a){var b=this.B[a];if(b){var c=this.I[b];if(0!=this.jb)this.sa.push(a),this.B[a+1]=ra;else{if(c){var e=Hc(c,a);0<=e&&Array.prototype.splice.call(c,e,1)}delete this.B[a];delete this.B[a+1];delete this.B[a+2]}}return!!b};
ia.fi=function(a,b){var c=this.I[a];if(c){for(var e=Array(arguments.length-1),d=1,f=arguments.length;d<f;d++)e[d-1]=arguments[d];if(this.zf)for(d=0;d<c.length;d++){var k=c[d];Ld(this.B[k+1],this.B[k+2],e)}else{this.jb++;try{for(d=0,f=c.length;d<f;d++)k=c[d],this.B[k+1].apply(this.B[k+2],e)}finally{if(this.jb--,0<this.sa.length&&0==this.jb)for(;k=this.sa.pop();)this.Ad(k)}}return 0!=d}return!1};
function Ld(a,b,c){Xc(function(){a.apply(b,c)})}
ia.clear=function(a){if(a){var b=this.I[a];b&&(Ic(b,this.Ad,this),delete this.I[a])}else this.B.length=0,this.I={}};
ia.hc=function(){Kd.Ji.hc.call(this);this.clear();this.sa.length=0};function Md(){}
;function Nd(){}
Ha(Nd,Md);Nd.prototype.clear=function(){var a=Fd(this.qb(!0)),b=this;Ic(a,function(a){b.remove(a)})};function Od(a){this.B=a}
Ha(Od,Nd);ia=Od.prototype;ia.isAvailable=function(){if(!this.B)return!1;try{return this.B.setItem("__sak","1"),this.B.removeItem("__sak"),!0}catch(a){return!1}};
ia.set=function(a,b){try{this.B.setItem(a,b)}catch(c){if(0==this.B.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
ia.get=function(a){a=this.B.getItem(a);if(!za(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
ia.remove=function(a){this.B.removeItem(a)};
ia.qb=function(a){var b=0,c=this.B,e=new Cd;e.next=function(){if(b>=c.length)throw Bd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!za(d))throw"Storage mechanism: Invalid value was encountered";return d};
return e};
ia.clear=function(){this.B.clear()};
ia.key=function(a){return this.B.key(a)};function Pd(){var a=null;try{a=window.localStorage||null}catch(b){}this.B=a}
Ha(Pd,Od);function Qd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.B=a}
Ha(Qd,Od);var Rd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Sd(a){return a?decodeURI(a):a}
function Td(a,b,c){if("array"==sa(b))for(var e=0;e<b.length;e++)Td(a,String(b[e]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ud(a,b){for(var c in b)Td(c,b[c],a);return a}
;var Vd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};Ga("yt.config_",Vd);function Wd(a){var b=arguments;if(1<b.length)Vd[b[0]]=b[1];else{var b=b[0],c;for(c in b)Vd[c]=b[c]}}
function Xd(a,b){return a in Vd?Vd[a]:b}
;var Yd=qa("yt.prefs.UserPrefs.prefs_")||{};Ga("yt.prefs.UserPrefs.prefs_",Yd);Fa();var Zd={};function $d(){return Zd.clicktracking||(Zd.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var ae=0,be=qa("ytDomDomGetNextId")||function(){return++ae};
Ga("ytDomDomGetNextId",be);function ce(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(e){var b=e,c=qa("yt.logging.errors.log");c?c(b,void 0,void 0,void 0,void 0):(c=Xd("ERRORS",[]),c.push([b,void 0,void 0,void 0,void 0]),Wd("ERRORS",c))}}:a}
;var de=qa("ytEventsEventsListeners")||{};Ga("ytEventsEventsListeners",de);var ee=qa("ytEventsEventsCounter")||{count:0};Ga("ytEventsEventsCounter",ee);function fe(){}
;var ge=qa("ytPubsubPubsubInstance")||new Kd;Kd.prototype.subscribe=Kd.prototype.subscribe;Kd.prototype.unsubscribeByKey=Kd.prototype.Ad;Kd.prototype.publish=Kd.prototype.fi;Kd.prototype.clear=Kd.prototype.clear;Ga("ytPubsubPubsubInstance",ge);var he=qa("ytPubsubPubsubSubscribedKeys")||{};Ga("ytPubsubPubsubSubscribedKeys",he);var ie=qa("ytPubsubPubsubTopicToKeys")||{};Ga("ytPubsubPubsubTopicToKeys",ie);var je=qa("ytPubsubPubsubIsSynchronous")||{};Ga("ytPubsubPubsubIsSynchronous",je);var ke=qa("ytLoggingTransportLogPayloadsQueue_")||{};Ga("ytLoggingTransportLogPayloadsQueue_",ke);var le=qa("ytLoggingTransportTokensToCttTargetIds_")||{};Ga("ytLoggingTransportTokensToCttTargetIds_",le);(new Pd).isAvailable();(new Qd).isAvailable();Ga("yt.msgs_",window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{});function me(a,b){var c=b;isNaN(c)&&(c=void 0);var e=qa("yt.scheduler.instance.addJob");e?c=e(a,1,c):void 0===c?(a(),c=NaN):(e=a,"function"==sa(e)&&(e=ce(e)),c=window.setTimeout(e,c||0));return c}
;function ne(a,b,c,e,d){if(a&&d){var f=Xd("SBOX_SETTINGS"),k=Xd("SBOX_LABELS");f&&k&&(a=qa("searchbox.yt.install")(a,b,c,f,k,oe,e))&&d(a,100)}}
function pe(a,b){var c=Xd("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[$d()]:c.getAttribute("data-clicktracking"):null)||"";b.ved=c;var c=a,e=Xd("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=Sd(window.location.href.match(Rd)[3]||null);d&&e.push(d);d=Sd(c.match(Rd)[3]||null);if(0<=Hc(e,d)||!d&&0==c.lastIndexOf("/",0))if(Xd("EXPERIMENT_FLAGS",{}).autoescape_tempdata_url&&(e=document.createElement("a"),c=c instanceof vd?c:zd(c),
e.href=xd(c),c=e.href),c){var d=c.match(Rd),c=d[5],e=d[6],d=d[7],f="";c&&(f+=c);e&&(f+="?"+e);d&&(f+="#"+d);c=f;e=c.indexOf("#");if(c=0>e?c:c.substr(0,e)){if(b.itct||b.ved)(e=b.csn)||(e=Xd("client-screen-nonce",void 0))||(e=Xd("EVENT_ID",void 0)),b.csn=e;for(d=e=0;d<c.length;++d)e=31*e+c.charCodeAt(d)>>>0;c="ST-"+e.toString(36);b?(e=Ud([],b),e[0]="",e=e.join("")):e="";Jd.set(""+c,e,5,"/","youtube.com");b&&(c=b.itct||b.ved,e=qa("yt.logging.screen.storeParentElement"),c&&e&&e(new fe))}}}}
function oe(a,b){pe(a,b?{feature:b}:{});var c=qa("yt.window.navigate");try{c(a)}catch(m){var e=void 0===e?{}:e;var d=void 0===d?"":d;var f=void 0===f?window:f;c=f.location;e=Ud([a],e);if(e[1]){f=e[0];var k=f.indexOf("#");0<=k&&(e.push(f.substr(k)),e[0]=f=f.substr(0,k));k=f.indexOf("?");0>k?e[1]="?":k==f.length-1&&(e[1]=void 0)}d=e.join("")+d;d=d instanceof vd?d:zd(d);c.href=xd(d)}}
function qe(a){for(var b=document.getElementById("masthead-search"),c=[],e,d=b.elements,f,k=0;f=d[k];k++)if(f.form==b&&!f.disabled&&"FIELDSET"!=f.tagName)switch(e=f.name,f.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":f=Hd(f);if(null!=f)for(var m,l=0;m=f[l];l++)Gd(c,e,m);break;default:m=Hd(f),null!=m&&Gd(c,e,m)}d=b.getElementsByTagName("INPUT");for(k=0;f=d[k];k++)f.form==b&&"image"==f.type.toLowerCase()&&(e=f.name,Gd(c,e,f.value),Gd(c,e+".x",
"0"),Gd(c,e+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;pe(b,a);a=!!Xd("SPF_SEARCH_BOX");if(!qa("ytspf.enabled")||!a)return!0;a=qa("yt.window.navigate");try{a(b)}catch(p){return!0}return!1}
;Ga("searchbox.yt.install",Kc);Ga("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search"),b=a.search_query,c=document.getElementById("search-btn"),e=window.setTimeout;Xd("EXPERIMENT_FLAGS",{}).schedule_searchbox&&(e=me);ne(a,b,c,qe,e)});
Ga("yt.www.masthead.searchbox.initPolymer",function(a,b,c,e){ne(a,b,c,e,me)});}).call(this);