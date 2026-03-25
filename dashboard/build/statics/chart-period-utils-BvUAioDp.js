import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { c as cn, aW as parseDateInput, ar as Period, ag as dayjs, at as formatOffsetDateTime, b4 as formatOffsetEndOfDay, b5 as formatOffsetStartOfDay } from "./index-C_i3x-Gf.js";
import { T as Tooltip, R as ResponsiveContainer } from "./recharts-B0278qLa.js";
import { g as getPeriodFromDateRange } from "./date-picker-R6TlQCrv.js";
const THEMES = { light: "", dark: ".dark" };
const ChartContext = reactExports.createContext(null);
function useChart() {
  const context = reactExports.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
const ChartContainer = reactExports.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = reactExports.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([, config2]) => config2.theme || config2.color);
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
const ChartTooltip = Tooltip;
const ChartTooltipContent = reactExports.forwardRef(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref) => {
  const { config } = useChart();
  const tooltipLabel = reactExports.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || item.dataKey || item.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-semibold", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-medium", labelClassName), children: value });
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-primary/50 bg-primary/5 px-2.5 py-1.5 text-xs text-primary-foreground shadow-xl backdrop-blur-3xl", className),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"), children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            itemConfig?.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                  "h-2.5 w-2.5": indicator === "dot",
                  "w-1": indicator === "line",
                  "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                  "my-0.5": nestLabel && indicator === "dashed"
                }),
                style: {
                  "--color-bg": indicatorColor,
                  "--color-border": indicatorColor
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
                nestLabel ? tooltipLabel : null,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: itemConfig?.label || item.name })
              ] }),
              item.value && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: item.value.toLocaleString() })
            ] })
          ] }) }, item.dataKey);
        }) })
      ]
    }
  );
});
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegendContent = reactExports.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className), children: payload.map((item) => {
    const key = `${nameKey || item.dataKey || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"), children: [
      itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-2 w-2 shrink-0 rounded-[2px]",
          style: {
            backgroundColor: item.color
          }
        }
      ),
      itemConfig?.label
    ] }, item.value);
  }) });
});
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
const SHORTCUT_PATTERN$1 = /^(\d+)([hdwm])$/;
const HOUR_IN_MS = 60 * 60 * 1e3;
const getTotalDays = (amount, unit) => {
  if (unit === "d") return amount;
  if (unit === "w") return amount * 7;
  return amount * 30;
};
const getDateRangeFromShortcut = (shortcut, now = /* @__PURE__ */ new Date()) => {
  if (shortcut.trim().toLowerCase() === "all") {
    const endOfDay2 = parseDateInput(now).endOf("day");
    return {
      from: new Date(2e3, 0, 1, 0, 0, 0, 0),
      to: endOfDay2.toDate()
    };
  }
  const match = shortcut.trim().match(SHORTCUT_PATTERN$1);
  if (!match) return void 0;
  const amount = Number.parseInt(match[1], 10);
  const unit = match[2];
  if (!Number.isFinite(amount) || amount <= 0) return void 0;
  if (unit === "h") {
    return {
      from: new Date(now.getTime() - amount * HOUR_IN_MS),
      to: now
    };
  }
  const totalDays = getTotalDays(amount, unit);
  const endOfDay = parseDateInput(now).endOf("day");
  const startOfRange = endOfDay.subtract(Math.max(totalDays - 1, 0), "day").startOf("day");
  return {
    from: startOfRange.toDate(),
    to: endOfDay.toDate()
  };
};
const PERIOD_KEYS = [
  { key: "24h", period: Period.hour, amount: 24, unit: "hour" },
  { key: "3d", period: Period.day, amount: 3, unit: "day" },
  { key: "7d", period: Period.day, amount: 7, unit: "day" },
  { key: "30d", period: Period.day, amount: 30, unit: "day" },
  { key: "1m", period: Period.day, amount: 1, unit: "month" },
  { key: "3m", period: Period.day, amount: 3, unit: "month" }
];
const isPersianLanguage = (language) => language.toLowerCase().startsWith("fa");
const getLocale = (language) => isPersianLanguage(language) ? "fa-IR" : "en-US";
const buildPeriodOptions = (t) => [
  ...PERIOD_KEYS.map((option) => ({
    label: `${option.amount} ${t(`time.${option.unit}${option.amount > 1 ? "s" : ""}`)}`,
    value: option.key,
    period: option.period,
    hours: option.unit === "hour" ? option.amount : void 0,
    days: option.unit === "day" ? option.amount : void 0,
    months: option.unit === "month" ? option.amount : void 0
  })),
  {
    label: t("alltime", { defaultValue: "All Time" }),
    value: "all",
    period: Period.day,
    allTime: true
  }
];
const getDefaultPeriodOption = (options) => options[2] ?? options[0];
const getDateRangeForPeriodOption = (periodOption) => {
  const now = dayjs();
  let start;
  if (periodOption.allTime) {
    start = dayjs(new Date(2e3, 0, 1, 0, 0, 0, 0));
  } else if (periodOption.hours) {
    start = now.subtract(periodOption.hours, "hour");
  } else if (periodOption.days) {
    const daysToSubtract = periodOption.days === 7 ? 6 : periodOption.days === 3 ? 2 : periodOption.days === 1 ? 0 : periodOption.days;
    start = now.subtract(daysToSubtract, "day").startOf("day");
  } else if (periodOption.months) {
    start = now.subtract(periodOption.months, "month").startOf("day");
  } else {
    start = now;
  }
  return {
    startDate: formatOffsetDateTime(start.toDate()),
    endDate: formatOffsetDateTime(now.toDate())
  };
};
const toChartQueryEndDate = (endDate) => formatOffsetEndOfDay(endDate);
const toChartPeriodStart = (periodStart) => parseDateInput(periodStart);
const toChartDisplayDate = (periodStart, includeTime) => {
  const parsed = toChartPeriodStart(periodStart);
  return new Date(
    parsed.year(),
    parsed.month(),
    parsed.date(),
    includeTime ? parsed.hour() : 0,
    includeTime ? parsed.minute() : 0,
    includeTime ? parsed.second() : 0,
    includeTime ? parsed.millisecond() : 0
  );
};
const formatPeriodLabel = (periodStart, periodOption, language) => {
  const locale = getLocale(language);
  const d = toChartPeriodStart(periodStart);
  if (periodOption.hours) {
    return d.format("HH:mm");
  }
  if (periodOption.period === Period.day) {
    const localDate = toChartDisplayDate(periodStart, false);
    return localDate.toLocaleString(locale, {
      month: "2-digit",
      day: "2-digit"
    });
  }
  return toChartDisplayDate(periodStart, true).toLocaleString(locale, {
    month: "2-digit",
    day: "2-digit"
  });
};
const formatTooltipDate = (periodStart, period, language) => {
  const locale = getLocale(language);
  if (period === Period.day) {
    const localDate = toChartDisplayDate(periodStart, false);
    return localDate.toLocaleDateString(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  return toChartDisplayDate(periodStart, true).toLocaleString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).replace(",", "");
};
const getXAxisInterval = (periodOption, dataLength) => {
  if (periodOption.hours) {
    const targetLabels = 8;
    return Math.max(1, Math.floor(dataLength / targetLabels));
  }
  if (periodOption.months || periodOption.allTime) {
    const targetLabels = 5;
    return Math.max(1, Math.floor(dataLength / targetLabels));
  }
  if (periodOption.days && periodOption.days > 7) {
    const targetLabels = periodOption.days === 30 ? 10 : 8;
    return Math.max(1, Math.floor(dataLength / targetLabels));
  }
  return 0;
};
const SHORTCUT_PATTERN = /^(\d+)([hdwm])$/;
const getShortcutPeriod = (shortcut, options) => {
  if (shortcut === "1h" && options?.minuteForOneHour) {
    return Period.minute;
  }
  if (shortcut.endsWith("h")) {
    return Period.hour;
  }
  return Period.day;
};
const getShortcutMeta = (shortcut) => {
  if (shortcut === "all") {
    return { allTime: true };
  }
  const match = shortcut.match(SHORTCUT_PATTERN);
  if (!match) return {};
  const amount = Number.parseInt(match[1], 10);
  const unit = match[2];
  if (!Number.isFinite(amount) || amount <= 0) return {};
  if (unit === "h") {
    return { hours: amount };
  }
  if (unit === "d") {
    return { days: amount };
  }
  if (unit === "w") {
    return { days: amount * 7 };
  }
  return { months: amount };
};
const getXAxisIntervalForShortcut = (shortcut, dataLength, options) => {
  const meta = getShortcutMeta(shortcut);
  getShortcutPeriod(shortcut, options);
  return getXAxisInterval(
    {
      hours: "hours" in meta ? meta.hours : void 0,
      days: "days" in meta ? meta.days : void 0,
      months: "months" in meta ? meta.months : void 0,
      allTime: "allTime" in meta ? meta.allTime : void 0
    },
    dataLength
  );
};
const buildChartQueryRange = (period, from, to) => {
  const startDate = period === Period.day ? formatOffsetStartOfDay(from) : formatOffsetDateTime(from);
  const endDate = period === Period.day ? formatOffsetEndOfDay(to) : formatOffsetDateTime(to);
  return { period, startDate, endDate };
};
const getChartQueryRangeFromShortcut = (shortcut, now = /* @__PURE__ */ new Date(), options) => {
  const safeRange = getDateRangeFromShortcut(shortcut, now);
  const from = safeRange?.from ?? now;
  const to = safeRange?.to ?? now;
  const period = getShortcutPeriod(shortcut, options);
  return buildChartQueryRange(period, from, to);
};
const getChartQueryRangeFromDateRange = (range, fallbackShortcut = "1w") => {
  if (!range.from || !range.to) {
    return getChartQueryRangeFromShortcut(fallbackShortcut);
  }
  const period = getPeriodFromDateRange(range);
  return buildChartQueryRange(period, range.from, range.to);
};
const formatPeriodLabelForPeriod = (periodStart, period, language) => {
  const option = {
    period,
    ...period === Period.hour || period === Period.minute ? { hours: 1 } : {}
  };
  return formatPeriodLabel(periodStart, option, language);
};
const pickStatsArray = (stats, preferredKeys = ["-1"]) => {
  if (!stats) return [];
  if (Array.isArray(stats)) {
    return stats;
  }
  for (const key of preferredKeys) {
    const candidate = stats[key];
    if (Array.isArray(candidate)) {
      return candidate;
    }
  }
  const firstKey = Object.keys(stats)[0];
  if (!firstKey) return [];
  return Array.isArray(stats[firstKey]) ? stats[firstKey] : [];
};
const toStatsRecord = (stats) => {
  if (!stats) return {};
  if (Array.isArray(stats)) return { "-1": stats };
  return stats;
};
export {
  ChartContainer as C,
  getChartQueryRangeFromShortcut as a,
  getXAxisIntervalForShortcut as b,
  ChartTooltip as c,
  formatTooltipDate as d,
  buildPeriodOptions as e,
  formatPeriodLabelForPeriod as f,
  getChartQueryRangeFromDateRange as g,
  getDefaultPeriodOption as h,
  getDateRangeForPeriodOption as i,
  toChartQueryEndDate as j,
  formatPeriodLabel as k,
  getXAxisInterval as l,
  pickStatsArray as p,
  toStatsRecord as t
};
//# sourceMappingURL=chart-period-utils-BvUAioDp.js.map
