goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.repl_print = (function repl_print(data){
var temp__3695__auto____25461 = cljs.core.deref.call(null,clojure.browser.repl.xpc_connection);

if(cljs.core.truth_(temp__3695__auto____25461))
{var conn__25462 = temp__3695__auto____25461;

return clojure.browser.net.transmit.call(null,conn__25462,"\uFDD0'print",cljs.core.pr_str.call(null,data));
} else
{return null;
}
});
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(conn,block){
var result__25465 = (function (){try{return cljs.core.ObjMap.fromObject(["\uFDD0'status","\uFDD0'value"],{"\uFDD0'status":"\uFDD0'success","\uFDD0'value":cljs.core.str.call(null,eval(block))});
}catch (e25463){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e25463)))
{var e__25464 = e25463;

return cljs.core.ObjMap.fromObject(["\uFDD0'status","\uFDD0'value","\uFDD0'stacktrace"],{"\uFDD0'status":"\uFDD0'exception","\uFDD0'value":cljs.core.pr_str.call(null,e__25464),"\uFDD0'stacktrace":(cljs.core.truth_(e__25464.hasOwnProperty("stack"))?e__25464.stack:"No stacktrace available.")});
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw e25463;
} else
{return null;
}
}
}})();

return cljs.core.pr_str.call(null,result__25465);
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,0);
});
/**
* Send data to be printed in the REPL. If there is an error, try again
* up to 10 times.
*/
clojure.browser.repl.send_print = (function() {
var send_print = null;
var send_print__25467 = (function (url,data){
return send_print.call(null,url,data,0);
});
var send_print__25468 = (function (url,data,n){
var conn__25466 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,conn__25466,"\uFDD0'error",(function (_){
if(cljs.core.truth_((n < 10)))
{return send_print.call(null,url,data,(n + 1));
} else
{return console.log(cljs.core.str.call(null,"Could not send ",data," after ",n," attempts."));
}
}));
return clojure.browser.net.transmit.call(null,conn__25466,url,"POST",data,null,0);
});
send_print = function(url,data,n){
switch(arguments.length){
case  2 :
return send_print__25467.call(this,url,data);
case  3 :
return send_print__25468.call(this,url,data,n);
}
throw('Invalid arity: ' + arguments.length);
};
return send_print;
})()
;
clojure.browser.repl.order = cljs.core.atom.call(null,0);
clojure.browser.repl.wrap_message = (function wrap_message(t,data){
return cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'content","\uFDD0'order"],{"\uFDD0'type":t,"\uFDD0'content":data,"\uFDD0'order":cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)}));
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){
var temp__3695__auto____25470 = clojure.browser.net.xpc_connection.call(null);

if(cljs.core.truth_(temp__3695__auto____25470))
{var repl_connection__25471 = temp__3695__auto____25470;

var connection__25472 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,connection__25472,"\uFDD0'success",(function (e){
return clojure.browser.net.transmit.call(null,repl_connection__25471,"\uFDD0'evaluate-javascript",e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));
clojure.browser.net.register_service.call(null,repl_connection__25471,"\uFDD0'send-result",(function (data){
return clojure.browser.repl.send_result.call(null,connection__25472,url,clojure.browser.repl.wrap_message.call(null,"\uFDD0'result",data));
}));
clojure.browser.net.register_service.call(null,repl_connection__25471,"\uFDD0'print",(function (data){
return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,"\uFDD0'print",data));
}));
clojure.browser.net.connect.call(null,repl_connection__25471,cljs.core.constantly.call(null,null));
return setTimeout.call(null,(function (){
return clojure.browser.repl.send_result.call(null,connection__25472,url,clojure.browser.repl.wrap_message.call(null,"\uFDD0'ready","ready"));
}),50);
} else
{return alert.call(null,"No 'xpc' param provided to child iframe.");
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){
var repl_connection__25473 = clojure.browser.net.xpc_connection.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'peer_uri"],{"\uFDD0'peer_uri":repl_server_url}));

cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection__25473));
clojure.browser.net.register_service.call(null,repl_connection__25473,"\uFDD0'evaluate-javascript",(function (js){
return clojure.browser.net.transmit.call(null,repl_connection__25473,"\uFDD0'send-result",clojure.browser.repl.evaluate_javascript.call(null,repl_connection__25473,js));
}));
return clojure.browser.net.connect.call(null,repl_connection__25473,cljs.core.constantly.call(null,null),(function (iframe){
return iframe.style.display = "none";
}));
});
