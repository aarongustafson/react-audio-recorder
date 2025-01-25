(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder button{box-sizing:content-box;background:transparent;border:none;color:#000;cursor:pointer;margin:0;padding:12px}.audio-recorder img{aspect-ratio:1/1;display:block}.audio-recorder .audio-recorder-mic{border-radius:50%}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.recording{border-radius:12px;padding-inline:10px;width:320px;width:min-content;transition:all .2s ease-out}.audio-recorder [hidden]{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import we, { useState as W, useCallback as K, useEffect as cr, Suspense as lr } from "react";
var je = { exports: {} }, q = {};
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
    return q;
  ke = 1;
  var x = we, N = Symbol.for("react.element"), k = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, D = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(S, i, l) {
    var g, m = {}, y = null, R = null;
    l !== void 0 && (y = "" + l), i.key !== void 0 && (y = "" + i.key), i.ref !== void 0 && (R = i.ref);
    for (g in i)
      O.call(i, g) && !h.hasOwnProperty(g) && (m[g] = i[g]);
    if (S && S.defaultProps)
      for (g in i = S.defaultProps, i)
        m[g] === void 0 && (m[g] = i[g]);
    return { $$typeof: N, type: S, key: y, ref: R, props: m, _owner: D.current };
  }
  return q.Fragment = k, q.jsx = C, q.jsxs = C, q;
}
var ee = {};
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
    var x = we, N = Symbol.for("react.element"), k = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), S = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), c = Symbol.iterator, E = "@@iterator";
    function _(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = c && e[c] || e[E];
      return typeof r == "function" ? r : null;
    }
    var z = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Q("error", e, t);
      }
    }
    function Q(e, r, t) {
      {
        var a = z.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var p = !1, A = !1, U = !1, G = !1, J = !1, B;
    B = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === O || e === h || J || e === D || e === l || e === g || G || e === R || p || A || U || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === C || e.$$typeof === S || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function $(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case O:
          return "Fragment";
        case k:
          return "Portal";
        case h:
          return "Profiler";
        case D:
          return "StrictMode";
        case l:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return V(r) + ".Consumer";
          case C:
            var t = e;
            return V(t._context) + ".Provider";
          case i:
            return $(e, e.render, "ForwardRef");
          case m:
            var a = e.displayName || null;
            return a !== null ? a : M(e.type) || "Memo";
          case y: {
            var s = e, u = s._payload, o = s._init;
            try {
              return M(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, I = 0, Y, T, re, ue, te, ye, be;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Pe() {
      {
        if (I === 0) {
          Y = console.log, T = console.info, re = console.warn, ue = console.error, te = console.group, ye = console.groupCollapsed, be = console.groupEnd;
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
        I++;
      }
    }
    function Ye() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, e, {
              value: Y
            }),
            info: b({}, e, {
              value: T
            }),
            warn: b({}, e, {
              value: re
            }),
            error: b({}, e, {
              value: ue
            }),
            group: b({}, e, {
              value: te
            }),
            groupCollapsed: b({}, e, {
              value: ye
            }),
            groupEnd: b({}, e, {
              value: be
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = z.ReactCurrentDispatcher, le;
    function ae(e, r, t) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            le = a && a[1] || "";
          }
        return `
` + le + e;
      }
    }
    var de = !1, ie;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new We();
    }
    function pe(e, r) {
      if (!e || de)
        return "";
      {
        var t = ie.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      de = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ce.current, ce.current = null, Pe();
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
            } catch (P) {
              a = P;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (P) {
              a = P;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            a = P;
          }
          e();
        }
      } catch (P) {
        if (P && a && typeof P.stack == "string") {
          for (var n = P.stack.split(`
`), j = a.stack.split(`
`), d = n.length - 1, f = j.length - 1; d >= 1 && f >= 0 && n[d] !== j[f]; )
            f--;
          for (; d >= 1 && f >= 0; d--, f--)
            if (n[d] !== j[f]) {
              if (d !== 1 || f !== 1)
                do
                  if (d--, f--, f < 0 || n[d] !== j[f]) {
                    var L = `
` + n[d].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, L), L;
                  }
                while (d >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        de = !1, ce.current = u, Ye(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", Ae = F ? ae(F) : "";
      return typeof e == "function" && ie.set(e, Ae), Ae;
    }
    function Be(e, r, t) {
      return pe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ne(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ve(e));
      if (typeof e == "string")
        return ae(e);
      switch (e) {
        case l:
          return ae("Suspense");
        case g:
          return ae("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Be(e.render);
          case m:
            return ne(e.type, r, t);
          case y: {
            var a = e, s = a._payload, u = a._init;
            try {
              return ne(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Ne = {}, he = z.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ze(e, r, t, a, s) {
      {
        var u = Function.call.bind(oe);
        for (var o in e)
          if (u(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var j = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              n = d;
            }
            n && !(n instanceof Error) && (se(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), se(null)), n instanceof Error && !(n.message in Ne) && (Ne[n.message] = !0, se(s), v("Failed %s type: %s", t, n.message), se(null));
          }
      }
    }
    var Fe = Array.isArray;
    function fe(e) {
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
    var X = z.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, De, ge;
    ge = {};
    function Je(e) {
      if (oe.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (oe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $e(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var t = M(X.current.type);
        ge[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(X.current.type), e.ref), ge[t] = !0);
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
        $$typeof: N,
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
        var u, o = {}, n = null, j = null;
        t !== void 0 && (Te(t), n = "" + t), He(r) && (Te(r.key), n = "" + r.key), Je(r) && (j = r.ref, $e(r, s));
        for (u in r)
          oe.call(r, u) && !Ge.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (u in d)
            o[u] === void 0 && (o[u] = d[u]);
        }
        if (n || j) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Xe(o, f), j && Ke(o, f);
        }
        return qe(e, n, j, s, a, X.current, o);
      }
    }
    var ve = z.ReactCurrentOwner, Se = z.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    function Re() {
      {
        if (ve.current) {
          var e = M(ve.current.type);
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
        e && e._owner && e._owner !== ve.current && (a = " It was passed a child from " + M(e._owner.type) + "."), Z(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), Z(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            me(a) && ze(a, r);
          }
        else if (me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = _(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              me(o.value) && ze(o.value, r);
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
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = M(r);
          Ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Me) {
          Me = !0;
          var s = M(r);
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
            Z(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Oe(e, r, t, a, s, u) {
      {
        var o = H(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = rr(s);
          j ? n += j : n += Re();
          var d;
          e === null ? d = "null" : fe(e) ? d = "array" : e !== void 0 && e.$$typeof === N ? (d = "<" + (M(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, n);
        }
        var f = er(e, r, t, s, u);
        if (f == null)
          return f;
        if (o) {
          var L = r.children;
          if (L !== void 0)
            if (a)
              if (fe(L)) {
                for (var F = 0; F < L.length; F++)
                  xe(L[F], e);
                Object.freeze && Object.freeze(L);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(L, e);
        }
        return e === O ? ir(f) : ar(f), f;
      }
    }
    function nr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function or(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var sr = or, ur = nr;
    ee.Fragment = O, ee.jsx = sr, ee.jsxs = ur;
  }()), ee;
}
process.env.NODE_ENV === "production" ? je.exports = dr() : je.exports = fr();
var w = je.exports;
const gr = (x, N, k) => {
  const [O, D] = W(!1), [h, C] = W(!1), [S, i] = W(0), [l, g] = W(), [m, y] = W(), [R, c] = W(), E = K(() => {
    const p = setInterval(() => {
      i((A) => A + 1);
    }, 1e3);
    y(p);
  }, [i, y]), _ = K(() => {
    m != null && clearInterval(m), y(void 0);
  }, [m, y]), z = K(() => {
    m == null && navigator.mediaDevices.getUserMedia({ audio: x ?? !0 }).then((p) => {
      D(!0);
      const A = new MediaRecorder(
        p,
        k
      );
      g(A), A.start(), E(), A.addEventListener("dataavailable", (U) => {
        c(U.data), A.stream.getTracks().forEach((G) => G.stop()), g(void 0);
      });
    }).catch((p) => {
      console.log(p.name, p.message, p.cause), N == null || N(p);
    });
  }, [
    m,
    D,
    g,
    E,
    c,
    N,
    k
  ]), v = K(() => {
    l == null || l.stop(), _(), i(0), D(!1), C(!1);
  }, [
    l,
    i,
    D,
    C,
    _
  ]), Q = K(() => {
    h ? (C(!1), l == null || l.resume(), E()) : (C(!0), _(), l == null || l.pause());
  }, [l, C, E, _]);
  return {
    startRecording: z,
    stopRecording: v,
    togglePauseResume: Q,
    recordingBlob: R,
    isRecording: O,
    isPaused: h,
    recordingTime: S,
    mediaRecorder: l
  };
}, vr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", Mr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", mr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", jr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==", wr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij4KICA8cGF0aCBkPSJNODggMzJoODBhOCA4IDAgMCAwIDAtMTZIODhhOCA4IDAgMCAwIDAgMTZabTEyOCAxNkg0MGE4IDggMCAwIDAgMCAxNmg4djE0NGExNi4wMiAxNi4wMiAwIDAgMCAxNiAxNmgxMjhhMTYuMDIgMTYuMDIgMCAwIDAgMTYtMTZWNjRoOGE4IDggMCAwIDAgMC0xNloiLz4KPC9zdmc+Cg==";
const yr = we.lazy(async () => {
  const { LiveAudioVisualizer: x } = await import("./react-audio-visualize.es-69216c73.js");
  return { default: x };
}), Cr = ({
  onRecordingComplete: x,
  onNotAllowedOrFound: N,
  recorderControls: k,
  audioTrackConstraints: O,
  downloadOnSavePress: D = !1,
  downloadFileExtension: h = "webm",
  showVisualizer: C = !1,
  mediaRecorderOptions: S,
  classes: i,
  disabled: l
}) => {
  const {
    startRecording: g,
    stopRecording: m,
    togglePauseResume: y,
    recordingBlob: R,
    isRecording: c,
    isPaused: E,
    recordingTime: _,
    mediaRecorder: z
  } = k ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  gr(
    O,
    N,
    S
  ), [v, Q] = W(!1), p = (M = !0) => {
    Q(M), m();
  }, A = (M) => {
    g();
    const b = M.target;
    b == null || b.focus();
  }, U = async (M) => {
    const I = (await import("./index-1c988149.js").then((te) => te.i)).createFFmpeg({ log: !1 });
    await I.load();
    const Y = "input.webm", T = `output.${h}`;
    I.FS(
      "writeFile",
      Y,
      new Uint8Array(await M.arrayBuffer())
    ), await I.run("-i", Y, T);
    const re = I.FS("readFile", T);
    return new Blob([re.buffer], {
      type: `audio/${h}`
    });
  }, G = async (M) => {
    !crossOriginIsolated && h !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const b = crossOriginIsolated ? await U(M) : M, I = crossOriginIsolated ? h : "webm", Y = URL.createObjectURL(b), T = document.createElement("a");
    T.style.display = "none", T.href = Y, T.download = `audio.${I}`, document.body.appendChild(T), T.click(), T.remove();
  };
  cr(() => {
    (v || k) && R != null && x != null && (x(R), D && G(R));
  }, [R]);
  const J = "Start recording", B = "Pause recording", H = "Stop recording", $ = "Resume recording", V = "Discard Recording";
  return /* @__PURE__ */ w.jsxs(
    "div",
    {
      className: `audio-recorder ${c ? "recording" : ""} ${(i == null ? void 0 : i.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ w.jsx(
          "button",
          {
            className: `audio-recorder-mic ${(i == null ? void 0 : i.AudioRecorderStartSaveClass) ?? ""}`,
            "data-testid": "ar_mic",
            "aria-label": c ? H : J,
            title: c ? H : J,
            onClick: c ? () => p() : A,
            disabled: l,
            children: /* @__PURE__ */ w.jsx(
              "img",
              {
                src: c ? jr : vr,
                alt: c ? H : J,
                width: 16,
                height: 16
              }
            )
          }
        ),
        /* @__PURE__ */ w.jsxs(
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
        C ? /* @__PURE__ */ w.jsx(
          "span",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            className: "audio-recorder-visualizer",
            children: z && /* @__PURE__ */ w.jsx(lr, { fallback: /* @__PURE__ */ w.jsx(w.Fragment, {}), children: /* @__PURE__ */ w.jsx(
              yr,
              {
                mediaRecorder: z,
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
        ) : /* @__PURE__ */ w.jsxs(
          "span",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            className: `audio-recorder-status ${(i == null ? void 0 : i.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ w.jsx("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            tabIndex: c ? 0 : -1,
            className: `audio-recorder-options ${(i == null ? void 0 : i.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: y,
            "aria-label": E ? $ : B,
            title: E ? $ : B,
            "data-testid": "ar_pause",
            children: /* @__PURE__ */ w.jsx(
              "img",
              {
                src: E ? mr : Mr,
                alt: E ? $ : B,
                width: 16,
                height: 16
              }
            )
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            tabIndex: c ? 0 : -1,
            className: `audio-recorder-options ${(i == null ? void 0 : i.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => p(!1),
            "aria-label": V,
            title: V,
            "data-testid": "ar_cancel",
            children: /* @__PURE__ */ w.jsx("img", { src: wr, width: 16, height: 16, alt: V })
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
