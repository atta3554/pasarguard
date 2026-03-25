import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { L as Language, T as ThemeToggle, F as Footer } from "./theme-toggle-_TSuQHPu.js";
import { f as createLucideIcon, g as useTheme, q as queryClient, r as removeAuthToken, b0 as useAdminToken, b1 as useAdminMiniAppToken, b2 as $fetch, b3 as setAuthToken } from "./index-C_i3x-Gf.js";
import { A as Alert, b as AlertDescription } from "./alert-ttU4wGEU.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { P as PasswordInput } from "./password-input-RJqY0JKY.js";
import { a as a$2 } from "./zod-JrdXrq0M.js";
import { u as useForm, o as objectType, s as stringType } from "./types-CANcSf0A.js";
import { d as useNavigate, a as useLocation } from "./react-router-C8FEAJQh.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { C as CircleAlert } from "./circle-alert-40y1kNqq.js";
import "./Project-De_VC6al.js";
import "./button-BOH66nN-.js";
import "./radix-3Azqn93X.js";
import "./dropdown-menu-B4MHnVyu.js";
import "./circle-CMQZw6eB.js";
import "./chevron-right-DkXHvvEa.js";
import "./check-ayw17ogi.js";
import "./popover-BXLf6-bP.js";
import "./sun-C1kX90iq.js";
import "./separator-BXI4Bz0S.js";
import "./x-C6aLLO-Y.js";
import "./skeleton-BQXgKF1e.js";
import "./tooltip-BT7me4NQ.js";
import "./use-mobile-mll3IbV8.js";
import "./monitor-ZPkozcYt.js";
import "./react-query-DMC2nZO-.js";
import "./recharts-B0278qLa.js";
import "./eye-BsrIbFi5.js";
const LogIn = createLucideIcon("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
]);
var store$1;
// @__NO_SIDE_EFFECTS__
function getGlobalConfig$1(config2) {
  return {
    lang: config2?.lang ?? store$1?.lang,
    message: config2?.message,
    abortEarly: config2?.abortEarly ?? store$1?.abortEarly,
    abortPipeEarly: config2?.abortPipeEarly ?? store$1?.abortPipeEarly
  };
}
var store2$1;
// @__NO_SIDE_EFFECTS__
function getGlobalMessage$1(lang) {
  return store2$1?.get(lang);
}
var store3$1;
// @__NO_SIDE_EFFECTS__
function getSchemaMessage$1(lang) {
  return store3$1?.get(lang);
}
var store4$1;
// @__NO_SIDE_EFFECTS__
function getSpecificMessage$1(reference, lang) {
  return store4$1?.get(reference)?.get(lang);
}
// @__NO_SIDE_EFFECTS__
function _stringify$1(input) {
  const type = typeof input;
  if (type === "string") {
    return `"${input}"`;
  }
  if (type === "number" || type === "bigint" || type === "boolean") {
    return `${input}`;
  }
  if (type === "object" || type === "function") {
    return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
  }
  return type;
}
function _addIssue$1(context, label, dataset, config2, other) {
  const input = other && "input" in other ? other.input : dataset.value;
  const expected = other?.expected ?? context.expects ?? null;
  const received = other?.received ?? /* @__PURE__ */ _stringify$1(input);
  const issue = {
    kind: context.kind,
    type: context.type,
    input,
    expected,
    received,
    message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
    requirement: context.requirement,
    path: other?.path,
    issues: other?.issues,
    lang: config2.lang,
    abortEarly: config2.abortEarly,
    abortPipeEarly: config2.abortPipeEarly
  };
  const isSchema = context.kind === "schema";
  const message = other?.message ?? context.message ?? /* @__PURE__ */ getSpecificMessage$1(context.reference, issue.lang) ?? (isSchema ? /* @__PURE__ */ getSchemaMessage$1(issue.lang) : null) ?? config2.message ?? /* @__PURE__ */ getGlobalMessage$1(issue.lang);
  if (message !== void 0) {
    issue.message = typeof message === "function" ? (
      // @ts-expect-error
      message(issue)
    ) : message;
  }
  if (isSchema) {
    dataset.typed = false;
  }
  if (dataset.issues) {
    dataset.issues.push(issue);
  } else {
    dataset.issues = [issue];
  }
}
// @__NO_SIDE_EFFECTS__
function _getStandardProps$1(context) {
  return {
    version: 1,
    vendor: "valibot",
    validate(value2) {
      return context["~run"]({ value: value2 }, /* @__PURE__ */ getGlobalConfig$1());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _isValidObjectKey$1(object2, key) {
  return Object.hasOwn(object2, key) && key !== "__proto__" && key !== "prototype" && key !== "constructor";
}
var ValiError$1 = class ValiError extends Error {
  /**
   * Creates a Valibot error with useful information.
   *
   * @param issues The error issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "ValiError";
    this.issues = issues;
  }
};
// @__NO_SIDE_EFFECTS__
function getFallback$1(schema2, dataset, config2) {
  return typeof schema2.fallback === "function" ? (
    // @ts-expect-error
    schema2.fallback(dataset, config2)
  ) : (
    // @ts-expect-error
    schema2.fallback
  );
}
// @__NO_SIDE_EFFECTS__
function getDefault$1(schema2, dataset, config2) {
  return typeof schema2.default === "function" ? (
    // @ts-expect-error
    schema2.default(dataset, config2)
  ) : (
    // @ts-expect-error
    schema2.default
  );
}
// @__NO_SIDE_EFFECTS__
function is$1(schema2, input) {
  return !schema2["~run"]({ value: input }, { abortEarly: true }).issues;
}
// @__NO_SIDE_EFFECTS__
function boolean(message) {
  return {
    kind: "schema",
    type: "boolean",
    reference: boolean,
    expects: "boolean",
    async: false,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "boolean") {
        dataset.typed = true;
      } else {
        _addIssue$1(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function function_(message) {
  return {
    kind: "schema",
    type: "function",
    reference: function_,
    expects: "Function",
    async: false,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "function") {
        dataset.typed = true;
      } else {
        _addIssue$1(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function looseObject$1(entries, message) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: looseObject$1,
    expects: "Object",
    async: false,
    entries,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        dataset.typed = true;
        dataset.value = {};
        for (const key in this.entries) {
          const valueSchema = this.entries[key];
          if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && // @ts-expect-error
          valueSchema.default !== void 0) {
            const value2 = key in input ? (
              // @ts-expect-error
              input[key]
            ) : /* @__PURE__ */ getDefault$1(valueSchema);
            const valueDataset = valueSchema["~run"]({ value: value2 }, config2);
            if (valueDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "value",
                input,
                key,
                value: value2
              };
              for (const issue of valueDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [pathItem];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = valueDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!valueDataset.typed) {
              dataset.typed = false;
            }
            dataset.value[key] = valueDataset.value;
          } else if (valueSchema.fallback !== void 0) {
            dataset.value[key] = /* @__PURE__ */ getFallback$1(valueSchema);
          } else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
            _addIssue$1(this, "key", dataset, config2, {
              input: void 0,
              expected: `"${key}"`,
              path: [
                {
                  type: "object",
                  origin: "key",
                  input,
                  key,
                  // @ts-expect-error
                  value: input[key]
                }
              ]
            });
            if (config2.abortEarly) {
              break;
            }
          }
        }
        if (!dataset.issues || !config2.abortEarly) {
          for (const key in input) {
            if (/* @__PURE__ */ _isValidObjectKey$1(input, key) && !(key in this.entries)) {
              dataset.value[key] = input[key];
            }
          }
        }
      } else {
        _addIssue$1(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nullish(wrapped, default_) {
  return {
    kind: "schema",
    type: "nullish",
    reference: nullish,
    expects: `(${wrapped.expects} | null | undefined)`,
    async: false,
    wrapped,
    default: default_,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value === null || dataset.value === void 0) {
        if (this.default !== void 0) {
          dataset.value = /* @__PURE__ */ getDefault$1(this, dataset, config2);
        }
        if (dataset.value === null || dataset.value === void 0) {
          dataset.typed = true;
          return dataset;
        }
      }
      return this.wrapped["~run"](dataset, config2);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function number$1(message) {
  return {
    kind: "schema",
    type: "number",
    reference: number$1,
    expects: "number",
    async: false,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "number" && !isNaN(dataset.value)) {
        dataset.typed = true;
      } else {
        _addIssue$1(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function optional$1(wrapped, default_) {
  return {
    kind: "schema",
    type: "optional",
    reference: optional$1,
    expects: `(${wrapped.expects} | undefined)`,
    async: false,
    wrapped,
    default: default_,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value === void 0) {
        if (this.default !== void 0) {
          dataset.value = /* @__PURE__ */ getDefault$1(this, dataset, config2);
        }
        if (dataset.value === void 0) {
          dataset.typed = true;
          return dataset;
        }
      }
      return this.wrapped["~run"](dataset, config2);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function string$1(message) {
  return {
    kind: "schema",
    type: "string",
    reference: string$1,
    expects: "string",
    async: false,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "string") {
        dataset.typed = true;
      } else {
        _addIssue$1(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function unknown() {
  return {
    kind: "schema",
    type: "unknown",
    reference: unknown,
    expects: "unknown",
    async: false,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset) {
      dataset.typed = true;
      return dataset;
    }
  };
}
function parse$1(schema2, input, config2) {
  const dataset = schema2["~run"]({ value: input }, /* @__PURE__ */ getGlobalConfig$1(config2));
  if (dataset.issues) {
    throw new ValiError$1(dataset.issues);
  }
  return dataset.value;
}
// @__NO_SIDE_EFFECTS__
function pipe$1(...pipe2) {
  return {
    ...pipe2[0],
    pipe: pipe2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps$1(this);
    },
    "~run"(dataset, config2) {
      for (const item of pipe2) {
        if (item.kind !== "metadata") {
          if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
            dataset.typed = false;
            break;
          }
          if (!dataset.issues || !config2.abortEarly && !config2.abortPipeEarly) {
            dataset = item["~run"](dataset, config2);
          }
        }
      }
      return dataset;
    }
  };
}
var V$3 = Object.defineProperty;
var Y$2 = (r2, t, e) => t in r2 ? V$3(r2, t, { enumerable: true, configurable: true, writable: true, value: e }) : r2[t] = e;
var y$3 = (r2, t, e) => Y$2(r2, typeof t != "symbol" ? t + "" : t, e);
var $$2 = Object.defineProperty, k$2 = (r2, t, e) => t in r2 ? $$2(r2, t, { enumerable: true, configurable: true, writable: true, value: e }) : r2[t] = e, q$1 = (r2, t, e) => k$2(r2, t + "", e);
function z$3(r2, t) {
  return (e) => e instanceof r2 && e.type === t;
}
function P(r2, t) {
  t || (t = []);
  const e = Symbol(r2);
  class c2 extends Error {
    constructor(...s) {
      const a2 = typeof t == "function" ? t(...s) : typeof t == "string" ? [t] : t || [];
      super(...a2), q$1(this, "type", e), this.name = r2;
    }
  }
  return Object.defineProperty(c2, "name", { value: r2 }), [c2, z$3(c2, e)];
}
const [G$2, M$1] = P("CancelledError", "Promise was canceled"), [H$3] = P(
  "TimeoutError",
  (r2, t) => [`Timeout reached: ${r2}ms`, { cause: t }]
), B$1 = /* @__PURE__ */ Symbol("Resolved");
function C$1(r2) {
  return Array.isArray(r2) && r2[0] === B$1;
}
function J$2(r2) {
  return [B$1, r2];
}
function x$3(r2, t) {
  return r2.reject = t.reject, r2.abort = t.abort, r2;
}
let m$1 = class m extends Promise {
  constructor(e, c2) {
    let o, s;
    super((a2, i2) => {
      let v2, u2;
      typeof e == "function" ? (v2 = e, u2 = c2) : u2 = e;
      const d2 = [], j2 = (n) => (...h2) => {
        const p2 = n(...h2);
        return d2.forEach((F2) => F2()), p2;
      }, g2 = new AbortController(), { signal: l2 } = g2;
      s = (n) => {
        !l2.aborted && g2.abort(n);
      };
      const b2 = () => l2.reason, w2 = (n) => {
        const h2 = () => {
          n(b2());
        };
        l2.addEventListener("abort", h2, true);
        const p2 = () => {
          l2.removeEventListener("abort", h2, true);
        };
        return d2.push(p2), p2;
      }, D2 = j2((n) => {
        a2(n), s(J$2(n));
      });
      o = j2((n) => {
        i2(n), s(n);
      }), u2 || (u2 = {});
      const { abortSignal: f2, rejectOnAbort: A2 = true } = u2;
      if (f2)
        if (f2.aborted) {
          const { reason: n } = f2;
          if (A2)
            return o(n);
          s(n);
        } else {
          const n = () => {
            s(f2.reason);
          };
          f2.addEventListener("abort", n), d2.push(() => {
            f2.removeEventListener("abort", n);
          });
        }
      A2 && w2(i2);
      const { timeout: E2 } = u2;
      if (E2) {
        const n = setTimeout(() => {
          s(new H$3(E2));
        }, E2);
        d2.push(() => {
          clearTimeout(n);
        });
      }
      const L2 = () => l2.aborted, S2 = () => C$1(b2()), T2 = () => {
        const n = b2();
        return C$1(n) ? n[1] : void 0;
      };
      try {
        const n = v2 && v2(D2, o, {
          abortReason: b2,
          abortSignal: l2,
          isAborted: L2,
          isResolved: S2,
          onAborted: w2,
          onResolved: (h2) => w2(() => {
            S2() && h2(T2());
          }),
          resolved: T2,
          throwIfAborted() {
            if (L2())
              throw b2();
          }
        });
        n instanceof Promise && n.catch(o);
      } catch (n) {
        o(n);
      }
    });
    y$3(this, "abort");
    y$3(this, "reject");
    this.abort = s, this.reject = o;
  }
  /**
   * Creates a new AbortablePromise instance using an executor, resolving the promise when a result
   * was returned.
   * @param fn - function returning promise result.
   * @param options - additional options.
   */
  static fn(e, c2) {
    return new m(async (o, s, a2) => {
      try {
        o(await e(a2));
      } catch (i2) {
        s(i2);
      }
    }, c2);
  }
  static resolve(e) {
    return this.fn(() => e);
  }
  /**
   * @see Promise.reject
   */
  static reject(e) {
    return new m((c2, o) => {
      o(e);
    });
  }
  /**
   * Aborts the promise with the cancel error.
   */
  cancel() {
    this.abort(new G$2());
  }
  /**
   * @see Promise.catch
   */
  catch(e) {
    return this.then(void 0, e);
  }
  /**
   * @see Promise.finally
   */
  finally(e) {
    return x$3(super.finally(e), this);
  }
  /**
   * @see Promise.then
   */
  then(e, c2) {
    return x$3(super.then(e, c2), this);
  }
};
function I$3(r2, t) {
  return r2.resolve = t.resolve, r2;
}
let R$2 = class R extends m$1 {
  constructor(e, c2) {
    let o, s;
    typeof e == "function" ? (o = e, s = c2) : s = e;
    let a2;
    super((i2, v2, u2) => {
      a2 = i2, o && o(i2, v2, u2);
    }, s);
    y$3(this, "resolve");
    this.resolve = a2;
  }
  /**
   * Creates a new ManualPromise instance using an executor, resolving the promise when a result
   * was returned.
   * @param fn - function returning promise result.
   * @param options - additional options.
   */
  static fn(e, c2) {
    return new R((o, s, a2) => {
      try {
        Promise.resolve(e(a2)).then(o, s);
      } catch (i2) {
        s(i2);
      }
    }, c2);
  }
  static resolve(e) {
    return this.fn(() => e);
  }
  /**
   * @see Promise.reject
   */
  static reject(e) {
    return new R((c2, o) => {
      o(e);
    });
  }
  /**
   * @see Promise.catch
   */
  catch(e) {
    return this.then(void 0, e);
  }
  /**
   * @see Promise.finally
   */
  finally(e) {
    return I$3(super.finally(e), this);
  }
  /**
   * @see Promise.then
   */
  then(e, c2) {
    return I$3(super.then(e, c2), this);
  }
};
function y$2(o) {
  return o.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function k$1(o) {
  return o.replace(/_([a-z])/g, (e, r2) => `-${r2.toLowerCase()}`);
}
function g$1(o) {
  return `tapps/${o}`;
}
function w$2(o, e) {
  sessionStorage.setItem(g$1(o), JSON.stringify(e));
}
function T$1(o) {
  const e = sessionStorage.getItem(g$1(o));
  try {
    return e ? JSON.parse(e) : void 0;
  } catch {
  }
}
function L$2(...o) {
  const e = o.flat(1);
  return [
    e.push.bind(e),
    () => {
      e.forEach((r2) => {
        r2();
      });
    }
  ];
}
// @__NO_SIDE_EFFECTS__
function O$2(o, e) {
  e || (e = {});
  const {
    textColor: r2,
    bgColor: t,
    shouldLog: s
  } = e, c2 = s === void 0 ? true : s, d2 = typeof c2 == "boolean" ? () => c2 : c2, u2 = (n, a2, ...i2) => {
    if (a2 || d2()) {
      const l2 = "font-weight:bold;padding:0 5px;border-radius:100px", [b2, m3, p2] = {
        log: ["#0089c3", "white", "INFO"],
        error: ["#ff0000F0", "white", "ERR"],
        warn: ["#D38E15", "white", "WARN"]
      }[n];
      console[n](
        `%c${p2} ${Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          fractionalSecondDigits: 3,
          timeZone: "UTC"
        }).format(/* @__PURE__ */ new Date())}%c %c${o}`,
        `${l2};background-color:${b2};color:${m3}`,
        "",
        `${l2};${r2 ? `color:${r2};` : ""}${t ? `background-color:${t}` : ""}`,
        ...i2
      );
    }
  };
  return [
    ["log", "forceLog"],
    ["warn", "forceWarn"],
    ["error", "forceError"]
  ].reduce((n, [a2, i2]) => (n[a2] = u2.bind(void 0, a2, false), n[i2] = u2.bind(void 0, a2, true), n), {});
}
// @__NO_SIDE_EFFECTS__
function N$1(e) {
  return {
    lang: (e == null ? void 0 : e.lang) ?? void 0,
    message: e == null ? void 0 : e.message,
    abortEarly: (e == null ? void 0 : e.abortEarly) ?? void 0,
    abortPipeEarly: (e == null ? void 0 : e.abortPipeEarly) ?? void 0
  };
}
// @__NO_SIDE_EFFECTS__
function Z$2(e) {
  return void 0;
}
// @__NO_SIDE_EFFECTS__
function ee$2(e) {
  return void 0;
}
// @__NO_SIDE_EFFECTS__
function ne(e, n) {
  var r2;
  return (r2 = void 0) == null ? void 0 : r2.get(n);
}
// @__NO_SIDE_EFFECTS__
function re$1(e) {
  var r2, t;
  const n = typeof e;
  return n === "string" ? `"${e}"` : n === "number" || n === "bigint" || n === "boolean" ? `${e}` : n === "object" || n === "function" ? (e && ((t = (r2 = Object.getPrototypeOf(e)) == null ? void 0 : r2.constructor) == null ? void 0 : t.name)) ?? "null" : n;
}
function f$2(e, n, r2, t, s) {
  const u2 = s && "input" in s ? s.input : r2.value, i2 = (s == null ? void 0 : s.expected) ?? e.expects ?? null, l2 = (s == null ? void 0 : s.received) ?? /* @__PURE__ */ re$1(u2), o = {
    kind: e.kind,
    type: e.type,
    input: u2,
    expected: i2,
    received: l2,
    message: `Invalid ${n}: ${i2 ? `Expected ${i2} but r` : "R"}eceived ${l2}`,
    requirement: e.requirement,
    path: s == null ? void 0 : s.path,
    issues: s == null ? void 0 : s.issues,
    lang: t.lang,
    abortEarly: t.abortEarly,
    abortPipeEarly: t.abortPipeEarly
  }, y2 = e.kind === "schema", p2 = (s == null ? void 0 : s.message) ?? e.message ?? /* @__PURE__ */ ne(e.reference, o.lang) ?? (y2 ? /* @__PURE__ */ ee$2(o.lang) : null) ?? t.message ?? /* @__PURE__ */ Z$2(o.lang);
  p2 && (o.message = typeof p2 == "function" ? (
    // @ts-expect-error
    p2(o)
  ) : p2), y2 && (r2.typed = false), r2.issues ? r2.issues.push(o) : r2.issues = [o];
}
// @__NO_SIDE_EFFECTS__
function h$2(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(n) {
      return e["~run"]({ value: n }, /* @__PURE__ */ N$1());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function W$2(e, n) {
  return Object.hasOwn(e, n) && n !== "__proto__" && n !== "prototype" && n !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function te$1(e, n) {
  const r2 = [...new Set(e)];
  return r2.length > 1 ? `(${r2.join(` ${n} `)})` : r2[0] ?? "never";
}
var se = class extends Error {
  /**
   * Creates a Valibot error with useful information.
   *
   * @param issues The error issues.
   */
  constructor(e) {
    super(e[0].message), this.name = "ValiError", this.issues = e;
  }
};
// @__NO_SIDE_EFFECTS__
function L$1(e, n) {
  return {
    kind: "validation",
    type: "check",
    reference: L$1,
    async: false,
    expects: null,
    requirement: e,
    message: n,
    "~run"(r2, t) {
      return r2.typed && !this.requirement(r2.value) && f$2(this, "input", r2, t), r2;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function R$1(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: R$1,
    async: false,
    expects: null,
    requirement: Number.isInteger,
    message: e,
    "~run"(n, r2) {
      return n.typed && !this.requirement(n.value) && f$2(this, "integer", n, r2), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function d$1(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: d$1,
    async: false,
    operation: e,
    "~run"(n) {
      return n.value = this.operation(n.value), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function U$1(e, n, r2) {
  return typeof e.default == "function" ? (
    // @ts-expect-error
    e.default(n, r2)
  ) : (
    // @ts-expect-error
    e.default
  );
}
// @__NO_SIDE_EFFECTS__
function ie$1(e, n) {
  return !e["~run"]({ value: n }, { abortEarly: true }).issues;
}
// @__NO_SIDE_EFFECTS__
function _(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: _,
    expects: "boolean",
    async: false,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(n, r2) {
      return typeof n.value == "boolean" ? n.typed = true : f$2(this, "type", n, r2), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function z$2(e) {
  return {
    kind: "schema",
    type: "date",
    reference: z$2,
    expects: "Date",
    async: false,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(n, r2) {
      return n.value instanceof Date ? isNaN(n.value) ? f$2(this, "type", n, r2, {
        received: '"Invalid Date"'
      }) : n.typed = true : f$2(this, "type", n, r2), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function J$1(e, n) {
  return {
    kind: "schema",
    type: "instance",
    reference: J$1,
    expects: e.name,
    async: false,
    class: e,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(r2, t) {
      return r2.value instanceof this.class ? r2.typed = true : f$2(this, "type", r2, t), r2;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function A(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: A,
    expects: "unknown",
    async: false,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(n, r2) {
      return this.getter(n.value)["~run"](n, r2);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function k(e, n) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: k,
    expects: "Object",
    async: false,
    entries: e,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(r2, t) {
      var u2;
      const s = r2.value;
      if (s && typeof s == "object") {
        r2.typed = true, r2.value = {};
        for (const i2 in this.entries) {
          const l2 = this.entries[i2];
          if (i2 in s || (l2.type === "exact_optional" || l2.type === "optional" || l2.type === "nullish") && // @ts-expect-error
          l2.default !== void 0) {
            const o = i2 in s ? (
              // @ts-expect-error
              s[i2]
            ) : /* @__PURE__ */ U$1(l2), y2 = l2["~run"]({ value: o }, t);
            if (y2.issues) {
              const p2 = {
                type: "object",
                origin: "value",
                input: s,
                key: i2,
                value: o
              };
              for (const m3 of y2.issues)
                m3.path ? m3.path.unshift(p2) : m3.path = [p2], (u2 = r2.issues) == null || u2.push(m3);
              if (r2.issues || (r2.issues = y2.issues), t.abortEarly) {
                r2.typed = false;
                break;
              }
            }
            y2.typed || (r2.typed = false), r2.value[i2] = y2.value;
          } else if (l2.type !== "exact_optional" && l2.type !== "optional" && l2.type !== "nullish" && (f$2(this, "key", r2, t, {
            input: void 0,
            expected: `"${i2}"`,
            path: [
              {
                type: "object",
                origin: "key",
                input: s,
                key: i2,
                // @ts-expect-error
                value: s[i2]
              }
            ]
          }), t.abortEarly))
            break;
        }
        if (!r2.issues || !t.abortEarly)
          for (const i2 in s)
            /* @__PURE__ */ W$2(s, i2) && !(i2 in this.entries) && (r2.value[i2] = s[i2]);
      } else
        f$2(this, "type", r2, t);
      return r2;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function E$1(e) {
  return {
    kind: "schema",
    type: "number",
    reference: E$1,
    expects: "number",
    async: false,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(n, r2) {
      return typeof n.value == "number" && !isNaN(n.value) ? n.typed = true : f$2(this, "type", n, r2), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function c$3(e, n) {
  return {
    kind: "schema",
    type: "optional",
    reference: c$3,
    expects: `(${e.expects} | undefined)`,
    async: false,
    wrapped: e,
    default: n,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(r2, t) {
      return r2.value === void 0 && (this.default !== void 0 && (r2.value = /* @__PURE__ */ U$1(this, r2, t)), r2.value === void 0) ? (r2.typed = true, r2) : this.wrapped["~run"](r2, t);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function V$2(e, n, r2) {
  return {
    kind: "schema",
    type: "record",
    reference: V$2,
    expects: "Object",
    async: false,
    key: e,
    value: n,
    message: r2,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(t, s) {
      var i2, l2;
      const u2 = t.value;
      if (u2 && typeof u2 == "object") {
        t.typed = true, t.value = {};
        for (const o in u2)
          if (/* @__PURE__ */ W$2(u2, o)) {
            const y2 = u2[o], p2 = this.key["~run"]({ value: o }, s);
            if (p2.issues) {
              const S2 = {
                type: "object",
                origin: "key",
                input: u2,
                key: o,
                value: y2
              };
              for (const g2 of p2.issues)
                g2.path = [S2], (i2 = t.issues) == null || i2.push(g2);
              if (t.issues || (t.issues = p2.issues), s.abortEarly) {
                t.typed = false;
                break;
              }
            }
            const m3 = this.value["~run"](
              { value: y2 },
              s
            );
            if (m3.issues) {
              const S2 = {
                type: "object",
                origin: "value",
                input: u2,
                key: o,
                value: y2
              };
              for (const g2 of m3.issues)
                g2.path ? g2.path.unshift(S2) : g2.path = [S2], (l2 = t.issues) == null || l2.push(g2);
              if (t.issues || (t.issues = m3.issues), s.abortEarly) {
                t.typed = false;
                break;
              }
            }
            (!p2.typed || !m3.typed) && (t.typed = false), p2.typed && (t.value[p2.value] = m3.value);
          }
      } else
        f$2(this, "type", t, s);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function a$1(e) {
  return {
    kind: "schema",
    type: "string",
    reference: a$1,
    expects: "string",
    async: false,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(n, r2) {
      return typeof n.value == "string" ? n.typed = true : f$2(this, "type", n, r2), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function O$1(e) {
  let n;
  if (e)
    for (const r2 of e)
      n ? n.push(...r2.issues) : n = r2.issues;
  return n;
}
// @__NO_SIDE_EFFECTS__
function $$1(e, n) {
  return {
    kind: "schema",
    type: "union",
    reference: $$1,
    expects: /* @__PURE__ */ te$1(
      e.map((r2) => r2.expects),
      "|"
    ),
    async: false,
    options: e,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(r2, t) {
      let s, u2, i2;
      for (const l2 of this.options) {
        const o = l2["~run"]({ value: r2.value }, t);
        if (o.typed)
          if (o.issues)
            u2 ? u2.push(o) : u2 = [o];
          else {
            s = o;
            break;
          }
        else
          i2 ? i2.push(o) : i2 = [o];
      }
      if (s)
        return s;
      if (u2) {
        if (u2.length === 1)
          return u2[0];
        f$2(this, "type", r2, t, {
          issues: /* @__PURE__ */ O$1(u2)
        }), r2.typed = true;
      } else {
        if ((i2 == null ? void 0 : i2.length) === 1)
          return i2[0];
        f$2(this, "type", r2, t, {
          issues: /* @__PURE__ */ O$1(i2)
        });
      }
      return r2;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function q() {
  return {
    kind: "schema",
    type: "unknown",
    reference: q,
    expects: "unknown",
    async: false,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(e) {
      return e.typed = true, e;
    }
  };
}
function B(e, n, r2) {
  const t = e["~run"]({ value: n }, /* @__PURE__ */ N$1(r2));
  if (t.issues)
    throw new se(t.issues);
  return t.value;
}
// @__NO_SIDE_EFFECTS__
function v$1(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ h$2(this);
    },
    "~run"(n, r2) {
      for (const t of e)
        if (t.kind !== "metadata") {
          if (n.issues && (t.kind === "schema" || t.kind === "transformation")) {
            n.typed = false;
            break;
          }
          (!n.issues || !r2.abortEarly && !r2.abortPipeEarly) && (n = t["~run"](n, r2));
        }
      return n;
    }
  };
}
function ue$1(e) {
  return e.replace(/_[a-z]/g, (n) => n[1].toUpperCase());
}
function ae$1(e) {
  return Object.entries(e).reduce((n, [r2, t]) => (n[ue$1(r2)] = t, n), {});
}
function w$1(e) {
  const n = ae$1(e);
  for (const r2 in n) {
    const t = n[r2];
    t && typeof t == "object" && !(t instanceof Date) && (n[r2] = Array.isArray(t) ? t.map(w$1) : w$1(t));
  }
  return n;
}
function I$2(e) {
  return /* @__PURE__ */ d$1((n) => e ? w$1(n) : n);
}
function M(e) {
  return (n) => /* @__PURE__ */ v$1(
    e,
    I$2(n)
  );
}
function T(e) {
  return (n, r2) => B(
    /* @__PURE__ */ v$1(e, I$2(r2)),
    n
  );
}
function oe() {
  return /* @__PURE__ */ d$1(JSON.parse);
}
function C(e) {
  const n = M(e);
  return (r2) => /* @__PURE__ */ v$1(
    /* @__PURE__ */ a$1(),
    oe(),
    n(r2)
  );
}
function ce$1(e) {
  return /* @__PURE__ */ d$1((n) => {
    const r2 = {};
    return new URLSearchParams(n).forEach((t, s) => {
      const u2 = r2[s];
      Array.isArray(u2) ? u2.push(t) : u2 === void 0 ? r2[s] = t : r2[s] = [u2, t];
    }), B(e, r2);
  });
}
function K$2(e) {
  return (n) => /* @__PURE__ */ v$1(
    /* @__PURE__ */ $$1([/* @__PURE__ */ a$1(), /* @__PURE__ */ J$1(URLSearchParams)]),
    ce$1(e),
    I$2(n)
  );
}
const Q$1 = /* @__PURE__ */ c$3(/* @__PURE__ */ A(() => he$1())), le$2 = /* @__PURE__ */ k({
  id: /* @__PURE__ */ E$1(),
  photo_url: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  type: /* @__PURE__ */ a$1(),
  title: /* @__PURE__ */ a$1(),
  username: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1())
}), pe$2 = /* @__PURE__ */ k({
  added_to_attachment_menu: /* @__PURE__ */ c$3(/* @__PURE__ */ _()),
  allows_write_to_pm: /* @__PURE__ */ c$3(/* @__PURE__ */ _()),
  first_name: /* @__PURE__ */ a$1(),
  id: /* @__PURE__ */ E$1(),
  is_bot: /* @__PURE__ */ c$3(/* @__PURE__ */ _()),
  is_premium: /* @__PURE__ */ c$3(/* @__PURE__ */ _()),
  last_name: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  language_code: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  photo_url: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  username: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1())
}), fe = /* @__PURE__ */ k({
  auth_date: /* @__PURE__ */ v$1(
    /* @__PURE__ */ a$1(),
    /* @__PURE__ */ d$1((e) => new Date(Number(e) * 1e3)),
    /* @__PURE__ */ z$2()
  ),
  can_send_after: /* @__PURE__ */ c$3(/* @__PURE__ */ v$1(/* @__PURE__ */ a$1(), /* @__PURE__ */ d$1(Number), /* @__PURE__ */ R$1())),
  chat: /* @__PURE__ */ c$3(/* @__PURE__ */ A(() => ye$2())),
  chat_type: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  chat_instance: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  hash: /* @__PURE__ */ a$1(),
  query_id: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  receiver: Q$1,
  start_param: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  signature: /* @__PURE__ */ a$1(),
  user: Q$1
}), ye$2 = C(le$2), he$1 = C(pe$2), F$1 = K$2(fe);
function H$2(e) {
  return /^#[\da-f]{6}$/i.test(e);
}
const be$1 = M(
  /* @__PURE__ */ V$2(
    /* @__PURE__ */ a$1(),
    /* @__PURE__ */ v$1(
      /* @__PURE__ */ $$1([/* @__PURE__ */ a$1(), /* @__PURE__ */ E$1()]),
      /* @__PURE__ */ d$1((e) => typeof e == "number" ? `#${(e & 16777215).toString(16).padStart(6, "0")}` : e),
      /* @__PURE__ */ L$1(H$2)
    )
  )
), x$2 = /* @__PURE__ */ c$3(
  /* @__PURE__ */ v$1(/* @__PURE__ */ a$1(), /* @__PURE__ */ d$1((e) => e === "1"))
), G$1 = C(be$1()), de$1 = /* @__PURE__ */ k({
  tgWebAppBotInline: x$2,
  tgWebAppData: /* @__PURE__ */ c$3(F$1()),
  tgWebAppDefaultColors: /* @__PURE__ */ c$3(G$1()),
  tgWebAppFullscreen: x$2,
  tgWebAppPlatform: /* @__PURE__ */ a$1(),
  tgWebAppShowSettings: x$2,
  tgWebAppStartParam: /* @__PURE__ */ c$3(/* @__PURE__ */ a$1()),
  tgWebAppThemeParams: G$1(),
  tgWebAppVersion: /* @__PURE__ */ a$1()
}), X$1 = K$2(de$1), _e = T(X$1()), Se$2 = /* @__PURE__ */ k({
  eventType: /* @__PURE__ */ a$1(),
  eventData: /* @__PURE__ */ c$3(/* @__PURE__ */ q())
});
function De$2(e) {
  try {
    return /* @__PURE__ */ ie$1(X$1(), e);
  } catch {
    return false;
  }
}
function pe$1(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i2 = n.get(t);
    i2 ? i2.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i2 = n.get(t);
    i2 && (e ? i2.splice(i2.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i2 = n.get(t);
    i2 && i2.slice().map(function(n2) {
      n2(e);
    }), (i2 = n.get("*")) && i2.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
let r;
function y$1(e, c2) {
  r && r.set(e, c2) || c2();
}
function m2(e) {
  if (r)
    return e();
  r = /* @__PURE__ */ new Map();
  try {
    e();
  } finally {
    r.forEach((c2) => c2()), r = void 0;
  }
}
// @__NO_SIDE_EFFECTS__
function S(e, c2) {
  c2 || (c2 = {});
  const g2 = c2.equals || Object.is;
  let u2 = [], s = e;
  const i2 = (t) => {
    if (!g2(s, t)) {
      const l2 = s;
      s = t, y$1(o, () => {
        [...u2].forEach(([f2, d2]) => {
          f2(t, l2), d2 && n(f2, true);
        });
      });
    }
  };
  function a2(t) {
    const l2 = typeof t != "object" ? { once: t } : t;
    return {
      once: l2.once || false,
      signal: l2.signal || false
    };
  }
  const n = (t, l2) => {
    const f2 = a2(l2), d2 = u2.findIndex(([h2, p2]) => h2 === t && p2.once === f2.once && p2.signal === f2.signal);
    d2 >= 0 && u2.splice(d2, 1);
  }, o = Object.assign(
    function() {
      return j$2(o), s;
    },
    {
      destroy() {
        u2 = [];
      },
      set: i2,
      reset() {
        i2(e);
      },
      sub(t, l2) {
        return u2.push([t, a2(l2)]), () => n(t, l2);
      },
      unsub: n,
      unsubAll() {
        u2 = u2.filter((t) => t[1].signal);
      }
    }
  );
  return o;
}
const b$1 = [];
function j$2(e) {
  b$1.length && b$1[b$1.length - 1].add(e);
}
// @__NO_SIDE_EFFECTS__
function x$1(e, c2) {
  let g2 = /* @__PURE__ */ new Set(), u2;
  function s() {
    return u2 || (u2 = /* @__PURE__ */ S(a2(), c2));
  }
  function i2() {
    s().set(a2());
  }
  function a2() {
    g2.forEach((t) => {
      t.unsub(i2, { signal: true });
    });
    const n = /* @__PURE__ */ new Set();
    let o;
    b$1.push(n);
    try {
      o = e();
    } finally {
      b$1.pop();
    }
    return n.forEach((t) => {
      t.sub(i2, { signal: true });
    }), g2 = n, o;
  }
  return Object.assign(function() {
    return s()();
  }, {
    destroy() {
      s().destroy();
    },
    sub(...n) {
      return s().sub(...n);
    },
    unsub(...n) {
      s().unsub(...n);
    },
    unsubAll(...n) {
      s().unsubAll(...n);
    }
  });
}
var f$1 = Object.defineProperty;
var u$1 = (r2, t, e) => t in r2 ? f$1(r2, t, { enumerable: true, configurable: true, writable: true, value: e }) : r2[t] = e;
var c$2 = (r2, t, e) => u$1(r2, typeof t != "symbol" ? t + "" : t, e);
function a(r2, t) {
  return (e) => e instanceof r2 && e.type === t;
}
function p$2(r2, t) {
  t || (t = []);
  const e = Symbol(r2);
  class n extends Error {
    constructor(...i2) {
      const o = typeof t == "function" ? t(...i2) : typeof t == "string" ? [t] : t || [];
      super(...o);
      c$2(this, "type", e);
      this.name = r2;
    }
  }
  return Object.defineProperty(n, "name", { value: r2 }), [n, a(n, e)];
}
function l(r2, t, e) {
  const n = Symbol(r2);
  class s extends p$2(r2, e)[0] {
    constructor(...o) {
      super(...o);
      c$2(this, "data");
      c$2(this, "type", n);
      this.data = t(...o);
    }
  }
  return Object.defineProperty(s, "name", { value: r2 }), [s, a(s, n)];
}
function H$1(e) {
  return /* @__PURE__ */ is$1(
    /* @__PURE__ */ looseObject$1({ TelegramWebviewProxy: /* @__PURE__ */ looseObject$1({ postEvent: /* @__PURE__ */ function_() }) }),
    e
  );
}
function K$1() {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}
function le$1(e, t) {
  const r2 = /* @__PURE__ */ new Map(), n = pe$1(), a2 = (o, s, c2) => {
    c2 || (c2 = false);
    const i2 = r2.get(o) || /* @__PURE__ */ new Map();
    r2.set(o, i2);
    const _2 = i2.get(s) || [];
    i2.set(s, _2);
    const l2 = _2.findIndex((w2) => w2[1] === c2);
    if (l2 >= 0 && (n.off(o, _2[l2][0]), _2.splice(l2, 1), !_2.length && (i2.delete(s), !i2.size))) {
      const w2 = r2.size;
      r2.delete(o), w2 && !r2.size && t();
    }
  };
  return [
    function(s, c2, i2) {
      !r2.size && e();
      const _2 = () => {
        a2(s, c2, i2);
      }, l2 = (...M2) => {
        i2 && _2(), s === "*" ? c2(M2) : c2(...M2);
      };
      n.on(s, l2);
      const w2 = r2.get(s) || /* @__PURE__ */ new Map();
      r2.set(s, w2);
      const T2 = w2.get(c2) || [];
      return w2.set(c2, T2), T2.push([l2, i2 || false]), _2;
    },
    a2,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    n.emit,
    function() {
      const s = r2.size;
      n.all.clear(), r2.clear(), s && t();
    }
  ];
}
function v(e, t) {
  window.dispatchEvent(new MessageEvent("message", {
    data: JSON.stringify({ eventType: e, eventData: t }),
    // We specify window.parent to imitate the case, the parent iframe sent us this event.
    source: window.parent
  }));
}
let h$1 = false;
const f = /* @__PURE__ */ S(/* @__PURE__ */ O$2("Bridge", {
  bgColor: "#9147ff",
  textColor: "white",
  shouldLog() {
    return h$1;
  }
}));
function Y$1(e, t, r2, n) {
  Object.defineProperty(e, t, {
    enumerable: true,
    configurable: true,
    get: r2,
    set: n
  });
}
function W$1(e, t) {
  const r2 = e[t];
  Y$1(e, t, () => r2, (n) => {
    Object.entries(n).forEach(([a2, o]) => {
      r2[a2] = o;
    });
  });
}
function U(e, t, r2) {
  Object.defineProperty(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r2
  });
}
function E(e, t, r2) {
  const n = e[t], a2 = [r2];
  typeof n == "function" && a2.push(n);
  const o = (...c2) => {
    a2.forEach((i2) => {
      i2(...c2);
    });
  }, s = Object.assign((...c2) => {
    o(...c2);
  }, {
    // Unwraps the composer.
    unwrap() {
      const { length: c2 } = a2;
      if (c2 === 1) {
        delete e[t];
        return;
      }
      if (c2 === 2) {
        U(e, t, a2[1]);
        return;
      }
      a2.unshift(1), U(e, t, o);
    }
  });
  Y$1(
    e,
    t,
    () => s,
    (c2) => {
      a2.push(c2);
    }
  );
}
const we$1 = {
  clipboard_text_received: /* @__PURE__ */ looseObject$1({
    req_id: /* @__PURE__ */ string$1(),
    data: /* @__PURE__ */ nullish(/* @__PURE__ */ string$1())
  }),
  custom_method_invoked: /* @__PURE__ */ looseObject$1({
    req_id: /* @__PURE__ */ string$1(),
    result: /* @__PURE__ */ optional$1(/* @__PURE__ */ unknown()),
    error: /* @__PURE__ */ optional$1(/* @__PURE__ */ string$1())
  }),
  popup_closed: /* @__PURE__ */ nullish(
    /* @__PURE__ */ looseObject$1({ button_id: /* @__PURE__ */ nullish(/* @__PURE__ */ string$1(), () => {
    }) }),
    {}
  ),
  viewport_changed: /* @__PURE__ */ looseObject$1({
    height: /* @__PURE__ */ number$1(),
    width: /* @__PURE__ */ nullish(/* @__PURE__ */ number$1(), () => window.innerWidth),
    is_state_stable: /* @__PURE__ */ boolean(),
    is_expanded: /* @__PURE__ */ boolean()
  }),
  theme_changed: /* @__PURE__ */ looseObject$1({
    theme_params: be$1()
  })
};
function I$1(e) {
  if (e.source !== window.parent)
    return;
  let t;
  try {
    t = parse$1(/* @__PURE__ */ pipe$1(/* @__PURE__ */ string$1(), oe(), Se$2), e.data);
  } catch {
    return;
  }
  const { eventType: r2, eventData: n } = t, a2 = we$1[r2];
  let o;
  try {
    o = a2 ? parse$1(a2, n) : n;
  } catch (s) {
    return f().forceError(
      [
        `An error occurred processing the "${r2}" event from the Telegram application.`,
        "Please, file an issue here:",
        "https://github.com/Telegram-Mini-Apps/telegram-apps/issues/new/choose"
      ].join(`
`),
      t,
      s
    );
  }
  ge$1(r2, o);
}
const [
  X,
  me$1,
  ge$1
] = le$1(
  () => {
    const e = window;
    !e.TelegramGameProxy && (e.TelegramGameProxy = {}), E(e.TelegramGameProxy, "receiveEvent", v), W$1(e, "TelegramGameProxy"), !e.Telegram && (e.Telegram = {}), !e.Telegram.WebView && (e.Telegram.WebView = {}), E(e.Telegram.WebView, "receiveEvent", v), W$1(e.Telegram, "WebView"), E(e, "TelegramGameProxy_receiveEvent", v), window.addEventListener("message", I$1);
  },
  () => {
    [
      ["TelegramGameProxy_receiveEvent"],
      ["TelegramGameProxy", "receiveEvent"],
      ["Telegram", "WebView", "receiveEvent"]
    ].forEach((e) => {
      const t = window;
      let r2 = [void 0, t];
      for (const o of e)
        if (r2 = [r2[1], r2[1][o]], !r2[1])
          return;
      const [n, a2] = r2;
      "unwrap" in a2 && (a2.unwrap(), n && n !== t && !Object.keys(n).length && delete t[e[0]]);
    }), window.removeEventListener("message", I$1);
  }
);
p$2(
  "MethodUnsupportedError",
  (e, t) => [
    `Method "${e}" is unsupported in Mini Apps version ${t}`
  ]
);
p$2(
  "MethodParameterUnsupportedError",
  (e, t, r2) => [
    `Parameter "${t}" of "${e}" method is unsupported in Mini Apps version ${r2}`
  ]
);
const [
  ye$1
] = l(
  "LaunchParamsRetrieveError",
  (e) => ({ errors: e }),
  (e) => [
    [
      "Unable to retrieve launch parameters from any known source. Perhaps, you have opened your app outside Telegram?",
      "📖 Refer to docs for more information:",
      "https://docs.telegram-mini-apps.com/packages/telegram-apps-bridge/environment",
      "",
      "Collected errors:",
      ...e.map(([t, r2]) => `Source: ${t} / ${r2 instanceof Error ? r2.message : String(r2)}`)
    ].join(`
`)
  ]
);
p$2(
  "InvalidLaunchParamsError",
  (e, t) => [
    `Invalid value for launch params: ${e}`,
    { cause: t }
  ]
);
const [Ee$1] = p$2("UnknownEnvError"), [
  Pe$1
] = p$2(
  "InvokeCustomMethodError",
  (e) => [`Server returned error: ${e}`]
), g = /* @__PURE__ */ S((...e) => {
  try {
    window.parent.postMessage(...e);
  } catch (t) {
    t instanceof SyntaxError ? f().forceError(
      "Unable to call window.parent.postMessage due to incorrectly configured target origin. Use the setTargetOrigin method to allow this origin to receive events",
      t
    ) : f().forceError(t);
  }
}), ke$1 = (...e) => g()(...e), x = /* @__PURE__ */ S("https://web.telegram.org");
function Z$1(e, t) {
  f().log("Posting event:", t ? { eventType: e, eventData: t } : { eventType: e });
  const r2 = window, n = JSON.stringify({ eventType: e, eventData: t });
  if (K$1())
    return ke$1(n, x());
  if (H$1(r2)) {
    r2.TelegramWebviewProxy.postEvent(e, JSON.stringify(t));
    return;
  }
  if (/* @__PURE__ */ is$1(/* @__PURE__ */ looseObject$1({ external: /* @__PURE__ */ looseObject$1({ notify: /* @__PURE__ */ function_() }) }), r2)) {
    r2.external.notify(n);
    return;
  }
  throw new Ee$1();
}
function V$1(e, t, r2) {
  r2 || (r2 = {});
  const { capture: n } = r2, [a2, o] = L$2();
  return new m$1((s) => {
    (Array.isArray(t) ? t : [t]).forEach((c2) => {
      a2(
        X(c2, (i2) => {
          (!n || (Array.isArray(t) ? n({
            event: c2,
            payload: i2
          }) : n(i2))) && s(i2);
        })
      );
    }), (r2.postEvent || Z$1)(e, r2.params);
  }, r2).finally(o);
}
const R2 = "launchParams";
function j$1(e) {
  return e.replace(/^[^?#]*[?#]/, "").replace(/[?#]/g, "&");
}
function ee$1() {
  const e = [];
  for (const [t, r2] of [
    // Try to retrieve launch parameters from the current location. This method can return
    // nothing in case, location was changed, and then the page was reloaded.
    [() => j$1(window.location.href), "window.location.href"],
    // Then, try using the lower level API - window.performance.
    [() => {
      const n = performance.getEntriesByType("navigation")[0];
      return n && j$1(n.name);
    }, "performance navigation entries"],
    [() => T$1(R2), "local storage"]
  ]) {
    const n = t();
    if (!n) {
      e.push([r2, new Error("Source is empty")]);
      continue;
    }
    if (De$2(n))
      return w$2(R2, n), n;
    try {
      _e(n);
    } catch (a2) {
      e.push([r2, a2]);
    }
  }
  throw new ye$1(e);
}
function Se$1(e) {
  const t = _e(ee$1());
  return t;
}
function De$1(e, t) {
  try {
    return Se$1(), true;
  } catch {
    return false;
  }
  return m$1.fn(async (r2) => {
    if (H$1(window))
      return true;
    try {
      return await V$1("web_app_request_theme", "theme_changed", r2), true;
    } catch {
      return false;
    }
  }, { timeout: 100 });
}
function Be$1() {
  return new URLSearchParams(ee$1()).get("tgWebAppData") || void 0;
}
function xe$1(e) {
  return ({ req_id: t }) => t === e;
}
function $(e) {
  return e.split(".").map(Number);
}
function Te$1(e, t) {
  const r2 = $(e), n = $(t), a2 = Math.max(r2.length, n.length);
  for (let o = 0; o < a2; o += 1) {
    const s = r2[o] || 0, c2 = n[o] || 0;
    if (s !== c2)
      return s > c2 ? 1 : -1;
  }
  return 0;
}
function p$1(e, t) {
  return Te$1(e, t) <= 0;
}
function z$1(e, t, r2) {
  if (typeof r2 == "string") {
    if (e === "web_app_open_link") {
      if (t === "try_instant_view")
        return p$1("6.4", r2);
      if (t === "try_browser")
        return p$1("7.6", r2);
    }
    if (e === "web_app_set_header_color" && t === "color")
      return p$1("6.9", r2);
    if (e === "web_app_close" && t === "return_back")
      return p$1("7.6", r2);
    if (e === "web_app_setup_main_button" && t === "has_shine_effect")
      return p$1("7.10", r2);
  }
  switch (e) {
    case "web_app_open_tg_link":
    case "web_app_open_invoice":
    case "web_app_setup_back_button":
    case "web_app_set_background_color":
    case "web_app_set_header_color":
    case "web_app_trigger_haptic_feedback":
      return p$1("6.1", t);
    case "web_app_open_popup":
      return p$1("6.2", t);
    case "web_app_close_scan_qr_popup":
    case "web_app_open_scan_qr_popup":
    case "web_app_read_text_from_clipboard":
      return p$1("6.4", t);
    case "web_app_switch_inline_query":
      return p$1("6.7", t);
    case "web_app_invoke_custom_method":
    case "web_app_request_write_access":
    case "web_app_request_phone":
      return p$1("6.9", t);
    case "web_app_setup_settings_button":
      return p$1("6.10", t);
    case "web_app_biometry_get_info":
    case "web_app_biometry_open_settings":
    case "web_app_biometry_request_access":
    case "web_app_biometry_request_auth":
    case "web_app_biometry_update_token":
      return p$1("7.2", t);
    case "web_app_setup_swipe_behavior":
      return p$1("7.7", t);
    case "web_app_share_to_story":
      return p$1("7.8", t);
    case "web_app_setup_secondary_button":
    case "web_app_set_bottom_bar_color":
      return p$1("7.10", t);
    case "web_app_request_safe_area":
    case "web_app_request_content_safe_area":
    case "web_app_request_fullscreen":
    case "web_app_exit_fullscreen":
    case "web_app_set_emoji_status":
    case "web_app_add_to_home_screen":
    case "web_app_check_home_screen":
    case "web_app_request_emoji_status_access":
    case "web_app_check_location":
    case "web_app_open_location_settings":
    case "web_app_request_file_download":
    case "web_app_request_location":
    case "web_app_send_prepared_message":
    case "web_app_start_accelerometer":
    case "web_app_start_device_orientation":
    case "web_app_start_gyroscope":
    case "web_app_stop_accelerometer":
    case "web_app_stop_device_orientation":
    case "web_app_stop_gyroscope":
    case "web_app_toggle_orientation_lock":
      return p$1("8.0", t);
    case "web_app_device_storage_clear":
    case "web_app_device_storage_get_key":
    case "web_app_device_storage_save_key":
    case "web_app_secure_storage_clear":
    case "web_app_secure_storage_get_key":
    case "web_app_secure_storage_restore_key":
    case "web_app_secure_storage_save_key":
      return p$1("9.0", t);
    case "web_app_hide_keyboard":
      return p$1("9.1", t);
    default:
      return [
        "iframe_ready",
        "iframe_will_reload",
        "web_app_close",
        "web_app_data_send",
        "web_app_expand",
        "web_app_open_link",
        "web_app_ready",
        "web_app_request_theme",
        "web_app_request_viewport",
        "web_app_setup_main_button",
        "web_app_setup_closing_behavior"
      ].includes(e);
  }
}
function Ke$1(e, t, r2, n) {
  return V$1("web_app_invoke_custom_method", "custom_method_invoked", {
    ...n || {},
    params: { method: e, params: t, req_id: r2 },
    capture: xe$1(r2)
  }).then(({ result: a2, error: o }) => {
    if (o)
      throw new Pe$1(o);
    return a2;
  });
}
function i$1() {
  return performance.getEntriesByType("navigation")[0];
}
function c$1() {
  const t = i$1();
  return !!t && t.type === "reload";
}
var store;
// @__NO_SIDE_EFFECTS__
function getGlobalConfig(config2) {
  return {
    lang: config2?.lang ?? store?.lang,
    message: config2?.message,
    abortEarly: config2?.abortEarly ?? store?.abortEarly,
    abortPipeEarly: config2?.abortPipeEarly ?? store?.abortPipeEarly
  };
}
var store2;
// @__NO_SIDE_EFFECTS__
function getGlobalMessage(lang) {
  return store2?.get(lang);
}
var store3;
// @__NO_SIDE_EFFECTS__
function getSchemaMessage(lang) {
  return store3?.get(lang);
}
var store4;
// @__NO_SIDE_EFFECTS__
function getSpecificMessage(reference, lang) {
  return store4?.get(reference)?.get(lang);
}
// @__NO_SIDE_EFFECTS__
function _stringify(input) {
  const type = typeof input;
  if (type === "string") {
    return `"${input}"`;
  }
  if (type === "number" || type === "bigint" || type === "boolean") {
    return `${input}`;
  }
  if (type === "object" || type === "function") {
    return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
  }
  return type;
}
function _addIssue(context, label, dataset, config2, other) {
  const input = other && "input" in other ? other.input : dataset.value;
  const expected = other?.expected ?? context.expects ?? null;
  const received = other?.received ?? /* @__PURE__ */ _stringify(input);
  const issue = {
    kind: context.kind,
    type: context.type,
    input,
    expected,
    received,
    message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
    requirement: context.requirement,
    path: other?.path,
    issues: other?.issues,
    lang: config2.lang,
    abortEarly: config2.abortEarly,
    abortPipeEarly: config2.abortPipeEarly
  };
  const isSchema = context.kind === "schema";
  const message = other?.message ?? context.message ?? /* @__PURE__ */ getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? /* @__PURE__ */ getSchemaMessage(issue.lang) : null) ?? config2.message ?? /* @__PURE__ */ getGlobalMessage(issue.lang);
  if (message !== void 0) {
    issue.message = typeof message === "function" ? (
      // @ts-expect-error
      message(issue)
    ) : message;
  }
  if (isSchema) {
    dataset.typed = false;
  }
  if (dataset.issues) {
    dataset.issues.push(issue);
  } else {
    dataset.issues = [issue];
  }
}
// @__NO_SIDE_EFFECTS__
function _getStandardProps(context) {
  return {
    version: 1,
    vendor: "valibot",
    validate(value2) {
      return context["~run"]({ value: value2 }, /* @__PURE__ */ getGlobalConfig());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _isValidObjectKey(object2, key) {
  return Object.hasOwn(object2, key) && key !== "__proto__" && key !== "prototype" && key !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function _joinExpects(values2, separator) {
  const list = [...new Set(values2)];
  if (list.length > 1) {
    return `(${list.join(` ${separator} `)})`;
  }
  return list[0] ?? "never";
}
var ValiError2 = class extends Error {
  /**
   * Creates a Valibot error with useful information.
   *
   * @param issues The error issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "ValiError";
    this.issues = issues;
  }
};
// @__NO_SIDE_EFFECTS__
function transform(operation) {
  return {
    kind: "transformation",
    type: "transform",
    reference: transform,
    async: false,
    operation,
    "~run"(dataset) {
      dataset.value = this.operation(dataset.value);
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function getFallback(schema2, dataset, config2) {
  return typeof schema2.fallback === "function" ? (
    // @ts-expect-error
    schema2.fallback(dataset, config2)
  ) : (
    // @ts-expect-error
    schema2.fallback
  );
}
// @__NO_SIDE_EFFECTS__
function getDefault(schema2, dataset, config2) {
  return typeof schema2.default === "function" ? (
    // @ts-expect-error
    schema2.default(dataset, config2)
  ) : (
    // @ts-expect-error
    schema2.default
  );
}
// @__NO_SIDE_EFFECTS__
function array(item, message) {
  return {
    kind: "schema",
    type: "array",
    reference: array,
    expects: "Array",
    async: false,
    item,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (Array.isArray(input)) {
        dataset.typed = true;
        dataset.value = [];
        for (let key = 0; key < input.length; key++) {
          const value2 = input[key];
          const itemDataset = this.item["~run"]({ value: value2 }, config2);
          if (itemDataset.issues) {
            const pathItem = {
              type: "array",
              origin: "value",
              input,
              key,
              value: value2
            };
            for (const issue of itemDataset.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              dataset.issues?.push(issue);
            }
            if (!dataset.issues) {
              dataset.issues = itemDataset.issues;
            }
            if (config2.abortEarly) {
              dataset.typed = false;
              break;
            }
          }
          if (!itemDataset.typed) {
            dataset.typed = false;
          }
          dataset.value.push(itemDataset.value);
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function date(message) {
  return {
    kind: "schema",
    type: "date",
    reference: date,
    expects: "Date",
    async: false,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value instanceof Date) {
        if (!isNaN(dataset.value)) {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2, {
            received: '"Invalid Date"'
          });
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function instance(class_, message) {
  return {
    kind: "schema",
    type: "instance",
    reference: instance,
    expects: class_.name,
    async: false,
    class: class_,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value instanceof this.class) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function looseObject(entries, message) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: looseObject,
    expects: "Object",
    async: false,
    entries,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        dataset.typed = true;
        dataset.value = {};
        for (const key in this.entries) {
          const valueSchema = this.entries[key];
          if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && // @ts-expect-error
          valueSchema.default !== void 0) {
            const value2 = key in input ? (
              // @ts-expect-error
              input[key]
            ) : /* @__PURE__ */ getDefault(valueSchema);
            const valueDataset = valueSchema["~run"]({ value: value2 }, config2);
            if (valueDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "value",
                input,
                key,
                value: value2
              };
              for (const issue of valueDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [pathItem];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = valueDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!valueDataset.typed) {
              dataset.typed = false;
            }
            dataset.value[key] = valueDataset.value;
          } else if (valueSchema.fallback !== void 0) {
            dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
          } else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
            _addIssue(this, "key", dataset, config2, {
              input: void 0,
              expected: `"${key}"`,
              path: [
                {
                  type: "object",
                  origin: "key",
                  input,
                  key,
                  // @ts-expect-error
                  value: input[key]
                }
              ]
            });
            if (config2.abortEarly) {
              break;
            }
          }
        }
        if (!dataset.issues || !config2.abortEarly) {
          for (const key in input) {
            if (/* @__PURE__ */ _isValidObjectKey(input, key) && !(key in this.entries)) {
              dataset.value[key] = input[key];
            }
          }
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function number(message) {
  return {
    kind: "schema",
    type: "number",
    reference: number,
    expects: "number",
    async: false,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "number" && !isNaN(dataset.value)) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function optional(wrapped, default_) {
  return {
    kind: "schema",
    type: "optional",
    reference: optional,
    expects: `(${wrapped.expects} | undefined)`,
    async: false,
    wrapped,
    default: default_,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value === void 0) {
        if (this.default !== void 0) {
          dataset.value = /* @__PURE__ */ getDefault(this, dataset, config2);
        }
        if (dataset.value === void 0) {
          dataset.typed = true;
          return dataset;
        }
      }
      return this.wrapped["~run"](dataset, config2);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function record(key, value2, message) {
  return {
    kind: "schema",
    type: "record",
    reference: record,
    expects: "Object",
    async: false,
    key,
    value: value2,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        dataset.typed = true;
        dataset.value = {};
        for (const entryKey in input) {
          if (/* @__PURE__ */ _isValidObjectKey(input, entryKey)) {
            const entryValue = input[entryKey];
            const keyDataset = this.key["~run"]({ value: entryKey }, config2);
            if (keyDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "key",
                input,
                key: entryKey,
                value: entryValue
              };
              for (const issue of keyDataset.issues) {
                issue.path = [pathItem];
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = keyDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            const valueDataset = this.value["~run"](
              { value: entryValue },
              config2
            );
            if (valueDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "value",
                input,
                key: entryKey,
                value: entryValue
              };
              for (const issue of valueDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [pathItem];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = valueDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!keyDataset.typed || !valueDataset.typed) {
              dataset.typed = false;
            }
            if (keyDataset.typed) {
              dataset.value[keyDataset.value] = valueDataset.value;
            }
          }
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function string(message) {
  return {
    kind: "schema",
    type: "string",
    reference: string,
    expects: "string",
    async: false,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "string") {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _subIssues(datasets) {
  let issues;
  if (datasets) {
    for (const dataset of datasets) {
      if (issues) {
        issues.push(...dataset.issues);
      } else {
        issues = dataset.issues;
      }
    }
  }
  return issues;
}
// @__NO_SIDE_EFFECTS__
function union(options, message) {
  return {
    kind: "schema",
    type: "union",
    reference: union,
    expects: /* @__PURE__ */ _joinExpects(
      options.map((option) => option.expects),
      "|"
    ),
    async: false,
    options,
    message,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      let validDataset;
      let typedDatasets;
      let untypedDatasets;
      for (const schema2 of this.options) {
        const optionDataset = schema2["~run"]({ value: dataset.value }, config2);
        if (optionDataset.typed) {
          if (optionDataset.issues) {
            if (typedDatasets) {
              typedDatasets.push(optionDataset);
            } else {
              typedDatasets = [optionDataset];
            }
          } else {
            validDataset = optionDataset;
            break;
          }
        } else {
          if (untypedDatasets) {
            untypedDatasets.push(optionDataset);
          } else {
            untypedDatasets = [optionDataset];
          }
        }
      }
      if (validDataset) {
        return validDataset;
      }
      if (typedDatasets) {
        if (typedDatasets.length === 1) {
          return typedDatasets[0];
        }
        _addIssue(this, "type", dataset, config2, {
          issues: /* @__PURE__ */ _subIssues(typedDatasets)
        });
        dataset.typed = true;
      } else if (untypedDatasets?.length === 1) {
        return untypedDatasets[0];
      } else {
        _addIssue(this, "type", dataset, config2, {
          issues: /* @__PURE__ */ _subIssues(untypedDatasets)
        });
      }
      return dataset;
    }
  };
}
function parse(schema2, input, config2) {
  const dataset = schema2["~run"]({ value: input }, /* @__PURE__ */ getGlobalConfig(config2));
  if (dataset.issues) {
    throw new ValiError2(dataset.issues);
  }
  return dataset.value;
}
// @__NO_SIDE_EFFECTS__
function pipe(...pipe2) {
  return {
    ...pipe2[0],
    pipe: pipe2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      for (const item of pipe2) {
        if (item.kind !== "metadata") {
          if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
            dataset.typed = false;
            break;
          }
          if (!dataset.issues || !config2.abortEarly && !config2.abortPipeEarly) {
            dataset = item["~run"](dataset, config2);
          }
        }
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  return /* @__PURE__ */ S(e, t);
}
// @__NO_SIDE_EFFECTS__
function c(e, t) {
  return /* @__PURE__ */ x$1(e, t);
}
// @__NO_SIDE_EFFECTS__
function u(e, t) {
  const o = /* @__PURE__ */ z(e, t);
  return [o, /* @__PURE__ */ c(o)];
}
const je = /* @__PURE__ */ z(0), Po = /* @__PURE__ */ z(Z$1), [oo, le] = /* @__PURE__ */ u({
  tgWebAppPlatform: "unknown",
  tgWebAppVersion: "0.0"
}), O = /* @__PURE__ */ c(() => le().tgWebAppVersion);
function To() {
  return je.set(je() + 1), je().toString();
}
function W(e, t, o) {
  return Ke$1(e, t, To(), {
    ...o || {},
    postEvent: i
  });
}
const d = (e, t, o) => (o || (o = {}), o.postEvent || (o.postEvent = i), V$1(e, t, o)), i = (e, t) => Po()(e, t);
function L(e) {
  return [e];
}
const [
  ot
] = p$2("CSSVarsBoundError", "CSS variables are already bound"), [
  ko
] = p$2("NotAvailableError", L);
p$2("InvalidEnvError", L);
const [
  Z
] = p$2("FunctionNotAvailableError", L), [
  y
] = p$2(
  "InvalidArgumentsError",
  (e, t) => [e, { cause: t }]
), [
  On
] = p$2("ConcurrentCallError", L), [
  In
] = p$2(
  "SetEmojiStatusError",
  (e) => [`Failed to set emoji status: ${e}`]
), [
  Oo
] = p$2("AccessDeniedError", L), [
  Vn
] = p$2("FullscreenFailedError", L);
p$2("ShareMessageError", L);
const [
  st
] = p$2("UnknownThemeParamsKeyError", (e) => [`Unknown theme params key passed: ${e}`]);
function so() {
  return typeof window > "u";
}
// @__NO_SIDE_EFFECTS__
function p(e, t, o) {
  o || (o = {});
  const {
    isSupported: s,
    isMounted: n,
    isMounting: r2,
    component: a2,
    supports: l2
  } = o || {}, P2 = `${a2 ? `${a2}.` : ""}${e}()`, T2 = s ? Array.isArray(s) || typeof s == "object" && "any" in s ? s : [s] : void 0;
  function X2(g2) {
    if (l2) {
      const _2 = l2[g2];
      return z$1(_2[0], _2[1], O());
    }
    return true;
  }
  function k2() {
    if (!T2)
      return;
    function g2(U2) {
      return typeof U2 == "function" ? U2() : z$1(U2, O()) ? void 0 : `it is unsupported in Mini Apps version ${O()}`;
    }
    const _2 = Array.isArray(T2) ? T2 : T2.any, x2 = _2.map(g2).filter(Boolean);
    return Array.isArray(T2) ? x2[0] : x2.length === _2.length ? x2[x2.length - 1] : void 0;
  }
  function cn(...g2) {
    for (const _2 in l2)
      if (l2[_2][2](...g2) && !X2(_2))
        return `option ${_2} is not supported in Mini Apps version ${O()}`;
  }
  let _e2;
  if (l2) {
    _e2 = {};
    for (const g2 in l2)
      _e2[g2] = /* @__PURE__ */ c(() => X2(g2));
  }
  const Kt = /* @__PURE__ */ c(() => !k2()), Yt = /* @__PURE__ */ c(() => O() !== "0.0"), Xt = /* @__PURE__ */ c(() => !n || n()), Zt = /* @__PURE__ */ c(
    () => De$1() && !so() && Yt() && Kt() && Xt()
  );
  return Object.assign(
    (...g2) => {
      const _2 = `Unable to call the ${P2} ${a2 ? "method" : "function"}:`;
      if (so() || !De$1())
        throw new Z(`${_2} it can't be called outside Mini Apps`);
      if (!Yt())
        throw new Z(`${_2} the SDK was not initialized. Use the SDK init() function`);
      const x2 = k2();
      if (x2)
        throw new Z(`${_2} ${x2}`);
      const U2 = cn(...g2);
      if (U2)
        throw new Z(`${_2} ${U2}`);
      if (!Xt()) {
        const un = r2 && r2() ? "mounting. Wait for the mount completion" : `unmounted. Use the ${a2}.mount() method`;
        throw new Z(`${_2} the component is ${un}`);
      }
      return t(...g2);
    },
    t,
    {
      isAvailable: Zt,
      ifAvailable(...g2) {
        return Zt() ? [true, t(...g2)] : [false];
      }
    },
    T2 ? { isSupported: Kt } : {},
    _e2 ? { supports: _e2 } : {}
  );
}
function we(e, t) {
  return t || (t = {}), (o, s, n, r2) => /* @__PURE__ */ p(o, s, {
    ...t,
    isSupported: n || t.isSupported,
    supports: r2,
    component: e
  });
}
function I(e, t, o) {
  return we(e, { isSupported: o, isMounted: t });
}
function w(e, t) {
  return we(e, { isSupported: t });
}
const $e = "web_app_setup_back_button", Io = "back_button_pressed", Me = "backButton", [no] = /* @__PURE__ */ u(false), [he] = /* @__PURE__ */ u(false), Vo = I(Me, he, $e), nt = w(Me, $e);
Vo("hide", () => {
  rt(false);
});
nt("mount", () => {
  he() || (rt(c$1() && T$1(Me) || false), he.set(true));
});
function rt(e) {
  e !== no() && (i($e, { is_visible: e }), w$2(Me, e), no.set(e));
}
nt(
  "onClick",
  (e) => X(Io, e)
);
nt(
  "offClick",
  (e) => {
    me$1(Io, e);
  }
);
Vo("show", () => {
  rt(true);
});
function b(e, t, o) {
  o || (o = {});
  const {
    promise: s,
    error: n
  } = o, [r2, a2] = s ? [s, /* @__PURE__ */ c(s)] : /* @__PURE__ */ u(), [l2, P2] = n ? [n, /* @__PURE__ */ c(n)] : /* @__PURE__ */ u();
  return [
    Object.assign((...T2) => {
      if (r2()) {
        const k2 = new On(t);
        return l2.set(k2), m$1.reject(k2);
      }
      m2(() => {
        r2.set(e(...T2)), l2.set(void 0);
      });
      let X2;
      return r2().catch((k2) => {
        throw X2 = k2, k2;
      }).finally(() => {
        m2(() => {
          r2.set(void 0), l2.set(X2);
        });
      });
    }, e),
    [r2, a2, /* @__PURE__ */ c(() => !!r2())],
    [l2, P2]
  ];
}
// @__NO_SIDE_EFFECTS__
function pe(e, t, o) {
  const [s, ...n] = b(t, `The ${e} component is already mounting`), [r2, a2] = /* @__PURE__ */ u(false);
  return [
    (...l2) => r2() ? m$1.resolve() : s(...l2).then((P2) => {
      m2(() => {
        r2.set(true), o(P2);
      });
    }),
    ...n,
    [r2, a2]
  ];
}
const [at] = /* @__PURE__ */ u({
  available: false,
  type: "",
  accessGranted: false,
  accessRequested: false,
  deviceId: "",
  tokenSaved: false
}), ro = "web_app_biometry_get_info", Wn = /* @__PURE__ */ p(
  "requestBiometry",
  (e) => d(ro, "biometry_info_received", e),
  { isSupported: ro }
);
function qo(e) {
  if (!M$1(e))
    throw e;
}
function Q(e) {
  const t = e();
  t && t.catch(qo).cancel();
}
const re = "biometry", Ae = "web_app_biometry_request_auth", it = "biometry_info_received", xo = (e) => {
  ve(ct(e));
};
function Do() {
  throw new ko("Biometry is not available");
}
function ct(e) {
  let t = false, o = false, s = "", n = false, r2 = "", a2 = false;
  return e.available && (t = true, o = e.token_saved, s = e.device_id, n = e.access_requested, r2 = e.type, a2 = e.access_granted), { available: t, tokenSaved: o, deviceId: s, type: r2, accessGranted: a2, accessRequested: n };
}
const [
  Kn,
  Yn,
  Xn,
  No
] = /* @__PURE__ */ pe(
  re,
  (e) => {
    const t = c$1() && T$1(re);
    return t ? m$1.resolve(t) : Wn({ abortSignal: e }).then(ct);
  },
  (e) => {
    X(it, xo), ve(e);
  }
), Ho = w(re, Ae), ut = I(re, No[0], Ae);
Ho("mount", Kn);
const [, Lo, Jn] = Yn, [, er] = Xn, [tr, or] = No, [
  sr,
  nr,
  rr
] = b(
  (e) => m$1.fn(async (t) => {
    const o = at();
    o.available || Do();
    const s = await d(Ae, "biometry_auth_requested", {
      ...e,
      ...t,
      params: { reason: ((e || {}).reason || "").trim() }
    }), { token: n } = s;
    return typeof n == "string" && ve({ ...o, token: n }), s;
  }, e),
  "Biometry authentication is already in progress"
);
ut("authenticate", sr);
const [, Ro, ir] = nr, [, cr] = rr;
Ho("openSettings", () => {
  i("web_app_biometry_open_settings");
});
const [
  lr,
  pr,
  dr
] = b(
  (e) => m$1.fn(async (t) => {
    const o = await d("web_app_biometry_request_access", it, {
      ...e,
      ...t,
      params: { reason: (e || {}).reason || "" }
    }).then(ct);
    return o.available || Do(), ve(o), o.accessGranted;
  }, e),
  "Biometry access request is already in progress"
);
ut("requestAccess", lr);
const [, jo, _r] = pr, [, fr] = dr;
function ve(e) {
  at.set(e), w$2(re, e);
}
ut(
  "updateToken",
  (e) => (e || (e = {}), d("web_app_biometry_update_token", "biometry_token_updated", {
    ...e,
    params: {
      token: e.token || "",
      reason: e.reason
    }
  }).then((t) => t.status))
);
function ye(e, t) {
  return we(e, { isMounted: t });
}
const V = we, Be = "closingBehavior", [ao] = /* @__PURE__ */ u(false), [Ke, Fo] = /* @__PURE__ */ u(false), Uo = ye(Be, Fo), Er = V(Be);
Uo("disableConfirmation", () => {
  lt(false);
});
Uo("enableConfirmation", () => {
  lt(true);
});
Er("mount", () => {
  Ke() || (lt(
    c$1() && T$1(Be) || false
  ), Ke.set(true));
});
function lt(e) {
  e !== ao() && (i("web_app_setup_closing_behavior", { need_confirmation: e }), w$2(Be, e), ao.set(e));
}
const Go = "web_app_invoke_custom_method", de = w("cloudStorage", Go), zo = de("deleteItem", (e, t) => {
  const o = Array.isArray(e) ? e : [e];
  return o.length ? W("deleteStorageValues", { keys: o }, t).then() : m$1.resolve();
});
function Ar(e, t) {
  const o = Array.isArray(e) ? e : [e];
  return o.length ? W("getStorageValues", { keys: o }, t).then((s) => {
    const n = {
      // Fulfill the response with probably missing keys.
      ...o.reduce((r2, a2) => (r2[a2] = "", r2), {}),
      ...parse(/* @__PURE__ */ record(/* @__PURE__ */ string(), /* @__PURE__ */ string()), s)
    };
    return typeof e == "string" ? n[e] : n;
  }) : m$1.resolve(Array.isArray(e) ? {} : "");
}
de("getItem", Ar);
const Wo = de("getKeys", (e) => W("getStorageKeys", {}, e).then(
  (t) => parse(/* @__PURE__ */ array(/* @__PURE__ */ string()), t)
));
de("setItem", (e, t, o) => W("saveStorageValue", {
  key: e,
  value: t
}, o).then());
de("clear", (e) => Wo(e).then(zo));
const me = "web_app_trigger_haptic_feedback", pt = w("hapticFeedback", me);
pt(
  "impactOccurred",
  (e) => {
    i(me, {
      type: "impact",
      impact_style: e
    });
  }
);
pt(
  "notificationOccurred",
  (e) => {
    i(me, {
      type: "notification",
      notification_type: e
    });
  }
);
pt(
  "selectionChanged",
  () => {
    i(me, { type: "selection_change" });
  }
);
const dt = "web_app_open_invoice", zr = w("invoice", dt);
function Qr(e, t, o) {
  let s;
  if (t === "url") {
    const { hostname: n, pathname: r2 } = new URL(e, window.location.href);
    if (n !== "t.me")
      throw new y(`Link has unexpected hostname: ${n}`);
    const a2 = r2.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);
    if (!a2)
      throw new y(
        'Expected to receive a link with a pathname in format "/invoice/{slug}" or "/${slug}"'
      );
    [, , s] = a2;
  } else
    s = e, o = t;
  return d(dt, "invoice_closed", {
    ...o,
    params: { slug: s },
    capture: (n) => s === n.slug
  }).then((n) => n.status);
}
const [
  Kr,
  Yr,
  Xr
] = b(Qr, "Invoice is already opened");
zr("open", Kr);
const [, Jr, ea] = Yr, [, ta] = Xr, J = "locationManager", mt = "web_app_check_location", io = "web_app_open_location_settings", be = /* @__PURE__ */ z({
  available: false,
  accessGranted: false,
  accessRequested: false
});
function aa(e) {
  let t = false, o, s;
  return e.available && (t = true, o = e.access_requested, s = e.access_granted), {
    available: t,
    accessGranted: s || false,
    accessRequested: o || false
  };
}
const [
  ia,
  ca,
  ua,
  Xo
] = /* @__PURE__ */ pe(
  J,
  (e) => {
    const t = c$1() && T$1(J);
    return t ? m$1.resolve(t) : d("web_app_check_location", "location_checked", e).then(aa);
  },
  (e) => {
    be.set(e), w$2(J, e);
  }
), Zo = w(J, mt), la = I(J, Xo[0], mt);
Zo("mount", ia);
const [, da, ma] = ca, [, _a] = ua, [fa, ha] = Xo, [
  ba,
  ga,
  Ea
] = b(
  (e) => d("web_app_request_location", "location_requested", e).then((t) => {
    if (!t.available)
      throw be.set({ ...be(), available: false }), new ko("Location data tracking is not available");
    const { available: o, ...s } = t;
    return s;
  }),
  "Location request is currently in progress"
);
la("requestLocation", ba);
const [, Jo, Ca] = ga, [, wa] = Ea;
Zo("openSettings", () => {
  i(io);
}, io);
function ft(e) {
  const t = {};
  for (const o in e) {
    const s = e[o];
    s !== void 0 && (t[o] = s);
  }
  return t;
}
const [Fe] = /* @__PURE__ */ u(false), [N, K] = /* @__PURE__ */ u({});
function h(e) {
  return /* @__PURE__ */ c(() => N()[e]);
}
const ht = h("button_color"), os = h("button_text_color"), ss = h("secondary_bg_color");
const ee = /* @__PURE__ */ z({
  hasShineEffect: false,
  isEnabled: true,
  isLoaderVisible: false,
  isVisible: false,
  text: "Continue"
}), bt = /* @__PURE__ */ c(() => {
  const e = ee();
  return {
    ...e,
    backgroundColor: e.backgroundColor || ht() || "#2481cc",
    textColor: e.textColor || os() || "#ffffff"
  };
}), [Ye, ns] = /* @__PURE__ */ u(false), Ga = "web_app_setup_main_button", rs = "main_button_pressed", Pe = "mainButton", gt = V(Pe), za = ye(Pe, ns);
gt("mount", () => {
  if (!Ye()) {
    const e = c$1() && T$1(Pe);
    e && ee.set(e), Ye.set(true);
  }
});
gt(
  "onClick",
  (e) => X(rs, e)
);
gt(
  "offClick",
  (e) => {
    me$1(rs, e);
  }
);
za(
  "setParams",
  (e) => {
    ee.set({ ...ee(), ...ft(e) }), w$2(Pe, ee());
    const t = bt();
    t.text && i(Ga, {
      color: t.backgroundColor,
      has_shine_effect: t.hasShineEffect,
      is_active: t.isEnabled,
      is_progress_visible: t.isLoaderVisible,
      is_visible: t.isVisible,
      text: t.text,
      text_color: t.textColor
    });
  }
);
function Et(e, t) {
  document.documentElement.style.setProperty(e, t);
}
function St(e) {
  document.documentElement.style.removeProperty(e);
}
const G = "themeParams", Ct = "theme_changed", as = V(G), wt = ({ theme_params: e }) => {
  N.set(e), w$2(G, e);
}, [
  Za,
  is,
  Ja,
  cs
] = /* @__PURE__ */ pe(
  G,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (e) => m$1.resolve(
    c$1() && T$1(G) || le().tgWebAppThemeParams || {}
  ),
  (e) => {
    X(Ct, wt), N.set(e);
  }
), ei = ye(G, cs[0]);
ei(
  "bindCssVars",
  (e) => {
    if (Fe())
      throw new ot();
    e || (e = (s) => `--tg-theme-${k$1(s)}`);
    function t(s) {
      Object.entries(N()).forEach(([n, r2]) => {
        r2 && s(n, r2);
      });
    }
    function o() {
      t((s, n) => {
        Et(e(s), n);
      });
    }
    return o(), N.sub(o), Fe.set(true), () => {
      t(St), N.unsub(o), Fe.set(false);
    };
  }
);
const us = as("mount", Za);
is[2];
is[1];
Ja[1];
const [Xe, ni] = cs, ps = as("mountSync", () => {
  if (!Xe()) {
    const e = c$1() && T$1(G) || le().tgWebAppThemeParams || {};
    X(Ct, wt), m2(() => {
      N.set(e), Xe.set(true);
    });
  }
});
// @__NO_SIDE_EFFECTS__
function ds(e) {
  return /* @__PURE__ */ c(() => Te(e()));
}
function Te(e) {
  return H$2(e) ? e : K()[e];
}
const [ae] = /* @__PURE__ */ u("bg_color"), $t = /* @__PURE__ */ ds(ae), [ie] = /* @__PURE__ */ u("bottom_bar_bg_color"), Mt = /* @__PURE__ */ c(() => {
  const e = ie();
  return H$2(e) ? e : K()[e] || ss();
}), [ce] = /* @__PURE__ */ u("bg_color"), ms = /* @__PURE__ */ ds(ce), [Ue] = /* @__PURE__ */ u(false), [ke] = /* @__PURE__ */ u(true), _s = /* @__PURE__ */ c(() => ({
  backgroundColor: ae(),
  bottomBarColor: ie(),
  headerColor: ce(),
  isActive: ke()
})), ge = "web_app_set_background_color", Ee = "web_app_set_bottom_bar_color", D = "web_app_set_header_color", At = "visibility_changed", H = "miniApp", vt = {
  any: [
    ge,
    Ee,
    D
  ]
}, yt = (e) => {
  ke.set(e.is_visible), Ie();
}, Bt = (e) => {
  [
    [ce, D],
    [ae, ge],
    [ie, Ee]
  ].forEach(([t, o]) => {
    const s = t();
    if (!H$2(s) && // Header color setter uses additional checks. We don't apply changes if the current
    // value is a known color key because it updates automatically by itself.
    (o !== D || s !== "bg_color" && s !== "secondary_bg_color")) {
      const n = e[s];
      n && i(o, { color: n });
    }
  });
}, [
  mi,
  fs,
  _i,
  hs
] = /* @__PURE__ */ pe(
  H,
  (e) => us(e).then(() => c$1() && T$1(H) || void 0),
  (e) => {
    Pt.ifAvailable(e ? e.backgroundColor : "bg_color"), Tt.ifAvailable(e ? e.bottomBarColor : "bottom_bar_bg_color"), kt.ifAvailable(e ? e.headerColor : "bg_color"), ke.set(e ? e.isActive : true), X(At, yt), K.sub(Bt);
  }
), bs = V(H), gs = w(H, vt), Oe = I(H, hs[0], vt);
Oe(
  "bindCssVars",
  (e) => {
    if (Ue())
      throw new ot();
    const [t, o] = L$2();
    function s(n, r2) {
      function a2() {
        Et(n, r2() || null);
      }
      a2(), t(r2.sub(a2), St.bind(null, n));
    }
    return e || (e = (n) => `--tg-${y$2(n)}`), s(e("bgColor"), $t), s(e("bottomBarColor"), Mt), s(e("headerColor"), ms), t(() => {
      Ue.set(false);
    }), Ue.set(true), o;
  }
);
bs("close", (e) => {
  i("web_app_close", { return_back: e });
});
gs("mount", mi);
fs[2];
fs[1];
_i[1];
const [Ze, Si] = hs;
gs("mountSync", () => {
  if (!Ze()) {
    ps();
    const e = c$1() && T$1(H) || void 0;
    Pt.ifAvailable(e ? e.backgroundColor : "bg_color"), Tt.ifAvailable(e ? e.bottomBarColor : "bottom_bar_bg_color"), kt.ifAvailable(e ? e.headerColor : "bg_color"), X(At, yt), K.sub(Bt), m2(() => {
      ke.set(e ? e.isActive : true), Ze.set(true);
    });
  }
});
bs("ready", () => {
  i("web_app_ready");
});
function Ie() {
  w$2(H, _s());
}
const Pt = Oe(
  "setBackgroundColor",
  (e) => {
    if (e === ae())
      return;
    const t = Te(e);
    if (!t)
      throw new st(e);
    i(ge, { color: t }), ae.set(e), Ie();
  },
  ge
), Tt = Oe(
  "setBottomBarColor",
  (e) => {
    if (e === ie())
      return;
    const t = Te(e);
    if (!t)
      throw new st(e);
    i(Ee, { color: t }), ie.set(e), Ie();
  },
  Ee
), kt = Oe(
  "setHeaderColor",
  (e) => {
    if (e !== ce()) {
      if (e === "bg_color" || e === "secondary_bg_color")
        i(D, { color_key: e });
      else {
        const t = Te(e);
        if (!t)
          throw new st(e);
        i(D, { color: t });
      }
      ce.set(e), Ie();
    }
  },
  D,
  {
    rgb: [D, "color", H$2]
  }
);
function Mi(e) {
  const t = e.message.trim(), o = (e.title || "").trim(), s = e.buttons || [];
  if (o.length > 64)
    throw new y(`Invalid title: ${o}`);
  if (!t || t.length > 256)
    throw new y(`Invalid message: ${t}`);
  if (s.length > 3)
    throw new y(`Invalid buttons count: ${s.length}`);
  return {
    title: o,
    message: t,
    buttons: s.length ? s.map((n, r2) => {
      const a2 = n.id || "";
      if (a2.length > 64)
        throw new y(`Button with index ${r2} has invalid id: ${a2}`);
      if (!n.type || n.type === "default" || n.type === "destructive") {
        const l2 = n.text.trim();
        if (!l2 || l2.length > 64)
          throw new y(`Button with index ${r2} has invalid text: ${l2}`);
        return { type: n.type, text: l2, id: a2 };
      }
      return { type: n.type, id: a2 };
    }) : [{ type: "close", id: "" }]
  };
}
const Ot = "web_app_open_popup", Ss = w("popup", Ot), [Cs, It, ws] = b(
  (e) => d(Ot, "popup_closed", {
    ...e,
    params: Mi(e)
  }).then(({ button_id: t }) => t === void 0 ? null : t),
  "A popup is already opened"
);
Ss("open", Cs);
It[1];
It[2];
ws[1];
Ss("show", Cs);
const [, ki, Oi] = It, [, Ii] = ws, $s = "web_app_close_scan_qr_popup", Vt = "web_app_open_scan_qr_popup", Vi = "scan_qr_popup_closed", qi = "qr_text_received", Ms = w("qrScanner", Vt);
Ms("close", () => {
  i($s), Q(As);
});
function Ni(e) {
  e || (e = {});
  const { onCaptured: t, text: o, capture: s } = e, [, n] = L$2(
    X(Vi, () => {
      r2.resolve();
    }),
    X(qi, (a2) => {
      t ? t(a2.data) : (!s || s(a2.data)) && (r2.resolve(a2.data), i($s));
    })
  ), r2 = new R$2(e);
  return (e.postEvent || i)(Vt, { text: o }), m$1.resolve(r2).catch(qo).finally(n);
}
const [
  Hi,
  Li,
  Ri
] = b(Ni, "The QR Scanner is already opened");
Ms("open", Hi);
const [, As, Fi] = Li, [, Ui] = Ri;
const te = /* @__PURE__ */ z({
  hasShineEffect: false,
  isEnabled: true,
  isLoaderVisible: false,
  isVisible: false,
  position: "left",
  text: "Cancel"
}), qt = /* @__PURE__ */ c(() => {
  const e = te();
  return {
    ...e,
    backgroundColor: e.backgroundColor || Mt() || "#000000",
    textColor: e.textColor || ht() || "#2481cc"
  };
}), [Je, vs] = /* @__PURE__ */ u(false), Ve = "web_app_setup_secondary_button", ys = "secondary_button_pressed", qe = "secondaryButton", xt = w(qe, Ve), Ji = I(qe, vs, Ve);
xt("mount", () => {
  if (!Je()) {
    const e = c$1() && T$1(qe);
    e && te.set(e), Je.set(true);
  }
});
xt(
  "onClick",
  (e) => X(ys, e)
);
xt(
  "offClick",
  (e) => {
    me$1(ys, e);
  }
);
Ji(
  "setParams",
  (e) => {
    te.set({ ...te(), ...ft(e) }), w$2(qe, te());
    const t = qt();
    t.text && i(Ve, {
      color: t.backgroundColor,
      has_shine_effect: t.hasShineEffect,
      is_active: t.isEnabled,
      is_progress_visible: t.isLoaderVisible,
      is_visible: t.isVisible,
      position: t.position,
      text: t.text,
      text_color: t.textColor
    });
  }
);
const xe = "web_app_setup_settings_button", Bs = "settings_button_pressed", De = "settingsButton", [co] = /* @__PURE__ */ u(false), [Se] = /* @__PURE__ */ u(false), Dt = w(De, xe), Ps = I(De, Se, xe);
Ps("hide", () => {
  Nt(false);
});
Dt("mount", () => {
  Se() || (Nt(c$1() && T$1(De) || false), Se.set(true));
});
function Nt(e) {
  e !== co() && (i(xe, { is_visible: e }), w$2(De, e), co.set(e));
}
Dt(
  "onClick",
  (e) => X(Bs, e)
);
Dt(
  "offClick",
  (e) => {
    me$1(Bs, e);
  }
);
Ps("show", () => {
  Nt(true);
});
const Ne = "web_app_setup_swipe_behavior", He = "swipeBehavior", [ue] = /* @__PURE__ */ u(false), [et] = /* @__PURE__ */ u(true), gc = w(He, Ne), Ts = I(He, ue, Ne);
Ts("disableVertical", () => {
  Ht(false);
});
Ts("enableVertical", () => {
  Ht(true);
});
gc("mount", () => {
  ue() || (Ht(
    c$1() && T$1(He) || false,
    true
  ), ue.set(true));
});
function Ht(e, t) {
  (e !== et() || t) && (i(Ne, { allow_vertical_swipe: e }), w$2(He, e), et.set(e));
}
const j = "viewport", Lt = "fullscreen_changed", Rt = "safe_area_changed", jt = "content_safe_area_changed", Ft = "viewport_changed", ks = V(j), uo = { left: 0, top: 0, bottom: 0, right: 0 };
function Ge(e) {
  return Math.max(e, 0);
}
const [ze, Os] = /* @__PURE__ */ u({
  contentSafeAreaInsets: uo,
  height: 0,
  isExpanded: false,
  isFullscreen: false,
  safeAreaInsets: uo,
  stableHeight: 0,
  width: 0
});
function F(e) {
  return /* @__PURE__ */ c(() => Os()[e]);
}
const Ut = F("height"), Gt = F("stableHeight"), Is = F("width");
function Y(e) {
  const { height: t, stableHeight: o, width: s } = e;
  ze.set({
    ...ze(),
    ...ft({
      ...e,
      height: t ? Ge(t) : void 0,
      width: s ? Ge(s) : void 0,
      stableHeight: o ? Ge(o) : void 0
    })
  }), w$2(j, ze());
}
function Ac() {
  return T$1(j);
}
function Le(e) {
  return /* @__PURE__ */ c(() => zt()[e]);
}
const zt = F("contentSafeAreaInsets"), Vs = Le("bottom"), qs = Le("left"), xs = Le("right"), Ds = Le("top");
function Re(e) {
  return /* @__PURE__ */ c(() => Wt()[e]);
}
const Wt = F("safeAreaInsets"), Ns = Re("bottom"), Hs = Re("left"), Ls = Re("right"), Rs = Re("top"), js = "web_app_request_safe_area", Fs = w(j, js), lo = Fs(
  "requestContentSafeAreaInsets",
  (e) => d("web_app_request_content_safe_area", jt, e)
);
function vc(e) {
  return d("web_app_request_viewport", Ft, e);
}
const po = Fs(
  "requestSafeAreaInsets",
  (e) => d(js, Rt, e)
), Us = (e) => {
  const { height: t } = e;
  Y({
    isExpanded: e.is_expanded,
    height: t,
    width: e.width,
    stableHeight: e.is_state_stable ? t : void 0
  });
}, Gs = (e) => {
  Y({ isFullscreen: e.is_fullscreen });
}, zs = (e) => {
  Y({ safeAreaInsets: e });
}, Ws = (e) => {
  Y({ contentSafeAreaInsets: e });
}, [
  yc,
  Bc,
  Pc,
  Tc
] = /* @__PURE__ */ pe(
  j,
  (e) => {
    const t = c$1() && Ac();
    return t ? m$1.resolve(t) : m$1.fn(async (o) => {
      const s = await m$1.all([
        po.isAvailable() ? po(o) : Wt(),
        lo.isAvailable() ? lo(o) : zt()
      ]), n = le(), r2 = {
        contentSafeAreaInsets: s[1],
        isFullscreen: !!n.tgWebAppFullscreen,
        safeAreaInsets: s[0]
      };
      if (["macos", "tdesktop", "unigram", "webk", "weba", "web"].includes(n.tgWebAppPlatform)) {
        const a2 = window;
        return {
          ...r2,
          height: a2.innerHeight,
          isExpanded: true,
          stableHeight: a2.innerHeight,
          width: a2.innerWidth
        };
      }
      return vc(o).then((a2) => ({
        ...r2,
        height: a2.height,
        isExpanded: a2.is_expanded,
        stableHeight: a2.is_state_stable ? a2.height : 0,
        width: a2.width
      }));
    }, e);
  },
  (e) => {
    X(Ft, Us), X(Lt, Gs), X(Rt, zs), X(jt, Ws), Y(e);
  }
);
ks("mount", yc);
const [, Qs, Oc] = Bc, [, Ic] = Pc, [Qt, Vc] = Tc;
const xc = ye(j, Qt), [We] = /* @__PURE__ */ u(false);
xc(
  "bindCssVars",
  (e) => {
    if (We())
      throw new ot();
    e || (e = (o) => `--tg-viewport-${y$2(o)}`);
    const t = [
      ["height", Ut],
      ["stableHeight", Gt],
      ["width", Is],
      ["safeAreaInsetTop", Rs],
      ["safeAreaInsetBottom", Ns],
      ["safeAreaInsetLeft", Hs],
      ["safeAreaInsetRight", Ls],
      ["contentSafeAreaInsetTop", Ds],
      ["contentSafeAreaInsetBottom", Vs],
      ["contentSafeAreaInsetLeft", qs],
      ["contentSafeAreaInsetRight", xs]
    ].reduce((o, [s, n]) => {
      const r2 = e(s);
      if (r2) {
        const a2 = () => {
          Et(r2, `${n()}px`);
        };
        o.push([a2, n.sub(a2), r2]);
      }
      return o;
    }, []);
    return t.forEach((o) => {
      o[0]();
    }), We.set(true), () => {
      t.forEach((o) => {
        o[1](), St(o[2]);
      }), We.set(false);
    };
  }
);
ks("expand", () => {
  i("web_app_expand");
});
const Ks = "web_app_request_fullscreen", Lc = I(j, Qt, Ks), Ys = F("isFullscreen"), [
  Rc
] = /* @__PURE__ */ u(), [
  Fc
] = /* @__PURE__ */ u();
function Xs(e, t) {
  return Lc(
    e,
    b(
      (o) => d(
        t ? Ks : "web_app_exit_fullscreen",
        [Lt, "fullscreen_failed"],
        o
      ).then((s) => {
        if ("error" in s && s.error !== "ALREADY_FULLSCREEN")
          throw new Vn(s.error);
        const n = "is_fullscreen" in s ? s.is_fullscreen : true;
        n !== Ys() && Y({ isFullscreen: n });
      }),
      "Fullscreen mode change is already being requested",
      {
        promise: Rc,
        error: Fc
      }
    )[0]
  );
}
Xs("requestFullscreen", true);
Xs("exitFullscreen");
const Zs = "web_app_request_emoji_status_access", [
  Wc,
  Qc,
  Kc
] = b((e) => d(Zs, "emoji_status_access_requested", e).then((t) => t.status), "Emoji status access request is already in progress"), [, il, cl] = Qc, [, ul] = Kc, Js = "web_app_set_emoji_status", [
  Yc,
  Xc,
  Zc
] = b(
  (e, t) => d(Js, ["emoji_status_set", "emoji_status_failed"], {
    params: {
      custom_emoji_id: e,
      duration: (t || {}).duration
    },
    ...t
  }).then((o) => {
    if (o && "error" in o)
      throw new In(o.error);
  }),
  "Emoji status set request is currently in progress"
), [, pl, dl] = Xc, [, ml] = Zc, sn = "web_app_check_home_screen", [
  eu,
  tu,
  ou
] = b((e) => d(sn, "home_screen_checked", e).then((t) => t.status || "unknown"), "Check home screen status request is currently in progress"), [, Sl, Cl] = tu, [, wl] = ou, su = V();
su(
  "openLink",
  (e, t) => {
    if (typeof e == "string")
      try {
        e = new URL(e);
      } catch (o) {
        throw new y(`"${e.toString()}" is invalid URL`, o);
      }
    t || (t = {}), i("web_app_open_link", {
      url: e.toString(),
      try_browser: t.tryBrowser,
      try_instant_view: t.tryInstantView
    });
  }
);
const _o = "web_app_open_tg_link", nu = V(), ru = nu(
  "openTelegramLink",
  (e) => {
    const t = e.toString();
    if (!t.match(/^https:\/\/t.me\/.+/))
      throw new y(`"${t}" is invalid URL`);
    if (!z$1(_o, O())) {
      window.location.href = t;
      return;
    }
    e = new URL(e), i(_o, { path_full: e.pathname + e.search });
  }
), au = V();
au(
  "shareURL",
  (e, t) => {
    ru(
      "https://t.me/share/url?" + new URLSearchParams({ url: e, text: t || "" }).toString().replace(/\+/g, "%20")
    );
  }
);
function iu(e, t) {
  return new m$1({ abortSignal: t, timeout: e }).catch(() => {
  });
}
const nn = "web_app_request_phone", [
  cu,
  uu,
  lu
] = b((e) => d(nn, "phone_requested", e).then((t) => t.status), "Phone access request is currently in progress"), pu = /* @__PURE__ */ p("requestPhoneAccess", cu, {
  isSupported: nn
}), [, Al, vl] = uu, [, yl] = lu;
async function fo(e) {
  const t = parse(/* @__PURE__ */ string(), await W("getRequestedContact", {}, {
    ...e,
    timeout: (e || {}).timeout || 5e3
  }));
  return {
    raw: t,
    parsed: parse(
      /* @__PURE__ */ pipe(
        // todo: Union is unnecessary here, but we use it to comply TypeScript checker.
        /* @__PURE__ */ union([/* @__PURE__ */ string(), /* @__PURE__ */ instance(URLSearchParams)]),
        ce$1(
          /* @__PURE__ */ looseObject({
            contact: /* @__PURE__ */ pipe(
              /* @__PURE__ */ string(),
              oe(),
              /* @__PURE__ */ looseObject({
                user_id: /* @__PURE__ */ number(),
                phone_number: /* @__PURE__ */ string(),
                first_name: /* @__PURE__ */ string(),
                last_name: /* @__PURE__ */ optional(/* @__PURE__ */ string())
              })
            ),
            auth_date: /* @__PURE__ */ pipe(
              /* @__PURE__ */ string(),
              /* @__PURE__ */ transform((o) => new Date(Number(o) * 1e3)),
              /* @__PURE__ */ date()
            ),
            hash: /* @__PURE__ */ string()
          })
        )
      ),
      t
    )
  };
}
const [du, mu, _u] = b(
  (e) => new m$1(
    async (t, o, s) => {
      try {
        return t(await fo(s));
      } catch (a2) {
        if (a2 instanceof ValiError2)
          throw a2;
      }
      if (await pu(s) !== "sent")
        throw new Oo("User denied access");
      let r2 = 50;
      for (; !s.isAborted(); ) {
        try {
          return t(await fo(s));
        } catch (a2) {
          if (a2 instanceof ValiError2)
            throw a2;
        }
        await iu(r2), r2 += 50;
      }
    },
    e
  ),
  "Contact is already being requested"
), [, Pl, Tl] = mu, [, kl] = _u, an = "web_app_request_write_access", [
  hu,
  bu,
  gu
] = b(
  (e) => d(an, "write_access_requested", e).then((t) => t.status),
  "Write access request is currently in progress"
), [, Il, Vl] = bu, [, ql] = gu;
const schema = objectType({
  username: stringType().min(1, "login.fieldRequired"),
  password: stringType().min(1, "login.fieldRequired")
});
const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const { resolvedTheme } = useTheme();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: a$2(schema)
  });
  reactExports.useEffect(() => {
    queryClient.cancelQueries();
    removeAuthToken();
    queryClient.clear();
    if (location.pathname !== "/login") {
      navigate("/login", { replace: true });
    }
  }, [location.pathname, navigate]);
  let isTelegram = false;
  let initDataRaw = "";
  try {
    initDataRaw = Be$1() || "";
    isTelegram = !!initDataRaw;
  } catch (e) {
    isTelegram = false;
    initDataRaw = "";
  }
  const {
    mutate: login,
    isPending: loading,
    error
  } = useAdminToken({
    mutation: {
      onSuccess({ access_token }) {
        setAuthToken(access_token);
        navigate("/", { replace: true });
      }
    }
  });
  const { isPending: miniAppLoading, error: miniAppError } = useAdminMiniAppToken({
    mutation: {
      onSuccess(data) {
        if (data && data.access_token) {
          setAuthToken(data.access_token);
          navigate("/", { replace: true });
        }
      }
    }
  });
  const handleLogin = async (values) => {
    if (isTelegram) {
      try {
        const data = await $fetch("/api/admin/miniapp/token", {
          method: "POST",
          headers: {
            "x-telegram-authorization": initDataRaw
          }
        });
        if (data && data.access_token) {
          setAuthToken(data.access_token);
          navigate("/", { replace: true });
        } else {
          throw new Error(data?.detail || "Telegram login failed");
        }
      } catch (err) {
        alert(err.message || "Telegram login failed");
      }
    } else {
      login({
        data: {
          ...values,
          grant_type: "password"
        }
      });
    }
  };
  const [telegramLoading, setTelegramLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isTelegram) {
      try {
        const win = window;
        if (win.Telegram && win.Telegram.WebApp && typeof win.Telegram.WebApp.expand === "function") {
          win.Telegram.WebApp.expand();
        }
        const expandEventData = JSON.stringify({
          eventType: "web_app_expand",
          eventData: {}
        });
        if (window.parent && window.parent !== window) {
          window.parent.postMessage(expandEventData, "https://web.telegram.org");
        }
        if (typeof window.external !== "undefined" && typeof window.external.notify === "function") {
          ;
          window.external.notify(expandEventData);
        }
        if (win.TelegramWebviewProxy && typeof win.TelegramWebviewProxy.postEvent === "function") {
          win.TelegramWebviewProxy.postEvent("web_app_expand", "{}");
        }
      } catch (e) {
      }
      setTelegramLoading(true);
      $fetch("/api/admin/miniapp/token", {
        method: "POST",
        headers: {
          "x-telegram-authorization": initDataRaw
        }
      }).then((data) => {
        if (data && data.access_token) {
          setAuthToken(data.access_token);
          navigate("/", { replace: true });
        } else {
          throw new Error(data?.detail || "Telegram login failed");
        }
      }).catch((err) => {
        alert(err.message || "Telegram login failed");
      }).finally(() => {
        setTelegramLoading(false);
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full flex-col justify-between p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Language, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 w-full max-w-[340px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: resolvedTheme === "dark" ? "/statics/favicon/logo.png" : "/statics/favicon/logo-dark.png", alt: "PasarGuard Logo", className: "h-20 w-20 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-semibold", children: t("login.loginYourAccount") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: t("login.welcomeBack") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-[300px] pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(handleLogin), autoComplete: "on", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "py-5", placeholder: t("username"), autoComplete: "username", ...register("username"), error: t(errors?.username?.message) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { className: "py-5", placeholder: t("password"), autoComplete: "current-password", ...register("password"), error: t(errors?.password?.message) }),
          (error && error.data || miniAppError && miniAppError.data) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mt-2", variant: "destructive", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: "18px" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: String(error?.data?.detail || miniAppError?.data?.detail) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LoaderButton, { isLoading: loading || miniAppLoading || telegramLoading, type: "submit", className: "flex w-full items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("login") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: "18px" })
          ] }) })
        ] }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Login,
  Login as default
};
//# sourceMappingURL=login-Bw_yAVFh.js.map
