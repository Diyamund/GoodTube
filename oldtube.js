(function() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        switch (message.type) {
            case 'xhrRequest':
                var request = new XMLHttpRequest();
                request.open(message.requestType, message.url, true);
                request.setRequestHeader("Content-Type", "application/json");
                request.setRequestHeader('X-Goog-Visitor-Id', localStorage.getItem('visitorData'));
                request.onload = () => sendResponse(request.responseText);
                request.send(message.postData);
                return true;
        }
    });
})();