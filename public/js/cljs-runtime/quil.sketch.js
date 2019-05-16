goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(p5.prototype["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(p5.prototype["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(p5.prototype["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p3d","p3d",-850380194),mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5720__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
var inner_canvas = el.querySelector("canvas");
inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height"));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__35598 = arguments.length;
switch (G__35598) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__35599 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__35600 = null;
var count__35601 = (0);
var i__35602 = (0);
while(true){
if((i__35602 < count__35601)){
var vec__35614 = chunk__35600.cljs$core$IIndexed$_nth$arity$2(null,i__35602);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614,(1),null);
var temp__5720__auto___35650 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___35650)){
var handler_35651 = temp__5720__auto___35650;
(prc[cljs.core.name(processing_name)] = ((function (seq__35599,chunk__35600,count__35601,i__35602,handler_35651,temp__5720__auto___35650,vec__35614,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR__orig_val__35617 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__35618 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__35618;

try{return (handler_35651.cljs$core$IFn$_invoke$arity$0 ? handler_35651.cljs$core$IFn$_invoke$arity$0() : handler_35651.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__35617;
}});})(seq__35599,chunk__35600,count__35601,i__35602,handler_35651,temp__5720__auto___35650,vec__35614,processing_name,quil_name))
);
} else {
}


var G__35652 = seq__35599;
var G__35653 = chunk__35600;
var G__35654 = count__35601;
var G__35655 = (i__35602 + (1));
seq__35599 = G__35652;
chunk__35600 = G__35653;
count__35601 = G__35654;
i__35602 = G__35655;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35599);
if(temp__5720__auto__){
var seq__35599__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35599__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35599__$1);
var G__35656 = cljs.core.chunk_rest(seq__35599__$1);
var G__35657 = c__4550__auto__;
var G__35658 = cljs.core.count(c__4550__auto__);
var G__35659 = (0);
seq__35599 = G__35656;
chunk__35600 = G__35657;
count__35601 = G__35658;
i__35602 = G__35659;
continue;
} else {
var vec__35619 = cljs.core.first(seq__35599__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35619,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35619,(1),null);
var temp__5720__auto___35660__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___35660__$1)){
var handler_35661 = temp__5720__auto___35660__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__35599,chunk__35600,count__35601,i__35602,handler_35661,temp__5720__auto___35660__$1,vec__35619,processing_name,quil_name,seq__35599__$1,temp__5720__auto__){
return (function (){
var _STAR_applet_STAR__orig_val__35622 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__35623 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__35623;

try{return (handler_35661.cljs$core$IFn$_invoke$arity$0 ? handler_35661.cljs$core$IFn$_invoke$arity$0() : handler_35661.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__35622;
}});})(seq__35599,chunk__35600,count__35601,i__35602,handler_35661,temp__5720__auto___35660__$1,vec__35619,processing_name,quil_name,seq__35599__$1,temp__5720__auto__))
);
} else {
}


var G__35662 = cljs.core.next(seq__35599__$1);
var G__35663 = null;
var G__35664 = (0);
var G__35665 = (0);
seq__35599 = G__35662;
chunk__35600 = G__35663;
count__35601 = G__35664;
i__35602 = G__35665;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4131__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for provided Processing object.
 *   Fullscreen is enabled when user presses F11. We turn
 *   sketch <canvas> element to fullscreen storing old size
 *   in an atom. When user cancels fullscreen (F11 or Esc)
 *   we resize sketch to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});})(old_size))
;
var G__35627_35666 = window;
var G__35628_35667 = goog.events.EventType.KEYDOWN;
var G__35629_35668 = ((function (G__35627_35666,G__35628_35667,old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(G__35627_35666,G__35628_35667,old_size,adjust_canvas_size))
;
goog.events.listen(G__35627_35666,G__35628_35667,G__35629_35668);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__35630 = document;
var G__35631 = "fullscreenerror";
var G__35632 = ((function (G__35630,G__35631,old_size,adjust_canvas_size){
return (function (p1__35626_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__35626_SHARP_);
});})(G__35630,G__35631,old_size,adjust_canvas_size))
;
return goog.events.listen(G__35630,G__35631,G__35632);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__35635 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__35634 = ((function (G__35635){
return (function (p1__35633_SHARP_){
return (p1__35633_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35633_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__35633_SHARP_.call(null,options));
});})(G__35635))
;
return fexpr__35634(G__35635);
})()], 0));
var sketch_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__35636_35677 = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__35636_35677.cljs$core$IFn$_invoke$arity$0 ? fexpr__35636_35677.cljs$core$IFn$_invoke$arity$0() : fexpr__35636_35677.call(null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__35637 = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__35637.cljs$core$IFn$_invoke$arity$0 ? fexpr__35637.cljs$core$IFn$_invoke$arity$0() : fexpr__35637.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__35639 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__35638 = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__35638.cljs$core$IFn$_invoke$arity$1 ? fexpr__35638.cljs$core$IFn$_invoke$arity$1(G__35639) : fexpr__35638.call(null,G__35639));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel], 0));
var sketch = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5720__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5720__auto__)){
var proc_obj = temp__5720__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35679 = arguments.length;
var i__4731__auto___35680 = (0);
while(true){
if((i__4731__auto___35680 < len__4730__auto___35679)){
args__4736__auto__.push((arguments[i__4731__auto___35680]));

var G__35681 = (i__4731__auto___35680 + (1));
i__4731__auto___35680 = G__35681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem__$1.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
host_elem__$1.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem__$1;

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq35640){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35640));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__35682 = quil.sketch.empty_body_QMARK_();
var seq__35641_35683 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__35642_35684 = null;
var count__35643_35685 = (0);
var i__35644_35686 = (0);
while(true){
if((i__35644_35686 < count__35643_35685)){
var sk_35687 = chunk__35642_35684.cljs$core$IIndexed$_nth$arity$2(null,i__35644_35686);
if(add_elem_QMARK__35682){
quil.sketch.add_canvas(new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_35687));
} else {
}

var fexpr__35647_35688 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_35687);
(fexpr__35647_35688.cljs$core$IFn$_invoke$arity$0 ? fexpr__35647_35688.cljs$core$IFn$_invoke$arity$0() : fexpr__35647_35688.call(null));


var G__35689 = seq__35641_35683;
var G__35690 = chunk__35642_35684;
var G__35691 = count__35643_35685;
var G__35692 = (i__35644_35686 + (1));
seq__35641_35683 = G__35689;
chunk__35642_35684 = G__35690;
count__35643_35685 = G__35691;
i__35644_35686 = G__35692;
continue;
} else {
var temp__5720__auto___35693 = cljs.core.seq(seq__35641_35683);
if(temp__5720__auto___35693){
var seq__35641_35694__$1 = temp__5720__auto___35693;
if(cljs.core.chunked_seq_QMARK_(seq__35641_35694__$1)){
var c__4550__auto___35695 = cljs.core.chunk_first(seq__35641_35694__$1);
var G__35696 = cljs.core.chunk_rest(seq__35641_35694__$1);
var G__35697 = c__4550__auto___35695;
var G__35698 = cljs.core.count(c__4550__auto___35695);
var G__35699 = (0);
seq__35641_35683 = G__35696;
chunk__35642_35684 = G__35697;
count__35643_35685 = G__35698;
i__35644_35686 = G__35699;
continue;
} else {
var sk_35700 = cljs.core.first(seq__35641_35694__$1);
if(add_elem_QMARK__35682){
quil.sketch.add_canvas(new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_35700));
} else {
}

var fexpr__35648_35701 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_35700);
(fexpr__35648_35701.cljs$core$IFn$_invoke$arity$0 ? fexpr__35648_35701.cljs$core$IFn$_invoke$arity$0() : fexpr__35648_35701.call(null));


var G__35702 = cljs.core.next(seq__35641_35694__$1);
var G__35703 = null;
var G__35704 = (0);
var G__35705 = (0);
seq__35641_35683 = G__35702;
chunk__35642_35684 = G__35703;
count__35643_35685 = G__35704;
i__35644_35686 = G__35705;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=quil.sketch.js.map
