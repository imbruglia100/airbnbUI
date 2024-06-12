/** @format */

function jh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function ad(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ud = { exports: {} },
  Lo = {},
  sd = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pl = Symbol.for("react.element"),
  kh = Symbol.for("react.portal"),
  Nh = Symbol.for("react.fragment"),
  Rh = Symbol.for("react.strict_mode"),
  Ph = Symbol.for("react.profiler"),
  _h = Symbol.for("react.provider"),
  Lh = Symbol.for("react.context"),
  Mh = Symbol.for("react.forward_ref"),
  Oh = Symbol.for("react.suspense"),
  Th = Symbol.for("react.memo"),
  Dh = Symbol.for("react.lazy"),
  js = Symbol.iterator;
function zh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (js && e[js]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var cd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  dd = Object.assign,
  fd = {};
function mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = fd),
    (this.updater = n || cd);
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pd() {}
pd.prototype = mr.prototype;
function tu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = fd),
    (this.updater = n || cd);
}
var nu = (tu.prototype = new pd());
nu.constructor = tu;
dd(nu, mr.prototype);
nu.isPureReactComponent = !0;
var ks = Array.isArray,
  hd = Object.prototype.hasOwnProperty,
  ru = { current: null },
  md = { key: !0, ref: !0, __self: !0, __source: !0 };
function vd(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      hd.call(t, r) && !md.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: pl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ru.current,
  };
}
function Ih(e, t) {
  return {
    $$typeof: pl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pl;
}
function $h(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ns = /\/+/g;
function ki(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $h("" + e.key)
    : t.toString(36);
}
function Bl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pl:
          case kh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ki(i, 0) : r),
      ks(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ns, "$&/") + "/"),
          Bl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (lu(l) &&
            (l = Ih(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ns, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ks(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + ki(o, a);
      i += Bl(o, t, n, u, l);
    }
  else if (((u = zh(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + ki(o, a++)), (i += Bl(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Cl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Bl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Uh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  Wl = { transition: null },
  Fh = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Wl,
    ReactCurrentOwner: ru,
  };
V.Children = {
  map: Cl,
  forEach: function (e, t, n) {
    Cl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Cl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Cl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!lu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = mr;
V.Fragment = Nh;
V.Profiler = Ph;
V.PureComponent = tu;
V.StrictMode = Rh;
V.Suspense = Oh;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fh;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = dd({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ru.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      hd.call(t, u) &&
        !md.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: pl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _h, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = vd;
V.createFactory = function (e) {
  var t = vd.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Mh, render: e };
};
V.isValidElement = lu;
V.lazy = function (e) {
  return { $$typeof: Dh, _payload: { _status: -1, _result: e }, _init: Uh };
};
V.memo = function (e, t) {
  return { $$typeof: Th, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Wl.transition;
  Wl.transition = {};
  try {
    e();
  } finally {
    Wl.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Ie.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
V.useId = function () {
  return Ie.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Ie.current.useRef(e);
};
V.useState = function (e) {
  return Ie.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Ie.current.useTransition();
};
V.version = "18.2.0";
sd.exports = V;
var C = sd.exports;
const Mt = ad(C),
  Ah = jh({ __proto__: null, default: Mt }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bh = C,
  Wh = Symbol.for("react.element"),
  Vh = Symbol.for("react.fragment"),
  Hh = Object.prototype.hasOwnProperty,
  Qh = Bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kh = { key: !0, ref: !0, __self: !0, __source: !0 };
function yd(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Hh.call(t, r) && !Kh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Wh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Qh.current,
  };
}
Lo.Fragment = Vh;
Lo.jsx = yd;
Lo.jsxs = yd;
ud.exports = Lo;
var c = ud.exports,
  ra = {},
  gd = { exports: {} },
  Ge = {},
  wd = { exports: {} },
  xd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, z) {
    var A = L.length;
    L.push(z);
    e: for (; 0 < A; ) {
      var le = (A - 1) >>> 1,
        he = L[le];
      if (0 < l(he, z)) (L[le] = z), (L[A] = he), (A = le);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var z = L[0],
      A = L.pop();
    if (A !== z) {
      L[0] = A;
      e: for (var le = 0, he = L.length, Tn = he >>> 1; le < Tn; ) {
        var b = 2 * (le + 1) - 1,
          Ct = L[b],
          yt = b + 1,
          Dn = L[yt];
        if (0 > l(Ct, A))
          yt < he && 0 > l(Dn, Ct)
            ? ((L[le] = Dn), (L[yt] = A), (le = yt))
            : ((L[le] = Ct), (L[b] = A), (le = b));
        else if (yt < he && 0 > l(Dn, A)) (L[le] = Dn), (L[yt] = A), (le = yt);
        else break e;
      }
    }
    return z;
  }
  function l(L, z) {
    var A = L.sortIndex - z.sortIndex;
    return A !== 0 ? A : L.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    h = 1,
    m = null,
    d = 3,
    w = !1,
    x = !1,
    g = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(L) {
    for (var z = n(s); z !== null; ) {
      if (z.callback === null) r(s);
      else if (z.startTime <= L)
        r(s), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(s);
    }
  }
  function v(L) {
    if (((g = !1), y(L), !x))
      if (n(u) !== null) (x = !0), Ve(k);
      else {
        var z = n(s);
        z !== null && vt(v, z.startTime - L);
      }
  }
  function k(L, z) {
    (x = !1), g && ((g = !1), p(T), (T = -1)), (w = !0);
    var A = d;
    try {
      for (
        y(z), m = n(u);
        m !== null && (!(m.expirationTime > z) || (L && !xe()));

      ) {
        var le = m.callback;
        if (typeof le == "function") {
          (m.callback = null), (d = m.priorityLevel);
          var he = le(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof he == "function" ? (m.callback = he) : m === n(u) && r(u),
            y(z);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var Tn = !0;
      else {
        var b = n(s);
        b !== null && vt(v, b.startTime - z), (Tn = !1);
      }
      return Tn;
    } finally {
      (m = null), (d = A), (w = !1);
    }
  }
  var _ = !1,
    P = null,
    T = -1,
    H = 5,
    $ = -1;
  function xe() {
    return !(e.unstable_now() - $ < H);
  }
  function q() {
    if (P !== null) {
      var L = e.unstable_now();
      $ = L;
      var z = !0;
      try {
        z = P(!0, L);
      } finally {
        z ? mt() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var mt;
  if (typeof f == "function")
    mt = function () {
      f(q);
    };
  else if (typeof MessageChannel < "u") {
    var Bt = new MessageChannel(),
      Wt = Bt.port2;
    (Bt.port1.onmessage = q),
      (mt = function () {
        Wt.postMessage(null);
      });
  } else
    mt = function () {
      N(q, 0);
    };
  function Ve(L) {
    (P = L), _ || ((_ = !0), mt());
  }
  function vt(L, z) {
    T = N(function () {
      L(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), Ve(k));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = d;
      }
      var A = d;
      d = z;
      try {
        return L();
      } finally {
        d = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, z) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var A = d;
      d = L;
      try {
        return z();
      } finally {
        d = A;
      }
    }),
    (e.unstable_scheduleCallback = function (L, z, A) {
      var le = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? le + A : le))
          : (A = le),
        L)
      ) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return (
        (he = A + he),
        (L = {
          id: h++,
          callback: z,
          priorityLevel: L,
          startTime: A,
          expirationTime: he,
          sortIndex: -1,
        }),
        A > le
          ? ((L.sortIndex = A),
            t(s, L),
            n(u) === null &&
              L === n(s) &&
              (g ? (p(T), (T = -1)) : (g = !0), vt(v, A - le)))
          : ((L.sortIndex = he), t(u, L), x || w || ((x = !0), Ve(k))),
        L
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (L) {
      var z = d;
      return function () {
        var A = d;
        d = z;
        try {
          return L.apply(this, arguments);
        } finally {
          d = A;
        }
      };
    });
})(xd);
wd.exports = xd;
var Yh = wd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd = C,
  Ye = Yh;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ed = new Set(),
  Gr = {};
function Ln(e, t) {
  lr(e, t), lr(e + "Capture", t);
}
function lr(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++) Ed.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  la = Object.prototype.hasOwnProperty,
  Gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rs = {},
  Ps = {};
function Xh(e) {
  return la.call(Ps, e)
    ? !0
    : la.call(Rs, e)
    ? !1
    : Gh.test(e)
    ? (Ps[e] = !0)
    : ((Rs[e] = !0), !1);
}
function Jh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zh(e, t, n, r) {
  if (t === null || typeof t > "u" || Jh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ou = /[\-:]([a-z])/g;
function iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, iu);
    Ne[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, iu);
    Ne[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ou, iu);
  Ne[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function au(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Zh(t, n, l, r) && (n = null),
    r || l === null
      ? Xh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jl = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  Un = Symbol.for("react.fragment"),
  uu = Symbol.for("react.strict_mode"),
  oa = Symbol.for("react.profiler"),
  Cd = Symbol.for("react.provider"),
  jd = Symbol.for("react.context"),
  su = Symbol.for("react.forward_ref"),
  ia = Symbol.for("react.suspense"),
  aa = Symbol.for("react.suspense_list"),
  cu = Symbol.for("react.memo"),
  Kt = Symbol.for("react.lazy"),
  kd = Symbol.for("react.offscreen"),
  _s = Symbol.iterator;
function Er(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_s && e[_s]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  Ni;
function Dr(e) {
  if (Ni === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ni = (t && t[1]) || "";
    }
  return (
    `
` +
    Ni +
    e
  );
}
var Ri = !1;
function Pi(e, t) {
  if (!e || Ri) return "";
  Ri = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ri = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function qh(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Pi(e.type, !1)), e;
    case 11:
      return (e = Pi(e.type.render, !1)), e;
    case 1:
      return (e = Pi(e.type, !0)), e;
    default:
      return "";
  }
}
function ua(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case $n:
      return "Portal";
    case oa:
      return "Profiler";
    case uu:
      return "StrictMode";
    case ia:
      return "Suspense";
    case aa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jd:
        return (e.displayName || "Context") + ".Consumer";
      case Cd:
        return (e._context.displayName || "Context") + ".Provider";
      case su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case cu:
        return (
          (t = e.displayName || null), t !== null ? t : ua(e.type) || "Memo"
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return ua(e(t));
        } catch {}
    }
  return null;
}
function bh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ua(t);
    case 8:
      return t === uu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function an(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Nd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function em(e) {
  var t = Nd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function kl(e) {
  e._valueTracker || (e._valueTracker = em(e));
}
function Rd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Nd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sa(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ls(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = an(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Pd(e, t) {
  (t = t.checked), t != null && au(e, "checked", t, !1);
}
function ca(e, t) {
  Pd(e, t);
  var n = an(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? da(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && da(e, t.type, an(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ms(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function da(e, t, n) {
  (t !== "number" || bl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function Zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function fa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Os(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: an(n) };
}
function _d(e, t) {
  var n = an(t.value),
    r = an(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ld(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ld(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Nl,
  Md = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Nl = Nl || document.createElement("div"),
          Nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Nl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  tm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function Od(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
    ? ("" + t).trim()
    : t + "px";
}
function Td(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Od(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var nm = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ha(e, t) {
  if (t) {
    if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ma(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var va = null;
function du(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ya = null,
  qn = null,
  bn = null;
function Ds(e) {
  if ((e = vl(e))) {
    if (typeof ya != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = zo(t)), ya(e.stateNode, e.type, t));
  }
}
function Dd(e) {
  qn ? (bn ? bn.push(e) : (bn = [e])) : (qn = e);
}
function zd() {
  if (qn) {
    var e = qn,
      t = bn;
    if (((bn = qn = null), Ds(e), t)) for (e = 0; e < t.length; e++) Ds(t[e]);
  }
}
function Id(e, t) {
  return e(t);
}
function $d() {}
var _i = !1;
function Ud(e, t, n) {
  if (_i) return e(t, n);
  _i = !0;
  try {
    return Id(e, t, n);
  } finally {
    (_i = !1), (qn !== null || bn !== null) && ($d(), zd());
  }
}
function Jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var ga = !1;
if (Dt)
  try {
    var Cr = {};
    Object.defineProperty(Cr, "passive", {
      get: function () {
        ga = !0;
      },
    }),
      window.addEventListener("test", Cr, Cr),
      window.removeEventListener("test", Cr, Cr);
  } catch {
    ga = !1;
  }
function rm(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (h) {
    this.onError(h);
  }
}
var Fr = !1,
  eo = null,
  to = !1,
  wa = null,
  lm = {
    onError: function (e) {
      (Fr = !0), (eo = e);
    },
  };
function om(e, t, n, r, l, o, i, a, u) {
  (Fr = !1), (eo = null), rm.apply(lm, arguments);
}
function im(e, t, n, r, l, o, i, a, u) {
  if ((om.apply(this, arguments), Fr)) {
    if (Fr) {
      var s = eo;
      (Fr = !1), (eo = null);
    } else throw Error(R(198));
    to || ((to = !0), (wa = s));
  }
}
function Mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zs(e) {
  if (Mn(e) !== e) throw Error(R(188));
}
function am(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return zs(l), e;
        if (o === r) return zs(l), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Ad(e) {
  return (e = am(e)), e !== null ? Bd(e) : null;
}
function Bd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wd = Ye.unstable_scheduleCallback,
  Is = Ye.unstable_cancelCallback,
  um = Ye.unstable_shouldYield,
  sm = Ye.unstable_requestPaint,
  pe = Ye.unstable_now,
  cm = Ye.unstable_getCurrentPriorityLevel,
  fu = Ye.unstable_ImmediatePriority,
  Vd = Ye.unstable_UserBlockingPriority,
  no = Ye.unstable_NormalPriority,
  dm = Ye.unstable_LowPriority,
  Hd = Ye.unstable_IdlePriority,
  Mo = null,
  St = null;
function fm(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : mm,
  pm = Math.log,
  hm = Math.LN2;
function mm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pm(e) / hm) | 0)) | 0;
}
var Rl = 64,
  Pl = 4194304;
function Ir(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ro(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Ir(a)) : ((o &= i), o !== 0 && (r = Ir(o)));
  } else (i = n & ~l), i !== 0 ? (r = Ir(i)) : o !== 0 && (r = Ir(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ft(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function vm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ym(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ft(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = vm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function xa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qd() {
  var e = Rl;
  return (Rl <<= 1), !(Rl & 4194240) && (Rl = 64), e;
}
function Li(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ft(t)),
    (e[t] = n);
}
function gm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ft(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function pu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function Kd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yd,
  hu,
  Gd,
  Xd,
  Jd,
  Sa = !1,
  _l = [],
  qt = null,
  bt = null,
  en = null,
  Zr = new Map(),
  qr = new Map(),
  Gt = [],
  wm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $s(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      Zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qr.delete(t.pointerId);
  }
}
function jr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = vl(t)), t !== null && hu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function xm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (qt = jr(qt, e, t, n, r, l)), !0;
    case "dragenter":
      return (bt = jr(bt, e, t, n, r, l)), !0;
    case "mouseover":
      return (en = jr(en, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Zr.set(o, jr(Zr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), qr.set(o, jr(qr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Zd(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Fd(n)), t !== null)) {
          (e.blockedOn = t),
            Jd(e.priority, function () {
              Gd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (va = r), n.target.dispatchEvent(r), (va = null);
    } else return (t = vl(n)), t !== null && hu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Us(e, t, n) {
  Vl(e) && n.delete(t);
}
function Sm() {
  (Sa = !1),
    qt !== null && Vl(qt) && (qt = null),
    bt !== null && Vl(bt) && (bt = null),
    en !== null && Vl(en) && (en = null),
    Zr.forEach(Us),
    qr.forEach(Us);
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sa ||
      ((Sa = !0),
      Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Sm)));
}
function br(e) {
  function t(l) {
    return kr(l, e);
  }
  if (0 < _l.length) {
    kr(_l[0], e);
    for (var n = 1; n < _l.length; n++) {
      var r = _l[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qt !== null && kr(qt, e),
      bt !== null && kr(bt, e),
      en !== null && kr(en, e),
      Zr.forEach(t),
      qr.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    (r = Gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); )
    Zd(n), n.blockedOn === null && Gt.shift();
}
var er = Ut.ReactCurrentBatchConfig,
  lo = !0;
function Em(e, t, n, r) {
  var l = Y,
    o = er.transition;
  er.transition = null;
  try {
    (Y = 1), mu(e, t, n, r);
  } finally {
    (Y = l), (er.transition = o);
  }
}
function Cm(e, t, n, r) {
  var l = Y,
    o = er.transition;
  er.transition = null;
  try {
    (Y = 4), mu(e, t, n, r);
  } finally {
    (Y = l), (er.transition = o);
  }
}
function mu(e, t, n, r) {
  if (lo) {
    var l = Ea(e, t, n, r);
    if (l === null) Ai(e, t, r, oo, n), $s(e, r);
    else if (xm(l, e, t, n, r)) r.stopPropagation();
    else if (($s(e, r), t & 4 && -1 < wm.indexOf(e))) {
      for (; l !== null; ) {
        var o = vl(l);
        if (
          (o !== null && Yd(o),
          (o = Ea(e, t, n, r)),
          o === null && Ai(e, t, r, oo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ai(e, t, r, null, n);
  }
}
var oo = null;
function Ea(e, t, n, r) {
  if (((oo = null), (e = du(r)), (e = gn(e)), e !== null))
    if (((t = Mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Fd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (oo = e), null;
}
function qd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cm()) {
        case fu:
          return 1;
        case Vd:
          return 4;
        case no:
        case dm:
          return 16;
        case Hd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  vu = null,
  Hl = null;
function bd() {
  if (Hl) return Hl;
  var e,
    t = vu,
    n = t.length,
    r,
    l = "value" in Jt ? Jt.value : Jt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Hl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ql(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ll() {
  return !0;
}
function Fs() {
  return !1;
}
function Xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ll
        : Fs),
      (this.isPropagationStopped = Fs),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ll));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ll));
      },
      persist: function () {},
      isPersistent: Ll,
    }),
    t
  );
}
var vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yu = Xe(vr),
  ml = se({}, vr, { view: 0, detail: 0 }),
  jm = Xe(ml),
  Mi,
  Oi,
  Nr,
  Oo = se({}, ml, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((Mi = e.screenX - Nr.screenX), (Oi = e.screenY - Nr.screenY))
              : (Oi = Mi = 0),
            (Nr = e)),
          Mi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Oi;
    },
  }),
  As = Xe(Oo),
  km = se({}, Oo, { dataTransfer: 0 }),
  Nm = Xe(km),
  Rm = se({}, ml, { relatedTarget: 0 }),
  Ti = Xe(Rm),
  Pm = se({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _m = Xe(Pm),
  Lm = se({}, vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Mm = Xe(Lm),
  Om = se({}, vr, { data: 0 }),
  Bs = Xe(Om),
  Tm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Dm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Im(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zm[e]) ? !!t[e] : !1;
}
function gu() {
  return Im;
}
var $m = se({}, ml, {
    key: function (e) {
      if (e.key) {
        var t = Tm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ql(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Dm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function (e) {
      return e.type === "keypress" ? Ql(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ql(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Um = Xe($m),
  Fm = se({}, Oo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ws = Xe(Fm),
  Am = se({}, ml, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu,
  }),
  Bm = Xe(Am),
  Wm = se({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vm = Xe(Wm),
  Hm = se({}, Oo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Qm = Xe(Hm),
  Km = [9, 13, 27, 32],
  wu = Dt && "CompositionEvent" in window,
  Ar = null;
Dt && "documentMode" in document && (Ar = document.documentMode);
var Ym = Dt && "TextEvent" in window && !Ar,
  ef = Dt && (!wu || (Ar && 8 < Ar && 11 >= Ar)),
  Vs = String.fromCharCode(32),
  Hs = !1;
function tf(e, t) {
  switch (e) {
    case "keyup":
      return Km.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function nf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Gm(e, t) {
  switch (e) {
    case "compositionend":
      return nf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hs = !0), Vs);
    case "textInput":
      return (e = t.data), e === Vs && Hs ? null : e;
    default:
      return null;
  }
}
function Xm(e, t) {
  if (Fn)
    return e === "compositionend" || (!wu && tf(e, t))
      ? ((e = bd()), (Hl = vu = Jt = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ef && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jm[e.type] : t === "textarea";
}
function rf(e, t, n, r) {
  Dd(r),
    (t = io(t, "onChange")),
    0 < t.length &&
      ((n = new yu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Br = null,
  el = null;
function Zm(e) {
  mf(e, 0);
}
function To(e) {
  var t = Wn(e);
  if (Rd(t)) return e;
}
function qm(e, t) {
  if (e === "change") return t;
}
var lf = !1;
if (Dt) {
  var Di;
  if (Dt) {
    var zi = "oninput" in document;
    if (!zi) {
      var Ks = document.createElement("div");
      Ks.setAttribute("oninput", "return;"),
        (zi = typeof Ks.oninput == "function");
    }
    Di = zi;
  } else Di = !1;
  lf = Di && (!document.documentMode || 9 < document.documentMode);
}
function Ys() {
  Br && (Br.detachEvent("onpropertychange", of), (el = Br = null));
}
function of(e) {
  if (e.propertyName === "value" && To(el)) {
    var t = [];
    rf(t, el, e, du(e)), Ud(Zm, t);
  }
}
function bm(e, t, n) {
  e === "focusin"
    ? (Ys(), (Br = t), (el = n), Br.attachEvent("onpropertychange", of))
    : e === "focusout" && Ys();
}
function ev(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return To(el);
}
function tv(e, t) {
  if (e === "click") return To(t);
}
function nv(e, t) {
  if (e === "input" || e === "change") return To(t);
}
function rv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : rv;
function tl(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!la.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function Gs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xs(e, t) {
  var n = Gs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gs(n);
  }
}
function af(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? af(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function uf() {
  for (var e = window, t = bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bl(e.document);
  }
  return t;
}
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lv(e) {
  var t = uf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    af(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && xu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Xs(n, o));
        var i = Xs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ov = Dt && "documentMode" in document && 11 >= document.documentMode,
  An = null,
  Ca = null,
  Wr = null,
  ja = !1;
function Js(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ja ||
    An == null ||
    An !== bl(r) ||
    ((r = An),
    "selectionStart" in r && xu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wr && tl(Wr, r)) ||
      ((Wr = r),
      (r = io(Ca, "onSelect")),
      0 < r.length &&
        ((t = new yu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = An))));
}
function Ml(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bn = {
    animationend: Ml("Animation", "AnimationEnd"),
    animationiteration: Ml("Animation", "AnimationIteration"),
    animationstart: Ml("Animation", "AnimationStart"),
    transitionend: Ml("Transition", "TransitionEnd"),
  },
  Ii = {},
  sf = {};
Dt &&
  ((sf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation,
    delete Bn.animationiteration.animation,
    delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function Do(e) {
  if (Ii[e]) return Ii[e];
  if (!Bn[e]) return e;
  var t = Bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sf) return (Ii[e] = t[n]);
  return e;
}
var cf = Do("animationend"),
  df = Do("animationiteration"),
  ff = Do("animationstart"),
  pf = Do("transitionend"),
  hf = new Map(),
  Zs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cn(e, t) {
  hf.set(e, t), Ln(t, [e]);
}
for (var $i = 0; $i < Zs.length; $i++) {
  var Ui = Zs[$i],
    iv = Ui.toLowerCase(),
    av = Ui[0].toUpperCase() + Ui.slice(1);
  cn(iv, "on" + av);
}
cn(cf, "onAnimationEnd");
cn(df, "onAnimationIteration");
cn(ff, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(pf, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $r =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  uv = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function qs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), im(r, t, void 0, e), (e.currentTarget = null);
}
function mf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          qs(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          qs(l, a, s), (o = u);
        }
    }
  }
  if (to) throw ((e = wa), (to = !1), (wa = null), e);
}
function te(e, t) {
  var n = t[_a];
  n === void 0 && (n = t[_a] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vf(t, e, 2, !1), n.add(r));
}
function Fi(e, t, n) {
  var r = 0;
  t && (r |= 4), vf(n, e, r, t);
}
var Ol = "_reactListening" + Math.random().toString(36).slice(2);
function nl(e) {
  if (!e[Ol]) {
    (e[Ol] = !0),
      Ed.forEach(function (n) {
        n !== "selectionchange" && (uv.has(n) || Fi(n, !1, e), Fi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ol] || ((t[Ol] = !0), Fi("selectionchange", !1, t));
  }
}
function vf(e, t, n, r) {
  switch (qd(t)) {
    case 1:
      var l = Em;
      break;
    case 4:
      l = Cm;
      break;
    default:
      l = mu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ga ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ai(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = gn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ud(function () {
    var s = o,
      h = du(n),
      m = [];
    e: {
      var d = hf.get(e);
      if (d !== void 0) {
        var w = yu,
          x = e;
        switch (e) {
          case "keypress":
            if (Ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Um;
            break;
          case "focusin":
            (x = "focus"), (w = Ti);
            break;
          case "focusout":
            (x = "blur"), (w = Ti);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ti;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = As;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Bm;
            break;
          case cf:
          case df:
          case ff:
            w = _m;
            break;
          case pf:
            w = Vm;
            break;
          case "scroll":
            w = jm;
            break;
          case "wheel":
            w = Qm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Mm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ws;
        }
        var g = (t & 4) !== 0,
          N = !g && e === "scroll",
          p = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var f = s, y; f !== null; ) {
          y = f;
          var v = y.stateNode;
          if (
            (y.tag === 5 &&
              v !== null &&
              ((y = v),
              p !== null && ((v = Jr(f, p)), v != null && g.push(rl(f, v, y)))),
            N)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((d = new w(d, x, null, n, h)), m.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          d &&
            n !== va &&
            (x = n.relatedTarget || n.fromElement) &&
            (gn(x) || x[zt]))
        )
          break e;
        if (
          (w || d) &&
          ((d =
            h.window === h
              ? h
              : (d = h.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = s),
              (x = x ? gn(x) : null),
              x !== null &&
                ((N = Mn(x)), x !== N || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = s)),
          w !== x)
        ) {
          if (
            ((g = As),
            (v = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ws),
              (v = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (N = w == null ? d : Wn(w)),
            (y = x == null ? d : Wn(x)),
            (d = new g(v, f + "leave", w, n, h)),
            (d.target = N),
            (d.relatedTarget = y),
            (v = null),
            gn(h) === s &&
              ((g = new g(p, f + "enter", x, n, h)),
              (g.target = y),
              (g.relatedTarget = N),
              (v = g)),
            (N = v),
            w && x)
          )
            t: {
              for (g = w, p = x, f = 0, y = g; y; y = zn(y)) f++;
              for (y = 0, v = p; v; v = zn(v)) y++;
              for (; 0 < f - y; ) (g = zn(g)), f--;
              for (; 0 < y - f; ) (p = zn(p)), y--;
              for (; f--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = zn(g)), (p = zn(p));
              }
              g = null;
            }
          else g = null;
          w !== null && bs(m, d, w, g, !1),
            x !== null && N !== null && bs(m, N, x, g, !0);
        }
      }
      e: {
        if (
          ((d = s ? Wn(s) : window),
          (w = d.nodeName && d.nodeName.toLowerCase()),
          w === "select" || (w === "input" && d.type === "file"))
        )
          var k = qm;
        else if (Qs(d))
          if (lf) k = nv;
          else {
            k = ev;
            var _ = bm;
          }
        else
          (w = d.nodeName) &&
            w.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (k = tv);
        if (k && (k = k(e, s))) {
          rf(m, k, n, h);
          break e;
        }
        _ && _(e, d, s),
          e === "focusout" &&
            (_ = d._wrapperState) &&
            _.controlled &&
            d.type === "number" &&
            da(d, "number", d.value);
      }
      switch (((_ = s ? Wn(s) : window), e)) {
        case "focusin":
          (Qs(_) || _.contentEditable === "true") &&
            ((An = _), (Ca = s), (Wr = null));
          break;
        case "focusout":
          Wr = Ca = An = null;
          break;
        case "mousedown":
          ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ja = !1), Js(m, n, h);
          break;
        case "selectionchange":
          if (ov) break;
        case "keydown":
        case "keyup":
          Js(m, n, h);
      }
      var P;
      if (wu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Fn
          ? tf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (ef &&
          n.locale !== "ko" &&
          (Fn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Fn && (P = bd())
            : ((Jt = h),
              (vu = "value" in Jt ? Jt.value : Jt.textContent),
              (Fn = !0))),
        (_ = io(s, T)),
        0 < _.length &&
          ((T = new Bs(T, e, null, n, h)),
          m.push({ event: T, listeners: _ }),
          P ? (T.data = P) : ((P = nf(n)), P !== null && (T.data = P)))),
        (P = Ym ? Gm(e, n) : Xm(e, n)) &&
          ((s = io(s, "onBeforeInput")),
          0 < s.length &&
            ((h = new Bs("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: s }),
            (h.data = P)));
    }
    mf(m, t);
  });
}
function rl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function io(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Jr(e, n)),
      o != null && r.unshift(rl(e, o, l)),
      (o = Jr(e, t)),
      o != null && r.push(rl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Jr(n, o)), u != null && i.unshift(rl(n, u, a)))
        : l || ((u = Jr(n, o)), u != null && i.push(rl(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var sv = /\r\n?/g,
  cv = /\u0000|\uFFFD/g;
function ec(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sv,
      `
`
    )
    .replace(cv, "");
}
function Tl(e, t, n) {
  if (((t = ec(t)), ec(e) !== t && n)) throw Error(R(425));
}
function ao() {}
var ka = null,
  Na = null;
function Ra(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Pa = typeof setTimeout == "function" ? setTimeout : void 0,
  dv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tc = typeof Promise == "function" ? Promise : void 0,
  fv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tc < "u"
      ? function (e) {
          return tc.resolve(null).then(e).catch(pv);
        }
      : Pa;
function pv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Bi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  br(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yr = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + yr,
  ll = "__reactProps$" + yr,
  zt = "__reactContainer$" + yr,
  _a = "__reactEvents$" + yr,
  hv = "__reactListeners$" + yr,
  mv = "__reactHandles$" + yr;
function gn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nc(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = nc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vl(e) {
  return (
    (e = e[xt] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function zo(e) {
  return e[ll] || null;
}
var La = [],
  Vn = -1;
function dn(e) {
  return { current: e };
}
function ne(e) {
  0 > Vn || ((e.current = La[Vn]), (La[Vn] = null), Vn--);
}
function ee(e, t) {
  Vn++, (La[Vn] = e.current), (e.current = t);
}
var un = {},
  Oe = dn(un),
  Ae = dn(!1),
  jn = un;
function or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function uo() {
  ne(Ae), ne(Oe);
}
function rc(e, t, n) {
  if (Oe.current !== un) throw Error(R(168));
  ee(Oe, t), ee(Ae, n);
}
function yf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, bh(e) || "Unknown", l));
  return se({}, n, r);
}
function so(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (jn = Oe.current),
    ee(Oe, e),
    ee(Ae, Ae.current),
    !0
  );
}
function lc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = yf(e, t, jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(Ae),
      ne(Oe),
      ee(Oe, e))
    : ne(Ae),
    ee(Ae, n);
}
var Rt = null,
  Io = !1,
  Wi = !1;
function gf(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function vv(e) {
  (Io = !0), gf(e);
}
function fn() {
  if (!Wi && Rt !== null) {
    Wi = !0;
    var e = 0,
      t = Y;
    try {
      var n = Rt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rt = null), (Io = !1);
    } catch (l) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), Wd(fu, fn), l);
    } finally {
      (Y = t), (Wi = !1);
    }
  }
  return null;
}
var Hn = [],
  Qn = 0,
  co = null,
  fo = 0,
  qe = [],
  be = 0,
  kn = null,
  Pt = 1,
  _t = "";
function vn(e, t) {
  (Hn[Qn++] = fo), (Hn[Qn++] = co), (co = e), (fo = t);
}
function wf(e, t, n) {
  (qe[be++] = Pt), (qe[be++] = _t), (qe[be++] = kn), (kn = e);
  var r = Pt;
  e = _t;
  var l = 32 - ft(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ft(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Pt = (1 << (32 - ft(t) + l)) | (n << l) | r),
      (_t = o + e);
  } else (Pt = (1 << o) | (n << l) | r), (_t = e);
}
function Su(e) {
  e.return !== null && (vn(e, 1), wf(e, 1, 0));
}
function Eu(e) {
  for (; e === co; )
    (co = Hn[--Qn]), (Hn[Qn] = null), (fo = Hn[--Qn]), (Hn[Qn] = null);
  for (; e === kn; )
    (kn = qe[--be]),
      (qe[be] = null),
      (_t = qe[--be]),
      (qe[be] = null),
      (Pt = qe[--be]),
      (qe[be] = null);
}
var Ke = null,
  Qe = null,
  re = !1,
  dt = null;
function xf(e, t) {
  var n = et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function oc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (Qe = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kn !== null ? { id: Pt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (Qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ma(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oa(e) {
  if (re) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!oc(e, t)) {
        if (Ma(e)) throw Error(R(418));
        t = tn(n.nextSibling);
        var r = Ke;
        t && oc(e, t)
          ? xf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ke = e));
      }
    } else {
      if (Ma(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (Ke = e);
    }
  }
}
function ic(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Dl(e) {
  if (e !== Ke) return !1;
  if (!re) return ic(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ra(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (Ma(e)) throw (Sf(), Error(R(418)));
    for (; t; ) xf(e, t), (t = tn(t.nextSibling));
  }
  if ((ic(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Ke ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sf() {
  for (var e = Qe; e; ) e = tn(e.nextSibling);
}
function ir() {
  (Qe = Ke = null), (re = !1);
}
function Cu(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
var yv = Ut.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var po = dn(null),
  ho = null,
  Kn = null,
  ju = null;
function ku() {
  ju = Kn = ho = null;
}
function Nu(e) {
  var t = po.current;
  ne(po), (e._currentValue = t);
}
function Ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function tr(e, t) {
  (ho = e),
    (ju = Kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (ju !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kn === null)) {
      if (ho === null) throw Error(R(308));
      (Kn = e), (ho.dependencies = { lanes: 0, firstContext: e });
    } else Kn = Kn.next = e;
  return t;
}
var wn = null;
function Ru(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function Ef(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ru(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    It(e, r)
  );
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      It(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ru(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    It(e, n)
  );
}
function Kl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pu(e, n);
  }
}
function ac(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mo(e, t, n, r) {
  var l = e.updateQueue;
  Yt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== i &&
        (a === null ? (h.firstBaseUpdate = s) : (a.next = s),
        (h.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = s = u = null), (a = o);
    do {
      var d = a.lane,
        w = a.eventTime;
      if ((r & d) === d) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            g = a;
          switch (((d = t), (w = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                m = x.call(w, m, d);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (d = typeof x == "function" ? x.call(w, m, d) : x),
                d == null)
              )
                break e;
              m = se({}, m, d);
              break e;
            case 2:
              Yt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [a]) : d.push(a));
      } else
        (w = {
          eventTime: w,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((s = h = w), (u = m)) : (h = h.next = w),
          (i |= d);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Rn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function uc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var jf = new Sd.Component().refs;
function Da(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = ln(e),
      o = Ot(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = nn(e, o, l)),
      t !== null && (pt(t, e, l, r), Kl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = ln(e),
      o = Ot(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = nn(e, o, l)),
      t !== null && (pt(t, e, l, r), Kl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = ln(e),
      l = Ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = nn(e, l, r)),
      t !== null && (pt(t, e, r, n), Kl(t, e, r));
  },
};
function sc(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !tl(n, r) || !tl(l, o)
      : !0
  );
}
function kf(e, t, n) {
  var r = !1,
    l = un,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = nt(o))
      : ((l = Be(t) ? jn : Oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? or(e, l) : un)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function cc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $o.enqueueReplaceState(t, t.state, null);
}
function za(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = jf), Pu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = nt(o))
    : ((o = Be(t) ? jn : Oe.current), (l.context = or(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Da(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && $o.enqueueReplaceState(l, l.state, null),
      mo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === jf && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function dc(e) {
  var t = e._init;
  return t(e._payload);
}
function Nf(e) {
  function t(p, f) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [f]), (p.flags |= 16)) : y.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = on(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < f ? ((p.flags |= 2), f) : y)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, y, v) {
    return f === null || f.tag !== 6
      ? ((f = Xi(y, p.mode, v)), (f.return = p), f)
      : ((f = l(f, y)), (f.return = p), f);
  }
  function u(p, f, y, v) {
    var k = y.type;
    return k === Un
      ? h(p, f, y.props.children, v, y.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Kt &&
            dc(k) === f.type))
      ? ((v = l(f, y.props)), (v.ref = Rr(p, f, y)), (v.return = p), v)
      : ((v = ql(y.type, y.key, y.props, null, p.mode, v)),
        (v.ref = Rr(p, f, y)),
        (v.return = p),
        v);
  }
  function s(p, f, y, v) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== y.containerInfo ||
      f.stateNode.implementation !== y.implementation
      ? ((f = Ji(y, p.mode, v)), (f.return = p), f)
      : ((f = l(f, y.children || [])), (f.return = p), f);
  }
  function h(p, f, y, v, k) {
    return f === null || f.tag !== 7
      ? ((f = Cn(y, p.mode, v, k)), (f.return = p), f)
      : ((f = l(f, y)), (f.return = p), f);
  }
  function m(p, f, y) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Xi("" + f, p.mode, y)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case jl:
          return (
            (y = ql(f.type, f.key, f.props, null, p.mode, y)),
            (y.ref = Rr(p, null, f)),
            (y.return = p),
            y
          );
        case $n:
          return (f = Ji(f, p.mode, y)), (f.return = p), f;
        case Kt:
          var v = f._init;
          return m(p, v(f._payload), y);
      }
      if (zr(f) || Er(f))
        return (f = Cn(f, p.mode, y, null)), (f.return = p), f;
      zl(p, f);
    }
    return null;
  }
  function d(p, f, y, v) {
    var k = f !== null ? f.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return k !== null ? null : a(p, f, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case jl:
          return y.key === k ? u(p, f, y, v) : null;
        case $n:
          return y.key === k ? s(p, f, y, v) : null;
        case Kt:
          return (k = y._init), d(p, f, k(y._payload), v);
      }
      if (zr(y) || Er(y)) return k !== null ? null : h(p, f, y, v, null);
      zl(p, y);
    }
    return null;
  }
  function w(p, f, y, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (p = p.get(y) || null), a(f, p, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case jl:
          return (p = p.get(v.key === null ? y : v.key) || null), u(f, p, v, k);
        case $n:
          return (p = p.get(v.key === null ? y : v.key) || null), s(f, p, v, k);
        case Kt:
          var _ = v._init;
          return w(p, f, y, _(v._payload), k);
      }
      if (zr(v) || Er(v)) return (p = p.get(y) || null), h(f, p, v, k, null);
      zl(f, v);
    }
    return null;
  }
  function x(p, f, y, v) {
    for (
      var k = null, _ = null, P = f, T = (f = 0), H = null;
      P !== null && T < y.length;
      T++
    ) {
      P.index > T ? ((H = P), (P = null)) : (H = P.sibling);
      var $ = d(p, P, y[T], v);
      if ($ === null) {
        P === null && (P = H);
        break;
      }
      e && P && $.alternate === null && t(p, P),
        (f = o($, f, T)),
        _ === null ? (k = $) : (_.sibling = $),
        (_ = $),
        (P = H);
    }
    if (T === y.length) return n(p, P), re && vn(p, T), k;
    if (P === null) {
      for (; T < y.length; T++)
        (P = m(p, y[T], v)),
          P !== null &&
            ((f = o(P, f, T)), _ === null ? (k = P) : (_.sibling = P), (_ = P));
      return re && vn(p, T), k;
    }
    for (P = r(p, P); T < y.length; T++)
      (H = w(P, p, T, y[T], v)),
        H !== null &&
          (e && H.alternate !== null && P.delete(H.key === null ? T : H.key),
          (f = o(H, f, T)),
          _ === null ? (k = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        P.forEach(function (xe) {
          return t(p, xe);
        }),
      re && vn(p, T),
      k
    );
  }
  function g(p, f, y, v) {
    var k = Er(y);
    if (typeof k != "function") throw Error(R(150));
    if (((y = k.call(y)), y == null)) throw Error(R(151));
    for (
      var _ = (k = null), P = f, T = (f = 0), H = null, $ = y.next();
      P !== null && !$.done;
      T++, $ = y.next()
    ) {
      P.index > T ? ((H = P), (P = null)) : (H = P.sibling);
      var xe = d(p, P, $.value, v);
      if (xe === null) {
        P === null && (P = H);
        break;
      }
      e && P && xe.alternate === null && t(p, P),
        (f = o(xe, f, T)),
        _ === null ? (k = xe) : (_.sibling = xe),
        (_ = xe),
        (P = H);
    }
    if ($.done) return n(p, P), re && vn(p, T), k;
    if (P === null) {
      for (; !$.done; T++, $ = y.next())
        ($ = m(p, $.value, v)),
          $ !== null &&
            ((f = o($, f, T)), _ === null ? (k = $) : (_.sibling = $), (_ = $));
      return re && vn(p, T), k;
    }
    for (P = r(p, P); !$.done; T++, $ = y.next())
      ($ = w(P, p, T, $.value, v)),
        $ !== null &&
          (e && $.alternate !== null && P.delete($.key === null ? T : $.key),
          (f = o($, f, T)),
          _ === null ? (k = $) : (_.sibling = $),
          (_ = $));
    return (
      e &&
        P.forEach(function (q) {
          return t(p, q);
        }),
      re && vn(p, T),
      k
    );
  }
  function N(p, f, y, v) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Un &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case jl:
          e: {
            for (var k = y.key, _ = f; _ !== null; ) {
              if (_.key === k) {
                if (((k = y.type), k === Un)) {
                  if (_.tag === 7) {
                    n(p, _.sibling),
                      (f = l(_, y.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Kt &&
                    dc(k) === _.type)
                ) {
                  n(p, _.sibling),
                    (f = l(_, y.props)),
                    (f.ref = Rr(p, _, y)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, _);
                break;
              } else t(p, _);
              _ = _.sibling;
            }
            y.type === Un
              ? ((f = Cn(y.props.children, p.mode, v, y.key)),
                (f.return = p),
                (p = f))
              : ((v = ql(y.type, y.key, y.props, null, p.mode, v)),
                (v.ref = Rr(p, f, y)),
                (v.return = p),
                (p = v));
          }
          return i(p);
        case $n:
          e: {
            for (_ = y.key; f !== null; ) {
              if (f.key === _)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === y.containerInfo &&
                  f.stateNode.implementation === y.implementation
                ) {
                  n(p, f.sibling),
                    (f = l(f, y.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Ji(y, p.mode, v)), (f.return = p), (p = f);
          }
          return i(p);
        case Kt:
          return (_ = y._init), N(p, f, _(y._payload), v);
      }
      if (zr(y)) return x(p, f, y, v);
      if (Er(y)) return g(p, f, y, v);
      zl(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, y)), (f.return = p), (p = f))
          : (n(p, f), (f = Xi(y, p.mode, v)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return N;
}
var ar = Nf(!0),
  Rf = Nf(!1),
  yl = {},
  Et = dn(yl),
  ol = dn(yl),
  il = dn(yl);
function xn(e) {
  if (e === yl) throw Error(R(174));
  return e;
}
function _u(e, t) {
  switch ((ee(il, t), ee(ol, e), ee(Et, yl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pa(t, e));
  }
  ne(Et), ee(Et, t);
}
function ur() {
  ne(Et), ne(ol), ne(il);
}
function Pf(e) {
  xn(il.current);
  var t = xn(Et.current),
    n = pa(t, e.type);
  t !== n && (ee(ol, e), ee(Et, n));
}
function Lu(e) {
  ol.current === e && (ne(Et), ne(ol));
}
var ae = dn(0);
function vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vi = [];
function Mu() {
  for (var e = 0; e < Vi.length; e++)
    Vi[e]._workInProgressVersionPrimary = null;
  Vi.length = 0;
}
var Yl = Ut.ReactCurrentDispatcher,
  Hi = Ut.ReactCurrentBatchConfig,
  Nn = 0,
  ue = null,
  ge = null,
  Se = null,
  yo = !1,
  Vr = !1,
  al = 0,
  gv = 0;
function Pe() {
  throw Error(R(321));
}
function Ou(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function Tu(e, t, n, r, l, o) {
  if (
    ((Nn = o),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yl.current = e === null || e.memoizedState === null ? Ev : Cv),
    (e = n(r, l)),
    Vr)
  ) {
    o = 0;
    do {
      if (((Vr = !1), (al = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (Se = ge = null),
        (t.updateQueue = null),
        (Yl.current = jv),
        (e = n(r, l));
    } while (Vr);
  }
  if (
    ((Yl.current = go),
    (t = ge !== null && ge.next !== null),
    (Nn = 0),
    (Se = ge = ue = null),
    (yo = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Du() {
  var e = al !== 0;
  return (al = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (ue.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function rt() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = Se === null ? ue.memoizedState : Se.next;
  if (t !== null) (Se = t), (ge = e);
  else {
    if (e === null) throw Error(R(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      Se === null ? (ue.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function ul(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qi(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var h = s.lane;
      if ((Nn & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: h,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = m), (i = r)) : (u = u.next = m),
          (ue.lanes |= h),
          (Rn |= h);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      ht(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ue.lanes |= o), (Rn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ki(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ht(o, t.memoizedState) || (Fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function _f() {}
function Lf(e, t) {
  var n = ue,
    r = rt(),
    l = t(),
    o = !ht(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Fe = !0)),
    (r = r.queue),
    zu(Tf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sl(9, Of.bind(null, n, r, l, t), void 0, null),
      Ee === null)
    )
      throw Error(R(349));
    Nn & 30 || Mf(n, t, l);
  }
  return l;
}
function Mf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Of(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Df(t) && zf(e);
}
function Tf(e, t, n) {
  return n(function () {
    Df(t) && zf(e);
  });
}
function Df(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function zf(e) {
  var t = It(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function fc(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ul,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Sv.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function sl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function If() {
  return rt().memoizedState;
}
function Gl(e, t, n, r) {
  var l = wt();
  (ue.flags |= e),
    (l.memoizedState = sl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Uo(e, t, n, r) {
  var l = rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var i = ge.memoizedState;
    if (((o = i.destroy), r !== null && Ou(r, i.deps))) {
      l.memoizedState = sl(t, n, o, r);
      return;
    }
  }
  (ue.flags |= e), (l.memoizedState = sl(1 | t, n, o, r));
}
function pc(e, t) {
  return Gl(8390656, 8, e, t);
}
function zu(e, t) {
  return Uo(2048, 8, e, t);
}
function $f(e, t) {
  return Uo(4, 2, e, t);
}
function Uf(e, t) {
  return Uo(4, 4, e, t);
}
function Ff(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Af(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Uo(4, 4, Ff.bind(null, t, e), n)
  );
}
function Iu() {}
function Bf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vf(e, t, n) {
  return Nn & 21
    ? (ht(n, t) || ((n = Qd()), (ue.lanes |= n), (Rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function wv(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hi.transition;
  Hi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Hi.transition = r);
  }
}
function Hf() {
  return rt().memoizedState;
}
function xv(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qf(e))
  )
    Kf(t, n);
  else if (((n = Ef(e, t, n, r)), n !== null)) {
    var l = ze();
    pt(n, e, r, l), Yf(n, t, r);
  }
}
function Sv(e, t, n) {
  var r = ln(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qf(e)) Kf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ht(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ru(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ef(e, t, l, r)),
      n !== null && ((l = ze()), pt(n, e, r, l), Yf(n, t, r));
  }
}
function Qf(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Kf(e, t) {
  Vr = yo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pu(e, n);
  }
}
var go = {
    readContext: nt,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Ev = {
    readContext: nt,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: pc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gl(4194308, 4, Ff.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = xv.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fc,
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = fc(!1),
        t = e[0];
      return (e = wv.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = wt();
      if (re) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(R(349));
        Nn & 30 || Mf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        pc(Tf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        sl(9, Of.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = Ee.identifierPrefix;
      if (re) {
        var n = _t,
          r = Pt;
        (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = al++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cv = {
    readContext: nt,
    useCallback: Bf,
    useContext: nt,
    useEffect: zu,
    useImperativeHandle: Af,
    useInsertionEffect: $f,
    useLayoutEffect: Uf,
    useMemo: Wf,
    useReducer: Qi,
    useRef: If,
    useState: function () {
      return Qi(ul);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = rt();
      return Vf(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Qi(ul)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: _f,
    useSyncExternalStore: Lf,
    useId: Hf,
    unstable_isNewReconciler: !1,
  },
  jv = {
    readContext: nt,
    useCallback: Bf,
    useContext: nt,
    useEffect: zu,
    useImperativeHandle: Af,
    useInsertionEffect: $f,
    useLayoutEffect: Uf,
    useMemo: Wf,
    useReducer: Ki,
    useRef: If,
    useState: function () {
      return Ki(ul);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = rt();
      return ge === null ? (t.memoizedState = e) : Vf(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Ki(ul)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: _f,
    useSyncExternalStore: Lf,
    useId: Hf,
    unstable_isNewReconciler: !1,
  };
function sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ia(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kv = typeof WeakMap == "function" ? WeakMap : Map;
function Gf(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xo || ((xo = !0), (Ka = r)), Ia(e, t);
    }),
    n
  );
}
function Xf(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ia(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ia(e, t),
          typeof r != "function" &&
            (rn === null ? (rn = new Set([this])) : rn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Fv.bind(null, e, t, n)), t.then(e, e));
}
function mc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ot(-1, 1)), (t.tag = 2), nn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Nv = Ut.ReactCurrentOwner,
  Fe = !1;
function De(e, t, n, r) {
  t.child = e === null ? Rf(t, null, n, r) : ar(t, e.child, n, r);
}
function yc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    tr(t, l),
    (r = Tu(e, t, n, r, o, l)),
    (n = Du()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        $t(e, t, l))
      : (re && n && Su(t), (t.flags |= 1), De(e, t, r, l), t.child)
  );
}
function gc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Hu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jf(e, t, o, r, l))
      : ((e = ql(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : tl), n(i, r) && e.ref === t.ref)
    )
      return $t(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = on(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (tl(o, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), $t(e, t, l);
  }
  return $a(e, t, n, r, l);
}
function Zf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Gn, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Gn, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ee(Gn, He),
        (He |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Gn, He),
      (He |= r);
  return De(e, t, l, n), t.child;
}
function qf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $a(e, t, n, r, l) {
  var o = Be(n) ? jn : Oe.current;
  return (
    (o = or(t, o)),
    tr(t, l),
    (n = Tu(e, t, n, r, o, l)),
    (r = Du()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        $t(e, t, l))
      : (re && r && Su(t), (t.flags |= 1), De(e, t, n, l), t.child)
  );
}
function wc(e, t, n, r, l) {
  if (Be(n)) {
    var o = !0;
    so(t);
  } else o = !1;
  if ((tr(t, l), t.stateNode === null))
    Xl(e, t), kf(t, n, r), za(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = nt(s))
      : ((s = Be(n) ? jn : Oe.current), (s = or(t, s)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && cc(t, i, r, s)),
      (Yt = !1);
    var d = t.memoizedState;
    (i.state = d),
      mo(t, r, i, l),
      (u = t.memoizedState),
      a !== r || d !== u || Ae.current || Yt
        ? (typeof h == "function" && (Da(t, n, h, r), (u = t.memoizedState)),
          (a = Yt || sc(t, n, a, r, d, u, s))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Cf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ut(t.type, a)),
      (i.props = s),
      (m = t.pendingProps),
      (d = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = nt(u))
        : ((u = Be(n) ? jn : Oe.current), (u = or(t, u)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || d !== u) && cc(t, i, r, u)),
      (Yt = !1),
      (d = t.memoizedState),
      (i.state = d),
      mo(t, r, i, l);
    var x = t.memoizedState;
    a !== m || d !== x || Ae.current || Yt
      ? (typeof w == "function" && (Da(t, n, w, r), (x = t.memoizedState)),
        (s = Yt || sc(t, n, s, r, d, x, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ua(e, t, n, r, o, l);
}
function Ua(e, t, n, r, l, o) {
  qf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && lc(t, n, !1), $t(e, t, o);
  (r = t.stateNode), (Nv.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ar(t, e.child, null, o)), (t.child = ar(t, null, a, o)))
      : De(e, t, a, o),
    (t.memoizedState = r.state),
    l && lc(t, n, !0),
    t.child
  );
}
function bf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rc(e, t.context, !1),
    _u(e, t.containerInfo);
}
function xc(e, t, n, r, l) {
  return ir(), Cu(l), (t.flags |= 256), De(e, t, n, r), t.child;
}
var Fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Aa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ep(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(ae, l & 1),
    e === null)
  )
    return (
      Oa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Bo(i, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Aa(n)),
              (t.memoizedState = Fa),
              e)
            : $u(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Rv(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = on(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = on(a, o)) : ((o = Cn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Aa(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = on(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $u(e, t) {
  return (
    (t = Bo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Il(e, t, n, r) {
  return (
    r !== null && Cu(r),
    ar(t, e.child, null, n),
    (e = $u(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Rv(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yi(Error(R(422)))), Il(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Bo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Cn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ar(t, e.child, null, i),
        (t.child.memoizedState = Aa(i)),
        (t.memoizedState = Fa),
        o);
  if (!(t.mode & 1)) return Il(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(R(419))), (r = Yi(o, r, void 0)), Il(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Fe || a)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), It(e, l), pt(r, e, l, -1));
    }
    return Vu(), (r = Yi(Error(R(421)))), Il(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Av.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Qe = tn(l.nextSibling)),
      (Ke = t),
      (re = !0),
      (dt = null),
      e !== null &&
        ((qe[be++] = Pt),
        (qe[be++] = _t),
        (qe[be++] = kn),
        (Pt = e.id),
        (_t = e.overflow),
        (kn = t)),
      (t = $u(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ta(e.return, t, n);
}
function Gi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function tp(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((De(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sc(e, n, t);
        else if (e.tag === 19) Sc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && vo(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Gi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && vo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Gi(t, !0, n, null, o);
        break;
      case "together":
        Gi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = on(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Pv(e, t, n) {
  switch (t.tag) {
    case 3:
      bf(t), ir();
      break;
    case 5:
      Pf(t);
      break;
    case 1:
      Be(t.type) && so(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ee(po, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ep(e, t, n)
          : (ee(ae, ae.current & 1),
            (e = $t(e, t, n)),
            e !== null ? e.sibling : null);
      ee(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zf(e, t, n);
  }
  return $t(e, t, n);
}
var np, Ba, rp, lp;
np = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ba = function () {};
rp = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), xn(Et.current);
    var o = null;
    switch (n) {
      case "input":
        (l = sa(e, l)), (r = sa(e, r)), (o = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = fa(e, l)), (r = fa(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ao);
    }
    ha(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Gr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Gr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && te("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
lp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _v(e, t, n) {
  var r = t.pendingProps;
  switch ((Eu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return Be(t.type) && uo(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ur(),
        ne(Ae),
        ne(Oe),
        Mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Dl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), dt !== null && (Xa(dt), (dt = null)))),
        Ba(e, t),
        _e(t),
        null
      );
    case 5:
      Lu(t);
      var l = xn(il.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rp(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return _e(t), null;
        }
        if (((e = xn(Et.current)), Dl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[xt] = t), (r[ll] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < $r.length; l++) te($r[l], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              Ls(r, o), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              Os(r, o), te("invalid", r);
          }
          ha(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Tl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Tl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Gr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              kl(r), Ms(r, o, !0);
              break;
            case "textarea":
              kl(r), Ts(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ao);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ld(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[xt] = t),
            (e[ll] = r),
            np(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ma(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < $r.length; l++) te($r[l], e);
                l = r;
                break;
              case "source":
                te("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (l = r);
                break;
              case "details":
                te("toggle", e), (l = r);
                break;
              case "input":
                Ls(e, r), (l = sa(e, r)), te("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                Os(e, r), (l = fa(e, r)), te("invalid", e);
                break;
              default:
                l = r;
            }
            ha(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Td(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Md(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Xr(e, u)
                    : typeof u == "number" && Xr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Gr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && te("scroll", e)
                      : u != null && au(e, o, u, i));
              }
            switch (n) {
              case "input":
                kl(e), Ms(e, r, !1);
                break;
              case "textarea":
                kl(e), Ts(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Zn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ao);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) lp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = xn(il.current)), xn(Et.current), Dl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (o = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (ne(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Qe !== null && t.mode & 1 && !(t.flags & 128))
          Sf(), ir(), (t.flags |= 98560), (o = !1);
        else if (((o = Dl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[xt] = t;
          } else
            ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (o = !1);
        } else dt !== null && (Xa(dt), (dt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? we === 0 && (we = 3) : Vu())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        ur(), Ba(e, t), e === null && nl(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return Nu(t.type._context), _e(t), null;
    case 17:
      return Be(t.type) && uo(), _e(t), null;
    case 19:
      if ((ne(ae), (o = t.memoizedState), o === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pr(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = vo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > cr &&
            ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !re)
            )
              return _e(t), null;
          } else
            2 * pe() - o.renderingStartTime > cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          ee(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        Wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Lv(e, t) {
  switch ((Eu(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ur(),
        ne(Ae),
        ne(Oe),
        Mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if (
        (ne(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(ae), null;
    case 4:
      return ur(), null;
    case 10:
      return Nu(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $l = !1,
  Me = !1,
  Mv = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function Wa(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Ec = !1;
function Ov(e, t) {
  if (((ka = lo), (e = uf()), xu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            h = 0,
            m = e,
            d = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (u = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (d = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (d === n && ++s === l && (a = i),
                d === o && ++h === r && (u = i),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = d), (d = m.parentNode);
            }
            m = w;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Na = { focusedElem: e, selectionRange: n }, lo = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    N = x.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : ut(t.type, g),
                      N
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (v) {
          ce(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (x = Ec), (Ec = !1), x;
}
function Hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Wa(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Fo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Va(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function op(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), op(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[ll], delete t[_a], delete t[hv], delete t[mv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ip(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ip(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ha(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ao));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ha(e, t, n), e = e.sibling; e !== null; ) Ha(e, t, n), (e = e.sibling);
}
function Qa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qa(e, t, n), e = e.sibling; e !== null; ) Qa(e, t, n), (e = e.sibling);
}
var je = null,
  st = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) ap(e, t, n), (n = n.sibling);
}
function ap(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(Mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || Yn(n, t);
    case 6:
      var r = je,
        l = st;
      (je = null),
        Qt(e, t, n),
        (je = r),
        (st = l),
        je !== null &&
          (st
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (st
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bi(e.parentNode, n)
              : e.nodeType === 1 && Bi(e, n),
            br(e))
          : Bi(je, n.stateNode));
      break;
    case 4:
      (r = je),
        (l = st),
        (je = n.stateNode.containerInfo),
        (st = !0),
        Qt(e, t, n),
        (je = r),
        (st = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Wa(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (Yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), Qt(e, t, n), (Me = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mv()),
      t.forEach(function (r) {
        var l = Bv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (je = a.stateNode), (st = !1);
              break e;
            case 3:
              (je = a.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (je = a.stateNode.containerInfo), (st = !0);
              break e;
          }
          a = a.return;
        }
        if (je === null) throw Error(R(160));
        ap(o, i, l), (je = null), (st = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) up(t, e), (t = t.sibling);
}
function up(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), gt(e), r & 4)) {
        try {
          Hr(3, e, e.return), Fo(3, e);
        } catch (g) {
          ce(e, e.return, g);
        }
        try {
          Hr(5, e, e.return);
        } catch (g) {
          ce(e, e.return, g);
        }
      }
      break;
    case 1:
      at(t, e), gt(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (
        (at(t, e),
        gt(e),
        r & 512 && n !== null && Yn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Xr(l, "");
        } catch (g) {
          ce(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Pd(l, o),
              ma(a, i);
            var s = ma(a, o);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                m = u[i + 1];
              h === "style"
                ? Td(l, m)
                : h === "dangerouslySetInnerHTML"
                ? Md(l, m)
                : h === "children"
                ? Xr(l, m)
                : au(l, h, m, s);
            }
            switch (a) {
              case "input":
                ca(l, o);
                break;
              case "textarea":
                _d(l, o);
                break;
              case "select":
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Zn(l, !!o.multiple, w, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Zn(l, !!o.multiple, o.defaultValue, !0)
                      : Zn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ll] = o;
          } catch (g) {
            ce(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((at(t, e), gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          ce(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          br(t.containerInfo);
        } catch (g) {
          ce(e, e.return, g);
        }
      break;
    case 4:
      at(t, e), gt(e);
      break;
    case 13:
      at(t, e),
        gt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Au = pe())),
        r & 4 && jc(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (s = Me) || h), at(t, e), (Me = s)) : at(t, e),
        gt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !h && e.mode & 1)
        )
          for (O = e, h = e.child; h !== null; ) {
            for (m = O = h; O !== null; ) {
              switch (((d = O), (w = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hr(4, d, d.return);
                  break;
                case 1:
                  Yn(d, d.return);
                  var x = d.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      ce(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Yn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Nc(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = d), (O = w)) : Nc(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Od("display", i)));
              } catch (g) {
                ce(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = s ? "" : m.memoizedProps;
              } catch (g) {
                ce(e, e.return, g);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      at(t, e), gt(e), r & 4 && jc(e);
      break;
    case 21:
      break;
    default:
      at(t, e), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ip(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Xr(l, ""), (r.flags &= -33));
          var o = Cc(e);
          Qa(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Cc(e);
          Ha(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tv(e, t, n) {
  (O = e), sp(e);
}
function sp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || $l;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Me;
        a = $l;
        var s = Me;
        if ((($l = i), (Me = u) && !s))
          for (O = l; O !== null; )
            (i = O),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Rc(l)
                : u !== null
                ? ((u.return = i), (O = u))
                : Rc(l);
        for (; o !== null; ) (O = o), sp(o), (o = o.sibling);
        (O = l), ($l = a), (Me = s);
      }
      kc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (O = o)) : kc(e);
  }
}
function kc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && uc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var h = s.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && br(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Me || (t.flags & 512 && Va(t));
      } catch (d) {
        ce(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Nc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Rc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fo(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var o = t.return;
          try {
            Va(t);
          } catch (u) {
            ce(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Va(t);
          } catch (u) {
            ce(t, i, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var Dv = Math.ceil,
  wo = Ut.ReactCurrentDispatcher,
  Uu = Ut.ReactCurrentOwner,
  tt = Ut.ReactCurrentBatchConfig,
  Q = 0,
  Ee = null,
  ve = null,
  ke = 0,
  He = 0,
  Gn = dn(0),
  we = 0,
  cl = null,
  Rn = 0,
  Ao = 0,
  Fu = 0,
  Qr = null,
  Ue = null,
  Au = 0,
  cr = 1 / 0,
  Nt = null,
  xo = !1,
  Ka = null,
  rn = null,
  Ul = !1,
  Zt = null,
  So = 0,
  Kr = 0,
  Ya = null,
  Jl = -1,
  Zl = 0;
function ze() {
  return Q & 6 ? pe() : Jl !== -1 ? Jl : (Jl = pe());
}
function ln(e) {
  return e.mode & 1
    ? Q & 2 && ke !== 0
      ? ke & -ke
      : yv.transition !== null
      ? (Zl === 0 && (Zl = Qd()), Zl)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qd(e.type))),
        e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Kr) throw ((Kr = 0), (Ya = null), Error(R(185)));
  hl(e, n, r),
    (!(Q & 2) || e !== Ee) &&
      (e === Ee && (!(Q & 2) && (Ao |= n), we === 4 && Xt(e, ke)),
      We(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((cr = pe() + 500), Io && fn()));
}
function We(e, t) {
  var n = e.callbackNode;
  ym(e, t);
  var r = ro(e, e === Ee ? ke : 0);
  if (r === 0)
    n !== null && Is(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Is(n), t === 1))
      e.tag === 0 ? vv(Pc.bind(null, e)) : gf(Pc.bind(null, e)),
        fv(function () {
          !(Q & 6) && fn();
        }),
        (n = null);
    else {
      switch (Kd(r)) {
        case 1:
          n = fu;
          break;
        case 4:
          n = Vd;
          break;
        case 16:
          n = no;
          break;
        case 536870912:
          n = Hd;
          break;
        default:
          n = no;
      }
      n = yp(n, cp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function cp(e, t) {
  if (((Jl = -1), (Zl = 0), Q & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (nr() && e.callbackNode !== n) return null;
  var r = ro(e, e === Ee ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Eo(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var o = fp();
    (Ee !== e || ke !== t) && ((Nt = null), (cr = pe() + 500), En(e, t));
    do
      try {
        $v();
        break;
      } catch (a) {
        dp(e, a);
      }
    while (1);
    ku(),
      (wo.current = o),
      (Q = l),
      ve !== null ? (t = 0) : ((Ee = null), (ke = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = xa(e)), l !== 0 && ((r = l), (t = Ga(e, l)))), t === 1)
    )
      throw ((n = cl), En(e, 0), Xt(e, r), We(e, pe()), n);
    if (t === 6) Xt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !zv(l) &&
          ((t = Eo(e, r)),
          t === 2 && ((o = xa(e)), o !== 0 && ((r = o), (t = Ga(e, o)))),
          t === 1))
      )
        throw ((n = cl), En(e, 0), Xt(e, r), We(e, pe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          yn(e, Ue, Nt);
          break;
        case 3:
          if (
            (Xt(e, r), (r & 130023424) === r && ((t = Au + 500 - pe()), 10 < t))
          ) {
            if (ro(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Pa(yn.bind(null, e, Ue, Nt), t);
            break;
          }
          yn(e, Ue, Nt);
          break;
        case 4:
          if ((Xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ft(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Dv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pa(yn.bind(null, e, Ue, Nt), r);
            break;
          }
          yn(e, Ue, Nt);
          break;
        case 5:
          yn(e, Ue, Nt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return We(e, pe()), e.callbackNode === n ? cp.bind(null, e) : null;
}
function Ga(e, t) {
  var n = Qr;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = Eo(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Xa(t)),
    e
  );
}
function Xa(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function zv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Xt(e, t) {
  for (
    t &= ~Fu,
      t &= ~Ao,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pc(e) {
  if (Q & 6) throw Error(R(327));
  nr();
  var t = ro(e, 0);
  if (!(t & 1)) return We(e, pe()), null;
  var n = Eo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xa(e);
    r !== 0 && ((t = r), (n = Ga(e, r)));
  }
  if (n === 1) throw ((n = cl), En(e, 0), Xt(e, t), We(e, pe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yn(e, Ue, Nt),
    We(e, pe()),
    null
  );
}
function Bu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((cr = pe() + 500), Io && fn());
  }
}
function Pn(e) {
  Zt !== null && Zt.tag === 0 && !(Q & 6) && nr();
  var t = Q;
  Q |= 1;
  var n = tt.transition,
    r = Y;
  try {
    if (((tt.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (tt.transition = n), (Q = t), !(Q & 6) && fn();
  }
}
function Wu() {
  (He = Gn.current), ne(Gn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), dv(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && uo();
          break;
        case 3:
          ur(), ne(Ae), ne(Oe), Mu();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          ne(ae);
          break;
        case 19:
          ne(ae);
          break;
        case 10:
          Nu(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ve = e = on(e.current, null)),
    (ke = He = t),
    (we = 0),
    (cl = null),
    (Fu = Ao = Rn = 0),
    (Ue = Qr = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((n = wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function dp(e, t) {
  do {
    var n = ve;
    try {
      if ((ku(), (Yl.current = go), yo)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        yo = !1;
      }
      if (
        ((Nn = 0),
        (Se = ge = ue = null),
        (Vr = !1),
        (al = 0),
        (Uu.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (cl = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ke),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            h = a,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var d = h.alternate;
            d
              ? ((h.updateQueue = d.updateQueue),
                (h.memoizedState = d.memoizedState),
                (h.lanes = d.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = mc(i);
          if (w !== null) {
            (w.flags &= -257),
              vc(w, i, a, o, t),
              w.mode & 1 && hc(o, s, t),
              (t = w),
              (u = s);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              hc(o, s, t), Vu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (re && a.mode & 1) {
          var N = mc(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              vc(N, i, a, o, t),
              Cu(sr(u, a));
            break e;
          }
        }
        (o = u = sr(u, a)),
          we !== 4 && (we = 2),
          Qr === null ? (Qr = [o]) : Qr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Gf(o, u, t);
              ac(o, p);
              break e;
            case 1:
              a = u;
              var f = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (rn === null || !rn.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Xf(o, a, t);
                ac(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hp(n);
    } catch (k) {
      (t = k), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function fp() {
  var e = wo.current;
  return (wo.current = go), e === null ? go : e;
}
function Vu() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || (!(Rn & 268435455) && !(Ao & 268435455)) || Xt(Ee, ke);
}
function Eo(e, t) {
  var n = Q;
  Q |= 2;
  var r = fp();
  (Ee !== e || ke !== t) && ((Nt = null), En(e, t));
  do
    try {
      Iv();
      break;
    } catch (l) {
      dp(e, l);
    }
  while (1);
  if ((ku(), (Q = n), (wo.current = r), ve !== null)) throw Error(R(261));
  return (Ee = null), (ke = 0), we;
}
function Iv() {
  for (; ve !== null; ) pp(ve);
}
function $v() {
  for (; ve !== null && !um(); ) pp(ve);
}
function pp(e) {
  var t = vp(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? hp(e) : (ve = t),
    (Uu.current = null);
}
function hp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lv(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = _v(n, t, He)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function yn(e, t, n) {
  var r = Y,
    l = tt.transition;
  try {
    (tt.transition = null), (Y = 1), Uv(e, t, n, r);
  } finally {
    (tt.transition = l), (Y = r);
  }
  return null;
}
function Uv(e, t, n, r) {
  do nr();
  while (Zt !== null);
  if (Q & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (gm(e, o),
    e === Ee && ((ve = Ee = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ul ||
      ((Ul = !0),
      yp(no, function () {
        return nr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = tt.transition), (tt.transition = null);
    var i = Y;
    Y = 1;
    var a = Q;
    (Q |= 4),
      (Uu.current = null),
      Ov(e, n),
      up(n, e),
      lv(Na),
      (lo = !!ka),
      (Na = ka = null),
      (e.current = n),
      Tv(n),
      sm(),
      (Q = a),
      (Y = i),
      (tt.transition = o);
  } else e.current = n;
  if (
    (Ul && ((Ul = !1), (Zt = e), (So = l)),
    (o = e.pendingLanes),
    o === 0 && (rn = null),
    fm(n.stateNode),
    We(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (xo) throw ((xo = !1), (e = Ka), (Ka = null), e);
  return (
    So & 1 && e.tag !== 0 && nr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ya ? Kr++ : ((Kr = 0), (Ya = e))) : (Kr = 0),
    fn(),
    null
  );
}
function nr() {
  if (Zt !== null) {
    var e = Kd(So),
      t = tt.transition,
      n = Y;
    try {
      if (((tt.transition = null), (Y = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), (So = 0), Q & 6)) throw Error(R(331));
        var l = Q;
        for (Q |= 4, O = e.current; O !== null; ) {
          var o = O,
            i = o.child;
          if (O.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (O = s; O !== null; ) {
                  var h = O;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (O = m);
                  else
                    for (; O !== null; ) {
                      h = O;
                      var d = h.sibling,
                        w = h.return;
                      if ((op(h), h === s)) {
                        O = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = w), (O = d);
                        break;
                      }
                      O = w;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var N = g.sibling;
                    (g.sibling = null), (g = N);
                  } while (g !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (O = i);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (O = p);
                break e;
              }
              O = o.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          i = O;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (O = y);
          else
            e: for (i = f; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(9, a);
                  }
                } catch (k) {
                  ce(a, a.return, k);
                }
              if (a === i) {
                O = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                (v.return = a.return), (O = v);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((Q = l), fn(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(Mo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (tt.transition = t);
    }
  }
  return !1;
}
function _c(e, t, n) {
  (t = sr(n, t)),
    (t = Gf(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = ze()),
    e !== null && (hl(e, 1, t), We(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) _c(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _c(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rn === null || !rn.has(r)))
        ) {
          (e = sr(n, e)),
            (e = Xf(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = ze()),
            t !== null && (hl(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Fv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (ke & n) === n &&
      (we === 4 || (we === 3 && (ke & 130023424) === ke && 500 > pe() - Au)
        ? En(e, 0)
        : (Fu |= n)),
    We(e, t);
}
function mp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pl), (Pl <<= 1), !(Pl & 130023424) && (Pl = 4194304))
      : (t = 1));
  var n = ze();
  (e = It(e, t)), e !== null && (hl(e, t, n), We(e, n));
}
function Av(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), mp(e, n);
}
function Bv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), mp(e, n);
}
var vp;
vp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), Pv(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), re && t.flags & 1048576 && wf(t, fo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xl(e, t), (e = t.pendingProps);
      var l = or(t, Oe.current);
      tr(t, n), (l = Tu(null, t, r, e, l, n));
      var o = Du();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((o = !0), so(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Pu(t),
            (l.updater = $o),
            (t.stateNode = l),
            (l._reactInternals = t),
            za(t, r, e, n),
            (t = Ua(null, t, r, !0, o, n)))
          : ((t.tag = 0), re && o && Su(t), De(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Vv(r)),
          (e = ut(r, e)),
          l)
        ) {
          case 0:
            t = $a(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = gc(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        $a(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        wc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((bf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Cf(e, t),
          mo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = sr(Error(R(423)), t)), (t = xc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = sr(Error(R(424)), t)), (t = xc(e, t, r, n, l));
            break e;
          } else
            for (
              Qe = tn(t.stateNode.containerInfo.firstChild),
                Ke = t,
                re = !0,
                dt = null,
                n = Rf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ir(), r === l)) {
            t = $t(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Pf(t),
        e === null && Oa(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ra(r, l) ? (i = null) : o !== null && Ra(r, o) && (t.flags |= 32),
        qf(e, t),
        De(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Oa(t), null;
    case 13:
      return ep(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ar(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        yc(e, t, r, l, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ee(po, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ht(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
              t = $t(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ot(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var h = s.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ta(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ta(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        De(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tr(t, n),
        (l = nt(l)),
        (r = r(l)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ut(r, t.pendingProps)),
        (l = ut(r.type, l)),
        gc(e, t, r, l, n)
      );
    case 15:
      return Jf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        Xl(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), so(t)) : (e = !1),
        tr(t, n),
        kf(t, r, l),
        za(t, r, l, n),
        Ua(null, t, r, !0, e, n)
      );
    case 19:
      return tp(e, t, n);
    case 22:
      return Zf(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function yp(e, t) {
  return Wd(e, t);
}
function Wv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function et(e, t, n, r) {
  return new Wv(e, t, n, r);
}
function Hu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vv(e) {
  if (typeof e == "function") return Hu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === su)) return 11;
    if (e === cu) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ql(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Hu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Un:
        return Cn(n.children, l, o, t);
      case uu:
        (i = 8), (l |= 8);
        break;
      case oa:
        return (
          (e = et(12, n, t, l | 2)), (e.elementType = oa), (e.lanes = o), e
        );
      case ia:
        return (e = et(13, n, t, l)), (e.elementType = ia), (e.lanes = o), e;
      case aa:
        return (e = et(19, n, t, l)), (e.elementType = aa), (e.lanes = o), e;
      case kd:
        return Bo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cd:
              i = 10;
              break e;
            case jd:
              i = 9;
              break e;
            case su:
              i = 11;
              break e;
            case cu:
              i = 14;
              break e;
            case Kt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = et(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Cn(e, t, n, r) {
  return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function Bo(e, t, n, r) {
  return (
    (e = et(22, e, r, t)),
    (e.elementType = kd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xi(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Ji(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Li(0)),
    (this.expirationTimes = Li(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Li(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Qu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Hv(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = et(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pu(o),
    e
  );
}
function Qv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gp(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return yf(e, n, t);
  }
  return t;
}
function wp(e, t, n, r, l, o, i, a, u) {
  return (
    (e = Qu(n, r, !0, e, l, o, i, a, u)),
    (e.context = gp(null)),
    (n = e.current),
    (r = ze()),
    (l = ln(n)),
    (o = Ot(r, l)),
    (o.callback = t ?? null),
    nn(n, o, l),
    (e.current.lanes = l),
    hl(e, l, r),
    We(e, r),
    e
  );
}
function Wo(e, t, n, r) {
  var l = t.current,
    o = ze(),
    i = ln(l);
  return (
    (n = gp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = nn(l, t, i)),
    e !== null && (pt(e, l, i, o), Kl(e, l, i)),
    i
  );
}
function Co(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ku(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function Kv() {
  return null;
}
var xp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yu(e) {
  this._internalRoot = e;
}
Vo.prototype.render = Yu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Wo(e, t, null, null);
};
Vo.prototype.unmount = Yu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function () {
      Wo(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function Vo(e) {
  this._internalRoot = e;
}
Vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
    Gt.splice(n, 0, e), n === 0 && Zd(e);
  }
};
function Gu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ho(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mc() {}
function Yv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Co(i);
        o.call(s);
      };
    }
    var i = wp(t, r, e, 0, null, !1, !1, "", Mc);
    return (
      (e._reactRootContainer = i),
      (e[zt] = i.current),
      nl(e.nodeType === 8 ? e.parentNode : e),
      Pn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Co(u);
      a.call(s);
    };
  }
  var u = Qu(e, 0, !1, null, null, !1, !1, "", Mc);
  return (
    (e._reactRootContainer = u),
    (e[zt] = u.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    Pn(function () {
      Wo(t, u, n, r);
    }),
    u
  );
}
function Qo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Co(i);
        a.call(u);
      };
    }
    Wo(t, i, e, l);
  } else i = Yv(n, t, e, l, r);
  return Co(i);
}
Yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ir(t.pendingLanes);
        n !== 0 &&
          (pu(t, n | 1), We(t, pe()), !(Q & 6) && ((cr = pe() + 500), fn()));
      }
      break;
    case 13:
      Pn(function () {
        var r = It(e, 1);
        if (r !== null) {
          var l = ze();
          pt(r, e, 1, l);
        }
      }),
        Ku(e, 1);
  }
};
hu = function (e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = ze();
      pt(t, e, 134217728, n);
    }
    Ku(e, 134217728);
  }
};
Gd = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = It(e, t);
    if (n !== null) {
      var r = ze();
      pt(n, e, t, r);
    }
    Ku(e, t);
  }
};
Xd = function () {
  return Y;
};
Jd = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
ya = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ca(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = zo(r);
            if (!l) throw Error(R(90));
            Rd(r), ca(r, l);
          }
        }
      }
      break;
    case "textarea":
      _d(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zn(e, !!n.multiple, t, !1);
  }
};
Id = Bu;
$d = Pn;
var Gv = { usingClientEntryPoint: !1, Events: [vl, Wn, zo, Dd, zd, Bu] },
  _r = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Xv = {
    bundleType: _r.bundleType,
    version: _r.version,
    rendererPackageName: _r.rendererPackageName,
    rendererConfig: _r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ad(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _r.findFiberByHostInstance || Kv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fl.isDisabled && Fl.supportsFiber)
    try {
      (Mo = Fl.inject(Xv)), (St = Fl);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gv;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gu(t)) throw Error(R(200));
  return Qv(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Gu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = xp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Qu(e, 1, !1, null, null, n, !1, r, l)),
    (e[zt] = t.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    new Yu(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Ad(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Pn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Ho(t)) throw Error(R(200));
  return Qo(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Gu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = xp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = wp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[zt] = t.current),
    nl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Vo(t);
};
Ge.render = function (e, t, n) {
  if (!Ho(t)) throw Error(R(200));
  return Qo(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Ho(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Pn(function () {
        Qo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = Bu;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ho(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Qo(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function Sp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sp);
    } catch (e) {
      console.error(e);
    }
}
Sp(), (gd.exports = Ge);
var Xu = gd.exports;
const Jv = ad(Xu);
var Oc = Xu;
(ra.createRoot = Oc.createRoot), (ra.hydrateRoot = Oc.hydrateRoot);
var Ep = { exports: {} },
  Cp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = C;
function Zv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qv = typeof Object.is == "function" ? Object.is : Zv,
  bv = dr.useState,
  ey = dr.useEffect,
  ty = dr.useLayoutEffect,
  ny = dr.useDebugValue;
function ry(e, t) {
  var n = t(),
    r = bv({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    ty(
      function () {
        (l.value = n), (l.getSnapshot = t), Zi(l) && o({ inst: l });
      },
      [e, n, t]
    ),
    ey(
      function () {
        return (
          Zi(l) && o({ inst: l }),
          e(function () {
            Zi(l) && o({ inst: l });
          })
        );
      },
      [e]
    ),
    ny(n),
    n
  );
}
function Zi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qv(e, n);
  } catch {
    return !0;
  }
}
function ly(e, t) {
  return t();
}
var oy =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ly
    : ry;
Cp.useSyncExternalStore =
  dr.useSyncExternalStore !== void 0 ? dr.useSyncExternalStore : oy;
Ep.exports = Cp;
var iy = Ep.exports,
  jp = { exports: {} },
  kp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ko = C,
  ay = iy;
function uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sy = typeof Object.is == "function" ? Object.is : uy,
  cy = ay.useSyncExternalStore,
  dy = Ko.useRef,
  fy = Ko.useEffect,
  py = Ko.useMemo,
  hy = Ko.useDebugValue;
kp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var o = dy(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = py(
    function () {
      function u(w) {
        if (!s) {
          if (((s = !0), (h = w), (w = r(w)), l !== void 0 && i.hasValue)) {
            var x = i.value;
            if (l(x, w)) return (m = x);
          }
          return (m = w);
        }
        if (((x = m), sy(h, w))) return x;
        var g = r(w);
        return l !== void 0 && l(x, g) ? x : ((h = w), (m = g));
      }
      var s = !1,
        h,
        m,
        d = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        d === null
          ? void 0
          : function () {
              return u(d());
            },
      ];
    },
    [t, n, r, l]
  );
  var a = cy(e, o[0], o[1]);
  return (
    fy(
      function () {
        (i.hasValue = !0), (i.value = a);
      },
      [a]
    ),
    hy(a),
    a
  );
};
jp.exports = kp;
var my = jp.exports;
function vy(e) {
  e();
}
let Np = vy;
const yy = (e) => (Np = e),
  gy = () => Np,
  Tc = Symbol.for("react-redux-context"),
  Dc = typeof globalThis < "u" ? globalThis : {};
function wy() {
  var e;
  if (!C.createContext) return {};
  const t = (e = Dc[Tc]) != null ? e : (Dc[Tc] = new Map());
  let n = t.get(C.createContext);
  return n || ((n = C.createContext(null)), t.set(C.createContext, n)), n;
}
const sn = wy();
function Ju(e = sn) {
  return function () {
    return C.useContext(e);
  };
}
const Rp = Ju(),
  xy = () => {
    throw new Error("uSES not initialized!");
  };
let Pp = xy;
const Sy = (e) => {
    Pp = e;
  },
  Ey = (e, t) => e === t;
function Cy(e = sn) {
  const t = e === sn ? Rp : Ju(e);
  return function (r, l = {}) {
    const {
        equalityFn: o = Ey,
        stabilityCheck: i = void 0,
        noopCheck: a = void 0,
      } = typeof l == "function" ? { equalityFn: l } : l,
      {
        store: u,
        subscription: s,
        getServerState: h,
        stabilityCheck: m,
        noopCheck: d,
      } = t();
    C.useRef(!0);
    const w = C.useCallback(
        {
          [r.name](g) {
            return r(g);
          },
        }[r.name],
        [r, m, i]
      ),
      x = Pp(s.addNestedSub, u.getState, h || u.getState, w, o);
    return C.useDebugValue(x), x;
  };
}
const Lt = Cy();
var _p = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ce = typeof Symbol == "function" && Symbol.for,
  Zu = Ce ? Symbol.for("react.element") : 60103,
  qu = Ce ? Symbol.for("react.portal") : 60106,
  Yo = Ce ? Symbol.for("react.fragment") : 60107,
  Go = Ce ? Symbol.for("react.strict_mode") : 60108,
  Xo = Ce ? Symbol.for("react.profiler") : 60114,
  Jo = Ce ? Symbol.for("react.provider") : 60109,
  Zo = Ce ? Symbol.for("react.context") : 60110,
  bu = Ce ? Symbol.for("react.async_mode") : 60111,
  qo = Ce ? Symbol.for("react.concurrent_mode") : 60111,
  bo = Ce ? Symbol.for("react.forward_ref") : 60112,
  ei = Ce ? Symbol.for("react.suspense") : 60113,
  jy = Ce ? Symbol.for("react.suspense_list") : 60120,
  ti = Ce ? Symbol.for("react.memo") : 60115,
  ni = Ce ? Symbol.for("react.lazy") : 60116,
  ky = Ce ? Symbol.for("react.block") : 60121,
  Ny = Ce ? Symbol.for("react.fundamental") : 60117,
  Ry = Ce ? Symbol.for("react.responder") : 60118,
  Py = Ce ? Symbol.for("react.scope") : 60119;
function Je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zu:
        switch (((e = e.type), e)) {
          case bu:
          case qo:
          case Yo:
          case Xo:
          case Go:
          case ei:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Zo:
              case bo:
              case ni:
              case ti:
              case Jo:
                return e;
              default:
                return t;
            }
        }
      case qu:
        return t;
    }
  }
}
function Lp(e) {
  return Je(e) === qo;
}
G.AsyncMode = bu;
G.ConcurrentMode = qo;
G.ContextConsumer = Zo;
G.ContextProvider = Jo;
G.Element = Zu;
G.ForwardRef = bo;
G.Fragment = Yo;
G.Lazy = ni;
G.Memo = ti;
G.Portal = qu;
G.Profiler = Xo;
G.StrictMode = Go;
G.Suspense = ei;
G.isAsyncMode = function (e) {
  return Lp(e) || Je(e) === bu;
};
G.isConcurrentMode = Lp;
G.isContextConsumer = function (e) {
  return Je(e) === Zo;
};
G.isContextProvider = function (e) {
  return Je(e) === Jo;
};
G.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zu;
};
G.isForwardRef = function (e) {
  return Je(e) === bo;
};
G.isFragment = function (e) {
  return Je(e) === Yo;
};
G.isLazy = function (e) {
  return Je(e) === ni;
};
G.isMemo = function (e) {
  return Je(e) === ti;
};
G.isPortal = function (e) {
  return Je(e) === qu;
};
G.isProfiler = function (e) {
  return Je(e) === Xo;
};
G.isStrictMode = function (e) {
  return Je(e) === Go;
};
G.isSuspense = function (e) {
  return Je(e) === ei;
};
G.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Yo ||
    e === qo ||
    e === Xo ||
    e === Go ||
    e === ei ||
    e === jy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ni ||
        e.$$typeof === ti ||
        e.$$typeof === Jo ||
        e.$$typeof === Zo ||
        e.$$typeof === bo ||
        e.$$typeof === Ny ||
        e.$$typeof === Ry ||
        e.$$typeof === Py ||
        e.$$typeof === ky))
  );
};
G.typeOf = Je;
_p.exports = G;
var _y = _p.exports,
  Mp = _y,
  Ly = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  My = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Op = {};
Op[Mp.ForwardRef] = Ly;
Op[Mp.Memo] = My;
var J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var es = Symbol.for("react.element"),
  ts = Symbol.for("react.portal"),
  ri = Symbol.for("react.fragment"),
  li = Symbol.for("react.strict_mode"),
  oi = Symbol.for("react.profiler"),
  ii = Symbol.for("react.provider"),
  ai = Symbol.for("react.context"),
  Oy = Symbol.for("react.server_context"),
  ui = Symbol.for("react.forward_ref"),
  si = Symbol.for("react.suspense"),
  ci = Symbol.for("react.suspense_list"),
  di = Symbol.for("react.memo"),
  fi = Symbol.for("react.lazy"),
  Ty = Symbol.for("react.offscreen"),
  Tp;
Tp = Symbol.for("react.module.reference");
function lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case es:
        switch (((e = e.type), e)) {
          case ri:
          case oi:
          case li:
          case si:
          case ci:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Oy:
              case ai:
              case ui:
              case fi:
              case di:
              case ii:
                return e;
              default:
                return t;
            }
        }
      case ts:
        return t;
    }
  }
}
J.ContextConsumer = ai;
J.ContextProvider = ii;
J.Element = es;
J.ForwardRef = ui;
J.Fragment = ri;
J.Lazy = fi;
J.Memo = di;
J.Portal = ts;
J.Profiler = oi;
J.StrictMode = li;
J.Suspense = si;
J.SuspenseList = ci;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return lt(e) === ai;
};
J.isContextProvider = function (e) {
  return lt(e) === ii;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === es;
};
J.isForwardRef = function (e) {
  return lt(e) === ui;
};
J.isFragment = function (e) {
  return lt(e) === ri;
};
J.isLazy = function (e) {
  return lt(e) === fi;
};
J.isMemo = function (e) {
  return lt(e) === di;
};
J.isPortal = function (e) {
  return lt(e) === ts;
};
J.isProfiler = function (e) {
  return lt(e) === oi;
};
J.isStrictMode = function (e) {
  return lt(e) === li;
};
J.isSuspense = function (e) {
  return lt(e) === si;
};
J.isSuspenseList = function (e) {
  return lt(e) === ci;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ri ||
    e === oi ||
    e === li ||
    e === si ||
    e === ci ||
    e === Ty ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === fi ||
        e.$$typeof === di ||
        e.$$typeof === ii ||
        e.$$typeof === ai ||
        e.$$typeof === ui ||
        e.$$typeof === Tp ||
        e.getModuleId !== void 0))
  );
};
J.typeOf = lt;
function Dy() {
  const e = gy();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        l = t;
      for (; l; ) r.push(l), (l = l.next);
      return r;
    },
    subscribe(r) {
      let l = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const zc = { notify() {}, get: () => [] };
function zy(e, t) {
  let n,
    r = zc;
  function l(m) {
    return u(), r.subscribe(m);
  }
  function o() {
    r.notify();
  }
  function i() {
    h.onStateChange && h.onStateChange();
  }
  function a() {
    return !!n;
  }
  function u() {
    n || ((n = t ? t.addNestedSub(i) : e.subscribe(i)), (r = Dy()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = zc));
  }
  const h = {
    addNestedSub: l,
    notifyNestedSubs: o,
    handleChangeWrapper: i,
    isSubscribed: a,
    trySubscribe: u,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return h;
}
const Iy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $y = Iy ? C.useLayoutEffect : C.useEffect;
function Uy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  noopCheck: o = "once",
}) {
  const i = C.useMemo(() => {
      const s = zy(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: o,
      };
    }, [e, r, l, o]),
    a = C.useMemo(() => e.getState(), [e]);
  $y(() => {
    const { subscription: s } = i;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      a !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [i, a]);
  const u = t || sn;
  return C.createElement(u.Provider, { value: i }, n);
}
function Dp(e = sn) {
  const t = e === sn ? Rp : Ju(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Fy = Dp();
function Ay(e = sn) {
  const t = e === sn ? Fy : Dp(e);
  return function () {
    return t().dispatch;
  };
}
const ot = Ay();
Sy(my.useSyncExternalStoreWithSelector);
yy(Xu.unstable_batchedUpdates);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
var me;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(me || (me = {}));
const Ic = "popstate";
function By(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return dl(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : _n(l);
  }
  return Vy(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Wy() {
  return Math.random().toString(36).substr(2, 8);
}
function $c(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function dl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ie(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ft(t) : t,
      { state: n, key: (t && t.key) || r || Wy() }
    )
  );
}
function _n(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ft(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Vy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = me.Pop,
    u = null,
    s = h();
  s == null && ((s = 0), i.replaceState(ie({}, i.state, { idx: s }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    a = me.Pop;
    let N = h(),
      p = N == null ? null : N - s;
    (s = N), u && u({ action: a, location: g.location, delta: p });
  }
  function d(N, p) {
    a = me.Push;
    let f = dl(g.location, N, p);
    n && n(f, N), (s = h() + 1);
    let y = $c(f, s),
      v = g.createHref(f);
    try {
      i.pushState(y, "", v);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(v);
    }
    o && u && u({ action: a, location: g.location, delta: 1 });
  }
  function w(N, p) {
    a = me.Replace;
    let f = dl(g.location, N, p);
    n && n(f, N), (s = h());
    let y = $c(f, s),
      v = g.createHref(f);
    i.replaceState(y, "", v),
      o && u && u({ action: a, location: g.location, delta: 0 });
  }
  function x(N) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof N == "string" ? N : _n(N);
    return (
      W(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ic, m),
        (u = N),
        () => {
          l.removeEventListener(Ic, m), (u = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: x,
    encodeLocation(N) {
      let p = x(N);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: w,
    go(N) {
      return i.go(N);
    },
  };
  return g;
}
var fe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fe || (fe = {}));
const Hy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Qy(e) {
  return e.index === !0;
}
function Ja(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (W(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Qy(l))
      ) {
        let u = ie({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ie({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = Ja(l.children, t, i, r)), u
        );
      }
    })
  );
}
function Xn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ft(t) : t,
    l = gr(r.pathname || "/", n);
  if (l == null) return null;
  let o = zp(e);
  Yy(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = ng(o[a], og(l));
  return i;
}
function Ky(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function zp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Tt([r, u.relativePath]),
      h = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      zp(o.children, t, h, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: eg(s, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of Ip(o.path)) l(o, i, u);
    }),
    t
  );
}
function Ip(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Ip(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Yy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : tg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Gy = /^:\w+$/,
  Xy = 3,
  Jy = 2,
  Zy = 1,
  qy = 10,
  by = -2,
  Uc = (e) => e === "*";
function eg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Uc) && (r += by),
    t && (r += Jy),
    n
      .filter((l) => !Uc(l))
      .reduce((l, o) => l + (Gy.test(o) ? Xy : o === "" ? Zy : qy), r)
  );
}
function tg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ng(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      h = rg(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = a.route;
    o.push({
      params: r,
      pathname: Tt([l, h.pathname]),
      pathnameBase: sg(Tt([l, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (l = Tt([l, h.pathnameBase]));
  }
  return o;
}
function rg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = lg(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, h, m) => {
      if (h === "*") {
        let d = a[m] || "";
        i = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (s[h] = ig(a[m] || "", h)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function lg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function og(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      fr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ig(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      fr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function gr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ag(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ft(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ug(n, t)) : t,
    search: cg(r),
    hash: dg(l),
  };
}
function ug(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function qi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function pi(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ns(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ft(e))
    : ((l = ie({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        qi("?", "pathname", "search", l)
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        qi("#", "pathname", "hash", l)
      ),
      W(!l.search || !l.search.includes("#"), qi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (r || i == null) a = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let d = i.split("/");
      for (; d[0] === ".."; ) d.shift(), (m -= 1);
      l.pathname = d.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let u = ag(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || h) && (u.pathname += "/"), u;
}
const Tt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  sg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  cg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  dg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class rs {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function $p(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Up = ["post", "put", "patch", "delete"],
  fg = new Set(Up),
  pg = ["get", ...Up],
  hg = new Set(pg),
  mg = new Set([301, 302, 303, 307, 308]),
  vg = new Set([307, 308]),
  bi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  yg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Lr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Fp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function wg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    l = (E) => ({ hasErrorBoundary: S(E) });
  } else l = gg;
  let o = {},
    i = Ja(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = ie({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    h = null,
    m = new Set(),
    d = null,
    w = null,
    x = null,
    g = e.hydrationData != null,
    N = Xn(i, e.history.location, u),
    p = null;
  if (N == null) {
    let S = Ze(404, { pathname: e.history.location.pathname }),
      { matches: E, route: j } = Kc(i);
    (N = E), (p = { [j.id]: S });
  }
  let f =
      !N.some((S) => S.route.lazy) &&
      (!N.some((S) => S.route.loader) || e.hydrationData != null),
    y,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: N,
      initialized: f,
      navigation: bi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = me.Pop,
    _ = !1,
    P,
    T = !1,
    H = !1,
    $ = [],
    xe = [],
    q = new Map(),
    mt = 0,
    Bt = -1,
    Wt = new Map(),
    Ve = new Set(),
    vt = new Map(),
    L = new Map(),
    z = new Map(),
    A = !1;
  function le() {
    return (
      (h = e.history.listen((S) => {
        let { action: E, location: j, delta: M } = S;
        if (A) {
          A = !1;
          return;
        }
        fr(
          z.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let F = xs({
          currentLocation: v.location,
          nextLocation: j,
          historyAction: E,
        });
        if (F && M != null) {
          (A = !0),
            e.history.go(M * -1),
            Sl(F, {
              state: "blocked",
              location: j,
              proceed() {
                Sl(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: j,
                }),
                  e.history.go(M);
              },
              reset() {
                let U = new Map(v.blockers);
                U.set(F, Lr), b({ blockers: U });
              },
            });
          return;
        }
        return pn(E, j);
      })),
      v.initialized || pn(me.Pop, v.location),
      y
    );
  }
  function he() {
    h && h(),
      m.clear(),
      P && P.abort(),
      v.fetchers.forEach((S, E) => gi(E)),
      v.blockers.forEach((S, E) => ws(E));
  }
  function Tn(S) {
    return m.add(S), () => m.delete(S);
  }
  function b(S) {
    (v = ie({}, v, S)), m.forEach((E) => E(v));
  }
  function Ct(S, E) {
    var j, M;
    let F =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        ct(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((j = S.state) == null ? void 0 : j._isRedirect) !== !0,
      U;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (U = E.actionData)
        : (U = null)
      : F
      ? (U = v.actionData)
      : (U = null);
    let B = E.loaderData
        ? Qc(v.loaderData, E.loaderData, E.matches || [], E.errors)
        : v.loaderData,
      I = v.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((oe, Re) => I.set(Re, Lr)));
    let D =
      _ === !0 ||
      (v.navigation.formMethod != null &&
        ct(v.navigation.formMethod) &&
        ((M = S.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      T ||
        k === me.Pop ||
        (k === me.Push
          ? e.history.push(S, S.state)
          : k === me.Replace && e.history.replace(S, S.state)),
      b(
        ie({}, E, {
          actionData: U,
          loaderData: B,
          historyAction: k,
          location: S,
          initialized: !0,
          navigation: bi,
          revalidation: "idle",
          restoreScrollPosition: Es(S, E.matches || v.matches),
          preventScrollReset: D,
          blockers: I,
        })
      ),
      (k = me.Pop),
      (_ = !1),
      (T = !1),
      (H = !1),
      ($ = []),
      (xe = []);
  }
  async function yt(S, E) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let j = Za(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        S,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: M,
        submission: F,
        error: U,
      } = Fc(s.v7_normalizeFormMethod, !1, j, E),
      B = v.location,
      I = dl(v.location, M, E && E.state);
    I = ie({}, I, e.history.encodeLocation(I));
    let D = E && E.replace != null ? E.replace : void 0,
      oe = me.Push;
    D === !0
      ? (oe = me.Replace)
      : D === !1 ||
        (F != null &&
          ct(F.formMethod) &&
          F.formAction === v.location.pathname + v.location.search &&
          (oe = me.Replace));
    let Re =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      K = xs({ currentLocation: B, nextLocation: I, historyAction: oe });
    if (K) {
      Sl(K, {
        state: "blocked",
        location: I,
        proceed() {
          Sl(K, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            yt(S, E);
        },
        reset() {
          let Z = new Map(v.blockers);
          Z.set(K, Lr), b({ blockers: Z });
        },
      });
      return;
    }
    return await pn(oe, I, {
      submission: F,
      pendingError: U,
      preventScrollReset: Re,
      replace: E && E.replace,
    });
  }
  function Dn() {
    if (
      (yi(),
      b({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        pn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      pn(k || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function pn(S, E, j) {
    P && P.abort(),
      (P = null),
      (k = S),
      (T = (j && j.startUninterruptedRevalidation) === !0),
      Sh(v.location, v.matches),
      (_ = (j && j.preventScrollReset) === !0);
    let M = a || i,
      F = j && j.overrideNavigation,
      U = Xn(M, E, u);
    if (!U) {
      let Z = Ze(404, { pathname: E.pathname }),
        { matches: de, route: hn } = Kc(M);
      wi(), Ct(E, { matches: de, loaderData: {}, errors: { [hn.id]: Z } });
      return;
    }
    if (
      v.initialized &&
      !H &&
      jg(v.location, E) &&
      !(j && j.submission && ct(j.submission.formMethod))
    ) {
      Ct(E, { matches: U });
      return;
    }
    P = new AbortController();
    let B = Or(e.history, E, P.signal, j && j.submission),
      I,
      D;
    if (j && j.pendingError) D = { [Jn(U).route.id]: j.pendingError };
    else if (j && j.submission && ct(j.submission.formMethod)) {
      let Z = await hh(B, E, j.submission, U, { replace: j.replace });
      if (Z.shortCircuited) return;
      (I = Z.pendingActionData),
        (D = Z.pendingActionError),
        (F = ea(E, j.submission)),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: oe,
      loaderData: Re,
      errors: K,
    } = await mh(
      B,
      E,
      U,
      F,
      j && j.submission,
      j && j.fetcherSubmission,
      j && j.replace,
      I,
      D
    );
    oe ||
      ((P = null),
      Ct(
        E,
        ie({ matches: U }, I ? { actionData: I } : {}, {
          loaderData: Re,
          errors: K,
        })
      ));
  }
  async function hh(S, E, j, M, F) {
    F === void 0 && (F = {}), yi();
    let U = Pg(E, j);
    b({ navigation: U });
    let B,
      I = ba(M, E);
    if (!I.route.action && !I.route.lazy)
      B = {
        type: fe.error,
        error: Ze(405, {
          method: S.method,
          pathname: E.pathname,
          routeId: I.route.id,
        }),
      };
    else if (((B = await Mr("action", S, I, M, o, l, u)), S.signal.aborted))
      return { shortCircuited: !0 };
    if (rr(B)) {
      let D;
      return (
        F && F.replace != null
          ? (D = F.replace)
          : (D = B.location === v.location.pathname + v.location.search),
        await wr(v, B, { submission: j, replace: D }),
        { shortCircuited: !0 }
      );
    }
    if (Yr(B)) {
      let D = Jn(M, I.route.id);
      return (
        (F && F.replace) !== !0 && (k = me.Push),
        { pendingActionData: {}, pendingActionError: { [D.route.id]: B.error } }
      );
    }
    if (Sn(B)) throw Ze(400, { type: "defer-action" });
    return { pendingActionData: { [I.route.id]: B.data } };
  }
  async function mh(S, E, j, M, F, U, B, I, D) {
    let oe = M || ea(E, F),
      Re = F || U || Xc(oe),
      K = a || i,
      [Z, de] = Ac(e.history, v, j, Re, E, H, $, xe, vt, Ve, K, u, I, D);
    if (
      (wi(
        (X) =>
          !(j && j.some((it) => it.route.id === X)) ||
          (Z && Z.some((it) => it.route.id === X))
      ),
      (Bt = ++mt),
      Z.length === 0 && de.length === 0)
    ) {
      let X = ys();
      return (
        Ct(
          E,
          ie(
            { matches: j, loaderData: {}, errors: D || null },
            I ? { actionData: I } : {},
            X ? { fetchers: new Map(v.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!T) {
      de.forEach((it) => {
        let Ht = v.fetchers.get(it.key),
          ji = Tr(void 0, Ht ? Ht.data : void 0);
        v.fetchers.set(it.key, ji);
      });
      let X = I || v.actionData;
      b(
        ie(
          { navigation: oe },
          X
            ? Object.keys(X).length === 0
              ? { actionData: null }
              : { actionData: X }
            : {},
          de.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
        )
      );
    }
    de.forEach((X) => {
      q.has(X.key) && Vt(X.key), X.controller && q.set(X.key, X.controller);
    });
    let hn = () => de.forEach((X) => Vt(X.key));
    P && P.signal.addEventListener("abort", hn);
    let {
      results: mn,
      loaderResults: xr,
      fetcherResults: xi,
    } = await ms(v.matches, j, Z, de, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener("abort", hn),
      de.forEach((X) => q.delete(X.key));
    let jt = Yc(mn);
    if (jt) {
      if (jt.idx >= Z.length) {
        let X = de[jt.idx - Z.length].key;
        Ve.add(X);
      }
      return await wr(v, jt.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: kt, errors: El } = Hc(v, j, Z, xr, D, de, xi, L);
    L.forEach((X, it) => {
      X.subscribe((Ht) => {
        (Ht || X.done) && L.delete(it);
      });
    });
    let Si = ys(),
      Ei = gs(Bt),
      Ci = Si || Ei || de.length > 0;
    return ie(
      { loaderData: kt, errors: El },
      Ci ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function hs(S) {
    return v.fetchers.get(S) || yg;
  }
  function vh(S, E, j, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    q.has(S) && Vt(S);
    let F = a || i,
      U = Za(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        j,
        E,
        M == null ? void 0 : M.relative
      ),
      B = Xn(F, U, u);
    if (!B) {
      xl(S, E, Ze(404, { pathname: U }));
      return;
    }
    let {
      path: I,
      submission: D,
      error: oe,
    } = Fc(s.v7_normalizeFormMethod, !0, U, M);
    if (oe) {
      xl(S, E, oe);
      return;
    }
    let Re = ba(B, I);
    if (((_ = (M && M.preventScrollReset) === !0), D && ct(D.formMethod))) {
      yh(S, E, I, Re, B, D);
      return;
    }
    vt.set(S, { routeId: E, path: I }), gh(S, E, I, Re, B, D);
  }
  async function yh(S, E, j, M, F, U) {
    if ((yi(), vt.delete(S), !M.route.action && !M.route.lazy)) {
      let ye = Ze(405, { method: U.formMethod, pathname: j, routeId: E });
      xl(S, E, ye);
      return;
    }
    let B = v.fetchers.get(S),
      I = _g(U, B);
    v.fetchers.set(S, I), b({ fetchers: new Map(v.fetchers) });
    let D = new AbortController(),
      oe = Or(e.history, j, D.signal, U);
    q.set(S, D);
    let Re = mt,
      K = await Mr("action", oe, M, F, o, l, u);
    if (oe.signal.aborted) {
      q.get(S) === D && q.delete(S);
      return;
    }
    if (rr(K))
      if ((q.delete(S), Bt > Re)) {
        let ye = In(void 0);
        v.fetchers.set(S, ye), b({ fetchers: new Map(v.fetchers) });
        return;
      } else {
        Ve.add(S);
        let ye = Tr(U);
        return (
          v.fetchers.set(S, ye),
          b({ fetchers: new Map(v.fetchers) }),
          wr(v, K, { fetcherSubmission: U })
        );
      }
    if (Yr(K)) {
      xl(S, E, K.error);
      return;
    }
    if (Sn(K)) throw Ze(400, { type: "defer-action" });
    let Z = v.navigation.location || v.location,
      de = Or(e.history, Z, D.signal),
      hn = a || i,
      mn =
        v.navigation.state !== "idle"
          ? Xn(hn, v.navigation.location, u)
          : v.matches;
    W(mn, "Didn't find any matches after fetcher action");
    let xr = ++mt;
    Wt.set(S, xr);
    let xi = Tr(U, K.data);
    v.fetchers.set(S, xi);
    let [jt, kt] = Ac(
      e.history,
      v,
      mn,
      U,
      Z,
      H,
      $,
      xe,
      vt,
      Ve,
      hn,
      u,
      { [M.route.id]: K.data },
      void 0
    );
    kt
      .filter((ye) => ye.key !== S)
      .forEach((ye) => {
        let Sr = ye.key,
          Cs = v.fetchers.get(Sr),
          Ch = Tr(void 0, Cs ? Cs.data : void 0);
        v.fetchers.set(Sr, Ch),
          q.has(Sr) && Vt(Sr),
          ye.controller && q.set(Sr, ye.controller);
      }),
      b({ fetchers: new Map(v.fetchers) });
    let El = () => kt.forEach((ye) => Vt(ye.key));
    D.signal.addEventListener("abort", El);
    let {
      results: Si,
      loaderResults: Ei,
      fetcherResults: Ci,
    } = await ms(v.matches, mn, jt, kt, de);
    if (D.signal.aborted) return;
    D.signal.removeEventListener("abort", El),
      Wt.delete(S),
      q.delete(S),
      kt.forEach((ye) => q.delete(ye.key));
    let X = Yc(Si);
    if (X) {
      if (X.idx >= jt.length) {
        let ye = kt[X.idx - jt.length].key;
        Ve.add(ye);
      }
      return wr(v, X.result);
    }
    let { loaderData: it, errors: Ht } = Hc(
      v,
      v.matches,
      jt,
      Ei,
      void 0,
      kt,
      Ci,
      L
    );
    if (v.fetchers.has(S)) {
      let ye = In(K.data);
      v.fetchers.set(S, ye);
    }
    let ji = gs(xr);
    v.navigation.state === "loading" && xr > Bt
      ? (W(k, "Expected pending action"),
        P && P.abort(),
        Ct(v.navigation.location, {
          matches: mn,
          loaderData: it,
          errors: Ht,
          fetchers: new Map(v.fetchers),
        }))
      : (b(
          ie(
            { errors: Ht, loaderData: Qc(v.loaderData, it, mn, Ht) },
            ji || kt.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
          )
        ),
        (H = !1));
  }
  async function gh(S, E, j, M, F, U) {
    let B = v.fetchers.get(S),
      I = Tr(U, B ? B.data : void 0);
    v.fetchers.set(S, I), b({ fetchers: new Map(v.fetchers) });
    let D = new AbortController(),
      oe = Or(e.history, j, D.signal);
    q.set(S, D);
    let Re = mt,
      K = await Mr("loader", oe, M, F, o, l, u);
    if (
      (Sn(K) && (K = (await Wp(K, oe.signal, !0)) || K),
      q.get(S) === D && q.delete(S),
      oe.signal.aborted)
    )
      return;
    if (rr(K))
      if (Bt > Re) {
        let de = In(void 0);
        v.fetchers.set(S, de), b({ fetchers: new Map(v.fetchers) });
        return;
      } else {
        Ve.add(S), await wr(v, K);
        return;
      }
    if (Yr(K)) {
      let de = Jn(v.matches, E);
      v.fetchers.delete(S),
        b({
          fetchers: new Map(v.fetchers),
          errors: { [de.route.id]: K.error },
        });
      return;
    }
    W(!Sn(K), "Unhandled fetcher deferred data");
    let Z = In(K.data);
    v.fetchers.set(S, Z), b({ fetchers: new Map(v.fetchers) });
  }
  async function wr(S, E, j) {
    let {
      submission: M,
      fetcherSubmission: F,
      replace: U,
    } = j === void 0 ? {} : j;
    E.revalidate && (H = !0);
    let B = dl(S.location, E.location, { _isRedirect: !0 });
    if ((W(B, "Expected a location on the redirect navigation"), n)) {
      let Z = !1;
      if (E.reloadDocument) Z = !0;
      else if (Fp.test(E.location)) {
        const de = e.history.createURL(E.location);
        Z = de.origin !== t.location.origin || gr(de.pathname, u) == null;
      }
      if (Z) {
        U ? t.location.replace(E.location) : t.location.assign(E.location);
        return;
      }
    }
    P = null;
    let I = U === !0 ? me.Replace : me.Push,
      { formMethod: D, formAction: oe, formEncType: Re } = S.navigation;
    !M && !F && D && oe && Re && (M = Xc(S.navigation));
    let K = M || F;
    if (vg.has(E.status) && K && ct(K.formMethod))
      await pn(I, B, {
        submission: ie({}, K, { formAction: E.location }),
        preventScrollReset: _,
      });
    else {
      let Z = ea(B, M);
      await pn(I, B, {
        overrideNavigation: Z,
        fetcherSubmission: F,
        preventScrollReset: _,
      });
    }
  }
  async function ms(S, E, j, M, F) {
    let U = await Promise.all([
        ...j.map((D) => Mr("loader", F, D, E, o, l, u)),
        ...M.map((D) =>
          D.matches && D.match && D.controller
            ? Mr(
                "loader",
                Or(e.history, D.path, D.controller.signal),
                D.match,
                D.matches,
                o,
                l,
                u
              )
            : { type: fe.error, error: Ze(404, { pathname: D.path }) }
        ),
      ]),
      B = U.slice(0, j.length),
      I = U.slice(j.length);
    return (
      await Promise.all([
        Gc(
          S,
          j,
          B,
          B.map(() => F.signal),
          !1,
          v.loaderData
        ),
        Gc(
          S,
          M.map((D) => D.match),
          I,
          M.map((D) => (D.controller ? D.controller.signal : null)),
          !0
        ),
      ]),
      { results: U, loaderResults: B, fetcherResults: I }
    );
  }
  function yi() {
    (H = !0),
      $.push(...wi()),
      vt.forEach((S, E) => {
        q.has(E) && (xe.push(E), Vt(E));
      });
  }
  function xl(S, E, j) {
    let M = Jn(v.matches, E);
    gi(S), b({ errors: { [M.route.id]: j }, fetchers: new Map(v.fetchers) });
  }
  function gi(S) {
    let E = v.fetchers.get(S);
    q.has(S) && !(E && E.state === "loading" && Wt.has(S)) && Vt(S),
      vt.delete(S),
      Wt.delete(S),
      Ve.delete(S),
      v.fetchers.delete(S);
  }
  function Vt(S) {
    let E = q.get(S);
    W(E, "Expected fetch controller: " + S), E.abort(), q.delete(S);
  }
  function vs(S) {
    for (let E of S) {
      let j = hs(E),
        M = In(j.data);
      v.fetchers.set(E, M);
    }
  }
  function ys() {
    let S = [],
      E = !1;
    for (let j of Ve) {
      let M = v.fetchers.get(j);
      W(M, "Expected fetcher: " + j),
        M.state === "loading" && (Ve.delete(j), S.push(j), (E = !0));
    }
    return vs(S), E;
  }
  function gs(S) {
    let E = [];
    for (let [j, M] of Wt)
      if (M < S) {
        let F = v.fetchers.get(j);
        W(F, "Expected fetcher: " + j),
          F.state === "loading" && (Vt(j), Wt.delete(j), E.push(j));
      }
    return vs(E), E.length > 0;
  }
  function wh(S, E) {
    let j = v.blockers.get(S) || Lr;
    return z.get(S) !== E && z.set(S, E), j;
  }
  function ws(S) {
    v.blockers.delete(S), z.delete(S);
  }
  function Sl(S, E) {
    let j = v.blockers.get(S) || Lr;
    W(
      (j.state === "unblocked" && E.state === "blocked") ||
        (j.state === "blocked" && E.state === "blocked") ||
        (j.state === "blocked" && E.state === "proceeding") ||
        (j.state === "blocked" && E.state === "unblocked") ||
        (j.state === "proceeding" && E.state === "unblocked"),
      "Invalid blocker state transition: " + j.state + " -> " + E.state
    );
    let M = new Map(v.blockers);
    M.set(S, E), b({ blockers: M });
  }
  function xs(S) {
    let { currentLocation: E, nextLocation: j, historyAction: M } = S;
    if (z.size === 0) return;
    z.size > 1 && fr(!1, "A router only supports one blocker at a time");
    let F = Array.from(z.entries()),
      [U, B] = F[F.length - 1],
      I = v.blockers.get(U);
    if (
      !(I && I.state === "proceeding") &&
      B({ currentLocation: E, nextLocation: j, historyAction: M })
    )
      return U;
  }
  function wi(S) {
    let E = [];
    return (
      L.forEach((j, M) => {
        (!S || S(M)) && (j.cancel(), E.push(M), L.delete(M));
      }),
      E
    );
  }
  function xh(S, E, j) {
    if (((d = S), (x = E), (w = j || null), !g && v.navigation === bi)) {
      g = !0;
      let M = Es(v.location, v.matches);
      M != null && b({ restoreScrollPosition: M });
    }
    return () => {
      (d = null), (x = null), (w = null);
    };
  }
  function Ss(S, E) {
    return (
      (w &&
        w(
          S,
          E.map((M) => Ky(M, v.loaderData))
        )) ||
      S.key
    );
  }
  function Sh(S, E) {
    if (d && x) {
      let j = Ss(S, E);
      d[j] = x();
    }
  }
  function Es(S, E) {
    if (d) {
      let j = Ss(S, E),
        M = d[j];
      if (typeof M == "number") return M;
    }
    return null;
  }
  function Eh(S) {
    (o = {}), (a = Ja(S, l, void 0, o));
  }
  return (
    (y = {
      get basename() {
        return u;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      initialize: le,
      subscribe: Tn,
      enableScrollRestoration: xh,
      navigate: yt,
      fetch: vh,
      revalidate: Dn,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: hs,
      deleteFetcher: gi,
      dispose: he,
      getBlocker: wh,
      deleteBlocker: ws,
      _internalFetchControllers: q,
      _internalActiveDeferreds: L,
      _internalSetRoutes: Eh,
    }),
    y
  );
}
function xg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Za(e, t, n, r, l, o, i) {
  let a, u;
  if (o != null && i !== "path") {
    a = [];
    for (let h of t)
      if ((a.push(h), h.route.id === o)) {
        u = h;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let s = ns(
    l || ".",
    pi(a).map((h) => h.pathnameBase),
    gr(e.pathname, n) || e.pathname,
    i === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      u &&
      u.route.index &&
      !ls(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Tt([n, s.pathname])),
    _n(s)
  );
}
function Fc(e, t, n, r) {
  if (!r || !xg(r)) return { path: n };
  if (r.formMethod && !Rg(r.formMethod))
    return { path: n, error: Ze(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ze(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Bp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ct(i)) return l();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((w, x) => {
              let [g, N] = x;
              return (
                "" +
                w +
                g +
                "=" +
                N +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ct(i)) return l();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = qa(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = qa(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Vc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Vc(u));
    } catch {
      return l();
    }
  let h = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ct(h.formMethod)) return { path: n, submission: h };
  let m = Ft(n);
  return (
    t && m.search && ls(m.search) && u.append("index", ""),
    (m.search = "?" + u),
    { path: _n(m), submission: h }
  );
}
function Sg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ac(e, t, n, r, l, o, i, a, u, s, h, m, d, w) {
  let x = w ? Object.values(w)[0] : d ? Object.values(d)[0] : void 0,
    g = e.createURL(t.location),
    N = e.createURL(l),
    p = w ? Object.keys(w)[0] : void 0,
    y = Sg(n, p).filter((k, _) => {
      if (k.route.lazy) return !0;
      if (k.route.loader == null) return !1;
      if (Eg(t.loaderData, t.matches[_], k) || i.some((H) => H === k.route.id))
        return !0;
      let P = t.matches[_],
        T = k;
      return Bc(
        k,
        ie(
          {
            currentUrl: g,
            currentParams: P.params,
            nextUrl: N,
            nextParams: T.params,
          },
          r,
          {
            actionResult: x,
            defaultShouldRevalidate:
              o ||
              g.pathname + g.search === N.pathname + N.search ||
              g.search !== N.search ||
              Ap(P, T),
          }
        )
      );
    }),
    v = [];
  return (
    u.forEach((k, _) => {
      if (!n.some((xe) => xe.route.id === k.routeId)) return;
      let P = Xn(h, k.path, m);
      if (!P) {
        v.push({
          key: _,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(_),
        H = ba(P, k.path),
        $ = !1;
      s.has(_)
        ? ($ = !1)
        : a.includes(_)
        ? ($ = !0)
        : T && T.state !== "idle" && T.data === void 0
        ? ($ = o)
        : ($ = Bc(
            H,
            ie(
              {
                currentUrl: g,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: N,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: x, defaultShouldRevalidate: o }
            )
          )),
        $ &&
          v.push({
            key: _,
            routeId: k.routeId,
            path: k.path,
            matches: P,
            match: H,
            controller: new AbortController(),
          });
    }),
    [y, v]
  );
}
function Eg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Ap(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Bc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Wc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    fr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Hy.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ie({}, t(l), { lazy: void 0 }));
}
async function Mr(e, t, n, r, l, o, i, a) {
  a === void 0 && (a = {});
  let u,
    s,
    h,
    m = (x) => {
      let g,
        N = new Promise((p, f) => (g = f));
      return (
        (h = () => g()),
        t.signal.addEventListener("abort", h),
        Promise.race([
          x({ request: t, params: n.params, context: a.requestContext }),
          N,
        ])
      );
    };
  try {
    let x = n.route[e];
    if (n.route.lazy)
      if (x) {
        let g,
          N = await Promise.all([
            m(x).catch((p) => {
              g = p;
            }),
            Wc(n.route, o, l),
          ]);
        if (g) throw g;
        s = N[0];
      } else if ((await Wc(n.route, o, l), (x = n.route[e]), x)) s = await m(x);
      else if (e === "action") {
        let g = new URL(t.url),
          N = g.pathname + g.search;
        throw Ze(405, { method: t.method, pathname: N, routeId: n.route.id });
      } else return { type: fe.data, data: void 0 };
    else if (x) s = await m(x);
    else {
      let g = new URL(t.url),
        N = g.pathname + g.search;
      throw Ze(404, { pathname: N });
    }
    W(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (x) {
    (u = fe.error), (s = x);
  } finally {
    h && t.signal.removeEventListener("abort", h);
  }
  if (Ng(s)) {
    let x = s.status;
    if (mg.has(x)) {
      let p = s.headers.get("Location");
      if (
        (W(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Fp.test(p))
      )
        p = Za(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, p);
      else if (!a.isStaticRequest) {
        let f = new URL(t.url),
          y = p.startsWith("//") ? new URL(f.protocol + p) : new URL(p),
          v = gr(y.pathname, i) != null;
        y.origin === f.origin && v && (p = y.pathname + y.search + y.hash);
      }
      if (a.isStaticRequest) throw (s.headers.set("Location", p), s);
      return {
        type: fe.redirect,
        status: x,
        location: p,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === fe.error ? fe.error : fe.data, response: s };
    let g,
      N = s.headers.get("Content-Type");
    return (
      N && /\bapplication\/json\b/.test(N)
        ? (g = await s.json())
        : (g = await s.text()),
      u === fe.error
        ? { type: u, error: new rs(x, s.statusText, g), headers: s.headers }
        : { type: fe.data, data: g, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === fe.error) return { type: u, error: s };
  if (kg(s)) {
    var d, w;
    return {
      type: fe.deferred,
      deferredData: s,
      statusCode: (d = s.init) == null ? void 0 : d.status,
      headers:
        ((w = s.init) == null ? void 0 : w.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: fe.data, data: s };
}
function Or(e, t, n, r) {
  let l = e.createURL(Bp(t)).toString(),
    o = { signal: n };
  if (r && ct(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = qa(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function qa(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Vc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Cg(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((h, m) => {
      let d = t[m].route.id;
      if (
        (W(!rr(h), "Cannot handle redirect results in processLoaderData"),
        Yr(h))
      ) {
        let w = Jn(e, d),
          x = h.error;
        r && ((x = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[w.route.id] == null && (i[w.route.id] = x),
          (o[d] = void 0),
          u || ((u = !0), (a = $p(h.error) ? h.error.status : 500)),
          h.headers && (s[d] = h.headers);
      } else
        Sn(h)
          ? (l.set(d, h.deferredData), (o[d] = h.deferredData.data))
          : (o[d] = h.data),
          h.statusCode != null &&
            h.statusCode !== 200 &&
            !u &&
            (a = h.statusCode),
          h.headers && (s[d] = h.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Hc(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = Cg(t, n, r, l, a);
  for (let h = 0; h < o.length; h++) {
    let { key: m, match: d, controller: w } = o[h];
    W(
      i !== void 0 && i[h] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let x = i[h];
    if (!(w && w.signal.aborted))
      if (Yr(x)) {
        let g = Jn(e.matches, d == null ? void 0 : d.route.id);
        (s && s[g.route.id]) || (s = ie({}, s, { [g.route.id]: x.error })),
          e.fetchers.delete(m);
      } else if (rr(x)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (Sn(x)) W(!1, "Unhandled fetcher deferred data");
      else {
        let g = In(x.data);
        e.fetchers.set(m, g);
      }
  }
  return { loaderData: u, errors: s };
}
function Qc(e, t, n, r) {
  let l = ie({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Jn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Kc(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ze(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new rs(e || 500, i, new Error(a), !0)
  );
}
function Yc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (rr(n)) return { result: n, idx: t };
  }
}
function Bp(e) {
  let t = typeof e == "string" ? Ft(e) : e;
  return _n(ie({}, t, { hash: "" }));
}
function jg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Sn(e) {
  return e.type === fe.deferred;
}
function Yr(e) {
  return e.type === fe.error;
}
function rr(e) {
  return (e && e.type) === fe.redirect;
}
function kg(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Ng(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Rg(e) {
  return hg.has(e.toLowerCase());
}
function ct(e) {
  return fg.has(e.toLowerCase());
}
async function Gc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((m) => m.route.id === u.route.id),
      h = s != null && !Ap(s, u) && (o && o[u.route.id]) !== void 0;
    if (Sn(a) && (l || h)) {
      let m = r[i];
      W(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Wp(a, m, l).then((d) => {
          d && (n[i] = d || n[i]);
        });
    }
  }
}
async function Wp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: fe.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: fe.error, error: l };
      }
    return { type: fe.data, data: e.deferredData.data };
  }
}
function ls(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ba(e, t) {
  let n = typeof t == "string" ? Ft(t).search : t.search;
  if (e[e.length - 1].route.index && ls(n || "")) return e[e.length - 1];
  let r = pi(e);
  return r[r.length - 1];
}
function Xc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function ea(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Pg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Tr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function _g(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function In(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jo() {
  return (
    (jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jo.apply(this, arguments)
  );
}
const hi = C.createContext(null),
  os = C.createContext(null),
  On = C.createContext(null),
  mi = C.createContext(null),
  At = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vp = C.createContext(null);
function Lg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  gl() || W(!1);
  let { basename: r, navigator: l } = C.useContext(On),
    { hash: o, pathname: i, search: a } = is(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Tt([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function gl() {
  return C.useContext(mi) != null;
}
function wl() {
  return gl() || W(!1), C.useContext(mi).location;
}
function Hp(e) {
  C.useContext(On).static || C.useLayoutEffect(e);
}
function vi() {
  let { isDataRoute: e } = C.useContext(At);
  return e ? Hg() : Mg();
}
function Mg() {
  gl() || W(!1);
  let e = C.useContext(hi),
    { basename: t, navigator: n } = C.useContext(On),
    { matches: r } = C.useContext(At),
    { pathname: l } = wl(),
    o = JSON.stringify(pi(r).map((u) => u.pathnameBase)),
    i = C.useRef(!1);
  return (
    Hp(() => {
      i.current = !0;
    }),
    C.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let h = ns(u, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : Tt([t, h.pathname])),
          (s.replace ? n.replace : n.push)(h, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const Og = C.createContext(null);
function Tg(e) {
  let t = C.useContext(At).outlet;
  return t && C.createElement(Og.Provider, { value: e }, t);
}
function Qp() {
  let { matches: e } = C.useContext(At),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function is(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(At),
    { pathname: l } = wl(),
    o = JSON.stringify(pi(r).map((i) => i.pathnameBase));
  return C.useMemo(() => ns(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Dg(e, t, n) {
  gl() || W(!1);
  let { navigator: r } = C.useContext(On),
    { matches: l } = C.useContext(At),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = wl(),
    s;
  if (t) {
    var h;
    let g = typeof t == "string" ? Ft(t) : t;
    a === "/" || ((h = g.pathname) != null && h.startsWith(a)) || W(!1),
      (s = g);
  } else s = u;
  let m = s.pathname || "/",
    d = a === "/" ? m : m.slice(a.length) || "/",
    w = Xn(e, { pathname: d }),
    x = Fg(
      w &&
        w.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: Tt([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : Tt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && x
    ? C.createElement(
        mi.Provider,
        {
          value: {
            location: jo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: me.Pop,
          },
        },
        x
      )
    : x;
}
function zg() {
  let e = Vg(),
    t = $p(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    o
  );
}
const Ig = C.createElement(zg, null);
class $g extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          At.Provider,
          { value: this.props.routeContext },
          C.createElement(Vp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ug(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(hi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(At.Provider, { value: t }, r)
  );
}
function Fg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let a = o.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id])
    );
    a >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, u, s) => {
    let h = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
      m = null;
    n && (m = u.route.errorElement || Ig);
    let d = t.concat(o.slice(0, s + 1)),
      w = () => {
        let x;
        return (
          h
            ? (x = m)
            : u.route.Component
            ? (x = C.createElement(u.route.Component, null))
            : u.route.element
            ? (x = u.route.element)
            : (x = a),
          C.createElement(Ug, {
            match: u,
            routeContext: { outlet: a, matches: d, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? C.createElement($g, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: h,
          children: w(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var Kp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Kp || {}),
  ko = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ko || {});
function Ag(e) {
  let t = C.useContext(hi);
  return t || W(!1), t;
}
function Bg(e) {
  let t = C.useContext(os);
  return t || W(!1), t;
}
function Wg(e) {
  let t = C.useContext(At);
  return t || W(!1), t;
}
function Yp(e) {
  let t = Wg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Vg() {
  var e;
  let t = C.useContext(Vp),
    n = Bg(ko.UseRouteError),
    r = Yp(ko.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Hg() {
  let { router: e } = Ag(Kp.UseNavigateStable),
    t = Yp(ko.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Hp(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, jo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Qg = "startTransition",
  Jc = Ah[Qg];
function Kg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = C.useState(n.state),
    { v7_startTransition: i } = r || {},
    a = C.useCallback(
      (m) => {
        i && Jc ? Jc(() => o(m)) : o(m);
      },
      [o, i]
    );
  C.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let u = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (m) => n.navigate(m),
        push: (m, d, w) =>
          n.navigate(m, {
            state: d,
            preventScrollReset: w == null ? void 0 : w.preventScrollReset,
          }),
        replace: (m, d, w) =>
          n.navigate(m, {
            replace: !0,
            state: d,
            preventScrollReset: w == null ? void 0 : w.preventScrollReset,
          }),
      }),
      [n]
    ),
    s = n.basename || "/",
    h = C.useMemo(
      () => ({ router: n, navigator: u, static: !1, basename: s }),
      [n, u, s]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      hi.Provider,
      { value: h },
      C.createElement(
        os.Provider,
        { value: l },
        C.createElement(
          Xg,
          {
            basename: s,
            location: l.location,
            navigationType: l.historyAction,
            navigator: u,
          },
          l.initialized
            ? C.createElement(Yg, { routes: n.routes, state: l })
            : t
        )
      )
    ),
    null
  );
}
function Yg(e) {
  let { routes: t, state: n } = e;
  return Dg(t, void 0, n);
}
function Gg(e) {
  return Tg(e.context);
}
function Xg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = me.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  gl() && W(!1);
  let a = t.replace(/^\/*/, "/"),
    u = C.useMemo(() => ({ basename: a, navigator: o, static: i }), [a, o, i]);
  typeof r == "string" && (r = Ft(r));
  let {
      pathname: s = "/",
      search: h = "",
      hash: m = "",
      state: d = null,
      key: w = "default",
    } = r,
    x = C.useMemo(() => {
      let g = gr(s, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: h, hash: m, state: d, key: w },
            navigationType: l,
          };
    }, [a, s, h, m, d, w, l]);
  return x == null
    ? null
    : C.createElement(
        On.Provider,
        { value: u },
        C.createElement(mi.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function Jg(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pr() {
  return (
    (pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pr.apply(this, arguments)
  );
}
function Gp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Zg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function qg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Zg(e);
}
const bg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  e0 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function t0(e, t) {
  return wg({
    basename: t == null ? void 0 : t.basename,
    future: pr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: By({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || n0(),
    routes: e,
    mapRouteProperties: Jg,
  }).initialize();
}
function n0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = pr({}, t, { errors: r0(t.errors) })), t;
}
function r0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new rs(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const l0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  o0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  i0 = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: h,
      } = t,
      m = Gp(t, bg),
      { basename: d } = C.useContext(On),
      w,
      x = !1;
    if (typeof s == "string" && o0.test(s) && ((w = s), l0))
      try {
        let f = new URL(window.location.href),
          y = s.startsWith("//") ? new URL(f.protocol + s) : new URL(s),
          v = gr(y.pathname, d);
        y.origin === f.origin && v != null
          ? (s = v + y.search + y.hash)
          : (x = !0);
      } catch {}
    let g = Lg(s, { relative: l }),
      N = u0(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: h,
        relative: l,
      });
    function p(f) {
      r && r(f), f.defaultPrevented || N(f);
    }
    return C.createElement(
      "a",
      pr({}, m, { href: w || g, onClick: x || o ? r : p, ref: n, target: u })
    );
  }),
  a0 = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: a,
        to: u,
        children: s,
      } = t,
      h = Gp(t, e0),
      m = is(u, { relative: h.relative }),
      d = wl(),
      w = C.useContext(os),
      { navigator: x } = C.useContext(On),
      g = x.encodeLocation ? x.encodeLocation(m).pathname : m.pathname,
      N = d.pathname,
      p =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    l ||
      ((N = N.toLowerCase()),
      (p = p ? p.toLowerCase() : null),
      (g = g.toLowerCase()));
    let f = N === g || (!i && N.startsWith(g) && N.charAt(g.length) === "/"),
      y =
        p != null &&
        (p === g || (!i && p.startsWith(g) && p.charAt(g.length) === "/")),
      v = f ? r : void 0,
      k;
    typeof o == "function"
      ? (k = o({ isActive: f, isPending: y }))
      : (k = [o, f ? "active" : null, y ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let _ = typeof a == "function" ? a({ isActive: f, isPending: y }) : a;
    return C.createElement(
      i0,
      pr({}, h, { "aria-current": v, className: k, ref: n, style: _, to: u }),
      typeof s == "function" ? s({ isActive: f, isPending: y }) : s
    );
  });
var Zc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Zc || (Zc = {}));
var qc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(qc || (qc = {}));
function u0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    a = vi(),
    u = wl(),
    s = is(e, { relative: i });
  return C.useCallback(
    (h) => {
      if (qg(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : _n(u) === _n(s);
        a(e, { replace: m, state: l, preventScrollReset: o, relative: i });
      }
    },
    [u, a, s, r, l, n, e, o, i]
  );
}
const as = C.createContext();
function s0({ children: e }) {
  const t = C.useRef(),
    [n, r] = C.useState(null),
    [l, o] = C.useState(null),
    a = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        r(null), typeof l == "function" && (o(null), l());
      },
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(as.Provider, { value: a, children: e }),
      c.jsx("div", { ref: t }),
    ],
  });
}
function c0() {
  const { modalRef: e, modalContent: t, closeModal: n } = C.useContext(as);
  return !e || !e.current || !t
    ? null
    : Jv.createPortal(
        c.jsxs("div", {
          id: "modal",
          children: [
            c.jsx("div", { id: "modal-background", onClick: n }),
            c.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current
      );
}
const us = () => C.useContext(as);
function hr({
  modalComponent: e,
  buttonText: t,
  onButtonClick: n,
  onModalClose: r,
  className: l,
}) {
  const { setModalContent: o, setOnModalClose: i } = us(),
    a = () => {
      r && i(r), o(e), typeof n == "function" && n();
    };
  return c.jsx("button", {
    className: l || "primary-btn",
    onClick: a,
    children: t,
  });
}
/*! js-cookie v3.0.5 | MIT */ function Al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var d0 = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function eu(e, t) {
  function n(l, o, i) {
    if (!(typeof document > "u")) {
      (i = Al({}, t, i)),
        typeof i.expires == "number" &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var u in i)
        i[u] &&
          ((a += "; " + u), i[u] !== !0 && (a += "=" + i[u].split(";")[0]));
      return (document.cookie = l + "=" + e.write(o, l) + a);
    }
  }
  function r(l) {
    if (!(typeof document > "u" || (arguments.length && !l))) {
      for (
        var o = document.cookie ? document.cookie.split("; ") : [],
          i = {},
          a = 0;
        a < o.length;
        a++
      ) {
        var u = o[a].split("="),
          s = u.slice(1).join("=");
        try {
          var h = decodeURIComponent(u[0]);
          if (((i[h] = e.read(s, h)), l === h)) break;
        } catch {}
      }
      return l ? i[l] : i;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (l, o) {
        n(l, "", Al({}, o, { expires: -1 }));
      },
      withAttributes: function (l) {
        return eu(this.converter, Al({}, this.attributes, l));
      },
      withConverter: function (l) {
        return eu(Al({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var f0 = eu(d0, { path: "/" });
async function Te(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      ((t.headers["Content-Type"] =
        t.headers["Content-Type"] || "application/json"),
      (t.headers["XSRF-Token"] = f0.get("XSRF-TOKEN")));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const Xp = "session/setUser",
  Jp = "session/removeUser",
  Zp = "session/setUserSpots",
  qp = "session/removeUserSpot",
  ss = (e) => ({ type: Xp, payload: e }),
  p0 = (e) => ({ type: Zp, payload: e }),
  h0 = (e) => ({ type: qp, payload: e }),
  m0 = () => ({ type: Jp }),
  bc = (e) => async (t) => {
    const { credential: n, password: r } = e,
      l = await Te("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential: n, password: r }),
      }),
      o = await l.json();
    return t(ss(o.user)), l;
  },
  v0 = () => async (e) => {
    const t = await Te("/api/session"),
      n = await t.json();
    return e(ss(n.user)), t;
  },
  y0 = (e) => async (t) => {
    const { username: n, firstName: r, lastName: l, email: o, password: i } = e,
      a = await Te("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: l,
          email: o,
          password: i,
        }),
      }),
      u = await a.json();
    return t(ss(u.user)), a;
  },
  g0 = () => async (e) => {
    const t = await Te("/api/spots/current");
    if (t.ok) {
      const n = await t.json(),
        r = {};
      return (
        n.Spots.length > 0 &&
          n.Spots.forEach((l) => {
            r[l.id] = l;
          }),
        e(p0(r)),
        r
      );
    }
    return { error: "Unable to retrieve details." };
  },
  w0 = (e) => async (t) => {
    const n = await Te(`/api/spots/${e}`, { method: "DELETE" });
    return t(h0(e)), n;
  },
  x0 = () => async (e) => {
    const t = await Te("/api/session", { method: "DELETE" });
    return e(m0()), t;
  },
  S0 = { user: null, isLoaded: !1, userSpots: { spots: null, isLoaded: !1 } },
  E0 = (e = S0, t) => {
    switch (t.type) {
      case Xp:
        return { ...e, user: t.payload };
      case Zp:
        return { ...e, userSpots: { spots: { ...t.payload }, isLoaded: !0 } };
      case qp:
        return {
          ...e,
          userSpots: {
            ...e.userSpots,
            spots: { [t.payload]: null },
            isLoaded: !0,
          },
        };
      case Jp:
        return { ...e, user: null };
      default:
        return e;
    }
  };
function C0() {
  const e = ot(),
    [t, n] = C.useState(""),
    [r, l] = C.useState(""),
    [o, i] = C.useState({}),
    { closeModal: a } = us(),
    u = (h) => (
      h.preventDefault(),
      i({}),
      e(bc({ credential: "demo", password: "demolition" }))
        .then(a)
        .catch(async (m) => {
          const d = await m.json();
          d && d.errors && i(d.errors);
        })
    ),
    s = (h) => (
      h.preventDefault(),
      i({}),
      e(bc({ credential: t, password: r }))
        .then(a)
        .catch(async (m) => {
          const d = await m.json();
          d && d.errors && i(d.errors);
        })
    );
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("form", { id: "demo", onSubmit: u }),
      c.jsxs("form", {
        className: "modalForm",
        onSubmit: s,
        children: [
          c.jsx("h1", { children: "Log In" }),
          c.jsxs("div", {
            className: "input-container",
            children: [
              c.jsx("label", { children: "Username or Email" }),
              c.jsx("input", {
                type: "text",
                value: t,
                onChange: (h) => n(h.target.value),
                required: !0,
              }),
            ],
          }),
          c.jsxs("div", {
            className: "input-container",
            children: [
              c.jsx("label", { children: "Password" }),
              c.jsx("input", {
                type: "password",
                value: r,
                onChange: (h) => l(h.target.value),
                required: !0,
              }),
            ],
          }),
          o.credential && c.jsx("p", { children: o.credential }),
          c.jsx("button", {
            disabled: t.length < 4 || r.length < 6,
            className: "primary-btn",
            type: "submit",
            children: "Log In",
          }),
          c.jsx("button", {
            className: "primary-btn",
            form: "demo",
            children: "Log In as Demo User",
          }),
        ],
      }),
    ],
  });
}
function j0() {
  const e = ot(),
    [t, n] = C.useState(""),
    [r, l] = C.useState(""),
    [o, i] = C.useState(""),
    [a, u] = C.useState(""),
    [s, h] = C.useState(""),
    [m, d] = C.useState(""),
    [w, x] = C.useState({}),
    { closeModal: g } = us(),
    N = (p) => (
      p.preventDefault(),
      s === m
        ? (x({}),
          e(
            y0({
              email: t,
              username: r,
              firstName: o,
              lastName: a,
              password: s,
            })
          )
            .then(g)
            .catch(async (f) => {
              const y = await f.json();
              y != null && y.errors && x(y.errors);
            }))
        : x({
            confirmPassword:
              "Confirm Password field must be the same as the Password field",
          })
    );
  return c.jsx(c.Fragment, {
    children: c.jsxs("form", {
      className: "modalForm",
      onSubmit: N,
      children: [
        c.jsx("h1", { children: "Sign Up" }),
        c.jsxs("div", {
          className: "input-container",
          children: [
            c.jsx("label", { children: "Email" }),
            c.jsx("input", {
              type: "text",
              value: t,
              onChange: (p) => n(p.target.value),
              required: !0,
            }),
            w.email && c.jsx("p", { children: w.email }),
          ],
        }),
        c.jsxs("div", {
          className: "input-container",
          children: [
            c.jsx("label", { children: "Username" }),
            c.jsx("input", {
              type: "text",
              value: r,
              onChange: (p) => l(p.target.value),
              required: !0,
            }),
            w.username && c.jsx("p", { children: w.username }),
          ],
        }),
        c.jsxs("div", {
          className: "input-container",
          children: [
            c.jsx("label", { children: "First Name" }),
            c.jsx("input", {
              type: "text",
              value: o,
              onChange: (p) => i(p.target.value),
              required: !0,
            }),
            w.firstName && c.jsx("p", { children: w.firstName }),
          ],
        }),
        c.jsxs("div", {
          className: "input-container",
          children: [
            c.jsx("label", { children: "Last Name" }),
            c.jsx("input", {
              type: "text",
              value: a,
              onChange: (p) => u(p.target.value),
              required: !0,
            }),
            w.lastName && c.jsx("p", { children: w.lastName }),
          ],
        }),
        c.jsxs("div", {
          className: "input-container",
          children: [
            c.jsx("label", { children: "Password" }),
            c.jsx("input", {
              type: "password",
              value: s,
              onChange: (p) => h(p.target.value),
              required: !0,
            }),
            w.password && c.jsx("p", { children: w.password }),
          ],
        }),
        c.jsxs("div", {
          className: "input-container",
          children: [
            c.jsx("label", { children: "Confirm Password" }),
            c.jsx("input", {
              type: "password",
              value: m,
              onChange: (p) => d(p.target.value),
              required: !0,
            }),
            w.confirmPassword && c.jsx("p", { children: w.confirmPassword }),
          ],
        }),
        c.jsx("button", {
          className: "primary-btn",
          type: "submit",
          children: "Sign Up",
        }),
      ],
    }),
  });
}
const k0 = "/assets/huthunt-54e952f3.png";
function ed({ items: e, icon: t }) {
  const [n, r] = C.useState(!1),
    l = C.useRef(),
    o = (a) => {
      a.stopPropagation(), r(!n);
    };
  C.useEffect(() => {
    if (!n) return;
    const a = (u) => {
      l.current && !l.current.contains(u.target) && r(!1);
    };
    return (
      document.addEventListener("click", a),
      () => document.removeEventListener("click", a)
    );
  }, [n]);
  const i = "dropdown-items" + (n ? "" : " hidden");
  return c.jsxs("div", {
    className: "dropdown-container",
    children: [
      c.jsx("a", { className: "dropdown-icon", onClick: o, children: t }),
      c.jsxs("ul", {
        className: i,
        ref: l,
        children: [
          " ",
          e.map((a, u) =>
            c.jsx("li", { className: "dropdown-item", children: a }, u)
          ),
        ],
      }),
    ],
  });
}
var bp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  td = Mt.createContext && Mt.createContext(bp),
  N0 = ["attr", "size", "title"];
function R0(e, t) {
  if (e == null) return {};
  var n = P0(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function P0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function No() {
  return (
    (No = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    No.apply(this, arguments)
  );
}
function nd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ro(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nd(Object(n), !0).forEach(function (r) {
          _0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : nd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _0(e, t, n) {
  return (
    (t = L0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function L0(e) {
  var t = M0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function M0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eh(e) {
  return (
    e &&
    e.map((t, n) =>
      Mt.createElement(t.tag, Ro({ key: n }, t.attr), eh(t.child))
    )
  );
}
function cs(e) {
  return (t) =>
    Mt.createElement(O0, No({ attr: Ro({}, e.attr) }, t), eh(e.child));
}
function O0(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = R0(e, N0),
      a = l || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      Mt.createElement(
        "svg",
        No(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: u,
            style: Ro(Ro({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Mt.createElement("title", null, o),
        e.children
      )
    );
  };
  return td !== void 0
    ? Mt.createElement(td.Consumer, null, (n) => t(n))
    : t(bp);
}
function T0(e) {
  return cs({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z",
        },
        child: [],
      },
    ],
  })(e);
}
function Po(e) {
  return cs({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function D0(e) {
  return cs({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z",
        },
        child: [],
      },
    ],
  })(e);
}
function z0({ isLoaded: e }) {
  const t = Lt((a) => a.session.user),
    n = ot(),
    r = vi(),
    l = (a) => {
      a.preventDefault(), n(x0()), r("/");
    },
    o = () =>
      c.jsx("button", {
        className: "primary-btn",
        onClick: l,
        children: "Logout",
      });
  let i;
  return (
    t
      ? (i = c.jsxs("li", {
          className: "btns",
          children: [
            c.jsx("button", {
              className: "secondary-btn",
              onClick: () => r("/huts/create"),
              children: "List Your Hut",
            }),
            c.jsx(ed, {
              icon: c.jsx(D0, { style: { fontSize: "25px" } }),
              items: [
                `Welcome, ${
                  t.firstName[0].toUpperCase() + t.firstName.slice(1)
                }`,
                t.email,
                c.jsx(
                  "button",
                  {
                    className: "secondary-btn",
                    style: { width: "100%", margin: "5px 0" },
                    onClick: () => r("/huts/manage/huts"),
                    children: "Manage Spots",
                  },
                  1
                ),
                c.jsx(
                  "button",
                  {
                    className: "secondary-btn",
                    style: { width: "100%", margin: "5px 0" },
                    onClick: () => r("/huts/manage/reviews"),
                    children: "Manage Reviews",
                  },
                  2
                ),
                c.jsx(o, {}, 3),
              ],
            }),
          ],
        }))
      : (i = c.jsx("li", {
          className: "btns",
          children: c.jsx(ed, {
            icon: c.jsx(T0, { style: { fontSize: "20px" } }),
            items: [
              c.jsx(
                hr,
                { buttonText: "Log In", modalComponent: c.jsx(C0, {}) },
                1
              ),
              c.jsx(
                hr,
                { buttonText: "Sign Up", modalComponent: c.jsx(j0, {}) },
                2
              ),
            ],
          }),
        })),
    c.jsxs("nav", {
      children: [
        c.jsx("li", {
          children: c.jsx(a0, {
            to: "/",
            children: c.jsx("img", { style: { width: "30%" }, src: k0 }),
          }),
        }),
        e && i,
      ],
    })
  );
}
const th = "spots/setSpots",
  nh = "spots/setCurrentSpot",
  rh = "spots/addSpot",
  I0 = "spots/addImage",
  lh = "spots/resetCurrent",
  $0 = (e) => ({ type: th, payload: e }),
  U0 = (e) => ({ type: nh, payload: e }),
  ds = (e) => ({ type: rh, payload: e }),
  F0 = () => ({ type: lh }),
  A0 = (e) => async (t) => {
    const n = e ? await Te(`/api/spots?page=${e}`) : await Te("/api/spots");
    if (n.ok) {
      const { Spots: r } = await n.json(),
        l = {};
      return (
        r.forEach((o) => {
          l[o.id] = o;
        }),
        t($0(l)),
        l
      );
    }
    return { error: "Unable to retrieve spots. Please try again shortly" };
  },
  B0 = (e) => async (t) => {
    const n = await Te(`/api/spots/${e}`);
    if (n.ok) {
      const r = await n.json();
      return t(U0(r)), r;
    }
    return { error: "Unable to retrieve details." };
  },
  W0 = (e) => async (t) => {
    const n = await Te("/api/spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...e }),
    });
    if (n.ok) {
      const r = await n.json();
      return t(F0()), t(ds(r)), r;
    }
  },
  V0 = (e, t) => async (n) => {
    const r = Object.assign(e, t),
      l = await Te(`/api/spots/${e.id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...r }),
      });
    if (l.ok) {
      const o = await l.json();
      return n(ds(o)), o;
    }
  },
  H0 = (e, t) => async (n) => {
    const r = Object.values(t);
    r.length > 0 &&
      r.forEach(async (l) => {
        const o = await Te(`/api/spots/${e}/images`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(l),
        });
        if (o.ok) {
          const i = await o.json();
          n(ds(i));
        }
      });
  },
  ta = {
    spots: { error: null },
    isLoaded: !1,
    current: { isLoaded: !1, error: null },
  },
  Q0 = (e = ta, t) => {
    switch (t.type) {
      case th:
        return {
          ...e,
          spots: { ...t.payload },
          current: ta.current,
          isLoaded: !0,
        };
      case nh:
        return {
          ...e,
          current: {
            ...t.payload,
            avgStarRating: Number(t.payload.avgStarRating).toFixed(1),
            isLoaded: !0,
          },
        };
      case rh:
        return { ...e, spots: { ...e.spots, [t.payload.id]: t.payload } };
      case I0:
        return { ...e, current: { ...e.current, SpotImages: t.payload } };
      case lh:
        return { ...e, current: ta.current };
      default:
        return e;
    }
  },
  K0 = "/assets/house-48c88c4a.png";
const Y0 = () => {
    const e = ot(),
      [t, n] = C.useState({
        country: "",
        address: "",
        city: "",
        state: "",
        description: "",
        name: "",
        price: "",
      }),
      [r, l] = C.useState({}),
      [o, i] = C.useState({}),
      [a, u] = C.useState(""),
      s = vi(),
      h = async (m) => {
        if (
          (m.preventDefault(),
          t.country || i((d) => ({ ...d, country: "Country is required" })),
          t.address || i((d) => ({ ...d, address: "Address is required" })),
          t.city || i((d) => ({ ...d, city: "City is required" })),
          t.state || i((d) => ({ ...d, state: "State is required" })),
          (!t.description || t.description.length < 30) &&
            i((d) => ({
              ...d,
              description: "Description needs 30 characters or more",
            })),
          t.name || i((d) => ({ ...d, name: "Name is required" })),
          t.price || i((d) => ({ ...d, price: "Price is required" })),
          a || i((d) => ({ ...d, previewImage: "Preview Image is required" })),
          !Object.values(o).length > 0)
        ) {
          const d = await e(W0(t));
          if (!(d != null && d.errors)) {
            const w = await e(H0(d.id, r));
            (w != null && w.errors) || (n({}), s(`/huts/${d.id}`));
          }
        }
        i({});
      };
    return c.jsxs("form", {
      className: "create-spot-form",
      onSubmit: h,
      children: [
        c.jsx("h1", { children: "Create a new Hut" }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Where" }),
            c.jsx("h4", {
              children:
                "Guests will only get your exact address once they booked a reservation.",
            }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Country ",
                    c.jsx("span", { className: "error", children: o.country }),
                  ],
                }),
                c.jsx("input", {
                  type: "text",
                  value: t.country,
                  placeholder: "United States",
                  onChange: ({ target: m }) =>
                    n((d) => ({ ...d, country: m.value })),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Address",
                    c.jsx("span", { className: "error", children: o.address }),
                  ],
                }),
                c.jsx("input", {
                  type: "text",
                  value: t.address,
                  placeholder: "123 Main St",
                  onChange: ({ target: m }) =>
                    n((d) => ({ ...d, address: m.value })),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "multi-form-items",
              children: [
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "City",
                        c.jsx("span", { className: "error", children: o.city }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: t.city,
                      placeholder: "Boston",
                      onChange: ({ target: m }) =>
                        n((d) => ({ ...d, city: m.value })),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "State",
                        c.jsx("span", {
                          className: "error",
                          children: o.state,
                        }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: t.state,
                      placeholder: "MA",
                      onChange: ({ target: m }) =>
                        n((d) => ({ ...d, state: m.value })),
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "multi-form-items",
              children: [
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "Latitude",
                        c.jsx("span", { className: "error", children: o.lat }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: t.lat,
                      placeholder: "32.125623",
                      onChange: ({ target: m }) =>
                        n((d) => ({ ...d, lat: m.value })),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "Longitude",
                        c.jsx("span", { className: "error", children: o.lng }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: t.lng,
                      placeholder: "-42.962523",
                      onChange: ({ target: m }) =>
                        n((d) => ({ ...d, lng: m.value })),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Describe it" }),
            c.jsx("h4", {
              children:
                "Mention the best features of your space, any special amentities like fast wif or parking, and what you love about the neighborhood.",
            }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Description",
                    c.jsx("span", {
                      className: "error",
                      children: o.description,
                    }),
                  ],
                }),
                c.jsx("textarea", {
                  type: "text",
                  value: t.description,
                  placeholder: "Beautiful bungalow right near the beach!",
                  onChange: ({ target: m }) =>
                    n((d) => ({ ...d, description: m.value })),
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Name Your Hut" }),
            c.jsx("h4", {
              children:
                "Catch guests attention with a spot title that highlights what makes your place special.",
            }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Name",
                    c.jsx("span", { className: "error", children: o.name }),
                  ],
                }),
                c.jsx("input", {
                  type: "text",
                  value: t.name,
                  placeholder: "Beach Bungalow",
                  onChange: ({ target: m }) =>
                    n((d) => ({ ...d, name: m.value })),
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Set a Price" }),
            c.jsx("h4", {
              children:
                "Competitive pricing can help your listing stand out and rank higher in search results.",
            }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Price",
                    c.jsx("span", { className: "error", children: o.price }),
                  ],
                }),
                c.jsx("input", {
                  type: "number",
                  value: t.price,
                  placeholder: "124",
                  onChange: ({ target: m }) =>
                    n((d) => ({ ...d, price: m.value })),
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Add Pictures!" }),
            c.jsx("h4", {
              children:
                "Submit a link to at least one photo to publish your spot.",
            }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsx("span", { className: "error", children: o.previewImage }),
                c.jsx("input", {
                  type: "text",
                  placeholder: "Preview Image URL",
                  onChange: ({ target: m }) => {
                    u(m.value),
                      l((d) => ({ ...d, 4: { url: m.value, preview: !0 } }));
                  },
                }),
              ],
            }),
            c.jsx("div", {
              className: "form-item",
              children: c.jsx("input", {
                type: "text",
                placeholder: "Image URL",
                onChange: ({ target: m }) =>
                  l((d) => ({ ...d, 0: { url: m.value, preview: !1 } })),
              }),
            }),
            c.jsx("div", {
              className: "form-item",
              children: c.jsx("input", {
                type: "text",
                placeholder: "Image URL",
                onChange: ({ target: m }) =>
                  l((d) => ({ ...d, 1: { url: m.value, preview: !1 } })),
              }),
            }),
            c.jsx("div", {
              className: "form-item",
              children: c.jsx("input", {
                type: "text",
                placeholder: "Image URL",
                onChange: ({ target: m }) =>
                  l((d) => ({ ...d, 2: { url: m.value, preview: !1 } })),
              }),
            }),
            c.jsx("div", {
              className: "form-item",
              children: c.jsx("input", {
                type: "text",
                placeholder: "Image URL",
                onChange: ({ target: m }) =>
                  l((d) => ({ ...d, 3: { url: m.value, preview: !1 } })),
              }),
            }),
          ],
        }),
        c.jsx("div", {
          children: c.jsx("button", {
            className: "primary-btn",
            children: "Create Hut",
          }),
        }),
      ],
    });
  },
  G0 = ({ spot: e }) => {
    const t = ot(),
      [n, r] = C.useState({}),
      [l, o] = C.useState({}),
      i = async () => {
        if (!Object.values(n).length > 0) {
          const a = await t(V0(e, l));
          a != null && a.errors;
        }
        r({});
      };
    return c.jsxs("form", {
      className: "create-spot-form",
      onSubmit: i,
      children: [
        c.jsx("h1", { children: "Update Your Hut" }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Where" }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Country ",
                    c.jsx("span", { className: "error", children: n.country }),
                  ],
                }),
                c.jsx("input", {
                  type: "text",
                  value: l.country,
                  placeholder: "United States",
                  onChange: ({ target: a }) =>
                    o((u) => ({ ...u, country: a.value })),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Address",
                    c.jsx("span", { className: "error", children: n.address }),
                  ],
                }),
                c.jsx("input", {
                  type: "text",
                  value: l.address,
                  placeholder: "123 Main St",
                  onChange: ({ target: a }) =>
                    o((u) => ({ ...u, address: a.value })),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "multi-form-items",
              children: [
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "City",
                        c.jsx("span", { className: "error", children: n.city }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: l.city,
                      placeholder: "Boston",
                      onChange: ({ target: a }) =>
                        o((u) => ({ ...u, city: a.value })),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "State",
                        c.jsx("span", {
                          className: "error",
                          children: n.state,
                        }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "text",
                      value: l.state,
                      placeholder: "MA",
                      onChange: ({ target: a }) =>
                        o((u) => ({ ...u, state: a.value })),
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "multi-form-items",
              children: [
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "Latitude",
                        c.jsx("span", { className: "error", children: n.lat }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: l.lat,
                      placeholder: "32.125623",
                      onChange: ({ target: a }) =>
                        o((u) => ({ ...u, lat: a.value })),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "form-item",
                  children: [
                    c.jsxs("label", {
                      children: [
                        "Longitude",
                        c.jsx("span", { className: "error", children: n.lng }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: l.lng,
                      placeholder: "-42.962523",
                      onChange: ({ target: a }) =>
                        o((u) => ({ ...u, lng: a.value })),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Describe it" }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Description",
                    c.jsx("span", {
                      className: "error",
                      children: n.description,
                    }),
                  ],
                }),
                c.jsx("textarea", {
                  type: "text",
                  value: l.description,
                  placeholder: "Beautiful bungalow right near the beach!",
                  onChange: ({ target: a }) =>
                    o((u) => ({ ...u, description: a.value })),
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Name Your Hut" }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Name",
                    c.jsx("span", { className: "error", children: n.name }),
                  ],
                }),
                c.jsx("input", {
                  type: "text",
                  value: l.name,
                  placeholder: "Beach Bungalow",
                  onChange: ({ target: a }) =>
                    o((u) => ({ ...u, name: a.value })),
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "form-section",
          children: [
            c.jsx("h2", { children: "Set a Price" }),
            c.jsxs("div", {
              className: "form-item",
              children: [
                c.jsxs("label", {
                  children: [
                    "Price",
                    c.jsx("span", { className: "error", children: n.price }),
                  ],
                }),
                c.jsx("input", {
                  type: "number",
                  value: l.price,
                  placeholder: "124",
                  onChange: ({ target: a }) =>
                    o((u) => ({ ...u, price: a.value })),
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          children: c.jsx("button", {
            className: "primary-btn",
            children: "Update",
          }),
        }),
      ],
    });
  };
const oh = ({ handleSpotDelete: e, handleReviewDelete: t }) =>
    c.jsxs("div", {
      className: "delete-container",
      children: [
        c.jsx("h3", { children: "Confim Delete" }),
        c.jsxs("div", {
          className: "button-container-delete",
          children: [
            c.jsx("button", {
              className: "primary-btn",
              onClick: e || t,
              style: { width: "fit-content" },
              children: "Yes",
            }),
            c.jsx("button", {
              className: "secondary-btn",
              onClick: window.focus(),
              style: { width: "fit-content" },
              children: "No",
            }),
          ],
        }),
      ],
    }),
  ih = ({ spot: e, manage: t }) => {
    const n = vi(),
      r = ot(),
      l = () => {
        n(`/huts/${e.id}`);
      },
      o = async (i) => {
        i.preventDefault(), await r(w0(e.id));
      };
    return e
      ? c.jsxs("div", {
          className: "spot-card",
          children: [
            c.jsxs("div", {
              "aria-describedby": "spot-name",
              onClick: l,
              className: "spot-img-container",
              children: [
                c.jsx("img", {
                  className: "spot-img",
                  src: (e == null ? void 0 : e.previewImage) || K0,
                }),
                c.jsx("div", {
                  role: "tooltip",
                  id: "spot-name",
                  children: e == null ? void 0 : e.name,
                }),
              ],
            }),
            c.jsxs("div", {
              className: "spot-info",
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsxs("p", {
                      children: [
                        e == null ? void 0 : e.city,
                        ", ",
                        e == null ? void 0 : e.state,
                      ],
                    }),
                    c.jsxs("p", {
                      children: ["$", e == null ? void 0 : e.price, "/night"],
                    }),
                  ],
                }),
                c.jsx("p", {
                  className: "spot-star-rating",
                  children:
                    (e == null ? void 0 : e.avgRating) === 0
                      ? "New!"
                      : c.jsxs(c.Fragment, {
                          children: [
                            c.jsx(Po, {}),
                            Number(e == null ? void 0 : e.avgRating).toFixed(1),
                          ],
                        }),
                }),
              ],
            }),
            t &&
              c.jsxs("div", {
                className: "btns-group",
                children: [
                  c.jsx(hr, {
                    buttonText: "Edit",
                    className: "secondary-btn",
                    modalComponent: c.jsx(G0, { spot: e }),
                  }),
                  c.jsx(hr, {
                    buttonText: "Delete",
                    modalComponent: c.jsx(oh, { handleSpotDelete: o }),
                  }),
                ],
              }),
          ],
        })
      : "";
  },
  X0 = () => {
    const e = Lt((i) => Object.values(i.spotState.spots)),
      t = Lt((i) => i.spotState.isLoaded),
      n = ot(),
      [r, l] = C.useState(1),
      o = () =>
        c.jsxs("div", {
          className: "next-page-btns",
          children: [
            c.jsx("button", {
              className: "secondary-btn",
              style: { height: "25px" },
              "data-increment": "-",
              onClick: () => r > 1 && l((i) => i - 1),
              children: "<",
            }),
            c.jsx("p", { children: r }),
            c.jsx("button", {
              style: { height: "25px" },
              className: "secondary-btn",
              "data-increment": "+",
              onClick: () => l((i) => i + 1),
              children: ">",
            }),
          ],
        });
    return (
      C.useEffect(() => {
        n(A0(r));
      }, [n, r]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(o, {}),
          c.jsx("div", {
            className: "spots-container",
            children: t
              ? e.error
                ? c.jsx("h1", { children: e.error })
                : e.map((i, a) => c.jsx(ih, { spot: i }, a))
              : c.jsx("h1", { children: "Loading..." }),
          }),
          c.jsx(o, {}),
        ],
      })
    );
  };
const ah = "reviews/setReviews",
  fs = "reviews/addReview",
  J0 = "reviews/removeReview",
  uh = "reviews/reset",
  ps = (e) => ({ type: ah, payload: e }),
  Z0 = () => ({ type: uh }),
  q0 = (e) => ({ type: fs, payload: e }),
  b0 = (e) => ({ type: fs, payload: e }),
  e1 = (e) => async (t) => {
    const n = await Te(`/api/spots/${e}/reviews`);
    if (n.ok) {
      const r = await n.json(),
        l = {};
      return (
        r.Reviews &&
          r.Reviews.forEach((o) => {
            l[o.id] = o;
          }),
        t(ps(l)),
        l
      );
    }
  },
  t1 = () => async (e) => {
    const t = await Te("/api/reviews/current");
    if (t.ok) {
      const n = await t.json(),
        r = {};
      return (
        n.Reviews &&
          n.Reviews.forEach((l) => {
            r[l.id] = l;
          }),
        e(ps(r)),
        r
      );
    }
  },
  n1 = (e, t) => async (n) => {
    const r = await Te(`/api/spots/${e}/reviews`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t),
    });
    if (r.ok) {
      const o = await r.json();
      return n(q0(o)), o;
    }
    const { errors: l } = await r.json();
    return l;
  },
  r1 = (e) => async (t) => {
    const n = await Te(`/api/reviews/${e}`, { method: "delete" });
    if (n.ok) return t(b0(e));
    const { errors: r } = await n.json();
    return r;
  },
  rd = { reviews: null, isLoaded: !1 },
  l1 = (e = rd, t) => {
    switch (t.type) {
      case ah:
        return { ...e, reviews: { ...t.payload }, isLoaded: !0 };
      case fs:
        return {
          ...e,
          reviews: { ...e.reviews, [t.payload.id]: t.payload },
          isLoaded: !0,
        };
      case J0:
        return { ...e, reviews: { ...e.reviews, [+t.payload]: null } };
      case uh:
        return rd;
      default:
        return e;
    }
  };
const sh = ({ manage: e, review: t }) => {
  const { User: n } = t,
    r = ot(),
    l = async () => {
      await r(r1(t.id));
    };
  return c.jsxs("div", {
    className: "review-container",
    children: [
      c.jsx("h2", {
        children:
          (n == null ? void 0 : n.firstName[0].toUpperCase()) +
            (n == null ? void 0 : n.firstName.slice(1)) || "Happy Renter",
      }),
      t == null ? void 0 : t.review,
      c.jsxs("div", {
        className: "star-container",
        children: [c.jsx(Po, {}), c.jsx("span", { children: t.stars })],
      }),
      e &&
        c.jsx("div", {
          className: "btns-group",
          children: c.jsx(hr, {
            buttonText: "Delete",
            modalComponent: c.jsx(oh, { handleReviewDelete: l }),
          }),
        }),
    ],
  });
};
const o1 = ({ spotId: e }) => {
    const [t, n] = C.useState({ review: "", stars: 5 }),
      r = ot(),
      l = (i) => {
        i.preventDefault(), n((a) => ({ ...a, stars: +i.target.value }));
      },
      o = async () => {
        r(n1(e, t));
      };
    return c.jsxs("form", {
      className: "modalForm",
      onSubmit: o,
      children: [
        c.jsx("h1", { children: "How was your stay?" }),
        c.jsx("div", {
          className: "input-container",
          children: c.jsx("textarea", {
            style: { height: "100px" },
            onChange: (i) => n((a) => ({ ...a, review: i.target.value })),
            value: t.review,
            placeholder: "Leave your review here...",
          }),
        }),
        c.jsxs("div", {
          className: "input-container",
          children: [
            c.jsx("label", { children: "Star Rating" }),
            c.jsxs("select", {
              onChange: l,
              defaultValue: t.stars,
              children: [
                c.jsx("option", { value: 1, children: "1" }),
                c.jsx("option", { value: 2, children: "2" }),
                c.jsx("option", { value: 3, children: "3" }),
                c.jsx("option", { value: 4, children: "4" }),
                c.jsx("option", { value: 5, children: "5" }),
              ],
            }),
          ],
        }),
        c.jsx("button", {
          disabled: t.review.length < 10,
          className: "primary-btn",
          children: "Submit your review",
        }),
      ],
    });
  },
  i1 = () => {
    const { spotId: e } = Qp(),
      t = ot(),
      n = Lt((a) => a.spotState.current),
      r = Lt((a) => a.reviewState.reviews),
      l = Lt((a) => a.session.user),
      o = Lt((a) => a.spotState.current.isLoaded);
    C.useEffect(() => {
      t(ps({})), t(B0(e)), t(e1(e));
    }, [t, e]);
    const i =
      n != null &&
      n.SpotImages &&
      (n == null ? void 0 : n.SpotImages.length) > 0
        ? n == null
          ? void 0
          : n.SpotImages.filter((a) => a.preview === !0)
        : [{ url: "" }];
    return o
      ? n.error
        ? c.jsx("h2", { children: n.error })
        : c.jsxs("div", {
            className: "spot-detail-container",
            children: [
              c.jsx("h1", { children: n.name }),
              c.jsx("h3", { children: `${n.city}, ${n.state}, ${n.country}` }),
              c.jsxs("div", {
                className: "img-container",
                children: [
                  c.jsx("img", {
                    className: "main-preview-img",
                    src: i[0].url,
                  }),
                  c.jsx("div", {
                    className: "img-small-container",
                    children: n.SpotImages.map((a, u) => {
                      if (!a.preview)
                        return c.jsx(
                          "div",
                          {
                            className: "small-img-container",
                            children: c.jsx("img", { src: a.url }, a.id),
                          },
                          u
                        );
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "spot-info-container",
                children: [
                  c.jsxs("div", {
                    className: "spot-info",
                    children: [
                      c.jsx("h2", {
                        children: `Hosted by ${n.Owner.firstName} ${n.Owner.lastName}`,
                      }),
                      c.jsx("p", { children: n.description }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "spot-reserve-container",
                    children: c.jsxs("div", {
                      className: "spot-reserve-card",
                      children: [
                        c.jsxs("div", {
                          className: "spot-reserve-info",
                          children: [
                            c.jsxs("p", {
                              className: "spot-price",
                              children: [
                                c.jsx("span", { children: `$${n.price}` }),
                                "night",
                              ],
                            }),
                            c.jsxs("div", {
                              className: "spot-reserve-review-info",
                              children: [
                                c.jsxs("div", {
                                  children: [
                                    c.jsx(Po, {}),
                                    n.avgStarRating <= 0
                                      ? "New"
                                      : n.avgStarRating,
                                  ],
                                }),
                                "•",
                                c.jsxs("div", {
                                  children: [
                                    n.numReviews,
                                    " ",
                                    n.numReviews === 1 ? "review" : "reviews",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx("button", {
                          className: "primary-btn",
                          onClick: () => alert("Feature Coming Soon.."),
                          children: "Reserve",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              r &&
                c.jsxs("div", {
                  className: "reviews-container",
                  children: [
                    c.jsxs("h2", {
                      children: [
                        c.jsx(Po, {}),
                        n.numReviews > 0
                          ? `${n.avgStarRating} • ${n.numReviews} ${
                              n.numReviews === 1 ? "review" : "reviews"
                            }`
                          : "New",
                      ],
                    }),
                    c.jsx("div", {
                      style: { width: "fit-content" },
                      children:
                        l &&
                        n.Owner.id !== l.id &&
                        !Object.values(r).find((a) => a.userId === l.id) &&
                        c.jsx(hr, {
                          buttonText: "Post Your Review",
                          modalComponent: c.jsx(o1, { spotId: n.id }),
                        }),
                    }),
                    Object.values(r).length === 0 && l && n.Owner.id !== l.id
                      ? c.jsx("h3", {
                          children: "Be the first one to post a review!",
                        })
                      : Object.values(r).map((a) =>
                          c.jsx(sh, { review: a }, a.id)
                        ),
                  ],
                }),
            ],
          })
      : c.jsx("h1", { children: "Loading..." });
  };
const a1 = () => {
  const { type: e } = Qp(),
    t = ot(),
    n = Lt((i) => i.session.userSpots),
    r = Lt((i) => i.reviewState);
  C.useEffect(() => {
    t(Z0()), t(e === "huts" ? g0() : t1());
  }, [t, e]);
  const l = () =>
      c.jsxs("div", {
        className: "management-container",
        children: [
          c.jsx("h1", { children: "Manage Your Reviews" }),
          c.jsx("div", {
            className: "manage-review-cards",
            children: r.isLoaded
              ? Object.keys(r.reviews).length > 0
                ? Object.values(r.reviews).map((i, a) =>
                    c.jsx(sh, { manage: !0, review: i }, a)
                  )
                : c.jsx("h2", {
                    children: "Please visit a spot to post a review",
                  })
              : c.jsx("h1", { children: "Loading..." }),
          }),
        ],
      }),
    o = () =>
      c.jsxs("div", {
        className: "management-container",
        children: [
          c.jsx("h1", { children: "Manage Your Huts" }),
          c.jsx("div", {
            className: "manage-spot-cards",
            children: n.isLoaded
              ? n
                ? Object.values(n.spots).map((i, a) =>
                    c.jsx(ih, { manage: !0, spot: i }, a)
                  )
                : c.jsxs("h2", { children: ["You have no huts :", "("] })
              : c.jsx("h1", { children: "Loading..." }),
          }),
        ],
      });
  return c.jsx(c.Fragment, {
    children: e === "huts" ? c.jsx(o, {}) : c.jsx(l, {}),
  });
};
function u1() {
  const e = ot(),
    [t, n] = C.useState(!1);
  return (
    C.useEffect(() => {
      e(v0()).then(() => {
        n(!0);
      });
    }, [e]),
    c.jsxs(c.Fragment, {
      children: [c.jsx(z0, { isLoaded: t }), t && c.jsx(Gg, {})],
    })
  );
}
const s1 = t0([
  {
    element: c.jsx(u1, {}),
    children: [
      { path: "/", element: c.jsx(X0, {}) },
      { path: "/huts/create", element: c.jsx(Y0, {}) },
      { path: "/huts/manage/:type", element: c.jsx(a1, {}) },
      { path: "/huts/:spotId", element: c.jsx(i1, {}) },
    ],
  },
]);
function c1() {
  return c.jsx(Kg, { router: s1 });
}
function fl(e) {
  "@babel/helpers - typeof";
  return (
    (fl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fl(e)
  );
}
function d1(e, t) {
  if (fl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (fl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function f1(e) {
  var t = d1(e, "string");
  return fl(t) === "symbol" ? t : String(t);
}
function p1(e, t, n) {
  return (
    (t = f1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ld(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ld(Object(n), !0).forEach(function (r) {
          p1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ld(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Le(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var id = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  na = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  _o = {
    INIT: "@@redux/INIT" + na(),
    REPLACE: "@@redux/REPLACE" + na(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + na();
    },
  };
function h1(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ch(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Le(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Le(1));
    return n(ch)(e, t);
  }
  if (typeof e != "function") throw new Error(Le(2));
  var l = e,
    o = t,
    i = [],
    a = i,
    u = !1;
  function s() {
    a === i && (a = i.slice());
  }
  function h() {
    if (u) throw new Error(Le(3));
    return o;
  }
  function m(g) {
    if (typeof g != "function") throw new Error(Le(4));
    if (u) throw new Error(Le(5));
    var N = !0;
    return (
      s(),
      a.push(g),
      function () {
        if (N) {
          if (u) throw new Error(Le(6));
          (N = !1), s();
          var f = a.indexOf(g);
          a.splice(f, 1), (i = null);
        }
      }
    );
  }
  function d(g) {
    if (!h1(g)) throw new Error(Le(7));
    if (typeof g.type > "u") throw new Error(Le(8));
    if (u) throw new Error(Le(9));
    try {
      (u = !0), (o = l(o, g));
    } finally {
      u = !1;
    }
    for (var N = (i = a), p = 0; p < N.length; p++) {
      var f = N[p];
      f();
    }
    return g;
  }
  function w(g) {
    if (typeof g != "function") throw new Error(Le(10));
    (l = g), d({ type: _o.REPLACE });
  }
  function x() {
    var g,
      N = m;
    return (
      (g = {
        subscribe: function (f) {
          if (typeof f != "object" || f === null) throw new Error(Le(11));
          function y() {
            f.next && f.next(h());
          }
          y();
          var v = N(y);
          return { unsubscribe: v };
        },
      }),
      (g[id] = function () {
        return this;
      }),
      g
    );
  }
  return (
    d({ type: _o.INIT }),
    (r = { dispatch: d, subscribe: m, getState: h, replaceReducer: w }),
    (r[id] = x),
    r
  );
}
function m1(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: _o.INIT });
    if (typeof r > "u") throw new Error(Le(12));
    if (typeof n(void 0, { type: _o.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Le(13));
  });
}
function v1(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var o = Object.keys(n),
    i;
  try {
    m1(n);
  } catch (a) {
    i = a;
  }
  return function (u, s) {
    if ((u === void 0 && (u = {}), i)) throw i;
    for (var h = !1, m = {}, d = 0; d < o.length; d++) {
      var w = o[d],
        x = n[w],
        g = u[w],
        N = x(g, s);
      if (typeof N > "u") throw (s && s.type, new Error(Le(14)));
      (m[w] = N), (h = h || N !== g);
    }
    return (h = h || o.length !== Object.keys(u).length), h ? m : u;
  };
}
function y1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, l) {
        return function () {
          return r(l.apply(void 0, arguments));
        };
      });
}
function g1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        o = function () {
          throw new Error(Le(15));
        },
        i = {
          getState: l.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        a = t.map(function (u) {
          return u(i);
        });
      return (
        (o = y1.apply(void 0, a)(l.dispatch)),
        od(od({}, l), {}, { dispatch: o })
      );
    };
  };
}
function dh(e) {
  var t = function (r) {
    var l = r.dispatch,
      o = r.getState;
    return function (i) {
      return function (a) {
        return typeof a == "function" ? a(l, o, e) : i(a);
      };
    };
  };
  return t;
}
var fh = dh();
fh.withExtraArgument = dh;
const w1 = fh,
  x1 = v1({ session: E0, spotState: Q0, reviewState: l1 });
let ph;
ph = g1(w1);
const S1 = (e) => ch(x1, e, ph),
  E1 = S1();
ra.createRoot(document.getElementById("root")).render(
  c.jsx(Mt.StrictMode, {
    children: c.jsx(s0, {
      children: c.jsxs(Uy, {
        store: E1,
        children: [c.jsx(c1, {}), c.jsx(c0, {})],
      }),
    }),
  })
);
