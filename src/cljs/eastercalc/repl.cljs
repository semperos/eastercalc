(ns eastercalc.repl
  (:require [clojure.browser.repl :as repl]))

(defn enable-browser-repl
  []
  (repl/connect "http://localhost:9000/repl"))

