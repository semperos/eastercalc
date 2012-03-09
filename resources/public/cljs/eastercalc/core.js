goog.provide('eastercalc.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('eastercalc.util');
goog.require('crate.core');
goog.require('fetch.remotes');
goog.require('clojure.string');
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
var group__3115__auto____11868 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.dates_for_years_table = (function dates_for_years_table(title,seq_of_maps){
var elem__3116__auto____11874 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Year"]),cljs.core.Vector.fromArray(["\uFDD0'th","Date"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____11873 = (function iter__11869(s__11870){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11870__11871 = s__11870;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__11870__11871)))
{var m__11872 = cljs.core.first.call(null,s__11870__11871);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,m__11872.call(null,"year"))]),cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,m__11872.call(null,"date"))])]),iter__11869.call(null,cljs.core.rest.call(null,s__11870__11871)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____11873.call(null,seq_of_maps);
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3116__auto____11874.setAttribute("crateGroup",group__3115__auto____11868);
return elem__3116__auto____11874;
});
eastercalc.core.dates_for_years_table.prototype._crateGroup = group__3115__auto____11868;
var group__3115__auto____11875 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.years_for_dates_table = (function years_for_dates_table(title,seq_of_maps){
var elem__3116__auto____11881 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Date"]),cljs.core.Vector.fromArray(["\uFDD0'th","Years"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____11880 = (function iter__11876(s__11877){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11877__11878 = s__11877;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__11877__11878)))
{var item__11879 = cljs.core.first.call(null,s__11877__11878);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.first.call(null,item__11879)]),cljs.core.Vector.fromArray(["\uFDD0'td",clojure.string.join.call(null,", ",cljs.core.second.call(null,item__11879))])]),iter__11876.call(null,cljs.core.rest.call(null,s__11877__11878)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____11880.call(null,cljs.core.js__GT_clj.call(null,seq_of_maps));
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3116__auto____11881.setAttribute("crateGroup",group__3115__auto____11875);
return elem__3116__auto____11881;
});
eastercalc.core.years_for_dates_table.prototype._crateGroup = group__3115__auto____11875;
var group__3115__auto____11882 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.disclaimer = (function disclaimer(s){
var elem__3116__auto____11883 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span12"}),cljs.core.Vector.fromArray(["\uFDD0'span",cljs.core.Vector.fromArray(["\uFDD0'em",s])])]));

elem__3116__auto____11883.setAttribute("crateGroup",group__3115__auto____11882);
return elem__3116__auto____11883;
});
eastercalc.core.disclaimer.prototype._crateGroup = group__3115__auto____11882;
eastercalc.core.submit_dates_for_years = (function submit_dates_for_years(){
var eastern__11884 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__11885 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__11886 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start"));
var year_end__11887 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end"));

return fetch.remotes.remote_callback.call(null,"dates-for-years",cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__11884,"\uFDD0'western":western__11885,"\uFDD0'year-start":year_start__11886,"\uFDD0'year-end":year_end__11887})]),(function (data){
return jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#results"),""),eastercalc.core.disclaimer.call(null,data.call(null,"disclaimer"))),eastercalc.core.dates_for_years_table.call(null,"Orthodox Pascha",data.call(null,"eastern"))),eastercalc.core.dates_for_years_table.call(null,"Western Easter",data.call(null,"western")));
}));
});
eastercalc.core.submit_years_for_dates = (function submit_years_for_dates(){
var eastern__11888 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__11889 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__11890 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start"));
var year_end__11891 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end"));

return jQuery.ajax(eastercalc.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'url","\uFDD0'dataType","\uFDD0'data","\uFDD0'success","\uFDD0'error"],{"\uFDD0'url":"\/data\/years-for-dates","\uFDD0'dataType":"json","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__11888,"\uFDD0'western":western__11889,"\uFDD0'year-start":year_start__11890,"\uFDD0'year-end":year_end__11891}),"\uFDD0'success":(function (data){
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
