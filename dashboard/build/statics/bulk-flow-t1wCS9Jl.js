import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { f as createLucideIcon, c as cn, a as useDirDetection, B as useGetGroupsSimple, C as useGetUsersSimple, D as useGetAdminsSimple, E as useBulkModifyUsersProxySettings, F as useBulkModifyUsersDatalimit, G as useBulkModifyUsersExpire, H as useBulkAddGroupsToUsers, I as useBulkRemoveUsersFromGroups, X as XTLSFlows, S as ShadowsocksMethods, t as toast } from "./index-C_i3x-Gf.js";
import { B as Button } from "./button-BOH66nN-.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-5ZQOfa_i.js";
import { L as Label } from "./label-D6GrbpFd.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { T as ToggleGroup, a as ToggleGroupItem } from "./toggle-group-DO2v6P71.js";
import { C as Command, a as CommandInput, b as CommandEmpty, c as CommandGroup, d as CommandItem } from "./command-AnChkD8Y.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { C as Check } from "./check-ayw17ogi.js";
import { S as Search } from "./search-DGfkalst.js";
import { f as formatBytes, g as gbToBytes } from "./formatByte-CB667FGk.js";
import { u as useDebouncedSearch } from "./use-debounced-search-CgdykSdk.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { S as Settings } from "./settings-ByQKCi6u.js";
import { U as User } from "./user-CdCUmzOL.js";
import { N as Network } from "./network-BFIxiW-9.js";
import { H as HardDrive } from "./hard-drive-CUSaZiTC.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import { C as Calendar } from "./calendar-BM3jGkln.js";
import { U as UsersRound } from "./users-round-CIlaBSBa.js";
import { C as CircleCheck } from "./circle-check-CPuiTWET.js";
import { X } from "./x-C6aLLO-Y.js";
import { T as TriangleAlert } from "./triangle-alert-BIvtHAaj.js";
import { S as Shield } from "./shield-B15rcL-H.js";
import { C as ChevronLeft } from "./chevron-left-Bre8eEMe.js";
import { C as ChevronRight } from "./chevron-right-DkXHvvEa.js";
const CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
const Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
const SelectorPanel = reactExports.memo(function SelectorPanel2({
  icon: Icon,
  title,
  items,
  selected,
  setSelected,
  search,
  setSearch,
  searchPlaceholder,
  selectAllLabel,
  deselectAllLabel,
  itemLabelKey,
  itemValueKey,
  searchKey,
  t,
  isLoading = false,
  description,
  isRequired = false,
  hasError = false
}) {
  const deferredSearch = reactExports.useDeferredValue(search);
  const normalizedSearch = deferredSearch.trim().toLowerCase();
  const allItemIds = reactExports.useMemo(
    () => items.map((item) => typeof item[itemValueKey] === "number" ? item[itemValueKey] : -1).filter((id) => id !== -1),
    [items, itemValueKey]
  );
  const selectedSet = reactExports.useMemo(() => new Set(selected), [selected]);
  const handleSelectAll = reactExports.useCallback(() => setSelected(allItemIds), [allItemIds, setSelected]);
  const handleDeselectAll = reactExports.useCallback(() => setSelected([]), [setSelected]);
  const filteredItems = reactExports.useMemo(() => {
    if (!normalizedSearch) return items;
    return items.filter((item) => {
      const rawValue = searchKey === "name" && "name" in item ? item.name : searchKey === "username" && "username" in item ? item.username : "";
      if (typeof rawValue !== "string") return false;
      return rawValue.toLowerCase().includes(normalizedSearch);
    });
  }, [items, normalizedSearch, searchKey]);
  const handleItemToggle = reactExports.useCallback((id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    } else {
      setSelected([...selected, id]);
    }
  }, [selected, setSelected]);
  const allFilteredSelected = filteredItems.length > 0 && filteredItems.every((item) => {
    const id = typeof item[itemValueKey] === "number" ? item[itemValueKey] : void 0;
    return id !== void 0 && selectedSet.has(id);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("flex-1 flex flex-col h-full min-w-[200px] sm:min-w-[240px] overflow-hidden", hasError && "border-destructive"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3 sm:pb-4 flex-shrink-0 px-3 sm:px-6 pt-3 sm:pt-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2 sm:mb-2.5 gap-2 sm:gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-medium min-w-0 flex-1 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate block min-w-0", title, children: title }),
          isRequired && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive flex-shrink-0 ml-0.5", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: selected.length > 0 ? "default" : "secondary", className: "text-xs sm:text-sm flex-shrink-0 min-w-[2.5rem] sm:min-w-[2.75rem] text-center tabular-nums px-2 py-0.5", children: selected.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[1.25rem] sm:min-h-[1.5rem] mb-2 sm:mb-3 overflow-hidden", children: [
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed break-words overflow-hidden", children: description }),
        hasError && !description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-destructive break-words overflow-hidden", children: t("bulk.required", { defaultValue: "This field is required" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-2.5 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: allFilteredSelected ? "default" : "outline",
            className: "h-8 sm:h-9 text-xs sm:text-sm flex-1 sm:flex-initial px-2 sm:px-4 min-w-0 overflow-hidden",
            onClick: handleSelectAll,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: cn("h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0", allFilteredSelected && "mr-1 sm:mr-1.5") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline truncate", children: selectAllLabel }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden truncate", children: t("selectAll", { defaultValue: "All" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 sm:h-9 text-xs sm:text-sm flex-1 sm:flex-initial px-2 sm:px-4 min-w-0 overflow-hidden", onClick: handleDeselectAll, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline truncate", children: deselectAllLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden truncate", children: t("deselectAll", { defaultValue: "None" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-2.5 sm:space-y-3 flex-1 flex flex-col min-h-0 px-3 sm:px-6 pb-3 sm:pb-6 overflow-hidden", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", dir: "ltr", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 sm:left-3 top-1/2 h-4 w-4 sm:h-4 sm:w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 sm:h-10 w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 space-y-1.5 sm:space-y-2 overflow-y-auto max-h-[220px] sm:max-h-[280px] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent", dir: "ltr", children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-2.5 rounded-md px-3 py-2 sm:px-3.5 sm:py-2.5 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4 rounded-full sm:h-4 sm:w-4 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 flex-1 min-w-0" })
      ] }, index)) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", dir: "ltr", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 sm:left-3 top-1/2 h-4 w-4 sm:h-4 sm:w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: searchPlaceholder, value: search, onChange: (e) => setSearch(e.target.value), className: "h-9 sm:h-10 pl-10 sm:pl-10 text-sm sm:text-sm w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 space-y-1.5 sm:space-y-2 overflow-y-auto max-h-[220px] sm:max-h-[280px] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent", dir: "ltr", children: [
        filteredItems.map((item) => {
          const id = typeof item[itemValueKey] === "number" ? item[itemValueKey] : void 0;
          let label = "";
          if (itemLabelKey === "name" && "name" in item && typeof item.name === "string") label = item.name;
          if (itemLabelKey === "username" && "username" in item && typeof item.username === "string") label = item.username;
          if (id === void 0) return null;
          const isSelected = selectedSet.has(id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => handleItemToggle(id),
              className: cn(
                "group flex cursor-pointer items-center gap-2 sm:gap-2.5 rounded-md border px-3 sm:px-3.5 py-2 sm:py-2.5 transition-colors hover:bg-accent active:bg-accent/80 min-w-0 overflow-hidden",
                isSelected && "border-primary bg-primary/5"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
                  "flex h-4 w-4 sm:h-4 sm:w-4 items-center justify-center rounded border transition-colors flex-shrink-0",
                  isSelected ? "border-primary bg-primary" : "border-muted-foreground/40 group-hover:border-primary/60"
                ), children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 sm:h-3 sm:w-3 text-primary-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate text-sm sm:text-sm min-w-0 block", title: label, children: label })
              ]
            },
            id
          );
        }),
        filteredItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-6 sm:py-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mb-2 sm:mb-2.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-sm text-muted-foreground", children: t("noResults", { defaultValue: "No results found." }) })
        ] })
      ] })
    ] }) })
  ] });
});
const PAGE_SIZE = 50;
function BulkFlow({ operationType }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const isRTL = dir === "rtl";
  const [currentStep, setCurrentStep] = reactExports.useState(1);
  const [selectedFlow, setSelectedFlow] = reactExports.useState(void 0);
  const [selectedMethod, setSelectedMethod] = reactExports.useState(void 0);
  const [dataLimit, setDataLimit] = reactExports.useState(void 0);
  const [dataOperation, setDataOperation] = reactExports.useState("add");
  const dataLimitInputRef = reactExports.useRef("");
  const [expireSeconds, setExpireSeconds] = reactExports.useState(void 0);
  const [expireUnit, setExpireUnit] = reactExports.useState("days");
  const [expireAmount, setExpireAmount] = reactExports.useState(void 0);
  const [expireOperation, setExpireOperation] = reactExports.useState("add");
  const [groupsOperation, setGroupsOperation] = reactExports.useState("add");
  const [selectedGroups, setSelectedGroups] = reactExports.useState([]);
  const [selectedUsers, setSelectedUsers] = reactExports.useState([]);
  const [selectedAdmins, setSelectedAdmins] = reactExports.useState([]);
  const [selectedHasGroups, setSelectedHasGroups] = reactExports.useState([]);
  const [selectedStatuses, setSelectedStatuses] = reactExports.useState([]);
  const [groupCommandSearch, setGroupCommandSearch] = reactExports.useState("");
  const { search: userSearch, debouncedSearch: debouncedUserSearch, setSearch: setUserSearch } = useDebouncedSearch("", 300);
  const { search: adminSearch, debouncedSearch: debouncedAdminSearch, setSearch: setAdminSearch } = useDebouncedSearch("", 300);
  const { search: hasGroupSearch, debouncedSearch: debouncedHasGroupSearch, setSearch: setHasGroupSearch } = useDebouncedSearch("", 300);
  const { search: groupSearch, debouncedSearch: debouncedGroupSearch, setSearch: setGroupSearch } = useDebouncedSearch("", 300);
  reactExports.useEffect(() => {
    if (expireAmount === void 0) {
      setExpireSeconds(void 0);
      return;
    }
    const num = Number(expireAmount);
    if (num <= 0) {
      setExpireSeconds(void 0);
      return;
    }
    let seconds = num;
    switch (expireUnit) {
      case "minutes":
        seconds = num * 60;
        break;
      case "hours":
        seconds = num * 3600;
        break;
      case "days":
        seconds = num * 86400;
        break;
      case "months":
        seconds = num * 2592e3;
        break;
    }
    setExpireSeconds(seconds);
  }, [expireAmount, expireUnit]);
  const { data: groupsData, isLoading: groupsLoading } = useGetGroupsSimple({ limit: PAGE_SIZE, offset: 0, all: true });
  const { data: usersData, isLoading: usersLoading } = useGetUsersSimple({ limit: PAGE_SIZE, offset: 0, search: debouncedUserSearch || void 0 });
  const { data: adminsData, isLoading: adminsLoading } = useGetAdminsSimple({ limit: PAGE_SIZE, offset: 0, search: debouncedAdminSearch || void 0 });
  const statusOptions = [
    { value: "active", label: t("status.active", { defaultValue: "Active" }) },
    { value: "disabled", label: t("status.disabled", { defaultValue: "Disabled" }) },
    { value: "limited", label: t("status.limited", { defaultValue: "Limited" }) },
    { value: "expired", label: t("status.expired", { defaultValue: "Expired" }) },
    { value: "on_hold", label: t("status.on_hold", { defaultValue: "On Hold" }) }
  ];
  const filteredGroups = groupsData?.groups?.filter((group) => {
    if (!debouncedGroupSearch) return true;
    return group.name.toLowerCase().includes(debouncedGroupSearch.toLowerCase());
  }) || [];
  const filteredHasGroups = groupsData?.groups?.filter((group) => {
    if (operationType === "groups" && selectedGroups.includes(group.id)) return false;
    if (!debouncedHasGroupSearch) return true;
    return group.name.toLowerCase().includes(debouncedHasGroupSearch.toLowerCase());
  }) || [];
  const proxyMutation = useBulkModifyUsersProxySettings();
  const dataMutation = useBulkModifyUsersDatalimit();
  const expireMutation = useBulkModifyUsersExpire();
  const addGroupsMutation = useBulkAddGroupsToUsers();
  const removeGroupsMutation = useBulkRemoveUsersFromGroups();
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        if (operationType === "proxy") {
          return selectedFlow || selectedMethod;
        }
        if (operationType === "groups") {
          return selectedGroups.length > 0;
        }
        if (operationType === "data") {
          return dataLimit !== void 0 && dataLimit > 0;
        }
        if (operationType === "expire") {
          return expireAmount !== void 0 && expireAmount > 0;
        }
        return true;
      case 2:
        switch (operationType) {
          case "proxy":
            return selectedFlow || selectedMethod;
          case "data":
            return dataLimit !== void 0;
          case "expire":
            return expireSeconds !== void 0;
          case "groups":
            return true;
          default:
            return false;
        }
      case 3:
        return true;
      default:
        return false;
    }
  };
  const handleApply = () => {
    if (operationType === "groups" && groupsOperation === "remove") {
      const totalTargets2 = selectedUsers.length + selectedAdmins.length + selectedHasGroups.length;
      if (totalTargets2 === 0) {
        toast.error(t("error"), { description: t("bulk.noTargetsSelected") });
        return;
      }
    }
    setShowConfirmDialog(true);
  };
  const [showConfirmDialog, setShowConfirmDialog] = reactExports.useState(false);
  const confirmApply = () => {
    const basePayload = {
      group_ids: selectedGroups.length ? selectedGroups : [],
      users: selectedUsers.length ? selectedUsers : [],
      admins: selectedAdmins.length ? selectedAdmins : []
    };
    const statusPayload = selectedStatuses.length ? { status: selectedStatuses } : {};
    const payload = (() => {
      switch (operationType) {
        case "proxy":
          return {
            ...basePayload,
            flow: selectedFlow === "none" ? "" : selectedFlow,
            method: selectedMethod
          };
        case "data":
          const dataLimitBytes = gbToBytes(dataLimit);
          return {
            ...basePayload,
            ...statusPayload,
            amount: dataOperation === "subtract" ? -dataLimitBytes : dataLimitBytes
          };
        case "expire":
          return {
            ...basePayload,
            ...statusPayload,
            amount: expireOperation === "subtract" ? -expireSeconds : expireSeconds
          };
        case "groups":
          return {
            group_ids: selectedGroups,
            has_group_ids: selectedHasGroups.length > 0 ? selectedHasGroups : [],
            users: selectedUsers.length ? selectedUsers : [],
            admins: selectedAdmins.length ? selectedAdmins : []
          };
        default:
          return basePayload;
      }
    })();
    const mutation = (() => {
      switch (operationType) {
        case "proxy":
          return proxyMutation;
        case "data":
          return dataMutation;
        case "expire":
          return expireMutation;
        case "groups":
          return groupsOperation === "add" ? addGroupsMutation : removeGroupsMutation;
        default:
          return proxyMutation;
      }
    })();
    mutation.mutate(
      { data: payload },
      {
        onSuccess: (response) => {
          const detail = typeof response === "object" && response && "detail" in response ? response.detail : void 0;
          let description = "";
          if (detail) {
            description = typeof detail === "string" ? detail : JSON.stringify(detail, null, 2);
          } else if (typeof response === "string") {
            description = response;
          } else if (response && Object.keys(response).length > 0) {
            description = JSON.stringify(response, null, 2);
          } else {
            description = "Operation completed successfully";
          }
          toast.success(t("operationSuccess", { defaultValue: "Operation successful!" }), { description });
          setCurrentStep(1);
          setSelectedFlow(void 0);
          setSelectedMethod(void 0);
          setDataLimit(void 0);
          dataLimitInputRef.current = "";
          setExpireSeconds(void 0);
          setExpireAmount(void 0);
          setSelectedGroups([]);
          setSelectedUsers([]);
          setSelectedAdmins([]);
          setSelectedHasGroups([]);
          setSelectedStatuses([]);
          setShowConfirmDialog(false);
        },
        onError: (error) => {
          toast.error(t("operationFailed", { defaultValue: "Operation failed!" }), {
            description: error?.message || JSON.stringify(error, null, 2)
          });
          setShowConfirmDialog(false);
        }
      }
    );
  };
  const totalTargets = selectedUsers.length + selectedAdmins.length + (operationType === "groups" ? selectedHasGroups.length : selectedGroups.length);
  const hasStatusFilter = (operationType === "data" || operationType === "expire") && selectedStatuses.length > 0;
  const statusTargetCount = hasStatusFilter ? selectedStatuses.length : 0;
  const displayTargetCount = totalTargets + statusTargetCount;
  const isApplyToAll = totalTargets === 0 && !hasStatusFilter;
  const formatTime = (seconds) => {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)}h`;
    if (seconds < 2592e3) return `${Math.round(seconds / 86400)}d`;
    return `${Math.round(seconds / 2592e3)}mo`;
  };
  const steps = [
    { id: 1, title: t("bulk.configureSettings", { defaultValue: "Configure Settings" }), icon: Settings },
    { id: 2, title: t("bulk.selectTargets", { defaultValue: "Select Targets" }), icon: User },
    { id: 3, title: t("bulk.reviewAndApply", { defaultValue: "Review & Apply" }), icon: CircleCheckBig }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-3 sm:space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center px-2 sm:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full max-w-3xl items-center", children: steps.map((step, index) => {
      const Icon = step.icon;
      const isActive = step.id === currentStep;
      const isCompleted = step.id < currentStep;
      const isUpcoming = step.id > currentStep;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-shrink-0 flex-col items-center gap-1.5 sm:gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-200 sm:h-9 sm:w-9",
                isCompleted && "border-primary bg-primary text-primary-foreground shadow-sm",
                isActive && "scale-105 border-primary bg-background text-primary shadow-md",
                isUpcoming && "border-muted-foreground/30 bg-background text-muted-foreground"
              ),
              children: [
                isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 sm:h-5 sm:w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-4 w-4 sm:h-5 sm:w-5", isActive && "text-primary") }),
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-pulse rounded-full border-2 border-primary/20" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "hidden max-w-[60px] text-center text-[10px] font-medium leading-tight sm:block sm:max-w-[80px] sm:text-xs",
                isActive && "font-semibold text-primary",
                isCompleted && "text-primary",
                isUpcoming && "text-muted-foreground"
              ),
              children: step.title
            }
          )
        ] }),
        index < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-1 h-0.5 flex-1 sm:mx-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute inset-0 rounded-full transition-all duration-300", isCompleted ? "bg-primary" : "bg-muted") }) })
      ] }) }, step.id);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 sm:p-4 md:p-6", children: [
      currentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
        operationType === "proxy" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 sm:space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "flow", className: "flex items-center gap-1.5 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "h-3.5 w-3.5 text-muted-foreground" }),
              t("bulk.flowLabel", { defaultValue: "Flow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedFlow || "", onValueChange: (value) => setSelectedFlow(value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("bulk.selectFlowPlaceholder", { defaultValue: "Select flow" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: t("none", { defaultValue: "None" }) }),
                Object.values(XTLSFlows).filter((flow) => flow !== "").map((flow) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: flow, children: flow }, flow))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "method", className: "flex items-center gap-1.5 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-3.5 w-3.5 text-muted-foreground" }),
              t("bulk.methodLabel", { defaultValue: "Method" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedMethod || "", onValueChange: (value) => setSelectedMethod(value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("bulk.selectMethodPlaceholder", { defaultValue: "Select method" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.values(ShadowsocksMethods).map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: method, children: method }, method)) })
            ] })
          ] })
        ] }) }),
        operationType === "data" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 sm:space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "data-limit", className: "flex items-center gap-1.5 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            t("bulk.dataLimitLabel", { defaultValue: "Data Limit (GB)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              ToggleGroup,
              {
                type: "single",
                value: dataOperation,
                onValueChange: (value) => value && setDataOperation(value),
                className: "w-full rounded-md border p-1 sm:w-auto",
                defaultValue: "add",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "add", "aria-label": "Add", className: "flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground sm:flex-initial", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "subtract", "aria-label": "Subtract", className: "flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground sm:flex-initial", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:max-w-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "data-limit",
                  type: "text",
                  inputMode: "decimal",
                  placeholder: t("bulk.dataLimitPlaceholder", { defaultValue: "Enter amount" }),
                  value: dataLimitInputRef.current !== "" ? dataLimitInputRef.current : dataLimit !== void 0 && dataLimit > 0 ? String(dataLimit) : "",
                  onChange: (e) => {
                    const rawValue = e.target.value.trim();
                    if (rawValue === "") {
                      dataLimitInputRef.current = "";
                      setDataLimit(void 0);
                      return;
                    }
                    const validNumberPattern = /^-?(\d*\.?\d*|\.\d*)$/;
                    if (validNumberPattern.test(rawValue)) {
                      dataLimitInputRef.current = rawValue;
                      if (rawValue === "." || rawValue === "-." || rawValue === "-") {
                        setDataLimit(void 0);
                      } else if (rawValue.endsWith(".") && rawValue.length > 1) {
                        const prevValue = dataLimit !== void 0 ? dataLimit : 0;
                        setDataLimit(prevValue);
                      } else {
                        const numValue = parseFloat(rawValue);
                        if (!isNaN(numValue) && numValue >= 0) {
                          setDataLimit(numValue);
                        } else {
                          setDataLimit(void 0);
                        }
                      }
                    }
                  },
                  onBlur: () => {
                    const rawValue = dataLimitInputRef.current.trim();
                    if (rawValue === "" || rawValue === "." || rawValue === "0") {
                      dataLimitInputRef.current = "";
                      setDataLimit(void 0);
                    } else {
                      const numValue = parseFloat(rawValue);
                      if (!isNaN(numValue) && numValue >= 0) {
                        const finalValue = numValue;
                        dataLimitInputRef.current = finalValue > 0 ? String(finalValue) : "";
                        setDataLimit(finalValue > 0 ? finalValue : void 0);
                      } else {
                        dataLimitInputRef.current = "";
                        setDataLimit(void 0);
                      }
                    }
                  },
                  className: "pr-12"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground", children: "GB" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: dataOperation === "add" ? t("bulk.addDataLimit", { defaultValue: "Add Data Limit" }) : t("bulk.subtractDataLimit", { defaultValue: "Subtract Data Limit" }) })
        ] }) }),
        operationType === "expire" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 sm:space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "expire-amount", className: "flex items-center gap-1.5 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            t("bulk.expireDate", { defaultValue: "Expire Date" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              ToggleGroup,
              {
                type: "single",
                value: expireOperation,
                onValueChange: (value) => value && setExpireOperation(value),
                className: "w-full rounded-md border p-1 sm:w-auto",
                defaultValue: "add",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "add", "aria-label": "Add", className: "flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground sm:flex-initial", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "subtract", "aria-label": "Subtract", className: "flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground sm:flex-initial", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 sm:max-w-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "expire-amount",
                  type: "number",
                  placeholder: t("bulk.expire.placeholder", { defaultValue: "Enter amount" }),
                  value: expireAmount === void 0 ? "" : expireAmount,
                  onChange: (e) => {
                    const value = Number.parseFloat(e.target.value);
                    if (!isNaN(value) && value > 0) setExpireAmount(value);
                    else if (e.target.value === "") setExpireAmount(void 0);
                  },
                  step: "1",
                  min: "1",
                  className: "pr-20"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: expireUnit, onValueChange: (v) => setExpireUnit(v), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "pointer-events-auto absolute right-0 top-0 h-full w-20 rounded-l-none border-l-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "seconds", children: t("time.seconds", { defaultValue: "Seconds" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "minutes", children: t("time.mins", { defaultValue: "Minutes" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hours", children: t("time.hours", { defaultValue: "Hours" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "days", children: t("time.days", { defaultValue: "Days" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "months", children: t("time.months", { defaultValue: "Months" }) })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: expireOperation === "add" ? t("bulk.addExpiry", { defaultValue: "Add to Expiry" }) : t("bulk.subtractExpiry", { defaultValue: "Subtract from Expiry" }) })
        ] }) }),
        operationType === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 sm:space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "h-3.5 w-3.5 text-muted-foreground" }),
              t("bulk.groups", { defaultValue: "Groups" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              ToggleGroup,
              {
                type: "single",
                value: groupsOperation,
                onValueChange: (value) => value && setGroupsOperation(value),
                className: "inline-flex w-full rounded-md border p-1 sm:w-auto",
                defaultValue: "add",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroupItem, { value: "add", "aria-label": "Add", className: "flex-1 px-3 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground sm:flex-initial sm:px-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-xs sm:ml-2 sm:text-sm", children: t("bulk.addGroups", { defaultValue: "Add Groups" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroupItem, { value: "remove", "aria-label": "Remove", className: "flex-1 px-3 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground sm:flex-initial sm:px-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-xs sm:ml-2 sm:text-sm", children: t("bulk.removeGroups", { defaultValue: "Remove Groups" }) })
                  ] })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                groupsOperation === "add" ? t("bulk.groupsToAdd", { defaultValue: "Groups to Add" }) : t("bulk.groupsToRemove", { defaultValue: "Groups to Remove" })
              ] }),
              filteredGroups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    const allSelected = filteredGroups.every((group) => selectedGroups.includes(group.id));
                    if (allSelected) {
                      setSelectedGroups([]);
                    } else {
                      setSelectedGroups(filteredGroups.map((group) => group.id));
                    }
                  },
                  className: "h-8 flex-shrink-0 text-xs sm:text-sm",
                  children: filteredGroups.every((group) => selectedGroups.includes(group.id)) ? t("deselectAll") : t("selectAll")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { className: "rounded-md border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: t("bulk.searchGroups", { defaultValue: "Search groups..." }), value: groupCommandSearch, onValueChange: setGroupCommandSearch }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: t("noResults", { defaultValue: "No results found." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CommandGroup, { dir: "ltr", className: "max-h-40 overflow-auto", children: filteredGroups.filter((group) => !groupCommandSearch || group.name.toLowerCase().includes(groupCommandSearch.toLowerCase())).map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                CommandItem,
                {
                  onSelect: () => {
                    if (selectedGroups.includes(group.id)) {
                      setSelectedGroups(selectedGroups.filter((id) => id !== group.id));
                    } else {
                      setSelectedGroups([...selectedGroups, group.id]);
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border", selectedGroups.includes(group.id) ? "border-primary bg-primary" : "border-muted"), children: selectedGroups.includes(group.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3 w-3 text-primary-foreground" }) }),
                    group.name
                  ]
                },
                group.id
              )) })
            ] }),
            selectedGroups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1 sm:gap-2.5", children: filteredGroups.filter((group) => selectedGroups.includes(group.id)).map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1.5 px-2.5 py-1", children: [
              group.name,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                X,
                {
                  className: "h-3 w-3 cursor-pointer transition-colors hover:text-destructive",
                  onClick: () => {
                    setSelectedGroups(selectedGroups.filter((id) => id !== group.id));
                  }
                }
              )
            ] }, group.id)) })
          ] })
        ] })
      ] }),
      currentStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: isApplyToAll && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-blue-200 bg-blue-50 p-2.5 dark:border-blue-800 dark:bg-blue-950/20 sm:p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-600 dark:text-blue-400 sm:h-4 sm:w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium leading-relaxed text-blue-800 dark:text-blue-200 sm:text-sm", children: t("bulk.noSelectionInfo", { defaultValue: "No targets selected. This operation will apply to ALL users, admins, and groups in the system." }) }) })
        ] }) }) }),
        (operationType === "data" || operationType === "expire") && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: t("status", { defaultValue: "Status" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: selectedStatuses.length > 0 ? selectedStatuses.map((status) => {
            const option = statusOptions.find((opt) => opt.value === status);
            if (!option) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 rounded-md bg-muted/80 px-2 py-1 text-sm", children: [
              option.label,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "hover:text-destructive",
                  onClick: () => {
                    setSelectedStatuses(selectedStatuses.filter((s) => s !== status));
                  },
                  children: "x"
                }
              )
            ] }, status);
          }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t("hostsDialog.noStatus", { defaultValue: "No status selected" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: "",
              onValueChange: (value) => {
                if (!value) return;
                if (!selectedStatuses.includes(value)) {
                  setSelectedStatuses([...selectedStatuses, value]);
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectStatus", { defaultValue: "Select status" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-background", children: statusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectItem,
                  {
                    value: option.value,
                    className: "flex cursor-pointer items-center gap-2 px-4 py-2 focus:bg-accent",
                    disabled: selectedStatuses.includes(option.value),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: selectedStatuses.includes(option.value), className: "h-4 w-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: option.label })
                    ] })
                  },
                  option.value
                )) })
              ]
            }
          ),
          selectedStatuses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => setSelectedStatuses([]), className: "w-full", children: t("hostsDialog.clearAllStatuses", { defaultValue: "Clear all statuses" }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3", children: [
          operationType === "groups" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectorPanel,
            {
              icon: UsersRound,
              title: t("bulk.selectHasGroups", { defaultValue: "Select Has Groups" }),
              items: filteredHasGroups,
              selected: selectedHasGroups,
              setSelected: setSelectedHasGroups,
              search: hasGroupSearch,
              setSearch: setHasGroupSearch,
              searchPlaceholder: t("bulk.searchHasGroups", { defaultValue: "Search has groups..." }),
              selectAllLabel: t("selectAll", { defaultValue: "Select All" }),
              deselectAllLabel: t("deselectAll", { defaultValue: "Deselect All" }),
              itemLabelKey: "name",
              itemValueKey: "id",
              searchKey: "name",
              t,
              isLoading: groupsLoading,
              description: groupsOperation === "remove" ? t("bulk.hasGroupsDescription", { defaultValue: "Users must have these groups to be affected" }) : t("bulk.hasGroupsDescriptionAdd", { defaultValue: "Filter users who have these groups" }),
              isRequired: groupsOperation === "remove",
              hasError: groupsOperation === "remove" && selectedHasGroups.length === 0
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectorPanel,
            {
              icon: UsersRound,
              title: t("bulk.selectGroups", { defaultValue: "Select Groups" }),
              items: filteredGroups,
              selected: selectedGroups,
              setSelected: setSelectedGroups,
              search: groupSearch,
              setSearch: setGroupSearch,
              searchPlaceholder: t("bulk.searchGroups", { defaultValue: "Search groups..." }),
              selectAllLabel: t("selectAll", { defaultValue: "Select All" }),
              deselectAllLabel: t("deselectAll", { defaultValue: "Deselect All" }),
              itemLabelKey: "name",
              itemValueKey: "id",
              searchKey: "name",
              t,
              isLoading: groupsLoading
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectorPanel,
            {
              icon: User,
              title: t("bulk.selectUsers", { defaultValue: "Select Users" }),
              items: usersData?.users || [],
              selected: selectedUsers,
              setSelected: setSelectedUsers,
              search: userSearch,
              setSearch: setUserSearch,
              searchPlaceholder: t("bulk.searchUsers", { defaultValue: "Search users..." }),
              selectAllLabel: t("selectAll", { defaultValue: "Select All" }),
              deselectAllLabel: t("deselectAll", { defaultValue: "Deselect All" }),
              itemLabelKey: "username",
              itemValueKey: "id",
              searchKey: "username",
              t,
              isLoading: usersLoading
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectorPanel,
            {
              icon: Shield,
              title: t("bulk.selectAdmins", { defaultValue: "Select Admins" }),
              items: adminsData?.admins || [],
              selected: selectedAdmins,
              setSelected: setSelectedAdmins,
              search: adminSearch,
              setSearch: setAdminSearch,
              searchPlaceholder: t("bulk.searchAdmins", { defaultValue: "Search admins..." }),
              selectAllLabel: t("selectAll", { defaultValue: "Select All" }),
              deselectAllLabel: t("deselectAll", { defaultValue: "Deselect All" }),
              itemLabelKey: "username",
              itemValueKey: "id",
              searchKey: "username",
              t,
              isLoading: adminsLoading
            }
          )
        ] })
      ] }),
      currentStep === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 rounded-lg bg-muted/50 p-3 sm:space-y-3 sm:p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium", children: t("bulk.operationSummary", { defaultValue: "Operation Summary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("bulk.operationType", { defaultValue: "Operation Type" }),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                operationType === "proxy" && t("bulk.proxySettings"),
                operationType === "data" && t("bulk.dataLimit"),
                operationType === "expire" && t("bulk.expireDate"),
                operationType === "groups" && t("bulk.groups")
              ] })
            ] }),
            operationType === "proxy" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("bulk.settings", { defaultValue: "Settings" }),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("bulk.flowMethod", { flow: selectedFlow === "none" || !selectedFlow ? t("none") : selectedFlow, method: selectedMethod || t("none") }) })
            ] }),
            operationType === "data" && dataLimit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("bulk.settings", { defaultValue: "Settings" }),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", children: [
                dataOperation === "add" ? "+" : "-",
                formatBytes(gbToBytes(dataLimit))
              ] })
            ] }),
            operationType === "expire" && expireSeconds && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("bulk.settings", { defaultValue: "Settings" }),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                expireOperation === "add" ? "+" : "-",
                formatTime(expireSeconds)
              ] })
            ] }),
            (operationType === "data" || operationType === "expire") && selectedStatuses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("status", { defaultValue: "Status" }),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: selectedStatuses.map((status) => t(`status.${status}`, { defaultValue: status.replace(/_/g, " ") })).join(", ") })
            ] }),
            operationType === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  t("bulk.settings", { defaultValue: "Settings" }),
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: groupsOperation === "remove" ? "destructive" : "default", children: groupsOperation === "add" ? t("bulk.addGroups") : t("bulk.removeGroups") })
              ] }),
              selectedHasGroups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  t("bulk.hasGroups", { defaultValue: "Has Groups" }),
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
                  selectedHasGroups.length,
                  " ",
                  t("bulk.selected", { defaultValue: "selected" })
                ] })
              ] }),
              selectedGroups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  t("bulk.groups", { defaultValue: "Groups" }),
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
                  selectedGroups.length,
                  " ",
                  t("bulk.selected", { defaultValue: "selected" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("bulk.targets", { defaultValue: "Targets" }),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isApplyToAll ? t("bulk.allTargets", { defaultValue: "All users, admins, and groups" }) : t("bulk.targetsCount", { count: displayTargetCount }) })
            ] })
          ] })
        ] }),
        isApplyToAll && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-yellow-200 bg-yellow-50 p-2.5 dark:border-yellow-800 dark:bg-yellow-950/20 sm:p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-yellow-600 dark:text-yellow-400 sm:h-4 sm:w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-medium text-yellow-800 dark:text-yellow-200 sm:text-sm", children: t("bulk.warning", { defaultValue: "Warning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-relaxed text-yellow-700 dark:text-yellow-300 sm:text-sm", children: t("bulk.applyToAllWarning", { defaultValue: "This operation will apply to ALL users, admins, and groups in the system." }) })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col-reverse gap-2 px-2 sm:flex-row sm:px-0", currentStep === 1 ? "justify-end" : "justify-between"), children: [
      currentStep > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: prevStep, size: "sm", className: "w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("h-4 w-4", isRTL ? "ml-1.5 rotate-180" : "mr-1.5") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("previous", { defaultValue: "Previous" }) })
      ] }),
      currentStep < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: nextStep, disabled: !canProceedToNext(), size: "sm", className: "w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("next", { defaultValue: "Next" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("h-4 w-4", isRTL ? "mr-1.5 rotate-180" : "ml-1.5") })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoaderButton,
        {
          onClick: handleApply,
          disabled: !canProceedToNext(),
          isLoading: proxyMutation.isPending || dataMutation.isPending || expireMutation.isPending || addGroupsMutation.isPending || removeGroupsMutation.isPending,
          loadingText: t("applying", { defaultValue: "Applying..." }),
          size: "sm",
          className: "w-full sm:w-auto",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: cn("h-4 w-4", isRTL ? "ml-1.5" : "mr-1.5") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("bulk.applyOperation", { defaultValue: "Apply Operation" }) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: showConfirmDialog, onOpenChange: setShowConfirmDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("bulk.confirmOperation", { defaultValue: "Confirm Operation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: isApplyToAll ? t("bulk.confirmApplyAll", { defaultValue: "Are you sure you want to apply this operation to ALL users, admins, and groups?" }) : t("bulk.confirmApplyTargets", { count: totalTargets, defaultValue: "Are you sure you want to apply this operation to {{count}} target(s)?" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: t("cancel", { defaultValue: "Cancel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialogAction,
          {
            onClick: confirmApply,
            disabled: proxyMutation.isPending || dataMutation.isPending || expireMutation.isPending || addGroupsMutation.isPending || removeGroupsMutation.isPending,
            children: proxyMutation.isPending || dataMutation.isPending || expireMutation.isPending || addGroupsMutation.isPending || removeGroupsMutation.isPending ? t("applying", { defaultValue: "Applying..." }) : t("confirm", { defaultValue: "Confirm" })
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  BulkFlow as B
};
//# sourceMappingURL=bulk-flow-t1wCS9Jl.js.map
