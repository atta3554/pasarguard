import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { n as Root, V as Viewport, o as Corner, S as ScrollAreaScrollbar, p as ScrollAreaThumb } from "./radix-3Azqn93X.js";
import { c as cn } from "./index-C_i3x-Gf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
const ScrollArea = reactExports.forwardRef(({ className, children, ...props }, ref) => {
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = reactExports.useState(i18n.dir() === "rtl");
  reactExports.useEffect(() => {
    if (i18n.dir() === "rtl") setIsRTL(true);
    else setIsRTL(false);
  }, [i18n.language]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport, { className: "h-full w-full rounded-[inherit]", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, { isRTL }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {})
  ] });
});
ScrollArea.displayName = Root.displayName;
const ScrollBar = reactExports.forwardRef(({ className, orientation = "vertical", isRTL, ...props }, ref) => {
  const scrollbarStyle = isRTL ? { left: 0, right: "auto" } : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbar,
    {
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      ),
      style: scrollbarStyle,
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
    }
  );
});
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
export {
  ScrollArea as S
};
//# sourceMappingURL=scroll-area-CNtShxK0.js.map
