goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____13954 = reader;

if(cljs.core.truth_(and__3546__auto____13954))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____13954;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____13955 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____13955))
{return or__3548__auto____13955;
} else
{var or__3548__auto____13956 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____13956))
{return or__3548__auto____13956;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____13957 = reader;

if(cljs.core.truth_(and__3546__auto____13957))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____13957;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____13958 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____13958))
{return or__3548__auto____13958;
} else
{var or__3548__auto____13959 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____13959))
{return or__3548__auto____13959;
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
var this__13960 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__13960.buffer_atom))))
{var idx__13961 = cljs.core.deref.call(null,this__13960.index_atom);

cljs.core.swap_BANG_.call(null,this__13960.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__13960.s,idx__13961);
} else
{var buf__13962 = cljs.core.deref.call(null,this__13960.buffer_atom);

cljs.core.swap_BANG_.call(null,this__13960.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__13962);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__13963 = this;
return cljs.core.swap_BANG_.call(null,this__13963.buffer_atom,(function (p1__13953_SHARP_){
return cljs.core.cons.call(null,ch,p1__13953_SHARP_);
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
var or__3548__auto____13964 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____13964))
{return or__3548__auto____13964;
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
var or__3548__auto____13965 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____13965))
{return or__3548__auto____13965;
} else
{var and__3546__auto____13967 = (function (){var or__3548__auto____13966 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____13966))
{return or__3548__auto____13966;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____13967))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__13968 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__13968);
return next_ch__13968;
})());
} else
{return and__3546__auto____13967;
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
reader_error.cljs$lang$applyTo = (function (arglist__13969){
var rdr = cljs.core.first(arglist__13969);
var msg = cljs.core.rest(arglist__13969);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____13970 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____13970))
{var and__3546__auto____13971 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____13971))
{var and__3546__auto____13972 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____13972))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____13972;
}
} else
{return and__3546__auto____13971;
}
} else
{return and__3546__auto____13970;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__13973 = (new goog.string.StringBuffer(initch));
var ch__13974 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____13975 = (ch__13974 === null);

if(cljs.core.truth_(or__3548__auto____13975))
{return or__3548__auto____13975;
} else
{var or__3548__auto____13976 = cljs.reader.whitespace_QMARK_.call(null,ch__13974);

if(cljs.core.truth_(or__3548__auto____13976))
{return or__3548__auto____13976;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__13974);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__13974);
return sb__13973.toString();
} else
{{
var G__13977 = (function (){sb__13973.append(ch__13974);
return sb__13973;
})();
var G__13978 = cljs.reader.read_char.call(null,rdr);
sb__13973 = G__13977;
ch__13974 = G__13978;
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
var ch__13979 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____13980 = cljs.core._EQ_.call(null,ch__13979,"n");

if(cljs.core.truth_(or__3548__auto____13980))
{return or__3548__auto____13980;
} else
{var or__3548__auto____13981 = cljs.core._EQ_.call(null,ch__13979,"r");

if(cljs.core.truth_(or__3548__auto____13981))
{return or__3548__auto____13981;
} else
{return (ch__13979 === null);
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
var groups__13982 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__13983 = cljs.core.nth.call(null,groups__13982,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____13984 = (void 0 === group3__13983);

if(cljs.core.truth_(or__3548__auto____13984))
{return or__3548__auto____13984;
} else
{return (group3__13983.length < 1);
}
})())))
{return 0;
} else
{var negate__13986 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__13982,1)))?-1:1);
var vec__13985__13987 = (cljs.core.truth_(cljs.core.nth.call(null,groups__13982,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__13982,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__13982,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__13982,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__13982,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__13982,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__13982,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__13982,7),parseInt.call(null,cljs.core.nth.call(null,groups__13982,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__13988 = cljs.core.nth.call(null,vec__13985__13987,0,null);
var radix__13989 = cljs.core.nth.call(null,vec__13985__13987,1,null);

if(cljs.core.truth_((n__13988 === null)))
{return null;
} else
{return (negate__13986 * parseInt.call(null,n__13988,radix__13989));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__13990 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__13991 = cljs.core.nth.call(null,groups__13990,1);
var denominator__13992 = cljs.core.nth.call(null,groups__13990,2);

return (parseInt.call(null,numinator__13991) / parseInt.call(null,denominator__13992));
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
var ch__13993 = cljs.reader.read_char.call(null,reader);
var mapresult__13994 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__13993);

if(cljs.core.truth_(mapresult__13994))
{return mapresult__13994;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____13995 = cljs.core._EQ_.call(null,"u",ch__13993);

if(cljs.core.truth_(or__3548__auto____13995))
{return or__3548__auto____13995;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__13993);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__13993);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__13993);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__13996 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__13996)))
{{
var G__13997 = cljs.reader.read_char.call(null,rdr);
ch__13996 = G__13997;
continue;
}
} else
{return ch__13996;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__13998 = cljs.core.Vector.fromArray([]);

while(true){
var ch__13999 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__13999))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__13999)))
{return a__13998;
} else
{var temp__3695__auto____14000 = cljs.core.get.call(null,cljs.reader.macros,ch__13999);

if(cljs.core.truth_(temp__3695__auto____14000))
{var macrofn__14001 = temp__3695__auto____14000;

var mret__14002 = macrofn__14001.call(null,rdr,ch__13999);

{
var G__14004 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__14002,rdr))?a__13998:cljs.core.conj.call(null,a__13998,mret__14002));
a__13998 = G__14004;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__13999);
var o__14003 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__14005 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__14003,rdr))?a__13998:cljs.core.conj.call(null,a__13998,o__14003));
a__13998 = G__14005;
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
var ch__14006 = cljs.reader.read_char.call(null,rdr);
var dm__14007 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__14006);

if(cljs.core.truth_(dm__14007))
{return dm__14007.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__14006);
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
var l__14008 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__14008))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__14008);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__14009 = (new goog.string.StringBuffer(initch));
var ch__14010 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14011 = (ch__14010 === null);

if(cljs.core.truth_(or__3548__auto____14011))
{return or__3548__auto____14011;
} else
{var or__3548__auto____14012 = cljs.reader.whitespace_QMARK_.call(null,ch__14010);

if(cljs.core.truth_(or__3548__auto____14012))
{return or__3548__auto____14012;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__14010);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__14010);
var s__14013 = buffer__14009.toString();

var or__3548__auto____14014 = cljs.reader.match_number.call(null,s__14013);

if(cljs.core.truth_(or__3548__auto____14014))
{return or__3548__auto____14014;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__14013,"]");
}
} else
{{
var G__14015 = (function (){buffer__14009.append(ch__14010);
return buffer__14009;
})();
var G__14016 = cljs.reader.read_char.call(null,reader);
buffer__14009 = G__14015;
ch__14010 = G__14016;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__14017 = (new goog.string.StringBuffer());
var ch__14018 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__14018 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__14018)))
{{
var G__14019 = (function (){buffer__14017.append(cljs.reader.escape_char.call(null,buffer__14017,reader));
return buffer__14017;
})();
var G__14020 = cljs.reader.read_char.call(null,reader);
buffer__14017 = G__14019;
ch__14018 = G__14020;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__14018)))
{return buffer__14017.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__14021 = (function (){buffer__14017.append(ch__14018);
return buffer__14017;
})();
var G__14022 = cljs.reader.read_char.call(null,reader);
buffer__14017 = G__14021;
ch__14018 = G__14022;
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
var token__14023 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__14023,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__14023,0,token__14023.indexOf("\/")),cljs.core.subs.call(null,token__14023,(token__14023.indexOf("\/") + 1),token__14023.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__14023,cljs.core.symbol.call(null,token__14023));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__14025 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__14024__14026 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__14025);
var token__14027 = cljs.core.nth.call(null,vec__14024__14026,0,null);
var ns__14028 = cljs.core.nth.call(null,vec__14024__14026,1,null);
var name__14029 = cljs.core.nth.call(null,vec__14024__14026,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____14031 = (function (){var and__3546__auto____14030 = cljs.core.not.call(null,(void 0 === ns__14028));

if(cljs.core.truth_(and__3546__auto____14030))
{return (ns__14028.substring((ns__14028.length - 2),ns__14028.length) === ":\/");
} else
{return and__3546__auto____14030;
}
})();

if(cljs.core.truth_(or__3548__auto____14031))
{return or__3548__auto____14031;
} else
{var or__3548__auto____14032 = ((name__14029[(name__14029.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____14032))
{return or__3548__auto____14032;
} else
{return cljs.core.not.call(null,(token__14027.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__14027);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__14028.substring(0,ns__14028.indexOf("\/")),name__14029);
} else
{return cljs.core.keyword.call(null,token__14027);
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
var m__14033 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__14033)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__14034 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__450__auto____14035 = o__14034;

if(cljs.core.truth_((function (){var and__3546__auto____14036 = x__450__auto____14035;

if(cljs.core.truth_(and__3546__auto____14036))
{var and__3546__auto____14037 = x__450__auto____14035.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____14037))
{return cljs.core.not.call(null,x__450__auto____14035.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____14037;
}
} else
{return and__3546__auto____14036;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__450__auto____14035);
}
})()))
{return cljs.core.with_meta.call(null,o__14034,cljs.core.merge.call(null,cljs.core.meta.call(null,o__14034),m__14033));
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
var ch__14038 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__14038 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__14038)))
{{
var G__14040 = reader;
var G__14041 = eof_is_error;
var G__14042 = sentinel;
var G__14043 = is_recursive;
reader = G__14040;
eof_is_error = G__14041;
sentinel = G__14042;
is_recursive = G__14043;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__14038)))
{{
var G__14044 = cljs.reader.read_comment.call(null,reader,ch__14038);
var G__14045 = eof_is_error;
var G__14046 = sentinel;
var G__14047 = is_recursive;
reader = G__14044;
eof_is_error = G__14045;
sentinel = G__14046;
is_recursive = G__14047;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__14039 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__14038))?cljs.reader.macros.call(null,ch__14038).call(null,reader,ch__14038):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__14038))?cljs.reader.read_number.call(null,reader,ch__14038):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__14038):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__14039,reader)))
{{
var G__14048 = reader;
var G__14049 = eof_is_error;
var G__14050 = sentinel;
var G__14051 = is_recursive;
reader = G__14048;
eof_is_error = G__14049;
sentinel = G__14050;
is_recursive = G__14051;
continue;
}
} else
{return res__14039;
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
var r__14052 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__14052,true,null,false);
});
