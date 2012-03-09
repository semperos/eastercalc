goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__87899){
var vec__87900__87901 = p__87899;
var k__87902 = cljs.core.nth.call(null,vec__87900__87901,0,null);
var v__87903 = cljs.core.nth.call(null,vec__87900__87901,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__87902.toLowerCase()),v__87903]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__87934 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____87904 = this$;

if(cljs.core.truth_(and__3546__auto____87904))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____87904;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____87905 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87905))
{return or__3548__auto____87905;
} else
{var or__3548__auto____87906 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____87906))
{return or__3548__auto____87906;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__87935 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____87907 = this$;

if(cljs.core.truth_(and__3546__auto____87907))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____87907;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____87908 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87908))
{return or__3548__auto____87908;
} else
{var or__3548__auto____87909 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____87909))
{return or__3548__auto____87909;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__87936 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____87910 = this$;

if(cljs.core.truth_(and__3546__auto____87910))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____87910;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____87911 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87911))
{return or__3548__auto____87911;
} else
{var or__3548__auto____87912 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____87912))
{return or__3548__auto____87912;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__87937 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____87913 = this$;

if(cljs.core.truth_(and__3546__auto____87913))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____87913;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____87914 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87914))
{return or__3548__auto____87914;
} else
{var or__3548__auto____87915 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____87915))
{return or__3548__auto____87915;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__87934.call(this,this$);
case  2 :
return connect__87935.call(this,this$,opt1);
case  3 :
return connect__87936.call(this,this$,opt1,opt2);
case  4 :
return connect__87937.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__87939 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____87916 = this$;

if(cljs.core.truth_(and__3546__auto____87916))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____87916;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____87917 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87917))
{return or__3548__auto____87917;
} else
{var or__3548__auto____87918 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____87918))
{return or__3548__auto____87918;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__87940 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____87919 = this$;

if(cljs.core.truth_(and__3546__auto____87919))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____87919;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____87920 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87920))
{return or__3548__auto____87920;
} else
{var or__3548__auto____87921 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____87921))
{return or__3548__auto____87921;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__87941 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____87922 = this$;

if(cljs.core.truth_(and__3546__auto____87922))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____87922;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____87923 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87923))
{return or__3548__auto____87923;
} else
{var or__3548__auto____87924 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____87924))
{return or__3548__auto____87924;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__87942 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____87925 = this$;

if(cljs.core.truth_(and__3546__auto____87925))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____87925;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____87926 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87926))
{return or__3548__auto____87926;
} else
{var or__3548__auto____87927 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____87927))
{return or__3548__auto____87927;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__87943 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____87928 = this$;

if(cljs.core.truth_(and__3546__auto____87928))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____87928;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____87929 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87929))
{return or__3548__auto____87929;
} else
{var or__3548__auto____87930 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____87930))
{return or__3548__auto____87930;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__87939.call(this,this$,opt);
case  3 :
return transmit__87940.call(this,this$,opt,opt2);
case  4 :
return transmit__87941.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__87942.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__87943.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____87931 = this$;

if(cljs.core.truth_(and__3546__auto____87931))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____87931;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____87932 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87932))
{return or__3548__auto____87932;
} else
{var or__3548__auto____87933 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____87933))
{return or__3548__auto____87933;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__87945){
var vec__87946__87947 = p__87945;
var k__87948 = cljs.core.nth.call(null,vec__87946__87947,0,null);
var v__87949 = cljs.core.nth.call(null,vec__87946__87947,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__87948.toLowerCase()),v__87949]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__87950 = null;
var G__87950__87951 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__87950__87952 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__87950__87953 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__87950__87954 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__87950__87955 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__87950 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__87950__87951.call(this,this$,uri);
case  3 :
return G__87950__87952.call(this,this$,uri,method);
case  4 :
return G__87950__87953.call(this,this$,uri,method,content);
case  5 :
return G__87950__87954.call(this,this$,uri,method,content,headers);
case  6 :
return G__87950__87955.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87950;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__87957){
var vec__87958__87959 = p__87957;
var k__87960 = cljs.core.nth.call(null,vec__87958__87959,0,null);
var v__87961 = cljs.core.nth.call(null,vec__87958__87959,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__87960.toLowerCase()),v__87961]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__87968 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____87962 = this$;

if(cljs.core.truth_(and__3546__auto____87962))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____87962;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____87963 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87963))
{return or__3548__auto____87963;
} else
{var or__3548__auto____87964 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____87964))
{return or__3548__auto____87964;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__87969 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____87965 = this$;

if(cljs.core.truth_(and__3546__auto____87965))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____87965;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____87966 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____87966))
{return or__3548__auto____87966;
} else
{var or__3548__auto____87967 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____87967))
{return or__3548__auto____87967;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__87968.call(this,this$,service_name,fn);
case  4 :
return register_service__87969.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__87971 = null;
var G__87971__87972 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__87971__87973 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__87971__87974 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__87971__87975 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__87971 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__87971__87972.call(this,this$);
case  2 :
return G__87971__87973.call(this,this$,on_connect_fn);
case  3 :
return G__87971__87974.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__87971__87975.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87971;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__87977 = null;
var G__87977__87978 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__87977__87979 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__87977 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__87977__87978.call(this,this$,service_name,fn);
case  4 :
return G__87977__87979.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__87977;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__87990 = (function (){
var temp__3698__auto____87981 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____87981))
{var config__87982 = temp__3698__auto____87981;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__87982)));
} else
{return null;
}
});
var xpc_connection__87991 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__87983){
var vec__87984__87985 = p__87983;
var k__87986 = cljs.core.nth.call(null,vec__87984__87985,0,null);
var v__87987 = cljs.core.nth.call(null,vec__87984__87985,1,null);

var temp__3695__auto____87988 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__87986);

if(cljs.core.truth_(temp__3695__auto____87988))
{var field__87989 = temp__3695__auto____87988;

return cljs.core.assoc.call(null,sum,field__87989,v__87987);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__87990.call(this);
case  1 :
return xpc_connection__87991.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
