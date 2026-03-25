import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { P as PageHeader, g as getDocsUrl } from "./page-header-C5rLxqcj.js";
import { j as useAdmin } from "./index-C_i3x-Gf.js";
import { P as PageTransition } from "./page-transition-B3rL2qkK.js";
import { d as useNavigate, a as useLocation, O as Outlet } from "./react-router-C8FEAJQh.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { U as UserPlus } from "./user-plus-DhrLAmNz.js";
import { U as UsersRound } from "./users-round-CIlaBSBa.js";
import { C as Calendar } from "./calendar-BM3jGkln.js";
import { A as ArrowUpDown } from "./arrow-up-down-Ba3C-UcI.js";
import { L as Lock } from "./lock-D6SFqMLT.js";
import "./button-BOH66nN-.js";
import "./radix-3Azqn93X.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./plus-H2QM6nQ9.js";
import "./react-query-DMC2nZO-.js";
import "./recharts-B0278qLa.js";
const sudoTabs = [
  { id: "create", label: "bulk.createUsers", icon: UserPlus, url: "/bulk" },
  { id: "groups", label: "bulk.groups", icon: UsersRound, url: "/bulk/groups" },
  { id: "expire", label: "bulk.expireDate", icon: Calendar, url: "/bulk/expire" },
  { id: "data", label: "bulk.dataLimit", icon: ArrowUpDown, url: "/bulk/data" },
  { id: "proxy", label: "bulk.proxySettings", icon: Lock, url: "/bulk/proxy" }
];
const nonSudoTabs = [{ id: "create", label: "bulk.createUsers", icon: UserPlus, url: "/bulk" }];
const BulkPage = () => {
  const { t } = useTranslation();
  const { admin } = useAdmin();
  const is_sudo = admin?.is_sudo || false;
  const tabs = is_sudo ? sudoTabs : nonSudoTabs;
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = reactExports.useState(tabs[0].id);
  reactExports.useEffect(() => {
    const currentTab = tabs.find((tab) => {
      if (tab.id === "create" && location.pathname === "/bulk/create") {
        return true;
      }
      return location.pathname === tab.url;
    });
    if (currentTab) {
      setActiveTab(currentTab.id);
      return;
    }
    setActiveTab(tabs[0].id);
    navigate(tabs[0].url, { replace: true });
  }, [location.pathname, navigate, tabs]);
  const getPageHeaderProps = () => {
    const pathToHeader = {
      "/bulk": { title: "bulk.createUsers", description: "bulk.createUsersDesc" },
      "/bulk/create": { title: "bulk.createUsers", description: "bulk.createUsersDesc" },
      "/bulk/groups": { title: "bulk.groups", description: "bulk.groupsDesc" },
      "/bulk/expire": { title: "bulk.expireDate", description: "bulk.expireDateDesc" },
      "/bulk/data": { title: "bulk.dataLimit", description: "bulk.dataLimitDesc" },
      "/bulk/proxy": { title: "bulk.proxySettings", description: "bulk.proxySettingsDesc" }
    };
    const header = pathToHeader[location.pathname] || pathToHeader["/bulk"];
    return {
      title: header.title,
      description: header.description
    };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { isContentTransition: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { ...getPageHeaderProps(), tutorialUrl: getDocsUrl(location.pathname) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-hide flex overflow-x-auto border-b px-4 lg:flex-wrap", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigate(tab.url),
          className: `relative flex-shrink-0 whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${activeTab === tab.id ? "border-b-2 border-primary text-foreground" : "text-muted-foreground hover:text-foreground"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(tab.label) })
          ] })
        },
        tab.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6 lg:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { isContentTransition: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) })
    ] })
  ] });
};
export {
  BulkPage as default
};
//# sourceMappingURL=_dashboard.bulk-BSXncKa4.js.map
