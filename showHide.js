$(function() {
    var toggleVisibility = $("h3").find("a");

    // toggleVisibility is hidden by default for users who don't have
    // JavaScript enabled; this is to not confuse them by showing them
    // a nonfunctional button. Make it appear now.
    toggleVisibility.css("display", "inline");

    toggleVisibility.click(function() {
        // find the content whose visibility will be toggled
        var parentArticle = $(this).parents("article");
        // leave the title in the h3 tags showing so the user will know
        // what will appear when they click Show
        var contentToChange = parentArticle.children().not("h3");
        // hide if shown, show if hidden
        // jQuery's slideToggle method does the heavy lifting
        contentToChange.slideToggle();
        // Change the button's value to be the function it will perform
        if ($(this).val() === "Hide") {
            $(this).val("Show");
        }
        else {
            $(this).val("Hide");
        }
    });
});
