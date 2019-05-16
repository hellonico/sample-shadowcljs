goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"decor","decor",-1730969431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljs.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((function (){var G__35377 = new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157);
return (features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(G__35377) : features__$1.call(null,G__35377));
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
 * Checks if options map contains deprected options and removes them.
 *   Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336)], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4523__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__35378(s__35379){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__35379__$1 = s__35379;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35379__$1);
if(temp__5720__auto__){
var s__35379__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35379__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35379__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35381 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35380 = (0);
while(true){
if((i__35380 < size__4522__auto__)){
var vec__35391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35380);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35391,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35391,(1),null);
cljs.core.chunk_append(b__35381,(function (){var temp__5718__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__35394 = temp__5718__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35394,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35394,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__35438 = (i__35380 + (1));
i__35380 = G__35438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35381),quil$middlewares$deprecated_options$deprecated_options_$_iter__35378(cljs.core.chunk_rest(s__35379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35381),null);
}
} else {
var vec__35397 = cljs.core.first(s__35379__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35397,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35397,(1),null);
return cljs.core.cons((function (){var temp__5718__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__35400 = temp__5718__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35400,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35400,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__35378(cljs.core.rest(s__35379__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__4523__auto__(options__$1);
})()));
});

//# sourceMappingURL=quil.middlewares.deprecated_options.js.map
