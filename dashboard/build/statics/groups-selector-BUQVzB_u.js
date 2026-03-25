import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { b as FormItem, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { j as useAdmin, B as useGetGroupsSimple } from "./index-C_i3x-Gf.js";
import { f as useController } from "./types-CANcSf0A.js";
import { d as useNavigate } from "./react-router-C8FEAJQh.js";
import { u as useTranslation, T as Trans } from "./i18n-C0-IFBIH.js";
import { S as Search } from "./search-DGfkalst.js";
function GroupsSelector({ control, name, onGroupsChange, disabled = false }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const { admin } = useAdmin();
  const isSudo = admin?.is_sudo || false;
  const { field } = useController({
    control,
    name
  });
  const { data: groupsData, isLoading: groupsLoading } = useGetGroupsSimple({ all: true }, {
    query: {
      staleTime: 5 * 60 * 1e3,
      // 5 minutes
      gcTime: 10 * 60 * 1e3,
      // 10 minutes
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true
    }
  });
  const selectedGroups = field.value || [];
  const filteredGroups = (groupsData?.groups || []).filter((group) => group.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const handleSelectAll = (checked) => {
    const newGroups = checked ? filteredGroups.map((group) => group.id) : [];
    field.onChange(newGroups);
    onGroupsChange?.(newGroups);
  };
  const handleGroupChange = (checked, groupId) => {
    const newGroups = checked ? [...selectedGroups, groupId] : selectedGroups.filter((id) => id !== groupId);
    field.onChange(newGroups);
    onGroupsChange?.(newGroups);
  };
  if (groupsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FormItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full pl-8" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[200px] space-y-2 overflow-y-auto rounded-md border p-2", children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" })
      ] }, index)) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: t("search", { defaultValue: "Search" }) + " " + t("groups", { defaultValue: "groups" }),
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "pl-8",
            disabled
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-2 rounded-md border border-border p-3 hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: filteredGroups.length > 0 && selectedGroups.length === filteredGroups.length, onCheckedChange: handleSelectAll, disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t("selectAll", { defaultValue: "Select All" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[200px] space-y-2 overflow-y-auto rounded-md border p-2", children: filteredGroups.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-4 rounded-md border border-yellow-500 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-yellow-500", children: t("warning") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: isSudo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Trans,
          {
            i18nKey: "templates.groupsExistingWarning",
            components: {
              a: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/groups",
                  className: "font-bold text-primary hover:underline",
                  onClick: (e) => {
                    e.preventDefault();
                    navigate("/groups");
                  }
                }
              )
            }
          }
        ) : t("templates.nonSudoGroupsExistingWarning") })
      ] }) : filteredGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: selectedGroups.includes(group.id), onCheckedChange: (checked) => handleGroupChange(!!checked, group.id), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: group.name })
      ] }, group.id)) }),
      selectedGroups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t("userDialog.selectedGroups", {
        count: selectedGroups.length,
        defaultValue: "{{count}} groups selected"
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
  ] });
}
export {
  GroupsSelector as G
};
//# sourceMappingURL=groups-selector-BUQVzB_u.js.map
