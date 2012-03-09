goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__25474){
var vec__25475__25476 = p__25474;
var k__25477 = cljs.core.nth.call(null,vec__25475__25476,0,null);
var v__25478 = cljs.core.nth.call(null,vec__25475__25476,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__25477.toLowerCase()),v__25478]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__25509 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____25479 = this$;

if(cljs.core.truth_(and__3546__auto____25479))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____25479;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____25480 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25480))
{return or__3548__auto____25480;
} else
{var or__3548__auto____25481 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____25481))
{return or__3548__auto____25481;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__25510 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____25482 = this$;

if(cljs.core.truth_(and__3546__auto____25482))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____25482;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____25483 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25483))
{return or__3548__auto____25483;
} else
{var or__3548__auto____25484 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____25484))
{return or__3548__auto____25484;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__25511 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____25485 = this$;

if(cljs.core.truth_(and__3546__auto____25485))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____25485;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____25486 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25486))
{return or__3548__auto____25486;
} else
{var or__3548__auto____25487 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____25487))
{return or__3548__auto____25487;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__25512 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____25488 = this$;

if(cljs.core.truth_(and__3546__auto____25488))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____25488;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____25489 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25489))
{return or__3548__auto____25489;
} else
{var or__3548__auto____25490 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____25490))
{return or__3548__auto____25490;
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
return connect__25509.call(this,this$);
case  2 :
return connect__25510.call(this,this$,opt1);
case  3 :
return connect__25511.call(this,this$,opt1,opt2);
case  4 :
return connect__25512.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__25514 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____25491 = this$;

if(cljs.core.truth_(and__3546__auto____25491))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____25491;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____25492 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25492))
{return or__3548__auto____25492;
} else
{var or__3548__auto____25493 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____25493))
{return or__3548__auto____25493;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__25515 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____25494 = this$;

if(cljs.core.truth_(and__3546__auto____25494))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____25494;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____25495 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25495))
{return or__3548__auto____25495;
} else
{var or__3548__auto____25496 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____25496))
{return or__3548__auto____25496;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__25516 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____25497 = this$;

if(cljs.core.truth_(and__3546__auto____25497))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____25497;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____25498 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25498))
{return or__3548__auto____25498;
} else
{var or__3548__auto____25499 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____25499))
{return or__3548__auto____25499;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__25517 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____25500 = this$;

if(cljs.core.truth_(and__3546__auto____25500))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____25500;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____25501 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25501))
{return or__3548__auto____25501;
} else
{var or__3548__auto____25502 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____25502))
{return or__3548__auto____25502;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__25518 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____25503 = this$;

if(cljs.core.truth_(and__3546__auto____25503))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____25503;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____25504 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25504))
{return or__3548__auto____25504;
} else
{var or__3548__auto____25505 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____25505))
{return or__3548__auto____25505;
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
return transmit__25514.call(this,this$,opt);
case  3 :
return transmit__25515.call(this,this$,opt,opt2);
case  4 :
return transmit__25516.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__25517.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__25518.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____25506 = this$;

if(cljs.core.truth_(and__3546__auto____25506))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____25506;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____25507 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25507))
{return or__3548__auto____25507;
} else
{var or__3548__auto____25508 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____25508))
{return or__3548__auto____25508;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__25520){
var vec__25521__25522 = p__25520;
var k__25523 = cljs.core.nth.call(null,vec__25521__25522,0,null);
var v__25524 = cljs.core.nth.call(null,vec__25521__25522,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__25523.toLowerCase()),v__25524]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__25525 = null;
var G__25525__25526 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__25525__25527 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__25525__25528 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__25525__25529 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__25525__25530 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__25525 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__25525__25526.call(this,this$,uri);
case  3 :
return G__25525__25527.call(this,this$,uri,method);
case  4 :
return G__25525__25528.call(this,this$,uri,method,content);
case  5 :
return G__25525__25529.call(this,this$,uri,method,content,headers);
case  6 :
return G__25525__25530.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25525;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__25532){
var vec__25533__25534 = p__25532;
var k__25535 = cljs.core.nth.call(null,vec__25533__25534,0,null);
var v__25536 = cljs.core.nth.call(null,vec__25533__25534,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__25535.toLowerCase()),v__25536]);
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
var register_service__25543 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____25537 = this$;

if(cljs.core.truth_(and__3546__auto____25537))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____25537;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____25538 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25538))
{return or__3548__auto____25538;
} else
{var or__3548__auto____25539 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____25539))
{return or__3548__auto____25539;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__25544 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____25540 = this$;

if(cljs.core.truth_(and__3546__auto____25540))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____25540;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____25541 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25541))
{return or__3548__auto____25541;
} else
{var or__3548__auto____25542 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____25542))
{return or__3548__auto____25542;
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
return register_service__25543.call(this,this$,service_name,fn);
case  4 :
return register_service__25544.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__25546 = null;
var G__25546__25547 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__25546__25548 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__25546__25549 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__25546__25550 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__25546 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__25546__25547.call(this,this$);
case  2 :
return G__25546__25548.call(this,this$,on_connect_fn);
case  3 :
return G__25546__25549.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__25546__25550.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25546;
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
var G__25552 = null;
var G__25552__25553 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__25552__25554 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__25552 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__25552__25553.call(this,this$,service_name,fn);
case  4 :
return G__25552__25554.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25552;
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
var xpc_connection__25565 = (function (){
var temp__3698__auto____25556 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____25556))
{var config__25557 = temp__3698__auto____25556;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__25557)));
} else
{return null;
}
});
var xpc_connection__25566 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__25558){
var vec__25559__25560 = p__25558;
var k__25561 = cljs.core.nth.call(null,vec__25559__25560,0,null);
var v__25562 = cljs.core.nth.call(null,vec__25559__25560,1,null);

var temp__3695__auto____25563 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__25561);

if(cljs.core.truth_(temp__3695__auto____25563))
{var field__25564 = temp__3695__auto____25563;

return cljs.core.assoc.call(null,sum,field__25564,v__25562);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__25565.call(this);
case  1 :
return xpc_connection__25566.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
