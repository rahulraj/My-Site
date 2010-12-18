function makeColorChange(headerHex, mainHex, sideHex, bgHex) {
	// jQuery css element changing (should be cross-browser)
	// Current status: STILL doesn't work in IE!
	// None of this stuff appears to work in IE!!!!
	$("#header").css("background-color", headerHex);
	$("#mainText").css("background-color", mainHex);
	$("#pageLinks").css("background-color", sideHex);
	$(body).css("background-color", bgHex);
	// LOCATION OF THE BUG:
	// I read up and realized that IE uses a different implementation of Javascript
	// that requires different syntax to accomplish the color change.
	// I found 2 examples of ways to do it on the internet, but neither seems to
	// actually work. I'm pretty sure the button listener is set up right
	// because the reset button changes the text in the menu back to the default values
	// The color's not changing in IE.
	/*header.style.setAttribute('cssText', 'backgroundColor:' + headerHex + ';', 0);
	mainText.style.setAttribute('cssText', 'backgroundColor:' + mainHex + ';', 0);
	side.style.setAttribute('cssText', 'backgroundColor:' + sideHex + ';', 0);
	bodyNode.style.setAttribute('cssText', 'backgroundColor:' + bgHex + ';', 0);*/
	/*header.style.cssText = "backgroundColor:" + headerHex + ";";
	mainText.style.cssText = "backgroundColor:" + mainHex + ";";
	side.style.cssText = "backgroundColor:" + sideHex + ";";
	bodyNode.style.cssText = "backgroundColor:" + bgHex + ";";*/
}

function changeColors() {
	var formElems = document.getElementsByTagName("select");
	var headerHex = formElems[0].value;
	var mainHex =  formElems[1].value;
	var sideHex = formElems[2].value;
	var bgHex = formElems[3].value;
	makeColorChange(headerHex, mainHex, sideHex, bgHex);
}

function toDefaultColors() {
	var defHeader = "#0000FF";
	var defMain =  "#FFFFFF";
	var defSide = "#32CD32";
	var defBg = "#B0C4DE";
	var formElems = document.getElementsByTagName("select");
	formElems[0].value = defHeader;
	formElems[1].value = defMain;
	formElems[2].value = defSide;
	formElems[3].value = defBg;
	makeColorChange(defHeader, defMain, defSide, defBg);
}

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days *24*60*60*1000));
		var expires = "; expires=" + date.toGMTString();
	} else {
		var expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

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

function eraseCookie(name) {
	createCookie(name, "", -1);
}

function saveColors() {
	var formElems = document.getElementsByTagName("select");
	var headerHex = formElems[0].value;
	var mainHex =  formElems[1].value;
	var sideHex = formElems[2].value;
	var bgHex = formElems[3].value;
	if (readCookie('colorCookie') != null) {
		eraseCookie('colorCookie');
	}
	var cookieVal = headerHex + " " + mainHex + " " + sideHex + " " + bgHex;
	createCookie('colorCookie', cookieVal, 7);
	alert("Settings saved; they will last for 7 days or until you save a new scheme.");
}
// cross-browser event listeners added to the buttons with jQuery
$("#changeColButton").click(changeColors);
$("#resetButton").click(toDefaultColors);
$("#saveButton").click(saveColors);