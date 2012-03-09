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
var or__3548__auto____23762 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____23762))
{return or__3548__auto____23762;
} else
{var or__3548__auto____23763 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____23763))
{return or__3548__auto____23763;
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
var _invoke__23827 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____23764 = this$;

if(cljs.core.truth_(and__3546__auto____23764))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23764;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____23765 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23765))
{return or__3548__auto____23765;
} else
{var or__3548__auto____23766 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23766))
{return or__3548__auto____23766;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__23828 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____23767 = this$;

if(cljs.core.truth_(and__3546__auto____23767))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23767;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____23768 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23768))
{return or__3548__auto____23768;
} else
{var or__3548__auto____23769 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23769))
{return or__3548__auto____23769;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__23829 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____23770 = this$;

if(cljs.core.truth_(and__3546__auto____23770))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23770;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____23771 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23771))
{return or__3548__auto____23771;
} else
{var or__3548__auto____23772 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23772))
{return or__3548__auto____23772;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__23830 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____23773 = this$;

if(cljs.core.truth_(and__3546__auto____23773))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23773;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____23774 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23774))
{return or__3548__auto____23774;
} else
{var or__3548__auto____23775 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23775))
{return or__3548__auto____23775;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__23831 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____23776 = this$;

if(cljs.core.truth_(and__3546__auto____23776))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23776;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____23777 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23777))
{return or__3548__auto____23777;
} else
{var or__3548__auto____23778 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23778))
{return or__3548__auto____23778;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__23832 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____23779 = this$;

if(cljs.core.truth_(and__3546__auto____23779))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23779;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____23780 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23780))
{return or__3548__auto____23780;
} else
{var or__3548__auto____23781 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23781))
{return or__3548__auto____23781;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__23833 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____23782 = this$;

if(cljs.core.truth_(and__3546__auto____23782))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23782;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____23783 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23783))
{return or__3548__auto____23783;
} else
{var or__3548__auto____23784 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23784))
{return or__3548__auto____23784;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__23834 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____23785 = this$;

if(cljs.core.truth_(and__3546__auto____23785))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23785;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____23786 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23786))
{return or__3548__auto____23786;
} else
{var or__3548__auto____23787 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23787))
{return or__3548__auto____23787;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__23835 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____23788 = this$;

if(cljs.core.truth_(and__3546__auto____23788))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23788;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____23789 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23789))
{return or__3548__auto____23789;
} else
{var or__3548__auto____23790 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23790))
{return or__3548__auto____23790;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__23836 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____23791 = this$;

if(cljs.core.truth_(and__3546__auto____23791))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23791;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____23792 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23792))
{return or__3548__auto____23792;
} else
{var or__3548__auto____23793 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23793))
{return or__3548__auto____23793;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__23837 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____23794 = this$;

if(cljs.core.truth_(and__3546__auto____23794))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23794;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____23795 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23795))
{return or__3548__auto____23795;
} else
{var or__3548__auto____23796 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23796))
{return or__3548__auto____23796;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__23838 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____23797 = this$;

if(cljs.core.truth_(and__3546__auto____23797))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23797;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____23798 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23798))
{return or__3548__auto____23798;
} else
{var or__3548__auto____23799 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23799))
{return or__3548__auto____23799;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__23839 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____23800 = this$;

if(cljs.core.truth_(and__3546__auto____23800))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23800;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____23801 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23801))
{return or__3548__auto____23801;
} else
{var or__3548__auto____23802 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23802))
{return or__3548__auto____23802;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__23840 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____23803 = this$;

if(cljs.core.truth_(and__3546__auto____23803))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23803;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____23804 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23804))
{return or__3548__auto____23804;
} else
{var or__3548__auto____23805 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23805))
{return or__3548__auto____23805;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__23841 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____23806 = this$;

if(cljs.core.truth_(and__3546__auto____23806))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23806;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____23807 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23807))
{return or__3548__auto____23807;
} else
{var or__3548__auto____23808 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23808))
{return or__3548__auto____23808;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__23842 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____23809 = this$;

if(cljs.core.truth_(and__3546__auto____23809))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23809;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____23810 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23810))
{return or__3548__auto____23810;
} else
{var or__3548__auto____23811 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23811))
{return or__3548__auto____23811;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__23843 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____23812 = this$;

if(cljs.core.truth_(and__3546__auto____23812))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23812;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____23813 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23813))
{return or__3548__auto____23813;
} else
{var or__3548__auto____23814 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23814))
{return or__3548__auto____23814;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__23844 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____23815 = this$;

if(cljs.core.truth_(and__3546__auto____23815))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23815;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____23816 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23816))
{return or__3548__auto____23816;
} else
{var or__3548__auto____23817 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23817))
{return or__3548__auto____23817;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__23845 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____23818 = this$;

if(cljs.core.truth_(and__3546__auto____23818))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23818;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____23819 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23819))
{return or__3548__auto____23819;
} else
{var or__3548__auto____23820 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23820))
{return or__3548__auto____23820;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__23846 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____23821 = this$;

if(cljs.core.truth_(and__3546__auto____23821))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23821;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____23822 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23822))
{return or__3548__auto____23822;
} else
{var or__3548__auto____23823 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23823))
{return or__3548__auto____23823;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__23847 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____23824 = this$;

if(cljs.core.truth_(and__3546__auto____23824))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____23824;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____23825 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23825))
{return or__3548__auto____23825;
} else
{var or__3548__auto____23826 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____23826))
{return or__3548__auto____23826;
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
return _invoke__23827.call(this,this$);
case  2 :
return _invoke__23828.call(this,this$,a);
case  3 :
return _invoke__23829.call(this,this$,a,b);
case  4 :
return _invoke__23830.call(this,this$,a,b,c);
case  5 :
return _invoke__23831.call(this,this$,a,b,c,d);
case  6 :
return _invoke__23832.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__23833.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__23834.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__23835.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__23836.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__23837.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__23838.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__23839.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__23840.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__23841.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__23842.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__23843.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__23844.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__23845.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__23846.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__23847.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____23849 = coll;

if(cljs.core.truth_(and__3546__auto____23849))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____23849;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____23850 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23850))
{return or__3548__auto____23850;
} else
{var or__3548__auto____23851 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____23851))
{return or__3548__auto____23851;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____23852 = coll;

if(cljs.core.truth_(and__3546__auto____23852))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____23852;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____23853 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23853))
{return or__3548__auto____23853;
} else
{var or__3548__auto____23854 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____23854))
{return or__3548__auto____23854;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____23855 = coll;

if(cljs.core.truth_(and__3546__auto____23855))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____23855;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____23856 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23856))
{return or__3548__auto____23856;
} else
{var or__3548__auto____23857 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____23857))
{return or__3548__auto____23857;
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
var _nth__23864 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____23858 = coll;

if(cljs.core.truth_(and__3546__auto____23858))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____23858;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____23859 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23859))
{return or__3548__auto____23859;
} else
{var or__3548__auto____23860 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____23860))
{return or__3548__auto____23860;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__23865 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____23861 = coll;

if(cljs.core.truth_(and__3546__auto____23861))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____23861;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____23862 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23862))
{return or__3548__auto____23862;
} else
{var or__3548__auto____23863 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____23863))
{return or__3548__auto____23863;
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
return _nth__23864.call(this,coll,n);
case  3 :
return _nth__23865.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____23867 = coll;

if(cljs.core.truth_(and__3546__auto____23867))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____23867;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____23868 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23868))
{return or__3548__auto____23868;
} else
{var or__3548__auto____23869 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____23869))
{return or__3548__auto____23869;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____23870 = coll;

if(cljs.core.truth_(and__3546__auto____23870))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____23870;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____23871 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23871))
{return or__3548__auto____23871;
} else
{var or__3548__auto____23872 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____23872))
{return or__3548__auto____23872;
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
var _lookup__23879 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____23873 = o;

if(cljs.core.truth_(and__3546__auto____23873))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____23873;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____23874 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23874))
{return or__3548__auto____23874;
} else
{var or__3548__auto____23875 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____23875))
{return or__3548__auto____23875;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__23880 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____23876 = o;

if(cljs.core.truth_(and__3546__auto____23876))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____23876;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____23877 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23877))
{return or__3548__auto____23877;
} else
{var or__3548__auto____23878 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____23878))
{return or__3548__auto____23878;
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
return _lookup__23879.call(this,o,k);
case  3 :
return _lookup__23880.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____23882 = coll;

if(cljs.core.truth_(and__3546__auto____23882))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____23882;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____23883 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23883))
{return or__3548__auto____23883;
} else
{var or__3548__auto____23884 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____23884))
{return or__3548__auto____23884;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____23885 = coll;

if(cljs.core.truth_(and__3546__auto____23885))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____23885;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____23886 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23886))
{return or__3548__auto____23886;
} else
{var or__3548__auto____23887 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____23887))
{return or__3548__auto____23887;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____23888 = coll;

if(cljs.core.truth_(and__3546__auto____23888))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____23888;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____23889 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23889))
{return or__3548__auto____23889;
} else
{var or__3548__auto____23890 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____23890))
{return or__3548__auto____23890;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____23891 = coll;

if(cljs.core.truth_(and__3546__auto____23891))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____23891;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____23892 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23892))
{return or__3548__auto____23892;
} else
{var or__3548__auto____23893 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____23893))
{return or__3548__auto____23893;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____23894 = coll;

if(cljs.core.truth_(and__3546__auto____23894))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____23894;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____23895 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23895))
{return or__3548__auto____23895;
} else
{var or__3548__auto____23896 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____23896))
{return or__3548__auto____23896;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____23897 = coll;

if(cljs.core.truth_(and__3546__auto____23897))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____23897;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____23898 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23898))
{return or__3548__auto____23898;
} else
{var or__3548__auto____23899 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____23899))
{return or__3548__auto____23899;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____23900 = coll;

if(cljs.core.truth_(and__3546__auto____23900))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____23900;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____23901 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23901))
{return or__3548__auto____23901;
} else
{var or__3548__auto____23902 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____23902))
{return or__3548__auto____23902;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____23903 = o;

if(cljs.core.truth_(and__3546__auto____23903))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____23903;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____23904 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23904))
{return or__3548__auto____23904;
} else
{var or__3548__auto____23905 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____23905))
{return or__3548__auto____23905;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____23906 = o;

if(cljs.core.truth_(and__3546__auto____23906))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____23906;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____23907 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23907))
{return or__3548__auto____23907;
} else
{var or__3548__auto____23908 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____23908))
{return or__3548__auto____23908;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____23909 = o;

if(cljs.core.truth_(and__3546__auto____23909))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____23909;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____23910 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23910))
{return or__3548__auto____23910;
} else
{var or__3548__auto____23911 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____23911))
{return or__3548__auto____23911;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____23912 = o;

if(cljs.core.truth_(and__3546__auto____23912))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____23912;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____23913 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23913))
{return or__3548__auto____23913;
} else
{var or__3548__auto____23914 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____23914))
{return or__3548__auto____23914;
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
var _reduce__23921 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____23915 = coll;

if(cljs.core.truth_(and__3546__auto____23915))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____23915;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____23916 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23916))
{return or__3548__auto____23916;
} else
{var or__3548__auto____23917 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____23917))
{return or__3548__auto____23917;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__23922 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____23918 = coll;

if(cljs.core.truth_(and__3546__auto____23918))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____23918;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____23919 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____23919))
{return or__3548__auto____23919;
} else
{var or__3548__auto____23920 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____23920))
{return or__3548__auto____23920;
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
return _reduce__23921.call(this,coll,f);
case  3 :
return _reduce__23922.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____23924 = o;

if(cljs.core.truth_(and__3546__auto____23924))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____23924;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____23925 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23925))
{return or__3548__auto____23925;
} else
{var or__3548__auto____23926 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____23926))
{return or__3548__auto____23926;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____23927 = o;

if(cljs.core.truth_(and__3546__auto____23927))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____23927;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____23928 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23928))
{return or__3548__auto____23928;
} else
{var or__3548__auto____23929 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____23929))
{return or__3548__auto____23929;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____23930 = o;

if(cljs.core.truth_(and__3546__auto____23930))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____23930;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____23931 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23931))
{return or__3548__auto____23931;
} else
{var or__3548__auto____23932 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____23932))
{return or__3548__auto____23932;
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
if(cljs.core.truth_((function (){var and__3546__auto____23933 = o;

if(cljs.core.truth_(and__3546__auto____23933))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____23933;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____23934 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23934))
{return or__3548__auto____23934;
} else
{var or__3548__auto____23935 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____23935))
{return or__3548__auto____23935;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____23936 = d;

if(cljs.core.truth_(and__3546__auto____23936))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____23936;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____23937 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____23937))
{return or__3548__auto____23937;
} else
{var or__3548__auto____23938 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____23938))
{return or__3548__auto____23938;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____23939 = this$;

if(cljs.core.truth_(and__3546__auto____23939))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____23939;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____23940 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23940))
{return or__3548__auto____23940;
} else
{var or__3548__auto____23941 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____23941))
{return or__3548__auto____23941;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____23942 = this$;

if(cljs.core.truth_(and__3546__auto____23942))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____23942;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____23943 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23943))
{return or__3548__auto____23943;
} else
{var or__3548__auto____23944 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____23944))
{return or__3548__auto____23944;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____23945 = this$;

if(cljs.core.truth_(and__3546__auto____23945))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____23945;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____23946 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23946))
{return or__3548__auto____23946;
} else
{var or__3548__auto____23947 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____23947))
{return or__3548__auto____23947;
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
var G__23948 = null;
var G__23948__23949 = (function (o,k){
return null;
});
var G__23948__23950 = (function (o,k,not_found){
return not_found;
});
G__23948 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__23948__23949.call(this,o,k);
case  3 :
return G__23948__23950.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23948;
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
var G__23952 = null;
var G__23952__23953 = (function (_,f){
return f.call(null);
});
var G__23952__23954 = (function (_,f,start){
return start;
});
G__23952 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__23952__23953.call(this,_,f);
case  3 :
return G__23952__23954.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23952;
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
var G__23956 = null;
var G__23956__23957 = (function (_,n){
return null;
});
var G__23956__23958 = (function (_,n,not_found){
return not_found;
});
G__23956 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__23956__23957.call(this,_,n);
case  3 :
return G__23956__23958.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23956;
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
var ci_reduce__23966 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__23960 = cljs.core._nth.call(null,cicoll,0);
var n__23961 = 1;

while(true){
if(cljs.core.truth_((n__23961 < cljs.core._count.call(null,cicoll))))
{{
var G__23970 = f.call(null,val__23960,cljs.core._nth.call(null,cicoll,n__23961));
var G__23971 = (n__23961 + 1);
val__23960 = G__23970;
n__23961 = G__23971;
continue;
}
} else
{return val__23960;
}
break;
}
}
});
var ci_reduce__23967 = (function (cicoll,f,val){
var val__23962 = val;
var n__23963 = 0;

while(true){
if(cljs.core.truth_((n__23963 < cljs.core._count.call(null,cicoll))))
{{
var G__23972 = f.call(null,val__23962,cljs.core._nth.call(null,cicoll,n__23963));
var G__23973 = (n__23963 + 1);
val__23962 = G__23972;
n__23963 = G__23973;
continue;
}
} else
{return val__23962;
}
break;
}
});
var ci_reduce__23968 = (function (cicoll,f,val,idx){
var val__23964 = val;
var n__23965 = idx;

while(true){
if(cljs.core.truth_((n__23965 < cljs.core._count.call(null,cicoll))))
{{
var G__23974 = f.call(null,val__23964,cljs.core._nth.call(null,cicoll,n__23965));
var G__23975 = (n__23965 + 1);
val__23964 = G__23974;
n__23965 = G__23975;
continue;
}
} else
{return val__23964;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__23966.call(this,cicoll,f);
case  3 :
return ci_reduce__23967.call(this,cicoll,f,val);
case  4 :
return ci_reduce__23968.call(this,cicoll,f,val,idx);
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
var this__23976 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__23989 = null;
var G__23989__23990 = (function (_,f){
var this__23977 = this;
return cljs.core.ci_reduce.call(null,this__23977.a,f,(this__23977.a[this__23977.i]),(this__23977.i + 1));
});
var G__23989__23991 = (function (_,f,start){
var this__23978 = this;
return cljs.core.ci_reduce.call(null,this__23978.a,f,start,this__23978.i);
});
G__23989 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__23989__23990.call(this,_,f);
case  3 :
return G__23989__23991.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23989;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23979 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23980 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__23993 = null;
var G__23993__23994 = (function (coll,n){
var this__23981 = this;
var i__23982 = (n + this__23981.i);

if(cljs.core.truth_((i__23982 < this__23981.a.length)))
{return (this__23981.a[i__23982]);
} else
{return null;
}
});
var G__23993__23995 = (function (coll,n,not_found){
var this__23983 = this;
var i__23984 = (n + this__23983.i);

if(cljs.core.truth_((i__23984 < this__23983.a.length)))
{return (this__23983.a[i__23984]);
} else
{return not_found;
}
});
G__23993 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__23993__23994.call(this,coll,n);
case  3 :
return G__23993__23995.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23993;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__23985 = this;
return (this__23985.a.length - this__23985.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__23986 = this;
return (this__23986.a[this__23986.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__23987 = this;
if(cljs.core.truth_(((this__23987.i + 1) < this__23987.a.length)))
{return (new cljs.core.IndexedSeq(this__23987.a,(this__23987.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__23988 = this;
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
var G__23997 = null;
var G__23997__23998 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__23997__23999 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__23997 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__23997__23998.call(this,array,f);
case  3 :
return G__23997__23999.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23997;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__24001 = null;
var G__24001__24002 = (function (array,k){
return (array[k]);
});
var G__24001__24003 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__24001 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__24001__24002.call(this,array,k);
case  3 :
return G__24001__24003.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24001;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__24005 = null;
var G__24005__24006 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__24005__24007 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__24005 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__24005__24006.call(this,array,n);
case  3 :
return G__24005__24007.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24005;
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
var temp__3698__auto____24009 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24009))
{var s__24010 = temp__3698__auto____24009;

return cljs.core._first.call(null,s__24010);
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
var G__24011 = cljs.core.next.call(null,s);
s = G__24011;
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
var s__24012 = cljs.core.seq.call(null,x);
var n__24013 = 0;

while(true){
if(cljs.core.truth_(s__24012))
{{
var G__24014 = cljs.core.next.call(null,s__24012);
var G__24015 = (n__24013 + 1);
s__24012 = G__24014;
n__24013 = G__24015;
continue;
}
} else
{return n__24013;
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
var conj__24016 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__24017 = (function() { 
var G__24019__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__24020 = conj.call(null,coll,x);
var G__24021 = cljs.core.first.call(null,xs);
var G__24022 = cljs.core.next.call(null,xs);
coll = G__24020;
x = G__24021;
xs = G__24022;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__24019 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24019__delegate.call(this, coll, x, xs);
};
G__24019.cljs$lang$maxFixedArity = 2;
G__24019.cljs$lang$applyTo = (function (arglist__24023){
var coll = cljs.core.first(arglist__24023);
var x = cljs.core.first(cljs.core.next(arglist__24023));
var xs = cljs.core.rest(cljs.core.next(arglist__24023));
return G__24019__delegate.call(this, coll, x, xs);
});
return G__24019;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__24016.call(this,coll,x);
default:
return conj__24017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__24017.cljs$lang$applyTo;
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
var nth__24024 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__24025 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__24024.call(this,coll,n);
case  3 :
return nth__24025.call(this,coll,n,not_found);
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
var get__24027 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__24028 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__24027.call(this,o,k);
case  3 :
return get__24028.call(this,o,k,not_found);
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
var assoc__24031 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__24032 = (function() { 
var G__24034__delegate = function (coll,k,v,kvs){
while(true){
var ret__24030 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__24035 = ret__24030;
var G__24036 = cljs.core.first.call(null,kvs);
var G__24037 = cljs.core.second.call(null,kvs);
var G__24038 = cljs.core.nnext.call(null,kvs);
coll = G__24035;
k = G__24036;
v = G__24037;
kvs = G__24038;
continue;
}
} else
{return ret__24030;
}
break;
}
};
var G__24034 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24034__delegate.call(this, coll, k, v, kvs);
};
G__24034.cljs$lang$maxFixedArity = 3;
G__24034.cljs$lang$applyTo = (function (arglist__24039){
var coll = cljs.core.first(arglist__24039);
var k = cljs.core.first(cljs.core.next(arglist__24039));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24039)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24039)));
return G__24034__delegate.call(this, coll, k, v, kvs);
});
return G__24034;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__24031.call(this,coll,k,v);
default:
return assoc__24032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__24032.cljs$lang$applyTo;
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
var dissoc__24041 = (function (coll){
return coll;
});
var dissoc__24042 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__24043 = (function() { 
var G__24045__delegate = function (coll,k,ks){
while(true){
var ret__24040 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__24046 = ret__24040;
var G__24047 = cljs.core.first.call(null,ks);
var G__24048 = cljs.core.next.call(null,ks);
coll = G__24046;
k = G__24047;
ks = G__24048;
continue;
}
} else
{return ret__24040;
}
break;
}
};
var G__24045 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24045__delegate.call(this, coll, k, ks);
};
G__24045.cljs$lang$maxFixedArity = 2;
G__24045.cljs$lang$applyTo = (function (arglist__24049){
var coll = cljs.core.first(arglist__24049);
var k = cljs.core.first(cljs.core.next(arglist__24049));
var ks = cljs.core.rest(cljs.core.next(arglist__24049));
return G__24045__delegate.call(this, coll, k, ks);
});
return G__24045;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__24041.call(this,coll);
case  2 :
return dissoc__24042.call(this,coll,k);
default:
return dissoc__24043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__24043.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____24050 = o;

if(cljs.core.truth_((function (){var and__3546__auto____24051 = x__450__auto____24050;

if(cljs.core.truth_(and__3546__auto____24051))
{var and__3546__auto____24052 = x__450__auto____24050.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____24052))
{return cljs.core.not.call(null,x__450__auto____24050.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____24052;
}
} else
{return and__3546__auto____24051;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____24050);
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
var disj__24054 = (function (coll){
return coll;
});
var disj__24055 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__24056 = (function() { 
var G__24058__delegate = function (coll,k,ks){
while(true){
var ret__24053 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__24059 = ret__24053;
var G__24060 = cljs.core.first.call(null,ks);
var G__24061 = cljs.core.next.call(null,ks);
coll = G__24059;
k = G__24060;
ks = G__24061;
continue;
}
} else
{return ret__24053;
}
break;
}
};
var G__24058 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24058__delegate.call(this, coll, k, ks);
};
G__24058.cljs$lang$maxFixedArity = 2;
G__24058.cljs$lang$applyTo = (function (arglist__24062){
var coll = cljs.core.first(arglist__24062);
var k = cljs.core.first(cljs.core.next(arglist__24062));
var ks = cljs.core.rest(cljs.core.next(arglist__24062));
return G__24058__delegate.call(this, coll, k, ks);
});
return G__24058;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__24054.call(this,coll);
case  2 :
return disj__24055.call(this,coll,k);
default:
return disj__24056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__24056.cljs$lang$applyTo;
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
{var x__450__auto____24063 = x;

if(cljs.core.truth_((function (){var and__3546__auto____24064 = x__450__auto____24063;

if(cljs.core.truth_(and__3546__auto____24064))
{var and__3546__auto____24065 = x__450__auto____24063.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____24065))
{return cljs.core.not.call(null,x__450__auto____24063.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____24065;
}
} else
{return and__3546__auto____24064;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____24063);
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
{var x__450__auto____24066 = x;

if(cljs.core.truth_((function (){var and__3546__auto____24067 = x__450__auto____24066;

if(cljs.core.truth_(and__3546__auto____24067))
{var and__3546__auto____24068 = x__450__auto____24066.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____24068))
{return cljs.core.not.call(null,x__450__auto____24066.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____24068;
}
} else
{return and__3546__auto____24067;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____24066);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____24069 = x;

if(cljs.core.truth_((function (){var and__3546__auto____24070 = x__450__auto____24069;

if(cljs.core.truth_(and__3546__auto____24070))
{var and__3546__auto____24071 = x__450__auto____24069.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____24071))
{return cljs.core.not.call(null,x__450__auto____24069.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____24071;
}
} else
{return and__3546__auto____24070;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____24069);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____24072 = x;

if(cljs.core.truth_((function (){var and__3546__auto____24073 = x__450__auto____24072;

if(cljs.core.truth_(and__3546__auto____24073))
{var and__3546__auto____24074 = x__450__auto____24072.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____24074))
{return cljs.core.not.call(null,x__450__auto____24072.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____24074;
}
} else
{return and__3546__auto____24073;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____24072);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____24075 = x;

if(cljs.core.truth_((function (){var and__3546__auto____24076 = x__450__auto____24075;

if(cljs.core.truth_(and__3546__auto____24076))
{var and__3546__auto____24077 = x__450__auto____24075.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____24077))
{return cljs.core.not.call(null,x__450__auto____24075.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____24077;
}
} else
{return and__3546__auto____24076;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____24075);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____24078 = x;

if(cljs.core.truth_((function (){var and__3546__auto____24079 = x__450__auto____24078;

if(cljs.core.truth_(and__3546__auto____24079))
{var and__3546__auto____24080 = x__450__auto____24078.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____24080))
{return cljs.core.not.call(null,x__450__auto____24078.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____24080;
}
} else
{return and__3546__auto____24079;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____24078);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____24081 = x;

if(cljs.core.truth_((function (){var and__3546__auto____24082 = x__450__auto____24081;

if(cljs.core.truth_(and__3546__auto____24082))
{var and__3546__auto____24083 = x__450__auto____24081.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____24083))
{return cljs.core.not.call(null,x__450__auto____24081.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____24083;
}
} else
{return and__3546__auto____24082;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____24081);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__24084 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__24084.push(key);
}));
return keys__24084;
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
{var x__450__auto____24085 = s;

if(cljs.core.truth_((function (){var and__3546__auto____24086 = x__450__auto____24085;

if(cljs.core.truth_(and__3546__auto____24086))
{var and__3546__auto____24087 = x__450__auto____24085.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____24087))
{return cljs.core.not.call(null,x__450__auto____24085.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____24087;
}
} else
{return and__3546__auto____24086;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____24085);
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
var and__3546__auto____24088 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____24088))
{return cljs.core.not.call(null,(function (){var or__3548__auto____24089 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____24089))
{return or__3548__auto____24089;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____24088;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____24090 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____24090))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____24090;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____24091 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____24091))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____24091;
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
var and__3546__auto____24092 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____24092))
{return (n == n.toFixed());
} else
{return and__3546__auto____24092;
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
if(cljs.core.truth_((function (){var and__3546__auto____24093 = coll;

if(cljs.core.truth_(and__3546__auto____24093))
{var and__3546__auto____24094 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____24094))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____24094;
}
} else
{return and__3546__auto____24093;
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
var distinct_QMARK___24099 = (function (x){
return true;
});
var distinct_QMARK___24100 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___24101 = (function() { 
var G__24103__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__24095 = cljs.core.set([y,x]);
var xs__24096 = more;

while(true){
var x__24097 = cljs.core.first.call(null,xs__24096);
var etc__24098 = cljs.core.next.call(null,xs__24096);

if(cljs.core.truth_(xs__24096))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__24095,x__24097)))
{return false;
} else
{{
var G__24104 = cljs.core.conj.call(null,s__24095,x__24097);
var G__24105 = etc__24098;
s__24095 = G__24104;
xs__24096 = G__24105;
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
var G__24103 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24103__delegate.call(this, x, y, more);
};
G__24103.cljs$lang$maxFixedArity = 2;
G__24103.cljs$lang$applyTo = (function (arglist__24106){
var x = cljs.core.first(arglist__24106);
var y = cljs.core.first(cljs.core.next(arglist__24106));
var more = cljs.core.rest(cljs.core.next(arglist__24106));
return G__24103__delegate.call(this, x, y, more);
});
return G__24103;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___24099.call(this,x);
case  2 :
return distinct_QMARK___24100.call(this,x,y);
default:
return distinct_QMARK___24101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___24101.cljs$lang$applyTo;
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
var r__24107 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__24107)))
{return r__24107;
} else
{if(cljs.core.truth_(r__24107))
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
var sort__24109 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__24110 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__24108 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__24108,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__24108);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__24109.call(this,comp);
case  2 :
return sort__24110.call(this,comp,coll);
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
var sort_by__24112 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__24113 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__24112.call(this,keyfn,comp);
case  3 :
return sort_by__24113.call(this,keyfn,comp,coll);
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
var reduce__24115 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__24116 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__24115.call(this,f,val);
case  3 :
return reduce__24116.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__24122 = (function (f,coll){
var temp__3695__auto____24118 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____24118))
{var s__24119 = temp__3695__auto____24118;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__24119),cljs.core.next.call(null,s__24119));
} else
{return f.call(null);
}
});
var seq_reduce__24123 = (function (f,val,coll){
var val__24120 = val;
var coll__24121 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__24121))
{{
var G__24125 = f.call(null,val__24120,cljs.core.first.call(null,coll__24121));
var G__24126 = cljs.core.next.call(null,coll__24121);
val__24120 = G__24125;
coll__24121 = G__24126;
continue;
}
} else
{return val__24120;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__24122.call(this,f,val);
case  3 :
return seq_reduce__24123.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__24127 = null;
var G__24127__24128 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__24127__24129 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__24127 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__24127__24128.call(this,coll,f);
case  3 :
return G__24127__24129.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24127;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___24131 = (function (){
return 0;
});
var _PLUS___24132 = (function (x){
return x;
});
var _PLUS___24133 = (function (x,y){
return (x + y);
});
var _PLUS___24134 = (function() { 
var G__24136__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__24136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24136__delegate.call(this, x, y, more);
};
G__24136.cljs$lang$maxFixedArity = 2;
G__24136.cljs$lang$applyTo = (function (arglist__24137){
var x = cljs.core.first(arglist__24137);
var y = cljs.core.first(cljs.core.next(arglist__24137));
var more = cljs.core.rest(cljs.core.next(arglist__24137));
return G__24136__delegate.call(this, x, y, more);
});
return G__24136;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___24131.call(this);
case  1 :
return _PLUS___24132.call(this,x);
case  2 :
return _PLUS___24133.call(this,x,y);
default:
return _PLUS___24134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___24134.cljs$lang$applyTo;
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
var ___24138 = (function (x){
return (- x);
});
var ___24139 = (function (x,y){
return (x - y);
});
var ___24140 = (function() { 
var G__24142__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__24142 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24142__delegate.call(this, x, y, more);
};
G__24142.cljs$lang$maxFixedArity = 2;
G__24142.cljs$lang$applyTo = (function (arglist__24143){
var x = cljs.core.first(arglist__24143);
var y = cljs.core.first(cljs.core.next(arglist__24143));
var more = cljs.core.rest(cljs.core.next(arglist__24143));
return G__24142__delegate.call(this, x, y, more);
});
return G__24142;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___24138.call(this,x);
case  2 :
return ___24139.call(this,x,y);
default:
return ___24140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___24140.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___24144 = (function (){
return 1;
});
var _STAR___24145 = (function (x){
return x;
});
var _STAR___24146 = (function (x,y){
return (x * y);
});
var _STAR___24147 = (function() { 
var G__24149__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__24149 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24149__delegate.call(this, x, y, more);
};
G__24149.cljs$lang$maxFixedArity = 2;
G__24149.cljs$lang$applyTo = (function (arglist__24150){
var x = cljs.core.first(arglist__24150);
var y = cljs.core.first(cljs.core.next(arglist__24150));
var more = cljs.core.rest(cljs.core.next(arglist__24150));
return G__24149__delegate.call(this, x, y, more);
});
return G__24149;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___24144.call(this);
case  1 :
return _STAR___24145.call(this,x);
case  2 :
return _STAR___24146.call(this,x,y);
default:
return _STAR___24147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___24147.cljs$lang$applyTo;
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
var _SLASH___24151 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___24152 = (function (x,y){
return (x / y);
});
var _SLASH___24153 = (function() { 
var G__24155__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__24155 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24155__delegate.call(this, x, y, more);
};
G__24155.cljs$lang$maxFixedArity = 2;
G__24155.cljs$lang$applyTo = (function (arglist__24156){
var x = cljs.core.first(arglist__24156);
var y = cljs.core.first(cljs.core.next(arglist__24156));
var more = cljs.core.rest(cljs.core.next(arglist__24156));
return G__24155__delegate.call(this, x, y, more);
});
return G__24155;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___24151.call(this,x);
case  2 :
return _SLASH___24152.call(this,x,y);
default:
return _SLASH___24153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___24153.cljs$lang$applyTo;
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
var _LT___24157 = (function (x){
return true;
});
var _LT___24158 = (function (x,y){
return (x < y);
});
var _LT___24159 = (function() { 
var G__24161__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__24162 = y;
var G__24163 = cljs.core.first.call(null,more);
var G__24164 = cljs.core.next.call(null,more);
x = G__24162;
y = G__24163;
more = G__24164;
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
var G__24161 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24161__delegate.call(this, x, y, more);
};
G__24161.cljs$lang$maxFixedArity = 2;
G__24161.cljs$lang$applyTo = (function (arglist__24165){
var x = cljs.core.first(arglist__24165);
var y = cljs.core.first(cljs.core.next(arglist__24165));
var more = cljs.core.rest(cljs.core.next(arglist__24165));
return G__24161__delegate.call(this, x, y, more);
});
return G__24161;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___24157.call(this,x);
case  2 :
return _LT___24158.call(this,x,y);
default:
return _LT___24159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___24159.cljs$lang$applyTo;
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
var _LT__EQ___24166 = (function (x){
return true;
});
var _LT__EQ___24167 = (function (x,y){
return (x <= y);
});
var _LT__EQ___24168 = (function() { 
var G__24170__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__24171 = y;
var G__24172 = cljs.core.first.call(null,more);
var G__24173 = cljs.core.next.call(null,more);
x = G__24171;
y = G__24172;
more = G__24173;
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
var G__24170 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24170__delegate.call(this, x, y, more);
};
G__24170.cljs$lang$maxFixedArity = 2;
G__24170.cljs$lang$applyTo = (function (arglist__24174){
var x = cljs.core.first(arglist__24174);
var y = cljs.core.first(cljs.core.next(arglist__24174));
var more = cljs.core.rest(cljs.core.next(arglist__24174));
return G__24170__delegate.call(this, x, y, more);
});
return G__24170;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___24166.call(this,x);
case  2 :
return _LT__EQ___24167.call(this,x,y);
default:
return _LT__EQ___24168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___24168.cljs$lang$applyTo;
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
var _GT___24175 = (function (x){
return true;
});
var _GT___24176 = (function (x,y){
return (x > y);
});
var _GT___24177 = (function() { 
var G__24179__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__24180 = y;
var G__24181 = cljs.core.first.call(null,more);
var G__24182 = cljs.core.next.call(null,more);
x = G__24180;
y = G__24181;
more = G__24182;
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
var G__24179 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24179__delegate.call(this, x, y, more);
};
G__24179.cljs$lang$maxFixedArity = 2;
G__24179.cljs$lang$applyTo = (function (arglist__24183){
var x = cljs.core.first(arglist__24183);
var y = cljs.core.first(cljs.core.next(arglist__24183));
var more = cljs.core.rest(cljs.core.next(arglist__24183));
return G__24179__delegate.call(this, x, y, more);
});
return G__24179;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___24175.call(this,x);
case  2 :
return _GT___24176.call(this,x,y);
default:
return _GT___24177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___24177.cljs$lang$applyTo;
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
var _GT__EQ___24184 = (function (x){
return true;
});
var _GT__EQ___24185 = (function (x,y){
return (x >= y);
});
var _GT__EQ___24186 = (function() { 
var G__24188__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__24189 = y;
var G__24190 = cljs.core.first.call(null,more);
var G__24191 = cljs.core.next.call(null,more);
x = G__24189;
y = G__24190;
more = G__24191;
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
var G__24188 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24188__delegate.call(this, x, y, more);
};
G__24188.cljs$lang$maxFixedArity = 2;
G__24188.cljs$lang$applyTo = (function (arglist__24192){
var x = cljs.core.first(arglist__24192);
var y = cljs.core.first(cljs.core.next(arglist__24192));
var more = cljs.core.rest(cljs.core.next(arglist__24192));
return G__24188__delegate.call(this, x, y, more);
});
return G__24188;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___24184.call(this,x);
case  2 :
return _GT__EQ___24185.call(this,x,y);
default:
return _GT__EQ___24186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___24186.cljs$lang$applyTo;
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
var max__24193 = (function (x){
return x;
});
var max__24194 = (function (x,y){
return ((x > y) ? x : y);
});
var max__24195 = (function() { 
var G__24197__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__24197 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24197__delegate.call(this, x, y, more);
};
G__24197.cljs$lang$maxFixedArity = 2;
G__24197.cljs$lang$applyTo = (function (arglist__24198){
var x = cljs.core.first(arglist__24198);
var y = cljs.core.first(cljs.core.next(arglist__24198));
var more = cljs.core.rest(cljs.core.next(arglist__24198));
return G__24197__delegate.call(this, x, y, more);
});
return G__24197;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__24193.call(this,x);
case  2 :
return max__24194.call(this,x,y);
default:
return max__24195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__24195.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__24199 = (function (x){
return x;
});
var min__24200 = (function (x,y){
return ((x < y) ? x : y);
});
var min__24201 = (function() { 
var G__24203__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__24203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24203__delegate.call(this, x, y, more);
};
G__24203.cljs$lang$maxFixedArity = 2;
G__24203.cljs$lang$applyTo = (function (arglist__24204){
var x = cljs.core.first(arglist__24204);
var y = cljs.core.first(cljs.core.next(arglist__24204));
var more = cljs.core.rest(cljs.core.next(arglist__24204));
return G__24203__delegate.call(this, x, y, more);
});
return G__24203;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__24199.call(this,x);
case  2 :
return min__24200.call(this,x,y);
default:
return min__24201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__24201.cljs$lang$applyTo;
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
var rem__24205 = (n % d);

return cljs.core.fix.call(null,((n - rem__24205) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__24206 = cljs.core.quot.call(null,n,d);

return (n - (d * q__24206));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__24207 = (function (){
return Math.random.call(null);
});
var rand__24208 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__24207.call(this);
case  1 :
return rand__24208.call(this,n);
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
var _EQ__EQ___24210 = (function (x){
return true;
});
var _EQ__EQ___24211 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___24212 = (function() { 
var G__24214__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__24215 = y;
var G__24216 = cljs.core.first.call(null,more);
var G__24217 = cljs.core.next.call(null,more);
x = G__24215;
y = G__24216;
more = G__24217;
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
var G__24214 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24214__delegate.call(this, x, y, more);
};
G__24214.cljs$lang$maxFixedArity = 2;
G__24214.cljs$lang$applyTo = (function (arglist__24218){
var x = cljs.core.first(arglist__24218);
var y = cljs.core.first(cljs.core.next(arglist__24218));
var more = cljs.core.rest(cljs.core.next(arglist__24218));
return G__24214__delegate.call(this, x, y, more);
});
return G__24214;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___24210.call(this,x);
case  2 :
return _EQ__EQ___24211.call(this,x,y);
default:
return _EQ__EQ___24212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___24212.cljs$lang$applyTo;
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
var n__24219 = n;
var xs__24220 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____24221 = xs__24220;

if(cljs.core.truth_(and__3546__auto____24221))
{return (n__24219 > 0);
} else
{return and__3546__auto____24221;
}
})()))
{{
var G__24222 = (n__24219 - 1);
var G__24223 = cljs.core.next.call(null,xs__24220);
n__24219 = G__24222;
xs__24220 = G__24223;
continue;
}
} else
{return xs__24220;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__24228 = null;
var G__24228__24229 = (function (coll,n){
var temp__3695__auto____24224 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____24224))
{var xs__24225 = temp__3695__auto____24224;

return cljs.core.first.call(null,xs__24225);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__24228__24230 = (function (coll,n,not_found){
var temp__3695__auto____24226 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____24226))
{var xs__24227 = temp__3695__auto____24226;

return cljs.core.first.call(null,xs__24227);
} else
{return not_found;
}
});
G__24228 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__24228__24229.call(this,coll,n);
case  3 :
return G__24228__24230.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24228;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___24232 = (function (){
return "";
});
var str_STAR___24233 = (function (x){
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
var str_STAR___24234 = (function() { 
var G__24236__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__24237 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__24238 = cljs.core.next.call(null,more);
sb = G__24237;
more = G__24238;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__24236 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__24236__delegate.call(this, x, ys);
};
G__24236.cljs$lang$maxFixedArity = 1;
G__24236.cljs$lang$applyTo = (function (arglist__24239){
var x = cljs.core.first(arglist__24239);
var ys = cljs.core.rest(arglist__24239);
return G__24236__delegate.call(this, x, ys);
});
return G__24236;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___24232.call(this);
case  1 :
return str_STAR___24233.call(this,x);
default:
return str_STAR___24234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___24234.cljs$lang$applyTo;
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
var str__24240 = (function (){
return "";
});
var str__24241 = (function (x){
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
var str__24242 = (function() { 
var G__24244__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__24244 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__24244__delegate.call(this, x, ys);
};
G__24244.cljs$lang$maxFixedArity = 1;
G__24244.cljs$lang$applyTo = (function (arglist__24245){
var x = cljs.core.first(arglist__24245);
var ys = cljs.core.rest(arglist__24245);
return G__24244__delegate.call(this, x, ys);
});
return G__24244;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__24240.call(this);
case  1 :
return str__24241.call(this,x);
default:
return str__24242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__24242.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__24246 = (function (s,start){
return s.substring(start);
});
var subs__24247 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__24246.call(this,s,start);
case  3 :
return subs__24247.call(this,s,start,end);
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
var symbol__24249 = (function (name){
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
var symbol__24250 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__24249.call(this,ns);
case  2 :
return symbol__24250.call(this,ns,name);
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
var keyword__24252 = (function (name){
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
var keyword__24253 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__24252.call(this,ns);
case  2 :
return keyword__24253.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__24255 = cljs.core.seq.call(null,x);
var ys__24256 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__24255 === null)))
{return (ys__24256 === null);
} else
{if(cljs.core.truth_((ys__24256 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__24255),cljs.core.first.call(null,ys__24256))))
{{
var G__24257 = cljs.core.next.call(null,xs__24255);
var G__24258 = cljs.core.next.call(null,ys__24256);
xs__24255 = G__24257;
ys__24256 = G__24258;
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
return cljs.core.reduce.call(null,(function (p1__24259_SHARP_,p2__24260_SHARP_){
return cljs.core.hash_combine.call(null,p1__24259_SHARP_,cljs.core.hash.call(null,p2__24260_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__24261__24262 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__24261__24262))
{var G__24264__24266 = cljs.core.first.call(null,G__24261__24262);
var vec__24265__24267 = G__24264__24266;
var key_name__24268 = cljs.core.nth.call(null,vec__24265__24267,0,null);
var f__24269 = cljs.core.nth.call(null,vec__24265__24267,1,null);
var G__24261__24270 = G__24261__24262;

var G__24264__24271 = G__24264__24266;
var G__24261__24272 = G__24261__24270;

while(true){
var vec__24273__24274 = G__24264__24271;
var key_name__24275 = cljs.core.nth.call(null,vec__24273__24274,0,null);
var f__24276 = cljs.core.nth.call(null,vec__24273__24274,1,null);
var G__24261__24277 = G__24261__24272;

var str_name__24278 = cljs.core.name.call(null,key_name__24275);

obj[str_name__24278] = f__24276;
var temp__3698__auto____24279 = cljs.core.next.call(null,G__24261__24277);

if(cljs.core.truth_(temp__3698__auto____24279))
{var G__24261__24280 = temp__3698__auto____24279;

{
var G__24281 = cljs.core.first.call(null,G__24261__24280);
var G__24282 = G__24261__24280;
G__24264__24271 = G__24281;
G__24261__24272 = G__24282;
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
var this__24283 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24284 = this;
return (new cljs.core.List(this__24284.meta,o,coll,(this__24284.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24285 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24286 = this;
return this__24286.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__24287 = this;
return this__24287.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__24288 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__24289 = this;
return this__24289.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__24290 = this;
return this__24290.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24291 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24292 = this;
return (new cljs.core.List(meta,this__24292.first,this__24292.rest,this__24292.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24293 = this;
return this__24293.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24294 = this;
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
var this__24295 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24296 = this;
return (new cljs.core.List(this__24296.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24297 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24298 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__24299 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__24300 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__24301 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__24302 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24303 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24304 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24305 = this;
return this__24305.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24306 = this;
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
list.cljs$lang$applyTo = (function (arglist__24307){
var items = cljs.core.seq( arglist__24307 );;
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
var this__24308 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__24309 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24310 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24311 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__24311.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24312 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__24313 = this;
return this__24313.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__24314 = this;
if(cljs.core.truth_((this__24314.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__24314.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24315 = this;
return this__24315.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24316 = this;
return (new cljs.core.Cons(meta,this__24316.first,this__24316.rest));
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
var G__24317 = null;
var G__24317__24318 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__24317__24319 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__24317 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__24317__24318.call(this,string,f);
case  3 :
return G__24317__24319.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24317;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__24321 = null;
var G__24321__24322 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__24321__24323 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__24321 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__24321__24322.call(this,string,k);
case  3 :
return G__24321__24323.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24321;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__24325 = null;
var G__24325__24326 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__24325__24327 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__24325 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__24325__24326.call(this,string,n);
case  3 :
return G__24325__24327.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24325;
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
var G__24335 = null;
var G__24335__24336 = (function (tsym24329,coll){
var tsym24329__24331 = this;

var this$__24332 = tsym24329__24331;

return cljs.core.get.call(null,coll,this$__24332.toString());
});
var G__24335__24337 = (function (tsym24330,coll,not_found){
var tsym24330__24333 = this;

var this$__24334 = tsym24330__24333;

return cljs.core.get.call(null,coll,this$__24334.toString(),not_found);
});
G__24335 = function(tsym24330,coll,not_found){
switch(arguments.length){
case  2 :
return G__24335__24336.call(this,tsym24330,coll);
case  3 :
return G__24335__24337.call(this,tsym24330,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24335;
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
var x__24339 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__24339;
} else
{lazy_seq.x = x__24339.call(null);
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
var this__24340 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__24341 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24342 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24343 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__24343.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24344 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__24345 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__24346 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24347 = this;
return this__24347.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24348 = this;
return (new cljs.core.LazySeq(meta,this__24348.realized,this__24348.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__24349 = cljs.core.array.call(null);

var s__24350 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__24350)))
{ary__24349.push(cljs.core.first.call(null,s__24350));
{
var G__24351 = cljs.core.next.call(null,s__24350);
s__24350 = G__24351;
continue;
}
} else
{return ary__24349;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__24352 = s;
var i__24353 = n;
var sum__24354 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____24355 = (i__24353 > 0);

if(cljs.core.truth_(and__3546__auto____24355))
{return cljs.core.seq.call(null,s__24352);
} else
{return and__3546__auto____24355;
}
})()))
{{
var G__24356 = cljs.core.next.call(null,s__24352);
var G__24357 = (i__24353 - 1);
var G__24358 = (sum__24354 + 1);
s__24352 = G__24356;
i__24353 = G__24357;
sum__24354 = G__24358;
continue;
}
} else
{return sum__24354;
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
var concat__24362 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__24363 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__24364 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__24359 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__24359))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__24359),concat.call(null,cljs.core.rest.call(null,s__24359),y));
} else
{return y;
}
})));
});
var concat__24365 = (function() { 
var G__24367__delegate = function (x,y,zs){
var cat__24361 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__24360 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__24360))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__24360),cat.call(null,cljs.core.rest.call(null,xys__24360),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__24361.call(null,concat.call(null,x,y),zs);
};
var G__24367 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24367__delegate.call(this, x, y, zs);
};
G__24367.cljs$lang$maxFixedArity = 2;
G__24367.cljs$lang$applyTo = (function (arglist__24368){
var x = cljs.core.first(arglist__24368);
var y = cljs.core.first(cljs.core.next(arglist__24368));
var zs = cljs.core.rest(cljs.core.next(arglist__24368));
return G__24367__delegate.call(this, x, y, zs);
});
return G__24367;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__24362.call(this);
case  1 :
return concat__24363.call(this,x);
case  2 :
return concat__24364.call(this,x,y);
default:
return concat__24365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__24365.cljs$lang$applyTo;
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
var list_STAR___24369 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___24370 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___24371 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___24372 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___24373 = (function() { 
var G__24375__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__24375 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__24375__delegate.call(this, a, b, c, d, more);
};
G__24375.cljs$lang$maxFixedArity = 4;
G__24375.cljs$lang$applyTo = (function (arglist__24376){
var a = cljs.core.first(arglist__24376);
var b = cljs.core.first(cljs.core.next(arglist__24376));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24376)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24376))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24376))));
return G__24375__delegate.call(this, a, b, c, d, more);
});
return G__24375;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___24369.call(this,a);
case  2 :
return list_STAR___24370.call(this,a,b);
case  3 :
return list_STAR___24371.call(this,a,b,c);
case  4 :
return list_STAR___24372.call(this,a,b,c,d);
default:
return list_STAR___24373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___24373.cljs$lang$applyTo;
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
var apply__24386 = (function (f,args){
var fixed_arity__24377 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__24377 + 1)) <= fixed_arity__24377)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__24387 = (function (f,x,args){
var arglist__24378 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__24379 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__24378,fixed_arity__24379) <= fixed_arity__24379)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__24378));
} else
{return f.cljs$lang$applyTo(arglist__24378);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__24378));
}
});
var apply__24388 = (function (f,x,y,args){
var arglist__24380 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__24381 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__24380,fixed_arity__24381) <= fixed_arity__24381)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__24380));
} else
{return f.cljs$lang$applyTo(arglist__24380);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__24380));
}
});
var apply__24389 = (function (f,x,y,z,args){
var arglist__24382 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__24383 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__24382,fixed_arity__24383) <= fixed_arity__24383)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__24382));
} else
{return f.cljs$lang$applyTo(arglist__24382);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__24382));
}
});
var apply__24390 = (function() { 
var G__24392__delegate = function (f,a,b,c,d,args){
var arglist__24384 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__24385 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__24384,fixed_arity__24385) <= fixed_arity__24385)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__24384));
} else
{return f.cljs$lang$applyTo(arglist__24384);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__24384));
}
};
var G__24392 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__24392__delegate.call(this, f, a, b, c, d, args);
};
G__24392.cljs$lang$maxFixedArity = 5;
G__24392.cljs$lang$applyTo = (function (arglist__24393){
var f = cljs.core.first(arglist__24393);
var a = cljs.core.first(cljs.core.next(arglist__24393));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24393)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24393))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24393)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24393)))));
return G__24392__delegate.call(this, f, a, b, c, d, args);
});
return G__24392;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__24386.call(this,f,a);
case  3 :
return apply__24387.call(this,f,a,b);
case  4 :
return apply__24388.call(this,f,a,b,c);
case  5 :
return apply__24389.call(this,f,a,b,c,d);
default:
return apply__24390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__24390.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__24394){
var obj = cljs.core.first(arglist__24394);
var f = cljs.core.first(cljs.core.next(arglist__24394));
var args = cljs.core.rest(cljs.core.next(arglist__24394));
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
var not_EQ___24395 = (function (x){
return false;
});
var not_EQ___24396 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___24397 = (function() { 
var G__24399__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__24399 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24399__delegate.call(this, x, y, more);
};
G__24399.cljs$lang$maxFixedArity = 2;
G__24399.cljs$lang$applyTo = (function (arglist__24400){
var x = cljs.core.first(arglist__24400);
var y = cljs.core.first(cljs.core.next(arglist__24400));
var more = cljs.core.rest(cljs.core.next(arglist__24400));
return G__24399__delegate.call(this, x, y, more);
});
return G__24399;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___24395.call(this,x);
case  2 :
return not_EQ___24396.call(this,x,y);
default:
return not_EQ___24397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___24397.cljs$lang$applyTo;
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
var G__24401 = pred;
var G__24402 = cljs.core.next.call(null,coll);
pred = G__24401;
coll = G__24402;
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
{var or__3548__auto____24403 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____24403))
{return or__3548__auto____24403;
} else
{{
var G__24404 = pred;
var G__24405 = cljs.core.next.call(null,coll);
pred = G__24404;
coll = G__24405;
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
var G__24406 = null;
var G__24406__24407 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__24406__24408 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__24406__24409 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__24406__24410 = (function() { 
var G__24412__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__24412 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24412__delegate.call(this, x, y, zs);
};
G__24412.cljs$lang$maxFixedArity = 2;
G__24412.cljs$lang$applyTo = (function (arglist__24413){
var x = cljs.core.first(arglist__24413);
var y = cljs.core.first(cljs.core.next(arglist__24413));
var zs = cljs.core.rest(cljs.core.next(arglist__24413));
return G__24412__delegate.call(this, x, y, zs);
});
return G__24412;
})()
;
G__24406 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__24406__24407.call(this);
case  1 :
return G__24406__24408.call(this,x);
case  2 :
return G__24406__24409.call(this,x,y);
default:
return G__24406__24410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24406.cljs$lang$maxFixedArity = 2;
G__24406.cljs$lang$applyTo = G__24406__24410.cljs$lang$applyTo;
return G__24406;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__24414__delegate = function (args){
return x;
};
var G__24414 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24414__delegate.call(this, args);
};
G__24414.cljs$lang$maxFixedArity = 0;
G__24414.cljs$lang$applyTo = (function (arglist__24415){
var args = cljs.core.seq( arglist__24415 );;
return G__24414__delegate.call(this, args);
});
return G__24414;
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
var comp__24419 = (function (){
return cljs.core.identity;
});
var comp__24420 = (function (f){
return f;
});
var comp__24421 = (function (f,g){
return (function() {
var G__24425 = null;
var G__24425__24426 = (function (){
return f.call(null,g.call(null));
});
var G__24425__24427 = (function (x){
return f.call(null,g.call(null,x));
});
var G__24425__24428 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__24425__24429 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__24425__24430 = (function() { 
var G__24432__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__24432 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24432__delegate.call(this, x, y, z, args);
};
G__24432.cljs$lang$maxFixedArity = 3;
G__24432.cljs$lang$applyTo = (function (arglist__24433){
var x = cljs.core.first(arglist__24433);
var y = cljs.core.first(cljs.core.next(arglist__24433));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24433)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24433)));
return G__24432__delegate.call(this, x, y, z, args);
});
return G__24432;
})()
;
G__24425 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__24425__24426.call(this);
case  1 :
return G__24425__24427.call(this,x);
case  2 :
return G__24425__24428.call(this,x,y);
case  3 :
return G__24425__24429.call(this,x,y,z);
default:
return G__24425__24430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24425.cljs$lang$maxFixedArity = 3;
G__24425.cljs$lang$applyTo = G__24425__24430.cljs$lang$applyTo;
return G__24425;
})()
});
var comp__24422 = (function (f,g,h){
return (function() {
var G__24434 = null;
var G__24434__24435 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__24434__24436 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__24434__24437 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__24434__24438 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__24434__24439 = (function() { 
var G__24441__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__24441 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24441__delegate.call(this, x, y, z, args);
};
G__24441.cljs$lang$maxFixedArity = 3;
G__24441.cljs$lang$applyTo = (function (arglist__24442){
var x = cljs.core.first(arglist__24442);
var y = cljs.core.first(cljs.core.next(arglist__24442));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24442)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24442)));
return G__24441__delegate.call(this, x, y, z, args);
});
return G__24441;
})()
;
G__24434 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__24434__24435.call(this);
case  1 :
return G__24434__24436.call(this,x);
case  2 :
return G__24434__24437.call(this,x,y);
case  3 :
return G__24434__24438.call(this,x,y,z);
default:
return G__24434__24439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24434.cljs$lang$maxFixedArity = 3;
G__24434.cljs$lang$applyTo = G__24434__24439.cljs$lang$applyTo;
return G__24434;
})()
});
var comp__24423 = (function() { 
var G__24443__delegate = function (f1,f2,f3,fs){
var fs__24416 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__24444__delegate = function (args){
var ret__24417 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__24416),args);
var fs__24418 = cljs.core.next.call(null,fs__24416);

while(true){
if(cljs.core.truth_(fs__24418))
{{
var G__24445 = cljs.core.first.call(null,fs__24418).call(null,ret__24417);
var G__24446 = cljs.core.next.call(null,fs__24418);
ret__24417 = G__24445;
fs__24418 = G__24446;
continue;
}
} else
{return ret__24417;
}
break;
}
};
var G__24444 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24444__delegate.call(this, args);
};
G__24444.cljs$lang$maxFixedArity = 0;
G__24444.cljs$lang$applyTo = (function (arglist__24447){
var args = cljs.core.seq( arglist__24447 );;
return G__24444__delegate.call(this, args);
});
return G__24444;
})()
;
};
var G__24443 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24443__delegate.call(this, f1, f2, f3, fs);
};
G__24443.cljs$lang$maxFixedArity = 3;
G__24443.cljs$lang$applyTo = (function (arglist__24448){
var f1 = cljs.core.first(arglist__24448);
var f2 = cljs.core.first(cljs.core.next(arglist__24448));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24448)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24448)));
return G__24443__delegate.call(this, f1, f2, f3, fs);
});
return G__24443;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__24419.call(this);
case  1 :
return comp__24420.call(this,f1);
case  2 :
return comp__24421.call(this,f1,f2);
case  3 :
return comp__24422.call(this,f1,f2,f3);
default:
return comp__24423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__24423.cljs$lang$applyTo;
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
var partial__24449 = (function (f,arg1){
return (function() { 
var G__24454__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__24454 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24454__delegate.call(this, args);
};
G__24454.cljs$lang$maxFixedArity = 0;
G__24454.cljs$lang$applyTo = (function (arglist__24455){
var args = cljs.core.seq( arglist__24455 );;
return G__24454__delegate.call(this, args);
});
return G__24454;
})()
;
});
var partial__24450 = (function (f,arg1,arg2){
return (function() { 
var G__24456__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__24456 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24456__delegate.call(this, args);
};
G__24456.cljs$lang$maxFixedArity = 0;
G__24456.cljs$lang$applyTo = (function (arglist__24457){
var args = cljs.core.seq( arglist__24457 );;
return G__24456__delegate.call(this, args);
});
return G__24456;
})()
;
});
var partial__24451 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__24458__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__24458 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24458__delegate.call(this, args);
};
G__24458.cljs$lang$maxFixedArity = 0;
G__24458.cljs$lang$applyTo = (function (arglist__24459){
var args = cljs.core.seq( arglist__24459 );;
return G__24458__delegate.call(this, args);
});
return G__24458;
})()
;
});
var partial__24452 = (function() { 
var G__24460__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__24461__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__24461 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24461__delegate.call(this, args);
};
G__24461.cljs$lang$maxFixedArity = 0;
G__24461.cljs$lang$applyTo = (function (arglist__24462){
var args = cljs.core.seq( arglist__24462 );;
return G__24461__delegate.call(this, args);
});
return G__24461;
})()
;
};
var G__24460 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__24460__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__24460.cljs$lang$maxFixedArity = 4;
G__24460.cljs$lang$applyTo = (function (arglist__24463){
var f = cljs.core.first(arglist__24463);
var arg1 = cljs.core.first(cljs.core.next(arglist__24463));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24463)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24463))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24463))));
return G__24460__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__24460;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__24449.call(this,f,arg1);
case  3 :
return partial__24450.call(this,f,arg1,arg2);
case  4 :
return partial__24451.call(this,f,arg1,arg2,arg3);
default:
return partial__24452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__24452.cljs$lang$applyTo;
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
var fnil__24464 = (function (f,x){
return (function() {
var G__24468 = null;
var G__24468__24469 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__24468__24470 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__24468__24471 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__24468__24472 = (function() { 
var G__24474__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__24474 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24474__delegate.call(this, a, b, c, ds);
};
G__24474.cljs$lang$maxFixedArity = 3;
G__24474.cljs$lang$applyTo = (function (arglist__24475){
var a = cljs.core.first(arglist__24475);
var b = cljs.core.first(cljs.core.next(arglist__24475));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24475)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24475)));
return G__24474__delegate.call(this, a, b, c, ds);
});
return G__24474;
})()
;
G__24468 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__24468__24469.call(this,a);
case  2 :
return G__24468__24470.call(this,a,b);
case  3 :
return G__24468__24471.call(this,a,b,c);
default:
return G__24468__24472.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24468.cljs$lang$maxFixedArity = 3;
G__24468.cljs$lang$applyTo = G__24468__24472.cljs$lang$applyTo;
return G__24468;
})()
});
var fnil__24465 = (function (f,x,y){
return (function() {
var G__24476 = null;
var G__24476__24477 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__24476__24478 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__24476__24479 = (function() { 
var G__24481__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__24481 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24481__delegate.call(this, a, b, c, ds);
};
G__24481.cljs$lang$maxFixedArity = 3;
G__24481.cljs$lang$applyTo = (function (arglist__24482){
var a = cljs.core.first(arglist__24482);
var b = cljs.core.first(cljs.core.next(arglist__24482));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24482)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24482)));
return G__24481__delegate.call(this, a, b, c, ds);
});
return G__24481;
})()
;
G__24476 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__24476__24477.call(this,a,b);
case  3 :
return G__24476__24478.call(this,a,b,c);
default:
return G__24476__24479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24476.cljs$lang$maxFixedArity = 3;
G__24476.cljs$lang$applyTo = G__24476__24479.cljs$lang$applyTo;
return G__24476;
})()
});
var fnil__24466 = (function (f,x,y,z){
return (function() {
var G__24483 = null;
var G__24483__24484 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__24483__24485 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__24483__24486 = (function() { 
var G__24488__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__24488 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24488__delegate.call(this, a, b, c, ds);
};
G__24488.cljs$lang$maxFixedArity = 3;
G__24488.cljs$lang$applyTo = (function (arglist__24489){
var a = cljs.core.first(arglist__24489);
var b = cljs.core.first(cljs.core.next(arglist__24489));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24489)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24489)));
return G__24488__delegate.call(this, a, b, c, ds);
});
return G__24488;
})()
;
G__24483 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__24483__24484.call(this,a,b);
case  3 :
return G__24483__24485.call(this,a,b,c);
default:
return G__24483__24486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24483.cljs$lang$maxFixedArity = 3;
G__24483.cljs$lang$applyTo = G__24483__24486.cljs$lang$applyTo;
return G__24483;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__24464.call(this,f,x);
case  3 :
return fnil__24465.call(this,f,x,y);
case  4 :
return fnil__24466.call(this,f,x,y,z);
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
var mapi__24492 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24490 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24490))
{var s__24491 = temp__3698__auto____24490;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__24491)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__24491)));
} else
{return null;
}
})));
});

return mapi__24492.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24493 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24493))
{var s__24494 = temp__3698__auto____24493;

var x__24495 = f.call(null,cljs.core.first.call(null,s__24494));

if(cljs.core.truth_((x__24495 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__24494));
} else
{return cljs.core.cons.call(null,x__24495,keep.call(null,f,cljs.core.rest.call(null,s__24494)));
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
var keepi__24505 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24502 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24502))
{var s__24503 = temp__3698__auto____24502;

var x__24504 = f.call(null,idx,cljs.core.first.call(null,s__24503));

if(cljs.core.truth_((x__24504 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__24503));
} else
{return cljs.core.cons.call(null,x__24504,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__24503)));
}
} else
{return null;
}
})));
});

return keepi__24505.call(null,0,coll);
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
var every_pred__24550 = (function (p){
return (function() {
var ep1 = null;
var ep1__24555 = (function (){
return true;
});
var ep1__24556 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__24557 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24512 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____24512))
{return p.call(null,y);
} else
{return and__3546__auto____24512;
}
})());
});
var ep1__24558 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24513 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____24513))
{var and__3546__auto____24514 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____24514))
{return p.call(null,z);
} else
{return and__3546__auto____24514;
}
} else
{return and__3546__auto____24513;
}
})());
});
var ep1__24559 = (function() { 
var G__24561__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24515 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____24515))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____24515;
}
})());
};
var G__24561 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24561__delegate.call(this, x, y, z, args);
};
G__24561.cljs$lang$maxFixedArity = 3;
G__24561.cljs$lang$applyTo = (function (arglist__24562){
var x = cljs.core.first(arglist__24562);
var y = cljs.core.first(cljs.core.next(arglist__24562));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24562)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24562)));
return G__24561__delegate.call(this, x, y, z, args);
});
return G__24561;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__24555.call(this);
case  1 :
return ep1__24556.call(this,x);
case  2 :
return ep1__24557.call(this,x,y);
case  3 :
return ep1__24558.call(this,x,y,z);
default:
return ep1__24559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__24559.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__24551 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__24563 = (function (){
return true;
});
var ep2__24564 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24516 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____24516))
{return p2.call(null,x);
} else
{return and__3546__auto____24516;
}
})());
});
var ep2__24565 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24517 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____24517))
{var and__3546__auto____24518 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____24518))
{var and__3546__auto____24519 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____24519))
{return p2.call(null,y);
} else
{return and__3546__auto____24519;
}
} else
{return and__3546__auto____24518;
}
} else
{return and__3546__auto____24517;
}
})());
});
var ep2__24566 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24520 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____24520))
{var and__3546__auto____24521 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____24521))
{var and__3546__auto____24522 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____24522))
{var and__3546__auto____24523 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____24523))
{var and__3546__auto____24524 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____24524))
{return p2.call(null,z);
} else
{return and__3546__auto____24524;
}
} else
{return and__3546__auto____24523;
}
} else
{return and__3546__auto____24522;
}
} else
{return and__3546__auto____24521;
}
} else
{return and__3546__auto____24520;
}
})());
});
var ep2__24567 = (function() { 
var G__24569__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24525 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____24525))
{return cljs.core.every_QMARK_.call(null,(function (p1__24496_SHARP_){
var and__3546__auto____24526 = p1.call(null,p1__24496_SHARP_);

if(cljs.core.truth_(and__3546__auto____24526))
{return p2.call(null,p1__24496_SHARP_);
} else
{return and__3546__auto____24526;
}
}),args);
} else
{return and__3546__auto____24525;
}
})());
};
var G__24569 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24569__delegate.call(this, x, y, z, args);
};
G__24569.cljs$lang$maxFixedArity = 3;
G__24569.cljs$lang$applyTo = (function (arglist__24570){
var x = cljs.core.first(arglist__24570);
var y = cljs.core.first(cljs.core.next(arglist__24570));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24570)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24570)));
return G__24569__delegate.call(this, x, y, z, args);
});
return G__24569;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__24563.call(this);
case  1 :
return ep2__24564.call(this,x);
case  2 :
return ep2__24565.call(this,x,y);
case  3 :
return ep2__24566.call(this,x,y,z);
default:
return ep2__24567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__24567.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__24552 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__24571 = (function (){
return true;
});
var ep3__24572 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24527 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____24527))
{var and__3546__auto____24528 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____24528))
{return p3.call(null,x);
} else
{return and__3546__auto____24528;
}
} else
{return and__3546__auto____24527;
}
})());
});
var ep3__24573 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24529 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____24529))
{var and__3546__auto____24530 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____24530))
{var and__3546__auto____24531 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____24531))
{var and__3546__auto____24532 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____24532))
{var and__3546__auto____24533 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____24533))
{return p3.call(null,y);
} else
{return and__3546__auto____24533;
}
} else
{return and__3546__auto____24532;
}
} else
{return and__3546__auto____24531;
}
} else
{return and__3546__auto____24530;
}
} else
{return and__3546__auto____24529;
}
})());
});
var ep3__24574 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24534 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____24534))
{var and__3546__auto____24535 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____24535))
{var and__3546__auto____24536 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____24536))
{var and__3546__auto____24537 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____24537))
{var and__3546__auto____24538 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____24538))
{var and__3546__auto____24539 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____24539))
{var and__3546__auto____24540 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____24540))
{var and__3546__auto____24541 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____24541))
{return p3.call(null,z);
} else
{return and__3546__auto____24541;
}
} else
{return and__3546__auto____24540;
}
} else
{return and__3546__auto____24539;
}
} else
{return and__3546__auto____24538;
}
} else
{return and__3546__auto____24537;
}
} else
{return and__3546__auto____24536;
}
} else
{return and__3546__auto____24535;
}
} else
{return and__3546__auto____24534;
}
})());
});
var ep3__24575 = (function() { 
var G__24577__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24542 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____24542))
{return cljs.core.every_QMARK_.call(null,(function (p1__24497_SHARP_){
var and__3546__auto____24543 = p1.call(null,p1__24497_SHARP_);

if(cljs.core.truth_(and__3546__auto____24543))
{var and__3546__auto____24544 = p2.call(null,p1__24497_SHARP_);

if(cljs.core.truth_(and__3546__auto____24544))
{return p3.call(null,p1__24497_SHARP_);
} else
{return and__3546__auto____24544;
}
} else
{return and__3546__auto____24543;
}
}),args);
} else
{return and__3546__auto____24542;
}
})());
};
var G__24577 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24577__delegate.call(this, x, y, z, args);
};
G__24577.cljs$lang$maxFixedArity = 3;
G__24577.cljs$lang$applyTo = (function (arglist__24578){
var x = cljs.core.first(arglist__24578);
var y = cljs.core.first(cljs.core.next(arglist__24578));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24578)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24578)));
return G__24577__delegate.call(this, x, y, z, args);
});
return G__24577;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__24571.call(this);
case  1 :
return ep3__24572.call(this,x);
case  2 :
return ep3__24573.call(this,x,y);
case  3 :
return ep3__24574.call(this,x,y,z);
default:
return ep3__24575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__24575.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__24553 = (function() { 
var G__24579__delegate = function (p1,p2,p3,ps){
var ps__24545 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__24580 = (function (){
return true;
});
var epn__24581 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__24498_SHARP_){
return p1__24498_SHARP_.call(null,x);
}),ps__24545);
});
var epn__24582 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__24499_SHARP_){
var and__3546__auto____24546 = p1__24499_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____24546))
{return p1__24499_SHARP_.call(null,y);
} else
{return and__3546__auto____24546;
}
}),ps__24545);
});
var epn__24583 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__24500_SHARP_){
var and__3546__auto____24547 = p1__24500_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____24547))
{var and__3546__auto____24548 = p1__24500_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____24548))
{return p1__24500_SHARP_.call(null,z);
} else
{return and__3546__auto____24548;
}
} else
{return and__3546__auto____24547;
}
}),ps__24545);
});
var epn__24584 = (function() { 
var G__24586__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____24549 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____24549))
{return cljs.core.every_QMARK_.call(null,(function (p1__24501_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__24501_SHARP_,args);
}),ps__24545);
} else
{return and__3546__auto____24549;
}
})());
};
var G__24586 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24586__delegate.call(this, x, y, z, args);
};
G__24586.cljs$lang$maxFixedArity = 3;
G__24586.cljs$lang$applyTo = (function (arglist__24587){
var x = cljs.core.first(arglist__24587);
var y = cljs.core.first(cljs.core.next(arglist__24587));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24587)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24587)));
return G__24586__delegate.call(this, x, y, z, args);
});
return G__24586;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__24580.call(this);
case  1 :
return epn__24581.call(this,x);
case  2 :
return epn__24582.call(this,x,y);
case  3 :
return epn__24583.call(this,x,y,z);
default:
return epn__24584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__24584.cljs$lang$applyTo;
return epn;
})()
};
var G__24579 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24579__delegate.call(this, p1, p2, p3, ps);
};
G__24579.cljs$lang$maxFixedArity = 3;
G__24579.cljs$lang$applyTo = (function (arglist__24588){
var p1 = cljs.core.first(arglist__24588);
var p2 = cljs.core.first(cljs.core.next(arglist__24588));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24588)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24588)));
return G__24579__delegate.call(this, p1, p2, p3, ps);
});
return G__24579;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__24550.call(this,p1);
case  2 :
return every_pred__24551.call(this,p1,p2);
case  3 :
return every_pred__24552.call(this,p1,p2,p3);
default:
return every_pred__24553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__24553.cljs$lang$applyTo;
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
var some_fn__24628 = (function (p){
return (function() {
var sp1 = null;
var sp1__24633 = (function (){
return null;
});
var sp1__24634 = (function (x){
return p.call(null,x);
});
var sp1__24635 = (function (x,y){
var or__3548__auto____24590 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____24590))
{return or__3548__auto____24590;
} else
{return p.call(null,y);
}
});
var sp1__24636 = (function (x,y,z){
var or__3548__auto____24591 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____24591))
{return or__3548__auto____24591;
} else
{var or__3548__auto____24592 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____24592))
{return or__3548__auto____24592;
} else
{return p.call(null,z);
}
}
});
var sp1__24637 = (function() { 
var G__24639__delegate = function (x,y,z,args){
var or__3548__auto____24593 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____24593))
{return or__3548__auto____24593;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__24639 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24639__delegate.call(this, x, y, z, args);
};
G__24639.cljs$lang$maxFixedArity = 3;
G__24639.cljs$lang$applyTo = (function (arglist__24640){
var x = cljs.core.first(arglist__24640);
var y = cljs.core.first(cljs.core.next(arglist__24640));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24640)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24640)));
return G__24639__delegate.call(this, x, y, z, args);
});
return G__24639;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__24633.call(this);
case  1 :
return sp1__24634.call(this,x);
case  2 :
return sp1__24635.call(this,x,y);
case  3 :
return sp1__24636.call(this,x,y,z);
default:
return sp1__24637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__24637.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__24629 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__24641 = (function (){
return null;
});
var sp2__24642 = (function (x){
var or__3548__auto____24594 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____24594))
{return or__3548__auto____24594;
} else
{return p2.call(null,x);
}
});
var sp2__24643 = (function (x,y){
var or__3548__auto____24595 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____24595))
{return or__3548__auto____24595;
} else
{var or__3548__auto____24596 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____24596))
{return or__3548__auto____24596;
} else
{var or__3548__auto____24597 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____24597))
{return or__3548__auto____24597;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__24644 = (function (x,y,z){
var or__3548__auto____24598 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____24598))
{return or__3548__auto____24598;
} else
{var or__3548__auto____24599 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____24599))
{return or__3548__auto____24599;
} else
{var or__3548__auto____24600 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____24600))
{return or__3548__auto____24600;
} else
{var or__3548__auto____24601 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____24601))
{return or__3548__auto____24601;
} else
{var or__3548__auto____24602 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____24602))
{return or__3548__auto____24602;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__24645 = (function() { 
var G__24647__delegate = function (x,y,z,args){
var or__3548__auto____24603 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____24603))
{return or__3548__auto____24603;
} else
{return cljs.core.some.call(null,(function (p1__24506_SHARP_){
var or__3548__auto____24604 = p1.call(null,p1__24506_SHARP_);

if(cljs.core.truth_(or__3548__auto____24604))
{return or__3548__auto____24604;
} else
{return p2.call(null,p1__24506_SHARP_);
}
}),args);
}
};
var G__24647 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24647__delegate.call(this, x, y, z, args);
};
G__24647.cljs$lang$maxFixedArity = 3;
G__24647.cljs$lang$applyTo = (function (arglist__24648){
var x = cljs.core.first(arglist__24648);
var y = cljs.core.first(cljs.core.next(arglist__24648));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24648)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24648)));
return G__24647__delegate.call(this, x, y, z, args);
});
return G__24647;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__24641.call(this);
case  1 :
return sp2__24642.call(this,x);
case  2 :
return sp2__24643.call(this,x,y);
case  3 :
return sp2__24644.call(this,x,y,z);
default:
return sp2__24645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__24645.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__24630 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__24649 = (function (){
return null;
});
var sp3__24650 = (function (x){
var or__3548__auto____24605 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____24605))
{return or__3548__auto____24605;
} else
{var or__3548__auto____24606 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____24606))
{return or__3548__auto____24606;
} else
{return p3.call(null,x);
}
}
});
var sp3__24651 = (function (x,y){
var or__3548__auto____24607 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____24607))
{return or__3548__auto____24607;
} else
{var or__3548__auto____24608 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____24608))
{return or__3548__auto____24608;
} else
{var or__3548__auto____24609 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____24609))
{return or__3548__auto____24609;
} else
{var or__3548__auto____24610 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____24610))
{return or__3548__auto____24610;
} else
{var or__3548__auto____24611 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____24611))
{return or__3548__auto____24611;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__24652 = (function (x,y,z){
var or__3548__auto____24612 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____24612))
{return or__3548__auto____24612;
} else
{var or__3548__auto____24613 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____24613))
{return or__3548__auto____24613;
} else
{var or__3548__auto____24614 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____24614))
{return or__3548__auto____24614;
} else
{var or__3548__auto____24615 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____24615))
{return or__3548__auto____24615;
} else
{var or__3548__auto____24616 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____24616))
{return or__3548__auto____24616;
} else
{var or__3548__auto____24617 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____24617))
{return or__3548__auto____24617;
} else
{var or__3548__auto____24618 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____24618))
{return or__3548__auto____24618;
} else
{var or__3548__auto____24619 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____24619))
{return or__3548__auto____24619;
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
var sp3__24653 = (function() { 
var G__24655__delegate = function (x,y,z,args){
var or__3548__auto____24620 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____24620))
{return or__3548__auto____24620;
} else
{return cljs.core.some.call(null,(function (p1__24507_SHARP_){
var or__3548__auto____24621 = p1.call(null,p1__24507_SHARP_);

if(cljs.core.truth_(or__3548__auto____24621))
{return or__3548__auto____24621;
} else
{var or__3548__auto____24622 = p2.call(null,p1__24507_SHARP_);

if(cljs.core.truth_(or__3548__auto____24622))
{return or__3548__auto____24622;
} else
{return p3.call(null,p1__24507_SHARP_);
}
}
}),args);
}
};
var G__24655 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24655__delegate.call(this, x, y, z, args);
};
G__24655.cljs$lang$maxFixedArity = 3;
G__24655.cljs$lang$applyTo = (function (arglist__24656){
var x = cljs.core.first(arglist__24656);
var y = cljs.core.first(cljs.core.next(arglist__24656));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24656)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24656)));
return G__24655__delegate.call(this, x, y, z, args);
});
return G__24655;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__24649.call(this);
case  1 :
return sp3__24650.call(this,x);
case  2 :
return sp3__24651.call(this,x,y);
case  3 :
return sp3__24652.call(this,x,y,z);
default:
return sp3__24653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__24653.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__24631 = (function() { 
var G__24657__delegate = function (p1,p2,p3,ps){
var ps__24623 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__24658 = (function (){
return null;
});
var spn__24659 = (function (x){
return cljs.core.some.call(null,(function (p1__24508_SHARP_){
return p1__24508_SHARP_.call(null,x);
}),ps__24623);
});
var spn__24660 = (function (x,y){
return cljs.core.some.call(null,(function (p1__24509_SHARP_){
var or__3548__auto____24624 = p1__24509_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____24624))
{return or__3548__auto____24624;
} else
{return p1__24509_SHARP_.call(null,y);
}
}),ps__24623);
});
var spn__24661 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__24510_SHARP_){
var or__3548__auto____24625 = p1__24510_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____24625))
{return or__3548__auto____24625;
} else
{var or__3548__auto____24626 = p1__24510_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____24626))
{return or__3548__auto____24626;
} else
{return p1__24510_SHARP_.call(null,z);
}
}
}),ps__24623);
});
var spn__24662 = (function() { 
var G__24664__delegate = function (x,y,z,args){
var or__3548__auto____24627 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____24627))
{return or__3548__auto____24627;
} else
{return cljs.core.some.call(null,(function (p1__24511_SHARP_){
return cljs.core.some.call(null,p1__24511_SHARP_,args);
}),ps__24623);
}
};
var G__24664 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24664__delegate.call(this, x, y, z, args);
};
G__24664.cljs$lang$maxFixedArity = 3;
G__24664.cljs$lang$applyTo = (function (arglist__24665){
var x = cljs.core.first(arglist__24665);
var y = cljs.core.first(cljs.core.next(arglist__24665));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24665)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24665)));
return G__24664__delegate.call(this, x, y, z, args);
});
return G__24664;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__24658.call(this);
case  1 :
return spn__24659.call(this,x);
case  2 :
return spn__24660.call(this,x,y);
case  3 :
return spn__24661.call(this,x,y,z);
default:
return spn__24662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__24662.cljs$lang$applyTo;
return spn;
})()
};
var G__24657 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24657__delegate.call(this, p1, p2, p3, ps);
};
G__24657.cljs$lang$maxFixedArity = 3;
G__24657.cljs$lang$applyTo = (function (arglist__24666){
var p1 = cljs.core.first(arglist__24666);
var p2 = cljs.core.first(cljs.core.next(arglist__24666));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24666)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24666)));
return G__24657__delegate.call(this, p1, p2, p3, ps);
});
return G__24657;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__24628.call(this,p1);
case  2 :
return some_fn__24629.call(this,p1,p2);
case  3 :
return some_fn__24630.call(this,p1,p2,p3);
default:
return some_fn__24631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__24631.cljs$lang$applyTo;
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
var map__24679 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24667 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24667))
{var s__24668 = temp__3698__auto____24667;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__24668)),map.call(null,f,cljs.core.rest.call(null,s__24668)));
} else
{return null;
}
})));
});
var map__24680 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__24669 = cljs.core.seq.call(null,c1);
var s2__24670 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____24671 = s1__24669;

if(cljs.core.truth_(and__3546__auto____24671))
{return s2__24670;
} else
{return and__3546__auto____24671;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__24669),cljs.core.first.call(null,s2__24670)),map.call(null,f,cljs.core.rest.call(null,s1__24669),cljs.core.rest.call(null,s2__24670)));
} else
{return null;
}
})));
});
var map__24681 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__24672 = cljs.core.seq.call(null,c1);
var s2__24673 = cljs.core.seq.call(null,c2);
var s3__24674 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____24675 = s1__24672;

if(cljs.core.truth_(and__3546__auto____24675))
{var and__3546__auto____24676 = s2__24673;

if(cljs.core.truth_(and__3546__auto____24676))
{return s3__24674;
} else
{return and__3546__auto____24676;
}
} else
{return and__3546__auto____24675;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__24672),cljs.core.first.call(null,s2__24673),cljs.core.first.call(null,s3__24674)),map.call(null,f,cljs.core.rest.call(null,s1__24672),cljs.core.rest.call(null,s2__24673),cljs.core.rest.call(null,s3__24674)));
} else
{return null;
}
})));
});
var map__24682 = (function() { 
var G__24684__delegate = function (f,c1,c2,c3,colls){
var step__24678 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__24677 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__24677)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__24677),step.call(null,map.call(null,cljs.core.rest,ss__24677)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__24589_SHARP_){
return cljs.core.apply.call(null,f,p1__24589_SHARP_);
}),step__24678.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__24684 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__24684__delegate.call(this, f, c1, c2, c3, colls);
};
G__24684.cljs$lang$maxFixedArity = 4;
G__24684.cljs$lang$applyTo = (function (arglist__24685){
var f = cljs.core.first(arglist__24685);
var c1 = cljs.core.first(cljs.core.next(arglist__24685));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24685)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24685))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24685))));
return G__24684__delegate.call(this, f, c1, c2, c3, colls);
});
return G__24684;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__24679.call(this,f,c1);
case  3 :
return map__24680.call(this,f,c1,c2);
case  4 :
return map__24681.call(this,f,c1,c2,c3);
default:
return map__24682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__24682.cljs$lang$applyTo;
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
{var temp__3698__auto____24686 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24686))
{var s__24687 = temp__3698__auto____24686;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__24687),take.call(null,(n - 1),cljs.core.rest.call(null,s__24687)));
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
var step__24690 = (function (n,coll){
while(true){
var s__24688 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____24689 = (n > 0);

if(cljs.core.truth_(and__3546__auto____24689))
{return s__24688;
} else
{return and__3546__auto____24689;
}
})()))
{{
var G__24691 = (n - 1);
var G__24692 = cljs.core.rest.call(null,s__24688);
n = G__24691;
coll = G__24692;
continue;
}
} else
{return s__24688;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__24690.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__24693 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__24694 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__24693.call(this,n);
case  2 :
return drop_last__24694.call(this,n,s);
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
var s__24696 = cljs.core.seq.call(null,coll);
var lead__24697 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__24697))
{{
var G__24698 = cljs.core.next.call(null,s__24696);
var G__24699 = cljs.core.next.call(null,lead__24697);
s__24696 = G__24698;
lead__24697 = G__24699;
continue;
}
} else
{return s__24696;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__24702 = (function (pred,coll){
while(true){
var s__24700 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____24701 = s__24700;

if(cljs.core.truth_(and__3546__auto____24701))
{return pred.call(null,cljs.core.first.call(null,s__24700));
} else
{return and__3546__auto____24701;
}
})()))
{{
var G__24703 = pred;
var G__24704 = cljs.core.rest.call(null,s__24700);
pred = G__24703;
coll = G__24704;
continue;
}
} else
{return s__24700;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__24702.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24705 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24705))
{var s__24706 = temp__3698__auto____24705;

return cljs.core.concat.call(null,s__24706,cycle.call(null,s__24706));
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
var repeat__24707 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__24708 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__24707.call(this,n);
case  2 :
return repeat__24708.call(this,n,x);
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
var repeatedly__24710 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__24711 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__24710.call(this,n);
case  2 :
return repeatedly__24711.call(this,n,f);
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
var interleave__24717 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__24713 = cljs.core.seq.call(null,c1);
var s2__24714 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____24715 = s1__24713;

if(cljs.core.truth_(and__3546__auto____24715))
{return s2__24714;
} else
{return and__3546__auto____24715;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__24713),cljs.core.cons.call(null,cljs.core.first.call(null,s2__24714),interleave.call(null,cljs.core.rest.call(null,s1__24713),cljs.core.rest.call(null,s2__24714))));
} else
{return null;
}
})));
});
var interleave__24718 = (function() { 
var G__24720__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__24716 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__24716)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__24716),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__24716)));
} else
{return null;
}
})));
};
var G__24720 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24720__delegate.call(this, c1, c2, colls);
};
G__24720.cljs$lang$maxFixedArity = 2;
G__24720.cljs$lang$applyTo = (function (arglist__24721){
var c1 = cljs.core.first(arglist__24721);
var c2 = cljs.core.first(cljs.core.next(arglist__24721));
var colls = cljs.core.rest(cljs.core.next(arglist__24721));
return G__24720__delegate.call(this, c1, c2, colls);
});
return G__24720;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__24717.call(this,c1,c2);
default:
return interleave__24718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__24718.cljs$lang$applyTo;
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
var cat__24724 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____24722 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____24722))
{var coll__24723 = temp__3695__auto____24722;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__24723),cat.call(null,cljs.core.rest.call(null,coll__24723),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__24724.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__24725 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__24726 = (function() { 
var G__24728__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__24728 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__24728__delegate.call(this, f, coll, colls);
};
G__24728.cljs$lang$maxFixedArity = 2;
G__24728.cljs$lang$applyTo = (function (arglist__24729){
var f = cljs.core.first(arglist__24729);
var coll = cljs.core.first(cljs.core.next(arglist__24729));
var colls = cljs.core.rest(cljs.core.next(arglist__24729));
return G__24728__delegate.call(this, f, coll, colls);
});
return G__24728;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__24725.call(this,f,coll);
default:
return mapcat__24726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__24726.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24730 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24730))
{var s__24731 = temp__3698__auto____24730;

var f__24732 = cljs.core.first.call(null,s__24731);
var r__24733 = cljs.core.rest.call(null,s__24731);

if(cljs.core.truth_(pred.call(null,f__24732)))
{return cljs.core.cons.call(null,f__24732,filter.call(null,pred,r__24733));
} else
{return filter.call(null,pred,r__24733);
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
var walk__24735 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__24735.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__24734_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__24734_SHARP_));
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
var partition__24742 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__24743 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24736))
{var s__24737 = temp__3698__auto____24736;

var p__24738 = cljs.core.take.call(null,n,s__24737);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__24738))))
{return cljs.core.cons.call(null,p__24738,partition.call(null,n,step,cljs.core.drop.call(null,step,s__24737)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__24744 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24739 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24739))
{var s__24740 = temp__3698__auto____24739;

var p__24741 = cljs.core.take.call(null,n,s__24740);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__24741))))
{return cljs.core.cons.call(null,p__24741,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__24740)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__24741,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__24742.call(this,n,step);
case  3 :
return partition__24743.call(this,n,step,pad);
case  4 :
return partition__24744.call(this,n,step,pad,coll);
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
var get_in__24750 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__24751 = (function (m,ks,not_found){
var sentinel__24746 = cljs.core.lookup_sentinel;
var m__24747 = m;
var ks__24748 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__24748))
{var m__24749 = cljs.core.get.call(null,m__24747,cljs.core.first.call(null,ks__24748),sentinel__24746);

if(cljs.core.truth_((sentinel__24746 === m__24749)))
{return not_found;
} else
{{
var G__24753 = sentinel__24746;
var G__24754 = m__24749;
var G__24755 = cljs.core.next.call(null,ks__24748);
sentinel__24746 = G__24753;
m__24747 = G__24754;
ks__24748 = G__24755;
continue;
}
}
} else
{return m__24747;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__24750.call(this,m,ks);
case  3 :
return get_in__24751.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__24756,v){
var vec__24757__24758 = p__24756;
var k__24759 = cljs.core.nth.call(null,vec__24757__24758,0,null);
var ks__24760 = cljs.core.nthnext.call(null,vec__24757__24758,1);

if(cljs.core.truth_(ks__24760))
{return cljs.core.assoc.call(null,m,k__24759,assoc_in.call(null,cljs.core.get.call(null,m,k__24759),ks__24760,v));
} else
{return cljs.core.assoc.call(null,m,k__24759,v);
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
var update_in__delegate = function (m,p__24761,f,args){
var vec__24762__24763 = p__24761;
var k__24764 = cljs.core.nth.call(null,vec__24762__24763,0,null);
var ks__24765 = cljs.core.nthnext.call(null,vec__24762__24763,1);

if(cljs.core.truth_(ks__24765))
{return cljs.core.assoc.call(null,m,k__24764,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__24764),ks__24765,f,args));
} else
{return cljs.core.assoc.call(null,m,k__24764,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__24764),args));
}
};
var update_in = function (m,p__24761,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__24761, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__24766){
var m = cljs.core.first(arglist__24766);
var p__24761 = cljs.core.first(cljs.core.next(arglist__24766));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24766)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24766)));
return update_in__delegate.call(this, m, p__24761, f, args);
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
var this__24767 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__24800 = null;
var G__24800__24801 = (function (coll,k){
var this__24768 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__24800__24802 = (function (coll,k,not_found){
var this__24769 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__24800 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__24800__24801.call(this,coll,k);
case  3 :
return G__24800__24802.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24800;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__24770 = this;
var new_array__24771 = cljs.core.aclone.call(null,this__24770.array);

(new_array__24771[k] = v);
return (new cljs.core.Vector(this__24770.meta,new_array__24771));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__24804 = null;
var G__24804__24805 = (function (tsym24772,k){
var this__24774 = this;
var tsym24772__24775 = this;

var coll__24776 = tsym24772__24775;

return cljs.core._lookup.call(null,coll__24776,k);
});
var G__24804__24806 = (function (tsym24773,k,not_found){
var this__24777 = this;
var tsym24773__24778 = this;

var coll__24779 = tsym24773__24778;

return cljs.core._lookup.call(null,coll__24779,k,not_found);
});
G__24804 = function(tsym24773,k,not_found){
switch(arguments.length){
case  2 :
return G__24804__24805.call(this,tsym24773,k);
case  3 :
return G__24804__24806.call(this,tsym24773,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24804;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24780 = this;
var new_array__24781 = cljs.core.aclone.call(null,this__24780.array);

new_array__24781.push(o);
return (new cljs.core.Vector(this__24780.meta,new_array__24781));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__24808 = null;
var G__24808__24809 = (function (v,f){
var this__24782 = this;
return cljs.core.ci_reduce.call(null,this__24782.array,f);
});
var G__24808__24810 = (function (v,f,start){
var this__24783 = this;
return cljs.core.ci_reduce.call(null,this__24783.array,f,start);
});
G__24808 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__24808__24809.call(this,v,f);
case  3 :
return G__24808__24810.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24808;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24784 = this;
if(cljs.core.truth_((this__24784.array.length > 0)))
{var vector_seq__24785 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__24784.array.length)))
{return cljs.core.cons.call(null,(this__24784.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__24785.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24786 = this;
return this__24786.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__24787 = this;
var count__24788 = this__24787.array.length;

if(cljs.core.truth_((count__24788 > 0)))
{return (this__24787.array[(count__24788 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__24789 = this;
if(cljs.core.truth_((this__24789.array.length > 0)))
{var new_array__24790 = cljs.core.aclone.call(null,this__24789.array);

new_array__24790.pop();
return (new cljs.core.Vector(this__24789.meta,new_array__24790));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__24791 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24793 = this;
return (new cljs.core.Vector(meta,this__24793.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24794 = this;
return this__24794.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__24812 = null;
var G__24812__24813 = (function (coll,n){
var this__24795 = this;
if(cljs.core.truth_((function (){var and__3546__auto____24796 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____24796))
{return (n < this__24795.array.length);
} else
{return and__3546__auto____24796;
}
})()))
{return (this__24795.array[n]);
} else
{return null;
}
});
var G__24812__24814 = (function (coll,n,not_found){
var this__24797 = this;
if(cljs.core.truth_((function (){var and__3546__auto____24798 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____24798))
{return (n < this__24797.array.length);
} else
{return and__3546__auto____24798;
}
})()))
{return (this__24797.array[n]);
} else
{return not_found;
}
});
G__24812 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__24812__24813.call(this,coll,n);
case  3 :
return G__24812__24814.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24812;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24799 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__24799.meta);
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
vector.cljs$lang$applyTo = (function (arglist__24816){
var args = cljs.core.seq( arglist__24816 );;
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
var this__24817 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__24845 = null;
var G__24845__24846 = (function (coll,k){
var this__24818 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__24845__24847 = (function (coll,k,not_found){
var this__24819 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__24845 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__24845__24846.call(this,coll,k);
case  3 :
return G__24845__24847.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24845;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__24820 = this;
var v_pos__24821 = (this__24820.start + key);

return (new cljs.core.Subvec(this__24820.meta,cljs.core._assoc.call(null,this__24820.v,v_pos__24821,val),this__24820.start,((this__24820.end > (v_pos__24821 + 1)) ? this__24820.end : (v_pos__24821 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__24849 = null;
var G__24849__24850 = (function (tsym24822,k){
var this__24824 = this;
var tsym24822__24825 = this;

var coll__24826 = tsym24822__24825;

return cljs.core._lookup.call(null,coll__24826,k);
});
var G__24849__24851 = (function (tsym24823,k,not_found){
var this__24827 = this;
var tsym24823__24828 = this;

var coll__24829 = tsym24823__24828;

return cljs.core._lookup.call(null,coll__24829,k,not_found);
});
G__24849 = function(tsym24823,k,not_found){
switch(arguments.length){
case  2 :
return G__24849__24850.call(this,tsym24823,k);
case  3 :
return G__24849__24851.call(this,tsym24823,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24849;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24830 = this;
return (new cljs.core.Subvec(this__24830.meta,cljs.core._assoc_n.call(null,this__24830.v,this__24830.end,o),this__24830.start,(this__24830.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__24853 = null;
var G__24853__24854 = (function (coll,f){
var this__24831 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__24853__24855 = (function (coll,f,start){
var this__24832 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__24853 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__24853__24854.call(this,coll,f);
case  3 :
return G__24853__24855.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24853;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24833 = this;
var subvec_seq__24834 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__24833.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__24833.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__24834.call(null,this__24833.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24835 = this;
return (this__24835.end - this__24835.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__24836 = this;
return cljs.core._nth.call(null,this__24836.v,(this__24836.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__24837 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__24837.start,this__24837.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__24837.meta,this__24837.v,this__24837.start,(this__24837.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__24838 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24839 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24840 = this;
return (new cljs.core.Subvec(meta,this__24840.v,this__24840.start,this__24840.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24841 = this;
return this__24841.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__24857 = null;
var G__24857__24858 = (function (coll,n){
var this__24842 = this;
return cljs.core._nth.call(null,this__24842.v,(this__24842.start + n));
});
var G__24857__24859 = (function (coll,n,not_found){
var this__24843 = this;
return cljs.core._nth.call(null,this__24843.v,(this__24843.start + n),not_found);
});
G__24857 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__24857__24858.call(this,coll,n);
case  3 :
return G__24857__24859.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24857;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24844 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__24844.meta);
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
var subvec__24861 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__24862 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__24861.call(this,v,start);
case  3 :
return subvec__24862.call(this,v,start,end);
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
var this__24864 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__24865 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24866 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24867 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__24867.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24868 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__24869 = this;
return cljs.core._first.call(null,this__24869.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__24870 = this;
var temp__3695__auto____24871 = cljs.core.next.call(null,this__24870.front);

if(cljs.core.truth_(temp__3695__auto____24871))
{var f1__24872 = temp__3695__auto____24871;

return (new cljs.core.PersistentQueueSeq(this__24870.meta,f1__24872,this__24870.rear));
} else
{if(cljs.core.truth_((this__24870.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__24870.meta,this__24870.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24873 = this;
return this__24873.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24874 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__24874.front,this__24874.rear));
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
var this__24875 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24876 = this;
if(cljs.core.truth_(this__24876.front))
{return (new cljs.core.PersistentQueue(this__24876.meta,(this__24876.count + 1),this__24876.front,cljs.core.conj.call(null,(function (){var or__3548__auto____24877 = this__24876.rear;

if(cljs.core.truth_(or__3548__auto____24877))
{return or__3548__auto____24877;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__24876.meta,(this__24876.count + 1),cljs.core.conj.call(null,this__24876.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24878 = this;
var rear__24879 = cljs.core.seq.call(null,this__24878.rear);

if(cljs.core.truth_((function (){var or__3548__auto____24880 = this__24878.front;

if(cljs.core.truth_(or__3548__auto____24880))
{return or__3548__auto____24880;
} else
{return rear__24879;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__24878.front,cljs.core.seq.call(null,rear__24879)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24881 = this;
return this__24881.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__24882 = this;
return cljs.core._first.call(null,this__24882.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__24883 = this;
if(cljs.core.truth_(this__24883.front))
{var temp__3695__auto____24884 = cljs.core.next.call(null,this__24883.front);

if(cljs.core.truth_(temp__3695__auto____24884))
{var f1__24885 = temp__3695__auto____24884;

return (new cljs.core.PersistentQueue(this__24883.meta,(this__24883.count - 1),f1__24885,this__24883.rear));
} else
{return (new cljs.core.PersistentQueue(this__24883.meta,(this__24883.count - 1),cljs.core.seq.call(null,this__24883.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__24886 = this;
return cljs.core.first.call(null,this__24886.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__24887 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24888 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24889 = this;
return (new cljs.core.PersistentQueue(meta,this__24889.count,this__24889.front,this__24889.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24890 = this;
return this__24890.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24891 = this;
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
var this__24892 = this;
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
var len__24893 = array.length;

var i__24894 = 0;

while(true){
if(cljs.core.truth_((i__24894 < len__24893)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__24894]))))
{return i__24894;
} else
{{
var G__24895 = (i__24894 + incr);
i__24894 = G__24895;
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
var obj_map_contains_key_QMARK___24897 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___24898 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____24896 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____24896))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____24896;
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
return obj_map_contains_key_QMARK___24897.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___24898.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__24901 = cljs.core.hash.call(null,a);
var b__24902 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__24901 < b__24902)))
{return -1;
} else
{if(cljs.core.truth_((a__24901 > b__24902)))
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
var this__24903 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__24930 = null;
var G__24930__24931 = (function (coll,k){
var this__24904 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__24930__24932 = (function (coll,k,not_found){
var this__24905 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__24905.strobj,(this__24905.strobj[k]),not_found);
});
G__24930 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__24930__24931.call(this,coll,k);
case  3 :
return G__24930__24932.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24930;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__24906 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__24907 = goog.object.clone.call(null,this__24906.strobj);
var overwrite_QMARK___24908 = new_strobj__24907.hasOwnProperty(k);

(new_strobj__24907[k] = v);
if(cljs.core.truth_(overwrite_QMARK___24908))
{return (new cljs.core.ObjMap(this__24906.meta,this__24906.keys,new_strobj__24907));
} else
{var new_keys__24909 = cljs.core.aclone.call(null,this__24906.keys);

new_keys__24909.push(k);
return (new cljs.core.ObjMap(this__24906.meta,new_keys__24909,new_strobj__24907));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__24906.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__24910 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__24910.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__24934 = null;
var G__24934__24935 = (function (tsym24911,k){
var this__24913 = this;
var tsym24911__24914 = this;

var coll__24915 = tsym24911__24914;

return cljs.core._lookup.call(null,coll__24915,k);
});
var G__24934__24936 = (function (tsym24912,k,not_found){
var this__24916 = this;
var tsym24912__24917 = this;

var coll__24918 = tsym24912__24917;

return cljs.core._lookup.call(null,coll__24918,k,not_found);
});
G__24934 = function(tsym24912,k,not_found){
switch(arguments.length){
case  2 :
return G__24934__24935.call(this,tsym24912,k);
case  3 :
return G__24934__24936.call(this,tsym24912,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24934;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__24919 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24920 = this;
if(cljs.core.truth_((this__24920.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__24900_SHARP_){
return cljs.core.vector.call(null,p1__24900_SHARP_,(this__24920.strobj[p1__24900_SHARP_]));
}),this__24920.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24921 = this;
return this__24921.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24922 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24923 = this;
return (new cljs.core.ObjMap(meta,this__24923.keys,this__24923.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24924 = this;
return this__24924.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24925 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__24925.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__24926 = this;
if(cljs.core.truth_((function (){var and__3546__auto____24927 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____24927))
{return this__24926.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____24927;
}
})()))
{var new_keys__24928 = cljs.core.aclone.call(null,this__24926.keys);
var new_strobj__24929 = goog.object.clone.call(null,this__24926.strobj);

new_keys__24928.splice(cljs.core.scan_array.call(null,1,k,new_keys__24928),1);
cljs.core.js_delete.call(null,new_strobj__24929,k);
return (new cljs.core.ObjMap(this__24926.meta,new_keys__24928,new_strobj__24929));
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
var this__24939 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__24977 = null;
var G__24977__24978 = (function (coll,k){
var this__24940 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__24977__24979 = (function (coll,k,not_found){
var this__24941 = this;
var bucket__24942 = (this__24941.hashobj[cljs.core.hash.call(null,k)]);
var i__24943 = (cljs.core.truth_(bucket__24942)?cljs.core.scan_array.call(null,2,k,bucket__24942):null);

if(cljs.core.truth_(i__24943))
{return (bucket__24942[(i__24943 + 1)]);
} else
{return not_found;
}
});
G__24977 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__24977__24978.call(this,coll,k);
case  3 :
return G__24977__24979.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24977;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__24944 = this;
var h__24945 = cljs.core.hash.call(null,k);
var bucket__24946 = (this__24944.hashobj[h__24945]);

if(cljs.core.truth_(bucket__24946))
{var new_bucket__24947 = cljs.core.aclone.call(null,bucket__24946);
var new_hashobj__24948 = goog.object.clone.call(null,this__24944.hashobj);

(new_hashobj__24948[h__24945] = new_bucket__24947);
var temp__3695__auto____24949 = cljs.core.scan_array.call(null,2,k,new_bucket__24947);

if(cljs.core.truth_(temp__3695__auto____24949))
{var i__24950 = temp__3695__auto____24949;

(new_bucket__24947[(i__24950 + 1)] = v);
return (new cljs.core.HashMap(this__24944.meta,this__24944.count,new_hashobj__24948));
} else
{new_bucket__24947.push(k,v);
return (new cljs.core.HashMap(this__24944.meta,(this__24944.count + 1),new_hashobj__24948));
}
} else
{var new_hashobj__24951 = goog.object.clone.call(null,this__24944.hashobj);

(new_hashobj__24951[h__24945] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__24944.meta,(this__24944.count + 1),new_hashobj__24951));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__24952 = this;
var bucket__24953 = (this__24952.hashobj[cljs.core.hash.call(null,k)]);
var i__24954 = (cljs.core.truth_(bucket__24953)?cljs.core.scan_array.call(null,2,k,bucket__24953):null);

if(cljs.core.truth_(i__24954))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__24981 = null;
var G__24981__24982 = (function (tsym24955,k){
var this__24957 = this;
var tsym24955__24958 = this;

var coll__24959 = tsym24955__24958;

return cljs.core._lookup.call(null,coll__24959,k);
});
var G__24981__24983 = (function (tsym24956,k,not_found){
var this__24960 = this;
var tsym24956__24961 = this;

var coll__24962 = tsym24956__24961;

return cljs.core._lookup.call(null,coll__24962,k,not_found);
});
G__24981 = function(tsym24956,k,not_found){
switch(arguments.length){
case  2 :
return G__24981__24982.call(this,tsym24956,k);
case  3 :
return G__24981__24983.call(this,tsym24956,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24981;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__24963 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24964 = this;
if(cljs.core.truth_((this__24964.count > 0)))
{var hashes__24965 = cljs.core.js_keys.call(null,this__24964.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__24938_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__24964.hashobj[p1__24938_SHARP_])));
}),hashes__24965);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24966 = this;
return this__24966.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24967 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24968 = this;
return (new cljs.core.HashMap(meta,this__24968.count,this__24968.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24969 = this;
return this__24969.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24970 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__24970.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__24971 = this;
var h__24972 = cljs.core.hash.call(null,k);
var bucket__24973 = (this__24971.hashobj[h__24972]);
var i__24974 = (cljs.core.truth_(bucket__24973)?cljs.core.scan_array.call(null,2,k,bucket__24973):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__24974)))
{return coll;
} else
{var new_hashobj__24975 = goog.object.clone.call(null,this__24971.hashobj);

if(cljs.core.truth_((3 > bucket__24973.length)))
{cljs.core.js_delete.call(null,new_hashobj__24975,h__24972);
} else
{var new_bucket__24976 = cljs.core.aclone.call(null,bucket__24973);

new_bucket__24976.splice(i__24974,2);
(new_hashobj__24975[h__24972] = new_bucket__24976);
}
return (new cljs.core.HashMap(this__24971.meta,(this__24971.count - 1),new_hashobj__24975));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__24985 = ks.length;

var i__24986 = 0;
var out__24987 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__24986 < len__24985)))
{{
var G__24988 = (i__24986 + 1);
var G__24989 = cljs.core.assoc.call(null,out__24987,(ks[i__24986]),(vs[i__24986]));
i__24986 = G__24988;
out__24987 = G__24989;
continue;
}
} else
{return out__24987;
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
var in$__24990 = cljs.core.seq.call(null,keyvals);
var out__24991 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__24990))
{{
var G__24992 = cljs.core.nnext.call(null,in$__24990);
var G__24993 = cljs.core.assoc.call(null,out__24991,cljs.core.first.call(null,in$__24990),cljs.core.second.call(null,in$__24990));
in$__24990 = G__24992;
out__24991 = G__24993;
continue;
}
} else
{return out__24991;
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
hash_map.cljs$lang$applyTo = (function (arglist__24994){
var keyvals = cljs.core.seq( arglist__24994 );;
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
{return cljs.core.reduce.call(null,(function (p1__24995_SHARP_,p2__24996_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____24997 = p1__24995_SHARP_;

if(cljs.core.truth_(or__3548__auto____24997))
{return or__3548__auto____24997;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__24996_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__24998){
var maps = cljs.core.seq( arglist__24998 );;
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
{var merge_entry__25001 = (function (m,e){
var k__24999 = cljs.core.first.call(null,e);
var v__25000 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__24999)))
{return cljs.core.assoc.call(null,m,k__24999,f.call(null,cljs.core.get.call(null,m,k__24999),v__25000));
} else
{return cljs.core.assoc.call(null,m,k__24999,v__25000);
}
});
var merge2__25003 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__25001,(function (){var or__3548__auto____25002 = m1;

if(cljs.core.truth_(or__3548__auto____25002))
{return or__3548__auto____25002;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__25003,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__25004){
var f = cljs.core.first(arglist__25004);
var maps = cljs.core.rest(arglist__25004);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__25006 = cljs.core.ObjMap.fromObject([],{});
var keys__25007 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__25007))
{var key__25008 = cljs.core.first.call(null,keys__25007);
var entry__25009 = cljs.core.get.call(null,map,key__25008,"\uFDD0'user/not-found");

{
var G__25010 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__25009,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__25006,key__25008,entry__25009):ret__25006);
var G__25011 = cljs.core.next.call(null,keys__25007);
ret__25006 = G__25010;
keys__25007 = G__25011;
continue;
}
} else
{return ret__25006;
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
var this__25012 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__25033 = null;
var G__25033__25034 = (function (coll,v){
var this__25013 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__25033__25035 = (function (coll,v,not_found){
var this__25014 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__25014.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__25033 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__25033__25034.call(this,coll,v);
case  3 :
return G__25033__25035.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25033;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__25037 = null;
var G__25037__25038 = (function (tsym25015,k){
var this__25017 = this;
var tsym25015__25018 = this;

var coll__25019 = tsym25015__25018;

return cljs.core._lookup.call(null,coll__25019,k);
});
var G__25037__25039 = (function (tsym25016,k,not_found){
var this__25020 = this;
var tsym25016__25021 = this;

var coll__25022 = tsym25016__25021;

return cljs.core._lookup.call(null,coll__25022,k,not_found);
});
G__25037 = function(tsym25016,k,not_found){
switch(arguments.length){
case  2 :
return G__25037__25038.call(this,tsym25016,k);
case  3 :
return G__25037__25039.call(this,tsym25016,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25037;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__25023 = this;
return (new cljs.core.Set(this__25023.meta,cljs.core.assoc.call(null,this__25023.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__25024 = this;
return cljs.core.keys.call(null,this__25024.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__25025 = this;
return (new cljs.core.Set(this__25025.meta,cljs.core.dissoc.call(null,this__25025.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__25026 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__25027 = this;
var and__3546__auto____25028 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____25028))
{var and__3546__auto____25029 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____25029))
{return cljs.core.every_QMARK_.call(null,(function (p1__25005_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__25005_SHARP_);
}),other);
} else
{return and__3546__auto____25029;
}
} else
{return and__3546__auto____25028;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__25030 = this;
return (new cljs.core.Set(meta,this__25030.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__25031 = this;
return this__25031.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__25032 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__25032.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__25042 = cljs.core.seq.call(null,coll);
var out__25043 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__25042))))
{{
var G__25044 = cljs.core.rest.call(null,in$__25042);
var G__25045 = cljs.core.conj.call(null,out__25043,cljs.core.first.call(null,in$__25042));
in$__25042 = G__25044;
out__25043 = G__25045;
continue;
}
} else
{return out__25043;
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
{var n__25046 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____25047 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____25047))
{var e__25048 = temp__3695__auto____25047;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__25048));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__25046,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__25041_SHARP_){
var temp__3695__auto____25049 = cljs.core.find.call(null,smap,p1__25041_SHARP_);

if(cljs.core.truth_(temp__3695__auto____25049))
{var e__25050 = temp__3695__auto____25049;

return cljs.core.second.call(null,e__25050);
} else
{return p1__25041_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__25058 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__25051,seen){
while(true){
var vec__25052__25053 = p__25051;
var f__25054 = cljs.core.nth.call(null,vec__25052__25053,0,null);
var xs__25055 = vec__25052__25053;

var temp__3698__auto____25056 = cljs.core.seq.call(null,xs__25055);

if(cljs.core.truth_(temp__3698__auto____25056))
{var s__25057 = temp__3698__auto____25056;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__25054)))
{{
var G__25059 = cljs.core.rest.call(null,s__25057);
var G__25060 = seen;
p__25051 = G__25059;
seen = G__25060;
continue;
}
} else
{return cljs.core.cons.call(null,f__25054,step.call(null,cljs.core.rest.call(null,s__25057),cljs.core.conj.call(null,seen,f__25054)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__25058.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__25061 = cljs.core.Vector.fromArray([]);
var s__25062 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__25062)))
{{
var G__25063 = cljs.core.conj.call(null,ret__25061,cljs.core.first.call(null,s__25062));
var G__25064 = cljs.core.next.call(null,s__25062);
ret__25061 = G__25063;
s__25062 = G__25064;
continue;
}
} else
{return cljs.core.seq.call(null,ret__25061);
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
{if(cljs.core.truth_((function (){var or__3548__auto____25065 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____25065))
{return or__3548__auto____25065;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__25066 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__25066 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__25066 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____25067 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____25067))
{return or__3548__auto____25067;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__25068 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__25068 > -1)))
{return cljs.core.subs.call(null,x,2,i__25068);
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
var map__25071 = cljs.core.ObjMap.fromObject([],{});
var ks__25072 = cljs.core.seq.call(null,keys);
var vs__25073 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____25074 = ks__25072;

if(cljs.core.truth_(and__3546__auto____25074))
{return vs__25073;
} else
{return and__3546__auto____25074;
}
})()))
{{
var G__25075 = cljs.core.assoc.call(null,map__25071,cljs.core.first.call(null,ks__25072),cljs.core.first.call(null,vs__25073));
var G__25076 = cljs.core.next.call(null,ks__25072);
var G__25077 = cljs.core.next.call(null,vs__25073);
map__25071 = G__25075;
ks__25072 = G__25076;
vs__25073 = G__25077;
continue;
}
} else
{return map__25071;
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
var max_key__25080 = (function (k,x){
return x;
});
var max_key__25081 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__25082 = (function() { 
var G__25084__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__25069_SHARP_,p2__25070_SHARP_){
return max_key.call(null,k,p1__25069_SHARP_,p2__25070_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__25084 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25084__delegate.call(this, k, x, y, more);
};
G__25084.cljs$lang$maxFixedArity = 3;
G__25084.cljs$lang$applyTo = (function (arglist__25085){
var k = cljs.core.first(arglist__25085);
var x = cljs.core.first(cljs.core.next(arglist__25085));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25085)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25085)));
return G__25084__delegate.call(this, k, x, y, more);
});
return G__25084;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__25080.call(this,k,x);
case  3 :
return max_key__25081.call(this,k,x,y);
default:
return max_key__25082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__25082.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__25086 = (function (k,x){
return x;
});
var min_key__25087 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__25088 = (function() { 
var G__25090__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__25078_SHARP_,p2__25079_SHARP_){
return min_key.call(null,k,p1__25078_SHARP_,p2__25079_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__25090 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25090__delegate.call(this, k, x, y, more);
};
G__25090.cljs$lang$maxFixedArity = 3;
G__25090.cljs$lang$applyTo = (function (arglist__25091){
var k = cljs.core.first(arglist__25091);
var x = cljs.core.first(cljs.core.next(arglist__25091));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25091)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25091)));
return G__25090__delegate.call(this, k, x, y, more);
});
return G__25090;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__25086.call(this,k,x);
case  3 :
return min_key__25087.call(this,k,x,y);
default:
return min_key__25088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__25088.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__25094 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__25095 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____25092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25092))
{var s__25093 = temp__3698__auto____25092;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__25093),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__25093)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__25094.call(this,n,step);
case  3 :
return partition_all__25095.call(this,n,step,coll);
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
var temp__3698__auto____25097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25097))
{var s__25098 = temp__3698__auto____25097;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__25098))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__25098),take_while.call(null,pred,cljs.core.rest.call(null,s__25098)));
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
var this__25099 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__25100 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__25116 = null;
var G__25116__25117 = (function (rng,f){
var this__25101 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__25116__25118 = (function (rng,f,s){
var this__25102 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__25116 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__25116__25117.call(this,rng,f);
case  3 :
return G__25116__25118.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25116;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__25103 = this;
var comp__25104 = (cljs.core.truth_((this__25103.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__25104.call(null,this__25103.start,this__25103.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__25105 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__25105.end - this__25105.start) / this__25105.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__25106 = this;
return this__25106.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__25107 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__25107.meta,(this__25107.start + this__25107.step),this__25107.end,this__25107.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__25108 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__25109 = this;
return (new cljs.core.Range(meta,this__25109.start,this__25109.end,this__25109.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__25110 = this;
return this__25110.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__25120 = null;
var G__25120__25121 = (function (rng,n){
var this__25111 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__25111.start + (n * this__25111.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____25112 = (this__25111.start > this__25111.end);

if(cljs.core.truth_(and__3546__auto____25112))
{return cljs.core._EQ_.call(null,this__25111.step,0);
} else
{return and__3546__auto____25112;
}
})()))
{return this__25111.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__25120__25122 = (function (rng,n,not_found){
var this__25113 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__25113.start + (n * this__25113.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____25114 = (this__25113.start > this__25113.end);

if(cljs.core.truth_(and__3546__auto____25114))
{return cljs.core._EQ_.call(null,this__25113.step,0);
} else
{return and__3546__auto____25114;
}
})()))
{return this__25113.start;
} else
{return not_found;
}
}
});
G__25120 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__25120__25121.call(this,rng,n);
case  3 :
return G__25120__25122.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25120;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__25115 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__25115.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__25124 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__25125 = (function (end){
return range.call(null,0,end,1);
});
var range__25126 = (function (start,end){
return range.call(null,start,end,1);
});
var range__25127 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__25124.call(this);
case  1 :
return range__25125.call(this,start);
case  2 :
return range__25126.call(this,start,end);
case  3 :
return range__25127.call(this,start,end,step);
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
var temp__3698__auto____25129 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25129))
{var s__25130 = temp__3698__auto____25129;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__25130),take_nth.call(null,n,cljs.core.drop.call(null,n,s__25130)));
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
var temp__3698__auto____25132 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25132))
{var s__25133 = temp__3698__auto____25132;

var fst__25134 = cljs.core.first.call(null,s__25133);
var fv__25135 = f.call(null,fst__25134);
var run__25136 = cljs.core.cons.call(null,fst__25134,cljs.core.take_while.call(null,(function (p1__25131_SHARP_){
return cljs.core._EQ_.call(null,fv__25135,f.call(null,p1__25131_SHARP_));
}),cljs.core.next.call(null,s__25133)));

return cljs.core.cons.call(null,run__25136,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__25136),s__25133))));
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
var reductions__25151 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____25147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____25147))
{var s__25148 = temp__3695__auto____25147;

return reductions.call(null,f,cljs.core.first.call(null,s__25148),cljs.core.rest.call(null,s__25148));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__25152 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____25149 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25149))
{var s__25150 = temp__3698__auto____25149;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__25150)),cljs.core.rest.call(null,s__25150));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__25151.call(this,f,init);
case  3 :
return reductions__25152.call(this,f,init,coll);
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
var juxt__25155 = (function (f){
return (function() {
var G__25160 = null;
var G__25160__25161 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__25160__25162 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__25160__25163 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__25160__25164 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__25160__25165 = (function() { 
var G__25167__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__25167 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25167__delegate.call(this, x, y, z, args);
};
G__25167.cljs$lang$maxFixedArity = 3;
G__25167.cljs$lang$applyTo = (function (arglist__25168){
var x = cljs.core.first(arglist__25168);
var y = cljs.core.first(cljs.core.next(arglist__25168));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25168)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25168)));
return G__25167__delegate.call(this, x, y, z, args);
});
return G__25167;
})()
;
G__25160 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__25160__25161.call(this);
case  1 :
return G__25160__25162.call(this,x);
case  2 :
return G__25160__25163.call(this,x,y);
case  3 :
return G__25160__25164.call(this,x,y,z);
default:
return G__25160__25165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25160.cljs$lang$maxFixedArity = 3;
G__25160.cljs$lang$applyTo = G__25160__25165.cljs$lang$applyTo;
return G__25160;
})()
});
var juxt__25156 = (function (f,g){
return (function() {
var G__25169 = null;
var G__25169__25170 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__25169__25171 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__25169__25172 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__25169__25173 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__25169__25174 = (function() { 
var G__25176__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__25176 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25176__delegate.call(this, x, y, z, args);
};
G__25176.cljs$lang$maxFixedArity = 3;
G__25176.cljs$lang$applyTo = (function (arglist__25177){
var x = cljs.core.first(arglist__25177);
var y = cljs.core.first(cljs.core.next(arglist__25177));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25177)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25177)));
return G__25176__delegate.call(this, x, y, z, args);
});
return G__25176;
})()
;
G__25169 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__25169__25170.call(this);
case  1 :
return G__25169__25171.call(this,x);
case  2 :
return G__25169__25172.call(this,x,y);
case  3 :
return G__25169__25173.call(this,x,y,z);
default:
return G__25169__25174.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25169.cljs$lang$maxFixedArity = 3;
G__25169.cljs$lang$applyTo = G__25169__25174.cljs$lang$applyTo;
return G__25169;
})()
});
var juxt__25157 = (function (f,g,h){
return (function() {
var G__25178 = null;
var G__25178__25179 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__25178__25180 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__25178__25181 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__25178__25182 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__25178__25183 = (function() { 
var G__25185__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__25185 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25185__delegate.call(this, x, y, z, args);
};
G__25185.cljs$lang$maxFixedArity = 3;
G__25185.cljs$lang$applyTo = (function (arglist__25186){
var x = cljs.core.first(arglist__25186);
var y = cljs.core.first(cljs.core.next(arglist__25186));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25186)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25186)));
return G__25185__delegate.call(this, x, y, z, args);
});
return G__25185;
})()
;
G__25178 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__25178__25179.call(this);
case  1 :
return G__25178__25180.call(this,x);
case  2 :
return G__25178__25181.call(this,x,y);
case  3 :
return G__25178__25182.call(this,x,y,z);
default:
return G__25178__25183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25178.cljs$lang$maxFixedArity = 3;
G__25178.cljs$lang$applyTo = G__25178__25183.cljs$lang$applyTo;
return G__25178;
})()
});
var juxt__25158 = (function() { 
var G__25187__delegate = function (f,g,h,fs){
var fs__25154 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__25188 = null;
var G__25188__25189 = (function (){
return cljs.core.reduce.call(null,(function (p1__25137_SHARP_,p2__25138_SHARP_){
return cljs.core.conj.call(null,p1__25137_SHARP_,p2__25138_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__25154);
});
var G__25188__25190 = (function (x){
return cljs.core.reduce.call(null,(function (p1__25139_SHARP_,p2__25140_SHARP_){
return cljs.core.conj.call(null,p1__25139_SHARP_,p2__25140_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__25154);
});
var G__25188__25191 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__25141_SHARP_,p2__25142_SHARP_){
return cljs.core.conj.call(null,p1__25141_SHARP_,p2__25142_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__25154);
});
var G__25188__25192 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__25143_SHARP_,p2__25144_SHARP_){
return cljs.core.conj.call(null,p1__25143_SHARP_,p2__25144_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__25154);
});
var G__25188__25193 = (function() { 
var G__25195__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__25145_SHARP_,p2__25146_SHARP_){
return cljs.core.conj.call(null,p1__25145_SHARP_,cljs.core.apply.call(null,p2__25146_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__25154);
};
var G__25195 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25195__delegate.call(this, x, y, z, args);
};
G__25195.cljs$lang$maxFixedArity = 3;
G__25195.cljs$lang$applyTo = (function (arglist__25196){
var x = cljs.core.first(arglist__25196);
var y = cljs.core.first(cljs.core.next(arglist__25196));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25196)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25196)));
return G__25195__delegate.call(this, x, y, z, args);
});
return G__25195;
})()
;
G__25188 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__25188__25189.call(this);
case  1 :
return G__25188__25190.call(this,x);
case  2 :
return G__25188__25191.call(this,x,y);
case  3 :
return G__25188__25192.call(this,x,y,z);
default:
return G__25188__25193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__25188.cljs$lang$maxFixedArity = 3;
G__25188.cljs$lang$applyTo = G__25188__25193.cljs$lang$applyTo;
return G__25188;
})()
};
var G__25187 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25187__delegate.call(this, f, g, h, fs);
};
G__25187.cljs$lang$maxFixedArity = 3;
G__25187.cljs$lang$applyTo = (function (arglist__25197){
var f = cljs.core.first(arglist__25197);
var g = cljs.core.first(cljs.core.next(arglist__25197));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25197)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25197)));
return G__25187__delegate.call(this, f, g, h, fs);
});
return G__25187;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__25155.call(this,f);
case  2 :
return juxt__25156.call(this,f,g);
case  3 :
return juxt__25157.call(this,f,g,h);
default:
return juxt__25158.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__25158.cljs$lang$applyTo;
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
var dorun__25199 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__25202 = cljs.core.next.call(null,coll);
coll = G__25202;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__25200 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____25198 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____25198))
{return (n > 0);
} else
{return and__3546__auto____25198;
}
})()))
{{
var G__25203 = (n - 1);
var G__25204 = cljs.core.next.call(null,coll);
n = G__25203;
coll = G__25204;
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
return dorun__25199.call(this,n);
case  2 :
return dorun__25200.call(this,n,coll);
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
var doall__25205 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__25206 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__25205.call(this,n);
case  2 :
return doall__25206.call(this,n,coll);
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
var matches__25208 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__25208),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__25208),1)))
{return cljs.core.first.call(null,matches__25208);
} else
{return cljs.core.vec.call(null,matches__25208);
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
var matches__25209 = re.exec(s);

if(cljs.core.truth_((matches__25209 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__25209),1)))
{return cljs.core.first.call(null,matches__25209);
} else
{return cljs.core.vec.call(null,matches__25209);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__25210 = cljs.core.re_find.call(null,re,s);
var match_idx__25211 = s.search(re);
var match_str__25212 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__25210))?cljs.core.first.call(null,match_data__25210):match_data__25210);
var post_match__25213 = cljs.core.subs.call(null,s,(match_idx__25211 + cljs.core.count.call(null,match_str__25212)));

if(cljs.core.truth_(match_data__25210))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__25210,re_seq.call(null,re,post_match__25213));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__25215__25216 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___25217 = cljs.core.nth.call(null,vec__25215__25216,0,null);
var flags__25218 = cljs.core.nth.call(null,vec__25215__25216,1,null);
var pattern__25219 = cljs.core.nth.call(null,vec__25215__25216,2,null);

return (new RegExp(pattern__25219,flags__25218));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__25214_SHARP_){
return print_one.call(null,p1__25214_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____25220 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____25220))
{var and__3546__auto____25224 = (function (){var x__450__auto____25221 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____25222 = x__450__auto____25221;

if(cljs.core.truth_(and__3546__auto____25222))
{var and__3546__auto____25223 = x__450__auto____25221.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____25223))
{return cljs.core.not.call(null,x__450__auto____25221.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____25223;
}
} else
{return and__3546__auto____25222;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____25221);
}
})();

if(cljs.core.truth_(and__3546__auto____25224))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____25224;
}
} else
{return and__3546__auto____25220;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____25225 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____25226 = x__450__auto____25225;

if(cljs.core.truth_(and__3546__auto____25226))
{var and__3546__auto____25227 = x__450__auto____25225.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____25227))
{return cljs.core.not.call(null,x__450__auto____25225.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____25227;
}
} else
{return and__3546__auto____25226;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____25225);
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
var first_obj__25228 = cljs.core.first.call(null,objs);
var sb__25229 = (new goog.string.StringBuffer());

var G__25230__25231 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__25230__25231))
{var obj__25232 = cljs.core.first.call(null,G__25230__25231);
var G__25230__25233 = G__25230__25231;

while(true){
if(cljs.core.truth_((obj__25232 === first_obj__25228)))
{} else
{sb__25229.append(" ");
}
var G__25234__25235 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__25232,opts));

if(cljs.core.truth_(G__25234__25235))
{var string__25236 = cljs.core.first.call(null,G__25234__25235);
var G__25234__25237 = G__25234__25235;

while(true){
sb__25229.append(string__25236);
var temp__3698__auto____25238 = cljs.core.next.call(null,G__25234__25237);

if(cljs.core.truth_(temp__3698__auto____25238))
{var G__25234__25239 = temp__3698__auto____25238;

{
var G__25242 = cljs.core.first.call(null,G__25234__25239);
var G__25243 = G__25234__25239;
string__25236 = G__25242;
G__25234__25237 = G__25243;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____25240 = cljs.core.next.call(null,G__25230__25233);

if(cljs.core.truth_(temp__3698__auto____25240))
{var G__25230__25241 = temp__3698__auto____25240;

{
var G__25244 = cljs.core.first.call(null,G__25230__25241);
var G__25245 = G__25230__25241;
obj__25232 = G__25244;
G__25230__25233 = G__25245;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__25229);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__25246 = cljs.core.first.call(null,objs);

var G__25247__25248 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__25247__25248))
{var obj__25249 = cljs.core.first.call(null,G__25247__25248);
var G__25247__25250 = G__25247__25248;

while(true){
if(cljs.core.truth_((obj__25249 === first_obj__25246)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__25251__25252 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__25249,opts));

if(cljs.core.truth_(G__25251__25252))
{var string__25253 = cljs.core.first.call(null,G__25251__25252);
var G__25251__25254 = G__25251__25252;

while(true){
cljs.core.string_print.call(null,string__25253);
var temp__3698__auto____25255 = cljs.core.next.call(null,G__25251__25254);

if(cljs.core.truth_(temp__3698__auto____25255))
{var G__25251__25256 = temp__3698__auto____25255;

{
var G__25259 = cljs.core.first.call(null,G__25251__25256);
var G__25260 = G__25251__25256;
string__25253 = G__25259;
G__25251__25254 = G__25260;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____25257 = cljs.core.next.call(null,G__25247__25250);

if(cljs.core.truth_(temp__3698__auto____25257))
{var G__25247__25258 = temp__3698__auto____25257;

{
var G__25261 = cljs.core.first.call(null,G__25247__25258);
var G__25262 = G__25247__25258;
obj__25249 = G__25261;
G__25247__25250 = G__25262;
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
pr_str.cljs$lang$applyTo = (function (arglist__25263){
var objs = cljs.core.seq( arglist__25263 );;
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
pr.cljs$lang$applyTo = (function (arglist__25264){
var objs = cljs.core.seq( arglist__25264 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__25265){
var objs = cljs.core.seq( arglist__25265 );;
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
println.cljs$lang$applyTo = (function (arglist__25266){
var objs = cljs.core.seq( arglist__25266 );;
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
prn.cljs$lang$applyTo = (function (arglist__25267){
var objs = cljs.core.seq( arglist__25267 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__25268 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__25268,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____25269 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____25269))
{var nspc__25270 = temp__3698__auto____25269;

return cljs.core.str.call(null,nspc__25270,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____25271 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____25271))
{var nspc__25272 = temp__3698__auto____25271;

return cljs.core.str.call(null,nspc__25272,"\/");
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
var pr_pair__25273 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__25273,"{",", ","}",opts,coll);
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
var this__25274 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__25275 = this;
var G__25276__25277 = cljs.core.seq.call(null,this__25275.watches);

if(cljs.core.truth_(G__25276__25277))
{var G__25279__25281 = cljs.core.first.call(null,G__25276__25277);
var vec__25280__25282 = G__25279__25281;
var key__25283 = cljs.core.nth.call(null,vec__25280__25282,0,null);
var f__25284 = cljs.core.nth.call(null,vec__25280__25282,1,null);
var G__25276__25285 = G__25276__25277;

var G__25279__25286 = G__25279__25281;
var G__25276__25287 = G__25276__25285;

while(true){
var vec__25288__25289 = G__25279__25286;
var key__25290 = cljs.core.nth.call(null,vec__25288__25289,0,null);
var f__25291 = cljs.core.nth.call(null,vec__25288__25289,1,null);
var G__25276__25292 = G__25276__25287;

f__25291.call(null,key__25290,this$,oldval,newval);
var temp__3698__auto____25293 = cljs.core.next.call(null,G__25276__25292);

if(cljs.core.truth_(temp__3698__auto____25293))
{var G__25276__25294 = temp__3698__auto____25293;

{
var G__25301 = cljs.core.first.call(null,G__25276__25294);
var G__25302 = G__25276__25294;
G__25279__25286 = G__25301;
G__25276__25287 = G__25302;
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
var this__25295 = this;
return this$.watches = cljs.core.assoc.call(null,this__25295.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__25296 = this;
return this$.watches = cljs.core.dissoc.call(null,this__25296.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__25297 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__25297.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__25298 = this;
return this__25298.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__25299 = this;
return this__25299.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__25300 = this;
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
var atom__25309 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__25310 = (function() { 
var G__25312__delegate = function (x,p__25303){
var map__25304__25305 = p__25303;
var map__25304__25306 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__25304__25305))?cljs.core.apply.call(null,cljs.core.hash_map,map__25304__25305):map__25304__25305);
var validator__25307 = cljs.core.get.call(null,map__25304__25306,"\uFDD0'validator");
var meta__25308 = cljs.core.get.call(null,map__25304__25306,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__25308,validator__25307,null));
};
var G__25312 = function (x,var_args){
var p__25303 = null;
if (goog.isDef(var_args)) {
  p__25303 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25312__delegate.call(this, x, p__25303);
};
G__25312.cljs$lang$maxFixedArity = 1;
G__25312.cljs$lang$applyTo = (function (arglist__25313){
var x = cljs.core.first(arglist__25313);
var p__25303 = cljs.core.rest(arglist__25313);
return G__25312__delegate.call(this, x, p__25303);
});
return G__25312;
})()
;
atom = function(x,var_args){
var p__25303 = var_args;
switch(arguments.length){
case  1 :
return atom__25309.call(this,x);
default:
return atom__25310.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__25310.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____25314 = a.validator;

if(cljs.core.truth_(temp__3698__auto____25314))
{var validate__25315 = temp__3698__auto____25314;

if(cljs.core.truth_(validate__25315.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__25316 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__25316,new_value);
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
var swap_BANG___25317 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___25318 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___25319 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___25320 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___25321 = (function() { 
var G__25323__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__25323 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__25323__delegate.call(this, a, f, x, y, z, more);
};
G__25323.cljs$lang$maxFixedArity = 5;
G__25323.cljs$lang$applyTo = (function (arglist__25324){
var a = cljs.core.first(arglist__25324);
var f = cljs.core.first(cljs.core.next(arglist__25324));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25324)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25324))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25324)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25324)))));
return G__25323__delegate.call(this, a, f, x, y, z, more);
});
return G__25323;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___25317.call(this,a,f);
case  3 :
return swap_BANG___25318.call(this,a,f,x);
case  4 :
return swap_BANG___25319.call(this,a,f,x,y);
case  5 :
return swap_BANG___25320.call(this,a,f,x,y,z);
default:
return swap_BANG___25321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___25321.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__25325){
var iref = cljs.core.first(arglist__25325);
var f = cljs.core.first(cljs.core.next(arglist__25325));
var args = cljs.core.rest(cljs.core.next(arglist__25325));
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
var gensym__25326 = (function (){
return gensym.call(null,"G__");
});
var gensym__25327 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__25326.call(this);
case  1 :
return gensym__25327.call(this,prefix_string);
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
var this__25329 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__25329.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__25330 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__25330.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__25330.state,this__25330.f);
}
return cljs.core.deref.call(null,this__25330.state);
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
delay.cljs$lang$applyTo = (function (arglist__25331){
var body = cljs.core.seq( arglist__25331 );;
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
var map__25332__25333 = options;
var map__25332__25334 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__25332__25333))?cljs.core.apply.call(null,cljs.core.hash_map,map__25332__25333):map__25332__25333);
var keywordize_keys__25335 = cljs.core.get.call(null,map__25332__25334,"\uFDD0'keywordize-keys");
var keyfn__25336 = (cljs.core.truth_(keywordize_keys__25335)?cljs.core.keyword:cljs.core.str);
var f__25342 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____25341 = (function iter__25337(s__25338){
return (new cljs.core.LazySeq(null,false,(function (){
var s__25338__25339 = s__25338;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__25338__25339)))
{var k__25340 = cljs.core.first.call(null,s__25338__25339);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__25336.call(null,k__25340),thisfn.call(null,(x[k__25340]))]),iter__25337.call(null,cljs.core.rest.call(null,s__25338__25339)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____25341.call(null,cljs.core.js_keys.call(null,x));
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

return f__25342.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__25343){
var x = cljs.core.first(arglist__25343);
var options = cljs.core.rest(arglist__25343);
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
var mem__25344 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__25348__delegate = function (args){
var temp__3695__auto____25345 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__25344),args);

if(cljs.core.truth_(temp__3695__auto____25345))
{var v__25346 = temp__3695__auto____25345;

return v__25346;
} else
{var ret__25347 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__25344,cljs.core.assoc,args,ret__25347);
return ret__25347;
}
};
var G__25348 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25348__delegate.call(this, args);
};
G__25348.cljs$lang$maxFixedArity = 0;
G__25348.cljs$lang$applyTo = (function (arglist__25349){
var args = cljs.core.seq( arglist__25349 );;
return G__25348__delegate.call(this, args);
});
return G__25348;
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
var trampoline__25351 = (function (f){
while(true){
var ret__25350 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__25350)))
{{
var G__25354 = ret__25350;
f = G__25354;
continue;
}
} else
{return ret__25350;
}
break;
}
});
var trampoline__25352 = (function() { 
var G__25355__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__25355 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25355__delegate.call(this, f, args);
};
G__25355.cljs$lang$maxFixedArity = 1;
G__25355.cljs$lang$applyTo = (function (arglist__25356){
var f = cljs.core.first(arglist__25356);
var args = cljs.core.rest(arglist__25356);
return G__25355__delegate.call(this, f, args);
});
return G__25355;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__25351.call(this,f);
default:
return trampoline__25352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__25352.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__25357 = (function (){
return rand.call(null,1);
});
var rand__25358 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__25357.call(this);
case  1 :
return rand__25358.call(this,n);
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
var k__25360 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__25360,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__25360,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___25369 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___25370 = (function (h,child,parent){
var or__3548__auto____25361 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____25361))
{return or__3548__auto____25361;
} else
{var or__3548__auto____25362 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____25362))
{return or__3548__auto____25362;
} else
{var and__3546__auto____25363 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____25363))
{var and__3546__auto____25364 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____25364))
{var and__3546__auto____25365 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____25365))
{var ret__25366 = true;
var i__25367 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____25368 = cljs.core.not.call(null,ret__25366);

if(cljs.core.truth_(or__3548__auto____25368))
{return or__3548__auto____25368;
} else
{return cljs.core._EQ_.call(null,i__25367,cljs.core.count.call(null,parent));
}
})()))
{return ret__25366;
} else
{{
var G__25372 = isa_QMARK_.call(null,h,child.call(null,i__25367),parent.call(null,i__25367));
var G__25373 = (i__25367 + 1);
ret__25366 = G__25372;
i__25367 = G__25373;
continue;
}
}
break;
}
} else
{return and__3546__auto____25365;
}
} else
{return and__3546__auto____25364;
}
} else
{return and__3546__auto____25363;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___25369.call(this,h,child);
case  3 :
return isa_QMARK___25370.call(this,h,child,parent);
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
var parents__25374 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__25375 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__25374.call(this,h);
case  2 :
return parents__25375.call(this,h,tag);
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
var ancestors__25377 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__25378 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__25377.call(this,h);
case  2 :
return ancestors__25378.call(this,h,tag);
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
var descendants__25380 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__25381 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__25380.call(this,h);
case  2 :
return descendants__25381.call(this,h,tag);
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
var derive__25391 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__25392 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__25386 = "\uFDD0'parents".call(null,h);
var td__25387 = "\uFDD0'descendants".call(null,h);
var ta__25388 = "\uFDD0'ancestors".call(null,h);
var tf__25389 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____25390 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__25386.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__25388.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__25388.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__25386,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__25389.call(null,"\uFDD0'ancestors".call(null,h),tag,td__25387,parent,ta__25388),"\uFDD0'descendants":tf__25389.call(null,"\uFDD0'descendants".call(null,h),parent,ta__25388,tag,td__25387)});
})());

if(cljs.core.truth_(or__3548__auto____25390))
{return or__3548__auto____25390;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__25391.call(this,h,tag);
case  3 :
return derive__25392.call(this,h,tag,parent);
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
var underive__25398 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__25399 = (function (h,tag,parent){
var parentMap__25394 = "\uFDD0'parents".call(null,h);
var childsParents__25395 = (cljs.core.truth_(parentMap__25394.call(null,tag))?cljs.core.disj.call(null,parentMap__25394.call(null,tag),parent):cljs.core.set([]));
var newParents__25396 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__25395))?cljs.core.assoc.call(null,parentMap__25394,tag,childsParents__25395):cljs.core.dissoc.call(null,parentMap__25394,tag));
var deriv_seq__25397 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__25383_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__25383_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__25383_SHARP_),cljs.core.second.call(null,p1__25383_SHARP_)));
}),cljs.core.seq.call(null,newParents__25396)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__25394.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__25384_SHARP_,p2__25385_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__25384_SHARP_,p2__25385_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__25397));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__25398.call(this,h,tag);
case  3 :
return underive__25399.call(this,h,tag,parent);
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
var xprefs__25401 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____25403 = (cljs.core.truth_((function (){var and__3546__auto____25402 = xprefs__25401;

if(cljs.core.truth_(and__3546__auto____25402))
{return xprefs__25401.call(null,y);
} else
{return and__3546__auto____25402;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____25403))
{return or__3548__auto____25403;
} else
{var or__3548__auto____25405 = (function (){var ps__25404 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__25404) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__25404),prefer_table)))
{} else
{}
{
var G__25408 = cljs.core.rest.call(null,ps__25404);
ps__25404 = G__25408;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____25405))
{return or__3548__auto____25405;
} else
{var or__3548__auto____25407 = (function (){var ps__25406 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__25406) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__25406),y,prefer_table)))
{} else
{}
{
var G__25409 = cljs.core.rest.call(null,ps__25406);
ps__25406 = G__25409;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____25407))
{return or__3548__auto____25407;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____25410 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____25410))
{return or__3548__auto____25410;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__25419 = cljs.core.reduce.call(null,(function (be,p__25411){
var vec__25412__25413 = p__25411;
var k__25414 = cljs.core.nth.call(null,vec__25412__25413,0,null);
var ___25415 = cljs.core.nth.call(null,vec__25412__25413,1,null);
var e__25416 = vec__25412__25413;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__25414)))
{var be2__25418 = (cljs.core.truth_((function (){var or__3548__auto____25417 = (be === null);

if(cljs.core.truth_(or__3548__auto____25417))
{return or__3548__auto____25417;
} else
{return cljs.core.dominates.call(null,k__25414,cljs.core.first.call(null,be),prefer_table);
}
})())?e__25416:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__25418),k__25414,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__25414," and ",cljs.core.first.call(null,be2__25418),", and neither is preferred")));
}
return be2__25418;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__25419))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__25419));
return cljs.core.second.call(null,best_entry__25419);
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
if(cljs.core.truth_((function (){var and__3546__auto____25420 = mf;

if(cljs.core.truth_(and__3546__auto____25420))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____25420;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____25421 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25421))
{return or__3548__auto____25421;
} else
{var or__3548__auto____25422 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____25422))
{return or__3548__auto____25422;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____25423 = mf;

if(cljs.core.truth_(and__3546__auto____25423))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____25423;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____25424 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25424))
{return or__3548__auto____25424;
} else
{var or__3548__auto____25425 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____25425))
{return or__3548__auto____25425;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____25426 = mf;

if(cljs.core.truth_(and__3546__auto____25426))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____25426;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____25427 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25427))
{return or__3548__auto____25427;
} else
{var or__3548__auto____25428 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____25428))
{return or__3548__auto____25428;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____25429 = mf;

if(cljs.core.truth_(and__3546__auto____25429))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____25429;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____25430 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25430))
{return or__3548__auto____25430;
} else
{var or__3548__auto____25431 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____25431))
{return or__3548__auto____25431;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____25432 = mf;

if(cljs.core.truth_(and__3546__auto____25432))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____25432;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____25433 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25433))
{return or__3548__auto____25433;
} else
{var or__3548__auto____25434 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____25434))
{return or__3548__auto____25434;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____25435 = mf;

if(cljs.core.truth_(and__3546__auto____25435))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____25435;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____25436 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25436))
{return or__3548__auto____25436;
} else
{var or__3548__auto____25437 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____25437))
{return or__3548__auto____25437;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____25438 = mf;

if(cljs.core.truth_(and__3546__auto____25438))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____25438;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____25439 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25439))
{return or__3548__auto____25439;
} else
{var or__3548__auto____25440 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____25440))
{return or__3548__auto____25440;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____25441 = mf;

if(cljs.core.truth_(and__3546__auto____25441))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____25441;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____25442 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____25442))
{return or__3548__auto____25442;
} else
{var or__3548__auto____25443 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____25443))
{return or__3548__auto____25443;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__25444 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__25445 = cljs.core._get_method.call(null,mf,dispatch_val__25444);

if(cljs.core.truth_(target_fn__25445))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__25444)));
}
return cljs.core.apply.call(null,target_fn__25445,args);
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
var this__25446 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__25447 = this;
cljs.core.swap_BANG_.call(null,this__25447.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__25447.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__25447.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__25447.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__25448 = this;
cljs.core.swap_BANG_.call(null,this__25448.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__25448.method_cache,this__25448.method_table,this__25448.cached_hierarchy,this__25448.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__25449 = this;
cljs.core.swap_BANG_.call(null,this__25449.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__25449.method_cache,this__25449.method_table,this__25449.cached_hierarchy,this__25449.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__25450 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__25450.cached_hierarchy),cljs.core.deref.call(null,this__25450.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__25450.method_cache,this__25450.method_table,this__25450.cached_hierarchy,this__25450.hierarchy);
}
var temp__3695__auto____25451 = cljs.core.deref.call(null,this__25450.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____25451))
{var target_fn__25452 = temp__3695__auto____25451;

return target_fn__25452;
} else
{var temp__3695__auto____25453 = cljs.core.find_and_cache_best_method.call(null,this__25450.name,dispatch_val,this__25450.hierarchy,this__25450.method_table,this__25450.prefer_table,this__25450.method_cache,this__25450.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____25453))
{var target_fn__25454 = temp__3695__auto____25453;

return target_fn__25454;
} else
{return cljs.core.deref.call(null,this__25450.method_table).call(null,this__25450.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__25455 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__25455.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__25455.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__25455.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__25455.method_cache,this__25455.method_table,this__25455.cached_hierarchy,this__25455.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__25456 = this;
return cljs.core.deref.call(null,this__25456.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__25457 = this;
return cljs.core.deref.call(null,this__25457.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__25458 = this;
return cljs.core.do_dispatch.call(null,mf,this__25458.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__25459__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__25459 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25459__delegate.call(this, _, args);
};
G__25459.cljs$lang$maxFixedArity = 1;
G__25459.cljs$lang$applyTo = (function (arglist__25460){
var _ = cljs.core.first(arglist__25460);
var args = cljs.core.rest(arglist__25460);
return G__25459__delegate.call(this, _, args);
});
return G__25459;
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
