import { C as CircleAlert } from "./circle-alert-40y1kNqq.js";
import { C as Clock } from "./clock-BCHdn894.js";
import { f as createLucideIcon, c as cn } from "./index-C_i3x-Gf.js";
import { W as Wifi } from "./wifi-YUIK0HhE.js";
import { j as jsxRuntimeExports, r as reactExports } from "./react-D6OUsQqF.js";
import { b as buttonVariants } from "./button-BOH66nN-.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { C as ChevronLeft } from "./chevron-left-Bre8eEMe.js";
import { C as ChevronRight } from "./chevron-right-DkXHvvEa.js";
const Ban = createLucideIcon("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
]);
const Ellipsis = createLucideIcon("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
const statusColors = {
  active: {
    statusColor: "dark:bg-emerald-900 dark:text-emerald-200 bg-emerald-100 text-emerald-900",
    bandWidthColor: "bg-primary-500",
    icon: Wifi,
    sliderColor: "bg-emerald-600"
  },
  connected: {
    statusColor: "bg-green-500 text-white",
    bandWidthColor: "bg-primary-500",
    icon: Wifi,
    sliderColor: "bg-primary-500"
  },
  disabled: {
    statusColor: "dark:bg-zinc-800 dark:text-zinc-300 bg-zinc-300 text-zinc-800",
    bandWidthColor: "bg-zinc-400",
    icon: Ban,
    sliderColor: "bg-neutral-600"
  },
  expired: {
    statusColor: "dark:bg-amber-600 dark:text-amber-100 bg-amber-100 text-amber-600",
    bandWidthColor: "bg-amber-500",
    icon: Clock,
    sliderColor: "bg-amber-600"
  },
  on_hold: {
    statusColor: "dark:bg-violet-900 dark:text-violet-200 bg-violet-200 text-violet-900",
    bandWidthColor: "bg-violet-500",
    icon: Clock,
    sliderColor: "bg-violet-800"
  },
  connecting: {
    statusColor: "bg-orange-500 text-white",
    bandWidthColor: "bg-orange-500",
    icon: Clock,
    sliderColor: "bg-primary-500"
  },
  limited: {
    statusColor: "dark:bg-red-900 dark:text-red-100 bg-red-100 text-red-900",
    bandWidthColor: "bg-red-500",
    icon: CircleAlert,
    sliderColor: "bg-red-600"
  },
  error: {
    statusColor: "bg-red-500 text-white",
    bandWidthColor: "bg-red-500",
    icon: CircleAlert,
    sliderColor: "bg-red-900"
  }
};
const Pagination = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { role: "navigation", "aria-label": "pagination", className: cn("mx-auto flex w-full justify-center", className), ...props });
Pagination.displayName = "Pagination";
const PaginationContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { ref, className: cn("flex flex-row flex-nowrap items-center gap-1", className), ...props }));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, className: cn("shrink-0", className), ...props }));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size
      }),
      size === "icon" && "h-9 min-w-9 w-auto px-2 tabular-nums",
      className
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({ className, ...props }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: cn("gap-1 pl-2.5", className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("previous") })
  ] });
};
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({ className, ...props }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { "aria-label": "Go to next page", size: "default", className: cn("gap-1 pr-2.5", className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("next") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
  ] });
};
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "aria-hidden": true, className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-4 w-4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "More pages" })
] });
PaginationEllipsis.displayName = "PaginationEllipsis";
export {
  Pagination as P,
  PaginationContent as a,
  PaginationItem as b,
  PaginationPrevious as c,
  PaginationEllipsis as d,
  PaginationLink as e,
  PaginationNext as f,
  statusColors as s
};
//# sourceMappingURL=pagination-CoM3MD2Q.js.map
