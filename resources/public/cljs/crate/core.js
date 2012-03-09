goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__88063 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__88044__88045 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__88044__88045))
{var G__88047__88049 = cljs.core.first.call(null,G__88044__88045);
var vec__88048__88050 = G__88047__88049;
var k__88051 = cljs.core.nth.call(null,vec__88048__88050,0,null);
var v__88052 = cljs.core.nth.call(null,vec__88048__88050,1,null);
var G__88044__88053 = G__88044__88045;

var G__88047__88054 = G__88047__88049;
var G__88044__88055 = G__88044__88053;

while(true){
var vec__88056__88057 = G__88047__88054;
var k__88058 = cljs.core.nth.call(null,vec__88056__88057,0,null);
var v__88059 = cljs.core.nth.call(null,vec__88056__88057,1,null);
var G__88044__88060 = G__88044__88055;

dom_attr.call(null,elem,k__88058,v__88059);
var temp__3698__auto____88061 = cljs.core.next.call(null,G__88044__88060);

if(cljs.core.truth_(temp__3698__auto____88061))
{var G__88044__88062 = temp__3698__auto____88061;

{
var G__88066 = cljs.core.first.call(null,G__88044__88062);
var G__88067 = G__88044__88062;
G__88047__88054 = G__88066;
G__88044__88055 = G__88067;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__88064 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__88063.call(this,elem,k);
case  3 :
return dom_attr__88064.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__88068__88069 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__88068__88069))
{var c__88070 = cljs.core.first.call(null,G__88068__88069);
var G__88068__88071 = G__88068__88069;

while(true){
var child__88072 = (cljs.core.truth_((c__88070 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__88070))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__88070))?goog.dom.createTextNode.call(null,c__88070):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__88070))?crate.core.elem_factory.call(null,c__88070):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__88070))?as_content.call(null,parent,c__88070):(cljs.core.truth_(c__88070.nodeName)?c__88070:null))))));

if(cljs.core.truth_(child__88072))
{goog.dom.appendChild.call(null,parent,child__88072);
} else
{}
var temp__3698__auto____88073 = cljs.core.next.call(null,G__88068__88071);

if(cljs.core.truth_(temp__3698__auto____88073))
{var G__88068__88074 = temp__3698__auto____88073;

{
var G__88075 = cljs.core.first.call(null,G__88068__88074);
var G__88076 = G__88068__88074;
c__88070 = G__88075;
G__88068__88071 = G__88076;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__88078){
var vec__88079__88080 = p__88078;
var tag__88081 = cljs.core.nth.call(null,vec__88079__88080,0,null);
var content__88082 = cljs.core.nthnext.call(null,vec__88079__88080,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____88083 = cljs.core.keyword_QMARK_.call(null,tag__88081);

if(cljs.core.truth_(or__3548__auto____88083))
{return or__3548__auto____88083;
} else
{var or__3548__auto____88084 = cljs.core.symbol_QMARK_.call(null,tag__88081);

if(cljs.core.truth_(or__3548__auto____88084))
{return or__3548__auto____88084;
} else
{return cljs.core.string_QMARK_.call(null,tag__88081);
}
}
})())))
{throw cljs.core.str.call(null,tag__88081," is not a valid tag name.");
} else
{}
var vec__88085__88087 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__88081));
var ___88088 = cljs.core.nth.call(null,vec__88085__88087,0,null);
var tag__88089 = cljs.core.nth.call(null,vec__88085__88087,1,null);
var id__88090 = cljs.core.nth.call(null,vec__88085__88087,2,null);
var class$__88091 = cljs.core.nth.call(null,vec__88085__88087,3,null);
var vec__88086__88098 = (function (){var vec__88092__88093 = clojure.string.split.call(null,tag__88089,/:/);
var nsp__88094 = cljs.core.nth.call(null,vec__88092__88093,0,null);
var t__88095 = cljs.core.nth.call(null,vec__88092__88093,1,null);
var ns_xmlns__88096 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__88094));

if(cljs.core.truth_(t__88095))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____88097 = ns_xmlns__88096;

if(cljs.core.truth_(or__3548__auto____88097))
{return or__3548__auto____88097;
} else
{return nsp__88094;
}
})(),t__88095]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__88094]);
}
})();
var nsp__88099 = cljs.core.nth.call(null,vec__88086__88098,0,null);
var tag__88100 = cljs.core.nth.call(null,vec__88086__88098,1,null);
var tag_attrs__88102 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__88077_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__88077_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____88101 = id__88090;

if(cljs.core.truth_(or__3548__auto____88101))
{return or__3548__auto____88101;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__88091)?clojure.string.replace.call(null,class$__88091,/\./," "):null)})));
var map_attrs__88103 = cljs.core.first.call(null,content__88082);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__88103)))
{return cljs.core.Vector.fromArray([nsp__88099,tag__88100,cljs.core.merge.call(null,tag_attrs__88102,map_attrs__88103),cljs.core.next.call(null,content__88082)]);
} else
{return cljs.core.Vector.fromArray([nsp__88099,tag__88100,tag_attrs__88102,content__88082]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__88104 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__88104)))
{crate.core.dom_attr.call(null,elem,attrs__88104);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__88105__88106 = crate.core.normalize_element.call(null,tag_def);
var nsp__88107 = cljs.core.nth.call(null,vec__88105__88106,0,null);
var tag__88108 = cljs.core.nth.call(null,vec__88105__88106,1,null);
var attrs__88109 = cljs.core.nth.call(null,vec__88105__88106,2,null);
var content__88110 = cljs.core.nth.call(null,vec__88105__88106,3,null);
var elem__88111 = crate.core.create_elem.call(null,nsp__88107,tag__88108);

crate.core.dom_attr.call(null,elem__88111,cljs.core.merge.call(null,attrs__88109,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__88111,content__88110);
return elem__88111;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__88112 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__88112)))
{return res__88112;
} else
{return cljs.core.first.call(null,res__88112);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__88113){
var tags = cljs.core.seq( arglist__88113 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
