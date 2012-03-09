goog.provide('eastercalc.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('clojure.string');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
* 
* Borrowed and updated from mmcgrana.
*/
eastercalc.core.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__23733){
var vec__23734__23735 = p__23733;
var k__23736 = cljs.core.nth.call(null,vec__23734__23735,0,null);
var v__23737 = cljs.core.nth.call(null,vec__23734__23735,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__23736),clj__GT_js.call(null,v__23737));
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
eastercalc.core.enable_tooltips = (function enable_tooltips(){
jayq.core.$.call(null,"\uFDD0'#year-start-tip").tooltip();
return jayq.core.$.call(null,"\uFDD0'#year-end-tip").tooltip();
});
eastercalc.core.clear_form = (function clear_form(){
jayq.core.val.call(null,jayq.core.$.call(null,"input[type='text']"),"");
return jayq.core.$.call(null,"input[type='checkbox']").removeAttr("checked");
});
eastercalc.core.bind_clear_form = (function bind_clear_form(){
return jayq.core.bind.call(null,jayq.core.$.call(null,"#clear-form"),"click",eastercalc.core.clear_form);
});
var group__3091__auto____23738 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.dates_for_years_table = (function dates_for_years_table(title,seq_of_maps){
var elem__3092__auto____23744 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Year"]),cljs.core.Vector.fromArray(["\uFDD0'th","Date"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____23743 = (function iter__23739(s__23740){
return (new cljs.core.LazySeq(null,false,(function (){
var s__23740__23741 = s__23740;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__23740__23741)))
{var entry__23742 = cljs.core.first.call(null,s__23740__23741);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,entry__23742.year)]),cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,entry__23742.date)])]),iter__23739.call(null,cljs.core.rest.call(null,s__23740__23741)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____23743.call(null,seq_of_maps);
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3092__auto____23744.setAttribute("crateGroup",group__3091__auto____23738);
return elem__3092__auto____23744;
});
eastercalc.core.dates_for_years_table.prototype._crateGroup = group__3091__auto____23738;
var group__3091__auto____23745 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.years_for_dates_table = (function years_for_dates_table(title,seq_of_maps){
var elem__3092__auto____23751 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Date"]),cljs.core.Vector.fromArray(["\uFDD0'th","Years"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____23750 = (function iter__23746(s__23747){
return (new cljs.core.LazySeq(null,false,(function (){
var s__23747__23748 = s__23747;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__23747__23748)))
{var item__23749 = cljs.core.first.call(null,s__23747__23748);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.first.call(null,item__23749)]),cljs.core.Vector.fromArray(["\uFDD0'td",clojure.string.join.call(null,", ",cljs.core.second.call(null,item__23749))])]),iter__23746.call(null,cljs.core.rest.call(null,s__23747__23748)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____23750.call(null,cljs.core.js__GT_clj.call(null,seq_of_maps));
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3092__auto____23751.setAttribute("crateGroup",group__3091__auto____23745);
return elem__3092__auto____23751;
});
eastercalc.core.years_for_dates_table.prototype._crateGroup = group__3091__auto____23745;
var group__3091__auto____23752 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.disclaimer = (function disclaimer(s){
var elem__3092__auto____23753 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span12"}),cljs.core.Vector.fromArray(["\uFDD0'span",cljs.core.Vector.fromArray(["\uFDD0'em",s])])]));

elem__3092__auto____23753.setAttribute("crateGroup",group__3091__auto____23752);
return elem__3092__auto____23753;
});
eastercalc.core.disclaimer.prototype._crateGroup = group__3091__auto____23752;
eastercalc.core.submit_dates_for_years = (function submit_dates_for_years(){
var eastern__23754 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__23755 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__23756 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start"));
var year_end__23757 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end"));

return jQuery.ajax(eastercalc.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'url","\uFDD0'dataType","\uFDD0'data","\uFDD0'success","\uFDD0'error"],{"\uFDD0'url":"\/data\/dates-for-years","\uFDD0'dataType":"json","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__23754,"\uFDD0'western":western__23755,"\uFDD0'year-start":year_start__23756,"\uFDD0'year-end":year_end__23757}),"\uFDD0'success":(function (data){
return jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#results"),""),eastercalc.core.disclaimer.call(null,data.disclaimer)),eastercalc.core.dates_for_years_table.call(null,"Orthodox Pascha",data.eastern)),eastercalc.core.dates_for_years_table.call(null,"Western Easter",data.western));
}),"\uFDD0'error":(function (e){
return console.log(cljs.core.str.call(null,"An error occurred: ",e));
})})));
});
eastercalc.core.submit_years_for_dates = (function submit_years_for_dates(){
var eastern__23758 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__23759 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__23760 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start"));
var year_end__23761 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end"));

return jQuery.ajax(eastercalc.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'url","\uFDD0'dataType","\uFDD0'data","\uFDD0'success","\uFDD0'error"],{"\uFDD0'url":"\/data\/years-for-dates","\uFDD0'dataType":"json","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__23758,"\uFDD0'western":western__23759,"\uFDD0'year-start":year_start__23760,"\uFDD0'year-end":year_end__23761}),"\uFDD0'success":(function (data){
return jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#results"),""),eastercalc.core.disclaimer.call(null,data.disclaimer)),eastercalc.core.years_for_dates_table.call(null,"Orthodox Pascha",data.eastern)),eastercalc.core.years_for_dates_table.call(null,"Western Easter",data.western));
}),"\uFDD0'error":(function (e){
return console.log(cljs.core.str.call(null,"An error occurred: ",e));
})})));
});
eastercalc.core.bind_submit_dates_for_years = (function bind_submit_dates_for_years(){
return jayq.core.bind.call(null,jayq.core.$.call(null,"#submit-dates-for-years"),"click",eastercalc.core.submit_dates_for_years);
});
eastercalc.core.bind_submit_years_for_dates = (function bind_submit_years_for_dates(){
return jayq.core.bind.call(null,jayq.core.$.call(null,"#submit-years-for-dates"),"click",eastercalc.core.submit_years_for_dates);
});
