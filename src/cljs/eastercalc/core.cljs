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