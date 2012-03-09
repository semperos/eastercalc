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
var or__3548__auto____86187 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____86187))
{return or__3548__auto____86187;
} else
{var or__3548__auto____86188 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____86188))
{return or__3548__auto____86188;
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
var _invoke__86252 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____86189 = this$;

if(cljs.core.truth_(and__3546__auto____86189))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86189;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____86190 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86190))
{return or__3548__auto____86190;
} else
{var or__3548__auto____86191 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86191))
{return or__3548__auto____86191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__86253 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____86192 = this$;

if(cljs.core.truth_(and__3546__auto____86192))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86192;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____86193 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86193))
{return or__3548__auto____86193;
} else
{var or__3548__auto____86194 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86194))
{return or__3548__auto____86194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__86254 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____86195 = this$;

if(cljs.core.truth_(and__3546__auto____86195))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86195;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____86196 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86196))
{return or__3548__auto____86196;
} else
{var or__3548__auto____86197 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86197))
{return or__3548__auto____86197;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__86255 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____86198 = this$;

if(cljs.core.truth_(and__3546__auto____86198))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86198;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____86199 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86199))
{return or__3548__auto____86199;
} else
{var or__3548__auto____86200 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86200))
{return or__3548__auto____86200;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__86256 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____86201 = this$;

if(cljs.core.truth_(and__3546__auto____86201))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86201;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____86202 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86202))
{return or__3548__auto____86202;
} else
{var or__3548__auto____86203 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86203))
{return or__3548__auto____86203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__86257 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____86204 = this$;

if(cljs.core.truth_(and__3546__auto____86204))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86204;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____86205 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86205))
{return or__3548__auto____86205;
} else
{var or__3548__auto____86206 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86206))
{return or__3548__auto____86206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__86258 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____86207 = this$;

if(cljs.core.truth_(and__3546__auto____86207))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86207;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____86208 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86208))
{return or__3548__auto____86208;
} else
{var or__3548__auto____86209 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86209))
{return or__3548__auto____86209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__86259 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____86210 = this$;

if(cljs.core.truth_(and__3546__auto____86210))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86210;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____86211 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86211))
{return or__3548__auto____86211;
} else
{var or__3548__auto____86212 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86212))
{return or__3548__auto____86212;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__86260 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____86213 = this$;

if(cljs.core.truth_(and__3546__auto____86213))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86213;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____86214 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86214))
{return or__3548__auto____86214;
} else
{var or__3548__auto____86215 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86215))
{return or__3548__auto____86215;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__86261 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____86216 = this$;

if(cljs.core.truth_(and__3546__auto____86216))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86216;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____86217 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86217))
{return or__3548__auto____86217;
} else
{var or__3548__auto____86218 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86218))
{return or__3548__auto____86218;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__86262 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____86219 = this$;

if(cljs.core.truth_(and__3546__auto____86219))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86219;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____86220 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86220))
{return or__3548__auto____86220;
} else
{var or__3548__auto____86221 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86221))
{return or__3548__auto____86221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__86263 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____86222 = this$;

if(cljs.core.truth_(and__3546__auto____86222))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86222;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____86223 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86223))
{return or__3548__auto____86223;
} else
{var or__3548__auto____86224 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86224))
{return or__3548__auto____86224;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__86264 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____86225 = this$;

if(cljs.core.truth_(and__3546__auto____86225))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86225;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____86226 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86226))
{return or__3548__auto____86226;
} else
{var or__3548__auto____86227 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86227))
{return or__3548__auto____86227;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__86265 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____86228 = this$;

if(cljs.core.truth_(and__3546__auto____86228))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86228;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____86229 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86229))
{return or__3548__auto____86229;
} else
{var or__3548__auto____86230 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86230))
{return or__3548__auto____86230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__86266 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____86231 = this$;

if(cljs.core.truth_(and__3546__auto____86231))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86231;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____86232 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86232))
{return or__3548__auto____86232;
} else
{var or__3548__auto____86233 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86233))
{return or__3548__auto____86233;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__86267 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____86234 = this$;

if(cljs.core.truth_(and__3546__auto____86234))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86234;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____86235 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86235))
{return or__3548__auto____86235;
} else
{var or__3548__auto____86236 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86236))
{return or__3548__auto____86236;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__86268 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____86237 = this$;

if(cljs.core.truth_(and__3546__auto____86237))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86237;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____86238 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86238))
{return or__3548__auto____86238;
} else
{var or__3548__auto____86239 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86239))
{return or__3548__auto____86239;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__86269 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____86240 = this$;

if(cljs.core.truth_(and__3546__auto____86240))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86240;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____86241 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86241))
{return or__3548__auto____86241;
} else
{var or__3548__auto____86242 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86242))
{return or__3548__auto____86242;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__86270 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____86243 = this$;

if(cljs.core.truth_(and__3546__auto____86243))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86243;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____86244 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86244))
{return or__3548__auto____86244;
} else
{var or__3548__auto____86245 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86245))
{return or__3548__auto____86245;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__86271 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____86246 = this$;

if(cljs.core.truth_(and__3546__auto____86246))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86246;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____86247 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86247))
{return or__3548__auto____86247;
} else
{var or__3548__auto____86248 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86248))
{return or__3548__auto____86248;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__86272 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____86249 = this$;

if(cljs.core.truth_(and__3546__auto____86249))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____86249;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____86250 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86250))
{return or__3548__auto____86250;
} else
{var or__3548__auto____86251 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____86251))
{return or__3548__auto____86251;
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
return _invoke__86252.call(this,this$);
case  2 :
return _invoke__86253.call(this,this$,a);
case  3 :
return _invoke__86254.call(this,this$,a,b);
case  4 :
return _invoke__86255.call(this,this$,a,b,c);
case  5 :
return _invoke__86256.call(this,this$,a,b,c,d);
case  6 :
return _invoke__86257.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__86258.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__86259.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__86260.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__86261.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__86262.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__86263.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__86264.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__86265.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__86266.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__86267.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__86268.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__86269.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__86270.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__86271.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__86272.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____86274 = coll;

if(cljs.core.truth_(and__3546__auto____86274))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____86274;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____86275 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86275))
{return or__3548__auto____86275;
} else
{var or__3548__auto____86276 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____86276))
{return or__3548__auto____86276;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____86277 = coll;

if(cljs.core.truth_(and__3546__auto____86277))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____86277;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____86278 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86278))
{return or__3548__auto____86278;
} else
{var or__3548__auto____86279 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____86279))
{return or__3548__auto____86279;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____86280 = coll;

if(cljs.core.truth_(and__3546__auto____86280))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____86280;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____86281 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86281))
{return or__3548__auto____86281;
} else
{var or__3548__auto____86282 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____86282))
{return or__3548__auto____86282;
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
var _nth__86289 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____86283 = coll;

if(cljs.core.truth_(and__3546__auto____86283))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____86283;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____86284 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86284))
{return or__3548__auto____86284;
} else
{var or__3548__auto____86285 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____86285))
{return or__3548__auto____86285;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__86290 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____86286 = coll;

if(cljs.core.truth_(and__3546__auto____86286))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____86286;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____86287 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86287))
{return or__3548__auto____86287;
} else
{var or__3548__auto____86288 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____86288))
{return or__3548__auto____86288;
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
return _nth__86289.call(this,coll,n);
case  3 :
return _nth__86290.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____86292 = coll;

if(cljs.core.truth_(and__3546__auto____86292))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____86292;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____86293 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86293))
{return or__3548__auto____86293;
} else
{var or__3548__auto____86294 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____86294))
{return or__3548__auto____86294;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____86295 = coll;

if(cljs.core.truth_(and__3546__auto____86295))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____86295;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____86296 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86296))
{return or__3548__auto____86296;
} else
{var or__3548__auto____86297 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____86297))
{return or__3548__auto____86297;
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
var _lookup__86304 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____86298 = o;

if(cljs.core.truth_(and__3546__auto____86298))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____86298;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____86299 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86299))
{return or__3548__auto____86299;
} else
{var or__3548__auto____86300 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____86300))
{return or__3548__auto____86300;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__86305 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____86301 = o;

if(cljs.core.truth_(and__3546__auto____86301))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____86301;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____86302 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86302))
{return or__3548__auto____86302;
} else
{var or__3548__auto____86303 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____86303))
{return or__3548__auto____86303;
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
return _lookup__86304.call(this,o,k);
case  3 :
return _lookup__86305.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____86307 = coll;

if(cljs.core.truth_(and__3546__auto____86307))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____86307;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____86308 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86308))
{return or__3548__auto____86308;
} else
{var or__3548__auto____86309 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____86309))
{return or__3548__auto____86309;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____86310 = coll;

if(cljs.core.truth_(and__3546__auto____86310))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____86310;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____86311 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86311))
{return or__3548__auto____86311;
} else
{var or__3548__auto____86312 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____86312))
{return or__3548__auto____86312;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____86313 = coll;

if(cljs.core.truth_(and__3546__auto____86313))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____86313;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____86314 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86314))
{return or__3548__auto____86314;
} else
{var or__3548__auto____86315 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____86315))
{return or__3548__auto____86315;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____86316 = coll;

if(cljs.core.truth_(and__3546__auto____86316))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____86316;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____86317 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86317))
{return or__3548__auto____86317;
} else
{var or__3548__auto____86318 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____86318))
{return or__3548__auto____86318;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____86319 = coll;

if(cljs.core.truth_(and__3546__auto____86319))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____86319;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____86320 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86320))
{return or__3548__auto____86320;
} else
{var or__3548__auto____86321 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____86321))
{return or__3548__auto____86321;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____86322 = coll;

if(cljs.core.truth_(and__3546__auto____86322))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____86322;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____86323 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86323))
{return or__3548__auto____86323;
} else
{var or__3548__auto____86324 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____86324))
{return or__3548__auto____86324;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____86325 = coll;

if(cljs.core.truth_(and__3546__auto____86325))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____86325;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____86326 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86326))
{return or__3548__auto____86326;
} else
{var or__3548__auto____86327 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____86327))
{return or__3548__auto____86327;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____86328 = o;

if(cljs.core.truth_(and__3546__auto____86328))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____86328;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____86329 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86329))
{return or__3548__auto____86329;
} else
{var or__3548__auto____86330 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____86330))
{return or__3548__auto____86330;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____86331 = o;

if(cljs.core.truth_(and__3546__auto____86331))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____86331;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____86332 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86332))
{return or__3548__auto____86332;
} else
{var or__3548__auto____86333 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____86333))
{return or__3548__auto____86333;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____86334 = o;

if(cljs.core.truth_(and__3546__auto____86334))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____86334;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____86335 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86335))
{return or__3548__auto____86335;
} else
{var or__3548__auto____86336 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____86336))
{return or__3548__auto____86336;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____86337 = o;

if(cljs.core.truth_(and__3546__auto____86337))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____86337;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____86338 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86338))
{return or__3548__auto____86338;
} else
{var or__3548__auto____86339 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____86339))
{return or__3548__auto____86339;
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
var _reduce__86346 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____86340 = coll;

if(cljs.core.truth_(and__3546__auto____86340))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____86340;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____86341 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86341))
{return or__3548__auto____86341;
} else
{var or__3548__auto____86342 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____86342))
{return or__3548__auto____86342;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__86347 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____86343 = coll;

if(cljs.core.truth_(and__3546__auto____86343))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____86343;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____86344 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____86344))
{return or__3548__auto____86344;
} else
{var or__3548__auto____86345 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____86345))
{return or__3548__auto____86345;
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
return _reduce__86346.call(this,coll,f);
case  3 :
return _reduce__86347.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____86349 = o;

if(cljs.core.truth_(and__3546__auto____86349))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____86349;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____86350 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86350))
{return or__3548__auto____86350;
} else
{var or__3548__auto____86351 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____86351))
{return or__3548__auto____86351;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____86352 = o;

if(cljs.core.truth_(and__3546__auto____86352))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____86352;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____86353 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86353))
{return or__3548__auto____86353;
} else
{var or__3548__auto____86354 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____86354))
{return or__3548__auto____86354;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____86355 = o;

if(cljs.core.truth_(and__3546__auto____86355))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____86355;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____86356 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86356))
{return or__3548__auto____86356;
} else
{var or__3548__auto____86357 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____86357))
{return or__3548__auto____86357;
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
if(cljs.core.truth_((function (){var and__3546__auto____86358 = o;

if(cljs.core.truth_(and__3546__auto____86358))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____86358;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____86359 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____86359))
{return or__3548__auto____86359;
} else
{var or__3548__auto____86360 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____86360))
{return or__3548__auto____86360;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____86361 = d;

if(cljs.core.truth_(and__3546__auto____86361))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____86361;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____86362 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____86362))
{return or__3548__auto____86362;
} else
{var or__3548__auto____86363 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____86363))
{return or__3548__auto____86363;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____86364 = this$;

if(cljs.core.truth_(and__3546__auto____86364))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____86364;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____86365 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86365))
{return or__3548__auto____86365;
} else
{var or__3548__auto____86366 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____86366))
{return or__3548__auto____86366;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____86367 = this$;

if(cljs.core.truth_(and__3546__auto____86367))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____86367;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____86368 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86368))
{return or__3548__auto____86368;
} else
{var or__3548__auto____86369 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____86369))
{return or__3548__auto____86369;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____86370 = this$;

if(cljs.core.truth_(and__3546__auto____86370))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____86370;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____86371 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____86371))
{return or__3548__auto____86371;
} else
{var or__3548__auto____86372 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____86372))
{return or__3548__auto____86372;
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
var G__86373 = null;
var G__86373__86374 = (function (o,k){
return null;
});
var G__86373__86375 = (function (o,k,not_found){
return not_found;
});
G__86373 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__86373__86374.call(this,o,k);
case  3 :
return G__86373__86375.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86373;
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
var G__86377 = null;
var G__86377__86378 = (function (_,f){
return f.call(null);
});
var G__86377__86379 = (function (_,f,start){
return start;
});
G__86377 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__86377__86378.call(this,_,f);
case  3 :
return G__86377__86379.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86377;
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
var G__86381 = null;
var G__86381__86382 = (function (_,n){
return null;
});
var G__86381__86383 = (function (_,n,not_found){
return not_found;
});
G__86381 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__86381__86382.call(this,_,n);
case  3 :
return G__86381__86383.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86381;
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
var ci_reduce__86391 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__86385 = cljs.core._nth.call(null,cicoll,0);
var n__86386 = 1;

while(true){
if(cljs.core.truth_((n__86386 < cljs.core._count.call(null,cicoll))))
{{
var G__86395 = f.call(null,val__86385,cljs.core._nth.call(null,cicoll,n__86386));
var G__86396 = (n__86386 + 1);
val__86385 = G__86395;
n__86386 = G__86396;
continue;
}
} else
{return val__86385;
}
break;
}
}
});
var ci_reduce__86392 = (function (cicoll,f,val){
var val__86387 = val;
var n__86388 = 0;

while(true){
if(cljs.core.truth_((n__86388 < cljs.core._count.call(null,cicoll))))
{{
var G__86397 = f.call(null,val__86387,cljs.core._nth.call(null,cicoll,n__86388));
var G__86398 = (n__86388 + 1);
val__86387 = G__86397;
n__86388 = G__86398;
continue;
}
} else
{return val__86387;
}
break;
}
});
var ci_reduce__86393 = (function (cicoll,f,val,idx){
var val__86389 = val;
var n__86390 = idx;

while(true){
if(cljs.core.truth_((n__86390 < cljs.core._count.call(null,cicoll))))
{{
var G__86399 = f.call(null,val__86389,cljs.core._nth.call(null,cicoll,n__86390));
var G__86400 = (n__86390 + 1);
val__86389 = G__86399;
n__86390 = G__86400;
continue;
}
} else
{return val__86389;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__86391.call(this,cicoll,f);
case  3 :
return ci_reduce__86392.call(this,cicoll,f,val);
case  4 :
return ci_reduce__86393.call(this,cicoll,f,val,idx);
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
var this__86401 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__86414 = null;
var G__86414__86415 = (function (_,f){
var this__86402 = this;
return cljs.core.ci_reduce.call(null,this__86402.a,f,(this__86402.a[this__86402.i]),(this__86402.i + 1));
});
var G__86414__86416 = (function (_,f,start){
var this__86403 = this;
return cljs.core.ci_reduce.call(null,this__86403.a,f,start,this__86403.i);
});
G__86414 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__86414__86415.call(this,_,f);
case  3 :
return G__86414__86416.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86414;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__86404 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__86405 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__86418 = null;
var G__86418__86419 = (function (coll,n){
var this__86406 = this;
var i__86407 = (n + this__86406.i);

if(cljs.core.truth_((i__86407 < this__86406.a.length)))
{return (this__86406.a[i__86407]);
} else
{return null;
}
});
var G__86418__86420 = (function (coll,n,not_found){
var this__86408 = this;
var i__86409 = (n + this__86408.i);

if(cljs.core.truth_((i__86409 < this__86408.a.length)))
{return (this__86408.a[i__86409]);
} else
{return not_found;
}
});
G__86418 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__86418__86419.call(this,coll,n);
case  3 :
return G__86418__86420.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86418;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__86410 = this;
return (this__86410.a.length - this__86410.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__86411 = this;
return (this__86411.a[this__86411.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__86412 = this;
if(cljs.core.truth_(((this__86412.i + 1) < this__86412.a.length)))
{return (new cljs.core.IndexedSeq(this__86412.a,(this__86412.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__86413 = this;
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
var G__86422 = null;
var G__86422__86423 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__86422__86424 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__86422 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__86422__86423.call(this,array,f);
case  3 :
return G__86422__86424.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86422;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__86426 = null;
var G__86426__86427 = (function (array,k){
return (array[k]);
});
var G__86426__86428 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__86426 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__86426__86427.call(this,array,k);
case  3 :
return G__86426__86428.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86426;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__86430 = null;
var G__86430__86431 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__86430__86432 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__86430 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__86430__86431.call(this,array,n);
case  3 :
return G__86430__86432.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86430;
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
var temp__3698__auto____86434 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____86434))
{var s__86435 = temp__3698__auto____86434;

return cljs.core._first.call(null,s__86435);
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
var G__86436 = cljs.core.next.call(null,s);
s = G__86436;
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
var s__86437 = cljs.core.seq.call(null,x);
var n__86438 = 0;

while(true){
if(cljs.core.truth_(s__86437))
{{
var G__86439 = cljs.core.next.call(null,s__86437);
var G__86440 = (n__86438 + 1);
s__86437 = G__86439;
n__86438 = G__86440;
continue;
}
} else
{return n__86438;
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
var conj__86441 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__86442 = (function() { 
var G__86444__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__86445 = conj.call(null,coll,x);
var G__86446 = cljs.core.first.call(null,xs);
var G__86447 = cljs.core.next.call(null,xs);
coll = G__86445;
x = G__86446;
xs = G__86447;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__86444 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86444__delegate.call(this, coll, x, xs);
};
G__86444.cljs$lang$maxFixedArity = 2;
G__86444.cljs$lang$applyTo = (function (arglist__86448){
var coll = cljs.core.first(arglist__86448);
var x = cljs.core.first(cljs.core.next(arglist__86448));
var xs = cljs.core.rest(cljs.core.next(arglist__86448));
return G__86444__delegate.call(this, coll, x, xs);
});
return G__86444;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__86441.call(this,coll,x);
default:
return conj__86442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__86442.cljs$lang$applyTo;
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
var nth__86449 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__86450 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__86449.call(this,coll,n);
case  3 :
return nth__86450.call(this,coll,n,not_found);
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
var get__86452 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__86453 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__86452.call(this,o,k);
case  3 :
return get__86453.call(this,o,k,not_found);
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
var assoc__86456 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__86457 = (function() { 
var G__86459__delegate = function (coll,k,v,kvs){
while(true){
var ret__86455 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__86460 = ret__86455;
var G__86461 = cljs.core.first.call(null,kvs);
var G__86462 = cljs.core.second.call(null,kvs);
var G__86463 = cljs.core.nnext.call(null,kvs);
coll = G__86460;
k = G__86461;
v = G__86462;
kvs = G__86463;
continue;
}
} else
{return ret__86455;
}
break;
}
};
var G__86459 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86459__delegate.call(this, coll, k, v, kvs);
};
G__86459.cljs$lang$maxFixedArity = 3;
G__86459.cljs$lang$applyTo = (function (arglist__86464){
var coll = cljs.core.first(arglist__86464);
var k = cljs.core.first(cljs.core.next(arglist__86464));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86464)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86464)));
return G__86459__delegate.call(this, coll, k, v, kvs);
});
return G__86459;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__86456.call(this,coll,k,v);
default:
return assoc__86457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__86457.cljs$lang$applyTo;
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
var dissoc__86466 = (function (coll){
return coll;
});
var dissoc__86467 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__86468 = (function() { 
var G__86470__delegate = function (coll,k,ks){
while(true){
var ret__86465 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__86471 = ret__86465;
var G__86472 = cljs.core.first.call(null,ks);
var G__86473 = cljs.core.next.call(null,ks);
coll = G__86471;
k = G__86472;
ks = G__86473;
continue;
}
} else
{return ret__86465;
}
break;
}
};
var G__86470 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86470__delegate.call(this, coll, k, ks);
};
G__86470.cljs$lang$maxFixedArity = 2;
G__86470.cljs$lang$applyTo = (function (arglist__86474){
var coll = cljs.core.first(arglist__86474);
var k = cljs.core.first(cljs.core.next(arglist__86474));
var ks = cljs.core.rest(cljs.core.next(arglist__86474));
return G__86470__delegate.call(this, coll, k, ks);
});
return G__86470;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__86466.call(this,coll);
case  2 :
return dissoc__86467.call(this,coll,k);
default:
return dissoc__86468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__86468.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____86475 = o;

if(cljs.core.truth_((function (){var and__3546__auto____86476 = x__450__auto____86475;

if(cljs.core.truth_(and__3546__auto____86476))
{var and__3546__auto____86477 = x__450__auto____86475.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____86477))
{return cljs.core.not.call(null,x__450__auto____86475.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____86477;
}
} else
{return and__3546__auto____86476;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____86475);
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
var disj__86479 = (function (coll){
return coll;
});
var disj__86480 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__86481 = (function() { 
var G__86483__delegate = function (coll,k,ks){
while(true){
var ret__86478 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__86484 = ret__86478;
var G__86485 = cljs.core.first.call(null,ks);
var G__86486 = cljs.core.next.call(null,ks);
coll = G__86484;
k = G__86485;
ks = G__86486;
continue;
}
} else
{return ret__86478;
}
break;
}
};
var G__86483 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86483__delegate.call(this, coll, k, ks);
};
G__86483.cljs$lang$maxFixedArity = 2;
G__86483.cljs$lang$applyTo = (function (arglist__86487){
var coll = cljs.core.first(arglist__86487);
var k = cljs.core.first(cljs.core.next(arglist__86487));
var ks = cljs.core.rest(cljs.core.next(arglist__86487));
return G__86483__delegate.call(this, coll, k, ks);
});
return G__86483;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__86479.call(this,coll);
case  2 :
return disj__86480.call(this,coll,k);
default:
return disj__86481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__86481.cljs$lang$applyTo;
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
{var x__450__auto____86488 = x;

if(cljs.core.truth_((function (){var and__3546__auto____86489 = x__450__auto____86488;

if(cljs.core.truth_(and__3546__auto____86489))
{var and__3546__auto____86490 = x__450__auto____86488.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____86490))
{return cljs.core.not.call(null,x__450__auto____86488.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____86490;
}
} else
{return and__3546__auto____86489;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____86488);
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
{var x__450__auto____86491 = x;

if(cljs.core.truth_((function (){var and__3546__auto____86492 = x__450__auto____86491;

if(cljs.core.truth_(and__3546__auto____86492))
{var and__3546__auto____86493 = x__450__auto____86491.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____86493))
{return cljs.core.not.call(null,x__450__auto____86491.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____86493;
}
} else
{return and__3546__auto____86492;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____86491);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____86494 = x;

if(cljs.core.truth_((function (){var and__3546__auto____86495 = x__450__auto____86494;

if(cljs.core.truth_(and__3546__auto____86495))
{var and__3546__auto____86496 = x__450__auto____86494.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____86496))
{return cljs.core.not.call(null,x__450__auto____86494.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____86496;
}
} else
{return and__3546__auto____86495;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____86494);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____86497 = x;

if(cljs.core.truth_((function (){var and__3546__auto____86498 = x__450__auto____86497;

if(cljs.core.truth_(and__3546__auto____86498))
{var and__3546__auto____86499 = x__450__auto____86497.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____86499))
{return cljs.core.not.call(null,x__450__auto____86497.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____86499;
}
} else
{return and__3546__auto____86498;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____86497);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____86500 = x;

if(cljs.core.truth_((function (){var and__3546__auto____86501 = x__450__auto____86500;

if(cljs.core.truth_(and__3546__auto____86501))
{var and__3546__auto____86502 = x__450__auto____86500.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____86502))
{return cljs.core.not.call(null,x__450__auto____86500.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____86502;
}
} else
{return and__3546__auto____86501;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____86500);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____86503 = x;

if(cljs.core.truth_((function (){var and__3546__auto____86504 = x__450__auto____86503;

if(cljs.core.truth_(and__3546__auto____86504))
{var and__3546__auto____86505 = x__450__auto____86503.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____86505))
{return cljs.core.not.call(null,x__450__auto____86503.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____86505;
}
} else
{return and__3546__auto____86504;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____86503);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____86506 = x;

if(cljs.core.truth_((function (){var and__3546__auto____86507 = x__450__auto____86506;

if(cljs.core.truth_(and__3546__auto____86507))
{var and__3546__auto____86508 = x__450__auto____86506.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____86508))
{return cljs.core.not.call(null,x__450__auto____86506.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____86508;
}
} else
{return and__3546__auto____86507;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____86506);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__86509 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__86509.push(key);
}));
return keys__86509;
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
{var x__450__auto____86510 = s;

if(cljs.core.truth_((function (){var and__3546__auto____86511 = x__450__auto____86510;

if(cljs.core.truth_(and__3546__auto____86511))
{var and__3546__auto____86512 = x__450__auto____86510.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____86512))
{return cljs.core.not.call(null,x__450__auto____86510.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____86512;
}
} else
{return and__3546__auto____86511;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____86510);
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
var and__3546__auto____86513 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____86513))
{return cljs.core.not.call(null,(function (){var or__3548__auto____86514 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____86514))
{return or__3548__auto____86514;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____86513;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____86515 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____86515))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____86515;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____86516 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____86516))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____86516;
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
var and__3546__auto____86517 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____86517))
{return (n == n.toFixed());
} else
{return and__3546__auto____86517;
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
if(cljs.core.truth_((function (){var and__3546__auto____86518 = coll;

if(cljs.core.truth_(and__3546__auto____86518))
{var and__3546__auto____86519 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____86519))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____86519;
}
} else
{return and__3546__auto____86518;
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
var distinct_QMARK___86524 = (function (x){
return true;
});
var distinct_QMARK___86525 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___86526 = (function() { 
var G__86528__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__86520 = cljs.core.set([y,x]);
var xs__86521 = more;

while(true){
var x__86522 = cljs.core.first.call(null,xs__86521);
var etc__86523 = cljs.core.next.call(null,xs__86521);

if(cljs.core.truth_(xs__86521))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__86520,x__86522)))
{return false;
} else
{{
var G__86529 = cljs.core.conj.call(null,s__86520,x__86522);
var G__86530 = etc__86523;
s__86520 = G__86529;
xs__86521 = G__86530;
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
var G__86528 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86528__delegate.call(this, x, y, more);
};
G__86528.cljs$lang$maxFixedArity = 2;
G__86528.cljs$lang$applyTo = (function (arglist__86531){
var x = cljs.core.first(arglist__86531);
var y = cljs.core.first(cljs.core.next(arglist__86531));
var more = cljs.core.rest(cljs.core.next(arglist__86531));
return G__86528__delegate.call(this, x, y, more);
});
return G__86528;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___86524.call(this,x);
case  2 :
return distinct_QMARK___86525.call(this,x,y);
default:
return distinct_QMARK___86526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___86526.cljs$lang$applyTo;
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
var r__86532 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__86532)))
{return r__86532;
} else
{if(cljs.core.truth_(r__86532))
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
var sort__86534 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__86535 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__86533 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__86533,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__86533);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__86534.call(this,comp);
case  2 :
return sort__86535.call(this,comp,coll);
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
var sort_by__86537 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__86538 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__86537.call(this,keyfn,comp);
case  3 :
return sort_by__86538.call(this,keyfn,comp,coll);
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
var reduce__86540 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__86541 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__86540.call(this,f,val);
case  3 :
return reduce__86541.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__86547 = (function (f,coll){
var temp__3695__auto____86543 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____86543))
{var s__86544 = temp__3695__auto____86543;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__86544),cljs.core.next.call(null,s__86544));
} else
{return f.call(null);
}
});
var seq_reduce__86548 = (function (f,val,coll){
var val__86545 = val;
var coll__86546 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__86546))
{{
var G__86550 = f.call(null,val__86545,cljs.core.first.call(null,coll__86546));
var G__86551 = cljs.core.next.call(null,coll__86546);
val__86545 = G__86550;
coll__86546 = G__86551;
continue;
}
} else
{return val__86545;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__86547.call(this,f,val);
case  3 :
return seq_reduce__86548.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__86552 = null;
var G__86552__86553 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__86552__86554 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__86552 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__86552__86553.call(this,coll,f);
case  3 :
return G__86552__86554.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86552;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___86556 = (function (){
return 0;
});
var _PLUS___86557 = (function (x){
return x;
});
var _PLUS___86558 = (function (x,y){
return (x + y);
});
var _PLUS___86559 = (function() { 
var G__86561__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__86561 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86561__delegate.call(this, x, y, more);
};
G__86561.cljs$lang$maxFixedArity = 2;
G__86561.cljs$lang$applyTo = (function (arglist__86562){
var x = cljs.core.first(arglist__86562);
var y = cljs.core.first(cljs.core.next(arglist__86562));
var more = cljs.core.rest(cljs.core.next(arglist__86562));
return G__86561__delegate.call(this, x, y, more);
});
return G__86561;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___86556.call(this);
case  1 :
return _PLUS___86557.call(this,x);
case  2 :
return _PLUS___86558.call(this,x,y);
default:
return _PLUS___86559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___86559.cljs$lang$applyTo;
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
var ___86563 = (function (x){
return (- x);
});
var ___86564 = (function (x,y){
return (x - y);
});
var ___86565 = (function() { 
var G__86567__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__86567 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86567__delegate.call(this, x, y, more);
};
G__86567.cljs$lang$maxFixedArity = 2;
G__86567.cljs$lang$applyTo = (function (arglist__86568){
var x = cljs.core.first(arglist__86568);
var y = cljs.core.first(cljs.core.next(arglist__86568));
var more = cljs.core.rest(cljs.core.next(arglist__86568));
return G__86567__delegate.call(this, x, y, more);
});
return G__86567;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___86563.call(this,x);
case  2 :
return ___86564.call(this,x,y);
default:
return ___86565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___86565.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___86569 = (function (){
return 1;
});
var _STAR___86570 = (function (x){
return x;
});
var _STAR___86571 = (function (x,y){
return (x * y);
});
var _STAR___86572 = (function() { 
var G__86574__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__86574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86574__delegate.call(this, x, y, more);
};
G__86574.cljs$lang$maxFixedArity = 2;
G__86574.cljs$lang$applyTo = (function (arglist__86575){
var x = cljs.core.first(arglist__86575);
var y = cljs.core.first(cljs.core.next(arglist__86575));
var more = cljs.core.rest(cljs.core.next(arglist__86575));
return G__86574__delegate.call(this, x, y, more);
});
return G__86574;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___86569.call(this);
case  1 :
return _STAR___86570.call(this,x);
case  2 :
return _STAR___86571.call(this,x,y);
default:
return _STAR___86572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___86572.cljs$lang$applyTo;
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
var _SLASH___86576 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___86577 = (function (x,y){
return (x / y);
});
var _SLASH___86578 = (function() { 
var G__86580__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__86580 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86580__delegate.call(this, x, y, more);
};
G__86580.cljs$lang$maxFixedArity = 2;
G__86580.cljs$lang$applyTo = (function (arglist__86581){
var x = cljs.core.first(arglist__86581);
var y = cljs.core.first(cljs.core.next(arglist__86581));
var more = cljs.core.rest(cljs.core.next(arglist__86581));
return G__86580__delegate.call(this, x, y, more);
});
return G__86580;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___86576.call(this,x);
case  2 :
return _SLASH___86577.call(this,x,y);
default:
return _SLASH___86578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___86578.cljs$lang$applyTo;
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
var _LT___86582 = (function (x){
return true;
});
var _LT___86583 = (function (x,y){
return (x < y);
});
var _LT___86584 = (function() { 
var G__86586__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__86587 = y;
var G__86588 = cljs.core.first.call(null,more);
var G__86589 = cljs.core.next.call(null,more);
x = G__86587;
y = G__86588;
more = G__86589;
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
var G__86586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86586__delegate.call(this, x, y, more);
};
G__86586.cljs$lang$maxFixedArity = 2;
G__86586.cljs$lang$applyTo = (function (arglist__86590){
var x = cljs.core.first(arglist__86590);
var y = cljs.core.first(cljs.core.next(arglist__86590));
var more = cljs.core.rest(cljs.core.next(arglist__86590));
return G__86586__delegate.call(this, x, y, more);
});
return G__86586;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___86582.call(this,x);
case  2 :
return _LT___86583.call(this,x,y);
default:
return _LT___86584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___86584.cljs$lang$applyTo;
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
var _LT__EQ___86591 = (function (x){
return true;
});
var _LT__EQ___86592 = (function (x,y){
return (x <= y);
});
var _LT__EQ___86593 = (function() { 
var G__86595__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__86596 = y;
var G__86597 = cljs.core.first.call(null,more);
var G__86598 = cljs.core.next.call(null,more);
x = G__86596;
y = G__86597;
more = G__86598;
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
var G__86595 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86595__delegate.call(this, x, y, more);
};
G__86595.cljs$lang$maxFixedArity = 2;
G__86595.cljs$lang$applyTo = (function (arglist__86599){
var x = cljs.core.first(arglist__86599);
var y = cljs.core.first(cljs.core.next(arglist__86599));
var more = cljs.core.rest(cljs.core.next(arglist__86599));
return G__86595__delegate.call(this, x, y, more);
});
return G__86595;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___86591.call(this,x);
case  2 :
return _LT__EQ___86592.call(this,x,y);
default:
return _LT__EQ___86593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___86593.cljs$lang$applyTo;
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
var _GT___86600 = (function (x){
return true;
});
var _GT___86601 = (function (x,y){
return (x > y);
});
var _GT___86602 = (function() { 
var G__86604__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__86605 = y;
var G__86606 = cljs.core.first.call(null,more);
var G__86607 = cljs.core.next.call(null,more);
x = G__86605;
y = G__86606;
more = G__86607;
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
var G__86604 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86604__delegate.call(this, x, y, more);
};
G__86604.cljs$lang$maxFixedArity = 2;
G__86604.cljs$lang$applyTo = (function (arglist__86608){
var x = cljs.core.first(arglist__86608);
var y = cljs.core.first(cljs.core.next(arglist__86608));
var more = cljs.core.rest(cljs.core.next(arglist__86608));
return G__86604__delegate.call(this, x, y, more);
});
return G__86604;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___86600.call(this,x);
case  2 :
return _GT___86601.call(this,x,y);
default:
return _GT___86602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___86602.cljs$lang$applyTo;
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
var _GT__EQ___86609 = (function (x){
return true;
});
var _GT__EQ___86610 = (function (x,y){
return (x >= y);
});
var _GT__EQ___86611 = (function() { 
var G__86613__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__86614 = y;
var G__86615 = cljs.core.first.call(null,more);
var G__86616 = cljs.core.next.call(null,more);
x = G__86614;
y = G__86615;
more = G__86616;
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
var G__86613 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86613__delegate.call(this, x, y, more);
};
G__86613.cljs$lang$maxFixedArity = 2;
G__86613.cljs$lang$applyTo = (function (arglist__86617){
var x = cljs.core.first(arglist__86617);
var y = cljs.core.first(cljs.core.next(arglist__86617));
var more = cljs.core.rest(cljs.core.next(arglist__86617));
return G__86613__delegate.call(this, x, y, more);
});
return G__86613;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___86609.call(this,x);
case  2 :
return _GT__EQ___86610.call(this,x,y);
default:
return _GT__EQ___86611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___86611.cljs$lang$applyTo;
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
var max__86618 = (function (x){
return x;
});
var max__86619 = (function (x,y){
return ((x > y) ? x : y);
});
var max__86620 = (function() { 
var G__86622__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__86622 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86622__delegate.call(this, x, y, more);
};
G__86622.cljs$lang$maxFixedArity = 2;
G__86622.cljs$lang$applyTo = (function (arglist__86623){
var x = cljs.core.first(arglist__86623);
var y = cljs.core.first(cljs.core.next(arglist__86623));
var more = cljs.core.rest(cljs.core.next(arglist__86623));
return G__86622__delegate.call(this, x, y, more);
});
return G__86622;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__86618.call(this,x);
case  2 :
return max__86619.call(this,x,y);
default:
return max__86620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__86620.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__86624 = (function (x){
return x;
});
var min__86625 = (function (x,y){
return ((x < y) ? x : y);
});
var min__86626 = (function() { 
var G__86628__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__86628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86628__delegate.call(this, x, y, more);
};
G__86628.cljs$lang$maxFixedArity = 2;
G__86628.cljs$lang$applyTo = (function (arglist__86629){
var x = cljs.core.first(arglist__86629);
var y = cljs.core.first(cljs.core.next(arglist__86629));
var more = cljs.core.rest(cljs.core.next(arglist__86629));
return G__86628__delegate.call(this, x, y, more);
});
return G__86628;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__86624.call(this,x);
case  2 :
return min__86625.call(this,x,y);
default:
return min__86626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__86626.cljs$lang$applyTo;
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
var rem__86630 = (n % d);

return cljs.core.fix.call(null,((n - rem__86630) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__86631 = cljs.core.quot.call(null,n,d);

return (n - (d * q__86631));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__86632 = (function (){
return Math.random.call(null);
});
var rand__86633 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__86632.call(this);
case  1 :
return rand__86633.call(this,n);
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
var _EQ__EQ___86635 = (function (x){
return true;
});
var _EQ__EQ___86636 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___86637 = (function() { 
var G__86639__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__86640 = y;
var G__86641 = cljs.core.first.call(null,more);
var G__86642 = cljs.core.next.call(null,more);
x = G__86640;
y = G__86641;
more = G__86642;
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
var G__86639 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86639__delegate.call(this, x, y, more);
};
G__86639.cljs$lang$maxFixedArity = 2;
G__86639.cljs$lang$applyTo = (function (arglist__86643){
var x = cljs.core.first(arglist__86643);
var y = cljs.core.first(cljs.core.next(arglist__86643));
var more = cljs.core.rest(cljs.core.next(arglist__86643));
return G__86639__delegate.call(this, x, y, more);
});
return G__86639;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___86635.call(this,x);
case  2 :
return _EQ__EQ___86636.call(this,x,y);
default:
return _EQ__EQ___86637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___86637.cljs$lang$applyTo;
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
var n__86644 = n;
var xs__86645 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____86646 = xs__86645;

if(cljs.core.truth_(and__3546__auto____86646))
{return (n__86644 > 0);
} else
{return and__3546__auto____86646;
}
})()))
{{
var G__86647 = (n__86644 - 1);
var G__86648 = cljs.core.next.call(null,xs__86645);
n__86644 = G__86647;
xs__86645 = G__86648;
continue;
}
} else
{return xs__86645;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__86653 = null;
var G__86653__86654 = (function (coll,n){
var temp__3695__auto____86649 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____86649))
{var xs__86650 = temp__3695__auto____86649;

return cljs.core.first.call(null,xs__86650);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__86653__86655 = (function (coll,n,not_found){
var temp__3695__auto____86651 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____86651))
{var xs__86652 = temp__3695__auto____86651;

return cljs.core.first.call(null,xs__86652);
} else
{return not_found;
}
});
G__86653 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__86653__86654.call(this,coll,n);
case  3 :
return G__86653__86655.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86653;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___86657 = (function (){
return "";
});
var str_STAR___86658 = (function (x){
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
var str_STAR___86659 = (function() { 
var G__86661__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__86662 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__86663 = cljs.core.next.call(null,more);
sb = G__86662;
more = G__86663;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__86661 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__86661__delegate.call(this, x, ys);
};
G__86661.cljs$lang$maxFixedArity = 1;
G__86661.cljs$lang$applyTo = (function (arglist__86664){
var x = cljs.core.first(arglist__86664);
var ys = cljs.core.rest(arglist__86664);
return G__86661__delegate.call(this, x, ys);
});
return G__86661;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___86657.call(this);
case  1 :
return str_STAR___86658.call(this,x);
default:
return str_STAR___86659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___86659.cljs$lang$applyTo;
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
var str__86665 = (function (){
return "";
});
var str__86666 = (function (x){
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
var str__86667 = (function() { 
var G__86669__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__86669 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__86669__delegate.call(this, x, ys);
};
G__86669.cljs$lang$maxFixedArity = 1;
G__86669.cljs$lang$applyTo = (function (arglist__86670){
var x = cljs.core.first(arglist__86670);
var ys = cljs.core.rest(arglist__86670);
return G__86669__delegate.call(this, x, ys);
});
return G__86669;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__86665.call(this);
case  1 :
return str__86666.call(this,x);
default:
return str__86667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__86667.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__86671 = (function (s,start){
return s.substring(start);
});
var subs__86672 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__86671.call(this,s,start);
case  3 :
return subs__86672.call(this,s,start,end);
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
var symbol__86674 = (function (name){
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
var symbol__86675 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__86674.call(this,ns);
case  2 :
return symbol__86675.call(this,ns,name);
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
var keyword__86677 = (function (name){
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
var keyword__86678 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__86677.call(this,ns);
case  2 :
return keyword__86678.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__86680 = cljs.core.seq.call(null,x);
var ys__86681 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__86680 === null)))
{return (ys__86681 === null);
} else
{if(cljs.core.truth_((ys__86681 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__86680),cljs.core.first.call(null,ys__86681))))
{{
var G__86682 = cljs.core.next.call(null,xs__86680);
var G__86683 = cljs.core.next.call(null,ys__86681);
xs__86680 = G__86682;
ys__86681 = G__86683;
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
return cljs.core.reduce.call(null,(function (p1__86684_SHARP_,p2__86685_SHARP_){
return cljs.core.hash_combine.call(null,p1__86684_SHARP_,cljs.core.hash.call(null,p2__86685_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__86686__86687 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__86686__86687))
{var G__86689__86691 = cljs.core.first.call(null,G__86686__86687);
var vec__86690__86692 = G__86689__86691;
var key_name__86693 = cljs.core.nth.call(null,vec__86690__86692,0,null);
var f__86694 = cljs.core.nth.call(null,vec__86690__86692,1,null);
var G__86686__86695 = G__86686__86687;

var G__86689__86696 = G__86689__86691;
var G__86686__86697 = G__86686__86695;

while(true){
var vec__86698__86699 = G__86689__86696;
var key_name__86700 = cljs.core.nth.call(null,vec__86698__86699,0,null);
var f__86701 = cljs.core.nth.call(null,vec__86698__86699,1,null);
var G__86686__86702 = G__86686__86697;

var str_name__86703 = cljs.core.name.call(null,key_name__86700);

obj[str_name__86703] = f__86701;
var temp__3698__auto____86704 = cljs.core.next.call(null,G__86686__86702);

if(cljs.core.truth_(temp__3698__auto____86704))
{var G__86686__86705 = temp__3698__auto____86704;

{
var G__86706 = cljs.core.first.call(null,G__86686__86705);
var G__86707 = G__86686__86705;
G__86689__86696 = G__86706;
G__86686__86697 = G__86707;
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
var this__86708 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__86709 = this;
return (new cljs.core.List(this__86709.meta,o,coll,(this__86709.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__86710 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__86711 = this;
return this__86711.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__86712 = this;
return this__86712.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__86713 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__86714 = this;
return this__86714.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__86715 = this;
return this__86715.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__86716 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__86717 = this;
return (new cljs.core.List(meta,this__86717.first,this__86717.rest,this__86717.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__86718 = this;
return this__86718.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__86719 = this;
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
var this__86720 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__86721 = this;
return (new cljs.core.List(this__86721.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__86722 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__86723 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__86724 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__86725 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__86726 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__86727 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__86728 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__86729 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__86730 = this;
return this__86730.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__86731 = this;
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
list.cljs$lang$applyTo = (function (arglist__86732){
var items = cljs.core.seq( arglist__86732 );;
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
var this__86733 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__86734 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__86735 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__86736 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__86736.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__86737 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__86738 = this;
return this__86738.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__86739 = this;
if(cljs.core.truth_((this__86739.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__86739.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__86740 = this;
return this__86740.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__86741 = this;
return (new cljs.core.Cons(meta,this__86741.first,this__86741.rest));
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
var G__86742 = null;
var G__86742__86743 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__86742__86744 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__86742 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__86742__86743.call(this,string,f);
case  3 :
return G__86742__86744.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86742;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__86746 = null;
var G__86746__86747 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__86746__86748 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__86746 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__86746__86747.call(this,string,k);
case  3 :
return G__86746__86748.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86746;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__86750 = null;
var G__86750__86751 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__86750__86752 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__86750 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__86750__86751.call(this,string,n);
case  3 :
return G__86750__86752.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86750;
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
var G__86760 = null;
var G__86760__86761 = (function (tsym86754,coll){
var tsym86754__86756 = this;

var this$__86757 = tsym86754__86756;

return cljs.core.get.call(null,coll,this$__86757.toString());
});
var G__86760__86762 = (function (tsym86755,coll,not_found){
var tsym86755__86758 = this;

var this$__86759 = tsym86755__86758;

return cljs.core.get.call(null,coll,this$__86759.toString(),not_found);
});
G__86760 = function(tsym86755,coll,not_found){
switch(arguments.length){
case  2 :
return G__86760__86761.call(this,tsym86755,coll);
case  3 :
return G__86760__86762.call(this,tsym86755,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__86760;
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
var x__86764 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__86764;
} else
{lazy_seq.x = x__86764.call(null);
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
var this__86765 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__86766 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__86767 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__86768 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__86768.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__86769 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__86770 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__86771 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__86772 = this;
return this__86772.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__86773 = this;
return (new cljs.core.LazySeq(meta,this__86773.realized,this__86773.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__86774 = cljs.core.array.call(null);

var s__86775 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__86775)))
{ary__86774.push(cljs.core.first.call(null,s__86775));
{
var G__86776 = cljs.core.next.call(null,s__86775);
s__86775 = G__86776;
continue;
}
} else
{return ary__86774;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__86777 = s;
var i__86778 = n;
var sum__86779 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____86780 = (i__86778 > 0);

if(cljs.core.truth_(and__3546__auto____86780))
{return cljs.core.seq.call(null,s__86777);
} else
{return and__3546__auto____86780;
}
})()))
{{
var G__86781 = cljs.core.next.call(null,s__86777);
var G__86782 = (i__86778 - 1);
var G__86783 = (sum__86779 + 1);
s__86777 = G__86781;
i__86778 = G__86782;
sum__86779 = G__86783;
continue;
}
} else
{return sum__86779;
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
var concat__86787 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__86788 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__86789 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__86784 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__86784))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__86784),concat.call(null,cljs.core.rest.call(null,s__86784),y));
} else
{return y;
}
})));
});
var concat__86790 = (function() { 
var G__86792__delegate = function (x,y,zs){
var cat__86786 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__86785 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__86785))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__86785),cat.call(null,cljs.core.rest.call(null,xys__86785),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__86786.call(null,concat.call(null,x,y),zs);
};
var G__86792 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86792__delegate.call(this, x, y, zs);
};
G__86792.cljs$lang$maxFixedArity = 2;
G__86792.cljs$lang$applyTo = (function (arglist__86793){
var x = cljs.core.first(arglist__86793);
var y = cljs.core.first(cljs.core.next(arglist__86793));
var zs = cljs.core.rest(cljs.core.next(arglist__86793));
return G__86792__delegate.call(this, x, y, zs);
});
return G__86792;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__86787.call(this);
case  1 :
return concat__86788.call(this,x);
case  2 :
return concat__86789.call(this,x,y);
default:
return concat__86790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__86790.cljs$lang$applyTo;
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
var list_STAR___86794 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___86795 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___86796 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___86797 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___86798 = (function() { 
var G__86800__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__86800 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__86800__delegate.call(this, a, b, c, d, more);
};
G__86800.cljs$lang$maxFixedArity = 4;
G__86800.cljs$lang$applyTo = (function (arglist__86801){
var a = cljs.core.first(arglist__86801);
var b = cljs.core.first(cljs.core.next(arglist__86801));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86801)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__86801))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__86801))));
return G__86800__delegate.call(this, a, b, c, d, more);
});
return G__86800;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___86794.call(this,a);
case  2 :
return list_STAR___86795.call(this,a,b);
case  3 :
return list_STAR___86796.call(this,a,b,c);
case  4 :
return list_STAR___86797.call(this,a,b,c,d);
default:
return list_STAR___86798.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___86798.cljs$lang$applyTo;
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
var apply__86811 = (function (f,args){
var fixed_arity__86802 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__86802 + 1)) <= fixed_arity__86802)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__86812 = (function (f,x,args){
var arglist__86803 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__86804 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__86803,fixed_arity__86804) <= fixed_arity__86804)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__86803));
} else
{return f.cljs$lang$applyTo(arglist__86803);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__86803));
}
});
var apply__86813 = (function (f,x,y,args){
var arglist__86805 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__86806 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__86805,fixed_arity__86806) <= fixed_arity__86806)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__86805));
} else
{return f.cljs$lang$applyTo(arglist__86805);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__86805));
}
});
var apply__86814 = (function (f,x,y,z,args){
var arglist__86807 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__86808 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__86807,fixed_arity__86808) <= fixed_arity__86808)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__86807));
} else
{return f.cljs$lang$applyTo(arglist__86807);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__86807));
}
});
var apply__86815 = (function() { 
var G__86817__delegate = function (f,a,b,c,d,args){
var arglist__86809 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__86810 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__86809,fixed_arity__86810) <= fixed_arity__86810)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__86809));
} else
{return f.cljs$lang$applyTo(arglist__86809);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__86809));
}
};
var G__86817 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__86817__delegate.call(this, f, a, b, c, d, args);
};
G__86817.cljs$lang$maxFixedArity = 5;
G__86817.cljs$lang$applyTo = (function (arglist__86818){
var f = cljs.core.first(arglist__86818);
var a = cljs.core.first(cljs.core.next(arglist__86818));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86818)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__86818))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__86818)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__86818)))));
return G__86817__delegate.call(this, f, a, b, c, d, args);
});
return G__86817;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__86811.call(this,f,a);
case  3 :
return apply__86812.call(this,f,a,b);
case  4 :
return apply__86813.call(this,f,a,b,c);
case  5 :
return apply__86814.call(this,f,a,b,c,d);
default:
return apply__86815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__86815.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__86819){
var obj = cljs.core.first(arglist__86819);
var f = cljs.core.first(cljs.core.next(arglist__86819));
var args = cljs.core.rest(cljs.core.next(arglist__86819));
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
var not_EQ___86820 = (function (x){
return false;
});
var not_EQ___86821 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___86822 = (function() { 
var G__86824__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__86824 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86824__delegate.call(this, x, y, more);
};
G__86824.cljs$lang$maxFixedArity = 2;
G__86824.cljs$lang$applyTo = (function (arglist__86825){
var x = cljs.core.first(arglist__86825);
var y = cljs.core.first(cljs.core.next(arglist__86825));
var more = cljs.core.rest(cljs.core.next(arglist__86825));
return G__86824__delegate.call(this, x, y, more);
});
return G__86824;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___86820.call(this,x);
case  2 :
return not_EQ___86821.call(this,x,y);
default:
return not_EQ___86822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___86822.cljs$lang$applyTo;
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
var G__86826 = pred;
var G__86827 = cljs.core.next.call(null,coll);
pred = G__86826;
coll = G__86827;
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
{var or__3548__auto____86828 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____86828))
{return or__3548__auto____86828;
} else
{{
var G__86829 = pred;
var G__86830 = cljs.core.next.call(null,coll);
pred = G__86829;
coll = G__86830;
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
var G__86831 = null;
var G__86831__86832 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__86831__86833 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__86831__86834 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__86831__86835 = (function() { 
var G__86837__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__86837 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__86837__delegate.call(this, x, y, zs);
};
G__86837.cljs$lang$maxFixedArity = 2;
G__86837.cljs$lang$applyTo = (function (arglist__86838){
var x = cljs.core.first(arglist__86838);
var y = cljs.core.first(cljs.core.next(arglist__86838));
var zs = cljs.core.rest(cljs.core.next(arglist__86838));
return G__86837__delegate.call(this, x, y, zs);
});
return G__86837;
})()
;
G__86831 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__86831__86832.call(this);
case  1 :
return G__86831__86833.call(this,x);
case  2 :
return G__86831__86834.call(this,x,y);
default:
return G__86831__86835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__86831.cljs$lang$maxFixedArity = 2;
G__86831.cljs$lang$applyTo = G__86831__86835.cljs$lang$applyTo;
return G__86831;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__86839__delegate = function (args){
return x;
};
var G__86839 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__86839__delegate.call(this, args);
};
G__86839.cljs$lang$maxFixedArity = 0;
G__86839.cljs$lang$applyTo = (function (arglist__86840){
var args = cljs.core.seq( arglist__86840 );;
return G__86839__delegate.call(this, args);
});
return G__86839;
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
var comp__86844 = (function (){
return cljs.core.identity;
});
var comp__86845 = (function (f){
return f;
});
var comp__86846 = (function (f,g){
return (function() {
var G__86850 = null;
var G__86850__86851 = (function (){
return f.call(null,g.call(null));
});
var G__86850__86852 = (function (x){
return f.call(null,g.call(null,x));
});
var G__86850__86853 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__86850__86854 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__86850__86855 = (function() { 
var G__86857__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__86857 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86857__delegate.call(this, x, y, z, args);
};
G__86857.cljs$lang$maxFixedArity = 3;
G__86857.cljs$lang$applyTo = (function (arglist__86858){
var x = cljs.core.first(arglist__86858);
var y = cljs.core.first(cljs.core.next(arglist__86858));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86858)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86858)));
return G__86857__delegate.call(this, x, y, z, args);
});
return G__86857;
})()
;
G__86850 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__86850__86851.call(this);
case  1 :
return G__86850__86852.call(this,x);
case  2 :
return G__86850__86853.call(this,x,y);
case  3 :
return G__86850__86854.call(this,x,y,z);
default:
return G__86850__86855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__86850.cljs$lang$maxFixedArity = 3;
G__86850.cljs$lang$applyTo = G__86850__86855.cljs$lang$applyTo;
return G__86850;
})()
});
var comp__86847 = (function (f,g,h){
return (function() {
var G__86859 = null;
var G__86859__86860 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__86859__86861 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__86859__86862 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__86859__86863 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__86859__86864 = (function() { 
var G__86866__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__86866 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86866__delegate.call(this, x, y, z, args);
};
G__86866.cljs$lang$maxFixedArity = 3;
G__86866.cljs$lang$applyTo = (function (arglist__86867){
var x = cljs.core.first(arglist__86867);
var y = cljs.core.first(cljs.core.next(arglist__86867));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86867)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86867)));
return G__86866__delegate.call(this, x, y, z, args);
});
return G__86866;
})()
;
G__86859 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__86859__86860.call(this);
case  1 :
return G__86859__86861.call(this,x);
case  2 :
return G__86859__86862.call(this,x,y);
case  3 :
return G__86859__86863.call(this,x,y,z);
default:
return G__86859__86864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__86859.cljs$lang$maxFixedArity = 3;
G__86859.cljs$lang$applyTo = G__86859__86864.cljs$lang$applyTo;
return G__86859;
})()
});
var comp__86848 = (function() { 
var G__86868__delegate = function (f1,f2,f3,fs){
var fs__86841 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__86869__delegate = function (args){
var ret__86842 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__86841),args);
var fs__86843 = cljs.core.next.call(null,fs__86841);

while(true){
if(cljs.core.truth_(fs__86843))
{{
var G__86870 = cljs.core.first.call(null,fs__86843).call(null,ret__86842);
var G__86871 = cljs.core.next.call(null,fs__86843);
ret__86842 = G__86870;
fs__86843 = G__86871;
continue;
}
} else
{return ret__86842;
}
break;
}
};
var G__86869 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__86869__delegate.call(this, args);
};
G__86869.cljs$lang$maxFixedArity = 0;
G__86869.cljs$lang$applyTo = (function (arglist__86872){
var args = cljs.core.seq( arglist__86872 );;
return G__86869__delegate.call(this, args);
});
return G__86869;
})()
;
};
var G__86868 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86868__delegate.call(this, f1, f2, f3, fs);
};
G__86868.cljs$lang$maxFixedArity = 3;
G__86868.cljs$lang$applyTo = (function (arglist__86873){
var f1 = cljs.core.first(arglist__86873);
var f2 = cljs.core.first(cljs.core.next(arglist__86873));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86873)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86873)));
return G__86868__delegate.call(this, f1, f2, f3, fs);
});
return G__86868;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__86844.call(this);
case  1 :
return comp__86845.call(this,f1);
case  2 :
return comp__86846.call(this,f1,f2);
case  3 :
return comp__86847.call(this,f1,f2,f3);
default:
return comp__86848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__86848.cljs$lang$applyTo;
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
var partial__86874 = (function (f,arg1){
return (function() { 
var G__86879__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__86879 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__86879__delegate.call(this, args);
};
G__86879.cljs$lang$maxFixedArity = 0;
G__86879.cljs$lang$applyTo = (function (arglist__86880){
var args = cljs.core.seq( arglist__86880 );;
return G__86879__delegate.call(this, args);
});
return G__86879;
})()
;
});
var partial__86875 = (function (f,arg1,arg2){
return (function() { 
var G__86881__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__86881 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__86881__delegate.call(this, args);
};
G__86881.cljs$lang$maxFixedArity = 0;
G__86881.cljs$lang$applyTo = (function (arglist__86882){
var args = cljs.core.seq( arglist__86882 );;
return G__86881__delegate.call(this, args);
});
return G__86881;
})()
;
});
var partial__86876 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__86883__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__86883 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__86883__delegate.call(this, args);
};
G__86883.cljs$lang$maxFixedArity = 0;
G__86883.cljs$lang$applyTo = (function (arglist__86884){
var args = cljs.core.seq( arglist__86884 );;
return G__86883__delegate.call(this, args);
});
return G__86883;
})()
;
});
var partial__86877 = (function() { 
var G__86885__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__86886__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__86886 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__86886__delegate.call(this, args);
};
G__86886.cljs$lang$maxFixedArity = 0;
G__86886.cljs$lang$applyTo = (function (arglist__86887){
var args = cljs.core.seq( arglist__86887 );;
return G__86886__delegate.call(this, args);
});
return G__86886;
})()
;
};
var G__86885 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__86885__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__86885.cljs$lang$maxFixedArity = 4;
G__86885.cljs$lang$applyTo = (function (arglist__86888){
var f = cljs.core.first(arglist__86888);
var arg1 = cljs.core.first(cljs.core.next(arglist__86888));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86888)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__86888))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__86888))));
return G__86885__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__86885;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__86874.call(this,f,arg1);
case  3 :
return partial__86875.call(this,f,arg1,arg2);
case  4 :
return partial__86876.call(this,f,arg1,arg2,arg3);
default:
return partial__86877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__86877.cljs$lang$applyTo;
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
var fnil__86889 = (function (f,x){
return (function() {
var G__86893 = null;
var G__86893__86894 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__86893__86895 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__86893__86896 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__86893__86897 = (function() { 
var G__86899__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__86899 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86899__delegate.call(this, a, b, c, ds);
};
G__86899.cljs$lang$maxFixedArity = 3;
G__86899.cljs$lang$applyTo = (function (arglist__86900){
var a = cljs.core.first(arglist__86900);
var b = cljs.core.first(cljs.core.next(arglist__86900));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86900)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86900)));
return G__86899__delegate.call(this, a, b, c, ds);
});
return G__86899;
})()
;
G__86893 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__86893__86894.call(this,a);
case  2 :
return G__86893__86895.call(this,a,b);
case  3 :
return G__86893__86896.call(this,a,b,c);
default:
return G__86893__86897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__86893.cljs$lang$maxFixedArity = 3;
G__86893.cljs$lang$applyTo = G__86893__86897.cljs$lang$applyTo;
return G__86893;
})()
});
var fnil__86890 = (function (f,x,y){
return (function() {
var G__86901 = null;
var G__86901__86902 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__86901__86903 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__86901__86904 = (function() { 
var G__86906__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__86906 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86906__delegate.call(this, a, b, c, ds);
};
G__86906.cljs$lang$maxFixedArity = 3;
G__86906.cljs$lang$applyTo = (function (arglist__86907){
var a = cljs.core.first(arglist__86907);
var b = cljs.core.first(cljs.core.next(arglist__86907));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86907)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86907)));
return G__86906__delegate.call(this, a, b, c, ds);
});
return G__86906;
})()
;
G__86901 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__86901__86902.call(this,a,b);
case  3 :
return G__86901__86903.call(this,a,b,c);
default:
return G__86901__86904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__86901.cljs$lang$maxFixedArity = 3;
G__86901.cljs$lang$applyTo = G__86901__86904.cljs$lang$applyTo;
return G__86901;
})()
});
var fnil__86891 = (function (f,x,y,z){
return (function() {
var G__86908 = null;
var G__86908__86909 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__86908__86910 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__86908__86911 = (function() { 
var G__86913__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__86913 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86913__delegate.call(this, a, b, c, ds);
};
G__86913.cljs$lang$maxFixedArity = 3;
G__86913.cljs$lang$applyTo = (function (arglist__86914){
var a = cljs.core.first(arglist__86914);
var b = cljs.core.first(cljs.core.next(arglist__86914));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86914)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86914)));
return G__86913__delegate.call(this, a, b, c, ds);
});
return G__86913;
})()
;
G__86908 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__86908__86909.call(this,a,b);
case  3 :
return G__86908__86910.call(this,a,b,c);
default:
return G__86908__86911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__86908.cljs$lang$maxFixedArity = 3;
G__86908.cljs$lang$applyTo = G__86908__86911.cljs$lang$applyTo;
return G__86908;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__86889.call(this,f,x);
case  3 :
return fnil__86890.call(this,f,x,y);
case  4 :
return fnil__86891.call(this,f,x,y,z);
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
var mapi__86917 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____86915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____86915))
{var s__86916 = temp__3698__auto____86915;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__86916)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__86916)));
} else
{return null;
}
})));
});

return mapi__86917.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____86918 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____86918))
{var s__86919 = temp__3698__auto____86918;

var x__86920 = f.call(null,cljs.core.first.call(null,s__86919));

if(cljs.core.truth_((x__86920 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__86919));
} else
{return cljs.core.cons.call(null,x__86920,keep.call(null,f,cljs.core.rest.call(null,s__86919)));
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
var keepi__86930 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____86927 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____86927))
{var s__86928 = temp__3698__auto____86927;

var x__86929 = f.call(null,idx,cljs.core.first.call(null,s__86928));

if(cljs.core.truth_((x__86929 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__86928));
} else
{return cljs.core.cons.call(null,x__86929,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__86928)));
}
} else
{return null;
}
})));
});

return keepi__86930.call(null,0,coll);
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
var every_pred__86975 = (function (p){
return (function() {
var ep1 = null;
var ep1__86980 = (function (){
return true;
});
var ep1__86981 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__86982 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86937 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____86937))
{return p.call(null,y);
} else
{return and__3546__auto____86937;
}
})());
});
var ep1__86983 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86938 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____86938))
{var and__3546__auto____86939 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____86939))
{return p.call(null,z);
} else
{return and__3546__auto____86939;
}
} else
{return and__3546__auto____86938;
}
})());
});
var ep1__86984 = (function() { 
var G__86986__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86940 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____86940))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____86940;
}
})());
};
var G__86986 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86986__delegate.call(this, x, y, z, args);
};
G__86986.cljs$lang$maxFixedArity = 3;
G__86986.cljs$lang$applyTo = (function (arglist__86987){
var x = cljs.core.first(arglist__86987);
var y = cljs.core.first(cljs.core.next(arglist__86987));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86987)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86987)));
return G__86986__delegate.call(this, x, y, z, args);
});
return G__86986;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__86980.call(this);
case  1 :
return ep1__86981.call(this,x);
case  2 :
return ep1__86982.call(this,x,y);
case  3 :
return ep1__86983.call(this,x,y,z);
default:
return ep1__86984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__86984.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__86976 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__86988 = (function (){
return true;
});
var ep2__86989 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86941 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____86941))
{return p2.call(null,x);
} else
{return and__3546__auto____86941;
}
})());
});
var ep2__86990 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86942 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____86942))
{var and__3546__auto____86943 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____86943))
{var and__3546__auto____86944 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____86944))
{return p2.call(null,y);
} else
{return and__3546__auto____86944;
}
} else
{return and__3546__auto____86943;
}
} else
{return and__3546__auto____86942;
}
})());
});
var ep2__86991 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86945 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____86945))
{var and__3546__auto____86946 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____86946))
{var and__3546__auto____86947 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____86947))
{var and__3546__auto____86948 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____86948))
{var and__3546__auto____86949 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____86949))
{return p2.call(null,z);
} else
{return and__3546__auto____86949;
}
} else
{return and__3546__auto____86948;
}
} else
{return and__3546__auto____86947;
}
} else
{return and__3546__auto____86946;
}
} else
{return and__3546__auto____86945;
}
})());
});
var ep2__86992 = (function() { 
var G__86994__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86950 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____86950))
{return cljs.core.every_QMARK_.call(null,(function (p1__86921_SHARP_){
var and__3546__auto____86951 = p1.call(null,p1__86921_SHARP_);

if(cljs.core.truth_(and__3546__auto____86951))
{return p2.call(null,p1__86921_SHARP_);
} else
{return and__3546__auto____86951;
}
}),args);
} else
{return and__3546__auto____86950;
}
})());
};
var G__86994 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__86994__delegate.call(this, x, y, z, args);
};
G__86994.cljs$lang$maxFixedArity = 3;
G__86994.cljs$lang$applyTo = (function (arglist__86995){
var x = cljs.core.first(arglist__86995);
var y = cljs.core.first(cljs.core.next(arglist__86995));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__86995)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__86995)));
return G__86994__delegate.call(this, x, y, z, args);
});
return G__86994;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__86988.call(this);
case  1 :
return ep2__86989.call(this,x);
case  2 :
return ep2__86990.call(this,x,y);
case  3 :
return ep2__86991.call(this,x,y,z);
default:
return ep2__86992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__86992.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__86977 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__86996 = (function (){
return true;
});
var ep3__86997 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86952 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____86952))
{var and__3546__auto____86953 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____86953))
{return p3.call(null,x);
} else
{return and__3546__auto____86953;
}
} else
{return and__3546__auto____86952;
}
})());
});
var ep3__86998 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86954 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____86954))
{var and__3546__auto____86955 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____86955))
{var and__3546__auto____86956 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____86956))
{var and__3546__auto____86957 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____86957))
{var and__3546__auto____86958 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____86958))
{return p3.call(null,y);
} else
{return and__3546__auto____86958;
}
} else
{return and__3546__auto____86957;
}
} else
{return and__3546__auto____86956;
}
} else
{return and__3546__auto____86955;
}
} else
{return and__3546__auto____86954;
}
})());
});
var ep3__86999 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86959 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____86959))
{var and__3546__auto____86960 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____86960))
{var and__3546__auto____86961 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____86961))
{var and__3546__auto____86962 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____86962))
{var and__3546__auto____86963 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____86963))
{var and__3546__auto____86964 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____86964))
{var and__3546__auto____86965 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____86965))
{var and__3546__auto____86966 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____86966))
{return p3.call(null,z);
} else
{return and__3546__auto____86966;
}
} else
{return and__3546__auto____86965;
}
} else
{return and__3546__auto____86964;
}
} else
{return and__3546__auto____86963;
}
} else
{return and__3546__auto____86962;
}
} else
{return and__3546__auto____86961;
}
} else
{return and__3546__auto____86960;
}
} else
{return and__3546__auto____86959;
}
})());
});
var ep3__87000 = (function() { 
var G__87002__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86967 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____86967))
{return cljs.core.every_QMARK_.call(null,(function (p1__86922_SHARP_){
var and__3546__auto____86968 = p1.call(null,p1__86922_SHARP_);

if(cljs.core.truth_(and__3546__auto____86968))
{var and__3546__auto____86969 = p2.call(null,p1__86922_SHARP_);

if(cljs.core.truth_(and__3546__auto____86969))
{return p3.call(null,p1__86922_SHARP_);
} else
{return and__3546__auto____86969;
}
} else
{return and__3546__auto____86968;
}
}),args);
} else
{return and__3546__auto____86967;
}
})());
};
var G__87002 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87002__delegate.call(this, x, y, z, args);
};
G__87002.cljs$lang$maxFixedArity = 3;
G__87002.cljs$lang$applyTo = (function (arglist__87003){
var x = cljs.core.first(arglist__87003);
var y = cljs.core.first(cljs.core.next(arglist__87003));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87003)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87003)));
return G__87002__delegate.call(this, x, y, z, args);
});
return G__87002;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__86996.call(this);
case  1 :
return ep3__86997.call(this,x);
case  2 :
return ep3__86998.call(this,x,y);
case  3 :
return ep3__86999.call(this,x,y,z);
default:
return ep3__87000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__87000.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__86978 = (function() { 
var G__87004__delegate = function (p1,p2,p3,ps){
var ps__86970 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__87005 = (function (){
return true;
});
var epn__87006 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__86923_SHARP_){
return p1__86923_SHARP_.call(null,x);
}),ps__86970);
});
var epn__87007 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__86924_SHARP_){
var and__3546__auto____86971 = p1__86924_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____86971))
{return p1__86924_SHARP_.call(null,y);
} else
{return and__3546__auto____86971;
}
}),ps__86970);
});
var epn__87008 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__86925_SHARP_){
var and__3546__auto____86972 = p1__86925_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____86972))
{var and__3546__auto____86973 = p1__86925_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____86973))
{return p1__86925_SHARP_.call(null,z);
} else
{return and__3546__auto____86973;
}
} else
{return and__3546__auto____86972;
}
}),ps__86970);
});
var epn__87009 = (function() { 
var G__87011__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____86974 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____86974))
{return cljs.core.every_QMARK_.call(null,(function (p1__86926_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__86926_SHARP_,args);
}),ps__86970);
} else
{return and__3546__auto____86974;
}
})());
};
var G__87011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87011__delegate.call(this, x, y, z, args);
};
G__87011.cljs$lang$maxFixedArity = 3;
G__87011.cljs$lang$applyTo = (function (arglist__87012){
var x = cljs.core.first(arglist__87012);
var y = cljs.core.first(cljs.core.next(arglist__87012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87012)));
return G__87011__delegate.call(this, x, y, z, args);
});
return G__87011;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__87005.call(this);
case  1 :
return epn__87006.call(this,x);
case  2 :
return epn__87007.call(this,x,y);
case  3 :
return epn__87008.call(this,x,y,z);
default:
return epn__87009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__87009.cljs$lang$applyTo;
return epn;
})()
};
var G__87004 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87004__delegate.call(this, p1, p2, p3, ps);
};
G__87004.cljs$lang$maxFixedArity = 3;
G__87004.cljs$lang$applyTo = (function (arglist__87013){
var p1 = cljs.core.first(arglist__87013);
var p2 = cljs.core.first(cljs.core.next(arglist__87013));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87013)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87013)));
return G__87004__delegate.call(this, p1, p2, p3, ps);
});
return G__87004;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__86975.call(this,p1);
case  2 :
return every_pred__86976.call(this,p1,p2);
case  3 :
return every_pred__86977.call(this,p1,p2,p3);
default:
return every_pred__86978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__86978.cljs$lang$applyTo;
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
var some_fn__87053 = (function (p){
return (function() {
var sp1 = null;
var sp1__87058 = (function (){
return null;
});
var sp1__87059 = (function (x){
return p.call(null,x);
});
var sp1__87060 = (function (x,y){
var or__3548__auto____87015 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____87015))
{return or__3548__auto____87015;
} else
{return p.call(null,y);
}
});
var sp1__87061 = (function (x,y,z){
var or__3548__auto____87016 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____87016))
{return or__3548__auto____87016;
} else
{var or__3548__auto____87017 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____87017))
{return or__3548__auto____87017;
} else
{return p.call(null,z);
}
}
});
var sp1__87062 = (function() { 
var G__87064__delegate = function (x,y,z,args){
var or__3548__auto____87018 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____87018))
{return or__3548__auto____87018;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__87064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87064__delegate.call(this, x, y, z, args);
};
G__87064.cljs$lang$maxFixedArity = 3;
G__87064.cljs$lang$applyTo = (function (arglist__87065){
var x = cljs.core.first(arglist__87065);
var y = cljs.core.first(cljs.core.next(arglist__87065));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87065)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87065)));
return G__87064__delegate.call(this, x, y, z, args);
});
return G__87064;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__87058.call(this);
case  1 :
return sp1__87059.call(this,x);
case  2 :
return sp1__87060.call(this,x,y);
case  3 :
return sp1__87061.call(this,x,y,z);
default:
return sp1__87062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__87062.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__87054 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__87066 = (function (){
return null;
});
var sp2__87067 = (function (x){
var or__3548__auto____87019 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____87019))
{return or__3548__auto____87019;
} else
{return p2.call(null,x);
}
});
var sp2__87068 = (function (x,y){
var or__3548__auto____87020 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____87020))
{return or__3548__auto____87020;
} else
{var or__3548__auto____87021 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____87021))
{return or__3548__auto____87021;
} else
{var or__3548__auto____87022 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____87022))
{return or__3548__auto____87022;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__87069 = (function (x,y,z){
var or__3548__auto____87023 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____87023))
{return or__3548__auto____87023;
} else
{var or__3548__auto____87024 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____87024))
{return or__3548__auto____87024;
} else
{var or__3548__auto____87025 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____87025))
{return or__3548__auto____87025;
} else
{var or__3548__auto____87026 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____87026))
{return or__3548__auto____87026;
} else
{var or__3548__auto____87027 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____87027))
{return or__3548__auto____87027;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__87070 = (function() { 
var G__87072__delegate = function (x,y,z,args){
var or__3548__auto____87028 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____87028))
{return or__3548__auto____87028;
} else
{return cljs.core.some.call(null,(function (p1__86931_SHARP_){
var or__3548__auto____87029 = p1.call(null,p1__86931_SHARP_);

if(cljs.core.truth_(or__3548__auto____87029))
{return or__3548__auto____87029;
} else
{return p2.call(null,p1__86931_SHARP_);
}
}),args);
}
};
var G__87072 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87072__delegate.call(this, x, y, z, args);
};
G__87072.cljs$lang$maxFixedArity = 3;
G__87072.cljs$lang$applyTo = (function (arglist__87073){
var x = cljs.core.first(arglist__87073);
var y = cljs.core.first(cljs.core.next(arglist__87073));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87073)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87073)));
return G__87072__delegate.call(this, x, y, z, args);
});
return G__87072;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__87066.call(this);
case  1 :
return sp2__87067.call(this,x);
case  2 :
return sp2__87068.call(this,x,y);
case  3 :
return sp2__87069.call(this,x,y,z);
default:
return sp2__87070.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__87070.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__87055 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__87074 = (function (){
return null;
});
var sp3__87075 = (function (x){
var or__3548__auto____87030 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____87030))
{return or__3548__auto____87030;
} else
{var or__3548__auto____87031 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____87031))
{return or__3548__auto____87031;
} else
{return p3.call(null,x);
}
}
});
var sp3__87076 = (function (x,y){
var or__3548__auto____87032 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____87032))
{return or__3548__auto____87032;
} else
{var or__3548__auto____87033 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____87033))
{return or__3548__auto____87033;
} else
{var or__3548__auto____87034 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____87034))
{return or__3548__auto____87034;
} else
{var or__3548__auto____87035 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____87035))
{return or__3548__auto____87035;
} else
{var or__3548__auto____87036 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____87036))
{return or__3548__auto____87036;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__87077 = (function (x,y,z){
var or__3548__auto____87037 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____87037))
{return or__3548__auto____87037;
} else
{var or__3548__auto____87038 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____87038))
{return or__3548__auto____87038;
} else
{var or__3548__auto____87039 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____87039))
{return or__3548__auto____87039;
} else
{var or__3548__auto____87040 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____87040))
{return or__3548__auto____87040;
} else
{var or__3548__auto____87041 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____87041))
{return or__3548__auto____87041;
} else
{var or__3548__auto____87042 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____87042))
{return or__3548__auto____87042;
} else
{var or__3548__auto____87043 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____87043))
{return or__3548__auto____87043;
} else
{var or__3548__auto____87044 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____87044))
{return or__3548__auto____87044;
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
var sp3__87078 = (function() { 
var G__87080__delegate = function (x,y,z,args){
var or__3548__auto____87045 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____87045))
{return or__3548__auto____87045;
} else
{return cljs.core.some.call(null,(function (p1__86932_SHARP_){
var or__3548__auto____87046 = p1.call(null,p1__86932_SHARP_);

if(cljs.core.truth_(or__3548__auto____87046))
{return or__3548__auto____87046;
} else
{var or__3548__auto____87047 = p2.call(null,p1__86932_SHARP_);

if(cljs.core.truth_(or__3548__auto____87047))
{return or__3548__auto____87047;
} else
{return p3.call(null,p1__86932_SHARP_);
}
}
}),args);
}
};
var G__87080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87080__delegate.call(this, x, y, z, args);
};
G__87080.cljs$lang$maxFixedArity = 3;
G__87080.cljs$lang$applyTo = (function (arglist__87081){
var x = cljs.core.first(arglist__87081);
var y = cljs.core.first(cljs.core.next(arglist__87081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87081)));
return G__87080__delegate.call(this, x, y, z, args);
});
return G__87080;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__87074.call(this);
case  1 :
return sp3__87075.call(this,x);
case  2 :
return sp3__87076.call(this,x,y);
case  3 :
return sp3__87077.call(this,x,y,z);
default:
return sp3__87078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__87078.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__87056 = (function() { 
var G__87082__delegate = function (p1,p2,p3,ps){
var ps__87048 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__87083 = (function (){
return null;
});
var spn__87084 = (function (x){
return cljs.core.some.call(null,(function (p1__86933_SHARP_){
return p1__86933_SHARP_.call(null,x);
}),ps__87048);
});
var spn__87085 = (function (x,y){
return cljs.core.some.call(null,(function (p1__86934_SHARP_){
var or__3548__auto____87049 = p1__86934_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____87049))
{return or__3548__auto____87049;
} else
{return p1__86934_SHARP_.call(null,y);
}
}),ps__87048);
});
var spn__87086 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__86935_SHARP_){
var or__3548__auto____87050 = p1__86935_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____87050))
{return or__3548__auto____87050;
} else
{var or__3548__auto____87051 = p1__86935_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____87051))
{return or__3548__auto____87051;
} else
{return p1__86935_SHARP_.call(null,z);
}
}
}),ps__87048);
});
var spn__87087 = (function() { 
var G__87089__delegate = function (x,y,z,args){
var or__3548__auto____87052 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____87052))
{return or__3548__auto____87052;
} else
{return cljs.core.some.call(null,(function (p1__86936_SHARP_){
return cljs.core.some.call(null,p1__86936_SHARP_,args);
}),ps__87048);
}
};
var G__87089 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87089__delegate.call(this, x, y, z, args);
};
G__87089.cljs$lang$maxFixedArity = 3;
G__87089.cljs$lang$applyTo = (function (arglist__87090){
var x = cljs.core.first(arglist__87090);
var y = cljs.core.first(cljs.core.next(arglist__87090));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87090)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87090)));
return G__87089__delegate.call(this, x, y, z, args);
});
return G__87089;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__87083.call(this);
case  1 :
return spn__87084.call(this,x);
case  2 :
return spn__87085.call(this,x,y);
case  3 :
return spn__87086.call(this,x,y,z);
default:
return spn__87087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__87087.cljs$lang$applyTo;
return spn;
})()
};
var G__87082 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87082__delegate.call(this, p1, p2, p3, ps);
};
G__87082.cljs$lang$maxFixedArity = 3;
G__87082.cljs$lang$applyTo = (function (arglist__87091){
var p1 = cljs.core.first(arglist__87091);
var p2 = cljs.core.first(cljs.core.next(arglist__87091));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87091)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87091)));
return G__87082__delegate.call(this, p1, p2, p3, ps);
});
return G__87082;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__87053.call(this,p1);
case  2 :
return some_fn__87054.call(this,p1,p2);
case  3 :
return some_fn__87055.call(this,p1,p2,p3);
default:
return some_fn__87056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__87056.cljs$lang$applyTo;
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
var map__87104 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____87092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87092))
{var s__87093 = temp__3698__auto____87092;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__87093)),map.call(null,f,cljs.core.rest.call(null,s__87093)));
} else
{return null;
}
})));
});
var map__87105 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__87094 = cljs.core.seq.call(null,c1);
var s2__87095 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____87096 = s1__87094;

if(cljs.core.truth_(and__3546__auto____87096))
{return s2__87095;
} else
{return and__3546__auto____87096;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__87094),cljs.core.first.call(null,s2__87095)),map.call(null,f,cljs.core.rest.call(null,s1__87094),cljs.core.rest.call(null,s2__87095)));
} else
{return null;
}
})));
});
var map__87106 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__87097 = cljs.core.seq.call(null,c1);
var s2__87098 = cljs.core.seq.call(null,c2);
var s3__87099 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____87100 = s1__87097;

if(cljs.core.truth_(and__3546__auto____87100))
{var and__3546__auto____87101 = s2__87098;

if(cljs.core.truth_(and__3546__auto____87101))
{return s3__87099;
} else
{return and__3546__auto____87101;
}
} else
{return and__3546__auto____87100;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__87097),cljs.core.first.call(null,s2__87098),cljs.core.first.call(null,s3__87099)),map.call(null,f,cljs.core.rest.call(null,s1__87097),cljs.core.rest.call(null,s2__87098),cljs.core.rest.call(null,s3__87099)));
} else
{return null;
}
})));
});
var map__87107 = (function() { 
var G__87109__delegate = function (f,c1,c2,c3,colls){
var step__87103 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__87102 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__87102)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__87102),step.call(null,map.call(null,cljs.core.rest,ss__87102)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__87014_SHARP_){
return cljs.core.apply.call(null,f,p1__87014_SHARP_);
}),step__87103.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__87109 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__87109__delegate.call(this, f, c1, c2, c3, colls);
};
G__87109.cljs$lang$maxFixedArity = 4;
G__87109.cljs$lang$applyTo = (function (arglist__87110){
var f = cljs.core.first(arglist__87110);
var c1 = cljs.core.first(cljs.core.next(arglist__87110));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87110)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__87110))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__87110))));
return G__87109__delegate.call(this, f, c1, c2, c3, colls);
});
return G__87109;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__87104.call(this,f,c1);
case  3 :
return map__87105.call(this,f,c1,c2);
case  4 :
return map__87106.call(this,f,c1,c2,c3);
default:
return map__87107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__87107.cljs$lang$applyTo;
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
{var temp__3698__auto____87111 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87111))
{var s__87112 = temp__3698__auto____87111;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__87112),take.call(null,(n - 1),cljs.core.rest.call(null,s__87112)));
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
var step__87115 = (function (n,coll){
while(true){
var s__87113 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____87114 = (n > 0);

if(cljs.core.truth_(and__3546__auto____87114))
{return s__87113;
} else
{return and__3546__auto____87114;
}
})()))
{{
var G__87116 = (n - 1);
var G__87117 = cljs.core.rest.call(null,s__87113);
n = G__87116;
coll = G__87117;
continue;
}
} else
{return s__87113;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__87115.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__87118 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__87119 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__87118.call(this,n);
case  2 :
return drop_last__87119.call(this,n,s);
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
var s__87121 = cljs.core.seq.call(null,coll);
var lead__87122 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__87122))
{{
var G__87123 = cljs.core.next.call(null,s__87121);
var G__87124 = cljs.core.next.call(null,lead__87122);
s__87121 = G__87123;
lead__87122 = G__87124;
continue;
}
} else
{return s__87121;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__87127 = (function (pred,coll){
while(true){
var s__87125 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____87126 = s__87125;

if(cljs.core.truth_(and__3546__auto____87126))
{return pred.call(null,cljs.core.first.call(null,s__87125));
} else
{return and__3546__auto____87126;
}
})()))
{{
var G__87128 = pred;
var G__87129 = cljs.core.rest.call(null,s__87125);
pred = G__87128;
coll = G__87129;
continue;
}
} else
{return s__87125;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__87127.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____87130 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87130))
{var s__87131 = temp__3698__auto____87130;

return cljs.core.concat.call(null,s__87131,cycle.call(null,s__87131));
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
var repeat__87132 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__87133 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__87132.call(this,n);
case  2 :
return repeat__87133.call(this,n,x);
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
var repeatedly__87135 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__87136 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__87135.call(this,n);
case  2 :
return repeatedly__87136.call(this,n,f);
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
var interleave__87142 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__87138 = cljs.core.seq.call(null,c1);
var s2__87139 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____87140 = s1__87138;

if(cljs.core.truth_(and__3546__auto____87140))
{return s2__87139;
} else
{return and__3546__auto____87140;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__87138),cljs.core.cons.call(null,cljs.core.first.call(null,s2__87139),interleave.call(null,cljs.core.rest.call(null,s1__87138),cljs.core.rest.call(null,s2__87139))));
} else
{return null;
}
})));
});
var interleave__87143 = (function() { 
var G__87145__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__87141 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__87141)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__87141),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__87141)));
} else
{return null;
}
})));
};
var G__87145 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__87145__delegate.call(this, c1, c2, colls);
};
G__87145.cljs$lang$maxFixedArity = 2;
G__87145.cljs$lang$applyTo = (function (arglist__87146){
var c1 = cljs.core.first(arglist__87146);
var c2 = cljs.core.first(cljs.core.next(arglist__87146));
var colls = cljs.core.rest(cljs.core.next(arglist__87146));
return G__87145__delegate.call(this, c1, c2, colls);
});
return G__87145;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__87142.call(this,c1,c2);
default:
return interleave__87143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__87143.cljs$lang$applyTo;
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
var cat__87149 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____87147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____87147))
{var coll__87148 = temp__3695__auto____87147;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__87148),cat.call(null,cljs.core.rest.call(null,coll__87148),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__87149.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__87150 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__87151 = (function() { 
var G__87153__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__87153 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__87153__delegate.call(this, f, coll, colls);
};
G__87153.cljs$lang$maxFixedArity = 2;
G__87153.cljs$lang$applyTo = (function (arglist__87154){
var f = cljs.core.first(arglist__87154);
var coll = cljs.core.first(cljs.core.next(arglist__87154));
var colls = cljs.core.rest(cljs.core.next(arglist__87154));
return G__87153__delegate.call(this, f, coll, colls);
});
return G__87153;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__87150.call(this,f,coll);
default:
return mapcat__87151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__87151.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____87155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87155))
{var s__87156 = temp__3698__auto____87155;

var f__87157 = cljs.core.first.call(null,s__87156);
var r__87158 = cljs.core.rest.call(null,s__87156);

if(cljs.core.truth_(pred.call(null,f__87157)))
{return cljs.core.cons.call(null,f__87157,filter.call(null,pred,r__87158));
} else
{return filter.call(null,pred,r__87158);
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
var walk__87160 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__87160.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__87159_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__87159_SHARP_));
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
var partition__87167 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__87168 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____87161 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87161))
{var s__87162 = temp__3698__auto____87161;

var p__87163 = cljs.core.take.call(null,n,s__87162);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__87163))))
{return cljs.core.cons.call(null,p__87163,partition.call(null,n,step,cljs.core.drop.call(null,step,s__87162)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__87169 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____87164 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87164))
{var s__87165 = temp__3698__auto____87164;

var p__87166 = cljs.core.take.call(null,n,s__87165);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__87166))))
{return cljs.core.cons.call(null,p__87166,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__87165)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__87166,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__87167.call(this,n,step);
case  3 :
return partition__87168.call(this,n,step,pad);
case  4 :
return partition__87169.call(this,n,step,pad,coll);
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
var get_in__87175 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__87176 = (function (m,ks,not_found){
var sentinel__87171 = cljs.core.lookup_sentinel;
var m__87172 = m;
var ks__87173 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__87173))
{var m__87174 = cljs.core.get.call(null,m__87172,cljs.core.first.call(null,ks__87173),sentinel__87171);

if(cljs.core.truth_((sentinel__87171 === m__87174)))
{return not_found;
} else
{{
var G__87178 = sentinel__87171;
var G__87179 = m__87174;
var G__87180 = cljs.core.next.call(null,ks__87173);
sentinel__87171 = G__87178;
m__87172 = G__87179;
ks__87173 = G__87180;
continue;
}
}
} else
{return m__87172;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__87175.call(this,m,ks);
case  3 :
return get_in__87176.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__87181,v){
var vec__87182__87183 = p__87181;
var k__87184 = cljs.core.nth.call(null,vec__87182__87183,0,null);
var ks__87185 = cljs.core.nthnext.call(null,vec__87182__87183,1);

if(cljs.core.truth_(ks__87185))
{return cljs.core.assoc.call(null,m,k__87184,assoc_in.call(null,cljs.core.get.call(null,m,k__87184),ks__87185,v));
} else
{return cljs.core.assoc.call(null,m,k__87184,v);
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
var update_in__delegate = function (m,p__87186,f,args){
var vec__87187__87188 = p__87186;
var k__87189 = cljs.core.nth.call(null,vec__87187__87188,0,null);
var ks__87190 = cljs.core.nthnext.call(null,vec__87187__87188,1);

if(cljs.core.truth_(ks__87190))
{return cljs.core.assoc.call(null,m,k__87189,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__87189),ks__87190,f,args));
} else
{return cljs.core.assoc.call(null,m,k__87189,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__87189),args));
}
};
var update_in = function (m,p__87186,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__87186, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__87191){
var m = cljs.core.first(arglist__87191);
var p__87186 = cljs.core.first(cljs.core.next(arglist__87191));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87191)));
return update_in__delegate.call(this, m, p__87186, f, args);
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
var this__87192 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__87225 = null;
var G__87225__87226 = (function (coll,k){
var this__87193 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__87225__87227 = (function (coll,k,not_found){
var this__87194 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__87225 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__87225__87226.call(this,coll,k);
case  3 :
return G__87225__87227.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87225;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__87195 = this;
var new_array__87196 = cljs.core.aclone.call(null,this__87195.array);

(new_array__87196[k] = v);
return (new cljs.core.Vector(this__87195.meta,new_array__87196));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__87229 = null;
var G__87229__87230 = (function (tsym87197,k){
var this__87199 = this;
var tsym87197__87200 = this;

var coll__87201 = tsym87197__87200;

return cljs.core._lookup.call(null,coll__87201,k);
});
var G__87229__87231 = (function (tsym87198,k,not_found){
var this__87202 = this;
var tsym87198__87203 = this;

var coll__87204 = tsym87198__87203;

return cljs.core._lookup.call(null,coll__87204,k,not_found);
});
G__87229 = function(tsym87198,k,not_found){
switch(arguments.length){
case  2 :
return G__87229__87230.call(this,tsym87198,k);
case  3 :
return G__87229__87231.call(this,tsym87198,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87229;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__87205 = this;
var new_array__87206 = cljs.core.aclone.call(null,this__87205.array);

new_array__87206.push(o);
return (new cljs.core.Vector(this__87205.meta,new_array__87206));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__87233 = null;
var G__87233__87234 = (function (v,f){
var this__87207 = this;
return cljs.core.ci_reduce.call(null,this__87207.array,f);
});
var G__87233__87235 = (function (v,f,start){
var this__87208 = this;
return cljs.core.ci_reduce.call(null,this__87208.array,f,start);
});
G__87233 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__87233__87234.call(this,v,f);
case  3 :
return G__87233__87235.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87233;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__87209 = this;
if(cljs.core.truth_((this__87209.array.length > 0)))
{var vector_seq__87210 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__87209.array.length)))
{return cljs.core.cons.call(null,(this__87209.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__87210.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__87211 = this;
return this__87211.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__87212 = this;
var count__87213 = this__87212.array.length;

if(cljs.core.truth_((count__87213 > 0)))
{return (this__87212.array[(count__87213 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__87214 = this;
if(cljs.core.truth_((this__87214.array.length > 0)))
{var new_array__87215 = cljs.core.aclone.call(null,this__87214.array);

new_array__87215.pop();
return (new cljs.core.Vector(this__87214.meta,new_array__87215));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__87216 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87217 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__87218 = this;
return (new cljs.core.Vector(meta,this__87218.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__87219 = this;
return this__87219.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__87237 = null;
var G__87237__87238 = (function (coll,n){
var this__87220 = this;
if(cljs.core.truth_((function (){var and__3546__auto____87221 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____87221))
{return (n < this__87220.array.length);
} else
{return and__3546__auto____87221;
}
})()))
{return (this__87220.array[n]);
} else
{return null;
}
});
var G__87237__87239 = (function (coll,n,not_found){
var this__87222 = this;
if(cljs.core.truth_((function (){var and__3546__auto____87223 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____87223))
{return (n < this__87222.array.length);
} else
{return and__3546__auto____87223;
}
})()))
{return (this__87222.array[n]);
} else
{return not_found;
}
});
G__87237 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__87237__87238.call(this,coll,n);
case  3 :
return G__87237__87239.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87237;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__87224 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__87224.meta);
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
vector.cljs$lang$applyTo = (function (arglist__87241){
var args = cljs.core.seq( arglist__87241 );;
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
var this__87242 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__87270 = null;
var G__87270__87271 = (function (coll,k){
var this__87243 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__87270__87272 = (function (coll,k,not_found){
var this__87244 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__87270 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__87270__87271.call(this,coll,k);
case  3 :
return G__87270__87272.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87270;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__87245 = this;
var v_pos__87246 = (this__87245.start + key);

return (new cljs.core.Subvec(this__87245.meta,cljs.core._assoc.call(null,this__87245.v,v_pos__87246,val),this__87245.start,((this__87245.end > (v_pos__87246 + 1)) ? this__87245.end : (v_pos__87246 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__87274 = null;
var G__87274__87275 = (function (tsym87247,k){
var this__87249 = this;
var tsym87247__87250 = this;

var coll__87251 = tsym87247__87250;

return cljs.core._lookup.call(null,coll__87251,k);
});
var G__87274__87276 = (function (tsym87248,k,not_found){
var this__87252 = this;
var tsym87248__87253 = this;

var coll__87254 = tsym87248__87253;

return cljs.core._lookup.call(null,coll__87254,k,not_found);
});
G__87274 = function(tsym87248,k,not_found){
switch(arguments.length){
case  2 :
return G__87274__87275.call(this,tsym87248,k);
case  3 :
return G__87274__87276.call(this,tsym87248,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87274;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__87255 = this;
return (new cljs.core.Subvec(this__87255.meta,cljs.core._assoc_n.call(null,this__87255.v,this__87255.end,o),this__87255.start,(this__87255.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__87278 = null;
var G__87278__87279 = (function (coll,f){
var this__87256 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__87278__87280 = (function (coll,f,start){
var this__87257 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__87278 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__87278__87279.call(this,coll,f);
case  3 :
return G__87278__87280.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87278;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__87258 = this;
var subvec_seq__87259 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__87258.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__87258.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__87259.call(null,this__87258.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__87260 = this;
return (this__87260.end - this__87260.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__87261 = this;
return cljs.core._nth.call(null,this__87261.v,(this__87261.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__87262 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__87262.start,this__87262.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__87262.meta,this__87262.v,this__87262.start,(this__87262.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__87263 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87264 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__87265 = this;
return (new cljs.core.Subvec(meta,this__87265.v,this__87265.start,this__87265.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__87266 = this;
return this__87266.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__87282 = null;
var G__87282__87283 = (function (coll,n){
var this__87267 = this;
return cljs.core._nth.call(null,this__87267.v,(this__87267.start + n));
});
var G__87282__87284 = (function (coll,n,not_found){
var this__87268 = this;
return cljs.core._nth.call(null,this__87268.v,(this__87268.start + n),not_found);
});
G__87282 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__87282__87283.call(this,coll,n);
case  3 :
return G__87282__87284.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87282;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__87269 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__87269.meta);
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
var subvec__87286 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__87287 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__87286.call(this,v,start);
case  3 :
return subvec__87287.call(this,v,start,end);
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
var this__87289 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__87290 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87291 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__87292 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__87292.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__87293 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__87294 = this;
return cljs.core._first.call(null,this__87294.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__87295 = this;
var temp__3695__auto____87296 = cljs.core.next.call(null,this__87295.front);

if(cljs.core.truth_(temp__3695__auto____87296))
{var f1__87297 = temp__3695__auto____87296;

return (new cljs.core.PersistentQueueSeq(this__87295.meta,f1__87297,this__87295.rear));
} else
{if(cljs.core.truth_((this__87295.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__87295.meta,this__87295.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__87298 = this;
return this__87298.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__87299 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__87299.front,this__87299.rear));
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
var this__87300 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__87301 = this;
if(cljs.core.truth_(this__87301.front))
{return (new cljs.core.PersistentQueue(this__87301.meta,(this__87301.count + 1),this__87301.front,cljs.core.conj.call(null,(function (){var or__3548__auto____87302 = this__87301.rear;

if(cljs.core.truth_(or__3548__auto____87302))
{return or__3548__auto____87302;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__87301.meta,(this__87301.count + 1),cljs.core.conj.call(null,this__87301.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__87303 = this;
var rear__87304 = cljs.core.seq.call(null,this__87303.rear);

if(cljs.core.truth_((function (){var or__3548__auto____87305 = this__87303.front;

if(cljs.core.truth_(or__3548__auto____87305))
{return or__3548__auto____87305;
} else
{return rear__87304;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__87303.front,cljs.core.seq.call(null,rear__87304)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__87306 = this;
return this__87306.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__87307 = this;
return cljs.core._first.call(null,this__87307.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__87308 = this;
if(cljs.core.truth_(this__87308.front))
{var temp__3695__auto____87309 = cljs.core.next.call(null,this__87308.front);

if(cljs.core.truth_(temp__3695__auto____87309))
{var f1__87310 = temp__3695__auto____87309;

return (new cljs.core.PersistentQueue(this__87308.meta,(this__87308.count - 1),f1__87310,this__87308.rear));
} else
{return (new cljs.core.PersistentQueue(this__87308.meta,(this__87308.count - 1),cljs.core.seq.call(null,this__87308.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__87311 = this;
return cljs.core.first.call(null,this__87311.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__87312 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87313 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__87314 = this;
return (new cljs.core.PersistentQueue(meta,this__87314.count,this__87314.front,this__87314.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__87315 = this;
return this__87315.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__87316 = this;
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
var this__87317 = this;
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
var len__87318 = array.length;

var i__87319 = 0;

while(true){
if(cljs.core.truth_((i__87319 < len__87318)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__87319]))))
{return i__87319;
} else
{{
var G__87320 = (i__87319 + incr);
i__87319 = G__87320;
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
var obj_map_contains_key_QMARK___87322 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___87323 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____87321 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____87321))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____87321;
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
return obj_map_contains_key_QMARK___87322.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___87323.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__87326 = cljs.core.hash.call(null,a);
var b__87327 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__87326 < b__87327)))
{return -1;
} else
{if(cljs.core.truth_((a__87326 > b__87327)))
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
var this__87328 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__87355 = null;
var G__87355__87356 = (function (coll,k){
var this__87329 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__87355__87357 = (function (coll,k,not_found){
var this__87330 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__87330.strobj,(this__87330.strobj[k]),not_found);
});
G__87355 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__87355__87356.call(this,coll,k);
case  3 :
return G__87355__87357.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87355;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__87331 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__87332 = goog.object.clone.call(null,this__87331.strobj);
var overwrite_QMARK___87333 = new_strobj__87332.hasOwnProperty(k);

(new_strobj__87332[k] = v);
if(cljs.core.truth_(overwrite_QMARK___87333))
{return (new cljs.core.ObjMap(this__87331.meta,this__87331.keys,new_strobj__87332));
} else
{var new_keys__87334 = cljs.core.aclone.call(null,this__87331.keys);

new_keys__87334.push(k);
return (new cljs.core.ObjMap(this__87331.meta,new_keys__87334,new_strobj__87332));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__87331.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__87335 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__87335.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__87359 = null;
var G__87359__87360 = (function (tsym87336,k){
var this__87338 = this;
var tsym87336__87339 = this;

var coll__87340 = tsym87336__87339;

return cljs.core._lookup.call(null,coll__87340,k);
});
var G__87359__87361 = (function (tsym87337,k,not_found){
var this__87341 = this;
var tsym87337__87342 = this;

var coll__87343 = tsym87337__87342;

return cljs.core._lookup.call(null,coll__87343,k,not_found);
});
G__87359 = function(tsym87337,k,not_found){
switch(arguments.length){
case  2 :
return G__87359__87360.call(this,tsym87337,k);
case  3 :
return G__87359__87361.call(this,tsym87337,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87359;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__87344 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__87345 = this;
if(cljs.core.truth_((this__87345.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__87325_SHARP_){
return cljs.core.vector.call(null,p1__87325_SHARP_,(this__87345.strobj[p1__87325_SHARP_]));
}),this__87345.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__87346 = this;
return this__87346.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87347 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__87348 = this;
return (new cljs.core.ObjMap(meta,this__87348.keys,this__87348.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__87349 = this;
return this__87349.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__87350 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__87350.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__87351 = this;
if(cljs.core.truth_((function (){var and__3546__auto____87352 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____87352))
{return this__87351.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____87352;
}
})()))
{var new_keys__87353 = cljs.core.aclone.call(null,this__87351.keys);
var new_strobj__87354 = goog.object.clone.call(null,this__87351.strobj);

new_keys__87353.splice(cljs.core.scan_array.call(null,1,k,new_keys__87353),1);
cljs.core.js_delete.call(null,new_strobj__87354,k);
return (new cljs.core.ObjMap(this__87351.meta,new_keys__87353,new_strobj__87354));
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
var this__87364 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__87402 = null;
var G__87402__87403 = (function (coll,k){
var this__87365 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__87402__87404 = (function (coll,k,not_found){
var this__87366 = this;
var bucket__87367 = (this__87366.hashobj[cljs.core.hash.call(null,k)]);
var i__87368 = (cljs.core.truth_(bucket__87367)?cljs.core.scan_array.call(null,2,k,bucket__87367):null);

if(cljs.core.truth_(i__87368))
{return (bucket__87367[(i__87368 + 1)]);
} else
{return not_found;
}
});
G__87402 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__87402__87403.call(this,coll,k);
case  3 :
return G__87402__87404.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87402;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__87369 = this;
var h__87370 = cljs.core.hash.call(null,k);
var bucket__87371 = (this__87369.hashobj[h__87370]);

if(cljs.core.truth_(bucket__87371))
{var new_bucket__87372 = cljs.core.aclone.call(null,bucket__87371);
var new_hashobj__87373 = goog.object.clone.call(null,this__87369.hashobj);

(new_hashobj__87373[h__87370] = new_bucket__87372);
var temp__3695__auto____87374 = cljs.core.scan_array.call(null,2,k,new_bucket__87372);

if(cljs.core.truth_(temp__3695__auto____87374))
{var i__87375 = temp__3695__auto____87374;

(new_bucket__87372[(i__87375 + 1)] = v);
return (new cljs.core.HashMap(this__87369.meta,this__87369.count,new_hashobj__87373));
} else
{new_bucket__87372.push(k,v);
return (new cljs.core.HashMap(this__87369.meta,(this__87369.count + 1),new_hashobj__87373));
}
} else
{var new_hashobj__87376 = goog.object.clone.call(null,this__87369.hashobj);

(new_hashobj__87376[h__87370] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__87369.meta,(this__87369.count + 1),new_hashobj__87376));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__87377 = this;
var bucket__87378 = (this__87377.hashobj[cljs.core.hash.call(null,k)]);
var i__87379 = (cljs.core.truth_(bucket__87378)?cljs.core.scan_array.call(null,2,k,bucket__87378):null);

if(cljs.core.truth_(i__87379))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__87406 = null;
var G__87406__87407 = (function (tsym87380,k){
var this__87382 = this;
var tsym87380__87383 = this;

var coll__87384 = tsym87380__87383;

return cljs.core._lookup.call(null,coll__87384,k);
});
var G__87406__87408 = (function (tsym87381,k,not_found){
var this__87385 = this;
var tsym87381__87386 = this;

var coll__87387 = tsym87381__87386;

return cljs.core._lookup.call(null,coll__87387,k,not_found);
});
G__87406 = function(tsym87381,k,not_found){
switch(arguments.length){
case  2 :
return G__87406__87407.call(this,tsym87381,k);
case  3 :
return G__87406__87408.call(this,tsym87381,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87406;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__87388 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__87389 = this;
if(cljs.core.truth_((this__87389.count > 0)))
{var hashes__87390 = cljs.core.js_keys.call(null,this__87389.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__87363_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__87389.hashobj[p1__87363_SHARP_])));
}),hashes__87390);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__87391 = this;
return this__87391.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87392 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__87393 = this;
return (new cljs.core.HashMap(meta,this__87393.count,this__87393.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__87394 = this;
return this__87394.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__87395 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__87395.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__87396 = this;
var h__87397 = cljs.core.hash.call(null,k);
var bucket__87398 = (this__87396.hashobj[h__87397]);
var i__87399 = (cljs.core.truth_(bucket__87398)?cljs.core.scan_array.call(null,2,k,bucket__87398):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__87399)))
{return coll;
} else
{var new_hashobj__87400 = goog.object.clone.call(null,this__87396.hashobj);

if(cljs.core.truth_((3 > bucket__87398.length)))
{cljs.core.js_delete.call(null,new_hashobj__87400,h__87397);
} else
{var new_bucket__87401 = cljs.core.aclone.call(null,bucket__87398);

new_bucket__87401.splice(i__87399,2);
(new_hashobj__87400[h__87397] = new_bucket__87401);
}
return (new cljs.core.HashMap(this__87396.meta,(this__87396.count - 1),new_hashobj__87400));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__87410 = ks.length;

var i__87411 = 0;
var out__87412 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__87411 < len__87410)))
{{
var G__87413 = (i__87411 + 1);
var G__87414 = cljs.core.assoc.call(null,out__87412,(ks[i__87411]),(vs[i__87411]));
i__87411 = G__87413;
out__87412 = G__87414;
continue;
}
} else
{return out__87412;
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
var in$__87415 = cljs.core.seq.call(null,keyvals);
var out__87416 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__87415))
{{
var G__87417 = cljs.core.nnext.call(null,in$__87415);
var G__87418 = cljs.core.assoc.call(null,out__87416,cljs.core.first.call(null,in$__87415),cljs.core.second.call(null,in$__87415));
in$__87415 = G__87417;
out__87416 = G__87418;
continue;
}
} else
{return out__87416;
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
hash_map.cljs$lang$applyTo = (function (arglist__87419){
var keyvals = cljs.core.seq( arglist__87419 );;
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
{return cljs.core.reduce.call(null,(function (p1__87420_SHARP_,p2__87421_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____87422 = p1__87420_SHARP_;

if(cljs.core.truth_(or__3548__auto____87422))
{return or__3548__auto____87422;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__87421_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__87423){
var maps = cljs.core.seq( arglist__87423 );;
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
{var merge_entry__87426 = (function (m,e){
var k__87424 = cljs.core.first.call(null,e);
var v__87425 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__87424)))
{return cljs.core.assoc.call(null,m,k__87424,f.call(null,cljs.core.get.call(null,m,k__87424),v__87425));
} else
{return cljs.core.assoc.call(null,m,k__87424,v__87425);
}
});
var merge2__87428 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__87426,(function (){var or__3548__auto____87427 = m1;

if(cljs.core.truth_(or__3548__auto____87427))
{return or__3548__auto____87427;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__87428,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__87429){
var f = cljs.core.first(arglist__87429);
var maps = cljs.core.rest(arglist__87429);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__87431 = cljs.core.ObjMap.fromObject([],{});
var keys__87432 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__87432))
{var key__87433 = cljs.core.first.call(null,keys__87432);
var entry__87434 = cljs.core.get.call(null,map,key__87433,"\uFDD0'user/not-found");

{
var G__87435 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__87434,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__87431,key__87433,entry__87434):ret__87431);
var G__87436 = cljs.core.next.call(null,keys__87432);
ret__87431 = G__87435;
keys__87432 = G__87436;
continue;
}
} else
{return ret__87431;
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
var this__87437 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__87458 = null;
var G__87458__87459 = (function (coll,v){
var this__87438 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__87458__87460 = (function (coll,v,not_found){
var this__87439 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__87439.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__87458 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__87458__87459.call(this,coll,v);
case  3 :
return G__87458__87460.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87458;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__87462 = null;
var G__87462__87463 = (function (tsym87440,k){
var this__87442 = this;
var tsym87440__87443 = this;

var coll__87444 = tsym87440__87443;

return cljs.core._lookup.call(null,coll__87444,k);
});
var G__87462__87464 = (function (tsym87441,k,not_found){
var this__87445 = this;
var tsym87441__87446 = this;

var coll__87447 = tsym87441__87446;

return cljs.core._lookup.call(null,coll__87447,k,not_found);
});
G__87462 = function(tsym87441,k,not_found){
switch(arguments.length){
case  2 :
return G__87462__87463.call(this,tsym87441,k);
case  3 :
return G__87462__87464.call(this,tsym87441,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87462;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__87448 = this;
return (new cljs.core.Set(this__87448.meta,cljs.core.assoc.call(null,this__87448.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__87449 = this;
return cljs.core.keys.call(null,this__87449.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__87450 = this;
return (new cljs.core.Set(this__87450.meta,cljs.core.dissoc.call(null,this__87450.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__87451 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__87452 = this;
var and__3546__auto____87453 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____87453))
{var and__3546__auto____87454 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____87454))
{return cljs.core.every_QMARK_.call(null,(function (p1__87430_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__87430_SHARP_);
}),other);
} else
{return and__3546__auto____87454;
}
} else
{return and__3546__auto____87453;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__87455 = this;
return (new cljs.core.Set(meta,this__87455.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__87456 = this;
return this__87456.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__87457 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__87457.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__87467 = cljs.core.seq.call(null,coll);
var out__87468 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__87467))))
{{
var G__87469 = cljs.core.rest.call(null,in$__87467);
var G__87470 = cljs.core.conj.call(null,out__87468,cljs.core.first.call(null,in$__87467));
in$__87467 = G__87469;
out__87468 = G__87470;
continue;
}
} else
{return out__87468;
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
{var n__87471 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____87472 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____87472))
{var e__87473 = temp__3695__auto____87472;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__87473));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__87471,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__87466_SHARP_){
var temp__3695__auto____87474 = cljs.core.find.call(null,smap,p1__87466_SHARP_);

if(cljs.core.truth_(temp__3695__auto____87474))
{var e__87475 = temp__3695__auto____87474;

return cljs.core.second.call(null,e__87475);
} else
{return p1__87466_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__87483 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__87476,seen){
while(true){
var vec__87477__87478 = p__87476;
var f__87479 = cljs.core.nth.call(null,vec__87477__87478,0,null);
var xs__87480 = vec__87477__87478;

var temp__3698__auto____87481 = cljs.core.seq.call(null,xs__87480);

if(cljs.core.truth_(temp__3698__auto____87481))
{var s__87482 = temp__3698__auto____87481;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__87479)))
{{
var G__87484 = cljs.core.rest.call(null,s__87482);
var G__87485 = seen;
p__87476 = G__87484;
seen = G__87485;
continue;
}
} else
{return cljs.core.cons.call(null,f__87479,step.call(null,cljs.core.rest.call(null,s__87482),cljs.core.conj.call(null,seen,f__87479)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__87483.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__87486 = cljs.core.Vector.fromArray([]);
var s__87487 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__87487)))
{{
var G__87488 = cljs.core.conj.call(null,ret__87486,cljs.core.first.call(null,s__87487));
var G__87489 = cljs.core.next.call(null,s__87487);
ret__87486 = G__87488;
s__87487 = G__87489;
continue;
}
} else
{return cljs.core.seq.call(null,ret__87486);
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
{if(cljs.core.truth_((function (){var or__3548__auto____87490 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____87490))
{return or__3548__auto____87490;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__87491 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__87491 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__87491 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____87492 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____87492))
{return or__3548__auto____87492;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__87493 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__87493 > -1)))
{return cljs.core.subs.call(null,x,2,i__87493);
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
var map__87496 = cljs.core.ObjMap.fromObject([],{});
var ks__87497 = cljs.core.seq.call(null,keys);
var vs__87498 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____87499 = ks__87497;

if(cljs.core.truth_(and__3546__auto____87499))
{return vs__87498;
} else
{return and__3546__auto____87499;
}
})()))
{{
var G__87500 = cljs.core.assoc.call(null,map__87496,cljs.core.first.call(null,ks__87497),cljs.core.first.call(null,vs__87498));
var G__87501 = cljs.core.next.call(null,ks__87497);
var G__87502 = cljs.core.next.call(null,vs__87498);
map__87496 = G__87500;
ks__87497 = G__87501;
vs__87498 = G__87502;
continue;
}
} else
{return map__87496;
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
var max_key__87505 = (function (k,x){
return x;
});
var max_key__87506 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__87507 = (function() { 
var G__87509__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__87494_SHARP_,p2__87495_SHARP_){
return max_key.call(null,k,p1__87494_SHARP_,p2__87495_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__87509 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87509__delegate.call(this, k, x, y, more);
};
G__87509.cljs$lang$maxFixedArity = 3;
G__87509.cljs$lang$applyTo = (function (arglist__87510){
var k = cljs.core.first(arglist__87510);
var x = cljs.core.first(cljs.core.next(arglist__87510));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87510)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87510)));
return G__87509__delegate.call(this, k, x, y, more);
});
return G__87509;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__87505.call(this,k,x);
case  3 :
return max_key__87506.call(this,k,x,y);
default:
return max_key__87507.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__87507.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__87511 = (function (k,x){
return x;
});
var min_key__87512 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__87513 = (function() { 
var G__87515__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__87503_SHARP_,p2__87504_SHARP_){
return min_key.call(null,k,p1__87503_SHARP_,p2__87504_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__87515 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87515__delegate.call(this, k, x, y, more);
};
G__87515.cljs$lang$maxFixedArity = 3;
G__87515.cljs$lang$applyTo = (function (arglist__87516){
var k = cljs.core.first(arglist__87516);
var x = cljs.core.first(cljs.core.next(arglist__87516));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87516)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87516)));
return G__87515__delegate.call(this, k, x, y, more);
});
return G__87515;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__87511.call(this,k,x);
case  3 :
return min_key__87512.call(this,k,x,y);
default:
return min_key__87513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__87513.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__87519 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__87520 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____87517 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87517))
{var s__87518 = temp__3698__auto____87517;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__87518),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__87518)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__87519.call(this,n,step);
case  3 :
return partition_all__87520.call(this,n,step,coll);
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
var temp__3698__auto____87522 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87522))
{var s__87523 = temp__3698__auto____87522;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__87523))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__87523),take_while.call(null,pred,cljs.core.rest.call(null,s__87523)));
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
var this__87524 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__87525 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__87541 = null;
var G__87541__87542 = (function (rng,f){
var this__87526 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__87541__87543 = (function (rng,f,s){
var this__87527 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__87541 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__87541__87542.call(this,rng,f);
case  3 :
return G__87541__87543.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87541;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__87528 = this;
var comp__87529 = (cljs.core.truth_((this__87528.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__87529.call(null,this__87528.start,this__87528.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__87530 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__87530.end - this__87530.start) / this__87530.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__87531 = this;
return this__87531.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__87532 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__87532.meta,(this__87532.start + this__87532.step),this__87532.end,this__87532.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__87533 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__87534 = this;
return (new cljs.core.Range(meta,this__87534.start,this__87534.end,this__87534.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__87535 = this;
return this__87535.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__87545 = null;
var G__87545__87546 = (function (rng,n){
var this__87536 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__87536.start + (n * this__87536.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____87537 = (this__87536.start > this__87536.end);

if(cljs.core.truth_(and__3546__auto____87537))
{return cljs.core._EQ_.call(null,this__87536.step,0);
} else
{return and__3546__auto____87537;
}
})()))
{return this__87536.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__87545__87547 = (function (rng,n,not_found){
var this__87538 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__87538.start + (n * this__87538.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____87539 = (this__87538.start > this__87538.end);

if(cljs.core.truth_(and__3546__auto____87539))
{return cljs.core._EQ_.call(null,this__87538.step,0);
} else
{return and__3546__auto____87539;
}
})()))
{return this__87538.start;
} else
{return not_found;
}
}
});
G__87545 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__87545__87546.call(this,rng,n);
case  3 :
return G__87545__87547.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87545;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__87540 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__87540.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__87549 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__87550 = (function (end){
return range.call(null,0,end,1);
});
var range__87551 = (function (start,end){
return range.call(null,start,end,1);
});
var range__87552 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__87549.call(this);
case  1 :
return range__87550.call(this,start);
case  2 :
return range__87551.call(this,start,end);
case  3 :
return range__87552.call(this,start,end,step);
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
var temp__3698__auto____87554 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87554))
{var s__87555 = temp__3698__auto____87554;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__87555),take_nth.call(null,n,cljs.core.drop.call(null,n,s__87555)));
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
var temp__3698__auto____87557 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87557))
{var s__87558 = temp__3698__auto____87557;

var fst__87559 = cljs.core.first.call(null,s__87558);
var fv__87560 = f.call(null,fst__87559);
var run__87561 = cljs.core.cons.call(null,fst__87559,cljs.core.take_while.call(null,(function (p1__87556_SHARP_){
return cljs.core._EQ_.call(null,fv__87560,f.call(null,p1__87556_SHARP_));
}),cljs.core.next.call(null,s__87558)));

return cljs.core.cons.call(null,run__87561,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__87561),s__87558))));
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
var reductions__87576 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____87572 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____87572))
{var s__87573 = temp__3695__auto____87572;

return reductions.call(null,f,cljs.core.first.call(null,s__87573),cljs.core.rest.call(null,s__87573));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__87577 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____87574 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____87574))
{var s__87575 = temp__3698__auto____87574;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__87575)),cljs.core.rest.call(null,s__87575));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__87576.call(this,f,init);
case  3 :
return reductions__87577.call(this,f,init,coll);
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
var juxt__87580 = (function (f){
return (function() {
var G__87585 = null;
var G__87585__87586 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__87585__87587 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__87585__87588 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__87585__87589 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__87585__87590 = (function() { 
var G__87592__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__87592 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87592__delegate.call(this, x, y, z, args);
};
G__87592.cljs$lang$maxFixedArity = 3;
G__87592.cljs$lang$applyTo = (function (arglist__87593){
var x = cljs.core.first(arglist__87593);
var y = cljs.core.first(cljs.core.next(arglist__87593));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87593)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87593)));
return G__87592__delegate.call(this, x, y, z, args);
});
return G__87592;
})()
;
G__87585 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__87585__87586.call(this);
case  1 :
return G__87585__87587.call(this,x);
case  2 :
return G__87585__87588.call(this,x,y);
case  3 :
return G__87585__87589.call(this,x,y,z);
default:
return G__87585__87590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__87585.cljs$lang$maxFixedArity = 3;
G__87585.cljs$lang$applyTo = G__87585__87590.cljs$lang$applyTo;
return G__87585;
})()
});
var juxt__87581 = (function (f,g){
return (function() {
var G__87594 = null;
var G__87594__87595 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__87594__87596 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__87594__87597 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__87594__87598 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__87594__87599 = (function() { 
var G__87601__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__87601 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87601__delegate.call(this, x, y, z, args);
};
G__87601.cljs$lang$maxFixedArity = 3;
G__87601.cljs$lang$applyTo = (function (arglist__87602){
var x = cljs.core.first(arglist__87602);
var y = cljs.core.first(cljs.core.next(arglist__87602));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87602)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87602)));
return G__87601__delegate.call(this, x, y, z, args);
});
return G__87601;
})()
;
G__87594 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__87594__87595.call(this);
case  1 :
return G__87594__87596.call(this,x);
case  2 :
return G__87594__87597.call(this,x,y);
case  3 :
return G__87594__87598.call(this,x,y,z);
default:
return G__87594__87599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__87594.cljs$lang$maxFixedArity = 3;
G__87594.cljs$lang$applyTo = G__87594__87599.cljs$lang$applyTo;
return G__87594;
})()
});
var juxt__87582 = (function (f,g,h){
return (function() {
var G__87603 = null;
var G__87603__87604 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__87603__87605 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__87603__87606 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__87603__87607 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__87603__87608 = (function() { 
var G__87610__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__87610 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87610__delegate.call(this, x, y, z, args);
};
G__87610.cljs$lang$maxFixedArity = 3;
G__87610.cljs$lang$applyTo = (function (arglist__87611){
var x = cljs.core.first(arglist__87611);
var y = cljs.core.first(cljs.core.next(arglist__87611));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87611)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87611)));
return G__87610__delegate.call(this, x, y, z, args);
});
return G__87610;
})()
;
G__87603 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__87603__87604.call(this);
case  1 :
return G__87603__87605.call(this,x);
case  2 :
return G__87603__87606.call(this,x,y);
case  3 :
return G__87603__87607.call(this,x,y,z);
default:
return G__87603__87608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__87603.cljs$lang$maxFixedArity = 3;
G__87603.cljs$lang$applyTo = G__87603__87608.cljs$lang$applyTo;
return G__87603;
})()
});
var juxt__87583 = (function() { 
var G__87612__delegate = function (f,g,h,fs){
var fs__87579 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__87613 = null;
var G__87613__87614 = (function (){
return cljs.core.reduce.call(null,(function (p1__87562_SHARP_,p2__87563_SHARP_){
return cljs.core.conj.call(null,p1__87562_SHARP_,p2__87563_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__87579);
});
var G__87613__87615 = (function (x){
return cljs.core.reduce.call(null,(function (p1__87564_SHARP_,p2__87565_SHARP_){
return cljs.core.conj.call(null,p1__87564_SHARP_,p2__87565_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__87579);
});
var G__87613__87616 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__87566_SHARP_,p2__87567_SHARP_){
return cljs.core.conj.call(null,p1__87566_SHARP_,p2__87567_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__87579);
});
var G__87613__87617 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__87568_SHARP_,p2__87569_SHARP_){
return cljs.core.conj.call(null,p1__87568_SHARP_,p2__87569_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__87579);
});
var G__87613__87618 = (function() { 
var G__87620__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__87570_SHARP_,p2__87571_SHARP_){
return cljs.core.conj.call(null,p1__87570_SHARP_,cljs.core.apply.call(null,p2__87571_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__87579);
};
var G__87620 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87620__delegate.call(this, x, y, z, args);
};
G__87620.cljs$lang$maxFixedArity = 3;
G__87620.cljs$lang$applyTo = (function (arglist__87621){
var x = cljs.core.first(arglist__87621);
var y = cljs.core.first(cljs.core.next(arglist__87621));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87621)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87621)));
return G__87620__delegate.call(this, x, y, z, args);
});
return G__87620;
})()
;
G__87613 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__87613__87614.call(this);
case  1 :
return G__87613__87615.call(this,x);
case  2 :
return G__87613__87616.call(this,x,y);
case  3 :
return G__87613__87617.call(this,x,y,z);
default:
return G__87613__87618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__87613.cljs$lang$maxFixedArity = 3;
G__87613.cljs$lang$applyTo = G__87613__87618.cljs$lang$applyTo;
return G__87613;
})()
};
var G__87612 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__87612__delegate.call(this, f, g, h, fs);
};
G__87612.cljs$lang$maxFixedArity = 3;
G__87612.cljs$lang$applyTo = (function (arglist__87622){
var f = cljs.core.first(arglist__87622);
var g = cljs.core.first(cljs.core.next(arglist__87622));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87622)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__87622)));
return G__87612__delegate.call(this, f, g, h, fs);
});
return G__87612;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__87580.call(this,f);
case  2 :
return juxt__87581.call(this,f,g);
case  3 :
return juxt__87582.call(this,f,g,h);
default:
return juxt__87583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__87583.cljs$lang$applyTo;
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
var dorun__87624 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__87627 = cljs.core.next.call(null,coll);
coll = G__87627;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__87625 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____87623 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____87623))
{return (n > 0);
} else
{return and__3546__auto____87623;
}
})()))
{{
var G__87628 = (n - 1);
var G__87629 = cljs.core.next.call(null,coll);
n = G__87628;
coll = G__87629;
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
return dorun__87624.call(this,n);
case  2 :
return dorun__87625.call(this,n,coll);
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
var doall__87630 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__87631 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__87630.call(this,n);
case  2 :
return doall__87631.call(this,n,coll);
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
var matches__87633 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__87633),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__87633),1)))
{return cljs.core.first.call(null,matches__87633);
} else
{return cljs.core.vec.call(null,matches__87633);
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
var matches__87634 = re.exec(s);

if(cljs.core.truth_((matches__87634 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__87634),1)))
{return cljs.core.first.call(null,matches__87634);
} else
{return cljs.core.vec.call(null,matches__87634);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__87635 = cljs.core.re_find.call(null,re,s);
var match_idx__87636 = s.search(re);
var match_str__87637 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__87635))?cljs.core.first.call(null,match_data__87635):match_data__87635);
var post_match__87638 = cljs.core.subs.call(null,s,(match_idx__87636 + cljs.core.count.call(null,match_str__87637)));

if(cljs.core.truth_(match_data__87635))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__87635,re_seq.call(null,re,post_match__87638));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__87640__87641 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___87642 = cljs.core.nth.call(null,vec__87640__87641,0,null);
var flags__87643 = cljs.core.nth.call(null,vec__87640__87641,1,null);
var pattern__87644 = cljs.core.nth.call(null,vec__87640__87641,2,null);

return (new RegExp(pattern__87644,flags__87643));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__87639_SHARP_){
return print_one.call(null,p1__87639_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____87645 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____87645))
{var and__3546__auto____87649 = (function (){var x__450__auto____87646 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____87647 = x__450__auto____87646;

if(cljs.core.truth_(and__3546__auto____87647))
{var and__3546__auto____87648 = x__450__auto____87646.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____87648))
{return cljs.core.not.call(null,x__450__auto____87646.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____87648;
}
} else
{return and__3546__auto____87647;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____87646);
}
})();

if(cljs.core.truth_(and__3546__auto____87649))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____87649;
}
} else
{return and__3546__auto____87645;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____87650 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____87651 = x__450__auto____87650;

if(cljs.core.truth_(and__3546__auto____87651))
{var and__3546__auto____87652 = x__450__auto____87650.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____87652))
{return cljs.core.not.call(null,x__450__auto____87650.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____87652;
}
} else
{return and__3546__auto____87651;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____87650);
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
var first_obj__87653 = cljs.core.first.call(null,objs);
var sb__87654 = (new goog.string.StringBuffer());

var G__87655__87656 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__87655__87656))
{var obj__87657 = cljs.core.first.call(null,G__87655__87656);
var G__87655__87658 = G__87655__87656;

while(true){
if(cljs.core.truth_((obj__87657 === first_obj__87653)))
{} else
{sb__87654.append(" ");
}
var G__87659__87660 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__87657,opts));

if(cljs.core.truth_(G__87659__87660))
{var string__87661 = cljs.core.first.call(null,G__87659__87660);
var G__87659__87662 = G__87659__87660;

while(true){
sb__87654.append(string__87661);
var temp__3698__auto____87663 = cljs.core.next.call(null,G__87659__87662);

if(cljs.core.truth_(temp__3698__auto____87663))
{var G__87659__87664 = temp__3698__auto____87663;

{
var G__87667 = cljs.core.first.call(null,G__87659__87664);
var G__87668 = G__87659__87664;
string__87661 = G__87667;
G__87659__87662 = G__87668;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____87665 = cljs.core.next.call(null,G__87655__87658);

if(cljs.core.truth_(temp__3698__auto____87665))
{var G__87655__87666 = temp__3698__auto____87665;

{
var G__87669 = cljs.core.first.call(null,G__87655__87666);
var G__87670 = G__87655__87666;
obj__87657 = G__87669;
G__87655__87658 = G__87670;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__87654);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__87671 = cljs.core.first.call(null,objs);

var G__87672__87673 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__87672__87673))
{var obj__87674 = cljs.core.first.call(null,G__87672__87673);
var G__87672__87675 = G__87672__87673;

while(true){
if(cljs.core.truth_((obj__87674 === first_obj__87671)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__87676__87677 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__87674,opts));

if(cljs.core.truth_(G__87676__87677))
{var string__87678 = cljs.core.first.call(null,G__87676__87677);
var G__87676__87679 = G__87676__87677;

while(true){
cljs.core.string_print.call(null,string__87678);
var temp__3698__auto____87680 = cljs.core.next.call(null,G__87676__87679);

if(cljs.core.truth_(temp__3698__auto____87680))
{var G__87676__87681 = temp__3698__auto____87680;

{
var G__87684 = cljs.core.first.call(null,G__87676__87681);
var G__87685 = G__87676__87681;
string__87678 = G__87684;
G__87676__87679 = G__87685;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____87682 = cljs.core.next.call(null,G__87672__87675);

if(cljs.core.truth_(temp__3698__auto____87682))
{var G__87672__87683 = temp__3698__auto____87682;

{
var G__87686 = cljs.core.first.call(null,G__87672__87683);
var G__87687 = G__87672__87683;
obj__87674 = G__87686;
G__87672__87675 = G__87687;
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
pr_str.cljs$lang$applyTo = (function (arglist__87688){
var objs = cljs.core.seq( arglist__87688 );;
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
pr.cljs$lang$applyTo = (function (arglist__87689){
var objs = cljs.core.seq( arglist__87689 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__87690){
var objs = cljs.core.seq( arglist__87690 );;
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
println.cljs$lang$applyTo = (function (arglist__87691){
var objs = cljs.core.seq( arglist__87691 );;
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
prn.cljs$lang$applyTo = (function (arglist__87692){
var objs = cljs.core.seq( arglist__87692 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__87693 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__87693,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____87694 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____87694))
{var nspc__87695 = temp__3698__auto____87694;

return cljs.core.str.call(null,nspc__87695,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____87696 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____87696))
{var nspc__87697 = temp__3698__auto____87696;

return cljs.core.str.call(null,nspc__87697,"\/");
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
var pr_pair__87698 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__87698,"{",", ","}",opts,coll);
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
var this__87699 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__87700 = this;
var G__87701__87702 = cljs.core.seq.call(null,this__87700.watches);

if(cljs.core.truth_(G__87701__87702))
{var G__87704__87706 = cljs.core.first.call(null,G__87701__87702);
var vec__87705__87707 = G__87704__87706;
var key__87708 = cljs.core.nth.call(null,vec__87705__87707,0,null);
var f__87709 = cljs.core.nth.call(null,vec__87705__87707,1,null);
var G__87701__87710 = G__87701__87702;

var G__87704__87711 = G__87704__87706;
var G__87701__87712 = G__87701__87710;

while(true){
var vec__87713__87714 = G__87704__87711;
var key__87715 = cljs.core.nth.call(null,vec__87713__87714,0,null);
var f__87716 = cljs.core.nth.call(null,vec__87713__87714,1,null);
var G__87701__87717 = G__87701__87712;

f__87716.call(null,key__87715,this$,oldval,newval);
var temp__3698__auto____87718 = cljs.core.next.call(null,G__87701__87717);

if(cljs.core.truth_(temp__3698__auto____87718))
{var G__87701__87719 = temp__3698__auto____87718;

{
var G__87726 = cljs.core.first.call(null,G__87701__87719);
var G__87727 = G__87701__87719;
G__87704__87711 = G__87726;
G__87701__87712 = G__87727;
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
var this__87720 = this;
return this$.watches = cljs.core.assoc.call(null,this__87720.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__87721 = this;
return this$.watches = cljs.core.dissoc.call(null,this__87721.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__87722 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__87722.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__87723 = this;
return this__87723.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__87724 = this;
return this__87724.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__87725 = this;
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
var atom__87734 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__87735 = (function() { 
var G__87737__delegate = function (x,p__87728){
var map__87729__87730 = p__87728;
var map__87729__87731 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__87729__87730))?cljs.core.apply.call(null,cljs.core.hash_map,map__87729__87730):map__87729__87730);
var validator__87732 = cljs.core.get.call(null,map__87729__87731,"\uFDD0'validator");
var meta__87733 = cljs.core.get.call(null,map__87729__87731,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__87733,validator__87732,null));
};
var G__87737 = function (x,var_args){
var p__87728 = null;
if (goog.isDef(var_args)) {
  p__87728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__87737__delegate.call(this, x, p__87728);
};
G__87737.cljs$lang$maxFixedArity = 1;
G__87737.cljs$lang$applyTo = (function (arglist__87738){
var x = cljs.core.first(arglist__87738);
var p__87728 = cljs.core.rest(arglist__87738);
return G__87737__delegate.call(this, x, p__87728);
});
return G__87737;
})()
;
atom = function(x,var_args){
var p__87728 = var_args;
switch(arguments.length){
case  1 :
return atom__87734.call(this,x);
default:
return atom__87735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__87735.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____87739 = a.validator;

if(cljs.core.truth_(temp__3698__auto____87739))
{var validate__87740 = temp__3698__auto____87739;

if(cljs.core.truth_(validate__87740.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__87741 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__87741,new_value);
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
var swap_BANG___87742 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___87743 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___87744 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___87745 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___87746 = (function() { 
var G__87748__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__87748 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__87748__delegate.call(this, a, f, x, y, z, more);
};
G__87748.cljs$lang$maxFixedArity = 5;
G__87748.cljs$lang$applyTo = (function (arglist__87749){
var a = cljs.core.first(arglist__87749);
var f = cljs.core.first(cljs.core.next(arglist__87749));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__87749)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__87749))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__87749)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__87749)))));
return G__87748__delegate.call(this, a, f, x, y, z, more);
});
return G__87748;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___87742.call(this,a,f);
case  3 :
return swap_BANG___87743.call(this,a,f,x);
case  4 :
return swap_BANG___87744.call(this,a,f,x,y);
case  5 :
return swap_BANG___87745.call(this,a,f,x,y,z);
default:
return swap_BANG___87746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___87746.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__87750){
var iref = cljs.core.first(arglist__87750);
var f = cljs.core.first(cljs.core.next(arglist__87750));
var args = cljs.core.rest(cljs.core.next(arglist__87750));
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
var gensym__87751 = (function (){
return gensym.call(null,"G__");
});
var gensym__87752 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__87751.call(this);
case  1 :
return gensym__87752.call(this,prefix_string);
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
var this__87754 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__87754.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__87755 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__87755.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__87755.state,this__87755.f);
}
return cljs.core.deref.call(null,this__87755.state);
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
delay.cljs$lang$applyTo = (function (arglist__87756){
var body = cljs.core.seq( arglist__87756 );;
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
var map__87757__87758 = options;
var map__87757__87759 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__87757__87758))?cljs.core.apply.call(null,cljs.core.hash_map,map__87757__87758):map__87757__87758);
var keywordize_keys__87760 = cljs.core.get.call(null,map__87757__87759,"\uFDD0'keywordize-keys");
var keyfn__87761 = (cljs.core.truth_(keywordize_keys__87760)?cljs.core.keyword:cljs.core.str);
var f__87767 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____87766 = (function iter__87762(s__87763){
return (new cljs.core.LazySeq(null,false,(function (){
var s__87763__87764 = s__87763;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__87763__87764)))
{var k__87765 = cljs.core.first.call(null,s__87763__87764);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__87761.call(null,k__87765),thisfn.call(null,(x[k__87765]))]),iter__87762.call(null,cljs.core.rest.call(null,s__87763__87764)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____87766.call(null,cljs.core.js_keys.call(null,x));
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

return f__87767.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__87768){
var x = cljs.core.first(arglist__87768);
var options = cljs.core.rest(arglist__87768);
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
var mem__87769 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__87773__delegate = function (args){
var temp__3695__auto____87770 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__87769),args);

if(cljs.core.truth_(temp__3695__auto____87770))
{var v__87771 = temp__3695__auto____87770;

return v__87771;
} else
{var ret__87772 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__87769,cljs.core.assoc,args,ret__87772);
return ret__87772;
}
};
var G__87773 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__87773__delegate.call(this, args);
};
G__87773.cljs$lang$maxFixedArity = 0;
G__87773.cljs$lang$applyTo = (function (arglist__87774){
var args = cljs.core.seq( arglist__87774 );;
return G__87773__delegate.call(this, args);
});
return G__87773;
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
var trampoline__87776 = (function (f){
while(true){
var ret__87775 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__87775)))
{{
var G__87779 = ret__87775;
f = G__87779;
continue;
}
} else
{return ret__87775;
}
break;
}
});
var trampoline__87777 = (function() { 
var G__87780__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__87780 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__87780__delegate.call(this, f, args);
};
G__87780.cljs$lang$maxFixedArity = 1;
G__87780.cljs$lang$applyTo = (function (arglist__87781){
var f = cljs.core.first(arglist__87781);
var args = cljs.core.rest(arglist__87781);
return G__87780__delegate.call(this, f, args);
});
return G__87780;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__87776.call(this,f);
default:
return trampoline__87777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__87777.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__87782 = (function (){
return rand.call(null,1);
});
var rand__87783 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__87782.call(this);
case  1 :
return rand__87783.call(this,n);
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
var k__87785 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__87785,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__87785,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___87794 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___87795 = (function (h,child,parent){
var or__3548__auto____87786 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____87786))
{return or__3548__auto____87786;
} else
{var or__3548__auto____87787 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____87787))
{return or__3548__auto____87787;
} else
{var and__3546__auto____87788 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____87788))
{var and__3546__auto____87789 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____87789))
{var and__3546__auto____87790 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____87790))
{var ret__87791 = true;
var i__87792 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____87793 = cljs.core.not.call(null,ret__87791);

if(cljs.core.truth_(or__3548__auto____87793))
{return or__3548__auto____87793;
} else
{return cljs.core._EQ_.call(null,i__87792,cljs.core.count.call(null,parent));
}
})()))
{return ret__87791;
} else
{{
var G__87797 = isa_QMARK_.call(null,h,child.call(null,i__87792),parent.call(null,i__87792));
var G__87798 = (i__87792 + 1);
ret__87791 = G__87797;
i__87792 = G__87798;
continue;
}
}
break;
}
} else
{return and__3546__auto____87790;
}
} else
{return and__3546__auto____87789;
}
} else
{return and__3546__auto____87788;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___87794.call(this,h,child);
case  3 :
return isa_QMARK___87795.call(this,h,child,parent);
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
var parents__87799 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__87800 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__87799.call(this,h);
case  2 :
return parents__87800.call(this,h,tag);
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
var ancestors__87802 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__87803 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__87802.call(this,h);
case  2 :
return ancestors__87803.call(this,h,tag);
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
var descendants__87805 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__87806 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__87805.call(this,h);
case  2 :
return descendants__87806.call(this,h,tag);
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
var derive__87816 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__87817 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__87811 = "\uFDD0'parents".call(null,h);
var td__87812 = "\uFDD0'descendants".call(null,h);
var ta__87813 = "\uFDD0'ancestors".call(null,h);
var tf__87814 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____87815 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__87811.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__87813.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__87813.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__87811,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__87814.call(null,"\uFDD0'ancestors".call(null,h),tag,td__87812,parent,ta__87813),"\uFDD0'descendants":tf__87814.call(null,"\uFDD0'descendants".call(null,h),parent,ta__87813,tag,td__87812)});
})());

if(cljs.core.truth_(or__3548__auto____87815))
{return or__3548__auto____87815;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__87816.call(this,h,tag);
case  3 :
return derive__87817.call(this,h,tag,parent);
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
var underive__87823 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__87824 = (function (h,tag,parent){
var parentMap__87819 = "\uFDD0'parents".call(null,h);
var childsParents__87820 = (cljs.core.truth_(parentMap__87819.call(null,tag))?cljs.core.disj.call(null,parentMap__87819.call(null,tag),parent):cljs.core.set([]));
var newParents__87821 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__87820))?cljs.core.assoc.call(null,parentMap__87819,tag,childsParents__87820):cljs.core.dissoc.call(null,parentMap__87819,tag));
var deriv_seq__87822 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__87808_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__87808_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__87808_SHARP_),cljs.core.second.call(null,p1__87808_SHARP_)));
}),cljs.core.seq.call(null,newParents__87821)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__87819.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__87809_SHARP_,p2__87810_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__87809_SHARP_,p2__87810_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__87822));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__87823.call(this,h,tag);
case  3 :
return underive__87824.call(this,h,tag,parent);
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
var xprefs__87826 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____87828 = (cljs.core.truth_((function (){var and__3546__auto____87827 = xprefs__87826;

if(cljs.core.truth_(and__3546__auto____87827))
{return xprefs__87826.call(null,y);
} else
{return and__3546__auto____87827;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____87828))
{return or__3548__auto____87828;
} else
{var or__3548__auto____87830 = (function (){var ps__87829 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__87829) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__87829),prefer_table)))
{} else
{}
{
var G__87833 = cljs.core.rest.call(null,ps__87829);
ps__87829 = G__87833;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____87830))
{return or__3548__auto____87830;
} else
{var or__3548__auto____87832 = (function (){var ps__87831 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__87831) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__87831),y,prefer_table)))
{} else
{}
{
var G__87834 = cljs.core.rest.call(null,ps__87831);
ps__87831 = G__87834;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____87832))
{return or__3548__auto____87832;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____87835 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____87835))
{return or__3548__auto____87835;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__87844 = cljs.core.reduce.call(null,(function (be,p__87836){
var vec__87837__87838 = p__87836;
var k__87839 = cljs.core.nth.call(null,vec__87837__87838,0,null);
var ___87840 = cljs.core.nth.call(null,vec__87837__87838,1,null);
var e__87841 = vec__87837__87838;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__87839)))
{var be2__87843 = (cljs.core.truth_((function (){var or__3548__auto____87842 = (be === null);

if(cljs.core.truth_(or__3548__auto____87842))
{return or__3548__auto____87842;
} else
{return cljs.core.dominates.call(null,k__87839,cljs.core.first.call(null,be),prefer_table);
}
})())?e__87841:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__87843),k__87839,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__87839," and ",cljs.core.first.call(null,be2__87843),", and neither is preferred")));
}
return be2__87843;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__87844))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__87844));
return cljs.core.second.call(null,best_entry__87844);
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
if(cljs.core.truth_((function (){var and__3546__auto____87845 = mf;

if(cljs.core.truth_(and__3546__auto____87845))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____87845;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____87846 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87846))
{return or__3548__auto____87846;
} else
{var or__3548__auto____87847 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____87847))
{return or__3548__auto____87847;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____87848 = mf;

if(cljs.core.truth_(and__3546__auto____87848))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____87848;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____87849 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87849))
{return or__3548__auto____87849;
} else
{var or__3548__auto____87850 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____87850))
{return or__3548__auto____87850;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____87851 = mf;

if(cljs.core.truth_(and__3546__auto____87851))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____87851;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____87852 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87852))
{return or__3548__auto____87852;
} else
{var or__3548__auto____87853 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____87853))
{return or__3548__auto____87853;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____87854 = mf;

if(cljs.core.truth_(and__3546__auto____87854))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____87854;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____87855 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87855))
{return or__3548__auto____87855;
} else
{var or__3548__auto____87856 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____87856))
{return or__3548__auto____87856;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____87857 = mf;

if(cljs.core.truth_(and__3546__auto____87857))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____87857;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____87858 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87858))
{return or__3548__auto____87858;
} else
{var or__3548__auto____87859 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____87859))
{return or__3548__auto____87859;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____87860 = mf;

if(cljs.core.truth_(and__3546__auto____87860))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____87860;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____87861 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87861))
{return or__3548__auto____87861;
} else
{var or__3548__auto____87862 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____87862))
{return or__3548__auto____87862;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____87863 = mf;

if(cljs.core.truth_(and__3546__auto____87863))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____87863;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____87864 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87864))
{return or__3548__auto____87864;
} else
{var or__3548__auto____87865 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____87865))
{return or__3548__auto____87865;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____87866 = mf;

if(cljs.core.truth_(and__3546__auto____87866))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____87866;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____87867 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____87867))
{return or__3548__auto____87867;
} else
{var or__3548__auto____87868 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____87868))
{return or__3548__auto____87868;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__87869 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__87870 = cljs.core._get_method.call(null,mf,dispatch_val__87869);

if(cljs.core.truth_(target_fn__87870))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__87869)));
}
return cljs.core.apply.call(null,target_fn__87870,args);
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
var this__87871 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__87872 = this;
cljs.core.swap_BANG_.call(null,this__87872.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__87872.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__87872.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__87872.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__87873 = this;
cljs.core.swap_BANG_.call(null,this__87873.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__87873.method_cache,this__87873.method_table,this__87873.cached_hierarchy,this__87873.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__87874 = this;
cljs.core.swap_BANG_.call(null,this__87874.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__87874.method_cache,this__87874.method_table,this__87874.cached_hierarchy,this__87874.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__87875 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__87875.cached_hierarchy),cljs.core.deref.call(null,this__87875.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__87875.method_cache,this__87875.method_table,this__87875.cached_hierarchy,this__87875.hierarchy);
}
var temp__3695__auto____87876 = cljs.core.deref.call(null,this__87875.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____87876))
{var target_fn__87877 = temp__3695__auto____87876;

return target_fn__87877;
} else
{var temp__3695__auto____87878 = cljs.core.find_and_cache_best_method.call(null,this__87875.name,dispatch_val,this__87875.hierarchy,this__87875.method_table,this__87875.prefer_table,this__87875.method_cache,this__87875.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____87878))
{var target_fn__87879 = temp__3695__auto____87878;

return target_fn__87879;
} else
{return cljs.core.deref.call(null,this__87875.method_table).call(null,this__87875.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__87880 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__87880.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__87880.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__87880.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__87880.method_cache,this__87880.method_table,this__87880.cached_hierarchy,this__87880.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__87881 = this;
return cljs.core.deref.call(null,this__87881.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__87882 = this;
return cljs.core.deref.call(null,this__87882.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__87883 = this;
return cljs.core.do_dispatch.call(null,mf,this__87883.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__87884__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__87884 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__87884__delegate.call(this, _, args);
};
G__87884.cljs$lang$maxFixedArity = 1;
G__87884.cljs$lang$applyTo = (function (arglist__87885){
var _ = cljs.core.first(arglist__87885);
var args = cljs.core.rest(arglist__87885);
return G__87884__delegate.call(this, _, args);
});
return G__87884;
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
