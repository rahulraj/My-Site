$(function() {
    var toggleVisibility = $("article input");

    // toggleVisibility is hidden by default for users who don't have
    // JavaScript enabled; this is to not confuse them by showing them
    // a nonfunctional button. Make it appear now.
    toggleVisibility.css("display", "inline");
   
    var hideArticle = function(contentToHide) {
        contentToHide.fadeOut("fast");
    };

    var showArticle = function(contentToShow) {
        contentToShow.fadeIn("fast");
    }

    toggleVisibility.click(function() {
        // find the content whose visibility will be toggled
        var parentArticle = $(this).parents("article");
        var contentToChange = parentArticle.children().not("h3");
        // hide if shown, show if hidden
        if ($(this).val() === "Hide") {
            hideArticle(contentToChange); 
            $(this).val("Show");
        }
        else {
            showArticle(contentToChange);
            $(this).val("Hide");
        }
    });
});
