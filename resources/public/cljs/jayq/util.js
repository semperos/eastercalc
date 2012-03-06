goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__115410 = cljs.core.js_obj.call(null);

var G__115411__115412 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__115411__115412))
{var G__115414__115416 = cljs.core.first.call(null,G__115411__115412);
var vec__115415__115417 = G__115414__115416;
var k__115418 = cljs.core.nth.call(null,vec__115415__115417,0,null);
var v__115419 = cljs.core.nth.call(null,vec__115415__115417,1,null);
var G__115411__115420 = G__115411__115412;

var G__115414__115421 = G__115414__115416;
var G__115411__115422 = G__115411__115420;

while(true){
var vec__115423__115424 = G__115414__115421;
var k__115425 = cljs.core.nth.call(null,vec__115423__115424,0,null);
var v__115426 = cljs.core.nth.call(null,vec__115423__115424,1,null);
var G__115411__115427 = G__115411__115422;

(out__115410[cljs.core.name.call(null,k__115425)] = v__115426);
var temp__3698__auto____115428 = cljs.core.next.call(null,G__115411__115427);

if(cljs.core.truth_(temp__3698__auto____115428))
{var G__115411__115429 = temp__3698__auto____115428;

{
var G__115430 = cljs.core.first.call(null,G__115411__115429);
var G__115431 = G__115411__115429;
G__115414__115421 = G__115430;
G__115411__115422 = G__115431;
continue;
}
} else
{}
break;
}
} else
{}
return out__115410;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__115432 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__115432);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__115433){
var v = cljs.core.first(arglist__115433);
var text = cljs.core.rest(arglist__115433);
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
{return cljs.core.reduce.call(null,(function (m,p__115434){
var vec__115435__115436 = p__115434;
var k__115437 = cljs.core.nth.call(null,vec__115435__115436,0,null);
var v__115438 = cljs.core.nth.call(null,vec__115435__115436,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__115437),clj__GT_js.call(null,v__115438));
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
