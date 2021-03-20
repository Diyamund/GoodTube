chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
	switch (message.type) {
      case 'spf-request':
        sendResponse(processRequest(message.data.method, message.data.url, message.data.postData));
        break;
      case 'spf-data':
        processDataRecieved(message.data.url, message.data.data, sendResponse);
        break;
    }
});

function processRequest(method, url, postData) {
	if (url.startsWith('https://www.youtube.com/?'))
		return ["POST", "https://www.youtube.com/youtubei/v1/browse?key=AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8", "{\"context\":{\"client\":{\"clientName\":\"TVHTML5\",\"clientVersion\":\"6.20180913\",\"screenWidthPoints\":1745,\"screenHeightPoints\":852,\"screenPixelDensity\":1,\"theme\":\"CLASSIC\",\"utcOffsetMinutes\":120,\"webpSupport\":true,\"animatedWebpSupport\":true,\"tvAppInfo\":{\"appQuality\":\"TV_APP_QUALITY_LIMITED_ANIMATION\"},\"acceptRegion\":\"US\",\"osName\":\"Tizen\",\"osVersion\":\"5.0\",\"browserName\":\"Safari\",\"browserVersion\":\"5.0\",\"acceptLanguage\":\"en\"},\"request\":{\"consistencyTokenJars\":[]},\"user\":{\"enableSafetyMode\":false}},\"browseId\":\"FEtopics\"}", "application/json"];
	if (url.startsWith('/loadAjaxHomeVideos?next=')) {
		var continuation = url.substring(25);
		return ["POST", "https://www.youtube.com/youtubei/v1/browse?key=AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8&ajax=true", `{\"context\":{\"client\":{\"clientName\":\"TVHTML5\",\"clientVersion\":\"6.20180913\",\"screenWidthPoints\":1745,\"screenHeightPoints\":852,\"screenPixelDensity\":1,\"theme\":\"CLASSIC\",\"utcOffsetMinutes\":120,\"webpSupport\":true,\"animatedWebpSupport\":true,\"tvAppInfo\":{\"appQuality\":\"TV_APP_QUALITY_LIMITED_ANIMATION\"},\"acceptRegion\":\"US\",\"osName\":\"Tizen\",\"osVersion\":\"5.0\",\"browserName\":\"Safari\",\"browserVersion\":\"5.0\",\"acceptLanguage\":\"en\"},\"request\":{\"consistencyTokenJars\":[]},\"user\":{\"enableSafetyMode\":false}},\"browseId\":\"FEtopics\",\"continuation\":\"${continuation}\"}`, "application/json"];
	}
	if (url.startsWith('https://www.youtube.com/feed/trending'))
		return ["GET", 'https://www.youtube.com/feed/trending', null, null];
	if (url.startsWith('https://www.youtube.com/feed/history'))
		return ["GET", 'https://www.youtube.com/feed/history', null, null];
	return [method, url, postData, "application/x-www-form-urlencoded"];
}

function replaceJsToLocal(data) {
	return data.replace(/([\\]{0,15}\/{0,1}yts([\\]{0,15}\/{0,1})jsbin[\\]{0,15}\/{0,1})/g, `chrome-extension:$2$2${chrome.i18n.getMessage("@@extension_id")}$1`);
}

function processDataRecieved(url, data, callback) {
	switch (url)
	{
		case 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8':
			processHomePage(data).then((result) => { callback(replaceJsToLocal(result)) });
			break;
		case 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8&ajax=true':
			processAjaxVideo(data).then((result) => callback(result));
			break;
		case 'https://www.youtube.com/feed/trending':
			callback(processTrending(data));
			break;
		case 'https://www.youtube.com/feed/history':
			callback(generateHistoryJson("<div class=\"branded-page-v2-container branded-page-base-bold-titles branded-page-v2-container-flex-width branded-page-v2-has-top-row branded-page-v2-secondary-column-hidden\"> <div class=\"branded-page-v2-col-container\"> <div class=\"branded-page-v2-col-container-inner\"> <div class=\"branded-page-v2-primary-col\"> <div class=\"yt-card clearfix\"> <div class=\"branded-page-v2-body branded-page-v2-primary-column-content\" id=\"\"> <ul id=\"browse-items-primary\"> <li> <ul id=\"channels-browse-content-grid\" class=\"channels-browse-content-grid branded-page-gutter-padding grid-lockups-container\" style=\"border-bottom: 1px solid #e8e8e8;\"> <li> <div class=\"display-message\">Watch history isn\'t viewable when signed out. <a href=\"https:\/\/support.google.com\/youtube\/answer\/95725?hl=en\" class=\" yt-uix-sessionlink \" data-url=\"https:\/\/support.google.com\/youtube\/answer\/95725?hl=en\">Learn more<\/a><\/div><\/li><\/ul> <\/li><\/ul> <\/div><\/div><\/div><\/div><\/div><\/div>"));
			break;
		default:
			if (url.includes("spf=navigate"))
				data = replaceJsToLocal(data);
			callback(data);
			break;
	}
}
	