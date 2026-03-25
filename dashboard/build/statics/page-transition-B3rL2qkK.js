import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { a as useLocation, e as useNavigationType } from "./react-router-C8FEAJQh.js";
import { c as cn } from "./index-C_i3x-Gf.js";
let mobileCache = null;
let motionCache = null;
const getMobile = () => {
  if (typeof window === "undefined") return false;
  if (mobileCache === null) {
    mobileCache = window.innerWidth < 768;
    window.addEventListener(
      "resize",
      () => {
        mobileCache = window.innerWidth < 768;
      },
      { passive: true }
    );
  }
  return mobileCache;
};
const getMotion = () => {
  if (typeof window === "undefined") return false;
  if (motionCache === null) {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionCache = mq.matches;
    mq.addEventListener("change", (e) => {
      motionCache = e.matches;
    });
  }
  return motionCache;
};
const isTab = (a, b) => a.startsWith("/settings") && b.startsWith("/settings") || a.startsWith("/nodes") && b.startsWith("/nodes");
const PageTransition = reactExports.memo(function PageTransition2({ children, duration = 300, delay = 0, isContentTransition = false }) {
  const location = useLocation();
  const navType = useNavigationType();
  const [displayChildren, setDisplayChildren] = reactExports.useState(children);
  const [opacity, setOpacity] = reactExports.useState(1);
  const [isShaking, setIsShaking] = reactExports.useState(false);
  const prev = reactExports.useRef({ pathname: location.pathname, hash: location.hash, key: location.key });
  const first = reactExports.useRef(true);
  const timeout = reactExports.useRef(null);
  reactExports.useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    []
  );
  reactExports.useEffect(() => {
    if (first.current) {
      first.current = false;
      prev.current = { pathname: location.pathname, hash: location.hash, key: location.key };
      return;
    }
    if (timeout.current) clearTimeout(timeout.current);
    if (navType === "POP") {
      setDisplayChildren(children);
      setOpacity(1);
      prev.current = { pathname: location.pathname, hash: location.hash, key: location.key };
      return;
    }
    const mobile = getMobile();
    const noMotion2 = getMotion();
    const current = `${location.pathname}${location.hash}`;
    const prevKey = `${prev.current.pathname}${prev.current.hash}`;
    const same = current === prevKey && location.key !== prev.current.key;
    const tabNav = isTab(location.pathname, prev.current.pathname);
    if (tabNav && !isContentTransition || noMotion2) {
      setDisplayChildren(children);
      setOpacity(1);
      prev.current = { pathname: location.pathname, hash: location.hash, key: location.key };
      return;
    }
    const ms2 = isContentTransition && mobile ? 200 : mobile ? 150 : 120;
    if (same) {
      setIsShaking(true);
      timeout.current = window.setTimeout(
        () => {
          setIsShaking(false);
          prev.current = { pathname: location.pathname, hash: location.hash, key: location.key };
        },
        Math.min(duration, 200)
      );
      return;
    }
    if (current !== prevKey) {
      setOpacity(0);
      requestAnimationFrame(() => {
        setDisplayChildren(children);
        requestAnimationFrame(() => {
          setOpacity(1);
          timeout.current = window.setTimeout(() => {
            prev.current = { pathname: location.pathname, hash: location.hash, key: location.key };
          }, ms2);
        });
      });
    } else {
      setDisplayChildren(children);
      prev.current = { pathname: location.pathname, hash: location.hash, key: location.key };
    }
  }, [location, navType, children, isContentTransition, duration]);
  reactExports.useEffect(() => {
    if (opacity === 1 && !isShaking) setDisplayChildren(children);
  }, [children, opacity, isShaking]);
  const noMotion = getMotion();
  const ms = isContentTransition && getMobile() ? 200 : getMobile() ? 150 : 120;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("w-full", isShaking && !noMotion && "animate-telegram-shake"),
      style: {
        opacity,
        transform: "translate3d(0, 0, 0)",
        ...isShaking && !noMotion && {
          animationDuration: `${Math.min(duration, 200)}ms`,
          ...delay > 0 && { animationDelay: `${delay}ms` },
          animationFillMode: "both"
        },
        ...!noMotion && { transition: `opacity ${ms}ms cubic-bezier(0.4, 0, 0.2, 1)` }
      },
      children: displayChildren
    }
  );
});
export {
  PageTransition as P
};
//# sourceMappingURL=page-transition-B3rL2qkK.js.map
