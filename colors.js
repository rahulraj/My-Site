$(function() {

    var headerSelect = $("select[name=header]");
    var mainBodySelect = $("select[name=mainBody]");
    var sidebarSelect = $("select[name=sidebar]");
    var backgroundSelect = $("select[name=background]");
    var resetter = $("#resetButton");

    var defaultColors = {
        'headerHex': '#0000FF',
        'mainHex': '#FFFFFF',
        'sideHex': '#808080',
        'bgHex': '#B0C4DE'  
    }
    
    headerSelect.change(function(){
        $("header").css("background-color", $(this).val());
        save();
    });
    
    mainBodySelect.change(function(){
        $("#mainText").css("background-color", $(this).val());
        save();
    });
    
    sidebarSelect.change(function(){
        $("nav").css("background-color", $(this).val());
        // In case the user highlighted nav li's via
        // highlightNav.js, change them too
        $("nav li").css("background-color", $(this).val());
        save();
    });
    
    backgroundSelect.change(function(){
        $("body").css("background-color", $(this).val());
        save();
    });

    function save(){
        var newColors = {
            'headerHex' : headerSelect.val(),
            'mainHex' : mainBodySelect.val(),
            'sideHex' : sidebarSelect.val(),
            'bgHex' : backgroundSelect.val()
        }
        $.cookie("colorCookie",JSON.stringify(newColors),{expires: 7});
    }
    
    function resetCookie(){
        $.cookie("colorCookie",null);
    }
    
    function readCookie(){
        set(JSON.parse($.cookie("colorCookie")));
    }
    
    function set(n){
        n = $.extend(defaultColors,n);//remove null values just in case

        headerSelect.val(n.headerHex);
        mainBodySelect.val(n.mainHex);
        sidebarSelect.val(n.sideHex);
        backgroundSelect.val(n.bgHex);

        $("header").css("background-color", n.headerHex);
        $("#mainText").css("background-color", n.mainHex);
        $("nav").css("background-color", n.sideHex);

        // In case the user highlighted nav li's via highlightNav.js
        // nav li's CSS overrides nav's so it must be updated manually
        $("nav li").css("background-color", n.sideHex);

        $("body").css("background-color", n.bgHex);
        return true;
    }
    
    resetter.click(function(){
        var resetColors = {
            'headerHex' : '#0000FF',
            'mainHex' : '#FFFFFF',
            'sideHex' : '#808080',
            'bgHex' : '#B0C4DE'
        }
        
        set(resetColors);
        resetCookie();
    });

    readCookie();
});
