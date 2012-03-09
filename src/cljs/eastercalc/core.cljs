(ns eastercalc.core
  (:use [jayq.core :only [$ bind attr val append inner]])
  (:require [crate.core :as crate]
            [clojure.string :as string])
  (:use-macros [crate.macros :only [defpartial]]))

;; Utilities
(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings.

   Borrowed and updated from mmcgrana."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

;; Tooltips
(defn enable-tooltips
  []
  (.tooltip ($ :#year-start-tip))
  (.tooltip ($ :#year-end-tip)))

;; Form Actions
(defn clear-form
  []
  (val ($ "input[type='text']") "")
  (.removeAttr ($ "input[type='checkbox']") "checked"))

(defn bind-clear-form
  []
  (-> ($ "#clear-form")
      (bind "click" clear-form)))

(defpartial dates-for-years-table [title seq-of-maps]
  (if seq-of-maps
    [:div {:class "span5"}
     [:h3 title]
     [:table {:class "table table-striped table-bordered"}
      [:thead
       [:tr
        [:th "Year"]
        [:th "Date"]]]
      [:tbody
       (for [entry seq-of-maps]
         [:tr
          [:td (str (.-year entry))]
          [:td (str (.-date entry))]])]]]
    [:div {:class "span6"}]))

(defpartial years-for-dates-table [title seq-of-maps]
  (if seq-of-maps
    [:div {:class "span5"}
     [:h3 title]
     [:table {:class "table table-striped table-bordered"}
      [:thead
       [:tr
        [:th "Date"]
        [:th "Years"]]]
      [:tbody
       (for [item (js->clj seq-of-maps)]
         [:tr
          [:td (first item)]
          [:td (string/join ", " (second item))]])]]]
    [:div {:class "span6"}]))

(defpartial disclaimer [s]
  [:div {:class "span12"}
   [:span
    [:em s]]])

(defn submit-dates-for-years
  []
  (let [eastern (.is ($ "#eastern") ":checked")
        western (.is ($ "#western") ":checked")
        year-start (val ($ "#year-start"))
        year-end (val ($ "#year-end"))]
    (.ajax js/jQuery
           (clj->js {:url "/data/dates-for-years"
                     :dataType "json"
                     :data {:eastern eastern
                            :western western
                            :year-start year-start
                            :year-end year-end}
                     :success (fn [data]
                                (-> ($ :#results)
                                    (inner "")
                                    (append (disclaimer (.-disclaimer data)))
                                    (append (dates-for-years-table "Orthodox Pascha" (.-eastern data)))
                                    (append (dates-for-years-table "Western Easter" (.-western data)))))
                     :error (fn [e] (. js/console log (str "An error occurred: " e)))}))))

(defn submit-years-for-dates
  []
  (let [eastern (.is ($ "#eastern") ":checked")
        western (.is ($ "#western") ":checked")
        year-start (val ($ "#year-start"))
        year-end (val ($ "#year-end"))]
    (.ajax js/jQuery
           (clj->js {:url "/data/years-for-dates"
                     :dataType "json"
                     :data {:eastern eastern
                            :western western
                            :year-start year-start
                            :year-end year-end}
                     :success (fn [data]
                                (-> ($ :#results)
                                    (inner "")
                                    (append (disclaimer (.-disclaimer data)))
                                    (append (years-for-dates-table "Orthodox Pascha" (.-eastern data)))
                                    (append (years-for-dates-table "Western Easter" (.-western data)))))
                     :error (fn [e] (. js/console log (str "An error occurred: " e)))}))))

(defn bind-submit-dates-for-years
  []
  (-> ($ "#submit-dates-for-years")
      (bind "click" submit-dates-for-years)))

(defn bind-submit-years-for-dates
  []
  (-> ($ "#submit-years-for-dates")
      (bind "click" submit-years-for-dates)))