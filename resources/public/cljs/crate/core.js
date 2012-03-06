goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__115255 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__115236__115237 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__115236__115237))
{var G__115239__115241 = cljs.core.first.call(null,G__115236__115237);
var vec__115240__115242 = G__115239__115241;
var k__115243 = cljs.core.nth.call(null,vec__115240__115242,0,null);
var v__115244 = cljs.core.nth.call(null,vec__115240__115242,1,null);
var G__115236__115245 = G__115236__115237;

var G__115239__115246 = G__115239__115241;
var G__115236__115247 = G__115236__115245;

while(true){
var vec__115248__115249 = G__115239__115246;
var k__115250 = cljs.core.nth.call(null,vec__115248__115249,0,null);
var v__115251 = cljs.core.nth.call(null,vec__115248__115249,1,null);
var G__115236__115252 = G__115236__115247;

dom_attr.call(null,elem,k__115250,v__115251);
var temp__3698__auto____115253 = cljs.core.next.call(null,G__115236__115252);

if(cljs.core.truth_(temp__3698__auto____115253))
{var G__115236__115254 = temp__3698__auto____115253;

{
var G__115258 = cljs.core.first.call(null,G__115236__115254);
var G__115259 = G__115236__115254;
G__115239__115246 = G__115258;
G__115236__115247 = G__115259;
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
var dom_attr__115256 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__115255.call(this,elem,k);
case  3 :
return dom_attr__115256.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__115260__115261 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__115260__115261))
{var c__115262 = cljs.core.first.call(null,G__115260__115261);
var G__115260__115263 = G__115260__115261;

while(true){
var child__115264 = (cljs.core.truth_((c__115262 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__115262))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__115262))?goog.dom.createTextNode.call(null,c__115262):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__115262))?crate.core.elem_factory.call(null,c__115262):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__115262))?as_content.call(null,parent,c__115262):(cljs.core.truth_(c__115262.nodeName)?c__115262:null))))));

if(cljs.core.truth_(child__115264))
{goog.dom.appendChild.call(null,parent,child__115264);
} else
{}
var temp__3698__auto____115265 = cljs.core.next.call(null,G__115260__115263);

if(cljs.core.truth_(temp__3698__auto____115265))
{var G__115260__115266 = temp__3698__auto____115265;

{
var G__115267 = cljs.core.first.call(null,G__115260__115266);
var G__115268 = G__115260__115266;
c__115262 = G__115267;
G__115260__115263 = G__115268;
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
crate.core.normalize_element = (function normalize_element(p__115270){
var vec__115271__115272 = p__115270;
var tag__115273 = cljs.core.nth.call(null,vec__115271__115272,0,null);
var content__115274 = cljs.core.nthnext.call(null,vec__115271__115272,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____115275 = cljs.core.keyword_QMARK_.call(null,tag__115273);

if(cljs.core.truth_(or__3548__auto____115275))
{return or__3548__auto____115275;
} else
{var or__3548__auto____115276 = cljs.core.symbol_QMARK_.call(null,tag__115273);

if(cljs.core.truth_(or__3548__auto____115276))
{return or__3548__auto____115276;
} else
{return cljs.core.string_QMARK_.call(null,tag__115273);
}
}
})())))
{throw cljs.core.str.call(null,tag__115273," is not a valid tag name.");
} else
{}
var vec__115277__115279 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__115273));
var ___115280 = cljs.core.nth.call(null,vec__115277__115279,0,null);
var tag__115281 = cljs.core.nth.call(null,vec__115277__115279,1,null);
var id__115282 = cljs.core.nth.call(null,vec__115277__115279,2,null);
var class$__115283 = cljs.core.nth.call(null,vec__115277__115279,3,null);
var vec__115278__115290 = (function (){var vec__115284__115285 = clojure.string.split.call(null,tag__115281,/:/);
var nsp__115286 = cljs.core.nth.call(null,vec__115284__115285,0,null);
var t__115287 = cljs.core.nth.call(null,vec__115284__115285,1,null);
var ns_xmlns__115288 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__115286));

if(cljs.core.truth_(t__115287))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____115289 = ns_xmlns__115288;

if(cljs.core.truth_(or__3548__auto____115289))
{return or__3548__auto____115289;
} else
{return nsp__115286;
}
})(),t__115287]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__115286]);
}
})();
var nsp__115291 = cljs.core.nth.call(null,vec__115278__115290,0,null);
var tag__115292 = cljs.core.nth.call(null,vec__115278__115290,1,null);
var tag_attrs__115294 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__115269_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__115269_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____115293 = id__115282;

if(cljs.core.truth_(or__3548__auto____115293))
{return or__3548__auto____115293;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__115283)?clojure.string.replace.call(null,class$__115283,/\./," "):null)})));
var map_attrs__115295 = cljs.core.first.call(null,content__115274);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__115295)))
{return cljs.core.Vector.fromArray([nsp__115291,tag__115292,cljs.core.merge.call(null,tag_attrs__115294,map_attrs__115295),cljs.core.next.call(null,content__115274)]);
} else
{return cljs.core.Vector.fromArray([nsp__115291,tag__115292,tag_attrs__115294,content__115274]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__115296 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__115296)))
{crate.core.dom_attr.call(null,elem,attrs__115296);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__115297__115298 = crate.core.normalize_element.call(null,tag_def);
var nsp__115299 = cljs.core.nth.call(null,vec__115297__115298,0,null);
var tag__115300 = cljs.core.nth.call(null,vec__115297__115298,1,null);
var attrs__115301 = cljs.core.nth.call(null,vec__115297__115298,2,null);
var content__115302 = cljs.core.nth.call(null,vec__115297__115298,3,null);
var elem__115303 = crate.core.create_elem.call(null,nsp__115299,tag__115300);

crate.core.dom_attr.call(null,elem__115303,cljs.core.merge.call(null,attrs__115301,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__115303,content__115302);
return elem__115303;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__115304 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__115304)))
{return res__115304;
} else
{return cljs.core.first.call(null,res__115304);
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
html.cljs$lang$applyTo = (function (arglist__115305){
var tags = cljs.core.seq( arglist__115305 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
