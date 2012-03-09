goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__13609){
var vec__13610__13611 = p__13609;
var k__13612 = cljs.core.nth.call(null,vec__13610__13611,0,null);
var v__13613 = cljs.core.nth.call(null,vec__13610__13611,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__13612.toLowerCase()),v__13613]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__13644 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____13614 = this$;

if(cljs.core.truth_(and__3546__auto____13614))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13614;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____13615 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13615))
{return or__3548__auto____13615;
} else
{var or__3548__auto____13616 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13616))
{return or__3548__auto____13616;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__13645 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____13617 = this$;

if(cljs.core.truth_(and__3546__auto____13617))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13617;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____13618 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13618))
{return or__3548__auto____13618;
} else
{var or__3548__auto____13619 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13619))
{return or__3548__auto____13619;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__13646 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____13620 = this$;

if(cljs.core.truth_(and__3546__auto____13620))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13620;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____13621 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13621))
{return or__3548__auto____13621;
} else
{var or__3548__auto____13622 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13622))
{return or__3548__auto____13622;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__13647 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____13623 = this$;

if(cljs.core.truth_(and__3546__auto____13623))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____13623;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____13624 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13624))
{return or__3548__auto____13624;
} else
{var or__3548__auto____13625 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____13625))
{return or__3548__auto____13625;
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
return connect__13644.call(this,this$);
case  2 :
return connect__13645.call(this,this$,opt1);
case  3 :
return connect__13646.call(this,this$,opt1,opt2);
case  4 :
return connect__13647.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__13649 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____13626 = this$;

if(cljs.core.truth_(and__3546__auto____13626))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13626;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____13627 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13627))
{return or__3548__auto____13627;
} else
{var or__3548__auto____13628 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13628))
{return or__3548__auto____13628;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__13650 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____13629 = this$;

if(cljs.core.truth_(and__3546__auto____13629))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13629;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____13630 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13630))
{return or__3548__auto____13630;
} else
{var or__3548__auto____13631 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13631))
{return or__3548__auto____13631;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__13651 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____13632 = this$;

if(cljs.core.truth_(and__3546__auto____13632))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13632;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____13633 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13633))
{return or__3548__auto____13633;
} else
{var or__3548__auto____13634 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13634))
{return or__3548__auto____13634;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__13652 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____13635 = this$;

if(cljs.core.truth_(and__3546__auto____13635))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13635;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____13636 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13636))
{return or__3548__auto____13636;
} else
{var or__3548__auto____13637 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13637))
{return or__3548__auto____13637;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__13653 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____13638 = this$;

if(cljs.core.truth_(and__3546__auto____13638))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____13638;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____13639 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13639))
{return or__3548__auto____13639;
} else
{var or__3548__auto____13640 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____13640))
{return or__3548__auto____13640;
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
return transmit__13649.call(this,this$,opt);
case  3 :
return transmit__13650.call(this,this$,opt,opt2);
case  4 :
return transmit__13651.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__13652.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__13653.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____13641 = this$;

if(cljs.core.truth_(and__3546__auto____13641))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____13641;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____13642 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13642))
{return or__3548__auto____13642;
} else
{var or__3548__auto____13643 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____13643))
{return or__3548__auto____13643;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__13655){
var vec__13656__13657 = p__13655;
var k__13658 = cljs.core.nth.call(null,vec__13656__13657,0,null);
var v__13659 = cljs.core.nth.call(null,vec__13656__13657,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__13658.toLowerCase()),v__13659]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__13660 = null;
var G__13660__13661 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13660__13662 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13660__13663 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13660__13664 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__13660__13665 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__13660 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__13660__13661.call(this,this$,uri);
case  3 :
return G__13660__13662.call(this,this$,uri,method);
case  4 :
return G__13660__13663.call(this,this$,uri,method,content);
case  5 :
return G__13660__13664.call(this,this$,uri,method,content,headers);
case  6 :
return G__13660__13665.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13660;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__13667){
var vec__13668__13669 = p__13667;
var k__13670 = cljs.core.nth.call(null,vec__13668__13669,0,null);
var v__13671 = cljs.core.nth.call(null,vec__13668__13669,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__13670.toLowerCase()),v__13671]);
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
var register_service__13678 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____13672 = this$;

if(cljs.core.truth_(and__3546__auto____13672))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____13672;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____13673 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13673))
{return or__3548__auto____13673;
} else
{var or__3548__auto____13674 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____13674))
{return or__3548__auto____13674;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__13679 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____13675 = this$;

if(cljs.core.truth_(and__3546__auto____13675))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____13675;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____13676 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____13676))
{return or__3548__auto____13676;
} else
{var or__3548__auto____13677 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____13677))
{return or__3548__auto____13677;
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
return register_service__13678.call(this,this$,service_name,fn);
case  4 :
return register_service__13679.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__13681 = null;
var G__13681__13682 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__13681__13683 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__13681__13684 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__13681__13685 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__13681 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__13681__13682.call(this,this$);
case  2 :
return G__13681__13683.call(this,this$,on_connect_fn);
case  3 :
return G__13681__13684.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__13681__13685.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13681;
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
var G__13687 = null;
var G__13687__13688 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__13687__13689 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__13687 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__13687__13688.call(this,this$,service_name,fn);
case  4 :
return G__13687__13689.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13687;
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
var xpc_connection__13700 = (function (){
var temp__3698__auto____13691 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____13691))
{var config__13692 = temp__3698__auto____13691;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__13692)));
} else
{return null;
}
});
var xpc_connection__13701 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__13693){
var vec__13694__13695 = p__13693;
var k__13696 = cljs.core.nth.call(null,vec__13694__13695,0,null);
var v__13697 = cljs.core.nth.call(null,vec__13694__13695,1,null);

var temp__3695__auto____13698 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__13696);

if(cljs.core.truth_(temp__3695__auto____13698))
{var field__13699 = temp__3695__auto____13698;

return cljs.core.assoc.call(null,sum,field__13699,v__13697);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__13700.call(this);
case  1 :
return xpc_connection__13701.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
