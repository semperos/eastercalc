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
{var vec__13929__13930 = route;
var m__13931 = cljs.core.nth.call(null,vec__13929__13930,0,null);
var u__13932 = cljs.core.nth.call(null,vec__13929__13930,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__13931),u__13932]);
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
var cur__13933 = fetch.util.clj__GT_js.call(null,d);
var query__13934 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__13933)));

return cljs.core.str.call(null,query__13934);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13935 = req.getResponseText();

return callback.call(null,data__13935);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13936){
var vec__13937__13938 = p__13936;
var opts__13939 = cljs.core.nth.call(null,vec__13937__13938,0,null);

var req__13941 = (new goog.net.XhrIo());
var vec__13940__13942 = fetch.core.parse_route.call(null,route);
var method__13943 = cljs.core.nth.call(null,vec__13940__13942,0,null);
var uri__13944 = cljs.core.nth.call(null,vec__13940__13942,1,null);
var data__13945 = fetch.core.__GT_data.call(null,content);
var callback__13946 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__13946))
{goog.events.listen.call(null,req__13941,goog.net.EventType.COMPLETE,(function (){
return callback__13946.call(null,req__13941);
}));
} else
{}
return req__13941.send(uri__13944,method__13943,data__13945,(cljs.core.truth_(opts__13939)?fetch.util.clj__GT_js.call(null,opts__13939):null));
};
var xhr = function (route,content,callback,var_args){
var p__13936 = null;
if (goog.isDef(var_args)) {
  p__13936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13936);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13947){
var route = cljs.core.first(arglist__13947);
var content = cljs.core.first(cljs.core.next(arglist__13947));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13947)));
var p__13936 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13947)));
return xhr__delegate.call(this, route, content, callback, p__13936);
});
return xhr;
})()
;
