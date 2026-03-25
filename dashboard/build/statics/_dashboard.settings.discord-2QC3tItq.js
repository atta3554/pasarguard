import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { u as useForm, o as objectType, s as stringType, l as literalType, b as booleanType } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { B as Button } from "./button-BOH66nN-.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, f as FormDescription, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { P as PasswordInput } from "./password-input-RJqY0JKY.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { useSettingsContext } from "./_dashboard.settings-B7r_UQvF.js";
import { t as toast } from "./index-C_i3x-Gf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { M as MessageCircle } from "./webhook-BUHC6rmw.js";
import { B as Bot } from "./bot-Cci_G9u1.js";
import { G as Globe } from "./globe-DSaKc6yy.js";
import "./radix-3Azqn93X.js";
import "./label-D6GrbpFd.js";
import "./eye-BsrIbFi5.js";
import "./page-header-C5rLxqcj.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./react-router-C8FEAJQh.js";
import "./plus-H2QM6nQ9.js";
import "./react-query-DMC2nZO-.js";
import "./settings-ByQKCi6u.js";
import "./list-todo-AlqsRBAQ.js";
import "./database-Ym3sipoZ.js";
import "./palette-r4JKak9R.js";
import "./recharts-B0278qLa.js";
const discordSettingsSchema = objectType({
  enable: booleanType().default(false),
  token: stringType().optional(),
  proxy_url: stringType().url("Please enter a valid URL").optional().or(literalType(""))
});
function DiscordSettings() {
  const { t } = useTranslation();
  const { settings, isLoading, error, updateSettings, isSaving } = useSettingsContext();
  const form = useForm({
    resolver: a(discordSettingsSchema),
    defaultValues: {
      enable: false,
      token: "",
      proxy_url: ""
    }
  });
  const enableDiscord = form.watch("enable");
  reactExports.useEffect(() => {
    if (settings?.discord) {
      const discordData = settings.discord;
      form.reset({
        enable: discordData.enable || false,
        token: discordData.token || "",
        proxy_url: discordData.proxy_url || ""
      });
    }
  }, [settings, form]);
  const onSubmit = async (data) => {
    try {
      const filteredData = {
        discord: {
          ...data,
          enable: data.enable ?? false,
          // Convert empty strings to undefined
          token: data.token?.trim() || void 0,
          proxy_url: data.proxy_url?.trim() || void 0
        }
      };
      await updateSettings(filteredData);
    } catch (error2) {
    }
  };
  const handleCancel = () => {
    if (settings?.discord) {
      const discordData = settings.discord;
      form.reset({
        enable: discordData.enable || false,
        token: discordData.token || "",
        proxy_url: discordData.proxy_url || ""
      });
      toast.success(t("settings.discord.cancelSuccess"));
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-6 sm:space-y-8 lg:space-y-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: t("settings.discord.general.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("settings.discord.general.description") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          control: form.control,
          name: "enable",
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center justify-between gap-x-2 space-y-0 rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 sm:p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex cursor-pointer items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                t("settings.discord.general.enable")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.discord.general.enableDescription") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
          ] })
        }
      ),
      enableDiscord && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "token",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4" }),
                t("settings.discord.general.token")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { placeholder: t("settings.discord.general.tokenPlaceholder"), ...field, className: "font-mono" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.discord.general.tokenDescription") }),
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
                t("settings.discord.general.proxyUrl")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", placeholder: t("settings.discord.general.proxyUrlPlaceholder"), ...field, className: "font-mono" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.discord.general.proxyUrlDescription") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        )
      ] })
    ] }) }),
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
  DiscordSettings as default
};
//# sourceMappingURL=_dashboard.settings.discord-2QC3tItq.js.map
