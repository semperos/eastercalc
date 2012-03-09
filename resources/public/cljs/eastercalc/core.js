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
var group__3115__auto____86158 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.dates_for_years_table = (function dates_for_years_table(title,seq_of_maps){
var elem__3116__auto____86164 = crate.core.html.call(null,(cljs.core.truth_(seq_of_maps)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Year"]),cljs.core.Vector.fromArray(["\uFDD0'th","Date"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____86163 = (function iter__86159(s__86160){
return (new cljs.core.LazySeq(null,false,(function (){
var s__86160__86161 = s__86160;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__86160__86161)))
{var m__86162 = cljs.core.first.call(null,s__86160__86161);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,m__86162.call(null,"year"))]),cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.str.call(null,m__86162.call(null,"date"))])]),iter__86159.call(null,cljs.core.rest.call(null,s__86160__86161)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____86163.call(null,seq_of_maps);
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3116__auto____86164.setAttribute("crateGroup",group__3115__auto____86158);
return elem__3116__auto____86164;
});
eastercalc.core.dates_for_years_table.prototype._crateGroup = group__3115__auto____86158;
var group__3115__auto____86165 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.years_for_dates_table = (function years_for_dates_table(title,seq_of_vecs){
var elem__3116__auto____86171 = crate.core.html.call(null,(cljs.core.truth_(seq_of_vecs)?cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span5"}),cljs.core.Vector.fromArray(["\uFDD0'h3",title]),cljs.core.Vector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"table table-striped table-bordered"}),cljs.core.Vector.fromArray(["\uFDD0'thead",cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'th","Date"]),cljs.core.Vector.fromArray(["\uFDD0'th","Years"])])]),cljs.core.Vector.fromArray(["\uFDD0'tbody",(function (){var iter__514__auto____86170 = (function iter__86166(s__86167){
return (new cljs.core.LazySeq(null,false,(function (){
var s__86167__86168 = s__86167;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__86167__86168)))
{var vc__86169 = cljs.core.first.call(null,s__86167__86168);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray(["\uFDD0'tr",cljs.core.Vector.fromArray(["\uFDD0'td",cljs.core.first.call(null,vc__86169)]),cljs.core.Vector.fromArray(["\uFDD0'td",clojure.string.join.call(null,", ",cljs.core.second.call(null,vc__86169))])]),iter__86166.call(null,cljs.core.rest.call(null,s__86167__86168)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____86170.call(null,seq_of_vecs);
})()])])]):cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span6"})])));

elem__3116__auto____86171.setAttribute("crateGroup",group__3115__auto____86165);
return elem__3116__auto____86171;
});
eastercalc.core.years_for_dates_table.prototype._crateGroup = group__3115__auto____86165;
var group__3115__auto____86172 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

eastercalc.core.disclaimer = (function disclaimer(s){
var elem__3116__auto____86173 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"span12"}),cljs.core.Vector.fromArray(["\uFDD0'span",cljs.core.Vector.fromArray(["\uFDD0'em",s])])]));

elem__3116__auto____86173.setAttribute("crateGroup",group__3115__auto____86172);
return elem__3116__auto____86173;
});
eastercalc.core.disclaimer.prototype._crateGroup = group__3115__auto____86172;
eastercalc.core.submit_dates_for_years = (function submit_dates_for_years(){
var eastern__86174 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__86175 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__86176 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start-dates"));
var year_end__86177 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end-dates"));

return fetch.remotes.remote_callback.call(null,"dates-for-years",cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__86174,"\uFDD0'western":western__86175,"\uFDD0'year-start":year_start__86176,"\uFDD0'year-end":year_end__86177})]),(function (data){
return jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#results"),""),eastercalc.core.disclaimer.call(null,data.call(null,"disclaimer"))),eastercalc.core.dates_for_years_table.call(null,"Orthodox Pascha",data.call(null,"eastern"))),eastercalc.core.dates_for_years_table.call(null,"Western Easter",data.call(null,"western")));
}));
});
eastercalc.core.submit_years_for_dates = (function submit_years_for_dates(){
var eastern__86178 = jayq.core.$.call(null,"#eastern").is(":checked");
var western__86179 = jayq.core.$.call(null,"#western").is(":checked");
var year_start__86180 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-start-years"));
var year_end__86181 = jayq.core.val.call(null,jayq.core.$.call(null,"#year-end-years"));

return fetch.remotes.remote_callback.call(null,"years-for-dates",cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'eastern","\uFDD0'western","\uFDD0'year-start","\uFDD0'year-end"],{"\uFDD0'eastern":eastern__86178,"\uFDD0'western":western__86179,"\uFDD0'year-start":year_start__86180,"\uFDD0'year-end":year_end__86181})]),(function (data){
console.log(cljs.core.ffirst.call(null,data.call(null,"eastern")));
console.log(cljs.core.second.call(null,cljs.core.first.call(null,data.call(null,"eastern"))));
return jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#results"),""),eastercalc.core.disclaimer.call(null,data.call(null,"disclaimer"))),eastercalc.core.years_for_dates_table.call(null,"Orthodox Pascha",data.call(null,"eastern"))),eastercalc.core.years_for_dates_table.call(null,"Western Easter",data.call(null,"western")));
}));
});
eastercalc.core.bind_submit_dates_for_years = (function bind_submit_dates_for_years(){
jayq.core.bind.call(null,jayq.core.$.call(null,"#submit-dates-for-years"),"click",eastercalc.core.submit_dates_for_years);
jayq.core.bind.call(null,jayq.core.$.call(null,"#year-start-dates"),"keypress",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,13)))
{return eastercalc.core.submit_dates_for_years.call(null);
} else
{return null;
}
}));
return jayq.core.bind.call(null,jayq.core.$.call(null,"#year-end-dates"),"keypress",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,13)))
{return eastercalc.core.submit_dates_for_years.call(null);
} else
{return null;
}
}));
});
eastercalc.core.bind_submit_years_for_dates = (function bind_submit_years_for_dates(){
jayq.core.bind.call(null,jayq.core.$.call(null,"#submit-years-for-dates"),"click",eastercalc.core.submit_years_for_dates);
jayq.core.bind.call(null,jayq.core.$.call(null,"#year-start-years"),"keypress",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,13)))
{return eastercalc.core.submit_years_for_dates.call(null);
} else
{return null;
}
}));
return jayq.core.bind.call(null,jayq.core.$.call(null,"#year-end-years"),"keypress",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,13)))
{return eastercalc.core.submit_years_for_dates.call(null);
} else
{return null;
}
}));
});
