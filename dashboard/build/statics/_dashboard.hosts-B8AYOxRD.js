import { j as jsxRuntimeExports, r as reactExports } from "./react-D6OUsQqF.js";
import { C as Card, a as CardContent } from "./card-5ZQOfa_i.js";
import { f as createLucideIcon, P as ProxyHostSecurity, Q as UserStatus, a as useDirDetection, c as cn, R as modifyHost, t as toast, T as removeHost, O as useGetInbounds, q as queryClient, V as createHost, W as modifyHosts, Y as getHosts } from "./index-C_i3x-Gf.js";
import { o as objectType, b as booleanType, c as nativeEnumType, a as arrayType, s as stringType, u as useForm } from "./types-CANcSf0A.js";
import { C as ChevronsLeftRightEllipsis, a as HostModal, h as hostFormDefaultValues, H as HostFormSchema } from "./host-form-Bt-x8Gt5.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { B as Button } from "./button-BOH66nN-.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, f as FormDescription, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { X } from "./x-C6aLLO-Y.js";
import { V as ViewToggle, u as usePersistedViewMode, L as ListGenerator } from "./use-persisted-view-mode-LYo0S7-V.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { S as Search } from "./search-DGfkalst.js";
import { F as Filter } from "./filter-Cj-9RYXq.js";
import { R as RefreshCw } from "./refresh-cw-BfHhC0kO.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, e as DropdownMenuSeparator } from "./dropdown-menu-B4MHnVyu.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-Cj-SnnWR.js";
import { P as Power } from "./power-DV897bjg.js";
import { P as Pencil } from "./pencil-CGe897XJ.js";
import { C as Copy } from "./copy-yeuAYUwv.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import { S as Settings } from "./settings-ByQKCi6u.js";
import { u as useSortable, C as CSS, G as GripVertical, a as useSensors, b as useSensor, D as DndContext, c as closestCenter, S as SortableContext, r as rectSortingStrategy, d as arrayMove, s as sortableKeyboardCoordinates, K as KeyboardSensor, P as PointerSensor } from "./sortable.esm-BR-nak9Z.js";
import { a } from "./zod-JrdXrq0M.js";
import { P as PageHeader } from "./page-header-C5rLxqcj.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { u as useQuery, c as useQueryClient } from "./react-query-DMC2nZO-.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
import "./accordion-CvI_xa9s.js";
import "./radix-3Azqn93X.js";
import "./chevron-down-CYTM5oAI.js";
import "./switch-BtwGcSyQ.js";
import "./tabs-GailCAaU.js";
import "./variables-popover-YfVYY7Ed.js";
import "./use-clipboard-C58gzIEw.js";
import "./info-DijVEiOM.js";
import "./lock-D6SFqMLT.js";
import "./network-BFIxiW-9.js";
import "./check-ayw17ogi.js";
import "./label-D6GrbpFd.js";
import "./toggle-group-DO2v6P71.js";
import "./skeleton-BQXgKF1e.js";
import "./circle-CMQZw6eB.js";
import "./chevron-right-DkXHvvEa.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
const CloudCog = createLucideIcon("CloudCog", [
  ["circle", { cx: "12", cy: "17", r: "3", key: "1spfwm" }],
  ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2", key: "zaobp" }],
  ["path", { d: "m15.7 18.4-.9-.3", key: "4qxpbn" }],
  ["path", { d: "m9.2 15.9-.9-.3", key: "17q7o2" }],
  ["path", { d: "m10.6 20.7.3-.9", key: "1pf4s2" }],
  ["path", { d: "m13.1 14.2.3-.9", key: "1mnuqm" }],
  ["path", { d: "m13.6 20.7-.4-1", key: "1jpd1m" }],
  ["path", { d: "m10.8 14.3-.4-1", key: "17ugyy" }],
  ["path", { d: "m8.3 18.6 1-.4", key: "s42vdx" }],
  ["path", { d: "m14.7 15.8 1-.4", key: "2wizun" }]
]);
const hostAdvanceSearchFormSchema = objectType({
  status: arrayType(nativeEnumType(UserStatus)).optional(),
  inbound_tags: arrayType(stringType()).optional(),
  security: nativeEnumType(ProxyHostSecurity).optional().nullable(),
  is_disabled: booleanType().optional().nullable()
});
const statusOptions = [
  { value: UserStatus.active, label: "hostsDialog.status.active" },
  { value: UserStatus.disabled, label: "hostsDialog.status.disabled" },
  { value: UserStatus.limited, label: "hostsDialog.status.limited" },
  { value: UserStatus.expired, label: "hostsDialog.status.expired" },
  { value: UserStatus.on_hold, label: "hostsDialog.status.onHold" }
];
const securityOptions = [
  { value: ProxyHostSecurity.inbound_default, label: "hostsDialog.inboundDefault" },
  { value: ProxyHostSecurity.tls, label: "tls" },
  { value: ProxyHostSecurity.none, label: "none" }
];
function HostAdvanceSearchModal({ isDialogOpen, onOpenChange, form, onSubmit, inbounds, isLoadingInbounds }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "flex h-auto max-w-[650px] flex-col justify-start", onOpenAutoFocus: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: dir === "rtl" ? "text-right" : "text-left", dir, children: t("advanceSearch.title") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex h-full flex-col justify-between space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mr-4 max-h-[80dvh] overflow-y-auto px-2 pr-4 sm:max-h-[75dvh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-1 flex-col items-start gap-4 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "status",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hosts.filters.userStatus", { defaultValue: "User Status Rules" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { children: t("hosts.filters.userStatusDescription", {
                defaultValue: "Matches hosts by configured user statuses (active, on-hold, limited, etc)."
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex flex-wrap gap-2", children: field.value.map((status) => {
                  const option = statusOptions.find((item) => item.value === status);
                  if (!option) return null;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1", children: [
                    t(option.label),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      X,
                      {
                        className: "h-3 w-3 cursor-pointer",
                        onClick: () => {
                          field.onChange(field.value?.filter((item) => item !== status));
                        }
                      }
                    )
                  ] }, status);
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: "",
                    onValueChange: (value) => {
                      if (!value) return;
                      const current = field.value || [];
                      if (!current.includes(value)) {
                        field.onChange([...current, value]);
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { dir, className: "w-full gap-2 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectStatus") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { dir, className: "bg-background", children: statusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: option.value, className: "flex cursor-pointer items-center gap-2 px-4 py-2 focus:bg-accent", disabled: field.value?.includes(option.value), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value?.includes(option.value), className: "h-4 w-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: t(option.label) })
                      ] }) }, option.value)) })
                    ]
                  }
                ),
                field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => field.onChange([]), className: "mt-2 w-full", children: t("hostsDialog.clearAllStatuses") })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "inbound_tags",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("inbound") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex flex-wrap gap-2", children: field.value.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1", children: [
                  tag,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    X,
                    {
                      className: "h-3 w-3 cursor-pointer",
                      onClick: () => {
                        field.onChange(field.value?.filter((item) => item !== tag));
                      }
                    }
                  )
                ] }, tag)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: "",
                    onValueChange: (value) => {
                      if (!value) return;
                      const current = field.value || [];
                      if (!current.includes(value)) {
                        field.onChange([...current, value]);
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectInbound") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { dir, className: "bg-background", children: isLoadingInbounds ? /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__loading_inbounds__", disabled: true, children: t("loading", { defaultValue: "Loading..." }) }) : inbounds.length > 0 ? inbounds.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: tag, disabled: field.value?.includes(tag), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value?.includes(tag), className: "h-4 w-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: tag })
                      ] }) }, tag)) : /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__no_inbounds__", disabled: true, children: t("noInboundsFound", { defaultValue: "No inbounds found" }) }) })
                    ]
                  }
                ),
                field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => field.onChange([]), className: "mt-2 w-full", children: t("hosts.filters.clearAllInbounds", { defaultValue: "Clear all inbounds" }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "security",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.security", { defaultValue: "Security" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: field.value || "__all__",
                  onValueChange: (value) => {
                    field.onChange(value === "__all__" ? void 0 : value);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.security", { defaultValue: "Security" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { dir, className: "bg-background", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__all__", children: t("all", { defaultValue: "All" }) }),
                      securityOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: option.value, children: t(option.label, { defaultValue: option.label.toUpperCase() }) }, option.value))
                    ] })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "is_disabled",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hosts.filters.hostState", { defaultValue: "Host State" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { children: t("hosts.filters.hostStateDescription", {
                defaultValue: "Filters whether the host itself is enabled or disabled."
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: field.value === void 0 || field.value === null ? "__all__" : field.value ? "disabled" : "enabled",
                  onValueChange: (value) => {
                    if (value === "__all__") {
                      field.onChange(void 0);
                    } else {
                      field.onChange(value === "disabled");
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hosts.filters.hostState", { defaultValue: "Host State" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { dir, className: "bg-background", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__all__", children: t("all", { defaultValue: "All" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "enabled", children: t("hosts.filters.enabledHosts", { defaultValue: "Enabled Hosts" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "disabled", children: t("hosts.filters.disabledHosts", { defaultValue: "Disabled Hosts" }) })
                    ] })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderButton, { type: "submit", children: t("apply") })
      ] })
    ] }) })
  ] }) });
}
function HostFilters({ filters, onFilterChange, onRefresh, isRefreshing, advanceSearchOnOpen, onClearAdvanceSearch, viewMode, onViewModeChange }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const search = filters.search || "";
  const handleSearchChange = (e) => {
    const value = e.target.value;
    onFilterChange({
      search: value.trim() ? value : void 0
    });
  };
  const clearSearch = () => {
    onFilterChange({
      search: void 0
    });
  };
  const handleManualRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
  };
  const handleOpenAdvanceSearch = () => {
    advanceSearchOnOpen(true);
  };
  const hasActiveAdvanceFilters = () => {
    return Boolean(filters.status && filters.status.length > 0 || filters.inbound_tags && filters.inbound_tags.length > 0 || filters.security || typeof filters.is_disabled === "boolean");
  };
  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.status && filters.status.length > 0) count++;
    if (filters.inbound_tags && filters.inbound_tags.length > 0) count++;
    if (filters.security) count++;
    if (typeof filters.is_disabled === "boolean") count++;
    return count;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "flex items-center gap-2 md:gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-0 flex-1 md:w-[calc(100%/3-10px)] md:flex-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: cn("absolute", dir === "rtl" ? "right-2" : "left-2", "top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 text-input-placeholder") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("search"), value: search, onChange: handleSearchChange, className: "pl-8 pr-10" }),
      search && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearSearch, className: cn("absolute", dir === "rtl" ? "left-2" : "right-2", "top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-shrink-0 items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "icon-md", variant: "ghost", className: "relative flex h-9 w-9 items-center justify-center rounded-lg border", onClick: handleOpenAdvanceSearch, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "h-4 w-4" }),
          hasActiveAdvanceFilters() && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary p-0 text-[10.5px] text-primary-foreground", children: getActiveFiltersCount() })
        ] }),
        hasActiveAdvanceFilters() && onClearAdvanceSearch && /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: cn("h-9 w-9 p-0", dir === "rtl" ? "rounded-r-none border-r-0" : "rounded-l-none border-l-0"), onClick: onClearAdvanceSearch, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-auto p-2", side: dir === "rtl" ? "left" : "right", align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("clearAllFilters", { defaultValue: "Clear All Filters" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon-md",
          onClick: handleManualRefresh,
          variant: "ghost",
          className: cn("relative flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200", isRefreshing && "opacity-70"),
          "aria-label": t("autoRefresh.refreshNow"),
          title: t("autoRefresh.refreshNow"),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", isRefreshing && "animate-spin") })
        }
      ),
      viewMode && onViewModeChange && /* @__PURE__ */ jsxRuntimeExports.jsx(ViewToggle, { value: viewMode, onChange: onViewModeChange })
    ] })
  ] });
}
const DeleteAlertDialog = ({ host, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("deleteHost.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("deleteHost.prompt", { name: host.remark ?? "" }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { variant: "destructive", onClick: onConfirm, children: t("delete") })
    ] })
  ] }) });
};
function HostActionsMenu({ host, onEdit, onDuplicate, onDataChanged, className }) {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const { t } = useTranslation();
  useDirDetection();
  const handleToggleStatus = async () => {
    if (!host.id) return;
    try {
      const { id, ...hostData } = host;
      let transformedMuxSettings = hostData.mux_settings;
      if (hostData.mux_settings?.xray) {
        transformedMuxSettings = {
          ...hostData.mux_settings,
          xray: {
            enabled: hostData.mux_settings.xray.enabled,
            concurrency: hostData.mux_settings.xray.concurrency,
            xudp_concurrency: hostData.mux_settings.xray.xudpConcurrency ?? void 0,
            xudp_proxy_udp_443: hostData.mux_settings.xray.xudpProxyUDP443 ?? void 0
          }
        };
      }
      let transformedTransportSettings = hostData.transport_settings;
      if (hostData.transport_settings?.xhttp_settings?.xmux) {
        transformedTransportSettings = {
          ...hostData.transport_settings,
          xhttp_settings: {
            ...hostData.transport_settings.xhttp_settings,
            xmux: {
              max_concurrency: hostData.transport_settings.xhttp_settings.xmux.maxConcurrency ?? void 0,
              max_connections: hostData.transport_settings.xhttp_settings.xmux.maxConnections ?? void 0,
              c_max_reuse_times: hostData.transport_settings.xhttp_settings.xmux.cMaxReuseTimes ?? void 0,
              h_max_reusable_secs: hostData.transport_settings.xhttp_settings.xmux.hMaxReusableSecs ?? void 0,
              h_max_request_times: hostData.transport_settings.xhttp_settings.xmux.hMaxRequestTimes ?? void 0,
              h_keep_alive_period: hostData.transport_settings.xhttp_settings.xmux.hKeepAlivePeriod ?? void 0
            }
          }
        };
      }
      await modifyHost(host.id, {
        ...hostData,
        mux_settings: transformedMuxSettings,
        transport_settings: transformedTransportSettings,
        is_disabled: !host.is_disabled
      });
      toast.success(
        t(host.is_disabled ? "host.enableSuccess" : "host.disableSuccess", {
          name: host.remark ?? "",
          defaultValue: `Host "{name}" has been ${host.is_disabled ? "enabled" : "disabled"} successfully`
        })
      );
      if (onDataChanged) {
        onDataChanged();
      }
    } catch (error) {
      toast.error(
        t(host.is_disabled ? "host.enableFailed" : "host.disableFailed", {
          name: host.remark ?? "",
          defaultValue: `Failed to ${host.is_disabled ? "enable" : "disable"} host "{name}"`
        })
      );
    }
  };
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    setDeleteDialogOpen(true);
  };
  const handleConfirmDelete = async () => {
    if (!host.id) return;
    try {
      await removeHost(host.id);
      toast.success(
        t("deleteHost.deleteSuccess", {
          name: host.remark ?? "",
          defaultValue: 'Host "{name}" removed successfully'
        })
      );
      setDeleteDialogOpen(false);
      if (onDataChanged) {
        onDataChanged();
      }
    } catch (error) {
      toast.error(
        t("deleteHost.deleteFailed", {
          name: host.remark ?? "",
          defaultValue: 'Failed to remove host "{name}"'
        })
      );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(className), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              handleToggleStatus();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "mr-2 h-4 w-4" }),
              host?.is_disabled ? t("enable") : t("disable")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onEdit(host);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-2 h-4 w-4" }),
              t("edit")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onDuplicate(host);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "mr-2 h-4 w-4" }),
              t("duplicate")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: handleDeleteClick, className: "text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
          t("delete")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAlertDialog, { host, isOpen: isDeleteDialogOpen, onClose: () => setDeleteDialogOpen(false), onConfirm: handleConfirmDelete })
  ] });
}
const useHostsListColumns = ({ onEdit, onDuplicate, onDataChanged }) => {
  const { t } = useTranslation();
  return reactExports.useMemo(
    () => [
      {
        id: "remark",
        header: t("name"),
        width: "3fr",
        cell: (host) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-2 w-2 shrink-0 rounded-full", host.is_disabled ? "bg-red-500" : "bg-green-500") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: host.remark ?? "" })
        ] })
      },
      {
        id: "address",
        header: t("address"),
        width: "1fr",
        cell: (host) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", className: "truncate font-mono text-xs text-muted-foreground", children: [
          Array.isArray(host.address) ? host.address[0] || "" : host.address ?? "",
          ":",
          host.port === null ? /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "inline h-3 w-3" }) : host.port
        ] }),
        hideOnMobile: true
      },
      {
        id: "inbound",
        header: t("inbound"),
        width: "1fr",
        cell: (host) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-xs text-muted-foreground", children: host.inbound_tag ?? "" }),
        hideOnMobile: true
      },
      {
        id: "actions",
        header: "",
        width: "64px",
        align: "end",
        hideOnMobile: true,
        cell: (host) => /* @__PURE__ */ jsxRuntimeExports.jsx(HostActionsMenu, { host, onEdit, onDuplicate, onDataChanged })
      }
    ],
    [t, onEdit, onDuplicate, onDataChanged]
  );
};
function SortableHost({ host, onEdit, onDuplicate, onDataChanged, disabled = false }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  if (!host.id) {
    return null;
  }
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: host.id,
    disabled
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 2 : 1,
    opacity: isDragging ? 0.8 : 1
  };
  const cursor = isDragging ? "grabbing" : "grab";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setNodeRef, className: "cursor-default", style, ...attributes, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group relative h-full cursor-pointer p-4 transition-colors hover:bg-accent", onClick: () => onEdit(host), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        style: { cursor: disabled ? "not-allowed" : cursor },
        className: cn("touch-none transition-opacity", disabled ? "cursor-not-allowed opacity-30" : "opacity-50 group-hover:opacity-100"),
        ...disabled ? {} : listeners,
        disabled,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Drag to reorder" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("min-h-2 min-w-2 rounded-full", host.is_disabled ? "bg-red-500" : "bg-green-500") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-medium", children: host.remark ?? "" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1", dir === "rtl" && "justify-start"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsLeftRightEllipsis, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: "truncate text-sm text-muted-foreground", children: [
          Array.isArray(host.address) ? host.address[0] || "" : host.address ?? "",
          ":",
          host.port === null ? /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "inline h-3 w-3" }) : host.port
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 truncate text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CloudCog, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          t("inbound"),
          ": "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: host.inbound_tag ?? "" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HostActionsMenu, { host, onEdit, onDuplicate, onDataChanged })
  ] }) }) });
}
function HostsList({ data, onAddHost, isDialogOpen, onSubmit, editingHost, setEditingHost, onRefresh, isRefreshing: isRefreshingProp }) {
  const [hosts, setHosts] = reactExports.useState(data);
  const [isUpdatingPriorities, setIsUpdatingPriorities] = reactExports.useState(false);
  const [filters, setFilters] = reactExports.useState({});
  const [isAdvanceSearchOpen, setIsAdvanceSearchOpen] = reactExports.useState(false);
  const [viewMode, setViewMode] = usePersistedViewMode("view-mode:hosts");
  const [isManualRefreshing, setIsManualRefreshing] = reactExports.useState(false);
  const { t } = useTranslation();
  reactExports.useEffect(() => {
    if (data !== void 0) {
      setHosts(data);
    }
  }, [data]);
  const form = useForm({
    resolver: a(HostFormSchema),
    defaultValues: hostFormDefaultValues
  });
  const advanceSearchForm = useForm({
    resolver: a(hostAdvanceSearchFormSchema),
    defaultValues: {
      status: filters.status || [],
      inbound_tags: filters.inbound_tags || [],
      security: filters.security,
      is_disabled: filters.is_disabled
    }
  });
  const { data: inbounds = [], isLoading: isLoadingInbounds } = useGetInbounds();
  const refreshHostsData = () => {
    return queryClient.invalidateQueries({
      queryKey: ["getGetHostsQueryKey"],
      exact: true,
      // Only invalidate this exact query
      refetchType: "active"
      // Only refetch if the query is currently being rendered
    });
  };
  const handleRefreshClick = async () => {
    if (onRefresh) {
      await onRefresh();
      return;
    }
    setIsManualRefreshing(true);
    try {
      await refreshHostsData();
    } finally {
      setIsManualRefreshing(false);
    }
  };
  const isRefreshing = isRefreshingProp ?? isManualRefreshing;
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters
    }));
  };
  const handleAdvanceSearchSubmit = (values) => {
    setFilters((prev) => ({
      ...prev,
      status: values.status && values.status.length > 0 ? values.status : void 0,
      inbound_tags: values.inbound_tags && values.inbound_tags.length > 0 ? values.inbound_tags : void 0,
      security: values.security || void 0,
      is_disabled: values.is_disabled ?? void 0
    }));
    setIsAdvanceSearchOpen(false);
  };
  const handleClearAdvanceSearch = () => {
    advanceSearchForm.reset({
      status: [],
      inbound_tags: [],
      security: void 0,
      is_disabled: void 0
    });
    setFilters((prev) => ({
      ...prev,
      status: void 0,
      inbound_tags: void 0,
      security: void 0,
      is_disabled: void 0
    }));
  };
  const handleAdvanceSearchOpen = (open) => {
    if (open) {
      advanceSearchForm.reset({
        status: filters.status || [],
        inbound_tags: filters.inbound_tags || [],
        security: filters.security,
        is_disabled: filters.is_disabled
      });
    }
    setIsAdvanceSearchOpen(open);
  };
  const handleEdit = (host) => {
    const formData = {
      remark: host.remark || "",
      address: Array.isArray(host.address) ? host.address : host.address ? [host.address] : [],
      port: host.port ? Number(host.port) : void 0,
      inbound_tag: host.inbound_tag || "",
      status: host.status || [],
      host: Array.isArray(host.host) ? host.host : host.host ? [host.host] : [],
      sni: Array.isArray(host.sni) ? host.sni : host.sni ? [host.sni] : [],
      path: host.path || "",
      http_headers: host.http_headers || {},
      security: host.security || "inbound_default",
      alpn: Array.isArray(host.alpn) ? host.alpn : host.alpn ? [host.alpn] : [],
      fingerprint: host.fingerprint || "",
      allowinsecure: host.allowinsecure || false,
      random_user_agent: host.random_user_agent || false,
      use_sni_as_host: host.use_sni_as_host || false,
      vless_route: host.vless_route || "",
      priority: host.priority || 0,
      is_disabled: host.is_disabled || false,
      ech_config_list: host.ech_config_list || void 0,
      pinned_peer_cert_sha256: host.pinned_peer_cert_sha256 || void 0,
      verify_peer_cert_by_name: host.verify_peer_cert_by_name || [],
      fragment_settings: host.fragment_settings ? {
        xray: host.fragment_settings.xray ?? void 0,
        sing_box: host.fragment_settings.sing_box ?? void 0
      } : void 0,
      noise_settings: host.noise_settings ? {
        xray: host.noise_settings.xray?.map((noise) => ({
          type: noise.type,
          packet: noise.packet,
          delay: noise.delay,
          apply_to: noise.apply_to || "ip"
        })) ?? void 0
      } : void 0,
      mux_settings: host.mux_settings ? {
        xray: host.mux_settings.xray ? {
          enabled: host.mux_settings.xray.enabled ?? false,
          concurrency: host.mux_settings.xray.concurrency ?? null,
          xudp_concurrency: host.mux_settings.xray.xudpConcurrency ?? null,
          xudp_proxy_443: host.mux_settings.xray.xudpProxyUDP443 ?? "reject"
        } : void 0,
        sing_box: host.mux_settings.sing_box ? {
          enable: host.mux_settings.sing_box.enable ?? false,
          protocol: host.mux_settings.sing_box.protocol ?? "smux",
          max_connections: host.mux_settings.sing_box.max_connections ?? null,
          max_streams: host.mux_settings.sing_box.max_streams ?? null,
          min_streams: host.mux_settings.sing_box.min_streams ?? null,
          padding: host.mux_settings.sing_box.padding ?? null,
          brutal: host.mux_settings.sing_box.brutal ?? null
        } : void 0,
        clash: host.mux_settings.clash ? {
          enable: host.mux_settings.clash.enable ?? false,
          protocol: host.mux_settings.clash.protocol ?? "smux",
          max_connections: host.mux_settings.clash.max_connections ?? null,
          max_streams: host.mux_settings.clash.max_streams ?? null,
          min_streams: host.mux_settings.clash.min_streams ?? null,
          padding: host.mux_settings.clash.padding ?? null,
          brutal: host.mux_settings.clash.brutal ?? null,
          statistic: host.mux_settings.clash.statistic ?? null,
          only_tcp: host.mux_settings.clash.only_tcp ?? null
        } : void 0
      } : void 0,
      transport_settings: host.transport_settings ? {
        xhttp_settings: host.transport_settings.xhttp_settings ? {
          mode: host.transport_settings.xhttp_settings.mode ?? void 0,
          no_grpc_header: host.transport_settings.xhttp_settings.no_grpc_header === null ? void 0 : !!host.transport_settings.xhttp_settings.no_grpc_header,
          x_padding_bytes: host.transport_settings.xhttp_settings.x_padding_bytes ?? void 0,
          x_padding_obfs_mode: host.transport_settings.xhttp_settings.x_padding_obfs_mode === null ? void 0 : !!host.transport_settings.xhttp_settings.x_padding_obfs_mode,
          x_padding_key: host.transport_settings.xhttp_settings.x_padding_key ?? void 0,
          x_padding_header: host.transport_settings.xhttp_settings.x_padding_header ?? void 0,
          x_padding_placement: host.transport_settings.xhttp_settings.x_padding_placement ?? void 0,
          x_padding_method: host.transport_settings.xhttp_settings.x_padding_method ?? void 0,
          uplink_http_method: host.transport_settings.xhttp_settings.uplink_http_method ?? void 0,
          session_placement: host.transport_settings.xhttp_settings.session_placement ?? void 0,
          session_key: host.transport_settings.xhttp_settings.session_key ?? void 0,
          seq_placement: host.transport_settings.xhttp_settings.seq_placement ?? void 0,
          seq_key: host.transport_settings.xhttp_settings.seq_key ?? void 0,
          uplink_data_placement: host.transport_settings.xhttp_settings.uplink_data_placement ?? void 0,
          uplink_data_key: host.transport_settings.xhttp_settings.uplink_data_key ?? void 0,
          uplink_chunk_size: host.transport_settings.xhttp_settings.uplink_chunk_size ?? void 0,
          sc_max_each_post_bytes: host.transport_settings.xhttp_settings.sc_max_each_post_bytes ?? void 0,
          sc_min_posts_interval_ms: host.transport_settings.xhttp_settings.sc_min_posts_interval_ms ?? void 0,
          download_settings: host.transport_settings.xhttp_settings.download_settings ?? void 0,
          xmux: host.transport_settings.xhttp_settings.xmux ? {
            max_concurrency: host.transport_settings.xhttp_settings.xmux.maxConcurrency ?? void 0,
            max_connections: host.transport_settings.xhttp_settings.xmux.maxConnections ?? void 0,
            c_max_reuse_times: host.transport_settings.xhttp_settings.xmux.cMaxReuseTimes ?? void 0,
            h_max_reusable_secs: host.transport_settings.xhttp_settings.xmux.hMaxReusableSecs ?? void 0,
            h_max_request_times: host.transport_settings.xhttp_settings.xmux.hMaxRequestTimes ?? void 0,
            h_keep_alive_period: host.transport_settings.xhttp_settings.xmux.hKeepAlivePeriod ?? void 0
          } : void 0
        } : void 0,
        grpc_settings: host.transport_settings.grpc_settings ? {
          multi_mode: host.transport_settings.grpc_settings.multi_mode === null ? void 0 : !!host.transport_settings.grpc_settings.multi_mode,
          idle_timeout: host.transport_settings.grpc_settings.idle_timeout ?? void 0,
          health_check_timeout: host.transport_settings.grpc_settings.health_check_timeout ?? void 0,
          permit_without_stream: host.transport_settings.grpc_settings.permit_without_stream ?? void 0,
          initial_windows_size: host.transport_settings.grpc_settings.initial_windows_size ?? void 0
        } : void 0,
        kcp_settings: host.transport_settings.kcp_settings ? {
          mtu: host.transport_settings.kcp_settings.mtu ?? void 0,
          tti: host.transport_settings.kcp_settings.tti ?? void 0,
          uplink_capacity: host.transport_settings.kcp_settings.uplink_capacity ?? void 0,
          downlink_capacity: host.transport_settings.kcp_settings.downlink_capacity ?? void 0,
          congestion: host.transport_settings.kcp_settings.congestion === null ? void 0 : !!host.transport_settings.kcp_settings.congestion,
          read_buffer_size: host.transport_settings.kcp_settings.read_buffer_size ?? void 0,
          write_buffer_size: host.transport_settings.kcp_settings.write_buffer_size ?? void 0
        } : void 0,
        tcp_settings: host.transport_settings.tcp_settings ? {
          header: host.transport_settings.tcp_settings.header ?? void 0,
          request: host.transport_settings.tcp_settings.request ? {
            version: host.transport_settings.tcp_settings.request.version ?? void 0,
            method: host.transport_settings.tcp_settings.request.method ?? void 0,
            headers: host.transport_settings.tcp_settings.request.headers ?? void 0
          } : void 0,
          response: host.transport_settings.tcp_settings.response ? {
            version: host.transport_settings.tcp_settings.response.version ?? void 0,
            status: host.transport_settings.tcp_settings.response.status ?? void 0,
            reason: host.transport_settings.tcp_settings.response.reason ?? void 0,
            headers: host.transport_settings.tcp_settings.response.headers ?? void 0
          } : void 0
        } : void 0,
        websocket_settings: host.transport_settings.websocket_settings ? {
          heartbeatPeriod: host.transport_settings.websocket_settings.heartbeatPeriod ?? void 0
        } : void 0
      } : void 0
    };
    form.reset(formData);
    setEditingHost(host);
    onAddHost(true);
  };
  const handleDuplicate = async (host) => {
    if (!host) return;
    try {
      const newHost = {
        remark: `${host.remark || ""} (copy)`,
        address: host.address || [],
        port: host.port,
        inbound_tag: host.inbound_tag || "",
        status: host.status || [],
        host: host.host || [],
        sni: host.sni || [],
        path: host.path || "",
        security: host.security || "inbound_default",
        alpn: !host.alpn || host.alpn.length === 0 ? void 0 : host.alpn,
        fingerprint: host.fingerprint === "" ? void 0 : host.fingerprint,
        allowinsecure: host.allowinsecure || false,
        is_disabled: host.is_disabled || false,
        random_user_agent: host.random_user_agent || false,
        use_sni_as_host: host.use_sni_as_host || false,
        vless_route: host.vless_route || void 0,
        priority: host.priority ?? 0,
        // Use the same priority as the original host
        ech_config_list: host.ech_config_list,
        pinned_peer_cert_sha256: host.pinned_peer_cert_sha256 || void 0,
        verify_peer_cert_by_name: host.verify_peer_cert_by_name || void 0,
        fragment_settings: host.fragment_settings,
        noise_settings: host.noise_settings,
        mux_settings: host.mux_settings,
        transport_settings: host.transport_settings,
        // Type cast needed due to Output/Input mismatch
        http_headers: host.http_headers || {}
      };
      await createHost(newHost);
      toast.success(t("host.duplicateSuccess", { name: host.remark || "" }));
      refreshHostsData();
    } catch (error) {
      toast.error(t("host.duplicateFailed", { name: host.remark || "" }));
    }
  };
  const handleSubmit = async (data2) => {
    try {
      const response = await onSubmit(data2);
      if (response.status === 200) {
        if (editingHost?.id) {
          toast.success(t("hostsDialog.editSuccess", { name: data2.remark }));
        } else {
          toast.success(t("hostsDialog.createSuccess", { name: data2.remark }));
        }
        refreshHostsData();
      }
      return response;
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const handleDragEnd = async (event) => {
    const { active, over } = event;
    const hasSearchQuery = Boolean(filters.search?.trim());
    const hasActiveFilters = Boolean(filters.status && filters.status.length > 0 || filters.inbound_tags && filters.inbound_tags.length > 0 || filters.security || typeof filters.is_disabled === "boolean");
    if (hasSearchQuery || hasActiveFilters) return;
    if (!over || active.id === over.id || !hosts) return;
    const oldIndex = hosts.findIndex((item) => item.id === active.id);
    const newIndex = hosts.findIndex((item) => item.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const reorderedHosts = arrayMove(hosts, oldIndex, newIndex);
    const updatedHosts = reorderedHosts.map((host, index) => ({
      ...host,
      priority: index
    }));
    setHosts(updatedHosts);
    setIsUpdatingPriorities(true);
    try {
      const hostsToUpdate = updatedHosts.map((host, index) => ({
        id: host.id,
        remark: host.remark || "",
        address: host.address || [],
        port: host.port,
        inbound_tag: host.inbound_tag || "",
        status: host.status || [],
        host: host.host || [],
        sni: host.sni || [],
        path: host.path || "",
        security: host.security || "inbound_default",
        alpn: host.alpn || [],
        fingerprint: host.fingerprint || "",
        allowinsecure: host.allowinsecure || false,
        is_disabled: host.is_disabled || false,
        random_user_agent: host.random_user_agent || false,
        use_sni_as_host: host.use_sni_as_host || false,
        vless_route: host.vless_route || void 0,
        priority: index,
        // New priority based on position
        ech_config_list: host.ech_config_list,
        pinned_peer_cert_sha256: host.pinned_peer_cert_sha256 || void 0,
        verify_peer_cert_by_name: host.verify_peer_cert_by_name || void 0,
        fragment_settings: host.fragment_settings,
        noise_settings: host.noise_settings,
        mux_settings: host.mux_settings ? {
          xray: host.mux_settings.xray ? {
            enabled: host.mux_settings.xray.enabled ?? false,
            concurrency: host.mux_settings.xray.concurrency ?? null,
            xudp_concurrency: host.mux_settings.xray.xudpConcurrency ?? null,
            xudp_proxy_443: host.mux_settings.xray.xudpProxyUDP443 ?? "reject"
          } : void 0,
          sing_box: host.mux_settings.sing_box ? {
            enable: host.mux_settings.sing_box.enable ?? false,
            protocol: host.mux_settings.sing_box.protocol ?? "smux",
            max_connections: host.mux_settings.sing_box.max_connections ?? null,
            max_streams: host.mux_settings.sing_box.max_streams ?? null,
            min_streams: host.mux_settings.sing_box.min_streams ?? null,
            padding: host.mux_settings.sing_box.padding ?? void 0,
            brutal: host.mux_settings.sing_box.brutal ?? null
          } : void 0,
          clash: host.mux_settings.clash ? {
            enable: host.mux_settings.clash.enable ?? false,
            protocol: host.mux_settings.clash.protocol ?? "smux",
            max_connections: host.mux_settings.clash.max_connections ?? null,
            max_streams: host.mux_settings.clash.max_streams ?? null,
            min_streams: host.mux_settings.clash.min_streams ?? null,
            padding: host.mux_settings.clash.padding ?? void 0,
            brutal: host.mux_settings.clash.brutal ?? null,
            statistic: host.mux_settings.clash.statistic ?? void 0,
            only_tcp: host.mux_settings.clash.only_tcp ?? void 0
          } : void 0
        } : void 0,
        transport_settings: host.transport_settings ? {
          xhttp_settings: host.transport_settings.xhttp_settings ? {
            mode: host.transport_settings.xhttp_settings.mode ?? void 0,
            no_grpc_header: host.transport_settings.xhttp_settings.no_grpc_header === null ? void 0 : !!host.transport_settings.xhttp_settings.no_grpc_header,
            x_padding_bytes: host.transport_settings.xhttp_settings.x_padding_bytes ?? void 0,
            x_padding_obfs_mode: host.transport_settings.xhttp_settings.x_padding_obfs_mode === null ? void 0 : !!host.transport_settings.xhttp_settings.x_padding_obfs_mode,
            x_padding_key: host.transport_settings.xhttp_settings.x_padding_key ?? void 0,
            x_padding_header: host.transport_settings.xhttp_settings.x_padding_header ?? void 0,
            x_padding_placement: host.transport_settings.xhttp_settings.x_padding_placement ?? void 0,
            x_padding_method: host.transport_settings.xhttp_settings.x_padding_method ?? void 0,
            uplink_http_method: host.transport_settings.xhttp_settings.uplink_http_method ?? void 0,
            session_placement: host.transport_settings.xhttp_settings.session_placement ?? void 0,
            session_key: host.transport_settings.xhttp_settings.session_key ?? void 0,
            seq_placement: host.transport_settings.xhttp_settings.seq_placement ?? void 0,
            seq_key: host.transport_settings.xhttp_settings.seq_key ?? void 0,
            uplink_data_placement: host.transport_settings.xhttp_settings.uplink_data_placement ?? void 0,
            uplink_data_key: host.transport_settings.xhttp_settings.uplink_data_key ?? void 0,
            uplink_chunk_size: host.transport_settings.xhttp_settings.uplink_chunk_size ?? void 0,
            sc_max_each_post_bytes: host.transport_settings.xhttp_settings.sc_max_each_post_bytes ?? void 0,
            sc_min_posts_interval_ms: host.transport_settings.xhttp_settings.sc_min_posts_interval_ms ?? void 0,
            download_settings: host.transport_settings.xhttp_settings.download_settings ?? void 0,
            xmux: host.transport_settings.xhttp_settings.xmux ? {
              max_concurrency: host.transport_settings.xhttp_settings.xmux.maxConcurrency ?? void 0,
              max_connections: host.transport_settings.xhttp_settings.xmux.maxConnections ?? void 0,
              c_max_reuse_times: host.transport_settings.xhttp_settings.xmux.cMaxReuseTimes ?? void 0,
              h_max_reusable_secs: host.transport_settings.xhttp_settings.xmux.hMaxReusableSecs ?? void 0,
              h_max_request_times: host.transport_settings.xhttp_settings.xmux.hMaxRequestTimes ?? void 0,
              h_keep_alive_period: host.transport_settings.xhttp_settings.xmux.hKeepAlivePeriod ?? void 0
            } : void 0
          } : void 0,
          grpc_settings: host.transport_settings.grpc_settings ? {
            multi_mode: host.transport_settings.grpc_settings.multi_mode === null ? void 0 : !!host.transport_settings.grpc_settings.multi_mode,
            idle_timeout: host.transport_settings.grpc_settings.idle_timeout ?? void 0,
            health_check_timeout: host.transport_settings.grpc_settings.health_check_timeout ?? void 0,
            permit_without_stream: host.transport_settings.grpc_settings.permit_without_stream ?? void 0,
            initial_windows_size: host.transport_settings.grpc_settings.initial_windows_size ?? void 0
          } : void 0,
          kcp_settings: host.transport_settings.kcp_settings ? {
            mtu: host.transport_settings.kcp_settings.mtu ?? void 0,
            tti: host.transport_settings.kcp_settings.tti ?? void 0,
            uplink_capacity: host.transport_settings.kcp_settings.uplink_capacity ?? void 0,
            downlink_capacity: host.transport_settings.kcp_settings.downlink_capacity ?? void 0,
            congestion: host.transport_settings.kcp_settings.congestion === null ? void 0 : !!host.transport_settings.kcp_settings.congestion,
            read_buffer_size: host.transport_settings.kcp_settings.read_buffer_size ?? void 0,
            write_buffer_size: host.transport_settings.kcp_settings.write_buffer_size ?? void 0
          } : void 0,
          tcp_settings: host.transport_settings.tcp_settings ? {
            header: host.transport_settings.tcp_settings.header ?? void 0,
            request: host.transport_settings.tcp_settings.request ? {
              version: host.transport_settings.tcp_settings.request.version ?? void 0,
              method: host.transport_settings.tcp_settings.request.method ?? void 0,
              headers: host.transport_settings.tcp_settings.request.headers ?? void 0
            } : void 0,
            response: host.transport_settings.tcp_settings.response ? {
              version: host.transport_settings.tcp_settings.response.version ?? void 0,
              status: host.transport_settings.tcp_settings.response.status ?? void 0,
              reason: host.transport_settings.tcp_settings.response.reason ?? void 0,
              headers: host.transport_settings.tcp_settings.response.headers ?? void 0
            } : void 0
          } : void 0,
          websocket_settings: host.transport_settings.websocket_settings ? {
            heartbeatPeriod: host.transport_settings.websocket_settings.heartbeatPeriod ?? void 0
          } : void 0
        } : void 0,
        http_headers: host.http_headers || {}
      }));
      await modifyHosts(hostsToUpdate);
      setHosts(updatedHosts);
      toast.success(t("host.priorityUpdated", { defaultValue: "Host priorities updated" }));
    } catch (error) {
      console.error("Error updating host priorities:", error);
      setHosts(hosts);
      toast.error(t("host.priorityUpdateError", { defaultValue: "Failed to update priorities" }));
    } finally {
      setIsUpdatingPriorities(false);
    }
  };
  const sortableHosts = hosts?.filter((host) => host.id !== null).map((host) => ({
    id: host.id
  })) ?? [];
  const sortedHosts = [...hosts ?? []].sort((a2, b) => {
    const priorityA = a2.priority ?? 0;
    const priorityB = b.priority ?? 0;
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }
    const idA = a2.id ?? 0;
    const idB = b.id ?? 0;
    return idA - idB;
  });
  const filteredHosts = reactExports.useMemo(() => {
    const query = filters.search?.toLowerCase().trim();
    const statusFilters = filters.status;
    const inboundFilters = filters.inbound_tags;
    const securityFilter = filters.security;
    const disabledFilter = filters.is_disabled;
    return sortedHosts.filter((host) => {
      if (query) {
        const remarkMatch = host.remark?.toLowerCase().includes(query);
        const addressMatch = Array.isArray(host.address) ? host.address.some((addr) => addr.toLowerCase().includes(query)) : false;
        const inboundTagMatch = host.inbound_tag?.toLowerCase().includes(query);
        const hostMatch = Array.isArray(host.host) ? host.host.some((h) => h.toLowerCase().includes(query)) : false;
        const sniMatch = Array.isArray(host.sni) ? host.sni.some((sni) => sni.toLowerCase().includes(query)) : false;
        const portMatch = host.port?.toString().includes(query);
        if (!remarkMatch && !addressMatch && !inboundTagMatch && !hostMatch && !sniMatch && !portMatch) {
          return false;
        }
      }
      if (statusFilters && statusFilters.length > 0) {
        if (!host.status || host.status.length === 0) {
          return false;
        }
        if (!statusFilters.some((status) => host.status?.includes(status))) {
          return false;
        }
      }
      if (inboundFilters && inboundFilters.length > 0 && (!host.inbound_tag || !inboundFilters.includes(host.inbound_tag))) {
        return false;
      }
      const hostSecurity = host.security || "inbound_default";
      if (securityFilter && hostSecurity !== securityFilter) {
        return false;
      }
      if (typeof disabledFilter === "boolean" && Boolean(host.is_disabled) !== disabledFilter) {
        return false;
      }
      return true;
    });
  }, [sortedHosts, filters]);
  const listColumns = useHostsListColumns({
    onEdit: handleEdit,
    onDuplicate: handleDuplicate,
    onDataChanged: refreshHostsData
  });
  const hasActiveAdvanceFilters = Boolean(filters.status && filters.status.length > 0 || filters.inbound_tags && filters.inbound_tags.length > 0 || filters.security || typeof filters.is_disabled === "boolean");
  const hasSearch = Boolean(filters.search?.trim());
  const isSortingDisabled = isUpdatingPriorities || hasSearch || hasActiveAdvanceFilters;
  const isCurrentlyLoading = hosts === void 0 || isRefreshing && sortedHosts.length === 0;
  const isEmpty = !isCurrentlyLoading && filteredHosts.length === 0 && !hasSearch && !hasActiveAdvanceFilters && sortedHosts.length === 0;
  const isSearchEmpty = !isCurrentlyLoading && filteredHosts.length === 0 && (hasSearch || hasActiveAdvanceFilters);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HostFilters,
      {
        filters,
        onFilterChange: handleFilterChange,
        onRefresh: handleRefreshClick,
        isRefreshing,
        advanceSearchOnOpen: handleAdvanceSearchOpen,
        onClearAdvanceSearch: handleClearAdvanceSearch,
        viewMode,
        onViewModeChange: setViewMode
      }
    ) }),
    (isCurrentlyLoading || filteredHosts.length > 0) && viewMode === "grid" && /* @__PURE__ */ jsxRuntimeExports.jsx(DndContext, { sensors: isSortingDisabled ? [] : sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortableContext, { items: sortableHosts, strategy: rectSortingStrategy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ListGenerator,
      {
        data: filteredHosts,
        columns: listColumns,
        getRowId: (host) => host.id ?? host.remark ?? "host",
        isLoading: isCurrentlyLoading,
        loadingRows: 6,
        className: "max-w-screen-[2000px] min-h-screen gap-3 overflow-hidden",
        mode: "grid",
        showEmptyState: false,
        renderGridItem: (host) => /* @__PURE__ */ jsxRuntimeExports.jsx(SortableHost, { host, onEdit: handleEdit, onDuplicate: handleDuplicate, onDataChanged: refreshHostsData, disabled: isSortingDisabled }, host.id ?? "new"),
        renderGridSkeleton: (index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex animate-pulse items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 shrink-0 rounded-sm bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-muted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-2/5 rounded-md bg-muted" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-4/5 rounded-md bg-muted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-2/5 rounded-md bg-muted" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 shrink-0 rounded-md bg-muted" })
        ] }) }, index)
      }
    ) }) }),
    (isCurrentlyLoading || filteredHosts.length > 0) && viewMode === "list" && /* @__PURE__ */ jsxRuntimeExports.jsx(DndContext, { sensors: isSortingDisabled ? [] : sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortableContext, { items: sortableHosts, strategy: rectSortingStrategy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ListGenerator,
      {
        data: filteredHosts,
        columns: listColumns,
        getRowId: (host) => host.id ?? host.remark ?? "host",
        isLoading: isCurrentlyLoading,
        loadingRows: 6,
        className: "max-w-screen-[2000px] min-h-screen gap-3 overflow-hidden",
        mode: "list",
        showEmptyState: false,
        onRowClick: handleEdit,
        enableSorting: true,
        sortingDisabled: isSortingDisabled
      }
    ) }) }),
    isEmpty && !isCurrentlyLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("host.noHosts") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: t("host.noHostsDescription") })
    ] }) }) }),
    isSearchEmpty && !isCurrentlyLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("noResults") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: t("host.noSearchResults") })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HostAdvanceSearchModal,
      {
        isDialogOpen: isAdvanceSearchOpen,
        onOpenChange: handleAdvanceSearchOpen,
        form: advanceSearchForm,
        onSubmit: handleAdvanceSearchSubmit,
        inbounds,
        isLoadingInbounds
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HostModal,
      {
        isDialogOpen,
        onSubmit: handleSubmit,
        onOpenChange: (open) => {
          if (!open) {
            setEditingHost(null);
            form.reset(hostFormDefaultValues);
          } else if (!editingHost) {
            form.reset(hostFormDefaultValues);
          }
          onAddHost(open);
        },
        form,
        editingHost: !!editingHost
      }
    )
  ] });
}
function HostsPage() {
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [editingHost, setEditingHost] = reactExports.useState(null);
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["getGetHostsQueryKey"],
    queryFn: () => getHosts()
  });
  const { t } = useTranslation();
  const queryClient2 = useQueryClient();
  const handleDialogOpen = (open) => {
    setIsDialogOpen(open);
    if (!open) {
      setEditingHost(null);
    }
  };
  const handleCreateClick = () => {
    setEditingHost(null);
    setIsDialogOpen(true);
  };
  const onAddHost = (open) => {
    setIsDialogOpen(open);
  };
  const handleSubmit = async (formData) => {
    try {
      const allProtocolsNone = formData.mux_settings && (!formData.mux_settings.sing_box?.protocol || formData.mux_settings.sing_box.protocol === "none") && (!formData.mux_settings.clash?.protocol || formData.mux_settings.clash.protocol === "none") && !formData.mux_settings.xray?.concurrency;
      let priority = formData.priority;
      if (!editingHost?.id && data && data.length > 0) {
        const priorities = data.map((h) => h.priority ?? 0);
        const maxPriority = Math.max(...priorities);
        priority = maxPriority + 1;
      }
      const hostData = {
        ...formData,
        priority,
        alpn: formData.alpn,
        fingerprint: formData.fingerprint,
        ech_config_list: formData.ech_config_list || void 0,
        pinned_peer_cert_sha256: formData.pinned_peer_cert_sha256 || void 0,
        verify_peer_cert_by_name: formData.verify_peer_cert_by_name && formData.verify_peer_cert_by_name.length > 0 ? formData.verify_peer_cert_by_name : void 0,
        vless_route: formData.vless_route || void 0,
        transport_settings: formData.transport_settings ? {
          ...formData.transport_settings,
          xhttp_settings: formData.transport_settings.xhttp_settings ? {
            ...formData.transport_settings.xhttp_settings,
            xmux: formData.transport_settings.xhttp_settings.xmux ? {
              ...formData.transport_settings.xhttp_settings.xmux,
              h_keep_alive_period: formData.transport_settings.xhttp_settings.xmux.h_keep_alive_period || void 0
            } : void 0
          } : void 0
        } : void 0,
        mux_settings: allProtocolsNone ? void 0 : formData.mux_settings ? {
          ...formData.mux_settings,
          sing_box: formData.mux_settings.sing_box ? {
            enable: formData.mux_settings.sing_box.enable || false,
            protocol: formData.mux_settings.sing_box.protocol === "none" ? void 0 : formData.mux_settings.sing_box.protocol,
            max_connections: formData.mux_settings.sing_box.max_connections || void 0,
            max_streams: formData.mux_settings.sing_box.max_streams || void 0,
            min_streams: formData.mux_settings.sing_box.min_streams || void 0,
            padding: formData.mux_settings.sing_box.padding || void 0,
            brutal: formData.mux_settings.sing_box.brutal || void 0
          } : void 0,
          clash: formData.mux_settings.clash ? {
            enable: formData.mux_settings.clash.enable || false,
            protocol: formData.mux_settings.clash.protocol === "none" ? void 0 : formData.mux_settings.clash.protocol,
            max_connections: formData.mux_settings.clash.max_connections || void 0,
            max_streams: formData.mux_settings.clash.max_streams || void 0,
            min_streams: formData.mux_settings.clash.min_streams || void 0,
            padding: formData.mux_settings.clash.padding || void 0,
            brutal: formData.mux_settings.clash.brutal || void 0,
            statistic: formData.mux_settings.clash.statistic || void 0,
            only_tcp: formData.mux_settings.clash.only_tcp || void 0
          } : void 0,
          xray: formData.mux_settings.xray ? {
            enabled: formData.mux_settings.xray.enabled || false,
            concurrency: formData.mux_settings.xray.concurrency || void 0,
            xudp_concurrency: formData.mux_settings.xray.xudp_concurrency || void 0,
            xudp_proxy_udp_443: formData.mux_settings.xray.xudp_proxy_443 === "none" ? void 0 : formData.mux_settings.xray.xudp_proxy_443
          } : void 0
        } : void 0,
        fragment_settings: (() => {
          const xraySettings = formData.fragment_settings?.xray ? {
            packets: formData.fragment_settings.xray.packets || "",
            length: formData.fragment_settings.xray.length || "",
            interval: formData.fragment_settings.xray.interval || ""
          } : void 0;
          const singboxSettings = formData.fragment_settings?.sing_box?.fragment ? {
            fragment: formData.fragment_settings.sing_box.fragment,
            fragment_fallback_delay: formData.fragment_settings.sing_box.fragment_fallback_delay || void 0,
            record_fragment: formData.fragment_settings.sing_box.record_fragment || void 0
          } : void 0;
          if (xraySettings || singboxSettings) {
            return {
              xray: xraySettings,
              sing_box: singboxSettings
            };
          }
          return void 0;
        })(),
        noise_settings: formData.noise_settings?.xray ? {
          xray: formData.noise_settings.xray.map((noise) => ({
            type: noise.type,
            packet: noise.packet,
            delay: noise.delay,
            apply_to: noise.apply_to
          }))
        } : void 0
      };
      if (editingHost?.id) {
        await modifyHost(editingHost.id, hostData);
        return { status: 200 };
      } else {
        await createHost(hostData);
        return { status: 200 };
      }
    } catch (error) {
      console.error("Error submitting host:", error);
      console.error("Error response:", error?.response);
      console.error("Error data:", error?.response?._data);
      let errorMessage = "";
      let errorField = "";
      if (error?.response?._data) {
        const apiError = error.response._data;
        if (typeof apiError === "string") {
          errorMessage = apiError;
        } else if (apiError?.detail) {
          if (Array.isArray(apiError.detail)) {
            const firstError = apiError.detail[0];
            errorField = firstError?.loc?.[1] || "";
            errorMessage = firstError?.msg || "Validation error";
          } else if (typeof apiError.detail === "string") {
            errorMessage = apiError.detail;
          } else if (typeof apiError.detail === "object") {
            const firstError = Object.entries(apiError.detail)[0];
            errorField = firstError[0];
            errorMessage = typeof firstError[1] === "string" ? firstError[1] : t("validation.invalid", { field: firstError[0] });
          } else if (typeof apiError.detail === "string" && !Array.isArray(apiError.detail)) {
            toast.error(apiError.detail);
          } else {
            errorMessage = "Validation error";
          }
        } else if (apiError?.message) {
          errorMessage = apiError.message;
        } else {
          errorMessage = t("hosts.genericError", { defaultValue: "An unexpected error occurred" });
        }
      } else {
        errorMessage = error?.message || t("hosts.genericError", { defaultValue: "An error occurred" });
      }
      const toastMessage = errorField ? `${errorField}: ${errorMessage}` : errorMessage;
      toast.error(toastMessage);
      return { status: 500 };
    } finally {
      queryClient2.invalidateQueries({
        queryKey: ["/api/hosts"]
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-2 pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full transform-gpu animate-fade-in", style: { animationDuration: "400ms" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "hosts", description: "manageHosts", buttonIcon: Plus, buttonText: "hostsDialog.addHost", onButtonClick: handleCreateClick }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HostsList,
      {
        data,
        isDialogOpen,
        onDialogOpenChange: handleDialogOpen,
        onAddHost,
        onSubmit: handleSubmit,
        editingHost,
        setEditingHost,
        onRefresh: refetch,
        isRefreshing: isFetching
      }
    ) })
  ] });
}
export {
  HostsPage as default
};
//# sourceMappingURL=_dashboard.hosts-B8AYOxRD.js.map
