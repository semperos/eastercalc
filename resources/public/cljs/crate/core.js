goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__25638 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__25619__25620 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__25619__25620))
{var G__25622__25624 = cljs.core.first.call(null,G__25619__25620);
var vec__25623__25625 = G__25622__25624;
var k__25626 = cljs.core.nth.call(null,vec__25623__25625,0,null);
var v__25627 = cljs.core.nth.call(null,vec__25623__25625,1,null);
var G__25619__25628 = G__25619__25620;

var G__25622__25629 = G__25622__25624;
var G__25619__25630 = G__25619__25628;

while(true){
var vec__25631__25632 = G__25622__25629;
var k__25633 = cljs.core.nth.call(null,vec__25631__25632,0,null);
var v__25634 = cljs.core.nth.call(null,vec__25631__25632,1,null);
var G__25619__25635 = G__25619__25630;

dom_attr.call(null,elem,k__25633,v__25634);
var temp__3698__auto____25636 = cljs.core.next.call(null,G__25619__25635);

if(cljs.core.truth_(temp__3698__auto____25636))
{var G__25619__25637 = temp__3698__auto____25636;

{
var G__25641 = cljs.core.first.call(null,G__25619__25637);
var G__25642 = G__25619__25637;
G__25622__25629 = G__25641;
G__25619__25630 = G__25642;
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
var dom_attr__25639 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__25638.call(this,elem,k);
case  3 :
return dom_attr__25639.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__25643__25644 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__25643__25644))
{var c__25645 = cljs.core.first.call(null,G__25643__25644);
var G__25643__25646 = G__25643__25644;

while(true){
var child__25647 = (cljs.core.truth_((c__25645 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__25645))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__25645))?goog.dom.createTextNode.call(null,c__25645):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__25645))?crate.core.elem_factory.call(null,c__25645):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__25645))?as_content.call(null,parent,c__25645):(cljs.core.truth_(c__25645.nodeName)?c__25645:null))))));

if(cljs.core.truth_(child__25647))
{goog.dom.appendChild.call(null,parent,child__25647);
} else
{}
var temp__3698__auto____25648 = cljs.core.next.call(null,G__25643__25646);

if(cljs.core.truth_(temp__3698__auto____25648))
{var G__25643__25649 = temp__3698__auto____25648;

{
var G__25650 = cljs.core.first.call(null,G__25643__25649);
var G__25651 = G__25643__25649;
c__25645 = G__25650;
G__25643__25646 = G__25651;
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
crate.core.normalize_element = (function normalize_element(p__25653){
var vec__25654__25655 = p__25653;
var tag__25656 = cljs.core.nth.call(null,vec__25654__25655,0,null);
var content__25657 = cljs.core.nthnext.call(null,vec__25654__25655,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____25658 = cljs.core.keyword_QMARK_.call(null,tag__25656);

if(cljs.core.truth_(or__3548__auto____25658))
{return or__3548__auto____25658;
} else
{var or__3548__auto____25659 = cljs.core.symbol_QMARK_.call(null,tag__25656);

if(cljs.core.truth_(or__3548__auto____25659))
{return or__3548__auto____25659;
} else
{return cljs.core.string_QMARK_.call(null,tag__25656);
}
}
})())))
{throw cljs.core.str.call(null,tag__25656," is not a valid tag name.");
} else
{}
var vec__25660__25662 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__25656));
var ___25663 = cljs.core.nth.call(null,vec__25660__25662,0,null);
var tag__25664 = cljs.core.nth.call(null,vec__25660__25662,1,null);
var id__25665 = cljs.core.nth.call(null,vec__25660__25662,2,null);
var class$__25666 = cljs.core.nth.call(null,vec__25660__25662,3,null);
var vec__25661__25673 = (function (){var vec__25667__25668 = clojure.string.split.call(null,tag__25664,/:/);
var nsp__25669 = cljs.core.nth.call(null,vec__25667__25668,0,null);
var t__25670 = cljs.core.nth.call(null,vec__25667__25668,1,null);
var ns_xmlns__25671 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__25669));

if(cljs.core.truth_(t__25670))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____25672 = ns_xmlns__25671;

if(cljs.core.truth_(or__3548__auto____25672))
{return or__3548__auto____25672;
} else
{return nsp__25669;
}
})(),t__25670]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__25669]);
}
})();
var nsp__25674 = cljs.core.nth.call(null,vec__25661__25673,0,null);
var tag__25675 = cljs.core.nth.call(null,vec__25661__25673,1,null);
var tag_attrs__25677 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__25652_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__25652_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____25676 = id__25665;

if(cljs.core.truth_(or__3548__auto____25676))
{return or__3548__auto____25676;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__25666)?clojure.string.replace.call(null,class$__25666,/\./," "):null)})));
var map_attrs__25678 = cljs.core.first.call(null,content__25657);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__25678)))
{return cljs.core.Vector.fromArray([nsp__25674,tag__25675,cljs.core.merge.call(null,tag_attrs__25677,map_attrs__25678),cljs.core.next.call(null,content__25657)]);
} else
{return cljs.core.Vector.fromArray([nsp__25674,tag__25675,tag_attrs__25677,content__25657]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__25679 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__25679)))
{crate.core.dom_attr.call(null,elem,attrs__25679);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__25680__25681 = crate.core.normalize_element.call(null,tag_def);
var nsp__25682 = cljs.core.nth.call(null,vec__25680__25681,0,null);
var tag__25683 = cljs.core.nth.call(null,vec__25680__25681,1,null);
var attrs__25684 = cljs.core.nth.call(null,vec__25680__25681,2,null);
var content__25685 = cljs.core.nth.call(null,vec__25680__25681,3,null);
var elem__25686 = crate.core.create_elem.call(null,nsp__25682,tag__25683);

crate.core.dom_attr.call(null,elem__25686,cljs.core.merge.call(null,attrs__25684,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__25686,content__25685);
return elem__25686;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__25687 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__25687)))
{return res__25687;
} else
{return cljs.core.first.call(null,res__25687);
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
html.cljs$lang$applyTo = (function (arglist__25688){
var tags = cljs.core.seq( arglist__25688 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
