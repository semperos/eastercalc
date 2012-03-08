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
{return cljs.core.reduce.call(null,(function (m,p__34139){
var vec__34140__34141 = p__34139;
var k__34142 = cljs.core.nth.call(null,vec__34140__34141,0,null);
var v__34143 = cljs.core.nth.call(null,vec__34140__34141,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__34142),clj__GT_js.call(null,v__34143));
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
var group__3091__auto____34144 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.dates_for_years_table = (function dates_for_years_table(title,seq_of_maps){
var elem__3092__auto____34150 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Year"]),cljs.core.Vector.fromArray(["\uFDD0'th","Date"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____34149 = (function iter__34145(s__34146){
return (new cljs.core.LazySeq(null,false,(function (){
var s__34146__34147 = s__34146;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__34146__34147)))
{var entry__34148 = cljs.core.first.call(null,s__34146__34147);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,entry__34148.year)]),cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,entry__34148.date)])]),iter__34145.call(null,cljs.core.rest.call(null,s__34146__34147)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____34149.call(null,seq_of_maps);
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3092__auto____34150.setAttribute("crateGroup",group__3091__auto____34144);
return elem__3092__auto____34150;
});
eastercalc.core.dates_for_years_table.prototype._crateGroup = group__3091__auto____34144;
var group__3091__auto____34151 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.years_for_dates_table = (function years_for_dates_table(title,seq_of_maps){
var elem__3092__auto____34160 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Date"]),cljs.core.Vector.fromArray(["\uFDD0'th","Years"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____34159 = (function iter__34152(s__34153){
return (new cljs.core.LazySeq(null,false,(function (){
var s__34153__34154 = s__34153;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__34153__34154)))
{var vec__34155__34156 = cljs.core.first.call(null,s__34153__34154);
var k__34157 = cljs.core.nth.call(null,vec__34155__34156,0,null);
var v__34158 = cljs.core.nth.call(null,vec__34155__34156,1,null);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,k__34157)]),cljs.core.Vector.fromArray(["\uFDD0'td",clojure.string.join.call(null,", ",v__34158)])]),iter__34152.call(null,cljs.core.rest.call(null,s__34153__34154)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____34159.call(null,cljs.core.js__GT_clj.call(null,seq_of_maps));
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3092__auto____34160.setAttribute("crateGroup",group__3091__auto____34151);
return elem__3092__auto____34160;
});
eastercalc.core.years_for_dates_table.prototype._crateGroup = group__3091__auto____34151;
var group__3091__auto____34161 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.disclaimer = (function disclaimer(s){
var elem__3092__auto____34162 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span12"}),cljs.core.Vector.fromArray(["\uFDD0'span",cljs.core.Vector.fromArray(["\uFDD0'em",s])])]));

elem__3092__auto____34162.setAttribute("crateGroup",group__3091__auto____34161);
return elem__3092__auto____34162;
});
eastercalc.core.disclaimer.prototype._crateGroup = group__3091__auto____34161;
eastercalc.core.submit_dates_for_years = (function submit_dates_for_years(){
var eastern__34163 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__34164 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__34165 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start"));
var year_end__34166 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end"));

return jQuery.ajax(eastercalc.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'url","\uFDD0'dataType","\uFDD0'data","\uFDD0'success","\uFDD0'error"],{"\uFDD0'url":"\/data\/dates-for-years","\uFDD0'dataType":"json","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__34163,"\uFDD0'western":western__34164,"\uFDD0'year-start":year_start__34165,"\uFDD0'year-end":year_end__34166}),"\uFDD0'success":(function (data){
return jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#results"),""),eastercalc.core.disclaimer.call(null,data.disclaimer)),eastercalc.core.dates_for_years_table.call(null,"Orthodox Pascha",data.eastern)),eastercalc.core.dates_for_years_table.call(null,"Western Easter",data.western));
}),"\uFDD0'error":(function (e){
return console.log(cljs.core.str.call(null,"An error occurred: ",e));
})})));
});
eastercalc.core.submit_years_for_dates = (function submit_years_for_dates(){
var eastern__34167 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__34168 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__34169 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start"));
var year_end__34170 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end"));

return jQuery.ajax(eastercalc.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'url","\uFDD0'dataType","\uFDD0'data","\uFDD0'success","\uFDD0'error"],{"\uFDD0'url":"\/data\/years-for-dates","\uFDD0'dataType":"json","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__34167,"\uFDD0'western":western__34168,"\uFDD0'year-start":year_start__34169,"\uFDD0'year-end":year_end__34170}),"\uFDD0'success":(function (data){
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
