goog.provide('eastercalc.repl');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
eastercalc.repl.enable_browser_repl = (function enable_browser_repl(){
return clojure.browser.repl.connect.call(null,"http:\/\/localhost:9000\/repl");
});
