import { f as createLucideIcon, c as cn, a as useDirDetection, D as useGetAdminsSimple, L as LoaderCircle } from "./index-C_i3x-Gf.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { A as Avatar, a as AvatarFallback } from "./avatar-D4N4v88d.js";
import { B as Button } from "./button-BOH66nN-.js";
import { C as Command, a as CommandInput, e as CommandList, b as CommandEmpty, d as CommandItem } from "./command-AnChkD8Y.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { u as useDebouncedSearch } from "./use-debounced-search-CgdykSdk.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { U as UserRound } from "./user-round-3wZ7ngKm.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { C as Check } from "./check-ayw17ogi.js";
const MemoryStick = createLucideIcon("MemoryStick", [
  ["path", { d: "M6 19v-3", key: "1nvgqn" }],
  ["path", { d: "M10 19v-3", key: "iu8nkm" }],
  ["path", { d: "M14 19v-3", key: "kcehxu" }],
  ["path", { d: "M18 19v-3", key: "1vh91z" }],
  ["path", { d: "M8 11V9", key: "63erz4" }],
  ["path", { d: "M16 11V9", key: "fru6f3" }],
  ["path", { d: "M12 11V9", key: "ha00sb" }],
  ["path", { d: "M2 15h20", key: "16ne18" }],
  [
    "path",
    {
      d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
      key: "lhddv3"
    }
  ]
]);
const Sigma = createLucideIcon("Sigma", [
  [
    "path",
    {
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
      key: "wuwx1p"
    }
  ]
]);
const clamp = (value) => Math.min(100, Math.max(0, value));
const CircularProgress = reactExports.forwardRef(
  ({
    className,
    value,
    size = 120,
    strokeWidth = 8,
    showValue = true,
    valueFormatter,
    trackClassName,
    indicatorClassName,
    ...props
  }, ref) => {
    const normalizedValue = clamp(value);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressArc = circumference * (normalizedValue / 100);
    const valueText = valueFormatter ? valueFormatter(normalizedValue) : `${normalizedValue.toFixed(2)}%`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: cn("relative inline-flex items-center justify-center", className),
        style: { width: size, height: size },
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              width: size,
              height: size,
              viewBox: `0 0 ${size} ${size}`,
              className: "-rotate-90",
              role: "img",
              "aria-label": `Progress ${valueText}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: size / 2,
                    cy: size / 2,
                    r: radius,
                    fill: "none",
                    strokeWidth,
                    strokeDasharray: `${circumference} ${circumference}`,
                    className: cn("stroke-muted/40", trackClassName),
                    strokeLinecap: "round"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: size / 2,
                    cy: size / 2,
                    r: radius,
                    fill: "none",
                    strokeWidth,
                    strokeDasharray: `${progressArc} ${circumference}`,
                    className: cn("stroke-primary transition-all duration-500 ease-out", indicatorClassName),
                    strokeLinecap: "round"
                  }
                )
              ]
            }
          ),
          showValue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute text-sm font-medium text-foreground/90", children: valueText })
        ]
      }
    );
  }
);
CircularProgress.displayName = "CircularProgress";
const PAGE_SIZE = 20;
function AdminFilterCombobox({ value, onValueChange, onAdminSelect, className }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const [open, setOpen] = reactExports.useState(false);
  const [offset, setOffset] = reactExports.useState(0);
  const [admins, setAdmins] = reactExports.useState([]);
  const [hasMore, setHasMore] = reactExports.useState(true);
  const [isLoadingMore, setIsLoadingMore] = reactExports.useState(false);
  const listRef = reactExports.useRef(null);
  const { debouncedSearch: adminSearch, setSearch: setAdminSearchInput } = useDebouncedSearch("", 300);
  reactExports.useEffect(() => {
    setOffset(0);
    setAdmins([]);
    setHasMore(true);
    setIsLoadingMore(false);
  }, [adminSearch]);
  const { data: fetchedAdminsResponse, isLoading, isFetching } = useGetAdminsSimple(
    {
      limit: PAGE_SIZE,
      offset,
      ...adminSearch ? { search: adminSearch } : {}
    },
    {
      query: {
        enabled: open
      }
    }
  );
  reactExports.useEffect(() => {
    if (!fetchedAdminsResponse) return;
    const fetchedAdmins = (fetchedAdminsResponse.admins || []).filter((admin) => admin.username !== "system");
    setAdmins((prev) => {
      const merged = offset === 0 ? fetchedAdmins : [...prev, ...fetchedAdmins];
      const byUsername = /* @__PURE__ */ new Map();
      merged.forEach((admin) => {
        byUsername.set(admin.username, admin);
      });
      return Array.from(byUsername.values());
    });
    setHasMore(fetchedAdmins.length === PAGE_SIZE);
    setIsLoadingMore(false);
  }, [fetchedAdminsResponse, offset]);
  const handleScroll = reactExports.useCallback(() => {
    if (!listRef.current || isLoadingMore || isFetching || !hasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollHeight - scrollTop - clientHeight < 90) {
      setIsLoadingMore(true);
      setOffset((prev) => prev + PAGE_SIZE);
    }
  }, [hasMore, isFetching, isLoadingMore]);
  reactExports.useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const selectedAdmin = reactExports.useMemo(() => admins.find((admin) => admin.username === value), [admins, value]);
  const triggerLabel = value === "all" ? t("statistics.adminFilterAll") : selectedAdmin?.username || value;
  const showInitialAdminsLoading = open && admins.length === 0 && isFetching;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("w-full", className), dir, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "h-8 w-full min-w-0 justify-between px-2 text-xs font-medium transition-colors hover:bg-muted/50 sm:px-3 sm:text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2", dir === "rtl" ? "flex-row-reverse" : "flex-row"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-muted text-xs font-medium", children: value === "all" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { className: "h-3 w-3" }) : triggerLabel.charAt(0).toUpperCase() }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: triggerLabel }),
        value !== "all" && selectedAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-3 w-3 text-primary" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "ml-1 h-3 w-3 flex-shrink-0 text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[min(92vw,20rem)] p-1 sm:w-[20rem]", sideOffset: 4, align: dir === "rtl" ? "end" : "start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: t("search", { defaultValue: "Search" }), onValueChange: setAdminSearchInput, className: "h-8 text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { ref: listRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: showInitialAdminsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 py-3 text-xs text-muted-foreground sm:py-4 sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("loading", { defaultValue: "Loading..." }) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-3 text-center text-xs text-muted-foreground sm:py-4 sm:text-sm", children: t("noAdminsFound", { defaultValue: "No admins found" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CommandItem,
          {
            value: "all",
            onSelect: () => {
              onValueChange("all");
              onAdminSelect?.(null);
              setOpen(false);
            },
            className: cn("flex min-w-0 items-center gap-2 px-2 py-1.5 text-xs sm:text-sm", dir === "rtl" ? "flex-row-reverse" : "flex-row"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-xs font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { className: "h-3 w-3" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: t("statistics.adminFilterAll") }),
              value === "all" && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary" })
            ]
          }
        ),
        admins.map((admin) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CommandItem,
          {
            value: admin.username,
            onSelect: () => {
              onValueChange(admin.username);
              onAdminSelect?.({
                ...admin,
                is_sudo: false
              });
              setOpen(false);
            },
            className: cn("flex min-w-0 items-center gap-2 px-2 py-1.5 text-xs sm:text-sm", dir === "rtl" ? "flex-row-reverse" : "flex-row"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-muted text-xs font-medium", children: admin.username.charAt(0).toUpperCase() }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: admin.username }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-shrink-0 items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-3 w-3 text-primary" }),
                value === admin.username && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary" })
              ] })
            ]
          },
          admin.username
        )),
        (isLoadingMore || !showInitialAdminsLoading && (isLoading || isFetching)) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin text-muted-foreground" }) })
      ] })
    ] }) })
  ] }) });
}
export {
  AdminFilterCombobox as A,
  CircularProgress as C,
  MemoryStick as M
};
//# sourceMappingURL=admin-filter-combobox-DPZ-nZVL.js.map
