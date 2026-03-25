import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { aw as Provider, ax as Root3, ay as Trigger, az as Portal, aA as Content2 } from "./radix-3Azqn93X.js";
import { c as cn } from "./index-C_i3x-Gf.js";
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipPortal = Portal;
const TooltipContent = reactExports.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) })
);
TooltipContent.displayName = Content2.displayName;
export {
  Tooltip as T,
  TooltipTrigger as a,
  TooltipContent as b,
  TooltipProvider as c,
  TooltipPortal as d
};
//# sourceMappingURL=tooltip-BT7me4NQ.js.map
