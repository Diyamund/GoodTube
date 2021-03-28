(function(g){var window=this;var Gwa=function(a){for(var b in a)return a[b]},Hwa=function(a,b){g.SG("mute_suggested_edit",g.va,{video_id:a,
effect:b},null,"w")},Iwa=function(a){this.C=a;
this.D="/gen_204";this.C&&(this.D=this.C.D);this.F=[];this.C&&(this.F=this.C.F);this.G=new g.Se;this.H=new g.Se},Jwa=function(a){var b=new g.Se;
a.C&&(b=Jwa(a.C));g.Re(b,a.G);a.H.forEach(function(a,d){b.set(d,(0,g.A)()-a)});
return b},$8=function(){},a9=function(){var a=g.D("WATCH_EDITOR_PROJECT_ID",void 0),b=g.D("WATCH_EDITOR_ENHANCE_CONFIRMATION_MESSAGE",void 0);
this.H=g.D("VIDEO_ID",void 0);this.G=a;this.F=[];if(this.C=g.x("edit-confirmation-alert"))a=g.Wp("edit-confirmation-alert-template"),g.Au("yt-alert-info",b,a,this.C),b=g.K("edit-confirmation-no",this.C),a=g.K("yt-uix-close",this.C),this.F.push(g.H(g.K("edit-confirmation-yes",this.C),"click",(0,g.t)(this.R,this))),this.F.push(g.H(b,"click",(0,g.t)(this.K,this))),this.F.push(g.H(a,"click",(0,g.t)(this.D,this)))},b9=function(a,b){var c={encrypted_project_id:a.G};
c.video_id=a.H;g.SG(b+"_suggested_edit",g.$k,c)},Kwa=function(a,b,c){g.wd.call(this,a,c);
this.payload=b||null},c9=function(a,b){this.C=a;
this.hb=b},d9=function(a){g.Zd.call(this);
this.G=new $8;this.D=new g.SE;this.C=null;this.F=a},e9=function(){var a=g.D("APIARY_FEEDBACK_URLS"),b=g.D("APIARY_FEEDBACK_CLIENT_ID",void 0).split(":");
this.R={name:b[0],version:b[1],token:b[2]};this.G=a;this.F=null;g.ab(this.G,function(){});
a=void 0;a=new g.Zo(2E3),a.start();this.K=a;g.Kd(this.K,"tick",this.V,!1,this);this.C={};this.D=0;this.H=new g.TK},Lwa=function(a){this.type="editor_progress";
this.item=a},Mwa=function(a){var b=a.H.getValue()*(Math.random()+.5);
a.F=(0,g.A)()+b;g.UK(a.H)},Owa=function(a,b,c){var d=b.C;
if(d){var e=a.C[d];e&&(e=(0,g.Wi)(e,function(a){return a.item!=b||g.qa(c)&&c!=a.type}),g.Ja(e)?delete a.C[d]:a.C[d]=e,Nwa(a))}},Nwa=function(a){var b=new window.Set;
for(c in a.C)(0,g.z)(a.C[c],function(a){b.add(a.type)});
var c=1==b.size&&b.has("editor_suggestions")?1E4:2E3;c!=a.K.C&&a.K.setInterval(c)},Pwa=function(a){var b={id:{},
choice:{}},c=Gwa(a),d=f9(c.item.C.C);b.id[d]=c.item.C.hb;(0,g.z)(a,function(a){a=f9(a.type);b.choice[a]=!0});
return b},f9=function(a){return a.replace(/_([a-z])/g,function(a,c){return c.toUpperCase()})},Rwa=function(){var a=g.D("EDITOR_PROGRESS_FEEDBACK_KEY",void 0);
if(!g9){a=g9=new h9(a);Qwa(a,g.wq("EDITS_PROCESSING_MESSAGE"));a.F=g.Kd(a.C,"R",a.G,!1,a);a=a.C;var b=a.F,c=a.C;c&&(c in b.C||(b.C[c]=[]),b.C[c].push(new Lwa(a)),Nwa(b))}},h9=function(a){var b=new e9;
this.C=new d9(b);this.C.C=new c9("frontend_key",a)},Qwa=function(a,b){a.D&&(g.sc(a.D.parentElement),a.D=null);
var c=g.x("editor-progress-alert-container"),d=g.Wp("editor-progress-alert-template");a.D=g.Au("yt-alert-warn",b,d,c)},i9=function(a,b,c){g.sd.call(this);
this.H=a;this.F=b;this.F.sort();this.K=c;this.D=new g.iH(this);if(a=g.wq("EDITOR_SUGGEST_"+this.F.join("_")))if(b=g.x("edit-suggestion-alert"),c=g.x("edit-suggestion-alert-template").cloneNode(!0),this.G=g.Au("yt-alert-info",a,c,b),a=g.K("close",this.G),this.D.O(g.K("edit-suggestion-preview",this.G),"click",this.PG),this.D.O(a,"click",this.EE),this.C=g.x("edit-suggestion-confirmation-alert-container"))a=g.K("edit-suggestion-action-no",this.C),this.D.O(g.K("edit-suggestion-action-yes",this.C),"click",
this.TN),this.D.O(a,"click",this.SN)},Swa=function(a){g.nj(a.K,g.r("ytplayer.config"))};
Iwa.prototype.send=function(a){var b=Jwa(this);a&&g.Re(b,a);var c=new g.or(this.D);for(a=0;a<this.F.length;a++){var d=this.F[a],e=b.get(d);void 0!==e&&g.yr(c,d,e.toString());b.remove(d)}b.forEach(function(a,b){g.yr(c,b,a.toString())});
g.di(c.toString())};
g.v($8,Iwa);$8.prototype.send=function(){};
new g.Se;var j9;a9.prototype.dispose=function(){g.Ig(this.F);this.F=[]};
a9.prototype.R=function(){g.S(this.C);b9(this,"confirm")};
a9.prototype.K=function(){g.S(this.C);b9(this,"revert")};
a9.prototype.D=function(){b9(this,"confirm")};g.v(Kwa,g.wd);c9.prototype.toString=function(){return this.C+"::"+this.hb};g.v(d9,g.Zd);d9.prototype.stop=function(){Owa(this.F,this)};e9.prototype.V=function(){if(!g.eb(this.C))if(this.D)2E3<=(0,g.A)()-this.D&&(Mwa(this),this.D=0);else if(!this.F||this.F<(0,g.A)()){a:{var a=0;var b=Math.random();for(var c in this.G)if(a+=this.G[c],a>b){b=c+"/list";break a}b=""}a=g.G;c={client:this.R,queries:[]};for(d in this.C)c.queries.push(Pwa(this.C[d]));var d=g.Xe(c);a(b,{postBody:d,onSuccess:(0,g.t)(this.N,this),onError:(0,g.t)(this.W,this),method:"POST",headers:{"Content-Type":"application/json"}});this.D=(0,g.A)()}};
e9.prototype.W=function(a){500!=a.status&&503!=a.status||Mwa(this)};
e9.prototype.N=function(a,b){this.D=0;if(!this.F||this.F<(0,g.A)())this.H.reset(),this.F=null;b&&b.items&&304!=a.status&&(0,g.z)(b.items,(0,g.t)(this.J,this))};
e9.prototype.J=function(a){if(a.id&&a.feedback){var b=a.id,c=null;g.Ba(b)?g.ab(b,function(a,b){var d=b.replace(/([A-Z])/g,"_$1").toLowerCase();c=new c9(d,a)}):c=new c9("upload_id",b);
g.ab(this.C[c],function(b){var c=f9(b.type);if(c=a.feedback[c]){var d=b.item;b=b.type;if(!d.D.contains(b)){d.D.add(b);var k=new g.Se;k.set("a","feedback_service");k.set("fty",b);d.G.send(k)}k=null;switch(b){case "video_id":k="J";break;case "video_info2":k="K";break;case "video_issues":k="L";break;case "processing_progress":k="M";break;case "processing_done":k="N";break;case "youtube_status":k="O";break;case "thumbnails_done":k="P";break;case "editor_suggestions":k="Q";break;case "editor_progress":k=
"R"}k&&d.dispatchEvent(new Kwa(k,c))}})}};var g9;h9.prototype.dispose=function(){this.F&&(g.Td(this.F),this.F=null);this.C&&this.C.stop()};
h9.prototype.G=function(a){var b=a.payload.produced;a=0<=b&&1>=b?g.wq("EDITS_PROCESSING_MESSAGE_WITH_PROGRESS",{"{percent}":Math.round(100*(.1+.8*b))}):g.wq("EDITS_PROCESSING_MESSAGE");Qwa(this,a);1<=b&&(a=this.C,Owa(a.F,a,"editor_progress"))};var k9;g.v(i9,g.sd);g.h=i9.prototype;g.h.PG=function(){g.S(this.G);var a=this.F.join(","),b=(0,g.t)(this.QG,this);g.SG("preview_suggested_edit",b,{video_id:this.H,effect:a},null,"w")};
g.h.QG=function(a){var b=g.Og(g.r("ytplayer.config")).clone();b.disable.html5=!0;b.args.dash="0";b.args.partnerid=28;for(var c in a.flashvars)b.args[c]=a.flashvars[c];b.loaded=!1;g.nj(this.K,b);g.Q(this.C)};
g.h.TN=function(){g.S(this.C);Swa(this);var a=this.F.join(","),b=(0,g.t)(this.oF,this);g.SG("publish_suggested_edit",b,{video_id:this.H,effect:a,metadata_only:!1},null,"w")};
g.h.oF=function(a){g.uf("EDITOR_PROGRESS_FEEDBACK_KEY",a.feedback_key);Rwa()};
g.h.SN=function(){g.S(this.C);Swa(this);Hwa(this.H,this.F.join(","))};
g.h.EE=function(){g.S(this.G);Hwa(this.H,this.F.join(","))};
g.h.X=function(){this.D.removeAll();i9.M.X.call(this)};g.Zh(g.uq({name:"www/watch_editor",deps:["www/watch"],page:"watch",init:function(){g.D("WATCH_EDITOR_SHOW_PROCESSING")&&Rwa();g.D("WATCH_EDITOR_SHOW_ENHANCE_CONFIRMATION")&&(j9&&(j9.dispose(),j9=null),j9=new a9);g.D("ENHANCE_SUGGESTIONS")&&(k9||(k9=new i9(g.D("VIDEO_ID",void 0),g.D("ENHANCE_SUGGESTIONS"),g.D("PLAYER_TARGET",void 0))))},
dispose:function(){g9&&(g9.dispose(),g9=null);j9&&(j9.dispose(),j9=null);k9&&(k9.dispose(),k9=null)}}));})(_yt_www);
