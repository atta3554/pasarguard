import { j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { B as Button } from "./button-BOH66nN-.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { u as useClipboard } from "./use-clipboard-C58gzIEw.js";
import { t as toast } from "./index-C_i3x-Gf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { I as Info } from "./info-DijVEiOM.js";
function VariablesPopover({ includeProtocolTransport = false, includeProfileTitle = false, side = "bottom", align = "start", sideOffset = 0 }) {
  const { t } = useTranslation();
  const { copy } = useClipboard();
  const handleCopy = async (text) => {
    await copy(text);
    toast.success(t("usersTable.copied"));
  };
  const VariableItem = ({ variable, translationKey }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "shrink-0 cursor-pointer rounded-sm bg-muted/50 px-1.5 py-0.5 text-[11px] transition-colors hover:bg-muted", onClick: () => handleCopy(variable), title: t("copy"), children: variable }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate text-[11px] text-muted-foreground", title: t(translationKey), children: t(translationKey) })
  ] });
  const variablesList = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    includeProfileTitle && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{PROFILE_TITLE}", translationKey: "hostsDialog.variables.profile_title" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{url}", translationKey: "hostsDialog.variables.url" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{SERVER_IP}", translationKey: "hostsDialog.variables.server_ip" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{SERVER_IPV6}", translationKey: "hostsDialog.variables.server_ipv6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{USERNAME}", translationKey: "hostsDialog.variables.username" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DATA_USAGE}", translationKey: "hostsDialog.variables.data_usage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DATA_LEFT}", translationKey: "hostsDialog.variables.data_left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DATA_LIMIT}", translationKey: "hostsDialog.variables.data_limit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DAYS_LEFT}", translationKey: "hostsDialog.variables.days_left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{EXPIRE_DATE}", translationKey: "hostsDialog.variables.expire_date" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{JALALI_EXPIRE_DATE}", translationKey: "hostsDialog.variables.jalali_expire_date" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{TIME_LEFT}", translationKey: "hostsDialog.variables.time_left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{STATUS_EMOJI}", translationKey: "hostsDialog.variables.status_emoji" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{USAGE_PERCENTAGE}", translationKey: "hostsDialog.variables.usage_percentage" }),
    includeProtocolTransport && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{PROTOCOL}", translationKey: "hostsDialog.variables.protocol" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{TRANSPORT}", translationKey: "hostsDialog.variables.transport" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{ADMIN_USERNAME}", translationKey: "hostsDialog.variables.admin_username" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-auto w-auto p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5 text-muted-foreground" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[280px] p-3 sm:w-[320px]", side, align, sideOffset, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-[12px] font-medium", children: t("hostsDialog.variables.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[60vh] space-y-1 overflow-y-auto pr-1", children: variablesList })
    ] }) })
  ] });
}
function VariablesList({ includeProtocolTransport = false, includeProfileTitle = false }) {
  const { t } = useTranslation();
  const { copy } = useClipboard();
  const handleCopy = async (text) => {
    await copy(text);
    toast.success(t("usersTable.copied"));
  };
  const VariableItem = ({ variable, translationKey }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "shrink-0 cursor-pointer rounded-sm bg-muted/50 px-1.5 py-0.5 text-[11px] transition-colors hover:bg-muted", onClick: () => handleCopy(variable), title: t("copy"), children: variable }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate text-[11px] text-muted-foreground", title: t(translationKey), children: t(translationKey) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    includeProfileTitle && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{PROFILE_TITLE}", translationKey: "hostsDialog.variables.profile_title" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{url}", translationKey: "hostsDialog.variables.url" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{SERVER_IP}", translationKey: "hostsDialog.variables.server_ip" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{SERVER_IPV6}", translationKey: "hostsDialog.variables.server_ipv6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{USERNAME}", translationKey: "hostsDialog.variables.username" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DATA_USAGE}", translationKey: "hostsDialog.variables.data_usage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{USAGE_PERCENTAGE}", translationKey: "hostsDialog.variables.usage_percentage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DATA_LEFT}", translationKey: "hostsDialog.variables.data_left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DATA_LIMIT}", translationKey: "hostsDialog.variables.data_limit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{DAYS_LEFT}", translationKey: "hostsDialog.variables.days_left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{EXPIRE_DATE}", translationKey: "hostsDialog.variables.expire_date" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{JALALI_EXPIRE_DATE}", translationKey: "hostsDialog.variables.jalali_expire_date" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{TIME_LEFT}", translationKey: "hostsDialog.variables.time_left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{STATUS_EMOJI}", translationKey: "hostsDialog.variables.status_emoji" }),
    includeProtocolTransport && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{PROTOCOL}", translationKey: "hostsDialog.variables.protocol" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{TRANSPORT}", translationKey: "hostsDialog.variables.transport" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariableItem, { variable: "{ADMIN_USERNAME}", translationKey: "hostsDialog.variables.admin_username" })
  ] });
}
export {
  VariablesPopover as V,
  VariablesList as a
};
//# sourceMappingURL=variables-popover-YfVYY7Ed.js.map
