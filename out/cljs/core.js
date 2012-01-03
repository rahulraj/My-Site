goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2463 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2463))
{return or__3548__auto____2463;
} else
{var or__3548__auto____2464 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2464))
{return or__3548__auto____2464;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2465 = coll;

if(cljs.core.truth_(and__3546__auto____2465))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2465;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2466 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2466))
{return or__3548__auto____2466;
} else
{var or__3548__auto____2467 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2467))
{return or__3548__auto____2467;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2468 = coll;

if(cljs.core.truth_(and__3546__auto____2468))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2468;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2469 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2469))
{return or__3548__auto____2469;
} else
{var or__3548__auto____2470 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2470))
{return or__3548__auto____2470;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2471 = coll;

if(cljs.core.truth_(and__3546__auto____2471))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2471;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2472 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2472))
{return or__3548__auto____2472;
} else
{var or__3548__auto____2473 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2473))
{return or__3548__auto____2473;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2480 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2474 = coll;

if(cljs.core.truth_(and__3546__auto____2474))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2474;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2475 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2475))
{return or__3548__auto____2475;
} else
{var or__3548__auto____2476 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2476))
{return or__3548__auto____2476;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2481 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2477 = coll;

if(cljs.core.truth_(and__3546__auto____2477))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2477;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2478 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2478))
{return or__3548__auto____2478;
} else
{var or__3548__auto____2479 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2479))
{return or__3548__auto____2479;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2480.call(this,coll,n);
case  3 :
return _nth__2481.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2483 = coll;

if(cljs.core.truth_(and__3546__auto____2483))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2483;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2484 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2484))
{return or__3548__auto____2484;
} else
{var or__3548__auto____2485 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2485))
{return or__3548__auto____2485;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2486 = coll;

if(cljs.core.truth_(and__3546__auto____2486))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2486;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2487 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2487))
{return or__3548__auto____2487;
} else
{var or__3548__auto____2488 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2488))
{return or__3548__auto____2488;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2495 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2489 = o;

if(cljs.core.truth_(and__3546__auto____2489))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2489;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2490 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2490))
{return or__3548__auto____2490;
} else
{var or__3548__auto____2491 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2491))
{return or__3548__auto____2491;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2496 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2492 = o;

if(cljs.core.truth_(and__3546__auto____2492))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2492;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2493 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2493))
{return or__3548__auto____2493;
} else
{var or__3548__auto____2494 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2494))
{return or__3548__auto____2494;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2495.call(this,o,k);
case  3 :
return _lookup__2496.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2498 = coll;

if(cljs.core.truth_(and__3546__auto____2498))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2498;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2499 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2499))
{return or__3548__auto____2499;
} else
{var or__3548__auto____2500 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2500))
{return or__3548__auto____2500;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2501 = coll;

if(cljs.core.truth_(and__3546__auto____2501))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2501;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2502 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2502))
{return or__3548__auto____2502;
} else
{var or__3548__auto____2503 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2503))
{return or__3548__auto____2503;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2504 = coll;

if(cljs.core.truth_(and__3546__auto____2504))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2504;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2505 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2505))
{return or__3548__auto____2505;
} else
{var or__3548__auto____2506 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2506))
{return or__3548__auto____2506;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2507 = coll;

if(cljs.core.truth_(and__3546__auto____2507))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2507;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2508 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2508))
{return or__3548__auto____2508;
} else
{var or__3548__auto____2509 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2509))
{return or__3548__auto____2509;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2510 = coll;

if(cljs.core.truth_(and__3546__auto____2510))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2510;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2511 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2511))
{return or__3548__auto____2511;
} else
{var or__3548__auto____2512 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2512))
{return or__3548__auto____2512;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2513 = coll;

if(cljs.core.truth_(and__3546__auto____2513))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2513;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2514 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2514))
{return or__3548__auto____2514;
} else
{var or__3548__auto____2515 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2515))
{return or__3548__auto____2515;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2516 = coll;

if(cljs.core.truth_(and__3546__auto____2516))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2516;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2517 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2517))
{return or__3548__auto____2517;
} else
{var or__3548__auto____2518 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2518))
{return or__3548__auto____2518;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2519 = o;

if(cljs.core.truth_(and__3546__auto____2519))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2519;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2520 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2520))
{return or__3548__auto____2520;
} else
{var or__3548__auto____2521 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2521))
{return or__3548__auto____2521;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2522 = o;

if(cljs.core.truth_(and__3546__auto____2522))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2522;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2523 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2523))
{return or__3548__auto____2523;
} else
{var or__3548__auto____2524 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2524))
{return or__3548__auto____2524;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2525 = o;

if(cljs.core.truth_(and__3546__auto____2525))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2525;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2526 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2526))
{return or__3548__auto____2526;
} else
{var or__3548__auto____2527 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2527))
{return or__3548__auto____2527;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2528 = o;

if(cljs.core.truth_(and__3546__auto____2528))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2528;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2529 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2529))
{return or__3548__auto____2529;
} else
{var or__3548__auto____2530 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2530))
{return or__3548__auto____2530;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2537 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2531 = coll;

if(cljs.core.truth_(and__3546__auto____2531))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2531;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2532 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2532))
{return or__3548__auto____2532;
} else
{var or__3548__auto____2533 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2533))
{return or__3548__auto____2533;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2538 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2534 = coll;

if(cljs.core.truth_(and__3546__auto____2534))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2534;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2535 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2535))
{return or__3548__auto____2535;
} else
{var or__3548__auto____2536 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2536))
{return or__3548__auto____2536;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2537.call(this,coll,f);
case  3 :
return _reduce__2538.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2540 = o;

if(cljs.core.truth_(and__3546__auto____2540))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2540;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2541 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2541))
{return or__3548__auto____2541;
} else
{var or__3548__auto____2542 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2542))
{return or__3548__auto____2542;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2543 = o;

if(cljs.core.truth_(and__3546__auto____2543))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2543;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2544 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2544))
{return or__3548__auto____2544;
} else
{var or__3548__auto____2545 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2545))
{return or__3548__auto____2545;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2546 = o;

if(cljs.core.truth_(and__3546__auto____2546))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2546;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2547 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2547))
{return or__3548__auto____2547;
} else
{var or__3548__auto____2548 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2548))
{return or__3548__auto____2548;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2549 = o;

if(cljs.core.truth_(and__3546__auto____2549))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2549;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2550 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2550))
{return or__3548__auto____2550;
} else
{var or__3548__auto____2551 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2551))
{return or__3548__auto____2551;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2552 = d;

if(cljs.core.truth_(and__3546__auto____2552))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2552;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2553 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2553))
{return or__3548__auto____2553;
} else
{var or__3548__auto____2554 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2554))
{return or__3548__auto____2554;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2555 = this$;

if(cljs.core.truth_(and__3546__auto____2555))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2555;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2556 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2556))
{return or__3548__auto____2556;
} else
{var or__3548__auto____2557 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2557))
{return or__3548__auto____2557;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2558 = this$;

if(cljs.core.truth_(and__3546__auto____2558))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2558;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2559 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2559))
{return or__3548__auto____2559;
} else
{var or__3548__auto____2560 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2560))
{return or__3548__auto____2560;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2561 = this$;

if(cljs.core.truth_(and__3546__auto____2561))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2561;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2562 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2562))
{return or__3548__auto____2562;
} else
{var or__3548__auto____2563 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2563))
{return or__3548__auto____2563;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2564 = null;
var G__2564__2565 = (function (o,k){
return null;
});
var G__2564__2566 = (function (o,k,not_found){
return not_found;
});
G__2564 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2564__2565.call(this,o,k);
case  3 :
return G__2564__2566.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2564;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2568 = null;
var G__2568__2569 = (function (_,f){
return f.call(null);
});
var G__2568__2570 = (function (_,f,start){
return start;
});
G__2568 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2568__2569.call(this,_,f);
case  3 :
return G__2568__2570.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2568;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2572 = null;
var G__2572__2573 = (function (_,n){
return null;
});
var G__2572__2574 = (function (_,n,not_found){
return not_found;
});
G__2572 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2572__2573.call(this,_,n);
case  3 :
return G__2572__2574.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2572;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2582 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2576 = cljs.core._nth.call(null,cicoll,0);
var n__2577 = 1;

while(true){
if(cljs.core.truth_((n__2577 < cljs.core._count.call(null,cicoll))))
{{
var G__2586 = f.call(null,val__2576,cljs.core._nth.call(null,cicoll,n__2577));
var G__2587 = (n__2577 + 1);
val__2576 = G__2586;
n__2577 = G__2587;
continue;
}
} else
{return val__2576;
}
break;
}
}
});
var ci_reduce__2583 = (function (cicoll,f,val){
var val__2578 = val;
var n__2579 = 0;

while(true){
if(cljs.core.truth_((n__2579 < cljs.core._count.call(null,cicoll))))
{{
var G__2588 = f.call(null,val__2578,cljs.core._nth.call(null,cicoll,n__2579));
var G__2589 = (n__2579 + 1);
val__2578 = G__2588;
n__2579 = G__2589;
continue;
}
} else
{return val__2578;
}
break;
}
});
var ci_reduce__2584 = (function (cicoll,f,val,idx){
var val__2580 = val;
var n__2581 = idx;

while(true){
if(cljs.core.truth_((n__2581 < cljs.core._count.call(null,cicoll))))
{{
var G__2590 = f.call(null,val__2580,cljs.core._nth.call(null,cicoll,n__2581));
var G__2591 = (n__2581 + 1);
val__2580 = G__2590;
n__2581 = G__2591;
continue;
}
} else
{return val__2580;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2582.call(this,cicoll,f);
case  3 :
return ci_reduce__2583.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2584.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2592 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2605 = null;
var G__2605__2606 = (function (coll,f){
var this__2593 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2593.a[this__2593.i]),(this__2593.i + 1));
});
var G__2605__2607 = (function (coll,f,start){
var this__2594 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2594.i);
});
G__2605 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2605__2606.call(this,coll,f);
case  3 :
return G__2605__2607.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2605;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2595 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2596 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2609 = null;
var G__2609__2610 = (function (coll,n){
var this__2597 = this;
var i__2598 = (n + this__2597.i);

if(cljs.core.truth_((i__2598 < this__2597.a.length)))
{return (this__2597.a[i__2598]);
} else
{return null;
}
});
var G__2609__2611 = (function (coll,n,not_found){
var this__2599 = this;
var i__2600 = (n + this__2599.i);

if(cljs.core.truth_((i__2600 < this__2599.a.length)))
{return (this__2599.a[i__2600]);
} else
{return not_found;
}
});
G__2609 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2609__2610.call(this,coll,n);
case  3 :
return G__2609__2611.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2609;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2601 = this;
return (this__2601.a.length - this__2601.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2602 = this;
return (this__2602.a[this__2602.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2603 = this;
if(cljs.core.truth_(((this__2603.i + 1) < this__2603.a.length)))
{return (new cljs.core.IndexedSeq(this__2603.a,(this__2603.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2604 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2613 = null;
var G__2613__2614 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2613__2615 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2613 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2613__2614.call(this,array,f);
case  3 :
return G__2613__2615.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2613;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2617 = null;
var G__2617__2618 = (function (array,k){
return (array[k]);
});
var G__2617__2619 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2617 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2617__2618.call(this,array,k);
case  3 :
return G__2617__2619.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2617;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2621 = null;
var G__2621__2622 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2621__2623 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2621 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2621__2622.call(this,array,n);
case  3 :
return G__2621__2623.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2621;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2625 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2625))
{var s__2626 = temp__3698__auto____2625;

return cljs.core._first.call(null,s__2626);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2627 = cljs.core.next.call(null,s);
s = G__2627;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2628 = cljs.core.seq.call(null,x);
var n__2629 = 0;

while(true){
if(cljs.core.truth_(s__2628))
{{
var G__2630 = cljs.core.next.call(null,s__2628);
var G__2631 = (n__2629 + 1);
s__2628 = G__2630;
n__2629 = G__2631;
continue;
}
} else
{return n__2629;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2632 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2633 = (function() { 
var G__2635__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2636 = conj.call(null,coll,x);
var G__2637 = cljs.core.first.call(null,xs);
var G__2638 = cljs.core.next.call(null,xs);
coll = G__2636;
x = G__2637;
xs = G__2638;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2635 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2635__delegate.call(this, coll, x, xs);
};
G__2635.cljs$lang$maxFixedArity = 2;
G__2635.cljs$lang$applyTo = (function (arglist__2639){
var coll = cljs.core.first(arglist__2639);
var x = cljs.core.first(cljs.core.next(arglist__2639));
var xs = cljs.core.rest(cljs.core.next(arglist__2639));
return G__2635__delegate.call(this, coll, x, xs);
});
return G__2635;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2632.call(this,coll,x);
default:
return conj__2633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2633.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2640 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2641 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2640.call(this,coll,n);
case  3 :
return nth__2641.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2643 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2644 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2643.call(this,o,k);
case  3 :
return get__2644.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2647 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2648 = (function() { 
var G__2650__delegate = function (coll,k,v,kvs){
while(true){
var ret__2646 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2651 = ret__2646;
var G__2652 = cljs.core.first.call(null,kvs);
var G__2653 = cljs.core.second.call(null,kvs);
var G__2654 = cljs.core.nnext.call(null,kvs);
coll = G__2651;
k = G__2652;
v = G__2653;
kvs = G__2654;
continue;
}
} else
{return ret__2646;
}
break;
}
};
var G__2650 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2650__delegate.call(this, coll, k, v, kvs);
};
G__2650.cljs$lang$maxFixedArity = 3;
G__2650.cljs$lang$applyTo = (function (arglist__2655){
var coll = cljs.core.first(arglist__2655);
var k = cljs.core.first(cljs.core.next(arglist__2655));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2655)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2655)));
return G__2650__delegate.call(this, coll, k, v, kvs);
});
return G__2650;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2647.call(this,coll,k,v);
default:
return assoc__2648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2648.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2657 = (function (coll){
return coll;
});
var dissoc__2658 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2659 = (function() { 
var G__2661__delegate = function (coll,k,ks){
while(true){
var ret__2656 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2662 = ret__2656;
var G__2663 = cljs.core.first.call(null,ks);
var G__2664 = cljs.core.next.call(null,ks);
coll = G__2662;
k = G__2663;
ks = G__2664;
continue;
}
} else
{return ret__2656;
}
break;
}
};
var G__2661 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2661__delegate.call(this, coll, k, ks);
};
G__2661.cljs$lang$maxFixedArity = 2;
G__2661.cljs$lang$applyTo = (function (arglist__2665){
var coll = cljs.core.first(arglist__2665);
var k = cljs.core.first(cljs.core.next(arglist__2665));
var ks = cljs.core.rest(cljs.core.next(arglist__2665));
return G__2661__delegate.call(this, coll, k, ks);
});
return G__2661;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2657.call(this,coll);
case  2 :
return dissoc__2658.call(this,coll,k);
default:
return dissoc__2659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2659.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__319__auto____2666 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2667 = x__319__auto____2666;

if(cljs.core.truth_(and__3546__auto____2667))
{var and__3546__auto____2668 = x__319__auto____2666.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2668))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2666));
} else
{return and__3546__auto____2668;
}
} else
{return and__3546__auto____2667;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____2666);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2670 = (function (coll){
return coll;
});
var disj__2671 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2672 = (function() { 
var G__2674__delegate = function (coll,k,ks){
while(true){
var ret__2669 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2675 = ret__2669;
var G__2676 = cljs.core.first.call(null,ks);
var G__2677 = cljs.core.next.call(null,ks);
coll = G__2675;
k = G__2676;
ks = G__2677;
continue;
}
} else
{return ret__2669;
}
break;
}
};
var G__2674 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2674__delegate.call(this, coll, k, ks);
};
G__2674.cljs$lang$maxFixedArity = 2;
G__2674.cljs$lang$applyTo = (function (arglist__2678){
var coll = cljs.core.first(arglist__2678);
var k = cljs.core.first(cljs.core.next(arglist__2678));
var ks = cljs.core.rest(cljs.core.next(arglist__2678));
return G__2674__delegate.call(this, coll, k, ks);
});
return G__2674;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2670.call(this,coll);
case  2 :
return disj__2671.call(this,coll,k);
default:
return disj__2672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2672.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2679 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2680 = x__319__auto____2679;

if(cljs.core.truth_(and__3546__auto____2680))
{var and__3546__auto____2681 = x__319__auto____2679.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2681))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2679));
} else
{return and__3546__auto____2681;
}
} else
{return and__3546__auto____2680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__319__auto____2679);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2682 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2683 = x__319__auto____2682;

if(cljs.core.truth_(and__3546__auto____2683))
{var and__3546__auto____2684 = x__319__auto____2682.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2684))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2682));
} else
{return and__3546__auto____2684;
}
} else
{return and__3546__auto____2683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__319__auto____2682);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__319__auto____2685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2686 = x__319__auto____2685;

if(cljs.core.truth_(and__3546__auto____2686))
{var and__3546__auto____2687 = x__319__auto____2685.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2687))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2685));
} else
{return and__3546__auto____2687;
}
} else
{return and__3546__auto____2686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__319__auto____2685);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__319__auto____2688 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2689 = x__319__auto____2688;

if(cljs.core.truth_(and__3546__auto____2689))
{var and__3546__auto____2690 = x__319__auto____2688.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2690))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2688));
} else
{return and__3546__auto____2690;
}
} else
{return and__3546__auto____2689;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__319__auto____2688);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__319__auto____2691 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2692 = x__319__auto____2691;

if(cljs.core.truth_(and__3546__auto____2692))
{var and__3546__auto____2693 = x__319__auto____2691.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2693))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2691));
} else
{return and__3546__auto____2693;
}
} else
{return and__3546__auto____2692;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__319__auto____2691);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2694 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2695 = x__319__auto____2694;

if(cljs.core.truth_(and__3546__auto____2695))
{var and__3546__auto____2696 = x__319__auto____2694.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2696))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2694));
} else
{return and__3546__auto____2696;
}
} else
{return and__3546__auto____2695;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__319__auto____2694);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__319__auto____2697 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2698 = x__319__auto____2697;

if(cljs.core.truth_(and__3546__auto____2698))
{var and__3546__auto____2699 = x__319__auto____2697.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2699))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2697));
} else
{return and__3546__auto____2699;
}
} else
{return and__3546__auto____2698;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__319__auto____2697);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2700 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2700.push(key);
}));
return keys__2700;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__319__auto____2701 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2702 = x__319__auto____2701;

if(cljs.core.truth_(and__3546__auto____2702))
{var and__3546__auto____2703 = x__319__auto____2701.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2703))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2701));
} else
{return and__3546__auto____2703;
}
} else
{return and__3546__auto____2702;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__319__auto____2701);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2704 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2704))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2705 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2705))
{return or__3548__auto____2705;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2704;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2706 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2706))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2706;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2707 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2707))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2707;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2708 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2708))
{return (n == n.toFixed());
} else
{return and__3546__auto____2708;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2709 = coll;

if(cljs.core.truth_(and__3546__auto____2709))
{var and__3546__auto____2710 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2710))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2710;
}
} else
{return and__3546__auto____2709;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2715 = (function (x){
return true;
});
var distinct_QMARK___2716 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2717 = (function() { 
var G__2719__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2711 = cljs.core.set([y,x]);
var xs__2712 = more;

while(true){
var x__2713 = cljs.core.first.call(null,xs__2712);
var etc__2714 = cljs.core.next.call(null,xs__2712);

if(cljs.core.truth_(xs__2712))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2711,x__2713)))
{return false;
} else
{{
var G__2720 = cljs.core.conj.call(null,s__2711,x__2713);
var G__2721 = etc__2714;
s__2711 = G__2720;
xs__2712 = G__2721;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2719 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2719__delegate.call(this, x, y, more);
};
G__2719.cljs$lang$maxFixedArity = 2;
G__2719.cljs$lang$applyTo = (function (arglist__2722){
var x = cljs.core.first(arglist__2722);
var y = cljs.core.first(cljs.core.next(arglist__2722));
var more = cljs.core.rest(cljs.core.next(arglist__2722));
return G__2719__delegate.call(this, x, y, more);
});
return G__2719;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2715.call(this,x);
case  2 :
return distinct_QMARK___2716.call(this,x,y);
default:
return distinct_QMARK___2717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2717.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2723 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2723)))
{return r__2723;
} else
{if(cljs.core.truth_(r__2723))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2725 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2726 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2724 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2724,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2724);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2725.call(this,comp);
case  2 :
return sort__2726.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2728 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2729 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2728.call(this,keyfn,comp);
case  3 :
return sort_by__2729.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2731 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2732 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2731.call(this,f,val);
case  3 :
return reduce__2732.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2738 = (function (f,coll){
var temp__3695__auto____2734 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2734))
{var s__2735 = temp__3695__auto____2734;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2735),cljs.core.next.call(null,s__2735));
} else
{return f.call(null);
}
});
var seq_reduce__2739 = (function (f,val,coll){
var val__2736 = val;
var coll__2737 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2737))
{{
var G__2741 = f.call(null,val__2736,cljs.core.first.call(null,coll__2737));
var G__2742 = cljs.core.next.call(null,coll__2737);
val__2736 = G__2741;
coll__2737 = G__2742;
continue;
}
} else
{return val__2736;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2738.call(this,f,val);
case  3 :
return seq_reduce__2739.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2743 = null;
var G__2743__2744 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2743__2745 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2743 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2743__2744.call(this,coll,f);
case  3 :
return G__2743__2745.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2743;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2747 = (function (){
return 0;
});
var _PLUS___2748 = (function (x){
return x;
});
var _PLUS___2749 = (function (x,y){
return (x + y);
});
var _PLUS___2750 = (function() { 
var G__2752__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2752 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2752__delegate.call(this, x, y, more);
};
G__2752.cljs$lang$maxFixedArity = 2;
G__2752.cljs$lang$applyTo = (function (arglist__2753){
var x = cljs.core.first(arglist__2753);
var y = cljs.core.first(cljs.core.next(arglist__2753));
var more = cljs.core.rest(cljs.core.next(arglist__2753));
return G__2752__delegate.call(this, x, y, more);
});
return G__2752;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2747.call(this);
case  1 :
return _PLUS___2748.call(this,x);
case  2 :
return _PLUS___2749.call(this,x,y);
default:
return _PLUS___2750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2750.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2754 = (function (x){
return (- x);
});
var ___2755 = (function (x,y){
return (x - y);
});
var ___2756 = (function() { 
var G__2758__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2758 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2758__delegate.call(this, x, y, more);
};
G__2758.cljs$lang$maxFixedArity = 2;
G__2758.cljs$lang$applyTo = (function (arglist__2759){
var x = cljs.core.first(arglist__2759);
var y = cljs.core.first(cljs.core.next(arglist__2759));
var more = cljs.core.rest(cljs.core.next(arglist__2759));
return G__2758__delegate.call(this, x, y, more);
});
return G__2758;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2754.call(this,x);
case  2 :
return ___2755.call(this,x,y);
default:
return ___2756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2756.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2760 = (function (){
return 1;
});
var _STAR___2761 = (function (x){
return x;
});
var _STAR___2762 = (function (x,y){
return (x * y);
});
var _STAR___2763 = (function() { 
var G__2765__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2765 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2765__delegate.call(this, x, y, more);
};
G__2765.cljs$lang$maxFixedArity = 2;
G__2765.cljs$lang$applyTo = (function (arglist__2766){
var x = cljs.core.first(arglist__2766);
var y = cljs.core.first(cljs.core.next(arglist__2766));
var more = cljs.core.rest(cljs.core.next(arglist__2766));
return G__2765__delegate.call(this, x, y, more);
});
return G__2765;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2760.call(this);
case  1 :
return _STAR___2761.call(this,x);
case  2 :
return _STAR___2762.call(this,x,y);
default:
return _STAR___2763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2763.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2767 = (function (x){
return (1 / x);
});
var _SLASH___2768 = (function (x,y){
return (x / y);
});
var _SLASH___2769 = (function() { 
var G__2771__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2771__delegate.call(this, x, y, more);
};
G__2771.cljs$lang$maxFixedArity = 2;
G__2771.cljs$lang$applyTo = (function (arglist__2772){
var x = cljs.core.first(arglist__2772);
var y = cljs.core.first(cljs.core.next(arglist__2772));
var more = cljs.core.rest(cljs.core.next(arglist__2772));
return G__2771__delegate.call(this, x, y, more);
});
return G__2771;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2767.call(this,x);
case  2 :
return _SLASH___2768.call(this,x,y);
default:
return _SLASH___2769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2769.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2773 = (function (x){
return true;
});
var _LT___2774 = (function (x,y){
return (x < y);
});
var _LT___2775 = (function() { 
var G__2777__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2778 = y;
var G__2779 = cljs.core.first.call(null,more);
var G__2780 = cljs.core.next.call(null,more);
x = G__2778;
y = G__2779;
more = G__2780;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2777 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2777__delegate.call(this, x, y, more);
};
G__2777.cljs$lang$maxFixedArity = 2;
G__2777.cljs$lang$applyTo = (function (arglist__2781){
var x = cljs.core.first(arglist__2781);
var y = cljs.core.first(cljs.core.next(arglist__2781));
var more = cljs.core.rest(cljs.core.next(arglist__2781));
return G__2777__delegate.call(this, x, y, more);
});
return G__2777;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2773.call(this,x);
case  2 :
return _LT___2774.call(this,x,y);
default:
return _LT___2775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2775.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2782 = (function (x){
return true;
});
var _LT__EQ___2783 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2784 = (function() { 
var G__2786__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2787 = y;
var G__2788 = cljs.core.first.call(null,more);
var G__2789 = cljs.core.next.call(null,more);
x = G__2787;
y = G__2788;
more = G__2789;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2786 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2786__delegate.call(this, x, y, more);
};
G__2786.cljs$lang$maxFixedArity = 2;
G__2786.cljs$lang$applyTo = (function (arglist__2790){
var x = cljs.core.first(arglist__2790);
var y = cljs.core.first(cljs.core.next(arglist__2790));
var more = cljs.core.rest(cljs.core.next(arglist__2790));
return G__2786__delegate.call(this, x, y, more);
});
return G__2786;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2782.call(this,x);
case  2 :
return _LT__EQ___2783.call(this,x,y);
default:
return _LT__EQ___2784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2784.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2791 = (function (x){
return true;
});
var _GT___2792 = (function (x,y){
return (x > y);
});
var _GT___2793 = (function() { 
var G__2795__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2796 = y;
var G__2797 = cljs.core.first.call(null,more);
var G__2798 = cljs.core.next.call(null,more);
x = G__2796;
y = G__2797;
more = G__2798;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2795 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2795__delegate.call(this, x, y, more);
};
G__2795.cljs$lang$maxFixedArity = 2;
G__2795.cljs$lang$applyTo = (function (arglist__2799){
var x = cljs.core.first(arglist__2799);
var y = cljs.core.first(cljs.core.next(arglist__2799));
var more = cljs.core.rest(cljs.core.next(arglist__2799));
return G__2795__delegate.call(this, x, y, more);
});
return G__2795;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2791.call(this,x);
case  2 :
return _GT___2792.call(this,x,y);
default:
return _GT___2793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2793.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2800 = (function (x){
return true;
});
var _GT__EQ___2801 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2802 = (function() { 
var G__2804__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2805 = y;
var G__2806 = cljs.core.first.call(null,more);
var G__2807 = cljs.core.next.call(null,more);
x = G__2805;
y = G__2806;
more = G__2807;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2804 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2804__delegate.call(this, x, y, more);
};
G__2804.cljs$lang$maxFixedArity = 2;
G__2804.cljs$lang$applyTo = (function (arglist__2808){
var x = cljs.core.first(arglist__2808);
var y = cljs.core.first(cljs.core.next(arglist__2808));
var more = cljs.core.rest(cljs.core.next(arglist__2808));
return G__2804__delegate.call(this, x, y, more);
});
return G__2804;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2800.call(this,x);
case  2 :
return _GT__EQ___2801.call(this,x,y);
default:
return _GT__EQ___2802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2802.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2809 = (function (x){
return x;
});
var max__2810 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2811 = (function() { 
var G__2813__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2813 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2813__delegate.call(this, x, y, more);
};
G__2813.cljs$lang$maxFixedArity = 2;
G__2813.cljs$lang$applyTo = (function (arglist__2814){
var x = cljs.core.first(arglist__2814);
var y = cljs.core.first(cljs.core.next(arglist__2814));
var more = cljs.core.rest(cljs.core.next(arglist__2814));
return G__2813__delegate.call(this, x, y, more);
});
return G__2813;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2809.call(this,x);
case  2 :
return max__2810.call(this,x,y);
default:
return max__2811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2811.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2815 = (function (x){
return x;
});
var min__2816 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2817 = (function() { 
var G__2819__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2819 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2819__delegate.call(this, x, y, more);
};
G__2819.cljs$lang$maxFixedArity = 2;
G__2819.cljs$lang$applyTo = (function (arglist__2820){
var x = cljs.core.first(arglist__2820);
var y = cljs.core.first(cljs.core.next(arglist__2820));
var more = cljs.core.rest(cljs.core.next(arglist__2820));
return G__2819__delegate.call(this, x, y, more);
});
return G__2819;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2815.call(this,x);
case  2 :
return min__2816.call(this,x,y);
default:
return min__2817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2817.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2821 = (n % d);

return cljs.core.fix.call(null,((n - rem__2821) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2822 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2822));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2823 = (function (){
return Math.random.call(null);
});
var rand__2824 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2823.call(this);
case  1 :
return rand__2824.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2826 = (function (x){
return true;
});
var _EQ__EQ___2827 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2828 = (function() { 
var G__2830__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2831 = y;
var G__2832 = cljs.core.first.call(null,more);
var G__2833 = cljs.core.next.call(null,more);
x = G__2831;
y = G__2832;
more = G__2833;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2830 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2830__delegate.call(this, x, y, more);
};
G__2830.cljs$lang$maxFixedArity = 2;
G__2830.cljs$lang$applyTo = (function (arglist__2834){
var x = cljs.core.first(arglist__2834);
var y = cljs.core.first(cljs.core.next(arglist__2834));
var more = cljs.core.rest(cljs.core.next(arglist__2834));
return G__2830__delegate.call(this, x, y, more);
});
return G__2830;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2826.call(this,x);
case  2 :
return _EQ__EQ___2827.call(this,x,y);
default:
return _EQ__EQ___2828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2828.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2835 = n;
var xs__2836 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2837 = xs__2836;

if(cljs.core.truth_(and__3546__auto____2837))
{return (n__2835 > 0);
} else
{return and__3546__auto____2837;
}
})()))
{{
var G__2838 = (n__2835 - 1);
var G__2839 = cljs.core.next.call(null,xs__2836);
n__2835 = G__2838;
xs__2836 = G__2839;
continue;
}
} else
{return xs__2836;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2844 = null;
var G__2844__2845 = (function (coll,n){
var temp__3695__auto____2840 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2840))
{var xs__2841 = temp__3695__auto____2840;

return cljs.core.first.call(null,xs__2841);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2844__2846 = (function (coll,n,not_found){
var temp__3695__auto____2842 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2842))
{var xs__2843 = temp__3695__auto____2842;

return cljs.core.first.call(null,xs__2843);
} else
{return not_found;
}
});
G__2844 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2844__2845.call(this,coll,n);
case  3 :
return G__2844__2846.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2844;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2848 = (function (){
return "";
});
var str_STAR___2849 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2850 = (function() { 
var G__2852__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2853 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2854 = cljs.core.next.call(null,more);
sb = G__2853;
more = G__2854;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2852 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2852__delegate.call(this, x, ys);
};
G__2852.cljs$lang$maxFixedArity = 1;
G__2852.cljs$lang$applyTo = (function (arglist__2855){
var x = cljs.core.first(arglist__2855);
var ys = cljs.core.rest(arglist__2855);
return G__2852__delegate.call(this, x, ys);
});
return G__2852;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2848.call(this);
case  1 :
return str_STAR___2849.call(this,x);
default:
return str_STAR___2850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2850.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2856 = (function (){
return "";
});
var str__2857 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2858 = (function() { 
var G__2860__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2860 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2860__delegate.call(this, x, ys);
};
G__2860.cljs$lang$maxFixedArity = 1;
G__2860.cljs$lang$applyTo = (function (arglist__2861){
var x = cljs.core.first(arglist__2861);
var ys = cljs.core.rest(arglist__2861);
return G__2860__delegate.call(this, x, ys);
});
return G__2860;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2856.call(this);
case  1 :
return str__2857.call(this,x);
default:
return str__2858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2858.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2862 = (function (s,start){
return s.substring(start);
});
var subs__2863 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2862.call(this,s,start);
case  3 :
return subs__2863.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2865 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2866 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2865.call(this,ns);
case  2 :
return symbol__2866.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2868 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2869 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2868.call(this,ns);
case  2 :
return keyword__2869.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2871 = cljs.core.seq.call(null,x);
var ys__2872 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2871)))
{return cljs.core.nil_QMARK_.call(null,ys__2872);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2872)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2871),cljs.core.first.call(null,ys__2872))))
{{
var G__2873 = cljs.core.next.call(null,xs__2871);
var G__2874 = cljs.core.next.call(null,ys__2872);
xs__2871 = G__2873;
ys__2872 = G__2874;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2875_SHARP_,p2__2876_SHARP_){
return cljs.core.hash_combine.call(null,p1__2875_SHARP_,cljs.core.hash.call(null,p2__2876_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2877__2878 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2877__2878))
{var G__2880__2882 = cljs.core.first.call(null,G__2877__2878);
var vec__2881__2883 = G__2880__2882;
var key_name__2884 = cljs.core.nth.call(null,vec__2881__2883,0,null);
var f__2885 = cljs.core.nth.call(null,vec__2881__2883,1,null);
var G__2877__2886 = G__2877__2878;

var G__2880__2887 = G__2880__2882;
var G__2877__2888 = G__2877__2886;

while(true){
var vec__2889__2890 = G__2880__2887;
var key_name__2891 = cljs.core.nth.call(null,vec__2889__2890,0,null);
var f__2892 = cljs.core.nth.call(null,vec__2889__2890,1,null);
var G__2877__2893 = G__2877__2888;

var str_name__2894 = cljs.core.name.call(null,key_name__2891);

obj[str_name__2894] = f__2892;
var temp__3698__auto____2895 = cljs.core.next.call(null,G__2877__2893);

if(cljs.core.truth_(temp__3698__auto____2895))
{var G__2877__2896 = temp__3698__auto____2895;

{
var G__2897 = cljs.core.first.call(null,G__2877__2896);
var G__2898 = G__2877__2896;
G__2880__2887 = G__2897;
G__2877__2888 = G__2898;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2899 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2900 = this;
return (new cljs.core.List(this__2900.meta,o,coll,(this__2900.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2901 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2902 = this;
return this__2902.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2903 = this;
return this__2903.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2904 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2905 = this;
return this__2905.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2906 = this;
return this__2906.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2907 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2908 = this;
return (new cljs.core.List(meta,this__2908.first,this__2908.rest,this__2908.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2909 = this;
return this__2909.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2910 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2911 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2912 = this;
return (new cljs.core.List(this__2912.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2913 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2914 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2915 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2916 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2917 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2918 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2919 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2920 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2921 = this;
return this__2921.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2922 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2923){
var items = cljs.core.seq( arglist__2923 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2924 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2925 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2926 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2927 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2927.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2928 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2929 = this;
return this__2929.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2930 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2930.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2930.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2931 = this;
return this__2931.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2932 = this;
return (new cljs.core.Cons(meta,this__2932.first,this__2932.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2933 = null;
var G__2933__2934 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2933__2935 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2933 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2933__2934.call(this,string,f);
case  3 :
return G__2933__2935.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2933;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2937 = null;
var G__2937__2938 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2937__2939 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2937 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2937__2938.call(this,string,k);
case  3 :
return G__2937__2939.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2937;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2941 = null;
var G__2941__2942 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2941__2943 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2941 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2941__2942.call(this,string,n);
case  3 :
return G__2941__2943.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2941;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2945 = null;
var G__2945__2946 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2945__2947 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2945 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2945__2946.call(this,_,coll);
case  3 :
return G__2945__2947.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2945;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2949 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2949;
} else
{lazy_seq.x = x__2949.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2950 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2951 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2952 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2953 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2953.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2954 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2955 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2956 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2957 = this;
return this__2957.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2958 = this;
return (new cljs.core.LazySeq(meta,this__2958.realized,this__2958.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2959 = cljs.core.array.call(null);

var s__2960 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2960)))
{ary__2959.push(cljs.core.first.call(null,s__2960));
{
var G__2961 = cljs.core.next.call(null,s__2960);
s__2960 = G__2961;
continue;
}
} else
{return ary__2959;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2962 = s;
var i__2963 = n;
var sum__2964 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2965 = (i__2963 > 0);

if(cljs.core.truth_(and__3546__auto____2965))
{return cljs.core.seq.call(null,s__2962);
} else
{return and__3546__auto____2965;
}
})()))
{{
var G__2966 = cljs.core.next.call(null,s__2962);
var G__2967 = (i__2963 - 1);
var G__2968 = (sum__2964 + 1);
s__2962 = G__2966;
i__2963 = G__2967;
sum__2964 = G__2968;
continue;
}
} else
{return sum__2964;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2972 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2973 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2974 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2969 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2969))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2969),concat.call(null,cljs.core.rest.call(null,s__2969),y));
} else
{return y;
}
})));
});
var concat__2975 = (function() { 
var G__2977__delegate = function (x,y,zs){
var cat__2971 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2970 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2970))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2970),cat.call(null,cljs.core.rest.call(null,xys__2970),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2971.call(null,concat.call(null,x,y),zs);
};
var G__2977 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2977__delegate.call(this, x, y, zs);
};
G__2977.cljs$lang$maxFixedArity = 2;
G__2977.cljs$lang$applyTo = (function (arglist__2978){
var x = cljs.core.first(arglist__2978);
var y = cljs.core.first(cljs.core.next(arglist__2978));
var zs = cljs.core.rest(cljs.core.next(arglist__2978));
return G__2977__delegate.call(this, x, y, zs);
});
return G__2977;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2972.call(this);
case  1 :
return concat__2973.call(this,x);
case  2 :
return concat__2974.call(this,x,y);
default:
return concat__2975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2975.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2979 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2980 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2981 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2982 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2983 = (function() { 
var G__2985__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2985 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2985__delegate.call(this, a, b, c, d, more);
};
G__2985.cljs$lang$maxFixedArity = 4;
G__2985.cljs$lang$applyTo = (function (arglist__2986){
var a = cljs.core.first(arglist__2986);
var b = cljs.core.first(cljs.core.next(arglist__2986));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2986)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2986))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2986))));
return G__2985__delegate.call(this, a, b, c, d, more);
});
return G__2985;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2979.call(this,a);
case  2 :
return list_STAR___2980.call(this,a,b);
case  3 :
return list_STAR___2981.call(this,a,b,c);
case  4 :
return list_STAR___2982.call(this,a,b,c,d);
default:
return list_STAR___2983.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2983.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2996 = (function (f,args){
var fixed_arity__2987 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2987 + 1)) <= fixed_arity__2987)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2997 = (function (f,x,args){
var arglist__2988 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2989 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2988,fixed_arity__2989) <= fixed_arity__2989)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2988));
} else
{return f.cljs$lang$applyTo(arglist__2988);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2988));
}
});
var apply__2998 = (function (f,x,y,args){
var arglist__2990 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2991 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2990,fixed_arity__2991) <= fixed_arity__2991)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2990));
} else
{return f.cljs$lang$applyTo(arglist__2990);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2990));
}
});
var apply__2999 = (function (f,x,y,z,args){
var arglist__2992 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2993 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2992,fixed_arity__2993) <= fixed_arity__2993)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2992));
} else
{return f.cljs$lang$applyTo(arglist__2992);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2992));
}
});
var apply__3000 = (function() { 
var G__3002__delegate = function (f,a,b,c,d,args){
var arglist__2994 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2995 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2994,fixed_arity__2995) <= fixed_arity__2995)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2994));
} else
{return f.cljs$lang$applyTo(arglist__2994);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2994));
}
};
var G__3002 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3002__delegate.call(this, f, a, b, c, d, args);
};
G__3002.cljs$lang$maxFixedArity = 5;
G__3002.cljs$lang$applyTo = (function (arglist__3003){
var f = cljs.core.first(arglist__3003);
var a = cljs.core.first(cljs.core.next(arglist__3003));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3003)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3003))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3003)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3003)))));
return G__3002__delegate.call(this, f, a, b, c, d, args);
});
return G__3002;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2996.call(this,f,a);
case  3 :
return apply__2997.call(this,f,a,b);
case  4 :
return apply__2998.call(this,f,a,b,c);
case  5 :
return apply__2999.call(this,f,a,b,c,d);
default:
return apply__3000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3000.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3004){
var obj = cljs.core.first(arglist__3004);
var f = cljs.core.first(cljs.core.next(arglist__3004));
var args = cljs.core.rest(cljs.core.next(arglist__3004));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3005 = (function (x){
return false;
});
var not_EQ___3006 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3007 = (function() { 
var G__3009__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3009 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3009__delegate.call(this, x, y, more);
};
G__3009.cljs$lang$maxFixedArity = 2;
G__3009.cljs$lang$applyTo = (function (arglist__3010){
var x = cljs.core.first(arglist__3010);
var y = cljs.core.first(cljs.core.next(arglist__3010));
var more = cljs.core.rest(cljs.core.next(arglist__3010));
return G__3009__delegate.call(this, x, y, more);
});
return G__3009;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3005.call(this,x);
case  2 :
return not_EQ___3006.call(this,x,y);
default:
return not_EQ___3007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3007.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3011 = pred;
var G__3012 = cljs.core.next.call(null,coll);
pred = G__3011;
coll = G__3012;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3013 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3013))
{return or__3548__auto____3013;
} else
{{
var G__3014 = pred;
var G__3015 = cljs.core.next.call(null,coll);
pred = G__3014;
coll = G__3015;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3016 = null;
var G__3016__3017 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3016__3018 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3016__3019 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3016__3020 = (function() { 
var G__3022__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3022 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3022__delegate.call(this, x, y, zs);
};
G__3022.cljs$lang$maxFixedArity = 2;
G__3022.cljs$lang$applyTo = (function (arglist__3023){
var x = cljs.core.first(arglist__3023);
var y = cljs.core.first(cljs.core.next(arglist__3023));
var zs = cljs.core.rest(cljs.core.next(arglist__3023));
return G__3022__delegate.call(this, x, y, zs);
});
return G__3022;
})()
;
G__3016 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3016__3017.call(this);
case  1 :
return G__3016__3018.call(this,x);
case  2 :
return G__3016__3019.call(this,x,y);
default:
return G__3016__3020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3016.cljs$lang$maxFixedArity = 2;
G__3016.cljs$lang$applyTo = G__3016__3020.cljs$lang$applyTo;
return G__3016;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3024__delegate = function (args){
return x;
};
var G__3024 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3024__delegate.call(this, args);
};
G__3024.cljs$lang$maxFixedArity = 0;
G__3024.cljs$lang$applyTo = (function (arglist__3025){
var args = cljs.core.seq( arglist__3025 );;
return G__3024__delegate.call(this, args);
});
return G__3024;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3029 = (function (){
return cljs.core.identity;
});
var comp__3030 = (function (f){
return f;
});
var comp__3031 = (function (f,g){
return (function() {
var G__3035 = null;
var G__3035__3036 = (function (){
return f.call(null,g.call(null));
});
var G__3035__3037 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3035__3038 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3035__3039 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3035__3040 = (function() { 
var G__3042__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3042 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3042__delegate.call(this, x, y, z, args);
};
G__3042.cljs$lang$maxFixedArity = 3;
G__3042.cljs$lang$applyTo = (function (arglist__3043){
var x = cljs.core.first(arglist__3043);
var y = cljs.core.first(cljs.core.next(arglist__3043));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3043)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3043)));
return G__3042__delegate.call(this, x, y, z, args);
});
return G__3042;
})()
;
G__3035 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3035__3036.call(this);
case  1 :
return G__3035__3037.call(this,x);
case  2 :
return G__3035__3038.call(this,x,y);
case  3 :
return G__3035__3039.call(this,x,y,z);
default:
return G__3035__3040.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3035.cljs$lang$maxFixedArity = 3;
G__3035.cljs$lang$applyTo = G__3035__3040.cljs$lang$applyTo;
return G__3035;
})()
});
var comp__3032 = (function (f,g,h){
return (function() {
var G__3044 = null;
var G__3044__3045 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3044__3046 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3044__3047 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3044__3048 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3044__3049 = (function() { 
var G__3051__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3051__delegate.call(this, x, y, z, args);
};
G__3051.cljs$lang$maxFixedArity = 3;
G__3051.cljs$lang$applyTo = (function (arglist__3052){
var x = cljs.core.first(arglist__3052);
var y = cljs.core.first(cljs.core.next(arglist__3052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3052)));
return G__3051__delegate.call(this, x, y, z, args);
});
return G__3051;
})()
;
G__3044 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3044__3045.call(this);
case  1 :
return G__3044__3046.call(this,x);
case  2 :
return G__3044__3047.call(this,x,y);
case  3 :
return G__3044__3048.call(this,x,y,z);
default:
return G__3044__3049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3044.cljs$lang$maxFixedArity = 3;
G__3044.cljs$lang$applyTo = G__3044__3049.cljs$lang$applyTo;
return G__3044;
})()
});
var comp__3033 = (function() { 
var G__3053__delegate = function (f1,f2,f3,fs){
var fs__3026 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3054__delegate = function (args){
var ret__3027 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3026),args);
var fs__3028 = cljs.core.next.call(null,fs__3026);

while(true){
if(cljs.core.truth_(fs__3028))
{{
var G__3055 = cljs.core.first.call(null,fs__3028).call(null,ret__3027);
var G__3056 = cljs.core.next.call(null,fs__3028);
ret__3027 = G__3055;
fs__3028 = G__3056;
continue;
}
} else
{return ret__3027;
}
break;
}
};
var G__3054 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3054__delegate.call(this, args);
};
G__3054.cljs$lang$maxFixedArity = 0;
G__3054.cljs$lang$applyTo = (function (arglist__3057){
var args = cljs.core.seq( arglist__3057 );;
return G__3054__delegate.call(this, args);
});
return G__3054;
})()
;
};
var G__3053 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3053__delegate.call(this, f1, f2, f3, fs);
};
G__3053.cljs$lang$maxFixedArity = 3;
G__3053.cljs$lang$applyTo = (function (arglist__3058){
var f1 = cljs.core.first(arglist__3058);
var f2 = cljs.core.first(cljs.core.next(arglist__3058));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3058)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3058)));
return G__3053__delegate.call(this, f1, f2, f3, fs);
});
return G__3053;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3029.call(this);
case  1 :
return comp__3030.call(this,f1);
case  2 :
return comp__3031.call(this,f1,f2);
case  3 :
return comp__3032.call(this,f1,f2,f3);
default:
return comp__3033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3033.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3059 = (function (f,arg1){
return (function() { 
var G__3064__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3064 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3064__delegate.call(this, args);
};
G__3064.cljs$lang$maxFixedArity = 0;
G__3064.cljs$lang$applyTo = (function (arglist__3065){
var args = cljs.core.seq( arglist__3065 );;
return G__3064__delegate.call(this, args);
});
return G__3064;
})()
;
});
var partial__3060 = (function (f,arg1,arg2){
return (function() { 
var G__3066__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3066 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3066__delegate.call(this, args);
};
G__3066.cljs$lang$maxFixedArity = 0;
G__3066.cljs$lang$applyTo = (function (arglist__3067){
var args = cljs.core.seq( arglist__3067 );;
return G__3066__delegate.call(this, args);
});
return G__3066;
})()
;
});
var partial__3061 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3068__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3068 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3068__delegate.call(this, args);
};
G__3068.cljs$lang$maxFixedArity = 0;
G__3068.cljs$lang$applyTo = (function (arglist__3069){
var args = cljs.core.seq( arglist__3069 );;
return G__3068__delegate.call(this, args);
});
return G__3068;
})()
;
});
var partial__3062 = (function() { 
var G__3070__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3071__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3071 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3071__delegate.call(this, args);
};
G__3071.cljs$lang$maxFixedArity = 0;
G__3071.cljs$lang$applyTo = (function (arglist__3072){
var args = cljs.core.seq( arglist__3072 );;
return G__3071__delegate.call(this, args);
});
return G__3071;
})()
;
};
var G__3070 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3070__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3070.cljs$lang$maxFixedArity = 4;
G__3070.cljs$lang$applyTo = (function (arglist__3073){
var f = cljs.core.first(arglist__3073);
var arg1 = cljs.core.first(cljs.core.next(arglist__3073));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3073)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3073))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3073))));
return G__3070__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3070;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3059.call(this,f,arg1);
case  3 :
return partial__3060.call(this,f,arg1,arg2);
case  4 :
return partial__3061.call(this,f,arg1,arg2,arg3);
default:
return partial__3062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3062.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3074 = (function (f,x){
return (function() {
var G__3078 = null;
var G__3078__3079 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3078__3080 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3078__3081 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3078__3082 = (function() { 
var G__3084__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3084 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3084__delegate.call(this, a, b, c, ds);
};
G__3084.cljs$lang$maxFixedArity = 3;
G__3084.cljs$lang$applyTo = (function (arglist__3085){
var a = cljs.core.first(arglist__3085);
var b = cljs.core.first(cljs.core.next(arglist__3085));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3085)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3085)));
return G__3084__delegate.call(this, a, b, c, ds);
});
return G__3084;
})()
;
G__3078 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3078__3079.call(this,a);
case  2 :
return G__3078__3080.call(this,a,b);
case  3 :
return G__3078__3081.call(this,a,b,c);
default:
return G__3078__3082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3078.cljs$lang$maxFixedArity = 3;
G__3078.cljs$lang$applyTo = G__3078__3082.cljs$lang$applyTo;
return G__3078;
})()
});
var fnil__3075 = (function (f,x,y){
return (function() {
var G__3086 = null;
var G__3086__3087 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3086__3088 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3086__3089 = (function() { 
var G__3091__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3091 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3091__delegate.call(this, a, b, c, ds);
};
G__3091.cljs$lang$maxFixedArity = 3;
G__3091.cljs$lang$applyTo = (function (arglist__3092){
var a = cljs.core.first(arglist__3092);
var b = cljs.core.first(cljs.core.next(arglist__3092));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3092)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3092)));
return G__3091__delegate.call(this, a, b, c, ds);
});
return G__3091;
})()
;
G__3086 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3086__3087.call(this,a,b);
case  3 :
return G__3086__3088.call(this,a,b,c);
default:
return G__3086__3089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3086.cljs$lang$maxFixedArity = 3;
G__3086.cljs$lang$applyTo = G__3086__3089.cljs$lang$applyTo;
return G__3086;
})()
});
var fnil__3076 = (function (f,x,y,z){
return (function() {
var G__3093 = null;
var G__3093__3094 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3093__3095 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3093__3096 = (function() { 
var G__3098__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3098 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3098__delegate.call(this, a, b, c, ds);
};
G__3098.cljs$lang$maxFixedArity = 3;
G__3098.cljs$lang$applyTo = (function (arglist__3099){
var a = cljs.core.first(arglist__3099);
var b = cljs.core.first(cljs.core.next(arglist__3099));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3099)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3099)));
return G__3098__delegate.call(this, a, b, c, ds);
});
return G__3098;
})()
;
G__3093 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3093__3094.call(this,a,b);
case  3 :
return G__3093__3095.call(this,a,b,c);
default:
return G__3093__3096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3093.cljs$lang$maxFixedArity = 3;
G__3093.cljs$lang$applyTo = G__3093__3096.cljs$lang$applyTo;
return G__3093;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3074.call(this,f,x);
case  3 :
return fnil__3075.call(this,f,x,y);
case  4 :
return fnil__3076.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3102 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3100))
{var s__3101 = temp__3698__auto____3100;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3101)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3101)));
} else
{return null;
}
})));
});

return mapi__3102.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3103))
{var s__3104 = temp__3698__auto____3103;

var x__3105 = f.call(null,cljs.core.first.call(null,s__3104));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3105)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3104));
} else
{return cljs.core.cons.call(null,x__3105,keep.call(null,f,cljs.core.rest.call(null,s__3104)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3115 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3112 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3112))
{var s__3113 = temp__3698__auto____3112;

var x__3114 = f.call(null,idx,cljs.core.first.call(null,s__3113));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3114)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3113));
} else
{return cljs.core.cons.call(null,x__3114,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3113)));
}
} else
{return null;
}
})));
});

return keepi__3115.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3160 = (function (p){
return (function() {
var ep1 = null;
var ep1__3165 = (function (){
return true;
});
var ep1__3166 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3167 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3122 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3122))
{return p.call(null,y);
} else
{return and__3546__auto____3122;
}
})());
});
var ep1__3168 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3123 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3123))
{var and__3546__auto____3124 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3124))
{return p.call(null,z);
} else
{return and__3546__auto____3124;
}
} else
{return and__3546__auto____3123;
}
})());
});
var ep1__3169 = (function() { 
var G__3171__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3125 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3125))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3125;
}
})());
};
var G__3171 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3171__delegate.call(this, x, y, z, args);
};
G__3171.cljs$lang$maxFixedArity = 3;
G__3171.cljs$lang$applyTo = (function (arglist__3172){
var x = cljs.core.first(arglist__3172);
var y = cljs.core.first(cljs.core.next(arglist__3172));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3172)));
return G__3171__delegate.call(this, x, y, z, args);
});
return G__3171;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3165.call(this);
case  1 :
return ep1__3166.call(this,x);
case  2 :
return ep1__3167.call(this,x,y);
case  3 :
return ep1__3168.call(this,x,y,z);
default:
return ep1__3169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3169.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3161 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3173 = (function (){
return true;
});
var ep2__3174 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3126 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3126))
{return p2.call(null,x);
} else
{return and__3546__auto____3126;
}
})());
});
var ep2__3175 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3127 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3127))
{var and__3546__auto____3128 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3128))
{var and__3546__auto____3129 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3129))
{return p2.call(null,y);
} else
{return and__3546__auto____3129;
}
} else
{return and__3546__auto____3128;
}
} else
{return and__3546__auto____3127;
}
})());
});
var ep2__3176 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3130 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3130))
{var and__3546__auto____3131 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3131))
{var and__3546__auto____3132 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3132))
{var and__3546__auto____3133 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3133))
{var and__3546__auto____3134 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3134))
{return p2.call(null,z);
} else
{return and__3546__auto____3134;
}
} else
{return and__3546__auto____3133;
}
} else
{return and__3546__auto____3132;
}
} else
{return and__3546__auto____3131;
}
} else
{return and__3546__auto____3130;
}
})());
});
var ep2__3177 = (function() { 
var G__3179__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3135 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3135))
{return cljs.core.every_QMARK_.call(null,(function (p1__3106_SHARP_){
var and__3546__auto____3136 = p1.call(null,p1__3106_SHARP_);

if(cljs.core.truth_(and__3546__auto____3136))
{return p2.call(null,p1__3106_SHARP_);
} else
{return and__3546__auto____3136;
}
}),args);
} else
{return and__3546__auto____3135;
}
})());
};
var G__3179 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3179__delegate.call(this, x, y, z, args);
};
G__3179.cljs$lang$maxFixedArity = 3;
G__3179.cljs$lang$applyTo = (function (arglist__3180){
var x = cljs.core.first(arglist__3180);
var y = cljs.core.first(cljs.core.next(arglist__3180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3180)));
return G__3179__delegate.call(this, x, y, z, args);
});
return G__3179;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3173.call(this);
case  1 :
return ep2__3174.call(this,x);
case  2 :
return ep2__3175.call(this,x,y);
case  3 :
return ep2__3176.call(this,x,y,z);
default:
return ep2__3177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3177.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3162 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3181 = (function (){
return true;
});
var ep3__3182 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3137 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3137))
{var and__3546__auto____3138 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3138))
{return p3.call(null,x);
} else
{return and__3546__auto____3138;
}
} else
{return and__3546__auto____3137;
}
})());
});
var ep3__3183 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3139 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3139))
{var and__3546__auto____3140 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3140))
{var and__3546__auto____3141 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3141))
{var and__3546__auto____3142 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3142))
{var and__3546__auto____3143 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3143))
{return p3.call(null,y);
} else
{return and__3546__auto____3143;
}
} else
{return and__3546__auto____3142;
}
} else
{return and__3546__auto____3141;
}
} else
{return and__3546__auto____3140;
}
} else
{return and__3546__auto____3139;
}
})());
});
var ep3__3184 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3144 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3144))
{var and__3546__auto____3145 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3145))
{var and__3546__auto____3146 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3146))
{var and__3546__auto____3147 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3147))
{var and__3546__auto____3148 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3148))
{var and__3546__auto____3149 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3149))
{var and__3546__auto____3150 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3150))
{var and__3546__auto____3151 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3151))
{return p3.call(null,z);
} else
{return and__3546__auto____3151;
}
} else
{return and__3546__auto____3150;
}
} else
{return and__3546__auto____3149;
}
} else
{return and__3546__auto____3148;
}
} else
{return and__3546__auto____3147;
}
} else
{return and__3546__auto____3146;
}
} else
{return and__3546__auto____3145;
}
} else
{return and__3546__auto____3144;
}
})());
});
var ep3__3185 = (function() { 
var G__3187__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3152 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3152))
{return cljs.core.every_QMARK_.call(null,(function (p1__3107_SHARP_){
var and__3546__auto____3153 = p1.call(null,p1__3107_SHARP_);

if(cljs.core.truth_(and__3546__auto____3153))
{var and__3546__auto____3154 = p2.call(null,p1__3107_SHARP_);

if(cljs.core.truth_(and__3546__auto____3154))
{return p3.call(null,p1__3107_SHARP_);
} else
{return and__3546__auto____3154;
}
} else
{return and__3546__auto____3153;
}
}),args);
} else
{return and__3546__auto____3152;
}
})());
};
var G__3187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3187__delegate.call(this, x, y, z, args);
};
G__3187.cljs$lang$maxFixedArity = 3;
G__3187.cljs$lang$applyTo = (function (arglist__3188){
var x = cljs.core.first(arglist__3188);
var y = cljs.core.first(cljs.core.next(arglist__3188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3188)));
return G__3187__delegate.call(this, x, y, z, args);
});
return G__3187;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3181.call(this);
case  1 :
return ep3__3182.call(this,x);
case  2 :
return ep3__3183.call(this,x,y);
case  3 :
return ep3__3184.call(this,x,y,z);
default:
return ep3__3185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3185.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3163 = (function() { 
var G__3189__delegate = function (p1,p2,p3,ps){
var ps__3155 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3190 = (function (){
return true;
});
var epn__3191 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3108_SHARP_){
return p1__3108_SHARP_.call(null,x);
}),ps__3155);
});
var epn__3192 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3109_SHARP_){
var and__3546__auto____3156 = p1__3109_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3156))
{return p1__3109_SHARP_.call(null,y);
} else
{return and__3546__auto____3156;
}
}),ps__3155);
});
var epn__3193 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3110_SHARP_){
var and__3546__auto____3157 = p1__3110_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3157))
{var and__3546__auto____3158 = p1__3110_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3158))
{return p1__3110_SHARP_.call(null,z);
} else
{return and__3546__auto____3158;
}
} else
{return and__3546__auto____3157;
}
}),ps__3155);
});
var epn__3194 = (function() { 
var G__3196__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3159 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3159))
{return cljs.core.every_QMARK_.call(null,(function (p1__3111_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3111_SHARP_,args);
}),ps__3155);
} else
{return and__3546__auto____3159;
}
})());
};
var G__3196 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3196__delegate.call(this, x, y, z, args);
};
G__3196.cljs$lang$maxFixedArity = 3;
G__3196.cljs$lang$applyTo = (function (arglist__3197){
var x = cljs.core.first(arglist__3197);
var y = cljs.core.first(cljs.core.next(arglist__3197));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3197)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3197)));
return G__3196__delegate.call(this, x, y, z, args);
});
return G__3196;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3190.call(this);
case  1 :
return epn__3191.call(this,x);
case  2 :
return epn__3192.call(this,x,y);
case  3 :
return epn__3193.call(this,x,y,z);
default:
return epn__3194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3194.cljs$lang$applyTo;
return epn;
})()
};
var G__3189 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3189__delegate.call(this, p1, p2, p3, ps);
};
G__3189.cljs$lang$maxFixedArity = 3;
G__3189.cljs$lang$applyTo = (function (arglist__3198){
var p1 = cljs.core.first(arglist__3198);
var p2 = cljs.core.first(cljs.core.next(arglist__3198));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3198)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3198)));
return G__3189__delegate.call(this, p1, p2, p3, ps);
});
return G__3189;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3160.call(this,p1);
case  2 :
return every_pred__3161.call(this,p1,p2);
case  3 :
return every_pred__3162.call(this,p1,p2,p3);
default:
return every_pred__3163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3163.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3238 = (function (p){
return (function() {
var sp1 = null;
var sp1__3243 = (function (){
return null;
});
var sp1__3244 = (function (x){
return p.call(null,x);
});
var sp1__3245 = (function (x,y){
var or__3548__auto____3200 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{return p.call(null,y);
}
});
var sp1__3246 = (function (x,y,z){
var or__3548__auto____3201 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{var or__3548__auto____3202 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{return p.call(null,z);
}
}
});
var sp1__3247 = (function() { 
var G__3249__delegate = function (x,y,z,args){
var or__3548__auto____3203 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3249 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3249__delegate.call(this, x, y, z, args);
};
G__3249.cljs$lang$maxFixedArity = 3;
G__3249.cljs$lang$applyTo = (function (arglist__3250){
var x = cljs.core.first(arglist__3250);
var y = cljs.core.first(cljs.core.next(arglist__3250));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3250)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3250)));
return G__3249__delegate.call(this, x, y, z, args);
});
return G__3249;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3243.call(this);
case  1 :
return sp1__3244.call(this,x);
case  2 :
return sp1__3245.call(this,x,y);
case  3 :
return sp1__3246.call(this,x,y,z);
default:
return sp1__3247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3247.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3239 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3251 = (function (){
return null;
});
var sp2__3252 = (function (x){
var or__3548__auto____3204 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{return p2.call(null,x);
}
});
var sp2__3253 = (function (x,y){
var or__3548__auto____3205 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{var or__3548__auto____3206 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{var or__3548__auto____3207 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3254 = (function (x,y,z){
var or__3548__auto____3208 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{var or__3548__auto____3209 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{var or__3548__auto____3210 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{var or__3548__auto____3211 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{var or__3548__auto____3212 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3212))
{return or__3548__auto____3212;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3255 = (function() { 
var G__3257__delegate = function (x,y,z,args){
var or__3548__auto____3213 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
} else
{return cljs.core.some.call(null,(function (p1__3116_SHARP_){
var or__3548__auto____3214 = p1.call(null,p1__3116_SHARP_);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
} else
{return p2.call(null,p1__3116_SHARP_);
}
}),args);
}
};
var G__3257 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3257__delegate.call(this, x, y, z, args);
};
G__3257.cljs$lang$maxFixedArity = 3;
G__3257.cljs$lang$applyTo = (function (arglist__3258){
var x = cljs.core.first(arglist__3258);
var y = cljs.core.first(cljs.core.next(arglist__3258));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3258)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3258)));
return G__3257__delegate.call(this, x, y, z, args);
});
return G__3257;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3251.call(this);
case  1 :
return sp2__3252.call(this,x);
case  2 :
return sp2__3253.call(this,x,y);
case  3 :
return sp2__3254.call(this,x,y,z);
default:
return sp2__3255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3255.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3240 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3259 = (function (){
return null;
});
var sp3__3260 = (function (x){
var or__3548__auto____3215 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3215))
{return or__3548__auto____3215;
} else
{var or__3548__auto____3216 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{return p3.call(null,x);
}
}
});
var sp3__3261 = (function (x,y){
var or__3548__auto____3217 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3217))
{return or__3548__auto____3217;
} else
{var or__3548__auto____3218 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3218))
{return or__3548__auto____3218;
} else
{var or__3548__auto____3219 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
} else
{var or__3548__auto____3220 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{var or__3548__auto____3221 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3221))
{return or__3548__auto____3221;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3262 = (function (x,y,z){
var or__3548__auto____3222 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3222))
{return or__3548__auto____3222;
} else
{var or__3548__auto____3223 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3223))
{return or__3548__auto____3223;
} else
{var or__3548__auto____3224 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3224))
{return or__3548__auto____3224;
} else
{var or__3548__auto____3225 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3225))
{return or__3548__auto____3225;
} else
{var or__3548__auto____3226 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3226))
{return or__3548__auto____3226;
} else
{var or__3548__auto____3227 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3227))
{return or__3548__auto____3227;
} else
{var or__3548__auto____3228 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3228))
{return or__3548__auto____3228;
} else
{var or__3548__auto____3229 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3229))
{return or__3548__auto____3229;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3263 = (function() { 
var G__3265__delegate = function (x,y,z,args){
var or__3548__auto____3230 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3230))
{return or__3548__auto____3230;
} else
{return cljs.core.some.call(null,(function (p1__3117_SHARP_){
var or__3548__auto____3231 = p1.call(null,p1__3117_SHARP_);

if(cljs.core.truth_(or__3548__auto____3231))
{return or__3548__auto____3231;
} else
{var or__3548__auto____3232 = p2.call(null,p1__3117_SHARP_);

if(cljs.core.truth_(or__3548__auto____3232))
{return or__3548__auto____3232;
} else
{return p3.call(null,p1__3117_SHARP_);
}
}
}),args);
}
};
var G__3265 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3265__delegate.call(this, x, y, z, args);
};
G__3265.cljs$lang$maxFixedArity = 3;
G__3265.cljs$lang$applyTo = (function (arglist__3266){
var x = cljs.core.first(arglist__3266);
var y = cljs.core.first(cljs.core.next(arglist__3266));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3266)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3266)));
return G__3265__delegate.call(this, x, y, z, args);
});
return G__3265;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3259.call(this);
case  1 :
return sp3__3260.call(this,x);
case  2 :
return sp3__3261.call(this,x,y);
case  3 :
return sp3__3262.call(this,x,y,z);
default:
return sp3__3263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3263.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3241 = (function() { 
var G__3267__delegate = function (p1,p2,p3,ps){
var ps__3233 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3268 = (function (){
return null;
});
var spn__3269 = (function (x){
return cljs.core.some.call(null,(function (p1__3118_SHARP_){
return p1__3118_SHARP_.call(null,x);
}),ps__3233);
});
var spn__3270 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3119_SHARP_){
var or__3548__auto____3234 = p1__3119_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3234))
{return or__3548__auto____3234;
} else
{return p1__3119_SHARP_.call(null,y);
}
}),ps__3233);
});
var spn__3271 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3120_SHARP_){
var or__3548__auto____3235 = p1__3120_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3235))
{return or__3548__auto____3235;
} else
{var or__3548__auto____3236 = p1__3120_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3236))
{return or__3548__auto____3236;
} else
{return p1__3120_SHARP_.call(null,z);
}
}
}),ps__3233);
});
var spn__3272 = (function() { 
var G__3274__delegate = function (x,y,z,args){
var or__3548__auto____3237 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3237))
{return or__3548__auto____3237;
} else
{return cljs.core.some.call(null,(function (p1__3121_SHARP_){
return cljs.core.some.call(null,p1__3121_SHARP_,args);
}),ps__3233);
}
};
var G__3274 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3274__delegate.call(this, x, y, z, args);
};
G__3274.cljs$lang$maxFixedArity = 3;
G__3274.cljs$lang$applyTo = (function (arglist__3275){
var x = cljs.core.first(arglist__3275);
var y = cljs.core.first(cljs.core.next(arglist__3275));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3275)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3275)));
return G__3274__delegate.call(this, x, y, z, args);
});
return G__3274;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3268.call(this);
case  1 :
return spn__3269.call(this,x);
case  2 :
return spn__3270.call(this,x,y);
case  3 :
return spn__3271.call(this,x,y,z);
default:
return spn__3272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3272.cljs$lang$applyTo;
return spn;
})()
};
var G__3267 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3267__delegate.call(this, p1, p2, p3, ps);
};
G__3267.cljs$lang$maxFixedArity = 3;
G__3267.cljs$lang$applyTo = (function (arglist__3276){
var p1 = cljs.core.first(arglist__3276);
var p2 = cljs.core.first(cljs.core.next(arglist__3276));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3276)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3276)));
return G__3267__delegate.call(this, p1, p2, p3, ps);
});
return G__3267;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3238.call(this,p1);
case  2 :
return some_fn__3239.call(this,p1,p2);
case  3 :
return some_fn__3240.call(this,p1,p2,p3);
default:
return some_fn__3241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3241.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3289 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3277 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3277))
{var s__3278 = temp__3698__auto____3277;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3278)),map.call(null,f,cljs.core.rest.call(null,s__3278)));
} else
{return null;
}
})));
});
var map__3290 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3279 = cljs.core.seq.call(null,c1);
var s2__3280 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3281 = s1__3279;

if(cljs.core.truth_(and__3546__auto____3281))
{return s2__3280;
} else
{return and__3546__auto____3281;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3279),cljs.core.first.call(null,s2__3280)),map.call(null,f,cljs.core.rest.call(null,s1__3279),cljs.core.rest.call(null,s2__3280)));
} else
{return null;
}
})));
});
var map__3291 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3282 = cljs.core.seq.call(null,c1);
var s2__3283 = cljs.core.seq.call(null,c2);
var s3__3284 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3285 = s1__3282;

if(cljs.core.truth_(and__3546__auto____3285))
{var and__3546__auto____3286 = s2__3283;

if(cljs.core.truth_(and__3546__auto____3286))
{return s3__3284;
} else
{return and__3546__auto____3286;
}
} else
{return and__3546__auto____3285;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3282),cljs.core.first.call(null,s2__3283),cljs.core.first.call(null,s3__3284)),map.call(null,f,cljs.core.rest.call(null,s1__3282),cljs.core.rest.call(null,s2__3283),cljs.core.rest.call(null,s3__3284)));
} else
{return null;
}
})));
});
var map__3292 = (function() { 
var G__3294__delegate = function (f,c1,c2,c3,colls){
var step__3288 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3287 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3287)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3287),step.call(null,map.call(null,cljs.core.rest,ss__3287)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3199_SHARP_){
return cljs.core.apply.call(null,f,p1__3199_SHARP_);
}),step__3288.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3294 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3294__delegate.call(this, f, c1, c2, c3, colls);
};
G__3294.cljs$lang$maxFixedArity = 4;
G__3294.cljs$lang$applyTo = (function (arglist__3295){
var f = cljs.core.first(arglist__3295);
var c1 = cljs.core.first(cljs.core.next(arglist__3295));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3295)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3295))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3295))));
return G__3294__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3294;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3289.call(this,f,c1);
case  3 :
return map__3290.call(this,f,c1,c2);
case  4 :
return map__3291.call(this,f,c1,c2,c3);
default:
return map__3292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3292.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3296))
{var s__3297 = temp__3698__auto____3296;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3297),take.call(null,(n - 1),cljs.core.rest.call(null,s__3297)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3300 = (function (n,coll){
while(true){
var s__3298 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3299 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3299))
{return s__3298;
} else
{return and__3546__auto____3299;
}
})()))
{{
var G__3301 = (n - 1);
var G__3302 = cljs.core.rest.call(null,s__3298);
n = G__3301;
coll = G__3302;
continue;
}
} else
{return s__3298;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3300.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3303 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3304 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3303.call(this,n);
case  2 :
return drop_last__3304.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3306 = cljs.core.seq.call(null,coll);
var lead__3307 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3307))
{{
var G__3308 = cljs.core.next.call(null,s__3306);
var G__3309 = cljs.core.next.call(null,lead__3307);
s__3306 = G__3308;
lead__3307 = G__3309;
continue;
}
} else
{return s__3306;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3312 = (function (pred,coll){
while(true){
var s__3310 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3311 = s__3310;

if(cljs.core.truth_(and__3546__auto____3311))
{return pred.call(null,cljs.core.first.call(null,s__3310));
} else
{return and__3546__auto____3311;
}
})()))
{{
var G__3313 = pred;
var G__3314 = cljs.core.rest.call(null,s__3310);
pred = G__3313;
coll = G__3314;
continue;
}
} else
{return s__3310;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3312.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3315 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3315))
{var s__3316 = temp__3698__auto____3315;

return cljs.core.concat.call(null,s__3316,cycle.call(null,s__3316));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3317 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3318 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3317.call(this,n);
case  2 :
return repeat__3318.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3320 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3321 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3320.call(this,n);
case  2 :
return repeatedly__3321.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3327 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3323 = cljs.core.seq.call(null,c1);
var s2__3324 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3325 = s1__3323;

if(cljs.core.truth_(and__3546__auto____3325))
{return s2__3324;
} else
{return and__3546__auto____3325;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3323),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3324),interleave.call(null,cljs.core.rest.call(null,s1__3323),cljs.core.rest.call(null,s2__3324))));
} else
{return null;
}
})));
});
var interleave__3328 = (function() { 
var G__3330__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3326 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3326)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3326),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3326)));
} else
{return null;
}
})));
};
var G__3330 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3330__delegate.call(this, c1, c2, colls);
};
G__3330.cljs$lang$maxFixedArity = 2;
G__3330.cljs$lang$applyTo = (function (arglist__3331){
var c1 = cljs.core.first(arglist__3331);
var c2 = cljs.core.first(cljs.core.next(arglist__3331));
var colls = cljs.core.rest(cljs.core.next(arglist__3331));
return G__3330__delegate.call(this, c1, c2, colls);
});
return G__3330;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3327.call(this,c1,c2);
default:
return interleave__3328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3328.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3334 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3332 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3332))
{var coll__3333 = temp__3695__auto____3332;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3333),cat.call(null,cljs.core.rest.call(null,coll__3333),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3334.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3335 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3336 = (function() { 
var G__3338__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3338 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3338__delegate.call(this, f, coll, colls);
};
G__3338.cljs$lang$maxFixedArity = 2;
G__3338.cljs$lang$applyTo = (function (arglist__3339){
var f = cljs.core.first(arglist__3339);
var coll = cljs.core.first(cljs.core.next(arglist__3339));
var colls = cljs.core.rest(cljs.core.next(arglist__3339));
return G__3338__delegate.call(this, f, coll, colls);
});
return G__3338;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3335.call(this,f,coll);
default:
return mapcat__3336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3336.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3340 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3340))
{var s__3341 = temp__3698__auto____3340;

var f__3342 = cljs.core.first.call(null,s__3341);
var r__3343 = cljs.core.rest.call(null,s__3341);

if(cljs.core.truth_(pred.call(null,f__3342)))
{return cljs.core.cons.call(null,f__3342,filter.call(null,pred,r__3343));
} else
{return filter.call(null,pred,r__3343);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3345 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3345.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3344_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3344_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3352 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3353 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3346 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3346))
{var s__3347 = temp__3698__auto____3346;

var p__3348 = cljs.core.take.call(null,n,s__3347);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3348))))
{return cljs.core.cons.call(null,p__3348,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3347)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3354 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3349 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3349))
{var s__3350 = temp__3698__auto____3349;

var p__3351 = cljs.core.take.call(null,n,s__3350);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3351))))
{return cljs.core.cons.call(null,p__3351,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3350)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3351,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3352.call(this,n,step);
case  3 :
return partition__3353.call(this,n,step,pad);
case  4 :
return partition__3354.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3360 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3361 = (function (m,ks,not_found){
var sentinel__3356 = cljs.core.lookup_sentinel;
var m__3357 = m;
var ks__3358 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3358))
{var m__3359 = cljs.core.get.call(null,m__3357,cljs.core.first.call(null,ks__3358),sentinel__3356);

if(cljs.core.truth_((sentinel__3356 === m__3359)))
{return not_found;
} else
{{
var G__3363 = sentinel__3356;
var G__3364 = m__3359;
var G__3365 = cljs.core.next.call(null,ks__3358);
sentinel__3356 = G__3363;
m__3357 = G__3364;
ks__3358 = G__3365;
continue;
}
}
} else
{return m__3357;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3360.call(this,m,ks);
case  3 :
return get_in__3361.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3366,v){
var vec__3367__3368 = p__3366;
var k__3369 = cljs.core.nth.call(null,vec__3367__3368,0,null);
var ks__3370 = cljs.core.nthnext.call(null,vec__3367__3368,1);

if(cljs.core.truth_(ks__3370))
{return cljs.core.assoc.call(null,m,k__3369,assoc_in.call(null,cljs.core.get.call(null,m,k__3369),ks__3370,v));
} else
{return cljs.core.assoc.call(null,m,k__3369,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3371,f,args){
var vec__3372__3373 = p__3371;
var k__3374 = cljs.core.nth.call(null,vec__3372__3373,0,null);
var ks__3375 = cljs.core.nthnext.call(null,vec__3372__3373,1);

if(cljs.core.truth_(ks__3375))
{return cljs.core.assoc.call(null,m,k__3374,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3374),ks__3375,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3374,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3374),args));
}
};
var update_in = function (m,p__3371,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3371, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3376){
var m = cljs.core.first(arglist__3376);
var p__3371 = cljs.core.first(cljs.core.next(arglist__3376));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3376)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3376)));
return update_in__delegate.call(this, m, p__3371, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3377 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3402 = null;
var G__3402__3403 = (function (coll,k){
var this__3378 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3402__3404 = (function (coll,k,not_found){
var this__3379 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3402 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3402__3403.call(this,coll,k);
case  3 :
return G__3402__3404.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3402;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3380 = this;
var new_array__3381 = cljs.core.aclone.call(null,this__3380.array);

(new_array__3381[k] = v);
return (new cljs.core.Vector(this__3380.meta,new_array__3381));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3382 = this;
var new_array__3383 = cljs.core.aclone.call(null,this__3382.array);

new_array__3383.push(o);
return (new cljs.core.Vector(this__3382.meta,new_array__3383));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3406 = null;
var G__3406__3407 = (function (v,f){
var this__3384 = this;
return cljs.core.ci_reduce.call(null,this__3384.array,f);
});
var G__3406__3408 = (function (v,f,start){
var this__3385 = this;
return cljs.core.ci_reduce.call(null,this__3385.array,f,start);
});
G__3406 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3406__3407.call(this,v,f);
case  3 :
return G__3406__3408.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3406;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3386 = this;
if(cljs.core.truth_((this__3386.array.length > 0)))
{var vector_seq__3387 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3386.array.length)))
{return cljs.core.cons.call(null,(this__3386.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3387.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3388 = this;
return this__3388.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3389 = this;
var count__3390 = this__3389.array.length;

if(cljs.core.truth_((count__3390 > 0)))
{return (this__3389.array[(count__3390 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3391 = this;
if(cljs.core.truth_((this__3391.array.length > 0)))
{var new_array__3392 = cljs.core.aclone.call(null,this__3391.array);

new_array__3392.pop();
return (new cljs.core.Vector(this__3391.meta,new_array__3392));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3393 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3394 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3395 = this;
return (new cljs.core.Vector(meta,this__3395.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3396 = this;
return this__3396.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3410 = null;
var G__3410__3411 = (function (coll,n){
var this__3397 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3398 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3398))
{return (n < this__3397.array.length);
} else
{return and__3546__auto____3398;
}
})()))
{return (this__3397.array[n]);
} else
{return null;
}
});
var G__3410__3412 = (function (coll,n,not_found){
var this__3399 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3400 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3400))
{return (n < this__3399.array.length);
} else
{return and__3546__auto____3400;
}
})()))
{return (this__3399.array[n]);
} else
{return not_found;
}
});
G__3410 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3410__3411.call(this,coll,n);
case  3 :
return G__3410__3412.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3410;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3401 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3401.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3414 = null;
var G__3414__3415 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3414__3416 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3414 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3414__3415.call(this,_,k);
case  3 :
return G__3414__3416.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3414;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3418){
var args = cljs.core.seq( arglist__3418 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3419 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3439 = null;
var G__3439__3440 = (function (coll,k){
var this__3420 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3439__3441 = (function (coll,k,not_found){
var this__3421 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3439 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3439__3440.call(this,coll,k);
case  3 :
return G__3439__3441.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3439;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3422 = this;
var v_pos__3423 = (this__3422.start + key);

return (new cljs.core.Subvec(this__3422.meta,cljs.core._assoc.call(null,this__3422.v,v_pos__3423,val),this__3422.start,((this__3422.end > (v_pos__3423 + 1)) ? this__3422.end : (v_pos__3423 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3424 = this;
return (new cljs.core.Subvec(this__3424.meta,cljs.core._assoc_n.call(null,this__3424.v,this__3424.end,o),this__3424.start,(this__3424.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3443 = null;
var G__3443__3444 = (function (coll,f){
var this__3425 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3443__3445 = (function (coll,f,start){
var this__3426 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3443 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3443__3444.call(this,coll,f);
case  3 :
return G__3443__3445.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3443;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3427 = this;
var subvec_seq__3428 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3427.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3427.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3428.call(null,this__3427.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3429 = this;
return (this__3429.end - this__3429.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3430 = this;
return cljs.core._nth.call(null,this__3430.v,(this__3430.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3431 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3431.start,this__3431.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3431.meta,this__3431.v,this__3431.start,(this__3431.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3432 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3433 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3434 = this;
return (new cljs.core.Subvec(meta,this__3434.v,this__3434.start,this__3434.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3435 = this;
return this__3435.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3447 = null;
var G__3447__3448 = (function (coll,n){
var this__3436 = this;
return cljs.core._nth.call(null,this__3436.v,(this__3436.start + n));
});
var G__3447__3449 = (function (coll,n,not_found){
var this__3437 = this;
return cljs.core._nth.call(null,this__3437.v,(this__3437.start + n),not_found);
});
G__3447 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3447__3448.call(this,coll,n);
case  3 :
return G__3447__3449.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3447;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3438 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3438.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3451 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3452 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3451.call(this,v,start);
case  3 :
return subvec__3452.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3454 = null;
var G__3454__3455 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3454__3456 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3454 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3454__3455.call(this,_,k);
case  3 :
return G__3454__3456.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3454;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3458 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3459 = array.length;

var i__3460 = 0;

while(true){
if(cljs.core.truth_((i__3460 < len__3459)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3460]))))
{return i__3460;
} else
{{
var G__3461 = (i__3460 + incr);
i__3460 = G__3461;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3463 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3464 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3462 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3462))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3462;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3463.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3464.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3467 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3486 = null;
var G__3486__3487 = (function (coll,k){
var this__3468 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3486__3488 = (function (coll,k,not_found){
var this__3469 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3469.strobj,(this__3469.strobj[k]),not_found);
});
G__3486 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3486__3487.call(this,coll,k);
case  3 :
return G__3486__3488.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3486;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3470 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3471 = goog.object.clone.call(null,this__3470.strobj);
var overwrite_QMARK___3472 = new_strobj__3471.hasOwnProperty(k);

(new_strobj__3471[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3472))
{return (new cljs.core.ObjMap(this__3470.meta,this__3470.keys,new_strobj__3471));
} else
{var new_keys__3473 = cljs.core.aclone.call(null,this__3470.keys);

new_keys__3473.push(k);
return (new cljs.core.ObjMap(this__3470.meta,new_keys__3473,new_strobj__3471));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3470.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3474 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3474.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3475 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3476 = this;
if(cljs.core.truth_((this__3476.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3466_SHARP_){
return cljs.core.vector.call(null,p1__3466_SHARP_,(this__3476.strobj[p1__3466_SHARP_]));
}),this__3476.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3477 = this;
return this__3477.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3478 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3479 = this;
return (new cljs.core.ObjMap(meta,this__3479.keys,this__3479.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3480 = this;
return this__3480.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3481 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3481.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3482 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3483 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3483))
{return this__3482.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3483;
}
})()))
{var new_keys__3484 = cljs.core.aclone.call(null,this__3482.keys);
var new_strobj__3485 = goog.object.clone.call(null,this__3482.strobj);

new_keys__3484.splice(cljs.core.scan_array.call(null,1,k,new_keys__3484),1);
cljs.core.js_delete.call(null,new_strobj__3485,k);
return (new cljs.core.ObjMap(this__3482.meta,new_keys__3484,new_strobj__3485));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3491 = null;
var G__3491__3492 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3491__3493 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3491 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3491__3492.call(this,_,k);
case  3 :
return G__3491__3493.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3491;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3495 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3525 = null;
var G__3525__3526 = (function (coll,k){
var this__3496 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3525__3527 = (function (coll,k,not_found){
var this__3497 = this;
var bucket__3498 = (this__3497.hashobj[cljs.core.hash.call(null,k)]);
var i__3499 = (cljs.core.truth_(bucket__3498)?cljs.core.scan_array.call(null,2,k,bucket__3498):null);

if(cljs.core.truth_(i__3499))
{return (bucket__3498[(i__3499 + 1)]);
} else
{return not_found;
}
});
G__3525 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3525__3526.call(this,coll,k);
case  3 :
return G__3525__3527.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3525;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3500 = this;
var h__3501 = cljs.core.hash.call(null,k);
var bucket__3502 = (this__3500.hashobj[h__3501]);

if(cljs.core.truth_(bucket__3502))
{var new_bucket__3503 = cljs.core.aclone.call(null,bucket__3502);
var new_hashobj__3504 = goog.object.clone.call(null,this__3500.hashobj);

(new_hashobj__3504[h__3501] = new_bucket__3503);
var temp__3695__auto____3505 = cljs.core.scan_array.call(null,2,k,new_bucket__3503);

if(cljs.core.truth_(temp__3695__auto____3505))
{var i__3506 = temp__3695__auto____3505;

(new_bucket__3503[(i__3506 + 1)] = v);
return (new cljs.core.HashMap(this__3500.meta,this__3500.count,new_hashobj__3504));
} else
{new_bucket__3503.push(k,v);
return (new cljs.core.HashMap(this__3500.meta,(this__3500.count + 1),new_hashobj__3504));
}
} else
{var new_hashobj__3507 = goog.object.clone.call(null,this__3500.hashobj);

(new_hashobj__3507[h__3501] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3500.meta,(this__3500.count + 1),new_hashobj__3507));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3508 = this;
var bucket__3509 = (this__3508.hashobj[cljs.core.hash.call(null,k)]);
var i__3510 = (cljs.core.truth_(bucket__3509)?cljs.core.scan_array.call(null,2,k,bucket__3509):null);

if(cljs.core.truth_(i__3510))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3511 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3512 = this;
if(cljs.core.truth_((this__3512.count > 0)))
{var hashes__3513 = cljs.core.js_keys.call(null,this__3512.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3490_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3512.hashobj[p1__3490_SHARP_])));
}),hashes__3513);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3514 = this;
return this__3514.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3515 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3516 = this;
return (new cljs.core.HashMap(meta,this__3516.count,this__3516.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3517 = this;
return this__3517.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3518 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3518.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3519 = this;
var h__3520 = cljs.core.hash.call(null,k);
var bucket__3521 = (this__3519.hashobj[h__3520]);
var i__3522 = (cljs.core.truth_(bucket__3521)?cljs.core.scan_array.call(null,2,k,bucket__3521):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3522)))
{return coll;
} else
{var new_hashobj__3523 = goog.object.clone.call(null,this__3519.hashobj);

if(cljs.core.truth_((3 > bucket__3521.length)))
{cljs.core.js_delete.call(null,new_hashobj__3523,h__3520);
} else
{var new_bucket__3524 = cljs.core.aclone.call(null,bucket__3521);

new_bucket__3524.splice(i__3522,2);
(new_hashobj__3523[h__3520] = new_bucket__3524);
}
return (new cljs.core.HashMap(this__3519.meta,(this__3519.count - 1),new_hashobj__3523));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3529 = ks.length;

var i__3530 = 0;
var out__3531 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3530 < len__3529)))
{{
var G__3532 = (i__3530 + 1);
var G__3533 = cljs.core.assoc.call(null,out__3531,(ks[i__3530]),(vs[i__3530]));
i__3530 = G__3532;
out__3531 = G__3533;
continue;
}
} else
{return out__3531;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3534 = null;
var G__3534__3535 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3534__3536 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3534 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3534__3535.call(this,_,k);
case  3 :
return G__3534__3536.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3534;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3538 = cljs.core.seq.call(null,keyvals);
var out__3539 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3538))
{{
var G__3540 = cljs.core.nnext.call(null,in$__3538);
var G__3541 = cljs.core.assoc.call(null,out__3539,cljs.core.first.call(null,in$__3538),cljs.core.second.call(null,in$__3538));
in$__3538 = G__3540;
out__3539 = G__3541;
continue;
}
} else
{return out__3539;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3542){
var keyvals = cljs.core.seq( arglist__3542 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3543_SHARP_,p2__3544_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3545 = p1__3543_SHARP_;

if(cljs.core.truth_(or__3548__auto____3545))
{return or__3548__auto____3545;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3544_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3546){
var maps = cljs.core.seq( arglist__3546 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3549 = (function (m,e){
var k__3547 = cljs.core.first.call(null,e);
var v__3548 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3547)))
{return cljs.core.assoc.call(null,m,k__3547,f.call(null,cljs.core.get.call(null,m,k__3547),v__3548));
} else
{return cljs.core.assoc.call(null,m,k__3547,v__3548);
}
});
var merge2__3551 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3549,(function (){var or__3548__auto____3550 = m1;

if(cljs.core.truth_(or__3548__auto____3550))
{return or__3548__auto____3550;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3551,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3552){
var f = cljs.core.first(arglist__3552);
var maps = cljs.core.rest(arglist__3552);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3554 = cljs.core.ObjMap.fromObject([],{});
var keys__3555 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3555))
{var key__3556 = cljs.core.first.call(null,keys__3555);
var entry__3557 = cljs.core.get.call(null,map,key__3556,"﷐'user/not-found");

{
var G__3558 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3557,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3554,key__3556,entry__3557):ret__3554);
var G__3559 = cljs.core.next.call(null,keys__3555);
ret__3554 = G__3558;
keys__3555 = G__3559;
continue;
}
} else
{return ret__3554;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3560 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3573 = null;
var G__3573__3574 = (function (coll,v){
var this__3561 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3573__3575 = (function (coll,v,not_found){
var this__3562 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3562.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3573 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3573__3574.call(this,coll,v);
case  3 :
return G__3573__3575.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3573;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3563 = this;
return (new cljs.core.Set(this__3563.meta,cljs.core.assoc.call(null,this__3563.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3564 = this;
return cljs.core.keys.call(null,this__3564.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3565 = this;
return (new cljs.core.Set(this__3565.meta,cljs.core.dissoc.call(null,this__3565.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3566 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3567 = this;
var and__3546__auto____3568 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3568))
{var and__3546__auto____3569 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3569))
{return cljs.core.every_QMARK_.call(null,(function (p1__3553_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3553_SHARP_);
}),other);
} else
{return and__3546__auto____3569;
}
} else
{return and__3546__auto____3568;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3570 = this;
return (new cljs.core.Set(meta,this__3570.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3571 = this;
return this__3571.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3572 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3572.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3577 = null;
var G__3577__3578 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3577__3579 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3577 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3577__3578.call(this,_,k);
case  3 :
return G__3577__3579.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3577;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3582 = cljs.core.seq.call(null,coll);
var out__3583 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3582))))
{{
var G__3584 = cljs.core.rest.call(null,in$__3582);
var G__3585 = cljs.core.conj.call(null,out__3583,cljs.core.first.call(null,in$__3582));
in$__3582 = G__3584;
out__3583 = G__3585;
continue;
}
} else
{return out__3583;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3586 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3587 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3587))
{var e__3588 = temp__3695__auto____3587;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3588));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3586,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3581_SHARP_){
var temp__3695__auto____3589 = cljs.core.find.call(null,smap,p1__3581_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3589))
{var e__3590 = temp__3695__auto____3589;

return cljs.core.second.call(null,e__3590);
} else
{return p1__3581_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3598 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3591,seen){
while(true){
var vec__3592__3593 = p__3591;
var f__3594 = cljs.core.nth.call(null,vec__3592__3593,0,null);
var xs__3595 = vec__3592__3593;

var temp__3698__auto____3596 = cljs.core.seq.call(null,xs__3595);

if(cljs.core.truth_(temp__3698__auto____3596))
{var s__3597 = temp__3698__auto____3596;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3594)))
{{
var G__3599 = cljs.core.rest.call(null,s__3597);
var G__3600 = seen;
p__3591 = G__3599;
seen = G__3600;
continue;
}
} else
{return cljs.core.cons.call(null,f__3594,step.call(null,cljs.core.rest.call(null,s__3597),cljs.core.conj.call(null,seen,f__3594)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3598.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3601 = cljs.core.Vector.fromArray([]);
var s__3602 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3602)))
{{
var G__3603 = cljs.core.conj.call(null,ret__3601,cljs.core.first.call(null,s__3602));
var G__3604 = cljs.core.next.call(null,s__3602);
ret__3601 = G__3603;
s__3602 = G__3604;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3601);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3605 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3605))
{return or__3548__auto____3605;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3606 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3606 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3606 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3607 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3607))
{return or__3548__auto____3607;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3608 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3608 > -1)))
{return cljs.core.subs.call(null,x,2,i__3608);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3611 = cljs.core.ObjMap.fromObject([],{});
var ks__3612 = cljs.core.seq.call(null,keys);
var vs__3613 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3614 = ks__3612;

if(cljs.core.truth_(and__3546__auto____3614))
{return vs__3613;
} else
{return and__3546__auto____3614;
}
})()))
{{
var G__3615 = cljs.core.assoc.call(null,map__3611,cljs.core.first.call(null,ks__3612),cljs.core.first.call(null,vs__3613));
var G__3616 = cljs.core.next.call(null,ks__3612);
var G__3617 = cljs.core.next.call(null,vs__3613);
map__3611 = G__3615;
ks__3612 = G__3616;
vs__3613 = G__3617;
continue;
}
} else
{return map__3611;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3620 = (function (k,x){
return x;
});
var max_key__3621 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3622 = (function() { 
var G__3624__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3609_SHARP_,p2__3610_SHARP_){
return max_key.call(null,k,p1__3609_SHARP_,p2__3610_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3624 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3624__delegate.call(this, k, x, y, more);
};
G__3624.cljs$lang$maxFixedArity = 3;
G__3624.cljs$lang$applyTo = (function (arglist__3625){
var k = cljs.core.first(arglist__3625);
var x = cljs.core.first(cljs.core.next(arglist__3625));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3625)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3625)));
return G__3624__delegate.call(this, k, x, y, more);
});
return G__3624;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3620.call(this,k,x);
case  3 :
return max_key__3621.call(this,k,x,y);
default:
return max_key__3622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3622.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3626 = (function (k,x){
return x;
});
var min_key__3627 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3628 = (function() { 
var G__3630__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3618_SHARP_,p2__3619_SHARP_){
return min_key.call(null,k,p1__3618_SHARP_,p2__3619_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3630 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3630__delegate.call(this, k, x, y, more);
};
G__3630.cljs$lang$maxFixedArity = 3;
G__3630.cljs$lang$applyTo = (function (arglist__3631){
var k = cljs.core.first(arglist__3631);
var x = cljs.core.first(cljs.core.next(arglist__3631));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3631)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3631)));
return G__3630__delegate.call(this, k, x, y, more);
});
return G__3630;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3626.call(this,k,x);
case  3 :
return min_key__3627.call(this,k,x,y);
default:
return min_key__3628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3628.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3634 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3635 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3632 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3632))
{var s__3633 = temp__3698__auto____3632;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3633),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3633)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3634.call(this,n,step);
case  3 :
return partition_all__3635.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3637 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3637))
{var s__3638 = temp__3698__auto____3637;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3638))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3638),take_while.call(null,pred,cljs.core.rest.call(null,s__3638)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3639 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3640 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3656 = null;
var G__3656__3657 = (function (rng,f){
var this__3641 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3656__3658 = (function (rng,f,s){
var this__3642 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3656 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3656__3657.call(this,rng,f);
case  3 :
return G__3656__3658.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3656;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3643 = this;
var comp__3644 = (cljs.core.truth_((this__3643.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3644.call(null,this__3643.start,this__3643.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3645 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3645.end - this__3645.start) / this__3645.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3646 = this;
return this__3646.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3647 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3647.meta,(this__3647.start + this__3647.step),this__3647.end,this__3647.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3648 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3649 = this;
return (new cljs.core.Range(meta,this__3649.start,this__3649.end,this__3649.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3650 = this;
return this__3650.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3660 = null;
var G__3660__3661 = (function (rng,n){
var this__3651 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3651.start + (n * this__3651.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3652 = (this__3651.start > this__3651.end);

if(cljs.core.truth_(and__3546__auto____3652))
{return cljs.core._EQ_.call(null,this__3651.step,0);
} else
{return and__3546__auto____3652;
}
})()))
{return this__3651.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3660__3662 = (function (rng,n,not_found){
var this__3653 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3653.start + (n * this__3653.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3654 = (this__3653.start > this__3653.end);

if(cljs.core.truth_(and__3546__auto____3654))
{return cljs.core._EQ_.call(null,this__3653.step,0);
} else
{return and__3546__auto____3654;
}
})()))
{return this__3653.start;
} else
{return not_found;
}
}
});
G__3660 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3660__3661.call(this,rng,n);
case  3 :
return G__3660__3662.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3660;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3655 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3655.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3664 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3665 = (function (end){
return range.call(null,0,end,1);
});
var range__3666 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3667 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3664.call(this);
case  1 :
return range__3665.call(this,start);
case  2 :
return range__3666.call(this,start,end);
case  3 :
return range__3667.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3669 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3669))
{var s__3670 = temp__3698__auto____3669;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3670),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3670)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3672 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3672))
{var s__3673 = temp__3698__auto____3672;

var fst__3674 = cljs.core.first.call(null,s__3673);
var fv__3675 = f.call(null,fst__3674);
var run__3676 = cljs.core.cons.call(null,fst__3674,cljs.core.take_while.call(null,(function (p1__3671_SHARP_){
return cljs.core._EQ_.call(null,fv__3675,f.call(null,p1__3671_SHARP_));
}),cljs.core.next.call(null,s__3673)));

return cljs.core.cons.call(null,run__3676,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3676),s__3673))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3691 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3687 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3687))
{var s__3688 = temp__3695__auto____3687;

return reductions.call(null,f,cljs.core.first.call(null,s__3688),cljs.core.rest.call(null,s__3688));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3692 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3689))
{var s__3690 = temp__3698__auto____3689;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3690)),cljs.core.rest.call(null,s__3690));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3691.call(this,f,init);
case  3 :
return reductions__3692.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3695 = (function (f){
return (function() {
var G__3700 = null;
var G__3700__3701 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3700__3702 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3700__3703 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3700__3704 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3700__3705 = (function() { 
var G__3707__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3707 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3707__delegate.call(this, x, y, z, args);
};
G__3707.cljs$lang$maxFixedArity = 3;
G__3707.cljs$lang$applyTo = (function (arglist__3708){
var x = cljs.core.first(arglist__3708);
var y = cljs.core.first(cljs.core.next(arglist__3708));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3708)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3708)));
return G__3707__delegate.call(this, x, y, z, args);
});
return G__3707;
})()
;
G__3700 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3700__3701.call(this);
case  1 :
return G__3700__3702.call(this,x);
case  2 :
return G__3700__3703.call(this,x,y);
case  3 :
return G__3700__3704.call(this,x,y,z);
default:
return G__3700__3705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3700.cljs$lang$maxFixedArity = 3;
G__3700.cljs$lang$applyTo = G__3700__3705.cljs$lang$applyTo;
return G__3700;
})()
});
var juxt__3696 = (function (f,g){
return (function() {
var G__3709 = null;
var G__3709__3710 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3709__3711 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3709__3712 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3709__3713 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3709__3714 = (function() { 
var G__3716__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3716 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3716__delegate.call(this, x, y, z, args);
};
G__3716.cljs$lang$maxFixedArity = 3;
G__3716.cljs$lang$applyTo = (function (arglist__3717){
var x = cljs.core.first(arglist__3717);
var y = cljs.core.first(cljs.core.next(arglist__3717));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3717)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3717)));
return G__3716__delegate.call(this, x, y, z, args);
});
return G__3716;
})()
;
G__3709 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3709__3710.call(this);
case  1 :
return G__3709__3711.call(this,x);
case  2 :
return G__3709__3712.call(this,x,y);
case  3 :
return G__3709__3713.call(this,x,y,z);
default:
return G__3709__3714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3709.cljs$lang$maxFixedArity = 3;
G__3709.cljs$lang$applyTo = G__3709__3714.cljs$lang$applyTo;
return G__3709;
})()
});
var juxt__3697 = (function (f,g,h){
return (function() {
var G__3718 = null;
var G__3718__3719 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3718__3720 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3718__3721 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3718__3722 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3718__3723 = (function() { 
var G__3725__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3725 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3725__delegate.call(this, x, y, z, args);
};
G__3725.cljs$lang$maxFixedArity = 3;
G__3725.cljs$lang$applyTo = (function (arglist__3726){
var x = cljs.core.first(arglist__3726);
var y = cljs.core.first(cljs.core.next(arglist__3726));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3726)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3726)));
return G__3725__delegate.call(this, x, y, z, args);
});
return G__3725;
})()
;
G__3718 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3718__3719.call(this);
case  1 :
return G__3718__3720.call(this,x);
case  2 :
return G__3718__3721.call(this,x,y);
case  3 :
return G__3718__3722.call(this,x,y,z);
default:
return G__3718__3723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3718.cljs$lang$maxFixedArity = 3;
G__3718.cljs$lang$applyTo = G__3718__3723.cljs$lang$applyTo;
return G__3718;
})()
});
var juxt__3698 = (function() { 
var G__3727__delegate = function (f,g,h,fs){
var fs__3694 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3728 = null;
var G__3728__3729 = (function (){
return cljs.core.reduce.call(null,(function (p1__3677_SHARP_,p2__3678_SHARP_){
return cljs.core.conj.call(null,p1__3677_SHARP_,p2__3678_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3694);
});
var G__3728__3730 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3679_SHARP_,p2__3680_SHARP_){
return cljs.core.conj.call(null,p1__3679_SHARP_,p2__3680_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3694);
});
var G__3728__3731 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3681_SHARP_,p2__3682_SHARP_){
return cljs.core.conj.call(null,p1__3681_SHARP_,p2__3682_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3694);
});
var G__3728__3732 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3683_SHARP_,p2__3684_SHARP_){
return cljs.core.conj.call(null,p1__3683_SHARP_,p2__3684_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3694);
});
var G__3728__3733 = (function() { 
var G__3735__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3685_SHARP_,p2__3686_SHARP_){
return cljs.core.conj.call(null,p1__3685_SHARP_,cljs.core.apply.call(null,p2__3686_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3694);
};
var G__3735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3735__delegate.call(this, x, y, z, args);
};
G__3735.cljs$lang$maxFixedArity = 3;
G__3735.cljs$lang$applyTo = (function (arglist__3736){
var x = cljs.core.first(arglist__3736);
var y = cljs.core.first(cljs.core.next(arglist__3736));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3736)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3736)));
return G__3735__delegate.call(this, x, y, z, args);
});
return G__3735;
})()
;
G__3728 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3728__3729.call(this);
case  1 :
return G__3728__3730.call(this,x);
case  2 :
return G__3728__3731.call(this,x,y);
case  3 :
return G__3728__3732.call(this,x,y,z);
default:
return G__3728__3733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3728.cljs$lang$maxFixedArity = 3;
G__3728.cljs$lang$applyTo = G__3728__3733.cljs$lang$applyTo;
return G__3728;
})()
};
var G__3727 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3727__delegate.call(this, f, g, h, fs);
};
G__3727.cljs$lang$maxFixedArity = 3;
G__3727.cljs$lang$applyTo = (function (arglist__3737){
var f = cljs.core.first(arglist__3737);
var g = cljs.core.first(cljs.core.next(arglist__3737));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3737)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3737)));
return G__3727__delegate.call(this, f, g, h, fs);
});
return G__3727;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3695.call(this,f);
case  2 :
return juxt__3696.call(this,f,g);
case  3 :
return juxt__3697.call(this,f,g,h);
default:
return juxt__3698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3698.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3739 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3742 = cljs.core.next.call(null,coll);
coll = G__3742;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3740 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3738 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3738))
{return (n > 0);
} else
{return and__3546__auto____3738;
}
})()))
{{
var G__3743 = (n - 1);
var G__3744 = cljs.core.next.call(null,coll);
n = G__3743;
coll = G__3744;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3739.call(this,n);
case  2 :
return dorun__3740.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3745 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3746 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3745.call(this,n);
case  2 :
return doall__3746.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3748 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3748),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3748),1)))
{return cljs.core.first.call(null,matches__3748);
} else
{return cljs.core.vec.call(null,matches__3748);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3749 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3749)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3749),1)))
{return cljs.core.first.call(null,matches__3749);
} else
{return cljs.core.vec.call(null,matches__3749);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3750 = cljs.core.re_find.call(null,re,s);
var match_idx__3751 = s.search(re);
var match_str__3752 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3750))?cljs.core.first.call(null,match_data__3750):match_data__3750);
var post_match__3753 = cljs.core.subs.call(null,s,(match_idx__3751 + cljs.core.count.call(null,match_str__3752)));

if(cljs.core.truth_(match_data__3750))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3750,re_seq.call(null,re,post_match__3753));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3754_SHARP_){
return print_one.call(null,p1__3754_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3755 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3755))
{var and__3546__auto____3759 = (function (){var x__319__auto____3756 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3757 = x__319__auto____3756;

if(cljs.core.truth_(and__3546__auto____3757))
{var and__3546__auto____3758 = x__319__auto____3756.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3758))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3756));
} else
{return and__3546__auto____3758;
}
} else
{return and__3546__auto____3757;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____3756);
}
})();

if(cljs.core.truth_(and__3546__auto____3759))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3759;
}
} else
{return and__3546__auto____3755;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__319__auto____3760 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3761 = x__319__auto____3760;

if(cljs.core.truth_(and__3546__auto____3761))
{var and__3546__auto____3762 = x__319__auto____3760.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3762))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3760));
} else
{return and__3546__auto____3762;
}
} else
{return and__3546__auto____3761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__319__auto____3760);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3763 = cljs.core.first.call(null,objs);
var sb__3764 = (new goog.string.StringBuffer());

var G__3765__3766 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3765__3766))
{var obj__3767 = cljs.core.first.call(null,G__3765__3766);
var G__3765__3768 = G__3765__3766;

while(true){
if(cljs.core.truth_((obj__3767 === first_obj__3763)))
{} else
{sb__3764.append(" ");
}
var G__3769__3770 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3767,opts));

if(cljs.core.truth_(G__3769__3770))
{var string__3771 = cljs.core.first.call(null,G__3769__3770);
var G__3769__3772 = G__3769__3770;

while(true){
sb__3764.append(string__3771);
var temp__3698__auto____3773 = cljs.core.next.call(null,G__3769__3772);

if(cljs.core.truth_(temp__3698__auto____3773))
{var G__3769__3774 = temp__3698__auto____3773;

{
var G__3777 = cljs.core.first.call(null,G__3769__3774);
var G__3778 = G__3769__3774;
string__3771 = G__3777;
G__3769__3772 = G__3778;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3775 = cljs.core.next.call(null,G__3765__3768);

if(cljs.core.truth_(temp__3698__auto____3775))
{var G__3765__3776 = temp__3698__auto____3775;

{
var G__3779 = cljs.core.first.call(null,G__3765__3776);
var G__3780 = G__3765__3776;
obj__3767 = G__3779;
G__3765__3768 = G__3780;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3764);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3781 = cljs.core.first.call(null,objs);

var G__3782__3783 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3782__3783))
{var obj__3784 = cljs.core.first.call(null,G__3782__3783);
var G__3782__3785 = G__3782__3783;

while(true){
if(cljs.core.truth_((obj__3784 === first_obj__3781)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3786__3787 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3784,opts));

if(cljs.core.truth_(G__3786__3787))
{var string__3788 = cljs.core.first.call(null,G__3786__3787);
var G__3786__3789 = G__3786__3787;

while(true){
cljs.core.string_print.call(null,string__3788);
var temp__3698__auto____3790 = cljs.core.next.call(null,G__3786__3789);

if(cljs.core.truth_(temp__3698__auto____3790))
{var G__3786__3791 = temp__3698__auto____3790;

{
var G__3794 = cljs.core.first.call(null,G__3786__3791);
var G__3795 = G__3786__3791;
string__3788 = G__3794;
G__3786__3789 = G__3795;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3792 = cljs.core.next.call(null,G__3782__3785);

if(cljs.core.truth_(temp__3698__auto____3792))
{var G__3782__3793 = temp__3698__auto____3792;

{
var G__3796 = cljs.core.first.call(null,G__3782__3793);
var G__3797 = G__3782__3793;
obj__3784 = G__3796;
G__3782__3785 = G__3797;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3798){
var objs = cljs.core.seq( arglist__3798 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3799){
var objs = cljs.core.seq( arglist__3799 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3800){
var objs = cljs.core.seq( arglist__3800 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3801){
var objs = cljs.core.seq( arglist__3801 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3802){
var objs = cljs.core.seq( arglist__3802 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3803 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3803,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3804 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3804))
{var nspc__3805 = temp__3698__auto____3804;

return cljs.core.str.call(null,nspc__3805,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3806 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3806))
{var nspc__3807 = temp__3698__auto____3806;

return cljs.core.str.call(null,nspc__3807,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3808 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3808,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3809 = this;
var G__3810__3811 = cljs.core.seq.call(null,this__3809.watches);

if(cljs.core.truth_(G__3810__3811))
{var G__3813__3815 = cljs.core.first.call(null,G__3810__3811);
var vec__3814__3816 = G__3813__3815;
var key__3817 = cljs.core.nth.call(null,vec__3814__3816,0,null);
var f__3818 = cljs.core.nth.call(null,vec__3814__3816,1,null);
var G__3810__3819 = G__3810__3811;

var G__3813__3820 = G__3813__3815;
var G__3810__3821 = G__3810__3819;

while(true){
var vec__3822__3823 = G__3813__3820;
var key__3824 = cljs.core.nth.call(null,vec__3822__3823,0,null);
var f__3825 = cljs.core.nth.call(null,vec__3822__3823,1,null);
var G__3810__3826 = G__3810__3821;

f__3825.call(null,key__3824,this$,oldval,newval);
var temp__3698__auto____3827 = cljs.core.next.call(null,G__3810__3826);

if(cljs.core.truth_(temp__3698__auto____3827))
{var G__3810__3828 = temp__3698__auto____3827;

{
var G__3835 = cljs.core.first.call(null,G__3810__3828);
var G__3836 = G__3810__3828;
G__3813__3820 = G__3835;
G__3810__3821 = G__3836;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3829 = this;
return this$.watches = cljs.core.assoc.call(null,this__3829.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3830 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3830.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3831 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3831.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3832 = this;
return this__3832.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3833 = this;
return this__3833.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3834 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3843 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3844 = (function() { 
var G__3846__delegate = function (x,p__3837){
var map__3838__3839 = p__3837;
var map__3838__3840 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3838__3839))?cljs.core.apply.call(null,cljs.core.hash_map,map__3838__3839):map__3838__3839);
var validator__3841 = cljs.core.get.call(null,map__3838__3840,"﷐'validator");
var meta__3842 = cljs.core.get.call(null,map__3838__3840,"﷐'meta");

return (new cljs.core.Atom(x,meta__3842,validator__3841,null));
};
var G__3846 = function (x,var_args){
var p__3837 = null;
if (goog.isDef(var_args)) {
  p__3837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3846__delegate.call(this, x, p__3837);
};
G__3846.cljs$lang$maxFixedArity = 1;
G__3846.cljs$lang$applyTo = (function (arglist__3847){
var x = cljs.core.first(arglist__3847);
var p__3837 = cljs.core.rest(arglist__3847);
return G__3846__delegate.call(this, x, p__3837);
});
return G__3846;
})()
;
atom = function(x,var_args){
var p__3837 = var_args;
switch(arguments.length){
case  1 :
return atom__3843.call(this,x);
default:
return atom__3844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3844.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3848 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3848))
{var validate__3849 = temp__3698__auto____3848;

if(cljs.core.truth_(validate__3849.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__3850 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3850,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3851 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3852 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3853 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3854 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3855 = (function() { 
var G__3857__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3857 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3857__delegate.call(this, a, f, x, y, z, more);
};
G__3857.cljs$lang$maxFixedArity = 5;
G__3857.cljs$lang$applyTo = (function (arglist__3858){
var a = cljs.core.first(arglist__3858);
var f = cljs.core.first(cljs.core.next(arglist__3858));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3858)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3858))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3858)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3858)))));
return G__3857__delegate.call(this, a, f, x, y, z, more);
});
return G__3857;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3851.call(this,a,f);
case  3 :
return swap_BANG___3852.call(this,a,f,x);
case  4 :
return swap_BANG___3853.call(this,a,f,x,y);
case  5 :
return swap_BANG___3854.call(this,a,f,x,y,z);
default:
return swap_BANG___3855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3855.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3859){
var iref = cljs.core.first(arglist__3859);
var f = cljs.core.first(cljs.core.next(arglist__3859));
var args = cljs.core.rest(cljs.core.next(arglist__3859));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3860 = (function (){
return gensym.call(null,"G__");
});
var gensym__3861 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3860.call(this);
case  1 :
return gensym__3861.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3863 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3863.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3864 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3864.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3864.state,this__3864.f);
}
return cljs.core.deref.call(null,this__3864.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3865){
var body = cljs.core.seq( arglist__3865 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3866__3867 = options;
var map__3866__3868 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3866__3867))?cljs.core.apply.call(null,cljs.core.hash_map,map__3866__3867):map__3866__3867);
var keywordize_keys__3869 = cljs.core.get.call(null,map__3866__3868,"﷐'keywordize-keys");
var keyfn__3870 = (cljs.core.truth_(keywordize_keys__3869)?cljs.core.keyword:cljs.core.str);
var f__3876 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__383__auto____3875 = (function iter__3871(s__3872){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3872__3873 = s__3872;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3872__3873)))
{var k__3874 = cljs.core.first.call(null,s__3872__3873);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3870.call(null,k__3874),thisfn.call(null,(x[k__3874]))]),iter__3871.call(null,cljs.core.rest.call(null,s__3872__3873)));
} else
{return null;
}
break;
}
})));
});

return iter__383__auto____3875.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3876.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3877){
var x = cljs.core.first(arglist__3877);
var options = cljs.core.rest(arglist__3877);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3878 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3882__delegate = function (args){
var temp__3695__auto____3879 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3878),args);

if(cljs.core.truth_(temp__3695__auto____3879))
{var v__3880 = temp__3695__auto____3879;

return v__3880;
} else
{var ret__3881 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3878,cljs.core.assoc,args,ret__3881);
return ret__3881;
}
};
var G__3882 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3882__delegate.call(this, args);
};
G__3882.cljs$lang$maxFixedArity = 0;
G__3882.cljs$lang$applyTo = (function (arglist__3883){
var args = cljs.core.seq( arglist__3883 );;
return G__3882__delegate.call(this, args);
});
return G__3882;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3885 = (function (f){
while(true){
var ret__3884 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3884)))
{{
var G__3888 = ret__3884;
f = G__3888;
continue;
}
} else
{return ret__3884;
}
break;
}
});
var trampoline__3886 = (function() { 
var G__3889__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3889 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3889__delegate.call(this, f, args);
};
G__3889.cljs$lang$maxFixedArity = 1;
G__3889.cljs$lang$applyTo = (function (arglist__3890){
var f = cljs.core.first(arglist__3890);
var args = cljs.core.rest(arglist__3890);
return G__3889__delegate.call(this, f, args);
});
return G__3889;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3885.call(this,f);
default:
return trampoline__3886.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3886.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3891 = (function (){
return rand.call(null,1);
});
var rand__3892 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3891.call(this);
case  1 :
return rand__3892.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3894 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3894,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3894,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3903 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3904 = (function (h,child,parent){
var or__3548__auto____3895 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3895))
{return or__3548__auto____3895;
} else
{var or__3548__auto____3896 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3896))
{return or__3548__auto____3896;
} else
{var and__3546__auto____3897 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3897))
{var and__3546__auto____3898 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3898))
{var and__3546__auto____3899 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3899))
{var ret__3900 = true;
var i__3901 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3902 = cljs.core.not.call(null,ret__3900);

if(cljs.core.truth_(or__3548__auto____3902))
{return or__3548__auto____3902;
} else
{return cljs.core._EQ_.call(null,i__3901,cljs.core.count.call(null,parent));
}
})()))
{return ret__3900;
} else
{{
var G__3906 = isa_QMARK_.call(null,h,child.call(null,i__3901),parent.call(null,i__3901));
var G__3907 = (i__3901 + 1);
ret__3900 = G__3906;
i__3901 = G__3907;
continue;
}
}
break;
}
} else
{return and__3546__auto____3899;
}
} else
{return and__3546__auto____3898;
}
} else
{return and__3546__auto____3897;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3903.call(this,h,child);
case  3 :
return isa_QMARK___3904.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3908 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3909 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3908.call(this,h);
case  2 :
return parents__3909.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3911 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3912 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3911.call(this,h);
case  2 :
return ancestors__3912.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3914 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3915 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3914.call(this,h);
case  2 :
return descendants__3915.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3925 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3926 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__3920 = "﷐'parents".call(null,h);
var td__3921 = "﷐'descendants".call(null,h);
var ta__3922 = "﷐'ancestors".call(null,h);
var tf__3923 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3924 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3920.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3922.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3922.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3920,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3923.call(null,"﷐'ancestors".call(null,h),tag,td__3921,parent,ta__3922),"﷐'descendants":tf__3923.call(null,"﷐'descendants".call(null,h),parent,ta__3922,tag,td__3921)});
})());

if(cljs.core.truth_(or__3548__auto____3924))
{return or__3548__auto____3924;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3925.call(this,h,tag);
case  3 :
return derive__3926.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3932 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3933 = (function (h,tag,parent){
var parentMap__3928 = "﷐'parents".call(null,h);
var childsParents__3929 = (cljs.core.truth_(parentMap__3928.call(null,tag))?cljs.core.disj.call(null,parentMap__3928.call(null,tag),parent):cljs.core.set([]));
var newParents__3930 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3929))?cljs.core.assoc.call(null,parentMap__3928,tag,childsParents__3929):cljs.core.dissoc.call(null,parentMap__3928,tag));
var deriv_seq__3931 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3917_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3917_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3917_SHARP_),cljs.core.second.call(null,p1__3917_SHARP_)));
}),cljs.core.seq.call(null,newParents__3930)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3928.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3918_SHARP_,p2__3919_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3918_SHARP_,p2__3919_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3931));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3932.call(this,h,tag);
case  3 :
return underive__3933.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3935 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3937 = (cljs.core.truth_((function (){var and__3546__auto____3936 = xprefs__3935;

if(cljs.core.truth_(and__3546__auto____3936))
{return xprefs__3935.call(null,y);
} else
{return and__3546__auto____3936;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3937))
{return or__3548__auto____3937;
} else
{var or__3548__auto____3939 = (function (){var ps__3938 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3938) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3938),prefer_table)))
{} else
{}
{
var G__3942 = cljs.core.rest.call(null,ps__3938);
ps__3938 = G__3942;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{var or__3548__auto____3941 = (function (){var ps__3940 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3940) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3940),y,prefer_table)))
{} else
{}
{
var G__3943 = cljs.core.rest.call(null,ps__3940);
ps__3940 = G__3943;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3941))
{return or__3548__auto____3941;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3944 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3944))
{return or__3548__auto____3944;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3953 = cljs.core.reduce.call(null,(function (be,p__3945){
var vec__3946__3947 = p__3945;
var k__3948 = cljs.core.nth.call(null,vec__3946__3947,0,null);
var ___3949 = cljs.core.nth.call(null,vec__3946__3947,1,null);
var e__3950 = vec__3946__3947;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3948)))
{var be2__3952 = (cljs.core.truth_((function (){var or__3548__auto____3951 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3951))
{return or__3548__auto____3951;
} else
{return cljs.core.dominates.call(null,k__3948,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3950:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3952),k__3948,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3948," and ",cljs.core.first.call(null,be2__3952),", and neither is preferred")));
}
return be2__3952;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3953))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3953));
return cljs.core.second.call(null,best_entry__3953);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3954 = mf;

if(cljs.core.truth_(and__3546__auto____3954))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3954;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3955 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3955))
{return or__3548__auto____3955;
} else
{var or__3548__auto____3956 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3956))
{return or__3548__auto____3956;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3957 = mf;

if(cljs.core.truth_(and__3546__auto____3957))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3957;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3958 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3958))
{return or__3548__auto____3958;
} else
{var or__3548__auto____3959 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3960 = mf;

if(cljs.core.truth_(and__3546__auto____3960))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3960;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3961 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3961))
{return or__3548__auto____3961;
} else
{var or__3548__auto____3962 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3962))
{return or__3548__auto____3962;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3963 = mf;

if(cljs.core.truth_(and__3546__auto____3963))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3963;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3964 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3964))
{return or__3548__auto____3964;
} else
{var or__3548__auto____3965 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3966 = mf;

if(cljs.core.truth_(and__3546__auto____3966))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3966;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3967 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3967))
{return or__3548__auto____3967;
} else
{var or__3548__auto____3968 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3968))
{return or__3548__auto____3968;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3969 = mf;

if(cljs.core.truth_(and__3546__auto____3969))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3969;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3970 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3970))
{return or__3548__auto____3970;
} else
{var or__3548__auto____3971 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3971))
{return or__3548__auto____3971;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3972 = mf;

if(cljs.core.truth_(and__3546__auto____3972))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3972;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3973 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3973))
{return or__3548__auto____3973;
} else
{var or__3548__auto____3974 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3974))
{return or__3548__auto____3974;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3975 = mf;

if(cljs.core.truth_(and__3546__auto____3975))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3975;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3976 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3976))
{return or__3548__auto____3976;
} else
{var or__3548__auto____3977 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3977))
{return or__3548__auto____3977;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3978 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3979 = cljs.core._get_method.call(null,mf,dispatch_val__3978);

if(cljs.core.truth_(target_fn__3979))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3978)));
}
return cljs.core.apply.call(null,target_fn__3979,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3980 = this;
cljs.core.swap_BANG_.call(null,this__3980.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3980.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3980.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3980.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3981 = this;
cljs.core.swap_BANG_.call(null,this__3981.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3981.method_cache,this__3981.method_table,this__3981.cached_hierarchy,this__3981.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3982 = this;
cljs.core.swap_BANG_.call(null,this__3982.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3982.method_cache,this__3982.method_table,this__3982.cached_hierarchy,this__3982.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3983 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3983.cached_hierarchy),cljs.core.deref.call(null,this__3983.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3983.method_cache,this__3983.method_table,this__3983.cached_hierarchy,this__3983.hierarchy);
}
var temp__3695__auto____3984 = cljs.core.deref.call(null,this__3983.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3984))
{var target_fn__3985 = temp__3695__auto____3984;

return target_fn__3985;
} else
{var temp__3695__auto____3986 = cljs.core.find_and_cache_best_method.call(null,this__3983.name,dispatch_val,this__3983.hierarchy,this__3983.method_table,this__3983.prefer_table,this__3983.method_cache,this__3983.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3986))
{var target_fn__3987 = temp__3695__auto____3986;

return target_fn__3987;
} else
{return cljs.core.deref.call(null,this__3983.method_table).call(null,this__3983.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3988 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3988.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3988.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3988.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3988.method_cache,this__3988.method_table,this__3988.cached_hierarchy,this__3988.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3989 = this;
return cljs.core.deref.call(null,this__3989.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3990 = this;
return cljs.core.deref.call(null,this__3990.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3991 = this;
return cljs.core.do_invoke.call(null,mf,this__3991.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3992__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3992 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3992__delegate.call(this, _, args);
};
G__3992.cljs$lang$maxFixedArity = 1;
G__3992.cljs$lang$applyTo = (function (arglist__3993){
var _ = cljs.core.first(arglist__3993);
var args = cljs.core.rest(arglist__3993);
return G__3992__delegate.call(this, _, args);
});
return G__3992;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
