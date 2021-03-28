(function(g){var window=this;var KN=function(){this.C=g.en("li","profile-picture-video-still");Ika(this)},Ika=function(a){(0,g.z)(g.J("dialog-close-button"),function(a){g.H(a,"click",(0,g.t)(this.F,this))},a);
(0,g.z)(a.C,function(a){g.H(a,"click",(0,g.t)(this.D,this))},a)},Jka=function(a){(0,g.z)(a.C,function(a){g.O(a,"selected")},a)};
KN.prototype.D=function(a){Jka(this);a=a.currentTarget;g.N(a,"selected");g.en("input",null,a)[0].checked=!0;g.x("profile-picture-option-still").checked=!0};
KN.prototype.F=function(){g.r("yt.www.account.upload",window.parent).closeOverlay()};g.p("yt.www.account.upload.closeOverlay",function(){g.nA.getInstance().hide()},void 0);
g.p("yt.www.account.upload.reload",function(){window.location.reload()},void 0);
g.p("yt.www.account.upload.init",function(){if(g.x("account-upload-dialog")&&(new KN,window!=window.parent&&/success=True/.test(window.location.search))){var a=g.r("yt.www.account.upload",window.parent);a.closeOverlay();a.reload()}},void 0);
g.Zh(g.uq({name:"www/channels_accountupload",deps:["www/common"],page:["channel"],init:function(){},
dispose:function(){}}));})(_yt_www);
