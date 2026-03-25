import { j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { B as Button } from "./button-BOH66nN-.js";
import { L as LoaderCircle, c as cn } from "./index-C_i3x-Gf.js";
function LoaderButton({ isLoading = false, loadingText, children, className, disabled, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: isLoading || disabled, className: cn("relative", className), ...props, children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
    isLoading && loadingText ? loadingText : children
  ] });
}
export {
  LoaderButton as L
};
//# sourceMappingURL=loader-button-C4leFJGU.js.map
