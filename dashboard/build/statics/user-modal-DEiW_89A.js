import { r as reactExports, b as React, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { D as DatePicker } from "./date-picker-R6TlQCrv.js";
import { G as GroupsSelector } from "./groups-selector-BUQVzB_u.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-CvI_xa9s.js";
import { B as Button } from "./button-BOH66nN-.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { T as Textarea } from "./textarea-DCwXPG8n.js";
import { f as createLucideIcon, a as useDirDetection, aR as useGetUserTemplatesSimple, B as useGetGroupsSimple, aS as useCreateUser, aT as useModifyUser, aU as useCreateUserFromTemplate, aV as useModifyUserWithTemplate, t as toast, aJ as dateUtils, aW as parseDateInput, aX as toDisplayDate, aY as toUnixSeconds, at as formatOffsetDateTime, aP as useRelativeExpiryDate, c as cn, aZ as getGeneralSettings, a_ as getGetGeneralSettingsQueryKey } from "./index-C_i3x-Gf.js";
import { u as useDynamicErrorHandler } from "./use-dynamic-errors-C0Fignr8.js";
import { D as DEFAULT_SHADOWSOCKS_METHOD } from "./Proxies-D_OfCEv5.js";
import { o as objectType, n as numberType, d as unionType, s as stringType, g as nullType, Z as ZodIssueCode, a as arrayType, b as booleanType, e as enumType } from "./types-CANcSf0A.js";
import { g as gbToBytes, f as formatBytes } from "./formatByte-CB667FGk.js";
import { c as useQueryClient, u as useQuery } from "./react-query-DMC2nZO-.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { R as RefreshCcw } from "./refresh-ccw-Cv41gpGR.js";
import { L as Lock } from "./lock-D6SFqMLT.js";
import { v as v4 } from "./v4-CDEC0ny7.js";
import { U as Users } from "./users-CleGz3MO.js";
import { L as Layers } from "./layers-B6eG1SDv.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
const ListStart = createLucideIcon("ListStart", [
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M10 6H3", key: "lf8lx7" }],
  ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5", key: "1hghli" }],
  ["path", { d: "m16 8-2-2 2-2", key: "160uvd" }]
]);
enumType(["active", "disabled", "limited", "expired", "on_hold"]);
const userDataLimitResetStrategyEnum = enumType(["no_reset", "day", "week", "month", "year"]);
const xtlsFlowsEnum = enumType(["", "xtls-rprx-vision"]);
const shadowsocksMethodsEnum = enumType(["aes-128-gcm", "aes-256-gcm", "chacha20-ietf-poly1305", "xchacha20-poly1305"]);
const vMessSettingsSchema = objectType({
  id: stringType().uuid().optional()
});
const vlessSettingsSchema = objectType({
  id: stringType().uuid().optional(),
  flow: xtlsFlowsEnum.optional()
});
const trojanSettingsSchema = objectType({
  password: stringType().min(2).max(32).optional()
});
const shadowsocksSettingsSchema = objectType({
  password: stringType().min(2).max(32).optional(),
  method: shadowsocksMethodsEnum.optional()
});
const proxyTableInputSchema = objectType({
  vmess: vMessSettingsSchema.optional(),
  vless: vlessSettingsSchema.optional(),
  trojan: trojanSettingsSchema.optional(),
  shadowsocks: shadowsocksSettingsSchema.optional()
});
const userStatusCreateEnum = enumType(["active", "on_hold"]);
const userStatusEditEnum = enumType(["active", "on_hold", "disabled"]);
const nextPlanModelSchema = objectType({
  user_template_id: numberType().optional(),
  data_limit: numberType().min(0).optional(),
  expire: numberType().min(0).optional(),
  add_remaining_traffic: booleanType().optional()
});
const userCreateSchema = objectType({
  username: stringType().min(3, "validation.minLength").max(32, "validation.maxLength"),
  status: userStatusCreateEnum.optional(),
  group_ids: arrayType(numberType()).min(1, { message: "validation.required" }),
  data_limit: numberType().min(0),
  expire: unionType([stringType(), numberType(), nullType()]).optional(),
  note: stringType().optional(),
  proxy_settings: proxyTableInputSchema.optional(),
  data_limit_reset_strategy: userDataLimitResetStrategyEnum.optional(),
  on_hold_expire_duration: numberType().nullable().optional().superRefine((val, ctx) => {
    const status = ctx.path.length > 0 ? ctx.path[0] : "status";
    if (status === "on_hold" && (!val || val < 1)) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "validation.required"
      });
    }
  }),
  on_hold_timeout: unionType([stringType(), numberType(), nullType()]).optional(),
  auto_delete_in_days: numberType().optional(),
  next_plan: nextPlanModelSchema.optional(),
  template_id: numberType().optional()
});
const userEditSchema = objectType({
  username: stringType().min(3, "validation.minLength").max(32, "validation.maxLength"),
  status: userStatusEditEnum.optional(),
  group_ids: arrayType(numberType()).min(1, { message: "validation.required" }),
  data_limit: numberType().min(0),
  expire: unionType([stringType(), numberType(), nullType()]).optional(),
  note: stringType().optional(),
  proxy_settings: proxyTableInputSchema.optional(),
  data_limit_reset_strategy: userDataLimitResetStrategyEnum.optional(),
  on_hold_expire_duration: numberType().nullable().optional().superRefine((val, ctx) => {
    const status = ctx.path.length > 0 ? ctx.path[0] : "status";
    if (status === "on_hold" && (!val || val < 1)) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: "validation.required"
      });
    }
  }),
  on_hold_timeout: unionType([stringType(), numberType(), nullType()]).optional(),
  auto_delete_in_days: numberType().optional(),
  next_plan: nextPlanModelSchema.optional(),
  template_id: numberType().optional()
});
const getDefaultUserForm = async () => {
  return {
    username: "",
    status: "active",
    data_limit: 0,
    expire: "",
    note: "",
    group_ids: [],
    proxy_settings: {
      vmess: {
        id: void 0
      },
      vless: {
        id: void 0,
        flow: ""
      },
      trojan: {
        password: void 0
      },
      shadowsocks: {
        password: void 0,
        method: DEFAULT_SHADOWSOCKS_METHOD
      }
    }
  };
};
const isDate = (v) => typeof v === "object" && v !== null && v instanceof Date;
const templateUserSchema = objectType({
  username: stringType().min(3, "validation.minLength").max(32, "validation.maxLength"),
  note: stringType().optional()
});
const templateModifySchema = objectType({
  note: stringType().optional(),
  user_template_id: numberType()
});
const ExpiryDateField = ({
  field,
  displayDate,
  calendarOpen,
  setCalendarOpen,
  handleFieldChange,
  label,
  useUtcTimestamp = false,
  fieldName = "expire"
}) => {
  const { t } = useTranslation();
  const expireInfo = useRelativeExpiryDate(displayDate ? Math.floor(displayDate.getTime() / 1e3) : null);
  const dir = useDirDetection();
  const handleDateChange = React.useCallback(
    (date) => {
      if (date) {
        const value = useUtcTimestamp ? toUnixSeconds(date) : formatOffsetDateTime(date);
        field.onChange(value);
        handleFieldChange(fieldName, value);
      } else {
        field.onChange("");
        handleFieldChange(fieldName, void 0);
      }
    },
    [field, handleFieldChange, useUtcTimestamp, fieldName]
  );
  const handleShortcut = React.useCallback(
    (days) => {
      const baseDate = displayDate || /* @__PURE__ */ new Date();
      const targetDate = new Date(baseDate);
      targetDate.setDate(baseDate.getDate() + days);
      handleDateChange(targetDate);
    },
    [handleDateChange, displayDate]
  );
  const now = React.useMemo(() => {
    const today = /* @__PURE__ */ new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }, []);
  const maxDate = React.useMemo(() => {
    return new Date(now.getFullYear() + 15, 11, 31);
  }, [now]);
  const shortcuts = [
    { label: "+7d", days: 7 },
    { label: "+1m", days: 30 },
    { label: "+2m", days: 60 },
    { label: "+3m", days: 90 },
    { label: "+6m", days: 180 },
    { label: "+1y", days: 365 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "mb-0.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 lg:!mt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir: "ltr", className: "flex flex-wrap items-center gap-1 lg:hidden", children: shortcuts.map(({ label: label2, days }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          className: "h-7 px-2.5 text-xs text-muted-foreground hover:text-foreground",
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleShortcut(days);
          },
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DatePicker,
          {
            mode: "single",
            date: displayDate,
            onDateChange: handleDateChange,
            showTime: true,
            useUtcTimestamp,
            placeholder: t("userDialog.expireDate", { defaultValue: "Expire date" }),
            minDate: now,
            maxDate,
            open: calendarOpen,
            onOpenChange: setCalendarOpen,
            fieldName,
            onFieldChange: handleFieldChange
          }
        ),
        displayDate && expireInfo?.time && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              fieldName !== "on_hold_timeout" && "lg:w-48",
              "absolute right-0 top-full mt-1 whitespace-nowrap text-end text-xs text-muted-foreground lg:overflow-hidden lg:text-ellipsis",
              dir === "rtl" ? "right-0" : "left-0"
            ),
            children: (() => {
              const now2 = /* @__PURE__ */ new Date();
              const isExpired = displayDate < now2;
              const translationKey = isExpired ? "expired" : "expires";
              return t(translationKey, { time: expireInfo.time, defaultValue: isExpired ? "Expired {{time}}" : "Expires in {{time}}" });
            })()
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
  ] });
};
const StatusSelect = ({
  value,
  onValueChange,
  placeholder,
  children,
  disabled
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const { t } = useTranslation();
  const handleSelect = (selectedValue) => {
    onValueChange?.(selectedValue);
    setOpen(false);
  };
  const getStatusText = (statusValue) => {
    if (!statusValue) return placeholder || t("userDialog.selectStatus", { defaultValue: "Select status" });
    switch (statusValue) {
      case "active":
        return t("status.active", { defaultValue: "Active" });
      case "disabled":
        return t("status.disabled", { defaultValue: "Disabled" });
      case "on_hold":
        return t("status.on_hold", { defaultValue: "On Hold" });
      default:
        return placeholder || t("userDialog.selectStatus", { defaultValue: "Select status" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "h-9 w-full justify-between px-3 py-2 text-sm", disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: getStatusText(value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[--radix-popover-trigger-width] p-1", align: "start", children: React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.props.value) {
        return React.cloneElement(child, {
          onSelect: handleSelect
        });
      }
      return child;
    }) })
  ] });
};
const StatusSelectItem = ({ value, children, onSelect }) => {
  const getDotColor = () => {
    switch (value) {
      case "active":
        return "bg-green-500";
      case "disabled":
        return "bg-zinc-500";
      case "on_hold":
        return "bg-violet-500";
      default:
        return "bg-gray-500";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
      onClick: () => onSelect?.(value),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate pr-2", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-3.5 w-3.5 shrink-0 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 w-2 rounded-full ${getDotColor()}` }) })
      ]
    }
  );
};
function UserModal({ isDialogOpen, onOpenChange, form, editingUser, editingUserId, editingUserData, onSuccessCallback }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const handleError = useDynamicErrorHandler();
  const [loading, setLoading] = reactExports.useState(false);
  const status = form.watch("status");
  const [activeTab, setActiveTab] = reactExports.useState("groups");
  const tabs = [
    { id: "groups", label: "groups", icon: Users },
    { id: "templates", label: "templates.title", icon: Layers }
  ];
  const [nextPlanEnabled, setNextPlanEnabled] = reactExports.useState(false);
  const [nextPlanManuallyDisabled, setNextPlanManuallyDisabled] = reactExports.useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = reactExports.useState(null);
  const [expireCalendarOpen, setExpireCalendarOpen] = reactExports.useState(false);
  const [onHoldCalendarOpen, setOnHoldCalendarOpen] = reactExports.useState(false);
  const nextPlanUserTemplateId = form.watch("next_plan.user_template_id");
  const nextPlanExpire = form.watch("next_plan.expire");
  const nextPlanDataLimit = form.watch("next_plan.data_limit");
  const nextPlanAddRemainingTraffic = form.watch("next_plan.add_remaining_traffic");
  const hasTemplateSelected = !!nextPlanUserTemplateId;
  const hasNextPlanData = React.useMemo(() => {
    const nextPlan = form.getValues("next_plan");
    if (!nextPlan || nextPlan === null || nextPlan === void 0) {
      return false;
    }
    return nextPlan.user_template_id !== void 0 && nextPlan.user_template_id !== null || nextPlan.expire !== void 0 && nextPlan.expire !== null || nextPlan.data_limit !== void 0 && nextPlan.data_limit !== null || nextPlan.add_remaining_traffic !== void 0 && nextPlan.add_remaining_traffic !== null;
  }, [form, nextPlanUserTemplateId, nextPlanExpire, nextPlanDataLimit, nextPlanAddRemainingTraffic]);
  reactExports.useEffect(() => {
    if (!isDialogOpen) {
      setExpireCalendarOpen(false);
      setOnHoldCalendarOpen(false);
      setNextPlanEnabled(false);
      setNextPlanManuallyDisabled(false);
    } else {
      setNextPlanManuallyDisabled(false);
      if (editingUser) {
        const nextPlanFromForm = form.getValues("next_plan");
        const nextPlanFromData = editingUserData?.next_plan;
        if (nextPlanFromData === null) {
          form.setValue("next_plan", void 0, { shouldValidate: false, shouldDirty: false });
        }
        const nextPlan = nextPlanFromData === null ? null : nextPlanFromForm !== null && nextPlanFromForm !== void 0 ? nextPlanFromForm : nextPlanFromData;
        const hasData = nextPlan !== null && nextPlan !== void 0 && typeof nextPlan === "object" && (nextPlan.user_template_id !== void 0 && nextPlan.user_template_id !== null || nextPlan.expire !== void 0 && nextPlan.expire !== null || nextPlan.data_limit !== void 0 && nextPlan.data_limit !== null || nextPlan.add_remaining_traffic !== void 0 && nextPlan.add_remaining_traffic !== null);
        setNextPlanEnabled(!!hasData);
      } else {
        setNextPlanEnabled(false);
      }
    }
  }, [isDialogOpen, editingUser, form, editingUserData]);
  const [touchedFields, setTouchedFields] = reactExports.useState({});
  const [isFormValid, setIsFormValid] = reactExports.useState(false);
  const dataLimitInputRef = React.useRef("");
  const nextPlanExpireInputRef = React.useRef("");
  const nextPlanDataLimitInputRef = React.useRef("");
  const handleModalOpenChange = React.useCallback(
    (open) => {
      if (!open) {
        if (!editingUser) {
          form.reset();
          form.setValue("next_plan", void 0);
        } else {
          if (!nextPlanEnabled) {
            form.setValue("next_plan", void 0);
          }
        }
        setTouchedFields({});
        setIsFormValid(false);
        setActiveTab("groups");
        setSelectedTemplateId(null);
        setNextPlanEnabled(false);
        setNextPlanManuallyDisabled(false);
        dataLimitInputRef.current = "";
        nextPlanExpireInputRef.current = "";
        nextPlanDataLimitInputRef.current = "";
      }
      onOpenChange(open);
    },
    [form, onOpenChange, editingUser, nextPlanEnabled]
  );
  const handleFieldChange = React.useCallback(
    (fieldName, value) => {
      setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
      const currentValues = {
        ...form.getValues(),
        [fieldName]: value
      };
      const isValid = validateAllFields(currentValues, { ...touchedFields, [fieldName]: true });
      setIsFormValid(isValid);
    },
    [form, touchedFields]
  );
  const handleFieldBlur = React.useCallback(
    (fieldName) => {
      if (!touchedFields[fieldName]) {
        setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
        const currentValues = form.getValues();
        const isValid = validateAllFields(currentValues, { ...touchedFields, [fieldName]: true });
        setIsFormValid(isValid);
      }
    },
    [form, touchedFields]
  );
  const expireValue = form.watch("expire");
  const onHoldValue = form.watch("on_hold_timeout");
  const dataLimitValue = form.watch("data_limit");
  let displayDate = null;
  let onHoldDisplayDate = null;
  const parseDateValue = (value) => {
    if (isDate(value)) {
      return value;
    } else if (typeof value === "string") {
      if (value === "") {
        return null;
      } else {
        try {
          const trimmedValue = value.trim();
          const dayjsDate = parseDateInput(trimmedValue);
          if (dayjsDate.isValid()) {
            return toDisplayDate(trimmedValue);
          }
        } catch (error) {
        }
      }
    } else if (typeof value === "number") {
      try {
        const dayjsDate = parseDateInput(value);
        if (dayjsDate.isValid()) {
          return toDisplayDate(value);
        }
      } catch (error) {
      }
    }
    return null;
  };
  displayDate = parseDateValue(expireValue);
  onHoldDisplayDate = parseDateValue(onHoldValue);
  const queryClient = useQueryClient();
  const { data: templatesData, isLoading: templatesLoading } = useGetUserTemplatesSimple(
    { all: true },
    {
      query: {
        staleTime: 0,
        gcTime: 0,
        refetchOnMount: true,
        refetchOnReconnect: false,
        enabled: isDialogOpen
      }
    }
  );
  const templateOptions = templatesData?.templates || [];
  useGetGroupsSimple(
    { all: true },
    {
      query: {
        staleTime: 5 * 60 * 1e3,
        gcTime: 10 * 60 * 1e3,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        enabled: isDialogOpen
      }
    }
  );
  const { data: generalSettings } = useQuery({
    queryKey: getGetGeneralSettingsQueryKey(),
    queryFn: () => getGeneralSettings(),
    enabled: isDialogOpen,
    refetchOnMount: true
  });
  const refreshUserData = (user, isEdit = false) => {
    if (isEdit) {
      queryClient.setQueriesData(
        {
          queryKey: ["/api/users"],
          exact: false
        },
        (oldData) => {
          if (!oldData) return oldData;
          const updatedUsers = oldData.users.map((u) => u.username === user.username ? user : u);
          return {
            ...oldData,
            users: updatedUsers
          };
        }
      );
      queryClient.invalidateQueries({ queryKey: ["/api/users"], exact: false });
      queryClient.invalidateQueries({ queryKey: ["getUsersUsage"] });
      queryClient.invalidateQueries({ queryKey: ["getUserStats"] });
      queryClient.invalidateQueries({ queryKey: ["getInboundStats"] });
      queryClient.invalidateQueries({ queryKey: ["getUserOnlineStats"] });
    } else {
      queryClient.invalidateQueries({ queryKey: ["/api/users"] });
      queryClient.invalidateQueries({ queryKey: ["getUsersUsage"] });
      queryClient.invalidateQueries({ queryKey: ["getUserStats"] });
      queryClient.invalidateQueries({ queryKey: ["getInboundStats"] });
      queryClient.invalidateQueries({ queryKey: ["getUserOnlineStats"] });
    }
    if (onSuccessCallback) {
      onSuccessCallback(user);
    }
  };
  const createUserMutation = useCreateUser({
    mutation: {
      onSuccess: (data) => refreshUserData(data)
    }
  });
  const modifyUserMutation = useModifyUser({
    mutation: {
      onSuccess: (data) => refreshUserData(data, true)
    }
  });
  const createUserFromTemplateMutation = useCreateUserFromTemplate({
    mutation: {
      onSuccess: (data) => refreshUserData(data)
    }
  });
  const modifyUserWithTemplateMutation = useModifyUserWithTemplate({
    mutation: {
      onSuccess: (data) => refreshUserData(data, true)
    }
  });
  reactExports.useEffect(() => {
    if (!isDialogOpen) {
      form.clearErrors();
    }
  }, [isDialogOpen, form]);
  reactExports.useEffect(() => {
    form.clearErrors();
    if (!editingUser && !selectedTemplateId) {
      form.setError("username", {
        type: "manual",
        message: t("validation.required", { field: t("username", { defaultValue: "Username" }) })
      });
    }
  }, [form, editingUser, t, selectedTemplateId]);
  reactExports.useEffect(() => {
    if (selectedTemplateId) {
      const username = form.getValues("username");
      if (username && username.length >= 3) {
        form.clearErrors();
        setIsFormValid(true);
        setTouchedFields({ username: true });
      } else {
        form.clearErrors();
        form.setError("username", {
          type: "manual",
          message: t("validation.required", { field: t("username", { defaultValue: "Username" }) })
        });
        setIsFormValid(false);
      }
    }
  }, [selectedTemplateId, form, t]);
  reactExports.useEffect(() => {
    if (status === "on_hold") {
      const duration = form.getValues("on_hold_expire_duration");
      const touched = touchedFields["on_hold_expire_duration"];
      if (!touched && (!duration || duration < 1)) {
        const defaultDuration = 30 * 24 * 60 * 60;
        form.setValue("on_hold_expire_duration", defaultDuration);
        handleFieldChange("on_hold_expire_duration", defaultDuration);
      }
      form.setValue("expire", void 0);
      form.clearErrors("expire");
    } else {
      form.setValue("on_hold_expire_duration", void 0);
      form.clearErrors("on_hold_expire_duration");
      form.setValue("on_hold_timeout", void 0);
      form.clearErrors("on_hold_timeout");
    }
  }, [status, form, t, handleFieldChange, touchedFields]);
  reactExports.useEffect(() => {
    if (!nextPlanEnabled) {
      const currentNextPlan = form.getValues("next_plan");
      if (currentNextPlan !== null && currentNextPlan !== void 0) {
        form.setValue("next_plan", void 0, { shouldValidate: false, shouldDirty: false });
        handleFieldChange("next_plan", void 0);
      }
    } else {
      const currentNextPlan = form.getValues("next_plan");
      if (currentNextPlan === null || currentNextPlan === void 0) {
        form.setValue("next_plan", {
          expire: 0,
          data_limit: 0,
          add_remaining_traffic: false
        }, { shouldValidate: false, shouldDirty: false });
      } else {
        if (!currentNextPlan.user_template_id) {
          const updatedPlan = {
            ...currentNextPlan,
            expire: currentNextPlan.expire ?? 0,
            data_limit: currentNextPlan.data_limit ?? 0,
            add_remaining_traffic: currentNextPlan.add_remaining_traffic ?? false
          };
          form.setValue("next_plan", updatedPlan, { shouldValidate: false, shouldDirty: false });
        }
      }
      setNextPlanManuallyDisabled(false);
    }
  }, [nextPlanEnabled, form, handleFieldChange]);
  reactExports.useEffect(() => {
    if (!isDialogOpen || !editingUser) return;
    const nextPlanFromForm = form.getValues("next_plan");
    const nextPlanFromData = editingUserData?.next_plan;
    const nextPlan = nextPlanFromForm !== null && nextPlanFromForm !== void 0 ? nextPlanFromForm : nextPlanFromData;
    const hasDataFromForm = nextPlan !== null && nextPlan !== void 0 && typeof nextPlan === "object" && (nextPlan.user_template_id !== void 0 && nextPlan.user_template_id !== null || nextPlan.expire !== void 0 && nextPlan.expire !== null || nextPlan.data_limit !== void 0 && nextPlan.data_limit !== null || nextPlan.add_remaining_traffic !== void 0 && nextPlan.add_remaining_traffic !== null);
    const hasData = hasDataFromForm;
    if (!hasData && nextPlanEnabled && !nextPlanManuallyDisabled) {
      setNextPlanEnabled(false);
    } else if (hasData && !nextPlanEnabled && !nextPlanManuallyDisabled) {
      setNextPlanEnabled(true);
      setNextPlanManuallyDisabled(false);
    }
  }, [isDialogOpen, editingUser, hasNextPlanData, nextPlanManuallyDisabled, form, nextPlanUserTemplateId, nextPlanExpire, nextPlanDataLimit, nextPlanAddRemainingTraffic, editingUserData]);
  function normalizeExpire(expire, useUtcTimestamp = false) {
    if (expire === "") return 0;
    if (expire === void 0 || expire === null) return void 0;
    if (expire instanceof Date) {
      return useUtcTimestamp ? toUnixSeconds(expire) : formatOffsetDateTime(expire);
    }
    try {
      const dayjsDate = parseDateInput(expire);
      if (dayjsDate.isValid()) {
        return useUtcTimestamp ? toUnixSeconds(expire) : formatOffsetDateTime(expire);
      }
    } catch (error) {
    }
    return void 0;
  }
  const clearGroups = () => form.setValue("group_ids", []);
  const clearTemplate = () => setSelectedTemplateId(null);
  const validateAllFields = (currentValues, touchedFields2, isSubmit = false) => {
    try {
      if (selectedTemplateId) {
        form.clearErrors();
        if (!currentValues.username || currentValues.username.length < 3) {
          form.setError("username", {
            type: "manual",
            message: t("validation.required", { field: t("username", { defaultValue: "Username" }) })
          });
          return false;
        }
        return true;
      }
      if (isSubmit) {
        if (!currentValues.username || currentValues.username.length < 3) {
          form.setError("username", {
            type: "manual",
            message: t("validation.required", { field: t("username", { defaultValue: "Username" }) })
          });
          return false;
        }
        if (!currentValues.group_ids || !Array.isArray(currentValues.group_ids) || currentValues.group_ids.length === 0) {
          form.setError("group_ids", {
            type: "manual",
            message: t("validation.required", { field: t("groups", { defaultValue: "Groups" }) })
          });
          return false;
        }
        if (!currentValues.status) {
          form.setError("status", {
            type: "manual",
            message: t("validation.required", { field: t("status", { defaultValue: "Status" }) })
          });
          return false;
        }
        if (currentValues.status === "on_hold") {
          if (!currentValues.on_hold_expire_duration || currentValues.on_hold_expire_duration <= 0) {
            form.setError("on_hold_expire_duration", {
              type: "manual",
              message: t("validation.required", { field: t("userDialog.onHoldExpireDuration", { defaultValue: "On Hold Expire Duration" }) })
            });
            return false;
          }
        }
      }
      if (nextPlanEnabled && editingUser && !isSubmit) {
        const hasTouchedNonNextPlanFields = Object.keys(touchedFields2).some((key) => key !== "next_plan" && !key.startsWith("next_plan.") && touchedFields2[key]);
        if (!hasTouchedNonNextPlanFields) {
          form.clearErrors();
          return true;
        }
      }
      const fieldsToValidate = isSubmit ? currentValues : Object.keys(touchedFields2).reduce((acc, key) => {
        if (touchedFields2[key]) {
          acc[key] = currentValues[key];
        }
        return acc;
      }, {});
      if (!isSubmit && Object.keys(fieldsToValidate).length === 0) {
        form.clearErrors();
        return true;
      }
      form.clearErrors();
      const schema = selectedTemplateId ? editingUser ? templateModifySchema : templateUserSchema : editingUser ? userEditSchema : userCreateSchema;
      if (isSubmit) {
        schema.parse(fieldsToValidate);
      } else {
        schema.partial().parse(fieldsToValidate);
      }
      return true;
    } catch (error) {
      if (error?.errors) {
        form.clearErrors();
        error.errors.forEach((err) => {
          const fieldName = err.path[0];
          if (fieldName && (isSubmit || touchedFields2[fieldName])) {
            let message = err.message;
            if (fieldName === "group_ids" && message.includes("Required")) {
              message = t("validation.required", { field: t("groups", { defaultValue: "Groups" }) });
            } else if (fieldName === "username" && message.includes("too short")) {
              message = t("validation.required", { field: t("username", { defaultValue: "Username" }) });
            }
            if (fieldName === "group_ids") {
              message = t("validation.required", { field: t("groups", { defaultValue: "Groups" }) });
            }
            form.setError(fieldName, {
              type: "manual",
              message
            });
          }
        });
      }
      return false;
    }
  };
  const handleTemplateSelect = React.useCallback(
    (val) => {
      const currentValues = form.getValues();
      if (val === "none" || selectedTemplateId && String(selectedTemplateId) === val) {
        setSelectedTemplateId(null);
        clearGroups();
      } else {
        setSelectedTemplateId(Number(val));
        clearGroups();
        form.setValue("group_ids", []);
        handleFieldChange("group_ids", []);
      }
      const isValid = validateAllFields(currentValues, touchedFields);
      setIsFormValid(isValid);
    },
    [form, selectedTemplateId, touchedFields, handleFieldChange]
  );
  const handleTemplateMutation = React.useCallback(
    async (values) => {
      if (!selectedTemplateId) return;
      if (!values.username || values.username.length < 3) {
        toast.error(t("validation.required", { field: t("username", { defaultValue: "Username" }) }));
        return;
      }
      setLoading(true);
      try {
        if (editingUser) {
          await modifyUserWithTemplateMutation.mutateAsync({
            username: values.username,
            data: {
              user_template_id: selectedTemplateId,
              note: values.note
            }
          });
          toast.success(
            t("userDialog.userEdited", {
              username: values.username,
              defaultValue: "User «{{name}}» has been updated successfully"
            })
          );
        } else {
          await createUserFromTemplateMutation.mutateAsync({
            data: {
              user_template_id: selectedTemplateId,
              username: values.username,
              note: values.note || void 0
            }
          });
          toast.success(
            t("userDialog.userCreated", {
              username: values.username,
              defaultValue: "User «{{name}}» has been created successfully"
            })
          );
        }
        onOpenChange(false);
        form.reset();
        setSelectedTemplateId(null);
        setActiveTab("groups");
      } catch (error) {
        const fields = ["username", "note"];
        handleError({ error, fields, form, contextKey: "users" });
      } finally {
        setLoading(false);
      }
    },
    [editingUser, selectedTemplateId, form, onOpenChange, t]
  );
  const onSubmit = React.useCallback(
    async (values) => {
      try {
        form.clearErrors();
        if (selectedTemplateId) {
          await handleTemplateMutation(values);
          return;
        }
        if (!validateAllFields(values, touchedFields, true)) {
          const errors = form.formState.errors;
          const errorFields = Object.keys(errors);
          if (errorFields.length > 0) {
            const firstError = errorFields[0];
            let errorMessage = t("validation.formHasErrors", { defaultValue: "Please fix the form errors before submitting" });
            if (firstError === "username" && errors.username?.message) {
              errorMessage = errors.username.message;
            } else if (firstError === "group_ids" && errors.group_ids?.message) {
              errorMessage = errors.group_ids.message;
            } else if (firstError === "status" && errors.status?.message) {
              errorMessage = errors.status.message;
            } else if (firstError === "on_hold_expire_duration" && errors.on_hold_expire_duration?.message) {
              errorMessage = errors.on_hold_expire_duration.message;
            }
            toast.error(errorMessage);
          } else {
            const missingFields = [];
            if (!values.username || values.username.length < 3) {
              missingFields.push(t("username", { defaultValue: "Username" }));
            }
            if (!values.group_ids || !Array.isArray(values.group_ids) || values.group_ids.length === 0) {
              missingFields.push(t("groups", { defaultValue: "Groups" }));
            }
            if (!values.status) {
              missingFields.push(t("status", { defaultValue: "Status" }));
            }
            if (values.status === "on_hold" && (!values.on_hold_expire_duration || values.on_hold_expire_duration <= 0)) {
              missingFields.push(t("userDialog.onHoldExpireDuration", { defaultValue: "On Hold Expire Duration" }));
            }
            if (missingFields.length > 0) {
              toast.error(
                t("validation.missingFields", {
                  fields: missingFields.join(", "),
                  defaultValue: "Please fill in the required fields: {{fields}}"
                })
              );
            } else {
              toast.error(t("validation.formInvalid", { defaultValue: "Form is invalid. Please check all required fields." }));
            }
          }
          return;
        }
        const { next_plan, ...valuesWithoutNextPlan } = values;
        const preparedValues = {
          ...valuesWithoutNextPlan,
          data_limit: typeof values.data_limit === "string" ? parseFloat(values.data_limit) : values.data_limit,
          on_hold_expire_duration: values.on_hold_expire_duration ? typeof values.on_hold_expire_duration === "string" ? parseInt(values.on_hold_expire_duration, 10) : values.on_hold_expire_duration : void 0,
          expire: status === "on_hold" ? void 0 : normalizeExpire(values.expire),
          on_hold_timeout: status === "on_hold" ? normalizeExpire(values.on_hold_timeout) : void 0,
          group_ids: Array.isArray(values.group_ids) ? values.group_ids : [],
          status: values.status
        };
        const hasProxySettings = values.proxy_settings && Object.values(values.proxy_settings).some((settings) => settings && Object.values(settings).some((value) => value !== void 0 && value !== ""));
        setLoading(true);
        const cleanedProxySettings = hasProxySettings ? {
          ...values.proxy_settings,
          vless: values.proxy_settings?.vless ? {
            ...values.proxy_settings.vless,
            flow: values.proxy_settings.vless.flow || void 0
          } : void 0,
          shadowsocks: values.proxy_settings?.shadowsocks ? {
            ...values.proxy_settings.shadowsocks,
            method: values.proxy_settings.shadowsocks.method || void 0
          } : void 0
        } : void 0;
        const sendValues = {
          ...preparedValues,
          data_limit: gbToBytes(preparedValues.data_limit),
          expire: preparedValues.expire,
          ...hasProxySettings ? { proxy_settings: cleanedProxySettings } : {}
        };
        if (nextPlanEnabled) {
          const nextPlan = values.next_plan || form.getValues("next_plan") || {};
          if (nextPlan.user_template_id) {
            sendValues.next_plan = {
              user_template_id: nextPlan.user_template_id,
              expire: 0,
              data_limit: 0,
              add_remaining_traffic: nextPlan.add_remaining_traffic ?? false
            };
          } else {
            sendValues.next_plan = {
              expire: nextPlan.expire ?? 0,
              data_limit: nextPlan.data_limit ?? 0,
              add_remaining_traffic: nextPlan.add_remaining_traffic ?? false
            };
          }
        } else {
          sendValues.next_plan = null;
        }
        if (!hasProxySettings) {
          delete sendValues.proxy_settings;
        }
        if (editingUser && editingUserId) {
          try {
            await modifyUserMutation.mutateAsync({
              username: sendValues.username,
              data: sendValues
            });
            toast.success(
              t("userDialog.userEdited", {
                username: values.username,
                defaultValue: "User «{{name}}» has been updated successfully"
              })
            );
          } catch (error) {
            console.error("Modify user error:", error);
            throw error;
          }
        } else {
          try {
            const createData = {
              ...sendValues,
              status: sendValues.status === "active" ? "active" : sendValues.status
            };
            await createUserMutation.mutateAsync({
              data: createData
            });
            toast.success(
              t("userDialog.userCreated", {
                username: values.username,
                defaultValue: "User «{{name}}» has been created successfully"
              })
            );
          } catch (error) {
            console.error("Create user error:", error);
            throw error;
          }
        }
        onOpenChange(false);
        form.reset();
        setTouchedFields({});
        setActiveTab("groups");
        setSelectedTemplateId(null);
      } catch (error) {
        const fields = ["username", "data_limit", "expire", "note", "data_limit_reset_strategy", "on_hold_expire_duration", "on_hold_timeout", "group_ids"];
        handleError({ error, fields, form, contextKey: "users" });
      } finally {
        setLoading(false);
      }
    },
    [editingUser, editingUserId, form, handleTemplateMutation, onOpenChange, selectedTemplateId, status, t, touchedFields]
  );
  function getRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }
  function generateUsername() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  function generatePassword(length = 24) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "_";
    let password = "";
    password += special;
    for (let i = 1; i < length; i++) {
      const charSet = getRandomInt(10) < 7 ? letters : numbers;
      const randomIndex = getRandomInt(charSet.length);
      password += charSet[randomIndex];
    }
    const arr = password.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = getRandomInt(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }
  function generateProxySettings() {
    return {
      vmess: {
        id: v4()
      },
      vless: {
        id: v4(),
        flow: ""
      },
      trojan: {
        password: generatePassword()
      },
      shadowsocks: {
        password: generatePassword()
      }
    };
  }
  const GenerateProxySettingsButton = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      size: "icon",
      type: "button",
      variant: "ghost",
      onClick: () => {
        const newSettings = generateProxySettings();
        form.setValue("proxy_settings", newSettings);
        handleFieldChange("proxy_settings", newSettings);
      },
      title: "Generate proxy settings",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
    }
  );
  reactExports.useEffect(() => {
    if (isDialogOpen) {
      if (status === "on_hold" && editingUser) {
        const currentDuration = form.getValues("on_hold_expire_duration");
        if (currentDuration === void 0 || currentDuration === null || Number(currentDuration) === 0) {
          form.setValue("on_hold_expire_duration", 0);
        }
      }
    }
  }, [isDialogOpen, form, editingUser, status]);
  reactExports.useEffect(() => {
    if (isDialogOpen && editingUser && dataLimitValue !== null && dataLimitValue !== void 0) {
      if (dataLimitValue > 0) {
        dataLimitInputRef.current = String(dataLimitValue);
      } else {
        dataLimitInputRef.current = "";
      }
    }
  }, [isDialogOpen, editingUser, dataLimitValue]);
  reactExports.useEffect(() => {
    if (isDialogOpen && editingUser && nextPlanEnabled) {
      const nextPlan = form.getValues("next_plan");
      if (nextPlan?.expire !== void 0 && nextPlan?.expire !== null && nextPlan.expire > 0) {
        const days = dateUtils.secondsToDays(nextPlan.expire);
        nextPlanExpireInputRef.current = String(days);
      }
      if (nextPlan?.data_limit !== void 0 && nextPlan?.data_limit !== null && nextPlan.data_limit > 0) {
        const gb = Math.round(nextPlan.data_limit / (1024 * 1024 * 1024));
        nextPlanDataLimitInputRef.current = String(gb);
      }
    }
  }, [isDialogOpen, editingUser, nextPlanEnabled, form]);
  reactExports.useEffect(() => {
    if (isDialogOpen) {
      if (!editingUser) {
        form.setValue("proxy_settings", void 0);
        dataLimitInputRef.current = "";
        form.setValue("data_limit", 0);
        if (generalSettings) {
          form.setValue("proxy_settings.vless.flow", generalSettings.default_flow || "");
          const validMethods = ["aes-128-gcm", "aes-256-gcm", "chacha20-ietf-poly1305", "xchacha20-poly1305"];
          const method = validMethods.find((m) => m === generalSettings.default_method);
          if (method) {
            form.setValue("proxy_settings.shadowsocks.method", method);
          }
        }
      } else {
        const currentDataLimit = form.getValues("data_limit");
        if (currentDataLimit !== null && currentDataLimit !== void 0 && currentDataLimit > 0) {
          dataLimitInputRef.current = String(currentDataLimit);
        } else {
          dataLimitInputRef.current = "";
        }
      }
    }
  }, [isDialogOpen, editingUser, generalSettings, form]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange: handleModalOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: `h-auto lg:min-w-[900px]`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: `${dir === "rtl" ? "text-right" : "text-left"}`, children: editingUser ? t("userDialog.editUser", { defaultValue: "Edit User" }) : t("createUser", { defaultValue: "Create User" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "sr-only", children: editingUser ? t("userDialog.editUser", { defaultValue: "Edit User" }) : t("createUser", { defaultValue: "Create User" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mr-4 max-h-[80dvh] overflow-y-auto px-2 pr-4 sm:max-h-[75dvh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex-[2] space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-center gap-4", children: [
            !selectedTemplateId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "username",
                  render: ({ field }) => {
                    const hasError = !!form.formState.errors.username;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("username", { defaultValue: "Username" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: t("admins.enterUsername", { defaultValue: "Enter username" }),
                            ...field,
                            value: field.value ?? "",
                            disabled: editingUser,
                            isError: hasError,
                            onChange: (e) => {
                              field.onChange(e);
                              handleFieldChange("username", e.target.value);
                            },
                            onBlur: () => handleFieldBlur("username")
                          }
                        ) }),
                        !editingUser && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "icon",
                            type: "button",
                            variant: "ghost",
                            onClick: (e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const newUsername = generateUsername();
                              field.onChange(newUsername);
                              handleFieldChange("username", newUsername);
                            },
                            title: "Generate username",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] });
                  }
                }
              ),
              activeTab === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "status",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-1/3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("status", { defaultValue: "Status" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      StatusSelect,
                      {
                        value: field.value || "",
                        onValueChange: (value) => {
                          field.onChange(value);
                          handleFieldChange("status", value);
                        },
                        placeholder: t("userDialog.selectStatus", { defaultValue: "Select status" }),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSelectItem, { value: "active", children: t("status.active", { defaultValue: "Active" }) }),
                          editingUser && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSelectItem, { value: "disabled", children: t("status.disabled", { defaultValue: "Disabled" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSelectItem, { value: "on_hold", children: t("status.on_hold", { defaultValue: "On Hold" }) })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              )
            ] }),
            selectedTemplateId && /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "username",
                render: ({ field }) => {
                  const hasError = !!form.formState.errors.username;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("username", { defaultValue: "Username" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-row items-center justify-between gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          placeholder: t("admins.enterUsername", { defaultValue: "Enter username" }),
                          ...field,
                          value: field.value ?? "",
                          disabled: editingUser,
                          isError: hasError,
                          onChange: (e) => {
                            field.onChange(e);
                            handleFieldChange("username", e.target.value);
                          },
                          onBlur: () => handleFieldBlur("username")
                        }
                      ) }),
                      !editingUser && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const newUsername = generateUsername();
                            field.onChange(newUsername);
                            handleFieldChange("username", newUsername);
                          },
                          title: "Generate username",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] });
                }
              }
            )
          ] }),
          activeTab === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-4 lg:flex-row lg:items-end", children: [
            !selectedTemplateId && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "data_limit",
                  render: ({ field }) => {
                    if (dataLimitInputRef.current === "" && field.value !== null && field.value !== void 0 && field.value > 0) {
                      dataLimitInputRef.current = String(field.value);
                    } else if ((field.value === null || field.value === void 0) && dataLimitInputRef.current !== "") {
                      dataLimitInputRef.current = "";
                    }
                    const displayValue = dataLimitInputRef.current !== "" ? dataLimitInputRef.current : field.value !== null && field.value !== void 0 && field.value > 0 ? String(field.value) : "";
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "relative h-full flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.dataLimit", { defaultValue: "Data Limit (GB)" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "text",
                          inputMode: "decimal",
                          placeholder: t("userDialog.dataLimit", { defaultValue: "e.g. 1" }),
                          value: displayValue,
                          onChange: (e) => {
                            const rawValue = e.target.value.trim();
                            dataLimitInputRef.current = rawValue;
                            if (rawValue === "") {
                              field.onChange(0);
                              handleFieldChange("data_limit", 0);
                              return;
                            }
                            const validNumberPattern = /^-?\d*\.?\d*$/;
                            if (validNumberPattern.test(rawValue)) {
                              if (rawValue.endsWith(".") && rawValue.length > 1) {
                                const prevValue = field.value !== null && field.value !== void 0 ? field.value : 0;
                                field.onChange(prevValue);
                                handleFieldChange("data_limit", prevValue);
                              } else if (rawValue === ".") {
                                field.onChange(0);
                                handleFieldChange("data_limit", 0);
                              } else {
                                const numValue = parseFloat(rawValue);
                                if (!isNaN(numValue) && numValue >= 0) {
                                  field.onChange(numValue);
                                  handleFieldChange("data_limit", numValue);
                                }
                              }
                            }
                          },
                          onBlur: () => {
                            const rawValue = dataLimitInputRef.current.trim();
                            if (rawValue === "" || rawValue === "." || rawValue === "0") {
                              dataLimitInputRef.current = "";
                              field.onChange(0);
                              handleFieldChange("data_limit", 0);
                            } else {
                              const numValue = parseFloat(rawValue);
                              if (!isNaN(numValue) && numValue >= 0) {
                                const finalValue = numValue;
                                dataLimitInputRef.current = finalValue > 0 ? String(finalValue) : "";
                                field.onChange(finalValue);
                                handleFieldChange("data_limit", finalValue);
                              } else {
                                dataLimitInputRef.current = "";
                                field.onChange(0);
                                handleFieldChange("data_limit", 0);
                              }
                            }
                          }
                        }
                      ) }),
                      field.value !== null && field.value !== void 0 && field.value > 0 && field.value < 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute right-0 top-full mt-1 text-end text-xs text-muted-foreground", children: formatBytes(Math.round(field.value * 1024 * 1024 * 1024)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] });
                  }
                }
              ),
              form.watch("data_limit") !== void 0 && form.watch("data_limit") !== null && Number(form.watch("data_limit")) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "data_limit_reset_strategy",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.periodicUsageReset", { defaultValue: "Periodic Usage Reset" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        onValueChange: (value) => {
                          field.onChange(value);
                          handleFieldChange("data_limit_reset_strategy", value);
                        },
                        value: field.value || "",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.resetStrategyNo", { defaultValue: "No" }) }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no_reset", children: t("userDialog.resetStrategyNo", { defaultValue: "No" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "day", children: t("userDialog.resetStrategyDaily", { defaultValue: "Daily" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "week", children: t("userDialog.resetStrategyWeekly", { defaultValue: "Weekly" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "month", children: t("userDialog.resetStrategyMonthly", { defaultValue: "Monthly" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "year", children: t("userDialog.resetStrategyAnnually", { defaultValue: "Annually" }) })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-start gap-4 lg:w-52", children: status === "on_hold" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "on_hold_expire_duration",
                render: ({ field }) => {
                  const hasError = !!form.formState.errors.on_hold_expire_duration;
                  const fieldValue = field.value ? Math.round(field.value / (24 * 60 * 60)) : "";
                  const isZeroOrEmpty = fieldValue === 0 || fieldValue === "";
                  const isTouched = touchedFields["on_hold_expire_duration"];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.onHoldExpireDuration", { defaultValue: "On Hold Expire Duration (days)" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        min: "1",
                        isError: hasError || isTouched && isZeroOrEmpty,
                        placeholder: t("userDialog.onHoldExpireDurationPlaceholder", { defaultValue: "e.g. 7" }),
                        ...field,
                        value: fieldValue ? fieldValue : "",
                        onChange: (e) => {
                          if (e.target.value === "") {
                            field.onChange(0);
                            handleFieldChange("on_hold_expire_duration", 0);
                            setTouchedFields((prev) => ({ ...prev, on_hold_expire_duration: true }));
                          } else {
                            const value = parseInt(e.target.value, 10);
                            if (!isNaN(value) && value >= 0) {
                              field.onChange(value ? value * (24 * 60 * 60) : 0);
                              handleFieldChange("on_hold_expire_duration", value);
                              setTouchedFields((prev) => ({ ...prev, on_hold_expire_duration: true }));
                            }
                          }
                        },
                        onBlur: () => {
                          handleFieldBlur("on_hold_expire_duration");
                          if (fieldValue === 0 || fieldValue === "") {
                            form.setError("on_hold_expire_duration", {
                              type: "manual",
                              message: t("validation.required", { field: t("userDialog.onHoldExpireDuration", { defaultValue: "On Hold Expire Duration" }) })
                            });
                          } else {
                            form.clearErrors("on_hold_expire_duration");
                          }
                        }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] });
                }
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "expire",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ExpiryDateField,
                  {
                    field,
                    displayDate,
                    calendarOpen: expireCalendarOpen,
                    setCalendarOpen: setExpireCalendarOpen,
                    handleFieldChange,
                    label: t("userDialog.expiryDate", { defaultValue: "Expire date" }),
                    fieldName: "expire"
                  }
                )
              }
            ) })
          ] }),
          activeTab === "groups" && status === "on_hold" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "on_hold_timeout",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExpiryDateField,
                {
                  field,
                  displayDate: onHoldDisplayDate,
                  calendarOpen: onHoldCalendarOpen,
                  setCalendarOpen: setOnHoldCalendarOpen,
                  handleFieldChange,
                  label: t("userDialog.timeOutDate", { defaultValue: "Expire date" }),
                  fieldName: "on_hold_timeout"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "note",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.note", { defaultValue: "Note" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    placeholder: t("userDialog.note", { defaultValue: "Optional note" }) + "...",
                    ...field,
                    rows: 3,
                    onChange: (e) => {
                      field.onChange(e);
                      handleFieldChange("note", e.target.value);
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          activeTab === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "my-4 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "proxySettings", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("userDialog.proxySettingsAccordion") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "px-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t("userDialog.proxySettings.desc") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateProxySettingsButton, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "proxy_settings.vmess.id",
                  render: ({ field, formState }) => {
                    const error = formState.errors.proxy_settings?.vmess?.id;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { children: [
                        t("userDialog.proxySettings.vmess"),
                        " ",
                        t("userDialog.proxySettings.id")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: `flex items-center gap-2 ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            ...field,
                            placeholder: t("userDialog.proxySettings.id"),
                            onChange: (e) => {
                              field.onChange(e);
                              form.trigger("proxy_settings.vmess.id");
                              handleFieldChange("proxy_settings.vmess.id", e.target.value);
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "icon",
                            type: "button",
                            variant: "ghost",
                            onClick: (e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const newVal = v4();
                              field.onChange(newVal);
                              form.trigger("proxy_settings.vmess.id");
                              handleFieldChange("proxy_settings.vmess.id", newVal);
                            },
                            title: "Generate UUID",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, { children: error?.message === "Invalid uuid" && t("validation.invalidUuid", { defaultValue: "Invalid UUID format" }) })
                    ] });
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "proxy_settings.vless.id",
                  render: ({ field, formState }) => {
                    const error = formState.errors.proxy_settings?.vless?.id;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { children: [
                        t("userDialog.proxySettings.vless"),
                        " ",
                        t("userDialog.proxySettings.id")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: `flex items-center gap-2 ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            ...field,
                            placeholder: t("userDialog.proxySettings.id"),
                            onChange: (e) => {
                              field.onChange(e);
                              form.trigger("proxy_settings.vless.id");
                              handleFieldChange("proxy_settings.vless.id", e.target.value);
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "icon",
                            type: "button",
                            variant: "ghost",
                            onClick: (e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const newVal = v4();
                              field.onChange(newVal);
                              form.trigger("proxy_settings.vless.id");
                              handleFieldChange("proxy_settings.vless.id", newVal);
                            },
                            title: "Generate UUID",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, { children: error?.message === "Invalid uuid" && t("validation.invalidUuid", { defaultValue: "Invalid UUID format" }) })
                    ] });
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "proxy_settings.vless.flow",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { children: [
                      t("userDialog.proxySettings.vless"),
                      " ",
                      t("userDialog.proxySettings.flow")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: field.value ?? "none",
                        onValueChange: (val) => {
                          const flowValue = val === "none" ? "" : val;
                          field.onChange(flowValue);
                          handleFieldChange("proxy_settings.vless.flow", flowValue);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.proxySettings.flow") }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: t("userDialog.proxySettings.flow.none", { defaultValue: "None" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "xtls-rprx-vision", children: "xtls-rprx-vision" })
                          ] })
                        ]
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
                  name: "proxy_settings.trojan.password",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { children: [
                      t("userDialog.proxySettings.trojan"),
                      " ",
                      t("userDialog.proxySettings.password")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: `flex items-center gap-2 ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          ...field,
                          placeholder: t("userDialog.proxySettings.password"),
                          onChange: (e) => {
                            field.onChange(e);
                            form.trigger("proxy_settings.trojan.password");
                            handleFieldChange("proxy_settings.trojan.password", e.target.value);
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const newVal = generatePassword();
                            field.onChange(newVal);
                            form.trigger("proxy_settings.trojan.password");
                            handleFieldChange("proxy_settings.trojan.password", newVal);
                          },
                          title: "Generate password",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "proxy_settings.shadowsocks.password",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "mb-2 w-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { children: [
                      t("userDialog.proxySettings.shadowsocks"),
                      " ",
                      t("userDialog.proxySettings.password")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: `flex items-center gap-2 ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          ...field,
                          placeholder: t("userDialog.proxySettings.password"),
                          onChange: (e) => {
                            field.onChange(e);
                            form.trigger("proxy_settings.shadowsocks.password");
                            handleFieldChange("proxy_settings.shadowsocks.password", e.target.value);
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "icon",
                          type: "button",
                          variant: "ghost",
                          onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const newVal = generatePassword();
                            field.onChange(newVal);
                            form.trigger("proxy_settings.shadowsocks.password");
                            handleFieldChange("proxy_settings.shadowsocks.password", newVal);
                          },
                          title: "Generate password",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "h-3 w-3" })
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "proxy_settings.shadowsocks.method",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { children: [
                      t("userDialog.proxySettings.shadowsocks"),
                      " ",
                      t("userDialog.proxySettings.method")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: field.value ?? "",
                        onValueChange: (val) => {
                          const methodValue = val || void 0;
                          field.onChange(methodValue);
                          handleFieldChange("proxy_settings.shadowsocks.method", methodValue);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.proxySettings.method") }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "aes-128-gcm", children: "aes-128-gcm" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "aes-256-gcm", children: "aes-256-gcm" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "chacha20-ietf-poly1305", children: "chacha20-ietf-poly1305" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "xchacha20-poly1305", children: "xchacha20-poly1305" })
                          ] })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              )
            ] })
          ] }) }),
          activeTab === "groups" && editingUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[--radius] border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex cursor-pointer items-center gap-2",
                  onClick: () => {
                    const newValue = !nextPlanEnabled;
                    setNextPlanEnabled(newValue);
                    if (!newValue) {
                      setNextPlanManuallyDisabled(true);
                    } else {
                      setNextPlanManuallyDisabled(false);
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ListStart, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("userDialog.nextPlanTitle", { defaultValue: "Next Plan" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: nextPlanEnabled,
                  onCheckedChange: (value) => {
                    setNextPlanEnabled(value);
                    if (!value) {
                      setNextPlanManuallyDisabled(true);
                    } else {
                      setNextPlanManuallyDisabled(false);
                    }
                    const currentValues = form.getValues();
                    const isValid = validateAllFields(currentValues, touchedFields);
                    setIsFormValid(isValid);
                  }
                }
              )
            ] }),
            nextPlanEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "next_plan.user_template_id",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.nextPlanTemplateId", { defaultValue: "Template" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: field.value ? String(field.value) : "none",
                        onValueChange: (val) => {
                          if (val === "none" || field.value && String(field.value) === val) {
                            field.onChange(void 0);
                            handleFieldChange("next_plan.user_template_id", void 0);
                          } else {
                            field.onChange(Number(val));
                            handleFieldChange("next_plan.user_template_id", Number(val));
                          }
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.selectTemplatePlaceholder", { defaultValue: "Choose a template" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "---" }),
                            templateOptions.map((tpl) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(tpl.id), children: tpl.name }, tpl.id))
                          ] })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              !hasTemplateSelected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "next_plan.expire",
                    render: ({ field }) => {
                      if (nextPlanExpireInputRef.current === "" && field.value !== null && field.value !== void 0 && field.value > 0) {
                        nextPlanExpireInputRef.current = String(dateUtils.secondsToDays(field.value));
                      }
                      const displayValue = nextPlanExpireInputRef.current !== "" ? nextPlanExpireInputRef.current : field.value !== null && field.value !== void 0 && field.value > 0 ? String(dateUtils.secondsToDays(field.value)) : "";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.nextPlanExpire", { defaultValue: "Expire" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            type: "text",
                            inputMode: "decimal",
                            value: displayValue,
                            onChange: (e) => {
                              const rawValue = e.target.value.trim();
                              nextPlanExpireInputRef.current = rawValue;
                              if (rawValue === "") {
                                field.onChange(0);
                                handleFieldChange("next_plan.expire", 0);
                                return;
                              }
                              const validNumberPattern = /^-?\d*\.?\d*$/;
                              if (validNumberPattern.test(rawValue)) {
                                if (rawValue.endsWith(".") && rawValue.length > 1) {
                                  const prevValue = field.value !== null && field.value !== void 0 ? field.value : 0;
                                  field.onChange(prevValue);
                                  handleFieldChange("next_plan.expire", prevValue);
                                } else if (rawValue === ".") {
                                  field.onChange(0);
                                  handleFieldChange("next_plan.expire", 0);
                                } else {
                                  const numValue = parseFloat(rawValue);
                                  if (!isNaN(numValue) && numValue >= 0) {
                                    if (numValue === 0) {
                                      field.onChange(0);
                                      handleFieldChange("next_plan.expire", 0);
                                    } else {
                                      const seconds = dateUtils.daysToSeconds(numValue);
                                      field.onChange(seconds);
                                      handleFieldChange("next_plan.expire", seconds);
                                    }
                                  }
                                }
                              }
                            },
                            onBlur: () => {
                              const rawValue = nextPlanExpireInputRef.current.trim();
                              if (rawValue === "" || rawValue === ".") {
                                nextPlanExpireInputRef.current = "";
                                field.onChange(0);
                                handleFieldChange("next_plan.expire", 0);
                              } else {
                                const numValue = parseFloat(rawValue);
                                if (!isNaN(numValue) && numValue >= 0) {
                                  const finalValue = numValue;
                                  nextPlanExpireInputRef.current = String(finalValue);
                                  const seconds = dateUtils.daysToSeconds(finalValue);
                                  field.onChange(seconds);
                                  handleFieldChange("next_plan.expire", seconds);
                                } else {
                                  nextPlanExpireInputRef.current = "";
                                  field.onChange(0);
                                  handleFieldChange("next_plan.expire", 0);
                                }
                              }
                            }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t("userDialog.days", { defaultValue: "Days" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] });
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "next_plan.data_limit",
                    render: ({ field }) => {
                      if (nextPlanDataLimitInputRef.current === "" && field.value !== null && field.value !== void 0 && field.value > 0) {
                        nextPlanDataLimitInputRef.current = String(Math.round(field.value / (1024 * 1024 * 1024)));
                      }
                      const displayValue = nextPlanDataLimitInputRef.current !== "" ? nextPlanDataLimitInputRef.current : field.value !== null && field.value !== void 0 && field.value > 0 ? String(Math.round(field.value / (1024 * 1024 * 1024))) : "";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.nextPlanDataLimit", { defaultValue: "Data Limit" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            type: "text",
                            inputMode: "decimal",
                            value: displayValue,
                            onChange: (e) => {
                              const rawValue = e.target.value.trim();
                              nextPlanDataLimitInputRef.current = rawValue;
                              if (rawValue === "") {
                                field.onChange(0);
                                handleFieldChange("next_plan.data_limit", 0);
                                return;
                              }
                              const validNumberPattern = /^-?\d*\.?\d*$/;
                              if (validNumberPattern.test(rawValue)) {
                                if (rawValue.endsWith(".") && rawValue.length > 1) {
                                  const prevValue = field.value !== null && field.value !== void 0 ? field.value : 0;
                                  field.onChange(prevValue);
                                  handleFieldChange("next_plan.data_limit", prevValue);
                                } else if (rawValue === ".") {
                                  field.onChange(0);
                                  handleFieldChange("next_plan.data_limit", 0);
                                } else {
                                  const numValue = parseFloat(rawValue);
                                  if (!isNaN(numValue) && numValue >= 0) {
                                    if (numValue === 0) {
                                      field.onChange(0);
                                      handleFieldChange("next_plan.data_limit", 0);
                                    } else {
                                      const bytesValue = numValue * 1024 * 1024 * 1024;
                                      field.onChange(bytesValue);
                                      handleFieldChange("next_plan.data_limit", bytesValue);
                                    }
                                  }
                                }
                              }
                            },
                            onBlur: () => {
                              const rawValue = nextPlanDataLimitInputRef.current.trim();
                              if (rawValue === "" || rawValue === ".") {
                                nextPlanDataLimitInputRef.current = "";
                                field.onChange(0);
                                handleFieldChange("next_plan.data_limit", 0);
                              } else {
                                const numValue = parseFloat(rawValue);
                                if (!isNaN(numValue) && numValue >= 0) {
                                  const finalValue = numValue;
                                  nextPlanDataLimitInputRef.current = String(finalValue);
                                  const bytesValue = finalValue * 1024 * 1024 * 1024;
                                  field.onChange(bytesValue);
                                  handleFieldChange("next_plan.data_limit", bytesValue);
                                } else {
                                  nextPlanDataLimitInputRef.current = "";
                                  field.onChange(0);
                                  handleFieldChange("next_plan.data_limit", 0);
                                }
                              }
                            }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "GB" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] });
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "next_plan.add_remaining_traffic",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex w-full flex-row items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.nextPlanAddRemainingTraffic", { defaultValue: "Add Remaining Traffic" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Switch,
                      {
                        checked: !!field.value,
                        onCheckedChange: (value) => {
                          field.onChange(value);
                          handleFieldChange("next_plan.add_remaining_traffic", value);
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full flex-1 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center border-b", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveTab(tab.id),
              className: `relative flex-1 px-3 py-2 text-sm font-medium transition-colors ${activeTab === tab.id ? "border-b-2 border-primary text-foreground" : "text-muted-foreground hover:text-foreground"}`,
              type: "button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(tab.label) })
              ] })
            },
            tab.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2", children: [
            activeTab === "templates" && (templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("Loading...", { defaultValue: "Loading..." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("userDialog.selectTemplate", { defaultValue: "Select Template" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedTemplateId ? String(selectedTemplateId) : "none", onValueChange: handleTemplateSelect, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("userDialog.selectTemplatePlaceholder", { defaultValue: "Choose a template" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "---" }),
                  templateOptions.map((template) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(template.id), children: template.name }, template.id))
                ] })
              ] }),
              selectedTemplateId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t("userDialog.selectedTemplates", {
                count: 1,
                defaultValue: "1 template selected"
              }) })
            ] })),
            activeTab === "groups" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "group_ids",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GroupsSelector,
                  {
                    control: form.control,
                    name: "group_ids",
                    onGroupsChange: (groups) => {
                      field.onChange(groups);
                      handleFieldChange("group_ids", groups);
                      if (groups.length > 0 && selectedTemplateId) {
                        setSelectedTemplateId(null);
                        clearTemplate();
                      }
                      const isValid = validateAllFields({ ...form.getValues(), group_ids: groups }, touchedFields);
                      setIsFormValid(isValid);
                    }
                  }
                )
              }
            )
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenChange(false);
            },
            children: t("cancel", { defaultValue: "Cancel" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoaderButton,
          {
            type: "submit",
            isLoading: loading,
            disabled: !isFormValid,
            loadingText: editingUser ? t("modifying") : t("creating"),
            onClick: (e) => {
              if (!isFormValid) {
                e.preventDefault();
                e.stopPropagation();
                const currentValues = form.getValues();
                if (selectedTemplateId) {
                  if (!currentValues.username || currentValues.username.length < 3) {
                    toast.error(t("validation.required", { field: t("username", { defaultValue: "Username" }) }));
                  }
                } else {
                  const missingFields = [];
                  if (!currentValues.username || currentValues.username.length < 3) {
                    missingFields.push(t("username", { defaultValue: "Username" }));
                  }
                  if (!currentValues.group_ids || !Array.isArray(currentValues.group_ids) || currentValues.group_ids.length === 0) {
                    missingFields.push(t("groups", { defaultValue: "Groups" }));
                  }
                  if (!currentValues.status) {
                    missingFields.push(t("status", { defaultValue: "Status" }));
                  }
                  if (currentValues.status === "on_hold" && (!currentValues.on_hold_expire_duration || currentValues.on_hold_expire_duration <= 0)) {
                    missingFields.push(t("userDialog.onHoldExpireDuration", { defaultValue: "On Hold Expire Duration" }));
                  }
                  if (missingFields.length > 0) {
                    toast.error(
                      t("validation.missingFields", {
                        fields: missingFields.join(", "),
                        defaultValue: "Please fill in the required fields: {{fields}}"
                      })
                    );
                  } else {
                    toast.error(t("validation.formInvalid", { defaultValue: "Form is invalid. Please check all fields." }));
                  }
                }
              }
            },
            children: editingUser ? t("modify", { defaultValue: "Modify" }) : t("create", { defaultValue: "Create" })
          }
        )
      ] })
    ] }) })
  ] }) });
}
export {
  ListStart as L,
  UserModal as U,
  getDefaultUserForm as g
};
//# sourceMappingURL=user-modal-DEiW_89A.js.map
