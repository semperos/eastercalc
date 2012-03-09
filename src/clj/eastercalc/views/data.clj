(ns eastercalc.views.data
  (:use noir.fetch.remotes
        clj-time.format
        [eastercalc.calc :only [pascha easter month-of-year-str day-of-month-str]]))

(def month-day-formatter
  (formatter "MM/dd"))
(def year-formatter
  (formatter "yyyy"))

(defremote dates-for-years
    [{:keys [year-start year-end western eastern] :as form}]
  (let [year-start (Integer. year-start)
        year-end (Integer. year-end)
        year-range (range year-start (inc year-end))]
    {"disclaimer" "All dates displayed according to the Gregorian calendar."
     "eastern" (when eastern
                 (map (fn [year] {"year" year
                                 "date" (unparse month-day-formatter (pascha year))})
                      year-range))
     "western" (when western
                 (map (fn [year] {"year" year
                                 "date" (unparse month-day-formatter (easter year))})
                      year-range))}))

(defremote years-for-dates
    [{:keys [year-start year-end western eastern] :as form}]
  (let [year-start (Integer. year-start)
        year-end (Integer. year-end)
        years (range year-start (inc year-end))]
    {"disclaimer" "All dates displayed according to the Gregorian calendar."
     "eastern" (when eastern
                 (sort (group-by (fn [year]
                                   (let [date (pascha year)]
                                     (str (month-of-year-str date) "/" (day-of-month-str date))))
                                 years)))
     "western" (when western
                 (sort (group-by (fn [year]
                                   (let [date (easter year)]
                                     (str (month-of-year-str date) "/" (day-of-month-str date))))
                                 years)))}))