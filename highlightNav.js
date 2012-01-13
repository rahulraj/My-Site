var site = {};

site.navItemsWithAnchors = function() {
  return $('nav').find('li').filter(':has(a)');
};

site.removeEvents = function() {
  $('nav li').
      trigger('mouseleave').
      off('click').
      off('mouseenter').
      off('mouseleave').
      css('cursor', 'default');
};

site.addHoverEventsToAnchors = function() {
  /*
   * This script uses jQuery to add a highlighting visual
   * effect to the navigation sidebar. When the user's mouse hovers
   * over one of the links in the sidebar, the li that the
   * link is part has its background-color highlighted with
   * highlightColor.
   */
  var navItemsWithAnchors = site.navItemsWithAnchors();
  var highlightColor = "#FF6600"; // orange
  // Make them be highlighted on mouseover
  navItemsWithAnchors.on('mouseenter', function() {
        // Change to highlightColor, using animate for a
        // fade-in effect, with help from the color plugin
        // to jQuery
        $(this).
            stop(). // prevent repeated fadeins/outs from queueing
            animate({backgroundColor: highlightColor}, 'fast');
  });
  navItemsWithAnchors.on('mouseleave', function() {
        // Get the value of the old background color 
        var sidebarColor = $("nav").css("background-color");
        // NOTE: I had to get the color in this function and
        // not elsewhere since the color might have changed
        // via colors.js
        // Revert to it 
        $(this).
            stop().
            animate({backgroundColor: sidebarColor}, 'fast');
  });

  // Since the li's are clickable, change the cursor to the
  // pointer to reflect this
  navItemsWithAnchors.css("cursor", "pointer");
};

$(function() {
  site.addHoverEventsToAnchors();
});
