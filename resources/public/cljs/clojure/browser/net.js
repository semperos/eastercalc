goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__115120){
var vec__115121__115122 = p__115120;
var k__115123 = cljs.core.nth.call(null,vec__115121__115122,0,null);
var v__115124 = cljs.core.nth.call(null,vec__115121__115122,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__115123.toLowerCase()),v__115124]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__115155 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____115125 = this$;

if(cljs.core.truth_(and__3546__auto____115125))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____115125;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____115126 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115126))
{return or__3548__auto____115126;
} else
{var or__3548__auto____115127 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____115127))
{return or__3548__auto____115127;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__115156 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____115128 = this$;

if(cljs.core.truth_(and__3546__auto____115128))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____115128;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____115129 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115129))
{return or__3548__auto____115129;
} else
{var or__3548__auto____115130 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____115130))
{return or__3548__auto____115130;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__115157 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____115131 = this$;

if(cljs.core.truth_(and__3546__auto____115131))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____115131;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____115132 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115132))
{return or__3548__auto____115132;
} else
{var or__3548__auto____115133 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____115133))
{return or__3548__auto____115133;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__115158 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____115134 = this$;

if(cljs.core.truth_(and__3546__auto____115134))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____115134;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____115135 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115135))
{return or__3548__auto____115135;
} else
{var or__3548__auto____115136 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____115136))
{return or__3548__auto____115136;
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
return connect__115155.call(this,this$);
case  2 :
return connect__115156.call(this,this$,opt1);
case  3 :
return connect__115157.call(this,this$,opt1,opt2);
case  4 :
return connect__115158.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__115160 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____115137 = this$;

if(cljs.core.truth_(and__3546__auto____115137))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____115137;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____115138 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115138))
{return or__3548__auto____115138;
} else
{var or__3548__auto____115139 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____115139))
{return or__3548__auto____115139;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__115161 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____115140 = this$;

if(cljs.core.truth_(and__3546__auto____115140))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____115140;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____115141 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115141))
{return or__3548__auto____115141;
} else
{var or__3548__auto____115142 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____115142))
{return or__3548__auto____115142;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__115162 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____115143 = this$;

if(cljs.core.truth_(and__3546__auto____115143))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____115143;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____115144 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115144))
{return or__3548__auto____115144;
} else
{var or__3548__auto____115145 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____115145))
{return or__3548__auto____115145;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__115163 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____115146 = this$;

if(cljs.core.truth_(and__3546__auto____115146))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____115146;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____115147 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115147))
{return or__3548__auto____115147;
} else
{var or__3548__auto____115148 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____115148))
{return or__3548__auto____115148;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__115164 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____115149 = this$;

if(cljs.core.truth_(and__3546__auto____115149))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____115149;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____115150 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115150))
{return or__3548__auto____115150;
} else
{var or__3548__auto____115151 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____115151))
{return or__3548__auto____115151;
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
return transmit__115160.call(this,this$,opt);
case  3 :
return transmit__115161.call(this,this$,opt,opt2);
case  4 :
return transmit__115162.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__115163.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__115164.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____115152 = this$;

if(cljs.core.truth_(and__3546__auto____115152))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____115152;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____115153 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115153))
{return or__3548__auto____115153;
} else
{var or__3548__auto____115154 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____115154))
{return or__3548__auto____115154;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__115166){
var vec__115167__115168 = p__115166;
var k__115169 = cljs.core.nth.call(null,vec__115167__115168,0,null);
var v__115170 = cljs.core.nth.call(null,vec__115167__115168,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__115169.toLowerCase()),v__115170]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__115171 = null;
var G__115171__115172 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__115171__115173 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__115171__115174 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__115171__115175 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__115171__115176 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__115171 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__115171__115172.call(this,this$,uri);
case  3 :
return G__115171__115173.call(this,this$,uri,method);
case  4 :
return G__115171__115174.call(this,this$,uri,method,content);
case  5 :
return G__115171__115175.call(this,this$,uri,method,content,headers);
case  6 :
return G__115171__115176.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115171;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__115178){
var vec__115179__115180 = p__115178;
var k__115181 = cljs.core.nth.call(null,vec__115179__115180,0,null);
var v__115182 = cljs.core.nth.call(null,vec__115179__115180,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__115181.toLowerCase()),v__115182]);
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
var register_service__115189 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____115183 = this$;

if(cljs.core.truth_(and__3546__auto____115183))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____115183;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____115184 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115184))
{return or__3548__auto____115184;
} else
{var or__3548__auto____115185 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____115185))
{return or__3548__auto____115185;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__115190 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____115186 = this$;

if(cljs.core.truth_(and__3546__auto____115186))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____115186;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____115187 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____115187))
{return or__3548__auto____115187;
} else
{var or__3548__auto____115188 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____115188))
{return or__3548__auto____115188;
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
return register_service__115189.call(this,this$,service_name,fn);
case  4 :
return register_service__115190.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__115192 = null;
var G__115192__115193 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__115192__115194 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__115192__115195 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__115192__115196 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__115192 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__115192__115193.call(this,this$);
case  2 :
return G__115192__115194.call(this,this$,on_connect_fn);
case  3 :
return G__115192__115195.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__115192__115196.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115192;
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
var G__115198 = null;
var G__115198__115199 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__115198__115200 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__115198 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__115198__115199.call(this,this$,service_name,fn);
case  4 :
return G__115198__115200.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__115198;
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
var xpc_connection__115211 = (function (){
var temp__3698__auto____115202 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____115202))
{var config__115203 = temp__3698__auto____115202;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__115203)));
} else
{return null;
}
});
var xpc_connection__115212 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__115204){
var vec__115205__115206 = p__115204;
var k__115207 = cljs.core.nth.call(null,vec__115205__115206,0,null);
var v__115208 = cljs.core.nth.call(null,vec__115205__115206,1,null);

var temp__3695__auto____115209 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__115207);

if(cljs.core.truth_(temp__3695__auto____115209))
{var field__115210 = temp__3695__auto____115209;

return cljs.core.assoc.call(null,sum,field__115210,v__115208);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__115211.call(this);
case  1 :
return xpc_connection__115212.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
