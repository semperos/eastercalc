goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__13899 = cljs.core.js_obj.call(null);

var G__13900__13901 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__13900__13901))
{var G__13903__13905 = cljs.core.first.call(null,G__13900__13901);
var vec__13904__13906 = G__13903__13905;
var k__13907 = cljs.core.nth.call(null,vec__13904__13906,0,null);
var v__13908 = cljs.core.nth.call(null,vec__13904__13906,1,null);
var G__13900__13909 = G__13900__13901;

var G__13903__13910 = G__13903__13905;
var G__13900__13911 = G__13900__13909;

while(true){
var vec__13912__13913 = G__13903__13910;
var k__13914 = cljs.core.nth.call(null,vec__13912__13913,0,null);
var v__13915 = cljs.core.nth.call(null,vec__13912__13913,1,null);
var G__13900__13916 = G__13900__13911;

(out__13899[cljs.core.name.call(null,k__13914)] = v__13915);
var temp__3698__auto____13917 = cljs.core.next.call(null,G__13900__13916);

if(cljs.core.truth_(temp__3698__auto____13917))
{var G__13900__13918 = temp__3698__auto____13917;

{
var G__13919 = cljs.core.first.call(null,G__13900__13918);
var G__13920 = G__13900__13918;
G__13903__13910 = G__13919;
G__13900__13911 = G__13920;
continue;
}
} else
{}
break;
}
} else
{}
return out__13899;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__13921 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__13921);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13922){
var v = cljs.core.first(arglist__13922);
var text = cljs.core.rest(arglist__13922);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__13923){
var vec__13924__13925 = p__13923;
var k__13926 = cljs.core.nth.call(null,vec__13924__13925,0,null);
var v__13927 = cljs.core.nth.call(null,vec__13924__13925,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__13926),clj__GT_js.call(null,v__13927));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
