(ns eastercalc.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css include-js javascript-tag html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "Easter Calculations"]
               (include-css "/css/bootstrap.css")
               (include-css "/css/style.css")
               (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
               (include-js "/js/bootstrap.js")]
              [:body
               [:div#wrapper
                content]
               (include-js "/cljs/starter.js")]))
