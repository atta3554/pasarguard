import { j as jsxRuntimeExports, r as reactExports } from "./react-D6OUsQqF.js";
import { c as cn, u as useModifyCoreConfig, a as useDirDetection, b as useGetAllCores, t as toast, q as queryClient, d as useDeleteCoreConfig, e as useCreateCoreConfig } from "./index-C_i3x-Gf.js";
import { C as Card } from "./card-5ZQOfa_i.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-B4MHnVyu.js";
import { B as Button } from "./button-BOH66nN-.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-Cj-SnnWR.js";
import { P as Pencil } from "./pencil-CGe897XJ.js";
import { C as Copy } from "./copy-yeuAYUwv.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import CoreConfigModal from "./core-config-modal-BlAK5n8g.js";
import { c as coreConfigFormDefaultValues, a as coreConfigFormSchema } from "./core-config-form-B5I3BlVS.js";
import { u as useForm } from "./types-CANcSf0A.js";
import { a } from "./zod-JrdXrq0M.js";
import { S as ScrollArea } from "./scroll-area-CNtShxK0.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { u as usePersistedViewMode, V as ViewToggle, L as ListGenerator } from "./use-persisted-view-mode-LYo0S7-V.js";
import { S as Search } from "./search-DGfkalst.js";
import { X } from "./x-C6aLLO-Y.js";
import { R as RefreshCw } from "./refresh-cw-BfHhC0kO.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel } from "./alert-dialog-CesbshPy.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { c as useQueryClient } from "./react-query-DMC2nZO-.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
import "./radix-3Azqn93X.js";
import "./circle-CMQZw6eB.js";
import "./chevron-right-DkXHvvEa.js";
import "./check-ayw17ogi.js";
import "./copy-button-w-Carjcl.js";
import "./tooltip-BT7me4NQ.js";
import "./use-clipboard-C58gzIEw.js";
import "./link-DcyOR6Xn.js";
import "./checkbox-v1bxVO-h.js";
import "./dialog-BlwcMUxd.js";
import "./form-BMBIU5T8.js";
import "./label-D6GrbpFd.js";
import "./popover-BXLf6-bP.js";
import "./select-BbTZrRYf.js";
import "./chevron-down-CYTM5oAI.js";
import "./tabs-GailCAaU.js";
import "./isEmptyObject-Ce3qPfrc.js";
import "./debounce-DDhqqvFm.js";
import "./shield-B15rcL-H.js";
import "./info-DijVEiOM.js";
import "./sparkles-Dy4LjvEF.js";
import "./toggle-group-DO2v6P71.js";
import "./sortable.esm-BR-nak9Z.js";
function CoreActionsMenu({ core, onEdit, onDuplicate, onDelete, className }) {
  const { t } = useTranslation();
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    if (onDelete) {
      onDelete();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        DropdownMenuItem,
        {
          onSelect: (e) => {
            e.stopPropagation();
            onEdit(core);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-2 h-4 w-4" }),
            t("edit")
          ]
        }
      ),
      onDuplicate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        DropdownMenuItem,
        {
          onSelect: (e) => {
            e.stopPropagation();
            onDuplicate();
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "mr-2 h-4 w-4" }),
            t("duplicate")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: handleDeleteClick, className: "text-destructive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
        t("delete")
      ] })
    ] })
  ] }) });
}
function Core({ core, onEdit, onDuplicate, onDelete }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group relative h-full cursor-pointer px-4 py-5 transition-colors hover:bg-accent", onClick: () => onEdit(core), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("min-h-2 min-w-2 rounded-full", "bg-green-500") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: core.name })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoreActionsMenu, { core, onEdit, onDuplicate, onDelete })
  ] }) });
}
const useCoresListColumns = ({ onEdit, onDuplicate, onDelete }) => {
  const { t } = useTranslation();
  return reactExports.useMemo(
    () => [
      {
        id: "name",
        header: t("name", { defaultValue: "Name" }),
        width: "2.5fr",
        cell: (core) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 shrink-0 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: core.name })
        ] })
      },
      {
        id: "actions",
        header: "",
        width: "24px",
        align: "end",
        hideOnMobile: false,
        cell: (core) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CoreActionsMenu,
          {
            core,
            onEdit,
            onDuplicate: onDuplicate ? () => onDuplicate(core.id) : void 0,
            onDelete: onDelete ? () => onDelete(core.name, core.id) : void 0
          }
        )
      }
    ],
    [t, onEdit, onDuplicate, onDelete]
  );
};
function Cores({ isDialogOpen, onOpenChange, cores, onEditCore, onDuplicateCore, onDeleteCore }) {
  const [editingCore, setEditingCore] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [viewMode, setViewMode] = usePersistedViewMode("view-mode:cores");
  const { t } = useTranslation();
  const modifyCoreMutation = useModifyCoreConfig();
  const dir = useDirDetection();
  const { data: coresData, isLoading, isFetching, refetch } = useGetAllCores({});
  reactExports.useEffect(() => {
    const handleOpenDialog = () => onOpenChange?.(true);
    window.addEventListener("openCoreDialog", handleOpenDialog);
    return () => window.removeEventListener("openCoreDialog", handleOpenDialog);
  }, [onOpenChange]);
  const form = useForm({
    resolver: a(coreConfigFormSchema),
    defaultValues: coreConfigFormDefaultValues
  });
  const handleEdit = (core) => {
    setEditingCore(core);
    form.reset({
      name: core.name,
      config: JSON.stringify(core.config, null, 2),
      excluded_inbound_ids: core.exclude_inbound_tags ? core.exclude_inbound_tags.join(",").split(",").map((id) => id.trim()).filter((id) => id.trim() !== "") : []
    });
    onOpenChange?.(true);
  };
  const handleToggleStatus = async (core) => {
    try {
      await modifyCoreMutation.mutateAsync({
        coreId: core.id,
        data: {
          name: core.name,
          config: core.config,
          exclude_inbound_tags: core.exclude_inbound_tags
        },
        params: {
          restart_nodes: true
        }
      });
      toast.success(
        t("core.toggleSuccess", {
          name: core.name
        })
      );
      queryClient.invalidateQueries({
        queryKey: ["/api/cores"]
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/cores/simple"]
      });
    } catch (error) {
      toast.error(
        t("core.toggleFailed", {
          name: core.name
        })
      );
    }
  };
  const handleModalClose = (open) => {
    if (!open) {
      setEditingCore(null);
      form.reset(coreConfigFormDefaultValues);
      refetch();
    }
    onOpenChange?.(open);
  };
  const coresList = cores || coresData?.cores || [];
  const filteredCores = reactExports.useMemo(() => {
    if (!searchQuery.trim()) return coresList;
    const query = searchQuery.toLowerCase().trim();
    return coresList.filter((core) => core.name?.toLowerCase().includes(query));
  }, [coresList, searchQuery]);
  const handleRefreshClick = async () => {
    await refetch();
  };
  const handleRowEdit = (core) => {
    if (onEditCore) {
      onEditCore(core.id);
      return;
    }
    handleEdit(core);
  };
  const listColumns = useCoresListColumns({
    onEdit: handleRowEdit,
    onDuplicate: onDuplicateCore,
    onDelete: onDeleteCore
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex w-full flex-col gap-4 pt-4", dir === "rtl" && "rtl"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-0 flex-1 md:w-[calc(100%/3-10px)] md:flex-none", dir, children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { dir, className: "h-[calc(100vh-8rem)]", children: (isLoading || filteredCores.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ListGenerator,
      {
        data: filteredCores,
        columns: listColumns,
        getRowId: (core) => core.id,
        isLoading,
        loadingRows: 6,
        className: "gap-3",
        onRowClick: handleRowEdit,
        mode: viewMode,
        showEmptyState: false,
        renderGridItem: (core) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Core,
          {
            core,
            onEdit: onEditCore ? () => onEditCore(core.id) : () => handleEdit(core),
            onToggleStatus: handleToggleStatus,
            onDuplicate: onDuplicateCore ? () => onDuplicateCore(core.id) : void 0,
            onDelete: onDeleteCore ? () => onDeleteCore(core.name, core.id) : void 0
          }
        ),
        renderGridSkeleton: (i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "px-4 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-2 w-2 shrink-0 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 sm:w-32" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8" }) })
        ] }) }, i)
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoreConfigModal, { isDialogOpen: !!isDialogOpen, onOpenChange: handleModalClose, form, editingCore: !!editingCore, editingCoreId: editingCore?.id })
  ] });
}
const defaultConfig = {
  log: {
    loglevel: "error"
  },
  inbounds: [
    {
      tag: "inbound Name",
      listen: "0.0.0.0",
      port: 1122,
      protocol: "vless",
      settings: {
        clients: [],
        decryption: "none"
      },
      streamSettings: {
        network: "tcp",
        tcpSettings: {},
        security: "none"
      },
      sniffing: {}
    }
  ]
};
function CoreSettings() {
  const { data: coresData } = useGetAllCores({});
  const queryClient2 = useQueryClient();
  const deleteCoreConfig = useDeleteCoreConfig();
  const createCoreMutation = useCreateCoreConfig();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingCoreId, setEditingCoreId] = reactExports.useState(void 0);
  const [deleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [coreToDelete, setCoreToDelete] = reactExports.useState(null);
  const [coreIdToDelete, setCoreIdToDelete] = reactExports.useState(null);
  const coreConfigForm = useForm({
    resolver: a(coreConfigFormSchema),
    defaultValues: {
      name: "",
      config: JSON.stringify(defaultConfig, null, 2),
      excluded_inbound_ids: [],
      fallback_id: [],
      restart_nodes: true
    }
  });
  const handleEditCore = reactExports.useCallback(
    (coreId) => {
      const numericCoreId = Number(coreId);
      setEditingCoreId(numericCoreId);
      const coreToEdit = coresData?.cores?.find((core) => core.id === numericCoreId);
      if (coreToEdit) {
        const excludedInboundIds = coreToEdit.exclude_inbound_tags || [];
        const fallbackIds = coreToEdit.fallbacks_inbound_tags || [];
        coreConfigForm.reset({
          name: coreToEdit.name,
          config: JSON.stringify(coreToEdit.config, null, 2),
          excluded_inbound_ids: excludedInboundIds,
          fallback_id: fallbackIds,
          restart_nodes: true
        });
      } else {
        coreConfigForm.reset({
          name: "Core Name",
          config: JSON.stringify(defaultConfig, null, 2),
          excluded_inbound_ids: [],
          fallback_id: [],
          restart_nodes: true
        });
      }
      setIsModalOpen(true);
    },
    [coresData?.cores, coreConfigForm]
  );
  const handleDuplicateCore = reactExports.useCallback(
    (coreId) => {
      const numericCoreId = Number(coreId);
      const coreToDuplicate = coresData?.cores?.find((core) => core.id === numericCoreId);
      if (!coreToDuplicate) {
        toast.error(t("settings.cores.coreNotFound"));
        return;
      }
      try {
        const newCore = {
          ...coreToDuplicate,
          id: void 0,
          name: `${coreToDuplicate.name} (Copy)`
        };
        createCoreMutation.mutateAsync(
          {
            data: newCore
          },
          {
            onSuccess: () => {
              toast.success(
                t("settings.cores.duplicateSuccess", {
                  name: coreToDuplicate.name
                })
              );
              queryClient2.invalidateQueries({ queryKey: ["/api/cores"] });
              queryClient2.invalidateQueries({ queryKey: ["/api/cores/simple"] });
            },
            onError: (error) => {
              toast.error(
                error.message || t("settings.cores.duplicateFailed", {
                  name: coreToDuplicate.name
                })
              );
            }
          }
        );
      } catch (error) {
        toast.error(
          t("settings.cores.duplicateFailed", {
            name: coreToDuplicate.name
          })
        );
      }
    },
    [coresData?.cores, createCoreMutation, queryClient2, t]
  );
  const handleDeleteCore = reactExports.useCallback((coreName, coreId) => {
    setCoreToDelete(coreName);
    setCoreIdToDelete(coreId);
    setDeleteDialogOpen(true);
  }, []);
  const confirmDeleteCore = reactExports.useCallback(() => {
    if (!coreToDelete || coreIdToDelete === null) return;
    deleteCoreConfig.mutate(
      {
        coreId: coreIdToDelete,
        params: { restart_nodes: true }
      },
      {
        onSuccess: () => {
          toast.success(
            t("settings.cores.deleteSuccess", {
              name: `Core ${coreToDelete}`
            })
          );
          setDeleteDialogOpen(false);
          setCoreToDelete(null);
          queryClient2.invalidateQueries({ queryKey: ["/api/cores"] });
          queryClient2.invalidateQueries({ queryKey: ["/api/cores/simple"] });
        },
        onError: (error) => {
          let errorMessage = t("settings.cores.deleteFailed", {
            name: `Core ${coreToDelete}`
          });
          const responseData = error?.response?._data || error?.response?.data || error?.data;
          if (responseData?.detail) {
            if (typeof responseData.detail === "string") {
              errorMessage = responseData.detail;
            } else if (Array.isArray(responseData.detail) && responseData.detail.length > 0) {
              errorMessage = responseData.detail[0]?.msg || responseData.detail[0] || errorMessage;
            }
          } else if (error?.message) {
            errorMessage = error.message;
          }
          toast.error(errorMessage);
          setDeleteDialogOpen(false);
          setCoreToDelete(null);
        }
      }
    );
  }, [coreToDelete, coreIdToDelete, deleteCoreConfig, queryClient2, t]);
  const handleModalClose = reactExports.useCallback(() => {
    setIsModalOpen(false);
    setEditingCoreId(void 0);
    coreConfigForm.reset();
  }, [coreConfigForm]);
  const handleDeleteDialogClose = reactExports.useCallback(() => {
    setDeleteDialogOpen(false);
    setCoreToDelete(null);
    setCoreIdToDelete(null);
  }, []);
  const cores = reactExports.useMemo(() => coresData?.cores ?? [], [coresData?.cores]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cores, { cores, onEditCore: handleEditCore, onDuplicateCore: handleDuplicateCore, onDeleteCore: handleDeleteCore, isDialogOpen: isModalOpen, onOpenChange: setIsModalOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoreConfigModal, { isDialogOpen: isModalOpen, onOpenChange: handleModalClose, form: coreConfigForm, editingCore: !!editingCoreId, editingCoreId }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: deleteDialogOpen, onOpenChange: handleDeleteDialogClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("settings.cores.delete") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dangerouslySetInnerHTML: { __html: t("core.deleteConfirm", { name: coreToDelete }) } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: handleDeleteDialogClose, disabled: deleteCoreConfig.isPending, children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderButton, { variant: "destructive", onClick: confirmDeleteCore, disabled: deleteCoreConfig.isPending, isLoading: deleteCoreConfig.isPending, loadingText: t("removing"), children: t("delete") })
      ] })
    ] }) })
  ] });
}
export {
  CoreSettings as default
};
//# sourceMappingURL=_dashboard.nodes.cores-BxOZE-2Z.js.map
