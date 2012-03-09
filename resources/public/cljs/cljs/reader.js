goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____88244 = reader;

if(cljs.core.truth_(and__3546__auto____88244))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____88244;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____88245 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____88245))
{return or__3548__auto____88245;
} else
{var or__3548__auto____88246 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____88246))
{return or__3548__auto____88246;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____88247 = reader;

if(cljs.core.truth_(and__3546__auto____88247))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____88247;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____88248 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____88248))
{return or__3548__auto____88248;
} else
{var or__3548__auto____88249 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____88249))
{return or__3548__auto____88249;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__88250 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__88250.buffer_atom))))
{var idx__88251 = cljs.core.deref.call(null,this__88250.index_atom);

cljs.core.swap_BANG_.call(null,this__88250.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__88250.s,idx__88251);
} else
{var buf__88252 = cljs.core.deref.call(null,this__88250.buffer_atom);

cljs.core.swap_BANG_.call(null,this__88250.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__88252);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__88253 = this;
return cljs.core.swap_BANG_.call(null,this__88253.buffer_atom,(function (p1__88243_SHARP_){
return cljs.core.cons.call(null,ch,p1__88243_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____88254 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____88254))
{return or__3548__auto____88254;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____88255 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____88255))
{return or__3548__auto____88255;
} else
{var and__3546__auto____88257 = (function (){var or__3548__auto____88256 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____88256))
{return or__3548__auto____88256;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____88257))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__88258 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__88258);
return next_ch__88258;
})());
} else
{return and__3546__auto____88257;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__88259){
var rdr = cljs.core.first(arglist__88259);
var msg = cljs.core.rest(arglist__88259);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____88260 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____88260))
{var and__3546__auto____88261 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____88261))
{var and__3546__auto____88262 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____88262))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____88262;
}
} else
{return and__3546__auto____88261;
}
} else
{return and__3546__auto____88260;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__88263 = (new goog.string.StringBuffer(initch));
var ch__88264 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____88265 = (ch__88264 === null);

if(cljs.core.truth_(or__3548__auto____88265))
{return or__3548__auto____88265;
} else
{var or__3548__auto____88266 = cljs.reader.whitespace_QMARK_.call(null,ch__88264);

if(cljs.core.truth_(or__3548__auto____88266))
{return or__3548__auto____88266;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__88264);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__88264);
return sb__88263.toString();
} else
{{
var G__88267 = (function (){sb__88263.append(ch__88264);
return sb__88263;
})();
var G__88268 = cljs.reader.read_char.call(null,rdr);
sb__88263 = G__88267;
ch__88264 = G__88268;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__88269 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____88270 = cljs.core._EQ_.call(null,ch__88269,"n");

if(cljs.core.truth_(or__3548__auto____88270))
{return or__3548__auto____88270;
} else
{var or__3548__auto____88271 = cljs.core._EQ_.call(null,ch__88269,"r");

if(cljs.core.truth_(or__3548__auto____88271))
{return or__3548__auto____88271;
} else
{return (ch__88269 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)\/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9\/].*\/)?([^0-9\/][^\/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__88272 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__88273 = cljs.core.nth.call(null,groups__88272,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____88274 = (void 0 === group3__88273);

if(cljs.core.truth_(or__3548__auto____88274))
{return or__3548__auto____88274;
} else
{return (group3__88273.length < 1);
}
})())))
{return 0;
} else
{var negate__88276 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__88272,1)))?-1:1);
var vec__88275__88277 = (cljs.core.truth_(cljs.core.nth.call(null,groups__88272,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__88272,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__88272,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__88272,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__88272,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__88272,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__88272,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__88272,7),parseInt.call(null,cljs.core.nth.call(null,groups__88272,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__88278 = cljs.core.nth.call(null,vec__88275__88277,0,null);
var radix__88279 = cljs.core.nth.call(null,vec__88275__88277,1,null);

if(cljs.core.truth_((n__88278 === null)))
{return null;
} else
{return (negate__88276 * parseInt.call(null,n__88278,radix__88279));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__88280 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__88281 = cljs.core.nth.call(null,groups__88280,1);
var denominator__88282 = cljs.core.nth.call(null,groups__88280,2);

return (parseInt.call(null,numinator__88281) / parseInt.call(null,denominator__88282));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__88283 = cljs.reader.read_char.call(null,reader);
var mapresult__88284 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__88283);

if(cljs.core.truth_(mapresult__88284))
{return mapresult__88284;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____88285 = cljs.core._EQ_.call(null,"u",ch__88283);

if(cljs.core.truth_(or__3548__auto____88285))
{return or__3548__auto____88285;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__88283);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__88283);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__88283);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__88286 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__88286)))
{{
var G__88287 = cljs.reader.read_char.call(null,rdr);
ch__88286 = G__88287;
continue;
}
} else
{return ch__88286;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__88288 = cljs.core.Vector.fromArray([]);

while(true){
var ch__88289 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__88289))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__88289)))
{return a__88288;
} else
{var temp__3695__auto____88290 = cljs.core.get.call(null,cljs.reader.macros,ch__88289);

if(cljs.core.truth_(temp__3695__auto____88290))
{var macrofn__88291 = temp__3695__auto____88290;

var mret__88292 = macrofn__88291.call(null,rdr,ch__88289);

{
var G__88294 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__88292,rdr))?a__88288:cljs.core.conj.call(null,a__88288,mret__88292));
a__88288 = G__88294;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__88289);
var o__88293 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__88295 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__88293,rdr))?a__88288:cljs.core.conj.call(null,a__88288,o__88293));
a__88288 = G__88295;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__88296 = cljs.reader.read_char.call(null,rdr);
var dm__88297 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__88296);

if(cljs.core.truth_(dm__88297))
{return dm__88297.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__88296);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__88298 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__88298))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__88298);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__88299 = (new goog.string.StringBuffer(initch));
var ch__88300 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____88301 = (ch__88300 === null);

if(cljs.core.truth_(or__3548__auto____88301))
{return or__3548__auto____88301;
} else
{var or__3548__auto____88302 = cljs.reader.whitespace_QMARK_.call(null,ch__88300);

if(cljs.core.truth_(or__3548__auto____88302))
{return or__3548__auto____88302;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__88300);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__88300);
var s__88303 = buffer__88299.toString();

var or__3548__auto____88304 = cljs.reader.match_number.call(null,s__88303);

if(cljs.core.truth_(or__3548__auto____88304))
{return or__3548__auto____88304;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__88303,"]");
}
} else
{{
var G__88305 = (function (){buffer__88299.append(ch__88300);
return buffer__88299;
})();
var G__88306 = cljs.reader.read_char.call(null,reader);
buffer__88299 = G__88305;
ch__88300 = G__88306;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__88307 = (new goog.string.StringBuffer());
var ch__88308 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__88308 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__88308)))
{{
var G__88309 = (function (){buffer__88307.append(cljs.reader.escape_char.call(null,buffer__88307,reader));
return buffer__88307;
})();
var G__88310 = cljs.reader.read_char.call(null,reader);
buffer__88307 = G__88309;
ch__88308 = G__88310;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__88308)))
{return buffer__88307.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__88311 = (function (){buffer__88307.append(ch__88308);
return buffer__88307;
})();
var G__88312 = cljs.reader.read_char.call(null,reader);
buffer__88307 = G__88311;
ch__88308 = G__88312;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__88313 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__88313,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__88313,0,token__88313.indexOf("\/")),cljs.core.subs.call(null,token__88313,(token__88313.indexOf("\/") + 1),token__88313.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__88313,cljs.core.symbol.call(null,token__88313));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__88315 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__88314__88316 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__88315);
var token__88317 = cljs.core.nth.call(null,vec__88314__88316,0,null);
var ns__88318 = cljs.core.nth.call(null,vec__88314__88316,1,null);
var name__88319 = cljs.core.nth.call(null,vec__88314__88316,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____88321 = (function (){var and__3546__auto____88320 = cljs.core.not.call(null,(void 0 === ns__88318));

if(cljs.core.truth_(and__3546__auto____88320))
{return (ns__88318.substring((ns__88318.length - 2),ns__88318.length) === ":\/");
} else
{return and__3546__auto____88320;
}
})();

if(cljs.core.truth_(or__3548__auto____88321))
{return or__3548__auto____88321;
} else
{var or__3548__auto____88322 = ((name__88319[(name__88319.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____88322))
{return or__3548__auto____88322;
} else
{return cljs.core.not.call(null,(token__88317.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__88317);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__88318.substring(0,ns__88318.indexOf("\/")),name__88319);
} else
{return cljs.core.keyword.call(null,token__88317);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__88323 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__88323)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__88324 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__450__auto____88325 = o__88324;

if(cljs.core.truth_((function (){var and__3546__auto____88326 = x__450__auto____88325;

if(cljs.core.truth_(and__3546__auto____88326))
{var and__3546__auto____88327 = x__450__auto____88325.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____88327))
{return cljs.core.not.call(null,x__450__auto____88325.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____88327;
}
} else
{return and__3546__auto____88326;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__450__auto____88325);
}
})()))
{return cljs.core.with_meta.call(null,o__88324,cljs.core.merge.call(null,cljs.core.meta.call(null,o__88324),m__88323));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__88328 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__88328 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__88328)))
{{
var G__88330 = reader;
var G__88331 = eof_is_error;
var G__88332 = sentinel;
var G__88333 = is_recursive;
reader = G__88330;
eof_is_error = G__88331;
sentinel = G__88332;
is_recursive = G__88333;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__88328)))
{{
var G__88334 = cljs.reader.read_comment.call(null,reader,ch__88328);
var G__88335 = eof_is_error;
var G__88336 = sentinel;
var G__88337 = is_recursive;
reader = G__88334;
eof_is_error = G__88335;
sentinel = G__88336;
is_recursive = G__88337;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__88329 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__88328))?cljs.reader.macros.call(null,ch__88328).call(null,reader,ch__88328):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__88328))?cljs.reader.read_number.call(null,reader,ch__88328):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__88328):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__88329,reader)))
{{
var G__88338 = reader;
var G__88339 = eof_is_error;
var G__88340 = sentinel;
var G__88341 = is_recursive;
reader = G__88338;
eof_is_error = G__88339;
sentinel = G__88340;
is_recursive = G__88341;
continue;
}
} else
{return res__88329;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__88342 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__88342,true,null,false);
});
