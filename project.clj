(defproject eastercalc "0.1.0-SNAPSHOT"
            :description "Tools for calculating Easter and Pascha."
            :dependencies [[org.clojure/clojure "1.3.0"]
                           [cheshire "2.2.0"]
                           [clj-time "0.3.7"]
                           [jayq "0.1.0-alpha1"]
                           [crate "0.1.0-alpha1"]
                           [noir "1.3.0-alpha10"]]
            :source-path "src/clj"
            :cljsbuild {:builds
                        [{:source-path "src/cljs",
                          :compiler
                          {:output-dir "resources/public/cljs/",
                           :output-to "resources/public/cljs/starter.js",
                           :optimizations :simple,
                           :pretty-print true}}]}
            :main eastercalc.server)

