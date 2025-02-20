import Pe, { useState as B, useRef as Fe, useEffect as V, useCallback as fr, forwardRef as pr, useImperativeHandle as yr } from "react";
var ie = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function dr() {
  if (xe)
    return A;
  xe = 1;
  var p = Pe, y = Symbol.for("react.element"), O = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, g = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(i, s, d) {
    var a, o = {}, h = null, j = null;
    d !== void 0 && (h = "" + d), s.key !== void 0 && (h = "" + s.key), s.ref !== void 0 && (j = s.ref);
    for (a in s)
      b.call(s, a) && !_.hasOwnProperty(a) && (o[a] = s[a]);
    if (i && i.defaultProps)
      for (a in s = i.defaultProps, s)
        o[a] === void 0 && (o[a] = s[a]);
    return { $$typeof: y, type: i, key: h, ref: j, props: o, _owner: g.current };
  }
  return A.Fragment = O, A.jsx = S, A.jsxs = S, A;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function vr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Pe, y = Symbol.for("react.element"), O = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.iterator, R = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[R];
      return typeof r == "function" ? r : null;
    }
    var m = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        E("error", e, t);
      }
    }
    function E(e, r, t) {
      {
        var n = m.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var v = t.map(function(u) {
          return String(u);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var D = !1, N = !1, z = !1, Te = !1, Le = !1, ce;
    ce = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === _ || Le || e === g || e === d || e === a || Te || e === j || D || N || z || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === o || e.$$typeof === S || e.$$typeof === i || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case O:
          return "Portal";
        case _:
          return "Profiler";
        case g:
          return "StrictMode";
        case d:
          return "Suspense";
        case a:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return se(r) + ".Consumer";
          case S:
            var t = e;
            return se(t._context) + ".Provider";
          case s:
            return ze(e, e.render, "ForwardRef");
          case o:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case h: {
            var f = e, v = f._payload, u = f._init;
            try {
              return F(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, U = 0, le, ue, fe, pe, ye, de, ve;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ue() {
      {
        if (U === 0) {
          le = console.log, ue = console.info, fe = console.warn, pe = console.error, ye = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        U++;
      }
    }
    function Me() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: le
            }),
            info: T({}, e, {
              value: ue
            }),
            warn: T({}, e, {
              value: fe
            }),
            error: T({}, e, {
              value: pe
            }),
            group: T({}, e, {
              value: ye
            }),
            groupCollapsed: T({}, e, {
              value: de
            }),
            groupEnd: T({}, e, {
              value: ve
            })
          });
        }
        U < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = m.ReactCurrentDispatcher, Q;
    function q(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var Z = !1, Y;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ae();
    }
    function ge(e, r) {
      if (!e || Z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = K.current, K.current = null, Ue();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (I) {
              n = I;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (I) {
              n = I;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            n = I;
          }
          e();
        }
      } catch (I) {
        if (I && n && typeof I.stack == "string") {
          for (var c = I.stack.split(`
`), C = n.stack.split(`
`), w = c.length - 1, k = C.length - 1; w >= 1 && k >= 0 && c[w] !== C[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (c[w] !== C[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || c[w] !== C[k]) {
                    var x = `
` + c[w].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, x), x;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Z = !1, K.current = v, Me(), Error.prepareStackTrace = f;
      }
      var W = e ? e.displayName || e.name : "", $e = W ? q(W) : "";
      return typeof e == "function" && Y.set(e, $e), $e;
    }
    function Be(e, r, t) {
      return ge(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ve(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case d:
          return q("Suspense");
        case a:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Be(e.render);
          case o:
            return H(e.type, r, t);
          case h: {
            var n = e, f = n._payload, v = n._init;
            try {
              return H(v(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, he = {}, be = m.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, f) {
      {
        var v = Function.call.bind(J);
        for (var u in e)
          if (v(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              c = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              c = w;
            }
            c && !(c instanceof Error) && (X(f), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof c), X(null)), c instanceof Error && !(c.message in he) && (he[c.message] = !0, X(f), l("Failed %s type: %s", t, c.message), X(null));
          }
      }
    }
    var Ye = Array.isArray;
    function ee(e) {
      return Ye(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function we(e) {
      if (Je(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), _e(e);
    }
    var M = m.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, ke, re;
    re = {};
    function Ge(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = F(M.current.type);
        re[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(M.current.type), e.ref), re[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Se || (Se = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ke || (ke = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, f, v, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, r, t, n, f) {
      {
        var v, u = {}, c = null, C = null;
        t !== void 0 && (we(t), c = "" + t), Ke(r) && (we(r.key), c = "" + r.key), Ge(r) && (C = r.ref, Qe(r, f));
        for (v in r)
          J.call(r, v) && !Xe.hasOwnProperty(v) && (u[v] = r[v]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (v in w)
            u[v] === void 0 && (u[v] = w[v]);
        }
        if (c || C) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Ze(u, k), C && er(u, k);
        }
        return rr(e, c, C, f, n, M.current, u);
      }
    }
    var te = m.ReactCurrentOwner, Re = m.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Oe() {
      {
        if (te.current) {
          var e = F(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var je = {};
    function or(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + F(e._owner.type) + "."), L(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            oe(n) && Ee(n, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = P(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), u; !(u = v.next()).done; )
              oe(u.value) && Ee(u.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === o))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = F(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var f = F(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function De(e, r, t, n, f, v) {
      {
        var u = We(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = nr(f);
          C ? c += C : c += Oe();
          var w;
          e === null ? w = "null" : ee(e) ? w = "array" : e !== void 0 && e.$$typeof === y ? (w = "<" + (F(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, c);
        }
        var k = tr(e, r, t, f, v);
        if (k == null)
          return k;
        if (u) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (ee(x)) {
                for (var W = 0; W < x.length; W++)
                  Ce(x[W], e);
                Object.freeze && Object.freeze(x);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(x, e);
        }
        return e === b ? ir(k) : ar(k), k;
      }
    }
    function cr(e, r, t) {
      return De(e, r, t, !0);
    }
    function sr(e, r, t) {
      return De(e, r, t, !1);
    }
    var lr = sr, ur = cr;
    G.Fragment = b, G.jsx = lr, G.jsxs = ur;
  }()), G;
}
process.env.NODE_ENV === "production" ? ie.exports = dr() : ie.exports = vr();
var Ie = ie.exports;
const mr = (p, y, O, b) => {
  let g = y / (O + b), _ = Math.floor(p.length / g);
  g > p.length && (g = p.length, _ = 1);
  const S = [];
  for (let i = 0; i < g; i++) {
    let s = 0;
    for (let d = 0; d < _ && i * _ + d < p.length; d++)
      s += p[i * _ + d];
    S.push(s / _);
  }
  return S;
}, gr = (p, y, O, b, g, _) => {
  const S = y.height / 2, i = y.getContext("2d");
  i && (i.clearRect(0, 0, y.width, y.height), g !== "transparent" && (i.fillStyle = g, i.fillRect(0, 0, y.width, y.height)), p.forEach((s, d) => {
    i.fillStyle = _;
    const a = d * (O + b), o = S - s / 2, h = O, j = s || 1;
    i.beginPath(), i.roundRect ? (i.roundRect(a, o, h, j, 50), i.fill()) : i.fillRect(a, o, h, j);
  }));
}, wr = ({
  mediaRecorder: p,
  width: y = "100%",
  height: O = "100%",
  barWidth: b = 2,
  gap: g = 1,
  backgroundColor: _ = "transparent",
  barColor: S = "rgb(160, 198, 255)",
  fftSize: i = 1024,
  maxDecibels: s = -10,
  minDecibels: d = -90,
  smoothingTimeConstant: a = 0.4
}) => {
  const [o, h] = B(), [j, $] = B(), [R, P] = B(), m = Fe(null);
  V(() => {
    if (!p.stream)
      return;
    const D = new AudioContext(), N = D.createAnalyser();
    P(N), N.fftSize = i, N.minDecibels = d, N.maxDecibels = s, N.smoothingTimeConstant = a;
    const z = D.createMediaStreamSource(p.stream);
    return z.connect(N), h(D), $(z), () => {
      z.disconnect(), N.disconnect(), D.state !== "closed" && D.close();
    };
  }, [p.stream]), V(() => {
    R && p.state === "recording" && l();
  }, [R, p.state]);
  const l = fr(() => {
    if (!R || !o)
      return;
    const D = new Uint8Array(R == null ? void 0 : R.frequencyBinCount);
    p.state === "recording" ? (R == null || R.getByteFrequencyData(D), E(D), requestAnimationFrame(l)) : p.state === "paused" ? E(D) : p.state === "inactive" && o.state !== "closed" && o.close();
  }, [R, o == null ? void 0 : o.state]);
  V(() => () => {
    o && o.state !== "closed" && o.close(), j == null || j.disconnect(), R == null || R.disconnect();
  }, []);
  const E = (D) => {
    if (!m.current)
      return;
    const N = mr(
      D,
      m.current.width,
      b,
      g
    );
    gr(
      N,
      m.current,
      b,
      g,
      _,
      S
    );
  };
  return /* @__PURE__ */ Ie.jsx(
    "canvas",
    {
      ref: m,
      width: y,
      height: O,
      style: {
        aspectRatio: "unset"
      }
    }
  );
}, hr = (p, y, O, b, g) => {
  const _ = p.getChannelData(0), S = O / (b + g), i = Math.floor(_.length / S), s = y / 2;
  let d = [], a = 0;
  for (let o = 0; o < S; o++) {
    const h = [];
    let j = 0;
    const $ = [];
    let R = 0;
    for (let l = 0; l < i && o * i + l < p.length; l++) {
      const E = _[o * i + l];
      E <= 0 && (h.push(E), j++), E > 0 && ($.push(E), R++);
    }
    const P = h.reduce((l, E) => l + E, 0) / j, m = { max: $.reduce((l, E) => l + E, 0) / R, min: P };
    m.max > a && (a = m.max), Math.abs(m.min) > a && (a = Math.abs(m.min)), d.push(m);
  }
  if (s * 0.8 > a * s) {
    const o = s * 0.8 / a;
    d = d.map((h) => ({
      max: h.max * o,
      min: h.min * o
    }));
  }
  return d;
}, ae = (p, y, O, b, g, _, S, i = 0, s = 1) => {
  const d = y.height / 2, a = y.getContext("2d");
  if (!a)
    return;
  a.clearRect(0, 0, y.width, y.height), g !== "transparent" && (a.fillStyle = g, a.fillRect(0, 0, y.width, y.height));
  const o = (i || 0) / s;
  p.forEach((h, j) => {
    const $ = j / p.length, R = o > $;
    a.fillStyle = R && S ? S : _;
    const P = j * (O + b), m = d + h.min, l = O, E = d + h.max - m;
    a.beginPath(), a.roundRect ? (a.roundRect(P, m, l, E, 50), a.fill()) : a.fillRect(P, m, l, E);
  });
}, br = pr(
  ({
    blob: p,
    width: y,
    height: O,
    barWidth: b = 2,
    gap: g = 1,
    currentTime: _,
    style: S,
    backgroundColor: i = "transparent",
    barColor: s = "rgb(184, 184, 184)",
    barPlayedColor: d = "rgb(160, 198, 255)"
  }, a) => {
    const o = Fe(null), [h, j] = B([]), [$, R] = B(0);
    return yr(
      a,
      () => o.current,
      []
    ), V(() => {
      (async () => {
        if (!o.current)
          return;
        if (!p) {
          const m = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ae(
            m,
            o.current,
            b,
            g,
            i,
            s,
            d
          );
          return;
        }
        const P = await p.arrayBuffer();
        await new AudioContext().decodeAudioData(P, (m) => {
          if (!o.current)
            return;
          R(m.duration);
          const l = hr(
            m,
            O,
            y,
            b,
            g
          );
          j(l), ae(
            l,
            o.current,
            b,
            g,
            i,
            s,
            d
          );
        });
      })();
    }, [p, o.current]), V(() => {
      o.current && ae(
        h,
        o.current,
        b,
        g,
        i,
        s,
        d,
        _,
        $
      );
    }, [_, $]), /* @__PURE__ */ Ie.jsx(
      "canvas",
      {
        ref: o,
        width: y,
        height: O,
        style: {
          ...S
        }
      }
    );
  }
);
br.displayName = "AudioVisualizer";
export {
  br as AudioVisualizer,
  wr as LiveAudioVisualizer
};
