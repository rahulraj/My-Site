$(function() {
    // NOT to be available to end-users
    // This script is just a quick and dirty way for me to
    // experiment with the background colors and look for a
    // scheme that looks good
    var headerInp = $("input[name=header]");
    var mainInp = $("input[name=mainBody]");
    var sideInp = $("input[name=sidebar]");
    var bgInp = $("input[name=background]");
    var enterButton = $("#enterButton");

    enterButton.click(function() {
        var headerVal = headerInp.val();
        var mainVal = mainInp.val();
        var sideVal = sideInp.val();
        var bgVal = bgInp.val();

        if (headerVal !== "") {
            $("header").css("background-color", headerVal);
        }
        if (mainVal !== "") {
            $("#mainBody").css("background-color", mainVal); 
        }
        if (sideVal !== "") {
            $("nav, nav li").css("background-color", sideVal);
        }
        if (bgVal !== "") {
            $("body").css("background-color", bgVal);
        }
    });
});
