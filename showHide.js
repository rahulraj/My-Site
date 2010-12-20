$(function() {
    var articles = $("article");
    var toggleVisibility = $("article input");

    // toggleVisibility is hidden by default for those who don't have
    // JavaScript enabled; make it appear
    toggleVisibility.css("display", "inline");
   
    var hideArticle = function(clickedButton) {
        // clickedButton is a jQuery object wrapping the hide button
        // that was clicked
        var parentArticle = clickedButton.parent("article");
        var psInParent = parentArticle.children("p");
        psInParent.fadeOut("fast");
    };

    var showArticle = function(clickedButton) {
        var parentArticle = clickedButton.parent("article");
        var psInParent = parentArticle.children("p");
        psInParent.fadeIn("fast");
    }

    toggleVisibility.click(function() {
        // hide if shown, show if hidden
        if ($(this).val() === "Hide") {
            hideArticle($(this)); 
            $(this).val("Show");
        }
        else {
            showArticle($(this));
            $(this).val("Hide");
        }
    });
});
