function sentto(info)
{
	alert("vuri");
}

chrome.browserAction.onClicked.addListener(function (tab) {
		chrome.tabs.sendMessage({text: 'getInfo'}, tab.id, sentto);
		});
alert("vfhuj");
