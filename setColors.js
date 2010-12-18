// see if there's a way to import this from colorChanger.js
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	var length = ca.length;
	for (var i = 0; i < length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			// returns the VALUE of the cookie
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}

function makeColorChange(headerHex, mainHex, sideHex, bgHex) {
	// jQuery css element changing (SHOULD be cross-browser, but...)
	// Current status: STILL doesn't work in IE!
	$("#header").css("background-color", headerHex);
	$("#mainText").css("background-color", mainHex);
	$("#pageLinks").css("background-color", sideHex);
	$(body).css("background-color", bgHex);
}

function setColors() {
	// reads the cookies and sets the color accordingly
	if (readCookie('colorCookie')) {
		var colorSet = readCookie('colorCookie').split(" ");
		if (colorSet != null) {
			makeColorChange(colorSet[0], colorSet[1], colorSet[2], colorSet[3]);
		}
	}
}

setColors();