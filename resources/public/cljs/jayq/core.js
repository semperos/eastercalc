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
var $__delegate = function (sel,p__25689){
var vec__25690__25691 = p__25689;
var context__25692 = cljs.core.nth.call(null,vec__25690__25691,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__25692)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__25692);
}
};
var $ = function (sel,var_args){
var p__25689 = null;
if (goog.isDef(var_args)) {
  p__25689 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__25689);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__25693){
var sel = cljs.core.first(arglist__25693);
var p__25689 = cljs.core.rest(arglist__25693);
return $__delegate.call(this, sel, p__25689);
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
var G__25695 = null;
var G__25695__25696 = (function (this$,k){
var or__3548__auto____25694 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____25694))
{return or__3548__auto____25694;
} else
{return null;
}
});
var G__25695__25697 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__25695 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__25695__25696.call(this,this$,k);
case  3 :
return G__25695__25697.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25695;
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
var G__25699 = null;
var G__25699__25700 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__25699__25701 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__25699 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__25699__25700.call(this,_,k);
case  3 :
return G__25699__25701.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25699;
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
var attr__delegate = function ($elem,a,p__25703){
var vec__25704__25705 = p__25703;
var v__25706 = cljs.core.nth.call(null,vec__25704__25705,0,null);

var a__25707 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__25706)))
{return $elem.attr(a__25707);
} else
{return $elem.attr(a__25707,v__25706);
}
};
var attr = function ($elem,a,var_args){
var p__25703 = null;
if (goog.isDef(var_args)) {
  p__25703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__25703);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__25708){
var $elem = cljs.core.first(arglist__25708);
var a = cljs.core.first(cljs.core.next(arglist__25708));
var p__25703 = cljs.core.rest(cljs.core.next(arglist__25708));
return attr__delegate.call(this, $elem, a, p__25703);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__25709){
var vec__25710__25711 = p__25709;
var v__25712 = cljs.core.nth.call(null,vec__25710__25711,0,null);

var k__25713 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__25712)))
{return $elem.data(k__25713);
} else
{return $elem.data(k__25713,v__25712);
}
};
var data = function ($elem,k,var_args){
var p__25709 = null;
if (goog.isDef(var_args)) {
  p__25709 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__25709);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__25714){
var $elem = cljs.core.first(arglist__25714);
var k = cljs.core.first(cljs.core.next(arglist__25714));
var p__25709 = cljs.core.rest(cljs.core.next(arglist__25714));
return data__delegate.call(this, $elem, k, p__25709);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__25715 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__25715);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__25716 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__25716);
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
var hide__delegate = function ($elem,p__25717){
var vec__25718__25719 = p__25717;
var speed__25720 = cljs.core.nth.call(null,vec__25718__25719,0,null);
var on_finish__25721 = cljs.core.nth.call(null,vec__25718__25719,1,null);

return $elem.hide(speed__25720,on_finish__25721);
};
var hide = function ($elem,var_args){
var p__25717 = null;
if (goog.isDef(var_args)) {
  p__25717 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__25717);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__25722){
var $elem = cljs.core.first(arglist__25722);
var p__25717 = cljs.core.rest(arglist__25722);
return hide__delegate.call(this, $elem, p__25717);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__25723){
var vec__25724__25725 = p__25723;
var speed__25726 = cljs.core.nth.call(null,vec__25724__25725,0,null);
var on_finish__25727 = cljs.core.nth.call(null,vec__25724__25725,1,null);

return $elem.show(speed__25726,on_finish__25727);
};
var show = function ($elem,var_args){
var p__25723 = null;
if (goog.isDef(var_args)) {
  p__25723 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__25723);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__25728){
var $elem = cljs.core.first(arglist__25728);
var p__25723 = cljs.core.rest(arglist__25728);
return show__delegate.call(this, $elem, p__25723);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__25729){
var vec__25730__25731 = p__25729;
var speed__25732 = cljs.core.nth.call(null,vec__25730__25731,0,null);
var on_finish__25733 = cljs.core.nth.call(null,vec__25730__25731,1,null);

return $elem.fadeOut(speed__25732,on_finish__25733);
};
var fade_out = function ($elem,var_args){
var p__25729 = null;
if (goog.isDef(var_args)) {
  p__25729 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__25729);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__25734){
var $elem = cljs.core.first(arglist__25734);
var p__25729 = cljs.core.rest(arglist__25734);
return fade_out__delegate.call(this, $elem, p__25729);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__25735){
var vec__25736__25737 = p__25735;
var speed__25738 = cljs.core.nth.call(null,vec__25736__25737,0,null);
var on_finish__25739 = cljs.core.nth.call(null,vec__25736__25737,1,null);

return $elem.fadeIn(speed__25738,on_finish__25739);
};
var fade_in = function ($elem,var_args){
var p__25735 = null;
if (goog.isDef(var_args)) {
  p__25735 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__25735);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__25740){
var $elem = cljs.core.first(arglist__25740);
var p__25735 = cljs.core.rest(arglist__25740);
return fade_in__delegate.call(this, $elem, p__25735);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__25741){
var vec__25742__25743 = p__25741;
var speed__25744 = cljs.core.nth.call(null,vec__25742__25743,0,null);
var on_finish__25745 = cljs.core.nth.call(null,vec__25742__25743,1,null);

return $elem.slideUp(speed__25744,on_finish__25745);
};
var slide_up = function ($elem,var_args){
var p__25741 = null;
if (goog.isDef(var_args)) {
  p__25741 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__25741);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__25746){
var $elem = cljs.core.first(arglist__25746);
var p__25741 = cljs.core.rest(arglist__25746);
return slide_up__delegate.call(this, $elem, p__25741);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__25747){
var vec__25748__25749 = p__25747;
var speed__25750 = cljs.core.nth.call(null,vec__25748__25749,0,null);
var on_finish__25751 = cljs.core.nth.call(null,vec__25748__25749,1,null);

return $elem.slideDown(speed__25750,on_finish__25751);
};
var slide_down = function ($elem,var_args){
var p__25747 = null;
if (goog.isDef(var_args)) {
  p__25747 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__25747);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__25752){
var $elem = cljs.core.first(arglist__25752);
var p__25747 = cljs.core.rest(arglist__25752);
return slide_down__delegate.call(this, $elem, p__25747);
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
var val__delegate = function ($elem,p__25753){
var vec__25754__25755 = p__25753;
var v__25756 = cljs.core.nth.call(null,vec__25754__25755,0,null);

if(cljs.core.truth_(v__25756))
{return $elem.val(v__25756);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__25753 = null;
if (goog.isDef(var_args)) {
  p__25753 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__25753);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__25757){
var $elem = cljs.core.first(arglist__25757);
var p__25753 = cljs.core.rest(arglist__25757);
return val__delegate.call(this, $elem, p__25753);
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
jayq.core.xhr = (function xhr(p__25758,content,callback){
var vec__25759__25760 = p__25758;
var method__25761 = cljs.core.nth.call(null,vec__25759__25760,0,null);
var uri__25762 = cljs.core.nth.call(null,vec__25759__25760,1,null);

var params__25763 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__25761)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__25762,params__25763);
});
