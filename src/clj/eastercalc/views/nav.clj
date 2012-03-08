(ns eastercalc.views.nav
  (:use [noir.core :only [defpartial]]))

(defpartial nav [path]
  [:div {:id "nav"
         :class "navbar"}
   [:div {:class "navbar-inner"}
    [:div {:class "container"}
     [:ul {:class "nav nav-pills"}
      [:a {:class "brand"}
       "Pascha &amp; Easter Calculations"]
      [:li {:class (when (= path "/")
                     "active")}
       [:a {:id "dates-for-years"
            :class (str "first" (when (= path "/")
                                  " active"))
            :href "/"}
        "Dates for Years"]]
      [:li {:class (when (= path "/years-for-dates")
                     "active")}
       [:a {:id "years-for-dates"
            :class (str "first" (when (= path "/years-for-dates")
                                  " active"))
            :href "/years-for-dates"}
        "Years for Dates"]]]]]]
  [:div {:class "clearfix"}])