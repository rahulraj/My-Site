$(function() {
  var toggleVisibility = $('section').find('h3').find('a');

  toggleVisibility.on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    // find the content whose visibility will be toggled
    var thisAnchor = $(this);
    var parentSection = thisAnchor.parents('section');
    // leave the title in the h3 tags showing so the user will know
    // what will appear when they click Show
    var contentToChange = parentSection.children().not('h3');
    // hide if shown, show if hidden
    // jQuery's slideToggle method does the heavy lifting
    contentToChange.slideToggle();
    // Change the anchor's inner HTML value to be the function it will perform
    var newHtml = thisAnchor.html() === 'Hide' ? 'Show' : 'Hide';
    thisAnchor.html(newHtml);
    return false;
  });
});
