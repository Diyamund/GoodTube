function main(gtstyle) {
    function initCleanDocument(names) {
        var element = document.documentElement;
        for (var i = element.attributes.length - 1; i >= 0; i--) {
            element.removeAttribute(element.attributes[i].name);
        }
        for (var i = 0; i < names.length; i++) {
            var elements = document.getElementsByTagName(names[i]);
            if (elements.length === 0)
                document.documentElement.appendChild(document.createElement(names[i]));
        }
        window.stop();
    }

    function readFile(name, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', name, true);
        request.onload = function() {
            callback(this.responseText);
        };
        request.send();
    }

    function InjectTemplateHtml(names, dom) {
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            var fragment = dom.getElementsByName(name)[0];
            var attributes = fragment.attributes;
            var aimElement = document[name];
            aimElement.insertBefore(fragment.content, aimElement.firstChild);
            for (var j = 1; j < attributes.length; j++) {
                var attribute = attributes[j];
                aimElement.setAttribute(attribute.name, attribute.value);
            }
        }
    }

    function InjectTemplateJS(template, index, callback) {
        var script = document.createElement('script');
        script.type = "text/javascript";
        if (template.name !== null)
            script.name = template.name;
        if (template.external) {
            script.src = template.src;
            script.onload = function() {
                callback(index)
            };
        } else {
            script.textContent = template.content;
        }
        document.head.appendChild(script)
        if (!template.external)
            callback(index);
    }

    var documentElements = ['head', 'body'];
    initCleanDocument(documentElements);
	
	var continueLoad = 0;
	
	// declare new page
	
	if (gtstyle == 2016) {



let watchPageBase = [ `

<!DOCTYPE html><html lang="en" data-cast-api-enabled="true"><head><style name="www-roboto" nonce="">@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v16/OLffGBTaF0XFOW1gnuHF0Z0EAVxt0G0biEntp43Qt6E.ttf)format('truetype');}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v16/RxZJdnzeo3R5zSexge8UUaCWcynf_cDxXwCLxiixG1c.ttf)format('truetype');}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf)format('truetype');}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v16/W4wDsBUluyw0tK3tykhXEfesZW2xOQ-xsNqO47m55DA.ttf)format('truetype');}</style><script name="www-roboto" nonce="">if (document.fonts && document.fonts.load) {document.fonts.load("400 10pt Roboto", "E");document.fonts.load("500 10pt Roboto", "E");}</script><script>var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},info: {}});},now: window.performance && window.performance.timing &&window.performance.now ? function() {return window.performance.timing.navigationStart + window.performance.now();} : function() {return (new Date()).getTime();},tick: function(l, t, n) {ticks = ytcsi.gt(n).tick;var v = t || ytcsi.now();if (ticks[l]) {ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);ticks['_' + l].push(v);}ticks[l] = v;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startTick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}var slt = function(el, t) {setTimeout(function() {var n = ytcsi.now();el.loadTime = n;if (el.slt) {el.slt();}}, t);};w.__ytRIL = function(el) {if (!el.getAttribute('data-thumb')) {if (w.requestAnimationFrame) {w.requestAnimationFrame(function() {slt(el, 0);});} else {slt(el, 16);}}};})(window, document);</script><script>var ytcfg = {d: function() {return (window.yt && yt.config_) || ytcfg.data_ || (ytcfg.data_ = {});},get: function(k, o) {return (k in ytcfg.d()) ? ytcfg.d()[k] : o;},set: function() {var a = arguments;if (a.length > 1) {ytcfg.d()[a[0]] = a[1];} else {for (var k in a[0]) {ytcfg.d()[k] = a[0][k];}}}};</script>  <script>ytcfg.set("EXP_HTML5_SERVERSIDE_IGNORE_BISCOTTI_ID_ON_RETRY", false);ytcfg.set("LACT", null);</script>
  




  <script>
        (function(){var b={a:"content-snap-width-1",b:"content-snap-width-2",c:"content-snap-width-3"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}
function h(a){var c=f().concat(["guide-pinned","show-guide"]),e=c.length,g=[];a.replace(/\S+/g,function(a){for(var d=0;d<e;d++)if(a==c[d])return;g.push(a)});
return g}
;function k(a,c,e){var g=document.getElementsByTagName("html")[0],d=h(g.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(d.push("guide-pinned"),c&&d.push("show-guide"));e&&(e=(window.innerWidth||document.documentElement.clientWidth)-21-50,1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(e-=230),d.push(1262<=e?"content-snap-width-3":1056<=e?"content-snap-width-2":"content-snap-width-1"));g.className=d.join(" ")}
var l=["yt","www","masthead","sizing","runBeforeBodyIsReady"],m=this;l[0]in m||!m.execScript||m.execScript("var "+l[0]);for(var n;l.length&&(n=l.shift());)l.length||void 0===k?m[n]&&m[n]!==Object.prototype[n]?m=m[n]:m=m[n]={}:m[n]=k;}).call(this);

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(false,false,true);
  </script>

      <script src="/yts/jsbin/scheduler-vflR9Jc71/scheduler.js" type="text/javascript" name="scheduler/scheduler"></script>


    <script>var ytimg = {};ytimg.count = 1;ytimg.preload = function(src) {var img = new Image();var count = ++ytimg.count;ytimg[count] = img;img.onload = img.onerror = function() {delete ytimg[count];};img.src = src;};</script>


          <script src="/yts/jsbin/player-vfltmLGsd/en_US/base.js" name="player/base"></script>



  <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-core-webp-vflvPA_5f.css" name="www-core">
        <link rel="stylesheet" href="__MSG_@@extension_id__/2016/player-vflv7jv3p/www-player.css" name="player/www-player">

  <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-pageframe-vfl1hU8te.css" name="www-pageframe">
      <script>ytimg.preload("https:\/\/r6---sn-o097znld.googlevideo.com\/generate_204?conn2");ytimg.preload("https:\/\/r6---sn-o097znld.googlevideo.com\/generate_204");</script>


<title>WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1 - YouTube</title><link rel="canonical" href="https://www.youtube.com/watch?v=iOztnsBPrAA"><link rel="alternate" media="handheld" href="https://m.youtube.com/watch?v=iOztnsBPrAA"><link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.youtube.com/watch?v=iOztnsBPrAA">      <meta name="title" content="WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1">

      <meta name="description" content="No other game has given me a greater feeling of dread than this one. Five Nights at Freddy&#39;s is incredibly unique and takes an approach to horror that I&#39;ve n...">

      <meta name="keywords" content="Scary Games, Scary Moments, Scariest Game Ever, scary, horror, gameplay, reactions, screams, screaming, scared, creepy, creepypasta, five nights at freddy&#39;s,...">

<link rel="manifest" href="/manifest.json"><link rel="shortlink" href="https://youtu.be/iOztnsBPrAA"><link rel="search" type="application/opensearchdescription+xml" href="https://www.youtube.com/opensearch?locale=en_US" title="YouTube Video Search"><link rel="shortcut icon" href="https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico" type="image/x-icon">     <link rel="icon" href="/yts/img/favicon_32-vfl8NGn4k.png" sizes="32x32"><link rel="icon" href="/yts/img/favicon_48-vfl1s0rGh.png" sizes="48x48"><link rel="icon" href="/yts/img/favicon_96-vfldSA3ca.png" sizes="96x96"><link rel="icon" href="/yts/img/favicon_144-vflWmzoXw.png" sizes="144x144"><meta name="theme-color" content="#e62117">        <link rel="alternate" href="android-app://com.google.android.youtube/http/www.youtube.com/watch?v=iOztnsBPrAA">
    <link rel="alternate" href="ios-app://544007664/vnd.youtube/www.youtube.com/watch?v=iOztnsBPrAA">

      <link rel="alternate" type="application/json+oembed" href="http://www.youtube.com/oembed?format=json&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiOztnsBPrAA" title="WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1">
  <link rel="alternate" type="text/xml+oembed" href="http://www.youtube.com/oembed?format=xml&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiOztnsBPrAA" title="WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1">

        <meta property="og:site_name" content="YouTube">
      <meta property="og:url" content="https://www.youtube.com/watch?v=iOztnsBPrAA">
    <meta property="og:title" content="WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1">
    <meta property="og:image" content="https://i.ytimg.com/vi/iOztnsBPrAA/maxresdefault.jpg">

      <meta property="og:description" content="No other game has given me a greater feeling of dread than this one. Five Nights at Freddy&#39;s is incredibly unique and takes an approach to horror that I&#39;ve n...">

    <meta property="al:ios:app_store_id" content="544007664">
    <meta property="al:ios:app_name" content="YouTube">
      <meta property="al:ios:url" content="vnd.youtube://www.youtube.com/watch?v=iOztnsBPrAA&amp;feature=applinks">

      <meta property="al:android:url" content="vnd.youtube://www.youtube.com/watch?v=iOztnsBPrAA&amp;feature=applinks">
    <meta property="al:android:app_name" content="YouTube">
    <meta property="al:android:package" content="com.google.android.youtube">
    <meta property="al:web:url" content="https://www.youtube.com/watch?v=iOztnsBPrAA&amp;feature=applinks">

    <meta property="og:type" content="video">
        <meta property="og:video:url" content="https://www.youtube.com/embed/iOztnsBPrAA">
        <meta property="og:video:secure_url" content="https://www.youtube.com/embed/iOztnsBPrAA">
        <meta property="og:video:type" content="text/html">
        <meta property="og:video:width" content="1280">
        <meta property="og:video:height" content="720">
        <meta property="og:video:url" content="http://www.youtube.com/v/iOztnsBPrAA?version=3&amp;autohide=1">
        <meta property="og:video:secure_url" content="https://www.youtube.com/v/iOztnsBPrAA?version=3&amp;autohide=1">
        <meta property="og:video:type" content="application/x-shockwave-flash">
        <meta property="og:video:width" content="1280">
        <meta property="og:video:height" content="720">

        <meta property="og:video:tag" content="Scary Games">
        <meta property="og:video:tag" content="Scary Moments">
        <meta property="og:video:tag" content="Scariest Game Ever">
        <meta property="og:video:tag" content="scary">
        <meta property="og:video:tag" content="horror">
        <meta property="og:video:tag" content="gameplay">
        <meta property="og:video:tag" content="reactions">
        <meta property="og:video:tag" content="screams">
        <meta property="og:video:tag" content="screaming">
        <meta property="og:video:tag" content="scared">
        <meta property="og:video:tag" content="creepy">
        <meta property="og:video:tag" content="creepypasta">
        <meta property="og:video:tag" content="five nights at freddy&#39;s">
        <meta property="og:video:tag" content="markiplier">
        <meta property="og:video:tag" content="markiplier horror">
        <meta property="og:video:tag" content="horror games">
        <meta property="og:video:tag" content="funny">
        <meta property="og:video:tag" content="scream">
        <meta property="og:video:tag" content="five nights">
        <meta property="og:video:tag" content="video games">
        <meta property="og:video:tag" content="free games">
        <meta property="og:video:tag" content="jumpscares">

    <meta property="fb:app_id" content="87741124305">

        <meta name="twitter:card" content="player">
    <meta name="twitter:site" content="@youtube">
    <meta name="twitter:url" content="https://www.youtube.com/watch?v=iOztnsBPrAA">
    <meta name="twitter:title" content="WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1">
    <meta name="twitter:description" content="No other game has given me a greater feeling of dread than this one. Five Nights at Freddy&#39;s is incredibly unique and takes an approach to horror that I&#39;ve n...">
    <meta name="twitter:image" content="https://i.ytimg.com/vi/iOztnsBPrAA/maxresdefault.jpg">
    <meta name="twitter:app:name:iphone" content="YouTube">
    <meta name="twitter:app:id:iphone" content="544007664">
    <meta name="twitter:app:name:ipad" content="YouTube">
    <meta name="twitter:app:id:ipad" content="544007664">
      <meta name="twitter:app:url:iphone" content="vnd.youtube://www.youtube.com/watch?v=iOztnsBPrAA&amp;feature=applinks">
      <meta name="twitter:app:url:ipad" content="vnd.youtube://www.youtube.com/watch?v=iOztnsBPrAA&amp;feature=applinks">
    <meta name="twitter:app:name:googleplay" content="YouTube">
    <meta name="twitter:app:id:googleplay" content="com.google.android.youtube">
    <meta name="twitter:app:url:googleplay" content="https://www.youtube.com/watch?v=iOztnsBPrAA">
      <meta name="twitter:player" content="https://www.youtube.com/embed/iOztnsBPrAA">
      <meta name="twitter:player:width" content="1280">
      <meta name="twitter:player:height" content="720">

      <meta name=attribution content=RPMNetworks/>  
        <link rel="stylesheet" href="/yts/cssbin/www-watch-transcript-vflp9_n_i.css" name="www-watch-transcript">

<style>.yt-uix-button-primary, .yt-uix-button-primary[disabled], .yt-uix-button-primary[disabled]:hover, .yt-uix-button-primary[disabled]:active, .yt-uix-button-primary[disabled]:focus { background-color: #167ac6; }</style></head>  <body dir="ltr" id="body" class="  ltr    exp-responsive exp-scrollable-guide exp-search-big-thumbs   site-center-aligned site-as-giant-card appbar-hidden    visibility-logging-enabled   not-nirvana-dogfood  not-yt-legacy-css    flex-width-enabled      flex-width-enabled-snap    delayed-frame-styles-not-in  " data-spf-name="watch">
<div id="early-body"></div><div id="body-container"><div id="a11y-announcements-container" role="alert"><div id="a11y-announcements-message"></div></div><form name="logoutForm" method="POST" action="/logout"><input type="hidden" name="action_logout" value="1"></form><div id="masthead-positioner">  <div id="ticker-content">
        

  </div>
  <div id="yt-masthead-container" class="clearfix yt-base-gutter">  <button id="a11y-skip-nav" class="skip-nav" data-target-id="main" tabindex="3">
Skip navigation
  </button>
<div id="yt-masthead"><div class="yt-masthead-logo-container ">  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text yt-uix-button-empty yt-uix-button-has-icon appbar-guide-toggle appbar-guide-clickable-ancestor" type="button" onclick=";return false;" id="appbar-guide-button" aria-label="Guide" aria-controls="appbar-guide-menu"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-appbar-guide yt-sprite"></span></span></button>
  <div id="appbar-main-guide-notification-container"></div>
<span id="yt-masthead-logo-fragment"><a href="/" class="masthead-logo-renderer yt-uix-sessionlink      spf-link " data-sessionlink="itct=CAUQsV4iEwiP757FgPfTAhUV0X4KHS_3BHAo-B0"  id="logo-container" title="YouTube Home">  <span class="logo masthead-logo-renderer-logo yt-sprite" title="YouTube Home"></span>
</a></span></div><div id="yt-masthead-signin"><a href="//www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-opacity yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw&amp;feature=mhsb" id="upload-btn" title="Upload"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-material-upload yt-sprite"></span></span></a><div class="signin-container "><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="button" onclick=";window.location.href=this.getAttribute(&#39;href&#39;);return false;" role="link" href="https://accounts.google.com/ServiceLogin?passive=true&amp;service=youtube&amp;uilel=3&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252Fwatch%253Fv%253DiOztnsBPrAA%26feature%3Dsign_in_button%26hl%3Den"><span class="yt-uix-button-content">Sign in</span></button></div></div><div id="yt-masthead-content"><form id="masthead-search" class="  search-form consolidated-form  vve-check" action="/results" onsubmit="if (document.getElementById(&#39;masthead-search-term&#39;).value == &#39;&#39;) return false;" data-clicktracking="CAEQ7VAiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0" data-visibility-tracking="CAEQ7VAiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component search-button" type="submit" onclick="if (document.getElementById(&#39;masthead-search-term&#39;).value == &#39;&#39;) return false; document.getElementById(&#39;masthead-search&#39;).submit(); return false;;return true;" id="search-btn" dir="ltr" tabindex="2"><span class="yt-uix-button-content">Search</span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><input id="masthead-search-term" autocomplete="off"  onkeydown="if (!this.value &amp;&amp; (event.keyCode == 40 || event.keyCode == 32 || event.keyCode == 34)) {this.onkeydown = null; this.blur();}" class="search-term masthead-search-renderer-input yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" placeholder="Search" title="Search" aria-label="Search"></div></form></div></div></div>
    <div id="masthead-appbar-container" class="clearfix"><div id="masthead-appbar"><div id="appbar-content" class=""></div></div></div>

</div><div id="masthead-positioner-height-offset"></div><div id="page-container"><div id="page" class="  watch        video-iOztnsBPrAA clearfix"><div id="guide" class="yt-scrollbar">    <div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-layout appbar-guide-clickable-ancestor">
    <div id="guide-container">
      <div class="guide-module-content guide-module-loading">
          <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

      </div>
    </div>
  </div>

</div><div class="alerts-wrapper"><div id="alerts" class="content-alignment">    
  <div id="editor-progress-alert-container"></div>
  <div class="yt-alert yt-alert-default yt-alert-warn hid " id="editor-progress-alert-template">  <div class="yt-alert-icon">
    <span class="icon master-sprite yt-sprite"></span>
  </div>
<div class="yt-alert-content" role="alert"></div><div class="yt-alert-buttons"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-close close yt-uix-close" type="button" onclick=";return false;" aria-label="Close" data-close-parent-class="yt-alert"><span class="yt-uix-button-content">Close</span></button></div></div>

    <div id="edit-confirmation-alert"></div>
  <div class="yt-alert yt-alert-actionable yt-alert-info hid " id="edit-confirmation-alert-template">  <div class="yt-alert-icon">
    <span class="icon master-sprite yt-sprite"></span>
  </div>
<div class="yt-alert-content" role="alert">    <div class="yt-alert-message" tabindex="0">
    </div>
</div><div class="yt-alert-buttons">  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-alert-info yt-uix-button-has-icon edit-confirmation-yes" type="button" onclick=";return false;"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-like-invert yt-sprite"></span></span><span class="yt-uix-button-content">Yeah, keep it</span></button>
  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-alert-info yt-uix-button-has-icon edit-confirmation-no" type="button" onclick=";return false;"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-unlike-invert yt-sprite"></span></span><span class="yt-uix-button-content">Undo</span></button>
<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-close close yt-uix-close" type="button" onclick=";return false;" aria-label="Close" data-close-parent-class="yt-alert"><span class="yt-uix-button-content">Close</span></button></div></div>



</div></div><div id="header"></div><div id="player" class="  content-alignment       watch-small  " role="complementary"><div id="theater-background" class="player-height"></div>  <div id="player-mole-container">
    <div id="player-unavailable" class="    hid    player-width player-height    player-unavailable ">
              <img class="icon meh" src="/yts/img/pixel-vfl3z5WfW.gif" data-icon="/yts/img/meh7-vflGevej7.png" alt="">
  <div class="content">
    <h1 id="unavailable-message" class="message">
              This video is unavailable.

    </h1>
    <div id="unavailable-submessage" class="submessage">
    </div>
  </div>


    </div>

    <div id="player-api" class="player-width player-height off-screen-target player-api" tabIndex="-1"></div>
        <script>if (window.ytcsi) {window.ytcsi.tick("cfg", null, '');}</script>
    <script>var ytplayer = ytplayer || {};ytplayer.config = {"attrs":{"id":"movie_player"},"url":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-vfl4LZpfB\/watch_as3.swf","args":{"iv3_module":"1","thumbnail_url":"https:\/\/i.ytimg.com\/vi\/iOztnsBPrAA\/default.jpg","midroll_freqcap":"420.0","referrer":"http:\/\/www.youtube.com\/watch?v=iOztnsBPrAA","default_audio_track_index":"0","c":"WEB","ad_tag":"https:\/\/pubads.g.doubleclick.net\/gampad\/ads?ad_rule=0\u0026env=vp\u0026gdfp_req=1\u0026iu=\/4061\/com.ytpwmpu.gadgetsandgames\/3406642\/573DCT7CRAH4SELOUZUOZTFMOE\u0026loeid=9451827,9457141,9469556,9469911\u0026osd=2\u0026output=xml_vast3\u0026pucrd=CgYIABAAGAA\u0026scor=1\u0026scp=av%3D1%26kpeid%3D7_YxT-KID8kRbqZo7MyscQ%26kpid%3D3406642%26kpu%3DmarkiplierGAME%26kvid%3DiOztnsBPrAA%26mpvid%3DY6qxqa3kGfqE8mNy%26ssl%3D1%26afv%3D1%26dbp%3DChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA%26dc_yt%3D1%26excl_cat%3D3406642%26k2%3D3,8,36,41,211,613,925%26k5%3D3_8_36_41_211_613_925%26kga%3D-1%26kgg%3D-1%26kgpt%3D1%26klg%3Den%26kmyd%3Dwatch-longform-ad%26ko%3Dp%26kpco%3D12045%26kr%3DF%26kvlg%3Den%26kvz%3D205%26longads%3D1%26nlfb%3D1%26p13_rm%3D1%26pos%3Dpre%26yt3pav%3D1%26ytcat%3D20%26ytdevice%3D1%26ytdevicever%3D1.20170515%26ytexp%3D9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833%26yt_ec%3D5%26yt_ec2%3D15%26yt_vrallowed%3D1\u0026sdki=18803DAD\u0026sz=480x360%7C480x361\u0026unviewed_position_start=1\u0026vid=iOztnsBPrAA\u0026vpos=preroll\u0026ytdevice=1\u0026yt_pt=APb3F2-eeD4fzhCXXljaaq2QAiZ6qRUd31ZfE7Yi_FUaGV2z8MvvbsC5yrCY_T9_cCwhHXezrYJG5LJzOqlwJmEDHe9zXmsu4He8_B4Vo6m1QQnAPOom5h75sOMqhqX4MyX_jwtNCUQBAa7nefHLMeHzHZK0hRGt1lk43aKqtllChNeft-u5Z9BL7zO5TlLGDTH_S0degEWQXWhpM6pS-s9fVAyOKIiuRq9-Ontq0D0AVUNshRJ2zctm4Uo-fH_3ELsQdMBoFrsD54s45pzeyAbOoa1zm0BSvMSnlVudHWG86KPuxASTvRLqHCF6S7YdE7kU4fQ038zrolZQKZWqu1LC0DHbyi9bD1U5dHVs_ixlyeOmE37PNgZIZQCtqm3g2kMOC_jP1UVpBZixkVfU7JcS3graUfnpDspFldKuLlep-dBQqi2v9jh1kWuYOOjFGIu3cIgjVIJhEv0atHZD","eventid":"IUwcWc_aFJWi-wOv7pOABw","caption_audio_tracks":"i=1%2C2%2C0\u0026v=0","csi_page_type":"watch,watch7ad_html5","sffb":true,"fade_out_duration_milliseconds":"1000","player_response":"{\"videoDetails\":{\"thumbnail\":{\"thumbnails\":[{\"url\":\"https:\/\/i.ytimg.com\/vi\/iOztnsBPrAA\/hqdefault.jpg?custom=true\\u0026w=168\\u0026h=94\\u0026stc=true\\u0026jpg444=true\\u0026jpgq=90\\u0026sp=68\\u0026sigh=TL_zN822M3KU_BOsTvRBBA6XNkQ\",\"width\":168,\"height\":94},{\"url\":\"https:\/\/i.ytimg.com\/vi\/iOztnsBPrAA\/hqdefault.jpg?custom=true\\u0026w=196\\u0026h=110\\u0026stc=true\\u0026jpg444=true\\u0026jpgq=90\\u0026sp=68\\u0026sigh=DzZP-tibq6W5lHj9BfJgwLF5BWM\",\"width\":196,\"height\":110},{\"url\":\"https:\/\/i.ytimg.com\/vi\/iOztnsBPrAA\/hqdefault.jpg?custom=true\\u0026w=246\\u0026h=138\\u0026stc=true\\u0026jpg444=true\\u0026jpgq=90\\u0026sp=68\\u0026sigh=FZSKprsKtytb1wZS77H--CJKXPM\",\"width\":246,\"height\":138},{\"url\":\"https:\/\/i.ytimg.com\/vi\/iOztnsBPrAA\/hqdefault.jpg?custom=true\\u0026w=336\\u0026h=188\\u0026stc=true\\u0026jpg444=true\\u0026jpgq=90\\u0026sp=68\\u0026sigh=Na7rFNNh4icN1zhokfmXZtXNr5U\",\"width\":336,\"height\":188}]}},\"adSafetyReason\":{\"isRemarketingEnabled\":true,\"isFocEnabled\":true}}","mpvid":"Y6qxqa3kGfqE8mNy","cr":"US","timestamp":"1495026721","vmap":"\u003c?xml version=\"1.0\" encoding=\"UTF-8\"?\u003e\u003cvmap:VMAP xmlns:vmap=\"http:\/\/www.iab.net\/videosuite\/vmap\" xmlns:yt=\"http:\/\/youtube.com\" version=\"1.0\"\u003e\u003cvmap:AdBreak breakType=\"linear\" timeOffset=\"start\"\u003e\u003cvmap:AdSource allowMultipleAds = \"false\"\u003e\u003cvmap:VASTData\u003e\u003cVAST version=\"3.0\"\u003e\u003cAd\u003e\u003cWrapper\u003e\u003cAdSystem version=\"1\"\u003eYT:DoubleClick\u003c\/AdSystem\u003e\u003cVASTAdTagURI\u003e\u003c![CDATA[https:\/\/pubads.g.doubleclick.net\/gampad\/ads?ad_rule=0\u0026env=vp\u0026gdfp_req=1\u0026iu=\/4061\/com.ytpwmpu.gadgetsandgames\/3406642\/573DCT7CRAH4SELOUZUOZTFMOE\u0026loeid=9451827,9457141,9469556,9469911\u0026osd=2\u0026output=xml_vast3\u0026pucrd=CgYIABAAGAA\u0026scor=1\u0026scp=av%3D1%26kpeid%3D7_YxT-KID8kRbqZo7MyscQ%26kpid%3D3406642%26kpu%3DmarkiplierGAME%26kvid%3DiOztnsBPrAA%26mpvid%3DY6qxqa3kGfqE8mNy%26ssl%3D1%26afv%3D1%26dbp%3DChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA%26dc_yt%3D1%26excl_cat%3D3406642%26k2%3D3,8,36,41,211,613,925%26k5%3D3_8_36_41_211_613_925%26kga%3D-1%26kgg%3D-1%26kgpt%3D1%26klg%3Den%26kmyd%3Dwatch-longform-ad%26ko%3Dp%26kpco%3D12045%26kr%3DF%26kvlg%3Den%26kvz%3D205%26longads%3D1%26nlfb%3D1%26p13_rm%3D1%26pos%3Dpre%26yt3pav%3D1%26ytcat%3D20%26ytdevice%3D1%26ytdevicever%3D1.20170515%26ytexp%3D9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833%26yt_ec%3D5%26yt_ec2%3D15%26yt_vrallowed%3D1\u0026sdki=18803DAD\u0026sz=480x360%7C480x361\u0026unviewed_position_start=1\u0026vid=iOztnsBPrAA\u0026vpos=preroll\u0026ytdevice=1\u0026yt_pt=APb3F2-eeD4fzhCXXljaaq2QAiZ6qRUd31ZfE7Yi_FUaGV2z8MvvbsC5yrCY_T9_cCwhHXezrYJG5LJzOqlwJmEDHe9zXmsu4He8_B4Vo6m1QQnAPOom5h75sOMqhqX4MyX_jwtNCUQBAa7nefHLMeHzHZK0hRGt1lk43aKqtllChNeft-u5Z9BL7zO5TlLGDTH_S0degEWQXWhpM6pS-s9fVAyOKIiuRq9-Ontq0D0AVUNshRJ2zctm4Uo-fH_3ELsQdMBoFrsD54s45pzeyAbOoa1zm0BSvMSnlVudHWG86KPuxASTvRLqHCF6S7YdE7kU4fQ038zrolZQKZWqu1LC0DHbyi9bD1U5dHVs_ixlyeOmE37PNgZIZQCtqm3g2kMOC_jP1UVpBZixkVfU7JcS3graUfnpDspFldKuLlep-dBQqi2v9jh1kWuYOOjFGIu3cIgjVIJhEv0atHZD]]\u003e\u003c\/VASTAdTagURI\u003e\u003cImpression\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=2\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026asr=CgBYAXAB\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Impression\u003e\u003cError\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=5\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026blocking_error=[BLOCKING_ERROR]\u0026error_msg=[ERROR_MSG]\u0026ima_error=[IMA_ERROR]\u0026internal_id=[INTERNAL_ID]\u0026error_code=[YT_ERROR_CODE]\u0026aqi=]]\u003e\u003c\/Error\u003e\u003cCreatives\u003e\u003cCreative\u003e\u003cLinear\u003e\u003cTrackingEvents\u003e\u003cTracking event=\"skip\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=7\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026i_x=[I_X]\u0026i_y=[I_Y]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003cTracking event=\"complete\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=3\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003cTracking event=\"progress\" offset=\"00:00:30.000\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=8\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003c\/TrackingEvents\u003e\u003cVideoClicks\u003e\u003cClickTracking\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=6\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026i_x=[I_X]\u0026i_y=[I_Y]\u0026aqi=]]\u003e\u003c\/ClickTracking\u003e\u003c\/VideoClicks\u003e\u003c\/Linear\u003e\u003c\/Creative\u003e\u003c\/Creatives\u003e\u003cExtensions\u003e\u003cExtension type=\"waterfall\" fallback_index=\"1\"\/\u003e\u003cExtension type=\"activeview\"\u003e\u003cCustomTracking\u003e\u003cTracking event=\"viewable_impression\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=11\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003c\/CustomTracking\u003e\u003c\/Extension\u003e\u003c\/Extensions\u003e\u003c\/Wrapper\u003e\u003c\/Ad\u003e\u003cAd\u003e\u003cWrapper\u003e\u003cAdSystem version=\"1\"\u003eYT:AdSense\u003c\/AdSystem\u003e\u003cVASTAdTagURI\u003e\u003c![CDATA[https:\/\/googleads.g.doubleclick.net\/pagead\/ads?ad_type=skippablevideo_bumpervideo\u0026channel=Vertical_211%2BVertical_3%2BVertical_36%2BVertical_41%2BVertical_613%2BVertical_8%2BVertical_925%2Bafv_instream%2Bafv_instream_us%2Bafv_user_id_7_YxT-KID8kRbqZo7MyscQ%2Bafv_user_markipliergame%2Byt_bs1%2Byt_bumpers%2Byt_cid_3406642%2Byt_mabv%2Byt_mpvid_Y6qxqa3kGfqE8mNy%2Byt_no_360%2Byt_no_ap%2Byt_no_wa%2Bytdevice_1%2Bytdevicever_1.20170515%2Bytel_detailpage%2Bytps_default\u0026client=ca-pub-6219811747049371\u0026dbp=ChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA\u0026description_url=http%3A%2F%2Fwww.youtube.com%2Fvideo%2FiOztnsBPrAA\u0026eid=56702193\u0026hl=en\u0026host=ca-host-pub-4184977541492624\u0026ht_id=3660190\u0026loeid=9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833\u0026max_ad_duration=15000\u0026osd=2\u0026pucrd=CgYIABAAGAA\u0026sdki=18803DAD\u0026url=http%3A%2F%2Fwww.youtube.com%2Fvideo%2FiOztnsBPrAA\u0026video_cpm=6000000\u0026videoad_start_delay=0\u0026v_p=DZQqfD8lIvVVRA%3D%3D\u0026ytdevice=1\u0026ytdevicever=1.20170515\u0026yt_pt=APb3F2-eeD4fzhCXXljaaq2QAiZ6qRUd31ZfE7Yi_FUaGV2z8MvvbsC5yrCY_T9_cCwhHXezrYJG5LJzOqlwJmEDHe9zXmsu4He8_B4Vo6m1QQnAPOom5h75sOMqhqX4MyX_jwtNCUQBAa7nefHLMeHzHZK0hRGt1lk43aKqtllChNeft-u5Z9BL7zO5TlLGDTH_S0degEWQXWhpM6pS-s9fVAyOKIiuRq9-Ontq0D0AVUNshRJ2zctm4Uo-fH_3ELsQdMBoFrsD54s45pzeyAbOoa1zm0BSvMSnlVudHWG86KPuxASTvRLqHCF6S7YdE7kU4fQ038zrolZQKZWqu1LC0DHbyi9bD1U5dHVs_ixlyeOmE37PNgZIZQCtqm3g2kMOC_jP1UVpBZixkVfU7JcS3graUfnpDspFldKuLlep-dBQqi2v9jh1kWuYOOjFGIu3cIgjVIJhEv0atHZD\u0026yt_vis=0]]\u003e\u003c\/VASTAdTagURI\u003e\u003cImpression\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=2\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026asr=CgBYAXAB\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Impression\u003e\u003cError\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=5\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026blocking_error=[BLOCKING_ERROR]\u0026error_msg=[ERROR_MSG]\u0026ima_error=[IMA_ERROR]\u0026internal_id=[INTERNAL_ID]\u0026error_code=[YT_ERROR_CODE]\u0026aqi=]]\u003e\u003c\/Error\u003e\u003cCreatives\u003e\u003cCreative\u003e\u003cLinear\u003e\u003cTrackingEvents\u003e\u003cTracking event=\"skip\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=7\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026i_x=[I_X]\u0026i_y=[I_Y]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003cTracking event=\"complete\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=3\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003cTracking event=\"progress\" offset=\"00:00:30.000\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=8\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003c\/TrackingEvents\u003e\u003cVideoClicks\u003e\u003cClickTracking\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=6\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026i_x=[I_X]\u0026i_y=[I_Y]\u0026aqi=]]\u003e\u003c\/ClickTracking\u003e\u003c\/VideoClicks\u003e\u003c\/Linear\u003e\u003c\/Creative\u003e\u003c\/Creatives\u003e\u003cExtensions\u003e\u003cExtension type=\"waterfall\" fallback_index=\"2\"\/\u003e\u003cExtension type=\"activeview\"\u003e\u003cCustomTracking\u003e\u003cTracking event=\"viewable_impression\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=11\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026format=[FORMAT_NAMESPACE]_[FORMAT_TYPE]_[FORMAT_SUBTYPE]\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]\u0026ad_cpn=[AD_CPN]\u0026ad_id=[AD_ID]\u0026ad_len=[AD_LEN]\u0026ad_mt=[AD_MT]\u0026ad_sys=[AD_SYS]\u0026ad_v=[AD_V]\u0026aqi=]]\u003e\u003c\/Tracking\u003e\u003c\/CustomTracking\u003e\u003c\/Extension\u003e\u003c\/Extensions\u003e\u003c\/Wrapper\u003e\u003c\/Ad\u003e\u003c\/VAST\u003e\u003c\/vmap:VASTData\u003e\u003c\/vmap:AdSource\u003e\u003cvmap:TrackingEvents\u003e\u003cvmap:Tracking event=\"error\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=1\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]]]\u003e\u003c\/vmap:Tracking\u003e\u003c\/vmap:TrackingEvents\u003e\u003cvmap:Extensions\u003e\u003cvmap:Extension type=\"YouTube\"\u003e\u003cyt:BreakProperty break_type=\"BREAK_TYPE_PRE_ROLL\"\/\u003e\u003c\/vmap:Extension\u003e\u003c\/vmap:Extensions\u003e\u003c\/vmap:AdBreak\u003e\u003cvmap:AdBreak breakType=\"linear\" timeOffset=\"end\"\u003e\u003cvmap:AdSource allowMultipleAds = \"false\"\u003e\u003cvmap:AdTagURI\u003e\u003c![CDATA[https:\/\/www.youtube.com\/get_midroll_info?ei=IUwcWc_aFJWi-wOv7pOABw\u0026m_pos=-1\u0026index=1\u0026ord=492209182\u0026token=ACfq5hNs98lhtFN7DfLd1jNXxJ8eRkOaE4fmlJZEeAPL4AzKutaPjmydf-XVZbatoY-JHUmmVNo4KCt_nOELz-QdFVD3aPUkn7GFYFJKui_VewRynmKsrOq3WUEblsl_La6ZczSu-ZIuup5IqaIMx7VysE_2erOuSEUXU8EasAts795ucjGKN6NJXydmwT7MymkQYZ1gHOnZnA-s5aI3WXqp-9HCQFBZ3Bqs-2Rb1zV7J5IA4TjJNLfCwRN5OwLh41-NF9M585JiCL4VsM5R90e5S1707ZnzT14okcdJ6omUJJgJKQ65V3Y\u0026ad_block=[AD_BLOCK]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026tsla=[TSLA]\u0026vis=[VIS]\u0026c=WEB\u0026cver=1.20170515]]\u003e\u003c\/vmap:AdTagURI\u003e\u003c\/vmap:AdSource\u003e\u003cvmap:TrackingEvents\u003e\u003cvmap:Tracking event=\"error\"\u003e\u003c![CDATA[https:\/\/www.youtube.com\/api\/stats\/ads?ver=2\u0026ns=1\u0026event=1\u0026device=1\u0026content_v=iOztnsBPrAA\u0026el=detailpage\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026devicever=1.20170515\u0026bti=9454617\u0026break_type=[BREAK_TYPE]\u0026conn=[CONN]\u0026cpn=[CPN]\u0026lact=[LACT]\u0026m_pos=[MIDROLL_POS]\u0026mt=[MT]\u0026p_h=[P_H]\u0026p_w=[P_W]\u0026rwt=[RWT]\u0026sdkv=[SDKV]\u0026slot_pos=[SLOT_POS]\u0026vis=[VIS]\u0026vol=[VOL]\u0026wt=[WT]]]\u003e\u003c\/vmap:Tracking\u003e\u003c\/vmap:TrackingEvents\u003e\u003cvmap:Extensions\u003e\u003cvmap:Extension type=\"YouTube\"\u003e\u003cyt:BreakProperty break_type=\"BREAK_TYPE_POST_ROLL\"\/\u003e\u003c\/vmap:Extension\u003e\u003c\/vmap:Extensions\u003e\u003c\/vmap:AdBreak\u003e\u003cvmap:Extensions\u003e\u003cvmap:Extension type=\"YouTube\"\u003e\u003cTrackingDecoration match=\"^https?:\/\/((([a-z][a-z0-9.-]*\\.)?(youtube|corp\\.google).com\/api\/stats\/ads)|((www\\.)?youtube\\.com\/pagead\/psul))\" headers=\"device,user\"\/\u003e\u003cTrackingMacro match=\"^https?:\/\/(secure\\-uat\\-dpr\\.imrworldwide|secure\\-gg\\.imrworldwide|g\\.scorecardresearch)\\.com\/\" macros=\"device_id\"\/\u003e\u003cRegexUriMacroValidator\u003e\u003cMacroToRegexUris macro=\"NIELSEN_DEVICE_ID\"\u003e\u003cRegexUri value=\"^https?:\/\/(secure\\-uat\\-dpr\\.imrworldwide|secure\\-gg\\.imrworldwide|g\\.scorecardresearch)\\.com\/\"\/\u003e\u003c\/MacroToRegexUris\u003e\u003cMacroToRegexUris macro=\"COMSCORE_DEVICE_ID\"\u003e\u003cRegexUri value=\"^https?:\/\/(secure\\-uat\\-dpr\\.imrworldwide|secure\\-gg\\.imrworldwide|g\\.scorecardresearch)\\.com\/\"\/\u003e\u003c\/MacroToRegexUris\u003e\u003cMacroToRegexUris macro=\"MOAT_INIT\"\u003e\u003cRegexUri value=\"^https?:\/\/yts\\.moatads\\.com\"\/\u003e\u003cRegexUri value=\"^https?:\/\/yts-testing\\.moatads\\.com\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pagead2\\.googlesyndication\\.com\/pagead\/gen_204\"\/\u003e\u003c\/MacroToRegexUris\u003e\u003cMacroToRegexUris macro=\"MOAT_VIEWABILITY\"\u003e\u003cRegexUri value=\"^https?:\/\/[^.]*\\.moatads\\.com\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pagead2\\.googlesyndication\\.com\/pagead\/gen_204\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pubads\\.g\\.doubleclick\\.net\"\/\u003e\u003c\/MacroToRegexUris\u003e\u003cMacroToRegexUris macro=\"IAS_VIEWABILITY\"\u003e\u003cRegexUri value=\"^https?:\/\/pm\\.adsafeprotected\\.com\/youtube\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pm\\.test-adsafeprotected\\.com\/youtube\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pagead2\\.googlesyndication\\.com\/pagead\/gen_204\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pubads\\.g\\.doubleclick\\.net\"\/\u003e\u003c\/MacroToRegexUris\u003e\u003cMacroToRegexUris macro=\"DV_VIEWABILITY\"\u003e\u003cRegexUri value=\"^https?:\/\/e[0-9]+\\.yt\\.srs\\.doubleverify\\.com\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pagead2\\.googlesyndication\\.com\/pagead\/gen_204\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pubads\\.g\\.doubleclick\\.net\"\/\u003e\u003c\/MacroToRegexUris\u003e\u003cMacroToRegexUris macro=\"GOOGLE_VIEWABILITY\"\u003e\u003cRegexUri value=\"^https?:\/\/pagead2\\.googlesyndication\\.com\"\/\u003e\u003cRegexUri value=\"^https?:\/\/pubads\\.g\\.doubleclick\\.net\"\/\u003e\u003cRegexUri value=\"^https?:\/\/googleads\\.g\\.doubleclick\\.net\"\/\u003e\u003cRegexUri value=\"^https?:\/\/([a-z0-9]+\\.)*youtube\\.com\"\/\u003e\u003cRegexUri value=\"^https?:\/\/ad[\\.-]([a-z0-9]+\\.){0,1}doubleclick\\.net\"\/\u003e\u003cRegexUri value=\"^https?:\/\/ade\\.googlesyndication\\.com\"\/\u003e\u003c\/MacroToRegexUris\u003e\u003c\/RegexUriMacroValidator\u003e\u003c\/vmap:Extension\u003e\u003c\/vmap:Extensions\u003e\u003c\/vmap:VMAP\u003e","ismb":"12930000","cl":"156215422","storyboard_spec":"https:\/\/i9.ytimg.com\/sb\/iOztnsBPrAA\/storyboard3_L$L\/$N.jpg|48#27#100#10#10#0#default#I7tXAzC8jbdObfHzusEwDMSEAVU|80#45#108#10#10#10000#M$M#FY8R3ed1_jybWEqHCij8mgj-BcQ|160#90#108#5#5#10000#M$M#cPRbOYrP0csSkeBAFwrkSfpmzSs","video_id":"iOztnsBPrAA","itct":"CAMQu2kiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0=","aftv":true,"core_dbp":"ChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA","innertube_api_key":"AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8","atc":"a=3\u0026b=xAw5IsMV0-_cAFKK5Lk5w4EjvU0\u0026c=1495026721\u0026d=1\u0026e=iOztnsBPrAA\u0026c3a=26\u0026c1a=1\u0026c6a=1\u0026hh=4jfXgkCW2dXQjRSJ8hkQyzYrYyc","fade_in_duration_milliseconds":"1000","ppv_remarketing_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/971134070\/?backend=innertube\u0026cname=1\u0026cver=1_20170515\u0026data=backend%3Dinnertube%3Bcname%3D1%3Bcver%3D1_20170515%3Bdactive%3D0%3Bdynx_itemid%3DiOztnsBPrAA%3Bptype%3Dppv\u0026label=iuZUCLmC72YQ9qiJzwM\u0026ptype=ppv\u0026value=0.081","ad_preroll":"1","allow_embed":"1","baseUrl":"https:\/\/www.youtube.com\/pagead\/viewthroughconversion\/962985656\/","gut_tag":"\/4061\/ytpwmpu\/3406642","t":"1","caption_translation_languages":"lc=af\u0026n=Afrikaans,lc=sq\u0026n=Albanian,lc=am\u0026n=Amharic,lc=ar\u0026n=Arabic,lc=hy\u0026n=Armenian,lc=az\u0026n=Azerbaijani,lc=bn\u0026n=Bangla,lc=eu\u0026n=Basque,lc=be\u0026n=Belarusian,lc=bs\u0026n=Bosnian,lc=bg\u0026n=Bulgarian,lc=my\u0026n=Burmese,lc=ca\u0026n=Catalan,lc=ceb\u0026n=Cebuano,lc=zh-Hans\u0026n=Chinese+%28Simplified%29,lc=zh-Hant\u0026n=Chinese+%28Traditional%29,lc=co\u0026n=Corsican,lc=hr\u0026n=Croatian,lc=cs\u0026n=Czech,lc=da\u0026n=Danish,lc=nl\u0026n=Dutch,lc=en\u0026n=English,lc=eo\u0026n=Esperanto,lc=et\u0026n=Estonian,lc=fil\u0026n=Filipino,lc=fi\u0026n=Finnish,lc=fr\u0026n=French,lc=gl\u0026n=Galician,lc=ka\u0026n=Georgian,lc=de\u0026n=German,lc=el\u0026n=Greek,lc=gu\u0026n=Gujarati,lc=ht\u0026n=Haitian+Creole,lc=ha\u0026n=Hausa,lc=haw\u0026n=Hawaiian,lc=iw\u0026n=Hebrew,lc=hi\u0026n=Hindi,lc=hmn\u0026n=Hmong,lc=hu\u0026n=Hungarian,lc=is\u0026n=Icelandic,lc=ig\u0026n=Igbo,lc=id\u0026n=Indonesian,lc=ga\u0026n=Irish,lc=it\u0026n=Italian,lc=ja\u0026n=Japanese,lc=jv\u0026n=Javanese,lc=kn\u0026n=Kannada,lc=kk\u0026n=Kazakh,lc=km\u0026n=Khmer,lc=ko\u0026n=Korean,lc=ku\u0026n=Kurdish,lc=ky\u0026n=Kyrgyz,lc=lo\u0026n=Lao,lc=la\u0026n=Latin,lc=lv\u0026n=Latvian,lc=lt\u0026n=Lithuanian,lc=lb\u0026n=Luxembourgish,lc=mk\u0026n=Macedonian,lc=mg\u0026n=Malagasy,lc=ms\u0026n=Malay,lc=ml\u0026n=Malayalam,lc=mt\u0026n=Maltese,lc=mi\u0026n=Maori,lc=mr\u0026n=Marathi,lc=mn\u0026n=Mongolian,lc=ne\u0026n=Nepali,lc=no\u0026n=Norwegian,lc=ny\u0026n=Nyanja,lc=ps\u0026n=Pashto,lc=fa\u0026n=Persian,lc=pl\u0026n=Polish,lc=pt\u0026n=Portuguese,lc=pa\u0026n=Punjabi,lc=ro\u0026n=Romanian,lc=ru\u0026n=Russian,lc=sm\u0026n=Samoan,lc=gd\u0026n=Scottish+Gaelic,lc=sr\u0026n=Serbian,lc=sn\u0026n=Shona,lc=sd\u0026n=Sindhi,lc=si\u0026n=Sinhala,lc=sk\u0026n=Slovak,lc=sl\u0026n=Slovenian,lc=so\u0026n=Somali,lc=st\u0026n=Southern+Sotho,lc=es\u0026n=Spanish,lc=su\u0026n=Sundanese,lc=sw\u0026n=Swahili,lc=sv\u0026n=Swedish,lc=tg\u0026n=Tajik,lc=ta\u0026n=Tamil,lc=te\u0026n=Telugu,lc=th\u0026n=Thai,lc=tr\u0026n=Turkish,lc=uk\u0026n=Ukrainian,lc=ur\u0026n=Urdu,lc=uz\u0026n=Uzbek,lc=vi\u0026n=Vietnamese,lc=cy\u0026n=Welsh,lc=fy\u0026n=Western+Frisian,lc=xh\u0026n=Xhosa,lc=yi\u0026n=Yiddish,lc=yo\u0026n=Yoruba,lc=zu\u0026n=Zulu","cver":"1.20170515","allow_ratings":"1","host_language":"en","dbp":"Ch4KFlZlaVRlOG9uS0JqQU9WODRwdURhencQASABKAAQARgC","innertube_context_client_version":"1.20170515","avg_rating":"4.80811452866","fexp":"9419452,9422596,9431012,9434000,9434046,9434289,9446054,9446364,9449243,9453897,9456640,9457141,9461973,9462705,9463594,9463965,9465813,9466199,9466713,9466783,9466783,9466793,9466795,9466797,9467075,9467217,9467884,9468798,9468799,9468805,9469224,9469328,9471119,9471349,9472248,9474540,9474597,9475818,9475833","allow_html5_ads":"1","iv_invideo_url":"https:\/\/www.youtube.com\/annotations_invideo?cap_hist=1\u0026video_id=iOztnsBPrAA\u0026client=1\u0026ei=IUwcWc_aFJWi-wOv7pOABw","loeid":"9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833","idpj":"-8","afv_ad_tag_restricted_to_instream":"https:\/\/googleads.g.doubleclick.net\/pagead\/ads?ad_type=skippablevideo_bumpervideo\u0026channel=Vertical_211%2BVertical_3%2BVertical_36%2BVertical_41%2BVertical_613%2BVertical_8%2BVertical_925%2Bafv_instream%2Bafv_instream_us%2Bafv_user_id_7_YxT-KID8kRbqZo7MyscQ%2Bafv_user_markipliergame%2Byt_bs1%2Byt_bumpers%2Byt_cid_3406642%2Byt_mabv%2Byt_mpvid_Y6qxqa3kGfqE8mNy%2Byt_no_360%2Byt_no_ap%2Byt_no_wa%2Bytdevice_1%2Bytdevicever_1.20170515%2Bytel_detailpage%2Bytps_default\u0026client=ca-pub-6219811747049371\u0026dbp=ChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA\u0026description_url=http%3A%2F%2Fwww.youtube.com%2Fvideo%2FiOztnsBPrAA\u0026eid=56702193\u0026hl=en\u0026host=ca-host-pub-4184977541492624\u0026ht_id=3660190\u0026loeid=9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833\u0026max_ad_duration=15000\u0026osd=2\u0026pucrd=CgYIABAAGAA\u0026sdki=18803DAD\u0026url=http%3A%2F%2Fwww.youtube.com%2Fvideo%2FiOztnsBPrAA\u0026video_cpm=6000000\u0026v_p=DZQqfD8lIvVVRA%3D%3D\u0026ytdevice=1\u0026ytdevicever=1.20170515\u0026yt_pt=APb3F2-eeD4fzhCXXljaaq2QAiZ6qRUd31ZfE7Yi_FUaGV2z8MvvbsC5yrCY_T9_cCwhHXezrYJG5LJzOqlwJmEDHe9zXmsu4He8_B4Vo6m1QQnAPOom5h75sOMqhqX4MyX_jwtNCUQBAa7nefHLMeHzHZK0hRGt1lk43aKqtllChNeft-u5Z9BL7zO5TlLGDTH_S0degEWQXWhpM6pS-s9fVAyOKIiuRq9-Ontq0D0AVUNshRJ2zctm4Uo-fH_3ELsQdMBoFrsD54s45pzeyAbOoa1zm0BSvMSnlVudHWG86KPuxASTvRLqHCF6S7YdE7kU4fQ038zrolZQKZWqu1LC0DHbyi9bD1U5dHVs_ixlyeOmE37PNgZIZQCtqm3g2kMOC_jP1UVpBZixkVfU7JcS3graUfnpDspFldKuLlep-dBQqi2v9jh1kWuYOOjFGIu3cIgjVIJhEv0atHZD\u0026yt_vis=0","remarketing_url":"https:\/\/www.youtube.com\/pagead\/viewthroughconversion\/962985656\/?backend=innertube\u0026cname=1\u0026cver=1_20170515\u0026data=backend%3Dinnertube%3Bcname%3D1%3Bcver%3D1_20170515%3Bptype%3Dview%3Btype%3Dview%3Butuid%3D7_YxT-KID8kRbqZo7MyscQ%3Butvid%3DiOztnsBPrAA\u0026foc_id=7_YxT-KID8kRbqZo7MyscQ\u0026label=followon_view\u0026ptype=view","watermark":",https:\/\/s.ytimg.com\/yts\/img\/watermark\/youtube_watermark-vflHX6b6E.png,https:\/\/s.ytimg.com\/yts\/img\/watermark\/youtube_hd_watermark-vflAzLcD6.png","of":"VeiTe8onKBjAOV84puDazw","vid":"iOztnsBPrAA","ldpj":"-38","focEnabled":"1","enablecsi":"1","apiary_host_firstparty":"","excluded_ads":"46=14_14;59=14_14;64=14_14;77=1_1,1_3,2_1,2_3;89=2_2,15_2;94=15_2,15_2_1,15_2_4,17_2,17_2_1","ad3_module":"1","length_seconds":"1064","enablejsapi":"1","pltype":"content","swf_player_response":"1","keywords":"Scary Games,Scary Moments,Scariest Game Ever,scary,horror,gameplay,reactions,screams,screaming,scared,creepy,creepypasta,five nights at freddy's,markiplier,markiplier horror,horror games,funny,scream,five nights,video games,free games,jumpscares","trueview":true,"caption_tracks":"v=a.en\u0026u=https%3A%2F%2Fwww.youtube.com%2Fapi%2Ftimedtext%3Fexpire%3D1495051921%26signature%3D5BC747671179D5942D8497B3749A8DA298057DBA.826A21C8675DE0644948F8ACF0509B06CE0B309F%26hl%3Den_US%26asr_langs%3Dpt%252Cen%252Cnl%252Cja%252Ces%252Cfr%252Cit%252Cde%252Cko%252Cru%26sparams%3Dasr_langs%252Ccaps%252Cv%252Cexpire%26caps%3Dasr%26key%3Dyttt1%26v%3DiOztnsBPrAA%26kind%3Dasr%26lang%3Den\u0026t=1\u0026lc=en\u0026k=asr\u0026n=English+%28auto-generated%29,lc=de\u0026t=1\u0026n=German\u0026u=https%3A%2F%2Fwww.youtube.com%2Fapi%2Ftimedtext%3Fexpire%3D1495051921%26signature%3D5BC747671179D5942D8497B3749A8DA298057DBA.826A21C8675DE0644948F8ACF0509B06CE0B309F%26hl%3Den_US%26asr_langs%3Dpt%252Cen%252Cnl%252Cja%252Ces%252Cfr%252Cit%252Cde%252Cko%252Cru%26sparams%3Dasr_langs%252Ccaps%252Cv%252Cexpire%26caps%3Dasr%26key%3Dyttt1%26v%3DiOztnsBPrAA%26lang%3Dde\u0026v=.de,lc=es-419\u0026t=1\u0026n=Spanish+%28Latin+America%29\u0026u=https%3A%2F%2Fwww.youtube.com%2Fapi%2Ftimedtext%3Fexpire%3D1495051921%26signature%3D5BC747671179D5942D8497B3749A8DA298057DBA.826A21C8675DE0644948F8ACF0509B06CE0B309F%26hl%3Den_US%26asr_langs%3Dpt%252Cen%252Cnl%252Cja%252Ces%252Cfr%252Cit%252Cde%252Cko%252Cru%26sparams%3Dasr_langs%252Ccaps%252Cv%252Cexpire%26caps%3Dasr%26key%3Dyttt1%26v%3DiOztnsBPrAA%26lang%3Des-419\u0026v=.es-419","fflags":"html5_throttle_rate=0.0\u0026html5_suspend_manifest_on_pause=true\u0026use_fast_fade_in_0s=true\u0026enable_live_state_auth=true\u0026fixed_padding_skip_button=true\u0026kids_enable_privacy_notice=true\u0026forced_brand_precap_duration_ms=2000\u0026yto_enable_unlimited_landing_page_yto_features=true\u0026html5_variability_discount=0.5\u0026html5_disable_non_contiguous=true\u0026html5_tight_max_buffer_allowed_bandwidth_stddevs=0.0\u0026kids_enable_server_side_assets=true\u0026html5_max_readahead_bandwidth_cap=0\u0026html5_default_quality_cap=0\u0026html5_repredict_interval_secs=0.0\u0026kids_enable_block_servlet=true\u0026mpu_visible_threshold_count=2\u0026html5_idle_preload_secs=1\u0026html5_get_video_info_timeout_ms=0\u0026ios_disable_notification_preprompt=true\u0026use_new_skip_icon=true\u0026pla_shelf_hovercard=true\u0026vss_dni_delayping=0\u0026mweb_blacklist_progressive_chrome_mobile=true\u0026signed_out_notifications_inbox=true\u0026html5_always_reload_on_403=true\u0026html5_retry_media_element_errors_delay=0\u0026html5_strip_emsg=true\u0026html5_allowable_liveness_drift_chunks=2\u0026html5_long_term_bandwidth_window_size=0\u0026dynamic_ad_break_seek_threshold_sec=0\u0026html5_bandwidth_multisample_width=0.4\u0026desktop_cleanup_companion_on_instream_begin=true\u0026html5_reduce_startup_rebuffers=true\u0026html5_post_interrupt_readahead=20\u0026enable_plus_page_pts=true\u0026spherical_on_android_iframe=true\u0026html5_nnr_downgrade_count=4\u0026ios_notifications_disabled_subs_tab_promoted_item_promo=true\u0026embed_snippet_includes_version=true\u0026html5_report_conn=true\u0026html5_min_startup_smooth_target=10.0\u0026live_fresca_v2=true\u0026live_readahead_seconds_multiplier=0.8\u0026enable_playlist_multi_season=true\u0026kids_enable_terms_servlet=true\u0026html5_preload_size_excludes_metadata=true\u0026send_api_stats_ads_asr=true\u0026mweb_autonav_paddles=true\u0026html5_min_secs_between_format_selections=8.0\u0026disable_new_pause_state3=true\u0026send_html5_api_stats_ads_abandon=true\u0026mweb_pu_android_chrome_54_above=true\u0026yto_enable_ytr_promo_refresh_assets=true\u0026enable_ccs_buy_flow_for_chirp=true\u0026html5_local_max_byterate_lookahead=15\u0026html5_bandwidth_window_size=0\u0026exo_drm_max_keyfetch_delay_ms=0\u0026doubleclick_gpt_retagging=true\u0026html5_pause_manifest_ended=true\u0026lugash_header_by_service=true\u0026html5_max_av_sync_drift=50\u0026html5_use_adaptive_live_readahead=true\u0026html5_always_enable_timeouts=true\u0026signed_out_notification_settings=true\u0026html5_disable_audio_slicing=true\u0026live_chunk_readahead=3\u0026mobile_disable_ad_mob_on_home=true\u0026player_interaction_logging=true\u0026show_countdown_on_bumper=true\u0026android_buy_bucket_buy_flows=true\u0026polymer_report_missing_web_navigation_endpoint=false\u0026ad_video_end_renderer_duration_milliseconds=7000\u0026lugash_header_warmup=true\u0026html5_repredict_misses=5\u0026playready_on_borg=true\u0026flex_theater_mode=true\u0026html5_progressive_signature_reload=true\u0026sdk_wrapper_levels_allowed=0\u0026html5_suspended_state=true\u0026sidebar_renderers=true\u0026html5_tight_max_buffer_allowed_impaired_time=0.0\u0026android_native_live_enablement=true\u0026html5_enable_embedded_player_visibility_signals=true\u0026html5_timeupdate_readystate_check=true\u0026yto_enable_watch_offer_module=true\u0026html5_request_sizing_multiplier=0.8\u0026autoplay_time=8000\u0026html5_playing_event_buffer_underrun=true\u0026html5_request_size_min_secs=0.0\u0026html5_live_pin_to_tail=true\u0026html5_max_buffer_health_for_downgrade=15\u0026legacy_autoplay_flag=true\u0026html5_min_vss_watchtime_to_cut_secs_redux=0.0\u0026max_resolution_for_white_noise=360\u0026html5_live_disable_dg_pacing=true\u0026html5_trust_platform_bitrate_limits=true\u0026ios_enable_mixin_accessibility_custom_actions=true\u0026html5_seeks_are_not_rebuffers=true\u0026stop_using_ima_sdk_gpt_request_activity=true\u0026request_mpu_on_unfilled_ad_break=true\u0026html5_connect_timeout_secs=7.0\u0026mweb_muted_autoplay_animation=none\u0026postroll_notify_time_seconds=5\u0026html5_clearance_fix=true\u0026html5_new_preloading=true\u0026dash_manifest_version=5\u0026kids_enable_post_onboarding_red_flow=true\u0026html5_spherical_bicubic_mode=0\u0026html5_serverside_biscotti_id_wait_ms=1000\u0026html5_ad_no_buffer_abort_after_skippable=true\u0026html5_variability_full_discount_thresh=3.0\u0026html5_live_4k_more_buffer=true\u0026chrome_promo_enabled=true\u0026king_crimson_player=false\u0026enable_pla_desktop_shelf=true\u0026youtubei_for_web=true\u0026enable_red_carpet_p13n_shelves=true\u0026use_new_style=true\u0026uniplayer_dbp=true\u0026html5_min_buffer_to_resume=6\u0026disable_indisplay_adunit_on_embedded=true\u0026html5_elbow_tracking_tweaks=true\u0026html5_check_for_reseek=true\u0026html5_background_quality_cap=360\u0026use_push_for_desktop_live_chat=true\u0026html5_get_video_info_promiseajax=true\u0026html5_min_vss_watchtime_to_cut_secs=0.0\u0026website_actions_throttle_percentage=1.0\u0026player_destroy_old_version=true\u0026html5_max_vss_watchtime_ratio=0.0\u0026html5_reseek_on_infinite_buffer=true\u0026new_promo_page=true\u0026fix_gpt_pos_params=true\u0026html5_max_buffer_duration=0\u0026yt_unlimited_pts_skip_ads_promo_desktop_always=true\u0026midroll_notify_time_seconds=5\u0026html5_variability_no_discount_thresh=1.0\u0026android_enable_thumbnail_overlay_side_panel=false\u0026html5_deferred_source_buffer_creation=true\u0026html5_adjust_effective_request_size=true\u0026interaction_log_delayed_event_batch_size=200\u0026lock_fullscreen=false\u0026disable_search_mpu=true\u0026king_crimson_player_redux=true\u0026html5_min_readbehind_secs=0\u0026enable_local_channel=true\u0026html5_vp9_live_whitelist=false\u0026html5_observed_downgrade_prop=0.0\u0026enable_offer_restricts_for_watch_page_offers=true\u0026html5_no_clear_on_quota_exceeded=true\u0026html5_background_cap_idle_secs=60\u0026yto_feature_hub_channel=false\u0026html5_use_mediastream_timestamp=true\u0026variable_load_timeout_ms=0\u0026ad_duration_threshold_for_showing_endcap_seconds=15\u0026html5_deadzone_multiplier=1.1\u0026html5_min_readbehind_cap_secs=0\u0026dynamic_ad_break_pause_threshold_sec=0\u0026kids_asset_theme=server_side_assets\u0026persist_text_on_preview_button=true\u0026html5_throttle_burst_secs=20.0\u0026show_thumbnail_on_standard=true\u0026html5_stale_dash_manifest_retry_factor=1.0\u0026html5_min_upgrade_health=0\u0026html5_msi_error_fallback=true","fmt_list":"22\/1280x720\/9\/0\/115,43\/640x360\/99\/0\/0,18\/640x360\/9\/0\/115,36\/320x180\/99\/1\/0,17\/176x144\/99\/1\/0","innertube_api_version":"v1","apiary_host":"","allow_below_the_player_companion":true,"view_count":"58790116","as_launched_in_country":"1","hl":"en_US","instream_long":true,"videostats_playback_base_url":"https:\/\/s.youtube.com\/api\/stats\/playback?fexp=9419452%2C9422596%2C9431012%2C9434000%2C9434046%2C9434289%2C9446054%2C9446364%2C9449243%2C9453897%2C9456640%2C9457141%2C9461973%2C9462705%2C9463594%2C9463965%2C9465813%2C9466199%2C9466713%2C9466783%2C9466783%2C9466793%2C9466795%2C9466797%2C9467075%2C9467217%2C9467884%2C9468798%2C9468799%2C9468805%2C9469224%2C9469328%2C9471119%2C9471349%2C9472248%2C9474540%2C9474597%2C9475818%2C9475833\u0026ei=IUwcWc_aFJWi-wOv7pOABw\u0026referrer=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiOztnsBPrAA\u0026docid=iOztnsBPrAA\u0026el=detailpage\u0026sdetail=rv%3AiOztnsBPrAA\u0026plid=AAVPuAiqTlW-2rh0\u0026len=1064\u0026cl=156215422\u0026sourceid=yw\u0026of=VeiTe8onKBjAOV84puDazw\u0026ns=yt\u0026vm=CAEQARgE","player_error_log_fraction":"1.0","ssl":"1","gapi_hint_params":"m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBB_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA","title":"WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy's - Part 1","rmktEnabled":"1","cid":"3406642","adaptive_fmts":"clen=247400765\u0026bitrate=2420926\u0026lmt=1458209892470527\u0026itag=136\u0026projection_type=1\u0026size=1280x720\u0026index=711-3142\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.4d401f%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D247400765%26requiressl%3Dyes%26lmt%3D1458209892470527%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D3C877CDC39D937DE011D4722E510FBB95D246844.898949489D68058200466446760738EFA66A7940%26keepalive%3Dyes%26itag%3D136%26upn%3DszcigohtbdY%26dur%3D1063.499%26ipbits%3D0%26mime%3Dvideo%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=720p\u0026xtags=\u0026init=0-710,clen=170836711\u0026bitrate=4046208\u0026lmt=1449609717266521\u0026itag=247\u0026projection_type=1\u0026size=1280x720\u0026index=243-3813\u0026type=video%2Fwebm%3B+codecs%3D%22vp9%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D170836711%26requiressl%3Dyes%26lmt%3D1449609717266521%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D3FF67FC173CD0CF881F29A37FAF06596CD1C851B.D018B6E19FD9D9486E61895A0F6DE755BAFF9E31%26keepalive%3Dyes%26itag%3D247%26upn%3DszcigohtbdY%26dur%3D1063.466%26ipbits%3D0%26mime%3Dvideo%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=720p\u0026xtags=\u0026init=0-242,clen=125442005\u0026bitrate=1214522\u0026lmt=1458209828927522\u0026itag=135\u0026projection_type=1\u0026size=854x480\u0026index=710-3141\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.4d401f%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D125442005%26requiressl%3Dyes%26lmt%3D1458209828927522%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D188B74D1EFB77AC0D72CB3F4A7CF38F7EF5BD53A.863991B75087AA169140F7CA6661F7DE5AA7F122%26keepalive%3Dyes%26itag%3D135%26upn%3DszcigohtbdY%26dur%3D1063.499%26ipbits%3D0%26mime%3Dvideo%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=480p\u0026xtags=\u0026init=0-709,clen=82076130\u0026bitrate=1828791\u0026lmt=1449609695584561\u0026itag=244\u0026projection_type=1\u0026size=854x480\u0026index=243-3792\u0026type=video%2Fwebm%3B+codecs%3D%22vp9%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D82076130%26requiressl%3Dyes%26lmt%3D1449609695584561%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D232FC8333956D29E0B6708417197885A6D0645BE.A713C176AA3B2F685AF282428F8A1FF8BF667FBD%26keepalive%3Dyes%26itag%3D244%26upn%3DszcigohtbdY%26dur%3D1063.466%26ipbits%3D0%26mime%3Dvideo%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=480p\u0026xtags=\u0026init=0-242,clen=65937652\u0026bitrate=660272\u0026lmt=1458209818406741\u0026itag=134\u0026projection_type=1\u0026size=640x360\u0026index=710-3141\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.4d401e%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D65937652%26requiressl%3Dyes%26lmt%3D1458209818406741%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3DC27576E81D17AD867D59D42B5CC04D5914989090.1E6525ABE75D58E17ABFCB27595F1C7AE7425795%26keepalive%3Dyes%26itag%3D134%26upn%3DszcigohtbdY%26dur%3D1063.499%26ipbits%3D0%26mime%3Dvideo%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=360p\u0026xtags=\u0026init=0-709,clen=45086211\u0026bitrate=1108402\u0026lmt=1449609694603575\u0026itag=243\u0026projection_type=1\u0026size=640x360\u0026index=243-3759\u0026type=video%2Fwebm%3B+codecs%3D%22vp9%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D45086211%26requiressl%3Dyes%26lmt%3D1449609694603575%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3DB59B2F85AA8FFFB83E2F0E0524AE385DC86D510B.402F0B57843A7032EAB81EDD4CFE1142F0CB34C6%26keepalive%3Dyes%26itag%3D243%26upn%3DszcigohtbdY%26dur%3D1063.466%26ipbits%3D0%26mime%3Dvideo%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=360p\u0026xtags=\u0026init=0-242,clen=32980367\u0026bitrate=288873\u0026lmt=1458209798023151\u0026itag=133\u0026projection_type=1\u0026size=426x240\u0026index=711-3142\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.4d4015%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D32980367%26requiressl%3Dyes%26lmt%3D1458209798023151%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D408B70B9FBE6E167800A9564B0FED35F65011615.5FF1DD0FE5CB9CF1D4182940BAF9402129845C69%26keepalive%3Dyes%26itag%3D133%26upn%3DszcigohtbdY%26dur%3D1063.499%26ipbits%3D0%26mime%3Dvideo%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=240p\u0026xtags=\u0026init=0-710,clen=22825634\u0026bitrate=411985\u0026lmt=1449609689676536\u0026itag=242\u0026projection_type=1\u0026size=426x240\u0026index=242-3682\u0026type=video%2Fwebm%3B+codecs%3D%22vp9%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D22825634%26requiressl%3Dyes%26lmt%3D1449609689676536%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D80A5E09AABE250DC78B1C37AC9D86329032CD81E.5CA1C56C49D78D6449169D41C8788B0E91BBA708%26keepalive%3Dyes%26itag%3D242%26upn%3DszcigohtbdY%26dur%3D1063.466%26ipbits%3D0%26mime%3Dvideo%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=240p\u0026xtags=\u0026init=0-241,clen=14624240\u0026bitrate=115952\u0026lmt=1458209796639644\u0026itag=160\u0026projection_type=1\u0026size=256x144\u0026index=672-3103\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.4d400c%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D14624240%26requiressl%3Dyes%26lmt%3D1458209796639644%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D7BB78E30E776C73EBF47640BA2CDEC9F55DE0256.E2A48CB465ED2BD7ECD7B1F35C5C28F4E59669AE%26keepalive%3Dyes%26itag%3D160%26upn%3DszcigohtbdY%26dur%3D1063.499%26ipbits%3D0%26mime%3Dvideo%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=30\u0026quality_label=144p\u0026xtags=\u0026init=0-671,clen=11437617\u0026bitrate=118636\u0026lmt=1449609724614193\u0026itag=278\u0026projection_type=1\u0026size=256x144\u0026index=242-3632\u0026type=video%2Fwebm%3B+codecs%3D%22vp9%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D11437617%26requiressl%3Dyes%26lmt%3D1449609724614193%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D3262FE7DB5BD936084546539033464EA7CE74A11.B3AAC581694D54C48457D57099A776EE60EE10FA%26keepalive%3Dyes%26itag%3D278%26upn%3DszcigohtbdY%26dur%3D1063.466%26ipbits%3D0%26mime%3Dvideo%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026fps=15\u0026quality_label=144p\u0026xtags=\u0026init=0-241,clen=16892870\u0026bitrate=128716\u0026type=audio%2Fmp4%3B+codecs%3D%22mp4a.40.2%22\u0026lmt=1458205529690191\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D16892870%26requiressl%3Dyes%26lmt%3D1458205529690191%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D0A95B99A0EBFCC6D472523386871AC0DD445A621.674B8398DC860753B2EA7403D0531228C01AD87A%26keepalive%3Dyes%26itag%3D140%26upn%3DszcigohtbdY%26dur%3D1063.566%26ipbits%3D0%26mime%3Daudio%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026itag=140\u0026xtags=\u0026init=0-591\u0026projection_type=1\u0026index=592-1907,clen=12472539\u0026bitrate=131197\u0026type=audio%2Fwebm%3B+codecs%3D%22vorbis%22\u0026lmt=1449601309715150\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D12472539%26requiressl%3Dyes%26lmt%3D1449601309715150%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3DA8C58120395C50D899E5F5D2A409FD31C749FC3C.DA70A0400856706C430981A24E8B3B7C1984B374%26keepalive%3Dyes%26itag%3D171%26upn%3DszcigohtbdY%26dur%3D1063.487%26ipbits%3D0%26mime%3Daudio%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026itag=171\u0026xtags=\u0026init=0-4451\u0026projection_type=1\u0026index=4452-6267,clen=6802149\u0026bitrate=60728\u0026type=audio%2Fwebm%3B+codecs%3D%22opus%22\u0026lmt=1449601306485053\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D6802149%26requiressl%3Dyes%26lmt%3D1449601306485053%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D3BB937AF13ED9B127F9DB1000E9F41E7F4CF2892.5F2BC3C375A217B90EC1371EB5357558C9E516D1%26keepalive%3Dyes%26itag%3D249%26upn%3DszcigohtbdY%26dur%3D1063.501%26ipbits%3D0%26mime%3Daudio%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026itag=249\u0026xtags=\u0026init=0-271\u0026projection_type=1\u0026index=272-2087,clen=8664364\u0026bitrate=83725\u0026type=audio%2Fwebm%3B+codecs%3D%22opus%22\u0026lmt=1449601579040133\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D8664364%26requiressl%3Dyes%26lmt%3D1449601579040133%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D0F839DE951B33E77D31EC59B5648C4B2A121AEA3.1C3A2BC112D3EA9CB78EEB2873FD390A88CFF370%26keepalive%3Dyes%26itag%3D250%26upn%3DszcigohtbdY%26dur%3D1063.501%26ipbits%3D0%26mime%3Daudio%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026itag=250\u0026xtags=\u0026init=0-271\u0026projection_type=1\u0026index=272-2087,clen=16088195\u0026bitrate=141938\u0026type=audio%2Fwebm%3B+codecs%3D%22opus%22\u0026lmt=1449601308706953\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D16088195%26requiressl%3Dyes%26lmt%3D1449601308706953%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Ckeepalive%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3DC03EDA0A92C517BB79DD8CE107C553D57FE60496.4CCF3AE330E595338A82BFD2ACFA97B6D45A0ADA%26keepalive%3Dyes%26itag%3D251%26upn%3DszcigohtbdY%26dur%3D1063.501%26ipbits%3D0%26mime%3Daudio%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026itag=251\u0026xtags=\u0026init=0-271\u0026projection_type=1\u0026index=272-2087","apply_fade_on_midrolls":true,"pyv_ad_channel":"PyvWatchInRelated+PyvWatchNoAdX+PyvYTWatch+YtLoPri+afv_user_id_7_YxT-KID8kRbqZo7MyscQ+afv_user_markipliergame+non_lpw+pw+yt_cid_3406642+yt_mpvid_Y6qxqa3kGfqE8mNy+yt_no_360+yt_no_ap+yt_no_wa+ytdevice_1+ytdevicever_1.20170515","no_get_video_log":"1","sdetail":"rv:iOztnsBPrAA","loaderUrl":"https:\/\/www.youtube.com\/watch?v=iOztnsBPrAA","ucid":"UC7_YxT-KID8kRbqZo7MyscQ","vm":"CAEQARgE","encoded_ad_safety_reason":"CgBYAXAB","fade_out_start_milliseconds":"0","tmi":"1","ptchn":"7_YxT-KID8kRbqZo7MyscQ","url_encoded_fmt_stream_map":"type=video%2Fmp4%3B+codecs%3D%22avc1.64001F%2C+mp4a.40.2%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Frequiressl%3Dyes%26lmt%3D1472374097572809%26sparams%3Ddur%252Cei%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Cratebypass%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D917F542A7CB5ACCCCA1AB12FF09387F4605EC426.AF5EFBE41479E9450DAC57FF6EDCDA7DF7B3DCA8%26ipbits%3D0%26itag%3D22%26upn%3DszcigohtbdY%26dur%3D1063.566%26mime%3Dvideo%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ratebypass%3Dyes%26ip%3D207.241.225.221\u0026quality=hd720\u0026itag=22,type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D100327203%26requiressl%3Dyes%26lmt%3D1408223590762966%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Cratebypass%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D200A5109879C6783DEA9EC3E7DA2C98293F4B089.E2E1AE22B6A688997E9994755ACF682CE4D24718%26ipbits%3D0%26itag%3D43%26upn%3DszcigohtbdY%26dur%3D0.000%26mime%3Dvideo%252Fwebm%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ratebypass%3Dyes%26ip%3D207.241.225.221%26gir%3Dyes\u0026quality=medium\u0026itag=43,type=video%2Fmp4%3B+codecs%3D%22avc1.42001E%2C+mp4a.40.2%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D98384031%26requiressl%3Dyes%26lmt%3D1458206982333873%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Cratebypass%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3DD688B4F414806A7BF07A6EFBBF892CC035A1491E.933F1C9FBAEDCDA2EA507AFB616E73488600F47D%26ipbits%3D0%26itag%3D18%26upn%3DszcigohtbdY%26dur%3D1063.566%26mime%3Dvideo%252Fmp4%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ratebypass%3Dyes%26ip%3D207.241.225.221%26gir%3Dyes\u0026quality=medium\u0026itag=18,type=video%2F3gpp%3B+codecs%3D%22mp4v.20.3%2C+mp4a.40.2%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D30360142%26requiressl%3Dyes%26lmt%3D1407866218134992%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D4549377B917A74AD53DB6E20C04C6CB80D74735A.3BB8564730215A08E683A5E409C1CE55A53A9EA0%26ipbits%3D0%26itag%3D36%26upn%3DszcigohtbdY%26dur%3D1063.706%26mime%3Dvideo%252F3gpp%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026quality=small\u0026itag=36,type=video%2F3gpp%3B+codecs%3D%22mp4v.20.3%2C+mp4a.40.2%22\u0026url=https%3A%2F%2Fr6---sn-o097znld.googlevideo.com%2Fvideoplayback%3Fclen%3D10917996%26requiressl%3Dyes%26lmt%3D1407866192506465%26sparams%3Dclen%252Cdur%252Cei%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26expire%3D1495048321%26key%3Dyt6%26initcwndbps%3D1616250%26signature%3D906F07AEE245BE7CF7D41FE1ECB4527B24CC1F59.3B2AE091835B59591CD3B0D510B2B3A9C8707DEB%26ipbits%3D0%26itag%3D17%26upn%3DszcigohtbdY%26dur%3D1063.752%26mime%3Dvideo%252F3gpp%26ei%3DIUwcWc_aFJWi-wOv7pOABw%26id%3Do-AHdy1RK-dSmoZz9cMA9-udOnX9Gz5ks-a3ddIbBaB6yq%26ms%3Dau%26mt%3D1495026634%26pl%3D20%26mv%3Dm%26mm%3D31%26source%3Dyoutube%26mn%3Dsn-o097znld%26ip%3D207.241.225.221%26gir%3Dyes\u0026quality=small\u0026itag=17","ptk":"RPMNetworks","instream":true,"plid":"AAVPuAiqTlW-2rh0","midroll_prefetch_size":"1","oid":"DQwHBTIc-poR1tMSuxNSmg","xhr_apiary_host":"youtubei.youtube.com","ad_logging_flag":"1","afv_ad_tag":"https:\/\/googleads.g.doubleclick.net\/pagead\/ads?ad_type=skippablevideo_bumpervideo\u0026channel=Vertical_211%2BVertical_3%2BVertical_36%2BVertical_41%2BVertical_613%2BVertical_8%2BVertical_925%2Bafv_instream%2Bafv_instream_us%2Bafv_user_id_7_YxT-KID8kRbqZo7MyscQ%2Bafv_user_markipliergame%2Byt_bs1%2Byt_bumpers%2Byt_cid_3406642%2Byt_mabv%2Byt_mpvid_Y6qxqa3kGfqE8mNy%2Byt_no_360%2Byt_no_ap%2Byt_no_wa%2Bytdevice_1%2Bytdevicever_1.20170515%2Bytel_detailpage%2Bytps_default\u0026client=ca-pub-6219811747049371\u0026dbp=ChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA\u0026description_url=http%3A%2F%2Fwww.youtube.com%2Fvideo%2FiOztnsBPrAA\u0026eid=56702193\u0026hl=en\u0026host=ca-host-pub-4184977541492624\u0026ht_id=3660190\u0026loeid=9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833\u0026max_ad_duration=15000\u0026osd=2\u0026pucrd=CgYIABAAGAA\u0026sdki=18803DAD\u0026url=http%3A%2F%2Fwww.youtube.com%2Fvideo%2FiOztnsBPrAA\u0026video_cpm=6000000\u0026v_p=DZQqfD8lIvVVRA%3D%3D\u0026ytdevice=1\u0026ytdevicever=1.20170515\u0026yt_pt=APb3F2-eeD4fzhCXXljaaq2QAiZ6qRUd31ZfE7Yi_FUaGV2z8MvvbsC5yrCY_T9_cCwhHXezrYJG5LJzOqlwJmEDHe9zXmsu4He8_B4Vo6m1QQnAPOom5h75sOMqhqX4MyX_jwtNCUQBAa7nefHLMeHzHZK0hRGt1lk43aKqtllChNeft-u5Z9BL7zO5TlLGDTH_S0degEWQXWhpM6pS-s9fVAyOKIiuRq9-Ontq0D0AVUNshRJ2zctm4Uo-fH_3ELsQdMBoFrsD54s45pzeyAbOoa1zm0BSvMSnlVudHWG86KPuxASTvRLqHCF6S7YdE7kU4fQ038zrolZQKZWqu1LC0DHbyi9bD1U5dHVs_ixlyeOmE37PNgZIZQCtqm3g2kMOC_jP1UVpBZixkVfU7JcS3graUfnpDspFldKuLlep-dBQqi2v9jh1kWuYOOjFGIu3cIgjVIJhEv0atHZD\u0026yt_vis=0","show_content_thumbnail":true,"iv_load_policy":"1","token":"1","ad_slots":"0,-1","fade_in_start_milliseconds":"-3000","is_listed":"1","dclk":true,"gpt_migration":"1","afv_instream_max":"15000","uid":"7_YxT-KID8kRbqZo7MyscQ","ad_flags":"0","sourceid":"yw","ad_device":"1","show_pyv_in_related":true,"account_playback_token":"QUFFLUhqbkVNN0hheVFaU29JTndRWnl5VG9XOHhmMDYyZ3xBQ3Jtc0trRGI4dzJFems3VU1zVlhqTXRLTmpCbXVtNWYzQ0xLYTZPN3VKdTRNTThsQlNVNDVIUUhVSkF3a1g0c3FDdnRTVEM2eEF1TEZ5Ynp5ZEZMVF9SaWFhc3pNVE50eVRXWm5kM3NOeVBHTkYxU2xDU2lVbw==","author":"Markiplier","enabled_engage_types":"1,3,4,5,6,17","tag_for_child_directed":false,"cafe_experiment_id":"56702193"},"sts":17297,"assets":{"css":"\/yts\/cssbin\/player-vflv7jv3p\/www-player.css","js":"\/yts\/jsbin\/player-vfltmLGsd\/en_US\/base.js"},"params":{"allowfullscreen":"true","allowscriptaccess":"always","bgcolor":"#000000"},"url_v9as2":"","messages":{"player_fallback":["Adobe Flash Player or an HTML5 supported browser is required for video playback.\u003cbr\u003e\u003ca href=\"https:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player \u003c\/a\u003e\u003cbr\u003e\u003ca href=\"\/html5\"\u003eLearn more about upgrading to an HTML5 browser\u003c\/a\u003e"]},"url_v8":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-vfl4LZpfB\/cps.swf","min_version":"8.0.0","html5":true};ytplayer.load = function() {yt.player.Application.create("player-api", ytplayer.config);ytplayer.config.loaded = true;};(function() {if (!!window.yt && yt.player && yt.player.Application) {ytplayer.load();}}());</script>


    <div id="watch-queue-mole" class="video-mole mole-collapsed hid"><div id="watch-queue" class="watch-playlist player-height"><div class="main-content"><div class="watch-queue-header"><div class="watch-queue-info"><div class="watch-queue-info-icon"><span class="tv-queue-list-icon yt-sprite"></span></div><h3 class="watch-queue-title">Watch Queue</h3><h3 class="tv-queue-title">Queue</h3><span class="tv-queue-details"></span></div><div class="watch-queue-control-bar control-bar-button"><div class="watch-queue-mole-info"><div class="watch-queue-control-bar-icon"><span class="watch-queue-icon yt-sprite"></span></div><div class="watch-queue-title-container"><span class="watch-queue-count"></span><span class="watch-queue-title">Watch Queue</span><span class="tv-queue-title">Queue</span></div></div>  <span class="dark-overflow-action-menu">
    
    
    <button class="flip control-bar-button yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" aria-label="Actions for the queue" aria-haspopup="true" onclick=";return false;" aria-expanded="false" type="button" ><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid" role="menu" aria-haspopup="true"><li role="menuitem"><span data-action="remove-all" class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;" >Remove all</span></li><li role="menuitem"><span data-action="disconnect" class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;" >Disconnect</span></li></ul></button>
  </span>
  <div class="watch-queue-controls">
    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button prev-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Previous video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-prev yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button play-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Play"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-play yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button pause-watch-queue-button yt-uix-button-opacity yt-uix-tooltip hid yt-uix-tooltip" type="button" onclick=";return false;" title="Pause"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-pause yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button next-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Next video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-next yt-sprite"></span></span></button>
  </div>
</div><div class="autoplay-dismiss-bar fade-out"><span class="autoplay-dismiss-title-label">The next video is starting</span><span><button class="yt-uix-button yt-uix-button-size-default autoplay-dismiss-button yt-uix-tooltip" type="button" onclick=";return false;" title="stop"><span class="yt-uix-button-content">stop</span></button></span></div></div><div class="watch-queue-items-container yt-scrollbar-dark yt-scrollbar"><div class="yt-uix-scroller playlist-videos-list"><ol class="watch-queue-items-list" data-scroll-action="yt.www.watchqueue.loadThumbnails">  <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>
</ol><div class="autoplay-control-container yt-uix-scroller-scroll-unit hid">  <div class="autoplay-control-bar">
    <label class="autoplay-label" for=autoplay-toggle-id></label>
    <label class="yt-uix-form-input-checkbox-container yt-uix-form-input-container yt-uix-form-input-paper-toggle-container "><input class="yt-uix-form-input-checkbox" type="checkbox" id="autoplay-toggle-id"/><div class="yt-uix-form-input-paper-toggle-bg yt-uix-form-input-paper-toggle-bar"></div><div class="yt-uix-form-input-paper-toggle-bg yt-uix-form-input-paper-toggle-button"></div></label>
  </div>
</div><div class="up-next-item-container hid"></div></div></div></div>  <div class="hid">
    <div id="watch-queue-title-msg">
Watch Queue
    </div>

    <div id="tv-queue-title-msg">Queue</div>

    <div id="watch-queue-count-msg">
__count__/__total__
    </div>

    <div id="watch-queue-loading-template">
      <!--
          <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

      -->
    </div>
  </div>
</div></div>
    <div id="player-playlist" class="  content-alignment    watch-player-playlist  ">
          

    </div>

  </div>

  <div class="clear"></div>
</div><div id="content" class="  content-alignment" role="main">      <div id="placeholder-player">
    <div class="player-api player-width player-height"></div>
  </div>

  <div id="watch7-container" class="">
      <div id="player-messages">
  </div>
    
  <div id="watch7-main-container">
    <div id="watch7-main" class="clearfix">
      <div id="watch7-preview" class="player-width player-height hid">
      </div>
      <div id="watch7-content" class="watch-main-col " itemscope itemid="" itemtype="http://schema.org/VideoObject"
      >
              <link itemprop="url" href="https://www.youtube.com/watch?v=iOztnsBPrAA">
    <meta itemprop="name" content="WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1">
    <meta itemprop="description" content="No other game has given me a greater feeling of dread than this one. Five Nights at Freddy&#39;s is incredibly unique and takes an approach to horror that I&#39;ve n...">
    <meta itemprop="paid" content="False">

      <meta itemprop="channelId" content="UC7_YxT-KID8kRbqZo7MyscQ">
      <meta itemprop="videoId" content="iOztnsBPrAA">

      <meta itemprop="duration" content="PT17M44S">
      <meta itemprop="unlisted" content="False">

        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <link itemprop="url" href="http://www.youtube.com/user/markiplierGAME">
        </span>
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <link itemprop="url" href="https://plus.google.com/117255271753209985875">
        </span>

          <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "http:\/\/www.youtube.com\/user\/markiplierGAME",
            "name": "Markiplier"
          }
        }
      ]
    }
    </script>


    <link itemprop="thumbnailUrl" href="https://i.ytimg.com/vi/iOztnsBPrAA/maxresdefault.jpg">
    <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject">
      <link itemprop="url" href="https://i.ytimg.com/vi/iOztnsBPrAA/maxresdefault.jpg">
      <meta itemprop="width" content="1280">
      <meta itemprop="height" content="720">
    </span>

      <link itemprop="embedURL" href="https://www.youtube.com/embed/iOztnsBPrAA">
      <meta itemprop="playerType" content="HTML5 Flash">
      <meta itemprop="width" content="1280">
      <meta itemprop="height" content="720">

      <meta itemprop="isFamilyFriendly" content="True">
      <meta itemprop="regionsAllowed" content="AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH,ER,ES,ET,FI,FJ,FK,FM,FO,FR,GA,GB,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,HU,ID,IE,IL,IM,IN,IO,IQ,IR,IS,IT,JE,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,PR,PS,PT,PW,PY,QA,RE,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SN,SO,SR,SS,ST,SV,SX,SY,SZ,TC,TD,TF,TG,TH,TJ,TK,TL,TM,TN,TO,TR,TT,TV,TW,TZ,UA,UG,UM,US,UY,UZ,VA,VC,VE,VG,VI,VN,VU,WF,WS,YE,YT,ZA,ZM,ZW">
      <meta itemprop="interactionCount" content="58790116">
      <meta itemprop="datePublished" content="2014-08-12">
      <meta itemprop="genre" content="Gaming">


              <div id="watch7-speedyg-area">
      <div class="yt-alert yt-alert-actionable yt-alert-info hid " id="speedyg-template">  <div class="yt-alert-icon">
    <span class="icon master-sprite yt-sprite"></span>
  </div>
<div class="yt-alert-content" role="alert">    <div class="yt-alert-message" tabindex="0">
    </div>
</div><div class="yt-alert-buttons"><a href="https://www.google.com/get/videoqualityreport/?v=iOztnsBPrAA" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-alert-info yt-uix-button-size-small" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw" id="speedyg-link" target="_blank"><span class="yt-uix-button-content">Find out why</span></a><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-close close yt-uix-close" type="button" onclick=";return false;" aria-label="Close" data-close-parent-class="yt-alert"><span class="yt-uix-button-content">Close</span></button></div></div>
    </div>


          <div id="watch-header" class="yt-card yt-card-has-padding">
      <div id="watch7-headline" class="clearfix">
    <div id="watch-headline-title">
      <h1 class="watch-title-container" >
        


  <span id="eow-title" class="watch-title" dir="ltr" title="WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1">
    WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy&#39;s - Part 1
  </span>

      </h1>
    </div>
  </div>

    <div id="watch7-user-header" class=" spf-link ">  <a href="/user/markiplierGAME" class="yt-user-photo g-hovercard yt-uix-sessionlink      spf-link " data-sessionlink="itct=CDMQ4TkiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" >
      <span class="video-thumb  yt-thumb yt-thumb-48 g-hovercard"
      data-ytid="UC7_YxT-KID8kRbqZo7MyscQ"
    >
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img height="48" data-thumb="https://yt3.ggpht.com/-aSj-EnOjUkc/AAAAAAAAAAI/AAAAAAAAAAA/lQiWTDY9Sd0/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" width="48" alt="Markiplier" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" >

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>

  </a>
  <div class="yt-user-info">
    <a href="/channel/UC7_YxT-KID8kRbqZo7MyscQ" class="g-hovercard yt-uix-sessionlink       spf-link " data-sessionlink="itct=CDMQ4TkiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" >Markiplier</a>
       
      <span data-tooltip-text="Verified" class="yt-channel-title-icon-verified yt-uix-tooltip yt-sprite" aria-label="Verified"></span>
  </div>
<span id="watch7-subscription-container"><span class=" yt-uix-button-subscription-container"><span class="unsubscribe-confirmation-overlay-container">  
  <div class="yt-uix-overlay "  data-overlay-style="primary" data-overlay-shape="tiny">
    
        <div class="yt-dialog hid ">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg" role="dialog">
        <div class="yt-dialog-fg-content">
          <div class="yt-dialog-loading">
              <div class="yt-dialog-waiting-content">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

          </div>
          <div class="yt-dialog-content">
              <div class="unsubscribe-confirmation-overlay-content-container">
    <div class="unsubscribe-confirmation-overlay-content">
      <div class="unsubscribe-confirmation-message">
        Unsubscribe from Markiplier?
      </div>
    </div>

    <div class="yt-uix-overlay-actions">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-overlay-close" type="button" onclick=";return false;"><span class="yt-uix-button-content">Cancel</span></button>
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary overlay-confirmation-unsubscribe-button yt-uix-overlay-close" type="button" onclick=";return false;"><span class="yt-uix-button-content">Unsubscribe</span></button>
    </div>
  </div>

          </div>
          <div class="yt-dialog-working">
              <div class="yt-dialog-working-overlay"></div>
  <div class="yt-dialog-working-bubble">
    <div class="yt-dialog-waiting-content">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Working...
    </span>
  </p>

      </div>
  </div>

          </div>
        </div>
        <div class="yt-dialog-focus-trap" tabindex="0"></div>
      </div>
    </div>
  </div>


  </div>

</span><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-subscribe-branded yt-uix-button-has-icon no-icon-markup yt-uix-subscription-button yt-can-buffer" type="button" onclick=";return false;" aria-busy="false" aria-live="polite" data-clicktracking="itct=CDQQmysiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0yBXdhdGNo" data-subscribed-timestamp="0" data-show-unsub-confirm-time-frame="always" data-show-unsub-confirm-dialog="true" data-style-type="branded" data-href="https://accounts.google.com/ServiceLogin?passive=true&amp;service=youtube&amp;uilel=3&amp;hl=en&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Fapp%3Ddesktop%26hl%3Den%26feature%3Dsubscribe%26action_handle_signin%3Dtrue%26continue_action%3DQUFFLUhqbGF3aTl4TVlqZXZFOUtOeENJa25qMElaenlUUXxBQ3Jtc0tuVHNoQUZJX0hudlFRaGt0R3NhLWZrcHYyZUk1RXRjM3ZLUkRaOTZoUU9sYXhDaV9iVjd2bUtVVTlZQTBIdGZuQnhOQ1VIT1VUY1FLRmtkcm9UMGctNDhlQ2tBLWRubFhmV2xuallJWlA1U1pCS25SUVljMklEcUxfczBjU3dPUzFVYVUtcGZxZDdHdHUtcnoyZTNqMkswc0tBdXpIRDNOYkVVMTNlUzItcUswVjV5bWhIYUFVQ09MbDRmYlAxSmwyX3A5dEN6SmJReXRCcXRJZkVBTS1VZnBsbWFB%26next%3D%252Fchannel%252FUC7_YxT-KID8kRbqZo7MyscQ" data-channel-external-id="UC7_YxT-KID8kRbqZo7MyscQ"><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="Subscribe">Subscribe</span><span class="subscribed-label" aria-label="Unsubscribe">Subscribed</span><span class="unsubscribe-label" aria-label="Unsubscribe">Unsubscribe</span></span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon yt-uix-subscription-preferences-button" type="button" onclick=";return false;" aria-busy="false" aria-role="button" aria-label="Subscription preferences" aria-live="polite" data-channel-external-id="UC7_YxT-KID8kRbqZo7MyscQ"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-subscription-preferences yt-sprite"></span></span></button><span class="yt-subscription-button-subscriber-count-branded-horizontal yt-subscriber-count" title="17M" aria-label="17M" tabindex="0">17M</span><span class="yt-subscription-button-subscriber-count-branded-horizontal yt-short-subscriber-count" title="17M" aria-label="17M" tabindex="0">17M</span>  <span class="subscription-preferences-overlay-container">
    
  <div class="yt-uix-overlay "  data-overlay-style="primary" data-overlay-shape="tiny">
    
        <div class="yt-dialog hid ">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg" role="dialog">
        <div class="yt-dialog-fg-content">
          <div class="yt-dialog-loading">
              <div class="yt-dialog-waiting-content">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

          </div>
          <div class="yt-dialog-content">
              <div class="subscription-preferences-overlay-content-container">
    <div class="subscription-preferences-overlay-loading ">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
    <div class="subscription-preferences-overlay-content">
    </div>
  </div>

          </div>
          <div class="yt-dialog-working">
              <div class="yt-dialog-working-overlay"></div>
  <div class="yt-dialog-working-bubble">
    <div class="yt-dialog-waiting-content">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Working...
    </span>
  </p>

      </div>
  </div>

          </div>
        </div>
        <div class="yt-dialog-focus-trap" tabindex="0"></div>
      </div>
    </div>
  </div>


  </div>

  </span>
</span></span></div>
    <div id="watch8-action-buttons" class="watch-action-buttons clearfix"><div id="watch8-secondary-actions" class="watch-secondary-actions yt-uix-button-group" data-button-toggle-group="optional">    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup yt-uix-clickcard-target addto-button pause-resume-autoplay yt-uix-tooltip" type="button" onclick=";return false;" title="Add to" data-position="bottomleft" data-orientation="vertical"><span class="yt-uix-button-content">Add to</span></button>
        <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Want to watch this again later?</h3>
    <div class="signin-clickcard-message">
      Sign in to add this video to a playlist.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?passive=true&amp;service=youtube&amp;uilel=3&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252Fwatch%253Fv%253DiOztnsBPrAA%26feature%3D__FEATURE__%26hl%3Den" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

    </span>
  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay action-panel-trigger action-panel-trigger-share   yt-uix-tooltip" type="button" onclick=";return false;" title="Share
" data-trigger-for="action-panel-share" data-button-toggle="true"><span class="yt-uix-button-content">Share
</span></button>
<div class="yt-uix-menu " >  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay yt-uix-menu-trigger yt-uix-tooltip" type="button" onclick=";return false;" aria-label="Action menu." id="action-panel-overflow-button" aria-pressed="false" aria-haspopup="true" role="button" title="More actions"><span class="yt-uix-button-content">More</span></button>
<div class="yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content-hidden" role="menu"><ul id="action-panel-overflow-menu">  <li>
      <span class="yt-uix-clickcard" data-card-class=report-card>
          <button type="button" class="yt-ui-menu-item has-icon action-panel-trigger action-panel-trigger-report report-button yt-uix-clickcard-target"
 data-position="topright" data-orientation="horizontal">
    <span class="yt-ui-menu-item-label">Report</span>
  </button>

          <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Need to report the video?</h3>
    <div class="signin-clickcard-message">
      Sign in to report inappropriate content.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?passive=true&amp;service=youtube&amp;uilel=3&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252Fwatch%253Fv%253DiOztnsBPrAA%26feature%3D__FEATURE__%26hl%3Den" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

      </span>
  </li>
  <li>
        <button type="button" class="yt-ui-menu-item has-icon yt-uix-menu-close-on-select action-panel-trigger action-panel-trigger-transcript"
 data-trigger-for="action-panel-transcript">
    <span class="yt-ui-menu-item-label">Transcript</span>
  </button>

  </li>
  <a href="/timedtext_video?bl=watch&amp;v=iOztnsBPrAA&amp;ref=wt&amp;auto=yes" class="yt-ui-menu-item has-icon action-panel-trigger-translate" rel="nofollow"
>
    <span class="yt-ui-menu-item-label">Add translations</span>
  </a>
</ul></div></div></div><div id="watch8-sentiment-actions"><div id="watch7-views-info"><div class="watch-view-count">58,790,116 views</div>
  <div class="video-extras-sparkbars">
    <div class="video-extras-sparkbar-likes" style="width: 95.2028588436%"></div>
    <div class="video-extras-sparkbar-dislikes" style="width: 4.7971411564%"></div>
  </div>
</div>




  <span class="like-button-renderer " data-button-toggle-group="optional" >
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-like-button like-button-renderer-like-button-unclicked yt-uix-clickcard-target   yt-uix-tooltip" type="button" onclick=";return false;" aria-label="like this video along with 475,008 other people" title="I like this" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content">475,008</span></button>
          <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Like this video?</h3>
    <div class="signin-clickcard-message">
      Sign in to make your opinion count.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?passive=true&amp;service=youtube&amp;uilel=3&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252Fwatch%253Fv%253DiOztnsBPrAA%26feature%3D__FEATURE__%26hl%3Den" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

    </span>
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-like-button like-button-renderer-like-button-clicked yt-uix-button-toggled  hid yt-uix-tooltip" type="button" onclick=";return false;" aria-label="like this video along with 475,008 other people" title="Unlike" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content">475,009</span></button>
    </span>
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-dislike-button like-button-renderer-dislike-button-unclicked yt-uix-clickcard-target   yt-uix-tooltip" type="button" onclick=";return false;" aria-label="dislike this video along with 23,935 other people" title="I dislike this" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content">23,935</span></button>
          <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Don't like this video?</h3>
    <div class="signin-clickcard-message">
      Sign in to make your opinion count.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?passive=true&amp;service=youtube&amp;uilel=3&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252Fwatch%253Fv%253DiOztnsBPrAA%26feature%3D__FEATURE__%26hl%3Den" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

    </span>
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-dislike-button like-button-renderer-dislike-button-clicked yt-uix-button-toggled  hid yt-uix-tooltip" type="button" onclick=";return false;" aria-label="dislike this video along with 23,935 other people" title="I dislike this" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content">23,936</span></button>
    </span>
  </span>
</div></div>
  </div>




  

      <div id="watch-action-panels" class="watch-action-panels yt-uix-button-panel hid yt-card yt-card-has-padding">
      <div id="action-panel-share" class="action-panel-content hid">
      <div id="watch-actions-share-loading">
    <div class="action-panel-loading">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
  </div>
  <div id="watch-actions-share-panel"></div>

  </div>

        <div id="action-panel-transcript" class="action-panel-content hid">
    <div id="watch-actions-transcript-loading">
      <div class="action-panel-loading">
          <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

      </div>
    </div>
      <div id="watch-actions-transcript" class="hid">
    <h2 class="yt-card-title">
Transcript
    </h2>
      <div id="caption-line-template" class="hid">
    <!--
    <div class="caption-line-time">
      <div class="caption-line-start">__start__</div>
    </div>
    <div class="editable-line-text">
      <span class="editable-line-text-original">__original__</span>
      <label class="editable-line-text-current hid">__current__</label>
      <textarea class="editable-line-text-input hid">__input__</textarea>
    </div>
    -->
  </div>



    <div id="watch-transcript-container" class="yt-scrollbar" >
      <div id="watch-transcript-not-found" class="hid">
The interactive transcript could not be loaded.
      </div>

      
    </div>
  </div>

  </div>

      <div id="action-panel-stats" class="action-panel-content hid">
    <div class="action-panel-loading">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
  </div>

      <div id="action-panel-report" class="action-panel-content hid"
      data-auth-required="true"
  >
    <div class="action-panel-loading">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
  </div>

    
  <div id="action-panel-rental-required" class="action-panel-content hid">
      <div id="watch-actions-rental-required">
    <strong>Rating is available when the video has been rented.</strong>
  </div>

  </div>

  <div id="action-panel-error" class="action-panel-content hid">
    <div class="action-panel-error">
      This feature is not available right now. Please try again later.
    </div>
  </div>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup yt-uix-button-opacity yt-uix-close" type="button" onclick=";return false;" id="action-panel-dismiss" aria-label="Close" data-close-parent-id="watch8-action-panels"></button>
  </div>


    <div id="promotion-shelf" class="promotion-shelf-slot yt-card yt-card-has-padding hid"></div>

    <div id="action-panel-details" class="action-panel-content yt-uix-expander yt-card yt-card-has-padding yt-uix-expander-collapsed"><div id="watch-description" class="yt-uix-button-panel"><div id="watch-description-content"><div id="watch-description-clip"><div id="watch-uploader-info"><strong class="watch-time-text">Published on Aug 12, 2014</strong></div><div id="watch-description-text" class=""><p id="eow-description" class="" >No other game has given me a greater feeling of dread than this one. Five Nights at Freddy's is incredibly unique and takes an approach to horror that I've never experienced before. If you're a fan of scary games you MUST check this game out!<br />Subscribe Today! ► <a href="http://bit.ly/Markiplier" class="yt-uix-servicelink  " data-servicelink="CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-target-new-window="True" data-url="http://bit.ly/Markiplier" rel="nofollow noopener" target="_blank">http://bit.ly/Markiplier</a><br />More Scary Games ► <a href="https://www.youtube.com/playlist?list=PL3tRBEVW0hiBSFOFhTC5wt75P2BES0rAo" class="yt-uix-sessionlink  " data-sessionlink="itct=CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-url="https://www.youtube.com/playlist?list=PL3tRBEVW0hiBSFOFhTC5wt75P2BES0rAo" >https://www.youtube.com/playlist?list...</a><br />PLAY THIS GAME ► <a href="http://www.indiedb.com/games/five-nights-at-freddys" class="yt-uix-servicelink  " data-servicelink="CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-target-new-window="True" data-url="http://www.indiedb.com/games/five-nights-at-freddys" rel="nofollow noopener" target="_blank">http://www.indiedb.com/games/five-nig...</a><br /><br />You Might Also Like ▼<br />Markiplier Highlights - <a href="http://www.youtube.com/watch?v=9DKZbZyW2-g&amp;list=PL3tRBEVW0hiAOf_drlpS1hqZjJknW88cB&amp;index=1" class="yt-uix-sessionlink  " data-sessionlink="itct=CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-url="http://www.youtube.com/watch?v=9DKZbZyW2-g&amp;list=PL3tRBEVW0hiAOf_drlpS1hqZjJknW88cB&amp;index=1" >http://www.youtube.com/watch?v=9DKZbZ...</a><br />Horror Compilations - <a href="http://www.youtube.com/watch?v=p03A7QTBuhg&amp;list=PL58D8AC6A97A69F45&amp;index=1" class="yt-uix-sessionlink  " data-sessionlink="itct=CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-url="http://www.youtube.com/watch?v=p03A7QTBuhg&amp;list=PL58D8AC6A97A69F45&amp;index=1" >http://www.youtube.com/watch?v=p03A7Q...</a><br />Happy Wheels - <a href="https://www.youtube.com/watch?v=veIB_RI8yMY&amp;list=PL3tRBEVW0hiBMoF9ihuu-x_aQVXvFYHIH&amp;index=2" class="yt-uix-sessionlink  " data-sessionlink="itct=CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-url="https://www.youtube.com/watch?v=veIB_RI8yMY&amp;list=PL3tRBEVW0hiBMoF9ihuu-x_aQVXvFYHIH&amp;index=2" >https://www.youtube.com/watch?v=veIB_...</a><br /><br />Follow me on Twitter ► <a href="https://twitter.com/markiplier" class="yt-uix-servicelink  " data-servicelink="CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-target-new-window="True" data-url="https://twitter.com/markiplier" rel="nofollow noopener" target="_blank">https://twitter.com/markiplier</a><br />Follow my Instagram ► <a href="http://instagram.com/markipliergram" class="yt-uix-servicelink  " data-servicelink="CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-target-new-window="True" data-url="http://instagram.com/markipliergram" rel="nofollow noopener" target="_blank">http://instagram.com/markipliergram</a><br />Like me on Facebook ► <a href="https://www.facebook.com/markiply" class="yt-uix-servicelink  " data-servicelink="CDEQ6TgYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-target-new-window="True" data-url="https://www.facebook.com/markiply" rel="nofollow noopener" target="_blank">https://www.facebook.com/markiply</a></p></div>  <div id="watch-description-extras">
    <ul class="watch-extras-section">
            <li class="watch-meta-item has-image ">
    <h4 class="title">
      Game
    </h4>
    <span class="metadata-row-image">
        <a href="https://gaming.youtube.com/game/UCnmz5MvTxblR-_D7rvEgd6Q" class=" yt-uix-sessionlink " data-sessionlink="itct=CC8Quy8YASITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ" data-url="https://gaming.youtube.com/game/UCnmz5MvTxblR-_D7rvEgd6Q" >
          <img src="//yt3.ggpht.com/gazXxsv-xd7mDPrO5e1-JbPEUPBJZHHT4d4voB8RSmV--hdT5Ao3Cfx3hFh2dxt8a0r7ibmQb1GBUPGuaw=w40-nd">
        </a>
    </span>
    <ul class="content watch-info-tag-list">
        <li><a href="https://gaming.youtube.com/game/UCnmz5MvTxblR-_D7rvEgd6Q" class=" yt-uix-sessionlink " data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw" data-url="https://gaming.youtube.com/game/UCnmz5MvTxblR-_D7rvEgd6Q" >Five Nights at Freddy&#39;s</a></li>
        <li><a href="https://gaming.youtube.com/game/UCnmz5MvTxblR-_D7rvEgd6Q" class=" yt-uix-sessionlink " data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw" data-url="https://gaming.youtube.com/game/UCnmz5MvTxblR-_D7rvEgd6Q" >Explore in YouTube Gaming</a></li>
    </ul>
  </li>

            <li class="watch-meta-item yt-uix-expander-body">
    <h4 class="title">
      Category
    </h4>
    <ul class="content watch-info-tag-list">
        <li><a href="/channel/UCOpNcN46UbXVtpKMrmU4Abg" class="g-hovercard yt-uix-sessionlink      spf-link " data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw" data-ytid="UCOpNcN46UbXVtpKMrmU4Abg" >Gaming</a></li>
    </ul>
  </li>

            <li class="watch-meta-item yt-uix-expander-body">
    <h4 class="title">
      License
    </h4>
    <ul class="content watch-info-tag-list">
        <li>Standard YouTube License</li>
    </ul>
  </li>

    </ul>
  </div>
</div></div></div>  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-collapsed-body yt-uix-gen204" type="button" onclick=";return false;" data-gen204="feature=watch-show-more-metadata"><span class="yt-uix-button-content">Show more</span></button>
  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-body" type="button" onclick=";return false;"><span class="yt-uix-button-content">Show less</span></button>
</div>





        <div id="watch-discussion" class="branded-page-box yt-card">
          <div class="action-panel-loading">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>

  </div>


      </div>
      <div id="watch7-sidebar" class="watch-sidebar">
            <div id="placeholder-playlist" class="watch-playlist player-height  hid"></div>



  <div id="watch7-sidebar-contents" class="watch-sidebar-gutter   yt-card yt-card-has-padding    yt-uix-expander yt-uix-expander-collapsed">
      <div id="watch7-sidebar-offer">
        
      </div>

    <div id="watch7-sidebar-ads">
              <div id="watch-channel-brand-div" class="" >
      <div id="watch-channel-brand-div-text">
Advertisement
      </div>
      <div id="google_companion_ad_div">
      </div>
    </div>


    </div>
    <div id="watch7-sidebar-modules">
            <div class="watch-sidebar-section">
    <div class="autoplay-bar">
      <div class="checkbox-on-off">
       <label for="autoplay-checkbox">Autoplay</label>
       <span class="autoplay-hovercard yt-uix-hovercard">
          <span class="autoplay-info-icon yt-uix-button-opacity yt-uix-hovercard-target yt-sprite" data-position="topright" data-orientation="vertical"></span>
<span class="yt-uix-hovercard-content">When autoplay is enabled, a suggested video will automatically play next.</span>        </span>
          <span class="yt-uix-checkbox-on-off ">
<input id="autoplay-checkbox" class="" type="checkbox"  checked><label for="autoplay-checkbox" id="autoplay-checkbox-label"><span class="checked"></span><span class="toggle"></span><span class="unchecked"></span></label>  </span>

      </div>
      <h4 class="watch-sidebar-head">
        Up next
      </h4>
        <div class="watch-sidebar-body">
    <ul class="video-list">
        <li class="video-list-item related-list-item show-video-time">
          

    <div class="content-wrapper">
    <a href="/watch?v=YT1NhLTwwEg" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCwQpDAYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHYXV0b25hdkiA2L6C7LO79ogB"  rel="spf-prefetch" title="WAS THAT GOLDEN FREDDY?! | Five Nights at Freddy&#39;s - Part 2" data-visibility-tracking="CCwQpDAYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDIgMOny7DTnmE=" >
  <span dir="ltr" class="title" aria-describedby="description-id-68713">
    WAS THAT GOLDEN FREDDY?! | Five Nights at Freddy&#39;s - Part 2
  </span>
  <span class="accessible-description" id="description-id-68713">
     - Duration: 24:35.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="autonav">Markiplier</span></span>
  <span class="stat view-count">25,492,850 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=YT1NhLTwwEg" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCwQpDAYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHYXV0b25hdkiA2L6C7LO79ogB"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCwQpDAYACITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDIgMOny7DTnmE=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="YT1NhLTwwEg"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/YT1NhLTwwEg/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=jGyOKQN5LhcwBQsRB7R6f_sRyPA" ><span class="video-time">24:35</span></span></a>

  </div>


        </li>
    </ul>
  </div>

    </div>
  </div>

        
          <div class="watch-sidebar-section">
      <hr class="watch-sidebar-separation-line">
    <div class="watch-sidebar-body">
      <ul id="watch-related" class="video-list">
          <li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=VXtVrNdD3YA" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCoQpDAYASITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Five Nights at Freddy&#39;s &#39;Not-So-Official&#39; Ending - Part 3" data-visibility-tracking="CCoQpDAYASITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCAu4-6zbXVvVU=" >
  <span dir="ltr" class="title" aria-describedby="description-id-763961">
    Five Nights at Freddy&#39;s &#39;Not-So-Official&#39; Ending - Part 3
  </span>
  <span class="accessible-description" id="description-id-763961">
     - Duration: 22:24.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">17,748,546 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=VXtVrNdD3YA" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCoQpDAYASITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCoQpDAYASITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCAu4-6zbXVvVU=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="VXtVrNdD3YA"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/VXtVrNdD3YA/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=rkGRsUDO_QAZmJWU9AaGhIpvStA" ><span class="video-time">22:24</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=l1gQ8VvRszs" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCkQpDAYAiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Five Nights at Freddy&#39;s: Secret 6th and 7th Night - Part 4" data-visibility-tracking="CCkQpDAYAiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUC75sbelZ6ErJcB" >
  <span dir="ltr" class="title" aria-describedby="description-id-583855">
    Five Nights at Freddy&#39;s: Secret 6th and 7th Night - Part 4
  </span>
  <span class="accessible-description" id="description-id-583855">
     - Duration: 19:42.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">16,336,634 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=l1gQ8VvRszs" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCkQpDAYAiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCkQpDAYAiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUC75sbelZ6ErJcB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="l1gQ8VvRszs"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/l1gQ8VvRszs/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=zTemUGmpIEBPnycxtwyGOP5exyU" ><span class="video-time">19:42</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=cNsUbtV001E" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCgQpDAYAyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Five Nights at Freddy&#39;s 4 Reaction Compilation" data-visibility-tracking="CCgQpDAYAyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDRptOr7Y3F7XA=" >
  <span dir="ltr" class="title" aria-describedby="description-id-748498">
    Five Nights at Freddy&#39;s 4 Reaction Compilation
  </span>
  <span class="accessible-description" id="description-id-748498">
     - Duration: 6:51.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">25,239,325 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=cNsUbtV001E" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCgQpDAYAyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCgQpDAYAyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDRptOr7Y3F7XA=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="cNsUbtV001E"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/cNsUbtV001E/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=iZjbeND8XqdjHqcvWbkRBDsVhe4" ><span class="video-time">6:51</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=s5GfhGFVCFE" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCcQpDAYBCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Five Nights at Freddy&#39;s: 20/20/20/20 COMPLETE" data-visibility-tracking="CCcQpDAYBCITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDRkNSKxvDnyLMB" >
  <span dir="ltr" class="title" aria-describedby="description-id-975371">
    Five Nights at Freddy&#39;s: 20/20/20/20 COMPLETE
  </span>
  <span class="accessible-description" id="description-id-975371">
     - Duration: 11:29.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">17,054,097 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=s5GfhGFVCFE" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCcQpDAYBCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCcQpDAYBCITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDRkNSKxvDnyLMB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="s5GfhGFVCFE"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/s5GfhGFVCFE/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=OP9ppF1fkSoKS8x9SWEHbk0cv1k" ><span class="video-time">11:29</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-playlist"><a href="/watch?v=iOztnsBPrAA&amp;list=PL3tRBEVW0hiDL09lO0xjKEix84OY27xet" class="related-playlist yt-pl-thumb-link spf-link  vve-check yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCYQojAYBSITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsbGlzdEiA2L6C7LO79ogB"  rel="spf-prefetch" data-visibility-tracking="CCYQojAYBSITCI_vnsWA99MCFRXRfgodL_cEcCj4HQ==">  <span class=" yt-pl-thumb">
      
    <span class="video-thumb  yt-thumb yt-thumb-168"
    >
    <span class="yt-thumb-default">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/vi/iOztnsBPrAA/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=TL_zN822M3KU_BOsTvRBBA6XNkQ" width="168" alt="" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" >

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>


    <span class="sidebar">
      <span class="yt-pl-sidebar-content yt-valign">
        <span class="yt-valign-container">
              <span class="formatted-video-count-label">
      <b>54</b> videos
  </span>

            <span class="yt-pl-icon yt-pl-icon-reg yt-sprite"></span>
        </span>
      </span>
    </span>

      <span class="yt-pl-thumb-overlay">
        <span class="yt-pl-thumb-overlay-content">
          <span class="play-icon yt-sprite"></span>
          <span class="yt-pl-thumb-overlay-text">
Play all
          </span>
        </span>
      </span>

  </span>
<span dir="ltr" class="title" title="Five Nights at Freddy&#39;s">Five Nights at Freddy&#39;s</span><span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ">Markiplier</span></span></a></li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=N9K2p54k9GA" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCUQpDAYBiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="I&#39;M &quot;FLEE&quot; FALLING (i&#39;m not sorry...) | Fleeing the Complex" data-visibility-tracking="CCUQpDAYBiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDg6JPx-dSt6Tc=" >
  <span dir="ltr" class="title" aria-describedby="description-id-362514">
    I&#39;M &quot;FLEE&quot; FALLING (i&#39;m not sorry...) | Fleeing the Complex
  </span>
  <span class="accessible-description" id="description-id-362514">
     - Duration: 33:56.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">22,452,302 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=N9K2p54k9GA" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCUQpDAYBiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCUQpDAYBiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDg6JPx-dSt6Tc=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="N9K2p54k9GA"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/N9K2p54k9GA/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=o32OSFjxBWW4zKo3j96SN3EX51s" ><span class="video-time">33:56</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=RMH2N_TiVg4" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCQQpDAYByITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Subnautica | Part 67 | FIRE ON THE BRIDGE!!" data-visibility-tracking="CCQQpDAYByITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCOrImn_8b94EQ=" >
  <span dir="ltr" class="title" aria-describedby="description-id-796389">
    Subnautica | Part 67 | FIRE ON THE BRIDGE!!
  </span>
  <span class="accessible-description" id="description-id-796389">
     - Duration: 17:32.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">534,538 views<ul class="yt-badge-list "><li class="yt-badge-item"><span class="yt-badge " >New</span></li></ul></span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=RMH2N_TiVg4" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCQQpDAYByITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCQQpDAYByITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCOrImn_8b94EQ=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="RMH2N_TiVg4"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/RMH2N_TiVg4/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=5fZ3mWIopjBNjNZq-4d_eLpO_9E" ><span class="video-time">17:32</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=60wLvPWXCCc" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCMQpDAYCCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="SCARIEST GAME EVER MADE | Five Nights at Freddy&#39;s 2 - Part 1" data-visibility-tracking="CCMQpDAYCCITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCnkNysz_eCpusB" >
  <span dir="ltr" class="title" aria-describedby="description-id-835648">
    SCARIEST GAME EVER MADE | Five Nights at Freddy&#39;s 2 - Part 1
  </span>
  <span class="accessible-description" id="description-id-835648">
     - Duration: 23:07.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">34,059,519 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=60wLvPWXCCc" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCMQpDAYCCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCMQpDAYCCITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCnkNysz_eCpusB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="60wLvPWXCCc"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/60wLvPWXCCc/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=SfSsQ4zJcxROyIOoxavhfcYO6b8" ><span class="video-time">23:07</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=k09_P17E2Wk" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCIQpDAYCSITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="OUT DEMON!! | Ben the Exorcist" data-visibility-tracking="CCIQpDAYCSITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDpspP29effp5MB" >
  <span dir="ltr" class="title" aria-describedby="description-id-78191">
    OUT DEMON!! | Ben the Exorcist
  </span>
  <span class="accessible-description" id="description-id-78191">
     - Duration: 22:23.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">539,142 views<ul class="yt-badge-list "><li class="yt-badge-item"><span class="yt-badge " >New</span></li></ul></span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=k09_P17E2Wk" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCIQpDAYCSITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCIQpDAYCSITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDpspP29effp5MB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="k09_P17E2Wk"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/k09_P17E2Wk/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=5H7OVQrtilRibpjoz-bSISh1t8I" ><span class="video-time">22:23</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=O7YhTL2X9JA" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCEQpDAYCiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  rel="spf-prefetch" title="PURPLE GUY ANIMATRONIC RETURNS! || FNAF Ultimate Edition (Five Nights at Freddys)" data-visibility-tracking="CCEQpDAYCiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCQ6d_sy6mI2zs=" >
  <span dir="ltr" class="title" aria-describedby="description-id-761075">
    PURPLE GUY ANIMATRONIC RETURNS! || FNAF Ultimate Edition (Five Nights at Freddys)
  </span>
  <span class="accessible-description" id="description-id-761075">
     - Duration: 14:30.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC5enhS5tdXhHNbj8s_kdBUw" data-name="related">FusionZGamer</span></span>
  <span class="stat view-count">40,012 views<ul class="yt-badge-list "><li class="yt-badge-item"><span class="yt-badge " >New</span></li></ul></span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=O7YhTL2X9JA" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCEQpDAYCiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCEQpDAYCiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCQ6d_sy6mI2zs=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="O7YhTL2X9JA"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/O7YhTL2X9JA/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=8pzj9PnHErk_gSe15rxZQZkh7z0" ><span class="video-time">14:30</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=OuW1e1nrXIw" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCAQpDAYCyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  rel="spf-prefetch" title="[SFM FNAF] Five Nights at Freddy&#39;s FUNNY vs SCARY Animations (FNAF ANIMATED)" data-visibility-tracking="CCAQpDAYCyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCMua3Pta_t8jo=" >
  <span dir="ltr" class="title" aria-describedby="description-id-617390">
    [SFM FNAF] Five Nights at Freddy&#39;s FUNNY vs SCARY Animations (FNAF ANIMATED)
  </span>
  <span class="accessible-description" id="description-id-617390">
     - Duration: 14:24.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UCEwXobhiNuJa6Qm8lQ9F2IQ" data-name="related">Spanky Cinema</span></span>
  <span class="stat view-count">19,105 views<ul class="yt-badge-list "><li class="yt-badge-item"><span class="yt-badge " >New</span></li></ul></span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=OuW1e1nrXIw" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCAQpDAYCyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CCAQpDAYCyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCMua3Pta_t8jo=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="OuW1e1nrXIw"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/OuW1e1nrXIw/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=h0J1QhTpedXEDobPhQAoIEijzUo" ><span class="video-time">14:24</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=BB_4BnQe-qc" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB8QpDAYDCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="WARNING: YOU WILL DIE | Five Nights at Freddy&#39;s 3 - Part 1" data-visibility-tracking="CB8QpDAYDCITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCn9fug54D-jwQ=" >
  <span dir="ltr" class="title" aria-describedby="description-id-142058">
    WARNING: YOU WILL DIE | Five Nights at Freddy&#39;s 3 - Part 1
  </span>
  <span class="accessible-description" id="description-id-142058">
     - Duration: 18:46.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">25,485,848 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=BB_4BnQe-qc" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB8QpDAYDCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CB8QpDAYDCITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCn9fug54D-jwQ=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="BB_4BnQe-qc"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/BB_4BnQe-qc/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=nkyL9zp1I7NHKdxVxZsCXohstlM" ><span class="video-time">18:46</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=4KgtmqbDYxM" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB4QpDAYDSITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  rel="spf-prefetch" title="CRAZY FIDGET TOYS YOU NEVER KNEW ABOUT!" data-visibility-tracking="CB4QpDAYDSITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCTxo22qrOL1OAB" >
  <span dir="ltr" class="title" aria-describedby="description-id-30293">
    CRAZY FIDGET TOYS YOU NEVER KNEW ABOUT!
  </span>
  <span class="accessible-description" id="description-id-30293">
     - Duration: 5:53.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UCMNmwqCtCSpftrbvR3KkHDA" data-name="related">Guava Juice</span></span>
  <span class="stat view-count">1,174,156 views<ul class="yt-badge-list "><li class="yt-badge-item"><span class="yt-badge " >New</span></li></ul></span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=4KgtmqbDYxM" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB4QpDAYDSITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CB4QpDAYDSITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCTxo22qrOL1OAB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="4KgtmqbDYxM"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/4KgtmqbDYxM/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=Qciey8uW4k-U2sX9ygW6aK7_Egc" ><span class="video-time">5:53</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=c5H7HqayshM" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB0QpDAYDiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Five Nights at Freddy&#39;s FAIL Compilation" data-visibility-tracking="CB0QpDAYDiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCT5Mq16uP-yHM=" >
  <span dir="ltr" class="title" aria-describedby="description-id-313031">
    Five Nights at Freddy&#39;s FAIL Compilation
  </span>
  <span class="accessible-description" id="description-id-313031">
     - Duration: 10:02.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">16,733,726 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=c5H7HqayshM" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB0QpDAYDiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CB0QpDAYDiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCT5Mq16uP-yHM=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="c5H7HqayshM"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/c5H7HqayshM/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=XFzcUi-7FnnIfjDvGgBUwmYBOQ4" ><span class="video-time">10:02</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=d5tK1iwoDyg" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBwQpDAYDyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  rel="spf-prefetch" title="[SFM/FNAF] Five Funky Night&#39;s at Freddy&#39;s 2" data-visibility-tracking="CBwQpDAYDyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUConqDh4trSzXc=" >
  <span dir="ltr" class="title" aria-describedby="description-id-176171">
    [SFM/FNAF] Five Funky Night&#39;s at Freddy&#39;s 2
  </span>
  <span class="accessible-description" id="description-id-176171">
     - Duration: 5:46.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC9CkODgD4NxA2CLf32By1_w" data-name="related">Father Ferguson</span></span>
  <span class="stat view-count">83,448,727 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=d5tK1iwoDyg" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBwQpDAYDyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CBwQpDAYDyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUConqDh4trSzXc=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="d5tK1iwoDyg"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/d5tK1iwoDyg/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=SysXYyvf_6I1YjTZaVpBn3ZqGM4" ><span class="video-time">5:46</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=FfObE6g0Ky4" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBsQpDAYECITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Five Nights at Freddy&#39;s GMOD Map" data-visibility-tracking="CBsQpDAYECITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCu1tDBuuLm-RU=" >
  <span dir="ltr" class="title" aria-describedby="description-id-45531">
    Five Nights at Freddy&#39;s GMOD Map
  </span>
  <span class="accessible-description" id="description-id-45531">
     - Duration: 15:05.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">21,237,610 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=FfObE6g0Ky4" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBsQpDAYECITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CBsQpDAYECITCI_vnsWA99MCFRXRfgodL_cEcCj4HUCu1tDBuuLm-RU=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="FfObE6g0Ky4"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/FfObE6g0Ky4/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=beTJd8CApK6D_wt-e4TI0TfxW1s" ><span class="video-time">15:05</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=SoHOs_xcykk" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBoQpDAYESITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  rel="spf-prefetch" title="FIVE NIGHTS AT FREDDY&#39;S!! (GTA 5 Mods FNAF Gameplay)" data-visibility-tracking="CBoQpDAYESITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDJlPPiv9bzwEo=" >
  <span dir="ltr" class="title" aria-describedby="description-id-241297">
    FIVE NIGHTS AT FREDDY&#39;S!! (GTA 5 Mods FNAF Gameplay)
  </span>
  <span class="accessible-description" id="description-id-241297">
     - Duration: 1:14:49.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC2wKfjlioOCLP4xQMOWNcgg" data-name="related">Typical Gamer</span></span>
  <span class="stat view-count">1,643,178 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=SoHOs_xcykk" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBoQpDAYESITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CBoQpDAYESITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDJlPPiv9bzwEo=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="SoHOs_xcykk"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/SoHOs_xcykk/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=Y6Y49Zr_zU7HxC3CJieviRpq7qk" ><span class="video-time">1:14:49</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=qKlr8NlaQcM" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBkQpDAYEiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  rel="spf-prefetch" title="THE GOOD ENDING?? | Five Nights at Freddy&#39;s 4 - Part 6" data-visibility-tracking="CBkQpDAYEiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDDg-nKjf7a1KgB" >
  <span dir="ltr" class="title" aria-describedby="description-id-70413">
    THE GOOD ENDING?? | Five Nights at Freddy&#39;s 4 - Part 6
  </span>
  <span class="accessible-description" id="description-id-70413">
     - Duration: 12:00.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="related">Markiplier</span></span>
  <span class="stat view-count">15,536,883 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=qKlr8NlaQcM" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBkQpDAYEiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIHcmVsYXRlZEiA2L6C7LO79ogB"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CBkQpDAYEiITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDDg-nKjf7a1KgB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="qKlr8NlaQcM"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/qKlr8NlaQcM/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=zaDiwYyWZ5C6z8YTenIQ2udJTnw" ><span class="video-time">12:00</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="/watch?v=GlZtlTon7_I" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBgQpDAYEyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  rel="spf-prefetch" title="Five Nights at Freddy&#39;s: Sister Location - Part 1" data-visibility-tracking="CBgQpDAYEyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDy35_R07Kbqxo=" >
  <span dir="ltr" class="title" aria-describedby="description-id-976730">
    Five Nights at Freddy&#39;s: Sister Location - Part 1
  </span>
  <span class="accessible-description" id="description-id-976730">
     - Duration: 29:14.
  </span>
  <span class="stat attribution"><span class="g-hovercard" data-ytid="UC7_YxT-KID8kRbqZo7MyscQ" data-name="relmfu">Markiplier</span></span>
  <span class="stat view-count">17,443,758 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="/watch?v=GlZtlTon7_I" class=" vve-check thumb-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBgQpDAYEyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIGcmVsbWZ1SIDYvoLss7v2iAE"  tabindex="-1" rel="spf-prefetch" data-visibility-tracking="CBgQpDAYEyITCI_vnsWA99MCFRXRfgodL_cEcCj4HUDy35_R07Kbqxo=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="GlZtlTon7_I"><img aria-hidden="true" style="top: 0px" height="94" src="/yts/img/pixel-vfl3z5WfW.gif" width="168" alt="" data-thumb="https://i.ytimg.com/vi/GlZtlTon7_I/hqdefault.jpg?custom=true&amp;w=168&amp;h=94&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=mw9YoEPW8FAU0Wbf9-YAhYi29gM" ><span class="video-time">29:14</span></span></a>

  </div>

</li>
                <div id="watch-more-related" class="hid">
    <li id="watch-more-related-loading">
Loading more suggestions...
    </li>
  </div>
  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander" type="button" onclick=";return false;" id="watch-more-related-button" data-button-action="yt.www.watch.related.loadMore" data-continuation="CBQSFhILaU96dG5zQlByQUHAAQDIAQDgAQEYACrPAQjIgMOny7DTnmEIgLuPus211b1VCLvmxt6VnoSslwEI0abTq-2Nxe1wCNGQ1IrG8OfIswEIu_TH85OPtI_EAQjg6JPx-dSt6TcIjqyJp__G_eBECKeQ3KzP94Km6wEI6bKT9vXn36eTAQiQ6d_sy6mI2zsIjLmtz7Wv7fI6CKf1-6DngP6PBAiTxo22qrOL1OABCJPkyrXq4_7IcwionqDh4trSzXcIrtbQwbri5vkVCMmU8-K_1vPASgjDg-nKjf7a1KgBCPLfn9HTspurGg%3D%3D"><span class="yt-uix-button-content">Show more</span></button>

      </ul>
    </div>
  </div>

    </div>
  </div>

      </div>
    </div>
  </div>
  <div id="watch7-hidden-extras">
      <div style="visibility: hidden; height: 0px; padding: 0px; overflow: hidden;">
      <img src="//www.youtube-nocookie.com/gen_204?attributionpartner=RPMNetworks" border="0" width="1" height="1">
  </div>

  </div>


  </div>

</div></div></div></div>  <div id="footer-container" class="yt-base-gutter force-layer"><div id="footer"><div id="footer-main"><div id="footer-logo"><a href="/" id="footer-logo-link" title="YouTube home" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw&amp;ved=CAIQpmEiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0" class="yt-uix-sessionlink"><span class="footer-logo-icon yt-sprite"></span></a></div>  <ul class="pickers yt-uix-button-group" data-button-toggle-group="optional">
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon" type="button" onclick=";return false;" id="yt-picker-language-button" data-button-menu-id="arrow-display" data-picker-key="language" data-picker-position="footer" data-button-action="yt.www.picker.load" data-button-toggle="true"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-footer-language yt-sprite"></span></span><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Language:
  </span>
  English
</span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="yt-picker-country-button" data-button-menu-id="arrow-display" data-picker-key="country" data-picker-position="footer" data-button-action="yt.www.picker.load" data-button-toggle="true"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Content location:
  </span>
  United States
</span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="yt-picker-safetymode-button" data-button-menu-id="arrow-display" data-picker-key="safetymode" data-picker-position="footer" data-button-action="yt.www.picker.load" data-button-toggle="true"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Restricted Mode:
  </span>
Off
</span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
  </ul>
<a href="/feed/history" class="yt-uix-button  footer-history yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon" data-sessionlink="ei=IUwcWc_aFJWi-wOv7pOABw"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-footer-history yt-sprite"></span></span><span class="yt-uix-button-content">History</span></a>    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon yt-uix-button-reverse yt-google-help-link inq-no-click " type="button" onclick=";return false;" id="google-help" data-ghelp-tracking-param="" data-ghelp-anchor="google-help" data-load-chat-support="" data-feedback-product-id="59"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-questionmark yt-sprite"></span></span><span class="yt-uix-button-content">Help
</span></button>
      <div id="yt-picker-language-footer" class="yt-picker" style="display: none">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

      <div id="yt-picker-country-footer" class="yt-picker" style="display: none">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

      <div id="yt-picker-safetymode-footer" class="yt-picker" style="display: none">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

</div><div id="footer-links"><ul id="footer-links-primary">  <li><a href="//www.youtube.com/yt/about/">About</a></li>
  <li><a href="//www.youtube.com/yt/press/">Press</a></li>
  <li><a href="//www.youtube.com/yt/copyright/">Copyright</a></li>
  <li><a href="//www.youtube.com/yt/creators/">Creators</a></li>
  <li><a href="//www.youtube.com/yt/advertise/">Advertise</a></li>
  <li><a href="//www.youtube.com/yt/dev/">Developers</a></li>
  <li><a href="https://plus.google.com/+youtube" dir="ltr">+YouTube</a></li>
</ul><ul id="footer-links-secondary">  <li><a href="/t/terms">Terms</a></li>
  <li><a href="https://www.google.com/intl/en/policies/privacy/">Privacy</a></li>
  <li><a href="//www.youtube.com/yt/policyandsafety/">
Policy &amp; Safety
  </a></li>
  <li><a href="//support.google.com/youtube/?hl=en" onclick="return yt.www.feedback.start(59);" class="reportbug">Send feedback</a></li>
  <li>
    <a href="/testtube">Test new features</a>
  </li>
  <li></li>
</ul></div></div></div>


      <div class="yt-dialog hid " id="feed-privacy-lb">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg" role="dialog">
        <div class="yt-dialog-fg-content">
          <div class="yt-dialog-loading">
              <div class="yt-dialog-waiting-content">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

          </div>
          <div class="yt-dialog-content">
              <div id="feed-privacy-dialog">
  </div>

          </div>
          <div class="yt-dialog-working">
              <div class="yt-dialog-working-overlay"></div>
  <div class="yt-dialog-working-bubble">
    <div class="yt-dialog-waiting-content">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Working...
    </span>
  </p>

      </div>
  </div>

          </div>
        </div>
        <div class="yt-dialog-focus-trap" tabindex="0"></div>
      </div>
    </div>
  </div>


<div id="hidden-component-template-wrapper" class="hid">    <div id="shared-addto-watch-later-login" class="hid">
      <a class="sign-in-link" href="https://accounts.google.com/ServiceLogin?passive=true&amp;service=youtube&amp;uilel=3&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252Fwatch%253Fv%253DiOztnsBPrAA%26feature%3Dplaylist%26hl%3Den">Sign in</a> to add this to Watch Later

    </div>
<div id="yt-uix-videoactionmenu-menu" class="yt-ui-menu-content">  <div class="hide-on-create-pl-panel">
    <h3>
Add to
    </h3>
  </div>
  <div class="add-to-widget">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Loading playlists...
    </span>
  </p>

  </div>
</div></div>    <script>var ytspf = ytspf || {};ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['request-headers'] = {'X-YouTube-Identity-Token': null};ytspf.config['experimental-request-headers'] = ytspf.config['request-headers'];ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 50;ytspf.config['navigate-lifetime'] = 64800000;ytspf.config['animation-duration'] = 0;</script>
  <script src="/yts/jsbin/spf-vflz-OhP4/spf.js" type="text/javascript" name="spf/spf"></script>
  <script src="/yts/jsbin/www-en_US-vflWXC4tt/base.js" name="www/base"></script>
<script>spf.script.path({'www/': '/yts/jsbin/www-en_US-vflWXC4tt/'});var ytdepmap = {"www/base": null, "www/common": "www/base", "www/angular_base": "www/common", "www/channels_accountupload": "www/common", "www/channels": "www/common", "www/dashboard": "www/common", "www/downloadreports": "www/common", "www/experiments": "www/common", "www/feed": "www/common", "www/instant": "www/common", "www/legomap": "www/common", "www/promo_join_network": "www/common", "www/results_harlemshake": "www/common", "www/results": "www/common", "www/results_starwars": "www/common", "www/subscriptionmanager": "www/common", "www/unlimited": "www/common", "www/watch": "www/common", "www/ypc_bootstrap": "www/common", "www/ypc_core": "www/common", "www/channels_edit": "www/channels", "www/live_dashboard": "www/angular_base", "www/videomanager": "www/angular_base", "www/watch_autoplayrenderer": "www/watch", "www/watch_edit": "www/watch", "www/watch_editor": "www/watch", "www/watch_live": "www/watch", "www/watch_promos": "www/watch", "www/watch_speedyg": "www/watch", "www/watch_transcript": "www/watch", "www/watch_videoshelf": "www/watch", "www/ct_advancedsearch": "www/videomanager", "www/my_videos": "www/videomanager"};spf.script.declare(ytdepmap);</script><script>if (window.ytcsi) {window.ytcsi.tick("je", null, '');}</script>      <script>
    yt.setConfig({
      'VIDEO_ID': "iOztnsBPrAA",
      'THUMB_LOADER_PAUSE_MS': 0,
      'THUMB_LOADER_GROUP_PX': 400,
      'THUMB_LOADER_IGNORE_FOLD': false,
      'WAIT_TO_DELAYLOAD_FRAME_CSS': true,
      'IS_UNAVAILABLE_PAGE': false,
      'DROPDOWN_ARROW_URL': "\/yts\/img\/pixel-vfl3z5WfW.gif",
      'AUTONAV_EXTRA_CHECK': false,

      'JS_PAGE_MODULES': [
        'www/watch',
        'www/ypc_bootstrap',
          'www/watch_transcript',
          'www/watch_speedyg',
          'www/watch_autoplayrenderer',
        ''       ],


      'REPORTVIDEO_JS': "\/yts\/jsbin\/www-reportvideo-vflctzZKB\/www-reportvideo.js",
      'REPORTVIDEO_CSS': "\/yts\/cssbin\/www-watch-reportvideo-vflFvdTR0.css",


      'TIMING_AFT_KEYS': ['pbp', 'pbs'],
      'YPC_CAN_RATE_VIDEO': true,


        'RELATED_PLAYER_ARGS': {"rvs":"endscreen_autoplay_session_data=autonav%3D1%26playnext%3D1%26itct%3DCBYQ4ZIBIhMIj--exYD30wIVFdF-Ch0v9wRwKPgdMgxyZWxhdGVkLWF1dG9IgNi-guyzu_aIAQ%253D%253D\u0026author=Markiplier\u0026session_data=itct%3DCBUQvU4YACITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=YT1NhLTwwEg\u0026short_view_count_text=25M+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYT1NhLTwwEg%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DH7t6Sq2PXcjdpGU5PrufXZDmbJo\u0026title=WAS+THAT+GOLDEN+FREDDY%3F%21+%7C+Five+Nights+at+Freddy%27s+-+Part+2\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYT1NhLTwwEg%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DH7t6Sq2PXcjdpGU5PrufXZDmbJo\u0026length_seconds=1475,author=Markiplier\u0026session_data=itct%3DCBQQvU4YASITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=VXtVrNdD3YA\u0026short_view_count_text=17M+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVXtVrNdD3YA%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3Dc89iyZrMQdVPqsM2EawkoQ3vPf8\u0026title=Five+Nights+at+Freddy%27s+%27Not-So-Official%27+Ending+-+Part+3\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVXtVrNdD3YA%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3Dc89iyZrMQdVPqsM2EawkoQ3vPf8\u0026length_seconds=1344,author=Markiplier\u0026session_data=itct%3DCBMQvU4YAiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=l1gQ8VvRszs\u0026short_view_count_text=16M+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fl1gQ8VvRszs%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3Dy9QH_IqssmUyzCWnOLQlSzy6KVc\u0026title=Five+Nights+at+Freddy%27s%3A+Secret+6th+and+7th+Night+-+Part+4\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fl1gQ8VvRszs%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3Dy9QH_IqssmUyzCWnOLQlSzy6KVc\u0026length_seconds=1182,author=Markiplier\u0026session_data=itct%3DCBIQvU4YAyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=cNsUbtV001E\u0026short_view_count_text=25M+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FcNsUbtV001E%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DBA7Oauo_dOykWtSgfUN3i6BbF_w\u0026title=Five+Nights+at+Freddy%27s+4+Reaction+Compilation\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FcNsUbtV001E%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DBA7Oauo_dOykWtSgfUN3i6BbF_w\u0026length_seconds=411,author=Markiplier\u0026session_data=itct%3DCBEQvU4YBCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=s5GfhGFVCFE\u0026short_view_count_text=17M+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fs5GfhGFVCFE%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3Dm_N-SYb_kEyOctzKR4JJW0IG8M4\u0026title=Five+Nights+at+Freddy%27s%3A+20%2F20%2F20%2F20+COMPLETE\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fs5GfhGFVCFE%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3Dm_N-SYb_kEyOctzKR4JJW0IG8M4\u0026length_seconds=689,thumbnail_ids=iOztnsBPrAA\u0026session_data=itct%3DCBAQvk4YBSITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026playlist_iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FiOztnsBPrAA%2Fmqdefault.jpg\u0026playlist_length=54\u0026list=PL3tRBEVW0hiDL09lO0xjKEix84OY27xet\u0026video_id=iOztnsBPrAA\u0026playlist_iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FiOztnsBPrAA%2Fhqdefault.jpg\u0026playlist_title=Five+Nights+at+Freddy%27s,author=Markiplier\u0026session_data=itct%3DCA8QvU4YBiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=N9K2p54k9GA\u0026short_view_count_text=22M+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FN9K2p54k9GA%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3D82pP7vtsXOYbZps4wpVUpRSWve4\u0026title=I%27M+%22FLEE%22+FALLING+%28i%27m+not+sorry...%29+%7C+Fleeing+the+Complex\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FN9K2p54k9GA%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3D82pP7vtsXOYbZps4wpVUpRSWve4\u0026length_seconds=2036,author=Markiplier\u0026session_data=itct%3DCA4QvU4YByITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=RMH2N_TiVg4\u0026short_view_count_text=534K+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRMH2N_TiVg4%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DsecnIhXvR59WhtTmnlPCrT58BDs\u0026title=Subnautica+%7C+Part+67+%7C+FIRE+ON+THE+BRIDGE%21%21\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRMH2N_TiVg4%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DsecnIhXvR59WhtTmnlPCrT58BDs\u0026length_seconds=1052,author=Markiplier\u0026session_data=itct%3DCA0QvU4YCCITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=60wLvPWXCCc\u0026short_view_count_text=34M+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2F60wLvPWXCCc%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DWlIcPWZh17zgKJQJrLlnkU6EwMQ\u0026title=SCARIEST+GAME+EVER+MADE+%7C+Five+Nights+at+Freddy%27s+2+-+Part+1\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2F60wLvPWXCCc%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DWlIcPWZh17zgKJQJrLlnkU6EwMQ\u0026length_seconds=1387,author=Markiplier\u0026session_data=itct%3DCAwQvU4YCSITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=k09_P17E2Wk\u0026short_view_count_text=539K+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fk09_P17E2Wk%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DN55cZe3AbA8ryfHV7d3kP9KjyG0\u0026title=OUT+DEMON%21%21+%7C+Ben+the+Exorcist\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fk09_P17E2Wk%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DN55cZe3AbA8ryfHV7d3kP9KjyG0\u0026length_seconds=1343,author=FusionZGamer\u0026session_data=itct%3DCAsQvU4YCiITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=O7YhTL2X9JA\u0026short_view_count_text=40K+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FO7YhTL2X9JA%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DvGIwygpUSPgRTEr8pyzVj_SUyLY\u0026title=PURPLE+GUY+ANIMATRONIC+RETURNS%21+%7C%7C+FNAF+Ultimate+Edition+%28Five+Nights+at+Freddys%29\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FO7YhTL2X9JA%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DvGIwygpUSPgRTEr8pyzVj_SUyLY\u0026length_seconds=870,author=Spanky+Cinema\u0026session_data=itct%3DCAoQvU4YCyITCI_vnsWA99MCFRXRfgodL_cEcCj4HTIJZW5kc2NyZWVuSIDYvoLss7v2iAE%253D\u0026id=OuW1e1nrXIw\u0026short_view_count_text=19K+views\u0026iurlhq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOuW1e1nrXIw%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DbMVj14HKf-WxAsITUItN0a8eaCI\u0026title=%5BSFM+FNAF%5D+Five+Nights+at+Freddy%27s+FUNNY+vs+SCARY+Animations+%28FNAF+ANIMATED%29\u0026iurlmq=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOuW1e1nrXIw%2Fhqdefault.jpg%3Fcustom%3Dtrue%26w%3D336%26h%3D188%26stc%3Dtrue%26jpg444%3Dtrue%26jpgq%3D90%26sp%3D68%26sigh%3DbMVj14HKf-WxAsITUItN0a8eaCI\u0026length_seconds=864"},



          'BG_P': "bKIPkNNlGgMrsYQLIIQbnJf7QlEtfJog\/ReBdicUAeGd427+TLI9YQeR+Gv2pI9nk7O8S1S1OBULXp0KpXg1z0m3pL6\/wydFEe3+1em3gQ3EIWzgON8jyF\/jc5bn0tkveEPWeQUUOnRAXm+AW33aYdkHRuBZTmOjeWKLCyfosW0UyIN+8LFdAT3riGShGztrjs4Jan287uSor+EqSSlDciQ+DjYBuExkA6Uv8mVMOOZfxvvx9W3rPQUwVFL9cfVmMll4WcD1NBN8WgVMrLEVRV8eRMd5G7BG5BwV2NaTBMSdHbiuVjUslXJXjONNbdUxSIzbH+kBV4S4xDFqMCwbckOIucsKNfVKcKJIZ9yUq1q4x24sZAR6dF6qFAghLsX1eJbtgEgg2mksTK2i4SjjQRjIpBA9R50YUtg2xuMx0Dqnw8\/fk6VY6dN45vhm00mdF5KEy8YFOKZix+ZSratoVZdb7\/li8N67Sjh56IQ6VZwi4ga0yE7P6foBvBBCQRkKCnFGbaFE966emjzw2EDV3gO3LLOOITQguxdQLAy00HfxwgUXU9bwwm8VRCNaaW4akdgOTxls1dStA6BQTO4FrO47wgOqdb9N+dZVqv5z67KttrwfwOXVJo5NkhocBTHER0dvVPBy80dOm3fCKg7H0+w1ag4omebicuiilvRaKlt4KCh0rLBlReift0zFDB7IVt+9aD6nFUxFUKKaXETpbQ05jXH8NixDn4LzlMaHaCybQEETh2Pny1XuE5mxFOefVPR5kGhDxw7646WEO0JjUIBcPxkOqz0Lbmr9n5duzWPXwn1oNViiu8zMBC6TK4M8nd\/yg\/gvgSVNg8Ae5GGSdL7SZelOHJyq+YQDpxbxqpaYAOinkxgRdce+8LaASkb39i55Pun5vHCzWAoSGPENGfntxSEdNYC2mGpR7J7grapuVDPu\/rZYb70QQGT9gcjKBUXFJiwhiCKsRDknIToXpBIlmBB5eUBIKqTVrg1M0AAO\/dc14cdF362zVv+KIH8AtTtXciog+myC0zBGA\/5qt5UH51m1w4buSFI8le3EwAGp13dG5R4rqwY4rvUkiukHUQI+NzHDkzaeos+MMFiZdybuZ8qFJEKTRDGesy6whC2jifALsYDgLQE\/O7it5LGpdGw3eCn48OL\/I5B5cuwOGzg+gPz2pibq6CyMRhSMah0j88fUtaZB9U\/IpL3YKz4WN\/keKTqvH5oN+7l8QqdE6SXWaK6GAq+cM4E8vHT7aG76o\/7gvBtCuRFZOYQEVuJVT8jxM+X5sNmNlv44r2R6rcApnjSw7GSaLkZ9k10rAN0FM8z2FnoaiAjwEuTBPqrq\/hmhbY0x8ODLWFvfNMNeglPEymJ4XaA0USqC\/8UQrGqKIQV4MzXF17YM4kszkq86KCu7VQ53vtNn8G7fb+LUC61Ih5L1ZxMiPlNkkcq7TSbvX9Te+XwcjnJIqsRMnZ6gPhGhrE3stLU8j02QmfF4caynCgZSfepnVNBU+Q2twJ3OzOv6AdI8zwfKXrLXmWWYx3qqUHL25mJ33nN3bHmjfBDzdh10qjeWdAlCnPE9QHwMgnR5uyHetsd4ucZ8HYGqj480qHmqk8rjOl77jJuo17ohe3sdweYYT3GppbEBugo0eftbwLyaVYG8f4whCd02MI8xD4PJSgxVA2v4Jh6vYq169KpSPSff62J9haazic\/Odz\/hRRCr8kmyZGvpZdvfZ3nF2kxLEtVn2bJlJraNYzwGLT8L\/CqVnDoCHEvZSvx42UrKatKsy4UzGS6U2KwtHq2idIC2QteArGPrf4v\/7QyEFQ0BgipfzVpHDgnepUZ1L8ElpoGrJzinQeUm9TpS1HcEU2+1GqTwkrSgW6fO9+xTiq8EL4Ft1c02HQiQG4Zoz+w4OlAQiALusXskEsNOi7rm\/BX7SrW+KCuJVDrsOskTyUc5knAVbctAT\/ALaMBjx\/jynM52AOegeluYqe3LvDTu+x5hHC3gmhpsAFOlyQVFp5O6xOwMx0T04ljbzf2Jf1OE297Hm2+FohP3cRFyr4T4D5Hdw+nfXeVknIT0jCnGPgKX74vTnguzXYsAqj20LYjf1XMQttMfZLgNDhGuiFRVLaCcByELj9GyNe10Y7yX\/cl26fhrVVyv+mpxJ2q48HtcxCepLS4XgRHzNsfNYKH91c9Z1BMgqVqTW84c8HfEZuaVR9etLi2Tgxl6a3T+g66H39G7KwgbGtLFZu0WX0uPQAtjq+8fAjSoRuqYIv2BkZGejVekguHu6c+XP0LV2qcu\/4JhHVV2EUS\/\/gW2FRgL5GdHoPI8kexK\/pGponc9d9xkKILfNKbAH+td3WidpSBKmaFSpkFLiQ\/s\/mZgr3xbYibbzQlfNRdPLT8W2Juzb8f38D7tXCwzcIHOzTWHmVLqZsPiZaNJH49BWURubKkjyxJxusjlQ9UsJ8ZynghzFrS\/AEliisogwoiMZ8G46hfCnXJ9L5Vag4yIDBDz4iXRpVTIqbZU0bmf8DqlvidKeFK5schnT1zjTIiP4Vi\/SoyuhK81WL0+WhQI58fkNQffH\/JJbA5nL+13MpveBnRdoUX6Kv+qcCEbFZt14eGLGW6pFkljT9jbdso2VZ9MGWmd\/4AY9F5t1YkdUSgMVXyY1NBevtAi9Nfj7Wgo\/\/XH39vqCU4Cn5YpRBFuZL+64q+iGuXqA\/PPG9wL5g2Evtb2RTZ6c4DJreKhh9+0SPBVxQzWt1ghepInn9GHFzRHCrEF3buBVYjhEm19kq+XRM+Y5bPMEOukbiJUfXZP1RlGNfnpM+3uhTQhKhmsKv\/s8+6qzydQ0yydCaxP27aqBNhsnvA9cCgFo4KYXTmuEDElo3AOp7BszxQGSQyZolCbTyzbGChS7Ga0Va1KNrPS1O7udfFAspLZbUhMMG2cF5qgtWgbW9XPvnEiY2s1wXzfy2u6KVNU2iCKKiooySrpXVDmEPEasV0hVDOwjp7ymo65JsA7v\/w8tWo0RgzT2ks1CLm3\/KyOE2OsEcxMHicrofRpbPuwZFKHYHyJdyXb4Lx1+weP5J8cKmcKNmx\/AG6bIn97QvS6yIy5G+DMvfe678\/wIALjYXOfbPtc\/PGHcanWAxTAFZ3Kb7rklsJF3dRRz8WP+jAgnD4Uc9XznotVyL3ErCGBs+2qegKfXPvcUv9QYfF6qoPVurR0\/wGTpEU9WY0tCN2PKnlM3yMOI3QWQhiUPh+TvTnXz9RniagkvnOrBgV3scWPWgp41co1BrDv5l5WewALcCrNkvEJBjh+NHXRvbhSudi9mxRfpa3QasnRVa2tGuu5eD\/api6VgF8yg1mi+CesbHggllgSq4z8O78S\/NVhVDj9iFOv7C9BDuM7pNTpAWZBU4SQ5co9Eb2K5HBVPqXzyOgovQTrxHYUFzAEB2XhhbQiu3Wy2Dwek5rybUHUEJ9sGC8IYC+l2mu8YkchWhA2bPyIK76evvdhBUbeGJoST9WvZfEuIPgXNAA6IJBGM2eXcqowjXCEB37JAwwt19VmrRkt5LJtvv8HFJOWyl+Mtd9Xd3MqoCncJ7XgC4ymZ1ivwYStoH0dhw3LjfyjKvIctHayYM0EfBusMLUf2rc90yppGOqM2tbLlw\/zUbTei8LS42Vf5\/HgILV7nxSzYb9F0FG+LB4IiD36SPEc4uqfkB9ohWcfMB3zDExHvbYy0YJSZYPftUlPETIt1hL31ZDHANbXUsj6zlB0uRhCOM9IskJwxxOPt6M\/f1PjKA2pnbGMlN0I7S3+tyCY0aLcttwAumQhh4lJEeZni\/orRGbZFQGw2TPh7kKZU+a7Hd6\/qbGblLSae\/rZE3Jcd0gYO0J7PqYCW9LShUwpbLkbg6CfX4BA0hgA+KBqZGmAWGq7HGEYRx9veH0QO0zRyp87454NHJA2zwtdGz0kPZvoMU4YQY1jh+CpipWu+j+kVIaBJ+iFlqdVycl7qC7Ok4r8YYl7Drr2FLphePnIJqE4M\/1bao2KUlIX96TNSuBo6sQD\/In6lmpOxILz9q3oVuDI3ymo2slAznulugCSYz0+nCb0EBCTrph7xfN2htNCFZauVM3XZW+Is6KyKZHtxb5Q1MXDeuY12EioJ8xr8XxDeOdKeS166U9QyKYKc6kHPatDirGNifgdilfX96GMOoYDoWDV0l0pDKD+uo0My3HcengmnD546Wp5ykJyITe\/XfaG+S1Wve55GfbmmeneGlwncU05zD4oKFu63keG7OGYFrJMagbdGNB8FjSaxgoGKkaqfPSWCUhzsjQfsY7G0pfy9MzzL+OsYXbQOeM0zOBYsN6t+2TffcPiK4LAms7y2wDMxWwut1YRNg4igfH8tNrWFKPk92qV1OzoofZ1we25c9GnHx+0LHMoWIiAR5tpEXwpEu\/nPYlmnNdpqFh53Az9cfDlJjuxP0Ydqe\/11EfDtpUyMkDeNK9kRt9PUuz7\/s4+RY1ZnU5UXLVZCnnmt6MdW6ZeT9BvzXsdul5SkGd\/GT1RBQBMFTLQOy+B6ZgntwaSTcKGsM4mRkeUvnNZsF6Tulb17u0AVyUJNu14vVWTf588eh7WMh8YVSOEoMAwlmZNJZfnVtU5z9AE8fOcm5C9DNNKDUDf+42CsRHtjvtjg\/QdjXuZ9qoVn1znlXulM08XKQKMsWyLFZfQZD7c5bRdWmM6ykJCOM+yMLTsZ9tEaXRbXYIm+2Co0nTRJaUmwFt5MxZBiJDMPbTEe+w3hgCL0s0T\/fpqrzPkPOwCUJbl0mi7TFbia8ovShJUlYEVD7ipTkGYcKbZU2Lpbr9Wn\/5JQ+Qo6iCZm9nijVPnH2fU5ht+8NwEU3e4FQZZVwHPDVbK3pk6DzG2PAN7X1SaZtPTSJoyDCCjaeOs3vERMrPxWhM3bM2B9nm7Dlh+Uz6iyASb+AuHLSwqMDmf0lsNhSTpBnqGAatPfpfLfH\/hHK2eVYTYKH22Sv9cuFYMo\/1u+WBLZgb0ReVIhR+vV4iZhFwOJjOmXaYVlL9Y3S4nc5FOvmgZhtb4WxuDacY8OW276zAt88a7Z60pqfkX3jOuTftlZVj7d72TIreLiriJDGcq+u+EKymsoF8dg7BFVn22NPGwtVz5lbRDt9gDy8dPnoxLo10EoB6cw0ww6BBPC70uMdgvJU+gRV9A1cr0VR1DDKayD73BfPfhIdbX8SOostzlZKKQvNt96HeNaPo\/chjOrdCLKEhNKiXJvzgo0i2krxipnchc7OXmMr3NP0aNondc35u7f0epeXpTh6WQYoAVfKVqn5ckP0PH\/oibQd1LqFywGFOWCabWhX5OwbJGeTTWyIsq4FxSAJxqXbeAeJMrmXIEKPtPEhqKFuCGpy3d+rdnrRxaxikjGV\/gxQGduY\/JDHRqe7bStDdnRxodXTTLq\/5mCrl6Zw1K3p6Hk5QYU5pl+CY0j1PLea0LTUOcQCRmCH8MzNGnyKoXXdGN4SnUgB6il0f5u1+Wov1xj3KVOgZvQI3fj2HSAMBt4YIZoyryEPCQVW6piJ9p+ryrWLWoaWPPaWKUPs7Ujog6\/lnGFULAv8g2TLIi8lPF5BOIfDpK+IGT3scmIokzUAP0euGhR\/mNbngdwCtLG4IonW5BZnUF9l9L3l5rcQFU7+TYiUSxRu3EXzoC7JcQTCzVVvvehjZiG32gQ6eRLPR+ZDvqvy5KJl18nmV2YyTIEU1ITujv5Csa7qi4sShCwbqoj+BuejBaRBn1V\/uSbJp3amu3t+EfZip5AN+ekTQAGvlGuyoAwglyPc6\/WYvaVkLdWZ7a\/Ql8A32Y+T+\/Cl50oc1If7\/ufsAt8dp9KR6HGMFwh\/o7XjoRgeEvzPCga0drdVVlmJ09RInwn8EytD4LkiqXjLy+PxbnWMxB1ZcNdWOij4VygyE03LWGahQYcYTuCnYdxOL87wCxuqAiQT5leIJl1bSEADlWymtAslZ98AFFQI4roPKFKtTtmO\/6EZHVQufiv8ppzCjoift6HkGBOtS69Y9HDv5yXxllK7dG4+UtwB121UIpvVKKiyyZRkDF+L7kmXeTuT2j6ogQAXKliGw\/K\/01lbcLUqCGIAsIyL4vR+KNhFikWTEAOkLZMJseC7fTAMG9XKqAdl2ouDBrzDymMmOWZ8X\/NBzlNob9LSC1Gk\/fl8tQjMaB0o7K0k\/3KIRQFB8qQNOINQrqZWeooh0BKwUDrlscw\/zpo6H4hOtlxTIYN+W1vl5fQGH9QHrQkwGtoSp08\/890MhoO+hyz+KZzNIsBp62M+DGy6KdwRZr613R9n6T1+4MuuqZFs2WAZK\/vbOdlyYGqgne+8hPpv2b9W4Kf6fLHZVa+0tT2b20LYjVRJ3gHuO4wJdNaJ0A6Rd6z4MfEFzQEKawAw49OprfhjhQztrDUOkCROGZEOfQmVqK64VTdcMVkGBmoZJ\/1HEMFqjpFphJlpBo82b6HkjRoxPFqH+l+k2\/O6gLyoRoUqH0NDFoIQnQaLuqr+JbYO55LUsr0z6JVtAODv\/a93n+Iu50xvGZ5zv+NEHi4vqJC7Vp7MWfphZ834fNQ6GCJOmsz3GAlhg6SkPO8k3itXYFm46CDiLGIWEFTrAYSvsgDwcJwQ+eE8De6+gnnbulEFAYmc9muB0OaVwdSXq+lgMXnG8gSSw3NAx44kyVi33OGF+hurZoEQve1EjFoDTD2sn+\/\/cETFlarkA6cRmVYEsVBPJtWhNmtzXpdO6Lp0qO1bk5VguyYuXs+j7sNru\/Lrcj6+GTNOBEyzjrATaEtKaRt+8U2nMAsnfSEjJNy4LyoA7KCWcC7b0gyLXkej0ZVZSwJuRU9e2C6eH07oLXqL47An3veiIKXCDQoydMosqTMpoymm5PrwU\/RK9RuU5sjkaGX0+aZnKsYpRxrodtXYwVambqH6iaQUIkYTnOYlbmgUmcBAxzNrnWlYWA8nJuI4rZZDkXTG3g5UzTtdO+v\/0OKYA+ze+PiUEUpesFGqVUn\/\/QP+KNWzeqTbXZwOfCXRVuOWLoGQAudSlKL39EugS2SeHZVd8gBibch0mpzmsxj5hVY\/NN71egsaeh4cz3psytf8r2U213vJurnBTVBuldwkq\/sdTubQihnF83iaylblwQFcGK+aO37L5zL+5tBZmHPXkvDrxiPfxWcN9JbmX3VGDCvNwVbrgnJMWp7dw1oywzrM=",
          'BG_IU': "\/\/www.google.com\/js\/bg\/ksc7tSTcKIWhhmd-Luae5nAPk8f5-QiRIufr1zZGjxo.js",

        'METADATA_LANGUAGE': 'en',


        'COMMENTS_TOKEN': "EhYSC2lPenRuc0JQckFBwAEAyAEA4AEBGAY%3D",

      'GET_PLAYER_EVENT_ID': "IUwcWc_aFJWi-wOv7pOABw",
      'HL_LOCALE': "en_US",
      'TTS_URL': "https:\/\/www.youtube.com\/api\/timedtext?expire=1495051921\u0026signature=5BC747671179D5942D8497B3749A8DA298057DBA.826A21C8675DE0644948F8ACF0509B06CE0B309F\u0026hl=en_US\u0026asr_langs=pt%2Cen%2Cnl%2Cja%2Ces%2Cfr%2Cit%2Cde%2Cko%2Cru\u0026sparams=asr_langs%2Ccaps%2Cv%2Cexpire\u0026caps=asr\u0026key=yttt1\u0026v=iOztnsBPrAA",
      'JS_DELAY_LOAD': 0,
      'LIST_AUTO_PLAY_VALUE': 1,
      'SHUFFLE_VALUE': 0,
      'SKIP_RELATED_ADS': false,
      'SKIP_TO_NEXT_VIDEO': false,
      'RESUME_COOKIE_NAME': null,
      'CONVERSION_CONFIG_DICT': {"rmktEnabled":true,"baseUrl":"https:\/\/www.youtube.com\/pagead\/viewthroughconversion\/962985656\/","vid":"iOztnsBPrAA","focEnabled":true,"uid":"7_YxT-KID8kRbqZo7MyscQ"},
      'RESOLUTION_TRACKING_ENABLED': false,
      'MEMORY_TRACKING_ENABLED': false,
      'NAVIGATION_TRACKING_ENABLED': false,
      'WATCH_LEGAL_TEXT_ENABLE_AUTOSCROLL': false,
        'SHARE_ON_VIDEO_END': true,
        'SHARE_ON_VIDEO_LIKE': true,
        'SHARE_ON_VIDEO_START': false,
      'ADS_DATA': {"afv_vars":{"google_eids":[],"google_pucrd":"","google_cust_gender":"","google_yt_pt":"","google_ad_host":"","google_language":"","google_video_doc_id":"","google_ad_block":"","google_ad_format":"","google_loeid":"","google_ad_host_tier_id":"","google_tag_for_child_directed_treatment":"","google_ad_client":"","google_ad_height":"","google_scs":"","google_cust_age":"","google_ad_type":"","google_ad_channel":"","google_core_dbp":"","google_targeting":"","google_lact":"","google_page_url":"","google_alternate_ad_url":"https:\/\/www.youtube.com\/ad_frame?id=watch-channel-brand-div"},"show_afc":false,"show_instream":true,"afc_vars":{"lact":"","core_dbp":"","tag_for_child_directed_treatment":"","ad_host":"","ad_type":"","ad_channel":"","language":"","targeting":"","video_doc_id":"","format":"","alternate_ad_url":"https:\/\/www.youtube.com\/ad_frame?id=watch-channel-brand-div","pucrd":"","eids":[],"loeid":"","ad_host_tier_id":"","ad_client":"","ad_block":""},"pyv_vars":{"iframe_json":"{\"google_eids\":\"56702193\",\"google_cust_gender\":\"\",\"google_yt_pt\":\"APb3F2-eeD4fzhCXXljaaq2QAiZ6qRUd31ZfE7Yi_FUaGV2z8MvvbsC5yrCY_T9_cCwhHXezrYJG5LJzOqlwJmEDHe9zXmsu4He8_B4Vo6m1QQnAPOom5h75sOMqhqX4MyX_jwtNCUQBAa7nefHLMeHzHZK0hRGt1lk43aKqtllChNeft-u5Z9BL7zO5TlLGDTH_S0degEWQXWhpM6pS-s9fVAyOKIiuRq9-Ontq0D0AVUNshRJ2zctm4Uo-fH_3ELsQdMBoFrsD54s45pzeyAbOoa1zm0BSvMSnlVudHWG86KPuxASTvRLqHCF6S7YdE7kU4fQ038zrolZQKZWqu1LC0DHbyi9bD1U5dHVs_ixlyeOmE37PNgZIZQCtqm3g2kMOC_jP1UVpBZixkVfU7JcS3graUfnpDspFldKuLlep-dBQqi2v9jh1kWuYOOjFGIu3cIgjVIJhEv0atHZD\",\"google_ad_host\":\"ca-host-pub-4184977541492624\",\"google_language\":\"en\",\"google_video_doc_id\":\"yt_iOztnsBPrAA\",\"google_ad_block\":\"3\",\"google_loeid\":\"9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833\",\"google_ad_host_tier_id\":\"3660190\",\"google_tag_for_child_directed_treatment\":\"\",\"google_core_dbp\":\"ChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA\",\"google_ad_client\":\"ca-pub-6219811747049371\",\"google_only_pyv_ads\":true,\"google_ad_type\":\"text\",\"google_ad_channel\":\"PyvWatchInRelated+PyvWatchNoAdX+PyvYTWatch+YtLoPri+afv_user_id_7_YxT-KID8kRbqZo7MyscQ+afv_user_markipliergame+non_lpw+pw+yt_cid_3406642+yt_mpvid_Y6qxqa3kGfqE8mNy+yt_no_360+yt_no_ap+yt_no_wa+ytdevice_1+ytdevicever_1.20170515\",\"google_max_num_ads\":1,\"google_video_url_to_fetch\":\"\",\"google_cust_age\":\"\",\"google_targeting\":\"\",\"google_lact\":\"\",\"google_page_url\":\"http:\\\/\\\/www.youtube.com\\\/video\\\/iOztnsBPrAA\",\"google_ad_output\":\"js\"}"},"check_status":false,"pyv_ad_tag":{"tag":"https:\/\/googleads.g.doubleclick.net\/pagead\/lopri?ad_block=3\u0026ad_type=text\u0026adk=511001906\u0026channel=PyvWatchInRelated%2BPyvWatchNoAdX%2BPyvYTWatch%2BYtLoPri%2Bafv_user_id_7_YxT-KID8kRbqZo7MyscQ%2Bafv_user_markipliergame%2Bnon_lpw%2Bpw%2Byt_cid_3406642%2Byt_mpvid_Y6qxqa3kGfqE8mNy%2Byt_no_ap%2Bytdevice_1%2Bytdevicever_1.20170515\u0026client=ca-pub-6219811747049371\u0026correlator=1495026721493\u0026dbp=ChZWZWlUZThvbktCakFPVjg0cHVEYXp3EAEgASgA\u0026ea=0\u0026eae=2\u0026eid=56702193\u0026hl=en\u0026host=ca-host-pub-4184977541492624\u0026ht_id=3660190\u0026isw=0\u0026ish=0\u0026lact=-1\u0026loc=EMPTY\u0026loeid=9419452,9422596,9431012,9434000,9434289,9446054,9451827,9460350,9461973,9462705,9465813,9466199,9466713,9466783,9467075,9467884,9469328,9471119,9471264,9471349,9472248,9474540,9474597,9475818,9475833\u0026num_ads=1\u0026output=js\u0026pucrd=CgYIABAAGAA\u0026pyv=1\u0026top=https%3A\/\/www.youtube.com\/watch%3Fv%3DiOztnsBPrAA%26app%3Ddesktop\u0026url=http%3A%2F%2Fwww.youtube.com%2Fvideo%2FiOztnsBPrAA\u0026video_doc_id=yt_iOztnsBPrAA\u0026ytdevicever=ytdevicever_1.20170515\u0026yt_pt=APb3F2-eeD4fzhCXXljaaq2QAiZ6qRUd31ZfE7Yi_FUaGV2z8MvvbsC5yrCY_T9_cCwhHXezrYJG5LJzOqlwJmEDHe9zXmsu4He8_B4Vo6m1QQnAPOom5h75sOMqhqX4MyX_jwtNCUQBAa7nefHLMeHzHZK0hRGt1lk43aKqtllChNeft-u5Z9BL7zO5TlLGDTH_S0degEWQXWhpM6pS-s9fVAyOKIiuRq9-Ontq0D0AVUNshRJ2zctm4Uo-fH_3ELsQdMBoFrsD54s45pzeyAbOoa1zm0BSvMSnlVudHWG86KPuxASTvRLqHCF6S7YdE7kU4fQ038zrolZQKZWqu1LC0DHbyi9bD1U5dHVs_ixlyeOmE37PNgZIZQCtqm3g2kMOC_jP1UVpBZixkVfU7JcS3graUfnpDspFldKuLlep-dBQqi2v9jh1kWuYOOjFGIu3cIgjVIJhEv0atHZD"},"show_pyv":true,"gut_vars":{"tag":"\/4061\/ytpwmpu\/3406642"},"use_gut":true,"show_afv":false},
      'PLAYBACK_ID': "AAVPuAiqTlW-2rh0",
      'IS_DISTILLER': true,
      'SHARE_CAPTION': null,
      'SHARE_REFERER': "",
      'PLAYLIST_INDEX': null
    });

      yt.pushConfigArray('TIMING_WAIT', 'parn');

    yt.setMsg({
      'EDITOR_AJAX_REQUEST_FAILED': "Something went wrong trying to get data from the server. Try again, or reload the page.",
      'EDITOR_AJAX_REQUEST_503': "This functionality is not available right now. Please try again later.",
        'HTML5_SUBS_ASR': "automatic captions",
      'LOADING': "Loading..."    });

      yt.setMsg('SPEEDYG_INFO', "Experiencing interruptions?");

    







    

      yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });

  </script>


<script>yt.setConfig({INNERTUBE_CONTEXT_CLIENT_NAME: 1,INNERTUBE_API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",INNERTUBE_CONTEXT_CLIENT_VERSION: "1.20170515",GAPI_HINT_PARAMS: "m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBB_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA",APIARY_HOST_FIRSTPARTY: "",INNERTUBE_API_VERSION: "v1",APIARY_HOST: "",XHR_APIARY_HOST: "youtubei.youtube.com",'VISITOR_DATA': "CgtleW9SMDAtSHdCOA%3D%3D",'GAPI_HOST': "https:\/\/apis.google.com",'GAPI_LOCALE': "en_US",'INNERTUBE_CONTEXT_HL': "en",'INNERTUBE_CONTEXT_GL': "US",'XHR_APIARY_HOST': "youtubei.youtube.com"});yt.setConfig({'ROOT_VE_CHILDREN': ["CAEQ7VAiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0","CAIQpmEiEwiP757FgPfTAhUV0X4KHS_3BHAo-B0"],'ROOT_VE_TYPE': 3832});yt.setConfig({'EVENT_ID': "IUwcWc_aFJWi-wOv7pOABw",'PAGE_NAME': "watch",'LOGGED_IN': false,'SESSION_INDEX': null,'VALID_SESSION_TEMPDATA_DOMAINS': ["www.youtube.com","gaming.youtube.com"],'PARENT_TRACKING_PARAMS': "",'FORMATS_FILE_SIZE_JS': ["%s B","%s KB","%s MB","%s GB","%s TB"],'DELEGATED_SESSION_ID': null,'ONE_PICK_URL': "",'UNIVERSAL_HOVERCARDS': true,'GOOGLEPLUS_HOST': "https:\/\/plus.google.com",'PAGEFRAME_JS': "\/yts\/jsbin\/www-pageframe-vflykKaTA\/www-pageframe.js",'GAPI_LOADER_URL': "\/yts\/jsbin\/www-gapi-loader-vflhG8S-8\/www-gapi-loader.js",'JS_COMMON_MODULE': "\/yts\/jsbin\/www-en_US-vflWXC4tt\/common.js",'PAGE_FRAME_DELAYLOADED_CSS': "\/yts\/cssbin\/www-pageframedelayloaded-vflo9ddF2.css",'EXPERIMENT_FLAGS': {"autoplay_pause_sampling_fraction":0.0,"web_gel_lact":true,"service_worker_scope":"\/","comment_deep_link":true,"block_spf_search_ads_impressions":true,"same_domain_static_resources_desktop":true,"consent_url_override":"","clear_web_implicit_clicktracking":true,"service_worker_push_home_only":true,"player_interaction_logging":true,"enable_youtubei_innertube":true,"app_settings_snapshot_min_time_between_snapshots_hours":24,"enable_server_side_search_pyv":true,"cold_load_nav_start_web":true,"service_worker_push_prompt_cap":1,"desktop_pyv_on_watch_override_lact":true,"navigation_only_csi_reset":true,"watch_next_pause_autoplay_lact_sec":0,"warm_load_nav_start_web":true,"web_logging_max_batch":50,"remove_web_visibility_batching":true,"desktop_pyv_on_watch_missing_params":true,"app_settings_snapshot_is_logging_enabled":true,"enable_more_related_ve_logging":true,"botguard_periodic_refresh":true,"player_swfcfg_cleanup":true,"autoescape_tempdata_url":true,"youtubei_for_web":true,"desktop_pyv_on_watch_via_valor":true,"chat_smoothing_animations":84,"desktop_notification_set_title_bar":true,"log_window_onerror_fraction":0.1,"use_push_for_desktop_live_chat":true,"service_worker_enabled":true,"service_worker_push_enabled":true,"gfeedback_for_signed_out_users_enabled":true},'GUIDE_DELAY_LOAD': true,'GUIDE_DELAYLOADED_CSS': "\/yts\/cssbin\/www-guide-vflJFFhnq.css",'GUIDED_HELP_PARAMS': {"logged_in":"0"},'HIGH_CONTRAST_MODE_CSS': "\/yts\/cssbin\/www-highcontrastmode-vflNSYgFO.css",'PREFETCH_LINKS': false,'PREFETCH_LINKS_MAX': 1,'PREFETCH_AUTOPLAY': false,'PREFETCH_AUTOPLAY_TIME': 0,'PREFETCH_AUTONAV': false,'PREBUFFER_MAX': 1,'PREBUFFER_LINKS': false,'PREBUFFER_AUTOPLAY': false,'PREBUFFER_AUTONAV': false,'WATCH_LATER_BUTTON': "\n\n  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" role=\"button\" title=\"Watch Later\" data-button-menu-id=\"shared-addto-watch-later-login\" data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_BUTTON': "  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" title=\"Queue\" data-style=\"tv-queue\" data-video-ids=\"__VIDEO_ID__\"\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_MENU': "  \u003cspan class=\"thumb-menu dark-overflow-action-menu video-actions\"\u003e\n    \u003cbutton onclick=\";return false;\" class=\"yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" \u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003cul class=\"watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid\"\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item\" data-action=\"play-next\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay next\u003c\/span\u003e\u003c\/li\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item\" data-action=\"play-now\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay now\u003c\/span\u003e\u003c\/li\u003e\u003c\/ul\u003e\u003c\/button\u003e\n  \u003c\/span\u003e\n",'SAFETY_MODE_PENDING': false,'ZWIEBACK_PING_URLS': ["https:\/\/www.google.com\/pagead\/lvz?evtid=ACWVUuYMsLrxWyBsePYfq-360jgOVjhtRIofKFllFRd4uOU6XgMKiqMP9SEOVrqOMkmRO-kRFVavZGu-ARBrMO-5xuIJCbmV-A\u0026pg=watch\u0026req_ts=1495026721\u0026sigh=AGwc71teUXDlLNK6w7GrAojlsG7o3-H_tA"],'LOCAL_DATE_TIME_CONFIG': {"amPms":["AM","PM"],"formatShortTime":"h:mm a","formatLongDate":"MMMM d, yyyy h:mm a","shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"formatShortDate":"MMM d, yyyy","formatLongDateOnly":"MMMM d, yyyy","weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dateFormats":["MMMM d, yyyy h:mm a","MMMM d, yyyy","MMM d, yyyy","MMM d, yyyy"],"formatWeekdayShortTime":"EE h:mm a","firstDayOfWeek":0,"weekendRange":[6,5],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"shortWeekdays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"firstWeekCutoffDay":3},'PAGE_CL': 156215422,'PAGE_BUILD_LABEL': "youtube_20170515_0_RC2",'VARIANTS_CHECKSUM': "b139c0461377f77ceb84af1af7e5523c",'CLIENT_PROTOCOL': "HTTP\/1.0",'CLIENT_TRANSPORT': "tcp",'MDX_ENABLE_CASTV2': true,'MDX_ENABLE_QUEUE': true,'FEEDBACK_BUCKET_ID': "Watch",'FEEDBACK_LOCALE_LANGUAGE': "en",'FEEDBACK_LOCALE_EXTRAS': {"accept_language":null,"experiments":"9415398,9416475,9419452,9419979,9420289,9422596,9423555,9431012,9432939,9433870,9434000,9434046,9434289,9434949,9438309,9439294,9440054,9441194,9442387,9442746,9444189,9444771,9445139,9446054,9446364,9448302,9449072,9449243,9451814,9451827,9453167,9453897,9454394,9454617,9454617,9454653,9455031,9456445,9456628,9456640,9457114,9457141,9457169,9457541,9458265,9459075,9459445,9459793,9459798,9460098,9460350,9460554,9460829,9460959,9461124,9461777,9461881,9461973,9462018,9462032,9462705,9463460,9463594,9463617,9463936,9463963,9463965,9464207,9464440,9464823,9464887,9464889,9465513,9465652,9465813,9466199,9466713,9466783,9466793,9466795,9466797,9466835,9467001,9467075,9467217,9467400,9467472,9467508,9467510,9467512,9467659,9467700,9467795,9467806,9467820,9467822,9467884,9468110,9468195,9468228,9468285,9468553,9468798,9468799,9468805,9469041,9469192,9469224,9469328,9469556,9469609,9469615,9469734,9469862,9469883,9469887,9469911,9469943,9470299,9470791,9470924,9471040,9471119,9471125,9471264,9471349,9471415,9471482,9471955,9472010,9472178,9472248,9472401,9472450,9472485,9472609,9472611,9472711,9472760,9473198,9473202,9473364,9473381,9473398,9473473,9473514,9473576,9473719,9473898,9473977,9474064,9474342,9474540,9474579,9474597,9474633,9474767,9474813,9475219,9475329,9475335,9475461,9475552,9475585,9475818,9475833,9475973,9475978,9476124","logged_in":false}});   yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });
yt.setConfig('SPF_SEARCH_BOX', true);yt.setMsg({'ADDTO_CREATE_NEW_PLAYLIST': "Create new playlist\n",'ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE': "  $dynamic_title_placeholder (create new)\n",'ADDTO_WATCH_LATER': "Watch Later",'ADDTO_WATCH_LATER_ADDED': "Added",'ADDTO_WATCH_LATER_ERROR': "Error",'ADDTO_WATCH_QUEUE': "Watch Queue",'ADDTO_WATCH_QUEUE_ADDED': "Added",'ADDTO_WATCH_QUEUE_ERROR': "Error",'ADDTO_TV_QUEUE': "Queue",'ADS_INSTREAM_FIRST_PLAY': "A video ad is playing.",'ADS_INSTREAM_SKIPPABLE': "Video ad can be skipped.",'ADS_OVERLAY_IMPRESSION': "Ad displayed.",'MASTHEAD_NOTIFICATIONS_LABEL': {"other": "# unread notifications.", "case1": "1 unread notification.", "case0": "0 unread notifications."},'MASTHEAD_NOTIFICATIONS_COUNT_99PLUS': "99+",'MDX_AUTOPLAY_OFF': 'Autoplay is off','MDX_AUTOPLAY_ON': 'Autoplay is on'});  yt.setConfig('FEED_PRIVACY_CSS_URL', "\/yts\/cssbin\/www-feedprivacydialog-vflWi26th.css");
  yt.setConfig('FEED_PRIVACY_LIGHTBOX_ENABLED', true);
yt.setConfig({'SBOX_JS_URL': "\/yts\/jsbin\/www-searchbox-legacy-vfly5Y5d1\/www-searchbox-legacy.js",'SBOX_SETTINGS': {"PSUGGEST_TOKEN":null,"SESSION_INDEX":null,"REQUEST_DOMAIN":"us","PQ":"","IS_FUSION":false,"HAS_ON_SCREEN_KEYBOARD":false,"REQUEST_LANGUAGE":"en","SUGG_EXP_ID":""},'SBOX_LABELS': {"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Remove"}});  yt.setConfig({
    'YPC_LOADER_JS': "\/yts\/jsbin\/www-ypc-vflZyvrAc\/www-ypc.js",
    'YPC_LOADER_CSS': "\/yts\/cssbin\/www-ypc-vfl-AgXO7.css",
    'YPC_SIGNIN_URL': "https:\/\/accounts.google.com\/ServiceLogin?passive=true\u0026service=youtube\u0026uilel=3\u0026hl=en\u0026continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F%26hl%3Den",
    'DBLCLK_ADVERTISER_ID': "2542116",
    'DBLCLK_YPC_ACTIVITY_GROUP': "youtu444",
    'SUBSCRIPTION_URL': "\/subscription_ajax",
    'YPC_SWITCH_URL': "\/signin?action_handle_signin=true\u0026next=%2F\u0026skip_identity_prompt=True\u0026feature=purchases",
    'YPC_GB_LANGUAGE': "en_US",
    'YPC_MB_URL': "https:\/\/payments.google.com\/payments\/v4\/js\/integrator.js?ss=md",
    'YPC_TRANSACTION_URL': "\/transaction_handler",
    'YPC_SUBSCRIPTION_URL': "\/ypc_subscription_ajax",
    'YPC_POST_PURCHASE_URL': "\/ypc_post_purchase_ajax",
    'YTR_FAMILY_CREATION_URL': "https:\/\/families.google.com\/webcreation?usegapi=1",
    'YTO_GTM_DATA': {'event': 'purchased', 'purchaseStatus': 'success'},
    'YTO_GTM_1_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '1'},
    'YTO_GTM_2_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '2'}
  });
  yt.setMsg({
    'YPC_OFFER_OVERLAY': "  \n",
    'YPC_UNSUBSCRIBE_OVERLAY': "  \n"
  });
  yt.setConfig('GOOGLE_HELP_CONTEXT', "watch");
ytcsi.info('st', 490);ytcfg.set({"TIMING_ACTION":"watch,watch7ad_html5","TIMING_INFO":{"yt_li":"0","yt_pl":0,"yt_ad_pr":1,"yt_ref":"watch","GetWatchNext_rid":"0xee3b8195f190b1da","yt_ad_an":"aftv,dclk","c":"WEB","cver":"1.20170515","GetPlayer_rid":"0xee3b8195f190b1da","yt_lt":"cold","yt_ad":1},"CSI_VIEWPORT":true,"CSI_SERVICE_NAME":"youtube"});;  yt.setConfig({
      'XSRF_TOKEN': "QUFFLUhqa1JNSzFwWnN6RXMwSGw1VThqMjBhaHZTQnJJUXxBQ3Jtc0ttYUVXS29MNnBET3VHZTRrS2xzdUZXVmxEZ01pUGlHUFlzVVNKSC1nNmstWFp2MWNCcThVVWd1elp3YXJIeVlvLWQ5cGdRc3l0SU8xWVF2RU5fZXREdXJxS3hxRVFIY2lBS0s0MkF6OXZwYXhRLVNUbWpWbGpRaUVrTkNnS0ptRExNZkZxVjcwSjhHUGI5TVc3MmhOMkNjeXJqbUE=",
      'XSRF_FIELD_NAME': "session_token",

      'XSRF_REDIRECT_TOKEN': "SuGSTTUWnzEW-Ow6GIxGz145cQp8MTQ5NTExMzEyMUAxNDk1MDI2NzIx"  });
yt.setConfig('ID_TOKEN', null);window.ytcfg.set('SERVICE_WORKER_KILLSWITCH', false);  yt.setConfig('THUMB_DELAY_LOAD_BUFFER', 0);
if (window.ytcsi) {window.ytcsi.tick("jl", null, '');}</script>
</body></html> `];

	initload(watchPageBase);
	}
	
		// main loading code:
	function resolveUrl(mode) {
		switch(mode) {
			case mode = "path":
				return (window.location.pathname.split("/"));
			break;
			case mode = "arg":
				return (window.location.search.split(/\?|\&/));
			break;
		}	
	}
	
	console.log(resolveUrl("path"));
	console.log(resolveUrl("arg"));
	

var extRoot = (chrome.extension.getURL("/"));


function correctExtensionUrls() {
	var ext = chrome.i18n.getMessage("@@extension_id");
	// Firefox
	document.head.innerHTML = document.head.innerHTML.replace(/__MSG_@@extension_id__\//g, chrome.extension.getURL("/"));
	console.log(chrome.extension.getURL("/"));
	console.log(ext);
}

function initpagetemplate(html1) {
	// document.body.outerHTML = `<body><iframe src="https://www.youtube.com" style="display: none !important;" width="1280" height="720"></iframe></body>`;
	document.querySelector('html').innerHTML = html1[0];
	nytf = document.body.children[0];
	// -- hide page during initload --
	// document.querySelector('html').setAttribute("style", "display: none !important;")
	// correct CSS to local:
	correctExtensionUrls();
}

function initload(html1, loadinfo) {
	
	if (!loadinfo) {
	initpagetemplate(html1);
	// connect to new YouTube; get/store information.
	const if0 = document.createElement("div");
	if0.setAttribute("id", "gt-iframe-placeholder")
	document.body.append(if0);
	document.getElementById("gt-iframe-placeholder").outerHTML = `<iframe id="gt-if-init" style="visibility: hidden;position: fixed;" src="https://www.youtube.com/playlist?list=LL" width="1280" height="720"></iframe>`;
	//document.getElementById("gt-if-init").addEventListener("load", function() {
	initload(html1, 1);
	//});
	}
	
	// debug resolveUrl("path")[1] == "gt" && resolveUrl("path")[2] == "debug" && resolveUrl("path")[3] == "failed" // window.location.pathname == "/gt/debug/failed"
	if (resolveUrl("path")[1] == "gt" && resolveUrl("path")[2] == "debug" && resolveUrl("path")[3] == "failed") {
		initloadfail(html1);
	}
	
	if (loadinfo == 1) {
		var wait = setTimeout(function() {
			initload(html1, 2);
			clearTimeout(wait);
		}, 1);
	}	
	if (loadinfo == 2) {	
		// debug
		if (resolveUrl("path")[1] == "gt" && resolveUrl("path")[2] == "debug" && resolveUrl("path")[3] == "2013" && resolveUrl("path")[4] == "playertest") {
			debugLoad("2013/playertest");
		}
		if (resolveUrl("path")[1] == "gt" && resolveUrl("path")[2] == "debug" && resolveUrl("path")[3] == "2016" && resolveUrl("path")[4] == "watchtest") {
			debugLoad("2016/watchtest");
		}
		
		//console.log(document.getElementById("gt-if-init").contentDocument.getElementById("masthead").innerHTML.search("Sign in"));
		var checkExist = setInterval(function() {
			if (document.getElementById("gt-if-init").contentDocument.querySelector("div#end").querySelector("div#buttons").children[2].tagName.toLowerCase().substring(0, 3) == "ytd") {
				console.log("Exists!");
				initload(html1, 3);
				//console.log(document.getElementById("gt-if-init").contentDocument.getElementById("masthead").innerHTML.search("Sign in"));
				clearInterval(checkExist);
			}
		}, 50);
	}
	if (loadinfo == 3) {
		console.log(document.getElementById("gt-if-init").contentDocument.querySelector("div#end").querySelector("div#buttons").children[2].tagName.toLowerCase());
		console.log(document.getElementById("gt-if-init").contentDocument.getElementById("masthead").innerHTML.search("Sign in"));
		if (document.getElementById("gt-if-init").contentDocument.getElementById("masthead").innerHTML.search("Sign in") > -1) {
			document.getElementById("gt-masthead-usercontenttemplate").outerHTML = html1[2];
			document.getElementsByClassName("guide-toplevel")[0].outerHTML = html1[1];
		} else {
			document.getElementById("gt-masthead-usercontenttemplate").outerHTML = html1[3].replace("[mastheadUserThumbnail]", (document.getElementById("gt-if-init").contentDocument.querySelector("div#end").querySelector("div#buttons").querySelector("yt-img-shadow.ytd-topbar-menu-button-renderer > img:nth-child(1)").src));
			var checkPfp = setInterval(function() {
				if (document.getElementById("gt-if-init").contentDocument.querySelector("div#end").querySelector("div#buttons").querySelector("yt-img-shadow.ytd-topbar-menu-button-renderer > img:nth-child(1)").src.search("yt3.ggpht") > -1) {
					document.getElementById("yt-masthead-account-picker").querySelector(".yt-thumb-27 > span:nth-child(1) > span:nth-child(1) > img:nth-child(1)").src = document.getElementById("gt-if-init").contentDocument.querySelector("div#end").querySelector("div#buttons").querySelector("yt-img-shadow.ytd-topbar-menu-button-renderer > img:nth-child(1)").src;
					if (document.getElementById("yt-masthead-account-picker").querySelector(".yt-thumb-27 > span:nth-child(1) > span:nth-child(1) > img:nth-child(1)").src.search("yt3.ggpht") > -1) {
						document.getElementById("yt-masthead-account-picker").querySelector(".yt-thumb-27 > span:nth-child(1) > span:nth-child(1) > img:nth-child(1)").src = document.getElementById("gt-if-init").contentDocument.querySelector("div#end").querySelector("div#buttons").querySelector("yt-img-shadow.ytd-topbar-menu-button-renderer > img:nth-child(1)").src;
						console.log("cleared timeout!");
						clearInterval(checkPfp);
					}
				}
			}, 50);
		}
	}
}

function initloadfail(html1) {
	initpagetemplate(html1);
	document.querySelector('html').setAttribute("style", "display: none !important;");
	document.getElementById("appbar-guide-button").outerHTML = "";
	document.getElementById("gt-masthead-usercontenttemplate").outerHTML = html1[2];
	document.getElementById("a11y-announcements-container").outerHTML = `<div id="alerts" class="content-alignment   oops-content">
    <div class="yt-alert yt-alert-default yt-alert-error  " id="error-box">  <div class="yt-alert-icon">
    <span class="icon master-sprite yt-sprite"></span>
  </div>
<div class="yt-alert-content" role="alert">    <div class="yt-alert-message" tabindex="0">GoodTube failed to load successfully.</div>
</div><div class="yt-alert-buttons"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-close close yt-uix-close" type="button" onclick=";return false;" aria-label="Close" data-close-parent-class="yt-alert"><span class="yt-uix-button-content">Close</span></button></div></div>
  </div>`;
	document.getElementById("page-container").outerHTML = `<div id="page-container">
    <div id="page" class="page-default   oops-content">
        <div id="content" class="content-alignment" style="text-align: center;padding-top: 40px;">
            <img src="https://www.youtube.com/yts/img/tv_stack-vflmeOpv_.png" alt="Sorry, something went wrong! Our tubes must be clogged." title="Sorry, something went wrong! Our tubes must be clogged.">

        </div>
    </div>
  </div>`;
  document.getElementById("page-container").before(document.getElementById("alerts"));
  // display page on css load
  var checkCss = setInterval(function() {
	if (document.head.querySelector("[name='www-core']").href != "__MSG_@@extension_id__/2016/www-core-webp-vflvPA_5f.css") {
		document.querySelector('html').removeAttribute("style");
	}
  }, 60);
}
	
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		// Typical action to be performed when the document is ready:
			
			var newYtTestPage = xhttp.responseText;
			document.querySelector('html').innerHTML = "";
			setTimeout(loadNewYtHtml, 5000);
			function loadNewYtHtml() {
				
				document.querySelector('html').innerHTML = newYtTestPage;
				//document.getElementById("page-manager").innerHTML = newYtTestPage;
			}
		}
	};
	//window.history.pushState({page: "another"}, "another page", "/watch?v=RhED1w8HX3A");
	
function getChannelIdFromUrl(url) {
	var gcid = new XMLHttpRequest();
	gcid.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		// Typical action to be performed when the document is ready:
			
			var currentChannelId = gcid.responseText;
			document.body.append(`<div id="buffer0" style="display: none !important;"></div>`);
				//document.querySelector('html').innerHTML = newYtTestPage;
				//document.getElementById("page-manager").innerHTML = newYtTestPage;
		}
	};
	gcid.open("GET", (url + "/about"), false);
	gcid.setRequestHeader("Accept", "*/*");
	gcid.send();
}	

function debugLoad(type) {
	switch (type) {
		case "2013/playertest":
		load2013PlayerTest();
		break;
		case "2016/watchtest":
		load2016WatchTest();
	}
}




// GET CHANNEL ID
// document.body.querySelector('[rel="canonical"]').href.replace("https://www.youtube.com/channel/", "")

	
	
	
}

if (window.location.search.search("enable-polymer") <= -1) {
	main(2016);
}