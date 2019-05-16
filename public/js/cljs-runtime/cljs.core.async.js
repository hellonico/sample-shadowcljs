goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31010 = arguments.length;
switch (G__31010) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31011 = (function (f,blockable,meta31012){
this.f = f;
this.blockable = blockable;
this.meta31012 = meta31012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31013,meta31012__$1){
var self__ = this;
var _31013__$1 = this;
return (new cljs.core.async.t_cljs$core$async31011(self__.f,self__.blockable,meta31012__$1));
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31013){
var self__ = this;
var _31013__$1 = this;
return self__.meta31012;
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31012","meta31012",1530589440,null)], null);
});

cljs.core.async.t_cljs$core$async31011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31011";

cljs.core.async.t_cljs$core$async31011.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31011");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31011.
 */
cljs.core.async.__GT_t_cljs$core$async31011 = (function cljs$core$async$__GT_t_cljs$core$async31011(f__$1,blockable__$1,meta31012){
return (new cljs.core.async.t_cljs$core$async31011(f__$1,blockable__$1,meta31012));
});

}

return (new cljs.core.async.t_cljs$core$async31011(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31038 = arguments.length;
switch (G__31038) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31063 = arguments.length;
switch (G__31063) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31085 = arguments.length;
switch (G__31085) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33002 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33002) : fn1.call(null,val_33002));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33002,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33002) : fn1.call(null,val_33002));
});})(val_33002,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31093 = arguments.length;
switch (G__31093) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33026 = n;
var x_33027 = (0);
while(true){
if((x_33027 < n__4607__auto___33026)){
(a[x_33027] = (0));

var G__33028 = (x_33027 + (1));
x_33027 = G__33028;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__33037 = (i + (1));
i = G__33037;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31113 = (function (flag,meta31114){
this.flag = flag;
this.meta31114 = meta31114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31115,meta31114__$1){
var self__ = this;
var _31115__$1 = this;
return (new cljs.core.async.t_cljs$core$async31113(self__.flag,meta31114__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31115){
var self__ = this;
var _31115__$1 = this;
return self__.meta31114;
});})(flag))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31113.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31114","meta31114",802595479,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31113";

cljs.core.async.t_cljs$core$async31113.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31113");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31113.
 */
cljs.core.async.__GT_t_cljs$core$async31113 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31113(flag__$1,meta31114){
return (new cljs.core.async.t_cljs$core$async31113(flag__$1,meta31114));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31113(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31130 = (function (flag,cb,meta31131){
this.flag = flag;
this.cb = cb;
this.meta31131 = meta31131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31132,meta31131__$1){
var self__ = this;
var _31132__$1 = this;
return (new cljs.core.async.t_cljs$core$async31130(self__.flag,self__.cb,meta31131__$1));
});

cljs.core.async.t_cljs$core$async31130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31132){
var self__ = this;
var _31132__$1 = this;
return self__.meta31131;
});

cljs.core.async.t_cljs$core$async31130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31131","meta31131",798600579,null)], null);
});

cljs.core.async.t_cljs$core$async31130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31130";

cljs.core.async.t_cljs$core$async31130.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31130");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31130.
 */
cljs.core.async.__GT_t_cljs$core$async31130 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31130(flag__$1,cb__$1,meta31131){
return (new cljs.core.async.t_cljs$core$async31130(flag__$1,cb__$1,meta31131));
});

}

return (new cljs.core.async.t_cljs$core$async31130(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31133_SHARP_){
var G__31135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31133_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31135) : fret.call(null,G__31135));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31134_SHARP_){
var G__31136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31134_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31136) : fret.call(null,G__31136));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33055 = (i + (1));
i = G__33055;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33060 = arguments.length;
var i__4731__auto___33061 = (0);
while(true){
if((i__4731__auto___33061 < len__4730__auto___33060)){
args__4736__auto__.push((arguments[i__4731__auto___33061]));

var G__33062 = (i__4731__auto___33061 + (1));
i__4731__auto___33061 = G__33062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31139){
var map__31140 = p__31139;
var map__31140__$1 = (((((!((map__31140 == null))))?(((((map__31140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31140):map__31140);
var opts = map__31140__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31137){
var G__31138 = cljs.core.first(seq31137);
var seq31137__$1 = cljs.core.next(seq31137);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31138,seq31137__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31145 = arguments.length;
switch (G__31145) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30929__auto___33073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33073){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33073){
return (function (state_31170){
var state_val_31171 = (state_31170[(1)]);
if((state_val_31171 === (7))){
var inst_31165 = (state_31170[(2)]);
var state_31170__$1 = state_31170;
var statearr_31172_33077 = state_31170__$1;
(statearr_31172_33077[(2)] = inst_31165);

(statearr_31172_33077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (1))){
var state_31170__$1 = state_31170;
var statearr_31173_33078 = state_31170__$1;
(statearr_31173_33078[(2)] = null);

(statearr_31173_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (4))){
var inst_31148 = (state_31170[(7)]);
var inst_31148__$1 = (state_31170[(2)]);
var inst_31149 = (inst_31148__$1 == null);
var state_31170__$1 = (function (){var statearr_31174 = state_31170;
(statearr_31174[(7)] = inst_31148__$1);

return statearr_31174;
})();
if(cljs.core.truth_(inst_31149)){
var statearr_31175_33079 = state_31170__$1;
(statearr_31175_33079[(1)] = (5));

} else {
var statearr_31176_33080 = state_31170__$1;
(statearr_31176_33080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (13))){
var state_31170__$1 = state_31170;
var statearr_31177_33085 = state_31170__$1;
(statearr_31177_33085[(2)] = null);

(statearr_31177_33085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (6))){
var inst_31148 = (state_31170[(7)]);
var state_31170__$1 = state_31170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31170__$1,(11),to,inst_31148);
} else {
if((state_val_31171 === (3))){
var inst_31168 = (state_31170[(2)]);
var state_31170__$1 = state_31170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31170__$1,inst_31168);
} else {
if((state_val_31171 === (12))){
var state_31170__$1 = state_31170;
var statearr_31178_33111 = state_31170__$1;
(statearr_31178_33111[(2)] = null);

(statearr_31178_33111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (2))){
var state_31170__$1 = state_31170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31170__$1,(4),from);
} else {
if((state_val_31171 === (11))){
var inst_31158 = (state_31170[(2)]);
var state_31170__$1 = state_31170;
if(cljs.core.truth_(inst_31158)){
var statearr_31179_33112 = state_31170__$1;
(statearr_31179_33112[(1)] = (12));

} else {
var statearr_31180_33113 = state_31170__$1;
(statearr_31180_33113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (9))){
var state_31170__$1 = state_31170;
var statearr_31181_33114 = state_31170__$1;
(statearr_31181_33114[(2)] = null);

(statearr_31181_33114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (5))){
var state_31170__$1 = state_31170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31182_33115 = state_31170__$1;
(statearr_31182_33115[(1)] = (8));

} else {
var statearr_31183_33116 = state_31170__$1;
(statearr_31183_33116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (14))){
var inst_31163 = (state_31170[(2)]);
var state_31170__$1 = state_31170;
var statearr_31184_33117 = state_31170__$1;
(statearr_31184_33117[(2)] = inst_31163);

(statearr_31184_33117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (10))){
var inst_31155 = (state_31170[(2)]);
var state_31170__$1 = state_31170;
var statearr_31185_33118 = state_31170__$1;
(statearr_31185_33118[(2)] = inst_31155);

(statearr_31185_33118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31171 === (8))){
var inst_31152 = cljs.core.async.close_BANG_(to);
var state_31170__$1 = state_31170;
var statearr_31187_33119 = state_31170__$1;
(statearr_31187_33119[(2)] = inst_31152);

(statearr_31187_33119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33073))
;
return ((function (switch__30708__auto__,c__30929__auto___33073){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_31188 = [null,null,null,null,null,null,null,null];
(statearr_31188[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_31188[(1)] = (1));

return statearr_31188;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_31170){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31170);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31189){if((e31189 instanceof Object)){
var ex__30712__auto__ = e31189;
var statearr_31190_33122 = state_31170;
(statearr_31190_33122[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33123 = state_31170;
state_31170 = G__33123;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_31170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_31170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33073))
})();
var state__30931__auto__ = (function (){var statearr_31191 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31191[(6)] = c__30929__auto___33073);

return statearr_31191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33073))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31192){
var vec__31193 = p__31192;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31193,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31193,(1),null);
var job = vec__31193;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30929__auto___33124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33124,res,vec__31193,v,p,job,jobs,results){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33124,res,vec__31193,v,p,job,jobs,results){
return (function (state_31200){
var state_val_31201 = (state_31200[(1)]);
if((state_val_31201 === (1))){
var state_31200__$1 = state_31200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31200__$1,(2),res,v);
} else {
if((state_val_31201 === (2))){
var inst_31197 = (state_31200[(2)]);
var inst_31198 = cljs.core.async.close_BANG_(res);
var state_31200__$1 = (function (){var statearr_31202 = state_31200;
(statearr_31202[(7)] = inst_31197);

return statearr_31202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31200__$1,inst_31198);
} else {
return null;
}
}
});})(c__30929__auto___33124,res,vec__31193,v,p,job,jobs,results))
;
return ((function (switch__30708__auto__,c__30929__auto___33124,res,vec__31193,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31203 = [null,null,null,null,null,null,null,null];
(statearr_31203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31203[(1)] = (1));

return statearr_31203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31200){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31200);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31204){if((e31204 instanceof Object)){
var ex__30712__auto__ = e31204;
var statearr_31205_33125 = state_31200;
(statearr_31205_33125[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33126 = state_31200;
state_31200 = G__33126;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33124,res,vec__31193,v,p,job,jobs,results))
})();
var state__30931__auto__ = (function (){var statearr_31206 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31206[(6)] = c__30929__auto___33124);

return statearr_31206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33124,res,vec__31193,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31207){
var vec__31208 = p__31207;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208,(1),null);
var job = vec__31208;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33130 = n;
var __33131 = (0);
while(true){
if((__33131 < n__4607__auto___33130)){
var G__31211_33132 = type;
var G__31211_33133__$1 = (((G__31211_33132 instanceof cljs.core.Keyword))?G__31211_33132.fqn:null);
switch (G__31211_33133__$1) {
case "compute":
var c__30929__auto___33135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33131,c__30929__auto___33135,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (__33131,c__30929__auto___33135,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async){
return (function (state_31224){
var state_val_31225 = (state_31224[(1)]);
if((state_val_31225 === (1))){
var state_31224__$1 = state_31224;
var statearr_31226_33136 = state_31224__$1;
(statearr_31226_33136[(2)] = null);

(statearr_31226_33136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (2))){
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31224__$1,(4),jobs);
} else {
if((state_val_31225 === (3))){
var inst_31222 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31224__$1,inst_31222);
} else {
if((state_val_31225 === (4))){
var inst_31214 = (state_31224[(2)]);
var inst_31215 = process(inst_31214);
var state_31224__$1 = state_31224;
if(cljs.core.truth_(inst_31215)){
var statearr_31227_33140 = state_31224__$1;
(statearr_31227_33140[(1)] = (5));

} else {
var statearr_31228_33141 = state_31224__$1;
(statearr_31228_33141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (5))){
var state_31224__$1 = state_31224;
var statearr_31229_33143 = state_31224__$1;
(statearr_31229_33143[(2)] = null);

(statearr_31229_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (6))){
var state_31224__$1 = state_31224;
var statearr_31231_33144 = state_31224__$1;
(statearr_31231_33144[(2)] = null);

(statearr_31231_33144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (7))){
var inst_31220 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
var statearr_31232_33146 = state_31224__$1;
(statearr_31232_33146[(2)] = inst_31220);

(statearr_31232_33146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33131,c__30929__auto___33135,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async))
;
return ((function (__33131,switch__30708__auto__,c__30929__auto___33135,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null];
(statearr_31233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31224){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31224);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31234){if((e31234 instanceof Object)){
var ex__30712__auto__ = e31234;
var statearr_31235_33148 = state_31224;
(statearr_31235_33148[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33150 = state_31224;
state_31224 = G__33150;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(__33131,switch__30708__auto__,c__30929__auto___33135,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async))
})();
var state__30931__auto__ = (function (){var statearr_31236 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31236[(6)] = c__30929__auto___33135);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(__33131,c__30929__auto___33135,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async))
);


break;
case "async":
var c__30929__auto___33151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33131,c__30929__auto___33151,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (__33131,c__30929__auto___33151,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async){
return (function (state_31249){
var state_val_31250 = (state_31249[(1)]);
if((state_val_31250 === (1))){
var state_31249__$1 = state_31249;
var statearr_31251_33152 = state_31249__$1;
(statearr_31251_33152[(2)] = null);

(statearr_31251_33152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (2))){
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31249__$1,(4),jobs);
} else {
if((state_val_31250 === (3))){
var inst_31247 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31249__$1,inst_31247);
} else {
if((state_val_31250 === (4))){
var inst_31239 = (state_31249[(2)]);
var inst_31240 = async(inst_31239);
var state_31249__$1 = state_31249;
if(cljs.core.truth_(inst_31240)){
var statearr_31252_33153 = state_31249__$1;
(statearr_31252_33153[(1)] = (5));

} else {
var statearr_31253_33154 = state_31249__$1;
(statearr_31253_33154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (5))){
var state_31249__$1 = state_31249;
var statearr_31254_33155 = state_31249__$1;
(statearr_31254_33155[(2)] = null);

(statearr_31254_33155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (6))){
var state_31249__$1 = state_31249;
var statearr_31255_33156 = state_31249__$1;
(statearr_31255_33156[(2)] = null);

(statearr_31255_33156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (7))){
var inst_31245 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31256_33157 = state_31249__$1;
(statearr_31256_33157[(2)] = inst_31245);

(statearr_31256_33157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33131,c__30929__auto___33151,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async))
;
return ((function (__33131,switch__30708__auto__,c__30929__auto___33151,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31257 = [null,null,null,null,null,null,null];
(statearr_31257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31257[(1)] = (1));

return statearr_31257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31249){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31249);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31258){if((e31258 instanceof Object)){
var ex__30712__auto__ = e31258;
var statearr_31259_33178 = state_31249;
(statearr_31259_33178[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33179 = state_31249;
state_31249 = G__33179;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(__33131,switch__30708__auto__,c__30929__auto___33151,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async))
})();
var state__30931__auto__ = (function (){var statearr_31260 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31260[(6)] = c__30929__auto___33151);

return statearr_31260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(__33131,c__30929__auto___33151,G__31211_33132,G__31211_33133__$1,n__4607__auto___33130,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31211_33133__$1)].join('')));

}

var G__33180 = (__33131 + (1));
__33131 = G__33180;
continue;
} else {
}
break;
}

var c__30929__auto___33181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33181,jobs,results,process,async){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33181,jobs,results,process,async){
return (function (state_31282){
var state_val_31283 = (state_31282[(1)]);
if((state_val_31283 === (7))){
var inst_31278 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31284_33182 = state_31282__$1;
(statearr_31284_33182[(2)] = inst_31278);

(statearr_31284_33182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (1))){
var state_31282__$1 = state_31282;
var statearr_31285_33183 = state_31282__$1;
(statearr_31285_33183[(2)] = null);

(statearr_31285_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (4))){
var inst_31263 = (state_31282[(7)]);
var inst_31263__$1 = (state_31282[(2)]);
var inst_31264 = (inst_31263__$1 == null);
var state_31282__$1 = (function (){var statearr_31287 = state_31282;
(statearr_31287[(7)] = inst_31263__$1);

return statearr_31287;
})();
if(cljs.core.truth_(inst_31264)){
var statearr_31288_33184 = state_31282__$1;
(statearr_31288_33184[(1)] = (5));

} else {
var statearr_31289_33185 = state_31282__$1;
(statearr_31289_33185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (6))){
var inst_31263 = (state_31282[(7)]);
var inst_31268 = (state_31282[(8)]);
var inst_31268__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31270 = [inst_31263,inst_31268__$1];
var inst_31271 = (new cljs.core.PersistentVector(null,2,(5),inst_31269,inst_31270,null));
var state_31282__$1 = (function (){var statearr_31290 = state_31282;
(statearr_31290[(8)] = inst_31268__$1);

return statearr_31290;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31282__$1,(8),jobs,inst_31271);
} else {
if((state_val_31283 === (3))){
var inst_31280 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31282__$1,inst_31280);
} else {
if((state_val_31283 === (2))){
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31282__$1,(4),from);
} else {
if((state_val_31283 === (9))){
var inst_31275 = (state_31282[(2)]);
var state_31282__$1 = (function (){var statearr_31291 = state_31282;
(statearr_31291[(9)] = inst_31275);

return statearr_31291;
})();
var statearr_31292_33192 = state_31282__$1;
(statearr_31292_33192[(2)] = null);

(statearr_31292_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (5))){
var inst_31266 = cljs.core.async.close_BANG_(jobs);
var state_31282__$1 = state_31282;
var statearr_31293_33193 = state_31282__$1;
(statearr_31293_33193[(2)] = inst_31266);

(statearr_31293_33193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (8))){
var inst_31268 = (state_31282[(8)]);
var inst_31273 = (state_31282[(2)]);
var state_31282__$1 = (function (){var statearr_31294 = state_31282;
(statearr_31294[(10)] = inst_31273);

return statearr_31294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31282__$1,(9),results,inst_31268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33181,jobs,results,process,async))
;
return ((function (switch__30708__auto__,c__30929__auto___33181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31295[(1)] = (1));

return statearr_31295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31282){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31282);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31296){if((e31296 instanceof Object)){
var ex__30712__auto__ = e31296;
var statearr_31297_33194 = state_31282;
(statearr_31297_33194[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33195 = state_31282;
state_31282 = G__33195;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33181,jobs,results,process,async))
})();
var state__30931__auto__ = (function (){var statearr_31298 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31298[(6)] = c__30929__auto___33181);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33181,jobs,results,process,async))
);


var c__30929__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto__,jobs,results,process,async){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto__,jobs,results,process,async){
return (function (state_31336){
var state_val_31337 = (state_31336[(1)]);
if((state_val_31337 === (7))){
var inst_31332 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31338_33196 = state_31336__$1;
(statearr_31338_33196[(2)] = inst_31332);

(statearr_31338_33196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (20))){
var state_31336__$1 = state_31336;
var statearr_31339_33197 = state_31336__$1;
(statearr_31339_33197[(2)] = null);

(statearr_31339_33197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (1))){
var state_31336__$1 = state_31336;
var statearr_31340_33204 = state_31336__$1;
(statearr_31340_33204[(2)] = null);

(statearr_31340_33204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (4))){
var inst_31301 = (state_31336[(7)]);
var inst_31301__$1 = (state_31336[(2)]);
var inst_31302 = (inst_31301__$1 == null);
var state_31336__$1 = (function (){var statearr_31341 = state_31336;
(statearr_31341[(7)] = inst_31301__$1);

return statearr_31341;
})();
if(cljs.core.truth_(inst_31302)){
var statearr_31342_33205 = state_31336__$1;
(statearr_31342_33205[(1)] = (5));

} else {
var statearr_31343_33206 = state_31336__$1;
(statearr_31343_33206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (15))){
var inst_31314 = (state_31336[(8)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31336__$1,(18),to,inst_31314);
} else {
if((state_val_31337 === (21))){
var inst_31327 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31344_33207 = state_31336__$1;
(statearr_31344_33207[(2)] = inst_31327);

(statearr_31344_33207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (13))){
var inst_31329 = (state_31336[(2)]);
var state_31336__$1 = (function (){var statearr_31345 = state_31336;
(statearr_31345[(9)] = inst_31329);

return statearr_31345;
})();
var statearr_31346_33208 = state_31336__$1;
(statearr_31346_33208[(2)] = null);

(statearr_31346_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (6))){
var inst_31301 = (state_31336[(7)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31336__$1,(11),inst_31301);
} else {
if((state_val_31337 === (17))){
var inst_31322 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31322)){
var statearr_31347_33209 = state_31336__$1;
(statearr_31347_33209[(1)] = (19));

} else {
var statearr_31348_33210 = state_31336__$1;
(statearr_31348_33210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (3))){
var inst_31334 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31336__$1,inst_31334);
} else {
if((state_val_31337 === (12))){
var inst_31311 = (state_31336[(10)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31336__$1,(14),inst_31311);
} else {
if((state_val_31337 === (2))){
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31336__$1,(4),results);
} else {
if((state_val_31337 === (19))){
var state_31336__$1 = state_31336;
var statearr_31349_33211 = state_31336__$1;
(statearr_31349_33211[(2)] = null);

(statearr_31349_33211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (11))){
var inst_31311 = (state_31336[(2)]);
var state_31336__$1 = (function (){var statearr_31351 = state_31336;
(statearr_31351[(10)] = inst_31311);

return statearr_31351;
})();
var statearr_31354_33218 = state_31336__$1;
(statearr_31354_33218[(2)] = null);

(statearr_31354_33218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (9))){
var state_31336__$1 = state_31336;
var statearr_31355_33219 = state_31336__$1;
(statearr_31355_33219[(2)] = null);

(statearr_31355_33219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (5))){
var state_31336__$1 = state_31336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31358_33220 = state_31336__$1;
(statearr_31358_33220[(1)] = (8));

} else {
var statearr_31359_33221 = state_31336__$1;
(statearr_31359_33221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (14))){
var inst_31316 = (state_31336[(11)]);
var inst_31314 = (state_31336[(8)]);
var inst_31314__$1 = (state_31336[(2)]);
var inst_31315 = (inst_31314__$1 == null);
var inst_31316__$1 = cljs.core.not(inst_31315);
var state_31336__$1 = (function (){var statearr_31363 = state_31336;
(statearr_31363[(11)] = inst_31316__$1);

(statearr_31363[(8)] = inst_31314__$1);

return statearr_31363;
})();
if(inst_31316__$1){
var statearr_31364_33222 = state_31336__$1;
(statearr_31364_33222[(1)] = (15));

} else {
var statearr_31365_33223 = state_31336__$1;
(statearr_31365_33223[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (16))){
var inst_31316 = (state_31336[(11)]);
var state_31336__$1 = state_31336;
var statearr_31366_33224 = state_31336__$1;
(statearr_31366_33224[(2)] = inst_31316);

(statearr_31366_33224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (10))){
var inst_31308 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31367_33225 = state_31336__$1;
(statearr_31367_33225[(2)] = inst_31308);

(statearr_31367_33225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (18))){
var inst_31319 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31368_33226 = state_31336__$1;
(statearr_31368_33226[(2)] = inst_31319);

(statearr_31368_33226[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (8))){
var inst_31305 = cljs.core.async.close_BANG_(to);
var state_31336__$1 = state_31336;
var statearr_31369_33227 = state_31336__$1;
(statearr_31369_33227[(2)] = inst_31305);

(statearr_31369_33227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto__,jobs,results,process,async))
;
return ((function (switch__30708__auto__,c__30929__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_31372 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__);

(statearr_31372[(1)] = (1));

return statearr_31372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1 = (function (state_31336){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31336);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31373){if((e31373 instanceof Object)){
var ex__30712__auto__ = e31373;
var statearr_31374_33228 = state_31336;
(statearr_31374_33228[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33229 = state_31336;
state_31336 = G__33229;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__ = function(state_31336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1.call(this,state_31336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto__,jobs,results,process,async))
})();
var state__30931__auto__ = (function (){var statearr_31375 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31375[(6)] = c__30929__auto__);

return statearr_31375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto__,jobs,results,process,async))
);

return c__30929__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31390 = arguments.length;
switch (G__31390) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31393 = arguments.length;
switch (G__31393) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31399 = arguments.length;
switch (G__31399) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30929__auto___33241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33241,tc,fc){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33241,tc,fc){
return (function (state_31425){
var state_val_31426 = (state_31425[(1)]);
if((state_val_31426 === (7))){
var inst_31421 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31428_33242 = state_31425__$1;
(statearr_31428_33242[(2)] = inst_31421);

(statearr_31428_33242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (1))){
var state_31425__$1 = state_31425;
var statearr_31429_33244 = state_31425__$1;
(statearr_31429_33244[(2)] = null);

(statearr_31429_33244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (4))){
var inst_31402 = (state_31425[(7)]);
var inst_31402__$1 = (state_31425[(2)]);
var inst_31403 = (inst_31402__$1 == null);
var state_31425__$1 = (function (){var statearr_31431 = state_31425;
(statearr_31431[(7)] = inst_31402__$1);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31403)){
var statearr_31432_33246 = state_31425__$1;
(statearr_31432_33246[(1)] = (5));

} else {
var statearr_31440_33247 = state_31425__$1;
(statearr_31440_33247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (13))){
var state_31425__$1 = state_31425;
var statearr_31441_33248 = state_31425__$1;
(statearr_31441_33248[(2)] = null);

(statearr_31441_33248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (6))){
var inst_31402 = (state_31425[(7)]);
var inst_31408 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31402) : p.call(null,inst_31402));
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31408)){
var statearr_31442_33249 = state_31425__$1;
(statearr_31442_33249[(1)] = (9));

} else {
var statearr_31443_33250 = state_31425__$1;
(statearr_31443_33250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (3))){
var inst_31423 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31425__$1,inst_31423);
} else {
if((state_val_31426 === (12))){
var state_31425__$1 = state_31425;
var statearr_31444_33251 = state_31425__$1;
(statearr_31444_33251[(2)] = null);

(statearr_31444_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (2))){
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31425__$1,(4),ch);
} else {
if((state_val_31426 === (11))){
var inst_31402 = (state_31425[(7)]);
var inst_31412 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31425__$1,(8),inst_31412,inst_31402);
} else {
if((state_val_31426 === (9))){
var state_31425__$1 = state_31425;
var statearr_31445_33252 = state_31425__$1;
(statearr_31445_33252[(2)] = tc);

(statearr_31445_33252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (5))){
var inst_31405 = cljs.core.async.close_BANG_(tc);
var inst_31406 = cljs.core.async.close_BANG_(fc);
var state_31425__$1 = (function (){var statearr_31459 = state_31425;
(statearr_31459[(8)] = inst_31405);

return statearr_31459;
})();
var statearr_31464_33255 = state_31425__$1;
(statearr_31464_33255[(2)] = inst_31406);

(statearr_31464_33255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (14))){
var inst_31419 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31465_33256 = state_31425__$1;
(statearr_31465_33256[(2)] = inst_31419);

(statearr_31465_33256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (10))){
var state_31425__$1 = state_31425;
var statearr_31466_33257 = state_31425__$1;
(statearr_31466_33257[(2)] = fc);

(statearr_31466_33257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (8))){
var inst_31414 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31414)){
var statearr_31467_33258 = state_31425__$1;
(statearr_31467_33258[(1)] = (12));

} else {
var statearr_31468_33260 = state_31425__$1;
(statearr_31468_33260[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33241,tc,fc))
;
return ((function (switch__30708__auto__,c__30929__auto___33241,tc,fc){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_31469 = [null,null,null,null,null,null,null,null,null];
(statearr_31469[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_31469[(1)] = (1));

return statearr_31469;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_31425){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31425);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31470){if((e31470 instanceof Object)){
var ex__30712__auto__ = e31470;
var statearr_31471_33262 = state_31425;
(statearr_31471_33262[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33263 = state_31425;
state_31425 = G__33263;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_31425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_31425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33241,tc,fc))
})();
var state__30931__auto__ = (function (){var statearr_31472 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31472[(6)] = c__30929__auto___33241);

return statearr_31472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33241,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30929__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto__){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto__){
return (function (state_31493){
var state_val_31494 = (state_31493[(1)]);
if((state_val_31494 === (7))){
var inst_31489 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31495_33264 = state_31493__$1;
(statearr_31495_33264[(2)] = inst_31489);

(statearr_31495_33264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (1))){
var inst_31473 = init;
var state_31493__$1 = (function (){var statearr_31496 = state_31493;
(statearr_31496[(7)] = inst_31473);

return statearr_31496;
})();
var statearr_31497_33265 = state_31493__$1;
(statearr_31497_33265[(2)] = null);

(statearr_31497_33265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (4))){
var inst_31476 = (state_31493[(8)]);
var inst_31476__$1 = (state_31493[(2)]);
var inst_31477 = (inst_31476__$1 == null);
var state_31493__$1 = (function (){var statearr_31498 = state_31493;
(statearr_31498[(8)] = inst_31476__$1);

return statearr_31498;
})();
if(cljs.core.truth_(inst_31477)){
var statearr_31499_33266 = state_31493__$1;
(statearr_31499_33266[(1)] = (5));

} else {
var statearr_31500_33267 = state_31493__$1;
(statearr_31500_33267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (6))){
var inst_31476 = (state_31493[(8)]);
var inst_31473 = (state_31493[(7)]);
var inst_31480 = (state_31493[(9)]);
var inst_31480__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31473,inst_31476) : f.call(null,inst_31473,inst_31476));
var inst_31481 = cljs.core.reduced_QMARK_(inst_31480__$1);
var state_31493__$1 = (function (){var statearr_31501 = state_31493;
(statearr_31501[(9)] = inst_31480__$1);

return statearr_31501;
})();
if(inst_31481){
var statearr_31502_33268 = state_31493__$1;
(statearr_31502_33268[(1)] = (8));

} else {
var statearr_31503_33269 = state_31493__$1;
(statearr_31503_33269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (3))){
var inst_31491 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31493__$1,inst_31491);
} else {
if((state_val_31494 === (2))){
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31493__$1,(4),ch);
} else {
if((state_val_31494 === (9))){
var inst_31480 = (state_31493[(9)]);
var inst_31473 = inst_31480;
var state_31493__$1 = (function (){var statearr_31504 = state_31493;
(statearr_31504[(7)] = inst_31473);

return statearr_31504;
})();
var statearr_31505_33271 = state_31493__$1;
(statearr_31505_33271[(2)] = null);

(statearr_31505_33271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (5))){
var inst_31473 = (state_31493[(7)]);
var state_31493__$1 = state_31493;
var statearr_31508_33272 = state_31493__$1;
(statearr_31508_33272[(2)] = inst_31473);

(statearr_31508_33272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (10))){
var inst_31487 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31510_33273 = state_31493__$1;
(statearr_31510_33273[(2)] = inst_31487);

(statearr_31510_33273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (8))){
var inst_31480 = (state_31493[(9)]);
var inst_31483 = cljs.core.deref(inst_31480);
var state_31493__$1 = state_31493;
var statearr_31511_33274 = state_31493__$1;
(statearr_31511_33274[(2)] = inst_31483);

(statearr_31511_33274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto__))
;
return ((function (switch__30708__auto__,c__30929__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30709__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30709__auto____0 = (function (){
var statearr_31512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31512[(0)] = cljs$core$async$reduce_$_state_machine__30709__auto__);

(statearr_31512[(1)] = (1));

return statearr_31512;
});
var cljs$core$async$reduce_$_state_machine__30709__auto____1 = (function (state_31493){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31493);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31513){if((e31513 instanceof Object)){
var ex__30712__auto__ = e31513;
var statearr_31514_33279 = state_31493;
(statearr_31514_33279[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33280 = state_31493;
state_31493 = G__33280;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30709__auto__ = function(state_31493){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30709__auto____1.call(this,state_31493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30709__auto____0;
cljs$core$async$reduce_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30709__auto____1;
return cljs$core$async$reduce_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto__))
})();
var state__30931__auto__ = (function (){var statearr_31515 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31515[(6)] = c__30929__auto__);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto__))
);

return c__30929__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30929__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto__,f__$1){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto__,f__$1){
return (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (1))){
var inst_31516 = cljs.core.async.reduce(f__$1,init,ch);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31521__$1,(2),inst_31516);
} else {
if((state_val_31522 === (2))){
var inst_31518 = (state_31521[(2)]);
var inst_31519 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31518) : f__$1.call(null,inst_31518));
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31521__$1,inst_31519);
} else {
return null;
}
}
});})(c__30929__auto__,f__$1))
;
return ((function (switch__30708__auto__,c__30929__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30709__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30709__auto____0 = (function (){
var statearr_31523 = [null,null,null,null,null,null,null];
(statearr_31523[(0)] = cljs$core$async$transduce_$_state_machine__30709__auto__);

(statearr_31523[(1)] = (1));

return statearr_31523;
});
var cljs$core$async$transduce_$_state_machine__30709__auto____1 = (function (state_31521){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31521);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31524){if((e31524 instanceof Object)){
var ex__30712__auto__ = e31524;
var statearr_31525_33281 = state_31521;
(statearr_31525_33281[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33282 = state_31521;
state_31521 = G__33282;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30709__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30709__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30709__auto____0;
cljs$core$async$transduce_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30709__auto____1;
return cljs$core$async$transduce_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto__,f__$1))
})();
var state__30931__auto__ = (function (){var statearr_31531 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31531[(6)] = c__30929__auto__);

return statearr_31531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto__,f__$1))
);

return c__30929__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31533 = arguments.length;
switch (G__31533) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30929__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto__){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto__){
return (function (state_31558){
var state_val_31559 = (state_31558[(1)]);
if((state_val_31559 === (7))){
var inst_31540 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31560_33297 = state_31558__$1;
(statearr_31560_33297[(2)] = inst_31540);

(statearr_31560_33297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (1))){
var inst_31534 = cljs.core.seq(coll);
var inst_31535 = inst_31534;
var state_31558__$1 = (function (){var statearr_31561 = state_31558;
(statearr_31561[(7)] = inst_31535);

return statearr_31561;
})();
var statearr_31562_33298 = state_31558__$1;
(statearr_31562_33298[(2)] = null);

(statearr_31562_33298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (4))){
var inst_31535 = (state_31558[(7)]);
var inst_31538 = cljs.core.first(inst_31535);
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31558__$1,(7),ch,inst_31538);
} else {
if((state_val_31559 === (13))){
var inst_31552 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31564_33299 = state_31558__$1;
(statearr_31564_33299[(2)] = inst_31552);

(statearr_31564_33299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (6))){
var inst_31543 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31543)){
var statearr_31567_33300 = state_31558__$1;
(statearr_31567_33300[(1)] = (8));

} else {
var statearr_31568_33301 = state_31558__$1;
(statearr_31568_33301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (3))){
var inst_31556 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31558__$1,inst_31556);
} else {
if((state_val_31559 === (12))){
var state_31558__$1 = state_31558;
var statearr_31569_33302 = state_31558__$1;
(statearr_31569_33302[(2)] = null);

(statearr_31569_33302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (2))){
var inst_31535 = (state_31558[(7)]);
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31535)){
var statearr_31570_33303 = state_31558__$1;
(statearr_31570_33303[(1)] = (4));

} else {
var statearr_31571_33304 = state_31558__$1;
(statearr_31571_33304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (11))){
var inst_31549 = cljs.core.async.close_BANG_(ch);
var state_31558__$1 = state_31558;
var statearr_31572_33305 = state_31558__$1;
(statearr_31572_33305[(2)] = inst_31549);

(statearr_31572_33305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (9))){
var state_31558__$1 = state_31558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31573_33306 = state_31558__$1;
(statearr_31573_33306[(1)] = (11));

} else {
var statearr_31574_33307 = state_31558__$1;
(statearr_31574_33307[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (5))){
var inst_31535 = (state_31558[(7)]);
var state_31558__$1 = state_31558;
var statearr_31579_33308 = state_31558__$1;
(statearr_31579_33308[(2)] = inst_31535);

(statearr_31579_33308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (10))){
var inst_31554 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31582_33309 = state_31558__$1;
(statearr_31582_33309[(2)] = inst_31554);

(statearr_31582_33309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (8))){
var inst_31535 = (state_31558[(7)]);
var inst_31545 = cljs.core.next(inst_31535);
var inst_31535__$1 = inst_31545;
var state_31558__$1 = (function (){var statearr_31583 = state_31558;
(statearr_31583[(7)] = inst_31535__$1);

return statearr_31583;
})();
var statearr_31584_33310 = state_31558__$1;
(statearr_31584_33310[(2)] = null);

(statearr_31584_33310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto__))
;
return ((function (switch__30708__auto__,c__30929__auto__){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_31585 = [null,null,null,null,null,null,null,null];
(statearr_31585[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_31585[(1)] = (1));

return statearr_31585;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_31558){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31558);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31587){if((e31587 instanceof Object)){
var ex__30712__auto__ = e31587;
var statearr_31588_33320 = state_31558;
(statearr_31588_33320[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33321 = state_31558;
state_31558 = G__33321;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_31558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_31558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto__))
})();
var state__30931__auto__ = (function (){var statearr_31589 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31589[(6)] = c__30929__auto__);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto__))
);

return c__30929__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31596 = (function (ch,cs,meta31597){
this.ch = ch;
this.cs = cs;
this.meta31597 = meta31597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31598,meta31597__$1){
var self__ = this;
var _31598__$1 = this;
return (new cljs.core.async.t_cljs$core$async31596(self__.ch,self__.cs,meta31597__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31598){
var self__ = this;
var _31598__$1 = this;
return self__.meta31597;
});})(cs))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31596.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31597","meta31597",98521996,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31596";

cljs.core.async.t_cljs$core$async31596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31596");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31596.
 */
cljs.core.async.__GT_t_cljs$core$async31596 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31596(ch__$1,cs__$1,meta31597){
return (new cljs.core.async.t_cljs$core$async31596(ch__$1,cs__$1,meta31597));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31596(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30929__auto___33336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33336,cs,m,dchan,dctr,done){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33336,cs,m,dchan,dctr,done){
return (function (state_31733){
var state_val_31734 = (state_31733[(1)]);
if((state_val_31734 === (7))){
var inst_31729 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31736_33337 = state_31733__$1;
(statearr_31736_33337[(2)] = inst_31729);

(statearr_31736_33337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (20))){
var inst_31632 = (state_31733[(7)]);
var inst_31644 = cljs.core.first(inst_31632);
var inst_31645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31644,(0),null);
var inst_31646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31644,(1),null);
var state_31733__$1 = (function (){var statearr_31737 = state_31733;
(statearr_31737[(8)] = inst_31645);

return statearr_31737;
})();
if(cljs.core.truth_(inst_31646)){
var statearr_31738_33338 = state_31733__$1;
(statearr_31738_33338[(1)] = (22));

} else {
var statearr_31739_33339 = state_31733__$1;
(statearr_31739_33339[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (27))){
var inst_31674 = (state_31733[(9)]);
var inst_31601 = (state_31733[(10)]);
var inst_31681 = (state_31733[(11)]);
var inst_31676 = (state_31733[(12)]);
var inst_31681__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31674,inst_31676);
var inst_31682 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31681__$1,inst_31601,done);
var state_31733__$1 = (function (){var statearr_31740 = state_31733;
(statearr_31740[(11)] = inst_31681__$1);

return statearr_31740;
})();
if(cljs.core.truth_(inst_31682)){
var statearr_31741_33340 = state_31733__$1;
(statearr_31741_33340[(1)] = (30));

} else {
var statearr_31742_33341 = state_31733__$1;
(statearr_31742_33341[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (1))){
var state_31733__$1 = state_31733;
var statearr_31743_33342 = state_31733__$1;
(statearr_31743_33342[(2)] = null);

(statearr_31743_33342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (24))){
var inst_31632 = (state_31733[(7)]);
var inst_31651 = (state_31733[(2)]);
var inst_31652 = cljs.core.next(inst_31632);
var inst_31610 = inst_31652;
var inst_31611 = null;
var inst_31612 = (0);
var inst_31613 = (0);
var state_31733__$1 = (function (){var statearr_31744 = state_31733;
(statearr_31744[(13)] = inst_31610);

(statearr_31744[(14)] = inst_31611);

(statearr_31744[(15)] = inst_31612);

(statearr_31744[(16)] = inst_31613);

(statearr_31744[(17)] = inst_31651);

return statearr_31744;
})();
var statearr_31745_33347 = state_31733__$1;
(statearr_31745_33347[(2)] = null);

(statearr_31745_33347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (39))){
var state_31733__$1 = state_31733;
var statearr_31749_33349 = state_31733__$1;
(statearr_31749_33349[(2)] = null);

(statearr_31749_33349[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (4))){
var inst_31601 = (state_31733[(10)]);
var inst_31601__$1 = (state_31733[(2)]);
var inst_31602 = (inst_31601__$1 == null);
var state_31733__$1 = (function (){var statearr_31750 = state_31733;
(statearr_31750[(10)] = inst_31601__$1);

return statearr_31750;
})();
if(cljs.core.truth_(inst_31602)){
var statearr_31751_33355 = state_31733__$1;
(statearr_31751_33355[(1)] = (5));

} else {
var statearr_31752_33356 = state_31733__$1;
(statearr_31752_33356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (15))){
var inst_31610 = (state_31733[(13)]);
var inst_31611 = (state_31733[(14)]);
var inst_31612 = (state_31733[(15)]);
var inst_31613 = (state_31733[(16)]);
var inst_31628 = (state_31733[(2)]);
var inst_31629 = (inst_31613 + (1));
var tmp31746 = inst_31610;
var tmp31747 = inst_31611;
var tmp31748 = inst_31612;
var inst_31610__$1 = tmp31746;
var inst_31611__$1 = tmp31747;
var inst_31612__$1 = tmp31748;
var inst_31613__$1 = inst_31629;
var state_31733__$1 = (function (){var statearr_31753 = state_31733;
(statearr_31753[(13)] = inst_31610__$1);

(statearr_31753[(18)] = inst_31628);

(statearr_31753[(14)] = inst_31611__$1);

(statearr_31753[(15)] = inst_31612__$1);

(statearr_31753[(16)] = inst_31613__$1);

return statearr_31753;
})();
var statearr_31754_33357 = state_31733__$1;
(statearr_31754_33357[(2)] = null);

(statearr_31754_33357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (21))){
var inst_31655 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31758_33358 = state_31733__$1;
(statearr_31758_33358[(2)] = inst_31655);

(statearr_31758_33358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (31))){
var inst_31681 = (state_31733[(11)]);
var inst_31685 = done(null);
var inst_31686 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31681);
var state_31733__$1 = (function (){var statearr_31759 = state_31733;
(statearr_31759[(19)] = inst_31685);

return statearr_31759;
})();
var statearr_31760_33359 = state_31733__$1;
(statearr_31760_33359[(2)] = inst_31686);

(statearr_31760_33359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (32))){
var inst_31674 = (state_31733[(9)]);
var inst_31676 = (state_31733[(12)]);
var inst_31675 = (state_31733[(20)]);
var inst_31673 = (state_31733[(21)]);
var inst_31688 = (state_31733[(2)]);
var inst_31689 = (inst_31676 + (1));
var tmp31755 = inst_31674;
var tmp31756 = inst_31675;
var tmp31757 = inst_31673;
var inst_31673__$1 = tmp31757;
var inst_31674__$1 = tmp31755;
var inst_31675__$1 = tmp31756;
var inst_31676__$1 = inst_31689;
var state_31733__$1 = (function (){var statearr_31761 = state_31733;
(statearr_31761[(9)] = inst_31674__$1);

(statearr_31761[(22)] = inst_31688);

(statearr_31761[(12)] = inst_31676__$1);

(statearr_31761[(20)] = inst_31675__$1);

(statearr_31761[(21)] = inst_31673__$1);

return statearr_31761;
})();
var statearr_31762_33360 = state_31733__$1;
(statearr_31762_33360[(2)] = null);

(statearr_31762_33360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (40))){
var inst_31701 = (state_31733[(23)]);
var inst_31705 = done(null);
var inst_31706 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31701);
var state_31733__$1 = (function (){var statearr_31763 = state_31733;
(statearr_31763[(24)] = inst_31705);

return statearr_31763;
})();
var statearr_31764_33361 = state_31733__$1;
(statearr_31764_33361[(2)] = inst_31706);

(statearr_31764_33361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (33))){
var inst_31692 = (state_31733[(25)]);
var inst_31694 = cljs.core.chunked_seq_QMARK_(inst_31692);
var state_31733__$1 = state_31733;
if(inst_31694){
var statearr_31765_33363 = state_31733__$1;
(statearr_31765_33363[(1)] = (36));

} else {
var statearr_31766_33364 = state_31733__$1;
(statearr_31766_33364[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (13))){
var inst_31622 = (state_31733[(26)]);
var inst_31625 = cljs.core.async.close_BANG_(inst_31622);
var state_31733__$1 = state_31733;
var statearr_31767_33365 = state_31733__$1;
(statearr_31767_33365[(2)] = inst_31625);

(statearr_31767_33365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (22))){
var inst_31645 = (state_31733[(8)]);
var inst_31648 = cljs.core.async.close_BANG_(inst_31645);
var state_31733__$1 = state_31733;
var statearr_31768_33366 = state_31733__$1;
(statearr_31768_33366[(2)] = inst_31648);

(statearr_31768_33366[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (36))){
var inst_31692 = (state_31733[(25)]);
var inst_31696 = cljs.core.chunk_first(inst_31692);
var inst_31697 = cljs.core.chunk_rest(inst_31692);
var inst_31698 = cljs.core.count(inst_31696);
var inst_31673 = inst_31697;
var inst_31674 = inst_31696;
var inst_31675 = inst_31698;
var inst_31676 = (0);
var state_31733__$1 = (function (){var statearr_31769 = state_31733;
(statearr_31769[(9)] = inst_31674);

(statearr_31769[(12)] = inst_31676);

(statearr_31769[(20)] = inst_31675);

(statearr_31769[(21)] = inst_31673);

return statearr_31769;
})();
var statearr_31770_33367 = state_31733__$1;
(statearr_31770_33367[(2)] = null);

(statearr_31770_33367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (41))){
var inst_31692 = (state_31733[(25)]);
var inst_31708 = (state_31733[(2)]);
var inst_31709 = cljs.core.next(inst_31692);
var inst_31673 = inst_31709;
var inst_31674 = null;
var inst_31675 = (0);
var inst_31676 = (0);
var state_31733__$1 = (function (){var statearr_31771 = state_31733;
(statearr_31771[(9)] = inst_31674);

(statearr_31771[(27)] = inst_31708);

(statearr_31771[(12)] = inst_31676);

(statearr_31771[(20)] = inst_31675);

(statearr_31771[(21)] = inst_31673);

return statearr_31771;
})();
var statearr_31772_33368 = state_31733__$1;
(statearr_31772_33368[(2)] = null);

(statearr_31772_33368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (43))){
var state_31733__$1 = state_31733;
var statearr_31773_33372 = state_31733__$1;
(statearr_31773_33372[(2)] = null);

(statearr_31773_33372[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (29))){
var inst_31717 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31780_33375 = state_31733__$1;
(statearr_31780_33375[(2)] = inst_31717);

(statearr_31780_33375[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (44))){
var inst_31726 = (state_31733[(2)]);
var state_31733__$1 = (function (){var statearr_31781 = state_31733;
(statearr_31781[(28)] = inst_31726);

return statearr_31781;
})();
var statearr_31782_33378 = state_31733__$1;
(statearr_31782_33378[(2)] = null);

(statearr_31782_33378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (6))){
var inst_31665 = (state_31733[(29)]);
var inst_31664 = cljs.core.deref(cs);
var inst_31665__$1 = cljs.core.keys(inst_31664);
var inst_31666 = cljs.core.count(inst_31665__$1);
var inst_31667 = cljs.core.reset_BANG_(dctr,inst_31666);
var inst_31672 = cljs.core.seq(inst_31665__$1);
var inst_31673 = inst_31672;
var inst_31674 = null;
var inst_31675 = (0);
var inst_31676 = (0);
var state_31733__$1 = (function (){var statearr_31783 = state_31733;
(statearr_31783[(9)] = inst_31674);

(statearr_31783[(29)] = inst_31665__$1);

(statearr_31783[(30)] = inst_31667);

(statearr_31783[(12)] = inst_31676);

(statearr_31783[(20)] = inst_31675);

(statearr_31783[(21)] = inst_31673);

return statearr_31783;
})();
var statearr_31784_33379 = state_31733__$1;
(statearr_31784_33379[(2)] = null);

(statearr_31784_33379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (28))){
var inst_31692 = (state_31733[(25)]);
var inst_31673 = (state_31733[(21)]);
var inst_31692__$1 = cljs.core.seq(inst_31673);
var state_31733__$1 = (function (){var statearr_31785 = state_31733;
(statearr_31785[(25)] = inst_31692__$1);

return statearr_31785;
})();
if(inst_31692__$1){
var statearr_31786_33380 = state_31733__$1;
(statearr_31786_33380[(1)] = (33));

} else {
var statearr_31787_33381 = state_31733__$1;
(statearr_31787_33381[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (25))){
var inst_31676 = (state_31733[(12)]);
var inst_31675 = (state_31733[(20)]);
var inst_31678 = (inst_31676 < inst_31675);
var inst_31679 = inst_31678;
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31679)){
var statearr_31788_33382 = state_31733__$1;
(statearr_31788_33382[(1)] = (27));

} else {
var statearr_31789_33383 = state_31733__$1;
(statearr_31789_33383[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (34))){
var state_31733__$1 = state_31733;
var statearr_31790_33384 = state_31733__$1;
(statearr_31790_33384[(2)] = null);

(statearr_31790_33384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (17))){
var state_31733__$1 = state_31733;
var statearr_31791_33385 = state_31733__$1;
(statearr_31791_33385[(2)] = null);

(statearr_31791_33385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (3))){
var inst_31731 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31733__$1,inst_31731);
} else {
if((state_val_31734 === (12))){
var inst_31660 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31792_33386 = state_31733__$1;
(statearr_31792_33386[(2)] = inst_31660);

(statearr_31792_33386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (2))){
var state_31733__$1 = state_31733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31733__$1,(4),ch);
} else {
if((state_val_31734 === (23))){
var state_31733__$1 = state_31733;
var statearr_31793_33387 = state_31733__$1;
(statearr_31793_33387[(2)] = null);

(statearr_31793_33387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (35))){
var inst_31715 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31794_33388 = state_31733__$1;
(statearr_31794_33388[(2)] = inst_31715);

(statearr_31794_33388[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (19))){
var inst_31632 = (state_31733[(7)]);
var inst_31636 = cljs.core.chunk_first(inst_31632);
var inst_31637 = cljs.core.chunk_rest(inst_31632);
var inst_31638 = cljs.core.count(inst_31636);
var inst_31610 = inst_31637;
var inst_31611 = inst_31636;
var inst_31612 = inst_31638;
var inst_31613 = (0);
var state_31733__$1 = (function (){var statearr_31795 = state_31733;
(statearr_31795[(13)] = inst_31610);

(statearr_31795[(14)] = inst_31611);

(statearr_31795[(15)] = inst_31612);

(statearr_31795[(16)] = inst_31613);

return statearr_31795;
})();
var statearr_31796_33389 = state_31733__$1;
(statearr_31796_33389[(2)] = null);

(statearr_31796_33389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (11))){
var inst_31632 = (state_31733[(7)]);
var inst_31610 = (state_31733[(13)]);
var inst_31632__$1 = cljs.core.seq(inst_31610);
var state_31733__$1 = (function (){var statearr_31797 = state_31733;
(statearr_31797[(7)] = inst_31632__$1);

return statearr_31797;
})();
if(inst_31632__$1){
var statearr_31798_33391 = state_31733__$1;
(statearr_31798_33391[(1)] = (16));

} else {
var statearr_31799_33392 = state_31733__$1;
(statearr_31799_33392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (9))){
var inst_31662 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31800_33393 = state_31733__$1;
(statearr_31800_33393[(2)] = inst_31662);

(statearr_31800_33393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (5))){
var inst_31608 = cljs.core.deref(cs);
var inst_31609 = cljs.core.seq(inst_31608);
var inst_31610 = inst_31609;
var inst_31611 = null;
var inst_31612 = (0);
var inst_31613 = (0);
var state_31733__$1 = (function (){var statearr_31801 = state_31733;
(statearr_31801[(13)] = inst_31610);

(statearr_31801[(14)] = inst_31611);

(statearr_31801[(15)] = inst_31612);

(statearr_31801[(16)] = inst_31613);

return statearr_31801;
})();
var statearr_31802_33396 = state_31733__$1;
(statearr_31802_33396[(2)] = null);

(statearr_31802_33396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (14))){
var state_31733__$1 = state_31733;
var statearr_31803_33398 = state_31733__$1;
(statearr_31803_33398[(2)] = null);

(statearr_31803_33398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (45))){
var inst_31723 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31804_33401 = state_31733__$1;
(statearr_31804_33401[(2)] = inst_31723);

(statearr_31804_33401[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (26))){
var inst_31665 = (state_31733[(29)]);
var inst_31719 = (state_31733[(2)]);
var inst_31720 = cljs.core.seq(inst_31665);
var state_31733__$1 = (function (){var statearr_31805 = state_31733;
(statearr_31805[(31)] = inst_31719);

return statearr_31805;
})();
if(inst_31720){
var statearr_31810_33405 = state_31733__$1;
(statearr_31810_33405[(1)] = (42));

} else {
var statearr_31811_33406 = state_31733__$1;
(statearr_31811_33406[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (16))){
var inst_31632 = (state_31733[(7)]);
var inst_31634 = cljs.core.chunked_seq_QMARK_(inst_31632);
var state_31733__$1 = state_31733;
if(inst_31634){
var statearr_31812_33407 = state_31733__$1;
(statearr_31812_33407[(1)] = (19));

} else {
var statearr_31813_33408 = state_31733__$1;
(statearr_31813_33408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (38))){
var inst_31712 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31814_33409 = state_31733__$1;
(statearr_31814_33409[(2)] = inst_31712);

(statearr_31814_33409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (30))){
var state_31733__$1 = state_31733;
var statearr_31815_33410 = state_31733__$1;
(statearr_31815_33410[(2)] = null);

(statearr_31815_33410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (10))){
var inst_31611 = (state_31733[(14)]);
var inst_31613 = (state_31733[(16)]);
var inst_31621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31611,inst_31613);
var inst_31622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31621,(0),null);
var inst_31623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31621,(1),null);
var state_31733__$1 = (function (){var statearr_31816 = state_31733;
(statearr_31816[(26)] = inst_31622);

return statearr_31816;
})();
if(cljs.core.truth_(inst_31623)){
var statearr_31817_33411 = state_31733__$1;
(statearr_31817_33411[(1)] = (13));

} else {
var statearr_31818_33413 = state_31733__$1;
(statearr_31818_33413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (18))){
var inst_31658 = (state_31733[(2)]);
var state_31733__$1 = state_31733;
var statearr_31821_33414 = state_31733__$1;
(statearr_31821_33414[(2)] = inst_31658);

(statearr_31821_33414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (42))){
var state_31733__$1 = state_31733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31733__$1,(45),dchan);
} else {
if((state_val_31734 === (37))){
var inst_31601 = (state_31733[(10)]);
var inst_31692 = (state_31733[(25)]);
var inst_31701 = (state_31733[(23)]);
var inst_31701__$1 = cljs.core.first(inst_31692);
var inst_31702 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31701__$1,inst_31601,done);
var state_31733__$1 = (function (){var statearr_31824 = state_31733;
(statearr_31824[(23)] = inst_31701__$1);

return statearr_31824;
})();
if(cljs.core.truth_(inst_31702)){
var statearr_31825_33419 = state_31733__$1;
(statearr_31825_33419[(1)] = (39));

} else {
var statearr_31826_33420 = state_31733__$1;
(statearr_31826_33420[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31734 === (8))){
var inst_31612 = (state_31733[(15)]);
var inst_31613 = (state_31733[(16)]);
var inst_31615 = (inst_31613 < inst_31612);
var inst_31616 = inst_31615;
var state_31733__$1 = state_31733;
if(cljs.core.truth_(inst_31616)){
var statearr_31827_33421 = state_31733__$1;
(statearr_31827_33421[(1)] = (10));

} else {
var statearr_31836_33422 = state_31733__$1;
(statearr_31836_33422[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33336,cs,m,dchan,dctr,done))
;
return ((function (switch__30708__auto__,c__30929__auto___33336,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30709__auto__ = null;
var cljs$core$async$mult_$_state_machine__30709__auto____0 = (function (){
var statearr_31838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31838[(0)] = cljs$core$async$mult_$_state_machine__30709__auto__);

(statearr_31838[(1)] = (1));

return statearr_31838;
});
var cljs$core$async$mult_$_state_machine__30709__auto____1 = (function (state_31733){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_31733);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e31839){if((e31839 instanceof Object)){
var ex__30712__auto__ = e31839;
var statearr_31840_33423 = state_31733;
(statearr_31840_33423[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33424 = state_31733;
state_31733 = G__33424;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30709__auto__ = function(state_31733){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30709__auto____1.call(this,state_31733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30709__auto____0;
cljs$core$async$mult_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30709__auto____1;
return cljs$core$async$mult_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33336,cs,m,dchan,dctr,done))
})();
var state__30931__auto__ = (function (){var statearr_31841 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_31841[(6)] = c__30929__auto___33336);

return statearr_31841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33336,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31846 = arguments.length;
switch (G__31846) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33435 = arguments.length;
var i__4731__auto___33436 = (0);
while(true){
if((i__4731__auto___33436 < len__4730__auto___33435)){
args__4736__auto__.push((arguments[i__4731__auto___33436]));

var G__33437 = (i__4731__auto___33436 + (1));
i__4731__auto___33436 = G__33437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31858){
var map__31859 = p__31858;
var map__31859__$1 = (((((!((map__31859 == null))))?(((((map__31859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31859):map__31859);
var opts = map__31859__$1;
var statearr_31861_33438 = state;
(statearr_31861_33438[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__31859,map__31859__$1,opts){
return (function (val){
var statearr_31862_33440 = state;
(statearr_31862_33440[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31859,map__31859__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31863_33441 = state;
(statearr_31863_33441[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31854){
var G__31855 = cljs.core.first(seq31854);
var seq31854__$1 = cljs.core.next(seq31854);
var G__31856 = cljs.core.first(seq31854__$1);
var seq31854__$2 = cljs.core.next(seq31854__$1);
var G__31857 = cljs.core.first(seq31854__$2);
var seq31854__$3 = cljs.core.next(seq31854__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31855,G__31856,G__31857,seq31854__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31873 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31874){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31874 = meta31874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31875,meta31874__$1){
var self__ = this;
var _31875__$1 = this;
return (new cljs.core.async.t_cljs$core$async31873(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31874__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31875){
var self__ = this;
var _31875__$1 = this;
return self__.meta31874;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31874","meta31874",1974957830,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31873";

cljs.core.async.t_cljs$core$async31873.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31873");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31873.
 */
cljs.core.async.__GT_t_cljs$core$async31873 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31874){
return (new cljs.core.async.t_cljs$core$async31873(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31874));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31873(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30929__auto___33456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32007){
var state_val_32008 = (state_32007[(1)]);
if((state_val_32008 === (7))){
var inst_31921 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32009_33457 = state_32007__$1;
(statearr_32009_33457[(2)] = inst_31921);

(statearr_32009_33457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (20))){
var inst_31933 = (state_32007[(7)]);
var state_32007__$1 = state_32007;
var statearr_32010_33458 = state_32007__$1;
(statearr_32010_33458[(2)] = inst_31933);

(statearr_32010_33458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (27))){
var state_32007__$1 = state_32007;
var statearr_32011_33459 = state_32007__$1;
(statearr_32011_33459[(2)] = null);

(statearr_32011_33459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (1))){
var inst_31903 = (state_32007[(8)]);
var inst_31903__$1 = calc_state();
var inst_31905 = (inst_31903__$1 == null);
var inst_31906 = cljs.core.not(inst_31905);
var state_32007__$1 = (function (){var statearr_32012 = state_32007;
(statearr_32012[(8)] = inst_31903__$1);

return statearr_32012;
})();
if(inst_31906){
var statearr_32013_33461 = state_32007__$1;
(statearr_32013_33461[(1)] = (2));

} else {
var statearr_32014_33462 = state_32007__$1;
(statearr_32014_33462[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (24))){
var inst_31967 = (state_32007[(9)]);
var inst_31958 = (state_32007[(10)]);
var inst_31981 = (state_32007[(11)]);
var inst_31981__$1 = (inst_31958.cljs$core$IFn$_invoke$arity$1 ? inst_31958.cljs$core$IFn$_invoke$arity$1(inst_31967) : inst_31958.call(null,inst_31967));
var state_32007__$1 = (function (){var statearr_32015 = state_32007;
(statearr_32015[(11)] = inst_31981__$1);

return statearr_32015;
})();
if(cljs.core.truth_(inst_31981__$1)){
var statearr_32016_33465 = state_32007__$1;
(statearr_32016_33465[(1)] = (29));

} else {
var statearr_32017_33466 = state_32007__$1;
(statearr_32017_33466[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (4))){
var inst_31924 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31924)){
var statearr_32018_33470 = state_32007__$1;
(statearr_32018_33470[(1)] = (8));

} else {
var statearr_32019_33471 = state_32007__$1;
(statearr_32019_33471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (15))){
var inst_31952 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31952)){
var statearr_32020_33472 = state_32007__$1;
(statearr_32020_33472[(1)] = (19));

} else {
var statearr_32021_33477 = state_32007__$1;
(statearr_32021_33477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (21))){
var inst_31957 = (state_32007[(12)]);
var inst_31957__$1 = (state_32007[(2)]);
var inst_31958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31957__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31957__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31957__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32007__$1 = (function (){var statearr_32022 = state_32007;
(statearr_32022[(10)] = inst_31958);

(statearr_32022[(12)] = inst_31957__$1);

(statearr_32022[(13)] = inst_31959);

return statearr_32022;
})();
return cljs.core.async.ioc_alts_BANG_(state_32007__$1,(22),inst_31960);
} else {
if((state_val_32008 === (31))){
var inst_31989 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31989)){
var statearr_32023_33481 = state_32007__$1;
(statearr_32023_33481[(1)] = (32));

} else {
var statearr_32024_33482 = state_32007__$1;
(statearr_32024_33482[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (32))){
var inst_31966 = (state_32007[(14)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32007__$1,(35),out,inst_31966);
} else {
if((state_val_32008 === (33))){
var inst_31957 = (state_32007[(12)]);
var inst_31933 = inst_31957;
var state_32007__$1 = (function (){var statearr_32025 = state_32007;
(statearr_32025[(7)] = inst_31933);

return statearr_32025;
})();
var statearr_32026_33483 = state_32007__$1;
(statearr_32026_33483[(2)] = null);

(statearr_32026_33483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (13))){
var inst_31933 = (state_32007[(7)]);
var inst_31941 = inst_31933.cljs$lang$protocol_mask$partition0$;
var inst_31942 = (inst_31941 & (64));
var inst_31943 = inst_31933.cljs$core$ISeq$;
var inst_31944 = (cljs.core.PROTOCOL_SENTINEL === inst_31943);
var inst_31945 = ((inst_31942) || (inst_31944));
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31945)){
var statearr_32027_33484 = state_32007__$1;
(statearr_32027_33484[(1)] = (16));

} else {
var statearr_32028_33485 = state_32007__$1;
(statearr_32028_33485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (22))){
var inst_31967 = (state_32007[(9)]);
var inst_31966 = (state_32007[(14)]);
var inst_31965 = (state_32007[(2)]);
var inst_31966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31965,(0),null);
var inst_31967__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31965,(1),null);
var inst_31968 = (inst_31966__$1 == null);
var inst_31969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31967__$1,change);
var inst_31970 = ((inst_31968) || (inst_31969));
var state_32007__$1 = (function (){var statearr_32029 = state_32007;
(statearr_32029[(9)] = inst_31967__$1);

(statearr_32029[(14)] = inst_31966__$1);

return statearr_32029;
})();
if(cljs.core.truth_(inst_31970)){
var statearr_32030_33486 = state_32007__$1;
(statearr_32030_33486[(1)] = (23));

} else {
var statearr_32031_33487 = state_32007__$1;
(statearr_32031_33487[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (36))){
var inst_31957 = (state_32007[(12)]);
var inst_31933 = inst_31957;
var state_32007__$1 = (function (){var statearr_32032 = state_32007;
(statearr_32032[(7)] = inst_31933);

return statearr_32032;
})();
var statearr_32033_33488 = state_32007__$1;
(statearr_32033_33488[(2)] = null);

(statearr_32033_33488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (29))){
var inst_31981 = (state_32007[(11)]);
var state_32007__$1 = state_32007;
var statearr_32034_33492 = state_32007__$1;
(statearr_32034_33492[(2)] = inst_31981);

(statearr_32034_33492[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (6))){
var state_32007__$1 = state_32007;
var statearr_32035_33493 = state_32007__$1;
(statearr_32035_33493[(2)] = false);

(statearr_32035_33493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (28))){
var inst_31977 = (state_32007[(2)]);
var inst_31978 = calc_state();
var inst_31933 = inst_31978;
var state_32007__$1 = (function (){var statearr_32039 = state_32007;
(statearr_32039[(15)] = inst_31977);

(statearr_32039[(7)] = inst_31933);

return statearr_32039;
})();
var statearr_32040_33494 = state_32007__$1;
(statearr_32040_33494[(2)] = null);

(statearr_32040_33494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (25))){
var inst_32003 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32041_33495 = state_32007__$1;
(statearr_32041_33495[(2)] = inst_32003);

(statearr_32041_33495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (34))){
var inst_32001 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32047_33496 = state_32007__$1;
(statearr_32047_33496[(2)] = inst_32001);

(statearr_32047_33496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (17))){
var state_32007__$1 = state_32007;
var statearr_32048_33500 = state_32007__$1;
(statearr_32048_33500[(2)] = false);

(statearr_32048_33500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (3))){
var state_32007__$1 = state_32007;
var statearr_32051_33501 = state_32007__$1;
(statearr_32051_33501[(2)] = false);

(statearr_32051_33501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (12))){
var inst_32005 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32007__$1,inst_32005);
} else {
if((state_val_32008 === (2))){
var inst_31903 = (state_32007[(8)]);
var inst_31913 = inst_31903.cljs$lang$protocol_mask$partition0$;
var inst_31914 = (inst_31913 & (64));
var inst_31915 = inst_31903.cljs$core$ISeq$;
var inst_31916 = (cljs.core.PROTOCOL_SENTINEL === inst_31915);
var inst_31917 = ((inst_31914) || (inst_31916));
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31917)){
var statearr_32052_33506 = state_32007__$1;
(statearr_32052_33506[(1)] = (5));

} else {
var statearr_32053_33507 = state_32007__$1;
(statearr_32053_33507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (23))){
var inst_31966 = (state_32007[(14)]);
var inst_31972 = (inst_31966 == null);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31972)){
var statearr_32054_33508 = state_32007__$1;
(statearr_32054_33508[(1)] = (26));

} else {
var statearr_32055_33509 = state_32007__$1;
(statearr_32055_33509[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (35))){
var inst_31992 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31992)){
var statearr_32056_33519 = state_32007__$1;
(statearr_32056_33519[(1)] = (36));

} else {
var statearr_32057_33520 = state_32007__$1;
(statearr_32057_33520[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (19))){
var inst_31933 = (state_32007[(7)]);
var inst_31954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31933);
var state_32007__$1 = state_32007;
var statearr_32058_33527 = state_32007__$1;
(statearr_32058_33527[(2)] = inst_31954);

(statearr_32058_33527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (11))){
var inst_31933 = (state_32007[(7)]);
var inst_31937 = (inst_31933 == null);
var inst_31938 = cljs.core.not(inst_31937);
var state_32007__$1 = state_32007;
if(inst_31938){
var statearr_32059_33528 = state_32007__$1;
(statearr_32059_33528[(1)] = (13));

} else {
var statearr_32063_33529 = state_32007__$1;
(statearr_32063_33529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (9))){
var inst_31903 = (state_32007[(8)]);
var state_32007__$1 = state_32007;
var statearr_32064_33530 = state_32007__$1;
(statearr_32064_33530[(2)] = inst_31903);

(statearr_32064_33530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (5))){
var state_32007__$1 = state_32007;
var statearr_32065_33531 = state_32007__$1;
(statearr_32065_33531[(2)] = true);

(statearr_32065_33531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (14))){
var state_32007__$1 = state_32007;
var statearr_32066_33532 = state_32007__$1;
(statearr_32066_33532[(2)] = false);

(statearr_32066_33532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (26))){
var inst_31967 = (state_32007[(9)]);
var inst_31974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31967);
var state_32007__$1 = state_32007;
var statearr_32067_33533 = state_32007__$1;
(statearr_32067_33533[(2)] = inst_31974);

(statearr_32067_33533[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (16))){
var state_32007__$1 = state_32007;
var statearr_32068_33534 = state_32007__$1;
(statearr_32068_33534[(2)] = true);

(statearr_32068_33534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (38))){
var inst_31997 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32069_33535 = state_32007__$1;
(statearr_32069_33535[(2)] = inst_31997);

(statearr_32069_33535[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (30))){
var inst_31967 = (state_32007[(9)]);
var inst_31958 = (state_32007[(10)]);
var inst_31959 = (state_32007[(13)]);
var inst_31984 = cljs.core.empty_QMARK_(inst_31958);
var inst_31985 = (inst_31959.cljs$core$IFn$_invoke$arity$1 ? inst_31959.cljs$core$IFn$_invoke$arity$1(inst_31967) : inst_31959.call(null,inst_31967));
var inst_31986 = cljs.core.not(inst_31985);
var inst_31987 = ((inst_31984) && (inst_31986));
var state_32007__$1 = state_32007;
var statearr_32074_33536 = state_32007__$1;
(statearr_32074_33536[(2)] = inst_31987);

(statearr_32074_33536[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (10))){
var inst_31903 = (state_32007[(8)]);
var inst_31929 = (state_32007[(2)]);
var inst_31930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31929,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31929,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31929,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31933 = inst_31903;
var state_32007__$1 = (function (){var statearr_32079 = state_32007;
(statearr_32079[(7)] = inst_31933);

(statearr_32079[(16)] = inst_31931);

(statearr_32079[(17)] = inst_31932);

(statearr_32079[(18)] = inst_31930);

return statearr_32079;
})();
var statearr_32080_33537 = state_32007__$1;
(statearr_32080_33537[(2)] = null);

(statearr_32080_33537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (18))){
var inst_31949 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32081_33538 = state_32007__$1;
(statearr_32081_33538[(2)] = inst_31949);

(statearr_32081_33538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (37))){
var state_32007__$1 = state_32007;
var statearr_32082_33539 = state_32007__$1;
(statearr_32082_33539[(2)] = null);

(statearr_32082_33539[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (8))){
var inst_31903 = (state_32007[(8)]);
var inst_31926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31903);
var state_32007__$1 = state_32007;
var statearr_32083_33540 = state_32007__$1;
(statearr_32083_33540[(2)] = inst_31926);

(statearr_32083_33540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30708__auto__,c__30929__auto___33456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30709__auto__ = null;
var cljs$core$async$mix_$_state_machine__30709__auto____0 = (function (){
var statearr_32084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32084[(0)] = cljs$core$async$mix_$_state_machine__30709__auto__);

(statearr_32084[(1)] = (1));

return statearr_32084;
});
var cljs$core$async$mix_$_state_machine__30709__auto____1 = (function (state_32007){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32007);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32085){if((e32085 instanceof Object)){
var ex__30712__auto__ = e32085;
var statearr_32086_33547 = state_32007;
(statearr_32086_33547[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32085;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33548 = state_32007;
state_32007 = G__33548;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30709__auto__ = function(state_32007){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30709__auto____1.call(this,state_32007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30709__auto____0;
cljs$core$async$mix_$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30709__auto____1;
return cljs$core$async$mix_$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30931__auto__ = (function (){var statearr_32087 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32087[(6)] = c__30929__auto___33456);

return statearr_32087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32089 = arguments.length;
switch (G__32089) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32092 = arguments.length;
switch (G__32092) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32090_SHARP_){
if(cljs.core.truth_((p1__32090_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32090_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32090_SHARP_.call(null,topic)))){
return p1__32090_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32090_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32093 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32094){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32094 = meta32094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32095,meta32094__$1){
var self__ = this;
var _32095__$1 = this;
return (new cljs.core.async.t_cljs$core$async32093(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32094__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32095){
var self__ = this;
var _32095__$1 = this;
return self__.meta32094;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32094","meta32094",1373574989,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32093";

cljs.core.async.t_cljs$core$async32093.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32093");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32093.
 */
cljs.core.async.__GT_t_cljs$core$async32093 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32093(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32094){
return (new cljs.core.async.t_cljs$core$async32093(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32094));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32093(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30929__auto___33571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33571,mults,ensure_mult,p){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33571,mults,ensure_mult,p){
return (function (state_32180){
var state_val_32181 = (state_32180[(1)]);
if((state_val_32181 === (7))){
var inst_32176 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32182_33572 = state_32180__$1;
(statearr_32182_33572[(2)] = inst_32176);

(statearr_32182_33572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (20))){
var state_32180__$1 = state_32180;
var statearr_32183_33573 = state_32180__$1;
(statearr_32183_33573[(2)] = null);

(statearr_32183_33573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (1))){
var state_32180__$1 = state_32180;
var statearr_32184_33575 = state_32180__$1;
(statearr_32184_33575[(2)] = null);

(statearr_32184_33575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (24))){
var inst_32159 = (state_32180[(7)]);
var inst_32168 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32159);
var state_32180__$1 = state_32180;
var statearr_32185_33577 = state_32180__$1;
(statearr_32185_33577[(2)] = inst_32168);

(statearr_32185_33577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (4))){
var inst_32111 = (state_32180[(8)]);
var inst_32111__$1 = (state_32180[(2)]);
var inst_32112 = (inst_32111__$1 == null);
var state_32180__$1 = (function (){var statearr_32186 = state_32180;
(statearr_32186[(8)] = inst_32111__$1);

return statearr_32186;
})();
if(cljs.core.truth_(inst_32112)){
var statearr_32187_33578 = state_32180__$1;
(statearr_32187_33578[(1)] = (5));

} else {
var statearr_32188_33579 = state_32180__$1;
(statearr_32188_33579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (15))){
var inst_32153 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32189_33580 = state_32180__$1;
(statearr_32189_33580[(2)] = inst_32153);

(statearr_32189_33580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (21))){
var inst_32173 = (state_32180[(2)]);
var state_32180__$1 = (function (){var statearr_32190 = state_32180;
(statearr_32190[(9)] = inst_32173);

return statearr_32190;
})();
var statearr_32191_33581 = state_32180__$1;
(statearr_32191_33581[(2)] = null);

(statearr_32191_33581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (13))){
var inst_32135 = (state_32180[(10)]);
var inst_32137 = cljs.core.chunked_seq_QMARK_(inst_32135);
var state_32180__$1 = state_32180;
if(inst_32137){
var statearr_32192_33582 = state_32180__$1;
(statearr_32192_33582[(1)] = (16));

} else {
var statearr_32193_33583 = state_32180__$1;
(statearr_32193_33583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (22))){
var inst_32165 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
if(cljs.core.truth_(inst_32165)){
var statearr_32194_33598 = state_32180__$1;
(statearr_32194_33598[(1)] = (23));

} else {
var statearr_32195_33599 = state_32180__$1;
(statearr_32195_33599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (6))){
var inst_32161 = (state_32180[(11)]);
var inst_32159 = (state_32180[(7)]);
var inst_32111 = (state_32180[(8)]);
var inst_32159__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32111) : topic_fn.call(null,inst_32111));
var inst_32160 = cljs.core.deref(mults);
var inst_32161__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32160,inst_32159__$1);
var state_32180__$1 = (function (){var statearr_32196 = state_32180;
(statearr_32196[(11)] = inst_32161__$1);

(statearr_32196[(7)] = inst_32159__$1);

return statearr_32196;
})();
if(cljs.core.truth_(inst_32161__$1)){
var statearr_32197_33600 = state_32180__$1;
(statearr_32197_33600[(1)] = (19));

} else {
var statearr_32198_33601 = state_32180__$1;
(statearr_32198_33601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (25))){
var inst_32170 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32199_33602 = state_32180__$1;
(statearr_32199_33602[(2)] = inst_32170);

(statearr_32199_33602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (17))){
var inst_32135 = (state_32180[(10)]);
var inst_32144 = cljs.core.first(inst_32135);
var inst_32145 = cljs.core.async.muxch_STAR_(inst_32144);
var inst_32146 = cljs.core.async.close_BANG_(inst_32145);
var inst_32147 = cljs.core.next(inst_32135);
var inst_32121 = inst_32147;
var inst_32122 = null;
var inst_32123 = (0);
var inst_32124 = (0);
var state_32180__$1 = (function (){var statearr_32200 = state_32180;
(statearr_32200[(12)] = inst_32124);

(statearr_32200[(13)] = inst_32146);

(statearr_32200[(14)] = inst_32121);

(statearr_32200[(15)] = inst_32123);

(statearr_32200[(16)] = inst_32122);

return statearr_32200;
})();
var statearr_32201_33603 = state_32180__$1;
(statearr_32201_33603[(2)] = null);

(statearr_32201_33603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (3))){
var inst_32178 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32180__$1,inst_32178);
} else {
if((state_val_32181 === (12))){
var inst_32155 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32202_33604 = state_32180__$1;
(statearr_32202_33604[(2)] = inst_32155);

(statearr_32202_33604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (2))){
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32180__$1,(4),ch);
} else {
if((state_val_32181 === (23))){
var state_32180__$1 = state_32180;
var statearr_32203_33605 = state_32180__$1;
(statearr_32203_33605[(2)] = null);

(statearr_32203_33605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (19))){
var inst_32161 = (state_32180[(11)]);
var inst_32111 = (state_32180[(8)]);
var inst_32163 = cljs.core.async.muxch_STAR_(inst_32161);
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32180__$1,(22),inst_32163,inst_32111);
} else {
if((state_val_32181 === (11))){
var inst_32135 = (state_32180[(10)]);
var inst_32121 = (state_32180[(14)]);
var inst_32135__$1 = cljs.core.seq(inst_32121);
var state_32180__$1 = (function (){var statearr_32204 = state_32180;
(statearr_32204[(10)] = inst_32135__$1);

return statearr_32204;
})();
if(inst_32135__$1){
var statearr_32205_33606 = state_32180__$1;
(statearr_32205_33606[(1)] = (13));

} else {
var statearr_32206_33607 = state_32180__$1;
(statearr_32206_33607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (9))){
var inst_32157 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32207_33608 = state_32180__$1;
(statearr_32207_33608[(2)] = inst_32157);

(statearr_32207_33608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (5))){
var inst_32118 = cljs.core.deref(mults);
var inst_32119 = cljs.core.vals(inst_32118);
var inst_32120 = cljs.core.seq(inst_32119);
var inst_32121 = inst_32120;
var inst_32122 = null;
var inst_32123 = (0);
var inst_32124 = (0);
var state_32180__$1 = (function (){var statearr_32218 = state_32180;
(statearr_32218[(12)] = inst_32124);

(statearr_32218[(14)] = inst_32121);

(statearr_32218[(15)] = inst_32123);

(statearr_32218[(16)] = inst_32122);

return statearr_32218;
})();
var statearr_32219_33609 = state_32180__$1;
(statearr_32219_33609[(2)] = null);

(statearr_32219_33609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (14))){
var state_32180__$1 = state_32180;
var statearr_32223_33610 = state_32180__$1;
(statearr_32223_33610[(2)] = null);

(statearr_32223_33610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (16))){
var inst_32135 = (state_32180[(10)]);
var inst_32139 = cljs.core.chunk_first(inst_32135);
var inst_32140 = cljs.core.chunk_rest(inst_32135);
var inst_32141 = cljs.core.count(inst_32139);
var inst_32121 = inst_32140;
var inst_32122 = inst_32139;
var inst_32123 = inst_32141;
var inst_32124 = (0);
var state_32180__$1 = (function (){var statearr_32224 = state_32180;
(statearr_32224[(12)] = inst_32124);

(statearr_32224[(14)] = inst_32121);

(statearr_32224[(15)] = inst_32123);

(statearr_32224[(16)] = inst_32122);

return statearr_32224;
})();
var statearr_32225_33612 = state_32180__$1;
(statearr_32225_33612[(2)] = null);

(statearr_32225_33612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (10))){
var inst_32124 = (state_32180[(12)]);
var inst_32121 = (state_32180[(14)]);
var inst_32123 = (state_32180[(15)]);
var inst_32122 = (state_32180[(16)]);
var inst_32129 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32122,inst_32124);
var inst_32130 = cljs.core.async.muxch_STAR_(inst_32129);
var inst_32131 = cljs.core.async.close_BANG_(inst_32130);
var inst_32132 = (inst_32124 + (1));
var tmp32220 = inst_32121;
var tmp32221 = inst_32123;
var tmp32222 = inst_32122;
var inst_32121__$1 = tmp32220;
var inst_32122__$1 = tmp32222;
var inst_32123__$1 = tmp32221;
var inst_32124__$1 = inst_32132;
var state_32180__$1 = (function (){var statearr_32226 = state_32180;
(statearr_32226[(17)] = inst_32131);

(statearr_32226[(12)] = inst_32124__$1);

(statearr_32226[(14)] = inst_32121__$1);

(statearr_32226[(15)] = inst_32123__$1);

(statearr_32226[(16)] = inst_32122__$1);

return statearr_32226;
})();
var statearr_32227_33617 = state_32180__$1;
(statearr_32227_33617[(2)] = null);

(statearr_32227_33617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (18))){
var inst_32150 = (state_32180[(2)]);
var state_32180__$1 = state_32180;
var statearr_32228_33619 = state_32180__$1;
(statearr_32228_33619[(2)] = inst_32150);

(statearr_32228_33619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32181 === (8))){
var inst_32124 = (state_32180[(12)]);
var inst_32123 = (state_32180[(15)]);
var inst_32126 = (inst_32124 < inst_32123);
var inst_32127 = inst_32126;
var state_32180__$1 = state_32180;
if(cljs.core.truth_(inst_32127)){
var statearr_32229_33620 = state_32180__$1;
(statearr_32229_33620[(1)] = (10));

} else {
var statearr_32230_33621 = state_32180__$1;
(statearr_32230_33621[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33571,mults,ensure_mult,p))
;
return ((function (switch__30708__auto__,c__30929__auto___33571,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32231[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32231[(1)] = (1));

return statearr_32231;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32180){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32180);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32232){if((e32232 instanceof Object)){
var ex__30712__auto__ = e32232;
var statearr_32233_33622 = state_32180;
(statearr_32233_33622[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33624 = state_32180;
state_32180 = G__33624;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33571,mults,ensure_mult,p))
})();
var state__30931__auto__ = (function (){var statearr_32234 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32234[(6)] = c__30929__auto___33571);

return statearr_32234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33571,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32236 = arguments.length;
switch (G__32236) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32238 = arguments.length;
switch (G__32238) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32240 = arguments.length;
switch (G__32240) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30929__auto___33632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32279){
var state_val_32280 = (state_32279[(1)]);
if((state_val_32280 === (7))){
var state_32279__$1 = state_32279;
var statearr_32281_33633 = state_32279__$1;
(statearr_32281_33633[(2)] = null);

(statearr_32281_33633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (1))){
var state_32279__$1 = state_32279;
var statearr_32282_33634 = state_32279__$1;
(statearr_32282_33634[(2)] = null);

(statearr_32282_33634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (4))){
var inst_32243 = (state_32279[(7)]);
var inst_32245 = (inst_32243 < cnt);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32245)){
var statearr_32283_33636 = state_32279__$1;
(statearr_32283_33636[(1)] = (6));

} else {
var statearr_32284_33637 = state_32279__$1;
(statearr_32284_33637[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (15))){
var inst_32275 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32285_33638 = state_32279__$1;
(statearr_32285_33638[(2)] = inst_32275);

(statearr_32285_33638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (13))){
var inst_32268 = cljs.core.async.close_BANG_(out);
var state_32279__$1 = state_32279;
var statearr_32286_33639 = state_32279__$1;
(statearr_32286_33639[(2)] = inst_32268);

(statearr_32286_33639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (6))){
var state_32279__$1 = state_32279;
var statearr_32287_33640 = state_32279__$1;
(statearr_32287_33640[(2)] = null);

(statearr_32287_33640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (3))){
var inst_32277 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32279__$1,inst_32277);
} else {
if((state_val_32280 === (12))){
var inst_32265 = (state_32279[(8)]);
var inst_32265__$1 = (state_32279[(2)]);
var inst_32266 = cljs.core.some(cljs.core.nil_QMARK_,inst_32265__$1);
var state_32279__$1 = (function (){var statearr_32288 = state_32279;
(statearr_32288[(8)] = inst_32265__$1);

return statearr_32288;
})();
if(cljs.core.truth_(inst_32266)){
var statearr_32289_33641 = state_32279__$1;
(statearr_32289_33641[(1)] = (13));

} else {
var statearr_32290_33642 = state_32279__$1;
(statearr_32290_33642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (2))){
var inst_32242 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32243 = (0);
var state_32279__$1 = (function (){var statearr_32291 = state_32279;
(statearr_32291[(9)] = inst_32242);

(statearr_32291[(7)] = inst_32243);

return statearr_32291;
})();
var statearr_32292_33643 = state_32279__$1;
(statearr_32292_33643[(2)] = null);

(statearr_32292_33643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (11))){
var inst_32243 = (state_32279[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32279,(10),Object,null,(9));
var inst_32252 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32243) : chs__$1.call(null,inst_32243));
var inst_32253 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32243) : done.call(null,inst_32243));
var inst_32254 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32252,inst_32253);
var state_32279__$1 = state_32279;
var statearr_32293_33644 = state_32279__$1;
(statearr_32293_33644[(2)] = inst_32254);


cljs.core.async.impl.ioc_helpers.process_exception(state_32279__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (9))){
var inst_32243 = (state_32279[(7)]);
var inst_32256 = (state_32279[(2)]);
var inst_32257 = (inst_32243 + (1));
var inst_32243__$1 = inst_32257;
var state_32279__$1 = (function (){var statearr_32294 = state_32279;
(statearr_32294[(7)] = inst_32243__$1);

(statearr_32294[(10)] = inst_32256);

return statearr_32294;
})();
var statearr_32295_33646 = state_32279__$1;
(statearr_32295_33646[(2)] = null);

(statearr_32295_33646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (5))){
var inst_32263 = (state_32279[(2)]);
var state_32279__$1 = (function (){var statearr_32296 = state_32279;
(statearr_32296[(11)] = inst_32263);

return statearr_32296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32279__$1,(12),dchan);
} else {
if((state_val_32280 === (14))){
var inst_32265 = (state_32279[(8)]);
var inst_32270 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32265);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32279__$1,(16),out,inst_32270);
} else {
if((state_val_32280 === (16))){
var inst_32272 = (state_32279[(2)]);
var state_32279__$1 = (function (){var statearr_32297 = state_32279;
(statearr_32297[(12)] = inst_32272);

return statearr_32297;
})();
var statearr_32298_33667 = state_32279__$1;
(statearr_32298_33667[(2)] = null);

(statearr_32298_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (10))){
var inst_32247 = (state_32279[(2)]);
var inst_32248 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32279__$1 = (function (){var statearr_32299 = state_32279;
(statearr_32299[(13)] = inst_32247);

return statearr_32299;
})();
var statearr_32300_33670 = state_32279__$1;
(statearr_32300_33670[(2)] = inst_32248);


cljs.core.async.impl.ioc_helpers.process_exception(state_32279__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (8))){
var inst_32261 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32301_33675 = state_32279__$1;
(statearr_32301_33675[(2)] = inst_32261);

(statearr_32301_33675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33632,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30708__auto__,c__30929__auto___33632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32302[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32302[(1)] = (1));

return statearr_32302;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32279){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32279);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32303){if((e32303 instanceof Object)){
var ex__30712__auto__ = e32303;
var statearr_32304_33676 = state_32279;
(statearr_32304_33676[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33677 = state_32279;
state_32279 = G__33677;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33632,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30931__auto__ = (function (){var statearr_32305 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32305[(6)] = c__30929__auto___33632);

return statearr_32305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33632,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32309 = arguments.length;
switch (G__32309) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30929__auto___33679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33679,out){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33679,out){
return (function (state_32341){
var state_val_32342 = (state_32341[(1)]);
if((state_val_32342 === (7))){
var inst_32320 = (state_32341[(7)]);
var inst_32321 = (state_32341[(8)]);
var inst_32320__$1 = (state_32341[(2)]);
var inst_32321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32320__$1,(0),null);
var inst_32322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32320__$1,(1),null);
var inst_32323 = (inst_32321__$1 == null);
var state_32341__$1 = (function (){var statearr_32343 = state_32341;
(statearr_32343[(7)] = inst_32320__$1);

(statearr_32343[(8)] = inst_32321__$1);

(statearr_32343[(9)] = inst_32322);

return statearr_32343;
})();
if(cljs.core.truth_(inst_32323)){
var statearr_32344_33704 = state_32341__$1;
(statearr_32344_33704[(1)] = (8));

} else {
var statearr_32345_33705 = state_32341__$1;
(statearr_32345_33705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (1))){
var inst_32310 = cljs.core.vec(chs);
var inst_32311 = inst_32310;
var state_32341__$1 = (function (){var statearr_32346 = state_32341;
(statearr_32346[(10)] = inst_32311);

return statearr_32346;
})();
var statearr_32347_33706 = state_32341__$1;
(statearr_32347_33706[(2)] = null);

(statearr_32347_33706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (4))){
var inst_32311 = (state_32341[(10)]);
var state_32341__$1 = state_32341;
return cljs.core.async.ioc_alts_BANG_(state_32341__$1,(7),inst_32311);
} else {
if((state_val_32342 === (6))){
var inst_32337 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32348_33714 = state_32341__$1;
(statearr_32348_33714[(2)] = inst_32337);

(statearr_32348_33714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (3))){
var inst_32339 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32341__$1,inst_32339);
} else {
if((state_val_32342 === (2))){
var inst_32311 = (state_32341[(10)]);
var inst_32313 = cljs.core.count(inst_32311);
var inst_32314 = (inst_32313 > (0));
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32314)){
var statearr_32350_33722 = state_32341__$1;
(statearr_32350_33722[(1)] = (4));

} else {
var statearr_32351_33723 = state_32341__$1;
(statearr_32351_33723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (11))){
var inst_32311 = (state_32341[(10)]);
var inst_32330 = (state_32341[(2)]);
var tmp32349 = inst_32311;
var inst_32311__$1 = tmp32349;
var state_32341__$1 = (function (){var statearr_32352 = state_32341;
(statearr_32352[(10)] = inst_32311__$1);

(statearr_32352[(11)] = inst_32330);

return statearr_32352;
})();
var statearr_32353_33724 = state_32341__$1;
(statearr_32353_33724[(2)] = null);

(statearr_32353_33724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (9))){
var inst_32321 = (state_32341[(8)]);
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32341__$1,(11),out,inst_32321);
} else {
if((state_val_32342 === (5))){
var inst_32335 = cljs.core.async.close_BANG_(out);
var state_32341__$1 = state_32341;
var statearr_32354_33725 = state_32341__$1;
(statearr_32354_33725[(2)] = inst_32335);

(statearr_32354_33725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (10))){
var inst_32333 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32355_33732 = state_32341__$1;
(statearr_32355_33732[(2)] = inst_32333);

(statearr_32355_33732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (8))){
var inst_32320 = (state_32341[(7)]);
var inst_32311 = (state_32341[(10)]);
var inst_32321 = (state_32341[(8)]);
var inst_32322 = (state_32341[(9)]);
var inst_32325 = (function (){var cs = inst_32311;
var vec__32316 = inst_32320;
var v = inst_32321;
var c = inst_32322;
return ((function (cs,vec__32316,v,c,inst_32320,inst_32311,inst_32321,inst_32322,state_val_32342,c__30929__auto___33679,out){
return (function (p1__32307_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32307_SHARP_);
});
;})(cs,vec__32316,v,c,inst_32320,inst_32311,inst_32321,inst_32322,state_val_32342,c__30929__auto___33679,out))
})();
var inst_32326 = cljs.core.filterv(inst_32325,inst_32311);
var inst_32311__$1 = inst_32326;
var state_32341__$1 = (function (){var statearr_32356 = state_32341;
(statearr_32356[(10)] = inst_32311__$1);

return statearr_32356;
})();
var statearr_32357_33733 = state_32341__$1;
(statearr_32357_33733[(2)] = null);

(statearr_32357_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33679,out))
;
return ((function (switch__30708__auto__,c__30929__auto___33679,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32358[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32358[(1)] = (1));

return statearr_32358;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32341){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32341);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32359){if((e32359 instanceof Object)){
var ex__30712__auto__ = e32359;
var statearr_32360_33736 = state_32341;
(statearr_32360_33736[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_32341;
state_32341 = G__33737;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33679,out))
})();
var state__30931__auto__ = (function (){var statearr_32361 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32361[(6)] = c__30929__auto___33679);

return statearr_32361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33679,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32365 = arguments.length;
switch (G__32365) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30929__auto___33748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33748,out){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33748,out){
return (function (state_32389){
var state_val_32390 = (state_32389[(1)]);
if((state_val_32390 === (7))){
var inst_32371 = (state_32389[(7)]);
var inst_32371__$1 = (state_32389[(2)]);
var inst_32372 = (inst_32371__$1 == null);
var inst_32373 = cljs.core.not(inst_32372);
var state_32389__$1 = (function (){var statearr_32391 = state_32389;
(statearr_32391[(7)] = inst_32371__$1);

return statearr_32391;
})();
if(inst_32373){
var statearr_32392_33749 = state_32389__$1;
(statearr_32392_33749[(1)] = (8));

} else {
var statearr_32393_33750 = state_32389__$1;
(statearr_32393_33750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (1))){
var inst_32366 = (0);
var state_32389__$1 = (function (){var statearr_32394 = state_32389;
(statearr_32394[(8)] = inst_32366);

return statearr_32394;
})();
var statearr_32395_33751 = state_32389__$1;
(statearr_32395_33751[(2)] = null);

(statearr_32395_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (4))){
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32389__$1,(7),ch);
} else {
if((state_val_32390 === (6))){
var inst_32384 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32396_33752 = state_32389__$1;
(statearr_32396_33752[(2)] = inst_32384);

(statearr_32396_33752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (3))){
var inst_32386 = (state_32389[(2)]);
var inst_32387 = cljs.core.async.close_BANG_(out);
var state_32389__$1 = (function (){var statearr_32397 = state_32389;
(statearr_32397[(9)] = inst_32386);

return statearr_32397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32389__$1,inst_32387);
} else {
if((state_val_32390 === (2))){
var inst_32366 = (state_32389[(8)]);
var inst_32368 = (inst_32366 < n);
var state_32389__$1 = state_32389;
if(cljs.core.truth_(inst_32368)){
var statearr_32406_33753 = state_32389__$1;
(statearr_32406_33753[(1)] = (4));

} else {
var statearr_32407_33754 = state_32389__$1;
(statearr_32407_33754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (11))){
var inst_32366 = (state_32389[(8)]);
var inst_32376 = (state_32389[(2)]);
var inst_32377 = (inst_32366 + (1));
var inst_32366__$1 = inst_32377;
var state_32389__$1 = (function (){var statearr_32412 = state_32389;
(statearr_32412[(8)] = inst_32366__$1);

(statearr_32412[(10)] = inst_32376);

return statearr_32412;
})();
var statearr_32413_33755 = state_32389__$1;
(statearr_32413_33755[(2)] = null);

(statearr_32413_33755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (9))){
var state_32389__$1 = state_32389;
var statearr_32416_33756 = state_32389__$1;
(statearr_32416_33756[(2)] = null);

(statearr_32416_33756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (5))){
var state_32389__$1 = state_32389;
var statearr_32419_33757 = state_32389__$1;
(statearr_32419_33757[(2)] = null);

(statearr_32419_33757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (10))){
var inst_32381 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32420_33762 = state_32389__$1;
(statearr_32420_33762[(2)] = inst_32381);

(statearr_32420_33762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (8))){
var inst_32371 = (state_32389[(7)]);
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32389__$1,(11),out,inst_32371);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33748,out))
;
return ((function (switch__30708__auto__,c__30929__auto___33748,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32424[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32424[(1)] = (1));

return statearr_32424;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32389){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32389);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32425){if((e32425 instanceof Object)){
var ex__30712__auto__ = e32425;
var statearr_32426_33770 = state_32389;
(statearr_32426_33770[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33774 = state_32389;
state_32389 = G__33774;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33748,out))
})();
var state__30931__auto__ = (function (){var statearr_32427 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32427[(6)] = c__30929__auto___33748);

return statearr_32427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33748,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32435 = (function (f,ch,meta32436){
this.f = f;
this.ch = ch;
this.meta32436 = meta32436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32437,meta32436__$1){
var self__ = this;
var _32437__$1 = this;
return (new cljs.core.async.t_cljs$core$async32435(self__.f,self__.ch,meta32436__$1));
});

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32437){
var self__ = this;
var _32437__$1 = this;
return self__.meta32436;
});

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32447 = (function (f,ch,meta32436,_,fn1,meta32448){
this.f = f;
this.ch = ch;
this.meta32436 = meta32436;
this._ = _;
this.fn1 = fn1;
this.meta32448 = meta32448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32449,meta32448__$1){
var self__ = this;
var _32449__$1 = this;
return (new cljs.core.async.t_cljs$core$async32447(self__.f,self__.ch,self__.meta32436,self__._,self__.fn1,meta32448__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32449){
var self__ = this;
var _32449__$1 = this;
return self__.meta32448;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32432_SHARP_){
var G__32454 = (((p1__32432_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32432_SHARP_) : self__.f.call(null,p1__32432_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32454) : f1.call(null,G__32454));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32436","meta32436",1287190732,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32435","cljs.core.async/t_cljs$core$async32435",-1492306699,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32448","meta32448",1473482540,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32447";

cljs.core.async.t_cljs$core$async32447.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32447");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32447.
 */
cljs.core.async.__GT_t_cljs$core$async32447 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32447(f__$1,ch__$1,meta32436__$1,___$2,fn1__$1,meta32448){
return (new cljs.core.async.t_cljs$core$async32447(f__$1,ch__$1,meta32436__$1,___$2,fn1__$1,meta32448));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32447(self__.f,self__.ch,self__.meta32436,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32458 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32458) : self__.f.call(null,G__32458));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32436","meta32436",1287190732,null)], null);
});

cljs.core.async.t_cljs$core$async32435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32435";

cljs.core.async.t_cljs$core$async32435.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32435");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32435.
 */
cljs.core.async.__GT_t_cljs$core$async32435 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32435(f__$1,ch__$1,meta32436){
return (new cljs.core.async.t_cljs$core$async32435(f__$1,ch__$1,meta32436));
});

}

return (new cljs.core.async.t_cljs$core$async32435(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32459 = (function (f,ch,meta32460){
this.f = f;
this.ch = ch;
this.meta32460 = meta32460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32461,meta32460__$1){
var self__ = this;
var _32461__$1 = this;
return (new cljs.core.async.t_cljs$core$async32459(self__.f,self__.ch,meta32460__$1));
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32461){
var self__ = this;
var _32461__$1 = this;
return self__.meta32460;
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32460","meta32460",-1002098745,null)], null);
});

cljs.core.async.t_cljs$core$async32459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32459";

cljs.core.async.t_cljs$core$async32459.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32459");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32459.
 */
cljs.core.async.__GT_t_cljs$core$async32459 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32459(f__$1,ch__$1,meta32460){
return (new cljs.core.async.t_cljs$core$async32459(f__$1,ch__$1,meta32460));
});

}

return (new cljs.core.async.t_cljs$core$async32459(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32470 = (function (p,ch,meta32472){
this.p = p;
this.ch = ch;
this.meta32472 = meta32472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32473,meta32472__$1){
var self__ = this;
var _32473__$1 = this;
return (new cljs.core.async.t_cljs$core$async32470(self__.p,self__.ch,meta32472__$1));
});

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32473){
var self__ = this;
var _32473__$1 = this;
return self__.meta32472;
});

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32472","meta32472",-745825888,null)], null);
});

cljs.core.async.t_cljs$core$async32470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32470";

cljs.core.async.t_cljs$core$async32470.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32470");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32470.
 */
cljs.core.async.__GT_t_cljs$core$async32470 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32470(p__$1,ch__$1,meta32472){
return (new cljs.core.async.t_cljs$core$async32470(p__$1,ch__$1,meta32472));
});

}

return (new cljs.core.async.t_cljs$core$async32470(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32507 = arguments.length;
switch (G__32507) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30929__auto___33878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33878,out){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33878,out){
return (function (state_32541){
var state_val_32542 = (state_32541[(1)]);
if((state_val_32542 === (7))){
var inst_32537 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32556_33883 = state_32541__$1;
(statearr_32556_33883[(2)] = inst_32537);

(statearr_32556_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (1))){
var state_32541__$1 = state_32541;
var statearr_32557_33884 = state_32541__$1;
(statearr_32557_33884[(2)] = null);

(statearr_32557_33884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (4))){
var inst_32522 = (state_32541[(7)]);
var inst_32522__$1 = (state_32541[(2)]);
var inst_32524 = (inst_32522__$1 == null);
var state_32541__$1 = (function (){var statearr_32558 = state_32541;
(statearr_32558[(7)] = inst_32522__$1);

return statearr_32558;
})();
if(cljs.core.truth_(inst_32524)){
var statearr_32559_33905 = state_32541__$1;
(statearr_32559_33905[(1)] = (5));

} else {
var statearr_32560_33906 = state_32541__$1;
(statearr_32560_33906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (6))){
var inst_32522 = (state_32541[(7)]);
var inst_32528 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32522) : p.call(null,inst_32522));
var state_32541__$1 = state_32541;
if(cljs.core.truth_(inst_32528)){
var statearr_32561_33912 = state_32541__$1;
(statearr_32561_33912[(1)] = (8));

} else {
var statearr_32562_33913 = state_32541__$1;
(statearr_32562_33913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (3))){
var inst_32539 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32541__$1,inst_32539);
} else {
if((state_val_32542 === (2))){
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32541__$1,(4),ch);
} else {
if((state_val_32542 === (11))){
var inst_32531 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32563_33921 = state_32541__$1;
(statearr_32563_33921[(2)] = inst_32531);

(statearr_32563_33921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (9))){
var state_32541__$1 = state_32541;
var statearr_32564_33922 = state_32541__$1;
(statearr_32564_33922[(2)] = null);

(statearr_32564_33922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (5))){
var inst_32526 = cljs.core.async.close_BANG_(out);
var state_32541__$1 = state_32541;
var statearr_32565_33930 = state_32541__$1;
(statearr_32565_33930[(2)] = inst_32526);

(statearr_32565_33930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (10))){
var inst_32534 = (state_32541[(2)]);
var state_32541__$1 = (function (){var statearr_32573 = state_32541;
(statearr_32573[(8)] = inst_32534);

return statearr_32573;
})();
var statearr_32575_33935 = state_32541__$1;
(statearr_32575_33935[(2)] = null);

(statearr_32575_33935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (8))){
var inst_32522 = (state_32541[(7)]);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32541__$1,(11),out,inst_32522);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33878,out))
;
return ((function (switch__30708__auto__,c__30929__auto___33878,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32579 = [null,null,null,null,null,null,null,null,null];
(statearr_32579[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32579[(1)] = (1));

return statearr_32579;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32541){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32541);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32580){if((e32580 instanceof Object)){
var ex__30712__auto__ = e32580;
var statearr_32582_33937 = state_32541;
(statearr_32582_33937[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33938 = state_32541;
state_32541 = G__33938;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33878,out))
})();
var state__30931__auto__ = (function (){var statearr_32583 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32583[(6)] = c__30929__auto___33878);

return statearr_32583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33878,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30929__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto__){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto__){
return (function (state_32657){
var state_val_32658 = (state_32657[(1)]);
if((state_val_32658 === (7))){
var inst_32653 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32663_33948 = state_32657__$1;
(statearr_32663_33948[(2)] = inst_32653);

(statearr_32663_33948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (20))){
var inst_32623 = (state_32657[(7)]);
var inst_32634 = (state_32657[(2)]);
var inst_32635 = cljs.core.next(inst_32623);
var inst_32609 = inst_32635;
var inst_32610 = null;
var inst_32611 = (0);
var inst_32612 = (0);
var state_32657__$1 = (function (){var statearr_32665 = state_32657;
(statearr_32665[(8)] = inst_32609);

(statearr_32665[(9)] = inst_32612);

(statearr_32665[(10)] = inst_32634);

(statearr_32665[(11)] = inst_32610);

(statearr_32665[(12)] = inst_32611);

return statearr_32665;
})();
var statearr_32670_33949 = state_32657__$1;
(statearr_32670_33949[(2)] = null);

(statearr_32670_33949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (1))){
var state_32657__$1 = state_32657;
var statearr_32671_33950 = state_32657__$1;
(statearr_32671_33950[(2)] = null);

(statearr_32671_33950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (4))){
var inst_32598 = (state_32657[(13)]);
var inst_32598__$1 = (state_32657[(2)]);
var inst_32599 = (inst_32598__$1 == null);
var state_32657__$1 = (function (){var statearr_32674 = state_32657;
(statearr_32674[(13)] = inst_32598__$1);

return statearr_32674;
})();
if(cljs.core.truth_(inst_32599)){
var statearr_32675_33955 = state_32657__$1;
(statearr_32675_33955[(1)] = (5));

} else {
var statearr_32676_33956 = state_32657__$1;
(statearr_32676_33956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (15))){
var state_32657__$1 = state_32657;
var statearr_32690_33957 = state_32657__$1;
(statearr_32690_33957[(2)] = null);

(statearr_32690_33957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (21))){
var state_32657__$1 = state_32657;
var statearr_32691_33967 = state_32657__$1;
(statearr_32691_33967[(2)] = null);

(statearr_32691_33967[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (13))){
var inst_32609 = (state_32657[(8)]);
var inst_32612 = (state_32657[(9)]);
var inst_32610 = (state_32657[(11)]);
var inst_32611 = (state_32657[(12)]);
var inst_32619 = (state_32657[(2)]);
var inst_32620 = (inst_32612 + (1));
var tmp32677 = inst_32609;
var tmp32678 = inst_32610;
var tmp32679 = inst_32611;
var inst_32609__$1 = tmp32677;
var inst_32610__$1 = tmp32678;
var inst_32611__$1 = tmp32679;
var inst_32612__$1 = inst_32620;
var state_32657__$1 = (function (){var statearr_32692 = state_32657;
(statearr_32692[(8)] = inst_32609__$1);

(statearr_32692[(14)] = inst_32619);

(statearr_32692[(9)] = inst_32612__$1);

(statearr_32692[(11)] = inst_32610__$1);

(statearr_32692[(12)] = inst_32611__$1);

return statearr_32692;
})();
var statearr_32693_33968 = state_32657__$1;
(statearr_32693_33968[(2)] = null);

(statearr_32693_33968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (22))){
var state_32657__$1 = state_32657;
var statearr_32694_33969 = state_32657__$1;
(statearr_32694_33969[(2)] = null);

(statearr_32694_33969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (6))){
var inst_32598 = (state_32657[(13)]);
var inst_32607 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32598) : f.call(null,inst_32598));
var inst_32608 = cljs.core.seq(inst_32607);
var inst_32609 = inst_32608;
var inst_32610 = null;
var inst_32611 = (0);
var inst_32612 = (0);
var state_32657__$1 = (function (){var statearr_32697 = state_32657;
(statearr_32697[(8)] = inst_32609);

(statearr_32697[(9)] = inst_32612);

(statearr_32697[(11)] = inst_32610);

(statearr_32697[(12)] = inst_32611);

return statearr_32697;
})();
var statearr_32698_33970 = state_32657__$1;
(statearr_32698_33970[(2)] = null);

(statearr_32698_33970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (17))){
var inst_32623 = (state_32657[(7)]);
var inst_32627 = cljs.core.chunk_first(inst_32623);
var inst_32628 = cljs.core.chunk_rest(inst_32623);
var inst_32629 = cljs.core.count(inst_32627);
var inst_32609 = inst_32628;
var inst_32610 = inst_32627;
var inst_32611 = inst_32629;
var inst_32612 = (0);
var state_32657__$1 = (function (){var statearr_32699 = state_32657;
(statearr_32699[(8)] = inst_32609);

(statearr_32699[(9)] = inst_32612);

(statearr_32699[(11)] = inst_32610);

(statearr_32699[(12)] = inst_32611);

return statearr_32699;
})();
var statearr_32700_33971 = state_32657__$1;
(statearr_32700_33971[(2)] = null);

(statearr_32700_33971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (3))){
var inst_32655 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32657__$1,inst_32655);
} else {
if((state_val_32658 === (12))){
var inst_32643 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32701_33972 = state_32657__$1;
(statearr_32701_33972[(2)] = inst_32643);

(statearr_32701_33972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (2))){
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32657__$1,(4),in$);
} else {
if((state_val_32658 === (23))){
var inst_32651 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32702_33973 = state_32657__$1;
(statearr_32702_33973[(2)] = inst_32651);

(statearr_32702_33973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (19))){
var inst_32638 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32703_33974 = state_32657__$1;
(statearr_32703_33974[(2)] = inst_32638);

(statearr_32703_33974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (11))){
var inst_32609 = (state_32657[(8)]);
var inst_32623 = (state_32657[(7)]);
var inst_32623__$1 = cljs.core.seq(inst_32609);
var state_32657__$1 = (function (){var statearr_32704 = state_32657;
(statearr_32704[(7)] = inst_32623__$1);

return statearr_32704;
})();
if(inst_32623__$1){
var statearr_32705_33975 = state_32657__$1;
(statearr_32705_33975[(1)] = (14));

} else {
var statearr_32722_33976 = state_32657__$1;
(statearr_32722_33976[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (9))){
var inst_32645 = (state_32657[(2)]);
var inst_32646 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32657__$1 = (function (){var statearr_32723 = state_32657;
(statearr_32723[(15)] = inst_32645);

return statearr_32723;
})();
if(cljs.core.truth_(inst_32646)){
var statearr_32724_33977 = state_32657__$1;
(statearr_32724_33977[(1)] = (21));

} else {
var statearr_32725_33978 = state_32657__$1;
(statearr_32725_33978[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (5))){
var inst_32601 = cljs.core.async.close_BANG_(out);
var state_32657__$1 = state_32657;
var statearr_32726_33979 = state_32657__$1;
(statearr_32726_33979[(2)] = inst_32601);

(statearr_32726_33979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (14))){
var inst_32623 = (state_32657[(7)]);
var inst_32625 = cljs.core.chunked_seq_QMARK_(inst_32623);
var state_32657__$1 = state_32657;
if(inst_32625){
var statearr_32727_33980 = state_32657__$1;
(statearr_32727_33980[(1)] = (17));

} else {
var statearr_32728_33981 = state_32657__$1;
(statearr_32728_33981[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (16))){
var inst_32641 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32729_33982 = state_32657__$1;
(statearr_32729_33982[(2)] = inst_32641);

(statearr_32729_33982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (10))){
var inst_32612 = (state_32657[(9)]);
var inst_32610 = (state_32657[(11)]);
var inst_32617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32610,inst_32612);
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32657__$1,(13),out,inst_32617);
} else {
if((state_val_32658 === (18))){
var inst_32623 = (state_32657[(7)]);
var inst_32632 = cljs.core.first(inst_32623);
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32657__$1,(20),out,inst_32632);
} else {
if((state_val_32658 === (8))){
var inst_32612 = (state_32657[(9)]);
var inst_32611 = (state_32657[(12)]);
var inst_32614 = (inst_32612 < inst_32611);
var inst_32615 = inst_32614;
var state_32657__$1 = state_32657;
if(cljs.core.truth_(inst_32615)){
var statearr_32746_33983 = state_32657__$1;
(statearr_32746_33983[(1)] = (10));

} else {
var statearr_32748_33984 = state_32657__$1;
(statearr_32748_33984[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto__))
;
return ((function (switch__30708__auto__,c__30929__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____0 = (function (){
var statearr_32753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32753[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__);

(statearr_32753[(1)] = (1));

return statearr_32753;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____1 = (function (state_32657){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32657);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32754){if((e32754 instanceof Object)){
var ex__30712__auto__ = e32754;
var statearr_32759_33986 = state_32657;
(statearr_32759_33986[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33987 = state_32657;
state_32657 = G__33987;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__ = function(state_32657){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____1.call(this,state_32657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30709__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto__))
})();
var state__30931__auto__ = (function (){var statearr_32760 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32760[(6)] = c__30929__auto__);

return statearr_32760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto__))
);

return c__30929__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32771 = arguments.length;
switch (G__32771) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32773 = arguments.length;
switch (G__32773) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32775 = arguments.length;
switch (G__32775) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30929__auto___33991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___33991,out){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___33991,out){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (7))){
var inst_32796 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32805_33992 = state_32803__$1;
(statearr_32805_33992[(2)] = inst_32796);

(statearr_32805_33992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (1))){
var inst_32776 = null;
var state_32803__$1 = (function (){var statearr_32806 = state_32803;
(statearr_32806[(7)] = inst_32776);

return statearr_32806;
})();
var statearr_32807_33993 = state_32803__$1;
(statearr_32807_33993[(2)] = null);

(statearr_32807_33993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (4))){
var inst_32779 = (state_32803[(8)]);
var inst_32779__$1 = (state_32803[(2)]);
var inst_32780 = (inst_32779__$1 == null);
var inst_32781 = cljs.core.not(inst_32780);
var state_32803__$1 = (function (){var statearr_32809 = state_32803;
(statearr_32809[(8)] = inst_32779__$1);

return statearr_32809;
})();
if(inst_32781){
var statearr_32810_33994 = state_32803__$1;
(statearr_32810_33994[(1)] = (5));

} else {
var statearr_32811_33995 = state_32803__$1;
(statearr_32811_33995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var state_32803__$1 = state_32803;
var statearr_32812_34000 = state_32803__$1;
(statearr_32812_34000[(2)] = null);

(statearr_32812_34000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (3))){
var inst_32798 = (state_32803[(2)]);
var inst_32799 = cljs.core.async.close_BANG_(out);
var state_32803__$1 = (function (){var statearr_32813 = state_32803;
(statearr_32813[(9)] = inst_32798);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32803__$1,inst_32799);
} else {
if((state_val_32804 === (2))){
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32803__$1,(4),ch);
} else {
if((state_val_32804 === (11))){
var inst_32779 = (state_32803[(8)]);
var inst_32790 = (state_32803[(2)]);
var inst_32776 = inst_32779;
var state_32803__$1 = (function (){var statearr_32814 = state_32803;
(statearr_32814[(10)] = inst_32790);

(statearr_32814[(7)] = inst_32776);

return statearr_32814;
})();
var statearr_32815_34001 = state_32803__$1;
(statearr_32815_34001[(2)] = null);

(statearr_32815_34001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (9))){
var inst_32779 = (state_32803[(8)]);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32803__$1,(11),out,inst_32779);
} else {
if((state_val_32804 === (5))){
var inst_32776 = (state_32803[(7)]);
var inst_32779 = (state_32803[(8)]);
var inst_32785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32779,inst_32776);
var state_32803__$1 = state_32803;
if(inst_32785){
var statearr_32817_34002 = state_32803__$1;
(statearr_32817_34002[(1)] = (8));

} else {
var statearr_32818_34003 = state_32803__$1;
(statearr_32818_34003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (10))){
var inst_32793 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32819_34004 = state_32803__$1;
(statearr_32819_34004[(2)] = inst_32793);

(statearr_32819_34004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (8))){
var inst_32776 = (state_32803[(7)]);
var tmp32816 = inst_32776;
var inst_32776__$1 = tmp32816;
var state_32803__$1 = (function (){var statearr_32821 = state_32803;
(statearr_32821[(7)] = inst_32776__$1);

return statearr_32821;
})();
var statearr_32822_34005 = state_32803__$1;
(statearr_32822_34005[(2)] = null);

(statearr_32822_34005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___33991,out))
;
return ((function (switch__30708__auto__,c__30929__auto___33991,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32823[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32823[(1)] = (1));

return statearr_32823;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32803){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32803);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32824){if((e32824 instanceof Object)){
var ex__30712__auto__ = e32824;
var statearr_32825_34011 = state_32803;
(statearr_32825_34011[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34013 = state_32803;
state_32803 = G__34013;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___33991,out))
})();
var state__30931__auto__ = (function (){var statearr_32826 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32826[(6)] = c__30929__auto___33991);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___33991,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32828 = arguments.length;
switch (G__32828) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30929__auto___34015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___34015,out){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___34015,out){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (7))){
var inst_32871 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32881_34017 = state_32875__$1;
(statearr_32881_34017[(2)] = inst_32871);

(statearr_32881_34017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (1))){
var inst_32838 = (new Array(n));
var inst_32839 = inst_32838;
var inst_32840 = (0);
var state_32875__$1 = (function (){var statearr_32882 = state_32875;
(statearr_32882[(7)] = inst_32840);

(statearr_32882[(8)] = inst_32839);

return statearr_32882;
})();
var statearr_32883_34025 = state_32875__$1;
(statearr_32883_34025[(2)] = null);

(statearr_32883_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (4))){
var inst_32843 = (state_32875[(9)]);
var inst_32843__$1 = (state_32875[(2)]);
var inst_32844 = (inst_32843__$1 == null);
var inst_32845 = cljs.core.not(inst_32844);
var state_32875__$1 = (function (){var statearr_32884 = state_32875;
(statearr_32884[(9)] = inst_32843__$1);

return statearr_32884;
})();
if(inst_32845){
var statearr_32885_34026 = state_32875__$1;
(statearr_32885_34026[(1)] = (5));

} else {
var statearr_32886_34027 = state_32875__$1;
(statearr_32886_34027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (15))){
var inst_32865 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32887_34028 = state_32875__$1;
(statearr_32887_34028[(2)] = inst_32865);

(statearr_32887_34028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (13))){
var state_32875__$1 = state_32875;
var statearr_32888_34029 = state_32875__$1;
(statearr_32888_34029[(2)] = null);

(statearr_32888_34029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (6))){
var inst_32840 = (state_32875[(7)]);
var inst_32861 = (inst_32840 > (0));
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32861)){
var statearr_32889_34059 = state_32875__$1;
(statearr_32889_34059[(1)] = (12));

} else {
var statearr_32890_34060 = state_32875__$1;
(statearr_32890_34060[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (3))){
var inst_32873 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32875__$1,inst_32873);
} else {
if((state_val_32876 === (12))){
var inst_32839 = (state_32875[(8)]);
var inst_32863 = cljs.core.vec(inst_32839);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32875__$1,(15),out,inst_32863);
} else {
if((state_val_32876 === (2))){
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32875__$1,(4),ch);
} else {
if((state_val_32876 === (11))){
var inst_32855 = (state_32875[(2)]);
var inst_32856 = (new Array(n));
var inst_32839 = inst_32856;
var inst_32840 = (0);
var state_32875__$1 = (function (){var statearr_32891 = state_32875;
(statearr_32891[(7)] = inst_32840);

(statearr_32891[(10)] = inst_32855);

(statearr_32891[(8)] = inst_32839);

return statearr_32891;
})();
var statearr_32892_34073 = state_32875__$1;
(statearr_32892_34073[(2)] = null);

(statearr_32892_34073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (9))){
var inst_32839 = (state_32875[(8)]);
var inst_32853 = cljs.core.vec(inst_32839);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32875__$1,(11),out,inst_32853);
} else {
if((state_val_32876 === (5))){
var inst_32843 = (state_32875[(9)]);
var inst_32848 = (state_32875[(11)]);
var inst_32840 = (state_32875[(7)]);
var inst_32839 = (state_32875[(8)]);
var inst_32847 = (inst_32839[inst_32840] = inst_32843);
var inst_32848__$1 = (inst_32840 + (1));
var inst_32849 = (inst_32848__$1 < n);
var state_32875__$1 = (function (){var statearr_32893 = state_32875;
(statearr_32893[(11)] = inst_32848__$1);

(statearr_32893[(12)] = inst_32847);

return statearr_32893;
})();
if(cljs.core.truth_(inst_32849)){
var statearr_32894_34093 = state_32875__$1;
(statearr_32894_34093[(1)] = (8));

} else {
var statearr_32895_34101 = state_32875__$1;
(statearr_32895_34101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (14))){
var inst_32868 = (state_32875[(2)]);
var inst_32869 = cljs.core.async.close_BANG_(out);
var state_32875__$1 = (function (){var statearr_32897 = state_32875;
(statearr_32897[(13)] = inst_32868);

return statearr_32897;
})();
var statearr_32898_34114 = state_32875__$1;
(statearr_32898_34114[(2)] = inst_32869);

(statearr_32898_34114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (10))){
var inst_32859 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32899_34121 = state_32875__$1;
(statearr_32899_34121[(2)] = inst_32859);

(statearr_32899_34121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (8))){
var inst_32848 = (state_32875[(11)]);
var inst_32839 = (state_32875[(8)]);
var tmp32896 = inst_32839;
var inst_32839__$1 = tmp32896;
var inst_32840 = inst_32848;
var state_32875__$1 = (function (){var statearr_32900 = state_32875;
(statearr_32900[(7)] = inst_32840);

(statearr_32900[(8)] = inst_32839__$1);

return statearr_32900;
})();
var statearr_32901_34128 = state_32875__$1;
(statearr_32901_34128[(2)] = null);

(statearr_32901_34128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___34015,out))
;
return ((function (switch__30708__auto__,c__30929__auto___34015,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32902[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32902[(1)] = (1));

return statearr_32902;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32875){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32875);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32903){if((e32903 instanceof Object)){
var ex__30712__auto__ = e32903;
var statearr_32904_34144 = state_32875;
(statearr_32904_34144[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34145 = state_32875;
state_32875 = G__34145;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___34015,out))
})();
var state__30931__auto__ = (function (){var statearr_32905 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32905[(6)] = c__30929__auto___34015);

return statearr_32905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___34015,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32907 = arguments.length;
switch (G__32907) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30929__auto___34147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___34147,out){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___34147,out){
return (function (state_32949){
var state_val_32950 = (state_32949[(1)]);
if((state_val_32950 === (7))){
var inst_32945 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32951_34191 = state_32949__$1;
(statearr_32951_34191[(2)] = inst_32945);

(statearr_32951_34191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (1))){
var inst_32908 = [];
var inst_32909 = inst_32908;
var inst_32910 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32949__$1 = (function (){var statearr_32952 = state_32949;
(statearr_32952[(7)] = inst_32909);

(statearr_32952[(8)] = inst_32910);

return statearr_32952;
})();
var statearr_32953_34195 = state_32949__$1;
(statearr_32953_34195[(2)] = null);

(statearr_32953_34195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (4))){
var inst_32913 = (state_32949[(9)]);
var inst_32913__$1 = (state_32949[(2)]);
var inst_32914 = (inst_32913__$1 == null);
var inst_32915 = cljs.core.not(inst_32914);
var state_32949__$1 = (function (){var statearr_32954 = state_32949;
(statearr_32954[(9)] = inst_32913__$1);

return statearr_32954;
})();
if(inst_32915){
var statearr_32955_34196 = state_32949__$1;
(statearr_32955_34196[(1)] = (5));

} else {
var statearr_32956_34197 = state_32949__$1;
(statearr_32956_34197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (15))){
var inst_32939 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32957_34201 = state_32949__$1;
(statearr_32957_34201[(2)] = inst_32939);

(statearr_32957_34201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (13))){
var state_32949__$1 = state_32949;
var statearr_32958_34202 = state_32949__$1;
(statearr_32958_34202[(2)] = null);

(statearr_32958_34202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (6))){
var inst_32909 = (state_32949[(7)]);
var inst_32934 = inst_32909.length;
var inst_32935 = (inst_32934 > (0));
var state_32949__$1 = state_32949;
if(cljs.core.truth_(inst_32935)){
var statearr_32959_34206 = state_32949__$1;
(statearr_32959_34206[(1)] = (12));

} else {
var statearr_32960_34207 = state_32949__$1;
(statearr_32960_34207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (3))){
var inst_32947 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32949__$1,inst_32947);
} else {
if((state_val_32950 === (12))){
var inst_32909 = (state_32949[(7)]);
var inst_32937 = cljs.core.vec(inst_32909);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32949__$1,(15),out,inst_32937);
} else {
if((state_val_32950 === (2))){
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32949__$1,(4),ch);
} else {
if((state_val_32950 === (11))){
var inst_32917 = (state_32949[(10)]);
var inst_32913 = (state_32949[(9)]);
var inst_32927 = (state_32949[(2)]);
var inst_32928 = [];
var inst_32929 = inst_32928.push(inst_32913);
var inst_32909 = inst_32928;
var inst_32910 = inst_32917;
var state_32949__$1 = (function (){var statearr_32961 = state_32949;
(statearr_32961[(11)] = inst_32929);

(statearr_32961[(7)] = inst_32909);

(statearr_32961[(8)] = inst_32910);

(statearr_32961[(12)] = inst_32927);

return statearr_32961;
})();
var statearr_32962_34208 = state_32949__$1;
(statearr_32962_34208[(2)] = null);

(statearr_32962_34208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (9))){
var inst_32909 = (state_32949[(7)]);
var inst_32925 = cljs.core.vec(inst_32909);
var state_32949__$1 = state_32949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32949__$1,(11),out,inst_32925);
} else {
if((state_val_32950 === (5))){
var inst_32917 = (state_32949[(10)]);
var inst_32913 = (state_32949[(9)]);
var inst_32910 = (state_32949[(8)]);
var inst_32917__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32913) : f.call(null,inst_32913));
var inst_32918 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32917__$1,inst_32910);
var inst_32919 = cljs.core.keyword_identical_QMARK_(inst_32910,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32920 = ((inst_32918) || (inst_32919));
var state_32949__$1 = (function (){var statearr_32963 = state_32949;
(statearr_32963[(10)] = inst_32917__$1);

return statearr_32963;
})();
if(cljs.core.truth_(inst_32920)){
var statearr_32964_34225 = state_32949__$1;
(statearr_32964_34225[(1)] = (8));

} else {
var statearr_32965_34226 = state_32949__$1;
(statearr_32965_34226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (14))){
var inst_32942 = (state_32949[(2)]);
var inst_32943 = cljs.core.async.close_BANG_(out);
var state_32949__$1 = (function (){var statearr_32967 = state_32949;
(statearr_32967[(13)] = inst_32942);

return statearr_32967;
})();
var statearr_32968_34231 = state_32949__$1;
(statearr_32968_34231[(2)] = inst_32943);

(statearr_32968_34231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (10))){
var inst_32932 = (state_32949[(2)]);
var state_32949__$1 = state_32949;
var statearr_32969_34232 = state_32949__$1;
(statearr_32969_34232[(2)] = inst_32932);

(statearr_32969_34232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32950 === (8))){
var inst_32917 = (state_32949[(10)]);
var inst_32913 = (state_32949[(9)]);
var inst_32909 = (state_32949[(7)]);
var inst_32922 = inst_32909.push(inst_32913);
var tmp32966 = inst_32909;
var inst_32909__$1 = tmp32966;
var inst_32910 = inst_32917;
var state_32949__$1 = (function (){var statearr_32970 = state_32949;
(statearr_32970[(14)] = inst_32922);

(statearr_32970[(7)] = inst_32909__$1);

(statearr_32970[(8)] = inst_32910);

return statearr_32970;
})();
var statearr_32971_34233 = state_32949__$1;
(statearr_32971_34233[(2)] = null);

(statearr_32971_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30929__auto___34147,out))
;
return ((function (switch__30708__auto__,c__30929__auto___34147,out){
return (function() {
var cljs$core$async$state_machine__30709__auto__ = null;
var cljs$core$async$state_machine__30709__auto____0 = (function (){
var statearr_32972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32972[(0)] = cljs$core$async$state_machine__30709__auto__);

(statearr_32972[(1)] = (1));

return statearr_32972;
});
var cljs$core$async$state_machine__30709__auto____1 = (function (state_32949){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_32949);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e32973){if((e32973 instanceof Object)){
var ex__30712__auto__ = e32973;
var statearr_32974_34234 = state_32949;
(statearr_32974_34234[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_32949;
state_32949 = G__34235;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
cljs$core$async$state_machine__30709__auto__ = function(state_32949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30709__auto____1.call(this,state_32949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30709__auto____0;
cljs$core$async$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30709__auto____1;
return cljs$core$async$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___34147,out))
})();
var state__30931__auto__ = (function (){var statearr_32975 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_32975[(6)] = c__30929__auto___34147);

return statearr_32975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___34147,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
