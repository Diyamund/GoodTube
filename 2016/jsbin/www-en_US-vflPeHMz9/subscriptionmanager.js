(function(g){var window=this;var CR=[];var DR=!1;g.Zh(g.uq({name:"www/subscriptionmanager",deps:["www/common"],page:["subscription_manager"],init:function(){if(!DR&&(DR=!0,g.x("subscription-manager-list"))){var a=g.K("setting-dialog-container");a&&(!(a=g.K("yt-dialog",a))||"ID_MERGE_FEATURE_TYPE"in g.tf||(g.nA.getInstance().show(a),a=g.rA(),CR.push(g.H(g.K("overlay-confirmation-save-button",a),"click",g.wD)),CR.push(g.P(a,"click",g.sD,"email-on-upload")),CR.push(g.P(window.document.body,"click",g.tD,"updates-frequency-choice"))))}},
dispose:function(){g.Ig(CR);CR=[]}}));})(_yt_www);
