goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__115335){
var vec__115336__115337 = p__115335;
var context__115338 = cljs.core.nth.call(null,vec__115336__115337,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__115338)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__115338);
}
};
var $ = function (sel,var_args){
var p__115335 = null;
if (goog.isDef(var_args)) {
  p__115335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__115335);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__115339){
var sel = cljs.core.first(arglist__115339);
var p__115335 = cljs.core.rest(arglist__115339);
return $__delegate.call(this, sel, p__115335);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__115341 = null;
var G__115341__115342 = (function (this$,k){
var or__3548__auto____115340 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____115340))
{return or__3548__auto____115340;
} else
{return null;
}
});
var G__115341__115343 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__115341 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__115341__115342.call(this,this$,k);
case  3 :
return G__115341__115343.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115341;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__115345 = null;
var G__115345__115346 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__115345__115347 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__115345 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__115345__115346.call(this,_,k);
case  3 :
return G__115345__115347.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115345;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__115349){
var vec__115350__115351 = p__115349;
var v__115352 = cljs.core.nth.call(null,vec__115350__115351,0,null);

var a__115353 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__115352)))
{return $elem.attr(a__115353);
} else
{return $elem.attr(a__115353,v__115352);
}
};
var attr = function ($elem,a,var_args){
var p__115349 = null;
if (goog.isDef(var_args)) {
  p__115349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__115349);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__115354){
var $elem = cljs.core.first(arglist__115354);
var a = cljs.core.first(cljs.core.next(arglist__115354));
var p__115349 = cljs.core.rest(cljs.core.next(arglist__115354));
return attr__delegate.call(this, $elem, a, p__115349);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__115355){
var vec__115356__115357 = p__115355;
var v__115358 = cljs.core.nth.call(null,vec__115356__115357,0,null);

var k__115359 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__115358)))
{return $elem.data(k__115359);
} else
{return $elem.data(k__115359,v__115358);
}
};
var data = function ($elem,k,var_args){
var p__115355 = null;
if (goog.isDef(var_args)) {
  p__115355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__115355);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__115360){
var $elem = cljs.core.first(arglist__115360);
var k = cljs.core.first(cljs.core.next(arglist__115360));
var p__115355 = cljs.core.rest(cljs.core.next(arglist__115360));
return data__delegate.call(this, $elem, k, p__115355);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__115361 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__115361);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__115362 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__115362);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__115363){
var vec__115364__115365 = p__115363;
var speed__115366 = cljs.core.nth.call(null,vec__115364__115365,0,null);
var on_finish__115367 = cljs.core.nth.call(null,vec__115364__115365,1,null);

return $elem.hide(speed__115366,on_finish__115367);
};
var hide = function ($elem,var_args){
var p__115363 = null;
if (goog.isDef(var_args)) {
  p__115363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__115363);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__115368){
var $elem = cljs.core.first(arglist__115368);
var p__115363 = cljs.core.rest(arglist__115368);
return hide__delegate.call(this, $elem, p__115363);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__115369){
var vec__115370__115371 = p__115369;
var speed__115372 = cljs.core.nth.call(null,vec__115370__115371,0,null);
var on_finish__115373 = cljs.core.nth.call(null,vec__115370__115371,1,null);

return $elem.show(speed__115372,on_finish__115373);
};
var show = function ($elem,var_args){
var p__115369 = null;
if (goog.isDef(var_args)) {
  p__115369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__115369);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__115374){
var $elem = cljs.core.first(arglist__115374);
var p__115369 = cljs.core.rest(arglist__115374);
return show__delegate.call(this, $elem, p__115369);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__115375){
var vec__115376__115377 = p__115375;
var speed__115378 = cljs.core.nth.call(null,vec__115376__115377,0,null);
var on_finish__115379 = cljs.core.nth.call(null,vec__115376__115377,1,null);

return $elem.fadeOut(speed__115378,on_finish__115379);
};
var fade_out = function ($elem,var_args){
var p__115375 = null;
if (goog.isDef(var_args)) {
  p__115375 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__115375);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__115380){
var $elem = cljs.core.first(arglist__115380);
var p__115375 = cljs.core.rest(arglist__115380);
return fade_out__delegate.call(this, $elem, p__115375);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__115381){
var vec__115382__115383 = p__115381;
var speed__115384 = cljs.core.nth.call(null,vec__115382__115383,0,null);
var on_finish__115385 = cljs.core.nth.call(null,vec__115382__115383,1,null);

return $elem.fadeIn(speed__115384,on_finish__115385);
};
var fade_in = function ($elem,var_args){
var p__115381 = null;
if (goog.isDef(var_args)) {
  p__115381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__115381);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__115386){
var $elem = cljs.core.first(arglist__115386);
var p__115381 = cljs.core.rest(arglist__115386);
return fade_in__delegate.call(this, $elem, p__115381);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__115387){
var vec__115388__115389 = p__115387;
var speed__115390 = cljs.core.nth.call(null,vec__115388__115389,0,null);
var on_finish__115391 = cljs.core.nth.call(null,vec__115388__115389,1,null);

return $elem.slideUp(speed__115390,on_finish__115391);
};
var slide_up = function ($elem,var_args){
var p__115387 = null;
if (goog.isDef(var_args)) {
  p__115387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__115387);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__115392){
var $elem = cljs.core.first(arglist__115392);
var p__115387 = cljs.core.rest(arglist__115392);
return slide_up__delegate.call(this, $elem, p__115387);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__115393){
var vec__115394__115395 = p__115393;
var speed__115396 = cljs.core.nth.call(null,vec__115394__115395,0,null);
var on_finish__115397 = cljs.core.nth.call(null,vec__115394__115395,1,null);

return $elem.slideDown(speed__115396,on_finish__115397);
};
var slide_down = function ($elem,var_args){
var p__115393 = null;
if (goog.isDef(var_args)) {
  p__115393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__115393);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__115398){
var $elem = cljs.core.first(arglist__115398);
var p__115393 = cljs.core.rest(arglist__115398);
return slide_down__delegate.call(this, $elem, p__115393);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__115399){
var vec__115400__115401 = p__115399;
var v__115402 = cljs.core.nth.call(null,vec__115400__115401,0,null);

if(cljs.core.truth_(v__115402))
{return $elem.val(v__115402);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__115399 = null;
if (goog.isDef(var_args)) {
  p__115399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__115399);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__115403){
var $elem = cljs.core.first(arglist__115403);
var p__115399 = cljs.core.rest(arglist__115403);
return val__delegate.call(this, $elem, p__115399);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__115404,content,callback){
var vec__115405__115406 = p__115404;
var method__115407 = cljs.core.nth.call(null,vec__115405__115406,0,null);
var uri__115408 = cljs.core.nth.call(null,vec__115405__115406,1,null);

var params__115409 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__115407)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__115408,params__115409);
});
