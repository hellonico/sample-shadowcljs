goog.provide('acme.frontend.app2');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
acme.frontend.app2.init = (function acme$frontend$app2$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello World. Time for coffee!!!!"], 0));
});
acme.frontend.app2.reload = (function acme$frontend$app2$reload(done){
return acme.frontend.app2.init();
});
acme.frontend.app2.setup = (function acme$frontend$app2$setup(){
quil.core.frame_rate((1));

return quil.core.background.cljs$core$IFn$_invoke$arity$1((200));
});
acme.frontend.app2.draw = (function acme$frontend$app2$draw(){
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(quil.core.random.cljs$core$IFn$_invoke$arity$1((255)));

quil.core.stroke_weight(quil.core.random.cljs$core$IFn$_invoke$arity$1((10)));

quil.core.fill.cljs$core$IFn$_invoke$arity$1(quil.core.random.cljs$core$IFn$_invoke$arity$1((255)));

var diam = quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
var x = quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.width());
var y = quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.height());
return quil.core.ellipse(x,y,diam,diam);
});
acme.frontend.app2.app2 = (function acme$frontend$app2$app2(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167),"app2",new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.cljs$core$IFn$_invoke$arity$1((2));
}),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null),new cljs.core.Keyword(null,"title","title",636505583),"Oh so many grey circles",new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_(acme.frontend.app2.setup))?(function() { 
var G__36501__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(acme.frontend.app2.setup,args);
};
var G__36501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36502__i = 0, G__36502__a = new Array(arguments.length -  0);
while (G__36502__i < G__36502__a.length) {G__36502__a[G__36502__i] = arguments[G__36502__i + 0]; ++G__36502__i;}
  args = new cljs.core.IndexedSeq(G__36502__a,0,null);
} 
return G__36501__delegate.call(this,args);};
G__36501.cljs$lang$maxFixedArity = 0;
G__36501.cljs$lang$applyTo = (function (arglist__36503){
var args = cljs.core.seq(arglist__36503);
return G__36501__delegate(args);
});
G__36501.cljs$core$IFn$_invoke$arity$variadic = G__36501__delegate;
return G__36501;
})()
:acme.frontend.app2.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_(acme.frontend.app2.draw))?(function() { 
var G__36504__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(acme.frontend.app2.draw,args);
};
var G__36504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36505__i = 0, G__36505__a = new Array(arguments.length -  0);
while (G__36505__i < G__36505__a.length) {G__36505__a[G__36505__i] = arguments[G__36505__i + 0]; ++G__36505__i;}
  args = new cljs.core.IndexedSeq(G__36505__a,0,null);
} 
return G__36504__delegate.call(this,args);};
G__36504.cljs$lang$maxFixedArity = 0;
G__36504.cljs$lang$applyTo = (function (arglist__36506){
var args = cljs.core.seq(arglist__36506);
return G__36504__delegate(args);
});
G__36504.cljs$core$IFn$_invoke$arity$variadic = G__36504__delegate;
return G__36504;
})()
:acme.frontend.app2.draw)], 0));
});
goog.exportSymbol('acme.frontend.app2.app2', acme.frontend.app2.app2);

if(cljs.core.truth_(cljs.core.some((function (p1__35500__35501__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__35500__35501__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),acme.frontend.app2.app2,new cljs.core.Keyword(null,"host-id","host-id",742376279),"app2"], null));
}

//# sourceMappingURL=acme.frontend.app2.js.map
