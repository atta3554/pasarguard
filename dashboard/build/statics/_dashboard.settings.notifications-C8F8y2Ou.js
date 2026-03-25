import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { L as Label } from "./label-D6GrbpFd.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { P as PasswordInput } from "./password-input-RJqY0JKY.js";
import { B as Button } from "./button-BOH66nN-.js";
import { u as useForm, o as objectType, n as numberType, s as stringType, b as booleanType } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl } from "./form-BMBIU5T8.js";
import { useSettingsContext } from "./_dashboard.settings-B7r_UQvF.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { f as createLucideIcon, c as cn, t as toast } from "./index-C_i3x-Gf.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { C as Collapsible, a as CollapsibleTrigger, b as CollapsibleContent } from "./collapsible-DpL07KM4.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { U as UserCog } from "./user-cog-DuWOXNmv.js";
import { S as Settings } from "./settings-ByQKCi6u.js";
import { U as UsersRound } from "./users-round-CIlaBSBa.js";
import { L as ListTodo } from "./list-todo-AlqsRBAQ.js";
import { S as Share2 } from "./share-2-gtVcW0ku.js";
import { U as Users } from "./users-CleGz3MO.js";
import { L as LayoutTemplate } from "./layout-template-CLD1omC8.js";
import { C as Calendar } from "./calendar-BM3jGkln.js";
import { A as ArrowUpDown } from "./arrow-up-down-Ba3C-UcI.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { B as Bot } from "./bot-Cci_G9u1.js";
import { F as FileText } from "./file-text-Bc5F7-8C.js";
import { M as Megaphone } from "./megaphone-BkyK1DNR.js";
import { W as Webhook } from "./webhook-BUHC6rmw.js";
import { G as Globe } from "./globe-DSaKc6yy.js";
import { R as RotateCcw } from "./rotate-ccw-DRnRH3H4.js";
import "./radix-3Azqn93X.js";
import "./eye-BsrIbFi5.js";
import "./page-header-C5rLxqcj.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./react-router-C8FEAJQh.js";
import "./plus-H2QM6nQ9.js";
import "./react-query-DMC2nZO-.js";
import "./database-Ym3sipoZ.js";
import "./palette-r4JKak9R.js";
import "./recharts-B0278qLa.js";
import "./check-ayw17ogi.js";
const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const notificationChannelSchema = objectType({
  telegram_chat_id: numberType().optional(),
  telegram_topic_id: numberType().optional(),
  discord_webhook_url: stringType().optional()
});
const notificationChannelsSchema = objectType({
  admin: notificationChannelSchema.optional(),
  core: notificationChannelSchema.optional(),
  group: notificationChannelSchema.optional(),
  host: notificationChannelSchema.optional(),
  node: notificationChannelSchema.optional(),
  user: notificationChannelSchema.optional(),
  user_template: notificationChannelSchema.optional()
});
const notificationSettingsSchema = objectType({
  notification_enable: objectType({
    admin: objectType({
      create: booleanType().optional(),
      modify: booleanType().optional(),
      delete: booleanType().optional(),
      reset_usage: booleanType().optional(),
      login: booleanType().optional()
    }).optional(),
    core: objectType({
      create: booleanType().optional(),
      modify: booleanType().optional(),
      delete: booleanType().optional()
    }).optional(),
    group: objectType({
      create: booleanType().optional(),
      modify: booleanType().optional(),
      delete: booleanType().optional()
    }).optional(),
    host: objectType({
      create: booleanType().optional(),
      modify: booleanType().optional(),
      delete: booleanType().optional(),
      modify_hosts: booleanType().optional()
    }).optional(),
    node: objectType({
      create: booleanType().optional(),
      modify: booleanType().optional(),
      delete: booleanType().optional(),
      connect: booleanType().optional(),
      error: booleanType().optional()
    }).optional(),
    user: objectType({
      create: booleanType().optional(),
      modify: booleanType().optional(),
      delete: booleanType().optional(),
      status_change: booleanType().optional(),
      reset_data_usage: booleanType().optional(),
      data_reset_by_next: booleanType().optional(),
      subscription_revoked: booleanType().optional()
    }).optional(),
    user_template: objectType({
      create: booleanType().optional(),
      modify: booleanType().optional(),
      delete: booleanType().optional()
    }).optional(),
    days_left: booleanType().optional(),
    percentage_reached: booleanType().optional()
  }).optional(),
  notification_settings: objectType({
    notify_telegram: booleanType().optional(),
    notify_discord: booleanType().optional(),
    telegram_api_token: stringType().optional(),
    telegram_chat_id: numberType().optional(),
    telegram_channel_id: numberType().optional(),
    telegram_topic_id: numberType().optional(),
    discord_webhook_url: stringType().optional(),
    proxy_url: stringType().optional(),
    max_retries: numberType().min(1).max(10),
    channels: notificationChannelsSchema.optional()
  }).optional()
});
const notificationConfigs = [
  {
    key: "admin",
    translationKey: "admin",
    icon: UserCog,
    subPermissions: [
      { key: "create", translationKey: "create" },
      { key: "modify", translationKey: "modify" },
      { key: "delete", translationKey: "delete" },
      { key: "reset_usage", translationKey: "resetUsage" },
      { key: "login", translationKey: "login" }
    ]
  },
  {
    key: "core",
    translationKey: "core",
    icon: Settings,
    subPermissions: [
      { key: "create", translationKey: "create" },
      { key: "modify", translationKey: "modify" },
      { key: "delete", translationKey: "delete" }
    ]
  },
  {
    key: "group",
    translationKey: "group",
    icon: UsersRound,
    subPermissions: [
      { key: "create", translationKey: "create" },
      { key: "modify", translationKey: "modify" },
      { key: "delete", translationKey: "delete" }
    ]
  },
  {
    key: "host",
    translationKey: "host",
    icon: ListTodo,
    subPermissions: [
      { key: "create", translationKey: "create" },
      { key: "modify", translationKey: "modify" },
      { key: "delete", translationKey: "delete" },
      { key: "modify_hosts", translationKey: "modifyHosts" }
    ]
  },
  {
    key: "node",
    translationKey: "node",
    icon: Share2,
    subPermissions: [
      { key: "create", translationKey: "create" },
      { key: "modify", translationKey: "modify" },
      { key: "delete", translationKey: "delete" },
      { key: "connect", translationKey: "connect" },
      { key: "error", translationKey: "error" }
    ]
  },
  {
    key: "user",
    translationKey: "user",
    icon: Users,
    subPermissions: [
      { key: "create", translationKey: "create" },
      { key: "modify", translationKey: "modify" },
      { key: "delete", translationKey: "delete" },
      { key: "status_change", translationKey: "statusChange" },
      { key: "reset_data_usage", translationKey: "resetDataUsage" },
      { key: "data_reset_by_next", translationKey: "dataResetByNext" },
      { key: "subscription_revoked", translationKey: "subscriptionRevoked" }
    ]
  },
  {
    key: "user_template",
    translationKey: "userTemplate",
    icon: LayoutTemplate,
    subPermissions: [
      { key: "create", translationKey: "create" },
      { key: "modify", translationKey: "modify" },
      { key: "delete", translationKey: "delete" }
    ]
  },
  {
    key: "days_left",
    translationKey: "daysLeft",
    icon: Calendar
  },
  {
    key: "percentage_reached",
    translationKey: "percentageReached",
    icon: ArrowUpDown
  }
];
const channelTargets = [
  { key: "admin", translationKey: "admin", icon: UserCog },
  { key: "core", translationKey: "core", icon: Settings },
  { key: "group", translationKey: "group", icon: UsersRound },
  { key: "host", translationKey: "host", icon: ListTodo },
  { key: "node", translationKey: "node", icon: Share2 },
  { key: "user", translationKey: "user", icon: Users },
  { key: "user_template", translationKey: "userTemplate", icon: LayoutTemplate }
];
const createDefaultChannelValues = () => channelTargets.reduce(
  (acc, target) => {
    acc[target.key] = {
      telegram_chat_id: void 0,
      telegram_topic_id: void 0,
      discord_webhook_url: ""
    };
    return acc;
  },
  {}
);
const populateChannelValues = (channels) => {
  const defaults = createDefaultChannelValues();
  channelTargets.forEach((target) => {
    const channel = channels?.[target.key];
    defaults[target.key] = {
      telegram_chat_id: channel?.telegram_chat_id ?? void 0,
      telegram_topic_id: channel?.telegram_topic_id ?? void 0,
      discord_webhook_url: channel?.discord_webhook_url ?? ""
    };
  });
  return defaults;
};
function NotificationSettings() {
  const { t } = useTranslation();
  const { settings, error, updateSettings, isSaving } = useSettingsContext();
  const form = useForm({
    resolver: a(notificationSettingsSchema),
    defaultValues: {
      notification_enable: {
        admin: { create: false, modify: false, delete: false, reset_usage: false, login: false },
        core: { create: false, modify: false, delete: false },
        group: { create: false, modify: false, delete: false },
        host: { create: false, modify: false, delete: false, modify_hosts: false },
        node: { create: false, modify: false, delete: false, connect: false, error: false },
        user: {
          create: false,
          modify: false,
          delete: false,
          status_change: false,
          reset_data_usage: false,
          data_reset_by_next: false,
          subscription_revoked: false
        },
        user_template: { create: false, modify: false, delete: false },
        days_left: false,
        percentage_reached: false
      },
      notification_settings: {
        notify_telegram: false,
        notify_discord: false,
        telegram_api_token: "",
        telegram_chat_id: void 0,
        telegram_topic_id: void 0,
        discord_webhook_url: "",
        proxy_url: "",
        max_retries: 3,
        channels: createDefaultChannelValues()
      }
    }
  });
  const [expandedPermissions, setExpandedPermissions] = reactExports.useState(/* @__PURE__ */ new Set());
  const watchTelegramEnabled = form.watch("notification_settings.notify_telegram");
  const watchDiscordEnabled = form.watch("notification_settings.notify_discord");
  const [activeChannelTab, setActiveChannelTab] = reactExports.useState(channelTargets[0].key);
  const [channelOverridesOpen, setChannelOverridesOpen] = reactExports.useState(false);
  const watchedEnableFields = form.watch("notification_enable");
  const toggleAllSubPermissions = (config, enabled) => {
    if (!config.subPermissions) return;
    const currentData = form.getValues(`notification_enable.${config.key}`) || {};
    const updates = {};
    config.subPermissions.forEach((sub) => {
      updates[sub.key] = enabled;
    });
    form.setValue(`notification_enable.${config.key}`, {
      ...currentData,
      ...updates
    });
  };
  reactExports.useEffect(() => {
    if (settings) {
      const enableData = settings.notification_enable || {};
      form.reset({
        notification_enable: {
          admin: enableData.admin || { create: false, modify: false, delete: false, reset_usage: false, login: false },
          core: enableData.core || { create: false, modify: false, delete: false },
          group: enableData.group || { create: false, modify: false, delete: false },
          host: enableData.host || { create: false, modify: false, delete: false, modify_hosts: false },
          node: enableData.node || { create: false, modify: false, delete: false, connect: false, error: false },
          user: enableData.user || {
            create: false,
            modify: false,
            delete: false,
            status_change: false,
            reset_data_usage: false,
            data_reset_by_next: false,
            subscription_revoked: false
          },
          user_template: enableData.user_template || { create: false, modify: false, delete: false },
          days_left: enableData.days_left ?? false,
          percentage_reached: enableData.percentage_reached ?? false
        },
        notification_settings: {
          notify_telegram: settings.notification_settings?.notify_telegram || false,
          notify_discord: settings.notification_settings?.notify_discord || false,
          telegram_api_token: settings.notification_settings?.telegram_api_token || "",
          telegram_chat_id: settings.notification_settings?.telegram_chat_id || void 0,
          telegram_topic_id: settings.notification_settings?.telegram_topic_id || void 0,
          discord_webhook_url: settings.notification_settings?.discord_webhook_url || "",
          proxy_url: settings.notification_settings?.proxy_url || "",
          max_retries: settings.notification_settings?.max_retries || 3,
          channels: populateChannelValues(settings.notification_settings?.channels)
        }
      });
    }
  }, [settings, form]);
  const onSubmit = (data) => {
    const telegramEnabled = Boolean(data.notification_settings?.notify_telegram);
    const discordEnabled = Boolean(data.notification_settings?.notify_discord);
    const channelPayload = channelTargets.reduce((acc, target) => {
      const channelData = data.notification_settings?.channels?.[target.key];
      const telegramChatId = telegramEnabled ? channelData?.telegram_chat_id ?? null : null;
      const telegramTopicId = telegramEnabled ? channelData?.telegram_topic_id ?? null : null;
      const rawWebhook = channelData?.discord_webhook_url ?? "";
      const trimmedWebhook = rawWebhook.trim();
      const discordWebhook = discordEnabled && trimmedWebhook !== "" ? trimmedWebhook : null;
      acc[target.key] = {
        telegram_chat_id: telegramChatId,
        telegram_topic_id: telegramTopicId,
        discord_webhook_url: discordWebhook
      };
      return acc;
    }, {});
    const filteredData = {
      notification_enable: data.notification_enable,
      notification_settings: {
        notify_telegram: telegramEnabled,
        notify_discord: discordEnabled,
        max_retries: data.notification_settings?.max_retries || 3,
        // Only include Telegram settings if Telegram is enabled
        ...telegramEnabled ? {
          telegram_api_token: data.notification_settings?.telegram_api_token || "",
          telegram_chat_id: data.notification_settings?.telegram_chat_id ?? null,
          telegram_topic_id: data.notification_settings?.telegram_topic_id ?? null
        } : {
          telegram_api_token: null,
          telegram_chat_id: null,
          telegram_topic_id: null
        },
        // Only include Discord settings if Discord is enabled
        ...discordEnabled ? {
          discord_webhook_url: data.notification_settings?.discord_webhook_url?.trim() || null
        } : { discord_webhook_url: null },
        // Only include proxy if either Telegram or Discord is enabled AND proxy URL is not empty. If both disabled, clear the proxy.
        ...telegramEnabled || discordEnabled ? data.notification_settings?.proxy_url && data.notification_settings.proxy_url.trim() !== "" ? { proxy_url: data.notification_settings.proxy_url.trim() } : {} : { proxy_url: null },
        channels: channelPayload
      }
    };
    updateSettings(filteredData);
  };
  const handleCancel = () => {
    if (settings) {
      const enableData = settings.notification_enable || {};
      form.reset({
        notification_enable: {
          admin: enableData.admin || { create: false, modify: false, delete: false, reset_usage: false, login: false },
          core: enableData.core || { create: false, modify: false, delete: false },
          group: enableData.group || { create: false, modify: false, delete: false },
          host: enableData.host || { create: false, modify: false, delete: false, modify_hosts: false },
          node: enableData.node || { create: false, modify: false, delete: false, connect: false, error: false },
          user: enableData.user || {
            create: false,
            modify: false,
            delete: false,
            status_change: false,
            reset_data_usage: false,
            data_reset_by_next: false,
            subscription_revoked: false
          },
          user_template: enableData.user_template || { create: false, modify: false, delete: false },
          days_left: enableData.days_left ?? false,
          percentage_reached: enableData.percentage_reached ?? false
        },
        notification_settings: {
          notify_telegram: settings.notification_settings?.notify_telegram || false,
          notify_discord: settings.notification_settings?.notify_discord || false,
          telegram_api_token: settings.notification_settings?.telegram_api_token || "",
          telegram_chat_id: settings.notification_settings?.telegram_chat_id || void 0,
          telegram_topic_id: settings.notification_settings?.telegram_topic_id || void 0,
          discord_webhook_url: settings.notification_settings?.discord_webhook_url || "",
          proxy_url: settings.notification_settings?.proxy_url || "",
          max_retries: settings.notification_settings?.max_retries || 3,
          channels: populateChannelValues(settings.notification_settings?.channels)
        }
      });
      toast.success(t("settings.notifications.cancelSuccess"));
    }
  };
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[400px] items-center justify-center p-4 sm:py-6 lg:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg text-red-500", children: "⚠️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: "Error loading settings" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6 p-4 sm:space-y-8 sm:py-6 lg:space-y-10 lg:py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold sm:text-lg", children: t("settings.notifications.filterTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: t("settings.notifications.filterDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-2", children: notificationConfigs.map((config) => {
        const permissionData = watchedEnableFields?.[config.key];
        const hasSubPermissions = config.subPermissions && config.subPermissions.length > 0;
        let enabledCount = 0;
        let anyEnabled = false;
        if (hasSubPermissions && permissionData && typeof permissionData === "object" && config.subPermissions) {
          enabledCount = config.subPermissions.filter((sub) => permissionData[sub.key]).length;
          anyEnabled = enabledCount > 0;
        }
        const totalCount = config.subPermissions?.length || 0;
        const isExpanded = expandedPermissions.has(config.key);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Collapsible,
          {
            open: isExpanded,
            onOpenChange: (open) => {
              const newSet = new Set(expandedPermissions);
              if (open) {
                newSet.add(config.key);
              } else {
                newSet.delete(config.key);
              }
              setExpandedPermissions(newSet);
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "group rounded-md border bg-card transition-all duration-200 ease-in-out",
                  isExpanded && "border-primary/50 bg-accent/30",
                  "hover:border-primary/30 hover:bg-accent/20"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: `notification_enable.${config.key}`,
                      render: () => {
                        const isMainEnabled = hasSubPermissions ? anyEnabled : typeof watchedEnableFields?.[config.key] === "boolean" ? watchedEnableFields[config.key] : false;
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(FormItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between px-3 py-2.5 transition-colors", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, disabled: !hasSubPermissions, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "flex min-w-0 flex-1 cursor-pointer items-center gap-2",
                              onClick: (e) => {
                                e.stopPropagation();
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(config.icon, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
                                hasSubPermissions && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    className: cn("shrink-0 rounded-sm p-1 text-muted-foreground transition-all duration-200 hover:text-foreground", isExpanded && "rotate-180"),
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      const newSet = new Set(expandedPermissions);
                                      if (isExpanded) {
                                        newSet.delete(config.key);
                                      } else {
                                        newSet.add(config.key);
                                      }
                                      setExpandedPermissions(newSet);
                                    },
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  FormLabel,
                                  {
                                    className: cn("flex-1 truncate text-sm font-medium sm:text-base", hasSubPermissions ? "cursor-pointer" : "cursor-pointer"),
                                    onClick: (e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      if (hasSubPermissions) {
                                        const newSet = new Set(expandedPermissions);
                                        if (isExpanded) {
                                          newSet.delete(config.key);
                                        } else {
                                          newSet.add(config.key);
                                        }
                                        setExpandedPermissions(newSet);
                                      } else {
                                        const newChecked = !isMainEnabled;
                                        form.setValue(`notification_enable.${config.key}`, newChecked);
                                      }
                                    },
                                    children: [
                                      t(`settings.notifications.types.${config.translationKey}`),
                                      hasSubPermissions && totalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mx-1.5 text-xs text-muted-foreground", children: [
                                        enabledCount,
                                        "/",
                                        totalCount
                                      ] })
                                    ]
                                  }
                                )
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Switch,
                            {
                              checked: isMainEnabled,
                              onCheckedChange: (checked) => {
                                if (hasSubPermissions) {
                                  toggleAllSubPermissions(config, checked);
                                } else {
                                  form.setValue(`notification_enable.${config.key}`, checked);
                                }
                              },
                              onClick: (e) => e.stopPropagation(),
                              className: "shrink-0"
                            }
                          ) })
                        ] }) });
                      }
                    }
                  ),
                  hasSubPermissions && /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { className: "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-200 ease-in-out", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 border-t bg-muted/30 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3", children: config.subPermissions?.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: `notification_enable.${config.key}.${sub.key}`,
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Checkbox,
                          {
                            checked: permissionData?.[sub.key] || false,
                            onCheckedChange: (checked) => {
                              field.onChange(checked);
                            },
                            className: "h-4 w-4"
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t(`settings.notifications.subPermissions.${sub.translationKey}`) })
                      ] })
                    },
                    sub.key
                  )) }) }) })
                ]
              }
            )
          },
          config.key
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold sm:text-lg", children: t("settings.notifications.telegram.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: t("settings.notifications.telegram.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "notification_settings.notify_telegram",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex shrink-0 items-center gap-2 space-y-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-xs font-medium sm:text-sm", children: t("settings.notifications.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value || false, onCheckedChange: field.onChange }) })
            ] })
          }
        )
      ] }),
      watchTelegramEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-md border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3.5 w-3.5" }),
            t("settings.notifications.telegram.apiToken")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "notification_settings.telegram_api_token",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { ...field, className: "h-9 font-mono text-xs sm:text-sm", placeholder: "1234567890:ABC-DEF1234ghIkl-zyx57W2v1u123ew11" }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" }),
              t("settings.notifications.telegram.chatId")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "notification_settings.telegram_chat_id",
                render: ({ field }) => {
                  const [inputValue, setInputValue] = reactExports.useState(field.value?.toString() ?? "");
                  reactExports.useEffect(() => {
                    setInputValue(field.value?.toString() ?? "");
                  }, [field.value]);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "text",
                      name: field.name,
                      ref: field.ref,
                      value: inputValue,
                      onChange: (e) => {
                        const value = e.target.value;
                        setInputValue(value);
                        if (value === "") {
                          field.onChange(void 0);
                        } else if (/^-?\d+$/.test(value)) {
                          field.onChange(parseInt(value));
                        }
                      },
                      onBlur: () => {
                        if (inputValue !== "" && !/^-?\d+$/.test(inputValue)) {
                          setInputValue(field.value?.toString() ?? "");
                        }
                        field.onBlur();
                      },
                      className: "h-9 text-xs sm:text-sm",
                      placeholder: "123456789"
                    }
                  ) });
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
              t("settings.notifications.telegram.topicId")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "notification_settings.telegram_topic_id",
                render: ({ field }) => {
                  const [inputValue, setInputValue] = reactExports.useState(field.value?.toString() ?? "");
                  reactExports.useEffect(() => {
                    setInputValue(field.value?.toString() ?? "");
                  }, [field.value]);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "text",
                      name: field.name,
                      ref: field.ref,
                      value: inputValue,
                      onChange: (e) => {
                        const value = e.target.value;
                        setInputValue(value);
                        if (value === "") {
                          field.onChange(void 0);
                        } else if (/^-?\d+$/.test(value)) {
                          field.onChange(parseInt(value));
                        }
                      },
                      onBlur: () => {
                        if (inputValue !== "" && !/^-?\d+$/.test(inputValue)) {
                          setInputValue(field.value?.toString() ?? "");
                        }
                        field.onBlur();
                      },
                      className: "h-9 text-xs sm:text-sm",
                      placeholder: "123"
                    }
                  ) });
                }
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, { open: channelOverridesOpen, onOpenChange: setChannelOverridesOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex cursor-pointer items-center justify-between rounded-md border bg-muted/50 p-2.5 transition-colors hover:bg-muted/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "cursor-pointer text-xs font-medium text-foreground hover:text-foreground sm:text-sm", children: t("settings.notifications.channels.title") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-4 w-4 text-muted-foreground transition-transform duration-200", channelOverridesOpen && "rotate-180") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { className: "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden px-1 transition-all duration-200 ease-in-out", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("settings.notifications.channels.description") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => setActiveChannelTab(value), value: activeChannelTab, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: channelTargets.map((target) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: target.key, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(target.icon, { className: "h-3.5 w-3.5" }),
                t(`settings.notifications.types.${target.translationKey}`)
              ] }) }, target.key)) })
            ] }) }),
            (() => {
              const target = channelTargets.find((target2) => target2.key === activeChannelTab);
              if (!target) return null;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-md border bg-card p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(target.icon, { className: "h-3.5 w-3.5" }),
                    t(`settings.notifications.types.${target.translationKey}`)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("settings.notifications.channels.hint") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" }),
                      t("settings.notifications.telegram.channelId")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: `notification_settings.channels.${activeChannelTab}.telegram_chat_id`,
                        render: ({ field }) => {
                          const [inputValue, setInputValue] = reactExports.useState(field.value?.toString() ?? "");
                          reactExports.useEffect(() => {
                            setInputValue(field.value?.toString() ?? "");
                          }, [field.value, activeChannelTab]);
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "text",
                              name: field.name,
                              ref: field.ref,
                              value: inputValue,
                              onChange: (e) => {
                                const value = e.target.value;
                                setInputValue(value);
                                if (value === "") {
                                  field.onChange(void 0);
                                } else if (/^-?\d+$/.test(value)) {
                                  field.onChange(parseInt(value));
                                }
                              },
                              onBlur: () => {
                                if (inputValue !== "" && !/^-?\d+$/.test(inputValue)) {
                                  setInputValue(field.value?.toString() ?? "");
                                }
                                field.onBlur();
                              },
                              className: "h-9 text-xs sm:text-sm",
                              placeholder: "-1001234567890"
                            }
                          ) });
                        }
                      },
                      `telegram_chat_id_${activeChannelTab}`
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
                      t("settings.notifications.telegram.topicId")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: `notification_settings.channels.${activeChannelTab}.telegram_topic_id`,
                        render: ({ field }) => {
                          const [inputValue, setInputValue] = reactExports.useState(field.value?.toString() ?? "");
                          reactExports.useEffect(() => {
                            setInputValue(field.value?.toString() ?? "");
                          }, [field.value, activeChannelTab]);
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "text",
                              name: field.name,
                              ref: field.ref,
                              value: inputValue,
                              onChange: (e) => {
                                const value = e.target.value;
                                setInputValue(value);
                                if (value === "") {
                                  field.onChange(void 0);
                                } else if (/^-?\d+$/.test(value)) {
                                  field.onChange(parseInt(value));
                                }
                              },
                              onBlur: () => {
                                if (inputValue !== "" && !/^-?\d+$/.test(inputValue)) {
                                  setInputValue(field.value?.toString() ?? "");
                                }
                                field.onBlur();
                              },
                              className: "h-9 text-xs sm:text-sm",
                              placeholder: "123"
                            }
                          ) });
                        }
                      },
                      `telegram_topic_id_${activeChannelTab}`
                    )
                  ] })
                ] })
              ] }, activeChannelTab);
            })()
          ] }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold sm:text-lg", children: t("settings.notifications.discord.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: t("settings.notifications.discord.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "notification_settings.notify_discord",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex shrink-0 items-center gap-2 space-y-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-xs font-medium sm:text-sm", children: t("settings.notifications.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value || false, onCheckedChange: field.onChange }) })
            ] })
          }
        )
      ] }),
      watchDiscordEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 rounded-md border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Webhook, { className: "h-3.5 w-3.5" }),
          t("settings.notifications.discord.webhookUrl")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "notification_settings.discord_webhook_url",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { ...field, className: "h-9 font-mono text-xs sm:text-sm", placeholder: "https://discord.com/api/webhooks/1234567890/ABC-DEF1234ghIkl-zyx57W2v1u123ew11" }) })
          }
        )
      ] })
    ] }),
    (watchTelegramEnabled || watchDiscordEnabled) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold sm:text-lg", children: t("settings.notifications.advanced.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:text-sm", children: t("settings.notifications.advanced.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 rounded-md border bg-card p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
              t("settings.notifications.advanced.proxyUrl")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "notification_settings.proxy_url",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field, className: "h-9 text-xs sm:text-sm", placeholder: "https://proxy.example.com:8080" }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 rounded-md border bg-card p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5 text-xs font-medium sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
              t("settings.notifications.advanced.maxRetries")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "notification_settings.max_retries",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: "1",
                    max: "10",
                    name: field.name,
                    ref: field.ref,
                    value: field.value ?? "",
                    onChange: (e) => {
                      const value = e.target.value;
                      if (value === "") {
                        field.onChange(3);
                      } else if (/^\d+$/.test(value)) {
                        field.onChange(parseInt(value));
                      }
                    },
                    onBlur: field.onBlur,
                    className: "h-9 text-xs sm:text-sm",
                    placeholder: "3"
                  }
                ) })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-3 sm:flex-row sm:justify-end sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: handleCancel, className: "w-full sm:w-auto", disabled: isSaving, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSaving, isLoading: isSaving, loadingText: t("saving"), className: "w-full sm:w-auto", children: t("save") })
    ] })
  ] }) }) });
}
export {
  NotificationSettings as default
};
//# sourceMappingURL=_dashboard.settings.notifications-C8F8y2Ou.js.map
