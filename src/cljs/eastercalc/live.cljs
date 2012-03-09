(ns eastercalc.live
  (:use [jayq.core :only [$]])
  (:require [eastercalc.core :as core]))

(core/enable-tooltips)
(core/bind-clear-form)
(core/bind-submit-dates-for-years)
(core/bind-submit-years-for-dates)
