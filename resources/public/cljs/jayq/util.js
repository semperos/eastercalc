goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__25764 = cljs.core.js_obj.call(null);

var G__25765__25766 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__25765__25766))
{var G__25768__25770 = cljs.core.first.call(null,G__25765__25766);
var vec__25769__25771 = G__25768__25770;
var k__25772 = cljs.core.nth.call(null,vec__25769__25771,0,null);
var v__25773 = cljs.core.nth.call(null,vec__25769__25771,1,null);
var G__25765__25774 = G__25765__25766;

var G__25768__25775 = G__25768__25770;
var G__25765__25776 = G__25765__25774;

while(true){
var vec__25777__25778 = G__25768__25775;
var k__25779 = cljs.core.nth.call(null,vec__25777__25778,0,null);
var v__25780 = cljs.core.nth.call(null,vec__25777__25778,1,null);
var G__25765__25781 = G__25765__25776;

(out__25764[cljs.core.name.call(null,k__25779)] = v__25780);
var temp__3698__auto____25782 = cljs.core.next.call(null,G__25765__25781);

if(cljs.core.truth_(temp__3698__auto____25782))
{var G__25765__25783 = temp__3698__auto____25782;

{
var G__25784 = cljs.core.first.call(null,G__25765__25783);
var G__25785 = G__25765__25783;
G__25768__25775 = G__25784;
G__25765__25776 = G__25785;
continue;
}
} else
{}
break;
}
} else
{}
return out__25764;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__25786 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__25786);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25787){
var v = cljs.core.first(arglist__25787);
var text = cljs.core.rest(arglist__25787);
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
{return cljs.core.reduce.call(null,(function (m,p__25788){
var vec__25789__25790 = p__25788;
var k__25791 = cljs.core.nth.call(null,vec__25789__25790,0,null);
var v__25792 = cljs.core.nth.call(null,vec__25789__25790,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__25791),clj__GT_js.call(null,v__25792));
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
