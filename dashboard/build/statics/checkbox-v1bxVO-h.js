import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { G as Checkbox$1, J as CheckboxIndicator } from "./radix-3Azqn93X.js";
import { c as cn } from "./index-C_i3x-Gf.js";
import { C as Check } from "./check-ayw17ogi.js";
const Checkbox = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Checkbox$1,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = Checkbox$1.displayName;
export {
  Checkbox as C
};
//# sourceMappingURL=checkbox-v1bxVO-h.js.map
