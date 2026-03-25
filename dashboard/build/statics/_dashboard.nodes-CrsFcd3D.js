import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { P as PageHeader, g as getDocsUrl } from "./page-header-C5rLxqcj.js";
import { P as PageTransition } from "./page-transition-B3rL2qkK.js";
import { a as useLocation, d as useNavigate, O as Outlet } from "./react-router-C8FEAJQh.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { S as Share2 } from "./share-2-gtVcW0ku.js";
import { C as Cpu } from "./cpu-Cws81pTw.js";
import { F as FileText } from "./file-text-Bc5F7-8C.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import "./button-BOH66nN-.js";
import "./index-C_i3x-Gf.js";
import "./react-query-DMC2nZO-.js";
import "./recharts-B0278qLa.js";
import "./radix-3Azqn93X.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
const tabs = [
  { id: "nodes.title", label: "nodes.title", icon: Share2, url: "/nodes" },
  { id: "core", label: "core", icon: Cpu, url: "/nodes/cores" },
  { id: "nodes.logs.title", label: "nodes.logs.title", icon: FileText, url: "/nodes/logs" }
];
const Settings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = reactExports.useState(tabs[0].id);
  reactExports.useEffect(() => {
    const currentTab = tabs.find((tab) => location.pathname === tab.url);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);
  const getPageHeaderProps = () => {
    if (location.pathname === "/nodes/cores") {
      return {
        title: "settings.cores.title",
        description: "settings.cores.description",
        buttonIcon: Plus,
        buttonText: "settings.cores.addCore",
        onButtonClick: () => {
          const event = new CustomEvent("openCoreDialog");
          window.dispatchEvent(event);
        }
      };
    }
    if (location.pathname === "/nodes/logs") {
      return {
        title: "nodes.logs.title",
        description: "nodes.logs.description",
        buttonIcon: void 0,
        buttonText: void 0,
        onButtonClick: void 0
      };
    }
    return {
      title: "nodes.title",
      description: "manageNodes",
      buttonIcon: Plus,
      buttonText: "nodes.addNode",
      onButtonClick: () => {
        const event = new CustomEvent("openNodeDialog");
        window.dispatchEvent(event);
      }
    };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { isContentTransition: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { ...getPageHeaderProps(), tutorialUrl: getDocsUrl(location.pathname) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b px-4", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigate(tab.url),
          className: `relative px-3 py-2 text-sm font-medium transition-colors ${activeTab === tab.id ? "border-b-2 border-primary text-foreground" : "text-muted-foreground hover:text-foreground"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-4 w-4" }),
            tab.id === "core" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t(tab.label) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: t("settings.cores.title") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(tab.label) })
          ] })
        },
        tab.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { isContentTransition: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) })
    ] })
  ] });
};
export {
  Settings as default
};
//# sourceMappingURL=_dashboard.nodes-CrsFcd3D.js.map
