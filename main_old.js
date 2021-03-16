(function() {
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
	
	let pages = [ `<html data-cast-api-enabled="true" class="guide-pinned show-guide content-snap-width-3" lang="en"><head><script src="//archive.org/includes/analytics.js?v=cf34f82" type="text/javascript"></script>
<script type="text/javascript">window.addEventListener('DOMContentLoaded',function(){var v=archive_analytics.values;v.service='wb';v.server_name='wwwb-app58.us.archive.org';v.server_ms=2904;archive_analytics.send_pageview({});});</script><script type="text/javascript" src="/_static/js/playback.bundle.js?v=SOX25l-I" charset="utf-8"></script>
<script type="text/javascript" src="/_static/js/wombat.js?v=cRqOKCOw" charset="utf-8"></script>
<script type="text/javascript">
  __wm.init("http://web.archive.org/web");
  __wm.wombat("https://www.youtube.com/feed/history","20150208000231","http://web.archive.org/","web","/_static/",
	      "1423353751");
</script>
<link rel="stylesheet" type="text/css" href="/_static/css/banner-styles.css?v=bsmaklHF">
<link rel="stylesheet" type="text/css" href="/_static/css/iconochive.css?v=qtvMKcIJ">
<!-- Start Wayback Rewrite JS Include -->
<script type="text/javascript" src="/_static/js/jwplayer/jwplayer.js?v=hiYhl5rb" charset="utf-8"></script>
<script type="text/javascript" src="/_static/js/video-embed-rewriter.js?v=XNu2aPOa" charset="utf-8"></script>
<script type="text/javascript">
_wmVideos_.init("/web");
</script>
<!-- End Wayback Rewrite JS Include -->
<script>var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},span: {},info: {}});},tick: function(l, t, n) {ytcsi.gt(n).tick[l] = t || +new Date();},span: function(l, s, e, n) {ytcsi.gt(n).span[l] = (e ? e : +new Date()) - ytcsi.gt(n).tick[s];},setSpan: function(l, s, n) {ytcsi.gt(n).span[l] = s;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.perf = w.performance || w.mozPerformance ||w.msPerformance || w.webkitPerformance;ytcsi.setStart('dhs', ytcsi.perf ? ytcsi.perf.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startTick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}})(window, document);</script>  




  <script>
        (function(){var b={j:"content-snap-width-1",k:"content-snap-width-2",o:"content-snap-width-3",d:"content-snap-width-skinny-mode"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}function g(a){var c=f().concat(["guide-pinned","show-guide"]),e=c.length,h=[];a.replace(/\S+/g,function(a){for(var d=0;d<e;d++)if(a==c[d])return;h.push(a)});return h};function l(a,c,e,h){var m=document.getElementsByTagName("html")[0],d=g(m.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(d.push("guide-pinned"),c&&d.push("show-guide"));if(e){e=window.innerWidth||document.documentElement.clientWidth;var k=e-21-50;1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(k-=230);d.push(h&&640>e?"content-snap-width-skinny-mode":1262<=k?"content-snap-width-3":1056<=k?"content-snap-width-2":"content-snap-width-1")}m.className=
d.join(" ")}var n=["yt","www","masthead","sizing","runBeforeBodyIsReady"],p=this;n[0]in p||!p.execScript||p.execScript("var "+n[0]);for(var q;n.length&&(q=n.shift());)n.length||void 0===l?p[q]?p=p[q]:p=p[q]={}:p[q]=l;})();

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true,false);
  </script>


      <script src="//web.archive.org/web/20150208000231js_/https://s.ytimg.com/yts/jsbin/www-scheduler-vflNAje0j/www-scheduler.js" type="text/javascript" name="www-scheduler/www-scheduler"></script>


  
  <link rel="stylesheet" href="moz-extension://__MSG_@@extension_id__/cssbin/www-core-vfldMqirS.css" name="www-core">
  <link rel="stylesheet" href="moz-extension://__MSG_@@extension_id__/cssbin/www-pageframe-vfliaAks7.css" name="www-pageframe">
  <link rel="stylesheet" href="moz-extension://__MSG_@@extension_id__/cssbin/www-guide-vflzTeABo.css" name="www-guide">
  

    
<title>YouTube</title><link rel="search" type="application/opensearchdescription+xml" href="http://web.archive.org/web/20150208000231/http://www.youtube.com/opensearch?locale=en_US" title="YouTube Video Search"><link rel="shortcut icon" href="moz-extension://__MSG_@@extension_id__/favicon-vfldLzJxy.ico" type="image/x-icon">     <link rel="icon" href="moz-extension://__MSG_@@extension_id__/favicon_32-vflWoMFGx.png" sizes="32x32"><link rel="alternate" media="handheld" href="http://web.archive.org/web/20150208000231/https://m.youtube.com/feed/history"><link rel="alternate" media="only screen and (max-width: 640px)" href="http://web.archive.org/web/20150208000231/https://m.youtube.com/feed/history">        <meta name="title" content="YouTube">

  <meta name="keywords" content="video, sharing, camera phone, video phone, free, upload">
      <link rel="stylesheet" href="moz-extension://__MSG_@@extension_id__/cssbin/www-home-c4-vfljbxQYB.css" name="www-home-c4">

<!-- Smart CSS Insertion --></head><body dir="ltr" class="  ltr    exp-innertube-history   site-center-aligned site-as-giant-card guide-pinning-enabled appbar-hidden     not-nirvana-dogfood  not-yt-legacy-css    flex-width-enabled      flex-width-enabled-snap    delayed-frame-styles-not-in  " id="body">

  <div id="early-body"></div>
  <div id="body-container"><form name="logoutForm" method="POST" action="/web/20150208000231/https://www.youtube.com/logout"><input type="hidden" name="action_logout" value="1"></form><div id="masthead-positioner">  
  <div id="yt-masthead-container" class="clearfix yt-base-gutter"><div id="yt-masthead" class=""><div class="yt-masthead-logo-container">    <a id="logo-container" href="https://www.youtube.com/" title="YouTube home" class="     spf-link 
 yt-uix-sessionlink" data-sessionlink="feature=yt-logo"><img id="logo" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></a>
    <a href="https://www.youtube.com/" title="YouTube home" class="     spf-link 
 yt-uix-sessionlink" data-sessionlink="feature=yt-logo">
    <span class="mini-logo yt-sprite"></span>
  </a>

  <div id="appbar-guide-button-container">
    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text yt-uix-button-empty yt-uix-button-has-icon appbar-guide-toggle appbar-guide-clickable-ancestor" type="button" onclick=";return false;" aria-label="Guide" aria-controls="appbar-guide-menu" id="appbar-guide-button"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-appbar-guide yt-sprite"></span></span><span class="yt-uix-button-arrow yt-sprite"></span></button>
    <div id="appbar-guide-button-notification-check" class="yt-valign">
      <span class="appbar-guide-notification-icon yt-valign-content yt-sprite"></span>
    </div>
  </div>
  <div id="appbar-main-guide-notification-container"></div>
</div><div id="yt-masthead-signin"><span id="appbar-onebar-upload-group"><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default" data-sessionlink="feature=mhsb&amp;ei=l6fWVJzlLrKy-AOy3oCwAw" id="upload-btn"><span class="yt-uix-button-content">Upload </span></a></span><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="button" onclick=";window.location.href=this.getAttribute('href');return false;" href="https://accounts.google.com/ServiceLogin?passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Ffeature%3Dsign_in_button%26app%3Ddesktop%26hl%3Den%26next%3D%252Ffeed%252Fhistory%26action_handle_signin%3Dtrue&amp;hl=en&amp;uilel=3&amp;service=youtube"><span class="yt-uix-button-content">Sign in </span></button></div><div id="yt-masthead-content"><form id="masthead-search" class="search-form consolidated-form" action="/web/20150208000231/https://www.youtube.com/results" onsubmit="if (_gel('masthead-search-term').value == '') return false;"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component search-button" type="submit" onclick="if (_gel('masthead-search-term').value == '') return false; _gel('masthead-search').submit(); return false;;return true;" dir="ltr" id="search-btn" tabindex="2"><span class="yt-uix-button-content">Search </span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><label><input id="masthead-search-term" autocomplete="off" class="search-term yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" title="Search"></label></div></form></div></div></div>
    <div id="masthead-appbar-container" class="clearfix"><div id="masthead-appbar"><div id="appbar-content" class=""></div></div></div>

</div><div id="masthead-positioner-height-offset"></div><div id="page-container"><div id="page" class="    not-fixed-width-tab-widescreen clearfix"><div id="guide" class="yt-scrollbar">      <div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-layout appbar-guide-clickable-ancestor yt-uix-scroller" role="navigation">
    <div id="guide-container" class="vve-check" data-sessionlink="ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAEQ_h4">
        <div class="guide-module-content yt-scrollbar">
    <ul class="guide-toplevel">
            <li class="guide-section vve-check" data-sessionlink="ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAIQ5isoAA" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
      
      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="what_to_watch-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="https://www.youtube.com/" title="What to Watch" data-sessionlink="feature=g-system&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAMQtSwoAA" data-visibility-tracking="" data-external-id="what_to_watch" data-serialized-endpoint="0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D">
    <span class="yt-valign-container">
        <span class="thumb guide-what-to-watch-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            What to Watch
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section vve-check" data-sessionlink="ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAQQ5isoAQ" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
          <h3>
      Best of YouTube
    </h3>

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCF0pVplsI8R5kcAqgtoRqoA-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UCF0pVplsI8R5kcAqgtoRqoA" title="Popular on YouTube" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAUQtSwoAA" data-visibility-tracking="" data-external-id="UCF0pVplsI8R5kcAqgtoRqoA" data-serialized-endpoint="0qDduQEaEhhVQ0YwcFZwbHNJOFI1a2NBcWd0b1Jxb0E%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="//web.archive.org/web/20150208000231/https://i.ytimg.com/i/F0pVplsI8R5kcAqgtoRqoA/1.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Popular on YouTube
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="https://www.youtube.com/channel/UCKpVF-R8IKXP5qMzc7hefsg" title="xXWolfGamesXx" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAYQtSwoAQ" data-visibility-tracking="" data-external-id="UC-9-kyTW8ZkZNDHQJ6FgpwQ" data-serialized-endpoint="0qDduQEaEhhVQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="https://lh3.googleusercontent.com/8BThGXqIl7AZwRwP-buPTguXhbcj5NdZ-YuDUR7H7hgi2jvz4ZycPwA2snxblJ7h3LePv24rhhmu79W6wQ=s398-no?pageId=114103585614603851907" src="https://lh3.googleusercontent.com/8BThGXqIl7AZwRwP-buPTguXhbcj5NdZ-YuDUR7H7hgi2jvz4ZycPwA2snxblJ7h3LePv24rhhmu79W6wQ=s398-no?pageId=114103585614603851907" alt="" aria-hidden="true" width="20" height="20">
        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            xXWolfGamesXx
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCEgdi0XIXXZ-qJOFPf4JSKw-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw" title="Sports" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAcQtSwoAg" data-visibility-tracking="" data-external-id="UCEgdi0XIXXZ-qJOFPf4JSKw" data-serialized-endpoint="0qDduQEaEhhVQ0VnZGkwWElYWFotcUpPRlBmNEpTS3c%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="//web.archive.org/web/20150208000231/https://i.ytimg.com/i/Egdi0XIXXZ-qJOFPf4JSKw/1.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
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

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCOpNcN46UbXVtpKMrmU4Abg-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg" title="Gaming" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAgQtSwoAw" data-visibility-tracking="" data-external-id="UCOpNcN46UbXVtpKMrmU4Abg" data-serialized-endpoint="0qDduQEaEhhVQ09wTmNONDZVYlhWdHBLTXJtVTRBYmc%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="//web.archive.org/web/20150208000231/https://i.ytimg.com/i/OpNcN46UbXVtpKMrmU4Abg/1.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
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

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UC3yA8nDwraeOfnYfBWun83g-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UC3yA8nDwraeOfnYfBWun83g" title="Education" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAkQtSwoBA" data-visibility-tracking="" data-external-id="UC3yA8nDwraeOfnYfBWun83g" data-serialized-endpoint="0qDduQEaEhhVQzN5QThuRHdyYWVPZm5ZZkJXdW44M2c%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="//web.archive.org/web/20150208000231/https://i.ytimg.com/i/3yA8nDwraeOfnYfBWun83g/1.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Education
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCczhp4wznQWonO7Pb8HQ2MQ-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UCczhp4wznQWonO7Pb8HQ2MQ" title="Movies" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAoQtSwoBQ" data-visibility-tracking="" data-external-id="UCczhp4wznQWonO7Pb8HQ2MQ" data-serialized-endpoint="0qDduQEaEhhVQ2N6aHA0d3puUVdvbk83UGI4SFEyTVE%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="http://web.archive.org/web/20150208000231/https://yt3.ggpht.com/-DIjHsEMMaRE/AAAAAAAAAAI/AAAAAAAAAAA/q6whn_JcUH8/s88-c-k-no/photo.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
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

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCl8dMTqDrJQ0c8y23UBu4kQ-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UCl8dMTqDrJQ0c8y23UBu4kQ" title="TV Shows" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAsQtSwoBg" data-visibility-tracking="" data-external-id="UCl8dMTqDrJQ0c8y23UBu4kQ" data-serialized-endpoint="0qDduQEaEhhVQ2w4ZE1UcURySlEwYzh5MjNVQnU0a1E%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="http://web.archive.org/web/20150208000231/https://yt3.ggpht.com/-hFxEr8QHrvM/AAAAAAAAAAI/AAAAAAAAAAA/REjjL0X3gIs/s88-c-k-no/photo.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
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

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCYfdidRxbB8Qhf0Nx7ioOYw-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw" title="News" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CAwQtSwoBw" data-visibility-tracking="" data-external-id="UCYfdidRxbB8Qhf0Nx7ioOYw" data-serialized-endpoint="0qDduQEaEhhVQ1lmZGlkUnhiQjhRaGYwTng3aW9PWXc%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="//web.archive.org/web/20150208000231/https://i.ytimg.com/i/YfdidRxbB8Qhf0Nx7ioOYw/1.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
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

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="SBAaOjE-GIlRI-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/SBAaOjE-GIlRI" title="Live" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CA0QtSwoCA" data-visibility-tracking="" data-external-id="SBAaOjE-GIlRI" data-serialized-endpoint="0qDduQEPEg1TQkFhT2pFLUdJbFJJ">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="//web.archive.org/web/20150208000231/https://i.ytimg.com/i/kJaVvH9azON9K7iYjKu7KQ/1.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
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

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCBR8-60-B28hp2BmDPdntcQ-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/web/20150208000231/https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ" title="Spotlight" data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CA4QtSwoCQ" data-visibility-tracking="" data-external-id="UCBR8-60-B28hp2BmDPdntcQ" data-serialized-endpoint="0qDduQEaEhhVQ0JSOC02MC1CMjhocDJCbURQZG50Y1E%3D">
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img data-thumb="http://web.archive.org/web/20150208000231/https://yt3.ggpht.com/-dL2jeHlm2Ok/AAAAAAAAAAI/AAAAAAAAAAA/ZCMMkRj-hrw/s88-c-k-no/photo.jpg" src="http://web.archive.org/web/20150208000231im_/https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" aria-hidden="true" width="20" height="20">
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

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section vve-check" data-sessionlink="ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CA8Q5isoAg" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
      
      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="guide_builder-guide-item" data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/web/20150208000231/https://www.youtube.com/channels" title="Browse channels" data-sessionlink="feature=g-manage&amp;ei=l6fWVJzlLrKy-AOy3oCwAw&amp;ved=CBAQtSwoAA" data-visibility-tracking="" data-external-id="guide_builder" data-serialized-endpoint="0qPduQECCAE%3D">
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
      <a href="http://web.archive.org/web/20150208000231/https://accounts.google.com/ServiceLogin?passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Ffeature%3Dsign_in_promo%26app%3Ddesktop%26hl%3Den%26next%3D%252Ffeed%252Fhistory%26action_handle_signin%3Dtrue&amp;hl=en&amp;uilel=3&amp;service=youtube" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=l6fWVJzlLrKy-AOy3oCwAw"><span class="yt-uix-button-content">Sign in </span></a>
    </div>
  </li>

    </ul>
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
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >You&#39;ll be reminded about this event</span></span></div>
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
      data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   "
    href="__URL__"
    title="__TITLE__"
    data-sessionlink="feature=g-playlists&amp;ei=l6fWVJzlLrKy-AOy3oCwAw"
    data-visibility-tracking=""
    data-external-id="__ID__"
    data-serialized-endpoint=""
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
      data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   "
    href="__URL__"
    title="__TITLE__"
    data-sessionlink="feature=g-playlists&amp;ei=l6fWVJzlLrKy-AOy3oCwAw"
    data-visibility-tracking=""
    data-external-id="__ID__"
    data-serialized-endpoint=""
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
      data-visibility-tracking="" aria-role="menuitem">
      
  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   "
    href="__URL__"
    title="__TITLE__"
    data-sessionlink="feature=g-channel&amp;ei=l6fWVJzlLrKy-AOy3oCwAw"
    data-visibility-tracking=""
    data-external-id="__ID__"
    data-serialized-endpoint=""
  >
    <span class="yt-valign-container">
        <span class="thumb">  
  <span class="video-thumb  yt-thumb yt-thumb-20"
    >
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
        <img src="__THUMBNAIL_URL__" alt="" aria-hidden="true" width="20"  height="20" >
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
</div></div><div id="header"></div><div id="player" class="  off-screen  "><div id="theater-background" class="player-height"></div>  <div id="player-mole-container">

    <div id="player-unavailable" class="  hid  ">
      
    </div>

    <div id="player-api" class="player-width player-height off-screen-target player-api wm-videoplayer"></div>
    

    <div id="watch-queue-mole" class="video-mole mole-collapsed hid"><div id="watch-queue" class="watch-playlist player-height"><div class="main-content"><div class="watch-queue-header"><div class="watch-queue-info"><div class="watch-queue-info-icon"><span class="tv-queue-list-icon yt-sprite"></span></div><h3 class="watch-queue-title">Watch Queue</h3><h3 class="tv-queue-title">TV Queue</h3><span class="tv-queue-details"></span></div><div class="watch-queue-control-bar control-bar-button"><div class="watch-queue-mole-info"><div class="watch-queue-control-bar-icon"><span class="watch-queue-icon yt-sprite"></span></div><div class="watch-queue-title-container"><span class="watch-queue-count"></span><span class="watch-queue-title">Watch Queue</span><span class="tv-queue-title">TV Queue</span></div></div>  <span class="dark-overflow-action-menu">
    
    
    <button aria-expanded="false" type="button" aria-label="Actions for the queue" aria-haspopup="true" onclick=";return false;" class="flip control-bar-button yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu" role="menu" aria-haspopup="true" style="display: none;"><li role="menuitem"><span class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;" data-action="remove-all">Remove all</span></li><li role="menuitem"><span class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;" data-action="disconnect">Disconnect</span></li></ul></button>
  </span>
  <div class="watch-queue-controls">
    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button prev-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Previous video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-prev yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button play-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Play"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-play yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button pause-watch-queue-button yt-uix-button-opacity yt-uix-tooltip hid yt-uix-tooltip" type="button" onclick=";return false;" title="Pause"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-pause yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button next-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Next video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-next yt-sprite"></span></span></button>
  </div>
</div></div><div class="watch-queue-items-container yt-scrollbar-dark yt-scrollbar"><ol class="watch-queue-items-list playlist-videos-list yt-uix-scroller" data-scroll-action="yt.www.watchqueue.loadThumbnails">  
  <p class="yt-spinner ">
        
  <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>
</ol></div></div>  <div class="hid">
    <div id="watch-queue-title-msg">
Watch Queue
    </div>

    <div id="tv-queue-title-msg">
TV Queue
    </div>

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
  </div>

  <div class="clear"></div>
</div>
<div id="content" class="  content-alignment  
">  



  
</div></div></div></div>  <div id="footer-container" class="yt-base-gutter"><div id="footer"><div id="footer-main"><div id="footer-logo"><a href="/web/20150208000231/https://www.youtube.com/" title="YouTube home"><span class="footer-logo-icon yt-sprite"></span></a></div>  <ul class="pickers yt-uix-button-group" data-button-toggle-group="optional">
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon" type="button" onclick=";return false;" id="yt-picker-language-button" data-picker-key="language" data-picker-position="footer" data-button-action="yt.www.picker.load" data-button-menu-id="arrow-display" data-button-toggle="true"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-footer-language yt-sprite"></span></span><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Language:
  </span>
  English
 </span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="yt-picker-country-button" data-picker-key="country" data-picker-position="footer" data-button-action="yt.www.picker.load" data-button-menu-id="arrow-display" data-button-toggle="true"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Country:
  </span>
  Worldwide
 </span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="yt-picker-safetymode-button" data-picker-key="safetymode" data-picker-position="footer" data-button-action="yt.www.picker.load" data-button-menu-id="arrow-display" data-button-toggle="true"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Safety:
  </span>
Off
 </span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
  </ul>
<a href="/web/20150208000231/https://www.youtube.com/feed/history" class="yt-uix-button  footer-history yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon" data-sessionlink="ei=l6fWVJzlLrKy-AOy3oCwAw"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-footer-history yt-sprite"></span></span><span class="yt-uix-button-content">History </span></a>      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon yt-uix-button-reverse yt-google-help-link inq-no-click " type="button" onclick=";return false;" data-ghelp-tracking-param="" id="google-help" data-ghelp-anchor="google-help"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-questionmark yt-sprite"></span></span><span class="yt-uix-button-content">Help
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

</div><div id="footer-links"><ul id="footer-links-primary">  <li><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/yt/about/">About</a></li>
  <li><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/yt/press/">Press &amp; Blogs</a></li>
  <li><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/yt/copyright/">Copyright</a></li>
  <li><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/yt/creators/">Creators &amp; Partners</a></li>
  <li><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/yt/advertise/">Advertising</a></li>
  <li><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/yt/dev/">Developers</a></li>
  <li><a href="http://web.archive.org/web/20150208000231/https://plus.google.com/+youtube" dir="ltr">+YouTube</a></li>
</ul><ul id="footer-links-secondary">  <li><a href="/web/20150208000231/https://www.youtube.com/t/terms">Terms</a></li>
  <li><a href="http://web.archive.org/web/20150208000231/https://www.google.com/intl/en/policies/privacy/">Privacy</a></li>
  <li><a href="//web.archive.org/web/20150208000231/https://www.youtube.com/yt/policyandsafety/">
Policy &amp; Safety
  </a></li>
  <li><a href="//web.archive.org/web/20150208000231/https://support.google.com/youtube/?hl=en" onclick="return yt.www.feedback.start(59);" class="reportbug">Send feedback</a></li>
  <li><a href="/web/20150208000231/https://www.youtube.com/testtube">Try something new!</a></li>
  <li></li>
</ul></div></div></div>
<div id="a11y-announcements"></div>

      <div class="yt-dialog hid " role="dialog" id="feed-privacy-lb">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg">
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
      </div>
    </div>
  </div>


<div id="hidden-component-template-wrapper" class="hid">    <div id="shared-addto-watch-later-login" class="hid">
      <a href="http://web.archive.org/web/20150208000231/https://accounts.google.com/ServiceLogin?passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Ffeature%3Dplaylist%26app%3Ddesktop%26hl%3Den%26next%3D%252Ffeed%252Fhistory%26action_handle_signin%3Dtrue&amp;hl=en&amp;uilel=3&amp;service=youtube" class="sign-in-link">Sign in</a> to add this to Watch Later

    </div>
  <div id="yt-uix-videoactionmenu-menu" class="yt-ui-menu-content">
      <div class="hide-on-create-pl-panel">
    <h3>
Add to
    </h3>
  </div>
  <div class="add-to-widget">
  </div>

  </div>
</div>    <script>var ytspf = ytspf || {};ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 20;ytspf.config['navigate-lifetime'] = 64800000;</script>
  <script src="//web.archive.org/web/20150208000231js_/https://s.ytimg.com/yts/jsbin/spf-vfluL08Un/spf.js" type="text/javascript" name="spf/spf"></script>
  <script src="//web.archive.org/web/20150208000231js_/https://s.ytimg.com/yts/jsbin/www-en_US-vfltSsT4f/base.js" name="www/base"></script>
<script>spf.script.path({'www/': '//web.archive.org/web/20150208000231/https://s.ytimg.com/yts/jsbin/www-en_US-vfltSsT4f/'});var ytdepmap = {"www/base": null, "www/common": "www/base", "www/ytstyles": "www/common", "www/ypc_core": "www/common", "www/ypc_bootstrap": "www/common", "www/watch": "www/common", "www/videomanager": "www/common", "www/subscriptionmanager": "www/common", "www/results_starwars": "www/common", "www/results_star_trek": "www/common", "www/results": "www/common", "www/results_harlemshake": "www/common", "www/promo_join_network": "www/common", "www/live_dashboard": "www/common", "www/live_chat_moderation": "www/common", "www/live_chat": "www/common", "www/legomap": "www/common", "www/instant": "www/common", "www/innertube": "www/common", "www/feed": "www/common", "www/experiments": "www/common", "www/downloadreports": "www/common", "www/dashboard": "www/common", "www/channels": "www/common", "www/channels_accountupload": "www/common", "www/watch_videoshelf": "www/watch", "www/watch_transcript": "www/watch", "www/watch_speedyg": "www/watch", "www/watch_promos": "www/watch", "www/watch_live": "www/watch", "www/watch_editor": "www/watch", "www/watch_edit": "www/watch", "www/watch_autoplayrenderer": "www/watch", "www/vm_coverrevshare": "www/videomanager", "www/my_videos": "www/videomanager", "www/innertube_watchnext": "www/innertube", "www/ct_advancedsearch": "www/videomanager", "www/channels_edit": "www/channels"};spf.script.declare(ytdepmap);</script><script>if (window.ytcsi) {window.ytcsi.tick("je", null, '');}</script>  

  <script>
      yt.setConfig('JS_PAGE_MODULES', ["www\/feed","www\/ypc_bootstrap"]);




  yt.setConfig('CHANNEL_ID', null);

  yt.setConfig('DISMISS_THROUGH_IT', true);

      yt.setConfig({
        'GUIDE_SELECTED_ITEM': "0qDduQELEglGRWhpc3Rvcnk%3D"
      });

      yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });

  </script>
<script>yt.setConfig({'EVENT_ID': "l6fWVJzlLrKy-AOy3oCwAw",'PAGE_NAME': "feed",'LOGGED_IN': false,'SESSION_INDEX': null,'FORMATS_FILE_SIZE_JS': ["%s B","%s KB","%s MB","%s GB","%s TB"],'DELEGATED_SESSION_ID': null,'GAPI_HOST': "http:\/\/web.archive.org\/web\/20150208000231\/https:\/\/apis.google.com",'GAPI_HINT_PARAMS': "m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.V4LcX4GIySc.O\/m=__features__\/am=AAI\/rt=j\/d=1\/rs=AItRSTMeAjKAPwkFy_1E-NAjuYKuxXbXEw",'GAPI_LOCALE': "en_US",'ONE_PICK_URL': "",'UNIVERSAL_HOVERCARDS': true,'VISITOR_DATA': "Cgt0MFdtTkZzSXUwZw%3D%3D",'APIARY_HOST': "",'APIARY_HOST_FIRSTPARTY': "",'INNERTUBE_CONTEXT_HL': "en",'INNERTUBE_CONTEXT_GL': "US",'INNERTUBE_CONTEXT_CLIENT_VERSION': "20150204",'INNERTUBE_API_KEY': "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",'INNERTUBE_API_VERSION': "v1",'GOOGLEPLUS_HOST': "http:\/\/web.archive.org\/web\/20150208000231\/https:\/\/plus.google.com",'PAGEFRAME_JS': "\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/jsbin\/www-pageframe-vflFatt4w\/www-pageframe.js",'JS_COMMON_MODULE': "\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/jsbin\/www-en_US-vfltSsT4f\/common.js",'PAGE_FRAME_DELAYLOADED_CSS': "\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/cssbin\/www-pageframedelayloaded-vflC1H8EU.css",'GUIDED_HELP_PARAMS': {"context":"yt_web_history"},'PREFETCH_CSS_RESOURCES' : ["\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/cssbin\/www-player-vflFJVssC.css",''         ],'PREFETCH_JS_RESOURCES': [''         ],'PREFETCH_LINKS': false,'PREFETCH_LINKS_MAX': 1,'PREFETCH_AUTOPLAY': false,'PREFETCH_AUTOPLAY_TIME': 0,'PREFETCH_AUTONAV': false,'PREBUFFER_MAX': 1,'PREBUFFER_LINKS': false,'PREBUFFER_AUTOPLAY': false,'PREBUFFER_AUTONAV': false,'SAFETY_MODE_PENDING': false,'LOCAL_DATE_TIME_CONFIG': {"amPms":["AM","PM"],"shortWeekdays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"firstWeekCutoffDay":3,"formatLongDateOnly":"MMMM d, yyyy","dateFormats":["MMMM d, yyyy h:mm a","MMMM d, yyyy","MMM d, yyyy","MMM d, yyyy"],"weekendRange":[6,5],"shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"formatShortTime":"h:mm a","formatWeekdayShortTime":"EE h:mm a","weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"firstDayOfWeek":0,"formatShortDate":"MMM d, yyyy","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"formatLongDate":"MMMM d, yyyy h:mm a"},'PAGE_CL': 85642102,'PAGE_BUILD_TIMESTAMP': "Thu Feb  5 11:45:08 2015 (1423165508)",'VARIANTS_CHECKSUM': "c114f3e0f60917aea55061e54c2cd949",'CLIENT_PROTOCOL': "HTTP\/1.1",'CLIENT_TRANSPORT': "tcp",'MDX_ENABLE_CASTV2': true,'MDX_ENABLE_QUEUE': true,'FEEDBACK_BUCKET_ID': "Other",'FEEDBACK_LOCALE_LANGUAGE': "en",'FEEDBACK_LOCALE_EXTRAS': {"experiments":"901217,902408,906211,906213,907263,909724,911507,911511,912334,912719,912725,912811,912813,912817,913597,916928,916929,918119,918121,921603,922325,922804,922809,922810,922812,922817,922930,923024,923363,923456,923459,923703,924237,925019,927006,927622,927626,929154,929820,929940,929943,929947,929949,930676,930812,930819,930823,931366,931943,931990,931991,932120,932322,933228,934042,934047,935207,935707,936117,936211,937235,937422,937506,937507,937817,937818,937832,937834,937912,938302,938639,938646,938654,938683,938703,938705,939987,939992,9405143,9405788,9406013,9406068,9406269,940641,9406560,9406626,9406819,940918,940928,940936,940938,941443,941473,941489,941709,942302,942606,942705,942814,943301,943407,943416,943917,944464,944702,945128,945130,945131,945401,945909,946803,946805,947225,947231,947239,947404,947503,948124,948809,948810,949001,949004,949012,949601,949704,949906,950303,950501,951301,951601,952302,952503,952505,952605,952612,952901,953003,953202,955107,955301,955801,957201,958103,958901,958904,959203,959701,960401,960501,960603,960611,961603,962705,962706,963700","guide_subs":"NA","is_partner":"","is_branded":"","logged_in":false,"accept_language":null}});window.ytplayer = window.ytplayer || {};ytplayer.REFACTOR = true;  yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });
yt.setConfig('SPF_SEARCH_BOX', true);yt.setMsg({'ADDTO_CREATE_NEW_PLAYLIST': "Create new playlist\n",'ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE': "  $dynamic_title_placeholder (create new)\n",'ADDTO_WATCH_LATER': "Watch Later",'ADDTO_WATCH_LATER_ADDED': "Added",'ADDTO_WATCH_LATER_ERROR': "Error",'ADDTO_WATCH_QUEUE': "Watch Queue",'ADDTO_WATCH_QUEUE_ADDED': "Added",'ADDTO_WATCH_QUEUE_ERROR': "Error",'ADDTO_TV_QUEUE': "TV Queue",'MASTHEAD_NOTIFICATIONS_LABEL': {"case0": "0 unread notifications.", "case1": "1 unread notification.", "other": "# unread notifications."}});    yt.setConfig({
    'XSRF_TOKEN': "QUFFLUhqa05WQi1GMkhxV3JPenI3VWw5U19hNXdlVVY0QXxBQ3Jtc0trRWlZeXJGNXdNTHBhZEdOS2FFOExYc1hvMks1TXRFTWx2MVMyQ0tPNHFYSzNPYnVjUHdERk0zOVFjNlJ5UjkzRWRPTzc2bFBmZVloMTVfTFhCV0FsSGZCQnRSenFKWFk0aGVZLWZnVTgyTU9jSVQ1ai12R2lvakNKaFRJcUlldXcxcDBrZjZmYVdwRlFZT1I4UEFTSUZlQkJGMVE=",
    'XSRF_REDIRECT_TOKEN': "5yyKSawY-c-C-UDsyCV2I7jLlTB8MTQyMzQ0MDE1MUAxNDIzMzUzNzUx",
    'XSRF_FIELD_NAME': "session_token"
  });

  yt.setConfig('FEED_PRIVACY_CSS_URL', "\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/cssbin\/www-feedprivacydialog-vfliK0brB.css");

  yt.setConfig('FEED_PRIVACY_LIGHTBOX_ENABLED', true);
yt.setConfig({'SBOX_JS_URL': "\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/jsbin\/www-searchbox-vflcBGQRQ\/www-searchbox.js",'SBOX_SETTINGS': {"EXPERIMENT_STR":"ekp,kfds=yt","EXPERIMENT_ID":-1,"REQUEST_LANGUAGE":"en","HAS_ON_SCREEN_KEYBOARD":false,"SESSION_INDEX":null,"PSUGGEST_TOKEN":null,"REQUEST_DOMAIN":"us","PQ":""},'SBOX_LABELS': {"SUGGESTION_DISMISS_LABEL":"Dismiss","SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed"}});  yt.setConfig({
    'YPC_LOADER_JS': "\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/jsbin\/www-ypc-vflZ0ReZG\/www-ypc.js",
    'YPC_LOADER_CSS': "\/\/web.archive.org\/web\/20150208000231\/https:\/\/s.ytimg.com\/yts\/cssbin\/www-ypc-vflOuIes0.css",
    'YPC_SIGNIN_URL': "http:\/\/web.archive.org\/web\/20150208000231\/https:\/\/accounts.google.com\/ServiceLogin?passive=true\u0026continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Fapp%3Ddesktop%26hl%3Den%26next%3D%252F%26action_handle_signin%3Dtrue\u0026hl=en\u0026uilel=3\u0026service=youtube",
    'DBLCLK_ADVERTISER_ID': "2542116",
    'DBLCLK_YPC_ACTIVITY_GROUP': "youtu444",
    'SUBSCRIPTION_URL': "\/subscription_ajax",
    'YPC_SWITCH_URL': "\/signin?feature=purchases\u0026next=%2F\u0026action_handle_signin=true\u0026skip_identity_prompt=True",
    'YPC_GB_LANGUAGE': "en_US",
    'YPC_GB_URL': "http:\/\/web.archive.org\/web\/20150208000231\/https:\/\/checkout.google.com\/inapp\/lib\/buy.js",
    'YPC_TRANSACTION_URL': "\/transaction_handler",
    'YPC_SUBSCRIPTION_URL': "\/ypc_subscription_ajax",
    'YPC_POST_PURCHASE_URL': "\/ypc_post_purchase_ajax"
  });
  yt.setMsg({
    'YPC_OFFER_OVERLAY': "    \u003cdiv id=\"ypc-offer-overlay\" class=\"yt-uix-overlay\" data-disable-shortcuts=\"true\"\u003e\n    \u003cspan class=\"yt-uix-overlay-target\"\u003e\u003c\/span\u003e\n        \u003cdiv class=\"yt-dialog hid \" role=\"dialog\"\u003e\n    \u003cdiv class=\"yt-dialog-base\"\u003e\n      \u003cspan class=\"yt-dialog-align\"\u003e\u003c\/span\u003e\n      \u003cdiv class=\"yt-dialog-fg\"\u003e\n        \u003cdiv class=\"yt-dialog-fg-content\"\u003e\n          \u003cdiv class=\"yt-dialog-loading\"\u003e\n              \u003cdiv class=\"yt-dialog-waiting-content\"\u003e\n      \n  \u003cp class=\"yt-spinner \"\u003e\n        \n  \u003cspan class=\"yt-spinner-img  yt-sprite\" title=\"Loading icon\"\u003e\u003c\/span\u003e\n\n    \u003cspan class=\"yt-spinner-message\"\u003e\nLoading...\n    \u003c\/span\u003e\n  \u003c\/p\u003e\n\n  \u003c\/div\u003e\n\n          \u003c\/div\u003e\n          \u003cdiv class=\"yt-dialog-content\"\u003e\n            \u003cdiv class= \"ypc-offer-overlay-container\"\u003e\u003ca href=\"#\" class=\"ypc-offer-overlay-close\"\u003e\u003c\/a\u003e\u003cdiv class=\"ypc-offer-overlay-content-wrapper clearfix\"\u003e\u003c\/div\u003e\u003cdiv class=\"ypc-offer-overlay-loading\"\u003e  \n  \u003cspan class=\"yt-large-spinner-img yt-sprite\" title=\"Loading icon\"\u003e\u003c\/span\u003e\n\u003c\/div\u003e\u003cdiv class=\"ypc-offer-overlay-error\"\u003e\u003ch3\u003eError\u003c\/h3\u003e\u003cp class=\"ypc-offer-overlay-error-generic-content\"\u003eAn error occurred. Please try again later.\u003c\/p\u003e\u003cp class=\"ypc-offer-overlay-error-custom-content\"\u003e\u003c\/p\u003e\u003c\/div\u003e\u003cdiv class=\"ypc-offer-overlay-not-available-error\"\u003e\u003ch3 class=\"ypc-offer-overlay-not-available-title\"\u003ePurchases are not available\u003c\/h3\u003e\u003cp class=\"ypc-offer-overlay-not-available-content\"\u003e\u003c\/p\u003e  \u003cdiv class=\"ypc-offer-overlay-not-available-action yt-uix-overlay-actions\"\u003e\n    \u003cbutton class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-overlay-close\" type=\"button\" onclick=\";return false;\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eCancel \u003c\/span\u003e\u003c\/button\u003e\n    \u003ca href=\"\" class=\"yt-uix-button  ypc-offer-overlay-switch-accounts-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default\" data-sessionlink=\"ei=l6fWVJzlLrKy-AOy3oCwAw\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eSwitch accounts \u003c\/span\u003e\u003c\/a\u003e\n  \u003c\/div\u003e\n\u003c\/div\u003e\u003cdiv class=\"ypc-offer-overlay-tip-not-available-error\"\u003e\u003ch3 class=\"ypc-offer-overlay-not-available-title\"\u003eTipping is not available\u003c\/h3\u003e\u003cp class=\"ypc-offer-overlay-tip-not-available-content\"\u003e\u003c\/p\u003e  \u003cdiv class=\"ypc-offer-overlay-not-available-action yt-uix-overlay-actions\"\u003e\n    \u003cbutton class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-overlay-close\" type=\"button\" onclick=\";return false;\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eCancel \u003c\/span\u003e\u003c\/button\u003e\n    \u003ca href=\"\" class=\"yt-uix-button  ypc-offer-overlay-switch-accounts-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default\" data-sessionlink=\"ei=l6fWVJzlLrKy-AOy3oCwAw\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eSwitch accounts \u003c\/span\u003e\u003c\/a\u003e\n  \u003c\/div\u003e\n\u003c\/div\u003e\u003cdiv class=\"ypc-offer-plus-page-not-available-error\"\u003e\u003ch3 class=\"ypc-offer-overlay-not-available-title\"\u003ePurchases are not available\u003c\/h3\u003e\u003cp class=\"ypc-offer-plus-page-not-available-content\"\u003e\u003c\/p\u003e\u003cdiv class=\"ypc-offer-overlay-not-available-action yt-uix-overlay-actions\"\u003e\u003cbutton class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-primary yt-uix-overlay-close\" type=\"button\" onclick=\";return false;\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eClose \u003c\/span\u003e\u003c\/button\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\n          \u003c\/div\u003e\n          \u003cdiv class=\"yt-dialog-working\"\u003e\n              \u003cdiv class=\"yt-dialog-working-overlay\"\u003e\u003c\/div\u003e\n  \u003cdiv class=\"yt-dialog-working-bubble\"\u003e\n    \u003cdiv class=\"yt-dialog-waiting-content\"\u003e\n        \n  \u003cp class=\"yt-spinner \"\u003e\n        \n  \u003cspan class=\"yt-spinner-img  yt-sprite\" title=\"Loading icon\"\u003e\u003c\/span\u003e\n\n    \u003cspan class=\"yt-spinner-message\"\u003e\n        Working...\n    \u003c\/span\u003e\n  \u003c\/p\u003e\n\n      \u003c\/div\u003e\n  \u003c\/div\u003e\n\n          \u003c\/div\u003e\n        \u003c\/div\u003e\n      \u003c\/div\u003e\n    \u003c\/div\u003e\n  \u003c\/div\u003e\n\n\n  \u003c\/div\u003e\n\n",
    'YPC_UNSUBSCRIBE_OVERLAY': "    \u003cdiv id=\"ypc-unsubscribe-overlay\" class=\"yt-uix-overlay\" data-disable-shortcuts=\"true\"\u003e\n    \u003cspan class=\"yt-uix-overlay-target\"\u003e\u003c\/span\u003e\n        \u003cdiv class=\"yt-dialog hid \" role=\"dialog\"\u003e\n    \u003cdiv class=\"yt-dialog-base\"\u003e\n      \u003cspan class=\"yt-dialog-align\"\u003e\u003c\/span\u003e\n      \u003cdiv class=\"yt-dialog-fg\"\u003e\n        \u003cdiv class=\"yt-dialog-fg-content\"\u003e\n          \u003cdiv class=\"yt-dialog-loading\"\u003e\n              \u003cdiv class=\"yt-dialog-waiting-content\"\u003e\n      \n  \u003cp class=\"yt-spinner \"\u003e\n        \n  \u003cspan class=\"yt-spinner-img  yt-sprite\" title=\"Loading icon\"\u003e\u003c\/span\u003e\n\n    \u003cspan class=\"yt-spinner-message\"\u003e\nLoading...\n    \u003c\/span\u003e\n  \u003c\/p\u003e\n\n  \u003c\/div\u003e\n\n          \u003c\/div\u003e\n          \u003cdiv class=\"yt-dialog-content\"\u003e\n              \u003cdiv class=\"ypc-unsubscribe-overlay\"\u003e\n      \u003cdiv class=\"ypc-unsubscribe-overlay-title unsubscribe-confirm\"\u003e\nAre you sure you want to unsubscribe?\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-title unsubscribe-xauth\"\u003e\nUnable to unsubscribe\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-title unsubscribe-plus-page-error\"\u003e\nUnable to unsubscribe\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-title unsubscribe-loading\"\u003e\nLoading...\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-title unsubscribe-success unsubscribe-delayed\"\u003e\nSubscription canceled\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-title unsubscribe-error\"\u003e\nError canceling subscription.\n  \u003c\/div\u003e\n\n    \u003cdiv class=\"ypc-unsubscribe-overlay-data\"\u003e\n        \u003cdiv class=\"ypc-unsubscribe-overlay-content unsubscribe-confirm ypc-unsubscribe-overlay-confirm-content\"\u003e\n    \u003cdiv class=\"ypc-unsubscribe-overlay-content-message\"\u003e\n      Your subscription will be canceled when you unsubscribe. Your credit card will no longer be charged. You will still be able to access content until the billing cycle ends.\n\n    \u003c\/div\u003e\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-content unsubscribe-xauth\"\u003e\n    \u003cp\u003e\nYouTube Music Key is included free with Google Play Music All Access. To cancel, please visit the \u003ca href=\"https:\/\/play.google.com\/music\/listen#\/settings\" target=\"_blank\"\u003eSettings\u003c\/a\u003e page in All Access.\n    \u003c\/p\u003e\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-content unsubscribe-plus-page-error\"\u003e\n    \u003cp\u003e\nYou are currently logged in as a manager of , but you must be the owner to cancel the channel's subscriptions on YouTube.\n    \u003c\/p\u003e\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-content unsubscribe-loading\"\u003e\n      \n  \u003cp class=\"yt-spinner \"\u003e\n        \n  \u003cspan class=\"yt-spinner-img  yt-sprite\" title=\"Loading icon\"\u003e\u003c\/span\u003e\n\n    \u003cspan class=\"yt-spinner-message\"\u003e\n        Processing cancellation request...\n    \u003c\/span\u003e\n  \u003c\/p\u003e\n\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-content unsubscribe-success\"\u003e\n    \u003cp\u003e\nYou have successfully canceled future payments for this subscription.\n    \u003c\/p\u003e\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-content unsubscribe-delayed\"\u003e\n    \u003cp\u003e\nYour subscription was canceled. The status displayed in your account will update soon.\n    \u003c\/p\u003e\n  \u003c\/div\u003e\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-content unsubscribe-error\"\u003e\n    \u003cp\u003eSorry, there was an error trying to cancel your subscription; please try again later.\u003c\/p\u003e\n  \u003c\/div\u003e\n\n          \u003cdiv class=\"ypc-unsubscribe-overlay-controls unsubscribe-confirm clearfix\"\u003e\n    \u003ca href=\"\/\/support.google.com\/youtube\/?p=unsubscribe_help\u0026amp;hl=en\" class=\"yt-uix-button  ypc-unsubscribe-help yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default\" data-sessionlink=\"ei=l6fWVJzlLrKy-AOy3oCwAw\" target=\"_blank\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eHelp \u003c\/span\u003e\u003c\/a\u003e\n\n    \u003cbutton class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-overlay-close\" type=\"button\" onclick=\";return false;\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eKeep subscription \u003c\/span\u003e\u003c\/button\u003e\n\n    \u003cbutton class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-primary ypc-unsubscribe-confirm\" type=\"button\" onclick=\";return false;\" data-url=\"\/transaction_handler\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eUnsubscribe \u003c\/span\u003e\u003c\/button\u003e\n  \u003c\/div\u003e\n\n\n  \u003cdiv class=\"ypc-unsubscribe-overlay-controls unsubscribe-success unsubscribe-xauth unsubscribe-plus-page-error unsubscribe-delayed unsubscribe-error\"\u003e\n    \u003cbutton class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-primary yt-uix-overlay-close\" type=\"button\" onclick=\";return false;\"\u003e\u003cspan class=\"yt-uix-button-content\"\u003eClose \u003c\/span\u003e\u003c\/button\u003e\n  \u003c\/div\u003e\n\n    \u003c\/div\u003e\n  \u003c\/div\u003e\n\n          \u003c\/div\u003e\n          \u003cdiv class=\"yt-dialog-working\"\u003e\n              \u003cdiv class=\"yt-dialog-working-overlay\"\u003e\u003c\/div\u003e\n  \u003cdiv class=\"yt-dialog-working-bubble\"\u003e\n    \u003cdiv class=\"yt-dialog-waiting-content\"\u003e\n        \n  \u003cp class=\"yt-spinner \"\u003e\n        \n  \u003cspan class=\"yt-spinner-img  yt-sprite\" title=\"Loading icon\"\u003e\u003c\/span\u003e\n\n    \u003cspan class=\"yt-spinner-message\"\u003e\n        Working...\n    \u003c\/span\u003e\n  \u003c\/p\u003e\n\n      \u003c\/div\u003e\n  \u003c\/div\u003e\n\n          \u003c\/div\u003e\n        \u003c\/div\u003e\n      \u003c\/div\u003e\n    \u003c\/div\u003e\n  \u003c\/div\u003e\n\n\n  \u003c\/div\u003e\n\n"
  });
  yt.setConfig('GOOGLE_HELP_CONTEXT', "default");
ytcsi.setSpan('st', 26);yt.setConfig({'TIMING_ACTION': "",'TIMING_INFO': {"yt_ref":"user","yt_li":0,"yt_spf":0,"e":"907263,912334,927622,930676,931366,936117,937235,9406013,9406269,9406626,9406819,943917,947225,948124,952302,952605,952612,952901,955301,957201,959701,960603,963700","ei":"l6fWVJzlLrKy-AOy3oCwAw","yt_lt":"cold"}});  yt.setConfig({
    'XSRF_TOKEN': "QUFFLUhqa05WQi1GMkhxV3JPenI3VWw5U19hNXdlVVY0QXxBQ3Jtc0trRWlZeXJGNXdNTHBhZEdOS2FFOExYc1hvMks1TXRFTWx2MVMyQ0tPNHFYSzNPYnVjUHdERk0zOVFjNlJ5UjkzRWRPTzc2bFBmZVloMTVfTFhCV0FsSGZCQnRSenFKWFk0aGVZLWZnVTgyTU9jSVQ1ai12R2lvakNKaFRJcUlldXcxcDBrZjZmYVdwRlFZT1I4UEFTSUZlQkJGMVE=",
    'XSRF_REDIRECT_TOKEN': "5yyKSawY-c-C-UDsyCV2I7jLlTB8MTQyMzQ0MDE1MUAxNDIzMzUzNzUx",
    'XSRF_FIELD_NAME': "session_token"
  });
  yt.setConfig('THUMB_DELAY_LOAD_BUFFER', 0);
if (window.ytcsi) {window.ytcsi.tick("jl", null, '');}</script>
<!-- Smart JS Insertion -->



</body></html>` ];
	const htmlRoot = document.evaluate('/html', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	document.querySelector('html').innerHTML = pages[0];
	document.querySelector('html').setAttribute("class", "guide-pinned show-guide content-snap-width-3");
	// correct CSS
	var ext = browser.i18n.getMessage("@@extension_id")
	document.head.innerHTML = document.head.innerHTML.replace(/__MSG_@@extension_id__/g, ext)
	// correct GuideButton
	document.getElementById("appbar-guide-button").onclick = function() {
	if ((document.querySelector('html').getAttribute("class").search("show-guide")) > -1) { 
		document.querySelector('html').setAttribute("class", (document.querySelector('html').getAttribute("class").replace("show-guide", ""))); 
	} else { 
		document.querySelector('html').setAttribute("class", (document.querySelector('html').getAttribute("class") + " show-guide")); 
	}
	document.getElementById("appbar-guide-button").blur();
}
	// fake progressBar
	function fakeProgressBar()
	{
		document.getElementById("a11y-announcements").outerHTML = document.getElementById("a11y-announcements").outerHTML + `<div id="progress" class="waiting" style="transition-duration: 900ms; width: 0%;"><dt></dt><dd></dd></div>`;
		window.setTimeout(fakeProgressBar2, 100)
		function fakeProgressBar2()
		{
			document.getElementById("progress").setAttribute("style", "transition-duration: 900ms; width: 100%;");
		}
		window.setTimeout(killFakePB, 910);
		function killFakePB()
		{
			document.getElementById("progress").outerHTML = "";
		}
	}
	
	function clearPageContent()
	{
		document.getElementById("content").outerHTML = `<div id="content" class="  content-alignment  "></div>`;
		//clear guide
		document.getElementById("what_to_watch-guide-item").children[0].setAttribute("class", (document.getElementById("what_to_watch-guide-item").children[0].getAttribute("class").replace("guide-item-selected", "")))
		document.getElementById("UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item").children[0].setAttribute("class", (document.getElementById("UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item").children[0].getAttribute("class").replace("guide-item-selected", "")))
	}
	
	function softloadPage(page)
	{
		fakeProgressBar();
		clearPageContent();
		// watchPage cleanup
		if (isWatchPage = 1) {
			document.querySelector('html').setAttribute("class", "guide-pinned show-guide content-snap-width-3");
			var isWatchPage = 0;
		}
		switch(page)
		{
			case "watch":
				window.history.pushState({page: "another"}, "another page", "/watch");
				loadWatchPage();
			break;
			case "home":
				window.history.pushState({page: "another"}, "another page", "/");
				loadHomePage();
			break;
			case "channel":
				window.history.pushState({page: "another"}, "another page", "/channel/UCKpVF-R8IKXP5qMzc7hefsg");
				loadChannelPage();
			break;
		}
	}
	
	// softload for spf links
	
	
	/* var spfelements = document.getElementsByClassName('spf-link');
	for(var i = 0, len = spfelements.length; i < len; i++) {
			spfelements[i].onclick = function () {
			processSpfLink(spfelements[i].href); return false;
		}
	} */
	
	function findLink(el) {
    if (el.tagName == 'A' && el.href) {
        return el.href;
    } else if (el.parentElement) {
        return findLink(el.parentElement);
    } else {
        return null;
    }
};

function callback(e) {
    const link = findLink(e.target);
    if (link == null) { return; }
    e.preventDefault();
	console.log(e);
    processSpfLink(e);
};

document.addEventListener('click', callback, false);
	
	function processSpfLink(link)
	{
		console.log(link);
		if (link = "https://www.youtube.com/"){
			softloadPage("home");
		}
		if (link = "https://www.youtube.com/channel/UCKpVF-R8IKXP5qMzc7hefsg") {
			softloadPage("channel");
		}
	}
	
	
	window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
} 
	
	document.getElementById("yt-picker-language-button").onclick = function() {
		softloadPage("watch");
	}
	document.getElementById("yt-picker-country-button").onclick = function() {
		softloadPage("home"); 
	}
	document.getElementById("yt-picker-safetymode-button").onclick = function() {
		softloadPage("channel"); 
	}
	
	let eiarcBanner = [ `<div id="content" class="  content-alignment  

">  



  <div class="branded-page-v2-container branded-page-base-bold-titles branded-page-v2-container-flex-width branded-page-v2-has-top-row branded-page-v2-secondary-column-hidden">
      <div class="branded-page-v2-top-row">
        
      </div>

    <div class="branded-page-v2-col-container">
      <div class="branded-page-v2-col-container-inner">
        <div class="branded-page-v2-primary-col">
          <div class="   yt-card  clearfix">
              <div class="branded-page-v2-body branded-page-v2-primary-column-content" id="">
          
    


  <ul id="browse-items-primary">
        
    <li id="feed-action-alerts">
      <div class="yt-alert yt-alert-default yt-alert-warn hid ajax-alert">  <div class="yt-alert-icon">
    <span class="icon master-sprite yt-sprite"></span>
  </div>
<div class="yt-alert-content" role="alert"></div><div class="yt-alert-buttons"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-close close yt-uix-close" type="button" onclick=";return false;" aria-label="Close" data-close-parent-class="yt-alert"><span class="yt-uix-button-content">Close </span></button></div></div>
    </li>

    
          <li>
          
  <p class="display-message">Test page
  </p>

      </li>

  </ul>



  </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>`	];

	// Home
	function loadHomePage() {
	if (document.location=="https://www.youtube.com/") {
		document.getElementById("content").innerHTML = eiarcBanner[0];
		document.getElementById("what_to_watch-guide-item").children[0].setAttribute("class", (document.getElementById("what_to_watch-guide-item").children[0].getAttribute("class") + " guide-item-selected"))
	}
	}
	loadHomePage();
	
	
	// InjectTemplateHtml(documentElements, new DOMParser().parseFromString(pages[0]));
	
})();