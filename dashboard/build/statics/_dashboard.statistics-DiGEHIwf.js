import { j as jsxRuntimeExports, r as reactExports } from "./react-D6OUsQqF.js";
import { P as PageHeader } from "./page-header-C5rLxqcj.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { f as createLucideIcon, a as useDirDetection, ap as useGetUsage, aq as useGetAdminUsage, ar as Period, D as useGetAdminsSimple, as as useGetUsersSubUpdateChart, c as cn, ah as useGetNodesSimple, g as useTheme, at as formatOffsetDateTime, au as useGetNodeStatsPeriodic, av as useRealtimeNodeStats, aw as getGetSystemStatsQueryKey, ax as getSystemStats } from "./index-C_i3x-Gf.js";
import { a as CardContent, C as Card, b as CardHeader, c as CardTitle, d as CardDescription, e as CardFooter } from "./card-5ZQOfa_i.js";
import { g as getChartQueryRangeFromDateRange, a as getChartQueryRangeFromShortcut, p as pickStatsArray, f as formatPeriodLabelForPeriod, b as getXAxisIntervalForShortcut, C as ChartContainer, c as ChartTooltip, d as formatTooltipDate, t as toStatsRecord, e as buildPeriodOptions, h as getDefaultPeriodOption, i as getDateRangeForPeriodOption, j as toChartQueryEndDate, k as formatPeriodLabel, l as getXAxisInterval } from "./chart-period-utils-BvUAioDp.js";
import { f as formatBytes, n as numberWithCommas, a as formatGigabytes } from "./formatByte-CB667FGk.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { T as TrendingUp } from "./trending-up-Ce5n35OP.js";
import { W as Wifi } from "./wifi-YUIK0HhE.js";
import { A as Activity } from "./activity-BJu46gCh.js";
import { D as Database } from "./database-Ym3sipoZ.js";
import { A as AdminFilterCombobox, C as CircularProgress, M as MemoryStick } from "./admin-filter-combobox-DPZ-nZVL.js";
import { T as TimeSelector, a as TRAFFIC_TIME_SELECTOR_SHORTCUTS, b as TimeRangeSelector, C as ChartColumn, N as NodeStatsModal } from "./node-stats-modal-DFfh12ip.js";
import { C as Calendar } from "./calendar-BM3jGkln.js";
import { B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, a as Bar, P as PieChart, b as Pie, d as Cell, A as AreaChart, T as Tooltip$1, e as Area } from "./recharts-B0278qLa.js";
import { U as Upload } from "./upload-BQo5BJ-s.js";
import { D as Download } from "./download-B0kTGv5p.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { U as Users } from "./users-CleGz3MO.js";
import { c as TooltipProvider, T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "./tooltip-BT7me4NQ.js";
import { C as Cpu } from "./cpu-Cws81pTw.js";
import { C as ChartPie } from "./chart-pie-Gl5BnZge.js";
import { I as Info } from "./info-DijVEiOM.js";
import { B as Button } from "./button-BOH66nN-.js";
import { C as Clock } from "./clock-BCHdn894.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { u as useQuery } from "./react-query-DMC2nZO-.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./react-router-C8FEAJQh.js";
import "./plus-H2QM6nQ9.js";
import "./date-picker-R6TlQCrv.js";
import "./chevron-left-Bre8eEMe.js";
import "./chevron-right-DkXHvvEa.js";
import "./chevron-down-CYTM5oAI.js";
import "./popover-BXLf6-bP.js";
import "./radix-3Azqn93X.js";
import "./input-BtfO4I3L.js";
import "./use-mobile-mll3IbV8.js";
import "./userPreferenceStorage-DH2hTFsa.js";
import "./x-C6aLLO-Y.js";
import "./avatar-D4N4v88d.js";
import "./command-AnChkD8Y.js";
import "./dialog-BlwcMUxd.js";
import "./search-DGfkalst.js";
import "./use-debounced-search-CgdykSdk.js";
import "./debounce-DDhqqvFm.js";
import "./user-round-3wZ7ngKm.js";
import "./check-ayw17ogi.js";
import "./dropdown-menu-B4MHnVyu.js";
import "./circle-CMQZw6eB.js";
import "./toggle-group-DO2v6P71.js";
const History = createLucideIcon("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
function EmptyState({ type, title, description, icon, className = "max-h-[300px] min-h-[200px]" }) {
  const { t } = useTranslation();
  const getEmptyStateContent = () => {
    switch (type) {
      case "no-data":
        return {
          icon: icon || /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-12 w-12 text-muted-foreground/50" }),
          title: title || t("statistics.noDataAvailable"),
          description: description || t("statistics.noDataDescription")
        };
      case "no-nodes":
        return {
          icon: icon || /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-12 w-12 text-muted-foreground/50" }),
          title: title || t("statistics.noNodesAvailable"),
          description: description || t("statistics.noNodesDescription")
        };
      case "loading":
        return {
          icon: icon || /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-12 w-12 animate-pulse text-muted-foreground/50" }),
          title: title || t("loading"),
          description: description || t("statistics.loadingDescription")
        };
      case "error":
        return {
          icon: icon || /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-12 w-12 text-destructive/50" }),
          title: title || t("errors.failedToLoad"),
          description: description || t("errors.connectionFailed")
        };
      default:
        return {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-12 w-12 text-muted-foreground/50" }),
          title: t("statistics.noDataAvailable"),
          description: t("statistics.noDataDescription")
        };
    }
  };
  const content = getEmptyStateContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex w-full flex-col items-center justify-center ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-md flex-col items-center gap-4 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-muted/30", children: content.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: content.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: content.description })
    ] })
  ] }) });
}
function ChartEmptyState({ type, title, description, icon, className = "max-h-[300px] min-h-[200px]" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type, title, description, icon, className }) });
}
const chartConfig = {
  usage: {
    label: "Traffic Usage (GB)",
    color: "hsl(var(--primary))"
  }
};
const isNodeUsageStat$1 = (point) => "uplink" in point && "downlink" in point;
const getTrafficBytes$1 = (point) => {
  if ("total_traffic" in point) {
    return Number(point.total_traffic || 0);
  }
  return Number(point.uplink || 0) + Number(point.downlink || 0);
};
const getDirectionalTraffic$1 = (point) => {
  if (isNodeUsageStat$1(point) && !("total_traffic" in point)) {
    return {
      uplink: Number(point.uplink || 0),
      downlink: Number(point.downlink || 0)
    };
  }
  return {
    uplink: 0,
    downlink: 0
  };
};
function CustomBarTooltip({ active, payload, period }) {
  const { t, i18n } = useTranslation();
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;
  const formattedDate = data._period_start ? formatTooltipDate(data._period_start, period, i18n.language) : data.time;
  const isRTL = i18n.language === "fa";
  const hasDirectionalTraffic = (data._uplink || 0) > 0 || (data._downlink || 0) > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-w-[140px] rounded border border-border bg-background p-2 text-[11px] shadow ${isRTL ? "text-right" : "text-left"}`, dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-1.5 text-[11px] font-semibold opacity-70 ${isRTL ? "text-right" : "text-center"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block", children: formattedDate }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-1.5 text-[11px] text-muted-foreground ${isRTL ? "text-right" : "text-center"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        t("statistics.totalUsage", { defaultValue: "Total" }),
        ": "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", className: "inline-block font-mono", children: [
        data.usage,
        " GB"
      ] })
    ] }),
    hasDirectionalTraffic && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 text-[10px] text-muted-foreground ${isRTL ? "flex-row-reverse" : "flex-row"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3 w-3 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block font-mono", children: formatBytes(data._uplink) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 opacity-60", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block font-mono", children: formatBytes(data._downlink) })
    ] }) })
  ] });
}
function CostumeBarChart({ nodeId }) {
  const [selectedAdmin, setSelectedAdmin] = reactExports.useState("all");
  const [selectedTime, setSelectedTime] = reactExports.useState("1w");
  const [showCustomRange, setShowCustomRange] = reactExports.useState(false);
  const [customRange, setCustomRange] = reactExports.useState(void 0);
  const [windowWidth, setWindowWidth] = reactExports.useState(() => typeof window !== "undefined" ? window.innerWidth : 1024);
  const { t, i18n } = useTranslation();
  const dir = useDirDetection();
  const shouldUseNodeUsage = selectedAdmin === "all";
  const activeQueryRange = reactExports.useMemo(() => {
    if (showCustomRange && customRange?.from && customRange?.to) {
      return getChartQueryRangeFromDateRange(customRange, selectedTime);
    }
    return getChartQueryRangeFromShortcut(selectedTime, /* @__PURE__ */ new Date(), { minuteForOneHour: true });
  }, [showCustomRange, customRange, selectedTime]);
  const activePeriod = activeQueryRange.period;
  const nodeUsageParams = reactExports.useMemo(
    () => ({
      period: activePeriod,
      start: activeQueryRange.startDate,
      end: activeQueryRange.endDate,
      ...nodeId !== void 0 ? { node_id: nodeId } : {}
    }),
    [activePeriod, activeQueryRange.startDate, activeQueryRange.endDate, nodeId]
  );
  const adminUsageParams = reactExports.useMemo(
    () => ({
      period: activePeriod,
      start: activeQueryRange.startDate,
      end: activeQueryRange.endDate,
      ...nodeId !== void 0 ? { node_id: nodeId } : {}
    }),
    [activePeriod, activeQueryRange.startDate, activeQueryRange.endDate, nodeId]
  );
  const { data: nodeUsageData, isLoading: isLoadingNodeUsage, error: nodeUsageError } = useGetUsage(nodeUsageParams, {
    query: {
      enabled: shouldUseNodeUsage,
      refetchInterval: 1e3 * 60 * 5
    }
  });
  const { data: adminUsageData, isLoading: isLoadingAdminUsage, error: adminUsageError } = useGetAdminUsage(selectedAdmin, adminUsageParams, {
    query: {
      enabled: !shouldUseNodeUsage && selectedAdmin !== "all",
      refetchInterval: 1e3 * 60 * 5
    }
  });
  const usageData = shouldUseNodeUsage ? nodeUsageData : adminUsageData;
  const isLoading = shouldUseNodeUsage ? isLoadingNodeUsage : isLoadingAdminUsage;
  const error = shouldUseNodeUsage ? nodeUsageError : adminUsageError;
  const statsArr = reactExports.useMemo(
    () => pickStatsArray(usageData?.stats, nodeId !== void 0 ? [String(nodeId), "-1"] : ["-1"]),
    [usageData?.stats, nodeId]
  );
  const chartData = reactExports.useMemo(
    () => statsArr.map((point) => {
      const usageBytes = getTrafficBytes$1(point);
      const directionalTraffic = getDirectionalTraffic$1(point);
      return {
        time: formatPeriodLabelForPeriod(point.period_start, activePeriod, i18n.language),
        usage: parseFloat((usageBytes / (1024 * 1024 * 1024)).toFixed(2)),
        _uplink: directionalTraffic.uplink,
        _downlink: directionalTraffic.downlink,
        _period_start: point.period_start
      };
    }),
    [statsArr, activePeriod, i18n.language]
  );
  const totalUsage = reactExports.useMemo(() => {
    const total = statsArr.reduce((sum, point) => sum + getTrafficBytes$1(point), 0);
    if (total <= 0) return "0";
    return String(formatBytes(total, 2));
  }, [statsArr]);
  const xAxisInterval = reactExports.useMemo(() => {
    if (showCustomRange && customRange?.from && customRange?.to) {
      if (activePeriod === Period.hour || activePeriod === Period.minute) {
        return Math.max(1, Math.floor(chartData.length / 8));
      }
      const daysDiff = Math.ceil(Math.abs(customRange.to.getTime() - customRange.from.getTime()) / (1e3 * 60 * 60 * 24));
      if (daysDiff > 30) {
        return Math.max(1, Math.floor(chartData.length / 5));
      }
      if (daysDiff > 7) {
        return Math.max(1, Math.floor(chartData.length / 8));
      }
      return 0;
    }
    if (windowWidth < 500 && selectedTime === "1w") {
      return chartData.length <= 4 ? 0 : Math.max(1, Math.floor(chartData.length / 4));
    }
    return getXAxisIntervalForShortcut(selectedTime, chartData.length, { minuteForOneHour: true });
  }, [showCustomRange, customRange, activePeriod, chartData.length, selectedTime, windowWidth]);
  reactExports.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleTimeSelect = reactExports.useCallback((value) => {
    setSelectedTime(value);
    setShowCustomRange(false);
    setCustomRange(void 0);
  }, []);
  const handleCustomRangeChange = reactExports.useCallback((range) => {
    setCustomRange(range);
    if (range?.from && range?.to) {
      setShowCustomRange(true);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col items-stretch space-y-0 border-b p-0 xl:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-2 border-b px-4 py-3 xl:px-6 xl:py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col justify-center gap-1 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm sm:text-base", children: t("statistics.trafficUsage") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs sm:text-sm", children: t("statistics.trafficUsageDescription") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full min-w-0 flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TimeSelector, { selectedTime, setSelectedTime: handleTimeSelect, shortcuts: TRAFFIC_TIME_SELECTOR_SHORTCUTS, maxVisible: 5, className: "w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Custom Range",
                className: `shrink-0 rounded border p-1 ${showCustomRange ? "bg-muted" : ""}`,
                onClick: () => {
                  const next = !showCustomRange;
                  setShowCustomRange(next);
                  if (!next) {
                    setCustomRange(void 0);
                  }
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdminFilterCombobox, { value: selectedAdmin, onValueChange: setSelectedAdmin, className: "w-full sm:w-[220px] sm:shrink-0" })
        ] }),
        showCustomRange && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimeRangeSelector, { onRangeChange: handleCustomRangeChange, initialRange: customRange, className: "w-full" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-0 flex flex-col justify-center p-4 xl:border-l xl:p-5 xl:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t("statistics.usageDuringPeriod") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "flex justify-center text-base text-foreground sm:text-lg", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20" }) : totalUsage })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { dir, className: "px-4 pt-4 sm:px-6 sm:pt-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex max-h-[300px] min-h-[150px] w-full items-center justify-center sm:max-h-[400px] sm:min-h-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[250px] w-full sm:h-[300px]" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type: "error", className: "max-h-[300px] min-h-[150px] sm:max-h-[400px] sm:min-h-[200px]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChartContainer,
      {
        dir: "ltr",
        config: chartConfig,
        className: "h-[200px] w-full overflow-x-auto sm:h-[320px] lg:h-[400px]",
        children: chartData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { accessibilityLayer: true, data: chartData, margin: { top: 5, right: 10, left: 10, bottom: 5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { direction: "ltr", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            XAxis,
            {
              direction: "ltr",
              dataKey: "time",
              tickLine: false,
              tickMargin: 8,
              axisLine: false,
              interval: xAxisInterval,
              tick: {
                fill: "hsl(var(--muted-foreground))",
                fontSize: 8,
                fontWeight: 500
              },
              minTickGap: 5
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YAxis,
            {
              direction: "ltr",
              tickLine: false,
              axisLine: false,
              tickFormatter: (value) => formatBytes(Number(value || 0) * 1024 * 1024 * 1024, 0, true).toString(),
              tick: {
                fill: "hsl(var(--muted-foreground))",
                fontSize: 8,
                fontWeight: 500
              },
              width: 28,
              tickMargin: 2
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomBarTooltip, { period: activePeriod }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "usage", fill: "var(--color-usage)", radius: 6 })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            type: "no-data",
            title: t("statistics.noDataInRange"),
            description: t("statistics.noDataInRangeDescription"),
            className: "max-h-[300px] min-h-[150px] sm:max-h-[400px] sm:min-h-[200px]"
          }
        )
      }
    ) }) })
  ] });
}
var M = (e, i, s, u, m, a, l, h) => {
  let d = document.documentElement, w = ["light", "dark"];
  function p(n) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
      k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
    }), R(n);
  }
  function R(n) {
    h && w.includes(n) && (d.style.colorScheme = n);
  }
  function c() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) p(u);
  else try {
    let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
    p(y);
  } catch (n) {
  }
};
var x = reactExports.createContext(void 0), U = { setTheme: (e) => {
}, themes: [] }, z = () => {
  var e;
  return (e = reactExports.useContext(x)) != null ? e : U;
};
reactExports.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
  let p = JSON.stringify([s, i, a, e, h, l, u, m]).slice(1, -1);
  return reactExports.createElement("script", { ...w, suppressHydrationWarning: true, nonce: typeof window == "undefined" ? d : "", dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` } });
});
const buildSegmentKey = (name, index) => {
  const sanitized = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return sanitized || `segment-${index}`;
};
const generateDistinctColor = (index, _totalNodes, isDark) => {
  const distinctHues = [
    0,
    // Red
    30,
    // Orange
    60,
    // Yellow
    120,
    // Green
    180,
    // Cyan
    210,
    // Blue
    240,
    // Indigo
    270,
    // Purple
    300,
    // Magenta
    330,
    // Pink
    15,
    // Red-orange
    45,
    // Yellow-orange
    75,
    // Yellow-green
    150,
    // Green-cyan
    200,
    // Cyan-blue
    225,
    // Blue-indigo
    255,
    // Indigo-purple
    285,
    // Purple-magenta
    315,
    // Magenta-pink
    345
    // Pink-red
  ];
  const hue = distinctHues[index % distinctHues.length];
  const saturationVariations = [65, 75, 85, 70, 80, 60, 90, 55, 95, 50];
  const lightnessVariations = isDark ? [45, 55, 35, 50, 40, 60, 30, 65, 25, 70] : [40, 50, 30, 45, 35, 55, 25, 60, 20, 65];
  const saturation = saturationVariations[index % saturationVariations.length];
  const lightness = lightnessVariations[index % lightnessVariations.length];
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
const formatPercentage = (value) => {
  if (value > 0 && value < 0.1) {
    return "<0.1%";
  }
  return `${value.toFixed(1)}%`;
};
function CustomTooltip$2({ active, payload }) {
  const { t } = useTranslation();
  if (!active || !payload || !payload.length) {
    return null;
  }
  const data = payload[0].payload;
  const { agent, updates, percentage, fill } = data;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-background/95 p-3 shadow-lg backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full border border-border/20", style: { backgroundColor: fill } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: agent })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t("statistics.subscriptions") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-semibold text-foreground", children: numberWithCommas(updates) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t("statistics.percentage") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs font-medium", children: formatPercentage(percentage) })
      ] })
    ] })
  ] });
}
function UserSubUpdatePieChart({ username, adminId }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const { resolvedTheme } = z();
  const [selectedAdmin, setSelectedAdmin] = reactExports.useState(() => adminId != null ? String(adminId) : "all");
  reactExports.useEffect(() => {
    if (adminId != null) {
      setSelectedAdmin(String(adminId));
    }
  }, [adminId]);
  const { data: admins, isLoading: isLoadingAdmins } = useGetAdminsSimple({ all: true }, {
    query: {
      enabled: true,
      staleTime: 5 * 60 * 1e3
    }
  });
  const params = reactExports.useMemo(() => {
    const payload = {};
    if (username) {
      payload.username = username;
    }
    const parsedAdminId = selectedAdmin !== "all" ? Number(selectedAdmin) : void 0;
    if (typeof parsedAdminId === "number" && Number.isFinite(parsedAdminId)) {
      payload.admin_id = parsedAdminId;
    }
    return Object.keys(payload).length > 0 ? payload : void 0;
  }, [username, selectedAdmin]);
  const { data, isLoading, error } = useGetUsersSubUpdateChart(params, {
    query: {
      refetchInterval: 6e4
    }
  });
  const segments = reactExports.useMemo(() => {
    if (!data?.segments?.length) {
      return [];
    }
    return data.segments.map((segment, index) => {
      const safePercentage = typeof segment.percentage === "number" && !Number.isNaN(segment.percentage) ? segment.percentage : 0;
      const safeCount = typeof segment.count === "number" && !Number.isNaN(segment.count) ? segment.count : 0;
      const key = buildSegmentKey(segment.name, index);
      let color;
      if (index === 0) {
        color = "hsl(var(--primary))";
      } else if (index < 5) {
        color = `hsl(var(--chart-${index + 1}))`;
      } else {
        color = generateDistinctColor(index, data?.segments?.length || 0, resolvedTheme === "dark");
      }
      return {
        ...segment,
        key,
        percentage: safePercentage,
        count: safeCount,
        color
      };
    });
  }, [data?.segments, resolvedTheme]);
  const chartData = reactExports.useMemo(
    () => segments.map((segment) => ({
      segmentKey: segment.key,
      agent: segment.name,
      updates: segment.count,
      percentage: segment.percentage,
      fill: segment.color
    })),
    [segments]
  );
  const piePaddingAngle = reactExports.useMemo(() => {
    if (chartData.length <= 1) {
      return 0;
    }
    const validSlices = chartData.filter((segment) => segment.updates > 0);
    if (validSlices.length <= 1) {
      return 0;
    }
    const totalUpdates = validSlices.reduce((sum, segment) => sum + segment.updates, 0);
    if (totalUpdates <= 0) {
      return 0;
    }
    const smallestSliceAngle = Math.min(...validSlices.map((segment) => segment.updates / totalUpdates * 360));
    const bySegmentDensity = 36 / validSlices.length;
    const bySmallestSlice = smallestSliceAngle * 0.7;
    return Math.max(0, Math.min(3, bySegmentDensity, bySmallestSlice));
  }, [chartData]);
  const pieStrokeWidth = chartData.length > 16 ? 1 : 2;
  const chartConfig2 = reactExports.useMemo(() => {
    const dynamicConfig = segments.reduce((config, segment) => {
      config[segment.key] = {
        label: segment.name,
        color: segment.color
      };
      return config;
    }, {});
    return {
      updates: {
        label: t("statistics.totalSubscriptions")
      },
      ...dynamicConfig
    };
  }, [segments, t]);
  const hasData = segments.some((segment) => segment.count > 0);
  const total = data?.total ?? 0;
  const errorDescription = error && typeof error === "object" && "message" in error ? String(error.message) : void 0;
  const leadingSegment = reactExports.useMemo(() => [...segments].sort((a, b) => b.count - a.count)[0], [segments]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-4 pb-4 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "mb-2", children: t("statistics.subscriptionDistribution") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("statistics.subscriptionDistributionDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-2 lg:max-w-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: t("statistics.adminFilterLabel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedAdmin, onValueChange: setSelectedAdmin, disabled: isLoadingAdmins, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("statistics.adminFilterPlaceholder") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: t("statistics.adminFilterAll") }),
            (admins?.admins || []).filter((admin) => admin.id != null).map((admin) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(admin.id), children: admin.username }, admin.id))
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingState, {}) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChartEmptyState, { type: "error", title: t("errors.statisticsLoadFailed"), description: errorDescription || t("errors.connectionFailed"), className: "max-h-[340px] min-h-[260px]" }) : !hasData ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChartEmptyState, { type: "no-data", className: "max-h-[340px] min-h-[260px]" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 lg:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartContainer, { config: chartConfig2, className: "mx-auto h-[220px] w-[220px] max-h-[320px] max-w-[320px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] [&_.recharts-text]:fill-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip$2, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: chartData, dataKey: "updates", nameKey: "agent", innerRadius: "55%", outerRadius: "95%", paddingAngle: piePaddingAngle, strokeWidth: pieStrokeWidth, isAnimationActive: true, children: chartData.map((segment) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: segment.fill }, segment.segmentKey)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex w-full flex-1 flex-col gap-4 lg:w-1/2 ${dir === "rtl" ? "items-end" : "items-start"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xs rounded-lg border border-border/60 bg-muted/30 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: t("statistics.totalSubscriptions") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { dir: "ltr", className: "mt-2 text-3xl font-semibold text-foreground", children: numberWithCommas(total) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 w-full overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "w-full space-y-3", children: segments.map((segment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex items-center justify-between gap-4 rounded-md border border-border/40 px-3 py-2 max-w-full ${dir === "rtl" ? "flex-row-reverse" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 overflow-hidden ${dir === "rtl" ? "flex-row-reverse" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full", style: { backgroundColor: segment.color } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground flex-1 truncate", children: segment.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-baseline gap-3 text-sm font-semibold text-foreground ${dir === "rtl" ? "flex-row-reverse" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "font-mono", children: numberWithCommas(segment.count) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-muted-foreground", children: formatPercentage(segment.percentage) })
          ] })
        ] }, segment.key)) }) })
      ] })
    ] }) }),
    leadingSegment && /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "flex-col gap-1.5 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-3 py-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("statistics.leadingClientMessage", {
          client: leadingSegment.name,
          percentage: leadingSegment.percentage > 0 && leadingSegment.percentage < 0.1 ? "<0.1" : leadingSegment.percentage.toFixed(1)
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto h-2.5 w-2.5 rounded-full border-2 border-primary/30 shadow-sm", style: { backgroundColor: leadingSegment.color } })
    ] }) })
  ] });
}
function LoadingState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 lg:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full items-center justify-center lg:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[220px] w-[220px] rounded-full sm:h-[260px] sm:w-[260px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full max-w-xs rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full max-w-xs rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16" })
      ] }, index)) })
    ] })
  ] });
}
function SpeedValueHint({ primary, secondary, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "inline cursor-default rounded-sm p-0 text-left align-baseline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className, children: primary }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: secondary })
  ] }) });
}
function SystemStatisticsSection({ currentStats }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const formatMbpsPair = (bytesPerSecond, decimals = 1) => {
    const mbps = bytesPerSecond * 8 / (1024 * 1024);
    const mbpsText = mbps.toFixed(decimals).replace(/\.0$/, "");
    const mbPerSec = bytesPerSecond / (1024 * 1024);
    const mbPerSecText = mbPerSec.toFixed(decimals).replace(/\.0$/, "");
    return { mbpsText, mbPerSecText };
  };
  const isNodeStats = (stats) => {
    return "incoming_bandwidth_speed" in stats;
  };
  const getTotalTrafficValue = () => {
    if (!currentStats) return 0;
    if (isNodeStats(currentStats)) {
      return Number(currentStats.incoming_bandwidth_speed) + Number(currentStats.outgoing_bandwidth_speed);
    } else {
      return Number(currentStats.incoming_bandwidth) + Number(currentStats.outgoing_bandwidth);
    }
  };
  const getIncomingBandwidth = () => {
    if (!currentStats) return 0;
    if (isNodeStats(currentStats)) {
      return Number(currentStats.incoming_bandwidth_speed) || 0;
    } else {
      return Number(currentStats.incoming_bandwidth) || 0;
    }
  };
  const getOutgoingBandwidth = () => {
    if (!currentStats) return 0;
    if (isNodeStats(currentStats)) {
      return Number(currentStats.outgoing_bandwidth_speed) || 0;
    } else {
      return Number(currentStats.outgoing_bandwidth) || 0;
    }
  };
  const getMemoryUsage = () => {
    if (!currentStats) return { used: 0, total: 0, percentage: 0 };
    const memUsed = Number(currentStats.mem_used) || 0;
    const memTotal = Number(currentStats.mem_total) || 0;
    const percentage = memTotal > 0 ? memUsed / memTotal * 100 : 0;
    return { used: memUsed, total: memTotal, percentage };
  };
  const getCpuInfo = () => {
    if (!currentStats) return { usage: 0, cores: 0 };
    let cpuUsage = Number(currentStats.cpu_usage) || 0;
    const cpuCores = Number(currentStats.cpu_cores) || 0;
    cpuUsage = Math.min(Math.max(cpuUsage, 0), 100);
    return { usage: Math.round(cpuUsage * 10) / 10, cores: cpuCores };
  };
  const memory = getMemoryUsage();
  const cpu = getCpuInfo();
  const memoryPercent = Math.min(Math.max(memory.percentage, 0), 100);
  const totalSpeed = formatMbpsPair(getTotalTrafficValue() || 0);
  const incomingSpeed = formatMbpsPair(getIncomingBandwidth() || 0);
  const outgoingSpeed = formatMbpsPair(getOutgoingBandwidth() || 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "grid h-full w-full gap-3 sm:gap-4 lg:gap-6",
        // Responsive grid: 1 column on mobile, 2 on small tablet, 3 on large tablet and desktop
        "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
        // Ensure equal height for all cards
        "auto-rows-fr"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full animate-fade-in", style: { animationDuration: "600ms", animationDelay: "50ms" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { dir, className: "group relative h-full w-full overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500",
                "dark:from-primary/5 dark:to-transparent",
                "group-hover:opacity-100"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between sm:mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 p-1.5 sm:p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-4 w-4 text-primary sm:h-5 sm:w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium leading-tight text-muted-foreground sm:truncate sm:text-sm", children: t("statistics.cpuUsage") }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { value: cpu.usage, size: 38, strokeWidth: 4, showValue: false, className: "shrink-0 opacity-90" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-1 items-center gap-1 sm:gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", className: "text-xl font-bold leading-tight transition-all duration-300 sm:text-2xl lg:text-3xl", children: [
                cpu.usage,
                "%"
              ] }) }),
              cpu.cores > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1 rounded-md bg-muted/50 px-1.5 py-1 text-xs text-muted-foreground sm:px-2 sm:text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium sm:whitespace-nowrap", children: [
                  cpu.cores,
                  " ",
                  t("statistics.cores")
                ] })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full animate-fade-in", style: { animationDuration: "600ms", animationDelay: "150ms" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { dir, className: "group relative h-full w-full overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500",
                "dark:from-primary/5 dark:to-transparent",
                "group-hover:opacity-100"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start justify-between sm:mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 p-1.5 sm:p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryStick, { className: "h-4 w-4 text-primary sm:h-5 sm:w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium leading-tight text-muted-foreground sm:truncate sm:text-sm", children: t("statistics.ramUsage") }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { value: memoryPercent, size: 38, strokeWidth: 4, showValue: false, className: "shrink-0 opacity-90" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 sm:gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-base font-bold leading-tight transition-all duration-300 sm:text-xl lg:text-2xl", children: currentStats ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "whitespace-normal sm:whitespace-nowrap", children: [
              formatBytes(memory.used, 1, false, false, "GB"),
              "/",
              formatBytes(memory.total, 1, true, false, "GB"),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-sm font-medium text-muted-foreground", children: [
                "(",
                memoryPercent.toFixed(1),
                "%)"
              ] })
            ] }) : 0 }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full animate-fade-in sm:col-span-2 lg:col-span-1", style: { animationDuration: "600ms", animationDelay: "250ms" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { dir, className: "group relative h-full w-full overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500",
                "dark:from-primary/5 dark:to-transparent",
                "group-hover:opacity-100"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex items-start justify-between sm:mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 p-1.5 sm:p-2", children: currentStats && isNodeStats(currentStats) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-primary sm:h-5 sm:w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4 text-primary sm:h-5 sm:w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium leading-tight text-muted-foreground sm:truncate sm:text-sm", children: currentStats && isNodeStats(currentStats) ? t("statistics.networkSpeed") : t("statistics.totalTraffic") }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(dir === "rtl" && "text-right", "min-w-0 flex-1"), dir: "ltr", children: currentStats && isNodeStats(currentStats) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                SpeedValueHint,
                {
                  primary: `${totalSpeed.mbPerSecText} MB/s`,
                  secondary: `${totalSpeed.mbpsText} Mb/s`,
                  className: "inline-block whitespace-nowrap text-xl font-bold leading-tight sm:text-2xl lg:text-3xl"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold leading-tight sm:text-2xl lg:text-3xl", children: formatBytes(getTotalTrafficValue() || 0, 1) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-wrap items-center gap-1.5 text-xs sm:gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-md bg-muted/50 px-1.5 py-1 text-green-600 dark:text-green-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3" }),
                  currentStats && isNodeStats(currentStats) ? /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedValueHint, { primary: `${incomingSpeed.mbPerSecText} MB/s`, secondary: `${incomingSpeed.mbpsText} Mb/s`, className: "whitespace-nowrap font-semibold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "whitespace-nowrap font-semibold", children: formatBytes(getIncomingBandwidth() || 0, 1) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-md bg-muted/50 px-1.5 py-1 text-blue-600 dark:text-blue-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3 w-3" }),
                  currentStats && isNodeStats(currentStats) ? /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedValueHint, { primary: `${outgoingSpeed.mbPerSecText} MB/s`, secondary: `${outgoingSpeed.mbpsText} Mb/s`, className: "whitespace-nowrap font-semibold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "whitespace-nowrap font-semibold", children: formatBytes(getOutgoingBandwidth() || 0, 1) })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
const isNodeUsageStat = (point) => "uplink" in point && "downlink" in point;
const getTrafficBytes = (point) => {
  if ("total_traffic" in point) {
    return Number(point.total_traffic || 0);
  }
  return Number(point.uplink || 0) + Number(point.downlink || 0);
};
const getDirectionalTraffic = (point) => {
  if (isNodeUsageStat(point) && !("total_traffic" in point)) {
    return {
      uplink: Number(point.uplink || 0),
      downlink: Number(point.downlink || 0)
    };
  }
  return {
    uplink: 0,
    downlink: 0
  };
};
function CustomTooltip$1({ active, payload, chartConfig: chartConfig2, dir, period }) {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;
  const formattedDate = data._period_start ? formatTooltipDate(data._period_start, period, i18n.language) : String(data.time || "");
  const getNodeColor = (nodeName) => chartConfig2?.[nodeName]?.color || "hsl(var(--chart-1))";
  const isRTL = dir === "rtl";
  const activeNodes = Object.keys(data).filter((key) => !key.startsWith("_") && key !== "time" && key !== "_period_start" && Number(data[key] || 0) > 0).map((nodeName) => ({
    name: nodeName,
    usage: Number(data[nodeName] || 0),
    uplink: Number(data[`_uplink_${nodeName}`] || 0),
    downlink: Number(data[`_downlink_${nodeName}`] || 0)
  })).sort((a, b) => b.usage - a.usage);
  const hasDirectionalTraffic = activeNodes.some((node) => (node.uplink || 0) > 0 || (node.downlink || 0) > 0);
  const maxNodesToShow = isMobile ? 3 : 6;
  const nodesToShow = activeNodes.slice(0, maxNodesToShow);
  const hasMoreNodes = activeNodes.length > maxNodesToShow;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `min-w-[120px] max-w-[280px] rounded border border-border bg-background p-1.5 text-[10px] shadow sm:min-w-[140px] sm:max-w-[300px] sm:p-2 sm:text-xs ${isRTL ? "text-right" : "text-left"} ${isMobile ? "max-h-[200px] overflow-y-auto" : ""}`,
      dir: isRTL ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-center text-[10px] font-semibold opacity-70 sm:text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block truncate", children: formattedDate }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center justify-center gap-1.5 text-center text-[10px] text-muted-foreground sm:text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            t("statistics.totalUsage", { defaultValue: "Total" }),
            ": "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block truncate font-mono", children: formatGigabytes(activeNodes.reduce((sum, node) => sum + node.usage, 0)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid gap-1 sm:gap-1.5 ${nodesToShow.length > (isMobile ? 2 : 3) ? "grid-cols-2" : "grid-cols-1"}`, children: [
          nodesToShow.map((node) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col gap-0.5 ${isRTL ? "items-end" : "items-start"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-0.5 text-[10px] font-semibold sm:text-xs ${isRTL ? "flex-row-reverse" : "flex-row"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 flex-shrink-0 rounded-full sm:h-2 sm:w-2", style: { backgroundColor: getNodeColor(node.name) } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[60px] overflow-hidden truncate text-ellipsis sm:max-w-[80px]", title: node.name, children: node.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-[9px] font-mono text-muted-foreground sm:text-[10px]", children: formatGigabytes(node.usage) }),
            hasDirectionalTraffic && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-0.5 text-[9px] text-muted-foreground sm:text-[10px] ${isRTL ? "flex-row-reverse" : "flex-row"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-2.5 w-2.5 flex-shrink-0 sm:h-3 sm:w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block max-w-[40px] overflow-hidden truncate text-ellipsis font-mono sm:max-w-[50px]", title: String(formatBytes(node.uplink)), children: formatBytes(node.uplink) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-0.5 text-[8px] opacity-60 sm:text-[10px]", children: "|" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-2.5 w-2.5 flex-shrink-0 sm:h-3 sm:w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block max-w-[40px] overflow-hidden truncate text-ellipsis font-mono sm:max-w-[50px]", title: String(formatBytes(node.downlink)), children: formatBytes(node.downlink) })
            ] })
          ] }, node.name)),
          hasMoreNodes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full mt-1 flex w-full items-center justify-center gap-0.5 text-[9px] text-muted-foreground sm:text-[10px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-2.5 w-2.5 flex-shrink-0 sm:h-3 sm:w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center", children: t("statistics.clickForMore", { defaultValue: "Click for more details" }) })
          ] })
        ] })
      ]
    }
  );
}
function NodePieTooltip({ active, payload }) {
  const { t } = useTranslation();
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background/95 p-2 text-xs shadow-sm backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full border border-border/20", style: { backgroundColor: data.fill } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: data.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("statistics.totalUsage", { defaultValue: "Total Usage" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "font-mono font-semibold text-foreground", children: formatBytes(data.bytes) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("statistics.percentage", { defaultValue: "Percentage" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "font-mono text-foreground", children: `${data.percentage.toFixed(1)}%` })
    ] })
  ] });
}
function AllNodesStackedBarChart() {
  const [chartView, setChartView] = reactExports.useState("bar");
  const [selectedAdmin, setSelectedAdmin] = reactExports.useState("all");
  const [selectedTime, setSelectedTime] = reactExports.useState("1w");
  const [showCustomRange, setShowCustomRange] = reactExports.useState(false);
  const [customRange, setCustomRange] = reactExports.useState(void 0);
  const [windowWidth, setWindowWidth] = reactExports.useState(() => typeof window !== "undefined" ? window.innerWidth : 1024);
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [selectedData, setSelectedData] = reactExports.useState(null);
  const [currentDataIndex, setCurrentDataIndex] = reactExports.useState(0);
  const chartContainerRef = reactExports.useRef(null);
  const { t, i18n } = useTranslation();
  const dir = useDirDetection();
  const { data: nodesResponse } = useGetNodesSimple({ all: true }, { query: { enabled: true } });
  const { resolvedTheme } = useTheme();
  const shouldUseNodeUsage = selectedAdmin === "all";
  const handleModalNavigate = (index) => {
    if (!chartData[index]) return;
    setCurrentDataIndex(index);
    setSelectedData(chartData[index]);
  };
  const nodeList = reactExports.useMemo(() => nodesResponse?.nodes || [], [nodesResponse]);
  const generateDistinctColor2 = reactExports.useCallback((index, isDark) => {
    const distinctHues = [0, 30, 60, 120, 180, 210, 240, 270, 300, 330, 15, 45, 75, 150, 200, 225, 255, 285, 315, 345];
    const saturationVariations = [65, 75, 85, 70, 80, 60, 90, 55, 95, 50];
    const lightnessVariations = isDark ? [45, 55, 35, 50, 40, 60, 30, 65, 25, 70] : [40, 50, 30, 45, 35, 55, 25, 60, 20, 65];
    const hue = distinctHues[index % distinctHues.length];
    const saturation = saturationVariations[index % saturationVariations.length];
    const lightness = lightnessVariations[index % lightnessVariations.length];
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }, []);
  const chartConfig2 = reactExports.useMemo(() => {
    const config = {};
    const isDark = resolvedTheme === "dark";
    nodeList.forEach((node, index) => {
      if (index === 0) {
        config[node.name] = { label: node.name, color: "hsl(var(--primary))" };
        return;
      }
      if (index < 5) {
        config[node.name] = { label: node.name, color: `hsl(var(--chart-${index + 1}))` };
        return;
      }
      config[node.name] = { label: node.name, color: generateDistinctColor2(index, isDark) };
    });
    return config;
  }, [generateDistinctColor2, nodeList, resolvedTheme]);
  const activeQueryRange = reactExports.useMemo(() => {
    if (showCustomRange && customRange?.from && customRange?.to) {
      return getChartQueryRangeFromDateRange(customRange, selectedTime);
    }
    return getChartQueryRangeFromShortcut(selectedTime, /* @__PURE__ */ new Date(), { minuteForOneHour: true });
  }, [showCustomRange, customRange, selectedTime]);
  const activePeriod = activeQueryRange.period;
  const usageParams = reactExports.useMemo(
    () => ({
      period: activePeriod,
      start: activeQueryRange.startDate,
      end: activeQueryRange.endDate,
      group_by_node: true
    }),
    [activePeriod, activeQueryRange.startDate, activeQueryRange.endDate]
  );
  const { data: nodeUsageData, isLoading: isLoadingNodesUsage, error: nodesUsageError } = useGetUsage(usageParams, {
    query: {
      enabled: shouldUseNodeUsage,
      refetchInterval: 1e3 * 60 * 5
    }
  });
  const { data: adminUsageData, isLoading: isLoadingAdminUsage, error: adminUsageError } = useGetAdminUsage(selectedAdmin, usageParams, {
    query: {
      enabled: !shouldUseNodeUsage && selectedAdmin !== "all",
      refetchInterval: 1e3 * 60 * 5
    }
  });
  const usageData = shouldUseNodeUsage ? nodeUsageData : adminUsageData;
  const isLoading = shouldUseNodeUsage ? isLoadingNodesUsage : isLoadingAdminUsage;
  const error = shouldUseNodeUsage ? nodesUsageError : adminUsageError;
  const statsByNode = reactExports.useMemo(() => toStatsRecord(usageData?.stats), [usageData?.stats]);
  const { chartData, totalUsage } = reactExports.useMemo(() => {
    const statsKeys = Object.keys(statsByNode);
    if (statsKeys.length === 0) {
      return { chartData: [], totalUsage: "0" };
    }
    const hasIndividualNodeData = statsKeys.some((key) => key !== "-1");
    const nodeCount = Math.max(nodeList.length, 1);
    if (!hasIndividualNodeData && Array.isArray(statsByNode["-1"])) {
      const aggregatedStats = statsByNode["-1"];
      const aggregatedChartData = aggregatedStats.map((point) => {
        const usageBytes = getTrafficBytes(point);
        const directionalTraffic = getDirectionalTraffic(point);
        const usagePerNodeInGb = usageBytes / nodeCount / (1024 * 1024 * 1024);
        const entry = {
          time: formatPeriodLabelForPeriod(point.period_start, activePeriod, i18n.language),
          _period_start: point.period_start
        };
        nodeList.forEach((node) => {
          entry[node.name] = parseFloat(usagePerNodeInGb.toFixed(2));
          entry[`_uplink_${node.name}`] = directionalTraffic.uplink / nodeCount;
          entry[`_downlink_${node.name}`] = directionalTraffic.downlink / nodeCount;
        });
        return entry;
      });
      const totalBytes2 = aggregatedStats.reduce((sum, point) => sum + getTrafficBytes(point), 0);
      return {
        chartData: aggregatedChartData,
        totalUsage: totalBytes2 > 0 ? String(formatBytes(totalBytes2, 2)) : "0"
      };
    }
    const allPeriods = /* @__PURE__ */ new Set();
    Object.values(statsByNode).forEach((statsArray) => {
      statsArray.forEach((stat) => allPeriods.add(stat.period_start));
    });
    const sortedPeriods = Array.from(allPeriods).sort();
    const chartRows = sortedPeriods.map((periodStart) => {
      const row = {
        time: formatPeriodLabelForPeriod(periodStart, activePeriod, i18n.language),
        _period_start: periodStart
      };
      nodeList.forEach((node) => {
        const nodeStats = statsByNode[String(node.id)]?.find((stat) => stat.period_start === periodStart);
        if (!nodeStats) {
          row[node.name] = 0;
          row[`_uplink_${node.name}`] = 0;
          row[`_downlink_${node.name}`] = 0;
          return;
        }
        const usageBytes = getTrafficBytes(nodeStats);
        const directionalTraffic = getDirectionalTraffic(nodeStats);
        row[node.name] = usageBytes / (1024 * 1024 * 1024);
        row[`_uplink_${node.name}`] = directionalTraffic.uplink;
        row[`_downlink_${node.name}`] = directionalTraffic.downlink;
      });
      return row;
    });
    let totalBytes = 0;
    Object.values(statsByNode).forEach((statsArray) => {
      statsArray.forEach((stat) => {
        totalBytes += getTrafficBytes(stat);
      });
    });
    return {
      chartData: chartRows,
      totalUsage: totalBytes > 0 ? String(formatBytes(totalBytes, 2)) : "0"
    };
  }, [statsByNode, nodeList, activePeriod, i18n.language]);
  const xAxisInterval = reactExports.useMemo(() => {
    if (showCustomRange && customRange?.from && customRange?.to) {
      if (activePeriod === Period.hour || activePeriod === Period.minute) {
        return Math.max(1, Math.floor(chartData.length / 8));
      }
      const daysDiff = Math.ceil(Math.abs(customRange.to.getTime() - customRange.from.getTime()) / (1e3 * 60 * 60 * 24));
      if (daysDiff > 30) {
        return Math.max(1, Math.floor(chartData.length / 5));
      }
      if (daysDiff > 7) {
        return Math.max(1, Math.floor(chartData.length / 8));
      }
      return 0;
    }
    if (windowWidth < 500 && selectedTime === "1w") {
      return chartData.length <= 4 ? 0 : Math.max(1, Math.floor(chartData.length / 4));
    }
    return getXAxisIntervalForShortcut(selectedTime, chartData.length, { minuteForOneHour: true });
  }, [showCustomRange, customRange, activePeriod, selectedTime, chartData.length, windowWidth]);
  const pieData = reactExports.useMemo(() => {
    if (chartData.length === 0 || nodeList.length === 0) return [];
    const nodesWithUsage = nodeList.map((node, index) => {
      const usageInGb = chartData.reduce((sum, row) => sum + Number(row[node.name] || 0), 0);
      const bytes = usageInGb * 1024 * 1024 * 1024;
      return {
        name: node.name,
        usage: usageInGb,
        bytes,
        fill: chartConfig2[node.name]?.color || `hsl(var(--chart-${index % 5 + 1}))`
      };
    }).filter((node) => node.bytes > 0);
    const totalBytes = nodesWithUsage.reduce((sum, node) => sum + node.bytes, 0);
    return nodesWithUsage.map((node) => ({
      ...node,
      percentage: totalBytes > 0 ? node.bytes * 100 / totalBytes : 0
    })).sort((a, b) => b.bytes - a.bytes);
  }, [chartData, nodeList, chartConfig2]);
  const pieChartConfig = reactExports.useMemo(
    () => pieData.reduce((config, point) => {
      config[point.name] = { label: point.name, color: point.fill };
      return config;
    }, {}),
    [pieData]
  );
  const piePaddingAngle = pieData.length > 1 ? 1 : 0;
  reactExports.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleTimeSelect = reactExports.useCallback((value) => {
    setSelectedTime(value);
    setShowCustomRange(false);
    setCustomRange(void 0);
  }, []);
  const handleCustomRangeChange = reactExports.useCallback((range) => {
    setCustomRange(range);
    if (range?.from && range?.to) {
      setShowCustomRange(true);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col items-stretch space-y-0 border-b p-0 xl:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-2 border-b px-4 py-3 xl:px-6 xl:py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col justify-center gap-1 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: t("statistics.trafficUsage") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("statistics.trafficUsageDescription") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full min-w-0 flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimeSelector, { selectedTime, setSelectedTime: handleTimeSelect, shortcuts: TRAFFIC_TIME_SELECTOR_SHORTCUTS, maxVisible: 5, className: "w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Custom Range",
                  className: `shrink-0 rounded border p-1 ${showCustomRange ? "bg-muted" : ""}`,
                  onClick: () => {
                    const next = !showCustomRange;
                    setShowCustomRange(next);
                    if (!next) {
                      setCustomRange(void 0);
                    }
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-2 sm:w-auto sm:shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AdminFilterCombobox, { value: selectedAdmin, onValueChange: setSelectedAdmin, className: "min-w-0 flex-1 sm:w-[220px] sm:flex-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex h-8 shrink-0 items-center gap-1 rounded-md border bg-muted/30 p-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": t("statistics.barChart", { defaultValue: "Bar chart" }),
                    className: `inline-flex h-6 w-6 items-center justify-center rounded ${chartView === "bar" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"}`,
                    onClick: () => setChartView("bar"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": t("statistics.pieChart", { defaultValue: "Pie chart" }),
                    className: `inline-flex h-6 w-6 items-center justify-center rounded ${chartView === "pie" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"}`,
                    onClick: () => setChartView("pie"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "h-3.5 w-3.5" })
                  }
                )
              ] })
            ] })
          ] }),
          showCustomRange && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimeRangeSelector, { onRangeChange: handleCustomRangeChange, initialRange: customRange, className: "w-full" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-0 flex flex-col justify-center p-4 xl:border-l xl:p-5 xl:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground sm:text-sm", children: t("statistics.usageDuringPeriod") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "flex justify-center text-lg text-foreground", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20" }) : totalUsage })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { ref: chartContainerRef, dir, className: "pt-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex max-h-[400px] min-h-[200px] w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[300px] w-full" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type: "error", className: "max-h-[400px] min-h-[200px]" }) : nodeList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type: "no-nodes", className: "max-h-[400px] min-h-[200px]" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartContainer,
          {
            dir: "ltr",
            config: chartView === "pie" ? pieChartConfig : chartConfig2,
            className: "h-[200px] w-full sm:h-[320px] lg:h-[400px]",
            children: chartData.length > 0 && chartView === "bar" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                accessibilityLayer: true,
                data: chartData,
                margin: { top: 5, right: 10, left: 10, bottom: 5 },
                onClick: (data) => {
                  const clickedIndex = typeof data?.activeTooltipIndex === "number" ? data.activeTooltipIndex : -1;
                  const clickedData = data?.activePayload?.[0]?.payload ?? (clickedIndex >= 0 ? chartData[clickedIndex] : void 0);
                  if (!clickedData) return;
                  const activeNodesCount = Object.keys(clickedData).filter((key) => {
                    if (key.startsWith("_") || key === "time" || key === "_period_start") return false;
                    const usageValue = Number(clickedData[key] || 0);
                    const uplinkValue = Number(clickedData[`_uplink_${key}`] || 0);
                    const downlinkValue = Number(clickedData[`_downlink_${key}`] || 0);
                    return usageValue > 0 || uplinkValue > 0 || downlinkValue > 0;
                  }).length;
                  if (activeNodesCount > 0) {
                    const resolvedIndex = clickedIndex >= 0 ? clickedIndex : chartData.findIndex((item) => item._period_start === clickedData._period_start);
                    setCurrentDataIndex(resolvedIndex >= 0 ? resolvedIndex : 0);
                    setSelectedData(clickedData);
                    setModalOpen(true);
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { direction: "ltr", vertical: false }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { direction: "ltr", dataKey: "time", tickLine: false, tickMargin: 10, axisLine: false, minTickGap: 5, interval: xAxisInterval }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      direction: "ltr",
                      tickLine: false,
                      axisLine: false,
                      tickFormatter: (value) => formatGigabytes(Number(value || 0)),
                      tick: {
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 9,
                        fontWeight: 500
                      },
                      width: 32,
                      tickMargin: 2
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip$1, { chartConfig: chartConfig2, dir, period: activePeriod }) }),
                  nodeList.map((node, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: node.name,
                      stackId: "a",
                      minPointSize: 1,
                      fill: chartConfig2[node.name]?.color || `hsl(var(--chart-${index % 5 + 1}))`,
                      radius: nodeList.length === 1 ? [4, 4, 4, 4] : index === 0 ? [0, 0, 4, 4] : index === nodeList.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0],
                      cursor: "pointer",
                      className: "overflow-hidden rounded-t-xl"
                    },
                    node.id
                  ))
                ]
              }
            ) : chartData.length > 0 && chartView === "pie" ? pieData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsxRuntimeExports.jsx(NodePieTooltip, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: pieData, dataKey: "bytes", nameKey: "name", innerRadius: "45%", outerRadius: "88%", paddingAngle: piePaddingAngle, strokeWidth: 1.5, children: pieData.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: point.fill }, point.name)) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type: "no-data", title: t("statistics.noDataInRange"), description: t("statistics.noDataInRangeDescription"), className: "max-h-[400px] min-h-[200px]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type: "no-data", title: t("statistics.noDataInRange"), description: t("statistics.noDataInRangeDescription"), className: "max-h-[400px] min-h-[200px]" })
          }
        ),
        chartData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-max items-center justify-center gap-4", children: (chartView === "pie" ? pieData : nodeList).map((item) => {
          const nodeName = typeof item === "object" && "name" in item ? item.name : "";
          const itemConfig = chartConfig2[nodeName];
          const percentage = typeof item === "object" && "percentage" in item ? item.percentage : void 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-2 w-2 shrink-0 rounded-[2px]",
                style: {
                  backgroundColor: itemConfig?.color || (typeof item === "object" && "fill" in item ? item.fill : "hsl(var(--chart-1))")
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "whitespace-nowrap text-xs", children: [
              nodeName,
              typeof percentage === "number" ? ` (${percentage.toFixed(1)}%)` : ""
            ] })
          ] }, nodeName);
        }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NodeStatsModal,
      {
        open: modalOpen,
        onClose: () => setModalOpen(false),
        data: selectedData,
        chartConfig: chartConfig2,
        period: activePeriod,
        allChartData: chartData,
        currentIndex: currentDataIndex,
        onNavigate: handleModalNavigate,
        hideUplinkDownlink: selectedAdmin !== "all"
      }
    )
  ] });
}
const CustomTooltip = ({ active, payload, period }) => {
  const { i18n } = useTranslation();
  if (!active || !payload || !payload.length) {
    return null;
  }
  const data = payload[0].payload;
  const formattedDate = data._period_start ? formatTooltipDate(data._period_start, period, i18n.language) : data.time;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: "rounded-lg border bg-background/95 p-3 shadow-lg backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: formattedDate }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 space-y-1", children: payload.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-3 w-3 rounded-full",
          style: {
            backgroundColor: entry.color,
            boxShadow: `0 0 8px ${entry.color}`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium capitalize", children: [
        entry.name,
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold", children: [
        Number(entry.value || 0).toFixed(1),
        "%"
      ] })
    ] }, index)) })
  ] });
};
const isSystemStats = (stats) => "total_user" in stats;
const isNodeRealtimeStats = (stats) => "incoming_bandwidth_speed" in stats;
function AreaCostumeChart({ nodeId, currentStats, realtimeStats }) {
  const { t, i18n } = useTranslation();
  const { resolvedTheme } = z();
  const [realtimeHistory, setRealtimeHistory] = reactExports.useState([]);
  const [realtimeError, setRealtimeError] = reactExports.useState(null);
  const [viewMode, setViewMode] = reactExports.useState("realtime");
  const chartContainerRef = reactExports.useRef(null);
  const PERIOD_OPTIONS = reactExports.useMemo(() => buildPeriodOptions(t), [t]);
  const [periodOption, setPeriodOption] = reactExports.useState(() => getDefaultPeriodOption(PERIOD_OPTIONS));
  reactExports.useEffect(() => {
    setPeriodOption((previous) => PERIOD_OPTIONS.find((option) => option.value === previous.value) ?? getDefaultPeriodOption(PERIOD_OPTIONS));
  }, [PERIOD_OPTIONS]);
  const chartConfig2 = reactExports.useMemo(
    () => ({
      cpu: {
        label: t("statistics.cpuUsage"),
        color: "hsl(var(--chart-1))"
      },
      ram: {
        label: t("statistics.ramUsage"),
        color: "hsl(var(--chart-2))"
      }
    }),
    [t]
  );
  const gradientDefs = reactExports.useMemo(() => {
    const isDark = resolvedTheme === "dark";
    return {
      cpu: {
        id: "cpuGradient",
        color1: "hsl(var(--chart-1))",
        color2: isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.3)",
        color3: isDark ? "rgba(59, 130, 246, 0.05)" : "rgba(59, 130, 246, 0.1)",
        color4: "rgba(59, 130, 246, 0)"
      },
      ram: {
        id: "ramGradient",
        color1: "hsl(var(--chart-2))",
        color2: isDark ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.3)",
        color3: isDark ? "rgba(16, 185, 129, 0.05)" : "rgba(16, 185, 129, 0.1)",
        color4: "rgba(16, 185, 129, 0)"
      }
    };
  }, [resolvedTheme]);
  reactExports.useEffect(() => {
    setRealtimeHistory([]);
    setRealtimeError(null);
    setViewMode("realtime");
  }, [nodeId]);
  const toggleViewMode = () => {
    if (viewMode === "realtime") {
      setViewMode("historical");
      return;
    }
    setViewMode("realtime");
    setRealtimeHistory([]);
  };
  reactExports.useEffect(() => {
    if (!realtimeStats || viewMode !== "realtime") return;
    try {
      const now = /* @__PURE__ */ new Date();
      const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
      let cpuUsage = 0;
      let ramUsage = 0;
      if (isSystemStats(realtimeStats) || isNodeRealtimeStats(realtimeStats)) {
        cpuUsage = Number(realtimeStats.cpu_usage ?? 0);
        const memUsed = Number(realtimeStats.mem_used ?? 0);
        const memTotal = Number(realtimeStats.mem_total ?? 1);
        ramUsage = parseFloat((memUsed / memTotal * 100).toFixed(1));
      }
      setRealtimeHistory((previous) => {
        const next = [
          ...previous,
          {
            time: timeStr,
            cpu: cpuUsage,
            ram: ramUsage,
            _period_start: formatOffsetDateTime(now)
          }
        ];
        const MAX_HISTORY = 120;
        const CLEANUP_THRESHOLD = 150;
        if (next.length > CLEANUP_THRESHOLD) {
          const cleaned = next.filter((_, index) => {
            if (index >= next.length - 60) return true;
            return index % 2 === 0;
          });
          if (cleaned.length > MAX_HISTORY) {
            return cleaned.slice(-MAX_HISTORY);
          }
          return cleaned;
        }
        return next;
      });
      setRealtimeError(null);
    } catch (error2) {
      setRealtimeError(error2);
    }
  }, [realtimeStats, viewMode]);
  const { startDate, endDate } = reactExports.useMemo(() => getDateRangeForPeriodOption(periodOption), [periodOption]);
  const historicalParams = reactExports.useMemo(
    () => ({
      start: startDate,
      end: toChartQueryEndDate(endDate),
      period: periodOption.period
    }),
    [startDate, endDate, periodOption.period]
  );
  const { data: historicalData, isLoading: isLoadingHistorical, error: historicalError } = useGetNodeStatsPeriodic(nodeId ?? 0, historicalParams, {
    query: {
      enabled: viewMode === "historical" && nodeId !== void 0,
      refetchInterval: 1e3 * 60 * 5
    }
  });
  const historicalHistory = reactExports.useMemo(() => {
    const statsArray = historicalData?.stats;
    if (!Array.isArray(statsArray)) return [];
    return statsArray.map((point) => ({
      time: formatPeriodLabel(point.period_start, periodOption, i18n.language),
      cpu: point.cpu_usage_percentage,
      ram: point.mem_usage_percentage,
      _period_start: point.period_start
    }));
  }, [historicalData?.stats, periodOption, i18n.language]);
  const chartData = viewMode === "historical" ? historicalHistory : realtimeHistory;
  const isLoading = viewMode === "historical" ? isLoadingHistorical : realtimeHistory.length === 0 && !realtimeError && !!realtimeStats;
  const error = viewMode === "historical" ? historicalError : realtimeError;
  const historicalXAxisInterval = reactExports.useMemo(() => getXAxisInterval(periodOption, historicalHistory.length), [periodOption, historicalHistory.length]);
  let displayCpuUsage = /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16" });
  let displayRamUsage = /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16" });
  if (currentStats) {
    if (isSystemStats(currentStats) || isNodeRealtimeStats(currentStats)) {
      const cpuUsage = Number(currentStats.cpu_usage ?? 0);
      const memUsed = Number(currentStats.mem_used ?? 0);
      const memTotal = Number(currentStats.mem_total ?? 1);
      const ramPercentage = memUsed / memTotal * 100;
      displayCpuUsage = `${cpuUsage.toFixed(1)}%`;
      displayRamUsage = `${ramPercentage.toFixed(1)}%`;
    }
  } else if (!isLoading && error) {
    displayCpuUsage = t("error");
    displayRamUsage = t("error");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col space-y-4 p-4 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg md:text-xl", children: viewMode === "realtime" ? t("statistics.realTimeData") : t("statistics.historicalData") }) }) }),
        nodeId !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: viewMode === "realtime" ? "default" : "outline", size: "sm", onClick: toggleViewMode, className: "h-9 w-full px-4 font-medium sm:w-auto", children: viewMode === "realtime" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("statistics.viewHistorical") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("statistics.viewRealtime") })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-sm text-muted-foreground sm:!mt-0", children: viewMode === "realtime" ? t("statistics.realtimeDescription") : t("statistics.historicalDescription") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pt-2 sm:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-2 rounded-lg bg-muted/50 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: t("statistics.cpuUsage") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-foreground sm:text-2xl", children: displayCpuUsage })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-2 rounded-lg bg-muted/50 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryStick, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: t("statistics.ramUsage") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-xl font-bold text-foreground sm:text-2xl", children: displayRamUsage })
        ] })
      ] })
    ] }),
    viewMode === "historical" && nodeId !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t bg-muted/30 p-4 md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: t("statistics.selectTimeRange") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("statistics.selectTimeRangeDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: periodOption.value,
          onValueChange: (value) => {
            const nextOption = PERIOD_OPTIONS.find((option) => option.value === value);
            if (nextOption) {
              setPeriodOption(nextOption);
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-full text-xs sm:w-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { children: periodOption.label }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PERIOD_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: option.value, children: option.label }, option.value)) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex-1 p-4 pt-0 md:p-6", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[280px] w-full items-center justify-center sm:h-[320px] lg:h-[360px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-full w-full rounded-lg" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type: "error", className: "h-[280px] sm:h-[320px] lg:h-[360px]" }) : chartData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        type: "no-data",
        title: viewMode === "realtime" ? t("statistics.waitingForData") : t("statistics.noDataAvailable"),
        description: viewMode === "realtime" ? t("statistics.waitingForDataDescription") : t("statistics.selectTimeRangeToView"),
        className: "h-[280px] sm:h-[320px] lg:h-[360px]"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chartContainerRef, className: "h-[280px] w-full transition-all duration-300 ease-in-out sm:h-[320px] lg:h-[360px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartContainer, { dir: "ltr", config: chartConfig2, className: "h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: chartData, margin: { top: 20, right: 20, bottom: 20, left: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: gradientDefs.cpu.id, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: gradientDefs.cpu.color1, stopOpacity: 0.9 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "30%", stopColor: gradientDefs.cpu.color2, stopOpacity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "70%", stopColor: gradientDefs.cpu.color3, stopOpacity: 0.1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: gradientDefs.cpu.color4, stopOpacity: 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: gradientDefs.ram.id, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: gradientDefs.ram.color1, stopOpacity: 0.9 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "30%", stopColor: gradientDefs.ram.color2, stopOpacity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "70%", stopColor: gradientDefs.ram.color3, stopOpacity: 0.1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: gradientDefs.ram.color4, stopOpacity: 0 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { vertical: false, strokeDasharray: "4 4", stroke: "hsl(var(--border))", opacity: 0.1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        XAxis,
        {
          dataKey: "time",
          tickLine: false,
          axisLine: false,
          tickMargin: 12,
          tick: {
            fill: "hsl(var(--muted-foreground))",
            fontSize: 10,
            fontWeight: 500
          },
          interval: viewMode === "historical" ? historicalXAxisInterval : "preserveStartEnd",
          minTickGap: viewMode === "historical" ? 5 : 30
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        YAxis,
        {
          tickLine: false,
          tickFormatter: (value) => `${value.toFixed(0)}%`,
          axisLine: false,
          tickMargin: 2,
          domain: [0, 100],
          tick: {
            fill: "hsl(var(--muted-foreground))",
            fontSize: 9,
            fontWeight: 500
          },
          width: 32
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tooltip$1,
        {
          content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, { period: viewMode === "historical" ? periodOption.period : Period.hour }),
          cursor: {
            stroke: "hsl(var(--border))",
            strokeWidth: 1,
            strokeDasharray: "4 4",
            opacity: 0.3
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Area,
        {
          dataKey: "cpu",
          type: "monotone",
          fill: `url(#${gradientDefs.cpu.id})`,
          stroke: gradientDefs.cpu.color1,
          strokeWidth: 2,
          dot: viewMode === "realtime" ? false : {
            fill: "white",
            stroke: gradientDefs.cpu.color1,
            strokeWidth: 2,
            r: 3
          },
          activeDot: {
            r: 6,
            fill: "white",
            stroke: gradientDefs.cpu.color1,
            strokeWidth: 2
          },
          animationDuration: viewMode === "realtime" ? 800 : 1500,
          animationEasing: "ease-out",
          isAnimationActive: true,
          animationBegin: 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Area,
        {
          dataKey: "ram",
          type: "monotone",
          fill: `url(#${gradientDefs.ram.id})`,
          stroke: gradientDefs.ram.color1,
          strokeWidth: 2,
          dot: viewMode === "realtime" ? false : {
            fill: "white",
            stroke: gradientDefs.ram.color1,
            strokeWidth: 2,
            r: 3
          },
          activeDot: {
            r: 6,
            fill: "white",
            stroke: gradientDefs.ram.color1,
            strokeWidth: 2
          },
          animationDuration: viewMode === "realtime" ? 800 : 1500,
          animationEasing: "ease-out",
          isAnimationActive: true,
          animationBegin: 100
        }
      )
    ] }) }) }) })
  ] });
}
function StatisticsCharts({ data, isLoading, error, selectedServer, is_sudo }) {
  const { t } = useTranslation();
  const [chartRefreshKey, setChartRefreshKey] = reactExports.useState(0);
  const resizeTimeoutRef = reactExports.useRef();
  const lastWindowWidthRef = reactExports.useRef(typeof window !== "undefined" ? window.innerWidth : 0);
  const { isLoading: isLoadingNodes, error: nodesError } = useGetNodesSimple({ all: true }, {
    query: {
      enabled: is_sudo
      // Only fetch nodes for sudo admins
    }
  });
  const actualSelectedServer = is_sudo ? selectedServer : "master";
  const selectedNodeId = actualSelectedServer === "master" ? void 0 : parseInt(actualSelectedServer, 10);
  const { data: nodeStats, isLoading: isLoadingNodeStats } = useRealtimeNodeStats(selectedNodeId || 0, {
    query: {
      enabled: is_sudo && !!selectedNodeId,
      // Only fetch node stats for sudo admins with selected node
      refetchInterval: 1500,
      // Update every 1.5 seconds for faster realtime updates
      staleTime: 1e3
      // Consider data stale after 1 second
    }
  });
  const handleResize = reactExports.useCallback(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth === lastWindowWidthRef.current) {
      return;
    }
    lastWindowWidthRef.current = currentWidth;
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    resizeTimeoutRef.current = setTimeout(() => {
      setChartRefreshKey((k) => k + 1);
    }, 100);
  }, []);
  reactExports.useEffect(() => {
    window.addEventListener("resize", handleResize);
    const handleSidebarToggle = () => {
      setTimeout(() => setChartRefreshKey((k) => k + 1), 300);
    };
    window.addEventListener("sidebar-toggle", handleSidebarToggle);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("sidebar-toggle", handleSidebarToggle);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [handleResize]);
  reactExports.useEffect(() => {
    return () => {
    };
  }, [selectedServer]);
  if (actualSelectedServer === "master" && isLoading || is_sudo && isLoadingNodes || is_sudo && selectedNodeId && isLoadingNodeStats) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticsSkeletons, { is_sudo });
  }
  if (error || is_sudo && nodesError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: t("statistics.system") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("monitorServers") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { type: "error", title: t("errors.statisticsLoadFailed"), description: error?.message || nodesError?.message || t("errors.connectionFailed"), className: "min-h-[400px]" })
    ] });
  }
  const currentStats = actualSelectedServer === "master" ? data : nodeStats;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: t("statistics.system") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("monitorServers") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "100ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SystemStatisticsSection, { currentStats }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      is_sudo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "260ms", animationFillMode: "both" }, children: actualSelectedServer === "master" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AllNodesStackedBarChart, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(CostumeBarChart, { nodeId: selectedNodeId }) }),
      actualSelectedServer === "master" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "200ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserSubUpdatePieChart, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "320ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AreaCostumeChart, { nodeId: selectedNodeId, currentStats, realtimeStats: actualSelectedServer === "master" ? data : nodeStats || void 0 }, chartRefreshKey) })
    ] })
  ] });
}
function StatisticsSkeletons({ is_sudo }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mb-2 h-6 w-[150px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-[200px]" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-between gap-x-4 gap-y-4 lg:flex-row", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group relative w-full overflow-hidden rounded-lg border p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-9 rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mb-2 h-4 w-[100px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-[120px]" })
        ] })
      ] }) }) }, i)) })
    ] }),
    is_sudo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[400px] w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[360px] w-full" })
    ] })
  ] });
}
const Statistics = () => {
  const { t } = useTranslation();
  const [selectedServer, setSelectedServer] = reactExports.useState("master");
  const { data: nodesResponse, isLoading: isLoadingNodes } = useGetNodesSimple({ all: true }, {
    query: {
      enabled: true
    }
  });
  const nodesData = nodesResponse?.nodes || [];
  const { data, error, isLoading } = useQuery({
    queryKey: getGetSystemStatsQueryKey(),
    queryFn: () => getSystemStats(),
    refetchInterval: selectedServer === "master" ? 2e3 : false,
    // Update every 2 seconds for faster realtime updates
    staleTime: 1e3,
    // Consider data stale after 1 second
    refetchOnWindowFocus: true,
    enabled: selectedServer === "master"
    // Only fetch when master is selected
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full transform-gpu animate-fade-in", style: { animationDuration: "400ms" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "statistics", description: "monitorServers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-4 pt-2 sm:px-4 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "50ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-base font-semibold sm:text-lg", children: t("nodes.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: t("statistics.selectNodeToView") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px]", children: isLoadingNodes ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-full sm:h-10" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedServer, onValueChange: setSelectedServer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-full text-xs sm:h-10 sm:text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("selectServer") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "master", className: "text-xs sm:text-sm", children: t("master") }),
          nodesData.filter((node) => node.status === "connected").map((node) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(node.id), className: "text-xs sm:text-sm", children: node.name }, node.id))
        ] })
      ] }) })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-3 pt-2 sm:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "100ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticsCharts, { error, isLoading, data, selectedServer, is_sudo: true }) }) }) }) }) })
  ] });
};
export {
  Statistics as default
};
//# sourceMappingURL=_dashboard.statistics-DiGEHIwf.js.map
