goog.provide('eastercalc.util');
goog.require('cljs.core');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
* 
* Borrowed and updated from mmcgrana.
*/
eastercalc.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__86182){
var vec__86183__86184 = p__86182;
var k__86185 = cljs.core.nth.call(null,vec__86183__86184,0,null);
var v__86186 = cljs.core.nth.call(null,vec__86183__86184,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__86185),clj__GT_js.call(null,v__86186));
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
