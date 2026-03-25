import { r as reactExports, b as React, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { C as CopyButton } from "./copy-button-w-Carjcl.js";
import { B as Button } from "./button-BOH66nN-.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, d as FormControl, e as FormMessage, c as FormLabel } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { L as Label } from "./label-D6GrbpFd.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-GailCAaU.js";
import { f as createLucideIcon, a as useDirDetection, g as useTheme, e as useCreateCoreConfig, u as useModifyCoreConfig, t as toast, c as cn, q as queryClient } from "./index-C_i3x-Gf.js";
import { i as isEmptyObject } from "./isEmptyObject-Ce3qPfrc.js";
import { _ as __vitePreload, u as useTranslation } from "./i18n-C0-IFBIH.js";
import { d as debounce } from "./debounce-DDhqqvFm.js";
import { S as Shield } from "./shield-B15rcL-H.js";
import { I as Info } from "./info-DijVEiOM.js";
import { S as Sparkles } from "./sparkles-Dy4LjvEF.js";
import "./tooltip-BT7me4NQ.js";
import "./radix-3Azqn93X.js";
import "./use-clipboard-C58gzIEw.js";
import "./check-ayw17ogi.js";
import "./copy-yeuAYUwv.js";
import "./link-DcyOR6Xn.js";
import "./x-C6aLLO-Y.js";
import "./types-CANcSf0A.js";
import "./chevron-down-CYTM5oAI.js";
import "./react-query-DMC2nZO-.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
const Key = createLucideIcon("Key", [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
]);
const Maximize2 = createLucideIcon("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Minimize2 = createLucideIcon("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const MLDSA65_SEED_LENGTH = 32;
const BASE64_CHUNK_SIZE = 32768;
let mlDsa65Promise = null;
const base64UrlEncode = (bytes) => {
  if (typeof window === "undefined") {
    throw new Error("ML-DSA-65 generation is only supported in the browser runtime");
  }
  let binary = "";
  const length = bytes.length;
  for (let i = 0; i < length; i += BASE64_CHUNK_SIZE) {
    const chunk = bytes.subarray(i, i + BASE64_CHUNK_SIZE);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};
const loadMlDsa65 = async () => {
  if (!mlDsa65Promise) {
    mlDsa65Promise = (async () => {
      const attemptLoaders = [
        async () => (await __vitePreload(async () => {
          const { ml_dsa65 } = await import("./ml-dsa-C353tdov.js");
          return { ml_dsa65 };
        }, true ? [] : void 0)).ml_dsa65,
        async () => (await __vitePreload(async () => {
          const { default: __vite_default__ } = await import("./ml-dsa-C353tdov.js");
          return { default: __vite_default__ };
        }, true ? [] : void 0)).default,
        async () => await __vitePreload(() => import("./ml-dsa-C353tdov.js"), true ? [] : void 0),
        async () => (await __vitePreload(async () => {
          const { ml_dsa65 } = await import("./index-BQzrUxzF.js");
          return { ml_dsa65 };
        }, true ? [] : void 0)).ml_dsa65,
        async () => (await __vitePreload(async () => {
          const { ml_dsa } = await import("./index-BQzrUxzF.js");
          return { ml_dsa };
        }, true ? [] : void 0)).ml_dsa?.ml_dsa65,
        async () => (await __vitePreload(async () => {
          const { ml_dsa } = await import("./index-BQzrUxzF.js");
          return { ml_dsa };
        }, true ? [] : void 0)).ml_dsa
      ];
      for (const loader2 of attemptLoaders) {
        try {
          const mod = await loader2();
          if (!mod) continue;
          if (mod.ml_dsa65) return mod.ml_dsa65;
          return mod;
        } catch {
        }
      }
      throw new Error("Unable to load @noble/post-quantum ML-DSA-65 implementation");
    })();
  }
  return mlDsa65Promise;
};
const executeWithSeed = async (impl, seed) => {
  const candidates = [
    impl.keypairFromSeed,
    impl.keyPairFromSeed,
    impl.seedKeypair,
    impl.seedKeyPair,
    impl.fromSeed,
    impl.keypair,
    impl.keyPair,
    impl.keygen,
    impl.keyGen,
    impl.generateKeypair,
    impl.generateKeyPair
  ].filter(Boolean);
  for (const fn of candidates) {
    try {
      const result = fn.length > 0 ? fn(seed) : fn();
      if (result) {
        return await Promise.resolve(result);
      }
    } catch (error) {
      console.warn("[ML-DSA-65] Key generation attempt failed, trying fallback", error);
    }
  }
  throw new Error("ML-DSA-65 key generation failed: compatible function not found");
};
const unwrapPublicKey = (keypair) => {
  if (keypair instanceof Uint8Array) {
    return keypair;
  }
  const candidateKeys = ["publicKey", "public", "verify", "verificationKey", "pk"];
  if (keypair && typeof keypair === "object") {
    for (const property of candidateKeys) {
      const value = keypair[property];
      if (value instanceof Uint8Array) {
        return value;
      }
    }
    if (Array.isArray(keypair)) {
      const arrayCandidate = keypair.find((item) => item instanceof Uint8Array);
      if (arrayCandidate instanceof Uint8Array) {
        return arrayCandidate;
      }
    }
    if (keypair.keypair) {
      return unwrapPublicKey(keypair.keypair);
    }
  }
  throw new Error("Unable to extract ML-DSA-65 public key from generated keypair");
};
const ensureSeed = (seed) => {
  const generated = new Uint8Array(MLDSA65_SEED_LENGTH);
  crypto.getRandomValues(generated);
  return { bytes: generated, encoded: base64UrlEncode(generated) };
};
const generateMldsa65 = async (seed) => {
  if (typeof window === "undefined") {
    throw new Error("ML-DSA-65 generation requires a browser environment");
  }
  const implementation = await loadMlDsa65();
  const { bytes: seedBytes, encoded } = ensureSeed();
  const keypair = await executeWithSeed(implementation, seedBytes);
  const publicKey = unwrapPublicKey(keypair);
  return {
    seed: encoded,
    verify: base64UrlEncode(publicKey)
  };
};
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l2) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l2) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l2); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose$1() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
}
function curry$1(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject$1(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject$1(changes)) errorHandler$1("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler$1("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler$1("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject$1(handler))) errorHandler$1("handlerType");
  if (isObject$1(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  })) errorHandler$1("handlersType");
}
function validateInitial(initial) {
  if (!initial) errorHandler$1("initialIsRequired");
  if (!isObject$1(initial)) errorHandler$1("initialType");
  if (isEmpty(initial)) errorHandler$1("initialContent");
}
function throwError$1(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}
var errorMessages$1 = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
var validators$1 = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators$1.initial(initial);
  validators$1.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry$1(didStateUpdate)(state, handler);
  var update = curry$1(updateState)(state);
  var validate = curry$1(validators$1.changes)(initial);
  var getChanges = curry$1(extractChanges)(state);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
      return state2;
    };
    validators$1.selector(selector);
    return selector(state.current);
  }
  function setState2(causedChanges) {
    compose$1(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create
};
var config$1 = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"
  }
};
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function validateConfig(config2) {
  if (!config2) errorHandler("configIsRequired");
  if (!isObject(config2)) errorHandler("configType");
  if (config2.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config2.urls.monacoBase
      }
    };
  }
  return config2;
}
function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}
function throwError(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}
var errorMessages = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  config: validateConfig
};
var compose = function compose2() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
};
function merge(target, source) {
  Object.keys(source).forEach(function(key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2$1(_objectSpread2$1({}, target), source);
}
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var _excluded = ["monaco"];
var _state$create = index.create({
  config: config$1,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}), _state$create2 = _slicedToArray(_state$create, 2), getState = _state$create2[0], setState = _state$create2[1];
function config(globalConfig) {
  var _validators$config = validators.config(globalConfig), monaco = _validators$config.monaco, config2 = _objectWithoutProperties(_validators$config, _excluded);
  setState(function(state) {
    return {
      config: merge(state.config, config2),
      monaco
    };
  });
}
function init() {
  var state = getState(function(_ref) {
    var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
    return {
      monaco,
      isInitialized,
      resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return makeCancelable(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return makeCancelable(wrapperPromise);
    }
    compose(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return makeCancelable(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state = getState(function(_ref2) {
    var config2 = _ref2.config, reject = _ref2.reject;
    return {
      config: config2,
      reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
function configureLoader() {
  var state = getState(function(_ref3) {
    var config2 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config2,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state.config);
  require2(["vs/editor/editor.main"], function(loaded) {
    var monaco = loaded.m || loaded;
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function(error) {
    state.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config,
  init,
  __getMonacoInstance
};
var le = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, v = le;
var ae = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, Y = ae;
function Me({ children: e }) {
  return React.createElement("div", { style: Y.container }, e);
}
var Z = Me;
var $ = Z;
function Ee({ width: e, height: r, isEditorReady: n, loading: t, _ref: a, className: m, wrapperProps: E }) {
  return React.createElement("section", { style: { ...v.wrapper, width: e, height: r }, ...E }, !n && React.createElement($, null, t), React.createElement("div", { ref: a, style: { ...v.fullWidth, ...!n && v.hide }, className: m }));
}
var ee = Ee;
var H = reactExports.memo(ee);
function Ce(e) {
  reactExports.useEffect(e, []);
}
var k = Ce;
function he(e, r, n = true) {
  let t = reactExports.useRef(true);
  reactExports.useEffect(t.current || !n ? () => {
    t.current = false;
  } : e, r);
}
var l = he;
function D() {
}
function h(e, r, n, t) {
  return De(e, t) || be(e, r, n, t);
}
function De(e, r) {
  return e.editor.getModel(te(e, r));
}
function be(e, r, n, t) {
  return e.editor.createModel(r, n, t ? te(e, t) : void 0);
}
function te(e, r) {
  return e.Uri.parse(r);
}
function Oe({ original: e, modified: r, language: n, originalLanguage: t, modifiedLanguage: a, originalModelPath: m, modifiedModelPath: E, keepCurrentOriginalModel: g = false, keepCurrentModifiedModel: N2 = false, theme: x = "light", loading: P = "Loading...", options: y = {}, height: V = "100%", width: z = "100%", className: F, wrapperProps: j = {}, beforeMount: A = D, onMount: q = D }) {
  let [M, O] = reactExports.useState(false), [T, s] = reactExports.useState(true), u = reactExports.useRef(null), c = reactExports.useRef(null), w = reactExports.useRef(null), d = reactExports.useRef(q), o = reactExports.useRef(A), b = reactExports.useRef(false);
  k(() => {
    let i = loader.init();
    return i.then((f) => (c.current = f) && s(false)).catch((f) => f?.type !== "cancelation" && console.error("Monaco initialization: error:", f)), () => u.current ? I() : i.cancel();
  }), l(() => {
    if (u.current && c.current) {
      let i = u.current.getOriginalEditor(), f = h(c.current, e || "", t || n || "text", m || "");
      f !== i.getModel() && i.setModel(f);
    }
  }, [m], M), l(() => {
    if (u.current && c.current) {
      let i = u.current.getModifiedEditor(), f = h(c.current, r || "", a || n || "text", E || "");
      f !== i.getModel() && i.setModel(f);
    }
  }, [E], M), l(() => {
    let i = u.current.getModifiedEditor();
    i.getOption(c.current.editor.EditorOption.readOnly) ? i.setValue(r || "") : r !== i.getValue() && (i.executeEdits("", [{ range: i.getModel().getFullModelRange(), text: r || "", forceMoveMarkers: true }]), i.pushUndoStop());
  }, [r], M), l(() => {
    u.current?.getModel()?.original.setValue(e || "");
  }, [e], M), l(() => {
    let { original: i, modified: f } = u.current.getModel();
    c.current.editor.setModelLanguage(i, t || n || "text"), c.current.editor.setModelLanguage(f, a || n || "text");
  }, [n, t, a], M), l(() => {
    c.current?.editor.setTheme(x);
  }, [x], M), l(() => {
    u.current?.updateOptions(y);
  }, [y], M);
  let L = reactExports.useCallback(() => {
    if (!c.current) return;
    o.current(c.current);
    let i = h(c.current, e || "", t || n || "text", m || ""), f = h(c.current, r || "", a || n || "text", E || "");
    u.current?.setModel({ original: i, modified: f });
  }, [n, r, a, e, t, m, E]), U = reactExports.useCallback(() => {
    !b.current && w.current && (u.current = c.current.editor.createDiffEditor(w.current, { automaticLayout: true, ...y }), L(), c.current?.editor.setTheme(x), O(true), b.current = true);
  }, [y, x, L]);
  reactExports.useEffect(() => {
    M && d.current(u.current, c.current);
  }, [M]), reactExports.useEffect(() => {
    !T && !M && U();
  }, [T, M, U]);
  function I() {
    let i = u.current?.getModel();
    g || i?.original?.dispose(), N2 || i?.modified?.dispose(), u.current?.dispose();
  }
  return React.createElement(H, { width: z, height: V, isEditorReady: M, loading: P, _ref: w, className: F, wrapperProps: j });
}
var ie = Oe;
reactExports.memo(ie);
function He(e) {
  let r = reactExports.useRef();
  return reactExports.useEffect(() => {
    r.current = e;
  }, [e]), r.current;
}
var se = He;
var _ = /* @__PURE__ */ new Map();
function Ve({ defaultValue: e, defaultLanguage: r, defaultPath: n, value: t, language: a, path: m, theme: E = "light", line: g, loading: N2 = "Loading...", options: x = {}, overrideServices: P = {}, saveViewState: y = true, keepCurrentModel: V = false, width: z = "100%", height: F = "100%", className: j, wrapperProps: A = {}, beforeMount: q = D, onMount: M = D, onChange: O, onValidate: T = D }) {
  let [s, u] = reactExports.useState(false), [c, w] = reactExports.useState(true), d = reactExports.useRef(null), o = reactExports.useRef(null), b = reactExports.useRef(null), L = reactExports.useRef(M), U = reactExports.useRef(q), I = reactExports.useRef(), i = reactExports.useRef(t), f = se(m), Q2 = reactExports.useRef(false), B = reactExports.useRef(false);
  k(() => {
    let p = loader.init();
    return p.then((R) => (d.current = R) && w(false)).catch((R) => R?.type !== "cancelation" && console.error("Monaco initialization: error:", R)), () => o.current ? pe() : p.cancel();
  }), l(() => {
    let p = h(d.current, e || t || "", r || a || "", m || n || "");
    p !== o.current?.getModel() && (y && _.set(f, o.current?.saveViewState()), o.current?.setModel(p), y && o.current?.restoreViewState(_.get(m)));
  }, [m], s), l(() => {
    o.current?.updateOptions(x);
  }, [x], s), l(() => {
    !o.current || t === void 0 || (o.current.getOption(d.current.editor.EditorOption.readOnly) ? o.current.setValue(t) : t !== o.current.getValue() && (B.current = true, o.current.executeEdits("", [{ range: o.current.getModel().getFullModelRange(), text: t, forceMoveMarkers: true }]), o.current.pushUndoStop(), B.current = false));
  }, [t], s), l(() => {
    let p = o.current?.getModel();
    p && a && d.current?.editor.setModelLanguage(p, a);
  }, [a], s), l(() => {
    g !== void 0 && o.current?.revealLine(g);
  }, [g], s), l(() => {
    d.current?.editor.setTheme(E);
  }, [E], s);
  let X = reactExports.useCallback(() => {
    if (!(!b.current || !d.current) && !Q2.current) {
      U.current(d.current);
      let p = m || n, R = h(d.current, t || e || "", r || a || "", p || "");
      o.current = d.current?.editor.create(b.current, { model: R, automaticLayout: true, ...x }, P), y && o.current.restoreViewState(_.get(p)), d.current.editor.setTheme(E), g !== void 0 && o.current.revealLine(g), u(true), Q2.current = true;
    }
  }, [e, r, n, t, a, m, x, P, y, E, g]);
  reactExports.useEffect(() => {
    s && L.current(o.current, d.current);
  }, [s]), reactExports.useEffect(() => {
    !c && !s && X();
  }, [c, s, X]), i.current = t, reactExports.useEffect(() => {
    s && O && (I.current?.dispose(), I.current = o.current?.onDidChangeModelContent((p) => {
      B.current || O(o.current.getValue(), p);
    }));
  }, [s, O]), reactExports.useEffect(() => {
    if (s) {
      let p = d.current.editor.onDidChangeMarkers((R) => {
        let G = o.current.getModel()?.uri;
        if (G && R.find((J) => J.path === G.path)) {
          let J = d.current.editor.getModelMarkers({ resource: G });
          T?.(J);
        }
      });
      return () => {
        p?.dispose();
      };
    }
    return () => {
    };
  }, [s, T]);
  function pe() {
    I.current?.dispose(), V ? y && _.set(m, o.current.saveViewState()) : o.current.getModel()?.dispose(), o.current.dispose();
  }
  return React.createElement(H, { width: z, height: F, isEditorReady: s, loading: N2, _ref: b, className: j, wrapperProps: A });
}
var fe = Ve;
var de = reactExports.memo(fe);
var Ft = de;
const INVALID_BYTE = 256;
class Coder {
  _paddingCharacter;
  // TODO(dchest): methods to encode chunk-by-chunk.
  constructor(_paddingCharacter = "=") {
    this._paddingCharacter = _paddingCharacter;
  }
  encodedLength(length) {
    if (!this._paddingCharacter) {
      return (length * 8 + 5) / 6 | 0;
    }
    return (length + 2) / 3 * 4 | 0;
  }
  encode(data) {
    let out = "";
    let i = 0;
    for (; i < data.length - 2; i += 3) {
      let c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      out += this._encodeByte(c >>> 1 * 6 & 63);
      out += this._encodeByte(c >>> 0 * 6 & 63);
    }
    const left = data.length - i;
    if (left > 0) {
      let c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      if (left === 2) {
        out += this._encodeByte(c >>> 1 * 6 & 63);
      } else {
        out += this._paddingCharacter || "";
      }
      out += this._paddingCharacter || "";
    }
    return out;
  }
  maxDecodedLength(length) {
    if (!this._paddingCharacter) {
      return (length * 6 + 7) / 8 | 0;
    }
    return length / 4 * 3 | 0;
  }
  decodedLength(s) {
    return this.maxDecodedLength(s.length - this._getPaddingLength(s));
  }
  decode(s) {
    if (s.length === 0) {
      return new Uint8Array(0);
    }
    const paddingLength = this._getPaddingLength(s);
    const length = s.length - paddingLength;
    const out = new Uint8Array(this.maxDecodedLength(length));
    let op = 0;
    let i = 0;
    let haveBad = 0;
    let v0 = 0, v1 = 0, v2 = 0, v3 = 0;
    for (; i < length - 4; i += 4) {
      v0 = this._decodeChar(s.charCodeAt(i + 0));
      v1 = this._decodeChar(s.charCodeAt(i + 1));
      v2 = this._decodeChar(s.charCodeAt(i + 2));
      v3 = this._decodeChar(s.charCodeAt(i + 3));
      out[op++] = v0 << 2 | v1 >>> 4;
      out[op++] = v1 << 4 | v2 >>> 2;
      out[op++] = v2 << 6 | v3;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
      haveBad |= v2 & INVALID_BYTE;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (i < length - 1) {
      v0 = this._decodeChar(s.charCodeAt(i));
      v1 = this._decodeChar(s.charCodeAt(i + 1));
      out[op++] = v0 << 2 | v1 >>> 4;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
    }
    if (i < length - 2) {
      v2 = this._decodeChar(s.charCodeAt(i + 2));
      out[op++] = v1 << 4 | v2 >>> 2;
      haveBad |= v2 & INVALID_BYTE;
    }
    if (i < length - 3) {
      v3 = this._decodeChar(s.charCodeAt(i + 3));
      out[op++] = v2 << 6 | v3;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (haveBad !== 0) {
      throw new Error("Base64Coder: incorrect characters for decoding");
    }
    return out;
  }
  // Standard encoding have the following encoded/decoded ranges,
  // which we need to convert between.
  //
  // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
  // Index:   0 - 25                    26 - 51              52 - 61   62  63
  // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
  //
  // Encode 6 bits in b into a new character.
  _encodeByte(b) {
    let result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
    result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
    return String.fromCharCode(result);
  }
  // Decode a character code into a byte.
  // Must return 256 if character is out of alphabet range.
  _decodeChar(c) {
    let result = INVALID_BYTE;
    result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
    result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  }
  _getPaddingLength(s) {
    let paddingLength = 0;
    if (this._paddingCharacter) {
      for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== this._paddingCharacter) {
          break;
        }
        paddingLength++;
      }
      if (s.length < 4 || paddingLength > 2) {
        throw new Error("Base64Coder: incorrect padding");
      }
    }
    return paddingLength;
  }
}
class URLSafeCoder extends Coder {
  // URL-safe encoding have the following encoded/decoded ranges:
  //
  // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
  // Index:   0 - 25                    26 - 51              52 - 61   62  63
  // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
  //
  _encodeByte(b) {
    let result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
    result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
    return String.fromCharCode(result);
  }
  _decodeChar(c) {
    let result = INVALID_BYTE;
    result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
    result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  }
}
const urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
  return urlSafeCoder.encode(data);
}
const QUOTA = 65536;
class SystemRandomSource {
  isAvailable = false;
  isInstantiated = false;
  constructor() {
    if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
      this.isAvailable = true;
      this.isInstantiated = true;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable) {
      throw new Error("System random byte generator is not available.");
    }
    const out = new Uint8Array(length);
    for (let i = 0; i < out.length; i += QUOTA) {
      crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
    }
    return out;
  }
}
function wipe(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
const defaultRandomSource = new SystemRandomSource();
function randomBytes(length, prng = defaultRandomSource) {
  return prng.randomBytes(length);
}
const SECRET_KEY_LENGTH = 32;
function gf(init2) {
  const r = new Float64Array(16);
  if (init2) {
    for (let i = 0; i < init2.length; i++) {
      r[i] = init2[i];
    }
  }
  return r;
}
const _9 = new Uint8Array(32);
_9[0] = 9;
const _121665 = gf([56129, 1]);
function car25519(o) {
  let c = 1;
  for (let i = 0; i < 16; i++) {
    let v2 = o[i] + c + 65535;
    c = Math.floor(v2 / 65536);
    o[i] = v2 - c * 65536;
  }
  o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
  const c = ~(b - 1);
  for (let i = 0; i < 16; i++) {
    const t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}
function pack25519(o, n) {
  const m = gf();
  const t = gf();
  for (let i = 0; i < 16; i++) {
    t[i] = n[i];
  }
  car25519(t);
  car25519(t);
  car25519(t);
  for (let j = 0; j < 2; j++) {
    m[0] = t[0] - 65517;
    for (let i = 1; i < 15; i++) {
      m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
      m[i - 1] &= 65535;
    }
    m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
    const b = m[15] >> 16 & 1;
    m[14] &= 65535;
    sel25519(t, m, 1 - b);
  }
  for (let i = 0; i < 16; i++) {
    o[2 * i] = t[i] & 255;
    o[2 * i + 1] = t[i] >> 8;
  }
}
function unpack25519(o, n) {
  for (let i = 0; i < 16; i++) {
    o[i] = n[2 * i] + (n[2 * i + 1] << 8);
  }
  o[15] &= 32767;
}
function add$1(o, a, b) {
  for (let i = 0; i < 16; i++) {
    o[i] = a[i] + b[i];
  }
}
function sub(o, a, b) {
  for (let i = 0; i < 16; i++) {
    o[i] = a[i] - b[i];
  }
}
function mul(o, a, b) {
  let v2, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  v2 = a[0];
  t0 += v2 * b0;
  t1 += v2 * b1;
  t2 += v2 * b2;
  t3 += v2 * b3;
  t4 += v2 * b4;
  t5 += v2 * b5;
  t6 += v2 * b6;
  t7 += v2 * b7;
  t8 += v2 * b8;
  t9 += v2 * b9;
  t10 += v2 * b10;
  t11 += v2 * b11;
  t12 += v2 * b12;
  t13 += v2 * b13;
  t14 += v2 * b14;
  t15 += v2 * b15;
  v2 = a[1];
  t1 += v2 * b0;
  t2 += v2 * b1;
  t3 += v2 * b2;
  t4 += v2 * b3;
  t5 += v2 * b4;
  t6 += v2 * b5;
  t7 += v2 * b6;
  t8 += v2 * b7;
  t9 += v2 * b8;
  t10 += v2 * b9;
  t11 += v2 * b10;
  t12 += v2 * b11;
  t13 += v2 * b12;
  t14 += v2 * b13;
  t15 += v2 * b14;
  t16 += v2 * b15;
  v2 = a[2];
  t2 += v2 * b0;
  t3 += v2 * b1;
  t4 += v2 * b2;
  t5 += v2 * b3;
  t6 += v2 * b4;
  t7 += v2 * b5;
  t8 += v2 * b6;
  t9 += v2 * b7;
  t10 += v2 * b8;
  t11 += v2 * b9;
  t12 += v2 * b10;
  t13 += v2 * b11;
  t14 += v2 * b12;
  t15 += v2 * b13;
  t16 += v2 * b14;
  t17 += v2 * b15;
  v2 = a[3];
  t3 += v2 * b0;
  t4 += v2 * b1;
  t5 += v2 * b2;
  t6 += v2 * b3;
  t7 += v2 * b4;
  t8 += v2 * b5;
  t9 += v2 * b6;
  t10 += v2 * b7;
  t11 += v2 * b8;
  t12 += v2 * b9;
  t13 += v2 * b10;
  t14 += v2 * b11;
  t15 += v2 * b12;
  t16 += v2 * b13;
  t17 += v2 * b14;
  t18 += v2 * b15;
  v2 = a[4];
  t4 += v2 * b0;
  t5 += v2 * b1;
  t6 += v2 * b2;
  t7 += v2 * b3;
  t8 += v2 * b4;
  t9 += v2 * b5;
  t10 += v2 * b6;
  t11 += v2 * b7;
  t12 += v2 * b8;
  t13 += v2 * b9;
  t14 += v2 * b10;
  t15 += v2 * b11;
  t16 += v2 * b12;
  t17 += v2 * b13;
  t18 += v2 * b14;
  t19 += v2 * b15;
  v2 = a[5];
  t5 += v2 * b0;
  t6 += v2 * b1;
  t7 += v2 * b2;
  t8 += v2 * b3;
  t9 += v2 * b4;
  t10 += v2 * b5;
  t11 += v2 * b6;
  t12 += v2 * b7;
  t13 += v2 * b8;
  t14 += v2 * b9;
  t15 += v2 * b10;
  t16 += v2 * b11;
  t17 += v2 * b12;
  t18 += v2 * b13;
  t19 += v2 * b14;
  t20 += v2 * b15;
  v2 = a[6];
  t6 += v2 * b0;
  t7 += v2 * b1;
  t8 += v2 * b2;
  t9 += v2 * b3;
  t10 += v2 * b4;
  t11 += v2 * b5;
  t12 += v2 * b6;
  t13 += v2 * b7;
  t14 += v2 * b8;
  t15 += v2 * b9;
  t16 += v2 * b10;
  t17 += v2 * b11;
  t18 += v2 * b12;
  t19 += v2 * b13;
  t20 += v2 * b14;
  t21 += v2 * b15;
  v2 = a[7];
  t7 += v2 * b0;
  t8 += v2 * b1;
  t9 += v2 * b2;
  t10 += v2 * b3;
  t11 += v2 * b4;
  t12 += v2 * b5;
  t13 += v2 * b6;
  t14 += v2 * b7;
  t15 += v2 * b8;
  t16 += v2 * b9;
  t17 += v2 * b10;
  t18 += v2 * b11;
  t19 += v2 * b12;
  t20 += v2 * b13;
  t21 += v2 * b14;
  t22 += v2 * b15;
  v2 = a[8];
  t8 += v2 * b0;
  t9 += v2 * b1;
  t10 += v2 * b2;
  t11 += v2 * b3;
  t12 += v2 * b4;
  t13 += v2 * b5;
  t14 += v2 * b6;
  t15 += v2 * b7;
  t16 += v2 * b8;
  t17 += v2 * b9;
  t18 += v2 * b10;
  t19 += v2 * b11;
  t20 += v2 * b12;
  t21 += v2 * b13;
  t22 += v2 * b14;
  t23 += v2 * b15;
  v2 = a[9];
  t9 += v2 * b0;
  t10 += v2 * b1;
  t11 += v2 * b2;
  t12 += v2 * b3;
  t13 += v2 * b4;
  t14 += v2 * b5;
  t15 += v2 * b6;
  t16 += v2 * b7;
  t17 += v2 * b8;
  t18 += v2 * b9;
  t19 += v2 * b10;
  t20 += v2 * b11;
  t21 += v2 * b12;
  t22 += v2 * b13;
  t23 += v2 * b14;
  t24 += v2 * b15;
  v2 = a[10];
  t10 += v2 * b0;
  t11 += v2 * b1;
  t12 += v2 * b2;
  t13 += v2 * b3;
  t14 += v2 * b4;
  t15 += v2 * b5;
  t16 += v2 * b6;
  t17 += v2 * b7;
  t18 += v2 * b8;
  t19 += v2 * b9;
  t20 += v2 * b10;
  t21 += v2 * b11;
  t22 += v2 * b12;
  t23 += v2 * b13;
  t24 += v2 * b14;
  t25 += v2 * b15;
  v2 = a[11];
  t11 += v2 * b0;
  t12 += v2 * b1;
  t13 += v2 * b2;
  t14 += v2 * b3;
  t15 += v2 * b4;
  t16 += v2 * b5;
  t17 += v2 * b6;
  t18 += v2 * b7;
  t19 += v2 * b8;
  t20 += v2 * b9;
  t21 += v2 * b10;
  t22 += v2 * b11;
  t23 += v2 * b12;
  t24 += v2 * b13;
  t25 += v2 * b14;
  t26 += v2 * b15;
  v2 = a[12];
  t12 += v2 * b0;
  t13 += v2 * b1;
  t14 += v2 * b2;
  t15 += v2 * b3;
  t16 += v2 * b4;
  t17 += v2 * b5;
  t18 += v2 * b6;
  t19 += v2 * b7;
  t20 += v2 * b8;
  t21 += v2 * b9;
  t22 += v2 * b10;
  t23 += v2 * b11;
  t24 += v2 * b12;
  t25 += v2 * b13;
  t26 += v2 * b14;
  t27 += v2 * b15;
  v2 = a[13];
  t13 += v2 * b0;
  t14 += v2 * b1;
  t15 += v2 * b2;
  t16 += v2 * b3;
  t17 += v2 * b4;
  t18 += v2 * b5;
  t19 += v2 * b6;
  t20 += v2 * b7;
  t21 += v2 * b8;
  t22 += v2 * b9;
  t23 += v2 * b10;
  t24 += v2 * b11;
  t25 += v2 * b12;
  t26 += v2 * b13;
  t27 += v2 * b14;
  t28 += v2 * b15;
  v2 = a[14];
  t14 += v2 * b0;
  t15 += v2 * b1;
  t16 += v2 * b2;
  t17 += v2 * b3;
  t18 += v2 * b4;
  t19 += v2 * b5;
  t20 += v2 * b6;
  t21 += v2 * b7;
  t22 += v2 * b8;
  t23 += v2 * b9;
  t24 += v2 * b10;
  t25 += v2 * b11;
  t26 += v2 * b12;
  t27 += v2 * b13;
  t28 += v2 * b14;
  t29 += v2 * b15;
  v2 = a[15];
  t15 += v2 * b0;
  t16 += v2 * b1;
  t17 += v2 * b2;
  t18 += v2 * b3;
  t19 += v2 * b4;
  t20 += v2 * b5;
  t21 += v2 * b6;
  t22 += v2 * b7;
  t23 += v2 * b8;
  t24 += v2 * b9;
  t25 += v2 * b10;
  t26 += v2 * b11;
  t27 += v2 * b12;
  t28 += v2 * b13;
  t29 += v2 * b14;
  t30 += v2 * b15;
  t0 += 38 * t16;
  t1 += 38 * t17;
  t2 += 38 * t18;
  t3 += 38 * t19;
  t4 += 38 * t20;
  t5 += 38 * t21;
  t6 += 38 * t22;
  t7 += 38 * t23;
  t8 += 38 * t24;
  t9 += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  c = 1;
  v2 = t0 + c + 65535;
  c = Math.floor(v2 / 65536);
  t0 = v2 - c * 65536;
  v2 = t1 + c + 65535;
  c = Math.floor(v2 / 65536);
  t1 = v2 - c * 65536;
  v2 = t2 + c + 65535;
  c = Math.floor(v2 / 65536);
  t2 = v2 - c * 65536;
  v2 = t3 + c + 65535;
  c = Math.floor(v2 / 65536);
  t3 = v2 - c * 65536;
  v2 = t4 + c + 65535;
  c = Math.floor(v2 / 65536);
  t4 = v2 - c * 65536;
  v2 = t5 + c + 65535;
  c = Math.floor(v2 / 65536);
  t5 = v2 - c * 65536;
  v2 = t6 + c + 65535;
  c = Math.floor(v2 / 65536);
  t6 = v2 - c * 65536;
  v2 = t7 + c + 65535;
  c = Math.floor(v2 / 65536);
  t7 = v2 - c * 65536;
  v2 = t8 + c + 65535;
  c = Math.floor(v2 / 65536);
  t8 = v2 - c * 65536;
  v2 = t9 + c + 65535;
  c = Math.floor(v2 / 65536);
  t9 = v2 - c * 65536;
  v2 = t10 + c + 65535;
  c = Math.floor(v2 / 65536);
  t10 = v2 - c * 65536;
  v2 = t11 + c + 65535;
  c = Math.floor(v2 / 65536);
  t11 = v2 - c * 65536;
  v2 = t12 + c + 65535;
  c = Math.floor(v2 / 65536);
  t12 = v2 - c * 65536;
  v2 = t13 + c + 65535;
  c = Math.floor(v2 / 65536);
  t13 = v2 - c * 65536;
  v2 = t14 + c + 65535;
  c = Math.floor(v2 / 65536);
  t14 = v2 - c * 65536;
  v2 = t15 + c + 65535;
  c = Math.floor(v2 / 65536);
  t15 = v2 - c * 65536;
  t0 += c - 1 + 37 * (c - 1);
  c = 1;
  v2 = t0 + c + 65535;
  c = Math.floor(v2 / 65536);
  t0 = v2 - c * 65536;
  v2 = t1 + c + 65535;
  c = Math.floor(v2 / 65536);
  t1 = v2 - c * 65536;
  v2 = t2 + c + 65535;
  c = Math.floor(v2 / 65536);
  t2 = v2 - c * 65536;
  v2 = t3 + c + 65535;
  c = Math.floor(v2 / 65536);
  t3 = v2 - c * 65536;
  v2 = t4 + c + 65535;
  c = Math.floor(v2 / 65536);
  t4 = v2 - c * 65536;
  v2 = t5 + c + 65535;
  c = Math.floor(v2 / 65536);
  t5 = v2 - c * 65536;
  v2 = t6 + c + 65535;
  c = Math.floor(v2 / 65536);
  t6 = v2 - c * 65536;
  v2 = t7 + c + 65535;
  c = Math.floor(v2 / 65536);
  t7 = v2 - c * 65536;
  v2 = t8 + c + 65535;
  c = Math.floor(v2 / 65536);
  t8 = v2 - c * 65536;
  v2 = t9 + c + 65535;
  c = Math.floor(v2 / 65536);
  t9 = v2 - c * 65536;
  v2 = t10 + c + 65535;
  c = Math.floor(v2 / 65536);
  t10 = v2 - c * 65536;
  v2 = t11 + c + 65535;
  c = Math.floor(v2 / 65536);
  t11 = v2 - c * 65536;
  v2 = t12 + c + 65535;
  c = Math.floor(v2 / 65536);
  t12 = v2 - c * 65536;
  v2 = t13 + c + 65535;
  c = Math.floor(v2 / 65536);
  t13 = v2 - c * 65536;
  v2 = t14 + c + 65535;
  c = Math.floor(v2 / 65536);
  t14 = v2 - c * 65536;
  v2 = t15 + c + 65535;
  c = Math.floor(v2 / 65536);
  t15 = v2 - c * 65536;
  t0 += c - 1 + 37 * (c - 1);
  o[0] = t0;
  o[1] = t1;
  o[2] = t2;
  o[3] = t3;
  o[4] = t4;
  o[5] = t5;
  o[6] = t6;
  o[7] = t7;
  o[8] = t8;
  o[9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}
function square(o, a) {
  mul(o, a, a);
}
function inv25519(o, inp) {
  const c = gf();
  for (let i = 0; i < 16; i++) {
    c[i] = inp[i];
  }
  for (let i = 253; i >= 0; i--) {
    square(c, c);
    if (i !== 2 && i !== 4) {
      mul(c, c, inp);
    }
  }
  for (let i = 0; i < 16; i++) {
    o[i] = c[i];
  }
}
function scalarMult(n, p) {
  const z = new Uint8Array(32);
  const x = new Float64Array(80);
  const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
  for (let i = 0; i < 31; i++) {
    z[i] = n[i];
  }
  z[31] = n[31] & 127 | 64;
  z[0] &= 248;
  unpack25519(x, p);
  for (let i = 0; i < 16; i++) {
    b[i] = x[i];
  }
  a[0] = d[0] = 1;
  for (let i = 254; i >= 0; --i) {
    const r = z[i >>> 3] >>> (i & 7) & 1;
    sel25519(a, b, r);
    sel25519(c, d, r);
    add$1(e, a, c);
    sub(a, a, c);
    add$1(c, b, d);
    sub(b, b, d);
    square(d, e);
    square(f, a);
    mul(a, c, a);
    mul(c, b, e);
    add$1(e, a, c);
    sub(a, a, c);
    square(b, a);
    sub(c, d, f);
    mul(a, c, _121665);
    add$1(a, a, d);
    mul(c, c, a);
    mul(a, d, f);
    mul(d, b, x);
    square(b, e);
    sel25519(a, b, r);
    sel25519(c, d, r);
  }
  for (let i = 0; i < 16; i++) {
    x[i + 16] = a[i];
    x[i + 32] = c[i];
    x[i + 48] = b[i];
    x[i + 64] = d[i];
  }
  const x32 = x.subarray(32);
  const x16 = x.subarray(16);
  inv25519(x32, x32);
  mul(x16, x16, x32);
  const q = new Uint8Array(32);
  pack25519(q, x16);
  return q;
}
function scalarMultBase(n) {
  return scalarMult(n, _9);
}
function generateKeyPairFromSeed(seed) {
  if (seed.length !== SECRET_KEY_LENGTH) {
    throw new Error(`x25519: seed must be ${SECRET_KEY_LENGTH} bytes`);
  }
  const secretKey = new Uint8Array(seed);
  const publicKey = scalarMultBase(secretKey);
  return {
    publicKey,
    secretKey
  };
}
function generateKeyPair(prng) {
  const seed = randomBytes(32, prng);
  const result = generateKeyPairFromSeed(seed);
  wipe(seed);
  return result;
}
class MlKemError extends Error {
  constructor(e) {
    let message;
    if (e instanceof Error) {
      message = e.message;
    } else if (typeof e === "string") {
      message = e;
    } else {
      message = "";
    }
    super(message);
    this.name = this.constructor.name;
  }
}
const N = 256;
const Q = 3329;
const Q_INV = 62209;
const NTT_ZETAS = [
  2285,
  2571,
  2970,
  1812,
  1493,
  1422,
  287,
  202,
  3158,
  622,
  1577,
  182,
  962,
  2127,
  1855,
  1468,
  573,
  2004,
  264,
  383,
  2500,
  1458,
  1727,
  3199,
  2648,
  1017,
  732,
  608,
  1787,
  411,
  3124,
  1758,
  1223,
  652,
  2777,
  1015,
  2036,
  1491,
  3047,
  1785,
  516,
  3321,
  3009,
  2663,
  1711,
  2167,
  126,
  1469,
  2476,
  3239,
  3058,
  830,
  107,
  1908,
  3082,
  2378,
  2931,
  961,
  1821,
  2604,
  448,
  2264,
  677,
  2054,
  2226,
  430,
  555,
  843,
  2078,
  871,
  1550,
  105,
  422,
  587,
  177,
  3094,
  3038,
  2869,
  1574,
  1653,
  3083,
  778,
  1159,
  3182,
  2552,
  1483,
  2727,
  1119,
  1739,
  644,
  2457,
  349,
  418,
  329,
  3173,
  3254,
  817,
  1097,
  603,
  610,
  1322,
  2044,
  1864,
  384,
  2114,
  3193,
  1218,
  1994,
  2455,
  220,
  2142,
  1670,
  2144,
  1799,
  2051,
  794,
  1819,
  2475,
  2459,
  478,
  3221,
  3021,
  996,
  991,
  958,
  1869,
  1522,
  1628
];
const NTT_ZETAS_INV = [
  1701,
  1807,
  1460,
  2371,
  2338,
  2333,
  308,
  108,
  2851,
  870,
  854,
  1510,
  2535,
  1278,
  1530,
  1185,
  1659,
  1187,
  3109,
  874,
  1335,
  2111,
  136,
  1215,
  2945,
  1465,
  1285,
  2007,
  2719,
  2726,
  2232,
  2512,
  75,
  156,
  3e3,
  2911,
  2980,
  872,
  2685,
  1590,
  2210,
  602,
  1846,
  777,
  147,
  2170,
  2551,
  246,
  1676,
  1755,
  460,
  291,
  235,
  3152,
  2742,
  2907,
  3224,
  1779,
  2458,
  1251,
  2486,
  2774,
  2899,
  1103,
  1275,
  2652,
  1065,
  2881,
  725,
  1508,
  2368,
  398,
  951,
  247,
  1421,
  3222,
  2499,
  271,
  90,
  853,
  1860,
  3203,
  1162,
  1618,
  666,
  320,
  8,
  2813,
  1544,
  282,
  1838,
  1293,
  2314,
  552,
  2677,
  2106,
  1571,
  205,
  2918,
  1542,
  2721,
  2597,
  2312,
  681,
  130,
  1602,
  1871,
  829,
  2946,
  3065,
  1325,
  2756,
  1861,
  1474,
  1202,
  2367,
  3147,
  1752,
  2707,
  171,
  3127,
  3042,
  1907,
  1836,
  1517,
  359,
  758,
  1441
];
const U32_MASK64 = 0xffffffffn;
const _32n = 32n;
function fromBig(n, le2 = false) {
  if (le2) {
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  }
  return {
    h: Number(n >> _32n & U32_MASK64) | 0,
    l: Number(n & U32_MASK64) | 0
  };
}
function split(lst, le2 = false) {
  const len = lst.length;
  const Ah = new Uint32Array(len);
  const Al = new Uint32Array(len);
  for (let i = 0; i < len; i++) {
    const { h: h2, l: l2 } = fromBig(lst[i], le2);
    [Ah[i], Al[i]] = [h2, l2];
  }
  return [Ah, Al];
}
const rotlSH = (h2, l2, s) => h2 << s | l2 >>> 32 - s;
const rotlSL = (h2, l2, s) => l2 << s | h2 >>> 32 - s;
const rotlBH = (h2, l2, s) => l2 << s - 32 | h2 >>> 64 - s;
const rotlBL = (h2, l2, s) => h2 << s - 32 | l2 >>> 64 - s;
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function anumber(n, title = "") {
  if (!Number.isSafeInteger(n) || n < 0) {
    const prefix = title && `"${title}" `;
    throw new Error(`${prefix}expected integer >0, got ${n}`);
  }
}
function abytes(value, length, title = "") {
  const bytes = isBytes(value);
  const len = value?.length;
  const needsLen = length !== void 0;
  if (!bytes || needsLen) {
    const prefix = title && `"${title}" `;
    const ofLen = "";
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
  }
  return value;
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished) {
    throw new Error("Hash#digest() has already been called");
  }
}
function aoutput(out, instance) {
  abytes(out, void 0, "digestInto() output");
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error('"digestInto() output" expected to be of length >=' + min);
  }
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].fill(0);
  }
}
const isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
  return arr;
}
const swap32IfBE = isLE ? (u) => u : byteSwap32;
const _0n = 0n;
const _1n = 1n;
const _2n = 2n;
const _7n = 7n;
const _256n = 256n;
const _0x71n = 0x71n;
const _SHA3_IOTA = [];
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
  [x, y] = [y, (2 * x + 3 * y) % 5];
  let t = _0n;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n)
      t ^= _1n << (_1n << BigInt(j)) - _1n;
  }
  _SHA3_IOTA.push(t);
}
const IOTAS = split(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
const rotlH = (h2, l2, s) => rotlSH(h2, l2, s);
const rotlL = (h2, l2, s) => rotlSL(h2, l2, s);
function keccakP(s, rounds = 24, B) {
  if (!B)
    B = new Uint32Array(10);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++) {
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    }
    {
      const Th2 = rotlH(B[2], B[3], 1) ^ B[8];
      const Tl2 = rotlL(B[2], B[3], 1) ^ B[9];
      s[0] ^= Th2;
      s[1] ^= Tl2;
      s[10] ^= Th2;
      s[11] ^= Tl2;
      s[20] ^= Th2;
      s[21] ^= Tl2;
      s[30] ^= Th2;
      s[31] ^= Tl2;
      s[40] ^= Th2;
      s[41] ^= Tl2;
    }
    {
      const Th2 = rotlH(B[4], B[5], 1) ^ B[0];
      const Tl2 = rotlL(B[4], B[5], 1) ^ B[1];
      s[2] ^= Th2;
      s[3] ^= Tl2;
      s[12] ^= Th2;
      s[13] ^= Tl2;
      s[22] ^= Th2;
      s[23] ^= Tl2;
      s[32] ^= Th2;
      s[33] ^= Tl2;
      s[42] ^= Th2;
      s[43] ^= Tl2;
    }
    {
      const Th2 = rotlH(B[6], B[7], 1) ^ B[2];
      const Tl2 = rotlL(B[6], B[7], 1) ^ B[3];
      s[4] ^= Th2;
      s[5] ^= Tl2;
      s[14] ^= Th2;
      s[15] ^= Tl2;
      s[24] ^= Th2;
      s[25] ^= Tl2;
      s[34] ^= Th2;
      s[35] ^= Tl2;
      s[44] ^= Th2;
      s[45] ^= Tl2;
    }
    {
      const Th2 = rotlH(B[8], B[9], 1) ^ B[4];
      const Tl2 = rotlL(B[8], B[9], 1) ^ B[5];
      s[6] ^= Th2;
      s[7] ^= Tl2;
      s[16] ^= Th2;
      s[17] ^= Tl2;
      s[26] ^= Th2;
      s[27] ^= Tl2;
      s[36] ^= Th2;
      s[37] ^= Tl2;
      s[46] ^= Th2;
      s[47] ^= Tl2;
    }
    {
      const Th2 = rotlH(B[0], B[1], 1) ^ B[6];
      const Tl2 = rotlL(B[0], B[1], 1) ^ B[7];
      s[8] ^= Th2;
      s[9] ^= Tl2;
      s[18] ^= Th2;
      s[19] ^= Tl2;
      s[28] ^= Th2;
      s[29] ^= Tl2;
      s[38] ^= Th2;
      s[39] ^= Tl2;
      s[48] ^= Th2;
      s[49] ^= Tl2;
    }
    let curH = s[2];
    let curL = s[3];
    let Th, Tl;
    Th = rotlSH(curH, curL, 1);
    Tl = rotlSL(curH, curL, 1);
    curH = s[20];
    curL = s[21];
    s[20] = Th;
    s[21] = Tl;
    Th = rotlSH(curH, curL, 3);
    Tl = rotlSL(curH, curL, 3);
    curH = s[14];
    curL = s[15];
    s[14] = Th;
    s[15] = Tl;
    Th = rotlSH(curH, curL, 6);
    Tl = rotlSL(curH, curL, 6);
    curH = s[22];
    curL = s[23];
    s[22] = Th;
    s[23] = Tl;
    Th = rotlSH(curH, curL, 10);
    Tl = rotlSL(curH, curL, 10);
    curH = s[34];
    curL = s[35];
    s[34] = Th;
    s[35] = Tl;
    Th = rotlSH(curH, curL, 15);
    Tl = rotlSL(curH, curL, 15);
    curH = s[36];
    curL = s[37];
    s[36] = Th;
    s[37] = Tl;
    Th = rotlSH(curH, curL, 21);
    Tl = rotlSL(curH, curL, 21);
    curH = s[6];
    curL = s[7];
    s[6] = Th;
    s[7] = Tl;
    Th = rotlSH(curH, curL, 28);
    Tl = rotlSL(curH, curL, 28);
    curH = s[10];
    curL = s[11];
    s[10] = Th;
    s[11] = Tl;
    Th = rotlBH(curH, curL, 36);
    Tl = rotlBL(curH, curL, 36);
    curH = s[32];
    curL = s[33];
    s[32] = Th;
    s[33] = Tl;
    Th = rotlBH(curH, curL, 45);
    Tl = rotlBL(curH, curL, 45);
    curH = s[16];
    curL = s[17];
    s[16] = Th;
    s[17] = Tl;
    Th = rotlBH(curH, curL, 55);
    Tl = rotlBL(curH, curL, 55);
    curH = s[42];
    curL = s[43];
    s[42] = Th;
    s[43] = Tl;
    Th = rotlSH(curH, curL, 2);
    Tl = rotlSL(curH, curL, 2);
    curH = s[48];
    curL = s[49];
    s[48] = Th;
    s[49] = Tl;
    Th = rotlSH(curH, curL, 14);
    Tl = rotlSL(curH, curL, 14);
    curH = s[8];
    curL = s[9];
    s[8] = Th;
    s[9] = Tl;
    Th = rotlSH(curH, curL, 27);
    Tl = rotlSL(curH, curL, 27);
    curH = s[30];
    curL = s[31];
    s[30] = Th;
    s[31] = Tl;
    Th = rotlBH(curH, curL, 41);
    Tl = rotlBL(curH, curL, 41);
    curH = s[46];
    curL = s[47];
    s[46] = Th;
    s[47] = Tl;
    Th = rotlBH(curH, curL, 56);
    Tl = rotlBL(curH, curL, 56);
    curH = s[38];
    curL = s[39];
    s[38] = Th;
    s[39] = Tl;
    Th = rotlSH(curH, curL, 8);
    Tl = rotlSL(curH, curL, 8);
    curH = s[26];
    curL = s[27];
    s[26] = Th;
    s[27] = Tl;
    Th = rotlSH(curH, curL, 25);
    Tl = rotlSL(curH, curL, 25);
    curH = s[24];
    curL = s[25];
    s[24] = Th;
    s[25] = Tl;
    Th = rotlBH(curH, curL, 43);
    Tl = rotlBL(curH, curL, 43);
    curH = s[4];
    curL = s[5];
    s[4] = Th;
    s[5] = Tl;
    Th = rotlBH(curH, curL, 62);
    Tl = rotlBL(curH, curL, 62);
    curH = s[40];
    curL = s[41];
    s[40] = Th;
    s[41] = Tl;
    Th = rotlSH(curH, curL, 18);
    Tl = rotlSL(curH, curL, 18);
    curH = s[28];
    curL = s[29];
    s[28] = Th;
    s[29] = Tl;
    Th = rotlBH(curH, curL, 39);
    Tl = rotlBL(curH, curL, 39);
    curH = s[44];
    curL = s[45];
    s[44] = Th;
    s[45] = Tl;
    Th = rotlBH(curH, curL, 61);
    Tl = rotlBL(curH, curL, 61);
    curH = s[18];
    curL = s[19];
    s[18] = Th;
    s[19] = Tl;
    Th = rotlSH(curH, curL, 20);
    Tl = rotlSL(curH, curL, 20);
    curH = s[12];
    curL = s[13];
    s[12] = Th;
    s[13] = Tl;
    Th = rotlBH(curH, curL, 44);
    Tl = rotlBL(curH, curL, 44);
    s[2] = Th;
    s[3] = Tl;
    for (let y = 0; y < 50; y += 10) {
      B[0] = s[y];
      B[1] = s[y + 1];
      B[2] = s[y + 2];
      B[3] = s[y + 3];
      B[4] = s[y + 4];
      B[5] = s[y + 5];
      B[6] = s[y + 6];
      B[7] = s[y + 7];
      B[8] = s[y + 8];
      B[9] = s[y + 9];
      s[y + 0] ^= ~B[2] & B[4];
      s[y + 1] ^= ~B[3] & B[5];
      s[y + 2] ^= ~B[4] & B[6];
      s[y + 3] ^= ~B[5] & B[7];
      s[y + 4] ^= ~B[6] & B[8];
      s[y + 5] ^= ~B[7] & B[9];
      s[y + 6] ^= ~B[8] & B[0];
      s[y + 7] ^= ~B[9] & B[1];
      s[y + 8] ^= ~B[0] & B[2];
      s[y + 9] ^= ~B[1] & B[3];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
}
class Keccak {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    Object.defineProperty(this, "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "pos", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "posOut", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "finished", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "state32", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "destroyed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_B", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Uint32Array(10)
    });
    Object.defineProperty(this, "blockLen", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "suffix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "outputLen", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "enableXOF", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "rounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    anumber(outputLen, "outputLen");
    if (!(0 < blockLen && blockLen < 200)) {
      throw new Error("only keccak-f1600 function is supported");
    }
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  /** Resets instance to initial (empty) state for reuse. */
  reset() {
    this.state.fill(0);
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
  }
  keccak() {
    swap32IfBE(this.state32);
    keccakP(this.state32, this.rounds, this._B);
    swap32IfBE(this.state32);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    aexists(this);
    abytes(data);
    return this.updateUnsafe(data);
  }
  /** Like update(), but skips validation. Caller must ensure valid state and input. */
  updateUnsafe(data) {
    const { blockLen, state } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    aexists(this, false);
    abytes(out);
    return this.writeIntoUnsafe(out);
  }
  /** Like writeInto(), but skips validation. Caller must ensure valid state and output. */
  writeIntoUnsafe(out) {
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF) {
      throw new Error("XOF is not possible for this instance");
    }
    return this.writeInto(out);
  }
  xof(bytes) {
    anumber(bytes);
    return this.xofInto(new Uint8Array(bytes));
  }
  digestInto(out) {
    aoutput(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    clean(this.state);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to ||= new Keccak(blockLen, suffix, outputLen, enableXOF, rounds);
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
}
const dntGlobals = {};
const dntGlobalThis = createMergeProxy(globalThis, dntGlobals);
function createMergeProxy(baseObj, extObj) {
  return new Proxy(baseObj, {
    get(_target, prop, _receiver) {
      if (prop in extObj) {
        return extObj[prop];
      } else {
        return baseObj[prop];
      }
    },
    set(_target, prop, value) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      baseObj[prop] = value;
      return true;
    },
    deleteProperty(_target, prop) {
      let success = false;
      if (prop in extObj) {
        delete extObj[prop];
        success = true;
      }
      if (prop in baseObj) {
        delete baseObj[prop];
        success = true;
      }
      return success;
    },
    ownKeys(_target) {
      const baseKeys = Reflect.ownKeys(baseObj);
      const extKeys = Reflect.ownKeys(extObj);
      const extKeysSet = new Set(extKeys);
      return [...baseKeys.filter((k2) => !extKeysSet.has(k2)), ...extKeys];
    },
    defineProperty(_target, prop, desc) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      Reflect.defineProperty(baseObj, prop, desc);
      return true;
    },
    getOwnPropertyDescriptor(_target, prop) {
      if (prop in extObj) {
        return Reflect.getOwnPropertyDescriptor(extObj, prop);
      } else {
        return Reflect.getOwnPropertyDescriptor(baseObj, prop);
      }
    },
    has(_target, prop) {
      return prop in extObj || prop in baseObj;
    }
  });
}
function byte(n) {
  return n & 255;
}
function int16(n) {
  return n << 16 >> 16;
}
function uint16(n) {
  return n & 65535;
}
function constantTimeCompare(x, y) {
  if (x.length != y.length) {
    return 0;
  }
  let v2 = 0;
  for (let i = 0; i < x.length; i++) {
    v2 |= x[i] ^ y[i];
  }
  let z = ~v2 & 255;
  z &= z >> 4;
  z &= z >> 2;
  z &= z >> 1;
  return z & 1;
}
function equalUint8Array(x, y) {
  if (x.length != y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
}
async function loadCrypto() {
  if (typeof dntGlobalThis !== "undefined" && globalThis.crypto !== void 0) {
    return globalThis.crypto;
  }
  try {
    const { webcrypto } = await __vitePreload(async () => {
      const { webcrypto: webcrypto2 } = await import("./__vite-browser-external-2Ng8QIWW.js");
      return { webcrypto: webcrypto2 };
    }, true ? [] : void 0);
    return webcrypto;
  } catch (_e) {
    throw new Error("failed to load Crypto");
  }
}
function byteopsLoad32(x, o = 0) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
class MlKemBase {
  /**
   * Creates a new instance of the MlKemBase class.
   */
  constructor() {
    Object.defineProperty(this, "_api", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_k", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_du", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dv", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_eta1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_eta2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_skSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_pkSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_compressedUSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_compressedVSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_poolG", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_poolH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_poolKdf", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_poolXof", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_poolPrf1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_poolPrf2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_bufG", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Uint8Array(64)
    });
    Object.defineProperty(this, "_bufH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Uint8Array(32)
    });
    Object.defineProperty(this, "_bufKdf", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Uint8Array(32)
    });
    Object.defineProperty(this, "_bufXof", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Uint8Array(672)
    });
    Object.defineProperty(this, "_bufPrf1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_bufPrf2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_nonceBuf", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Uint8Array(1)
    });
    Object.defineProperty(this, "_xofSeed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Uint8Array(34)
    });
    Object.defineProperty(this, "_kBuf", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_matrixA", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_noiseVecs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_polyVec", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_bufPkCheck", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_bufCt", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _initPool() {
    this._poolG = new Keccak(72, 6, 64);
    this._poolH = new Keccak(136, 6, 32);
    this._poolKdf = new Keccak(136, 31, 32, true);
    this._poolXof = new Keccak(168, 31, 672, true);
    const prf1Len = this._eta1 * N / 4;
    this._poolPrf1 = new Keccak(136, 31, prf1Len, true);
    this._bufPrf1 = new Uint8Array(prf1Len);
    const prf2Len = this._eta2 * N / 4;
    this._poolPrf2 = new Keccak(136, 31, prf2Len, true);
    this._bufPrf2 = new Uint8Array(prf2Len);
    this._kBuf = new Uint8Array([this._k]);
    this._matrixA = new Array(this._k);
    for (let i = 0; i < this._k; i++) {
      this._matrixA[i] = new Array(this._k);
      for (let j = 0; j < this._k; j++) {
        this._matrixA[i][j] = new Int16Array(N);
      }
    }
    const maxNoise = 2 * this._k + 1;
    this._noiseVecs = new Array(maxNoise);
    for (let i = 0; i < maxNoise; i++) {
      this._noiseVecs[i] = new Int16Array(N);
    }
    this._polyVec = new Array(this._k);
    for (let i = 0; i < this._k; i++) {
      this._polyVec[i] = new Int16Array(N);
    }
    this._bufPkCheck = new Uint8Array(384 * this._k);
    this._bufCt = new Uint8Array(this._compressedUSize + this._compressedVSize);
  }
  _zeroPool() {
    this._bufG.fill(0);
    this._bufH.fill(0);
    this._bufKdf.fill(0);
    this._bufXof.fill(0);
    this._bufPrf1.fill(0);
    this._bufPrf2.fill(0);
    this._nonceBuf[0] = 0;
    this._xofSeed.fill(0);
    for (let i = 0; i < this._k; i++) {
      for (let j = 0; j < this._k; j++) {
        this._matrixA[i][j].fill(0);
      }
    }
    for (let i = 0; i < this._noiseVecs.length; i++) {
      this._noiseVecs[i].fill(0);
    }
    for (let i = 0; i < this._k; i++) {
      this._polyVec[i].fill(0);
    }
    this._bufPkCheck.fill(0);
    this._bufCt.fill(0);
    this._poolG.reset();
    this._poolH.reset();
    this._poolKdf.reset();
    this._poolXof.reset();
    this._poolPrf1.reset();
    this._poolPrf2.reset();
  }
  // Serialize polynomial into byte buffer at offset (eliminates intermediate Uint8Array(384))
  _polyToBytes(out, outOffset, a) {
    let t0, t1;
    for (let i = 0; i < N / 2; i++) {
      t0 = a[2 * i] - Q;
      t0 += t0 >> 31 & Q;
      t1 = a[2 * i + 1] - Q;
      t1 += t1 >> 31 & Q;
      out[outOffset + 3 * i + 0] = byte(t0);
      out[outOffset + 3 * i + 1] = byte(t0 >> 8) | byte(t1 << 4);
      out[outOffset + 3 * i + 2] = byte(t1 >> 4);
    }
  }
  // Deserialize bytes into polynomial (eliminates intermediate Int16Array(N))
  _polyFromBytes(out, a, aOffset) {
    for (let i = 0; i < N / 2; i++) {
      out[2 * i] = int16((uint16(a[aOffset + 3 * i + 0]) >> 0 | uint16(a[aOffset + 3 * i + 1]) << 8) & 4095);
      out[2 * i + 1] = int16((uint16(a[aOffset + 3 * i + 1]) >> 4 | uint16(a[aOffset + 3 * i + 2]) << 4) & 4095);
    }
  }
  // Hash G: SHA3-512
  _g(a, b) {
    this._poolG.reset();
    this._poolG.updateUnsafe(a);
    if (b !== void 0)
      this._poolG.updateUnsafe(b);
    this._poolG.writeIntoUnsafe(this._bufG);
    return [this._bufG.subarray(0, 32), this._bufG.subarray(32, 64)];
  }
  // Hash H: SHA3-256
  _h(msg) {
    this._poolH.reset();
    this._poolH.updateUnsafe(msg).writeIntoUnsafe(this._bufH);
    return this._bufH;
  }
  // KDF: SHAKE256(dkLen=32)
  _kdf(a, b) {
    this._poolKdf.reset();
    this._poolKdf.updateUnsafe(a);
    if (b !== void 0)
      this._poolKdf.updateUnsafe(b);
    this._poolKdf.writeIntoUnsafe(this._bufKdf);
    return this._bufKdf;
  }
  // XOF: SHAKE128(dkLen=672)
  _xof(seed) {
    this._poolXof.reset();
    this._poolXof.updateUnsafe(seed).writeIntoUnsafe(this._bufXof);
    return this._bufXof;
  }
  // PRF for eta1 noise sampling: SHAKE256(dkLen=eta1*N/4)
  _prf1(sigma, nonce) {
    this._nonceBuf[0] = nonce;
    this._poolPrf1.reset();
    this._poolPrf1.updateUnsafe(sigma).updateUnsafe(this._nonceBuf).writeIntoUnsafe(this._bufPrf1);
    return this._bufPrf1;
  }
  // PRF for eta2 noise sampling: SHAKE256(dkLen=eta2*N/4)
  _prf2(sigma, nonce) {
    this._nonceBuf[0] = nonce;
    this._poolPrf2.reset();
    this._poolPrf2.updateUnsafe(sigma).updateUnsafe(this._nonceBuf).writeIntoUnsafe(this._bufPrf2);
    return this._bufPrf2;
  }
  _generateKeyPairCore() {
    try {
      const rnd = new Uint8Array(64);
      this._api.getRandomValues(rnd);
      return this._deriveKeyPair(rnd);
    } finally {
      this._zeroPool();
    }
  }
  _deriveKeyPairCore(seed) {
    try {
      if (seed.byteLength !== 64) {
        throw new Error("seed must be 64 bytes in length");
      }
      return this._deriveKeyPair(seed);
    } finally {
      this._zeroPool();
    }
  }
  _encapCore(pk, seed) {
    try {
      if (pk.length !== 384 * this._k + 32) {
        throw new Error("invalid encapsulation key");
      }
      const m = this._getSeed(seed);
      const [k2, r] = this._g(m, this._h(pk));
      this._encap(pk, m, r);
      return [this._bufCt.slice(), k2.slice()];
    } finally {
      this._zeroPool();
    }
  }
  _decapCore(ct, sk) {
    try {
      if (ct.byteLength !== this._compressedUSize + this._compressedVSize) {
        throw new Error("Invalid ct size");
      }
      if (sk.length !== 768 * this._k + 96) {
        throw new Error("Invalid decapsulation key");
      }
      const sk2 = sk.subarray(0, this._skSize);
      const pk = sk.subarray(this._skSize, this._skSize + this._pkSize);
      const hpk = sk.subarray(this._skSize + this._pkSize, this._skSize + this._pkSize + 32);
      const z = sk.subarray(this._skSize + this._pkSize + 32, this._skSize + this._pkSize + 64);
      const m2 = this._decap(ct, sk2);
      const [k2, r2] = this._g(m2, hpk);
      const kBar = this._kdf(z, ct);
      this._encap(pk, m2, r2);
      return constantTimeCompare(ct, this._bufCt) === 1 ? k2.slice() : kBar.slice();
    } finally {
      this._zeroPool();
    }
  }
  /**
   * Sets up the MlKemBase instance by loading the necessary crypto library.
   * If the crypto library is already loaded, this method does nothing.
   * @returns {Promise<void>} A promise that resolves when the setup is complete.
   */
  async _setup() {
    if (this._api !== void 0) {
      return;
    }
    this._api = await loadCrypto();
  }
  /**
   * Returns a Uint8Array seed for cryptographic operations.
   * If no seed is provided, a random seed of length 32 bytes is generated.
   * If a seed is provided, it must be exactly 32 bytes in length.
   *
   * @param seed - Optional seed for cryptographic operations.
   * @returns A Uint8Array seed.
   * @throws Error if the provided seed is not 32 bytes in length.
   */
  _getSeed(seed) {
    if (seed == void 0) {
      const s = new Uint8Array(32);
      this._api.getRandomValues(s);
      return s;
    }
    if (seed.byteLength !== 32) {
      throw new Error("seed must be 32 bytes in length");
    }
    return seed;
  }
  /**
   * Derives a key pair from a given seed.
   *
   * @param seed - The seed used for key derivation.
   * @returns An array containing the public key and secret key.
   */
  _deriveKeyPair(seed) {
    const cpaSeed = seed.subarray(0, 32);
    const z = seed.subarray(32, 64);
    const [pk, skBody] = this._deriveCpaKeyPair(cpaSeed);
    const pkh = this._h(pk);
    const sk = new Uint8Array(this._skSize + this._pkSize + 64);
    sk.set(skBody, 0);
    sk.set(pk, this._skSize);
    sk.set(pkh, this._skSize + this._pkSize);
    sk.set(z, this._skSize + this._pkSize + 32);
    return [pk, sk];
  }
  // indcpaKeyGen generates public and private keys for the CPA-secure
  // public-key encryption scheme underlying ML-KEM.
  /**
   * Derives a CPA key pair using the provided CPA seed.
   *
   * @param cpaSeed - The CPA seed used for key derivation.
   * @returns An array containing the public key and private key.
   */
  _deriveCpaKeyPair(cpaSeed) {
    const [publicSeed, noiseSeed] = this._g(cpaSeed, this._kBuf);
    const a = this._sampleMatrix(publicSeed, false);
    const s = this._sampleNoise1(noiseSeed, 0, this._k);
    const e = this._sampleNoise1(noiseSeed, this._k, this._k);
    for (let i = 0; i < this._k; i++) {
      s[i] = ntt(s[i]);
      s[i] = reduce(s[i]);
      e[i] = ntt(e[i]);
    }
    const pk = new Array(this._k);
    for (let i = 0; i < this._k; i++) {
      pk[i] = polyToMont(multiply(a[i], s));
      pk[i] = add(pk[i], e[i]);
      pk[i] = reduce(pk[i]);
    }
    const pubKey = new Uint8Array(this._pkSize);
    for (let i = 0; i < this._k; i++) {
      this._polyToBytes(pubKey, i * 384, pk[i]);
    }
    pubKey.set(publicSeed, this._skSize);
    const privKey = new Uint8Array(this._skSize);
    for (let i = 0; i < this._k; i++) {
      this._polyToBytes(privKey, i * 384, s[i]);
    }
    return [pubKey, privKey];
  }
  // _encap is the encapsulation function of the CPA-secure
  // public-key encryption scheme underlying ML-KEM.
  /**
   * Encapsulates a message using the ML-KEM encryption scheme.
   *
   * @param pk - The public key.
   * @param msg - The message to be encapsulated.
   * @param seed - The seed used for generating random values.
   * @returns The encapsulated message as a Uint8Array.
   */
  _encap(pk, msg, seed) {
    const tHat = this._polyVec;
    const pkCheck = this._bufPkCheck;
    for (let i = 0; i < this._k; i++) {
      this._polyFromBytes(tHat[i], pk, i * 384);
      this._polyToBytes(pkCheck, i * 384, tHat[i]);
    }
    if (!equalUint8Array(pk.subarray(0, pkCheck.length), pkCheck)) {
      throw new Error("invalid encapsulation key");
    }
    const rho = pk.subarray(this._skSize);
    const a = this._sampleMatrix(rho, true);
    const r = this._sampleNoise1(seed, 0, this._k);
    const e1 = this._sampleNoise2(seed, this._k, this._k);
    const e2 = this._sampleNoise2(seed, this._k * 2, 1)[0];
    for (let i = 0; i < this._k; i++) {
      r[i] = ntt(r[i]);
      r[i] = reduce(r[i]);
    }
    const u = new Array(this._k);
    for (let i = 0; i < this._k; i++) {
      u[i] = multiply(a[i], r);
      u[i] = nttInverse(u[i]);
      u[i] = add(u[i], e1[i]);
      u[i] = reduce(u[i]);
    }
    const m = polyFromMsg(msg);
    let v2 = multiply(tHat, r);
    v2 = nttInverse(v2);
    v2 = add(v2, e2);
    v2 = add(v2, m);
    v2 = reduce(v2);
    this._compressU(this._bufCt.subarray(0, this._compressedUSize), u);
    this._compressV(this._bufCt.subarray(this._compressedUSize), v2);
    return this._bufCt;
  }
  // indcpaDecrypt is the decryption function of the CPA-secure
  // public-key encryption scheme underlying ML-KEM.
  /**
   * Decapsulates the ciphertext using the provided secret key.
   *
   * @param ct - The ciphertext to be decapsulated.
   * @param sk - The secret key used for decapsulation.
   * @returns The decapsulated message as a Uint8Array.
   */
  _decap(ct, sk) {
    const u = this._decompressU(ct.subarray(0, this._compressedUSize));
    const v2 = this._decompressV(ct.subarray(this._compressedUSize));
    const privateKeyPolyvec = this._polyvecFromBytes(sk);
    for (let i = 0; i < this._k; i++) {
      u[i] = ntt(u[i]);
    }
    let mp = multiply(privateKeyPolyvec, u);
    mp = nttInverse(mp);
    mp = subtract(v2, mp);
    mp = reduce(mp);
    return polyToMsg(mp);
  }
  // generateMatrixA deterministically generates a matrix `A` (or the transpose of `A`)
  // from a seed. Entries of the matrix are polynomials that look uniformly random.
  // Performs rejection sampling on the output of an extendable-output function (XOF).
  /**
   * Generates a sample matrix based on the provided seed and transposition flag.
   *
   * @param seed - The seed used for generating the matrix.
   * @param transposed - A flag indicating whether the matrix should be transposed or not.
   * @returns The generated sample matrix.
   */
  _sampleMatrix(seed, transposed) {
    const a = this._matrixA;
    this._xofSeed.set(seed);
    for (let ctr = 0, i = 0; i < this._k; i++) {
      for (let j = 0; j < this._k; j++) {
        if (transposed) {
          this._xofSeed[seed.length] = i;
          this._xofSeed[seed.length + 1] = j;
        } else {
          this._xofSeed[seed.length] = j;
          this._xofSeed[seed.length + 1] = i;
        }
        const output = this._xof(this._xofSeed);
        ctr = indcpaRejUniform(a[i][j], 0, output.subarray(0, 504), 504, N);
        while (ctr < N) {
          const outputn = output.subarray(504, 672);
          ctr += indcpaRejUniform(a[i][j], ctr, outputn, 168, N - ctr);
        }
      }
    }
    return a;
  }
  /**
   * Generates a 2D array of noise samples.
   *
   * @param sigma - The noise parameter.
   * @param offset - The offset value.
   * @param size - The size of the array.
   * @returns The generated 2D array of noise samples.
   */
  _sampleNoise1(sigma, offset, size) {
    const r = new Array(size);
    for (let i = 0; i < size; i++) {
      r[i] = this._noiseVecs[offset + i];
      byteopsCbd(r[i], this._prf1(sigma, offset + i), this._eta1);
    }
    return r;
  }
  /**
   * Generates a 2-dimensional array of noise samples.
   *
   * @param sigma - The noise parameter.
   * @param offset - The offset value.
   * @param size - The size of the array.
   * @returns The generated 2-dimensional array of noise samples.
   */
  _sampleNoise2(sigma, offset, size) {
    const r = new Array(size);
    for (let i = 0; i < size; i++) {
      r[i] = this._noiseVecs[offset + i];
      byteopsCbd(r[i], this._prf2(sigma, offset + i), this._eta2);
    }
    return r;
  }
  // polyvecFromBytes deserializes a vector of polynomials.
  /**
   * Converts a Uint8Array to a 2D array of numbers representing a polynomial vector.
   * Each element in the resulting array represents a polynomial.
   * @param a The Uint8Array to convert.
   * @returns The 2D array of numbers representing the polynomial vector.
   */
  _polyvecFromBytes(a) {
    const r = this._polyVec;
    for (let i = 0; i < this._k; i++) {
      this._polyFromBytes(r[i], a, i * 384);
    }
    return r;
  }
  // compressU lossily compresses and serializes a vector of polynomials.
  /**
   * Compresses the given array of coefficients into a Uint8Array.
   *
   * @param r - The output Uint8Array.
   * @param u - The array of coefficients.
   * @returns The compressed Uint8Array.
   */
  _compressU(r, u) {
    const t = new Array(4);
    for (let rr = 0, i = 0; i < this._k; i++) {
      for (let j = 0; j < N / 4; j++) {
        for (let k2 = 0; k2 < 4; k2++) {
          t[k2] = ((u[i][4 * j + k2] << 10) + Q / 2) / Q & 1023;
        }
        r[rr++] = byte(t[0] >> 0);
        r[rr++] = byte(t[0] >> 8 | t[1] << 2);
        r[rr++] = byte(t[1] >> 6 | t[2] << 4);
        r[rr++] = byte(t[2] >> 4 | t[3] << 6);
        r[rr++] = byte(t[3] >> 2);
      }
    }
    return r;
  }
  // compressV lossily compresses and subsequently serializes a polynomial.
  /**
   * Compresses the given array of numbers into a Uint8Array.
   *
   * @param r - The Uint8Array to store the compressed values.
   * @param v - The array of numbers to compress.
   * @returns The compressed Uint8Array.
   */
  _compressV(r, v2) {
    const t = new Uint8Array(8);
    for (let rr = 0, i = 0; i < N / 8; i++) {
      for (let j = 0; j < 8; j++) {
        t[j] = byte(((v2[8 * i + j] << 4) + Q / 2) / Q) & 15;
      }
      r[rr++] = t[0] | t[1] << 4;
      r[rr++] = t[2] | t[3] << 4;
      r[rr++] = t[4] | t[5] << 4;
      r[rr++] = t[6] | t[7] << 4;
    }
    return r;
  }
  // decompressU de-serializes and decompresses a vector of polynomials and
  // represents the approximate inverse of compress1. Since compression is lossy,
  // the results of decompression will may not match the original vector of polynomials.
  /**
   * Decompresses a Uint8Array into a two-dimensional array of numbers.
   *
   * @param a The Uint8Array to decompress.
   * @returns The decompressed two-dimensional array.
   */
  _decompressU(a) {
    const r = new Array(this._k);
    for (let i = 0; i < this._k; i++) {
      r[i] = new Int16Array(N);
    }
    const t = new Array(4);
    for (let aa = 0, i = 0; i < this._k; i++) {
      for (let j = 0; j < N / 4; j++) {
        t[0] = uint16(a[aa + 0]) >> 0 | uint16(a[aa + 1]) << 8;
        t[1] = uint16(a[aa + 1]) >> 2 | uint16(a[aa + 2]) << 6;
        t[2] = uint16(a[aa + 2]) >> 4 | uint16(a[aa + 3]) << 4;
        t[3] = uint16(a[aa + 3]) >> 6 | uint16(a[aa + 4]) << 2;
        aa = aa + 5;
        for (let k2 = 0; k2 < 4; k2++) {
          r[i][4 * j + k2] = int16((t[k2] & 1023) * Q + 512 >> 10);
        }
      }
    }
    return r;
  }
  // decompressV de-serializes and subsequently decompresses a polynomial,
  // representing the approximate inverse of compress2.
  // Note that compression is lossy, and thus decompression will not match the
  // original input.
  /**
   * Decompresses a Uint8Array into an array of numbers.
   *
   * @param a - The Uint8Array to decompress.
   * @returns An array of numbers.
   */
  _decompressV(a) {
    const r = new Int16Array(N);
    for (let aa = 0, i = 0; i < N / 2; i++, aa++) {
      r[2 * i + 0] = int16((a[aa] & 15) * Q + 8 >> 4);
      r[2 * i + 1] = int16((a[aa] >> 4) * Q + 8 >> 4);
    }
    return r;
  }
}
function polyToMsg(a) {
  const msg = new Uint8Array(32);
  let t, v2;
  for (let i = 0; i < N / 8; i++) {
    for (let j = 0; j < 8; j++) {
      v2 = a[8 * i + j] - Q;
      v2 += v2 >> 31 & Q;
      t = ((uint16(v2) << 1) + uint16(Q / 2)) / uint16(Q) & 1;
      msg[i] |= byte(t << j);
    }
  }
  return msg;
}
function polyFromMsg(msg) {
  const r = new Int16Array(N);
  let mask;
  for (let i = 0; i < N / 8; i++) {
    for (let j = 0; j < 8; j++) {
      mask = -1 * int16(msg[i] >> j & 1);
      r[8 * i + j] = mask & int16((Q + 1) / 2);
    }
  }
  return r;
}
function indcpaRejUniform(out, outOffset, buf, bufl, len) {
  let ctr = 0;
  let val0, val1;
  for (let pos = 0; ctr < len && pos + 3 <= bufl; ) {
    val0 = (uint16(buf[pos] >> 0) | uint16(buf[pos + 1]) << 8) & 4095;
    val1 = (uint16(buf[pos + 1] >> 4) | uint16(buf[pos + 2]) << 4) & 4095;
    pos = pos + 3;
    if (val0 < Q) {
      out[outOffset + ctr] = val0;
      ctr = ctr + 1;
    }
    if (ctr < len && val1 < Q) {
      out[outOffset + ctr] = val1;
      ctr = ctr + 1;
    }
  }
  return ctr;
}
function byteopsCbd(out, buf, eta) {
  let t, d;
  let a, b;
  for (let i = 0; i < N / 8; i++) {
    t = byteopsLoad32(buf, 4 * i);
    d = t & 1431655765;
    d = d + (t >> 1 & 1431655765);
    for (let j = 0; j < 8; j++) {
      a = int16(d >> 4 * j + 0 & 3);
      b = int16(d >> 4 * j + eta & 3);
      out[8 * i + j] = a - b;
    }
  }
}
function ntt(r) {
  for (let j = 0, k2 = 1, l2 = 128; l2 >= 2; l2 >>= 1) {
    for (let start = 0; start < 256; start = j + l2) {
      const zeta = NTT_ZETAS[k2];
      k2 = k2 + 1;
      for (j = start; j < start + l2; j++) {
        const t = nttFqMul(zeta, r[j + l2]);
        r[j + l2] = r[j] - t;
        r[j] = r[j] + t;
      }
    }
  }
  return r;
}
function nttFqMul(a, b) {
  const ab = a * b;
  const u = Math.imul(ab, Q_INV) << 16 >> 16;
  return ab - u * Q >> 16;
}
function reduce(r) {
  for (let i = 0; i < N; i++) {
    r[i] = barrett(r[i]);
  }
  return r;
}
const BARRETT_V = ((1 << 24) + Q / 2) / Q;
function barrett(a) {
  let t = BARRETT_V * a >> 24;
  t = t * Q;
  return a - t;
}
function polyToMont(r) {
  const f = 1353;
  for (let i = 0; i < N; i++) {
    const a = r[i] * f;
    const u = Math.imul(a, Q_INV) << 16 >> 16;
    r[i] = a - u * Q >> 16;
  }
  return r;
}
function multiply(a, b) {
  let r = polyBaseMulMontgomery(a[0], b[0]);
  let t;
  for (let i = 1; i < a.length; i++) {
    t = polyBaseMulMontgomery(a[i], b[i]);
    r = add(r, t);
  }
  return reduce(r);
}
function polyBaseMulMontgomery(a, b) {
  for (let i = 0; i < N / 4; i++) {
    const idx = 4 * i;
    const a0 = a[idx], a1 = a[idx + 1], a2 = a[idx + 2], a3 = a[idx + 3];
    const b0 = b[idx], b1 = b[idx + 1], b2 = b[idx + 2], b3 = b[idx + 3];
    const zeta = NTT_ZETAS[64 + i];
    a[idx] = nttFqMul(nttFqMul(a1, b1), zeta) + nttFqMul(a0, b0);
    a[idx + 1] = nttFqMul(a0, b1) + nttFqMul(a1, b0);
    a[idx + 2] = nttFqMul(nttFqMul(a3, b3), -zeta) + nttFqMul(a2, b2);
    a[idx + 3] = nttFqMul(a2, b3) + nttFqMul(a3, b2);
  }
  return a;
}
function add(a, b) {
  for (let i = 0; i < N; i++) {
    a[i] += b[i];
  }
  return a;
}
function subtract(a, b) {
  for (let i = 0; i < N; i++) {
    a[i] -= b[i];
  }
  return a;
}
function nttInverse(r) {
  let j = 0;
  for (let k2 = 0, l2 = 2; l2 <= 128; l2 <<= 1) {
    for (let start = 0; start < 256; start = j + l2) {
      const zeta = NTT_ZETAS_INV[k2];
      k2 = k2 + 1;
      for (j = start; j < start + l2; j++) {
        const t = r[j];
        r[j] = barrett(t + r[j + l2]);
        r[j + l2] = t - r[j + l2];
        r[j + l2] = nttFqMul(zeta, r[j + l2]);
      }
    }
  }
  for (j = 0; j < 256; j++) {
    r[j] = nttFqMul(r[j], NTT_ZETAS_INV[127]);
  }
  return r;
}
class MlKem768 extends MlKemBase {
  constructor() {
    super();
    Object.defineProperty(this, "_k", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 3
    });
    Object.defineProperty(this, "_du", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 10
    });
    Object.defineProperty(this, "_dv", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4
    });
    Object.defineProperty(this, "_eta1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2
    });
    Object.defineProperty(this, "_eta2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2
    });
    this._skSize = 12 * this._k * N / 8;
    this._pkSize = this._skSize + 32;
    this._compressedUSize = this._k * this._du * N / 8;
    this._compressedVSize = this._dv * N / 8;
    this._initPool();
  }
  /**
   * Generates a keypair [publicKey, privateKey].
   *
   * If an error occurred, throws {@link MlKemError}.
   *
   * @returns A kaypair [publicKey, privateKey].
   * @throws {@link MlKemError}
   */
  async generateKeyPair() {
    await this._setup();
    try {
      return this._generateKeyPairCore();
    } catch (e) {
      throw new MlKemError(e);
    }
  }
  /**
   * Derives a keypair [publicKey, privateKey] deterministically from a 64-octet seed.
   *
   * If an error occurred, throws {@link MlKemError}.
   *
   * @param seed A 64-octet seed for the deterministic key generation.
   * @returns A kaypair [publicKey, privateKey].
   * @throws {@link MlKemError}
   */
  async deriveKeyPair(seed) {
    await this._setup();
    try {
      return this._deriveKeyPairCore(seed);
    } catch (e) {
      throw new MlKemError(e);
    }
  }
  /**
   * Generates a shared secret from the encapsulated ciphertext and the private key.
   *
   * If an error occurred, throws {@link MlKemError}.
   *
   * @param pk A public key.
   * @param seed An optional 32-octet seed for the deterministic shared secret generation.
   * @returns A ciphertext (encapsulated public key) and a shared secret.
   * @throws {@link MlKemError}
   */
  async encap(pk, seed) {
    await this._setup();
    try {
      return this._encapCore(pk, seed);
    } catch (e) {
      throw new MlKemError(e);
    }
  }
  /**
   * Generates a ciphertext for the public key and a shared secret.
   *
   * If an error occurred, throws {@link MlKemError}.
   *
   * @param ct A ciphertext generated by {@link encap}.
   * @param sk A private key.
   * @returns A shared secret.
   * @throws {@link MlKemError}
   */
  async decap(ct, sk) {
    await this._setup();
    try {
      return this._decapCore(ct, sk);
    } catch (e) {
      throw new MlKemError(e);
    }
  }
}
const SHADOWSOCKS_ENCRYPTION_METHODS = [
  { value: "2022-blake3-aes-128-gcm", label: "2022-blake3-aes-128-gcm", length: 16 },
  { value: "2022-blake3-aes-256-gcm", label: "2022-blake3-aes-256-gcm", length: 32 }
];
const DEFAULT_VLESS_HANDSHAKE = "mlkem768x25519plus";
const DEFAULT_VLESS_ENCRYPTION = "native";
const DEFAULT_VLESS_PADDING = "100-111-1111.75-0-111.50-0-3333";
const DEFAULT_VLESS_SERVER_TICKET = "600s";
const VLESS_HANDSHAKE_OPTIONS = [{ value: DEFAULT_VLESS_HANDSHAKE, label: "mlkem768x25519plus", translationKey: "coreConfigModal.vlessHandshakeOptionMlkem768x25519plus" }];
const VLESS_RESUME_OPTIONS = [
  { value: "0rtt", label: "0rtt", translationKey: "coreConfigModal.vlessResumeOption0rtt" },
  { value: "1rtt", label: "1rtt", translationKey: "coreConfigModal.vlessResumeOption1rtt" }
];
const DEFAULT_VLESS_RESUME = VLESS_RESUME_OPTIONS[0].value;
const VLESS_ENCRYPTION_METHODS = [
  { value: "native", label: "native", translationKey: "coreConfigModal.vlessEncryptionOptionNative" },
  { value: "xorpub", label: "xorpub", translationKey: "coreConfigModal.vlessEncryptionOptionXorpub" },
  { value: "random", label: "random", translationKey: "coreConfigModal.vlessEncryptionOptionRandom" }
];
const createDefaultVlessOptions = () => ({
  handshakeMethod: DEFAULT_VLESS_HANDSHAKE,
  encryptionMethod: DEFAULT_VLESS_ENCRYPTION,
  serverTicket: DEFAULT_VLESS_SERVER_TICKET,
  clientTicket: DEFAULT_VLESS_RESUME,
  serverPadding: DEFAULT_VLESS_PADDING,
  clientPadding: DEFAULT_VLESS_PADDING,
  includeServerPadding: false,
  includeClientPadding: false
});
function CoreConfigModal({ isDialogOpen, onOpenChange, form, editingCore, editingCoreId }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const { resolvedTheme } = useTheme();
  const [validation, setValidation] = reactExports.useState({ isValid: true });
  const [isEditorReady, setIsEditorReady] = reactExports.useState(false);
  const createCoreMutation = useCreateCoreConfig();
  const modifyCoreMutation = useModifyCoreConfig();
  const [isEditorFullscreen, setIsEditorFullscreen] = reactExports.useState(false);
  const [inboundTags, setInboundTags] = reactExports.useState([]);
  const [isGeneratingKeyPair, setIsGeneratingKeyPair] = reactExports.useState(false);
  const [isGeneratingShortId, setIsGeneratingShortId] = reactExports.useState(false);
  const [isGeneratingVLESSEncryption, setIsGeneratingVLESSEncryption] = reactExports.useState(false);
  const [selectedEncryptionMethod, setSelectedEncryptionMethod] = reactExports.useState(SHADOWSOCKS_ENCRYPTION_METHODS[0].value);
  const [isGeneratingShadowsocksPassword, setIsGeneratingShadowsocksPassword] = reactExports.useState(false);
  const [isGeneratingMldsa65, setIsGeneratingMldsa65] = reactExports.useState(false);
  const [selectedVlessVariant, setSelectedVlessVariant] = reactExports.useState("x25519");
  const [vlessOptions, setVlessOptions] = reactExports.useState(() => createDefaultVlessOptions());
  const [isVlessAdvancedModalOpen, setIsVlessAdvancedModalOpen] = reactExports.useState(false);
  const [editorInstance, setEditorInstance] = reactExports.useState(null);
  const [isResultsDialogOpen, setIsResultsDialogOpen] = reactExports.useState(false);
  const [resultType, setResultType] = reactExports.useState(null);
  const [resultData, setResultData] = reactExports.useState(null);
  const [generatedKeyPair, setGeneratedKeyPair] = reactExports.useState(null);
  const [generatedShortId, setGeneratedShortId] = reactExports.useState(null);
  const [generatedShadowsocksPassword, setGeneratedShadowsocksPassword] = reactExports.useState(null);
  const [generatedMldsa65, setGeneratedMldsa65] = reactExports.useState(null);
  const [generatedVLESS, setGeneratedVLESS] = reactExports.useState(null);
  const handleVlessVariantChange = reactExports.useCallback(
    (value) => {
      if (value === "x25519" || value === "mlkem768") {
        setSelectedVlessVariant(value);
      }
    },
    [setSelectedVlessVariant]
  );
  const showResultDialog = reactExports.useCallback((type, data) => {
    setResultType(type);
    setResultData(data);
    setIsResultsDialogOpen(true);
  }, []);
  const handleToggleFullscreen = reactExports.useCallback(() => {
    setIsEditorFullscreen((prev) => {
      const newValue = !prev;
      setTimeout(() => {
        if (editorInstance) {
          editorInstance.layout();
        }
        window.dispatchEvent(new Event("resize"));
      }, 50);
      return newValue;
    });
  }, [editorInstance]);
  const handleEditorValidation = reactExports.useCallback(
    (markers) => {
      const hasErrors = markers.length > 0;
      if (hasErrors) {
        setValidation({
          isValid: false,
          error: markers[0].message
        });
        toast.error(markers[0].message, {
          duration: 3e3,
          position: "bottom-right"
        });
      } else {
        try {
          JSON.parse(form.getValues().config);
          setValidation({ isValid: true });
        } catch (e) {
          const errorMessage = e instanceof Error ? e.message : "Invalid JSON";
          setValidation({
            isValid: false,
            error: errorMessage
          });
          toast.error(errorMessage, {
            duration: 3e3,
            position: "bottom-right"
          });
        }
      }
    },
    [form]
  );
  const debouncedConfigChange = reactExports.useCallback(
    debounce((value) => {
      try {
        const parsedConfig = JSON.parse(value);
        if (parsedConfig.inbounds && Array.isArray(parsedConfig.inbounds)) {
          const tags = parsedConfig.inbounds.filter((inbound) => typeof inbound.tag === "string" && inbound.tag.trim() !== "").map((inbound) => inbound.tag);
          setInboundTags(tags);
        } else {
          setInboundTags([]);
        }
      } catch {
        setInboundTags([]);
      }
    }, 300),
    []
  );
  reactExports.useEffect(() => {
    const configValue = form.getValues().config;
    if (configValue) {
      debouncedConfigChange(configValue);
    }
  }, [form.watch("config"), debouncedConfigChange]);
  const handleEditorDidMount = reactExports.useCallback((editor) => {
    setIsEditorReady(true);
    setEditorInstance(editor);
    requestAnimationFrame(() => {
      if (editor) {
        editor.layout();
        setTimeout(() => {
          editor.layout();
        }, 100);
      }
    });
  }, []);
  const generatePrivateAndPublicKey = async () => {
    try {
      setIsGeneratingKeyPair(true);
      const keyPair = generateKeyPair();
      const formattedKeyPair = {
        privateKey: encodeURLSafe(keyPair.secretKey).replace(/=/g, "").replace(/\n/g, ""),
        publicKey: encodeURLSafe(keyPair.publicKey).replace(/=/g, "").replace(/\n/g, "")
      };
      setGeneratedKeyPair(formattedKeyPair);
      showResultDialog("keyPair", formattedKeyPair);
      toast.success(t("coreConfigModal.keyPairGenerated"));
    } catch (error) {
      toast.error(t("coreConfigModal.keyPairGenerationFailed"));
    } finally {
      setIsGeneratingKeyPair(false);
    }
  };
  const generateShortId = async () => {
    try {
      setIsGeneratingShortId(true);
      const randomBytes2 = new Uint8Array(8);
      crypto.getRandomValues(randomBytes2);
      const shortId = Array.from(randomBytes2).map((byte2) => byte2.toString(16).padStart(2, "0")).join("");
      setGeneratedShortId(shortId);
      showResultDialog("shortId", { shortId });
      toast.success(t("coreConfigModal.shortIdGenerated"));
    } catch (error) {
      toast.error(t("coreConfigModal.shortIdGenerationFailed"));
    } finally {
      setIsGeneratingShortId(false);
    }
  };
  const generateShadowsocksPassword = async (value) => {
    try {
      setIsGeneratingShadowsocksPassword(true);
      const method = SHADOWSOCKS_ENCRYPTION_METHODS.find((m) => m.value === value);
      if (!method) return;
      const randomBytes2 = new Uint8Array(method.length);
      crypto.getRandomValues(randomBytes2);
      const password = btoa(String.fromCharCode(...randomBytes2));
      setGeneratedShadowsocksPassword({ password, encryptionMethod: method.label });
      showResultDialog("shadowsocksPassword", { password, encryptionMethod: method.label });
      toast.success(t("coreConfigModal.shadowsocksPasswordGenerated"));
    } catch (error) {
      toast.error(t("coreConfigModal.shadowsocksPasswordGenerationFailed"));
    } finally {
      setIsGeneratingShadowsocksPassword(false);
    }
  };
  const handleGenerateMldsa65 = async () => {
    try {
      setIsGeneratingMldsa65(true);
      const result = await generateMldsa65();
      setGeneratedMldsa65(result);
      showResultDialog("mldsa65", result);
      toast.success(t("coreConfigModal.mldsa65Generated"));
    } catch (error) {
      const message = error instanceof Error ? error.message : t("coreConfigModal.mldsa65GenerationFailed", { defaultValue: "Failed to generate ML-DSA-65 keys" });
      toast.error(message);
    } finally {
      setIsGeneratingMldsa65(false);
    }
  };
  const generateVLESSEncryption = async () => {
    try {
      setIsGeneratingVLESSEncryption(true);
      const x25519KeyPair = generateKeyPair();
      const x25519ServerKey = encodeURLSafe(x25519KeyPair.secretKey).replace(/=/g, "");
      const x25519ClientKey = encodeURLSafe(x25519KeyPair.publicKey).replace(/=/g, "");
      const mlkem768Seed = new Uint8Array(64);
      crypto.getRandomValues(mlkem768Seed);
      const mlkem768 = new MlKem768();
      const [mlkem768Client] = await mlkem768.deriveKeyPair(mlkem768Seed);
      const mlkem768ServerKey = encodeURLSafe(mlkem768Seed).replace(/=/g, "");
      const mlkem768ClientKey = encodeURLSafe(mlkem768Client).replace(/=/g, "");
      const sanitizeSegments = (value) => value.split(".").map((segment) => segment.trim()).filter((segment) => segment.length > 0);
      const normalizeOption = (value, fallback) => {
        if (!value) return fallback;
        const trimmed = value.trim();
        return trimmed.length > 0 ? trimmed : fallback;
      };
      const handshakeMethod = normalizeOption(vlessOptions.handshakeMethod, DEFAULT_VLESS_HANDSHAKE);
      const encryptionMethod = normalizeOption(vlessOptions.encryptionMethod, DEFAULT_VLESS_ENCRYPTION);
      const buildConfig = ({
        ticketValue,
        paddingValue,
        includePadding,
        authParam,
        fallbackTicket
      }) => {
        const segments = [handshakeMethod, encryptionMethod, normalizeOption(ticketValue, fallbackTicket)];
        if (includePadding) {
          const paddingSegments = sanitizeSegments(normalizeOption(paddingValue, DEFAULT_VLESS_PADDING));
          segments.push(...paddingSegments);
        }
        segments.push(authParam);
        return segments.join(".");
      };
      const x25519Decryption = buildConfig({
        ticketValue: vlessOptions.serverTicket,
        paddingValue: vlessOptions.serverPadding,
        includePadding: vlessOptions.includeServerPadding,
        authParam: x25519ServerKey,
        fallbackTicket: DEFAULT_VLESS_SERVER_TICKET
      });
      const x25519Encryption = buildConfig({
        ticketValue: vlessOptions.clientTicket,
        paddingValue: vlessOptions.clientPadding,
        includePadding: vlessOptions.includeClientPadding,
        authParam: x25519ClientKey,
        fallbackTicket: DEFAULT_VLESS_RESUME
      });
      const mlkem768Decryption = buildConfig({
        ticketValue: vlessOptions.serverTicket,
        paddingValue: vlessOptions.serverPadding,
        includePadding: vlessOptions.includeServerPadding,
        authParam: mlkem768ServerKey,
        fallbackTicket: DEFAULT_VLESS_SERVER_TICKET
      });
      const mlkem768Encryption = buildConfig({
        ticketValue: vlessOptions.clientTicket,
        paddingValue: vlessOptions.clientPadding,
        includePadding: vlessOptions.includeClientPadding,
        authParam: mlkem768ClientKey,
        fallbackTicket: DEFAULT_VLESS_RESUME
      });
      const resultData2 = {
        x25519: {
          decryption: x25519Decryption,
          encryption: x25519Encryption
        },
        mlkem768: {
          decryption: mlkem768Decryption,
          encryption: mlkem768Encryption
        },
        options: vlessOptions
      };
      setGeneratedVLESS(resultData2);
      showResultDialog("vlessEncryption", resultData2);
      toast.success(t("coreConfigModal.vlessEncryptionGenerated"));
    } catch (error) {
      toast.error(t("coreConfigModal.vlessEncryptionGenerationFailed"));
    } finally {
      setIsGeneratingVLESSEncryption(false);
    }
  };
  const defaultConfig = JSON.stringify(
    {
      log: {
        loglevel: "info"
      },
      inbounds: [
        {
          tag: "Shadowsocks TCP",
          listen: "0.0.0.0",
          port: 1080,
          protocol: "shadowsocks",
          settings: {
            clients: [],
            network: "tcp,udp"
          }
        }
      ],
      outbounds: [
        {
          protocol: "freedom",
          tag: "DIRECT"
        },
        {
          protocol: "blackhole",
          tag: "BLOCK"
        }
      ],
      routing: {
        rules: [
          {
            ip: ["geoip:private"],
            outboundTag: "BLOCK",
            type: "field"
          }
        ]
      }
    },
    null,
    2
  );
  const onSubmit = async (values) => {
    try {
      let configObj;
      try {
        configObj = JSON.parse(values.config);
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Invalid JSON";
        form.setError("config", {
          type: "manual",
          message: errorMessage
        });
        toast.error(errorMessage);
        return;
      }
      const fallbackTags = values.fallback_id || [];
      const excludeInboundTags = values.excluded_inbound_ids || [];
      if (editingCore && editingCoreId) {
        await modifyCoreMutation.mutateAsync({
          coreId: editingCoreId,
          data: {
            name: values.name,
            config: configObj,
            fallbacks_inbound_tags: fallbackTags,
            exclude_inbound_tags: excludeInboundTags
          },
          params: {
            restart_nodes: values.restart_nodes ?? true
          }
        });
      } else {
        await createCoreMutation.mutateAsync({
          data: {
            name: values.name,
            config: configObj,
            fallbacks_inbound_tags: fallbackTags,
            exclude_inbound_tags: excludeInboundTags
          }
        });
      }
      toast.success(
        t(editingCore ? "coreConfigModal.editSuccess" : "coreConfigModal.createSuccess", {
          name: values.name
        })
      );
      queryClient.invalidateQueries({ queryKey: ["/api/cores"] });
      queryClient.invalidateQueries({ queryKey: ["/api/cores/simple"] });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error("Core config operation failed:", error);
      console.error("Error response:", error?.response);
      form.clearErrors();
      if (error?.response?._data && !isEmptyObject(error?.response?._data)) {
        const fields = ["name", "config", "fallback_id", "excluded_inbound_ids"];
        if (error?.response?._data?.detail) {
          const detail = error?.response?._data?.detail;
          if (typeof detail === "object" && detail !== null && !Array.isArray(detail)) {
            const firstField = Object.keys(detail)[0];
            const firstMessage = detail[firstField];
            Object.entries(detail).forEach(([field, message]) => {
              if (fields.includes(field)) {
                form.setError(field, {
                  type: "manual",
                  message: typeof message === "string" ? message : t("validation.invalid", {
                    field: t(`coreConfigModal.${field}`, { defaultValue: field }),
                    defaultValue: `${field} is invalid`
                  })
                });
              }
            });
            toast.error(
              firstMessage || t("validation.invalid", {
                field: t(`coreConfigModal.${firstField}`, { defaultValue: firstField }),
                defaultValue: `${firstField} is invalid`
              })
            );
          } else if (typeof detail === "string" && !Array.isArray(detail)) {
            toast.error(detail);
          }
        }
      } else if (error?.response?.data) {
        const apiError = error.response?.data;
        let errorMessage = "";
        if (typeof apiError === "string") {
          errorMessage = apiError;
        } else if (apiError?.detail) {
          if (Array.isArray(apiError.detail)) {
            apiError.detail.forEach((err) => {
              if (err.loc && err.loc[1]) {
                const fieldName = err.loc[1];
                form.setError(fieldName, {
                  type: "manual",
                  message: err.msg
                });
              }
            });
            errorMessage = apiError.detail[0]?.msg || "Validation error";
          } else if (typeof apiError.detail === "string") {
            errorMessage = apiError.detail;
          } else {
            errorMessage = "Validation error";
          }
        } else if (apiError?.message) {
          errorMessage = apiError.message;
        } else {
          errorMessage = "An unexpected error occurred";
        }
        toast.error(errorMessage);
      } else {
        toast.error(error?.message || t("coreConfigModal.genericError", { defaultValue: "An error occurred" }));
      }
    }
  };
  reactExports.useEffect(() => {
    if (isDialogOpen) {
      if (!editingCore) {
        form.reset({
          name: "",
          config: defaultConfig,
          excluded_inbound_ids: [],
          fallback_id: [],
          restart_nodes: true
        });
      } else {
        form.setValue("restart_nodes", true);
      }
      setTimeout(() => {
        const editorElement = document.querySelector(".monaco-editor");
        if (editorElement) {
          window.dispatchEvent(new Event("resize"));
        }
      }, 300);
    }
  }, [isDialogOpen, editingCore, form, defaultConfig]);
  reactExports.useEffect(() => {
    if (!isDialogOpen) {
      setIsEditorFullscreen(false);
      setIsResultsDialogOpen(false);
      setResultType(null);
      setResultData(null);
      setSelectedVlessVariant("x25519");
      setVlessOptions(createDefaultVlessOptions());
      setValidation({ isValid: true });
      setEditorInstance(null);
      setIsEditorReady(false);
    }
  }, [isDialogOpen]);
  const viewKeyPair = () => {
    if (generatedKeyPair) {
      showResultDialog("keyPair", generatedKeyPair);
    } else {
      generatePrivateAndPublicKey();
    }
  };
  const viewShortId = () => {
    if (generatedShortId) {
      showResultDialog("shortId", { shortId: generatedShortId });
    } else {
      generateShortId();
    }
  };
  const viewShadowsocksPassword = () => {
    if (generatedShadowsocksPassword) {
      showResultDialog("shadowsocksPassword", generatedShadowsocksPassword);
    } else {
      generateShadowsocksPassword(selectedEncryptionMethod);
    }
  };
  const viewMldsa65 = () => {
    if (generatedMldsa65) {
      showResultDialog("mldsa65", generatedMldsa65);
    } else {
      handleGenerateMldsa65();
    }
  };
  const viewVLESS = () => {
    if (generatedVLESS) {
      showResultDialog("vlessEncryption", generatedVLESS);
    } else {
      setIsVlessAdvancedModalOpen(true);
    }
  };
  const styles = `
    .monaco-editor-mobile .monaco-menu {
        background-color: var(--background) !important;
    }

    .monaco-editor-mobile .monaco-menu .action-item {
        background-color: var(--background) !important;
    }

    .monaco-editor-mobile .monaco-menu .action-item:hover {
        background-color: var(--muted) !important;
    }

    .monaco-editor-mobile .monaco-menu .action-item.disabled {
        opacity: 0.5;
    }

    .monaco-editor-mobile .monaco-menu .action-item .action-label {
        color: var(--foreground) !important;
    }

    .monaco-editor-mobile .monaco-menu .action-item:hover .action-label {
        color: var(--foreground) !important;
    }
    `;
  reactExports.useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  reactExports.useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.message?.includes("custom element with name") && args[0]?.message?.includes("has already been defined")) {
        return;
      }
      originalError.apply(console, args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);
  reactExports.useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (editorInstance) {
          editorInstance.layout();
        }
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        if (editorInstance) {
          editorInstance.layout();
        }
      }, 300);
    });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [editorInstance]);
  reactExports.useEffect(() => {
    if (editorInstance && isEditorReady) {
      setTimeout(() => {
        editorInstance.layout();
      }, 150);
    }
  }, [isEditorFullscreen, editorInstance, isEditorReady]);
  const renderVlessAdvancedModal = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isVlessAdvancedModalOpen, onOpenChange: setIsVlessAdvancedModalOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "h-full max-w-full px-2 py-6 sm:h-auto sm:max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "flex items-center gap-2 px-2 text-base sm:text-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t("coreConfigModal.vlessAdvancedSettings", { defaultValue: "VLESS Advanced Settings" }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[calc(100dvh-120px)] space-y-4 overflow-y-auto px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold tracking-wide text-muted-foreground", children: t("coreConfigModal.chooseAuthentication") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedVlessVariant, onValueChange: handleVlessVariantChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "x25519", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("coreConfigModal.x25519Authentication") })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "mlkem768", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("coreConfigModal.mlkem768Authentication") })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-end space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold tracking-wide text-muted-foreground", children: t("coreConfigModal.vlessHandshakeLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: vlessOptions.handshakeMethod, onValueChange: (value) => setVlessOptions((prev) => ({ ...prev, handshakeMethod: value })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: VLESS_HANDSHAKE_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: option.value, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t(option.translationKey, { defaultValue: option.label }) }) }, option.value)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-end space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold tracking-wide text-muted-foreground", children: t("coreConfigModal.vlessEncryptionLabel") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5 text-muted-foreground" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[280px] p-3 sm:w-[340px]", side: "top", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-[12px] font-medium", children: t("coreConfigModal.vlessEncryptionInfoTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("coreConfigModal.vlessEncryptionHint") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                    "• ",
                    t("coreConfigModal.vlessEncryptionNativeInfo")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                    "• ",
                    t("coreConfigModal.vlessEncryptionXorpubInfo")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                    "• ",
                    t("coreConfigModal.vlessEncryptionRandomInfo")
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: vlessOptions.encryptionMethod, onValueChange: (value) => setVlessOptions((prev) => ({ ...prev, encryptionMethod: value })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: VLESS_ENCRYPTION_METHODS.map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: method.value, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t(method.translationKey, { defaultValue: method.label }) }) }, method.value)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold tracking-wide text-muted-foreground", children: t("coreConfigModal.vlessServerTicket") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: vlessOptions.serverTicket, placeholder: "600s or 100-500s", className: "h-9", onChange: (event) => setVlessOptions((prev) => ({ ...prev, serverTicket: event.target.value })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold tracking-wide text-muted-foreground", children: t("coreConfigModal.vlessClientTicket") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: vlessOptions.clientTicket, onValueChange: (value) => setVlessOptions((prev) => ({ ...prev, clientTicket: value })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: VLESS_RESUME_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: option.value, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t(option.translationKey, { defaultValue: option.label }) }) }, option.value)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold tracking-wide text-muted-foreground", children: t("coreConfigModal.padding", { defaultValue: "Padding" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "vless-server-padding-modal",
                    checked: vlessOptions.includeServerPadding,
                    onCheckedChange: (checked) => setVlessOptions((prev) => ({ ...prev, includeServerPadding: checked === true })),
                    className: "h-4 w-4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vless-server-padding-modal", className: "cursor-pointer text-xs font-medium", children: t("coreConfigModal.vlessServerPaddingToggle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5 text-muted-foreground" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[280px] p-3 sm:w-[340px]", side: "top", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("coreConfigModal.vlessPaddingHint") }) }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: vlessOptions.serverPadding,
                  placeholder: DEFAULT_VLESS_PADDING,
                  disabled: !vlessOptions.includeServerPadding,
                  className: "h-8 text-xs",
                  onChange: (event) => setVlessOptions((prev) => ({ ...prev, serverPadding: event.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "vless-client-padding-modal",
                    checked: vlessOptions.includeClientPadding,
                    onCheckedChange: (checked) => setVlessOptions((prev) => ({ ...prev, includeClientPadding: checked === true })),
                    className: "h-4 w-4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vless-client-padding-modal", className: "cursor-pointer text-xs font-medium", children: t("coreConfigModal.vlessClientPaddingToggle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5 text-muted-foreground" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[280px] p-3 sm:w-[340px]", side: "top", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("coreConfigModal.vlessPaddingHint") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("coreConfigModal.vlessClientPaddingHint") })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: vlessOptions.clientPadding,
                  placeholder: DEFAULT_VLESS_PADDING,
                  disabled: !vlessOptions.includeClientPadding,
                  className: "h-8 text-xs",
                  onChange: (event) => setVlessOptions((prev) => ({ ...prev, clientPadding: event.target.value }))
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => setIsVlessAdvancedModalOpen(false), size: "sm", disabled: isGeneratingVLESSEncryption, children: t("close") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderButton, { type: "button", onClick: generateVLESSEncryption, isLoading: isGeneratingVLESSEncryption, loadingText: t("coreConfigModal.generatingVLESSEncryption"), size: "sm", children: t("coreConfigModal.generate") })
      ] })
    ] }) });
  };
  const StatusIndicator = ({ color }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 w-1.5 shrink-0 rounded-full ${color}`, "aria-hidden": "true" });
  const SectionLabel = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[10px] font-semibold tracking-wide text-muted-foreground sm:text-xs", children });
  const CodeBlock = ({ value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir: "ltr", className: "group relative min-w-0 flex-1 rounded-md border bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "block w-full overflow-x-auto whitespace-nowrap px-3 py-2.5 font-mono text-xs leading-relaxed", children: value }) });
  const DataField = ({ label, value, statusColor, copiedMessage, defaultMessage }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5 sm:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIndicator, { color: statusColor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: "flex min-w-0 items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { value, icon: "copy", copiedMessage, defaultMessage, className: "h-8 w-full shrink-0 text-xs sm:h-9 sm:w-auto sm:px-3 sm:text-sm" })
    ] })
  ] });
  const renderResultDialog = () => {
    if (!resultType || !resultData) return null;
    const renderContent = () => {
      switch (resultType) {
        case "keyPair":
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataField,
              {
                label: t("coreConfigModal.publicKey"),
                value: resultData.publicKey || "",
                statusColor: "bg-green-500",
                copiedMessage: "coreConfigModal.publicKeyCopied",
                defaultMessage: "coreConfigModal.copyPublicKey"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataField,
              {
                label: t("coreConfigModal.privateKey"),
                value: resultData.privateKey || "",
                statusColor: "bg-amber-500",
                copiedMessage: "coreConfigModal.privateKeyCopied",
                defaultMessage: "coreConfigModal.copyPrivateKey"
              }
            )
          ] });
        case "shortId":
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            DataField,
            {
              label: t("coreConfigModal.shortId"),
              value: resultData.shortId || "",
              statusColor: "bg-cyan-500",
              copiedMessage: "coreConfigModal.shortIdCopied",
              defaultMessage: "coreConfigModal.copyShortId"
            }
          );
        case "shadowsocksPassword":
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DataField,
            {
              label: t("coreConfigModal.shadowsocksPassword"),
              value: resultData.password || "",
              statusColor: "bg-orange-500",
              copiedMessage: "coreConfigModal.shadowsocksPasswordCopied",
              defaultMessage: "coreConfigModal.copyShadowsocksPassword"
            }
          ) });
        case "mldsa65":
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataField,
              {
                label: t("coreConfigModal.mldsa65Seed"),
                value: resultData.seed || "",
                statusColor: "bg-blue-500",
                copiedMessage: "coreConfigModal.mldsa65SeedCopied",
                defaultMessage: "coreConfigModal.copyMldsa65Seed"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataField,
              {
                label: t("coreConfigModal.mldsa65Verify"),
                value: resultData.verify || "",
                statusColor: "bg-purple-500",
                copiedMessage: "coreConfigModal.mldsa65VerifyCopied",
                defaultMessage: "coreConfigModal.copyMldsa65Verify"
              }
            )
          ] });
        case "vlessEncryption": {
          const currentValues = selectedVlessVariant === "x25519" ? resultData.x25519 : resultData.mlkem768;
          if (!currentValues) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataField,
              {
                label: t("coreConfigModal.decryption"),
                value: currentValues.decryption,
                statusColor: "bg-emerald-500",
                copiedMessage: "coreConfigModal.decryptionCopied",
                defaultMessage: "coreConfigModal.copyDecryption"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataField,
              {
                label: t("coreConfigModal.encryption"),
                value: currentValues.encryption,
                statusColor: "bg-violet-500",
                copiedMessage: "coreConfigModal.encryptionCopied",
                defaultMessage: "coreConfigModal.copyEncryption"
              }
            )
          ] });
        }
        default:
          return null;
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isResultsDialogOpen, onOpenChange: setIsResultsDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[95vh] w-[95vw] max-w-2xl overflow-y-auto p-3 sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-1.5 text-sm sm:gap-2 sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 shrink-0 text-primary sm:h-5 sm:w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t("coreConfigModal.result", { defaultValue: "Result" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[70vh] space-y-3 overflow-y-auto pr-1 sm:space-y-4", children: renderContent() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "pt-3 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-2 sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => {
              switch (resultType) {
                case "keyPair":
                  generatePrivateAndPublicKey();
                  break;
                case "shortId":
                  generateShortId();
                  break;
                case "shadowsocksPassword":
                  generateShadowsocksPassword(selectedEncryptionMethod);
                  break;
                case "mldsa65":
                  handleGenerateMldsa65();
                  break;
                case "vlessEncryption":
                  setIsVlessAdvancedModalOpen(true);
                  setIsResultsDialogOpen(false);
                  break;
              }
            },
            className: "h-8 w-full text-xs sm:h-10 sm:w-auto sm:text-sm",
            children: t("coreConfigModal.regenerate")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setIsResultsDialogOpen(false), className: "h-8 w-full text-xs sm:h-10 sm:w-auto sm:text-sm", children: t("close") })
      ] }) })
    ] }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    renderVlessAdvancedModal(),
    renderResultDialog(),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "h-full max-w-full px-4 py-6 sm:h-auto sm:max-w-[1000px]", onOpenAutoFocus: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn("text-start text-xl font-semibold", dir === "rtl" && "sm:text-right"), children: editingCore ? t("coreConfigModal.editCore") : t("coreConfigModal.addConfig") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "sr-only", children: editingCore ? t("coreConfigModal.editConfig", { defaultValue: "Edit the core configuration" }) : t("coreConfigModal.createNewConfig") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mr-4 max-h-[69dvh] overflow-y-auto px-2 pr-4 sm:max-h-[72dvh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:h-full md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col space-y-4 md:h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "config",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "md:flex md:h-full md:flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { className: "md:flex md:flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn(
                      "relative flex flex-col rounded-lg border bg-background",
                      // Responsive heights for normal mode
                      isEditorFullscreen ? "fixed inset-0 z-[60] flex items-center justify-center" : "h-[calc(50vh-1rem)] sm:h-[calc(55vh-1rem)] md:h-[600px]"
                    ),
                    dir: "ltr",
                    style: isEditorFullscreen ? {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    } : {
                      display: "flex",
                      flexDirection: "column"
                    },
                    children: [
                      isEditorFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/95 backdrop-blur-sm", onClick: handleToggleFullscreen }),
                      !isEditorReady && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[70] flex items-center justify-center bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary" }) }),
                      isEditorFullscreen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full w-full flex-col bg-background sm:my-8 sm:h-auto sm:w-full sm:max-w-[95vw] sm:rounded-lg sm:border sm:shadow-xl", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center justify-between rounded-t-lg border-b bg-background px-3 py-2.5 sm:flex", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Xray Core Configuration" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "icon", variant: "ghost", className: "h-8 w-8 shrink-0", onClick: handleToggleFullscreen, "aria-label": t("exitFullscreen"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "h-4 w-4" }) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            size: "icon",
                            variant: "default",
                            className: "absolute right-2 top-2 z-20 h-9 w-9 rounded-full shadow-lg sm:hidden",
                            onClick: handleToggleFullscreen,
                            "aria-label": t("exitFullscreen"),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full sm:h-[calc(100vh-160px)]", style: { width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Ft,
                          {
                            height: "100%",
                            defaultLanguage: "json",
                            value: field.value,
                            theme: resolvedTheme === "dark" ? "vs-dark" : "light",
                            onChange: field.onChange,
                            onValidate: handleEditorValidation,
                            onMount: handleEditorDidMount,
                            options: {
                              minimap: { enabled: false },
                              fontSize: 14,
                              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                              lineNumbers: "on",
                              roundedSelection: true,
                              scrollBeyondLastLine: false,
                              automaticLayout: true,
                              formatOnPaste: true,
                              formatOnType: true,
                              renderWhitespace: "none",
                              wordWrap: "on",
                              folding: true,
                              suggestOnTriggerCharacters: true,
                              quickSuggestions: true,
                              renderLineHighlight: "all",
                              scrollbar: {
                                vertical: "visible",
                                horizontal: "visible",
                                useShadows: false,
                                verticalScrollbarSize: 10,
                                horizontalScrollbarSize: 10
                              },
                              // Mobile-friendly options
                              contextmenu: true,
                              copyWithSyntaxHighlighting: false,
                              multiCursorModifier: "alt",
                              accessibilitySupport: "on",
                              mouseWheelZoom: true,
                              quickSuggestionsDelay: 0,
                              occurrencesHighlight: "singleFile",
                              wordBasedSuggestions: "currentDocument",
                              suggest: {
                                showWords: true,
                                showSnippets: true,
                                showClasses: true,
                                showFunctions: true,
                                showVariables: true,
                                showProperties: true,
                                showColors: true,
                                showFiles: true,
                                showReferences: true,
                                showFolders: true,
                                showTypeParameters: true,
                                showEnums: true,
                                showConstructors: true,
                                showDeprecated: true,
                                showEnumMembers: true,
                                showKeywords: true
                              }
                            }
                          }
                        ) })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        !isEditorFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            size: "icon",
                            variant: "ghost",
                            className: "absolute right-2 top-2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background/90",
                            onClick: handleToggleFullscreen,
                            "aria-label": t("fullscreen"),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-0 flex-1", style: { minHeight: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Ft,
                          {
                            height: void 0,
                            defaultLanguage: "json",
                            value: field.value,
                            theme: resolvedTheme === "dark" ? "vs-dark" : "light",
                            onChange: field.onChange,
                            onValidate: handleEditorValidation,
                            onMount: handleEditorDidMount,
                            options: {
                              minimap: { enabled: false },
                              fontSize: 14,
                              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                              lineNumbers: "on",
                              roundedSelection: true,
                              scrollBeyondLastLine: false,
                              automaticLayout: true,
                              formatOnPaste: true,
                              formatOnType: true,
                              renderWhitespace: "none",
                              wordWrap: "on",
                              folding: true,
                              suggestOnTriggerCharacters: true,
                              quickSuggestions: true,
                              renderLineHighlight: "all",
                              scrollbar: {
                                vertical: "visible",
                                horizontal: "visible",
                                useShadows: false,
                                verticalScrollbarSize: 10,
                                horizontalScrollbarSize: 10
                              },
                              contextmenu: true,
                              copyWithSyntaxHighlighting: false,
                              multiCursorModifier: "alt",
                              accessibilitySupport: "on",
                              mouseWheelZoom: true,
                              quickSuggestionsDelay: 0,
                              occurrencesHighlight: "singleFile",
                              wordBasedSuggestions: "currentDocument",
                              suggest: {
                                showWords: true,
                                showSnippets: true,
                                showClasses: true,
                                showFunctions: true,
                                showVariables: true,
                                showProperties: true,
                                showColors: true,
                                showFiles: true,
                                showReferences: true,
                                showFolders: true,
                                showTypeParameters: true,
                                showEnums: true,
                                showConstructors: true,
                                showDeprecated: true,
                                showEnumMembers: true,
                                showKeywords: true
                              }
                            }
                          }
                        ) })
                      ] })
                    ]
                  }
                ) }),
                validation.error && !validation.isValid && /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, { children: validation.error })
              ] })
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("coreConfigModal.name") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { isError: !!form.formState.errors.name, placeholder: t("coreConfigModal.namePlaceholder"), ...field }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "fallback_id",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("coreConfigModal.fallback") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: field.value && field.value.length > 0 ? field.value.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 rounded-md bg-muted/80 px-2 py-1 text-sm", children: [
                      tag,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "hover:text-destructive", onClick: () => field.onChange((field.value || []).filter((t2) => t2 !== tag)), children: "×" })
                    ] }, tag)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t("coreConfigModal.selectFallback") }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: void 0,
                        onValueChange: (value) => {
                          if (!value || value.trim() === "") return;
                          const currentValue = field.value || [];
                          if (!currentValue.includes(value)) {
                            field.onChange([...currentValue, value]);
                          }
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("coreConfigModal.selectFallback") }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: inboundTags.length > 0 ? inboundTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: tag, disabled: field.value?.includes(tag), className: "cursor-pointer", children: tag }, tag)) : /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no-inbounds", disabled: true, children: t("coreConfigModal.noInboundsFound") }, "no-inbounds") })
                        ]
                      }
                    ),
                    field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => field.onChange([]), className: "w-full", children: t("coreConfigModal.clearAllFallbacks") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "excluded_inbound_ids",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("coreConfigModal.excludedInbound") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: field.value && field.value.length > 0 ? field.value.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 rounded-md bg-muted/80 px-2 py-1 text-sm", children: [
                      tag,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "hover:text-destructive", onClick: () => field.onChange((field.value || []).filter((t2) => t2 !== tag)), children: "×" })
                    ] }, tag)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t("coreConfigModal.selectInbound") }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: void 0,
                        onValueChange: (value) => {
                          if (!value || value.trim() === "") return;
                          const currentValue = field.value || [];
                          if (!currentValue.includes(value)) {
                            field.onChange([...currentValue, value]);
                          }
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("coreConfigModal.selectInbound") }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: inboundTags.length > 0 ? inboundTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: tag, disabled: field.value?.includes(tag), className: "cursor-pointer", children: tag }, tag)) : /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no-inbounds", disabled: true, children: t("coreConfigModal.noInboundsFound") }, "no-inbounds") })
                        ]
                      }
                    ),
                    field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => field.onChange([]), className: "w-full", children: t("coreConfigModal.clearAllExcluded") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { dir, defaultValue: "reality", className: "w-full pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { dir: "ltr", className: "grid h-auto w-full grid-cols-3 gap-1 bg-muted/50 p-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "reality",
                    className: "min-w-0 truncate px-2 py-2.5 text-xs font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm sm:text-sm",
                    children: "Reality"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "shadowsocks",
                    className: "min-w-0 truncate px-2 py-2.5 text-xs font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm sm:text-sm",
                    children: "ShadowSocks"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TabsTrigger,
                  {
                    value: "vless",
                    className: "min-w-0 truncate px-2 py-2.5 text-xs font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm sm:text-sm",
                    children: "VLESS"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reality", className: "mt-3 space-y-3 duration-300 animate-in fade-in-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-2 sm:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoaderButton,
                  {
                    type: "button",
                    onClick: viewKeyPair,
                    className: "h-10 w-full text-sm font-medium transition-all hover:shadow-md sm:h-11",
                    isLoading: isGeneratingKeyPair,
                    loadingText: t("coreConfigModal.generatingKeyPair"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 truncate", children: [
                      generatedKeyPair && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 ring-2 ring-green-500/20" }),
                      t("coreConfigModal.generateKeyPair")
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoaderButton,
                  {
                    type: "button",
                    onClick: viewMldsa65,
                    className: "h-10 w-full text-sm font-medium transition-all hover:shadow-md sm:h-11",
                    isLoading: isGeneratingMldsa65,
                    loadingText: t("coreConfigModal.generatingMldsa65"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 truncate", children: [
                      generatedMldsa65 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 ring-2 ring-green-500/20" }),
                      t("coreConfigModal.generateMldsa65")
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoaderButton,
                  {
                    type: "button",
                    onClick: viewShortId,
                    className: "col-span-2 h-10 w-full text-sm font-medium transition-all hover:shadow-md sm:h-11",
                    isLoading: isGeneratingShortId,
                    loadingText: t("coreConfigModal.generatingShortId"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 truncate", children: [
                      generatedShortId && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 ring-2 ring-green-500/20" }),
                      t("coreConfigModal.generateShortId")
                    ] })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "shadowsocks", className: "mt-3 space-y-3 duration-300 animate-in fade-in-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold tracking-wide text-muted-foreground", children: t("coreConfigModal.shadowsocksEncryptionMethod", { defaultValue: "Encryption Method" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedEncryptionMethod, onValueChange: setSelectedEncryptionMethod, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SHADOWSOCKS_ENCRYPTION_METHODS.map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: method.value, children: method.label }, method.value)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoaderButton,
                  {
                    type: "button",
                    onClick: viewShadowsocksPassword,
                    className: "h-10 w-full text-sm font-medium transition-all hover:shadow-md sm:h-11",
                    isLoading: isGeneratingShadowsocksPassword,
                    loadingText: t("coreConfigModal.generatingShadowsocksPassword"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 truncate", children: [
                      generatedShadowsocksPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 ring-2 ring-green-500/20" }),
                      t("coreConfigModal.generateShadowsocksPassword")
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "vless", className: "mt-3 space-y-3 duration-300 animate-in fade-in-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderButton, { type: "button", onClick: viewVLESS, className: "h-10 w-full text-sm font-medium transition-all hover:shadow-md sm:h-11", isLoading: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 truncate", children: [
                generatedVLESS && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 ring-2 ring-green-500/20" }),
                t("coreConfigModal.generateVLESSEncryption")
              ] }) }) })
            ] })
          ] })
        ] }) }),
        !isEditorFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          editingCore && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "restart_nodes",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "mb-2 flex flex-row-reverse items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value, onCheckedChange: field.onChange }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "!m-0 text-sm", children: t("coreConfigModal.restartNodes") })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), disabled: createCoreMutation.isPending || modifyCoreMutation.isPending, children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoaderButton,
              {
                type: "submit",
                disabled: !validation.isValid || createCoreMutation.isPending || modifyCoreMutation.isPending || form.formState.isSubmitting,
                isLoading: createCoreMutation.isPending || modifyCoreMutation.isPending,
                loadingText: editingCore ? t("modifying") : t("creating"),
                children: editingCore ? t("modify") : t("create")
              }
            )
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  CoreConfigModal as default
};
//# sourceMappingURL=core-config-modal-BlAK5n8g.js.map
