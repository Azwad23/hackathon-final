(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function H_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var kh = { exports: {} },
  la = {},
  Th = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gs = Symbol.for("react.element"),
  W_ = Symbol.for("react.portal"),
  V_ = Symbol.for("react.fragment"),
  G_ = Symbol.for("react.strict_mode"),
  Y_ = Symbol.for("react.profiler"),
  q_ = Symbol.for("react.provider"),
  K_ = Symbol.for("react.context"),
  X_ = Symbol.for("react.forward_ref"),
  Q_ = Symbol.for("react.suspense"),
  J_ = Symbol.for("react.memo"),
  Z_ = Symbol.for("react.lazy"),
  jd = Symbol.iterator;
function ev(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jd && e[jd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ih = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ch = Object.assign,
  xh = {};
function li(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = xh),
    (this.updater = n || Ih));
}
li.prototype.isReactComponent = {};
li.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
li.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rh() {}
Rh.prototype = li.prototype;
function rc(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = xh),
    (this.updater = n || Ih));
}
var ic = (rc.prototype = new Rh());
ic.constructor = rc;
Ch(ic, li.prototype);
ic.isPureReactComponent = !0;
var Hd = Array.isArray,
  Nh = Object.prototype.hasOwnProperty,
  sc = { current: null },
  Mh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Nh.call(t, r) && !Mh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: gs,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: sc.current,
  };
}
function tv(e, t) {
  return {
    $$typeof: gs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function oc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gs;
}
function nv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wd = /\/+/g;
function Ja(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? nv("" + e.key)
    : t.toString(36);
}
function ao(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gs:
          case W_:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ja(o, 0) : r),
      Hd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Wd, "$&/") + "/"),
          ao(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (oc(i) &&
            (i = tv(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Wd, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Hd(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Ja(s, a);
      o += ao(s, t, n, l, i);
    }
  else if (((l = ev(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + Ja(s, a++)), (o += ao(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Ds(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ao(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function rv(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  lo = { transition: null },
  iv = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: lo,
    ReactCurrentOwner: sc,
  };
function Dh() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Ds,
  forEach: function (e, t, n) {
    Ds(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ds(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ds(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
z.Component = li;
z.Fragment = V_;
z.Profiler = Y_;
z.PureComponent = rc;
z.StrictMode = G_;
z.Suspense = Q_;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iv;
z.act = Dh;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ch({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = sc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Nh.call(t, l) &&
        !Mh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: gs, type: e.type, key: i, ref: s, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: K_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: q_, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Oh;
z.createFactory = function (e) {
  var t = Oh.bind(null, e);
  return ((t.type = e), t);
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: X_, render: e };
};
z.isValidElement = oc;
z.lazy = function (e) {
  return { $$typeof: Z_, _payload: { _status: -1, _result: e }, _init: rv };
};
z.memo = function (e, t) {
  return { $$typeof: J_, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = lo.transition;
  lo.transition = {};
  try {
    e();
  } finally {
    lo.transition = t;
  }
};
z.unstable_act = Dh;
z.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Ve.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
z.useId = function () {
  return Ve.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Ve.current.useRef(e);
};
z.useState = function (e) {
  return Ve.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Ve.current.useTransition();
};
z.version = "18.3.1";
Th.exports = z;
var Ie = Th.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sv = Ie,
  ov = Symbol.for("react.element"),
  av = Symbol.for("react.fragment"),
  lv = Object.prototype.hasOwnProperty,
  uv = sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ah(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) lv.call(t, r) && !cv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: ov,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: uv.current,
  };
}
la.Fragment = av;
la.jsx = Ah;
la.jsxs = Ah;
kh.exports = la;
var P = kh.exports,
  Pl = {},
  bh = { exports: {} },
  at = {},
  Ph = { exports: {} },
  Lh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, O) {
    var A = x.length;
    x.push(O);
    e: for (; 0 < A; ) {
      var re = (A - 1) >>> 1,
        ie = x[re];
      if (0 < i(ie, O)) ((x[re] = O), (x[A] = ie), (A = re));
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var O = x[0],
      A = x.pop();
    if (A !== O) {
      x[0] = A;
      e: for (var re = 0, ie = x.length, et = ie >>> 1; re < et; ) {
        var Ye = 2 * (re + 1) - 1,
          jt = x[Ye],
          _t = Ye + 1,
          on = x[_t];
        if (0 > i(jt, A))
          _t < ie && 0 > i(on, jt)
            ? ((x[re] = on), (x[_t] = A), (re = _t))
            : ((x[re] = jt), (x[Ye] = A), (re = Ye));
        else if (_t < ie && 0 > i(on, A))
          ((x[re] = on), (x[_t] = A), (re = _t));
        else break e;
      }
    }
    return O;
  }
  function i(x, O) {
    var A = x.sortIndex - O.sortIndex;
    return A !== 0 ? A : x.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    g = !1,
    _ = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(x) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= x)
        (r(u), (O.sortIndex = O.expirationTime), t(l, O));
      else break;
      O = n(u);
    }
  }
  function v(x) {
    if (((_ = !1), y(x), !g))
      if (n(l) !== null) ((g = !0), V(w));
      else {
        var O = n(u);
        O !== null && Ae(v, O.startTime - x);
      }
  }
  function w(x, O) {
    ((g = !1), _ && ((_ = !1), h(C), (C = -1)), (p = !0));
    var A = f;
    try {
      for (
        y(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (x && !$()));
      ) {
        var re = d.callback;
        if (typeof re == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var ie = re(d.expirationTime <= O);
          ((O = e.unstable_now()),
            typeof ie == "function" ? (d.callback = ie) : d === n(l) && r(l),
            y(O));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var et = !0;
      else {
        var Ye = n(u);
        (Ye !== null && Ae(v, Ye.startTime - O), (et = !1));
      }
      return et;
    } finally {
      ((d = null), (f = A), (p = !1));
    }
  }
  var k = !1,
    T = null,
    C = -1,
    N = 5,
    R = -1;
  function $() {
    return !(e.unstable_now() - R < N);
  }
  function ne() {
    if (T !== null) {
      var x = e.unstable_now();
      R = x;
      var O = !0;
      try {
        O = T(!0, x);
      } finally {
        O ? le() : ((k = !1), (T = null));
      }
    } else k = !1;
  }
  var le;
  if (typeof m == "function")
    le = function () {
      m(ne);
    };
  else if (typeof MessageChannel < "u") {
    var _e = new MessageChannel(),
      $e = _e.port2;
    ((_e.port1.onmessage = ne),
      (le = function () {
        $e.postMessage(null);
      }));
  } else
    le = function () {
      E(ne, 0);
    };
  function V(x) {
    ((T = x), k || ((k = !0), le()));
  }
  function Ae(x, O) {
    C = E(function () {
      x(e.unstable_now());
    }, O);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), V(w));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (N = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (x) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var A = f;
      f = O;
      try {
        return x();
      } finally {
        f = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, O) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var A = f;
      f = x;
      try {
        return O();
      } finally {
        f = A;
      }
    }),
    (e.unstable_scheduleCallback = function (x, O, A) {
      var re = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? re + A : re))
          : (A = re),
        x)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = A + ie),
        (x = {
          id: c++,
          callback: O,
          priorityLevel: x,
          startTime: A,
          expirationTime: ie,
          sortIndex: -1,
        }),
        A > re
          ? ((x.sortIndex = A),
            t(u, x),
            n(l) === null &&
              x === n(u) &&
              (_ ? (h(C), (C = -1)) : (_ = !0), Ae(v, A - re)))
          : ((x.sortIndex = ie), t(l, x), g || p || ((g = !0), V(w))),
        x
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (x) {
      var O = f;
      return function () {
        var A = f;
        f = O;
        try {
          return x.apply(this, arguments);
        } finally {
          f = A;
        }
      };
    }));
})(Lh);
Ph.exports = Lh;
var dv = Ph.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fv = Ie,
  st = dv;
function I(e) {
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
var Fh = new Set(),
  qi = {};
function lr(e, t) {
  (Vr(e, t), Vr(e + "Capture", t));
}
function Vr(e, t) {
  for (qi[e] = t, e = 0; e < t.length; e++) Fh.add(t[e]);
}
var Jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ll = Object.prototype.hasOwnProperty,
  pv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vd = {},
  Gd = {};
function hv(e) {
  return Ll.call(Gd, e)
    ? !0
    : Ll.call(Vd, e)
      ? !1
      : pv.test(e)
        ? (Gd[e] = !0)
        : ((Vd[e] = !0), !1);
}
function mv(e, t, n, r) {
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
function gv(e, t, n, r) {
  if (t === null || typeof t > "u" || mv(e, t, n, r)) return !0;
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
function Ge(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  De[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  De[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  De[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  De[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  De[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  De[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  De[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ac = /[\-:]([a-z])/g;
function lc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ac, lc);
    De[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ac, lc);
    De[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ac, lc);
  De[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  De[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  De[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uc(e, t, n, r) {
  var i = De.hasOwnProperty(t) ? De[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gv(t, n, i, r) && (n = null),
    r || i === null
      ? hv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var sn = fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  As = Symbol.for("react.element"),
  _r = Symbol.for("react.portal"),
  vr = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  Fl = Symbol.for("react.profiler"),
  $h = Symbol.for("react.provider"),
  zh = Symbol.for("react.context"),
  dc = Symbol.for("react.forward_ref"),
  $l = Symbol.for("react.suspense"),
  zl = Symbol.for("react.suspense_list"),
  fc = Symbol.for("react.memo"),
  ln = Symbol.for("react.lazy"),
  Bh = Symbol.for("react.offscreen"),
  Yd = Symbol.iterator;
function yi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yd && e[Yd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  Za;
function Ri(e) {
  if (Za === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Za = (t && t[1]) || "";
    }
  return (
    `
` +
    Za +
    e
  );
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((el = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ri(e) : "";
}
function yv(e) {
  switch (e.tag) {
    case 5:
      return Ri(e.type);
    case 16:
      return Ri("Lazy");
    case 13:
      return Ri("Suspense");
    case 19:
      return Ri("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = tl(e.type, !1)), e);
    case 11:
      return ((e = tl(e.type.render, !1)), e);
    case 1:
      return ((e = tl(e.type, !0)), e);
    default:
      return "";
  }
}
function Bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vr:
      return "Fragment";
    case _r:
      return "Portal";
    case Fl:
      return "Profiler";
    case cc:
      return "StrictMode";
    case $l:
      return "Suspense";
    case zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zh:
        return (e.displayName || "Context") + ".Consumer";
      case $h:
        return (e._context.displayName || "Context") + ".Provider";
      case dc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fc:
        return (
          (t = e.displayName || null),
          t !== null ? t : Bl(e.type) || "Memo"
        );
      case ln:
        ((t = e._payload), (e = e._init));
        try {
          return Bl(e(t));
        } catch {}
    }
  return null;
}
function _v(e) {
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
      return Bl(t);
    case 8:
      return t === cc ? "StrictMode" : "Mode";
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
function Mn(e) {
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
function Uh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vv(e) {
  var t = Uh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function bs(e) {
  e._valueTracker || (e._valueTracker = vv(e));
}
function jh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ul(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Hh(e, t) {
  ((t = t.checked), t != null && uc(e, "checked", t, !1));
}
function jl(e, t) {
  Hh(e, t);
  var n = Mn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Hl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hl(e, t.type, Mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Kd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Hl(e, t, n) {
  (t !== "number" || wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ni = Array.isArray;
function Lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Mn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (Ni(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Mn(n) };
}
function Wh(e, t) {
  var n = Mn(t.value),
    r = Mn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Qd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ps,
  Gh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ps = Ps || document.createElement("div"),
          Ps.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ps.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ki(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ai = {
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
  Sv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ai).forEach(function (e) {
  Sv.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ai[t] = Ai[e]));
  });
});
function Yh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ai.hasOwnProperty(e) && Ai[e])
      ? ("" + t).trim()
      : t + "px";
}
function qh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Yh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Ev = fe(
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
  },
);
function Gl(e, t) {
  if (t) {
    if (Ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Yl(e, t) {
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
var ql = null;
function pc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Kl = null,
  Fr = null,
  $r = null;
function Jd(e) {
  if ((e = vs(e))) {
    if (typeof Kl != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = pa(t)), Kl(e.stateNode, e.type, t));
  }
}
function Kh(e) {
  Fr ? ($r ? $r.push(e) : ($r = [e])) : (Fr = e);
}
function Xh() {
  if (Fr) {
    var e = Fr,
      t = $r;
    if ((($r = Fr = null), Jd(e), t)) for (e = 0; e < t.length; e++) Jd(t[e]);
  }
}
function Qh(e, t) {
  return e(t);
}
function Jh() {}
var nl = !1;
function Zh(e, t, n) {
  if (nl) return e(t, n);
  nl = !0;
  try {
    return Qh(e, t, n);
  } finally {
    ((nl = !1), (Fr !== null || $r !== null) && (Jh(), Xh()));
  }
}
function Xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pa(n);
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Xl = !1;
if (Jt)
  try {
    var _i = {};
    (Object.defineProperty(_i, "passive", {
      get: function () {
        Xl = !0;
      },
    }),
      window.addEventListener("test", _i, _i),
      window.removeEventListener("test", _i, _i));
  } catch {
    Xl = !1;
  }
function wv(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var bi = !1,
  ko = null,
  To = !1,
  Ql = null,
  kv = {
    onError: function (e) {
      ((bi = !0), (ko = e));
    },
  };
function Tv(e, t, n, r, i, s, o, a, l) {
  ((bi = !1), (ko = null), wv.apply(kv, arguments));
}
function Iv(e, t, n, r, i, s, o, a, l) {
  if ((Tv.apply(this, arguments), bi)) {
    if (bi) {
      var u = ko;
      ((bi = !1), (ko = null));
    } else throw Error(I(198));
    To || ((To = !0), (Ql = u));
  }
}
function ur(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function em(e) {
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
function Zd(e) {
  if (ur(e) !== e) throw Error(I(188));
}
function Cv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ur(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Zd(i), e);
        if (s === r) return (Zd(i), t);
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function tm(e) {
  return ((e = Cv(e)), e !== null ? nm(e) : null);
}
function nm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rm = st.unstable_scheduleCallback,
  ef = st.unstable_cancelCallback,
  xv = st.unstable_shouldYield,
  Rv = st.unstable_requestPaint,
  ye = st.unstable_now,
  Nv = st.unstable_getCurrentPriorityLevel,
  hc = st.unstable_ImmediatePriority,
  im = st.unstable_UserBlockingPriority,
  Io = st.unstable_NormalPriority,
  Mv = st.unstable_LowPriority,
  sm = st.unstable_IdlePriority,
  ua = null,
  zt = null;
function Ov(e) {
  if (zt && typeof zt.onCommitFiberRoot == "function")
    try {
      zt.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : bv,
  Dv = Math.log,
  Av = Math.LN2;
function bv(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Dv(e) / Av) | 0)) | 0);
}
var Ls = 64,
  Fs = 4194304;
function Mi(e) {
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
function Co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Mi(a)) : ((s &= o), s !== 0 && (r = Mi(s)));
  } else ((o = n & ~i), o !== 0 ? (r = Mi(o)) : s !== 0 && (r = Mi(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ct(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Pv(e, t) {
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
function Lv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - Ct(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = Pv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function Jl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function om() {
  var e = Ls;
  return ((Ls <<= 1), !(Ls & 4194240) && (Ls = 64), e);
}
function rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ct(t)),
    (e[t] = n));
}
function Fv(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ct(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function mc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ct(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var K = 0;
function am(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var lm,
  gc,
  um,
  cm,
  dm,
  Zl = !1,
  $s = [],
  Sn = null,
  En = null,
  wn = null,
  Qi = new Map(),
  Ji = new Map(),
  hn = [],
  $v =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function tf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      En = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      Qi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ji.delete(t.pointerId);
  }
}
function vi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = vs(t)), t !== null && gc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function zv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Sn = vi(Sn, e, t, n, r, i)), !0);
    case "dragenter":
      return ((En = vi(En, e, t, n, r, i)), !0);
    case "mouseover":
      return ((wn = vi(wn, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Qi.set(s, vi(Qi.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Ji.set(s, vi(Ji.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function fm(e) {
  var t = Wn(e.target);
  if (t !== null) {
    var n = ur(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = em(n)), t !== null)) {
          ((e.blockedOn = t),
            dm(e.priority, function () {
              um(n);
            }));
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
function uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ql = r), n.target.dispatchEvent(r), (ql = null));
    } else return ((t = vs(n)), t !== null && gc(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function nf(e, t, n) {
  uo(e) && n.delete(t);
}
function Bv() {
  ((Zl = !1),
    Sn !== null && uo(Sn) && (Sn = null),
    En !== null && uo(En) && (En = null),
    wn !== null && uo(wn) && (wn = null),
    Qi.forEach(nf),
    Ji.forEach(nf));
}
function Si(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zl ||
      ((Zl = !0),
      st.unstable_scheduleCallback(st.unstable_NormalPriority, Bv)));
}
function Zi(e) {
  function t(i) {
    return Si(i, e);
  }
  if (0 < $s.length) {
    Si($s[0], e);
    for (var n = 1; n < $s.length; n++) {
      var r = $s[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Sn !== null && Si(Sn, e),
      En !== null && Si(En, e),
      wn !== null && Si(wn, e),
      Qi.forEach(t),
      Ji.forEach(t),
      n = 0;
    n < hn.length;
    n++
  )
    ((r = hn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); )
    (fm(n), n.blockedOn === null && hn.shift());
}
var zr = sn.ReactCurrentBatchConfig,
  xo = !0;
function Uv(e, t, n, r) {
  var i = K,
    s = zr.transition;
  zr.transition = null;
  try {
    ((K = 1), yc(e, t, n, r));
  } finally {
    ((K = i), (zr.transition = s));
  }
}
function jv(e, t, n, r) {
  var i = K,
    s = zr.transition;
  zr.transition = null;
  try {
    ((K = 4), yc(e, t, n, r));
  } finally {
    ((K = i), (zr.transition = s));
  }
}
function yc(e, t, n, r) {
  if (xo) {
    var i = eu(e, t, n, r);
    if (i === null) (pl(e, t, r, Ro, n), tf(e, r));
    else if (zv(i, e, t, n, r)) r.stopPropagation();
    else if ((tf(e, r), t & 4 && -1 < $v.indexOf(e))) {
      for (; i !== null; ) {
        var s = vs(i);
        if (
          (s !== null && lm(s),
          (s = eu(e, t, n, r)),
          s === null && pl(e, t, r, Ro, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else pl(e, t, r, null, n);
  }
}
var Ro = null;
function eu(e, t, n, r) {
  if (((Ro = null), (e = pc(r)), (e = Wn(e)), e !== null))
    if (((t = ur(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = em(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Ro = e), null);
}
function pm(e) {
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
      switch (Nv()) {
        case hc:
          return 1;
        case im:
          return 4;
        case Io:
        case Mv:
          return 16;
        case sm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null,
  _c = null,
  co = null;
function hm() {
  if (co) return co;
  var e,
    t = _c,
    n = t.length,
    r,
    i = "value" in yn ? yn.value : yn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (co = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zs() {
  return !0;
}
function rf() {
  return !1;
}
function lt(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? zs
        : rf),
      (this.isPropagationStopped = rf),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zs));
      },
      persist: function () {},
      isPersistent: zs,
    }),
    t
  );
}
var ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vc = lt(ui),
  _s = fe({}, ui, { view: 0, detail: 0 }),
  Hv = lt(_s),
  il,
  sl,
  Ei,
  ca = fe({}, _s, {
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
    getModifierState: Sc,
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
        : (e !== Ei &&
            (Ei && e.type === "mousemove"
              ? ((il = e.screenX - Ei.screenX), (sl = e.screenY - Ei.screenY))
              : (sl = il = 0),
            (Ei = e)),
          il);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : sl;
    },
  }),
  sf = lt(ca),
  Wv = fe({}, ca, { dataTransfer: 0 }),
  Vv = lt(Wv),
  Gv = fe({}, _s, { relatedTarget: 0 }),
  ol = lt(Gv),
  Yv = fe({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qv = lt(Yv),
  Kv = fe({}, ui, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Xv = lt(Kv),
  Qv = fe({}, ui, { data: 0 }),
  of = lt(Qv),
  Jv = {
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
  Zv = {
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
  eS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function tS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = eS[e]) ? !!t[e] : !1;
}
function Sc() {
  return tS;
}
var nS = fe({}, _s, {
    key: function (e) {
      if (e.key) {
        var t = Jv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Zv[e.keyCode] || "Unidentified"
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
    getModifierState: Sc,
    charCode: function (e) {
      return e.type === "keypress" ? fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  rS = lt(nS),
  iS = fe({}, ca, {
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
  af = lt(iS),
  sS = fe({}, _s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sc,
  }),
  oS = lt(sS),
  aS = fe({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lS = lt(aS),
  uS = fe({}, ca, {
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
  cS = lt(uS),
  dS = [9, 13, 27, 32],
  Ec = Jt && "CompositionEvent" in window,
  Pi = null;
Jt && "documentMode" in document && (Pi = document.documentMode);
var fS = Jt && "TextEvent" in window && !Pi,
  mm = Jt && (!Ec || (Pi && 8 < Pi && 11 >= Pi)),
  lf = " ",
  uf = !1;
function gm(e, t) {
  switch (e) {
    case "keyup":
      return dS.indexOf(t.keyCode) !== -1;
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
function ym(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Sr = !1;
function pS(e, t) {
  switch (e) {
    case "compositionend":
      return ym(t);
    case "keypress":
      return t.which !== 32 ? null : ((uf = !0), lf);
    case "textInput":
      return ((e = t.data), e === lf && uf ? null : e);
    default:
      return null;
  }
}
function hS(e, t) {
  if (Sr)
    return e === "compositionend" || (!Ec && gm(e, t))
      ? ((e = hm()), (co = _c = yn = null), (Sr = !1), e)
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
      return mm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mS = {
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
function cf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mS[e.type] : t === "textarea";
}
function _m(e, t, n, r) {
  (Kh(r),
    (t = No(t, "onChange")),
    0 < t.length &&
      ((n = new vc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Li = null,
  es = null;
function gS(e) {
  Nm(e, 0);
}
function da(e) {
  var t = kr(e);
  if (jh(t)) return e;
}
function yS(e, t) {
  if (e === "change") return t;
}
var vm = !1;
if (Jt) {
  var al;
  if (Jt) {
    var ll = "oninput" in document;
    if (!ll) {
      var df = document.createElement("div");
      (df.setAttribute("oninput", "return;"),
        (ll = typeof df.oninput == "function"));
    }
    al = ll;
  } else al = !1;
  vm = al && (!document.documentMode || 9 < document.documentMode);
}
function ff() {
  Li && (Li.detachEvent("onpropertychange", Sm), (es = Li = null));
}
function Sm(e) {
  if (e.propertyName === "value" && da(es)) {
    var t = [];
    (_m(t, es, e, pc(e)), Zh(gS, t));
  }
}
function _S(e, t, n) {
  e === "focusin"
    ? (ff(), (Li = t), (es = n), Li.attachEvent("onpropertychange", Sm))
    : e === "focusout" && ff();
}
function vS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return da(es);
}
function SS(e, t) {
  if (e === "click") return da(t);
}
function ES(e, t) {
  if (e === "input" || e === "change") return da(t);
}
function wS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nt = typeof Object.is == "function" ? Object.is : wS;
function ts(e, t) {
  if (Nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ll.call(t, i) || !Nt(e[i], t[i])) return !1;
  }
  return !0;
}
function pf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hf(e, t) {
  var n = pf(e);
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
    n = pf(n);
  }
}
function Em(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Em(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function wm() {
  for (var e = window, t = wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wo(e.document);
  }
  return t;
}
function wc(e) {
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
function kS(e) {
  var t = wm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Em(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = hf(n, s)));
        var o = hf(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var TS = Jt && "documentMode" in document && 11 >= document.documentMode,
  Er = null,
  tu = null,
  Fi = null,
  nu = !1;
function mf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nu ||
    Er == null ||
    Er !== wo(r) ||
    ((r = Er),
    "selectionStart" in r && wc(r)
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
    (Fi && ts(Fi, r)) ||
      ((Fi = r),
      (r = No(tu, "onSelect")),
      0 < r.length &&
        ((t = new vc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Er))));
}
function Bs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var wr = {
    animationend: Bs("Animation", "AnimationEnd"),
    animationiteration: Bs("Animation", "AnimationIteration"),
    animationstart: Bs("Animation", "AnimationStart"),
    transitionend: Bs("Transition", "TransitionEnd"),
  },
  ul = {},
  km = {};
Jt &&
  ((km = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete wr.animationend.animation,
    delete wr.animationiteration.animation,
    delete wr.animationstart.animation),
  "TransitionEvent" in window || delete wr.transitionend.transition);
function fa(e) {
  if (ul[e]) return ul[e];
  if (!wr[e]) return e;
  var t = wr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in km) return (ul[e] = t[n]);
  return e;
}
var Tm = fa("animationend"),
  Im = fa("animationiteration"),
  Cm = fa("animationstart"),
  xm = fa("transitionend"),
  Rm = new Map(),
  gf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function bn(e, t) {
  (Rm.set(e, t), lr(t, [e]));
}
for (var cl = 0; cl < gf.length; cl++) {
  var dl = gf[cl],
    IS = dl.toLowerCase(),
    CS = dl[0].toUpperCase() + dl.slice(1);
  bn(IS, "on" + CS);
}
bn(Tm, "onAnimationEnd");
bn(Im, "onAnimationIteration");
bn(Cm, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(xm, "onTransitionEnd");
Vr("onMouseEnter", ["mouseout", "mouseover"]);
Vr("onMouseLeave", ["mouseout", "mouseover"]);
Vr("onPointerEnter", ["pointerout", "pointerover"]);
Vr("onPointerLeave", ["pointerout", "pointerover"]);
lr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
lr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
lr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
lr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Oi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  xS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));
function yf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Iv(r, t, void 0, e), (e.currentTarget = null));
}
function Nm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (yf(i, a, u), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (yf(i, a, u), (s = l));
        }
    }
  }
  if (To) throw ((e = Ql), (To = !1), (Ql = null), e);
}
function se(e, t) {
  var n = t[au];
  n === void 0 && (n = t[au] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Mm(t, e, 2, !1), n.add(r));
}
function fl(e, t, n) {
  var r = 0;
  (t && (r |= 4), Mm(n, e, r, t));
}
var Us = "_reactListening" + Math.random().toString(36).slice(2);
function ns(e) {
  if (!e[Us]) {
    ((e[Us] = !0),
      Fh.forEach(function (n) {
        n !== "selectionchange" && (xS.has(n) || fl(n, !1, e), fl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Us] || ((t[Us] = !0), fl("selectionchange", !1, t));
  }
}
function Mm(e, t, n, r) {
  switch (pm(t)) {
    case 1:
      var i = Uv;
      break;
    case 4:
      i = jv;
      break;
    default:
      i = yc;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Xl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function pl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Wn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Zh(function () {
    var u = s,
      c = pc(n),
      d = [];
    e: {
      var f = Rm.get(e);
      if (f !== void 0) {
        var p = vc,
          g = e;
        switch (e) {
          case "keypress":
            if (fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = rS;
            break;
          case "focusin":
            ((g = "focus"), (p = ol));
            break;
          case "focusout":
            ((g = "blur"), (p = ol));
            break;
          case "beforeblur":
          case "afterblur":
            p = ol;
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
            p = sf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Vv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = oS;
            break;
          case Tm:
          case Im:
          case Cm:
            p = qv;
            break;
          case xm:
            p = lS;
            break;
          case "scroll":
            p = Hv;
            break;
          case "wheel":
            p = cS;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Xv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = af;
        }
        var _ = (t & 4) !== 0,
          E = !_ && e === "scroll",
          h = _ ? (f !== null ? f + "Capture" : null) : f;
        _ = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var v = y.stateNode;
          if (
            (y.tag === 5 &&
              v !== null &&
              ((y = v),
              h !== null && ((v = Xi(m, h)), v != null && _.push(rs(m, v, y)))),
            E)
          )
            break;
          m = m.return;
        }
        0 < _.length &&
          ((f = new p(f, g, null, n, c)), d.push({ event: f, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ql &&
            (g = n.relatedTarget || n.fromElement) &&
            (Wn(g) || g[Zt]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = u),
              (g = g ? Wn(g) : null),
              g !== null &&
                ((E = ur(g)), g !== E || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = u)),
          p !== g)
        ) {
          if (
            ((_ = sf),
            (v = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = af),
              (v = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (E = p == null ? f : kr(p)),
            (y = g == null ? f : kr(g)),
            (f = new _(v, m + "leave", p, n, c)),
            (f.target = E),
            (f.relatedTarget = y),
            (v = null),
            Wn(c) === u &&
              ((_ = new _(h, m + "enter", g, n, c)),
              (_.target = y),
              (_.relatedTarget = E),
              (v = _)),
            (E = v),
            p && g)
          )
            t: {
              for (_ = p, h = g, m = 0, y = _; y; y = pr(y)) m++;
              for (y = 0, v = h; v; v = pr(v)) y++;
              for (; 0 < m - y; ) ((_ = pr(_)), m--);
              for (; 0 < y - m; ) ((h = pr(h)), y--);
              for (; m--; ) {
                if (_ === h || (h !== null && _ === h.alternate)) break t;
                ((_ = pr(_)), (h = pr(h)));
              }
              _ = null;
            }
          else _ = null;
          (p !== null && _f(d, f, p, _, !1),
            g !== null && E !== null && _f(d, E, g, _, !0));
        }
      }
      e: {
        if (
          ((f = u ? kr(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var w = yS;
        else if (cf(f))
          if (vm) w = ES;
          else {
            w = vS;
            var k = _S;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (w = SS);
        if (w && (w = w(e, u))) {
          _m(d, w, n, c);
          break e;
        }
        (k && k(e, f, u),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            Hl(f, "number", f.value));
      }
      switch (((k = u ? kr(u) : window), e)) {
        case "focusin":
          (cf(k) || k.contentEditable === "true") &&
            ((Er = k), (tu = u), (Fi = null));
          break;
        case "focusout":
          Fi = tu = Er = null;
          break;
        case "mousedown":
          nu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((nu = !1), mf(d, n, c));
          break;
        case "selectionchange":
          if (TS) break;
        case "keydown":
        case "keyup":
          mf(d, n, c);
      }
      var T;
      if (Ec)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Sr
          ? gm(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      (C &&
        (mm &&
          n.locale !== "ko" &&
          (Sr || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Sr && (T = hm())
            : ((yn = c),
              (_c = "value" in yn ? yn.value : yn.textContent),
              (Sr = !0))),
        (k = No(u, C)),
        0 < k.length &&
          ((C = new of(C, e, null, n, c)),
          d.push({ event: C, listeners: k }),
          T ? (C.data = T) : ((T = ym(n)), T !== null && (C.data = T)))),
        (T = fS ? pS(e, n) : hS(e, n)) &&
          ((u = No(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new of("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T))));
    }
    Nm(d, t);
  });
}
function rs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Xi(e, n)),
      s != null && r.unshift(rs(e, s, i)),
      (s = Xi(e, t)),
      s != null && r.push(rs(e, s, i))),
      (e = e.return));
  }
  return r;
}
function pr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _f(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Xi(n, s)), l != null && o.unshift(rs(n, l, a)))
        : i || ((l = Xi(n, s)), l != null && o.push(rs(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var RS = /\r\n?/g,
  NS = /\u0000|\uFFFD/g;
function vf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      RS,
      `
`,
    )
    .replace(NS, "");
}
function js(e, t, n) {
  if (((t = vf(t)), vf(e) !== t && n)) throw Error(I(425));
}
function Mo() {}
var ru = null,
  iu = null;
function su(e, t) {
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
var ou = typeof setTimeout == "function" ? setTimeout : void 0,
  MS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sf = typeof Promise == "function" ? Promise : void 0,
  OS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sf < "u"
        ? function (e) {
            return Sf.resolve(null).then(e).catch(DS);
          }
        : ou;
function DS(e) {
  setTimeout(function () {
    throw e;
  });
}
function hl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Zi(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Zi(t);
}
function kn(e) {
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
function Ef(e) {
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
var ci = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + ci,
  is = "__reactProps$" + ci,
  Zt = "__reactContainer$" + ci,
  au = "__reactEvents$" + ci,
  AS = "__reactListeners$" + ci,
  bS = "__reactHandles$" + ci;
function Wn(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Zt] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ef(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = Ef(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function vs(e) {
  return (
    (e = e[Lt] || e[Zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function pa(e) {
  return e[is] || null;
}
var lu = [],
  Tr = -1;
function Pn(e) {
  return { current: e };
}
function oe(e) {
  0 > Tr || ((e.current = lu[Tr]), (lu[Tr] = null), Tr--);
}
function te(e, t) {
  (Tr++, (lu[Tr] = e.current), (e.current = t));
}
var On = {},
  Fe = Pn(On),
  Xe = Pn(!1),
  Jn = On;
function Gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return On;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Qe(e) {
  return ((e = e.childContextTypes), e != null);
}
function Oo() {
  (oe(Xe), oe(Fe));
}
function wf(e, t, n) {
  if (Fe.current !== On) throw Error(I(168));
  (te(Fe, t), te(Xe, n));
}
function Om(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, _v(e) || "Unknown", i));
  return fe({}, n, r);
}
function Do(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || On),
    (Jn = Fe.current),
    te(Fe, e),
    te(Xe, Xe.current),
    !0
  );
}
function kf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  (n
    ? ((e = Om(e, t, Jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Xe),
      oe(Fe),
      te(Fe, e))
    : oe(Xe),
    te(Xe, n));
}
var Gt = null,
  ha = !1,
  ml = !1;
function Dm(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
function PS(e) {
  ((ha = !0), Dm(e));
}
function Ln() {
  if (!ml && Gt !== null) {
    ml = !0;
    var e = 0,
      t = K;
    try {
      var n = Gt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Gt = null), (ha = !1));
    } catch (i) {
      throw (Gt !== null && (Gt = Gt.slice(e + 1)), rm(hc, Ln), i);
    } finally {
      ((K = t), (ml = !1));
    }
  }
  return null;
}
var Ir = [],
  Cr = 0,
  Ao = null,
  bo = 0,
  dt = [],
  ft = 0,
  Zn = null,
  qt = 1,
  Kt = "";
function jn(e, t) {
  ((Ir[Cr++] = bo), (Ir[Cr++] = Ao), (Ao = e), (bo = t));
}
function Am(e, t, n) {
  ((dt[ft++] = qt), (dt[ft++] = Kt), (dt[ft++] = Zn), (Zn = e));
  var r = qt;
  e = Kt;
  var i = 32 - Ct(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Ct(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (qt = (1 << (32 - Ct(t) + i)) | (n << i) | r),
      (Kt = s + e));
  } else ((qt = (1 << s) | (n << i) | r), (Kt = e));
}
function kc(e) {
  e.return !== null && (jn(e, 1), Am(e, 1, 0));
}
function Tc(e) {
  for (; e === Ao; )
    ((Ao = Ir[--Cr]), (Ir[Cr] = null), (bo = Ir[--Cr]), (Ir[Cr] = null));
  for (; e === Zn; )
    ((Zn = dt[--ft]),
      (dt[ft] = null),
      (Kt = dt[--ft]),
      (dt[ft] = null),
      (qt = dt[--ft]),
      (dt[ft] = null));
}
var it = null,
  rt = null,
  ae = !1,
  Tt = null;
function bm(e, t) {
  var n = pt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Tf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (rt = kn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (rt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zn !== null ? { id: qt, overflow: Kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function uu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cu(e) {
  if (ae) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Tf(e, t)) {
        if (uu(e)) throw Error(I(418));
        t = kn(n.nextSibling);
        var r = it;
        t && Tf(e, t)
          ? bm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (it = e));
      }
    } else {
      if (uu(e)) throw Error(I(418));
      ((e.flags = (e.flags & -4097) | 2), (ae = !1), (it = e));
    }
  }
}
function If(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function Hs(e) {
  if (e !== it) return !1;
  if (!ae) return (If(e), (ae = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !su(e.type, e.memoizedProps))),
    t && (t = rt))
  ) {
    if (uu(e)) throw (Pm(), Error(I(418)));
    for (; t; ) (bm(e, t), (t = kn(t.nextSibling)));
  }
  if ((If(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = it ? kn(e.stateNode.nextSibling) : null;
  return !0;
}
function Pm() {
  for (var e = rt; e; ) e = kn(e.nextSibling);
}
function Yr() {
  ((rt = it = null), (ae = !1));
}
function Ic(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
var LS = sn.ReactCurrentBatchConfig;
function wi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Ws(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Cf(e) {
  var t = e._init;
  return t(e._payload);
}
function Lm(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) (t(h, m), (m = m.sibling));
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      (m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling));
    return h;
  }
  function i(h, m) {
    return ((h = xn(h, m)), (h.index = 0), (h.sibling = null), h);
  }
  function s(h, m, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function o(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function a(h, m, y, v) {
    return m === null || m.tag !== 6
      ? ((m = wl(y, h.mode, v)), (m.return = h), m)
      : ((m = i(m, y)), (m.return = h), m);
  }
  function l(h, m, y, v) {
    var w = y.type;
    return w === vr
      ? c(h, m, y.props.children, v, y.key)
      : m !== null &&
          (m.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === ln &&
              Cf(w) === m.type))
        ? ((v = i(m, y.props)), (v.ref = wi(h, m, y)), (v.return = h), v)
        : ((v = vo(y.type, y.key, y.props, null, h.mode, v)),
          (v.ref = wi(h, m, y)),
          (v.return = h),
          v);
  }
  function u(h, m, y, v) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = kl(y, h.mode, v)), (m.return = h), m)
      : ((m = i(m, y.children || [])), (m.return = h), m);
  }
  function c(h, m, y, v, w) {
    return m === null || m.tag !== 7
      ? ((m = Kn(y, h.mode, v, w)), (m.return = h), m)
      : ((m = i(m, y)), (m.return = h), m);
  }
  function d(h, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = wl("" + m, h.mode, y)), (m.return = h), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case As:
          return (
            (y = vo(m.type, m.key, m.props, null, h.mode, y)),
            (y.ref = wi(h, null, m)),
            (y.return = h),
            y
          );
        case _r:
          return ((m = kl(m, h.mode, y)), (m.return = h), m);
        case ln:
          var v = m._init;
          return d(h, v(m._payload), y);
      }
      if (Ni(m) || yi(m))
        return ((m = Kn(m, h.mode, y, null)), (m.return = h), m);
      Ws(h, m);
    }
    return null;
  }
  function f(h, m, y, v) {
    var w = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return w !== null ? null : a(h, m, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case As:
          return y.key === w ? l(h, m, y, v) : null;
        case _r:
          return y.key === w ? u(h, m, y, v) : null;
        case ln:
          return ((w = y._init), f(h, m, w(y._payload), v));
      }
      if (Ni(y) || yi(y)) return w !== null ? null : c(h, m, y, v, null);
      Ws(h, y);
    }
    return null;
  }
  function p(h, m, y, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((h = h.get(y) || null), a(m, h, "" + v, w));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case As:
          return (
            (h = h.get(v.key === null ? y : v.key) || null),
            l(m, h, v, w)
          );
        case _r:
          return (
            (h = h.get(v.key === null ? y : v.key) || null),
            u(m, h, v, w)
          );
        case ln:
          var k = v._init;
          return p(h, m, y, k(v._payload), w);
      }
      if (Ni(v) || yi(v)) return ((h = h.get(y) || null), c(m, h, v, w, null));
      Ws(m, v);
    }
    return null;
  }
  function g(h, m, y, v) {
    for (
      var w = null, k = null, T = m, C = (m = 0), N = null;
      T !== null && C < y.length;
      C++
    ) {
      T.index > C ? ((N = T), (T = null)) : (N = T.sibling);
      var R = f(h, T, y[C], v);
      if (R === null) {
        T === null && (T = N);
        break;
      }
      (e && T && R.alternate === null && t(h, T),
        (m = s(R, m, C)),
        k === null ? (w = R) : (k.sibling = R),
        (k = R),
        (T = N));
    }
    if (C === y.length) return (n(h, T), ae && jn(h, C), w);
    if (T === null) {
      for (; C < y.length; C++)
        ((T = d(h, y[C], v)),
          T !== null &&
            ((m = s(T, m, C)),
            k === null ? (w = T) : (k.sibling = T),
            (k = T)));
      return (ae && jn(h, C), w);
    }
    for (T = r(h, T); C < y.length; C++)
      ((N = p(T, h, C, y[C], v)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? C : N.key),
          (m = s(N, m, C)),
          k === null ? (w = N) : (k.sibling = N),
          (k = N)));
    return (
      e &&
        T.forEach(function ($) {
          return t(h, $);
        }),
      ae && jn(h, C),
      w
    );
  }
  function _(h, m, y, v) {
    var w = yi(y);
    if (typeof w != "function") throw Error(I(150));
    if (((y = w.call(y)), y == null)) throw Error(I(151));
    for (
      var k = (w = null), T = m, C = (m = 0), N = null, R = y.next();
      T !== null && !R.done;
      C++, R = y.next()
    ) {
      T.index > C ? ((N = T), (T = null)) : (N = T.sibling);
      var $ = f(h, T, R.value, v);
      if ($ === null) {
        T === null && (T = N);
        break;
      }
      (e && T && $.alternate === null && t(h, T),
        (m = s($, m, C)),
        k === null ? (w = $) : (k.sibling = $),
        (k = $),
        (T = N));
    }
    if (R.done) return (n(h, T), ae && jn(h, C), w);
    if (T === null) {
      for (; !R.done; C++, R = y.next())
        ((R = d(h, R.value, v)),
          R !== null &&
            ((m = s(R, m, C)),
            k === null ? (w = R) : (k.sibling = R),
            (k = R)));
      return (ae && jn(h, C), w);
    }
    for (T = r(h, T); !R.done; C++, R = y.next())
      ((R = p(T, h, C, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && T.delete(R.key === null ? C : R.key),
          (m = s(R, m, C)),
          k === null ? (w = R) : (k.sibling = R),
          (k = R)));
    return (
      e &&
        T.forEach(function (ne) {
          return t(h, ne);
        }),
      ae && jn(h, C),
      w
    );
  }
  function E(h, m, y, v) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === vr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case As:
          e: {
            for (var w = y.key, k = m; k !== null; ) {
              if (k.key === w) {
                if (((w = y.type), w === vr)) {
                  if (k.tag === 7) {
                    (n(h, k.sibling),
                      (m = i(k, y.props.children)),
                      (m.return = h),
                      (h = m));
                    break e;
                  }
                } else if (
                  k.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === ln &&
                    Cf(w) === k.type)
                ) {
                  (n(h, k.sibling),
                    (m = i(k, y.props)),
                    (m.ref = wi(h, k, y)),
                    (m.return = h),
                    (h = m));
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            y.type === vr
              ? ((m = Kn(y.props.children, h.mode, v, y.key)),
                (m.return = h),
                (h = m))
              : ((v = vo(y.type, y.key, y.props, null, h.mode, v)),
                (v.ref = wi(h, m, y)),
                (v.return = h),
                (h = v));
          }
          return o(h);
        case _r:
          e: {
            for (k = y.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  (n(h, m.sibling),
                    (m = i(m, y.children || [])),
                    (m.return = h),
                    (h = m));
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            ((m = kl(y, h.mode, v)), (m.return = h), (h = m));
          }
          return o(h);
        case ln:
          return ((k = y._init), E(h, m, k(y._payload), v));
      }
      if (Ni(y)) return g(h, m, y, v);
      if (yi(y)) return _(h, m, y, v);
      Ws(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = i(m, y)), (m.return = h), (h = m))
          : (n(h, m), (m = wl(y, h.mode, v)), (m.return = h), (h = m)),
        o(h))
      : n(h, m);
  }
  return E;
}
var qr = Lm(!0),
  Fm = Lm(!1),
  Po = Pn(null),
  Lo = null,
  xr = null,
  Cc = null;
function xc() {
  Cc = xr = Lo = null;
}
function Rc(e) {
  var t = Po.current;
  (oe(Po), (e._currentValue = t));
}
function du(e, t, n) {
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
function Br(e, t) {
  ((Lo = e),
    (Cc = xr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null)));
}
function gt(e) {
  var t = e._currentValue;
  if (Cc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xr === null)) {
      if (Lo === null) throw Error(I(308));
      ((xr = e), (Lo.dependencies = { lanes: 0, firstContext: e }));
    } else xr = xr.next = e;
  return t;
}
var Vn = null;
function Nc(e) {
  Vn === null ? (Vn = [e]) : Vn.push(e);
}
function $m(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Nc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    en(e, r)
  );
}
function en(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function Mc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zm(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      en(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Nc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function po(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n));
  }
}
function xf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Fo(e, t, n, r) {
  var i = e.updateQueue;
  un = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (s = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    ((o = 0), (c = u = l = null), (a = s));
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            _ = a;
          switch (((f = t), (p = n), _.tag)) {
            case 1:
              if (((g = _.payload), typeof g == "function")) {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = _.payload),
                (f = typeof g == "function" ? g.call(p, d, f) : g),
                f == null)
              )
                break e;
              d = fe({}, d, f);
              break e;
            case 2:
              un = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        ((p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (o |= f));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((tr |= o), (e.lanes = o), (e.memoizedState = d));
  }
}
function Rf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var Ss = {},
  Bt = Pn(Ss),
  ss = Pn(Ss),
  os = Pn(Ss);
function Gn(e) {
  if (e === Ss) throw Error(I(174));
  return e;
}
function Oc(e, t) {
  switch ((te(os, t), te(ss, e), te(Bt, Ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vl(t, e)));
  }
  (oe(Bt), te(Bt, t));
}
function Kr() {
  (oe(Bt), oe(ss), oe(os));
}
function Bm(e) {
  Gn(os.current);
  var t = Gn(Bt.current),
    n = Vl(t, e.type);
  t !== n && (te(ss, e), te(Bt, n));
}
function Dc(e) {
  ss.current === e && (oe(Bt), oe(ss));
}
var ce = Pn(0);
function $o(e) {
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
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var gl = [];
function Ac() {
  for (var e = 0; e < gl.length; e++)
    gl[e]._workInProgressVersionPrimary = null;
  gl.length = 0;
}
var ho = sn.ReactCurrentDispatcher,
  yl = sn.ReactCurrentBatchConfig,
  er = 0,
  de = null,
  Se = null,
  Te = null,
  zo = !1,
  $i = !1,
  as = 0,
  FS = 0;
function be() {
  throw Error(I(321));
}
function bc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Nt(e[n], t[n])) return !1;
  return !0;
}
function Pc(e, t, n, r, i, s) {
  if (
    ((er = s),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ho.current = e === null || e.memoizedState === null ? US : jS),
    (e = n(r, i)),
    $i)
  ) {
    s = 0;
    do {
      if ((($i = !1), (as = 0), 25 <= s)) throw Error(I(301));
      ((s += 1),
        (Te = Se = null),
        (t.updateQueue = null),
        (ho.current = HS),
        (e = n(r, i)));
    } while ($i);
  }
  if (
    ((ho.current = Bo),
    (t = Se !== null && Se.next !== null),
    (er = 0),
    (Te = Se = de = null),
    (zo = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Lc() {
  var e = as !== 0;
  return ((as = 0), e);
}
function Dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Te === null ? (de.memoizedState = Te = e) : (Te = Te.next = e), Te);
}
function yt() {
  if (Se === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Te === null ? de.memoizedState : Te.next;
  if (t !== null) ((Te = t), (Se = e));
  else {
    if (e === null) throw Error(I(310));
    ((Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      Te === null ? (de.memoizedState = Te = e) : (Te = Te.next = e));
  }
  return Te;
}
function ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _l(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Se,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((er & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (de.lanes |= c),
          (tr |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (o = r) : (l.next = a),
      Nt(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (de.lanes |= s), (tr |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vl(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (Nt(s, t.memoizedState) || (Ke = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Um() {}
function jm(e, t) {
  var n = de,
    r = yt(),
    i = t(),
    s = !Nt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ke = !0)),
    (r = r.queue),
    Fc(Vm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      us(9, Wm.bind(null, n, r, i, t), void 0, null),
      xe === null)
    )
      throw Error(I(349));
    er & 30 || Hm(n, t, i);
  }
  return i;
}
function Hm(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Wm(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Gm(t) && Ym(e));
}
function Vm(e, t, n) {
  return n(function () {
    Gm(t) && Ym(e);
  });
}
function Gm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nt(e, n);
  } catch {
    return !0;
  }
}
function Ym(e) {
  var t = en(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Nf(e) {
  var t = Dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ls,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = BS.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function us(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qm() {
  return yt().memoizedState;
}
function mo(e, t, n, r) {
  var i = Dt();
  ((de.flags |= e),
    (i.memoizedState = us(1 | t, n, void 0, r === void 0 ? null : r)));
}
function ma(e, t, n, r) {
  var i = yt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Se !== null) {
    var o = Se.memoizedState;
    if (((s = o.destroy), r !== null && bc(r, o.deps))) {
      i.memoizedState = us(t, n, s, r);
      return;
    }
  }
  ((de.flags |= e), (i.memoizedState = us(1 | t, n, s, r)));
}
function Mf(e, t) {
  return mo(8390656, 8, e, t);
}
function Fc(e, t) {
  return ma(2048, 8, e, t);
}
function Km(e, t) {
  return ma(4, 2, e, t);
}
function Xm(e, t) {
  return ma(4, 4, e, t);
}
function Qm(e, t) {
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
function Jm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ma(4, 4, Qm.bind(null, t, e), n)
  );
}
function $c() {}
function Zm(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function eg(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tg(e, t, n) {
  return er & 21
    ? (Nt(n, t) || ((n = om()), (de.lanes |= n), (tr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function $S(e, t) {
  var n = K;
  ((K = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = yl.transition;
  yl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((K = n), (yl.transition = r));
  }
}
function ng() {
  return yt().memoizedState;
}
function zS(e, t, n) {
  var r = Cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    rg(e))
  )
    ig(t, n);
  else if (((n = $m(e, t, n, r)), n !== null)) {
    var i = We();
    (xt(n, e, r, i), sg(n, t, r));
  }
}
function BS(e, t, n) {
  var r = Cn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rg(e)) ig(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Nt(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Nc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = $m(e, t, i, r)),
      n !== null && ((i = We()), xt(n, e, r, i), sg(n, t, r)));
  }
}
function rg(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function ig(e, t) {
  $i = zo = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function sg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n));
  }
}
var Bo = {
    readContext: gt,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  US = {
    readContext: gt,
    useCallback: function (e, t) {
      return ((Dt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: gt,
    useEffect: Mf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        mo(4194308, 4, Qm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return mo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return mo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Dt();
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
        (e = e.dispatch = zS.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Dt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Nf,
    useDebugValue: $c,
    useDeferredValue: function (e) {
      return (Dt().memoizedState = e);
    },
    useTransition: function () {
      var e = Nf(!1),
        t = e[0];
      return ((e = $S.bind(null, e[1])), (Dt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        i = Dt();
      if (ae) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(I(349));
        er & 30 || Hm(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Mf(Vm.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        us(9, Wm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Dt(),
        t = xe.identifierPrefix;
      if (ae) {
        var n = Kt,
          r = qt;
        ((n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = as++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = FS++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jS = {
    readContext: gt,
    useCallback: Zm,
    useContext: gt,
    useEffect: Fc,
    useImperativeHandle: Jm,
    useInsertionEffect: Km,
    useLayoutEffect: Xm,
    useMemo: eg,
    useReducer: _l,
    useRef: qm,
    useState: function () {
      return _l(ls);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = yt();
      return tg(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = _l(ls)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Um,
    useSyncExternalStore: jm,
    useId: ng,
    unstable_isNewReconciler: !1,
  },
  HS = {
    readContext: gt,
    useCallback: Zm,
    useContext: gt,
    useEffect: Fc,
    useImperativeHandle: Jm,
    useInsertionEffect: Km,
    useLayoutEffect: Xm,
    useMemo: eg,
    useReducer: vl,
    useRef: qm,
    useState: function () {
      return vl(ls);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = yt();
      return Se === null ? (t.memoizedState = e) : tg(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(ls)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Um,
    useSyncExternalStore: jm,
    useId: ng,
    unstable_isNewReconciler: !1,
  };
function wt(e, t) {
  if (e && e.defaultProps) {
    ((t = fe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fu(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ga = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ur(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = Cn(e),
      s = Xt(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, i)),
      t !== null && (xt(t, e, i, r), po(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = Cn(e),
      s = Xt(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, i)),
      t !== null && (xt(t, e, i, r), po(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = Cn(e),
      i = Xt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Tn(e, i, r)),
      t !== null && (xt(t, e, r, n), po(t, e, r)));
  },
};
function Of(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ts(n, r) || !ts(i, s)
        : !0
  );
}
function og(e, t, n) {
  var r = !1,
    i = On,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = gt(s))
      : ((i = Qe(t) ? Jn : Fe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Gr(e, i) : On)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ga),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Df(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ga.enqueueReplaceState(t, t.state, null));
}
function pu(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Mc(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = gt(s))
    : ((s = Qe(t) ? Jn : Fe.current), (i.context = Gr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (fu(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ga.enqueueReplaceState(i, i.state, null),
      Fo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Xr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += yv(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Sl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var WS = typeof WeakMap == "function" ? WeakMap : Map;
function ag(e, t, n) {
  ((n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (jo || ((jo = !0), (Tu = r)), hu(e, t));
    }),
    n
  );
}
function lg(e, t, n) {
  ((n = Xt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        hu(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (hu(e, t),
          typeof r != "function" &&
            (In === null ? (In = new Set([this])) : In.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Af(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new WS();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = iE.bind(null, e, t, n)), t.then(e, e));
}
function bf(e) {
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
function Pf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xt(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var VS = sn.ReactCurrentOwner,
  Ke = !1;
function Be(e, t, n, r) {
  t.child = e === null ? Fm(t, null, n, r) : qr(t, e.child, n, r);
}
function Lf(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Br(t, i),
    (r = Pc(e, t, n, r, s, i)),
    (n = Lc()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        tn(e, t, i))
      : (ae && n && kc(t), (t.flags |= 1), Be(e, t, r, i), t.child)
  );
}
function Ff(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Gc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), ug(e, t, s, r, i))
      : ((e = vo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ts), n(o, r) && e.ref === t.ref)
    )
      return tn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = xn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ug(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ts(s, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return ((t.lanes = e.lanes), tn(e, t, i));
  }
  return mu(e, t, n, r, i);
}
function cg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Nr, tt),
        (tt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Nr, tt),
          (tt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        te(Nr, tt),
        (tt |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Nr, tt),
      (tt |= r));
  return (Be(e, t, i, n), t.child);
}
function dg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mu(e, t, n, r, i) {
  var s = Qe(n) ? Jn : Fe.current;
  return (
    (s = Gr(t, s)),
    Br(t, i),
    (n = Pc(e, t, n, r, s, i)),
    (r = Lc()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        tn(e, t, i))
      : (ae && r && kc(t), (t.flags |= 1), Be(e, t, n, i), t.child)
  );
}
function $f(e, t, n, r, i) {
  if (Qe(n)) {
    var s = !0;
    Do(t);
  } else s = !1;
  if ((Br(t, i), t.stateNode === null))
    (go(e, t), og(t, n, r), pu(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = gt(u))
      : ((u = Qe(n) ? Jn : Fe.current), (u = Gr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Df(t, o, r, u)),
      (un = !1));
    var f = t.memoizedState;
    ((o.state = f),
      Fo(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || Xe.current || un
        ? (typeof c == "function" && (fu(t, n, c, r), (l = t.memoizedState)),
          (a = un || Of(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      zm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wt(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = gt(l))
        : ((l = Qe(n) ? Jn : Fe.current), (l = Gr(t, l))));
    var p = n.getDerivedStateFromProps;
    ((c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Df(t, o, r, l)),
      (un = !1),
      (f = t.memoizedState),
      (o.state = f),
      Fo(t, r, o, i));
    var g = t.memoizedState;
    a !== d || f !== g || Xe.current || un
      ? (typeof p == "function" && (fu(t, n, p, r), (g = t.memoizedState)),
        (u = un || Of(t, n, u, r, f, g, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gu(e, t, n, r, s, i);
}
function gu(e, t, n, r, i, s) {
  dg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && kf(t, n, !1), tn(e, t, s));
  ((r = t.stateNode), (VS.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = qr(t, e.child, null, s)), (t.child = qr(t, null, a, s)))
      : Be(e, t, a, s),
    (t.memoizedState = r.state),
    i && kf(t, n, !0),
    t.child
  );
}
function fg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? wf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wf(e, t.context, !1),
    Oc(e, t.containerInfo));
}
function zf(e, t, n, r, i) {
  return (Yr(), Ic(i), (t.flags |= 256), Be(e, t, n, r), t.child);
}
var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function _u(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pg(e, t, n) {
  var r = t.pendingProps,
    i = ce.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    te(ce, i & 1),
    e === null)
  )
    return (
      cu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = va(o, r, 0, null)),
              (e = Kn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = _u(n)),
              (t.memoizedState = yu),
              e)
            : zc(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return GS(e, t, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = xn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = xn(a, s)) : ((s = Kn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? _u(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = yu),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = xn(s, { mode: "visible", children: r.children })),
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
function zc(e, t) {
  return (
    (t = va({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vs(e, t, n, r) {
  return (
    r !== null && Ic(r),
    qr(t, e.child, null, n),
    (e = zc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function GS(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Sl(Error(I(422)))), Vs(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = va({ mode: "visible", children: r.children }, i, 0, null)),
          (s = Kn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && qr(t, e.child, null, o),
          (t.child.memoizedState = _u(o)),
          (t.memoizedState = yu),
          s);
  if (!(t.mode & 1)) return Vs(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(I(419))),
      (r = Sl(s, r, void 0)),
      Vs(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Ke || a)) {
    if (((r = xe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), en(e, i), xt(r, e, i, -1)));
    }
    return (Vc(), (r = Sl(Error(I(421)))), Vs(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (rt = kn(i.nextSibling)),
      (it = t),
      (ae = !0),
      (Tt = null),
      e !== null &&
        ((dt[ft++] = qt),
        (dt[ft++] = Kt),
        (dt[ft++] = Zn),
        (qt = e.id),
        (Kt = e.overflow),
        (Zn = t)),
      (t = zc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Bf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), du(e.return, t, n));
}
function El(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function hg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Be(e, t, r.children, n), (r = ce.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bf(e, n, t);
        else if (e.tag === 19) Bf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((te(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && $o(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          El(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && $o(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        El(t, !0, n, null, s);
        break;
      case "together":
        El(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function go(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = xn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function YS(e, t, n) {
  switch (t.tag) {
    case 3:
      (fg(t), Yr());
      break;
    case 5:
      Bm(t);
      break;
    case 1:
      Qe(t.type) && Do(t);
      break;
    case 4:
      Oc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (te(Po, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? pg(e, t, n)
            : (te(ce, ce.current & 1),
              (e = tn(e, t, n)),
              e !== null ? e.sibling : null);
      te(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        te(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), cg(e, t, n));
  }
  return tn(e, t, n);
}
var mg, vu, gg, yg;
mg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
vu = function () {};
gg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), Gn(Bt.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = Ul(e, i)), (r = Ul(e, r)), (s = []));
        break;
      case "select":
        ((i = fe({}, i, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = Wl(e, i)), (r = Wl(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mo);
    }
    Gl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (qi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (qi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && se("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ki(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function qS(e, t, n) {
  var r = t.pendingProps;
  switch ((Tc(t), t.tag)) {
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
      return (Pe(t), null);
    case 1:
      return (Qe(t.type) && Oo(), Pe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Kr(),
        oe(Xe),
        oe(Fe),
        Ac(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tt !== null && (xu(Tt), (Tt = null)))),
        vu(e, t),
        Pe(t),
        null
      );
    case 5:
      Dc(t);
      var i = Gn(os.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (gg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return (Pe(t), null);
        }
        if (((e = Gn(Bt.current)), Hs(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[Lt] = t), (r[is] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (se("cancel", r), se("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Oi.length; i++) se(Oi[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (se("error", r), se("load", r));
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              (qd(r, s), se("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                se("invalid", r));
              break;
            case "textarea":
              (Xd(r, s), se("invalid", r));
          }
          (Gl(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      js(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      js(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : qi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              (bs(r), Kd(r, s, !0));
              break;
            case "textarea":
              (bs(r), Qd(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Mo);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Lt] = t),
            (e[is] = r),
            mg(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Yl(n, r)), n)) {
              case "dialog":
                (se("cancel", e), se("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (se("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Oi.length; i++) se(Oi[i], e);
                i = r;
                break;
              case "source":
                (se("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (se("error", e), se("load", e), (i = r));
                break;
              case "details":
                (se("toggle", e), (i = r));
                break;
              case "input":
                (qd(e, r), (i = Ul(e, r)), se("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = fe({}, r, { value: void 0 })),
                  se("invalid", e));
                break;
              case "textarea":
                (Xd(e, r), (i = Wl(e, r)), se("invalid", e));
                break;
              default:
                i = r;
            }
            (Gl(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? qh(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Gh(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ki(e, l)
                        : typeof l == "number" && Ki(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (qi.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && se("scroll", e)
                          : l != null && uc(e, s, l, o));
              }
            switch (n) {
              case "input":
                (bs(e), Kd(e, r, !1));
                break;
              case "textarea":
                (bs(e), Qd(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Lr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Lr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mo);
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
      return (Pe(t), null);
    case 6:
      if (e && t.stateNode != null) yg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Gn(os.current)), Gn(Bt.current), Hs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (s = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                js(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  js(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r));
      }
      return (Pe(t), null);
    case 13:
      if (
        (oe(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && rt !== null && t.mode & 1 && !(t.flags & 128))
          (Pm(), Yr(), (t.flags |= 98560), (s = !1));
        else if (((s = Hs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(I(317));
            s[Lt] = t;
          } else
            (Yr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Pe(t), (s = !1));
        } else (Tt !== null && (xu(Tt), (Tt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : Vc())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Kr(),
        vu(e, t),
        e === null && ns(t.stateNode.containerInfo),
        Pe(t),
        null
      );
    case 10:
      return (Rc(t.type._context), Pe(t), null);
    case 17:
      return (Qe(t.type) && Oo(), Pe(t), null);
    case 19:
      if ((oe(ce), (s = t.memoizedState), s === null)) return (Pe(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ki(s, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = $o(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ki(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (te(ce, (ce.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ye() > Qr &&
            ((t.flags |= 128), (r = !0), ki(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $o(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ki(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ae)
            )
              return (Pe(t), null);
          } else
            2 * ye() - s.renderingStartTime > Qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ki(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ye()),
          (t.sibling = null),
          (n = ce.current),
          te(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        Wc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? tt & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function KS(e, t) {
  switch ((Tc(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && Oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kr(),
        oe(Xe),
        oe(Fe),
        Ac(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Dc(t), null);
    case 13:
      if (
        (oe(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Yr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (oe(ce), null);
    case 4:
      return (Kr(), null);
    case 10:
      return (Rc(t.type._context), null);
    case 22:
    case 23:
      return (Wc(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Gs = !1,
  Le = !1,
  XS = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Rr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function Su(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Uf = !1;
function QS(e, t) {
  if (((ru = xo), (e = wm()), wc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;
            )
              ((f = d), (d = p));
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (p = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (iu = { focusedElem: e, selectionRange: n }, xo = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (M = e));
    else
      for (; M !== null; ) {
        t = M;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var _ = g.memoizedProps,
                    E = g.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : wt(t.type, _),
                      E,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
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
                throw Error(I(163));
            }
        } catch (v) {
          me(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (M = e));
          break;
        }
        M = t.return;
      }
  return ((g = Uf), (Uf = !1), g);
}
function zi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Su(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function ya(e, t) {
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
function Eu(e) {
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
function _g(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), _g(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[is], delete t[au], delete t[AS], delete t[bS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function vg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Mo)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wu(e, t, n), e = e.sibling; e !== null; )
      (wu(e, t, n), (e = e.sibling));
}
function ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ku(e, t, n), e = e.sibling; e !== null; )
      (ku(e, t, n), (e = e.sibling));
}
var Me = null,
  kt = !1;
function an(e, t, n) {
  for (n = n.child; n !== null; ) (Sg(e, t, n), (n = n.sibling));
}
function Sg(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == "function")
    try {
      zt.onCommitFiberUnmount(ua, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Rr(n, t);
    case 6:
      var r = Me,
        i = kt;
      ((Me = null),
        an(e, t, n),
        (Me = r),
        (kt = i),
        Me !== null &&
          (kt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode)));
      break;
    case 18:
      Me !== null &&
        (kt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? hl(e.parentNode, n)
              : e.nodeType === 1 && hl(e, n),
            Zi(e))
          : hl(Me, n.stateNode));
      break;
    case 4:
      ((r = Me),
        (i = kt),
        (Me = n.stateNode.containerInfo),
        (kt = !0),
        an(e, t, n),
        (Me = r),
        (kt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Su(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      an(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Rr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          me(n, t, a);
        }
      an(e, t, n);
      break;
    case 21:
      an(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), an(e, t, n), (Le = r))
        : an(e, t, n);
      break;
    default:
      an(e, t, n);
  }
}
function Hf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new XS()),
      t.forEach(function (r) {
        var i = oE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Me = a.stateNode), (kt = !1));
              break e;
            case 3:
              ((Me = a.stateNode.containerInfo), (kt = !0));
              break e;
            case 4:
              ((Me = a.stateNode.containerInfo), (kt = !0));
              break e;
          }
          a = a.return;
        }
        if (Me === null) throw Error(I(160));
        (Sg(s, o, i), (Me = null), (kt = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        me(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Eg(t, e), (t = t.sibling));
}
function Eg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), Mt(e), r & 4)) {
        try {
          (zi(3, e, e.return), ya(3, e));
        } catch (_) {
          me(e, e.return, _);
        }
        try {
          zi(5, e, e.return);
        } catch (_) {
          me(e, e.return, _);
        }
      }
      break;
    case 1:
      (St(t, e), Mt(e), r & 512 && n !== null && Rr(n, n.return));
      break;
    case 5:
      if (
        (St(t, e),
        Mt(e),
        r & 512 && n !== null && Rr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ki(i, "");
        } catch (_) {
          me(e, e.return, _);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && Hh(i, s),
              Yl(a, o));
            var u = Yl(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? qh(i, d)
                : c === "dangerouslySetInnerHTML"
                  ? Gh(i, d)
                  : c === "children"
                    ? Ki(i, d)
                    : uc(i, c, d, u);
            }
            switch (a) {
              case "input":
                jl(i, s);
                break;
              case "textarea":
                Wh(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? Lr(i, !!s.multiple, p, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Lr(i, !!s.multiple, s.defaultValue, !0)
                      : Lr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[is] = s;
          } catch (_) {
            me(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((St(t, e), Mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (_) {
          me(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (St(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zi(t.containerInfo);
        } catch (_) {
          me(e, e.return, _);
        }
      break;
    case 4:
      (St(t, e), Mt(e));
      break;
    case 13:
      (St(t, e),
        Mt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (jc = ye())),
        r & 4 && Hf(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (u = Le) || c), St(t, e), (Le = u)) : St(t, e),
        Mt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (d = M = c; M !== null; ) {
              switch (((f = M), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zi(4, f, f.return);
                  break;
                case 1:
                  Rr(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount());
                    } catch (_) {
                      me(r, n, _);
                    }
                  }
                  break;
                case 5:
                  Rr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Vf(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (M = p)) : Vf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Yh("display", o))));
              } catch (_) {
                me(e, e.return, _);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (_) {
                me(e, e.return, _);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (St(t, e), Mt(e), r & 4 && Hf(e));
      break;
    case 21:
      break;
    default:
      (St(t, e), Mt(e));
  }
}
function Mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ki(i, ""), (r.flags &= -33));
          var s = jf(e);
          ku(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = jf(e);
          wu(e, a, o);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      me(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function JS(e, t, n) {
  ((M = e), wg(e));
}
function wg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Gs;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Le;
        a = Gs;
        var u = Le;
        if (((Gs = o), (Le = l) && !u))
          for (M = i; M !== null; )
            ((o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Gf(i)
                : l !== null
                  ? ((l.return = o), (M = l))
                  : Gf(i));
        for (; s !== null; ) ((M = s), wg(s), (s = s.sibling));
        ((M = i), (Gs = a), (Le = u));
      }
      Wf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : Wf(e);
  }
}
function Wf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || ya(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Rf(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Rf(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Zi(d);
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
              throw Error(I(163));
          }
        Le || (t.flags & 512 && Eu(t));
      } catch (f) {
        me(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function Vf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function Gf(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ya(4, t);
          } catch (l) {
            me(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              me(t, i, l);
            }
          }
          var s = t.return;
          try {
            Eu(t);
          } catch (l) {
            me(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Eu(t);
          } catch (l) {
            me(t, o, l);
          }
      }
    } catch (l) {
      me(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (M = a));
      break;
    }
    M = t.return;
  }
}
var ZS = Math.ceil,
  Uo = sn.ReactCurrentDispatcher,
  Bc = sn.ReactCurrentOwner,
  mt = sn.ReactCurrentBatchConfig,
  H = 0,
  xe = null,
  ve = null,
  Oe = 0,
  tt = 0,
  Nr = Pn(0),
  ke = 0,
  cs = null,
  tr = 0,
  _a = 0,
  Uc = 0,
  Bi = null,
  qe = null,
  jc = 0,
  Qr = 1 / 0,
  Wt = null,
  jo = !1,
  Tu = null,
  In = null,
  Ys = !1,
  _n = null,
  Ho = 0,
  Ui = 0,
  Iu = null,
  yo = -1,
  _o = 0;
function We() {
  return H & 6 ? ye() : yo !== -1 ? yo : (yo = ye());
}
function Cn(e) {
  return e.mode & 1
    ? H & 2 && Oe !== 0
      ? Oe & -Oe
      : LS.transition !== null
        ? (_o === 0 && (_o = om()), _o)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pm(e.type))),
          e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < Ui) throw ((Ui = 0), (Iu = null), Error(I(185)));
  (ys(e, n, r),
    (!(H & 2) || e !== xe) &&
      (e === xe && (!(H & 2) && (_a |= n), ke === 4 && mn(e, Oe)),
      Je(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Qr = ye() + 500), ha && Ln())));
}
function Je(e, t) {
  var n = e.callbackNode;
  Lv(e, t);
  var r = Co(e, e === xe ? Oe : 0);
  if (r === 0)
    (n !== null && ef(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ef(n), t === 1))
      (e.tag === 0 ? PS(Yf.bind(null, e)) : Dm(Yf.bind(null, e)),
        OS(function () {
          !(H & 6) && Ln();
        }),
        (n = null));
    else {
      switch (am(r)) {
        case 1:
          n = hc;
          break;
        case 4:
          n = im;
          break;
        case 16:
          n = Io;
          break;
        case 536870912:
          n = sm;
          break;
        default:
          n = Io;
      }
      n = Mg(n, kg.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function kg(e, t) {
  if (((yo = -1), (_o = 0), H & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (Ur() && e.callbackNode !== n) return null;
  var r = Co(e, e === xe ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wo(e, r);
  else {
    t = r;
    var i = H;
    H |= 2;
    var s = Ig();
    (xe !== e || Oe !== t) && ((Wt = null), (Qr = ye() + 500), qn(e, t));
    do
      try {
        nE();
        break;
      } catch (a) {
        Tg(e, a);
      }
    while (!0);
    (xc(),
      (Uo.current = s),
      (H = i),
      ve !== null ? (t = 0) : ((xe = null), (Oe = 0), (t = ke)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Jl(e)), i !== 0 && ((r = i), (t = Cu(e, i)))), t === 1)
    )
      throw ((n = cs), qn(e, 0), mn(e, r), Je(e, ye()), n);
    if (t === 6) mn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !eE(i) &&
          ((t = Wo(e, r)),
          t === 2 && ((s = Jl(e)), s !== 0 && ((r = s), (t = Cu(e, s)))),
          t === 1))
      )
        throw ((n = cs), qn(e, 0), mn(e, r), Je(e, ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Hn(e, qe, Wt);
          break;
        case 3:
          if (
            (mn(e, r), (r & 130023424) === r && ((t = jc + 500 - ye()), 10 < t))
          ) {
            if (Co(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (We(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = ou(Hn.bind(null, e, qe, Wt), t);
            break;
          }
          Hn(e, qe, Wt);
          break;
        case 4:
          if ((mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ct(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = ye() - r),
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
                          : 1960 * ZS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ou(Hn.bind(null, e, qe, Wt), r);
            break;
          }
          Hn(e, qe, Wt);
          break;
        case 5:
          Hn(e, qe, Wt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return (Je(e, ye()), e.callbackNode === n ? kg.bind(null, e) : null);
}
function Cu(e, t) {
  var n = Bi;
  return (
    e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
    (e = Wo(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && xu(t)),
    e
  );
}
function xu(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function eE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Nt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function mn(e, t) {
  for (
    t &= ~Uc,
      t &= ~_a,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ct(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Yf(e) {
  if (H & 6) throw Error(I(327));
  Ur();
  var t = Co(e, 0);
  if (!(t & 1)) return (Je(e, ye()), null);
  var n = Wo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Jl(e);
    r !== 0 && ((t = r), (n = Cu(e, r)));
  }
  if (n === 1) throw ((n = cs), qn(e, 0), mn(e, t), Je(e, ye()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Hn(e, qe, Wt),
    Je(e, ye()),
    null
  );
}
function Hc(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    ((H = n), H === 0 && ((Qr = ye() + 500), ha && Ln()));
  }
}
function nr(e) {
  _n !== null && _n.tag === 0 && !(H & 6) && Ur();
  var t = H;
  H |= 1;
  var n = mt.transition,
    r = K;
  try {
    if (((mt.transition = null), (K = 1), e)) return e();
  } finally {
    ((K = r), (mt.transition = n), (H = t), !(H & 6) && Ln());
  }
}
function Wc() {
  ((tt = Nr.current), oe(Nr));
}
function qn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), MS(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Tc(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Oo());
          break;
        case 3:
          (Kr(), oe(Xe), oe(Fe), Ac());
          break;
        case 5:
          Dc(r);
          break;
        case 4:
          Kr();
          break;
        case 13:
          oe(ce);
          break;
        case 19:
          oe(ce);
          break;
        case 10:
          Rc(r.type._context);
          break;
        case 22:
        case 23:
          Wc();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (ve = e = xn(e.current, null)),
    (Oe = tt = t),
    (ke = 0),
    (cs = null),
    (Uc = _a = tr = 0),
    (qe = Bi = null),
    Vn !== null)
  ) {
    for (t = 0; t < Vn.length; t++)
      if (((n = Vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    Vn = null;
  }
  return e;
}
function Tg(e, t) {
  do {
    var n = ve;
    try {
      if ((xc(), (ho.current = Bo), zo)) {
        for (var r = de.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        zo = !1;
      }
      if (
        ((er = 0),
        (Te = Se = de = null),
        ($i = !1),
        (as = 0),
        (Bc.current = null),
        n === null || n.return === null)
      ) {
        ((ke = 1), (cs = t), (ve = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Oe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = bf(o);
          if (p !== null) {
            ((p.flags &= -257),
              Pf(p, o, a, s, t),
              p.mode & 1 && Af(s, u, t),
              (t = p),
              (l = u));
            var g = t.updateQueue;
            if (g === null) {
              var _ = new Set();
              (_.add(l), (t.updateQueue = _));
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Af(s, u, t), Vc());
              break e;
            }
            l = Error(I(426));
          }
        } else if (ae && a.mode & 1) {
          var E = bf(o);
          if (E !== null) {
            (!(E.flags & 65536) && (E.flags |= 256),
              Pf(E, o, a, s, t),
              Ic(Xr(l, a)));
            break e;
          }
        }
        ((s = l = Xr(l, a)),
          ke !== 4 && (ke = 2),
          Bi === null ? (Bi = [s]) : Bi.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var h = ag(s, l, t);
              xf(s, h);
              break e;
            case 1:
              a = l;
              var m = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (In === null || !In.has(y))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var v = lg(s, a, t);
                xf(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      xg(n);
    } catch (w) {
      ((t = w), ve === n && n !== null && (ve = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Ig() {
  var e = Uo.current;
  return ((Uo.current = Bo), e === null ? Bo : e);
}
function Vc() {
  ((ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    xe === null || (!(tr & 268435455) && !(_a & 268435455)) || mn(xe, Oe));
}
function Wo(e, t) {
  var n = H;
  H |= 2;
  var r = Ig();
  (xe !== e || Oe !== t) && ((Wt = null), qn(e, t));
  do
    try {
      tE();
      break;
    } catch (i) {
      Tg(e, i);
    }
  while (!0);
  if ((xc(), (H = n), (Uo.current = r), ve !== null)) throw Error(I(261));
  return ((xe = null), (Oe = 0), ke);
}
function tE() {
  for (; ve !== null; ) Cg(ve);
}
function nE() {
  for (; ve !== null && !xv(); ) Cg(ve);
}
function Cg(e) {
  var t = Ng(e.alternate, e, tt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? xg(e) : (ve = t),
    (Bc.current = null));
}
function xg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = KS(n, t)), n !== null)) {
        ((n.flags &= 32767), (ve = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ke = 6), (ve = null));
        return;
      }
    } else if (((n = qS(n, t, tt)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function Hn(e, t, n) {
  var r = K,
    i = mt.transition;
  try {
    ((mt.transition = null), (K = 1), rE(e, t, n, r));
  } finally {
    ((mt.transition = i), (K = r));
  }
  return null;
}
function rE(e, t, n, r) {
  do Ur();
  while (_n !== null);
  if (H & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Fv(e, s),
    e === xe && ((ve = xe = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ys ||
      ((Ys = !0),
      Mg(Io, function () {
        return (Ur(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = mt.transition), (mt.transition = null));
    var o = K;
    K = 1;
    var a = H;
    ((H |= 4),
      (Bc.current = null),
      QS(e, n),
      Eg(n, e),
      kS(iu),
      (xo = !!ru),
      (iu = ru = null),
      (e.current = n),
      JS(n),
      Rv(),
      (H = a),
      (K = o),
      (mt.transition = s));
  } else e.current = n;
  if (
    (Ys && ((Ys = !1), (_n = e), (Ho = i)),
    (s = e.pendingLanes),
    s === 0 && (In = null),
    Ov(n.stateNode),
    Je(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (jo) throw ((jo = !1), (e = Tu), (Tu = null), e);
  return (
    Ho & 1 && e.tag !== 0 && Ur(),
    (s = e.pendingLanes),
    s & 1 ? (e === Iu ? Ui++ : ((Ui = 0), (Iu = e))) : (Ui = 0),
    Ln(),
    null
  );
}
function Ur() {
  if (_n !== null) {
    var e = am(Ho),
      t = mt.transition,
      n = K;
    try {
      if (((mt.transition = null), (K = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (Ho = 0), H & 6)) throw Error(I(331));
        var i = H;
        for (H |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (M = d));
                  else
                    for (; M !== null; ) {
                      c = M;
                      var f = c.sibling,
                        p = c.return;
                      if ((_g(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = p), (M = f));
                        break;
                      }
                      M = p;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var _ = g.child;
                if (_ !== null) {
                  g.child = null;
                  do {
                    var E = _.sibling;
                    ((_.sibling = null), (_ = E));
                  } while (_ !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (M = o));
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zi(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                ((h.return = s.return), (M = h));
                break e;
              }
              M = s.return;
            }
        }
        var m = e.current;
        for (M = m; M !== null; ) {
          o = M;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) ((y.return = o), (M = y));
          else
            e: for (o = m; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ya(9, a);
                  }
                } catch (w) {
                  me(a, a.return, w);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                ((v.return = a.return), (M = v));
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((H = i), Ln(), zt && typeof zt.onPostCommitFiberRoot == "function")
        )
          try {
            zt.onPostCommitFiberRoot(ua, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((K = n), (mt.transition = t));
    }
  }
  return !1;
}
function qf(e, t, n) {
  ((t = Xr(n, t)),
    (t = ag(e, t, 1)),
    (e = Tn(e, t, 1)),
    (t = We()),
    e !== null && (ys(e, 1, t), Je(e, t)));
}
function me(e, t, n) {
  if (e.tag === 3) qf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (In === null || !In.has(r)))
        ) {
          ((e = Xr(n, e)),
            (e = lg(t, e, 1)),
            (t = Tn(t, e, 1)),
            (e = We()),
            t !== null && (ys(t, 1, e), Je(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function iE(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Oe & n) === n &&
      (ke === 4 || (ke === 3 && (Oe & 130023424) === Oe && 500 > ye() - jc)
        ? qn(e, 0)
        : (Uc |= n)),
    Je(e, t));
}
function Rg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fs), (Fs <<= 1), !(Fs & 130023424) && (Fs = 4194304))
      : (t = 1));
  var n = We();
  ((e = en(e, t)), e !== null && (ys(e, t, n), Je(e, n)));
}
function sE(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Rg(e, n));
}
function oE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  (r !== null && r.delete(t), Rg(e, n));
}
var Ng;
Ng = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ke = !1), YS(e, t, n));
      Ke = !!(e.flags & 131072);
    }
  else ((Ke = !1), ae && t.flags & 1048576 && Am(t, bo, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (go(e, t), (e = t.pendingProps));
      var i = Gr(t, Fe.current);
      (Br(t, n), (i = Pc(null, t, r, e, i, n)));
      var s = Lc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((s = !0), Do(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Mc(t),
            (i.updater = ga),
            (t.stateNode = i),
            (i._reactInternals = t),
            pu(t, r, e, n),
            (t = gu(null, t, r, !0, s, n)))
          : ((t.tag = 0), ae && s && kc(t), Be(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (go(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = lE(r)),
          (e = wt(r, e)),
          i)
        ) {
          case 0:
            t = mu(null, t, r, e, n);
            break e;
          case 1:
            t = $f(null, t, r, e, n);
            break e;
          case 11:
            t = Lf(null, t, r, e, n);
            break e;
          case 14:
            t = Ff(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        mu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        $f(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((fg(t), e === null)) throw Error(I(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          zm(e, t),
          Fo(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = Xr(Error(I(423)), t)), (t = zf(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Xr(Error(I(424)), t)), (t = zf(e, t, r, n, i)));
            break e;
          } else
            for (
              rt = kn(t.stateNode.containerInfo.firstChild),
                it = t,
                ae = !0,
                Tt = null,
                n = Fm(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Yr(), r === i)) {
            t = tn(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bm(t),
        e === null && cu(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        su(r, i) ? (o = null) : s !== null && su(r, s) && (t.flags |= 32),
        dg(e, t),
        Be(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && cu(t), null);
    case 13:
      return pg(e, t, n);
    case 4:
      return (
        Oc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qr(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        Lf(e, t, r, i, n)
      );
    case 7:
      return (Be(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Be(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Be(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          te(Po, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Nt(s.value, o)) {
            if (s.children === i.children && !Xe.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = Xt(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      du(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(I(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  du(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (Be(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Br(t, n),
        (i = gt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = wt(r, t.pendingProps)),
        (i = wt(r.type, i)),
        Ff(e, t, r, i, n)
      );
    case 15:
      return ug(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        go(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), Do(t)) : (e = !1),
        Br(t, n),
        og(t, r, i),
        pu(t, r, i, n),
        gu(null, t, r, !0, e, n)
      );
    case 19:
      return hg(e, t, n);
    case 22:
      return cg(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Mg(e, t) {
  return rm(e, t);
}
function aE(e, t, n, r) {
  ((this.tag = e),
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
    (this.alternate = null));
}
function pt(e, t, n, r) {
  return new aE(e, t, n, r);
}
function Gc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function lE(e) {
  if (typeof e == "function") return Gc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dc)) return 11;
    if (e === fc) return 14;
  }
  return 2;
}
function xn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
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
function vo(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Gc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case vr:
        return Kn(n.children, i, s, t);
      case cc:
        ((o = 8), (i |= 8));
        break;
      case Fl:
        return (
          (e = pt(12, n, t, i | 2)),
          (e.elementType = Fl),
          (e.lanes = s),
          e
        );
      case $l:
        return ((e = pt(13, n, t, i)), (e.elementType = $l), (e.lanes = s), e);
      case zl:
        return ((e = pt(19, n, t, i)), (e.elementType = zl), (e.lanes = s), e);
      case Bh:
        return va(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $h:
              o = 10;
              break e;
            case zh:
              o = 9;
              break e;
            case dc:
              o = 11;
              break e;
            case fc:
              o = 14;
              break e;
            case ln:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Kn(e, t, n, r) {
  return ((e = pt(7, e, r, t)), (e.lanes = n), e);
}
function va(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = Bh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wl(e, t, n) {
  return ((e = pt(6, e, null, t)), (e.lanes = n), e);
}
function kl(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function uE(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = rl(0)),
    (this.expirationTimes = rl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = rl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Yc(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new uE(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = pt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mc(s),
    e
  );
}
function cE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _r,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Og(e) {
  if (!e) return On;
  e = e._reactInternals;
  e: {
    if (ur(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return Om(e, n, t);
  }
  return t;
}
function Dg(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Yc(n, r, !0, e, i, s, o, a, l)),
    (e.context = Og(null)),
    (n = e.current),
    (r = We()),
    (i = Cn(n)),
    (s = Xt(r, i)),
    (s.callback = t ?? null),
    Tn(n, s, i),
    (e.current.lanes = i),
    ys(e, i, r),
    Je(e, r),
    e
  );
}
function Sa(e, t, n, r) {
  var i = t.current,
    s = We(),
    o = Cn(i);
  return (
    (n = Og(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tn(i, t, o)),
    e !== null && (xt(e, i, o, s), po(e, i, o)),
    o
  );
}
function Vo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Kf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qc(e, t) {
  (Kf(e, t), (e = e.alternate) && Kf(e, t));
}
function dE() {
  return null;
}
var Ag =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Kc(e) {
  this._internalRoot = e;
}
Ea.prototype.render = Kc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Sa(e, t, null, null);
};
Ea.prototype.unmount = Kc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (nr(function () {
      Sa(null, e, null, null);
    }),
      (t[Zt] = null));
  }
};
function Ea(e) {
  this._internalRoot = e;
}
Ea.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
    (hn.splice(n, 0, e), n === 0 && fm(e));
  }
};
function Xc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xf() {}
function fE(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Vo(o);
        s.call(u);
      };
    }
    var o = Dg(t, r, e, 0, null, !1, !1, "", Xf);
    return (
      (e._reactRootContainer = o),
      (e[Zt] = o.current),
      ns(e.nodeType === 8 ? e.parentNode : e),
      nr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Vo(l);
      a.call(u);
    };
  }
  var l = Yc(e, 0, !1, null, null, !1, !1, "", Xf);
  return (
    (e._reactRootContainer = l),
    (e[Zt] = l.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    nr(function () {
      Sa(t, l, n, r);
    }),
    l
  );
}
function ka(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Vo(o);
        a.call(l);
      };
    }
    Sa(t, o, e, i);
  } else o = fE(n, t, e, i, r);
  return Vo(o);
}
lm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mi(t.pendingLanes);
        n !== 0 &&
          (mc(t, n | 1), Je(t, ye()), !(H & 6) && ((Qr = ye() + 500), Ln()));
      }
      break;
    case 13:
      (nr(function () {
        var r = en(e, 1);
        if (r !== null) {
          var i = We();
          xt(r, e, 1, i);
        }
      }),
        qc(e, 1));
  }
};
gc = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = We();
      xt(t, e, 134217728, n);
    }
    qc(e, 134217728);
  }
};
um = function (e) {
  if (e.tag === 13) {
    var t = Cn(e),
      n = en(e, t);
    if (n !== null) {
      var r = We();
      xt(n, e, t, r);
    }
    qc(e, t);
  }
};
cm = function () {
  return K;
};
dm = function (e, t) {
  var n = K;
  try {
    return ((K = e), t());
  } finally {
    K = n;
  }
};
Kl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = pa(r);
            if (!i) throw Error(I(90));
            (jh(r), jl(r, i));
          }
        }
      }
      break;
    case "textarea":
      Wh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Lr(e, !!n.multiple, t, !1));
  }
};
Qh = Hc;
Jh = nr;
var pE = { usingClientEntryPoint: !1, Events: [vs, kr, pa, Kh, Xh, Hc] },
  Ti = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  hE = {
    bundleType: Ti.bundleType,
    version: Ti.version,
    rendererPackageName: Ti.rendererPackageName,
    rendererConfig: Ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = tm(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ti.findFiberByHostInstance || dE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qs.isDisabled && qs.supportsFiber)
    try {
      ((ua = qs.inject(hE)), (zt = qs));
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pE;
at.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xc(t)) throw Error(I(200));
  return cE(e, t, null, n);
};
at.createRoot = function (e, t) {
  if (!Xc(e)) throw Error(I(299));
  var n = !1,
    r = "",
    i = Ag;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Yc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Zt] = t.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    new Kc(t)
  );
};
at.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return ((e = tm(t)), (e = e === null ? null : e.stateNode), e);
};
at.flushSync = function (e) {
  return nr(e);
};
at.hydrate = function (e, t, n) {
  if (!wa(t)) throw Error(I(200));
  return ka(null, e, t, !0, n);
};
at.hydrateRoot = function (e, t, n) {
  if (!Xc(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Ag;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Dg(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Zt] = t.current),
    ns(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Ea(t);
};
at.render = function (e, t, n) {
  if (!wa(t)) throw Error(I(200));
  return ka(null, e, t, !1, n);
};
at.unmountComponentAtNode = function (e) {
  if (!wa(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (nr(function () {
        ka(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Zt] = null));
        });
      }),
      !0)
    : !1;
};
at.unstable_batchedUpdates = Hc;
at.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wa(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return ka(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function bg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg);
    } catch (e) {
      console.error(e);
    }
}
(bg(), (bh.exports = at));
var mE = bh.exports,
  Qf = mE;
((Pl.createRoot = Qf.createRoot), (Pl.hydrateRoot = Qf.hydrateRoot));
const Pg = Object.prototype.toString;
function Qc(e) {
  switch (Pg.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return nn(e, Error);
  }
}
function di(e, t) {
  return Pg.call(e) === `[object ${t}]`;
}
function Jc(e) {
  return di(e, "ErrorEvent");
}
function Jf(e) {
  return di(e, "DOMError");
}
function gE(e) {
  return di(e, "DOMException");
}
function Ut(e) {
  return di(e, "String");
}
function Zc(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function ed(e) {
  return (
    e === null || Zc(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Jr(e) {
  return di(e, "Object");
}
function Ta(e) {
  return typeof Event < "u" && nn(e, Event);
}
function yE(e) {
  return typeof Element < "u" && nn(e, Element);
}
function _E(e) {
  return di(e, "RegExp");
}
function Ia(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function vE(e) {
  return (
    Jr(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Lg(e) {
  return typeof e == "number" && e !== e;
}
function nn(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Fg(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function jr(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Zf(e, t) {
  if (!Array.isArray(e)) return "";
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    try {
      Fg(i) ? n.push("[VueViewModel]") : n.push(String(i));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function SE(e, t, n = !1) {
  return Ut(e)
    ? _E(t)
      ? t.test(e)
      : Ut(t)
        ? n
          ? e === t
          : e.includes(t)
        : !1
    : !1;
}
function fi(e, t = [], n = !1) {
  return t.some((r) => SE(e, r, n));
}
function EE(e, t, n = 250, r, i, s, o) {
  if (
    !s.exception ||
    !s.exception.values ||
    !o ||
    !nn(o.originalException, Error)
  )
    return;
  const a =
    s.exception.values.length > 0
      ? s.exception.values[s.exception.values.length - 1]
      : void 0;
  a &&
    (s.exception.values = wE(
      Ru(e, t, i, o.originalException, r, s.exception.values, a, 0),
      n,
    ));
}
function Ru(e, t, n, r, i, s, o, a) {
  if (s.length >= n + 1) return s;
  let l = [...s];
  if (nn(r[i], Error)) {
    ep(o, a);
    const u = e(t, r[i]),
      c = l.length;
    (tp(u, i, c, a), (l = Ru(e, t, n, r[i], i, [u, ...l], u, c)));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((u, c) => {
        if (nn(u, Error)) {
          ep(o, a);
          const d = e(t, u),
            f = l.length;
          (tp(d, `errors[${c}]`, f, a),
            (l = Ru(e, t, n, u, i, [d, ...l], d, f)));
        }
      }),
    l
  );
}
function ep(e, t) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      ...(e.type === "AggregateError" && { is_exception_group: !0 }),
      exception_id: t,
    }));
}
function tp(e, t, n, r) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: r,
    }));
}
function wE(e, t) {
  return e.map((n) => (n.value && (n.value = jr(n.value, t)), n));
}
function Ks(e) {
  return e && e.Math == Math ? e : void 0;
}
const U =
  (typeof globalThis == "object" && Ks(globalThis)) ||
  (typeof window == "object" && Ks(window)) ||
  (typeof self == "object" && Ks(self)) ||
  (typeof global == "object" && Ks(global)) ||
  (function () {
    return this;
  })() ||
  {};
function td() {
  return U;
}
function $g(e, t, n) {
  const r = n || U,
    i = (r.__SENTRY__ = r.__SENTRY__ || {});
  return i[e] || (i[e] = t());
}
const Hr = td(),
  kE = 80;
function Dn(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n = e;
    const r = 5,
      i = [];
    let s = 0,
      o = 0;
    const a = " > ",
      l = a.length;
    let u;
    const c = Array.isArray(t) ? t : t.keyAttrs,
      d = (!Array.isArray(t) && t.maxStringLength) || kE;
    for (
      ;
      n &&
      s++ < r &&
      ((u = TE(n, c)),
      !(u === "html" || (s > 1 && o + i.length * l + u.length >= d)));
    )
      (i.push(u), (o += u.length), (n = n.parentNode));
    return i.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function TE(e, t) {
  const n = e,
    r = [];
  let i, s, o, a, l;
  if (!n || !n.tagName) return "";
  if (
    Hr.HTMLElement &&
    n instanceof HTMLElement &&
    n.dataset &&
    n.dataset.sentryComponent
  )
    return n.dataset.sentryComponent;
  r.push(n.tagName.toLowerCase());
  const u =
    t && t.length
      ? t.filter((d) => n.getAttribute(d)).map((d) => [d, n.getAttribute(d)])
      : null;
  if (u && u.length)
    u.forEach((d) => {
      r.push(`[${d[0]}="${d[1]}"]`);
    });
  else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && Ut(i)))
    for (s = i.split(/\s+/), l = 0; l < s.length; l++) r.push(`.${s[l]}`);
  const c = ["aria-label", "type", "name", "title", "alt"];
  for (l = 0; l < c.length; l++)
    ((o = c[l]), (a = n.getAttribute(o)), a && r.push(`[${o}="${a}"]`));
  return r.join("");
}
function IE() {
  try {
    return Hr.document.location.href;
  } catch {
    return "";
  }
}
function CE(e) {
  return Hr.document && Hr.document.querySelector
    ? Hr.document.querySelector(e)
    : null;
}
function zg(e) {
  if (!Hr.HTMLElement) return null;
  let t = e;
  const n = 5;
  for (let r = 0; r < n; r++) {
    if (!t) return null;
    if (t instanceof HTMLElement && t.dataset.sentryComponent)
      return t.dataset.sentryComponent;
    t = t.parentNode;
  }
  return null;
}
const pi = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  xE = "Sentry Logger ",
  Nu = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  Go = {};
function rr(e) {
  if (!("console" in U)) return e();
  const t = U.console,
    n = {},
    r = Object.keys(Go);
  r.forEach((i) => {
    const s = Go[i];
    ((n[i] = t[i]), (t[i] = s));
  });
  try {
    return e();
  } finally {
    r.forEach((i) => {
      t[i] = n[i];
    });
  }
}
function RE() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e,
  };
  return (
    pi
      ? Nu.forEach((n) => {
          t[n] = (...r) => {
            e &&
              rr(() => {
                U.console[n](`${xE}[${n}]:`, ...r);
              });
          };
        })
      : Nu.forEach((n) => {
          t[n] = () => {};
        }),
    t
  );
}
const S = RE(),
  NE = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function ME(e) {
  return e === "http" || e === "https";
}
function cr(e, t = !1) {
  const {
    host: n,
    path: r,
    pass: i,
    port: s,
    projectId: o,
    protocol: a,
    publicKey: l,
  } = e;
  return `${a}://${l}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`;
}
function OE(e) {
  const t = NE.exec(e);
  if (!t) {
    rr(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, r, i = "", s, o = "", a] = t.slice(1);
  let l = "",
    u = a;
  const c = u.split("/");
  if ((c.length > 1 && ((l = c.slice(0, -1).join("/")), (u = c.pop())), u)) {
    const d = u.match(/^\d+/);
    d && (u = d[0]);
  }
  return Bg({
    host: s,
    pass: i,
    path: l,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function Bg(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function DE(e) {
  if (!pi) return !0;
  const { port: t, projectId: n, protocol: r } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((o) =>
    e[o] ? !1 : (S.error(`Invalid Sentry Dsn: ${o} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? ME(r)
        ? t && isNaN(parseInt(t, 10))
          ? (S.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (S.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (S.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Ug(e) {
  const t = typeof e == "string" ? OE(e) : Bg(e);
  if (!(!t || !DE(t))) return t;
}
class Ft extends Error {
  constructor(t, n = "warn") {
    (super(t),
      (this.message = t),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = n));
  }
}
function Ce(e, t, n) {
  if (!(t in e)) return;
  const r = e[t],
    i = n(r);
  (typeof i == "function" && jg(i, r), (e[t] = i));
}
function ir(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    pi && S.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function jg(e, t) {
  try {
    const n = t.prototype || {};
    ((e.prototype = t.prototype = n), ir(e, "__sentry_original__", t));
  } catch {}
}
function nd(e) {
  return e.__sentry_original__;
}
function AE(e) {
  return Object.keys(e)
    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
    .join("&");
}
function Hg(e) {
  if (Qc(e))
    return { message: e.message, name: e.name, stack: e.stack, ...rp(e) };
  if (Ta(e)) {
    const t = {
      type: e.type,
      target: np(e.target),
      currentTarget: np(e.currentTarget),
      ...rp(e),
    };
    return (
      typeof CustomEvent < "u" && nn(e, CustomEvent) && (t.detail = e.detail),
      t
    );
  } else return e;
}
function np(e) {
  try {
    return yE(e) ? Dn(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function rp(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function bE(e, t = 40) {
  const n = Object.keys(Hg(e));
  if ((n.sort(), !n.length)) return "[object has no keys]";
  if (n[0].length >= t) return jr(n[0], t);
  for (let r = n.length; r > 0; r--) {
    const i = n.slice(0, r).join(", ");
    if (!(i.length > t)) return r === n.length ? i : jr(i, t);
  }
  return "";
}
function He(e) {
  return Mu(e, new Map());
}
function Mu(e, t) {
  if (PE(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = {};
    t.set(e, r);
    for (const i of Object.keys(e)) typeof e[i] < "u" && (r[i] = Mu(e[i], t));
    return r;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = [];
    return (
      t.set(e, r),
      e.forEach((i) => {
        r.push(Mu(i, t));
      }),
      r
    );
  }
  return e;
}
function PE(e) {
  if (!Jr(e)) return !1;
  try {
    const t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === "Object";
  } catch {
    return !0;
  }
}
const Wg = 50,
  ip = /\(error: (.*)\)/,
  sp = /captureMessage|captureException/;
function Vg(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0) => {
    const i = [],
      s = n.split(`
`);
    for (let o = r; o < s.length; o++) {
      const a = s[o];
      if (a.length > 1024) continue;
      const l = ip.test(a) ? a.replace(ip, "$1") : a;
      if (!l.match(/\S*Error: /)) {
        for (const u of t) {
          const c = u(l);
          if (c) {
            i.push(c);
            break;
          }
        }
        if (i.length >= Wg) break;
      }
    }
    return FE(i);
  };
}
function LE(e) {
  return Array.isArray(e) ? Vg(...e) : e;
}
function FE(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(),
    t.reverse(),
    sp.test(t[t.length - 1].function || "") &&
      (t.pop(), sp.test(t[t.length - 1].function || "") && t.pop()),
    t
      .slice(0, Wg)
      .map((n) => ({
        ...n,
        filename: n.filename || t[t.length - 1].filename,
        function: n.function || "?",
      }))
  );
}
const Tl = "<anonymous>";
function rn(e) {
  try {
    return !e || typeof e != "function" ? Tl : e.name || Tl;
  } catch {
    return Tl;
  }
}
const So = {},
  op = {};
function dr(e, t) {
  ((So[e] = So[e] || []), So[e].push(t));
}
function fr(e, t) {
  op[e] || (t(), (op[e] = !0));
}
function Rt(e, t) {
  const n = e && So[e];
  if (n)
    for (const r of n)
      try {
        r(t);
      } catch (i) {
        pi &&
          S.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${rn(r)}
Error:`,
            i,
          );
      }
}
function $E(e) {
  const t = "console";
  (dr(t, e), fr(t, zE));
}
function zE() {
  "console" in U &&
    Nu.forEach(function (e) {
      e in U.console &&
        Ce(U.console, e, function (t) {
          return (
            (Go[e] = t),
            function (...n) {
              Rt("console", { args: n, level: e });
              const i = Go[e];
              i && i.apply(U.console, n);
            }
          );
        });
    });
}
function ge() {
  const e = U,
    t = e.crypto || e.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t &&
      t.getRandomValues &&
      (n = () => {
        const r = new Uint8Array(1);
        return (t.getRandomValues(r), r[0]);
      });
  } catch {}
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) =>
    (r ^ ((n() & 15) >> (r / 4))).toString(16),
  );
}
function Gg(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function gn(e) {
  const { message: t, event_id: n } = e;
  if (t) return t;
  const r = Gg(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || "<unknown>"
    : n || "<unknown>";
}
function Ou(e, t, n) {
  const r = (e.exception = e.exception || {}),
    i = (r.values = r.values || []),
    s = (i[0] = i[0] || {});
  (s.value || (s.value = t || ""), s.type || (s.type = "Error"));
}
function ds(e, t) {
  const n = Gg(e);
  if (!n) return;
  const r = { type: "generic", handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...t }), t && "data" in t)) {
    const s = { ...(i && i.data), ...t.data };
    n.mechanism.data = s;
  }
}
function ap(e) {
  if (e && e.__sentry_captured__) return !0;
  try {
    ir(e, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function Yg(e) {
  return Array.isArray(e) ? e : [e];
}
const gr = U,
  BE = 1e3;
let lp, Du, Au;
function qg(e) {
  const t = "dom";
  (dr(t, e), fr(t, UE));
}
function UE() {
  if (!gr.document) return;
  const e = Rt.bind(null, "dom"),
    t = up(e, !0);
  (gr.document.addEventListener("click", t, !1),
    gr.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const r = gr[n] && gr[n].prototype;
      !r ||
        !r.hasOwnProperty ||
        !r.hasOwnProperty("addEventListener") ||
        (Ce(r, "addEventListener", function (i) {
          return function (s, o, a) {
            if (s === "click" || s == "keypress")
              try {
                const l = this,
                  u = (l.__sentry_instrumentation_handlers__ =
                    l.__sentry_instrumentation_handlers__ || {}),
                  c = (u[s] = u[s] || { refCount: 0 });
                if (!c.handler) {
                  const d = up(e);
                  ((c.handler = d), i.call(this, s, d, a));
                }
                c.refCount++;
              } catch {}
            return i.call(this, s, o, a);
          };
        }),
        Ce(r, "removeEventListener", function (i) {
          return function (s, o, a) {
            if (s === "click" || s == "keypress")
              try {
                const l = this,
                  u = l.__sentry_instrumentation_handlers__ || {},
                  c = u[s];
                c &&
                  (c.refCount--,
                  c.refCount <= 0 &&
                    (i.call(this, s, c.handler, a),
                    (c.handler = void 0),
                    delete u[s]),
                  Object.keys(u).length === 0 &&
                    delete l.__sentry_instrumentation_handlers__);
              } catch {}
            return i.call(this, s, o, a);
          };
        }));
    }));
}
function jE(e) {
  if (e.type !== Du) return !1;
  try {
    if (!e.target || e.target._sentryId !== Au) return !1;
  } catch {}
  return !0;
}
function HE(e, t) {
  return e !== "keypress"
    ? !1
    : !t || !t.tagName
      ? !0
      : !(
          t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable
        );
}
function up(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = WE(n);
    if (HE(n.type, r)) return;
    (ir(n, "_sentryCaptured", !0),
      r && !r._sentryId && ir(r, "_sentryId", ge()));
    const i = n.type === "keypress" ? "input" : n.type;
    (jE(n) ||
      (e({ event: n, name: i, global: t }),
      (Du = n.type),
      (Au = r ? r._sentryId : void 0)),
      clearTimeout(lp),
      (lp = gr.setTimeout(() => {
        ((Au = void 0), (Du = void 0));
      }, BE)));
  };
}
function WE(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
const bu = td();
function Kg() {
  if (!("fetch" in bu)) return !1;
  try {
    return (
      new Headers(),
      new Request("http://www.example.com"),
      new Response(),
      !0
    );
  } catch {
    return !1;
  }
}
function Pu(e) {
  return (
    e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function VE() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!Kg()) return !1;
  if (Pu(bu.fetch)) return !0;
  let e = !1;
  const t = bu.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      ((n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (e = Pu(n.contentWindow.fetch)),
        t.head.removeChild(n));
    } catch (n) {
      pi &&
        S.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n,
        );
    }
  return e;
}
function rd(e) {
  const t = "fetch";
  (dr(t, e), fr(t, GE));
}
function GE() {
  VE() &&
    Ce(U, "fetch", function (e) {
      return function (...t) {
        const { method: n, url: r } = YE(t),
          i = {
            args: t,
            fetchData: { method: n, url: r },
            startTimestamp: Date.now(),
          };
        return (
          Rt("fetch", { ...i }),
          e.apply(U, t).then(
            (s) => {
              const o = { ...i, endTimestamp: Date.now(), response: s };
              return (Rt("fetch", o), s);
            },
            (s) => {
              const o = { ...i, endTimestamp: Date.now(), error: s };
              throw (Rt("fetch", o), s);
            },
          )
        );
      };
    });
}
function Lu(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function cp(e) {
  return typeof e == "string"
    ? e
    : e
      ? Lu(e, "url")
        ? e.url
        : e.toString
          ? e.toString()
          : ""
      : "";
}
function YE(e) {
  if (e.length === 0) return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: cp(n),
      method: Lu(r, "method") ? String(r.method).toUpperCase() : "GET",
    };
  }
  const t = e[0];
  return {
    url: cp(t),
    method: Lu(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
let Xs = null;
function Xg(e) {
  const t = "error";
  (dr(t, e), fr(t, qE));
}
function qE() {
  ((Xs = U.onerror),
    (U.onerror = function (e, t, n, r, i) {
      return (
        Rt("error", { column: r, error: i, line: n, msg: e, url: t }),
        Xs && !Xs.__SENTRY_LOADER__ ? Xs.apply(this, arguments) : !1
      );
    }),
    (U.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
let Qs = null;
function Qg(e) {
  const t = "unhandledrejection";
  (dr(t, e), fr(t, KE));
}
function KE() {
  ((Qs = U.onunhandledrejection),
    (U.onunhandledrejection = function (e) {
      return (
        Rt("unhandledrejection", e),
        Qs && !Qs.__SENTRY_LOADER__ ? Qs.apply(this, arguments) : !0
      );
    }),
    (U.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
const Js = td();
function XE() {
  const e = Js.chrome,
    t = e && e.app && e.app.runtime,
    n = "history" in Js && !!Js.history.pushState && !!Js.history.replaceState;
  return !t && n;
}
const Ii = U;
let Zs;
function Ca(e) {
  const t = "history";
  (dr(t, e), fr(t, QE));
}
function QE() {
  if (!XE()) return;
  const e = Ii.onpopstate;
  Ii.onpopstate = function (...n) {
    const r = Ii.location.href,
      i = Zs;
    if (((Zs = r), Rt("history", { from: i, to: r }), e))
      try {
        return e.apply(this, n);
      } catch {}
  };
  function t(n) {
    return function (...r) {
      const i = r.length > 2 ? r[2] : void 0;
      if (i) {
        const s = Zs,
          o = String(i);
        ((Zs = o), Rt("history", { from: s, to: o }));
      }
      return n.apply(this, r);
    };
  }
  (Ce(Ii.history, "pushState", t), Ce(Ii.history, "replaceState", t));
}
const JE = U,
  vn = "__sentry_xhr_v3__";
function id(e) {
  const t = "xhr";
  (dr(t, e), fr(t, ZE));
}
function ZE() {
  if (!JE.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  (Ce(e, "open", function (t) {
    return function (...n) {
      const r = Date.now(),
        i = Ut(n[0]) ? n[0].toUpperCase() : void 0,
        s = e0(n[1]);
      if (!i || !s) return t.apply(this, n);
      ((this[vn] = { method: i, url: s, request_headers: {} }),
        i === "POST" &&
          s.match(/sentry_key/) &&
          (this.__sentry_own_request__ = !0));
      const o = () => {
        const a = this[vn];
        if (a && this.readyState === 4) {
          try {
            a.status_code = this.status;
          } catch {}
          const l = {
            args: [i, s],
            endTimestamp: Date.now(),
            startTimestamp: r,
            xhr: this,
          };
          Rt("xhr", l);
        }
      };
      return (
        "onreadystatechange" in this &&
        typeof this.onreadystatechange == "function"
          ? Ce(this, "onreadystatechange", function (a) {
              return function (...l) {
                return (o(), a.apply(this, l));
              };
            })
          : this.addEventListener("readystatechange", o),
        Ce(this, "setRequestHeader", function (a) {
          return function (...l) {
            const [u, c] = l,
              d = this[vn];
            return (
              d && Ut(u) && Ut(c) && (d.request_headers[u.toLowerCase()] = c),
              a.apply(this, l)
            );
          };
        }),
        t.apply(this, n)
      );
    };
  }),
    Ce(e, "send", function (t) {
      return function (...n) {
        const r = this[vn];
        if (!r) return t.apply(this, n);
        n[0] !== void 0 && (r.body = n[0]);
        const i = {
          args: [r.method, r.url],
          startTimestamp: Date.now(),
          xhr: this,
        };
        return (Rt("xhr", i), t.apply(this, n));
      };
    }));
}
function e0(e) {
  if (Ut(e)) return e;
  try {
    return e.toString();
  } catch {}
}
function t0() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function n0() {
  return "npm";
}
function r0() {
  return (
    !t0() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function dp() {
  return typeof window < "u" && (!r0() || i0());
}
function i0() {
  return U.process !== void 0 && U.process.type === "renderer";
}
function s0() {
  const e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function n(i) {
    if (e) return t.has(i) ? !0 : (t.add(i), !1);
    for (let s = 0; s < t.length; s++) if (t[s] === i) return !0;
    return (t.push(i), !1);
  }
  function r(i) {
    if (e) t.delete(i);
    else
      for (let s = 0; s < t.length; s++)
        if (t[s] === i) {
          t.splice(s, 1);
          break;
        }
  }
  return [n, r];
}
function bt(e, t = 100, n = 1 / 0) {
  try {
    return Fu("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function Jg(e, t = 3, n = 100 * 1024) {
  const r = bt(e, t);
  return u0(r) > n ? Jg(e, t - 1, n) : r;
}
function Fu(e, t, n = 1 / 0, r = 1 / 0, i = s0()) {
  const [s, o] = i;
  if (
    t == null ||
    (["number", "boolean", "string"].includes(typeof t) && !Lg(t))
  )
    return t;
  const a = o0(e, t);
  if (!a.startsWith("[object ")) return a;
  if (t.__sentry_skip_normalization__) return t;
  const l =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : n;
  if (l === 0) return a.replace("object ", "");
  if (s(t)) return "[Circular ~]";
  const u = t;
  if (u && typeof u.toJSON == "function")
    try {
      const p = u.toJSON();
      return Fu("", p, l - 1, r, i);
    } catch {}
  const c = Array.isArray(t) ? [] : {};
  let d = 0;
  const f = Hg(t);
  for (const p in f) {
    if (!Object.prototype.hasOwnProperty.call(f, p)) continue;
    if (d >= r) {
      c[p] = "[MaxProperties ~]";
      break;
    }
    const g = f[p];
    ((c[p] = Fu(p, g, l - 1, r, i)), d++);
  }
  return (o(t), c);
}
function o0(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (Fg(t)) return "[VueViewModel]";
    if (vE(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t) return "[NaN]";
    if (typeof t == "function") return `[Function: ${rn(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const n = a0(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function a0(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function l0(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function u0(e) {
  return l0(JSON.stringify(e));
}
var Vt;
(function (e) {
  e[(e.PENDING = 0)] = "PENDING";
  const n = 1;
  e[(e.RESOLVED = n)] = "RESOLVED";
  const r = 2;
  e[(e.REJECTED = r)] = "REJECTED";
})(Vt || (Vt = {}));
function Zr(e) {
  return new nt((t) => {
    t(e);
  });
}
function sd(e) {
  return new nt((t, n) => {
    n(e);
  });
}
class nt {
  constructor(t) {
    (nt.prototype.__init.call(this),
      nt.prototype.__init2.call(this),
      nt.prototype.__init3.call(this),
      nt.prototype.__init4.call(this),
      (this._state = Vt.PENDING),
      (this._handlers = []));
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(t, n) {
    return new nt((r, i) => {
      (this._handlers.push([
        !1,
        (s) => {
          if (!t) r(s);
          else
            try {
              r(t(s));
            } catch (o) {
              i(o);
            }
        },
        (s) => {
          if (!n) i(s);
          else
            try {
              r(n(s));
            } catch (o) {
              i(o);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(t) {
    return this.then((n) => n, t);
  }
  finally(t) {
    return new nt((n, r) => {
      let i, s;
      return this.then(
        (o) => {
          ((s = !1), (i = o), t && t());
        },
        (o) => {
          ((s = !0), (i = o), t && t());
        },
      ).then(() => {
        if (s) {
          r(i);
          return;
        }
        n(i);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(Vt.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(Vt.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === Vt.PENDING) {
        if (Ia(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        ((this._state = t), (this._value = n), this._executeHandlers());
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Vt.PENDING) return;
      const t = this._handlers.slice();
      ((this._handlers = []),
        t.forEach((n) => {
          n[0] ||
            (this._state === Vt.RESOLVED && n[1](this._value),
            this._state === Vt.REJECTED && n[2](this._value),
            (n[0] = !0));
        }));
    };
  }
}
function c0(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function r(o) {
    return t.splice(t.indexOf(o), 1)[0];
  }
  function i(o) {
    if (!n())
      return sd(new Ft("Not adding Promise because buffer limit was reached."));
    const a = o();
    return (
      t.indexOf(a) === -1 && t.push(a),
      a.then(() => r(a)).then(null, () => r(a).then(null, () => {})),
      a
    );
  }
  function s(o) {
    return new nt((a, l) => {
      let u = t.length;
      if (!u) return a(!0);
      const c = setTimeout(() => {
        o && o > 0 && a(!1);
      }, o);
      t.forEach((d) => {
        Zr(d).then(() => {
          --u || (clearTimeout(c), a(!0));
        }, l);
      });
    });
  }
  return { $: t, add: i, drain: s };
}
function Xn(e) {
  if (!e) return {};
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!t) return {};
  const n = t[6] || "",
    r = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
const d0 = ["fatal", "error", "warning", "log", "info", "debug"];
function f0(e) {
  return e === "warn" ? "warning" : d0.includes(e) ? e : "log";
}
const Zg = 1e3;
function Es() {
  return Date.now() / Zg;
}
function p0() {
  const { performance: e } = U;
  if (!e || !e.now) return Es;
  const t = Date.now() - e.now(),
    n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / Zg;
}
const sr = p0(),
  ot = (() => {
    const { performance: e } = U;
    if (!e || !e.now) return;
    const t = 3600 * 1e3,
      n = e.now(),
      r = Date.now(),
      i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
      s = i < t,
      o = e.timing && e.timing.navigationStart,
      l = typeof o == "number" ? Math.abs(o + n - r) : t,
      u = l < t;
    return s || u ? (i <= l ? e.timeOrigin : o) : r;
  })(),
  $u = "baggage",
  ey = "sentry-",
  h0 = /^sentry-/,
  m0 = 8192;
function g0(e) {
  if (!Ut(e) && !Array.isArray(e)) return;
  let t = {};
  if (Array.isArray(e))
    t = e.reduce((r, i) => {
      const s = fp(i);
      for (const o of Object.keys(s)) r[o] = s[o];
      return r;
    }, {});
  else {
    if (!e) return;
    t = fp(e);
  }
  const n = Object.entries(t).reduce((r, [i, s]) => {
    if (i.match(h0)) {
      const o = i.slice(ey.length);
      r[o] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function ty(e) {
  if (!e) return;
  const t = Object.entries(e).reduce(
    (n, [r, i]) => (i && (n[`${ey}${r}`] = i), n),
    {},
  );
  return y0(t);
}
function fp(e) {
  return e
    .split(",")
    .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((t, [n, r]) => ((t[n] = r), t), {});
}
function y0(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [n, r], i) => {
      const s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        o = i === 0 ? s : `${t},${s}`;
      return o.length > m0
        ? (pi &&
            S.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`,
            ),
          t)
        : o;
    }, "");
}
const _0 = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
);
function v0(e) {
  if (!e) return;
  const t = e.match(_0);
  if (!t) return;
  let n;
  return (
    t[3] === "1" ? (n = !0) : t[3] === "0" && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function S0(e, t) {
  const n = v0(e),
    r = g0(t),
    { traceId: i, parentSpanId: s, parentSampled: o } = n || {};
  return n
    ? {
        traceId: i || ge(),
        parentSpanId: s || ge().substring(16),
        spanId: ge().substring(16),
        sampled: o,
        dsc: r || {},
      }
    : { traceId: i || ge(), spanId: ge().substring(16) };
}
function od(e = ge(), t = ge().substring(16), n) {
  let r = "";
  return (n !== void 0 && (r = n ? "-1" : "-0"), `${e}-${t}${r}`);
}
function Fn(e, t = []) {
  return [e, t];
}
function E0(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function pp(e, t) {
  const n = e[1];
  for (const r of n) {
    const i = r[0].type;
    if (t(r, i)) return !0;
  }
  return !1;
}
function zu(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function w0(e, t) {
  const [n, r] = e;
  let i = JSON.stringify(n);
  function s(o) {
    typeof i == "string"
      ? (i = typeof o == "string" ? i + o : [zu(i, t), o])
      : i.push(typeof o == "string" ? zu(o, t) : o);
  }
  for (const o of r) {
    const [a, l] = o;
    if (
      (s(`
${JSON.stringify(a)}
`),
      typeof l == "string" || l instanceof Uint8Array)
    )
      s(l);
    else {
      let u;
      try {
        u = JSON.stringify(l);
      } catch {
        u = JSON.stringify(bt(l));
      }
      s(u);
    }
  }
  return typeof i == "string" ? i : k0(i);
}
function k0(e) {
  const t = e.reduce((i, s) => i + s.length, 0),
    n = new Uint8Array(t);
  let r = 0;
  for (const i of e) (n.set(i, r), (r += i.length));
  return n;
}
function T0(e, t) {
  const n = typeof e.data == "string" ? zu(e.data, t) : e.data;
  return [
    He({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    }),
    n,
  ];
}
const I0 = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket",
};
function hp(e) {
  return I0[e];
}
function ad(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function ny(e, t, n, r) {
  const i =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: cr(r) }),
    ...(i && { trace: He({ ...i }) }),
  };
}
function C0(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: Es(), discarded_events: e },
  ];
  return Fn(t ? { dsn: t } : {}, [r]);
}
const x0 = 60 * 1e3;
function R0(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const r = Date.parse(`${e}`);
  return isNaN(r) ? x0 : r - t;
}
function N0(e, t) {
  return e[t] || e.all || 0;
}
function ry(e, t, n = Date.now()) {
  return N0(e, t) > n;
}
function iy(e, { statusCode: t, headers: n }, r = Date.now()) {
  const i = { ...e },
    s = n && n["x-sentry-rate-limits"],
    o = n && n["retry-after"];
  if (s)
    for (const a of s.trim().split(",")) {
      const [l, u, , , c] = a.split(":", 5),
        d = parseInt(l, 10),
        f = (isNaN(d) ? 60 : d) * 1e3;
      if (!u) i.all = r + f;
      else
        for (const p of u.split(";"))
          p === "metric_bucket"
            ? (!c || c.split(";").includes("custom")) && (i[p] = r + f)
            : (i[p] = r + f);
    }
  else o ? (i.all = r + R0(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
  return i;
}
function M0(e, t) {
  return e ?? t();
}
function Il(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length; ) {
    const i = e[r],
      s = e[r + 1];
    if (
      ((r += 2), (i === "optionalAccess" || i === "optionalCall") && n == null)
    )
      return;
    i === "access" || i === "optionalAccess"
      ? ((t = n), (n = s(n)))
      : (i === "call" || i === "optionalCall") &&
        ((n = s((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
const D = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  xa = "production";
function ld() {
  return $g("globalEventProcessors", () => []);
}
function O0(e) {
  ld().push(e);
}
function Yo(e, t, n, r = 0) {
  return new nt((i, s) => {
    const o = e[r];
    if (t === null || typeof o != "function") i(t);
    else {
      const a = o({ ...t }, n);
      (D &&
        o.id &&
        a === null &&
        S.log(`Event processor "${o.id}" dropped event`),
        Ia(a)
          ? a.then((l) => Yo(e, l, n, r + 1).then(i)).then(null, s)
          : Yo(e, a, n, r + 1)
              .then(i)
              .then(null, s));
    }
  });
}
function sy(e) {
  const t = sr(),
    n = {
      sid: ge(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => D0(n),
    };
  return (e && or(n, e), n);
}
function or(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || sr()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : ge()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function oy(e, t) {
  let n = {};
  (e.status === "ok" && (n = { status: "exited" }), or(e, n));
}
function D0(e) {
  return He({
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == "number" || typeof e.did == "string"
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  });
}
const A0 = 0,
  ay = 1;
function ud(e) {
  const { spanId: t, traceId: n } = e.spanContext(),
    {
      data: r,
      op: i,
      parent_span_id: s,
      status: o,
      tags: a,
      origin: l,
    } = Re(e);
  return He({
    data: r,
    op: i,
    parent_span_id: s,
    span_id: t,
    status: o,
    tags: a,
    trace_id: n,
    origin: l,
  });
}
function Ra(e) {
  const { traceId: t, spanId: n } = e.spanContext(),
    r = cd(e);
  return od(t, n, r);
}
function Na(e) {
  return typeof e == "number"
    ? mp(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? mp(e.getTime())
        : sr();
}
function mp(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function Re(e) {
  return b0(e)
    ? e.getSpanJSON()
    : typeof e.toJSON == "function"
      ? e.toJSON()
      : {};
}
function b0(e) {
  return typeof e.getSpanJSON == "function";
}
function cd(e) {
  const { traceFlags: t } = e.spanContext();
  return !!(t & ay);
}
function ly(e, t, n, r, i, s) {
  const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = e,
    l = {
      ...t,
      event_id: t.event_id || n.event_id || ge(),
      timestamp: t.timestamp || Es(),
    },
    u = n.integrations || e.integrations.map((E) => E.name);
  (P0(l, e), $0(l, u), t.type === void 0 && L0(l, e.stackParser));
  const c = B0(r, n.captureContext);
  n.mechanism && ds(l, n.mechanism);
  const d = i && i.getEventProcessors ? i.getEventProcessors() : [],
    f = J0().getScopeData();
  if (s) {
    const E = s.getScopeData();
    Sp(f, E);
  }
  if (c) {
    const E = c.getScopeData();
    Sp(f, E);
  }
  const p = [...(n.attachments || []), ...f.attachments];
  (p.length && (n.attachments = p), fy(l, f));
  const g = [...d, ...ld(), ...f.eventProcessors];
  return Yo(g, l, n).then(
    (E) => (E && F0(E), typeof o == "number" && o > 0 ? z0(E, o, a) : E),
  );
}
function P0(e, t) {
  const { environment: n, release: r, dist: i, maxValueLength: s = 250 } = t;
  ("environment" in e || (e.environment = "environment" in t ? n : xa),
    e.release === void 0 && r !== void 0 && (e.release = r),
    e.dist === void 0 && i !== void 0 && (e.dist = i),
    e.message && (e.message = jr(e.message, s)));
  const o = e.exception && e.exception.values && e.exception.values[0];
  o && o.value && (o.value = jr(o.value, s));
  const a = e.request;
  a && a.url && (a.url = jr(a.url, s));
}
const gp = new WeakMap();
function L0(e, t) {
  const n = U._sentryDebugIds;
  if (!n) return;
  let r;
  const i = gp.get(t);
  i ? (r = i) : ((r = new Map()), gp.set(t, r));
  const s = Object.keys(n).reduce((o, a) => {
    let l;
    const u = r.get(a);
    u ? (l = u) : ((l = t(a)), r.set(a, l));
    for (let c = l.length - 1; c >= 0; c--) {
      const d = l[c];
      if (d.filename) {
        o[d.filename] = n[a];
        break;
      }
    }
    return o;
  }, {});
  try {
    e.exception.values.forEach((o) => {
      o.stacktrace.frames.forEach((a) => {
        a.filename && (a.debug_id = s[a.filename]);
      });
    });
  } catch {}
}
function F0(e) {
  const t = {};
  try {
    e.exception.values.forEach((r) => {
      r.stacktrace.frames.forEach((i) => {
        i.debug_id &&
          (i.abs_path
            ? (t[i.abs_path] = i.debug_id)
            : i.filename && (t[i.filename] = i.debug_id),
          delete i.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  ((e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []));
  const n = e.debug_meta.images;
  Object.keys(t).forEach((r) => {
    n.push({ type: "sourcemap", code_file: r, debug_id: t[r] });
  });
}
function $0(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function z0(e, t, n) {
  if (!e) return null;
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((i) => ({
        ...i,
        ...(i.data && { data: bt(i.data, t, n) }),
      })),
    }),
    ...(e.user && { user: bt(e.user, t, n) }),
    ...(e.contexts && { contexts: bt(e.contexts, t, n) }),
    ...(e.extra && { extra: bt(e.extra, t, n) }),
  };
  return (
    e.contexts &&
      e.contexts.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (r.contexts.trace.data = bt(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map((i) => {
        const s = Re(i).data;
        return (s && (i.data = bt(s, t, n)), i);
      })),
    r
  );
}
function B0(e, t) {
  if (!t) return e;
  const n = e ? e.clone() : new Qt();
  return (n.update(t), n);
}
function U0(e) {
  if (e)
    return j0(e) ? { captureContext: e } : W0(e) ? { captureContext: e } : e;
}
function j0(e) {
  return e instanceof Qt || typeof e == "function";
}
const H0 = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext",
];
function W0(e) {
  return Object.keys(e).some((t) => H0.includes(t));
}
function ei(e, t) {
  return Ze().captureException(e, U0(t));
}
function uy(e, t) {
  return Ze().captureEvent(e, t);
}
function An(e, t) {
  Ze().addBreadcrumb(e, t);
}
function V0(e, t) {
  Ze().setContext(e, t);
}
function dd(...e) {
  const t = Ze();
  if (e.length === 2) {
    const [n, r] = e;
    return n
      ? t.withScope(() => ((t.getStackTop().scope = n), r(n)))
      : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function yp(e, t) {
  return dd((n) => (n.setSpan(e), t(n)));
}
function q() {
  return Ze().getClient();
}
function ut() {
  return Ze().getScope();
}
function _p(e) {
  const t = q(),
    n = $n(),
    r = ut(),
    { release: i, environment: s = xa } = (t && t.getOptions()) || {},
    { userAgent: o } = U.navigator || {},
    a = sy({
      release: i,
      environment: s,
      user: r.getUser() || n.getUser(),
      ...(o && { userAgent: o }),
      ...e,
    }),
    l = n.getSession();
  return (
    l && l.status === "ok" && or(l, { status: "exited" }),
    cy(),
    n.setSession(a),
    r.setSession(a),
    a
  );
}
function cy() {
  const e = $n(),
    t = ut(),
    n = t.getSession() || e.getSession();
  (n && oy(n), dy(), e.setSession(), t.setSession());
}
function dy() {
  const e = $n(),
    t = ut(),
    n = q(),
    r = t.getSession() || e.getSession();
  r && n && n.captureSession && n.captureSession(r);
}
function vp(e = !1) {
  if (e) {
    cy();
    return;
  }
  dy();
}
function qo(e) {
  return e.transaction;
}
function Ma(e, t, n) {
  const r = t.getOptions(),
    { publicKey: i } = t.getDsn() || {},
    { segment: s } = (n && n.getUser()) || {},
    o = He({
      environment: r.environment || xa,
      release: r.release,
      user_segment: s,
      public_key: i,
      trace_id: e,
    });
  return (t.emit && t.emit("createDsc", o), o);
}
function ti(e) {
  const t = q();
  if (!t) return {};
  const n = Ma(Re(e).trace_id || "", t, ut()),
    r = qo(e);
  if (!r) return n;
  const i = r && r._frozenDynamicSamplingContext;
  if (i) return i;
  const { sampleRate: s, source: o } = r.metadata;
  s != null && (n.sample_rate = `${s}`);
  const a = Re(r);
  return (
    o && o !== "url" && (n.transaction = a.description),
    (n.sampled = String(cd(r))),
    t.emit && t.emit("createDsc", n),
    n
  );
}
function fy(e, t) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: i,
    sdkProcessingMetadata: s,
  } = t;
  (G0(e, t), r && K0(e, r), X0(e, n), Y0(e, i), q0(e, s));
}
function Sp(e, t) {
  const {
    extra: n,
    tags: r,
    user: i,
    contexts: s,
    level: o,
    sdkProcessingMetadata: a,
    breadcrumbs: l,
    fingerprint: u,
    eventProcessors: c,
    attachments: d,
    propagationContext: f,
    transactionName: p,
    span: g,
  } = t;
  (Ci(e, "extra", n),
    Ci(e, "tags", r),
    Ci(e, "user", i),
    Ci(e, "contexts", s),
    Ci(e, "sdkProcessingMetadata", a),
    o && (e.level = o),
    p && (e.transactionName = p),
    g && (e.span = g),
    l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
    u.length && (e.fingerprint = [...e.fingerprint, ...u]),
    c.length && (e.eventProcessors = [...e.eventProcessors, ...c]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    (e.propagationContext = { ...e.propagationContext, ...f }));
}
function Ci(e, t, n) {
  if (n && Object.keys(n).length) {
    e[t] = { ...e[t] };
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r]);
  }
}
function G0(e, t) {
  const {
      extra: n,
      tags: r,
      user: i,
      contexts: s,
      level: o,
      transactionName: a,
    } = t,
    l = He(n);
  l && Object.keys(l).length && (e.extra = { ...l, ...e.extra });
  const u = He(r);
  u && Object.keys(u).length && (e.tags = { ...u, ...e.tags });
  const c = He(i);
  c && Object.keys(c).length && (e.user = { ...c, ...e.user });
  const d = He(s);
  (d && Object.keys(d).length && (e.contexts = { ...d, ...e.contexts }),
    o && (e.level = o),
    a && (e.transaction = a));
}
function Y0(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function q0(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function K0(e, t) {
  e.contexts = { trace: ud(t), ...e.contexts };
  const n = qo(t);
  if (n) {
    e.sdkProcessingMetadata = {
      dynamicSamplingContext: ti(t),
      ...e.sdkProcessingMetadata,
    };
    const r = Re(n).description;
    r && (e.tags = { transaction: r, ...e.tags });
  }
}
function X0(e, t) {
  ((e.fingerprint = e.fingerprint ? Yg(e.fingerprint) : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint);
}
const Q0 = 100;
let Cl;
class Qt {
  constructor() {
    ((this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = Ep()));
  }
  static clone(t) {
    return t ? t.clone() : new Qt();
  }
  clone() {
    const t = new Qt();
    return (
      (t._breadcrumbs = [...this._breadcrumbs]),
      (t._tags = { ...this._tags }),
      (t._extra = { ...this._extra }),
      (t._contexts = { ...this._contexts }),
      (t._user = this._user),
      (t._level = this._level),
      (t._span = this._span),
      (t._session = this._session),
      (t._transactionName = this._transactionName),
      (t._fingerprint = this._fingerprint),
      (t._eventProcessors = [...this._eventProcessors]),
      (t._requestSession = this._requestSession),
      (t._attachments = [...this._attachments]),
      (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (t._propagationContext = { ...this._propagationContext }),
      (t._client = this._client),
      t
    );
  }
  setClient(t) {
    this._client = t;
  }
  getClient() {
    return this._client;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return (this._eventProcessors.push(t), this);
  }
  setUser(t) {
    return (
      (this._user = t || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        segment: void 0,
        username: void 0,
      }),
      this._session && or(this._session, { user: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return ((this._requestSession = t), this);
  }
  setTags(t) {
    return (
      (this._tags = { ...this._tags, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setTag(t, n) {
    return (
      (this._tags = { ...this._tags, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(t) {
    return (
      (this._extra = { ...this._extra, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(t, n) {
    return (
      (this._extra = { ...this._extra, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(t) {
    return ((this._fingerprint = t), this._notifyScopeListeners(), this);
  }
  setLevel(t) {
    return ((this._level = t), this._notifyScopeListeners(), this);
  }
  setTransactionName(t) {
    return ((this._transactionName = t), this._notifyScopeListeners(), this);
  }
  setContext(t, n) {
    return (
      n === null ? delete this._contexts[t] : (this._contexts[t] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSpan(t) {
    return ((this._span = t), this._notifyScopeListeners(), this);
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const t = this._span;
    return t && t.transaction;
  }
  setSession(t) {
    return (
      t ? (this._session = t) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const n = typeof t == "function" ? t(this) : t;
    if (n instanceof Qt) {
      const r = n.getScopeData();
      ((this._tags = { ...this._tags, ...r.tags }),
        (this._extra = { ...this._extra, ...r.extra }),
        (this._contexts = { ...this._contexts, ...r.contexts }),
        r.user && Object.keys(r.user).length && (this._user = r.user),
        r.level && (this._level = r.level),
        r.fingerprint.length && (this._fingerprint = r.fingerprint),
        n.getRequestSession() && (this._requestSession = n.getRequestSession()),
        r.propagationContext &&
          (this._propagationContext = r.propagationContext));
    } else if (Jr(n)) {
      const r = t;
      ((this._tags = { ...this._tags, ...r.tags }),
        (this._extra = { ...this._extra, ...r.extra }),
        (this._contexts = { ...this._contexts, ...r.contexts }),
        r.user && (this._user = r.user),
        r.level && (this._level = r.level),
        r.fingerprint && (this._fingerprint = r.fingerprint),
        r.requestSession && (this._requestSession = r.requestSession),
        r.propagationContext &&
          (this._propagationContext = r.propagationContext));
    }
    return this;
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._span = void 0),
      (this._session = void 0),
      this._notifyScopeListeners(),
      (this._attachments = []),
      (this._propagationContext = Ep()),
      this
    );
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : Q0;
    if (r <= 0) return this;
    const i = { timestamp: Es(), ...t },
      s = this._breadcrumbs;
    return (
      s.push(i),
      (this._breadcrumbs = s.length > r ? s.slice(-r) : s),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
  }
  addAttachment(t) {
    return (this._attachments.push(t), this);
  }
  getAttachments() {
    return this.getScopeData().attachments;
  }
  clearAttachments() {
    return ((this._attachments = []), this);
  }
  getScopeData() {
    const {
      _breadcrumbs: t,
      _attachments: n,
      _contexts: r,
      _tags: i,
      _extra: s,
      _user: o,
      _level: a,
      _fingerprint: l,
      _eventProcessors: u,
      _propagationContext: c,
      _sdkProcessingMetadata: d,
      _transactionName: f,
      _span: p,
    } = this;
    return {
      breadcrumbs: t,
      attachments: n,
      contexts: r,
      tags: i,
      extra: s,
      user: o,
      level: a,
      fingerprint: l || [],
      eventProcessors: u,
      propagationContext: c,
      sdkProcessingMetadata: d,
      transactionName: f,
      span: p,
    };
  }
  applyToEvent(t, n = {}, r = []) {
    fy(t, this.getScopeData());
    const i = [...r, ...ld(), ...this._eventProcessors];
    return Yo(i, t, n);
  }
  setSDKProcessingMetadata(t) {
    return (
      (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }),
      this
    );
  }
  setPropagationContext(t) {
    return ((this._propagationContext = t), this);
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, n) {
    const r = n && n.event_id ? n.event_id : ge();
    if (!this._client)
      return (
        S.warn("No client configured on scope - will not capture exception!"),
        r
      );
    const i = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        t,
        { originalException: t, syntheticException: i, ...n, event_id: r },
        this,
      ),
      r
    );
  }
  captureMessage(t, n, r) {
    const i = r && r.event_id ? r.event_id : ge();
    if (!this._client)
      return (
        S.warn("No client configured on scope - will not capture message!"),
        i
      );
    const s = new Error(t);
    return (
      this._client.captureMessage(
        t,
        n,
        { originalException: t, syntheticException: s, ...r, event_id: i },
        this,
      ),
      i
    );
  }
  captureEvent(t, n) {
    const r = n && n.event_id ? n.event_id : ge();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
      : (S.warn("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this);
      }),
      (this._notifyingListeners = !1));
  }
}
function J0() {
  return (Cl || (Cl = new Qt()), Cl);
}
function Ep() {
  return { traceId: ge(), spanId: ge().substring(16) };
}
const Bu = "7.120.4",
  py = parseFloat(Bu),
  Z0 = 100;
class hy {
  constructor(t, n, r, i = py) {
    this._version = i;
    let s;
    n ? (s = n) : ((s = new Qt()), s.setClient(t));
    let o;
    (r ? (o = r) : ((o = new Qt()), o.setClient(t)),
      (this._stack = [{ scope: s }]),
      t && this.bindClient(t),
      (this._isolationScope = o));
  }
  isOlderThan(t) {
    return this._version < t;
  }
  bindClient(t) {
    const n = this.getStackTop();
    ((n.client = t),
      n.scope.setClient(t),
      t && t.setupIntegrations && t.setupIntegrations());
  }
  pushScope() {
    const t = this.getScope().clone();
    return (this.getStack().push({ client: this.getClient(), scope: t }), t);
  }
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  withScope(t) {
    const n = this.pushScope();
    let r;
    try {
      r = t(n);
    } catch (i) {
      throw (this.popScope(), i);
    }
    return Ia(r)
      ? r.then(
          (i) => (this.popScope(), i),
          (i) => {
            throw (this.popScope(), i);
          },
        )
      : (this.popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(t, n) {
    const r = (this._lastEventId = n && n.event_id ? n.event_id : ge()),
      i = new Error("Sentry syntheticException");
    return (
      this.getScope().captureException(t, {
        originalException: t,
        syntheticException: i,
        ...n,
        event_id: r,
      }),
      r
    );
  }
  captureMessage(t, n, r) {
    const i = (this._lastEventId = r && r.event_id ? r.event_id : ge()),
      s = new Error(t);
    return (
      this.getScope().captureMessage(t, n, {
        originalException: t,
        syntheticException: s,
        ...r,
        event_id: i,
      }),
      i
    );
  }
  captureEvent(t, n) {
    const r = n && n.event_id ? n.event_id : ge();
    return (
      t.type || (this._lastEventId = r),
      this.getScope().captureEvent(t, { ...n, event_id: r }),
      r
    );
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(t, n) {
    const { scope: r, client: i } = this.getStackTop();
    if (!i) return;
    const { beforeBreadcrumb: s = null, maxBreadcrumbs: o = Z0 } =
      (i.getOptions && i.getOptions()) || {};
    if (o <= 0) return;
    const l = { timestamp: Es(), ...t },
      u = s ? rr(() => s(l, n)) : l;
    u !== null &&
      (i.emit && i.emit("beforeAddBreadcrumb", u, n), r.addBreadcrumb(u, o));
  }
  setUser(t) {
    (this.getScope().setUser(t), this.getIsolationScope().setUser(t));
  }
  setTags(t) {
    (this.getScope().setTags(t), this.getIsolationScope().setTags(t));
  }
  setExtras(t) {
    (this.getScope().setExtras(t), this.getIsolationScope().setExtras(t));
  }
  setTag(t, n) {
    (this.getScope().setTag(t, n), this.getIsolationScope().setTag(t, n));
  }
  setExtra(t, n) {
    (this.getScope().setExtra(t, n), this.getIsolationScope().setExtra(t, n));
  }
  setContext(t, n) {
    (this.getScope().setContext(t, n),
      this.getIsolationScope().setContext(t, n));
  }
  configureScope(t) {
    const { scope: n, client: r } = this.getStackTop();
    r && t(n);
  }
  run(t) {
    const n = wp(this);
    try {
      t(this);
    } finally {
      wp(n);
    }
  }
  getIntegration(t) {
    const n = this.getClient();
    if (!n) return null;
    try {
      return n.getIntegration(t);
    } catch {
      return (
        D && S.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
        null
      );
    }
  }
  startTransaction(t, n) {
    const r = this._callExtensionMethod("startTransaction", t, n);
    return (
      D &&
        !r &&
        (this.getClient()
          ? S.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`)
          : S.warn(
              "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'",
            )),
      r
    );
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(t = !1) {
    if (t) return this.endSession();
    this._sendSessionUpdate();
  }
  endSession() {
    const n = this.getStackTop().scope,
      r = n.getSession();
    (r && oy(r), this._sendSessionUpdate(), n.setSession());
  }
  startSession(t) {
    const { scope: n, client: r } = this.getStackTop(),
      { release: i, environment: s = xa } = (r && r.getOptions()) || {},
      { userAgent: o } = U.navigator || {},
      a = sy({
        release: i,
        environment: s,
        user: n.getUser(),
        ...(o && { userAgent: o }),
        ...t,
      }),
      l = n.getSession && n.getSession();
    return (
      l && l.status === "ok" && or(l, { status: "exited" }),
      this.endSession(),
      n.setSession(a),
      a
    );
  }
  shouldSendDefaultPii() {
    const t = this.getClient(),
      n = t && t.getOptions();
    return !!(n && n.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const { scope: t, client: n } = this.getStackTop(),
      r = t.getSession();
    r && n && n.captureSession && n.captureSession(r);
  }
  _callExtensionMethod(t, ...n) {
    const i = ws().__SENTRY__;
    if (i && i.extensions && typeof i.extensions[t] == "function")
      return i.extensions[t].apply(this, n);
    D && S.warn(`Extension method ${t} couldn't be found, doing nothing.`);
  }
}
function ws() {
  return ((U.__SENTRY__ = U.__SENTRY__ || { extensions: {}, hub: void 0 }), U);
}
function wp(e) {
  const t = ws(),
    n = Uu(t);
  return (my(t, e), n);
}
function Ze() {
  const e = ws();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t) return t;
  }
  return ew(e);
}
function $n() {
  return Ze().getIsolationScope();
}
function ew(e = ws()) {
  return ((!tw(e) || Uu(e).isOlderThan(py)) && my(e, new hy()), Uu(e));
}
function tw(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function Uu(e) {
  return $g("hub", () => new hy(), e);
}
function my(e, t) {
  if (!e) return !1;
  const n = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((n.hub = t), !0);
}
function ar(e) {
  return Ze().getScope().getTransaction();
}
let kp = !1;
function nw() {
  kp || ((kp = !0), Xg(ju), Qg(ju));
}
function ju() {
  const e = ar();
  if (e) {
    const t = "internal_error";
    (D && S.log(`[Tracing] Transaction: ${t} -> Global error occured`),
      e.setStatus(t));
  }
}
ju.tag = "sentry_tracingErrorCallback";
var Tp;
(function (e) {
  const t = "ok";
  e.Ok = t;
  const n = "deadline_exceeded";
  e.DeadlineExceeded = n;
  const r = "unauthenticated";
  e.Unauthenticated = r;
  const i = "permission_denied";
  e.PermissionDenied = i;
  const s = "not_found";
  e.NotFound = s;
  const o = "resource_exhausted";
  e.ResourceExhausted = o;
  const a = "invalid_argument";
  e.InvalidArgument = a;
  const l = "unimplemented";
  e.Unimplemented = l;
  const u = "unavailable";
  e.Unavailable = u;
  const c = "internal_error";
  e.InternalError = c;
  const d = "unknown_error";
  e.UnknownError = d;
  const f = "cancelled";
  e.Cancelled = f;
  const p = "already_exists";
  e.AlreadyExists = p;
  const g = "failed_precondition";
  e.FailedPrecondition = g;
  const _ = "aborted";
  e.Aborted = _;
  const E = "out_of_range";
  e.OutOfRange = E;
  const h = "data_loss";
  e.DataLoss = h;
})(Tp || (Tp = {}));
function rw(e) {
  if (e < 400 && e >= 100) return "ok";
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
function fd(e, t) {
  (e.setTag("http.status_code", String(t)),
    e.setData("http.response.status_code", t));
  const n = rw(t);
  n !== "unknown_error" && e.setStatus(n);
}
function hi(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = q(),
    n = e || (t && t.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
function ji(e) {
  if (!hi()) return;
  const t = ow(e),
    n = Ze(),
    r = e.scope ? e.scope.getSpan() : iw();
  if (e.onlyIfParent && !r) return;
  const o = (e.scope || ut()).clone();
  return sw(n, {
    parentSpan: r,
    spanContext: t,
    forceTransaction: e.forceTransaction,
    scope: o,
  });
}
function iw() {
  return ut().getSpan();
}
function sw(
  e,
  { parentSpan: t, spanContext: n, forceTransaction: r, scope: i },
) {
  if (!hi()) return;
  const s = $n();
  let o;
  if (t && !r) o = t.startChild(n);
  else if (t) {
    const a = ti(t),
      { traceId: l, spanId: u } = t.spanContext(),
      c = cd(t);
    o = e.startTransaction({
      traceId: l,
      parentSpanId: u,
      parentSampled: c,
      ...n,
      metadata: { dynamicSamplingContext: a, ...n.metadata },
    });
  } else {
    const {
      traceId: a,
      dsc: l,
      parentSpanId: u,
      sampled: c,
    } = { ...s.getPropagationContext(), ...i.getPropagationContext() };
    o = e.startTransaction({
      traceId: a,
      parentSpanId: u,
      parentSampled: c,
      ...n,
      metadata: { dynamicSamplingContext: l, ...n.metadata },
    });
  }
  return (i.setSpan(o), aw(o, i, s), o);
}
function ow(e) {
  if (e.startTime) {
    const t = { ...e };
    return ((t.startTimestamp = Na(e.startTime)), delete t.startTime, t);
  }
  return e;
}
const gy = "_sentryScope",
  yy = "_sentryIsolationScope";
function aw(e, t, n) {
  e && (ir(e, yy, n), ir(e, gy, t));
}
function lw(e) {
  return { scope: e[gy], isolationScope: e[yy] };
}
const Qn = "sentry.source",
  Mr = "sentry.sample_rate",
  eo = "sentry.op",
  Or = "sentry.origin",
  uw = "profile_id";
class _y {
  constructor(t = 1e3) {
    ((this._maxlen = t), (this.spans = []));
  }
  add(t) {
    this.spans.length > this._maxlen
      ? (t.spanRecorder = void 0)
      : this.spans.push(t);
  }
}
class Oa {
  constructor(t = {}) {
    ((this._traceId = t.traceId || ge()),
      (this._spanId = t.spanId || ge().substring(16)),
      (this._startTime = t.startTimestamp || sr()),
      (this.tags = t.tags ? { ...t.tags } : {}),
      (this.data = t.data ? { ...t.data } : {}),
      (this.instrumenter = t.instrumenter || "sentry"),
      (this._attributes = {}),
      this.setAttributes({
        [Or]: t.origin || "manual",
        [eo]: t.op,
        ...t.attributes,
      }),
      (this._name = t.name || t.description),
      t.parentSpanId && (this._parentSpanId = t.parentSpanId),
      "sampled" in t && (this._sampled = t.sampled),
      t.status && (this._status = t.status),
      t.endTimestamp && (this._endTime = t.endTimestamp),
      t.exclusiveTime !== void 0 && (this._exclusiveTime = t.exclusiveTime),
      (this._measurements = t.measurements ? { ...t.measurements } : {}));
  }
  get name() {
    return this._name || "";
  }
  set name(t) {
    this.updateName(t);
  }
  get description() {
    return this._name;
  }
  set description(t) {
    this._name = t;
  }
  get traceId() {
    return this._traceId;
  }
  set traceId(t) {
    this._traceId = t;
  }
  get spanId() {
    return this._spanId;
  }
  set spanId(t) {
    this._spanId = t;
  }
  set parentSpanId(t) {
    this._parentSpanId = t;
  }
  get parentSpanId() {
    return this._parentSpanId;
  }
  get sampled() {
    return this._sampled;
  }
  set sampled(t) {
    this._sampled = t;
  }
  get attributes() {
    return this._attributes;
  }
  set attributes(t) {
    this._attributes = t;
  }
  get startTimestamp() {
    return this._startTime;
  }
  set startTimestamp(t) {
    this._startTime = t;
  }
  get endTimestamp() {
    return this._endTime;
  }
  set endTimestamp(t) {
    this._endTime = t;
  }
  get status() {
    return this._status;
  }
  set status(t) {
    this._status = t;
  }
  get op() {
    return this._attributes[eo];
  }
  set op(t) {
    this.setAttribute(eo, t);
  }
  get origin() {
    return this._attributes[Or];
  }
  set origin(t) {
    this.setAttribute(Or, t);
  }
  spanContext() {
    const { _spanId: t, _traceId: n, _sampled: r } = this;
    return { spanId: t, traceId: n, traceFlags: r ? ay : A0 };
  }
  startChild(t) {
    const n = new Oa({
      ...t,
      parentSpanId: this._spanId,
      sampled: this._sampled,
      traceId: this._traceId,
    });
    ((n.spanRecorder = this.spanRecorder),
      n.spanRecorder && n.spanRecorder.add(n));
    const r = qo(this);
    if (((n.transaction = r), D && r)) {
      const i = (t && t.op) || "< unknown op >",
        s = Re(n).description || "< unknown name >",
        o = r.spanContext().spanId,
        a = `[Tracing] Starting '${i}' span on transaction '${s}' (${o}).`;
      (S.log(a), (this._logMessage = a));
    }
    return n;
  }
  setTag(t, n) {
    return ((this.tags = { ...this.tags, [t]: n }), this);
  }
  setData(t, n) {
    return ((this.data = { ...this.data, [t]: n }), this);
  }
  setAttribute(t, n) {
    n === void 0 ? delete this._attributes[t] : (this._attributes[t] = n);
  }
  setAttributes(t) {
    Object.keys(t).forEach((n) => this.setAttribute(n, t[n]));
  }
  setStatus(t) {
    return ((this._status = t), this);
  }
  setHttpStatus(t) {
    return (fd(this, t), this);
  }
  setName(t) {
    this.updateName(t);
  }
  updateName(t) {
    return ((this._name = t), this);
  }
  isSuccess() {
    return this._status === "ok";
  }
  finish(t) {
    return this.end(t);
  }
  end(t) {
    if (this._endTime) return;
    const n = qo(this);
    if (D && n && n.spanContext().spanId !== this._spanId) {
      const r = this._logMessage;
      r && S.log(r.replace("Starting", "Finishing"));
    }
    this._endTime = Na(t);
  }
  toTraceparent() {
    return Ra(this);
  }
  toContext() {
    return He({
      data: this._getData(),
      description: this._name,
      endTimestamp: this._endTime,
      op: this.op,
      parentSpanId: this._parentSpanId,
      sampled: this._sampled,
      spanId: this._spanId,
      startTimestamp: this._startTime,
      status: this._status,
      tags: this.tags,
      traceId: this._traceId,
    });
  }
  updateWithContext(t) {
    return (
      (this.data = t.data || {}),
      (this._name = t.name || t.description),
      (this._endTime = t.endTimestamp),
      (this.op = t.op),
      (this._parentSpanId = t.parentSpanId),
      (this._sampled = t.sampled),
      (this._spanId = t.spanId || this._spanId),
      (this._startTime = t.startTimestamp || this._startTime),
      (this._status = t.status),
      (this.tags = t.tags || {}),
      (this._traceId = t.traceId || this._traceId),
      this
    );
  }
  getTraceContext() {
    return ud(this);
  }
  getSpanJSON() {
    return He({
      data: this._getData(),
      description: this._name,
      op: this._attributes[eo],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: this._status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[Or],
      _metrics_summary: void 0,
      profile_id: this._attributes[uw],
      exclusive_time: this._exclusiveTime,
      measurements:
        Object.keys(this._measurements).length > 0
          ? this._measurements
          : void 0,
    });
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  toJSON() {
    return this.getSpanJSON();
  }
  _getData() {
    const { data: t, _attributes: n } = this,
      r = Object.keys(t).length > 0,
      i = Object.keys(n).length > 0;
    if (!(!r && !i)) return r && i ? { ...t, ...n } : r ? t : n;
  }
}
class vy extends Oa {
  constructor(t, n) {
    (super(t),
      (this._contexts = {}),
      (this._hub = n || Ze()),
      (this._name = t.name || ""),
      (this._metadata = { ...t.metadata }),
      (this._trimEnd = t.trimEnd),
      (this.transaction = this));
    const r = this._metadata.dynamicSamplingContext;
    r && (this._frozenDynamicSamplingContext = { ...r });
  }
  get name() {
    return this._name;
  }
  set name(t) {
    this.setName(t);
  }
  get metadata() {
    return {
      source: "custom",
      spanMetadata: {},
      ...this._metadata,
      ...(this._attributes[Qn] && { source: this._attributes[Qn] }),
      ...(this._attributes[Mr] && { sampleRate: this._attributes[Mr] }),
    };
  }
  set metadata(t) {
    this._metadata = t;
  }
  setName(t, n = "custom") {
    ((this._name = t), this.setAttribute(Qn, n));
  }
  updateName(t) {
    return ((this._name = t), this);
  }
  initSpanRecorder(t = 1e3) {
    (this.spanRecorder || (this.spanRecorder = new _y(t)),
      this.spanRecorder.add(this));
  }
  setContext(t, n) {
    n === null ? delete this._contexts[t] : (this._contexts[t] = n);
  }
  setMeasurement(t, n, r = "") {
    this._measurements[t] = { value: n, unit: r };
  }
  setMetadata(t) {
    this._metadata = { ...this._metadata, ...t };
  }
  end(t) {
    const n = Na(t),
      r = this._finishTransaction(n);
    if (r) return this._hub.captureEvent(r);
  }
  toContext() {
    const t = super.toContext();
    return He({ ...t, name: this._name, trimEnd: this._trimEnd });
  }
  updateWithContext(t) {
    return (
      super.updateWithContext(t),
      (this._name = t.name || ""),
      (this._trimEnd = t.trimEnd),
      this
    );
  }
  getDynamicSamplingContext() {
    return ti(this);
  }
  setHub(t) {
    this._hub = t;
  }
  getProfileId() {
    if (this._contexts !== void 0 && this._contexts.profile !== void 0)
      return this._contexts.profile.profile_id;
  }
  _finishTransaction(t) {
    if (this._endTime !== void 0) return;
    (this._name ||
      (D &&
        S.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`.",
        ),
      (this._name = "<unlabeled transaction>")),
      super.end(t));
    const n = this._hub.getClient();
    if (
      (n && n.emit && n.emit("finishTransaction", this), this._sampled !== !0)
    ) {
      (D &&
        S.log(
          "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
        ),
        n && n.recordDroppedEvent("sample_rate", "transaction"));
      return;
    }
    const r = this.spanRecorder
      ? this.spanRecorder.spans.filter((c) => c !== this && Re(c).timestamp)
      : [];
    if (this._trimEnd && r.length > 0) {
      const c = r.map((d) => Re(d).timestamp).filter(Boolean);
      this._endTime = c.reduce((d, f) => (d > f ? d : f));
    }
    const { scope: i, isolationScope: s } = lw(this),
      { metadata: o } = this,
      { source: a } = o,
      l = {
        contexts: { ...this._contexts, trace: ud(this) },
        spans: r,
        start_timestamp: this._startTime,
        tags: this.tags,
        timestamp: this._endTime,
        transaction: this._name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...o,
          capturedSpanScope: i,
          capturedSpanIsolationScope: s,
          ...He({ dynamicSamplingContext: ti(this) }),
        },
        _metrics_summary: void 0,
        ...(a && { transaction_info: { source: a } }),
      };
    return (
      Object.keys(this._measurements).length > 0 &&
        (D &&
          S.log(
            "[Measurements] Adding measurements to transaction",
            JSON.stringify(this._measurements, void 0, 2),
          ),
        (l.measurements = this._measurements)),
      D && S.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`),
      l
    );
  }
}
const Eo = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
  cw = "finishReason",
  hr = [
    "heartbeatFailed",
    "idleTimeout",
    "documentHidden",
    "finalTimeout",
    "externalFinish",
    "cancelled",
  ];
class dw extends _y {
  constructor(t, n, r, i) {
    (super(i),
      (this._pushActivity = t),
      (this._popActivity = n),
      (this.transactionSpanId = r));
  }
  add(t) {
    if (t.spanContext().spanId !== this.transactionSpanId) {
      const n = t.end;
      ((t.end = (...r) => (
        this._popActivity(t.spanContext().spanId),
        n.apply(t, r)
      )),
        Re(t).timestamp === void 0 &&
          this._pushActivity(t.spanContext().spanId));
    }
    super.add(t);
  }
}
class fw extends vy {
  constructor(
    t,
    n,
    r = Eo.idleTimeout,
    i = Eo.finalTimeout,
    s = Eo.heartbeatInterval,
    o = !1,
    a = !1,
  ) {
    (super(t, n),
      (this._idleHub = n),
      (this._idleTimeout = r),
      (this._finalTimeout = i),
      (this._heartbeatInterval = s),
      (this._onScope = o),
      (this.activities = {}),
      (this._heartbeatCounter = 0),
      (this._finished = !1),
      (this._idleTimeoutCanceledPermanently = !1),
      (this._beforeFinishCallbacks = []),
      (this._finishReason = hr[4]),
      (this._autoFinishAllowed = !a),
      o &&
        (D &&
          S.log(
            `Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`,
          ),
        n.getScope().setSpan(this)),
      a || this._restartIdleTimeout(),
      setTimeout(() => {
        this._finished ||
          (this.setStatus("deadline_exceeded"),
          (this._finishReason = hr[3]),
          this.end());
      }, this._finalTimeout));
  }
  end(t) {
    const n = Na(t);
    if (
      ((this._finished = !0),
      (this.activities = {}),
      this.op === "ui.action.click" &&
        this.setAttribute(cw, this._finishReason),
      this.spanRecorder)
    ) {
      D &&
        S.log(
          "[Tracing] finishing IdleTransaction",
          new Date(n * 1e3).toISOString(),
          this.op,
        );
      for (const r of this._beforeFinishCallbacks) r(this, n);
      ((this.spanRecorder.spans = this.spanRecorder.spans.filter((r) => {
        if (r.spanContext().spanId === this.spanContext().spanId) return !0;
        Re(r).timestamp ||
          (r.setStatus("cancelled"),
          r.end(n),
          D &&
            S.log(
              "[Tracing] cancelling span since transaction ended early",
              JSON.stringify(r, void 0, 2),
            ));
        const { start_timestamp: i, timestamp: s } = Re(r),
          o = i && i < n,
          a = (this._finalTimeout + this._idleTimeout) / 1e3,
          l = s && i && s - i < a;
        if (D) {
          const u = JSON.stringify(r, void 0, 2);
          o
            ? l ||
              S.log(
                "[Tracing] discarding Span since it finished after Transaction final timeout",
                u,
              )
            : S.log(
                "[Tracing] discarding Span since it happened after Transaction was finished",
                u,
              );
        }
        return o && l;
      })),
        D && S.log("[Tracing] flushing IdleTransaction"));
    } else D && S.log("[Tracing] No active IdleTransaction");
    if (this._onScope) {
      const r = this._idleHub.getScope();
      r.getTransaction() === this && r.setSpan(void 0);
    }
    return super.end(t);
  }
  registerBeforeFinishCallback(t) {
    this._beforeFinishCallbacks.push(t);
  }
  initSpanRecorder(t) {
    if (!this.spanRecorder) {
      const n = (i) => {
          this._finished || this._pushActivity(i);
        },
        r = (i) => {
          this._finished || this._popActivity(i);
        };
      ((this.spanRecorder = new dw(n, r, this.spanContext().spanId, t)),
        D && S.log("Starting heartbeat"),
        this._pingHeartbeat());
    }
    this.spanRecorder.add(this);
  }
  cancelIdleTimeout(
    t,
    { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 },
  ) {
    ((this._idleTimeoutCanceledPermanently = n === !1),
      this._idleTimeoutID &&
        (clearTimeout(this._idleTimeoutID),
        (this._idleTimeoutID = void 0),
        Object.keys(this.activities).length === 0 &&
          this._idleTimeoutCanceledPermanently &&
          ((this._finishReason = hr[5]), this.end(t))));
  }
  setFinishReason(t) {
    this._finishReason = t;
  }
  sendAutoFinishSignal() {
    this._autoFinishAllowed ||
      (D && S.log("[Tracing] Received finish signal for idle transaction."),
      this._restartIdleTimeout(),
      (this._autoFinishAllowed = !0));
  }
  _restartIdleTimeout(t) {
    (this.cancelIdleTimeout(),
      (this._idleTimeoutID = setTimeout(() => {
        !this._finished &&
          Object.keys(this.activities).length === 0 &&
          ((this._finishReason = hr[1]), this.end(t));
      }, this._idleTimeout)));
  }
  _pushActivity(t) {
    (this.cancelIdleTimeout(void 0, {
      restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
    }),
      D && S.log(`[Tracing] pushActivity: ${t}`),
      (this.activities[t] = !0),
      D &&
        S.log(
          "[Tracing] new activities count",
          Object.keys(this.activities).length,
        ));
  }
  _popActivity(t) {
    if (
      (this.activities[t] &&
        (D && S.log(`[Tracing] popActivity ${t}`),
        delete this.activities[t],
        D &&
          S.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length,
          )),
      Object.keys(this.activities).length === 0)
    ) {
      const n = sr();
      this._idleTimeoutCanceledPermanently
        ? this._autoFinishAllowed && ((this._finishReason = hr[5]), this.end(n))
        : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
    }
  }
  _beat() {
    if (this._finished) return;
    const t = Object.keys(this.activities).join("");
    (t === this._prevHeartbeatString
      ? this._heartbeatCounter++
      : (this._heartbeatCounter = 1),
      (this._prevHeartbeatString = t),
      this._heartbeatCounter >= 3
        ? this._autoFinishAllowed &&
          (D &&
            S.log(
              "[Tracing] Transaction finished because of no change for 3 heart beats",
            ),
          this.setStatus("deadline_exceeded"),
          (this._finishReason = hr[0]),
          this.end())
        : this._pingHeartbeat());
  }
  _pingHeartbeat() {
    (D &&
      S.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval));
  }
}
function Sy(e, t, n) {
  if (!hi(t)) return ((e.sampled = !1), e);
  if (e.sampled !== void 0) return (e.setAttribute(Mr, Number(e.sampled)), e);
  let r;
  return (
    typeof t.tracesSampler == "function"
      ? ((r = t.tracesSampler(n)), e.setAttribute(Mr, Number(r)))
      : n.parentSampled !== void 0
        ? (r = n.parentSampled)
        : typeof t.tracesSampleRate < "u"
          ? ((r = t.tracesSampleRate), e.setAttribute(Mr, Number(r)))
          : ((r = 1), e.setAttribute(Mr, r)),
    Ey(r)
      ? r
        ? ((e.sampled = Math.random() < r),
          e.sampled
            ? (D &&
                S.log(
                  `[Tracing] starting ${e.op} transaction - ${Re(e).description}`,
                ),
              e)
            : (D &&
                S.log(
                  `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`,
                ),
              e))
        : (D &&
            S.log(
              `[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
            ),
          (e.sampled = !1),
          e)
      : (D &&
          S.warn(
            "[Tracing] Discarding transaction because of invalid sample rate.",
          ),
        (e.sampled = !1),
        e)
  );
}
function Ey(e) {
  return Lg(e) || !(typeof e == "number" || typeof e == "boolean")
    ? (D &&
        S.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
        ),
      !1)
    : e < 0 || e > 1
      ? (D &&
          S.warn(
            `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`,
          ),
        !1)
      : !0;
}
function pw() {
  const t = this.getScope().getSpan();
  return t ? { "sentry-trace": Ra(t) } : {};
}
function hw(e, t) {
  const n = this.getClient(),
    r = (n && n.getOptions()) || {},
    i = r.instrumenter || "sentry",
    s = e.instrumenter || "sentry";
  i !== s &&
    (D &&
      S.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${i}\` instrumenter.
The transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
    (e.sampled = !1));
  let o = new vy(e, this);
  return (
    (o = Sy(o, r, {
      name: e.name,
      parentSampled: e.parentSampled,
      transactionContext: e,
      attributes: { ...e.data, ...e.attributes },
      ...t,
    })),
    o.isRecording() &&
      o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
    n && n.emit && n.emit("startTransaction", o),
    o
  );
}
function Ip(e, t, n, r, i, s, o, a = !1) {
  const l = e.getClient(),
    u = (l && l.getOptions()) || {};
  let c = new fw(t, e, n, r, o, i, a);
  return (
    (c = Sy(c, u, {
      name: t.name,
      parentSampled: t.parentSampled,
      transactionContext: t,
      attributes: { ...t.data, ...t.attributes },
      ...s,
    })),
    c.isRecording() &&
      c.initSpanRecorder(u._experiments && u._experiments.maxSpans),
    l && l.emit && l.emit("startTransaction", c),
    c
  );
}
function mw() {
  const e = ws();
  e.__SENTRY__ &&
    ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
    e.__SENTRY__.extensions.startTransaction ||
      (e.__SENTRY__.extensions.startTransaction = hw),
    e.__SENTRY__.extensions.traceHeaders ||
      (e.__SENTRY__.extensions.traceHeaders = pw),
    nw());
}
function gw(e, t, n) {
  const r = ar();
  r && r.setMeasurement(e, t, n);
}
function yw(e, t) {
  return (
    t &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [
        ...(e.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
    e
  );
}
function _w(e, t, n, r) {
  const i = ad(n),
    s = {
      sent_at: new Date().toISOString(),
      ...(i && { sdk: i }),
      ...(!!r && t && { dsn: cr(t) }),
    },
    o =
      "aggregates" in e
        ? [{ type: "sessions" }, e]
        : [{ type: "session" }, e.toJSON()];
  return Fn(s, [o]);
}
function vw(e, t, n, r) {
  const i = ad(n),
    s = e.type && e.type !== "replay_event" ? e.type : "event";
  yw(e, n && n.sdk);
  const o = ny(e, i, r, t);
  return (delete e.sdkProcessingMetadata, Fn(o, [[{ type: s }, e]]));
}
const Sw = "7";
function wy(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function Ew(e) {
  return `${wy(e)}${e.projectId}/envelope/`;
}
function ww(e, t) {
  return AE({
    sentry_key: e.publicKey,
    sentry_version: Sw,
    ...(t && { sentry_client: `${t.name}/${t.version}` }),
  });
}
function kw(e, t = {}) {
  const n = typeof t == "string" ? t : t.tunnel,
    r = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
  return n || `${Ew(e)}?${ww(e, r)}`;
}
function Tw(e, t) {
  const n = Ug(e);
  if (!n) return "";
  const r = `${wy(n)}embed/error-page/`;
  let i = `dsn=${cr(n)}`;
  for (const s in t)
    if (s !== "dsn" && s !== "onClose")
      if (s === "user") {
        const o = t.user;
        if (!o) continue;
        (o.name && (i += `&name=${encodeURIComponent(o.name)}`),
          o.email && (i += `&email=${encodeURIComponent(o.email)}`));
      } else i += `&${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`;
  return `${r}?${i}`;
}
const Cp = [];
function Iw(e) {
  const t = {};
  return (
    e.forEach((n) => {
      const { name: r } = n,
        i = t[r];
      (i && !i.isDefaultInstance && n.isDefaultInstance) || (t[r] = n);
    }),
    Object.keys(t).map((n) => t[n])
  );
}
function Cw(e) {
  const t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((o) => {
    o.isDefaultInstance = !0;
  });
  let r;
  Array.isArray(n)
    ? (r = [...t, ...n])
    : typeof n == "function"
      ? (r = Yg(n(t)))
      : (r = t);
  const i = Iw(r),
    s = Rw(i, (o) => o.name === "Debug");
  if (s !== -1) {
    const [o] = i.splice(s, 1);
    i.push(o);
  }
  return i;
}
function xw(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      r && ky(e, r, n);
    }),
    n
  );
}
function xp(e, t) {
  for (const n of t) n && n.afterAllSetup && n.afterAllSetup(e);
}
function ky(e, t, n) {
  if (n[t.name]) {
    D &&
      S.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    Cp.indexOf(t.name) === -1 && (t.setupOnce(O0, Ze), Cp.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(e),
    e.on && typeof t.preprocessEvent == "function")
  ) {
    const r = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (i, s) => r(i, s, e));
  }
  if (e.addEventProcessor && typeof t.processEvent == "function") {
    const r = t.processEvent.bind(t),
      i = (s, o) => r(s, o, e);
    ((i.id = t.name), e.addEventProcessor(i));
  }
  D && S.log(`Integration installed: ${t.name}`);
}
function Rw(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n]) === !0) return n;
  return -1;
}
function Nw(e) {
  let t = "";
  for (const n of e) {
    const r = Object.entries(n.tags),
      i = r.length > 0 ? `|#${r.map(([s, o]) => `${s}:${o}`).join(",")}` : "";
    t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${i}|T${n.timestamp}
`;
  }
  return t;
}
function Mw(e, t, n, r) {
  const i = { sent_at: new Date().toISOString() };
  (n && n.sdk && (i.sdk = { name: n.sdk.name, version: n.sdk.version }),
    r && t && (i.dsn = cr(t)));
  const s = Ow(e);
  return Fn(i, [s]);
}
function Ow(e) {
  const t = Nw(e);
  return [{ type: "statsd", length: t.length }, t];
}
const Rp = "Not capturing exception because it's already been captured.";
class Dw {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._integrationsInitialized = !1),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      t.dsn
        ? (this._dsn = Ug(t.dsn))
        : D && S.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const n = kw(this._dsn, t);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n,
      });
    }
  }
  captureException(t, n, r) {
    if (ap(t)) {
      D && S.log(Rp);
      return;
    }
    let i = n && n.event_id;
    return (
      this._process(
        this.eventFromException(t, n)
          .then((s) => this._captureEvent(s, n, r))
          .then((s) => {
            i = s;
          }),
      ),
      i
    );
  }
  captureMessage(t, n, r, i) {
    let s = r && r.event_id;
    const o = Zc(t) ? t : String(t),
      a = ed(t)
        ? this.eventFromMessage(o, n, r)
        : this.eventFromException(t, r);
    return (
      this._process(
        a
          .then((l) => this._captureEvent(l, r, i))
          .then((l) => {
            s = l;
          }),
      ),
      s
    );
  }
  captureEvent(t, n, r) {
    if (n && n.originalException && ap(n.originalException)) {
      D && S.log(Rp);
      return;
    }
    let i = n && n.event_id;
    const o = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return (
      this._process(
        this._captureEvent(t, n, o || r).then((a) => {
          i = a;
        }),
      ),
      i
    );
  }
  captureSession(t) {
    typeof t.release != "string"
      ? D &&
        S.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(t), or(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const n = this._transport;
    return n
      ? (this.metricsAggregator && this.metricsAggregator.flush(),
        this._isClientDoneProcessing(t).then((r) =>
          n.flush(t).then((i) => r && i),
        ))
      : Zr(!0);
  }
  close(t) {
    return this.flush(t).then(
      (n) => (
        (this.getOptions().enabled = !1),
        this.metricsAggregator && this.metricsAggregator.close(),
        n
      ),
    );
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  setupIntegrations(t) {
    ((t && !this._integrationsInitialized) ||
      (this._isEnabled() && !this._integrationsInitialized)) &&
      this._setupIntegrations();
  }
  init() {
    this._isEnabled() && this._setupIntegrations();
  }
  getIntegrationById(t) {
    return this.getIntegrationByName(t);
  }
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null;
    } catch {
      return (
        D &&
          S.warn(`Cannot retrieve integration ${t.id} from the current Client`),
        null
      );
    }
  }
  addIntegration(t) {
    const n = this._integrations[t.name];
    (ky(this, t, this._integrations), n || xp(this, [t]));
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = vw(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || [])
      r = E0(
        r,
        T0(
          s,
          this._options.transportOptions &&
            this._options.transportOptions.textEncoder,
        ),
      );
    const i = this._sendEnvelope(r);
    i && i.then((s) => this.emit("afterSendEvent", t, s), null);
  }
  sendSession(t) {
    const n = _w(t, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(n);
  }
  recordDroppedEvent(t, n, r) {
    if (this._options.sendClientReports) {
      const i = typeof r == "number" ? r : 1,
        s = `${t}:${n}`;
      (D && S.log(`Recording outcome: "${s}"${i > 1 ? ` (${i} times)` : ""}`),
        (this._outcomes[s] = (this._outcomes[s] || 0) + i));
    }
  }
  captureAggregateMetrics(t) {
    D && S.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    const n = Mw(t, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(n);
  }
  on(t, n) {
    (this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n));
  }
  emit(t, ...n) {
    this._hooks[t] && this._hooks[t].forEach((r) => r(...n));
  }
  _setupIntegrations() {
    const { integrations: t } = this._options;
    ((this._integrations = xw(this, t)),
      xp(this, t),
      (this._integrationsInitialized = !0));
  }
  _updateSessionFromEvent(t, n) {
    let r = !1,
      i = !1;
    const s = n.exception && n.exception.values;
    if (s) {
      i = !0;
      for (const l of s) {
        const u = l.mechanism;
        if (u && u.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const o = t.status === "ok";
    ((o && t.errors === 0) || (o && r)) &&
      (or(t, {
        ...(r && { status: "crashed" }),
        errors: t.errors || Number(i || r),
      }),
      this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new nt((n) => {
      let r = 0;
      const i = 1,
        s = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(s), n(!0))
            : ((r += i), t && r >= t && (clearInterval(s), n(!1)));
        }, i);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, n, r, i = $n()) {
    const s = this.getOptions(),
      o = Object.keys(this._integrations);
    return (
      !n.integrations && o.length > 0 && (n.integrations = o),
      this.emit("preprocessEvent", t, n),
      ly(s, t, n, r, this, i).then((a) => {
        if (a === null) return a;
        const l = {
          ...i.getPropagationContext(),
          ...(r ? r.getPropagationContext() : void 0),
        };
        if (!(a.contexts && a.contexts.trace) && l) {
          const { traceId: c, spanId: d, parentSpanId: f, dsc: p } = l;
          a.contexts = {
            trace: { trace_id: c, span_id: d, parent_span_id: f },
            ...a.contexts,
          };
          const g = p || Ma(c, this, r);
          a.sdkProcessingMetadata = {
            dynamicSamplingContext: g,
            ...a.sdkProcessingMetadata,
          };
        }
        return a;
      })
    );
  }
  _captureEvent(t, n = {}, r) {
    return this._processEvent(t, n, r).then(
      (i) => i.event_id,
      (i) => {
        if (D) {
          const s = i;
          s.logLevel === "log" ? S.log(s.message) : S.warn(s);
        }
      },
    );
  }
  _processEvent(t, n, r) {
    const i = this.getOptions(),
      { sampleRate: s } = i,
      o = Iy(t),
      a = Ty(t),
      l = t.type || "error",
      u = `before send for type \`${l}\``;
    if (a && typeof s == "number" && Math.random() > s)
      return (
        this.recordDroppedEvent("sample_rate", "error", t),
        sd(
          new Ft(
            `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
            "log",
          ),
        )
      );
    const c = l === "replay_event" ? "replay" : l,
      f = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, n, r, f)
      .then((p) => {
        if (p === null)
          throw (
            this.recordDroppedEvent("event_processor", c, t),
            new Ft(
              "An event processor returned `null`, will not send event.",
              "log",
            )
          );
        if (n.data && n.data.__sentry__ === !0) return p;
        const _ = bw(i, p, n);
        return Aw(_, u);
      })
      .then((p) => {
        if (p === null) {
          if ((this.recordDroppedEvent("before_send", c, t), o)) {
            const h = 1 + (t.spans || []).length;
            this.recordDroppedEvent("before_send", "span", h);
          }
          throw new Ft(`${u} returned \`null\`, will not send event.`, "log");
        }
        const g = r && r.getSession();
        if ((!o && g && this._updateSessionFromEvent(g, p), o)) {
          const E =
              (p.sdkProcessingMetadata &&
                p.sdkProcessingMetadata.spanCountBeforeProcessing) ||
              0,
            h = p.spans ? p.spans.length : 0,
            m = E - h;
          m > 0 && this.recordDroppedEvent("before_send", "span", m);
        }
        const _ = p.transaction_info;
        if (o && _ && p.transaction !== t.transaction) {
          const E = "custom";
          p.transaction_info = { ..._, source: E };
        }
        return (this.sendEvent(p, n), p);
      })
      .then(null, (p) => {
        throw p instanceof Ft
          ? p
          : (this.captureException(p, {
              data: { __sentry__: !0 },
              originalException: p,
            }),
            new Ft(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`));
      });
  }
  _process(t) {
    (this._numProcessing++,
      t.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n),
      ));
  }
  _sendEnvelope(t) {
    if ((this.emit("beforeEnvelope", t), this._isEnabled() && this._transport))
      return this._transport.send(t).then(null, (n) => {
        D && S.error("Error while sending event:", n);
      });
    D && S.error("Transport disabled");
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.keys(t).map((n) => {
        const [r, i] = n.split(":");
        return { reason: r, category: i, quantity: t[n] };
      })
    );
  }
}
function Aw(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Ia(e))
    return e.then(
      (r) => {
        if (!Jr(r) && r !== null) throw new Ft(n);
        return r;
      },
      (r) => {
        throw new Ft(`${t} rejected with ${r}`);
      },
    );
  if (!Jr(e) && e !== null) throw new Ft(n);
  return e;
}
function bw(e, t, n) {
  const { beforeSend: r, beforeSendTransaction: i } = e;
  if (Ty(t) && r) return r(t, n);
  if (Iy(t) && i) {
    if (t.spans) {
      const s = t.spans.length;
      t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        spanCountBeforeProcessing: s,
      };
    }
    return i(t, n);
  }
  return t;
}
function Ty(e) {
  return e.type === void 0;
}
function Iy(e) {
  return e.type === "transaction";
}
function Pw(e) {
  const t = q();
  !t || !t.addEventProcessor || t.addEventProcessor(e);
}
function Lw(e, t) {
  (t.debug === !0 &&
    (D
      ? S.enable()
      : rr(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
          );
        })),
    ut().update(t.initialScope));
  const r = new e(t);
  (Fw(r), $w(r));
}
function Fw(e) {
  const n = Ze().getStackTop();
  ((n.client = e), n.scope.setClient(e));
}
function $w(e) {
  e.init ? e.init() : e.setupIntegrations && e.setupIntegrations();
}
const zw = 30;
function Cy(e, t, n = c0(e.bufferSize || zw)) {
  let r = {};
  const i = (o) => n.drain(o);
  function s(o) {
    const a = [];
    if (
      (pp(o, (d, f) => {
        const p = hp(f);
        if (ry(r, p)) {
          const g = Np(d, f);
          e.recordDroppedEvent("ratelimit_backoff", p, g);
        } else a.push(d);
      }),
      a.length === 0)
    )
      return Zr();
    const l = Fn(o[0], a),
      u = (d) => {
        pp(l, (f, p) => {
          const g = Np(f, p);
          e.recordDroppedEvent(d, hp(p), g);
        });
      },
      c = () =>
        t({ body: w0(l, e.textEncoder) }).then(
          (d) => (
            d.statusCode !== void 0 &&
              (d.statusCode < 200 || d.statusCode >= 300) &&
              D &&
              S.warn(
                `Sentry responded with status code ${d.statusCode} to sent event.`,
              ),
            (r = iy(r, d)),
            d
          ),
          (d) => {
            throw (u("network_error"), d);
          },
        );
    return n.add(c).then(
      (d) => d,
      (d) => {
        if (d instanceof Ft)
          return (
            D && S.error("Skipped sending event because buffer is full."),
            u("queue_overflow"),
            Zr()
          );
        throw d;
      },
    );
  }
  return ((s.__sentry__baseTransport__ = !0), { send: s, flush: i });
}
function Np(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
function Bw(e, t) {
  const n = { sent_at: new Date().toISOString() };
  t && (n.dsn = cr(t));
  const r = e.map(Uw);
  return Fn(n, r);
}
function Uw(e) {
  return [{ type: "span" }, e];
}
function jw(e, t) {
  const n = t && Vw(t) ? t.getClient() : t,
    r = n && n.getDsn(),
    i = n && n.getOptions().tunnel;
  return Ww(e, r) || Hw(e, i);
}
function Hw(e, t) {
  return t ? Mp(e) === Mp(t) : !1;
}
function Ww(e, t) {
  return t ? e.includes(t.host) : !1;
}
function Mp(e) {
  return e[e.length - 1] === "/" ? e.slice(0, -1) : e;
}
function Vw(e) {
  return e.getClient !== void 0;
}
function xy(e, t, n = [t], r = "npm") {
  const i = e._metadata || {};
  (i.sdk ||
    (i.sdk = {
      name: `sentry.javascript.${t}`,
      packages: n.map((s) => ({ name: `${r}:@sentry/${s}`, version: Bu })),
      version: Bu,
    }),
    (e._metadata = i));
}
const Gw = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
  ],
  Yw = [
    /^.*\/healthcheck$/,
    /^.*\/healthy$/,
    /^.*\/live$/,
    /^.*\/ready$/,
    /^.*\/heartbeat$/,
    /^.*\/health$/,
    /^.*\/healthz$/,
  ],
  qw = "InboundFilters",
  Kw = (e = {}) => ({
    name: qw,
    setupOnce() {},
    processEvent(t, n, r) {
      const i = r.getOptions(),
        s = Qw(e, i);
      return Jw(t, s) ? null : t;
    },
  }),
  Xw = Kw;
function Qw(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Gw),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
      ...(e.disableTransactionDefaults ? [] : Yw),
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
  };
}
function Jw(e, t) {
  return t.ignoreInternal && ik(e)
    ? (D &&
        S.warn(`Event dropped due to being internal Sentry Error.
Event: ${gn(e)}`),
      !0)
    : Zw(e, t.ignoreErrors)
      ? (D &&
          S.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${gn(e)}`),
        !0)
      : ek(e, t.ignoreTransactions)
        ? (D &&
            S.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${gn(e)}`),
          !0)
        : tk(e, t.denyUrls)
          ? (D &&
              S.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${gn(e)}.
Url: ${Ko(e)}`),
            !0)
          : nk(e, t.allowUrls)
            ? !1
            : (D &&
                S.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${gn(e)}.
Url: ${Ko(e)}`),
              !0);
}
function Zw(e, t) {
  return e.type || !t || !t.length ? !1 : rk(e).some((n) => fi(n, t));
}
function ek(e, t) {
  if (e.type !== "transaction" || !t || !t.length) return !1;
  const n = e.transaction;
  return n ? fi(n, t) : !1;
}
function tk(e, t) {
  if (!t || !t.length) return !1;
  const n = Ko(e);
  return n ? fi(n, t) : !1;
}
function nk(e, t) {
  if (!t || !t.length) return !0;
  const n = Ko(e);
  return n ? fi(n, t) : !0;
}
function rk(e) {
  const t = [];
  e.message && t.push(e.message);
  let n;
  try {
    n = e.exception.values[e.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)),
    D &&
      t.length === 0 &&
      S.error(`Could not extract message for event ${gn(e)}`),
    t
  );
}
function ik(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function sk(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function Ko(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? sk(t) : null;
  } catch {
    return (D && S.error(`Cannot extract url for event ${gn(e)}`), null);
  }
}
let Op;
const ok = "FunctionToString",
  Dp = new WeakMap(),
  ak = () => ({
    name: ok,
    setupOnce() {
      Op = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          const t = nd(this),
            n = Dp.has(q()) && t !== void 0 ? t : this;
          return Op.apply(n, e);
        };
      } catch {}
    },
    setup(e) {
      Dp.set(e, !0);
    },
  }),
  lk = ak,
  ee = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  b = U;
function uk() {
  b.document
    ? b.document.addEventListener("visibilitychange", () => {
        const e = ar();
        if (b.document.hidden && e) {
          const t = "cancelled",
            { op: n, status: r } = Re(e);
          (ee &&
            S.log(
              `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`,
            ),
            r || e.setStatus(t),
            e.setTag("visibilitychange", "document.hidden"),
            e.end());
        }
      })
    : ee &&
      S.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document",
      );
}
const ks = (e, t, n) => {
    let r, i;
    return (s) => {
      t.value >= 0 &&
        (s || n) &&
        ((i = t.value - (r || 0)),
        (i || r === void 0) && ((r = t.value), (t.delta = i), e(t)));
    };
  },
  ck = () =>
    `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  dk = () => {
    const e = b.performance.timing,
      t = b.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate",
      };
    for (const r in e)
      r !== "navigationStart" &&
        r !== "toJSON" &&
        (n[r] = Math.max(e[r] - e.navigationStart, 0));
    return n;
  },
  Da = () =>
    b.__WEB_VITALS_POLYFILL__
      ? b.performance &&
        ((performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]) ||
          dk())
      : b.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0],
  pd = () => {
    const e = Da();
    return (e && e.activationStart) || 0;
  },
  Ts = (e, t) => {
    const n = Da();
    let r = "navigate";
    return (
      n &&
        ((b.document && b.document.prerendering) || pd() > 0
          ? (r = "prerender")
          : (r = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: ck(),
        navigationType: r,
      }
    );
  },
  mi = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const r = new PerformanceObserver((i) => {
          t(i.getEntries());
        });
        return (r.observe({ type: e, buffered: !0, ...n }), r);
      }
    } catch {}
  },
  Is = (e, t) => {
    const n = (r) => {
      (r.type === "pagehide" || b.document.visibilityState === "hidden") &&
        (e(r),
        t &&
          (removeEventListener("visibilitychange", n, !0),
          removeEventListener("pagehide", n, !0)));
    };
    b.document &&
      (addEventListener("visibilitychange", n, !0),
      addEventListener("pagehide", n, !0));
  },
  fk = (e, t = {}) => {
    const n = Ts("CLS", 0);
    let r,
      i = 0,
      s = [];
    const o = (l) => {
        l.forEach((u) => {
          if (!u.hadRecentInput) {
            const c = s[0],
              d = s[s.length - 1];
            (i &&
            s.length !== 0 &&
            u.startTime - d.startTime < 1e3 &&
            u.startTime - c.startTime < 5e3
              ? ((i += u.value), s.push(u))
              : ((i = u.value), (s = [u])),
              i > n.value && ((n.value = i), (n.entries = s), r && r()));
          }
        });
      },
      a = mi("layout-shift", o);
    if (a) {
      r = ks(e, n, t.reportAllChanges);
      const l = () => {
        (o(a.takeRecords()), r(!0));
      };
      return (Is(l), l);
    }
  };
let Xo = -1;
const pk = () => {
    b.document &&
      b.document.visibilityState &&
      (Xo =
        b.document.visibilityState === "hidden" && !b.document.prerendering
          ? 0
          : 1 / 0);
  },
  hk = () => {
    Is(({ timeStamp: e }) => {
      Xo = e;
    }, !0);
  },
  hd = () => (
    Xo < 0 && (pk(), hk()),
    {
      get firstHiddenTime() {
        return Xo;
      },
    }
  ),
  mk = (e) => {
    const t = hd(),
      n = Ts("FID");
    let r;
    const i = (a) => {
        a.startTime < t.firstHiddenTime &&
          ((n.value = a.processingStart - a.startTime),
          n.entries.push(a),
          r(!0));
      },
      s = (a) => {
        a.forEach(i);
      },
      o = mi("first-input", s);
    ((r = ks(e, n)),
      o &&
        Is(() => {
          (s(o.takeRecords()), o.disconnect());
        }, !0));
  };
let Ry = 0,
  xl = 1 / 0,
  to = 0;
const gk = (e) => {
  e.forEach((t) => {
    t.interactionId &&
      ((xl = Math.min(xl, t.interactionId)),
      (to = Math.max(to, t.interactionId)),
      (Ry = to ? (to - xl) / 7 + 1 : 0));
  });
};
let Hu;
const yk = () => (Hu ? Ry : performance.interactionCount || 0),
  _k = () => {
    "interactionCount" in performance ||
      Hu ||
      (Hu = mi("event", gk, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  Ny = () => yk(),
  Ap = 10,
  Yt = [],
  Rl = {},
  bp = (e) => {
    const t = Yt[Yt.length - 1],
      n = Rl[e.interactionId];
    if (n || Yt.length < Ap || e.duration > t.latency) {
      if (n) (n.entries.push(e), (n.latency = Math.max(n.latency, e.duration)));
      else {
        const r = { id: e.interactionId, latency: e.duration, entries: [e] };
        ((Rl[r.id] = r), Yt.push(r));
      }
      (Yt.sort((r, i) => i.latency - r.latency),
        Yt.splice(Ap).forEach((r) => {
          delete Rl[r.id];
        }));
    }
  },
  vk = () => {
    const e = Math.min(Yt.length - 1, Math.floor(Ny() / 50));
    return Yt[e];
  },
  Sk = (e, t) => {
    ((t = t || {}), _k());
    const n = Ts("INP");
    let r;
    const i = (o) => {
        o.forEach((l) => {
          (l.interactionId && bp(l),
            l.entryType === "first-input" &&
              !Yt.some((c) =>
                c.entries.some(
                  (d) =>
                    l.duration === d.duration && l.startTime === d.startTime,
                ),
              ) &&
              bp(l));
        });
        const a = vk();
        a &&
          a.latency !== n.value &&
          ((n.value = a.latency), (n.entries = a.entries), r());
      },
      s = mi("event", i, { durationThreshold: t.durationThreshold || 40 });
    ((r = ks(e, n, t.reportAllChanges)),
      s &&
        (s.observe({ type: "first-input", buffered: !0 }),
        Is(() => {
          (i(s.takeRecords()),
            n.value < 0 && Ny() > 0 && ((n.value = 0), (n.entries = [])),
            r(!0));
        })));
  },
  Pp = {},
  Ek = (e) => {
    const t = hd(),
      n = Ts("LCP");
    let r;
    const i = (o) => {
        const a = o[o.length - 1];
        if (a) {
          const l = Math.max(a.startTime - pd(), 0);
          l < t.firstHiddenTime && ((n.value = l), (n.entries = [a]), r());
        }
      },
      s = mi("largest-contentful-paint", i);
    if (s) {
      r = ks(e, n);
      const o = () => {
        Pp[n.id] ||
          (i(s.takeRecords()), s.disconnect(), (Pp[n.id] = !0), r(!0));
      };
      return (
        ["keydown", "click"].forEach((a) => {
          b.document && addEventListener(a, o, { once: !0, capture: !0 });
        }),
        Is(o, !0),
        o
      );
    }
  },
  Wu = (e) => {
    b.document &&
      (b.document.prerendering
        ? addEventListener("prerenderingchange", () => Wu(e), !0)
        : b.document.readyState !== "complete"
          ? addEventListener("load", () => Wu(e), !0)
          : setTimeout(e, 0));
  },
  wk = (e, t) => {
    t = t || {};
    const n = Ts("TTFB"),
      r = ks(e, n, t.reportAllChanges);
    Wu(() => {
      const i = Da();
      if (i) {
        if (
          ((n.value = Math.max(i.responseStart - pd(), 0)),
          n.value < 0 || n.value > performance.now())
        )
          return;
        ((n.entries = [i]), r(!0));
      }
    });
  },
  Hi = {},
  Qo = {};
let My, Oy, Dy, Ay, by;
function kk(e, t = !1) {
  return Cs("cls", e, xk, My, t);
}
function Py(e, t = !1) {
  return Cs("lcp", e, Nk, Dy, t);
}
function Tk(e) {
  return Cs("ttfb", e, Mk, Ay);
}
function Ik(e) {
  return Cs("fid", e, Rk, Oy);
}
function Ck(e) {
  return Cs("inp", e, Ok, by);
}
function ni(e, t) {
  return (Ly(e, t), Qo[e] || (Dk(e), (Qo[e] = !0)), Fy(e, t));
}
function gi(e, t) {
  const n = Hi[e];
  if (!(!n || !n.length))
    for (const r of n)
      try {
        r(t);
      } catch (i) {
        ee &&
          S.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${rn(r)}
Error:`,
            i,
          );
      }
}
function xk() {
  return fk(
    (e) => {
      (gi("cls", { metric: e }), (My = e));
    },
    { reportAllChanges: !0 },
  );
}
function Rk() {
  return mk((e) => {
    (gi("fid", { metric: e }), (Oy = e));
  });
}
function Nk() {
  return Ek((e) => {
    (gi("lcp", { metric: e }), (Dy = e));
  });
}
function Mk() {
  return wk((e) => {
    (gi("ttfb", { metric: e }), (Ay = e));
  });
}
function Ok() {
  return Sk((e) => {
    (gi("inp", { metric: e }), (by = e));
  });
}
function Cs(e, t, n, r, i = !1) {
  Ly(e, t);
  let s;
  return (
    Qo[e] || ((s = n()), (Qo[e] = !0)),
    r && t({ metric: r }),
    Fy(e, t, i ? s : void 0)
  );
}
function Dk(e) {
  const t = {};
  (e === "event" && (t.durationThreshold = 0),
    mi(
      e,
      (n) => {
        gi(e, { entries: n });
      },
      t,
    ));
}
function Ly(e, t) {
  ((Hi[e] = Hi[e] || []), Hi[e].push(t));
}
function Fy(e, t, n) {
  return () => {
    n && n();
    const r = Hi[e];
    if (!r) return;
    const i = r.indexOf(t);
    i !== -1 && r.splice(i, 1);
  };
}
function Nl(e) {
  return typeof e == "number" && isFinite(e);
}
function ri(e, { startTimestamp: t, ...n }) {
  return (
    t && e.startTimestamp > t && (e.startTimestamp = t),
    e.startChild({ startTimestamp: t, ...n })
  );
}
const Ak = 2147483647;
function we(e) {
  return e / 1e3;
}
function md() {
  return b && b.addEventListener && b.performance;
}
let Lp = 0,
  he = {},
  At,
  Wi;
function bk() {
  const e = md();
  if (e && ot) {
    e.mark && b.performance.mark("sentry-tracing-init");
    const t = Bk(),
      n = $k(),
      r = zk(),
      i = Uk();
    return () => {
      (t(), n(), r(), i());
    };
  }
  return () => {};
}
function Pk() {
  ni("longtask", ({ entries: e }) => {
    for (const t of e) {
      const n = ar();
      if (!n) return;
      const r = we(ot + t.startTime),
        i = we(t.duration);
      n.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        origin: "auto.ui.browser.metrics",
        startTimestamp: r,
        endTimestamp: r + i,
      });
    }
  });
}
function Lk() {
  ni("event", ({ entries: e }) => {
    for (const t of e) {
      const n = ar();
      if (!n) return;
      if (t.name === "click") {
        const r = we(ot + t.startTime),
          i = we(t.duration),
          s = {
            description: Dn(t.target),
            op: `ui.interaction.${t.name}`,
            origin: "auto.ui.browser.metrics",
            startTimestamp: r,
            endTimestamp: r + i,
          },
          o = zg(t.target);
        (o && (s.attributes = { "ui.component_name": o }), n.startChild(s));
      }
    }
  });
}
function Fk(e, t) {
  if (md() && ot) {
    const r = jk(e, t);
    return () => {
      r();
    };
  }
  return () => {};
}
function $k() {
  return kk(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t &&
      (ee && S.log("[Measurements] Adding CLS"),
      (he.cls = { value: e.value, unit: "" }),
      (Wi = t));
  }, !0);
}
function zk() {
  return Py(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t &&
      (ee && S.log("[Measurements] Adding LCP"),
      (he.lcp = { value: e.value, unit: "millisecond" }),
      (At = t));
  }, !0);
}
function Bk() {
  return Ik(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    if (!t) return;
    const n = we(ot),
      r = we(t.startTime);
    (ee && S.log("[Measurements] Adding FID"),
      (he.fid = { value: e.value, unit: "millisecond" }),
      (he["mark.fid"] = { value: n + r, unit: "second" }));
  });
}
function Uk() {
  return Tk(({ metric: e }) => {
    e.entries[e.entries.length - 1] &&
      (ee && S.log("[Measurements] Adding TTFB"),
      (he.ttfb = { value: e.value, unit: "millisecond" }));
  });
}
const Fp = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press",
};
function jk(e, t) {
  return Ck(({ metric: n }) => {
    if (n.value === void 0) return;
    const r = n.entries.find(
        (y) => y.duration === n.value && Fp[y.name] !== void 0,
      ),
      i = q();
    if (!r || !i) return;
    const s = Fp[r.name],
      o = i.getOptions(),
      a = we(ot + r.startTime),
      l = we(n.value),
      u = r.interactionId !== void 0 ? e[r.interactionId] : void 0;
    if (u === void 0) return;
    const {
        routeName: c,
        parentContext: d,
        activeTransaction: f,
        user: p,
        replayId: g,
      } = u,
      _ = p !== void 0 ? p.email || p.id || p.ip_address : void 0,
      E = f !== void 0 ? f.getProfileId() : void 0,
      h = new Oa({
        startTimestamp: a,
        endTimestamp: a + l,
        op: `ui.interaction.${s}`,
        name: Dn(r.target),
        attributes: {
          release: o.release,
          environment: o.environment,
          transaction: c,
          ...(_ !== void 0 && _ !== "" ? { user: _ } : {}),
          ...(E !== void 0 ? { profile_id: E } : {}),
          ...(g !== void 0 ? { replay_id: g } : {}),
        },
        exclusiveTime: n.value,
        measurements: { inp: { value: n.value, unit: "millisecond" } },
      }),
      m = Qk(d, o, t);
    if (m && Math.random() < m) {
      const y = h ? Bw([h], i.getDsn()) : void 0,
        v = i && i.getTransport();
      v &&
        y &&
        v.send(y).then(null, (w) => {
          ee && S.error("Error while sending interaction:", w);
        });
      return;
    }
  });
}
function Hk(e) {
  const t = md();
  if (!t || !b.performance.getEntries || !ot) return;
  ee && S.log("[Tracing] Adding & adjusting spans using Performance API");
  const n = we(ot),
    r = t.getEntries(),
    { op: i, start_timestamp: s } = Re(e);
  if (
    (r.slice(Lp).forEach((o) => {
      const a = we(o.startTime),
        l = we(o.duration);
      if (!(e.op === "navigation" && s && n + a < s))
        switch (o.entryType) {
          case "navigation": {
            Vk(e, o, n);
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            Wk(e, o, a, l, n);
            const u = hd(),
              c = o.startTime < u.firstHiddenTime;
            (o.name === "first-paint" &&
              c &&
              (ee && S.log("[Measurements] Adding FP"),
              (he.fp = { value: o.startTime, unit: "millisecond" })),
              o.name === "first-contentful-paint" &&
                c &&
                (ee && S.log("[Measurements] Adding FCP"),
                (he.fcp = { value: o.startTime, unit: "millisecond" })));
            break;
          }
          case "resource": {
            Yk(e, o, o.name, a, l, n);
            break;
          }
        }
    }),
    (Lp = Math.max(r.length - 1, 0)),
    qk(e),
    i === "pageload")
  ) {
    (Xk(he),
      ["fcp", "fp", "lcp"].forEach((a) => {
        if (!he[a] || !s || n >= s) return;
        const l = he[a].value,
          u = n + we(l),
          c = Math.abs((u - s) * 1e3),
          d = c - l;
        (ee && S.log(`[Measurements] Normalized ${a} from ${l} to ${c} (${d})`),
          (he[a].value = c));
      }));
    const o = he["mark.fid"];
    (o &&
      he.fid &&
      (ri(e, {
        description: "first input delay",
        endTimestamp: o.value + we(he.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: o.value,
      }),
      delete he["mark.fid"]),
      "fcp" in he || delete he.cls,
      Object.keys(he).forEach((a) => {
        gw(a, he[a].value, he[a].unit);
      }),
      Kk(e));
  }
  ((At = void 0), (Wi = void 0), (he = {}));
}
function Wk(e, t, n, r, i) {
  const s = i + n,
    o = s + r;
  return (
    ri(e, {
      description: t.name,
      endTimestamp: o,
      op: t.entryType,
      origin: "auto.resource.browser.metrics",
      startTimestamp: s,
    }),
    s
  );
}
function Vk(e, t, n) {
  ([
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    no(e, t, r, n);
  }),
    no(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    no(e, t, "fetch", n, "cache", "domainLookupStart"),
    no(e, t, "domainLookup", n, "DNS"),
    Gk(e, t, n));
}
function no(e, t, n, r, i, s) {
  const o = s ? t[s] : t[`${n}End`],
    a = t[`${n}Start`];
  !a ||
    !o ||
    ri(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: i || n,
      startTimestamp: r + we(a),
      endTimestamp: r + we(o),
    });
}
function Gk(e, t, n) {
  t.responseEnd &&
    (ri(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "request",
      startTimestamp: n + we(t.requestStart),
      endTimestamp: n + we(t.responseEnd),
    }),
    ri(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "response",
      startTimestamp: n + we(t.responseStart),
      endTimestamp: n + we(t.responseEnd),
    }));
}
function Yk(e, t, n, r, i, s) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const o = Xn(n),
    a = {};
  (Ml(a, t, "transferSize", "http.response_transfer_size"),
    Ml(a, t, "encodedBodySize", "http.response_content_length"),
    Ml(a, t, "decodedBodySize", "http.decoded_response_content_length"),
    "renderBlockingStatus" in t &&
      (a["resource.render_blocking_status"] = t.renderBlockingStatus),
    o.protocol && (a["url.scheme"] = o.protocol.split(":").pop()),
    o.host && (a["server.address"] = o.host),
    (a["url.same_origin"] = n.includes(b.location.origin)));
  const l = s + r,
    u = l + i;
  ri(e, {
    description: n.replace(b.location.origin, ""),
    endTimestamp: u,
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    origin: "auto.resource.browser.metrics",
    startTimestamp: l,
    data: a,
  });
}
function qk(e) {
  const t = b.navigator;
  if (!t) return;
  const n = t.connection;
  (n &&
    (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
    n.type && e.setTag("connectionType", n.type),
    Nl(n.rtt) &&
      (he["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
    Nl(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`),
    Nl(t.hardwareConcurrency) &&
      e.setTag("hardwareConcurrency", String(t.hardwareConcurrency)));
}
function Kk(e) {
  (At &&
    (ee && S.log("[Measurements] Adding LCP Data"),
    At.element && e.setTag("lcp.element", Dn(At.element)),
    At.id && e.setTag("lcp.id", At.id),
    At.url && e.setTag("lcp.url", At.url.trim().slice(0, 200)),
    e.setTag("lcp.size", At.size)),
    Wi &&
      Wi.sources &&
      (ee && S.log("[Measurements] Adding CLS Data"),
      Wi.sources.forEach((t, n) =>
        e.setTag(`cls.source.${n + 1}`, Dn(t.node)),
      )));
}
function Ml(e, t, n, r) {
  const i = t[n];
  i != null && i < Ak && (e[r] = i);
}
function Xk(e) {
  const t = Da();
  if (!t) return;
  const { responseStart: n, requestStart: r } = t;
  r <= n &&
    (ee && S.log("[Measurements] Adding TTFB Request Time"),
    (e["ttfb.requestTime"] = { value: n - r, unit: "millisecond" }));
}
function Qk(e, t, n) {
  if (!hi(t)) return !1;
  let r;
  return (
    e !== void 0 && typeof t.tracesSampler == "function"
      ? (r = t.tracesSampler({
          transactionContext: e,
          name: e.name,
          parentSampled: e.parentSampled,
          attributes: { ...e.data, ...e.attributes },
          location: b.location,
        }))
      : e !== void 0 && e.sampled !== void 0
        ? (r = e.sampled)
        : typeof t.tracesSampleRate < "u"
          ? (r = t.tracesSampleRate)
          : (r = 1),
    Ey(r)
      ? r === !0
        ? n
        : r === !1
          ? 0
          : r * n
      : (ee &&
          S.warn(
            "[Tracing] Discarding interaction span because of invalid sample rate.",
          ),
        !1)
  );
}
function Jk(e, t, n, r, i = "auto.http.browser") {
  if (!hi() || !e.fetchData) return;
  const s = t(e.fetchData.url);
  if (e.endTimestamp && s) {
    const p = e.fetchData.__span;
    if (!p) return;
    const g = r[p];
    g && (tT(g, e), delete r[p]);
    return;
  }
  const o = ut(),
    a = q(),
    { method: l, url: u } = e.fetchData,
    c = eT(u),
    d = c ? Xn(c).host : void 0,
    f = s
      ? ji({
          name: `${l} ${u}`,
          onlyIfParent: !0,
          attributes: {
            url: u,
            type: "fetch",
            "http.method": l,
            "http.url": c,
            "server.address": d,
            [Or]: i,
          },
          op: "http.client",
        })
      : void 0;
  if (
    (f &&
      ((e.fetchData.__span = f.spanContext().spanId),
      (r[f.spanContext().spanId] = f)),
    n(e.fetchData.url) && a)
  ) {
    const p = e.args[0];
    e.args[1] = e.args[1] || {};
    const g = e.args[1];
    g.headers = Zk(p, a, o, g, f);
  }
  return f;
}
function Zk(e, t, n, r, i) {
  const s = i || n.getSpan(),
    o = $n(),
    {
      traceId: a,
      spanId: l,
      sampled: u,
      dsc: c,
    } = { ...o.getPropagationContext(), ...n.getPropagationContext() },
    d = s ? Ra(s) : od(a, l, u),
    f = ty(c || (s ? ti(s) : Ma(a, t, n))),
    p =
      r.headers ||
      (typeof Request < "u" && nn(e, Request) ? e.headers : void 0);
  if (p)
    if (typeof Headers < "u" && nn(p, Headers)) {
      const g = new Headers(p);
      return (g.append("sentry-trace", d), f && g.append($u, f), g);
    } else if (Array.isArray(p)) {
      const g = [...p, ["sentry-trace", d]];
      return (f && g.push([$u, f]), g);
    } else {
      const g = "baggage" in p ? p.baggage : void 0,
        _ = [];
      return (
        Array.isArray(g) ? _.push(...g) : g && _.push(g),
        f && _.push(f),
        {
          ...p,
          "sentry-trace": d,
          baggage: _.length > 0 ? _.join(",") : void 0,
        }
      );
    }
  else return { "sentry-trace": d, baggage: f };
}
function eT(e) {
  try {
    return new URL(e).href;
  } catch {
    return;
  }
}
function tT(e, t) {
  if (t.response) {
    fd(e, t.response.status);
    const n =
      t.response &&
      t.response.headers &&
      t.response.headers.get("content-length");
    if (n) {
      const r = parseInt(n);
      r > 0 && e.setAttribute("http.response_content_length", r);
    }
  } else t.error && e.setStatus("internal_error");
  e.end();
}
const Vu = ["localhost", /^\/(?!\/)/],
  Gu = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: Vu,
    tracePropagationTargets: Vu,
  };
function nT(e) {
  const {
      traceFetch: t,
      traceXHR: n,
      tracePropagationTargets: r,
      tracingOrigins: i,
      shouldCreateSpanForRequest: s,
      enableHTTPTimings: o,
    } = { traceFetch: Gu.traceFetch, traceXHR: Gu.traceXHR, ...e },
    a = typeof s == "function" ? s : (c) => !0,
    l = (c) => oT(c, r || i),
    u = {};
  (t &&
    rd((c) => {
      const d = Jk(c, a, l, u);
      if (d) {
        const f = $y(c.fetchData.url),
          p = f ? Xn(f).host : void 0;
        d.setAttributes({ "http.url": f, "server.address": p });
      }
      o && d && $p(d);
    }),
    n &&
      id((c) => {
        const d = aT(c, a, l, u);
        o && d && $p(d);
      }));
}
function rT(e) {
  return (
    e.entryType === "resource" &&
    "initiatorType" in e &&
    typeof e.nextHopProtocol == "string" &&
    (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
  );
}
function $p(e) {
  const { url: t } = Re(e).data || {};
  if (!t || typeof t != "string") return;
  const n = ni("resource", ({ entries: r }) => {
    r.forEach((i) => {
      rT(i) &&
        i.name.endsWith(t) &&
        (sT(i).forEach((o) => e.setAttribute(...o)), setTimeout(n));
    });
  });
}
function iT(e) {
  let t = "unknown",
    n = "unknown",
    r = "";
  for (const i of e) {
    if (i === "/") {
      [t, n] = e.split("/");
      break;
    }
    if (!isNaN(Number(i))) {
      ((t = r === "h" ? "http" : r), (n = e.split(r)[1]));
      break;
    }
    r += i;
  }
  return (r === e && (t = r), { name: t, version: n });
}
function Ot(e = 0) {
  return ((ot || performance.timeOrigin) + e) / 1e3;
}
function sT(e) {
  const { name: t, version: n } = iT(e.nextHopProtocol),
    r = [];
  return (
    r.push(["network.protocol.version", n], ["network.protocol.name", t]),
    ot
      ? [
          ...r,
          ["http.request.redirect_start", Ot(e.redirectStart)],
          ["http.request.fetch_start", Ot(e.fetchStart)],
          ["http.request.domain_lookup_start", Ot(e.domainLookupStart)],
          ["http.request.domain_lookup_end", Ot(e.domainLookupEnd)],
          ["http.request.connect_start", Ot(e.connectStart)],
          ["http.request.secure_connection_start", Ot(e.secureConnectionStart)],
          ["http.request.connection_end", Ot(e.connectEnd)],
          ["http.request.request_start", Ot(e.requestStart)],
          ["http.request.response_start", Ot(e.responseStart)],
          ["http.request.response_end", Ot(e.responseEnd)],
        ]
      : r
  );
}
function oT(e, t) {
  return fi(e, t || Vu);
}
function aT(e, t, n, r) {
  const i = e.xhr,
    s = i && i[vn];
  if (!hi() || !i || i.__sentry_own_request__ || !s) return;
  const o = t(s.url);
  if (e.endTimestamp && o) {
    const p = i.__sentry_xhr_span_id__;
    if (!p) return;
    const g = r[p];
    g &&
      s.status_code !== void 0 &&
      (fd(g, s.status_code), g.end(), delete r[p]);
    return;
  }
  const a = ut(),
    l = $n(),
    u = $y(s.url),
    c = u ? Xn(u).host : void 0,
    d = o
      ? ji({
          name: `${s.method} ${s.url}`,
          onlyIfParent: !0,
          attributes: {
            type: "xhr",
            "http.method": s.method,
            "http.url": u,
            url: s.url,
            "server.address": c,
            [Or]: "auto.http.browser",
          },
          op: "http.client",
        })
      : void 0;
  d &&
    ((i.__sentry_xhr_span_id__ = d.spanContext().spanId),
    (r[i.__sentry_xhr_span_id__] = d));
  const f = q();
  if (i.setRequestHeader && n(s.url) && f) {
    const {
        traceId: p,
        spanId: g,
        sampled: _,
        dsc: E,
      } = { ...l.getPropagationContext(), ...a.getPropagationContext() },
      h = d ? Ra(d) : od(p, g, _),
      m = ty(E || (d ? ti(d) : Ma(p, f, a)));
    lT(i, h, m);
  }
  return d;
}
function lT(e, t, n) {
  try {
    (e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader($u, n));
  } catch {}
}
function $y(e) {
  try {
    return new URL(e, b.location.origin).href;
  } catch {
    return;
  }
}
function uT(e, t = !0, n = !0) {
  if (!b || !b.location) {
    ee &&
      S.warn(
        "Could not initialize routing instrumentation due to invalid location",
      );
    return;
  }
  let r = b.location.href,
    i;
  (t &&
    (i = e({
      name: b.location.pathname,
      startTimestamp: ot ? ot / 1e3 : void 0,
      op: "pageload",
      origin: "auto.pageload.browser",
      metadata: { source: "url" },
    })),
    n &&
      Ca(({ to: s, from: o }) => {
        if (o === void 0 && r && r.indexOf(s) !== -1) {
          r = void 0;
          return;
        }
        o !== s &&
          ((r = void 0),
          i &&
            (ee &&
              S.log(`[Tracing] Finishing current transaction with op: ${i.op}`),
            i.end()),
          (i = e({
            name: b.location.pathname,
            op: "navigation",
            origin: "auto.navigation.browser",
            metadata: { source: "url" },
          })));
      }));
}
const cT = "BrowserTracing",
  dT = {
    ...Eo,
    markBackgroundTransactions: !0,
    routingInstrumentation: uT,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    enableInp: !1,
    interactionsSampleRate: 1,
    _experiments: {},
    ...Gu,
  },
  zp = 10;
class fT {
  constructor(t) {
    ((this.name = cT),
      (this._hasSetTracePropagationTargets = !1),
      mw(),
      ee &&
        (this._hasSetTracePropagationTargets = !!(
          t &&
          (t.tracePropagationTargets || t.tracingOrigins)
        )),
      (this.options = { ...dT, ...t }),
      this.options._experiments.enableLongTask !== void 0 &&
        (this.options.enableLongTask =
          this.options._experiments.enableLongTask),
      t &&
        !t.tracePropagationTargets &&
        t.tracingOrigins &&
        (this.options.tracePropagationTargets = t.tracingOrigins),
      (this._collectWebVitals = bk()),
      (this._interactionIdToRouteNameMapping = {}),
      this.options.enableInp &&
        Fk(
          this._interactionIdToRouteNameMapping,
          this.options.interactionsSampleRate,
        ),
      this.options.enableLongTask && Pk(),
      this.options._experiments.enableInteractions && Lk(),
      (this._latestRoute = { name: void 0, context: void 0 }));
  }
  setupOnce(t, n) {
    this._getCurrentHub = n;
    const i = n().getClient(),
      s = i && i.getOptions(),
      {
        routingInstrumentation: o,
        startTransactionOnLocationChange: a,
        startTransactionOnPageLoad: l,
        markBackgroundTransactions: u,
        traceFetch: c,
        traceXHR: d,
        shouldCreateSpanForRequest: f,
        enableHTTPTimings: p,
        _experiments: g,
      } = this.options,
      _ = s && s.tracePropagationTargets,
      E = _ || this.options.tracePropagationTargets;
    (ee &&
      this._hasSetTracePropagationTargets &&
      _ &&
      S.warn(
        "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.",
      ),
      o(
        (h) => {
          const m = this._createRouteTransaction(h);
          return (
            this.options._experiments.onStartRouteTransaction &&
              this.options._experiments.onStartRouteTransaction(m, h, n),
            m
          );
        },
        l,
        a,
      ),
      u && uk(),
      g.enableInteractions && this._registerInteractionListener(),
      this.options.enableInp && this._registerInpInteractionListener(),
      nT({
        traceFetch: c,
        traceXHR: d,
        tracePropagationTargets: E,
        shouldCreateSpanForRequest: f,
        enableHTTPTimings: p,
      }));
  }
  _createRouteTransaction(t) {
    if (!this._getCurrentHub) {
      ee &&
        S.warn(
          `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`,
        );
      return;
    }
    const n = this._getCurrentHub(),
      {
        beforeNavigate: r,
        idleTimeout: i,
        finalTimeout: s,
        heartbeatInterval: o,
      } = this.options,
      a = t.op === "pageload";
    let l;
    if (a) {
      const p = a ? Bp("sentry-trace") : "",
        g = a ? Bp("baggage") : void 0,
        { traceId: _, dsc: E, parentSpanId: h, sampled: m } = S0(p, g);
      l = {
        traceId: _,
        parentSpanId: h,
        parentSampled: m,
        ...t,
        metadata: { ...t.metadata, dynamicSamplingContext: E },
        trimEnd: !0,
      };
    } else l = { trimEnd: !0, ...t };
    const u = typeof r == "function" ? r(l) : l,
      c = u === void 0 ? { ...l, sampled: !1 } : u;
    ((c.metadata =
      c.name !== l.name ? { ...c.metadata, source: "custom" } : c.metadata),
      (this._latestRoute.name = c.name),
      (this._latestRoute.context = c),
      c.sampled === !1 &&
        ee &&
        S.log(
          `[Tracing] Will not send ${c.op} transaction because of beforeNavigate.`,
        ),
      ee && S.log(`[Tracing] Starting ${c.op} transaction on scope`));
    const { location: d } = b,
      f = Ip(n, c, i, s, !0, { location: d }, o, a);
    return (
      a &&
        b.document &&
        (b.document.addEventListener("readystatechange", () => {
          ["interactive", "complete"].includes(b.document.readyState) &&
            f.sendAutoFinishSignal();
        }),
        ["interactive", "complete"].includes(b.document.readyState) &&
          f.sendAutoFinishSignal()),
      f.registerBeforeFinishCallback((p) => {
        (this._collectWebVitals(), Hk(p));
      }),
      f
    );
  }
  _registerInteractionListener() {
    let t;
    const n = () => {
      const {
          idleTimeout: r,
          finalTimeout: i,
          heartbeatInterval: s,
        } = this.options,
        o = "ui.action.click",
        a = ar();
      if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
        ee &&
          S.warn(
            `[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`,
          );
        return;
      }
      if (
        (t &&
          (t.setFinishReason("interactionInterrupted"), t.end(), (t = void 0)),
        !this._getCurrentHub)
      ) {
        ee &&
          S.warn(
            `[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`,
          );
        return;
      }
      if (!this._latestRoute.name) {
        ee &&
          S.warn(
            `[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`,
          );
        return;
      }
      const l = this._getCurrentHub(),
        { location: u } = b,
        c = {
          name: this._latestRoute.name,
          op: o,
          trimEnd: !0,
          data: {
            [Qn]: this._latestRoute.context
              ? pT(this._latestRoute.context)
              : "url",
          },
        };
      t = Ip(l, c, r, i, !0, { location: u }, s);
    };
    ["click"].forEach((r) => {
      b.document && addEventListener(r, n, { once: !1, capture: !0 });
    });
  }
  _registerInpInteractionListener() {
    const t = ({ entries: n }) => {
      const r = q(),
        i =
          r !== void 0 && r.getIntegrationByName !== void 0
            ? r.getIntegrationByName("Replay")
            : void 0,
        s = i !== void 0 ? i.getReplayId() : void 0,
        o = ar(),
        a = ut(),
        l = a !== void 0 ? a.getUser() : void 0;
      n.forEach((u) => {
        if (hT(u)) {
          const c = u.interactionId;
          if (c === void 0) return;
          const d = this._interactionIdToRouteNameMapping[c],
            f = u.duration,
            p = u.startTime,
            g = Object.keys(this._interactionIdToRouteNameMapping),
            _ =
              g.length > 0
                ? g.reduce((E, h) =>
                    this._interactionIdToRouteNameMapping[E].duration <
                    this._interactionIdToRouteNameMapping[h].duration
                      ? E
                      : h,
                  )
                : void 0;
          if (
            (u.entryType === "first-input" &&
              g
                .map((h) => this._interactionIdToRouteNameMapping[h])
                .some((h) => h.duration === f && h.startTime === p)) ||
            !c
          )
            return;
          if (d) d.duration = Math.max(d.duration, f);
          else if (
            g.length < zp ||
            _ === void 0 ||
            f > this._interactionIdToRouteNameMapping[_].duration
          ) {
            const E = this._latestRoute.name,
              h = this._latestRoute.context;
            E &&
              h &&
              (_ &&
                Object.keys(this._interactionIdToRouteNameMapping).length >=
                  zp &&
                delete this._interactionIdToRouteNameMapping[_],
              (this._interactionIdToRouteNameMapping[c] = {
                routeName: E,
                duration: f,
                parentContext: h,
                user: l,
                activeTransaction: o,
                replayId: s,
                startTime: p,
              }));
          }
        }
      });
    };
    (ni("event", t), ni("first-input", t));
  }
}
function Bp(e) {
  const t = CE(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0;
}
function pT(e) {
  const t = e.attributes && e.attributes[Qn],
    n = e.data && e.data[Qn],
    r = e.metadata && e.metadata.source;
  return t || n || r;
}
function hT(e) {
  return "duration" in e;
}
const j = U;
let Yu = 0;
function zy() {
  return Yu > 0;
}
function mT() {
  (Yu++,
    setTimeout(() => {
      Yu--;
    }));
}
function ii(e, t = {}, n) {
  if (typeof e != "function") return e;
  try {
    const i = e.__sentry_wrapped__;
    if (i) return typeof i == "function" ? i : e;
    if (nd(e)) return e;
  } catch {
    return e;
  }
  const r = function () {
    const i = Array.prototype.slice.call(arguments);
    try {
      const s = i.map((o) => ii(o, t));
      return e.apply(this, s);
    } catch (s) {
      throw (
        mT(),
        dd((o) => {
          (o.addEventProcessor(
            (a) => (
              t.mechanism && (Ou(a, void 0), ds(a, t.mechanism)),
              (a.extra = { ...a.extra, arguments: i }),
              a
            ),
          ),
            ei(s));
        }),
        s
      );
    }
  };
  try {
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
  } catch {}
  (jg(r, e), ir(e, "__sentry_wrapped__", r));
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable &&
      Object.defineProperty(r, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return r;
}
const ht = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function By(e, t) {
  const n = gd(e, t),
    r = { type: t && t.name, value: vT(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === "" &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function gT(e, t, n, r) {
  const i = q(),
    s = i && i.getOptions().normalizeDepth,
    o = {
      exception: {
        values: [
          {
            type: Ta(t)
              ? t.constructor.name
              : r
                ? "UnhandledRejection"
                : "Error",
            value: wT(t, { isUnhandledRejection: r }),
          },
        ],
      },
      extra: { __serialized__: Jg(t, s) },
    };
  if (n) {
    const a = gd(e, n);
    a.length && (o.exception.values[0].stacktrace = { frames: a });
  }
  return o;
}
function Ol(e, t) {
  return { exception: { values: [By(e, t)] } };
}
function gd(e, t) {
  const n = t.stacktrace || t.stack || "",
    r = _T(t);
  try {
    return e(n, r);
  } catch {}
  return [];
}
const yT = /Minified React error #\d+;/i;
function _T(e) {
  if (e) {
    if (typeof e.framesToPop == "number") return e.framesToPop;
    if (yT.test(e.message)) return 1;
  }
  return 0;
}
function vT(e) {
  const t = e && e.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : t
    : "No error message";
}
function ST(e, t, n, r) {
  const i = (n && n.syntheticException) || void 0,
    s = yd(e, t, i, r);
  return (
    ds(s),
    (s.level = "error"),
    n && n.event_id && (s.event_id = n.event_id),
    Zr(s)
  );
}
function ET(e, t, n = "info", r, i) {
  const s = (r && r.syntheticException) || void 0,
    o = qu(e, t, s, i);
  return ((o.level = n), r && r.event_id && (o.event_id = r.event_id), Zr(o));
}
function yd(e, t, n, r, i) {
  let s;
  if (Jc(t) && t.error) return Ol(e, t.error);
  if (Jf(t) || gE(t)) {
    const o = t;
    if ("stack" in t) s = Ol(e, t);
    else {
      const a = o.name || (Jf(o) ? "DOMError" : "DOMException"),
        l = o.message ? `${a}: ${o.message}` : a;
      ((s = qu(e, l, n, r)), Ou(s, l));
    }
    return (
      "code" in o && (s.tags = { ...s.tags, "DOMException.code": `${o.code}` }),
      s
    );
  }
  return Qc(t)
    ? Ol(e, t)
    : Jr(t) || Ta(t)
      ? ((s = gT(e, t, n, i)), ds(s, { synthetic: !0 }), s)
      : ((s = qu(e, t, n, r)), Ou(s, `${t}`), ds(s, { synthetic: !0 }), s);
}
function qu(e, t, n, r) {
  const i = {};
  if (r && n) {
    const s = gd(e, n);
    s.length &&
      (i.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
  }
  if (Zc(t)) {
    const { __sentry_template_string__: s, __sentry_template_values__: o } = t;
    return ((i.logentry = { message: s, params: o }), i);
  }
  return ((i.message = t), i);
}
function wT(e, { isUnhandledRejection: t }) {
  const n = bE(e),
    r = t ? "promise rejection" : "exception";
  return Jc(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : Ta(e)
      ? `Event \`${kT(e)}\` (type=${e.type}) captured as ${r}`
      : `Object captured as ${r} with keys: ${n}`;
}
function kT(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function TT(e, { metadata: t, tunnel: n, dsn: r }) {
  const i = {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
      ...(!!n && !!r && { dsn: cr(r) }),
    },
    s = IT(e);
  return Fn(i, [s]);
}
function IT(e) {
  return [{ type: "user_report" }, e];
}
class CT extends Dw {
  constructor(t) {
    const n = j.SENTRY_SDK_SOURCE || n0();
    (xy(t, "browser", ["browser"], n),
      super(t),
      t.sendClientReports &&
        j.document &&
        j.document.addEventListener("visibilitychange", () => {
          j.document.visibilityState === "hidden" && this._flushOutcomes();
        }));
  }
  eventFromException(t, n) {
    return ST(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return ET(
      this._options.stackParser,
      t,
      n,
      r,
      this._options.attachStacktrace,
    );
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      ht && S.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = TT(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this._sendEnvelope(n);
  }
  _prepareEvent(t, n, r) {
    return (
      (t.platform = t.platform || "javascript"),
      super._prepareEvent(t, n, r)
    );
  }
  _flushOutcomes() {
    const t = this._clearOutcomes();
    if (t.length === 0) {
      ht && S.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      ht && S.log("No dsn provided, will not send outcomes");
      return;
    }
    ht && S.log("Sending outcomes:", t);
    const n = C0(t, this._options.tunnel && cr(this._dsn));
    this._sendEnvelope(n);
  }
}
let Di;
function xT() {
  if (Di) return Di;
  if (Pu(j.fetch)) return (Di = j.fetch.bind(j));
  const e = j.document;
  let t = j.fetch;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      ((n.hidden = !0), e.head.appendChild(n));
      const r = n.contentWindow;
      (r && r.fetch && (t = r.fetch), e.head.removeChild(n));
    } catch (n) {
      ht &&
        S.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n,
        );
    }
  return (Di = t.bind(j));
}
function RT() {
  Di = void 0;
}
function NT(e, t = xT()) {
  let n = 0,
    r = 0;
  function i(s) {
    const o = s.body.length;
    ((n += o), r++);
    const a = {
      body: s.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions,
    };
    try {
      return t(e.url, a).then(
        (l) => (
          (n -= o),
          r--,
          {
            statusCode: l.status,
            headers: {
              "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": l.headers.get("Retry-After"),
            },
          }
        ),
      );
    } catch (l) {
      return (RT(), (n -= o), r--, sd(l));
    }
  }
  return Cy(e, i);
}
const MT = 4;
function OT(e) {
  function t(n) {
    return new nt((r, i) => {
      const s = new XMLHttpRequest();
      ((s.onerror = i),
        (s.onreadystatechange = () => {
          s.readyState === MT &&
            r({
              statusCode: s.status,
              headers: {
                "x-sentry-rate-limits": s.getResponseHeader(
                  "X-Sentry-Rate-Limits",
                ),
                "retry-after": s.getResponseHeader("Retry-After"),
              },
            });
        }),
        s.open("POST", e.url));
      for (const o in e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, o) &&
          s.setRequestHeader(o, e.headers[o]);
      s.send(n.body);
    });
  }
  return Cy(e, t);
}
const Aa = "?",
  DT = 30,
  AT = 40,
  bT = 50;
function _d(e, t, n, r) {
  const i = { filename: e, function: t, in_app: !0 };
  return (n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i);
}
const PT =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  LT = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  FT = (e) => {
    const t = PT.exec(e);
    if (t) {
      if (t[2] && t[2].indexOf("eval") === 0) {
        const s = LT.exec(t[2]);
        s && ((t[2] = s[1]), (t[3] = s[2]), (t[4] = s[3]));
      }
      const [r, i] = Uy(t[1] || Aa, t[2]);
      return _d(i, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
    }
  },
  $T = [DT, FT],
  zT =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  BT = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  UT = (e) => {
    const t = zT.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const s = BT.exec(t[3]);
        s &&
          ((t[1] = t[1] || "eval"), (t[3] = s[1]), (t[4] = s[2]), (t[5] = ""));
      }
      let r = t[3],
        i = t[1] || Aa;
      return (
        ([i, r] = Uy(i, r)),
        _d(r, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  jT = [bT, UT],
  HT =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  WT = (e) => {
    const t = HT.exec(e);
    return t ? _d(t[2], t[1] || Aa, +t[3], t[4] ? +t[4] : void 0) : void 0;
  },
  VT = [AT, WT],
  GT = [$T, jT, VT],
  YT = Vg(...GT),
  Uy = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1,
      r = e.indexOf("safari-web-extension") !== -1;
    return n || r
      ? [
          e.indexOf("@") !== -1 ? e.split("@")[0] : Aa,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  ro = 1024,
  qT = "Breadcrumbs",
  KT = (e = {}) => {
    const t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e,
    };
    return {
      name: qT,
      setupOnce() {},
      setup(n) {
        (t.console && $E(ZT(n)),
          t.dom && qg(JT(n, t.dom)),
          t.xhr && id(e1(n)),
          t.fetch && rd(t1(n)),
          t.history && Ca(n1(n)),
          t.sentry && n.on && n.on("beforeSendEvent", QT(n)));
      },
    };
  },
  XT = KT;
function QT(e) {
  return function (n) {
    q() === e &&
      An(
        {
          category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
          event_id: n.event_id,
          level: n.level,
          message: gn(n),
        },
        { event: n },
      );
  };
}
function JT(e, t) {
  return function (r) {
    if (q() !== e) return;
    let i,
      s,
      o = typeof t == "object" ? t.serializeAttribute : void 0,
      a =
        typeof t == "object" && typeof t.maxStringLength == "number"
          ? t.maxStringLength
          : void 0;
    (a &&
      a > ro &&
      (ht &&
        S.warn(
          `\`dom.maxStringLength\` cannot exceed ${ro}, but a value of ${a} was configured. Sentry will use ${ro} instead.`,
        ),
      (a = ro)),
      typeof o == "string" && (o = [o]));
    try {
      const u = r.event,
        c = r1(u) ? u.target : u;
      ((i = Dn(c, { keyAttrs: o, maxStringLength: a })), (s = zg(c)));
    } catch {
      i = "<unknown>";
    }
    if (i.length === 0) return;
    const l = { category: `ui.${r.name}`, message: i };
    (s && (l.data = { "ui.component_name": s }),
      An(l, { event: r.event, name: r.name, global: r.global }));
  };
}
function ZT(e) {
  return function (n) {
    if (q() !== e) return;
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: f0(n.level),
      message: Zf(n.args, " "),
    };
    if (n.level === "assert")
      if (n.args[0] === !1)
        ((r.message = `Assertion failed: ${Zf(n.args.slice(1), " ") || "console.assert"}`),
          (r.data.arguments = n.args.slice(1)));
      else return;
    An(r, { input: n.args, level: n.level });
  };
}
function e1(e) {
  return function (n) {
    if (q() !== e) return;
    const { startTimestamp: r, endTimestamp: i } = n,
      s = n.xhr[vn];
    if (!r || !i || !s) return;
    const { method: o, url: a, status_code: l, body: u } = s,
      c = { method: o, url: a, status_code: l },
      d = { xhr: n.xhr, input: u, startTimestamp: r, endTimestamp: i };
    An({ category: "xhr", data: c, type: "http" }, d);
  };
}
function t1(e) {
  return function (n) {
    if (q() !== e) return;
    const { startTimestamp: r, endTimestamp: i } = n;
    if (
      i &&
      !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")
    )
      if (n.error) {
        const s = n.fetchData,
          o = {
            data: n.error,
            input: n.args,
            startTimestamp: r,
            endTimestamp: i,
          };
        An({ category: "fetch", data: s, level: "error", type: "http" }, o);
      } else {
        const s = n.response,
          o = { ...n.fetchData, status_code: s && s.status },
          a = {
            input: n.args,
            response: s,
            startTimestamp: r,
            endTimestamp: i,
          };
        An({ category: "fetch", data: o, type: "http" }, a);
      }
  };
}
function n1(e) {
  return function (n) {
    if (q() !== e) return;
    let r = n.from,
      i = n.to;
    const s = Xn(j.location.href);
    let o = r ? Xn(r) : void 0;
    const a = Xn(i);
    ((!o || !o.path) && (o = s),
      s.protocol === a.protocol && s.host === a.host && (i = a.relative),
      s.protocol === o.protocol && s.host === o.host && (r = o.relative),
      An({ category: "navigation", data: { from: r, to: i } }));
  };
}
function r1(e) {
  return !!e && !!e.target;
}
const i1 = "Dedupe",
  s1 = () => {
    let e;
    return {
      name: i1,
      setupOnce() {},
      processEvent(t) {
        if (t.type) return t;
        try {
          if (a1(t, e))
            return (
              ht &&
                S.warn(
                  "Event dropped due to being a duplicate of previously captured event.",
                ),
              null
            );
        } catch {}
        return (e = t);
      },
    };
  },
  o1 = s1;
function a1(e, t) {
  return t ? !!(l1(e, t) || u1(e, t)) : !1;
}
function l1(e, t) {
  const n = e.message,
    r = t.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !Hy(e, t) ||
    !jy(e, t)
  );
}
function u1(e, t) {
  const n = Up(t),
    r = Up(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Hy(e, t) ||
    !jy(e, t)
  );
}
function jy(e, t) {
  let n = jp(e),
    r = jp(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let i = 0; i < r.length; i++) {
    const s = r[i],
      o = n[i];
    if (
      s.filename !== o.filename ||
      s.lineno !== o.lineno ||
      s.colno !== o.colno ||
      s.function !== o.function
    )
      return !1;
  }
  return !0;
}
function Hy(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  ((n = n), (r = r));
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function Up(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function jp(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch {
      return;
    }
}
const c1 = "GlobalHandlers",
  d1 = (e = {}) => {
    const t = { onerror: !0, onunhandledrejection: !0, ...e };
    return {
      name: c1,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(n) {
        (t.onerror && (p1(n), Hp("onerror")),
          t.onunhandledrejection && (h1(n), Hp("onunhandledrejection")));
      },
    };
  },
  f1 = d1;
function p1(e) {
  Xg((t) => {
    const { stackParser: n, attachStacktrace: r } = Vy();
    if (q() !== e || zy()) return;
    const { msg: i, url: s, line: o, column: a, error: l } = t,
      u =
        l === void 0 && Ut(i)
          ? y1(i, s, o, a)
          : Wy(yd(n, l || i, void 0, r, !1), s, o, a);
    ((u.level = "error"),
      uy(u, {
        originalException: l,
        mechanism: { handled: !1, type: "onerror" },
      }));
  });
}
function h1(e) {
  Qg((t) => {
    const { stackParser: n, attachStacktrace: r } = Vy();
    if (q() !== e || zy()) return;
    const i = m1(t),
      s = ed(i) ? g1(i) : yd(n, i, void 0, r, !0);
    ((s.level = "error"),
      uy(s, {
        originalException: i,
        mechanism: { handled: !1, type: "onunhandledrejection" },
      }));
  });
}
function m1(e) {
  if (ed(e)) return e;
  const t = e;
  try {
    if ("reason" in t) return t.reason;
    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
  } catch {}
  return e;
}
function g1(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  };
}
function y1(e, t, n, r) {
  const i =
    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let s = Jc(e) ? e.message : e,
    o = "Error";
  const a = s.match(i);
  return (
    a && ((o = a[1]), (s = a[2])),
    Wy({ exception: { values: [{ type: o, value: s }] } }, t, n, r)
  );
}
function Wy(e, t, n, r) {
  const i = (e.exception = e.exception || {}),
    s = (i.values = i.values || []),
    o = (s[0] = s[0] || {}),
    a = (o.stacktrace = o.stacktrace || {}),
    l = (a.frames = a.frames || []),
    u = isNaN(parseInt(r, 10)) ? void 0 : r,
    c = isNaN(parseInt(n, 10)) ? void 0 : n,
    d = Ut(t) && t.length > 0 ? t : IE();
  return (
    l.length === 0 &&
      l.push({ colno: u, filename: d, function: "?", in_app: !0, lineno: c }),
    e
  );
}
function Hp(e) {
  ht && S.log(`Global Handler attached: ${e}`);
}
function Vy() {
  const e = q();
  return (
    (e && e.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
  );
}
const _1 = "HttpContext",
  v1 = () => ({
    name: _1,
    setupOnce() {},
    preprocessEvent(e) {
      if (!j.navigator && !j.location && !j.document) return;
      const t = (e.request && e.request.url) || (j.location && j.location.href),
        { referrer: n } = j.document || {},
        { userAgent: r } = j.navigator || {},
        i = {
          ...(e.request && e.request.headers),
          ...(n && { Referer: n }),
          ...(r && { "User-Agent": r }),
        },
        s = { ...e.request, ...(t && { url: t }), headers: i };
      e.request = s;
    },
  }),
  S1 = v1,
  E1 = "cause",
  w1 = 5,
  k1 = "LinkedErrors",
  T1 = (e = {}) => {
    const t = e.limit || w1,
      n = e.key || E1;
    return {
      name: k1,
      setupOnce() {},
      preprocessEvent(r, i, s) {
        const o = s.getOptions();
        EE(By, o.stackParser, o.maxValueLength, n, t, r, i);
      },
    };
  },
  I1 = T1,
  C1 = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  x1 = "TryCatch",
  R1 = (e = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...e,
    };
    return {
      name: x1,
      setupOnce() {
        (t.setTimeout && Ce(j, "setTimeout", Wp),
          t.setInterval && Ce(j, "setInterval", Wp),
          t.requestAnimationFrame && Ce(j, "requestAnimationFrame", M1),
          t.XMLHttpRequest &&
            "XMLHttpRequest" in j &&
            Ce(XMLHttpRequest.prototype, "send", O1));
        const n = t.eventTarget;
        n && (Array.isArray(n) ? n : C1).forEach(D1);
      },
    };
  },
  N1 = R1;
function Wp(e) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = ii(n, {
        mechanism: {
          data: { function: rn(e) },
          handled: !1,
          type: "instrument",
        },
      })),
      e.apply(this, t)
    );
  };
}
function M1(e) {
  return function (t) {
    return e.apply(this, [
      ii(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: rn(e) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function O1(e) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((i) => {
        i in n &&
          typeof n[i] == "function" &&
          Ce(n, i, function (s) {
            const o = {
                mechanism: {
                  data: { function: i, handler: rn(s) },
                  handled: !1,
                  type: "instrument",
                },
              },
              a = nd(s);
            return (a && (o.mechanism.data.handler = rn(a)), ii(s, o));
          });
      }),
      e.apply(this, t)
    );
  };
}
function D1(e) {
  const t = j,
    n = t[e] && t[e].prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty("addEventListener") ||
    (Ce(n, "addEventListener", function (r) {
      return function (i, s, o) {
        try {
          typeof s.handleEvent == "function" &&
            (s.handleEvent = ii(s.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: rn(s), target: e },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return r.apply(this, [
          i,
          ii(s, {
            mechanism: {
              data: { function: "addEventListener", handler: rn(s), target: e },
              handled: !1,
              type: "instrument",
            },
          }),
          o,
        ]);
      };
    }),
    Ce(n, "removeEventListener", function (r) {
      return function (i, s, o) {
        const a = s;
        try {
          const l = a && a.__sentry_wrapped__;
          l && r.call(this, i, l, o);
        } catch {}
        return r.call(this, i, a, o);
      };
    }));
}
const A1 = [Xw(), lk(), N1(), XT(), f1(), I1(), o1(), S1()];
function b1(e) {
  return [...A1];
}
function P1(e = {}) {
  (e.defaultIntegrations === void 0 && (e.defaultIntegrations = b1()),
    e.release === void 0 &&
      (typeof __SENTRY_RELEASE__ == "string" &&
        (e.release = __SENTRY_RELEASE__),
      j.SENTRY_RELEASE &&
        j.SENTRY_RELEASE.id &&
        (e.release = j.SENTRY_RELEASE.id)),
    e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
    e.sendClientReports === void 0 && (e.sendClientReports = !0));
  const t = {
    ...e,
    stackParser: LE(e.stackParser || YT),
    integrations: Cw(e),
    transport: e.transport || (Kg() ? NT : OT),
  };
  (Lw(CT, t), e.autoSessionTracking && L1());
}
const Vp = (e = {}, t = Ze()) => {
  if (!j.document) {
    ht && S.error("Global document not defined in showReportDialog call");
    return;
  }
  const { client: n, scope: r } = t.getStackTop(),
    i = e.dsn || (n && n.getDsn());
  if (!i) {
    ht && S.error("DSN not configured for showReportDialog call");
    return;
  }
  (r && (e.user = { ...r.getUser(), ...e.user }),
    e.eventId || (e.eventId = t.lastEventId()));
  const s = j.document.createElement("script");
  ((s.async = !0),
    (s.crossOrigin = "anonymous"),
    (s.src = Tw(i, e)),
    e.onLoad && (s.onload = e.onLoad));
  const { onClose: o } = e;
  if (o) {
    const l = (u) => {
      if (u.data === "__sentry_reportdialog_closed__")
        try {
          o();
        } finally {
          j.removeEventListener("message", l);
        }
    };
    j.addEventListener("message", l);
  }
  const a = j.document.head || j.document.body;
  a
    ? a.appendChild(s)
    : ht &&
      S.error("Not injecting report dialog. No injection point found in HTML");
};
function L1() {
  if (typeof j.document > "u") {
    ht &&
      S.warn(
        "Session tracking in non-browser environment with @sentry/browser is not supported.",
      );
    return;
  }
  (_p({ ignoreDuration: !0 }),
    vp(),
    Ca(({ from: e, to: t }) => {
      e !== void 0 && e !== t && (_p({ ignoreDuration: !0 }), vp());
    }));
}
const Z = U,
  vd = "sentryReplaySession",
  F1 = "replay_event",
  Sd = "Unable to send Replay",
  $1 = 3e5,
  z1 = 9e5,
  B1 = 5e3,
  U1 = 5500,
  j1 = 6e4,
  H1 = 5e3,
  W1 = 3,
  Gp = 15e4,
  io = 5e3,
  V1 = 3e3,
  G1 = 300,
  Ed = 2e7,
  Y1 = 4999,
  q1 = 15e3,
  Yp = 36e5;
function K1(e, t) {
  return e ?? t();
}
function Jo(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length; ) {
    const i = e[r],
      s = e[r + 1];
    if (
      ((r += 2), (i === "optionalAccess" || i === "optionalCall") && n == null)
    )
      return;
    i === "access" || i === "optionalAccess"
      ? ((t = n), (n = s(n)))
      : (i === "call" || i === "optionalCall") &&
        ((n = s((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
var Ee;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(Ee || (Ee = {}));
function X1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Vi(e) {
  const t = Jo([e, "optionalAccess", (n) => n.host]);
  return Jo([t, "optionalAccess", (n) => n.shadowRoot]) === e;
}
function Gi(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function Q1(e) {
  return (
    e.includes(" background-clip: text;") &&
      !e.includes(" -webkit-background-clip: text;") &&
      (e = e.replace(
        " background-clip: text;",
        " -webkit-background-clip: text; background-clip: text;",
      )),
    e
  );
}
function J1(e) {
  const { cssText: t } = e;
  if (t.split('"').length < 3) return t;
  const n = ["@import", `url(${JSON.stringify(e.href)})`];
  return (
    e.layerName === ""
      ? n.push("layer")
      : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(" ") + ";"
  );
}
function Zo(e) {
  try {
    const t = e.rules || e.cssRules;
    return t ? Q1(Array.from(t, Gy).join("")) : null;
  } catch {
    return null;
  }
}
function Gy(e) {
  let t;
  if (eI(e))
    try {
      t = Zo(e.styleSheet) || J1(e);
    } catch {}
  else if (tI(e) && e.selectorText.includes(":")) return Z1(e.cssText);
  return t || e.cssText;
}
function Z1(e) {
  const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return e.replace(t, "$1\\$2");
}
function eI(e) {
  return "styleSheet" in e;
}
function tI(e) {
  return "selectorText" in e;
}
class Yy {
  constructor() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
  getId(t) {
    if (!t) return -1;
    const n = Jo([
      this,
      "access",
      (r) => r.getMeta,
      "call",
      (r) => r(t),
      "optionalAccess",
      (r) => r.id,
    ]);
    return K1(n, () => -1);
  }
  getNode(t) {
    return this.idNodeMap.get(t) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(t) {
    return this.nodeMetaMap.get(t) || null;
  }
  removeNodeFromMap(t) {
    const n = this.getId(t);
    (this.idNodeMap.delete(n),
      t.childNodes && t.childNodes.forEach((r) => this.removeNodeFromMap(r)));
  }
  has(t) {
    return this.idNodeMap.has(t);
  }
  hasNode(t) {
    return this.nodeMetaMap.has(t);
  }
  add(t, n) {
    const r = n.id;
    (this.idNodeMap.set(r, t), this.nodeMetaMap.set(t, n));
  }
  replace(t, n) {
    const r = this.getNode(t);
    if (r) {
      const i = this.nodeMetaMap.get(r);
      i && this.nodeMetaMap.set(n, i);
    }
    this.idNodeMap.set(t, n);
  }
  reset() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
}
function nI() {
  return new Yy();
}
function ba({ maskInputOptions: e, tagName: t, type: n }) {
  return (
    t === "OPTION" && (t = "SELECT"),
    !!(
      e[t.toLowerCase()] ||
      (n && e[n]) ||
      n === "password" ||
      (t === "INPUT" && !n && e.text)
    )
  );
}
function fs({ isMasked: e, element: t, value: n, maskInputFn: r }) {
  let i = n || "";
  return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i;
}
function si(e) {
  return e.toLowerCase();
}
function Ku(e) {
  return e.toUpperCase();
}
const qp = "__rrweb_original__";
function rI(e) {
  const t = e.getContext("2d");
  if (!t) return !0;
  const n = 50;
  for (let r = 0; r < e.width; r += n)
    for (let i = 0; i < e.height; i += n) {
      const s = t.getImageData,
        o = qp in s ? s[qp] : s;
      if (
        new Uint32Array(
          o.call(t, r, i, Math.min(n, e.width - r), Math.min(n, e.height - i))
            .data.buffer,
        ).some((l) => l !== 0)
      )
        return !1;
    }
  return !0;
}
function wd(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? si(t) : null;
}
function ea(e, t, n) {
  return t === "INPUT" && (n === "radio" || n === "checkbox")
    ? e.getAttribute("value") || ""
    : e.value;
}
let iI = 1;
const sI = new RegExp("[^a-z0-9-_:]"),
  ps = -2;
function kd() {
  return iI++;
}
function oI(e) {
  if (e instanceof HTMLFormElement) return "form";
  const t = si(e.tagName);
  return sI.test(t) ? "div" : t;
}
function aI(e) {
  let t = "";
  return (
    e.indexOf("//") > -1
      ? (t = e.split("/").slice(0, 3).join("/"))
      : (t = e.split("/")[0]),
    (t = t.split("?")[0]),
    t
  );
}
let mr, Kp;
const lI = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  uI = /^(?:[a-z+]+:)?\/\//i,
  cI = /^www\..*/i,
  dI = /^(data:)([^,]*),(.*)/i;
function ta(e, t) {
  return (e || "").replace(lI, (n, r, i, s, o, a) => {
    const l = i || o || a,
      u = r || s || "";
    if (!l) return n;
    if (uI.test(l) || cI.test(l)) return `url(${u}${l}${u})`;
    if (dI.test(l)) return `url(${u}${l}${u})`;
    if (l[0] === "/") return `url(${u}${aI(t) + l}${u})`;
    const c = t.split("/"),
      d = l.split("/");
    c.pop();
    for (const f of d) f !== "." && (f === ".." ? c.pop() : c.push(f));
    return `url(${u}${c.join("/")}${u})`;
  });
}
const fI = /^[^ \t\n\r\u000c]+/,
  pI = /^[, \t\n\r\u000c]+/;
function hI(e, t) {
  if (t.trim() === "") return t;
  let n = 0;
  function r(s) {
    let o;
    const a = s.exec(t.substring(n));
    return a ? ((o = a[0]), (n += o.length), o) : "";
  }
  const i = [];
  for (; r(pI), !(n >= t.length); ) {
    let s = r(fI);
    if (s.slice(-1) === ",")
      ((s = Dr(e, s.substring(0, s.length - 1))), i.push(s));
    else {
      let o = "";
      s = Dr(e, s);
      let a = !1;
      for (;;) {
        const l = t.charAt(n);
        if (l === "") {
          i.push((s + o).trim());
          break;
        } else if (a) l === ")" && (a = !1);
        else if (l === ",") {
          ((n += 1), i.push((s + o).trim()));
          break;
        } else l === "(" && (a = !0);
        ((o += l), (n += 1));
      }
    }
  }
  return i.join(", ");
}
function Dr(e, t) {
  if (!t || t.trim() === "") return t;
  const n = e.createElement("a");
  return ((n.href = t), n.href);
}
function mI(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function Td() {
  const e = document.createElement("a");
  return ((e.href = ""), e.href);
}
function qy(e, t, n, r, i, s) {
  return (
    r &&
    (n === "src" ||
    (n === "href" && !(t === "use" && r[0] === "#")) ||
    (n === "xlink:href" && r[0] !== "#") ||
    (n === "background" && (t === "table" || t === "td" || t === "th"))
      ? Dr(e, r)
      : n === "srcset"
        ? hI(e, r)
        : n === "style"
          ? ta(r, Td())
          : t === "object" && n === "data"
            ? Dr(e, r)
            : typeof s == "function"
              ? s(n, r, i)
              : r)
  );
}
function Ky(e, t, n) {
  return (e === "video" || e === "audio") && t === "autoplay";
}
function gI(e, t, n, r) {
  try {
    if (r && e.matches(r)) return !1;
    if (typeof t == "string") {
      if (e.classList.contains(t)) return !0;
    } else
      for (let i = e.classList.length; i--; ) {
        const s = e.classList[i];
        if (t.test(s)) return !0;
      }
    if (n) return e.matches(n);
  } catch {}
  return !1;
}
function yI(e, t) {
  for (let n = e.classList.length; n--; ) {
    const r = e.classList[n];
    if (t.test(r)) return !0;
  }
  return !1;
}
function Yn(e, t, n = 1 / 0, r = 0) {
  return !e || e.nodeType !== e.ELEMENT_NODE || r > n
    ? -1
    : t(e)
      ? r
      : Yn(e.parentNode, t, n, r + 1);
}
function Ar(e, t) {
  return (n) => {
    const r = n;
    if (r === null) return !1;
    try {
      if (e) {
        if (typeof e == "string") {
          if (r.matches(`.${e}`)) return !0;
        } else if (yI(r, e)) return !0;
      }
      return !!(t && r.matches(t));
    } catch {
      return !1;
    }
  };
}
function oi(e, t, n, r, i, s) {
  try {
    const o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (o === null) return !1;
    if (o.tagName === "INPUT") {
      const u = o.getAttribute("autocomplete");
      if (
        [
          "current-password",
          "new-password",
          "cc-number",
          "cc-exp",
          "cc-exp-month",
          "cc-exp-year",
          "cc-csc",
        ].includes(u)
      )
        return !0;
    }
    let a = -1,
      l = -1;
    if (s) {
      if (((l = Yn(o, Ar(r, i))), l < 0)) return !0;
      a = Yn(o, Ar(t, n), l >= 0 ? l : 1 / 0);
    } else {
      if (((a = Yn(o, Ar(t, n))), a < 0)) return !1;
      l = Yn(o, Ar(r, i), a >= 0 ? a : 1 / 0);
    }
    return a >= 0 ? (l >= 0 ? a <= l : !0) : l >= 0 ? !1 : !!s;
  } catch {}
  return !!s;
}
function _I(e, t, n) {
  const r = e.contentWindow;
  if (!r) return;
  let i = !1,
    s;
  try {
    s = r.document.readyState;
  } catch {
    return;
  }
  if (s !== "complete") {
    const a = setTimeout(() => {
      i || (t(), (i = !0));
    }, n);
    e.addEventListener("load", () => {
      (clearTimeout(a), (i = !0), t());
    });
    return;
  }
  const o = "about:blank";
  if (r.location.href !== o || e.src === o || e.src === "")
    return (setTimeout(t, 0), e.addEventListener("load", t));
  e.addEventListener("load", t);
}
function vI(e, t, n) {
  let r = !1,
    i;
  try {
    i = e.sheet;
  } catch {
    return;
  }
  if (i) return;
  const s = setTimeout(() => {
    r || (t(), (r = !0));
  }, n);
  e.addEventListener("load", () => {
    (clearTimeout(s), (r = !0), t());
  });
}
function SI(e, t) {
  const {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: s,
      unblockSelector: o,
      maskAllText: a,
      maskAttributeFn: l,
      maskTextClass: u,
      unmaskTextClass: c,
      maskTextSelector: d,
      unmaskTextSelector: f,
      inlineStylesheet: p,
      maskInputOptions: g = {},
      maskTextFn: _,
      maskInputFn: E,
      dataURLOptions: h = {},
      inlineImages: m,
      recordCanvas: y,
      keepIframeSrcFn: v,
      newlyAddedElement: w = !1,
    } = t,
    k = EI(n, r);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat"
        ? { type: Ee.Document, childNodes: [], compatMode: e.compatMode }
        : { type: Ee.Document, childNodes: [] };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: Ee.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: k,
      };
    case e.ELEMENT_NODE:
      return kI(e, {
        doc: n,
        blockClass: i,
        blockSelector: s,
        unblockSelector: o,
        inlineStylesheet: p,
        maskAttributeFn: l,
        maskInputOptions: g,
        maskInputFn: E,
        dataURLOptions: h,
        inlineImages: m,
        recordCanvas: y,
        keepIframeSrcFn: v,
        newlyAddedElement: w,
        rootId: k,
        maskTextClass: u,
        unmaskTextClass: c,
        maskTextSelector: d,
        unmaskTextSelector: f,
      });
    case e.TEXT_NODE:
      return wI(e, {
        maskAllText: a,
        maskTextClass: u,
        unmaskTextClass: c,
        maskTextSelector: d,
        unmaskTextSelector: f,
        maskTextFn: _,
        maskInputOptions: g,
        maskInputFn: E,
        rootId: k,
      });
    case e.CDATA_SECTION_NODE:
      return { type: Ee.CDATA, textContent: "", rootId: k };
    case e.COMMENT_NODE:
      return { type: Ee.Comment, textContent: e.textContent || "", rootId: k };
    default:
      return !1;
  }
}
function EI(e, t) {
  if (!t.hasNode(e)) return;
  const n = t.getId(e);
  return n === 1 ? void 0 : n;
}
function wI(e, t) {
  const {
      maskAllText: n,
      maskTextClass: r,
      unmaskTextClass: i,
      maskTextSelector: s,
      unmaskTextSelector: o,
      maskTextFn: a,
      maskInputOptions: l,
      maskInputFn: u,
      rootId: c,
    } = t,
    d = e.parentNode && e.parentNode.tagName;
  let f = e.textContent;
  const p = d === "STYLE" ? !0 : void 0,
    g = d === "SCRIPT" ? !0 : void 0,
    _ = d === "TEXTAREA" ? !0 : void 0;
  if (p && f) {
    try {
      e.nextSibling ||
        e.previousSibling ||
        (Jo([
          e,
          "access",
          (h) => h.parentNode,
          "access",
          (h) => h.sheet,
          "optionalAccess",
          (h) => h.cssRules,
        ]) &&
          (f = Zo(e.parentNode.sheet)));
    } catch (h) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${h}`,
        e,
      );
    }
    f = ta(f, Td());
  }
  g && (f = "SCRIPT_PLACEHOLDER");
  const E = oi(e, r, s, i, o, n);
  if (
    (!p &&
      !g &&
      !_ &&
      f &&
      E &&
      (f = a ? a(f, e.parentElement) : f.replace(/[\S]/g, "*")),
    _ &&
      f &&
      (l.textarea || E) &&
      (f = u ? u(f, e.parentNode) : f.replace(/[\S]/g, "*")),
    d === "OPTION" && f)
  ) {
    const h = ba({ type: null, tagName: d, maskInputOptions: l });
    f = fs({
      isMasked: oi(e, r, s, i, o, h),
      element: e,
      value: f,
      maskInputFn: u,
    });
  }
  return { type: Ee.Text, textContent: f || "", isStyle: p, rootId: c };
}
function kI(e, t) {
  const {
      doc: n,
      blockClass: r,
      blockSelector: i,
      unblockSelector: s,
      inlineStylesheet: o,
      maskInputOptions: a = {},
      maskAttributeFn: l,
      maskInputFn: u,
      dataURLOptions: c = {},
      inlineImages: d,
      recordCanvas: f,
      keepIframeSrcFn: p,
      newlyAddedElement: g = !1,
      rootId: _,
      maskTextClass: E,
      unmaskTextClass: h,
      maskTextSelector: m,
      unmaskTextSelector: y,
    } = t,
    v = gI(e, r, i, s),
    w = oI(e);
  let k = {};
  const T = e.attributes.length;
  for (let N = 0; N < T; N++) {
    const R = e.attributes[N];
    R.name &&
      !Ky(w, R.name, R.value) &&
      (k[R.name] = qy(n, w, si(R.name), R.value, e, l));
  }
  if (w === "link" && o) {
    const N = Array.from(n.styleSheets).find(($) => $.href === e.href);
    let R = null;
    (N && (R = Zo(N)),
      R && (delete k.rel, delete k.href, (k._cssText = ta(R, N.href))));
  }
  if (
    w === "style" &&
    e.sheet &&
    !(e.innerText || e.textContent || "").trim().length
  ) {
    const N = Zo(e.sheet);
    N && (k._cssText = ta(N, Td()));
  }
  if (w === "input" || w === "textarea" || w === "select" || w === "option") {
    const N = e,
      R = wd(N),
      $ = ea(N, Ku(w), R),
      ne = N.checked;
    if (R !== "submit" && R !== "button" && $) {
      const le = oi(
        N,
        E,
        m,
        h,
        y,
        ba({ type: R, tagName: Ku(w), maskInputOptions: a }),
      );
      k.value = fs({ isMasked: le, element: N, value: $, maskInputFn: u });
    }
    ne && (k.checked = ne);
  }
  if (
    (w === "option" &&
      (e.selected && !a.select ? (k.selected = !0) : delete k.selected),
    w === "canvas" && f)
  ) {
    if (e.__context === "2d")
      rI(e) || (k.rr_dataURL = e.toDataURL(c.type, c.quality));
    else if (!("__context" in e)) {
      const N = e.toDataURL(c.type, c.quality),
        R = document.createElement("canvas");
      ((R.width = e.width), (R.height = e.height));
      const $ = R.toDataURL(c.type, c.quality);
      N !== $ && (k.rr_dataURL = N);
    }
  }
  if (w === "img" && d) {
    mr || ((mr = n.createElement("canvas")), (Kp = mr.getContext("2d")));
    const N = e,
      R = N.crossOrigin;
    N.crossOrigin = "anonymous";
    const $ = () => {
      N.removeEventListener("load", $);
      try {
        ((mr.width = N.naturalWidth),
          (mr.height = N.naturalHeight),
          Kp.drawImage(N, 0, 0),
          (k.rr_dataURL = mr.toDataURL(c.type, c.quality)));
      } catch (ne) {
        console.warn(`Cannot inline img src=${N.currentSrc}! Error: ${ne}`);
      }
      R ? (k.crossOrigin = R) : N.removeAttribute("crossorigin");
    };
    N.complete && N.naturalWidth !== 0 ? $() : N.addEventListener("load", $);
  }
  if (
    ((w === "audio" || w === "video") &&
      ((k.rr_mediaState = e.paused ? "paused" : "played"),
      (k.rr_mediaCurrentTime = e.currentTime)),
    g ||
      (e.scrollLeft && (k.rr_scrollLeft = e.scrollLeft),
      e.scrollTop && (k.rr_scrollTop = e.scrollTop)),
    v)
  ) {
    const { width: N, height: R } = e.getBoundingClientRect();
    k = { class: k.class, rr_width: `${N}px`, rr_height: `${R}px` };
  }
  w === "iframe" &&
    !p(k.src) &&
    (e.contentDocument || (k.rr_src = k.src), delete k.src);
  let C;
  try {
    customElements.get(w) && (C = !0);
  } catch {}
  return {
    type: Ee.Element,
    tagName: w,
    attributes: k,
    childNodes: [],
    isSVG: mI(e) || void 0,
    needBlock: v,
    rootId: _,
    isCustom: C,
  };
}
function J(e) {
  return e == null ? "" : e.toLowerCase();
}
function TI(e, t) {
  if (t.comment && e.type === Ee.Comment) return !0;
  if (e.type === Ee.Element) {
    if (
      t.script &&
      (e.tagName === "script" ||
        (e.tagName === "link" &&
          (e.attributes.rel === "preload" ||
            e.attributes.rel === "modulepreload") &&
          e.attributes.as === "script") ||
        (e.tagName === "link" &&
          e.attributes.rel === "prefetch" &&
          typeof e.attributes.href == "string" &&
          e.attributes.href.endsWith(".js")))
    )
      return !0;
    if (
      t.headFavicon &&
      ((e.tagName === "link" && e.attributes.rel === "shortcut icon") ||
        (e.tagName === "meta" &&
          (J(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
            J(e.attributes.name) === "application-name" ||
            J(e.attributes.rel) === "icon" ||
            J(e.attributes.rel) === "apple-touch-icon" ||
            J(e.attributes.rel) === "shortcut icon")))
    )
      return !0;
    if (e.tagName === "meta") {
      if (
        t.headMetaDescKeywords &&
        J(e.attributes.name).match(/^description|keywords$/)
      )
        return !0;
      if (
        t.headMetaSocial &&
        (J(e.attributes.property).match(/^(og|twitter|fb):/) ||
          J(e.attributes.name).match(/^(og|twitter):/) ||
          J(e.attributes.name) === "pinterest")
      )
        return !0;
      if (
        t.headMetaRobots &&
        (J(e.attributes.name) === "robots" ||
          J(e.attributes.name) === "googlebot" ||
          J(e.attributes.name) === "bingbot")
      )
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (
        t.headMetaAuthorship &&
        (J(e.attributes.name) === "author" ||
          J(e.attributes.name) === "generator" ||
          J(e.attributes.name) === "framework" ||
          J(e.attributes.name) === "publisher" ||
          J(e.attributes.name) === "progid" ||
          J(e.attributes.property).match(/^article:/) ||
          J(e.attributes.property).match(/^product:/))
      )
        return !0;
      if (
        t.headMetaVerification &&
        (J(e.attributes.name) === "google-site-verification" ||
          J(e.attributes.name) === "yandex-verification" ||
          J(e.attributes.name) === "csrf-token" ||
          J(e.attributes.name) === "p:domain_verify" ||
          J(e.attributes.name) === "verify-v1" ||
          J(e.attributes.name) === "verification" ||
          J(e.attributes.name) === "shopify-checkout-api-token")
      )
        return !0;
    }
  }
  return !1;
}
function br(e, t) {
  const {
    doc: n,
    mirror: r,
    blockClass: i,
    blockSelector: s,
    unblockSelector: o,
    maskAllText: a,
    maskTextClass: l,
    unmaskTextClass: u,
    maskTextSelector: c,
    unmaskTextSelector: d,
    skipChild: f = !1,
    inlineStylesheet: p = !0,
    maskInputOptions: g = {},
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: h,
    slimDOMOptions: m,
    dataURLOptions: y = {},
    inlineImages: v = !1,
    recordCanvas: w = !1,
    onSerialize: k,
    onIframeLoad: T,
    iframeLoadTimeout: C = 5e3,
    onStylesheetLoad: N,
    stylesheetLoadTimeout: R = 5e3,
    keepIframeSrcFn: $ = () => !1,
    newlyAddedElement: ne = !1,
  } = t;
  let { preserveWhiteSpace: le = !0 } = t;
  const _e = SI(e, {
    doc: n,
    mirror: r,
    blockClass: i,
    blockSelector: s,
    maskAllText: a,
    unblockSelector: o,
    maskTextClass: l,
    unmaskTextClass: u,
    maskTextSelector: c,
    unmaskTextSelector: d,
    inlineStylesheet: p,
    maskInputOptions: g,
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: h,
    dataURLOptions: y,
    inlineImages: v,
    recordCanvas: w,
    keepIframeSrcFn: $,
    newlyAddedElement: ne,
  });
  if (!_e) return (console.warn(e, "not serialized"), null);
  let $e;
  r.hasNode(e)
    ? ($e = r.getId(e))
    : TI(_e, m) ||
        (!le &&
          _e.type === Ee.Text &&
          !_e.isStyle &&
          !_e.textContent.replace(/^\s+|\s+$/gm, "").length)
      ? ($e = ps)
      : ($e = kd());
  const V = Object.assign(_e, { id: $e });
  if ((r.add(e, V), $e === ps)) return null;
  k && k(e);
  let Ae = !f;
  if (V.type === Ee.Element) {
    ((Ae = Ae && !V.needBlock), delete V.needBlock);
    const x = e.shadowRoot;
    x && Gi(x) && (V.isShadowHost = !0);
  }
  if ((V.type === Ee.Document || V.type === Ee.Element) && Ae) {
    m.headWhitespace &&
      V.type === Ee.Element &&
      V.tagName === "head" &&
      (le = !1);
    const x = {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: s,
      maskAllText: a,
      unblockSelector: o,
      maskTextClass: l,
      unmaskTextClass: u,
      maskTextSelector: c,
      unmaskTextSelector: d,
      skipChild: f,
      inlineStylesheet: p,
      maskInputOptions: g,
      maskAttributeFn: _,
      maskTextFn: E,
      maskInputFn: h,
      slimDOMOptions: m,
      dataURLOptions: y,
      inlineImages: v,
      recordCanvas: w,
      preserveWhiteSpace: le,
      onSerialize: k,
      onIframeLoad: T,
      iframeLoadTimeout: C,
      onStylesheetLoad: N,
      stylesheetLoadTimeout: R,
      keepIframeSrcFn: $,
    };
    for (const O of Array.from(e.childNodes)) {
      const A = br(O, x);
      A && V.childNodes.push(A);
    }
    if (X1(e) && e.shadowRoot)
      for (const O of Array.from(e.shadowRoot.childNodes)) {
        const A = br(O, x);
        A && (Gi(e.shadowRoot) && (A.isShadow = !0), V.childNodes.push(A));
      }
  }
  return (
    e.parentNode && Vi(e.parentNode) && Gi(e.parentNode) && (V.isShadow = !0),
    V.type === Ee.Element &&
      V.tagName === "iframe" &&
      _I(
        e,
        () => {
          const x = e.contentDocument;
          if (x && T) {
            const O = br(x, {
              doc: x,
              mirror: r,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: l,
              unmaskTextClass: u,
              maskTextSelector: c,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: p,
              maskInputOptions: g,
              maskAttributeFn: _,
              maskTextFn: E,
              maskInputFn: h,
              slimDOMOptions: m,
              dataURLOptions: y,
              inlineImages: v,
              recordCanvas: w,
              preserveWhiteSpace: le,
              onSerialize: k,
              onIframeLoad: T,
              iframeLoadTimeout: C,
              onStylesheetLoad: N,
              stylesheetLoadTimeout: R,
              keepIframeSrcFn: $,
            });
            O && T(e, O);
          }
        },
        C,
      ),
    V.type === Ee.Element &&
      V.tagName === "link" &&
      V.attributes.rel === "stylesheet" &&
      vI(
        e,
        () => {
          if (N) {
            const x = br(e, {
              doc: n,
              mirror: r,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: l,
              unmaskTextClass: u,
              maskTextSelector: c,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: p,
              maskInputOptions: g,
              maskAttributeFn: _,
              maskTextFn: E,
              maskInputFn: h,
              slimDOMOptions: m,
              dataURLOptions: y,
              inlineImages: v,
              recordCanvas: w,
              preserveWhiteSpace: le,
              onSerialize: k,
              onIframeLoad: T,
              iframeLoadTimeout: C,
              onStylesheetLoad: N,
              stylesheetLoadTimeout: R,
              keepIframeSrcFn: $,
            });
            x && N(e, x);
          }
        },
        R,
      ),
    V
  );
}
function II(e, t) {
  const {
    mirror: n = new Yy(),
    blockClass: r = "rr-block",
    blockSelector: i = null,
    unblockSelector: s = null,
    maskAllText: o = !1,
    maskTextClass: a = "rr-mask",
    unmaskTextClass: l = null,
    maskTextSelector: u = null,
    unmaskTextSelector: c = null,
    inlineStylesheet: d = !0,
    inlineImages: f = !1,
    recordCanvas: p = !1,
    maskAllInputs: g = !1,
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: h,
    slimDOM: m = !1,
    dataURLOptions: y,
    preserveWhiteSpace: v,
    onSerialize: w,
    onIframeLoad: k,
    iframeLoadTimeout: T,
    onStylesheetLoad: C,
    stylesheetLoadTimeout: N,
    keepIframeSrcFn: R = () => !1,
  } = t || {};
  return br(e, {
    doc: e,
    mirror: n,
    blockClass: r,
    blockSelector: i,
    unblockSelector: s,
    maskAllText: o,
    maskTextClass: a,
    unmaskTextClass: l,
    maskTextSelector: u,
    unmaskTextSelector: c,
    skipChild: !1,
    inlineStylesheet: d,
    maskInputOptions:
      g === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
          }
        : g === !1
          ? {}
          : g,
    maskAttributeFn: _,
    maskTextFn: E,
    maskInputFn: h,
    slimDOMOptions:
      m === !0 || m === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: m === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0,
          }
        : m === !1
          ? {}
          : m,
    dataURLOptions: y,
    inlineImages: f,
    recordCanvas: p,
    preserveWhiteSpace: v,
    onSerialize: w,
    onIframeLoad: k,
    iframeLoadTimeout: T,
    onStylesheetLoad: C,
    stylesheetLoadTimeout: N,
    keepIframeSrcFn: R,
    newlyAddedElement: !1,
  });
}
function cn(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length; ) {
    const i = e[r],
      s = e[r + 1];
    if (
      ((r += 2), (i === "optionalAccess" || i === "optionalCall") && n == null)
    )
      return;
    i === "access" || i === "optionalAccess"
      ? ((t = n), (n = s(n)))
      : (i === "call" || i === "optionalCall") &&
        ((n = s((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
function je(e, t, n = document) {
  const r = { capture: !0, passive: !0 };
  return (n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r));
}
const yr = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let Xp = {
  map: {},
  getId() {
    return (console.error(yr), -1);
  },
  getNode() {
    return (console.error(yr), null);
  },
  removeNodeFromMap() {
    console.error(yr);
  },
  has() {
    return (console.error(yr), !1);
  },
  reset() {
    console.error(yr);
  },
};
typeof window < "u" &&
  window.Proxy &&
  window.Reflect &&
  (Xp = new Proxy(Xp, {
    get(e, t, n) {
      return (t === "map" && console.error(yr), Reflect.get(e, t, n));
    },
  }));
function hs(e, t, n = {}) {
  let r = null,
    i = 0;
  return function (...s) {
    const o = Date.now();
    !i && n.leading === !1 && (i = o);
    const a = t - (o - i),
      l = this;
    a <= 0 || a > t
      ? (r && (DI(r), (r = null)), (i = o), e.apply(l, s))
      : !r &&
        n.trailing !== !1 &&
        (r = Pa(() => {
          ((i = n.leading === !1 ? 0 : Date.now()), (r = null), e.apply(l, s));
        }, a));
  };
}
function Xy(e, t, n, r, i = window) {
  const s = i.Object.getOwnPropertyDescriptor(e, t);
  return (
    i.Object.defineProperty(
      e,
      t,
      r
        ? n
        : {
            set(o) {
              (Pa(() => {
                n.set.call(this, o);
              }, 0),
                s && s.set && s.set.call(this, o));
            },
          },
    ),
    () => Xy(e, t, s || {}, !0)
  );
}
function Id(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    const r = e[t],
      i = n(r);
    return (
      typeof i == "function" &&
        ((i.prototype = i.prototype || {}),
        Object.defineProperties(i, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (e[t] = i),
      () => {
        e[t] = r;
      }
    );
  } catch {
    return () => {};
  }
}
let na = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (na = () => new Date().getTime());
function Qy(e) {
  const t = e.document;
  return {
    left: t.scrollingElement
      ? t.scrollingElement.scrollLeft
      : e.pageXOffset !== void 0
        ? e.pageXOffset
        : cn([
            t,
            "optionalAccess",
            (n) => n.documentElement,
            "access",
            (n) => n.scrollLeft,
          ]) ||
          cn([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.parentElement,
            "optionalAccess",
            (n) => n.scrollLeft,
          ]) ||
          cn([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.scrollLeft,
          ]) ||
          0,
    top: t.scrollingElement
      ? t.scrollingElement.scrollTop
      : e.pageYOffset !== void 0
        ? e.pageYOffset
        : cn([
            t,
            "optionalAccess",
            (n) => n.documentElement,
            "access",
            (n) => n.scrollTop,
          ]) ||
          cn([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.parentElement,
            "optionalAccess",
            (n) => n.scrollTop,
          ]) ||
          cn([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.scrollTop,
          ]) ||
          0,
  };
}
function Jy() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function Zy() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function e_(e) {
  return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function It(e, t, n, r, i) {
  if (!e) return !1;
  const s = e_(e);
  if (!s) return !1;
  const o = Ar(t, n);
  if (!i) {
    const u = r && s.matches(r);
    return o(s) && !u;
  }
  const a = Yn(s, o);
  let l = -1;
  return a < 0
    ? !1
    : (r && (l = Yn(s, Ar(null, r))), a > -1 && l < 0 ? !0 : a < l);
}
function CI(e, t) {
  return t.getId(e) !== -1;
}
function Dl(e, t) {
  return t.getId(e) === ps;
}
function t_(e, t) {
  if (Vi(e)) return !1;
  const n = t.getId(e);
  return t.has(n)
    ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
      ? !1
      : e.parentNode
        ? t_(e.parentNode, t)
        : !0
    : !0;
}
function Xu(e) {
  return !!e.changedTouches;
}
function xI(e = window) {
  ("NodeList" in e &&
    !e.NodeList.prototype.forEach &&
    (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList" in e &&
      !e.DOMTokenList.prototype.forEach &&
      (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = (...t) => {
        let n = t[0];
        if (!(0 in t)) throw new TypeError("1 argument is required");
        do if (this === n) return !0;
        while ((n = n && n.parentNode));
        return !1;
      }));
}
function n_(e, t) {
  return !!(e.nodeName === "IFRAME" && t.getMeta(e));
}
function r_(e, t) {
  return !!(
    e.nodeName === "LINK" &&
    e.nodeType === e.ELEMENT_NODE &&
    e.getAttribute &&
    e.getAttribute("rel") === "stylesheet" &&
    t.getMeta(e)
  );
}
function Qu(e) {
  return !!cn([e, "optionalAccess", (t) => t.shadowRoot]);
}
class RI {
  constructor() {
    ((this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()));
  }
  getId(t) {
    return M0(this.styleIDMap.get(t), () => -1);
  }
  has(t) {
    return this.styleIDMap.has(t);
  }
  add(t, n) {
    if (this.has(t)) return this.getId(t);
    let r;
    return (
      n === void 0 ? (r = this.id++) : (r = n),
      this.styleIDMap.set(t, r),
      this.idStyleMap.set(r, t),
      r
    );
  }
  getStyle(t) {
    return this.idStyleMap.get(t) || null;
  }
  reset() {
    ((this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1));
  }
  generateId() {
    return this.id++;
  }
}
function i_(e) {
  let t = null;
  return (
    cn([
      e,
      "access",
      (n) => n.getRootNode,
      "optionalCall",
      (n) => n(),
      "optionalAccess",
      (n) => n.nodeType,
    ]) === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (t = e.getRootNode().host),
    t
  );
}
function NI(e) {
  let t = e,
    n;
  for (; (n = i_(t)); ) t = n;
  return t;
}
function MI(e) {
  const t = e.ownerDocument;
  if (!t) return !1;
  const n = NI(e);
  return t.contains(n);
}
function s_(e) {
  const t = e.ownerDocument;
  return t ? t.contains(e) || MI(e) : !1;
}
const Qp = {};
function Cd(e) {
  const t = Qp[e];
  if (t) return t;
  const n = window.document;
  let r = window[e];
  if (n && typeof n.createElement == "function")
    try {
      const i = n.createElement("iframe");
      ((i.hidden = !0), n.head.appendChild(i));
      const s = i.contentWindow;
      (s && s[e] && (r = s[e]), n.head.removeChild(i));
    } catch {}
  return (Qp[e] = r.bind(window));
}
function OI(...e) {
  return Cd("requestAnimationFrame")(...e);
}
function Pa(...e) {
  return Cd("setTimeout")(...e);
}
function DI(...e) {
  return Cd("clearTimeout")(...e);
}
var L = ((e) => (
    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin"),
    e
  ))(L || {}),
  F = ((e) => (
    (e[(e.Mutation = 0)] = "Mutation"),
    (e[(e.MouseMove = 1)] = "MouseMove"),
    (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
    (e[(e.Scroll = 3)] = "Scroll"),
    (e[(e.ViewportResize = 4)] = "ViewportResize"),
    (e[(e.Input = 5)] = "Input"),
    (e[(e.TouchMove = 6)] = "TouchMove"),
    (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
    (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
    (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
    (e[(e.Font = 10)] = "Font"),
    (e[(e.Log = 11)] = "Log"),
    (e[(e.Drag = 12)] = "Drag"),
    (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
    (e[(e.Selection = 14)] = "Selection"),
    (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (e[(e.CustomElement = 16)] = "CustomElement"),
    e
  ))(F || {}),
  ze = ((e) => (
    (e[(e.MouseUp = 0)] = "MouseUp"),
    (e[(e.MouseDown = 1)] = "MouseDown"),
    (e[(e.Click = 2)] = "Click"),
    (e[(e.ContextMenu = 3)] = "ContextMenu"),
    (e[(e.DblClick = 4)] = "DblClick"),
    (e[(e.Focus = 5)] = "Focus"),
    (e[(e.Blur = 6)] = "Blur"),
    (e[(e.TouchStart = 7)] = "TouchStart"),
    (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (e[(e.TouchEnd = 9)] = "TouchEnd"),
    (e[(e.TouchCancel = 10)] = "TouchCancel"),
    e
  ))(ze || {}),
  Ht = ((e) => (
    (e[(e.Mouse = 0)] = "Mouse"),
    (e[(e.Pen = 1)] = "Pen"),
    (e[(e.Touch = 2)] = "Touch"),
    e
  ))(Ht || {});
function AI(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length; ) {
    const i = e[r],
      s = e[r + 1];
    if (
      ((r += 2), (i === "optionalAccess" || i === "optionalCall") && n == null)
    )
      return;
    i === "access" || i === "optionalAccess"
      ? ((t = n), (n = s(n)))
      : (i === "call" || i === "optionalCall") &&
        ((n = s((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
function Jp(e) {
  return "__ln" in e;
}
class bI {
  constructor() {
    ((this.length = 0), (this.head = null), (this.tail = null));
  }
  get(t) {
    if (t >= this.length) throw new Error("Position outside of list range");
    let n = this.head;
    for (let r = 0; r < t; r++)
      n = AI([n, "optionalAccess", (i) => i.next]) || null;
    return n;
  }
  addNode(t) {
    const n = { value: t, previous: null, next: null };
    if (((t.__ln = n), t.previousSibling && Jp(t.previousSibling))) {
      const r = t.previousSibling.__ln.next;
      ((n.next = r),
        (n.previous = t.previousSibling.__ln),
        (t.previousSibling.__ln.next = n),
        r && (r.previous = n));
    } else if (
      t.nextSibling &&
      Jp(t.nextSibling) &&
      t.nextSibling.__ln.previous
    ) {
      const r = t.nextSibling.__ln.previous;
      ((n.previous = r),
        (n.next = t.nextSibling.__ln),
        (t.nextSibling.__ln.previous = n),
        r && (r.next = n));
    } else
      (this.head && (this.head.previous = n),
        (n.next = this.head),
        (this.head = n));
    (n.next === null && (this.tail = n), this.length++);
  }
  removeNode(t) {
    const n = t.__ln;
    this.head &&
      (n.previous
        ? ((n.previous.next = n.next),
          n.next ? (n.next.previous = n.previous) : (this.tail = n.previous))
        : ((this.head = n.next),
          this.head ? (this.head.previous = null) : (this.tail = null)),
      t.__ln && delete t.__ln,
      this.length--);
  }
}
const Zp = (e, t) => `${e}@${t}`;
class PI {
  constructor() {
    ((this.frozen = !1),
      (this.locked = !1),
      (this.texts = []),
      (this.attributes = []),
      (this.attributeMap = new WeakMap()),
      (this.removes = []),
      (this.mapRemoves = []),
      (this.movedMap = {}),
      (this.addedSet = new Set()),
      (this.movedSet = new Set()),
      (this.droppedSet = new Set()),
      (this.processMutations = (t) => {
        (t.forEach(this.processMutation), this.emit());
      }),
      (this.emit = () => {
        if (this.frozen || this.locked) return;
        const t = [],
          n = new Set(),
          r = new bI(),
          i = (l) => {
            let u = l,
              c = ps;
            for (; c === ps; )
              ((u = u && u.nextSibling), (c = u && this.mirror.getId(u)));
            return c;
          },
          s = (l) => {
            if (!l.parentNode || !s_(l)) return;
            const u = Vi(l.parentNode)
                ? this.mirror.getId(i_(l))
                : this.mirror.getId(l.parentNode),
              c = i(l);
            if (u === -1 || c === -1) return r.addNode(l);
            const d = br(l, {
              doc: this.doc,
              mirror: this.mirror,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              maskAllText: this.maskAllText,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              unmaskTextClass: this.unmaskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              skipChild: !0,
              newlyAddedElement: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskInputOptions: this.maskInputOptions,
              maskAttributeFn: this.maskAttributeFn,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              dataURLOptions: this.dataURLOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: (f) => {
                (n_(f, this.mirror) && this.iframeManager.addIframe(f),
                  r_(f, this.mirror) &&
                    this.stylesheetManager.trackLinkElement(f),
                  Qu(l) &&
                    this.shadowDomManager.addShadowRoot(
                      l.shadowRoot,
                      this.doc,
                    ));
              },
              onIframeLoad: (f, p) => {
                (this.iframeManager.attachIframe(f, p),
                  this.shadowDomManager.observeAttachShadow(f));
              },
              onStylesheetLoad: (f, p) => {
                this.stylesheetManager.attachLinkElement(f, p);
              },
            });
            d && (t.push({ parentId: u, nextId: c, node: d }), n.add(d.id));
          };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const l of this.movedSet)
          (eh(this.removes, l, this.mirror) &&
            !this.movedSet.has(l.parentNode)) ||
            s(l);
        for (const l of this.addedSet)
          (!th(this.droppedSet, l) && !eh(this.removes, l, this.mirror)) ||
          th(this.movedSet, l)
            ? s(l)
            : this.droppedSet.add(l);
        let o = null;
        for (; r.length; ) {
          let l = null;
          if (o) {
            const u = this.mirror.getId(o.value.parentNode),
              c = i(o.value);
            u !== -1 && c !== -1 && (l = o);
          }
          if (!l) {
            let u = r.tail;
            for (; u; ) {
              const c = u;
              if (((u = u.previous), c)) {
                const d = this.mirror.getId(c.value.parentNode);
                if (i(c.value) === -1) continue;
                if (d !== -1) {
                  l = c;
                  break;
                } else {
                  const p = c.value;
                  if (
                    p.parentNode &&
                    p.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ) {
                    const g = p.parentNode.host;
                    if (this.mirror.getId(g) !== -1) {
                      l = c;
                      break;
                    }
                  }
                }
              }
            }
          }
          if (!l) {
            for (; r.head; ) r.removeNode(r.head.value);
            break;
          }
          ((o = l.previous), r.removeNode(l.value), s(l.value));
        }
        const a = {
          texts: this.texts
            .map((l) => ({ id: this.mirror.getId(l.node), value: l.value }))
            .filter((l) => !n.has(l.id))
            .filter((l) => this.mirror.has(l.id)),
          attributes: this.attributes
            .map((l) => {
              const { attributes: u } = l;
              if (typeof u.style == "string") {
                const c = JSON.stringify(l.styleDiff),
                  d = JSON.stringify(l._unchangedStyles);
                c.length < u.style.length &&
                  (c + d).split("var(").length ===
                    u.style.split("var(").length &&
                  (u.style = l.styleDiff);
              }
              return { id: this.mirror.getId(l.node), attributes: u };
            })
            .filter((l) => !n.has(l.id))
            .filter((l) => this.mirror.has(l.id)),
          removes: this.removes,
          adds: t,
        };
        (!a.texts.length &&
          !a.attributes.length &&
          !a.removes.length &&
          !a.adds.length) ||
          ((this.texts = []),
          (this.attributes = []),
          (this.attributeMap = new WeakMap()),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(a));
      }),
      (this.processMutation = (t) => {
        if (!Dl(t.target, this.mirror))
          switch (t.type) {
            case "characterData": {
              const n = t.target.textContent;
              !It(
                t.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1,
              ) &&
                n !== t.oldValue &&
                this.texts.push({
                  value:
                    oi(
                      t.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      this.maskAllText,
                    ) && n
                      ? this.maskTextFn
                        ? this.maskTextFn(n, e_(t.target))
                        : n.replace(/[\S]/g, "*")
                      : n,
                  node: t.target,
                });
              break;
            }
            case "attributes": {
              const n = t.target;
              let r = t.attributeName,
                i = t.target.getAttribute(r);
              if (r === "value") {
                const o = wd(n),
                  a = n.tagName;
                i = ea(n, a, o);
                const l = ba({
                    maskInputOptions: this.maskInputOptions,
                    tagName: a,
                    type: o,
                  }),
                  u = oi(
                    t.target,
                    this.maskTextClass,
                    this.maskTextSelector,
                    this.unmaskTextClass,
                    this.unmaskTextSelector,
                    l,
                  );
                i = fs({
                  isMasked: u,
                  element: n,
                  value: i,
                  maskInputFn: this.maskInputFn,
                });
              }
              if (
                It(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) ||
                i === t.oldValue
              )
                return;
              let s = this.attributeMap.get(t.target);
              if (
                n.tagName === "IFRAME" &&
                r === "src" &&
                !this.keepIframeSrcFn(i)
              )
                if (!n.contentDocument) r = "rr_src";
                else return;
              if (
                (s ||
                  ((s = {
                    node: t.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {},
                  }),
                  this.attributes.push(s),
                  this.attributeMap.set(t.target, s)),
                r === "type" &&
                  n.tagName === "INPUT" &&
                  (t.oldValue || "").toLowerCase() === "password" &&
                  n.setAttribute("data-rr-is-password", "true"),
                !Ky(n.tagName, r) &&
                  ((s.attributes[r] = qy(
                    this.doc,
                    si(n.tagName),
                    si(r),
                    i,
                    n,
                    this.maskAttributeFn,
                  )),
                  r === "style"))
              ) {
                if (!this.unattachedDoc)
                  try {
                    this.unattachedDoc =
                      document.implementation.createHTMLDocument();
                  } catch {
                    this.unattachedDoc = this.doc;
                  }
                const o = this.unattachedDoc.createElement("span");
                t.oldValue && o.setAttribute("style", t.oldValue);
                for (const a of Array.from(n.style)) {
                  const l = n.style.getPropertyValue(a),
                    u = n.style.getPropertyPriority(a);
                  l !== o.style.getPropertyValue(a) ||
                  u !== o.style.getPropertyPriority(a)
                    ? u === ""
                      ? (s.styleDiff[a] = l)
                      : (s.styleDiff[a] = [l, u])
                    : (s._unchangedStyles[a] = [l, u]);
                }
                for (const a of Array.from(o.style))
                  n.style.getPropertyValue(a) === "" && (s.styleDiff[a] = !1);
              }
              break;
            }
            case "childList": {
              if (
                It(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !0,
                )
              )
                return;
              (t.addedNodes.forEach((n) => this.genAdds(n, t.target)),
                t.removedNodes.forEach((n) => {
                  const r = this.mirror.getId(n),
                    i = Vi(t.target)
                      ? this.mirror.getId(t.target.host)
                      : this.mirror.getId(t.target);
                  It(
                    t.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) ||
                    Dl(n, this.mirror) ||
                    !CI(n, this.mirror) ||
                    (this.addedSet.has(n)
                      ? (Ju(this.addedSet, n), this.droppedSet.add(n))
                      : (this.addedSet.has(t.target) && r === -1) ||
                        t_(t.target, this.mirror) ||
                        (this.movedSet.has(n) && this.movedMap[Zp(r, i)]
                          ? Ju(this.movedSet, n)
                          : this.removes.push({
                              parentId: i,
                              id: r,
                              isShadow:
                                Vi(t.target) && Gi(t.target) ? !0 : void 0,
                            })),
                    this.mapRemoves.push(n));
                }));
              break;
            }
          }
      }),
      (this.genAdds = (t, n) => {
        if (
          !this.processedNodeManager.inOtherBuffer(t, this) &&
          !(this.addedSet.has(t) || this.movedSet.has(t))
        ) {
          if (this.mirror.hasNode(t)) {
            if (Dl(t, this.mirror)) return;
            this.movedSet.add(t);
            let r = null;
            (n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
              r &&
                r !== -1 &&
                (this.movedMap[Zp(this.mirror.getId(t), r)] = !0));
          } else (this.addedSet.add(t), this.droppedSet.delete(t));
          It(
            t,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            !1,
          ) ||
            (t.childNodes.forEach((r) => this.genAdds(r)),
            Qu(t) &&
              t.shadowRoot.childNodes.forEach((r) => {
                (this.processedNodeManager.add(r, this), this.genAdds(r, t));
              }));
        }
      }));
  }
  init(t) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager",
    ].forEach((n) => {
      this[n] = t[n];
    });
  }
  freeze() {
    ((this.frozen = !0), this.canvasManager.freeze());
  }
  unfreeze() {
    ((this.frozen = !1), this.canvasManager.unfreeze(), this.emit());
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    ((this.locked = !0), this.canvasManager.lock());
  }
  unlock() {
    ((this.locked = !1), this.canvasManager.unlock(), this.emit());
  }
  reset() {
    (this.shadowDomManager.reset(), this.canvasManager.reset());
  }
}
function Ju(e, t) {
  (e.delete(t), t.childNodes.forEach((n) => Ju(e, n)));
}
function eh(e, t, n) {
  return e.length === 0 ? !1 : o_(e, t, n);
}
function o_(e, t, n) {
  const { parentNode: r } = t;
  if (!r) return !1;
  const i = n.getId(r);
  return e.some((s) => s.id === i) ? !0 : o_(e, r, n);
}
function th(e, t) {
  return e.size === 0 ? !1 : a_(e, t);
}
function a_(e, t) {
  const { parentNode: n } = t;
  return n ? (e.has(n) ? !0 : a_(e, n)) : !1;
}
let Yi;
function LI(e) {
  Yi = e;
}
function FI() {
  Yi = void 0;
}
const B = (e) =>
  Yi
    ? (...n) => {
        try {
          return e(...n);
        } catch (r) {
          if (Yi && Yi(r) === !0) return () => {};
          throw r;
        }
      }
    : e;
function Pt(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length; ) {
    const i = e[r],
      s = e[r + 1];
    if (
      ((r += 2), (i === "optionalAccess" || i === "optionalCall") && n == null)
    )
      return;
    i === "access" || i === "optionalAccess"
      ? ((t = n), (n = s(n)))
      : (i === "call" || i === "optionalCall") &&
        ((n = s((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
const Pr = [];
function xs(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function l_(e, t) {
  const n = new PI();
  (Pr.push(n), n.init(e));
  let r = window.MutationObserver || window.__rrMutationObserver;
  const i = Pt([
    window,
    "optionalAccess",
    (o) => o.Zone,
    "optionalAccess",
    (o) => o.__symbol__,
    "optionalCall",
    (o) => o("MutationObserver"),
  ]);
  i && window[i] && (r = window[i]);
  const s = new r(
    B((o) => {
      (e.onMutation && e.onMutation(o) === !1) || n.processMutations.bind(n)(o);
    }),
  );
  return (
    s.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    s
  );
}
function $I({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
  if (t.mousemove === !1) return () => {};
  const i = typeof t.mousemove == "number" ? t.mousemove : 50,
    s = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let o = [],
    a;
  const l = hs(
      B((d) => {
        const f = Date.now() - a;
        (e(
          o.map((p) => ((p.timeOffset -= f), p)),
          d,
        ),
          (o = []),
          (a = null));
      }),
      s,
    ),
    u = B(
      hs(
        B((d) => {
          const f = xs(d),
            { clientX: p, clientY: g } = Xu(d) ? d.changedTouches[0] : d;
          (a || (a = na()),
            o.push({ x: p, y: g, id: r.getId(f), timeOffset: na() - a }),
            l(
              typeof DragEvent < "u" && d instanceof DragEvent
                ? F.Drag
                : d instanceof MouseEvent
                  ? F.MouseMove
                  : F.TouchMove,
            ));
        }),
        i,
        { trailing: !1 },
      ),
    ),
    c = [je("mousemove", u, n), je("touchmove", u, n), je("drag", u, n)];
  return B(() => {
    c.forEach((d) => d());
  });
}
function zI({
  mouseInteractionCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: s,
  sampling: o,
}) {
  if (o.mouseInteraction === !1) return () => {};
  const a =
      o.mouseInteraction === !0 || o.mouseInteraction === void 0
        ? {}
        : o.mouseInteraction,
    l = [];
  let u = null;
  const c = (d) => (f) => {
    const p = xs(f);
    if (It(p, r, i, s, !0)) return;
    let g = null,
      _ = d;
    if ("pointerType" in f) {
      switch (f.pointerType) {
        case "mouse":
          g = Ht.Mouse;
          break;
        case "touch":
          g = Ht.Touch;
          break;
        case "pen":
          g = Ht.Pen;
          break;
      }
      g === Ht.Touch
        ? ze[d] === ze.MouseDown
          ? (_ = "TouchStart")
          : ze[d] === ze.MouseUp && (_ = "TouchEnd")
        : Ht.Pen;
    } else Xu(f) && (g = Ht.Touch);
    g !== null
      ? ((u = g),
        ((_.startsWith("Touch") && g === Ht.Touch) ||
          (_.startsWith("Mouse") && g === Ht.Mouse)) &&
          (g = null))
      : ze[d] === ze.Click && ((g = u), (u = null));
    const E = Xu(f) ? f.changedTouches[0] : f;
    if (!E) return;
    const h = n.getId(p),
      { clientX: m, clientY: y } = E;
    B(e)({
      type: ze[_],
      id: h,
      x: m,
      y,
      ...(g !== null && { pointerType: g }),
    });
  };
  return (
    Object.keys(ze)
      .filter(
        (d) =>
          Number.isNaN(Number(d)) && !d.endsWith("_Departed") && a[d] !== !1,
      )
      .forEach((d) => {
        let f = si(d);
        const p = c(d);
        if (window.PointerEvent)
          switch (ze[d]) {
            case ze.MouseDown:
            case ze.MouseUp:
              f = f.replace("mouse", "pointer");
              break;
            case ze.TouchStart:
            case ze.TouchEnd:
              return;
          }
        l.push(je(f, p, t));
      }),
    B(() => {
      l.forEach((d) => d());
    })
  );
}
function u_({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: s,
  sampling: o,
}) {
  const a = B(
    hs(
      B((l) => {
        const u = xs(l);
        if (!u || It(u, r, i, s, !0)) return;
        const c = n.getId(u);
        if (u === t && t.defaultView) {
          const d = Qy(t.defaultView);
          e({ id: c, x: d.left, y: d.top });
        } else e({ id: c, x: u.scrollLeft, y: u.scrollTop });
      }),
      o.scroll || 100,
    ),
  );
  return je("scroll", a, t);
}
function BI({ viewportResizeCb: e }, { win: t }) {
  let n = -1,
    r = -1;
  const i = B(
    hs(
      B(() => {
        const s = Jy(),
          o = Zy();
        (n !== s || r !== o) &&
          (e({ width: Number(o), height: Number(s) }), (n = s), (r = o));
      }),
      200,
    ),
  );
  return je("resize", i, t);
}
const UI = ["INPUT", "TEXTAREA", "SELECT"],
  nh = new WeakMap();
function jI({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: s,
  ignoreClass: o,
  ignoreSelector: a,
  maskInputOptions: l,
  maskInputFn: u,
  sampling: c,
  userTriggeredOnInput: d,
  maskTextClass: f,
  unmaskTextClass: p,
  maskTextSelector: g,
  unmaskTextSelector: _,
}) {
  function E(T) {
    let C = xs(T);
    const N = T.isTrusted,
      R = C && Ku(C.tagName);
    if (
      (R === "OPTION" && (C = C.parentElement),
      !C || !R || UI.indexOf(R) < 0 || It(C, r, i, s, !0))
    )
      return;
    const $ = C;
    if ($.classList.contains(o) || (a && $.matches(a))) return;
    const ne = wd(C);
    let le = ea($, R, ne),
      _e = !1;
    const $e = ba({ maskInputOptions: l, tagName: R, type: ne }),
      V = oi(C, f, g, p, _, $e);
    ((ne === "radio" || ne === "checkbox") && (_e = C.checked),
      (le = fs({ isMasked: V, element: C, value: le, maskInputFn: u })),
      h(
        C,
        d
          ? { text: le, isChecked: _e, userTriggered: N }
          : { text: le, isChecked: _e },
      ));
    const Ae = C.name;
    ne === "radio" &&
      Ae &&
      _e &&
      t.querySelectorAll(`input[type="radio"][name="${Ae}"]`).forEach((x) => {
        if (x !== C) {
          const O = fs({
            isMasked: V,
            element: x,
            value: ea(x, R, ne),
            maskInputFn: u,
          });
          h(
            x,
            d
              ? { text: O, isChecked: !_e, userTriggered: !1 }
              : { text: O, isChecked: !_e },
          );
        }
      });
  }
  function h(T, C) {
    const N = nh.get(T);
    if (!N || N.text !== C.text || N.isChecked !== C.isChecked) {
      nh.set(T, C);
      const R = n.getId(T);
      B(e)({ ...C, id: R });
    }
  }
  const y = (c.input === "last" ? ["change"] : ["input", "change"]).map((T) =>
      je(T, B(E), t),
    ),
    v = t.defaultView;
  if (!v)
    return () => {
      y.forEach((T) => T());
    };
  const w = v.Object.getOwnPropertyDescriptor(
      v.HTMLInputElement.prototype,
      "value",
    ),
    k = [
      [v.HTMLInputElement.prototype, "value"],
      [v.HTMLInputElement.prototype, "checked"],
      [v.HTMLSelectElement.prototype, "value"],
      [v.HTMLTextAreaElement.prototype, "value"],
      [v.HTMLSelectElement.prototype, "selectedIndex"],
      [v.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    w &&
      w.set &&
      y.push(
        ...k.map((T) =>
          Xy(
            T[0],
            T[1],
            {
              set() {
                B(E)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            v,
          ),
        ),
      ),
    B(() => {
      y.forEach((T) => T());
    })
  );
}
function ra(e) {
  const t = [];
  function n(r, i) {
    if (
      (so("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule) ||
      (so("CSSMediaRule") && r.parentRule instanceof CSSMediaRule) ||
      (so("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule) ||
      (so("CSSConditionRule") && r.parentRule instanceof CSSConditionRule)
    ) {
      const o = Array.from(r.parentRule.cssRules).indexOf(r);
      i.unshift(o);
    } else if (r.parentStyleSheet) {
      const o = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
      i.unshift(o);
    }
    return i;
  }
  return n(e, t);
}
function dn(e, t, n) {
  let r, i;
  return e
    ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)),
      { styleId: i, id: r })
    : {};
}
function HI(
  { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
  { win: r },
) {
  if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
  const i = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
    apply: B((c, d, f) => {
      const [p, g] = f,
        { id: _, styleId: E } = dn(d, t, n.styleMirror);
      return (
        ((_ && _ !== -1) || (E && E !== -1)) &&
          e({ id: _, styleId: E, adds: [{ rule: p, index: g }] }),
        c.apply(d, f)
      );
    }),
  });
  const s = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
    apply: B((c, d, f) => {
      const [p] = f,
        { id: g, styleId: _ } = dn(d, t, n.styleMirror);
      return (
        ((g && g !== -1) || (_ && _ !== -1)) &&
          e({ id: g, styleId: _, removes: [{ index: p }] }),
        c.apply(d, f)
      );
    }),
  });
  let o;
  r.CSSStyleSheet.prototype.replace &&
    ((o = r.CSSStyleSheet.prototype.replace),
    (r.CSSStyleSheet.prototype.replace = new Proxy(o, {
      apply: B((c, d, f) => {
        const [p] = f,
          { id: g, styleId: _ } = dn(d, t, n.styleMirror);
        return (
          ((g && g !== -1) || (_ && _ !== -1)) &&
            e({ id: g, styleId: _, replace: p }),
          c.apply(d, f)
        );
      }),
    })));
  let a;
  r.CSSStyleSheet.prototype.replaceSync &&
    ((a = r.CSSStyleSheet.prototype.replaceSync),
    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
      apply: B((c, d, f) => {
        const [p] = f,
          { id: g, styleId: _ } = dn(d, t, n.styleMirror);
        return (
          ((g && g !== -1) || (_ && _ !== -1)) &&
            e({ id: g, styleId: _, replaceSync: p }),
          c.apply(d, f)
        );
      }),
    })));
  const l = {};
  oo("CSSGroupingRule")
    ? (l.CSSGroupingRule = r.CSSGroupingRule)
    : (oo("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
      oo("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule),
      oo("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
  const u = {};
  return (
    Object.entries(l).forEach(([c, d]) => {
      ((u[c] = {
        insertRule: d.prototype.insertRule,
        deleteRule: d.prototype.deleteRule,
      }),
        (d.prototype.insertRule = new Proxy(u[c].insertRule, {
          apply: B((f, p, g) => {
            const [_, E] = g,
              { id: h, styleId: m } = dn(p.parentStyleSheet, t, n.styleMirror);
            return (
              ((h && h !== -1) || (m && m !== -1)) &&
                e({
                  id: h,
                  styleId: m,
                  adds: [{ rule: _, index: [...ra(p), E || 0] }],
                }),
              f.apply(p, g)
            );
          }),
        })),
        (d.prototype.deleteRule = new Proxy(u[c].deleteRule, {
          apply: B((f, p, g) => {
            const [_] = g,
              { id: E, styleId: h } = dn(p.parentStyleSheet, t, n.styleMirror);
            return (
              ((E && E !== -1) || (h && h !== -1)) &&
                e({ id: E, styleId: h, removes: [{ index: [...ra(p), _] }] }),
              f.apply(p, g)
            );
          }),
        })));
    }),
    B(() => {
      ((r.CSSStyleSheet.prototype.insertRule = i),
        (r.CSSStyleSheet.prototype.deleteRule = s),
        o && (r.CSSStyleSheet.prototype.replace = o),
        a && (r.CSSStyleSheet.prototype.replaceSync = a),
        Object.entries(l).forEach(([c, d]) => {
          ((d.prototype.insertRule = u[c].insertRule),
            (d.prototype.deleteRule = u[c].deleteRule));
        }));
    })
  );
}
function c_({ mirror: e, stylesheetManager: t }, n) {
  let r = null;
  n.nodeName === "#document" ? (r = e.getId(n)) : (r = e.getId(n.host));
  const i =
      n.nodeName === "#document"
        ? Pt([
            n,
            "access",
            (o) => o.defaultView,
            "optionalAccess",
            (o) => o.Document,
          ])
        : Pt([
            n,
            "access",
            (o) => o.ownerDocument,
            "optionalAccess",
            (o) => o.defaultView,
            "optionalAccess",
            (o) => o.ShadowRoot,
          ]),
    s = Pt([i, "optionalAccess", (o) => o.prototype])
      ? Object.getOwnPropertyDescriptor(
          Pt([i, "optionalAccess", (o) => o.prototype]),
          "adoptedStyleSheets",
        )
      : void 0;
  return r === null || r === -1 || !i || !s
    ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: s.configurable,
        enumerable: s.enumerable,
        get() {
          return Pt([
            s,
            "access",
            (o) => o.get,
            "optionalAccess",
            (o) => o.call,
            "call",
            (o) => o(this),
          ]);
        },
        set(o) {
          const a = Pt([
            s,
            "access",
            (l) => l.set,
            "optionalAccess",
            (l) => l.call,
            "call",
            (l) => l(this, o),
          ]);
          if (r !== null && r !== -1)
            try {
              t.adoptStyleSheets(o, r);
            } catch {}
          return a;
        },
      }),
      B(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: s.configurable,
          enumerable: s.enumerable,
          get: s.get,
          set: s.set,
        });
      }));
}
function WI(
  {
    styleDeclarationCb: e,
    mirror: t,
    ignoreCSSAttributes: n,
    stylesheetManager: r,
  },
  { win: i },
) {
  const s = i.CSSStyleDeclaration.prototype.setProperty;
  i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
    apply: B((a, l, u) => {
      const [c, d, f] = u;
      if (n.has(c)) return s.apply(l, [c, d, f]);
      const { id: p, styleId: g } = dn(
        Pt([
          l,
          "access",
          (_) => _.parentRule,
          "optionalAccess",
          (_) => _.parentStyleSheet,
        ]),
        t,
        r.styleMirror,
      );
      return (
        ((p && p !== -1) || (g && g !== -1)) &&
          e({
            id: p,
            styleId: g,
            set: { property: c, value: d, priority: f },
            index: ra(l.parentRule),
          }),
        a.apply(l, u)
      );
    }),
  });
  const o = i.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
      apply: B((a, l, u) => {
        const [c] = u;
        if (n.has(c)) return o.apply(l, [c]);
        const { id: d, styleId: f } = dn(
          Pt([
            l,
            "access",
            (p) => p.parentRule,
            "optionalAccess",
            (p) => p.parentStyleSheet,
          ]),
          t,
          r.styleMirror,
        );
        return (
          ((d && d !== -1) || (f && f !== -1)) &&
            e({
              id: d,
              styleId: f,
              remove: { property: c },
              index: ra(l.parentRule),
            }),
          a.apply(l, u)
        );
      }),
    })),
    B(() => {
      ((i.CSSStyleDeclaration.prototype.setProperty = s),
        (i.CSSStyleDeclaration.prototype.removeProperty = o));
    })
  );
}
function VI({
  mediaInteractionCb: e,
  blockClass: t,
  blockSelector: n,
  unblockSelector: r,
  mirror: i,
  sampling: s,
  doc: o,
}) {
  const a = B((u) =>
      hs(
        B((c) => {
          const d = xs(c);
          if (!d || It(d, t, n, r, !0)) return;
          const { currentTime: f, volume: p, muted: g, playbackRate: _ } = d;
          e({
            type: u,
            id: i.getId(d),
            currentTime: f,
            volume: p,
            muted: g,
            playbackRate: _,
          });
        }),
        s.media || 500,
      ),
    ),
    l = [
      je("play", a(0), o),
      je("pause", a(1), o),
      je("seeked", a(2), o),
      je("volumechange", a(3), o),
      je("ratechange", a(4), o),
    ];
  return B(() => {
    l.forEach((u) => u());
  });
}
function GI({ fontCb: e, doc: t }) {
  const n = t.defaultView;
  if (!n) return () => {};
  const r = [],
    i = new WeakMap(),
    s = n.FontFace;
  n.FontFace = function (l, u, c) {
    const d = new s(l, u, c);
    return (
      i.set(d, {
        family: l,
        buffer: typeof u != "string",
        descriptors: c,
        fontSource:
          typeof u == "string"
            ? u
            : JSON.stringify(Array.from(new Uint8Array(u))),
      }),
      d
    );
  };
  const o = Id(t.fonts, "add", function (a) {
    return function (l) {
      return (
        Pa(
          B(() => {
            const u = i.get(l);
            u && (e(u), i.delete(l));
          }),
          0,
        ),
        a.apply(this, [l])
      );
    };
  });
  return (
    r.push(() => {
      n.FontFace = s;
    }),
    r.push(o),
    B(() => {
      r.forEach((a) => a());
    })
  );
}
function YI(e) {
  const {
    doc: t,
    mirror: n,
    blockClass: r,
    blockSelector: i,
    unblockSelector: s,
    selectionCb: o,
  } = e;
  let a = !0;
  const l = B(() => {
    const u = t.getSelection();
    if (!u || (a && Pt([u, "optionalAccess", (f) => f.isCollapsed]))) return;
    a = u.isCollapsed || !1;
    const c = [],
      d = u.rangeCount || 0;
    for (let f = 0; f < d; f++) {
      const p = u.getRangeAt(f),
        {
          startContainer: g,
          startOffset: _,
          endContainer: E,
          endOffset: h,
        } = p;
      It(g, r, i, s, !0) ||
        It(E, r, i, s, !0) ||
        c.push({
          start: n.getId(g),
          startOffset: _,
          end: n.getId(E),
          endOffset: h,
        });
    }
    o({ ranges: c });
  });
  return (l(), je("selectionchange", l));
}
function qI({ doc: e, customElementCb: t }) {
  const n = e.defaultView;
  return !n || !n.customElements
    ? () => {}
    : Id(n.customElements, "define", function (i) {
        return function (s, o, a) {
          try {
            t({ define: { name: s } });
          } catch {}
          return i.apply(this, [s, o, a]);
        };
      });
}
function KI(e, t = {}) {
  const n = e.doc.defaultView;
  if (!n) return () => {};
  const r = l_(e, e.doc),
    i = $I(e),
    s = zI(e),
    o = u_(e),
    a = BI(e, { win: n }),
    l = jI(e),
    u = VI(e),
    c = HI(e, { win: n }),
    d = c_(e, e.doc),
    f = WI(e, { win: n }),
    p = e.collectFonts ? GI(e) : () => {},
    g = YI(e),
    _ = qI(e),
    E = [];
  for (const h of e.plugins) E.push(h.observer(h.callback, n, h.options));
  return B(() => {
    (Pr.forEach((h) => h.reset()),
      r.disconnect(),
      i(),
      s(),
      o(),
      a(),
      l(),
      u(),
      c(),
      d(),
      f(),
      p(),
      g(),
      _(),
      E.forEach((h) => h()));
  });
}
function so(e) {
  return typeof window[e] < "u";
}
function oo(e) {
  return !!(
    typeof window[e] < "u" &&
    window[e].prototype &&
    "insertRule" in window[e].prototype &&
    "deleteRule" in window[e].prototype
  );
}
class Zu {
  constructor(t) {
    ((this.generateIdFn = t),
      (this.iframeIdToRemoteIdMap = new WeakMap()),
      (this.iframeRemoteIdToIdMap = new WeakMap()));
  }
  getId(t, n, r, i) {
    const s = r || this.getIdToRemoteIdMap(t),
      o = i || this.getRemoteIdToIdMap(t);
    let a = s.get(n);
    return (a || ((a = this.generateIdFn()), s.set(n, a), o.set(a, n)), a);
  }
  getIds(t, n) {
    const r = this.getIdToRemoteIdMap(t),
      i = this.getRemoteIdToIdMap(t);
    return n.map((s) => this.getId(t, s, r, i));
  }
  getRemoteId(t, n, r) {
    const i = r || this.getRemoteIdToIdMap(t);
    if (typeof n != "number") return n;
    const s = i.get(n);
    return s || -1;
  }
  getRemoteIds(t, n) {
    const r = this.getRemoteIdToIdMap(t);
    return n.map((i) => this.getRemoteId(t, i, r));
  }
  reset(t) {
    if (!t) {
      ((this.iframeIdToRemoteIdMap = new WeakMap()),
        (this.iframeRemoteIdToIdMap = new WeakMap()));
      return;
    }
    (this.iframeIdToRemoteIdMap.delete(t),
      this.iframeRemoteIdToIdMap.delete(t));
  }
  getIdToRemoteIdMap(t) {
    let n = this.iframeIdToRemoteIdMap.get(t);
    return (n || ((n = new Map()), this.iframeIdToRemoteIdMap.set(t, n)), n);
  }
  getRemoteIdToIdMap(t) {
    let n = this.iframeRemoteIdToIdMap.get(t);
    return (n || ((n = new Map()), this.iframeRemoteIdToIdMap.set(t, n)), n);
  }
}
function rh(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length; ) {
    const i = e[r],
      s = e[r + 1];
    if (
      ((r += 2), (i === "optionalAccess" || i === "optionalCall") && n == null)
    )
      return;
    i === "access" || i === "optionalAccess"
      ? ((t = n), (n = s(n)))
      : (i === "call" || i === "optionalCall") &&
        ((n = s((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
class XI {
  constructor() {
    ((this.crossOriginIframeMirror = new Zu(kd)),
      (this.crossOriginIframeRootIdMap = new WeakMap()));
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class QI {
  constructor(t) {
    ((this.iframes = new WeakMap()),
      (this.crossOriginIframeMap = new WeakMap()),
      (this.crossOriginIframeMirror = new Zu(kd)),
      (this.crossOriginIframeRootIdMap = new WeakMap()),
      (this.mutationCb = t.mutationCb),
      (this.wrappedEmit = t.wrappedEmit),
      (this.stylesheetManager = t.stylesheetManager),
      (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
      (this.crossOriginIframeStyleMirror = new Zu(
        this.stylesheetManager.styleMirror.generateId.bind(
          this.stylesheetManager.styleMirror,
        ),
      )),
      (this.mirror = t.mirror),
      this.recordCrossOriginIframes &&
        window.addEventListener("message", this.handleMessage.bind(this)));
  }
  addIframe(t) {
    (this.iframes.set(t, !0),
      t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t));
  }
  addLoadListener(t) {
    this.loadListener = t;
  }
  attachIframe(t, n) {
    (this.mutationCb({
      adds: [{ parentId: this.mirror.getId(t), nextId: null, node: n }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0,
    }),
      rh([this, "access", (r) => r.loadListener, "optionalCall", (r) => r(t)]),
      t.contentDocument &&
        t.contentDocument.adoptedStyleSheets &&
        t.contentDocument.adoptedStyleSheets.length > 0 &&
        this.stylesheetManager.adoptStyleSheets(
          t.contentDocument.adoptedStyleSheets,
          this.mirror.getId(t.contentDocument),
        ));
  }
  handleMessage(t) {
    const n = t;
    if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
      return;
    const i = this.crossOriginIframeMap.get(t.source);
    if (!i) return;
    const s = this.transformCrossOriginEvent(i, n.data.event);
    s && this.wrappedEmit(s, n.data.isCheckout);
  }
  transformCrossOriginEvent(t, n) {
    switch (n.type) {
      case L.FullSnapshot: {
        (this.crossOriginIframeMirror.reset(t),
          this.crossOriginIframeStyleMirror.reset(t),
          this.replaceIdOnNode(n.data.node, t));
        const r = n.data.node.id;
        return (
          this.crossOriginIframeRootIdMap.set(t, r),
          this.patchRootIdOnNode(n.data.node, r),
          {
            timestamp: n.timestamp,
            type: L.IncrementalSnapshot,
            data: {
              source: F.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(t),
                  nextId: null,
                  node: n.data.node,
                },
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            },
          }
        );
      }
      case L.Meta:
      case L.Load:
      case L.DomContentLoaded:
        return !1;
      case L.Plugin:
        return n;
      case L.Custom:
        return (
          this.replaceIds(n.data.payload, t, [
            "id",
            "parentId",
            "previousId",
            "nextId",
          ]),
          n
        );
      case L.IncrementalSnapshot:
        switch (n.data.source) {
          case F.Mutation:
            return (
              n.data.adds.forEach((r) => {
                (this.replaceIds(r, t, ["parentId", "nextId", "previousId"]),
                  this.replaceIdOnNode(r.node, t));
                const i = this.crossOriginIframeRootIdMap.get(t);
                i && this.patchRootIdOnNode(r.node, i);
              }),
              n.data.removes.forEach((r) => {
                this.replaceIds(r, t, ["parentId", "id"]);
              }),
              n.data.attributes.forEach((r) => {
                this.replaceIds(r, t, ["id"]);
              }),
              n.data.texts.forEach((r) => {
                this.replaceIds(r, t, ["id"]);
              }),
              n
            );
          case F.Drag:
          case F.TouchMove:
          case F.MouseMove:
            return (
              n.data.positions.forEach((r) => {
                this.replaceIds(r, t, ["id"]);
              }),
              n
            );
          case F.ViewportResize:
            return !1;
          case F.MediaInteraction:
          case F.MouseInteraction:
          case F.Scroll:
          case F.CanvasMutation:
          case F.Input:
            return (this.replaceIds(n.data, t, ["id"]), n);
          case F.StyleSheetRule:
          case F.StyleDeclaration:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleId"]),
              n
            );
          case F.Font:
            return n;
          case F.Selection:
            return (
              n.data.ranges.forEach((r) => {
                this.replaceIds(r, t, ["start", "end"]);
              }),
              n
            );
          case F.AdoptedStyleSheet:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleIds"]),
              rh([
                n,
                "access",
                (r) => r.data,
                "access",
                (r) => r.styles,
                "optionalAccess",
                (r) => r.forEach,
                "call",
                (r) =>
                  r((i) => {
                    this.replaceStyleIds(i, t, ["styleId"]);
                  }),
              ]),
              n
            );
        }
    }
    return !1;
  }
  replace(t, n, r, i) {
    for (const s of i)
      (!Array.isArray(n[s]) && typeof n[s] != "number") ||
        (Array.isArray(n[s])
          ? (n[s] = t.getIds(r, n[s]))
          : (n[s] = t.getId(r, n[s])));
    return n;
  }
  replaceIds(t, n, r) {
    return this.replace(this.crossOriginIframeMirror, t, n, r);
  }
  replaceStyleIds(t, n, r) {
    return this.replace(this.crossOriginIframeStyleMirror, t, n, r);
  }
  replaceIdOnNode(t, n) {
    (this.replaceIds(t, n, ["id", "rootId"]),
      "childNodes" in t &&
        t.childNodes.forEach((r) => {
          this.replaceIdOnNode(r, n);
        }));
  }
  patchRootIdOnNode(t, n) {
    (t.type !== Ee.Document && !t.rootId && (t.rootId = n),
      "childNodes" in t &&
        t.childNodes.forEach((r) => {
          this.patchRootIdOnNode(r, n);
        }));
  }
}
class JI {
  init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class ZI {
  constructor(t) {
    ((this.shadowDoms = new WeakSet()),
      (this.restoreHandlers = []),
      (this.mutationCb = t.mutationCb),
      (this.scrollCb = t.scrollCb),
      (this.bypassOptions = t.bypassOptions),
      (this.mirror = t.mirror),
      this.init());
  }
  init() {
    (this.reset(), this.patchAttachShadow(Element, document));
  }
  addShadowRoot(t, n) {
    if (!Gi(t) || this.shadowDoms.has(t)) return;
    this.shadowDoms.add(t);
    const r = l_(
      {
        ...this.bypassOptions,
        doc: n,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this,
      },
      t,
    );
    (this.restoreHandlers.push(() => r.disconnect()),
      this.restoreHandlers.push(
        u_({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: t,
          mirror: this.mirror,
        }),
      ),
      Pa(() => {
        (t.adoptedStyleSheets &&
          t.adoptedStyleSheets.length > 0 &&
          this.bypassOptions.stylesheetManager.adoptStyleSheets(
            t.adoptedStyleSheets,
            this.mirror.getId(t.host),
          ),
          this.restoreHandlers.push(
            c_(
              {
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager,
              },
              t,
            ),
          ));
      }, 0));
  }
  observeAttachShadow(t) {
    !t.contentWindow ||
      !t.contentDocument ||
      this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
  }
  patchAttachShadow(t, n) {
    const r = this;
    this.restoreHandlers.push(
      Id(t.prototype, "attachShadow", function (i) {
        return function (s) {
          const o = i.call(this, s);
          return (
            this.shadowRoot && s_(this) && r.addShadowRoot(this.shadowRoot, n),
            o
          );
        };
      }),
    );
  }
  reset() {
    (this.restoreHandlers.forEach((t) => {
      try {
        t();
      } catch {}
    }),
      (this.restoreHandlers = []),
      (this.shadowDoms = new WeakSet()));
  }
}
class ih {
  reset() {}
  freeze() {}
  unfreeze() {}
  lock() {}
  unlock() {}
  snapshot() {}
}
class eC {
  constructor(t) {
    ((this.trackedLinkElements = new WeakSet()),
      (this.styleMirror = new RI()),
      (this.mutationCb = t.mutationCb),
      (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb));
  }
  attachLinkElement(t, n) {
    ("_cssText" in n.attributes &&
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [{ id: n.id, attributes: n.attributes }],
      }),
      this.trackLinkElement(t));
  }
  trackLinkElement(t) {
    this.trackedLinkElements.has(t) ||
      (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
  }
  adoptStyleSheets(t, n) {
    if (t.length === 0) return;
    const r = { id: n, styleIds: [] },
      i = [];
    for (const s of t) {
      let o;
      (this.styleMirror.has(s)
        ? (o = this.styleMirror.getId(s))
        : ((o = this.styleMirror.add(s)),
          i.push({
            styleId: o,
            rules: Array.from(s.rules || CSSRule, (a, l) => ({
              rule: Gy(a),
              index: l,
            })),
          })),
        r.styleIds.push(o));
    }
    (i.length > 0 && (r.styles = i), this.adoptedStyleSheetCb(r));
  }
  reset() {
    (this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet()));
  }
  trackStylesheetInLinkElement(t) {}
}
class tC {
  constructor() {
    ((this.nodeMap = new WeakMap()),
      (this.loop = !0),
      this.periodicallyClear());
  }
  periodicallyClear() {
    OI(() => {
      (this.clear(), this.loop && this.periodicallyClear());
    });
  }
  inOtherBuffer(t, n) {
    const r = this.nodeMap.get(t);
    return r && Array.from(r).some((i) => i !== n);
  }
  add(t, n) {
    this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(n));
  }
  clear() {
    this.nodeMap = new WeakMap();
  }
  destroy() {
    this.loop = !1;
  }
}
let pe, ia;
const Et = nI();
function Rn(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: r,
    blockClass: i = "rr-block",
    blockSelector: s = null,
    unblockSelector: o = null,
    ignoreClass: a = "rr-ignore",
    ignoreSelector: l = null,
    maskAllText: u = !1,
    maskTextClass: c = "rr-mask",
    unmaskTextClass: d = null,
    maskTextSelector: f = null,
    unmaskTextSelector: p = null,
    inlineStylesheet: g = !0,
    maskAllInputs: _,
    maskInputOptions: E,
    slimDOMOptions: h,
    maskAttributeFn: m,
    maskInputFn: y,
    maskTextFn: v,
    maxCanvasSize: w = null,
    packFn: k,
    sampling: T = {},
    dataURLOptions: C = {},
    mousemoveWait: N,
    recordCanvas: R = !1,
    recordCrossOriginIframes: $ = !1,
    recordAfter: ne = e.recordAfter === "DOMContentLoaded"
      ? e.recordAfter
      : "load",
    userTriggeredOnInput: le = !1,
    collectFonts: _e = !1,
    inlineImages: $e = !1,
    plugins: V,
    keepIframeSrcFn: Ae = () => !1,
    ignoreCSSAttributes: x = new Set([]),
    errorHandler: O,
    onMutation: A,
    getCanvasManager: re,
  } = e;
  LI(O);
  const ie = $ ? window.parent === window : !0;
  let et = !1;
  if (!ie)
    try {
      window.parent.document && (et = !1);
    } catch {
      et = !0;
    }
  if (ie && !t) throw new Error("emit function is required");
  (N !== void 0 && T.mousemove === void 0 && (T.mousemove = N), Et.reset());
  const Ye =
      _ === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : E !== void 0
          ? E
          : {},
    jt =
      h === !0 || h === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: h === "all",
            headMetaDescKeywords: h === "all",
          }
        : h || {};
  xI();
  let _t,
    on = 0;
  const zd = (G) => {
    for (const vt of V || []) vt.eventProcessor && (G = vt.eventProcessor(G));
    return (k && !et && (G = k(G)), G);
  };
  pe = (G, vt) => {
    const W = G;
    if (
      ((W.timestamp = na()),
      Il([
        Pr,
        "access",
        (ue) => ue[0],
        "optionalAccess",
        (ue) => ue.isFrozen,
        "call",
        (ue) => ue(),
      ]) &&
        W.type !== L.FullSnapshot &&
        !(W.type === L.IncrementalSnapshot && W.data.source === F.Mutation) &&
        Pr.forEach((ue) => ue.unfreeze()),
      ie)
    )
      Il([t, "optionalCall", (ue) => ue(zd(W), vt)]);
    else if (et) {
      const ue = {
        type: "rrweb",
        event: zd(W),
        origin: window.location.origin,
        isCheckout: vt,
      };
      window.parent.postMessage(ue, "*");
    }
    if (W.type === L.FullSnapshot) ((_t = W), (on = 0));
    else if (W.type === L.IncrementalSnapshot) {
      if (W.data.source === F.Mutation && W.data.isAttachIframe) return;
      on++;
      const ue = r && on >= r,
        Y = n && _t && W.timestamp - _t.timestamp > n;
      (ue || Y) && Qa(!0);
    }
  };
  const Ms = (G) => {
      pe({ type: L.IncrementalSnapshot, data: { source: F.Mutation, ...G } });
    },
    Bd = (G) =>
      pe({ type: L.IncrementalSnapshot, data: { source: F.Scroll, ...G } }),
    B_ = (G) =>
      pe({
        type: L.IncrementalSnapshot,
        data: { source: F.CanvasMutation, ...G },
      }),
    U_ = (G) =>
      pe({
        type: L.IncrementalSnapshot,
        data: { source: F.AdoptedStyleSheet, ...G },
      }),
    zn = new eC({ mutationCb: Ms, adoptedStyleSheetCb: U_ }),
    Bn =
      typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__
        ? new XI()
        : new QI({
            mirror: Et,
            mutationCb: Ms,
            stylesheetManager: zn,
            recordCrossOriginIframes: $,
            wrappedEmit: pe,
          });
  for (const G of V || [])
    G.getMirror &&
      G.getMirror({
        nodeMirror: Et,
        crossOriginIframeMirror: Bn.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Bn.crossOriginIframeStyleMirror,
      });
  const Xa = new tC(),
    Ud = rC(re, {
      mirror: Et,
      win: window,
      mutationCb: (G) =>
        pe({
          type: L.IncrementalSnapshot,
          data: { source: F.CanvasMutation, ...G },
        }),
      recordCanvas: R,
      blockClass: i,
      blockSelector: s,
      unblockSelector: o,
      maxCanvasSize: w,
      sampling: T.canvas,
      dataURLOptions: C,
      errorHandler: O,
    }),
    Os =
      typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new JI()
        : new ZI({
            mutationCb: Ms,
            scrollCb: Bd,
            bypassOptions: {
              onMutation: A,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              maskAllText: u,
              maskTextClass: c,
              unmaskTextClass: d,
              maskTextSelector: f,
              unmaskTextSelector: p,
              inlineStylesheet: g,
              maskInputOptions: Ye,
              dataURLOptions: C,
              maskAttributeFn: m,
              maskTextFn: v,
              maskInputFn: y,
              recordCanvas: R,
              inlineImages: $e,
              sampling: T,
              slimDOMOptions: jt,
              iframeManager: Bn,
              stylesheetManager: zn,
              canvasManager: Ud,
              keepIframeSrcFn: Ae,
              processedNodeManager: Xa,
            },
            mirror: Et,
          }),
    Qa = (G = !1) => {
      (pe(
        {
          type: L.Meta,
          data: { href: window.location.href, width: Zy(), height: Jy() },
        },
        G,
      ),
        zn.reset(),
        Os.init(),
        Pr.forEach((W) => W.lock()));
      const vt = II(document, {
        mirror: Et,
        blockClass: i,
        blockSelector: s,
        unblockSelector: o,
        maskAllText: u,
        maskTextClass: c,
        unmaskTextClass: d,
        maskTextSelector: f,
        unmaskTextSelector: p,
        inlineStylesheet: g,
        maskAllInputs: Ye,
        maskAttributeFn: m,
        maskInputFn: y,
        maskTextFn: v,
        slimDOM: jt,
        dataURLOptions: C,
        recordCanvas: R,
        inlineImages: $e,
        onSerialize: (W) => {
          (n_(W, Et) && Bn.addIframe(W),
            r_(W, Et) && zn.trackLinkElement(W),
            Qu(W) && Os.addShadowRoot(W.shadowRoot, document));
        },
        onIframeLoad: (W, ue) => {
          (Bn.attachIframe(W, ue), Os.observeAttachShadow(W));
        },
        onStylesheetLoad: (W, ue) => {
          zn.attachLinkElement(W, ue);
        },
        keepIframeSrcFn: Ae,
      });
      if (!vt) return console.warn("Failed to snapshot the document");
      (pe({
        type: L.FullSnapshot,
        data: { node: vt, initialOffset: Qy(window) },
      }),
        Pr.forEach((W) => W.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          zn.adoptStyleSheets(document.adoptedStyleSheets, Et.getId(document)));
    };
  ia = Qa;
  try {
    const G = [],
      vt = (ue) =>
        B(KI)(
          {
            onMutation: A,
            mutationCb: Ms,
            mousemoveCb: (Y, Un) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: Un, positions: Y },
              }),
            mouseInteractionCb: (Y) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.MouseInteraction, ...Y },
              }),
            scrollCb: Bd,
            viewportResizeCb: (Y) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.ViewportResize, ...Y },
              }),
            inputCb: (Y) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.Input, ...Y },
              }),
            mediaInteractionCb: (Y) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.MediaInteraction, ...Y },
              }),
            styleSheetRuleCb: (Y) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.StyleSheetRule, ...Y },
              }),
            styleDeclarationCb: (Y) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.StyleDeclaration, ...Y },
              }),
            canvasMutationCb: B_,
            fontCb: (Y) =>
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.Font, ...Y },
              }),
            selectionCb: (Y) => {
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.Selection, ...Y },
              });
            },
            customElementCb: (Y) => {
              pe({
                type: L.IncrementalSnapshot,
                data: { source: F.CustomElement, ...Y },
              });
            },
            blockClass: i,
            ignoreClass: a,
            ignoreSelector: l,
            maskAllText: u,
            maskTextClass: c,
            unmaskTextClass: d,
            maskTextSelector: f,
            unmaskTextSelector: p,
            maskInputOptions: Ye,
            inlineStylesheet: g,
            sampling: T,
            recordCanvas: R,
            inlineImages: $e,
            userTriggeredOnInput: le,
            collectFonts: _e,
            doc: ue,
            maskAttributeFn: m,
            maskInputFn: y,
            maskTextFn: v,
            keepIframeSrcFn: Ae,
            blockSelector: s,
            unblockSelector: o,
            slimDOMOptions: jt,
            dataURLOptions: C,
            mirror: Et,
            iframeManager: Bn,
            stylesheetManager: zn,
            shadowDomManager: Os,
            processedNodeManager: Xa,
            canvasManager: Ud,
            ignoreCSSAttributes: x,
            plugins:
              Il([
                V,
                "optionalAccess",
                (Y) => Y.filter,
                "call",
                (Y) => Y((Un) => Un.observer),
                "optionalAccess",
                (Y) => Y.map,
                "call",
                (Y) =>
                  Y((Un) => ({
                    observer: Un.observer,
                    options: Un.options,
                    callback: (j_) =>
                      pe({
                        type: L.Plugin,
                        data: { plugin: Un.name, payload: j_ },
                      }),
                  })),
              ]) || [],
          },
          {},
        );
    Bn.addLoadListener((ue) => {
      try {
        G.push(vt(ue.contentDocument));
      } catch (Y) {
        console.warn(Y);
      }
    });
    const W = () => {
      (Qa(), G.push(vt(document)));
    };
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? W()
        : (G.push(
            je("DOMContentLoaded", () => {
              (pe({ type: L.DomContentLoaded, data: {} }),
                ne === "DOMContentLoaded" && W());
            }),
          ),
          G.push(
            je(
              "load",
              () => {
                (pe({ type: L.Load, data: {} }), ne === "load" && W());
              },
              window,
            ),
          )),
      () => {
        (G.forEach((ue) => ue()), Xa.destroy(), (ia = void 0), FI());
      }
    );
  } catch (G) {
    console.warn(G);
  }
}
function nC(e) {
  if (!ia) throw new Error("please take full snapshot after start recording");
  ia(e);
}
Rn.mirror = Et;
Rn.takeFullSnapshot = nC;
function rC(e, t) {
  try {
    return e ? e(t) : new ih();
  } catch {
    return (console.warn("Unable to initialize CanvasManager"), new ih());
  }
}
const iC = 3,
  sC = 5;
function xd(e) {
  return e > 9999999999 ? e : e * 1e3;
}
function Al(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function Rs(e, t) {
  t.category !== "sentry.transaction" &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: L.Custom,
          timestamp: (t.timestamp || 0) * 1e3,
          data: { tag: "breadcrumb", payload: bt(t, 10, 1e3) },
        }),
        t.category === "console"
      ),
    ));
}
const oC = "button,a";
function d_(e) {
  return e.closest(oC) || e;
}
function f_(e) {
  const t = p_(e);
  return !t || !(t instanceof Element) ? t : d_(t);
}
function p_(e) {
  return aC(e) ? e.target : e;
}
function aC(e) {
  return typeof e == "object" && !!e && "target" in e;
}
let fn;
function lC(e) {
  return (
    fn || ((fn = []), uC()),
    fn.push(e),
    () => {
      const t = fn ? fn.indexOf(e) : -1;
      t > -1 && fn.splice(t, 1);
    }
  );
}
function uC() {
  Ce(Z, "open", function (e) {
    return function (...t) {
      if (fn)
        try {
          fn.forEach((n) => n());
        } catch {}
      return e.apply(Z, t);
    };
  });
}
function cC(e, t, n) {
  e.handleClick(t, n);
}
class dC {
  constructor(t, n, r = Rs) {
    ((this._lastMutation = 0),
      (this._lastScroll = 0),
      (this._clicks = []),
      (this._timeout = n.timeout / 1e3),
      (this._threshold = n.threshold / 1e3),
      (this._scollTimeout = n.scrollTimeout / 1e3),
      (this._replay = t),
      (this._ignoreSelector = n.ignoreSelector),
      (this._addBreadcrumbEvent = r));
  }
  addListeners() {
    const t = lC(() => {
      this._lastMutation = sh();
    });
    this._teardown = () => {
      (t(),
        (this._clicks = []),
        (this._lastMutation = 0),
        (this._lastScroll = 0));
    };
  }
  removeListeners() {
    (this._teardown && this._teardown(),
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout));
  }
  handleClick(t, n) {
    if (pC(n, this._ignoreSelector) || !hC(t)) return;
    const r = {
      timestamp: Al(t.timestamp),
      clickBreadcrumb: t,
      clickCount: 0,
      node: n,
    };
    this._clicks.some(
      (i) => i.node === r.node && Math.abs(i.timestamp - r.timestamp) < 1,
    ) ||
      (this._clicks.push(r),
      this._clicks.length === 1 && this._scheduleCheckClicks());
  }
  registerMutation(t = Date.now()) {
    this._lastMutation = Al(t);
  }
  registerScroll(t = Date.now()) {
    this._lastScroll = Al(t);
  }
  registerClick(t) {
    const n = d_(t);
    this._handleMultiClick(n);
  }
  _handleMultiClick(t) {
    this._getClicks(t).forEach((n) => {
      n.clickCount++;
    });
  }
  _getClicks(t) {
    return this._clicks.filter((n) => n.node === t);
  }
  _checkClicks() {
    const t = [],
      n = sh();
    this._clicks.forEach((r) => {
      (!r.mutationAfter &&
        this._lastMutation &&
        (r.mutationAfter =
          r.timestamp <= this._lastMutation
            ? this._lastMutation - r.timestamp
            : void 0),
        !r.scrollAfter &&
          this._lastScroll &&
          (r.scrollAfter =
            r.timestamp <= this._lastScroll
              ? this._lastScroll - r.timestamp
              : void 0),
        r.timestamp + this._timeout <= n && t.push(r));
    });
    for (const r of t) {
      const i = this._clicks.indexOf(r);
      i > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(i, 1));
    }
    this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(t) {
    const n = this._replay,
      r = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
      i = t.mutationAfter && t.mutationAfter <= this._threshold,
      s = !r && !i,
      { clickCount: o, clickBreadcrumb: a } = t;
    if (s) {
      const l = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3,
        u = l < this._timeout * 1e3 ? "mutation" : "timeout",
        c = {
          type: "default",
          message: a.message,
          timestamp: a.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...a.data,
            url: Z.location.href,
            route: n.getCurrentRoute(),
            timeAfterClickMs: l,
            endReason: u,
            clickCount: o || 1,
          },
        };
      this._addBreadcrumbEvent(n, c);
      return;
    }
    if (o > 1) {
      const l = {
        type: "default",
        message: a.message,
        timestamp: a.timestamp,
        category: "ui.multiClick",
        data: {
          ...a.data,
          url: Z.location.href,
          route: n.getCurrentRoute(),
          clickCount: o,
          metric: !0,
        },
      };
      this._addBreadcrumbEvent(n, l);
    }
  }
  _scheduleCheckClicks() {
    (this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
      (this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)));
  }
}
const fC = ["A", "BUTTON", "INPUT"];
function pC(e, t) {
  return !!(
    !fC.includes(e.tagName) ||
    (e.tagName === "INPUT" &&
      !["submit", "button"].includes(e.getAttribute("type") || "")) ||
    (e.tagName === "A" &&
      (e.hasAttribute("download") ||
        (e.hasAttribute("target") && e.getAttribute("target") !== "_self"))) ||
    (t && e.matches(t))
  );
}
function hC(e) {
  return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp);
}
function sh() {
  return Date.now() / 1e3;
}
function mC(e, t) {
  try {
    if (!gC(t)) return;
    const { source: n } = t.data;
    if (
      (n === F.Mutation && e.registerMutation(t.timestamp),
      n === F.Scroll && e.registerScroll(t.timestamp),
      yC(t))
    ) {
      const { type: r, id: i } = t.data,
        s = Rn.mirror.getNode(i);
      s instanceof HTMLElement && r === ze.Click && e.registerClick(s);
    }
  } catch {}
}
function gC(e) {
  return e.type === iC;
}
function yC(e) {
  return e.data.source === F.MouseInteraction;
}
function $t(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var sa;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(sa || (sa = {}));
const _C = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
  "data-sentry-component",
]);
function vC(e) {
  const t = {};
  for (const n in e)
    if (_C.has(n)) {
      let r = n;
      ((n === "data-testid" || n === "data-test-id") && (r = "testId"),
        (t[r] = e[n]));
    }
  return t;
}
const SC = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = EC(t);
  if (!n) return;
  const r = t.name === "click",
    i = r ? t.event : void 0;
  (r &&
    e.clickDetector &&
    i &&
    i.target &&
    !i.altKey &&
    !i.metaKey &&
    !i.ctrlKey &&
    !i.shiftKey &&
    cC(e.clickDetector, n, f_(t.event)),
    Rs(e, n));
};
function h_(e, t) {
  const n = Rn.mirror.getId(e),
    r = n && Rn.mirror.getNode(n),
    i = r && Rn.mirror.getMeta(r),
    s = i && kC(i) ? i : null;
  return {
    message: t,
    data: s
      ? {
          nodeId: n,
          node: {
            id: n,
            tagName: s.tagName,
            textContent: Array.from(s.childNodes)
              .map((o) => o.type === sa.Text && o.textContent)
              .filter(Boolean)
              .map((o) => o.trim())
              .join(""),
            attributes: vC(s.attributes),
          },
        }
      : {},
  };
}
function EC(e) {
  const { target: t, message: n } = wC(e);
  return $t({ category: `ui.${e.name}`, ...h_(t, n) });
}
function wC(e) {
  const t = e.name === "click";
  let n,
    r = null;
  try {
    ((r = t ? f_(e.event) : p_(e.event)),
      (n = Dn(r, { maxStringLength: 200 }) || "<unknown>"));
  } catch {
    n = "<unknown>";
  }
  return { target: r, message: n };
}
function kC(e) {
  return e.type === sa.Element;
}
function TC(e, t) {
  if (!e.isEnabled()) return;
  e.updateUserActivity();
  const n = IC(t);
  n && Rs(e, n);
}
function IC(e) {
  const {
    metaKey: t,
    shiftKey: n,
    ctrlKey: r,
    altKey: i,
    key: s,
    target: o,
  } = e;
  if (!o || CC(o) || !s) return null;
  const a = t || r || i,
    l = s.length === 1;
  if (!a && l) return null;
  const u = Dn(o, { maxStringLength: 200 }) || "<unknown>",
    c = h_(o, u);
  return $t({
    category: "ui.keyDown",
    message: u,
    data: { ...c.data, metaKey: t, shiftKey: n, ctrlKey: r, altKey: i, key: s },
  });
}
function CC(e) {
  return (
    e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
  );
}
const oh = { resource: OC, paint: NC, navigation: MC };
function xC(e) {
  return e.map(RC).filter(Boolean);
}
function RC(e) {
  return oh[e.entryType] ? oh[e.entryType](e) : null;
}
function ai(e) {
  return ((ot || Z.performance.timeOrigin) + e) / 1e3;
}
function NC(e) {
  const { duration: t, entryType: n, name: r, startTime: i } = e,
    s = ai(i);
  return { type: n, name: r, start: s, end: s + t, data: void 0 };
}
function MC(e) {
  const {
    entryType: t,
    name: n,
    decodedBodySize: r,
    duration: i,
    domComplete: s,
    encodedBodySize: o,
    domContentLoadedEventStart: a,
    domContentLoadedEventEnd: l,
    domInteractive: u,
    loadEventStart: c,
    loadEventEnd: d,
    redirectCount: f,
    startTime: p,
    transferSize: g,
    type: _,
  } = e;
  return i === 0
    ? null
    : {
        type: `${t}.${_}`,
        start: ai(p),
        end: ai(s),
        name: n,
        data: {
          size: g,
          decodedBodySize: r,
          encodedBodySize: o,
          duration: i,
          domInteractive: u,
          domContentLoadedEventStart: a,
          domContentLoadedEventEnd: l,
          loadEventStart: c,
          loadEventEnd: d,
          domComplete: s,
          redirectCount: f,
        },
      };
}
function OC(e) {
  const {
    entryType: t,
    initiatorType: n,
    name: r,
    responseEnd: i,
    startTime: s,
    decodedBodySize: o,
    encodedBodySize: a,
    responseStatus: l,
    transferSize: u,
  } = e;
  return ["fetch", "xmlhttprequest"].includes(n)
    ? null
    : {
        type: `${t}.${n}`,
        start: ai(s),
        end: ai(i),
        name: r,
        data: {
          size: u,
          statusCode: l,
          decodedBodySize: o,
          encodedBodySize: a,
        },
      };
}
function DC(e) {
  const t = e.entries,
    n = t[t.length - 1],
    r = n ? n.element : void 0,
    i = e.value,
    s = ai(i);
  return {
    type: "largest-contentful-paint",
    name: "largest-contentful-paint",
    start: s,
    end: s,
    data: { value: i, size: i, nodeId: r ? Rn.mirror.getId(r) : void 0 },
  };
}
function AC(e) {
  function t(i) {
    e.performanceEntries.includes(i) || e.performanceEntries.push(i);
  }
  function n({ entries: i }) {
    i.forEach(t);
  }
  const r = [];
  return (
    ["navigation", "paint", "resource"].forEach((i) => {
      r.push(ni(i, n));
    }),
    r.push(
      Py(({ metric: i }) => {
        e.replayPerformanceEntries.push(DC(i));
      }),
    ),
    () => {
      r.forEach((i) => i());
    }
  );
}
const Q = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  bC =
    'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function PC() {
  const e = new Blob([bC]);
  return URL.createObjectURL(e);
}
function Ue(e, t) {
  Q && (S.info(e), t && m_(e));
}
function Wr(e, t) {
  Q &&
    (S.info(e),
    t &&
      setTimeout(() => {
        m_(e);
      }, 0));
}
function m_(e) {
  An(
    {
      category: "console",
      data: { logger: "replay" },
      level: "info",
      message: e,
    },
    { level: "info" },
  );
}
class Rd extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${Ed}.`);
  }
}
class g_ {
  constructor() {
    ((this.events = []), (this._totalSize = 0), (this.hasCheckout = !1));
  }
  get hasEvents() {
    return this.events.length > 0;
  }
  get type() {
    return "sync";
  }
  destroy() {
    this.events = [];
  }
  async addEvent(t) {
    const n = JSON.stringify(t).length;
    if (((this._totalSize += n), this._totalSize > Ed)) throw new Rd();
    this.events.push(t);
  }
  finish() {
    return new Promise((t) => {
      const n = this.events;
      (this.clear(), t(JSON.stringify(n)));
    });
  }
  clear() {
    ((this.events = []), (this._totalSize = 0), (this.hasCheckout = !1));
  }
  getEarliestTimestamp() {
    const t = this.events.map((n) => n.timestamp).sort()[0];
    return t ? xd(t) : null;
  }
}
class LC {
  constructor(t) {
    ((this._worker = t), (this._id = 0));
  }
  ensureReady() {
    return this._ensureReadyPromise
      ? this._ensureReadyPromise
      : ((this._ensureReadyPromise = new Promise((t, n) => {
          (this._worker.addEventListener(
            "message",
            ({ data: r }) => {
              r.success ? t() : n();
            },
            { once: !0 },
          ),
            this._worker.addEventListener(
              "error",
              (r) => {
                n(r);
              },
              { once: !0 },
            ));
        })),
        this._ensureReadyPromise);
  }
  destroy() {
    (Ue("[Replay] Destroying compression worker"), this._worker.terminate());
  }
  postMessage(t, n) {
    const r = this._getAndIncrementId();
    return new Promise((i, s) => {
      const o = ({ data: a }) => {
        const l = a;
        if (l.method === t && l.id === r) {
          if ((this._worker.removeEventListener("message", o), !l.success)) {
            (Q && S.error("[Replay]", l.response),
              s(new Error("Error in compression worker")));
            return;
          }
          i(l.response);
        }
      };
      (this._worker.addEventListener("message", o),
        this._worker.postMessage({ id: r, method: t, arg: n }));
    });
  }
  _getAndIncrementId() {
    return this._id++;
  }
}
class FC {
  constructor(t) {
    ((this._worker = new LC(t)),
      (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1));
  }
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  get type() {
    return "worker";
  }
  ensureReady() {
    return this._worker.ensureReady();
  }
  destroy() {
    this._worker.destroy();
  }
  addEvent(t) {
    const n = xd(t.timestamp);
    (!this._earliestTimestamp || n < this._earliestTimestamp) &&
      (this._earliestTimestamp = n);
    const r = JSON.stringify(t);
    return (
      (this._totalSize += r.length),
      this._totalSize > Ed
        ? Promise.reject(new Rd())
        : this._sendEventToWorker(r)
    );
  }
  finish() {
    return this._finishRequest();
  }
  clear() {
    ((this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      this._worker.postMessage("clear").then(null, (t) => {
        Q && S.warn('[Replay] Sending "clear" message to worker failed', t);
      }));
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  _sendEventToWorker(t) {
    return this._worker.postMessage("addEvent", t);
  }
  async _finishRequest() {
    const t = await this._worker.postMessage("finish");
    return ((this._earliestTimestamp = null), (this._totalSize = 0), t);
  }
}
class $C {
  constructor(t) {
    ((this._fallback = new g_()),
      (this._compression = new FC(t)),
      (this._used = this._fallback),
      (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()));
  }
  get type() {
    return this._used.type;
  }
  get hasEvents() {
    return this._used.hasEvents;
  }
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  set hasCheckout(t) {
    this._used.hasCheckout = t;
  }
  destroy() {
    (this._fallback.destroy(), this._compression.destroy());
  }
  clear() {
    return this._used.clear();
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  addEvent(t) {
    return this._used.addEvent(t);
  }
  async finish() {
    return (await this.ensureWorkerIsLoaded(), this._used.finish());
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch {
      Ue(
        "[Replay] Failed to load the compression worker, falling back to simple buffer",
      );
      return;
    }
    await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
    const { events: t, hasCheckout: n } = this._fallback,
      r = [];
    for (const i of t) r.push(this._compression.addEvent(i));
    ((this._compression.hasCheckout = n), (this._used = this._compression));
    try {
      await Promise.all(r);
    } catch (i) {
      Q && S.warn("[Replay] Failed to add events when switching buffers.", i);
    }
  }
}
function zC({ useCompression: e, workerUrl: t }) {
  if (e && window.Worker) {
    const n = BC(t);
    if (n) return n;
  }
  return (Ue("[Replay] Using simple buffer"), new g_());
}
function BC(e) {
  try {
    const t = e || UC();
    if (!t) return;
    Ue(`[Replay] Using compression worker${e ? ` from ${e}` : ""}`);
    const n = new Worker(t);
    return new $C(n);
  } catch {
    Ue("[Replay] Failed to create compression worker");
  }
}
function UC() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" ||
    !__SENTRY_EXCLUDE_REPLAY_WORKER__
    ? PC()
    : "";
}
function Nd() {
  try {
    return "sessionStorage" in Z && !!Z.sessionStorage;
  } catch {
    return !1;
  }
}
function jC(e) {
  (HC(), (e.session = void 0));
}
function HC() {
  if (Nd())
    try {
      Z.sessionStorage.removeItem(vd);
    } catch {}
}
function y_(e) {
  return e === void 0 ? !1 : Math.random() < e;
}
function __(e) {
  const t = Date.now(),
    n = e.id || ge(),
    r = e.started || t,
    i = e.lastActivity || t,
    s = e.segmentId || 0,
    o = e.sampled,
    a = e.previousSessionId;
  return {
    id: n,
    started: r,
    lastActivity: i,
    segmentId: s,
    sampled: o,
    previousSessionId: a,
  };
}
function Md(e) {
  if (Nd())
    try {
      Z.sessionStorage.setItem(vd, JSON.stringify(e));
    } catch {}
}
function WC(e, t) {
  return y_(e) ? "session" : t ? "buffer" : !1;
}
function ah(
  { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
  { previousSessionId: r } = {},
) {
  const i = WC(e, t),
    s = __({ sampled: i, previousSessionId: r });
  return (n && Md(s), s);
}
function VC(e) {
  if (!Nd()) return null;
  try {
    const t = Z.sessionStorage.getItem(vd);
    if (!t) return null;
    const n = JSON.parse(t);
    return (Wr("[Replay] Loading existing session", e), __(n));
  } catch {
    return null;
  }
}
function ec(e, t, n = +new Date()) {
  return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
}
function v_(
  e,
  { maxReplayDuration: t, sessionIdleExpire: n, targetTime: r = Date.now() },
) {
  return ec(e.started, t, r) || ec(e.lastActivity, n, r);
}
function S_(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
  return !(
    !v_(e, { sessionIdleExpire: t, maxReplayDuration: n }) ||
    (e.sampled === "buffer" && e.segmentId === 0)
  );
}
function bl(
  {
    traceInternals: e,
    sessionIdleExpire: t,
    maxReplayDuration: n,
    previousSessionId: r,
  },
  i,
) {
  const s = i.stickySession && VC(e);
  return s
    ? S_(s, { sessionIdleExpire: t, maxReplayDuration: n })
      ? (Wr(
          "[Replay] Session in sessionStorage is expired, creating new one...",
        ),
        ah(i, { previousSessionId: s.id }))
      : s
    : (Wr("[Replay] Creating new session", e), ah(i, { previousSessionId: r }));
}
function GC(e) {
  return e.type === L.Custom;
}
function Od(e, t, n) {
  return w_(e, t) ? (E_(e, t, n), !0) : !1;
}
function YC(e, t, n) {
  return w_(e, t) ? E_(e, t, n) : Promise.resolve(null);
}
async function E_(e, t, n) {
  if (!e.eventBuffer) return null;
  try {
    (n && e.recordingMode === "buffer" && e.eventBuffer.clear(),
      n && (e.eventBuffer.hasCheckout = !0));
    const r = e.getOptions(),
      i = qC(t, r.beforeAddRecordingEvent);
    return i ? await e.eventBuffer.addEvent(i) : void 0;
  } catch (r) {
    const i = r && r instanceof Rd ? "addEventSizeExceeded" : "addEvent";
    (Q && S.error(r), await e.stop({ reason: i }));
    const s = q();
    s && s.recordDroppedEvent("internal_sdk_error", "replay");
  }
}
function w_(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  const n = xd(t.timestamp);
  return n + e.timeouts.sessionIdlePause < Date.now()
    ? !1
    : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
      ? (Ue(
          `[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,
          e.getOptions()._experiments.traceInternals,
        ),
        !1)
      : !0;
}
function qC(e, t) {
  try {
    if (typeof t == "function" && GC(e)) return t(e);
  } catch (n) {
    return (
      Q &&
        S.error(
          "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
          n,
        ),
      null
    );
  }
  return e;
}
function Dd(e) {
  return !e.type;
}
function tc(e) {
  return e.type === "transaction";
}
function KC(e) {
  return e.type === "replay_event";
}
function lh(e) {
  return e.type === "feedback";
}
function k_(e) {
  const t = JC();
  return (n, r) => {
    if (!e.isEnabled() || (!Dd(n) && !tc(n))) return;
    const i = r && r.statusCode;
    if (!(t && (!i || i < 200 || i >= 300))) {
      if (tc(n)) {
        XC(e, n);
        return;
      }
      QC(e, n);
    }
  };
}
function XC(e, t) {
  const n = e.getContext();
  t.contexts &&
    t.contexts.trace &&
    t.contexts.trace.trace_id &&
    n.traceIds.size < 100 &&
    n.traceIds.add(t.contexts.trace.trace_id);
}
function QC(e, t) {
  const n = e.getContext();
  if (
    (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
  )
    return;
  const { beforeErrorSampling: r } = e.getOptions();
  (typeof r == "function" && !r(t)) ||
    setTimeout(() => {
      e.sendBufferedReplayOrFlush();
    });
}
function JC() {
  const e = q();
  if (!e) return !1;
  const t = e.getTransport();
  return (t && t.send.__sentry__baseTransport__) || !1;
}
function ZC(e) {
  return (t) => {
    !e.isEnabled() || !Dd(t) || ex(e, t);
  };
}
function ex(e, t) {
  const n = t.exception && t.exception.values && t.exception.values[0].value;
  if (
    typeof n == "string" &&
    (n.match(
      /reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/,
    ) ||
      n.match(
        /(does not match server-rendered HTML|Hydration failed because)/i,
      ))
  ) {
    const r = $t({ category: "replay.hydrate-error" });
    Rs(e, r);
  }
}
function tx(e, t) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    !e.exception.values.length
    ? !1
    : !!(t.originalException && t.originalException.__rrweb__);
}
function nx(e, t) {
  (e.triggerUserActivity(),
    e.addUpdate(() =>
      t.timestamp
        ? (e.throttledAddEvent({
            type: L.Custom,
            timestamp: t.timestamp * 1e3,
            data: {
              tag: "breadcrumb",
              payload: {
                timestamp: t.timestamp,
                type: "default",
                category: "sentry.feedback",
                data: { feedbackId: t.event_id },
              },
            },
          }),
          !1)
        : !0,
    ));
}
function rx(e, t) {
  return e.recordingMode !== "buffer" ||
    t.message === Sd ||
    !t.exception ||
    t.type
    ? !1
    : y_(e.getOptions().errorSampleRate);
}
function ix(e, t = !1) {
  const n = t ? k_(e) : void 0;
  return Object.assign(
    (r, i) =>
      e.isEnabled()
        ? KC(r)
          ? (delete r.breadcrumbs, r)
          : (!Dd(r) && !tc(r) && !lh(r)) || !e.checkAndHandleExpiredSession()
            ? r
            : lh(r)
              ? (e.flush(),
                (r.contexts.feedback.replay_id = e.getSessionId()),
                nx(e, r),
                r)
              : tx(r, i) && !e.getOptions()._experiments.captureExceptions
                ? (Q &&
                    S.log("[Replay] Ignoring error from rrweb internals", r),
                  null)
                : ((rx(e, r) || e.recordingMode === "session") &&
                    (r.tags = { ...r.tags, replayId: e.getSessionId() }),
                  n && n(r, { statusCode: 200 }),
                  r)
        : r,
    { id: "Replay" },
  );
}
function La(e, t) {
  return t.map(({ type: n, start: r, end: i, name: s, data: o }) => {
    const a = e.throttledAddEvent({
      type: L.Custom,
      timestamp: r,
      data: {
        tag: "performanceSpan",
        payload: {
          op: n,
          description: s,
          startTimestamp: r,
          endTimestamp: i,
          data: o,
        },
      },
    });
    return typeof a == "string" ? Promise.resolve(null) : a;
  });
}
function sx(e) {
  const { from: t, to: n } = e,
    r = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: r,
    end: r,
    name: n,
    data: { previous: t },
  };
}
function ox(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = sx(t);
    n !== null &&
      (e.getContext().urls.push(n.name),
      e.triggerUserActivity(),
      e.addUpdate(() => (La(e, [n]), !1)));
  };
}
function ax(e, t) {
  return Q && e.getOptions()._experiments.traceInternals ? !1 : jw(t, q());
}
function Fa(e, t) {
  e.isEnabled() &&
    t !== null &&
    (ax(e, t.name) || e.addUpdate(() => (La(e, [t]), !0)));
}
function lx(e) {
  const { startTimestamp: t, endTimestamp: n, fetchData: r, response: i } = e;
  if (!n) return null;
  const { method: s, url: o } = r;
  return {
    type: "resource.fetch",
    start: t / 1e3,
    end: n / 1e3,
    name: o,
    data: { method: s, statusCode: i ? i.status : void 0 },
  };
}
function ux(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = lx(t);
    Fa(e, n);
  };
}
function cx(e) {
  const { startTimestamp: t, endTimestamp: n, xhr: r } = e,
    i = r[vn];
  if (!t || !n || !i) return null;
  const { method: s, url: o, status_code: a } = i;
  return o === void 0
    ? null
    : {
        type: "resource.xhr",
        name: o,
        start: t / 1e3,
        end: n / 1e3,
        data: { method: s, statusCode: a },
      };
}
function dx(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = cx(t);
    Fa(e, n);
  };
}
function $a(e, t) {
  if (e)
    try {
      if (typeof e == "string") return t.encode(e).length;
      if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
      if (e instanceof FormData) {
        const n = x_(e);
        return t.encode(n).length;
      }
      if (e instanceof Blob) return e.size;
      if (e instanceof ArrayBuffer) return e.byteLength;
    } catch {}
}
function T_(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function I_(e) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof URLSearchParams) return [e.toString()];
    if (e instanceof FormData) return [x_(e)];
    if (!e) return [void 0];
  } catch {
    return (
      Q && S.warn("[Replay] Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    Q && S.info("[Replay] Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function oa(e, t) {
  if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
  const n = { ...e._meta },
    r = n.warnings || [];
  return ((n.warnings = [...r, t]), (e._meta = n), e);
}
function C_(e, t) {
  if (!t) return null;
  const {
    startTimestamp: n,
    endTimestamp: r,
    url: i,
    method: s,
    statusCode: o,
    request: a,
    response: l,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: r / 1e3,
    name: i,
    data: He({ method: s, statusCode: o, request: a, response: l }),
  };
}
function ms(e) {
  return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
}
function Nn(e, t, n) {
  if (!t && Object.keys(e).length === 0) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  const r = { headers: e, size: t },
    { body: i, warnings: s } = fx(n);
  return ((r.body = i), s && s.length > 0 && (r._meta = { warnings: s }), r);
}
function nc(e, t) {
  return Object.keys(e).reduce((n, r) => {
    const i = r.toLowerCase();
    return (t.includes(i) && e[r] && (n[i] = e[r]), n);
  }, {});
}
function x_(e) {
  return new URLSearchParams(e).toString();
}
function fx(e) {
  if (!e || typeof e != "string") return { body: e };
  const t = e.length > Gp,
    n = px(e);
  if (t) {
    const r = e.slice(0, Gp);
    return n
      ? { body: r, warnings: ["MAYBE_JSON_TRUNCATED"] }
      : { body: `${r}…`, warnings: ["TEXT_TRUNCATED"] };
  }
  if (n)
    try {
      return { body: JSON.parse(e) };
    } catch {}
  return { body: e };
}
function px(e) {
  const t = e[0],
    n = e[e.length - 1];
  return (t === "[" && n === "]") || (t === "{" && n === "}");
}
function aa(e, t) {
  const n = hx(e);
  return fi(n, t);
}
function hx(e, t = Z.document.baseURI) {
  if (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith(Z.location.origin)
  )
    return e;
  const n = new URL(e, t);
  if (n.origin !== new URL(t).origin) return e;
  const r = n.href;
  return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
}
async function mx(e, t, n) {
  try {
    const r = await yx(e, t, n),
      i = C_("resource.fetch", r);
    Fa(n.replay, i);
  } catch (r) {
    Q && S.error("[Replay] Failed to capture fetch breadcrumb", r);
  }
}
function gx(e, t, n) {
  const { input: r, response: i } = t,
    s = r ? R_(r) : void 0,
    o = $a(s, n.textEncoder),
    a = i ? T_(i.headers.get("content-length")) : void 0;
  (o !== void 0 && (e.data.request_body_size = o),
    a !== void 0 && (e.data.response_body_size = a));
}
async function yx(e, t, n) {
  const r = Date.now(),
    { startTimestamp: i = r, endTimestamp: s = r } = t,
    {
      url: o,
      method: a,
      status_code: l = 0,
      request_body_size: u,
      response_body_size: c,
    } = e.data,
    d = aa(o, n.networkDetailAllowUrls) && !aa(o, n.networkDetailDenyUrls),
    f = d ? _x(n, t.input, u) : ms(u),
    p = await vx(d, n, t.response, c);
  return {
    startTimestamp: i,
    endTimestamp: s,
    url: o,
    method: a,
    statusCode: l,
    request: f,
    response: p,
  };
}
function _x({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
  const i = n ? wx(n, t) : {};
  if (!e) return Nn(i, r, void 0);
  const s = R_(n),
    [o, a] = I_(s),
    l = Nn(i, r, o);
  return a ? oa(l, a) : l;
}
async function vx(
  e,
  { networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r },
  i,
  s,
) {
  if (!e && s !== void 0) return ms(s);
  const o = i ? N_(i.headers, r) : {};
  if (!i || (!t && s !== void 0)) return Nn(o, s, void 0);
  const [a, l] = await Ex(i),
    u = Sx(a, {
      networkCaptureBodies: t,
      textEncoder: n,
      responseBodySize: s,
      captureDetails: e,
      headers: o,
    });
  return l ? oa(u, l) : u;
}
function Sx(
  e,
  {
    networkCaptureBodies: t,
    textEncoder: n,
    responseBodySize: r,
    captureDetails: i,
    headers: s,
  },
) {
  try {
    const o = e && e.length && r === void 0 ? $a(e, n) : r;
    return i ? (t ? Nn(s, o, e) : Nn(s, o, void 0)) : ms(o);
  } catch (o) {
    return (
      Q && S.warn("[Replay] Failed to serialize response body", o),
      Nn(s, r, void 0)
    );
  }
}
async function Ex(e) {
  const t = kx(e);
  if (!t) return [void 0, "BODY_PARSE_ERROR"];
  try {
    return [await Tx(t)];
  } catch (n) {
    return (
      Q && S.warn("[Replay] Failed to get text body from response", n),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
}
function R_(e = []) {
  if (!(e.length !== 2 || typeof e[1] != "object")) return e[1].body;
}
function N_(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      e.get(r) && (n[r] = e.get(r));
    }),
    n
  );
}
function wx(e, t) {
  return e.length === 1 && typeof e[0] != "string"
    ? uh(e[0], t)
    : e.length === 2
      ? uh(e[1], t)
      : {};
}
function uh(e, t) {
  if (!e) return {};
  const n = e.headers;
  return n
    ? n instanceof Headers
      ? N_(n, t)
      : Array.isArray(n)
        ? {}
        : nc(n, t)
    : {};
}
function kx(e) {
  try {
    return e.clone();
  } catch (t) {
    Q && S.warn("[Replay] Failed to clone response body", t);
  }
}
function Tx(e) {
  return new Promise((t, n) => {
    const r = setTimeout(
      () => n(new Error("Timeout while trying to read response body")),
      500,
    );
    Ix(e)
      .then(
        (i) => t(i),
        (i) => n(i),
      )
      .finally(() => clearTimeout(r));
  });
}
async function Ix(e) {
  return await e.text();
}
async function Cx(e, t, n) {
  try {
    const r = Rx(e, t, n),
      i = C_("resource.xhr", r);
    Fa(n.replay, i);
  } catch (r) {
    Q && S.error("[Replay] Failed to capture xhr breadcrumb", r);
  }
}
function xx(e, t, n) {
  const { xhr: r, input: i } = t;
  if (!r) return;
  const s = $a(i, n.textEncoder),
    o = r.getResponseHeader("content-length")
      ? T_(r.getResponseHeader("content-length"))
      : Dx(r.response, r.responseType, n.textEncoder);
  (s !== void 0 && (e.data.request_body_size = s),
    o !== void 0 && (e.data.response_body_size = o));
}
function Rx(e, t, n) {
  const r = Date.now(),
    { startTimestamp: i = r, endTimestamp: s = r, input: o, xhr: a } = t,
    {
      url: l,
      method: u,
      status_code: c = 0,
      request_body_size: d,
      response_body_size: f,
    } = e.data;
  if (!l) return null;
  if (
    !a ||
    !aa(l, n.networkDetailAllowUrls) ||
    aa(l, n.networkDetailDenyUrls)
  ) {
    const k = ms(d),
      T = ms(f);
    return {
      startTimestamp: i,
      endTimestamp: s,
      url: l,
      method: u,
      statusCode: c,
      request: k,
      response: T,
    };
  }
  const p = a[vn],
    g = p ? nc(p.request_headers, n.networkRequestHeaders) : {},
    _ = nc(Nx(a), n.networkResponseHeaders),
    [E, h] = n.networkCaptureBodies ? I_(o) : [void 0],
    [m, y] = n.networkCaptureBodies ? Mx(a) : [void 0],
    v = Nn(g, d, E),
    w = Nn(_, f, m);
  return {
    startTimestamp: i,
    endTimestamp: s,
    url: l,
    method: u,
    statusCode: c,
    request: h ? oa(v, h) : v,
    response: y ? oa(w, y) : w,
  };
}
function Nx(e) {
  const t = e.getAllResponseHeaders();
  return t
    ? t
        .split(
          `\r
`,
        )
        .reduce((n, r) => {
          const [i, s] = r.split(": ");
          return ((n[i.toLowerCase()] = s), n);
        }, {})
    : {};
}
function Mx(e) {
  const t = [];
  try {
    return [e.responseText];
  } catch (n) {
    t.push(n);
  }
  try {
    return Ox(e.response, e.responseType);
  } catch (n) {
    t.push(n);
  }
  return (
    Q && S.warn("[Replay] Failed to get xhr response body", ...t),
    [void 0]
  );
}
function Ox(e, t) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof Document) return [e.body.outerHTML];
    if (t === "json" && e && typeof e == "object") return [JSON.stringify(e)];
    if (!e) return [void 0];
  } catch {
    return (
      Q && S.warn("[Replay] Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    Q && S.info("[Replay] Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function Dx(e, t, n) {
  try {
    const r = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
    return $a(r, n);
  } catch {
    return;
  }
}
function Ax(e) {
  const t = q();
  try {
    const n = new TextEncoder(),
      {
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: i,
        networkCaptureBodies: s,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      } = e.getOptions(),
      l = {
        replay: e,
        textEncoder: n,
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: i,
        networkCaptureBodies: s,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      };
    t && t.on
      ? t.on("beforeAddBreadcrumb", (u, c) => bx(l, u, c))
      : (rd(ux(e)), id(dx(e)));
  } catch {}
}
function bx(e, t, n) {
  if (t.data)
    try {
      (Px(t) && Fx(n) && (xx(t, n, e), Cx(t, n, e)),
        Lx(t) && $x(n) && (gx(t, n, e), mx(t, n, e)));
    } catch {
      Q && S.warn("Error when enriching network breadcrumb");
    }
}
function Px(e) {
  return e.category === "xhr";
}
function Lx(e) {
  return e.category === "fetch";
}
function Fx(e) {
  return e && e.xhr;
}
function $x(e) {
  return e && e.response;
}
let ch = null;
function zx(e) {
  return !!e.category;
}
const Bx = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = Ux(t);
  n && Rs(e, n);
};
function Ux(e) {
  const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
  return ch === t ||
    !t ||
    ((ch = t),
    !zx(t) ||
      ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
        t.category,
      ) ||
      t.category.startsWith("ui."))
    ? null
    : t.category === "console"
      ? jx(t)
      : $t(t);
}
function jx(e) {
  const t = e.data && e.data.arguments;
  if (!Array.isArray(t) || t.length === 0) return $t(e);
  let n = !1;
  const r = t.map((i) => {
    if (!i) return i;
    if (typeof i == "string")
      return i.length > io ? ((n = !0), `${i.slice(0, io)}…`) : i;
    if (typeof i == "object")
      try {
        const s = bt(i, 7);
        return JSON.stringify(s).length > io
          ? ((n = !0), `${JSON.stringify(s, null, 2).slice(0, io)}…`)
          : s;
      } catch {}
    return i;
  });
  return $t({
    ...e,
    data: {
      ...e.data,
      arguments: r,
      ...(n ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}),
    },
  });
}
function Hx(e) {
  const t = ut(),
    n = q();
  (t.addScopeListener(Bx(e)), qg(SC(e)), Ca(ox(e)), Ax(e));
  const r = ix(e, !dh(n));
  (n && n.addEventProcessor ? n.addEventProcessor(r) : Pw(r),
    dh(n) &&
      (n.on("beforeSendEvent", ZC(e)),
      n.on("afterSendEvent", k_(e)),
      n.on("createDsc", (i) => {
        const s = e.getSessionId();
        s &&
          e.isEnabled() &&
          e.recordingMode === "session" &&
          e.checkAndHandleExpiredSession() &&
          (i.replay_id = s);
      }),
      n.on("startTransaction", (i) => {
        e.lastTransaction = i;
      }),
      n.on("finishTransaction", (i) => {
        e.lastTransaction = i;
      }),
      n.on("beforeSendFeedback", (i, s) => {
        const o = e.getSessionId();
        s &&
          s.includeReplay &&
          e.isEnabled() &&
          o &&
          i.contexts &&
          i.contexts.feedback &&
          (i.contexts.feedback.replay_id = o);
      })));
}
function dh(e) {
  return !!(e && e.on);
}
async function Wx(e) {
  try {
    return Promise.all(La(e, [Vx(Z.performance.memory)]));
  } catch {
    return [];
  }
}
function Vx(e) {
  const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
    i = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: i,
    end: i,
    data: {
      memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r },
    },
  };
}
function Gx(e, t, n) {
  let r, i, s;
  const o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
  function a() {
    return (l(), (r = e()), r);
  }
  function l() {
    (i !== void 0 && clearTimeout(i),
      s !== void 0 && clearTimeout(s),
      (i = s = void 0));
  }
  function u() {
    return i !== void 0 || s !== void 0 ? a() : r;
  }
  function c() {
    return (
      i && clearTimeout(i),
      (i = setTimeout(a, t)),
      o && s === void 0 && (s = setTimeout(a, o)),
      r
    );
  }
  return ((c.cancel = l), (c.flush = u), c);
}
function Yx(e) {
  let t = !1;
  return (n, r) => {
    if (!e.checkAndHandleExpiredSession()) {
      Q && S.warn("[Replay] Received replay event after session expired.");
      return;
    }
    const i = r || !t;
    ((t = !0),
      e.clickDetector && mC(e.clickDetector, n),
      e.addUpdate(() => {
        if (
          (e.recordingMode === "buffer" && i && e.setInitialState(),
          !Od(e, n, i))
        )
          return !0;
        if (!i) return !1;
        if ((Kx(e, i), e.session && e.session.previousSessionId)) return !0;
        if (e.recordingMode === "buffer" && e.session && e.eventBuffer) {
          const s = e.eventBuffer.getEarliestTimestamp();
          s &&
            (Ue(
              `[Replay] Updating session start time to earliest event in buffer to ${new Date(s)}`,
              e.getOptions()._experiments.traceInternals,
            ),
            (e.session.started = s),
            e.getOptions().stickySession && Md(e.session));
        }
        return (e.recordingMode === "session" && e.flush(), !0);
      }));
  };
}
function qx(e) {
  const t = e.getOptions();
  return {
    type: L.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        shouldRecordCanvas: e.isRecordingCanvas(),
        sessionSampleRate: t.sessionSampleRate,
        errorSampleRate: t.errorSampleRate,
        useCompressionOption: t.useCompression,
        blockAllMedia: t.blockAllMedia,
        maskAllText: t.maskAllText,
        maskAllInputs: t.maskAllInputs,
        useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: t.networkCaptureBodies,
        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
      },
    },
  };
}
function Kx(e, t) {
  !t || !e.session || e.session.segmentId !== 0 || Od(e, qx(e), !1);
}
function Xx(e, t, n, r) {
  return Fn(ny(e, ad(e), r, n), [
    [{ type: "replay_event" }, e],
    [
      {
        type: "replay_recording",
        length:
          typeof t == "string" ? new TextEncoder().encode(t).length : t.length,
      },
      t,
    ],
  ]);
}
function Qx({ recordingData: e, headers: t }) {
  let n;
  const r = `${JSON.stringify(t)}
`;
  if (typeof e == "string") n = `${r}${e}`;
  else {
    const s = new TextEncoder().encode(r);
    ((n = new Uint8Array(s.length + e.length)), n.set(s), n.set(e, s.length));
  }
  return n;
}
async function Jx({ client: e, scope: t, replayId: n, event: r }) {
  const i =
      typeof e._integrations == "object" &&
      e._integrations !== null &&
      !Array.isArray(e._integrations)
        ? Object.keys(e._integrations)
        : void 0,
    s = { event_id: n, integrations: i };
  e.emit && e.emit("preprocessEvent", r, s);
  const o = await ly(e.getOptions(), r, s, t, e, $n());
  if (!o) return null;
  o.platform = o.platform || "javascript";
  const a = e.getSdkMetadata && e.getSdkMetadata(),
    { name: l, version: u } = (a && a.sdk) || {};
  return (
    (o.sdk = {
      ...o.sdk,
      name: l || "sentry.javascript.unknown",
      version: u || "0.0.0",
    }),
    o
  );
}
async function Zx({
  recordingData: e,
  replayId: t,
  segmentId: n,
  eventContext: r,
  timestamp: i,
  session: s,
}) {
  const o = Qx({ recordingData: e, headers: { segment_id: n } }),
    { urls: a, errorIds: l, traceIds: u, initialTimestamp: c } = r,
    d = q(),
    f = ut(),
    p = d && d.getTransport(),
    g = d && d.getDsn();
  if (!d || !p || !g || !s.sampled) return;
  const _ = {
      type: F1,
      replay_start_timestamp: c / 1e3,
      timestamp: i / 1e3,
      error_ids: l,
      trace_ids: u,
      urls: a,
      replay_id: t,
      segment_id: n,
      replay_type: s.sampled,
    },
    E = await Jx({ scope: f, client: d, replayId: t, event: _ });
  if (!E) {
    (d.recordDroppedEvent("event_processor", "replay", _),
      Ue("An event processor returned `null`, will not send event."));
    return;
  }
  delete E.sdkProcessingMetadata;
  const h = Xx(E, o, g, d.getOptions().tunnel);
  let m;
  try {
    m = await p.send(h);
  } catch (v) {
    const w = new Error(Sd);
    try {
      w.cause = v;
    } catch {}
    throw w;
  }
  if (!m) return m;
  if (
    typeof m.statusCode == "number" &&
    (m.statusCode < 200 || m.statusCode >= 300)
  )
    throw new M_(m.statusCode);
  const y = iy({}, m);
  if (ry(y, "replay")) throw new O_(y);
  return m;
}
class M_ extends Error {
  constructor(t) {
    super(`Transport returned status code ${t}`);
  }
}
class O_ extends Error {
  constructor(t) {
    (super("Rate limit hit"), (this.rateLimits = t));
  }
}
async function D_(e, t = { count: 0, interval: H1 }) {
  const { recordingData: n, options: r } = e;
  if (n.length)
    try {
      return (await Zx(e), !0);
    } catch (i) {
      if (i instanceof M_ || i instanceof O_) throw i;
      if (
        (V0("Replays", { _retryCount: t.count }),
        Q && r._experiments && r._experiments.captureExceptions && ei(i),
        t.count >= W1)
      ) {
        const s = new Error(`${Sd} - max retries exceeded`);
        try {
          s.cause = i;
        } catch {}
        throw s;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((s, o) => {
          setTimeout(async () => {
            try {
              (await D_(e, t), s(!0));
            } catch (a) {
              o(a);
            }
          }, t.interval);
        })
      );
    }
}
const A_ = "__THROTTLED",
  eR = "__SKIPPED";
function tR(e, t, n) {
  const r = new Map(),
    i = (a) => {
      const l = a - n;
      r.forEach((u, c) => {
        c < l && r.delete(c);
      });
    },
    s = () => [...r.values()].reduce((a, l) => a + l, 0);
  let o = !1;
  return (...a) => {
    const l = Math.floor(Date.now() / 1e3);
    if ((i(l), s() >= t)) {
      const c = o;
      return ((o = !0), c ? eR : A_);
    }
    o = !1;
    const u = r.get(l) || 0;
    return (r.set(l, u + 1), e(...a));
  };
}
class pn {
  constructor({ options: t, recordingOptions: n }) {
    (pn.prototype.__init.call(this),
      pn.prototype.__init2.call(this),
      pn.prototype.__init3.call(this),
      pn.prototype.__init4.call(this),
      pn.prototype.__init5.call(this),
      pn.prototype.__init6.call(this),
      (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = "session"),
      (this.timeouts = { sessionIdlePause: $1, sessionIdleExpire: z1 }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: "",
      }),
      (this._recordingOptions = n),
      (this._options = t),
      (this._debouncedFlush = Gx(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay },
      )),
      (this._throttledAddEvent = tR((o, a) => YC(this, o, a), 300, 5)));
    const { slowClickTimeout: r, slowClickIgnoreSelectors: i } =
        this.getOptions(),
      s = r
        ? {
            threshold: Math.min(V1, r),
            timeout: r,
            scrollTimeout: G1,
            ignoreSelector: i ? i.join(",") : "",
          }
        : void 0;
    s && (this.clickDetector = new dC(this, s));
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  isRecordingCanvas() {
    return !!this._canvas;
  }
  getOptions() {
    return this._options;
  }
  initializeSampling(t) {
    const { errorSampleRate: n, sessionSampleRate: r } = this._options;
    if (!(n <= 0 && r <= 0)) {
      if ((this._initializeSessionForSampling(t), !this.session)) {
        this._handleException(
          new Error("Unable to initialize and create session"),
        );
        return;
      }
      this.session.sampled !== !1 &&
        ((this.recordingMode =
          this.session.sampled === "buffer" && this.session.segmentId === 0
            ? "buffer"
            : "session"),
        Wr(
          `[Replay] Starting replay in ${this.recordingMode} mode`,
          this._options._experiments.traceInternals,
        ),
        this._initializeRecording());
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session")
      throw new Error("Replay recording is already in progress");
    if (this._isEnabled && this.recordingMode === "buffer")
      throw new Error(
        "Replay buffering is in progress, call `flush()` to save the replay",
      );
    (Wr(
      "[Replay] Starting replay in session mode",
      this._options._experiments.traceInternals,
    ),
      this._updateUserActivity());
    const t = bl(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      },
    );
    ((this.session = t), this._initializeRecording());
  }
  startBuffering() {
    if (this._isEnabled)
      throw new Error("Replay recording is already in progress");
    Wr(
      "[Replay] Starting replay in buffer mode",
      this._options._experiments.traceInternals,
    );
    const t = bl(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      },
    );
    ((this.session = t),
      (this.recordingMode = "buffer"),
      this._initializeRecording());
  }
  startRecording() {
    try {
      const t = this._canvas;
      this._stopRecording = Rn({
        ...this._recordingOptions,
        ...(this.recordingMode === "buffer" && { checkoutEveryNms: j1 }),
        emit: Yx(this),
        onMutation: this._onMutationHandler,
        ...(t
          ? {
              recordCanvas: t.recordCanvas,
              getCanvasManager: t.getCanvasManager,
              sampling: t.sampling,
              dataURLOptions: t.dataURLOptions,
            }
          : {}),
      });
    } catch (t) {
      this._handleException(t);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (t) {
      return (this._handleException(t), !1);
    }
  }
  async stop({ forceFlush: t = !1, reason: n } = {}) {
    if (this._isEnabled) {
      this._isEnabled = !1;
      try {
        (Ue(
          `[Replay] Stopping Replay${n ? ` triggered by ${n}` : ""}`,
          this._options._experiments.traceInternals,
        ),
          this._removeListeners(),
          this.stopRecording(),
          this._debouncedFlush.cancel(),
          t && (await this._flush({ force: !0 })),
          this.eventBuffer && this.eventBuffer.destroy(),
          (this.eventBuffer = null),
          jC(this));
      } catch (r) {
        this._handleException(r);
      }
    }
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      Ue("[Replay] Pausing replay", this._options._experiments.traceInternals));
  }
  resume() {
    !this._isPaused ||
      !this._checkSession() ||
      ((this._isPaused = !1),
      this.startRecording(),
      Ue(
        "[Replay] Resuming replay",
        this._options._experiments.traceInternals,
      ));
  }
  async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
    if (this.recordingMode === "session") return this.flushImmediate();
    const n = Date.now();
    (Ue(
      "[Replay] Converting buffer to session",
      this._options._experiments.traceInternals,
    ),
      await this.flushImmediate());
    const r = this.stopRecording();
    !t ||
      !r ||
      (this.recordingMode !== "session" &&
        ((this.recordingMode = "session"),
        this.session &&
          (this._updateUserActivity(n),
          this._updateSessionActivity(n),
          this._maybeSaveSession()),
        this.startRecording()));
  }
  addUpdate(t) {
    const n = t();
    this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._checkSession()) return;
      this.resume();
      return;
    }
    (this.checkAndHandleExpiredSession(), this._updateSessionActivity());
  }
  updateUserActivity() {
    (this._updateUserActivity(), this._updateSessionActivity());
  }
  conditionalFlush() {
    return this.recordingMode === "buffer"
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return (this._debouncedFlush(), this._debouncedFlush.flush());
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId() {
    return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
    if (
      this._lastActivity &&
      ec(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === "session"
    ) {
      this.pause();
      return;
    }
    return !!this._checkSession();
  }
  setInitialState() {
    const t = `${Z.location.pathname}${Z.location.hash}${Z.location.search}`,
      n = `${Z.location.origin}${t}`;
    ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = n),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(n));
  }
  throttledAddEvent(t, n) {
    const r = this._throttledAddEvent(t, n);
    if (r === A_) {
      const i = $t({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !Od(this, {
            type: sC,
            timestamp: i.timestamp || 0,
            data: { tag: "breadcrumb", payload: i, metric: !0 },
          }),
      );
    }
    return r;
  }
  getCurrentRoute() {
    const t = this.lastTransaction || ut().getTransaction(),
      r = ((t && Re(t).data) || {})[Qn];
    if (!(!t || !r || !["route", "custom"].includes(r)))
      return Re(t).description;
  }
  _initializeRecording() {
    (this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = zC({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.startRecording());
  }
  _handleException(t) {
    (Q && S.error("[Replay]", t),
      Q &&
        this._options._experiments &&
        this._options._experiments.captureExceptions &&
        ei(t));
  }
  _initializeSessionForSampling(t) {
    const n = this._options.errorSampleRate > 0,
      r = bl(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          traceInternals: this._options._experiments.traceInternals,
          previousSessionId: t,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: n,
        },
      );
    this.session = r;
  }
  _checkSession() {
    if (!this.session) return !1;
    const t = this.session;
    return S_(t, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
    })
      ? (this._refreshSession(t), !1)
      : !0;
  }
  async _refreshSession(t) {
    this._isEnabled &&
      (await this.stop({ reason: "refresh session" }),
      this.initializeSampling(t.id));
  }
  _addListeners() {
    try {
      (Z.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        Z.addEventListener("blur", this._handleWindowBlur),
        Z.addEventListener("focus", this._handleWindowFocus),
        Z.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (Hx(this), (this._hasInitializedCoreListeners = !0)));
    } catch (t) {
      this._handleException(t);
    }
    this._performanceCleanupCallback = AC(this);
  }
  _removeListeners() {
    try {
      (Z.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        Z.removeEventListener("blur", this._handleWindowBlur),
        Z.removeEventListener("focus", this._handleWindowFocus),
        Z.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback());
    } catch (t) {
      this._handleException(t);
    }
  }
  __init() {
    this._handleVisibilityChange = () => {
      Z.document.visibilityState === "visible"
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    };
  }
  __init2() {
    this._handleWindowBlur = () => {
      const t = $t({ category: "ui.blur" });
      this._doChangeToBackgroundTasks(t);
    };
  }
  __init3() {
    this._handleWindowFocus = () => {
      const t = $t({ category: "ui.focus" });
      this._doChangeToForegroundTasks(t);
    };
  }
  __init4() {
    this._handleKeyboardEvent = (t) => {
      TC(this, t);
    };
  }
  _doChangeToBackgroundTasks(t) {
    !this.session ||
      v_(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      }) ||
      (t && this._createCustomBreadcrumb(t), this.conditionalFlush());
  }
  _doChangeToForegroundTasks(t) {
    if (!this.session) return;
    if (!this.checkAndHandleExpiredSession()) {
      Ue("[Replay] Document has become active, but session has expired");
      return;
    }
    t && this._createCustomBreadcrumb(t);
  }
  _updateUserActivity(t = Date.now()) {
    this._lastActivity = t;
  }
  _updateSessionActivity(t = Date.now()) {
    this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(t) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: L.Custom,
        timestamp: t.timestamp || 0,
        data: { tag: "breadcrumb", payload: t },
      });
    });
  }
  _addPerformanceEntries() {
    const t = xC(this.performanceEntries).concat(this.replayPerformanceEntries);
    return (
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      Promise.all(La(this, t))
    );
  }
  _clearContext() {
    (this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      (this._context.urls = []));
  }
  _updateInitialTimestampFromEventBuffer() {
    const { session: t, eventBuffer: n } = this;
    if (!t || !n || t.segmentId) return;
    const r = n.getEarliestTimestamp();
    r &&
      r < this._context.initialTimestamp &&
      (this._context.initialTimestamp = r);
  }
  _popEventContext() {
    const t = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };
    return (this._clearContext(), t);
  }
  async _runFlush() {
    const t = this.getSessionId();
    if (!this.session || !this.eventBuffer || !t) {
      Q && S.error("[Replay] No session or eventBuffer found to flush.");
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      !(!this.eventBuffer || !this.eventBuffer.hasEvents) &&
        (await Wx(this), !!this.eventBuffer && t === this.getSessionId()))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        const n = Date.now();
        if (
          n - this._context.initialTimestamp >
          this._options.maxReplayDuration + 3e4
        )
          throw new Error("Session is too long, not sending replay");
        const r = this._popEventContext(),
          i = this.session.segmentId++;
        this._maybeSaveSession();
        const s = await this.eventBuffer.finish();
        await D_({
          replayId: t,
          recordingData: s,
          segmentId: i,
          eventContext: r,
          session: this.session,
          options: this.getOptions(),
          timestamp: n,
        });
      } catch (n) {
        (this._handleException(n), this.stop({ reason: "sendReplay" }));
        const r = q();
        r && r.recordDroppedEvent("send_error", "replay");
      }
  }
  __init5() {
    this._flush = async ({ force: t = !1 } = {}) => {
      if (!this._isEnabled && !t) return;
      if (!this.checkAndHandleExpiredSession()) {
        Q &&
          S.error(
            "[Replay] Attempting to finish replay event after session expired.",
          );
        return;
      }
      if (!this.session) return;
      const n = this.session.started,
        i = Date.now() - n;
      this._debouncedFlush.cancel();
      const s = i < this._options.minReplayDuration,
        o = i > this._options.maxReplayDuration + 5e3;
      if (s || o) {
        (Ue(
          `[Replay] Session duration (${Math.floor(i / 1e3)}s) is too ${s ? "short" : "long"}, not sending replay.`,
          this._options._experiments.traceInternals,
        ),
          s && this._debouncedFlush());
        return;
      }
      const a = this.eventBuffer;
      if (
        (a &&
          this.session.segmentId === 0 &&
          !a.hasCheckout &&
          Ue(
            "[Replay] Flushing initial segment without checkout.",
            this._options._experiments.traceInternals,
          ),
        !this._flushLock)
      ) {
        ((this._flushLock = this._runFlush()),
          await this._flushLock,
          (this._flushLock = void 0));
        return;
      }
      try {
        await this._flushLock;
      } catch (l) {
        Q && S.error(l);
      } finally {
        this._debouncedFlush();
      }
    };
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && Md(this.session);
  }
  __init6() {
    this._onMutationHandler = (t) => {
      const n = t.length,
        r = this._options.mutationLimit,
        i = this._options.mutationBreadcrumbLimit,
        s = r && n > r;
      if (n > i || s) {
        const o = $t({
          category: "replay.mutations",
          data: { count: n, limit: s },
        });
        this._createCustomBreadcrumb(o);
      }
      return s
        ? (this.stop({
            reason: "mutationLimit",
            forceFlush: this.recordingMode === "session",
          }),
          !1)
        : !0;
    };
  }
}
function xi(e, t, n, r) {
  const i = typeof r == "string" ? r.split(",") : [],
    s = [...e, ...i, ...t];
  return (
    typeof n < "u" &&
      (typeof n == "string" && s.push(`.${n}`),
      rr(() => {
        console.warn(
          "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.",
        );
      })),
    s.join(",")
  );
}
function nR({
  mask: e,
  unmask: t,
  block: n,
  unblock: r,
  ignore: i,
  blockClass: s,
  blockSelector: o,
  maskTextClass: a,
  maskTextSelector: l,
  ignoreClass: u,
}) {
  const c = ['base[href="/"]'],
    d = xi(e, [".sentry-mask", "[data-sentry-mask]"], a, l),
    f = xi(t, [".sentry-unmask", "[data-sentry-unmask]"]),
    p = {
      maskTextSelector: d,
      unmaskTextSelector: f,
      blockSelector: xi(
        n,
        [".sentry-block", "[data-sentry-block]", ...c],
        s,
        o,
      ),
      unblockSelector: xi(r, [".sentry-unblock", "[data-sentry-unblock]"]),
      ignoreSelector: xi(
        i,
        [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'],
        u,
      ),
    };
  return (
    s instanceof RegExp && (p.blockClass = s),
    a instanceof RegExp && (p.maskTextClass = a),
    p
  );
}
function rR({
  el: e,
  key: t,
  maskAttributes: n,
  maskAllText: r,
  privacyOptions: i,
  value: s,
}) {
  return !r || (i.unmaskTextSelector && e.matches(i.unmaskTextSelector))
    ? s
    : n.includes(t) ||
        (t === "value" &&
          e.tagName === "INPUT" &&
          ["submit", "button"].includes(e.getAttribute("type") || ""))
      ? s.replace(/[\S]/g, "*")
      : s;
}
const fh =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  iR = ["content-length", "content-type", "accept"];
let ph = !1;
class za {
  static __initStatic() {
    this.id = "Replay";
  }
  constructor({
    flushMinDelay: t = B1,
    flushMaxDelay: n = U1,
    minReplayDuration: r = Y1,
    maxReplayDuration: i = Yp,
    stickySession: s = !0,
    useCompression: o = !0,
    workerUrl: a,
    _experiments: l = {},
    sessionSampleRate: u,
    errorSampleRate: c,
    maskAllText: d = !0,
    maskAllInputs: f = !0,
    blockAllMedia: p = !0,
    mutationBreadcrumbLimit: g = 750,
    mutationLimit: _ = 1e4,
    slowClickTimeout: E = 7e3,
    slowClickIgnoreSelectors: h = [],
    networkDetailAllowUrls: m = [],
    networkDetailDenyUrls: y = [],
    networkCaptureBodies: v = !0,
    networkRequestHeaders: w = [],
    networkResponseHeaders: k = [],
    mask: T = [],
    maskAttributes: C = ["title", "placeholder"],
    unmask: N = [],
    block: R = [],
    unblock: $ = [],
    ignore: ne = [],
    maskFn: le,
    beforeAddRecordingEvent: _e,
    beforeErrorSampling: $e,
    blockClass: V,
    blockSelector: Ae,
    maskInputOptions: x,
    maskTextClass: O,
    maskTextSelector: A,
    ignoreClass: re,
  } = {}) {
    this.name = za.id;
    const ie = nR({
      mask: T,
      unmask: N,
      block: R,
      unblock: $,
      ignore: ne,
      blockClass: V,
      blockSelector: Ae,
      maskTextClass: O,
      maskTextSelector: A,
      ignoreClass: re,
    });
    if (
      ((this._recordingOptions = {
        maskAllInputs: f,
        maskAllText: d,
        maskInputOptions: { ...(x || {}), password: !0 },
        maskTextFn: le,
        maskInputFn: le,
        maskAttributeFn: (et, Ye, jt) =>
          rR({
            maskAttributes: C,
            maskAllText: d,
            privacyOptions: ie,
            key: et,
            value: Ye,
            el: jt,
          }),
        ...ie,
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
        errorHandler: (et) => {
          try {
            et.__rrweb__ = !0;
          } catch {}
        },
      }),
      (this._initialOptions = {
        flushMinDelay: t,
        flushMaxDelay: n,
        minReplayDuration: Math.min(r, q1),
        maxReplayDuration: Math.min(i, Yp),
        stickySession: s,
        sessionSampleRate: u,
        errorSampleRate: c,
        useCompression: o,
        workerUrl: a,
        blockAllMedia: p,
        maskAllInputs: f,
        maskAllText: d,
        mutationBreadcrumbLimit: g,
        mutationLimit: _,
        slowClickTimeout: E,
        slowClickIgnoreSelectors: h,
        networkDetailAllowUrls: m,
        networkDetailDenyUrls: y,
        networkCaptureBodies: v,
        networkRequestHeaders: hh(w),
        networkResponseHeaders: hh(k),
        beforeAddRecordingEvent: _e,
        beforeErrorSampling: $e,
        _experiments: l,
      }),
      typeof u == "number" &&
        (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${u} })`),
        (this._initialOptions.sessionSampleRate = u)),
      typeof c == "number" &&
        (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${c} })`),
        (this._initialOptions.errorSampleRate = c)),
      this._initialOptions.blockAllMedia &&
        (this._recordingOptions.blockSelector = this._recordingOptions
          .blockSelector
          ? `${this._recordingOptions.blockSelector},${fh}`
          : fh),
      this._isInitialized && dp())
    )
      throw new Error(
        "Multiple Sentry Session Replay instances are not supported",
      );
    this._isInitialized = !0;
  }
  get _isInitialized() {
    return ph;
  }
  set _isInitialized(t) {
    ph = t;
  }
  setupOnce() {
    dp() && (this._setup(), setTimeout(() => this._initialize()));
  }
  start() {
    this._replay && this._replay.start();
  }
  startBuffering() {
    this._replay && this._replay.startBuffering();
  }
  stop() {
    return this._replay
      ? this._replay.stop({
          forceFlush: this._replay.recordingMode === "session",
        })
      : Promise.resolve();
  }
  flush(t) {
    return !this._replay || !this._replay.isEnabled()
      ? Promise.resolve()
      : this._replay.sendBufferedReplayOrFlush(t);
  }
  getReplayId() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.getSessionId();
  }
  _initialize() {
    this._replay &&
      (this._maybeLoadFromReplayCanvasIntegration(),
      this._replay.initializeSampling());
  }
  _setup() {
    const t = sR(this._initialOptions);
    this._replay = new pn({
      options: t,
      recordingOptions: this._recordingOptions,
    });
  }
  _maybeLoadFromReplayCanvasIntegration() {
    try {
      const n = q().getIntegrationByName("ReplayCanvas");
      if (!n) return;
      this._replay._canvas = n.getOptions();
    } catch {}
  }
}
za.__initStatic();
function sR(e) {
  const t = q(),
    n = t && t.getOptions(),
    r = { sessionSampleRate: 0, errorSampleRate: 0, ...He(e) };
  return n
    ? (e.sessionSampleRate == null &&
        e.errorSampleRate == null &&
        n.replaysSessionSampleRate == null &&
        n.replaysOnErrorSampleRate == null &&
        rr(() => {
          console.warn(
            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
          );
        }),
      typeof n.replaysSessionSampleRate == "number" &&
        (r.sessionSampleRate = n.replaysSessionSampleRate),
      typeof n.replaysOnErrorSampleRate == "number" &&
        (r.errorSampleRate = n.replaysOnErrorSampleRate),
      r)
    : (rr(() => {
        console.warn("SDK client is not available.");
      }),
      r);
}
function hh(e) {
  return [...iR, ...e.map((t) => t.toLowerCase())];
}
function oR(e) {
  const t = { ...e };
  (xy(t, "react"), P1(t));
}
var b_ = { exports: {} },
  X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ne = typeof Symbol == "function" && Symbol.for,
  Ad = Ne ? Symbol.for("react.element") : 60103,
  bd = Ne ? Symbol.for("react.portal") : 60106,
  Ba = Ne ? Symbol.for("react.fragment") : 60107,
  Ua = Ne ? Symbol.for("react.strict_mode") : 60108,
  ja = Ne ? Symbol.for("react.profiler") : 60114,
  Ha = Ne ? Symbol.for("react.provider") : 60109,
  Wa = Ne ? Symbol.for("react.context") : 60110,
  Pd = Ne ? Symbol.for("react.async_mode") : 60111,
  Va = Ne ? Symbol.for("react.concurrent_mode") : 60111,
  Ga = Ne ? Symbol.for("react.forward_ref") : 60112,
  Ya = Ne ? Symbol.for("react.suspense") : 60113,
  aR = Ne ? Symbol.for("react.suspense_list") : 60120,
  qa = Ne ? Symbol.for("react.memo") : 60115,
  Ka = Ne ? Symbol.for("react.lazy") : 60116,
  lR = Ne ? Symbol.for("react.block") : 60121,
  uR = Ne ? Symbol.for("react.fundamental") : 60117,
  cR = Ne ? Symbol.for("react.responder") : 60118,
  dR = Ne ? Symbol.for("react.scope") : 60119;
function ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ad:
        switch (((e = e.type), e)) {
          case Pd:
          case Va:
          case Ba:
          case ja:
          case Ua:
          case Ya:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Wa:
              case Ga:
              case Ka:
              case qa:
              case Ha:
                return e;
              default:
                return t;
            }
        }
      case bd:
        return t;
    }
  }
}
function P_(e) {
  return ct(e) === Va;
}
X.AsyncMode = Pd;
X.ConcurrentMode = Va;
X.ContextConsumer = Wa;
X.ContextProvider = Ha;
X.Element = Ad;
X.ForwardRef = Ga;
X.Fragment = Ba;
X.Lazy = Ka;
X.Memo = qa;
X.Portal = bd;
X.Profiler = ja;
X.StrictMode = Ua;
X.Suspense = Ya;
X.isAsyncMode = function (e) {
  return P_(e) || ct(e) === Pd;
};
X.isConcurrentMode = P_;
X.isContextConsumer = function (e) {
  return ct(e) === Wa;
};
X.isContextProvider = function (e) {
  return ct(e) === Ha;
};
X.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ad;
};
X.isForwardRef = function (e) {
  return ct(e) === Ga;
};
X.isFragment = function (e) {
  return ct(e) === Ba;
};
X.isLazy = function (e) {
  return ct(e) === Ka;
};
X.isMemo = function (e) {
  return ct(e) === qa;
};
X.isPortal = function (e) {
  return ct(e) === bd;
};
X.isProfiler = function (e) {
  return ct(e) === ja;
};
X.isStrictMode = function (e) {
  return ct(e) === Ua;
};
X.isSuspense = function (e) {
  return ct(e) === Ya;
};
X.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ba ||
    e === Va ||
    e === ja ||
    e === Ua ||
    e === Ya ||
    e === aR ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ka ||
        e.$$typeof === qa ||
        e.$$typeof === Ha ||
        e.$$typeof === Wa ||
        e.$$typeof === Ga ||
        e.$$typeof === uR ||
        e.$$typeof === cR ||
        e.$$typeof === dR ||
        e.$$typeof === lR))
  );
};
X.typeOf = ct;
b_.exports = X;
var fR = b_.exports,
  Ld = fR,
  pR = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  hR = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  mR = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  L_ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Fd = {};
Fd[Ld.ForwardRef] = mR;
Fd[Ld.Memo] = L_;
function mh(e) {
  return Ld.isMemo(e) ? L_ : Fd[e.$$typeof] || pR;
}
var gR = Object.defineProperty,
  yR = Object.getOwnPropertyNames,
  gh = Object.getOwnPropertySymbols,
  _R = Object.getOwnPropertyDescriptor,
  vR = Object.getPrototypeOf,
  yh = Object.prototype;
function F_(e, t, n) {
  if (typeof t != "string") {
    if (yh) {
      var r = vR(t);
      r && r !== yh && F_(e, r, n);
    }
    var i = yR(t);
    gh && (i = i.concat(gh(t)));
    for (var s = mh(e), o = mh(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!hR[l] && !(n && n[l]) && !(o && o[l]) && !(s && s[l])) {
        var u = _R(t, l);
        try {
          gR(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
var SR = F_;
const $_ = H_(SR),
  ER = "ui.react.render",
  wR = "ui.react.update",
  kR = "ui.react.mount",
  _h =
    "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/profiler.tsx",
  TR = "unknown";
class z_ extends Ie.Component {
  static __initStatic() {
    this.defaultProps = { disabled: !1, includeRender: !0, includeUpdates: !0 };
  }
  constructor(t) {
    super(t);
    const { name: n, disabled: r = !1 } = this.props;
    r ||
      (this._mountSpan = ji({
        name: `<${n}>`,
        onlyIfParent: !0,
        op: kR,
        origin: "auto.ui.react.profiler",
        attributes: { "ui.component_name": n },
      }));
  }
  componentDidMount() {
    this._mountSpan && this._mountSpan.end();
  }
  shouldComponentUpdate({ updateProps: t, includeUpdates: n = !0 }) {
    if (n && this._mountSpan && t !== this.props.updateProps) {
      const r = Object.keys(t).filter(
        (i) => t[i] !== this.props.updateProps[i],
      );
      if (r.length > 0) {
        const i = sr();
        this._updateSpan = yp(this._mountSpan, () =>
          ji({
            name: `<${this.props.name}>`,
            onlyIfParent: !0,
            op: wR,
            origin: "auto.ui.react.profiler",
            startTimestamp: i,
            attributes: {
              "ui.component_name": this.props.name,
              "ui.react.changed_props": r,
            },
          }),
        );
      }
    }
    return !0;
  }
  componentDidUpdate() {
    this._updateSpan && (this._updateSpan.end(), (this._updateSpan = void 0));
  }
  componentWillUnmount() {
    const t = sr(),
      { name: n, includeRender: r = !0 } = this.props;
    if (this._mountSpan && r) {
      const i = Re(this._mountSpan).timestamp;
      yp(this._mountSpan, () => {
        const s = ji({
          onlyIfParent: !0,
          name: `<${n}>`,
          op: ER,
          origin: "auto.ui.react.profiler",
          startTimestamp: i,
          attributes: { "ui.component_name": n },
        });
        s && s.end(t);
      });
    }
  }
  render() {
    return this.props.children;
  }
}
z_.__initStatic();
function IR(e, t) {
  const n = e.displayName || e.name || TR,
    r = (i) =>
      Ie.createElement(
        z_,
        {
          ...t,
          name: n,
          updateProps: i,
          __self: this,
          __source: { fileName: _h, lineNumber: 159 },
        },
        Ie.createElement(e, {
          ...i,
          __self: this,
          __source: { fileName: _h, lineNumber: 160 },
        }),
      );
  return ((r.displayName = `profiler(${n})`), $_(r, e), r);
}
const CR = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  vh =
    "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx";
function xR(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
const RR = "unknown",
  Sh = { componentStack: null, error: null, eventId: null };
function NR(e, t) {
  const n = new WeakMap();
  function r(i, s) {
    if (!n.has(i)) {
      if (i.cause) return (n.set(i, !0), r(i.cause, s));
      i.cause = s;
    }
  }
  r(e, t);
}
class $d extends Ie.Component {
  constructor(t) {
    (super(t),
      $d.prototype.__init.call(this),
      (this.state = Sh),
      (this._openFallbackReportDialog = !0));
    const n = q();
    n &&
      n.on &&
      t.showDialog &&
      ((this._openFallbackReportDialog = !1),
      n.on("afterSendEvent", (r) => {
        !r.type &&
          r.event_id === this._lastEventId &&
          Vp({ ...t.dialogOptions, eventId: this._lastEventId });
      }));
  }
  componentDidCatch(t, { componentStack: n }) {
    const {
      beforeCapture: r,
      onError: i,
      showDialog: s,
      dialogOptions: o,
    } = this.props;
    dd((a) => {
      if (xR(Ie.version) && Qc(t)) {
        const u = new Error(t.message);
        ((u.name = `React ErrorBoundary ${t.name}`), (u.stack = n), NR(t, u));
      }
      r && r(a, t, n);
      const l = ei(t, {
        captureContext: { contexts: { react: { componentStack: n } } },
        mechanism: { handled: !!this.props.fallback },
      });
      (i && i(t, n, l),
        s &&
          ((this._lastEventId = l),
          this._openFallbackReportDialog && Vp({ ...o, eventId: l })),
        this.setState({ error: t, componentStack: n, eventId: l }));
    });
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t();
  }
  componentWillUnmount() {
    const { error: t, componentStack: n, eventId: r } = this.state,
      { onUnmount: i } = this.props;
    i && i(t, n, r);
  }
  __init() {
    this.resetErrorBoundary = () => {
      const { onReset: t } = this.props,
        { error: n, componentStack: r, eventId: i } = this.state;
      (t && t(n, r, i), this.setState(Sh));
    };
  }
  render() {
    const { fallback: t, children: n } = this.props,
      r = this.state;
    if (r.error) {
      let i;
      return (
        typeof t == "function"
          ? (i = t({
              error: r.error,
              componentStack: r.componentStack,
              resetError: this.resetErrorBoundary,
              eventId: r.eventId,
            }))
          : (i = t),
        Ie.isValidElement(i)
          ? i
          : (t && CR && S.warn("fallback did not produce a valid ReactElement"),
            null)
      );
    }
    return typeof n == "function" ? n() : n;
  }
}
function MR(e, t) {
  const n = e.displayName || e.name || RR,
    r = (i) =>
      Ie.createElement(
        $d,
        { ...t, __self: this, __source: { fileName: vh, lineNumber: 240 } },
        Ie.createElement(e, {
          ...i,
          __self: this,
          __source: { fileName: vh, lineNumber: 241 },
        }),
      );
  return ((r.displayName = `errorBoundary(${n})`), $_(r, e), r);
}
function OR() {
  console.log("Telemetry initialized - OpenTelemetry ready for production");
}
/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var DR = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AR = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ns = (e, t) => {
    const n = Ie.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...u
        },
        c,
      ) =>
        Ie.createElement(
          "svg",
          {
            ref: c,
            ...DR,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(i) : s,
            className: ["lucide", `lucide-${AR(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([d, f]) => Ie.createElement(d, f)),
            ...(Array.isArray(l) ? l : [l]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bR = Ns("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
]);
/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PR = Ns("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LR = Ns("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FR = Ns("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eh = Ns("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ]),
  wh = {
    startSpan: (e) => ({
      setStatus: (t) => {},
      end: () => {},
      spanContext: () => ({
        traceId: `otel-${Math.random().toString(36).substr(2, 16)}`,
      }),
    }),
  };
function $R() {
  const [e, t] = Ie.useState(null),
    [n, r] = Ie.useState([]),
    [i, s] = Ie.useState([]);
  Ie.useEffect(() => {
    o();
    const u = setInterval(o, 5e3);
    return () => clearInterval(u);
  }, []);
  const o = async () => {
      const u = wh.startSpan("health-check");
      try {
        const d = await (await fetch("/api/health")).json();
        (t(d), u.setStatus({ code: 1 }));
      } catch (c) {
        (ei(c),
          s((d) => [
            ...d.slice(-4),
            {
              timestamp: Date.now(),
              message: String(c),
              traceId: u.spanContext().traceId,
            },
          ]));
      } finally {
      }
    },
    a = async () => {
      const u = Math.floor(Math.random() * 9e4) + 1e4,
        c = wh.startSpan("download-start"),
        d = c.spanContext().traceId,
        f = {
          id: crypto.randomUUID(),
          fileId: u,
          status: "processing",
          startTime: Date.now(),
          traceId: d,
        };
      r((p) => [f, ...p.slice(0, 4)]);
      try {
        const g = await (
          await fetch("/api/v1/download/start", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_id: u }),
          })
        ).json();
        (r((_) =>
          _.map((E) =>
            E.id === f.id
              ? {
                  ...E,
                  status: g.status === "completed" ? "completed" : "failed",
                }
              : E,
          ),
        ),
          c.setStatus({ code: 1 }));
      } catch (p) {
        (ei(p, {
          tags: { fileId: u, traceId: d },
          contexts: { download: { fileId: u, jobId: f.id } },
        }),
          r((g) =>
            g.map((_) => (_.id === f.id ? { ..._, status: "failed" } : _)),
          ));
      } finally {
      }
    },
    l = async () => {
      try {
        await fetch("/api/v1/download/check?sentry_test=true", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file_id: 7e4 }),
        });
      } catch {}
    };
  return P.jsxs("div", {
    style: { padding: "20px", fontFamily: "system-ui" },
    children: [
      P.jsx("h1", { children: "🔍 Delineate Observability Dashboard" }),
      P.jsxs("div", {
        style: {
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        },
        children: [
          P.jsx("h2", { children: "🏥 Health Status" }),
          e
            ? P.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: "10px" },
                children: [
                  e.status === "healthy"
                    ? P.jsx(LR, { color: "green", size: 20 })
                    : P.jsx(PR, { color: "red", size: 20 }),
                  P.jsxs("span", { children: ["API: ", e.status] }),
                  P.jsxs("span", { children: ["Storage: ", e.checks.storage] }),
                ],
              })
            : P.jsx("span", { children: "Loading..." }),
        ],
      }),
      P.jsxs("div", {
        style: {
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        },
        children: [
          P.jsx("h2", { children: "📥 Download Jobs" }),
          P.jsxs("button", {
            onClick: a,
            style: {
              marginBottom: "10px",
              padding: "8px 16px",
              cursor: "pointer",
            },
            children: [
              P.jsx(FR, { size: 16, style: { marginRight: "5px" } }),
              "Start Download",
            ],
          }),
          n.map((u) =>
            P.jsxs(
              "div",
              {
                style: {
                  padding: "10px",
                  margin: "5px 0",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
                children: [
                  P.jsxs("div", {
                    children: [
                      P.jsxs("strong", { children: ["File ", u.fileId] }),
                      P.jsx("span", {
                        style: {
                          marginLeft: "10px",
                          color:
                            u.status === "completed"
                              ? "green"
                              : u.status === "failed"
                                ? "red"
                                : "orange",
                        },
                        children: u.status,
                      }),
                    ],
                  }),
                  P.jsx("div", {
                    style: { fontSize: "12px", color: "#666" },
                    children:
                      u.traceId &&
                      P.jsxs("span", {
                        children: ["Trace: ", u.traceId.slice(0, 8), "..."],
                      }),
                  }),
                ],
              },
              u.id,
            ),
          ),
        ],
      }),
      P.jsxs("div", {
        style: {
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        },
        children: [
          P.jsx("h2", { children: "🚨 Error Log" }),
          P.jsx("button", {
            onClick: l,
            style: {
              marginBottom: "10px",
              padding: "8px 16px",
              cursor: "pointer",
              backgroundColor: "#ff6b6b",
              color: "white",
              border: "none",
              borderRadius: "4px",
            },
            children: "Trigger Test Error",
          }),
          i.map((u, c) =>
            P.jsxs(
              "div",
              {
                style: {
                  padding: "8px",
                  margin: "5px 0",
                  backgroundColor: "#ffe6e6",
                  borderRadius: "4px",
                  fontSize: "14px",
                },
                children: [
                  P.jsxs("div", {
                    children: [
                      new Date(u.timestamp).toLocaleTimeString(),
                      ": ",
                      u.message,
                    ],
                  }),
                  u.traceId &&
                    P.jsxs("div", {
                      style: { fontSize: "12px", color: "#666" },
                      children: ["Trace: ", u.traceId],
                    }),
                ],
              },
              c,
            ),
          ),
        ],
      }),
      P.jsxs("div", {
        style: {
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        },
        children: [
          P.jsx("h2", { children: "🔗 External Tools" }),
          P.jsxs("div", {
            style: { display: "flex", gap: "10px" },
            children: [
              P.jsxs("a", {
                href: "http://localhost:16686",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                },
                children: [
                  P.jsx(bR, { size: 16 }),
                  "Jaeger UI",
                  P.jsx(Eh, { size: 14 }),
                ],
              }),
              P.jsxs("a", {
                href: "http://localhost:3000/docs",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                },
                children: ["📚 API Docs", P.jsx(Eh, { size: 14 })],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const zR = IR($R);
OR();
oR({
  dsn: "",
  environment: "production",
  integrations: [new fT(), new za()],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
});
const BR = MR(zR, {
  fallback: ({ error: e, resetError: t }) =>
    P.jsxs("div", {
      style: { padding: "20px", textAlign: "center" },
      children: [
        P.jsx("h2", { children: "Something went wrong" }),
        P.jsx("p", { children: e.message }),
        P.jsx("button", { onClick: t, children: "Try again" }),
      ],
    }),
  beforeCapture: (e) => {
    e.setTag("component", "App");
  },
});
Pl.createRoot(document.getElementById("root")).render(
  P.jsx(Ie.StrictMode, { children: P.jsx(BR, {}) }),
);
