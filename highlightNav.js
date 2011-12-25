var site = {};

site.navItemsWithAnchors = function() {
  return $('nav').find('li').filter(':has(a)');
};

site.removeEvents = function() {
  var navItems = $('nav li');
  navItems.trigger('mouseleave');
  navItems.unbind('click');
  navItems.unbind('mouseenter');
  navItems.unbind('mouseleave');
  navItems.css('cursor', 'default');
};

site.addHoverEventsToAnchors = function() {
  /*
   * This script uses jQuery to add a highlighting visual
   * effect to the navigation sidebar. When the user's mouse hovers
   * over one of the links in the sidebar, the li that the
   * link is part has its background-color highlighted with
   * highlightCol.
   */
  var navItemsWithAnchors = site.navItemsWithAnchors();
  var highlightCol = "#FF6600"; // orange
  // Make them be highlighted on mouseover
  navItemsWithAnchors.bind('mouseenter', function() {
        // Change to highlightCol, using animate for a
        // fade-in effect, with help from the color plugin
        // to jQuery
        var thisItem = $(this); // cache $(this)
        thisItem.stop(); // prevent repeated fadeins/outs from queueing
        thisItem.animate({backgroundColor: highlightCol}, 'fast');
  });
  navItemsWithAnchors.bind('mouseleave', function() {
        // Get the value of the old background color 
        var sidebarCol = $("nav").css("background-color");
        // NOTE: I had to get the color in this function and
        // not elsewhere since the color might have changed
        // since the page loaded if the user changes it
        // using colors.js
        // Revert to it 
        var thisItem = $(this);
        thisItem.stop();
        thisItem.animate({backgroundColor: sidebarCol}, 'fast');
  });

  /*
  // Allow the user to click the li's to follow the link
  navItemsWithAnchors.bind('click', function() {
    var myAnchor = $(this).children('a');
    myAnchor.trigger('click');
  });
  */
  // Since the li's are clickable, change the cursor to the
  // pointer to reflect this
  navItemsWithAnchors.css("cursor", "pointer");
};

$(function() {
  site.addHoverEventsToAnchors();
});
