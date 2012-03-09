goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,route)))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__88219__88220 = route;
var m__88221 = cljs.core.nth.call(null,vec__88219__88220,0,null);
var u__88222 = cljs.core.nth.call(null,vec__88219__88220,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__88221),u__88222]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__88223 = fetch.util.clj__GT_js.call(null,d);
var query__88224 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__88223)));

return cljs.core.str.call(null,query__88224);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__88225 = req.getResponseText();

return callback.call(null,data__88225);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__88226){
var vec__88227__88228 = p__88226;
var opts__88229 = cljs.core.nth.call(null,vec__88227__88228,0,null);

var req__88231 = (new goog.net.XhrIo());
var vec__88230__88232 = fetch.core.parse_route.call(null,route);
var method__88233 = cljs.core.nth.call(null,vec__88230__88232,0,null);
var uri__88234 = cljs.core.nth.call(null,vec__88230__88232,1,null);
var data__88235 = fetch.core.__GT_data.call(null,content);
var callback__88236 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__88236))
{goog.events.listen.call(null,req__88231,goog.net.EventType.COMPLETE,(function (){
return callback__88236.call(null,req__88231);
}));
} else
{}
return req__88231.send(uri__88234,method__88233,data__88235,(cljs.core.truth_(opts__88229)?fetch.util.clj__GT_js.call(null,opts__88229):null));
};
var xhr = function (route,content,callback,var_args){
var p__88226 = null;
if (goog.isDef(var_args)) {
  p__88226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__88226);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__88237){
var route = cljs.core.first(arglist__88237);
var content = cljs.core.first(cljs.core.next(arglist__88237));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__88237)));
var p__88226 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__88237)));
return xhr__delegate.call(this, route, content, callback, p__88226);
});
return xhr;
})()
;
