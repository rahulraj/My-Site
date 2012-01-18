$(function() {
  var toggleVisibility = $('#mainText h3 a');

  // toggleVisibility is hidden by default for users who don't have
  // JavaScript enabled; this is to not confuse them by showing them
  // a nonfunctional link. Make it appear now.
  toggleVisibility.css("display", "inline");

  $('#mainText').on('click', 'h3 a', function(event) {
    event.preventDefault();
    event.stopPropagation();
    // find the content whose visibility will be toggled
    var thisItem = $(this);
    var parentArticle = thisItem.parents("article");
    // leave the title in the h3 tags showing so the user will know
    // what will appear when they click Show
    var contentToChange = parentArticle.children().not("h3");
    // hide if shown, show if hidden
    // jQuery's slideToggle method does the heavy lifting
    contentToChange.slideToggle();
    // Change the anchor's inner HTML value to be the function it will perform
    var newHtml = thisItem.html() === "Hide" ? "Show" : "Hide";
    thisItem.html(newHtml);
    return false;
  });
});
