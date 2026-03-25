import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { P as PageHeader } from "./page-header-C5rLxqcj.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { J as useRemoveGroup, c as cn, t as toast, q as queryClient, a as useDirDetection, K as useModifyGroup, M as useGetAllGroups } from "./index-C_i3x-Gf.js";
import { C as Card, a as CardContent } from "./card-5ZQOfa_i.js";
import { B as Button } from "./button-BOH66nN-.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, e as DropdownMenuSeparator } from "./dropdown-menu-B4MHnVyu.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-Cj-SnnWR.js";
import { P as Power } from "./power-DV897bjg.js";
import { P as Pencil } from "./pencil-CGe897XJ.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import { G as GroupModal, g as groupFormDefaultValues, a as groupFormSchema } from "./group-form-Bv0qIaCU.js";
import { u as useForm } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { S as ScrollArea } from "./scroll-area-CNtShxK0.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { u as usePersistedViewMode, V as ViewToggle, L as ListGenerator } from "./use-persisted-view-mode-LYo0S7-V.js";
import { S as Search } from "./search-DGfkalst.js";
import { X } from "./x-C6aLLO-Y.js";
import { R as RefreshCw } from "./refresh-cw-BfHhC0kO.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import "./tooltip-BT7me4NQ.js";
import "./radix-3Azqn93X.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./react-router-C8FEAJQh.js";
import "./react-query-DMC2nZO-.js";
import "./recharts-B0278qLa.js";
import "./circle-CMQZw6eB.js";
import "./chevron-right-DkXHvvEa.js";
import "./check-ayw17ogi.js";
import "./dialog-BlwcMUxd.js";
import "./form-BMBIU5T8.js";
import "./label-D6GrbpFd.js";
import "./loader-button-C4leFJGU.js";
import "./command-AnChkD8Y.js";
import "./badge-kZEbyuDf.js";
import "./use-dynamic-errors-C0Fignr8.js";
import "./isEmptyObject-Ce3qPfrc.js";
import "./toggle-group-DO2v6P71.js";
import "./sortable.esm-BR-nak9Z.js";
import "./chevron-down-CYTM5oAI.js";
const DeleteAlertDialog$1 = ({ group, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("group.deleteConfirmation") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("group.deleteConfirm", { name: group.name }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { variant: "destructive", onClick: onConfirm, children: t("delete") })
    ] })
  ] }) });
};
function Group({ group, onEdit, onToggleStatus }) {
  const { t } = useTranslation();
  const [showDeleteDialog, setShowDeleteDialog] = reactExports.useState(false);
  const deleteGroupMutation = useRemoveGroup();
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    setShowDeleteDialog(true);
  };
  const handleConfirmDelete = async () => {
    try {
      await deleteGroupMutation.mutateAsync({ groupId: group.id });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("group.deleteSuccess", {
          name: group.name,
          defaultValue: 'Group "{name}" has been deleted successfully'
        })
      });
      setShowDeleteDialog(false);
      queryClient.invalidateQueries({ queryKey: ["/api/groups"] });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t("group.deleteFailed", {
          name: group.name,
          defaultValue: 'Failed to delete group "{name}"'
        })
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group relative cursor-pointer px-4 py-5 transition-colors hover:bg-accent", onClick: () => onEdit(group), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("min-h-2 min-w-2 flex-shrink-0 rounded-full", group.is_disabled ? "bg-red-500" : "bg-green-500") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 truncate font-medium", children: group.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 font-mono text-xs text-muted-foreground", children: [
              "(",
              group.inbound_tags?.length || 0,
              ")"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 truncate text-sm text-muted-foreground", children: [
          t("admins.total.users"),
          ": ",
          group.total_users || 0
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DropdownMenuItem,
            {
              onSelect: (e) => {
                e.stopPropagation();
                onToggleStatus(group);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "mr-2 h-4 w-4" }),
                group.is_disabled ? t("enable") : t("disable")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DropdownMenuItem,
            {
              onSelect: (e) => {
                e.stopPropagation();
                onEdit(group);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-2 h-4 w-4" }),
                t("edit")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: handleDeleteClick, className: "text-destructive", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
            t("delete")
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAlertDialog$1, { group, isOpen: showDeleteDialog, onClose: () => setShowDeleteDialog(false), onConfirm: handleConfirmDelete })
  ] });
}
const DeleteAlertDialog = ({ group, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: cn(dir === "rtl" && "sm:text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("group.deleteConfirmation") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("group.deleteConfirm", { name: group.name }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: cn(dir === "rtl" && "sm:flex-row-reverse sm:gap-x-2"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { variant: "destructive", onClick: onConfirm, children: t("delete") })
    ] })
  ] }) });
};
function GroupActionsMenu({ group, onEdit, onToggleStatus, className }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const removeGroupMutation = useRemoveGroup();
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    setDeleteDialogOpen(true);
  };
  const handleConfirmDelete = async () => {
    try {
      await removeGroupMutation.mutateAsync({
        groupId: group.id
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("group.deleteSuccess", {
          name: group.name,
          defaultValue: 'Group "{name}" has been deleted successfully'
        })
      });
      setDeleteDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/groups"] });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t("group.deleteFailed", {
          name: group.name,
          defaultValue: 'Failed to delete group "{name}"'
        })
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7 sm:h-8 sm:w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: dir === "rtl" ? "start" : "end", dir, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onEdit(group);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: cn("h-4 w-4 shrink-0", dir === "rtl" ? "ml-2" : "mr-2") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("edit") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onToggleStatus(group);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: cn("h-4 w-4 shrink-0", dir === "rtl" ? "ml-2" : "mr-2") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: group.is_disabled ? t("enable") : t("disable") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: handleDeleteClick, className: "text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: cn("h-4 w-4 shrink-0", dir === "rtl" ? "ml-2" : "mr-2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: t("delete") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAlertDialog, { group, isOpen: isDeleteDialogOpen, onClose: () => setDeleteDialogOpen(false), onConfirm: handleConfirmDelete })
  ] });
}
const useGroupsListColumns = ({ onEdit, onToggleStatus }) => {
  const { t } = useTranslation();
  return reactExports.useMemo(
    () => [
      {
        id: "name",
        header: t("name"),
        width: "3fr",
        cell: (group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-2 w-2 shrink-0 rounded-full", group.is_disabled ? "bg-red-500" : "bg-green-500") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: group.name })
        ] })
      },
      {
        id: "inbounds",
        header: t("inbounds", { defaultValue: t("inbound") }),
        width: "1fr",
        cell: (group) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-xs text-muted-foreground", children: group.inbound_tags?.length || 0 }),
        hideOnMobile: true
      },
      {
        id: "users",
        header: t("admins.total.users"),
        width: "1fr",
        cell: (group) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-xs text-muted-foreground", children: group.total_users || 0 }),
        hideOnMobile: true
      },
      {
        id: "actions",
        header: "",
        width: "64px",
        align: "end",
        hideOnMobile: true,
        cell: (group) => /* @__PURE__ */ jsxRuntimeExports.jsx(GroupActionsMenu, { group, onEdit, onToggleStatus })
      }
    ],
    [t, onEdit, onToggleStatus]
  );
};
function GroupsList({ isDialogOpen, onOpenChange }) {
  const [editingGroup, setEditingGroup] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [viewMode, setViewMode] = usePersistedViewMode("view-mode:groups");
  const { t } = useTranslation();
  const modifyGroupMutation = useModifyGroup();
  const dir = useDirDetection();
  const { data: groupsData, isLoading, isFetching, refetch } = useGetAllGroups({});
  const form = useForm({
    resolver: a(groupFormSchema),
    defaultValues: groupFormDefaultValues
  });
  const handleEdit = (group) => {
    setEditingGroup(group);
    form.reset({
      name: group.name,
      inbound_tags: group.inbound_tags || [],
      is_disabled: group.is_disabled
    });
    onOpenChange(true);
  };
  const handleToggleStatus = async (group) => {
    try {
      await modifyGroupMutation.mutateAsync({
        groupId: group.id,
        data: {
          name: group.name,
          inbound_tags: group.inbound_tags,
          is_disabled: !group.is_disabled
        }
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t(group.is_disabled ? "group.enableSuccess" : "group.disableSuccess", {
          name: group.name,
          defaultValue: `Group "{name}" has been ${group.is_disabled ? "enabled" : "disabled"} successfully`
        })
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/groups"]
      });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t(group.is_disabled ? "group.enableFailed" : "group.disableFailed", {
          name: group.name,
          defaultValue: `Failed to ${group.is_disabled ? "enable" : "disable"} group "{name}"`
        })
      });
    }
  };
  const filteredGroups = reactExports.useMemo(() => {
    if (!groupsData?.groups || !searchQuery.trim()) return groupsData?.groups;
    const query = searchQuery.toLowerCase().trim();
    return groupsData.groups.filter((group) => group.name?.toLowerCase().includes(query));
  }, [groupsData?.groups, searchQuery]);
  const handleRefresh = async () => {
    await refetch();
  };
  const listColumns = useGroupsListColumns({
    onEdit: handleEdit,
    onToggleStatus: handleToggleStatus
  });
  const isCurrentlyLoading = isLoading || isFetching && !groupsData;
  const isEmpty = !isCurrentlyLoading && (!filteredGroups || filteredGroups.length === 0) && !searchQuery.trim();
  const isSearchEmpty = !isCurrentlyLoading && (!filteredGroups || filteredGroups.length === 0) && searchQuery.trim() !== "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full flex-1 space-y-4", dir === "rtl" && "rtl"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "flex items-center gap-2 md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-0 flex-1 md:w-[calc(100%/3-10px)] md:flex-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: cn("absolute", dir === "rtl" ? "right-2" : "left-2", "top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("search"), value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: cn("pl-8 pr-10", dir === "rtl" && "pl-10 pr-8") }),
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchQuery(""), className: cn("absolute", dir === "rtl" ? "left-2" : "right-2", "top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon-md",
            variant: "ghost",
            onClick: handleRefresh,
            className: cn("h-9 w-9 rounded-lg border", isFetching && "opacity-70"),
            "aria-label": t("autoRefresh.refreshNow"),
            title: t("autoRefresh.refreshNow"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", isFetching && "animate-spin") })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ViewToggle, { value: viewMode, onChange: setViewMode })
      ] })
    ] }),
    isEmpty && !isCurrentlyLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("group.noGroups") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: t("group.noGroupsDescription") })
    ] }) }) }),
    isSearchEmpty && !isCurrentlyLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("noResults") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: t("group.noSearchResults") })
    ] }) }) }),
    (isCurrentlyLoading || !isEmpty && !isSearchEmpty) && /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { dir, className: "h-[calc(100vh-8rem)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ListGenerator,
      {
        data: filteredGroups || [],
        columns: listColumns,
        getRowId: (group) => group.id,
        isLoading: isCurrentlyLoading,
        loadingRows: 6,
        className: "gap-3",
        onRowClick: handleEdit,
        mode: viewMode,
        showEmptyState: false,
        renderGridItem: (group) => /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { group, onEdit: handleEdit, onToggleStatus: handleToggleStatus }),
        renderGridSkeleton: (i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "px-4 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 shrink-0 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 sm:w-32" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20 sm:w-24" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 shrink-0" })
        ] }) }, i)
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GroupModal,
      {
        isDialogOpen,
        onOpenChange: (open) => {
          if (!open) {
            setEditingGroup(null);
            form.reset(groupFormDefaultValues);
          }
          onOpenChange(open);
        },
        form,
        editingGroup: !!editingGroup,
        editingGroupId: editingGroup?.id
      }
    )
  ] });
}
function GroupsPage() {
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full transform-gpu animate-fade-in", style: { animationDuration: "400ms" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "groups", description: "manageGroups", buttonIcon: Plus, buttonText: "createGroup", onButtonClick: () => setIsDialogOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "100ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GroupsList, { isDialogOpen, onOpenChange: setIsDialogOpen }) }) })
  ] });
}
export {
  GroupsPage as default
};
//# sourceMappingURL=_dashboard.groups-DrGXm7W5.js.map
