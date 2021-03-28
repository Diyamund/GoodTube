(function(g){var window=this;var hP=function(){this.C=Bla;this.Jb=5E3},Cla=function(a,b,c){return function(){iP(a,!1);
c&&c(b)}},Dla=function(a,b){return function(c){iP(a,!0);
b.apply(void 0,arguments)}},iP=function(a,b){var c="_callbacks___"+a;
if(g.n[c])if(b)try{delete g.n[c]}catch(d){g.n[c]=void 0}else g.n[c]=g.va},Ela=function(a){a.preventDefault();
a=g.M(a.target,"toggle-section");window.document.querySelector(a.dataset.selector).classList.toggle("hid");a=a.querySelector(".toggle-text");var b="Show"==g.Kn(a)?"Hide":"Show";g.L(a,b)},Fla=function(){var a=g.P(g.K("experiments-content"),"click",function(a){var b=a.target,d=g.E(b,"exp-name");
b=g.E(b,"control-name");d&&b&&(jP=[],kP[d]=lP(d),kP[b]=lP(b),mP=window.open("",d),a.preventDefault())},"wpt");
nP.push(a)},lP=function(a){var b=["logdata\t0",
"navigate\t"+oP+"?action_zero=Zero","navigate\t"+oP+"?action_add=Add&addme="+a,"navigate\t"+pP,"logdata\t1\nexecAndWait\tdocument.querySelector(\"a[href^='/watch?v=']\").click()"].join("\n");return(new hP).send({url:"www.youtube.com",label:a,location:"Atlanta:Chrome.Cable",runs:5,fvonly:1,script:b,video:1,f:"json"},function(b){b&&b.data&&(jP.push(b.data.testId),2==jP.length&&(b=mP)&&g.dc(b.location,g.Uc("https://webpagetest.corp.google.com/video/compare.php",{tests:jP.join(","),thumbSize:200,ival:100,
end:"visual"})));delete kP[a]})},Gla=function(){function a(){for(var a=b.value.toLowerCase(),d=0;d<c.length;d++){for(var k=c[d],l=k.getElementsByClassName("filter-text"),m=0,q=0;q<l.length;q++){var w=l[q];
~w.textContent.toLowerCase().indexOf(a)?(w.style.display="",m++):w.style.display="none"}k.style.display=m?"":"none"}}
var b=window.document.getElementsByClassName("filter-input")[0],c=window.document.getElementsByClassName("filter-group"),d=-1;b.addEventListener("input",function(){(0,window.clearTimeout)(d);d=(0,window.setTimeout)(a,500)})},Hla=0;
hP.prototype.send=function(a,b,c,d){a=a?g.ib(a):{};d=d||"_"+(Hla++).toString(36)+(0,g.A)().toString(36);var e="_callbacks___"+d;b&&(g.n[e]=Dla(d,b),a.callback=e);b={timeout:this.Jb,vw:!0};e=g.Km(this.C,a);b=g.jr(e,b);g.cr(b,null,Cla(d,a,c),void 0);return{hb:d,Ho:b}};
hP.prototype.cancel=function(a){a&&(a.Ho&&a.Ho.cancel(),a.hb&&iP(a.hb,!1))};var mP,nP,kP,pP,oP,jP,Bla=g.Lm(g.Jb("https://webpagetest.corp.google.com/runtest.php"));g.Zh(g.uq({name:"www/experiments",deps:["www/common"],page:["experiments"],init:function(){mP=null;nP=[];kP={};pP=window.location.host;oP=pP+window.location.pathname;jP=[];Fla();Gla();nP.push(g.P(g.x("content"),"click",Ela,"toggle-section"))},
dispose:function(){mP=null;g.Ig(nP);nP=[];for(var a in kP)kP.hasOwnProperty(a)&&kP[a].cancel();kP={};oP=pP="";jP=[]}}));})(_yt_www);
