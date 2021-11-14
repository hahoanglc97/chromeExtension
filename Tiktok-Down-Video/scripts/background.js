chrome.extension.onMessage.addListener(function (request) {
	chrome.downloads.download({
  		url: request.data
	});
});