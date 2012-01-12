;; Ajaxifies all loading of pages on my site, while preserving
;; correct URLs and back/forward button behavior.
;; Just to mix things up a bit (and build up my Lisp cred)
;; this is written in ClojureScript.
;; To compile this, run cljsRepl.py and follow its instructions.
(ns ajaxify.main
  (:require-macros [ajaxify.macros :as macros]))

(def main-text-id "#mainText")

(defn make-js-map
  "Provided at https://gist.github.com/1098417
   makes a javascript map from a clojure one"
  [cljmap]
  (let [out (js-obj)]
    (doall (map #(aset out (name (first %)) (second %)) cljmap))
    out))

(defn main-text-from-load-container
  "Extract the contents of the #mainText div from the container
   it was loaded in. Removes the outer <div> tags (so they're
   not duplicated)."
  [container]
  (-> container
    (.find main-text-id)
    (macros/object-call html)))

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

(defn name-to-href
  "Given the name of a page, look up its href."
  [page-name]
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
        current-page-name (macros/object-call current-page-list-item html)
        current-page-href (name-to-href current-page-name)
        new-anchor (js/jQuery "<a>" (make-js-map {:href current-page-href
                                                  :html current-page-name}))
        destination-list-item 
            (navigation-list-item-with-href destination-page-href)
        destination-anchor (.find destination-list-item "a")]
    (-> current-page-list-item
      (.removeAttr "id")
      (.html new-anchor))
    (-> destination-list-item
      (.attr "id" "currentPage")
      (.html (macros/object-call destination-anchor html))
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
  (doto to-href
    (load-from-page)
    (restyle-anchors-for-page)))

(defn ^:export main
  "Entry point for the Clojurescript, to be called on load"
  []
  (when js/history ; Don't do anything if the History API isn't available
    (.delegate (js/jQuery "nav") "li" "click" (fn [event]
      (let [my-anchor (.find (js/jQuery (js* "this")) "a")]
        (when-not (= 0 (.length my-anchor))
          (macros/object-call event preventDefault)
          (on-anchor-click my-anchor))
        false)))
    (.addEventListener js/window "popstate" (fn [event]
      (let [state (.state event)
            ; At this point the URL has already been updated
            to-href (current-page-relative-href)]
        (when state
          (when (.href state)
            (on-pop-state to-href)))) false))))
