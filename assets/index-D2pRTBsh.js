(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Zh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ep={exports:{}},Bo={},tp={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),Ay=Symbol.for("react.portal"),Oy=Symbol.for("react.fragment"),Dy=Symbol.for("react.strict_mode"),by=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),Ly=Symbol.for("react.context"),Fy=Symbol.for("react.forward_ref"),zy=Symbol.for("react.suspense"),jy=Symbol.for("react.memo"),Uy=Symbol.for("react.lazy"),Sf=Symbol.iterator;function Wy(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rp=Object.assign,ip={};function Lr(t,e,n){this.props=t,this.context=e,this.refs=ip,this.updater=n||np}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sp(){}sp.prototype=Lr.prototype;function zu(t,e,n){this.props=t,this.context=e,this.refs=ip,this.updater=n||np}var ju=zu.prototype=new sp;ju.constructor=zu;rp(ju,Lr.prototype);ju.isPureReactComponent=!0;var kf=Array.isArray,op=Object.prototype.hasOwnProperty,Uu={current:null},lp={key:!0,ref:!0,__self:!0,__source:!0};function ap(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)op.call(e,r)&&!lp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zi,type:t,key:s,ref:o,props:i,_owner:Uu.current}}function By(t,e){return{$$typeof:Zi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zi}function Hy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xf=/\/+/g;function wl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hy(""+t.key):e.toString(36)}function Ms(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zi:case Ay:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wl(o,0):r,kf(i)?(n="",t!=null&&(n=t.replace(xf,"$&/")+"/"),Ms(i,e,n,"",function(u){return u})):i!=null&&(Wu(i)&&(i=By(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kf(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+wl(s,l);o+=Ms(s,e,n,a,i)}else if(a=Wy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+wl(s,l++),o+=Ms(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ms(t,e,n){if(t==null)return t;var r=[],i=0;return Ms(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $y(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ne={current:null},Ls={transition:null},Vy={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:Uu};function up(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ms,forEach:function(t,e,n){ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ms(t,function(){e++}),e},toArray:function(t){return ms(t,function(e){return e})||[]},only:function(t){if(!Wu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Lr;F.Fragment=Oy;F.Profiler=by;F.PureComponent=zu;F.StrictMode=Dy;F.Suspense=zy;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vy;F.act=up;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)op.call(e,a)&&!lp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zi,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:Ly,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:My,_context:t},t.Consumer=t};F.createElement=ap;F.createFactory=function(t){var e=ap.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:Fy,render:t}};F.isValidElement=Wu;F.lazy=function(t){return{$$typeof:Uy,_payload:{_status:-1,_result:t},_init:$y}};F.memo=function(t,e){return{$$typeof:jy,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=Ls.transition;Ls.transition={};try{t()}finally{Ls.transition=e}};F.unstable_act=up;F.useCallback=function(t,e){return Ne.current.useCallback(t,e)};F.useContext=function(t){return Ne.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Ne.current.useDeferredValue(t)};F.useEffect=function(t,e){return Ne.current.useEffect(t,e)};F.useId=function(){return Ne.current.useId()};F.useImperativeHandle=function(t,e,n){return Ne.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Ne.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Ne.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Ne.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Ne.current.useReducer(t,e,n)};F.useRef=function(t){return Ne.current.useRef(t)};F.useState=function(t){return Ne.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Ne.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Ne.current.useTransition()};F.version="18.3.1";tp.exports=F;var Vt=tp.exports;const cp=Zh(Vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=Vt,Gy=Symbol.for("react.element"),Qy=Symbol.for("react.fragment"),Ky=Object.prototype.hasOwnProperty,qy=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xy={key:!0,ref:!0,__self:!0,__source:!0};function fp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ky.call(e,r)&&!Xy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Gy,type:t,key:s,ref:o,props:i,_owner:qy.current}}Bo.Fragment=Qy;Bo.jsx=fp;Bo.jsxs=fp;ep.exports=Bo;var z=ep.exports,dp={exports:{}},Ve={},hp={exports:{}},pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,A){var O=k.length;k.push(A);e:for(;0<O;){var se=O-1>>>1,fe=k[se];if(0<i(fe,A))k[se]=A,k[O]=fe,O=se;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var A=k[0],O=k.pop();if(O!==A){k[0]=O;e:for(var se=0,fe=k.length,hs=fe>>>1;se<hs;){var yn=2*(se+1)-1,vl=k[yn],vn=yn+1,ps=k[vn];if(0>i(vl,O))vn<fe&&0>i(ps,vl)?(k[se]=ps,k[vn]=O,se=vn):(k[se]=vl,k[yn]=O,se=yn);else if(vn<fe&&0>i(ps,O))k[se]=ps,k[vn]=O,se=vn;else break e}}return A}function i(k,A){var O=k.sortIndex-A.sortIndex;return O!==0?O:k.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,f=null,d=3,g=!1,_=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=k)r(u),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(u)}}function v(k){if(y=!1,m(k),!_)if(n(a)!==null)_=!0,_l(C);else{var A=n(u);A!==null&&yl(v,A.startTime-k)}}function C(k,A){_=!1,y&&(y=!1,p(P),P=-1),g=!0;var O=d;try{for(m(A),f=n(a);f!==null&&(!(f.expirationTime>A)||k&&!et());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var fe=se(f.expirationTime<=A);A=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(a)&&r(a),m(A)}else r(a);f=n(a)}if(f!==null)var hs=!0;else{var yn=n(u);yn!==null&&yl(v,yn.startTime-A),hs=!1}return hs}finally{f=null,d=O,g=!1}}var N=!1,T=null,P=-1,ie=5,j=-1;function et(){return!(t.unstable_now()-j<ie)}function Hr(){if(T!==null){var k=t.unstable_now();j=k;var A=!0;try{A=T(!0,k)}finally{A?$r():(N=!1,T=null)}}else N=!1}var $r;if(typeof h=="function")$r=function(){h(Hr)};else if(typeof MessageChannel<"u"){var Cf=new MessageChannel,Ry=Cf.port2;Cf.port1.onmessage=Hr,$r=function(){Ry.postMessage(null)}}else $r=function(){x(Hr,0)};function _l(k){T=k,N||(N=!0,$r())}function yl(k,A){P=x(function(){k(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,_l(C))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var A=3;break;default:A=d}var O=d;d=A;try{return k()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,A){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var O=d;d=k;try{return A()}finally{d=O}},t.unstable_scheduleCallback=function(k,A,O){var se=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?se+O:se):O=se,k){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=O+fe,k={id:c++,callback:A,priorityLevel:k,startTime:O,expirationTime:fe,sortIndex:-1},O>se?(k.sortIndex=O,e(u,k),n(a)===null&&k===n(u)&&(y?(p(P),P=-1):y=!0,yl(v,O-se))):(k.sortIndex=fe,e(a,k),_||g||(_=!0,_l(C))),k},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(k){var A=d;return function(){var O=d;d=A;try{return k.apply(this,arguments)}finally{d=O}}}})(pp);hp.exports=pp;var Jy=hp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=Vt,$e=Jy;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mp=new Set,xi={};function $n(t,e){Sr(t,e),Sr(t+"Capture",e)}function Sr(t,e){for(xi[t]=e,t=0;t<e.length;t++)mp.add(e[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ua=Object.prototype.hasOwnProperty,ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,If={},Tf={};function tv(t){return ua.call(Tf,t)?!0:ua.call(If,t)?!1:ev.test(t)?Tf[t]=!0:(If[t]=!0,!1)}function nv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rv(t,e,n,r){if(e===null||typeof e>"u"||nv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bu=/[\-:]([a-z])/g;function Hu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bu,Hu);ve[e]=new Pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bu,Hu);ve[e]=new Pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bu,Hu);ve[e]=new Pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Pe(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function $u(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rv(e,n,i,r)&&(n=null),r||i===null?tv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lt=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gs=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),Yu=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),da=Symbol.for("react.suspense_list"),Gu=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),yp=Symbol.for("react.offscreen"),Nf=Symbol.iterator;function Vr(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,El;function ri(t){if(El===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);El=e&&e[1]||""}return`
`+El+t}var Cl=!1;function Sl(t,e){if(!t||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ri(t):""}function iv(t){switch(t.tag){case 5:return ri(t.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return t=Sl(t.type,!1),t;case 11:return t=Sl(t.type.render,!1),t;case 1:return t=Sl(t.type,!0),t;default:return""}}function ha(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xn:return"Fragment";case qn:return"Portal";case ca:return"Profiler";case Vu:return"StrictMode";case fa:return"Suspense";case da:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _p:return(t.displayName||"Context")+".Consumer";case gp:return(t._context.displayName||"Context")+".Provider";case Yu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gu:return e=t.displayName||null,e!==null?e:ha(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return ha(t(e))}catch{}}return null}function sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ha(e);case 8:return e===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ov(t){var e=vp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){t._valueTracker||(t._valueTracker=ov(t))}function wp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pa(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ep(t,e){e=e.checked,e!=null&&$u(t,"checked",e,!1)}function ma(t,e){Ep(t,e);var n=ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ga(t,e.type,n):e.hasOwnProperty("defaultValue")&&ga(t,e.type,ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ga(t,e,n){(e!=="number"||qs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ii=Array.isArray;function dr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _a(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(ii(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ln(n)}}function Cp(t,e){var n=ln(e.value),r=ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Of(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ys,kp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ys=ys||document.createElement("div"),ys.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ys.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ii(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lv=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(t){lv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ui[e]=ui[t]})});function xp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ui.hasOwnProperty(t)&&ui[t]?(""+e).trim():e+"px"}function Ip(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var av=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(t,e){if(e){if(av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function wa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,hr=null,pr=null;function Df(t){if(t=ns(t)){if(typeof Ca!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Go(e),Ca(t.stateNode,t.type,e))}}function Tp(t){hr?pr?pr.push(t):pr=[t]:hr=t}function Np(){if(hr){var t=hr,e=pr;if(pr=hr=null,Df(t),e)for(t=0;t<e.length;t++)Df(e[t])}}function Pp(t,e){return t(e)}function Rp(){}var kl=!1;function Ap(t,e,n){if(kl)return t(e,n);kl=!0;try{return Pp(t,e,n)}finally{kl=!1,(hr!==null||pr!==null)&&(Rp(),Np())}}function Ti(t,e){var n=t.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Sa=!1;if(Nt)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Sa=!1}function uv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ci=!1,Xs=null,Js=!1,ka=null,cv={onError:function(t){ci=!0,Xs=t}};function fv(t,e,n,r,i,s,o,l,a){ci=!1,Xs=null,uv.apply(cv,arguments)}function dv(t,e,n,r,i,s,o,l,a){if(fv.apply(this,arguments),ci){if(ci){var u=Xs;ci=!1,Xs=null}else throw Error(w(198));Js||(Js=!0,ka=u)}}function Vn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Op(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bf(t){if(Vn(t)!==t)throw Error(w(188))}function hv(t){var e=t.alternate;if(!e){if(e=Vn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bf(i),t;if(s===r)return bf(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Dp(t){return t=hv(t),t!==null?bp(t):null}function bp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bp(t);if(e!==null)return e;t=t.sibling}return null}var Mp=$e.unstable_scheduleCallback,Mf=$e.unstable_cancelCallback,pv=$e.unstable_shouldYield,mv=$e.unstable_requestPaint,oe=$e.unstable_now,gv=$e.unstable_getCurrentPriorityLevel,Ku=$e.unstable_ImmediatePriority,Lp=$e.unstable_UserBlockingPriority,Zs=$e.unstable_NormalPriority,_v=$e.unstable_LowPriority,Fp=$e.unstable_IdlePriority,Ho=null,yt=null;function yv(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ho,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Ev,vv=Math.log,wv=Math.LN2;function Ev(t){return t>>>=0,t===0?32:31-(vv(t)/wv|0)|0}var vs=64,ws=4194304;function si(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=si(l):(s&=o,s!==0&&(r=si(s)))}else o=n&~i,o!==0?r=si(o):s!==0&&(r=si(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-at(e),i=1<<n,r|=t[n],e&=~i;return r}function Cv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-at(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Cv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function xa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zp(){var t=vs;return vs<<=1,!(vs&4194240)&&(vs=64),t}function xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-at(e),t[e]=n}function kv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-at(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-at(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function jp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Up,Xu,Wp,Bp,Hp,Ia=!1,Es=[],Kt=null,qt=null,Xt=null,Ni=new Map,Pi=new Map,Ht=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Ni.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(e.pointerId)}}function Gr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ns(e),e!==null&&Xu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Iv(t,e,n,r,i){switch(e){case"focusin":return Kt=Gr(Kt,t,e,n,r,i),!0;case"dragenter":return qt=Gr(qt,t,e,n,r,i),!0;case"mouseover":return Xt=Gr(Xt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ni.set(s,Gr(Ni.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pi.set(s,Gr(Pi.get(s)||null,t,e,n,r,i)),!0}return!1}function $p(t){var e=xn(t.target);if(e!==null){var n=Vn(e);if(n!==null){if(e=n.tag,e===13){if(e=Op(n),e!==null){t.blockedOn=e,Hp(t.priority,function(){Wp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ta(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ea=r,n.target.dispatchEvent(r),Ea=null}else return e=ns(n),e!==null&&Xu(e),t.blockedOn=n,!1;e.shift()}return!0}function Ff(t,e,n){Fs(t)&&n.delete(e)}function Tv(){Ia=!1,Kt!==null&&Fs(Kt)&&(Kt=null),qt!==null&&Fs(qt)&&(qt=null),Xt!==null&&Fs(Xt)&&(Xt=null),Ni.forEach(Ff),Pi.forEach(Ff)}function Qr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ia||(Ia=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Tv)))}function Ri(t){function e(i){return Qr(i,t)}if(0<Es.length){Qr(Es[0],t);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kt!==null&&Qr(Kt,t),qt!==null&&Qr(qt,t),Xt!==null&&Qr(Xt,t),Ni.forEach(e),Pi.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)$p(n),n.blockedOn===null&&Ht.shift()}var mr=Lt.ReactCurrentBatchConfig,to=!0;function Nv(t,e,n,r){var i=B,s=mr.transition;mr.transition=null;try{B=1,Ju(t,e,n,r)}finally{B=i,mr.transition=s}}function Pv(t,e,n,r){var i=B,s=mr.transition;mr.transition=null;try{B=4,Ju(t,e,n,r)}finally{B=i,mr.transition=s}}function Ju(t,e,n,r){if(to){var i=Ta(t,e,n,r);if(i===null)Ml(t,e,r,no,n),Lf(t,r);else if(Iv(i,t,e,n,r))r.stopPropagation();else if(Lf(t,r),e&4&&-1<xv.indexOf(t)){for(;i!==null;){var s=ns(i);if(s!==null&&Up(s),s=Ta(t,e,n,r),s===null&&Ml(t,e,r,no,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ml(t,e,r,null,n)}}var no=null;function Ta(t,e,n,r){if(no=null,t=Qu(r),t=xn(t),t!==null)if(e=Vn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Op(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return no=t,null}function Vp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case Ku:return 1;case Lp:return 4;case Zs:case _v:return 16;case Fp:return 536870912;default:return 16}default:return 16}}var Yt=null,Zu=null,zs=null;function Yp(){if(zs)return zs;var t,e=Zu,n=e.length,r,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zs=i.slice(t,1<r?1-r:void 0)}function js(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cs(){return!0}function zf(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cs:zf,this.isPropagationStopped=zf,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),e}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Ye(Fr),ts=te({},Fr,{view:0,detail:0}),Rv=Ye(ts),Il,Tl,Kr,$o=te({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(Il=t.screenX-Kr.screenX,Tl=t.screenY-Kr.screenY):Tl=Il=0,Kr=t),Il)},movementY:function(t){return"movementY"in t?t.movementY:Tl}}),jf=Ye($o),Av=te({},$o,{dataTransfer:0}),Ov=Ye(Av),Dv=te({},ts,{relatedTarget:0}),Nl=Ye(Dv),bv=te({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=Ye(bv),Lv=te({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Ye(Lv),zv=te({},Fr,{data:0}),Uf=Ye(zv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wv[t])?!!e[t]:!1}function tc(){return Bv}var Hv=te({},ts,{key:function(t){if(t.key){var e=jv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=Ye(Hv),Vv=te({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Ye(Vv),Yv=te({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),Gv=Ye(Yv),Qv=te({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Ye(Qv),qv=te({},$o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Ye(qv),Jv=[9,13,27,32],nc=Nt&&"CompositionEvent"in window,fi=null;Nt&&"documentMode"in document&&(fi=document.documentMode);var Zv=Nt&&"TextEvent"in window&&!fi,Gp=Nt&&(!nc||fi&&8<fi&&11>=fi),Bf=" ",Hf=!1;function Qp(t,e){switch(t){case"keyup":return Jv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jn=!1;function e0(t,e){switch(t){case"compositionend":return Kp(e);case"keypress":return e.which!==32?null:(Hf=!0,Bf);case"textInput":return t=e.data,t===Bf&&Hf?null:t;default:return null}}function t0(t,e){if(Jn)return t==="compositionend"||!nc&&Qp(t,e)?(t=Yp(),zs=Zu=Yt=null,Jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gp&&e.locale!=="ko"?null:e.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n0[t.type]:e==="textarea"}function qp(t,e,n,r){Tp(r),e=ro(e,"onChange"),0<e.length&&(n=new ec("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var di=null,Ai=null;function r0(t){lm(t,0)}function Vo(t){var e=tr(t);if(wp(e))return t}function i0(t,e){if(t==="change")return e}var Xp=!1;if(Nt){var Pl;if(Nt){var Rl="oninput"in document;if(!Rl){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),Rl=typeof Vf.oninput=="function"}Pl=Rl}else Pl=!1;Xp=Pl&&(!document.documentMode||9<document.documentMode)}function Yf(){di&&(di.detachEvent("onpropertychange",Jp),Ai=di=null)}function Jp(t){if(t.propertyName==="value"&&Vo(Ai)){var e=[];qp(e,Ai,t,Qu(t)),Ap(r0,e)}}function s0(t,e,n){t==="focusin"?(Yf(),di=e,Ai=n,di.attachEvent("onpropertychange",Jp)):t==="focusout"&&Yf()}function o0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vo(Ai)}function l0(t,e){if(t==="click")return Vo(e)}function a0(t,e){if(t==="input"||t==="change")return Vo(e)}function u0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:u0;function Oi(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ua.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qf(t,e){var n=Gf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gf(n)}}function Zp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function em(){for(var t=window,e=qs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qs(t.document)}return e}function rc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c0(t){var e=em(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zp(n.ownerDocument.documentElement,n)){if(r!==null&&rc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qf(n,s);var o=Qf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var f0=Nt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Na=null,hi=null,Pa=!1;function Kf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pa||Zn==null||Zn!==qs(r)||(r=Zn,"selectionStart"in r&&rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Oi(hi,r)||(hi=r,r=ro(Na,"onSelect"),0<r.length&&(e=new ec("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zn)))}function Ss(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var er={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},Al={},tm={};Nt&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Yo(t){if(Al[t])return Al[t];if(!er[t])return t;var e=er[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tm)return Al[t]=e[n];return t}var nm=Yo("animationend"),rm=Yo("animationiteration"),im=Yo("animationstart"),sm=Yo("transitionend"),om=new Map,qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(t,e){om.set(t,e),$n(e,[t])}for(var Ol=0;Ol<qf.length;Ol++){var Dl=qf[Ol],d0=Dl.toLowerCase(),h0=Dl[0].toUpperCase()+Dl.slice(1);pn(d0,"on"+h0)}pn(nm,"onAnimationEnd");pn(rm,"onAnimationIteration");pn(im,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(sm,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function Xf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dv(r,e,void 0,t),t.currentTarget=null}function lm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Xf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Xf(i,l,u),s=a}}}if(Js)throw t=ka,Js=!1,ka=null,t}function G(t,e){var n=e[ba];n===void 0&&(n=e[ba]=new Set);var r=t+"__bubble";n.has(r)||(am(e,t,2,!1),n.add(r))}function bl(t,e,n){var r=0;e&&(r|=4),am(n,t,r,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[ks]){t[ks]=!0,mp.forEach(function(n){n!=="selectionchange"&&(p0.has(n)||bl(n,!1,t),bl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,bl("selectionchange",!1,e))}}function am(t,e,n,r){switch(Vp(e)){case 1:var i=Nv;break;case 4:i=Pv;break;default:i=Ju}n=i.bind(null,e,n,t),i=void 0,!Sa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ml(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=xn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ap(function(){var u=s,c=Qu(n),f=[];e:{var d=om.get(t);if(d!==void 0){var g=ec,_=t;switch(t){case"keypress":if(js(n)===0)break e;case"keydown":case"keyup":g=$v;break;case"focusin":_="focus",g=Nl;break;case"focusout":_="blur",g=Nl;break;case"beforeblur":case"afterblur":g=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Gv;break;case nm:case rm:case im:g=Mv;break;case sm:g=Kv;break;case"scroll":g=Rv;break;case"wheel":g=Xv;break;case"copy":case"cut":case"paste":g=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wf}var y=(e&4)!==0,x=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var h=u,m;h!==null;){m=h;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Ti(h,p),v!=null&&y.push(bi(h,v,m)))),x)break;h=h.return}0<y.length&&(d=new g(d,_,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Ea&&(_=n.relatedTarget||n.fromElement)&&(xn(_)||_[Pt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?xn(_):null,_!==null&&(x=Vn(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=jf,v="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=Wf,v="onPointerLeave",p="onPointerEnter",h="pointer"),x=g==null?d:tr(g),m=_==null?d:tr(_),d=new y(v,h+"leave",g,n,c),d.target=x,d.relatedTarget=m,v=null,xn(c)===u&&(y=new y(p,h+"enter",_,n,c),y.target=m,y.relatedTarget=x,v=y),x=v,g&&_)t:{for(y=g,p=_,h=0,m=y;m;m=Qn(m))h++;for(m=0,v=p;v;v=Qn(v))m++;for(;0<h-m;)y=Qn(y),h--;for(;0<m-h;)p=Qn(p),m--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=Qn(y),p=Qn(p)}y=null}else y=null;g!==null&&Jf(f,d,g,y,!1),_!==null&&x!==null&&Jf(f,x,_,y,!0)}}e:{if(d=u?tr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=i0;else if($f(d))if(Xp)C=a0;else{C=o0;var N=s0}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=l0);if(C&&(C=C(t,u))){qp(f,C,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&ga(d,"number",d.value)}switch(N=u?tr(u):window,t){case"focusin":($f(N)||N.contentEditable==="true")&&(Zn=N,Na=u,hi=null);break;case"focusout":hi=Na=Zn=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,Kf(f,n,c);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":Kf(f,n,c)}var T;if(nc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Jn?Qp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gp&&n.locale!=="ko"&&(Jn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Jn&&(T=Yp()):(Yt=c,Zu="value"in Yt?Yt.value:Yt.textContent,Jn=!0)),N=ro(u,P),0<N.length&&(P=new Uf(P,t,null,n,c),f.push({event:P,listeners:N}),T?P.data=T:(T=Kp(n),T!==null&&(P.data=T)))),(T=Zv?e0(t,n):t0(t,n))&&(u=ro(u,"onBeforeInput"),0<u.length&&(c=new Uf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}lm(f,e)})}function bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ti(t,n),s!=null&&r.unshift(bi(t,s,i)),s=Ti(t,e),s!=null&&r.push(bi(t,s,i))),t=t.return}return r}function Qn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ti(n,s),a!=null&&o.unshift(bi(n,a,l))):i||(a=Ti(n,s),a!=null&&o.push(bi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function Zf(t){return(typeof t=="string"?t:""+t).replace(m0,`
`).replace(g0,"")}function xs(t,e,n){if(e=Zf(e),Zf(t)!==e&&n)throw Error(w(425))}function io(){}var Ra=null,Aa=null;function Oa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(t){return ed.resolve(null).then(t).catch(v0)}:Da;function v0(t){setTimeout(function(){throw t})}function Ll(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ri(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function td(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zr=Math.random().toString(36).slice(2),mt="__reactFiber$"+zr,Mi="__reactProps$"+zr,Pt="__reactContainer$"+zr,ba="__reactEvents$"+zr,w0="__reactListeners$"+zr,E0="__reactHandles$"+zr;function xn(t){var e=t[mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=td(t);t!==null;){if(n=t[mt])return n;t=td(t)}return e}t=n,n=t.parentNode}return null}function ns(t){return t=t[mt]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Go(t){return t[Mi]||null}var Ma=[],nr=-1;function mn(t){return{current:t}}function K(t){0>nr||(t.current=Ma[nr],Ma[nr]=null,nr--)}function Y(t,e){nr++,Ma[nr]=t.current,t.current=e}var an={},xe=mn(an),be=mn(!1),Dn=an;function kr(t,e){var n=t.type.contextTypes;if(!n)return an;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Me(t){return t=t.childContextTypes,t!=null}function so(){K(be),K(xe)}function nd(t,e,n){if(xe.current!==an)throw Error(w(168));Y(xe,e),Y(be,n)}function um(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,sv(t)||"Unknown",i));return te({},n,r)}function oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||an,Dn=xe.current,Y(xe,t),Y(be,be.current),!0}function rd(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=um(t,e,Dn),r.__reactInternalMemoizedMergedChildContext=t,K(be),K(xe),Y(xe,t)):K(be),Y(be,n)}var Ct=null,Qo=!1,Fl=!1;function cm(t){Ct===null?Ct=[t]:Ct.push(t)}function C0(t){Qo=!0,cm(t)}function gn(){if(!Fl&&Ct!==null){Fl=!0;var t=0,e=B;try{var n=Ct;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ct=null,Qo=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(t+1)),Mp(Ku,gn),i}finally{B=e,Fl=!1}}return null}var rr=[],ir=0,lo=null,ao=0,Qe=[],Ke=0,bn=null,St=1,kt="";function wn(t,e){rr[ir++]=ao,rr[ir++]=lo,lo=t,ao=e}function fm(t,e,n){Qe[Ke++]=St,Qe[Ke++]=kt,Qe[Ke++]=bn,bn=t;var r=St;t=kt;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,St=1<<32-at(e)+i|n<<i|r,kt=s+t}else St=1<<s|n<<i|r,kt=t}function ic(t){t.return!==null&&(wn(t,1),fm(t,1,0))}function sc(t){for(;t===lo;)lo=rr[--ir],rr[ir]=null,ao=rr[--ir],rr[ir]=null;for(;t===bn;)bn=Qe[--Ke],Qe[Ke]=null,kt=Qe[--Ke],Qe[Ke]=null,St=Qe[--Ke],Qe[Ke]=null}var Ue=null,je=null,X=!1,it=null;function dm(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function id(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ue=t,je=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ue=t,je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bn!==null?{id:St,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ue=t,je=null,!0):!1;default:return!1}}function La(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fa(t){if(X){var e=je;if(e){var n=e;if(!id(t,e)){if(La(t))throw Error(w(418));e=Jt(n.nextSibling);var r=Ue;e&&id(t,e)?dm(r,n):(t.flags=t.flags&-4097|2,X=!1,Ue=t)}}else{if(La(t))throw Error(w(418));t.flags=t.flags&-4097|2,X=!1,Ue=t}}}function sd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ue=t}function Is(t){if(t!==Ue)return!1;if(!X)return sd(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oa(t.type,t.memoizedProps)),e&&(e=je)){if(La(t))throw hm(),Error(w(418));for(;e;)dm(t,e),e=Jt(e.nextSibling)}if(sd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){je=Jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}je=null}}else je=Ue?Jt(t.stateNode.nextSibling):null;return!0}function hm(){for(var t=je;t;)t=Jt(t.nextSibling)}function xr(){je=Ue=null,X=!1}function oc(t){it===null?it=[t]:it.push(t)}var S0=Lt.ReactCurrentBatchConfig;function qr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Ts(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function od(t){var e=t._init;return e(t._payload)}function pm(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=nn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,v){return h===null||h.tag!==6?(h=$l(m,p.mode,v),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,v){var C=m.type;return C===Xn?c(p,h,m.props.children,v,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wt&&od(C)===h.type)?(v=i(h,m.props),v.ref=qr(p,h,m),v.return=p,v):(v=Ys(m.type,m.key,m.props,null,p.mode,v),v.ref=qr(p,h,m),v.return=p,v)}function u(p,h,m,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Vl(m,p.mode,v),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,v,C){return h===null||h.tag!==7?(h=Rn(m,p.mode,v,C),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=$l(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gs:return m=Ys(h.type,h.key,h.props,null,p.mode,m),m.ref=qr(p,null,h),m.return=p,m;case qn:return h=Vl(h,p.mode,m),h.return=p,h;case Wt:var v=h._init;return f(p,v(h._payload),m)}if(ii(h)||Vr(h))return h=Rn(h,p.mode,m,null),h.return=p,h;Ts(p,h)}return null}function d(p,h,m,v){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(p,h,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gs:return m.key===C?a(p,h,m,v):null;case qn:return m.key===C?u(p,h,m,v):null;case Wt:return C=m._init,d(p,h,C(m._payload),v)}if(ii(m)||Vr(m))return C!==null?null:c(p,h,m,v,null);Ts(p,m)}return null}function g(p,h,m,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,l(h,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gs:return p=p.get(v.key===null?m:v.key)||null,a(h,p,v,C);case qn:return p=p.get(v.key===null?m:v.key)||null,u(h,p,v,C);case Wt:var N=v._init;return g(p,h,m,N(v._payload),C)}if(ii(v)||Vr(v))return p=p.get(m)||null,c(h,p,v,C,null);Ts(h,v)}return null}function _(p,h,m,v){for(var C=null,N=null,T=h,P=h=0,ie=null;T!==null&&P<m.length;P++){T.index>P?(ie=T,T=null):ie=T.sibling;var j=d(p,T,m[P],v);if(j===null){T===null&&(T=ie);break}t&&T&&j.alternate===null&&e(p,T),h=s(j,h,P),N===null?C=j:N.sibling=j,N=j,T=ie}if(P===m.length)return n(p,T),X&&wn(p,P),C;if(T===null){for(;P<m.length;P++)T=f(p,m[P],v),T!==null&&(h=s(T,h,P),N===null?C=T:N.sibling=T,N=T);return X&&wn(p,P),C}for(T=r(p,T);P<m.length;P++)ie=g(T,p,P,m[P],v),ie!==null&&(t&&ie.alternate!==null&&T.delete(ie.key===null?P:ie.key),h=s(ie,h,P),N===null?C=ie:N.sibling=ie,N=ie);return t&&T.forEach(function(et){return e(p,et)}),X&&wn(p,P),C}function y(p,h,m,v){var C=Vr(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var N=C=null,T=h,P=h=0,ie=null,j=m.next();T!==null&&!j.done;P++,j=m.next()){T.index>P?(ie=T,T=null):ie=T.sibling;var et=d(p,T,j.value,v);if(et===null){T===null&&(T=ie);break}t&&T&&et.alternate===null&&e(p,T),h=s(et,h,P),N===null?C=et:N.sibling=et,N=et,T=ie}if(j.done)return n(p,T),X&&wn(p,P),C;if(T===null){for(;!j.done;P++,j=m.next())j=f(p,j.value,v),j!==null&&(h=s(j,h,P),N===null?C=j:N.sibling=j,N=j);return X&&wn(p,P),C}for(T=r(p,T);!j.done;P++,j=m.next())j=g(T,p,P,j.value,v),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?P:j.key),h=s(j,h,P),N===null?C=j:N.sibling=j,N=j);return t&&T.forEach(function(Hr){return e(p,Hr)}),X&&wn(p,P),C}function x(p,h,m,v){if(typeof m=="object"&&m!==null&&m.type===Xn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gs:e:{for(var C=m.key,N=h;N!==null;){if(N.key===C){if(C=m.type,C===Xn){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wt&&od(C)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=qr(p,N,m),h.return=p,p=h;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Xn?(h=Rn(m.props.children,p.mode,v,m.key),h.return=p,p=h):(v=Ys(m.type,m.key,m.props,null,p.mode,v),v.ref=qr(p,h,m),v.return=p,p=v)}return o(p);case qn:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Vl(m,p.mode,v),h.return=p,p=h}return o(p);case Wt:return N=m._init,x(p,h,N(m._payload),v)}if(ii(m))return _(p,h,m,v);if(Vr(m))return y(p,h,m,v);Ts(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=$l(m,p.mode,v),h.return=p,p=h),o(p)):n(p,h)}return x}var Ir=pm(!0),mm=pm(!1),uo=mn(null),co=null,sr=null,lc=null;function ac(){lc=sr=co=null}function uc(t){var e=uo.current;K(uo),t._currentValue=e}function za(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gr(t,e){co=t,lc=sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(lc!==t)if(t={context:t,memoizedValue:e,next:null},sr===null){if(co===null)throw Error(w(308));sr=t,co.dependencies={lanes:0,firstContext:t}}else sr=sr.next=t;return e}var In=null;function cc(t){In===null?In=[t]:In.push(t)}function gm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rt(t,r)}function Rt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bt=!1;function fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function It(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rt(t,n)}return i=r.interleaved,i===null?(e.next=e,cc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rt(t,n)}function Us(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qu(t,n)}}function ld(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fo(t,e,n,r){var i=t.updateQueue;Bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(d=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(g,f,d):_,d==null)break e;f=te({},f,d);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=f):c=c.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ln|=o,t.lanes=o,t.memoizedState=f}}function ad(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var rs={},vt=mn(rs),Li=mn(rs),Fi=mn(rs);function Tn(t){if(t===rs)throw Error(w(174));return t}function dc(t,e){switch(Y(Fi,e),Y(Li,t),Y(vt,rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ya(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ya(e,t)}K(vt),Y(vt,e)}function Tr(){K(vt),K(Li),K(Fi)}function ym(t){Tn(Fi.current);var e=Tn(vt.current),n=ya(e,t.type);e!==n&&(Y(Li,t),Y(vt,n))}function hc(t){Li.current===t&&(K(vt),K(Li))}var Z=mn(0);function ho(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zl=[];function pc(){for(var t=0;t<zl.length;t++)zl[t]._workInProgressVersionPrimary=null;zl.length=0}var Ws=Lt.ReactCurrentDispatcher,jl=Lt.ReactCurrentBatchConfig,Mn=0,ee=null,ae=null,he=null,po=!1,pi=!1,zi=0,k0=0;function we(){throw Error(w(321))}function mc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function gc(t,e,n,r,i,s){if(Mn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ws.current=t===null||t.memoizedState===null?N0:P0,t=n(r,i),pi){s=0;do{if(pi=!1,zi=0,25<=s)throw Error(w(301));s+=1,he=ae=null,e.updateQueue=null,Ws.current=R0,t=n(r,i)}while(pi)}if(Ws.current=mo,e=ae!==null&&ae.next!==null,Mn=0,he=ae=ee=null,po=!1,e)throw Error(w(300));return t}function _c(){var t=zi!==0;return zi=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=t:he=he.next=t,he}function Ze(){if(ae===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=he===null?ee.memoizedState:he.next;if(e!==null)he=e,ae=t;else{if(t===null)throw Error(w(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},he===null?ee.memoizedState=he=t:he=he.next=t}return he}function ji(t,e){return typeof e=="function"?e(t):e}function Ul(t){var e=Ze(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Mn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,ee.lanes|=c,Ln|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ft(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Ln|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wl(t){var e=Ze(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(Ae=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vm(){}function wm(t,e){var n=ee,r=Ze(),i=e(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,yc(Sm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Ui(9,Cm.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(w(349));Mn&30||Em(n,e,i)}return i}function Em(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cm(t,e,n,r){e.value=n,e.getSnapshot=r,km(e)&&xm(t)}function Sm(t,e,n){return n(function(){km(e)&&xm(t)})}function km(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function xm(t){var e=Rt(t,1);e!==null&&ut(e,t,1,-1)}function ud(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},e.queue=t,t=t.dispatch=T0.bind(null,ee,t),[e.memoizedState,t]}function Ui(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Im(){return Ze().memoizedState}function Bs(t,e,n,r){var i=ht();ee.flags|=t,i.memoizedState=Ui(1|e,n,void 0,r===void 0?null:r)}function Ko(t,e,n,r){var i=Ze();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&mc(r,o.deps)){i.memoizedState=Ui(e,n,s,r);return}}ee.flags|=t,i.memoizedState=Ui(1|e,n,s,r)}function cd(t,e){return Bs(8390656,8,t,e)}function yc(t,e){return Ko(2048,8,t,e)}function Tm(t,e){return Ko(4,2,t,e)}function Nm(t,e){return Ko(4,4,t,e)}function Pm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rm(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4,4,Pm.bind(null,e,t),n)}function vc(){}function Am(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Om(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dm(t,e,n){return Mn&21?(ft(n,e)||(n=zp(),ee.lanes|=n,Ln|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function x0(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=jl.transition;jl.transition={};try{t(!1),e()}finally{B=n,jl.transition=r}}function bm(){return Ze().memoizedState}function I0(t,e,n){var r=tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mm(t))Lm(e,n);else if(n=gm(t,e,n,r),n!==null){var i=Te();ut(n,t,r,i),Fm(n,e,r)}}function T0(t,e,n){var r=tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mm(t))Lm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,o)){var a=e.interleaved;a===null?(i.next=i,cc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=gm(t,e,i,r),n!==null&&(i=Te(),ut(n,t,r,i),Fm(n,e,r))}}function Mm(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function Lm(t,e){pi=po=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qu(t,n)}}var mo={readContext:Je,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},N0={readContext:Je,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:cd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bs(4194308,4,Pm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bs(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=I0.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:ud,useDebugValue:vc,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=ud(!1),e=t[0];return t=x0.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=ht();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ge===null)throw Error(w(349));Mn&30||Em(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cd(Sm.bind(null,r,s,t),[t]),r.flags|=2048,Ui(9,Cm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=ge.identifierPrefix;if(X){var n=kt,r=St;n=(r&~(1<<32-at(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=k0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},P0={readContext:Je,useCallback:Am,useContext:Je,useEffect:yc,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Nm,useMemo:Om,useReducer:Ul,useRef:Im,useState:function(){return Ul(ji)},useDebugValue:vc,useDeferredValue:function(t){var e=Ze();return Dm(e,ae.memoizedState,t)},useTransition:function(){var t=Ul(ji)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:vm,useSyncExternalStore:wm,useId:bm,unstable_isNewReconciler:!1},R0={readContext:Je,useCallback:Am,useContext:Je,useEffect:yc,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Nm,useMemo:Om,useReducer:Wl,useRef:Im,useState:function(){return Wl(ji)},useDebugValue:vc,useDeferredValue:function(t){var e=Ze();return ae===null?e.memoizedState=t:Dm(e,ae.memoizedState,t)},useTransition:function(){var t=Wl(ji)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:vm,useSyncExternalStore:wm,useId:bm,unstable_isNewReconciler:!1};function nt(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ja(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qo={isMounted:function(t){return(t=t._reactInternals)?Vn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=tn(t),s=It(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ut(e,t,i,r),Us(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=tn(t),s=It(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(ut(e,t,i,r),Us(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=tn(t),i=It(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zt(t,i,r),e!==null&&(ut(e,t,r,n),Us(e,t,r))}};function fd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,s):!0}function zm(t,e,n){var r=!1,i=an,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Me(e)?Dn:xe.current,r=e.contextTypes,s=(r=r!=null)?kr(t,i):an),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qo.enqueueReplaceState(e,e.state,null)}function Ua(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Me(e)?Dn:xe.current,i.context=kr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ja(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qo.enqueueReplaceState(i,i.state,null),fo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Nr(t,e){try{var n="",r=e;do n+=iv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function jm(t,e,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_o||(_o=!0,Xa=r),Wa(t,e)},n}function Um(t,e,n){n=It(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wa(t,e),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new A0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=V0.bind(null,t,e,n),e.then(t,t))}function pd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function md(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=It(-1,1),e.tag=2,Zt(n,e,1))),n.lanes|=1),t)}var O0=Lt.ReactCurrentOwner,Ae=!1;function Ie(t,e,n,r){e.child=t===null?mm(e,null,n,r):Ir(e,t.child,n,r)}function gd(t,e,n,r,i){n=n.render;var s=e.ref;return gr(e,i),r=gc(t,e,n,r,s,i),n=_c(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,At(t,e,i)):(X&&n&&ic(e),e.flags|=1,Ie(t,e,r,i),e.child)}function _d(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wm(t,e,s,r,i)):(t=Ys(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(o,r)&&t.ref===e.ref)return At(t,e,i)}return e.flags|=1,t=nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Wm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oi(s,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,At(t,e,i)}return Ba(t,e,n,r,i)}function Bm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(lr,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(lr,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(lr,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(lr,ze),ze|=r;return Ie(t,e,i,n),e.child}function Hm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ba(t,e,n,r,i){var s=Me(n)?Dn:xe.current;return s=kr(e,s),gr(e,i),n=gc(t,e,n,r,s,i),r=_c(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,At(t,e,i)):(X&&r&&ic(e),e.flags|=1,Ie(t,e,n,i),e.child)}function yd(t,e,n,r,i){if(Me(n)){var s=!0;oo(e)}else s=!1;if(gr(e,i),e.stateNode===null)Hs(t,e),zm(e,n,r),Ua(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Me(n)?Dn:xe.current,u=kr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&dd(e,o,r,u),Bt=!1;var d=e.memoizedState;o.state=d,fo(e,r,o,i),a=e.memoizedState,l!==r||d!==a||be.current||Bt?(typeof c=="function"&&(ja(e,n,c,r),a=e.memoizedState),(l=Bt||fd(e,n,l,r,d,a,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_m(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,f=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=Me(n)?Dn:xe.current,a=kr(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||d!==a)&&dd(e,o,r,a),Bt=!1,d=e.memoizedState,o.state=d,fo(e,r,o,i);var _=e.memoizedState;l!==f||d!==_||be.current||Bt?(typeof g=="function"&&(ja(e,n,g,r),_=e.memoizedState),(u=Bt||fd(e,n,u,r,d,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ha(t,e,n,r,s,i)}function Ha(t,e,n,r,i,s){Hm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rd(e,n,!1),At(t,e,s);r=e.stateNode,O0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ir(e,t.child,null,s),e.child=Ir(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=r.state,i&&rd(e,n,!0),e.child}function $m(t){var e=t.stateNode;e.pendingContext?nd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nd(t,e.context,!1),dc(t,e.containerInfo)}function vd(t,e,n,r,i){return xr(),oc(i),e.flags|=256,Ie(t,e,n,r),e.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Va(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vm(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(Z,i&1),t===null)return Fa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zo(o,r,0,null),t=Rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Va(n),e.memoizedState=$a,t):wc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return D0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nn(l,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Va(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$a,r}return s=t.child,t=s.sibling,r=nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wc(t,e){return e=Zo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ns(t,e,n,r){return r!==null&&oc(r),Ir(e,t.child,null,n),t=wc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bl(Error(w(422))),Ns(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zo({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ir(e,t.child,null,o),e.child.memoizedState=Va(o),e.memoizedState=$a,s);if(!(e.mode&1))return Ns(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=Bl(s,r,void 0),Ns(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ae||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rt(t,i),ut(r,t,i,-1))}return Ic(),r=Bl(Error(w(421))),Ns(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Y0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,je=Jt(i.nextSibling),Ue=e,X=!0,it=null,t!==null&&(Qe[Ke++]=St,Qe[Ke++]=kt,Qe[Ke++]=bn,St=t.id,kt=t.overflow,bn=e),e=wc(e,r.children),e.flags|=4096,e)}function wd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),za(t.return,e,n)}function Hl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ym(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wd(t,n,e);else if(t.tag===19)wd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ho(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ho(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hl(e,!0,n,null,s);break;case"together":Hl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function At(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ln|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function b0(t,e,n){switch(e.tag){case 3:$m(e),xr();break;case 5:ym(e);break;case 1:Me(e.type)&&oo(e);break;case 4:dc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?Vm(t,e,n):(Y(Z,Z.current&1),t=At(t,e,n),t!==null?t.sibling:null);Y(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ym(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,Bm(t,e,n)}return At(t,e,n)}var Gm,Ya,Qm,Km;Gm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Qm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(vt.current);var s=null;switch(n){case"input":i=pa(t,i),r=pa(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=_a(t,i),r=_a(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=io)}va(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&G("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Km=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xr(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function M0(t,e,n){var r=e.pendingProps;switch(sc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Me(e.type)&&so(),Ee(e),null;case 3:return r=e.stateNode,Tr(),K(be),K(xe),pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Is(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(eu(it),it=null))),Ya(t,e),Ee(e),null;case 5:hc(e);var i=Tn(Fi.current);if(n=e.type,t!==null&&e.stateNode!=null)Qm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ee(e),null}if(t=Tn(vt.current),Is(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mt]=e,r[Mi]=s,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<oi.length;i++)G(oi[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Pf(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":Af(r,s),G("invalid",r)}va(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",""+l]):xi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":_s(r),Rf(r,s,!0);break;case"textarea":_s(r),Of(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=io)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mt]=e,t[Mi]=r,Gm(t,e,!1,!1),e.stateNode=t;e:{switch(o=wa(n,r),n){case"dialog":G("cancel",t),G("close",t),i=r;break;case"iframe":case"object":case"embed":G("load",t),i=r;break;case"video":case"audio":for(i=0;i<oi.length;i++)G(oi[i],t);i=r;break;case"source":G("error",t),i=r;break;case"img":case"image":case"link":G("error",t),G("load",t),i=r;break;case"details":G("toggle",t),i=r;break;case"input":Pf(t,r),i=pa(t,r),G("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),G("invalid",t);break;case"textarea":Af(t,r),i=_a(t,r),G("invalid",t);break;default:i=r}va(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Ip(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&kp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ii(t,a):typeof a=="number"&&Ii(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&G("scroll",t):a!=null&&$u(t,s,a,o))}switch(n){case"input":_s(t),Rf(t,r,!1);break;case"textarea":_s(t),Of(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?dr(t,!!r.multiple,s,!1):r.defaultValue!=null&&dr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)Km(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Tn(Fi.current),Tn(vt.current),Is(e)){if(r=e.stateNode,n=e.memoizedProps,r[mt]=e,(s=r.nodeValue!==n)&&(t=Ue,t!==null))switch(t.tag){case 3:xs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=e,e.stateNode=r}return Ee(e),null;case 13:if(K(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&je!==null&&e.mode&1&&!(e.flags&128))hm(),xr(),e.flags|=98560,s=!1;else if(s=Is(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[mt]=e}else xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else it!==null&&(eu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?ce===0&&(ce=3):Ic())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Tr(),Ya(t,e),t===null&&Di(e.stateNode.containerInfo),Ee(e),null;case 10:return uc(e.type._context),Ee(e),null;case 17:return Me(e.type)&&so(),Ee(e),null;case 19:if(K(Z),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xr(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ho(t),o!==null){for(e.flags|=128,Xr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>Pr&&(e.flags|=128,r=!0,Xr(s,!1),e.lanes=4194304)}else{if(!r)if(t=ho(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Ee(e),null}else 2*oe()-s.renderingStartTime>Pr&&n!==1073741824&&(e.flags|=128,r=!0,Xr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=Z.current,Y(Z,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return xc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function L0(t,e){switch(sc(e),e.tag){case 1:return Me(e.type)&&so(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Tr(),K(be),K(xe),pc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hc(e),null;case 13:if(K(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(Z),null;case 4:return Tr(),null;case 10:return uc(e.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Ps=!1,Ce=!1,F0=typeof WeakSet=="function"?WeakSet:Set,S=null;function or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function Ga(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Ed=!1;function z0(t,e){if(Ra=to,t=em(),rc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:t,selectionRange:n},to=!1,S=e;S!==null;)if(e=S,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,S=t;else for(;S!==null;){e=S;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,x=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:nt(e.type,y),x);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){ne(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}return _=Ed,Ed=!1,_}function mi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ga(e,n,s)}i=i.next}while(i!==r)}}function Xo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qm(t){var e=t.alternate;e!==null&&(t.alternate=null,qm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mt],delete e[Mi],delete e[ba],delete e[w0],delete e[E0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xm(t){return t.tag===5||t.tag===3||t.tag===4}function Cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ka(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=io));else if(r!==4&&(t=t.child,t!==null))for(Ka(t,e,n),t=t.sibling;t!==null;)Ka(t,e,n),t=t.sibling}function qa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qa(t,e,n),t=t.sibling;t!==null;)qa(t,e,n),t=t.sibling}var _e=null,rt=!1;function jt(t,e,n){for(n=n.child;n!==null;)Jm(t,e,n),n=n.sibling}function Jm(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Ce||or(n,e);case 6:var r=_e,i=rt;_e=null,jt(t,e,n),_e=r,rt=i,_e!==null&&(rt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(rt?(t=_e,n=n.stateNode,t.nodeType===8?Ll(t.parentNode,n):t.nodeType===1&&Ll(t,n),Ri(t)):Ll(_e,n.stateNode));break;case 4:r=_e,i=rt,_e=n.stateNode.containerInfo,rt=!0,jt(t,e,n),_e=r,rt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ga(n,e,o),i=i.next}while(i!==r)}jt(t,e,n);break;case 1:if(!Ce&&(or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}jt(t,e,n);break;case 21:jt(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,jt(t,e,n),Ce=r):jt(t,e,n);break;default:jt(t,e,n)}}function Sd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F0),e.forEach(function(r){var i=G0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,rt=!1;break e;case 3:_e=l.stateNode.containerInfo,rt=!0;break e;case 4:_e=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(_e===null)throw Error(w(160));Jm(s,o,i),_e=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zm(e,t),e=e.sibling}function Zm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),dt(t),r&4){try{mi(3,t,t.return),Xo(3,t)}catch(y){ne(t,t.return,y)}try{mi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:tt(e,t),dt(t),r&512&&n!==null&&or(n,n.return);break;case 5:if(tt(e,t),dt(t),r&512&&n!==null&&or(n,n.return),t.flags&32){var i=t.stateNode;try{Ii(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ep(i,s),wa(l,o);var u=wa(l,s);for(o=0;o<a.length;o+=2){var c=a[o],f=a[o+1];c==="style"?Ip(i,f):c==="dangerouslySetInnerHTML"?kp(i,f):c==="children"?Ii(i,f):$u(i,c,f,u)}switch(l){case"input":ma(i,s);break;case"textarea":Cp(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?dr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?dr(i,!!s.multiple,s.defaultValue,!0):dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mi]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(tt(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(tt(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:tt(e,t),dt(t);break;case 13:tt(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sc=oe())),r&4&&Sd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(u=Ce)||c,tt(e,t),Ce=u):tt(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(S=t,c=t.child;c!==null;){for(f=S=c;S!==null;){switch(d=S,g=d.child,d.tag){case 0:case 11:case 14:case 15:mi(4,d,d.return);break;case 1:or(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:or(d,d.return);break;case 22:if(d.memoizedState!==null){xd(f);continue}}g!==null?(g.return=d,S=g):xd(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=xp("display",o))}catch(y){ne(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ne(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tt(e,t),dt(t),r&4&&Sd(t);break;case 21:break;default:tt(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var s=Cd(t);qa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cd(t);Ka(t,l,o);break;default:throw Error(w(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j0(t,e,n){S=t,eg(t)}function eg(t,e,n){for(var r=(t.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ps;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=Ps;var u=Ce;if(Ps=o,(Ce=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Id(i):a!==null?(a.return=o,S=a):Id(i);for(;s!==null;)S=s,eg(s),s=s.sibling;S=i,Ps=l,Ce=u}kd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):kd(t)}}function kd(t){for(;S!==null;){var e=S;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||Xo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ad(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ad(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ri(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ce||e.flags&512&&Qa(e)}catch(d){ne(e,e.return,d)}}if(e===t){S=null;break}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}}function xd(t){for(;S!==null;){var e=S;if(e===t){S=null;break}var n=e.sibling;if(n!==null){n.return=e.return,S=n;break}S=e.return}}function Id(t){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xo(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{Qa(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{Qa(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){S=null;break}var l=e.sibling;if(l!==null){l.return=e.return,S=l;break}S=e.return}}var U0=Math.ceil,go=Lt.ReactCurrentDispatcher,Ec=Lt.ReactCurrentOwner,Xe=Lt.ReactCurrentBatchConfig,U=0,ge=null,le=null,ye=0,ze=0,lr=mn(0),ce=0,Wi=null,Ln=0,Jo=0,Cc=0,gi=null,Re=null,Sc=0,Pr=1/0,Et=null,_o=!1,Xa=null,en=null,Rs=!1,Gt=null,yo=0,_i=0,Ja=null,$s=-1,Vs=0;function Te(){return U&6?oe():$s!==-1?$s:$s=oe()}function tn(t){return t.mode&1?U&2&&ye!==0?ye&-ye:S0.transition!==null?(Vs===0&&(Vs=zp()),Vs):(t=B,t!==0||(t=window.event,t=t===void 0?16:Vp(t.type)),t):1}function ut(t,e,n,r){if(50<_i)throw _i=0,Ja=null,Error(w(185));es(t,n,r),(!(U&2)||t!==ge)&&(t===ge&&(!(U&2)&&(Jo|=n),ce===4&&$t(t,ye)),Le(t,r),n===1&&U===0&&!(e.mode&1)&&(Pr=oe()+500,Qo&&gn()))}function Le(t,e){var n=t.callbackNode;Sv(t,e);var r=eo(t,t===ge?ye:0);if(r===0)n!==null&&Mf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mf(n),e===1)t.tag===0?C0(Td.bind(null,t)):cm(Td.bind(null,t)),y0(function(){!(U&6)&&gn()}),n=null;else{switch(jp(r)){case 1:n=Ku;break;case 4:n=Lp;break;case 16:n=Zs;break;case 536870912:n=Fp;break;default:n=Zs}n=ag(n,tg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tg(t,e){if($s=-1,Vs=0,U&6)throw Error(w(327));var n=t.callbackNode;if(_r()&&t.callbackNode!==n)return null;var r=eo(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vo(t,r);else{e=r;var i=U;U|=2;var s=rg();(ge!==t||ye!==e)&&(Et=null,Pr=oe()+500,Pn(t,e));do try{H0();break}catch(l){ng(t,l)}while(!0);ac(),go.current=s,U=i,le!==null?e=0:(ge=null,ye=0,e=ce)}if(e!==0){if(e===2&&(i=xa(t),i!==0&&(r=i,e=Za(t,i))),e===1)throw n=Wi,Pn(t,0),$t(t,r),Le(t,oe()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,!(r&30)&&!W0(i)&&(e=vo(t,r),e===2&&(s=xa(t),s!==0&&(r=s,e=Za(t,s))),e===1))throw n=Wi,Pn(t,0),$t(t,r),Le(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:En(t,Re,Et);break;case 3:if($t(t,r),(r&130023424)===r&&(e=Sc+500-oe(),10<e)){if(eo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Da(En.bind(null,t,Re,Et),e);break}En(t,Re,Et);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U0(r/1960))-r,10<r){t.timeoutHandle=Da(En.bind(null,t,Re,Et),r);break}En(t,Re,Et);break;case 5:En(t,Re,Et);break;default:throw Error(w(329))}}}return Le(t,oe()),t.callbackNode===n?tg.bind(null,t):null}function Za(t,e){var n=gi;return t.current.memoizedState.isDehydrated&&(Pn(t,e).flags|=256),t=vo(t,e),t!==2&&(e=Re,Re=n,e!==null&&eu(e)),t}function eu(t){Re===null?Re=t:Re.push.apply(Re,t)}function W0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~Cc,e&=~Jo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-at(e),r=1<<n;t[n]=-1,e&=~r}}function Td(t){if(U&6)throw Error(w(327));_r();var e=eo(t,0);if(!(e&1))return Le(t,oe()),null;var n=vo(t,e);if(t.tag!==0&&n===2){var r=xa(t);r!==0&&(e=r,n=Za(t,r))}if(n===1)throw n=Wi,Pn(t,0),$t(t,e),Le(t,oe()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,En(t,Re,Et),Le(t,oe()),null}function kc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Pr=oe()+500,Qo&&gn())}}function Fn(t){Gt!==null&&Gt.tag===0&&!(U&6)&&_r();var e=U;U|=1;var n=Xe.transition,r=B;try{if(Xe.transition=null,B=1,t)return t()}finally{B=r,Xe.transition=n,U=e,!(U&6)&&gn()}}function xc(){ze=lr.current,K(lr)}function Pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:Tr(),K(be),K(xe),pc();break;case 5:hc(r);break;case 4:Tr();break;case 13:K(Z);break;case 19:K(Z);break;case 10:uc(r.type._context);break;case 22:case 23:xc()}n=n.return}if(ge=t,le=t=nn(t.current,null),ye=ze=e,ce=0,Wi=null,Cc=Jo=Ln=0,Re=gi=null,In!==null){for(e=0;e<In.length;e++)if(n=In[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}In=null}return t}function ng(t,e){do{var n=le;try{if(ac(),Ws.current=mo,po){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(Mn=0,he=ae=ee=null,pi=!1,zi=0,Ec.current=null,n===null||n.return===null){ce=1,Wi=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=pd(o);if(g!==null){g.flags&=-257,md(g,o,l,s,e),g.mode&1&&hd(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){hd(s,u,e),Ic();break e}a=Error(w(426))}}else if(X&&l.mode&1){var x=pd(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),md(x,o,l,s,e),oc(Nr(a,l));break e}}s=a=Nr(a,l),ce!==4&&(ce=2),gi===null?gi=[s]:gi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=jm(s,a,e);ld(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Um(s,l,e);ld(s,v);break e}}s=s.return}while(s!==null)}sg(n)}catch(C){e=C,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function rg(){var t=go.current;return go.current=mo,t===null?mo:t}function Ic(){(ce===0||ce===3||ce===2)&&(ce=4),ge===null||!(Ln&268435455)&&!(Jo&268435455)||$t(ge,ye)}function vo(t,e){var n=U;U|=2;var r=rg();(ge!==t||ye!==e)&&(Et=null,Pn(t,e));do try{B0();break}catch(i){ng(t,i)}while(!0);if(ac(),U=n,go.current=r,le!==null)throw Error(w(261));return ge=null,ye=0,ce}function B0(){for(;le!==null;)ig(le)}function H0(){for(;le!==null&&!pv();)ig(le)}function ig(t){var e=lg(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?sg(t):le=e,Ec.current=null}function sg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L0(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,le=null;return}}else if(n=M0(n,e,ze),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);ce===0&&(ce=5)}function En(t,e,n){var r=B,i=Xe.transition;try{Xe.transition=null,B=1,$0(t,e,n,r)}finally{Xe.transition=i,B=r}return null}function $0(t,e,n,r){do _r();while(Gt!==null);if(U&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kv(t,s),t===ge&&(le=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rs||(Rs=!0,ag(Zs,function(){return _r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=B;B=1;var l=U;U|=4,Ec.current=null,z0(t,n),Zm(n,t),c0(Aa),to=!!Ra,Aa=Ra=null,t.current=n,j0(n),mv(),U=l,B=o,Xe.transition=s}else t.current=n;if(Rs&&(Rs=!1,Gt=t,yo=i),s=t.pendingLanes,s===0&&(en=null),yv(n.stateNode),Le(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,t=Xa,Xa=null,t;return yo&1&&t.tag!==0&&_r(),s=t.pendingLanes,s&1?t===Ja?_i++:(_i=0,Ja=t):_i=0,gn(),null}function _r(){if(Gt!==null){var t=jp(yo),e=Xe.transition,n=B;try{if(Xe.transition=null,B=16>t?16:t,Gt===null)var r=!1;else{if(t=Gt,Gt=null,yo=0,U&6)throw Error(w(331));var i=U;for(U|=4,S=t.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var c=S;switch(c.tag){case 0:case 11:case 15:mi(8,c,s)}var f=c.child;if(f!==null)f.return=c,S=f;else for(;S!==null;){c=S;var d=c.sibling,g=c.return;if(qm(c),c===u){S=null;break}if(d!==null){d.return=g,S=d;break}S=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,S=p;break e}S=s.return}}var h=t.current;for(S=h;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=h;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xo(9,l)}}catch(C){ne(l,l.return,C)}if(l===o){S=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,S=v;break e}S=l.return}}if(U=i,gn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ho,t)}catch{}r=!0}return r}finally{B=n,Xe.transition=e}}return!1}function Nd(t,e,n){e=Nr(n,e),e=jm(t,e,1),t=Zt(t,e,1),e=Te(),t!==null&&(es(t,1,e),Le(t,e))}function ne(t,e,n){if(t.tag===3)Nd(t,t,n);else for(;e!==null;){if(e.tag===3){Nd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){t=Nr(n,t),t=Um(e,t,1),e=Zt(e,t,1),t=Te(),e!==null&&(es(e,1,t),Le(e,t));break}}e=e.return}}function V0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>oe()-Sc?Pn(t,0):Cc|=n),Le(t,e)}function og(t,e){e===0&&(t.mode&1?(e=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):e=1);var n=Te();t=Rt(t,e),t!==null&&(es(t,e,n),Le(t,n))}function Y0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),og(t,n)}function G0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),og(t,n)}var lg;lg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,b0(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,X&&e.flags&1048576&&fm(e,ao,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hs(t,e),t=e.pendingProps;var i=kr(e,xe.current);gr(e,n),i=gc(null,e,r,t,i,n);var s=_c();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(s=!0,oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fc(e),i.updater=qo,e.stateNode=i,i._reactInternals=e,Ua(e,r,t,n),e=Ha(null,e,r,!0,s,n)):(e.tag=0,X&&s&&ic(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K0(r),t=nt(r,t),i){case 0:e=Ba(null,e,r,t,n);break e;case 1:e=yd(null,e,r,t,n);break e;case 11:e=gd(null,e,r,t,n);break e;case 14:e=_d(null,e,r,nt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Ba(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),yd(t,e,r,i,n);case 3:e:{if($m(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_m(t,e),fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Nr(Error(w(423)),e),e=vd(t,e,r,n,i);break e}else if(r!==i){i=Nr(Error(w(424)),e),e=vd(t,e,r,n,i);break e}else for(je=Jt(e.stateNode.containerInfo.firstChild),Ue=e,X=!0,it=null,n=mm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===i){e=At(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return ym(e),t===null&&Fa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oa(r,i)?o=null:s!==null&&Oa(r,s)&&(e.flags|=32),Hm(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&Fa(e),null;case 13:return Vm(t,e,n);case 4:return dc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ir(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),gd(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(uo,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!be.current){e=At(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=It(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),za(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),za(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gr(e,n),i=Je(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),_d(t,e,r,i,n);case 15:return Wm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Hs(t,e),e.tag=1,Me(r)?(t=!0,oo(e)):t=!1,gr(e,n),zm(e,r,i),Ua(e,r,i,n),Ha(null,e,r,!0,t,n);case 19:return Ym(t,e,n);case 22:return Bm(t,e,n)}throw Error(w(156,e.tag))};function ag(t,e){return Mp(t,e)}function Q0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new Q0(t,e,n,r)}function Tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K0(t){if(typeof t=="function")return Tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yu)return 11;if(t===Gu)return 14}return 2}function nn(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ys(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xn:return Rn(n.children,i,s,e);case Vu:o=8,i|=8;break;case ca:return t=qe(12,n,e,i|2),t.elementType=ca,t.lanes=s,t;case fa:return t=qe(13,n,e,i),t.elementType=fa,t.lanes=s,t;case da:return t=qe(19,n,e,i),t.elementType=da,t.lanes=s,t;case yp:return Zo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gp:o=10;break e;case _p:o=9;break e;case Yu:o=11;break e;case Gu:o=14;break e;case Wt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rn(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function Zo(t,e,n,r){return t=qe(22,t,r,e),t.elementType=yp,t.lanes=n,t.stateNode={isHidden:!1},t}function $l(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function Vl(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function q0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nc(t,e,n,r,i,s,o,l,a){return t=new q0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(s),t}function X0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ug(t){if(!t)return an;t=t._reactInternals;e:{if(Vn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Me(n))return um(t,n,e)}return e}function cg(t,e,n,r,i,s,o,l,a){return t=Nc(n,r,!0,t,i,s,o,l,a),t.context=ug(null),n=t.current,r=Te(),i=tn(n),s=It(r,i),s.callback=e??null,Zt(n,s,i),t.current.lanes=i,es(t,i,r),Le(t,r),t}function el(t,e,n,r){var i=e.current,s=Te(),o=tn(i);return n=ug(n),e.context===null?e.context=n:e.pendingContext=n,e=It(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zt(i,e,o),t!==null&&(ut(t,i,o,s),Us(t,i,o)),o}function wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pc(t,e){Pd(t,e),(t=t.alternate)&&Pd(t,e)}function J0(){return null}var fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}tl.prototype.render=Rc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));el(t,e,null,null)};tl.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fn(function(){el(null,t,null,null)}),e[Pt]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&$p(t)}};function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function Z0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wo(o);s.call(u)}}var o=cg(e,r,t,0,null,!1,!1,"",Rd);return t._reactRootContainer=o,t[Pt]=o.current,Di(t.nodeType===8?t.parentNode:t),Fn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=wo(a);l.call(u)}}var a=Nc(t,0,!1,null,null,!1,!1,"",Rd);return t._reactRootContainer=a,t[Pt]=a.current,Di(t.nodeType===8?t.parentNode:t),Fn(function(){el(e,a,n,r)}),a}function rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=wo(o);l.call(a)}}el(e,o,t,i)}else o=Z0(n,e,t,i,r);return wo(o)}Up=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=si(e.pendingLanes);n!==0&&(qu(e,n|1),Le(e,oe()),!(U&6)&&(Pr=oe()+500,gn()))}break;case 13:Fn(function(){var r=Rt(t,1);if(r!==null){var i=Te();ut(r,t,1,i)}}),Pc(t,1)}};Xu=function(t){if(t.tag===13){var e=Rt(t,134217728);if(e!==null){var n=Te();ut(e,t,134217728,n)}Pc(t,134217728)}};Wp=function(t){if(t.tag===13){var e=tn(t),n=Rt(t,e);if(n!==null){var r=Te();ut(n,t,e,r)}Pc(t,e)}};Bp=function(){return B};Hp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Ca=function(t,e,n){switch(e){case"input":if(ma(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Go(r);if(!i)throw Error(w(90));wp(r),ma(r,i)}}}break;case"textarea":Cp(t,n);break;case"select":e=n.value,e!=null&&dr(t,!!n.multiple,e,!1)}};Pp=kc;Rp=Fn;var e1={usingClientEntryPoint:!1,Events:[ns,tr,Go,Tp,Np,kc]},Jr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dp(t),t===null?null:t.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{Ho=As.inject(t1),yt=As}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(e))throw Error(w(200));return X0(t,e,null,n)};Ve.createRoot=function(t,e){if(!Ac(t))throw Error(w(299));var n=!1,r="",i=fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nc(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,Di(t.nodeType===8?t.parentNode:t),new Rc(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Dp(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return Fn(t)};Ve.hydrate=function(t,e,n){if(!nl(e))throw Error(w(200));return rl(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!Ac(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cg(e,null,t,1,n??null,i,!1,s,o),t[Pt]=e.current,Di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tl(e)};Ve.render=function(t,e,n){if(!nl(e))throw Error(w(200));return rl(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!nl(t))throw Error(w(40));return t._reactRootContainer?(Fn(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};Ve.unstable_batchedUpdates=kc;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return rl(t,e,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)}catch(t){console.error(t)}}dg(),dp.exports=Ve;var n1=dp.exports,hg,Ad=n1;hg=Ad.createRoot,Ad.hydrateRoot;var Od={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw jr(e)},jr=function(t){return new Error("Firebase Database ("+pg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,f=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw new i1;const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gg=function(t){const e=mg(t);return Oc.encodeByteArray(e,!0)},Eo=function(t){return gg(t).replace(/\./g,"")},tu=function(t){try{return Oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return _g(void 0,t)}function _g(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!o1(n)||(t[n]=_g(t[n],e[n]));return t}function o1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=()=>l1().__FIREBASE_DEFAULTS__,u1=()=>{if(typeof process>"u"||typeof Od>"u")return;const t=Od.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tu(t[1]);return e&&JSON.parse(e)},yg=()=>{try{return a1()||u1()||c1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},f1=t=>{var e,n;return(n=(e=yg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},d1=t=>{const e=f1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vg=()=>{var t;return(t=yg())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eo(JSON.stringify(n)),Eo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p1())}function m1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eg(){return pg.NODE_ADMIN===!0}function g1(){try{return typeof indexedDB=="object"}catch{return!1}}function _1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="FirebaseError";class is extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=y1,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cg.prototype.create)}}class Cg{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?v1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new is(i,l,r)}}function v1(t,e){return t.replace(w1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const w1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bi(tu(s[0])||""),n=Bi(tu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},E1=function(t){const e=Sg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},C1=function(t){const e=Sg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function nu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bd(s)&&bd(o)){if(!nu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):f<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const d=(i<<5|i>>>27)+u+a+c+r[f]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function kg(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){return t&&t._delegate?t._delegate:t}class Hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N1(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T1(t){return t===Cn?void 0:t}function N1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new I1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const R1={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},A1=$.INFO,O1={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},D1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=O1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xg{constructor(e){this.name=e,this._logLevel=A1,this._logHandler=D1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const b1=(t,e)=>e.some(n=>t instanceof n);let Md,Ld;function M1(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L1(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ig=new WeakMap,ru=new WeakMap,Tg=new WeakMap,Yl=new WeakMap,bc=new WeakMap;function F1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ig.set(n,t)}).catch(()=>{}),bc.set(e,t),e}function z1(t){if(ru.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ru.set(t,e)}let iu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j1(t){iu=t(iu)}function U1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gl(this),e,...n);return Tg.set(r,e.sort?e.sort():[e]),rn(r)}:L1().includes(t)?function(...e){return t.apply(Gl(this),e),rn(Ig.get(this))}:function(...e){return rn(t.apply(Gl(this),e))}}function W1(t){return typeof t=="function"?U1(t):(t instanceof IDBTransaction&&z1(t),b1(t,M1())?new Proxy(t,iu):t)}function rn(t){if(t instanceof IDBRequest)return F1(t);if(Yl.has(t))return Yl.get(t);const e=W1(t);return e!==t&&(Yl.set(t,e),bc.set(e,t)),e}const Gl=t=>bc.get(t);function B1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(rn(o.result),a.oldVersion,a.newVersion,rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const H1=["get","getKey","getAll","getAllKeys","count"],$1=["put","add","delete","clear"],Ql=new Map;function Fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ql.get(e))return Ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||H1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ql.set(e,s),s}j1(t=>({...t,get:(e,n,r)=>Fd(e,n)||t.get(e,n,r),has:(e,n)=>!!Fd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Y1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const su="@firebase/app",zd="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new xg("@firebase/app"),G1="@firebase/app-compat",Q1="@firebase/analytics-compat",K1="@firebase/analytics",q1="@firebase/app-check-compat",X1="@firebase/app-check",J1="@firebase/auth",Z1="@firebase/auth-compat",ew="@firebase/database",tw="@firebase/data-connect",nw="@firebase/database-compat",rw="@firebase/functions",iw="@firebase/functions-compat",sw="@firebase/installations",ow="@firebase/installations-compat",lw="@firebase/messaging",aw="@firebase/messaging-compat",uw="@firebase/performance",cw="@firebase/performance-compat",fw="@firebase/remote-config",dw="@firebase/remote-config-compat",hw="@firebase/storage",pw="@firebase/storage-compat",mw="@firebase/firestore",gw="@firebase/vertexai-preview",_w="@firebase/firestore-compat",yw="firebase",vw="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="[DEFAULT]",ww={[su]:"fire-core",[G1]:"fire-core-compat",[K1]:"fire-analytics",[Q1]:"fire-analytics-compat",[X1]:"fire-app-check",[q1]:"fire-app-check-compat",[J1]:"fire-auth",[Z1]:"fire-auth-compat",[ew]:"fire-rtdb",[tw]:"fire-data-connect",[nw]:"fire-rtdb-compat",[rw]:"fire-fn",[iw]:"fire-fn-compat",[sw]:"fire-iid",[ow]:"fire-iid-compat",[lw]:"fire-fcm",[aw]:"fire-fcm-compat",[uw]:"fire-perf",[cw]:"fire-perf-compat",[fw]:"fire-rc",[dw]:"fire-rc-compat",[hw]:"fire-gcs",[pw]:"fire-gcs-compat",[mw]:"fire-fst",[_w]:"fire-fst-compat",[gw]:"fire-vertex","fire-js":"fire-js",[yw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map,Ew=new Map,lu=new Map;function jd(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ko(t){const e=t.name;if(lu.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,t);for(const n of So.values())jd(n,t);for(const n of Ew.values())jd(n,t);return!0}function Cw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new Cg("app","Firebase",Sw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=vw;function Ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=vg()),!n)throw sn.create("no-options");const s=So.get(i);if(s){if(nu(n,s.options)&&nu(r,s.config))return s;throw sn.create("duplicate-app",{appName:i})}const o=new P1(i);for(const a of lu.values())o.addComponent(a);const l=new kw(n,r,o);return So.set(i,l),l}function Iw(t=ou){const e=So.get(t);if(!e&&t===ou&&vg())return Ng();if(!e)throw sn.create("no-app",{appName:t});return e}function yr(t,e,n){var r;let i=(r=ww[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(l.join(" "));return}ko(new Hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firebase-heartbeat-database",Nw=1,$i="firebase-heartbeat-store";let Kl=null;function Pg(){return Kl||(Kl=B1(Tw,Nw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($i)}catch(n){console.warn(n)}}}}).catch(t=>{throw sn.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function Pw(t){try{const n=(await Pg()).transaction($i),r=await n.objectStore($i).get(Rg(t));return await n.done,r}catch(e){if(e instanceof is)Ot.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function Ud(t,e){try{const r=(await Pg()).transaction($i,"readwrite");await r.objectStore($i).put(e,Rg(t)),await r.done}catch(n){if(n instanceof is)Ot.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function Rg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=1024,Aw=30*24*60*60*1e3;class Ow{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Aw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wd(),{heartbeatsToSend:r,unsentEntries:i}=Dw(this._heartbeatsCache.heartbeats),s=Eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ot.warn(n),""}}}function Wd(){return new Date().toISOString().substring(0,10)}function Dw(t,e=Rw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g1()?_1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bd(t){return Eo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){ko(new Hi("platform-logger",e=>new V1(e),"PRIVATE")),ko(new Hi("heartbeat",e=>new Ow(e),"PRIVATE")),yr(su,zd,t),yr(su,zd,"esm2017"),yr("fire-js","")}Mw("");var Hd={};const $d="@firebase/database",Vd="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ag="";function Lw(t){Ag=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fw(e)}}catch{}return new zw},Nn=Og("localStorage"),jw=Og("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new xg("@firebase/database"),Uw=function(){let t=1;return function(){return t++}}(),Dg=function(t){const e=x1(t),n=new k1;n.update(e);const r=n.digest();return Oc.encodeByteArray(r)},ss=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ss.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let yi=null,Yd=!0;const Ww=function(t,e){E(!e,"Can't turn on custom loggers persistently."),vr.logLevel=$.VERBOSE,yi=vr.log.bind(vr)},Se=function(...t){if(Yd===!0&&(Yd=!1,yi===null&&jw.get("logging_enabled")===!0&&Ww()),yi){const e=ss.apply(null,t);yi(e)}},os=function(t){return function(...e){Se(t,...e)}},au=function(...t){const e="FIREBASE INTERNAL ERROR: "+ss(...t);vr.error(e)},Dt=function(...t){const e=`FIREBASE FATAL ERROR: ${ss(...t)}`;throw vr.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+ss(...t);vr.warn(e)},Bw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Hw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ar="[MIN_NAME]",zn="[MAX_NAME]",Ur=function(t,e){if(t===e)return 0;if(t===Ar||e===zn)return-1;if(e===Ar||t===zn)return 1;{const n=Gd(t),r=Gd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$w=function(t,e){return t===e?0:t<e?-1:1},Zr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Mc=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=Mc(t[e[r]]);return n+="}",n},Mg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Lg=function(t){E(!bg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Vw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Yw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Gw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Qw=new RegExp("^-?(0*)\\d{1,10}$"),Kw=-2147483648,qw=2147483647,Gd=function(t){if(Qw.test(t)){const e=Number(t);if(e>=Kw&&e<=qw)return e}return null},ls=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},Xw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class Gs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="5",Fg="v",zg="s",jg="r",Ug="f",Wg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bg="ls",Hg="p",uu="ac",$g="websocket",Vg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Nn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Nn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gg(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===$g)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eE(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql={},Xl={};function Fc(t){const e=t.toString();return ql[e]||(ql[e]=new tE),ql[e]}function nE(t,e){const n=t.toString();return Xl[n]||(Xl[n]=e()),Xl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ls(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="start",iE="close",sE="pLPCommand",oE="pRTLPCB",Qg="id",Kg="pw",qg="ser",lE="cb",aE="seg",uE="ts",cE="d",fE="dframe",Xg=1870,Jg=30,dE=Xg-Jg,hE=25e3,pE=3e4;class ar{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=os(e),this.stats_=Fc(n),this.urlFn=a=>(this.appCheckToken&&(a[uu]=this.appCheckToken),Gg(n,Vg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pE)),Hw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qd)this.id=l,this.password=a;else if(o===iE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qd]="t",r[qg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[lE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Fg]=Lc,this.transportSessionId&&(r[zg]=this.transportSessionId),this.lastSessionId&&(r[Bg]=this.lastSessionId),this.applicationId&&(r[Hg]=this.applicationId),this.appCheckToken&&(r[uu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wg.test(location.hostname)&&(r[jg]=Ug);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ar.forceAllow_=!0}static forceDisallow(){ar.forceDisallow_=!0}static isAvailable(){return ar.forceAllow_?!0:!ar.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vw()&&!Yw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gg(n),i=Mg(r,dE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[fE]="t",r[Qg]=e,r[Kg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Uw(),window[sE+this.uniqueCallbackIdentifier]=e,window[oE+this.uniqueCallbackIdentifier]=n,this.myIFrame=zc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qg]=this.myID,e[Kg]=this.myPW,e[qg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jg+r.length<=Xg;){const o=this.pendingSegs.shift();r=r+"&"+aE+i+"="+o.seg+"&"+uE+i+"="+o.ts+"&"+cE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(hE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=16384,gE=45e3;let xo=null;typeof MozWebSocket<"u"?xo=MozWebSocket:typeof WebSocket<"u"&&(xo=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=os(this.connId),this.stats_=Fc(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Fg]=Lc,typeof location<"u"&&location.hostname&&Wg.test(location.hostname)&&(o[jg]=Ug),n&&(o[zg]=n),r&&(o[Bg]=r),i&&(o[uu]=i),s&&(o[Hg]=s),Gg(e,$g,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Nn.set("previous_websocket_failure",!0);try{let r;Eg(),this.mySock=new xo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xo!==null&&!st.forceDisallow_}static previouslyFailed(){return Nn.isInMemoryStorage||Nn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Nn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mg(n,mE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ar,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of Vi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=6e4,yE=5e3,vE=10*1024,wE=100*1024,Jl="t",Kd="d",EE="s",qd="r",CE="e",Xd="o",Jd="a",Zd="n",eh="p",SE="h";class kE{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=os("c:"+this.id+":"),this.transportManager_=new Vi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jl in e){const n=e[Jl];n===Jd?this.upgradeIfSecondaryHealthy_():n===qd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zr("t",e),r=Zr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zr("t",e),r=Zr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zr(Jl,e);if(Kd in e){const r=e[Kd];if(n===SE){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Zd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===EE?this.onConnectionShutdown_(r):n===qd?this.onReset_(r):n===CE?au("Server Error: "+r):n===Xd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lc!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_E))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Nn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends e_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Io}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=32,nh=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new H("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function un(t){return t.pieces_.length-t.pieceNum_}function V(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function t_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function n_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function r_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Oe(V(t),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jc(t,e){if(un(t)!==un(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(un(t)>un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class IE{constructor(e,n){this.errorPrefix_=n,this.parts_=n_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=il(this.parts_[r]);i_(this)}}function TE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=il(e),i_(t)}function NE(t){const e=t.parts_.pop();t.byteLength_-=il(e),t.parts_.length>0&&(t.byteLength_-=1)}function i_(t){if(t.byteLength_>nh)throw new Error(t.errorPrefix_+"has a key path longer than "+nh+" bytes ("+t.byteLength_+").");if(t.parts_.length>th)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+th+") or object contains a cycle "+Sn(t))}function Sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends e_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Uc}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=1e3,PE=60*5*1e3,rh=30*1e3,RE=1.3,AE=3e4,OE="server_kill",ih=3;class Tt extends Zg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Tt.nextPersistentConnectionId_++,this.log_=os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ei,this.maxReconnectDelay_=PE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Eg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Io.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Dc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Tt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const r=Rr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||C1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=E1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):au("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>AE&&(this.reconnectDelay_=ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(f){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new kE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{We(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(OE)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&We(f),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dd(this.interruptReasons_)&&(this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Mc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ih&&(this.reconnectDelay_=rh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ih&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ag.replace(/\./g,"-")]=1,wg()?e["framework.cordova"]=1:m1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Io.getInstance().currentlyOnline();return Dd(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new D(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new D(Ar,e),i=new D(Ar,n);return this.compare(r,i)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class s_ extends ol{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return Ur(e.name,n.name)}isDefinedOn(e){throw jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return D.MIN}maxPost(){return new D(zn,Os)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,Os)}toString(){return".key"}}const wr=new s_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class DE{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new DE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t,e){return Ur(t.name,e.name)}function Wc(t,e){return Ur(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;function ME(t){cu=t}const o_=function(t){return typeof t=="number"?"number:"+Lg(t):"string:"+t},l_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else E(t===cu||t.isEmpty(),"priority of unexpected type.");E(t===cu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),l_(this.priorityNode_)}static set __childrenNodeConstructor(e){sh=e}static get __childrenNodeConstructor(){return sh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:M(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+o_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Lg(this.value_):e+=this.value_,this.lazyHash_=Dg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a_,u_;function LE(t){a_=t}function FE(t){u_=t}class zE extends ol{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ur(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return D.MIN}maxPost(){return new D(zn,new de("[PRIORITY-POST]",u_))}makePost(e,n){const r=a_(e);return new D(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new zE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=Math.log(2);class UE{constructor(e){const n=s=>parseInt(Math.log(s)/jE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const To=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let f,d;if(c===0)return null;if(c===1)return f=t[a],d=n?n(f):f,new pe(d,f.node,pe.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=i(a,g),y=i(g+1,u);return f=t[g],d=n?n(f):f,new pe(d,f.node,pe.BLACK,_,y)}},s=function(a){let u=null,c=null,f=t.length;const d=function(_,y){const x=f-_,p=f;f-=_;const h=i(x+1,p),m=t[x],v=n?n(m):m;g(new pe(v,m.node,y,null,h))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),x=Math.pow(2,a.count-(_+1));y?d(x,pe.BLACK):(d(x,pe.BLACK),d(x,pe.RED))}return c},o=new UE(t.length),l=s(o);return new De(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;const Kn={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Kn&&re,"ChildrenNode.ts has not been loaded"),Zl=Zl||new xt({".priority":Kn},{".priority":re}),Zl}get(e){const n=Rr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){E(e!==wr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(D.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=To(r,e.getCompare()):l=Kn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new xt(c,u)}addToIndexes(e,n){const r=Co(this.indexes_,(i,s)=>{const o=Rr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===Kn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(D.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),To(l,o.getCompare())}else return Kn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new D(e.name,l))),a.insert(e,e.node)}});return new xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Co(this.indexes_,i=>{if(i===Kn)return i;{const s=n.get(e.name);return s?i.remove(new D(e.name,s)):i}});return new xt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;class R{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&l_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ti||(ti=new R(new De(Wc),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ti}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ti:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new D(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ti:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{E(M(e)!==".priority"||un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(V(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+o_(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Dg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new D(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new D(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new D(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===as?-1:0}withIndex(e){if(e===wr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wr?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WE extends R{constructor(){super(new De(Wc),R.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const as=new WE;Object.defineProperties(D,{MIN:{value:new D(Ar,R.EMPTY_NODE)},MAX:{value:new D(zn,as)}});s_.__EMPTY_NODE=R.EMPTY_NODE;de.__childrenNodeConstructor=R;ME(as);FE(as);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=!0;function ke(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ke(e))}if(!(t instanceof Array)&&BE){const n=[];let r=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ke(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new D(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=To(n,bE,o=>o.name,Wc);if(r){const o=To(n,re.getCompare());return new R(s,ke(e),new xt({".priority":o},{".priority":re}))}else return new R(s,ke(e),xt.Default)}else{let n=R.EMPTY_NODE;return Fe(t,(r,i)=>{if(Ft(t,r)&&r.substring(0,1)!=="."){const s=ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ke(e))}}LE(ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE extends ol{constructor(e){super(),this.indexPath_=e,E(!L(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ur(e.name,n.name):s}makePost(e,n){const r=ke(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new D(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,as);return new D(zn,e)}toString(){return n_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends ol{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ur(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,n){const r=ke(e);return new D(n,r)}toString(){return".value"}}const VE=new $E;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){return{type:"value",snapshotNode:t}}function Or(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function YE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Yi(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Or(n,r)):o.trackChildChange(Gi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(Yi(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Gi(i,s,o))}else r.trackChildChange(Or(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.indexedFilter_=new Bc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qi.getStartPost_(e),this.endPost_=Qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new D(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new D(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new D(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,g)=>f(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new D(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const f=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Gi(n,r,f)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Yi(n,f));const y=l.updateImmediateChild(n,R.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Or(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Yi(u.name,u.node)),s.trackChildChange(Or(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,R.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ar}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new Hc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function QE(t){return t.loadsAllData()?new Bc(t.getIndex()):t.hasLimit()?new GE(t):new Qi(t)}function oh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===re?n="$priority":t.index_===VE?n="$value":t.index_===wr?n="$key":(E(t.index_ instanceof HE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Zg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=No.getListenId_(e,r),l={};this.listens_[o]=l;const a=oh(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),Rr(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=No.getListenId_(e,n);delete this.listens_[r]}get(e){const n=oh(e._queryParams),r=e._path.toString(),i=new Dc;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+S1(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Bi(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){return{value:null,children:new Map}}function f_(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Po());const i=t.children.get(r);e=V(e),f_(i,e,n)}}function fu(t,e,n){t.value!==null?n(e,t.value):qE(t,(r,i)=>{const s=new H(e.toString()+"/"+r);fu(i,s,n)})}function qE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=10*1e3,JE=30*1e3,ZE=5*60*1e3;class eC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XE(e);const r=ah+(JE-ah)*Math.random();vi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Fe(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function d_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $c(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lt.ACK_USER_WRITE,this.source=d_()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new Ro(W(),n,this.revert)}}else return E(M(this.path)===e,"operationForChild called for unrelated child."),new Ro(V(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.source=e,this.path=n,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new Ki(this.source,W()):new Ki(this.source,V(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=lt.OVERWRITE}operationForChild(e){return L(this.path)?new jn(this.source,W(),this.snap.getImmediateChild(e)):new jn(this.source,V(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lt.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new jn(this.source,W(),n.value):new qi(this.source,W(),n)}else return E(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(YE(o.childName,o.snapshotNode))}),ni(t,i,"child_removed",e,r,n),ni(t,i,"child_added",e,r,n),ni(t,i,"child_moved",s,r,n),ni(t,i,"child_changed",e,r,n),ni(t,i,"value",e,r,n),i}function ni(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>iC(t,l,a)),o.forEach(l=>{const a=rC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function rC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function iC(t,e,n){if(e.childName==null||n.childName==null)throw jr("Should only compare child_ events.");const r=new D(e.childName,e.snapshotNode),i=new D(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e){return{eventCache:t,serverCache:e}}function wi(t,e,n,r){return ll(new Un(e,n,r),t.serverCache)}function h_(t,e,n,r){return ll(t.eventCache,new Un(e,n,r))}function du(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;const sC=()=>(ea||(ea=new De($w)),ea);class Q{constructor(e,n=sC()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Fe(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(L(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(V(e),n);return s!=null?{path:ue(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(V(e)):new Q(null)}}set(e,n){if(L(e))return new Q(n,this.children);{const r=M(e),s=(this.children.get(r)||new Q(null)).set(V(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(V(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(L(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(V(e)):null}}setTree(e,n){if(L(e))return n;{const r=M(e),s=(this.children.get(r)||new Q(null)).setTree(V(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(L(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(V(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(L(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(V(e),ue(n,i),r):new Q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new Q(null))}}function Ei(t,e,n){if(L(e))return new ct(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new ct(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ct(s)}}}function uh(t,e,n){let r=t;return Fe(n,(i,s)=>{r=Ei(r,ue(e,i),s)}),r}function ch(t,e){if(L(e))return ct.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ct(n)}}function hu(t,e){return Yn(t,e)!=null}function Yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function fh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new D(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new D(r,i.value))}),e}function on(t,e){if(L(e))return t;{const n=Yn(t,e);return n!=null?new ct(new Q(n)):new ct(t.writeTree_.subtree(e))}}function pu(t){return t.writeTree_.isEmpty()}function Dr(t,e){return p_(W(),t.writeTree_,e)}function p_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=p_(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e){return y_(e,t)}function oC(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ei(t.visibleWrites,e,n)),t.lastWriteId=r}function lC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function aC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&uC(l,r.path)?i=!1:ot(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return cC(t),!0;if(r.snap)t.visibleWrites=ch(t.visibleWrites,r.path);else{const l=r.children;Fe(l,a=>{t.visibleWrites=ch(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function uC(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(ue(t.path,n),e))return!0;return!1}function cC(t){t.visibleWrites=m_(t.allWrites,fC,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fC(t){return t.visible}function m_(t,e,n){let r=ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ot(n,o)?(l=Oe(n,o),r=Ei(r,l,s.snap)):ot(o,n)&&(l=Oe(o,n),r=Ei(r,W(),s.snap.getChild(l)));else if(s.children){if(ot(n,o))l=Oe(n,o),r=uh(r,l,s.children);else if(ot(o,n))if(l=Oe(o,n),L(l))r=uh(r,W(),s.children);else{const a=Rr(s.children,M(l));if(a){const u=a.getChild(V(l));r=Ei(r,W(),u)}}}else throw jr("WriteRecord should have .snap or .children")}}return r}function g_(t,e,n,r,i){if(!r&&!i){const s=Yn(t.visibleWrites,e);if(s!=null)return s;{const o=on(t.visibleWrites,e);if(pu(o))return n;if(n==null&&!hu(o,W()))return null;{const l=n||R.EMPTY_NODE;return Dr(o,l)}}}else{const s=on(t.visibleWrites,e);if(!i&&pu(s))return n;if(!i&&n==null&&!hu(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},l=m_(t.allWrites,o,e),a=n||R.EMPTY_NODE;return Dr(l,a)}}}function dC(t,e,n){let r=R.EMPTY_NODE;const i=Yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=on(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=Dr(on(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),fh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=on(t.visibleWrites,e);return fh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function hC(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(hu(t.visibleWrites,s))return null;{const o=on(t.visibleWrites,s);return pu(o)?i.getChild(n):Dr(o,i.getChild(n))}}function pC(t,e,n,r){const i=ue(e,n),s=Yn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=on(t.visibleWrites,i);return Dr(o,r.getNode().getImmediateChild(n))}else return null}function mC(t,e){return Yn(t.visibleWrites,e)}function gC(t,e,n,r,i,s,o){let l;const a=on(t.visibleWrites,e),u=Yn(a,W());if(u!=null)l=u;else if(n!=null)l=Dr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],f=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=d.getNext();for(;g&&c.length<i;)f(g,r)!==0&&c.push(g),g=d.getNext();return c}else return[]}function _C(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function Ao(t,e,n,r){return g_(t.writeTree,t.treePath,e,n,r)}function Gc(t,e){return dC(t.writeTree,t.treePath,e)}function dh(t,e,n,r){return hC(t.writeTree,t.treePath,e,n,r)}function Oo(t,e){return mC(t.writeTree,ue(t.treePath,e))}function yC(t,e,n,r,i,s){return gC(t.writeTree,t.treePath,e,n,r,i,s)}function Qc(t,e,n){return pC(t.writeTree,t.treePath,e,n)}function __(t,e){return y_(ue(t.treePath,e),t.writeTree)}function y_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Gi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Yi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Or(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Gi(r,e.snapshotNode,i.oldSnap));else throw jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const v_=new wC;class Kc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wn(this.viewCache_),s=yC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){return{filter:t}}function CC(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SC(t,e,n,r,i){const s=new vC;let o,l;if(n.type===lt.OVERWRITE){const u=n;u.source.fromUser?o=mu(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!L(u.path),o=Do(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===lt.MERGE){const u=n;u.source.fromUser?o=xC(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=gu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===lt.ACK_USER_WRITE){const u=n;u.revert?o=NC(t,e,u.path,r,i,s):o=IC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===lt.LISTEN_COMPLETE)o=TC(t,e,n.path,r,s);else throw jr("Unknown operation type: "+n.type);const a=s.getChanges();return kC(e,o,a),{viewCache:o,changes:a}}function kC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=du(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(c_(du(e)))}}function w_(t,e,n,r,i,s){const o=e.eventCache;if(Oo(r,n)!=null)return e;{let l,a;if(L(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Wn(e),c=u instanceof R?u:R.EMPTY_NODE,f=Gc(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=Ao(r,Wn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){E(un(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const f=dh(r,n,c,a);f!=null?l=t.filter.updatePriority(c,f):l=o.getNode()}else{const c=V(n);let f;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=dh(r,n,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(u).updateChild(c,d):f=o.getNode().getImmediateChild(u)}else f=Qc(r,u,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),u,f,c,i,s):l=o.getNode()}}return wi(e,l,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Do(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(L(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=M(n);if(!a.isCompleteForPath(n)&&un(n)>1)return e;const _=V(n),x=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(a.getNode(),x):u=c.updateChild(a.getNode(),g,x,_,v_,null)}const f=h_(e,u,a.isFullyInitialized()||L(n),c.filtersNodes()),d=new Kc(i,f,s);return w_(t,f,n,i,d,l)}function mu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Kc(i,e,s);if(L(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=wi(e,u,!0,t.filter.filtersNodes());else{const f=M(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=wi(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=V(n),g=l.getNode().getImmediateChild(f);let _;if(L(d))_=r;else{const y=c.getCompleteChild(f);y!=null?t_(d)===".priority"&&y.getChild(r_(d)).isEmpty()?_=y:_=y.updateChild(d,r):_=R.EMPTY_NODE}if(g.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),f,_,d,c,o);a=wi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function hh(t,e){return t.eventCache.isCompleteForChild(e)}function xC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ue(n,a);hh(e,M(c))&&(l=mu(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ue(n,a);hh(e,M(c))||(l=mu(t,l,c,u,i,s,o))}),l}function ph(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function gu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;L(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=ph(t,g,d);a=Do(t,a,new H(f),_,i,s,o,l)}}),u.children.inorderTraversal((f,d)=>{const g=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!c.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),y=ph(t,_,d);a=Do(t,a,new H(f),y,i,s,o,l)}}),a}function IC(t,e,n,r,i,s,o){if(Oo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(L(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Do(t,e,n,a.getNode().getChild(n),i,s,l,o);if(L(n)){let u=new Q(null);return a.getNode().forEachChild(wr,(c,f)=>{u=u.set(new H(c),f)}),gu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((c,f)=>{const d=ue(n,c);a.isCompleteForPath(d)&&(u=u.set(c,a.getNode().getChild(d)))}),gu(t,e,n,u,i,s,l,o)}}function TC(t,e,n,r,i){const s=e.serverCache,o=h_(e,s.getNode(),s.isFullyInitialized()||L(n),s.isFiltered());return w_(t,o,n,r,v_,i)}function NC(t,e,n,r,i,s){let o;if(Oo(r,n)!=null)return e;{const l=new Kc(r,e,i),a=e.eventCache.getNode();let u;if(L(n)||M(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ao(r,Wn(e));else{const f=e.serverCache.getNode();E(f instanceof R,"serverChildren would be complete if leaf node"),c=Gc(r,f)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=M(n);let f=Qc(r,c,e.serverCache);f==null&&e.serverCache.isCompleteForChild(c)&&(f=a.getImmediateChild(c)),f!=null?u=t.filter.updateChild(a,c,f,V(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,R.EMPTY_NODE,V(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ao(r,Wn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Oo(r,W())!=null,wi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Bc(r.getIndex()),s=QE(r);this.processor_=EC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),c=new Un(a,o.isFullyInitialized(),i.filtersNodes()),f=new Un(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ll(f,c),this.eventGenerator_=new tC(this.query_)}get query(){return this.query_}}function RC(t){return t.viewCache_.serverCache.getNode()}function AC(t,e){const n=Wn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function mh(t){return t.eventRegistrations_.length===0}function OC(t,e){t.eventRegistrations_.push(e)}function gh(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function _h(t,e,n,r){e.type===lt.MERGE&&e.source.queryId!==null&&(E(Wn(t.viewCache_),"We should always have a full cache before handling merges"),E(du(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=SC(t.processor_,i,e,n,r);return CC(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,E_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function DC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(Or(s,o))}),n.isFullyInitialized()&&r.push(c_(n.getNode())),E_(t,r,n.getNode(),e)}function E_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return nC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo;class bC{constructor(){this.views=new Map}}function MC(t){E(!bo,"__referenceConstructor has already been defined"),bo=t}function LC(){return E(bo,"Reference.ts has not been loaded"),bo}function FC(t){return t.views.size===0}function qc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),_h(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_h(o,e,n,r));return s}}function zC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Ao(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=Gc(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const u=ll(new Un(l,a,!1),new Un(r,i,!1));return new PC(e,u)}return o}function jC(t,e,n,r,i,s){const o=zC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),OC(o,n),DC(o,n)}function UC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=cn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(gh(u,n,r)),mh(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(gh(a,n,r)),mh(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!cn(t)&&s.push(new(LC())(e._repo,e._path)),{removed:s,events:o}}function C_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Er(t,e){let n=null;for(const r of t.views.values())n=n||AC(r,e);return n}function S_(t,e){if(e._queryParams.loadsAllData())return al(t);{const r=e._queryIdentifier;return t.views.get(r)}}function k_(t,e){return S_(t,e)!=null}function cn(t){return al(t)!=null}function al(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo;function WC(t){E(!Mo,"__referenceConstructor has already been defined"),Mo=t}function BC(){return E(Mo,"Reference.ts has not been loaded"),Mo}let HC=1;class yh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=_C(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $C(t,e,n,r,i){return oC(t.pendingWriteTree_,e,n,r,i),i?us(t,new jn(d_(),e,n)):[]}function ur(t,e,n=!1){const r=lC(t.pendingWriteTree_,e);if(aC(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(W(),!0):Fe(r.children,o=>{s=s.set(new H(o),!0)}),us(t,new Ro(r.path,s,n))}else return[]}function ul(t,e,n){return us(t,new jn($c(),e,n))}function VC(t,e,n){const r=Q.fromObject(n);return us(t,new qi($c(),e,r))}function YC(t,e){return us(t,new Ki($c(),e))}function GC(t,e,n){const r=Xc(t,n);if(r){const i=Jc(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new Ki(Vc(o),l);return Zc(t,s,a)}else return[]}function _u(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||k_(o,e))){const a=UC(o,e,n,r);FC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,g)=>cn(g));if(c&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=qC(d);for(let _=0;_<g.length;++_){const y=g[_],x=y.query,p=N_(t,y);t.listenProvider_.startListening(Ci(x),Lo(t,x),p.hashFn,p.onComplete)}}}!f&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ci(e),null):u.forEach(d=>{const g=t.queryToTagMap.get(cl(d));t.listenProvider_.stopListening(Ci(d),g)}))}XC(t,u)}return l}function QC(t,e,n,r){const i=Xc(t,r);if(i!=null){const s=Jc(i),o=s.path,l=s.queryId,a=Oe(o,e),u=new jn(Vc(l),a,n);return Zc(t,o,u)}else return[]}function KC(t,e,n,r){const i=Xc(t,r);if(i){const s=Jc(i),o=s.path,l=s.queryId,a=Oe(o,e),u=Q.fromObject(n),c=new qi(Vc(l),a,u);return Zc(t,o,c)}else return[]}function vh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const _=Oe(d,i);s=s||Er(g,_),o=o||cn(g)});let l=t.syncPointTree_.get(i);l?(o=o||cn(l),s=s||Er(l,W())):(l=new bC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=Er(_,W());y&&(s=s.updateImmediateChild(g,y))}));const u=k_(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=cl(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=JC();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const c=Yc(t.pendingWriteTree_,i);let f=jC(l,e,n,c,s,a);if(!u&&!o&&!r){const d=S_(l,e);f=f.concat(ZC(t,e,d))}return f}function x_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),u=Er(l,a);if(u)return u});return g_(i,e,s,n,!0)}function us(t,e){return I_(e,t.syncPointTree_,null,Yc(t.pendingWriteTree_,W()))}function I_(t,e,n,r){if(L(t.path))return T_(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=Er(i,W()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=__(r,o);s=s.concat(I_(l,a,u,c))}return i&&(s=s.concat(qc(i,t,r,n))),s}}function T_(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=Er(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=__(r,o),c=t.operationForChild(o);c&&(s=s.concat(T_(c,l,a,u)))}),i&&(s=s.concat(qc(i,t,r,n))),s}function N_(t,e){const n=e.query,r=Lo(t,n);return{hashFn:()=>(RC(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?GC(t,n._path,r):YC(t,n._path);{const s=Gw(i,n);return _u(t,n,null,s)}}}}function Lo(t,e){const n=cl(e);return t.queryToTagMap.get(n)}function cl(t){return t._path.toString()+"$"+t._queryIdentifier}function Xc(t,e){return t.tagToQueryMap.get(e)}function Jc(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function Zc(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Yc(t.pendingWriteTree_,e);return qc(r,n,i,null)}function qC(t){return t.fold((e,n,r)=>{if(n&&cn(n))return[al(n)];{let i=[];return n&&(i=C_(n)),Fe(r,(s,o)=>{i=i.concat(o)}),i}})}function Ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(BC())(t._repo,t._path):t}function XC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function JC(){return HC++}function ZC(t,e,n){const r=e._path,i=Lo(t,e),s=N_(t,n),o=t.listenProvider_.startListening(Ci(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!cn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,f)=>{if(!L(u)&&c&&cn(c))return[al(c).query];{let d=[];return c&&(d=d.concat(C_(c).map(g=>g.query))),Fe(f,(g,_)=>{d=d.concat(_)}),d}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Ci(c),Lo(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ef(n)}node(){return this.node_}}class tf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new tf(this.syncTree_,n)}node(){return x_(this.syncTree_,this.path_)}}const eS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wh=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nS(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},nS=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},rS=function(t,e,n,r){return nf(e,new tf(n,t),r)},iS=function(t,e,n){return nf(t,new ef(e),n)};function nf(t,e,n){const r=t.getPriority().val(),i=wh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=wh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(re,(l,a)=>{const u=nf(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sf(t,e){let n=e instanceof H?e:new H(e),r=t,i=M(n);for(;i!==null;){const s=Rr(r.node.children,i)||{children:{},childCount:0};r=new rf(i,r,s),n=V(n),i=M(n)}return r}function Wr(t){return t.node.value}function P_(t,e){t.node.value=e,yu(t)}function R_(t){return t.node.childCount>0}function sS(t){return Wr(t)===void 0&&!R_(t)}function fl(t,e){Fe(t.node.children,(n,r)=>{e(new rf(n,t,r))})}function A_(t,e,n,r){n&&!r&&e(t),fl(t,i=>{A_(i,e,!0,r)}),n&&r&&e(t)}function oS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function cs(t){return new H(t.parent===null?t.name:cs(t.parent)+"/"+t.name)}function yu(t){t.parent!==null&&lS(t.parent,t.name,t)}function lS(t,e,n){const r=sS(n),i=Ft(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=/[\[\].#$\/\u0000-\u001F\u007F]/,uS=/[\[\].#$\u0000-\u001F\u007F]/,ta=10*1024*1024,O_=function(t){return typeof t=="string"&&t.length!==0&&!aS.test(t)},D_=function(t){return typeof t=="string"&&t.length!==0&&!uS.test(t)},cS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),D_(t)},b_=function(t,e,n){const r=n instanceof H?new IE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Sn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Sn(r)+" with contents = "+e.toString());if(bg(e))throw new Error(t+"contains "+e.toString()+" "+Sn(r));if(typeof e=="string"&&e.length>ta/3&&il(e)>ta)throw new Error(t+"contains a string greater than "+ta+" utf8 bytes "+Sn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!O_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Sn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TE(r,o),b_(t,l,r),NE(r)}),i&&s)throw new Error(t+' contains ".value" child '+Sn(r)+" in addition to actual children.")}},M_=function(t,e,n,r){if(!D_(n))throw new Error(kg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),M_(t,e,n)},dS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!O_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cS(n))throw new Error(kg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function L_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!jc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function F_(t,e,n){L_(t,n),z_(t,r=>jc(r,e))}function Gn(t,e,n){L_(t,n),z_(t,r=>ot(r,e)||ot(e,r))}function z_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(pS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();yi&&Se("event: "+n.toString()),ls(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="repo_interrupt",gS=25;class _S{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Po(),this.transactionQueueTree_=new rf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yS(t,e,n){if(t.stats_=Fc(t.repoInfo_),t.forceRestClient_||Xw())t.server_=new No(t.repoInfo_,(r,i,s,o)=>{Eh(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ch(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(r,i,s,o)=>{Eh(t,r,i,s,o)},r=>{Ch(t,r)},r=>{wS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nE(t.repoInfo_,()=>new eC(t.stats_,t.server_)),t.infoData_=new KE,t.infoSyncTree_=new yh({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ul(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),of(t,"connected",!1),t.serverSyncTree_=new yh({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Gn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function vS(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function j_(t){return eS({timestamp:vS(t)})}function Eh(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Co(n,u=>ke(u));o=KC(t.serverSyncTree_,s,a,i)}else{const a=ke(n);o=QC(t.serverSyncTree_,s,a,i)}else if(r){const a=Co(n,u=>ke(u));o=VC(t.serverSyncTree_,s,a)}else{const a=ke(n);o=ul(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=af(t,s)),Gn(t.eventQueue_,l,o)}function Ch(t,e){of(t,"connected",e),e===!1&&CS(t)}function wS(t,e){Fe(e,(n,r)=>{of(t,n,r)})}function of(t,e,n){const r=new H("/.info/"+e),i=ke(n);t.infoData_.updateSnapshot(r,i);const s=ul(t.infoSyncTree_,r,i);Gn(t.eventQueue_,r,s)}function ES(t){return t.nextWriteId_++}function CS(t){U_(t,"onDisconnectEvents");const e=j_(t),n=Po();fu(t.onDisconnect_,W(),(i,s)=>{const o=rS(i,s,t.serverSyncTree_,e);f_(n,i,o)});let r=[];fu(n,W(),(i,s)=>{r=r.concat(ul(t.serverSyncTree_,i,s));const o=TS(t,i);af(t,o)}),t.onDisconnect_=Po(),Gn(t.eventQueue_,W(),r)}function SS(t,e,n){let r;M(e._path)===".info"?r=vh(t.infoSyncTree_,e,n):r=vh(t.serverSyncTree_,e,n),F_(t.eventQueue_,e._path,r)}function Sh(t,e,n){let r;M(e._path)===".info"?r=_u(t.infoSyncTree_,e,n):r=_u(t.serverSyncTree_,e,n),F_(t.eventQueue_,e._path,r)}function kS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mS)}function U_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function W_(t,e,n){return x_(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function lf(t,e=t.transactionQueueTree_){if(e||dl(t,e),Wr(e)){const n=H_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xS(t,cs(e),n)}else R_(e)&&fl(e,n=>{lf(t,n)})}function xS(t,e,n){const r=n.map(u=>u.currentWriteId),i=W_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];E(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=Oe(e,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{U_(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(ur(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();dl(t,sf(t.transactionQueueTree_,e)),lf(t,t.transactionQueueTree_),Gn(t.eventQueue_,e,c);for(let d=0;d<f.length;d++)ls(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}af(t,e)}},o)}function af(t,e){const n=B_(t,e),r=cs(n),i=H_(t,n);return IS(t,i,r),r}function IS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Oe(n,a.path);let c=!1,f;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,f=a.abortReason,i=i.concat(ur(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=gS)c=!0,f="maxretry",i=i.concat(ur(t.serverSyncTree_,a.currentWriteId,!0));else{const d=W_(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){b_("transaction failed: Data returned ",g,a.path);let _=ke(g);typeof g=="object"&&g!=null&&Ft(g,".priority")||(_=_.updatePriority(d.getPriority()));const x=a.currentWriteId,p=j_(t),h=iS(_,d,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=h,a.currentWriteId=ES(t),o.splice(o.indexOf(x),1),i=i.concat($C(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(ur(t.serverSyncTree_,x,!0))}else c=!0,f="nodata",i=i.concat(ur(t.serverSyncTree_,a.currentWriteId,!0))}Gn(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(f),!1,null))))}dl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ls(r[l]);lf(t,t.transactionQueueTree_)}function B_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Wr(r)===void 0;)r=sf(r,n),e=V(e),n=M(e);return r}function H_(t,e){const n=[];return $_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $_(t,e,n){const r=Wr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fl(e,i=>{$_(t,i,n)})}function dl(t,e){const n=Wr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,P_(e,n.length>0?n:void 0)}fl(e,r=>{dl(t,r)})}function TS(t,e){const n=cs(B_(t,e)),r=sf(t.transactionQueueTree_,e);return oS(r,i=>{na(t,i)}),na(t,r),A_(r,i=>{na(t,i)}),n}function na(t,e){const n=Wr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ur(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?P_(e,void 0):n.length=s+1,Gn(t.eventQueue_,cs(e),i);for(let o=0;o<r.length;o++)ls(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const kh=function(t,e){const n=RS(t),r=n.namespace;n.domain==="firebase.com"&&Dt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Dt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Bw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},RS=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=NS(t.substring(c,f)));const d=PS(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class OS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return L(this._path)?null:t_(this._path)}get ref(){return new _n(this._repo,this._path)}get _queryIdentifier(){const e=lh(this._queryParams),n=Mc(e);return n==="{}"?"default":n}get _queryObject(){return lh(this._queryParams)}isEqual(e){if(e=sl(e),!(e instanceof uf))return!1;const n=this._repo===e._repo,r=jc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xE(this._path)}}class _n extends uf{constructor(e,n){super(e,n,new Hc,!1)}get parent(){const e=r_(this._path);return e===null?null:new _n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Fo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=vu(this.ref,e);return new Fo(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Fo(i,vu(this.ref,r),re)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bS(t,e){return t=sl(t),t._checkNotDeleted("ref"),vu(t._root,e)}function vu(t,e){return t=sl(t),M(t._path)===null?fS("child","path",e):M_("child","path",e),new _n(t._repo,ue(t._path,e))}class cf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new AS("value",this,new Fo(e.snapshotNode,new _n(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new OS(this,e,n):null}matches(e){return e instanceof cf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function MS(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,f)=>{Sh(t._repo,t,l),a(c,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new DS(n,s||void 0),l=new cf(o);return SS(t._repo,t,l),()=>Sh(t._repo,t,l)}function LS(t,e,n,r){return MS(t,"value",e,n,r)}MC(_n);WC(_n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="FIREBASE_DATABASE_EMULATOR_HOST",wu={};let zS=!1;function jS(t,e,n,r){t.repoInfo_=new Yg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function US(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Dt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kh(s,i),l=o.repoInfo,a;typeof process<"u"&&Hd&&(a=Hd[FS]),a?(s=`http://${a}?ns=${l.namespace}`,o=kh(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Zw(t.name,t.options,e);dS("Invalid Firebase Database URL",o),L(o.path)||Dt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=BS(l,t,u,new Jw(t.name,n));return new HS(c,t)}function WS(t,e){const n=wu[e];(!n||n[t.key]!==t)&&Dt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kS(t),delete n[t.key]}function BS(t,e,n,r){let i=wu[e.name];i||(i={},wu[e.name]=i);let s=i[t.toURLString()];return s&&Dt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new _S(t,zS,n,r),i[t.toURLString()]=s,s}class HS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _n(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dt("Cannot call "+e+" on a deleted database.")}}function V_(t=Iw(),e){const n=Cw(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=d1("database");r&&$S(n,...r)}return n}function $S(t,e,n,r={}){t=sl(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Dt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Dt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Gs(Gs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:h1(r.mockUserToken,t.app.options.projectId);s=new Gs(o)}jS(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t){Lw(xw),ko(new Hi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return US(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yr($d,Vd,t),yr($d,Vd,"esm2017")}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};VS();var YS="firebase",GS="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(YS,GS,"app");const QS={apiKey:"AIzaSyBja5iv-lCk6DopgFzNHEmjl6jaS8f_u8I",authDomain:"healthmonitor-754c0.firebaseapp.com",databaseURL:"https://healthmonitor-754c0-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"healthmonitor-754c0",storageBucket:"healthmonitor-754c0.appspot.com",messagingSenderId:"387940589846",appId:"1:387940589846:web:d06e7f15b355777046b037",measurementId:"G-LE1B10TZTS"},Y_=Ng(QS);V_(Y_);const KS=V_(Y_),qS=(t,e)=>{const n=bS(KS,"health");return LS(n,i=>{if(i.exists()){const s=i.val();t(s)}else console.log("No data available"),t(null)},i=>{console.error("Error fetching data:",i),e(i)})},xh=({value:t,unit:e,type:n})=>{const s=2*Math.PI*70,o=s-t/100*s,l=n===0?"#ed4245":"#7289da";return z.jsxs("div",{className:"progress-container",children:[z.jsxs("svg",{width:"160",height:"160",className:"progress-ring blurred-ring",children:[z.jsx("circle",{className:"progress-ring__circle-bg",stroke:"transparent",strokeWidth:12,fill:"transparent",r:70,cx:"80",cy:"80"}),z.jsx("circle",{className:"progress-ring__circle",stroke:l,strokeWidth:12,strokeLinecap:"round",fill:"transparent",r:70,cx:"80",cy:"80",style:{strokeDasharray:s,strokeDashoffset:o}})]}),z.jsxs("svg",{width:"160",height:"160",className:"progress-ring",children:[z.jsx("circle",{className:"progress-ring__circle-bg",stroke:"transparent",strokeWidth:12,fill:"transparent",r:70,cx:"80",cy:"80"}),z.jsx("circle",{className:"progress-ring__circle",stroke:l,strokeWidth:12,strokeLinecap:"round",fill:"transparent",r:70,cx:"80",cy:"80",style:{strokeDasharray:s,strokeDashoffset:o}})]}),z.jsxs("div",{className:"progress-value",style:{color:l},children:[t,e]})]})},XS=()=>z.jsx(z.Fragment,{children:z.jsxs("svg",{className:"container",x:"0px",y:"0px",viewBox:"0 0 50 31.25",height:"31.25",width:"50",preserveAspectRatio:"xMidYMid meet",children:[z.jsx("path",{className:"track",strokeWidth:"4",fill:"none",pathLength:"100",d:"M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"}),z.jsx("path",{className:"car",strokeWidth:"4",fill:"none",pathLength:"100",d:"M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"})]})}),Ih=()=>{};let ff={},G_={},Q_=null,K_={mark:Ih,measure:Ih};try{typeof window<"u"&&(ff=window),typeof document<"u"&&(G_=document),typeof MutationObserver<"u"&&(Q_=MutationObserver),typeof performance<"u"&&(K_=performance)}catch{}const{userAgent:Th=""}=ff.navigator||{},fn=ff,q=G_,Nh=Q_,bs=K_;fn.document;const zt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",q_=~Th.indexOf("MSIE")||~Th.indexOf("Trident/");var J="classic",X_="duotone",Be="sharp",He="sharp-duotone",JS=[J,X_,Be,He],ZS={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ph={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ek=["kit"],tk=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,nk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,rk={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ik={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},sk={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ok={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},lk={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ak={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},J_={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},uk=["solid","regular","light","thin","duotone","brands"],Z_=[1,2,3,4,5,6,7,8,9,10],ck=Z_.concat([11,12,13,14,15,16,17,18,19,20]),li={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fk=[...Object.keys(ok),...uk,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",li.GROUP,li.SWAP_OPACITY,li.PRIMARY,li.SECONDARY].concat(Z_.map(t=>"".concat(t,"x"))).concat(ck.map(t=>"w-".concat(t))),dk={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hk={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},pk={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Rh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const bt="___FONT_AWESOME___",Eu=16,ey="fa",ty="svg-inline--fa",Bn="data-fa-i2svg",Cu="data-fa-pseudo-element",mk="data-fa-pseudo-element-pending",df="data-prefix",hf="data-icon",Ah="fontawesome-i2svg",gk="async",_k=["HTML","HEAD","STYLE","SCRIPT"],ny=(()=>{try{return!0}catch{return!1}})(),ry=[J,Be,He];function fs(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[J]}})}const iy={...J_};iy[J]={...J_[J],...Ph.kit,...Ph["kit-duotone"]};const An=fs(iy),Su={...ak};Su[J]={...Su[J],...Rh.kit,...Rh["kit-duotone"]};const Xi=fs(Su),ku={...lk};ku[J]={...ku[J],...pk.kit};const On=fs(ku),xu={...sk};xu[J]={...xu[J],...hk.kit};const yk=fs(xu),vk=tk,sy="fa-layers-text",wk=nk,Ek={...ZS};fs(Ek);const Ck=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ra=li,br=new Set;Object.keys(Xi[J]).map(br.add.bind(br));Object.keys(Xi[Be]).map(br.add.bind(br));Object.keys(Xi[He]).map(br.add.bind(br));const Sk=[...ek,...fk],Si=fn.FontAwesomeConfig||{};function kk(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}q&&typeof q.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=xk(kk(n));i!=null&&(Si[r]=i)});const oy={styleDefault:"solid",familyDefault:"classic",cssPrefix:ey,replacementClass:ty,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Si.familyPrefix&&(Si.cssPrefix=Si.familyPrefix);const Mr={...oy,...Si};Mr.autoReplaceSvg||(Mr.observeMutations=!1);const I={};Object.keys(oy).forEach(t=>{Object.defineProperty(I,t,{enumerable:!0,set:function(e){Mr[t]=e,ki.forEach(n=>n(I))},get:function(){return Mr[t]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Mr.cssPrefix=t,ki.forEach(e=>e(I))},get:function(){return Mr.cssPrefix}});fn.FontAwesomeConfig=I;const ki=[];function Ik(t){return ki.push(t),()=>{ki.splice(ki.indexOf(t),1)}}const Ut=Eu,gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tk(t){if(!t||!zt)return;const e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=q.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return q.head.insertBefore(e,r),t}const Nk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ji(){let t=12,e="";for(;t-- >0;)e+=Nk[Math.random()*62|0];return e}function Br(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pf(t){return t.classList?Br(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ly(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pk(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ly(t[n]),'" '),"").trim()}function hl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function mf(t){return t.size!==gt.size||t.x!==gt.x||t.y!==gt.y||t.rotate!==gt.rotate||t.flipX||t.flipY}function Rk(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(s," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:u}}function Ak(t){let{transform:e,width:n=Eu,height:r=Eu,startCentered:i=!1}=t,s="";return i&&q_?s+="translate(".concat(e.x/Ut-n/2,"em, ").concat(e.y/Ut-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Ut,"em), calc(-50% + ").concat(e.y/Ut,"em)) "):s+="translate(".concat(e.x/Ut,"em, ").concat(e.y/Ut,"em) "),s+="scale(".concat(e.size/Ut*(e.flipX?-1:1),", ").concat(e.size/Ut*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Ok=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ay(){const t=ey,e=ty,n=I.cssPrefix,r=I.replacementClass;let i=Ok;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let Oh=!1;function ia(){I.autoAddCss&&!Oh&&(Tk(ay()),Oh=!0)}var Dk={mixout(){return{dom:{css:ay,insertCss:ia}}},hooks(){return{beforeDOMElementCreation(){ia()},beforeI2svg(){ia()}}}};const Mt=fn||{};Mt[bt]||(Mt[bt]={});Mt[bt].styles||(Mt[bt].styles={});Mt[bt].hooks||(Mt[bt].hooks={});Mt[bt].shims||(Mt[bt].shims=[]);var _t=Mt[bt];const uy=[],cy=function(){q.removeEventListener("DOMContentLoaded",cy),zo=1,uy.map(t=>t())};let zo=!1;zt&&(zo=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),zo||q.addEventListener("DOMContentLoaded",cy));function bk(t){zt&&(zo?setTimeout(t,0):uy.push(t))}function ds(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?ly(t):"<".concat(e," ").concat(Pk(n),">").concat(r.map(ds).join(""),"</").concat(e,">")}function Dh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var sa=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,a,u,c;for(r===void 0?(a=1,c=e[s[0]]):(a=0,c=r);a<o;a++)u=s[a],c=l(c,e[u],u,e);return c};function Mk(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Iu(t){const e=Mk(t);return e.length===1?e[0].toString(16):null}function Lk(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function bh(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Tu(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=bh(e);typeof _t.hooks.addPack=="function"&&!r?_t.hooks.addPack(t,bh(e)):_t.styles[t]={..._t.styles[t]||{},...i},t==="fas"&&Tu("fa",e)}const{styles:kn,shims:Fk}=_t,zk={[J]:Object.values(On[J]),[Be]:Object.values(On[Be]),[He]:Object.values(On[He])};let gf=null,fy={},dy={},hy={},py={},my={};const jk={[J]:Object.keys(An[J]),[Be]:Object.keys(An[Be]),[He]:Object.keys(An[He])};function Uk(t){return~Sk.indexOf(t)}function Wk(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Uk(i)?i:null}const gy=()=>{const t=r=>sa(kn,(i,s,o)=>(i[o]=sa(s,r,{}),i),{});fy=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),dy=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),my=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in kn||I.autoFetchSvg,n=sa(Fk,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});hy=n.names,py=n.unicodes,gf=pl(I.styleDefault,{family:I.familyDefault})};Ik(t=>{gf=pl(t.styleDefault,{family:I.familyDefault})});gy();function _f(t,e){return(fy[t]||{})[e]}function Bk(t,e){return(dy[t]||{})[e]}function Qt(t,e){return(my[t]||{})[e]}function _y(t){return hy[t]||{prefix:null,iconName:null}}function Hk(t){const e=py[t],n=_f("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dn(){return gf}const yf=()=>({prefix:null,iconName:null,rest:[]});function pl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=J}=e,r=An[n][t],i=Xi[n][t]||Xi[n][r],s=t in _t.styles?t:null;return i||s||null}const $k={[J]:Object.keys(On[J]),[Be]:Object.keys(On[Be]),[He]:Object.keys(On[He])};function ml(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[J]:"".concat(I.cssPrefix,"-").concat(J),[Be]:"".concat(I.cssPrefix,"-").concat(Be),[He]:"".concat(I.cssPrefix,"-").concat(He)};let i=null,s=J;const o=JS.filter(a=>a!==X_);o.forEach(a=>{(t.includes(r[a])||t.some(u=>$k[a].includes(u)))&&(s=a)});const l=t.reduce((a,u)=>{const c=Wk(I.cssPrefix,u);if(kn[u]?(u=zk[s].includes(u)?yk[s][u]:u,i=u,a.prefix=u):jk[s].indexOf(u)>-1?(i=u,a.prefix=pl(u,{family:s})):c?a.iconName=c:u!==I.replacementClass&&!o.some(f=>u===r[f])&&a.rest.push(u),!n&&a.prefix&&a.iconName){const f=i==="fa"?_y(a.iconName):{},d=Qt(a.prefix,a.iconName);f.prefix&&(i=null),a.iconName=f.iconName||d||a.iconName,a.prefix=f.prefix||a.prefix,a.prefix==="far"&&!kn.far&&kn.fas&&!I.autoFetchSvg&&(a.prefix="fas")}return a},yf());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Be&&(kn.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=Qt(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===He&&(kn.fasds||I.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Qt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=dn()||"fas"),l}class Vk{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Tu(s,i[s]);const o=On[J][s];o&&Tu(o,i[s]),gy()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],a=l[2];e[s]||(e[s]={}),a.length>0&&a.forEach(u=>{typeof u=="string"&&(e[s][u]=l)}),e[s][o]=l}),e}}let Mh=[],cr={};const Cr={},Yk=Object.keys(Cr);function Gk(t,e){let{mixoutsTo:n}=e;return Mh=t,cr={},Object.keys(Cr).forEach(r=>{Yk.indexOf(r)===-1&&delete Cr[r]}),Mh.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{cr[o]||(cr[o]=[]),cr[o].push(s[o])})}r.provides&&r.provides(Cr)}),n}function Nu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(cr[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Hn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(cr[t]||[]).forEach(s=>{s.apply(null,n)})}function hn(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Cr[t]?Cr[t].apply(null,e):void 0}function Pu(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||dn();if(e)return e=Qt(n,e)||e,Dh(yy.definitions,n,e)||Dh(_t.styles,n,e)}const yy=new Vk,Qk=()=>{I.autoReplaceSvg=!1,I.observeMutations=!1,Hn("noAuto")},Kk={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(Hn("beforeI2svg",t),hn("pseudoElements2svg",t),hn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,bk(()=>{Xk({autoReplaceSvgRoot:e}),Hn("watch",t)})}},qk={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Qt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pl(t[0]);return{prefix:n,iconName:Qt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(vk))){const e=ml(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||dn(),iconName:Qt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=dn();return{prefix:e,iconName:Qt(e,t)||t}}}},Ge={noAuto:Qk,config:I,dom:Kk,parse:qk,library:yy,findIconDefinition:Pu,toHtml:ds},Xk=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=q}=t;(Object.keys(_t.styles).length>0||I.autoFetchSvg)&&zt&&I.autoReplaceSvg&&Ge.dom.i2svg({node:e})};function gl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ds(n))}}),Object.defineProperty(t,"node",{get:function(){if(!zt)return;const n=q.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Jk(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(mf(o)&&n.found&&!r.found){const{width:l,height:a}=n,u={x:l/a/2,y:.5};i.style=hl({...s,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function Zk(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function vf(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:a,titleId:u,extra:c,watchable:f=!1}=t,{width:d,height:g}=n.found?n:e,_=r==="fak",y=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(C=>c.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(c.classes).join(" ");let x={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":i,class:y,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(g)}};const p=_&&!~c.classes.indexOf("fa-fw")?{width:"".concat(d/g*16*.0625,"em")}:{};f&&(x.attributes[Bn]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Ji())},children:[l]}),delete x.attributes.title);const h={...x,prefix:r,iconName:i,main:e,mask:n,maskId:a,transform:s,symbol:o,styles:{...p,...c.styles}},{children:m,attributes:v}=n.found&&e.found?hn("generateAbstractMask",h)||{children:[],attributes:{}}:hn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=m,h.attributes=v,o?Zk(h):Jk(h)}function Lh(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,a={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(a[Bn]="");const u={...o.styles};mf(i)&&(u.transform=Ak({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=hl(u);c.length>0&&(a.style=c);const f=[];return f.push({tag:"span",attributes:a,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function ex(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=hl(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:oa}=_t;function Ru(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ra.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ra.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ra.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const tx={found:!1,width:512,height:512};function nx(t,e){!ny&&!I.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Au(t,e){let n=e;return e==="fa"&&I.styleDefault!==null&&(e=dn()),new Promise((r,i)=>{if(n==="fa"){const s=_y(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&oa[e]&&oa[e][t]){const s=oa[e][t];return r(Ru(s))}nx(t,e),r({...tx,icon:I.showMissingIcons&&t?hn("missingIconAbstract")||{}:{}})})}const Fh=()=>{},Ou=I.measurePerformance&&bs&&bs.mark&&bs.measure?bs:{mark:Fh,measure:Fh},ai='FA "6.6.0"',rx=t=>(Ou.mark("".concat(ai," ").concat(t," begins")),()=>vy(t)),vy=t=>{Ou.mark("".concat(ai," ").concat(t," ends")),Ou.measure("".concat(ai," ").concat(t),"".concat(ai," ").concat(t," begins"),"".concat(ai," ").concat(t," ends"))};var wf={begin:rx,end:vy};const Qs=()=>{};function zh(t){return typeof(t.getAttribute?t.getAttribute(Bn):null)=="string"}function ix(t){const e=t.getAttribute?t.getAttribute(df):null,n=t.getAttribute?t.getAttribute(hf):null;return e&&n}function sx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(I.replacementClass)}function ox(){return I.autoReplaceSvg===!0?Ks.replace:Ks[I.autoReplaceSvg]||Ks.replace}function lx(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function ax(t){return q.createElement(t)}function wy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?lx:ax}=e;if(typeof t=="string")return q.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(wy(s,{ceFn:n}))}),r}function ux(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ks={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(wy(n),e)}),e.getAttribute(Bn)===null&&I.keepOriginalSource){let n=q.createComment(ux(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~pf(e).indexOf(I.replacementClass))return Ks.replace(t);const r=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===I.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ds(s)).join(`
`);e.setAttribute(Bn,""),e.innerHTML=i}};function jh(t){t()}function Ey(t,e){const n=typeof e=="function"?e:Qs;if(t.length===0)n();else{let r=jh;I.mutateApproach===gk&&(r=fn.requestAnimationFrame||jh),r(()=>{const i=ox(),s=wf.begin("mutate");t.map(i),s(),n()})}}let Ef=!1;function Cy(){Ef=!0}function Du(){Ef=!1}let jo=null;function Uh(t){if(!Nh||!I.observeMutations)return;const{treeCallback:e=Qs,nodeCallback:n=Qs,pseudoElementsCallback:r=Qs,observeMutationsRoot:i=q}=t;jo=new Nh(s=>{if(Ef)return;const o=dn();Br(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!zh(l.addedNodes[0])&&(I.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&I.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&zh(l.target)&&~Ck.indexOf(l.attributeName))if(l.attributeName==="class"&&ix(l.target)){const{prefix:a,iconName:u}=ml(pf(l.target));l.target.setAttribute(df,a||o),u&&l.target.setAttribute(hf,u)}else sx(l.target)&&n(l.target)})}),zt&&jo.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function cx(){jo&&jo.disconnect()}function fx(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function dx(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=ml(pf(t));return i.prefix||(i.prefix=dn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Bk(i.prefix,t.innerText)||_f(i.prefix,Iu(t.innerText))),!i.iconName&&I.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function hx(t){const e=Br(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return I.autoA11y&&(n?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Ji()):(e["aria-hidden"]="true",e.focusable="false")),e}function px(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=dx(t),s=hx(t),o=Nu("parseNodeAttributes",{},t);let l=e.styleParser?fx(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:gt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:mx}=_t;function Sy(t){const e=I.autoReplaceSvg==="nest"?Wh(t,{styleParser:!1}):Wh(t);return~e.extra.classes.indexOf(sy)?hn("generateLayersText",t,e):hn("generateSvgReplacementMutation",t,e)}let wt=new Set;ry.map(t=>{wt.add("fa-".concat(t))});Object.keys(An[J]).map(wt.add.bind(wt));Object.keys(An[Be]).map(wt.add.bind(wt));Object.keys(An[He]).map(wt.add.bind(wt));wt=[...wt];function Bh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();const n=q.documentElement.classList,r=c=>n.add("".concat(Ah,"-").concat(c)),i=c=>n.remove("".concat(Ah,"-").concat(c)),s=I.autoFetchSvg?wt:ry.map(c=>"fa-".concat(c)).concat(Object.keys(mx));s.includes("fa")||s.push("fa");const o=[".".concat(sy,":not([").concat(Bn,"])")].concat(s.map(c=>".".concat(c,":not([").concat(Bn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Br(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=wf.begin("onTree"),u=l.reduce((c,f)=>{try{const d=Sy(f);d&&c.push(d)}catch(d){ny||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(d=>{Ey(d,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),a(),c()})}).catch(d=>{a(),f(d)})})}function gx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sy(t).then(n=>{n&&Ey([n],e)})}function _x(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Pu(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Pu(i||{})),t(r,{...n,mask:i})}}const yx=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:a=[],attributes:u={},styles:c={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:g}=t;return gl({type:"icon",...t},()=>(Hn("beforeDOMElementCreation",{iconDefinition:t,params:e}),I.autoA11y&&(o?u["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(l||Ji()):(u["aria-hidden"]="true",u.focusable="false")),vf({icons:{main:Ru(g),mask:i?Ru(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...gt,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:u,styles:c,classes:a}})))};var vx={mixout(){return{icon:_x(yx)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Bh,t.nodeCallback=gx,t}}},provides(t){t.i2svg=function(e){const{node:n=q,callback:r=()=>{}}=e;return Bh(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:a,mask:u,maskId:c,extra:f}=n;return new Promise((d,g)=>{Promise.all([Au(r,o),u.iconName?Au(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[y,x]=_;d([e,vf({icons:{main:y,mask:x},prefix:o,iconName:r,transform:l,symbol:a,maskId:c,title:i,titleId:s,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=hl(o);l.length>0&&(r.style=l);let a;return mf(s)&&(a=hn("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},wx={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return gl({type:"layer"},()=>{Hn("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ex={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return gl({type:"counter",content:t},()=>(Hn("beforeDOMElementCreation",{content:t,params:e}),ex({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(I.cssPrefix,"-layers-counter"),...r]}})))}}}},Cx={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return gl({type:"text",content:t},()=>(Hn("beforeDOMElementCreation",{content:t,params:e}),Lh({content:t,transform:{...gt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(I.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(q_){const a=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/a,l=u.height/a}return I.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Lh({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const Sx=new RegExp('"',"ug"),Hh=[1105920,1112319],$h={FontAwesome:{normal:"fas",400:"fas"},...ik,...rk,...dk},bu=Object.keys($h).reduce((t,e)=>(t[e.toLowerCase()]=$h[e],t),{}),kx=Object.keys(bu).reduce((t,e)=>{const n=bu[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function xx(t){const e=t.replace(Sx,""),n=Lk(e,0),r=n>=Hh[0]&&n<=Hh[1],i=e.length===2?e[0]===e[1]:!1;return{value:Iu(i?e[0]:e),isSecondary:r||i}}function Ix(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(bu[n]||{})[i]||kx[n]}function Vh(t,e){const n="".concat(mk).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Br(t.children).filter(d=>d.getAttribute(Cu)===e)[0],l=fn.getComputedStyle(t,e),a=l.getPropertyValue("font-family"),u=a.match(wk),c=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){const d=l.getPropertyValue("content");let g=Ix(a,c);const{value:_,isSecondary:y}=xx(d),x=u[0].startsWith("FontAwesome");let p=_f(g,_),h=p;if(x){const m=Hk(_);m.iconName&&m.prefix&&(p=m.iconName,g=m.prefix)}if(p&&!y&&(!o||o.getAttribute(df)!==g||o.getAttribute(hf)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);const m=px(),{extra:v}=m;v.attributes[Cu]=e,Au(p,g).then(C=>{const N=vf({...m,icons:{main:C,mask:yf()},prefix:g,iconName:h,extra:v,watchable:!0}),T=q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=N.map(P=>ds(P)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Tx(t){return Promise.all([Vh(t,"::before"),Vh(t,"::after")])}function Nx(t){return t.parentNode!==document.head&&!~_k.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Cu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Yh(t){if(zt)return new Promise((e,n)=>{const r=Br(t.querySelectorAll("*")).filter(Nx).map(Tx),i=wf.begin("searchPseudoElements");Cy(),Promise.all(r).then(()=>{i(),Du(),e()}).catch(()=>{i(),Du(),n()})})}var Px={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Yh,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=q}=e;I.searchPseudoElements&&Yh(n)}}};let Gh=!1;var Rx={mixout(){return{dom:{unwatch(){Cy(),Gh=!0}}}},hooks(){return{bootstrap(){Uh(Nu("mutationObserverCallbacks",{}))},noAuto(){cx()},watch(t){const{observeMutationsRoot:e}=t;Gh?Du():Uh(Nu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Qh=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Ax={mixout(){return{parse:{transform:t=>Qh(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Qh(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(a," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},d={outer:o,inner:c,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const la={x:0,y:0,width:"100%",height:"100%"};function Kh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ox(t){return t.tag==="g"?t.children:[t]}var Dx={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ml(n.split(" ").map(i=>i.trim())):yf();return r.prefix||(r.prefix=dn()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:a,icon:u}=i,{width:c,icon:f}=s,d=Rk({transform:l,containerWidth:c,iconWidth:a}),g={tag:"rect",attributes:{...la,fill:"white"}},_=u.children?{children:u.children.map(Kh)}:{},y={tag:"g",attributes:{...d.inner},children:[Kh({tag:u.tag,attributes:{...u.attributes,...d.path},..._})]},x={tag:"g",attributes:{...d.outer},children:[y]},p="mask-".concat(o||Ji()),h="clip-".concat(o||Ji()),m={tag:"mask",attributes:{...la,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,x]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Ox(f)},m]};return n.push(v,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...la}}),{children:n,attributes:r}}}},bx={provides(t){let e=!1;fn.matchMedia&&(e=fn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Mx={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Lx=[Dk,vx,wx,Ex,Cx,Px,Rx,Ax,Dx,bx,Mx];Gk(Lx,{mixoutsTo:Ge});Ge.noAuto;Ge.config;Ge.library;Ge.dom;const Mu=Ge.parse;Ge.findIconDefinition;Ge.toHtml;const Fx=Ge.icon;Ge.layer;Ge.text;Ge.counter;var ky={exports:{}},zx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jx=zx,Ux=jx;function xy(){}function Iy(){}Iy.resetWarningCache=xy;var Wx=function(){function t(r,i,s,o,l,a){if(a!==Ux){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Iy,resetWarningCache:xy};return n.PropTypes=n,n};ky.exports=Wx();var Bx=ky.exports;const b=Zh(Bx);function qh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qh(Object(n),!0).forEach(function(r){fr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Uo(t){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uo(t)}function fr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $x(t,e){if(t==null)return{};var n=Hx(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Lu(t){return Vx(t)||Yx(t)||Gx(t)||Qx()}function Vx(t){if(Array.isArray(t))return Fu(t)}function Yx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Gx(t,e){if(t){if(typeof t=="string")return Fu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fu(t,e)}}function Fu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Qx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kx(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,a=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,g=t.inverse,_=t.border,y=t.listItem,x=t.flip,p=t.size,h=t.rotation,m=t.pull,v=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":_,"fa-li":y,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},fr(e,"fa-".concat(p),typeof p<"u"&&p!==null),fr(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),fr(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),fr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(v).map(function(C){return v[C]?C:null}).filter(function(C){return C})}function qx(t){return t=t-0,t===t}function Ty(t){return qx(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Xx=["style"];function Jx(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Zx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Ty(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[Jx(i)]=s:e[i]=s,e},{})}function Ny(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(a){return Ny(t,a)}),i=Object.keys(e.attributes||{}).reduce(function(a,u){var c=e.attributes[u];switch(u){case"class":a.attrs.className=c,delete e.attributes.class;break;case"style":a.attrs.style=Zx(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?a.attrs[u.toLowerCase()]=c:a.attrs[Ty(u)]=c}return a},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=$x(n,Xx);return i.attrs.style=pt(pt({},i.attrs.style),o),t.apply(void 0,[e.tag,pt(pt({},i.attrs),l)].concat(Lu(r)))}var Py=!1;try{Py=!0}catch{}function eI(){if(!Py&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Xh(t){if(t&&Uo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mu.icon)return Mu.icon(t);if(t===null)return null;if(t&&Uo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function aa(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?fr({},t,e):{}}var Jh={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Wo=cp.forwardRef(function(t,e){var n=pt(pt({},Jh),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,a=n.titleId,u=n.maskId,c=Xh(r),f=aa("classes",[].concat(Lu(Kx(n)),Lu((o||"").split(" ")))),d=aa("transform",typeof n.transform=="string"?Mu.transform(n.transform):n.transform),g=aa("mask",Xh(i)),_=Fx(c,pt(pt(pt(pt({},f),d),g),{},{symbol:s,title:l,titleId:a,maskId:u}));if(!_)return eI("Could not find icon",c),null;var y=_.abstract,x={ref:e};return Object.keys(n).forEach(function(p){Jh.hasOwnProperty(p)||(x[p]=n[p])}),tI(y[0],x)});Wo.displayName="FontAwesomeIcon";Wo.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};var tI=Ny.bind(null,cp.createElement);const nI={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},rI={prefix:"fas",iconName:"water",icon:[576,512,[],"f773","M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"]},iI=()=>{const[t,e]=Vt.useState(null),[n,r]=Vt.useState(!0),[i,s]=Vt.useState(null);if(Vt.useEffect(()=>{const a=qS(u=>{e(u),r(!1)},u=>{s(u.message),r(!1)});return()=>{a&&a()}},[]),n)return z.jsx(XS,{});if(i)return z.jsxs("div",{children:["Error: ",i]});const o=()=>{const{heart_rate:a,spo2:u}=t;let c="";return a<60?c+="Your heart rate is a bit low. Consider some light physical activity or breathing exercises. ":a>100?c+="Your heart rate is high. Try relaxing or meditating. ":c+="Your heart rate is in a healthy range. Keep up the good work! ",u<90?c+="Your oxygen level is low. Take deep breaths, or try a humidifier. Seek medical advice if it remains low.":c+="Your oxygen level is normal. Continue with your healthy habits!",c},l=()=>{const{heart_rate:a,spo2:u}=t;return a<60||u<90?"Consider light exercises like walking, yoga, or breathing exercises to improve your heart rate and oxygen level.":a>100?"It is recommended to avoid strenuous activity and focus on relaxation techniques like meditation or stretching.":"Maintain your current exercise routine, including aerobic exercises like jogging, swimming, or cycling to keep your cardiovascular health in check."};return z.jsxs("div",{className:"content",children:[z.jsx("header",{className:"app-header",children:z.jsx("h1",{children:"Health Dashboard"})}),z.jsxs("div",{className:"report-container",children:[z.jsxs("div",{className:"data-section",children:[z.jsxs("h2",{children:[z.jsx(Wo,{icon:nI,style:{color:"red",marginRight:"10px"}}),"Heart Rate"]}),z.jsx(xh,{value:t.heartRate<0?0:t.heartRate,unit:" bpm",type:0})]}),z.jsxs("div",{className:"data-section",children:[z.jsxs("h2",{children:[z.jsx(Wo,{icon:rI,style:{color:"blue",marginRight:"10px"}}),"SpO2 Level"]}),z.jsx(xh,{value:t.spo2<0?0:t.spo2,unit:" %",type:1})]})]}),z.jsxs("section",{className:"feedback-section",children:[z.jsx("h3",{children:"Health Feedback"}),z.jsx("p",{children:o()})]}),z.jsxs("section",{className:"recommendations-section",children:[z.jsx("h3",{children:"Recommended Exercises & Remedies"}),z.jsx("p",{children:l()})]}),z.jsx("footer",{children:"Health Report powered by Firebase and ESP32"})]})};hg(document.getElementById("root")).render(z.jsx(Vt.StrictMode,{children:z.jsx(iI,{})}));
