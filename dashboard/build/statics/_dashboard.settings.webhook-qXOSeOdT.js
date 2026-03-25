import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { u as useForm, i as useFieldArray, o as objectType, s as stringType, l as literalType, n as numberType, a as arrayType, b as booleanType } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { B as Button } from "./button-BOH66nN-.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, f as FormDescription, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { P as PasswordInput } from "./password-input-RJqY0JKY.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { C as Card } from "./card-5ZQOfa_i.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { useSettingsContext } from "./_dashboard.settings-B7r_UQvF.js";
import { f as createLucideIcon, t as toast } from "./index-C_i3x-Gf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { W as Webhook } from "./webhook-BUHC6rmw.js";
import { C as Clock } from "./clock-BCHdn894.js";
import { G as Globe } from "./globe-DSaKc6yy.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import { T as Target } from "./target-HZltYcaX.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import "./radix-3Azqn93X.js";
import "./label-D6GrbpFd.js";
import "./eye-BsrIbFi5.js";
import "./page-header-C5rLxqcj.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./react-router-C8FEAJQh.js";
import "./react-query-DMC2nZO-.js";
import "./settings-ByQKCi6u.js";
import "./list-todo-AlqsRBAQ.js";
import "./database-Ym3sipoZ.js";
import "./palette-r4JKak9R.js";
import "./recharts-B0278qLa.js";
const RotateCw = createLucideIcon("RotateCw", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);
const webhookSettingsSchema = objectType({
  enable: booleanType().default(false),
  webhooks: arrayType(
    objectType({
      url: stringType().url("Please enter a valid URL"),
      secret: stringType().min(1, "Secret is required")
    })
  ).default([]),
  days_left: arrayType(numberType().min(0).max(365)).default([]),
  usage_percent: arrayType(numberType().min(1).max(100)).default([]),
  timeout: numberType().min(1).max(300).default(30),
  recurrent: numberType().min(1).max(24).default(3),
  proxy_url: stringType().url("Please enter a valid URL").optional().or(literalType(""))
});
function WebhookSettings() {
  const { t } = useTranslation();
  const { settings, isLoading, error, updateSettings, isSaving } = useSettingsContext();
  const form = useForm({
    resolver: a(webhookSettingsSchema),
    defaultValues: {
      enable: false,
      webhooks: [],
      days_left: [],
      usage_percent: [],
      timeout: 30,
      recurrent: 3,
      proxy_url: ""
    }
  });
  const {
    fields: webhookFields,
    append: appendWebhook,
    remove: removeWebhook
  } = useFieldArray({
    control: form.control,
    name: "webhooks"
  });
  const {
    fields: daysLeftFields,
    append: appendDaysLeft,
    remove: removeDaysLeft
  } = useFieldArray({
    control: form.control,
    name: "days_left"
  });
  const {
    fields: usagePercentFields,
    append: appendUsagePercent,
    remove: removeUsagePercent
  } = useFieldArray({
    control: form.control,
    name: "usage_percent"
  });
  const enableWebhook = form.watch("enable");
  reactExports.useEffect(() => {
    if (settings?.webhook) {
      const webhookData = settings.webhook;
      form.reset({
        enable: webhookData.enable || false,
        webhooks: webhookData.webhooks || [],
        days_left: webhookData.days_left || [],
        usage_percent: webhookData.usage_percent || [],
        timeout: webhookData.timeout || 30,
        recurrent: webhookData.recurrent || 3,
        proxy_url: webhookData.proxy_url || ""
      });
    }
  }, [settings, form]);
  const onSubmit = async (data) => {
    try {
      const filteredData = {
        webhook: {
          ...data,
          enable: data.enable ?? false,
          days_left: data.days_left ?? [],
          usage_percent: data.usage_percent ?? [],
          timeout: data.timeout ?? 30,
          recurrent: data.recurrent ?? 3,
          // Convert empty strings to undefined
          proxy_url: data.proxy_url?.trim() || void 0,
          // Ensure arrays are properly formatted
          webhooks: (data.webhooks ?? []).map((webhook) => ({
            url: webhook.url.trim(),
            secret: webhook.secret.trim()
          }))
        }
      };
      await updateSettings(filteredData);
    } catch (error2) {
    }
  };
  const handleCancel = () => {
    if (settings?.webhook) {
      const webhookData = settings.webhook;
      form.reset({
        enable: webhookData.enable || false,
        webhooks: webhookData.webhooks || [],
        days_left: webhookData.days_left || [],
        usage_percent: webhookData.usage_percent || [],
        timeout: webhookData.timeout || 30,
        recurrent: webhookData.recurrent || 3,
        proxy_url: webhookData.proxy_url || ""
      });
      toast.success(t("settings.webhook.cancelSuccess"));
    }
  };
  const addWebhook = () => {
    appendWebhook({ url: "", secret: "" });
  };
  const addDaysLeft = () => {
    appendDaysLeft(7);
  };
  const addUsagePercent = () => {
    appendUsagePercent(80);
  };
  const isSaveDisabled = isSaving;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-4 sm:py-6 lg:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 sm:space-y-8 lg:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-48 animate-pulse rounded bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-96 animate-pulse rounded bg-muted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 animate-pulse rounded bg-muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-24 animate-pulse rounded bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 animate-pulse rounded bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-64 animate-pulse rounded bg-muted" })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:shrink-0 sm:flex-row sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-24 animate-pulse rounded bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-20 animate-pulse rounded bg-muted" })
        ] })
      ] })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[400px] items-center justify-center p-4 sm:py-6 lg:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg text-red-500", children: "⚠️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: "Error loading settings" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[calc(100vh-200px)] w-full flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-1 flex-col p-4 sm:py-6 lg:py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 sm:space-y-8 lg:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: t("settings.webhook.general.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("settings.webhook.general.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "enable",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center justify-between gap-x-2 space-y-0 rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 sm:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex cursor-pointer items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Webhook, { className: "h-4 w-4" }),
                  t("settings.webhook.general.enable")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.webhook.general.enableDescription") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
            ] })
          }
        ),
        enableWebhook && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "timeout",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
                  t("settings.webhook.general.timeout")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "1", max: "300", placeholder: "30", ...field, onChange: (e) => field.onChange(parseInt(e.target.value) || 30) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.webhook.general.timeoutDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "recurrent",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "h-4 w-4" }),
                  t("settings.webhook.general.recurrent")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "1", max: "24", placeholder: "3", ...field, onChange: (e) => field.onChange(parseInt(e.target.value) || 3) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.webhook.general.recurrentDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "proxy_url",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2 lg:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                  t("settings.webhook.general.proxyUrl")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", placeholder: t("settings.webhook.general.proxyUrlPlaceholder"), ...field }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.webhook.general.proxyUrlDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          )
        ] })
      ] }),
      enableWebhook && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: t("settings.webhook.webhooks.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("settings.webhook.webhooks.description") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addWebhook, className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            t("settings.webhook.webhooks.add")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          webhookFields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                  t("settings.webhook.webhooks.webhook"),
                  " #",
                  index + 1
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeWebhook(index), className: "text-red-500 hover:bg-red-50 hover:text-red-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: `webhooks.${index}.url`,
                  render: ({ field: field2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "text-sm", children: [
                      t("settings.webhook.webhooks.url"),
                      " *"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", placeholder: "https://example.com/webhook", ...field2 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: `webhooks.${index}.secret`,
                  render: ({ field: field2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "text-sm", children: [
                      t("settings.webhook.webhooks.secret"),
                      " *"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { placeholder: t("settings.webhook.webhooks.secretPlaceholder"), ...field2 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              )
            ] })
          ] }, field.id)),
          webhookFields.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-dashed p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "mx-auto mb-2 h-8 w-8 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-muted-foreground", children: t("settings.webhook.webhooks.empty") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addWebhook, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              t("settings.webhook.webhooks.addFirst")
            ] })
          ] })
        ] })
      ] }),
      enableWebhook && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("settings.webhook.triggers.daysLeft.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("settings.webhook.triggers.daysLeft.description") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: addDaysLeft, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            daysLeftFields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: `days_left.${index}`,
                  render: ({ field: field2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "0", max: "365", className: "h-8 w-16 text-xs", ...field2, onChange: (e) => field2.onChange(parseInt(e.target.value) || 0) }) }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeDaysLeft(index), className: "h-8 w-8 p-0 text-red-500 hover:text-red-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
            ] }, field.id)),
            daysLeftFields.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: t("settings.webhook.triggers.daysLeft.empty") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("settings.webhook.triggers.usagePercent.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("settings.webhook.triggers.usagePercent.description") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: addUsagePercent, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            usagePercentFields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: `usage_percent.${index}`,
                  render: ({ field: field2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "1", max: "100", className: "h-8 w-16 text-xs", ...field2, onChange: (e) => field2.onChange(parseInt(e.target.value) || 1) }) }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeUsagePercent(index), className: "h-8 w-8 p-0 text-red-500 hover:text-red-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
            ] }, field.id)),
            usagePercentFields.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: t("settings.webhook.triggers.usagePercent.empty") })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:shrink-0 sm:flex-row sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: handleCancel, disabled: isSaving, className: "sm:w-auto", children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSaveDisabled, isLoading: isSaving, loadingText: t("saving"), className: "sm:w-auto", children: t("save") })
      ] })
    ] })
  ] }) }) });
}
export {
  WebhookSettings as default
};
//# sourceMappingURL=_dashboard.settings.webhook-qXOSeOdT.js.map
