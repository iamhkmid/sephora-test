import Oe from "react";
import ur from "../../IconContainer/index.js";
var K = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function sr() {
  if (Ce)
    return k;
  Ce = 1;
  var w = Oe, P = Symbol.for("react.element"), L = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, V = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, l, R) {
    var d, g = {}, m = null, A = null;
    R !== void 0 && (m = "" + R), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (A = l.ref);
    for (d in l)
      y.call(l, d) && !F.hasOwnProperty(d) && (g[d] = l[d]);
    if (b && b.defaultProps)
      for (d in l = b.defaultProps, l)
        g[d] === void 0 && (g[d] = l[d]);
    return { $$typeof: P, type: b, key: m, ref: A, props: g, _owner: V.current };
  }
  return k.Fragment = L, k.jsx = S, k.jsxs = S, k;
}
var D = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function fr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var w = Oe, P = Symbol.for("react.element"), L = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), X = Symbol.iterator, we = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[we];
      return typeof r == "function" ? r : null;
    }
    var C = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, je = !1, ke = !1, De = !1, Ve = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === F || Ve || e === V || e === R || e === d || De || e === A || xe || je || ke || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === S || e.$$typeof === b || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case L:
          return "Portal";
        case F:
          return "Profiler";
        case V:
          return "StrictMode";
        case R:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ee(r) + ".Consumer";
          case S:
            var t = e;
            return ee(t._context) + ".Provider";
          case l:
            return Ae(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : h(e.type) || "Memo";
          case m: {
            var i = e, u = i._payload, o = i._init;
            try {
              return h(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, x = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Me() {
      {
        if (x === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
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
        x++;
      }
    }
    function Ie() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, e, {
              value: re
            }),
            info: _({}, e, {
              value: te
            }),
            warn: _({}, e, {
              value: ne
            }),
            error: _({}, e, {
              value: ae
            }),
            group: _({}, e, {
              value: oe
            }),
            groupCollapsed: _({}, e, {
              value: ie
            }),
            groupEnd: _({}, e, {
              value: ue
            })
          });
        }
        x < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = C.ReactCurrentDispatcher, N;
    function M(e, r, t) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            N = n && n[1] || "";
          }
        return `
` + N + e;
      }
    }
    var Z = !1, I;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      I = new He();
    }
    function fe(e, r) {
      if (!e || Z)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Y.current, Y.current = null, Me();
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
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, f = v.length - 1; s >= 1 && f >= 0 && a[s] !== v[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== v[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== v[f]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, p), p;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Z = !1, Y.current = u, Ie(), Error.prepareStackTrace = i;
      }
      var O = e ? e.displayName || e.name : "", Re = O ? M(O) : "";
      return typeof e == "function" && I.set(e, Re), Re;
    }
    function $e(e, r, t) {
      return fe(e, !1);
    }
    function We(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, We(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case R:
          return M("Suspense");
        case d:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return $e(e.render);
          case g:
            return H(e.type, r, t);
          case m: {
            var n = e, i = n._payload, u = n._init;
            try {
              return H(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, le = {}, ce = C.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Le(e, r, t, n, i) {
      {
        var u = Function.call.bind($);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (W(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), W(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, W(i), c("Failed %s type: %s", t, a.message), W(null));
          }
      }
    }
    var Ye = Array.isArray;
    function U(e) {
      return Ye(e);
    }
    function Ne(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function de(e) {
      if (Ze(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(e)), ve(e);
    }
    var j = C.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge, B;
    B = {};
    function Be(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function qe(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && j.current && r && j.current.stateNode !== r) {
        var t = h(j.current.type);
        B[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h(j.current.type), e.ref), B[t] = !0);
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          pe || (pe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ke = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: P,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Xe(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (de(t), a = "" + t), qe(r) && (de(r.key), a = "" + r.key), Be(r) && (v = r.ref, Je(r, i));
        for (u in r)
          $.call(r, u) && !Ue.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ge(o, f), v && ze(o, f);
        }
        return Ke(e, a, v, i, n, j.current, o);
      }
    }
    var q = C.ReactCurrentOwner, he = C.ReactDebugCurrentFrame;
    function T(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function Ee() {
      {
        if (q.current) {
          var e = h(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function er(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== q.current && (n = " It was passed a child from " + h(e._owner.type) + "."), T(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), T(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (U(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && me(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              G(o.value) && me(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = h(r);
          Le(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = h(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            T(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), T(null);
            break;
          }
        }
        e.ref !== null && (T(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), T(null));
      }
    }
    function ye(e, r, t, n, i, u) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Qe(i);
          v ? a += v : a += Ee();
          var s;
          e === null ? s = "null" : U(e) ? s = "array" : e !== void 0 && e.$$typeof === P ? (s = "<" + (h(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Xe(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (U(p)) {
                for (var O = 0; O < p.length; O++)
                  _e(p[O], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(p, e);
        }
        return e === y ? tr(f) : rr(f), f;
      }
    }
    function nr(e, r, t) {
      return ye(e, r, t, !0);
    }
    function ar(e, r, t) {
      return ye(e, r, t, !1);
    }
    var or = ar, ir = nr;
    D.Fragment = y, D.jsx = or, D.jsxs = ir;
  }()), D;
}
process.env.NODE_ENV === "production" ? K.exports = sr() : K.exports = fr();
var z = K.exports;
const vr = (w) => /* @__PURE__ */ z.jsx(ur, { ...w, children: /* @__PURE__ */ z.jsx("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ z.jsx(
  "path",
  {
    d: "M20.5 16C20.5 16.2761 20.7239 16.5 21 16.5C21.2761 16.5 21.5 16.2761 21.5 16H20.5ZM2.5 16C2.5 16.2761 2.72386 16.5 3 16.5C3.27614 16.5 3.5 16.2761 3.5 16H2.5ZM1 16V15.5C0.723858 15.5 0.5 15.7239 0.5 16H1ZM23 16H23.5C23.5 15.7239 23.2761 15.5 23 15.5V16ZM7 5.5H17V4.5H7V5.5ZM20.5 9V16H21.5V9H20.5ZM3.5 16V9H2.5V16H3.5ZM17 5.5C17.9569 5.5 18.6244 5.50106 19.1279 5.56876C19.6171 5.63453 19.8762 5.75483 20.0607 5.93934L20.7678 5.23223C20.3665 4.83096 19.8612 4.65836 19.2612 4.57768C18.6755 4.49894 17.9287 4.5 17 4.5V5.5ZM21.5 9C21.5 8.07133 21.5011 7.32452 21.4223 6.73883C21.3416 6.13876 21.169 5.63351 20.7678 5.23223L20.0607 5.93934C20.2452 6.12385 20.3655 6.3829 20.4312 6.87208C20.4989 7.37565 20.5 8.04306 20.5 9H21.5ZM7 4.5C6.07133 4.5 5.32452 4.49894 4.73883 4.57768C4.13876 4.65836 3.63351 4.83096 3.23223 5.23223L3.93934 5.93934C4.12385 5.75483 4.3829 5.63453 4.87208 5.56876C5.37565 5.50106 6.04306 5.5 7 5.5V4.5ZM3.5 9C3.5 8.04306 3.50106 7.37565 3.56876 6.87208C3.63453 6.3829 3.75483 6.12385 3.93934 5.93934L3.23223 5.23223C2.83096 5.63351 2.65836 6.13876 2.57768 6.73883C2.49894 7.32452 2.5 8.07133 2.5 9H3.5ZM1 16.5H23V15.5H1V16.5ZM22.5 16V17H23.5V16H22.5ZM22 17.5H2V18.5H22V17.5ZM1.5 17V16H0.5V17H1.5ZM2 17.5C1.72386 17.5 1.5 17.2761 1.5 17H0.5C0.5 17.8284 1.17157 18.5 2 18.5V17.5ZM22.5 17C22.5 17.2761 22.2761 17.5 22 17.5V18.5C22.8284 18.5 23.5 17.8284 23.5 17H22.5Z",
    fill: "currentColor"
  }
) }) });
export {
  vr as default
};
