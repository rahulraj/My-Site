$(function() {

    // UI elements in colorScheme.html
    // these vars will not select anything if we are in a
    // different page
    var headerSelect = $("select[name=header]");
    var mainBodySelect = $("select[name=mainBody]");
    var sidebarSelect = $("select[name=sidebar]");
    var backgroundSelect = $("select[name=background]");
    var resetter = $("#resetButton");

    function ColorSet(headerHex, mainHex, sideHex, bgHex) {
        // Constructor for an object that stores a set of the hexcodes
        // for a specified color scheme
        this.headerHex = headerHex;
        this.mainHex = mainHex;
        this.sideHex = sideHex;
        this.bgHex = bgHex;
    }

    function defaultColorSet() {
        return new ColorSet('#0000FF', '#FFFFFF', '#808080',
                            '#B0C4DE');
    }

    function changeColor(selector, color) {
        // changes the backgroudn-color of the elements covered 
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
                                     mainBodySelect.val(),
                                     sidebarSelect.val(),
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
    
    mainBodySelect.change(function() {
        selectChangeEvent("#mainText", $(this).val());
    });
    
    sidebarSelect.change(function() {
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
        mainBodySelect.val(colSet.mainHex);
        sidebarSelect.val(colSet.sideHex);
        backgroundSelect.val(colSet.bgHex);

        var colorFun = changeColor;
        if (shouldAnimate) {
            colorFun = animateColor;
        }

        colorFun("header", colSet.headerHex);
        colorFun("#mainText", colSet.mainHex);
        colorFun("nav, nav li", colSet.sideHex);
        colorFun("body", colSet.bgHex);
        return true;
    }

    function resetCookie() {
        $.cookie("color", null);
    }

    resetter.click(function() {
        set(defaultColorSet(), true);
        resetCookie();
    });
    
    function setColorsFromCookie() {
        // reads color and sets the colors accordingly
        // does not animate the color change, as the page should
        // load with the changed colors, and the user should not
        // see the original ones (they have already seen an
        // animation)
        set(JSON.parse($.cookie("color")), false);
    }
    
    // only action when the document loads is to
    setColorsFromCookie();
});
