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
var $__delegate = function (sel,p__13824){
var vec__13825__13826 = p__13824;
var context__13827 = cljs.core.nth.call(null,vec__13825__13826,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__13827)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__13827);
}
};
var $ = function (sel,var_args){
var p__13824 = null;
if (goog.isDef(var_args)) {
  p__13824 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__13824);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__13828){
var sel = cljs.core.first(arglist__13828);
var p__13824 = cljs.core.rest(arglist__13828);
return $__delegate.call(this, sel, p__13824);
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
var G__13830 = null;
var G__13830__13831 = (function (this$,k){
var or__3548__auto____13829 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____13829))
{return or__3548__auto____13829;
} else
{return null;
}
});
var G__13830__13832 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__13830 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__13830__13831.call(this,this$,k);
case  3 :
return G__13830__13832.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13830;
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
var G__13834 = null;
var G__13834__13835 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13834__13836 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13834 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__13834__13835.call(this,_,k);
case  3 :
return G__13834__13836.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13834;
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
var attr__delegate = function ($elem,a,p__13838){
var vec__13839__13840 = p__13838;
var v__13841 = cljs.core.nth.call(null,vec__13839__13840,0,null);

var a__13842 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__13841)))
{return $elem.attr(a__13842);
} else
{return $elem.attr(a__13842,v__13841);
}
};
var attr = function ($elem,a,var_args){
var p__13838 = null;
if (goog.isDef(var_args)) {
  p__13838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__13838);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__13843){
var $elem = cljs.core.first(arglist__13843);
var a = cljs.core.first(cljs.core.next(arglist__13843));
var p__13838 = cljs.core.rest(cljs.core.next(arglist__13843));
return attr__delegate.call(this, $elem, a, p__13838);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__13844){
var vec__13845__13846 = p__13844;
var v__13847 = cljs.core.nth.call(null,vec__13845__13846,0,null);

var k__13848 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__13847)))
{return $elem.data(k__13848);
} else
{return $elem.data(k__13848,v__13847);
}
};
var data = function ($elem,k,var_args){
var p__13844 = null;
if (goog.isDef(var_args)) {
  p__13844 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__13844);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__13849){
var $elem = cljs.core.first(arglist__13849);
var k = cljs.core.first(cljs.core.next(arglist__13849));
var p__13844 = cljs.core.rest(cljs.core.next(arglist__13849));
return data__delegate.call(this, $elem, k, p__13844);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__13850 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__13850);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__13851 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__13851);
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
var hide__delegate = function ($elem,p__13852){
var vec__13853__13854 = p__13852;
var speed__13855 = cljs.core.nth.call(null,vec__13853__13854,0,null);
var on_finish__13856 = cljs.core.nth.call(null,vec__13853__13854,1,null);

return $elem.hide(speed__13855,on_finish__13856);
};
var hide = function ($elem,var_args){
var p__13852 = null;
if (goog.isDef(var_args)) {
  p__13852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__13852);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__13857){
var $elem = cljs.core.first(arglist__13857);
var p__13852 = cljs.core.rest(arglist__13857);
return hide__delegate.call(this, $elem, p__13852);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__13858){
var vec__13859__13860 = p__13858;
var speed__13861 = cljs.core.nth.call(null,vec__13859__13860,0,null);
var on_finish__13862 = cljs.core.nth.call(null,vec__13859__13860,1,null);

return $elem.show(speed__13861,on_finish__13862);
};
var show = function ($elem,var_args){
var p__13858 = null;
if (goog.isDef(var_args)) {
  p__13858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__13858);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__13863){
var $elem = cljs.core.first(arglist__13863);
var p__13858 = cljs.core.rest(arglist__13863);
return show__delegate.call(this, $elem, p__13858);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__13864){
var vec__13865__13866 = p__13864;
var speed__13867 = cljs.core.nth.call(null,vec__13865__13866,0,null);
var on_finish__13868 = cljs.core.nth.call(null,vec__13865__13866,1,null);

return $elem.fadeOut(speed__13867,on_finish__13868);
};
var fade_out = function ($elem,var_args){
var p__13864 = null;
if (goog.isDef(var_args)) {
  p__13864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__13864);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__13869){
var $elem = cljs.core.first(arglist__13869);
var p__13864 = cljs.core.rest(arglist__13869);
return fade_out__delegate.call(this, $elem, p__13864);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__13870){
var vec__13871__13872 = p__13870;
var speed__13873 = cljs.core.nth.call(null,vec__13871__13872,0,null);
var on_finish__13874 = cljs.core.nth.call(null,vec__13871__13872,1,null);

return $elem.fadeIn(speed__13873,on_finish__13874);
};
var fade_in = function ($elem,var_args){
var p__13870 = null;
if (goog.isDef(var_args)) {
  p__13870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__13870);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__13875){
var $elem = cljs.core.first(arglist__13875);
var p__13870 = cljs.core.rest(arglist__13875);
return fade_in__delegate.call(this, $elem, p__13870);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__13876){
var vec__13877__13878 = p__13876;
var speed__13879 = cljs.core.nth.call(null,vec__13877__13878,0,null);
var on_finish__13880 = cljs.core.nth.call(null,vec__13877__13878,1,null);

return $elem.slideUp(speed__13879,on_finish__13880);
};
var slide_up = function ($elem,var_args){
var p__13876 = null;
if (goog.isDef(var_args)) {
  p__13876 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__13876);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__13881){
var $elem = cljs.core.first(arglist__13881);
var p__13876 = cljs.core.rest(arglist__13881);
return slide_up__delegate.call(this, $elem, p__13876);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__13882){
var vec__13883__13884 = p__13882;
var speed__13885 = cljs.core.nth.call(null,vec__13883__13884,0,null);
var on_finish__13886 = cljs.core.nth.call(null,vec__13883__13884,1,null);

return $elem.slideDown(speed__13885,on_finish__13886);
};
var slide_down = function ($elem,var_args){
var p__13882 = null;
if (goog.isDef(var_args)) {
  p__13882 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__13882);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__13887){
var $elem = cljs.core.first(arglist__13887);
var p__13882 = cljs.core.rest(arglist__13887);
return slide_down__delegate.call(this, $elem, p__13882);
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
var val__delegate = function ($elem,p__13888){
var vec__13889__13890 = p__13888;
var v__13891 = cljs.core.nth.call(null,vec__13889__13890,0,null);

if(cljs.core.truth_(v__13891))
{return $elem.val(v__13891);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__13888 = null;
if (goog.isDef(var_args)) {
  p__13888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__13888);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__13892){
var $elem = cljs.core.first(arglist__13892);
var p__13888 = cljs.core.rest(arglist__13892);
return val__delegate.call(this, $elem, p__13888);
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
jayq.core.xhr = (function xhr(p__13893,content,callback){
var vec__13894__13895 = p__13893;
var method__13896 = cljs.core.nth.call(null,vec__13894__13895,0,null);
var uri__13897 = cljs.core.nth.call(null,vec__13894__13895,1,null);

var params__13898 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__13896)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__13897,params__13898);
});
