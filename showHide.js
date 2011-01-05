// Copyright (c) 2010 Rahul Rajagopalan

$(function(){var toggleVisibility=$("h3 > a");toggleVisibility.css("display","inline");toggleVisibility.click(function(){var parentArticle=$(this).parents("article");var contentToChange=parentArticle.children().not("h3");contentToChange.slideToggle();if($(this).html()==="Hide"){$(this).html("Show");}
else{$(this).html("Hide");}});});