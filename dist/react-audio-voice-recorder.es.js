(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder button{box-sizing:content-box;background:transparent;border:none;color:#000;cursor:pointer;margin:0;padding:12px}.audio-recorder img{aspect-ratio:1/1;display:block}.audio-recorder .audio-recorder-mic{border-radius:50%}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.recording{border-radius:12px;padding-inline:10px;width:320px;width:min-content;transition:all .2s ease-out}.audio-recorder [hidden]{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import ge, { useState as B, useCallback as H, useEffect as cr, Suspense as lr } from "react";
var fe = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function dr() {
  if (_e)
    return $;
  _e = 1;
  var S = ge, b = Symbol.for("react.element"), z = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, D = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(h, i, l) {
    var g, M = {}, m = null, c = null;
    l !== void 0 && (m = "" + l), i.key !== void 0 && (m = "" + i.key), i.ref !== void 0 && (c = i.ref);
    for (g in i)
      E.call(i, g) && !C.hasOwnProperty(g) && (M[g] = i[g]);
    if (h && h.defaultProps)
      for (g in i = h.defaultProps, i)
        M[g] === void 0 && (M[g] = i[g]);
    return { $$typeof: b, type: h, key: m, ref: c, props: M, _owner: D.current };
  }
  return $.Fragment = z, $.jsx = j, $.jsxs = j, $;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function fr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var S = ge, b = Symbol.for("react.element"), z = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), h = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), L = Symbol.iterator, O = "@@iterator";
    function _(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[O];
      return typeof r == "function" ? r : null;
    }
    var A = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        V("error", e, t);
      }
    }
    function V(e, r, t) {
      {
        var a = A.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var p = !1, R = !1, U = !1, T = !1, W = !1, k;
    k = Symbol.for("react.module.reference");
    function F(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === C || W || e === D || e === l || e === g || T || e === c || p || R || U || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === M || e.$$typeof === j || e.$$typeof === h || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === k || e.getModuleId !== void 0));
    }
    function N(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case z:
          return "Portal";
        case C:
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
          case h:
            var r = e;
            return K(r) + ".Consumer";
          case j:
            var t = e;
            return K(t._context) + ".Provider";
          case i:
            return N(e, e.render, "ForwardRef");
          case M:
            var a = e.displayName || null;
            return a !== null ? a : x(e.type) || "Memo";
          case m: {
            var u = e, s = u._payload, o = u._init;
            try {
              return x(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, G = 0, ve, Me, me, we, ye, je, be;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Pe() {
      {
        if (G === 0) {
          ve = console.log, Me = console.info, me = console.warn, we = console.error, ye = console.group, je = console.groupCollapsed, be = console.groupEnd;
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
        G++;
      }
    }
    function Ye() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ve
            }),
            info: P({}, e, {
              value: Me
            }),
            warn: P({}, e, {
              value: me
            }),
            error: P({}, e, {
              value: we
            }),
            group: P({}, e, {
              value: ye
            }),
            groupCollapsed: P({}, e, {
              value: je
            }),
            groupEnd: P({}, e, {
              value: be
            })
          });
        }
        G < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = A.ReactCurrentDispatcher, ne;
    function q(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            ne = a && a[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var oe = !1, ee;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new We();
    }
    function pe(e, r) {
      if (!e || oe)
        return "";
      {
        var t = ee.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      oe = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ie.current, ie.current = null, Pe();
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
                    var I = `
` + n[d].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, I), I;
                  }
                while (d >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ie.current = s, Ye(), Error.prepareStackTrace = u;
      }
      var Q = e ? e.displayName || e.name : "", Oe = Q ? q(Q) : "";
      return typeof e == "function" && ee.set(e, Oe), Oe;
    }
    function Be(e, r, t) {
      return pe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function re(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ve(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case l:
          return q("Suspense");
        case g:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Be(e.render);
          case M:
            return re(e.type, r, t);
          case m: {
            var a = e, u = a._payload, s = a._init;
            try {
              return re(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Te = {}, Ie = A.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(t);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Fe(e, r, t, a, u) {
      {
        var s = Function.call.bind(te);
        for (var o in e)
          if (s(e, o)) {
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
            n && !(n instanceof Error) && (ae(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), ae(null)), n instanceof Error && !(n.message in Te) && (Te[n.message] = !0, ae(u), v("Failed %s type: %s", t, n.message), ae(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ue(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ue(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function he(e) {
      if (Ue(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), De(e);
    }
    var J = A.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, Se, se;
    se = {};
    function Je(e) {
      if (te.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (te.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $e(e, r) {
      if (typeof e.ref == "string" && J.current && r && J.current.stateNode !== r) {
        var t = x(J.current.type);
        se[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(J.current.type), e.ref), se[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          Ne || (Ne = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Se || (Se = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, a, u, s, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
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
        value: u
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function er(e, r, t, a, u) {
      {
        var s, o = {}, n = null, w = null;
        t !== void 0 && (he(t), n = "" + t), He(r) && (he(r.key), n = "" + r.key), Je(r) && (w = r.ref, $e(r, u));
        for (s in r)
          te.call(r, s) && !Ge.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (s in d)
            o[s] === void 0 && (o[s] = d[s]);
        }
        if (n || w) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Xe(o, f), w && Ke(o, f);
        }
        return qe(e, n, w, u, a, J.current, o);
      }
    }
    var ce = A.ReactCurrentOwner, Ee = A.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function Le() {
      {
        if (ce.current) {
          var e = x(ce.current.type);
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
    var Ae = {};
    function tr(e) {
      {
        var r = Le();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ae[t])
          return;
        Ae[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ce.current && (a = " It was passed a child from " + x(e._owner.type) + "."), Z(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), Z(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            de(a) && Re(a, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = _(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), o; !(o = s.next()).done; )
              de(o.value) && Re(o.value, r);
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
          var a = x(r);
          Fe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !le) {
          le = !0;
          var u = x(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
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
    function ze(e, r, t, a, u, s) {
      {
        var o = F(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = rr(u);
          w ? n += w : n += Le();
          var d;
          e === null ? d = "null" : ue(e) ? d = "array" : e !== void 0 && e.$$typeof === b ? (d = "<" + (x(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, n);
        }
        var f = er(e, r, t, u, s);
        if (f == null)
          return f;
        if (o) {
          var I = r.children;
          if (I !== void 0)
            if (a)
              if (ue(I)) {
                for (var Q = 0; Q < I.length; Q++)
                  xe(I[Q], e);
                Object.freeze && Object.freeze(I);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(I, e);
        }
        return e === E ? ir(f) : ar(f), f;
      }
    }
    function nr(e, r, t) {
      return ze(e, r, t, !0);
    }
    function or(e, r, t) {
      return ze(e, r, t, !1);
    }
    var ur = or, sr = nr;
    X.Fragment = E, X.jsx = ur, X.jsxs = sr;
  }()), X;
}
process.env.NODE_ENV === "production" ? fe.exports = dr() : fe.exports = fr();
var y = fe.exports;
const gr = (S, b, z) => {
  const [E, D] = B(!1), [C, j] = B(!1), [h, i] = B(0), [l, g] = B(), [M, m] = B(), [c, L] = B(), O = H(() => {
    const p = setInterval(() => {
      i((R) => R + 1);
    }, 1e3);
    m(p);
  }, [i, m]), _ = H(() => {
    M != null && clearInterval(M), m(void 0);
  }, [M, m]), A = H(() => {
    M == null && navigator.mediaDevices.getUserMedia({ audio: S ?? !0 }).then((p) => {
      D(!0);
      const R = new MediaRecorder(
        p,
        z
      );
      g(R), R.start(), O(), R.addEventListener("dataavailable", (U) => {
        L(U.data), R.stream.getTracks().forEach((T) => T.stop()), g(void 0);
      });
    }).catch((p) => {
      console.log(p.name, p.message, p.cause), b == null || b(p);
    });
  }, [
    M,
    D,
    g,
    O,
    L,
    b,
    z
  ]), v = H(() => {
    l == null || l.stop(), _(), i(0), D(!1), j(!1);
  }, [
    l,
    i,
    D,
    j,
    _
  ]), V = H(() => {
    C ? (j(!1), l == null || l.resume(), O()) : (j(!0), _(), l == null || l.pause());
  }, [l, j, O, _]);
  return {
    startRecording: A,
    stopRecording: v,
    togglePauseResume: V,
    recordingBlob: c,
    isRecording: E,
    isPaused: C,
    recordingTime: h,
    mediaRecorder: l
  };
}, vr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", Mr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", mr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", wr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE3Ljg1IDMuMTVsLTIuOTktM0EuNTA4LjUwOCAwIDAgMCAxNC41IDBIMS40QTEuNDE3IDEuNDE3IDAgMCAwIDAgMS40M3YxNS4xNEExLjQxNyAxLjQxNyAwIDAgMCAxLjQgMThoMTUuMmExLjQxNyAxLjQxNyAwIDAgMCAxLjQtMS40M1YzLjVhLjQ3LjQ3IDAgMCAwLS4xNS0uMzV6TTIgNVYzYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF6bTcgMTFhNCA0IDAgMSAxIDQtNCA0IDQgMCAwIDEtNCA0eiIvPgo8L3N2Zz4K", yr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij4KICA8cGF0aCBkPSJNODggMzJoODBhOCA4IDAgMCAwIDAtMTZIODhhOCA4IDAgMCAwIDAgMTZabTEyOCAxNkg0MGE4IDggMCAwIDAgMCAxNmg4djE0NGExNi4wMiAxNi4wMiAwIDAgMCAxNiAxNmgxMjhhMTYuMDIgMTYuMDIgMCAwIDAgMTYtMTZWNjRoOGE4IDggMCAwIDAgMC0xNloiLz4KPC9zdmc+Cg==";
const jr = ge.lazy(async () => {
  const { LiveAudioVisualizer: S } = await import("./react-audio-visualize.es-69216c73.js");
  return { default: S };
}), Cr = ({
  onRecordingComplete: S,
  onNotAllowedOrFound: b,
  recorderControls: z,
  audioTrackConstraints: E,
  downloadOnSavePress: D = !1,
  downloadFileExtension: C = "webm",
  showVisualizer: j = !1,
  mediaRecorderOptions: h,
  classes: i
}) => {
  const {
    startRecording: l,
    stopRecording: g,
    togglePauseResume: M,
    recordingBlob: m,
    isRecording: c,
    isPaused: L,
    recordingTime: O,
    mediaRecorder: _
  } = z ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  gr(
    E,
    b,
    h
  ), [A, v] = B(!1), V = (T = !0) => {
    v(T), g();
  }, p = (T) => {
    l();
    const W = T.target;
    W == null || W.focus();
  }, R = async (T) => {
    const k = (await import("./index-1c988149.js").then((P) => P.i)).createFFmpeg({ log: !1 });
    await k.load();
    const F = "input.webm", N = `output.${C}`;
    k.FS(
      "writeFile",
      F,
      new Uint8Array(await T.arrayBuffer())
    ), await k.run("-i", F, N);
    const K = k.FS("readFile", N);
    return new Blob([K.buffer], {
      type: `audio/${C}`
    });
  }, U = async (T) => {
    !crossOriginIsolated && C !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const W = crossOriginIsolated ? await R(T) : T, k = crossOriginIsolated ? C : "webm", F = URL.createObjectURL(W), N = document.createElement("a");
    N.style.display = "none", N.href = F, N.download = `audio.${k}`, document.body.appendChild(N), N.click(), N.remove();
  };
  return cr(() => {
    (A || z) && m != null && S != null && (S(m), D && U(m));
  }, [m]), /* @__PURE__ */ y.jsxs(
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
            "aria-label": c ? "Save recording" : "Start recording",
            title: c ? "Save recording" : "Start recording",
            onClick: c ? () => V() : p,
            children: /* @__PURE__ */ y.jsx(
              "img",
              {
                src: c ? wr : vr,
                alt: c ? "Save recording" : "Start recording",
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
              Math.floor(O / 60),
              ":",
              String(O % 60).padStart(2, "0")
            ]
          }
        ),
        j ? /* @__PURE__ */ y.jsx(
          "span",
          {
            hidden: !c,
            "aria-hidden": c ? "false" : "true",
            className: "audio-recorder-visualizer",
            children: _ && /* @__PURE__ */ y.jsx(lr, { fallback: /* @__PURE__ */ y.jsx(y.Fragment, {}), children: /* @__PURE__ */ y.jsx(
              jr,
              {
                mediaRecorder: _,
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
            "aria-label": L ? "Resume recording" : "Pause recording",
            title: L ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause",
            children: /* @__PURE__ */ y.jsx(
              "img",
              {
                src: L ? mr : Mr,
                alt: L ? "Resume recording" : "Pause recording",
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
            "aria-label": "Discard Recording",
            title: "Discard Recording",
            "data-testid": "ar_cancel",
            children: /* @__PURE__ */ y.jsx("img", { src: yr, width: 16, height: 16, alt: "Discard Recording" })
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
