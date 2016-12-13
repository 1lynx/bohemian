chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
		if (msg.text === 'getInfo') {
			sendResponse({
				site: "youtube",
				img: document.getElementById("watch7-user-header").getElementsByClassName("yt-thumb-clip")[0].childNodes[1].src,
				url: document.getElementById("watch7-user-header").getElementsByClassName("yt-user-info")[0].getElementsByClassName("g-hovercard")[0].attributes[0].value,
				channel: document.getElementById("watch7-user-header").getElementsByClassName("yt-user-info")[0].getElementsByClassName("g-hovercard")[0].innerHTML});
		}
});
