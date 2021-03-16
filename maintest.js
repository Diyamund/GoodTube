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
	
	let pages = [ `<html dir="ltr" xmlns:og="http://opengraphprotocol.org/schema/" lang="en"><!-- machid: sNW5tN3Z2SWdXaDVvZ3pQNGFMMllrNEUzOTRtSFJzbGE3STQ3LWpnRjNqREd4OGM4al8weHNR --><head><script id="scriptload-2374688467" src="http://s.ytimg.com/yt/jsbin/html5player-vflFQf0-f.js"></script><script id="scriptload-3071700232" src="//web.archive.org/web/20120502172112/http://s.ytimg.com/yt/jsbin/www-searchbox-vfliI0gmd.js" data-loaded="true"></script><script src="//archive.org/includes/analytics.js?v=cf34f82" type="text/javascript"></script>
<script type="text/javascript">window.addEventListener('DOMContentLoaded',function(){var v=archive_analytics.values;v.service='wb';v.server_name='wwwb-app101.us.archive.org';v.server_ms=989;archive_analytics.send_pageview({});});</script><script type="text/javascript" src="/_static/js/playback.bundle.js?v=bQvHU8mx" charset="utf-8"></script>
<script type="text/javascript" src="/_static/js/wombat.js?v=cRqOKCOw" charset="utf-8"></script>
<script type="text/javascript">
  __wm.init("http://web.archive.org/web");
  __wm.wombat("http://www.youtube.com/user/PewDiePie","20120502172112","http://web.archive.org/","web","/_static/",
	      "1335979272");
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

  
        <script>
var yt = yt || {};yt.timing = yt.timing || {};yt.timing.tick = function(label, opt_time) {var timer = yt.timing['timer'] || {};if(opt_time) {timer[label] = opt_time;}else {timer[label] = new Date().getTime();}yt.timing['timer'] = timer;};yt.timing.info = function(label, value) {var info_args = yt.timing['info_args'] || {};info_args[label] = value;yt.timing['info_args'] = info_args;};yt.timing.info('e', "907605,916013,907216,906507,911202,907335");yt.timing.tick('start');yt.timing.info('li','0');try {yt.timing['srt'] = window.gtbExternal && window.gtbExternal.pageT() ||window.external && window.external.pageT;} catch(e) {}if (window.chrome && window.chrome.csi) {yt.timing['srt'] = Math.floor(window.chrome.csi().pageT);}if (window.msPerformance && window.msPerformance.timing) {yt.timing['srt'] = window.msPerformance.timing.responseStart - window.msPerformance.timing.navigationStart;}    </script>


    <title>
        PewDiePie
      - YouTube
  </title>

    
  <link rel="search" type="application/opensearchdescription+xml" href="http://web.archive.org/web/20120502172112/http://www.youtube.com/opensearch?locale=en_US" title="YouTube Video Search">

  <link rel="icon" href="http://web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/favicon-refresh-vfldLzJxy.ico" type="image/x-icon">
  <link rel="shortcut icon" href="http://web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/favicon-refresh-vfldLzJxy.ico" type="image/x-icon"> 
    <link rel="canonical" href="/web/20120502172112/http://www.youtube.com/user/PewDiePie">
    <link rel="alternate" media="handheld" href="http://web.archive.org/web/20120502172112/http://m.youtube.com/profile?desktop_uri=%2Fuser%2FPewDiePie&amp;user=PewDiePie&amp;gl=US">
    <meta name="title" content="BECOME A BRO TODAY!">

    <meta name="description" content="Subscribe to become a bro!
Sick of boring lets plays? - I am your salvator! 
Join the broarmy and never be bored again!

Business contact: pewdie3@gmail.com
Unrelated emails will go unanswered, sorry :(
(I try my best answering most PMs though). :)

I'm just a guy from Sweden who plays video games. Attempting to entertain, have fun and spread them lols. Love all ma bros!

I am...
PEEEEEEEEEEEWDIE PIE

────────────────────────────">

    <meta name="keywords" content="Pewdiepie Pewdie amnesia pewdiei pewdiepie channel PewDiePie Amnesia Pewdiepies">

    <link rel="image_src" href="//web.archive.org/web/20120502172112im_/http://i2.ytimg.com/i/-lHJZR3Gqxm24_Vd_AJ5Yw/1.jpg?v=4f3cea50">
  <meta property="og:image" content="//web.archive.org/web/20120502172112im_/http://i2.ytimg.com/i/-lHJZR3Gqxm24_Vd_AJ5Yw/1.jpg?v=4f3cea50">
    <link rel="alternate" type="application/rss+xml" title="RSS" href="http://web.archive.org/web/20120502172112/http://gdata.youtube.com/feeds/base/users/PewDiePie/uploads?alt=rss&amp;v=2&amp;orderby=published&amp;client=ytapi-youtube-profile">


  

    <link id="www-core-css" rel="stylesheet" href="http://web.archive.org/web/20120502172112cs_/http://s.ytimg.com/yt/cssbin/www-core-vfl3G5ozX.css" name="www-core-css">


      <link rel="stylesheet" href="http://s.ytimg.com/yt/cssbin/www-the-rest-vflNb6rAI.css" name="www-the-rest">




      <link rel="stylesheet" href="http://s.ytimg.com/yt/cssbin/www-channels3-vflRaPQeN.css" name="www-channels3">

    <link rel="stylesheet" href="http://s.ytimg.com/yt/cssbin/www-guide-vflAzvOxi.css" name="www-guide">

  <style>
    #branded-page-body-container {
      background-color: #FFFFFF;
      background-image: url(http://web.archive.org/web/20120502172112im_/http://i2.ytimg.com/u/-lHJZR3Gqxm24_Vd_AJ5Yw/channels3_background.jpg?v=4f948f16);
      background-repeat: no-repeat;
      background-position: center top;
  }

  </style>


        <script>
      if (window.yt.timing) {
        yt.timing.tick("ct");
      }
    </script>


<script type="text/javascript" src="http://web.archive.org/web/20120502172558/http://www.google.com/uds/api/ads/1.0/952003f1bf6218677978f83dd2149ac8/content.I.js"></script><style type="text/css">.gssb_c{border:0;position:absolute;z-index:989}.gssb_e{border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,0.2);cursor:default}.gssb_f{visibility:hidden;white-space:nowrap}.gssb_k{border:0;display:block;position:absolute;top:0;z-index:988}.gsib_a{width:100%;padding:4px 6px 0}.gsib_a,.gsib_b{vertical-align:top}.gssb_a{padding:0 7px}.gssb_a,.gssb_a td{white-space:nowrap;overflow:hidden;line-height:22px}#gssb_b{font-size:11px;color:#36c;text-decoration:none}#gssb_b:hover{font-size:11px;color:#36c;text-decoration:underline}.gssb_m{color:#000;background:#fff}.gssb_g{text-align:center;padding:8px 0 7px;position:relative}.gssb_h{font-size:15px;height:28px;margin:0.2em}.gssb_i{background:#eee}.gss_ifl{visibility:hidden;padding-left:5px}.gssb_i .gss_ifl{visibility:visible}a.gssb_j{font-size:13px;color:#36c;text-decoration:none;line-height:100%}a.gssb_j:hover{text-decoration:underline}.gssb_l{height:1px;background-color:#e5e5e5}a.gspqs_a{padding:0 3px 0 8px}.gspqs_b{color:#666;line-height:22px}.gsq_a{padding:0}.gspr_a{padding-right:1px}.gsfe_a{border:1px solid #b9b9b9;border-top-color:#a0a0a0;box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);-moz-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);-webkit-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1);}.gsfe_b{border:1px solid #4d90fe;outline:none;box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);-moz-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);-webkit-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);}.gsok_a{background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;cursor:pointer;display:inline-block;height:11px;line-height:0;margin:0 3px;width:19px}.gsst_a,.gsst_d{display:inline-block}.gsst_a{padding:0 1px}.gsst_a:hover{text-decoration:none!important}.gsst_b{font-size:16px;padding:0 3px;user-select:none;-moz-user-select:none;white-space:nowrap}.gsst_d{width:3px}.gsst_e{opacity:0.55;}.gsst_a:hover .gsst_e{opacity:0.72;}.gsst_a:active .gsst_e{opacity:1;}.gsfi{font-size:13px}.gsfs{font-size:13px}a.gssb_j{font-size:12px;color:#03c}.gssb_a,.gssb_a td{line-height:17px}.gssb_a{padding:0 5px}.gssb_c{z-index:3000001}.gssb_i td{background:#eee}.gssb_k{z-index:3000000}.gsfe_b{border:1px solid #1c62b9;box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);-moz-box-shadow:inset 0px 1px 2px rgba(0,0,0,0.3);outline:none;}</style></head>
  <body id="" class="date-20120502 en_US ltr  " dir="ltr">

  <form name="logoutForm" method="POST" action="/web/20120502172112/http://www.youtube.com/">
    <input type="hidden" name="action_logout" value="1">
  <input name="session_token" type="hidden" value="BHMRquYjObQV2iVyJFJTcwxBJRN8MTMzNjA2NTY3MkAxMzM1OTc5Mjcy"></form>
  <!-- begin page -->
  <div id="page" class="  branded-page channel ">
      
  <div id="masthead-container">
    <!-- begin masthead -->
      <div id="masthead" class="" dir="ltr">
          <a id="logo-container" href="/web/20120502172112/http://www.youtube.com/" title="YouTube home">
    <img id="logo" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="YouTube home">
  </a>


    <div id="masthead-user-bar-container">
      <div id="masthead-user-bar">
        <div id="masthead-user">
          <div id="masthead-user-display"><a class="start" href="/web/20120502172112/http://www.youtube.com/signup?feature=header&amp;next=%2Fuser%2FPewDiePie">Create Account</a><span class="masthead-link-separator">|</span><a class="end" href="http://web.archive.org/web/20120502172112/https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3Dheader%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fuser%252FPewDiePie&amp;hl=en_US&amp;ltmpl=sso">Sign In</a></div>
        </div>
      </div>
    </div>
    <div id="masthead-search-bar-container">
      <div id="masthead-search-bar">
<div id="masthead-nav"><a href="/web/20120502172112/http://www.youtube.com/videos?feature=mh">Browse</a><span class="masthead-link-separator">|</span><a href="/web/20120502172112/http://www.youtube.com/movies?feature=mh">Movies</a>                <span class="masthead-link-separator">|</span><a id="masthead-upload-link" href="//web.archive.org/web/20120502172112/http://www.youtube.com/my_videos_upload">Upload</a></div>        


  <form id="masthead-search" class="search-form consolidated-form" action="/web/20120502172112/http://www.youtube.com/results" onsubmit="if (_gel('masthead-search-term').value == '') return false;">
<button class="search-btn-compontent search-button yt-uix-button yt-uix-button-default" onclick="if (_gel('masthead-search-term').value == '') return false; _gel('masthead-search').submit(); return false;;return true;" type="submit" id="search-btn" dir="ltr" tabindex="2" role="button"><span class="yt-uix-button-content">Search </span></button><div id="masthead-search-terms" class="masthead-search-terms-border " dir="ltr"><label><input id="masthead-search-term" autocomplete="off" class="search-term" name="search_query" value="" type="text" tabindex="1" onkeyup="goog.i18n.bidi.setDirAttribute(event,this)" title="Search" dir="ltr" spellcheck="false" style="outline: currentcolor none medium;"></label></div>  <input type="hidden" name="oq"><input type="hidden" name="aq"><input type="hidden" name="aqi"><input type="hidden" name="aql"><input type="hidden" name="gs_l"></form>

      </div>
    </div>
  </div>
  


    <div id="alerts"></div>
    <!-- end masthead -->
  </div>
  <div id="content-container">
    <!-- begin content -->
    <div id="content">
        
    <div class="subscription-menu-expandable subscription-menu-expandable-channels3 yt-rounded ytg-wide hid">
    <div class="content" id="recommended-channels-list"></div>
    <button class="close" type="button">close</button>
  </div>

      <div class="hid">
    <div class="yt-alert yt-alert-default yt-alert-success  " id="success-template"><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-buttons">  <button type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close" onclick=";return false;" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button>
</div><div class="yt-alert-content"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-error  " id="error-template"><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-buttons">  <button type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close" onclick=";return false;" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button>
</div><div class="yt-alert-content"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-warn  " id="warn-template"><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-buttons">  <button type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close" onclick=";return false;" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button>
</div><div class="yt-alert-content"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-info  " id="info-template"><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-buttons">  <button type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close" onclick=";return false;" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button>
</div><div class="yt-alert-content"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-status  " id="status-template"><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-buttons">  <button type="button" class="close yt-uix-close yt-uix-button yt-uix-button-close" onclick=";return false;" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button>
</div><div class="yt-alert-content"></div></div>
  </div>

  <div class="hid">
    <div id="message-container-template" class="message-container"></div>
  </div>




  <div id="branded-page-default-bg" class="ytg-base">
    <div id="branded-page-body-container" class="ytg-base clearfix">
          <map name="branded_page_banner_image_map"><area shape="rect" coords="12,121,69,153" href="http://web.archive.org/web/20120502172112/http://www.youtube.com/user/PewDiePie"><area shape="rect" coords="90,125,155,152" href="http://web.archive.org/web/20120502172112/http://pewdiepie.se/"><area shape="rect" coords="173,124,233,151" href="http://web.archive.org/web/20120502172112/http://pewdiepie.spreadshirt.com/"><area shape="rect" coords="250,124,310,151" href="http://web.archive.org/web/20120502172112/http://pewdiepie.net/"><area shape="rect" coords="562,123,654,154" href="http://web.archive.org/web/20120502172112/http://www.youtube.com/subscription_center?feature=iv&amp;src_vid=HtQLaxZ4x34&amp;add_user=pewdiepie&amp;annotation_id=annotation_841487"><area shape="rect" coords="906,124,934,153" href="http://web.archive.org/web/20120502172112/http://twitter.com/#!/pewdie"><area shape="rect" coords="936,125,964,154" href="http://web.archive.org/web/20120502172112/http://www.facebook.com/PewDiePie"><area shape="rect" coords="967,171,969,173" href="http://web.archive.org/web/20120502172112/http://www.image-maps.com/index.php?aff=mapped_users_3201204221904026" alt="Image Map"></map>
  <img usemap="#branded_page_banner_image_map" class="ytg-wide branded-banner-image" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" height="150">


      <div id="branded-page-header-container" class="ytg-wide banner-displayed-mode">
          <div id="branded-page-header" class="ytg-wide">
    <div id="channel-header-main">
      <div class="upper-section clearfix">
        <a href="/web/20120502172112/http://www.youtube.com/user/PewDiePie">
          <span class="profile-thumb">
            <span class="centering-wrap">
              <img src="//web.archive.org/web/20120502172112im_/http://i2.ytimg.com/i/-lHJZR3Gqxm24_Vd_AJ5Yw/1.jpg?v=4f3cea50" title="PewDiePie" alt="PewDiePie">
            </span>
          </span>
        </a>
          <div class="upper-left-section ">
    <h1>BECOME A BRO TODAY!</h1>
  </div>

        <div class="upper-left-section enable-fancy-subscribe-button">
              <div class="yt-subscription-button-hovercard yt-uix-hovercard"><button href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3Dsubscribe_button%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fuser%252FPewDiePie&amp;hl=en_US&amp;ltmpl=sso" onclick=";window.location.href=this.getAttribute('href');return false;" title="" type="button" class="yt-subscription-button subscription-button-with-recommended-channels yt-uix-button yt-uix-button-default yt-uix-tooltip" data-enable-hovercard="true" data-subscription-value="UC-lHJZR3Gqxm24_Vd_AJ5Yw" data-force-position="" data-position="" data-subscription-feature="channels3" data-subscription-type="channel" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content">  <span class="subscribe-label">Subscribe</span>
  <span class="subscribed-label">Subscribed</span>
  <span class="unsubscribe-label">Unsubscribe</span>
 </span></button><div class="yt-uix-hovercard-content hid">  <p class="loading-spinner">
    <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="">
Loading...
  </p>
</div></div>
        </div>
        <div class="upper-right-section">
            <div class="header-stats">

    
    <div class="stat-entry">
        <span class="stat-value">450,230</span>
  <span class="stat-name">subscribers</span>

    </div>


      
    <div class="stat-entry">
        <span class="stat-value">108,121,355</span>
  <span class="stat-name">video views</span>

    </div>

  </div>

          <span class="valign-shim"></span>
        </div>
      </div>
      <div class="channel-horizontal-menu clearfix">
        <ul>
              <li class="selected">
    <a href="/web/20120502172112/http://www.youtube.com/user/PewDiePie/featured" class="gh-tab-100">Featured

    </a>
  </li>

              <li>
    <a href="/web/20120502172112/http://www.youtube.com/user/PewDiePie/feed" class="gh-tab-102">Feed

    </a>
  </li>

              <li>
    <a href="/web/20120502172112/http://www.youtube.com/user/PewDiePie/videos" class="gh-tab-101">Videos

    </a>
  </li>

        </ul>
            <form id="channel-search" action="/web/20120502172112/http://www.youtube.com/user/PewDiePie/videos">
    <input name="query" type="text" maxlength="100" class="search-field label-input-label" placeholder="Search Channel" value="">
    <button class="search-btn" type="submit">
      <span class="search-btn-content">
Search
      </span>
    </button>
    <a class="search-dismiss-btn" href="/web/20120502172112/http://www.youtube.com/user/PewDiePie/videos?view=0">
      <span class="search-btn-content">
Clear
      </span>
    </a>
  </form>

      </div>
    </div>
  </div>

      </div>

      <div id="branded-page-body">
          <div class="channel-tab-content channel-layout-two-column selected blogger-template">
    <div class="tab-content-body">
      <div class="primary-pane">
              <div class="channels-featured-video channel-module yt-uix-c3-module-container has-visible-edge">
      <div class="module-view featured-video-view-module">
            <div class="channels-video-player player-root" data-swf-config="{&quot;assets&quot;: {&quot;html&quot;: &quot;\/html5_player_template&quot;, &quot;css&quot;: &quot;http:\/\/s.ytimg.com\/yt\/cssbin\/www-player-vflbYiXiO.css&quot;, &quot;js&quot;: &quot;http:\/\/s.ytimg.com\/yt\/jsbin\/html5player-vflFQf0-f.js&quot;}, &quot;url&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/watch_as3-vflH4K7LD.swf&quot;, &quot;min_version&quot;: &quot;8.0.0&quot;, &quot;args&quot;: {&quot;account_playback_token&quot;: &quot;&quot;, &quot;ptk&quot;: &quot;machinima&quot;, &quot;url_encoded_fmt_stream_map&quot;: &quot;url=http%3A%2F%2Fo-o.preferred.nuq04s10.v17.lscache3.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D45%26ip%3D207.0.0.0%26signature%3DC142D662003F3180CFF848F6DF445D89BDCE4DEB.460CDBCF0B990BD3C647B40F0514C785B694BB1A%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=hd720\u0026fallback_host=tc.v17.cache3.c.youtube.com\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026itag=45,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v3.lscache2.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D22%26ip%3D207.0.0.0%26signature%3D11D01A75FFC755E2A436CC76875FC974D485F050.3FB4FCC817B51A6F3E5228CA79B21AA9C7A979FC%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=hd720\u0026fallback_host=tc.v3.cache2.c.youtube.com\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.64001F%2C+mp4a.40.2%22\u0026itag=22,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v13.lscache7.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D44%26ip%3D207.0.0.0%26signature%3DC0B04F5FCF664521CD28C6F8BDA6664DDEFD773D.55EF21EE0681195C696B2C407B0AD16C74325CED%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=large\u0026fallback_host=tc.v13.cache7.c.youtube.com\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026itag=44,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v1.lscache3.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dalgorithm%252Cburst%252Ccp%252Cfactor%252Cid%252Cip%252Cipbits%252Citag%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26algorithm%3Dthrottle-factor%26itag%3D35%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3DD77E9431A151A1A0E10A7272C493E14BB1E2938D.44BF4F6CEEF47DE50D9FD02F3B3D07C36C451198%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=large\u0026fallback_host=tc.v1.cache3.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=35,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v21.lscache3.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D43%26ip%3D207.0.0.0%26signature%3D540C23A35870101D9AC2B67C084930D404509810.39FB53A9BC7AB2CA7E3D679C107825889A252C22%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=medium\u0026fallback_host=tc.v21.cache3.c.youtube.com\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026itag=43,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v11.lscache8.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dalgorithm%252Cburst%252Ccp%252Cfactor%252Cid%252Cip%252Cipbits%252Citag%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26algorithm%3Dthrottle-factor%26itag%3D34%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3DD33C79BC77F312260A1C9F1DDA9514CDF2AEDA5A.40F89DB9899AE7A32F77A013CC4ABD0DDAE77921%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=medium\u0026fallback_host=tc.v11.cache8.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=34,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v13.lscache5.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D18%26ip%3D207.0.0.0%26signature%3D77397BFC58F27C1C233E9C70355FED557876989C.1B0EFCC56C2E26888F3C8919B89C8B16C2892408%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=medium\u0026fallback_host=tc.v13.cache5.c.youtube.com\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.42001E%2C+mp4a.40.2%22\u0026itag=18,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v2.lscache6.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dalgorithm%252Cburst%252Ccp%252Cfactor%252Cid%252Cip%252Cipbits%252Citag%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26algorithm%3Dthrottle-factor%26itag%3D5%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3DD336EA8AD9F7E52B6D70B4ECB792730428C2A336.9443710C33F6B9388C3E432B17B6CF2FC3000473%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=small\u0026fallback_host=tc.v2.cache6.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=5&quot;, &quot;iv_close_button&quot;: 0, &quot;mpvid&quot;: &quot;AAS_EOn-8Ur0kjPZ&quot;, &quot;aftv&quot;: true, &quot;allow_ratings&quot;: 1, &quot;keywords&quot;: &quot;montage,pewdiepie,scary,happy,wheels,happy wheels funny,happy wheels,moments,timmy,irresponsible,dad,irresponsible dad,total,jerkface,total jerkface,flash,game,funny game,gore,Totaljerkface.com,download,download happy wheels,happy wheels download,play happy wheels,play,online,link&quot;, &quot;track_embed&quot;: 1, &quot;host_language&quot;: &quot;en&quot;, &quot;iv3_module&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/iv3_module-vfl7wP-bB.swf&quot;, &quot;ad_flags&quot;: 0, &quot;fmt_list&quot;: &quot;45\/1280x720\/99\/0\/0,22\/1280x720\/9\/0\/115,44\/854x480\/99\/0\/0,35\/854x480\/9\/0\/115,43\/640x360\/99\/0\/0,34\/640x360\/9\/0\/115,18\/640x360\/9\/0\/115,5\/320x240\/7\/0\/0&quot;, &quot;iv_storage_server&quot;: &quot;http:\/\/www.youtube.com\/annotations_iv\/&quot;, &quot;ad_logging_flag&quot;: 1, &quot;targeting_video_doc_id&quot;: &quot;&quot;, &quot;trueview&quot;: true, &quot;iurlmaxres&quot;: &quot;http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/maxresdefault.jpg&quot;, &quot;invideo&quot;: true, &quot;ad_preroll&quot;: &quot;1&quot;, &quot;iv_load_policy&quot;: 1, &quot;ad_channel_code_instream&quot;: &quot;afv_brand_instream,afv_instream_shortform,afv_instream_shortform_Entertainment,Vertical_Instream_3,Vertical_Instream_8,Vertical_Instream_36,Vertical_Instream_105,Vertical_Instream_211,Vertical_Instream_613,VidVert3,VidVert8,VidVert36,VidVert105,VidVert211,VidVert613,Vertical_3,Vertical_8,Vertical_36,Vertical_105,Vertical_211,Vertical_613,afv_instream_us,afv_user_pewdiepie,afv_user_id_-lHJZR3Gqxm24_Vd_AJ5Yw,yt_mpvid_AAS_EOn-8Ur0kjPZ,yt_cid_676,ytexp_907605.916013.907216.906507.911202.907335,ytps_default,ytel_profilepage&quot;, &quot;sdetail&quot;: &quot;p:\/user\/PewDiePie&quot;, &quot;cafe_experiment_id&quot;: 40210073, &quot;sourceid&quot;: &quot;y&quot;, &quot;timestamp&quot;: 1335979273, &quot;sffb&quot;: true, &quot;ad_host&quot;: &quot;ca-host-pub-6813290291914109&quot;, &quot;ad_eurl&quot;: &quot;http:\/\/www.youtube.com\/video\/pXO76dbictU&quot;, &quot;mpu&quot;: true, &quot;hl&quot;: &quot;en_US&quot;, &quot;tmi&quot;: &quot;1&quot;, &quot;iv_logging_level&quot;: 3, &quot;st_module&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/st_module-vflA1CyJc.swf&quot;, &quot;no_get_video_log&quot;: &quot;1&quot;, &quot;iurl&quot;: &quot;http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/hqdefault.jpg&quot;, &quot;endscreen_module&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/endscreen-vflkDqo_H.swf&quot;, &quot;cid&quot;: 676, &quot;referrer&quot;: &quot;http:\/\/youtube.com\/user\/PewDiePie&quot;, &quot;avg_rating&quot;: 4.92895712216, &quot;afv_instream_max&quot;: 15000, &quot;as_launched_in_country&quot;: &quot;1&quot;, &quot;token&quot;: &quot;vjVQa1PpcFNYsY8wHnxG-_8Uh_gJvq0J7C3SG1O99zk=&quot;, &quot;thumbnail_url&quot;: &quot;http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/default.jpg&quot;, &quot;showsearch&quot;: 0, &quot;el&quot;: &quot;profilepage&quot;, &quot;fexp&quot;: &quot;907605,916013,907216,906507,911202,907335&quot;, &quot;shortform&quot;: true, &quot;ss&quot;: &quot;1&quot;, &quot;allow_embed&quot;: 1, &quot;ad_host_tier&quot;: &quot;464885&quot;, &quot;vq&quot;: &quot;auto&quot;, &quot;fs&quot;: &quot;1&quot;, &quot;iv_enabled_features&quot;: &quot;TCS&quot;, &quot;sendtmp&quot;: &quot;1&quot;, &quot;ad3_module&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/ad3-vflKYIQkm.swf&quot;, &quot;gut_tag&quot;: &quot;\/4061\/ytpwatch\/main_676\/PewDiePie&quot;, &quot;ptchn&quot;: &quot;PewDiePie&quot;, &quot;plid&quot;: &quot;AAS_EOn_COA7e3G4&quot;, &quot;author&quot;: &quot;PewDiePie&quot;, &quot;muted&quot;: &quot;0&quot;, &quot;length_seconds&quot;: 363, &quot;enablejsapi&quot;: 1, &quot;rel&quot;: 0, &quot;has_cc&quot;: false, &quot;iv_module&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/iv_module-vfl06Axp2.swf&quot;, &quot;afv&quot;: true, &quot;ftoken&quot;: &quot;&quot;, &quot;ad_tag&quot;: &quot;http:\/\/ad-g.doubleclick.net\/pfadx\/com.ytpwatch.entertainment\/main_676\/PewDiePie;sz=WIDTHxHEIGHT;mpvid=AAS_EOn-8Ur0kjPZ;plat=pc;!c=676;k2=3;k2=8;k2=36;k2=105;k2=211;k2=613;kvid=pXO76dbictU;shortform=1;kpid=676;kga=-1;kgg=-1;kcr=us;kmsrd=1;kvz=203;longads=1;ytexp=907605.916013.907216.906507.911202.907335;klg=en;kr=F;kpu=PewDiePie;khd=1;ko=p;kclt=1;ytps=default;ytvt=c;afct=site_content;k5=3_8_36_105_211_613;kt=K;u=pXO76dbictU|676;afv=1;ytc=PewDiePie;dc_dedup=1;&quot;, &quot;ad_video_pub_id&quot;: &quot;ca-pub-6219811747049371&quot;, &quot;iurlsd&quot;: &quot;http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/sddefault.jpg&quot;, &quot;status&quot;: &quot;ok&quot;, &quot;ad_slots&quot;: &quot;0&quot;, &quot;tabsb&quot;: &quot;1&quot;, &quot;watermark&quot;: &quot;,http:\/\/s.ytimg.com\/yt\/img\/watermark\/youtube_watermark-vflHX6b6E.png,http:\/\/s.ytimg.com\/yt\/img\/watermark\/youtube_hd_watermark-vflAzLcD6.png&quot;, &quot;oid&quot;: &quot;lO2OmWY1fF8&quot;, &quot;showinfo&quot;: 0, &quot;video_verticals&quot;: [105, 211], &quot;view_count&quot;: 4131299, &quot;eurl&quot;: &quot;http:\/\/www.youtube.com\/user\/PewDiePie&quot;, &quot;ad_channel_code_overlay&quot;: &quot;invideo_overlay_480x70_cat24,afv_brand,Vertical_Overlay_3,Vertical_Overlay_8,Vertical_Overlay_36,Vertical_Overlay_105,Vertical_Overlay_211,Vertical_Overlay_613,VidVert3,VidVert8,VidVert36,VidVert105,VidVert211,VidVert613,Vertical_3,Vertical_8,Vertical_36,Vertical_105,Vertical_211,Vertical_613,afv_user_pewdiepie,afv_user_id_-lHJZR3Gqxm24_Vd_AJ5Yw,yt_mpvid_AAS_EOn-8Ur0kjPZ,yt_cid_676,ytexp_907605.916013.907216.906507.911202.907335,ytps_default,ytel_profilepage&quot;, &quot;pyv_in_related_cafe_experiment_id&quot;: 40210073, &quot;video_id&quot;: &quot;pXO76dbictU&quot;, &quot;dclk&quot;: true, &quot;instream&quot;: true, &quot;sk&quot;: &quot;dAhMWfMG6QnxR8yZOdMcnCPe1wAzYrbbC&quot;, &quot;pltype&quot;: &quot;content&quot;, &quot;autoplay&quot;: &quot;1&quot;}, &quot;url_v9as2&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/cps-vfl7PMaos.swf&quot;, &quot;params&quot;: {&quot;allowscriptaccess&quot;: &quot;always&quot;, &quot;allowfullscreen&quot;: &quot;true&quot;, &quot;bgcolor&quot;: &quot;#000000&quot;}, &quot;attrs&quot;: {&quot;width&quot;: &quot;640&quot;, &quot;id&quot;: &quot;movie_player&quot;, &quot;height&quot;: &quot;390&quot;}, &quot;url_v8&quot;: &quot;http:\/\/s.ytimg.com\/yt\/swfbin\/cps-vfl7PMaos.swf&quot;, &quot;html5&quot;: false}" data-video-id="pXO76dbictU" style="overflow: hidden;">
  <div class="player-container"></div><div class="player-actions-container"><div class="player-actions-share"></div><div class="player-actions-close"><div class="player-actions-close-button"></div></div></div></div>
    <div class="channels-featured-video-details tile">
      <h3 class="title">
        <a href="/web/20120502172112/http://www.youtube.com/watch?v=pXO76dbictU&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;feature=plcp">
          HAPPY WHEELS - FUNNY MOMENTS MONTAGE
        </a>
            <span title="Views">4,131,299</span>
      </h3>
      <p class="channels-featured-video-metadata">
        <span>by PewDiePie</span>
          <span class="created-date">1 month ago</span>
      </p>
    </div>

      </div>
    </div>

      <div class="single-playlist channel-module yt-uix-c3-module-container">
      <div class="module-view single-playlist-view-module">
            <div class="blogger-playall">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=1lK0tEC0tJ8&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;feature=plcp">
      <img class="small-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="">
Play All
    </a>
  </div>

        <div class="playlist-info">
          <h2>Uploaded videos</h2>
            <span class="blogger-video-count">1-10 of 603</span>
              <div class="yt-horizontal-rule ">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>


        </div>
          <ul class="gh-single-playlist">
          <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=1lK0tEC0tJ8&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=1&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i2.ytimg.com/vi/1lK0tEC0tJ8/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">12:57</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="1lK0tEC0tJ8" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="FBI MUDDA F*CKA - Let's Play: Condemned: Criminal Origins - Part 1">FBI MUDDA F*CKA - Let's Play: Condemned: Criminal Origins - Part 1</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
301 views
      </span>
      <span class="video-time-published">3 hours ago</span>
      <span class="video-item-description">Subscribe &amp; join the BRO ARMY! l http://bit.ly/JoinBroArmy
Facebook l http://on.fb.me/p8ksGr
Twitter l http://bit.ly/gETQhT
Vlogs l http://youtube.com/pewpewpewPEWDIE
Shirt...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=xzLSrevDA94&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=2&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i1.ytimg.com/vi/xzLSrevDA94/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">14:48</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="xzLSrevDA94" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="I TOLD YOU ABOUT THE STAIRS BRO! - Amnesia: Custom Story - Part 2 - Tricky Minds">I TOLD YOU ABOUT THE STAIRS BRO! - Amnesia: Custom Story - Part 2 - Tricky Minds</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
13,767 views
      </span>
      <span class="video-time-published">22 hours ago</span>
      <span class="video-item-description">Subscribe &amp; join the BRO ARMY!
Facebook l http://on.fb.me/PEWDIE 
Twitter l http://bit.ly/PEWDIEtweets
Play the game: http://bit.ly/H6sj5B

Outro/Intro song: http://www.you...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=XRWuWSA13I8&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=3&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i1.ytimg.com/vi/XRWuWSA13I8/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">10:52</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="XRWuWSA13I8" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="SWEDISH COMMENTARY! (/w subs) - Happy Wheels - Part 32">SWEDISH COMMENTARY! (/w subs) - Happy Wheels - Part 32</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
73,870 views
      </span>
      <span class="video-time-published">1 day ago</span>
      <span class="video-item-description">It's one video out of 32 I think you'll survive. I understand subtitles isnt as appealling but it still took my hours to put them on. youre welcome :$
Subscribe &amp; join the ...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=oxUQFqUM3dw&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=4&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i4.ytimg.com/vi/oxUQFqUM3dw/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">11:41</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="oxUQFqUM3dw" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="CRY WORTHY CUSTOM STORY -  Amnesia: Custom Story - Part 1 - Tricky Minds">CRY WORTHY CUSTOM STORY -  Amnesia: Custom Story - Part 1 - Tricky Minds</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
105,096 views
      </span>
      <span class="video-time-published">2 days ago</span>
      <span class="video-item-description">Happy 600th video! I wanted to make something special, I still am but since I have to go away today I havnt had enought time. So instead of leaving you bros empty handed yo...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=lOkmrIyNlKE&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=5&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i1.ytimg.com/vi/lOkmrIyNlKE/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">8:05</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="lOkmrIyNlKE" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="MOST STUPID GAME EVER! - The Typing of the Dead - Part 1">MOST STUPID GAME EVER! - The Typing of the Dead - Part 1</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
245,824 views
      </span>
      <span class="video-time-published">3 days ago</span>
      <span class="video-item-description">Subscribe &amp; join the BRO ARMY! l http://bit.ly/JoinBroArmy
Facebook l http://on.fb.me/p8ksGr
Twitter l http://bit.ly/gETQhT
Vlogs l http://youtube.com/pewpewpewPEWDIE
Shirt...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=0ryw5AJUYZc&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=6&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i1.ytimg.com/vi/0ryw5AJUYZc/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">12:56</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="0ryw5AJUYZc" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="DAT ASS! - Happy Wheels - Part 31">DAT ASS! - Happy Wheels - Part 31</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
264,940 views
      </span>
      <span class="video-time-published">3 days ago</span>
      <span class="video-item-description">Subscribe &amp; join the BRO ARMY! l http://bit.ly/JoinBroArmy
Facebook l http://on.fb.me/p8ksGr
Twitter l http://bit.ly/gETQhT
Vlogs l http://youtube.com/pewpewpewPEWDIE
Shirt...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=pDtOy3_tdhI&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=7&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i1.ytimg.com/vi/pDtOy3_tdhI/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">12:26</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="pDtOy3_tdhI" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="CREEPY ASS PONY! ;O Amnesia: Custom Story - Part 3 - The Small Horse Part B">CREEPY ASS PONY! ;O Amnesia: Custom Story - Part 3 - The Small Horse Part B</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
262,174 views
      </span>
      <span class="video-time-published">4 days ago</span>
      <span class="video-item-description">Subscribe &amp; join the BRO ARMY!
Facebook l http://on.fb.me/PEWDIE 
Twitter l http://bit.ly/PEWDIEtweets
Play the game: http://bit.ly/H6sj5B

Outro/Intro song: http://www.you...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=2nUJsjjLyfQ&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=8&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i3.ytimg.com/vi/2nUJsjjLyfQ/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">15:34</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="2nUJsjjLyfQ" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="HI, I'M PEWDIEPIE AND WELCOME TO JACKASS - Happy Wheels - Part 30">HI, I'M PEWDIEPIE AND WELCOME TO JACKASS - Happy Wheels - Part 30</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
352,800 views
      </span>
      <span class="video-time-published">4 days ago</span>
      <span class="video-item-description">Subscribe &amp; join the BRO ARMY! l http://bit.ly/JoinBroArmy
Facebook l http://on.fb.me/p8ksGr
Twitter l http://bit.ly/gETQhT
Vlogs l http://youtube.com/pewpewpewPEWDIE
Shirt...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=tttCATaj_vc&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=9&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i1.ytimg.com/vi/tttCATaj_vc/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">9:40</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="tttCATaj_vc" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="MORE FREAKYNESS! - SCP: Containment Breach - Part 3 - Walkthrough (+download link)">MORE FREAKYNESS! - SCP: Containment Breach - Part 3 - Walkthrough (+download link)</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
245,747 views
      </span>
      <span class="video-time-published">5 days ago</span>
      <span class="video-item-description">Subscribe &amp; join the BRO ARMY!
Facebook l http://on.fb.me/PEWDIE 
Twitter l http://bit.ly/PEWDIEtweets
Play the game: http://bit.ly/H6sj5B

Outro/Intro song: http://www.you...</span>
  </span>

      </span>
    </a>
  </span>

      </li>
      <li class="blogger-video">
          <span class="video tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=P04dWshDFMs&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;index=10&amp;feature=plcp" class="tile-link-block">
        <span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-288 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://i1.ytimg.com/vi/P04dWshDFMs/mqdefault.jpg" alt="Thumbnail
" width="288"><span class="vertical-align"></span></span></span></span><span class="video-time">5:37</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions addto-watch-later-button-sign-in yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="P04dWshDFMs" role="button"><span class="yt-uix-button-content">  <span class="addto-label">
Watch Later
  </span>
  <span class="addto-label-error">
Error
  </span>
  <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span>
      <span class="video-item-content">
          <span class="video-overview">
    <span class="title video-title" title="BROFISTING STRANGERS ON THE STREET -  Fridays With PewDiePie (Episode 25)">BROFISTING STRANGERS ON THE STREET -  Fridays With PewDiePie (Episode 25)</span>
  </span>
  <span class="video-details">
    <span class="yt-user-name video-owner" dir="ltr">PewDiePie</span>
      <span class="video-view-count">
293,296 views
      </span>
      <span class="video-time-published">5 days ago</span>
      <span class="video-item-description">Hello and welcome to my show :) .. FRIDAYS WITH PEWDIEPIE! It's my weekly check-in with my bros my subscribers. 

The TV Interview (with subs): 
http://www.youtube.com/watc...</span>
  </span>

      </span>
    </a>
  </span>

      </li>

      <li class="video">
    <button name="page" onclick=";return false;" type="button" class="more-videos yt-uix-button yt-uix-button-default" value="2" data-list_id="UU-lHJZR3Gqxm24_Vd_AJ5Yw" role="button"><span class="yt-uix-button-content">  <span class="load-more-text">
    Load 10 more videos
  </span>
  <span class="loading-indicator">
    <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/loader-vflff1Mjj.gif" alt="Loading">
  </span>
 </span></button>
  </li>


  </ul>

      </div>
    </div>


      </div>
      <div class="secondary-pane">
          <div id="watch-longform-ad" style="display:none;">
    <div id="watch-longform-text">
Advertisement
    </div>
    <div id="watch-longform-ad-placeholder"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" width="300" height="60"></div>
    <div id="instream_google_companion_ad_div"></div>
  </div>
  <div id="watch-channel-brand-div" class="companion-ads has-visible-edge channel-module yt-uix-c3-module-container hid">
    <div id="ad300x250"></div>
    <div id="google_companion_ad_div"></div>
    <div class="ad-label-text">
Advertisement
    </div>
  </div>

          
  
  
        <div class="user-profile channel-module yt-uix-c3-module-container ">
    <div class="module-view profile-view-module" data-owner-external-id="-lHJZR3Gqxm24_Vd_AJ5Yw">
      <h2>About BECOME A BRO TODAY!</h2>
      <div class="section first">
        <div class="user-profile-item profile-description">
                <div class="yt-uix-expander yt-c3-expander yt-uix-expander-collapsed">
    <div class="yt-uix-expander-body">
      <p>Subscribe to become a bro!</p>
<p>Sick of boring lets plays? - I am your salvator! </p>
<p>Join the broarmy and never be bored again!</p>
<p></p>
<p>Business contact: pewdie3@gmail.com</p>
<p>Unrelated emails will go unanswered, sorry :(</p>
<p>(I try my best answering most PMs though). :)</p>
<p></p>
<p>I'm just a guy from Sweden who plays video games. Attempting to entertain, have fun and spread them lols. Love all ma bros!</p>
<p></p>
<p>I am...</p>
<p>PEEEEEEEEEEEWDIE PIE</p>
<p></p>
<p>────────────────────────────</p>

        <button type="button" class="yt-uix-expander-head yt-uix-button yt-uix-button-link-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">  less <img alt="" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span></button>

    </div>
    <div class="yt-uix-expander-collapsed-body">
      <p>Subscribe to become a bro!</p>
<p>Sick of boring lets plays? - I am your salvator! </p>
<p>Join the broarmy and never be bored again!</p>
<p></p>
<p>Business contact: pewdie3@gmail.com</p>
<p>Unrelated emails will go unanswered, sorry :(</p>
<p>(I try my best answering most PMs though). :...</p>

        <button type="button" class="yt-uix-expander-head yt-uix-button yt-uix-button-link-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">  more <img alt="" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span></button>

    </div>
  </div>


        </div>
        <div class="user-profile-item">
          
          
          
        </div>
          <div class="user-profile-item">
                <div class="custom-url field-container ">
      <a href="http://web.archive.org/web/20120502172112/http://pewdiepie.se/" rel="me nofollow" target="_blank" title="My Personal Website/Blog" class="yt-uix-redirect-link">
          <span class="favicon-container">
            <img src="//web.archive.org/web/20120502172112im_/http://s2.googleusercontent.com/s2/favicons?domain=pewdiepie.se&amp;feature=youtube_channel">
          </span>
        <span class="link-text">
          My Personal Website/Blog
        </span>
      </a>
    </div>
    <div class="custom-url field-container ">
      <a href="http://web.archive.org/web/20120502172112/http://www.facebook.com/PewDiePie" rel="me nofollow" target="_blank" title="LIKE my fanpage" class="yt-uix-redirect-link">
          <span class="favicon-container">
            <img src="//web.archive.org/web/20120502172112im_/http://s2.googleusercontent.com/s2/favicons?domain=www.facebook.com&amp;feature=youtube_channel">
          </span>
        <span class="link-text">
          LIKE my fanpage
        </span>
      </a>
    </div>
    <div class="custom-url field-container ">
      <a href="http://web.archive.org/web/20120502172112/https://twitter.com/#!/Pewdie" rel="me nofollow" target="_blank" title="FOLLOW me on Twitter" class="yt-uix-redirect-link">
          <span class="favicon-container">
            <img src="//web.archive.org/web/20120502172112im_/http://s2.googleusercontent.com/s2/favicons?domain=twitter.com&amp;feature=youtube_channel">
          </span>
        <span class="link-text">
          FOLLOW me on Twitter
        </span>
      </a>
    </div>
    <div class="custom-url field-container ">
      <a href="http://web.archive.org/web/20120502172112/http://pewdiepie.net/" rel="me nofollow" target="_blank" title="JOIN the forums" class="yt-uix-redirect-link">
          <span class="favicon-container">
            <img src="//web.archive.org/web/20120502172112im_/http://s2.googleusercontent.com/s2/favicons?domain=pewdiepie.net&amp;feature=youtube_channel">
          </span>
        <span class="link-text">
          JOIN the forums
        </span>
      </a>
    </div>
    <div class="custom-url field-container ">
      <a href="http://web.archive.org/web/20120502172112/http://pewdiepie.spreadshirt.com/" rel="me nofollow" target="_blank" title="T-SHIRTS (US)" class="yt-uix-redirect-link">
          <span class="favicon-container">
            <img src="//web.archive.org/web/20120502172112im_/http://s2.googleusercontent.com/s2/favicons?domain=pewdiepie.spreadshirt.com&amp;feature=youtube_channel">
          </span>
        <span class="link-text">
          T-SHIRTS (US)
        </span>
      </a>
    </div>
    <div class="custom-url field-container ">
      <a href="http://web.archive.org/web/20120502172112/http://pewdiepie.spreadshirt.net/" rel="me nofollow" target="_blank" title="T-SHIRTS (EU)" class="yt-uix-redirect-link">
          <span class="favicon-container">
            <img src="//web.archive.org/web/20120502172112im_/http://s2.googleusercontent.com/s2/favicons?domain=pewdiepie.spreadshirt.net&amp;feature=youtube_channel">
          </span>
        <span class="link-text">
          T-SHIRTS (EU)
        </span>
      </a>
    </div>

          </div>
          <hr class="yt-horizontal-rule ">

      </div>
      <div class="section created-by-section">
        <div class="user-profile-item">
by <span class="yt-user-name " dir="ltr">PewDiePie</span>
        </div>

            <div class="user-profile-item ">
        <h5>Latest Activity</h5>
      <span class="value">May  2, 2012</span>
    </div>


        
          <hr class="yt-horizontal-rule ">

      </div>
          <div class="yt-uix-expander yt-uix-expander-collapsed yt-c3-expander">
    <div class="yt-uix-expander-body">
      
    <div class="section">
      

      

      

          <div class="user-profile-item ">
        <h5>Country</h5>
      <span class="value">Sweden</span>
    </div>

        <hr class="yt-horizontal-rule ">

    </div>

    <div class="section">
      <h4>Honors</h4>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=3&amp;s=ms&amp;gl=&amp;t=a&amp;g=2">#64 - Most Subscribed (All Time) - Comedians</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=ms&amp;gl=SE&amp;t=a&amp;g=0">#2 - Most Subscribed (All Time) - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=ms&amp;gl=SE&amp;t=a&amp;g=2">#1 - Most Subscribed (All Time) - Comedians - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=ms&amp;gl=SE&amp;t=a&amp;g=9">#1 - Most Subscribed (All Time) - Reporters - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=ms&amp;gl=SE&amp;t=m&amp;g=0">#2 - Most Subscribed (This Month) - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=ms&amp;gl=SE&amp;t=m&amp;g=2">#1 - Most Subscribed (This Month) - Comedians - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=ms&amp;gl=SE&amp;t=w&amp;g=0">#2 - Most Subscribed (This Week) - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=ms&amp;gl=SE&amp;t=w&amp;g=2">#1 - Most Subscribed (This Week) - Comedians - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=4&amp;s=mv&amp;gl=&amp;t=a&amp;g=2">#85 - Most Viewed (All Time) - Comedians</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=a&amp;g=0">#4 - Most Viewed (All Time) - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=a&amp;g=2">#1 - Most Viewed (All Time) - Comedians - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=a&amp;g=5">#3 - Most Viewed (All Time) - Partners - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=3&amp;s=mv&amp;gl=&amp;t=m&amp;g=2">#56 - Most Viewed (This Month) - Comedians</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=m&amp;g=0">#1 - Most Viewed (This Month) - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=m&amp;g=2">#1 - Most Viewed (This Month) - Comedians - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=m&amp;g=5">#1 - Most Viewed (This Month) - Partners - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=&amp;t=t&amp;g=0">#9 - Most Viewed (Today)</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=&amp;t=t&amp;g=2">#1 - Most Viewed (Today) - Comedians</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=&amp;t=t&amp;g=5">#7 - Most Viewed (Today) - Partners</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=t&amp;g=0">#1 - Most Viewed (Today) - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=t&amp;g=2">#1 - Most Viewed (Today) - Comedians - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=t&amp;g=5">#1 - Most Viewed (Today) - Partners - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=&amp;t=w&amp;g=9">#16 - Most Viewed (This Week) - Reporters</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=w&amp;g=0">#2 - Most Viewed (This Week) - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=w&amp;g=2">#2 - Most Viewed (This Week) - Comedians - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
        <div class="user-profile-item">
          <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/icn_award_17x24-vflQ6KMBN.gif">
          <a href="/web/20120502172112/http://www.youtube.com/channels?p=1&amp;s=mv&amp;gl=SE&amp;t=w&amp;g=5">#2 - Most Viewed (This Week) - Partners - Sweden</a>
          <hr class="yt-horizontal-rule ">

        </div>
    </div>

        <button type="button" class="yt-uix-expander-head yt-uix-button yt-uix-button-link-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">  less <img alt="" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span></button>

    </div>
    <div class="yt-uix-expander-collapsed-body">
      
        <button type="button" class="yt-uix-expander-head yt-uix-button yt-uix-button-link-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">  more <img alt="" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span></button>

    </div>
  </div>

    </div>
  </div>


  
          <div class="playlists-narrow channel-module yt-uix-c3-module-container">
    <div class="module-view gh-featured">
      <h2>Watch my Playlists:</h2>
          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=1lK0tEC0tJ8&amp;list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C45887f0FDvjVQa1PpcFOWtI2UeOdy7mch_kKOO6f5e5g6J3d8KdY%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1lK0tEC0tJ8/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1lK0tEC0tJ8/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/xzLSrevDA94/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/xzLSrevDA94/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/XRWuWSA13I8/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/XRWuWSA13I8/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/oxUQFqUM3dw/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/oxUQFqUM3dw/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    603 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=UU-lHJZR3Gqxm24_Vd_AJ5Yw&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Uploaded videos
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=yDzqpXA_h6Q&amp;list=PL501CA12E38536E7C&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C47485a5FDvjVQa1PpcFOWtI2UeOdy7lK-VuwMiMhIMPZMGklsDX0%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/5eBX1fw3LhE/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/5eBX1fw3LhE/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/yDzqpXA_h6Q/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/yDzqpXA_h6Q/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/pXO76dbictU/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/pXO76dbictU/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1qtg5yyXvXg/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1qtg5yyXvXg/default.jpg" alt="" class="thumb" data-group-key="thumb-group-0"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    18 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PL501CA12E38536E7C&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Scary Montages
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=fem8jQ9H4AI&amp;list=PL9678D7EEE80813E7&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C4387461FDvjVQa1PpcFOWtI2UeOdy7t5zlaRdhc1lFRZ3JLTUHOo%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/fem8jQ9H4AI/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/fem8jQ9H4AI/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/abKM-7VAwks/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/abKM-7VAwks/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1vS4BgzVN8Q/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1vS4BgzVN8Q/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/eWeKldPEIY0/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/eWeKldPEIY0/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    30 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PL9678D7EEE80813E7&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Cry Of Fear - Pewdiepie playlist
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=XW99sBf4BUI&amp;list=PLD9BB1F4892933B5E&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C4a363c5FDvjVQa1PpcFOWtI2UeOdy7ms3U8SySFmGEphDNY1Sxd4%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/XW99sBf4BUI/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/XW99sBf4BUI/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/hADNvX4pVIo/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/hADNvX4pVIo/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/iuiQh3sbjvY/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/iuiQh3sbjvY/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/LgSMlpDpl1M/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/LgSMlpDpl1M/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    32 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PLD9BB1F4892933B5E&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Happy Wheels - PewDiePie Playlist
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=_HYPnP96oIQ&amp;list=PLE27E201BAF2CE4F1&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C4ffb4a9FDvjVQa1PpcFOWtI2UeOdy7tJSUS7X83ywxtjsBhAZ6Ws%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/v--18CKuziY/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/v--18CKuziY/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/fxaolymJ9Lw/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/fxaolymJ9Lw/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/u68_aiIClCA/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/u68_aiIClCA/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/lZnbUEP6bCg/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/lZnbUEP6bCg/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    23 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PLE27E201BAF2CE4F1&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Afraid Of Monsters - PewDie's Playlist
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=opRC3dmqKds&amp;list=PL2A1CC3D09C335111&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C4806c5dFDvjVQa1PpcFOWtI2UeOdy7lVL_lZ4KTcHA91tS6BKZiw%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/opRC3dmqKds/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/opRC3dmqKds/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/vCLg9ZhHdrM/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/vCLg9ZhHdrM/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/KgmxgHBqne4/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/KgmxgHBqne4/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/D1BclicPWMY/default.jpg" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/D1BclicPWMY/default.jpg" alt="" class="thumb" data-group-key="thumb-group-1"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    30 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PL2A1CC3D09C335111&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Calling Wii - Pewdie's Playlist!
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=WJ8anfvviEY&amp;list=PLC9D32F394B208634&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C47e34a5FDvjVQa1PpcFOWtI2UeOdy7iXPGyJrOJFMTXsu6fIh64U%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/WJ8anfvviEY/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/Y8r8Q3iWdos/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/NbVN7UQWQ7w/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1gBaCtOjCL4/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    14 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PLC9D32F394B208634&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Ao Oni PewDiePie Playlist
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=SIlw-AsYDyc&amp;list=PL426EF0DFA6E984CE&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C4b0749cFDvjVQa1PpcFOWtI2UeOdy7hxBICRf_cYPESh74JW4fo8%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/SIlw-AsYDyc/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/DphQtvXKaYs/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/y-u-FTckaVg/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/dCplVTo9zs8/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    16 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PL426EF0DFA6E984CE&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      The Grudge Playlist PewDiePie
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=3ci_lKkZrv8&amp;list=PL2B76A8B04E4A67D5&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C49b601bFDvjVQa1PpcFOWtI2UeOdy7lpHJTNqqeZJBZtaeWgzW0A%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-2 vertical-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/3ci_lKkZrv8/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/MSF0My9d79U/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    2 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PL2B76A8B04E4A67D5&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Sealed - Pewdiepie's Playlist
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=-I889IN4ePs&amp;list=PL96090E0D28C70242&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C4c8df75FDvjVQa1PpcFOWtI2UeOdy7lvb5SP28PRQHuu9cZlwWUo%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/319FCXsCGYk/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/hnzg_-hnba4/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/nkqSJFTNCJY/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/-I889IN4ePs/default.jpg" alt="" class="thumb" data-group-key="thumb-group-2"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    8 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PL96090E0D28C70242&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Facade - PewDie's Official Playlist!
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=4zGy_OOfUyQ&amp;list=PL3F22D851427E9848&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C44a55fdFDvjVQa1PpcFOWtI2UeOdy7jheSPHYSK4AdDAVsyhE2Jw%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/zlA4Qow62SA/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/4zGy_OOfUyQ/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/5vxi7-QHvBU/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/NKPG0PRuZh4/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    18 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PL3F22D851427E9848&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Penumbra Overture: Scared Playthrough
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=eoU-PaiIqxo&amp;list=PLF616996C3E60974C&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C40a48d5FDvjVQa1PpcFOWtI2UeOdy7tt3KQMYM1o_r-biK0oTMZg%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/12DyoKxgjko/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/eoU-PaiIqxo/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/_lFdoktVkKk/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/zgemXv32HXo/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    34 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PLF616996C3E60974C&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Amnesia: The Dark Descent
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=0Xq30oskrLg&amp;list=PLFA93E476B448B961&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C4e72d29FDvjVQa1PpcFOWtI2UeOdy7o356odEU0JqNRVshMZlSFs%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/0Xq30oskrLg/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/lZ__MEq_taw/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/dnZ0knmY6ig/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/vi/3-y_EpmqBsw/default.jpg" alt="" class="thumb" data-group-key="thumb-group-3"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    10 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PLFA93E476B448B961&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Nightmare House 2: Playthrough
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

          <div class="playlist tile">
    <a href="/web/20120502172112/http://www.youtube.com/watch?v=RaKi5OkkMRs&amp;list=PLDA7E2D8B9FA9BE34&amp;feature=plcp" class="tile-link-block play-all yt-uix-sessionlink" data-sessionlink="context=C41a2af5FDvjVQa1PpcFOWtI2UeOdy7mqbxawFjMcHomP_-Z_Zpz8%3D">
      <span class="playlist-thumb-strip playlist-thumb-strip-254"><span class="videos videos-4 horizontal-cutoff"><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i3.ytimg.com/vi/RaKi5OkkMRs/default.jpg" alt="" class="thumb" data-group-key="thumb-group-4"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/EEhJgfN9Syg/default.jpg" alt="" class="thumb" data-group-key="thumb-group-4"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/vi/LBQ0_1p0rF0/default.jpg" alt="" class="thumb" data-group-key="thumb-group-4"></span></span></span><span class="clip"><span class="centering-offset"><span class="centering"><span class="ie7-vertical-align-hack">&nbsp;</span><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/vi/1H712S1LumE/default.jpg" alt="" class="thumb" data-group-key="thumb-group-4"></span></span></span></span><span class="resting-overlay"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/play-icon-resting-vflXxuFB8.png" class="play-button" alt="Play all">  <span class="video-count-box">
    17 videos
  </span>
</span><span class="hover-overlay"><span class="play-all-container"><strong><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/channels/mini-play-all-vflZu1SBs.png" alt="">Play all</strong></span></span></span>
    </a>
    <a href="/web/20120502172112/http://www.youtube.com/playlist?list=PLDA7E2D8B9FA9BE34&amp;feature=plcp" alt="See all videos in playlist." class="title tile-link-block">
      Penumbra: Black Plague
      <span class="playlist-author-attribution">
by BECOME A BRO TODAY!
      </span>
    </a>
  </div>

        <a class="view-all-link" href="/web/20120502172112/http://www.youtube.com/user/PewDiePie/videos?view=1">
view all
    <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="">
  </a>

    </div>
  </div>


          <div class="channel-module other-channels yt-uix-c3-module-container other-channels-compact">
    <div class="module-view other-channels-view">
      <h2>Mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</h2>
        <ul class="channel-summary-list ">
      <li>
        <a href="/web/20120502172112/http://www.youtube.com/user/PewDiePie" class="tile tile-link-block">
            <span class="channel-summary channel-summary-compact">
    <span class="channel-summary-thumb">
        <span class="video-thumb ux-thumb yt-thumb-square-46 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Thumbnail
" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/i/-lHJZR3Gqxm24_Vd_AJ5Yw/1.jpg?v=4f3cea50" data-group-key="thumb-group-4" width="46"><span class="vertical-align"></span></span></span></span>

    </span>
    <span class="channel-summary-info">
      <span class="channel-summary-title">BECOME A BRO TODAY!</span>
        <span class="subscriber-count">
    <strong>450,230</strong>
subscribers
  </span>

    </span>
  </span>

        </a>
      </li>
      <li>
        <a href="/web/20120502172112/http://www.youtube.com/user/Pewdie" class="tile tile-link-block">
            <span class="channel-summary channel-summary-compact">
    <span class="channel-summary-thumb">
        <span class="video-thumb ux-thumb yt-thumb-square-46 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Thumbnail
" data-thumb="//web.archive.org/web/20120502172112/http://i4.ytimg.com/i/gvZXTuGMG7DjMP_9eiWhBQ/1.jpg?v=4f213290" data-group-key="thumb-group-4" width="46"><span class="vertical-align"></span></span></span></span>

    </span>
    <span class="channel-summary-info">
      <span class="channel-summary-title">Pewdie's channel</span>
        <span class="subscriber-count">
    <strong>48,176</strong>
subscribers
  </span>

    </span>
  </span>

        </a>
      </li>
      <li>
        <a href="/web/20120502172112/http://www.youtube.com/user/CutiePieMarzia" class="tile tile-link-block">
            <span class="channel-summary channel-summary-compact">
    <span class="channel-summary-thumb">
        <span class="video-thumb ux-thumb yt-thumb-square-46 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Thumbnail
" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/i/e9oofjVfJzapRyVlt57x8Q/1.jpg?v=4f149bf7" data-group-key="thumb-group-4" width="46"><span class="vertical-align"></span></span></span></span>

    </span>
    <span class="channel-summary-info">
      <span class="channel-summary-title">CutiePieMarzia</span>
        <span class="subscriber-count">
    <strong>29,952</strong>
subscribers
  </span>

    </span>
  </span>

        </a>
      </li>
      <li>
        <a href="/web/20120502172112/http://www.youtube.com/user/TSUBASAHARA" class="tile tile-link-block">
            <span class="channel-summary channel-summary-compact">
    <span class="channel-summary-thumb">
        <span class="video-thumb ux-thumb yt-thumb-square-46 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Thumbnail
" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/i/QYGLEnt0--DlPQ9Ui3B4QA/1.jpg?v=4f2c1fa0" data-group-key="thumb-group-5" width="46"><span class="vertical-align"></span></span></span></span>

    </span>
    <span class="channel-summary-info">
      <span class="channel-summary-title">Xebaz game cave!</span>
        <span class="subscriber-count">
    <strong>2,603</strong>
subscribers
  </span>

    </span>
  </span>

        </a>
      </li>
      <li>
        <a href="/web/20120502172112/http://www.youtube.com/user/ChaoticMonki" class="tile tile-link-block">
            <span class="channel-summary channel-summary-compact">
    <span class="channel-summary-thumb">
        <span class="video-thumb ux-thumb yt-thumb-square-46 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Thumbnail
" data-thumb="//web.archive.org/web/20120502172112/http://i2.ytimg.com/i/u2yrDg7wROzElRGoLQH82A/1.jpg?v=4fa08893" data-group-key="thumb-group-5" width="46"><span class="vertical-align"></span></span></span></span>

    </span>
    <span class="channel-summary-info">
      <span class="channel-summary-title">Cry Plays: The World</span>
        <span class="subscriber-count">
    <strong>21,212</strong>
subscribers
  </span>

    </span>
  </span>

        </a>
      </li>
      <li>
        <a href="/web/20120502172112/http://www.youtube.com/user/theRadBrad" class="tile tile-link-block">
            <span class="channel-summary channel-summary-compact">
    <span class="channel-summary-thumb">
        <span class="video-thumb ux-thumb yt-thumb-square-46 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Thumbnail
" data-thumb="//web.archive.org/web/20120502172112/http://i1.ytimg.com/i/pqXJOEqGS-TCnazcHCo0rA/1.jpg?v=4eebd3a9" data-group-key="thumb-group-5" width="46"><span class="vertical-align"></span></span></span></span>

    </span>
    <span class="channel-summary-info">
      <span class="channel-summary-title">theRadBrad</span>
        <span class="subscriber-count">
    <strong>248,771</strong>
subscribers
  </span>

    </span>
  </span>

        </a>
      </li>
  </ul>


    </div>
  </div>




      </div>
    </div>
  </div>

      </div>
      
    </div>
  </div>


    </div>
    <!-- end content -->
  </div>
  <div id="footer-container">
    <!-- begin footer -->
        <script>
      if (window.yt.timing) {
        yt.timing.tick("foot_begin");
      }
    </script>

      <div id="footer">
        <div class="yt-horizontal-rule ">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>


    <div id="footer-logo">
      <a href="/web/20120502172112/http://www.youtube.com/" title="YouTube home">
        <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="YouTube home">
      </a>
      
      <span id="footer-divider"></span>
    </div>
    <div id="footer-main">
      <ul id="footer-links-primary">
          <li><a href="//web.archive.org/web/20120502172112/http://support.google.com/youtube/?hl=en-US&amp;p=">Help</a></li>
        <li><a href="/web/20120502172112/http://www.youtube.com/t/about_youtube">About</a></li>
        <li><a href="/web/20120502172112/http://www.youtube.com/t/press">Press &amp; Blogs</a></li>
        <li><a href="/web/20120502172112/http://www.youtube.com/t/copyright_center">Copyright</a></li>
        <li><a href="/web/20120502172112/http://www.youtube.com/creators">Creators &amp; Partners</a></li>
        <li><a href="/web/20120502172112/http://www.youtube.com/t/advertising_overview">Advertising</a></li>
        <li><a href="/web/20120502172112/http://www.youtube.com/dev">Developers</a></li>
      </ul>


      <ul id="footer-links-secondary">
        <li><a href="/web/20120502172112/http://www.youtube.com/t/terms">Terms</a></li>
        <li><a href="http://web.archive.org/web/20120502172112/http://www.google.com/intl/en/policies/privacy/">Privacy</a></li>
        <li><a href="//web.archive.org/web/20120502172112/http://support.google.com/youtube/bin/request.py?contact_type=abuse&amp;hl=en-US">Safety</a></li>
        <li><a href="//web.archive.org/web/20120502172112/http://www.google.com/tools/feedback/intl/en/error.html" onclick="return yt.www.feedback.start(yt.getConfig('FEEDBACK_LOCALE_LANGUAGE'), yt.getConfig('FEEDBACK_LOCALE_EXTRAS'));" id="reportbug">Report a bug</a></li>
        <li><a href="/web/20120502172112/http://www.youtube.com/testtube">Try something new!</a></li>
      </ul>
        <ul class="pickers yt-uix-button-group" data-button-toggle-group="required">
      <li>  <button type="button" class=" yt-uix-button yt-uix-button-text" onclick="yt.www.masthead.loadPicker('language-picker', &quot;&quot;); return false;;return false;" data-button-toggle="true" data-button-menu-id="arrow" role="button"><span class="yt-uix-button-content">Language: English
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</li>
      <li>  <button type="button" class=" yt-uix-button yt-uix-button-text" onclick="yt.www.masthead.loadPicker('region-picker', &quot;&quot;); return false;;return false;" data-button-toggle="true" data-button-menu-id="arrow" role="button"><span class="yt-uix-button-content">Location: Worldwide
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</li>
      <li>  <button type="button" class=" yt-uix-button yt-uix-button-text" onclick="yt.www.masthead.loadPicker('safetymode-picker', &quot;&quot;);return false;" data-button-toggle="true" data-button-menu-id="arrow" role="button"><span class="yt-uix-button-content">Safety:
  <span class="yt-footer-safety-value">
Off
  </span>
 </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</li>
  </ul>
    <div id="picker-container"></div>
  <div id="picker-loading" style="display: none">Loading...</div>


    </div>
  </div>

        <script>
      if (window.yt.timing) {
        yt.timing.tick("foot_end");
      }
    </script>

    <!-- end footer -->
  </div>
    



  <div id="playlist-bar" class="hid passive editable" data-video-url="/watch?v=&amp;feature=BFql&amp;playnext=1&amp;list=QL" data-list-id="" data-list-type="QL">
    <div id="playlist-bar-bar-container">
      <div id="playlist-bar-bar">
        <div class="yt-alert yt-alert-naked yt-alert-success hid " id="playlist-bar-notifications"><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-content"></div></div>
<span id="playlist-bar-info"><span class="playlist-bar-active playlist-bar-group"><button onclick=";return false;" title="Previous video" type="button" id="playlist-bar-prev-button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-prev" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Previous video"></button><span class="playlist-bar-count"><span class="playing-index">0</span> / <span class="item-count">0</span></span><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" id="playlist-bar-next-button" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-next" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span class="playlist-bar-active playlist-bar-group"><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" id="playlist-bar-autoplay-button" data-button-toggle="true" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-autoplay" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" id="playlist-bar-shuffle-button" data-button-toggle="true" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-shuffle" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span class="playlist-bar-passive playlist-bar-group"><button onclick=";return false;" title="Play videos" type="button" id="playlist-bar-play-button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-play" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Play videos"></button><span class="playlist-bar-count"><span class="item-count">0</span></span></span><span id="playlist-bar-title" class="yt-uix-button-group"><span class="playlist-title">Unsaved Playlist</span></span></span>
        <a id="playlist-bar-lists-back" href="#">
Return to active list
        </a>

<span id="playlist-bar-controls"><span class="playlist-bar-group"><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-text yt-uix-button-empty" onclick=";return false;" id="playlist-bar-toggle-button" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-toggle" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span class="playlist-bar-group"><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked yt-uix-button-reverse flip yt-uix-button yt-uix-button-text" onclick=";return false;" data-button-menu-id="playlist-bar-options-menu" data-button-has-sibling-menu="true" role="button"><span class="yt-uix-button-content">Options </span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span></span>      </div>
    </div>

<div id="playlist-bar-tray-container"><div id="playlist-bar-tray" class="yt-uix-slider yt-uix-slider-fluid"><button class="yt-uix-button playlist-bar-tray-button yt-uix-button-default yt-uix-slider-prev" onclick="return false;"><img class="yt-uix-slider-prev-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Previous video"></button><button class="yt-uix-button playlist-bar-tray-button yt-uix-button-default yt-uix-slider-next" onclick="return false;"><img class="yt-uix-slider-next-arrow" src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Next video"></button><div class="yt-uix-slider-body"><div id="playlist-bar-tray-content" class="yt-uix-slider-slide"><ol class="video-list"></ol><ol id="playlist-bar-help"><li class="empty playlist-bar-help-message">Your queue is empty. Add videos to your queue using this button: <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="addto-button-help"><br> or <a href="http://web.archive.org/web/20120502172112/https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fuser%252FPewDiePie&amp;hl=en_US&amp;ltmpl=sso">sign in</a> to load a different list.</li></ol></div><div class="yt-uix-slider-shade-left"></div><div class="yt-uix-slider-shade-right"></div></div></div><div id="playlist-bar-save"></div><div id="playlist-bar-lists" class="dark-lolz"></div><div id="playlist-bar-loading"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Loading..."><span id="playlist-bar-loading-message">Loading...</span><span id="playlist-bar-saving-message" class="hid">Saving...</span></div><div id="playlist-bar-template" style="display: none;" data-video-thumb-url="//i4.ytimg.com/vi/__video_encrypted_id__/default.jpg"><!--<li class="playlist-bar-item yt-uix-slider-slide-unit __classes__" data-video-id="__video_encrypted_id__"><a href="__video_url__" title="__video_title__"><span class="video-thumb ux-thumb yt-thumb-default-106 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="__video_title__" data-thumb-manual="true" data-thumb="__video_thumb_url__" width="106" ><span class="vertical-align"></span></span></span></span><span class="screen"></span><span class="count"><strong>__list_position__</strong></span><span class="play"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif"></span><span class="yt-uix-button yt-uix-button-default delete"><img class="yt-uix-button-icon-playlist-bar-delete" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Delete"></span><span class="now-playing">Now playing</span><span dir="ltr" class="title"><span>__video_title__  <span class="uploader">by __video_display_name__</span>
</span></span><span class="dragger"></span></a></li>--></div><div id="playlist-bar-next-up-template" style="display: none;"><!--<div class="playlist-bar-next-thumb"><span class="video-thumb ux-thumb yt-thumb-default-74 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//i4.ytimg.com/vi/__video_encrypted_id__/default.jpg" alt="Thumbnail
" width="74" ><span class="vertical-align"></span></span></span></span></div>--></div></div>      <div id="playlist-bar-options-menu" class="hid">

    <div id="playlist-bar-extras-menu">
        <ul>
      <li><span class="yt-uix-button-menu-item" data-action="clear">
Clear all videos from this list
      </span></li>
  </ul>

    </div>

    <ul>
      <li><span class="yt-uix-button-menu-item" onclick="window.location.href='//web.archive.org/web/20120502172112/http://support.google.com/youtube/bin/answer.py?answer=146749&amp;hl=en-US'">Learn more</span></li>
    </ul>
  </div>

  </div>


  
  <div id="shared-addto-watch-later-login" class="hid">
    <a href="http://web.archive.org/web/20120502172112/https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252F&amp;hl=en_US<mpl=sso" class="sign-in-link">Sign in</a> to add this to a playlist

  </div>

  <div id="shared-addto-menu" style="display: none;" class="hid sign-in">
      <div class="addto-menu">
        <div id="addto-list-panel" class="menu-panel active-panel">
        <span class="yt-uix-button-menu-item yt-uix-tooltip sign-in" data-possible-tooltip="" data-tooltip-show-delay="750"><a href="http://web.archive.org/web/20120502172112/https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252F&amp;hl=en_US<mpl=sso" class="sign-in-link">Sign in</a> to add this to a playlist
</span>

  </div>
  <div id="addto-list-saved-panel" class="menu-panel">
    <div class="panel-content">
      <div class="yt-alert yt-alert-naked yt-alert-success  "><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-content">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
          
  <span class="message">Added to <span class="addto-title yt-uix-tooltip yt-uix-tooltip-reverse" title="More information about this playlist" data-tooltip-show-delay="750"></span></span>

    </div>
</div></div>
    </div>
  </div>
  <div id="addto-list-error-panel" class="menu-panel">
    <div class="panel-content">
      <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span class="error-details"></span>
      <a class="show-menu-link">Back to list</a>
    </div>
  </div>

        <div id="addto-note-input-panel" class="menu-panel">
    <div class="panel-content">
      <div class="yt-alert yt-alert-naked yt-alert-success  "><div class="yt-alert-icon"><img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></div><div class="yt-alert-content">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
            <span class="message">Added to playlist:</span>
  <span class="addto-title yt-uix-tooltip" title="More information about this playlist" data-tooltip-show-delay="750"></span>

    </div>
</div></div>
    </div>
<div class="yt-uix-char-counter" data-char-limit="150"><div class="addto-note-box addto-text-box"><textarea id="addto-note" class="addto-note yt-uix-char-counter-input" maxlength="150"></textarea><label for="addto-note" class="addto-note-label">Add an optional note</label></div><span class="yt-uix-char-counter-remaining">150</span></div>    <button disabled="disabled" type="button" class="playlist-save-note yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">Add note </span></button>
  </div>
  <div id="addto-note-saving-panel" class="menu-panel">
    <div class="panel-content loading-content">
      <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span>Saving note...</span>
    </div>
  </div>
  <div id="addto-note-saved-panel" class="menu-panel">
    <div class="panel-content">
      <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span class="message">Note added to:</span>
    </div>
  </div>
  <div id="addto-note-error-panel" class="menu-panel">
    <div class="panel-content">
      <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span class="message">Error adding note:</span>
      <ul class="error-details"></ul>
      <a class="add-note-link">Click to add a new note</a>
    </div>
  </div>
  <div class="close-note hid">
    <img src="//web.archive.org/web/20120502172112im_/http://s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="close-button">
  </div>

  </div>

  </div>


  

  </div>
  <!-- end page -->
    
    
    <script id="www-core-js" src="//web.archive.org/web/20120502172112js_/http://s.ytimg.com/yt/jsbin/www-core-vfl2dz97Y.js"></script>


  <script>
        yt.setConfig({
      'XSRF_TOKEN': 'BHMRquYjObQV2iVyJFJTcwxBJRN8MTMzNjA2NTY3MkAxMzM1OTc5Mjcy',
      'XSRF_FIELD_NAME': 'session_token'
    });
    yt.pubsub.subscribe('init', yt.www.xsrf.populateSessionToken);

    yt.setConfig('XSRF_REDIRECT_TOKEN', 'F7PXFSWw7xBav3G4SKf9nntFWKZ8MTMzNjA2NTY3M0AxMzM1OTc5Mjcz');

    yt.setConfig('LOGGED_IN', false);
    yt.setConfig('SESSION_INDEX', null);

    yt.setConfig('FEEDBACK_LOCALE_LANGUAGE', "en");
    yt.setConfig('FEEDBACK_LOCALE_EXTRAS', {"experiments": "907605,916013,907216,906507,911202,907335", "accept_language": null});
  </script>

      <script>
      if (window.yt.timing) {
        yt.timing.tick("js_head");
      }
    </script>

      
    <script src="//web.archive.org/web/20120502172112js_/http://s.ytimg.com/yt/jsbin/www-channels3-vflO59EBQ.js"></script>


    
    <script src="//web.archive.org/web/20120502172112js_/http://s.ytimg.com/yt/jsbin/www-watch-ads-vflwpAlU5.js"></script>

      <script>
        window['google_language'] = "en";


    window['google_ad_type'] = 'image';
    window['google_ad_width'] = '300';
    window['google_ad_block'] = '2';
    window['google_ad_client'] = "ca-pub-6219811747049371";
    window['google_ad_host'] = "ca-host-pub-6813290291914109";
    window['google_ad_host_tier_id'] = "464885";
    window['google_ad_channel'] = "afv_brand_mpu+afv_user_pewdiepie+afv_user_id_-lHJZR3Gqxm24_Vd_AJ5Yw+yt_mpvid_AAS_EOn-8Ur0kjPZ+yt_cid_676+ytexp_907605.916013.907216.906507.911202.907335+Vertical_Banner_3+Vertical_Banner_8+Vertical_Banner_36+Vertical_Banner_105+Vertical_Banner_211+Vertical_Banner_613+VidVert3+VidVert8+VidVert36+VidVert105+VidVert211+VidVert613+Vertical_3+Vertical_8+Vertical_36+Vertical_105+Vertical_211+Vertical_613+ytps_default+ytel_profilepage";
    window['google_video_doc_id'] = "yt_pXO76dbictU";
    window['google_color_border'] = 'FFFFFF';
    window['google_color_bg'] = 'FFFFFF';
    window['google_color_link'] = '0033CC';
    window['google_color_text'] = '444444';
    window['google_color_url'] = '0033CC';
    window['google_language'] = "en";
    window['google_alternate_ad_url'] = "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/www.youtube.com\/adsense_script.html?v=2\u0026id=watch-channel-brand-div\u0026depth=2";
      window['google_eids'] = [40210073];
    window['google_page_url'] = "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/www.youtube.com\/video\/pXO76dbictU";
  </script>


      <script>
    function afcAdCall() {
      var channels = "afv_brand_mpu+afv_user_pewdiepie+afv_user_id_-lHJZR3Gqxm24_Vd_AJ5Yw+yt_mpvid_AAS_EOn-8Ur0kjPZ+yt_cid_676+ytexp_907605.916013.907216.906507.911202.907335+Vertical_Banner_3+Vertical_Banner_8+Vertical_Banner_36+Vertical_Banner_105+Vertical_Banner_211+Vertical_Banner_613+VidVert3+VidVert8+VidVert36+VidVert105+VidVert211+VidVert613+Vertical_3+Vertical_8+Vertical_36+Vertical_105+Vertical_211+Vertical_613+ytps_default+ytel_profilepage";
      channels = channels.replace('0854550288', '0854550287');
      channels = channels.replace('afv_brand_mpu', '0854550287');
      channels = channels + '+afc_on_page';
      window['google_ad_format'] = '300x250_as';
      window['google_ad_height'] = '250';
      window['google_page_url'] = "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/www.youtube.com\/video\/pXO76dbictU";


      var afcOptions = {
        'ad_type': 'image',
        'format': '300x250_as',
        'ad_block': '2',
        'ad_client': "ca-pub-6219811747049371",
        'ad_host': "ca-host-pub-6813290291914109",
        'ad_host_tier_id': "464885",
        'ad_channel': channels,
        'video_doc_id': "yt_pXO76dbictU",
        'color_border': 'FFFFFF',
        'color_bg': 'FFFFFF',
        'color_link': '0033CC',
        'color_text': '444444',
        'color_url': '0033CC',
        'language': "en",
        'alternate_ad_url': "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/www.youtube.com\/adsense_script.html?v=2\u0026id=watch-channel-brand-div\u0026depth=2"
      };
      var afcCallback = function() {
        if (window.google && google.ads && google.ads.Ad) {
          yt.www.watch.ads.handleShowAfvCompanionAdDiv(false);
          var ad = new google.ads.Ad("ca-pub-6219811747049371", 'google_companion_ad_div', afcOptions);
        } else {
          yt.setTimeout(afcCallback, 200);
        }
      };
      afcCallback();
    }
  </script>

    <script src="//web.archive.org/web/20120502172112js_/http://www.google.com/jsapi?autoload=%7B%22modules%22%3A%5B%7B%22name%22%3A%22ads%22%2C%22version%22%3A%221%22%2C%22callback%22%3A%22(function()%7B%7D)%22%2C%22packages%22%3A%5B%22content%22%5D%7D%5D%7D"></script>

    <script type="text/javascript" src="//web.archive.org/web/20120502172112js_/http://pagead2.googlesyndication.com/pagead/show_companion_ad.js"></script>

  <script>
      yt.setConfig('CHANNEL_ID', "-lHJZR3Gqxm24_Vd_AJ5Yw");
    yt.net.ajax.setToken('channel_ajax', "");

      yt.setMsg({
    'UNBLOCK_USER': "Are you sure you want to unblock this user?",
    'BLOCK_USER': "Are you sure you want to block this user?"
  });
  yt.setConfig('BLOCK_USER_AJAX_XSRF', '');


    yt.setMsg({
      'GENERIC_EDITOR_ERROR': "An error occurred. Please try again later."
    });
    yt.pubsub.subscribe('init', yt.www.channels3.channel.init);

  </script>
      <script>
    yt.net.ajax.setToken('subscription_ajax', "");
    yt.pubsub.subscribe('init', yt.www.subscriptions.SubscriptionButton.init);
  </script>





        
    <script src="//web.archive.org/web/20120502172112js_/http://s.ytimg.com/yt/jsbin/www-watch-livestreaming-vfl9iygOR.js"></script>

      <script>
      yt.setMsg('FLASH_UPGRADE', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e\u003cdiv class=\"yt-alert-icon\"\u003e\u003cimg s\u0072c=\"\/\/s.ytimg.com\/yt\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n          You need to upgrade your Adobe Flash Player to watch this video. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eDownload it from Adobe.\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setConfig({
    'PLAYER_CONFIG': {"assets": {"html": "\/html5_player_template", "css": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/cssbin\/www-player-vflbYiXiO.css", "js": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/jsbin\/html5player-vflFQf0-f.js"}, "url": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/watch_as3-vflH4K7LD.swf", "min_version": "8.0.0", "args": {"account_playback_token": "", "ptk": "machinima", "url_encoded_fmt_stream_map": "url=http%3A%2F%2Fo-o.preferred.nuq04s10.v17.lscache3.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D45%26ip%3D207.0.0.0%26signature%3DC142D662003F3180CFF848F6DF445D89BDCE4DEB.460CDBCF0B990BD3C647B40F0514C785B694BB1A%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=hd720\u0026fallback_host=tc.v17.cache3.c.youtube.com\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026itag=45,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v3.lscache2.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D22%26ip%3D207.0.0.0%26signature%3D11D01A75FFC755E2A436CC76875FC974D485F050.3FB4FCC817B51A6F3E5228CA79B21AA9C7A979FC%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=hd720\u0026fallback_host=tc.v3.cache2.c.youtube.com\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.64001F%2C+mp4a.40.2%22\u0026itag=22,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v13.lscache7.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D44%26ip%3D207.0.0.0%26signature%3DC0B04F5FCF664521CD28C6F8BDA6664DDEFD773D.55EF21EE0681195C696B2C407B0AD16C74325CED%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=large\u0026fallback_host=tc.v13.cache7.c.youtube.com\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026itag=44,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v1.lscache3.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dalgorithm%252Cburst%252Ccp%252Cfactor%252Cid%252Cip%252Cipbits%252Citag%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26algorithm%3Dthrottle-factor%26itag%3D35%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3DD77E9431A151A1A0E10A7272C493E14BB1E2938D.44BF4F6CEEF47DE50D9FD02F3B3D07C36C451198%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=large\u0026fallback_host=tc.v1.cache3.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=35,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v21.lscache3.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D43%26ip%3D207.0.0.0%26signature%3D540C23A35870101D9AC2B67C084930D404509810.39FB53A9BC7AB2CA7E3D679C107825889A252C22%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=medium\u0026fallback_host=tc.v21.cache3.c.youtube.com\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026itag=43,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v11.lscache8.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dalgorithm%252Cburst%252Ccp%252Cfactor%252Cid%252Cip%252Cipbits%252Citag%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26algorithm%3Dthrottle-factor%26itag%3D34%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3DD33C79BC77F312260A1C9F1DDA9514CDF2AEDA5A.40F89DB9899AE7A32F77A013CC4ABD0DDAE77921%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=medium\u0026fallback_host=tc.v11.cache8.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=34,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v13.lscache5.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dcp%252Cid%252Cip%252Cipbits%252Citag%252Cratebypass%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26itag%3D18%26ip%3D207.0.0.0%26signature%3D77397BFC58F27C1C233E9C70355FED557876989C.1B0EFCC56C2E26888F3C8919B89C8B16C2892408%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=medium\u0026fallback_host=tc.v13.cache5.c.youtube.com\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.42001E%2C+mp4a.40.2%22\u0026itag=18,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v2.lscache6.c.youtube.com%2Fvideoplayback%3Fupn%3DTjDz7UsOQPY%26sparams%3Dalgorithm%252Cburst%252Ccp%252Cfactor%252Cid%252Cip%252Cipbits%252Citag%252Csource%252Cupn%252Cexpire%26fexp%3D907605%252C916013%252C907216%252C906507%252C911202%252C907335%26algorithm%3Dthrottle-factor%26itag%3D5%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3DD336EA8AD9F7E52B6D70B4ECB792730428C2A336.9443710C33F6B9388C3E432B17B6CF2FC3000473%26source%3Dyoutube%26expire%3D1336002049%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hSS1BLUF9JU0NOMl9IRVRBOjFmRFFtZ3Rhb19a%26id%3Da573bbe9d6e272d5\u0026quality=small\u0026fallback_host=tc.v2.cache6.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=5", "iv_close_button": 0, "mpvid": "AAS_EOn-8Ur0kjPZ", "aftv": true, "allow_ratings": 1, "keywords": "montage,pewdiepie,scary,happy,wheels,happy wheels funny,happy wheels,moments,timmy,irresponsible,dad,irresponsible dad,total,jerkface,total jerkface,flash,game,funny game,gore,Totaljerkface.com,download,download happy wheels,happy wheels download,play happy wheels,play,online,link", "track_embed": 1, "host_language": "en", "iv3_module": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/iv3_module-vfl7wP-bB.swf", "ad_flags": 0, "fmt_list": "45\/1280x720\/99\/0\/0,22\/1280x720\/9\/0\/115,44\/854x480\/99\/0\/0,35\/854x480\/9\/0\/115,43\/640x360\/99\/0\/0,34\/640x360\/9\/0\/115,18\/640x360\/9\/0\/115,5\/320x240\/7\/0\/0", "iv_storage_server": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/www.youtube.com\/annotations_iv\/", "ad_logging_flag": 1, "targeting_video_doc_id": "", "trueview": true, "iurlmaxres": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/maxresdefault.jpg", "invideo": true, "ad_preroll": "1", "iv_load_policy": 1, "ad_channel_code_instream": "afv_brand_instream,afv_instream_shortform,afv_instream_shortform_Entertainment,Vertical_Instream_3,Vertical_Instream_8,Vertical_Instream_36,Vertical_Instream_105,Vertical_Instream_211,Vertical_Instream_613,VidVert3,VidVert8,VidVert36,VidVert105,VidVert211,VidVert613,Vertical_3,Vertical_8,Vertical_36,Vertical_105,Vertical_211,Vertical_613,afv_instream_us,afv_user_pewdiepie,afv_user_id_-lHJZR3Gqxm24_Vd_AJ5Yw,yt_mpvid_AAS_EOn-8Ur0kjPZ,yt_cid_676,ytexp_907605.916013.907216.906507.911202.907335,ytps_default,ytel_profilepage", "sdetail": "p:\/user\/PewDiePie", "cafe_experiment_id": 40210073, "sourceid": "y", "timestamp": 1335979273, "sffb": true, "ad_host": "ca-host-pub-6813290291914109", "ad_eurl": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/www.youtube.com\/video\/pXO76dbictU", "mpu": true, "hl": "en_US", "tmi": "1", "iv_logging_level": 3, "st_module": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/st_module-vflA1CyJc.swf", "no_get_video_log": "1", "iurl": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/hqdefault.jpg", "endscreen_module": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/endscreen-vflkDqo_H.swf", "cid": 676, "referrer": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/youtube.com\/user\/PewDiePie", "avg_rating": 4.92895712216, "afv_instream_max": 15000, "as_launched_in_country": "1", "token": "vjVQa1PpcFNYsY8wHnxG-_8Uh_gJvq0J7C3SG1O99zk=", "thumbnail_url": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/default.jpg", "showsearch": 0, "el": "profilepage", "fexp": "907605,916013,907216,906507,911202,907335", "shortform": true, "ss": "1", "allow_embed": 1, "ad_host_tier": "464885", "vq": "auto", "fs": "1", "iv_enabled_features": "TCS", "sendtmp": "1", "ad3_module": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/ad3-vflKYIQkm.swf", "gut_tag": "\/4061\/ytpwatch\/main_676\/PewDiePie", "ptchn": "PewDiePie", "plid": "AAS_EOn_COA7e3G4", "author": "PewDiePie", "muted": "0", "length_seconds": 363, "enablejsapi": 1, "rel": 0, "has_cc": false, "iv_module": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/iv_module-vfl06Axp2.swf", "afv": true, "ftoken": "", "ad_tag": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/ad-g.doubleclick.net\/pfadx\/com.ytpwatch.entertainment\/main_676\/PewDiePie;sz=WIDTHxHEIGHT;mpvid=AAS_EOn-8Ur0kjPZ;plat=pc;!c=676;k2=3;k2=8;k2=36;k2=105;k2=211;k2=613;kvid=pXO76dbictU;shortform=1;kpid=676;kga=-1;kgg=-1;kcr=us;kmsrd=1;kvz=203;longads=1;ytexp=907605.916013.907216.906507.911202.907335;klg=en;kr=F;kpu=PewDiePie;khd=1;ko=p;kclt=1;ytps=default;ytvt=c;afct=site_content;k5=3_8_36_105_211_613;kt=K;u=pXO76dbictU|676;afv=1;ytc=PewDiePie;dc_dedup=1;", "ad_video_pub_id": "ca-pub-6219811747049371", "iurlsd": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/i1.ytimg.com\/vi\/pXO76dbictU\/sddefault.jpg", "status": "ok", "ad_slots": "0", "tabsb": "1", "watermark": ",http:\/\/s.ytimg.com\/yt\/img\/watermark\/youtube_watermark-vflHX6b6E.png,http:\/\/s.ytimg.com\/yt\/img\/watermark\/youtube_hd_watermark-vflAzLcD6.png", "oid": "lO2OmWY1fF8", "showinfo": 0, "video_verticals": [105, 211], "view_count": 4131299, "eurl": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/www.youtube.com\/user\/PewDiePie", "ad_channel_code_overlay": "invideo_overlay_480x70_cat24,afv_brand,Vertical_Overlay_3,Vertical_Overlay_8,Vertical_Overlay_36,Vertical_Overlay_105,Vertical_Overlay_211,Vertical_Overlay_613,VidVert3,VidVert8,VidVert36,VidVert105,VidVert211,VidVert613,Vertical_3,Vertical_8,Vertical_36,Vertical_105,Vertical_211,Vertical_613,afv_user_pewdiepie,afv_user_id_-lHJZR3Gqxm24_Vd_AJ5Yw,yt_mpvid_AAS_EOn-8Ur0kjPZ,yt_cid_676,ytexp_907605.916013.907216.906507.911202.907335,ytps_default,ytel_profilepage", "pyv_in_related_cafe_experiment_id": 40210073, "video_id": "pXO76dbictU", "dclk": true, "instream": true, "sk": "dAhMWfMG6QnxR8yZOdMcnCPe1wAzYrbbC", "pltype": "content", "autoplay": "1"}, "url_v9as2": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/cps-vfl7PMaos.swf", "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "bgcolor": "#000000"}, "attrs": {"width": "640", "id": "movie_player", "height": "390"}, "url_v8": "http:\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/swfbin\/cps-vfl7PMaos.swf", "html5": false}
  });

  </script>

    <script>
      yt.pubsub.subscribe('init', function() {
        yt.net.ajax.setToken('watch_actions_ajax', "");
      });
      yt.setMsg({
          'CHANNELS3_FEATURED_PLAYER_GENERIC_ERROR': "This feature is not available right now. Please try again later."
      })
        yt.pubsub.subscribe('init', function () {
          yt.www.livestreaming.ConcurrentViewers(30000)
        });
    </script>

    <script>
    yt.pubsub.subscribe('init', yt.www.channels3.channel.initBloggerLayout);
  </script>



        





  

  <div id="ad_creative_1" class="ad-div " style="z-index: 1">
    <iframe id="ad_creative_iframe_1" scrolling="no" style="z-index: 1" src="//web.archive.org/web/20120502172112/http://ad-g.doubleclick.net/adi/com.ytbc/PewDiePie;sz=1x1;tile=1;dcopt=ist;plat=pc;!c=676;k2=3;k2=8;k2=36;k2=105;k2=211;k2=613;kvid=pXO76dbictU;shortform=1;kpid=676;kga=-1;kgg=-1;kcr=us;kmsrd=1;kvz=203;longads=1;ytexp=907605.916013.907216.906507.911202.907335;klg=en;kr=F;kpu=PewDiePie;khd=1;ko=p;kclt=1;ytps=default;ytvt=c;afct=site_content;k5=3_8_36_105_211_613;kt=K;u=pXO76dbictU|676;afv=1;ytc=PewDiePie;dc_dedup=1;kmyd=ad_creative_1;ord=806670865255605?" width="1" height="1" frameborder="0"></iframe>
      <div style="font-size: 10px; padding-top: 3px;" class="alignC grayText">
          <a href="/web/20120502172112/http://www.youtube.com/t/ads_preferences">
Advertisement
          </a>
      </div>

    <script>
      (function() {
        var addTimestamp = (Math.floor(Math.random() * 1000) == 0);
        if (addTimestamp) {
          var kts = new Date().getTime();
          var iframeSrc = "//web.archive.org/web/20120502172112/http://ad-g.doubleclick.net/adi/com.ytbc/PewDiePie;sz=1x1;tile=1;dcopt=ist;plat=pc;!c=676;k2=3;k2=8;k2=36;k2=105;k2=211;k2=613;kvid=pXO76dbictU;shortform=1;kpid=676;kga=-1;kgg=-1;kcr=us;kmsrd=1;kvz=203;longads=1;ytexp=907605.916013.907216.906507.911202.907335;klg=en;kr=F;kpu=PewDiePie;khd=1;ko=p;kclt=1;ytps=default;ytvt=c;afct=site_content;k5=3_8_36_105_211_613;kt=K;u=pXO76dbictU|676;afv=1;ytc=PewDiePie;dc_dedup=1;kmyd=ad_creative_1;kts=" + kts + ";ord=806670865255605?";
        } else {
          var iframeSrc = "//web.archive.org/web/20120502172112/http://ad-g.doubleclick.net/adi/com.ytbc/PewDiePie;sz=1x1;tile=1;dcopt=ist;plat=pc;!c=676;k2=3;k2=8;k2=36;k2=105;k2=211;k2=613;kvid=pXO76dbictU;shortform=1;kpid=676;kga=-1;kgg=-1;kcr=us;kmsrd=1;kvz=203;longads=1;ytexp=907605.916013.907216.906507.911202.907335;klg=en;kr=F;kpu=PewDiePie;khd=1;ko=p;kclt=1;ytps=default;ytvt=c;afct=site_content;k5=3_8_36_105_211_613;kt=K;u=pXO76dbictU|676;afv=1;ytc=PewDiePie;dc_dedup=1;kmyd=ad_creative_1;ord=806670865255605?";
        }
        var adIframe = document.getElementById("ad_creative_iframe_1");
        adIframe.src = iframeSrc;
      })();
    </script>
  </div>


      <script src="//web.archive.org/web/20120502172112js_/http://www.googletagservices.com/tag/js/gpt.js"></script>
    <script>
      (function() {
        if (!window.googletag) {
          return;
        }
        var gutSlot = googletag.defineSlot("/4061/ytpwatch/main_676/PewDiePie", [[300, 250], [300, 60]], 'yt-gut-content');
        gutSlot.set('ad_type', 'flash');
        gutSlot.addService(googletag.companionAds());
        googletag.enableServices();

        yt.setConfig('gut_slot', gutSlot);
        yt.setConfig('yt_gut_invideo_size', gutSlot.getSizes()[0]);
        yt.setConfig('yt_gut_instream_size', gutSlot.getSizes()[1]);
      })();
    </script>


      <script>
      if (window.yt.timing) {
        yt.timing.tick("js_page");
      }
    </script>

        <script>
      yt.setConfig('TIMING_ACTION', "channels3");
    </script>





  <script>
    



  yt.setConfig({
    'DRAGDROP_BINARY_URL': "\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/jsbin\/www-dragdrop-vflLuNHvY.js",
    'PLAYLIST_BAR_PLAYING_INDEX': -1,
    'LIST_COPY_ON_EDIT_ENABLED': false  });

    yt.net.ajax.setToken('addto_ajax_logged_out', "GeyfDewOKi79NXxnboTz9cMd4Oh8MEAxMzM1OTc5Mjcz");

    yt.pubsub.subscribe('init', yt.www.lists.init);





    
    yt.www.thumbnaildelayload.init(0);





      yt.pubsub.subscribe('init', function() {
        yt.net.scriptloader.load("\/\/web.archive.org\/web\/20120502172112\/http:\/\/s.ytimg.com\/yt\/jsbin\/www-searchbox-vfliI0gmd.js", function() {
          
      if (_gel('masthead-search')) {
        yt.setTimeout(function() {
          searchbox.yt.install(_gel('masthead-search'),
              _gel('masthead-search')["search_query"],
              "en",
              "us",
              false,
              '',
              '',
              null,
              null,
              "Suggestion dismissed",
              "Dismiss",
              -1,
              null);
        }, 100);
      }

        });
      });



  </script>

  <script>

    yt.setMsg({
      'ADDTO_WATCH_LATER_ADDED': "Added",
      'ADDTO_WATCH_LATER_ERROR': "Error"
    });

    yt.pubsub.subscribe('init', yt.www.lists.addtowatchlater.init);
  </script>

  

      <script>
      if (window.yt.timing) {
        yt.timing.tick("js_foot");
      }
    </script>


  



<iframe class="gssb_k" style="display: none; top: 47px; left: 0px; height: 0px;" allow="autoplay 'self'; fullscreen 'self'"></iframe><table style="width: 381px; display: none; top: 47px; left: 584.5px; position: absolute;" class="gstl_0 gssb_c" cellspacing="0" cellpadding="0"><tbody><tr><td class="gssb_f"></td><td class="gssb_e" style="width: 100%;"></td></tr></tbody></table></body></html>` ];
	const htmlRoot = document.evaluate('/html', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	document.querySelector('html').innerHTML = pages[0];
	// document.querySelector('html').setAttribute("class", "guide-pinned show-guide content-snap-width-3");
	// correct CSS
	/* var ext = browser.i18n.getMessage("@@extension_id")
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
	
/*	function findLink(el) {
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
}; */

/* document.addEventListener('click', callback, false);
	
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
} */
	
	/*document.getElementById("yt-picker-language-button").onclick = function() {
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
	*/
	
	// InjectTemplateHtml(documentElements, new DOMParser().parseFromString(pages[0]));
	
})();