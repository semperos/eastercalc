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
var $__delegate = function (sel,p__88114){
var vec__88115__88116 = p__88114;
var context__88117 = cljs.core.nth.call(null,vec__88115__88116,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__88117)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__88117);
}
};
var $ = function (sel,var_args){
var p__88114 = null;
if (goog.isDef(var_args)) {
  p__88114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__88114);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__88118){
var sel = cljs.core.first(arglist__88118);
var p__88114 = cljs.core.rest(arglist__88118);
return $__delegate.call(this, sel, p__88114);
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
var G__88120 = null;
var G__88120__88121 = (function (this$,k){
var or__3548__auto____88119 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____88119))
{return or__3548__auto____88119;
} else
{return null;
}
});
var G__88120__88122 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__88120 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__88120__88121.call(this,this$,k);
case  3 :
return G__88120__88122.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88120;
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
var G__88124 = null;
var G__88124__88125 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__88124__88126 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__88124 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__88124__88125.call(this,_,k);
case  3 :
return G__88124__88126.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__88124;
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
var attr__delegate = function ($elem,a,p__88128){
var vec__88129__88130 = p__88128;
var v__88131 = cljs.core.nth.call(null,vec__88129__88130,0,null);

var a__88132 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__88131)))
{return $elem.attr(a__88132);
} else
{return $elem.attr(a__88132,v__88131);
}
};
var attr = function ($elem,a,var_args){
var p__88128 = null;
if (goog.isDef(var_args)) {
  p__88128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__88128);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__88133){
var $elem = cljs.core.first(arglist__88133);
var a = cljs.core.first(cljs.core.next(arglist__88133));
var p__88128 = cljs.core.rest(cljs.core.next(arglist__88133));
return attr__delegate.call(this, $elem, a, p__88128);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__88134){
var vec__88135__88136 = p__88134;
var v__88137 = cljs.core.nth.call(null,vec__88135__88136,0,null);

var k__88138 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__88137)))
{return $elem.data(k__88138);
} else
{return $elem.data(k__88138,v__88137);
}
};
var data = function ($elem,k,var_args){
var p__88134 = null;
if (goog.isDef(var_args)) {
  p__88134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__88134);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__88139){
var $elem = cljs.core.first(arglist__88139);
var k = cljs.core.first(cljs.core.next(arglist__88139));
var p__88134 = cljs.core.rest(cljs.core.next(arglist__88139));
return data__delegate.call(this, $elem, k, p__88134);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__88140 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__88140);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__88141 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__88141);
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
var hide__delegate = function ($elem,p__88142){
var vec__88143__88144 = p__88142;
var speed__88145 = cljs.core.nth.call(null,vec__88143__88144,0,null);
var on_finish__88146 = cljs.core.nth.call(null,vec__88143__88144,1,null);

return $elem.hide(speed__88145,on_finish__88146);
};
var hide = function ($elem,var_args){
var p__88142 = null;
if (goog.isDef(var_args)) {
  p__88142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__88142);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__88147){
var $elem = cljs.core.first(arglist__88147);
var p__88142 = cljs.core.rest(arglist__88147);
return hide__delegate.call(this, $elem, p__88142);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__88148){
var vec__88149__88150 = p__88148;
var speed__88151 = cljs.core.nth.call(null,vec__88149__88150,0,null);
var on_finish__88152 = cljs.core.nth.call(null,vec__88149__88150,1,null);

return $elem.show(speed__88151,on_finish__88152);
};
var show = function ($elem,var_args){
var p__88148 = null;
if (goog.isDef(var_args)) {
  p__88148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__88148);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__88153){
var $elem = cljs.core.first(arglist__88153);
var p__88148 = cljs.core.rest(arglist__88153);
return show__delegate.call(this, $elem, p__88148);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__88154){
var vec__88155__88156 = p__88154;
var speed__88157 = cljs.core.nth.call(null,vec__88155__88156,0,null);
var on_finish__88158 = cljs.core.nth.call(null,vec__88155__88156,1,null);

return $elem.fadeOut(speed__88157,on_finish__88158);
};
var fade_out = function ($elem,var_args){
var p__88154 = null;
if (goog.isDef(var_args)) {
  p__88154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__88154);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__88159){
var $elem = cljs.core.first(arglist__88159);
var p__88154 = cljs.core.rest(arglist__88159);
return fade_out__delegate.call(this, $elem, p__88154);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__88160){
var vec__88161__88162 = p__88160;
var speed__88163 = cljs.core.nth.call(null,vec__88161__88162,0,null);
var on_finish__88164 = cljs.core.nth.call(null,vec__88161__88162,1,null);

return $elem.fadeIn(speed__88163,on_finish__88164);
};
var fade_in = function ($elem,var_args){
var p__88160 = null;
if (goog.isDef(var_args)) {
  p__88160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__88160);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__88165){
var $elem = cljs.core.first(arglist__88165);
var p__88160 = cljs.core.rest(arglist__88165);
return fade_in__delegate.call(this, $elem, p__88160);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__88166){
var vec__88167__88168 = p__88166;
var speed__88169 = cljs.core.nth.call(null,vec__88167__88168,0,null);
var on_finish__88170 = cljs.core.nth.call(null,vec__88167__88168,1,null);

return $elem.slideUp(speed__88169,on_finish__88170);
};
var slide_up = function ($elem,var_args){
var p__88166 = null;
if (goog.isDef(var_args)) {
  p__88166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__88166);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__88171){
var $elem = cljs.core.first(arglist__88171);
var p__88166 = cljs.core.rest(arglist__88171);
return slide_up__delegate.call(this, $elem, p__88166);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__88172){
var vec__88173__88174 = p__88172;
var speed__88175 = cljs.core.nth.call(null,vec__88173__88174,0,null);
var on_finish__88176 = cljs.core.nth.call(null,vec__88173__88174,1,null);

return $elem.slideDown(speed__88175,on_finish__88176);
};
var slide_down = function ($elem,var_args){
var p__88172 = null;
if (goog.isDef(var_args)) {
  p__88172 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__88172);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__88177){
var $elem = cljs.core.first(arglist__88177);
var p__88172 = cljs.core.rest(arglist__88177);
return slide_down__delegate.call(this, $elem, p__88172);
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
var val__delegate = function ($elem,p__88178){
var vec__88179__88180 = p__88178;
var v__88181 = cljs.core.nth.call(null,vec__88179__88180,0,null);

if(cljs.core.truth_(v__88181))
{return $elem.val(v__88181);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__88178 = null;
if (goog.isDef(var_args)) {
  p__88178 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__88178);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__88182){
var $elem = cljs.core.first(arglist__88182);
var p__88178 = cljs.core.rest(arglist__88182);
return val__delegate.call(this, $elem, p__88178);
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
jayq.core.xhr = (function xhr(p__88183,content,callback){
var vec__88184__88185 = p__88183;
var method__88186 = cljs.core.nth.call(null,vec__88184__88185,0,null);
var uri__88187 = cljs.core.nth.call(null,vec__88184__88185,1,null);

var params__88188 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__88186)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__88187,params__88188);
});
