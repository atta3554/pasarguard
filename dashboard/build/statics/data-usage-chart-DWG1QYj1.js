import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { C as Card, b as CardHeader, c as CardTitle, d as CardDescription, a as CardContent, e as CardFooter } from "./card-5ZQOfa_i.js";
import { a as getChartQueryRangeFromShortcut, b as getXAxisIntervalForShortcut, C as ChartContainer, c as ChartTooltip, f as formatPeriodLabelForPeriod, d as formatTooltipDate } from "./chart-period-utils-BvUAioDp.js";
import { f as formatBytes } from "./formatByte-CB667FGk.js";
import { f as createLucideIcon, j as useAdmin, a as useDirDetection, ap as useGetUsage, b6 as useGetUsersUsage, ar as Period } from "./index-C_i3x-Gf.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, a as Bar, d as Cell } from "./recharts-B0278qLa.js";
import { T as TrendingUp } from "./trending-up-Ce5n35OP.js";
import "./date-picker-R6TlQCrv.js";
import "./button-BOH66nN-.js";
import "./radix-3Azqn93X.js";
import "./chevron-left-Bre8eEMe.js";
import "./chevron-right-DkXHvvEa.js";
import "./chevron-down-CYTM5oAI.js";
import "./popover-BXLf6-bP.js";
import "./input-BtfO4I3L.js";
import "./use-mobile-mll3IbV8.js";
import "./userPreferenceStorage-DH2hTFsa.js";
import "./x-C6aLLO-Y.js";
import "./calendar-BM3jGkln.js";
import "./react-query-DMC2nZO-.js";
import "./react-router-C8FEAJQh.js";
import "./check-ayw17ogi.js";
const SearchX = createLucideIcon("SearchX", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const TrendingDown = createLucideIcon("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
const PERIOD_KEYS = [
  { key: "1h", period: "minute", amount: 1, unit: "hour" },
  { key: "2h", period: "hour", amount: 2, unit: "hour" },
  { key: "4h", period: "hour", amount: 4, unit: "hour" },
  { key: "6h", period: "hour", amount: 6, unit: "hour" },
  { key: "12h", period: "hour", amount: 12, unit: "hour" },
  { key: "24h", period: "hour", amount: 24, unit: "hour" },
  { key: "2d", period: "day", amount: 2, unit: "day" },
  { key: "3d", period: "day", amount: 3, unit: "day" },
  { key: "5d", period: "day", amount: 5, unit: "day" },
  { key: "7d", period: "day", amount: 7, unit: "day" },
  { key: "14d", period: "day", amount: 14, unit: "day" },
  { key: "30d", period: "day", amount: 30, unit: "day" },
  { key: "1m", period: "day", amount: 1, unit: "month" },
  { key: "3m", period: "day", amount: 3, unit: "month" },
  { key: "all", period: "day", allTime: true }
];
const transformUsageData = (apiData, period, isNodeUsage = false, locale = "en") => {
  if (!apiData?.stats || !Array.isArray(apiData.stats)) {
    return [];
  }
  return apiData.stats.map((stat) => {
    const displayLabel = formatPeriodLabelForPeriod(stat.period_start, period, locale);
    const traffic = isNodeUsage ? (stat.uplink || 0) + (stat.downlink || 0) : stat.total_traffic || 0;
    return {
      date: displayLabel,
      traffic,
      period_start: stat.period_start
      // Keep original for tooltip
    };
  });
};
const chartConfig = {
  traffic: {
    label: "traffic",
    color: "hsl(var(--foreground))"
  }
};
function CustomBarTooltip({ active, payload, period }) {
  const { t, i18n } = useTranslation();
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;
  const formattedDate = data.period_start ? formatTooltipDate(data.period_start, period ?? Period.hour, i18n.language) : String(data.date ?? "");
  const isRTL = i18n.language === "fa";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-w-[160px] rounded border border-border bg-gradient-to-br from-background to-muted/80 p-2 text-xs shadow ${isRTL ? "text-right" : "text-left"}`, dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-1 text-xs font-semibold ${isRTL ? "text-right" : "text-left"}`, children: [
      t("statistics.date", { defaultValue: "Date" }),
      ":",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "inline-block", children: formattedDate })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-0.5 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
        t("statistics.totalUsage", { defaultValue: "Total Usage" }),
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: isRTL ? "mr-1" : "ml-1", children: formatBytes(data.traffic) })
    ] }) })
  ] });
}
const DataUsageChart = ({ admin_username }) => {
  const { t, i18n } = useTranslation();
  const { admin } = useAdmin();
  const dir = useDirDetection();
  const is_sudo = admin?.is_sudo || false;
  const [activeIndex, setActiveIndex] = reactExports.useState(null);
  const PERIOD_OPTIONS = reactExports.useMemo(
    () => [
      ...PERIOD_KEYS.filter((opt) => !opt.allTime).map((opt) => ({
        label: typeof opt.amount === "number" ? `${opt.amount} ${t(`time.${opt.unit}${opt.amount > 1 ? "s" : ""}`)}` : "",
        value: opt.key,
        period: opt.period,
        hours: opt.unit === "hour" && typeof opt.amount === "number" ? opt.amount : void 0,
        days: opt.unit === "day" && typeof opt.amount === "number" ? opt.amount : void 0,
        months: opt.unit === "month" && typeof opt.amount === "number" ? opt.amount : void 0
      })),
      { label: t("alltime", { defaultValue: "All Time" }), value: "all", period: "day", allTime: true }
    ],
    [t]
  );
  const [periodOption, setPeriodOption] = reactExports.useState(() => PERIOD_OPTIONS.find((opt) => opt.value === "7d") ?? PERIOD_OPTIONS[0]);
  reactExports.useEffect(() => {
    setPeriodOption((prev) => {
      const currentOption = PERIOD_OPTIONS.find((opt) => opt.value === prev.value);
      return currentOption || prev;
    });
  }, [PERIOD_OPTIONS]);
  const queryRange = reactExports.useMemo(() => getChartQueryRangeFromShortcut(periodOption.value, /* @__PURE__ */ new Date(), { minuteForOneHour: true }), [periodOption.value]);
  const activePeriod = queryRange.period;
  const shouldUseNodeUsage = is_sudo && !admin_username;
  const nodeUsageParams = reactExports.useMemo(
    () => ({
      period: activePeriod,
      start: queryRange.startDate,
      end: queryRange.endDate
    }),
    [activePeriod, queryRange.startDate, queryRange.endDate]
  );
  const userUsageParams = reactExports.useMemo(
    () => ({
      ...admin_username ? { admin: [admin_username] } : {},
      period: activePeriod,
      start: queryRange.startDate,
      end: queryRange.endDate
    }),
    [admin_username, activePeriod, queryRange.startDate, queryRange.endDate]
  );
  const { data: nodeData, isLoading: isLoadingNodes } = useGetUsage(nodeUsageParams, {
    query: {
      enabled: shouldUseNodeUsage,
      refetchInterval: 1e3 * 60 * 5
    }
  });
  const { data: userData, isLoading: isLoadingUsers } = useGetUsersUsage(userUsageParams, {
    query: {
      enabled: !shouldUseNodeUsage,
      refetchInterval: 1e3 * 60 * 5
    }
  });
  const data = shouldUseNodeUsage ? nodeData : userData;
  const isLoading = shouldUseNodeUsage ? isLoadingNodes : isLoadingUsers;
  let statsArr = [];
  if (data?.stats) {
    if (typeof data.stats === "object" && !Array.isArray(data.stats)) {
      const statsObj = data.stats;
      statsArr = statsObj["-1"] || statsObj[Object.keys(statsObj)[0]] || [];
    } else if (Array.isArray(data.stats)) {
      statsArr = data.stats;
    }
  }
  const chartData = reactExports.useMemo(() => transformUsageData({ stats: statsArr }, activePeriod, shouldUseNodeUsage, i18n.language), [statsArr, activePeriod, shouldUseNodeUsage, i18n.language]);
  const trend = reactExports.useMemo(() => {
    if (!chartData || chartData.length < 2) return null;
    const last = chartData[chartData.length - 1]?.traffic || 0;
    const prev = chartData[chartData.length - 2]?.traffic || 0;
    if (prev === 0) return null;
    const percent = (last - prev) / prev * 100;
    return percent;
  }, [chartData]);
  const totalUsageDuringPeriod = reactExports.useMemo(() => {
    if (!chartData || chartData.length === 0) return "0 B";
    const totalBytes = chartData.reduce((sum, dataPoint) => {
      const traffic = dataPoint?.traffic || 0;
      return sum + traffic;
    }, 0);
    return formatBytes(totalBytes, 2);
  }, [chartData]);
  const xAxisInterval = reactExports.useMemo(() => getXAxisIntervalForShortcut(periodOption.value, chartData.length, { minuteForOneHour: true }), [periodOption.value, chartData.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex h-full flex-col justify-between overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: t("admins.used.traffic", { defaultValue: "Traffic Usage" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "mt-1.5", children: t("admins.monitor.traffic", { defaultValue: "Monitor admin traffic usage over time" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: periodOption.value,
          onValueChange: (val) => {
            const found = PERIOD_OPTIONS.find((opt) => opt.value === val);
            if (found) setPeriodOption(found);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: `h-8 w-32 text-xs${dir === "rtl" ? "text-right" : ""}`, dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { children: periodOption.label }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { dir, children: PERIOD_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, className: dir === "rtl" ? "text-right" : "", children: opt.label }, opt.value)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex flex-1 flex-col justify-center overflow-hidden p-2 sm:p-6", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[320px] min-h-[200px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-end justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-48 items-end gap-2", children: [1, 2, 3, 4, 5, 6, 7].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 rounded-t-lg bg-muted ${i === 4 ? "h-32" : i === 3 || i === 5 ? "h-24" : i === 2 || i === 6 ? "h-16" : "h-20"}` }) }, i)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-16 animate-pulse rounded bg-muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-16 animate-pulse rounded bg-muted" })
      ] })
    ] }) }) }) : chartData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex min-h-[200px] flex-col items-center justify-center gap-4 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchX, { className: "size-16", strokeWidth: 1 }),
      t("admins.monitor.no_traffic", { defaultValue: "No traffic data available" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChartContainer, { config: chartConfig, dir: "ltr", className: "h-[240px] w-full overflow-x-auto sm:h-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      BarChart,
      {
        data: chartData,
        margin: { top: 16, right: 4, left: 4, bottom: 8 },
        barCategoryGap: "10%",
        onMouseMove: (state) => {
          if (state.activeTooltipIndex !== activeIndex) {
            setActiveIndex(state.activeTooltipIndex !== void 0 ? state.activeTooltipIndex : null);
          }
        },
        onMouseLeave: () => {
          setActiveIndex(null);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { vertical: false, strokeDasharray: "3 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            XAxis,
            {
              dataKey: "date",
              tickLine: false,
              tickMargin: 10,
              axisLine: false,
              angle: 0,
              textAnchor: "middle",
              height: 30,
              interval: xAxisInterval,
              minTickGap: 5,
              tick: { fontSize: 10 },
              tickFormatter: (value) => value || ""
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "traffic", tickLine: false, tickMargin: 4, axisLine: false, width: 40, tickFormatter: (val) => formatBytes(val, 0, true).toString(), tick: { fontSize: 10 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomBarTooltip, { period: activePeriod }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "traffic", radius: 6, maxBarSize: 48, children: chartData.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: index === activeIndex ? "hsl(var(--muted-foreground))" : "hsl(var(--primary))" }, `cell-${index}`)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "mt-0 flex-col items-start gap-2 pt-2 text-sm sm:pt-4", children: [
      chartData.length > 0 && trend !== null && trend > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 font-medium leading-none text-green-600 dark:text-green-400", children: [
        t("usersTable.trendingUp", { defaultValue: "Trending up by" }),
        " ",
        trend.toFixed(1),
        "% ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" })
      ] }),
      chartData.length > 0 && trend !== null && trend < 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 font-medium leading-none text-red-600 dark:text-red-400", children: [
        t("usersTable.trendingDown", { defaultValue: "Trending down by" }),
        " ",
        Math.abs(trend).toFixed(1),
        "% ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-4 w-4" })
      ] }),
      chartData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-none text-muted-foreground", children: [
        t("statistics.usageDuringPeriod", { defaultValue: "Usage During Period" }),
        ": ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "font-mono", children: totalUsageDuringPeriod })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-none text-muted-foreground", children: t("statistics.trafficUsageDescription", { defaultValue: "Total traffic usage across all servers" }) })
    ] })
  ] });
};
export {
  DataUsageChart as default
};
//# sourceMappingURL=data-usage-chart-DWG1QYj1.js.map
