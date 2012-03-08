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
var $__delegate = function (sel,p__36098){
var vec__36099__36100 = p__36098;
var context__36101 = cljs.core.nth.call(null,vec__36099__36100,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__36101)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__36101);
}
};
var $ = function (sel,var_args){
var p__36098 = null;
if (goog.isDef(var_args)) {
  p__36098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__36098);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__36102){
var sel = cljs.core.first(arglist__36102);
var p__36098 = cljs.core.rest(arglist__36102);
return $__delegate.call(this, sel, p__36098);
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
var G__36104 = null;
var G__36104__36105 = (function (this$,k){
var or__3548__auto____36103 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____36103))
{return or__3548__auto____36103;
} else
{return null;
}
});
var G__36104__36106 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__36104 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__36104__36105.call(this,this$,k);
case  3 :
return G__36104__36106.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36104;
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
var G__36108 = null;
var G__36108__36109 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__36108__36110 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__36108 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__36108__36109.call(this,_,k);
case  3 :
return G__36108__36110.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36108;
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
var attr__delegate = function ($elem,a,p__36112){
var vec__36113__36114 = p__36112;
var v__36115 = cljs.core.nth.call(null,vec__36113__36114,0,null);

var a__36116 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__36115)))
{return $elem.attr(a__36116);
} else
{return $elem.attr(a__36116,v__36115);
}
};
var attr = function ($elem,a,var_args){
var p__36112 = null;
if (goog.isDef(var_args)) {
  p__36112 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__36112);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__36117){
var $elem = cljs.core.first(arglist__36117);
var a = cljs.core.first(cljs.core.next(arglist__36117));
var p__36112 = cljs.core.rest(cljs.core.next(arglist__36117));
return attr__delegate.call(this, $elem, a, p__36112);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__36118){
var vec__36119__36120 = p__36118;
var v__36121 = cljs.core.nth.call(null,vec__36119__36120,0,null);

var k__36122 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__36121)))
{return $elem.data(k__36122);
} else
{return $elem.data(k__36122,v__36121);
}
};
var data = function ($elem,k,var_args){
var p__36118 = null;
if (goog.isDef(var_args)) {
  p__36118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__36118);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__36123){
var $elem = cljs.core.first(arglist__36123);
var k = cljs.core.first(cljs.core.next(arglist__36123));
var p__36118 = cljs.core.rest(cljs.core.next(arglist__36123));
return data__delegate.call(this, $elem, k, p__36118);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__36124 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__36124);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__36125 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__36125);
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
var hide__delegate = function ($elem,p__36126){
var vec__36127__36128 = p__36126;
var speed__36129 = cljs.core.nth.call(null,vec__36127__36128,0,null);
var on_finish__36130 = cljs.core.nth.call(null,vec__36127__36128,1,null);

return $elem.hide(speed__36129,on_finish__36130);
};
var hide = function ($elem,var_args){
var p__36126 = null;
if (goog.isDef(var_args)) {
  p__36126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__36126);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__36131){
var $elem = cljs.core.first(arglist__36131);
var p__36126 = cljs.core.rest(arglist__36131);
return hide__delegate.call(this, $elem, p__36126);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__36132){
var vec__36133__36134 = p__36132;
var speed__36135 = cljs.core.nth.call(null,vec__36133__36134,0,null);
var on_finish__36136 = cljs.core.nth.call(null,vec__36133__36134,1,null);

return $elem.show(speed__36135,on_finish__36136);
};
var show = function ($elem,var_args){
var p__36132 = null;
if (goog.isDef(var_args)) {
  p__36132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__36132);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__36137){
var $elem = cljs.core.first(arglist__36137);
var p__36132 = cljs.core.rest(arglist__36137);
return show__delegate.call(this, $elem, p__36132);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__36138){
var vec__36139__36140 = p__36138;
var speed__36141 = cljs.core.nth.call(null,vec__36139__36140,0,null);
var on_finish__36142 = cljs.core.nth.call(null,vec__36139__36140,1,null);

return $elem.fadeOut(speed__36141,on_finish__36142);
};
var fade_out = function ($elem,var_args){
var p__36138 = null;
if (goog.isDef(var_args)) {
  p__36138 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__36138);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__36143){
var $elem = cljs.core.first(arglist__36143);
var p__36138 = cljs.core.rest(arglist__36143);
return fade_out__delegate.call(this, $elem, p__36138);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__36144){
var vec__36145__36146 = p__36144;
var speed__36147 = cljs.core.nth.call(null,vec__36145__36146,0,null);
var on_finish__36148 = cljs.core.nth.call(null,vec__36145__36146,1,null);

return $elem.fadeIn(speed__36147,on_finish__36148);
};
var fade_in = function ($elem,var_args){
var p__36144 = null;
if (goog.isDef(var_args)) {
  p__36144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__36144);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__36149){
var $elem = cljs.core.first(arglist__36149);
var p__36144 = cljs.core.rest(arglist__36149);
return fade_in__delegate.call(this, $elem, p__36144);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__36150){
var vec__36151__36152 = p__36150;
var speed__36153 = cljs.core.nth.call(null,vec__36151__36152,0,null);
var on_finish__36154 = cljs.core.nth.call(null,vec__36151__36152,1,null);

return $elem.slideUp(speed__36153,on_finish__36154);
};
var slide_up = function ($elem,var_args){
var p__36150 = null;
if (goog.isDef(var_args)) {
  p__36150 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__36150);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__36155){
var $elem = cljs.core.first(arglist__36155);
var p__36150 = cljs.core.rest(arglist__36155);
return slide_up__delegate.call(this, $elem, p__36150);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__36156){
var vec__36157__36158 = p__36156;
var speed__36159 = cljs.core.nth.call(null,vec__36157__36158,0,null);
var on_finish__36160 = cljs.core.nth.call(null,vec__36157__36158,1,null);

return $elem.slideDown(speed__36159,on_finish__36160);
};
var slide_down = function ($elem,var_args){
var p__36156 = null;
if (goog.isDef(var_args)) {
  p__36156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__36156);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__36161){
var $elem = cljs.core.first(arglist__36161);
var p__36156 = cljs.core.rest(arglist__36161);
return slide_down__delegate.call(this, $elem, p__36156);
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
var val__delegate = function ($elem,p__36162){
var vec__36163__36164 = p__36162;
var v__36165 = cljs.core.nth.call(null,vec__36163__36164,0,null);

if(cljs.core.truth_(v__36165))
{return $elem.val(v__36165);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__36162 = null;
if (goog.isDef(var_args)) {
  p__36162 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__36162);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__36166){
var $elem = cljs.core.first(arglist__36166);
var p__36162 = cljs.core.rest(arglist__36166);
return val__delegate.call(this, $elem, p__36162);
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
jayq.core.xhr = (function xhr(p__36167,content,callback){
var vec__36168__36169 = p__36167;
var method__36170 = cljs.core.nth.call(null,vec__36168__36169,0,null);
var uri__36171 = cljs.core.nth.call(null,vec__36168__36169,1,null);

var params__36172 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__36170)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__36171,params__36172);
});
