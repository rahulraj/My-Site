goog.provide('ajaxify.main');
goog.require('cljs.core');
ajaxify.main.main_text_id = "#mainText";
/**
* Provided at https://gist.github.com/1098417
* makes a javascript map from a clojure one
*/
ajaxify.main.make_js_map = (function make_js_map(cljmap){
var out__2404 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2403_SHARP_){
return (out__2404[cljs.core.name.call(null,cljs.core.first.call(null,p1__2403_SHARP_))] = cljs.core.second.call(null,p1__2403_SHARP_));
}),cljmap));
return out__2404;
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
var to_load__2405 = cljs.core.str.call(null,page_name," ",ajaxify.main.main_text_id);
var load_container__2406 = jQuery.call(null,"<span>");
var main_text_element__2407 = jQuery.call(null,ajaxify.main.main_text_id);

return main_text_element__2407.fadeOut("fast",(function (){
return load_container__2406.load(to_load__2405,(function (){
var new_main_text__2408 = ajaxify.main.main_text_from_load_container.call(null,load_container__2406);

main_text_element__2407.html(new_main_text__2408);
return main_text_element__2407.fadeIn("fast");
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
var location__2409 = window.location;
var url__2410 = location.href;
var parts__2411 = url__2410.split("/");

return cljs.core.last.call(null,parts__2411);
});
/**
* Given the name of a page, look up its href.
*/
ajaxify.main.name_to_href = (function name_to_href(page_name){
var name_map__2412 = cljs.core.ObjMap.fromObject(["Home","My Projects","My Classes","Work Experience","Contact Information","Cochlear Implants","Color Scheme"],{"Home":"index.html","My Projects":"myProjects.html","My Classes":"myClasses.html","Work Experience":"workExperience.html","Contact Information":"contactInfo.html","Cochlear Implants":"cochlearImplants.html","Color Scheme":"colorScheme.html"});

return name_map__2412.call(null,page_name);
});
/**
* Find the li in nav with the link to the given href.
*/
ajaxify.main.navigation_list_item_with_href = (function navigation_list_item_with_href(to_match){
return jQuery.call(null,"nav li").filter((function (){
var self__2413 = jQuery.call(null,this);
var anchor__2414 = self__2413.find("a");

return cljs.core._EQ_.call(null,to_match,anchor__2414.attr("href"));
}));
});
/**
* Restyle the anchors after a page change. Takes
* the href of the destination page - this list item
* should be unlinkified while the rest are linkified.
*/
ajaxify.main.restyle_anchors_for_page = (function restyle_anchors_for_page(destination_page_href){
var current_page_list_item__2415 = jQuery.call(null,"#currentPage");
var current_page_name__2416 = current_page_list_item__2415.html();
var current_page_href__2417 = ajaxify.main.name_to_href.call(null,current_page_name__2416);
var new_anchor__2418 = jQuery.call(null,"<a>",ajaxify.main.make_js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href","﷐'html"],{"﷐'href":current_page_href__2417,"﷐'html":current_page_name__2416})));
var destination_list_item__2419 = ajaxify.main.navigation_list_item_with_href.call(null,destination_page_href);
var destination_anchor__2420 = destination_list_item__2419.find("a");

current_page_list_item__2415.removeAttr("id").html(new_anchor__2418);
return site.addHoverEventsToAnchors.call(null,site.removeEvents.call(null,destination_list_item__2419.attr("id","currentPage").html(destination_anchor__2420.html())));
});
/**
* On any given page, the current page in the nav area
* should be bolded and not an anchor, while the remaining
* items in nav are anchors. When a new page is loaded, this
* function updates the nav list items to reflect this.
*/
ajaxify.main.restyle_anchors = (function restyle_anchors(clicked_anchor){
return ajaxify.main.restyle_anchors_for_page.call(null,clicked_anchor.attr("href"));
});
/**
* Update the history so the URL is still valid,
* given the clicked anchor (which is now Ajaxy).
*/
ajaxify.main.update_history = (function update_history(clicked_anchor){
var new_href__2421 = clicked_anchor.attr("href");
var current_href__2422 = ajaxify.main.current_page_relative_href.call(null);
var history_data__2423 = ajaxify.main.make_js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":current_href__2422}));

return history.pushState(history_data__2423,current_href__2422,new_href__2421);
});
/**
* Called on click of an anchor (the anchor is passed in)
*/
ajaxify.main.on_anchor_click = (function on_anchor_click(anchor){
var G__2424__2425 = anchor;

ajaxify.main.load_content.call(null,G__2424__2425);
ajaxify.main.restyle_anchors.call(null,G__2424__2425);
ajaxify.main.update_history.call(null,G__2424__2425);
return G__2424__2425;
});
/**
* Called when the popstate event occurs. Updates the page to the
* new URL (the URL, relative to the page root, is passed in).
*/
ajaxify.main.on_pop_state = (function on_pop_state(to_href){
var G__2426__2427 = to_href;

ajaxify.main.load_from_page.call(null,G__2426__2427);
ajaxify.main.restyle_anchors_for_page.call(null,G__2426__2427);
return G__2426__2427;
});
/**
* Entry point for the Clojurescript, to be called on load
*/
ajaxify.main.main = (function main(){
if(cljs.core.truth_(history))
{jQuery.call(null,"nav").delegate("li","click",(function (event){
var my_anchor__2428 = jQuery.call(null,this).find("a");

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,my_anchor__2428.length)))
{} else
{event.preventDefault();
ajaxify.main.on_anchor_click.call(null,my_anchor__2428);
}
return false;
}));
return window.addEventListener("popstate",(function (event){
var state__2429 = event.state;
var to_href__2430 = ajaxify.main.current_page_relative_href.call(null);

if(cljs.core.truth_(state__2429))
{if(cljs.core.truth_(state__2429.href))
{ajaxify.main.on_pop_state.call(null,to_href__2430);
} else
{}
} else
{}
return false;
}));
} else
{return null;
}
});
goog.exportSymbol('ajaxify.main.main', ajaxify.main.main);
