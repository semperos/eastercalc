goog.provide('eastercalc.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
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
{return cljs.core.reduce.call(null,(function (m,p__113390){
var vec__113391__113392 = p__113390;
var k__113393 = cljs.core.nth.call(null,vec__113391__113392,0,null);
var v__113394 = cljs.core.nth.call(null,vec__113391__113392,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__113393),clj__GT_js.call(null,v__113394));
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
var group__15033__auto____113395 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.dates_for_years_table = (function dates_for_years_table(title,seq_of_maps){
var elem__15034__auto____113401 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Year"]),cljs.core.Vector.fromArray(["\uFDD0'th","Date"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____113400 = (function iter__113396(s__113397){
return (new cljs.core.LazySeq(null,false,(function (){
var s__113397__113398 = s__113397;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__113397__113398)))
{var entry__113399 = cljs.core.first.call(null,s__113397__113398);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,entry__113399.year)]),cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,entry__113399.date)])]),iter__113396.call(null,cljs.core.rest.call(null,s__113397__113398)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____113400.call(null,seq_of_maps);
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__15034__auto____113401.setAttribute("crateGroup",group__15033__auto____113395);
return elem__15034__auto____113401;
});
eastercalc.core.dates_for_years_table.prototype._crateGroup = group__15033__auto____113395;
var group__15033__auto____113402 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.disclaimer = (function disclaimer(s){
var elem__15034__auto____113403 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span12"}),cljs.core.Vector.fromArray(["\uFDD0'span",cljs.core.Vector.fromArray(["\uFDD0'em",s])])]));

elem__15034__auto____113403.setAttribute("crateGroup",group__15033__auto____113402);
return elem__15034__auto____113403;
});
eastercalc.core.disclaimer.prototype._crateGroup = group__15033__auto____113402;
eastercalc.core.submit_dates_for_years = (function submit_dates_for_years(){
var eastern__113404 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__113405 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__113406 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start"));
var year_end__113407 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end"));

return jQuery.ajax(eastercalc.core.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'url","\uFDD0'dataType","\uFDD0'data","\uFDD0'success","\uFDD0'error"],{"\uFDD0'url":"\/data\/dates-for-years","\uFDD0'dataType":"json","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__113404,"\uFDD0'western":western__113405,"\uFDD0'year-start":year_start__113406,"\uFDD0'year-end":year_end__113407}),"\uFDD0'success":(function (data){
window.mydata = data;
return jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#results"),""),eastercalc.core.disclaimer.call(null,data.disclaimer)),eastercalc.core.dates_for_years_table.call(null,"Orthodox Pascha",data.eastern)),eastercalc.core.dates_for_years_table.call(null,"Western Easter",data.western));
}),"\uFDD0'error":(function (e){
return console.log(cljs.core.str.call(null,"An error occurred: ",e));
})})));
});
eastercalc.core.bind_submit_dates_for_years = (function bind_submit_dates_for_years(){
return jayq.core.bind.call(null,jayq.core.$.call(null,"#submit-form"),"click",eastercalc.core.submit_dates_for_years);
});
