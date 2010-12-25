$(function() {

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
        $.cookie("colorCookie", JSON.stringify(newColors),{expires: 7});
    }
    
    headerSelect.change(function() {
        animateColor("header", $(this).val());
        save();
    });
    
    mainBodySelect.change(function() {
        animateColor("#mainText", $(this).val());
        save();
    });
    
    sidebarSelect.change(function() {
        // In case the user highlighted nav li's via
        // highlightNav.js, change them too
        animateColor("nav, nav li", $(this).val());
        save();
    });
    
    backgroundSelect.change(function() {
        animateColor("body", $(this).val());
        save();
    });

    function set(colSet) {
        // sets the selects' names and the background colors as
        // specified by colSet
        var defaultColors = defaultColorSet(); 
        colSet = $.extend(defaultColors, colSet);//remove null values just in case

        headerSelect.val(colSet.headerHex);
        mainBodySelect.val(colSet.mainHex);
        sidebarSelect.val(colSet.sideHex);
        backgroundSelect.val(colSet.bgHex);

        changeColor("header", colSet.headerHex);
        changeColor("#mainText", colSet.mainHex);
        changeColor("nav, nav li", colSet.sideHex);
        changeColor("body", colSet.bgHex);
        /*$("header").css("background-color", colSet.headerHex);
        $("#mainText").css("background-color", colSet.mainHex);
        $("nav").css("background-color", colSet.sideHex);

        // In case the user highlighted nav li's via highlightNav.js
        // nav li's CSS overrides nav's so it must be updated manually
        $("nav li").css("background-color", colSet.sideHex);

        $("body").css("background-color", colSet.bgHex);*/
        return true;
    }

    function resetCookie() {
        $.cookie("colorCookie", null);
    }

    resetter.click(function() {
        var resetColors = defaultColorSet();
        set(resetColors);
        resetCookie();
    });
    
    function setColorsFromCookie() {
        // reads colorCookie and sets the colors accordingly
        set(JSON.parse($.cookie("colorCookie")));
    }
    
    setColorsFromCookie();
});
