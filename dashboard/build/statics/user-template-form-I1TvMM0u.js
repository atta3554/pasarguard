import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { G as GroupsSelector } from "./groups-selector-BUQVzB_u.js";
import { B as Button } from "./button-BOH66nN-.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { a as useDirDetection, aB as useCreateUserTemplate, aA as useModifyUserTemplate, c as cn, aC as UserStatusCreate, ad as DataLimitResetStrategy, S as ShadowsocksMethods, X as XTLSFlows, t as toast, q as queryClient, aD as getGetUserTemplatesQueryKey, aE as getGetUserTemplatesSimpleQueryKey } from "./index-C_i3x-Gf.js";
import { u as useDynamicErrorHandler } from "./use-dynamic-errors-C0Fignr8.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { o as objectType, b as booleanType, e as enumType, a as arrayType, n as numberType, s as stringType } from "./types-CANcSf0A.js";
function UserTemplateModal({ isDialogOpen, onOpenChange, form, editingUserTemplate, editingUserTemplateId }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const addUserTemplateMutation = useCreateUserTemplate();
  const handleError = useDynamicErrorHandler();
  const modifyUserTemplateMutation = useModifyUserTemplate();
  const [timeType, setTimeType] = reactExports.useState("seconds");
  const [loading, setLoading] = reactExports.useState(false);
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const status = values.status ?? UserStatusCreate.active;
      const submitData = {
        name: values.name,
        data_limit: values.data_limit,
        expire_duration: values.expire_duration,
        username_prefix: values.username_prefix || "",
        username_suffix: values.username_suffix || "",
        group_ids: values.groups,
        // map groups to group_ids
        status,
        on_hold_timeout: status === UserStatusCreate.on_hold ? values.on_hold_timeout : void 0,
        data_limit_reset_strategy: values.data_limit ? values.data_limit_reset_strategy : void 0,
        reset_usages: values.reset_usages,
        extra_settings: values.method || values.flow ? {
          method: values.method,
          flow: values.flow
        } : void 0
      };
      if (editingUserTemplate && editingUserTemplateId) {
        await modifyUserTemplateMutation.mutateAsync({
          templateId: editingUserTemplateId,
          data: submitData
        });
        toast.success(
          t("templates.editSuccess", {
            name: values.name,
            defaultValue: "User Templates «{name}» has been updated successfully"
          })
        );
      } else {
        await addUserTemplateMutation.mutateAsync({
          data: submitData
        });
        toast.success(
          t("templates.createSuccess", {
            name: values.name,
            defaultValue: "User Templates «{name}» has been created successfully"
          })
        );
      }
      queryClient.invalidateQueries({ queryKey: getGetUserTemplatesQueryKey() });
      queryClient.invalidateQueries({ queryKey: getGetUserTemplatesSimpleQueryKey() });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      const fields = [
        "name",
        "data_limit",
        "expire_duration",
        "username_prefix",
        "username_suffix",
        "groups",
        "status",
        "on_hold_timeout",
        "data_limit_reset_strategy",
        "method",
        "flow",
        "reset_usages"
      ];
      handleError({ error, fields, form, contextKey: "groups" });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "h-full max-w-[1000px] sm:h-auto", onOpenAutoFocus: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn("text-start text-xl font-semibold", dir === "rtl" && "sm:text-right"), children: editingUserTemplate ? t("editUserTemplateModal.title") : t("userTemplateModal.title") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mr-4 flex max-h-[76dvh] flex-col items-start gap-4 overflow-y-auto px-2 pb-6 pr-4 sm:max-h-[75dvh] sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex-1 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-row gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.name") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("templates.name"), isError: !!form.formState.errors.name, ...field, className: "min-w-40 sm:w-72" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "status",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.status") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("status.active", { defaultValue: "Active" }) }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: UserStatusCreate.active, children: t("status.active") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: UserStatusCreate.on_hold, children: t("status.on_hold") })
                    ] })
                  ] })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "username_prefix",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.prefix") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: t("templates.prefix"), ...field, onChange: (e) => field.onChange(e.target.value) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "username_suffix",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.suffix") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: t("templates.suffix"), ...field, onChange: (e) => field.onChange(e.target.value) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "data_limit",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.dataLimit") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      placeholder: t("templates.dataLimit"),
                      ...field,
                      onChange: (e) => {
                        const value = parseInt(e.target.value);
                        field.onChange(value ? value * 1024 * 1024 * 1024 : 0);
                      },
                      value: field.value ? Math.round(field.value / (1024 * 1024 * 1024)) : "",
                      className: "pr-10",
                      min: "0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground", children: t("userDialog.gb", { defaultValue: "GB" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "data_limit_reset_strategy",
              render: ({ field }) => {
                const datalimit = form.watch("data_limit");
                if (!datalimit) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
                }
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.userDataLimitStrategy") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.resetStrategyNo", { defaultValue: "No" }) }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy["no_reset"], children: t("userDialog.resetStrategyNo") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy["day"], children: t("userDialog.resetStrategyDaily") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy["week"], children: t("userDialog.resetStrategyWeekly") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy["month"], children: t("userDialog.resetStrategyMonthly") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy["year"], children: t("userDialog.resetStrategyAnnually") })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "reset_usages",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("templates.resetUsages", {
                  defaultValue: "Reset Usages"
                }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "expire_duration",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.expire") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      placeholder: t("templates.expire"),
                      ...field,
                      onChange: (e) => {
                        const value = parseInt(e.target.value);
                        field.onChange(value ? value * 24 * 60 * 60 : 0);
                      },
                      value: field.value ? Math.round(field.value / (24 * 60 * 60)) : "",
                      className: "pr-14",
                      min: "0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground", children: t("time.days", { defaultValue: "Days" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "on_hold_timeout",
              render: ({ field }) => {
                const convertToDisplayValue = (value) => {
                  if (!value) return "";
                  switch (timeType) {
                    case "seconds":
                      return value;
                    case "hours":
                      return Math.round(value / 60 / 60);
                    case "days":
                      return Math.round(value / 60 / 60 / 24);
                    default:
                      return value;
                  }
                };
                const convertToSeconds = (inputValue, type) => {
                  const numValue = parseInt(inputValue);
                  if (isNaN(numValue)) return void 0;
                  switch (type) {
                    case "seconds":
                      return numValue;
                    case "hours":
                      return numValue * 60 * 60;
                    case "days":
                      return numValue * 24 * 60 * 60;
                    default:
                      return numValue;
                  }
                };
                const status = form.watch("status");
                if (status !== UserStatusCreate.on_hold) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
                }
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.onHoldTimeout") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row overflow-hidden rounded-md border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-[3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        placeholder: t("templates.onHoldTimeout"),
                        value: convertToDisplayValue(field.value),
                        onChange: (e) => {
                          const secondsValue = convertToSeconds(e.target.value, timeType);
                          field.onChange(secondsValue);
                        },
                        className: "flex-[3] rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-[2]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: timeType, onValueChange: (v) => setTimeType(v), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full rounded-none border-0 focus:ring-0 focus:ring-offset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("time.seconds", { defaultValue: "Seconds" }) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "days", children: t("time.days", { defaultValue: "Days" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hours", children: t("time.hours", { defaultValue: "Hours" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "seconds", children: t("time.seconds", { defaultValue: "Seconds" }) })
                      ] })
                    ] }) })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] });
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex-1 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "method",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.method") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.proxySettings.method", { defaultValue: "Select Method" }) }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ShadowsocksMethods["aes-128-gcm"], children: "aes-128-gcm" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ShadowsocksMethods["aes-256-gcm"], children: "aes-256-gcm" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ShadowsocksMethods["chacha20-ietf-poly1305"], children: "chacha20-ietf-poly1305" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ShadowsocksMethods["xchacha20-poly1305"], children: "xchacha20-poly1305" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "flow",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("templates.flow") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "null" ? void 0 : value), value: field.value ?? "null", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.proxySettings.flow", { defaultValue: "Flow" }) }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "null", children: t("userDialog.proxySettings.flow.none", { defaultValue: "None" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: XTLSFlows["xtls-rprx-vision"], children: "xtls-rprx-vision" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "groups", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(GroupsSelector, { control: form.control, name: "groups", onGroupsChange: field.onChange }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderButton, { type: "submit", isLoading: loading, loadingText: editingUserTemplate ? t("modifying") : t("creating"), children: editingUserTemplate ? t("save") : t("create") })
      ] })
    ] }) })
  ] }) });
}
const userTemplateFormSchema = objectType({
  name: stringType().min(1, "Name is required"),
  status: enumType([UserStatusCreate.active, UserStatusCreate.on_hold]).default(UserStatusCreate.active),
  username_prefix: stringType().optional(),
  username_suffix: stringType().optional(),
  data_limit: numberType().min(0).optional(),
  expire_duration: numberType().min(0).optional(),
  on_hold_timeout: numberType().optional(),
  method: enumType([ShadowsocksMethods["aes-128-gcm"], ShadowsocksMethods["aes-256-gcm"], ShadowsocksMethods["chacha20-ietf-poly1305"], ShadowsocksMethods["xchacha20-poly1305"]]).default(ShadowsocksMethods["chacha20-ietf-poly1305"]),
  flow: enumType([XTLSFlows[""], XTLSFlows["xtls-rprx-vision"]]).default(XTLSFlows[""]),
  groups: arrayType(numberType()).min(1, "Groups is required"),
  data_limit_reset_strategy: enumType([
    DataLimitResetStrategy["month"],
    DataLimitResetStrategy["day"],
    DataLimitResetStrategy["week"],
    DataLimitResetStrategy["no_reset"],
    DataLimitResetStrategy["week"],
    DataLimitResetStrategy["year"]
  ]).optional(),
  reset_usages: booleanType().optional()
});
const userTemplateFormDefaultValues = {
  name: "",
  status: UserStatusCreate.active,
  username_prefix: "",
  username_suffix: "",
  data_limit: 0,
  expire_duration: 0,
  method: ShadowsocksMethods["chacha20-ietf-poly1305"],
  flow: XTLSFlows[""],
  on_hold_timeout: 0,
  groups: [],
  reset_usages: false
};
export {
  UserTemplateModal as U,
  userTemplateFormSchema as a,
  userTemplateFormDefaultValues as u
};
//# sourceMappingURL=user-template-form-I1TvMM0u.js.map
