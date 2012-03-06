(ns eastercalc.calc
  (:require [clj-time.core :as dt])
  (:import [org.joda.time DateTime DateTimeZone]
           [org.joda.time.chrono ISOChronology JulianChronology]))

(defn pascha-gauss
  "Algorithm used returns number of days after March 21st on the Julian calendar."
  ([year] (pascha-gauss year :iso))
  ([year chrono]
     {:pre [(or (= chrono :julian)
                (= chrono :gregorian)
                (= chrono :iso))]}
     (let [julian-march-21 (DateTime. year 3 21 0 0 0 (JulianChronology/getInstance))
           r1 (mod year 19)
           r2 (mod year 4)
           r3 (mod year 7)
           ra (+ (* r1 19) 16)
           r4 (mod ra 30)
           rb (+ (* r2 2) (* r3 4) (* r4 6))
           r5 (mod rb 7)
           rc (+ r4 r5)
           julian-date (dt/plus julian-march-21 (dt/days rc))]
       (case chrono
         :julian julian-date

         :gregorian (.withChronology julian-date (ISOChronology/getInstance))
         :iso (.withChronology julian-date (ISOChronology/getInstance))))))

(def pascha pascha-gauss)

(defmacro div-down
  [& ns]
  `(int (/ ~@ns)))

(defn easter-nature
  [year]
  (let [a (mod year 19)
        b (div-down year 100)
        c (mod year 100)
        d (div-down b 4)
        e (mod b 4)
        f (div-down (+ b 8) 25)
        g (div-down (- b (+ f 1)) 3)
        h (-> (* a 19)
              (+ b)
              (- d)
              (- g)
              (+ 15)
              (mod 30))
        i (div-down c 4)
        k (mod c 4)
        l (-> (+ 32 (* e 2) (* i 2))
              (- h)
              (- k)
              (mod 7))
        m (div-down (+ a (* h 11) (* l 22))
                    451)
        month (div-down (+ (- (+ h l) (* m 7)) 114)
                        31)
        p (mod (+ (- (+ h l) (* m 7)) 114)
                        31)
        day (+ p 1)]
    (dt/date-time year month day)))

(def easter easter-nature)