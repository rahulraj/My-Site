goog.require('ajaxify.main');
$(function() {
  $('nav').delegate('li', 'click', function(event) {
    var myAnchor = $(this).find('a');
    if (myAnchor.length === 0) {
      // no anchor (must be current page)
      return false;
    }
    event.preventDefault();
    ajaxify.main.on_anchor_click(myAnchor);
    return false;
  });

  window.addEventListener('popstate', function(event) {
    var state = event.state;
    if (!state.href) {
      // Chromium (and probably Chrome) fire this event on the initial
      // load of the page (href will not be populated). Just ignore it
      // in that case.
      return;
    }
    var currentHref = ajaxify.main.current_page_relative_href();
    console.log('poppedHref ' + currentHref);
    var forgedState = {href: currentHref};
    ajaxify.main.on_pop_state(forgedState); 
  }, false);
});
