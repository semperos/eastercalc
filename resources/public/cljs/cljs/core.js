goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____11897 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____11897))
{return or__3548__auto____11897;
} else
{var or__3548__auto____11898 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____11898))
{return or__3548__auto____11898;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__11962 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____11899 = this$;

if(cljs.core.truth_(and__3546__auto____11899))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11899;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____11900 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11900))
{return or__3548__auto____11900;
} else
{var or__3548__auto____11901 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11901))
{return or__3548__auto____11901;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__11963 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____11902 = this$;

if(cljs.core.truth_(and__3546__auto____11902))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11902;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____11903 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11903))
{return or__3548__auto____11903;
} else
{var or__3548__auto____11904 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11904))
{return or__3548__auto____11904;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__11964 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____11905 = this$;

if(cljs.core.truth_(and__3546__auto____11905))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11905;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____11906 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11906))
{return or__3548__auto____11906;
} else
{var or__3548__auto____11907 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11907))
{return or__3548__auto____11907;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__11965 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____11908 = this$;

if(cljs.core.truth_(and__3546__auto____11908))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11908;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____11909 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11909))
{return or__3548__auto____11909;
} else
{var or__3548__auto____11910 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11910))
{return or__3548__auto____11910;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__11966 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____11911 = this$;

if(cljs.core.truth_(and__3546__auto____11911))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11911;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____11912 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11912))
{return or__3548__auto____11912;
} else
{var or__3548__auto____11913 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11913))
{return or__3548__auto____11913;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__11967 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____11914 = this$;

if(cljs.core.truth_(and__3546__auto____11914))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11914;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____11915 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11915))
{return or__3548__auto____11915;
} else
{var or__3548__auto____11916 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11916))
{return or__3548__auto____11916;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__11968 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____11917 = this$;

if(cljs.core.truth_(and__3546__auto____11917))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11917;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____11918 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11918))
{return or__3548__auto____11918;
} else
{var or__3548__auto____11919 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11919))
{return or__3548__auto____11919;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__11969 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____11920 = this$;

if(cljs.core.truth_(and__3546__auto____11920))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11920;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____11921 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11921))
{return or__3548__auto____11921;
} else
{var or__3548__auto____11922 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11922))
{return or__3548__auto____11922;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__11970 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____11923 = this$;

if(cljs.core.truth_(and__3546__auto____11923))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11923;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____11924 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11924))
{return or__3548__auto____11924;
} else
{var or__3548__auto____11925 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11925))
{return or__3548__auto____11925;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__11971 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____11926 = this$;

if(cljs.core.truth_(and__3546__auto____11926))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11926;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____11927 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11927))
{return or__3548__auto____11927;
} else
{var or__3548__auto____11928 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11928))
{return or__3548__auto____11928;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11972 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____11929 = this$;

if(cljs.core.truth_(and__3546__auto____11929))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11929;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____11930 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11930))
{return or__3548__auto____11930;
} else
{var or__3548__auto____11931 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11931))
{return or__3548__auto____11931;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__11973 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____11932 = this$;

if(cljs.core.truth_(and__3546__auto____11932))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11932;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____11933 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11933))
{return or__3548__auto____11933;
} else
{var or__3548__auto____11934 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11934))
{return or__3548__auto____11934;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__11974 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____11935 = this$;

if(cljs.core.truth_(and__3546__auto____11935))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11935;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____11936 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11936))
{return or__3548__auto____11936;
} else
{var or__3548__auto____11937 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11937))
{return or__3548__auto____11937;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__11975 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____11938 = this$;

if(cljs.core.truth_(and__3546__auto____11938))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11938;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____11939 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11939))
{return or__3548__auto____11939;
} else
{var or__3548__auto____11940 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11940))
{return or__3548__auto____11940;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__11976 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____11941 = this$;

if(cljs.core.truth_(and__3546__auto____11941))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11941;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____11942 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11942))
{return or__3548__auto____11942;
} else
{var or__3548__auto____11943 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11943))
{return or__3548__auto____11943;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__11977 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____11944 = this$;

if(cljs.core.truth_(and__3546__auto____11944))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11944;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____11945 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11945))
{return or__3548__auto____11945;
} else
{var or__3548__auto____11946 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11946))
{return or__3548__auto____11946;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__11978 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____11947 = this$;

if(cljs.core.truth_(and__3546__auto____11947))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11947;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____11948 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11948))
{return or__3548__auto____11948;
} else
{var or__3548__auto____11949 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11949))
{return or__3548__auto____11949;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__11979 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____11950 = this$;

if(cljs.core.truth_(and__3546__auto____11950))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11950;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____11951 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11951))
{return or__3548__auto____11951;
} else
{var or__3548__auto____11952 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11952))
{return or__3548__auto____11952;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__11980 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____11953 = this$;

if(cljs.core.truth_(and__3546__auto____11953))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11953;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____11954 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11954))
{return or__3548__auto____11954;
} else
{var or__3548__auto____11955 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11955))
{return or__3548__auto____11955;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__11981 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____11956 = this$;

if(cljs.core.truth_(and__3546__auto____11956))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11956;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____11957 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11957))
{return or__3548__auto____11957;
} else
{var or__3548__auto____11958 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11958))
{return or__3548__auto____11958;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__11982 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____11959 = this$;

if(cljs.core.truth_(and__3546__auto____11959))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____11959;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____11960 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____11960))
{return or__3548__auto____11960;
} else
{var or__3548__auto____11961 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____11961))
{return or__3548__auto____11961;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__11962.call(this,this$);
case  2 :
return _invoke__11963.call(this,this$,a);
case  3 :
return _invoke__11964.call(this,this$,a,b);
case  4 :
return _invoke__11965.call(this,this$,a,b,c);
case  5 :
return _invoke__11966.call(this,this$,a,b,c,d);
case  6 :
return _invoke__11967.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__11968.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__11969.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__11970.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__11971.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__11972.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__11973.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__11974.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__11975.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__11976.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__11977.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__11978.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__11979.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__11980.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__11981.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__11982.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11984 = coll;

if(cljs.core.truth_(and__3546__auto____11984))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____11984;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____11985 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11985))
{return or__3548__auto____11985;
} else
{var or__3548__auto____11986 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____11986))
{return or__3548__auto____11986;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____11987 = coll;

if(cljs.core.truth_(and__3546__auto____11987))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____11987;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____11988 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11988))
{return or__3548__auto____11988;
} else
{var or__3548__auto____11989 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____11989))
{return or__3548__auto____11989;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____11990 = coll;

if(cljs.core.truth_(and__3546__auto____11990))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____11990;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____11991 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11991))
{return or__3548__auto____11991;
} else
{var or__3548__auto____11992 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____11992))
{return or__3548__auto____11992;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__11999 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____11993 = coll;

if(cljs.core.truth_(and__3546__auto____11993))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____11993;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____11994 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11994))
{return or__3548__auto____11994;
} else
{var or__3548__auto____11995 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____11995))
{return or__3548__auto____11995;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__12000 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____11996 = coll;

if(cljs.core.truth_(and__3546__auto____11996))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____11996;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____11997 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____11997))
{return or__3548__auto____11997;
} else
{var or__3548__auto____11998 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____11998))
{return or__3548__auto____11998;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__11999.call(this,coll,n);
case  3 :
return _nth__12000.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____12002 = coll;

if(cljs.core.truth_(and__3546__auto____12002))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____12002;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____12003 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12003))
{return or__3548__auto____12003;
} else
{var or__3548__auto____12004 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____12004))
{return or__3548__auto____12004;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____12005 = coll;

if(cljs.core.truth_(and__3546__auto____12005))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____12005;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____12006 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12006))
{return or__3548__auto____12006;
} else
{var or__3548__auto____12007 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____12007))
{return or__3548__auto____12007;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__12014 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____12008 = o;

if(cljs.core.truth_(and__3546__auto____12008))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____12008;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____12009 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12009))
{return or__3548__auto____12009;
} else
{var or__3548__auto____12010 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____12010))
{return or__3548__auto____12010;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__12015 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____12011 = o;

if(cljs.core.truth_(and__3546__auto____12011))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____12011;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____12012 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12012))
{return or__3548__auto____12012;
} else
{var or__3548__auto____12013 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____12013))
{return or__3548__auto____12013;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__12014.call(this,o,k);
case  3 :
return _lookup__12015.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____12017 = coll;

if(cljs.core.truth_(and__3546__auto____12017))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____12017;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____12018 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12018))
{return or__3548__auto____12018;
} else
{var or__3548__auto____12019 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____12019))
{return or__3548__auto____12019;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____12020 = coll;

if(cljs.core.truth_(and__3546__auto____12020))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____12020;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____12021 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12021))
{return or__3548__auto____12021;
} else
{var or__3548__auto____12022 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____12022))
{return or__3548__auto____12022;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____12023 = coll;

if(cljs.core.truth_(and__3546__auto____12023))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____12023;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____12024 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12024))
{return or__3548__auto____12024;
} else
{var or__3548__auto____12025 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____12025))
{return or__3548__auto____12025;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____12026 = coll;

if(cljs.core.truth_(and__3546__auto____12026))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____12026;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____12027 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12027))
{return or__3548__auto____12027;
} else
{var or__3548__auto____12028 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____12028))
{return or__3548__auto____12028;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____12029 = coll;

if(cljs.core.truth_(and__3546__auto____12029))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____12029;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____12030 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12030))
{return or__3548__auto____12030;
} else
{var or__3548__auto____12031 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____12031))
{return or__3548__auto____12031;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____12032 = coll;

if(cljs.core.truth_(and__3546__auto____12032))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____12032;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____12033 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12033))
{return or__3548__auto____12033;
} else
{var or__3548__auto____12034 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____12034))
{return or__3548__auto____12034;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____12035 = coll;

if(cljs.core.truth_(and__3546__auto____12035))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____12035;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____12036 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12036))
{return or__3548__auto____12036;
} else
{var or__3548__auto____12037 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____12037))
{return or__3548__auto____12037;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____12038 = o;

if(cljs.core.truth_(and__3546__auto____12038))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____12038;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____12039 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12039))
{return or__3548__auto____12039;
} else
{var or__3548__auto____12040 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____12040))
{return or__3548__auto____12040;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____12041 = o;

if(cljs.core.truth_(and__3546__auto____12041))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____12041;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____12042 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12042))
{return or__3548__auto____12042;
} else
{var or__3548__auto____12043 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____12043))
{return or__3548__auto____12043;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____12044 = o;

if(cljs.core.truth_(and__3546__auto____12044))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____12044;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____12045 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12045))
{return or__3548__auto____12045;
} else
{var or__3548__auto____12046 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____12046))
{return or__3548__auto____12046;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____12047 = o;

if(cljs.core.truth_(and__3546__auto____12047))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____12047;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____12048 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12048))
{return or__3548__auto____12048;
} else
{var or__3548__auto____12049 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____12049))
{return or__3548__auto____12049;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__12056 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____12050 = coll;

if(cljs.core.truth_(and__3546__auto____12050))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____12050;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____12051 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12051))
{return or__3548__auto____12051;
} else
{var or__3548__auto____12052 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____12052))
{return or__3548__auto____12052;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__12057 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____12053 = coll;

if(cljs.core.truth_(and__3546__auto____12053))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____12053;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____12054 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____12054))
{return or__3548__auto____12054;
} else
{var or__3548__auto____12055 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____12055))
{return or__3548__auto____12055;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__12056.call(this,coll,f);
case  3 :
return _reduce__12057.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____12059 = o;

if(cljs.core.truth_(and__3546__auto____12059))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____12059;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____12060 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12060))
{return or__3548__auto____12060;
} else
{var or__3548__auto____12061 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____12061))
{return or__3548__auto____12061;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____12062 = o;

if(cljs.core.truth_(and__3546__auto____12062))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____12062;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____12063 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12063))
{return or__3548__auto____12063;
} else
{var or__3548__auto____12064 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____12064))
{return or__3548__auto____12064;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____12065 = o;

if(cljs.core.truth_(and__3546__auto____12065))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____12065;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____12066 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12066))
{return or__3548__auto____12066;
} else
{var or__3548__auto____12067 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____12067))
{return or__3548__auto____12067;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____12068 = o;

if(cljs.core.truth_(and__3546__auto____12068))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____12068;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____12069 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____12069))
{return or__3548__auto____12069;
} else
{var or__3548__auto____12070 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____12070))
{return or__3548__auto____12070;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____12071 = d;

if(cljs.core.truth_(and__3546__auto____12071))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____12071;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____12072 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____12072))
{return or__3548__auto____12072;
} else
{var or__3548__auto____12073 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____12073))
{return or__3548__auto____12073;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____12074 = this$;

if(cljs.core.truth_(and__3546__auto____12074))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____12074;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____12075 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12075))
{return or__3548__auto____12075;
} else
{var or__3548__auto____12076 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____12076))
{return or__3548__auto____12076;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____12077 = this$;

if(cljs.core.truth_(and__3546__auto____12077))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____12077;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____12078 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12078))
{return or__3548__auto____12078;
} else
{var or__3548__auto____12079 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____12079))
{return or__3548__auto____12079;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____12080 = this$;

if(cljs.core.truth_(and__3546__auto____12080))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____12080;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____12081 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12081))
{return or__3548__auto____12081;
} else
{var or__3548__auto____12082 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____12082))
{return or__3548__auto____12082;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__12083 = null;
var G__12083__12084 = (function (o,k){
return null;
});
var G__12083__12085 = (function (o,k,not_found){
return not_found;
});
G__12083 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__12083__12084.call(this,o,k);
case  3 :
return G__12083__12085.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12083;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__12087 = null;
var G__12087__12088 = (function (_,f){
return f.call(null);
});
var G__12087__12089 = (function (_,f,start){
return start;
});
G__12087 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__12087__12088.call(this,_,f);
case  3 :
return G__12087__12089.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12087;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__12091 = null;
var G__12091__12092 = (function (_,n){
return null;
});
var G__12091__12093 = (function (_,n,not_found){
return not_found;
});
G__12091 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__12091__12092.call(this,_,n);
case  3 :
return G__12091__12093.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12091;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__12101 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__12095 = cljs.core._nth.call(null,cicoll,0);
var n__12096 = 1;

while(true){
if(cljs.core.truth_((n__12096 < cljs.core._count.call(null,cicoll))))
{{
var G__12105 = f.call(null,val__12095,cljs.core._nth.call(null,cicoll,n__12096));
var G__12106 = (n__12096 + 1);
val__12095 = G__12105;
n__12096 = G__12106;
continue;
}
} else
{return val__12095;
}
break;
}
}
});
var ci_reduce__12102 = (function (cicoll,f,val){
var val__12097 = val;
var n__12098 = 0;

while(true){
if(cljs.core.truth_((n__12098 < cljs.core._count.call(null,cicoll))))
{{
var G__12107 = f.call(null,val__12097,cljs.core._nth.call(null,cicoll,n__12098));
var G__12108 = (n__12098 + 1);
val__12097 = G__12107;
n__12098 = G__12108;
continue;
}
} else
{return val__12097;
}
break;
}
});
var ci_reduce__12103 = (function (cicoll,f,val,idx){
var val__12099 = val;
var n__12100 = idx;

while(true){
if(cljs.core.truth_((n__12100 < cljs.core._count.call(null,cicoll))))
{{
var G__12109 = f.call(null,val__12099,cljs.core._nth.call(null,cicoll,n__12100));
var G__12110 = (n__12100 + 1);
val__12099 = G__12109;
n__12100 = G__12110;
continue;
}
} else
{return val__12099;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__12101.call(this,cicoll,f);
case  3 :
return ci_reduce__12102.call(this,cicoll,f,val);
case  4 :
return ci_reduce__12103.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12111 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12124 = null;
var G__12124__12125 = (function (_,f){
var this__12112 = this;
return cljs.core.ci_reduce.call(null,this__12112.a,f,(this__12112.a[this__12112.i]),(this__12112.i + 1));
});
var G__12124__12126 = (function (_,f,start){
var this__12113 = this;
return cljs.core.ci_reduce.call(null,this__12113.a,f,start,this__12113.i);
});
G__12124 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__12124__12125.call(this,_,f);
case  3 :
return G__12124__12126.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12124;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12114 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12115 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12128 = null;
var G__12128__12129 = (function (coll,n){
var this__12116 = this;
var i__12117 = (n + this__12116.i);

if(cljs.core.truth_((i__12117 < this__12116.a.length)))
{return (this__12116.a[i__12117]);
} else
{return null;
}
});
var G__12128__12130 = (function (coll,n,not_found){
var this__12118 = this;
var i__12119 = (n + this__12118.i);

if(cljs.core.truth_((i__12119 < this__12118.a.length)))
{return (this__12118.a[i__12119]);
} else
{return not_found;
}
});
G__12128 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12128__12129.call(this,coll,n);
case  3 :
return G__12128__12130.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12128;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__12120 = this;
return (this__12120.a.length - this__12120.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__12121 = this;
return (this__12121.a[this__12121.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__12122 = this;
if(cljs.core.truth_(((this__12122.i + 1) < this__12122.a.length)))
{return (new cljs.core.IndexedSeq(this__12122.a,(this__12122.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__12123 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__12132 = null;
var G__12132__12133 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__12132__12134 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__12132 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__12132__12133.call(this,array,f);
case  3 :
return G__12132__12134.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12132;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__12136 = null;
var G__12136__12137 = (function (array,k){
return (array[k]);
});
var G__12136__12138 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__12136 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__12136__12137.call(this,array,k);
case  3 :
return G__12136__12138.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12136;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__12140 = null;
var G__12140__12141 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__12140__12142 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__12140 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__12140__12141.call(this,array,n);
case  3 :
return G__12140__12142.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12140;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____12144 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12144))
{var s__12145 = temp__3698__auto____12144;

return cljs.core._first.call(null,s__12145);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__12146 = cljs.core.next.call(null,s);
s = G__12146;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__12147 = cljs.core.seq.call(null,x);
var n__12148 = 0;

while(true){
if(cljs.core.truth_(s__12147))
{{
var G__12149 = cljs.core.next.call(null,s__12147);
var G__12150 = (n__12148 + 1);
s__12147 = G__12149;
n__12148 = G__12150;
continue;
}
} else
{return n__12148;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__12151 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__12152 = (function() { 
var G__12154__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__12155 = conj.call(null,coll,x);
var G__12156 = cljs.core.first.call(null,xs);
var G__12157 = cljs.core.next.call(null,xs);
coll = G__12155;
x = G__12156;
xs = G__12157;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__12154 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12154__delegate.call(this, coll, x, xs);
};
G__12154.cljs$lang$maxFixedArity = 2;
G__12154.cljs$lang$applyTo = (function (arglist__12158){
var coll = cljs.core.first(arglist__12158);
var x = cljs.core.first(cljs.core.next(arglist__12158));
var xs = cljs.core.rest(cljs.core.next(arglist__12158));
return G__12154__delegate.call(this, coll, x, xs);
});
return G__12154;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__12151.call(this,coll,x);
default:
return conj__12152.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__12152.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__12159 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__12160 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__12159.call(this,coll,n);
case  3 :
return nth__12160.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__12162 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__12163 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__12162.call(this,o,k);
case  3 :
return get__12163.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__12166 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__12167 = (function() { 
var G__12169__delegate = function (coll,k,v,kvs){
while(true){
var ret__12165 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__12170 = ret__12165;
var G__12171 = cljs.core.first.call(null,kvs);
var G__12172 = cljs.core.second.call(null,kvs);
var G__12173 = cljs.core.nnext.call(null,kvs);
coll = G__12170;
k = G__12171;
v = G__12172;
kvs = G__12173;
continue;
}
} else
{return ret__12165;
}
break;
}
};
var G__12169 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12169__delegate.call(this, coll, k, v, kvs);
};
G__12169.cljs$lang$maxFixedArity = 3;
G__12169.cljs$lang$applyTo = (function (arglist__12174){
var coll = cljs.core.first(arglist__12174);
var k = cljs.core.first(cljs.core.next(arglist__12174));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12174)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12174)));
return G__12169__delegate.call(this, coll, k, v, kvs);
});
return G__12169;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__12166.call(this,coll,k,v);
default:
return assoc__12167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__12167.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__12176 = (function (coll){
return coll;
});
var dissoc__12177 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__12178 = (function() { 
var G__12180__delegate = function (coll,k,ks){
while(true){
var ret__12175 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__12181 = ret__12175;
var G__12182 = cljs.core.first.call(null,ks);
var G__12183 = cljs.core.next.call(null,ks);
coll = G__12181;
k = G__12182;
ks = G__12183;
continue;
}
} else
{return ret__12175;
}
break;
}
};
var G__12180 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12180__delegate.call(this, coll, k, ks);
};
G__12180.cljs$lang$maxFixedArity = 2;
G__12180.cljs$lang$applyTo = (function (arglist__12184){
var coll = cljs.core.first(arglist__12184);
var k = cljs.core.first(cljs.core.next(arglist__12184));
var ks = cljs.core.rest(cljs.core.next(arglist__12184));
return G__12180__delegate.call(this, coll, k, ks);
});
return G__12180;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__12176.call(this,coll);
case  2 :
return dissoc__12177.call(this,coll,k);
default:
return dissoc__12178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__12178.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__450__auto____12185 = o;

if(cljs.core.truth_((function (){var and__3546__auto____12186 = x__450__auto____12185;

if(cljs.core.truth_(and__3546__auto____12186))
{var and__3546__auto____12187 = x__450__auto____12185.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____12187))
{return cljs.core.not.call(null,x__450__auto____12185.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____12187;
}
} else
{return and__3546__auto____12186;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____12185);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__12189 = (function (coll){
return coll;
});
var disj__12190 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__12191 = (function() { 
var G__12193__delegate = function (coll,k,ks){
while(true){
var ret__12188 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__12194 = ret__12188;
var G__12195 = cljs.core.first.call(null,ks);
var G__12196 = cljs.core.next.call(null,ks);
coll = G__12194;
k = G__12195;
ks = G__12196;
continue;
}
} else
{return ret__12188;
}
break;
}
};
var G__12193 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12193__delegate.call(this, coll, k, ks);
};
G__12193.cljs$lang$maxFixedArity = 2;
G__12193.cljs$lang$applyTo = (function (arglist__12197){
var coll = cljs.core.first(arglist__12197);
var k = cljs.core.first(cljs.core.next(arglist__12197));
var ks = cljs.core.rest(cljs.core.next(arglist__12197));
return G__12193__delegate.call(this, coll, k, ks);
});
return G__12193;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__12189.call(this,coll);
case  2 :
return disj__12190.call(this,coll,k);
default:
return disj__12191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__12191.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____12198 = x;

if(cljs.core.truth_((function (){var and__3546__auto____12199 = x__450__auto____12198;

if(cljs.core.truth_(and__3546__auto____12199))
{var and__3546__auto____12200 = x__450__auto____12198.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____12200))
{return cljs.core.not.call(null,x__450__auto____12198.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____12200;
}
} else
{return and__3546__auto____12199;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____12198);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____12201 = x;

if(cljs.core.truth_((function (){var and__3546__auto____12202 = x__450__auto____12201;

if(cljs.core.truth_(and__3546__auto____12202))
{var and__3546__auto____12203 = x__450__auto____12201.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____12203))
{return cljs.core.not.call(null,x__450__auto____12201.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____12203;
}
} else
{return and__3546__auto____12202;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____12201);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____12204 = x;

if(cljs.core.truth_((function (){var and__3546__auto____12205 = x__450__auto____12204;

if(cljs.core.truth_(and__3546__auto____12205))
{var and__3546__auto____12206 = x__450__auto____12204.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____12206))
{return cljs.core.not.call(null,x__450__auto____12204.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____12206;
}
} else
{return and__3546__auto____12205;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____12204);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____12207 = x;

if(cljs.core.truth_((function (){var and__3546__auto____12208 = x__450__auto____12207;

if(cljs.core.truth_(and__3546__auto____12208))
{var and__3546__auto____12209 = x__450__auto____12207.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____12209))
{return cljs.core.not.call(null,x__450__auto____12207.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____12209;
}
} else
{return and__3546__auto____12208;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____12207);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____12210 = x;

if(cljs.core.truth_((function (){var and__3546__auto____12211 = x__450__auto____12210;

if(cljs.core.truth_(and__3546__auto____12211))
{var and__3546__auto____12212 = x__450__auto____12210.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____12212))
{return cljs.core.not.call(null,x__450__auto____12210.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____12212;
}
} else
{return and__3546__auto____12211;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____12210);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____12213 = x;

if(cljs.core.truth_((function (){var and__3546__auto____12214 = x__450__auto____12213;

if(cljs.core.truth_(and__3546__auto____12214))
{var and__3546__auto____12215 = x__450__auto____12213.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____12215))
{return cljs.core.not.call(null,x__450__auto____12213.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____12215;
}
} else
{return and__3546__auto____12214;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____12213);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____12216 = x;

if(cljs.core.truth_((function (){var and__3546__auto____12217 = x__450__auto____12216;

if(cljs.core.truth_(and__3546__auto____12217))
{var and__3546__auto____12218 = x__450__auto____12216.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____12218))
{return cljs.core.not.call(null,x__450__auto____12216.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____12218;
}
} else
{return and__3546__auto____12217;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____12216);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__12219 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__12219.push(key);
}));
return keys__12219;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__450__auto____12220 = s;

if(cljs.core.truth_((function (){var and__3546__auto____12221 = x__450__auto____12220;

if(cljs.core.truth_(and__3546__auto____12221))
{var and__3546__auto____12222 = x__450__auto____12220.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____12222))
{return cljs.core.not.call(null,x__450__auto____12220.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____12222;
}
} else
{return and__3546__auto____12221;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____12220);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____12223 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____12223))
{return cljs.core.not.call(null,(function (){var or__3548__auto____12224 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____12224))
{return or__3548__auto____12224;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____12223;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____12225 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____12225))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____12225;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____12226 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____12226))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____12226;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____12227 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____12227))
{return (n == n.toFixed());
} else
{return and__3546__auto____12227;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____12228 = coll;

if(cljs.core.truth_(and__3546__auto____12228))
{var and__3546__auto____12229 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____12229))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____12229;
}
} else
{return and__3546__auto____12228;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___12234 = (function (x){
return true;
});
var distinct_QMARK___12235 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___12236 = (function() { 
var G__12238__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__12230 = cljs.core.set([y,x]);
var xs__12231 = more;

while(true){
var x__12232 = cljs.core.first.call(null,xs__12231);
var etc__12233 = cljs.core.next.call(null,xs__12231);

if(cljs.core.truth_(xs__12231))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__12230,x__12232)))
{return false;
} else
{{
var G__12239 = cljs.core.conj.call(null,s__12230,x__12232);
var G__12240 = etc__12233;
s__12230 = G__12239;
xs__12231 = G__12240;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__12238 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12238__delegate.call(this, x, y, more);
};
G__12238.cljs$lang$maxFixedArity = 2;
G__12238.cljs$lang$applyTo = (function (arglist__12241){
var x = cljs.core.first(arglist__12241);
var y = cljs.core.first(cljs.core.next(arglist__12241));
var more = cljs.core.rest(cljs.core.next(arglist__12241));
return G__12238__delegate.call(this, x, y, more);
});
return G__12238;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___12234.call(this,x);
case  2 :
return distinct_QMARK___12235.call(this,x,y);
default:
return distinct_QMARK___12236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___12236.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__12242 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__12242)))
{return r__12242;
} else
{if(cljs.core.truth_(r__12242))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__12244 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__12245 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__12243 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__12243,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__12243);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__12244.call(this,comp);
case  2 :
return sort__12245.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__12247 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__12248 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__12247.call(this,keyfn,comp);
case  3 :
return sort_by__12248.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__12250 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__12251 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__12250.call(this,f,val);
case  3 :
return reduce__12251.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__12257 = (function (f,coll){
var temp__3695__auto____12253 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12253))
{var s__12254 = temp__3695__auto____12253;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__12254),cljs.core.next.call(null,s__12254));
} else
{return f.call(null);
}
});
var seq_reduce__12258 = (function (f,val,coll){
var val__12255 = val;
var coll__12256 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__12256))
{{
var G__12260 = f.call(null,val__12255,cljs.core.first.call(null,coll__12256));
var G__12261 = cljs.core.next.call(null,coll__12256);
val__12255 = G__12260;
coll__12256 = G__12261;
continue;
}
} else
{return val__12255;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__12257.call(this,f,val);
case  3 :
return seq_reduce__12258.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__12262 = null;
var G__12262__12263 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__12262__12264 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__12262 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12262__12263.call(this,coll,f);
case  3 :
return G__12262__12264.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12262;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___12266 = (function (){
return 0;
});
var _PLUS___12267 = (function (x){
return x;
});
var _PLUS___12268 = (function (x,y){
return (x + y);
});
var _PLUS___12269 = (function() { 
var G__12271__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__12271 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12271__delegate.call(this, x, y, more);
};
G__12271.cljs$lang$maxFixedArity = 2;
G__12271.cljs$lang$applyTo = (function (arglist__12272){
var x = cljs.core.first(arglist__12272);
var y = cljs.core.first(cljs.core.next(arglist__12272));
var more = cljs.core.rest(cljs.core.next(arglist__12272));
return G__12271__delegate.call(this, x, y, more);
});
return G__12271;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___12266.call(this);
case  1 :
return _PLUS___12267.call(this,x);
case  2 :
return _PLUS___12268.call(this,x,y);
default:
return _PLUS___12269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___12269.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___12273 = (function (x){
return (- x);
});
var ___12274 = (function (x,y){
return (x - y);
});
var ___12275 = (function() { 
var G__12277__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__12277 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12277__delegate.call(this, x, y, more);
};
G__12277.cljs$lang$maxFixedArity = 2;
G__12277.cljs$lang$applyTo = (function (arglist__12278){
var x = cljs.core.first(arglist__12278);
var y = cljs.core.first(cljs.core.next(arglist__12278));
var more = cljs.core.rest(cljs.core.next(arglist__12278));
return G__12277__delegate.call(this, x, y, more);
});
return G__12277;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___12273.call(this,x);
case  2 :
return ___12274.call(this,x,y);
default:
return ___12275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___12275.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___12279 = (function (){
return 1;
});
var _STAR___12280 = (function (x){
return x;
});
var _STAR___12281 = (function (x,y){
return (x * y);
});
var _STAR___12282 = (function() { 
var G__12284__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__12284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12284__delegate.call(this, x, y, more);
};
G__12284.cljs$lang$maxFixedArity = 2;
G__12284.cljs$lang$applyTo = (function (arglist__12285){
var x = cljs.core.first(arglist__12285);
var y = cljs.core.first(cljs.core.next(arglist__12285));
var more = cljs.core.rest(cljs.core.next(arglist__12285));
return G__12284__delegate.call(this, x, y, more);
});
return G__12284;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___12279.call(this);
case  1 :
return _STAR___12280.call(this,x);
case  2 :
return _STAR___12281.call(this,x,y);
default:
return _STAR___12282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___12282.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___12286 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___12287 = (function (x,y){
return (x / y);
});
var _SLASH___12288 = (function() { 
var G__12290__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__12290 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12290__delegate.call(this, x, y, more);
};
G__12290.cljs$lang$maxFixedArity = 2;
G__12290.cljs$lang$applyTo = (function (arglist__12291){
var x = cljs.core.first(arglist__12291);
var y = cljs.core.first(cljs.core.next(arglist__12291));
var more = cljs.core.rest(cljs.core.next(arglist__12291));
return G__12290__delegate.call(this, x, y, more);
});
return G__12290;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___12286.call(this,x);
case  2 :
return _SLASH___12287.call(this,x,y);
default:
return _SLASH___12288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___12288.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___12292 = (function (x){
return true;
});
var _LT___12293 = (function (x,y){
return (x < y);
});
var _LT___12294 = (function() { 
var G__12296__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12297 = y;
var G__12298 = cljs.core.first.call(null,more);
var G__12299 = cljs.core.next.call(null,more);
x = G__12297;
y = G__12298;
more = G__12299;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__12296 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12296__delegate.call(this, x, y, more);
};
G__12296.cljs$lang$maxFixedArity = 2;
G__12296.cljs$lang$applyTo = (function (arglist__12300){
var x = cljs.core.first(arglist__12300);
var y = cljs.core.first(cljs.core.next(arglist__12300));
var more = cljs.core.rest(cljs.core.next(arglist__12300));
return G__12296__delegate.call(this, x, y, more);
});
return G__12296;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___12292.call(this,x);
case  2 :
return _LT___12293.call(this,x,y);
default:
return _LT___12294.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___12294.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___12301 = (function (x){
return true;
});
var _LT__EQ___12302 = (function (x,y){
return (x <= y);
});
var _LT__EQ___12303 = (function() { 
var G__12305__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12306 = y;
var G__12307 = cljs.core.first.call(null,more);
var G__12308 = cljs.core.next.call(null,more);
x = G__12306;
y = G__12307;
more = G__12308;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__12305 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12305__delegate.call(this, x, y, more);
};
G__12305.cljs$lang$maxFixedArity = 2;
G__12305.cljs$lang$applyTo = (function (arglist__12309){
var x = cljs.core.first(arglist__12309);
var y = cljs.core.first(cljs.core.next(arglist__12309));
var more = cljs.core.rest(cljs.core.next(arglist__12309));
return G__12305__delegate.call(this, x, y, more);
});
return G__12305;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___12301.call(this,x);
case  2 :
return _LT__EQ___12302.call(this,x,y);
default:
return _LT__EQ___12303.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___12303.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___12310 = (function (x){
return true;
});
var _GT___12311 = (function (x,y){
return (x > y);
});
var _GT___12312 = (function() { 
var G__12314__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12315 = y;
var G__12316 = cljs.core.first.call(null,more);
var G__12317 = cljs.core.next.call(null,more);
x = G__12315;
y = G__12316;
more = G__12317;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__12314 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12314__delegate.call(this, x, y, more);
};
G__12314.cljs$lang$maxFixedArity = 2;
G__12314.cljs$lang$applyTo = (function (arglist__12318){
var x = cljs.core.first(arglist__12318);
var y = cljs.core.first(cljs.core.next(arglist__12318));
var more = cljs.core.rest(cljs.core.next(arglist__12318));
return G__12314__delegate.call(this, x, y, more);
});
return G__12314;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___12310.call(this,x);
case  2 :
return _GT___12311.call(this,x,y);
default:
return _GT___12312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___12312.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___12319 = (function (x){
return true;
});
var _GT__EQ___12320 = (function (x,y){
return (x >= y);
});
var _GT__EQ___12321 = (function() { 
var G__12323__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12324 = y;
var G__12325 = cljs.core.first.call(null,more);
var G__12326 = cljs.core.next.call(null,more);
x = G__12324;
y = G__12325;
more = G__12326;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__12323 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12323__delegate.call(this, x, y, more);
};
G__12323.cljs$lang$maxFixedArity = 2;
G__12323.cljs$lang$applyTo = (function (arglist__12327){
var x = cljs.core.first(arglist__12327);
var y = cljs.core.first(cljs.core.next(arglist__12327));
var more = cljs.core.rest(cljs.core.next(arglist__12327));
return G__12323__delegate.call(this, x, y, more);
});
return G__12323;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___12319.call(this,x);
case  2 :
return _GT__EQ___12320.call(this,x,y);
default:
return _GT__EQ___12321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___12321.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__12328 = (function (x){
return x;
});
var max__12329 = (function (x,y){
return ((x > y) ? x : y);
});
var max__12330 = (function() { 
var G__12332__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__12332 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12332__delegate.call(this, x, y, more);
};
G__12332.cljs$lang$maxFixedArity = 2;
G__12332.cljs$lang$applyTo = (function (arglist__12333){
var x = cljs.core.first(arglist__12333);
var y = cljs.core.first(cljs.core.next(arglist__12333));
var more = cljs.core.rest(cljs.core.next(arglist__12333));
return G__12332__delegate.call(this, x, y, more);
});
return G__12332;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__12328.call(this,x);
case  2 :
return max__12329.call(this,x,y);
default:
return max__12330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__12330.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__12334 = (function (x){
return x;
});
var min__12335 = (function (x,y){
return ((x < y) ? x : y);
});
var min__12336 = (function() { 
var G__12338__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__12338 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12338__delegate.call(this, x, y, more);
};
G__12338.cljs$lang$maxFixedArity = 2;
G__12338.cljs$lang$applyTo = (function (arglist__12339){
var x = cljs.core.first(arglist__12339);
var y = cljs.core.first(cljs.core.next(arglist__12339));
var more = cljs.core.rest(cljs.core.next(arglist__12339));
return G__12338__delegate.call(this, x, y, more);
});
return G__12338;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__12334.call(this,x);
case  2 :
return min__12335.call(this,x,y);
default:
return min__12336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__12336.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__12340 = (n % d);

return cljs.core.fix.call(null,((n - rem__12340) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__12341 = cljs.core.quot.call(null,n,d);

return (n - (d * q__12341));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__12342 = (function (){
return Math.random.call(null);
});
var rand__12343 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__12342.call(this);
case  1 :
return rand__12343.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___12345 = (function (x){
return true;
});
var _EQ__EQ___12346 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___12347 = (function() { 
var G__12349__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12350 = y;
var G__12351 = cljs.core.first.call(null,more);
var G__12352 = cljs.core.next.call(null,more);
x = G__12350;
y = G__12351;
more = G__12352;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__12349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12349__delegate.call(this, x, y, more);
};
G__12349.cljs$lang$maxFixedArity = 2;
G__12349.cljs$lang$applyTo = (function (arglist__12353){
var x = cljs.core.first(arglist__12353);
var y = cljs.core.first(cljs.core.next(arglist__12353));
var more = cljs.core.rest(cljs.core.next(arglist__12353));
return G__12349__delegate.call(this, x, y, more);
});
return G__12349;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___12345.call(this,x);
case  2 :
return _EQ__EQ___12346.call(this,x,y);
default:
return _EQ__EQ___12347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___12347.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__12354 = n;
var xs__12355 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12356 = xs__12355;

if(cljs.core.truth_(and__3546__auto____12356))
{return (n__12354 > 0);
} else
{return and__3546__auto____12356;
}
})()))
{{
var G__12357 = (n__12354 - 1);
var G__12358 = cljs.core.next.call(null,xs__12355);
n__12354 = G__12357;
xs__12355 = G__12358;
continue;
}
} else
{return xs__12355;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__12363 = null;
var G__12363__12364 = (function (coll,n){
var temp__3695__auto____12359 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____12359))
{var xs__12360 = temp__3695__auto____12359;

return cljs.core.first.call(null,xs__12360);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__12363__12365 = (function (coll,n,not_found){
var temp__3695__auto____12361 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____12361))
{var xs__12362 = temp__3695__auto____12361;

return cljs.core.first.call(null,xs__12362);
} else
{return not_found;
}
});
G__12363 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12363__12364.call(this,coll,n);
case  3 :
return G__12363__12365.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12363;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___12367 = (function (){
return "";
});
var str_STAR___12368 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___12369 = (function() { 
var G__12371__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12372 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__12373 = cljs.core.next.call(null,more);
sb = G__12372;
more = G__12373;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__12371 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12371__delegate.call(this, x, ys);
};
G__12371.cljs$lang$maxFixedArity = 1;
G__12371.cljs$lang$applyTo = (function (arglist__12374){
var x = cljs.core.first(arglist__12374);
var ys = cljs.core.rest(arglist__12374);
return G__12371__delegate.call(this, x, ys);
});
return G__12371;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___12367.call(this);
case  1 :
return str_STAR___12368.call(this,x);
default:
return str_STAR___12369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___12369.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__12375 = (function (){
return "";
});
var str__12376 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__12377 = (function() { 
var G__12379__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__12379 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12379__delegate.call(this, x, ys);
};
G__12379.cljs$lang$maxFixedArity = 1;
G__12379.cljs$lang$applyTo = (function (arglist__12380){
var x = cljs.core.first(arglist__12380);
var ys = cljs.core.rest(arglist__12380);
return G__12379__delegate.call(this, x, ys);
});
return G__12379;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__12375.call(this);
case  1 :
return str__12376.call(this,x);
default:
return str__12377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__12377.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__12381 = (function (s,start){
return s.substring(start);
});
var subs__12382 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__12381.call(this,s,start);
case  3 :
return subs__12382.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__12384 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__12385 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__12384.call(this,ns);
case  2 :
return symbol__12385.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__12387 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__12388 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__12387.call(this,ns);
case  2 :
return keyword__12388.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__12390 = cljs.core.seq.call(null,x);
var ys__12391 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__12390 === null)))
{return (ys__12391 === null);
} else
{if(cljs.core.truth_((ys__12391 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__12390),cljs.core.first.call(null,ys__12391))))
{{
var G__12392 = cljs.core.next.call(null,xs__12390);
var G__12393 = cljs.core.next.call(null,ys__12391);
xs__12390 = G__12392;
ys__12391 = G__12393;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__12394_SHARP_,p2__12395_SHARP_){
return cljs.core.hash_combine.call(null,p1__12394_SHARP_,cljs.core.hash.call(null,p2__12395_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__12396__12397 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__12396__12397))
{var G__12399__12401 = cljs.core.first.call(null,G__12396__12397);
var vec__12400__12402 = G__12399__12401;
var key_name__12403 = cljs.core.nth.call(null,vec__12400__12402,0,null);
var f__12404 = cljs.core.nth.call(null,vec__12400__12402,1,null);
var G__12396__12405 = G__12396__12397;

var G__12399__12406 = G__12399__12401;
var G__12396__12407 = G__12396__12405;

while(true){
var vec__12408__12409 = G__12399__12406;
var key_name__12410 = cljs.core.nth.call(null,vec__12408__12409,0,null);
var f__12411 = cljs.core.nth.call(null,vec__12408__12409,1,null);
var G__12396__12412 = G__12396__12407;

var str_name__12413 = cljs.core.name.call(null,key_name__12410);

obj[str_name__12413] = f__12411;
var temp__3698__auto____12414 = cljs.core.next.call(null,G__12396__12412);

if(cljs.core.truth_(temp__3698__auto____12414))
{var G__12396__12415 = temp__3698__auto____12414;

{
var G__12416 = cljs.core.first.call(null,G__12396__12415);
var G__12417 = G__12396__12415;
G__12399__12406 = G__12416;
G__12396__12407 = G__12417;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12418 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12419 = this;
return (new cljs.core.List(this__12419.meta,o,coll,(this__12419.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12420 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12421 = this;
return this__12421.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12422 = this;
return this__12422.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12423 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12424 = this;
return this__12424.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12425 = this;
return this__12425.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12426 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12427 = this;
return (new cljs.core.List(meta,this__12427.first,this__12427.rest,this__12427.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12428 = this;
return this__12428.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12429 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12430 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12431 = this;
return (new cljs.core.List(this__12431.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12432 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12433 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12434 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12435 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12436 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12437 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12438 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12439 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12440 = this;
return this__12440.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12441 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__12442){
var items = cljs.core.seq( arglist__12442 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12443 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12445 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12446 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12446.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12447 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12448 = this;
return this__12448.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12449 = this;
if(cljs.core.truth_((this__12449.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__12449.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12450 = this;
return this__12450.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12451 = this;
return (new cljs.core.Cons(meta,this__12451.first,this__12451.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__12452 = null;
var G__12452__12453 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__12452__12454 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__12452 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__12452__12453.call(this,string,f);
case  3 :
return G__12452__12454.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12452;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__12456 = null;
var G__12456__12457 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__12456__12458 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__12456 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__12456__12457.call(this,string,k);
case  3 :
return G__12456__12458.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12456;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__12460 = null;
var G__12460__12461 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__12460__12462 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__12460 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__12460__12461.call(this,string,n);
case  3 :
return G__12460__12462.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12460;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__12470 = null;
var G__12470__12471 = (function (tsym12464,coll){
var tsym12464__12466 = this;

var this$__12467 = tsym12464__12466;

return cljs.core.get.call(null,coll,this$__12467.toString());
});
var G__12470__12472 = (function (tsym12465,coll,not_found){
var tsym12465__12468 = this;

var this$__12469 = tsym12465__12468;

return cljs.core.get.call(null,coll,this$__12469.toString(),not_found);
});
G__12470 = function(tsym12465,coll,not_found){
switch(arguments.length){
case  2 :
return G__12470__12471.call(this,tsym12465,coll);
case  3 :
return G__12470__12472.call(this,tsym12465,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12470;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__12474 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__12474;
} else
{lazy_seq.x = x__12474.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12475 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12476 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12477 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12478 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12478.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12479 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12480 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12481 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12482 = this;
return this__12482.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12483 = this;
return (new cljs.core.LazySeq(meta,this__12483.realized,this__12483.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__12484 = cljs.core.array.call(null);

var s__12485 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__12485)))
{ary__12484.push(cljs.core.first.call(null,s__12485));
{
var G__12486 = cljs.core.next.call(null,s__12485);
s__12485 = G__12486;
continue;
}
} else
{return ary__12484;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__12487 = s;
var i__12488 = n;
var sum__12489 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12490 = (i__12488 > 0);

if(cljs.core.truth_(and__3546__auto____12490))
{return cljs.core.seq.call(null,s__12487);
} else
{return and__3546__auto____12490;
}
})()))
{{
var G__12491 = cljs.core.next.call(null,s__12487);
var G__12492 = (i__12488 - 1);
var G__12493 = (sum__12489 + 1);
s__12487 = G__12491;
i__12488 = G__12492;
sum__12489 = G__12493;
continue;
}
} else
{return sum__12489;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__12497 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__12498 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__12499 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12494 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__12494))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12494),concat.call(null,cljs.core.rest.call(null,s__12494),y));
} else
{return y;
}
})));
});
var concat__12500 = (function() { 
var G__12502__delegate = function (x,y,zs){
var cat__12496 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__12495 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__12495))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__12495),cat.call(null,cljs.core.rest.call(null,xys__12495),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__12496.call(null,concat.call(null,x,y),zs);
};
var G__12502 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12502__delegate.call(this, x, y, zs);
};
G__12502.cljs$lang$maxFixedArity = 2;
G__12502.cljs$lang$applyTo = (function (arglist__12503){
var x = cljs.core.first(arglist__12503);
var y = cljs.core.first(cljs.core.next(arglist__12503));
var zs = cljs.core.rest(cljs.core.next(arglist__12503));
return G__12502__delegate.call(this, x, y, zs);
});
return G__12502;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__12497.call(this);
case  1 :
return concat__12498.call(this,x);
case  2 :
return concat__12499.call(this,x,y);
default:
return concat__12500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__12500.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___12504 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___12505 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___12506 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___12507 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___12508 = (function() { 
var G__12510__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__12510 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12510__delegate.call(this, a, b, c, d, more);
};
G__12510.cljs$lang$maxFixedArity = 4;
G__12510.cljs$lang$applyTo = (function (arglist__12511){
var a = cljs.core.first(arglist__12511);
var b = cljs.core.first(cljs.core.next(arglist__12511));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12511)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12511))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12511))));
return G__12510__delegate.call(this, a, b, c, d, more);
});
return G__12510;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___12504.call(this,a);
case  2 :
return list_STAR___12505.call(this,a,b);
case  3 :
return list_STAR___12506.call(this,a,b,c);
case  4 :
return list_STAR___12507.call(this,a,b,c,d);
default:
return list_STAR___12508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___12508.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__12521 = (function (f,args){
var fixed_arity__12512 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__12512 + 1)) <= fixed_arity__12512)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__12522 = (function (f,x,args){
var arglist__12513 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__12514 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__12513,fixed_arity__12514) <= fixed_arity__12514)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12513));
} else
{return f.cljs$lang$applyTo(arglist__12513);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12513));
}
});
var apply__12523 = (function (f,x,y,args){
var arglist__12515 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__12516 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__12515,fixed_arity__12516) <= fixed_arity__12516)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12515));
} else
{return f.cljs$lang$applyTo(arglist__12515);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12515));
}
});
var apply__12524 = (function (f,x,y,z,args){
var arglist__12517 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__12518 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__12517,fixed_arity__12518) <= fixed_arity__12518)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12517));
} else
{return f.cljs$lang$applyTo(arglist__12517);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12517));
}
});
var apply__12525 = (function() { 
var G__12527__delegate = function (f,a,b,c,d,args){
var arglist__12519 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__12520 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__12519,fixed_arity__12520) <= fixed_arity__12520)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12519));
} else
{return f.cljs$lang$applyTo(arglist__12519);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12519));
}
};
var G__12527 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12527__delegate.call(this, f, a, b, c, d, args);
};
G__12527.cljs$lang$maxFixedArity = 5;
G__12527.cljs$lang$applyTo = (function (arglist__12528){
var f = cljs.core.first(arglist__12528);
var a = cljs.core.first(cljs.core.next(arglist__12528));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12528)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12528))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12528)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12528)))));
return G__12527__delegate.call(this, f, a, b, c, d, args);
});
return G__12527;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__12521.call(this,f,a);
case  3 :
return apply__12522.call(this,f,a,b);
case  4 :
return apply__12523.call(this,f,a,b,c);
case  5 :
return apply__12524.call(this,f,a,b,c,d);
default:
return apply__12525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__12525.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__12529){
var obj = cljs.core.first(arglist__12529);
var f = cljs.core.first(cljs.core.next(arglist__12529));
var args = cljs.core.rest(cljs.core.next(arglist__12529));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___12530 = (function (x){
return false;
});
var not_EQ___12531 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___12532 = (function() { 
var G__12534__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__12534 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12534__delegate.call(this, x, y, more);
};
G__12534.cljs$lang$maxFixedArity = 2;
G__12534.cljs$lang$applyTo = (function (arglist__12535){
var x = cljs.core.first(arglist__12535);
var y = cljs.core.first(cljs.core.next(arglist__12535));
var more = cljs.core.rest(cljs.core.next(arglist__12535));
return G__12534__delegate.call(this, x, y, more);
});
return G__12534;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___12530.call(this,x);
case  2 :
return not_EQ___12531.call(this,x,y);
default:
return not_EQ___12532.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___12532.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__12536 = pred;
var G__12537 = cljs.core.next.call(null,coll);
pred = G__12536;
coll = G__12537;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____12538 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____12538))
{return or__3548__auto____12538;
} else
{{
var G__12539 = pred;
var G__12540 = cljs.core.next.call(null,coll);
pred = G__12539;
coll = G__12540;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__12541 = null;
var G__12541__12542 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__12541__12543 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__12541__12544 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__12541__12545 = (function() { 
var G__12547__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__12547 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12547__delegate.call(this, x, y, zs);
};
G__12547.cljs$lang$maxFixedArity = 2;
G__12547.cljs$lang$applyTo = (function (arglist__12548){
var x = cljs.core.first(arglist__12548);
var y = cljs.core.first(cljs.core.next(arglist__12548));
var zs = cljs.core.rest(cljs.core.next(arglist__12548));
return G__12547__delegate.call(this, x, y, zs);
});
return G__12547;
})()
;
G__12541 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__12541__12542.call(this);
case  1 :
return G__12541__12543.call(this,x);
case  2 :
return G__12541__12544.call(this,x,y);
default:
return G__12541__12545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12541.cljs$lang$maxFixedArity = 2;
G__12541.cljs$lang$applyTo = G__12541__12545.cljs$lang$applyTo;
return G__12541;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__12549__delegate = function (args){
return x;
};
var G__12549 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12549__delegate.call(this, args);
};
G__12549.cljs$lang$maxFixedArity = 0;
G__12549.cljs$lang$applyTo = (function (arglist__12550){
var args = cljs.core.seq( arglist__12550 );;
return G__12549__delegate.call(this, args);
});
return G__12549;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__12554 = (function (){
return cljs.core.identity;
});
var comp__12555 = (function (f){
return f;
});
var comp__12556 = (function (f,g){
return (function() {
var G__12560 = null;
var G__12560__12561 = (function (){
return f.call(null,g.call(null));
});
var G__12560__12562 = (function (x){
return f.call(null,g.call(null,x));
});
var G__12560__12563 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__12560__12564 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__12560__12565 = (function() { 
var G__12567__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12567 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12567__delegate.call(this, x, y, z, args);
};
G__12567.cljs$lang$maxFixedArity = 3;
G__12567.cljs$lang$applyTo = (function (arglist__12568){
var x = cljs.core.first(arglist__12568);
var y = cljs.core.first(cljs.core.next(arglist__12568));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12568)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12568)));
return G__12567__delegate.call(this, x, y, z, args);
});
return G__12567;
})()
;
G__12560 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12560__12561.call(this);
case  1 :
return G__12560__12562.call(this,x);
case  2 :
return G__12560__12563.call(this,x,y);
case  3 :
return G__12560__12564.call(this,x,y,z);
default:
return G__12560__12565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12560.cljs$lang$maxFixedArity = 3;
G__12560.cljs$lang$applyTo = G__12560__12565.cljs$lang$applyTo;
return G__12560;
})()
});
var comp__12557 = (function (f,g,h){
return (function() {
var G__12569 = null;
var G__12569__12570 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__12569__12571 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__12569__12572 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__12569__12573 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__12569__12574 = (function() { 
var G__12576__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__12576 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12576__delegate.call(this, x, y, z, args);
};
G__12576.cljs$lang$maxFixedArity = 3;
G__12576.cljs$lang$applyTo = (function (arglist__12577){
var x = cljs.core.first(arglist__12577);
var y = cljs.core.first(cljs.core.next(arglist__12577));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12577)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12577)));
return G__12576__delegate.call(this, x, y, z, args);
});
return G__12576;
})()
;
G__12569 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12569__12570.call(this);
case  1 :
return G__12569__12571.call(this,x);
case  2 :
return G__12569__12572.call(this,x,y);
case  3 :
return G__12569__12573.call(this,x,y,z);
default:
return G__12569__12574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12569.cljs$lang$maxFixedArity = 3;
G__12569.cljs$lang$applyTo = G__12569__12574.cljs$lang$applyTo;
return G__12569;
})()
});
var comp__12558 = (function() { 
var G__12578__delegate = function (f1,f2,f3,fs){
var fs__12551 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__12579__delegate = function (args){
var ret__12552 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__12551),args);
var fs__12553 = cljs.core.next.call(null,fs__12551);

while(true){
if(cljs.core.truth_(fs__12553))
{{
var G__12580 = cljs.core.first.call(null,fs__12553).call(null,ret__12552);
var G__12581 = cljs.core.next.call(null,fs__12553);
ret__12552 = G__12580;
fs__12553 = G__12581;
continue;
}
} else
{return ret__12552;
}
break;
}
};
var G__12579 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12579__delegate.call(this, args);
};
G__12579.cljs$lang$maxFixedArity = 0;
G__12579.cljs$lang$applyTo = (function (arglist__12582){
var args = cljs.core.seq( arglist__12582 );;
return G__12579__delegate.call(this, args);
});
return G__12579;
})()
;
};
var G__12578 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12578__delegate.call(this, f1, f2, f3, fs);
};
G__12578.cljs$lang$maxFixedArity = 3;
G__12578.cljs$lang$applyTo = (function (arglist__12583){
var f1 = cljs.core.first(arglist__12583);
var f2 = cljs.core.first(cljs.core.next(arglist__12583));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12583)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12583)));
return G__12578__delegate.call(this, f1, f2, f3, fs);
});
return G__12578;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__12554.call(this);
case  1 :
return comp__12555.call(this,f1);
case  2 :
return comp__12556.call(this,f1,f2);
case  3 :
return comp__12557.call(this,f1,f2,f3);
default:
return comp__12558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__12558.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__12584 = (function (f,arg1){
return (function() { 
var G__12589__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__12589 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12589__delegate.call(this, args);
};
G__12589.cljs$lang$maxFixedArity = 0;
G__12589.cljs$lang$applyTo = (function (arglist__12590){
var args = cljs.core.seq( arglist__12590 );;
return G__12589__delegate.call(this, args);
});
return G__12589;
})()
;
});
var partial__12585 = (function (f,arg1,arg2){
return (function() { 
var G__12591__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__12591 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12591__delegate.call(this, args);
};
G__12591.cljs$lang$maxFixedArity = 0;
G__12591.cljs$lang$applyTo = (function (arglist__12592){
var args = cljs.core.seq( arglist__12592 );;
return G__12591__delegate.call(this, args);
});
return G__12591;
})()
;
});
var partial__12586 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__12593__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__12593 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12593__delegate.call(this, args);
};
G__12593.cljs$lang$maxFixedArity = 0;
G__12593.cljs$lang$applyTo = (function (arglist__12594){
var args = cljs.core.seq( arglist__12594 );;
return G__12593__delegate.call(this, args);
});
return G__12593;
})()
;
});
var partial__12587 = (function() { 
var G__12595__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12596__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__12596 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12596__delegate.call(this, args);
};
G__12596.cljs$lang$maxFixedArity = 0;
G__12596.cljs$lang$applyTo = (function (arglist__12597){
var args = cljs.core.seq( arglist__12597 );;
return G__12596__delegate.call(this, args);
});
return G__12596;
})()
;
};
var G__12595 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12595__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__12595.cljs$lang$maxFixedArity = 4;
G__12595.cljs$lang$applyTo = (function (arglist__12598){
var f = cljs.core.first(arglist__12598);
var arg1 = cljs.core.first(cljs.core.next(arglist__12598));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12598)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12598))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12598))));
return G__12595__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__12595;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__12584.call(this,f,arg1);
case  3 :
return partial__12585.call(this,f,arg1,arg2);
case  4 :
return partial__12586.call(this,f,arg1,arg2,arg3);
default:
return partial__12587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__12587.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__12599 = (function (f,x){
return (function() {
var G__12603 = null;
var G__12603__12604 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__12603__12605 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__12603__12606 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__12603__12607 = (function() { 
var G__12609__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__12609 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12609__delegate.call(this, a, b, c, ds);
};
G__12609.cljs$lang$maxFixedArity = 3;
G__12609.cljs$lang$applyTo = (function (arglist__12610){
var a = cljs.core.first(arglist__12610);
var b = cljs.core.first(cljs.core.next(arglist__12610));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12610)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12610)));
return G__12609__delegate.call(this, a, b, c, ds);
});
return G__12609;
})()
;
G__12603 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__12603__12604.call(this,a);
case  2 :
return G__12603__12605.call(this,a,b);
case  3 :
return G__12603__12606.call(this,a,b,c);
default:
return G__12603__12607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12603.cljs$lang$maxFixedArity = 3;
G__12603.cljs$lang$applyTo = G__12603__12607.cljs$lang$applyTo;
return G__12603;
})()
});
var fnil__12600 = (function (f,x,y){
return (function() {
var G__12611 = null;
var G__12611__12612 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__12611__12613 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__12611__12614 = (function() { 
var G__12616__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__12616 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12616__delegate.call(this, a, b, c, ds);
};
G__12616.cljs$lang$maxFixedArity = 3;
G__12616.cljs$lang$applyTo = (function (arglist__12617){
var a = cljs.core.first(arglist__12617);
var b = cljs.core.first(cljs.core.next(arglist__12617));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12617)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12617)));
return G__12616__delegate.call(this, a, b, c, ds);
});
return G__12616;
})()
;
G__12611 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12611__12612.call(this,a,b);
case  3 :
return G__12611__12613.call(this,a,b,c);
default:
return G__12611__12614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12611.cljs$lang$maxFixedArity = 3;
G__12611.cljs$lang$applyTo = G__12611__12614.cljs$lang$applyTo;
return G__12611;
})()
});
var fnil__12601 = (function (f,x,y,z){
return (function() {
var G__12618 = null;
var G__12618__12619 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__12618__12620 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__12618__12621 = (function() { 
var G__12623__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__12623 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12623__delegate.call(this, a, b, c, ds);
};
G__12623.cljs$lang$maxFixedArity = 3;
G__12623.cljs$lang$applyTo = (function (arglist__12624){
var a = cljs.core.first(arglist__12624);
var b = cljs.core.first(cljs.core.next(arglist__12624));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12624)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12624)));
return G__12623__delegate.call(this, a, b, c, ds);
});
return G__12623;
})()
;
G__12618 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12618__12619.call(this,a,b);
case  3 :
return G__12618__12620.call(this,a,b,c);
default:
return G__12618__12621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12618.cljs$lang$maxFixedArity = 3;
G__12618.cljs$lang$applyTo = G__12618__12621.cljs$lang$applyTo;
return G__12618;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__12599.call(this,f,x);
case  3 :
return fnil__12600.call(this,f,x,y);
case  4 :
return fnil__12601.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__12627 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12625 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12625))
{var s__12626 = temp__3698__auto____12625;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__12626)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12626)));
} else
{return null;
}
})));
});

return mapi__12627.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12628))
{var s__12629 = temp__3698__auto____12628;

var x__12630 = f.call(null,cljs.core.first.call(null,s__12629));

if(cljs.core.truth_((x__12630 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__12629));
} else
{return cljs.core.cons.call(null,x__12630,keep.call(null,f,cljs.core.rest.call(null,s__12629)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__12640 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12637 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12637))
{var s__12638 = temp__3698__auto____12637;

var x__12639 = f.call(null,idx,cljs.core.first.call(null,s__12638));

if(cljs.core.truth_((x__12639 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12638));
} else
{return cljs.core.cons.call(null,x__12639,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12638)));
}
} else
{return null;
}
})));
});

return keepi__12640.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__12685 = (function (p){
return (function() {
var ep1 = null;
var ep1__12690 = (function (){
return true;
});
var ep1__12691 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__12692 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12647 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____12647))
{return p.call(null,y);
} else
{return and__3546__auto____12647;
}
})());
});
var ep1__12693 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12648 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____12648))
{var and__3546__auto____12649 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____12649))
{return p.call(null,z);
} else
{return and__3546__auto____12649;
}
} else
{return and__3546__auto____12648;
}
})());
});
var ep1__12694 = (function() { 
var G__12696__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12650 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12650))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____12650;
}
})());
};
var G__12696 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12696__delegate.call(this, x, y, z, args);
};
G__12696.cljs$lang$maxFixedArity = 3;
G__12696.cljs$lang$applyTo = (function (arglist__12697){
var x = cljs.core.first(arglist__12697);
var y = cljs.core.first(cljs.core.next(arglist__12697));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12697)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12697)));
return G__12696__delegate.call(this, x, y, z, args);
});
return G__12696;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__12690.call(this);
case  1 :
return ep1__12691.call(this,x);
case  2 :
return ep1__12692.call(this,x,y);
case  3 :
return ep1__12693.call(this,x,y,z);
default:
return ep1__12694.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__12694.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__12686 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__12698 = (function (){
return true;
});
var ep2__12699 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12651 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12651))
{return p2.call(null,x);
} else
{return and__3546__auto____12651;
}
})());
});
var ep2__12700 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12652 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12652))
{var and__3546__auto____12653 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12653))
{var and__3546__auto____12654 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12654))
{return p2.call(null,y);
} else
{return and__3546__auto____12654;
}
} else
{return and__3546__auto____12653;
}
} else
{return and__3546__auto____12652;
}
})());
});
var ep2__12701 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12655 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12655))
{var and__3546__auto____12656 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12656))
{var and__3546__auto____12657 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____12657))
{var and__3546__auto____12658 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12658))
{var and__3546__auto____12659 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____12659))
{return p2.call(null,z);
} else
{return and__3546__auto____12659;
}
} else
{return and__3546__auto____12658;
}
} else
{return and__3546__auto____12657;
}
} else
{return and__3546__auto____12656;
}
} else
{return and__3546__auto____12655;
}
})());
});
var ep2__12702 = (function() { 
var G__12704__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12660 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12660))
{return cljs.core.every_QMARK_.call(null,(function (p1__12631_SHARP_){
var and__3546__auto____12661 = p1.call(null,p1__12631_SHARP_);

if(cljs.core.truth_(and__3546__auto____12661))
{return p2.call(null,p1__12631_SHARP_);
} else
{return and__3546__auto____12661;
}
}),args);
} else
{return and__3546__auto____12660;
}
})());
};
var G__12704 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12704__delegate.call(this, x, y, z, args);
};
G__12704.cljs$lang$maxFixedArity = 3;
G__12704.cljs$lang$applyTo = (function (arglist__12705){
var x = cljs.core.first(arglist__12705);
var y = cljs.core.first(cljs.core.next(arglist__12705));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12705)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12705)));
return G__12704__delegate.call(this, x, y, z, args);
});
return G__12704;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__12698.call(this);
case  1 :
return ep2__12699.call(this,x);
case  2 :
return ep2__12700.call(this,x,y);
case  3 :
return ep2__12701.call(this,x,y,z);
default:
return ep2__12702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__12702.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__12687 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__12706 = (function (){
return true;
});
var ep3__12707 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12662 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12662))
{var and__3546__auto____12663 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12663))
{return p3.call(null,x);
} else
{return and__3546__auto____12663;
}
} else
{return and__3546__auto____12662;
}
})());
});
var ep3__12708 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12664 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12664))
{var and__3546__auto____12665 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12665))
{var and__3546__auto____12666 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____12666))
{var and__3546__auto____12667 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12667))
{var and__3546__auto____12668 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____12668))
{return p3.call(null,y);
} else
{return and__3546__auto____12668;
}
} else
{return and__3546__auto____12667;
}
} else
{return and__3546__auto____12666;
}
} else
{return and__3546__auto____12665;
}
} else
{return and__3546__auto____12664;
}
})());
});
var ep3__12709 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12669 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____12669))
{var and__3546__auto____12670 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____12670))
{var and__3546__auto____12671 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____12671))
{var and__3546__auto____12672 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____12672))
{var and__3546__auto____12673 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____12673))
{var and__3546__auto____12674 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____12674))
{var and__3546__auto____12675 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____12675))
{var and__3546__auto____12676 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____12676))
{return p3.call(null,z);
} else
{return and__3546__auto____12676;
}
} else
{return and__3546__auto____12675;
}
} else
{return and__3546__auto____12674;
}
} else
{return and__3546__auto____12673;
}
} else
{return and__3546__auto____12672;
}
} else
{return and__3546__auto____12671;
}
} else
{return and__3546__auto____12670;
}
} else
{return and__3546__auto____12669;
}
})());
});
var ep3__12710 = (function() { 
var G__12712__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12677 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12677))
{return cljs.core.every_QMARK_.call(null,(function (p1__12632_SHARP_){
var and__3546__auto____12678 = p1.call(null,p1__12632_SHARP_);

if(cljs.core.truth_(and__3546__auto____12678))
{var and__3546__auto____12679 = p2.call(null,p1__12632_SHARP_);

if(cljs.core.truth_(and__3546__auto____12679))
{return p3.call(null,p1__12632_SHARP_);
} else
{return and__3546__auto____12679;
}
} else
{return and__3546__auto____12678;
}
}),args);
} else
{return and__3546__auto____12677;
}
})());
};
var G__12712 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12712__delegate.call(this, x, y, z, args);
};
G__12712.cljs$lang$maxFixedArity = 3;
G__12712.cljs$lang$applyTo = (function (arglist__12713){
var x = cljs.core.first(arglist__12713);
var y = cljs.core.first(cljs.core.next(arglist__12713));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12713)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12713)));
return G__12712__delegate.call(this, x, y, z, args);
});
return G__12712;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__12706.call(this);
case  1 :
return ep3__12707.call(this,x);
case  2 :
return ep3__12708.call(this,x,y);
case  3 :
return ep3__12709.call(this,x,y,z);
default:
return ep3__12710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__12710.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__12688 = (function() { 
var G__12714__delegate = function (p1,p2,p3,ps){
var ps__12680 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__12715 = (function (){
return true;
});
var epn__12716 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__12633_SHARP_){
return p1__12633_SHARP_.call(null,x);
}),ps__12680);
});
var epn__12717 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__12634_SHARP_){
var and__3546__auto____12681 = p1__12634_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____12681))
{return p1__12634_SHARP_.call(null,y);
} else
{return and__3546__auto____12681;
}
}),ps__12680);
});
var epn__12718 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__12635_SHARP_){
var and__3546__auto____12682 = p1__12635_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____12682))
{var and__3546__auto____12683 = p1__12635_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____12683))
{return p1__12635_SHARP_.call(null,z);
} else
{return and__3546__auto____12683;
}
} else
{return and__3546__auto____12682;
}
}),ps__12680);
});
var epn__12719 = (function() { 
var G__12721__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12684 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____12684))
{return cljs.core.every_QMARK_.call(null,(function (p1__12636_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__12636_SHARP_,args);
}),ps__12680);
} else
{return and__3546__auto____12684;
}
})());
};
var G__12721 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12721__delegate.call(this, x, y, z, args);
};
G__12721.cljs$lang$maxFixedArity = 3;
G__12721.cljs$lang$applyTo = (function (arglist__12722){
var x = cljs.core.first(arglist__12722);
var y = cljs.core.first(cljs.core.next(arglist__12722));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12722)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12722)));
return G__12721__delegate.call(this, x, y, z, args);
});
return G__12721;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__12715.call(this);
case  1 :
return epn__12716.call(this,x);
case  2 :
return epn__12717.call(this,x,y);
case  3 :
return epn__12718.call(this,x,y,z);
default:
return epn__12719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__12719.cljs$lang$applyTo;
return epn;
})()
};
var G__12714 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12714__delegate.call(this, p1, p2, p3, ps);
};
G__12714.cljs$lang$maxFixedArity = 3;
G__12714.cljs$lang$applyTo = (function (arglist__12723){
var p1 = cljs.core.first(arglist__12723);
var p2 = cljs.core.first(cljs.core.next(arglist__12723));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12723)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12723)));
return G__12714__delegate.call(this, p1, p2, p3, ps);
});
return G__12714;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__12685.call(this,p1);
case  2 :
return every_pred__12686.call(this,p1,p2);
case  3 :
return every_pred__12687.call(this,p1,p2,p3);
default:
return every_pred__12688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__12688.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__12763 = (function (p){
return (function() {
var sp1 = null;
var sp1__12768 = (function (){
return null;
});
var sp1__12769 = (function (x){
return p.call(null,x);
});
var sp1__12770 = (function (x,y){
var or__3548__auto____12725 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____12725))
{return or__3548__auto____12725;
} else
{return p.call(null,y);
}
});
var sp1__12771 = (function (x,y,z){
var or__3548__auto____12726 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____12726))
{return or__3548__auto____12726;
} else
{var or__3548__auto____12727 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____12727))
{return or__3548__auto____12727;
} else
{return p.call(null,z);
}
}
});
var sp1__12772 = (function() { 
var G__12774__delegate = function (x,y,z,args){
var or__3548__auto____12728 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12728))
{return or__3548__auto____12728;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12774 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12774__delegate.call(this, x, y, z, args);
};
G__12774.cljs$lang$maxFixedArity = 3;
G__12774.cljs$lang$applyTo = (function (arglist__12775){
var x = cljs.core.first(arglist__12775);
var y = cljs.core.first(cljs.core.next(arglist__12775));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12775)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12775)));
return G__12774__delegate.call(this, x, y, z, args);
});
return G__12774;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__12768.call(this);
case  1 :
return sp1__12769.call(this,x);
case  2 :
return sp1__12770.call(this,x,y);
case  3 :
return sp1__12771.call(this,x,y,z);
default:
return sp1__12772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__12772.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__12764 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12776 = (function (){
return null;
});
var sp2__12777 = (function (x){
var or__3548__auto____12729 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12729))
{return or__3548__auto____12729;
} else
{return p2.call(null,x);
}
});
var sp2__12778 = (function (x,y){
var or__3548__auto____12730 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12730))
{return or__3548__auto____12730;
} else
{var or__3548__auto____12731 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12731))
{return or__3548__auto____12731;
} else
{var or__3548__auto____12732 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12732))
{return or__3548__auto____12732;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12779 = (function (x,y,z){
var or__3548__auto____12733 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12733))
{return or__3548__auto____12733;
} else
{var or__3548__auto____12734 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12734))
{return or__3548__auto____12734;
} else
{var or__3548__auto____12735 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____12735))
{return or__3548__auto____12735;
} else
{var or__3548__auto____12736 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12736))
{return or__3548__auto____12736;
} else
{var or__3548__auto____12737 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12737))
{return or__3548__auto____12737;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12780 = (function() { 
var G__12782__delegate = function (x,y,z,args){
var or__3548__auto____12738 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12738))
{return or__3548__auto____12738;
} else
{return cljs.core.some.call(null,(function (p1__12641_SHARP_){
var or__3548__auto____12739 = p1.call(null,p1__12641_SHARP_);

if(cljs.core.truth_(or__3548__auto____12739))
{return or__3548__auto____12739;
} else
{return p2.call(null,p1__12641_SHARP_);
}
}),args);
}
};
var G__12782 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12782__delegate.call(this, x, y, z, args);
};
G__12782.cljs$lang$maxFixedArity = 3;
G__12782.cljs$lang$applyTo = (function (arglist__12783){
var x = cljs.core.first(arglist__12783);
var y = cljs.core.first(cljs.core.next(arglist__12783));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12783)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12783)));
return G__12782__delegate.call(this, x, y, z, args);
});
return G__12782;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12776.call(this);
case  1 :
return sp2__12777.call(this,x);
case  2 :
return sp2__12778.call(this,x,y);
case  3 :
return sp2__12779.call(this,x,y,z);
default:
return sp2__12780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12780.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__12765 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12784 = (function (){
return null;
});
var sp3__12785 = (function (x){
var or__3548__auto____12740 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12740))
{return or__3548__auto____12740;
} else
{var or__3548__auto____12741 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12741))
{return or__3548__auto____12741;
} else
{return p3.call(null,x);
}
}
});
var sp3__12786 = (function (x,y){
var or__3548__auto____12742 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12742))
{return or__3548__auto____12742;
} else
{var or__3548__auto____12743 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12743))
{return or__3548__auto____12743;
} else
{var or__3548__auto____12744 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____12744))
{return or__3548__auto____12744;
} else
{var or__3548__auto____12745 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12745))
{return or__3548__auto____12745;
} else
{var or__3548__auto____12746 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12746))
{return or__3548__auto____12746;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12787 = (function (x,y,z){
var or__3548__auto____12747 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____12747))
{return or__3548__auto____12747;
} else
{var or__3548__auto____12748 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____12748))
{return or__3548__auto____12748;
} else
{var or__3548__auto____12749 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____12749))
{return or__3548__auto____12749;
} else
{var or__3548__auto____12750 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____12750))
{return or__3548__auto____12750;
} else
{var or__3548__auto____12751 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____12751))
{return or__3548__auto____12751;
} else
{var or__3548__auto____12752 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____12752))
{return or__3548__auto____12752;
} else
{var or__3548__auto____12753 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____12753))
{return or__3548__auto____12753;
} else
{var or__3548__auto____12754 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____12754))
{return or__3548__auto____12754;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__12788 = (function() { 
var G__12790__delegate = function (x,y,z,args){
var or__3548__auto____12755 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12755))
{return or__3548__auto____12755;
} else
{return cljs.core.some.call(null,(function (p1__12642_SHARP_){
var or__3548__auto____12756 = p1.call(null,p1__12642_SHARP_);

if(cljs.core.truth_(or__3548__auto____12756))
{return or__3548__auto____12756;
} else
{var or__3548__auto____12757 = p2.call(null,p1__12642_SHARP_);

if(cljs.core.truth_(or__3548__auto____12757))
{return or__3548__auto____12757;
} else
{return p3.call(null,p1__12642_SHARP_);
}
}
}),args);
}
};
var G__12790 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12790__delegate.call(this, x, y, z, args);
};
G__12790.cljs$lang$maxFixedArity = 3;
G__12790.cljs$lang$applyTo = (function (arglist__12791){
var x = cljs.core.first(arglist__12791);
var y = cljs.core.first(cljs.core.next(arglist__12791));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12791)));
return G__12790__delegate.call(this, x, y, z, args);
});
return G__12790;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12784.call(this);
case  1 :
return sp3__12785.call(this,x);
case  2 :
return sp3__12786.call(this,x,y);
case  3 :
return sp3__12787.call(this,x,y,z);
default:
return sp3__12788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12788.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__12766 = (function() { 
var G__12792__delegate = function (p1,p2,p3,ps){
var ps__12758 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12793 = (function (){
return null;
});
var spn__12794 = (function (x){
return cljs.core.some.call(null,(function (p1__12643_SHARP_){
return p1__12643_SHARP_.call(null,x);
}),ps__12758);
});
var spn__12795 = (function (x,y){
return cljs.core.some.call(null,(function (p1__12644_SHARP_){
var or__3548__auto____12759 = p1__12644_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12759))
{return or__3548__auto____12759;
} else
{return p1__12644_SHARP_.call(null,y);
}
}),ps__12758);
});
var spn__12796 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__12645_SHARP_){
var or__3548__auto____12760 = p1__12645_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12760))
{return or__3548__auto____12760;
} else
{var or__3548__auto____12761 = p1__12645_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____12761))
{return or__3548__auto____12761;
} else
{return p1__12645_SHARP_.call(null,z);
}
}
}),ps__12758);
});
var spn__12797 = (function() { 
var G__12799__delegate = function (x,y,z,args){
var or__3548__auto____12762 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____12762))
{return or__3548__auto____12762;
} else
{return cljs.core.some.call(null,(function (p1__12646_SHARP_){
return cljs.core.some.call(null,p1__12646_SHARP_,args);
}),ps__12758);
}
};
var G__12799 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12799__delegate.call(this, x, y, z, args);
};
G__12799.cljs$lang$maxFixedArity = 3;
G__12799.cljs$lang$applyTo = (function (arglist__12800){
var x = cljs.core.first(arglist__12800);
var y = cljs.core.first(cljs.core.next(arglist__12800));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12800)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12800)));
return G__12799__delegate.call(this, x, y, z, args);
});
return G__12799;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12793.call(this);
case  1 :
return spn__12794.call(this,x);
case  2 :
return spn__12795.call(this,x,y);
case  3 :
return spn__12796.call(this,x,y,z);
default:
return spn__12797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12797.cljs$lang$applyTo;
return spn;
})()
};
var G__12792 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12792__delegate.call(this, p1, p2, p3, ps);
};
G__12792.cljs$lang$maxFixedArity = 3;
G__12792.cljs$lang$applyTo = (function (arglist__12801){
var p1 = cljs.core.first(arglist__12801);
var p2 = cljs.core.first(cljs.core.next(arglist__12801));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12801)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12801)));
return G__12792__delegate.call(this, p1, p2, p3, ps);
});
return G__12792;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__12763.call(this,p1);
case  2 :
return some_fn__12764.call(this,p1,p2);
case  3 :
return some_fn__12765.call(this,p1,p2,p3);
default:
return some_fn__12766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__12766.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__12814 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12802))
{var s__12803 = temp__3698__auto____12802;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12803)),map.call(null,f,cljs.core.rest.call(null,s__12803)));
} else
{return null;
}
})));
});
var map__12815 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12804 = cljs.core.seq.call(null,c1);
var s2__12805 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12806 = s1__12804;

if(cljs.core.truth_(and__3546__auto____12806))
{return s2__12805;
} else
{return and__3546__auto____12806;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12804),cljs.core.first.call(null,s2__12805)),map.call(null,f,cljs.core.rest.call(null,s1__12804),cljs.core.rest.call(null,s2__12805)));
} else
{return null;
}
})));
});
var map__12816 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12807 = cljs.core.seq.call(null,c1);
var s2__12808 = cljs.core.seq.call(null,c2);
var s3__12809 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12810 = s1__12807;

if(cljs.core.truth_(and__3546__auto____12810))
{var and__3546__auto____12811 = s2__12808;

if(cljs.core.truth_(and__3546__auto____12811))
{return s3__12809;
} else
{return and__3546__auto____12811;
}
} else
{return and__3546__auto____12810;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12807),cljs.core.first.call(null,s2__12808),cljs.core.first.call(null,s3__12809)),map.call(null,f,cljs.core.rest.call(null,s1__12807),cljs.core.rest.call(null,s2__12808),cljs.core.rest.call(null,s3__12809)));
} else
{return null;
}
})));
});
var map__12817 = (function() { 
var G__12819__delegate = function (f,c1,c2,c3,colls){
var step__12813 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12812 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12812)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12812),step.call(null,map.call(null,cljs.core.rest,ss__12812)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__12724_SHARP_){
return cljs.core.apply.call(null,f,p1__12724_SHARP_);
}),step__12813.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12819 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12819__delegate.call(this, f, c1, c2, c3, colls);
};
G__12819.cljs$lang$maxFixedArity = 4;
G__12819.cljs$lang$applyTo = (function (arglist__12820){
var f = cljs.core.first(arglist__12820);
var c1 = cljs.core.first(cljs.core.next(arglist__12820));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12820)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12820))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12820))));
return G__12819__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12819;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12814.call(this,f,c1);
case  3 :
return map__12815.call(this,f,c1,c2);
case  4 :
return map__12816.call(this,f,c1,c2,c3);
default:
return map__12817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12817.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____12821 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12821))
{var s__12822 = temp__3698__auto____12821;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12822),take.call(null,(n - 1),cljs.core.rest.call(null,s__12822)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__12825 = (function (n,coll){
while(true){
var s__12823 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12824 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12824))
{return s__12823;
} else
{return and__3546__auto____12824;
}
})()))
{{
var G__12826 = (n - 1);
var G__12827 = cljs.core.rest.call(null,s__12823);
n = G__12826;
coll = G__12827;
continue;
}
} else
{return s__12823;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12825.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12828 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12829 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12828.call(this,n);
case  2 :
return drop_last__12829.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__12831 = cljs.core.seq.call(null,coll);
var lead__12832 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12832))
{{
var G__12833 = cljs.core.next.call(null,s__12831);
var G__12834 = cljs.core.next.call(null,lead__12832);
s__12831 = G__12833;
lead__12832 = G__12834;
continue;
}
} else
{return s__12831;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12837 = (function (pred,coll){
while(true){
var s__12835 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12836 = s__12835;

if(cljs.core.truth_(and__3546__auto____12836))
{return pred.call(null,cljs.core.first.call(null,s__12835));
} else
{return and__3546__auto____12836;
}
})()))
{{
var G__12838 = pred;
var G__12839 = cljs.core.rest.call(null,s__12835);
pred = G__12838;
coll = G__12839;
continue;
}
} else
{return s__12835;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12837.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12840 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12840))
{var s__12841 = temp__3698__auto____12840;

return cljs.core.concat.call(null,s__12841,cycle.call(null,s__12841));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__12842 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12843 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12842.call(this,n);
case  2 :
return repeat__12843.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__12845 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12846 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12845.call(this,n);
case  2 :
return repeatedly__12846.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__12852 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12848 = cljs.core.seq.call(null,c1);
var s2__12849 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12850 = s1__12848;

if(cljs.core.truth_(and__3546__auto____12850))
{return s2__12849;
} else
{return and__3546__auto____12850;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12848),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12849),interleave.call(null,cljs.core.rest.call(null,s1__12848),cljs.core.rest.call(null,s2__12849))));
} else
{return null;
}
})));
});
var interleave__12853 = (function() { 
var G__12855__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12851 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12851)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12851),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12851)));
} else
{return null;
}
})));
};
var G__12855 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12855__delegate.call(this, c1, c2, colls);
};
G__12855.cljs$lang$maxFixedArity = 2;
G__12855.cljs$lang$applyTo = (function (arglist__12856){
var c1 = cljs.core.first(arglist__12856);
var c2 = cljs.core.first(cljs.core.next(arglist__12856));
var colls = cljs.core.rest(cljs.core.next(arglist__12856));
return G__12855__delegate.call(this, c1, c2, colls);
});
return G__12855;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12852.call(this,c1,c2);
default:
return interleave__12853.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12853.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12859 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12857 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12857))
{var coll__12858 = temp__3695__auto____12857;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12858),cat.call(null,cljs.core.rest.call(null,coll__12858),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12859.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12860 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12861 = (function() { 
var G__12863__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12863 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12863__delegate.call(this, f, coll, colls);
};
G__12863.cljs$lang$maxFixedArity = 2;
G__12863.cljs$lang$applyTo = (function (arglist__12864){
var f = cljs.core.first(arglist__12864);
var coll = cljs.core.first(cljs.core.next(arglist__12864));
var colls = cljs.core.rest(cljs.core.next(arglist__12864));
return G__12863__delegate.call(this, f, coll, colls);
});
return G__12863;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12860.call(this,f,coll);
default:
return mapcat__12861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12861.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12865))
{var s__12866 = temp__3698__auto____12865;

var f__12867 = cljs.core.first.call(null,s__12866);
var r__12868 = cljs.core.rest.call(null,s__12866);

if(cljs.core.truth_(pred.call(null,f__12867)))
{return cljs.core.cons.call(null,f__12867,filter.call(null,pred,r__12868));
} else
{return filter.call(null,pred,r__12868);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12870 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12870.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12869_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12869_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__12877 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12878 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12871 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12871))
{var s__12872 = temp__3698__auto____12871;

var p__12873 = cljs.core.take.call(null,n,s__12872);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12873))))
{return cljs.core.cons.call(null,p__12873,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12872)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12879 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12874))
{var s__12875 = temp__3698__auto____12874;

var p__12876 = cljs.core.take.call(null,n,s__12875);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12876))))
{return cljs.core.cons.call(null,p__12876,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12875)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12876,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12877.call(this,n,step);
case  3 :
return partition__12878.call(this,n,step,pad);
case  4 :
return partition__12879.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__12885 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12886 = (function (m,ks,not_found){
var sentinel__12881 = cljs.core.lookup_sentinel;
var m__12882 = m;
var ks__12883 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12883))
{var m__12884 = cljs.core.get.call(null,m__12882,cljs.core.first.call(null,ks__12883),sentinel__12881);

if(cljs.core.truth_((sentinel__12881 === m__12884)))
{return not_found;
} else
{{
var G__12888 = sentinel__12881;
var G__12889 = m__12884;
var G__12890 = cljs.core.next.call(null,ks__12883);
sentinel__12881 = G__12888;
m__12882 = G__12889;
ks__12883 = G__12890;
continue;
}
}
} else
{return m__12882;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12885.call(this,m,ks);
case  3 :
return get_in__12886.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12891,v){
var vec__12892__12893 = p__12891;
var k__12894 = cljs.core.nth.call(null,vec__12892__12893,0,null);
var ks__12895 = cljs.core.nthnext.call(null,vec__12892__12893,1);

if(cljs.core.truth_(ks__12895))
{return cljs.core.assoc.call(null,m,k__12894,assoc_in.call(null,cljs.core.get.call(null,m,k__12894),ks__12895,v));
} else
{return cljs.core.assoc.call(null,m,k__12894,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__12896,f,args){
var vec__12897__12898 = p__12896;
var k__12899 = cljs.core.nth.call(null,vec__12897__12898,0,null);
var ks__12900 = cljs.core.nthnext.call(null,vec__12897__12898,1);

if(cljs.core.truth_(ks__12900))
{return cljs.core.assoc.call(null,m,k__12899,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12899),ks__12900,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12899,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12899),args));
}
};
var update_in = function (m,p__12896,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12896, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12901){
var m = cljs.core.first(arglist__12901);
var p__12896 = cljs.core.first(cljs.core.next(arglist__12901));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12901)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12901)));
return update_in__delegate.call(this, m, p__12896, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12902 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12935 = null;
var G__12935__12936 = (function (coll,k){
var this__12903 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12935__12937 = (function (coll,k,not_found){
var this__12904 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12935 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12935__12936.call(this,coll,k);
case  3 :
return G__12935__12937.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12935;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12905 = this;
var new_array__12906 = cljs.core.aclone.call(null,this__12905.array);

(new_array__12906[k] = v);
return (new cljs.core.Vector(this__12905.meta,new_array__12906));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12939 = null;
var G__12939__12940 = (function (tsym12907,k){
var this__12909 = this;
var tsym12907__12910 = this;

var coll__12911 = tsym12907__12910;

return cljs.core._lookup.call(null,coll__12911,k);
});
var G__12939__12941 = (function (tsym12908,k,not_found){
var this__12912 = this;
var tsym12908__12913 = this;

var coll__12914 = tsym12908__12913;

return cljs.core._lookup.call(null,coll__12914,k,not_found);
});
G__12939 = function(tsym12908,k,not_found){
switch(arguments.length){
case  2 :
return G__12939__12940.call(this,tsym12908,k);
case  3 :
return G__12939__12941.call(this,tsym12908,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12939;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12915 = this;
var new_array__12916 = cljs.core.aclone.call(null,this__12915.array);

new_array__12916.push(o);
return (new cljs.core.Vector(this__12915.meta,new_array__12916));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12943 = null;
var G__12943__12944 = (function (v,f){
var this__12917 = this;
return cljs.core.ci_reduce.call(null,this__12917.array,f);
});
var G__12943__12945 = (function (v,f,start){
var this__12918 = this;
return cljs.core.ci_reduce.call(null,this__12918.array,f,start);
});
G__12943 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12943__12944.call(this,v,f);
case  3 :
return G__12943__12945.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12943;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12919 = this;
if(cljs.core.truth_((this__12919.array.length > 0)))
{var vector_seq__12920 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12919.array.length)))
{return cljs.core.cons.call(null,(this__12919.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12920.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12921 = this;
return this__12921.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12922 = this;
var count__12923 = this__12922.array.length;

if(cljs.core.truth_((count__12923 > 0)))
{return (this__12922.array[(count__12923 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12924 = this;
if(cljs.core.truth_((this__12924.array.length > 0)))
{var new_array__12925 = cljs.core.aclone.call(null,this__12924.array);

new_array__12925.pop();
return (new cljs.core.Vector(this__12924.meta,new_array__12925));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12926 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12927 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12928 = this;
return (new cljs.core.Vector(meta,this__12928.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12929 = this;
return this__12929.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12947 = null;
var G__12947__12948 = (function (coll,n){
var this__12930 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12931 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12931))
{return (n < this__12930.array.length);
} else
{return and__3546__auto____12931;
}
})()))
{return (this__12930.array[n]);
} else
{return null;
}
});
var G__12947__12949 = (function (coll,n,not_found){
var this__12932 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12933 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12933))
{return (n < this__12932.array.length);
} else
{return and__3546__auto____12933;
}
})()))
{return (this__12932.array[n]);
} else
{return not_found;
}
});
G__12947 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12947__12948.call(this,coll,n);
case  3 :
return G__12947__12949.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12947;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12934 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12934.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__12951){
var args = cljs.core.seq( arglist__12951 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12952 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12980 = null;
var G__12980__12981 = (function (coll,k){
var this__12953 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12980__12982 = (function (coll,k,not_found){
var this__12954 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12980 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12980__12981.call(this,coll,k);
case  3 :
return G__12980__12982.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12980;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12955 = this;
var v_pos__12956 = (this__12955.start + key);

return (new cljs.core.Subvec(this__12955.meta,cljs.core._assoc.call(null,this__12955.v,v_pos__12956,val),this__12955.start,((this__12955.end > (v_pos__12956 + 1)) ? this__12955.end : (v_pos__12956 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12984 = null;
var G__12984__12985 = (function (tsym12957,k){
var this__12959 = this;
var tsym12957__12960 = this;

var coll__12961 = tsym12957__12960;

return cljs.core._lookup.call(null,coll__12961,k);
});
var G__12984__12986 = (function (tsym12958,k,not_found){
var this__12962 = this;
var tsym12958__12963 = this;

var coll__12964 = tsym12958__12963;

return cljs.core._lookup.call(null,coll__12964,k,not_found);
});
G__12984 = function(tsym12958,k,not_found){
switch(arguments.length){
case  2 :
return G__12984__12985.call(this,tsym12958,k);
case  3 :
return G__12984__12986.call(this,tsym12958,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12984;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12965 = this;
return (new cljs.core.Subvec(this__12965.meta,cljs.core._assoc_n.call(null,this__12965.v,this__12965.end,o),this__12965.start,(this__12965.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12988 = null;
var G__12988__12989 = (function (coll,f){
var this__12966 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12988__12990 = (function (coll,f,start){
var this__12967 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12988 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12988__12989.call(this,coll,f);
case  3 :
return G__12988__12990.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12988;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12968 = this;
var subvec_seq__12969 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12968.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12968.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12969.call(null,this__12968.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12970 = this;
return (this__12970.end - this__12970.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12971 = this;
return cljs.core._nth.call(null,this__12971.v,(this__12971.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12972 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12972.start,this__12972.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12972.meta,this__12972.v,this__12972.start,(this__12972.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12973 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12974 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12975 = this;
return (new cljs.core.Subvec(meta,this__12975.v,this__12975.start,this__12975.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12976 = this;
return this__12976.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12992 = null;
var G__12992__12993 = (function (coll,n){
var this__12977 = this;
return cljs.core._nth.call(null,this__12977.v,(this__12977.start + n));
});
var G__12992__12994 = (function (coll,n,not_found){
var this__12978 = this;
return cljs.core._nth.call(null,this__12978.v,(this__12978.start + n),not_found);
});
G__12992 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12992__12993.call(this,coll,n);
case  3 :
return G__12992__12994.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12992;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12979 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12979.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__12996 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12997 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12996.call(this,v,start);
case  3 :
return subvec__12997.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12999 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13000 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13001 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13002 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13002.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13003 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13004 = this;
return cljs.core._first.call(null,this__13004.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13005 = this;
var temp__3695__auto____13006 = cljs.core.next.call(null,this__13005.front);

if(cljs.core.truth_(temp__3695__auto____13006))
{var f1__13007 = temp__3695__auto____13006;

return (new cljs.core.PersistentQueueSeq(this__13005.meta,f1__13007,this__13005.rear));
} else
{if(cljs.core.truth_((this__13005.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__13005.meta,this__13005.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13008 = this;
return this__13008.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13009 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__13009.front,this__13009.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13010 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13011 = this;
if(cljs.core.truth_(this__13011.front))
{return (new cljs.core.PersistentQueue(this__13011.meta,(this__13011.count + 1),this__13011.front,cljs.core.conj.call(null,(function (){var or__3548__auto____13012 = this__13011.rear;

if(cljs.core.truth_(or__3548__auto____13012))
{return or__3548__auto____13012;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__13011.meta,(this__13011.count + 1),cljs.core.conj.call(null,this__13011.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13013 = this;
var rear__13014 = cljs.core.seq.call(null,this__13013.rear);

if(cljs.core.truth_((function (){var or__3548__auto____13015 = this__13013.front;

if(cljs.core.truth_(or__3548__auto____13015))
{return or__3548__auto____13015;
} else
{return rear__13014;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13013.front,cljs.core.seq.call(null,rear__13014)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13016 = this;
return this__13016.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13017 = this;
return cljs.core._first.call(null,this__13017.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13018 = this;
if(cljs.core.truth_(this__13018.front))
{var temp__3695__auto____13019 = cljs.core.next.call(null,this__13018.front);

if(cljs.core.truth_(temp__3695__auto____13019))
{var f1__13020 = temp__3695__auto____13019;

return (new cljs.core.PersistentQueue(this__13018.meta,(this__13018.count - 1),f1__13020,this__13018.rear));
} else
{return (new cljs.core.PersistentQueue(this__13018.meta,(this__13018.count - 1),cljs.core.seq.call(null,this__13018.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13021 = this;
return cljs.core.first.call(null,this__13021.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13022 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13023 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13024 = this;
return (new cljs.core.PersistentQueue(meta,this__13024.count,this__13024.front,this__13024.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13025 = this;
return this__13025.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13026 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13027 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__13028 = array.length;

var i__13029 = 0;

while(true){
if(cljs.core.truth_((i__13029 < len__13028)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13029]))))
{return i__13029;
} else
{{
var G__13030 = (i__13029 + incr);
i__13029 = G__13030;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___13032 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13033 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13031 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13031))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13031;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___13032.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13033.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__13036 = cljs.core.hash.call(null,a);
var b__13037 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__13036 < b__13037)))
{return -1;
} else
{if(cljs.core.truth_((a__13036 > b__13037)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13038 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13065 = null;
var G__13065__13066 = (function (coll,k){
var this__13039 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13065__13067 = (function (coll,k,not_found){
var this__13040 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13040.strobj,(this__13040.strobj[k]),not_found);
});
G__13065 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13065__13066.call(this,coll,k);
case  3 :
return G__13065__13067.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13065;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13041 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13042 = goog.object.clone.call(null,this__13041.strobj);
var overwrite_QMARK___13043 = new_strobj__13042.hasOwnProperty(k);

(new_strobj__13042[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13043))
{return (new cljs.core.ObjMap(this__13041.meta,this__13041.keys,new_strobj__13042));
} else
{var new_keys__13044 = cljs.core.aclone.call(null,this__13041.keys);

new_keys__13044.push(k);
return (new cljs.core.ObjMap(this__13041.meta,new_keys__13044,new_strobj__13042));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13041.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13045 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13045.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13069 = null;
var G__13069__13070 = (function (tsym13046,k){
var this__13048 = this;
var tsym13046__13049 = this;

var coll__13050 = tsym13046__13049;

return cljs.core._lookup.call(null,coll__13050,k);
});
var G__13069__13071 = (function (tsym13047,k,not_found){
var this__13051 = this;
var tsym13047__13052 = this;

var coll__13053 = tsym13047__13052;

return cljs.core._lookup.call(null,coll__13053,k,not_found);
});
G__13069 = function(tsym13047,k,not_found){
switch(arguments.length){
case  2 :
return G__13069__13070.call(this,tsym13047,k);
case  3 :
return G__13069__13071.call(this,tsym13047,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13069;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13054 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13055 = this;
if(cljs.core.truth_((this__13055.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13035_SHARP_){
return cljs.core.vector.call(null,p1__13035_SHARP_,(this__13055.strobj[p1__13035_SHARP_]));
}),this__13055.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13056 = this;
return this__13056.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13057 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13058 = this;
return (new cljs.core.ObjMap(meta,this__13058.keys,this__13058.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13059 = this;
return this__13059.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13060 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13060.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13061 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13062 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13062))
{return this__13061.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13062;
}
})()))
{var new_keys__13063 = cljs.core.aclone.call(null,this__13061.keys);
var new_strobj__13064 = goog.object.clone.call(null,this__13061.strobj);

new_keys__13063.splice(cljs.core.scan_array.call(null,1,k,new_keys__13063),1);
cljs.core.js_delete.call(null,new_strobj__13064,k);
return (new cljs.core.ObjMap(this__13061.meta,new_keys__13063,new_strobj__13064));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13074 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13112 = null;
var G__13112__13113 = (function (coll,k){
var this__13075 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13112__13114 = (function (coll,k,not_found){
var this__13076 = this;
var bucket__13077 = (this__13076.hashobj[cljs.core.hash.call(null,k)]);
var i__13078 = (cljs.core.truth_(bucket__13077)?cljs.core.scan_array.call(null,2,k,bucket__13077):null);

if(cljs.core.truth_(i__13078))
{return (bucket__13077[(i__13078 + 1)]);
} else
{return not_found;
}
});
G__13112 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13112__13113.call(this,coll,k);
case  3 :
return G__13112__13114.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13112;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13079 = this;
var h__13080 = cljs.core.hash.call(null,k);
var bucket__13081 = (this__13079.hashobj[h__13080]);

if(cljs.core.truth_(bucket__13081))
{var new_bucket__13082 = cljs.core.aclone.call(null,bucket__13081);
var new_hashobj__13083 = goog.object.clone.call(null,this__13079.hashobj);

(new_hashobj__13083[h__13080] = new_bucket__13082);
var temp__3695__auto____13084 = cljs.core.scan_array.call(null,2,k,new_bucket__13082);

if(cljs.core.truth_(temp__3695__auto____13084))
{var i__13085 = temp__3695__auto____13084;

(new_bucket__13082[(i__13085 + 1)] = v);
return (new cljs.core.HashMap(this__13079.meta,this__13079.count,new_hashobj__13083));
} else
{new_bucket__13082.push(k,v);
return (new cljs.core.HashMap(this__13079.meta,(this__13079.count + 1),new_hashobj__13083));
}
} else
{var new_hashobj__13086 = goog.object.clone.call(null,this__13079.hashobj);

(new_hashobj__13086[h__13080] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13079.meta,(this__13079.count + 1),new_hashobj__13086));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13087 = this;
var bucket__13088 = (this__13087.hashobj[cljs.core.hash.call(null,k)]);
var i__13089 = (cljs.core.truth_(bucket__13088)?cljs.core.scan_array.call(null,2,k,bucket__13088):null);

if(cljs.core.truth_(i__13089))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13116 = null;
var G__13116__13117 = (function (tsym13090,k){
var this__13092 = this;
var tsym13090__13093 = this;

var coll__13094 = tsym13090__13093;

return cljs.core._lookup.call(null,coll__13094,k);
});
var G__13116__13118 = (function (tsym13091,k,not_found){
var this__13095 = this;
var tsym13091__13096 = this;

var coll__13097 = tsym13091__13096;

return cljs.core._lookup.call(null,coll__13097,k,not_found);
});
G__13116 = function(tsym13091,k,not_found){
switch(arguments.length){
case  2 :
return G__13116__13117.call(this,tsym13091,k);
case  3 :
return G__13116__13118.call(this,tsym13091,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13116;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13098 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13099 = this;
if(cljs.core.truth_((this__13099.count > 0)))
{var hashes__13100 = cljs.core.js_keys.call(null,this__13099.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13073_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13099.hashobj[p1__13073_SHARP_])));
}),hashes__13100);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13101 = this;
return this__13101.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13102 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13103 = this;
return (new cljs.core.HashMap(meta,this__13103.count,this__13103.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13104 = this;
return this__13104.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13105 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13105.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13106 = this;
var h__13107 = cljs.core.hash.call(null,k);
var bucket__13108 = (this__13106.hashobj[h__13107]);
var i__13109 = (cljs.core.truth_(bucket__13108)?cljs.core.scan_array.call(null,2,k,bucket__13108):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13109)))
{return coll;
} else
{var new_hashobj__13110 = goog.object.clone.call(null,this__13106.hashobj);

if(cljs.core.truth_((3 > bucket__13108.length)))
{cljs.core.js_delete.call(null,new_hashobj__13110,h__13107);
} else
{var new_bucket__13111 = cljs.core.aclone.call(null,bucket__13108);

new_bucket__13111.splice(i__13109,2);
(new_hashobj__13110[h__13107] = new_bucket__13111);
}
return (new cljs.core.HashMap(this__13106.meta,(this__13106.count - 1),new_hashobj__13110));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13120 = ks.length;

var i__13121 = 0;
var out__13122 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13121 < len__13120)))
{{
var G__13123 = (i__13121 + 1);
var G__13124 = cljs.core.assoc.call(null,out__13122,(ks[i__13121]),(vs[i__13121]));
i__13121 = G__13123;
out__13122 = G__13124;
continue;
}
} else
{return out__13122;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__13125 = cljs.core.seq.call(null,keyvals);
var out__13126 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13125))
{{
var G__13127 = cljs.core.nnext.call(null,in$__13125);
var G__13128 = cljs.core.assoc.call(null,out__13126,cljs.core.first.call(null,in$__13125),cljs.core.second.call(null,in$__13125));
in$__13125 = G__13127;
out__13126 = G__13128;
continue;
}
} else
{return out__13126;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__13129){
var keyvals = cljs.core.seq( arglist__13129 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__13130_SHARP_,p2__13131_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13132 = p1__13130_SHARP_;

if(cljs.core.truth_(or__3548__auto____13132))
{return or__3548__auto____13132;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13131_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__13133){
var maps = cljs.core.seq( arglist__13133 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__13136 = (function (m,e){
var k__13134 = cljs.core.first.call(null,e);
var v__13135 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13134)))
{return cljs.core.assoc.call(null,m,k__13134,f.call(null,cljs.core.get.call(null,m,k__13134),v__13135));
} else
{return cljs.core.assoc.call(null,m,k__13134,v__13135);
}
});
var merge2__13138 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13136,(function (){var or__3548__auto____13137 = m1;

if(cljs.core.truth_(or__3548__auto____13137))
{return or__3548__auto____13137;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13138,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__13139){
var f = cljs.core.first(arglist__13139);
var maps = cljs.core.rest(arglist__13139);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13141 = cljs.core.ObjMap.fromObject([],{});
var keys__13142 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13142))
{var key__13143 = cljs.core.first.call(null,keys__13142);
var entry__13144 = cljs.core.get.call(null,map,key__13143,"\uFDD0'user/not-found");

{
var G__13145 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13144,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__13141,key__13143,entry__13144):ret__13141);
var G__13146 = cljs.core.next.call(null,keys__13142);
ret__13141 = G__13145;
keys__13142 = G__13146;
continue;
}
} else
{return ret__13141;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13147 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13168 = null;
var G__13168__13169 = (function (coll,v){
var this__13148 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13168__13170 = (function (coll,v,not_found){
var this__13149 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13149.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13168 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13168__13169.call(this,coll,v);
case  3 :
return G__13168__13170.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13168;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13172 = null;
var G__13172__13173 = (function (tsym13150,k){
var this__13152 = this;
var tsym13150__13153 = this;

var coll__13154 = tsym13150__13153;

return cljs.core._lookup.call(null,coll__13154,k);
});
var G__13172__13174 = (function (tsym13151,k,not_found){
var this__13155 = this;
var tsym13151__13156 = this;

var coll__13157 = tsym13151__13156;

return cljs.core._lookup.call(null,coll__13157,k,not_found);
});
G__13172 = function(tsym13151,k,not_found){
switch(arguments.length){
case  2 :
return G__13172__13173.call(this,tsym13151,k);
case  3 :
return G__13172__13174.call(this,tsym13151,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13172;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13158 = this;
return (new cljs.core.Set(this__13158.meta,cljs.core.assoc.call(null,this__13158.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13159 = this;
return cljs.core.keys.call(null,this__13159.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13160 = this;
return (new cljs.core.Set(this__13160.meta,cljs.core.dissoc.call(null,this__13160.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13161 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13162 = this;
var and__3546__auto____13163 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13163))
{var and__3546__auto____13164 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13164))
{return cljs.core.every_QMARK_.call(null,(function (p1__13140_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13140_SHARP_);
}),other);
} else
{return and__3546__auto____13164;
}
} else
{return and__3546__auto____13163;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13165 = this;
return (new cljs.core.Set(meta,this__13165.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13166 = this;
return this__13166.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13167 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13167.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13177 = cljs.core.seq.call(null,coll);
var out__13178 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13177))))
{{
var G__13179 = cljs.core.rest.call(null,in$__13177);
var G__13180 = cljs.core.conj.call(null,out__13178,cljs.core.first.call(null,in$__13177));
in$__13177 = G__13179;
out__13178 = G__13180;
continue;
}
} else
{return out__13178;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__13181 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13182 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13182))
{var e__13183 = temp__3695__auto____13182;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13183));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13181,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13176_SHARP_){
var temp__3695__auto____13184 = cljs.core.find.call(null,smap,p1__13176_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13184))
{var e__13185 = temp__3695__auto____13184;

return cljs.core.second.call(null,e__13185);
} else
{return p1__13176_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13193 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13186,seen){
while(true){
var vec__13187__13188 = p__13186;
var f__13189 = cljs.core.nth.call(null,vec__13187__13188,0,null);
var xs__13190 = vec__13187__13188;

var temp__3698__auto____13191 = cljs.core.seq.call(null,xs__13190);

if(cljs.core.truth_(temp__3698__auto____13191))
{var s__13192 = temp__3698__auto____13191;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13189)))
{{
var G__13194 = cljs.core.rest.call(null,s__13192);
var G__13195 = seen;
p__13186 = G__13194;
seen = G__13195;
continue;
}
} else
{return cljs.core.cons.call(null,f__13189,step.call(null,cljs.core.rest.call(null,s__13192),cljs.core.conj.call(null,seen,f__13189)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13193.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13196 = cljs.core.Vector.fromArray([]);
var s__13197 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13197)))
{{
var G__13198 = cljs.core.conj.call(null,ret__13196,cljs.core.first.call(null,s__13197));
var G__13199 = cljs.core.next.call(null,s__13197);
ret__13196 = G__13198;
s__13197 = G__13199;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13196);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____13200 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13200))
{return or__3548__auto____13200;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13201 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__13201 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13201 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____13202 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13202))
{return or__3548__auto____13202;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13203 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__13203 > -1)))
{return cljs.core.subs.call(null,x,2,i__13203);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__13206 = cljs.core.ObjMap.fromObject([],{});
var ks__13207 = cljs.core.seq.call(null,keys);
var vs__13208 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13209 = ks__13207;

if(cljs.core.truth_(and__3546__auto____13209))
{return vs__13208;
} else
{return and__3546__auto____13209;
}
})()))
{{
var G__13210 = cljs.core.assoc.call(null,map__13206,cljs.core.first.call(null,ks__13207),cljs.core.first.call(null,vs__13208));
var G__13211 = cljs.core.next.call(null,ks__13207);
var G__13212 = cljs.core.next.call(null,vs__13208);
map__13206 = G__13210;
ks__13207 = G__13211;
vs__13208 = G__13212;
continue;
}
} else
{return map__13206;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__13215 = (function (k,x){
return x;
});
var max_key__13216 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13217 = (function() { 
var G__13219__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13204_SHARP_,p2__13205_SHARP_){
return max_key.call(null,k,p1__13204_SHARP_,p2__13205_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13219 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13219__delegate.call(this, k, x, y, more);
};
G__13219.cljs$lang$maxFixedArity = 3;
G__13219.cljs$lang$applyTo = (function (arglist__13220){
var k = cljs.core.first(arglist__13220);
var x = cljs.core.first(cljs.core.next(arglist__13220));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13220)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13220)));
return G__13219__delegate.call(this, k, x, y, more);
});
return G__13219;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13215.call(this,k,x);
case  3 :
return max_key__13216.call(this,k,x,y);
default:
return max_key__13217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13217.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13221 = (function (k,x){
return x;
});
var min_key__13222 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13223 = (function() { 
var G__13225__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13213_SHARP_,p2__13214_SHARP_){
return min_key.call(null,k,p1__13213_SHARP_,p2__13214_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13225 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13225__delegate.call(this, k, x, y, more);
};
G__13225.cljs$lang$maxFixedArity = 3;
G__13225.cljs$lang$applyTo = (function (arglist__13226){
var k = cljs.core.first(arglist__13226);
var x = cljs.core.first(cljs.core.next(arglist__13226));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13226)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13226)));
return G__13225__delegate.call(this, k, x, y, more);
});
return G__13225;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13221.call(this,k,x);
case  3 :
return min_key__13222.call(this,k,x,y);
default:
return min_key__13223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13223.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13229 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13230 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13227 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13227))
{var s__13228 = temp__3698__auto____13227;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13228),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13228)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13229.call(this,n,step);
case  3 :
return partition_all__13230.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13232 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13232))
{var s__13233 = temp__3698__auto____13232;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13233))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13233),take_while.call(null,pred,cljs.core.rest.call(null,s__13233)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__13234 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13235 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13251 = null;
var G__13251__13252 = (function (rng,f){
var this__13236 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13251__13253 = (function (rng,f,s){
var this__13237 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13251 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13251__13252.call(this,rng,f);
case  3 :
return G__13251__13253.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13251;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13238 = this;
var comp__13239 = (cljs.core.truth_((this__13238.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13239.call(null,this__13238.start,this__13238.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13240 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13240.end - this__13240.start) / this__13240.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13241 = this;
return this__13241.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13242 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13242.meta,(this__13242.start + this__13242.step),this__13242.end,this__13242.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13243 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13244 = this;
return (new cljs.core.Range(meta,this__13244.start,this__13244.end,this__13244.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13245 = this;
return this__13245.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13255 = null;
var G__13255__13256 = (function (rng,n){
var this__13246 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13246.start + (n * this__13246.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13247 = (this__13246.start > this__13246.end);

if(cljs.core.truth_(and__3546__auto____13247))
{return cljs.core._EQ_.call(null,this__13246.step,0);
} else
{return and__3546__auto____13247;
}
})()))
{return this__13246.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13255__13257 = (function (rng,n,not_found){
var this__13248 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13248.start + (n * this__13248.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13249 = (this__13248.start > this__13248.end);

if(cljs.core.truth_(and__3546__auto____13249))
{return cljs.core._EQ_.call(null,this__13248.step,0);
} else
{return and__3546__auto____13249;
}
})()))
{return this__13248.start;
} else
{return not_found;
}
}
});
G__13255 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13255__13256.call(this,rng,n);
case  3 :
return G__13255__13257.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13255;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13250 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13250.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13259 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13260 = (function (end){
return range.call(null,0,end,1);
});
var range__13261 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13262 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13259.call(this);
case  1 :
return range__13260.call(this,start);
case  2 :
return range__13261.call(this,start,end);
case  3 :
return range__13262.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13264 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13264))
{var s__13265 = temp__3698__auto____13264;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13265),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13265)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13267))
{var s__13268 = temp__3698__auto____13267;

var fst__13269 = cljs.core.first.call(null,s__13268);
var fv__13270 = f.call(null,fst__13269);
var run__13271 = cljs.core.cons.call(null,fst__13269,cljs.core.take_while.call(null,(function (p1__13266_SHARP_){
return cljs.core._EQ_.call(null,fv__13270,f.call(null,p1__13266_SHARP_));
}),cljs.core.next.call(null,s__13268)));

return cljs.core.cons.call(null,run__13271,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13271),s__13268))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__13286 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13282 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13282))
{var s__13283 = temp__3695__auto____13282;

return reductions.call(null,f,cljs.core.first.call(null,s__13283),cljs.core.rest.call(null,s__13283));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13287 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13284 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13284))
{var s__13285 = temp__3698__auto____13284;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13285)),cljs.core.rest.call(null,s__13285));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13286.call(this,f,init);
case  3 :
return reductions__13287.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__13290 = (function (f){
return (function() {
var G__13295 = null;
var G__13295__13296 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13295__13297 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13295__13298 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13295__13299 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13295__13300 = (function() { 
var G__13302__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13302 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13302__delegate.call(this, x, y, z, args);
};
G__13302.cljs$lang$maxFixedArity = 3;
G__13302.cljs$lang$applyTo = (function (arglist__13303){
var x = cljs.core.first(arglist__13303);
var y = cljs.core.first(cljs.core.next(arglist__13303));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13303)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13303)));
return G__13302__delegate.call(this, x, y, z, args);
});
return G__13302;
})()
;
G__13295 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13295__13296.call(this);
case  1 :
return G__13295__13297.call(this,x);
case  2 :
return G__13295__13298.call(this,x,y);
case  3 :
return G__13295__13299.call(this,x,y,z);
default:
return G__13295__13300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13295.cljs$lang$maxFixedArity = 3;
G__13295.cljs$lang$applyTo = G__13295__13300.cljs$lang$applyTo;
return G__13295;
})()
});
var juxt__13291 = (function (f,g){
return (function() {
var G__13304 = null;
var G__13304__13305 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13304__13306 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13304__13307 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13304__13308 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13304__13309 = (function() { 
var G__13311__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13311 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13311__delegate.call(this, x, y, z, args);
};
G__13311.cljs$lang$maxFixedArity = 3;
G__13311.cljs$lang$applyTo = (function (arglist__13312){
var x = cljs.core.first(arglist__13312);
var y = cljs.core.first(cljs.core.next(arglist__13312));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13312)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13312)));
return G__13311__delegate.call(this, x, y, z, args);
});
return G__13311;
})()
;
G__13304 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13304__13305.call(this);
case  1 :
return G__13304__13306.call(this,x);
case  2 :
return G__13304__13307.call(this,x,y);
case  3 :
return G__13304__13308.call(this,x,y,z);
default:
return G__13304__13309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13304.cljs$lang$maxFixedArity = 3;
G__13304.cljs$lang$applyTo = G__13304__13309.cljs$lang$applyTo;
return G__13304;
})()
});
var juxt__13292 = (function (f,g,h){
return (function() {
var G__13313 = null;
var G__13313__13314 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13313__13315 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13313__13316 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13313__13317 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13313__13318 = (function() { 
var G__13320__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13320 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13320__delegate.call(this, x, y, z, args);
};
G__13320.cljs$lang$maxFixedArity = 3;
G__13320.cljs$lang$applyTo = (function (arglist__13321){
var x = cljs.core.first(arglist__13321);
var y = cljs.core.first(cljs.core.next(arglist__13321));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13321)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13321)));
return G__13320__delegate.call(this, x, y, z, args);
});
return G__13320;
})()
;
G__13313 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13313__13314.call(this);
case  1 :
return G__13313__13315.call(this,x);
case  2 :
return G__13313__13316.call(this,x,y);
case  3 :
return G__13313__13317.call(this,x,y,z);
default:
return G__13313__13318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13313.cljs$lang$maxFixedArity = 3;
G__13313.cljs$lang$applyTo = G__13313__13318.cljs$lang$applyTo;
return G__13313;
})()
});
var juxt__13293 = (function() { 
var G__13322__delegate = function (f,g,h,fs){
var fs__13289 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13323 = null;
var G__13323__13324 = (function (){
return cljs.core.reduce.call(null,(function (p1__13272_SHARP_,p2__13273_SHARP_){
return cljs.core.conj.call(null,p1__13272_SHARP_,p2__13273_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13289);
});
var G__13323__13325 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13274_SHARP_,p2__13275_SHARP_){
return cljs.core.conj.call(null,p1__13274_SHARP_,p2__13275_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13289);
});
var G__13323__13326 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13276_SHARP_,p2__13277_SHARP_){
return cljs.core.conj.call(null,p1__13276_SHARP_,p2__13277_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13289);
});
var G__13323__13327 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13278_SHARP_,p2__13279_SHARP_){
return cljs.core.conj.call(null,p1__13278_SHARP_,p2__13279_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13289);
});
var G__13323__13328 = (function() { 
var G__13330__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13280_SHARP_,p2__13281_SHARP_){
return cljs.core.conj.call(null,p1__13280_SHARP_,cljs.core.apply.call(null,p2__13281_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13289);
};
var G__13330 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13330__delegate.call(this, x, y, z, args);
};
G__13330.cljs$lang$maxFixedArity = 3;
G__13330.cljs$lang$applyTo = (function (arglist__13331){
var x = cljs.core.first(arglist__13331);
var y = cljs.core.first(cljs.core.next(arglist__13331));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13331)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13331)));
return G__13330__delegate.call(this, x, y, z, args);
});
return G__13330;
})()
;
G__13323 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13323__13324.call(this);
case  1 :
return G__13323__13325.call(this,x);
case  2 :
return G__13323__13326.call(this,x,y);
case  3 :
return G__13323__13327.call(this,x,y,z);
default:
return G__13323__13328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13323.cljs$lang$maxFixedArity = 3;
G__13323.cljs$lang$applyTo = G__13323__13328.cljs$lang$applyTo;
return G__13323;
})()
};
var G__13322 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13322__delegate.call(this, f, g, h, fs);
};
G__13322.cljs$lang$maxFixedArity = 3;
G__13322.cljs$lang$applyTo = (function (arglist__13332){
var f = cljs.core.first(arglist__13332);
var g = cljs.core.first(cljs.core.next(arglist__13332));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13332)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13332)));
return G__13322__delegate.call(this, f, g, h, fs);
});
return G__13322;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13290.call(this,f);
case  2 :
return juxt__13291.call(this,f,g);
case  3 :
return juxt__13292.call(this,f,g,h);
default:
return juxt__13293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13293.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__13334 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13337 = cljs.core.next.call(null,coll);
coll = G__13337;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13335 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13333 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13333))
{return (n > 0);
} else
{return and__3546__auto____13333;
}
})()))
{{
var G__13338 = (n - 1);
var G__13339 = cljs.core.next.call(null,coll);
n = G__13338;
coll = G__13339;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__13334.call(this,n);
case  2 :
return dorun__13335.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__13340 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13341 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13340.call(this,n);
case  2 :
return doall__13341.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__13343 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13343),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13343),1)))
{return cljs.core.first.call(null,matches__13343);
} else
{return cljs.core.vec.call(null,matches__13343);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__13344 = re.exec(s);

if(cljs.core.truth_((matches__13344 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13344),1)))
{return cljs.core.first.call(null,matches__13344);
} else
{return cljs.core.vec.call(null,matches__13344);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13345 = cljs.core.re_find.call(null,re,s);
var match_idx__13346 = s.search(re);
var match_str__13347 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13345))?cljs.core.first.call(null,match_data__13345):match_data__13345);
var post_match__13348 = cljs.core.subs.call(null,s,(match_idx__13346 + cljs.core.count.call(null,match_str__13347)));

if(cljs.core.truth_(match_data__13345))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13345,re_seq.call(null,re,post_match__13348));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__13350__13351 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___13352 = cljs.core.nth.call(null,vec__13350__13351,0,null);
var flags__13353 = cljs.core.nth.call(null,vec__13350__13351,1,null);
var pattern__13354 = cljs.core.nth.call(null,vec__13350__13351,2,null);

return (new RegExp(pattern__13354,flags__13353));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13349_SHARP_){
return print_one.call(null,p1__13349_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13355 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____13355))
{var and__3546__auto____13359 = (function (){var x__450__auto____13356 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13357 = x__450__auto____13356;

if(cljs.core.truth_(and__3546__auto____13357))
{var and__3546__auto____13358 = x__450__auto____13356.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13358))
{return cljs.core.not.call(null,x__450__auto____13356.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13358;
}
} else
{return and__3546__auto____13357;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____13356);
}
})();

if(cljs.core.truth_(and__3546__auto____13359))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13359;
}
} else
{return and__3546__auto____13355;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____13360 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13361 = x__450__auto____13360;

if(cljs.core.truth_(and__3546__auto____13361))
{var and__3546__auto____13362 = x__450__auto____13360.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13362))
{return cljs.core.not.call(null,x__450__auto____13360.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13362;
}
} else
{return and__3546__auto____13361;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____13360);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__13363 = cljs.core.first.call(null,objs);
var sb__13364 = (new goog.string.StringBuffer());

var G__13365__13366 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13365__13366))
{var obj__13367 = cljs.core.first.call(null,G__13365__13366);
var G__13365__13368 = G__13365__13366;

while(true){
if(cljs.core.truth_((obj__13367 === first_obj__13363)))
{} else
{sb__13364.append(" ");
}
var G__13369__13370 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13367,opts));

if(cljs.core.truth_(G__13369__13370))
{var string__13371 = cljs.core.first.call(null,G__13369__13370);
var G__13369__13372 = G__13369__13370;

while(true){
sb__13364.append(string__13371);
var temp__3698__auto____13373 = cljs.core.next.call(null,G__13369__13372);

if(cljs.core.truth_(temp__3698__auto____13373))
{var G__13369__13374 = temp__3698__auto____13373;

{
var G__13377 = cljs.core.first.call(null,G__13369__13374);
var G__13378 = G__13369__13374;
string__13371 = G__13377;
G__13369__13372 = G__13378;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13375 = cljs.core.next.call(null,G__13365__13368);

if(cljs.core.truth_(temp__3698__auto____13375))
{var G__13365__13376 = temp__3698__auto____13375;

{
var G__13379 = cljs.core.first.call(null,G__13365__13376);
var G__13380 = G__13365__13376;
obj__13367 = G__13379;
G__13365__13368 = G__13380;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13364);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13381 = cljs.core.first.call(null,objs);

var G__13382__13383 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13382__13383))
{var obj__13384 = cljs.core.first.call(null,G__13382__13383);
var G__13382__13385 = G__13382__13383;

while(true){
if(cljs.core.truth_((obj__13384 === first_obj__13381)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13386__13387 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13384,opts));

if(cljs.core.truth_(G__13386__13387))
{var string__13388 = cljs.core.first.call(null,G__13386__13387);
var G__13386__13389 = G__13386__13387;

while(true){
cljs.core.string_print.call(null,string__13388);
var temp__3698__auto____13390 = cljs.core.next.call(null,G__13386__13389);

if(cljs.core.truth_(temp__3698__auto____13390))
{var G__13386__13391 = temp__3698__auto____13390;

{
var G__13394 = cljs.core.first.call(null,G__13386__13391);
var G__13395 = G__13386__13391;
string__13388 = G__13394;
G__13386__13389 = G__13395;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13392 = cljs.core.next.call(null,G__13382__13385);

if(cljs.core.truth_(temp__3698__auto____13392))
{var G__13382__13393 = temp__3698__auto____13392;

{
var G__13396 = cljs.core.first.call(null,G__13382__13393);
var G__13397 = G__13382__13393;
obj__13384 = G__13396;
G__13382__13385 = G__13397;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__13398){
var objs = cljs.core.seq( arglist__13398 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__13399){
var objs = cljs.core.seq( arglist__13399 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__13400){
var objs = cljs.core.seq( arglist__13400 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__13401){
var objs = cljs.core.seq( arglist__13401 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__13402){
var objs = cljs.core.seq( arglist__13402 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13403 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13403,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____13404 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13404))
{var nspc__13405 = temp__3698__auto____13404;

return cljs.core.str.call(null,nspc__13405,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____13406 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13406))
{var nspc__13407 = temp__3698__auto____13406;

return cljs.core.str.call(null,nspc__13407,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13408 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13408,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__13409 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__13410 = this;
var G__13411__13412 = cljs.core.seq.call(null,this__13410.watches);

if(cljs.core.truth_(G__13411__13412))
{var G__13414__13416 = cljs.core.first.call(null,G__13411__13412);
var vec__13415__13417 = G__13414__13416;
var key__13418 = cljs.core.nth.call(null,vec__13415__13417,0,null);
var f__13419 = cljs.core.nth.call(null,vec__13415__13417,1,null);
var G__13411__13420 = G__13411__13412;

var G__13414__13421 = G__13414__13416;
var G__13411__13422 = G__13411__13420;

while(true){
var vec__13423__13424 = G__13414__13421;
var key__13425 = cljs.core.nth.call(null,vec__13423__13424,0,null);
var f__13426 = cljs.core.nth.call(null,vec__13423__13424,1,null);
var G__13411__13427 = G__13411__13422;

f__13426.call(null,key__13425,this$,oldval,newval);
var temp__3698__auto____13428 = cljs.core.next.call(null,G__13411__13427);

if(cljs.core.truth_(temp__3698__auto____13428))
{var G__13411__13429 = temp__3698__auto____13428;

{
var G__13436 = cljs.core.first.call(null,G__13411__13429);
var G__13437 = G__13411__13429;
G__13414__13421 = G__13436;
G__13411__13422 = G__13437;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__13430 = this;
return this$.watches = cljs.core.assoc.call(null,this__13430.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__13431 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13431.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__13432 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13432.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__13433 = this;
return this__13433.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13434 = this;
return this__13434.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13435 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__13444 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__13445 = (function() { 
var G__13447__delegate = function (x,p__13438){
var map__13439__13440 = p__13438;
var map__13439__13441 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13439__13440))?cljs.core.apply.call(null,cljs.core.hash_map,map__13439__13440):map__13439__13440);
var validator__13442 = cljs.core.get.call(null,map__13439__13441,"\uFDD0'validator");
var meta__13443 = cljs.core.get.call(null,map__13439__13441,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__13443,validator__13442,null));
};
var G__13447 = function (x,var_args){
var p__13438 = null;
if (goog.isDef(var_args)) {
  p__13438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13447__delegate.call(this, x, p__13438);
};
G__13447.cljs$lang$maxFixedArity = 1;
G__13447.cljs$lang$applyTo = (function (arglist__13448){
var x = cljs.core.first(arglist__13448);
var p__13438 = cljs.core.rest(arglist__13448);
return G__13447__delegate.call(this, x, p__13438);
});
return G__13447;
})()
;
atom = function(x,var_args){
var p__13438 = var_args;
switch(arguments.length){
case  1 :
return atom__13444.call(this,x);
default:
return atom__13445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__13445.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13449 = a.validator;

if(cljs.core.truth_(temp__3698__auto____13449))
{var validate__13450 = temp__3698__auto____13449;

if(cljs.core.truth_(validate__13450.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__13451 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13451,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___13452 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13453 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13454 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13455 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13456 = (function() { 
var G__13458__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13458 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13458__delegate.call(this, a, f, x, y, z, more);
};
G__13458.cljs$lang$maxFixedArity = 5;
G__13458.cljs$lang$applyTo = (function (arglist__13459){
var a = cljs.core.first(arglist__13459);
var f = cljs.core.first(cljs.core.next(arglist__13459));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13459)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13459))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13459)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13459)))));
return G__13458__delegate.call(this, a, f, x, y, z, more);
});
return G__13458;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13452.call(this,a,f);
case  3 :
return swap_BANG___13453.call(this,a,f,x);
case  4 :
return swap_BANG___13454.call(this,a,f,x,y);
case  5 :
return swap_BANG___13455.call(this,a,f,x,y,z);
default:
return swap_BANG___13456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___13456.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13460){
var iref = cljs.core.first(arglist__13460);
var f = cljs.core.first(cljs.core.next(arglist__13460));
var args = cljs.core.rest(cljs.core.next(arglist__13460));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__13461 = (function (){
return gensym.call(null,"G__");
});
var gensym__13462 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__13461.call(this);
case  1 :
return gensym__13462.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__13464 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__13464.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13465 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__13465.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__13465.state,this__13465.f);
}
return cljs.core.deref.call(null,this__13465.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__13466){
var body = cljs.core.seq( arglist__13466 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__13467__13468 = options;
var map__13467__13469 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13467__13468))?cljs.core.apply.call(null,cljs.core.hash_map,map__13467__13468):map__13467__13468);
var keywordize_keys__13470 = cljs.core.get.call(null,map__13467__13469,"\uFDD0'keywordize-keys");
var keyfn__13471 = (cljs.core.truth_(keywordize_keys__13470)?cljs.core.keyword:cljs.core.str);
var f__13477 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____13476 = (function iter__13472(s__13473){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13473__13474 = s__13473;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13473__13474)))
{var k__13475 = cljs.core.first.call(null,s__13473__13474);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__13471.call(null,k__13475),thisfn.call(null,(x[k__13475]))]),iter__13472.call(null,cljs.core.rest.call(null,s__13473__13474)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____13476.call(null,cljs.core.js_keys.call(null,x));
})());
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

return f__13477.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13478){
var x = cljs.core.first(arglist__13478);
var options = cljs.core.rest(arglist__13478);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__13479 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__13483__delegate = function (args){
var temp__3695__auto____13480 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__13479),args);

if(cljs.core.truth_(temp__3695__auto____13480))
{var v__13481 = temp__3695__auto____13480;

return v__13481;
} else
{var ret__13482 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__13479,cljs.core.assoc,args,ret__13482);
return ret__13482;
}
};
var G__13483 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13483__delegate.call(this, args);
};
G__13483.cljs$lang$maxFixedArity = 0;
G__13483.cljs$lang$applyTo = (function (arglist__13484){
var args = cljs.core.seq( arglist__13484 );;
return G__13483__delegate.call(this, args);
});
return G__13483;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__13486 = (function (f){
while(true){
var ret__13485 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__13485)))
{{
var G__13489 = ret__13485;
f = G__13489;
continue;
}
} else
{return ret__13485;
}
break;
}
});
var trampoline__13487 = (function() { 
var G__13490__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13490 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13490__delegate.call(this, f, args);
};
G__13490.cljs$lang$maxFixedArity = 1;
G__13490.cljs$lang$applyTo = (function (arglist__13491){
var f = cljs.core.first(arglist__13491);
var args = cljs.core.rest(arglist__13491);
return G__13490__delegate.call(this, f, args);
});
return G__13490;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__13486.call(this,f);
default:
return trampoline__13487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__13487.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__13492 = (function (){
return rand.call(null,1);
});
var rand__13493 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__13492.call(this);
case  1 :
return rand__13493.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__13495 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__13495,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__13495,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___13504 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___13505 = (function (h,child,parent){
var or__3548__auto____13496 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____13496))
{return or__3548__auto____13496;
} else
{var or__3548__auto____13497 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____13497))
{return or__3548__auto____13497;
} else
{var and__3546__auto____13498 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____13498))
{var and__3546__auto____13499 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____13499))
{var and__3546__auto____13500 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____13500))
{var ret__13501 = true;
var i__13502 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____13503 = cljs.core.not.call(null,ret__13501);

if(cljs.core.truth_(or__3548__auto____13503))
{return or__3548__auto____13503;
} else
{return cljs.core._EQ_.call(null,i__13502,cljs.core.count.call(null,parent));
}
})()))
{return ret__13501;
} else
{{
var G__13507 = isa_QMARK_.call(null,h,child.call(null,i__13502),parent.call(null,i__13502));
var G__13508 = (i__13502 + 1);
ret__13501 = G__13507;
i__13502 = G__13508;
continue;
}
}
break;
}
} else
{return and__3546__auto____13500;
}
} else
{return and__3546__auto____13499;
}
} else
{return and__3546__auto____13498;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___13504.call(this,h,child);
case  3 :
return isa_QMARK___13505.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__13509 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__13510 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__13509.call(this,h);
case  2 :
return parents__13510.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__13512 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__13513 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__13512.call(this,h);
case  2 :
return ancestors__13513.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__13515 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__13516 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__13515.call(this,h);
case  2 :
return descendants__13516.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__13526 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__13527 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__13521 = "\uFDD0'parents".call(null,h);
var td__13522 = "\uFDD0'descendants".call(null,h);
var ta__13523 = "\uFDD0'ancestors".call(null,h);
var tf__13524 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____13525 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__13521.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13523.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13523.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__13521,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__13524.call(null,"\uFDD0'ancestors".call(null,h),tag,td__13522,parent,ta__13523),"\uFDD0'descendants":tf__13524.call(null,"\uFDD0'descendants".call(null,h),parent,ta__13523,tag,td__13522)});
})());

if(cljs.core.truth_(or__3548__auto____13525))
{return or__3548__auto____13525;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__13526.call(this,h,tag);
case  3 :
return derive__13527.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__13533 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__13534 = (function (h,tag,parent){
var parentMap__13529 = "\uFDD0'parents".call(null,h);
var childsParents__13530 = (cljs.core.truth_(parentMap__13529.call(null,tag))?cljs.core.disj.call(null,parentMap__13529.call(null,tag),parent):cljs.core.set([]));
var newParents__13531 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13530))?cljs.core.assoc.call(null,parentMap__13529,tag,childsParents__13530):cljs.core.dissoc.call(null,parentMap__13529,tag));
var deriv_seq__13532 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13518_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13518_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13518_SHARP_),cljs.core.second.call(null,p1__13518_SHARP_)));
}),cljs.core.seq.call(null,newParents__13531)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__13529.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__13519_SHARP_,p2__13520_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13519_SHARP_,p2__13520_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13532));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__13533.call(this,h,tag);
case  3 :
return underive__13534.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__13536 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____13538 = (cljs.core.truth_((function (){var and__3546__auto____13537 = xprefs__13536;

if(cljs.core.truth_(and__3546__auto____13537))
{return xprefs__13536.call(null,y);
} else
{return and__3546__auto____13537;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____13538))
{return or__3548__auto____13538;
} else
{var or__3548__auto____13540 = (function (){var ps__13539 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13539) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13539),prefer_table)))
{} else
{}
{
var G__13543 = cljs.core.rest.call(null,ps__13539);
ps__13539 = G__13543;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13540))
{return or__3548__auto____13540;
} else
{var or__3548__auto____13542 = (function (){var ps__13541 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13541) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13541),y,prefer_table)))
{} else
{}
{
var G__13544 = cljs.core.rest.call(null,ps__13541);
ps__13541 = G__13544;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13542))
{return or__3548__auto____13542;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____13545 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____13545))
{return or__3548__auto____13545;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13554 = cljs.core.reduce.call(null,(function (be,p__13546){
var vec__13547__13548 = p__13546;
var k__13549 = cljs.core.nth.call(null,vec__13547__13548,0,null);
var ___13550 = cljs.core.nth.call(null,vec__13547__13548,1,null);
var e__13551 = vec__13547__13548;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13549)))
{var be2__13553 = (cljs.core.truth_((function (){var or__3548__auto____13552 = (be === null);

if(cljs.core.truth_(or__3548__auto____13552))
{return or__3548__auto____13552;
} else
{return cljs.core.dominates.call(null,k__13549,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13551:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13553),k__13549,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__13549," and ",cljs.core.first.call(null,be2__13553),", and neither is preferred")));
}
return be2__13553;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__13554))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13554));
return cljs.core.second.call(null,best_entry__13554);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13555 = mf;

if(cljs.core.truth_(and__3546__auto____13555))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____13555;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____13556 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13556))
{return or__3548__auto____13556;
} else
{var or__3548__auto____13557 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____13557))
{return or__3548__auto____13557;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____13558 = mf;

if(cljs.core.truth_(and__3546__auto____13558))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____13558;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____13559 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13559))
{return or__3548__auto____13559;
} else
{var or__3548__auto____13560 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____13560))
{return or__3548__auto____13560;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13561 = mf;

if(cljs.core.truth_(and__3546__auto____13561))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____13561;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13562 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13562))
{return or__3548__auto____13562;
} else
{var or__3548__auto____13563 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____13563))
{return or__3548__auto____13563;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____13564 = mf;

if(cljs.core.truth_(and__3546__auto____13564))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____13564;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____13565 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13565))
{return or__3548__auto____13565;
} else
{var or__3548__auto____13566 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____13566))
{return or__3548__auto____13566;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13567 = mf;

if(cljs.core.truth_(and__3546__auto____13567))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____13567;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13568 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13568))
{return or__3548__auto____13568;
} else
{var or__3548__auto____13569 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____13569))
{return or__3548__auto____13569;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13570 = mf;

if(cljs.core.truth_(and__3546__auto____13570))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____13570;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____13571 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13571))
{return or__3548__auto____13571;
} else
{var or__3548__auto____13572 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____13572))
{return or__3548__auto____13572;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13573 = mf;

if(cljs.core.truth_(and__3546__auto____13573))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____13573;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____13574 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13574))
{return or__3548__auto____13574;
} else
{var or__3548__auto____13575 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____13575))
{return or__3548__auto____13575;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____13576 = mf;

if(cljs.core.truth_(and__3546__auto____13576))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____13576;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____13577 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13577))
{return or__3548__auto____13577;
} else
{var or__3548__auto____13578 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____13578))
{return or__3548__auto____13578;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__13579 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__13580 = cljs.core._get_method.call(null,mf,dispatch_val__13579);

if(cljs.core.truth_(target_fn__13580))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__13579)));
}
return cljs.core.apply.call(null,target_fn__13580,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__13581 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__13582 = this;
cljs.core.swap_BANG_.call(null,this__13582.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13582.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13582.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13582.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__13583 = this;
cljs.core.swap_BANG_.call(null,this__13583.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__13583.method_cache,this__13583.method_table,this__13583.cached_hierarchy,this__13583.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__13584 = this;
cljs.core.swap_BANG_.call(null,this__13584.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__13584.method_cache,this__13584.method_table,this__13584.cached_hierarchy,this__13584.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__13585 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__13585.cached_hierarchy),cljs.core.deref.call(null,this__13585.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__13585.method_cache,this__13585.method_table,this__13585.cached_hierarchy,this__13585.hierarchy);
}
var temp__3695__auto____13586 = cljs.core.deref.call(null,this__13585.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____13586))
{var target_fn__13587 = temp__3695__auto____13586;

return target_fn__13587;
} else
{var temp__3695__auto____13588 = cljs.core.find_and_cache_best_method.call(null,this__13585.name,dispatch_val,this__13585.hierarchy,this__13585.method_table,this__13585.prefer_table,this__13585.method_cache,this__13585.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____13588))
{var target_fn__13589 = temp__3695__auto____13588;

return target_fn__13589;
} else
{return cljs.core.deref.call(null,this__13585.method_table).call(null,this__13585.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__13590 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__13590.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__13590.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__13590.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__13590.method_cache,this__13590.method_table,this__13590.cached_hierarchy,this__13590.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__13591 = this;
return cljs.core.deref.call(null,this__13591.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__13592 = this;
return cljs.core.deref.call(null,this__13592.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__13593 = this;
return cljs.core.do_dispatch.call(null,mf,this__13593.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__13594__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__13594 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13594__delegate.call(this, _, args);
};
G__13594.cljs$lang$maxFixedArity = 1;
G__13594.cljs$lang$applyTo = (function (arglist__13595){
var _ = cljs.core.first(arglist__13595);
var args = cljs.core.rest(arglist__13595);
return G__13594__delegate.call(this, _, args);
});
return G__13594;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
