goog.provide('ajaxify.main');
goog.require('cljs.core');
ajaxify.main.main_text_id = "#mainText";
/**
 * Provided at https://gist.github.com/1098417
 * makes a javascript map from a clojure one
 */
ajaxify.main.js_map = (function js_map(cljmap){
  var out__2609 = cljs.core.js_obj.call(null);

  cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2608_SHARP_){
    return (out__2609[cljs.core.name.call(null,cljs.core.first.call(null,p1__2608_SHARP_))] = cljs.core.second.call(null,p1__2608_SHARP_));
  }),cljmap));
  return out__2609;
});
/**
 * Extract the contents of the #mainText div from the container
 * it was loaded in. Removes the outer <div> tags (so they're
 * not duplicated).
 */
ajaxify.main.main_text_from_load_container = (function main_text_from_load_container(container){
  return container.find(ajaxify.main.main_text_id).html();
});
/**
 * Given the name of a page (like index.html), loads the #mainText
 * from that page, and puts that in the #mainText of the current
 * page.
 */
ajaxify.main.load_from_page = (function load_from_page(page_name){
  var to_load__2610 = cljs.core.str.call(null,page_name," ",ajaxify.main.main_text_id);
  var load_container__2611 = jQuery.call(null,"<span>");
  var main_text_element__2612 = jQuery.call(null,ajaxify.main.main_text_id);

  return main_text_element__2612.fadeOut("fast",(function (){
    return load_container__2611.load(to_load__2610,(function (){
      var new_main_text__2613 = ajaxify.main.main_text_from_load_container.call(null,load_container__2611);

      main_text_element__2612.html(new_main_text__2613);
      return main_text_element__2612.fadeIn("fast");
    }));
  }));
});
/**
 * Load the main text referred to by the anchor that the user clicked.
 * Updates the #mainText div asynchronously.
 */
ajaxify.main.load_content = (function load_content(anchor){
  return ajaxify.main.load_from_page.call(null,anchor.attr("href"));
});
/**
 * Extract the relative URL of the current page.
 * e.g. (current-page-relative-href) on
 * http://web.mit.edu/rahulraj/www/index.html
 * returns 'index.html'.
 */
ajaxify.main.current_page_relative_href = (function current_page_relative_href(){
  var location__2614 = window.location;
  var url__2615 = location.href;
  var parts__2616 = url__2615.split("/");

  return cljs.core.last.call(null,parts__2616);
});
ajaxify.main.name_to_href = cljs.core.ObjMap.fromObject(["Home","Projects","Classes","Work Experience","Contact","Cochlear Implants","Colors"],{"Home":"index.html","Projects":"myProjects.html","Classes":"myClasses.html","Work Experience":"workExperience.html","Contact":"contactInfo.html","Cochlear Implants":"cochlearImplants.html","Colors":"colorScheme.html"});
ajaxify.main.href_to_name = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__383__auto____2624 = (function iter__2617(s__2618){
  return (new cljs.core.LazySeq(null,false,(function (){
    var s__2618__2619 = s__2618;

    while(true){
      if(cljs.core.truth_(cljs.core.seq.call(null,s__2618__2619)))
  {var vec__2620__2621 = cljs.core.first.call(null,s__2618__2619);
    var a_key__2622 = cljs.core.nth.call(null,vec__2620__2621,0,null);
    var a_value__2623 = cljs.core.nth.call(null,vec__2620__2621,1,null);

    return cljs.core.cons.call(null,cljs.core.Vector.fromArray([a_value__2623,a_key__2622]),iter__2617.call(null,cljs.core.rest.call(null,s__2618__2619)));
  } else
  {return null;
  }
  break;
    }
  })));
});

      return iter__383__auto____2624.call(null,ajaxify.main.name_to_href);
      })());
/**
 * Find the a with the link to the given href.
 */
ajaxify.main.anchor_with_href = (function anchor_with_href(to_match){
  return jQuery.call(null,"nav").find("a").filter((function (){
    var anchor__2625 = jQuery.call(null,this);

    return cljs.core._EQ_.call(null,to_match,anchor__2625.attr("href"));
  }));
});
/**
 * Restyle the anchors after a page change. Takes
 * the href of the destination page - this anchor
 * should be unlinkified while the rest are linkified.
 */
ajaxify.main.restyle_anchors_for_page = (function restyle_anchors_for_page(destination_page_href){
  var current_page_element__2626 = jQuery.call(null,"#currentPage");
  var current_page_name__2627 = current_page_element__2626.html();
  var current_page_href__2628 = ajaxify.main.name_to_href.call(null,current_page_name__2627);
  var new_anchor__2629 = jQuery.call(null,"<a>",ajaxify.main.js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href","﷐'html"],{"﷐'href":current_page_href__2628,"﷐'html":current_page_name__2627})));
  var new_current_page_span__2630 = jQuery.call(null,"<span>",ajaxify.main.js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'id","﷐'html"],{"﷐'id":"currentPage","﷐'html":ajaxify.main.href_to_name.call(null,destination_page_href)})));
  var destination_anchor__2631 = ajaxify.main.anchor_with_href.call(null,destination_page_href);

  current_page_element__2626.replaceWith(new_anchor__2629);
  return destination_anchor__2631.replaceWith(new_current_page_span__2630);
});
/**
 * On any given page, the current page in the nav area
 * should be bolded and not an anchor, while the remaining
 * items in nav are anchors. When a new page is loaded, this
 * function updates the nav anchors to reflect this.
 */
ajaxify.main.restyle_anchors = (function restyle_anchors(clicked_anchor){
  return ajaxify.main.restyle_anchors_for_page.call(null,clicked_anchor.attr("href"));
});
/**
 * Update the history so the URL is still valid,
 * given the clicked anchor (which is now Ajaxy).
 */
ajaxify.main.update_history = (function update_history(clicked_anchor){
  var new_href__2632 = clicked_anchor.attr("href");
  var current_href__2633 = ajaxify.main.current_page_relative_href.call(null);
  var history_data__2634 = ajaxify.main.js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":current_href__2633}));

  return history.pushState(history_data__2634,current_href__2633,new_href__2632);
});
/**
 * Called on click of an anchor (the anchor is passed in)
 */
ajaxify.main.on_anchor_click = (function on_anchor_click(anchor){
  var G__2635__2636 = anchor;

  ajaxify.main.load_content.call(null,G__2635__2636);
  ajaxify.main.restyle_anchors.call(null,G__2635__2636);
  ajaxify.main.update_history.call(null,G__2635__2636);
  return G__2635__2636;
});
/**
 * Called when the popstate event occurs. Updates the page to the
 * new URL (the URL, relative to the page root, is passed in).
 */
ajaxify.main.on_pop_state = (function on_pop_state(to_href){
  var G__2637__2638 = to_href;

  ajaxify.main.load_from_page.call(null,G__2637__2638);
  ajaxify.main.restyle_anchors_for_page.call(null,G__2637__2638);
  return G__2637__2638;
});
/**
 * Entry point for the Clojurescript, to be called on load
 */
ajaxify.main.main = (function main(){
  if(cljs.core.truth_(history))
{jQuery.call(null,"nav").on("click","a",(function (event){
  var my_anchor__2639 = jQuery.call(null,this);

  if(cljs.core.truth_(cljs.core._EQ_.call(null,0,my_anchor__2639.length)))
{} else
{event.preventDefault();
  ajaxify.main.on_anchor_click.call(null,my_anchor__2639);
}
return false;
}));
return window.addEventListener("popstate",(function (event){
  var state__2640 = event.state;
  var to_href__2641 = ajaxify.main.current_page_relative_href.call(null);

  if(cljs.core.truth_((function (){var and__3546__auto____2642 = state__2640;

    if(cljs.core.truth_(and__3546__auto____2642))
  {return state__2640.href;
  } else
  {return and__3546__auto____2642;
  }
  })()))
  {return ajaxify.main.on_pop_state.call(null,to_href__2641);
  } else
{return null;
}
}),false);
} else
{return null;
}
});
goog.exportSymbol('ajaxify.main.main', ajaxify.main.main);
