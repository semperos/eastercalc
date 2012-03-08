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
var or__3548__auto____34171 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____34171))
{return or__3548__auto____34171;
} else
{var or__3548__auto____34172 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____34172))
{return or__3548__auto____34172;
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
var _invoke__34236 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____34173 = this$;

if(cljs.core.truth_(and__3546__auto____34173))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34173;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____34174 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34174))
{return or__3548__auto____34174;
} else
{var or__3548__auto____34175 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34175))
{return or__3548__auto____34175;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__34237 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____34176 = this$;

if(cljs.core.truth_(and__3546__auto____34176))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34176;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____34177 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34177))
{return or__3548__auto____34177;
} else
{var or__3548__auto____34178 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34178))
{return or__3548__auto____34178;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__34238 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____34179 = this$;

if(cljs.core.truth_(and__3546__auto____34179))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34179;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____34180 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34180))
{return or__3548__auto____34180;
} else
{var or__3548__auto____34181 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34181))
{return or__3548__auto____34181;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__34239 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____34182 = this$;

if(cljs.core.truth_(and__3546__auto____34182))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34182;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____34183 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34183))
{return or__3548__auto____34183;
} else
{var or__3548__auto____34184 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34184))
{return or__3548__auto____34184;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__34240 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____34185 = this$;

if(cljs.core.truth_(and__3546__auto____34185))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34185;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____34186 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34186))
{return or__3548__auto____34186;
} else
{var or__3548__auto____34187 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34187))
{return or__3548__auto____34187;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__34241 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____34188 = this$;

if(cljs.core.truth_(and__3546__auto____34188))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34188;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____34189 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34189))
{return or__3548__auto____34189;
} else
{var or__3548__auto____34190 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34190))
{return or__3548__auto____34190;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__34242 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____34191 = this$;

if(cljs.core.truth_(and__3546__auto____34191))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34191;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____34192 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34192))
{return or__3548__auto____34192;
} else
{var or__3548__auto____34193 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34193))
{return or__3548__auto____34193;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__34243 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____34194 = this$;

if(cljs.core.truth_(and__3546__auto____34194))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34194;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____34195 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34195))
{return or__3548__auto____34195;
} else
{var or__3548__auto____34196 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34196))
{return or__3548__auto____34196;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__34244 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____34197 = this$;

if(cljs.core.truth_(and__3546__auto____34197))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34197;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____34198 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34198))
{return or__3548__auto____34198;
} else
{var or__3548__auto____34199 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34199))
{return or__3548__auto____34199;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__34245 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____34200 = this$;

if(cljs.core.truth_(and__3546__auto____34200))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34200;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____34201 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34201))
{return or__3548__auto____34201;
} else
{var or__3548__auto____34202 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34202))
{return or__3548__auto____34202;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__34246 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____34203 = this$;

if(cljs.core.truth_(and__3546__auto____34203))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34203;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____34204 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34204))
{return or__3548__auto____34204;
} else
{var or__3548__auto____34205 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34205))
{return or__3548__auto____34205;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__34247 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____34206 = this$;

if(cljs.core.truth_(and__3546__auto____34206))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34206;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____34207 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34207))
{return or__3548__auto____34207;
} else
{var or__3548__auto____34208 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34208))
{return or__3548__auto____34208;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__34248 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____34209 = this$;

if(cljs.core.truth_(and__3546__auto____34209))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34209;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____34210 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34210))
{return or__3548__auto____34210;
} else
{var or__3548__auto____34211 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34211))
{return or__3548__auto____34211;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__34249 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____34212 = this$;

if(cljs.core.truth_(and__3546__auto____34212))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34212;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____34213 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34213))
{return or__3548__auto____34213;
} else
{var or__3548__auto____34214 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34214))
{return or__3548__auto____34214;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__34250 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____34215 = this$;

if(cljs.core.truth_(and__3546__auto____34215))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34215;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____34216 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34216))
{return or__3548__auto____34216;
} else
{var or__3548__auto____34217 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34217))
{return or__3548__auto____34217;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__34251 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____34218 = this$;

if(cljs.core.truth_(and__3546__auto____34218))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34218;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____34219 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34219))
{return or__3548__auto____34219;
} else
{var or__3548__auto____34220 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34220))
{return or__3548__auto____34220;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__34252 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____34221 = this$;

if(cljs.core.truth_(and__3546__auto____34221))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34221;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____34222 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34222))
{return or__3548__auto____34222;
} else
{var or__3548__auto____34223 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34223))
{return or__3548__auto____34223;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__34253 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____34224 = this$;

if(cljs.core.truth_(and__3546__auto____34224))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34224;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____34225 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34225))
{return or__3548__auto____34225;
} else
{var or__3548__auto____34226 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34226))
{return or__3548__auto____34226;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__34254 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____34227 = this$;

if(cljs.core.truth_(and__3546__auto____34227))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34227;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____34228 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34228))
{return or__3548__auto____34228;
} else
{var or__3548__auto____34229 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34229))
{return or__3548__auto____34229;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__34255 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____34230 = this$;

if(cljs.core.truth_(and__3546__auto____34230))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34230;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____34231 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34231))
{return or__3548__auto____34231;
} else
{var or__3548__auto____34232 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34232))
{return or__3548__auto____34232;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__34256 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____34233 = this$;

if(cljs.core.truth_(and__3546__auto____34233))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____34233;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____34234 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34234))
{return or__3548__auto____34234;
} else
{var or__3548__auto____34235 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____34235))
{return or__3548__auto____34235;
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
return _invoke__34236.call(this,this$);
case  2 :
return _invoke__34237.call(this,this$,a);
case  3 :
return _invoke__34238.call(this,this$,a,b);
case  4 :
return _invoke__34239.call(this,this$,a,b,c);
case  5 :
return _invoke__34240.call(this,this$,a,b,c,d);
case  6 :
return _invoke__34241.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__34242.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__34243.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__34244.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__34245.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__34246.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__34247.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__34248.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__34249.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__34250.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__34251.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__34252.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__34253.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__34254.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__34255.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__34256.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____34258 = coll;

if(cljs.core.truth_(and__3546__auto____34258))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____34258;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____34259 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34259))
{return or__3548__auto____34259;
} else
{var or__3548__auto____34260 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____34260))
{return or__3548__auto____34260;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____34261 = coll;

if(cljs.core.truth_(and__3546__auto____34261))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____34261;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____34262 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34262))
{return or__3548__auto____34262;
} else
{var or__3548__auto____34263 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____34263))
{return or__3548__auto____34263;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____34264 = coll;

if(cljs.core.truth_(and__3546__auto____34264))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____34264;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____34265 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34265))
{return or__3548__auto____34265;
} else
{var or__3548__auto____34266 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____34266))
{return or__3548__auto____34266;
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
var _nth__34273 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____34267 = coll;

if(cljs.core.truth_(and__3546__auto____34267))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____34267;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____34268 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34268))
{return or__3548__auto____34268;
} else
{var or__3548__auto____34269 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____34269))
{return or__3548__auto____34269;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__34274 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____34270 = coll;

if(cljs.core.truth_(and__3546__auto____34270))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____34270;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____34271 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34271))
{return or__3548__auto____34271;
} else
{var or__3548__auto____34272 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____34272))
{return or__3548__auto____34272;
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
return _nth__34273.call(this,coll,n);
case  3 :
return _nth__34274.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____34276 = coll;

if(cljs.core.truth_(and__3546__auto____34276))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____34276;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____34277 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34277))
{return or__3548__auto____34277;
} else
{var or__3548__auto____34278 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____34278))
{return or__3548__auto____34278;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____34279 = coll;

if(cljs.core.truth_(and__3546__auto____34279))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____34279;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____34280 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34280))
{return or__3548__auto____34280;
} else
{var or__3548__auto____34281 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____34281))
{return or__3548__auto____34281;
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
var _lookup__34288 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____34282 = o;

if(cljs.core.truth_(and__3546__auto____34282))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____34282;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____34283 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34283))
{return or__3548__auto____34283;
} else
{var or__3548__auto____34284 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____34284))
{return or__3548__auto____34284;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__34289 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____34285 = o;

if(cljs.core.truth_(and__3546__auto____34285))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____34285;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____34286 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34286))
{return or__3548__auto____34286;
} else
{var or__3548__auto____34287 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____34287))
{return or__3548__auto____34287;
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
return _lookup__34288.call(this,o,k);
case  3 :
return _lookup__34289.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____34291 = coll;

if(cljs.core.truth_(and__3546__auto____34291))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____34291;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____34292 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34292))
{return or__3548__auto____34292;
} else
{var or__3548__auto____34293 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____34293))
{return or__3548__auto____34293;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____34294 = coll;

if(cljs.core.truth_(and__3546__auto____34294))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____34294;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____34295 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34295))
{return or__3548__auto____34295;
} else
{var or__3548__auto____34296 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____34296))
{return or__3548__auto____34296;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____34297 = coll;

if(cljs.core.truth_(and__3546__auto____34297))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____34297;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____34298 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34298))
{return or__3548__auto____34298;
} else
{var or__3548__auto____34299 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____34299))
{return or__3548__auto____34299;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____34300 = coll;

if(cljs.core.truth_(and__3546__auto____34300))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____34300;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____34301 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34301))
{return or__3548__auto____34301;
} else
{var or__3548__auto____34302 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____34302))
{return or__3548__auto____34302;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____34303 = coll;

if(cljs.core.truth_(and__3546__auto____34303))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____34303;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____34304 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34304))
{return or__3548__auto____34304;
} else
{var or__3548__auto____34305 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____34305))
{return or__3548__auto____34305;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____34306 = coll;

if(cljs.core.truth_(and__3546__auto____34306))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____34306;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____34307 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34307))
{return or__3548__auto____34307;
} else
{var or__3548__auto____34308 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____34308))
{return or__3548__auto____34308;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____34309 = coll;

if(cljs.core.truth_(and__3546__auto____34309))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____34309;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____34310 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34310))
{return or__3548__auto____34310;
} else
{var or__3548__auto____34311 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____34311))
{return or__3548__auto____34311;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____34312 = o;

if(cljs.core.truth_(and__3546__auto____34312))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____34312;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____34313 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34313))
{return or__3548__auto____34313;
} else
{var or__3548__auto____34314 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____34314))
{return or__3548__auto____34314;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____34315 = o;

if(cljs.core.truth_(and__3546__auto____34315))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____34315;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____34316 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34316))
{return or__3548__auto____34316;
} else
{var or__3548__auto____34317 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____34317))
{return or__3548__auto____34317;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____34318 = o;

if(cljs.core.truth_(and__3546__auto____34318))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____34318;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____34319 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34319))
{return or__3548__auto____34319;
} else
{var or__3548__auto____34320 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____34320))
{return or__3548__auto____34320;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____34321 = o;

if(cljs.core.truth_(and__3546__auto____34321))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____34321;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____34322 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34322))
{return or__3548__auto____34322;
} else
{var or__3548__auto____34323 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____34323))
{return or__3548__auto____34323;
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
var _reduce__34330 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____34324 = coll;

if(cljs.core.truth_(and__3546__auto____34324))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____34324;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____34325 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34325))
{return or__3548__auto____34325;
} else
{var or__3548__auto____34326 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____34326))
{return or__3548__auto____34326;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__34331 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____34327 = coll;

if(cljs.core.truth_(and__3546__auto____34327))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____34327;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____34328 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____34328))
{return or__3548__auto____34328;
} else
{var or__3548__auto____34329 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____34329))
{return or__3548__auto____34329;
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
return _reduce__34330.call(this,coll,f);
case  3 :
return _reduce__34331.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____34333 = o;

if(cljs.core.truth_(and__3546__auto____34333))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____34333;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____34334 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34334))
{return or__3548__auto____34334;
} else
{var or__3548__auto____34335 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____34335))
{return or__3548__auto____34335;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____34336 = o;

if(cljs.core.truth_(and__3546__auto____34336))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____34336;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____34337 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34337))
{return or__3548__auto____34337;
} else
{var or__3548__auto____34338 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____34338))
{return or__3548__auto____34338;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____34339 = o;

if(cljs.core.truth_(and__3546__auto____34339))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____34339;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____34340 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34340))
{return or__3548__auto____34340;
} else
{var or__3548__auto____34341 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____34341))
{return or__3548__auto____34341;
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
if(cljs.core.truth_((function (){var and__3546__auto____34342 = o;

if(cljs.core.truth_(and__3546__auto____34342))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____34342;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____34343 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____34343))
{return or__3548__auto____34343;
} else
{var or__3548__auto____34344 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____34344))
{return or__3548__auto____34344;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____34345 = d;

if(cljs.core.truth_(and__3546__auto____34345))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____34345;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____34346 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____34346))
{return or__3548__auto____34346;
} else
{var or__3548__auto____34347 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____34347))
{return or__3548__auto____34347;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____34348 = this$;

if(cljs.core.truth_(and__3546__auto____34348))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____34348;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____34349 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34349))
{return or__3548__auto____34349;
} else
{var or__3548__auto____34350 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____34350))
{return or__3548__auto____34350;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____34351 = this$;

if(cljs.core.truth_(and__3546__auto____34351))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____34351;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____34352 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34352))
{return or__3548__auto____34352;
} else
{var or__3548__auto____34353 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____34353))
{return or__3548__auto____34353;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____34354 = this$;

if(cljs.core.truth_(and__3546__auto____34354))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____34354;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____34355 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____34355))
{return or__3548__auto____34355;
} else
{var or__3548__auto____34356 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____34356))
{return or__3548__auto____34356;
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
var G__34357 = null;
var G__34357__34358 = (function (o,k){
return null;
});
var G__34357__34359 = (function (o,k,not_found){
return not_found;
});
G__34357 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__34357__34358.call(this,o,k);
case  3 :
return G__34357__34359.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34357;
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
var G__34361 = null;
var G__34361__34362 = (function (_,f){
return f.call(null);
});
var G__34361__34363 = (function (_,f,start){
return start;
});
G__34361 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__34361__34362.call(this,_,f);
case  3 :
return G__34361__34363.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34361;
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
var G__34365 = null;
var G__34365__34366 = (function (_,n){
return null;
});
var G__34365__34367 = (function (_,n,not_found){
return not_found;
});
G__34365 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__34365__34366.call(this,_,n);
case  3 :
return G__34365__34367.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34365;
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
var ci_reduce__34375 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__34369 = cljs.core._nth.call(null,cicoll,0);
var n__34370 = 1;

while(true){
if(cljs.core.truth_((n__34370 < cljs.core._count.call(null,cicoll))))
{{
var G__34379 = f.call(null,val__34369,cljs.core._nth.call(null,cicoll,n__34370));
var G__34380 = (n__34370 + 1);
val__34369 = G__34379;
n__34370 = G__34380;
continue;
}
} else
{return val__34369;
}
break;
}
}
});
var ci_reduce__34376 = (function (cicoll,f,val){
var val__34371 = val;
var n__34372 = 0;

while(true){
if(cljs.core.truth_((n__34372 < cljs.core._count.call(null,cicoll))))
{{
var G__34381 = f.call(null,val__34371,cljs.core._nth.call(null,cicoll,n__34372));
var G__34382 = (n__34372 + 1);
val__34371 = G__34381;
n__34372 = G__34382;
continue;
}
} else
{return val__34371;
}
break;
}
});
var ci_reduce__34377 = (function (cicoll,f,val,idx){
var val__34373 = val;
var n__34374 = idx;

while(true){
if(cljs.core.truth_((n__34374 < cljs.core._count.call(null,cicoll))))
{{
var G__34383 = f.call(null,val__34373,cljs.core._nth.call(null,cicoll,n__34374));
var G__34384 = (n__34374 + 1);
val__34373 = G__34383;
n__34374 = G__34384;
continue;
}
} else
{return val__34373;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__34375.call(this,cicoll,f);
case  3 :
return ci_reduce__34376.call(this,cicoll,f,val);
case  4 :
return ci_reduce__34377.call(this,cicoll,f,val,idx);
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
var this__34385 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__34398 = null;
var G__34398__34399 = (function (_,f){
var this__34386 = this;
return cljs.core.ci_reduce.call(null,this__34386.a,f,(this__34386.a[this__34386.i]),(this__34386.i + 1));
});
var G__34398__34400 = (function (_,f,start){
var this__34387 = this;
return cljs.core.ci_reduce.call(null,this__34387.a,f,start,this__34387.i);
});
G__34398 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__34398__34399.call(this,_,f);
case  3 :
return G__34398__34400.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34398;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__34388 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__34389 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__34402 = null;
var G__34402__34403 = (function (coll,n){
var this__34390 = this;
var i__34391 = (n + this__34390.i);

if(cljs.core.truth_((i__34391 < this__34390.a.length)))
{return (this__34390.a[i__34391]);
} else
{return null;
}
});
var G__34402__34404 = (function (coll,n,not_found){
var this__34392 = this;
var i__34393 = (n + this__34392.i);

if(cljs.core.truth_((i__34393 < this__34392.a.length)))
{return (this__34392.a[i__34393]);
} else
{return not_found;
}
});
G__34402 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__34402__34403.call(this,coll,n);
case  3 :
return G__34402__34404.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34402;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__34394 = this;
return (this__34394.a.length - this__34394.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__34395 = this;
return (this__34395.a[this__34395.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__34396 = this;
if(cljs.core.truth_(((this__34396.i + 1) < this__34396.a.length)))
{return (new cljs.core.IndexedSeq(this__34396.a,(this__34396.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__34397 = this;
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
var G__34406 = null;
var G__34406__34407 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__34406__34408 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__34406 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__34406__34407.call(this,array,f);
case  3 :
return G__34406__34408.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34406;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__34410 = null;
var G__34410__34411 = (function (array,k){
return (array[k]);
});
var G__34410__34412 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__34410 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__34410__34411.call(this,array,k);
case  3 :
return G__34410__34412.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34410;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__34414 = null;
var G__34414__34415 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__34414__34416 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__34414 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__34414__34415.call(this,array,n);
case  3 :
return G__34414__34416.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34414;
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
var temp__3698__auto____34418 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____34418))
{var s__34419 = temp__3698__auto____34418;

return cljs.core._first.call(null,s__34419);
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
var G__34420 = cljs.core.next.call(null,s);
s = G__34420;
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
var s__34421 = cljs.core.seq.call(null,x);
var n__34422 = 0;

while(true){
if(cljs.core.truth_(s__34421))
{{
var G__34423 = cljs.core.next.call(null,s__34421);
var G__34424 = (n__34422 + 1);
s__34421 = G__34423;
n__34422 = G__34424;
continue;
}
} else
{return n__34422;
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
var conj__34425 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__34426 = (function() { 
var G__34428__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__34429 = conj.call(null,coll,x);
var G__34430 = cljs.core.first.call(null,xs);
var G__34431 = cljs.core.next.call(null,xs);
coll = G__34429;
x = G__34430;
xs = G__34431;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__34428 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34428__delegate.call(this, coll, x, xs);
};
G__34428.cljs$lang$maxFixedArity = 2;
G__34428.cljs$lang$applyTo = (function (arglist__34432){
var coll = cljs.core.first(arglist__34432);
var x = cljs.core.first(cljs.core.next(arglist__34432));
var xs = cljs.core.rest(cljs.core.next(arglist__34432));
return G__34428__delegate.call(this, coll, x, xs);
});
return G__34428;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__34425.call(this,coll,x);
default:
return conj__34426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__34426.cljs$lang$applyTo;
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
var nth__34433 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__34434 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__34433.call(this,coll,n);
case  3 :
return nth__34434.call(this,coll,n,not_found);
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
var get__34436 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__34437 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__34436.call(this,o,k);
case  3 :
return get__34437.call(this,o,k,not_found);
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
var assoc__34440 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__34441 = (function() { 
var G__34443__delegate = function (coll,k,v,kvs){
while(true){
var ret__34439 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__34444 = ret__34439;
var G__34445 = cljs.core.first.call(null,kvs);
var G__34446 = cljs.core.second.call(null,kvs);
var G__34447 = cljs.core.nnext.call(null,kvs);
coll = G__34444;
k = G__34445;
v = G__34446;
kvs = G__34447;
continue;
}
} else
{return ret__34439;
}
break;
}
};
var G__34443 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34443__delegate.call(this, coll, k, v, kvs);
};
G__34443.cljs$lang$maxFixedArity = 3;
G__34443.cljs$lang$applyTo = (function (arglist__34448){
var coll = cljs.core.first(arglist__34448);
var k = cljs.core.first(cljs.core.next(arglist__34448));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34448)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34448)));
return G__34443__delegate.call(this, coll, k, v, kvs);
});
return G__34443;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__34440.call(this,coll,k,v);
default:
return assoc__34441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__34441.cljs$lang$applyTo;
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
var dissoc__34450 = (function (coll){
return coll;
});
var dissoc__34451 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__34452 = (function() { 
var G__34454__delegate = function (coll,k,ks){
while(true){
var ret__34449 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__34455 = ret__34449;
var G__34456 = cljs.core.first.call(null,ks);
var G__34457 = cljs.core.next.call(null,ks);
coll = G__34455;
k = G__34456;
ks = G__34457;
continue;
}
} else
{return ret__34449;
}
break;
}
};
var G__34454 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34454__delegate.call(this, coll, k, ks);
};
G__34454.cljs$lang$maxFixedArity = 2;
G__34454.cljs$lang$applyTo = (function (arglist__34458){
var coll = cljs.core.first(arglist__34458);
var k = cljs.core.first(cljs.core.next(arglist__34458));
var ks = cljs.core.rest(cljs.core.next(arglist__34458));
return G__34454__delegate.call(this, coll, k, ks);
});
return G__34454;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__34450.call(this,coll);
case  2 :
return dissoc__34451.call(this,coll,k);
default:
return dissoc__34452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__34452.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____34459 = o;

if(cljs.core.truth_((function (){var and__3546__auto____34460 = x__450__auto____34459;

if(cljs.core.truth_(and__3546__auto____34460))
{var and__3546__auto____34461 = x__450__auto____34459.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____34461))
{return cljs.core.not.call(null,x__450__auto____34459.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____34461;
}
} else
{return and__3546__auto____34460;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____34459);
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
var disj__34463 = (function (coll){
return coll;
});
var disj__34464 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__34465 = (function() { 
var G__34467__delegate = function (coll,k,ks){
while(true){
var ret__34462 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__34468 = ret__34462;
var G__34469 = cljs.core.first.call(null,ks);
var G__34470 = cljs.core.next.call(null,ks);
coll = G__34468;
k = G__34469;
ks = G__34470;
continue;
}
} else
{return ret__34462;
}
break;
}
};
var G__34467 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34467__delegate.call(this, coll, k, ks);
};
G__34467.cljs$lang$maxFixedArity = 2;
G__34467.cljs$lang$applyTo = (function (arglist__34471){
var coll = cljs.core.first(arglist__34471);
var k = cljs.core.first(cljs.core.next(arglist__34471));
var ks = cljs.core.rest(cljs.core.next(arglist__34471));
return G__34467__delegate.call(this, coll, k, ks);
});
return G__34467;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__34463.call(this,coll);
case  2 :
return disj__34464.call(this,coll,k);
default:
return disj__34465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__34465.cljs$lang$applyTo;
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
{var x__450__auto____34472 = x;

if(cljs.core.truth_((function (){var and__3546__auto____34473 = x__450__auto____34472;

if(cljs.core.truth_(and__3546__auto____34473))
{var and__3546__auto____34474 = x__450__auto____34472.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____34474))
{return cljs.core.not.call(null,x__450__auto____34472.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____34474;
}
} else
{return and__3546__auto____34473;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____34472);
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
{var x__450__auto____34475 = x;

if(cljs.core.truth_((function (){var and__3546__auto____34476 = x__450__auto____34475;

if(cljs.core.truth_(and__3546__auto____34476))
{var and__3546__auto____34477 = x__450__auto____34475.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____34477))
{return cljs.core.not.call(null,x__450__auto____34475.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____34477;
}
} else
{return and__3546__auto____34476;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____34475);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____34478 = x;

if(cljs.core.truth_((function (){var and__3546__auto____34479 = x__450__auto____34478;

if(cljs.core.truth_(and__3546__auto____34479))
{var and__3546__auto____34480 = x__450__auto____34478.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____34480))
{return cljs.core.not.call(null,x__450__auto____34478.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____34480;
}
} else
{return and__3546__auto____34479;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____34478);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____34481 = x;

if(cljs.core.truth_((function (){var and__3546__auto____34482 = x__450__auto____34481;

if(cljs.core.truth_(and__3546__auto____34482))
{var and__3546__auto____34483 = x__450__auto____34481.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____34483))
{return cljs.core.not.call(null,x__450__auto____34481.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____34483;
}
} else
{return and__3546__auto____34482;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____34481);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____34484 = x;

if(cljs.core.truth_((function (){var and__3546__auto____34485 = x__450__auto____34484;

if(cljs.core.truth_(and__3546__auto____34485))
{var and__3546__auto____34486 = x__450__auto____34484.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____34486))
{return cljs.core.not.call(null,x__450__auto____34484.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____34486;
}
} else
{return and__3546__auto____34485;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____34484);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____34487 = x;

if(cljs.core.truth_((function (){var and__3546__auto____34488 = x__450__auto____34487;

if(cljs.core.truth_(and__3546__auto____34488))
{var and__3546__auto____34489 = x__450__auto____34487.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____34489))
{return cljs.core.not.call(null,x__450__auto____34487.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____34489;
}
} else
{return and__3546__auto____34488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____34487);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____34490 = x;

if(cljs.core.truth_((function (){var and__3546__auto____34491 = x__450__auto____34490;

if(cljs.core.truth_(and__3546__auto____34491))
{var and__3546__auto____34492 = x__450__auto____34490.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____34492))
{return cljs.core.not.call(null,x__450__auto____34490.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____34492;
}
} else
{return and__3546__auto____34491;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____34490);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__34493 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__34493.push(key);
}));
return keys__34493;
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
{var x__450__auto____34494 = s;

if(cljs.core.truth_((function (){var and__3546__auto____34495 = x__450__auto____34494;

if(cljs.core.truth_(and__3546__auto____34495))
{var and__3546__auto____34496 = x__450__auto____34494.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____34496))
{return cljs.core.not.call(null,x__450__auto____34494.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____34496;
}
} else
{return and__3546__auto____34495;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____34494);
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
var and__3546__auto____34497 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____34497))
{return cljs.core.not.call(null,(function (){var or__3548__auto____34498 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____34498))
{return or__3548__auto____34498;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____34497;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____34499 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____34499))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____34499;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____34500 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____34500))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____34500;
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
var and__3546__auto____34501 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____34501))
{return (n == n.toFixed());
} else
{return and__3546__auto____34501;
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
if(cljs.core.truth_((function (){var and__3546__auto____34502 = coll;

if(cljs.core.truth_(and__3546__auto____34502))
{var and__3546__auto____34503 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____34503))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____34503;
}
} else
{return and__3546__auto____34502;
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
var distinct_QMARK___34508 = (function (x){
return true;
});
var distinct_QMARK___34509 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___34510 = (function() { 
var G__34512__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__34504 = cljs.core.set([y,x]);
var xs__34505 = more;

while(true){
var x__34506 = cljs.core.first.call(null,xs__34505);
var etc__34507 = cljs.core.next.call(null,xs__34505);

if(cljs.core.truth_(xs__34505))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__34504,x__34506)))
{return false;
} else
{{
var G__34513 = cljs.core.conj.call(null,s__34504,x__34506);
var G__34514 = etc__34507;
s__34504 = G__34513;
xs__34505 = G__34514;
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
var G__34512 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34512__delegate.call(this, x, y, more);
};
G__34512.cljs$lang$maxFixedArity = 2;
G__34512.cljs$lang$applyTo = (function (arglist__34515){
var x = cljs.core.first(arglist__34515);
var y = cljs.core.first(cljs.core.next(arglist__34515));
var more = cljs.core.rest(cljs.core.next(arglist__34515));
return G__34512__delegate.call(this, x, y, more);
});
return G__34512;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___34508.call(this,x);
case  2 :
return distinct_QMARK___34509.call(this,x,y);
default:
return distinct_QMARK___34510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___34510.cljs$lang$applyTo;
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
var r__34516 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__34516)))
{return r__34516;
} else
{if(cljs.core.truth_(r__34516))
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
var sort__34518 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__34519 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__34517 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__34517,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__34517);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__34518.call(this,comp);
case  2 :
return sort__34519.call(this,comp,coll);
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
var sort_by__34521 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__34522 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__34521.call(this,keyfn,comp);
case  3 :
return sort_by__34522.call(this,keyfn,comp,coll);
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
var reduce__34524 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__34525 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__34524.call(this,f,val);
case  3 :
return reduce__34525.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__34531 = (function (f,coll){
var temp__3695__auto____34527 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____34527))
{var s__34528 = temp__3695__auto____34527;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__34528),cljs.core.next.call(null,s__34528));
} else
{return f.call(null);
}
});
var seq_reduce__34532 = (function (f,val,coll){
var val__34529 = val;
var coll__34530 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__34530))
{{
var G__34534 = f.call(null,val__34529,cljs.core.first.call(null,coll__34530));
var G__34535 = cljs.core.next.call(null,coll__34530);
val__34529 = G__34534;
coll__34530 = G__34535;
continue;
}
} else
{return val__34529;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__34531.call(this,f,val);
case  3 :
return seq_reduce__34532.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__34536 = null;
var G__34536__34537 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__34536__34538 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__34536 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__34536__34537.call(this,coll,f);
case  3 :
return G__34536__34538.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34536;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___34540 = (function (){
return 0;
});
var _PLUS___34541 = (function (x){
return x;
});
var _PLUS___34542 = (function (x,y){
return (x + y);
});
var _PLUS___34543 = (function() { 
var G__34545__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__34545 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34545__delegate.call(this, x, y, more);
};
G__34545.cljs$lang$maxFixedArity = 2;
G__34545.cljs$lang$applyTo = (function (arglist__34546){
var x = cljs.core.first(arglist__34546);
var y = cljs.core.first(cljs.core.next(arglist__34546));
var more = cljs.core.rest(cljs.core.next(arglist__34546));
return G__34545__delegate.call(this, x, y, more);
});
return G__34545;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___34540.call(this);
case  1 :
return _PLUS___34541.call(this,x);
case  2 :
return _PLUS___34542.call(this,x,y);
default:
return _PLUS___34543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___34543.cljs$lang$applyTo;
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
var ___34547 = (function (x){
return (- x);
});
var ___34548 = (function (x,y){
return (x - y);
});
var ___34549 = (function() { 
var G__34551__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__34551 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34551__delegate.call(this, x, y, more);
};
G__34551.cljs$lang$maxFixedArity = 2;
G__34551.cljs$lang$applyTo = (function (arglist__34552){
var x = cljs.core.first(arglist__34552);
var y = cljs.core.first(cljs.core.next(arglist__34552));
var more = cljs.core.rest(cljs.core.next(arglist__34552));
return G__34551__delegate.call(this, x, y, more);
});
return G__34551;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___34547.call(this,x);
case  2 :
return ___34548.call(this,x,y);
default:
return ___34549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___34549.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___34553 = (function (){
return 1;
});
var _STAR___34554 = (function (x){
return x;
});
var _STAR___34555 = (function (x,y){
return (x * y);
});
var _STAR___34556 = (function() { 
var G__34558__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__34558 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34558__delegate.call(this, x, y, more);
};
G__34558.cljs$lang$maxFixedArity = 2;
G__34558.cljs$lang$applyTo = (function (arglist__34559){
var x = cljs.core.first(arglist__34559);
var y = cljs.core.first(cljs.core.next(arglist__34559));
var more = cljs.core.rest(cljs.core.next(arglist__34559));
return G__34558__delegate.call(this, x, y, more);
});
return G__34558;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___34553.call(this);
case  1 :
return _STAR___34554.call(this,x);
case  2 :
return _STAR___34555.call(this,x,y);
default:
return _STAR___34556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___34556.cljs$lang$applyTo;
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
var _SLASH___34560 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___34561 = (function (x,y){
return (x / y);
});
var _SLASH___34562 = (function() { 
var G__34564__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__34564 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34564__delegate.call(this, x, y, more);
};
G__34564.cljs$lang$maxFixedArity = 2;
G__34564.cljs$lang$applyTo = (function (arglist__34565){
var x = cljs.core.first(arglist__34565);
var y = cljs.core.first(cljs.core.next(arglist__34565));
var more = cljs.core.rest(cljs.core.next(arglist__34565));
return G__34564__delegate.call(this, x, y, more);
});
return G__34564;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___34560.call(this,x);
case  2 :
return _SLASH___34561.call(this,x,y);
default:
return _SLASH___34562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___34562.cljs$lang$applyTo;
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
var _LT___34566 = (function (x){
return true;
});
var _LT___34567 = (function (x,y){
return (x < y);
});
var _LT___34568 = (function() { 
var G__34570__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__34571 = y;
var G__34572 = cljs.core.first.call(null,more);
var G__34573 = cljs.core.next.call(null,more);
x = G__34571;
y = G__34572;
more = G__34573;
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
var G__34570 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34570__delegate.call(this, x, y, more);
};
G__34570.cljs$lang$maxFixedArity = 2;
G__34570.cljs$lang$applyTo = (function (arglist__34574){
var x = cljs.core.first(arglist__34574);
var y = cljs.core.first(cljs.core.next(arglist__34574));
var more = cljs.core.rest(cljs.core.next(arglist__34574));
return G__34570__delegate.call(this, x, y, more);
});
return G__34570;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___34566.call(this,x);
case  2 :
return _LT___34567.call(this,x,y);
default:
return _LT___34568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___34568.cljs$lang$applyTo;
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
var _LT__EQ___34575 = (function (x){
return true;
});
var _LT__EQ___34576 = (function (x,y){
return (x <= y);
});
var _LT__EQ___34577 = (function() { 
var G__34579__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__34580 = y;
var G__34581 = cljs.core.first.call(null,more);
var G__34582 = cljs.core.next.call(null,more);
x = G__34580;
y = G__34581;
more = G__34582;
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
var G__34579 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34579__delegate.call(this, x, y, more);
};
G__34579.cljs$lang$maxFixedArity = 2;
G__34579.cljs$lang$applyTo = (function (arglist__34583){
var x = cljs.core.first(arglist__34583);
var y = cljs.core.first(cljs.core.next(arglist__34583));
var more = cljs.core.rest(cljs.core.next(arglist__34583));
return G__34579__delegate.call(this, x, y, more);
});
return G__34579;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___34575.call(this,x);
case  2 :
return _LT__EQ___34576.call(this,x,y);
default:
return _LT__EQ___34577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___34577.cljs$lang$applyTo;
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
var _GT___34584 = (function (x){
return true;
});
var _GT___34585 = (function (x,y){
return (x > y);
});
var _GT___34586 = (function() { 
var G__34588__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__34589 = y;
var G__34590 = cljs.core.first.call(null,more);
var G__34591 = cljs.core.next.call(null,more);
x = G__34589;
y = G__34590;
more = G__34591;
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
var G__34588 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34588__delegate.call(this, x, y, more);
};
G__34588.cljs$lang$maxFixedArity = 2;
G__34588.cljs$lang$applyTo = (function (arglist__34592){
var x = cljs.core.first(arglist__34592);
var y = cljs.core.first(cljs.core.next(arglist__34592));
var more = cljs.core.rest(cljs.core.next(arglist__34592));
return G__34588__delegate.call(this, x, y, more);
});
return G__34588;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___34584.call(this,x);
case  2 :
return _GT___34585.call(this,x,y);
default:
return _GT___34586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___34586.cljs$lang$applyTo;
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
var _GT__EQ___34593 = (function (x){
return true;
});
var _GT__EQ___34594 = (function (x,y){
return (x >= y);
});
var _GT__EQ___34595 = (function() { 
var G__34597__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__34598 = y;
var G__34599 = cljs.core.first.call(null,more);
var G__34600 = cljs.core.next.call(null,more);
x = G__34598;
y = G__34599;
more = G__34600;
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
var G__34597 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34597__delegate.call(this, x, y, more);
};
G__34597.cljs$lang$maxFixedArity = 2;
G__34597.cljs$lang$applyTo = (function (arglist__34601){
var x = cljs.core.first(arglist__34601);
var y = cljs.core.first(cljs.core.next(arglist__34601));
var more = cljs.core.rest(cljs.core.next(arglist__34601));
return G__34597__delegate.call(this, x, y, more);
});
return G__34597;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___34593.call(this,x);
case  2 :
return _GT__EQ___34594.call(this,x,y);
default:
return _GT__EQ___34595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___34595.cljs$lang$applyTo;
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
var max__34602 = (function (x){
return x;
});
var max__34603 = (function (x,y){
return ((x > y) ? x : y);
});
var max__34604 = (function() { 
var G__34606__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__34606 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34606__delegate.call(this, x, y, more);
};
G__34606.cljs$lang$maxFixedArity = 2;
G__34606.cljs$lang$applyTo = (function (arglist__34607){
var x = cljs.core.first(arglist__34607);
var y = cljs.core.first(cljs.core.next(arglist__34607));
var more = cljs.core.rest(cljs.core.next(arglist__34607));
return G__34606__delegate.call(this, x, y, more);
});
return G__34606;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__34602.call(this,x);
case  2 :
return max__34603.call(this,x,y);
default:
return max__34604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__34604.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__34608 = (function (x){
return x;
});
var min__34609 = (function (x,y){
return ((x < y) ? x : y);
});
var min__34610 = (function() { 
var G__34612__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__34612 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34612__delegate.call(this, x, y, more);
};
G__34612.cljs$lang$maxFixedArity = 2;
G__34612.cljs$lang$applyTo = (function (arglist__34613){
var x = cljs.core.first(arglist__34613);
var y = cljs.core.first(cljs.core.next(arglist__34613));
var more = cljs.core.rest(cljs.core.next(arglist__34613));
return G__34612__delegate.call(this, x, y, more);
});
return G__34612;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__34608.call(this,x);
case  2 :
return min__34609.call(this,x,y);
default:
return min__34610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__34610.cljs$lang$applyTo;
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
var rem__34614 = (n % d);

return cljs.core.fix.call(null,((n - rem__34614) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__34615 = cljs.core.quot.call(null,n,d);

return (n - (d * q__34615));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__34616 = (function (){
return Math.random.call(null);
});
var rand__34617 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__34616.call(this);
case  1 :
return rand__34617.call(this,n);
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
var _EQ__EQ___34619 = (function (x){
return true;
});
var _EQ__EQ___34620 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___34621 = (function() { 
var G__34623__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__34624 = y;
var G__34625 = cljs.core.first.call(null,more);
var G__34626 = cljs.core.next.call(null,more);
x = G__34624;
y = G__34625;
more = G__34626;
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
var G__34623 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34623__delegate.call(this, x, y, more);
};
G__34623.cljs$lang$maxFixedArity = 2;
G__34623.cljs$lang$applyTo = (function (arglist__34627){
var x = cljs.core.first(arglist__34627);
var y = cljs.core.first(cljs.core.next(arglist__34627));
var more = cljs.core.rest(cljs.core.next(arglist__34627));
return G__34623__delegate.call(this, x, y, more);
});
return G__34623;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___34619.call(this,x);
case  2 :
return _EQ__EQ___34620.call(this,x,y);
default:
return _EQ__EQ___34621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___34621.cljs$lang$applyTo;
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
var n__34628 = n;
var xs__34629 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____34630 = xs__34629;

if(cljs.core.truth_(and__3546__auto____34630))
{return (n__34628 > 0);
} else
{return and__3546__auto____34630;
}
})()))
{{
var G__34631 = (n__34628 - 1);
var G__34632 = cljs.core.next.call(null,xs__34629);
n__34628 = G__34631;
xs__34629 = G__34632;
continue;
}
} else
{return xs__34629;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__34637 = null;
var G__34637__34638 = (function (coll,n){
var temp__3695__auto____34633 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____34633))
{var xs__34634 = temp__3695__auto____34633;

return cljs.core.first.call(null,xs__34634);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__34637__34639 = (function (coll,n,not_found){
var temp__3695__auto____34635 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____34635))
{var xs__34636 = temp__3695__auto____34635;

return cljs.core.first.call(null,xs__34636);
} else
{return not_found;
}
});
G__34637 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__34637__34638.call(this,coll,n);
case  3 :
return G__34637__34639.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34637;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___34641 = (function (){
return "";
});
var str_STAR___34642 = (function (x){
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
var str_STAR___34643 = (function() { 
var G__34645__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__34646 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__34647 = cljs.core.next.call(null,more);
sb = G__34646;
more = G__34647;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__34645 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__34645__delegate.call(this, x, ys);
};
G__34645.cljs$lang$maxFixedArity = 1;
G__34645.cljs$lang$applyTo = (function (arglist__34648){
var x = cljs.core.first(arglist__34648);
var ys = cljs.core.rest(arglist__34648);
return G__34645__delegate.call(this, x, ys);
});
return G__34645;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___34641.call(this);
case  1 :
return str_STAR___34642.call(this,x);
default:
return str_STAR___34643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___34643.cljs$lang$applyTo;
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
var str__34649 = (function (){
return "";
});
var str__34650 = (function (x){
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
var str__34651 = (function() { 
var G__34653__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__34653 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__34653__delegate.call(this, x, ys);
};
G__34653.cljs$lang$maxFixedArity = 1;
G__34653.cljs$lang$applyTo = (function (arglist__34654){
var x = cljs.core.first(arglist__34654);
var ys = cljs.core.rest(arglist__34654);
return G__34653__delegate.call(this, x, ys);
});
return G__34653;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__34649.call(this);
case  1 :
return str__34650.call(this,x);
default:
return str__34651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__34651.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__34655 = (function (s,start){
return s.substring(start);
});
var subs__34656 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__34655.call(this,s,start);
case  3 :
return subs__34656.call(this,s,start,end);
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
var symbol__34658 = (function (name){
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
var symbol__34659 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__34658.call(this,ns);
case  2 :
return symbol__34659.call(this,ns,name);
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
var keyword__34661 = (function (name){
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
var keyword__34662 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__34661.call(this,ns);
case  2 :
return keyword__34662.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__34664 = cljs.core.seq.call(null,x);
var ys__34665 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__34664 === null)))
{return (ys__34665 === null);
} else
{if(cljs.core.truth_((ys__34665 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__34664),cljs.core.first.call(null,ys__34665))))
{{
var G__34666 = cljs.core.next.call(null,xs__34664);
var G__34667 = cljs.core.next.call(null,ys__34665);
xs__34664 = G__34666;
ys__34665 = G__34667;
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
return cljs.core.reduce.call(null,(function (p1__34668_SHARP_,p2__34669_SHARP_){
return cljs.core.hash_combine.call(null,p1__34668_SHARP_,cljs.core.hash.call(null,p2__34669_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__34670__34671 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__34670__34671))
{var G__34673__34675 = cljs.core.first.call(null,G__34670__34671);
var vec__34674__34676 = G__34673__34675;
var key_name__34677 = cljs.core.nth.call(null,vec__34674__34676,0,null);
var f__34678 = cljs.core.nth.call(null,vec__34674__34676,1,null);
var G__34670__34679 = G__34670__34671;

var G__34673__34680 = G__34673__34675;
var G__34670__34681 = G__34670__34679;

while(true){
var vec__34682__34683 = G__34673__34680;
var key_name__34684 = cljs.core.nth.call(null,vec__34682__34683,0,null);
var f__34685 = cljs.core.nth.call(null,vec__34682__34683,1,null);
var G__34670__34686 = G__34670__34681;

var str_name__34687 = cljs.core.name.call(null,key_name__34684);

obj[str_name__34687] = f__34685;
var temp__3698__auto____34688 = cljs.core.next.call(null,G__34670__34686);

if(cljs.core.truth_(temp__3698__auto____34688))
{var G__34670__34689 = temp__3698__auto____34688;

{
var G__34690 = cljs.core.first.call(null,G__34670__34689);
var G__34691 = G__34670__34689;
G__34673__34680 = G__34690;
G__34670__34681 = G__34691;
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
var this__34692 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__34693 = this;
return (new cljs.core.List(this__34693.meta,o,coll,(this__34693.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__34694 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__34695 = this;
return this__34695.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__34696 = this;
return this__34696.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__34697 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__34698 = this;
return this__34698.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__34699 = this;
return this__34699.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__34700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__34701 = this;
return (new cljs.core.List(meta,this__34701.first,this__34701.rest,this__34701.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__34702 = this;
return this__34702.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__34703 = this;
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
var this__34704 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__34705 = this;
return (new cljs.core.List(this__34705.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__34706 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__34707 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__34708 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__34709 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__34710 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__34711 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__34712 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__34713 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__34714 = this;
return this__34714.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__34715 = this;
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
list.cljs$lang$applyTo = (function (arglist__34716){
var items = cljs.core.seq( arglist__34716 );;
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
var this__34717 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__34718 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__34719 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__34720 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__34720.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__34721 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__34722 = this;
return this__34722.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__34723 = this;
if(cljs.core.truth_((this__34723.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__34723.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__34724 = this;
return this__34724.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__34725 = this;
return (new cljs.core.Cons(meta,this__34725.first,this__34725.rest));
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
var G__34726 = null;
var G__34726__34727 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__34726__34728 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__34726 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__34726__34727.call(this,string,f);
case  3 :
return G__34726__34728.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34726;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__34730 = null;
var G__34730__34731 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__34730__34732 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__34730 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__34730__34731.call(this,string,k);
case  3 :
return G__34730__34732.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34730;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__34734 = null;
var G__34734__34735 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__34734__34736 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__34734 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__34734__34735.call(this,string,n);
case  3 :
return G__34734__34736.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34734;
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
var G__34744 = null;
var G__34744__34745 = (function (tsym34738,coll){
var tsym34738__34740 = this;

var this$__34741 = tsym34738__34740;

return cljs.core.get.call(null,coll,this$__34741.toString());
});
var G__34744__34746 = (function (tsym34739,coll,not_found){
var tsym34739__34742 = this;

var this$__34743 = tsym34739__34742;

return cljs.core.get.call(null,coll,this$__34743.toString(),not_found);
});
G__34744 = function(tsym34739,coll,not_found){
switch(arguments.length){
case  2 :
return G__34744__34745.call(this,tsym34739,coll);
case  3 :
return G__34744__34746.call(this,tsym34739,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__34744;
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
var x__34748 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__34748;
} else
{lazy_seq.x = x__34748.call(null);
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
var this__34749 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__34750 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__34751 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__34752 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__34752.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__34753 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__34754 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__34755 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__34756 = this;
return this__34756.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__34757 = this;
return (new cljs.core.LazySeq(meta,this__34757.realized,this__34757.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__34758 = cljs.core.array.call(null);

var s__34759 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__34759)))
{ary__34758.push(cljs.core.first.call(null,s__34759));
{
var G__34760 = cljs.core.next.call(null,s__34759);
s__34759 = G__34760;
continue;
}
} else
{return ary__34758;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__34761 = s;
var i__34762 = n;
var sum__34763 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____34764 = (i__34762 > 0);

if(cljs.core.truth_(and__3546__auto____34764))
{return cljs.core.seq.call(null,s__34761);
} else
{return and__3546__auto____34764;
}
})()))
{{
var G__34765 = cljs.core.next.call(null,s__34761);
var G__34766 = (i__34762 - 1);
var G__34767 = (sum__34763 + 1);
s__34761 = G__34765;
i__34762 = G__34766;
sum__34763 = G__34767;
continue;
}
} else
{return sum__34763;
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
var concat__34771 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__34772 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__34773 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__34768 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__34768))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__34768),concat.call(null,cljs.core.rest.call(null,s__34768),y));
} else
{return y;
}
})));
});
var concat__34774 = (function() { 
var G__34776__delegate = function (x,y,zs){
var cat__34770 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__34769 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__34769))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__34769),cat.call(null,cljs.core.rest.call(null,xys__34769),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__34770.call(null,concat.call(null,x,y),zs);
};
var G__34776 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34776__delegate.call(this, x, y, zs);
};
G__34776.cljs$lang$maxFixedArity = 2;
G__34776.cljs$lang$applyTo = (function (arglist__34777){
var x = cljs.core.first(arglist__34777);
var y = cljs.core.first(cljs.core.next(arglist__34777));
var zs = cljs.core.rest(cljs.core.next(arglist__34777));
return G__34776__delegate.call(this, x, y, zs);
});
return G__34776;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__34771.call(this);
case  1 :
return concat__34772.call(this,x);
case  2 :
return concat__34773.call(this,x,y);
default:
return concat__34774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__34774.cljs$lang$applyTo;
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
var list_STAR___34778 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___34779 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___34780 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___34781 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___34782 = (function() { 
var G__34784__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__34784 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__34784__delegate.call(this, a, b, c, d, more);
};
G__34784.cljs$lang$maxFixedArity = 4;
G__34784.cljs$lang$applyTo = (function (arglist__34785){
var a = cljs.core.first(arglist__34785);
var b = cljs.core.first(cljs.core.next(arglist__34785));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34785)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__34785))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__34785))));
return G__34784__delegate.call(this, a, b, c, d, more);
});
return G__34784;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___34778.call(this,a);
case  2 :
return list_STAR___34779.call(this,a,b);
case  3 :
return list_STAR___34780.call(this,a,b,c);
case  4 :
return list_STAR___34781.call(this,a,b,c,d);
default:
return list_STAR___34782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___34782.cljs$lang$applyTo;
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
var apply__34795 = (function (f,args){
var fixed_arity__34786 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__34786 + 1)) <= fixed_arity__34786)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__34796 = (function (f,x,args){
var arglist__34787 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__34788 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__34787,fixed_arity__34788) <= fixed_arity__34788)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__34787));
} else
{return f.cljs$lang$applyTo(arglist__34787);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__34787));
}
});
var apply__34797 = (function (f,x,y,args){
var arglist__34789 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__34790 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__34789,fixed_arity__34790) <= fixed_arity__34790)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__34789));
} else
{return f.cljs$lang$applyTo(arglist__34789);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__34789));
}
});
var apply__34798 = (function (f,x,y,z,args){
var arglist__34791 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__34792 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__34791,fixed_arity__34792) <= fixed_arity__34792)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__34791));
} else
{return f.cljs$lang$applyTo(arglist__34791);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__34791));
}
});
var apply__34799 = (function() { 
var G__34801__delegate = function (f,a,b,c,d,args){
var arglist__34793 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__34794 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__34793,fixed_arity__34794) <= fixed_arity__34794)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__34793));
} else
{return f.cljs$lang$applyTo(arglist__34793);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__34793));
}
};
var G__34801 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__34801__delegate.call(this, f, a, b, c, d, args);
};
G__34801.cljs$lang$maxFixedArity = 5;
G__34801.cljs$lang$applyTo = (function (arglist__34802){
var f = cljs.core.first(arglist__34802);
var a = cljs.core.first(cljs.core.next(arglist__34802));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34802)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__34802))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__34802)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__34802)))));
return G__34801__delegate.call(this, f, a, b, c, d, args);
});
return G__34801;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__34795.call(this,f,a);
case  3 :
return apply__34796.call(this,f,a,b);
case  4 :
return apply__34797.call(this,f,a,b,c);
case  5 :
return apply__34798.call(this,f,a,b,c,d);
default:
return apply__34799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__34799.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__34803){
var obj = cljs.core.first(arglist__34803);
var f = cljs.core.first(cljs.core.next(arglist__34803));
var args = cljs.core.rest(cljs.core.next(arglist__34803));
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
var not_EQ___34804 = (function (x){
return false;
});
var not_EQ___34805 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___34806 = (function() { 
var G__34808__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__34808 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34808__delegate.call(this, x, y, more);
};
G__34808.cljs$lang$maxFixedArity = 2;
G__34808.cljs$lang$applyTo = (function (arglist__34809){
var x = cljs.core.first(arglist__34809);
var y = cljs.core.first(cljs.core.next(arglist__34809));
var more = cljs.core.rest(cljs.core.next(arglist__34809));
return G__34808__delegate.call(this, x, y, more);
});
return G__34808;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___34804.call(this,x);
case  2 :
return not_EQ___34805.call(this,x,y);
default:
return not_EQ___34806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___34806.cljs$lang$applyTo;
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
var G__34810 = pred;
var G__34811 = cljs.core.next.call(null,coll);
pred = G__34810;
coll = G__34811;
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
{var or__3548__auto____34812 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____34812))
{return or__3548__auto____34812;
} else
{{
var G__34813 = pred;
var G__34814 = cljs.core.next.call(null,coll);
pred = G__34813;
coll = G__34814;
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
var G__34815 = null;
var G__34815__34816 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__34815__34817 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__34815__34818 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__34815__34819 = (function() { 
var G__34821__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__34821 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34821__delegate.call(this, x, y, zs);
};
G__34821.cljs$lang$maxFixedArity = 2;
G__34821.cljs$lang$applyTo = (function (arglist__34822){
var x = cljs.core.first(arglist__34822);
var y = cljs.core.first(cljs.core.next(arglist__34822));
var zs = cljs.core.rest(cljs.core.next(arglist__34822));
return G__34821__delegate.call(this, x, y, zs);
});
return G__34821;
})()
;
G__34815 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__34815__34816.call(this);
case  1 :
return G__34815__34817.call(this,x);
case  2 :
return G__34815__34818.call(this,x,y);
default:
return G__34815__34819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__34815.cljs$lang$maxFixedArity = 2;
G__34815.cljs$lang$applyTo = G__34815__34819.cljs$lang$applyTo;
return G__34815;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__34823__delegate = function (args){
return x;
};
var G__34823 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__34823__delegate.call(this, args);
};
G__34823.cljs$lang$maxFixedArity = 0;
G__34823.cljs$lang$applyTo = (function (arglist__34824){
var args = cljs.core.seq( arglist__34824 );;
return G__34823__delegate.call(this, args);
});
return G__34823;
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
var comp__34828 = (function (){
return cljs.core.identity;
});
var comp__34829 = (function (f){
return f;
});
var comp__34830 = (function (f,g){
return (function() {
var G__34834 = null;
var G__34834__34835 = (function (){
return f.call(null,g.call(null));
});
var G__34834__34836 = (function (x){
return f.call(null,g.call(null,x));
});
var G__34834__34837 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__34834__34838 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__34834__34839 = (function() { 
var G__34841__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__34841 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34841__delegate.call(this, x, y, z, args);
};
G__34841.cljs$lang$maxFixedArity = 3;
G__34841.cljs$lang$applyTo = (function (arglist__34842){
var x = cljs.core.first(arglist__34842);
var y = cljs.core.first(cljs.core.next(arglist__34842));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34842)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34842)));
return G__34841__delegate.call(this, x, y, z, args);
});
return G__34841;
})()
;
G__34834 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__34834__34835.call(this);
case  1 :
return G__34834__34836.call(this,x);
case  2 :
return G__34834__34837.call(this,x,y);
case  3 :
return G__34834__34838.call(this,x,y,z);
default:
return G__34834__34839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__34834.cljs$lang$maxFixedArity = 3;
G__34834.cljs$lang$applyTo = G__34834__34839.cljs$lang$applyTo;
return G__34834;
})()
});
var comp__34831 = (function (f,g,h){
return (function() {
var G__34843 = null;
var G__34843__34844 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__34843__34845 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__34843__34846 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__34843__34847 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__34843__34848 = (function() { 
var G__34850__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__34850 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34850__delegate.call(this, x, y, z, args);
};
G__34850.cljs$lang$maxFixedArity = 3;
G__34850.cljs$lang$applyTo = (function (arglist__34851){
var x = cljs.core.first(arglist__34851);
var y = cljs.core.first(cljs.core.next(arglist__34851));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34851)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34851)));
return G__34850__delegate.call(this, x, y, z, args);
});
return G__34850;
})()
;
G__34843 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__34843__34844.call(this);
case  1 :
return G__34843__34845.call(this,x);
case  2 :
return G__34843__34846.call(this,x,y);
case  3 :
return G__34843__34847.call(this,x,y,z);
default:
return G__34843__34848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__34843.cljs$lang$maxFixedArity = 3;
G__34843.cljs$lang$applyTo = G__34843__34848.cljs$lang$applyTo;
return G__34843;
})()
});
var comp__34832 = (function() { 
var G__34852__delegate = function (f1,f2,f3,fs){
var fs__34825 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__34853__delegate = function (args){
var ret__34826 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__34825),args);
var fs__34827 = cljs.core.next.call(null,fs__34825);

while(true){
if(cljs.core.truth_(fs__34827))
{{
var G__34854 = cljs.core.first.call(null,fs__34827).call(null,ret__34826);
var G__34855 = cljs.core.next.call(null,fs__34827);
ret__34826 = G__34854;
fs__34827 = G__34855;
continue;
}
} else
{return ret__34826;
}
break;
}
};
var G__34853 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__34853__delegate.call(this, args);
};
G__34853.cljs$lang$maxFixedArity = 0;
G__34853.cljs$lang$applyTo = (function (arglist__34856){
var args = cljs.core.seq( arglist__34856 );;
return G__34853__delegate.call(this, args);
});
return G__34853;
})()
;
};
var G__34852 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34852__delegate.call(this, f1, f2, f3, fs);
};
G__34852.cljs$lang$maxFixedArity = 3;
G__34852.cljs$lang$applyTo = (function (arglist__34857){
var f1 = cljs.core.first(arglist__34857);
var f2 = cljs.core.first(cljs.core.next(arglist__34857));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34857)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34857)));
return G__34852__delegate.call(this, f1, f2, f3, fs);
});
return G__34852;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__34828.call(this);
case  1 :
return comp__34829.call(this,f1);
case  2 :
return comp__34830.call(this,f1,f2);
case  3 :
return comp__34831.call(this,f1,f2,f3);
default:
return comp__34832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__34832.cljs$lang$applyTo;
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
var partial__34858 = (function (f,arg1){
return (function() { 
var G__34863__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__34863 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__34863__delegate.call(this, args);
};
G__34863.cljs$lang$maxFixedArity = 0;
G__34863.cljs$lang$applyTo = (function (arglist__34864){
var args = cljs.core.seq( arglist__34864 );;
return G__34863__delegate.call(this, args);
});
return G__34863;
})()
;
});
var partial__34859 = (function (f,arg1,arg2){
return (function() { 
var G__34865__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__34865 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__34865__delegate.call(this, args);
};
G__34865.cljs$lang$maxFixedArity = 0;
G__34865.cljs$lang$applyTo = (function (arglist__34866){
var args = cljs.core.seq( arglist__34866 );;
return G__34865__delegate.call(this, args);
});
return G__34865;
})()
;
});
var partial__34860 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__34867__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__34867 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__34867__delegate.call(this, args);
};
G__34867.cljs$lang$maxFixedArity = 0;
G__34867.cljs$lang$applyTo = (function (arglist__34868){
var args = cljs.core.seq( arglist__34868 );;
return G__34867__delegate.call(this, args);
});
return G__34867;
})()
;
});
var partial__34861 = (function() { 
var G__34869__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__34870__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__34870 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__34870__delegate.call(this, args);
};
G__34870.cljs$lang$maxFixedArity = 0;
G__34870.cljs$lang$applyTo = (function (arglist__34871){
var args = cljs.core.seq( arglist__34871 );;
return G__34870__delegate.call(this, args);
});
return G__34870;
})()
;
};
var G__34869 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__34869__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__34869.cljs$lang$maxFixedArity = 4;
G__34869.cljs$lang$applyTo = (function (arglist__34872){
var f = cljs.core.first(arglist__34872);
var arg1 = cljs.core.first(cljs.core.next(arglist__34872));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34872)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__34872))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__34872))));
return G__34869__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__34869;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__34858.call(this,f,arg1);
case  3 :
return partial__34859.call(this,f,arg1,arg2);
case  4 :
return partial__34860.call(this,f,arg1,arg2,arg3);
default:
return partial__34861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__34861.cljs$lang$applyTo;
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
var fnil__34873 = (function (f,x){
return (function() {
var G__34877 = null;
var G__34877__34878 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__34877__34879 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__34877__34880 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__34877__34881 = (function() { 
var G__34883__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__34883 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34883__delegate.call(this, a, b, c, ds);
};
G__34883.cljs$lang$maxFixedArity = 3;
G__34883.cljs$lang$applyTo = (function (arglist__34884){
var a = cljs.core.first(arglist__34884);
var b = cljs.core.first(cljs.core.next(arglist__34884));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34884)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34884)));
return G__34883__delegate.call(this, a, b, c, ds);
});
return G__34883;
})()
;
G__34877 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__34877__34878.call(this,a);
case  2 :
return G__34877__34879.call(this,a,b);
case  3 :
return G__34877__34880.call(this,a,b,c);
default:
return G__34877__34881.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__34877.cljs$lang$maxFixedArity = 3;
G__34877.cljs$lang$applyTo = G__34877__34881.cljs$lang$applyTo;
return G__34877;
})()
});
var fnil__34874 = (function (f,x,y){
return (function() {
var G__34885 = null;
var G__34885__34886 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__34885__34887 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__34885__34888 = (function() { 
var G__34890__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__34890 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34890__delegate.call(this, a, b, c, ds);
};
G__34890.cljs$lang$maxFixedArity = 3;
G__34890.cljs$lang$applyTo = (function (arglist__34891){
var a = cljs.core.first(arglist__34891);
var b = cljs.core.first(cljs.core.next(arglist__34891));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34891)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34891)));
return G__34890__delegate.call(this, a, b, c, ds);
});
return G__34890;
})()
;
G__34885 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__34885__34886.call(this,a,b);
case  3 :
return G__34885__34887.call(this,a,b,c);
default:
return G__34885__34888.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__34885.cljs$lang$maxFixedArity = 3;
G__34885.cljs$lang$applyTo = G__34885__34888.cljs$lang$applyTo;
return G__34885;
})()
});
var fnil__34875 = (function (f,x,y,z){
return (function() {
var G__34892 = null;
var G__34892__34893 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__34892__34894 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__34892__34895 = (function() { 
var G__34897__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__34897 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34897__delegate.call(this, a, b, c, ds);
};
G__34897.cljs$lang$maxFixedArity = 3;
G__34897.cljs$lang$applyTo = (function (arglist__34898){
var a = cljs.core.first(arglist__34898);
var b = cljs.core.first(cljs.core.next(arglist__34898));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34898)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34898)));
return G__34897__delegate.call(this, a, b, c, ds);
});
return G__34897;
})()
;
G__34892 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__34892__34893.call(this,a,b);
case  3 :
return G__34892__34894.call(this,a,b,c);
default:
return G__34892__34895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__34892.cljs$lang$maxFixedArity = 3;
G__34892.cljs$lang$applyTo = G__34892__34895.cljs$lang$applyTo;
return G__34892;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__34873.call(this,f,x);
case  3 :
return fnil__34874.call(this,f,x,y);
case  4 :
return fnil__34875.call(this,f,x,y,z);
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
var mapi__34901 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____34899 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____34899))
{var s__34900 = temp__3698__auto____34899;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__34900)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__34900)));
} else
{return null;
}
})));
});

return mapi__34901.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____34902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____34902))
{var s__34903 = temp__3698__auto____34902;

var x__34904 = f.call(null,cljs.core.first.call(null,s__34903));

if(cljs.core.truth_((x__34904 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__34903));
} else
{return cljs.core.cons.call(null,x__34904,keep.call(null,f,cljs.core.rest.call(null,s__34903)));
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
var keepi__34914 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____34911 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____34911))
{var s__34912 = temp__3698__auto____34911;

var x__34913 = f.call(null,idx,cljs.core.first.call(null,s__34912));

if(cljs.core.truth_((x__34913 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__34912));
} else
{return cljs.core.cons.call(null,x__34913,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__34912)));
}
} else
{return null;
}
})));
});

return keepi__34914.call(null,0,coll);
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
var every_pred__34959 = (function (p){
return (function() {
var ep1 = null;
var ep1__34964 = (function (){
return true;
});
var ep1__34965 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__34966 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34921 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____34921))
{return p.call(null,y);
} else
{return and__3546__auto____34921;
}
})());
});
var ep1__34967 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34922 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____34922))
{var and__3546__auto____34923 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____34923))
{return p.call(null,z);
} else
{return and__3546__auto____34923;
}
} else
{return and__3546__auto____34922;
}
})());
});
var ep1__34968 = (function() { 
var G__34970__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34924 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____34924))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____34924;
}
})());
};
var G__34970 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34970__delegate.call(this, x, y, z, args);
};
G__34970.cljs$lang$maxFixedArity = 3;
G__34970.cljs$lang$applyTo = (function (arglist__34971){
var x = cljs.core.first(arglist__34971);
var y = cljs.core.first(cljs.core.next(arglist__34971));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34971)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34971)));
return G__34970__delegate.call(this, x, y, z, args);
});
return G__34970;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__34964.call(this);
case  1 :
return ep1__34965.call(this,x);
case  2 :
return ep1__34966.call(this,x,y);
case  3 :
return ep1__34967.call(this,x,y,z);
default:
return ep1__34968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__34968.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__34960 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__34972 = (function (){
return true;
});
var ep2__34973 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34925 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____34925))
{return p2.call(null,x);
} else
{return and__3546__auto____34925;
}
})());
});
var ep2__34974 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34926 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____34926))
{var and__3546__auto____34927 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____34927))
{var and__3546__auto____34928 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____34928))
{return p2.call(null,y);
} else
{return and__3546__auto____34928;
}
} else
{return and__3546__auto____34927;
}
} else
{return and__3546__auto____34926;
}
})());
});
var ep2__34975 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34929 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____34929))
{var and__3546__auto____34930 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____34930))
{var and__3546__auto____34931 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____34931))
{var and__3546__auto____34932 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____34932))
{var and__3546__auto____34933 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____34933))
{return p2.call(null,z);
} else
{return and__3546__auto____34933;
}
} else
{return and__3546__auto____34932;
}
} else
{return and__3546__auto____34931;
}
} else
{return and__3546__auto____34930;
}
} else
{return and__3546__auto____34929;
}
})());
});
var ep2__34976 = (function() { 
var G__34978__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34934 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____34934))
{return cljs.core.every_QMARK_.call(null,(function (p1__34905_SHARP_){
var and__3546__auto____34935 = p1.call(null,p1__34905_SHARP_);

if(cljs.core.truth_(and__3546__auto____34935))
{return p2.call(null,p1__34905_SHARP_);
} else
{return and__3546__auto____34935;
}
}),args);
} else
{return and__3546__auto____34934;
}
})());
};
var G__34978 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34978__delegate.call(this, x, y, z, args);
};
G__34978.cljs$lang$maxFixedArity = 3;
G__34978.cljs$lang$applyTo = (function (arglist__34979){
var x = cljs.core.first(arglist__34979);
var y = cljs.core.first(cljs.core.next(arglist__34979));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34979)));
return G__34978__delegate.call(this, x, y, z, args);
});
return G__34978;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__34972.call(this);
case  1 :
return ep2__34973.call(this,x);
case  2 :
return ep2__34974.call(this,x,y);
case  3 :
return ep2__34975.call(this,x,y,z);
default:
return ep2__34976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__34976.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__34961 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__34980 = (function (){
return true;
});
var ep3__34981 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34936 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____34936))
{var and__3546__auto____34937 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____34937))
{return p3.call(null,x);
} else
{return and__3546__auto____34937;
}
} else
{return and__3546__auto____34936;
}
})());
});
var ep3__34982 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34938 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____34938))
{var and__3546__auto____34939 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____34939))
{var and__3546__auto____34940 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____34940))
{var and__3546__auto____34941 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____34941))
{var and__3546__auto____34942 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____34942))
{return p3.call(null,y);
} else
{return and__3546__auto____34942;
}
} else
{return and__3546__auto____34941;
}
} else
{return and__3546__auto____34940;
}
} else
{return and__3546__auto____34939;
}
} else
{return and__3546__auto____34938;
}
})());
});
var ep3__34983 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34943 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____34943))
{var and__3546__auto____34944 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____34944))
{var and__3546__auto____34945 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____34945))
{var and__3546__auto____34946 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____34946))
{var and__3546__auto____34947 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____34947))
{var and__3546__auto____34948 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____34948))
{var and__3546__auto____34949 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____34949))
{var and__3546__auto____34950 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____34950))
{return p3.call(null,z);
} else
{return and__3546__auto____34950;
}
} else
{return and__3546__auto____34949;
}
} else
{return and__3546__auto____34948;
}
} else
{return and__3546__auto____34947;
}
} else
{return and__3546__auto____34946;
}
} else
{return and__3546__auto____34945;
}
} else
{return and__3546__auto____34944;
}
} else
{return and__3546__auto____34943;
}
})());
});
var ep3__34984 = (function() { 
var G__34986__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34951 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____34951))
{return cljs.core.every_QMARK_.call(null,(function (p1__34906_SHARP_){
var and__3546__auto____34952 = p1.call(null,p1__34906_SHARP_);

if(cljs.core.truth_(and__3546__auto____34952))
{var and__3546__auto____34953 = p2.call(null,p1__34906_SHARP_);

if(cljs.core.truth_(and__3546__auto____34953))
{return p3.call(null,p1__34906_SHARP_);
} else
{return and__3546__auto____34953;
}
} else
{return and__3546__auto____34952;
}
}),args);
} else
{return and__3546__auto____34951;
}
})());
};
var G__34986 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34986__delegate.call(this, x, y, z, args);
};
G__34986.cljs$lang$maxFixedArity = 3;
G__34986.cljs$lang$applyTo = (function (arglist__34987){
var x = cljs.core.first(arglist__34987);
var y = cljs.core.first(cljs.core.next(arglist__34987));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34987)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34987)));
return G__34986__delegate.call(this, x, y, z, args);
});
return G__34986;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__34980.call(this);
case  1 :
return ep3__34981.call(this,x);
case  2 :
return ep3__34982.call(this,x,y);
case  3 :
return ep3__34983.call(this,x,y,z);
default:
return ep3__34984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__34984.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__34962 = (function() { 
var G__34988__delegate = function (p1,p2,p3,ps){
var ps__34954 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__34989 = (function (){
return true;
});
var epn__34990 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__34907_SHARP_){
return p1__34907_SHARP_.call(null,x);
}),ps__34954);
});
var epn__34991 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__34908_SHARP_){
var and__3546__auto____34955 = p1__34908_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____34955))
{return p1__34908_SHARP_.call(null,y);
} else
{return and__3546__auto____34955;
}
}),ps__34954);
});
var epn__34992 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__34909_SHARP_){
var and__3546__auto____34956 = p1__34909_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____34956))
{var and__3546__auto____34957 = p1__34909_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____34957))
{return p1__34909_SHARP_.call(null,z);
} else
{return and__3546__auto____34957;
}
} else
{return and__3546__auto____34956;
}
}),ps__34954);
});
var epn__34993 = (function() { 
var G__34995__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____34958 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____34958))
{return cljs.core.every_QMARK_.call(null,(function (p1__34910_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__34910_SHARP_,args);
}),ps__34954);
} else
{return and__3546__auto____34958;
}
})());
};
var G__34995 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34995__delegate.call(this, x, y, z, args);
};
G__34995.cljs$lang$maxFixedArity = 3;
G__34995.cljs$lang$applyTo = (function (arglist__34996){
var x = cljs.core.first(arglist__34996);
var y = cljs.core.first(cljs.core.next(arglist__34996));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34996)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34996)));
return G__34995__delegate.call(this, x, y, z, args);
});
return G__34995;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__34989.call(this);
case  1 :
return epn__34990.call(this,x);
case  2 :
return epn__34991.call(this,x,y);
case  3 :
return epn__34992.call(this,x,y,z);
default:
return epn__34993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__34993.cljs$lang$applyTo;
return epn;
})()
};
var G__34988 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__34988__delegate.call(this, p1, p2, p3, ps);
};
G__34988.cljs$lang$maxFixedArity = 3;
G__34988.cljs$lang$applyTo = (function (arglist__34997){
var p1 = cljs.core.first(arglist__34997);
var p2 = cljs.core.first(cljs.core.next(arglist__34997));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__34997)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__34997)));
return G__34988__delegate.call(this, p1, p2, p3, ps);
});
return G__34988;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__34959.call(this,p1);
case  2 :
return every_pred__34960.call(this,p1,p2);
case  3 :
return every_pred__34961.call(this,p1,p2,p3);
default:
return every_pred__34962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__34962.cljs$lang$applyTo;
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
var some_fn__35037 = (function (p){
return (function() {
var sp1 = null;
var sp1__35042 = (function (){
return null;
});
var sp1__35043 = (function (x){
return p.call(null,x);
});
var sp1__35044 = (function (x,y){
var or__3548__auto____34999 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____34999))
{return or__3548__auto____34999;
} else
{return p.call(null,y);
}
});
var sp1__35045 = (function (x,y,z){
var or__3548__auto____35000 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____35000))
{return or__3548__auto____35000;
} else
{var or__3548__auto____35001 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____35001))
{return or__3548__auto____35001;
} else
{return p.call(null,z);
}
}
});
var sp1__35046 = (function() { 
var G__35048__delegate = function (x,y,z,args){
var or__3548__auto____35002 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____35002))
{return or__3548__auto____35002;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__35048 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35048__delegate.call(this, x, y, z, args);
};
G__35048.cljs$lang$maxFixedArity = 3;
G__35048.cljs$lang$applyTo = (function (arglist__35049){
var x = cljs.core.first(arglist__35049);
var y = cljs.core.first(cljs.core.next(arglist__35049));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35049)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35049)));
return G__35048__delegate.call(this, x, y, z, args);
});
return G__35048;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__35042.call(this);
case  1 :
return sp1__35043.call(this,x);
case  2 :
return sp1__35044.call(this,x,y);
case  3 :
return sp1__35045.call(this,x,y,z);
default:
return sp1__35046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__35046.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__35038 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__35050 = (function (){
return null;
});
var sp2__35051 = (function (x){
var or__3548__auto____35003 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____35003))
{return or__3548__auto____35003;
} else
{return p2.call(null,x);
}
});
var sp2__35052 = (function (x,y){
var or__3548__auto____35004 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____35004))
{return or__3548__auto____35004;
} else
{var or__3548__auto____35005 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____35005))
{return or__3548__auto____35005;
} else
{var or__3548__auto____35006 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____35006))
{return or__3548__auto____35006;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__35053 = (function (x,y,z){
var or__3548__auto____35007 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____35007))
{return or__3548__auto____35007;
} else
{var or__3548__auto____35008 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____35008))
{return or__3548__auto____35008;
} else
{var or__3548__auto____35009 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____35009))
{return or__3548__auto____35009;
} else
{var or__3548__auto____35010 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____35010))
{return or__3548__auto____35010;
} else
{var or__3548__auto____35011 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____35011))
{return or__3548__auto____35011;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__35054 = (function() { 
var G__35056__delegate = function (x,y,z,args){
var or__3548__auto____35012 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____35012))
{return or__3548__auto____35012;
} else
{return cljs.core.some.call(null,(function (p1__34915_SHARP_){
var or__3548__auto____35013 = p1.call(null,p1__34915_SHARP_);

if(cljs.core.truth_(or__3548__auto____35013))
{return or__3548__auto____35013;
} else
{return p2.call(null,p1__34915_SHARP_);
}
}),args);
}
};
var G__35056 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35056__delegate.call(this, x, y, z, args);
};
G__35056.cljs$lang$maxFixedArity = 3;
G__35056.cljs$lang$applyTo = (function (arglist__35057){
var x = cljs.core.first(arglist__35057);
var y = cljs.core.first(cljs.core.next(arglist__35057));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35057)));
return G__35056__delegate.call(this, x, y, z, args);
});
return G__35056;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__35050.call(this);
case  1 :
return sp2__35051.call(this,x);
case  2 :
return sp2__35052.call(this,x,y);
case  3 :
return sp2__35053.call(this,x,y,z);
default:
return sp2__35054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__35054.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__35039 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__35058 = (function (){
return null;
});
var sp3__35059 = (function (x){
var or__3548__auto____35014 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____35014))
{return or__3548__auto____35014;
} else
{var or__3548__auto____35015 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____35015))
{return or__3548__auto____35015;
} else
{return p3.call(null,x);
}
}
});
var sp3__35060 = (function (x,y){
var or__3548__auto____35016 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____35016))
{return or__3548__auto____35016;
} else
{var or__3548__auto____35017 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____35017))
{return or__3548__auto____35017;
} else
{var or__3548__auto____35018 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____35018))
{return or__3548__auto____35018;
} else
{var or__3548__auto____35019 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____35019))
{return or__3548__auto____35019;
} else
{var or__3548__auto____35020 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____35020))
{return or__3548__auto____35020;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__35061 = (function (x,y,z){
var or__3548__auto____35021 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____35021))
{return or__3548__auto____35021;
} else
{var or__3548__auto____35022 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____35022))
{return or__3548__auto____35022;
} else
{var or__3548__auto____35023 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____35023))
{return or__3548__auto____35023;
} else
{var or__3548__auto____35024 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____35024))
{return or__3548__auto____35024;
} else
{var or__3548__auto____35025 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____35025))
{return or__3548__auto____35025;
} else
{var or__3548__auto____35026 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____35026))
{return or__3548__auto____35026;
} else
{var or__3548__auto____35027 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____35027))
{return or__3548__auto____35027;
} else
{var or__3548__auto____35028 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____35028))
{return or__3548__auto____35028;
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
var sp3__35062 = (function() { 
var G__35064__delegate = function (x,y,z,args){
var or__3548__auto____35029 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____35029))
{return or__3548__auto____35029;
} else
{return cljs.core.some.call(null,(function (p1__34916_SHARP_){
var or__3548__auto____35030 = p1.call(null,p1__34916_SHARP_);

if(cljs.core.truth_(or__3548__auto____35030))
{return or__3548__auto____35030;
} else
{var or__3548__auto____35031 = p2.call(null,p1__34916_SHARP_);

if(cljs.core.truth_(or__3548__auto____35031))
{return or__3548__auto____35031;
} else
{return p3.call(null,p1__34916_SHARP_);
}
}
}),args);
}
};
var G__35064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35064__delegate.call(this, x, y, z, args);
};
G__35064.cljs$lang$maxFixedArity = 3;
G__35064.cljs$lang$applyTo = (function (arglist__35065){
var x = cljs.core.first(arglist__35065);
var y = cljs.core.first(cljs.core.next(arglist__35065));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35065)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35065)));
return G__35064__delegate.call(this, x, y, z, args);
});
return G__35064;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__35058.call(this);
case  1 :
return sp3__35059.call(this,x);
case  2 :
return sp3__35060.call(this,x,y);
case  3 :
return sp3__35061.call(this,x,y,z);
default:
return sp3__35062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__35062.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__35040 = (function() { 
var G__35066__delegate = function (p1,p2,p3,ps){
var ps__35032 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__35067 = (function (){
return null;
});
var spn__35068 = (function (x){
return cljs.core.some.call(null,(function (p1__34917_SHARP_){
return p1__34917_SHARP_.call(null,x);
}),ps__35032);
});
var spn__35069 = (function (x,y){
return cljs.core.some.call(null,(function (p1__34918_SHARP_){
var or__3548__auto____35033 = p1__34918_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____35033))
{return or__3548__auto____35033;
} else
{return p1__34918_SHARP_.call(null,y);
}
}),ps__35032);
});
var spn__35070 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__34919_SHARP_){
var or__3548__auto____35034 = p1__34919_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____35034))
{return or__3548__auto____35034;
} else
{var or__3548__auto____35035 = p1__34919_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____35035))
{return or__3548__auto____35035;
} else
{return p1__34919_SHARP_.call(null,z);
}
}
}),ps__35032);
});
var spn__35071 = (function() { 
var G__35073__delegate = function (x,y,z,args){
var or__3548__auto____35036 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____35036))
{return or__3548__auto____35036;
} else
{return cljs.core.some.call(null,(function (p1__34920_SHARP_){
return cljs.core.some.call(null,p1__34920_SHARP_,args);
}),ps__35032);
}
};
var G__35073 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35073__delegate.call(this, x, y, z, args);
};
G__35073.cljs$lang$maxFixedArity = 3;
G__35073.cljs$lang$applyTo = (function (arglist__35074){
var x = cljs.core.first(arglist__35074);
var y = cljs.core.first(cljs.core.next(arglist__35074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35074)));
return G__35073__delegate.call(this, x, y, z, args);
});
return G__35073;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__35067.call(this);
case  1 :
return spn__35068.call(this,x);
case  2 :
return spn__35069.call(this,x,y);
case  3 :
return spn__35070.call(this,x,y,z);
default:
return spn__35071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__35071.cljs$lang$applyTo;
return spn;
})()
};
var G__35066 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35066__delegate.call(this, p1, p2, p3, ps);
};
G__35066.cljs$lang$maxFixedArity = 3;
G__35066.cljs$lang$applyTo = (function (arglist__35075){
var p1 = cljs.core.first(arglist__35075);
var p2 = cljs.core.first(cljs.core.next(arglist__35075));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35075)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35075)));
return G__35066__delegate.call(this, p1, p2, p3, ps);
});
return G__35066;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__35037.call(this,p1);
case  2 :
return some_fn__35038.call(this,p1,p2);
case  3 :
return some_fn__35039.call(this,p1,p2,p3);
default:
return some_fn__35040.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__35040.cljs$lang$applyTo;
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
var map__35088 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____35076 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35076))
{var s__35077 = temp__3698__auto____35076;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__35077)),map.call(null,f,cljs.core.rest.call(null,s__35077)));
} else
{return null;
}
})));
});
var map__35089 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__35078 = cljs.core.seq.call(null,c1);
var s2__35079 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____35080 = s1__35078;

if(cljs.core.truth_(and__3546__auto____35080))
{return s2__35079;
} else
{return and__3546__auto____35080;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__35078),cljs.core.first.call(null,s2__35079)),map.call(null,f,cljs.core.rest.call(null,s1__35078),cljs.core.rest.call(null,s2__35079)));
} else
{return null;
}
})));
});
var map__35090 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__35081 = cljs.core.seq.call(null,c1);
var s2__35082 = cljs.core.seq.call(null,c2);
var s3__35083 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____35084 = s1__35081;

if(cljs.core.truth_(and__3546__auto____35084))
{var and__3546__auto____35085 = s2__35082;

if(cljs.core.truth_(and__3546__auto____35085))
{return s3__35083;
} else
{return and__3546__auto____35085;
}
} else
{return and__3546__auto____35084;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__35081),cljs.core.first.call(null,s2__35082),cljs.core.first.call(null,s3__35083)),map.call(null,f,cljs.core.rest.call(null,s1__35081),cljs.core.rest.call(null,s2__35082),cljs.core.rest.call(null,s3__35083)));
} else
{return null;
}
})));
});
var map__35091 = (function() { 
var G__35093__delegate = function (f,c1,c2,c3,colls){
var step__35087 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__35086 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__35086)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__35086),step.call(null,map.call(null,cljs.core.rest,ss__35086)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__34998_SHARP_){
return cljs.core.apply.call(null,f,p1__34998_SHARP_);
}),step__35087.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__35093 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__35093__delegate.call(this, f, c1, c2, c3, colls);
};
G__35093.cljs$lang$maxFixedArity = 4;
G__35093.cljs$lang$applyTo = (function (arglist__35094){
var f = cljs.core.first(arglist__35094);
var c1 = cljs.core.first(cljs.core.next(arglist__35094));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35094)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__35094))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__35094))));
return G__35093__delegate.call(this, f, c1, c2, c3, colls);
});
return G__35093;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__35088.call(this,f,c1);
case  3 :
return map__35089.call(this,f,c1,c2);
case  4 :
return map__35090.call(this,f,c1,c2,c3);
default:
return map__35091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__35091.cljs$lang$applyTo;
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
{var temp__3698__auto____35095 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35095))
{var s__35096 = temp__3698__auto____35095;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__35096),take.call(null,(n - 1),cljs.core.rest.call(null,s__35096)));
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
var step__35099 = (function (n,coll){
while(true){
var s__35097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____35098 = (n > 0);

if(cljs.core.truth_(and__3546__auto____35098))
{return s__35097;
} else
{return and__3546__auto____35098;
}
})()))
{{
var G__35100 = (n - 1);
var G__35101 = cljs.core.rest.call(null,s__35097);
n = G__35100;
coll = G__35101;
continue;
}
} else
{return s__35097;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__35099.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__35102 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__35103 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__35102.call(this,n);
case  2 :
return drop_last__35103.call(this,n,s);
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
var s__35105 = cljs.core.seq.call(null,coll);
var lead__35106 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__35106))
{{
var G__35107 = cljs.core.next.call(null,s__35105);
var G__35108 = cljs.core.next.call(null,lead__35106);
s__35105 = G__35107;
lead__35106 = G__35108;
continue;
}
} else
{return s__35105;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__35111 = (function (pred,coll){
while(true){
var s__35109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____35110 = s__35109;

if(cljs.core.truth_(and__3546__auto____35110))
{return pred.call(null,cljs.core.first.call(null,s__35109));
} else
{return and__3546__auto____35110;
}
})()))
{{
var G__35112 = pred;
var G__35113 = cljs.core.rest.call(null,s__35109);
pred = G__35112;
coll = G__35113;
continue;
}
} else
{return s__35109;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__35111.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____35114 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35114))
{var s__35115 = temp__3698__auto____35114;

return cljs.core.concat.call(null,s__35115,cycle.call(null,s__35115));
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
var repeat__35116 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__35117 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__35116.call(this,n);
case  2 :
return repeat__35117.call(this,n,x);
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
var repeatedly__35119 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__35120 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__35119.call(this,n);
case  2 :
return repeatedly__35120.call(this,n,f);
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
var interleave__35126 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__35122 = cljs.core.seq.call(null,c1);
var s2__35123 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____35124 = s1__35122;

if(cljs.core.truth_(and__3546__auto____35124))
{return s2__35123;
} else
{return and__3546__auto____35124;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__35122),cljs.core.cons.call(null,cljs.core.first.call(null,s2__35123),interleave.call(null,cljs.core.rest.call(null,s1__35122),cljs.core.rest.call(null,s2__35123))));
} else
{return null;
}
})));
});
var interleave__35127 = (function() { 
var G__35129__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__35125 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__35125)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__35125),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__35125)));
} else
{return null;
}
})));
};
var G__35129 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__35129__delegate.call(this, c1, c2, colls);
};
G__35129.cljs$lang$maxFixedArity = 2;
G__35129.cljs$lang$applyTo = (function (arglist__35130){
var c1 = cljs.core.first(arglist__35130);
var c2 = cljs.core.first(cljs.core.next(arglist__35130));
var colls = cljs.core.rest(cljs.core.next(arglist__35130));
return G__35129__delegate.call(this, c1, c2, colls);
});
return G__35129;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__35126.call(this,c1,c2);
default:
return interleave__35127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__35127.cljs$lang$applyTo;
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
var cat__35133 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____35131 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____35131))
{var coll__35132 = temp__3695__auto____35131;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__35132),cat.call(null,cljs.core.rest.call(null,coll__35132),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__35133.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__35134 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__35135 = (function() { 
var G__35137__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__35137 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__35137__delegate.call(this, f, coll, colls);
};
G__35137.cljs$lang$maxFixedArity = 2;
G__35137.cljs$lang$applyTo = (function (arglist__35138){
var f = cljs.core.first(arglist__35138);
var coll = cljs.core.first(cljs.core.next(arglist__35138));
var colls = cljs.core.rest(cljs.core.next(arglist__35138));
return G__35137__delegate.call(this, f, coll, colls);
});
return G__35137;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__35134.call(this,f,coll);
default:
return mapcat__35135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__35135.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____35139 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35139))
{var s__35140 = temp__3698__auto____35139;

var f__35141 = cljs.core.first.call(null,s__35140);
var r__35142 = cljs.core.rest.call(null,s__35140);

if(cljs.core.truth_(pred.call(null,f__35141)))
{return cljs.core.cons.call(null,f__35141,filter.call(null,pred,r__35142));
} else
{return filter.call(null,pred,r__35142);
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
var walk__35144 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__35144.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__35143_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__35143_SHARP_));
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
var partition__35151 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__35152 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____35145 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35145))
{var s__35146 = temp__3698__auto____35145;

var p__35147 = cljs.core.take.call(null,n,s__35146);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__35147))))
{return cljs.core.cons.call(null,p__35147,partition.call(null,n,step,cljs.core.drop.call(null,step,s__35146)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__35153 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____35148 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35148))
{var s__35149 = temp__3698__auto____35148;

var p__35150 = cljs.core.take.call(null,n,s__35149);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__35150))))
{return cljs.core.cons.call(null,p__35150,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__35149)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__35150,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__35151.call(this,n,step);
case  3 :
return partition__35152.call(this,n,step,pad);
case  4 :
return partition__35153.call(this,n,step,pad,coll);
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
var get_in__35159 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__35160 = (function (m,ks,not_found){
var sentinel__35155 = cljs.core.lookup_sentinel;
var m__35156 = m;
var ks__35157 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__35157))
{var m__35158 = cljs.core.get.call(null,m__35156,cljs.core.first.call(null,ks__35157),sentinel__35155);

if(cljs.core.truth_((sentinel__35155 === m__35158)))
{return not_found;
} else
{{
var G__35162 = sentinel__35155;
var G__35163 = m__35158;
var G__35164 = cljs.core.next.call(null,ks__35157);
sentinel__35155 = G__35162;
m__35156 = G__35163;
ks__35157 = G__35164;
continue;
}
}
} else
{return m__35156;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__35159.call(this,m,ks);
case  3 :
return get_in__35160.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__35165,v){
var vec__35166__35167 = p__35165;
var k__35168 = cljs.core.nth.call(null,vec__35166__35167,0,null);
var ks__35169 = cljs.core.nthnext.call(null,vec__35166__35167,1);

if(cljs.core.truth_(ks__35169))
{return cljs.core.assoc.call(null,m,k__35168,assoc_in.call(null,cljs.core.get.call(null,m,k__35168),ks__35169,v));
} else
{return cljs.core.assoc.call(null,m,k__35168,v);
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
var update_in__delegate = function (m,p__35170,f,args){
var vec__35171__35172 = p__35170;
var k__35173 = cljs.core.nth.call(null,vec__35171__35172,0,null);
var ks__35174 = cljs.core.nthnext.call(null,vec__35171__35172,1);

if(cljs.core.truth_(ks__35174))
{return cljs.core.assoc.call(null,m,k__35173,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__35173),ks__35174,f,args));
} else
{return cljs.core.assoc.call(null,m,k__35173,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__35173),args));
}
};
var update_in = function (m,p__35170,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__35170, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__35175){
var m = cljs.core.first(arglist__35175);
var p__35170 = cljs.core.first(cljs.core.next(arglist__35175));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35175)));
return update_in__delegate.call(this, m, p__35170, f, args);
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
var this__35176 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__35209 = null;
var G__35209__35210 = (function (coll,k){
var this__35177 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__35209__35211 = (function (coll,k,not_found){
var this__35178 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__35209 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__35209__35210.call(this,coll,k);
case  3 :
return G__35209__35211.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35209;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__35179 = this;
var new_array__35180 = cljs.core.aclone.call(null,this__35179.array);

(new_array__35180[k] = v);
return (new cljs.core.Vector(this__35179.meta,new_array__35180));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__35213 = null;
var G__35213__35214 = (function (tsym35181,k){
var this__35183 = this;
var tsym35181__35184 = this;

var coll__35185 = tsym35181__35184;

return cljs.core._lookup.call(null,coll__35185,k);
});
var G__35213__35215 = (function (tsym35182,k,not_found){
var this__35186 = this;
var tsym35182__35187 = this;

var coll__35188 = tsym35182__35187;

return cljs.core._lookup.call(null,coll__35188,k,not_found);
});
G__35213 = function(tsym35182,k,not_found){
switch(arguments.length){
case  2 :
return G__35213__35214.call(this,tsym35182,k);
case  3 :
return G__35213__35215.call(this,tsym35182,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35213;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__35189 = this;
var new_array__35190 = cljs.core.aclone.call(null,this__35189.array);

new_array__35190.push(o);
return (new cljs.core.Vector(this__35189.meta,new_array__35190));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__35217 = null;
var G__35217__35218 = (function (v,f){
var this__35191 = this;
return cljs.core.ci_reduce.call(null,this__35191.array,f);
});
var G__35217__35219 = (function (v,f,start){
var this__35192 = this;
return cljs.core.ci_reduce.call(null,this__35192.array,f,start);
});
G__35217 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__35217__35218.call(this,v,f);
case  3 :
return G__35217__35219.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35217;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__35193 = this;
if(cljs.core.truth_((this__35193.array.length > 0)))
{var vector_seq__35194 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__35193.array.length)))
{return cljs.core.cons.call(null,(this__35193.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__35194.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__35195 = this;
return this__35195.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__35196 = this;
var count__35197 = this__35196.array.length;

if(cljs.core.truth_((count__35197 > 0)))
{return (this__35196.array[(count__35197 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__35198 = this;
if(cljs.core.truth_((this__35198.array.length > 0)))
{var new_array__35199 = cljs.core.aclone.call(null,this__35198.array);

new_array__35199.pop();
return (new cljs.core.Vector(this__35198.meta,new_array__35199));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__35200 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__35201 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__35202 = this;
return (new cljs.core.Vector(meta,this__35202.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__35203 = this;
return this__35203.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__35221 = null;
var G__35221__35222 = (function (coll,n){
var this__35204 = this;
if(cljs.core.truth_((function (){var and__3546__auto____35205 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____35205))
{return (n < this__35204.array.length);
} else
{return and__3546__auto____35205;
}
})()))
{return (this__35204.array[n]);
} else
{return null;
}
});
var G__35221__35223 = (function (coll,n,not_found){
var this__35206 = this;
if(cljs.core.truth_((function (){var and__3546__auto____35207 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____35207))
{return (n < this__35206.array.length);
} else
{return and__3546__auto____35207;
}
})()))
{return (this__35206.array[n]);
} else
{return not_found;
}
});
G__35221 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__35221__35222.call(this,coll,n);
case  3 :
return G__35221__35223.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35221;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__35208 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__35208.meta);
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
vector.cljs$lang$applyTo = (function (arglist__35225){
var args = cljs.core.seq( arglist__35225 );;
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
var this__35226 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__35254 = null;
var G__35254__35255 = (function (coll,k){
var this__35227 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__35254__35256 = (function (coll,k,not_found){
var this__35228 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__35254 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__35254__35255.call(this,coll,k);
case  3 :
return G__35254__35256.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35254;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__35229 = this;
var v_pos__35230 = (this__35229.start + key);

return (new cljs.core.Subvec(this__35229.meta,cljs.core._assoc.call(null,this__35229.v,v_pos__35230,val),this__35229.start,((this__35229.end > (v_pos__35230 + 1)) ? this__35229.end : (v_pos__35230 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__35258 = null;
var G__35258__35259 = (function (tsym35231,k){
var this__35233 = this;
var tsym35231__35234 = this;

var coll__35235 = tsym35231__35234;

return cljs.core._lookup.call(null,coll__35235,k);
});
var G__35258__35260 = (function (tsym35232,k,not_found){
var this__35236 = this;
var tsym35232__35237 = this;

var coll__35238 = tsym35232__35237;

return cljs.core._lookup.call(null,coll__35238,k,not_found);
});
G__35258 = function(tsym35232,k,not_found){
switch(arguments.length){
case  2 :
return G__35258__35259.call(this,tsym35232,k);
case  3 :
return G__35258__35260.call(this,tsym35232,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35258;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__35239 = this;
return (new cljs.core.Subvec(this__35239.meta,cljs.core._assoc_n.call(null,this__35239.v,this__35239.end,o),this__35239.start,(this__35239.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__35262 = null;
var G__35262__35263 = (function (coll,f){
var this__35240 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__35262__35264 = (function (coll,f,start){
var this__35241 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__35262 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__35262__35263.call(this,coll,f);
case  3 :
return G__35262__35264.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35262;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__35242 = this;
var subvec_seq__35243 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__35242.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__35242.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__35243.call(null,this__35242.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__35244 = this;
return (this__35244.end - this__35244.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__35245 = this;
return cljs.core._nth.call(null,this__35245.v,(this__35245.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__35246 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__35246.start,this__35246.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__35246.meta,this__35246.v,this__35246.start,(this__35246.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__35247 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__35248 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__35249 = this;
return (new cljs.core.Subvec(meta,this__35249.v,this__35249.start,this__35249.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__35250 = this;
return this__35250.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__35266 = null;
var G__35266__35267 = (function (coll,n){
var this__35251 = this;
return cljs.core._nth.call(null,this__35251.v,(this__35251.start + n));
});
var G__35266__35268 = (function (coll,n,not_found){
var this__35252 = this;
return cljs.core._nth.call(null,this__35252.v,(this__35252.start + n),not_found);
});
G__35266 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__35266__35267.call(this,coll,n);
case  3 :
return G__35266__35268.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35266;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__35253 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__35253.meta);
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
var subvec__35270 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__35271 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__35270.call(this,v,start);
case  3 :
return subvec__35271.call(this,v,start,end);
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
var this__35273 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__35274 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__35275 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__35276 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__35276.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__35277 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__35278 = this;
return cljs.core._first.call(null,this__35278.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__35279 = this;
var temp__3695__auto____35280 = cljs.core.next.call(null,this__35279.front);

if(cljs.core.truth_(temp__3695__auto____35280))
{var f1__35281 = temp__3695__auto____35280;

return (new cljs.core.PersistentQueueSeq(this__35279.meta,f1__35281,this__35279.rear));
} else
{if(cljs.core.truth_((this__35279.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__35279.meta,this__35279.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__35282 = this;
return this__35282.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__35283 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__35283.front,this__35283.rear));
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
var this__35284 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__35285 = this;
if(cljs.core.truth_(this__35285.front))
{return (new cljs.core.PersistentQueue(this__35285.meta,(this__35285.count + 1),this__35285.front,cljs.core.conj.call(null,(function (){var or__3548__auto____35286 = this__35285.rear;

if(cljs.core.truth_(or__3548__auto____35286))
{return or__3548__auto____35286;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__35285.meta,(this__35285.count + 1),cljs.core.conj.call(null,this__35285.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__35287 = this;
var rear__35288 = cljs.core.seq.call(null,this__35287.rear);

if(cljs.core.truth_((function (){var or__3548__auto____35289 = this__35287.front;

if(cljs.core.truth_(or__3548__auto____35289))
{return or__3548__auto____35289;
} else
{return rear__35288;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__35287.front,cljs.core.seq.call(null,rear__35288)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__35290 = this;
return this__35290.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__35291 = this;
return cljs.core._first.call(null,this__35291.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__35292 = this;
if(cljs.core.truth_(this__35292.front))
{var temp__3695__auto____35293 = cljs.core.next.call(null,this__35292.front);

if(cljs.core.truth_(temp__3695__auto____35293))
{var f1__35294 = temp__3695__auto____35293;

return (new cljs.core.PersistentQueue(this__35292.meta,(this__35292.count - 1),f1__35294,this__35292.rear));
} else
{return (new cljs.core.PersistentQueue(this__35292.meta,(this__35292.count - 1),cljs.core.seq.call(null,this__35292.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__35295 = this;
return cljs.core.first.call(null,this__35295.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__35296 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__35297 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__35298 = this;
return (new cljs.core.PersistentQueue(meta,this__35298.count,this__35298.front,this__35298.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__35299 = this;
return this__35299.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__35300 = this;
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
var this__35301 = this;
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
var len__35302 = array.length;

var i__35303 = 0;

while(true){
if(cljs.core.truth_((i__35303 < len__35302)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__35303]))))
{return i__35303;
} else
{{
var G__35304 = (i__35303 + incr);
i__35303 = G__35304;
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
var obj_map_contains_key_QMARK___35306 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___35307 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____35305 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____35305))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____35305;
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
return obj_map_contains_key_QMARK___35306.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___35307.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__35310 = cljs.core.hash.call(null,a);
var b__35311 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__35310 < b__35311)))
{return -1;
} else
{if(cljs.core.truth_((a__35310 > b__35311)))
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
var this__35312 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__35339 = null;
var G__35339__35340 = (function (coll,k){
var this__35313 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__35339__35341 = (function (coll,k,not_found){
var this__35314 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__35314.strobj,(this__35314.strobj[k]),not_found);
});
G__35339 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__35339__35340.call(this,coll,k);
case  3 :
return G__35339__35341.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35339;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__35315 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__35316 = goog.object.clone.call(null,this__35315.strobj);
var overwrite_QMARK___35317 = new_strobj__35316.hasOwnProperty(k);

(new_strobj__35316[k] = v);
if(cljs.core.truth_(overwrite_QMARK___35317))
{return (new cljs.core.ObjMap(this__35315.meta,this__35315.keys,new_strobj__35316));
} else
{var new_keys__35318 = cljs.core.aclone.call(null,this__35315.keys);

new_keys__35318.push(k);
return (new cljs.core.ObjMap(this__35315.meta,new_keys__35318,new_strobj__35316));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__35315.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__35319 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__35319.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__35343 = null;
var G__35343__35344 = (function (tsym35320,k){
var this__35322 = this;
var tsym35320__35323 = this;

var coll__35324 = tsym35320__35323;

return cljs.core._lookup.call(null,coll__35324,k);
});
var G__35343__35345 = (function (tsym35321,k,not_found){
var this__35325 = this;
var tsym35321__35326 = this;

var coll__35327 = tsym35321__35326;

return cljs.core._lookup.call(null,coll__35327,k,not_found);
});
G__35343 = function(tsym35321,k,not_found){
switch(arguments.length){
case  2 :
return G__35343__35344.call(this,tsym35321,k);
case  3 :
return G__35343__35345.call(this,tsym35321,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35343;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__35328 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__35329 = this;
if(cljs.core.truth_((this__35329.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__35309_SHARP_){
return cljs.core.vector.call(null,p1__35309_SHARP_,(this__35329.strobj[p1__35309_SHARP_]));
}),this__35329.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__35330 = this;
return this__35330.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__35331 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__35332 = this;
return (new cljs.core.ObjMap(meta,this__35332.keys,this__35332.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__35333 = this;
return this__35333.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__35334 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__35334.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__35335 = this;
if(cljs.core.truth_((function (){var and__3546__auto____35336 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____35336))
{return this__35335.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____35336;
}
})()))
{var new_keys__35337 = cljs.core.aclone.call(null,this__35335.keys);
var new_strobj__35338 = goog.object.clone.call(null,this__35335.strobj);

new_keys__35337.splice(cljs.core.scan_array.call(null,1,k,new_keys__35337),1);
cljs.core.js_delete.call(null,new_strobj__35338,k);
return (new cljs.core.ObjMap(this__35335.meta,new_keys__35337,new_strobj__35338));
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
var this__35348 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__35386 = null;
var G__35386__35387 = (function (coll,k){
var this__35349 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__35386__35388 = (function (coll,k,not_found){
var this__35350 = this;
var bucket__35351 = (this__35350.hashobj[cljs.core.hash.call(null,k)]);
var i__35352 = (cljs.core.truth_(bucket__35351)?cljs.core.scan_array.call(null,2,k,bucket__35351):null);

if(cljs.core.truth_(i__35352))
{return (bucket__35351[(i__35352 + 1)]);
} else
{return not_found;
}
});
G__35386 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__35386__35387.call(this,coll,k);
case  3 :
return G__35386__35388.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35386;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__35353 = this;
var h__35354 = cljs.core.hash.call(null,k);
var bucket__35355 = (this__35353.hashobj[h__35354]);

if(cljs.core.truth_(bucket__35355))
{var new_bucket__35356 = cljs.core.aclone.call(null,bucket__35355);
var new_hashobj__35357 = goog.object.clone.call(null,this__35353.hashobj);

(new_hashobj__35357[h__35354] = new_bucket__35356);
var temp__3695__auto____35358 = cljs.core.scan_array.call(null,2,k,new_bucket__35356);

if(cljs.core.truth_(temp__3695__auto____35358))
{var i__35359 = temp__3695__auto____35358;

(new_bucket__35356[(i__35359 + 1)] = v);
return (new cljs.core.HashMap(this__35353.meta,this__35353.count,new_hashobj__35357));
} else
{new_bucket__35356.push(k,v);
return (new cljs.core.HashMap(this__35353.meta,(this__35353.count + 1),new_hashobj__35357));
}
} else
{var new_hashobj__35360 = goog.object.clone.call(null,this__35353.hashobj);

(new_hashobj__35360[h__35354] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__35353.meta,(this__35353.count + 1),new_hashobj__35360));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__35361 = this;
var bucket__35362 = (this__35361.hashobj[cljs.core.hash.call(null,k)]);
var i__35363 = (cljs.core.truth_(bucket__35362)?cljs.core.scan_array.call(null,2,k,bucket__35362):null);

if(cljs.core.truth_(i__35363))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__35390 = null;
var G__35390__35391 = (function (tsym35364,k){
var this__35366 = this;
var tsym35364__35367 = this;

var coll__35368 = tsym35364__35367;

return cljs.core._lookup.call(null,coll__35368,k);
});
var G__35390__35392 = (function (tsym35365,k,not_found){
var this__35369 = this;
var tsym35365__35370 = this;

var coll__35371 = tsym35365__35370;

return cljs.core._lookup.call(null,coll__35371,k,not_found);
});
G__35390 = function(tsym35365,k,not_found){
switch(arguments.length){
case  2 :
return G__35390__35391.call(this,tsym35365,k);
case  3 :
return G__35390__35392.call(this,tsym35365,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35390;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__35372 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__35373 = this;
if(cljs.core.truth_((this__35373.count > 0)))
{var hashes__35374 = cljs.core.js_keys.call(null,this__35373.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__35347_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__35373.hashobj[p1__35347_SHARP_])));
}),hashes__35374);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__35375 = this;
return this__35375.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__35376 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__35377 = this;
return (new cljs.core.HashMap(meta,this__35377.count,this__35377.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__35378 = this;
return this__35378.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__35379 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__35379.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__35380 = this;
var h__35381 = cljs.core.hash.call(null,k);
var bucket__35382 = (this__35380.hashobj[h__35381]);
var i__35383 = (cljs.core.truth_(bucket__35382)?cljs.core.scan_array.call(null,2,k,bucket__35382):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__35383)))
{return coll;
} else
{var new_hashobj__35384 = goog.object.clone.call(null,this__35380.hashobj);

if(cljs.core.truth_((3 > bucket__35382.length)))
{cljs.core.js_delete.call(null,new_hashobj__35384,h__35381);
} else
{var new_bucket__35385 = cljs.core.aclone.call(null,bucket__35382);

new_bucket__35385.splice(i__35383,2);
(new_hashobj__35384[h__35381] = new_bucket__35385);
}
return (new cljs.core.HashMap(this__35380.meta,(this__35380.count - 1),new_hashobj__35384));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__35394 = ks.length;

var i__35395 = 0;
var out__35396 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__35395 < len__35394)))
{{
var G__35397 = (i__35395 + 1);
var G__35398 = cljs.core.assoc.call(null,out__35396,(ks[i__35395]),(vs[i__35395]));
i__35395 = G__35397;
out__35396 = G__35398;
continue;
}
} else
{return out__35396;
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
var in$__35399 = cljs.core.seq.call(null,keyvals);
var out__35400 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__35399))
{{
var G__35401 = cljs.core.nnext.call(null,in$__35399);
var G__35402 = cljs.core.assoc.call(null,out__35400,cljs.core.first.call(null,in$__35399),cljs.core.second.call(null,in$__35399));
in$__35399 = G__35401;
out__35400 = G__35402;
continue;
}
} else
{return out__35400;
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
hash_map.cljs$lang$applyTo = (function (arglist__35403){
var keyvals = cljs.core.seq( arglist__35403 );;
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
{return cljs.core.reduce.call(null,(function (p1__35404_SHARP_,p2__35405_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____35406 = p1__35404_SHARP_;

if(cljs.core.truth_(or__3548__auto____35406))
{return or__3548__auto____35406;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__35405_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__35407){
var maps = cljs.core.seq( arglist__35407 );;
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
{var merge_entry__35410 = (function (m,e){
var k__35408 = cljs.core.first.call(null,e);
var v__35409 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__35408)))
{return cljs.core.assoc.call(null,m,k__35408,f.call(null,cljs.core.get.call(null,m,k__35408),v__35409));
} else
{return cljs.core.assoc.call(null,m,k__35408,v__35409);
}
});
var merge2__35412 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__35410,(function (){var or__3548__auto____35411 = m1;

if(cljs.core.truth_(or__3548__auto____35411))
{return or__3548__auto____35411;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__35412,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__35413){
var f = cljs.core.first(arglist__35413);
var maps = cljs.core.rest(arglist__35413);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__35415 = cljs.core.ObjMap.fromObject([],{});
var keys__35416 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__35416))
{var key__35417 = cljs.core.first.call(null,keys__35416);
var entry__35418 = cljs.core.get.call(null,map,key__35417,"\uFDD0'user/not-found");

{
var G__35419 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__35418,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__35415,key__35417,entry__35418):ret__35415);
var G__35420 = cljs.core.next.call(null,keys__35416);
ret__35415 = G__35419;
keys__35416 = G__35420;
continue;
}
} else
{return ret__35415;
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
var this__35421 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__35442 = null;
var G__35442__35443 = (function (coll,v){
var this__35422 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__35442__35444 = (function (coll,v,not_found){
var this__35423 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__35423.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__35442 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__35442__35443.call(this,coll,v);
case  3 :
return G__35442__35444.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35442;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__35446 = null;
var G__35446__35447 = (function (tsym35424,k){
var this__35426 = this;
var tsym35424__35427 = this;

var coll__35428 = tsym35424__35427;

return cljs.core._lookup.call(null,coll__35428,k);
});
var G__35446__35448 = (function (tsym35425,k,not_found){
var this__35429 = this;
var tsym35425__35430 = this;

var coll__35431 = tsym35425__35430;

return cljs.core._lookup.call(null,coll__35431,k,not_found);
});
G__35446 = function(tsym35425,k,not_found){
switch(arguments.length){
case  2 :
return G__35446__35447.call(this,tsym35425,k);
case  3 :
return G__35446__35448.call(this,tsym35425,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35446;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__35432 = this;
return (new cljs.core.Set(this__35432.meta,cljs.core.assoc.call(null,this__35432.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__35433 = this;
return cljs.core.keys.call(null,this__35433.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__35434 = this;
return (new cljs.core.Set(this__35434.meta,cljs.core.dissoc.call(null,this__35434.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__35435 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__35436 = this;
var and__3546__auto____35437 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____35437))
{var and__3546__auto____35438 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____35438))
{return cljs.core.every_QMARK_.call(null,(function (p1__35414_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__35414_SHARP_);
}),other);
} else
{return and__3546__auto____35438;
}
} else
{return and__3546__auto____35437;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__35439 = this;
return (new cljs.core.Set(meta,this__35439.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__35440 = this;
return this__35440.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__35441 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__35441.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__35451 = cljs.core.seq.call(null,coll);
var out__35452 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__35451))))
{{
var G__35453 = cljs.core.rest.call(null,in$__35451);
var G__35454 = cljs.core.conj.call(null,out__35452,cljs.core.first.call(null,in$__35451));
in$__35451 = G__35453;
out__35452 = G__35454;
continue;
}
} else
{return out__35452;
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
{var n__35455 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____35456 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____35456))
{var e__35457 = temp__3695__auto____35456;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__35457));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__35455,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__35450_SHARP_){
var temp__3695__auto____35458 = cljs.core.find.call(null,smap,p1__35450_SHARP_);

if(cljs.core.truth_(temp__3695__auto____35458))
{var e__35459 = temp__3695__auto____35458;

return cljs.core.second.call(null,e__35459);
} else
{return p1__35450_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__35467 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__35460,seen){
while(true){
var vec__35461__35462 = p__35460;
var f__35463 = cljs.core.nth.call(null,vec__35461__35462,0,null);
var xs__35464 = vec__35461__35462;

var temp__3698__auto____35465 = cljs.core.seq.call(null,xs__35464);

if(cljs.core.truth_(temp__3698__auto____35465))
{var s__35466 = temp__3698__auto____35465;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__35463)))
{{
var G__35468 = cljs.core.rest.call(null,s__35466);
var G__35469 = seen;
p__35460 = G__35468;
seen = G__35469;
continue;
}
} else
{return cljs.core.cons.call(null,f__35463,step.call(null,cljs.core.rest.call(null,s__35466),cljs.core.conj.call(null,seen,f__35463)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__35467.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__35470 = cljs.core.Vector.fromArray([]);
var s__35471 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__35471)))
{{
var G__35472 = cljs.core.conj.call(null,ret__35470,cljs.core.first.call(null,s__35471));
var G__35473 = cljs.core.next.call(null,s__35471);
ret__35470 = G__35472;
s__35471 = G__35473;
continue;
}
} else
{return cljs.core.seq.call(null,ret__35470);
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
{if(cljs.core.truth_((function (){var or__3548__auto____35474 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____35474))
{return or__3548__auto____35474;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__35475 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__35475 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__35475 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____35476 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____35476))
{return or__3548__auto____35476;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__35477 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__35477 > -1)))
{return cljs.core.subs.call(null,x,2,i__35477);
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
var map__35480 = cljs.core.ObjMap.fromObject([],{});
var ks__35481 = cljs.core.seq.call(null,keys);
var vs__35482 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____35483 = ks__35481;

if(cljs.core.truth_(and__3546__auto____35483))
{return vs__35482;
} else
{return and__3546__auto____35483;
}
})()))
{{
var G__35484 = cljs.core.assoc.call(null,map__35480,cljs.core.first.call(null,ks__35481),cljs.core.first.call(null,vs__35482));
var G__35485 = cljs.core.next.call(null,ks__35481);
var G__35486 = cljs.core.next.call(null,vs__35482);
map__35480 = G__35484;
ks__35481 = G__35485;
vs__35482 = G__35486;
continue;
}
} else
{return map__35480;
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
var max_key__35489 = (function (k,x){
return x;
});
var max_key__35490 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__35491 = (function() { 
var G__35493__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__35478_SHARP_,p2__35479_SHARP_){
return max_key.call(null,k,p1__35478_SHARP_,p2__35479_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__35493 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35493__delegate.call(this, k, x, y, more);
};
G__35493.cljs$lang$maxFixedArity = 3;
G__35493.cljs$lang$applyTo = (function (arglist__35494){
var k = cljs.core.first(arglist__35494);
var x = cljs.core.first(cljs.core.next(arglist__35494));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35494)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35494)));
return G__35493__delegate.call(this, k, x, y, more);
});
return G__35493;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__35489.call(this,k,x);
case  3 :
return max_key__35490.call(this,k,x,y);
default:
return max_key__35491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__35491.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__35495 = (function (k,x){
return x;
});
var min_key__35496 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__35497 = (function() { 
var G__35499__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__35487_SHARP_,p2__35488_SHARP_){
return min_key.call(null,k,p1__35487_SHARP_,p2__35488_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__35499 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35499__delegate.call(this, k, x, y, more);
};
G__35499.cljs$lang$maxFixedArity = 3;
G__35499.cljs$lang$applyTo = (function (arglist__35500){
var k = cljs.core.first(arglist__35500);
var x = cljs.core.first(cljs.core.next(arglist__35500));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35500)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35500)));
return G__35499__delegate.call(this, k, x, y, more);
});
return G__35499;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__35495.call(this,k,x);
case  3 :
return min_key__35496.call(this,k,x,y);
default:
return min_key__35497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__35497.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__35503 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__35504 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____35501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35501))
{var s__35502 = temp__3698__auto____35501;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__35502),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__35502)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__35503.call(this,n,step);
case  3 :
return partition_all__35504.call(this,n,step,coll);
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
var temp__3698__auto____35506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35506))
{var s__35507 = temp__3698__auto____35506;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__35507))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__35507),take_while.call(null,pred,cljs.core.rest.call(null,s__35507)));
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
var this__35508 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__35509 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__35525 = null;
var G__35525__35526 = (function (rng,f){
var this__35510 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__35525__35527 = (function (rng,f,s){
var this__35511 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__35525 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__35525__35526.call(this,rng,f);
case  3 :
return G__35525__35527.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35525;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__35512 = this;
var comp__35513 = (cljs.core.truth_((this__35512.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__35513.call(null,this__35512.start,this__35512.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__35514 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__35514.end - this__35514.start) / this__35514.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__35515 = this;
return this__35515.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__35516 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__35516.meta,(this__35516.start + this__35516.step),this__35516.end,this__35516.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__35517 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__35518 = this;
return (new cljs.core.Range(meta,this__35518.start,this__35518.end,this__35518.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__35519 = this;
return this__35519.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__35529 = null;
var G__35529__35530 = (function (rng,n){
var this__35520 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__35520.start + (n * this__35520.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____35521 = (this__35520.start > this__35520.end);

if(cljs.core.truth_(and__3546__auto____35521))
{return cljs.core._EQ_.call(null,this__35520.step,0);
} else
{return and__3546__auto____35521;
}
})()))
{return this__35520.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__35529__35531 = (function (rng,n,not_found){
var this__35522 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__35522.start + (n * this__35522.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____35523 = (this__35522.start > this__35522.end);

if(cljs.core.truth_(and__3546__auto____35523))
{return cljs.core._EQ_.call(null,this__35522.step,0);
} else
{return and__3546__auto____35523;
}
})()))
{return this__35522.start;
} else
{return not_found;
}
}
});
G__35529 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__35529__35530.call(this,rng,n);
case  3 :
return G__35529__35531.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35529;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__35524 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__35524.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__35533 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__35534 = (function (end){
return range.call(null,0,end,1);
});
var range__35535 = (function (start,end){
return range.call(null,start,end,1);
});
var range__35536 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__35533.call(this);
case  1 :
return range__35534.call(this,start);
case  2 :
return range__35535.call(this,start,end);
case  3 :
return range__35536.call(this,start,end,step);
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
var temp__3698__auto____35538 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35538))
{var s__35539 = temp__3698__auto____35538;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__35539),take_nth.call(null,n,cljs.core.drop.call(null,n,s__35539)));
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
var temp__3698__auto____35541 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35541))
{var s__35542 = temp__3698__auto____35541;

var fst__35543 = cljs.core.first.call(null,s__35542);
var fv__35544 = f.call(null,fst__35543);
var run__35545 = cljs.core.cons.call(null,fst__35543,cljs.core.take_while.call(null,(function (p1__35540_SHARP_){
return cljs.core._EQ_.call(null,fv__35544,f.call(null,p1__35540_SHARP_));
}),cljs.core.next.call(null,s__35542)));

return cljs.core.cons.call(null,run__35545,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__35545),s__35542))));
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
var reductions__35560 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____35556 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____35556))
{var s__35557 = temp__3695__auto____35556;

return reductions.call(null,f,cljs.core.first.call(null,s__35557),cljs.core.rest.call(null,s__35557));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__35561 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____35558 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____35558))
{var s__35559 = temp__3698__auto____35558;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__35559)),cljs.core.rest.call(null,s__35559));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__35560.call(this,f,init);
case  3 :
return reductions__35561.call(this,f,init,coll);
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
var juxt__35564 = (function (f){
return (function() {
var G__35569 = null;
var G__35569__35570 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__35569__35571 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__35569__35572 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__35569__35573 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__35569__35574 = (function() { 
var G__35576__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__35576 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35576__delegate.call(this, x, y, z, args);
};
G__35576.cljs$lang$maxFixedArity = 3;
G__35576.cljs$lang$applyTo = (function (arglist__35577){
var x = cljs.core.first(arglist__35577);
var y = cljs.core.first(cljs.core.next(arglist__35577));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35577)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35577)));
return G__35576__delegate.call(this, x, y, z, args);
});
return G__35576;
})()
;
G__35569 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__35569__35570.call(this);
case  1 :
return G__35569__35571.call(this,x);
case  2 :
return G__35569__35572.call(this,x,y);
case  3 :
return G__35569__35573.call(this,x,y,z);
default:
return G__35569__35574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__35569.cljs$lang$maxFixedArity = 3;
G__35569.cljs$lang$applyTo = G__35569__35574.cljs$lang$applyTo;
return G__35569;
})()
});
var juxt__35565 = (function (f,g){
return (function() {
var G__35578 = null;
var G__35578__35579 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__35578__35580 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__35578__35581 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__35578__35582 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__35578__35583 = (function() { 
var G__35585__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__35585 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35585__delegate.call(this, x, y, z, args);
};
G__35585.cljs$lang$maxFixedArity = 3;
G__35585.cljs$lang$applyTo = (function (arglist__35586){
var x = cljs.core.first(arglist__35586);
var y = cljs.core.first(cljs.core.next(arglist__35586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35586)));
return G__35585__delegate.call(this, x, y, z, args);
});
return G__35585;
})()
;
G__35578 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__35578__35579.call(this);
case  1 :
return G__35578__35580.call(this,x);
case  2 :
return G__35578__35581.call(this,x,y);
case  3 :
return G__35578__35582.call(this,x,y,z);
default:
return G__35578__35583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__35578.cljs$lang$maxFixedArity = 3;
G__35578.cljs$lang$applyTo = G__35578__35583.cljs$lang$applyTo;
return G__35578;
})()
});
var juxt__35566 = (function (f,g,h){
return (function() {
var G__35587 = null;
var G__35587__35588 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__35587__35589 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__35587__35590 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__35587__35591 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__35587__35592 = (function() { 
var G__35594__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__35594 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35594__delegate.call(this, x, y, z, args);
};
G__35594.cljs$lang$maxFixedArity = 3;
G__35594.cljs$lang$applyTo = (function (arglist__35595){
var x = cljs.core.first(arglist__35595);
var y = cljs.core.first(cljs.core.next(arglist__35595));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35595)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35595)));
return G__35594__delegate.call(this, x, y, z, args);
});
return G__35594;
})()
;
G__35587 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__35587__35588.call(this);
case  1 :
return G__35587__35589.call(this,x);
case  2 :
return G__35587__35590.call(this,x,y);
case  3 :
return G__35587__35591.call(this,x,y,z);
default:
return G__35587__35592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__35587.cljs$lang$maxFixedArity = 3;
G__35587.cljs$lang$applyTo = G__35587__35592.cljs$lang$applyTo;
return G__35587;
})()
});
var juxt__35567 = (function() { 
var G__35596__delegate = function (f,g,h,fs){
var fs__35563 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__35597 = null;
var G__35597__35598 = (function (){
return cljs.core.reduce.call(null,(function (p1__35546_SHARP_,p2__35547_SHARP_){
return cljs.core.conj.call(null,p1__35546_SHARP_,p2__35547_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__35563);
});
var G__35597__35599 = (function (x){
return cljs.core.reduce.call(null,(function (p1__35548_SHARP_,p2__35549_SHARP_){
return cljs.core.conj.call(null,p1__35548_SHARP_,p2__35549_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__35563);
});
var G__35597__35600 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__35550_SHARP_,p2__35551_SHARP_){
return cljs.core.conj.call(null,p1__35550_SHARP_,p2__35551_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__35563);
});
var G__35597__35601 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__35552_SHARP_,p2__35553_SHARP_){
return cljs.core.conj.call(null,p1__35552_SHARP_,p2__35553_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__35563);
});
var G__35597__35602 = (function() { 
var G__35604__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__35554_SHARP_,p2__35555_SHARP_){
return cljs.core.conj.call(null,p1__35554_SHARP_,cljs.core.apply.call(null,p2__35555_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__35563);
};
var G__35604 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35604__delegate.call(this, x, y, z, args);
};
G__35604.cljs$lang$maxFixedArity = 3;
G__35604.cljs$lang$applyTo = (function (arglist__35605){
var x = cljs.core.first(arglist__35605);
var y = cljs.core.first(cljs.core.next(arglist__35605));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35605)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35605)));
return G__35604__delegate.call(this, x, y, z, args);
});
return G__35604;
})()
;
G__35597 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__35597__35598.call(this);
case  1 :
return G__35597__35599.call(this,x);
case  2 :
return G__35597__35600.call(this,x,y);
case  3 :
return G__35597__35601.call(this,x,y,z);
default:
return G__35597__35602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__35597.cljs$lang$maxFixedArity = 3;
G__35597.cljs$lang$applyTo = G__35597__35602.cljs$lang$applyTo;
return G__35597;
})()
};
var G__35596 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__35596__delegate.call(this, f, g, h, fs);
};
G__35596.cljs$lang$maxFixedArity = 3;
G__35596.cljs$lang$applyTo = (function (arglist__35606){
var f = cljs.core.first(arglist__35606);
var g = cljs.core.first(cljs.core.next(arglist__35606));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35606)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__35606)));
return G__35596__delegate.call(this, f, g, h, fs);
});
return G__35596;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__35564.call(this,f);
case  2 :
return juxt__35565.call(this,f,g);
case  3 :
return juxt__35566.call(this,f,g,h);
default:
return juxt__35567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__35567.cljs$lang$applyTo;
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
var dorun__35608 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__35611 = cljs.core.next.call(null,coll);
coll = G__35611;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__35609 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____35607 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____35607))
{return (n > 0);
} else
{return and__3546__auto____35607;
}
})()))
{{
var G__35612 = (n - 1);
var G__35613 = cljs.core.next.call(null,coll);
n = G__35612;
coll = G__35613;
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
return dorun__35608.call(this,n);
case  2 :
return dorun__35609.call(this,n,coll);
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
var doall__35614 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__35615 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__35614.call(this,n);
case  2 :
return doall__35615.call(this,n,coll);
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
var matches__35617 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__35617),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__35617),1)))
{return cljs.core.first.call(null,matches__35617);
} else
{return cljs.core.vec.call(null,matches__35617);
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
var matches__35618 = re.exec(s);

if(cljs.core.truth_((matches__35618 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__35618),1)))
{return cljs.core.first.call(null,matches__35618);
} else
{return cljs.core.vec.call(null,matches__35618);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__35619 = cljs.core.re_find.call(null,re,s);
var match_idx__35620 = s.search(re);
var match_str__35621 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__35619))?cljs.core.first.call(null,match_data__35619):match_data__35619);
var post_match__35622 = cljs.core.subs.call(null,s,(match_idx__35620 + cljs.core.count.call(null,match_str__35621)));

if(cljs.core.truth_(match_data__35619))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__35619,re_seq.call(null,re,post_match__35622));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__35624__35625 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___35626 = cljs.core.nth.call(null,vec__35624__35625,0,null);
var flags__35627 = cljs.core.nth.call(null,vec__35624__35625,1,null);
var pattern__35628 = cljs.core.nth.call(null,vec__35624__35625,2,null);

return (new RegExp(pattern__35628,flags__35627));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__35623_SHARP_){
return print_one.call(null,p1__35623_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____35629 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____35629))
{var and__3546__auto____35633 = (function (){var x__450__auto____35630 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____35631 = x__450__auto____35630;

if(cljs.core.truth_(and__3546__auto____35631))
{var and__3546__auto____35632 = x__450__auto____35630.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____35632))
{return cljs.core.not.call(null,x__450__auto____35630.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____35632;
}
} else
{return and__3546__auto____35631;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____35630);
}
})();

if(cljs.core.truth_(and__3546__auto____35633))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____35633;
}
} else
{return and__3546__auto____35629;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____35634 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____35635 = x__450__auto____35634;

if(cljs.core.truth_(and__3546__auto____35635))
{var and__3546__auto____35636 = x__450__auto____35634.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____35636))
{return cljs.core.not.call(null,x__450__auto____35634.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____35636;
}
} else
{return and__3546__auto____35635;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____35634);
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
var first_obj__35637 = cljs.core.first.call(null,objs);
var sb__35638 = (new goog.string.StringBuffer());

var G__35639__35640 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__35639__35640))
{var obj__35641 = cljs.core.first.call(null,G__35639__35640);
var G__35639__35642 = G__35639__35640;

while(true){
if(cljs.core.truth_((obj__35641 === first_obj__35637)))
{} else
{sb__35638.append(" ");
}
var G__35643__35644 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__35641,opts));

if(cljs.core.truth_(G__35643__35644))
{var string__35645 = cljs.core.first.call(null,G__35643__35644);
var G__35643__35646 = G__35643__35644;

while(true){
sb__35638.append(string__35645);
var temp__3698__auto____35647 = cljs.core.next.call(null,G__35643__35646);

if(cljs.core.truth_(temp__3698__auto____35647))
{var G__35643__35648 = temp__3698__auto____35647;

{
var G__35651 = cljs.core.first.call(null,G__35643__35648);
var G__35652 = G__35643__35648;
string__35645 = G__35651;
G__35643__35646 = G__35652;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____35649 = cljs.core.next.call(null,G__35639__35642);

if(cljs.core.truth_(temp__3698__auto____35649))
{var G__35639__35650 = temp__3698__auto____35649;

{
var G__35653 = cljs.core.first.call(null,G__35639__35650);
var G__35654 = G__35639__35650;
obj__35641 = G__35653;
G__35639__35642 = G__35654;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__35638);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__35655 = cljs.core.first.call(null,objs);

var G__35656__35657 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__35656__35657))
{var obj__35658 = cljs.core.first.call(null,G__35656__35657);
var G__35656__35659 = G__35656__35657;

while(true){
if(cljs.core.truth_((obj__35658 === first_obj__35655)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__35660__35661 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__35658,opts));

if(cljs.core.truth_(G__35660__35661))
{var string__35662 = cljs.core.first.call(null,G__35660__35661);
var G__35660__35663 = G__35660__35661;

while(true){
cljs.core.string_print.call(null,string__35662);
var temp__3698__auto____35664 = cljs.core.next.call(null,G__35660__35663);

if(cljs.core.truth_(temp__3698__auto____35664))
{var G__35660__35665 = temp__3698__auto____35664;

{
var G__35668 = cljs.core.first.call(null,G__35660__35665);
var G__35669 = G__35660__35665;
string__35662 = G__35668;
G__35660__35663 = G__35669;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____35666 = cljs.core.next.call(null,G__35656__35659);

if(cljs.core.truth_(temp__3698__auto____35666))
{var G__35656__35667 = temp__3698__auto____35666;

{
var G__35670 = cljs.core.first.call(null,G__35656__35667);
var G__35671 = G__35656__35667;
obj__35658 = G__35670;
G__35656__35659 = G__35671;
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
pr_str.cljs$lang$applyTo = (function (arglist__35672){
var objs = cljs.core.seq( arglist__35672 );;
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
pr.cljs$lang$applyTo = (function (arglist__35673){
var objs = cljs.core.seq( arglist__35673 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__35674){
var objs = cljs.core.seq( arglist__35674 );;
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
println.cljs$lang$applyTo = (function (arglist__35675){
var objs = cljs.core.seq( arglist__35675 );;
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
prn.cljs$lang$applyTo = (function (arglist__35676){
var objs = cljs.core.seq( arglist__35676 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__35677 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__35677,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____35678 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____35678))
{var nspc__35679 = temp__3698__auto____35678;

return cljs.core.str.call(null,nspc__35679,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____35680 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____35680))
{var nspc__35681 = temp__3698__auto____35680;

return cljs.core.str.call(null,nspc__35681,"\/");
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
var pr_pair__35682 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__35682,"{",", ","}",opts,coll);
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
var this__35683 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__35684 = this;
var G__35685__35686 = cljs.core.seq.call(null,this__35684.watches);

if(cljs.core.truth_(G__35685__35686))
{var G__35688__35690 = cljs.core.first.call(null,G__35685__35686);
var vec__35689__35691 = G__35688__35690;
var key__35692 = cljs.core.nth.call(null,vec__35689__35691,0,null);
var f__35693 = cljs.core.nth.call(null,vec__35689__35691,1,null);
var G__35685__35694 = G__35685__35686;

var G__35688__35695 = G__35688__35690;
var G__35685__35696 = G__35685__35694;

while(true){
var vec__35697__35698 = G__35688__35695;
var key__35699 = cljs.core.nth.call(null,vec__35697__35698,0,null);
var f__35700 = cljs.core.nth.call(null,vec__35697__35698,1,null);
var G__35685__35701 = G__35685__35696;

f__35700.call(null,key__35699,this$,oldval,newval);
var temp__3698__auto____35702 = cljs.core.next.call(null,G__35685__35701);

if(cljs.core.truth_(temp__3698__auto____35702))
{var G__35685__35703 = temp__3698__auto____35702;

{
var G__35710 = cljs.core.first.call(null,G__35685__35703);
var G__35711 = G__35685__35703;
G__35688__35695 = G__35710;
G__35685__35696 = G__35711;
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
var this__35704 = this;
return this$.watches = cljs.core.assoc.call(null,this__35704.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__35705 = this;
return this$.watches = cljs.core.dissoc.call(null,this__35705.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__35706 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__35706.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__35707 = this;
return this__35707.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__35708 = this;
return this__35708.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__35709 = this;
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
var atom__35718 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__35719 = (function() { 
var G__35721__delegate = function (x,p__35712){
var map__35713__35714 = p__35712;
var map__35713__35715 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__35713__35714))?cljs.core.apply.call(null,cljs.core.hash_map,map__35713__35714):map__35713__35714);
var validator__35716 = cljs.core.get.call(null,map__35713__35715,"\uFDD0'validator");
var meta__35717 = cljs.core.get.call(null,map__35713__35715,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__35717,validator__35716,null));
};
var G__35721 = function (x,var_args){
var p__35712 = null;
if (goog.isDef(var_args)) {
  p__35712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__35721__delegate.call(this, x, p__35712);
};
G__35721.cljs$lang$maxFixedArity = 1;
G__35721.cljs$lang$applyTo = (function (arglist__35722){
var x = cljs.core.first(arglist__35722);
var p__35712 = cljs.core.rest(arglist__35722);
return G__35721__delegate.call(this, x, p__35712);
});
return G__35721;
})()
;
atom = function(x,var_args){
var p__35712 = var_args;
switch(arguments.length){
case  1 :
return atom__35718.call(this,x);
default:
return atom__35719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__35719.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____35723 = a.validator;

if(cljs.core.truth_(temp__3698__auto____35723))
{var validate__35724 = temp__3698__auto____35723;

if(cljs.core.truth_(validate__35724.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__35725 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__35725,new_value);
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
var swap_BANG___35726 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___35727 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___35728 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___35729 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___35730 = (function() { 
var G__35732__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__35732 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__35732__delegate.call(this, a, f, x, y, z, more);
};
G__35732.cljs$lang$maxFixedArity = 5;
G__35732.cljs$lang$applyTo = (function (arglist__35733){
var a = cljs.core.first(arglist__35733);
var f = cljs.core.first(cljs.core.next(arglist__35733));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__35733)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__35733))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__35733)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__35733)))));
return G__35732__delegate.call(this, a, f, x, y, z, more);
});
return G__35732;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___35726.call(this,a,f);
case  3 :
return swap_BANG___35727.call(this,a,f,x);
case  4 :
return swap_BANG___35728.call(this,a,f,x,y);
case  5 :
return swap_BANG___35729.call(this,a,f,x,y,z);
default:
return swap_BANG___35730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___35730.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__35734){
var iref = cljs.core.first(arglist__35734);
var f = cljs.core.first(cljs.core.next(arglist__35734));
var args = cljs.core.rest(cljs.core.next(arglist__35734));
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
var gensym__35735 = (function (){
return gensym.call(null,"G__");
});
var gensym__35736 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__35735.call(this);
case  1 :
return gensym__35736.call(this,prefix_string);
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
var this__35738 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__35738.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__35739 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__35739.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__35739.state,this__35739.f);
}
return cljs.core.deref.call(null,this__35739.state);
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
delay.cljs$lang$applyTo = (function (arglist__35740){
var body = cljs.core.seq( arglist__35740 );;
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
var map__35741__35742 = options;
var map__35741__35743 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__35741__35742))?cljs.core.apply.call(null,cljs.core.hash_map,map__35741__35742):map__35741__35742);
var keywordize_keys__35744 = cljs.core.get.call(null,map__35741__35743,"\uFDD0'keywordize-keys");
var keyfn__35745 = (cljs.core.truth_(keywordize_keys__35744)?cljs.core.keyword:cljs.core.str);
var f__35751 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____35750 = (function iter__35746(s__35747){
return (new cljs.core.LazySeq(null,false,(function (){
var s__35747__35748 = s__35747;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__35747__35748)))
{var k__35749 = cljs.core.first.call(null,s__35747__35748);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__35745.call(null,k__35749),thisfn.call(null,(x[k__35749]))]),iter__35746.call(null,cljs.core.rest.call(null,s__35747__35748)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____35750.call(null,cljs.core.js_keys.call(null,x));
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

return f__35751.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__35752){
var x = cljs.core.first(arglist__35752);
var options = cljs.core.rest(arglist__35752);
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
var mem__35753 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__35757__delegate = function (args){
var temp__3695__auto____35754 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__35753),args);

if(cljs.core.truth_(temp__3695__auto____35754))
{var v__35755 = temp__3695__auto____35754;

return v__35755;
} else
{var ret__35756 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__35753,cljs.core.assoc,args,ret__35756);
return ret__35756;
}
};
var G__35757 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__35757__delegate.call(this, args);
};
G__35757.cljs$lang$maxFixedArity = 0;
G__35757.cljs$lang$applyTo = (function (arglist__35758){
var args = cljs.core.seq( arglist__35758 );;
return G__35757__delegate.call(this, args);
});
return G__35757;
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
var trampoline__35760 = (function (f){
while(true){
var ret__35759 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__35759)))
{{
var G__35763 = ret__35759;
f = G__35763;
continue;
}
} else
{return ret__35759;
}
break;
}
});
var trampoline__35761 = (function() { 
var G__35764__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__35764 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__35764__delegate.call(this, f, args);
};
G__35764.cljs$lang$maxFixedArity = 1;
G__35764.cljs$lang$applyTo = (function (arglist__35765){
var f = cljs.core.first(arglist__35765);
var args = cljs.core.rest(arglist__35765);
return G__35764__delegate.call(this, f, args);
});
return G__35764;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__35760.call(this,f);
default:
return trampoline__35761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__35761.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__35766 = (function (){
return rand.call(null,1);
});
var rand__35767 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__35766.call(this);
case  1 :
return rand__35767.call(this,n);
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
var k__35769 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__35769,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__35769,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___35778 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___35779 = (function (h,child,parent){
var or__3548__auto____35770 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____35770))
{return or__3548__auto____35770;
} else
{var or__3548__auto____35771 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____35771))
{return or__3548__auto____35771;
} else
{var and__3546__auto____35772 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____35772))
{var and__3546__auto____35773 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____35773))
{var and__3546__auto____35774 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____35774))
{var ret__35775 = true;
var i__35776 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____35777 = cljs.core.not.call(null,ret__35775);

if(cljs.core.truth_(or__3548__auto____35777))
{return or__3548__auto____35777;
} else
{return cljs.core._EQ_.call(null,i__35776,cljs.core.count.call(null,parent));
}
})()))
{return ret__35775;
} else
{{
var G__35781 = isa_QMARK_.call(null,h,child.call(null,i__35776),parent.call(null,i__35776));
var G__35782 = (i__35776 + 1);
ret__35775 = G__35781;
i__35776 = G__35782;
continue;
}
}
break;
}
} else
{return and__3546__auto____35774;
}
} else
{return and__3546__auto____35773;
}
} else
{return and__3546__auto____35772;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___35778.call(this,h,child);
case  3 :
return isa_QMARK___35779.call(this,h,child,parent);
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
var parents__35783 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__35784 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__35783.call(this,h);
case  2 :
return parents__35784.call(this,h,tag);
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
var ancestors__35786 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__35787 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__35786.call(this,h);
case  2 :
return ancestors__35787.call(this,h,tag);
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
var descendants__35789 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__35790 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__35789.call(this,h);
case  2 :
return descendants__35790.call(this,h,tag);
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
var derive__35800 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__35801 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__35795 = "\uFDD0'parents".call(null,h);
var td__35796 = "\uFDD0'descendants".call(null,h);
var ta__35797 = "\uFDD0'ancestors".call(null,h);
var tf__35798 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____35799 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__35795.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__35797.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__35797.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__35795,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__35798.call(null,"\uFDD0'ancestors".call(null,h),tag,td__35796,parent,ta__35797),"\uFDD0'descendants":tf__35798.call(null,"\uFDD0'descendants".call(null,h),parent,ta__35797,tag,td__35796)});
})());

if(cljs.core.truth_(or__3548__auto____35799))
{return or__3548__auto____35799;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__35800.call(this,h,tag);
case  3 :
return derive__35801.call(this,h,tag,parent);
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
var underive__35807 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__35808 = (function (h,tag,parent){
var parentMap__35803 = "\uFDD0'parents".call(null,h);
var childsParents__35804 = (cljs.core.truth_(parentMap__35803.call(null,tag))?cljs.core.disj.call(null,parentMap__35803.call(null,tag),parent):cljs.core.set([]));
var newParents__35805 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__35804))?cljs.core.assoc.call(null,parentMap__35803,tag,childsParents__35804):cljs.core.dissoc.call(null,parentMap__35803,tag));
var deriv_seq__35806 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__35792_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__35792_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__35792_SHARP_),cljs.core.second.call(null,p1__35792_SHARP_)));
}),cljs.core.seq.call(null,newParents__35805)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__35803.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__35793_SHARP_,p2__35794_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__35793_SHARP_,p2__35794_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__35806));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__35807.call(this,h,tag);
case  3 :
return underive__35808.call(this,h,tag,parent);
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
var xprefs__35810 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____35812 = (cljs.core.truth_((function (){var and__3546__auto____35811 = xprefs__35810;

if(cljs.core.truth_(and__3546__auto____35811))
{return xprefs__35810.call(null,y);
} else
{return and__3546__auto____35811;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____35812))
{return or__3548__auto____35812;
} else
{var or__3548__auto____35814 = (function (){var ps__35813 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__35813) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__35813),prefer_table)))
{} else
{}
{
var G__35817 = cljs.core.rest.call(null,ps__35813);
ps__35813 = G__35817;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____35814))
{return or__3548__auto____35814;
} else
{var or__3548__auto____35816 = (function (){var ps__35815 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__35815) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__35815),y,prefer_table)))
{} else
{}
{
var G__35818 = cljs.core.rest.call(null,ps__35815);
ps__35815 = G__35818;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____35816))
{return or__3548__auto____35816;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____35819 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____35819))
{return or__3548__auto____35819;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__35828 = cljs.core.reduce.call(null,(function (be,p__35820){
var vec__35821__35822 = p__35820;
var k__35823 = cljs.core.nth.call(null,vec__35821__35822,0,null);
var ___35824 = cljs.core.nth.call(null,vec__35821__35822,1,null);
var e__35825 = vec__35821__35822;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__35823)))
{var be2__35827 = (cljs.core.truth_((function (){var or__3548__auto____35826 = (be === null);

if(cljs.core.truth_(or__3548__auto____35826))
{return or__3548__auto____35826;
} else
{return cljs.core.dominates.call(null,k__35823,cljs.core.first.call(null,be),prefer_table);
}
})())?e__35825:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__35827),k__35823,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__35823," and ",cljs.core.first.call(null,be2__35827),", and neither is preferred")));
}
return be2__35827;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__35828))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__35828));
return cljs.core.second.call(null,best_entry__35828);
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
if(cljs.core.truth_((function (){var and__3546__auto____35829 = mf;

if(cljs.core.truth_(and__3546__auto____35829))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____35829;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____35830 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35830))
{return or__3548__auto____35830;
} else
{var or__3548__auto____35831 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____35831))
{return or__3548__auto____35831;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____35832 = mf;

if(cljs.core.truth_(and__3546__auto____35832))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____35832;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____35833 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35833))
{return or__3548__auto____35833;
} else
{var or__3548__auto____35834 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____35834))
{return or__3548__auto____35834;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____35835 = mf;

if(cljs.core.truth_(and__3546__auto____35835))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____35835;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____35836 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35836))
{return or__3548__auto____35836;
} else
{var or__3548__auto____35837 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____35837))
{return or__3548__auto____35837;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____35838 = mf;

if(cljs.core.truth_(and__3546__auto____35838))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____35838;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____35839 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35839))
{return or__3548__auto____35839;
} else
{var or__3548__auto____35840 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____35840))
{return or__3548__auto____35840;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____35841 = mf;

if(cljs.core.truth_(and__3546__auto____35841))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____35841;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____35842 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35842))
{return or__3548__auto____35842;
} else
{var or__3548__auto____35843 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____35843))
{return or__3548__auto____35843;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____35844 = mf;

if(cljs.core.truth_(and__3546__auto____35844))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____35844;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____35845 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35845))
{return or__3548__auto____35845;
} else
{var or__3548__auto____35846 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____35846))
{return or__3548__auto____35846;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____35847 = mf;

if(cljs.core.truth_(and__3546__auto____35847))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____35847;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____35848 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35848))
{return or__3548__auto____35848;
} else
{var or__3548__auto____35849 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____35849))
{return or__3548__auto____35849;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____35850 = mf;

if(cljs.core.truth_(and__3546__auto____35850))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____35850;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____35851 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____35851))
{return or__3548__auto____35851;
} else
{var or__3548__auto____35852 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____35852))
{return or__3548__auto____35852;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__35853 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__35854 = cljs.core._get_method.call(null,mf,dispatch_val__35853);

if(cljs.core.truth_(target_fn__35854))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__35853)));
}
return cljs.core.apply.call(null,target_fn__35854,args);
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
var this__35855 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__35856 = this;
cljs.core.swap_BANG_.call(null,this__35856.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__35856.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__35856.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__35856.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__35857 = this;
cljs.core.swap_BANG_.call(null,this__35857.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__35857.method_cache,this__35857.method_table,this__35857.cached_hierarchy,this__35857.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__35858 = this;
cljs.core.swap_BANG_.call(null,this__35858.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__35858.method_cache,this__35858.method_table,this__35858.cached_hierarchy,this__35858.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__35859 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__35859.cached_hierarchy),cljs.core.deref.call(null,this__35859.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__35859.method_cache,this__35859.method_table,this__35859.cached_hierarchy,this__35859.hierarchy);
}
var temp__3695__auto____35860 = cljs.core.deref.call(null,this__35859.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____35860))
{var target_fn__35861 = temp__3695__auto____35860;

return target_fn__35861;
} else
{var temp__3695__auto____35862 = cljs.core.find_and_cache_best_method.call(null,this__35859.name,dispatch_val,this__35859.hierarchy,this__35859.method_table,this__35859.prefer_table,this__35859.method_cache,this__35859.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____35862))
{var target_fn__35863 = temp__3695__auto____35862;

return target_fn__35863;
} else
{return cljs.core.deref.call(null,this__35859.method_table).call(null,this__35859.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__35864 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__35864.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__35864.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__35864.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__35864.method_cache,this__35864.method_table,this__35864.cached_hierarchy,this__35864.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__35865 = this;
return cljs.core.deref.call(null,this__35865.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__35866 = this;
return cljs.core.deref.call(null,this__35866.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__35867 = this;
return cljs.core.do_dispatch.call(null,mf,this__35867.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__35868__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__35868 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__35868__delegate.call(this, _, args);
};
G__35868.cljs$lang$maxFixedArity = 1;
G__35868.cljs$lang$applyTo = (function (arglist__35869){
var _ = cljs.core.first(arglist__35869);
var args = cljs.core.rest(arglist__35869);
return G__35868__delegate.call(this, _, args);
});
return G__35868;
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
