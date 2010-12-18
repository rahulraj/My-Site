$(document).ready(function(){

    var headerSelect = $("select[name=header]");
    var mainBodySelect = $("select[name=mainBody]");
    var sidebarSelect = $("select[name=sidebar]");
    var backgroundSelect = $("select[name=background]");
    var resetter = $("#resetButton");

    var colors = {
        'headerHex': '',
        'mainHex': '',
        'sideHex': '',
        'bgHex': '' 
    }
    
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
        // highlightNav.js
        $("nav li").css("background-color", $(this).val());
        save();
    });
    
    backgroundSelect.change(function(){
        $("body").css("background-color", $(this).val());
        save();
    });

    function save(){
        colors.headerHex = headerSelect.val();
        colors.mainHex = mainBodySelect.val();
        colors.sideHex = sidebarSelect.val();
        colors.bgHex = backgroundSelect.val();
        $.cookie("colorCookie",JSON.stringify(colors),{expires: 7});
    }
    
    function remove(){
        $.cookie("colorCookie",null);
    }
    
    function read(){
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
        $("nav li").css("background-color", n.sideHex);

        $("body").css("background-color", n.bgHex);
        return true;
    }
    
    resetter.click(function(){
        colors.headerHex = '#0000FF'; 
        colors.mainHex = '#FFFFFF'; 
        colors.sideHex = '#808080'; 
        colors.bgHex = '#B0C4DE'; 
        
        set(colors);
        remove();
    });

    read();
});
