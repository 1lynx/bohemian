function ex(info)
{
	if (info != undefined)
	{
		document.getElementById("ok").addEventListener("click", envoi, false);
		document.getElementById("lien_chaine").href = "https://www.youtube.com" + info.url;
		document.getElementById("img").src = info.img;
		document.getElementById("nchaine").innerHTML = info.channel;
		document.getElementById("moins").addEventListener("click", remcent, false);
		document.getElementById("plus").addEventListener("click", addcent, false);
		document.getElementById('channel').style.display = 'block';
	}
	else
		document.getElementById("nchaine").innerHTML = "Pas de chaine";
}

function load_done()
{
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
		chrome.tabs.sendMessage(tabs[0].id, {text: "getInfo"}, ex);});
}

function addcent()
{

	var el = document.getElementById("amnt");
	var val = parseFloat(el.value);
	if (val < 10)
		val += 0.05;
	el.value = Math.round(val*100)/100;
}

function remcent()
{
	var el = document.getElementById("amnt");
	var val = parseFloat(el.value);
	if (val > 0)
		val -= 0.05;
	el.value = Math.round(val*100)/100;
}
function envoi()
{
	alert(document.getElementById("amnt").value + " euros envoye a " + document.getElementById("nchaine").innerHTML);
}

document.addEventListener("DOMContentLoaded", load_done, false);
