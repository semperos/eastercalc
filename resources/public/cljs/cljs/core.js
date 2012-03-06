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
var or__3548__auto____113408 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____113408))
{return or__3548__auto____113408;
} else
{var or__3548__auto____113409 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____113409))
{return or__3548__auto____113409;
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
var _invoke__113473 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____113410 = this$;

if(cljs.core.truth_(and__3546__auto____113410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____113411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113411))
{return or__3548__auto____113411;
} else
{var or__3548__auto____113412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113412))
{return or__3548__auto____113412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__113474 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____113413 = this$;

if(cljs.core.truth_(and__3546__auto____113413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____113414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113414))
{return or__3548__auto____113414;
} else
{var or__3548__auto____113415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113415))
{return or__3548__auto____113415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__113475 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____113416 = this$;

if(cljs.core.truth_(and__3546__auto____113416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____113417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113417))
{return or__3548__auto____113417;
} else
{var or__3548__auto____113418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113418))
{return or__3548__auto____113418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__113476 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____113419 = this$;

if(cljs.core.truth_(and__3546__auto____113419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____113420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113420))
{return or__3548__auto____113420;
} else
{var or__3548__auto____113421 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113421))
{return or__3548__auto____113421;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__113477 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____113422 = this$;

if(cljs.core.truth_(and__3546__auto____113422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____113423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113423))
{return or__3548__auto____113423;
} else
{var or__3548__auto____113424 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113424))
{return or__3548__auto____113424;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__113478 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____113425 = this$;

if(cljs.core.truth_(and__3546__auto____113425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____113426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113426))
{return or__3548__auto____113426;
} else
{var or__3548__auto____113427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113427))
{return or__3548__auto____113427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__113479 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____113428 = this$;

if(cljs.core.truth_(and__3546__auto____113428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____113429 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113429))
{return or__3548__auto____113429;
} else
{var or__3548__auto____113430 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113430))
{return or__3548__auto____113430;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__113480 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____113431 = this$;

if(cljs.core.truth_(and__3546__auto____113431))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113431;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____113432 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113432))
{return or__3548__auto____113432;
} else
{var or__3548__auto____113433 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113433))
{return or__3548__auto____113433;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__113481 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____113434 = this$;

if(cljs.core.truth_(and__3546__auto____113434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____113435 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113435))
{return or__3548__auto____113435;
} else
{var or__3548__auto____113436 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113436))
{return or__3548__auto____113436;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__113482 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____113437 = this$;

if(cljs.core.truth_(and__3546__auto____113437))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113437;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____113438 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113438))
{return or__3548__auto____113438;
} else
{var or__3548__auto____113439 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113439))
{return or__3548__auto____113439;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__113483 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____113440 = this$;

if(cljs.core.truth_(and__3546__auto____113440))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113440;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____113441 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113441))
{return or__3548__auto____113441;
} else
{var or__3548__auto____113442 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113442))
{return or__3548__auto____113442;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__113484 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____113443 = this$;

if(cljs.core.truth_(and__3546__auto____113443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____113444 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113444))
{return or__3548__auto____113444;
} else
{var or__3548__auto____113445 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113445))
{return or__3548__auto____113445;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__113485 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____113446 = this$;

if(cljs.core.truth_(and__3546__auto____113446))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113446;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____113447 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113447))
{return or__3548__auto____113447;
} else
{var or__3548__auto____113448 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113448))
{return or__3548__auto____113448;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__113486 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____113449 = this$;

if(cljs.core.truth_(and__3546__auto____113449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____113450 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113450))
{return or__3548__auto____113450;
} else
{var or__3548__auto____113451 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113451))
{return or__3548__auto____113451;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__113487 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____113452 = this$;

if(cljs.core.truth_(and__3546__auto____113452))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113452;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____113453 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113453))
{return or__3548__auto____113453;
} else
{var or__3548__auto____113454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113454))
{return or__3548__auto____113454;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__113488 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____113455 = this$;

if(cljs.core.truth_(and__3546__auto____113455))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113455;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____113456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113456))
{return or__3548__auto____113456;
} else
{var or__3548__auto____113457 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113457))
{return or__3548__auto____113457;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__113489 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____113458 = this$;

if(cljs.core.truth_(and__3546__auto____113458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____113459 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113459))
{return or__3548__auto____113459;
} else
{var or__3548__auto____113460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113460))
{return or__3548__auto____113460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__113490 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____113461 = this$;

if(cljs.core.truth_(and__3546__auto____113461))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113461;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____113462 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113462))
{return or__3548__auto____113462;
} else
{var or__3548__auto____113463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113463))
{return or__3548__auto____113463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__113491 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____113464 = this$;

if(cljs.core.truth_(and__3546__auto____113464))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113464;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____113465 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113465))
{return or__3548__auto____113465;
} else
{var or__3548__auto____113466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113466))
{return or__3548__auto____113466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__113492 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____113467 = this$;

if(cljs.core.truth_(and__3546__auto____113467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____113468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113468))
{return or__3548__auto____113468;
} else
{var or__3548__auto____113469 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113469))
{return or__3548__auto____113469;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__113493 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____113470 = this$;

if(cljs.core.truth_(and__3546__auto____113470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____113470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____113471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113471))
{return or__3548__auto____113471;
} else
{var or__3548__auto____113472 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____113472))
{return or__3548__auto____113472;
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
return _invoke__113473.call(this,this$);
case  2 :
return _invoke__113474.call(this,this$,a);
case  3 :
return _invoke__113475.call(this,this$,a,b);
case  4 :
return _invoke__113476.call(this,this$,a,b,c);
case  5 :
return _invoke__113477.call(this,this$,a,b,c,d);
case  6 :
return _invoke__113478.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__113479.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__113480.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__113481.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__113482.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__113483.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__113484.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__113485.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__113486.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__113487.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__113488.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__113489.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__113490.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__113491.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__113492.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__113493.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____113495 = coll;

if(cljs.core.truth_(and__3546__auto____113495))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____113495;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____113496 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113496))
{return or__3548__auto____113496;
} else
{var or__3548__auto____113497 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____113497))
{return or__3548__auto____113497;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____113498 = coll;

if(cljs.core.truth_(and__3546__auto____113498))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____113498;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____113499 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113499))
{return or__3548__auto____113499;
} else
{var or__3548__auto____113500 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____113500))
{return or__3548__auto____113500;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____113501 = coll;

if(cljs.core.truth_(and__3546__auto____113501))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____113501;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____113502 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113502))
{return or__3548__auto____113502;
} else
{var or__3548__auto____113503 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____113503))
{return or__3548__auto____113503;
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
var _nth__113510 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____113504 = coll;

if(cljs.core.truth_(and__3546__auto____113504))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____113504;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____113505 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113505))
{return or__3548__auto____113505;
} else
{var or__3548__auto____113506 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____113506))
{return or__3548__auto____113506;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__113511 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____113507 = coll;

if(cljs.core.truth_(and__3546__auto____113507))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____113507;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____113508 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113508))
{return or__3548__auto____113508;
} else
{var or__3548__auto____113509 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____113509))
{return or__3548__auto____113509;
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
return _nth__113510.call(this,coll,n);
case  3 :
return _nth__113511.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____113513 = coll;

if(cljs.core.truth_(and__3546__auto____113513))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____113513;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____113514 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113514))
{return or__3548__auto____113514;
} else
{var or__3548__auto____113515 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____113515))
{return or__3548__auto____113515;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____113516 = coll;

if(cljs.core.truth_(and__3546__auto____113516))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____113516;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____113517 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113517))
{return or__3548__auto____113517;
} else
{var or__3548__auto____113518 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____113518))
{return or__3548__auto____113518;
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
var _lookup__113525 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____113519 = o;

if(cljs.core.truth_(and__3546__auto____113519))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____113519;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____113520 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113520))
{return or__3548__auto____113520;
} else
{var or__3548__auto____113521 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____113521))
{return or__3548__auto____113521;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__113526 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____113522 = o;

if(cljs.core.truth_(and__3546__auto____113522))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____113522;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____113523 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113523))
{return or__3548__auto____113523;
} else
{var or__3548__auto____113524 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____113524))
{return or__3548__auto____113524;
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
return _lookup__113525.call(this,o,k);
case  3 :
return _lookup__113526.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____113528 = coll;

if(cljs.core.truth_(and__3546__auto____113528))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____113528;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____113529 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113529))
{return or__3548__auto____113529;
} else
{var or__3548__auto____113530 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____113530))
{return or__3548__auto____113530;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____113531 = coll;

if(cljs.core.truth_(and__3546__auto____113531))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____113531;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____113532 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113532))
{return or__3548__auto____113532;
} else
{var or__3548__auto____113533 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____113533))
{return or__3548__auto____113533;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____113534 = coll;

if(cljs.core.truth_(and__3546__auto____113534))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____113534;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____113535 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113535))
{return or__3548__auto____113535;
} else
{var or__3548__auto____113536 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____113536))
{return or__3548__auto____113536;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____113537 = coll;

if(cljs.core.truth_(and__3546__auto____113537))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____113537;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____113538 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113538))
{return or__3548__auto____113538;
} else
{var or__3548__auto____113539 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____113539))
{return or__3548__auto____113539;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____113540 = coll;

if(cljs.core.truth_(and__3546__auto____113540))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____113540;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____113541 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113541))
{return or__3548__auto____113541;
} else
{var or__3548__auto____113542 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____113542))
{return or__3548__auto____113542;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____113543 = coll;

if(cljs.core.truth_(and__3546__auto____113543))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____113543;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____113544 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113544))
{return or__3548__auto____113544;
} else
{var or__3548__auto____113545 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____113545))
{return or__3548__auto____113545;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____113546 = coll;

if(cljs.core.truth_(and__3546__auto____113546))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____113546;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____113547 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113547))
{return or__3548__auto____113547;
} else
{var or__3548__auto____113548 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____113548))
{return or__3548__auto____113548;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____113549 = o;

if(cljs.core.truth_(and__3546__auto____113549))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____113549;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____113550 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113550))
{return or__3548__auto____113550;
} else
{var or__3548__auto____113551 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____113551))
{return or__3548__auto____113551;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____113552 = o;

if(cljs.core.truth_(and__3546__auto____113552))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____113552;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____113553 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113553))
{return or__3548__auto____113553;
} else
{var or__3548__auto____113554 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____113554))
{return or__3548__auto____113554;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____113555 = o;

if(cljs.core.truth_(and__3546__auto____113555))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____113555;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____113556 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113556))
{return or__3548__auto____113556;
} else
{var or__3548__auto____113557 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____113557))
{return or__3548__auto____113557;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____113558 = o;

if(cljs.core.truth_(and__3546__auto____113558))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____113558;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____113559 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113559))
{return or__3548__auto____113559;
} else
{var or__3548__auto____113560 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____113560))
{return or__3548__auto____113560;
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
var _reduce__113567 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____113561 = coll;

if(cljs.core.truth_(and__3546__auto____113561))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____113561;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____113562 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113562))
{return or__3548__auto____113562;
} else
{var or__3548__auto____113563 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____113563))
{return or__3548__auto____113563;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__113568 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____113564 = coll;

if(cljs.core.truth_(and__3546__auto____113564))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____113564;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____113565 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____113565))
{return or__3548__auto____113565;
} else
{var or__3548__auto____113566 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____113566))
{return or__3548__auto____113566;
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
return _reduce__113567.call(this,coll,f);
case  3 :
return _reduce__113568.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____113570 = o;

if(cljs.core.truth_(and__3546__auto____113570))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____113570;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____113571 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113571))
{return or__3548__auto____113571;
} else
{var or__3548__auto____113572 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____113572))
{return or__3548__auto____113572;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____113573 = o;

if(cljs.core.truth_(and__3546__auto____113573))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____113573;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____113574 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113574))
{return or__3548__auto____113574;
} else
{var or__3548__auto____113575 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____113575))
{return or__3548__auto____113575;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____113576 = o;

if(cljs.core.truth_(and__3546__auto____113576))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____113576;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____113577 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113577))
{return or__3548__auto____113577;
} else
{var or__3548__auto____113578 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____113578))
{return or__3548__auto____113578;
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
if(cljs.core.truth_((function (){var and__3546__auto____113579 = o;

if(cljs.core.truth_(and__3546__auto____113579))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____113579;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____113580 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____113580))
{return or__3548__auto____113580;
} else
{var or__3548__auto____113581 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____113581))
{return or__3548__auto____113581;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____113582 = d;

if(cljs.core.truth_(and__3546__auto____113582))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____113582;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____113583 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____113583))
{return or__3548__auto____113583;
} else
{var or__3548__auto____113584 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____113584))
{return or__3548__auto____113584;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____113585 = this$;

if(cljs.core.truth_(and__3546__auto____113585))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____113585;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____113586 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113586))
{return or__3548__auto____113586;
} else
{var or__3548__auto____113587 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____113587))
{return or__3548__auto____113587;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____113588 = this$;

if(cljs.core.truth_(and__3546__auto____113588))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____113588;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____113589 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113589))
{return or__3548__auto____113589;
} else
{var or__3548__auto____113590 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____113590))
{return or__3548__auto____113590;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____113591 = this$;

if(cljs.core.truth_(and__3546__auto____113591))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____113591;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____113592 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____113592))
{return or__3548__auto____113592;
} else
{var or__3548__auto____113593 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____113593))
{return or__3548__auto____113593;
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
var G__113594 = null;
var G__113594__113595 = (function (o,k){
return null;
});
var G__113594__113596 = (function (o,k,not_found){
return not_found;
});
G__113594 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__113594__113595.call(this,o,k);
case  3 :
return G__113594__113596.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113594;
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
var G__113598 = null;
var G__113598__113599 = (function (_,f){
return f.call(null);
});
var G__113598__113600 = (function (_,f,start){
return start;
});
G__113598 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__113598__113599.call(this,_,f);
case  3 :
return G__113598__113600.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113598;
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
var G__113602 = null;
var G__113602__113603 = (function (_,n){
return null;
});
var G__113602__113604 = (function (_,n,not_found){
return not_found;
});
G__113602 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__113602__113603.call(this,_,n);
case  3 :
return G__113602__113604.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113602;
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
var ci_reduce__113612 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__113606 = cljs.core._nth.call(null,cicoll,0);
var n__113607 = 1;

while(true){
if(cljs.core.truth_((n__113607 < cljs.core._count.call(null,cicoll))))
{{
var G__113616 = f.call(null,val__113606,cljs.core._nth.call(null,cicoll,n__113607));
var G__113617 = (n__113607 + 1);
val__113606 = G__113616;
n__113607 = G__113617;
continue;
}
} else
{return val__113606;
}
break;
}
}
});
var ci_reduce__113613 = (function (cicoll,f,val){
var val__113608 = val;
var n__113609 = 0;

while(true){
if(cljs.core.truth_((n__113609 < cljs.core._count.call(null,cicoll))))
{{
var G__113618 = f.call(null,val__113608,cljs.core._nth.call(null,cicoll,n__113609));
var G__113619 = (n__113609 + 1);
val__113608 = G__113618;
n__113609 = G__113619;
continue;
}
} else
{return val__113608;
}
break;
}
});
var ci_reduce__113614 = (function (cicoll,f,val,idx){
var val__113610 = val;
var n__113611 = idx;

while(true){
if(cljs.core.truth_((n__113611 < cljs.core._count.call(null,cicoll))))
{{
var G__113620 = f.call(null,val__113610,cljs.core._nth.call(null,cicoll,n__113611));
var G__113621 = (n__113611 + 1);
val__113610 = G__113620;
n__113611 = G__113621;
continue;
}
} else
{return val__113610;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__113612.call(this,cicoll,f);
case  3 :
return ci_reduce__113613.call(this,cicoll,f,val);
case  4 :
return ci_reduce__113614.call(this,cicoll,f,val,idx);
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
var this__113622 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__113635 = null;
var G__113635__113636 = (function (_,f){
var this__113623 = this;
return cljs.core.ci_reduce.call(null,this__113623.a,f,(this__113623.a[this__113623.i]),(this__113623.i + 1));
});
var G__113635__113637 = (function (_,f,start){
var this__113624 = this;
return cljs.core.ci_reduce.call(null,this__113624.a,f,start,this__113624.i);
});
G__113635 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__113635__113636.call(this,_,f);
case  3 :
return G__113635__113637.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113635;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__113625 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__113626 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__113639 = null;
var G__113639__113640 = (function (coll,n){
var this__113627 = this;
var i__113628 = (n + this__113627.i);

if(cljs.core.truth_((i__113628 < this__113627.a.length)))
{return (this__113627.a[i__113628]);
} else
{return null;
}
});
var G__113639__113641 = (function (coll,n,not_found){
var this__113629 = this;
var i__113630 = (n + this__113629.i);

if(cljs.core.truth_((i__113630 < this__113629.a.length)))
{return (this__113629.a[i__113630]);
} else
{return not_found;
}
});
G__113639 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__113639__113640.call(this,coll,n);
case  3 :
return G__113639__113641.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113639;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__113631 = this;
return (this__113631.a.length - this__113631.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__113632 = this;
return (this__113632.a[this__113632.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__113633 = this;
if(cljs.core.truth_(((this__113633.i + 1) < this__113633.a.length)))
{return (new cljs.core.IndexedSeq(this__113633.a,(this__113633.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__113634 = this;
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
var G__113643 = null;
var G__113643__113644 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__113643__113645 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__113643 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__113643__113644.call(this,array,f);
case  3 :
return G__113643__113645.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113643;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__113647 = null;
var G__113647__113648 = (function (array,k){
return (array[k]);
});
var G__113647__113649 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__113647 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__113647__113648.call(this,array,k);
case  3 :
return G__113647__113649.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113647;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__113651 = null;
var G__113651__113652 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__113651__113653 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__113651 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__113651__113652.call(this,array,n);
case  3 :
return G__113651__113653.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113651;
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
var temp__3698__auto____113655 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____113655))
{var s__113656 = temp__3698__auto____113655;

return cljs.core._first.call(null,s__113656);
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
var G__113657 = cljs.core.next.call(null,s);
s = G__113657;
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
var s__113658 = cljs.core.seq.call(null,x);
var n__113659 = 0;

while(true){
if(cljs.core.truth_(s__113658))
{{
var G__113660 = cljs.core.next.call(null,s__113658);
var G__113661 = (n__113659 + 1);
s__113658 = G__113660;
n__113659 = G__113661;
continue;
}
} else
{return n__113659;
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
var conj__113662 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__113663 = (function() { 
var G__113665__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__113666 = conj.call(null,coll,x);
var G__113667 = cljs.core.first.call(null,xs);
var G__113668 = cljs.core.next.call(null,xs);
coll = G__113666;
x = G__113667;
xs = G__113668;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__113665 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113665__delegate.call(this, coll, x, xs);
};
G__113665.cljs$lang$maxFixedArity = 2;
G__113665.cljs$lang$applyTo = (function (arglist__113669){
var coll = cljs.core.first(arglist__113669);
var x = cljs.core.first(cljs.core.next(arglist__113669));
var xs = cljs.core.rest(cljs.core.next(arglist__113669));
return G__113665__delegate.call(this, coll, x, xs);
});
return G__113665;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__113662.call(this,coll,x);
default:
return conj__113663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__113663.cljs$lang$applyTo;
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
var nth__113670 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__113671 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__113670.call(this,coll,n);
case  3 :
return nth__113671.call(this,coll,n,not_found);
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
var get__113673 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__113674 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__113673.call(this,o,k);
case  3 :
return get__113674.call(this,o,k,not_found);
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
var assoc__113677 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__113678 = (function() { 
var G__113680__delegate = function (coll,k,v,kvs){
while(true){
var ret__113676 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__113681 = ret__113676;
var G__113682 = cljs.core.first.call(null,kvs);
var G__113683 = cljs.core.second.call(null,kvs);
var G__113684 = cljs.core.nnext.call(null,kvs);
coll = G__113681;
k = G__113682;
v = G__113683;
kvs = G__113684;
continue;
}
} else
{return ret__113676;
}
break;
}
};
var G__113680 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__113680__delegate.call(this, coll, k, v, kvs);
};
G__113680.cljs$lang$maxFixedArity = 3;
G__113680.cljs$lang$applyTo = (function (arglist__113685){
var coll = cljs.core.first(arglist__113685);
var k = cljs.core.first(cljs.core.next(arglist__113685));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__113685)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__113685)));
return G__113680__delegate.call(this, coll, k, v, kvs);
});
return G__113680;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__113677.call(this,coll,k,v);
default:
return assoc__113678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__113678.cljs$lang$applyTo;
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
var dissoc__113687 = (function (coll){
return coll;
});
var dissoc__113688 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__113689 = (function() { 
var G__113691__delegate = function (coll,k,ks){
while(true){
var ret__113686 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__113692 = ret__113686;
var G__113693 = cljs.core.first.call(null,ks);
var G__113694 = cljs.core.next.call(null,ks);
coll = G__113692;
k = G__113693;
ks = G__113694;
continue;
}
} else
{return ret__113686;
}
break;
}
};
var G__113691 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113691__delegate.call(this, coll, k, ks);
};
G__113691.cljs$lang$maxFixedArity = 2;
G__113691.cljs$lang$applyTo = (function (arglist__113695){
var coll = cljs.core.first(arglist__113695);
var k = cljs.core.first(cljs.core.next(arglist__113695));
var ks = cljs.core.rest(cljs.core.next(arglist__113695));
return G__113691__delegate.call(this, coll, k, ks);
});
return G__113691;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__113687.call(this,coll);
case  2 :
return dissoc__113688.call(this,coll,k);
default:
return dissoc__113689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__113689.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____113696 = o;

if(cljs.core.truth_((function (){var and__3546__auto____113697 = x__450__auto____113696;

if(cljs.core.truth_(and__3546__auto____113697))
{var and__3546__auto____113698 = x__450__auto____113696.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____113698))
{return cljs.core.not.call(null,x__450__auto____113696.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____113698;
}
} else
{return and__3546__auto____113697;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____113696);
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
var disj__113700 = (function (coll){
return coll;
});
var disj__113701 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__113702 = (function() { 
var G__113704__delegate = function (coll,k,ks){
while(true){
var ret__113699 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__113705 = ret__113699;
var G__113706 = cljs.core.first.call(null,ks);
var G__113707 = cljs.core.next.call(null,ks);
coll = G__113705;
k = G__113706;
ks = G__113707;
continue;
}
} else
{return ret__113699;
}
break;
}
};
var G__113704 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113704__delegate.call(this, coll, k, ks);
};
G__113704.cljs$lang$maxFixedArity = 2;
G__113704.cljs$lang$applyTo = (function (arglist__113708){
var coll = cljs.core.first(arglist__113708);
var k = cljs.core.first(cljs.core.next(arglist__113708));
var ks = cljs.core.rest(cljs.core.next(arglist__113708));
return G__113704__delegate.call(this, coll, k, ks);
});
return G__113704;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__113700.call(this,coll);
case  2 :
return disj__113701.call(this,coll,k);
default:
return disj__113702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__113702.cljs$lang$applyTo;
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
{var x__450__auto____113709 = x;

if(cljs.core.truth_((function (){var and__3546__auto____113710 = x__450__auto____113709;

if(cljs.core.truth_(and__3546__auto____113710))
{var and__3546__auto____113711 = x__450__auto____113709.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____113711))
{return cljs.core.not.call(null,x__450__auto____113709.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____113711;
}
} else
{return and__3546__auto____113710;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____113709);
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
{var x__450__auto____113712 = x;

if(cljs.core.truth_((function (){var and__3546__auto____113713 = x__450__auto____113712;

if(cljs.core.truth_(and__3546__auto____113713))
{var and__3546__auto____113714 = x__450__auto____113712.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____113714))
{return cljs.core.not.call(null,x__450__auto____113712.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____113714;
}
} else
{return and__3546__auto____113713;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____113712);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____113715 = x;

if(cljs.core.truth_((function (){var and__3546__auto____113716 = x__450__auto____113715;

if(cljs.core.truth_(and__3546__auto____113716))
{var and__3546__auto____113717 = x__450__auto____113715.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____113717))
{return cljs.core.not.call(null,x__450__auto____113715.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____113717;
}
} else
{return and__3546__auto____113716;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____113715);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____113718 = x;

if(cljs.core.truth_((function (){var and__3546__auto____113719 = x__450__auto____113718;

if(cljs.core.truth_(and__3546__auto____113719))
{var and__3546__auto____113720 = x__450__auto____113718.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____113720))
{return cljs.core.not.call(null,x__450__auto____113718.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____113720;
}
} else
{return and__3546__auto____113719;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____113718);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____113721 = x;

if(cljs.core.truth_((function (){var and__3546__auto____113722 = x__450__auto____113721;

if(cljs.core.truth_(and__3546__auto____113722))
{var and__3546__auto____113723 = x__450__auto____113721.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____113723))
{return cljs.core.not.call(null,x__450__auto____113721.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____113723;
}
} else
{return and__3546__auto____113722;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____113721);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____113724 = x;

if(cljs.core.truth_((function (){var and__3546__auto____113725 = x__450__auto____113724;

if(cljs.core.truth_(and__3546__auto____113725))
{var and__3546__auto____113726 = x__450__auto____113724.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____113726))
{return cljs.core.not.call(null,x__450__auto____113724.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____113726;
}
} else
{return and__3546__auto____113725;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____113724);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____113727 = x;

if(cljs.core.truth_((function (){var and__3546__auto____113728 = x__450__auto____113727;

if(cljs.core.truth_(and__3546__auto____113728))
{var and__3546__auto____113729 = x__450__auto____113727.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____113729))
{return cljs.core.not.call(null,x__450__auto____113727.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____113729;
}
} else
{return and__3546__auto____113728;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____113727);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__113730 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__113730.push(key);
}));
return keys__113730;
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
{var x__450__auto____113731 = s;

if(cljs.core.truth_((function (){var and__3546__auto____113732 = x__450__auto____113731;

if(cljs.core.truth_(and__3546__auto____113732))
{var and__3546__auto____113733 = x__450__auto____113731.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____113733))
{return cljs.core.not.call(null,x__450__auto____113731.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____113733;
}
} else
{return and__3546__auto____113732;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____113731);
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
var and__3546__auto____113734 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____113734))
{return cljs.core.not.call(null,(function (){var or__3548__auto____113735 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____113735))
{return or__3548__auto____113735;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____113734;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____113736 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____113736))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____113736;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____113737 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____113737))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____113737;
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
var and__3546__auto____113738 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____113738))
{return (n == n.toFixed());
} else
{return and__3546__auto____113738;
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
if(cljs.core.truth_((function (){var and__3546__auto____113739 = coll;

if(cljs.core.truth_(and__3546__auto____113739))
{var and__3546__auto____113740 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____113740))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____113740;
}
} else
{return and__3546__auto____113739;
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
var distinct_QMARK___113745 = (function (x){
return true;
});
var distinct_QMARK___113746 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___113747 = (function() { 
var G__113749__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__113741 = cljs.core.set([y,x]);
var xs__113742 = more;

while(true){
var x__113743 = cljs.core.first.call(null,xs__113742);
var etc__113744 = cljs.core.next.call(null,xs__113742);

if(cljs.core.truth_(xs__113742))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__113741,x__113743)))
{return false;
} else
{{
var G__113750 = cljs.core.conj.call(null,s__113741,x__113743);
var G__113751 = etc__113744;
s__113741 = G__113750;
xs__113742 = G__113751;
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
var G__113749 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113749__delegate.call(this, x, y, more);
};
G__113749.cljs$lang$maxFixedArity = 2;
G__113749.cljs$lang$applyTo = (function (arglist__113752){
var x = cljs.core.first(arglist__113752);
var y = cljs.core.first(cljs.core.next(arglist__113752));
var more = cljs.core.rest(cljs.core.next(arglist__113752));
return G__113749__delegate.call(this, x, y, more);
});
return G__113749;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___113745.call(this,x);
case  2 :
return distinct_QMARK___113746.call(this,x,y);
default:
return distinct_QMARK___113747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___113747.cljs$lang$applyTo;
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
var r__113753 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__113753)))
{return r__113753;
} else
{if(cljs.core.truth_(r__113753))
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
var sort__113755 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__113756 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__113754 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__113754,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__113754);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__113755.call(this,comp);
case  2 :
return sort__113756.call(this,comp,coll);
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
var sort_by__113758 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__113759 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__113758.call(this,keyfn,comp);
case  3 :
return sort_by__113759.call(this,keyfn,comp,coll);
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
var reduce__113761 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__113762 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__113761.call(this,f,val);
case  3 :
return reduce__113762.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__113768 = (function (f,coll){
var temp__3695__auto____113764 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____113764))
{var s__113765 = temp__3695__auto____113764;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__113765),cljs.core.next.call(null,s__113765));
} else
{return f.call(null);
}
});
var seq_reduce__113769 = (function (f,val,coll){
var val__113766 = val;
var coll__113767 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__113767))
{{
var G__113771 = f.call(null,val__113766,cljs.core.first.call(null,coll__113767));
var G__113772 = cljs.core.next.call(null,coll__113767);
val__113766 = G__113771;
coll__113767 = G__113772;
continue;
}
} else
{return val__113766;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__113768.call(this,f,val);
case  3 :
return seq_reduce__113769.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__113773 = null;
var G__113773__113774 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__113773__113775 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__113773 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__113773__113774.call(this,coll,f);
case  3 :
return G__113773__113775.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113773;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___113777 = (function (){
return 0;
});
var _PLUS___113778 = (function (x){
return x;
});
var _PLUS___113779 = (function (x,y){
return (x + y);
});
var _PLUS___113780 = (function() { 
var G__113782__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__113782 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113782__delegate.call(this, x, y, more);
};
G__113782.cljs$lang$maxFixedArity = 2;
G__113782.cljs$lang$applyTo = (function (arglist__113783){
var x = cljs.core.first(arglist__113783);
var y = cljs.core.first(cljs.core.next(arglist__113783));
var more = cljs.core.rest(cljs.core.next(arglist__113783));
return G__113782__delegate.call(this, x, y, more);
});
return G__113782;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___113777.call(this);
case  1 :
return _PLUS___113778.call(this,x);
case  2 :
return _PLUS___113779.call(this,x,y);
default:
return _PLUS___113780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___113780.cljs$lang$applyTo;
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
var ___113784 = (function (x){
return (- x);
});
var ___113785 = (function (x,y){
return (x - y);
});
var ___113786 = (function() { 
var G__113788__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__113788 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113788__delegate.call(this, x, y, more);
};
G__113788.cljs$lang$maxFixedArity = 2;
G__113788.cljs$lang$applyTo = (function (arglist__113789){
var x = cljs.core.first(arglist__113789);
var y = cljs.core.first(cljs.core.next(arglist__113789));
var more = cljs.core.rest(cljs.core.next(arglist__113789));
return G__113788__delegate.call(this, x, y, more);
});
return G__113788;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___113784.call(this,x);
case  2 :
return ___113785.call(this,x,y);
default:
return ___113786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___113786.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___113790 = (function (){
return 1;
});
var _STAR___113791 = (function (x){
return x;
});
var _STAR___113792 = (function (x,y){
return (x * y);
});
var _STAR___113793 = (function() { 
var G__113795__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__113795 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113795__delegate.call(this, x, y, more);
};
G__113795.cljs$lang$maxFixedArity = 2;
G__113795.cljs$lang$applyTo = (function (arglist__113796){
var x = cljs.core.first(arglist__113796);
var y = cljs.core.first(cljs.core.next(arglist__113796));
var more = cljs.core.rest(cljs.core.next(arglist__113796));
return G__113795__delegate.call(this, x, y, more);
});
return G__113795;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___113790.call(this);
case  1 :
return _STAR___113791.call(this,x);
case  2 :
return _STAR___113792.call(this,x,y);
default:
return _STAR___113793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___113793.cljs$lang$applyTo;
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
var _SLASH___113797 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___113798 = (function (x,y){
return (x / y);
});
var _SLASH___113799 = (function() { 
var G__113801__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__113801 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113801__delegate.call(this, x, y, more);
};
G__113801.cljs$lang$maxFixedArity = 2;
G__113801.cljs$lang$applyTo = (function (arglist__113802){
var x = cljs.core.first(arglist__113802);
var y = cljs.core.first(cljs.core.next(arglist__113802));
var more = cljs.core.rest(cljs.core.next(arglist__113802));
return G__113801__delegate.call(this, x, y, more);
});
return G__113801;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___113797.call(this,x);
case  2 :
return _SLASH___113798.call(this,x,y);
default:
return _SLASH___113799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___113799.cljs$lang$applyTo;
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
var _LT___113803 = (function (x){
return true;
});
var _LT___113804 = (function (x,y){
return (x < y);
});
var _LT___113805 = (function() { 
var G__113807__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__113808 = y;
var G__113809 = cljs.core.first.call(null,more);
var G__113810 = cljs.core.next.call(null,more);
x = G__113808;
y = G__113809;
more = G__113810;
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
var G__113807 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113807__delegate.call(this, x, y, more);
};
G__113807.cljs$lang$maxFixedArity = 2;
G__113807.cljs$lang$applyTo = (function (arglist__113811){
var x = cljs.core.first(arglist__113811);
var y = cljs.core.first(cljs.core.next(arglist__113811));
var more = cljs.core.rest(cljs.core.next(arglist__113811));
return G__113807__delegate.call(this, x, y, more);
});
return G__113807;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___113803.call(this,x);
case  2 :
return _LT___113804.call(this,x,y);
default:
return _LT___113805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___113805.cljs$lang$applyTo;
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
var _LT__EQ___113812 = (function (x){
return true;
});
var _LT__EQ___113813 = (function (x,y){
return (x <= y);
});
var _LT__EQ___113814 = (function() { 
var G__113816__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__113817 = y;
var G__113818 = cljs.core.first.call(null,more);
var G__113819 = cljs.core.next.call(null,more);
x = G__113817;
y = G__113818;
more = G__113819;
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
var G__113816 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113816__delegate.call(this, x, y, more);
};
G__113816.cljs$lang$maxFixedArity = 2;
G__113816.cljs$lang$applyTo = (function (arglist__113820){
var x = cljs.core.first(arglist__113820);
var y = cljs.core.first(cljs.core.next(arglist__113820));
var more = cljs.core.rest(cljs.core.next(arglist__113820));
return G__113816__delegate.call(this, x, y, more);
});
return G__113816;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___113812.call(this,x);
case  2 :
return _LT__EQ___113813.call(this,x,y);
default:
return _LT__EQ___113814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___113814.cljs$lang$applyTo;
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
var _GT___113821 = (function (x){
return true;
});
var _GT___113822 = (function (x,y){
return (x > y);
});
var _GT___113823 = (function() { 
var G__113825__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__113826 = y;
var G__113827 = cljs.core.first.call(null,more);
var G__113828 = cljs.core.next.call(null,more);
x = G__113826;
y = G__113827;
more = G__113828;
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
var G__113825 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113825__delegate.call(this, x, y, more);
};
G__113825.cljs$lang$maxFixedArity = 2;
G__113825.cljs$lang$applyTo = (function (arglist__113829){
var x = cljs.core.first(arglist__113829);
var y = cljs.core.first(cljs.core.next(arglist__113829));
var more = cljs.core.rest(cljs.core.next(arglist__113829));
return G__113825__delegate.call(this, x, y, more);
});
return G__113825;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___113821.call(this,x);
case  2 :
return _GT___113822.call(this,x,y);
default:
return _GT___113823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___113823.cljs$lang$applyTo;
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
var _GT__EQ___113830 = (function (x){
return true;
});
var _GT__EQ___113831 = (function (x,y){
return (x >= y);
});
var _GT__EQ___113832 = (function() { 
var G__113834__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__113835 = y;
var G__113836 = cljs.core.first.call(null,more);
var G__113837 = cljs.core.next.call(null,more);
x = G__113835;
y = G__113836;
more = G__113837;
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
var G__113834 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113834__delegate.call(this, x, y, more);
};
G__113834.cljs$lang$maxFixedArity = 2;
G__113834.cljs$lang$applyTo = (function (arglist__113838){
var x = cljs.core.first(arglist__113838);
var y = cljs.core.first(cljs.core.next(arglist__113838));
var more = cljs.core.rest(cljs.core.next(arglist__113838));
return G__113834__delegate.call(this, x, y, more);
});
return G__113834;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___113830.call(this,x);
case  2 :
return _GT__EQ___113831.call(this,x,y);
default:
return _GT__EQ___113832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___113832.cljs$lang$applyTo;
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
var max__113839 = (function (x){
return x;
});
var max__113840 = (function (x,y){
return ((x > y) ? x : y);
});
var max__113841 = (function() { 
var G__113843__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__113843 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113843__delegate.call(this, x, y, more);
};
G__113843.cljs$lang$maxFixedArity = 2;
G__113843.cljs$lang$applyTo = (function (arglist__113844){
var x = cljs.core.first(arglist__113844);
var y = cljs.core.first(cljs.core.next(arglist__113844));
var more = cljs.core.rest(cljs.core.next(arglist__113844));
return G__113843__delegate.call(this, x, y, more);
});
return G__113843;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__113839.call(this,x);
case  2 :
return max__113840.call(this,x,y);
default:
return max__113841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__113841.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__113845 = (function (x){
return x;
});
var min__113846 = (function (x,y){
return ((x < y) ? x : y);
});
var min__113847 = (function() { 
var G__113849__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__113849 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113849__delegate.call(this, x, y, more);
};
G__113849.cljs$lang$maxFixedArity = 2;
G__113849.cljs$lang$applyTo = (function (arglist__113850){
var x = cljs.core.first(arglist__113850);
var y = cljs.core.first(cljs.core.next(arglist__113850));
var more = cljs.core.rest(cljs.core.next(arglist__113850));
return G__113849__delegate.call(this, x, y, more);
});
return G__113849;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__113845.call(this,x);
case  2 :
return min__113846.call(this,x,y);
default:
return min__113847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__113847.cljs$lang$applyTo;
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
var rem__113851 = (n % d);

return cljs.core.fix.call(null,((n - rem__113851) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__113852 = cljs.core.quot.call(null,n,d);

return (n - (d * q__113852));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__113853 = (function (){
return Math.random.call(null);
});
var rand__113854 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__113853.call(this);
case  1 :
return rand__113854.call(this,n);
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
var _EQ__EQ___113856 = (function (x){
return true;
});
var _EQ__EQ___113857 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___113858 = (function() { 
var G__113860__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__113861 = y;
var G__113862 = cljs.core.first.call(null,more);
var G__113863 = cljs.core.next.call(null,more);
x = G__113861;
y = G__113862;
more = G__113863;
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
var G__113860 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__113860__delegate.call(this, x, y, more);
};
G__113860.cljs$lang$maxFixedArity = 2;
G__113860.cljs$lang$applyTo = (function (arglist__113864){
var x = cljs.core.first(arglist__113864);
var y = cljs.core.first(cljs.core.next(arglist__113864));
var more = cljs.core.rest(cljs.core.next(arglist__113864));
return G__113860__delegate.call(this, x, y, more);
});
return G__113860;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___113856.call(this,x);
case  2 :
return _EQ__EQ___113857.call(this,x,y);
default:
return _EQ__EQ___113858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___113858.cljs$lang$applyTo;
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
var n__113865 = n;
var xs__113866 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____113867 = xs__113866;

if(cljs.core.truth_(and__3546__auto____113867))
{return (n__113865 > 0);
} else
{return and__3546__auto____113867;
}
})()))
{{
var G__113868 = (n__113865 - 1);
var G__113869 = cljs.core.next.call(null,xs__113866);
n__113865 = G__113868;
xs__113866 = G__113869;
continue;
}
} else
{return xs__113866;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__113874 = null;
var G__113874__113875 = (function (coll,n){
var temp__3695__auto____113870 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____113870))
{var xs__113871 = temp__3695__auto____113870;

return cljs.core.first.call(null,xs__113871);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__113874__113876 = (function (coll,n,not_found){
var temp__3695__auto____113872 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____113872))
{var xs__113873 = temp__3695__auto____113872;

return cljs.core.first.call(null,xs__113873);
} else
{return not_found;
}
});
G__113874 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__113874__113875.call(this,coll,n);
case  3 :
return G__113874__113876.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113874;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___113878 = (function (){
return "";
});
var str_STAR___113879 = (function (x){
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
var str_STAR___113880 = (function() { 
var G__113882__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__113883 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__113884 = cljs.core.next.call(null,more);
sb = G__113883;
more = G__113884;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__113882 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__113882__delegate.call(this, x, ys);
};
G__113882.cljs$lang$maxFixedArity = 1;
G__113882.cljs$lang$applyTo = (function (arglist__113885){
var x = cljs.core.first(arglist__113885);
var ys = cljs.core.rest(arglist__113885);
return G__113882__delegate.call(this, x, ys);
});
return G__113882;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___113878.call(this);
case  1 :
return str_STAR___113879.call(this,x);
default:
return str_STAR___113880.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___113880.cljs$lang$applyTo;
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
var str__113886 = (function (){
return "";
});
var str__113887 = (function (x){
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
var str__113888 = (function() { 
var G__113890__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__113890 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__113890__delegate.call(this, x, ys);
};
G__113890.cljs$lang$maxFixedArity = 1;
G__113890.cljs$lang$applyTo = (function (arglist__113891){
var x = cljs.core.first(arglist__113891);
var ys = cljs.core.rest(arglist__113891);
return G__113890__delegate.call(this, x, ys);
});
return G__113890;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__113886.call(this);
case  1 :
return str__113887.call(this,x);
default:
return str__113888.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__113888.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__113892 = (function (s,start){
return s.substring(start);
});
var subs__113893 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__113892.call(this,s,start);
case  3 :
return subs__113893.call(this,s,start,end);
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
var symbol__113895 = (function (name){
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
var symbol__113896 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__113895.call(this,ns);
case  2 :
return symbol__113896.call(this,ns,name);
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
var keyword__113898 = (function (name){
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
var keyword__113899 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__113898.call(this,ns);
case  2 :
return keyword__113899.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__113901 = cljs.core.seq.call(null,x);
var ys__113902 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__113901 === null)))
{return (ys__113902 === null);
} else
{if(cljs.core.truth_((ys__113902 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__113901),cljs.core.first.call(null,ys__113902))))
{{
var G__113903 = cljs.core.next.call(null,xs__113901);
var G__113904 = cljs.core.next.call(null,ys__113902);
xs__113901 = G__113903;
ys__113902 = G__113904;
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
return cljs.core.reduce.call(null,(function (p1__113905_SHARP_,p2__113906_SHARP_){
return cljs.core.hash_combine.call(null,p1__113905_SHARP_,cljs.core.hash.call(null,p2__113906_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__113907__113908 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__113907__113908))
{var G__113910__113912 = cljs.core.first.call(null,G__113907__113908);
var vec__113911__113913 = G__113910__113912;
var key_name__113914 = cljs.core.nth.call(null,vec__113911__113913,0,null);
var f__113915 = cljs.core.nth.call(null,vec__113911__113913,1,null);
var G__113907__113916 = G__113907__113908;

var G__113910__113917 = G__113910__113912;
var G__113907__113918 = G__113907__113916;

while(true){
var vec__113919__113920 = G__113910__113917;
var key_name__113921 = cljs.core.nth.call(null,vec__113919__113920,0,null);
var f__113922 = cljs.core.nth.call(null,vec__113919__113920,1,null);
var G__113907__113923 = G__113907__113918;

var str_name__113924 = cljs.core.name.call(null,key_name__113921);

obj[str_name__113924] = f__113922;
var temp__3698__auto____113925 = cljs.core.next.call(null,G__113907__113923);

if(cljs.core.truth_(temp__3698__auto____113925))
{var G__113907__113926 = temp__3698__auto____113925;

{
var G__113927 = cljs.core.first.call(null,G__113907__113926);
var G__113928 = G__113907__113926;
G__113910__113917 = G__113927;
G__113907__113918 = G__113928;
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
var this__113929 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__113930 = this;
return (new cljs.core.List(this__113930.meta,o,coll,(this__113930.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__113931 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__113932 = this;
return this__113932.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__113933 = this;
return this__113933.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__113934 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__113935 = this;
return this__113935.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__113936 = this;
return this__113936.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__113937 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__113938 = this;
return (new cljs.core.List(meta,this__113938.first,this__113938.rest,this__113938.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__113939 = this;
return this__113939.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__113940 = this;
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
var this__113941 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__113942 = this;
return (new cljs.core.List(this__113942.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__113943 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__113944 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__113945 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__113946 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__113947 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__113948 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__113949 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__113950 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__113951 = this;
return this__113951.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__113952 = this;
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
list.cljs$lang$applyTo = (function (arglist__113953){
var items = cljs.core.seq( arglist__113953 );;
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
var this__113954 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__113955 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__113956 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__113957 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__113957.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__113958 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__113959 = this;
return this__113959.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__113960 = this;
if(cljs.core.truth_((this__113960.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__113960.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__113961 = this;
return this__113961.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__113962 = this;
return (new cljs.core.Cons(meta,this__113962.first,this__113962.rest));
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
var G__113963 = null;
var G__113963__113964 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__113963__113965 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__113963 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__113963__113964.call(this,string,f);
case  3 :
return G__113963__113965.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113963;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__113967 = null;
var G__113967__113968 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__113967__113969 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__113967 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__113967__113968.call(this,string,k);
case  3 :
return G__113967__113969.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113967;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__113971 = null;
var G__113971__113972 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__113971__113973 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__113971 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__113971__113972.call(this,string,n);
case  3 :
return G__113971__113973.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113971;
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
var G__113981 = null;
var G__113981__113982 = (function (tsym113975,coll){
var tsym113975__113977 = this;

var this$__113978 = tsym113975__113977;

return cljs.core.get.call(null,coll,this$__113978.toString());
});
var G__113981__113983 = (function (tsym113976,coll,not_found){
var tsym113976__113979 = this;

var this$__113980 = tsym113976__113979;

return cljs.core.get.call(null,coll,this$__113980.toString(),not_found);
});
G__113981 = function(tsym113976,coll,not_found){
switch(arguments.length){
case  2 :
return G__113981__113982.call(this,tsym113976,coll);
case  3 :
return G__113981__113983.call(this,tsym113976,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__113981;
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
var x__113985 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__113985;
} else
{lazy_seq.x = x__113985.call(null);
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
var this__113986 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__113987 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__113988 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__113989 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__113989.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__113990 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__113991 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__113992 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__113993 = this;
return this__113993.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__113994 = this;
return (new cljs.core.LazySeq(meta,this__113994.realized,this__113994.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__113995 = cljs.core.array.call(null);

var s__113996 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__113996)))
{ary__113995.push(cljs.core.first.call(null,s__113996));
{
var G__113997 = cljs.core.next.call(null,s__113996);
s__113996 = G__113997;
continue;
}
} else
{return ary__113995;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__113998 = s;
var i__113999 = n;
var sum__114000 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____114001 = (i__113999 > 0);

if(cljs.core.truth_(and__3546__auto____114001))
{return cljs.core.seq.call(null,s__113998);
} else
{return and__3546__auto____114001;
}
})()))
{{
var G__114002 = cljs.core.next.call(null,s__113998);
var G__114003 = (i__113999 - 1);
var G__114004 = (sum__114000 + 1);
s__113998 = G__114002;
i__113999 = G__114003;
sum__114000 = G__114004;
continue;
}
} else
{return sum__114000;
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
var concat__114008 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__114009 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__114010 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__114005 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__114005))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__114005),concat.call(null,cljs.core.rest.call(null,s__114005),y));
} else
{return y;
}
})));
});
var concat__114011 = (function() { 
var G__114013__delegate = function (x,y,zs){
var cat__114007 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__114006 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__114006))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__114006),cat.call(null,cljs.core.rest.call(null,xys__114006),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__114007.call(null,concat.call(null,x,y),zs);
};
var G__114013 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__114013__delegate.call(this, x, y, zs);
};
G__114013.cljs$lang$maxFixedArity = 2;
G__114013.cljs$lang$applyTo = (function (arglist__114014){
var x = cljs.core.first(arglist__114014);
var y = cljs.core.first(cljs.core.next(arglist__114014));
var zs = cljs.core.rest(cljs.core.next(arglist__114014));
return G__114013__delegate.call(this, x, y, zs);
});
return G__114013;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__114008.call(this);
case  1 :
return concat__114009.call(this,x);
case  2 :
return concat__114010.call(this,x,y);
default:
return concat__114011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__114011.cljs$lang$applyTo;
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
var list_STAR___114015 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___114016 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___114017 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___114018 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___114019 = (function() { 
var G__114021__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__114021 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__114021__delegate.call(this, a, b, c, d, more);
};
G__114021.cljs$lang$maxFixedArity = 4;
G__114021.cljs$lang$applyTo = (function (arglist__114022){
var a = cljs.core.first(arglist__114022);
var b = cljs.core.first(cljs.core.next(arglist__114022));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114022)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114022))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114022))));
return G__114021__delegate.call(this, a, b, c, d, more);
});
return G__114021;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___114015.call(this,a);
case  2 :
return list_STAR___114016.call(this,a,b);
case  3 :
return list_STAR___114017.call(this,a,b,c);
case  4 :
return list_STAR___114018.call(this,a,b,c,d);
default:
return list_STAR___114019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___114019.cljs$lang$applyTo;
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
var apply__114032 = (function (f,args){
var fixed_arity__114023 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__114023 + 1)) <= fixed_arity__114023)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__114033 = (function (f,x,args){
var arglist__114024 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__114025 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__114024,fixed_arity__114025) <= fixed_arity__114025)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__114024));
} else
{return f.cljs$lang$applyTo(arglist__114024);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__114024));
}
});
var apply__114034 = (function (f,x,y,args){
var arglist__114026 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__114027 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__114026,fixed_arity__114027) <= fixed_arity__114027)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__114026));
} else
{return f.cljs$lang$applyTo(arglist__114026);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__114026));
}
});
var apply__114035 = (function (f,x,y,z,args){
var arglist__114028 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__114029 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__114028,fixed_arity__114029) <= fixed_arity__114029)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__114028));
} else
{return f.cljs$lang$applyTo(arglist__114028);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__114028));
}
});
var apply__114036 = (function() { 
var G__114038__delegate = function (f,a,b,c,d,args){
var arglist__114030 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__114031 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__114030,fixed_arity__114031) <= fixed_arity__114031)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__114030));
} else
{return f.cljs$lang$applyTo(arglist__114030);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__114030));
}
};
var G__114038 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__114038__delegate.call(this, f, a, b, c, d, args);
};
G__114038.cljs$lang$maxFixedArity = 5;
G__114038.cljs$lang$applyTo = (function (arglist__114039){
var f = cljs.core.first(arglist__114039);
var a = cljs.core.first(cljs.core.next(arglist__114039));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114039)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114039))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114039)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114039)))));
return G__114038__delegate.call(this, f, a, b, c, d, args);
});
return G__114038;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__114032.call(this,f,a);
case  3 :
return apply__114033.call(this,f,a,b);
case  4 :
return apply__114034.call(this,f,a,b,c);
case  5 :
return apply__114035.call(this,f,a,b,c,d);
default:
return apply__114036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__114036.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__114040){
var obj = cljs.core.first(arglist__114040);
var f = cljs.core.first(cljs.core.next(arglist__114040));
var args = cljs.core.rest(cljs.core.next(arglist__114040));
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
var not_EQ___114041 = (function (x){
return false;
});
var not_EQ___114042 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___114043 = (function() { 
var G__114045__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__114045 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__114045__delegate.call(this, x, y, more);
};
G__114045.cljs$lang$maxFixedArity = 2;
G__114045.cljs$lang$applyTo = (function (arglist__114046){
var x = cljs.core.first(arglist__114046);
var y = cljs.core.first(cljs.core.next(arglist__114046));
var more = cljs.core.rest(cljs.core.next(arglist__114046));
return G__114045__delegate.call(this, x, y, more);
});
return G__114045;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___114041.call(this,x);
case  2 :
return not_EQ___114042.call(this,x,y);
default:
return not_EQ___114043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___114043.cljs$lang$applyTo;
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
var G__114047 = pred;
var G__114048 = cljs.core.next.call(null,coll);
pred = G__114047;
coll = G__114048;
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
{var or__3548__auto____114049 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____114049))
{return or__3548__auto____114049;
} else
{{
var G__114050 = pred;
var G__114051 = cljs.core.next.call(null,coll);
pred = G__114050;
coll = G__114051;
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
var G__114052 = null;
var G__114052__114053 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__114052__114054 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__114052__114055 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__114052__114056 = (function() { 
var G__114058__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__114058 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__114058__delegate.call(this, x, y, zs);
};
G__114058.cljs$lang$maxFixedArity = 2;
G__114058.cljs$lang$applyTo = (function (arglist__114059){
var x = cljs.core.first(arglist__114059);
var y = cljs.core.first(cljs.core.next(arglist__114059));
var zs = cljs.core.rest(cljs.core.next(arglist__114059));
return G__114058__delegate.call(this, x, y, zs);
});
return G__114058;
})()
;
G__114052 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__114052__114053.call(this);
case  1 :
return G__114052__114054.call(this,x);
case  2 :
return G__114052__114055.call(this,x,y);
default:
return G__114052__114056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114052.cljs$lang$maxFixedArity = 2;
G__114052.cljs$lang$applyTo = G__114052__114056.cljs$lang$applyTo;
return G__114052;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__114060__delegate = function (args){
return x;
};
var G__114060 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__114060__delegate.call(this, args);
};
G__114060.cljs$lang$maxFixedArity = 0;
G__114060.cljs$lang$applyTo = (function (arglist__114061){
var args = cljs.core.seq( arglist__114061 );;
return G__114060__delegate.call(this, args);
});
return G__114060;
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
var comp__114065 = (function (){
return cljs.core.identity;
});
var comp__114066 = (function (f){
return f;
});
var comp__114067 = (function (f,g){
return (function() {
var G__114071 = null;
var G__114071__114072 = (function (){
return f.call(null,g.call(null));
});
var G__114071__114073 = (function (x){
return f.call(null,g.call(null,x));
});
var G__114071__114074 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__114071__114075 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__114071__114076 = (function() { 
var G__114078__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__114078 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114078__delegate.call(this, x, y, z, args);
};
G__114078.cljs$lang$maxFixedArity = 3;
G__114078.cljs$lang$applyTo = (function (arglist__114079){
var x = cljs.core.first(arglist__114079);
var y = cljs.core.first(cljs.core.next(arglist__114079));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114079)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114079)));
return G__114078__delegate.call(this, x, y, z, args);
});
return G__114078;
})()
;
G__114071 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__114071__114072.call(this);
case  1 :
return G__114071__114073.call(this,x);
case  2 :
return G__114071__114074.call(this,x,y);
case  3 :
return G__114071__114075.call(this,x,y,z);
default:
return G__114071__114076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114071.cljs$lang$maxFixedArity = 3;
G__114071.cljs$lang$applyTo = G__114071__114076.cljs$lang$applyTo;
return G__114071;
})()
});
var comp__114068 = (function (f,g,h){
return (function() {
var G__114080 = null;
var G__114080__114081 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__114080__114082 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__114080__114083 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__114080__114084 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__114080__114085 = (function() { 
var G__114087__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__114087 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114087__delegate.call(this, x, y, z, args);
};
G__114087.cljs$lang$maxFixedArity = 3;
G__114087.cljs$lang$applyTo = (function (arglist__114088){
var x = cljs.core.first(arglist__114088);
var y = cljs.core.first(cljs.core.next(arglist__114088));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114088)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114088)));
return G__114087__delegate.call(this, x, y, z, args);
});
return G__114087;
})()
;
G__114080 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__114080__114081.call(this);
case  1 :
return G__114080__114082.call(this,x);
case  2 :
return G__114080__114083.call(this,x,y);
case  3 :
return G__114080__114084.call(this,x,y,z);
default:
return G__114080__114085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114080.cljs$lang$maxFixedArity = 3;
G__114080.cljs$lang$applyTo = G__114080__114085.cljs$lang$applyTo;
return G__114080;
})()
});
var comp__114069 = (function() { 
var G__114089__delegate = function (f1,f2,f3,fs){
var fs__114062 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__114090__delegate = function (args){
var ret__114063 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__114062),args);
var fs__114064 = cljs.core.next.call(null,fs__114062);

while(true){
if(cljs.core.truth_(fs__114064))
{{
var G__114091 = cljs.core.first.call(null,fs__114064).call(null,ret__114063);
var G__114092 = cljs.core.next.call(null,fs__114064);
ret__114063 = G__114091;
fs__114064 = G__114092;
continue;
}
} else
{return ret__114063;
}
break;
}
};
var G__114090 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__114090__delegate.call(this, args);
};
G__114090.cljs$lang$maxFixedArity = 0;
G__114090.cljs$lang$applyTo = (function (arglist__114093){
var args = cljs.core.seq( arglist__114093 );;
return G__114090__delegate.call(this, args);
});
return G__114090;
})()
;
};
var G__114089 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114089__delegate.call(this, f1, f2, f3, fs);
};
G__114089.cljs$lang$maxFixedArity = 3;
G__114089.cljs$lang$applyTo = (function (arglist__114094){
var f1 = cljs.core.first(arglist__114094);
var f2 = cljs.core.first(cljs.core.next(arglist__114094));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114094)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114094)));
return G__114089__delegate.call(this, f1, f2, f3, fs);
});
return G__114089;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__114065.call(this);
case  1 :
return comp__114066.call(this,f1);
case  2 :
return comp__114067.call(this,f1,f2);
case  3 :
return comp__114068.call(this,f1,f2,f3);
default:
return comp__114069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__114069.cljs$lang$applyTo;
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
var partial__114095 = (function (f,arg1){
return (function() { 
var G__114100__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__114100 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__114100__delegate.call(this, args);
};
G__114100.cljs$lang$maxFixedArity = 0;
G__114100.cljs$lang$applyTo = (function (arglist__114101){
var args = cljs.core.seq( arglist__114101 );;
return G__114100__delegate.call(this, args);
});
return G__114100;
})()
;
});
var partial__114096 = (function (f,arg1,arg2){
return (function() { 
var G__114102__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__114102 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__114102__delegate.call(this, args);
};
G__114102.cljs$lang$maxFixedArity = 0;
G__114102.cljs$lang$applyTo = (function (arglist__114103){
var args = cljs.core.seq( arglist__114103 );;
return G__114102__delegate.call(this, args);
});
return G__114102;
})()
;
});
var partial__114097 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__114104__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__114104 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__114104__delegate.call(this, args);
};
G__114104.cljs$lang$maxFixedArity = 0;
G__114104.cljs$lang$applyTo = (function (arglist__114105){
var args = cljs.core.seq( arglist__114105 );;
return G__114104__delegate.call(this, args);
});
return G__114104;
})()
;
});
var partial__114098 = (function() { 
var G__114106__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__114107__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__114107 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__114107__delegate.call(this, args);
};
G__114107.cljs$lang$maxFixedArity = 0;
G__114107.cljs$lang$applyTo = (function (arglist__114108){
var args = cljs.core.seq( arglist__114108 );;
return G__114107__delegate.call(this, args);
});
return G__114107;
})()
;
};
var G__114106 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__114106__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__114106.cljs$lang$maxFixedArity = 4;
G__114106.cljs$lang$applyTo = (function (arglist__114109){
var f = cljs.core.first(arglist__114109);
var arg1 = cljs.core.first(cljs.core.next(arglist__114109));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114109)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114109))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114109))));
return G__114106__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__114106;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__114095.call(this,f,arg1);
case  3 :
return partial__114096.call(this,f,arg1,arg2);
case  4 :
return partial__114097.call(this,f,arg1,arg2,arg3);
default:
return partial__114098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__114098.cljs$lang$applyTo;
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
var fnil__114110 = (function (f,x){
return (function() {
var G__114114 = null;
var G__114114__114115 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__114114__114116 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__114114__114117 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__114114__114118 = (function() { 
var G__114120__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__114120 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114120__delegate.call(this, a, b, c, ds);
};
G__114120.cljs$lang$maxFixedArity = 3;
G__114120.cljs$lang$applyTo = (function (arglist__114121){
var a = cljs.core.first(arglist__114121);
var b = cljs.core.first(cljs.core.next(arglist__114121));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114121)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114121)));
return G__114120__delegate.call(this, a, b, c, ds);
});
return G__114120;
})()
;
G__114114 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__114114__114115.call(this,a);
case  2 :
return G__114114__114116.call(this,a,b);
case  3 :
return G__114114__114117.call(this,a,b,c);
default:
return G__114114__114118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114114.cljs$lang$maxFixedArity = 3;
G__114114.cljs$lang$applyTo = G__114114__114118.cljs$lang$applyTo;
return G__114114;
})()
});
var fnil__114111 = (function (f,x,y){
return (function() {
var G__114122 = null;
var G__114122__114123 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__114122__114124 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__114122__114125 = (function() { 
var G__114127__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__114127 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114127__delegate.call(this, a, b, c, ds);
};
G__114127.cljs$lang$maxFixedArity = 3;
G__114127.cljs$lang$applyTo = (function (arglist__114128){
var a = cljs.core.first(arglist__114128);
var b = cljs.core.first(cljs.core.next(arglist__114128));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114128)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114128)));
return G__114127__delegate.call(this, a, b, c, ds);
});
return G__114127;
})()
;
G__114122 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__114122__114123.call(this,a,b);
case  3 :
return G__114122__114124.call(this,a,b,c);
default:
return G__114122__114125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114122.cljs$lang$maxFixedArity = 3;
G__114122.cljs$lang$applyTo = G__114122__114125.cljs$lang$applyTo;
return G__114122;
})()
});
var fnil__114112 = (function (f,x,y,z){
return (function() {
var G__114129 = null;
var G__114129__114130 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__114129__114131 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__114129__114132 = (function() { 
var G__114134__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__114134 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114134__delegate.call(this, a, b, c, ds);
};
G__114134.cljs$lang$maxFixedArity = 3;
G__114134.cljs$lang$applyTo = (function (arglist__114135){
var a = cljs.core.first(arglist__114135);
var b = cljs.core.first(cljs.core.next(arglist__114135));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114135)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114135)));
return G__114134__delegate.call(this, a, b, c, ds);
});
return G__114134;
})()
;
G__114129 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__114129__114130.call(this,a,b);
case  3 :
return G__114129__114131.call(this,a,b,c);
default:
return G__114129__114132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114129.cljs$lang$maxFixedArity = 3;
G__114129.cljs$lang$applyTo = G__114129__114132.cljs$lang$applyTo;
return G__114129;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__114110.call(this,f,x);
case  3 :
return fnil__114111.call(this,f,x,y);
case  4 :
return fnil__114112.call(this,f,x,y,z);
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
var mapi__114138 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114136 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114136))
{var s__114137 = temp__3698__auto____114136;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__114137)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__114137)));
} else
{return null;
}
})));
});

return mapi__114138.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114139 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114139))
{var s__114140 = temp__3698__auto____114139;

var x__114141 = f.call(null,cljs.core.first.call(null,s__114140));

if(cljs.core.truth_((x__114141 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__114140));
} else
{return cljs.core.cons.call(null,x__114141,keep.call(null,f,cljs.core.rest.call(null,s__114140)));
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
var keepi__114151 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114148 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114148))
{var s__114149 = temp__3698__auto____114148;

var x__114150 = f.call(null,idx,cljs.core.first.call(null,s__114149));

if(cljs.core.truth_((x__114150 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__114149));
} else
{return cljs.core.cons.call(null,x__114150,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__114149)));
}
} else
{return null;
}
})));
});

return keepi__114151.call(null,0,coll);
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
var every_pred__114196 = (function (p){
return (function() {
var ep1 = null;
var ep1__114201 = (function (){
return true;
});
var ep1__114202 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__114203 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114158 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____114158))
{return p.call(null,y);
} else
{return and__3546__auto____114158;
}
})());
});
var ep1__114204 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114159 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____114159))
{var and__3546__auto____114160 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____114160))
{return p.call(null,z);
} else
{return and__3546__auto____114160;
}
} else
{return and__3546__auto____114159;
}
})());
});
var ep1__114205 = (function() { 
var G__114207__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114161 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____114161))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____114161;
}
})());
};
var G__114207 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114207__delegate.call(this, x, y, z, args);
};
G__114207.cljs$lang$maxFixedArity = 3;
G__114207.cljs$lang$applyTo = (function (arglist__114208){
var x = cljs.core.first(arglist__114208);
var y = cljs.core.first(cljs.core.next(arglist__114208));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114208)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114208)));
return G__114207__delegate.call(this, x, y, z, args);
});
return G__114207;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__114201.call(this);
case  1 :
return ep1__114202.call(this,x);
case  2 :
return ep1__114203.call(this,x,y);
case  3 :
return ep1__114204.call(this,x,y,z);
default:
return ep1__114205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__114205.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__114197 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__114209 = (function (){
return true;
});
var ep2__114210 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114162 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____114162))
{return p2.call(null,x);
} else
{return and__3546__auto____114162;
}
})());
});
var ep2__114211 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114163 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____114163))
{var and__3546__auto____114164 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____114164))
{var and__3546__auto____114165 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____114165))
{return p2.call(null,y);
} else
{return and__3546__auto____114165;
}
} else
{return and__3546__auto____114164;
}
} else
{return and__3546__auto____114163;
}
})());
});
var ep2__114212 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114166 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____114166))
{var and__3546__auto____114167 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____114167))
{var and__3546__auto____114168 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____114168))
{var and__3546__auto____114169 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____114169))
{var and__3546__auto____114170 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____114170))
{return p2.call(null,z);
} else
{return and__3546__auto____114170;
}
} else
{return and__3546__auto____114169;
}
} else
{return and__3546__auto____114168;
}
} else
{return and__3546__auto____114167;
}
} else
{return and__3546__auto____114166;
}
})());
});
var ep2__114213 = (function() { 
var G__114215__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114171 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____114171))
{return cljs.core.every_QMARK_.call(null,(function (p1__114142_SHARP_){
var and__3546__auto____114172 = p1.call(null,p1__114142_SHARP_);

if(cljs.core.truth_(and__3546__auto____114172))
{return p2.call(null,p1__114142_SHARP_);
} else
{return and__3546__auto____114172;
}
}),args);
} else
{return and__3546__auto____114171;
}
})());
};
var G__114215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114215__delegate.call(this, x, y, z, args);
};
G__114215.cljs$lang$maxFixedArity = 3;
G__114215.cljs$lang$applyTo = (function (arglist__114216){
var x = cljs.core.first(arglist__114216);
var y = cljs.core.first(cljs.core.next(arglist__114216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114216)));
return G__114215__delegate.call(this, x, y, z, args);
});
return G__114215;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__114209.call(this);
case  1 :
return ep2__114210.call(this,x);
case  2 :
return ep2__114211.call(this,x,y);
case  3 :
return ep2__114212.call(this,x,y,z);
default:
return ep2__114213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__114213.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__114198 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__114217 = (function (){
return true;
});
var ep3__114218 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114173 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____114173))
{var and__3546__auto____114174 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____114174))
{return p3.call(null,x);
} else
{return and__3546__auto____114174;
}
} else
{return and__3546__auto____114173;
}
})());
});
var ep3__114219 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114175 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____114175))
{var and__3546__auto____114176 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____114176))
{var and__3546__auto____114177 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____114177))
{var and__3546__auto____114178 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____114178))
{var and__3546__auto____114179 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____114179))
{return p3.call(null,y);
} else
{return and__3546__auto____114179;
}
} else
{return and__3546__auto____114178;
}
} else
{return and__3546__auto____114177;
}
} else
{return and__3546__auto____114176;
}
} else
{return and__3546__auto____114175;
}
})());
});
var ep3__114220 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114180 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____114180))
{var and__3546__auto____114181 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____114181))
{var and__3546__auto____114182 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____114182))
{var and__3546__auto____114183 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____114183))
{var and__3546__auto____114184 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____114184))
{var and__3546__auto____114185 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____114185))
{var and__3546__auto____114186 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____114186))
{var and__3546__auto____114187 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____114187))
{return p3.call(null,z);
} else
{return and__3546__auto____114187;
}
} else
{return and__3546__auto____114186;
}
} else
{return and__3546__auto____114185;
}
} else
{return and__3546__auto____114184;
}
} else
{return and__3546__auto____114183;
}
} else
{return and__3546__auto____114182;
}
} else
{return and__3546__auto____114181;
}
} else
{return and__3546__auto____114180;
}
})());
});
var ep3__114221 = (function() { 
var G__114223__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114188 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____114188))
{return cljs.core.every_QMARK_.call(null,(function (p1__114143_SHARP_){
var and__3546__auto____114189 = p1.call(null,p1__114143_SHARP_);

if(cljs.core.truth_(and__3546__auto____114189))
{var and__3546__auto____114190 = p2.call(null,p1__114143_SHARP_);

if(cljs.core.truth_(and__3546__auto____114190))
{return p3.call(null,p1__114143_SHARP_);
} else
{return and__3546__auto____114190;
}
} else
{return and__3546__auto____114189;
}
}),args);
} else
{return and__3546__auto____114188;
}
})());
};
var G__114223 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114223__delegate.call(this, x, y, z, args);
};
G__114223.cljs$lang$maxFixedArity = 3;
G__114223.cljs$lang$applyTo = (function (arglist__114224){
var x = cljs.core.first(arglist__114224);
var y = cljs.core.first(cljs.core.next(arglist__114224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114224)));
return G__114223__delegate.call(this, x, y, z, args);
});
return G__114223;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__114217.call(this);
case  1 :
return ep3__114218.call(this,x);
case  2 :
return ep3__114219.call(this,x,y);
case  3 :
return ep3__114220.call(this,x,y,z);
default:
return ep3__114221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__114221.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__114199 = (function() { 
var G__114225__delegate = function (p1,p2,p3,ps){
var ps__114191 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__114226 = (function (){
return true;
});
var epn__114227 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__114144_SHARP_){
return p1__114144_SHARP_.call(null,x);
}),ps__114191);
});
var epn__114228 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__114145_SHARP_){
var and__3546__auto____114192 = p1__114145_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____114192))
{return p1__114145_SHARP_.call(null,y);
} else
{return and__3546__auto____114192;
}
}),ps__114191);
});
var epn__114229 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__114146_SHARP_){
var and__3546__auto____114193 = p1__114146_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____114193))
{var and__3546__auto____114194 = p1__114146_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____114194))
{return p1__114146_SHARP_.call(null,z);
} else
{return and__3546__auto____114194;
}
} else
{return and__3546__auto____114193;
}
}),ps__114191);
});
var epn__114230 = (function() { 
var G__114232__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____114195 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____114195))
{return cljs.core.every_QMARK_.call(null,(function (p1__114147_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__114147_SHARP_,args);
}),ps__114191);
} else
{return and__3546__auto____114195;
}
})());
};
var G__114232 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114232__delegate.call(this, x, y, z, args);
};
G__114232.cljs$lang$maxFixedArity = 3;
G__114232.cljs$lang$applyTo = (function (arglist__114233){
var x = cljs.core.first(arglist__114233);
var y = cljs.core.first(cljs.core.next(arglist__114233));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114233)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114233)));
return G__114232__delegate.call(this, x, y, z, args);
});
return G__114232;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__114226.call(this);
case  1 :
return epn__114227.call(this,x);
case  2 :
return epn__114228.call(this,x,y);
case  3 :
return epn__114229.call(this,x,y,z);
default:
return epn__114230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__114230.cljs$lang$applyTo;
return epn;
})()
};
var G__114225 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114225__delegate.call(this, p1, p2, p3, ps);
};
G__114225.cljs$lang$maxFixedArity = 3;
G__114225.cljs$lang$applyTo = (function (arglist__114234){
var p1 = cljs.core.first(arglist__114234);
var p2 = cljs.core.first(cljs.core.next(arglist__114234));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114234)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114234)));
return G__114225__delegate.call(this, p1, p2, p3, ps);
});
return G__114225;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__114196.call(this,p1);
case  2 :
return every_pred__114197.call(this,p1,p2);
case  3 :
return every_pred__114198.call(this,p1,p2,p3);
default:
return every_pred__114199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__114199.cljs$lang$applyTo;
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
var some_fn__114274 = (function (p){
return (function() {
var sp1 = null;
var sp1__114279 = (function (){
return null;
});
var sp1__114280 = (function (x){
return p.call(null,x);
});
var sp1__114281 = (function (x,y){
var or__3548__auto____114236 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____114236))
{return or__3548__auto____114236;
} else
{return p.call(null,y);
}
});
var sp1__114282 = (function (x,y,z){
var or__3548__auto____114237 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____114237))
{return or__3548__auto____114237;
} else
{var or__3548__auto____114238 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____114238))
{return or__3548__auto____114238;
} else
{return p.call(null,z);
}
}
});
var sp1__114283 = (function() { 
var G__114285__delegate = function (x,y,z,args){
var or__3548__auto____114239 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____114239))
{return or__3548__auto____114239;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__114285 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114285__delegate.call(this, x, y, z, args);
};
G__114285.cljs$lang$maxFixedArity = 3;
G__114285.cljs$lang$applyTo = (function (arglist__114286){
var x = cljs.core.first(arglist__114286);
var y = cljs.core.first(cljs.core.next(arglist__114286));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114286)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114286)));
return G__114285__delegate.call(this, x, y, z, args);
});
return G__114285;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__114279.call(this);
case  1 :
return sp1__114280.call(this,x);
case  2 :
return sp1__114281.call(this,x,y);
case  3 :
return sp1__114282.call(this,x,y,z);
default:
return sp1__114283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__114283.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__114275 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__114287 = (function (){
return null;
});
var sp2__114288 = (function (x){
var or__3548__auto____114240 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____114240))
{return or__3548__auto____114240;
} else
{return p2.call(null,x);
}
});
var sp2__114289 = (function (x,y){
var or__3548__auto____114241 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____114241))
{return or__3548__auto____114241;
} else
{var or__3548__auto____114242 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____114242))
{return or__3548__auto____114242;
} else
{var or__3548__auto____114243 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____114243))
{return or__3548__auto____114243;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__114290 = (function (x,y,z){
var or__3548__auto____114244 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____114244))
{return or__3548__auto____114244;
} else
{var or__3548__auto____114245 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____114245))
{return or__3548__auto____114245;
} else
{var or__3548__auto____114246 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____114246))
{return or__3548__auto____114246;
} else
{var or__3548__auto____114247 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____114247))
{return or__3548__auto____114247;
} else
{var or__3548__auto____114248 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____114248))
{return or__3548__auto____114248;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__114291 = (function() { 
var G__114293__delegate = function (x,y,z,args){
var or__3548__auto____114249 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____114249))
{return or__3548__auto____114249;
} else
{return cljs.core.some.call(null,(function (p1__114152_SHARP_){
var or__3548__auto____114250 = p1.call(null,p1__114152_SHARP_);

if(cljs.core.truth_(or__3548__auto____114250))
{return or__3548__auto____114250;
} else
{return p2.call(null,p1__114152_SHARP_);
}
}),args);
}
};
var G__114293 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114293__delegate.call(this, x, y, z, args);
};
G__114293.cljs$lang$maxFixedArity = 3;
G__114293.cljs$lang$applyTo = (function (arglist__114294){
var x = cljs.core.first(arglist__114294);
var y = cljs.core.first(cljs.core.next(arglist__114294));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114294)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114294)));
return G__114293__delegate.call(this, x, y, z, args);
});
return G__114293;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__114287.call(this);
case  1 :
return sp2__114288.call(this,x);
case  2 :
return sp2__114289.call(this,x,y);
case  3 :
return sp2__114290.call(this,x,y,z);
default:
return sp2__114291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__114291.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__114276 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__114295 = (function (){
return null;
});
var sp3__114296 = (function (x){
var or__3548__auto____114251 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____114251))
{return or__3548__auto____114251;
} else
{var or__3548__auto____114252 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____114252))
{return or__3548__auto____114252;
} else
{return p3.call(null,x);
}
}
});
var sp3__114297 = (function (x,y){
var or__3548__auto____114253 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____114253))
{return or__3548__auto____114253;
} else
{var or__3548__auto____114254 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____114254))
{return or__3548__auto____114254;
} else
{var or__3548__auto____114255 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____114255))
{return or__3548__auto____114255;
} else
{var or__3548__auto____114256 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____114256))
{return or__3548__auto____114256;
} else
{var or__3548__auto____114257 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____114257))
{return or__3548__auto____114257;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__114298 = (function (x,y,z){
var or__3548__auto____114258 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____114258))
{return or__3548__auto____114258;
} else
{var or__3548__auto____114259 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____114259))
{return or__3548__auto____114259;
} else
{var or__3548__auto____114260 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____114260))
{return or__3548__auto____114260;
} else
{var or__3548__auto____114261 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____114261))
{return or__3548__auto____114261;
} else
{var or__3548__auto____114262 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____114262))
{return or__3548__auto____114262;
} else
{var or__3548__auto____114263 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____114263))
{return or__3548__auto____114263;
} else
{var or__3548__auto____114264 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____114264))
{return or__3548__auto____114264;
} else
{var or__3548__auto____114265 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____114265))
{return or__3548__auto____114265;
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
var sp3__114299 = (function() { 
var G__114301__delegate = function (x,y,z,args){
var or__3548__auto____114266 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____114266))
{return or__3548__auto____114266;
} else
{return cljs.core.some.call(null,(function (p1__114153_SHARP_){
var or__3548__auto____114267 = p1.call(null,p1__114153_SHARP_);

if(cljs.core.truth_(or__3548__auto____114267))
{return or__3548__auto____114267;
} else
{var or__3548__auto____114268 = p2.call(null,p1__114153_SHARP_);

if(cljs.core.truth_(or__3548__auto____114268))
{return or__3548__auto____114268;
} else
{return p3.call(null,p1__114153_SHARP_);
}
}
}),args);
}
};
var G__114301 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114301__delegate.call(this, x, y, z, args);
};
G__114301.cljs$lang$maxFixedArity = 3;
G__114301.cljs$lang$applyTo = (function (arglist__114302){
var x = cljs.core.first(arglist__114302);
var y = cljs.core.first(cljs.core.next(arglist__114302));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114302)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114302)));
return G__114301__delegate.call(this, x, y, z, args);
});
return G__114301;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__114295.call(this);
case  1 :
return sp3__114296.call(this,x);
case  2 :
return sp3__114297.call(this,x,y);
case  3 :
return sp3__114298.call(this,x,y,z);
default:
return sp3__114299.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__114299.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__114277 = (function() { 
var G__114303__delegate = function (p1,p2,p3,ps){
var ps__114269 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__114304 = (function (){
return null;
});
var spn__114305 = (function (x){
return cljs.core.some.call(null,(function (p1__114154_SHARP_){
return p1__114154_SHARP_.call(null,x);
}),ps__114269);
});
var spn__114306 = (function (x,y){
return cljs.core.some.call(null,(function (p1__114155_SHARP_){
var or__3548__auto____114270 = p1__114155_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____114270))
{return or__3548__auto____114270;
} else
{return p1__114155_SHARP_.call(null,y);
}
}),ps__114269);
});
var spn__114307 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__114156_SHARP_){
var or__3548__auto____114271 = p1__114156_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____114271))
{return or__3548__auto____114271;
} else
{var or__3548__auto____114272 = p1__114156_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____114272))
{return or__3548__auto____114272;
} else
{return p1__114156_SHARP_.call(null,z);
}
}
}),ps__114269);
});
var spn__114308 = (function() { 
var G__114310__delegate = function (x,y,z,args){
var or__3548__auto____114273 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____114273))
{return or__3548__auto____114273;
} else
{return cljs.core.some.call(null,(function (p1__114157_SHARP_){
return cljs.core.some.call(null,p1__114157_SHARP_,args);
}),ps__114269);
}
};
var G__114310 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114310__delegate.call(this, x, y, z, args);
};
G__114310.cljs$lang$maxFixedArity = 3;
G__114310.cljs$lang$applyTo = (function (arglist__114311){
var x = cljs.core.first(arglist__114311);
var y = cljs.core.first(cljs.core.next(arglist__114311));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114311)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114311)));
return G__114310__delegate.call(this, x, y, z, args);
});
return G__114310;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__114304.call(this);
case  1 :
return spn__114305.call(this,x);
case  2 :
return spn__114306.call(this,x,y);
case  3 :
return spn__114307.call(this,x,y,z);
default:
return spn__114308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__114308.cljs$lang$applyTo;
return spn;
})()
};
var G__114303 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114303__delegate.call(this, p1, p2, p3, ps);
};
G__114303.cljs$lang$maxFixedArity = 3;
G__114303.cljs$lang$applyTo = (function (arglist__114312){
var p1 = cljs.core.first(arglist__114312);
var p2 = cljs.core.first(cljs.core.next(arglist__114312));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114312)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114312)));
return G__114303__delegate.call(this, p1, p2, p3, ps);
});
return G__114303;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__114274.call(this,p1);
case  2 :
return some_fn__114275.call(this,p1,p2);
case  3 :
return some_fn__114276.call(this,p1,p2,p3);
default:
return some_fn__114277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__114277.cljs$lang$applyTo;
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
var map__114325 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114313 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114313))
{var s__114314 = temp__3698__auto____114313;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__114314)),map.call(null,f,cljs.core.rest.call(null,s__114314)));
} else
{return null;
}
})));
});
var map__114326 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__114315 = cljs.core.seq.call(null,c1);
var s2__114316 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____114317 = s1__114315;

if(cljs.core.truth_(and__3546__auto____114317))
{return s2__114316;
} else
{return and__3546__auto____114317;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__114315),cljs.core.first.call(null,s2__114316)),map.call(null,f,cljs.core.rest.call(null,s1__114315),cljs.core.rest.call(null,s2__114316)));
} else
{return null;
}
})));
});
var map__114327 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__114318 = cljs.core.seq.call(null,c1);
var s2__114319 = cljs.core.seq.call(null,c2);
var s3__114320 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____114321 = s1__114318;

if(cljs.core.truth_(and__3546__auto____114321))
{var and__3546__auto____114322 = s2__114319;

if(cljs.core.truth_(and__3546__auto____114322))
{return s3__114320;
} else
{return and__3546__auto____114322;
}
} else
{return and__3546__auto____114321;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__114318),cljs.core.first.call(null,s2__114319),cljs.core.first.call(null,s3__114320)),map.call(null,f,cljs.core.rest.call(null,s1__114318),cljs.core.rest.call(null,s2__114319),cljs.core.rest.call(null,s3__114320)));
} else
{return null;
}
})));
});
var map__114328 = (function() { 
var G__114330__delegate = function (f,c1,c2,c3,colls){
var step__114324 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__114323 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__114323)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__114323),step.call(null,map.call(null,cljs.core.rest,ss__114323)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__114235_SHARP_){
return cljs.core.apply.call(null,f,p1__114235_SHARP_);
}),step__114324.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__114330 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__114330__delegate.call(this, f, c1, c2, c3, colls);
};
G__114330.cljs$lang$maxFixedArity = 4;
G__114330.cljs$lang$applyTo = (function (arglist__114331){
var f = cljs.core.first(arglist__114331);
var c1 = cljs.core.first(cljs.core.next(arglist__114331));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114331)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114331))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114331))));
return G__114330__delegate.call(this, f, c1, c2, c3, colls);
});
return G__114330;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__114325.call(this,f,c1);
case  3 :
return map__114326.call(this,f,c1,c2);
case  4 :
return map__114327.call(this,f,c1,c2,c3);
default:
return map__114328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__114328.cljs$lang$applyTo;
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
{var temp__3698__auto____114332 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114332))
{var s__114333 = temp__3698__auto____114332;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__114333),take.call(null,(n - 1),cljs.core.rest.call(null,s__114333)));
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
var step__114336 = (function (n,coll){
while(true){
var s__114334 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____114335 = (n > 0);

if(cljs.core.truth_(and__3546__auto____114335))
{return s__114334;
} else
{return and__3546__auto____114335;
}
})()))
{{
var G__114337 = (n - 1);
var G__114338 = cljs.core.rest.call(null,s__114334);
n = G__114337;
coll = G__114338;
continue;
}
} else
{return s__114334;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__114336.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__114339 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__114340 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__114339.call(this,n);
case  2 :
return drop_last__114340.call(this,n,s);
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
var s__114342 = cljs.core.seq.call(null,coll);
var lead__114343 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__114343))
{{
var G__114344 = cljs.core.next.call(null,s__114342);
var G__114345 = cljs.core.next.call(null,lead__114343);
s__114342 = G__114344;
lead__114343 = G__114345;
continue;
}
} else
{return s__114342;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__114348 = (function (pred,coll){
while(true){
var s__114346 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____114347 = s__114346;

if(cljs.core.truth_(and__3546__auto____114347))
{return pred.call(null,cljs.core.first.call(null,s__114346));
} else
{return and__3546__auto____114347;
}
})()))
{{
var G__114349 = pred;
var G__114350 = cljs.core.rest.call(null,s__114346);
pred = G__114349;
coll = G__114350;
continue;
}
} else
{return s__114346;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__114348.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114351 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114351))
{var s__114352 = temp__3698__auto____114351;

return cljs.core.concat.call(null,s__114352,cycle.call(null,s__114352));
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
var repeat__114353 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__114354 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__114353.call(this,n);
case  2 :
return repeat__114354.call(this,n,x);
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
var repeatedly__114356 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__114357 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__114356.call(this,n);
case  2 :
return repeatedly__114357.call(this,n,f);
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
var interleave__114363 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__114359 = cljs.core.seq.call(null,c1);
var s2__114360 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____114361 = s1__114359;

if(cljs.core.truth_(and__3546__auto____114361))
{return s2__114360;
} else
{return and__3546__auto____114361;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__114359),cljs.core.cons.call(null,cljs.core.first.call(null,s2__114360),interleave.call(null,cljs.core.rest.call(null,s1__114359),cljs.core.rest.call(null,s2__114360))));
} else
{return null;
}
})));
});
var interleave__114364 = (function() { 
var G__114366__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__114362 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__114362)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__114362),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__114362)));
} else
{return null;
}
})));
};
var G__114366 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__114366__delegate.call(this, c1, c2, colls);
};
G__114366.cljs$lang$maxFixedArity = 2;
G__114366.cljs$lang$applyTo = (function (arglist__114367){
var c1 = cljs.core.first(arglist__114367);
var c2 = cljs.core.first(cljs.core.next(arglist__114367));
var colls = cljs.core.rest(cljs.core.next(arglist__114367));
return G__114366__delegate.call(this, c1, c2, colls);
});
return G__114366;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__114363.call(this,c1,c2);
default:
return interleave__114364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__114364.cljs$lang$applyTo;
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
var cat__114370 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____114368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____114368))
{var coll__114369 = temp__3695__auto____114368;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__114369),cat.call(null,cljs.core.rest.call(null,coll__114369),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__114370.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__114371 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__114372 = (function() { 
var G__114374__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__114374 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__114374__delegate.call(this, f, coll, colls);
};
G__114374.cljs$lang$maxFixedArity = 2;
G__114374.cljs$lang$applyTo = (function (arglist__114375){
var f = cljs.core.first(arglist__114375);
var coll = cljs.core.first(cljs.core.next(arglist__114375));
var colls = cljs.core.rest(cljs.core.next(arglist__114375));
return G__114374__delegate.call(this, f, coll, colls);
});
return G__114374;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__114371.call(this,f,coll);
default:
return mapcat__114372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__114372.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114376 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114376))
{var s__114377 = temp__3698__auto____114376;

var f__114378 = cljs.core.first.call(null,s__114377);
var r__114379 = cljs.core.rest.call(null,s__114377);

if(cljs.core.truth_(pred.call(null,f__114378)))
{return cljs.core.cons.call(null,f__114378,filter.call(null,pred,r__114379));
} else
{return filter.call(null,pred,r__114379);
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
var walk__114381 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__114381.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__114380_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__114380_SHARP_));
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
var partition__114388 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__114389 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114382 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114382))
{var s__114383 = temp__3698__auto____114382;

var p__114384 = cljs.core.take.call(null,n,s__114383);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__114384))))
{return cljs.core.cons.call(null,p__114384,partition.call(null,n,step,cljs.core.drop.call(null,step,s__114383)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__114390 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114385 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114385))
{var s__114386 = temp__3698__auto____114385;

var p__114387 = cljs.core.take.call(null,n,s__114386);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__114387))))
{return cljs.core.cons.call(null,p__114387,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__114386)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__114387,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__114388.call(this,n,step);
case  3 :
return partition__114389.call(this,n,step,pad);
case  4 :
return partition__114390.call(this,n,step,pad,coll);
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
var get_in__114396 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__114397 = (function (m,ks,not_found){
var sentinel__114392 = cljs.core.lookup_sentinel;
var m__114393 = m;
var ks__114394 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__114394))
{var m__114395 = cljs.core.get.call(null,m__114393,cljs.core.first.call(null,ks__114394),sentinel__114392);

if(cljs.core.truth_((sentinel__114392 === m__114395)))
{return not_found;
} else
{{
var G__114399 = sentinel__114392;
var G__114400 = m__114395;
var G__114401 = cljs.core.next.call(null,ks__114394);
sentinel__114392 = G__114399;
m__114393 = G__114400;
ks__114394 = G__114401;
continue;
}
}
} else
{return m__114393;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__114396.call(this,m,ks);
case  3 :
return get_in__114397.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__114402,v){
var vec__114403__114404 = p__114402;
var k__114405 = cljs.core.nth.call(null,vec__114403__114404,0,null);
var ks__114406 = cljs.core.nthnext.call(null,vec__114403__114404,1);

if(cljs.core.truth_(ks__114406))
{return cljs.core.assoc.call(null,m,k__114405,assoc_in.call(null,cljs.core.get.call(null,m,k__114405),ks__114406,v));
} else
{return cljs.core.assoc.call(null,m,k__114405,v);
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
var update_in__delegate = function (m,p__114407,f,args){
var vec__114408__114409 = p__114407;
var k__114410 = cljs.core.nth.call(null,vec__114408__114409,0,null);
var ks__114411 = cljs.core.nthnext.call(null,vec__114408__114409,1);

if(cljs.core.truth_(ks__114411))
{return cljs.core.assoc.call(null,m,k__114410,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__114410),ks__114411,f,args));
} else
{return cljs.core.assoc.call(null,m,k__114410,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__114410),args));
}
};
var update_in = function (m,p__114407,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__114407, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__114412){
var m = cljs.core.first(arglist__114412);
var p__114407 = cljs.core.first(cljs.core.next(arglist__114412));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114412)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114412)));
return update_in__delegate.call(this, m, p__114407, f, args);
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
var this__114413 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__114446 = null;
var G__114446__114447 = (function (coll,k){
var this__114414 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__114446__114448 = (function (coll,k,not_found){
var this__114415 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__114446 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__114446__114447.call(this,coll,k);
case  3 :
return G__114446__114448.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114446;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__114416 = this;
var new_array__114417 = cljs.core.aclone.call(null,this__114416.array);

(new_array__114417[k] = v);
return (new cljs.core.Vector(this__114416.meta,new_array__114417));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__114450 = null;
var G__114450__114451 = (function (tsym114418,k){
var this__114420 = this;
var tsym114418__114421 = this;

var coll__114422 = tsym114418__114421;

return cljs.core._lookup.call(null,coll__114422,k);
});
var G__114450__114452 = (function (tsym114419,k,not_found){
var this__114423 = this;
var tsym114419__114424 = this;

var coll__114425 = tsym114419__114424;

return cljs.core._lookup.call(null,coll__114425,k,not_found);
});
G__114450 = function(tsym114419,k,not_found){
switch(arguments.length){
case  2 :
return G__114450__114451.call(this,tsym114419,k);
case  3 :
return G__114450__114452.call(this,tsym114419,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114450;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__114426 = this;
var new_array__114427 = cljs.core.aclone.call(null,this__114426.array);

new_array__114427.push(o);
return (new cljs.core.Vector(this__114426.meta,new_array__114427));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__114454 = null;
var G__114454__114455 = (function (v,f){
var this__114428 = this;
return cljs.core.ci_reduce.call(null,this__114428.array,f);
});
var G__114454__114456 = (function (v,f,start){
var this__114429 = this;
return cljs.core.ci_reduce.call(null,this__114429.array,f,start);
});
G__114454 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__114454__114455.call(this,v,f);
case  3 :
return G__114454__114456.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114454;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__114430 = this;
if(cljs.core.truth_((this__114430.array.length > 0)))
{var vector_seq__114431 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__114430.array.length)))
{return cljs.core.cons.call(null,(this__114430.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__114431.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__114432 = this;
return this__114432.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__114433 = this;
var count__114434 = this__114433.array.length;

if(cljs.core.truth_((count__114434 > 0)))
{return (this__114433.array[(count__114434 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__114435 = this;
if(cljs.core.truth_((this__114435.array.length > 0)))
{var new_array__114436 = cljs.core.aclone.call(null,this__114435.array);

new_array__114436.pop();
return (new cljs.core.Vector(this__114435.meta,new_array__114436));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__114437 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__114438 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__114439 = this;
return (new cljs.core.Vector(meta,this__114439.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__114440 = this;
return this__114440.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__114458 = null;
var G__114458__114459 = (function (coll,n){
var this__114441 = this;
if(cljs.core.truth_((function (){var and__3546__auto____114442 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____114442))
{return (n < this__114441.array.length);
} else
{return and__3546__auto____114442;
}
})()))
{return (this__114441.array[n]);
} else
{return null;
}
});
var G__114458__114460 = (function (coll,n,not_found){
var this__114443 = this;
if(cljs.core.truth_((function (){var and__3546__auto____114444 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____114444))
{return (n < this__114443.array.length);
} else
{return and__3546__auto____114444;
}
})()))
{return (this__114443.array[n]);
} else
{return not_found;
}
});
G__114458 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__114458__114459.call(this,coll,n);
case  3 :
return G__114458__114460.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114458;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__114445 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__114445.meta);
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
vector.cljs$lang$applyTo = (function (arglist__114462){
var args = cljs.core.seq( arglist__114462 );;
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
var this__114463 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__114491 = null;
var G__114491__114492 = (function (coll,k){
var this__114464 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__114491__114493 = (function (coll,k,not_found){
var this__114465 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__114491 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__114491__114492.call(this,coll,k);
case  3 :
return G__114491__114493.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114491;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__114466 = this;
var v_pos__114467 = (this__114466.start + key);

return (new cljs.core.Subvec(this__114466.meta,cljs.core._assoc.call(null,this__114466.v,v_pos__114467,val),this__114466.start,((this__114466.end > (v_pos__114467 + 1)) ? this__114466.end : (v_pos__114467 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__114495 = null;
var G__114495__114496 = (function (tsym114468,k){
var this__114470 = this;
var tsym114468__114471 = this;

var coll__114472 = tsym114468__114471;

return cljs.core._lookup.call(null,coll__114472,k);
});
var G__114495__114497 = (function (tsym114469,k,not_found){
var this__114473 = this;
var tsym114469__114474 = this;

var coll__114475 = tsym114469__114474;

return cljs.core._lookup.call(null,coll__114475,k,not_found);
});
G__114495 = function(tsym114469,k,not_found){
switch(arguments.length){
case  2 :
return G__114495__114496.call(this,tsym114469,k);
case  3 :
return G__114495__114497.call(this,tsym114469,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114495;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__114476 = this;
return (new cljs.core.Subvec(this__114476.meta,cljs.core._assoc_n.call(null,this__114476.v,this__114476.end,o),this__114476.start,(this__114476.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__114499 = null;
var G__114499__114500 = (function (coll,f){
var this__114477 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__114499__114501 = (function (coll,f,start){
var this__114478 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__114499 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__114499__114500.call(this,coll,f);
case  3 :
return G__114499__114501.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114499;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__114479 = this;
var subvec_seq__114480 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__114479.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__114479.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__114480.call(null,this__114479.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__114481 = this;
return (this__114481.end - this__114481.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__114482 = this;
return cljs.core._nth.call(null,this__114482.v,(this__114482.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__114483 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__114483.start,this__114483.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__114483.meta,this__114483.v,this__114483.start,(this__114483.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__114484 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__114485 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__114486 = this;
return (new cljs.core.Subvec(meta,this__114486.v,this__114486.start,this__114486.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__114487 = this;
return this__114487.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__114503 = null;
var G__114503__114504 = (function (coll,n){
var this__114488 = this;
return cljs.core._nth.call(null,this__114488.v,(this__114488.start + n));
});
var G__114503__114505 = (function (coll,n,not_found){
var this__114489 = this;
return cljs.core._nth.call(null,this__114489.v,(this__114489.start + n),not_found);
});
G__114503 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__114503__114504.call(this,coll,n);
case  3 :
return G__114503__114505.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114503;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__114490 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__114490.meta);
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
var subvec__114507 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__114508 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__114507.call(this,v,start);
case  3 :
return subvec__114508.call(this,v,start,end);
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
var this__114510 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__114511 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__114512 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__114513 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__114513.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__114514 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__114515 = this;
return cljs.core._first.call(null,this__114515.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__114516 = this;
var temp__3695__auto____114517 = cljs.core.next.call(null,this__114516.front);

if(cljs.core.truth_(temp__3695__auto____114517))
{var f1__114518 = temp__3695__auto____114517;

return (new cljs.core.PersistentQueueSeq(this__114516.meta,f1__114518,this__114516.rear));
} else
{if(cljs.core.truth_((this__114516.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__114516.meta,this__114516.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__114519 = this;
return this__114519.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__114520 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__114520.front,this__114520.rear));
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
var this__114521 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__114522 = this;
if(cljs.core.truth_(this__114522.front))
{return (new cljs.core.PersistentQueue(this__114522.meta,(this__114522.count + 1),this__114522.front,cljs.core.conj.call(null,(function (){var or__3548__auto____114523 = this__114522.rear;

if(cljs.core.truth_(or__3548__auto____114523))
{return or__3548__auto____114523;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__114522.meta,(this__114522.count + 1),cljs.core.conj.call(null,this__114522.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__114524 = this;
var rear__114525 = cljs.core.seq.call(null,this__114524.rear);

if(cljs.core.truth_((function (){var or__3548__auto____114526 = this__114524.front;

if(cljs.core.truth_(or__3548__auto____114526))
{return or__3548__auto____114526;
} else
{return rear__114525;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__114524.front,cljs.core.seq.call(null,rear__114525)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__114527 = this;
return this__114527.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__114528 = this;
return cljs.core._first.call(null,this__114528.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__114529 = this;
if(cljs.core.truth_(this__114529.front))
{var temp__3695__auto____114530 = cljs.core.next.call(null,this__114529.front);

if(cljs.core.truth_(temp__3695__auto____114530))
{var f1__114531 = temp__3695__auto____114530;

return (new cljs.core.PersistentQueue(this__114529.meta,(this__114529.count - 1),f1__114531,this__114529.rear));
} else
{return (new cljs.core.PersistentQueue(this__114529.meta,(this__114529.count - 1),cljs.core.seq.call(null,this__114529.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__114532 = this;
return cljs.core.first.call(null,this__114532.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__114533 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__114534 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__114535 = this;
return (new cljs.core.PersistentQueue(meta,this__114535.count,this__114535.front,this__114535.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__114536 = this;
return this__114536.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__114537 = this;
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
var this__114538 = this;
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
var len__114539 = array.length;

var i__114540 = 0;

while(true){
if(cljs.core.truth_((i__114540 < len__114539)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__114540]))))
{return i__114540;
} else
{{
var G__114541 = (i__114540 + incr);
i__114540 = G__114541;
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
var obj_map_contains_key_QMARK___114543 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___114544 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____114542 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____114542))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____114542;
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
return obj_map_contains_key_QMARK___114543.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___114544.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__114547 = cljs.core.hash.call(null,a);
var b__114548 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__114547 < b__114548)))
{return -1;
} else
{if(cljs.core.truth_((a__114547 > b__114548)))
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
var this__114549 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__114576 = null;
var G__114576__114577 = (function (coll,k){
var this__114550 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__114576__114578 = (function (coll,k,not_found){
var this__114551 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__114551.strobj,(this__114551.strobj[k]),not_found);
});
G__114576 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__114576__114577.call(this,coll,k);
case  3 :
return G__114576__114578.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114576;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__114552 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__114553 = goog.object.clone.call(null,this__114552.strobj);
var overwrite_QMARK___114554 = new_strobj__114553.hasOwnProperty(k);

(new_strobj__114553[k] = v);
if(cljs.core.truth_(overwrite_QMARK___114554))
{return (new cljs.core.ObjMap(this__114552.meta,this__114552.keys,new_strobj__114553));
} else
{var new_keys__114555 = cljs.core.aclone.call(null,this__114552.keys);

new_keys__114555.push(k);
return (new cljs.core.ObjMap(this__114552.meta,new_keys__114555,new_strobj__114553));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__114552.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__114556 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__114556.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__114580 = null;
var G__114580__114581 = (function (tsym114557,k){
var this__114559 = this;
var tsym114557__114560 = this;

var coll__114561 = tsym114557__114560;

return cljs.core._lookup.call(null,coll__114561,k);
});
var G__114580__114582 = (function (tsym114558,k,not_found){
var this__114562 = this;
var tsym114558__114563 = this;

var coll__114564 = tsym114558__114563;

return cljs.core._lookup.call(null,coll__114564,k,not_found);
});
G__114580 = function(tsym114558,k,not_found){
switch(arguments.length){
case  2 :
return G__114580__114581.call(this,tsym114558,k);
case  3 :
return G__114580__114582.call(this,tsym114558,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114580;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__114565 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__114566 = this;
if(cljs.core.truth_((this__114566.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__114546_SHARP_){
return cljs.core.vector.call(null,p1__114546_SHARP_,(this__114566.strobj[p1__114546_SHARP_]));
}),this__114566.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__114567 = this;
return this__114567.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__114568 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__114569 = this;
return (new cljs.core.ObjMap(meta,this__114569.keys,this__114569.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__114570 = this;
return this__114570.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__114571 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__114571.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__114572 = this;
if(cljs.core.truth_((function (){var and__3546__auto____114573 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____114573))
{return this__114572.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____114573;
}
})()))
{var new_keys__114574 = cljs.core.aclone.call(null,this__114572.keys);
var new_strobj__114575 = goog.object.clone.call(null,this__114572.strobj);

new_keys__114574.splice(cljs.core.scan_array.call(null,1,k,new_keys__114574),1);
cljs.core.js_delete.call(null,new_strobj__114575,k);
return (new cljs.core.ObjMap(this__114572.meta,new_keys__114574,new_strobj__114575));
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
var this__114585 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__114623 = null;
var G__114623__114624 = (function (coll,k){
var this__114586 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__114623__114625 = (function (coll,k,not_found){
var this__114587 = this;
var bucket__114588 = (this__114587.hashobj[cljs.core.hash.call(null,k)]);
var i__114589 = (cljs.core.truth_(bucket__114588)?cljs.core.scan_array.call(null,2,k,bucket__114588):null);

if(cljs.core.truth_(i__114589))
{return (bucket__114588[(i__114589 + 1)]);
} else
{return not_found;
}
});
G__114623 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__114623__114624.call(this,coll,k);
case  3 :
return G__114623__114625.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114623;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__114590 = this;
var h__114591 = cljs.core.hash.call(null,k);
var bucket__114592 = (this__114590.hashobj[h__114591]);

if(cljs.core.truth_(bucket__114592))
{var new_bucket__114593 = cljs.core.aclone.call(null,bucket__114592);
var new_hashobj__114594 = goog.object.clone.call(null,this__114590.hashobj);

(new_hashobj__114594[h__114591] = new_bucket__114593);
var temp__3695__auto____114595 = cljs.core.scan_array.call(null,2,k,new_bucket__114593);

if(cljs.core.truth_(temp__3695__auto____114595))
{var i__114596 = temp__3695__auto____114595;

(new_bucket__114593[(i__114596 + 1)] = v);
return (new cljs.core.HashMap(this__114590.meta,this__114590.count,new_hashobj__114594));
} else
{new_bucket__114593.push(k,v);
return (new cljs.core.HashMap(this__114590.meta,(this__114590.count + 1),new_hashobj__114594));
}
} else
{var new_hashobj__114597 = goog.object.clone.call(null,this__114590.hashobj);

(new_hashobj__114597[h__114591] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__114590.meta,(this__114590.count + 1),new_hashobj__114597));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__114598 = this;
var bucket__114599 = (this__114598.hashobj[cljs.core.hash.call(null,k)]);
var i__114600 = (cljs.core.truth_(bucket__114599)?cljs.core.scan_array.call(null,2,k,bucket__114599):null);

if(cljs.core.truth_(i__114600))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__114627 = null;
var G__114627__114628 = (function (tsym114601,k){
var this__114603 = this;
var tsym114601__114604 = this;

var coll__114605 = tsym114601__114604;

return cljs.core._lookup.call(null,coll__114605,k);
});
var G__114627__114629 = (function (tsym114602,k,not_found){
var this__114606 = this;
var tsym114602__114607 = this;

var coll__114608 = tsym114602__114607;

return cljs.core._lookup.call(null,coll__114608,k,not_found);
});
G__114627 = function(tsym114602,k,not_found){
switch(arguments.length){
case  2 :
return G__114627__114628.call(this,tsym114602,k);
case  3 :
return G__114627__114629.call(this,tsym114602,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114627;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__114609 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__114610 = this;
if(cljs.core.truth_((this__114610.count > 0)))
{var hashes__114611 = cljs.core.js_keys.call(null,this__114610.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__114584_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__114610.hashobj[p1__114584_SHARP_])));
}),hashes__114611);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__114612 = this;
return this__114612.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__114613 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__114614 = this;
return (new cljs.core.HashMap(meta,this__114614.count,this__114614.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__114615 = this;
return this__114615.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__114616 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__114616.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__114617 = this;
var h__114618 = cljs.core.hash.call(null,k);
var bucket__114619 = (this__114617.hashobj[h__114618]);
var i__114620 = (cljs.core.truth_(bucket__114619)?cljs.core.scan_array.call(null,2,k,bucket__114619):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__114620)))
{return coll;
} else
{var new_hashobj__114621 = goog.object.clone.call(null,this__114617.hashobj);

if(cljs.core.truth_((3 > bucket__114619.length)))
{cljs.core.js_delete.call(null,new_hashobj__114621,h__114618);
} else
{var new_bucket__114622 = cljs.core.aclone.call(null,bucket__114619);

new_bucket__114622.splice(i__114620,2);
(new_hashobj__114621[h__114618] = new_bucket__114622);
}
return (new cljs.core.HashMap(this__114617.meta,(this__114617.count - 1),new_hashobj__114621));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__114631 = ks.length;

var i__114632 = 0;
var out__114633 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__114632 < len__114631)))
{{
var G__114634 = (i__114632 + 1);
var G__114635 = cljs.core.assoc.call(null,out__114633,(ks[i__114632]),(vs[i__114632]));
i__114632 = G__114634;
out__114633 = G__114635;
continue;
}
} else
{return out__114633;
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
var in$__114636 = cljs.core.seq.call(null,keyvals);
var out__114637 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__114636))
{{
var G__114638 = cljs.core.nnext.call(null,in$__114636);
var G__114639 = cljs.core.assoc.call(null,out__114637,cljs.core.first.call(null,in$__114636),cljs.core.second.call(null,in$__114636));
in$__114636 = G__114638;
out__114637 = G__114639;
continue;
}
} else
{return out__114637;
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
hash_map.cljs$lang$applyTo = (function (arglist__114640){
var keyvals = cljs.core.seq( arglist__114640 );;
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
{return cljs.core.reduce.call(null,(function (p1__114641_SHARP_,p2__114642_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____114643 = p1__114641_SHARP_;

if(cljs.core.truth_(or__3548__auto____114643))
{return or__3548__auto____114643;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__114642_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__114644){
var maps = cljs.core.seq( arglist__114644 );;
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
{var merge_entry__114647 = (function (m,e){
var k__114645 = cljs.core.first.call(null,e);
var v__114646 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__114645)))
{return cljs.core.assoc.call(null,m,k__114645,f.call(null,cljs.core.get.call(null,m,k__114645),v__114646));
} else
{return cljs.core.assoc.call(null,m,k__114645,v__114646);
}
});
var merge2__114649 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__114647,(function (){var or__3548__auto____114648 = m1;

if(cljs.core.truth_(or__3548__auto____114648))
{return or__3548__auto____114648;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__114649,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__114650){
var f = cljs.core.first(arglist__114650);
var maps = cljs.core.rest(arglist__114650);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__114652 = cljs.core.ObjMap.fromObject([],{});
var keys__114653 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__114653))
{var key__114654 = cljs.core.first.call(null,keys__114653);
var entry__114655 = cljs.core.get.call(null,map,key__114654,"\uFDD0'user/not-found");

{
var G__114656 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__114655,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__114652,key__114654,entry__114655):ret__114652);
var G__114657 = cljs.core.next.call(null,keys__114653);
ret__114652 = G__114656;
keys__114653 = G__114657;
continue;
}
} else
{return ret__114652;
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
var this__114658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__114679 = null;
var G__114679__114680 = (function (coll,v){
var this__114659 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__114679__114681 = (function (coll,v,not_found){
var this__114660 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__114660.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__114679 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__114679__114680.call(this,coll,v);
case  3 :
return G__114679__114681.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114679;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__114683 = null;
var G__114683__114684 = (function (tsym114661,k){
var this__114663 = this;
var tsym114661__114664 = this;

var coll__114665 = tsym114661__114664;

return cljs.core._lookup.call(null,coll__114665,k);
});
var G__114683__114685 = (function (tsym114662,k,not_found){
var this__114666 = this;
var tsym114662__114667 = this;

var coll__114668 = tsym114662__114667;

return cljs.core._lookup.call(null,coll__114668,k,not_found);
});
G__114683 = function(tsym114662,k,not_found){
switch(arguments.length){
case  2 :
return G__114683__114684.call(this,tsym114662,k);
case  3 :
return G__114683__114685.call(this,tsym114662,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114683;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__114669 = this;
return (new cljs.core.Set(this__114669.meta,cljs.core.assoc.call(null,this__114669.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__114670 = this;
return cljs.core.keys.call(null,this__114670.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__114671 = this;
return (new cljs.core.Set(this__114671.meta,cljs.core.dissoc.call(null,this__114671.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__114672 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__114673 = this;
var and__3546__auto____114674 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____114674))
{var and__3546__auto____114675 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____114675))
{return cljs.core.every_QMARK_.call(null,(function (p1__114651_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__114651_SHARP_);
}),other);
} else
{return and__3546__auto____114675;
}
} else
{return and__3546__auto____114674;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__114676 = this;
return (new cljs.core.Set(meta,this__114676.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__114677 = this;
return this__114677.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__114678 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__114678.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__114688 = cljs.core.seq.call(null,coll);
var out__114689 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__114688))))
{{
var G__114690 = cljs.core.rest.call(null,in$__114688);
var G__114691 = cljs.core.conj.call(null,out__114689,cljs.core.first.call(null,in$__114688));
in$__114688 = G__114690;
out__114689 = G__114691;
continue;
}
} else
{return out__114689;
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
{var n__114692 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____114693 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____114693))
{var e__114694 = temp__3695__auto____114693;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__114694));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__114692,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__114687_SHARP_){
var temp__3695__auto____114695 = cljs.core.find.call(null,smap,p1__114687_SHARP_);

if(cljs.core.truth_(temp__3695__auto____114695))
{var e__114696 = temp__3695__auto____114695;

return cljs.core.second.call(null,e__114696);
} else
{return p1__114687_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__114704 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__114697,seen){
while(true){
var vec__114698__114699 = p__114697;
var f__114700 = cljs.core.nth.call(null,vec__114698__114699,0,null);
var xs__114701 = vec__114698__114699;

var temp__3698__auto____114702 = cljs.core.seq.call(null,xs__114701);

if(cljs.core.truth_(temp__3698__auto____114702))
{var s__114703 = temp__3698__auto____114702;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__114700)))
{{
var G__114705 = cljs.core.rest.call(null,s__114703);
var G__114706 = seen;
p__114697 = G__114705;
seen = G__114706;
continue;
}
} else
{return cljs.core.cons.call(null,f__114700,step.call(null,cljs.core.rest.call(null,s__114703),cljs.core.conj.call(null,seen,f__114700)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__114704.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__114707 = cljs.core.Vector.fromArray([]);
var s__114708 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__114708)))
{{
var G__114709 = cljs.core.conj.call(null,ret__114707,cljs.core.first.call(null,s__114708));
var G__114710 = cljs.core.next.call(null,s__114708);
ret__114707 = G__114709;
s__114708 = G__114710;
continue;
}
} else
{return cljs.core.seq.call(null,ret__114707);
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
{if(cljs.core.truth_((function (){var or__3548__auto____114711 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____114711))
{return or__3548__auto____114711;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__114712 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__114712 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__114712 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____114713 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____114713))
{return or__3548__auto____114713;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__114714 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__114714 > -1)))
{return cljs.core.subs.call(null,x,2,i__114714);
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
var map__114717 = cljs.core.ObjMap.fromObject([],{});
var ks__114718 = cljs.core.seq.call(null,keys);
var vs__114719 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____114720 = ks__114718;

if(cljs.core.truth_(and__3546__auto____114720))
{return vs__114719;
} else
{return and__3546__auto____114720;
}
})()))
{{
var G__114721 = cljs.core.assoc.call(null,map__114717,cljs.core.first.call(null,ks__114718),cljs.core.first.call(null,vs__114719));
var G__114722 = cljs.core.next.call(null,ks__114718);
var G__114723 = cljs.core.next.call(null,vs__114719);
map__114717 = G__114721;
ks__114718 = G__114722;
vs__114719 = G__114723;
continue;
}
} else
{return map__114717;
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
var max_key__114726 = (function (k,x){
return x;
});
var max_key__114727 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__114728 = (function() { 
var G__114730__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__114715_SHARP_,p2__114716_SHARP_){
return max_key.call(null,k,p1__114715_SHARP_,p2__114716_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__114730 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114730__delegate.call(this, k, x, y, more);
};
G__114730.cljs$lang$maxFixedArity = 3;
G__114730.cljs$lang$applyTo = (function (arglist__114731){
var k = cljs.core.first(arglist__114731);
var x = cljs.core.first(cljs.core.next(arglist__114731));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114731)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114731)));
return G__114730__delegate.call(this, k, x, y, more);
});
return G__114730;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__114726.call(this,k,x);
case  3 :
return max_key__114727.call(this,k,x,y);
default:
return max_key__114728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__114728.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__114732 = (function (k,x){
return x;
});
var min_key__114733 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__114734 = (function() { 
var G__114736__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__114724_SHARP_,p2__114725_SHARP_){
return min_key.call(null,k,p1__114724_SHARP_,p2__114725_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__114736 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114736__delegate.call(this, k, x, y, more);
};
G__114736.cljs$lang$maxFixedArity = 3;
G__114736.cljs$lang$applyTo = (function (arglist__114737){
var k = cljs.core.first(arglist__114737);
var x = cljs.core.first(cljs.core.next(arglist__114737));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114737)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114737)));
return G__114736__delegate.call(this, k, x, y, more);
});
return G__114736;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__114732.call(this,k,x);
case  3 :
return min_key__114733.call(this,k,x,y);
default:
return min_key__114734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__114734.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__114740 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__114741 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114738 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114738))
{var s__114739 = temp__3698__auto____114738;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__114739),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__114739)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__114740.call(this,n,step);
case  3 :
return partition_all__114741.call(this,n,step,coll);
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
var temp__3698__auto____114743 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114743))
{var s__114744 = temp__3698__auto____114743;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__114744))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__114744),take_while.call(null,pred,cljs.core.rest.call(null,s__114744)));
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
var this__114745 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__114746 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__114762 = null;
var G__114762__114763 = (function (rng,f){
var this__114747 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__114762__114764 = (function (rng,f,s){
var this__114748 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__114762 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__114762__114763.call(this,rng,f);
case  3 :
return G__114762__114764.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114762;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__114749 = this;
var comp__114750 = (cljs.core.truth_((this__114749.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__114750.call(null,this__114749.start,this__114749.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__114751 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__114751.end - this__114751.start) / this__114751.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__114752 = this;
return this__114752.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__114753 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__114753.meta,(this__114753.start + this__114753.step),this__114753.end,this__114753.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__114754 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__114755 = this;
return (new cljs.core.Range(meta,this__114755.start,this__114755.end,this__114755.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__114756 = this;
return this__114756.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__114766 = null;
var G__114766__114767 = (function (rng,n){
var this__114757 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__114757.start + (n * this__114757.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____114758 = (this__114757.start > this__114757.end);

if(cljs.core.truth_(and__3546__auto____114758))
{return cljs.core._EQ_.call(null,this__114757.step,0);
} else
{return and__3546__auto____114758;
}
})()))
{return this__114757.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__114766__114768 = (function (rng,n,not_found){
var this__114759 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__114759.start + (n * this__114759.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____114760 = (this__114759.start > this__114759.end);

if(cljs.core.truth_(and__3546__auto____114760))
{return cljs.core._EQ_.call(null,this__114759.step,0);
} else
{return and__3546__auto____114760;
}
})()))
{return this__114759.start;
} else
{return not_found;
}
}
});
G__114766 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__114766__114767.call(this,rng,n);
case  3 :
return G__114766__114768.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__114766;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__114761 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__114761.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__114770 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__114771 = (function (end){
return range.call(null,0,end,1);
});
var range__114772 = (function (start,end){
return range.call(null,start,end,1);
});
var range__114773 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__114770.call(this);
case  1 :
return range__114771.call(this,start);
case  2 :
return range__114772.call(this,start,end);
case  3 :
return range__114773.call(this,start,end,step);
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
var temp__3698__auto____114775 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114775))
{var s__114776 = temp__3698__auto____114775;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__114776),take_nth.call(null,n,cljs.core.drop.call(null,n,s__114776)));
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
var temp__3698__auto____114778 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114778))
{var s__114779 = temp__3698__auto____114778;

var fst__114780 = cljs.core.first.call(null,s__114779);
var fv__114781 = f.call(null,fst__114780);
var run__114782 = cljs.core.cons.call(null,fst__114780,cljs.core.take_while.call(null,(function (p1__114777_SHARP_){
return cljs.core._EQ_.call(null,fv__114781,f.call(null,p1__114777_SHARP_));
}),cljs.core.next.call(null,s__114779)));

return cljs.core.cons.call(null,run__114782,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__114782),s__114779))));
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
var reductions__114797 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____114793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____114793))
{var s__114794 = temp__3695__auto____114793;

return reductions.call(null,f,cljs.core.first.call(null,s__114794),cljs.core.rest.call(null,s__114794));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__114798 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____114795 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____114795))
{var s__114796 = temp__3698__auto____114795;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__114796)),cljs.core.rest.call(null,s__114796));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__114797.call(this,f,init);
case  3 :
return reductions__114798.call(this,f,init,coll);
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
var juxt__114801 = (function (f){
return (function() {
var G__114806 = null;
var G__114806__114807 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__114806__114808 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__114806__114809 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__114806__114810 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__114806__114811 = (function() { 
var G__114813__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__114813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114813__delegate.call(this, x, y, z, args);
};
G__114813.cljs$lang$maxFixedArity = 3;
G__114813.cljs$lang$applyTo = (function (arglist__114814){
var x = cljs.core.first(arglist__114814);
var y = cljs.core.first(cljs.core.next(arglist__114814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114814)));
return G__114813__delegate.call(this, x, y, z, args);
});
return G__114813;
})()
;
G__114806 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__114806__114807.call(this);
case  1 :
return G__114806__114808.call(this,x);
case  2 :
return G__114806__114809.call(this,x,y);
case  3 :
return G__114806__114810.call(this,x,y,z);
default:
return G__114806__114811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114806.cljs$lang$maxFixedArity = 3;
G__114806.cljs$lang$applyTo = G__114806__114811.cljs$lang$applyTo;
return G__114806;
})()
});
var juxt__114802 = (function (f,g){
return (function() {
var G__114815 = null;
var G__114815__114816 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__114815__114817 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__114815__114818 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__114815__114819 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__114815__114820 = (function() { 
var G__114822__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__114822 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114822__delegate.call(this, x, y, z, args);
};
G__114822.cljs$lang$maxFixedArity = 3;
G__114822.cljs$lang$applyTo = (function (arglist__114823){
var x = cljs.core.first(arglist__114823);
var y = cljs.core.first(cljs.core.next(arglist__114823));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114823)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114823)));
return G__114822__delegate.call(this, x, y, z, args);
});
return G__114822;
})()
;
G__114815 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__114815__114816.call(this);
case  1 :
return G__114815__114817.call(this,x);
case  2 :
return G__114815__114818.call(this,x,y);
case  3 :
return G__114815__114819.call(this,x,y,z);
default:
return G__114815__114820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114815.cljs$lang$maxFixedArity = 3;
G__114815.cljs$lang$applyTo = G__114815__114820.cljs$lang$applyTo;
return G__114815;
})()
});
var juxt__114803 = (function (f,g,h){
return (function() {
var G__114824 = null;
var G__114824__114825 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__114824__114826 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__114824__114827 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__114824__114828 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__114824__114829 = (function() { 
var G__114831__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__114831 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114831__delegate.call(this, x, y, z, args);
};
G__114831.cljs$lang$maxFixedArity = 3;
G__114831.cljs$lang$applyTo = (function (arglist__114832){
var x = cljs.core.first(arglist__114832);
var y = cljs.core.first(cljs.core.next(arglist__114832));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114832)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114832)));
return G__114831__delegate.call(this, x, y, z, args);
});
return G__114831;
})()
;
G__114824 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__114824__114825.call(this);
case  1 :
return G__114824__114826.call(this,x);
case  2 :
return G__114824__114827.call(this,x,y);
case  3 :
return G__114824__114828.call(this,x,y,z);
default:
return G__114824__114829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114824.cljs$lang$maxFixedArity = 3;
G__114824.cljs$lang$applyTo = G__114824__114829.cljs$lang$applyTo;
return G__114824;
})()
});
var juxt__114804 = (function() { 
var G__114833__delegate = function (f,g,h,fs){
var fs__114800 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__114834 = null;
var G__114834__114835 = (function (){
return cljs.core.reduce.call(null,(function (p1__114783_SHARP_,p2__114784_SHARP_){
return cljs.core.conj.call(null,p1__114783_SHARP_,p2__114784_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__114800);
});
var G__114834__114836 = (function (x){
return cljs.core.reduce.call(null,(function (p1__114785_SHARP_,p2__114786_SHARP_){
return cljs.core.conj.call(null,p1__114785_SHARP_,p2__114786_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__114800);
});
var G__114834__114837 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__114787_SHARP_,p2__114788_SHARP_){
return cljs.core.conj.call(null,p1__114787_SHARP_,p2__114788_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__114800);
});
var G__114834__114838 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__114789_SHARP_,p2__114790_SHARP_){
return cljs.core.conj.call(null,p1__114789_SHARP_,p2__114790_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__114800);
});
var G__114834__114839 = (function() { 
var G__114841__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__114791_SHARP_,p2__114792_SHARP_){
return cljs.core.conj.call(null,p1__114791_SHARP_,cljs.core.apply.call(null,p2__114792_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__114800);
};
var G__114841 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114841__delegate.call(this, x, y, z, args);
};
G__114841.cljs$lang$maxFixedArity = 3;
G__114841.cljs$lang$applyTo = (function (arglist__114842){
var x = cljs.core.first(arglist__114842);
var y = cljs.core.first(cljs.core.next(arglist__114842));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114842)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114842)));
return G__114841__delegate.call(this, x, y, z, args);
});
return G__114841;
})()
;
G__114834 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__114834__114835.call(this);
case  1 :
return G__114834__114836.call(this,x);
case  2 :
return G__114834__114837.call(this,x,y);
case  3 :
return G__114834__114838.call(this,x,y,z);
default:
return G__114834__114839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__114834.cljs$lang$maxFixedArity = 3;
G__114834.cljs$lang$applyTo = G__114834__114839.cljs$lang$applyTo;
return G__114834;
})()
};
var G__114833 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__114833__delegate.call(this, f, g, h, fs);
};
G__114833.cljs$lang$maxFixedArity = 3;
G__114833.cljs$lang$applyTo = (function (arglist__114843){
var f = cljs.core.first(arglist__114843);
var g = cljs.core.first(cljs.core.next(arglist__114843));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114843)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__114843)));
return G__114833__delegate.call(this, f, g, h, fs);
});
return G__114833;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__114801.call(this,f);
case  2 :
return juxt__114802.call(this,f,g);
case  3 :
return juxt__114803.call(this,f,g,h);
default:
return juxt__114804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__114804.cljs$lang$applyTo;
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
var dorun__114845 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__114848 = cljs.core.next.call(null,coll);
coll = G__114848;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__114846 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____114844 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____114844))
{return (n > 0);
} else
{return and__3546__auto____114844;
}
})()))
{{
var G__114849 = (n - 1);
var G__114850 = cljs.core.next.call(null,coll);
n = G__114849;
coll = G__114850;
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
return dorun__114845.call(this,n);
case  2 :
return dorun__114846.call(this,n,coll);
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
var doall__114851 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__114852 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__114851.call(this,n);
case  2 :
return doall__114852.call(this,n,coll);
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
var matches__114854 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__114854),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__114854),1)))
{return cljs.core.first.call(null,matches__114854);
} else
{return cljs.core.vec.call(null,matches__114854);
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
var matches__114855 = re.exec(s);

if(cljs.core.truth_((matches__114855 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__114855),1)))
{return cljs.core.first.call(null,matches__114855);
} else
{return cljs.core.vec.call(null,matches__114855);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__114856 = cljs.core.re_find.call(null,re,s);
var match_idx__114857 = s.search(re);
var match_str__114858 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__114856))?cljs.core.first.call(null,match_data__114856):match_data__114856);
var post_match__114859 = cljs.core.subs.call(null,s,(match_idx__114857 + cljs.core.count.call(null,match_str__114858)));

if(cljs.core.truth_(match_data__114856))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__114856,re_seq.call(null,re,post_match__114859));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__114861__114862 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___114863 = cljs.core.nth.call(null,vec__114861__114862,0,null);
var flags__114864 = cljs.core.nth.call(null,vec__114861__114862,1,null);
var pattern__114865 = cljs.core.nth.call(null,vec__114861__114862,2,null);

return (new RegExp(pattern__114865,flags__114864));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__114860_SHARP_){
return print_one.call(null,p1__114860_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____114866 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____114866))
{var and__3546__auto____114870 = (function (){var x__450__auto____114867 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____114868 = x__450__auto____114867;

if(cljs.core.truth_(and__3546__auto____114868))
{var and__3546__auto____114869 = x__450__auto____114867.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____114869))
{return cljs.core.not.call(null,x__450__auto____114867.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____114869;
}
} else
{return and__3546__auto____114868;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____114867);
}
})();

if(cljs.core.truth_(and__3546__auto____114870))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____114870;
}
} else
{return and__3546__auto____114866;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____114871 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____114872 = x__450__auto____114871;

if(cljs.core.truth_(and__3546__auto____114872))
{var and__3546__auto____114873 = x__450__auto____114871.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____114873))
{return cljs.core.not.call(null,x__450__auto____114871.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____114873;
}
} else
{return and__3546__auto____114872;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____114871);
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
var first_obj__114874 = cljs.core.first.call(null,objs);
var sb__114875 = (new goog.string.StringBuffer());

var G__114876__114877 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__114876__114877))
{var obj__114878 = cljs.core.first.call(null,G__114876__114877);
var G__114876__114879 = G__114876__114877;

while(true){
if(cljs.core.truth_((obj__114878 === first_obj__114874)))
{} else
{sb__114875.append(" ");
}
var G__114880__114881 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__114878,opts));

if(cljs.core.truth_(G__114880__114881))
{var string__114882 = cljs.core.first.call(null,G__114880__114881);
var G__114880__114883 = G__114880__114881;

while(true){
sb__114875.append(string__114882);
var temp__3698__auto____114884 = cljs.core.next.call(null,G__114880__114883);

if(cljs.core.truth_(temp__3698__auto____114884))
{var G__114880__114885 = temp__3698__auto____114884;

{
var G__114888 = cljs.core.first.call(null,G__114880__114885);
var G__114889 = G__114880__114885;
string__114882 = G__114888;
G__114880__114883 = G__114889;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____114886 = cljs.core.next.call(null,G__114876__114879);

if(cljs.core.truth_(temp__3698__auto____114886))
{var G__114876__114887 = temp__3698__auto____114886;

{
var G__114890 = cljs.core.first.call(null,G__114876__114887);
var G__114891 = G__114876__114887;
obj__114878 = G__114890;
G__114876__114879 = G__114891;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__114875);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__114892 = cljs.core.first.call(null,objs);

var G__114893__114894 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__114893__114894))
{var obj__114895 = cljs.core.first.call(null,G__114893__114894);
var G__114893__114896 = G__114893__114894;

while(true){
if(cljs.core.truth_((obj__114895 === first_obj__114892)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__114897__114898 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__114895,opts));

if(cljs.core.truth_(G__114897__114898))
{var string__114899 = cljs.core.first.call(null,G__114897__114898);
var G__114897__114900 = G__114897__114898;

while(true){
cljs.core.string_print.call(null,string__114899);
var temp__3698__auto____114901 = cljs.core.next.call(null,G__114897__114900);

if(cljs.core.truth_(temp__3698__auto____114901))
{var G__114897__114902 = temp__3698__auto____114901;

{
var G__114905 = cljs.core.first.call(null,G__114897__114902);
var G__114906 = G__114897__114902;
string__114899 = G__114905;
G__114897__114900 = G__114906;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____114903 = cljs.core.next.call(null,G__114893__114896);

if(cljs.core.truth_(temp__3698__auto____114903))
{var G__114893__114904 = temp__3698__auto____114903;

{
var G__114907 = cljs.core.first.call(null,G__114893__114904);
var G__114908 = G__114893__114904;
obj__114895 = G__114907;
G__114893__114896 = G__114908;
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
pr_str.cljs$lang$applyTo = (function (arglist__114909){
var objs = cljs.core.seq( arglist__114909 );;
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
pr.cljs$lang$applyTo = (function (arglist__114910){
var objs = cljs.core.seq( arglist__114910 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__114911){
var objs = cljs.core.seq( arglist__114911 );;
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
println.cljs$lang$applyTo = (function (arglist__114912){
var objs = cljs.core.seq( arglist__114912 );;
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
prn.cljs$lang$applyTo = (function (arglist__114913){
var objs = cljs.core.seq( arglist__114913 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__114914 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__114914,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____114915 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____114915))
{var nspc__114916 = temp__3698__auto____114915;

return cljs.core.str.call(null,nspc__114916,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____114917 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____114917))
{var nspc__114918 = temp__3698__auto____114917;

return cljs.core.str.call(null,nspc__114918,"\/");
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
var pr_pair__114919 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__114919,"{",", ","}",opts,coll);
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
var this__114920 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__114921 = this;
var G__114922__114923 = cljs.core.seq.call(null,this__114921.watches);

if(cljs.core.truth_(G__114922__114923))
{var G__114925__114927 = cljs.core.first.call(null,G__114922__114923);
var vec__114926__114928 = G__114925__114927;
var key__114929 = cljs.core.nth.call(null,vec__114926__114928,0,null);
var f__114930 = cljs.core.nth.call(null,vec__114926__114928,1,null);
var G__114922__114931 = G__114922__114923;

var G__114925__114932 = G__114925__114927;
var G__114922__114933 = G__114922__114931;

while(true){
var vec__114934__114935 = G__114925__114932;
var key__114936 = cljs.core.nth.call(null,vec__114934__114935,0,null);
var f__114937 = cljs.core.nth.call(null,vec__114934__114935,1,null);
var G__114922__114938 = G__114922__114933;

f__114937.call(null,key__114936,this$,oldval,newval);
var temp__3698__auto____114939 = cljs.core.next.call(null,G__114922__114938);

if(cljs.core.truth_(temp__3698__auto____114939))
{var G__114922__114940 = temp__3698__auto____114939;

{
var G__114947 = cljs.core.first.call(null,G__114922__114940);
var G__114948 = G__114922__114940;
G__114925__114932 = G__114947;
G__114922__114933 = G__114948;
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
var this__114941 = this;
return this$.watches = cljs.core.assoc.call(null,this__114941.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__114942 = this;
return this$.watches = cljs.core.dissoc.call(null,this__114942.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__114943 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__114943.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__114944 = this;
return this__114944.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__114945 = this;
return this__114945.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__114946 = this;
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
var atom__114955 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__114956 = (function() { 
var G__114958__delegate = function (x,p__114949){
var map__114950__114951 = p__114949;
var map__114950__114952 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__114950__114951))?cljs.core.apply.call(null,cljs.core.hash_map,map__114950__114951):map__114950__114951);
var validator__114953 = cljs.core.get.call(null,map__114950__114952,"\uFDD0'validator");
var meta__114954 = cljs.core.get.call(null,map__114950__114952,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__114954,validator__114953,null));
};
var G__114958 = function (x,var_args){
var p__114949 = null;
if (goog.isDef(var_args)) {
  p__114949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__114958__delegate.call(this, x, p__114949);
};
G__114958.cljs$lang$maxFixedArity = 1;
G__114958.cljs$lang$applyTo = (function (arglist__114959){
var x = cljs.core.first(arglist__114959);
var p__114949 = cljs.core.rest(arglist__114959);
return G__114958__delegate.call(this, x, p__114949);
});
return G__114958;
})()
;
atom = function(x,var_args){
var p__114949 = var_args;
switch(arguments.length){
case  1 :
return atom__114955.call(this,x);
default:
return atom__114956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__114956.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____114960 = a.validator;

if(cljs.core.truth_(temp__3698__auto____114960))
{var validate__114961 = temp__3698__auto____114960;

if(cljs.core.truth_(validate__114961.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__114962 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__114962,new_value);
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
var swap_BANG___114963 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___114964 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___114965 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___114966 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___114967 = (function() { 
var G__114969__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__114969 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__114969__delegate.call(this, a, f, x, y, z, more);
};
G__114969.cljs$lang$maxFixedArity = 5;
G__114969.cljs$lang$applyTo = (function (arglist__114970){
var a = cljs.core.first(arglist__114970);
var f = cljs.core.first(cljs.core.next(arglist__114970));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__114970)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114970))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114970)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__114970)))));
return G__114969__delegate.call(this, a, f, x, y, z, more);
});
return G__114969;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___114963.call(this,a,f);
case  3 :
return swap_BANG___114964.call(this,a,f,x);
case  4 :
return swap_BANG___114965.call(this,a,f,x,y);
case  5 :
return swap_BANG___114966.call(this,a,f,x,y,z);
default:
return swap_BANG___114967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___114967.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__114971){
var iref = cljs.core.first(arglist__114971);
var f = cljs.core.first(cljs.core.next(arglist__114971));
var args = cljs.core.rest(cljs.core.next(arglist__114971));
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
var gensym__114972 = (function (){
return gensym.call(null,"G__");
});
var gensym__114973 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__114972.call(this);
case  1 :
return gensym__114973.call(this,prefix_string);
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
var this__114975 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__114975.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__114976 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__114976.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__114976.state,this__114976.f);
}
return cljs.core.deref.call(null,this__114976.state);
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
delay.cljs$lang$applyTo = (function (arglist__114977){
var body = cljs.core.seq( arglist__114977 );;
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
var map__114978__114979 = options;
var map__114978__114980 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__114978__114979))?cljs.core.apply.call(null,cljs.core.hash_map,map__114978__114979):map__114978__114979);
var keywordize_keys__114981 = cljs.core.get.call(null,map__114978__114980,"\uFDD0'keywordize-keys");
var keyfn__114982 = (cljs.core.truth_(keywordize_keys__114981)?cljs.core.keyword:cljs.core.str);
var f__114988 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____114987 = (function iter__114983(s__114984){
return (new cljs.core.LazySeq(null,false,(function (){
var s__114984__114985 = s__114984;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__114984__114985)))
{var k__114986 = cljs.core.first.call(null,s__114984__114985);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__114982.call(null,k__114986),thisfn.call(null,(x[k__114986]))]),iter__114983.call(null,cljs.core.rest.call(null,s__114984__114985)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____114987.call(null,cljs.core.js_keys.call(null,x));
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

return f__114988.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__114989){
var x = cljs.core.first(arglist__114989);
var options = cljs.core.rest(arglist__114989);
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
var mem__114990 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__114994__delegate = function (args){
var temp__3695__auto____114991 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__114990),args);

if(cljs.core.truth_(temp__3695__auto____114991))
{var v__114992 = temp__3695__auto____114991;

return v__114992;
} else
{var ret__114993 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__114990,cljs.core.assoc,args,ret__114993);
return ret__114993;
}
};
var G__114994 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__114994__delegate.call(this, args);
};
G__114994.cljs$lang$maxFixedArity = 0;
G__114994.cljs$lang$applyTo = (function (arglist__114995){
var args = cljs.core.seq( arglist__114995 );;
return G__114994__delegate.call(this, args);
});
return G__114994;
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
var trampoline__114997 = (function (f){
while(true){
var ret__114996 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__114996)))
{{
var G__115000 = ret__114996;
f = G__115000;
continue;
}
} else
{return ret__114996;
}
break;
}
});
var trampoline__114998 = (function() { 
var G__115001__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__115001 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__115001__delegate.call(this, f, args);
};
G__115001.cljs$lang$maxFixedArity = 1;
G__115001.cljs$lang$applyTo = (function (arglist__115002){
var f = cljs.core.first(arglist__115002);
var args = cljs.core.rest(arglist__115002);
return G__115001__delegate.call(this, f, args);
});
return G__115001;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__114997.call(this,f);
default:
return trampoline__114998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__114998.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__115003 = (function (){
return rand.call(null,1);
});
var rand__115004 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__115003.call(this);
case  1 :
return rand__115004.call(this,n);
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
var k__115006 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__115006,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__115006,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___115015 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___115016 = (function (h,child,parent){
var or__3548__auto____115007 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____115007))
{return or__3548__auto____115007;
} else
{var or__3548__auto____115008 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____115008))
{return or__3548__auto____115008;
} else
{var and__3546__auto____115009 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____115009))
{var and__3546__auto____115010 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____115010))
{var and__3546__auto____115011 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____115011))
{var ret__115012 = true;
var i__115013 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____115014 = cljs.core.not.call(null,ret__115012);

if(cljs.core.truth_(or__3548__auto____115014))
{return or__3548__auto____115014;
} else
{return cljs.core._EQ_.call(null,i__115013,cljs.core.count.call(null,parent));
}
})()))
{return ret__115012;
} else
{{
var G__115018 = isa_QMARK_.call(null,h,child.call(null,i__115013),parent.call(null,i__115013));
var G__115019 = (i__115013 + 1);
ret__115012 = G__115018;
i__115013 = G__115019;
continue;
}
}
break;
}
} else
{return and__3546__auto____115011;
}
} else
{return and__3546__auto____115010;
}
} else
{return and__3546__auto____115009;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___115015.call(this,h,child);
case  3 :
return isa_QMARK___115016.call(this,h,child,parent);
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
var parents__115020 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__115021 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__115020.call(this,h);
case  2 :
return parents__115021.call(this,h,tag);
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
var ancestors__115023 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__115024 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__115023.call(this,h);
case  2 :
return ancestors__115024.call(this,h,tag);
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
var descendants__115026 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__115027 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__115026.call(this,h);
case  2 :
return descendants__115027.call(this,h,tag);
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
var derive__115037 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__115038 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__115032 = "\uFDD0'parents".call(null,h);
var td__115033 = "\uFDD0'descendants".call(null,h);
var ta__115034 = "\uFDD0'ancestors".call(null,h);
var tf__115035 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____115036 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__115032.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__115034.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__115034.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__115032,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__115035.call(null,"\uFDD0'ancestors".call(null,h),tag,td__115033,parent,ta__115034),"\uFDD0'descendants":tf__115035.call(null,"\uFDD0'descendants".call(null,h),parent,ta__115034,tag,td__115033)});
})());

if(cljs.core.truth_(or__3548__auto____115036))
{return or__3548__auto____115036;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__115037.call(this,h,tag);
case  3 :
return derive__115038.call(this,h,tag,parent);
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
var underive__115044 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__115045 = (function (h,tag,parent){
var parentMap__115040 = "\uFDD0'parents".call(null,h);
var childsParents__115041 = (cljs.core.truth_(parentMap__115040.call(null,tag))?cljs.core.disj.call(null,parentMap__115040.call(null,tag),parent):cljs.core.set([]));
var newParents__115042 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__115041))?cljs.core.assoc.call(null,parentMap__115040,tag,childsParents__115041):cljs.core.dissoc.call(null,parentMap__115040,tag));
var deriv_seq__115043 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__115029_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__115029_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__115029_SHARP_),cljs.core.second.call(null,p1__115029_SHARP_)));
}),cljs.core.seq.call(null,newParents__115042)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__115040.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__115030_SHARP_,p2__115031_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__115030_SHARP_,p2__115031_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__115043));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__115044.call(this,h,tag);
case  3 :
return underive__115045.call(this,h,tag,parent);
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
var xprefs__115047 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____115049 = (cljs.core.truth_((function (){var and__3546__auto____115048 = xprefs__115047;

if(cljs.core.truth_(and__3546__auto____115048))
{return xprefs__115047.call(null,y);
} else
{return and__3546__auto____115048;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____115049))
{return or__3548__auto____115049;
} else
{var or__3548__auto____115051 = (function (){var ps__115050 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__115050) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__115050),prefer_table)))
{} else
{}
{
var G__115054 = cljs.core.rest.call(null,ps__115050);
ps__115050 = G__115054;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____115051))
{return or__3548__auto____115051;
} else
{var or__3548__auto____115053 = (function (){var ps__115052 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__115052) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__115052),y,prefer_table)))
{} else
{}
{
var G__115055 = cljs.core.rest.call(null,ps__115052);
ps__115052 = G__115055;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____115053))
{return or__3548__auto____115053;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____115056 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____115056))
{return or__3548__auto____115056;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__115065 = cljs.core.reduce.call(null,(function (be,p__115057){
var vec__115058__115059 = p__115057;
var k__115060 = cljs.core.nth.call(null,vec__115058__115059,0,null);
var ___115061 = cljs.core.nth.call(null,vec__115058__115059,1,null);
var e__115062 = vec__115058__115059;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__115060)))
{var be2__115064 = (cljs.core.truth_((function (){var or__3548__auto____115063 = (be === null);

if(cljs.core.truth_(or__3548__auto____115063))
{return or__3548__auto____115063;
} else
{return cljs.core.dominates.call(null,k__115060,cljs.core.first.call(null,be),prefer_table);
}
})())?e__115062:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__115064),k__115060,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__115060," and ",cljs.core.first.call(null,be2__115064),", and neither is preferred")));
}
return be2__115064;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__115065))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__115065));
return cljs.core.second.call(null,best_entry__115065);
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
if(cljs.core.truth_((function (){var and__3546__auto____115066 = mf;

if(cljs.core.truth_(and__3546__auto____115066))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____115066;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____115067 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115067))
{return or__3548__auto____115067;
} else
{var or__3548__auto____115068 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____115068))
{return or__3548__auto____115068;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____115069 = mf;

if(cljs.core.truth_(and__3546__auto____115069))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____115069;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____115070 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115070))
{return or__3548__auto____115070;
} else
{var or__3548__auto____115071 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____115071))
{return or__3548__auto____115071;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____115072 = mf;

if(cljs.core.truth_(and__3546__auto____115072))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____115072;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____115073 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115073))
{return or__3548__auto____115073;
} else
{var or__3548__auto____115074 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____115074))
{return or__3548__auto____115074;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____115075 = mf;

if(cljs.core.truth_(and__3546__auto____115075))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____115075;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____115076 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115076))
{return or__3548__auto____115076;
} else
{var or__3548__auto____115077 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____115077))
{return or__3548__auto____115077;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____115078 = mf;

if(cljs.core.truth_(and__3546__auto____115078))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____115078;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____115079 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115079))
{return or__3548__auto____115079;
} else
{var or__3548__auto____115080 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____115080))
{return or__3548__auto____115080;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____115081 = mf;

if(cljs.core.truth_(and__3546__auto____115081))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____115081;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____115082 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115082))
{return or__3548__auto____115082;
} else
{var or__3548__auto____115083 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____115083))
{return or__3548__auto____115083;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____115084 = mf;

if(cljs.core.truth_(and__3546__auto____115084))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____115084;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____115085 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115085))
{return or__3548__auto____115085;
} else
{var or__3548__auto____115086 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____115086))
{return or__3548__auto____115086;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____115087 = mf;

if(cljs.core.truth_(and__3546__auto____115087))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____115087;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____115088 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____115088))
{return or__3548__auto____115088;
} else
{var or__3548__auto____115089 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____115089))
{return or__3548__auto____115089;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__115090 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__115091 = cljs.core._get_method.call(null,mf,dispatch_val__115090);

if(cljs.core.truth_(target_fn__115091))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__115090)));
}
return cljs.core.apply.call(null,target_fn__115091,args);
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
var this__115092 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__115093 = this;
cljs.core.swap_BANG_.call(null,this__115093.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__115093.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__115093.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__115093.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__115094 = this;
cljs.core.swap_BANG_.call(null,this__115094.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__115094.method_cache,this__115094.method_table,this__115094.cached_hierarchy,this__115094.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__115095 = this;
cljs.core.swap_BANG_.call(null,this__115095.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__115095.method_cache,this__115095.method_table,this__115095.cached_hierarchy,this__115095.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__115096 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__115096.cached_hierarchy),cljs.core.deref.call(null,this__115096.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__115096.method_cache,this__115096.method_table,this__115096.cached_hierarchy,this__115096.hierarchy);
}
var temp__3695__auto____115097 = cljs.core.deref.call(null,this__115096.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____115097))
{var target_fn__115098 = temp__3695__auto____115097;

return target_fn__115098;
} else
{var temp__3695__auto____115099 = cljs.core.find_and_cache_best_method.call(null,this__115096.name,dispatch_val,this__115096.hierarchy,this__115096.method_table,this__115096.prefer_table,this__115096.method_cache,this__115096.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____115099))
{var target_fn__115100 = temp__3695__auto____115099;

return target_fn__115100;
} else
{return cljs.core.deref.call(null,this__115096.method_table).call(null,this__115096.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__115101 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__115101.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__115101.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__115101.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__115101.method_cache,this__115101.method_table,this__115101.cached_hierarchy,this__115101.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__115102 = this;
return cljs.core.deref.call(null,this__115102.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__115103 = this;
return cljs.core.deref.call(null,this__115103.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__115104 = this;
return cljs.core.do_dispatch.call(null,mf,this__115104.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__115105__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__115105 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__115105__delegate.call(this, _, args);
};
G__115105.cljs$lang$maxFixedArity = 1;
G__115105.cljs$lang$applyTo = (function (arglist__115106){
var _ = cljs.core.first(arglist__115106);
var args = cljs.core.rest(arglist__115106);
return G__115105__delegate.call(this, _, args);
});
return G__115105;
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
