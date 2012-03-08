goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__35883){
var vec__35884__35885 = p__35883;
var k__35886 = cljs.core.nth.call(null,vec__35884__35885,0,null);
var v__35887 = cljs.core.nth.call(null,vec__35884__35885,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__35886.toLowerCase()),v__35887]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__35918 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____35888 = this$;

if(cljs.core.truth_(and__3546__auto____35888))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____35888;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____35889 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35889))
{return or__3548__auto____35889;
} else
{var or__3548__auto____35890 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____35890))
{return or__3548__auto____35890;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__35919 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____35891 = this$;

if(cljs.core.truth_(and__3546__auto____35891))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____35891;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____35892 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35892))
{return or__3548__auto____35892;
} else
{var or__3548__auto____35893 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____35893))
{return or__3548__auto____35893;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__35920 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____35894 = this$;

if(cljs.core.truth_(and__3546__auto____35894))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____35894;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____35895 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35895))
{return or__3548__auto____35895;
} else
{var or__3548__auto____35896 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____35896))
{return or__3548__auto____35896;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__35921 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____35897 = this$;

if(cljs.core.truth_(and__3546__auto____35897))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____35897;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____35898 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35898))
{return or__3548__auto____35898;
} else
{var or__3548__auto____35899 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____35899))
{return or__3548__auto____35899;
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
return connect__35918.call(this,this$);
case  2 :
return connect__35919.call(this,this$,opt1);
case  3 :
return connect__35920.call(this,this$,opt1,opt2);
case  4 :
return connect__35921.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__35923 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____35900 = this$;

if(cljs.core.truth_(and__3546__auto____35900))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____35900;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____35901 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35901))
{return or__3548__auto____35901;
} else
{var or__3548__auto____35902 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____35902))
{return or__3548__auto____35902;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__35924 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____35903 = this$;

if(cljs.core.truth_(and__3546__auto____35903))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____35903;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____35904 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35904))
{return or__3548__auto____35904;
} else
{var or__3548__auto____35905 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____35905))
{return or__3548__auto____35905;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__35925 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____35906 = this$;

if(cljs.core.truth_(and__3546__auto____35906))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____35906;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____35907 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35907))
{return or__3548__auto____35907;
} else
{var or__3548__auto____35908 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____35908))
{return or__3548__auto____35908;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__35926 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____35909 = this$;

if(cljs.core.truth_(and__3546__auto____35909))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____35909;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____35910 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35910))
{return or__3548__auto____35910;
} else
{var or__3548__auto____35911 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____35911))
{return or__3548__auto____35911;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__35927 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____35912 = this$;

if(cljs.core.truth_(and__3546__auto____35912))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____35912;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____35913 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35913))
{return or__3548__auto____35913;
} else
{var or__3548__auto____35914 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____35914))
{return or__3548__auto____35914;
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
return transmit__35923.call(this,this$,opt);
case  3 :
return transmit__35924.call(this,this$,opt,opt2);
case  4 :
return transmit__35925.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__35926.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__35927.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____35915 = this$;

if(cljs.core.truth_(and__3546__auto____35915))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____35915;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____35916 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35916))
{return or__3548__auto____35916;
} else
{var or__3548__auto____35917 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____35917))
{return or__3548__auto____35917;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__35929){
var vec__35930__35931 = p__35929;
var k__35932 = cljs.core.nth.call(null,vec__35930__35931,0,null);
var v__35933 = cljs.core.nth.call(null,vec__35930__35931,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__35932.toLowerCase()),v__35933]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__35934 = null;
var G__35934__35935 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__35934__35936 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__35934__35937 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__35934__35938 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__35934__35939 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__35934 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__35934__35935.call(this,this$,uri);
case  3 :
return G__35934__35936.call(this,this$,uri,method);
case  4 :
return G__35934__35937.call(this,this$,uri,method,content);
case  5 :
return G__35934__35938.call(this,this$,uri,method,content,headers);
case  6 :
return G__35934__35939.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35934;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__35941){
var vec__35942__35943 = p__35941;
var k__35944 = cljs.core.nth.call(null,vec__35942__35943,0,null);
var v__35945 = cljs.core.nth.call(null,vec__35942__35943,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__35944.toLowerCase()),v__35945]);
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
var register_service__35952 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____35946 = this$;

if(cljs.core.truth_(and__3546__auto____35946))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____35946;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____35947 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35947))
{return or__3548__auto____35947;
} else
{var or__3548__auto____35948 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____35948))
{return or__3548__auto____35948;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__35953 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____35949 = this$;

if(cljs.core.truth_(and__3546__auto____35949))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____35949;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____35950 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____35950))
{return or__3548__auto____35950;
} else
{var or__3548__auto____35951 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____35951))
{return or__3548__auto____35951;
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
return register_service__35952.call(this,this$,service_name,fn);
case  4 :
return register_service__35953.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__35955 = null;
var G__35955__35956 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__35955__35957 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__35955__35958 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__35955__35959 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__35955 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__35955__35956.call(this,this$);
case  2 :
return G__35955__35957.call(this,this$,on_connect_fn);
case  3 :
return G__35955__35958.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__35955__35959.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35955;
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
var G__35961 = null;
var G__35961__35962 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__35961__35963 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__35961 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__35961__35962.call(this,this$,service_name,fn);
case  4 :
return G__35961__35963.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__35961;
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
var xpc_connection__35974 = (function (){
var temp__3698__auto____35965 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____35965))
{var config__35966 = temp__3698__auto____35965;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__35966)));
} else
{return null;
}
});
var xpc_connection__35975 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__35967){
var vec__35968__35969 = p__35967;
var k__35970 = cljs.core.nth.call(null,vec__35968__35969,0,null);
var v__35971 = cljs.core.nth.call(null,vec__35968__35969,1,null);

var temp__3695__auto____35972 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__35970);

if(cljs.core.truth_(temp__3695__auto____35972))
{var field__35973 = temp__3695__auto____35972;

return cljs.core.assoc.call(null,sum,field__35973,v__35971);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__35974.call(this);
case  1 :
return xpc_connection__35975.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
