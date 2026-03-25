import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { c as cn } from "./index-C_i3x-Gf.js";
import { l as Root, m as Indicator } from "./radix-3Azqn93X.js";
const Progress = reactExports.forwardRef(({ className, value, indicatorClassName, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn("relative h-[6px] w-full overflow-hidden rounded-full bg-primary/20", className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Indicator, { className: cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName), style: { transform: `translateX(-${100 - (value || 0)}%)` } }) }));
Progress.displayName = Root.displayName;
export {
  Progress as P
};
//# sourceMappingURL=progress-CZn3joiw.js.map
