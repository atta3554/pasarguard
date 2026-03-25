import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { R as Root2, I as Item2, a as Indicator } from "./radix-3Azqn93X.js";
import { f as createLucideIcon, c as cn, g as useTheme, a as useDirDetection, t as toast, h as colorThemes } from "./index-C_i3x-Gf.js";
import { C as Circle } from "./circle-CMQZw6eB.js";
import { L as Label } from "./label-D6GrbpFd.js";
import { B as Button } from "./button-BOH66nN-.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { g as getDatePickerPreference, s as setDatePickerPreference } from "./userPreferenceStorage-DH2hTFsa.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { C as CircleCheck } from "./circle-check-CPuiTWET.js";
import { P as Palette } from "./palette-r4JKak9R.js";
import { L as Languages, M as Moon, S as Sun } from "./sun-C1kX90iq.js";
import { E as Eye } from "./eye-BsrIbFi5.js";
import { R as RotateCcw } from "./rotate-ccw-DRnRH3H4.js";
import { M as Monitor } from "./monitor-ZPkozcYt.js";
import "./react-query-DMC2nZO-.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
const CalendarClock = createLucideIcon("CalendarClock", [
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
]);
const Ruler = createLucideIcon("Ruler", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
]);
const SunMoon = createLucideIcon("SunMoon", [
  ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
  ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
  ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }]
]);
const RadioGroup = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = Root2.displayName;
const RadioGroupItem = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = Item2.displayName;
const colorThemeData = [
  { name: "default", label: "theme.default", dot: "#2563eb" },
  { name: "red", label: "theme.red", dot: "#ef4444" },
  { name: "rose", label: "theme.rose", dot: "#e11d48" },
  { name: "orange", label: "theme.orange", dot: "#f97316" },
  { name: "green", label: "theme.green", dot: "#22c55e" },
  { name: "blue", label: "theme.blue", dot: "#3b82f6" },
  { name: "yellow", label: "theme.yellow", dot: "#eab308" },
  { name: "violet", label: "theme.violet", dot: "#8b5cf6" }
];
const radiusOptions = [
  { value: "0", label: "theme.radiusNone", description: "0px" },
  { value: "0.3rem", label: "theme.radiusSmall", description: "0.3rem" },
  { value: "0.5rem", label: "theme.radiusMedium", description: "0.5rem" },
  { value: "0.75rem", label: "theme.radiusLarge", description: "0.75rem" }
];
const modeOptions = ["light", "dark", "system"];
const modeIcons = {
  light: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 text-primary" }),
  dark: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4 text-primary" }),
  system: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "h-4 w-4 text-primary" })
};
function ThemeSettings() {
  const { t, i18n } = useTranslation();
  const { theme, colorTheme, radius, resolvedTheme, setTheme, setColorTheme, setRadius, resetToDefaults, isSystemTheme } = useTheme();
  const dir = useDirDetection();
  const [isResetting, setIsResetting] = reactExports.useState(false);
  const [datePickerPreference, setDatePickerPreferenceState] = reactExports.useState("locale");
  const isDatePickerFollowingLocale = datePickerPreference === "locale";
  const defaultManualDatePreference = i18n.language === "fa" ? "persian" : "gregorian";
  const datePickerModeCopy = {
    locale: t("theme.datePickerModeLocale"),
    gregorian: t("theme.datePickerModeGregorian"),
    persian: t("theme.datePickerModePersian")
  };
  reactExports.useEffect(() => {
    setDatePickerPreferenceState(getDatePickerPreference());
  }, []);
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    const getThemeIcon = (theme2) => {
      switch (theme2) {
        case "light":
          return "☀️";
        case "dark":
          return "🌙";
        case "system":
          return "💻";
        default:
          return "🎨";
      }
    };
    toast.success(t("success"), {
      description: `${getThemeIcon(newTheme)} ${t("theme.themeChanged")}`,
      duration: 2e3
    });
  };
  const handleColorChange = (colorName) => {
    if (Object.keys(colorThemes).includes(colorName)) {
      setColorTheme(colorName);
      const colorData = colorThemeData.find((c) => c.name === colorName);
      const colorEmoji = "🎨";
      toast.success(t("success"), {
        description: `${colorEmoji} ${t("theme.themeSaved")} - ${t(colorData?.label || "")}`,
        duration: 2e3
      });
    }
  };
  const handleRadiusChange = (radiusValue) => {
    if (["0", "0.3rem", "0.5rem", "0.75rem"].includes(radiusValue)) {
      setRadius(radiusValue);
      const radiusData = radiusOptions.find((r) => r.value === radiusValue);
      toast.success(t("success"), {
        description: `📐 ${t("theme.radiusSaved")} - ${t(radiusData?.label || "")}`,
        duration: 2e3
      });
    }
  };
  const persistDatePickerPreference = (preference) => {
    setDatePickerPreferenceState(preference);
    setDatePickerPreference(preference);
    toast.success(t("success"), {
      description: `📅 ${t("theme.datePickerPreferenceSaved")} • ${datePickerModeCopy[preference]}`,
      duration: 2e3
    });
  };
  const handleDatePickerAutoToggle = (checked) => {
    if (checked) {
      persistDatePickerPreference("locale");
      return;
    }
    const nextPreference = datePickerPreference === "locale" ? defaultManualDatePreference : datePickerPreference;
    persistDatePickerPreference(nextPreference);
  };
  const handleManualDatePreferenceChange = (preference) => {
    persistDatePickerPreference(preference);
  };
  const handleResetToDefaults = async () => {
    setIsResetting(true);
    try {
      resetToDefaults();
      toast.success(t("success"), {
        description: "🔄 " + t("theme.resetSuccess"),
        duration: 3e3
      });
    } catch (error) {
      toast.error(t("error"), {
        description: "❌ " + t("theme.resetFailed"),
        duration: 3e3
      });
    } finally {
      setIsResetting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10 px-4 pb-12 pt-6 sm:pt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SunMoon, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold sm:text-lg", children: t("theme.mode") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: t("theme.modeDescription") })
        ] }),
        isSystemTheme && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground sm:text-sm rtl:text-left", children: [
          t("theme.system"),
          ": ",
          resolvedTheme === "dark" ? t("theme.dark") : t("theme.light")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { value: theme, onValueChange: handleThemeChange, className: "grid gap-3 sm:grid-cols-3", children: modeOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: option, id: option, className: "peer sr-only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Label,
          {
            htmlFor: option,
            dir,
            className: cn(
              "flex cursor-pointer items-start justify-between gap-3 rounded-lg border border-border/70 bg-background px-4 py-3 text-sm transition-colors",
              "hover:border-primary/60 hover:bg-accent/40",
              "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  modeIcons[option],
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t(`theme.${option}`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs leading-relaxed text-muted-foreground", children: t(`theme.${option}Description`) })
              ] }),
              theme === option && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 flex-shrink-0 text-primary ltr:ml-auto rtl:mr-auto" })
            ]
          }
        )
      ] }, option)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold sm:text-lg", children: t("theme.color") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: t("theme.colorDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4", children: colorThemeData.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleColorChange(color.name),
          dir,
          className: cn(
            "group flex items-center gap-3 rounded-md border border-border/70 px-4 py-3 text-left transition-colors",
            "hover:border-primary/60 hover:bg-accent/40",
            colorTheme === color.name ? "border-primary bg-primary/5" : "bg-background"
          ),
          "aria-label": color.label,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "h-8 w-8 rounded-full border shadow-sm transition-transform group-hover:scale-105",
                  colorTheme === color.name ? "border-primary" : "border-border"
                ),
                style: { background: color.dot }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t(color.label) }),
            colorTheme === color.name && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary ltr:ml-auto rtl:mr-auto" })
          ]
        },
        color.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold sm:text-lg", children: t("theme.radius") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: t("theme.radiusDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { value: radius, onValueChange: handleRadiusChange, className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4", children: radiusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: option.value, id: `radius-${option.value}`, className: "peer sr-only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Label,
          {
            htmlFor: `radius-${option.value}`,
            dir,
            className: cn(
              "flex cursor-pointer flex-wrap items-start gap-3 rounded-lg border border-border/70 bg-background px-4 py-3 text-sm transition-colors",
              "hover:border-primary/50 hover:bg-accent/40",
              "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5",
              "sm:flex-nowrap sm:items-center"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border bg-muted", style: { borderRadius: option.value }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4 bg-primary/30", style: { borderRadius: option.value } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium", children: t(option.label) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs leading-relaxed text-muted-foreground break-words", children: option.description })
              ] }),
              radius === option.value && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 flex-shrink-0 text-primary ltr:ml-auto rtl:mr-auto" })
            ]
          }
        )
      ] }, option.value)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 rounded-lg border border-border/70 bg-background/60 p-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold sm:text-lg", children: t("theme.datePicker") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: t("theme.datePickerDescription") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 justify-between rounded-lg border border-border/70 bg-muted/40 px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: t("theme.datePickerFollowLocale") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-relaxed text-muted-foreground", children: t("theme.datePickerManualHint") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: isDatePickerFollowingLocale, onCheckedChange: handleDatePickerAutoToggle, "aria-label": t("theme.datePickerFollowLocale") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "grid grid-cols-1 gap-2 pb-6 sm:pb-2 rounded-lg border border-dashed border-border/70 bg-muted/30 px-3 py-2 sm:flex sm:flex-wrap sm:items-center",
          dir,
          children: [
            ["gregorian", "persian"].map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: datePickerPreference === option ? "default" : "outline",
                size: "sm",
                className: "flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-start",
                disabled: isDatePickerFollowingLocale,
                onClick: () => handleManualDatePreferenceChange(option),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: datePickerModeCopy[option] })
                ]
              },
              option
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-start gap-2 mt-3 sm:mt-0 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-3.5 w-3.5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: datePickerModeCopy[datePickerPreference] }),
              isDatePickerFollowingLocale && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-muted-foreground sm:inline", children: t("theme.datePickerModeLocale") })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold sm:text-lg", children: t("theme.preview") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: t("theme.previewDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 rounded-lg border border-border/70 bg-muted/30 p-4", style: { borderRadius: radius }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: t("theme.dashboardPreview") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              t("theme.currentTheme"),
              ": ",
              t(colorThemeData.find((c) => c.name === colorTheme)?.label || ""),
              " • ",
              resolvedTheme === "dark" ? t("theme.dark") : t("theme.light")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-accent" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded bg-primary/80", style: { borderRadius: radius } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded bg-muted", style: { borderRadius: radius } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded bg-accent", style: { borderRadius: radius } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 items-center rounded border bg-background px-3 text-xs text-muted-foreground", style: { borderRadius: radius }, children: t("theme.sampleInput") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 items-center justify-center rounded bg-primary text-xs font-medium text-primary-foreground", style: { borderRadius: radius }, children: t("theme.primaryButton") })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-2 border-t pt-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold sm:text-lg", children: t("theme.resetToDefaults") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground sm:text-sm", children: t("theme.resetDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: handleResetToDefaults, disabled: isResetting, className: "w-full sm:w-auto", children: isResetting ? t("theme.resetting") : t("theme.reset") })
    ] })
  ] });
}
export {
  ThemeSettings as default
};
//# sourceMappingURL=_dashboard.settings.theme-D7xONK_5.js.map
