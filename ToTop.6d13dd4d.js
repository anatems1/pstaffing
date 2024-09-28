import{r as p}from"./chunks/index.aeb6f50c.js";var s={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=p.exports,c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,a){var o,t={},n=null,d=null;a!==void 0&&(n=""+a),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(d=r.ref);for(o in r)m.call(r,o)&&!_.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)t[o]===void 0&&(t[o]=r[o]);return{$$typeof:c,type:e,key:n,ref:d,props:t,_owner:x.current}}l.Fragment=u;l.jsx=i;l.jsxs=i;(function(e){e.exports=l})(s);function y(){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.exports.jsx("button",{onClick:e,className:"flex gap-3 rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-white/50 to-yellow-100 p-3 shadow-2xl shadow-yellow-900/50 backdrop-blur-xl dark:border-white/10 dark:from-gray-800 dark:to-black/70 dark:shadow-primary/50",children:s.exports.jsx("span",{className:"text-sm font-semibold tracking-wide text-yellow-900 dark:text-white",children:"To Top"})})}export{y as default};
