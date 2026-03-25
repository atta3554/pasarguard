import { j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { B as Button } from "./button-BOH66nN-.js";
import { c as TooltipProvider, T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "./tooltip-BT7me4NQ.js";
import { f as createLucideIcon, a as useDirDetection } from "./index-C_i3x-Gf.js";
import { a as DOCUMENTATION } from "./Project-De_VC6al.js";
import { i as instance, u as useTranslation } from "./i18n-C0-IFBIH.js";
import { S as Snowfall } from "./snowfall-e8fCp20i.js";
import { a as useLocation } from "./react-router-C8FEAJQh.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
const CircleHelp = createLucideIcon("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
function getDocsUrl(pagePath) {
  const locale = instance.language || "en";
  const normalizedLocale = locale.split("-")[0];
  if (pagePath === "/nodes") {
    return `${DOCUMENTATION}/${normalizedLocale}/node/`;
  }
  if (pagePath.startsWith("/settings")) {
    console.log(normalizedLocale);
    return `${DOCUMENTATION}/${normalizedLocale}/panel/settings`;
  }
  const pathMap = {
    "/": "dashboard",
    "/users": "users",
    "/statistics": "statistics",
    "/hosts": "host",
    "/groups": "groups",
    "/templates": "user_template",
    "/admins": "admins",
    "/bulk": "bulk",
    "/nodes/cores": "core"
  };
  let mappedPath = "";
  let longestMatch = "";
  for (const [route, docPath] of Object.entries(pathMap)) {
    if (pagePath.startsWith(route) && route.length > longestMatch.length) {
      longestMatch = route;
      mappedPath = docPath;
    }
  }
  if (mappedPath) {
    return `${DOCUMENTATION}/${normalizedLocale}/panel/${mappedPath}`;
  }
  const segments = pagePath.split("/").filter(Boolean);
  const fallbackPath = segments[segments.length - 1] || "dashboard";
  return `${DOCUMENTATION}/${normalizedLocale}/panel/${fallbackPath}`;
}
function PageHeader({ title, description, buttonText, onButtonClick, buttonIcon: Icon = Plus, buttonTooltip, tutorialUrl }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const location = useLocation();
  const docsUrl = tutorialUrl || getDocsUrl(location.pathname);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "relative mx-auto flex w-full flex-row items-start justify-between gap-4 overflow-hidden px-4 py-4 md:pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Snowfall, { className: "snowfall--header" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col gap-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-medium sm:text-xl", children: t(title) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: docsUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex h-7 w-7 items-center justify-center rounded-md border-0 text-primary transition-colors hover:border-2 hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "aria-label": t("tutorial", { defaultValue: "View tutorial" }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "h-4 w-4" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("tutorial", { defaultValue: "View tutorial" }) }) })
        ] }) })
      ] }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-normal text-xs text-muted-foreground sm:text-sm", children: t(description) })
    ] }),
    buttonText && onButtonClick && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: buttonTooltip ? /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "flex items-center", onClick: onButtonClick, size: "sm", children: [
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(buttonText) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: buttonTooltip }) })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "flex items-center", onClick: onButtonClick, size: "sm", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(buttonText) })
    ] }) })
  ] });
}
export {
  CircleHelp as C,
  PageHeader as P,
  getDocsUrl as g
};
//# sourceMappingURL=page-header-C5rLxqcj.js.map
