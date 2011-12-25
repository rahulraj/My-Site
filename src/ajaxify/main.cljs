(ns ajaxify.main)

(def main-text-id "#mainText")

(defn ^:export navigational-anchors []
  (js/jQuery "nav a"))

(defn html [jquery-object]
  (. jquery-object (html)))

(defn main-text-from-load-container [container]
  (-> container
    (.find main-text-id)
    (html)))

(defn ^:export on-anchor-click [anchor]
  (let [anchors-href (.attr anchor "href")
        to-load (str anchors-href " " main-text-id)
        load-container (js/jQuery "<span>")
        main-text-element (js/jQuery main-text-id)]
    (.fadeOut main-text-element "fast" (fn []
      (.load load-container to-load (fn []
        (let [new-main-text (main-text-from-load-container load-container)]
          (console/log (str "new-main-text " new-main-text))
          (.html main-text-element new-main-text)
          (.fadeIn main-text-element "fast"))))))))

(defn ^:export main
  "Entry point for the Clojurescript, to be called on load"
  [& args]
  (console/log "this is " this)
  (.append (js/jQuery "body") "<div>hello</div>")
  "Hi there")
