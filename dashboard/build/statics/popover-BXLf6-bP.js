import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { ae as Root2, af as Trigger, ag as Content2, ah as Portal } from "./radix-3Azqn93X.js";
import { c as cn } from "./index-C_i3x-Gf.js";
const Popover = Root2;
const PopoverTrigger = Trigger;
const PopoverContent = reactExports.forwardRef(
  ({ className, align = "center", sideOffset = 4, disablePortal = true, ...props }, ref) => {
    const content = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        ref,
        align,
        sideOffset,
        className: cn(
          "z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        ...props
      }
    );
    return disablePortal ? content : /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: content });
  }
);
PopoverContent.displayName = Content2.displayName;
export {
  Popover as P,
  PopoverTrigger as a,
  PopoverContent as b
};
//# sourceMappingURL=popover-BXLf6-bP.js.map
