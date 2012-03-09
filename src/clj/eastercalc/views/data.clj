(ns eastercalc.views.data
  (:use [noir.core :only [defpage]]
        [noir.response :only [json]]
        [cheshire.core :only [encode]]
        clj-time.format
        [eastercalc.calc :only [pascha easter]]))

(def month-day-formatter
  (formatter "MM/dd"))
(def year-formatter
  (formatter "yyyy"))

(defpage [:get "/data/dates-for-years"]
  {:keys [year-start year-end western eastern] :as form}
  (let [year-start (Integer. year-start)
        year-end (Integer. year-end)
        year-range (range year-start (inc year-end))]
    {:headers {"Content-Type" "application/json"}
     :body (encode {:disclaimer "All dates displayed according to the Gregorian calendar."
                    :eastern (when-not (= eastern "false")
                               (for [year year-range]
                                 {:year year
                                  :date (unparse month-day-formatter (pascha year))}))
                    :western (when-not (= western "false")
                               (for [year year-range]
                                 {:year year
                                  :date (unparse month-day-formatter (easter year))}))})}))

(defpage [:get "/data/years-for-dates"]
  {:keys [date-start date-end year-start year-end western eastern] :as form}
  (let [year-start (Integer. year-start)
        year-end (Integer. year-end)
        years (range year-start (inc year-end))]
    {:headers {"Content-Type" "application/json"}
     :body (encode {:disclaimer "All dates displayed according to the Gregorian calendar."
                    :eastern (when-not (= eastern "false")
                                (sort (group-by (fn [year]
                                                  (let [date (pascha year)]
                                                    (str (.getMonthOfYear date) "/" (.getDayOfMonth date))))
                                                years)))
                    :western (when-not (= western "false")
                               (sort (group-by (fn [year]
                                                 (let [date (easter year)]
                                                   (str (.getMonthOfYear date) "/" (.getDayOfMonth date))))
                                               years)))})}))