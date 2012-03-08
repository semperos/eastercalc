goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__36047 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__36028__36029 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__36028__36029))
{var G__36031__36033 = cljs.core.first.call(null,G__36028__36029);
var vec__36032__36034 = G__36031__36033;
var k__36035 = cljs.core.nth.call(null,vec__36032__36034,0,null);
var v__36036 = cljs.core.nth.call(null,vec__36032__36034,1,null);
var G__36028__36037 = G__36028__36029;

var G__36031__36038 = G__36031__36033;
var G__36028__36039 = G__36028__36037;

while(true){
var vec__36040__36041 = G__36031__36038;
var k__36042 = cljs.core.nth.call(null,vec__36040__36041,0,null);
var v__36043 = cljs.core.nth.call(null,vec__36040__36041,1,null);
var G__36028__36044 = G__36028__36039;

dom_attr.call(null,elem,k__36042,v__36043);
var temp__3698__auto____36045 = cljs.core.next.call(null,G__36028__36044);

if(cljs.core.truth_(temp__3698__auto____36045))
{var G__36028__36046 = temp__3698__auto____36045;

{
var G__36050 = cljs.core.first.call(null,G__36028__36046);
var G__36051 = G__36028__36046;
G__36031__36038 = G__36050;
G__36028__36039 = G__36051;
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
var dom_attr__36048 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__36047.call(this,elem,k);
case  3 :
return dom_attr__36048.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__36052__36053 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__36052__36053))
{var c__36054 = cljs.core.first.call(null,G__36052__36053);
var G__36052__36055 = G__36052__36053;

while(true){
var child__36056 = (cljs.core.truth_((c__36054 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__36054))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__36054))?goog.dom.createTextNode.call(null,c__36054):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__36054))?crate.core.elem_factory.call(null,c__36054):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__36054))?as_content.call(null,parent,c__36054):(cljs.core.truth_(c__36054.nodeName)?c__36054:null))))));

if(cljs.core.truth_(child__36056))
{goog.dom.appendChild.call(null,parent,child__36056);
} else
{}
var temp__3698__auto____36057 = cljs.core.next.call(null,G__36052__36055);

if(cljs.core.truth_(temp__3698__auto____36057))
{var G__36052__36058 = temp__3698__auto____36057;

{
var G__36059 = cljs.core.first.call(null,G__36052__36058);
var G__36060 = G__36052__36058;
c__36054 = G__36059;
G__36052__36055 = G__36060;
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
crate.core.normalize_element = (function normalize_element(p__36062){
var vec__36063__36064 = p__36062;
var tag__36065 = cljs.core.nth.call(null,vec__36063__36064,0,null);
var content__36066 = cljs.core.nthnext.call(null,vec__36063__36064,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____36067 = cljs.core.keyword_QMARK_.call(null,tag__36065);

if(cljs.core.truth_(or__3548__auto____36067))
{return or__3548__auto____36067;
} else
{var or__3548__auto____36068 = cljs.core.symbol_QMARK_.call(null,tag__36065);

if(cljs.core.truth_(or__3548__auto____36068))
{return or__3548__auto____36068;
} else
{return cljs.core.string_QMARK_.call(null,tag__36065);
}
}
})())))
{throw cljs.core.str.call(null,tag__36065," is not a valid tag name.");
} else
{}
var vec__36069__36071 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__36065));
var ___36072 = cljs.core.nth.call(null,vec__36069__36071,0,null);
var tag__36073 = cljs.core.nth.call(null,vec__36069__36071,1,null);
var id__36074 = cljs.core.nth.call(null,vec__36069__36071,2,null);
var class$__36075 = cljs.core.nth.call(null,vec__36069__36071,3,null);
var vec__36070__36082 = (function (){var vec__36076__36077 = clojure.string.split.call(null,tag__36073,/:/);
var nsp__36078 = cljs.core.nth.call(null,vec__36076__36077,0,null);
var t__36079 = cljs.core.nth.call(null,vec__36076__36077,1,null);
var ns_xmlns__36080 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__36078));

if(cljs.core.truth_(t__36079))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____36081 = ns_xmlns__36080;

if(cljs.core.truth_(or__3548__auto____36081))
{return or__3548__auto____36081;
} else
{return nsp__36078;
}
})(),t__36079]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__36078]);
}
})();
var nsp__36083 = cljs.core.nth.call(null,vec__36070__36082,0,null);
var tag__36084 = cljs.core.nth.call(null,vec__36070__36082,1,null);
var tag_attrs__36086 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__36061_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__36061_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____36085 = id__36074;

if(cljs.core.truth_(or__3548__auto____36085))
{return or__3548__auto____36085;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__36075)?clojure.string.replace.call(null,class$__36075,/\./," "):null)})));
var map_attrs__36087 = cljs.core.first.call(null,content__36066);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__36087)))
{return cljs.core.Vector.fromArray([nsp__36083,tag__36084,cljs.core.merge.call(null,tag_attrs__36086,map_attrs__36087),cljs.core.next.call(null,content__36066)]);
} else
{return cljs.core.Vector.fromArray([nsp__36083,tag__36084,tag_attrs__36086,content__36066]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__36088 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__36088)))
{crate.core.dom_attr.call(null,elem,attrs__36088);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__36089__36090 = crate.core.normalize_element.call(null,tag_def);
var nsp__36091 = cljs.core.nth.call(null,vec__36089__36090,0,null);
var tag__36092 = cljs.core.nth.call(null,vec__36089__36090,1,null);
var attrs__36093 = cljs.core.nth.call(null,vec__36089__36090,2,null);
var content__36094 = cljs.core.nth.call(null,vec__36089__36090,3,null);
var elem__36095 = crate.core.create_elem.call(null,nsp__36091,tag__36092);

crate.core.dom_attr.call(null,elem__36095,cljs.core.merge.call(null,attrs__36093,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__36095,content__36094);
return elem__36095;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__36096 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__36096)))
{return res__36096;
} else
{return cljs.core.first.call(null,res__36096);
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
html.cljs$lang$applyTo = (function (arglist__36097){
var tags = cljs.core.seq( arglist__36097 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
