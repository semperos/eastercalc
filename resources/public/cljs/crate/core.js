goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__13773 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__13754__13755 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__13754__13755))
{var G__13757__13759 = cljs.core.first.call(null,G__13754__13755);
var vec__13758__13760 = G__13757__13759;
var k__13761 = cljs.core.nth.call(null,vec__13758__13760,0,null);
var v__13762 = cljs.core.nth.call(null,vec__13758__13760,1,null);
var G__13754__13763 = G__13754__13755;

var G__13757__13764 = G__13757__13759;
var G__13754__13765 = G__13754__13763;

while(true){
var vec__13766__13767 = G__13757__13764;
var k__13768 = cljs.core.nth.call(null,vec__13766__13767,0,null);
var v__13769 = cljs.core.nth.call(null,vec__13766__13767,1,null);
var G__13754__13770 = G__13754__13765;

dom_attr.call(null,elem,k__13768,v__13769);
var temp__3698__auto____13771 = cljs.core.next.call(null,G__13754__13770);

if(cljs.core.truth_(temp__3698__auto____13771))
{var G__13754__13772 = temp__3698__auto____13771;

{
var G__13776 = cljs.core.first.call(null,G__13754__13772);
var G__13777 = G__13754__13772;
G__13757__13764 = G__13776;
G__13754__13765 = G__13777;
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
var dom_attr__13774 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__13773.call(this,elem,k);
case  3 :
return dom_attr__13774.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__13778__13779 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__13778__13779))
{var c__13780 = cljs.core.first.call(null,G__13778__13779);
var G__13778__13781 = G__13778__13779;

while(true){
var child__13782 = (cljs.core.truth_((c__13780 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__13780))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__13780))?goog.dom.createTextNode.call(null,c__13780):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__13780))?crate.core.elem_factory.call(null,c__13780):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__13780))?as_content.call(null,parent,c__13780):(cljs.core.truth_(c__13780.nodeName)?c__13780:null))))));

if(cljs.core.truth_(child__13782))
{goog.dom.appendChild.call(null,parent,child__13782);
} else
{}
var temp__3698__auto____13783 = cljs.core.next.call(null,G__13778__13781);

if(cljs.core.truth_(temp__3698__auto____13783))
{var G__13778__13784 = temp__3698__auto____13783;

{
var G__13785 = cljs.core.first.call(null,G__13778__13784);
var G__13786 = G__13778__13784;
c__13780 = G__13785;
G__13778__13781 = G__13786;
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
crate.core.normalize_element = (function normalize_element(p__13788){
var vec__13789__13790 = p__13788;
var tag__13791 = cljs.core.nth.call(null,vec__13789__13790,0,null);
var content__13792 = cljs.core.nthnext.call(null,vec__13789__13790,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____13793 = cljs.core.keyword_QMARK_.call(null,tag__13791);

if(cljs.core.truth_(or__3548__auto____13793))
{return or__3548__auto____13793;
} else
{var or__3548__auto____13794 = cljs.core.symbol_QMARK_.call(null,tag__13791);

if(cljs.core.truth_(or__3548__auto____13794))
{return or__3548__auto____13794;
} else
{return cljs.core.string_QMARK_.call(null,tag__13791);
}
}
})())))
{throw cljs.core.str.call(null,tag__13791," is not a valid tag name.");
} else
{}
var vec__13795__13797 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__13791));
var ___13798 = cljs.core.nth.call(null,vec__13795__13797,0,null);
var tag__13799 = cljs.core.nth.call(null,vec__13795__13797,1,null);
var id__13800 = cljs.core.nth.call(null,vec__13795__13797,2,null);
var class$__13801 = cljs.core.nth.call(null,vec__13795__13797,3,null);
var vec__13796__13808 = (function (){var vec__13802__13803 = clojure.string.split.call(null,tag__13799,/:/);
var nsp__13804 = cljs.core.nth.call(null,vec__13802__13803,0,null);
var t__13805 = cljs.core.nth.call(null,vec__13802__13803,1,null);
var ns_xmlns__13806 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__13804));

if(cljs.core.truth_(t__13805))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____13807 = ns_xmlns__13806;

if(cljs.core.truth_(or__3548__auto____13807))
{return or__3548__auto____13807;
} else
{return nsp__13804;
}
})(),t__13805]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__13804]);
}
})();
var nsp__13809 = cljs.core.nth.call(null,vec__13796__13808,0,null);
var tag__13810 = cljs.core.nth.call(null,vec__13796__13808,1,null);
var tag_attrs__13812 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__13787_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__13787_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____13811 = id__13800;

if(cljs.core.truth_(or__3548__auto____13811))
{return or__3548__auto____13811;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__13801)?clojure.string.replace.call(null,class$__13801,/\./," "):null)})));
var map_attrs__13813 = cljs.core.first.call(null,content__13792);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__13813)))
{return cljs.core.Vector.fromArray([nsp__13809,tag__13810,cljs.core.merge.call(null,tag_attrs__13812,map_attrs__13813),cljs.core.next.call(null,content__13792)]);
} else
{return cljs.core.Vector.fromArray([nsp__13809,tag__13810,tag_attrs__13812,content__13792]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__13814 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__13814)))
{crate.core.dom_attr.call(null,elem,attrs__13814);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__13815__13816 = crate.core.normalize_element.call(null,tag_def);
var nsp__13817 = cljs.core.nth.call(null,vec__13815__13816,0,null);
var tag__13818 = cljs.core.nth.call(null,vec__13815__13816,1,null);
var attrs__13819 = cljs.core.nth.call(null,vec__13815__13816,2,null);
var content__13820 = cljs.core.nth.call(null,vec__13815__13816,3,null);
var elem__13821 = crate.core.create_elem.call(null,nsp__13817,tag__13818);

crate.core.dom_attr.call(null,elem__13821,cljs.core.merge.call(null,attrs__13819,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__13821,content__13820);
return elem__13821;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__13822 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__13822)))
{return res__13822;
} else
{return cljs.core.first.call(null,res__13822);
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
html.cljs$lang$applyTo = (function (arglist__13823){
var tags = cljs.core.seq( arglist__13823 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
