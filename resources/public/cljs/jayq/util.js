goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__36173 = cljs.core.js_obj.call(null);

var G__36174__36175 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__36174__36175))
{var G__36177__36179 = cljs.core.first.call(null,G__36174__36175);
var vec__36178__36180 = G__36177__36179;
var k__36181 = cljs.core.nth.call(null,vec__36178__36180,0,null);
var v__36182 = cljs.core.nth.call(null,vec__36178__36180,1,null);
var G__36174__36183 = G__36174__36175;

var G__36177__36184 = G__36177__36179;
var G__36174__36185 = G__36174__36183;

while(true){
var vec__36186__36187 = G__36177__36184;
var k__36188 = cljs.core.nth.call(null,vec__36186__36187,0,null);
var v__36189 = cljs.core.nth.call(null,vec__36186__36187,1,null);
var G__36174__36190 = G__36174__36185;

(out__36173[cljs.core.name.call(null,k__36188)] = v__36189);
var temp__3698__auto____36191 = cljs.core.next.call(null,G__36174__36190);

if(cljs.core.truth_(temp__3698__auto____36191))
{var G__36174__36192 = temp__3698__auto____36191;

{
var G__36193 = cljs.core.first.call(null,G__36174__36192);
var G__36194 = G__36174__36192;
G__36177__36184 = G__36193;
G__36174__36185 = G__36194;
continue;
}
} else
{}
break;
}
} else
{}
return out__36173;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__36195 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__36195);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__36196){
var v = cljs.core.first(arglist__36196);
var text = cljs.core.rest(arglist__36196);
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
{return cljs.core.reduce.call(null,(function (m,p__36197){
var vec__36198__36199 = p__36197;
var k__36200 = cljs.core.nth.call(null,vec__36198__36199,0,null);
var v__36201 = cljs.core.nth.call(null,vec__36198__36199,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__36200),clj__GT_js.call(null,v__36201));
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
