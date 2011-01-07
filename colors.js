$(function() {

    // The link to colorScheme.js is hidden by default
    // to not confuse users who don't have JavaScript
    // enabled. Make it visible now
    $('li a[href="colorScheme.html"]').css("display", "inline");

    // UI elements in colorScheme.html
    // these vars will not select anything if we are in a
    // different page
    var headerSelect = $("#headerSelect");
    var titleSelect = $("#titleSelect");
    var mainBodySelect = $("#mainBodySelect");
    var navSelect = $("#navSelect");
    var backgroundSelect = $("#backgroundSelect");

    // read the options for the selects into an array to use for
    // the random color button
    var selectOptions = [];
    $('#headerSelect > option').each(function(i, selected) {
        selectOptions[i] = $(selected).val();
    });

    function ColorSet(headerHex, titleHex, mainHex, sideHex, bgHex) {
        // Constructor for an object that stores a set of the hexcodes
        // for a specified color scheme
        this.headerHex = headerHex;
        this.titleHex = titleHex;
        this.mainHex = mainHex;
        this.sideHex = sideHex;
        this.bgHex = bgHex;
    }

    function defaultColorSet() {
        return new ColorSet('#0099FF', '#FFCC00', '#FFFFFF',
                            '#808080', '#B0C4DE');
    }

    function changeColor(selector, color) {
        // changes the background-color of the elements covered 
        // by selector to color
        $(selector).css("background-color", color);
    }

    function animateColor(selector, color) {
        // like changeColor, but does the change with an
        // animation, using jquery.colors.js
        // we only animate the initial change of color when the
        // user first picks the new color, all other changes of
        // the css value are done instantly with changeColor
        $(selector).animate({backgroundColor: color}, 'slow');
    }

    function save() {
        var newColors = new ColorSet(headerSelect.val(),
                                     titleSelect.val(),
                                     mainBodySelect.val(),
                                     navSelect.val(),
                                     backgroundSelect.val());
        $.cookie("color", JSON.stringify(newColors),{expires: 7});
    }

    function selectChangeEvent(selector, color)
    {
        // event that is called when one of the selects changes. 
        // The elements specified by selector animate a color
        // change to color, and the cookie is updated
        // accordingly
        animateColor(selector, color);
        save();
    }

    headerSelect.change(function() {
        selectChangeEvent("header", $(this).val());
    });
    
    titleSelect.change(function() {
        selectChangeEvent("h1", $(this).val());
    });

    mainBodySelect.change(function() {
        selectChangeEvent("#mainText", $(this).val());
    });
    
    navSelect.change(function() {
        // In case the user highlighted nav li's via
        // highlightNav.js, change them too
        selectChangeEvent("nav, nav li", $(this).val());
    });
    
    backgroundSelect.change(function() {
        selectChangeEvent("body", $(this).val());
    });

    function set(colSet, shouldAnimate) {
        // sets the selects' names and the background colors as
        // specified by colSet, animates if shouldAnimate is
        // true, else just changes the colors
        colSet = $.extend(defaultColorSet(), colSet);//remove null values just in case
        
        headerSelect.val(colSet.headerHex);
        titleSelect.val(colSet.titleHex);
        mainBodySelect.val(colSet.mainHex);
        navSelect.val(colSet.sideHex);
        backgroundSelect.val(colSet.bgHex);

	var colorFun = shouldAnimate ? animateColor : changeColor;

        colorFun("header", colSet.headerHex);
        colorFun("h1", colSet.titleHex);
        colorFun("#mainText", colSet.mainHex);
        colorFun("nav, nav li", colSet.sideHex);
        colorFun("body", colSet.bgHex);
        return true;
    }

    function resetCookie() {
        $.cookie("color", null);
    }

    $("#resetButton").click(function() {
        set(defaultColorSet(), true);
        resetCookie();
    });
    
    function randomNum(maxVal) {
        return Math.floor(Math.random() * maxVal);
    }

    $("#listRandom").click(function() {
        var randomColors = []; 
        var numOptions = selectOptions.length;
        for (var i = 0; i < numOptions; i++) {
            randomColors[i] = selectOptions[randomNum(numOptions)];
        }
        var randCols = new ColorSet(randomColors[0], randomColors[1],
                                    randomColors[2], randomColors[3],
                                    randomColors[4]);
        set(randCols, true);
        save();
    });

    $("#expRandom").click(function() {

        function randRGBVal() {
            // FF in hex:
            var maxVal = 255;
            var colHex = randomNum(maxVal).toString(16); 
            // pad it with leading 0's if needed
            while (colHex.length < 2) {
                colHex = "0" + colHex;
            }
            return colHex;
        }

        function getColorHex() {
            var red = randRGBVal();
            var green = randRGBVal();
            var blue = randRGBVal();
            return "#" + red + green + blue;
        }
	var newCols = [];
	$("select").each(function(index) {
	    var col = getColorHex().toUpperCase();
	    var self = $(this);
	    self.append('<option value=' + col +
			   '>' + col + '</option>');
	    self.val(col);
	    newCols[index] = col;
	});
	set(new ColorSet(newCols[0], newCols[1],
			 newCols[2], newCols[3],
			 newCols[4]), true);
        save();
    });
    
    function setColorsFromCookie() {
        // reads color and sets the colors accordingly
        // does NOT animate the color change, as the page should
        // load with the changed colors, and the user should not
        // see the original ones (they have already seen an
        // animation)
        set(JSON.parse($.cookie("color")), false);
    }

    setColorsFromCookie();

});
