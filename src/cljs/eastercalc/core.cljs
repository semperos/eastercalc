(ns eastercalc.core
  (:use [eastercalc.util :only [clj->js]]
        [jayq.core :only [$ bind attr val append inner]])
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes]
            [clojure.string :as string])
  (:use-macros [crate.macros :only [defpartial]])
  (:require-macros [fetch.macros :as f]))

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
       (for [m seq-of-maps]
         [:tr
          [:td (str (m "year"))]
          [:td (str (m "date"))]])]]]
    [:div {:class "span6"}]))

(defpartial years-for-dates-table [title seq-of-vecs]
  (if seq-of-vecs
    [:div {:class "span5"}
     [:h3 title]
     [:table {:class "table table-striped table-bordered"}
      [:thead
       [:tr
        [:th "Date"]
        [:th "Years"]]]
      [:tbody
       (for [vc seq-of-vecs]
         [:tr
          [:td (first vc)]
          [:td (string/join ", " (second vc))]])]]]
    [:div {:class "span6"}]))

(defpartial disclaimer [s]
  [:div {:class "span12"}
   [:span
    [:em s]]])

(defn submit-dates-for-years
  []
  (let [eastern (.is ($ "#eastern") ":checked")
        western (.is ($ "#western") ":checked")
        year-start (val ($ "#year-start-dates"))
        year-end (val ($ "#year-end-dates"))]
    (f/letrem [data (dates-for-years {:eastern eastern
                                      :western western
                                      :year-start year-start
                                      :year-end year-end})]
              (-> ($ :#results)
                  (inner "")
                  (append (disclaimer (data "disclaimer")))
                  (append (dates-for-years-table "Orthodox Pascha" (data "eastern")))
                  (append (dates-for-years-table "Western Easter" (data "western")))))))

(defn submit-years-for-dates
  []
  (let [eastern (.is ($ "#eastern") ":checked")
        western (.is ($ "#western") ":checked")
        year-start (val ($ "#year-start-years"))
        year-end (val ($ "#year-end-years"))]
    (f/letrem [data (years-for-dates {:eastern eastern
                                      :western western
                                      :year-start year-start
                                      :year-end year-end})]
              (. js/console log (ffirst (data "eastern")))
              (. js/console log (second (first (data "eastern"))))
              (-> ($ :#results)
                  (inner "")
                  (append (disclaimer (data "disclaimer")))
                  (append (years-for-dates-table "Orthodox Pascha" (data "eastern")))
                  (append (years-for-dates-table "Western Easter" (data "western")))))))

(defn bind-submit-dates-for-years
  []
  (-> ($ "#submit-dates-for-years")
      (bind "click" submit-dates-for-years))
  (-> ($ "#year-start-dates")
      (bind "keypress" (fn [e] (when (= (.-keyCode e) 13)
                                (submit-dates-for-years)))))
  (-> ($ "#year-end-dates")
      (bind "keypress" (fn [e] (when (= (.-keyCode e) 13)
                                (submit-dates-for-years))))))

(defn bind-submit-years-for-dates
  []
  (-> ($ "#submit-years-for-dates")
      (bind "click" submit-years-for-dates))
  (-> ($ "#year-start-years")
      (bind "keypress" (fn [e] (when (= (.-keyCode e) 13)
                                (submit-years-for-dates)))))
  (-> ($ "#year-end-years")
      (bind "keypress" (fn [e] (when (= (.-keyCode e) 13)
                                (submit-years-for-dates))))))