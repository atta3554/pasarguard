import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { c as cn } from "./index-C_i3x-Gf.js";
const Input = reactExports.forwardRef(({ className, type, error, isError, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        dir: "ltr",
        className: cn(
          "flex h-9 w-full rounded-md border border-border bg-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          {
            "border-destructive": !!error || isError
          }
        ),
        ref,
        ...props
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "my-1 inline-block text-sm text-destructive", children: error })
  ] });
});
Input.displayName = "Input";
export {
  Input as I
};
//# sourceMappingURL=input-BtfO4I3L.js.map
