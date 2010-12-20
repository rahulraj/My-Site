$(function() {
    var toggleVisibility = $("article input");

    // toggleVisibility is hidden by default for users who don't have
    // JavaScript enabled; this is to not confuse them by showing them
    // a nonfunctional button. Make it appear now.
    toggleVisibility.css("display", "inline");

    toggleVisibility.click(function() {
        // find the content whose visibility will be toggled
        var parentArticle = $(this).parents("article");
        var contentToChange = parentArticle.children().not("h3");
        // hide if shown, show if hidden
        contentToChange.slideToggle();
        if ($(this).val() === "Hide") {
            $(this).val("Show");
        }
        else {
            $(this).val("Hide");
        }
    });
});
