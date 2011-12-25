(ns ajaxify.main)

(def main-text-id "#mainText")

(defn html
  "Helper function to get the HTML inside a JQuery object.
   Needed because ClojureScript syntax for no-argument
   object methods is a bit awkward."
  [jquery-object]
  (. jquery-object (html)))

(defn main-text-from-load-container
  "Extract the contents of the #mainText div from the container
   it was loaded in. Removes the outer <div> tags (so they're
   not duplicated."
  [container]
  (-> container
    (.find main-text-id)
    (html)))

(defn load-content
  "Load the main text referred to by the anchor that the user clicked.
   Updates the #mainText div asynchronously."
  [anchor]
  (let [anchors-href (.attr anchor "href")
        to-load (str anchors-href " " main-text-id)
        load-container (js/jQuery "<span>")
        main-text-element (js/jQuery main-text-id)]
    (.fadeOut main-text-element "fast" (fn []
      (.load load-container to-load (fn []
        (let [new-main-text (main-text-from-load-container load-container)]
          (.html main-text-element new-main-text)
          (.fadeIn main-text-element "fast"))))))))

(defn current-page-relative-href
  "Extract the relative URL of the current page.
   e.g. (current-page-relative-href) on
   http://web.mit.edu/rahulraj/www/index.html
   returns 'index.html'."
  []
  (let [location (.location js/window)
        url location/href
        parts (.split url "/")]
    (last parts)))

(defn parent
  "Get the parent of a JQuery object. Similar to html,
   puts a facade around a no-argument method."
  [jquery-object]
  (. jquery-object (parent)))

(defn restyle-anchors
  "On any given page, the current page in the nav area
   should be bolded and not an anchor, while the remaining
   items in nav are anchors. When a new page is loaded, this
   function updates the nav list items to reflect this."
  [clicked-anchor]
  (let [current-page-href (current-page-relative-href)
        current-page-anchor (js/jQuery (str "<a href=" current-page-href ">"))
        current-page-list-item (js/jQuery "#currentPage")
        current-page-html (html current-page-list-item)
        clicked-list-item (parent clicked-anchor)]
    (.html current-page-anchor current-page-html)
    (-> current-page-list-item
      (.removeAttr "id")
      (.html current-page-anchor))
    (-> clicked-list-item
      (.attr "id" "currentPage")
      (.html (html clicked-anchor))
    (site/removeEvents)
    (site/addHoverEventsToAnchors))))

(defn update-history
  "Update the history so the URL is still valid,
   given the clicked anchor (which is now Ajaxy)
   TODO make the back button work too."
  [clicked-anchor]
  (let [new-href (.attr clicked-anchor "href")]
    (.pushState js/history {} "State" new-href)))

(defn ^:export on-anchor-click
  "Called on click of an anchor (the anchor is passed in)"
  [anchor]
  ; TODO Use the History API to make back/forward work again.
  (doto anchor
    (load-content)
    (restyle-anchors)
    (update-history)))

(defn ^:export main
  "Entry point for the Clojurescript, to be called on load"
  [& args]
  ;(console/log "this is " js/this) ;nope, doesn't work
  (let [my-object {:name "rahul"}] ; TODO figure this out
    (console/log (str "my name is " (.name my-object)))
    (.append (js/jQuery "body") "<div>hello</div>")
    my-object))
