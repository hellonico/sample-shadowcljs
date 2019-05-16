goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35382 = arguments.length;
var i__4731__auto___35383 = (0);
while(true){
if((i__4731__auto___35383 < len__4730__auto___35382)){
args__4736__auto__.push((arguments[i__4731__auto___35383]));

var G__35384 = (i__4731__auto___35383 + (1));
i__4731__auto___35383 = G__35384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35190){
var G__35191 = cljs.core.first(seq35190);
var seq35190__$1 = cljs.core.next(seq35190);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35191,seq35190__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35204){
var map__35205 = p__35204;
var map__35205__$1 = (((((!((map__35205 == null))))?(((((map__35205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35205):map__35205);
var src = map__35205__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35216 = cljs.core.seq(sources);
var chunk__35217 = null;
var count__35218 = (0);
var i__35219 = (0);
while(true){
if((i__35219 < count__35218)){
var map__35225 = chunk__35217.cljs$core$IIndexed$_nth$arity$2(null,i__35219);
var map__35225__$1 = (((((!((map__35225 == null))))?(((((map__35225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35225):map__35225);
var src = map__35225__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35403 = seq__35216;
var G__35404 = chunk__35217;
var G__35405 = count__35218;
var G__35406 = (i__35219 + (1));
seq__35216 = G__35403;
chunk__35217 = G__35404;
count__35218 = G__35405;
i__35219 = G__35406;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35216);
if(temp__5720__auto__){
var seq__35216__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35216__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35216__$1);
var G__35407 = cljs.core.chunk_rest(seq__35216__$1);
var G__35408 = c__4550__auto__;
var G__35409 = cljs.core.count(c__4550__auto__);
var G__35410 = (0);
seq__35216 = G__35407;
chunk__35217 = G__35408;
count__35218 = G__35409;
i__35219 = G__35410;
continue;
} else {
var map__35228 = cljs.core.first(seq__35216__$1);
var map__35228__$1 = (((((!((map__35228 == null))))?(((((map__35228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35228):map__35228);
var src = map__35228__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35228__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35411 = cljs.core.next(seq__35216__$1);
var G__35412 = null;
var G__35413 = (0);
var G__35414 = (0);
seq__35216 = G__35411;
chunk__35217 = G__35412;
count__35218 = G__35413;
i__35219 = G__35414;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35231 = cljs.core.seq(js_requires);
var chunk__35232 = null;
var count__35233 = (0);
var i__35234 = (0);
while(true){
if((i__35234 < count__35233)){
var js_ns = chunk__35232.cljs$core$IIndexed$_nth$arity$2(null,i__35234);
var require_str_35424 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35424);


var G__35425 = seq__35231;
var G__35426 = chunk__35232;
var G__35427 = count__35233;
var G__35428 = (i__35234 + (1));
seq__35231 = G__35425;
chunk__35232 = G__35426;
count__35233 = G__35427;
i__35234 = G__35428;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35231);
if(temp__5720__auto__){
var seq__35231__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35231__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35231__$1);
var G__35429 = cljs.core.chunk_rest(seq__35231__$1);
var G__35430 = c__4550__auto__;
var G__35431 = cljs.core.count(c__4550__auto__);
var G__35432 = (0);
seq__35231 = G__35429;
chunk__35232 = G__35430;
count__35233 = G__35431;
i__35234 = G__35432;
continue;
} else {
var js_ns = cljs.core.first(seq__35231__$1);
var require_str_35433 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35433);


var G__35434 = cljs.core.next(seq__35231__$1);
var G__35435 = null;
var G__35436 = (0);
var G__35437 = (0);
seq__35231 = G__35434;
chunk__35232 = G__35435;
count__35233 = G__35436;
i__35234 = G__35437;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35236 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35236) : callback.call(null,G__35236));
} else {
var G__35237 = shadow.cljs.devtools.client.env.files_url();
var G__35238 = ((function (G__35237){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35237))
;
var G__35239 = "POST";
var G__35240 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35241 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35237,G__35238,G__35239,G__35240,G__35241);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35243){
var map__35244 = p__35243;
var map__35244__$1 = (((((!((map__35244 == null))))?(((((map__35244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35244):map__35244);
var msg = map__35244__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35244__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35244__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35246 = info;
var map__35246__$1 = (((((!((map__35246 == null))))?(((((map__35246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35246):map__35246);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35246__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35246__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35248(s__35249){
return (new cljs.core.LazySeq(null,((function (map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info){
return (function (){
var s__35249__$1 = s__35249;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35249__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35257 = cljs.core.first(xs__6277__auto__);
var map__35257__$1 = (((((!((map__35257 == null))))?(((((map__35257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35257):map__35257);
var src = map__35257__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35249__$1,map__35257,map__35257__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35248_$_iter__35250(s__35251){
return (new cljs.core.LazySeq(null,((function (s__35249__$1,map__35257,map__35257__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info){
return (function (){
var s__35251__$1 = s__35251;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35251__$1);
if(temp__5720__auto____$1){
var s__35251__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35251__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35251__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35253 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35252 = (0);
while(true){
if((i__35252 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35252);
cljs.core.chunk_append(b__35253,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35461 = (i__35252 + (1));
i__35252 = G__35461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35253),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35248_$_iter__35250(cljs.core.chunk_rest(s__35251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35253),null);
}
} else {
var warning = cljs.core.first(s__35251__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35248_$_iter__35250(cljs.core.rest(s__35251__$2)));
}
} else {
return null;
}
break;
}
});})(s__35249__$1,map__35257,map__35257__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info))
,null,null));
});})(s__35249__$1,map__35257,map__35257__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35248(cljs.core.rest(s__35249__$1)));
} else {
var G__35462 = cljs.core.rest(s__35249__$1);
s__35249__$1 = G__35462;
continue;
}
} else {
var G__35463 = cljs.core.rest(s__35249__$1);
s__35249__$1 = G__35463;
continue;
}
} else {
return null;
}
break;
}
});})(map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info))
,null,null));
});})(map__35246,map__35246__$1,sources,compiled,map__35244,map__35244__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35260_35464 = cljs.core.seq(warnings);
var chunk__35261_35465 = null;
var count__35262_35466 = (0);
var i__35263_35467 = (0);
while(true){
if((i__35263_35467 < count__35262_35466)){
var map__35276_35468 = chunk__35261_35465.cljs$core$IIndexed$_nth$arity$2(null,i__35263_35467);
var map__35276_35469__$1 = (((((!((map__35276_35468 == null))))?(((((map__35276_35468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35276_35468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35276_35468):map__35276_35468);
var w_35470 = map__35276_35469__$1;
var msg_35471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276_35469__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276_35469__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276_35469__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276_35469__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35474)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35472),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35473),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35471__$1)].join(''));


var G__35475 = seq__35260_35464;
var G__35476 = chunk__35261_35465;
var G__35477 = count__35262_35466;
var G__35478 = (i__35263_35467 + (1));
seq__35260_35464 = G__35475;
chunk__35261_35465 = G__35476;
count__35262_35466 = G__35477;
i__35263_35467 = G__35478;
continue;
} else {
var temp__5720__auto___35479 = cljs.core.seq(seq__35260_35464);
if(temp__5720__auto___35479){
var seq__35260_35480__$1 = temp__5720__auto___35479;
if(cljs.core.chunked_seq_QMARK_(seq__35260_35480__$1)){
var c__4550__auto___35481 = cljs.core.chunk_first(seq__35260_35480__$1);
var G__35482 = cljs.core.chunk_rest(seq__35260_35480__$1);
var G__35483 = c__4550__auto___35481;
var G__35484 = cljs.core.count(c__4550__auto___35481);
var G__35485 = (0);
seq__35260_35464 = G__35482;
chunk__35261_35465 = G__35483;
count__35262_35466 = G__35484;
i__35263_35467 = G__35485;
continue;
} else {
var map__35280_35486 = cljs.core.first(seq__35260_35480__$1);
var map__35280_35487__$1 = (((((!((map__35280_35486 == null))))?(((((map__35280_35486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35280_35486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35280_35486):map__35280_35486);
var w_35488 = map__35280_35487__$1;
var msg_35489__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280_35487__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280_35487__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280_35487__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280_35487__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35492)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35490),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35491),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35489__$1)].join(''));


var G__35507 = cljs.core.next(seq__35260_35480__$1);
var G__35508 = null;
var G__35509 = (0);
var G__35510 = (0);
seq__35260_35464 = G__35507;
chunk__35261_35465 = G__35508;
count__35262_35466 = G__35509;
i__35263_35467 = G__35510;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info){
return (function (p__35282){
var map__35283 = p__35282;
var map__35283__$1 = (((((!((map__35283 == null))))?(((((map__35283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35283):map__35283);
var src = map__35283__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info){
return (function (p__35285){
var map__35286 = p__35285;
var map__35286__$1 = (((((!((map__35286 == null))))?(((((map__35286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35286):map__35286);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35286__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info){
return (function (p__35289){
var map__35290 = p__35289;
var map__35290__$1 = (((((!((map__35290 == null))))?(((((map__35290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35290):map__35290);
var rc = map__35290__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35290__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info){
return (function (p1__35242_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35242_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35246,map__35246__$1,sources,compiled,warnings,map__35244,map__35244__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35292){
var map__35293 = p__35292;
var map__35293__$1 = (((((!((map__35293 == null))))?(((((map__35293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35293):map__35293);
var msg = map__35293__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35293__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35295 = cljs.core.seq(updates);
var chunk__35297 = null;
var count__35298 = (0);
var i__35299 = (0);
while(true){
if((i__35299 < count__35298)){
var path = chunk__35297.cljs$core$IIndexed$_nth$arity$2(null,i__35299);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35325_35511 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35328_35512 = null;
var count__35329_35513 = (0);
var i__35330_35514 = (0);
while(true){
if((i__35330_35514 < count__35329_35513)){
var node_35515 = chunk__35328_35512.cljs$core$IIndexed$_nth$arity$2(null,i__35330_35514);
var path_match_35516 = shadow.cljs.devtools.client.browser.match_paths(node_35515.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35516)){
var new_link_35517 = (function (){var G__35335 = node_35515.cloneNode(true);
G__35335.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35516),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35335;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35516], 0));

goog.dom.insertSiblingAfter(new_link_35517,node_35515);

goog.dom.removeNode(node_35515);


var G__35518 = seq__35325_35511;
var G__35519 = chunk__35328_35512;
var G__35520 = count__35329_35513;
var G__35521 = (i__35330_35514 + (1));
seq__35325_35511 = G__35518;
chunk__35328_35512 = G__35519;
count__35329_35513 = G__35520;
i__35330_35514 = G__35521;
continue;
} else {
var G__35522 = seq__35325_35511;
var G__35523 = chunk__35328_35512;
var G__35524 = count__35329_35513;
var G__35525 = (i__35330_35514 + (1));
seq__35325_35511 = G__35522;
chunk__35328_35512 = G__35523;
count__35329_35513 = G__35524;
i__35330_35514 = G__35525;
continue;
}
} else {
var temp__5720__auto___35526 = cljs.core.seq(seq__35325_35511);
if(temp__5720__auto___35526){
var seq__35325_35527__$1 = temp__5720__auto___35526;
if(cljs.core.chunked_seq_QMARK_(seq__35325_35527__$1)){
var c__4550__auto___35528 = cljs.core.chunk_first(seq__35325_35527__$1);
var G__35529 = cljs.core.chunk_rest(seq__35325_35527__$1);
var G__35530 = c__4550__auto___35528;
var G__35531 = cljs.core.count(c__4550__auto___35528);
var G__35532 = (0);
seq__35325_35511 = G__35529;
chunk__35328_35512 = G__35530;
count__35329_35513 = G__35531;
i__35330_35514 = G__35532;
continue;
} else {
var node_35533 = cljs.core.first(seq__35325_35527__$1);
var path_match_35534 = shadow.cljs.devtools.client.browser.match_paths(node_35533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35534)){
var new_link_35535 = (function (){var G__35336 = node_35533.cloneNode(true);
G__35336.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35336;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35534], 0));

goog.dom.insertSiblingAfter(new_link_35535,node_35533);

goog.dom.removeNode(node_35533);


var G__35536 = cljs.core.next(seq__35325_35527__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__35325_35511 = G__35536;
chunk__35328_35512 = G__35537;
count__35329_35513 = G__35538;
i__35330_35514 = G__35539;
continue;
} else {
var G__35540 = cljs.core.next(seq__35325_35527__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__35325_35511 = G__35540;
chunk__35328_35512 = G__35541;
count__35329_35513 = G__35542;
i__35330_35514 = G__35543;
continue;
}
}
} else {
}
}
break;
}


var G__35544 = seq__35295;
var G__35545 = chunk__35297;
var G__35546 = count__35298;
var G__35547 = (i__35299 + (1));
seq__35295 = G__35544;
chunk__35297 = G__35545;
count__35298 = G__35546;
i__35299 = G__35547;
continue;
} else {
var G__35548 = seq__35295;
var G__35549 = chunk__35297;
var G__35550 = count__35298;
var G__35551 = (i__35299 + (1));
seq__35295 = G__35548;
chunk__35297 = G__35549;
count__35298 = G__35550;
i__35299 = G__35551;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35295);
if(temp__5720__auto__){
var seq__35295__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35295__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35295__$1);
var G__35552 = cljs.core.chunk_rest(seq__35295__$1);
var G__35553 = c__4550__auto__;
var G__35554 = cljs.core.count(c__4550__auto__);
var G__35555 = (0);
seq__35295 = G__35552;
chunk__35297 = G__35553;
count__35298 = G__35554;
i__35299 = G__35555;
continue;
} else {
var path = cljs.core.first(seq__35295__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35337_35556 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35340_35557 = null;
var count__35341_35558 = (0);
var i__35342_35559 = (0);
while(true){
if((i__35342_35559 < count__35341_35558)){
var node_35560 = chunk__35340_35557.cljs$core$IIndexed$_nth$arity$2(null,i__35342_35559);
var path_match_35561 = shadow.cljs.devtools.client.browser.match_paths(node_35560.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35561)){
var new_link_35562 = (function (){var G__35347 = node_35560.cloneNode(true);
G__35347.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35561),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35347;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35561], 0));

goog.dom.insertSiblingAfter(new_link_35562,node_35560);

goog.dom.removeNode(node_35560);


var G__35563 = seq__35337_35556;
var G__35564 = chunk__35340_35557;
var G__35565 = count__35341_35558;
var G__35566 = (i__35342_35559 + (1));
seq__35337_35556 = G__35563;
chunk__35340_35557 = G__35564;
count__35341_35558 = G__35565;
i__35342_35559 = G__35566;
continue;
} else {
var G__35567 = seq__35337_35556;
var G__35568 = chunk__35340_35557;
var G__35569 = count__35341_35558;
var G__35570 = (i__35342_35559 + (1));
seq__35337_35556 = G__35567;
chunk__35340_35557 = G__35568;
count__35341_35558 = G__35569;
i__35342_35559 = G__35570;
continue;
}
} else {
var temp__5720__auto___35571__$1 = cljs.core.seq(seq__35337_35556);
if(temp__5720__auto___35571__$1){
var seq__35337_35572__$1 = temp__5720__auto___35571__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35337_35572__$1)){
var c__4550__auto___35573 = cljs.core.chunk_first(seq__35337_35572__$1);
var G__35574 = cljs.core.chunk_rest(seq__35337_35572__$1);
var G__35575 = c__4550__auto___35573;
var G__35576 = cljs.core.count(c__4550__auto___35573);
var G__35577 = (0);
seq__35337_35556 = G__35574;
chunk__35340_35557 = G__35575;
count__35341_35558 = G__35576;
i__35342_35559 = G__35577;
continue;
} else {
var node_35578 = cljs.core.first(seq__35337_35572__$1);
var path_match_35579 = shadow.cljs.devtools.client.browser.match_paths(node_35578.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35579)){
var new_link_35580 = (function (){var G__35348 = node_35578.cloneNode(true);
G__35348.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35579),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35348;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35579], 0));

goog.dom.insertSiblingAfter(new_link_35580,node_35578);

goog.dom.removeNode(node_35578);


var G__35581 = cljs.core.next(seq__35337_35572__$1);
var G__35582 = null;
var G__35583 = (0);
var G__35584 = (0);
seq__35337_35556 = G__35581;
chunk__35340_35557 = G__35582;
count__35341_35558 = G__35583;
i__35342_35559 = G__35584;
continue;
} else {
var G__35585 = cljs.core.next(seq__35337_35572__$1);
var G__35586 = null;
var G__35587 = (0);
var G__35588 = (0);
seq__35337_35556 = G__35585;
chunk__35340_35557 = G__35586;
count__35341_35558 = G__35587;
i__35342_35559 = G__35588;
continue;
}
}
} else {
}
}
break;
}


var G__35589 = cljs.core.next(seq__35295__$1);
var G__35590 = null;
var G__35591 = (0);
var G__35592 = (0);
seq__35295 = G__35589;
chunk__35297 = G__35590;
count__35298 = G__35591;
i__35299 = G__35592;
continue;
} else {
var G__35593 = cljs.core.next(seq__35295__$1);
var G__35594 = null;
var G__35595 = (0);
var G__35596 = (0);
seq__35295 = G__35593;
chunk__35297 = G__35594;
count__35298 = G__35595;
i__35299 = G__35596;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35349){
var map__35350 = p__35349;
var map__35350__$1 = (((((!((map__35350 == null))))?(((((map__35350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35350):map__35350);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35350__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35350,map__35350__$1,id,js){
return (function (){
return eval(js);
});})(map__35350,map__35350__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35352){
var map__35353 = p__35352;
var map__35353__$1 = (((((!((map__35353 == null))))?(((((map__35353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35353):map__35353);
var msg = map__35353__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35353,map__35353__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35355){
var map__35356 = p__35355;
var map__35356__$1 = (((((!((map__35356 == null))))?(((((map__35356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35356):map__35356);
var src = map__35356__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35356__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35353,map__35353__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35353,map__35353__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35353,map__35353__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35358){
var map__35359 = p__35358;
var map__35359__$1 = (((((!((map__35359 == null))))?(((((map__35359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35359):map__35359);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35359,map__35359__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35359,map__35359__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35361){
var map__35362 = p__35361;
var map__35362__$1 = (((((!((map__35362 == null))))?(((((map__35362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35362):map__35362);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35362__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35362__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35364){
var map__35365 = p__35364;
var map__35365__$1 = (((((!((map__35365 == null))))?(((((map__35365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35365):map__35365);
var msg = map__35365__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35365__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35367 = type;
var G__35367__$1 = (((G__35367 instanceof cljs.core.Keyword))?G__35367.fqn:null);
switch (G__35367__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35368 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35369 = ((function (G__35368){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35368))
;
var G__35370 = "POST";
var G__35371 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35372 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35368,G__35369,G__35370,G__35371,G__35372);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35374){var e = e35374;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___35624 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___35624)){
var s_35625 = temp__5720__auto___35624;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35625.onclose = ((function (s_35625,temp__5720__auto___35624){
return (function (e){
return null;
});})(s_35625,temp__5720__auto___35624))
;

s_35625.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
