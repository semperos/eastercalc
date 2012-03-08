;; Main form for app
(ns eastercalc.views.form
  (:use [noir.core :only [defpartial]])
  (:require [hiccup.form-helpers :as form]
            [clj-time.core :as dt]))

(defpartial help-tip [{:keys [title id] :as attr-val} value]
  [:a {:rel "tooltip"
       :id id
       :data-original-title title}
   value])

(defpartial dates-for-years-form []
  [:div {:class "row"}
   [:h4 {:class "span12"} "Check all that apply."]
   [:form {:class "form-horizontal"
           :action "/data/dates-for-years"
           :method "GET"}

    [:fieldset {:class "span3"}
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "eastern"}
       "Orthodox Pascha"]
      [:div {:class "controls"}
       (form/check-box "eastern" true)]]
     
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "western"}
       "Western Easter"]
      [:div {:class "controls"}
       (form/check-box "western" false)]]]

    [:fieldset {:class "span4"}
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "year-start"}
       "Start Year"]
      [:div {:class "controls"}
       [:input {:type "text"
                :class "span1"
                :id "year-start"
                :value (dt/year (dt/now))}]
       
       [:span {:class "help-inline"}
        (help-tip {:title "Four-digit year, inclusive." :id "year-start-tip"}
                  [:i {:class "icon-question-sign"}])]]]
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "year-end"}
       "End Year"]
      [:div {:class "controls"}
       [:input {:type "text"
                :class "span1"
                :id "year-end"
                :value (dt/year (dt/plus (dt/now) (dt/years 1)))}]
       [:span {:class "help-inline"}
        (help-tip {:title "Four-digit year, inclusive." :id "year-end-tip"}
                  [:i {:class "icon-question-sign"}])]]]]]
   
   [:div {:class "span4"}
   [:div {:class "control-group"}
    [:a {:class "btn btn-primary"
         :id "submit-dates-for-years"} "Generate!"]] 
   [:div {:class "control-group"}
    [:a {:class "btn btn-danger" :id "clear-form"} "Clear Form"]]]])

(defpartial years-for-dates-form []
  [:div {:class "row"}
   [:h4 {:class "span12"} "Check all that apply."]
   [:form {:class "form-horizontal"
           :action "/data/years-for-dates"
           :method "GET"}

    [:fieldset {:class "span3"}
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "eastern"}
       "Orthodox Pascha"]
      [:div {:class "controls"}
       (form/check-box "eastern" true)]]
     
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "western"}
       "Western Easter"]
      [:div {:class "controls"}
       (form/check-box "western" false)]]]

    [:fieldset {:class "span4"}
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "year-start"}
       "Start Year"]
      [:div {:class "controls"}
       [:input {:type "text"
                :class "span1"
                :id "year-start"
                :value (dt/year (dt/now))}]
       [:span {:class "help-inline"}
        (help-tip {:title "Four-digit year, inclusive." :id "year-start-tip"}
                  [:i {:class "icon-question-sign"}])]]]
     [:div {:class "control-group"}
      [:label {:class "control-label"
               :for "year-end"}
       "End Year"]
      [:div {:class "controls"}
       [:input {:type "text"
                :class "span1"
                :id "year-end"
                :value (dt/year (dt/plus (dt/now) (dt/years 1)))}]
       [:span {:class "help-inline"}
        (help-tip {:title "Four-digit year, inclusive." :id "year-end-tip"}
                  [:i {:class "icon-question-sign"}])]]]]]

   [:div {:class "span4"}
   [:div {:class "control-group"}
    [:a {:class "btn btn-primary"
         :id "submit-years-for-dates"} "Generate!"]] 
   [:div {:class "control-group"}
    [:a {:class "btn btn-danger" :id "clear-form"} "Clear Form"]]]])


