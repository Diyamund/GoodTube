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
	let errorPageBase = [ `

<!DOCTYPE html>
<html>
  <head>
    <title>404 Not Found</title>
      <base target="_top">
      <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-core-webp-vflYt0In3.css" name="www-core">

      <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-error-webp-vflPbKJj6.css" name="www-error">

      <link rel="stylesheet" href="__MSG_@@extension_id__/2016/www-pageframe-webp-vflfoYm8d.css" name="www-pageframe">

  </head>
  <body>
    <div id="error-page">
      <div id="error-page-content">
        <img id="error-page-hh-illustration" src="__MSG_@@extension_id__/2016/img/image-hh-404-vflvCykRp.png" alt="">
        <p>
          This page isn&#39;t available. Sorry about that.
        </p>
        <p>Try searching for something else.</p>
        <div id="yt-masthead">
              <a id="logo-container" href="/" title="YouTube home" class="     spf-link 
 masthead-logo-renderer yt-uix-sessionlink" data-sessionlink="feature=yt-logo"><span class="logo masthead-logo-renderer-logo yt-sprite"></span></a>

          <form id="masthead-search" class="search-form consolidated-form" action="/results" onsubmit="if (document.getElementById(&#39;masthead-search-term&#39;).value == &#39;&#39;) return false;" data-clicktracking=""><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component search-button" type="submit" onclick="if (document.getElementById(&#39;masthead-search-term&#39;).value == &#39;&#39;) return false; document.getElementById(&#39;masthead-search&#39;).submit(); return false;;return true;" dir="ltr" id="search-btn" tabindex="2"><span class="yt-uix-button-content">Search</span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><input id="masthead-search-term" autocomplete="off"  onkeydown="if (!this.value &amp;&amp; (event.keyCode == 40 || event.keyCode == 32 || event.keyCode == 34)) {this.onkeydown = null; this.blur();}" class="search-term masthead-search-renderer-input yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" placeholder="" title="Search"></div></form>
        </div>
      </div>
      <span id="error-page-vertical-align"></span>
    </div>
      <script src="//s.ytimg.com/yts/jsbin/www-notfound-vflmFgh3k/www-notfound.js" type="text/javascript" name="www-notfound/www-notfound"></script>

    <script>
      yt.setConfig({'SBOX_JS_URL': "\/\/s.ytimg.com\/yts\/jsbin\/www-searchbox-vflNa0Bxx\/www-searchbox.js",'SBOX_SETTINGS': {"REQUEST_DOMAIN":"us","HAS_ON_SCREEN_KEYBOARD":false,"REQUEST_LANGUAGE":"en"},'SBOX_LABELS': {"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Dismiss"}});
      yt.www.notfound.init();
    </script>
  </body>
</html>
` ];
	
	initload(errorPageBase);
	insertScripts(errorPageBase);
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

function insertScripts() {
	
	var wwwnotfound = document.createElement("script");
	wwwnotfound.src = "chrome-extension://bklmigfheoipbffnmlejolibhbkcinni/2016/jsbin/www-notfound.js";
	document.body.appendChild(wwwnotfound);
	
	var notfoundinline = documente.createElement("script");
	notfoundinline.text = `yt.setConfig({'SBOX_JS_URL': "\/\/s.ytimg.com\/yts\/jsbin\/www-searchbox-vflNa0Bxx\/www-searchbox.js",'SBOX_SETTINGS': {"REQUEST_DOMAIN":"us","HAS_ON_SCREEN_KEYBOARD":false,"REQUEST_LANGUAGE":"en"},'SBOX_LABELS': {"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Dismiss"}});
      yt.www.notfound.init();`
	  document.body.appendChild(notfoundinline);
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

}

if (window.location.search.search("enable-polymer") <= -1) {
	main(2016);
}