$(function() {
    var articles = $("article");
    var toggleVisibility = $("<a>Hide</a>");
    
    // add to the <article>
    articles.append(toggleVisibility);
    
    toggleVisibility.click(function() {
        alert("clicked");
    });
    
});
