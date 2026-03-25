import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { B as Button } from "./button-BOH66nN-.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, f as FormDescription, e as FormMessage } from "./form-BMBIU5T8.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { D as DEFAULT_SHADOWSOCKS_METHOD } from "./Proxies-D_OfCEv5.js";
import { am as useReconnectAllNode, X as XTLSFlows, S as ShadowsocksMethods, L as LoaderCircle, t as toast, q as queryClient } from "./index-C_i3x-Gf.js";
import { a } from "./zod-JrdXrq0M.js";
import { u as useForm, o as objectType, s as stringType } from "./types-CANcSf0A.js";
import { useSettingsContext } from "./_dashboard.settings-B7r_UQvF.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { X } from "./x-C6aLLO-Y.js";
import { R as RefreshCcw } from "./refresh-ccw-Cv41gpGR.js";
import "./radix-3Azqn93X.js";
import "./label-D6GrbpFd.js";
import "./chevron-down-CYTM5oAI.js";
import "./check-ayw17ogi.js";
import "./react-query-DMC2nZO-.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
import "./page-header-C5rLxqcj.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./plus-H2QM6nQ9.js";
import "./settings-ByQKCi6u.js";
import "./webhook-BUHC6rmw.js";
import "./list-todo-AlqsRBAQ.js";
import "./database-Ym3sipoZ.js";
import "./palette-r4JKak9R.js";
const generalSettingsSchema = objectType({
  default_flow: stringType().default(""),
  default_method: stringType().default("")
});
function General() {
  const { t } = useTranslation();
  const { settings, isLoading, error, updateSettings, isSaving } = useSettingsContext();
  const [isReconnectAllDialogOpen, setIsReconnectAllDialogOpen] = reactExports.useState(false);
  const reconnectAllNodeMutation = useReconnectAllNode();
  const form = useForm({
    resolver: a(generalSettingsSchema),
    defaultValues: {
      default_flow: "",
      default_method: ""
    }
  });
  reactExports.useEffect(() => {
    form.reset({
      default_flow: settings?.general?.default_flow || "",
      default_method: settings?.general?.default_method || DEFAULT_SHADOWSOCKS_METHOD
    });
  }, [settings]);
  const onSubmit = async (data) => {
    try {
      const filteredData = {
        general: {
          ...data,
          default_flow: data.default_flow || void 0,
          default_method: data.default_method || DEFAULT_SHADOWSOCKS_METHOD
        }
      };
      await updateSettings(filteredData);
    } catch (error2) {
    }
  };
  const handleCancel = () => {
    if (settings?.general) {
      form.reset({
        default_flow: "",
        default_method: DEFAULT_SHADOWSOCKS_METHOD
      });
      toast.success(t("settings.general.cancelSuccess"));
    }
  };
  const handleReconnectAll = async () => {
    try {
      await reconnectAllNodeMutation.mutateAsync({
        params: {}
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("nodes.reconnectAllSuccess", {
          defaultValue: "All nodes have been reconnected successfully"
        })
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/nodes"]
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/nodes/simple"]
      });
      setIsReconnectAllDialogOpen(false);
    } catch (error2) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t("nodes.reconnectAllFailed", {
          defaultValue: "Failed to reconnect all nodes"
        })
      });
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
  const clearField = (field) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      form.setValue(field, "");
    };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[calc(100vh-200px)] w-full flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-1 flex-col p-4 sm:py-6 lg:py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 sm:mb-6 lg:mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          control: form.control,
          name: "default_flow",
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "relative space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: t("settings.general.defaultFlow.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: field.value, onValueChange: field.onChange, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              field.value && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "absolute right-8 top-6", onClick: clearField("default_flow"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.values(XTLSFlows).filter(Boolean).map((flow) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: flow, children: flow }, flow);
              }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.general.defaultFlow.description") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          control: form.control,
          name: "default_method",
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "flex items-center gap-2 text-sm font-medium", children: t("settings.general.defaultMethod.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: field.value, onValueChange: field.onChange, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.values(ShadowsocksMethods).filter(Boolean).map((flow) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: flow, children: flow }, flow);
              }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormDescription, { className: "text-sm text-muted-foreground", children: t("settings.general.defaultMethod.description") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 py-3 md:items-start md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium", children: t("nodes.title", { defaultValue: "Reconnect All Nodes" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("nodes.reconnectinfo", { defaultValue: "Refresh all nodes connections" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", size: "sm", type: "button", onClick: () => setIsReconnectAllDialogOpen(true), disabled: reconnectAllNodeMutation.isPending, className: "shrink-0 gap-2", children: reconnectAllNodeMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
        t("nodes.reconnectingAll", { defaultValue: "Reconnecting..." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" }),
        t("nodes.reconnectAll", { defaultValue: "Reconnect All Nodes" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isReconnectAllDialogOpen, onOpenChange: setIsReconnectAllDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("nodes.reconnectAll", { defaultValue: "Reconnect All Nodes" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: t("nodes.reconnectAllPrompt", {
          defaultValue: "Are you sure you want to reconnect all nodes? This will temporarily disconnect all active connections and may take a few moments to complete."
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: reconnectAllNodeMutation.isPending, children: t("cancel", { defaultValue: "Cancel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleReconnectAll, disabled: reconnectAllNodeMutation.isPending, className: "gap-2", children: reconnectAllNodeMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          t("nodes.reconnectingAll", { defaultValue: "Reconnecting..." })
        ] }) : t("nodes.reconnectAll", { defaultValue: "Reconnect All Nodes" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:shrink-0 sm:flex-row sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: handleCancel, className: "w-full min-w-[100px] sm:w-auto", disabled: isSaving, children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSaveDisabled, isLoading: isSaving, loadingText: t("saving"), className: "w-full min-w-[100px] sm:w-auto", children: t("save") })
      ] })
    ] })
  ] }) }) });
}
export {
  General as default
};
//# sourceMappingURL=_dashboard.settings.general-Bx-02pnO.js.map
