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
    
    headerSelect.change(function() {
        $("header").css("background-color", $(this).val());
        save();
    });
    
    mainBodySelect.change(function() {
        $("#mainText").css("background-color", $(this).val());
        save();
    });
    
    sidebarSelect.change(function() {
        $("nav").css("background-color", $(this).val());
        // In case the user highlighted nav li's via
        // highlightNav.js, change them too
        $("nav li").css("background-color", $(this).val());
        save();
    });
    
    backgroundSelect.change(function() {
        $("body").css("background-color", $(this).val());
        save();
    });

    resetter.click(function() {
        var resetColors = defaultColorSet();
        set(resetColors);
        resetCookie();
    });

    function save() {
        var newColors = new ColorSet(headerSelect.val(),
                                     mainBodySelect.val(),
                                     sidebarSelect.val(),
                                     backgroundSelect.val());
        $.cookie("colorCookie", JSON.stringify(newColors),{expires: 7});
    }
    
    function resetCookie() {
        $.cookie("colorCookie", null);
    }
    
    function setColorsFromCookie() {
        // reads colorCookie and sets the colors accordingly
        set(JSON.parse($.cookie("colorCookie")));
    }
    
    function set(colSet) {
        // sets the selects' names and the background colors as
        // specified by colSet
        var defaultColors = defaultColorSet(); 
        colSet = $.extend(defaultColors, colSet);//remove null values just in case

        headerSelect.val(colSet.headerHex);
        mainBodySelect.val(colSet.mainHex);
        sidebarSelect.val(colSet.sideHex);
        backgroundSelect.val(colSet.bgHex);

        $("header").css("background-color", colSet.headerHex);
        $("#mainText").css("background-color", colSet.mainHex);
        $("nav").css("background-color", colSet.sideHex);

        // In case the user highlighted nav li's via highlightNav.js
        // nav li's CSS overrides nav's so it must be updated manually
        $("nav li").css("background-color", colSet.sideHex);

        $("body").css("background-color", colSet.bgHex);
        return true;
    }

    setColorsFromCookie();
});
