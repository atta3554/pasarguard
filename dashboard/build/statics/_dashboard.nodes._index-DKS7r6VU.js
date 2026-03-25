import { j as jsxRuntimeExports, r as reactExports, b as React } from "./react-D6OUsQqF.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-5ZQOfa_i.js";
import { f as createLucideIcon, a as useDirDetection, c as cn, _ as useUserOnlineStats, $ as useUserOnlineIpList, t as toast, L as LoaderCircle, a0 as useUpdateCore, q as queryClient, a1 as useUpdateGeofiles, a2 as useRemoveNode, a3 as useSyncNode, a4 as useReconnectNode, a5 as useResetNodeUsage, a6 as useUpdateNode, a7 as useGetCoresSimple, a8 as NodeStatus, a9 as useModifyNode, aa as useGetNodes } from "./index-C_i3x-Gf.js";
import { c as TooltipProvider, T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "./tooltip-BT7me4NQ.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { u as useQuery } from "./react-query-DMC2nZO-.js";
import { P as Progress } from "./progress-CZn3joiw.js";
import { f as formatBytes } from "./formatByte-CB667FGk.js";
import { s as statusColors, P as Pagination, a as PaginationContent, b as PaginationItem, c as PaginationPrevious, d as PaginationEllipsis, e as PaginationLink, f as PaginationNext } from "./pagination-CoM3MD2Q.js";
import { u as useTranslation, i as instance } from "./i18n-C0-IFBIH.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, e as DropdownMenuSeparator } from "./dropdown-menu-B4MHnVyu.js";
import { B as Button } from "./button-BOH66nN-.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { u as useDebouncedSearch } from "./use-debounced-search-CgdykSdk.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-BlwcMUxd.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { S as ScrollArea } from "./scroll-area-CNtShxK0.js";
import { A as ArrowLeft } from "./arrow-left-DMT5rtcc.js";
import { A as Activity } from "./activity-BJu46gCh.js";
import { S as Search } from "./search-DGfkalst.js";
import { R as RefreshCw } from "./refresh-cw-BfHhC0kO.js";
import { C as CircleAlert } from "./circle-alert-40y1kNqq.js";
import { U as Users } from "./users-CleGz3MO.js";
import { E as Eye } from "./eye-BsrIbFi5.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-GailCAaU.js";
import { E as ExternalLink } from "./external-link-2itsyEEI.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-Cj-SnnWR.js";
import { P as Pencil } from "./pencil-CGe897XJ.js";
import { P as Power } from "./power-DV897bjg.js";
import { R as RotateCcw } from "./rotate-ccw-DRnRH3H4.js";
import { W as Wifi } from "./wifi-YUIK0HhE.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import { S as Server } from "./server-B7Dz_76B.js";
import { N as NodeModal, n as nodeFormDefaultValues, a as nodeFormSchema } from "./node-form-BHepv1tn.js";
import { f as useController, o as objectType, n as numberType, a as arrayType, c as nativeEnumType, u as useForm } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { V as ViewToggle, u as usePersistedViewMode, L as ListGenerator } from "./use-persisted-view-mode-LYo0S7-V.js";
import { X } from "./x-C6aLLO-Y.js";
import { F as Filter } from "./filter-Cj-9RYXq.js";
import { b as FormItem, e as FormMessage, F as Form, a as FormField, c as FormLabel, d as FormControl } from "./form-BMBIU5T8.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { A as Avatar, a as AvatarFallback } from "./avatar-D4N4v88d.js";
import { C as Command, a as CommandInput, e as CommandList, b as CommandEmpty, d as CommandItem } from "./command-AnChkD8Y.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { C as Check } from "./check-ayw17ogi.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
import "./radix-3Azqn93X.js";
import "./clock-BCHdn894.js";
import "./chevron-left-Bre8eEMe.js";
import "./chevron-right-DkXHvvEa.js";
import "./circle-CMQZw6eB.js";
import "./debounce-DDhqqvFm.js";
import "./accordion-CvI_xa9s.js";
import "./switch-BtwGcSyQ.js";
import "./textarea-DCwXPG8n.js";
import "./use-dynamic-errors-C0Fignr8.js";
import "./isEmptyObject-Ce3qPfrc.js";
import "./settings-ByQKCi6u.js";
import "./v4-CDEC0ny7.js";
import "./toggle-group-DO2v6P71.js";
import "./sortable.esm-BR-nak9Z.js";
import "./label-D6GrbpFd.js";
const ArrowDown = createLucideIcon("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const ArrowUp = createLucideIcon("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const Link2 = createLucideIcon("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
const Map = createLucideIcon("Map", [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
]);
const Package = createLucideIcon("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
]);
const GITHUB_API_URL$1 = "https://api.github.com/repos/XTLS/Xray-core/releases?per_page=10";
const CACHE_KEY$1 = "pg_xray_releases";
const CACHE_DURATION$1 = 10 * 60 * 1e3;
function compareVersions$1(current, latest) {
  const currentParts = current.replace(/^v/, "").split(".").map(Number);
  const latestParts = latest.replace(/^v/, "").split(".").map(Number);
  for (let i = 0; i < Math.max(currentParts.length, latestParts.length); i++) {
    const curr = currentParts[i] || 0;
    const lat = latestParts[i] || 0;
    if (curr < lat) return -1;
    if (curr > lat) return 1;
  }
  return 0;
}
function getCached$1() {
  try {
    const cached = localStorage.getItem(CACHE_KEY$1);
    if (!cached) return null;
    return JSON.parse(cached);
  } catch {
    return null;
  }
}
function setCache$1(releases) {
  try {
    const data = { releases, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY$1, JSON.stringify(data));
  } catch {
    return;
  }
}
async function fetchXrayReleases() {
  const cached = getCached$1();
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION$1) {
    return cached.releases;
  }
  try {
    const response = await fetch(GITHUB_API_URL$1, {
      referrerPolicy: "no-referrer",
      credentials: "omit",
      headers: { Accept: "application/vnd.github.v3+json" }
    });
    if (!response.ok) {
      return cached?.releases || [];
    }
    const data = await response.json();
    const releases = data.map((release) => ({
      version: release.tag_name?.replace(/^v/, "") || "",
      url: release.html_url || ""
    })).filter((r) => r.version);
    if (releases.length > 0) setCache$1(releases);
    return releases;
  } catch {
    return cached?.releases || [];
  }
}
function useXrayReleases() {
  const { data, isLoading } = useQuery({
    queryKey: ["github-xray-releases"],
    queryFn: fetchXrayReleases,
    staleTime: CACHE_DURATION$1,
    gcTime: CACHE_DURATION$1 * 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: CACHE_DURATION$1,
    retry: 1
  });
  const releases = data || [];
  const latestVersion = releases[0]?.version || null;
  const releaseUrl = releases[0]?.url || null;
  const hasUpdate = (currentVersion) => {
    if (!currentVersion || !latestVersion) return false;
    const cleanCurrent = currentVersion.replace(/^v/, "");
    const cleanLatest = latestVersion.replace(/^v/, "");
    return compareVersions$1(cleanCurrent, cleanLatest) < 0;
  };
  return {
    latestVersion,
    releaseUrl,
    versions: releases,
    isLoading,
    hasUpdate
  };
}
const GITHUB_API_URL = "https://api.github.com/repos/PasarGuard/node/releases/latest";
const CACHE_KEY = "pg_node_release";
const CACHE_DURATION = 10 * 60 * 1e3;
function compareVersions(current, latest) {
  const currentParts = current.replace(/^v/, "").split(".").map(Number);
  const latestParts = latest.replace(/^v/, "").split(".").map(Number);
  for (let i = 0; i < Math.max(currentParts.length, latestParts.length); i++) {
    const curr = currentParts[i] || 0;
    const lat = latestParts[i] || 0;
    if (curr < lat) return -1;
    if (curr > lat) return 1;
  }
  return 0;
}
function getCached() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    return JSON.parse(cached);
  } catch {
    return null;
  }
}
function setCache(version, url) {
  try {
    const data = { version, url, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    return;
  }
}
async function fetchLatestNodeRelease() {
  const cached = getCached();
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return { version: cached.version, url: cached.url };
  }
  try {
    const response = await fetch(GITHUB_API_URL, {
      referrerPolicy: "no-referrer",
      credentials: "omit",
      headers: { Accept: "application/vnd.github.v3+json" }
    });
    if (!response.ok) {
      return cached ? { version: cached.version, url: cached.url } : null;
    }
    const data = await response.json();
    const version = data.tag_name?.replace(/^v/, "") || "";
    const url = data.html_url || "";
    if (version) setCache(version, url);
    return { version, url };
  } catch {
    return cached ? { version: cached.version, url: cached.url } : null;
  }
}
function useNodeReleases() {
  const { data, isLoading } = useQuery({
    queryKey: ["github-node-release-check"],
    queryFn: fetchLatestNodeRelease,
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION * 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: CACHE_DURATION,
    retry: 1
  });
  const hasUpdate = (currentVersion) => {
    if (!currentVersion || !data?.version) return false;
    const cleanCurrent = currentVersion.replace(/^v/, "");
    const cleanLatest = data.version.replace(/^v/, "");
    return compareVersions(cleanCurrent, cleanLatest) < 0;
  };
  return {
    latestVersion: data?.version || null,
    releaseUrl: data?.url || null,
    isLoading,
    hasUpdate
  };
}
function NodeUsageDisplay({ node }) {
  const { t } = useTranslation();
  const isRTL = useDirDetection() === "rtl";
  const uplink = node.uplink || 0;
  const downlink = node.downlink || 0;
  const totalUsed = uplink + downlink;
  const lifetimeUplink = node.lifetime_uplink || 0;
  const lifetimeDownlink = node.lifetime_downlink || 0;
  const totalLifetime = lifetimeUplink + lifetimeDownlink;
  const dataLimit = node.data_limit;
  const isUnlimited = dataLimit === null || dataLimit === void 0 || dataLimit === 0;
  const progressValue = isUnlimited || !dataLimit ? 0 : Math.min(totalUsed / dataLimit * 100, 100);
  const getProgressColor = () => {
    if (isUnlimited) return "";
    if (progressValue >= 90) return statusColors.limited.sliderColor;
    if (progressValue >= 70) return statusColors.expired.sliderColor;
    return statusColors.active.sliderColor;
  };
  if (totalUsed === 0 && !dataLimit && totalLifetime === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "-" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("space-y-1.5", isRTL ? "text-right" : "text-left"), children: [
    !isUnlimited && dataLimit && /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progressValue, className: "h-1", indicatorClassName: getProgressColor() }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1.5", isRTL && "flex-row-reverse"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: cn("text-xs font-medium text-foreground", isRTL && "justify-end"), children: formatBytes(totalUsed) }),
        !isUnlimited && dataLimit && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-xs text-muted-foreground", children: formatBytes(dataLimit) })
        ] })
      ] }),
      totalLifetime > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
          t("usersTable.total", { defaultValue: "Total" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-[10px] font-medium text-muted-foreground", children: formatBytes(totalLifetime) })
      ] })
    ] }),
    (uplink > 0 || downlink > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-wrap items-center gap-x-3 gap-y-1", isRTL ? "justify-end" : "justify-start"), children: [
      uplink > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1", isRTL && "flex-row-reverse"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-blue-500 dark:text-blue-400", strokeWidth: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-[10px] font-medium text-blue-500 dark:text-blue-400", children: formatBytes(uplink) })
      ] }),
      downlink > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1", isRTL && "flex-row-reverse"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-emerald-500 dark:text-emerald-400", strokeWidth: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-[10px] font-medium text-emerald-500 dark:text-emerald-400", children: formatBytes(downlink) })
      ] })
    ] })
  ] });
}
const UserStatsCard = React.memo(({ username, stats, onViewIPs }) => {
  const { t } = useTranslation();
  const activeProtocols = reactExports.useMemo(() => {
    return Object.keys(stats).filter((proto) => stats[proto] > 0);
  }, [stats]);
  const handleViewIPs = reactExports.useCallback(() => {
    onViewIPs(username);
  }, [onViewIPs, username]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "transition-colors hover:bg-accent/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-green-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-all", dir: "ltr", children: username })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: activeProtocols.map((protocol) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: stats[protocol] }) }, protocol)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: handleViewIPs, className: "h-6 self-start text-xs sm:self-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "mr-1 h-3 w-3" }),
        t("nodeModal.onlineStats.viewIPs", { defaultValue: "View IPs" })
      ] }) })
    ] }) })
  ] });
});
UserStatsCard.displayName = "UserStatsCard";
const IPListItem = React.memo(({ ip, timeStrings }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded bg-accent/40 p-2 transition-colors hover:bg-accent/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-all font-mono text-sm", dir: "ltr", children: ip }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: timeStrings.map((timeString, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-muted px-1.5 py-0.5 text-xs", dir: "ltr", children: timeString }, index)) })
  ] }) });
});
IPListItem.displayName = "IPListItem";
const LoadingState = React.memo(() => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-32 flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", dir, children: t("loading", { defaultValue: "Loading..." }) })
  ] });
});
LoadingState.displayName = "LoadingState";
const ErrorState = React.memo(({ message }) => {
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-32 flex-col items-center justify-center gap-2 px-4 text-center text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", dir, children: message })
  ] });
});
ErrorState.displayName = "ErrorState";
const EmptyState = React.memo(({ message }) => {
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-32 flex-col items-center justify-center gap-2 px-4 text-center text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", dir, children: message })
  ] });
});
EmptyState.displayName = "EmptyState";
function UserOnlineStatsModal({ isOpen, onOpenChange, nodeId, nodeName }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const [specificUsername, setSpecificUsername] = reactExports.useState("");
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const [viewingIPs, setViewingIPs] = reactExports.useState(null);
  const { search: searchTerm, debouncedSearch: debouncedSearchTerm, setSearch: setSearchTerm } = useDebouncedSearch("", 500);
  reactExports.useEffect(() => {
    if (debouncedSearchTerm?.trim()) {
      setSpecificUsername(debouncedSearchTerm.trim());
    }
  }, [debouncedSearchTerm]);
  reactExports.useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setSpecificUsername("");
      setViewingIPs(null);
      setRefreshing(false);
    }
  }, [isOpen, setSearchTerm]);
  const userStatsQueryOptions = reactExports.useMemo(
    () => ({
      query: {
        enabled: !!(isOpen && nodeId && specificUsername),
        refetchInterval: (query) => {
          if (!isOpen || query.state.error) {
            return false;
          }
          return 1e4;
        }
      }
    }),
    [isOpen, nodeId, specificUsername]
  );
  const userIPsQueryOptions = reactExports.useMemo(
    () => ({
      query: {
        enabled: !!(isOpen && nodeId && viewingIPs),
        refetchInterval: (query) => {
          if (!isOpen || query.state.error) {
            return false;
          }
          return 1e4;
        }
      }
    }),
    [isOpen, nodeId, viewingIPs]
  );
  const { data: userStats, isLoading: isLoadingUserStats, error: userStatsError, refetch: refetchUserStats } = useUserOnlineStats(nodeId || 0, specificUsername, userStatsQueryOptions);
  const { data: userIPs, error: userIPsError, refetch: refetchIPs } = useUserOnlineIpList(nodeId || 0, viewingIPs || "", userIPsQueryOptions);
  const handleUserStatsError = reactExports.useCallback(
    (error) => {
      const errorMessage = error?.message || "Unknown error occurred";
      if (errorMessage.includes("User not found")) {
        toast.error(
          t("nodeModal.onlineStats.userNotFound", {
            defaultValue: "User not found or not online",
            username: specificUsername
          })
        );
      } else {
        toast.error(
          t("nodeModal.onlineStats.errorLoading", {
            defaultValue: "Error loading user stats",
            message: errorMessage
          })
        );
      }
    },
    [t, specificUsername]
  );
  const handleUserIPsError = reactExports.useCallback(
    (error) => {
      const errorMessage = error?.message || "Unknown error occurred";
      if (errorMessage.includes("User not found")) {
        toast.error(
          t("nodeModal.onlineStats.userNotFound", {
            defaultValue: "User not found or not online",
            username: viewingIPs
          })
        );
      } else {
        toast.error(
          t("nodeModal.onlineStats.errorLoadingIPs", {
            defaultValue: "Error loading user IP addresses",
            message: errorMessage
          })
        );
      }
    },
    [t, viewingIPs]
  );
  reactExports.useEffect(() => {
    if (userStatsError && isOpen) {
      handleUserStatsError(userStatsError);
    }
  }, [userStatsError, isOpen, handleUserStatsError]);
  reactExports.useEffect(() => {
    if (userIPsError && isOpen) {
      handleUserIPsError(userIPsError);
    }
  }, [userIPsError, isOpen, handleUserIPsError]);
  const handleSearch = reactExports.useCallback(() => {
    if (!searchTerm.trim()) {
      toast.error(t("nodeModal.onlineStats.enterUsername", { defaultValue: "Please enter a username" }));
      return;
    }
    setSpecificUsername(searchTerm.trim());
  }, [searchTerm, t]);
  const handleSearchInput = reactExports.useCallback((value) => {
    setSearchTerm(value);
  }, [setSearchTerm]);
  const handleRefresh = reactExports.useCallback(async () => {
    setRefreshing(true);
    try {
      const promises = [];
      if (specificUsername) {
        promises.push(refetchUserStats());
      }
      if (viewingIPs) {
        promises.push(refetchIPs());
      }
      await Promise.all(promises);
      toast.success(t("nodeModal.onlineStats.refreshed", { defaultValue: "Data refreshed successfully" }));
    } catch (error) {
      toast.error(t("nodeModal.onlineStats.refreshFailed", { defaultValue: "Failed to refresh data" }));
    } finally {
      setRefreshing(false);
    }
  }, [specificUsername, viewingIPs, refetchUserStats, refetchIPs, t]);
  const handleViewIPs = reactExports.useCallback((username) => {
    setViewingIPs(username);
  }, []);
  const handleBackToStats = reactExports.useCallback(() => {
    setViewingIPs(null);
  }, []);
  const handleKeyDown = reactExports.useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );
  const filteredStats = reactExports.useMemo(() => {
    return userStats && typeof userStats === "object" ? userStats : {};
  }, [userStats]);
  const transformedIPData = reactExports.useMemo(() => {
    if (!userIPs || typeof userIPs !== "object") return null;
    const transformedData = {};
    if (Array.isArray(userIPs)) {
      userIPs.forEach((ipObj) => {
        if (typeof ipObj === "object" && ipObj !== null) {
          Object.entries(ipObj).forEach(([ip, timestamp]) => {
            if (!transformedData[ip]) transformedData[ip] = [];
            let tsNum = Number(timestamp);
            if (tsNum < 1e12) tsNum = tsNum * 1e3;
            const date = new Date(tsNum);
            const timeString = date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false
            });
            transformedData[ip].push(timeString);
          });
        }
      });
    } else if (typeof userIPs === "object" && Object.keys(userIPs).length === 1 && !isNaN(Number(Object.keys(userIPs)[0]))) {
      const onlyKey = Object.keys(userIPs)[0];
      const ipMap = userIPs[onlyKey];
      if (typeof ipMap === "object" && ipMap !== null) {
        Object.entries(ipMap).forEach(([ip, timestamp]) => {
          if (!transformedData[ip]) transformedData[ip] = [];
          let tsNum = Number(timestamp);
          if (tsNum < 1e12) tsNum = tsNum * 1e3;
          const date = new Date(tsNum);
          const timeString = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          });
          transformedData[ip].push(timeString);
        });
      }
    }
    return transformedData;
  }, [userIPs]);
  const renderIPList = reactExports.useCallback(() => {
    if (!transformedIPData) {
      if (userIPs) {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: handleBackToStats, className: "mb-2 self-start px-0 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: cn("h-4 w-4", dir === "rtl" && "rotate-180") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, children: t("nodeModal.onlineStats.backToStats", { defaultValue: "Back to Stats" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[300px] sm:h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-sm font-medium", children: "Raw Data (Debug):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-auto rounded bg-muted p-2 text-xs", children: JSON.stringify(userIPs, null, 2) })
          ] }) })
        ] });
      }
      return null;
    }
    const maxItems = 100;
    const items = Object.entries(transformedIPData).slice(0, maxItems);
    const hasMore = Object.keys(transformedIPData).length > maxItems;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: handleBackToStats, className: "mb-2 self-start px-0 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: cn("h-4 w-4", dir === "rtl" && "rotate-180") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, children: t("nodeModal.onlineStats.backToStats", { defaultValue: "Back to Stats" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollArea, { className: "h-[300px] sm:h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2 p-1 lg:grid-cols-2", children: items.map(([ip, timeStrings]) => /* @__PURE__ */ jsxRuntimeExports.jsx(IPListItem, { ip, timeStrings }, ip)) }),
        hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2 text-center text-xs text-muted-foreground", children: t("nodeModal.onlineStats.showingFirst", {
          defaultValue: "Showing first {{count}} IP addresses",
          count: maxItems
        }) })
      ] })
    ] });
  }, [transformedIPData, userIPs, handleBackToStats, dir, t]);
  const renderUserStats = reactExports.useCallback(() => {
    if (isLoadingUserStats) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingState, {});
    }
    if (userStatsError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorState, { message: t("nodeModal.onlineStats.errorLoading", { defaultValue: "Error loading user stats" }) });
    }
    if (!filteredStats || Object.keys(filteredStats).length === 0) {
      const message = specificUsername ? t("nodeModal.onlineStats.userNotOnline", { defaultValue: "User is not online" }) : t("nodeModal.onlineStats.searchUser", { defaultValue: "Search for a user to view their online stats" });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserStatsCard, { username: specificUsername, stats: filteredStats, nodeId: nodeId || 0, onViewIPs: handleViewIPs }) });
  }, [isLoadingUserStats, userStatsError, filteredStats, specificUsername, nodeId, handleViewIPs, t]);
  const dialogTitle = reactExports.useMemo(() => {
    return viewingIPs ? t("nodeModal.onlineStats.ipListTitle", {
      defaultValue: "IP Addresses for {{username}}",
      username: viewingIPs
    }) : t("nodeModal.onlineStats.title", { defaultValue: "Online User Statistics" });
  }, [viewingIPs, t]);
  const searchPlaceholder = reactExports.useMemo(() => {
    return t("nodeModal.onlineStats.searchPlaceholder", {
      defaultValue: "Enter username to search..."
    });
  }, [t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "flex h-[90vh] max-w-full flex-col sm:h-[600px] sm:max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: cn("flex items-center gap-2 text-xl font-semibold", dir === "rtl" && "sm:text-right"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dialogTitle })
      ] }),
      nodeName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-sm text-muted-foreground", dir === "rtl" && "sm:text-right"), children: t("nodeModal.onlineStats.nodeInfo", {
        defaultValue: "Node: {{nodeName}}",
        nodeName
      }) })
    ] }),
    !viewingIPs && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: searchPlaceholder, value: searchTerm, onChange: (e) => handleSearchInput(e.target.value), onKeyDown: handleKeyDown, className: "w-full", dir: "ltr" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSearch, disabled: !searchTerm.trim() || isLoadingUserStats, className: "flex-1 sm:flex-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: handleRefresh, disabled: refreshing || !specificUsername && !viewingIPs, className: "flex-1 sm:flex-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", refreshing && "animate-spin") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden", children: viewingIPs ? renderIPList() : renderUserStats() }),
    (specificUsername || viewingIPs) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t py-2 text-center text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "mr-1 inline h-3 w-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, children: t("nodeModal.onlineStats.autoRefresh", { defaultValue: "Auto-refreshing every 10 seconds" }) })
    ] })
  ] }) });
}
function UpdateCoreDialog({ node, isOpen, onOpenChange }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const [selectedVersion, setSelectedVersion] = reactExports.useState("latest");
  const [customVersion, setCustomVersion] = reactExports.useState("");
  const [versionMode, setVersionMode] = reactExports.useState("list");
  const [customVersionError, setCustomVersionError] = reactExports.useState("");
  const updateCoreMutation = useUpdateCore();
  const { latestVersion, releaseUrl, versions, isLoading: isLoadingReleases, hasUpdate } = useXrayReleases();
  const currentVersion = node.xray_version;
  const showUpdateBadge = currentVersion && latestVersion && hasUpdate(currentVersion);
  React.useEffect(() => {
    if (isOpen) {
      setSelectedVersion("latest");
      setCustomVersion("");
      setVersionMode("list");
      setCustomVersionError("");
    }
  }, [isOpen]);
  const validateCustomVersion = (version) => {
    if (!version.trim()) {
      setCustomVersionError(t("nodeModal.customVersionRequired", { defaultValue: "Version is required" }));
      return false;
    }
    const versionPattern = /^v?\d+\.\d+\.\d+(-[\w.]+)?$/;
    const cleanVersion = version.trim();
    if (!versionPattern.test(cleanVersion)) {
      setCustomVersionError(t("nodeModal.invalidVersionFormat", { defaultValue: "Invalid version format. Expected: vX.X.X or X.X.X" }));
      return false;
    }
    setCustomVersionError("");
    return true;
  };
  const handleCustomVersionChange = (value) => {
    setCustomVersion(value);
    if (customVersionError) {
      validateCustomVersion(value);
    }
  };
  const handleUpdate = async () => {
    try {
      let versionToSend;
      if (versionMode === "custom") {
        if (!validateCustomVersion(customVersion)) {
          return;
        }
        versionToSend = customVersion.trim();
      } else {
        versionToSend = selectedVersion;
        if (selectedVersion === "latest") {
          if (!latestVersion) {
            toast.error(t("nodeModal.updateCoreFailed", {
              message: "Latest version not available",
              defaultValue: "Failed to update Xray core: Latest version not available"
            }));
            return;
          }
          versionToSend = latestVersion;
        }
      }
      if (!versionToSend.startsWith("v")) {
        versionToSend = `v${versionToSend}`;
      }
      const response = await updateCoreMutation.mutateAsync({
        nodeId: node.id,
        data: {
          core_version: versionToSend
        }
      });
      const message = response?.detail || t("nodeModal.updateCoreSuccess", { defaultValue: "Xray core updated successfully" });
      toast.success(message);
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
      queryClient.invalidateQueries({ queryKey: [`/api/node/${node.id}`] });
    } catch (error) {
      toast.error(
        t("nodeModal.updateCoreFailed", {
          message: error?.message || "Unknown error",
          defaultValue: "Failed to update Xray core: {message}"
        })
      );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: cn("sm:max-w-[520px]", dir === "rtl" && "sm:text-right"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: cn("pb-2", dir === "rtl" && "text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn(dir === "rtl" && "text-right"), children: t("nodeModal.updateCoreTitle", { defaultValue: "Update Xray Core" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: cn(dir === "rtl" && "text-right"), children: t("nodeModal.updateCoreDescription", {
        nodeName: node.name,
        defaultValue: `Update Xray core for node «${node.name}»`
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/30 p-4 space-y-3", children: [
        currentVersion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-sm font-medium", dir === "rtl" && "text-right"), children: t("version.currentVersion", { defaultValue: "Current Version" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2", dir === "rtl" && "flex-row-reverse"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm", children: currentVersion }),
            showUpdateBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/20", children: t("nodeModal.updateAvailable", { defaultValue: "Update Available" }) })
          ] })
        ] }),
        latestVersion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-sm font-medium", dir === "rtl" && "text-right"), children: t("nodeModal.latest", { defaultValue: "Latest" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2", dir === "rtl" && "flex-row-reverse"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-semibold", children: latestVersion }),
            releaseUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: releaseUrl,
                target: "_blank",
                rel: "no-referrer",
                className: "text-muted-foreground hover:text-foreground transition-colors",
                onClick: (e) => e.stopPropagation(),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: versionMode, onValueChange: (value) => setVersionMode(value), className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: cn("grid w-full grid-cols-2", dir === "rtl" && "flex-row-reverse"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "list", className: cn("text-sm", dir === "rtl" && "text-right"), children: t("nodeModal.selectFromList", { defaultValue: "Select from List" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "custom", className: cn("text-sm", dir === "rtl" && "text-right"), children: t("nodeModal.customVersion", { defaultValue: "Custom Version" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "list", className: "mt-3", children: isLoadingReleases ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("rounded-md border p-8 text-center", dir === "rtl" && "text-right"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t("nodeModal.loadingReleases", { defaultValue: "Loading releases..." }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[200px] rounded-md border sm:h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 space-y-1", children: [
          latestVersion && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSelectedVersion("latest"),
              className: cn(
                "w-full rounded-md px-3 py-2.5 text-left text-sm transition-all",
                "hover:bg-accent hover:text-accent-foreground",
                "border-2",
                selectedVersion === "latest" ? "bg-accent text-accent-foreground border-primary" : "border-transparent",
                dir === "rtl" && "text-right"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2", dir === "rtl" && "flex-row-reverse"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t("nodeModal.latest", { defaultValue: "Latest" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] font-medium", children: latestVersion })
                ] }),
                selectedVersion === "latest" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-primary" })
              ] })
            }
          ),
          versions.filter((release) => release.version !== latestVersion).slice(0, 10).map((release) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSelectedVersion(release.version),
              className: cn(
                "w-full rounded-md px-3 py-2 text-left text-sm transition-all",
                "hover:bg-accent hover:text-accent-foreground",
                "border-2",
                selectedVersion === release.version ? "bg-accent text-accent-foreground border-primary" : "border-transparent",
                dir === "rtl" && "text-right"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: release.version }),
                selectedVersion === release.version && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-primary" })
              ] })
            },
            release.version
          ))
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "custom", className: "mt-3 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "custom-version-input", className: cn("text-sm font-medium", dir === "rtl" && "text-right"), children: t("nodeModal.enterVersion", { defaultValue: "Enter Version" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "custom-version-input",
              type: "text",
              placeholder: t("nodeModal.versionPlaceholder", { defaultValue: "e.g., v1.8.0 or 1.8.0" }),
              value: customVersion,
              onChange: (e) => handleCustomVersionChange(e.target.value),
              onBlur: () => {
                if (customVersion) {
                  validateCustomVersion(customVersion);
                }
              },
              error: customVersionError,
              isError: !!customVersionError,
              className: "font-mono"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { dir, className: cn("text-xs text-muted-foreground", dir === "rtl" && "text-right"), children: t("nodeModal.versionHint", { defaultValue: "Enter a version in the format vX.X.X or X.X.X (e.g., v1.8.0)" }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), disabled: updateCoreMutation.isPending, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoaderButton,
        {
          className: "!m-0",
          onClick: handleUpdate,
          disabled: updateCoreMutation.isPending || isLoadingReleases || versionMode === "list" && !latestVersion || versionMode === "custom" && (!customVersion.trim() || !!customVersionError),
          isLoading: updateCoreMutation.isPending,
          loadingText: t("nodeModal.updating", { defaultValue: "Updating..." }),
          children: t("nodeModal.update", { defaultValue: "Update" })
        }
      )
    ] })
  ] }) });
}
function UpdateGeofilesDialog({ node, isOpen, onOpenChange }) {
  const { t } = useTranslation();
  const GEO_REGIONS = [
    { value: "iran", label: t("nodeModal.regions.iran", { defaultValue: "Iran" }) },
    { value: "china", label: t("nodeModal.regions.china", { defaultValue: "China" }) },
    { value: "russia", label: t("nodeModal.regions.russia", { defaultValue: "Russia" }) }
  ];
  const dir = useDirDetection();
  const [selectedRegion, setSelectedRegion] = reactExports.useState(instance.language === "en" ? "iran" : "iran");
  const updateGeofilesMutation = useUpdateGeofiles();
  React.useEffect(() => {
    if (isOpen) {
      setSelectedRegion(instance.language === "en" ? "iran" : "iran");
    }
  }, [isOpen]);
  const handleUpdate = async () => {
    try {
      const response = await updateGeofilesMutation.mutateAsync({
        nodeId: node.id,
        data: {
          region: selectedRegion
        }
      });
      const message = response?.detail || t("nodeModal.updateGeofilesSuccess", { defaultValue: "Geo files updated successfully" });
      toast.success(message);
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
      queryClient.invalidateQueries({ queryKey: [`/api/node/${node.id}`] });
    } catch (error) {
      toast.error(
        t("nodeModal.updateGeofilesFailed", {
          message: error?.message || "Unknown error",
          defaultValue: "Failed to update Geo files: {message}"
        })
      );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: cn("sm:max-w-[500px]", dir === "rtl" && "sm:text-right"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: cn(dir === "rtl" && "text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn(dir === "rtl" && "text-right"), children: t("nodeModal.updateGeofilesTitle", { defaultValue: "Update Geofiles" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: cn(dir === "rtl" && "text-right"), children: t("nodeModal.updateGeofilesDescription", {
        nodeName: node.name,
        defaultValue: `Update geofiles for node «${node.name}»`
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: cn("text-sm font-medium", dir === "rtl" && "text-right"), children: t("nodeModal.selectRegion", { defaultValue: "Select Region" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: selectedRegion || "",
          onValueChange: (value) => setSelectedRegion(value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: cn(dir === "rtl" && "text-right"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("nodeModal.selectRegion", { defaultValue: "Select Region" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: GEO_REGIONS.map((region) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: region.value, children: region.label }, region.value)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-xs text-muted-foreground", dir === "rtl" && "text-right"), children: t("nodeModal.updateGeofilesHint", {
        defaultValue: "Select a specific region to update geofiles"
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), disabled: updateGeofilesMutation.isPending, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoaderButton,
        {
          className: "!m-0",
          onClick: handleUpdate,
          disabled: updateGeofilesMutation.isPending,
          isLoading: updateGeofilesMutation.isPending,
          loadingText: t("nodeModal.updating", { defaultValue: "Updating..." }),
          children: t("nodeModal.update", { defaultValue: "Update" })
        }
      )
    ] })
  ] }) });
}
const DeleteAlertDialog = ({ node, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("nodes.deleteNode") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("deleteNode.prompt", { name: node.name }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { variant: "destructive", onClick: onConfirm, children: t("delete") })
    ] })
  ] }) });
};
const ResetUsageAlertDialog = ({ node, isOpen, onClose, onConfirm, isLoading }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("nodeModal.resetUsageTitle", { defaultValue: "Reset Node Usage" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("nodeModal.resetUsagePrompt", { name: node.name, defaultValue: `Are you sure you want to reset usage for node «${node.name}»?` }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, disabled: isLoading, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: onConfirm, disabled: isLoading, children: t("nodeModal.resetUsage", { defaultValue: "Reset Usage" }) })
    ] })
  ] }) });
};
function NodeActionsMenu({ node, onEdit, onToggleStatus, className }) {
  const { t } = useTranslation();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [isResetUsageDialogOpen, setResetUsageDialogOpen] = reactExports.useState(false);
  const [showOnlineStats, setShowOnlineStats] = reactExports.useState(false);
  const [showUpdateCoreDialog, setShowUpdateCoreDialog] = reactExports.useState(false);
  const [showUpdateGeofilesDialog, setShowUpdateGeofilesDialog] = reactExports.useState(false);
  const [syncing, setSyncing] = reactExports.useState(false);
  const [reconnecting, setReconnecting] = reactExports.useState(false);
  const [resettingUsage, setResettingUsage] = reactExports.useState(false);
  const [updatingNode, setUpdatingNode] = reactExports.useState(false);
  const removeNodeMutation = useRemoveNode();
  const syncNodeMutation = useSyncNode();
  const reconnectNodeMutation = useReconnectNode();
  const resetNodeUsageMutation = useResetNodeUsage();
  const updateNodeMutation = useUpdateNode();
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    setDeleteDialogOpen(true);
  };
  const handleConfirmDelete = async () => {
    try {
      await removeNodeMutation.mutateAsync({
        nodeId: node.id
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("nodes.deleteSuccess", {
          name: node.name,
          defaultValue: "Node «{name}» has been deleted successfully"
        })
      });
      setDeleteDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t("nodes.deleteFailed", {
          name: node.name,
          defaultValue: "Failed to delete node «{name}»"
        })
      });
    }
  };
  const handleSync = async () => {
    setSyncing(true);
    try {
      await syncNodeMutation.mutateAsync({
        nodeId: node.id,
        params: { flush_users: false }
      });
      toast.success(t("nodeModal.syncSuccess"));
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
    } catch (error) {
      toast.error(
        t("nodeModal.syncFailed", {
          message: error?.message || "Unknown error"
        })
      );
    } finally {
      setSyncing(false);
    }
  };
  const handleReconnect = async () => {
    setReconnecting(true);
    try {
      await reconnectNodeMutation.mutateAsync({
        nodeId: node.id
      });
      toast.success(t("nodeModal.reconnectSuccess", { defaultValue: "Node reconnected successfully" }));
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
    } catch (error) {
      toast.error(
        t("nodeModal.reconnectFailed", {
          message: error?.message || "Unknown error"
        })
      );
    } finally {
      setReconnecting(false);
    }
  };
  const handleResetUsage = () => {
    setResetUsageDialogOpen(true);
  };
  const confirmResetUsage = async () => {
    setResettingUsage(true);
    try {
      await resetNodeUsageMutation.mutateAsync({
        nodeId: node.id
      });
      toast.success(t("nodeModal.resetUsageSuccess", { defaultValue: "Node usage reset successfully" }));
      setResetUsageDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
      queryClient.invalidateQueries({ queryKey: [`/api/node/${node.id}`] });
    } catch (error) {
      toast.error(
        t("nodeModal.resetUsageFailed", {
          message: error?.message || "Unknown error"
        })
      );
    } finally {
      setResettingUsage(false);
    }
  };
  const handleUpdateNode = async () => {
    setUpdatingNode(true);
    try {
      await updateNodeMutation.mutateAsync({
        nodeId: node.id
      });
      toast.success(t("nodeModal.updateNodeSuccess", { defaultValue: "Node updated successfully" }));
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
      queryClient.invalidateQueries({ queryKey: [`/api/node/${node.id}`] });
    } catch (error) {
      toast.error(
        t("nodeModal.updateNodeFailed", {
          message: error?.message || "Unknown error",
          defaultValue: "Failed to update node: {message}"
        })
      );
    } finally {
      setUpdatingNode(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7 sm:h-8 sm:w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onEdit(node);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("edit") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onToggleStatus(node);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: node.status === "disabled" ? t("enable") : t("disable") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              setShowOnlineStats(true);
            },
            disabled: syncing || reconnecting || resettingUsage || updatingNode,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("nodeModal.onlineStats.button", { defaultValue: "Stats" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              handleSync();
            },
            disabled: syncing || reconnecting || resettingUsage || updatingNode,
            children: [
              syncing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 shrink-0 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: syncing ? t("nodeModal.syncing") : t("nodeModal.sync") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              handleReconnect();
            },
            disabled: reconnecting || syncing || resettingUsage,
            children: [
              reconnecting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 shrink-0 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: reconnecting ? t("nodeModal.reconnecting") : t("nodeModal.reconnect") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              handleResetUsage();
            },
            disabled: resettingUsage || syncing || reconnecting,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("nodeModal.resetUsage", { defaultValue: "Reset" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              setShowUpdateCoreDialog(true);
            },
            disabled: syncing || reconnecting || resettingUsage || updatingNode,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("nodeModal.updateCore", { defaultValue: "Update Core" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              setShowUpdateGeofilesDialog(true);
            },
            disabled: syncing || reconnecting || resettingUsage || updatingNode,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("nodeModal.updateGeofiles", { defaultValue: "Update Geofiles" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              handleUpdateNode();
            },
            disabled: syncing || reconnecting || resettingUsage || updatingNode,
            children: [
              updatingNode ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 shrink-0 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-2 h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: updatingNode ? t("nodeModal.updatingNode", { defaultValue: "Updating Node..." }) : t("nodeModal.updateNode", { defaultValue: "Update Node" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: handleDeleteClick, className: "text-destructive focus:text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("delete") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAlertDialog, { node, isOpen: isDeleteDialogOpen, onClose: () => setDeleteDialogOpen(false), onConfirm: handleConfirmDelete }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResetUsageAlertDialog, { node, isOpen: isResetUsageDialogOpen, onClose: () => setResetUsageDialogOpen(false), onConfirm: confirmResetUsage, isLoading: resettingUsage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UserOnlineStatsModal, { isOpen: showOnlineStats, onOpenChange: setShowOnlineStats, nodeId: node.id, nodeName: node.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateCoreDialog, { node, isOpen: showUpdateCoreDialog, onOpenChange: setShowUpdateCoreDialog }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateGeofilesDialog, { node, isOpen: showUpdateGeofilesDialog, onOpenChange: setShowUpdateGeofilesDialog })
  ] });
}
function Node({ node, onEdit, onToggleStatus }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const { latestVersion: latestXrayVersion, hasUpdate: hasXrayUpdate } = useXrayReleases();
  const { latestVersion: latestNodeVersion, hasUpdate: hasNodeUpdate } = useNodeReleases();
  const getStatusConfig = () => {
    switch (node.status) {
      case "connected":
        return {
          label: t("nodeModal.status.connected", { defaultValue: "Connected" })
        };
      case "connecting":
        return {
          label: t("nodeModal.status.connecting", { defaultValue: "Connecting" })
        };
      case "error":
        return {
          label: t("nodeModal.status.error", { defaultValue: "Error" })
        };
      case "limited":
        return {
          label: t("status.limited", { defaultValue: "Limited" })
        };
      default:
        return {
          label: t("nodeModal.status.disabled", { defaultValue: "Disabled" })
        };
    }
  };
  const statusConfig = getStatusConfig();
  const getStatusDotColor = () => {
    switch (node.status) {
      case "connected":
        return "bg-green-500";
      case "connecting":
        return "bg-amber-500";
      case "error":
        return "bg-destructive";
      case "limited":
        return "bg-orange-500";
      default:
        return "bg-gray-400 dark:bg-gray-600";
    }
  };
  const uplink = node.uplink || 0;
  const downlink = node.downlink || 0;
  const totalUsed = uplink + downlink;
  const lifetimeUplink = node.lifetime_uplink || 0;
  const lifetimeDownlink = node.lifetime_downlink || 0;
  const totalLifetime = lifetimeUplink + lifetimeDownlink;
  const hasUsageDisplay = !(totalUsed === 0 && !node.data_limit && totalLifetime === 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group relative h-full cursor-pointer overflow-hidden border transition-colors hover:bg-accent", onClick: () => onEdit(node), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-0.5 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-2 w-2 rounded-full shrink-0", getStatusDotColor()) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: statusConfig.label }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-sm sm:text-base font-semibold leading-tight tracking-tight", children: node.name }),
        node.status === "error" && node.message ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 cursor-help text-destructive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { className: "max-w-xs", side: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: node.message }) })
        ] }) : null
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NodeActionsMenu, { node, onEdit, onToggleStatus })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground", dir === "rtl" ? "flex-row-reverse justify-end" : "flex-row"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", className: "truncate font-mono", children: [
          node.address,
          ":",
          node.port
        ] })
      ] }),
      (node.xray_version || node.node_version) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        node.xray_version && /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "group/version inline-flex items-center",
                dir === "rtl" ? "flex-row-reverse gap-1" : "gap-1"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: cn("h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-colors", latestXrayVersion && hasXrayUpdate(node.xray_version) ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] sm:text-[11px] font-medium font-mono", latestXrayVersion && hasXrayUpdate(node.xray_version) ? "text-amber-700 dark:text-amber-300" : "text-muted-foreground"), children: node.xray_version }),
                latestXrayVersion && hasXrayUpdate(node.xray_version) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "top", className: "max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t("node.xrayVersion", { defaultValue: "Xray Core" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("version.currentVersion", { defaultValue: "Current" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium", children: node.xray_version })
              ] }),
              latestXrayVersion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("version.latestVersion", { defaultValue: "Latest" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium", children: latestXrayVersion })
              ] }),
              latestXrayVersion && hasXrayUpdate(node.xray_version) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("nodeModal.updateAvailable", { defaultValue: "Update available" }) })
              ] })
            ] })
          ] }) })
        ] }),
        node.node_version && /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "group/version inline-flex items-center",
                dir === "rtl" ? "flex-row-reverse gap-1" : "gap-1"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: cn("h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-colors", latestNodeVersion && hasNodeUpdate(node.node_version) ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] sm:text-[11px] font-medium font-mono", latestNodeVersion && hasNodeUpdate(node.node_version) ? "text-amber-700 dark:text-amber-300" : "text-muted-foreground"), children: node.node_version }),
                latestNodeVersion && hasNodeUpdate(node.node_version) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "top", className: "max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t("node.coreVersion", { defaultValue: "Node Core" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("version.currentVersion", { defaultValue: "Current" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium", children: node.node_version })
              ] }),
              latestNodeVersion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("version.latestVersion", { defaultValue: "Latest" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium", children: latestNodeVersion })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    hasUsageDisplay && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-2 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NodeUsageDisplay, { node })
    ] })
  ] }) }) });
}
const NodeFilters = ({ filters, onFilterChange, refetch, isFetching, advanceSearchOnOpen, onClearAdvanceSearch, viewMode, onViewModeChange }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const { search, debouncedSearch, setSearch } = useDebouncedSearch(filters.search || "", 300);
  reactExports.useEffect(() => {
    onFilterChange({
      search: debouncedSearch || void 0,
      offset: 0
    });
  }, [debouncedSearch, onFilterChange]);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const clearSearch = () => {
    setSearch("");
    onFilterChange({
      search: void 0,
      offset: 0
    });
  };
  const handleManualRefresh = () => {
    if (refetch) {
      refetch();
    }
  };
  const handleOpenAdvanceSearch = () => {
    advanceSearchOnOpen(true);
  };
  const hasActiveAdvanceFilters = () => {
    const status = filters.status;
    const core_id = filters.core_id;
    return status && status.length > 0 || core_id !== void 0;
  };
  const getActiveFiltersCount = () => {
    const status = filters.status;
    const core_id = filters.core_id;
    let count = 0;
    if (status && status.length > 0) count++;
    if (core_id !== void 0) count++;
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
          className: cn("relative flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200", isFetching && "opacity-70"),
          "aria-label": t("autoRefresh.refreshNow"),
          title: t("autoRefresh.refreshNow"),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", isFetching && "animate-spin") })
        }
      ),
      viewMode && onViewModeChange && /* @__PURE__ */ jsxRuntimeExports.jsx(ViewToggle, { value: viewMode, onChange: onViewModeChange })
    ] })
  ] });
};
const NodePaginationControls = ({
  currentPage,
  totalPages,
  isLoading,
  onPageChange
}) => {
  const dir = useDirDetection();
  const getPaginationRange = (currentPage2, totalPages2) => {
    const delta = 2;
    const range = [];
    if (totalPages2 <= 5) {
      for (let i = 0; i < totalPages2; i++) {
        range.push(i);
      }
      return range;
    }
    range.push(0);
    let start = Math.max(1, currentPage2 - delta);
    let end = Math.min(totalPages2 - 2, currentPage2 + delta);
    if (currentPage2 - delta <= 1) {
      end = Math.min(totalPages2 - 2, start + 2 * delta);
    }
    if (currentPage2 + delta >= totalPages2 - 2) {
      start = Math.max(1, totalPages2 - 3 - 2 * delta);
    }
    if (start > 1) {
      range.push(-1);
    }
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    if (end < totalPages2 - 2) {
      range.push(-1);
    }
    if (totalPages2 > 1) {
      range.push(totalPages2 - 1);
    }
    return range;
  };
  const paginationRange = getPaginationRange(currentPage, totalPages);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-col-reverse items-center justify-between gap-4 md:flex-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { dir: "ltr", className: `${dir === "rtl" ? "flex-row-reverse" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PaginationContent,
    {
      className: cn("w-full justify-center overflow-x-auto", dir === "rtl" ? "md:justify-start" : "md:justify-end"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PaginationPrevious,
          {
            onClick: () => onPageChange(currentPage - 1),
            disabled: currentPage === 0 || isLoading
          }
        ) }),
        paginationRange.map(
          (pageNumber, i) => pageNumber === -1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationEllipsis, {}) }, `ellipsis-${i}`) : /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              isActive: currentPage === pageNumber,
              onClick: () => onPageChange(pageNumber),
              disabled: isLoading,
              className: isLoading && currentPage === pageNumber ? "opacity-70" : "",
              children: isLoading && currentPage === pageNumber ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3 w-3 animate-spin" }),
                pageNumber + 1
              ] }) : pageNumber + 1
            }
          ) }, pageNumber)
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PaginationNext,
          {
            onClick: () => onPageChange(currentPage + 1),
            disabled: currentPage === totalPages - 1 || totalPages === 0 || isLoading
          }
        ) })
      ]
    }
  ) }) });
};
const PAGE_SIZE = 20;
function CoresSelector({ control, name, onCoreChange, placeholder }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const { field } = useController({
    control,
    name
  });
  const [offset, setOffset] = reactExports.useState(0);
  const [cores, setCores] = reactExports.useState([]);
  const [hasMore, setHasMore] = reactExports.useState(true);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [dropdownOpen, setDropdownOpen] = reactExports.useState(false);
  const listRef = reactExports.useRef(null);
  const { debouncedSearch: coreSearch, setSearch: setCoreSearchInput } = useDebouncedSearch("", 300);
  reactExports.useEffect(() => {
    setOffset(0);
    setCores([]);
    setHasMore(true);
  }, [coreSearch]);
  const { data: coresData, isLoading: coresLoading } = useGetCoresSimple(
    { all: true },
    {
      query: {
        staleTime: 5 * 60 * 1e3,
        // 5 minutes
        gcTime: 10 * 60 * 1e3,
        // 10 minutes
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true
      }
    }
  );
  reactExports.useEffect(() => {
    if (coresData?.cores) {
      const allCores = coresData.cores;
      const filteredCores = coreSearch ? allCores.filter(
        (core) => core.name.toLowerCase().includes(coreSearch.toLowerCase())
      ) : allCores;
      const paginatedCores = filteredCores.slice(0, offset + PAGE_SIZE);
      setCores(paginatedCores);
      setHasMore(paginatedCores.length < filteredCores.length);
      setIsLoading(false);
    }
  }, [coresData, coreSearch, offset]);
  const handleScroll = reactExports.useCallback(() => {
    if (!listRef.current || isLoading || !hasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollHeight - scrollTop - clientHeight < 100) {
      setIsLoading(true);
      setOffset((prev) => prev + PAGE_SIZE);
    }
  }, [isLoading, hasMore]);
  reactExports.useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const selectedCoreId = field.value;
  const handleCoreSelect = (coreId) => {
    field.onChange(coreId);
    onCoreChange?.(coreId);
    setDropdownOpen(false);
  };
  const selectedCore = coresData?.cores?.find((core) => core.id === selectedCoreId);
  if (coresLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-3 w-full max-w-xs sm:mb-4 sm:max-w-sm lg:max-w-md", dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full sm:h-9" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-3 w-full max-w-xs sm:mb-4 sm:max-w-sm lg:max-w-md", dir, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: dropdownOpen, onOpenChange: setDropdownOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: cn(
            "h-8 w-full justify-between px-2 transition-colors hover:bg-muted/50 sm:h-9 sm:px-3",
            "min-w-0 text-xs font-medium sm:text-sm"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
              "flex min-w-0 flex-1 items-center gap-1 sm:gap-2",
              dir === "rtl" ? "flex-row-reverse" : "flex-row"
            ), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-muted text-xs font-medium", children: selectedCore?.name?.charAt(0).toUpperCase() || "C" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-xs sm:text-sm", children: selectedCore?.name || placeholder || t("advanceSearch.selectCore", { defaultValue: "Select Core" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "ml-1 h-3 w-3 flex-shrink-0 text-muted-foreground" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PopoverContent,
        {
          className: "w-64 p-1 sm:w-72 lg:w-80",
          sideOffset: 4,
          align: dir === "rtl" ? "end" : "start",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CommandInput,
              {
                placeholder: placeholder || t("search", { defaultValue: "Search" }),
                onValueChange: setCoreSearchInput,
                className: "mb-1 h-7 text-xs sm:h-8 sm:text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { ref: listRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-3 text-center text-xs text-muted-foreground sm:py-4 sm:text-sm", children: t("advanceSearch.noCoresFound", { defaultValue: "No cores found" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                CommandItem,
                {
                  onSelect: () => handleCoreSelect(null),
                  className: cn(
                    "flex min-w-0 items-center gap-2 px-2 py-1.5 text-xs sm:text-sm",
                    dir === "rtl" ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-xs font-medium", children: "N" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: t("none", { defaultValue: "None" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-shrink-0 items-center gap-1", children: !selectedCoreId && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary" }) })
                  ]
                }
              ),
              cores.map((core) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                CommandItem,
                {
                  onSelect: () => handleCoreSelect(core.id),
                  className: cn(
                    "flex min-w-0 items-center gap-2 px-2 py-1.5 text-xs sm:text-sm",
                    dir === "rtl" ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-muted text-xs font-medium", children: core.name.charAt(0).toUpperCase() }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: core.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-shrink-0 items-center gap-1", children: selectedCoreId === core.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary" }) })
                  ]
                },
                core.id
              )),
              isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin text-muted-foreground" }) })
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
  ] });
}
const statusOptions = [
  { value: NodeStatus.connected, label: "nodeModal.status.connected" },
  { value: NodeStatus.disabled, label: "nodeModal.status.disabled" },
  { value: NodeStatus.error, label: "nodeModal.status.error" },
  { value: NodeStatus.limited, label: "status.limited" },
  { value: NodeStatus.connecting, label: "nodeModal.status.connecting" }
];
function NodeAdvanceSearchModal({ isDialogOpen, onOpenChange, form, onSubmit }) {
  const dir = useDirDetection();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "flex h-auto max-w-[650px] flex-col justify-start ", onOpenAutoFocus: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: `${dir === "rtl" ? "text-right" : "text-left"}`, dir, children: t("advanceSearch.title") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex h-full flex-col justify-between space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mr-4 max-h-[80dvh] overflow-y-auto px-2 pr-4 sm:max-h-[75dvh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-1 flex-col items-start gap-4 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "status",
            render: ({ field }) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("advanceSearch.byStatus") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: field.value.map((status) => {
                    const option = statusOptions.find((opt) => opt.value === status);
                    if (!option) return null;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1", children: [
                      t(option.label),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        X,
                        {
                          className: "h-3 w-3 cursor-pointer",
                          onClick: () => {
                            field.onChange(field.value?.filter((s) => s !== status));
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
                        const currentValue = field.value || [];
                        if (!currentValue.includes(value)) {
                          field.onChange([...currentValue, value]);
                        }
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { dir, className: "w-full gap-2 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectStatus") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { dir, className: "bg-background", children: statusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectItem,
                          {
                            value: option.value,
                            className: "flex cursor-pointer items-center gap-2 px-4 py-2 focus:bg-accent",
                            disabled: field.value?.includes(option.value),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value?.includes(option.value), className: "h-4 w-4" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: t(option.label) })
                            ] })
                          },
                          option.value
                        )) })
                      ]
                    }
                  ),
                  field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => field.onChange([]),
                      className: "mt-2 w-full",
                      children: t("hostsDialog.clearAllStatuses")
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "core_id",
            render: ({ field }) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("advanceSearch.byCore", { defaultValue: "Core" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CoresSelector,
                  {
                    control: form.control,
                    name: "core_id",
                    onCoreChange: field.onChange,
                    placeholder: t("advanceSearch.searchCore", { defaultValue: "Search cores..." })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] });
            }
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
const nodeAdvanceSearchFormSchema = objectType({
  status: arrayType(nativeEnumType(NodeStatus)).optional(),
  core_id: numberType().nullable().optional()
});
const getNodeStatusDotColor = (status) => {
  switch (status) {
    case "connected":
      return "bg-green-500";
    case "connecting":
      return "bg-amber-500";
    case "error":
      return "bg-destructive";
    case "limited":
      return "bg-orange-500";
    default:
      return "bg-gray-400 dark:bg-gray-600";
  }
};
const useNodeListColumns = ({ onEdit, onToggleStatus }) => {
  const { t } = useTranslation();
  return reactExports.useMemo(
    () => [
      {
        id: "name",
        header: t("name"),
        width: "4fr",
        cell: (node) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-2 w-2 shrink-0 rounded-full", getNodeStatusDotColor(node.status)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: node.name })
        ] })
      },
      {
        id: "address",
        header: t("address"),
        width: "1fr",
        cell: (node) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: "truncate font-mono text-xs text-muted-foreground", children: [
          node.address,
          ":",
          node.port
        ] }),
        hideOnMobile: true
      },
      {
        id: "usage",
        header: t("usageLabel"),
        width: "1fr",
        cell: (node) => /* @__PURE__ */ jsxRuntimeExports.jsx(NodeUsageDisplay, { node }),
        hideOnMobile: true
      },
      {
        id: "actions",
        header: "",
        width: "64px",
        align: "end",
        hideOnMobile: true,
        cell: (node) => /* @__PURE__ */ jsxRuntimeExports.jsx(NodeActionsMenu, { node, onEdit, onToggleStatus })
      }
    ],
    [t, onEdit, onToggleStatus]
  );
};
const NODES_PER_PAGE = 15;
function NodesList() {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [editingNode, setEditingNode] = reactExports.useState(null);
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  const [isChangingPage, setIsChangingPage] = reactExports.useState(false);
  const wasFetchingRef = reactExports.useRef(false);
  const isFirstLoadRef = reactExports.useRef(true);
  const previousTotalPagesRef = reactExports.useRef(0);
  const isAutoRefreshingRef = reactExports.useRef(false);
  const modifyNodeMutation = useModifyNode();
  const [allNodes, setAllNodes] = reactExports.useState([]);
  const [localSearchTerm, setLocalSearchTerm] = reactExports.useState("");
  const [isAdvanceSearchOpen, setIsAdvanceSearchOpen] = reactExports.useState(false);
  const [viewMode, setViewMode] = usePersistedViewMode("view-mode:nodes");
  const [filters, setFilters] = reactExports.useState({
    limit: NODES_PER_PAGE,
    offset: 0,
    search: void 0,
    status: void 0,
    core_id: void 0
  });
  const form = useForm({
    resolver: a(nodeFormSchema),
    defaultValues: nodeFormDefaultValues
  });
  const advanceSearchForm = useForm({
    resolver: a(nodeAdvanceSearchFormSchema),
    defaultValues: {
      status: filters.status || [],
      core_id: filters.core_id || void 0
    }
  });
  const {
    data: nodesResponse,
    isLoading,
    isFetching,
    refetch
  } = useGetNodes(filters, {
    query: {
      refetchInterval: 1e4,
      staleTime: 0,
      gcTime: 0,
      retry: 1,
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  });
  const totalNodesFromResponse = nodesResponse?.total || 0;
  const shouldUseLocalSearch = totalNodesFromResponse > 0 && totalNodesFromResponse <= NODES_PER_PAGE && !filters.search;
  reactExports.useEffect(() => {
    if (nodesResponse && isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
    }
    if (nodesResponse && shouldUseLocalSearch && !filters.search && filters.offset === 0) {
      setAllNodes(nodesResponse.nodes || []);
    }
  }, [nodesResponse, shouldUseLocalSearch, filters.search, filters.offset]);
  reactExports.useEffect(() => {
    if (isFetching && !isChangingPage && !isFirstLoadRef.current && nodesResponse) {
      isAutoRefreshingRef.current = true;
    }
    if (!isFetching && wasFetchingRef.current && isChangingPage) {
      setIsChangingPage(false);
      wasFetchingRef.current = false;
    }
    if (isFetching) {
      wasFetchingRef.current = true;
    }
    if (!isFetching && isAutoRefreshingRef.current) {
      isAutoRefreshingRef.current = false;
    }
  }, [isFetching, isChangingPage, nodesResponse]);
  reactExports.useEffect(() => {
    const handleOpenDialog = () => setIsDialogOpen(true);
    window.addEventListener("openNodeDialog", handleOpenDialog);
    return () => window.removeEventListener("openNodeDialog", handleOpenDialog);
  }, []);
  const handleFilterChange = reactExports.useCallback(
    (newFilters) => {
      const searchValue = newFilters.search !== void 0 ? newFilters.search : filters.search;
      setLocalSearchTerm(searchValue || "");
      if (shouldUseLocalSearch && searchValue) {
        setCurrentPage(0);
        return;
      }
      setFilters((prev) => ({
        ...prev,
        ...newFilters
      }));
      if (newFilters.offset === 0) {
        setCurrentPage(0);
      }
    },
    [filters.search, shouldUseLocalSearch]
  );
  const handlePageChange = (newPage) => {
    if (newPage === currentPage || isChangingPage) return;
    if (shouldUseLocalSearch && localSearchTerm) {
      setCurrentPage(newPage);
      return;
    }
    setIsChangingPage(true);
    setCurrentPage(newPage);
    setFilters((prev) => ({
      ...prev,
      offset: newPage * NODES_PER_PAGE
    }));
  };
  const handleEdit = (node) => {
    setEditingNode(node);
    form.reset({
      name: node.name,
      address: node.address,
      port: node.port || 62050,
      usage_coefficient: node.usage_coefficient || 1,
      connection_type: node.connection_type,
      server_ca: node.server_ca,
      keep_alive: node.keep_alive,
      keep_alive_unit: "seconds"
    });
    setIsDialogOpen(true);
  };
  const handleToggleStatus = async (node) => {
    try {
      const shouldEnable = node.status === "disabled";
      const newStatus = shouldEnable ? "connected" : "disabled";
      const toOptional = (value) => value === null || value === void 0 ? void 0 : value;
      const data = {
        name: node.name,
        address: node.address,
        port: toOptional(node.port),
        api_port: toOptional(node.api_port),
        usage_coefficient: toOptional(node.usage_coefficient),
        connection_type: node.connection_type,
        server_ca: node.server_ca,
        keep_alive: node.keep_alive,
        core_config_id: toOptional(node.core_config_id),
        api_key: toOptional(node.api_key),
        data_limit: toOptional(node.data_limit),
        data_limit_reset_strategy: toOptional(node.data_limit_reset_strategy),
        reset_time: toOptional(node.reset_time),
        default_timeout: toOptional(node.default_timeout),
        internal_timeout: toOptional(node.internal_timeout),
        status: newStatus
      };
      await modifyNodeMutation.mutateAsync({
        nodeId: node.id,
        data
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t(shouldEnable ? "nodes.enableSuccess" : "nodes.disableSuccess", {
          name: node.name,
          defaultValue: `Node "{name}" has been ${shouldEnable ? "enabled" : "disabled"} successfully`
        })
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/nodes"]
      });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t(node.status === "disabled" ? "nodes.enableFailed" : "nodes.disableFailed", {
          name: node.name,
          defaultValue: `Failed to ${node.status === "disabled" ? "enable" : "disable"} node "{name}"`
        })
      });
    }
  };
  const filteredNodes = reactExports.useMemo(() => {
    if (shouldUseLocalSearch && localSearchTerm && allNodes.length > 0) {
      const searchLower = localSearchTerm.toLowerCase();
      return allNodes.filter((node) => node.name.toLowerCase().includes(searchLower) || node.address.toLowerCase().includes(searchLower) || node.port?.toString().includes(searchLower));
    }
    return nodesResponse?.nodes || [];
  }, [shouldUseLocalSearch, localSearchTerm, allNodes, nodesResponse?.nodes]);
  const paginatedNodes = reactExports.useMemo(() => {
    if (shouldUseLocalSearch && localSearchTerm) {
      const start = currentPage * NODES_PER_PAGE;
      const end = start + NODES_PER_PAGE;
      return filteredNodes.slice(start, end);
    }
    return filteredNodes;
  }, [shouldUseLocalSearch, localSearchTerm, filteredNodes, currentPage]);
  const nodesData = paginatedNodes;
  const totalNodes = shouldUseLocalSearch && localSearchTerm ? filteredNodes.length : nodesResponse?.total || 0;
  const showLoadingSpinner = isLoading && isFirstLoadRef.current;
  const isBackgroundRefetch = isFetching && !isChangingPage && !isFirstLoadRef.current && !!nodesResponse;
  const isPageLoading = isChangingPage || isFetching && !isFirstLoadRef.current && !shouldUseLocalSearch && !isBackgroundRefetch;
  const showPageLoadingSkeletons = isPageLoading && !showLoadingSpinner;
  const calculatedTotalPages = Math.ceil(totalNodes / NODES_PER_PAGE);
  const totalPages = calculatedTotalPages > 0 ? calculatedTotalPages : isPageLoading ? previousTotalPagesRef.current : 0;
  reactExports.useEffect(() => {
    if (calculatedTotalPages > 0) {
      previousTotalPagesRef.current = calculatedTotalPages;
    }
  }, [calculatedTotalPages]);
  reactExports.useEffect(() => {
    if (calculatedTotalPages > 0 && currentPage >= calculatedTotalPages) {
      const lastPage = calculatedTotalPages - 1;
      setCurrentPage(lastPage);
      setFilters((prev) => ({
        ...prev,
        offset: lastPage * NODES_PER_PAGE
      }));
    }
  }, [calculatedTotalPages, currentPage]);
  const listColumns = useNodeListColumns({ onEdit: handleEdit, onToggleStatus: handleToggleStatus });
  const handleAdvanceSearchSubmit = (values) => {
    setFilters((prev) => ({
      ...prev,
      status: values.status && values.status.length > 0 ? values.status : void 0,
      core_id: values.core_id || void 0,
      offset: 0
    }));
    setCurrentPage(0);
    setIsAdvanceSearchOpen(false);
  };
  const handleClearAdvanceSearch = () => {
    advanceSearchForm.reset({
      status: [],
      core_id: void 0
    });
    setFilters((prev) => ({
      ...prev,
      status: void 0,
      core_id: void 0,
      offset: 0
    }));
    setCurrentPage(0);
  };
  const handleAdvanceSearchOpen = (open) => {
    if (open) {
      advanceSearchForm.reset({
        status: filters.status || [],
        core_id: filters.core_id || void 0
      });
    }
    setIsAdvanceSearchOpen(open);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full flex-col items-start gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex-1 space-y-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NodeFilters,
      {
        filters,
        onFilterChange: handleFilterChange,
        refetch,
        isFetching,
        advanceSearchOnOpen: handleAdvanceSearchOpen,
        onClearAdvanceSearch: handleClearAdvanceSearch,
        viewMode,
        onViewModeChange: setViewMode
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[55dvh]", children: [
      (showLoadingSpinner || showPageLoadingSkeletons || nodesData.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListGenerator,
        {
          data: nodesData,
          columns: listColumns,
          getRowId: (node) => node.id,
          isLoading: showLoadingSpinner || showPageLoadingSkeletons,
          loadingRows: 6,
          className: "gap-3",
          onRowClick: handleEdit,
          mode: viewMode,
          showEmptyState: false,
          gridClassName: "transform-gpu animate-slide-up",
          gridStyle: { animationDuration: "500ms", animationDelay: "100ms", animationFillMode: "both" },
          renderGridItem: (node) => /* @__PURE__ */ jsxRuntimeExports.jsx(Node, { node, onEdit: handleEdit, onToggleStatus: handleToggleStatus }),
          renderGridSkeleton: (i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group relative h-full p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-2 w-2 shrink-0 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-32 sm:w-40" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mb-1 h-4 w-28 sm:w-36" }),
              i % 3 === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mb-2 mt-1 h-3 w-40 sm:w-48" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-1.5 w-full rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-16" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-2.5 w-16" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-2.5 w-16" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-9 shrink-0 rounded-md" }) })
          ] }) }, i)
        }
      ),
      !showLoadingSpinner && !showPageLoadingSkeletons && nodesData.length === 0 && !filters.search && !localSearchTerm && totalNodes === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("nodes.noNodes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: [
          t("nodes.noNodesDescription"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/PasarGuard/node", target: "_blank", rel: "noopener noreferrer", className: "font-medium text-primary underline-offset-4 hover:underline", children: "PasarGuard/node" }),
          " ",
          t("nodes.noNodesDescription2", { defaultValue: "and connect it to the panel." })
        ] })
      ] }) }) }),
      !showLoadingSpinner && !showPageLoadingSkeletons && nodesData.length === 0 && (filters.search || localSearchTerm) && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("noResults") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: t("nodes.noSearchResults", { defaultValue: "No nodes match your search criteria. Try adjusting your search terms." }) })
      ] }) }) })
    ] }),
    totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(NodePaginationControls, { currentPage, totalPages, isLoading: isPageLoading, onPageChange: handlePageChange }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NodeModal,
      {
        isDialogOpen,
        onOpenChange: (open) => {
          if (!open) {
            setEditingNode(null);
            form.reset(nodeFormDefaultValues);
          }
          setIsDialogOpen(open);
        },
        form,
        editingNode: !!editingNode,
        editingNodeId: editingNode?.id,
        initialNodeData: editingNode || void 0
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NodeAdvanceSearchModal,
      {
        isDialogOpen: isAdvanceSearchOpen,
        onOpenChange: setIsAdvanceSearchOpen,
        form: advanceSearchForm,
        onSubmit: handleAdvanceSearchSubmit
      }
    )
  ] }) });
}
function NodesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NodesList, {});
}
export {
  NodesPage as default
};
//# sourceMappingURL=_dashboard.nodes._index-DKS7r6VU.js.map
