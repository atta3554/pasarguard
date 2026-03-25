import { f as createLucideIcon, c as cn, a as useDirDetection } from "./index-C_i3x-Gf.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { B as Button } from "./button-BOH66nN-.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, f as DropdownMenuRadioGroup, g as DropdownMenuRadioItem } from "./dropdown-menu-B4MHnVyu.js";
import { T as ToggleGroup, a as ToggleGroupItem } from "./toggle-group-DO2v6P71.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { a as addDays, D as DatePicker } from "./date-picker-R6TlQCrv.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BlwcMUxd.js";
import { C as Card, a as CardContent } from "./card-5ZQOfa_i.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { d as formatTooltipDate, C as ChartContainer, c as ChartTooltip } from "./chart-period-utils-BvUAioDp.js";
import { g as gbToBytes, f as formatBytes } from "./formatByte-CB667FGk.js";
import { A as Activity } from "./activity-BJu46gCh.js";
import { C as ChevronLeft } from "./chevron-left-Bre8eEMe.js";
import { C as ChevronRight } from "./chevron-right-DkXHvvEa.js";
import { C as Calendar } from "./calendar-BM3jGkln.js";
import { U as Upload } from "./upload-BQo5BJ-s.js";
import { D as Download } from "./download-B0kTGv5p.js";
import { P as PieChart, b as Pie, d as Cell } from "./recharts-B0278qLa.js";
const ChartColumn = createLucideIcon("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const DEFAULT_TIME_SELECTOR_SHORTCUTS = [
  { value: "24h", label: "24h" },
  { value: "3d", label: "3d" },
  { value: "1w", label: "1w" },
  { value: "1m", label: "1m" }
];
const TRAFFIC_TIME_SELECTOR_SHORTCUTS = [
  { value: "1h", label: "1h", quick: true },
  { value: "2h", label: "2h" },
  { value: "4h", label: "4h" },
  { value: "6h", label: "6h", quick: true },
  { value: "12h", label: "12h" },
  { value: "24h", label: "24h", quick: true },
  { value: "2d", label: "2d" },
  { value: "3d", label: "3d", quick: true },
  { value: "5d", label: "5d" },
  { value: "1w", label: "1w", quick: true },
  { value: "2w", label: "2w" },
  { value: "1m", label: "1m" },
  { value: "all", label: "all" }
];
function TimeSelector({ selectedTime, setSelectedTime, shortcuts = DEFAULT_TIME_SELECTOR_SHORTCUTS, maxVisible = shortcuts.length, className }) {
  const { t } = useTranslation();
  const [isMobileMoreOpen, setIsMobileMoreOpen] = reactExports.useState(false);
  const [isDesktopMoreOpen, setIsDesktopMoreOpen] = reactExports.useState(false);
  const moreLabelRaw = t("more", { defaultValue: "More" });
  const moreLabel = moreLabelRaw ? moreLabelRaw.charAt(0).toLocaleUpperCase() + moreLabelRaw.slice(1) : "More";
  const getShortcutLabel = (shortcut) => {
    if (shortcut.value === "all") {
      return t("alltime", { defaultValue: "All Time" });
    }
    return shortcut.label;
  };
  const quickShortcuts = reactExports.useMemo(() => {
    const explicitQuick = shortcuts.filter((shortcut) => shortcut.quick);
    if (explicitQuick.length > 0) return explicitQuick;
    return shortcuts.slice(0, maxVisible);
  }, [shortcuts, maxVisible]);
  const desktopOverflowShortcuts = reactExports.useMemo(() => {
    const quickValues = new Set(quickShortcuts.map((shortcut) => shortcut.value));
    return shortcuts.filter((shortcut) => !quickValues.has(shortcut.value));
  }, [shortcuts, quickShortcuts]);
  const mobileQuickShortcuts = reactExports.useMemo(() => quickShortcuts.slice(0, 4), [quickShortcuts]);
  const mobileOverflowShortcuts = reactExports.useMemo(() => {
    const quickValues = new Set(mobileQuickShortcuts.map((shortcut) => shortcut.value));
    return shortcuts.filter((shortcut) => !quickValues.has(shortcut.value));
  }, [shortcuts, mobileQuickShortcuts]);
  const isMobileOverflowSelected = mobileOverflowShortcuts.some((shortcut) => shortcut.value === selectedTime);
  const isDesktopOverflowSelected = desktopOverflowShortcuts.some((shortcut) => shortcut.value === selectedTime);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: cn("w-full min-w-0 max-w-fit overflow-hidden rounded-md border border-border/60 bg-muted/20 p-1", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full min-w-0 items-center gap-1 lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToggleGroup,
        {
          type: "single",
          value: selectedTime,
          onValueChange: (value) => value && setSelectedTime(value),
          className: "min-w-0 flex-nowrap gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "aria-label": "Traffic range shortcuts",
          children: mobileQuickShortcuts.map((shortcut) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToggleGroupItem,
            {
              value: shortcut.value,
              variant: "default",
              className: "h-7 min-w-[2.25rem] shrink-0 border-0 bg-transparent px-2.5 py-1 text-xs font-medium text-muted-foreground data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm",
              children: getShortcutLabel(shortcut)
            },
            shortcut.value
          ))
        }
      ),
      mobileOverflowShortcuts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { modal: false, open: isMobileMoreOpen, onOpenChange: setIsMobileMoreOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "h-7 min-w-[3.75rem] border-0 bg-transparent px-2 text-xs font-medium text-muted-foreground shadow-none hover:bg-background/70 hover:text-foreground",
              isMobileOverflowSelected && "bg-background text-foreground shadow-sm"
            ),
            children: moreLabel
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "end", className: "min-w-[7rem]", onInteractOutside: () => setIsMobileMoreOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropdownMenuRadioGroup,
          {
            value: selectedTime,
            onValueChange: (value) => {
              setSelectedTime(value);
              setIsMobileMoreOpen(false);
            },
            children: mobileOverflowShortcuts.map((shortcut) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuRadioItem, { value: shortcut.value, className: "text-xs", children: getShortcutLabel(shortcut) }, shortcut.value))
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden w-full min-w-0 items-center gap-1 lg:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToggleGroup,
        {
          type: "single",
          value: selectedTime,
          onValueChange: (value) => value && setSelectedTime(value),
          className: "min-w-0 flex-nowrap gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "aria-label": "Traffic range shortcuts",
          children: quickShortcuts.map((shortcut) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToggleGroupItem,
            {
              value: shortcut.value,
              variant: "default",
              className: "h-7 min-w-[2.25rem] shrink-0 border-0 bg-transparent px-2.5 py-1 text-xs font-medium text-muted-foreground data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm",
              children: getShortcutLabel(shortcut)
            },
            shortcut.value
          ))
        }
      ),
      desktopOverflowShortcuts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { modal: false, open: isDesktopMoreOpen, onOpenChange: setIsDesktopMoreOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "h-7 min-w-[3.75rem] border-0 bg-transparent px-2 text-xs font-medium text-muted-foreground shadow-none hover:bg-background/70 hover:text-foreground",
              isDesktopOverflowSelected && "bg-background text-foreground shadow-sm"
            ),
            children: moreLabel
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "end", className: "min-w-[7rem]", onInteractOutside: () => setIsDesktopMoreOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropdownMenuRadioGroup,
          {
            value: selectedTime,
            onValueChange: (value) => {
              setSelectedTime(value);
              setIsDesktopMoreOpen(false);
            },
            children: desktopOverflowShortcuts.map((shortcut) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuRadioItem, { value: shortcut.value, className: "text-xs", children: getShortcutLabel(shortcut) }, shortcut.value))
          }
        ) })
      ] })
    ] })
  ] });
}
function TimeRangeSelector({ className, onRangeChange, initialRange }) {
  const [range, setRange] = reactExports.useState(
    initialRange ?? {
      from: addDays(/* @__PURE__ */ new Date(), -7),
      // Default to last 7 days
      to: /* @__PURE__ */ new Date()
    }
  );
  reactExports.useEffect(() => {
    if (initialRange) {
      onRangeChange(initialRange);
    } else {
      onRangeChange(range);
    }
  }, []);
  const handleRangeChange = (newRange) => {
    setRange(newRange);
    onRangeChange(newRange);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DatePicker, { mode: "range", range, onRangeChange: handleRangeChange, defaultRange: range, disableAfter: /* @__PURE__ */ new Date(), numberOfMonths: 2 }) });
}
function NodeTrafficTooltip({ active, payload }) {
  const { t } = useTranslation();
  if (!active || !payload?.length) {
    return null;
  }
  const point = payload[0].payload;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-background/95 p-2 shadow-sm backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full border border-border/20", style: { backgroundColor: point.fill } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: point.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("statistics.totalUsage", { defaultValue: "Total Usage" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "font-mono font-semibold text-foreground", children: formatBytes(point.bytes) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("statistics.percentage", { defaultValue: "Percentage" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "h-5 px-1.5 text-[10px]", children: [
        point.percentage.toFixed(1),
        "%"
      ] })
    ] })
  ] });
}
const NodeStatsModal = ({ open, onClose, data, chartConfig, period, allChartData = [], currentIndex = 0, onNavigate, hideUplinkDownlink = false }) => {
  const { t, i18n } = useTranslation();
  const dir = useDirDetection();
  if (!data) return null;
  const formattedDate = data._period_start ? formatTooltipDate(data._period_start, period, i18n.language) : "";
  const isRTL = dir === "rtl";
  const hasNavigation = allChartData.length > 1;
  const canGoPrevious = hasNavigation && currentIndex > 0;
  const canGoNext = hasNavigation && currentIndex < allChartData.length - 1;
  const handlePrevious = () => {
    if (canGoPrevious && onNavigate) {
      onNavigate(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (canGoNext && onNavigate) {
      onNavigate(currentIndex + 1);
    }
  };
  const handleLeftButton = isRTL ? handleNext : handlePrevious;
  const handleRightButton = isRTL ? handlePrevious : handleNext;
  const canGoLeft = isRTL ? canGoNext : canGoPrevious;
  const canGoRight = isRTL ? canGoPrevious : canGoNext;
  const activeNodes = Object.keys(data).filter((key) => !key.startsWith("_") && key !== "time" && key !== "_period_start" && (data[key] || 0) > 0).map((nodeName) => ({
    name: nodeName,
    usage: data[nodeName] || 0,
    uplink: data[`_uplink_${nodeName}`] || 0,
    downlink: data[`_downlink_${nodeName}`] || 0,
    color: chartConfig?.[nodeName]?.color || "hsl(var(--chart-1))"
  })).sort((a, b) => b.usage - a.usage);
  const totalUplink = activeNodes.reduce((sum, node) => sum + (node.uplink || 0), 0);
  const totalDownlink = activeNodes.reduce((sum, node) => sum + (node.downlink || 0), 0);
  const nodesWithBytes = activeNodes.map((node) => {
    const directionalTotal = Number(node.uplink || 0) + Number(node.downlink || 0);
    const bytes = directionalTotal > 0 ? directionalTotal : Number(gbToBytes(node.usage) || 0);
    return { ...node, bytes };
  });
  const totalUsage = nodesWithBytes.reduce((sum, node) => sum + node.bytes, 0);
  const nodesWithDistribution = nodesWithBytes.map((node) => ({
    ...node,
    percentage: totalUsage > 0 ? node.bytes * 100 / totalUsage : 0
  }));
  const pieData = nodesWithDistribution.map((node) => ({
    name: node.name,
    bytes: node.bytes,
    percentage: node.percentage,
    fill: node.color,
    uplink: node.uplink,
    downlink: node.downlink
  }));
  const pieChartConfig = pieData.reduce((acc, node) => {
    acc[node.name] = { label: node.name, color: node.fill };
    return acc;
  }, {});
  const piePaddingAngle = pieData.length > 1 ? 1 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "flex max-h-[95dvh] w-[96vw] max-w-md flex-col overflow-hidden p-3 sm:max-w-2xl sm:p-4 md:max-w-3xl lg:max-w-4xl", dir, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: isRTL ? "text-right" : "text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: `flex items-center gap-2 text-sm sm:text-base`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
        t("statistics.nodeStats", { defaultValue: "Node Statistics" })
      ] }),
      hasNavigation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: handleLeftButton, disabled: !canGoLeft, className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: `h-4 w-4 ${isRTL ? "rotate-180" : ""}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", className: "min-w-[60px] text-center text-sm font-medium text-muted-foreground", children: [
          currentIndex + 1,
          " / ",
          allChartData.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: handleRightButton, disabled: !canGoRight, className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-4 w-4 ${isRTL ? "rotate-180" : ""}` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "min-h-0 flex-1 border-none bg-transparent shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "min-h-0 space-y-3 overflow-x-hidden overflow-y-auto p-0 pr-1 sm:space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between ${isRTL ? "flex-row-reverse" : "flex-row"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${isRTL ? "flex-row-reverse" : "flex-row"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3 text-muted-foreground sm:h-4 sm:w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[150px] truncate text-xs font-medium sm:max-w-none sm:text-sm", dir: "ltr", children: formattedDate })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { dir: "ltr", variant: "secondary", className: "px-2 py-1 font-mono text-xs sm:text-sm", children: formatBytes(totalUsage) })
      ] }),
      !hideUplinkDownlink && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 text-xs sm:gap-3 ${isRTL ? "flex-row-reverse justify-end" : "flex-row justify-start"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3 w-3 text-green-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "font-mono text-muted-foreground", children: formatBytes(totalUplink) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3 text-blue-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "font-mono text-muted-foreground", children: formatBytes(totalDownlink) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-xs font-semibold text-foreground sm:text-sm`, children: t("statistics.nodeTrafficDistribution", { defaultValue: "Node Traffic Distribution" }) }),
        pieData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center md:w-[200px] md:flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartContainer, { config: pieChartConfig, className: "h-[132px] w-[132px] sm:h-[160px] sm:w-[160px] md:h-[180px] md:w-[180px] [&_.recharts-text]:fill-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NodeTrafficTooltip, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: pieData, dataKey: "bytes", nameKey: "name", innerRadius: "58%", outerRadius: "96%", paddingAngle: piePaddingAngle, strokeWidth: 1.5, children: pieData.map((node) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: node.fill }, node.name)) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir: "ltr", className: "grid max-h-[32dvh] min-w-0 flex-1 gap-2 overflow-x-hidden overflow-y-auto sm:max-h-[36dvh] sm:gap-3 md:max-h-80", children: nodesWithDistribution.map((node) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-wrap items-center justify-between gap-2 rounded-lg border p-2 sm:flex-nowrap sm:p-3`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex min-w-0 flex-1 items-center gap-2 sm:gap-3`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 flex-shrink-0 rounded-full sm:h-3 sm:w-3", style: { backgroundColor: node.color } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", className: "text-[10px] font-mono font-bold text-foreground sm:text-xs", children: [
                    node.percentage.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `truncate break-all text-xs font-medium sm:text-sm`, children: node.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs text-muted-foreground`, children: formatBytes(node.bytes) })
              ] })
            ] }),
            !hideUplinkDownlink && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex w-full items-center justify-end gap-1 text-xs sm:w-auto sm:gap-2`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-2 w-2 text-green-500 sm:h-3 sm:w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "max-w-[60px] truncate font-mono text-xs sm:max-w-none", children: formatBytes(node.uplink) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-2 w-2 text-blue-500 sm:h-3 sm:w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "max-w-[60px] truncate font-mono text-xs sm:max-w-none", children: formatBytes(node.downlink) })
              ] })
            ] })
          ] }, node.name)) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-dashed p-3 text-center text-xs text-muted-foreground", children: t("statistics.noDataInRange", { defaultValue: "No data in selected range" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hidden text-xs leading-tight text-muted-foreground sm:block ${isRTL ? "text-right" : "text-left"}`, children: t("statistics.nodeStatsDescription", {
        defaultValue: "Detailed traffic statistics for each node at this time period. Click on bars in the chart to view more details."
      }) })
    ] }) })
  ] }) });
};
export {
  ChartColumn as C,
  NodeStatsModal as N,
  TimeSelector as T,
  TRAFFIC_TIME_SELECTOR_SHORTCUTS as a,
  TimeRangeSelector as b
};
//# sourceMappingURL=node-stats-modal-DFfh12ip.js.map
