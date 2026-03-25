import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { B as Button } from "./button-BOH66nN-.js";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "./tooltip-BT7me4NQ.js";
import { u as useClipboard } from "./use-clipboard-C58gzIEw.js";
import { t as toast } from "./index-C_i3x-Gf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { C as Check } from "./check-ayw17ogi.js";
import { C as Copy } from "./copy-yeuAYUwv.js";
import { L as Link } from "./link-DcyOR6Xn.js";
function CopyButton({ value, className, copiedMessage = "Copied!", defaultMessage = "Click to copy", icon = "copy", onClick, showToast = false, toastSuccessMessage, toastErrorMessage }) {
  const { t } = useTranslation();
  const { copy, copied, error } = useClipboard({ timeout: 1500 });
  const shouldShowToast = reactExports.useRef(false);
  const handleCopy = reactExports.useCallback(
    async (e) => {
      e.preventDefault();
      e.stopPropagation();
      shouldShowToast.current = showToast;
      await copy(value);
      onClick?.(e);
    },
    [copy, value, onClick, showToast]
  );
  reactExports.useEffect(() => {
    if (!shouldShowToast.current) return;
    if (copied) {
      toast.success(toastSuccessMessage ? t(toastSuccessMessage) : t(copiedMessage));
      shouldShowToast.current = false;
    } else if (error) {
      toast.error(toastErrorMessage ? t(toastErrorMessage) : t("copyFailed", { defaultValue: "Failed to copy" }));
      shouldShowToast.current = false;
    }
  }, [copied, error, toastSuccessMessage, toastErrorMessage, copiedMessage, t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { open: copied ? true : void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "icon", variant: "ghost", className, "aria-label": "Copy to clipboard", onClick: handleCopy, children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : icon === "copy" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "h-4 w-4" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: copied ? t(copiedMessage) : t(defaultMessage) }) })
  ] });
}
export {
  CopyButton as C
};
//# sourceMappingURL=copy-button-w-Carjcl.js.map
