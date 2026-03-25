import { f as createLucideIcon, a as useDirDetection, y as useCreateAdmin, w as useModifyAdmin, c as cn, t as toast, q as queryClient } from "./index-C_i3x-Gf.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { B as Button } from "./button-BOH66nN-.js";
import { P as PasswordInput } from "./password-input-RJqY0JKY.js";
import { u as useDynamicErrorHandler } from "./use-dynamic-errors-C0Fignr8.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { V as VariablesPopover } from "./variables-popover-YfVYY7Ed.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { C as Collapsible, a as CollapsibleTrigger, b as CollapsibleContent } from "./collapsible-DpL07KM4.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { U as UserCog } from "./user-cog-DuWOXNmv.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { o as objectType, b as booleanType, n as numberType, s as stringType, Z as ZodIssueCode } from "./types-CANcSf0A.js";
const UserCheck = createLucideIcon("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
]);
function AdminModal({ isDialogOpen, onOpenChange, editingAdminUserName, editingAdmin, form }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const handleError = useDynamicErrorHandler();
  const addAdminMutation = useCreateAdmin();
  const modifyAdminMutation = useModifyAdmin();
  reactExports.useEffect(() => {
    if (!isDialogOpen) setNotificationExpanded(false);
  }, [isDialogOpen]);
  const [notificationExpanded, setNotificationExpanded] = reactExports.useState(false);
  const watchedNotificationEnable = form.watch("notification_enable");
  const handleClose = (open) => {
    if (!open) {
      form.reset();
    }
    onOpenChange(open);
  };
  const onSubmit = async (values) => {
    try {
      const editData = {
        is_sudo: values.is_sudo ?? false,
        password: values.password || void 0,
        is_disabled: values.is_disabled,
        discord_webhook: values.discord_webhook,
        sub_domain: values.sub_domain,
        sub_template: values.sub_template,
        support_url: values.support_url,
        telegram_id: values.telegram_id,
        profile_title: values.profile_title,
        discord_id: values.discord_id,
        notification_enable: values.notification_enable || null
      };
      if (editingAdmin && editingAdminUserName) {
        await modifyAdminMutation.mutateAsync({
          username: editingAdminUserName,
          data: editData
        });
        toast.success(
          t("admins.editSuccess", {
            name: values.username,
            defaultValue: "Admin «{{name}}» has been updated successfully"
          })
        );
      } else {
        if (!values.password) return;
        const createData = {
          ...values,
          is_sudo: values.is_sudo ?? false,
          password: values.password
          // Ensure password is present
        };
        await addAdminMutation.mutateAsync({
          data: createData
        });
        toast.success(
          t("admins.createSuccess", {
            name: values.username,
            defaultValue: "Admin «{{name}}» has been created successfully"
          })
        );
      }
      queryClient.invalidateQueries({ queryKey: ["/api/admins"] });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      const fields = ["username", "password", "passwordConfirm", "is_sudo", "is_disabled", "discord_webhook", "sub_domain", "sub_template", "support_url", "telegram_id", "profile_title", "discord_id"];
      handleError({ error, fields, form, contextKey: "admins" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "h-full max-w-[750px] sm:h-auto", onOpenAutoFocus: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: `${dir === "rtl" ? "text-right" : "text-left"}`, dir, children: editingAdmin ? t("admins.editAdmin") : t("admins.createAdmin") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mr-4 max-h-[80dvh] overflow-y-auto px-2 pr-4 sm:max-h-[75dvh]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-stretch gap-4 pb-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "username",
              render: ({ field }) => {
                const hasError = !!form.formState.errors.username;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.username") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("admins.enterUsername"), disabled: editingAdmin, isError: hasError, ...field }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "password",
              render: ({ field }) => {
                const hasError = !!form.formState.errors.password;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.password") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { placeholder: t("admins.enterPassword"), isError: hasError, ...field }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "passwordConfirm",
              render: ({ field }) => {
                const hasError = !!form.formState.errors.passwordConfirm;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.passwordConfirm") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { placeholder: t("admins.enterPasswordConfirm"), isError: hasError, ...field }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "telegram_id",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.telegramId") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    placeholder: t("Telegram ID (e.g. 36548974)"),
                    onChange: (e) => {
                      const value = e.target.value;
                      field.onChange(value ? parseInt(value) : 0);
                    },
                    value: field.value ? field.value : ""
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "discord_id",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.discordId") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    placeholder: t("admins.discordId"),
                    onChange: (e) => {
                      const value = e.target.value;
                      field.onChange(value ? parseInt(value) : 0);
                    },
                    value: field.value ? field.value : ""
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "discord_webhook",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.discord") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("admins.discord"), ...field }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "support_url",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.supportUrl") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("admins.supportUrl"), ...field }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "profile_title",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex h-full flex-col justify-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.profile") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(VariablesPopover, {})
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("admins.profile"), ...field }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "sub_domain",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.subDomain") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("admins.subDomain"), ...field }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "sub_template",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("admins.subTemplate") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("admins.subTemplate"), ...field }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, { open: notificationExpanded, onOpenChange: setNotificationExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "group rounded-md border transition-all duration-200 ease-in-out",
                notificationExpanded && "border-primary/50 bg-accent/30",
                "hover:border-primary/30 hover:bg-accent/20"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between p-4 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex min-w-0 flex-1 cursor-pointer items-center gap-2",
                      onClick: (e) => {
                        e.stopPropagation();
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: cn("shrink-0 rounded-sm p-1 text-muted-foreground transition-all duration-200 hover:text-foreground", notificationExpanded && "rotate-180"),
                            onClick: (e) => {
                              e.stopPropagation();
                              setNotificationExpanded(!notificationExpanded);
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          FormLabel,
                          {
                            className: "flex-1 cursor-pointer truncate text-sm font-medium sm:text-base",
                            onClick: (e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setNotificationExpanded(!notificationExpanded);
                            },
                            children: [
                              t("settings.notifications.filterTitle"),
                              (() => {
                                const enabledCount = watchedNotificationEnable ? Object.values(watchedNotificationEnable).filter(Boolean).length : 0;
                                const totalCount = 7;
                                return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mx-1.5 text-xs text-muted-foreground", children: [
                                  enabledCount,
                                  "/",
                                  totalCount
                                ] });
                              })()
                            ]
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: watchedNotificationEnable ? Object.values(watchedNotificationEnable).some(Boolean) : false,
                      onCheckedChange: (checked) => {
                        form.setValue("notification_enable", {
                          create: checked,
                          modify: checked,
                          delete: checked,
                          status_change: checked,
                          reset_data_usage: checked,
                          data_reset_by_next: checked,
                          subscription_revoked: checked
                        });
                      },
                      onClick: (e) => e.stopPropagation(),
                      className: "shrink-0"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { className: "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-200 ease-in-out", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 border-t bg-muted/30 px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "notification_enable.create",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t("settings.notifications.subPermissions.create") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "notification_enable.modify",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t("settings.notifications.subPermissions.modify") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "notification_enable.delete",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t("settings.notifications.subPermissions.delete") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "notification_enable.status_change",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t("settings.notifications.subPermissions.statusChange") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "notification_enable.reset_data_usage",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t("settings.notifications.subPermissions.resetDataUsage") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "notification_enable.data_reset_by_next",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t("settings.notifications.subPermissions.dataResetByNext") })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "notification_enable.subscription_revoked",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex items-center gap-x-2 space-y-0 rounded-sm px-2 py-1.5 transition-colors hover:bg-background/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "h-4 w-4" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "cursor-pointer text-xs font-normal leading-none", children: t("settings.notifications.subPermissions.subscriptionRevoked") })
                      ] })
                    }
                  )
                ] }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "is_sudo",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex w-full cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("admins.sudo") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderButton, { type: "submit", isLoading: addAdminMutation.isPending || modifyAdminMutation.isPending, loadingText: editingAdmin ? t("modifying") : t("creating"), children: editingAdmin ? t("modify") : t("create") })
      ] })
    ] }) })
  ] }) });
}
const passwordValidation = stringType().refine(
  (value) => {
    if (!value) return false;
    if (value.length < 12) {
      return false;
    }
    if ((value.match(/\d/g) || []).length < 2) {
      return false;
    }
    if ((value.match(/[A-Z]/g) || []).length < 2) {
      return false;
    }
    if ((value.match(/[a-z]/g) || []).length < 2) {
      return false;
    }
    return /[!@#$%^&*()\-_=+\[\]{}|;:,.<>?/~`]/.test(value);
  },
  (value) => {
    if (!value) {
      return { message: "Password is required" };
    }
    if (value.length < 12) {
      return { message: "Password must be at least 12 characters long" };
    }
    if ((value.match(/\d/g) || []).length < 2) {
      return { message: "Password must contain at least 2 digits" };
    }
    if ((value.match(/[A-Z]/g) || []).length < 2) {
      return { message: "Password must contain at least 2 uppercase letters" };
    }
    if ((value.match(/[a-z]/g) || []).length < 2) {
      return { message: "Password must contain at least 2 lowercase letters" };
    }
    if (!/[!@#$%^&*()\-_=+\[\]{}|;:,.<>?/~`]/.test(value)) {
      return { message: "Password must contain at least one special character" };
    }
    return { message: "Invalid password" };
  }
);
const adminFormSchema = objectType({
  username: stringType().min(1, "Username is required"),
  password: stringType().optional(),
  passwordConfirm: stringType().optional(),
  is_sudo: booleanType().default(false),
  is_disabled: booleanType().optional(),
  discord_webhook: stringType().optional(),
  sub_domain: stringType().optional(),
  sub_template: stringType().optional(),
  support_url: stringType().optional(),
  telegram_id: numberType().optional(),
  profile_title: stringType().optional(),
  discord_id: numberType().optional(),
  notification_enable: objectType({
    create: booleanType().optional(),
    modify: booleanType().optional(),
    delete: booleanType().optional(),
    status_change: booleanType().optional(),
    reset_data_usage: booleanType().optional(),
    data_reset_by_next: booleanType().optional(),
    subscription_revoked: booleanType().optional()
  }).optional()
}).superRefine((data, ctx) => {
  if (data.password || !data.username) {
    if (!data.password) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Password is required",
        path: ["password"]
      });
      return;
    }
    const passwordResult = passwordValidation.safeParse(data.password);
    if (!passwordResult.success) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: passwordResult.error.errors[0].message,
        path: ["password"]
      });
      return;
    }
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["passwordConfirm"]
      });
    }
  }
});
const adminFormDefaultValues = {
  username: "",
  is_sudo: false,
  password: "",
  passwordConfirm: "",
  is_disabled: false,
  discord_webhook: "",
  sub_domain: "",
  sub_template: "",
  support_url: "",
  telegram_id: void 0,
  profile_title: "",
  discord_id: void 0,
  notification_enable: {
    create: true,
    modify: true,
    delete: true,
    status_change: true,
    reset_data_usage: true,
    data_reset_by_next: true,
    subscription_revoked: true
  }
};
export {
  AdminModal as A,
  UserCheck as U,
  adminFormDefaultValues as a,
  adminFormSchema as b
};
//# sourceMappingURL=admin-form-G_2D6FmG.js.map
