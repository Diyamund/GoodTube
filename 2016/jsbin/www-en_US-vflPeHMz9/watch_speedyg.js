(function(g){var window=this;var Uwa=function(){var a=g.vw("speedyg")||{},b=a.lastActivation;a=a.suppressed;b?216E5<(0,g.A)()-new Date(b)?Twa(a):(a++,g.uw("speedyg",{lastActivation:b,suppressed:a},2592E3)):Twa(0)},Twa=function(a){var b={lastActivation:(0,g.A)(),
suppressed:0};g.uw("speedyg",b,2592E3);b=Vwa;var c=Wwa;g.Cu(g.wq("SPEEDYG_INFO"),c,b);g.Dj("speedyg_activation&suppressed="+a)},Vwa,Wwa,Xwa=[];g.Zh(g.uq({name:"www/watch_speedyg",deps:["www/watch"],page:"watch",init:function(){if(!g.C||g.yb(9))if(!g.Yk||g.wb("536.25")){Vwa=g.x("watch7-speedyg-area");Wwa=g.x("speedyg-template");var a=g.CG();a&&a.addEventListener("CONNECTION_ISSUE",Uwa)}},
dispose:function(){var a=g.CG();a&&a.removeEventListener("CONNECTION_ISSUE",Uwa);g.Ig(Xwa);Xwa.length=0}}));})(_yt_www);
