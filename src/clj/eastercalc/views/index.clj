(ns eastercalc.views.index
  (:require [eastercalc.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]
        [eastercalc.views.form :only [dates-for-years-form]]
        [eastercalc.views.nav :only [nav]]))

(defpage "/" []
         (common/layout
           (nav "/")
           [:div {:class "row"}
            [:div {:class "span12"} (dates-for-years-form)]
            [:div {:id "results" :class "span12"}]]))
