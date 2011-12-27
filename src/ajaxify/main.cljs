;; Ajaxifies all loading of pages on my site, while preserving
;; correct URLs and back/forward button behavior.
;; Just to mix things up a bit (and build up my Lisp cred)
;; this is written in ClojureScript.
;; Compile by cding to the top-level directory, then invoking
;; cljsc src '{optimizations :simple}' > ajaxify.js
;; You can also do :whitespace for optimizations or set :pretty-print
;; to true to produce more readable JavaScript for debugging.
(ns ajaxify.main)

(def main-text-id "#mainText")

(defn make-js-map
  "Provided at https://gist.github.com/1098417
   makes a javascript map from a clojure one"
  [cljmap]
  (let [out (js-obj)]
    (doall (map #(aset out (name (first %)) (second %)) cljmap))
    out))

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

(defn load-from-page 
  "Given the name of a page (like index.html), loads the #mainText
   from that page, and puts that in the #mainText of the current
   page."
  [page-name]
  (let [to-load (str page-name " " main-text-id)
        load-container (js/jQuery "<span>")
        main-text-element (js/jQuery main-text-id)]
    (.fadeOut main-text-element "fast" (fn []
      (.load load-container to-load (fn []
        (let [new-main-text (main-text-from-load-container load-container)]
          (.html main-text-element new-main-text)
          (.fadeIn main-text-element "fast"))))))))

(defn load-content
  "Load the main text referred to by the anchor that the user clicked.
   Updates the #mainText div asynchronously."
  [anchor]
  (load-from-page (.attr anchor "href")))

(defn ^:export current-page-relative-href
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

(defn name-to-href [page-name]
  "Given the name of a page, look up its href."
  (let [name-map {"Home" "index.html"
                  "My Projects" "myProjects.html"
                  "My Classes" "myClasses.html"
                  "Work Experience" "workExperience.html"
                  "Contact Information" "contactInfo.html"
                  "Cochlear Implants" "cochlearImplants.html"
                  "Color Scheme" "colorScheme.html"}]
    (name-map page-name)))

(defn navigation-list-item-with-href
  "Find the li in nav with the link to the given href."
  [to-match]
  (.filter (js/jQuery "nav li") (fn[]
    (let [self (js/jQuery (js* "this"))
          anchor (.find self "a")]
      (= to-match (.attr anchor "href"))))))

(defn restyle-anchors-for-page 
  "Restyle the anchors after a page change. Takes
   the href of the destination page - this list item
   should be unlinkified while the rest are linkified."
  [destination-page-href]
  (let [current-page-list-item (js/jQuery "#currentPage")
        current-page-name (html current-page-list-item)
        current-page-href (name-to-href current-page-name)
        anchor-data (make-js-map {:href current-page-href
                                  :html current-page-name})
        new-anchor (js/jQuery "<a>" anchor-data)
        destination-list-item 
            (navigation-list-item-with-href destination-page-href)
        destination-anchor (.find destination-list-item "a")]
    (-> current-page-list-item
      (.removeAttr "id")
      (.html new-anchor))
    (-> destination-list-item
      (.attr "id" "currentPage")
      (.html (html destination-anchor))
    (site/removeEvents)
    (site/addHoverEventsToAnchors))))

(defn restyle-anchors
  "On any given page, the current page in the nav area
   should be bolded and not an anchor, while the remaining
   items in nav are anchors. When a new page is loaded, this
   function updates the nav list items to reflect this."
  [clicked-anchor]
  (restyle-anchors-for-page (.attr clicked-anchor "href")))

(defn update-history
  "Update the history so the URL is still valid,
   given the clicked anchor (which is now Ajaxy)."
  [clicked-anchor]
  (let [new-href (.attr clicked-anchor "href")
        current-href (current-page-relative-href)
        history-data (make-js-map {:href current-href})]
    (.pushState js/history history-data current-href new-href)))

(defn on-anchor-click
  "Called on click of an anchor (the anchor is passed in)"
  [anchor]
  (doto anchor
    (load-content)
    (restyle-anchors)
    (update-history)))

(defn on-pop-state
  "Called when the popstate event occurs. Updates the page to the
   new URL (the URL, relative to the page root, is passed in)."
  [to-href]
  (load-from-page to-href)
  (restyle-anchors-for-page to-href))

(defn prevent-default
  "Prevent the default action for the given event."
  [event]
  (. event (preventDefault)))

(defn ^:export main
  "Entry point for the Clojurescript, to be called on load"
  []
  (.delegate (js/jQuery "nav") "li" "click" (fn [event]
    (let [my-anchor (.find (js/jQuery (js* "this")) "a")]
      (when (not (= 0 (.length my-anchor)))
        (prevent-default event)
        (on-anchor-click my-anchor))
      false)))
  (.addEventListener js/window "popstate" (fn [event]
    (let [state (.state event)
          ; At this point the URL has already been updated
          to-href (current-page-relative-href)]
      (when (.href state)
        (on-pop-state to-href)))) false))
