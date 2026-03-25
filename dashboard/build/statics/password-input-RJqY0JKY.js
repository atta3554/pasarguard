import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { f as createLucideIcon, c as cn } from "./index-C_i3x-Gf.js";
import { B as Button } from "./button-BOH66nN-.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { E as Eye } from "./eye-BsrIbFi5.js";
const EyeOff = createLucideIcon("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const PasswordInput = reactExports.forwardRef(({ className, type, error, isError, value, ...props }, ref) => {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [hasValue, setHasValue] = reactExports.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: showPassword ? "text" : "password", className: cn("pr-10", className), ref, error, isError, value, ...props, onChange: handleInputChange }),
    (value || hasValue) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        className: "absolute right-0 top-0 flex h-full items-center justify-center px-3 py-2 transition-opacity duration-200 hover:bg-transparent",
        onClick: togglePasswordVisibility,
        tabIndex: -1,
        children: [
          showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: showPassword ? "Hide password" : "Show password" })
        ]
      }
    )
  ] });
});
PasswordInput.displayName = "PasswordInput";
export {
  PasswordInput as P
};
//# sourceMappingURL=password-input-RJqY0JKY.js.map
