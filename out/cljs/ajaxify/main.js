goog.provide('ajaxify.main');
goog.require('cljs.core');
ajaxify.main.main_text_id = "#mainText";
/**
* Provided at https://gist.github.com/1098417
* makes a javascript map from a clojure one
*/
ajaxify.main.make_js_map = (function make_js_map(cljmap){
var out__2382 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2381_SHARP_){
return (out__2382[cljs.core.name.call(null,cljs.core.first.call(null,p1__2381_SHARP_))] = cljs.core.second.call(null,p1__2381_SHARP_));
}),cljmap));
return out__2382;
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
var to_load__2383 = cljs.core.str.call(null,page_name," ",ajaxify.main.main_text_id);
var load_container__2384 = jQuery.call(null,"<span>");
var main_text_element__2385 = jQuery.call(null,ajaxify.main.main_text_id);

return main_text_element__2385.fadeOut("fast",(function (){
return load_container__2384.load(to_load__2383,(function (){
var new_main_text__2386 = ajaxify.main.main_text_from_load_container.call(null,load_container__2384);

main_text_element__2385.html(new_main_text__2386);
return main_text_element__2385.fadeIn("fast");
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
var location__2387 = window.location;
var url__2388 = location.href;
var parts__2389 = url__2388.split("/");

return cljs.core.last.call(null,parts__2389);
});
/**
* Given the name of a page, look up its href.
*/
ajaxify.main.name_to_href = (function name_to_href(page_name){
var name_map__2390 = cljs.core.ObjMap.fromObject(["Home","My Projects","My Classes","Work Experience","Contact Information","Cochlear Implants","Color Scheme"],{"Home":"index.html","My Projects":"myProjects.html","My Classes":"myClasses.html","Work Experience":"workExperience.html","Contact Information":"contactInfo.html","Cochlear Implants":"cochlearImplants.html","Color Scheme":"colorScheme.html"});

return name_map__2390.call(null,page_name);
});
/**
* Find the li in nav with the link to the given href.
*/
ajaxify.main.navigation_list_item_with_href = (function navigation_list_item_with_href(to_match){
return jQuery.call(null,"nav li").filter((function (){
var self__2391 = jQuery.call(null,this);
var anchor__2392 = self__2391.find("a");

return cljs.core._EQ_.call(null,to_match,anchor__2392.attr("href"));
}));
});
/**
* Restyle the anchors after a page change. Takes
* the href of the destination page - this list item
* should be unlinkified while the rest are linkified.
*/
ajaxify.main.restyle_anchors_for_page = (function restyle_anchors_for_page(destination_page_href){
var current_page_list_item__2393 = jQuery.call(null,"#currentPage");
var current_page_name__2394 = current_page_list_item__2393.html();
var current_page_href__2395 = ajaxify.main.name_to_href.call(null,current_page_name__2394);
var new_anchor__2396 = jQuery.call(null,"<a>",ajaxify.main.make_js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href","﷐'html"],{"﷐'href":current_page_href__2395,"﷐'html":current_page_name__2394})));
var destination_list_item__2397 = ajaxify.main.navigation_list_item_with_href.call(null,destination_page_href);
var destination_anchor__2398 = destination_list_item__2397.find("a");

current_page_list_item__2393.removeAttr("id").html(new_anchor__2396);
return site.addHoverEventsToAnchors.call(null,site.removeEvents.call(null,destination_list_item__2397.attr("id","currentPage").html(destination_anchor__2398.html())));
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
var new_href__2399 = clicked_anchor.attr("href");
var current_href__2400 = ajaxify.main.current_page_relative_href.call(null);
var history_data__2401 = ajaxify.main.make_js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":current_href__2400}));

return history.pushState(history_data__2401,current_href__2400,new_href__2399);
});
/**
* Called on click of an anchor (the anchor is passed in)
*/
ajaxify.main.on_anchor_click = (function on_anchor_click(anchor){
var G__2402__2403 = anchor;

ajaxify.main.load_content.call(null,G__2402__2403);
ajaxify.main.restyle_anchors.call(null,G__2402__2403);
ajaxify.main.update_history.call(null,G__2402__2403);
return G__2402__2403;
});
/**
* Called when the popstate event occurs. Updates the page to the
* new URL (the URL, relative to the page root, is passed in).
*/
ajaxify.main.on_pop_state = (function on_pop_state(to_href){
var G__2404__2405 = to_href;

ajaxify.main.load_from_page.call(null,G__2404__2405);
ajaxify.main.restyle_anchors_for_page.call(null,G__2404__2405);
return G__2404__2405;
});
/**
* Entry point for the Clojurescript, to be called on load
*/
ajaxify.main.main = (function main(){
jQuery.call(null,"nav").delegate("li","click",(function (event){
var my_anchor__2406 = jQuery.call(null,this).find("a");

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,my_anchor__2406.length)))
{} else
{event.preventDefault();
ajaxify.main.on_anchor_click.call(null,my_anchor__2406);
}
return false;
}));
return window.addEventListener("popstate",(function (event){
var state__2407 = event.state;
var to_href__2408 = ajaxify.main.current_page_relative_href.call(null);

if(cljs.core.truth_(state__2407))
{if(cljs.core.truth_(state__2407.href))
{ajaxify.main.on_pop_state.call(null,to_href__2408);
} else
{}
} else
{}
return false;
}));
});
goog.exportSymbol('ajaxify.main.main', ajaxify.main.main);
