import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { C as Card, c as CardTitle, d as CardDescription, a as CardContent } from "./card-5ZQOfa_i.js";
import { f as createLucideIcon, a as useDirDetection, ay as useRemoveUserTemplate, c as cn, t as toast, q as queryClient, az as createUserTemplate, z as useGetUserTemplates, aA as useModifyUserTemplate } from "./index-C_i3x-Gf.js";
import { f as formatBytes } from "./formatByte-CB667FGk.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, e as DropdownMenuSeparator } from "./dropdown-menu-B4MHnVyu.js";
import { B as Button } from "./button-BOH66nN-.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-Cj-SnnWR.js";
import { P as Power } from "./power-DV897bjg.js";
import { P as Pen } from "./pen-YKcucSn2.js";
import { C as Copy } from "./copy-yeuAYUwv.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import { P as PageHeader } from "./page-header-C5rLxqcj.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { U as UserTemplateModal, u as userTemplateFormDefaultValues, a as userTemplateFormSchema } from "./user-template-form-I1TvMM0u.js";
import { u as useForm } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { u as usePersistedViewMode, V as ViewToggle, L as ListGenerator } from "./use-persisted-view-mode-LYo0S7-V.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import { S as Search } from "./search-DGfkalst.js";
import { X } from "./x-C6aLLO-Y.js";
import { R as RefreshCw } from "./refresh-cw-BfHhC0kO.js";
import "./react-query-DMC2nZO-.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
import "./radix-3Azqn93X.js";
import "./circle-CMQZw6eB.js";
import "./chevron-right-DkXHvvEa.js";
import "./check-ayw17ogi.js";
import "./tooltip-BT7me4NQ.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./groups-selector-BUQVzB_u.js";
import "./checkbox-v1bxVO-h.js";
import "./form-BMBIU5T8.js";
import "./label-D6GrbpFd.js";
import "./dialog-BlwcMUxd.js";
import "./loader-button-C4leFJGU.js";
import "./select-BbTZrRYf.js";
import "./chevron-down-CYTM5oAI.js";
import "./switch-BtwGcSyQ.js";
import "./use-dynamic-errors-C0Fignr8.js";
import "./isEmptyObject-Ce3qPfrc.js";
import "./toggle-group-DO2v6P71.js";
import "./sortable.esm-BR-nak9Z.js";
const Infinity = createLucideIcon("Infinity", [
  [
    "path",
    {
      d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
      key: "1z0uae"
    }
  ]
]);
const DeleteAlertDialog = ({ userTemplate, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: cn(dir === "rtl" && "sm:text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("templates.deleteUserTemplateTitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("templates.deleteUserTemplatePrompt", { name: userTemplate.name }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: cn(dir === "rtl" && "sm:flex-row-reverse sm:gap-x-2"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { variant: "destructive", onClick: onConfirm, children: t("remove") })
    ] })
  ] }) });
};
function UserTemplateActionsMenu({ template, onEdit, onToggleStatus, className }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const removeUserTemplateMutation = useRemoveUserTemplate();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDeleteDialogOpen(true);
  };
  const handleConfirmDelete = async () => {
    try {
      await removeUserTemplateMutation.mutateAsync({
        templateId: template.id
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("templates.deleteSuccess", {
          name: template.name,
          defaultValue: "Template «{name}» has been deleted successfully"
        })
      });
      setDeleteDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/user_templates"] });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t("templates.deleteFailed", {
          name: template.name,
          defaultValue: "Failed to delete template «{name}»"
        })
      });
    }
  };
  const handleDuplicate = async () => {
    try {
      const newTemplate = {
        ...template,
        name: `${template.name} (copy)`
      };
      await createUserTemplate(newTemplate);
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("templates.duplicateSuccess", {
          name: template.name,
          defaultValue: "Template «{name}» has been duplicated successfully"
        })
      });
      queryClient.invalidateQueries({ queryKey: ["/api/user_templates"] });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t("templates.duplicateFailed", {
          name: template.name,
          defaultValue: "Failed to duplicate template «{name}»"
        })
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(className), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "icon", className: "template-dropdown-menu", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Template Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: dir === "rtl" ? "end" : "start", className: "template-dropdown-menu", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onToggleStatus(template);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "mr-2 h-4 w-4" }),
              template.is_disabled ? t("enable") : t("disable")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.stopPropagation();
              onEdit(template);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("edit") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            dir,
            className: "template-dropdown-menu flex items-center",
            onSelect: (e) => {
              e.stopPropagation();
              handleDuplicate();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("duplicate") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            dir,
            className: "template-dropdown-menu flex items-center !text-red-500",
            onSelect: (e) => {
              e.stopPropagation();
              handleDeleteClick(e);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("delete") })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAlertDialog, { userTemplate: template, isOpen: isDeleteDialogOpen, onClose: () => setDeleteDialogOpen(false), onConfirm: handleConfirmDelete })
  ] });
}
const UserTemplate = ({
  template,
  onEdit,
  onToggleStatus
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group rounded-lg px-5 py-6 transition-colors hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 cursor-pointer", onClick: () => onEdit(template), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("min-h-2 min-w-2 rounded-full", template.is_disabled ? "bg-red-500" : "bg-green-500") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: template.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-col gap-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-x-1", children: [
          t("userDialog.dataLimit"),
          ":",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: !template.data_limit || template.data_limit === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "h-4 w-4" }) : formatBytes(template.data_limit ? template.data_limit : 0) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-x-1", children: [
          t("expire"),
          ":",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: !template.expire_duration || template.expire_duration === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "h-4 w-4" }) : `${template.expire_duration / 60 / 60 / 24} ${t("dateInfo.day")}` })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UserTemplateActionsMenu, { template, onEdit, onToggleStatus })
  ] }) });
};
const useUserTemplatesListColumns = ({ onEdit, onToggleStatus }) => {
  const { t } = useTranslation();
  return reactExports.useMemo(
    () => [
      {
        id: "name",
        header: t("name", { defaultValue: "Name" }),
        width: "3fr",
        cell: (template) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-2 w-2 shrink-0 rounded-full", template.is_disabled ? "bg-red-500" : "bg-green-500") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: template.name })
        ] })
      },
      {
        id: "dataLimit",
        header: t("userDialog.dataLimit", { defaultValue: "Data Limit" }),
        width: "1fr",
        cell: (template) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-xs text-muted-foreground", children: !template.data_limit || template.data_limit === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "inline h-4 w-4" }) : formatBytes(template.data_limit) }),
        hideOnMobile: true
      },
      {
        id: "expire",
        header: t("expire", { defaultValue: "Expire" }),
        width: "1fr",
        cell: (template) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: !template.expire_duration || template.expire_duration === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "inline h-4 w-4" }) : `${template.expire_duration / 60 / 60 / 24} ${t("dateInfo.day")}` }),
        hideOnMobile: true
      },
      {
        id: "actions",
        header: "",
        width: "64px",
        align: "end",
        hideOnMobile: true,
        cell: (template) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserTemplateActionsMenu, { template, onEdit, onToggleStatus })
      }
    ],
    [t, onEdit, onToggleStatus]
  );
};
function UserTemplates() {
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [editingUserTemplate, setEditingUserTemplate] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [viewMode, setViewMode] = usePersistedViewMode("view-mode:templates");
  const { data: userTemplates, isLoading, isFetching, refetch } = useGetUserTemplates();
  const form = useForm({
    resolver: a(userTemplateFormSchema),
    defaultValues: userTemplateFormDefaultValues
  });
  const { t } = useTranslation();
  const modifyUserTemplateMutation = useModifyUserTemplate();
  const dir = useDirDetection();
  const handleEdit = (userTemplate) => {
    setEditingUserTemplate(userTemplate);
    form.reset({
      name: userTemplate.name || void 0,
      status: userTemplate.status || void 0,
      data_limit: userTemplate.data_limit || void 0,
      expire_duration: userTemplate.expire_duration || void 0,
      method: userTemplate.extra_settings?.method || void 0,
      flow: userTemplate.extra_settings?.flow || void 0,
      groups: userTemplate.group_ids || void 0,
      username_prefix: userTemplate.username_prefix || void 0,
      username_suffix: userTemplate.username_suffix || void 0,
      on_hold_timeout: typeof userTemplate.on_hold_timeout === "number" ? userTemplate.on_hold_timeout : void 0,
      data_limit_reset_strategy: userTemplate.data_limit_reset_strategy || void 0,
      reset_usages: userTemplate.reset_usages || false
    });
    setIsDialogOpen(true);
  };
  const handleToggleStatus = async (template) => {
    try {
      await modifyUserTemplateMutation.mutateAsync({
        templateId: template.id,
        data: {
          name: template.name,
          data_limit: template.data_limit,
          expire_duration: template.expire_duration,
          username_prefix: template.username_prefix,
          username_suffix: template.username_suffix,
          group_ids: template.group_ids,
          status: template.status,
          reset_usages: template.reset_usages,
          is_disabled: !template.is_disabled,
          data_limit_reset_strategy: template.data_limit_reset_strategy,
          on_hold_timeout: template.on_hold_timeout,
          extra_settings: template.extra_settings
        }
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t(template.is_disabled ? "templates.enableSuccess" : "templates.disableSuccess", {
          name: template.name,
          defaultValue: `Template "{name}" has been ${template.is_disabled ? "enabled" : "disabled"} successfully`
        })
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/user_templates"]
      });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t(template.is_disabled ? "templates.enableFailed" : "templates.disableFailed", {
          name: template.name,
          defaultValue: `Failed to ${template.is_disabled ? "enable" : "disable"} Template "{name}"`
        })
      });
    }
  };
  const filteredTemplates = reactExports.useMemo(() => {
    if (!userTemplates || !searchQuery.trim()) return userTemplates;
    const query = searchQuery.toLowerCase().trim();
    return userTemplates.filter(
      (template) => template.name?.toLowerCase().includes(query) || template.username_prefix?.toLowerCase().includes(query) || template.username_suffix?.toLowerCase().includes(query)
    );
  }, [userTemplates, searchQuery]);
  const listColumns = useUserTemplatesListColumns({ onEdit: handleEdit, onToggleStatus: handleToggleStatus });
  const handleRefreshClick = async () => {
    await refetch();
  };
  const isCurrentlyLoading = isLoading || isFetching && !userTemplates;
  const isEmpty = !isCurrentlyLoading && (!filteredTemplates || filteredTemplates.length === 0) && !searchQuery.trim();
  const isSearchEmpty = !isCurrentlyLoading && (!filteredTemplates || filteredTemplates.length === 0) && searchQuery.trim() !== "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full transform-gpu animate-fade-in", style: { animationDuration: "400ms" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PageHeader,
        {
          title: "templates.title",
          description: "templates.description",
          buttonIcon: Plus,
          buttonText: "templates.addTemplate",
          onButtonClick: () => {
            setIsDialogOpen(true);
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex-1 space-y-4 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "flex items-center gap-2 pt-4 md:gap-4", children: [
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
              onClick: handleRefreshClick,
              className: cn("h-9 w-9 rounded-lg border", isFetching && "opacity-70"),
              "aria-label": t("autoRefresh.refreshNow"),
              title: t("autoRefresh.refreshNow"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", isFetching && "animate-spin") })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ViewToggle, { value: viewMode, onChange: setViewMode })
        ] })
      ] }),
      (isCurrentlyLoading || filteredTemplates && filteredTemplates.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListGenerator,
        {
          data: filteredTemplates || [],
          columns: listColumns,
          getRowId: (template) => template.id,
          isLoading: isCurrentlyLoading,
          loadingRows: 6,
          className: "gap-3",
          mode: viewMode,
          showEmptyState: false,
          gridClassName: "transform-gpu animate-slide-up",
          gridStyle: { animationDuration: "500ms", animationDelay: "100ms", animationFillMode: "both" },
          renderGridItem: (template) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserTemplate, { onEdit: handleEdit, template, onToggleStatus: handleToggleStatus }),
          renderGridSkeleton: (i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "px-4 py-5 sm:px-5 sm:py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-2 w-2 shrink-0 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 sm:w-32" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32 sm:w-40 md:w-48" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28 sm:w-36 md:w-40" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 shrink-0" })
          ] }) }, i)
        }
      ),
      isEmpty && !isCurrentlyLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("templates.noTemplates") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: t("templates.noTemplatesDescription") })
      ] }) }) }),
      isSearchEmpty && !isCurrentlyLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("noResults") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: t("templates.noSearchResults") })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UserTemplateModal,
      {
        isDialogOpen,
        onOpenChange: (open) => {
          if (!open) {
            setEditingUserTemplate(null);
            form.reset(userTemplateFormDefaultValues);
          }
          setIsDialogOpen(open);
        },
        form,
        editingUserTemplate: !!editingUserTemplate,
        editingUserTemplateId: editingUserTemplate?.id
      }
    )
  ] });
}
export {
  UserTemplates as default
};
//# sourceMappingURL=_dashboard.templates-PuETvtBp.js.map
