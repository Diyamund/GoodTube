/* document.getElementById("appbar-guide-button").onclick = function() {
	if ((document.querySelector('html').getAttribute("class").search("show-guide")) > -1) { 
		document.querySelector('html').setAttribute("class", (document.querySelector('html').getAttribute("class").replace("show-guide", ""))); 
	} else { 
		document.querySelector('html').setAttribute("class", (document.querySelector('html').getAttribute("class") + " show-guide")); 
	}
	document.getElementById("appbar-guide-button").blur();
} */

// Manage script loading

console.log("test");

chrome.webRequest.onHeadersReceived.addListener(info => {
    const headers = info.responseHeaders; // original headers
    for (let i=headers.length-1; i>=0; --i) {
        let header = headers[i].name.toLowerCase();
        if (header === "x-frame-options" || header === "frame-options") {
            headers.splice(i, 1); // Remove the header
        }
    }
    // return modified headers
    return {responseHeaders: headers};
}, {
    urls: [ "<all_urls>" ], // match all pages
    types: [ "sub_frame" ] // for framing only
}, ["blocking", "responseHeaders"]);

chrome.webRequest.onHeadersReceived.addListener(info => {
    const headers = info.responseHeaders; // original headers
    for (let i=headers.length-1; i>=0; --i) {
        let header = headers[i].name.toLowerCase();
        if (header === "content-security-policy") { // csp header is found
            // modifying frame-ancestors; this implies that the directive is already present
            headers[i].value = headers[i].value.replace("frame-ancestors", "frame-ancestors https://yourpage.com/");
        }
    }
    // return modified headers
    return {responseHeaders: headers};
}, {
    urls: [ "<all_urls>" ], // match all pages
    types: [ "sub_frame" ] // for framing only
}, ["blocking", "responseHeaders"]);
