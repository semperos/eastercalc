(ns eastercalc.views.index
  (:require [eastercalc.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]
        [eastercalc.views.form :only [dates-for-years-form
                                      years-for-dates-form]]
        [eastercalc.views.nav :only [nav]]))

(defpage "/" []
  (common/layout
   (nav "/")
   [:div {:class "row"}
    [:div {:class "span12"} (dates-for-years-form)]
    [:div {:id "results" :class "span12"}]]))

(defpage "/years-for-dates" []
  (common/layout
   (nav "/years-for-dates")
   [:div {:class "row"}
    [:div {:class "span12"} (years-for-dates-form)]
    [:div {:id "results" :class "span12"}]]))