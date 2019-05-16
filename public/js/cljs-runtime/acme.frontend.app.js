goog.provide('acme.frontend.app');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
acme.frontend.app.init = (function acme$frontend$app$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello World. Time for coffee!!!!"], 0));
});
acme.frontend.app.reload = (function acme$frontend$app$reload(done){
return acme.frontend.app.init();
});
acme.frontend.app.setup = (function acme$frontend$app$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
acme.frontend.app.update_state = (function acme$frontend$app$update_state(state){
var map__25930 = state;
var map__25930__$1 = (((((!((map__25930 == null))))?(((((map__25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25930):map__25930);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25930__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25930__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod((color + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.mod((angle + 0.1),quil.core.TWO_PI)], null);
});
acme.frontend.app.draw_state = (function acme$frontend$app$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((240));

quil.core.fill.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos(angle));
var y = ((150) * quil.core.sin(angle));
var tr__25701__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__25701__auto__);

return quil.core.ellipse(x,y,(100),(100));
}finally {quil.core.pop_matrix();
}});
acme.frontend.app.example = (function acme$frontend$app$example(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167),"example",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_(acme.frontend.app.update_state))?(function() { 
var G__25932__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(acme.frontend.app.update_state,args);
};
var G__25932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25933__i = 0, G__25933__a = new Array(arguments.length -  0);
while (G__25933__i < G__25933__a.length) {G__25933__a[G__25933__i] = arguments[G__25933__i + 0]; ++G__25933__i;}
  args = new cljs.core.IndexedSeq(G__25933__a,0,null);
} 
return G__25932__delegate.call(this,args);};
G__25932.cljs$lang$maxFixedArity = 0;
G__25932.cljs$lang$applyTo = (function (arglist__25934){
var args = cljs.core.seq(arglist__25934);
return G__25932__delegate(args);
});
G__25932.cljs$core$IFn$_invoke$arity$variadic = G__25932__delegate;
return G__25932;
})()
:acme.frontend.app.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_(acme.frontend.app.setup))?(function() { 
var G__25935__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(acme.frontend.app.setup,args);
};
var G__25935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25936__i = 0, G__25936__a = new Array(arguments.length -  0);
while (G__25936__i < G__25936__a.length) {G__25936__a[G__25936__i] = arguments[G__25936__i + 0]; ++G__25936__i;}
  args = new cljs.core.IndexedSeq(G__25936__a,0,null);
} 
return G__25935__delegate.call(this,args);};
G__25935.cljs$lang$maxFixedArity = 0;
G__25935.cljs$lang$applyTo = (function (arglist__25937){
var args = cljs.core.seq(arglist__25937);
return G__25935__delegate(args);
});
G__25935.cljs$core$IFn$_invoke$arity$variadic = G__25935__delegate;
return G__25935;
})()
:acme.frontend.app.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_(acme.frontend.app.draw_state))?(function() { 
var G__25938__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(acme.frontend.app.draw_state,args);
};
var G__25938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25939__i = 0, G__25939__a = new Array(arguments.length -  0);
while (G__25939__i < G__25939__a.length) {G__25939__a[G__25939__i] = arguments[G__25939__i + 0]; ++G__25939__i;}
  args = new cljs.core.IndexedSeq(G__25939__a,0,null);
} 
return G__25938__delegate.call(this,args);};
G__25938.cljs$lang$maxFixedArity = 0;
G__25938.cljs$lang$applyTo = (function (arglist__25940){
var args = cljs.core.seq(arglist__25940);
return G__25938__delegate(args);
});
G__25938.cljs$core$IFn$_invoke$arity$variadic = G__25938__delegate;
return G__25938;
})()
:acme.frontend.app.draw_state)], 0));
});
goog.exportSymbol('acme.frontend.app.example', acme.frontend.app.example);

if(cljs.core.truth_(cljs.core.some((function (p1__25299__25300__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__25299__25300__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),acme.frontend.app.example,new cljs.core.Keyword(null,"host-id","host-id",742376279),"example"], null));
}

//# sourceMappingURL=acme.frontend.app.js.map
