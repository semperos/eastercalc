goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__88189 = cljs.core.js_obj.call(null);

var G__88190__88191 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__88190__88191))
{var G__88193__88195 = cljs.core.first.call(null,G__88190__88191);
var vec__88194__88196 = G__88193__88195;
var k__88197 = cljs.core.nth.call(null,vec__88194__88196,0,null);
var v__88198 = cljs.core.nth.call(null,vec__88194__88196,1,null);
var G__88190__88199 = G__88190__88191;

var G__88193__88200 = G__88193__88195;
var G__88190__88201 = G__88190__88199;

while(true){
var vec__88202__88203 = G__88193__88200;
var k__88204 = cljs.core.nth.call(null,vec__88202__88203,0,null);
var v__88205 = cljs.core.nth.call(null,vec__88202__88203,1,null);
var G__88190__88206 = G__88190__88201;

(out__88189[cljs.core.name.call(null,k__88204)] = v__88205);
var temp__3698__auto____88207 = cljs.core.next.call(null,G__88190__88206);

if(cljs.core.truth_(temp__3698__auto____88207))
{var G__88190__88208 = temp__3698__auto____88207;

{
var G__88209 = cljs.core.first.call(null,G__88190__88208);
var G__88210 = G__88190__88208;
G__88193__88200 = G__88209;
G__88190__88201 = G__88210;
continue;
}
} else
{}
break;
}
} else
{}
return out__88189;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__88211 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__88211);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__88212){
var v = cljs.core.first(arglist__88212);
var text = cljs.core.rest(arglist__88212);
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
{return cljs.core.reduce.call(null,(function (m,p__88213){
var vec__88214__88215 = p__88213;
var k__88216 = cljs.core.nth.call(null,vec__88214__88215,0,null);
var v__88217 = cljs.core.nth.call(null,vec__88214__88215,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__88216),clj__GT_js.call(null,v__88217));
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
