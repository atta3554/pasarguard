import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { P as PageHeader } from "./page-header-C5rLxqcj.js";
import { j as useAdmin, an as useGetSettings, ao as useModifySettings, c as cn, t as toast } from "./index-C_i3x-Gf.js";
import { c as useQueryClient } from "./react-query-DMC2nZO-.js";
import { a as useLocation, d as useNavigate, O as Outlet } from "./react-router-C8FEAJQh.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { S as Settings$1 } from "./settings-ByQKCi6u.js";
import { B as Bell, S as Send, M as MessageCircle, W as Webhook } from "./webhook-BUHC6rmw.js";
import { L as ListTodo } from "./list-todo-AlqsRBAQ.js";
import { D as Database } from "./database-Ym3sipoZ.js";
import { P as Palette } from "./palette-r4JKak9R.js";
import "./button-BOH66nN-.js";
import "./radix-3Azqn93X.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./plus-H2QM6nQ9.js";
import "./recharts-B0278qLa.js";
const SettingsContext = reactExports.createContext(void 0);
const useSettingsContext = () => {
  const context = reactExports.useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettingsContext must be used within SettingsProvider");
  }
  return context;
};
const sudoTabs = [
  { id: "general", label: "settings.general.title", icon: Settings$1, url: "/settings/general" },
  { id: "notifications", label: "settings.notifications.title", icon: Bell, url: "/settings/notifications" },
  { id: "subscriptions", label: "settings.subscriptions.title", icon: ListTodo, url: "/settings/subscriptions" },
  { id: "telegram", label: "settings.telegram.title", icon: Send, url: "/settings/telegram" },
  { id: "discord", label: "settings.discord.title", icon: MessageCircle, url: "/settings/discord" },
  { id: "webhook", label: "settings.webhook.title", icon: Webhook, url: "/settings/webhook" },
  { id: "cleanup", label: "settings.cleanup.title", icon: Database, url: "/settings/cleanup" },
  { id: "theme", label: "theme.title", icon: Palette, url: "/settings/theme" }
];
const nonSudoTabs = [{ id: "theme", label: "theme.title", icon: Palette, url: "/settings/theme" }];
function Settings() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { admin } = useAdmin();
  const is_sudo = admin?.is_sudo || false;
  const tabs = is_sudo ? sudoTabs : nonSudoTabs;
  const currentTab = tabs.find((tab) => location.pathname === tab.url);
  const activeTab = currentTab?.id || (is_sudo ? "general" : "theme");
  const queryClient = useQueryClient();
  const {
    data: settings,
    isLoading,
    error
  } = useGetSettings({
    query: {
      enabled: is_sudo
      // Only fetch for sudo admins
    }
  });
  const { mutate: updateSettings, isPending: isSaving } = useModifySettings({
    mutation: {
      onSuccess: () => {
        toast.success(t(`settings.${activeTab}.saveSuccess`));
        queryClient.invalidateQueries({ queryKey: ["/api/settings"] });
      },
      onError: (error2) => {
        let errorMessage = t(`settings.${activeTab}.saveFailed`);
        const extractErrorMessages = (obj, prefix = "") => {
          const messages = [];
          if (typeof obj === "string") {
            messages.push(prefix ? `${prefix}: ${obj}` : obj);
          } else if (Array.isArray(obj)) {
            obj.forEach((item, index) => {
              messages.push(...extractErrorMessages(item, `${prefix}[${index}]`));
            });
          } else if (obj && typeof obj === "object") {
            Object.entries(obj).forEach(([key, value]) => {
              const newPrefix = prefix ? `${prefix}.${key}` : key;
              messages.push(...extractErrorMessages(value, newPrefix));
            });
          }
          return messages;
        };
        if (error2?.data?.detail) {
          const detail = error2.data.detail;
          const extractedMessages = extractErrorMessages(detail);
          if (extractedMessages.length > 0) {
            errorMessage = extractedMessages.join(", ");
          }
        } else if (error2?.response?.data?.detail) {
          const detail = error2.response.data.detail;
          const extractedMessages = extractErrorMessages(detail);
          if (extractedMessages.length > 0) {
            errorMessage = extractedMessages.join(", ");
          }
        } else if (error2?.message) {
          errorMessage = error2.message;
        }
        toast.error(t(`settings.${activeTab}.saveFailed`), {
          description: errorMessage
        });
      }
    }
  });
  const handleUpdateSettings = reactExports.useCallback(
    (data) => {
      if (!is_sudo) return;
      let filteredData = {};
      switch (activeTab) {
        case "notifications":
          if (data.data) {
            filteredData = data;
          } else {
            filteredData = {
              data: {
                notification_enable: data.notification_enable,
                notification_settings: data.notification_settings
              }
            };
          }
          break;
        case "subscriptions":
          if (data.subscription) {
            filteredData = {
              data: {
                subscription: data.subscription
              }
            };
          } else {
            filteredData = data;
          }
          break;
        case "telegram":
          filteredData = { data };
          break;
        case "discord":
          filteredData = { data };
          break;
        case "webhook":
          filteredData = { data };
          break;
        case "cleanup":
          filteredData = { data };
          break;
        case "theme":
          return;
        default:
          filteredData = { data };
      }
      updateSettings(filteredData);
    },
    [is_sudo, activeTab, updateSettings]
  );
  const settingsContextValue = reactExports.useMemo(
    () => ({
      settings: is_sudo ? settings || {} : {},
      // Non-sudo admins don't need settings data
      isLoading: is_sudo ? isLoading : false,
      error: is_sudo ? error : null,
      updateSettings: is_sudo ? handleUpdateSettings : () => {
      },
      // No-op for non-sudo admins
      isSaving: is_sudo ? isSaving : false
    }),
    [is_sudo, settings, isLoading, error, isSaving, handleUpdateSettings]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsContext.Provider, { value: settingsContextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: t(`settings.${activeTab}.title`), description: "manageSettings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-hide flex overflow-x-auto border-b px-4 lg:flex-wrap", children: tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => navigate(tab.url),
            className: cn(
              "relative flex-shrink-0 whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors",
              isActive ? "border-b-2 border-primary text-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(tab.label) })
            ] })
          },
          tab.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] }) }) })
  ] }) });
}
export {
  Settings as default,
  useSettingsContext
};
//# sourceMappingURL=_dashboard.settings-B7r_UQvF.js.map
