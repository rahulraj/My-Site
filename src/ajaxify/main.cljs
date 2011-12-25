(ns ajaxify.main)

(def main-text-id "#mainText")

(defn html
  "Helper function to get the HTML inside a JQuery object.
   Needed because ClojureScript syntax for no-argument
   object methods is a bit awkward."
  [jquery-object]
  (. jquery-object (html)))

(defn main-text-from-load-container
  [container]
  (-> container
    (.find main-text-id)
    (html)))

(defn load-content [anchor]
  (let [anchors-href (.attr anchor "href")
        to-load (str anchors-href " " main-text-id)
        load-container (js/jQuery "<span>")
        main-text-element (js/jQuery main-text-id)]
    (.fadeOut main-text-element "fast" (fn []
      (.load load-container to-load (fn []
        (let [new-main-text (main-text-from-load-container load-container)]
          (.html main-text-element new-main-text)
          (.fadeIn main-text-element "fast"))))))))

(defn current-page-relative-href []
  (let [location (.location js/window)
        url location/href
        parts (.split url "/")]
    (last parts)))

(defn parent [jquery-object]
  (. jquery-object (parent)))

(defn restyle-anchors [clicked-anchor]
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

(defn update-history [clicked-anchor]
  (let [new-href (.attr clicked-anchor "href")]
    (.pushState js/history {} "State" new-href)))

(defn ^:export on-anchor-click [anchor]
  ; TODO Use the History API to make back/forward work again.
  (load-content anchor)
  (restyle-anchors anchor)
  (update-history anchor))

(defn ^:export main
  "Entry point for the Clojurescript, to be called on load"
  [& args]
  ;(console/log "this is " js/this) ;nope, doesn't work
  (let [my-object {:name "rahul"}] ; TODO figure this out
    (console/log (str "my name is " (.name my-object)))
    (.append (js/jQuery "body") "<div>hello</div>")
    my-object))
