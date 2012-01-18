goog.provide('ajaxify.main');
goog.require('cljs.core');
ajaxify.main.main_text_id = "#mainText";
/**
* Provided at https://gist.github.com/1098417
* makes a javascript map from a clojure one
*/
ajaxify.main.js_map = (function js_map(cljmap){
var out__2685 = cljs.core.js_obj.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2684_SHARP_){
return (out__2685[cljs.core.name.call(null,cljs.core.first.call(null,p1__2684_SHARP_))] = cljs.core.second.call(null,p1__2684_SHARP_));
}),cljmap));
return out__2685;
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
var to_load__2686 = cljs.core.str.call(null,page_name," ",ajaxify.main.main_text_id);
var load_container__2687 = jQuery.call(null,"<span>");
var main_text_element__2688 = jQuery.call(null,ajaxify.main.main_text_id);

return main_text_element__2688.fadeOut("fast",(function (){
return load_container__2687.load(to_load__2686,(function (){
var new_main_text__2689 = ajaxify.main.main_text_from_load_container.call(null,load_container__2687);

main_text_element__2688.html(new_main_text__2689);
return main_text_element__2688.fadeIn("fast");
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
var location__2690 = window.location;
var url__2691 = location.href;
var parts__2692 = url__2691.split("/");

return cljs.core.last.call(null,parts__2692);
});
ajaxify.main.name_to_href = cljs.core.ObjMap.fromObject(["Home","Projects","Classes","Work Experience","Contact","Cochlear Implants","Colors"],{"Home":"index.html","Projects":"myProjects.html","Classes":"myClasses.html","Work Experience":"workExperience.html","Contact":"contactInfo.html","Cochlear Implants":"cochlearImplants.html","Colors":"colorScheme.html"});
ajaxify.main.href_to_name = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__383__auto____2700 = (function iter__2693(s__2694){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2694__2695 = s__2694;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2694__2695)))
{var vec__2696__2697 = cljs.core.first.call(null,s__2694__2695);
var a_key__2698 = cljs.core.nth.call(null,vec__2696__2697,0,null);
var a_value__2699 = cljs.core.nth.call(null,vec__2696__2697,1,null);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([a_value__2699,a_key__2698]),iter__2693.call(null,cljs.core.rest.call(null,s__2694__2695)));
} else
{return null;
}
break;
}
})));
});

return iter__383__auto____2700.call(null,ajaxify.main.name_to_href);
})());
/**
* Find the a with the link to the given href.
*/
ajaxify.main.anchor_with_href = (function anchor_with_href(to_match){
return jQuery.call(null,"nav").find("a").filter((function (){
var anchor__2701 = jQuery.call(null,this);

return cljs.core._EQ_.call(null,to_match,anchor__2701.attr("href"));
}));
});
/**
* Restyle the anchors after a page change. Takes
* the href of the destination page - this anchor
* should be unlinkified while the rest are linkified.
*/
ajaxify.main.restyle_anchors_for_page = (function restyle_anchors_for_page(destination_page_href){
var current_page_element__2702 = jQuery.call(null,"#currentPage");
var current_page_name__2703 = current_page_element__2702.html();
var current_page_href__2704 = ajaxify.main.name_to_href.call(null,current_page_name__2703);
var new_anchor__2705 = jQuery.call(null,"<a>",ajaxify.main.js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href","﷐'html"],{"﷐'href":current_page_href__2704,"﷐'html":current_page_name__2703})));
var new_current_page_span__2706 = jQuery.call(null,"<span>",ajaxify.main.js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'id","﷐'html"],{"﷐'id":"currentPage","﷐'html":ajaxify.main.href_to_name.call(null,destination_page_href)})));
var destination_anchor__2707 = ajaxify.main.anchor_with_href.call(null,destination_page_href);

current_page_element__2702.replaceWith(new_anchor__2705);
return destination_anchor__2707.replaceWith(new_current_page_span__2706);
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
var new_href__2708 = clicked_anchor.attr("href");
var current_href__2709 = ajaxify.main.current_page_relative_href.call(null);
var history_data__2710 = ajaxify.main.js_map.call(null,cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":current_href__2709}));

return history.pushState(history_data__2710,current_href__2709,new_href__2708);
});
/**
* Page titles are of the format 'Rahul Rajagopalan | Home'.
* Update the part after the | to the given value.
*/
ajaxify.main.update_subtitle_to = (function update_subtitle_to(new_subtitle){
return jQuery.call(null,"title").html(cljs.core.str.call(null,"Rahul Rajagopalan | ",new_subtitle));
});
/**
* Called on click of an anchor (the anchor is passed in)
*/
ajaxify.main.on_anchor_click = (function on_anchor_click(anchor){
var G__2711__2712 = anchor;

ajaxify.main.load_content.call(null,G__2711__2712);
ajaxify.main.restyle_anchors.call(null,G__2711__2712);
ajaxify.main.update_history.call(null,G__2711__2712);
G__2711__2712;
return ajaxify.main.update_subtitle_to.call(null,anchor.html());
});
/**
* Called when the popstate event occurs. Updates the page to the
* new URL (the URL, relative to the page root, is passed in).
*/
ajaxify.main.on_pop_state = (function on_pop_state(to_href){
var G__2713__2714 = to_href;

ajaxify.main.load_from_page.call(null,G__2713__2714);
ajaxify.main.restyle_anchors_for_page.call(null,G__2713__2714);
G__2713__2714;
return ajaxify.main.update_subtitle_to.call(null,ajaxify.main.href_to_name.call(null,to_href));
});
/**
* Entry point for the Clojurescript, to be called on load
*/
ajaxify.main.main = (function main(){
if(cljs.core.truth_(history))
{jQuery.call(null,"nav").on("click","a",(function (event){
var my_anchor__2715 = jQuery.call(null,this);

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,my_anchor__2715.length)))
{} else
{event.preventDefault();
ajaxify.main.on_anchor_click.call(null,my_anchor__2715);
}
return false;
}));
return window.addEventListener("popstate",(function (event){
var state__2716 = event.state;
var to_href__2717 = ajaxify.main.current_page_relative_href.call(null);

if(cljs.core.truth_((function (){var and__3546__auto____2718 = state__2716;

if(cljs.core.truth_(and__3546__auto____2718))
{return state__2716.href;
} else
{return and__3546__auto____2718;
}
})()))
{return ajaxify.main.on_pop_state.call(null,to_href__2717);
} else
{return null;
}
}),false);
} else
{return null;
}
});
goog.exportSymbol('ajaxify.main.main', ajaxify.main.main);
