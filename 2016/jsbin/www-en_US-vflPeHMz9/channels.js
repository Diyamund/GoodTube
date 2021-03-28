(function(g){var window=this;var Ija,Jja,Kja,UM,WM,YM,XM,ZM,$M,aN,Lja,Mja,Nja,Oja,gN,lN,Pja,Qja,Rja,Sja,mN,rN,Tja,tN,uN,Uja,Vja,yN;Ija=function(){g.HD()};
Jja=function(a){(0,g.x)(a,function(a){a.dispose()});
a.length=0};
Kja=function(a,b,c){0<c.length||(0,g.x)(g.N(b),function(b){var d=new a;d.Ha(b);c.push(d)})};
g.SM=function(a,b){var c=[];a.init=g.u(Kja,a,b,c);a.dispose=g.u(Jja,c)};
g.TM=function(a,b){var c=a.elements[b];if(c){if(c.type)return g.ql(c);for(var d=0;d<c.length;d++){var e=g.ql(c[d]);if(e)return e}}return null};
UM=function(){g.X.call(this)};
g.VM=function(){this.D=null;g.X.call(this)};
WM=function(){g.X.call(this);this.D=this.kh=this.Wh=null;this.J=g.C("CHANNEL_ID",void 0)};
YM=function(a,b){a.Wh.innerHTML="";a.kh.innerHTML="";var c=a.T("business-email-button");c&&g.U(a).Va(c,"click",a.G);a.D&&XM(a);a.kh.innerHTML=b;g.jf("https://www.google.com/recaptcha/api.js");a.D=a.T("captcha-form");a.D&&g.U(a).R(a.D,"submit",a.H)};
XM=function(a){g.U(a).Va(a.D,"submit",a.H);a.D=null};
ZM=function(){g.X.call(this)};
$M=function(){g.X.call(this)};
aN=function(){g.X.call(this);this.D=null};
Lja=function(a){g.W(g.z("about-send-message-success"));g.W(g.z("about-send-message-error"));bN&&(bN.value="",g.Gw.getInstance().Dd(bN));cN=g.K(a.target,"send-button-info");a=g.D(cN,"title");var b=g.D(cN,"url"),c=g.J("user-avatar",dN);c&&a&&(c.title=a,c.src=b,c.alt=a);(b=g.J("yt-user-name",dN))&&a&&g.L(b,a);eN.show();bN&&bN.focus()};
Mja=function(){fN=!1;eN.setState("content");eN.dismiss("send");g.V(g.z("about-send-message-success"))};
Nja=function(){fN=!1;eN.setState("content");g.V(g.z("about-send-message-error"))};
Oja=function(){if(bN&&!fN){eN.setState("working");fN=!0;var a=g.J("msg-form-info"),b=g.D(a,"action"),c=bN.value,d=g.D(cN,"user-id"),e=g.D(cN,"channel-id"),f={};f.user_id=d;f.channel_id=e;f.content=c;var k=g.mf();k&&(f.bgr=k);a={Z:Mja,onError:Nja,ka:f,method:g.D(a,"method"),hV:g.D(a,"token")};c=(0,g.La)(c);b&&c&&(d||e)?g.I(b,a):(fN=!1,eN.setState("content"),bN&&(bN.value="",g.Gw.getInstance().Dd(bN),bN.focus()))}};
gN=function(){g.X.call(this)};
g.hN=function(){g.X.call(this);this.H=this.D=!1};
lN=function(){g.an(iN);iN.length=0;g.Ok(jN);kN=jN=null};
Pja=function(a){kN==a.C&&lN()};
Qja=function(a){mN(!0,a.C)};
Rja=function(a){mN(!1,a.C)};
Sja=function(){nN&&nN.pauseVideo()};
mN=function(a,b){if(b==oN){if(pN&&(g.ef(pN),pN=0,!a))return;var c;if(c=a&&nN)c=nN,c=!(c.D&&c.D.isReady()&&0==c.D.getPlayerState());c&&(pN=g.E("yt-ui-videoplayer-ended",g.u(mN,!0,b)))}};
rN=function(a){a=g.z(a);if(!a)return null;var b=new g.VM;b.Ha(a);g.yb(qN,b);return b};
Tja=function(){g.JD.getInstance().Fd()};
g.sN=function(){g.X.call(this);this.G="";this.D=this.Dc=null};
tN=function(a,b){g.V(a);b&&g.V(b)};
uN=function(){g.Gg.call(this,"www/channels",["www/common"],["channel","playlist"],Uja,Vja)};
Uja=function(){g.MD();g.My(g.ZC);if(jN=g.J("subscription-confirmation-dialog"))kN=g.C("CHANNEL_ID",void 0),iN.push(g.bn(g.aC,Pja)),g.Lx.getInstance().show(jN);gN.init();UM.init();g.hN.init();var a=g.J("alert-with-button-renderer");a&&(vN=new g.ZH,vN.Ha(a));g.HD();wN.push(g.E("yt-uix-load-more-success",Ija));g.mE();a=g.C("CHANNEL_TAB",void 0);if(a in xN)xN[a][0]();yN=a};
Vja=function(){g.Ny(g.JD);var a=yN;if(a in xN)xN[a][1]();g.rE();g.Ny(g.ZC);lN();gN.dispose();UM.dispose();g.hN.dispose();g.ef(wN);wN.length=0;vN&&vN.dispose()};
g.v(UM,g.X);g.iw(UM,"channel-donation-button");UM.prototype.aa=function(){UM.M.aa.call(this);var a=this.L();a&&g.U(this).R(a,"click",this.D)};
UM.prototype.D=function(){function a(){window.google.payments.inapp.buy({jwt:d,parameters:{locale:g.C("GAPI_LOCALE"),price:e,uiTemplate:"donation",userSessionIndex:g.C("SESSION_INDEX")}})}
var b=g.J("donation-amount-input"),c=this.L(),d=g.D(c,"jwt"),e=b.value;(b=g.D(c,"gb_url"))&&g.jf(b,a)};g.v(g.VM,g.X);g.h=g.VM.prototype;g.h.aa=function(){g.VM.M.aa.call(this);var a=g.D(this.L(),"swf-config");a&&(a=g.$d(g.$o(a)),this.D=g.ei(this.F,a),this.D.addEventListener("onStateChange",this.vo),this.D.addEventListener("onReady",this.lo))};
g.h.Y=function(){this.D.removeEventListener("onStateChange",this.vo);this.D.removeEventListener("onReady",this.lo);this.D=null;g.$m(this.L());g.VM.M.Y.call(this)};
g.h.vo=function(a){0==a&&g.F("yt-ui-videoplayer-ended",this)};
g.h.lo=function(){g.F("yt-ui-videoplayer-ready",this)};
g.h.pauseVideo=function(){this.D.isReady()?this.D.pauseVideo():g.Gn("yt-ui-videoplayer-ready",(0,g.t)(this.pauseVideo,this))};g.v(WM,g.X);g.SM(WM,"business-email-container");WM.prototype.aa=function(){WM.M.aa.call(this);this.Wh=this.T("business-email-inline");this.kh=this.T("business-email-captcha-container");var a=this.T("business-email-button");a&&g.U(this).R(a,"click",this.G)};
WM.prototype.G=function(){g.I("/channels_profile_ajax?action_get_business_email_captcha=1",{Z:function(a,b){"CAPTCHA"==b.str_code&&YM(this,b.html_content)},
context:this})};
WM.prototype.H=function(a){a.preventDefault();g.mn(this.D,{ka:{channel_id:this.J},Z:function(a,c){if("EMAIL_ADDR"==c.str_code||"ERROR"==c.str_code){var b=c.html_content;this.Wh.innerHTML="";this.kh.innerHTML="";XM(this);this.Wh.innerHTML=b}},
onError:function(a,c){"CAPTCHA"==c.str_code&&YM(this,c.html_content)},
context:this})};g.v(ZM,g.X);g.SM(ZM,"about-action-report-user");g.h=ZM.prototype;
g.h.aa=function(){g.hw(this,"click","about-action-with-overlay",this.YJ,null,window.document.documentElement);g.hw(this,"click","abuse-type-radio-input",this.Qu,null,window.document.documentElement);g.hw(this,"click","continue-flag-channel",this.sH,null,window.document.documentElement);g.hw(this,"click","submit-flag-background",g.u(this.Lr,"report_background"),null,window.document.documentElement);g.hw(this,"click","submit-flag-profile-image",g.u(this.Lr,"report_profile_image"),null,window.document.documentElement);
g.hw(this,"click","submit-flag-with-action",this.mK,null,window.document.documentElement)};
g.h.Lr=function(a){var b=g.z("flag-channel-form"),c=g.z("flag-channel-action-input");b&&c&&(c.value=a,b.submit())};
g.h.mK=function(a){var b=a.currentTarget;a=g.D(b,"flagging-action");var c=g.z("flag-service-ajax-form"),d=g.z("flag-service-ajax-action-input");c&&d&&(b.disabled=!0,d.value=a,g.mn(c,{Z:function(){window.location.reload()},
onError:function(){b.disabled=!1}}))};
g.h.YJ=function(a){(a=g.D(a.currentTarget,"overlay-class")+"")&&g.Lx.getInstance().show(g.J(a,void 0))};
g.h.Qu=function(){var a=g.Px();g.J("continue-flag-channel",a).disabled=!1};
g.h.sH=function(){var a=g.Px(),a=g.J("flag-channel-abuse-form",a),a=g.TM(a,"next_url");g.Lx.getInstance().yc();g.ra(a)&&""!=a&&g.dn(a)};g.v($M,g.X);g.iw($M,"browse-items-primary");$M.prototype.aa=function(){$M.M.aa.call(this);g.PD(this.L());this.ha("feed-item-dismissal-content-replaced",this.D)};
$M.prototype.Y=function(){g.QD();$M.M.Y.call(this)};
$M.prototype.D=function(a){(a=g.D(a,"dismissal-token"))&&g.I("/channels_feed_ajax?action_remove_channel_post=1",{method:"POST",ka:{dismissal_token:a}})};g.v(aN,g.X);g.iw(aN,"c4-custom-tab-iframe");aN.prototype.aa=function(){var a=g.D(this.L(),"src");if(a){this.D=g.Ge(a);g.U(this).R(window,"message",this.G);var b=g.D(this.L(),"append-analytics"),c=g.r("ga");b&&"true"==b.toLowerCase()&&c&&c(function(b){var c=g.r("gaplugins.Linker");c&&(b=new c(b),(b=g.r("decorate",b))&&(a=b(a)))});
this.L().src=a}};
aN.prototype.G=function(a){a=a.mc;g.Ge(a.origin)==this.D&&(a=g.$d(a.data))&&"height"in a&&(this.L().style.height=a.height)};var eN,dN,bN,fN,cN,zN=[];g.v(gN,g.X);g.iw(gN,"channel-search");gN.prototype.aa=function(){gN.M.aa.call(this);this.D=this.T("search-field");var a=this.T("search-form");g.U(this).R(a,"submit",this.G);var b=this.L();g.hw(this,"click","show-search",function(){g.P(b,"expanded");g.cd(function(){var a=g.z("channels-search-field"),b=g.z("circled-user-profiles");if(a&&(a.focus(),b)){var a=a.getBoundingClientRect(),e=b.getBoundingClientRect();a.right+30>e.left&&(b.style.visibility="hidden")}},200)})};
gN.prototype.G=function(a){a.preventDefault();if(this.D.value.trim()){a=this.T("search-form");var b=g.Xl(g.Fm(a));a=g.Pf(a.action,b).replace(/%20/g,"+");var b={},c=g.C("EVENT_ID");c&&(b.ei=c,b.feature="web-channel-search");g.Ug(a,b)}};var vN,wN=[];g.v(g.hN,g.X);g.iw(g.hN,"c4-legal-info");g.h=g.hN.prototype;g.h.aa=function(){g.hN.M.aa.call(this);var a=this.T("legal-text");if("false"!=g.D(this.L(),"autoscroll")){var b={start:0};b.end=a.scrollHeight-a.clientHeight;b.duration=b.end/3;b.Qg="linear";this.G=new g.Vs(a,b);this.D=!0;g.U(this).R(a,"click",this.CL);g.U(this).R(a,"mouseover",this.FL);g.U(this).R(a,"mouseout",this.BL);g.U(this).R(a,"scroll",this.EL)}};
g.h.EL=function(){this.H||this.D||(this.G.pause(),this.H=!0)};
g.h.CL=function(){this.G.pause();this.D=!1;this.H=!0};
g.h.FL=function(){this.G.pause();this.D=!1};
g.h.BL=function(){this.D||this.H||(this.G.play(),this.D=!0)};var kN,iN=[],jN=null;var qN,oN,nN,pN,AN=[],BN=[];g.v(g.sN,g.X);g.iw(g.sN,"pl-header");g.h=g.sN.prototype;g.h.aa=function(){g.sN.M.aa.call(this);this.G=g.D(this.L(),"full-list-id");var a=g.U(this),b=this.T("playlist-share");b&&a.R(b,"click",this.AM);(b=this.T("addto-playlist-button"))&&a.R(b,"click",this.SB);(b=this.T("report-playlist-button"))&&a.R(b,"click",this.JF);this.ha("yt-uix-videoactionmenu-hide",this.Kz);(a=g.J("pl-join-collaboration"))&&g.U(this).R(a,"click",this.oE)};
g.h.SB=function(a){if(!this.D){a=a.currentTarget;if(a){var b=g.ex(a);b=g.J("playlist-add-to-menu",b)}b&&(a=g.D(a,"src-playlist-id"))&&(this.D=new g.sx({sourcePlaylistId:a}),this.D.Ha(b),g.yb(this,this.D))}};
g.h.JF=function(){var a=g.J("report-playlist-dialog",void 0);g.mn(g.z("flag-service-ajax-form"),{Z:function(){g.P(a,"report-playlist-success")},
ZU:function(){g.P(a,"report-playlist-failure")},
bb:function(){g.Lx.getInstance().show(a)}})};
g.h.AM=function(){var a=g.z("playlist-share-container"),b=g.z("playlist-share-alerts");if(g.xs(a))tN(a,b);else{if(!this.Dc){var c=g.z("playlist-share-loading");g.V(c);this.Dc=new g.qF(a,null,this.G,function(){g.W(c);g.V(a);b&&g.V(b)},"playlist",!1,!0,null,null,null,null,null,null,10,null,null,"playlist")}g.yb(this,this.Dc);
tN(a,b);g.nm("playlistShare",void 0,void 0)}};
g.h.Kz=function(){var a=g.J("playlist-add-to-menu"),b=g.J("playlist-menu"),a=g.cx(a),b=g.cx(b);g.kx(g.bx.getInstance(),a);g.kx(g.bx.getInstance(),b)};
g.h.oE=function(a){a=g.D(a.currentTarget,"join-collaboration-token");g.I("/playlist_edit_service_ajax/?action_join_collaboration=1",{method:"POST",ka:{playlist_id:this.G,join_collaboration_token:a},Z:function(a,c){c&&c.result&&c.result.redirect_url&&g.Ug(c.result.redirect_url)},
context:this})};g.n("yt.www.creator.yoda.tipaction.registerForCard",function(a){var b=g.Hx.getInstance();a=g.z(g.Y(b,"card")+g.wf(a));g.D(a,"has-tip-handler")||(g.Hn(a,"has-tip-handler","true"),g.vn(a,"click",g.bD,"a"))},void 0);
g.v(uN,g.Gg);uN.prototype.enable=function(){uN.M.enable.call(this);g.My(g.JD)};
var xN={about:[function(){g.J("channel-msg-button")&&zN.push(g.Q(g.J("messagebox-container"),"click",Lja,"channel-msg-button"));if(dN=g.z("msg-dialog")){eN=new g.Ix(dN);var a=g.J("yt-dialog-send",dN);a&&zN.push(g.G(a,"click",Oja));bN=g.J("compose-message",dN)}fN=!1;g.um(g.C("MESSAGEBOX_BG_I",null),g.C("MESSAGEBOX_BG_IU",null),g.C("MESSAGEBOX_BG_P",void 0));ZM.init();g.cE();WM.init()},
function(){g.H(zN);zN.length=0;eN&&eN.dispose();g.kf=null;ZM.dispose();g.ef(g.aE);g.aE.length=0;WM.dispose()}],
community:[function(){g.DI.init()},
function(){g.DI.dispose()}],
discussion:[function(){g.z("comment-section-renderer")&&g.DI.init()},
function(){g.DI.dispose()}],
feed:[function(){(g.J("activity-feeds-container")||g.z("browse-items-primary"))&&$M.init()},
function(){(g.J("activity-feeds-container")||g.z("browse-items-primary"))&&$M.dispose()}],
featured:[function(){qN=new g.vb;oN=g.C("CHANNEL_ID",void 0);if(nN=rN("upsell-video"))g.TH(nN.D),BN.push(g.bn("ypc-purchase-flow-start",Sja));var a=rN("pyv-video-view");oN&&!a&&BN.push(g.bn(g.aC,Qja),g.bn(g.bC,Rja));AN.push(g.E("yt-uix-load-more-success",Tja));g.z("channel-navigation-menu")||ZM.init()},
function(){g.ef(AN);AN.length=0;g.an(BN);BN.length=0;nN=null;qN.dispose();g.VH();g.z("channel-navigation-menu")||ZM.dispose()}],
custom:[function(){aN.init()},
function(){aN.dispose()}],
playlist:[function(){g.sN.init()},
function(){g.sN.dispose()}]};
g.Kg(new uN);})(_yt_www);