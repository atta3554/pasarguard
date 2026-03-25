import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { u as useForm, o as objectType, b as booleanType, s as stringType, l as literalType, e as enumType } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { B as Button } from "./button-BOH66nN-.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, f as FormDescription, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { P as PasswordInput } from "./password-input-RJqY0JKY.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { useSettingsContext } from "./_dashboard.settings-B7r_UQvF.js";
import { t as toast } from "./index-C_i3x-Gf.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { S as Send, W as Webhook } from "./webhook-BUHC6rmw.js";
import { S as Settings } from "./settings-ByQKCi6u.js";
import { B as Bot } from "./bot-Cci_G9u1.js";
import { R as RefreshCcw } from "./refresh-ccw-Cv41gpGR.js";
import { S as Shield } from "./shield-B15rcL-H.js";
import { G as Globe } from "./globe-DSaKc6yy.js";
import { S as Smartphone } from "./smartphone-D_VXvi_S.js";
import { U as Users } from "./users-CleGz3MO.js";
import "./radix-3Azqn93X.js";
import "./label-D6GrbpFd.js";
import "./eye-BsrIbFi5.js";
import "./chevron-down-CYTM5oAI.js";
import "./check-ayw17ogi.js";
import "./page-header-C5rLxqcj.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./react-router-C8FEAJQh.js";
import "./plus-H2QM6nQ9.js";
import "./react-query-DMC2nZO-.js";
import "./list-todo-AlqsRBAQ.js";
import "./database-Ym3sipoZ.js";
import "./palette-r4JKak9R.js";
import "./recharts-B0278qLa.js";
const telegramSettingsSchema = objectType({
  enable: booleanType().default(false),
  token: stringType().optional(),
  method: enumType(["webhook", "long-polling"]).default("webhook"),
  webhook_url: stringType().url("Please enter a valid URL").optional().or(literalType("")).refine(
    (url) => {
      if (!url || url === "") return true;
      try {
        const parsedUrl = new URL(url);
        const allowedPorts = ["443", "80", "88", "8443"];
        const port = parsedUrl.port || (parsedUrl.protocol === "https:" ? "443" : "80");
        return allowedPorts.includes(port);
      } catch {
        return false;
      }
    },
    {
      message: "Telegram webhook URL must use ports 443, 80, 88, or 8443"
    }
  ).refine(
    (url) => {
      if (!url || url === "") return true;
      return !url.endsWith("/");
    },
    {
      message: "Telegram webhook URL must not end with a slash (/)."
    }
  ),
  webhook_secret: stringType().optional(),
  proxy_url: stringType().url("Please enter a valid URL").optional().or(literalType("")),
  mini_app_login: booleanType().default(false),
  mini_app_url: stringType().url("Please enter a valid URL").optional().or(literalType("")),
  for_admins_only: booleanType().default(true)
});
const getCurrentPanelUrl = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};
function mapTelegramFormToPayload(data) {
  const mapped = {
    ...data,
    enable: data.enable ?? false,
    method: data.method ?? "webhook",
    mini_app_login: data.mini_app_login ?? false,
    for_admins_only: data.for_admins_only ?? true,
    token: data.token?.trim() || void 0,
    webhook_url: data.webhook_url?.trim() || void 0,
    webhook_secret: data.webhook_secret?.trim() || void 0,
    proxy_url: data.proxy_url?.trim() || void 0,
    mini_app_web_url: data.mini_app_url?.trim() || void 0
  };
  delete mapped.mini_app_url;
  return { telegram: mapped };
}
function TelegramSettings() {
  const { t } = useTranslation();
  const { settings, isLoading, error, updateSettings, isSaving } = useSettingsContext();
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const form = useForm({
    resolver: a(telegramSettingsSchema),
    defaultValues: {
      enable: false,
      token: "",
      method: "webhook",
      webhook_url: "",
      webhook_secret: "",
      proxy_url: "",
      mini_app_login: false,
      mini_app_url: "",
      for_admins_only: true
    }
  });
  const enableTelegram = form.watch("enable");
  const method = form.watch("method");
  reactExports.useEffect(() => {
    if (settings?.telegram) {
      const telegramData = settings.telegram;
      form.reset({
        enable: telegramData.enable || false,
        token: telegramData.token || "",
        method: telegramData.method || "webhook",
        webhook_url: telegramData.webhook_url || "",
        webhook_secret: telegramData.webhook_secret || "",
        proxy_url: telegramData.proxy_url || "",
        mini_app_login: telegramData.mini_app_login || false,
        mini_app_url: telegramData.mini_app_web_url || "",
        for_admins_only: telegramData.for_admins_only !== void 0 ? telegramData.for_admins_only : true
      });
    }
  }, [settings, form]);
  const onSubmit = async (data) => {
    try {
      const filteredData = mapTelegramFormToPayload(data);
      await updateSettings(filteredData);
    } catch (error2) {
    }
  };
  const handleCancel = () => {
    if (settings?.telegram) {
      const telegramData = settings.telegram;
      form.reset({
        enable: telegramData.enable || false,
        token: telegramData.token || "",
        method: telegramData.method || "webhook",
        webhook_url: telegramData.webhook_url || "",
        webhook_secret: telegramData.webhook_secret || "",
        proxy_url: telegramData.proxy_url || "",
        mini_app_login: telegramData.mini_app_login || false,
        mini_app_url: telegramData.mini_app_web_url || "",
        for_admins_only: telegramData.for_admins_only !== void 0 ? telegramData.for_admins_only : true
      });
      toast.success(t("settings.telegram.cancelSuccess"));
    }
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
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 animate-pulse rounded bg-muted" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: t("settings.telegram.general.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("settings.telegram.general.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "enable",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center justify-between gap-x-2 space-y-0 rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 sm:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex cursor-pointer items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  t("settings.telegram.general.enable")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.general.enableDescription") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
            ] })
          }
        ),
        enableTelegram && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "method",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4" }),
                t("settings.telegram.general.method")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("settings.telegram.general.methodPlaceholder") }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "webhook", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Webhook, { className: "h-4 w-4" }),
                    t("settings.telegram.general.webhook")
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "long-polling", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                    t("settings.telegram.general.longPolling")
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.general.methodDescription") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        ),
        enableTelegram && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "token",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4" }),
                  t("settings.telegram.general.token")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { placeholder: t("settings.telegram.general.tokenPlaceholder"), ...field, className: "font-mono" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.general.tokenDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          method === "webhook" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "webhook_url",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Webhook, { className: "h-4 w-4" }),
                  t("settings.telegram.general.webhookUrl")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", placeholder: t("settings.telegram.general.webhookUrlPlaceholder"), ...field, className: "pr-10 font-mono" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: popoverOpen, onOpenChange: setPopoverOpen, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        className: "absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 hover:bg-accent",
                        onClick: (e) => {
                          e.preventDefault();
                          const currentUrl = getCurrentPanelUrl();
                          field.onChange(currentUrl);
                          toast.success(t("settings.telegram.general.panelUrlApplied"));
                          setPopoverOpen(false);
                        },
                        onMouseEnter: () => setPopoverOpen(true),
                        onMouseLeave: () => setPopoverOpen(false),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-80", side: "top", align: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: t("settings.telegram.general.usePanelUrl") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("settings.telegram.general.usePanelUrlDescription") })
                    ] }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormDescription, { className: "text-sm text-muted-foreground", children: [
                  t("settings.telegram.general.webhookUrlDescription"),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          method === "webhook" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "webhook_secret",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4" }),
                  t("settings.telegram.general.webhookSecret")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { placeholder: t("settings.telegram.general.webhookSecretPlaceholder"), ...field, className: "font-mono" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.general.webhookSecretDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "proxy_url",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                  t("settings.telegram.general.proxyUrl")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", placeholder: t("settings.telegram.general.proxyUrlPlaceholder"), ...field, className: "font-mono" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.general.proxyUrlDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          )
        ] })
      ] }),
      enableTelegram && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: t("settings.telegram.advanced.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("settings.telegram.advanced.description") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "mini_app_login",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center justify-between space-y-0 rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 sm:p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex cursor-pointer items-center gap-2 text-sm font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-4 w-4" }),
                    t("settings.telegram.advanced.miniAppLogin")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.advanced.miniAppLoginDescription") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
              ] })
            }
          ),
          form.watch("mini_app_login") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "mini_app_url",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-4 w-4" }),
                  t("settings.telegram.advanced.miniAppUrl")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", placeholder: t("settings.telegram.advanced.miniAppUrlPlaceholder"), ...field, className: "font-mono" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.advanced.miniAppUrlDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "for_admins_only",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center justify-between space-y-0 rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 sm:p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex cursor-pointer items-center gap-2 text-sm font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
                    t("settings.telegram.advanced.forAdminsOnly")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.telegram.advanced.forAdminsOnlyDescription") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
              ] })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:shrink-0 sm:flex-row sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: handleCancel, className: "w-full min-w-[100px] sm:w-auto", disabled: isSaving, children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSaveDisabled, isLoading: isSaving, loadingText: t("saving"), className: "w-full min-w-[100px] sm:w-auto", children: t("save") })
      ] })
    ] })
  ] }) }) });
}
export {
  TelegramSettings as default
};
//# sourceMappingURL=_dashboard.settings.telegram-DLcCgo-6.js.map
