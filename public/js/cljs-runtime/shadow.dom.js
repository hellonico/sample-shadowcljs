goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32996 = coll;
var G__32997 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32996,G__32997) : shadow.dom.lazy_native_coll_seq.call(null,G__32996,G__32997));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33004 = arguments.length;
switch (G__33004) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33006 = arguments.length;
switch (G__33006) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33008 = arguments.length;
switch (G__33008) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33010 = arguments.length;
switch (G__33010) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33012 = arguments.length;
switch (G__33012) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33014 = document;
var G__33015 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33014,G__33015);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33016 = shadow.dom.dom_node(parent);
var G__33017 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33016,G__33017);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33018 = shadow.dom.dom_node(el);
var G__33019 = cls;
return goog.dom.classlist.add(G__33018,G__33019);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33020 = shadow.dom.dom_node(el);
var G__33021 = cls;
return goog.dom.classlist.remove(G__33020,G__33021);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33023 = arguments.length;
switch (G__33023) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33024 = shadow.dom.dom_node(el);
var G__33025 = cls;
return goog.dom.classlist.toggle(G__33024,G__33025);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33029){if((e33029 instanceof Object)){
var e = e33029;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33029;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33030 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33031 = null;
var count__33032 = (0);
var i__33033 = (0);
while(true){
if((i__33033 < count__33032)){
var el = chunk__33031.cljs$core$IIndexed$_nth$arity$2(null,i__33033);
var handler_33645__$1 = ((function (seq__33030,chunk__33031,count__33032,i__33033,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33030,chunk__33031,count__33032,i__33033,el))
;
var G__33041_33647 = el;
var G__33042_33648 = cljs.core.name(ev);
var G__33043_33649 = handler_33645__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33041_33647,G__33042_33648,G__33043_33649) : shadow.dom.dom_listen.call(null,G__33041_33647,G__33042_33648,G__33043_33649));


var G__33650 = seq__33030;
var G__33651 = chunk__33031;
var G__33652 = count__33032;
var G__33653 = (i__33033 + (1));
seq__33030 = G__33650;
chunk__33031 = G__33651;
count__33032 = G__33652;
i__33033 = G__33653;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33030);
if(temp__5720__auto__){
var seq__33030__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33030__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33030__$1);
var G__33654 = cljs.core.chunk_rest(seq__33030__$1);
var G__33655 = c__4550__auto__;
var G__33656 = cljs.core.count(c__4550__auto__);
var G__33657 = (0);
seq__33030 = G__33654;
chunk__33031 = G__33655;
count__33032 = G__33656;
i__33033 = G__33657;
continue;
} else {
var el = cljs.core.first(seq__33030__$1);
var handler_33658__$1 = ((function (seq__33030,chunk__33031,count__33032,i__33033,el,seq__33030__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33030,chunk__33031,count__33032,i__33033,el,seq__33030__$1,temp__5720__auto__))
;
var G__33044_33659 = el;
var G__33045_33660 = cljs.core.name(ev);
var G__33046_33661 = handler_33658__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33044_33659,G__33045_33660,G__33046_33661) : shadow.dom.dom_listen.call(null,G__33044_33659,G__33045_33660,G__33046_33661));


var G__33662 = cljs.core.next(seq__33030__$1);
var G__33663 = null;
var G__33664 = (0);
var G__33665 = (0);
seq__33030 = G__33662;
chunk__33031 = G__33663;
count__33032 = G__33664;
i__33033 = G__33665;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33048 = arguments.length;
switch (G__33048) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33049 = shadow.dom.dom_node(el);
var G__33050 = cljs.core.name(ev);
var G__33051 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33049,G__33050,G__33051) : shadow.dom.dom_listen.call(null,G__33049,G__33050,G__33051));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33052 = shadow.dom.dom_node(el);
var G__33053 = cljs.core.name(ev);
var G__33054 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33052,G__33053,G__33054) : shadow.dom.dom_listen_remove.call(null,G__33052,G__33053,G__33054));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33056 = cljs.core.seq(events);
var chunk__33057 = null;
var count__33058 = (0);
var i__33059 = (0);
while(true){
if((i__33059 < count__33058)){
var vec__33070 = chunk__33057.cljs$core$IIndexed$_nth$arity$2(null,i__33059);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33070,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33680 = seq__33056;
var G__33681 = chunk__33057;
var G__33682 = count__33058;
var G__33683 = (i__33059 + (1));
seq__33056 = G__33680;
chunk__33057 = G__33681;
count__33058 = G__33682;
i__33059 = G__33683;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33056);
if(temp__5720__auto__){
var seq__33056__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33056__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33056__$1);
var G__33684 = cljs.core.chunk_rest(seq__33056__$1);
var G__33685 = c__4550__auto__;
var G__33686 = cljs.core.count(c__4550__auto__);
var G__33687 = (0);
seq__33056 = G__33684;
chunk__33057 = G__33685;
count__33058 = G__33686;
i__33059 = G__33687;
continue;
} else {
var vec__33074 = cljs.core.first(seq__33056__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33688 = cljs.core.next(seq__33056__$1);
var G__33689 = null;
var G__33690 = (0);
var G__33691 = (0);
seq__33056 = G__33688;
chunk__33057 = G__33689;
count__33058 = G__33690;
i__33059 = G__33691;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33081 = cljs.core.seq(styles);
var chunk__33082 = null;
var count__33083 = (0);
var i__33084 = (0);
while(true){
if((i__33084 < count__33083)){
var vec__33098 = chunk__33082.cljs$core$IIndexed$_nth$arity$2(null,i__33084);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33098,(1),null);
var G__33101_33692 = dom;
var G__33102_33693 = cljs.core.name(k);
var G__33103_33694 = (((v == null))?"":v);
goog.style.setStyle(G__33101_33692,G__33102_33693,G__33103_33694);


var G__33695 = seq__33081;
var G__33696 = chunk__33082;
var G__33697 = count__33083;
var G__33698 = (i__33084 + (1));
seq__33081 = G__33695;
chunk__33082 = G__33696;
count__33083 = G__33697;
i__33084 = G__33698;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33081);
if(temp__5720__auto__){
var seq__33081__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33081__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33081__$1);
var G__33707 = cljs.core.chunk_rest(seq__33081__$1);
var G__33708 = c__4550__auto__;
var G__33709 = cljs.core.count(c__4550__auto__);
var G__33710 = (0);
seq__33081 = G__33707;
chunk__33082 = G__33708;
count__33083 = G__33709;
i__33084 = G__33710;
continue;
} else {
var vec__33104 = cljs.core.first(seq__33081__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33104,(1),null);
var G__33107_33711 = dom;
var G__33108_33712 = cljs.core.name(k);
var G__33109_33713 = (((v == null))?"":v);
goog.style.setStyle(G__33107_33711,G__33108_33712,G__33109_33713);


var G__33715 = cljs.core.next(seq__33081__$1);
var G__33716 = null;
var G__33717 = (0);
var G__33718 = (0);
seq__33081 = G__33715;
chunk__33082 = G__33716;
count__33083 = G__33717;
i__33084 = G__33718;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33110_33719 = key;
var G__33110_33720__$1 = (((G__33110_33719 instanceof cljs.core.Keyword))?G__33110_33719.fqn:null);
switch (G__33110_33720__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33726 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33726,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33726,"aria-");
}
})())){
el.setAttribute(ks_33726,value);
} else {
(el[ks_33726] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33120 = shadow.dom.dom_node(el);
var G__33121 = cls;
return goog.dom.classlist.contains(G__33120,G__33121);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33127){
var map__33128 = p__33127;
var map__33128__$1 = (((((!((map__33128 == null))))?(((((map__33128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33128):map__33128);
var props = map__33128__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33128__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33137 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33142 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33142,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33142;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33147 = arguments.length;
switch (G__33147) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33149){
var vec__33158 = p__33149;
var seq__33159 = cljs.core.seq(vec__33158);
var first__33160 = cljs.core.first(seq__33159);
var seq__33159__$1 = cljs.core.next(seq__33159);
var nn = first__33160;
var first__33160__$1 = cljs.core.first(seq__33159__$1);
var seq__33159__$2 = cljs.core.next(seq__33159__$1);
var np = first__33160__$1;
var nc = seq__33159__$2;
var node = vec__33158;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33161 = nn;
var G__33162 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33161,G__33162) : create_fn.call(null,G__33161,G__33162));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33163 = nn;
var G__33164 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33163,G__33164) : create_fn.call(null,G__33163,G__33164));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33165 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33165,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33165,(1),null);
var seq__33168_33758 = cljs.core.seq(node_children);
var chunk__33169_33759 = null;
var count__33170_33760 = (0);
var i__33171_33761 = (0);
while(true){
if((i__33171_33761 < count__33170_33760)){
var child_struct_33763 = chunk__33169_33759.cljs$core$IIndexed$_nth$arity$2(null,i__33171_33761);
var children_33764 = shadow.dom.dom_node(child_struct_33763);
if(cljs.core.seq_QMARK_(children_33764)){
var seq__33198_33766 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33764));
var chunk__33200_33767 = null;
var count__33201_33768 = (0);
var i__33202_33769 = (0);
while(true){
if((i__33202_33769 < count__33201_33768)){
var child_33780 = chunk__33200_33767.cljs$core$IIndexed$_nth$arity$2(null,i__33202_33769);
if(cljs.core.truth_(child_33780)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33780);


var G__33781 = seq__33198_33766;
var G__33782 = chunk__33200_33767;
var G__33783 = count__33201_33768;
var G__33784 = (i__33202_33769 + (1));
seq__33198_33766 = G__33781;
chunk__33200_33767 = G__33782;
count__33201_33768 = G__33783;
i__33202_33769 = G__33784;
continue;
} else {
var G__33786 = seq__33198_33766;
var G__33787 = chunk__33200_33767;
var G__33788 = count__33201_33768;
var G__33789 = (i__33202_33769 + (1));
seq__33198_33766 = G__33786;
chunk__33200_33767 = G__33787;
count__33201_33768 = G__33788;
i__33202_33769 = G__33789;
continue;
}
} else {
var temp__5720__auto___33790 = cljs.core.seq(seq__33198_33766);
if(temp__5720__auto___33790){
var seq__33198_33791__$1 = temp__5720__auto___33790;
if(cljs.core.chunked_seq_QMARK_(seq__33198_33791__$1)){
var c__4550__auto___33792 = cljs.core.chunk_first(seq__33198_33791__$1);
var G__33793 = cljs.core.chunk_rest(seq__33198_33791__$1);
var G__33794 = c__4550__auto___33792;
var G__33795 = cljs.core.count(c__4550__auto___33792);
var G__33796 = (0);
seq__33198_33766 = G__33793;
chunk__33200_33767 = G__33794;
count__33201_33768 = G__33795;
i__33202_33769 = G__33796;
continue;
} else {
var child_33797 = cljs.core.first(seq__33198_33791__$1);
if(cljs.core.truth_(child_33797)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33797);


var G__33798 = cljs.core.next(seq__33198_33791__$1);
var G__33799 = null;
var G__33800 = (0);
var G__33801 = (0);
seq__33198_33766 = G__33798;
chunk__33200_33767 = G__33799;
count__33201_33768 = G__33800;
i__33202_33769 = G__33801;
continue;
} else {
var G__33802 = cljs.core.next(seq__33198_33791__$1);
var G__33803 = null;
var G__33804 = (0);
var G__33805 = (0);
seq__33198_33766 = G__33802;
chunk__33200_33767 = G__33803;
count__33201_33768 = G__33804;
i__33202_33769 = G__33805;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33764);
}


var G__33806 = seq__33168_33758;
var G__33807 = chunk__33169_33759;
var G__33808 = count__33170_33760;
var G__33809 = (i__33171_33761 + (1));
seq__33168_33758 = G__33806;
chunk__33169_33759 = G__33807;
count__33170_33760 = G__33808;
i__33171_33761 = G__33809;
continue;
} else {
var temp__5720__auto___33810 = cljs.core.seq(seq__33168_33758);
if(temp__5720__auto___33810){
var seq__33168_33811__$1 = temp__5720__auto___33810;
if(cljs.core.chunked_seq_QMARK_(seq__33168_33811__$1)){
var c__4550__auto___33812 = cljs.core.chunk_first(seq__33168_33811__$1);
var G__33813 = cljs.core.chunk_rest(seq__33168_33811__$1);
var G__33814 = c__4550__auto___33812;
var G__33815 = cljs.core.count(c__4550__auto___33812);
var G__33816 = (0);
seq__33168_33758 = G__33813;
chunk__33169_33759 = G__33814;
count__33170_33760 = G__33815;
i__33171_33761 = G__33816;
continue;
} else {
var child_struct_33817 = cljs.core.first(seq__33168_33811__$1);
var children_33818 = shadow.dom.dom_node(child_struct_33817);
if(cljs.core.seq_QMARK_(children_33818)){
var seq__33212_33819 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33818));
var chunk__33214_33820 = null;
var count__33215_33821 = (0);
var i__33216_33822 = (0);
while(true){
if((i__33216_33822 < count__33215_33821)){
var child_33823 = chunk__33214_33820.cljs$core$IIndexed$_nth$arity$2(null,i__33216_33822);
if(cljs.core.truth_(child_33823)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33823);


var G__33824 = seq__33212_33819;
var G__33825 = chunk__33214_33820;
var G__33826 = count__33215_33821;
var G__33827 = (i__33216_33822 + (1));
seq__33212_33819 = G__33824;
chunk__33214_33820 = G__33825;
count__33215_33821 = G__33826;
i__33216_33822 = G__33827;
continue;
} else {
var G__33828 = seq__33212_33819;
var G__33829 = chunk__33214_33820;
var G__33830 = count__33215_33821;
var G__33831 = (i__33216_33822 + (1));
seq__33212_33819 = G__33828;
chunk__33214_33820 = G__33829;
count__33215_33821 = G__33830;
i__33216_33822 = G__33831;
continue;
}
} else {
var temp__5720__auto___33832__$1 = cljs.core.seq(seq__33212_33819);
if(temp__5720__auto___33832__$1){
var seq__33212_33833__$1 = temp__5720__auto___33832__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33212_33833__$1)){
var c__4550__auto___33834 = cljs.core.chunk_first(seq__33212_33833__$1);
var G__33835 = cljs.core.chunk_rest(seq__33212_33833__$1);
var G__33836 = c__4550__auto___33834;
var G__33837 = cljs.core.count(c__4550__auto___33834);
var G__33838 = (0);
seq__33212_33819 = G__33835;
chunk__33214_33820 = G__33836;
count__33215_33821 = G__33837;
i__33216_33822 = G__33838;
continue;
} else {
var child_33839 = cljs.core.first(seq__33212_33833__$1);
if(cljs.core.truth_(child_33839)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33839);


var G__33840 = cljs.core.next(seq__33212_33833__$1);
var G__33841 = null;
var G__33842 = (0);
var G__33843 = (0);
seq__33212_33819 = G__33840;
chunk__33214_33820 = G__33841;
count__33215_33821 = G__33842;
i__33216_33822 = G__33843;
continue;
} else {
var G__33844 = cljs.core.next(seq__33212_33833__$1);
var G__33845 = null;
var G__33846 = (0);
var G__33847 = (0);
seq__33212_33819 = G__33844;
chunk__33214_33820 = G__33845;
count__33215_33821 = G__33846;
i__33216_33822 = G__33847;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33818);
}


var G__33848 = cljs.core.next(seq__33168_33811__$1);
var G__33849 = null;
var G__33850 = (0);
var G__33851 = (0);
seq__33168_33758 = G__33848;
chunk__33169_33759 = G__33849;
count__33170_33760 = G__33850;
i__33171_33761 = G__33851;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33230 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33230);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33232 = cljs.core.seq(node);
var chunk__33233 = null;
var count__33234 = (0);
var i__33235 = (0);
while(true){
if((i__33235 < count__33234)){
var n = chunk__33233.cljs$core$IIndexed$_nth$arity$2(null,i__33235);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33857 = seq__33232;
var G__33858 = chunk__33233;
var G__33859 = count__33234;
var G__33860 = (i__33235 + (1));
seq__33232 = G__33857;
chunk__33233 = G__33858;
count__33234 = G__33859;
i__33235 = G__33860;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33232);
if(temp__5720__auto__){
var seq__33232__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33232__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33232__$1);
var G__33861 = cljs.core.chunk_rest(seq__33232__$1);
var G__33862 = c__4550__auto__;
var G__33863 = cljs.core.count(c__4550__auto__);
var G__33864 = (0);
seq__33232 = G__33861;
chunk__33233 = G__33862;
count__33234 = G__33863;
i__33235 = G__33864;
continue;
} else {
var n = cljs.core.first(seq__33232__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33865 = cljs.core.next(seq__33232__$1);
var G__33866 = null;
var G__33867 = (0);
var G__33868 = (0);
seq__33232 = G__33865;
chunk__33233 = G__33866;
count__33234 = G__33867;
i__33235 = G__33868;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33239 = shadow.dom.dom_node(new$);
var G__33240 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33239,G__33240);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33245 = arguments.length;
switch (G__33245) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33254 = arguments.length;
switch (G__33254) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33261 = arguments.length;
switch (G__33261) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33886 = arguments.length;
var i__4731__auto___33887 = (0);
while(true){
if((i__4731__auto___33887 < len__4730__auto___33886)){
args__4736__auto__.push((arguments[i__4731__auto___33887]));

var G__33888 = (i__4731__auto___33887 + (1));
i__4731__auto___33887 = G__33888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33275_33889 = cljs.core.seq(nodes);
var chunk__33276_33890 = null;
var count__33277_33891 = (0);
var i__33278_33892 = (0);
while(true){
if((i__33278_33892 < count__33277_33891)){
var node_33893 = chunk__33276_33890.cljs$core$IIndexed$_nth$arity$2(null,i__33278_33892);
fragment.appendChild(shadow.dom._to_dom(node_33893));


var G__33894 = seq__33275_33889;
var G__33895 = chunk__33276_33890;
var G__33896 = count__33277_33891;
var G__33897 = (i__33278_33892 + (1));
seq__33275_33889 = G__33894;
chunk__33276_33890 = G__33895;
count__33277_33891 = G__33896;
i__33278_33892 = G__33897;
continue;
} else {
var temp__5720__auto___33898 = cljs.core.seq(seq__33275_33889);
if(temp__5720__auto___33898){
var seq__33275_33899__$1 = temp__5720__auto___33898;
if(cljs.core.chunked_seq_QMARK_(seq__33275_33899__$1)){
var c__4550__auto___33900 = cljs.core.chunk_first(seq__33275_33899__$1);
var G__33901 = cljs.core.chunk_rest(seq__33275_33899__$1);
var G__33902 = c__4550__auto___33900;
var G__33903 = cljs.core.count(c__4550__auto___33900);
var G__33904 = (0);
seq__33275_33889 = G__33901;
chunk__33276_33890 = G__33902;
count__33277_33891 = G__33903;
i__33278_33892 = G__33904;
continue;
} else {
var node_33907 = cljs.core.first(seq__33275_33899__$1);
fragment.appendChild(shadow.dom._to_dom(node_33907));


var G__33908 = cljs.core.next(seq__33275_33899__$1);
var G__33909 = null;
var G__33910 = (0);
var G__33911 = (0);
seq__33275_33889 = G__33908;
chunk__33276_33890 = G__33909;
count__33277_33891 = G__33910;
i__33278_33892 = G__33911;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33270){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33270));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33284_33914 = cljs.core.seq(scripts);
var chunk__33285_33915 = null;
var count__33286_33916 = (0);
var i__33287_33917 = (0);
while(true){
if((i__33287_33917 < count__33286_33916)){
var vec__33294_33918 = chunk__33285_33915.cljs$core$IIndexed$_nth$arity$2(null,i__33287_33917);
var script_tag_33919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33294_33918,(0),null);
var script_body_33920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33294_33918,(1),null);
eval(script_body_33920);


var G__33923 = seq__33284_33914;
var G__33924 = chunk__33285_33915;
var G__33925 = count__33286_33916;
var G__33926 = (i__33287_33917 + (1));
seq__33284_33914 = G__33923;
chunk__33285_33915 = G__33924;
count__33286_33916 = G__33925;
i__33287_33917 = G__33926;
continue;
} else {
var temp__5720__auto___33927 = cljs.core.seq(seq__33284_33914);
if(temp__5720__auto___33927){
var seq__33284_33928__$1 = temp__5720__auto___33927;
if(cljs.core.chunked_seq_QMARK_(seq__33284_33928__$1)){
var c__4550__auto___33929 = cljs.core.chunk_first(seq__33284_33928__$1);
var G__33931 = cljs.core.chunk_rest(seq__33284_33928__$1);
var G__33932 = c__4550__auto___33929;
var G__33933 = cljs.core.count(c__4550__auto___33929);
var G__33934 = (0);
seq__33284_33914 = G__33931;
chunk__33285_33915 = G__33932;
count__33286_33916 = G__33933;
i__33287_33917 = G__33934;
continue;
} else {
var vec__33311_33939 = cljs.core.first(seq__33284_33928__$1);
var script_tag_33940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33311_33939,(0),null);
var script_body_33941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33311_33939,(1),null);
eval(script_body_33941);


var G__33942 = cljs.core.next(seq__33284_33928__$1);
var G__33943 = null;
var G__33944 = (0);
var G__33945 = (0);
seq__33284_33914 = G__33942;
chunk__33285_33915 = G__33943;
count__33286_33916 = G__33944;
i__33287_33917 = G__33945;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33314){
var vec__33315 = p__33314;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33315,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33315,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33318 = shadow.dom.dom_node(el);
var G__33319 = cls;
return goog.dom.getAncestorByClass(G__33318,G__33319);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33323 = arguments.length;
switch (G__33323) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33324 = shadow.dom.dom_node(el);
var G__33325 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33324,G__33325);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33326 = shadow.dom.dom_node(el);
var G__33327 = cljs.core.name(tag);
var G__33328 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33326,G__33327,G__33328);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33329 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33329);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33330 = shadow.dom.dom_node(dom);
var G__33331 = value;
return goog.dom.forms.setValue(G__33330,G__33331);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33332 = cljs.core.seq(style_keys);
var chunk__33333 = null;
var count__33334 = (0);
var i__33335 = (0);
while(true){
if((i__33335 < count__33334)){
var it = chunk__33333.cljs$core$IIndexed$_nth$arity$2(null,i__33335);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33951 = seq__33332;
var G__33952 = chunk__33333;
var G__33953 = count__33334;
var G__33954 = (i__33335 + (1));
seq__33332 = G__33951;
chunk__33333 = G__33952;
count__33334 = G__33953;
i__33335 = G__33954;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33332);
if(temp__5720__auto__){
var seq__33332__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33332__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33332__$1);
var G__33958 = cljs.core.chunk_rest(seq__33332__$1);
var G__33959 = c__4550__auto__;
var G__33960 = cljs.core.count(c__4550__auto__);
var G__33961 = (0);
seq__33332 = G__33958;
chunk__33333 = G__33959;
count__33334 = G__33960;
i__33335 = G__33961;
continue;
} else {
var it = cljs.core.first(seq__33332__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33962 = cljs.core.next(seq__33332__$1);
var G__33963 = null;
var G__33964 = (0);
var G__33965 = (0);
seq__33332 = G__33962;
chunk__33333 = G__33963;
count__33334 = G__33964;
i__33335 = G__33965;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33344,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33350 = k33344;
var G__33350__$1 = (((G__33350 instanceof cljs.core.Keyword))?G__33350.fqn:null);
switch (G__33350__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33344,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33351){
var vec__33352 = p__33351;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33343){
var self__ = this;
var G__33343__$1 = this;
return (new cljs.core.RecordIter((0),G__33343__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33362 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33362(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33345,other33346){
var self__ = this;
var this33345__$1 = this;
return (((!((other33346 == null)))) && ((this33345__$1.constructor === other33346.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33345__$1.x,other33346.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33345__$1.y,other33346.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33345__$1.__extmap,other33346.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33343){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33369 = cljs.core.keyword_identical_QMARK_;
var expr__33370 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33373 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33374 = expr__33370;
return (pred__33369.cljs$core$IFn$_invoke$arity$2 ? pred__33369.cljs$core$IFn$_invoke$arity$2(G__33373,G__33374) : pred__33369.call(null,G__33373,G__33374));
})())){
return (new shadow.dom.Coordinate(G__33343,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33376 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33377 = expr__33370;
return (pred__33369.cljs$core$IFn$_invoke$arity$2 ? pred__33369.cljs$core$IFn$_invoke$arity$2(G__33376,G__33377) : pred__33369.call(null,G__33376,G__33377));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33343,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33343),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33343){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33343,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33348){
var extmap__4424__auto__ = (function (){var G__33390 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33348,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33348)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33390);
} else {
return G__33390;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33348),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33348),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33394 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33394);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33395 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33395);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33397 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33397);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33400,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33412 = k33400;
var G__33412__$1 = (((G__33412 instanceof cljs.core.Keyword))?G__33412.fqn:null);
switch (G__33412__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33400,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33415){
var vec__33416 = p__33415;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33399){
var self__ = this;
var G__33399__$1 = this;
return (new cljs.core.RecordIter((0),G__33399__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33425 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33425(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33402,other33403){
var self__ = this;
var this33402__$1 = this;
return (((!((other33403 == null)))) && ((this33402__$1.constructor === other33403.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33402__$1.w,other33403.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33402__$1.h,other33403.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33402__$1.__extmap,other33403.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33399){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33427 = cljs.core.keyword_identical_QMARK_;
var expr__33428 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33430 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33431 = expr__33428;
return (pred__33427.cljs$core$IFn$_invoke$arity$2 ? pred__33427.cljs$core$IFn$_invoke$arity$2(G__33430,G__33431) : pred__33427.call(null,G__33430,G__33431));
})())){
return (new shadow.dom.Size(G__33399,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33432 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33433 = expr__33428;
return (pred__33427.cljs$core$IFn$_invoke$arity$2 ? pred__33427.cljs$core$IFn$_invoke$arity$2(G__33432,G__33433) : pred__33427.call(null,G__33432,G__33433));
})())){
return (new shadow.dom.Size(self__.w,G__33399,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33399),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33399){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33399,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33404){
var extmap__4424__auto__ = (function (){var G__33434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33404,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33404)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33434);
} else {
return G__33434;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33404),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33404),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33439 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33439);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34009 = (i + (1));
var G__34010 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34009;
ret = G__34010;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33446){
var vec__33447 = p__33446;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33451 = arguments.length;
switch (G__33451) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33452_34019 = new_node;
var G__33453_34020 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33452_34019,G__33453_34020);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33454_34021 = new_node;
var G__33455_34022 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33454_34021,G__33455_34022);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34023 = ps;
var G__34024 = (i + (1));
el__$1 = G__34023;
i = G__34024;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33460 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33460);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33463 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33463);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33464 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33464);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33467 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33467,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33467,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33467,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33473_34030 = cljs.core.seq(props);
var chunk__33474_34031 = null;
var count__33475_34032 = (0);
var i__33476_34033 = (0);
while(true){
if((i__33476_34033 < count__33475_34032)){
var vec__33497_34034 = chunk__33474_34031.cljs$core$IIndexed$_nth$arity$2(null,i__33476_34033);
var k_34035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497_34034,(0),null);
var v_34036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497_34034,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34035);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34035),v_34036);


var G__34037 = seq__33473_34030;
var G__34038 = chunk__33474_34031;
var G__34039 = count__33475_34032;
var G__34040 = (i__33476_34033 + (1));
seq__33473_34030 = G__34037;
chunk__33474_34031 = G__34038;
count__33475_34032 = G__34039;
i__33476_34033 = G__34040;
continue;
} else {
var temp__5720__auto___34041 = cljs.core.seq(seq__33473_34030);
if(temp__5720__auto___34041){
var seq__33473_34042__$1 = temp__5720__auto___34041;
if(cljs.core.chunked_seq_QMARK_(seq__33473_34042__$1)){
var c__4550__auto___34043 = cljs.core.chunk_first(seq__33473_34042__$1);
var G__34044 = cljs.core.chunk_rest(seq__33473_34042__$1);
var G__34045 = c__4550__auto___34043;
var G__34046 = cljs.core.count(c__4550__auto___34043);
var G__34047 = (0);
seq__33473_34030 = G__34044;
chunk__33474_34031 = G__34045;
count__33475_34032 = G__34046;
i__33476_34033 = G__34047;
continue;
} else {
var vec__33502_34048 = cljs.core.first(seq__33473_34042__$1);
var k_34049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33502_34048,(0),null);
var v_34050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33502_34048,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34049);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34049),v_34050);


var G__34051 = cljs.core.next(seq__33473_34042__$1);
var G__34052 = null;
var G__34053 = (0);
var G__34054 = (0);
seq__33473_34030 = G__34051;
chunk__33474_34031 = G__34052;
count__33475_34032 = G__34053;
i__33476_34033 = G__34054;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33510 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510,(1),null);
var seq__33513_34055 = cljs.core.seq(node_children);
var chunk__33515_34056 = null;
var count__33516_34057 = (0);
var i__33517_34058 = (0);
while(true){
if((i__33517_34058 < count__33516_34057)){
var child_struct_34061 = chunk__33515_34056.cljs$core$IIndexed$_nth$arity$2(null,i__33517_34058);
if((!((child_struct_34061 == null)))){
if(typeof child_struct_34061 === 'string'){
var text_34062 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34062),child_struct_34061].join(''));
} else {
var children_34063 = shadow.dom.svg_node(child_struct_34061);
if(cljs.core.seq_QMARK_(children_34063)){
var seq__33549_34064 = cljs.core.seq(children_34063);
var chunk__33551_34065 = null;
var count__33552_34066 = (0);
var i__33553_34067 = (0);
while(true){
if((i__33553_34067 < count__33552_34066)){
var child_34068 = chunk__33551_34065.cljs$core$IIndexed$_nth$arity$2(null,i__33553_34067);
if(cljs.core.truth_(child_34068)){
node.appendChild(child_34068);


var G__34069 = seq__33549_34064;
var G__34070 = chunk__33551_34065;
var G__34071 = count__33552_34066;
var G__34072 = (i__33553_34067 + (1));
seq__33549_34064 = G__34069;
chunk__33551_34065 = G__34070;
count__33552_34066 = G__34071;
i__33553_34067 = G__34072;
continue;
} else {
var G__34074 = seq__33549_34064;
var G__34075 = chunk__33551_34065;
var G__34076 = count__33552_34066;
var G__34077 = (i__33553_34067 + (1));
seq__33549_34064 = G__34074;
chunk__33551_34065 = G__34075;
count__33552_34066 = G__34076;
i__33553_34067 = G__34077;
continue;
}
} else {
var temp__5720__auto___34078 = cljs.core.seq(seq__33549_34064);
if(temp__5720__auto___34078){
var seq__33549_34079__$1 = temp__5720__auto___34078;
if(cljs.core.chunked_seq_QMARK_(seq__33549_34079__$1)){
var c__4550__auto___34080 = cljs.core.chunk_first(seq__33549_34079__$1);
var G__34081 = cljs.core.chunk_rest(seq__33549_34079__$1);
var G__34082 = c__4550__auto___34080;
var G__34083 = cljs.core.count(c__4550__auto___34080);
var G__34084 = (0);
seq__33549_34064 = G__34081;
chunk__33551_34065 = G__34082;
count__33552_34066 = G__34083;
i__33553_34067 = G__34084;
continue;
} else {
var child_34088 = cljs.core.first(seq__33549_34079__$1);
if(cljs.core.truth_(child_34088)){
node.appendChild(child_34088);


var G__34089 = cljs.core.next(seq__33549_34079__$1);
var G__34090 = null;
var G__34091 = (0);
var G__34092 = (0);
seq__33549_34064 = G__34089;
chunk__33551_34065 = G__34090;
count__33552_34066 = G__34091;
i__33553_34067 = G__34092;
continue;
} else {
var G__34094 = cljs.core.next(seq__33549_34079__$1);
var G__34095 = null;
var G__34096 = (0);
var G__34097 = (0);
seq__33549_34064 = G__34094;
chunk__33551_34065 = G__34095;
count__33552_34066 = G__34096;
i__33553_34067 = G__34097;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34063);
}
}


var G__34102 = seq__33513_34055;
var G__34103 = chunk__33515_34056;
var G__34104 = count__33516_34057;
var G__34105 = (i__33517_34058 + (1));
seq__33513_34055 = G__34102;
chunk__33515_34056 = G__34103;
count__33516_34057 = G__34104;
i__33517_34058 = G__34105;
continue;
} else {
var G__34106 = seq__33513_34055;
var G__34107 = chunk__33515_34056;
var G__34108 = count__33516_34057;
var G__34109 = (i__33517_34058 + (1));
seq__33513_34055 = G__34106;
chunk__33515_34056 = G__34107;
count__33516_34057 = G__34108;
i__33517_34058 = G__34109;
continue;
}
} else {
var temp__5720__auto___34113 = cljs.core.seq(seq__33513_34055);
if(temp__5720__auto___34113){
var seq__33513_34115__$1 = temp__5720__auto___34113;
if(cljs.core.chunked_seq_QMARK_(seq__33513_34115__$1)){
var c__4550__auto___34116 = cljs.core.chunk_first(seq__33513_34115__$1);
var G__34117 = cljs.core.chunk_rest(seq__33513_34115__$1);
var G__34118 = c__4550__auto___34116;
var G__34119 = cljs.core.count(c__4550__auto___34116);
var G__34120 = (0);
seq__33513_34055 = G__34117;
chunk__33515_34056 = G__34118;
count__33516_34057 = G__34119;
i__33517_34058 = G__34120;
continue;
} else {
var child_struct_34122 = cljs.core.first(seq__33513_34115__$1);
if((!((child_struct_34122 == null)))){
if(typeof child_struct_34122 === 'string'){
var text_34126 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34126),child_struct_34122].join(''));
} else {
var children_34127 = shadow.dom.svg_node(child_struct_34122);
if(cljs.core.seq_QMARK_(children_34127)){
var seq__33556_34129 = cljs.core.seq(children_34127);
var chunk__33558_34130 = null;
var count__33559_34131 = (0);
var i__33560_34132 = (0);
while(true){
if((i__33560_34132 < count__33559_34131)){
var child_34133 = chunk__33558_34130.cljs$core$IIndexed$_nth$arity$2(null,i__33560_34132);
if(cljs.core.truth_(child_34133)){
node.appendChild(child_34133);


var G__34137 = seq__33556_34129;
var G__34138 = chunk__33558_34130;
var G__34139 = count__33559_34131;
var G__34140 = (i__33560_34132 + (1));
seq__33556_34129 = G__34137;
chunk__33558_34130 = G__34138;
count__33559_34131 = G__34139;
i__33560_34132 = G__34140;
continue;
} else {
var G__34154 = seq__33556_34129;
var G__34155 = chunk__33558_34130;
var G__34156 = count__33559_34131;
var G__34157 = (i__33560_34132 + (1));
seq__33556_34129 = G__34154;
chunk__33558_34130 = G__34155;
count__33559_34131 = G__34156;
i__33560_34132 = G__34157;
continue;
}
} else {
var temp__5720__auto___34158__$1 = cljs.core.seq(seq__33556_34129);
if(temp__5720__auto___34158__$1){
var seq__33556_34159__$1 = temp__5720__auto___34158__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33556_34159__$1)){
var c__4550__auto___34160 = cljs.core.chunk_first(seq__33556_34159__$1);
var G__34161 = cljs.core.chunk_rest(seq__33556_34159__$1);
var G__34162 = c__4550__auto___34160;
var G__34163 = cljs.core.count(c__4550__auto___34160);
var G__34164 = (0);
seq__33556_34129 = G__34161;
chunk__33558_34130 = G__34162;
count__33559_34131 = G__34163;
i__33560_34132 = G__34164;
continue;
} else {
var child_34165 = cljs.core.first(seq__33556_34159__$1);
if(cljs.core.truth_(child_34165)){
node.appendChild(child_34165);


var G__34169 = cljs.core.next(seq__33556_34159__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__33556_34129 = G__34169;
chunk__33558_34130 = G__34170;
count__33559_34131 = G__34171;
i__33560_34132 = G__34172;
continue;
} else {
var G__34173 = cljs.core.next(seq__33556_34159__$1);
var G__34174 = null;
var G__34175 = (0);
var G__34176 = (0);
seq__33556_34129 = G__34173;
chunk__33558_34130 = G__34174;
count__33559_34131 = G__34175;
i__33560_34132 = G__34176;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34127);
}
}


var G__34177 = cljs.core.next(seq__33513_34115__$1);
var G__34178 = null;
var G__34179 = (0);
var G__34180 = (0);
seq__33513_34055 = G__34177;
chunk__33515_34056 = G__34178;
count__33516_34057 = G__34179;
i__33517_34058 = G__34180;
continue;
} else {
var G__34181 = cljs.core.next(seq__33513_34115__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__33513_34055 = G__34181;
chunk__33515_34056 = G__34182;
count__33516_34057 = G__34183;
i__33517_34058 = G__34184;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33563_34185 = shadow.dom._to_svg;
var G__33564_34186 = "string";
var G__33565_34187 = ((function (G__33563_34185,G__33564_34186){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33563_34185,G__33564_34186))
;
goog.object.set(G__33563_34185,G__33564_34186,G__33565_34187);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33566_34198 = shadow.dom._to_svg;
var G__33567_34199 = "null";
var G__33568_34200 = ((function (G__33566_34198,G__33567_34199){
return (function (_){
return null;
});})(G__33566_34198,G__33567_34199))
;
goog.object.set(G__33566_34198,G__33567_34199,G__33568_34200);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34203 = arguments.length;
var i__4731__auto___34204 = (0);
while(true){
if((i__4731__auto___34204 < len__4730__auto___34203)){
args__4736__auto__.push((arguments[i__4731__auto___34204]));

var G__34205 = (i__4731__auto___34204 + (1));
i__4731__auto___34204 = G__34205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33569){
var G__33570 = cljs.core.first(seq33569);
var seq33569__$1 = cljs.core.next(seq33569);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33570,seq33569__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33576 = arguments.length;
switch (G__33576) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33584_34227 = shadow.dom.dom_node(el);
var G__33585_34228 = cljs.core.name(event);
var G__33586_34229 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33584_34227,G__33585_34228,G__33586_34229) : shadow.dom.dom_listen.call(null,G__33584_34227,G__33585_34228,G__33586_34229));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30929__auto___34230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30929__auto___34230,buf,chan,event_fn){
return (function (){
var f__30930__auto__ = (function (){var switch__30708__auto__ = ((function (c__30929__auto___34230,buf,chan,event_fn){
return (function (state_33591){
var state_val_33592 = (state_33591[(1)]);
if((state_val_33592 === (1))){
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33591__$1,(2),once_or_cleanup);
} else {
if((state_val_33592 === (2))){
var inst_33588 = (state_33591[(2)]);
var inst_33589 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33591__$1 = (function (){var statearr_33593 = state_33591;
(statearr_33593[(7)] = inst_33588);

return statearr_33593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33591__$1,inst_33589);
} else {
return null;
}
}
});})(c__30929__auto___34230,buf,chan,event_fn))
;
return ((function (switch__30708__auto__,c__30929__auto___34230,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30709__auto__ = null;
var shadow$dom$state_machine__30709__auto____0 = (function (){
var statearr_33594 = [null,null,null,null,null,null,null,null];
(statearr_33594[(0)] = shadow$dom$state_machine__30709__auto__);

(statearr_33594[(1)] = (1));

return statearr_33594;
});
var shadow$dom$state_machine__30709__auto____1 = (function (state_33591){
while(true){
var ret_value__30710__auto__ = (function (){try{while(true){
var result__30711__auto__ = switch__30708__auto__(state_33591);
if(cljs.core.keyword_identical_QMARK_(result__30711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30711__auto__;
}
break;
}
}catch (e33595){if((e33595 instanceof Object)){
var ex__30712__auto__ = e33595;
var statearr_33596_34236 = state_33591;
(statearr_33596_34236[(5)] = ex__30712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34237 = state_33591;
state_33591 = G__34237;
continue;
} else {
return ret_value__30710__auto__;
}
break;
}
});
shadow$dom$state_machine__30709__auto__ = function(state_33591){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30709__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30709__auto____1.call(this,state_33591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30709__auto____0;
shadow$dom$state_machine__30709__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30709__auto____1;
return shadow$dom$state_machine__30709__auto__;
})()
;})(switch__30708__auto__,c__30929__auto___34230,buf,chan,event_fn))
})();
var state__30931__auto__ = (function (){var statearr_33597 = (f__30930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30930__auto__.cljs$core$IFn$_invoke$arity$0() : f__30930__auto__.call(null));
(statearr_33597[(6)] = c__30929__auto___34230);

return statearr_33597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30931__auto__);
});})(c__30929__auto___34230,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
