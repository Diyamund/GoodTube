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

    var documentElements = ['html'];
    initCleanDocument(documentElements);
	
	var continueLoad = 0;
	
	// declare new page
	
	if (gtstyle == 2016) {
	let pageBase = [ `<!DOCTYPE html><html data-cast-api-enabled="true" class="guide-pinned show-guide content-snap-width-3" lang="en"><head>
<style name="www-roboto">@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0TTOQ_MqJVwkKsUn0wKzc2I.woff2)format('woff2');unicode-range:U+0460-052F,U+20B4,U+2DE0-2DFF,U+A640-A69F;}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0TUj_cnvWIuuBMVgbX098Mw.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0UbcKLIaa1LC45dFaAfauRA.woff2)format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0Wo_sUJ8uO4YLWRInS22T3Y.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0b6up8jxqWt8HVA3mDhkV_0.woff2)format('woff2');unicode-range:U+0102-0103,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0SYE0-AqJ3nfInTTiDXDjU4.woff2)format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0Y4P5ICox8Kq3LLUNMylGO4.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/ek4gzZ-GeXAPcSbHtCeQI_esZW2xOQ-xsNqO47m55DA.woff2)format('woff2');unicode-range:U+0460-052F,U+20B4,U+2DE0-2DFF,U+A640-A69F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/mErvLBYg_cXG3rLvUsKT_fesZW2xOQ-xsNqO47m55DA.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/-2n2p-_Y08sg57CNWQfKNvesZW2xOQ-xsNqO47m55DA.woff2)format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/u0TOpm082MNkS5K0Q4rhqvesZW2xOQ-xsNqO47m55DA.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/NdF9MtnOpLzo-noMoG0miPesZW2xOQ-xsNqO47m55DA.woff2)format('woff2');unicode-range:U+0102-0103,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/Fcx7Wwv8OzT71A3E1XOAjvesZW2xOQ-xsNqO47m55DA.woff2)format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/CWB0XYA8bzo0kSThX0UTuA.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/ZLqKeelYbATG60EpZBSDyxJtnKITppOI_IvcXXDNrsc.woff2)format('woff2');unicode-range:U+0460-052F,U+20B4,U+2DE0-2DFF,U+A640-A69F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/oHi30kwQWvpCWqAhzHcCSBJtnKITppOI_IvcXXDNrsc.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/rGvHdJnr2l75qb0YND9NyBJtnKITppOI_IvcXXDNrsc.woff2)format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/mx9Uck6uB63VIKFYnEMXrRJtnKITppOI_IvcXXDNrsc.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/mbmhprMH69Zi6eEPBYVFhRJtnKITppOI_IvcXXDNrsc.woff2)format('woff2');unicode-range:U+0102-0103,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/oOeFwZNlrTefzLYmlVV1UBJtnKITppOI_IvcXXDNrsc.woff2)format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215;}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/WxrXJa0C3KdtC7lMafG4dRTbgVql8nDJpwnrE27mub0.woff2)format('woff2');unicode-range:U+0460-052F,U+20B4,U+2DE0-2DFF,U+A640-A69F;}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/OpXUqTo0UgQQhGj_SFdLWBTbgVql8nDJpwnrE27mub0.woff2)format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/1hZf02POANh32k2VkgEoUBTbgVql8nDJpwnrE27mub0.woff2)format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/cDKhRaXnQTOVbaoxwdOr9xTbgVql8nDJpwnrE27mub0.woff2)format('woff2');unicode-range:U+0370-03FF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/K23cxWVTrIFD6DJsEVi07RTbgVql8nDJpwnrE27mub0.woff2)format('woff2');unicode-range:U+0102-0103,U+1EA0-1EF9,U+20AB;}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/vSzulfKSK0LLjjfeaxcREhTbgVql8nDJpwnrE27mub0.woff2)format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/vPcynSL0qHq_6dX7lKVByfesZW2xOQ-xsNqO47m55DA.woff2)format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215;}</style><script name="www-roboto">if (document.fonts && document.fonts.load) {document.fonts.load("400 10pt Roboto", "E");document.fonts.load("500 10pt Roboto", "E");}</script><script>var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},info: {}});},now: window.performance && window.performance.timing &&window.performance.now ? function() {return window.performance.timing.navigationStart + window.performance.now();} : function() {return (new Date()).getTime();},tick: function(l, t, n) {ticks = ytcsi.gt(n).tick;var v = t || ytcsi.now();if (ticks[l]) {ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);ticks['_' + l].push(v);}ticks[l] = v;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startTick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}var slt = function(el, t) {setTimeout(function() {var n = ytcsi.now();el.loadTime = n;if (el.slt) {el.slt();}}, t);};w.__ytRIL = function(el) {if (!el.getAttribute('data-thumb')) {if (w.requestAnimationFrame) {w.requestAnimationFrame(function() {slt(el, 0);});} else {slt(el, 16);}}};})(window, document);</script><script>var ytcfg = {d: function() {return (window.yt && yt.config_) || ytcfg.data_ || (ytcfg.data_ = {});},get: function(k, o) {return (k in ytcfg.d()) ? ytcfg.d()[k] : o;},set: function() {var a = arguments;if (a.length > 1) {ytcfg.d()[a[0]] = a[1];} else {for (var k in a[0]) {ytcfg.d()[k] = a[0][k];}}}};</script>  
  




  <script>
        (function(){var b={a:"content-snap-width-1",b:"content-snap-width-2",c:"content-snap-width-3"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}
function h(a){var c=f().concat(["guide-pinned","show-guide"]),e=c.length,g=[];a.replace(/\S+/g,function(a){for(var d=0;d<e;d++)if(a==c[d])return;g.push(a)});
return g}
;function k(a,c,e){var g=document.getElementsByTagName("html")[0],d=h(g.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(d.push("guide-pinned"),c&&d.push("show-guide"));e&&(e=(window.innerWidth||document.documentElement.clientWidth)-21-50,1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(e-=230),d.push(1262<=e?"content-snap-width-3":1056<=e?"content-snap-width-2":"content-snap-width-1"));g.className=d.join(" ")}
var l=["yt","www","masthead","sizing","runBeforeBodyIsReady"],m=this;l[0]in m||!m.execScript||m.execScript("var "+l[0]);for(var n;l.length&&(n=l.shift());)l.length||void 0===k?m[n]&&m[n]!==Object.prototype[n]?m=m[n]:m=m[n]={}:m[n]=k;}).call(this);

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true);
  </script>


      <script src="__MSG_@@extension_id__/2016/jsbin/scheduler.js" type="text/javascript" name="scheduler/scheduler" class="js-httpswwwyoutubecomytsjsbinschedulervflP0xYBschedulerjs"></script>


  
  <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-core-webp-vflvPA_5f.css" name="www-core" class="css-httpswwwyoutubecomytscssbinwwwcorewebpvflvPA_5fcss">
  <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-pageframe-webp-vflJkPNGO.css" name="www-pageframe" class="css-httpswwwyoutubecomytscssbinwwwpageframewebpvflJkPNGOcss">
  <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-guide-webp-vfl6rnwph.css" name="www-guide" class="css-httpswwwyoutubecomytscssbinwwwguidewebpvfl6rnwphcss">

    
<title>YouTube</title><link rel="alternate" media="handheld" href="https://www.youtube.com/feed/history"><link rel="alternate" media="only screen and (max-width: 640px)" href="https://www.youtube.com/feed/history">        <meta name="title" content="History">

  <meta name="keywords" content="video, sharing, camera phone, video phone, free, upload">
<link rel="manifest" href="__MSG_@@extension_id__/2016/manifest.json"><link rel="search" type="application/opensearchdescription+xml" href="https://www.youtube.com/opensearch?locale=en_US" title="YouTube Video Search"><link rel="shortcut icon" href="__MSG_@@extension_id__/2016/img/favicon-vflz7uhzw.ico" type="image/x-icon">     <link rel="icon" href="__MSG_@@extension_id__/2016/img/favicon_32-vfl8NGn4k.png" sizes="32x32"><link rel="icon" href="__MSG_@@extension_id__/2016/img/favicon_48-vfl1s0rGh.png" sizes="48x48"><link rel="icon" href="__MSG_@@extension_id__/2016/img/favicon_96-vfldSA3ca.png" sizes="96x96"><link rel="icon" href="__MSG_@@extension_id__/2016/img/favicon_144-vflWmzoXw.png" sizes="144x144"><meta name="theme-color" content="#e62117">    <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-home-c4-webp-vflGHFGMS.css" name="www-home-c4" class="css-httpswwwyoutubecomytscssbinwwwhomec4webpvflGHFGMScss">

<style>.yt-uix-button-primary, .yt-uix-button-primary[disabled], .yt-uix-button-primary[disabled]:hover, .yt-uix-button-primary[disabled]:active, .yt-uix-button-primary[disabled]:focus { background-color: #167ac6; }</style></head>

      <body dir="ltr" id="body" class="  ltr  webkit webkit-537  exp-responsive exp-scrollable-guide exp-search-big-thumbs   site-center-aligned site-as-giant-card guide-pinning-enabled appbar-hidden    visibility-logging-enabled   not-nirvana-dogfood  not-yt-legacy-css    flex-width-enabled      flex-width-enabled-snap    delayed-frame-styles-not-in  " data-spf-name="other">

  <div id="early-body"></div>
  <div id="body-container"><div id="a11y-announcements-container" role="alert"><div id="a11y-announcements-message"></div></div><form name="logoutForm" method="POST" action="https://www.youtube.com/logout"><input type="hidden" name="action_logout" value="1"></form><div id="masthead-positioner">  <div id="ticker-content">
        

  </div>
  <div id="yt-masthead-container" class="clearfix yt-base-gutter">  <button id="a11y-skip-nav" class="skip-nav" data-target-id="main" tabindex="3">
Skip navigation
  </button>
<div id="yt-masthead"><div class="yt-masthead-logo-container ">  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text yt-uix-button-empty yt-uix-button-has-icon appbar-guide-toggle appbar-guide-clickable-ancestor" type="button" onclick=";return false;" id="appbar-guide-button" aria-label="Guide" aria-controls="appbar-guide-menu"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-appbar-guide yt-sprite"></span></span></button>
  <div id="appbar-main-guide-notification-container"></div>
<span id="yt-masthead-logo-fragment"><a href="https://www.youtube.com/" class="masthead-logo-renderer yt-uix-sessionlink      spf-link " data-sessionlink="itct=CAUQsV4iEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4" id="logo-container" title="YouTube Home">  <span class="logo masthead-logo-renderer-logo yt-sprite" title="YouTube Home"></span>
</a></span></div><div id="gt-masthead-usercontenttemplate"></div><div id="yt-masthead-content"><form id="masthead-search" class="  search-form consolidated-form  vve-check" action="https://www.youtube.com/results" onsubmit="if (document.getElementById('masthead-search-term').value == '') return false;" data-clicktracking="CAEQ7VAiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4" data-visibility-tracking="CAEQ7VAiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component search-button" type="submit" onclick="if (document.getElementById('masthead-search-term').value == '') return false; document.getElementById('masthead-search').submit(); return false;;return true;" tabindex="2" id="search-btn" dir="ltr"><span class="yt-uix-button-content">Search</span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><input id="masthead-search-term" autocomplete="off" onkeydown="if (!this.value &amp;&amp; (event.keyCode == 40 || event.keyCode == 32 || event.keyCode == 34)) {this.onkeydown = null; this.blur();}" class="search-term masthead-search-renderer-input yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" placeholder="Search" title="Search" aria-label="Search"></div></form></div></div></div>
    <div id="masthead-appbar-container" class="clearfix"><div id="masthead-appbar"><div id="appbar-content" class=""></div></div></div>

</div><div id="masthead-positioner-height-offset"></div><div id="page-container"><div id="page" class="  feed    not-fixed-width-tab-widescreen clearfix"><div id="guide" class="yt-scrollbar">      <div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-layout appbar-guide-clickable-ancestor yt-uix-scroller yt-uix-tdl" role="navigation">
    <div id="guide-container">
        <div class="guide-module-content yt-scrollbar">
    <ul class="guide-toplevel"></ul>
  </div>

    </div>
  </div>
  <div id="appbar-guide-notifications" class="hid">
        <div id="appbar-guide-notification-watch-later-video-added">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to Watch Later</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-watch-later-video-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Watch Later</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-subscription">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Subscription added</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-unsubscription">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Subscription removed</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-like">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Saved to Playlists</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-unlike">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Playlists</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-video-added">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to playlist</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-video-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from playlist</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-video-like">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to Liked videos</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-video-unlike">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Liked videos</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-event-reminder-set">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >You'll be reminded about this event</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-event-reminder-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Event reminder removed</span></span></div>
    -->
  </div>


  </div>
  <div id="appbar-guide-item-templates" class="hid">
        <div id="appbar-guide-item-template-playlist">
      <!--
        
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item" 
 data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    "
    href="__URL__"
    title="__TITLE__"
    data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-playlists" data-serialized-endpoint="" data-external-id="__ID__"
  >
    <span class="yt-valign-container">
        <span class="thumb guide-playlists-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Saved to Playlists">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>
    <div id="appbar-guide-item-template-mix">
      <!--
        
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item" 
 data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    "
    href="__URL__"
    title="__TITLE__"
    data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-playlists" data-serialized-endpoint="" data-external-id="__ID__"
  >
    <span class="yt-valign-container">
        <span class="thumb guide-mix-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Saved to Playlists">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>
    <div id="appbar-guide-item-template-channel">
      <!--
        
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item" 
 data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    "
    href="__URL__"
    title="__TITLE__"
    data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel" data-serialized-endpoint="" data-external-id="__ID__"
  >
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20"
    >
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" width="20" height="20" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__THUMBNAIL_URL__" >

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Subscription added">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>

  </div>

</div><div class="alerts-wrapper"><div id="alerts" class="content-alignment">  
</div></div><div id="header"></div><div id="player" class="  off-screen  " role="complementary"><div id="theater-background" class="player-height"></div>  <div id="player-mole-container">
    <div id="player-unavailable" class="  hid  ">
      
    </div>

    <div id="player-api" class="player-width player-height off-screen-target player-api wm-videoplayer" tabindex="-1"></div>
    

    <div id="watch-queue-mole" class="video-mole mole-collapsed hid"><div id="watch-queue" class="watch-playlist player-height"><div class="main-content"><div class="watch-queue-header"><div class="watch-queue-info"><div class="watch-queue-info-icon"><span class="tv-queue-list-icon yt-sprite"></span></div><h3 class="watch-queue-title">Watch Queue</h3><h3 class="tv-queue-title">Queue</h3><span class="tv-queue-details"></span></div><div class="watch-queue-control-bar control-bar-button"><div class="watch-queue-mole-info"><div class="watch-queue-control-bar-icon"><span class="watch-queue-icon yt-sprite"></span></div><div class="watch-queue-title-container"><span class="watch-queue-count"></span><span class="watch-queue-title">Watch Queue</span><span class="tv-queue-title">Queue</span></div></div>  <span class="dark-overflow-action-menu">
    
    
    <button class="flip control-bar-button yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" aria-haspopup="true" aria-label="Actions for the queue" aria-expanded="false" onclick=";return false;" type="button"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid" role="menu" aria-haspopup="true"><li role="menuitem"><span data-action="remove-all" class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;">Remove all</span></li><li role="menuitem"><span data-action="disconnect" class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;">Disconnect</span></li></ul></button>
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
    <label class="autoplay-label" for="autoplay-toggle-id"></label>
    <label class="yt-uix-form-input-checkbox-container yt-uix-form-input-container yt-uix-form-input-paper-toggle-container "><input class="yt-uix-form-input-checkbox" type="checkbox" id="autoplay-toggle-id"><div class="yt-uix-form-input-paper-toggle-bg yt-uix-form-input-paper-toggle-bar"></div><div class="yt-uix-form-input-paper-toggle-bg yt-uix-form-input-paper-toggle-button"></div></label>
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

    <div id="player-playlist" class="  hid  ">
      
    </div>

  </div>

  <div class="clear"></div>
</div><div id="content" class="  content-alignment" role="main">


  
</div></div></div></div>  <div id="footer-container" class="yt-base-gutter force-layer"><div id="footer"><div id="footer-main"><div id="footer-logo"><a href="https://www.youtube.com/" id="footer-logo-link" title="YouTube home" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;ved=CAIQpmEiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4" class="yt-uix-sessionlink"><span class="footer-logo-icon yt-sprite"></span></a></div>  <ul class="pickers yt-uix-button-group" data-button-toggle-group="optional">
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
<a href="https://www.youtube.com/feed/history" class="yt-uix-button  footer-history yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-footer-history yt-sprite"></span></span><span class="yt-uix-button-content">History</span></a>    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon yt-uix-button-reverse yt-google-help-link inq-no-click " type="button" onclick=";return false;" id="google-help" data-ghelp-anchor="google-help" data-ghelp-tracking-param="" data-feedback-product-id="59" data-load-chat-support=""><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-questionmark yt-sprite"></span></span><span class="yt-uix-button-content">Help
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

</div><div id="footer-links"><ul id="footer-links-primary">  <li><a href="https://www.youtube.com/yt/about/">About</a></li>
  <li><a href="https://www.youtube.com/yt/press/">Press</a></li>
  <li><a href="https://www.youtube.com/yt/copyright/">Copyright</a></li>
  <li><a href="https://www.youtube.com/yt/creators/">Creators</a></li>
  <li><a href="https://www.youtube.com/yt/advertise/">Advertise</a></li>
  <li><a href="https://www.youtube.com/yt/dev/">Developers</a></li>
  
</ul><ul id="footer-links-secondary">  <li><a href="https://www.youtube.com/t/terms">Terms</a></li>
  <li><a href="https://www.google.com/intl/en/policies/privacy/">Privacy</a></li>
  <li><a href="https://www.youtube.com/yt/policyandsafety/">
Policy &amp; Safety
  </a></li>
  <li><a href="https://support.google.com/youtube/?hl=en" onclick="return yt.www.feedback.start(59);" class="reportbug">Send feedback</a></li>
  <li>
    <a href="https://www.youtube.com/testtube">Test new features</a>
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
      <a class="sign-in-link" href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dplaylist%26next%3D%252Ffeed%252Fhistory%26hl%3Den&amp;hl=en">Sign in</a> to add this to Watch Later

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
  <script src="__MSG_@@extension_id__/2016/jsbin/spf.js" type="text/javascript" name="spf/spf" class="js-httpswwwyoutubecomytsjsbinspfvflzOhP4spfjs"></script>
  <script src="__MSG_@@extension_id__/2016/jsbin/www-en_US-vflPeHMz9/base.js" name="www/base" class="js-httpswwwyoutubecomytsjsbinwwwen_USvflPeHMz9basejs"></script><iframe id="history-iframe" src="javascript:&quot;&quot;" style="display: none;" allow="autoplay 'self'; fullscreen 'self'"></iframe>
<script>spf.script.path({'www/': '__MSG_@@extension_id__/2016/jsbin/www-en_US-vflPeHMz9/'});var ytdepmap = {"www/base": null, "www/common": "www/base", "www/angular_base": "www/common", "www/channels_accountupload": "www/common", "www/channels": "www/common", "www/dashboard": "www/common", "www/downloadreports": "www/common", "www/experiments": "www/common", "www/feed": "www/common", "www/instant": "www/common", "www/legomap": "www/common", "www/promo_join_network": "www/common", "www/results_harlemshake": "www/common", "www/results": "www/common", "www/results_starwars": "www/common", "www/subscriptionmanager": "www/common", "www/unlimited": "www/common", "www/watch": "www/common", "www/ypc_bootstrap": "www/common", "www/ypc_core": "www/common", "www/channels_edit": "www/channels", "www/live_dashboard": "www/angular_base", "www/videomanager": "www/angular_base", "www/watch_autoplayrenderer": "www/watch", "www/watch_edit": "www/watch", "www/watch_editor": "www/watch", "www/watch_live": "www/watch", "www/watch_promos": "www/watch", "www/watch_speedyg": "www/watch", "www/watch_transcript": "www/watch", "www/watch_videoshelf": "www/watch", "www/ct_advancedsearch": "www/videomanager", "www/my_videos": "www/videomanager"};spf.script.declare(ytdepmap);</script><script>if (window.ytcsi) {window.ytcsi.tick("je", null, '');}</script>  


  <script>
      yt.setConfig('ANGULAR_JS', "__MSG_@@extension_id__\/2016\/jslib\/angular.min-vflNt0vEg.js");
  yt.setConfig('TRANSLATIONEDITOR_JS', "__MSG_@@extension_id__\/2016\/jsbin\/www-translationeditor.js");
  yt.setMsg('UNSAVED_CHANGES_WARNING', "Some of the changes you have made to channel settings have not been saved and will be lost if you navigate away from this page.");

    yt.setConfig(
      'JS_PAGE_MODULES', [
          'www/feed',
        'www/ypc_bootstrap'
      ]);




  yt.setConfig('DISMISS_THROUGH_IT', true);


      yt.setConfig({
        'GUIDE_SELECTED_ITEM': "0qDduQELEglGRWhpc3Rvcnk%3D"
      });

      yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });

  </script>
  
<script>yt.setConfig({APIARY_HOST_FIRSTPARTY: "",INNERTUBE_CONTEXT_CLIENT_VERSION: "1.20170427",INNERTUBE_CONTEXT_CLIENT_NAME: 1,INNERTUBE_API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",APIARY_HOST: "",INNERTUBE_API_VERSION: "v1",GAPI_HINT_PARAMS: "m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBB_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA",XHR_APIARY_HOST: "youtubei.youtube.com",'VISITOR_DATA': "CgtmNldIUWxkWENEMA%3D%3D",'GAPI_HOST': "http:\/\/web.archive.org\/web\/20170504040113\/https:\/\/apis.google.com",'GAPI_LOCALE': "en_US",'INNERTUBE_CONTEXT_HL': "en",'INNERTUBE_CONTEXT_GL': "US",'XHR_APIARY_HOST': "youtubei.youtube.com"});yt.setConfig({'ROOT_VE_CHILDREN': ["CAEQ7VAiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CAIQpmEiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CAsQ_h4iEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CAwQ5isYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CA0QtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CA4QtSwYASITCJKdqJet1dMCFQrRfgod7icFZijpHg","CA8QtSwYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBAQtSwYAyITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBEQ4YsCGAQiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CBIQ5isYASITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBMQtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBQQtSwYASITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBUQtSwYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBYQtSwYAyITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBcQtSwYBCITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBgQtSwYBSITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBkQtSwYBiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBoQtSwYByITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBsQtSwYCCITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBwQ5isYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CB0QtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CB4Q2C4YAyITCJKdqJet1dMCFQrRfgod7icFZijpHg"],'ROOT_VE_TYPE': 3945});yt.setConfig({'EVENT_ID': "iacKWdK0H4qi-wPuz5SwBg",'PAGE_NAME': "feed",'LOGGED_IN': false,'SESSION_INDEX': null,'VALID_SESSION_TEMPDATA_DOMAINS': ["www.youtube.com","gaming.youtube.com"],'PARENT_TRACKING_PARAMS': "",'FORMATS_FILE_SIZE_JS': ["%s B","%s KB","%s MB","%s GB","%s TB"],'DELEGATED_SESSION_ID': null,'ONE_PICK_URL': "",'UNIVERSAL_HOVERCARDS': true,'GOOGLEPLUS_HOST': "http:\/\/web.archive.org\/web\/20170504040113\/https:\/\/plus.google.com",'PAGEFRAME_JS': "\/yts\/jsbin\/www-pageframe-vflj3aNNi\/www-pageframe.js",'GAPI_LOADER_URL': "\/yts\/jsbin\/www-gapi-loader-vflFXorI_\/www-gapi-loader.js",'JS_COMMON_MODULE': "\/yts\/jsbin\/www-en_US-vflPeHMz9\/common.js",'PAGE_FRAME_DELAYLOADED_CSS': "\/yts\/cssbin\/www-pageframedelayloaded-webp-vflfvAPn6.css",'EXPERIMENT_FLAGS': {"use_push_for_desktop_live_chat":true,"service_worker_push_home_only":true,"autoplay_pause_sampling_fraction":0.0,"desktop_notification_set_title_bar":true,"player_swfcfg_cleanup":true,"web_gel_lact":true,"youtubei_for_web":true,"autoescape_tempdata_url":true,"service_worker_push_prompt_cap":1,"service_worker_scope":"\/","enable_youtubei_innertube":true,"log_window_onerror_fraction":0.1,"cold_load_nav_start_web":true,"web_logging_max_batch":20,"block_spf_search_ads_impressions":true,"navigation_only_csi_reset":true,"gfeedback_for_signed_out_users_enabled":true,"watch_next_pause_autoplay_lact_sec":0,"same_domain_static_resources_desktop":true,"enable_server_side_search_pyv":true,"warm_load_nav_start_web":true,"desktop_pyv_on_watch_via_valor":true,"comment_deep_link":true,"desktop_pyv_on_watch_override_lact":true,"desktop_pyv_on_watch_missing_params":true,"chat_smoothing_animations":84,"player_interaction_logging":true,"clear_web_implicit_clicktracking":true,"service_worker_push_enabled":true,"consent_url_override":"","service_worker_enabled":true,"enable_more_related_ve_logging":true,"app_settings_snapshot_min_time_between_snapshots_hours":24},'GUIDED_HELP_PARAMS': {"logged_in":"0","context":"yt_web_history"},'HIGH_CONTRAST_MODE_CSS': "\/yts\/cssbin\/www-highcontrastmode-webp-vflbPe0Z_.css",'PREFETCH_LINKS': false,'PREFETCH_LINKS_MAX': 1,'PREFETCH_AUTOPLAY': false,'PREFETCH_AUTOPLAY_TIME': 0,'PREFETCH_AUTONAV': false,'PREBUFFER_MAX': 1,'PREBUFFER_LINKS': false,'PREBUFFER_AUTOPLAY': false,'PREBUFFER_AUTONAV': false,'WATCH_LATER_BUTTON': "\n\n  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" role=\"button\" title=\"Watch Later\" data-button-menu-id=\"shared-addto-watch-later-login\" data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_BUTTON': "  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" title=\"Queue\" data-video-ids=\"__VIDEO_ID__\" data-style=\"tv-queue\"\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_MENU': "  \u003cspan class=\"thumb-menu dark-overflow-action-menu video-actions\"\u003e\n    \u003cbutton aria-expanded=\"false\" class=\"yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty\" type=\"button\" aria-haspopup=\"true\" onclick=\";return false;\" \u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003cul class=\"watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid\"\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item\" data-action=\"play-next\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay next\u003c\/span\u003e\u003c\/li\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item\" data-action=\"play-now\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay now\u003c\/span\u003e\u003c\/li\u003e\u003c\/ul\u003e\u003c\/button\u003e\n  \u003c\/span\u003e\n",'SAFETY_MODE_PENDING': false,'ZWIEBACK_PING_URLS': ["http:\/\/web.archive.org\/web\/20170504040113\/https:\/\/www.google.com\/pagead\/lvz?pg=feed\u0026req_ts=1493870473\u0026evtid=ACWVUuZmyDK2Vlwghda-g5mnRls1tYLL45sCjqTKl9Cnss_uV3pxuC7AQ2-ZIGbN8NKiqyRHPzwCJkeIgruZUpM83qmPDqZ2gQ\u0026sigh=AGwc71sm_wETILLdFrhZ0_IdGfD_-WqVLw"],'LOCAL_DATE_TIME_CONFIG': {"formatLongDateOnly":"MMMM d, yyyy","firstWeekCutoffDay":3,"amPms":["AM","PM"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekendRange":[6,5],"formatLongDate":"MMMM d, yyyy h:mm a","shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"formatShortTime":"h:mm a","shortWeekdays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"firstDayOfWeek":0,"formatWeekdayShortTime":"EE h:mm a","dateFormats":["MMMM d, yyyy h:mm a","MMMM d, yyyy","MMM d, yyyy","MMM d, yyyy"],"formatShortDate":"MMM d, yyyy"},'PAGE_CL': 154470109,'PAGE_BUILD_LABEL': "youtube_20170427_0_RC5",'VARIANTS_CHECKSUM': "77f69d9144cdcdea77c80a689cb4ef1b",'CLIENT_PROTOCOL': "HTTP\/1.1",'CLIENT_TRANSPORT': "tcp",'MDX_ENABLE_CASTV2': true,'MDX_ENABLE_QUEUE': true,'FEEDBACK_BUCKET_ID': "Other",'FEEDBACK_LOCALE_LANGUAGE': "en",'FEEDBACK_LOCALE_EXTRAS': {"logged_in":false,"experiments":"9415398,9416475,9419452,9419979,9420289,9422596,9423555,9431012,9432939,9433870,9434046,9434289,9434949,9435522,9437553,9438309,9439294,9440054,9440368,9441194,9442387,9442746,9444189,9444771,9445139,9446054,9446364,9448302,9449072,9449243,9451814,9451827,9452833,9453167,9453897,9454394,9454653,9455031,9456445,9456640,9457023,9457114,9457141,9457169,9457541,9457592,9457595,9457598,9458265,9458576,9458668,9459075,9459445,9459792,9459801,9460087,9460098,9460350,9460554,9460829,9460959,9461124,9461734,9461777,9462018,9462032,9463460,9463594,9463617,9463936,9463963,9463965,9464181,9464207,9464440,9464823,9464887,9464889,9465438,9465513,9465533,9465652,9465666,9465709,9465813,9466210,9466778,9466793,9466795,9466797,9466835,9467001,9467217,9467400,9467426,9467508,9467510,9467512,9467533,9467659,9467700,9467712,9467795,9467806,9467820,9467822,9467895,9468110,9468195,9468228,9468285,9468326,9468480,9468554,9468805,9469042,9469114,9469192,9469224,9469329,9469333,9469379,9469606,9469609,9469615,9469734,9469862,9469883,9469887,9469911,9469953,9469972,9470299,9470319,9470791,9470924,9471263,9471413,9471471,9471482,9471506,9471673,9471689,9471955,9472010,9472097,9472169,9472178,9472401,9472417,9472450,9472485,9472564,9472609,9472711,9473374,9473384,9473390,9473514,9473576,9473603,9473927,9473977,9474064,9474259","accept_language":"en-US,en;q=0.8"}});   yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });
yt.setConfig('SPF_SEARCH_BOX', true);yt.setMsg({'ADDTO_CREATE_NEW_PLAYLIST': "Create new playlist\n",'ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE': "  $dynamic_title_placeholder (create new)\n",'ADDTO_WATCH_LATER': "Watch Later",'ADDTO_WATCH_LATER_ADDED': "Added",'ADDTO_WATCH_LATER_ERROR': "Error",'ADDTO_WATCH_QUEUE': "Watch Queue",'ADDTO_WATCH_QUEUE_ADDED': "Added",'ADDTO_WATCH_QUEUE_ERROR': "Error",'ADDTO_TV_QUEUE': "Queue",'ADS_INSTREAM_FIRST_PLAY': "A video ad is playing.",'ADS_INSTREAM_SKIPPABLE': "Video ad can be skipped.",'ADS_OVERLAY_IMPRESSION': "Ad displayed.",'MASTHEAD_NOTIFICATIONS_LABEL': {"other": "# unread notifications.", "case0": "0 unread notifications.", "case1": "1 unread notification."},'MASTHEAD_NOTIFICATIONS_COUNT_99PLUS': "99+",'MDX_AUTOPLAY_OFF': 'Autoplay is off','MDX_AUTOPLAY_ON': 'Autoplay is on'});  yt.setConfig('FEED_PRIVACY_CSS_URL', "__MSG_@@extension_id__/2016/www-feedprivacydialog-webp-vfltZywru.css");
  yt.setConfig('FEED_PRIVACY_LIGHTBOX_ENABLED', true);
yt.setConfig({'SBOX_JS_URL': "__MSG_@@extension_id__/2016/jsbin/www-searchbox-legacy.js",'SBOX_SETTINGS': {"SESSION_INDEX":null,"HAS_ON_SCREEN_KEYBOARD":false,"REQUEST_DOMAIN":"us","PQ":"","PSUGGEST_TOKEN":null,"IS_FUSION":false,"REQUEST_LANGUAGE":"en","SUGG_EXP_ID":"ytd2_arm_7"},'SBOX_LABELS': {"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Remove"}});  yt.setConfig({
    'YPC_LOADER_JS': "__MSG_@@extension_id__/2016/jsbin/www-ypc.js",
    'YPC_LOADER_CSS': "__MSG_@@extension_id__/2016/www-ypc-webp-vfludzDoy.css",
    'YPC_SIGNIN_URL': "https:\/\/accounts.google.com\/ServiceLogin?uilel=3\u0026service=youtube\u0026passive=true\u0026continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F%26hl%3Den\u0026hl=en",
    'DBLCLK_ADVERTISER_ID': "2542116",
    'DBLCLK_YPC_ACTIVITY_GROUP': "youtu444",
    'SUBSCRIPTION_URL': "\/subscription_ajax",
    'YPC_SWITCH_URL': "\/signin?action_handle_signin=true\u0026skip_identity_prompt=True\u0026feature=purchases\u0026next=%2F",
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
  yt.setConfig('GOOGLE_HELP_CONTEXT', "yt_web_history");
ytcsi.info('st', 81);ytcfg.set({"CSI_VIEWPORT":true,"TIMING_ACTION":"browse","TIMING_AFT_KEYS":["cpt"],"CSI_SERVICE_NAME":"youtube","TIMING_INFO":{"GetBrowse_rid":"0x7b030e19d3de3448","yt_li":"0","yt_lt":"cold","c":"WEB","cver":"1.20170427","yt_fn":"history"}});;  yt.setConfig({
      'XSRF_TOKEN': "QUFFLUhqazlPbGNtVDRpZUNHOVY1YTM4Y1drd2NUZ2pQQXxBQ3Jtc0tuSnlFRWk1d3U5U0E5NTg1R09ZWVJpWmpSZm8zeHBhT2xYVmVQMnF2U0RxbXdSSHpEcmNMcmU4cXB6Q1NmUnVkUldjQkttY0J3bnk2X3hpTUdzdlRWZU5uZG5nM1pkSUdPT09hdlNnVmFrUDBOTlVyRnI4azBuSmR2b0s4SE5RcFl0MDNDay1GMnlpMG42dV9XOFMxcW5GZWEtOHc=",
      'XSRF_FIELD_NAME': "session_token",

      'XSRF_REDIRECT_TOKEN': "fbYGHstfmDs95qPSrMLMoxBkBpZ8MTQ5Mzk1Njg3M0AxNDkzODcwNDcz"  });
yt.setConfig('ID_TOKEN', null);window.ytcfg.set('SERVICE_WORKER_KILLSWITCH', false);  yt.setConfig('THUMB_DELAY_LOAD_BUFFER', 0);
if (window.ytcsi) {window.ytcsi.tick("jl", null, '');}</script>




</body></html>`, `<ul class="guide-toplevel">
            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
      
      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="what_to_watch-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/" title="Home" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-system&amp;ved=CA0QtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D" data-external-id="what_to_watch">
    <span class="yt-valign-container">
        <span class="thumb guide-what-to-watch-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Home
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="trending-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/feed/trending" title="Trending" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-trending&amp;ved=CA4QtSwYASITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEMEgpGRXRyZW5kaW5n" data-external-id="trending">
    <span class="yt-valign-container">
        <span class="thumb guide-trending-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Trending
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="history-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a href="https://www.youtube.com/feed/history" title="History" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-personal&amp;ved=CA8QtSwYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQELEglGRWhpc3Rvcnk%3D" data-external-id="history" class="guide-item yt-uix-sessionlink yt-valign spf-link   ">
    <span class="yt-valign-container">
        <span class="thumb guide-history-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            History
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="unlimited-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/red" title="Get YouTube Red" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;ved=CBAQtSwYAyITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQENEgtTUHVubGltaXRlZA%3D%3D" data-external-id="unlimited">
    <span class="yt-valign-container">
        <span class="thumb guide-video-youtube-red-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Get YouTube Red
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    " href="https://tv.youtube.com/?utm_source=youtube_web&amp;utm_medium=ep&amp;utm_campaign=home&amp;ve=34273" title="Get YouTube TV" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;ved=CBEQ4YsCGAQiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4" data-serialized-endpoint="qrnBvQFZCldodHRwczovL3R2LnlvdXR1YmUuY29tLz91dG1fc291cmNlPXlvdXR1YmVfd2ViJnV0bV9tZWRpdW09ZXAmdXRtX2NhbXBhaWduPWhvbWUmdmU9MzQyNzM%3D" data-external-id="">
    <span class="yt-valign-container">
        <span class="thumb guide-unplugged-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Get YouTube TV
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
          <h3>
      Best of YouTube
    </h3>

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" title="Music" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBMQtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E%3D" data-external-id="UC-9-kyTW8ZkZNDHQJ6FgpwQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Music
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCEgdi0XIXXZ-qJOFPf4JSKw-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw" title="Sports" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBQQtSwYASITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQ0VnZGkwWElYWFotcUpPRlBmNEpTS3c%3D" data-external-id="UCEgdi0XIXXZ-qJOFPf4JSKw">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/i/Egdi0XIXXZ-qJOFPf4JSKw/1.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Sports
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCOpNcN46UbXVtpKMrmU4Abg-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg" title="Gaming" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBUQtSwYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQ09wTmNONDZVYlhWdHBLTXJtVTRBYmc%3D" data-external-id="UCOpNcN46UbXVtpKMrmU4Abg">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/i/OpNcN46UbXVtpKMrmU4Abg/1.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Gaming
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UClgRkhTL3_hImCAmdLfDE4g-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UClgRkhTL3_hImCAmdLfDE4g" title="Movies" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBYQtSwYAyITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQ2xnUmtoVEwzX2hJbUNBbWRMZkRFNGc%3D" data-external-id="UClgRkhTL3_hImCAmdLfDE4g">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/i/lgRkhTL3_hImCAmdLfDE4g/1.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Movies
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCl8dMTqDrJQ0c8y23UBu4kQ-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UCl8dMTqDrJQ0c8y23UBu4kQ" title="TV Shows" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBcQtSwYBCITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQ2w4ZE1UcURySlEwYzh5MjNVQnU0a1E%3D" data-external-id="UCl8dMTqDrJQ0c8y23UBu4kQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://yt3.ggpht.com/-hFxEr8QHrvM/AAAAAAAAAAI/AAAAAAAAAAA/REjjL0X3gIs/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            TV Shows
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCYfdidRxbB8Qhf0Nx7ioOYw-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw" title="News" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBgQtSwYBSITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQ1lmZGlkUnhiQjhRaGYwTng3aW9PWXc%3D" data-external-id="UCYfdidRxbB8Qhf0Nx7ioOYw">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/i/YfdidRxbB8Qhf0Nx7ioOYw/1.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            News
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UC4R8DWoMoI7CAwX8_LjQHig-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig" title="Live" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBkQtSwYBiITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQzRSOERXb01vSTdDQXdYOF9MalFIaWc%3D" data-external-id="UC4R8DWoMoI7CAwX8_LjQHig">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/i/4R8DWoMoI7CAwX8_LjQHig/1.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Live
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCBR8-60-B28hp2BmDPdntcQ-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ" title="Spotlight" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBoQtSwYByITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQ0JSOC02MC1CMjhocDJCbURQZG50Y1E%3D" data-external-id="UCBR8-60-B28hp2BmDPdntcQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://yt3.ggpht.com/-dL2jeHlm2Ok/AAAAAAAAAAI/AAAAAAAAAAA/ZCMMkRj-hrw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Spotlight
          </span>
        </span>
    </span>
  </a>

  </li>

            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCzuqhhs6NWbgTzMuM09WKDQ-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="https://www.youtube.com/channel/UCzuqhhs6NWbgTzMuM09WKDQ" title="360° Video" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-channel&amp;ved=CBsQtSwYCCITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qDduQEaEhhVQ3p1cWhoczZOV2JnVHpNdU0wOVdLRFE%3D" data-external-id="UCzuqhhs6NWbgTzMuM09WKDQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        
  <img aria-hidden="true" data-thumb="https://i.ytimg.com/i/zuqhhs6NWbgTzMuM09WKDQ/1.jpg" alt="" data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="__MSG_@@extension_id__/2016/img/pixel-vfl3z5WfW.gif" width="20" height="20">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            360° Video
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
      
      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
            
  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="guide_builder-guide-item" data-visibility-tracking="" role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    " href="https://www.youtube.com/channels" title="Browse channels" data-visibility-tracking="" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=g-manage&amp;ved=CB0QtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg" data-serialized-endpoint="0qPduQECCAE%3D" data-external-id="guide_builder">
    <span class="yt-valign-container">
        <span class="thumb guide-builder-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Browse channels
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section guide-header signup-promo">
    <p>
      Sign in now to see your channels and recommendations!
    </p>
    <div id="guide-builder-promo-buttons" class="signed-out clearfix">
      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_promo%26next%3D%252Ffeed%252Fhistory%26hl%3Den&amp;hl=en" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg"><span class="yt-uix-button-content">Sign in</span></a>
    </div>
  </li>

    </ul>`, `<div id="yt-masthead-signin"><a href="https://www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-opacity yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=mhsb" id="upload-btn" title="Upload"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-material-upload yt-sprite"></span></span></a><div class="signin-container "><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="button" onclick=";window.location.href=this.getAttribute('href');return false;" role="link" href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_button%26next%3D%252Ffeed%252Fhistory%26hl%3Den&amp;hl=en"><span class="yt-uix-button-content">Sign in</span></button></div></div>`, `<div id="yt-masthead-user" class="yt-uix-clickcard"><a href="https://www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-opacity yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-sessionlink="ei=iacKWdK0H4qi-wPuz5SwBg&amp;feature=mhsb" id="upload-btn" title="Upload" data-tooltip-text="Upload" aria-labelledby="yt-uix-tooltip268-arialabel"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-material-upload yt-sprite"></span></span></a>
    <div class="notifications-container "><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon sb-notif-off yt-uix-gen204" type="button" onclick=";return false;" id="sb-button-notify" aria-label="Notifications" aria-haspopup="true" data-gen204="bell=jingled"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-bell yt-sprite"></span></span><span class="yt-uix-button-content"> </span></button></div>
    <span id="yt-masthead-account-picker" class="yt-uix-clickcard" data-card-action="yt.www.masthead.handleAccountPickerClick" data-card-class="yt-masthead-account-picker-card yt-masthead-multilogin">
    <button class="yt-uix-button yt-uix-button-size-default yt-masthead-user-icon yt-uix-clickcard-target" type="button" onclick=";return false;" aria-haspopup="true" aria-label="Account profile photo that opens list of alternate accounts" data-orientation="vertical" data-position="bottomleft" data-position-fixed="true" data-force-position="true"><span class="yt-uix-button-content">  <span class="video-thumb  yt-thumb yt-thumb-27">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
          <img src="[mastheadUserThumbnail]" alt="" aria-hidden="true" width="27" height="27">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span></button>

      <div class="yt-masthead-account-picker yt-uix-clickcard-content">



    <a class="yt-masthead-picker-header yt-masthead-picker-active-account" href="https://www.google.com/settings/u/1/personalinfo">
      NatCoolTV@gmail.com
    </a>

    <div id="yt-unlimited-member"></div>

    <div class="yt-masthead-picker-body">
        <a class="yt-masthead-picker-photo-wrapper" href="https://aboutme.google.com/u/1#profile_photo">  <span class="video-thumb  yt-thumb yt-thumb-64">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
          <img src="[mastheadUserThumbnail]" alt="" aria-hidden="true" width="64" height="64">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
<span class="yt-masthead-picker-photo-change">Change</span></a><div class="yt-masthead-picker-info"><div class="yt-masthead-picker-name" dir="ltr">Natalie Tran</div><div class="yt-masthead-picker-account-subtitle" id="yt-subscriber-count">​</div><a href="/dashboard?o=U" class="yt-uix-button  yt-masthead-picker-button yt-masthead-picker-button-primary yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw"><span class="yt-uix-button-content">Creator Studio</span></a><a href="/account" class="yt-uix-button  yt-masthead-picker-button yt-masthead-picker-settings-button yt-uix-tooltip yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw" title="YouTube settings"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-icon-account-settings yt-sprite"></span></span></a></div>
    </div>

        <div id="yt-masthead-multilogin" class="yt-masthead-multilogin-users">
      <div id="yt-delegate-accounts"></div>

        <div class="yt-masthead-multilogin-users-header">Other accounts</div>
              <a class="yt-masthead-account-picker-option yt-masthead-account-picker-user-option" href="/signin?feature=masthead_switcher&amp;action_handle_signin=true&amp;next=%2F&amp;authuser=0&amp;skip_identity_prompt=False">
      

    <span class="video-thumb yt-masthead-picker-photo-wrapper yt-thumb yt-thumb-36">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
          <img src="https://yt3.ggpht.com/-FlcPc8lidWE/AAAAAAAAAAI/AAAAAAAAAAA/6uJ5nRsSuFs/s88-c-k-no-rj-c0xffffff/photo.jpg" alt="Hao Tran" width="36" height="36">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>


  <div class="yt-masthead-picker-info">
    <div class="yt-masthead-picker-name" dir="ltr">Hao Tran</div>
      <div class="yt-masthead-picker-account-subtitle">
        haotran100@gmail.com
      </div>
  </div>

    </a>

    </div>


    <div id="yt-channel-switcher-link" class="clearfix"></div>

    <div class="yt-masthead-picker-footer clearfix">
          <a href="https://accounts.google.com/AddSession?service=youtube&amp;uilel=0&amp;hl=en&amp;passive=false&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Fapp%3Ddesktop%26hl%3Den%26action_handle_signin%3Dtrue%26next%3D%252F" class="yt-uix-button  yt-masthead-picker-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw"><span class="yt-uix-button-content">Add account</span></a>

  <a href="/logout" class="yt-uix-button  yt-masthead-picker-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw"><span class="yt-uix-button-content">Sign out</span></a>

    </div>
  </div>

  </span>

</div>` ];

	initload(pageBase);
	insertScripts(pageBase);
	}
	
	function insertScripts() {
	
	var scheduler = document.createElement("script");
scheduler.src = "chrome-extension://bklmigfheoipbffnmlejolibhbkcinni/2016/jsbin/scheduler.js";
document.head.appendChild(scheduler);

	var spfjs = document.createElement("script");
	spfjs.src = "chrome-extension://bklmigfheoipbffnmlejolibhbkcinni/2016/jsbin/spf.js";
	document.body.appendChild(spfjs);
	
	var ytwwwmastheadsizingrunBeforeBodyIsReady = document.createElement("script");
	ytwwwmastheadsizingrunBeforeBodyIsReady.text = `(function(){var b={a:"content-snap-width-1",b:"content-snap-width-2",c:"content-snap-width-3"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}
function h(a){var c=f().concat(["guide-pinned","show-guide"]),e=c.length,g=[];a.replace(/\S+/g,function(a){for(var d=0;d<e;d++)if(a==c[d])return;g.push(a)});
return g}
;function k(a,c,e){var g=document.getElementsByTagName("html")[0],d=h(g.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(d.push("guide-pinned"),c&&d.push("show-guide"));e&&(e=(window.innerWidth||document.documentElement.clientWidth)-21-50,1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(e-=230),d.push(1262<=e?"content-snap-width-3":1056<=e?"content-snap-width-2":"content-snap-width-1"));g.className=d.join(" ")}
var l=["yt","www","masthead","sizing","runBeforeBodyIsReady"],m=this;l[0]in m||!m.execScript||m.execScript("var "+l[0]);for(var n;l.length&&(n=l.shift());)l.length||void 0===k?m[n]&&m[n]!==Object.prototype[n]?m=m[n]:m=m[n]={}:m[n]=k;}).call(this);

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true);`
	document.head.appendChild(ytwwwmastheadsizingrunBeforeBodyIsReady);
	
	var spfenabled = document.createElement("script");
	spfenabled.text = `var ytspf = ytspf || {};ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['request-headers'] = {'X-YouTube-Identity-Token': null};ytspf.config['experimental-request-headers'] = ytspf.config['request-headers'];ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 50;ytspf.config['navigate-lifetime'] = 64800000;ytspf.config['animation-duration'] = 0;`
	document.body.appendChild(spfenabled);
	
	var spfscriptpath = document.createElement("script");
	spfscriptpath.text = `spf.script.path({'www/': 'yts/jsbin/www-en_US-vflPeHMz9/'});var ytdepmap = {"www/base": null, "www/common": "www/base", "www/angular_base": "www/common", "www/channels_accountupload": "www/common", "www/channels": "www/common", "www/dashboard": "www/common", "www/downloadreports": "www/common", "www/experiments": "www/common", "www/feed": "www/common", "www/instant": "www/common", "www/legomap": "www/common", "www/promo_join_network": "www/common", "www/results_harlemshake": "www/common", "www/results": "www/common", "www/results_starwars": "www/common", "www/subscriptionmanager": "www/common", "www/unlimited": "www/common", "www/watch": "www/common", "www/ypc_bootstrap": "www/common", "www/ypc_core": "www/common", "www/channels_edit": "www/channels", "www/live_dashboard": "www/angular_base", "www/videomanager": "www/angular_base", "www/watch_autoplayrenderer": "www/watch", "www/watch_edit": "www/watch", "www/watch_editor": "www/watch", "www/watch_live": "www/watch", "www/watch_promos": "www/watch", "www/watch_speedyg": "www/watch", "www/watch_transcript": "www/watch", "www/watch_videoshelf": "www/watch", "www/ct_advancedsearch": "www/videomanager", "www/my_videos": "www/videomanager"};spf.script.declare(ytdepmap);</script>`
	document.body.appendChild(spfscriptpath);
	
	var ytsetconfig = document.createElement("script");
	ytsetconfig.text = `      yt.setConfig('ANGULAR_JS', "__MSG_@@extension_id__\/2016\/jslib\/angular.min-vflNt0vEg.js");
  yt.setConfig('TRANSLATIONEDITOR_JS', "__MSG_@@extension_id__\/2016\/jsbin\/www-translationeditor.js");
  yt.setMsg('UNSAVED_CHANGES_WARNING', "Some of the changes you have made to channel settings have not been saved and will be lost if you navigate away from this page.");

    yt.setConfig(
      'JS_PAGE_MODULES', [
          'www/feed',
        'www/ypc_bootstrap'
      ]);




  yt.setConfig('DISMISS_THROUGH_IT', true);


      yt.setConfig({
        'GUIDE_SELECTED_ITEM': "0qDduQELEglGRWhpc3Rvcnk%3D"
      });

      yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });`
  document.body.appendChild(ytsetconfig);
  
  var ytsetconfigthelastjedi = document.createElement("script");
  ytsetconfigthelastjedi.text = `yt.setConfig({APIARY_HOST_FIRSTPARTY: "",INNERTUBE_CONTEXT_CLIENT_VERSION: "1.20170427",INNERTUBE_CONTEXT_CLIENT_NAME: 1,INNERTUBE_API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",APIARY_HOST: "",INNERTUBE_API_VERSION: "v1",GAPI_HINT_PARAMS: "m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBB_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA",XHR_APIARY_HOST: "youtubei.youtube.com",'VISITOR_DATA': "CgtmNldIUWxkWENEMA%3D%3D",'GAPI_HOST': "http:\/\/web.archive.org\/web\/20170504040113\/https:\/\/apis.google.com",'GAPI_LOCALE': "en_US",'INNERTUBE_CONTEXT_HL': "en",'INNERTUBE_CONTEXT_GL': "US",'XHR_APIARY_HOST': "youtubei.youtube.com"});yt.setConfig({'ROOT_VE_CHILDREN': ["CAEQ7VAiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CAIQpmEiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CAsQ_h4iEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CAwQ5isYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CA0QtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CA4QtSwYASITCJKdqJet1dMCFQrRfgod7icFZijpHg","CA8QtSwYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBAQtSwYAyITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBEQ4YsCGAQiEwiSnaiXrdXTAhUK0X4KHe4nBWYo6R4","CBIQ5isYASITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBMQtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBQQtSwYASITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBUQtSwYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBYQtSwYAyITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBcQtSwYBCITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBgQtSwYBSITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBkQtSwYBiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBoQtSwYByITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBsQtSwYCCITCJKdqJet1dMCFQrRfgod7icFZijpHg","CBwQ5isYAiITCJKdqJet1dMCFQrRfgod7icFZijpHg","CB0QtSwYACITCJKdqJet1dMCFQrRfgod7icFZijpHg","CB4Q2C4YAyITCJKdqJet1dMCFQrRfgod7icFZijpHg"],'ROOT_VE_TYPE': 3945});yt.setConfig({'EVENT_ID': "iacKWdK0H4qi-wPuz5SwBg",'PAGE_NAME': "feed",'LOGGED_IN': false,'SESSION_INDEX': null,'VALID_SESSION_TEMPDATA_DOMAINS': ["www.youtube.com","gaming.youtube.com"],'PARENT_TRACKING_PARAMS': "",'FORMATS_FILE_SIZE_JS': ["%s B","%s KB","%s MB","%s GB","%s TB"],'DELEGATED_SESSION_ID': null,'ONE_PICK_URL': "",'UNIVERSAL_HOVERCARDS': true,'GOOGLEPLUS_HOST': "http:\/\/web.archive.org\/web\/20170504040113\/https:\/\/plus.google.com",'PAGEFRAME_JS': "\/yts\/jsbin\/www-pageframe-vflj3aNNi\/www-pageframe.js",'GAPI_LOADER_URL': "\/yts\/jsbin\/www-gapi-loader-vflFXorI_\/www-gapi-loader.js",'JS_COMMON_MODULE': "\/yts\/jsbin\/www-en_US-vflPeHMz9\/common.js",'PAGE_FRAME_DELAYLOADED_CSS': "\/yts\/cssbin\/www-pageframedelayloaded-webp-vflfvAPn6.css",'EXPERIMENT_FLAGS': {"use_push_for_desktop_live_chat":true,"service_worker_push_home_only":true,"autoplay_pause_sampling_fraction":0.0,"desktop_notification_set_title_bar":true,"player_swfcfg_cleanup":true,"web_gel_lact":true,"youtubei_for_web":true,"autoescape_tempdata_url":true,"service_worker_push_prompt_cap":1,"service_worker_scope":"\/","enable_youtubei_innertube":true,"log_window_onerror_fraction":0.1,"cold_load_nav_start_web":true,"web_logging_max_batch":20,"block_spf_search_ads_impressions":true,"navigation_only_csi_reset":true,"gfeedback_for_signed_out_users_enabled":true,"watch_next_pause_autoplay_lact_sec":0,"same_domain_static_resources_desktop":true,"enable_server_side_search_pyv":true,"warm_load_nav_start_web":true,"desktop_pyv_on_watch_via_valor":true,"comment_deep_link":true,"desktop_pyv_on_watch_override_lact":true,"desktop_pyv_on_watch_missing_params":true,"chat_smoothing_animations":84,"player_interaction_logging":true,"clear_web_implicit_clicktracking":true,"service_worker_push_enabled":true,"consent_url_override":"","service_worker_enabled":true,"enable_more_related_ve_logging":true,"app_settings_snapshot_min_time_between_snapshots_hours":24},'GUIDED_HELP_PARAMS': {"logged_in":"0","context":"yt_web_history"},'HIGH_CONTRAST_MODE_CSS': "\/yts\/cssbin\/www-highcontrastmode-webp-vflbPe0Z_.css",'PREFETCH_LINKS': false,'PREFETCH_LINKS_MAX': 1,'PREFETCH_AUTOPLAY': false,'PREFETCH_AUTOPLAY_TIME': 0,'PREFETCH_AUTONAV': false,'PREBUFFER_MAX': 1,'PREBUFFER_LINKS': false,'PREBUFFER_AUTOPLAY': false,'PREBUFFER_AUTONAV': false,'WATCH_LATER_BUTTON': "\n\n  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" role=\"button\" title=\"Watch Later\" data-button-menu-id=\"shared-addto-watch-later-login\" data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_BUTTON': "  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" title=\"Queue\" data-video-ids=\"__VIDEO_ID__\" data-style=\"tv-queue\"\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_MENU': "  \u003cspan class=\"thumb-menu dark-overflow-action-menu video-actions\"\u003e\n    \u003cbutton aria-expanded=\"false\" class=\"yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty\" type=\"button\" aria-haspopup=\"true\" onclick=\";return false;\" \u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003cul class=\"watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid\"\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item\" data-action=\"play-next\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay next\u003c\/span\u003e\u003c\/li\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item\" data-action=\"play-now\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay now\u003c\/span\u003e\u003c\/li\u003e\u003c\/ul\u003e\u003c\/button\u003e\n  \u003c\/span\u003e\n",'SAFETY_MODE_PENDING': false,'ZWIEBACK_PING_URLS': ["http:\/\/web.archive.org\/web\/20170504040113\/https:\/\/www.google.com\/pagead\/lvz?pg=feed\u0026req_ts=1493870473\u0026evtid=ACWVUuZmyDK2Vlwghda-g5mnRls1tYLL45sCjqTKl9Cnss_uV3pxuC7AQ2-ZIGbN8NKiqyRHPzwCJkeIgruZUpM83qmPDqZ2gQ\u0026sigh=AGwc71sm_wETILLdFrhZ0_IdGfD_-WqVLw"],'LOCAL_DATE_TIME_CONFIG': {"formatLongDateOnly":"MMMM d, yyyy","firstWeekCutoffDay":3,"amPms":["AM","PM"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekendRange":[6,5],"formatLongDate":"MMMM d, yyyy h:mm a","shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"formatShortTime":"h:mm a","shortWeekdays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"firstDayOfWeek":0,"formatWeekdayShortTime":"EE h:mm a","dateFormats":["MMMM d, yyyy h:mm a","MMMM d, yyyy","MMM d, yyyy","MMM d, yyyy"],"formatShortDate":"MMM d, yyyy"},'PAGE_CL': 154470109,'PAGE_BUILD_LABEL': "youtube_20170427_0_RC5",'VARIANTS_CHECKSUM': "77f69d9144cdcdea77c80a689cb4ef1b",'CLIENT_PROTOCOL': "HTTP\/1.1",'CLIENT_TRANSPORT': "tcp",'MDX_ENABLE_CASTV2': true,'MDX_ENABLE_QUEUE': true,'FEEDBACK_BUCKET_ID': "Other",'FEEDBACK_LOCALE_LANGUAGE': "en",'FEEDBACK_LOCALE_EXTRAS': {"logged_in":false,"experiments":"9415398,9416475,9419452,9419979,9420289,9422596,9423555,9431012,9432939,9433870,9434046,9434289,9434949,9435522,9437553,9438309,9439294,9440054,9440368,9441194,9442387,9442746,9444189,9444771,9445139,9446054,9446364,9448302,9449072,9449243,9451814,9451827,9452833,9453167,9453897,9454394,9454653,9455031,9456445,9456640,9457023,9457114,9457141,9457169,9457541,9457592,9457595,9457598,9458265,9458576,9458668,9459075,9459445,9459792,9459801,9460087,9460098,9460350,9460554,9460829,9460959,9461124,9461734,9461777,9462018,9462032,9463460,9463594,9463617,9463936,9463963,9463965,9464181,9464207,9464440,9464823,9464887,9464889,9465438,9465513,9465533,9465652,9465666,9465709,9465813,9466210,9466778,9466793,9466795,9466797,9466835,9467001,9467217,9467400,9467426,9467508,9467510,9467512,9467533,9467659,9467700,9467712,9467795,9467806,9467820,9467822,9467895,9468110,9468195,9468228,9468285,9468326,9468480,9468554,9468805,9469042,9469114,9469192,9469224,9469329,9469333,9469379,9469606,9469609,9469615,9469734,9469862,9469883,9469887,9469911,9469953,9469972,9470299,9470319,9470791,9470924,9471263,9471413,9471471,9471482,9471506,9471673,9471689,9471955,9472010,9472097,9472169,9472178,9472401,9472417,9472450,9472485,9472564,9472609,9472711,9473374,9473384,9473390,9473514,9473576,9473603,9473927,9473977,9474064,9474259","accept_language":"en-US,en;q=0.8"}});   yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });
yt.setConfig('SPF_SEARCH_BOX', true);yt.setMsg({'ADDTO_CREATE_NEW_PLAYLIST': "Create new playlist\n",'ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE': "  $dynamic_title_placeholder (create new)\n",'ADDTO_WATCH_LATER': "Watch Later",'ADDTO_WATCH_LATER_ADDED': "Added",'ADDTO_WATCH_LATER_ERROR': "Error",'ADDTO_WATCH_QUEUE': "Watch Queue",'ADDTO_WATCH_QUEUE_ADDED': "Added",'ADDTO_WATCH_QUEUE_ERROR': "Error",'ADDTO_TV_QUEUE': "Queue",'ADS_INSTREAM_FIRST_PLAY': "A video ad is playing.",'ADS_INSTREAM_SKIPPABLE': "Video ad can be skipped.",'ADS_OVERLAY_IMPRESSION': "Ad displayed.",'MASTHEAD_NOTIFICATIONS_LABEL': {"other": "# unread notifications.", "case0": "0 unread notifications.", "case1": "1 unread notification."},'MASTHEAD_NOTIFICATIONS_COUNT_99PLUS': "99+",'MDX_AUTOPLAY_OFF': 'Autoplay is off','MDX_AUTOPLAY_ON': 'Autoplay is on'});  yt.setConfig('FEED_PRIVACY_CSS_URL', "https:\/\/s.ytimg.com\/yts\/cssbin\/www-feedprivacydialog-webp-vfltZywru.css");
  yt.setConfig('FEED_PRIVACY_LIGHTBOX_ENABLED', true);
yt.setConfig({'SBOX_JS_URL': "https:\/\/s.ytimg.com\/yts\/jsbin\/www-searchbox-legacy-vflDE45EL\/www-searchbox-legacy.js",'SBOX_SETTINGS': {"SESSION_INDEX":null,"HAS_ON_SCREEN_KEYBOARD":false,"REQUEST_DOMAIN":"us","PQ":"","PSUGGEST_TOKEN":null,"IS_FUSION":false,"REQUEST_LANGUAGE":"en","SUGG_EXP_ID":"ytd2_arm_7"},'SBOX_LABELS': {"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Remove"}});  yt.setConfig({
    'YPC_LOADER_JS': "https:\/\/s.ytimg.com\/yts\/jsbin\/www-ypc-vflQCA2fx\/www-ypc.js",
    'YPC_LOADER_CSS': "https:\/\/s.ytimg.com\/yts\/cssbin\/www-ypc-webp-vfludzDoy.css",
    'YPC_SIGNIN_URL': "https:\/\/accounts.google.com\/ServiceLogin?uilel=3\u0026service=youtube\u0026passive=true\u0026continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F%26hl%3Den\u0026hl=en",
    'DBLCLK_ADVERTISER_ID': "2542116",
    'DBLCLK_YPC_ACTIVITY_GROUP': "youtu444",
    'SUBSCRIPTION_URL': "\/subscription_ajax",
    'YPC_SWITCH_URL': "\/signin?action_handle_signin=true\u0026skip_identity_prompt=True\u0026feature=purchases\u0026next=%2F",
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
  yt.setConfig('GOOGLE_HELP_CONTEXT', "yt_web_history");
ytcsi.info('st', 81);ytcfg.set({"CSI_VIEWPORT":true,"TIMING_ACTION":"browse","TIMING_AFT_KEYS":["cpt"],"CSI_SERVICE_NAME":"youtube","TIMING_INFO":{"GetBrowse_rid":"0x7b030e19d3de3448","yt_li":"0","yt_lt":"cold","c":"WEB","cver":"1.20170427","yt_fn":"history"}});;  yt.setConfig({
      'XSRF_TOKEN': "QUFFLUhqazlPbGNtVDRpZUNHOVY1YTM4Y1drd2NUZ2pQQXxBQ3Jtc0tuSnlFRWk1d3U5U0E5NTg1R09ZWVJpWmpSZm8zeHBhT2xYVmVQMnF2U0RxbXdSSHpEcmNMcmU4cXB6Q1NmUnVkUldjQkttY0J3bnk2X3hpTUdzdlRWZU5uZG5nM1pkSUdPT09hdlNnVmFrUDBOTlVyRnI4azBuSmR2b0s4SE5RcFl0MDNDay1GMnlpMG42dV9XOFMxcW5GZWEtOHc=",
      'XSRF_FIELD_NAME': "session_token",

      'XSRF_REDIRECT_TOKEN': "fbYGHstfmDs95qPSrMLMoxBkBpZ8MTQ5Mzk1Njg3M0AxNDkzODcwNDcz"  });
yt.setConfig('ID_TOKEN', null);window.ytcfg.set('SERVICE_WORKER_KILLSWITCH', false);  yt.setConfig('THUMB_DELAY_LOAD_BUFFER', 0);
if (window.ytcsi) {window.ytcsi.tick("jl", null, '');}`
document.body.appendChild(ytsetconfigthelastjedi);

	var windowytcsi = document.createElement("script");
windowytcsi.text = `if (window.ytcsi) {window.ytcsi.tick("je", null, '');}`
document.body.appendChild(windowytcsi);

	var spaghetti = document.createElement("script");
spaghetti.text = `<script>var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},info: {}});},now: window.performance && window.performance.timing &&window.performance.now ? function() {return window.performance.timing.navigationStart + window.performance.now();} : function() {return (new Date()).getTime();},tick: function(l, t, n) {ticks = ytcsi.gt(n).tick;var v = t || ytcsi.now();if (ticks[l]) {ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);ticks['_' + l].push(v);}ticks[l] = v;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startTick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}var slt = function(el, t) {setTimeout(function() {var n = ytcsi.now();el.loadTime = n;if (el.slt) {el.slt();}}, t);};w.__ytRIL = function(el) {if (!el.getAttribute('data-thumb')) {if (w.requestAnimationFrame) {w.requestAnimationFrame(function() {slt(el, 0);});} else {slt(el, 16);}}};})(window, document);</script>`
document.head.appendChild(spaghetti);

	var ytcfg = document.createElement("script");
ytcfg.text = `<script>var ytcfg = {d: function() {return (window.yt && yt.config_) || ytcfg.data_ || (ytcfg.data_ = {});},get: function(k, o) {return (k in ytcfg.d()) ? ytcfg.d()[k] : o;},set: function() {var a = arguments;if (a.length > 1) {ytcfg.d()[a[0]] = a[1];} else {for (var k in a[0]) {ytcfg.d()[k] = a[0][k];}}}};</script>`
document.head.appendChild(ytcfg);

	var ytcsi_cfg = document.createElement("script");
ytcsi_cfg.text = `if (window.ytcsi) {window.ytcsi.tick("cfg", null, '');}`
document.body.appendChild(ytcsi_cfg);

	var playerconfig = document.createElement("script");
playerconfig.text = `var ytplayer = ytplayer || {};ytplayer.config = {"url_v8":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-vflQ8jJxo\/cps.swf","sts":17277,"html5":true,"url_v9as2":"","assets":{"css":"\/yts\/cssbin\/player-vflAZABhd\/www-player.css","js":"\/yts\/jsbin\/player-vflppxuSE\/en_US\/base.js"},"url":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-vflQ8jJxo\/watch_as3.swf","params":{"allowfullscreen":"true","allowscriptaccess":"always","bgcolor":"#000000"},"attrs":{"id":"movie_player"},"min_version":"8.0.0","messages":{"player_fallback":["Adobe Flash Player or an HTML5 supported browser is required for video playback.\u003cbr\u003e\u003ca href=\"https:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player \u003c\/a\u003e\u003cbr\u003e\u003ca href=\"\/html5\"\u003eLearn more about upgrading to an HTML5 browser\u003c\/a\u003e"]},"args":{"innertube_api_version":"v1","player_error_log_fraction":"1.0","apiary_host":"","enablejsapi":"1","cr":"US","hl":"en_US","fflags":"doubleclick_gpt_retagging=true\u0026html5_trust_platform_bitrate_limits=true\u0026legacy_autoplay_flag=true\u0026yto_enable_unlimited_landing_page_yto_features=true\u0026html5_timeupdate_readystate_check=true\u0026html5_preload_size_excludes_metadata=true\u0026html5_suspended_state=true\u0026live_fresca_v2=true\u0026mweb_blacklist_progressive_chrome_mobile=true\u0026html5_stale_dash_manifest_retry_factor=1.0\u0026mobile_disable_ad_mob_on_home=true\u0026dash_manifest_version=5\u0026exo_drm_max_keyfetch_delay_ms=0\u0026html5_ad_no_buffer_abort_after_skippable=true\u0026html5_max_av_sync_drift=50\u0026html5_max_readahead_bandwidth_cap=0\u0026html5_disable_non_contiguous=true\u0026android_enable_thumbnail_overlay_side_panel=false\u0026lock_fullscreen=false\u0026kids_enable_terms_servlet=true\u0026enable_ccs_buy_flow_for_chirp=true\u0026mpu_visible_threshold_count=2\u0026request_mpu_on_unfilled_ad_break=true\u0026html5_min_buffer_to_resume=6\u0026html5_spherical_bicubic_mode=0\u0026html5_playing_event_buffer_underrun=true\u0026variable_load_timeout_ms=0\u0026html5_throttle_rate=0.0\u0026yto_enable_watch_offer_module=true\u0026html5_min_byterate_to_time_out=0\u0026dynamic_ad_break_seek_threshold_sec=0\u0026forced_brand_precap_duration_ms=2000\u0026html5_post_interrupt_readahead=0\u0026use_push_for_desktop_live_chat=true\u0026sidebar_renderers=true\u0026send_api_stats_ads_asr=true\u0026kids_enable_block_servlet=true\u0026chrome_promo_enabled=true\u0026lugash_header_warmup=true\u0026desktop_cleanup_companion_on_instream_begin=true\u0026kids_enable_privacy_notice=true\u0026enable_plus_page_pts=true\u0026autoplay_time=8000\u0026spherical_on_android_iframe=true\u0026html5_enable_embedded_player_visibility_signals=true\u0026vss_dni_delayping=0\u0026enable_red_carpet_p13n_shelves=true\u0026html5_tight_max_buffer_allowed_impaired_time=0.0\u0026html5_pause_manifest_ended=true\u0026html5_always_reload_on_403=true\u0026html5_default_quality_cap=0\u0026show_countdown_on_bumper=true\u0026disable_indisplay_adunit_on_embedded=true\u0026html5_max_buffer_duration=0\u0026html5_idle_preload_secs=1\u0026html5_min_readbehind_cap_secs=0\u0026show_thumbnail_on_standard=true\u0026html5_serverside_biscotti_id_wait_ms=1000\u0026disable_new_pause_state3=true\u0026html5_bandwidth_multisample_width=0.4\u0026html5_reduce_startup_rebuffers=true\u0026html5_get_video_info_timeout_ms=0\u0026html5_disable_audio_slicing=true\u0026html5_repredict_misses=5\u0026html5_adjust_effective_request_size=true\u0026html5_vp9_live_whitelist=false\u0026html5_strip_emsg=true\u0026html5_retry_media_element_errors_delay=0\u0026html5_variability_full_discount_thresh=3.0\u0026html5_report_performance_cap=true\u0026html5_seeks_are_not_rebuffers=true\u0026html5_min_secs_between_format_selections=8.0\u0026midroll_notify_time_seconds=5\u0026html5_repredict_interval_secs=0.0\u0026html5_serverside_call_server_on_biscotti_error=true\u0026html5_request_sizing_multiplier=0.8\u0026signed_out_notifications_inbox=true\u0026html5_suspend_manifest_on_pause=true\u0026html5_bandwidth_window_size=0\u0026kids_enable_post_onboarding_red_flow=true\u0026yto_feature_hub_channel=false\u0026fixed_padding_skip_button=true\u0026yto_enable_ytr_promo_refresh_assets=true\u0026html5_max_vss_watchtime_ratio=0.0\u0026html5_always_enable_timeouts=true\u0026html5_request_size_min_secs=0.0\u0026html5_reseek_on_infinite_buffer=true\u0026html5_check_for_reseek=true\u0026enable_offer_restricts_for_watch_page_offers=true\u0026ios_disable_notification_preprompt=true\u0026youtubei_for_web=true\u0026log_video_preview_interaction=true\u0026html5_connect_timeout_secs=7.0\u0026interaction_log_delayed_event_batch_size=200\u0026html5_min_vss_watchtime_to_cut_secs=0.0\u0026sdk_wrapper_levels_allowed=0\u0026html5_min_vss_watchtime_to_cut_secs_redux=0.0\u0026postroll_notify_time_seconds=5\u0026kids_asset_theme=server_side_assets\u0026use_new_skip_icon=true\u0026android_native_live_enablement=true\u0026enable_playlist_multi_season=true\u0026html5_local_max_byterate_lookahead=15\u0026html5_report_conn=true\u0026lugash_header_by_service=true\u0026fix_gpt_pos_params=true\u0026html5_min_readbehind_secs=0\u0026website_actions_throttle_percentage=1.0\u0026use_new_style=true\u0026enable_pla_desktop_shelf=true\u0026ad_video_end_renderer_duration_milliseconds=7000\u0026mweb_enable_skippables_on_iphone=true\u0026html5_background_cap_idle_secs=60\u0026king_crimson_player_redux=true\u0026send_html5_api_stats_ads_abandon=true\u0026flex_theater_mode=true\u0026html5_variability_no_discount_thresh=1.0\u0026stop_using_ima_sdk_gpt_request_activity=true\u0026live_chunk_readahead=3\u0026mweb_pu_android_chrome_54_above=true\u0026yt_unlimited_pts_skip_ads_promo_desktop_always=true\u0026enable_live_state_auth=true\u0026html5_variability_discount=0.5\u0026html5_use_mediastream_timestamp=true\u0026html5_get_video_info_promiseajax=true\u0026playready_on_borg=true\u0026html5_progressive_signature_reload=true\u0026html5_long_term_bandwidth_window_size=0\u0026king_crimson_player=false\u0026ad_duration_threshold_for_showing_endcap_seconds=15\u0026embed_new_share_icon=true\u0026player_interaction_logging=true\u0026ios_notifications_disabled_subs_tab_promoted_item_promo=true\u0026uniplayer_dbp=true\u0026html5_live_pin_to_tail=true\u0026html5_min_startup_smooth_target=10.0\u0026html5_max_buffer_health_for_downgrade=15\u0026html5_elbow_tracking_tweaks=true\u0026kids_enable_server_side_assets=true\u0026html5_deadzone_multiplier=1.1\u0026html5_no_clear_on_quota_exceeded=true\u0026polymer_report_missing_web_navigation_endpoint=false\u0026player_destroy_old_version=true\u0026html5_live_disable_dg_pacing=true\u0026html5_use_adaptive_live_readahead=true\u0026html5_min_upgrade_health=0\u0026pla_shelf_hovercard=true\u0026html5_new_preloading=true\u0026html5_observed_downgrade_prop=0.0\u0026dynamic_ad_break_pause_threshold_sec=0\u0026max_resolution_for_white_noise=360\u0026html5_live_4k_more_buffer=true\u0026html5_nnr_downgrade_count=16\u0026android_buy_bucket_buy_flows=true\u0026html5_clearance_fix=true\u0026html5_background_quality_cap=360\u0026new_promo_page=true\u0026enable_local_channel=true\u0026live_readahead_seconds_multiplier=0.8\u0026use_fast_fade_in_0s=true\u0026ios_enable_mixin_accessibility_custom_actions=true\u0026html5_serverside_get_biscotti_id_from_client=true\u0026html5_msi_error_fallback=true\u0026signed_out_notification_settings=true\u0026disable_search_mpu=true\u0026html5_allowable_liveness_drift_chunks=2\u0026mweb_muted_autoplay_animation=none\u0026html5_tight_max_buffer_allowed_bandwidth_stddevs=0.0\u0026html5_serverside_call_server_on_biscotti_timeout=true","innertube_api_key":"AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8","innertube_context_client_version":"1.20170427","autoplay":"0","xhr_apiary_host":"youtubei.youtube.com","fexp":"9405998,9419451,9422596,9425078,9431012,9434046,9434289,9443914,9446054,9446364,9449243,9453897,9456640,9457141,9457285,9458576,9458997,9459158,9463583,9463594,9463808,9463965,9465813,9465928,9465972,9466395,9466423,9466594,9466778,9466778,9466793,9466795,9466797,9467217,9467712,9468351,9468420,9468805,9468954,9469224,9469380,9470086,9471388,9473179,9473466,9474065,9474596","c":"WEB","apiary_host_firstparty":"","host_language":"en","cver":"1.20170427","ssl":"1","gapi_hint_params":"m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBB_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA"}};ytplayer.load = function() {yt.player.Application.create("player-api", ytplayer.config);ytplayer.config.loaded = true;};`
document.body.appendChild(playerconfig);

	var ad = document.createElement("script");
ad.text = `(function() {function tagMpuIframe() {var containerEl = document.getElementById('video-masthead');if (!containerEl) {return;}var iframeEl = document.createElement('iframe');var iframeSrc = "https:\/\/pubads.g.doubleclick.net\/gampad\/ads?ad_rule=0\u0026d_imp=1\u0026gdfp_req=1\u0026impl=ifr\u0026iu=%2F4061%2Fcom.ythome\u0026pucrd=CgYIABAAGAA\u0026scp=dc_yt%3D1%26kbsg%3DHPUS170504%26kga%3D-1%26kgg%3D-1%26klg%3Den%26kmyd%3Dvideo-masthead%26ssl%3D1%26ytdevice%3D1%26ytexp%3D9405998%252C9419451%252C9422596%252C9425078%252C9431012%252C9434289%252C9443914%252C9446054%252C9451823%252C9457285%252C9458997%252C9459158%252C9460349%252C9463583%252C9463808%252C9465813%252C9465928%252C9465972%252C9466395%252C9466423%252C9466594%252C9466778%252C9467712%252C9468351%252C9468420%252C9468954%252C9469380%252C9470086%252C9471263%252C9471388%252C9473179%252C9473466%252C9474065%252C9474596\u0026sz=850x250\u0026ytdevice=1" + '&correlator=' +Math.floor(Math.random() * 10000000000000000);iframeEl.id = 'video-masthead-iframe';iframeEl.width = '100%';iframeEl.height = '100%';iframeEl.scrolling = 'no';iframeEl.frameBorder = '0';containerEl.appendChild(iframeEl);iframeEl.src = iframeSrc;}tagMpuIframe();if (window.ytcsi) {window.ytcsi.info("yt_ad", "1", '');}})();`
document.body.appendChild(ad);
	

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
	

var extRoot = (chrome.runtime.getURL("/"));	

function correctExtensionUrls() {
	var ext = chrome.i18n.getMessage("@@extension_id");
	// Firefox
	document.head.innerHTML = document.head.innerHTML.replace(/__MSG_@@extension_id__\//g, chrome.runtime.getURL("/"));
	document.body.innerHTML = document.body.innerHTML.replace(/__MSG_@@extension_id__\//g, chrome.runtime.getURL("/"));
	console.log(chrome.runtime.getURL("/"));
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
	//`
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
			if (document.getElementById("gt-if-init").contentDocument.querySelector("#end").querySelector("#buttons").children[2].tagName.toLowerCase().substring(0, 3) == "ytd") {
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