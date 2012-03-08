(ns eastercalc.server
  (:use [clojure.tools.cli :only [cli]])
  (:require [noir.server :as server]))

(server/load-views "src/clj/eastercalc/views/")

(defn -main [& args]
  (let [[options args banner] (cli args
                                   ["-e" "--environment" "Options: dev, prod" :default "dev"]
                                   ["-p" "--port" "Application port" :default 8888 :parse-fn #(Integer. %)]
                                   ["-h" "--help" "Show help" :default false :flag true])
        mode (keyword (:environment options))
        port (:port options)]
    (when (:help options)
      (println banner)
      (System/exit 0))
    (server/start port {:mode mode
                        :ns 'eastercalc})))


