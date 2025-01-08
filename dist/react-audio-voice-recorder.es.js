(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder button{box-sizing:content-box;background:transparent;border:none;color:#000;cursor:pointer;margin:0;padding:12px}.audio-recorder img{aspect-ratio:1/1;display:block}.audio-recorder .audio-recorder-mic{border-radius:50%}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.recording{border-radius:12px;padding-inline:10px;width:320px;width:min-content;transition:all .2s ease-out}.audio-recorder [hidden]{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import je, { useState as B, useCallback as X, useEffect as cr, Suspense as lr } from "react";
var me = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function dr() {
  if (ke)
    return K;
  ke = 1;
  var R = je, p = Symbol.for("react.element"), k = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, L = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(D, i, l) {
    var g, M = {}, m = null, c = null;
    l !== void 0 && (m = "" + l), i.key !== void 0 && (m = "" + i.key), i.ref !== void 0 && (c = i.ref);
    for (g in i)
      E.call(i, g) && !N.hasOwnProperty(g) && (M[g] = i[g]);
    if (D && D.defaultProps)
      for (g in i = D.defaultProps, i)
        M[g] === void 0 && (M[g] = i[g]);
    return { $$typeof: p, type: D, key: m, ref: c, props: M, _owner: L.current };
  }
  return K.Fragment = k, K.jsx = C, K.jsxs = C, K;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function fr() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    var R = je, p = Symbol.for("react.element"), k = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), D = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), z = Symbol.iterator, _ = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[_];
      return typeof r == "function" ? r : null;
    }
    var x = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        V("error", e, t);
      }
    }
    function V(e, r, t) {
      {
        var a = x.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var h = !1, O = !1, U = !1, W = !1, G = !1, Z;
    Z = Symbol.for("react.module.reference");
    function J(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === N || G || e === L || e === l || e === g || W || e === c || h || O || U || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === M || e.$$typeof === C || e.$$typeof === D || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function H(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function S(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case k:
          return "Portal";
        case N:
          return "Profiler";
        case L:
          return "StrictMode";
        case l:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            var r = e;
            return S(r) + ".Consumer";
          case C:
            var t = e;
            return S(t._context) + ".Provider";
          case i:
            return H(e, e.render, "ForwardRef");
          case M:
            var a = e.displayName || null;
            return a !== null ? a : j(e.type) || "Memo";
          case m: {
            var s = e, u = s._payload, o = s._init;
            try {
              return j(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, A = 0, I, ee, se, re, we, ye, be;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Pe() {
      {
        if (A === 0) {
          I = console.log, ee = console.info, se = console.warn, re = console.error, we = console.group, ye = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ye() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, e, {
              value: I
            }),
            info: b({}, e, {
              value: ee
            }),
            warn: b({}, e, {
              value: se
            }),
            error: b({}, e, {
              value: re
            }),
            group: b({}, e, {
              value: we
            }),
            groupCollapsed: b({}, e, {
              value: ye
            }),
            groupEnd: b({}, e, {
              value: be
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = x.ReactCurrentDispatcher, ce;
    function te(e, r, t) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            ce = a && a[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var le = !1, ae;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new We();
    }
    function pe(e, r) {
      if (!e || le)
        return "";
      {
        var t = ae.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      le = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ue.current, ue.current = null, Pe();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (Y) {
              a = Y;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (Y) {
              a = Y;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            a = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && a && typeof Y.stack == "string") {
          for (var n = Y.stack.split(`
`), w = a.stack.split(`
`), d = n.length - 1, f = w.length - 1; d >= 1 && f >= 0 && n[d] !== w[f]; )
            f--;
          for (; d >= 1 && f >= 0; d--, f--)
            if (n[d] !== w[f]) {
              if (d !== 1 || f !== 1)
                do
                  if (d--, f--, f < 0 || n[d] !== w[f]) {
                    var T = `
` + n[d].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, T), T;
                  }
                while (d >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        le = !1, ue.current = u, Ye(), Error.prepareStackTrace = s;
      }
      var Q = e ? e.displayName || e.name : "", Ae = Q ? te(Q) : "";
      return typeof e == "function" && ae.set(e, Ae), Ae;
    }
    function Be(e, r, t) {
      return pe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ve(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case l:
          return te("Suspense");
        case g:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Be(e.render);
          case M:
            return ie(e.type, r, t);
          case m: {
            var a = e, s = a._payload, u = a._init;
            try {
              return ie(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ne = {}, he = x.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ze(e, r, t, a, s) {
      {
        var u = Function.call.bind(ne);
        for (var o in e)
          if (u(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              n = d;
            }
            n && !(n instanceof Error) && (oe(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), oe(null)), n instanceof Error && !(n.message in Ne) && (Ne[n.message] = !0, oe(s), v("Failed %s type: %s", t, n.message), oe(null));
          }
      }
    }
    var Fe = Array.isArray;
    function de(e) {
      return Fe(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ue(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function Te(e) {
      if (Ue(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Ie(e);
    }
    var $ = x.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, De, fe;
    fe = {};
    function Je(e) {
      if (ne.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (ne.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $e(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = j($.current.type);
        fe[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j($.current.type), e.ref), fe[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          Le || (Le = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          De || (De = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, a, s, u, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function er(e, r, t, a, s) {
      {
        var u, o = {}, n = null, w = null;
        t !== void 0 && (Te(t), n = "" + t), He(r) && (Te(r.key), n = "" + r.key), Je(r) && (w = r.ref, $e(r, s));
        for (u in r)
          ne.call(r, u) && !Ge.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (u in d)
            o[u] === void 0 && (o[u] = d[u]);
        }
        if (n || w) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Xe(o, f), w && Ke(o, f);
        }
        return qe(e, n, w, s, a, $.current, o);
      }
    }
    var ge = x.ReactCurrentOwner, Se = x.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Re() {
      {
        if (ge.current) {
          var e = j(ge.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function tr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ze(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ge.current && (a = " It was passed a child from " + j(e._owner.type) + "."), F(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Me(a) && ze(a, r);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = P(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              Me(o.value) && ze(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === M))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = j(r);
          Ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var s = j(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            F(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Oe(e, r, t, a, s, u) {
      {
        var o = J(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = rr(s);
          w ? n += w : n += Re();
          var d;
          e === null ? d = "null" : de(e) ? d = "array" : e !== void 0 && e.$$typeof === p ? (d = "<" + (j(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, n);
        }
        var f = er(e, r, t, s, u);
        if (f == null)
          return f;
        if (o) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (de(T)) {
                for (var Q = 0; Q < T.length; Q++)
                  xe(T[Q], e);
                Object.freeze && Object.freeze(T);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(T, e);
        }
        return e === E ? ir(f) : ar(f), f;
      }
    }
    function nr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function or(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var sr = or, ur = nr;
    q.Fragment = E, q.jsx = sr, q.jsxs = ur;
  }()), q;
}
process.env.NODE_ENV === "production" ? me.exports = dr() : me.exports = fr();
var y = me.exports;
const gr = (R, p, k) => {
  const [E, L] = B(!1), [N, C] = B(!1), [D, i] = B(0), [l, g] = B(), [M, m] = B(), [c, z] = B(), _ = X(() => {
    const h = setInterval(() => {
      i((O) => O + 1);
    }, 1e3);
    m(h);
  }, [i, m]), P = X(() => {
    M != null && clearInterval(M), m(void 0);
  }, [M, m]), x = X(() => {
    M == null && navigator.mediaDevices.getUserMedia({ audio: R ?? !0 }).then((h) => {
      L(!0);
      const O = new MediaRecorder(
        h,
        k
      );
      g(O), O.start(), _(), O.addEventListener("dataavailable", (U) => {
        z(U.data), O.stream.getTracks().forEach((W) => W.stop()), g(void 0);
      });
    }).catch((h) => {
      console.log(h.name, h.message, h.cause), p == null || p(h);
    });
  }, [
    M,
    L,
    g,
    _,
    z,
    p,
    k
  ]), v = X(() => {
    l == null || l.stop(), P(), i(0), L(!1), C(!1);
  }, [
    l,
    i,
    L,
    C,
    P
  ]), V = X(() => {
    N ? (C(!1), l == null || l.resume(), _()) : (C(!0), P(), l == null || l.pause());
  }, [l, C, _, P]);
  return {
    startRecording: x,
    stopRecording: v,
    togglePauseResume: V,
    recordingBlob: c,
    isRecording: E,
    isPaused: N,
    recordingTime: D,
    mediaRecorder: l
  };
}, vr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", Mr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", mr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", jr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==", wr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij4KICA8cGF0aCBkPSJNODggMzJoODBhOCA4IDAgMCAwIDAtMTZIODhhOCA4IDAgMCAwIDAgMTZabTEyOCAxNkg0MGE4IDggMCAwIDAgMCAxNmg4djE0NGExNi4wMiAxNi4wMiAwIDAgMCAxNiAxNmgxMjhhMTYuMDIgMTYuMDIgMCAwIDAgMTYtMTZWNjRoOGE4IDggMCAwIDAgMC0xNloiLz4KPC9zdmc+Cg==";
const yr = je.lazy(async () => {
  const { LiveAudioVisualizer: R } = await import("./react-audio-visualize.es-69216c73.js");
  return { default: R };
}), Cr = ({
  onRecordingComplete: R,
  onNotAllowedOrFound: p,
  recorderControls: k,
  audioTrackConstraints: E,
  downloadOnSavePress: L = !1,
  downloadFileExtension: N = "webm",
  showVisualizer: C = !1,
  mediaRecorderOptions: D,
  classes: i
}) => {
  const {
    startRecording: l,
    stopRecording: g,
    togglePauseResume: M,
    recordingBlob: m,
    isRecording: c,
    isPaused: z,
    recordingTime: _,
    mediaRecorder: P
  } = k ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  gr(
    E,
    p,
    D
  ), [x, v] = B(!1), V = (S = !0) => {
    v(S), g();
  }, h = (S) => {
    l();
    const j = S.target;
    j == null || j.focus();
  }, O = async (S) => {
    const b = (await import("./index-1c988149.js").then((re) => re.i)).createFFmpeg({ log: !1 });
    await b.load();
    const A = "input.webm", I = `output.${N}`;
    b.FS(
      "writeFile",
      A,
      new Uint8Array(await S.arrayBuffer())
    ), await b.run("-i", A, I);
    const ee = b.FS("readFile", I);
    return new Blob([ee.buffer], {
      type: `audio/${N}`
    });
  }, U = async (S) => {
    !crossOriginIsolated && N !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const j = crossOriginIsolated ? await O(S) : S, b = crossOriginIsolated ? N : "webm", A = URL.createObjectURL(j), I = document.createElement("a");
    I.style.display = "none", I.href = A, I.download = `audio.${b}`, document.body.appendChild(I), I.click(), I.remove();
  };
  cr(() => {
    (x || k) && m != null && R != null && (R(m), L && U(m));
  }, [m]);
  const W = "Start recording", G = "Pause recording", Z = "Stop recording", J = "Resume recording", H = "Discard Recording";
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: `audio-recorder ${c ? "recording" : ""} ${(i == null ? void 0 : i.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ y.jsx(
          "button",
          {
            className: `audio-recorder-mic ${(i == null ? void 0 : i.AudioRecorderStartSaveClass) ?? ""}`,
            "data-testid": "ar_mic",
            "aria-label": c ? Z : W,
            title: c ? Z : W,
            onClick: c ? () => V() : h,
            children: /* @__PURE__ */ y.jsx(
              "img",
              {
                src: c ? jr : vr,
                alt: c ? Z : W,
                width: 16,
                height: 16
              }
            )
          }
        ),
        /* @__PURE__ */ y.jsxs(
          "span",
          {
            role: "timer",
            "aria-atomic": "true",
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            className: `audio-recorder-timer ${(i == null ? void 0 : i.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(_ / 60),
              ":",
              String(_ % 60).padStart(2, "0")
            ]
          }
        ),
        C ? /* @__PURE__ */ y.jsx(
          "span",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            className: "audio-recorder-visualizer",
            children: P && /* @__PURE__ */ y.jsx(lr, { fallback: /* @__PURE__ */ y.jsx(y.Fragment, {}), children: /* @__PURE__ */ y.jsx(
              yr,
              {
                mediaRecorder: P,
                barWidth: 2,
                gap: 2,
                width: 140,
                height: 30,
                fftSize: 512,
                maxDecibels: -10,
                minDecibels: -80,
                smoothingTimeConstant: 0.4
              }
            ) })
          }
        ) : /* @__PURE__ */ y.jsxs(
          "span",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            className: `audio-recorder-status ${(i == null ? void 0 : i.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ y.jsx("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            tabIndex: c ? 0 : -1,
            className: `audio-recorder-options ${(i == null ? void 0 : i.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: M,
            "aria-label": z ? J : G,
            title: z ? J : G,
            "data-testid": "ar_pause",
            children: /* @__PURE__ */ y.jsx(
              "img",
              {
                src: z ? mr : Mr,
                alt: z ? J : G,
                width: 16,
                height: 16
              }
            )
          }
        ),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            tabIndex: c ? 0 : -1,
            className: `audio-recorder-options ${(i == null ? void 0 : i.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => V(!1),
            "aria-label": H,
            title: H,
            "data-testid": "ar_cancel",
            children: /* @__PURE__ */ y.jsx("img", { src: wr, width: 16, height: 16, alt: H })
          }
        )
      ]
    }
  );
};
export {
  Cr as AudioRecorder,
  gr as useAudioRecorder
};
