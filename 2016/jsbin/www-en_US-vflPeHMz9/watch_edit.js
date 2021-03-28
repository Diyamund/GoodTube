(function(g){var window=this;var Ewa=function(){this.G=g.x("watch-headline-title");this.R=g.K("donate-button-renderer");this.la=g.K("watch-title",this.G);this.D=g.x("watch-headline-title-form");this.aa=g.K("yt-alert-content",this.D);this.ia=g.x("watch-headline-title-reset");this.H=g.x("watch-description-text");this.Y=g.x("action-panel-details");this.C=g.jc("watch-video-info-form");this.Yb=g.K("yt-alert-content",this.C);this.Dc=g.x("watch-video-info-submit");this.na=g.x("watch-video-info-reset");this.privacyIcon=g.x("watch-privacy-icon");
this.V=!1;this.K=g.K("eow-description-textarea",this.C);this.N=g.K("eow-privacy-select",this.C);this.W=this.J=null;this.F=[];this.F.push(g.H(this.G,"click",(0,g.t)(this.SL,this)));this.F.push(g.H(this.D,"submit",(0,g.t)(this.cM,this)));this.F.push(g.H(this.ia,"click",(0,g.t)(this.Aq,this)));this.F.push(g.H(this.H,"click",(0,g.t)(function(){this.V||Cwa(this)},this)));
this.F.push(g.H(this.Dc,"click",function(a){a.stopPropagation()}));
this.F.push(g.H(this.C,"submit",(0,g.t)(this.eM,this)));this.F.push(g.H(this.na,"click",(0,g.t)(function(a){a.stopPropagation();Dwa(this,!0)},this)));
this.privacyIcon&&this.F.push(g.H(this.privacyIcon,"click",(0,g.t)(function(a){a.stopPropagation();Cwa(this)},this)))},Dwa=function(a,b){g.Q(a.H);
g.S(a.C);g.N(a.H,"watch-editable");g.O(a.Y,"watch-inline-edit-active");b&&(a.J&&(a.K.value=a.J),a.W&&(g.kp(a.N,a.W),g.Zy.getInstance().wc(a.N)));a.V=!1},Cwa=function(a){-1<a.K.value.indexOf("...")?g.hi("/edit?video_id="+g.D("VIDEO_ID",void 0)):(g.S(a.H),g.Q(a.C),g.O(a.H,"watch-editable"),g.O(a.C,"yt-uix-form-error"),g.N(a.Y,"watch-inline-edit-active"),a.J=a.K.value,a.W=a.N.value,a.C.scrollIntoView(),a.K.select(),a.V=!0)},Fwa=function(a){for(var b in a){var c=g.ln(g.Sn(a[b]));
(0,g.z)(c.childNodes,function(a){if(a.id){var b=g.x(a.id);b&&(b.innerHTML=a.innerHTML,b.className=a.className,b.title=a.title,b.dir=a.dir)}})}},Z8;
g.h=Ewa.prototype;g.h.dispose=function(){g.Ig(this.F);this.F=[]};
g.h.Aq=function(){g.S(this.D);this.R&&g.Q(this.R);g.Q(this.G);g.N(this.la,"watch-editable")};
g.h.SL=function(){g.S(this.G);this.R&&g.S(this.R);g.Q(this.D);g.O(this.la,"watch-editable");g.O(this.D,"yt-uix-form-error");var a=g.K("yt-uix-form-input-text",this.D);a.value=g.Kn(this.G);a.select()};
g.h.cM=function(a){a.preventDefault();g.Jp(this.D,{context:this,onSuccess:this.dM})};
g.h.dM=function(a,b){0<b.errors.length?(g.L(this.aa,b.errors[0]),g.N(this.D,"yt-uix-form-error")):(this.Aq(),Fwa(b.html))};
g.h.eM=function(a){a.preventDefault();g.Jp(this.C,{context:this,onSuccess:this.fM})};
g.h.fM=function(a,b){0<b.errors.length?(g.L(this.Yb,b.errors[0]),g.N(this.C,"yt-uix-form-error")):(Dwa(this),Fwa(b.html))};g.Zh(g.uq({name:"www/watch_edit",deps:["www/watch"],page:"watch",init:function(){!Z8&&g.D("WATCH_EDIT_ENABLED")&&(Z8=new Ewa)},
dispose:function(){Z8&&(Z8.dispose(),Z8=null)}}));})(_yt_www);
