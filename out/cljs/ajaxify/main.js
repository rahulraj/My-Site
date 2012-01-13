goog.provide('ajaxify.main');
goog.require('cljs.core');
ajaxify.main.main_text_id = "#mainText";
/**
* Provided at https://gist.github.com/1098417
* makes a javascript map from a clojure one
*/
ajaxify.main.make_js_map = (function make_js_map(cljmap){
var out__4003 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4002_SHARP_){
return (out__4003[cljs.core.name.call(null,cljs.core.first.call(null,p1__4002_SHARP_))] = cljs.core.second.call(null,p1__4002_SHARP_));
}),cljmap));
return out__4003;
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
var to_load__4004 = cljs.core.str.call(null,page_name," ",ajaxify.main.main_text_id);
var load_container__4005 = jQuery.call(null,"<span>");
var main_text_element__4006 = jQuery.call(null,ajaxify.main.main_text_id);

return main_text_element__4006.fadeOut("fast",(function (){
return load_container__4005.load(to_load__4004,(function (){
var new_main_text__4007 = ajaxify.main.main_text_from_load_container.call(null,load_container__4005);

main_text_element__4006.html(new_main_text__4007);
return main_text_element__4006.fadeIn("fast");
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
var location__4008 = window.location;
var url__4009 = location.href;
var parts__4010 = url__4009.split("/");

return cljs.core.last.call(null,parts__4010);
});
/**
* Given the name of a page, look up its href.
*/
ajaxify.main.name_to_href = (function name_to_href(page_name){
var name_map__4011 = cljs.core.ObjMap.fromObject(["Home","My Projects","My Classes","Work Experience","Contact Information","Cochlear Implants","Color Scheme"],{"Home":"index.html","My Projects":"myProjects.html","My Classes":"myClasses.html","Work Experience":"workExperience.html","Contact Information":"contactInfo.html","Cochlear Implants":"cochlearImplants.html","Color Scheme":"colorScheme.html"});

return name_map__4011.call(null,page_name);
});
/**
* Find the li in nav with the link to the given href.
*/
ajaxify.main.navigation_list_item_with_href = (function navigation_list_item_with_href(to_match){
return jQuery.call(null,"nav li").filter((function (){
var self__4012 = jQuery.call(null,this);
var anchor__4013 = self__4012.find("a");

return cljs.core._EQ_.call(null,to_match,anchor__4013.attr("href"));
}));
});
/**
* Restyle the anchors after a page change. Takes
* the href of the destination page - this list item
* should be unlinkified while the rest are linkified.
*/
ajaxify.main.restyle_anchors_for_page = (function restyle_anchors_for_page(destination_page_href){
var current_page_list_item__4014 = jQuery.call(null,"#currentPage");
var current_page_name__4015 = current_page_list_item__4014.html();
var current_page_href__4016 = ajaxify.main.name_to_href.call(null,current_page_name__4015);
var new_anchor__4017 = jQuery.call(null,"<a>",ajaxify.main.make_js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href","﷐'html"],{"﷐'href":current_page_href__4016,"﷐'html":current_page_name__4015})));
var destination_list_item__4018 = ajaxify.main.navigation_list_item_with_href.call(null,destination_page_href);
var destination_anchor__4019 = destination_list_item__4018.find("a");

current_page_list_item__4014.removeAttr("id").html(new_anchor__4017);
return site.addHoverEventsToAnchors.call(null,site.removeEvents.call(null,destination_list_item__4018.attr("id","currentPage").html(destination_anchor__4019.html())));
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
var new_href__4020 = clicked_anchor.attr("href");
var current_href__4021 = ajaxify.main.current_page_relative_href.call(null);
var history_data__4022 = ajaxify.main.make_js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":current_href__4021}));

return history.pushState(history_data__4022,current_href__4021,new_href__4020);
});
/**
* Called on click of an anchor (the anchor is passed in)
*/
ajaxify.main.on_anchor_click = (function on_anchor_click(anchor){
var G__4023__4024 = anchor;

ajaxify.main.load_content.call(null,G__4023__4024);
ajaxify.main.restyle_anchors.call(null,G__4023__4024);
ajaxify.main.update_history.call(null,G__4023__4024);
return G__4023__4024;
});
/**
* Called when the popstate event occurs. Updates the page to the
* new URL (the URL, relative to the page root, is passed in).
*/
ajaxify.main.on_pop_state = (function on_pop_state(to_href){
var G__4025__4026 = to_href;

ajaxify.main.load_from_page.call(null,G__4025__4026);
ajaxify.main.restyle_anchors_for_page.call(null,G__4025__4026);
return G__4025__4026;
});
/**
* Entry point for the Clojurescript, to be called on load
*/
ajaxify.main.main = (function main(){
if(cljs.core.truth_(history))
{jQuery.call(null,"nav").on("click","li",(function (event){
var my_anchor__4027 = jQuery.call(null,this).find("a");

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,my_anchor__4027.length)))
{} else
{event.preventDefault();
ajaxify.main.on_anchor_click.call(null,my_anchor__4027);
}
return false;
}));
return window.addEventListener("popstate",(function (event){
var state__4028 = event.state;
var to_href__4029 = ajaxify.main.current_page_relative_href.call(null);

if(cljs.core.truth_((function (){var and__3546__auto____4030 = state__4028;

if(cljs.core.truth_(and__3546__auto____4030))
{return state__4028.href;
} else
{return and__3546__auto____4030;
}
})()))
{return ajaxify.main.on_pop_state.call(null,to_href__4029);
} else
{return null;
}
}),false);
} else
{return null;
}
});
goog.exportSymbol('ajaxify.main.main', ajaxify.main.main);
